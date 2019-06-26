import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
  { 
    path: 'sistema',    
    canActivate: [AuthGuard], 
    children: [
      { path: 'cliente', component: ClienteComponent},
      { path: 'produto', component: ProdutoComponent},
      { path:'loja', component: LojaComponent }
    ]
  }, 

  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
