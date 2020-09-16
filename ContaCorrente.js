import {Cliente} from './Cliente.js';

export class ContaCorrente{
    agencia;
    _cliente;
    static numeroDeContas = 0;

    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor (agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas ++;
    }

    sacar(valor) {
        if (this._saldo <= valor) {
            return;
        }
        this._saldo -= valor;
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
    tranferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}