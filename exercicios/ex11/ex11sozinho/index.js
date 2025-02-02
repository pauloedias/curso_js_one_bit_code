function escalar() {
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const numero = document.getElementById('numero').value

    const newLi = document.createElement('li')
    newLi.innerText = numero + " / " + nome + "   " + posicao

    const confirmacao = confirm('Deseja realmente escalar ' + nome + ' como ' + posicao + ' !')

    if (!confirmacao) {
        return
    }
    else{
        const lista = document.getElementById('inputs')
        lista.appendChild(newLi)
    }

    document.getElementById("posicao").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
}

function remover() {
    const numero = document.getElementById('numero').value
    const confirmacao = confirm('Deseja realmente remover ' + nome.value + ' como ' + posicao + ' !')

    if (!confirmacao){
        return
    }
    if (){
        numero = document.removeChild()
    }
}