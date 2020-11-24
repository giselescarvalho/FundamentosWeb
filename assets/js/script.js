/*
Case sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Classe: getElementByClassName()
por Seletor: querySelector ()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email') //ou #email
let telefone = document.querySelector('#telefone')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let telefoneOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
telefone.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (name.Value.length <= 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomelOk = true
    }
}

function validaEmail() {
   ler txtEmail = document.querySelector('#txtEmail')
   
   if(email.value.indexOf('@') == -1 || email.value.indexOf('.')){
     txtNome.innerHTML = 'E-mail inválido'
     txtEmail.style.color = 'red'
   }
   else {
    txtNome.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
   }
}

function validaTelefone() {
    let txtAssunto = document.querySelector('#assunto')

    if(assunto.value.length > 11 && assunto.value.length < 11){
        txtAssunto.innerHTML = 'Telefone inválido'
        txtAssunto.style.color = 'red'
    }
    else {
        txtAssunto.innerHTML = 'none'
        telefoneOk = true
     }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#assunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Máximo de 100 caracteres'
        txtAssunto.style.color = 'red'
    }
    else {
        txtAssunto.innerHTML = 'none'
        assuntoOk = true
     }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Enviado com sucesso')
    }
    else{
        alert('Preencha o formulário')
    }
}