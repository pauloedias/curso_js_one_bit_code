function dobro(x = 1) {
    return (2*x)
}

console.log(dobro(10))
console.log(dobro(20))
console.log(dobro())

function soma(a, b) {
    alert("O resultado da soma é" + (a + b))
}

soma(7, 7)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome, forma abreviada
        email : email,
        senha : senha,
        tipo : tipo,
    }

    console.log(usuario)
}   

    criarUsuario("Paulo", "pauloe.jba@gmail.com", '1234')
    criarUsuario("")


    
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)