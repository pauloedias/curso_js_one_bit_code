let saldo = Number(prompt   ("Digite seu saldo em R$: "))
let opcao

do{
    opcao =  (prompt(
        `Seu saldo é : R$${saldo}`+
        "\n1)Para depositar"+
        "\n2)Para retirar" +
        "\n3)Para sair"
    ))
    
    if (opcao === "1") {
        let deposito = Number(prompt("Quanto deseja depositar: "))
        saldo = saldo + deposito
    } else if (opcao === "2"){
        let saque = Number(prompt("Quanto deseja sacar: "))
        saldo = saldo - saque
    }
} while (opcao !== "3")