let num = Number(prompt("Digite um numero: "))
let tabuada = ""

for (i = 1; i <= 20; i++) {
    tabuada += `\n${num}x${i}=${num*i}`
}

alert(tabuada)