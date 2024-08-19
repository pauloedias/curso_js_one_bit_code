let nome = prompt("Digite seu nome:")
let sobrenome = prompt("Digite seu sobrenome: ")
let estudo = prompt("Digite seu campo de estudo: ")
let nascimento = prompt("Digite seu ano de nascimento: ")
let anoAtual = new Date().getFullYear() 
let idade = anoAtual - nascimento

console.log(`Seu nome é ${nome} ${sobrenome}`)
console.log(estudo)
console.log(`Sua idade é ${idade} anos`)