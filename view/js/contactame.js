let namePerson = document.getElementById("name");
let cellphone = document.getElementById("cellphone");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    if (namePerson.value.length < 4) {
        namePerson.value = "";
        namePerson.setAttribute("placeholder", "Debe ingresar un nombre válido");
    } else if(cellphone.value == "" || isNaN(cellphone.value)){
        cellphone.value = "";
        cellphone.setAttribute("placeholder", "Debe ingresar un número válido");
    } else if(isNaN(phone.value)){
        phone.value = "";
        phone.setAttribute("placeholder", "Debe ingresar un número válido");
    } else if(email.value == ""){
        email.setAttribute("placeholder", "Debe ingresar un correo válido");
    } else if(subject.value.length < 4){
        subject.value = "";
        subject.setAttribute("placeholder", "Debe ingresar un asunto de al menos 4 dígitos");
    } else if(message.value.length < 10){
        message.setAttribute("placeholder", "Debe ingresar un mensaje de al menos 10 dígitos");
    }else{
        
    }
})



