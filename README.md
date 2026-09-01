```mermaid

classDiagram
    class ContaBancaria {
        -String titular
        #double saldo
        +depositar(double valor)
        +sacar(double valor)*
        +getSaldo() double
    }
```