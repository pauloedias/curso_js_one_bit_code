let pacientes = ['Paulo', 'Julia', 'Jhonny']
let escolha

do{
    let ordem = ''

    for (let i = 0; i< pacientes.length; i++){
        ordem += (`${i + 1}° ${pacientes[i]}\n`)
    }

    escolha = prompt(
    ordem +
    `\nEscolha uma das opções abaixo: `+
    `\n1)Para adicionar novo Paciente` +
    `\n2)Consultar paciente`+
    `\n3)Sair`
)

    switch (escolha) {
        case "1":
            let novoPaciente = prompt("Digite o nome do Paciente: ")
            pacientes.push(novoPaciente)
            break

        case "2":
            let consultarPaciente = pacientes.shift()
            if (consultarPaciente === undefined) {
                alert("Não há pacientes na fila de espera, insira um novo paciente!")
            } else {
                alert(consultarPaciente) 
            }
            break

        case "3":
            break
            
        default:
            alert("Escolha uma opção válida!")
            break
    }

} while (escolha !== "3")

