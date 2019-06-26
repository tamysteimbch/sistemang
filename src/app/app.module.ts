import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';


import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../environments/environment';
import { LojaComponent } from './loja/loja.component';
import { LoginService } from './login/login.service';
import { AngularFireStorage } from '@angular/fire/storage';


import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ClienteComponent,
    ProdutoComponent,
    LojaComponent,
    LoginComponent,
  ],
  providers: [AuthGuard, AngularFireModule, AngularFireAuth, AngularFireStorage, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }