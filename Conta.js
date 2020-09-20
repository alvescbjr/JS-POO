export class Conta{

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
   
    sacar(valor) {
        const taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        let valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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