import { ProdutoserviceService } from './../service/Produtoservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoComponent } from 'src/produto/produto.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      ProdutoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FormsModule,HttpClientModule,ProdutoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
