import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/environments/Entity/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoserviceService {

constructor(private http: HttpClient) { }

listarTodos():Observable<any>{
  return this.http.get('https://localhost:5001/Produto');
}

alterar(id:any,produto: Produto): Observable<any>{
  return this.http.put('https://localhost:5001/Produto/'.concat(id),produto);
}

deletar(id:any):Observable<any>{
  return this.http.delete('https://localhost:5001/Produto/'.concat(id));
}

cadastrar(produto:Produto):Observable<any>{
  return this.http.post('https://localhost:5001/Produto',produto);
}
buscar(id:any):Observable<any>{
  return this.http.get('https://localhost:5001/Produto/'.concat(id))
}
}
