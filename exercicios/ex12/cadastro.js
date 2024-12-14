// Opções de tempo de experiência
var experienceOptions = [
    { label: '0-2 anos', value: '0-2' },
    { label: '3-4 anos', value: '3-4' },
    { label: '5+ anos', value: '5+' }
];

document.getElementById('addButton').addEventListener('click', function() {
    // Cria uma nova div que conterá os inputs
    var newRow = document.createElement('div')
    newRow.className = 'input-row'

    // Cria o campo de input de texto
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'technology[]'
    input.placeholder = 'Nome da tecnologia'
    input.required = true;


    // Adiciona o input à nova linha
    newRow.appendChild(input)

                    // Cria o grupo de botões radio para o tempo de experiência
                    experienceOptions.forEach(function(option) {
                        // Cria o input radio
                        var radioInput = document.createElement('input');
                        radioInput.type = 'radio';
                        radioInput.name = `experience_${document.getElementsByClassName('input-row').length}`;
                        radioInput.value = option.value;
                        radioInput.required = true;
    
                        // Cria o rótulo para o botão de rádio
                        var label = document.createElement('label');
                        label.textContent = option.label;
    
                        // Adiciona o input ao label e o label à nova linha
                        label.prepend(radioInput);
                        newRow.appendChild(label);
                    });

    // Adiciona a nova linha ao container de inputs
    document.getElementById('inputContainer').appendChild(newRow)
})