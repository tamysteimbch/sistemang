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
        this.listar();
    }

    salvar(){
        this.db.list('clientes').push(this.cliente)
            .then((result: any)=>{
                console.log(result.key);
            });
    }
    
    listar(){
        this.getAll().subscribe(
            clientes => this.clientes = clientes,
            error => alert(error),
            () => console.log("terminou")
          ); 
    }

    getAll() : Observable<any[]> {
        return this.db.list('clientes')
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(c => (
                        {key: c.payload.key, ...c.payload.val() }));
                })
            );
    }

}