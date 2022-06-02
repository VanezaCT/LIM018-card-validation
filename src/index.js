import validator from './validator.js';

//console.log(validator.isValid(pagar));

window.addEventListener('load', init, false);
function init() {
    let welcome = document.querySelector('.welcome');
    welcome.style.visibility = 'visible';
    let app = document.querySelector('.app');
    app.style.visibility = 'hidden';
    let boton = document.querySelector('.enter');
    boton.addEventListener('click', function () {
        if (app.style.visibility === 'hidden') {
            app.style.visibility = 'visible';
            welcome.style.visibility = 'hidden';
        }
    }, false);
   
}

document
    .getElementById("enter")
    .addEventListener("click", function (event) {
        event.preventDefault();

        document.getElementById("saludo").innerText = " ¡Hola " + document.getElementById("enterName").value + "!  estas a un paso de tener tu acceso ilimitado";

    })

function valida() {

    let todo_correcto = true
 
    if (document.getElementById('name').length<1) {
        todo_correcto = false   
    }
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.getElementById('email').value;
    if (!expresion.test(email)) {
        todo_correcto = false
    }
    if (document.getElementById('month').value == '') {
        todo_correcto = false
    }
    if (document.getElementById('year').value == '') {
        todo_correcto = false
    }
    if (document.getElementById('ccv').value.length <1) {
        todo_correcto = false
    }
    if (!todo_correcto) {
        alert('Algunos campos no están correctos, vuelva a revisarlos');
    }
    return todo_correcto
}


document
    .getElementById("pagar")
    .addEventListener("click", function (event) {
        event.preventDefault();
        
         let pagar =  document.getElementById('cardNumber') ;
         let validar = validator.isValid(pagar.value);
        let ocultar = validator.maskify(pagar.value)
        if(validar==true){
            document.getElementById("validTarjeta").innerText = "Pago procesado"
            pagar.value=ocultar
        }
        else{
            document.getElementById("validTarjeta").innerText = "Tarjeta invalida"
        }
    
        valida()
    })
        
