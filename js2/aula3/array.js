const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

console.log(arr)
// Adicionar Elementos
// push -> adicionar elemento no final do array

let tamanho = arr.push('Boromir')

console.log(arr)
console.log(tamanho)

// unshift -> adicionar elemento no inicio do array

tamanho = arr.unshift("Boromir")

console.log(arr)
console.log(tamanho)

// Remover elementos
// pop -> remove elemento no final do array

let ultimoElemento = arr.pop()

console.log(arr)
console.log(ultimoElemento)

// Remover elementos no começo do array
// shift

ultimoElemento = arr.shift()

console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes

const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexOf

const indice = arr.indexOf('Gandalf')
console.log(indice)

// Cortar e Concatenar
// slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}