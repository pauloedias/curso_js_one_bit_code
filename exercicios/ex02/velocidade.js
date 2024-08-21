let veiculo1 = prompt("Digite o nome do veículo 1:")

let v1 = Number(prompt("Digite a velocidade do veículo 1: "))

let veiculo2 = prompt("Digite o nome do veículo 2:")

let v2 = Number(prompt("Digite a velocidade do veículo 2: "))

if (v1 === v2) {
    alert(`As velocidades de 1 e 2 são iguais!`)
} else if (v1 > v2) {
    alert(`O veículo 1 [${veiculo1}] é o mais rápido!`)
} else {
    alert(`O veículo 2 [${veiculo2}] é o mais rápido!`)
}