import {Conta} from './Conta.js';

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    
    constructor (cliente, agencia) {
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas ++;
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = valor * taxa;

        return this._sacar(valor, taxa);
    }
}