var error = document.querySelector('#error-email');

function validarEmail(){
    var email = document.querySelector('#exampleInputEmail1')
    

    if(!email.checkValidity()){
        error.innerHTML = "Por favor, insira um email válido"
    }
}

function redefinirMsg(){    
    if(error.innerHTML == "Por favor, insira um email válido"){
        error.innerHTML = ""
    }
}