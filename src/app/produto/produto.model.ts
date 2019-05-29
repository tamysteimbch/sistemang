export class Produto {

    constructor(key: Number = null, nome: String = null, preco: any = null) {
        this.key = key;
        this.nome = nome;
        this.preco = preco;
    }

    key: Number;
    nome: String;
    preco: any;

}