//Porcurar o botão 
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar ação
function cloneField () {

    //Duplicar os campos. Que campos? Os fields.
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean: true or false (verdadeiro ou falso)

    //Deve-se zerar os inputs

    //Pegar os campos. Que campos? Os inputs.
    const fields = newFieldContainer.querySelector('input')

    //Para cada novo fields limpar os inputs.
    fields.forEach(function(field) {

        //Pegar o field e limpa as informações dele
        field.value = ""
    })

    //Colocar na página? Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}