//Classe abstrata
export class Conta{

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    //método abstrato
    sacar(valor) {
        throw new Error("O método sacar da classe Conta é abstrato!");
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