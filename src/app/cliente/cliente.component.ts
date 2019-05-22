import { OnInit, Component, NgModule } from '@angular/core';
import { Cliente } from './cliente.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'cliente',
    templateUrl: './cliente.component.html',
    })

@NgModule({
    imports: [FormsModule, CommonModule ],
    declarations: [ ClienteComponent ]
})

export class ClienteComponent implements OnInit {

    cliente: Cliente;
    clientes: Cliente[] = [];

    constructor(private db: AngularFireDatabase){   }

    ngOnInit(): void{
        this.cliente = new Cliente();
    }

    salvar(){
        this.db.list('clientes').push(this.cliente)
            .then((result: any)=>{
                console.log(result.key);
            });
    }

}