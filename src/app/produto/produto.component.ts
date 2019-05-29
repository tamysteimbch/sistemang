import { OnInit, Component, NgModule } from '@angular/core';
import { Produto } from './produto.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'produto',
    templateUrl: './produto.component.html',
    })

@NgModule({
    imports: [FormsModule, CommonModule ],
    declarations: [ ProdutoComponent ]
})

export class ProdutoComponent implements OnInit {

    produto: Produto;
    produtos: Produto[] = [];

    constructor(private db: AngularFireDatabase){   }

    ngOnInit(): void{
        this.produto = new Produto();
        this.listar();
    }

    salvar(){
        this.db.list('produtos').push(this.produto)
            .then((result: any)=>{
                console.log(result.key);
            });
    }
    
    listar(){
        this.getAll().subscribe(
            produtos => this.produtos = produtos,
            error => alert(error),
            () => console.log("terminou")
          ); 
    }

    getAll() : Observable<any[]> {
        return this.db.list('produtos')
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(c => (
                        {key: c.payload.key, ...c.payload.val() }));
                })
            );
    }

}