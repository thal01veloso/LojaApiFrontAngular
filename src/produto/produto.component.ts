import { Observable } from 'rxjs';
import { ProdutoserviceService } from './../service/Produtoservice.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/environments/Entity/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Array<any> = new Array();
  produto: Produto = new Produto;
  constructor(private service:ProdutoserviceService) { }

  ngOnInit() {
    this.listarTodosProdutos();
  }

  listarTodosProdutos(){
    this.service.listarTodos().subscribe(produtos=>{
      this.produtos=produtos
    }, err=>{
      alert("Erro ao listar produtos")
    })
  }
  alterarProduto(id:number){
    this.service.alterar(id, this.produto).subscribe(produto=>{
      this.produto= new Produto();
      this.listarTodosProdutos();
      }, err=>{
        alert("Erro na alteração do produto")
      })
  }
  cadastrarProduto(){
    this.service.cadastrar(this.produto).subscribe(produto=>{
      this.produto = new Produto();
      this.listarTodosProdutos();
    }, err=>{
      alert("Produto não cadastrado")
    })
  }

  deletarProduto(id:number){
    this.service.deletar(id).subscribe(produto=>{
      this.produto = new Produto();
      this.listarTodosProdutos();
    }, err=>{
      alert("Erro ao deletar produto")
    })
  }
  buscarProdutoId(){
    this.service.buscar((<HTMLInputElement>document.getElementById("id")).value).subscribe(produto=>{
      this.produto=produto;
      console.log(produto);
    }, err=>{
      alert("não existe esse produto cadastrado")
    })
  }

}
