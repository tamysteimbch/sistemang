export class Cliente {

    constructor(key: Number = null, nome: String = null, dataNascimento: any = null) {
        this.key = key;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    key: Number;
    nome: String;
    dataNascimento: any;

}