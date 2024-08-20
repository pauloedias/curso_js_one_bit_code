personagem1 = prompt("Digite o nome do seu personagem: ")

poderDeAtaque = Number(prompt("Digite o poder de ataque do seu personagem: "))

personagem2 = prompt("Digite o nome do outro personagem: ")

pontosDeVida = Number(prompt("Digite a quantidade de pontos de vida do personagem: "))

poderDeDefesa = Number(prompt("Digite a quantidade de pontos de defesa do personagem: "))

escudo = confirm("O personagem possui um escudo?")

let dano = 0

if (poderDeAtaque > poderDeDefesa && escudo === false) {
    dano = poderDeAtaque - poderDeDefesa

    pontosDeVida = pontosDeVida - dano

    alert("O dano sofrido é de " + dano + " e a vida atual de " + personagem2 + " é " + pontosDeVida + "!")
} else if (poderDeAtaque > poderDeDefesa && escudo === true) {
    dano = (poderDeAtaque - poderDeDefesa)/2

    pontosDeVida = pontosDeVida - dano
    
    alert("O dano sofrido é de " + dano + " e a vida atual de " + personagem2 + " é " + pontosDeVida + "!")
} else if ( poderDeAtaque <= poderDeDefesa) {
    dano = 0

    pontosDeVida = pontosDeVida - dano

    alert("O dano sofrido é de " + dano + " e a vida atual de " + personagem2 + " é " + pontosDeVida + "!")
}
