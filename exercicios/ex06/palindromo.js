let palavra = prompt("Digite uma palavra: ")
let palavraInvertida = ``

for (i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}
console.log(palavraInvertida)
if (palavraInvertida === palavra) {
    alert("Is palindrome!")
} else{
    alert("Is not palindrome!" +
        `\n${palavra}`+
        `\n${palavraInvertida}`
    )
}