import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [

  { path:'cliente', component: ClienteComponent },
  { path:'produto', component: ProdutoComponent },
  { path:'loja', component: LojaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
