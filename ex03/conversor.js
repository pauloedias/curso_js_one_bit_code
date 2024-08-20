valor = Number(prompt("Digite um valor em metros(m): "))

conversao = Number(prompt("Para converter escolha uma das opções: \n1. milimetro(mm) \n2. centimetro(cm) \n 3.decímetro(dm) \n4. decâmetro(dam) \n5. hectômetro(hm) \n6. quilômetro(Km)"))

let resultado

switch(conversao) {
    case 1:
        resultado = valor * 1000
        alert("O resultado é: " + resultado + " mm")
        break
    case 2:
        resultado = valor * 100
        alert("O resultado é: " + resultado + " cm")
        break
    case 3:
        resultado = valor * 10
        alert("O resultado é: " + resultado + " dm")
        break
    case 4:
        resultado = valor / 10
        alert("O resultado é: " + resultado + " hm")
        break
    case 5:
        resultado = valor / 100
        alert("O resultado é: " + resultado + " dm")
        break
    case 6:
        resultado = valor / 1000
        alert("O resultado é: " + resultado + " Km")
        break
    default:
        alert("Digite um valor válido!")
}