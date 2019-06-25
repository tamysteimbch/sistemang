import { OnInit, Component, NgModule } from '@angular/core';
import { Loja } from './loja.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'loja',
    templateUrl: './loja.component.html',
    })

@NgModule({
    imports: [FormsModule, CommonModule ],
    declarations: [ LojaComponent ]
})

export class LojaComponent implements OnInit {

    loja: Loja;
    lojas: Loja[] = [];

    constructor(private db: AngularFireDatabase){   }

    ngOnInit(): void{
        this.loja = new Loja();
        this.listar();
    }

    salvar(){
        this.db.list('lojas').push(this.loja)
            .then((result: any)=>{
                console.log(result.key);
            });
    }
    
    listar(){
        this.getAll().subscribe(
            lojas => this.lojas = lojas,
            error => alert(error),
            () => console.log("terminou")
          ); 
    }

    getAll() : Observable<any[]> {
        return this.db.list('lojas')
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(c => (
                        {key: c.payload.key, ...c.payload.val() }));
                })
            );
    }

}