import validator from './validator.js';

//console.log(validator.isValid(pagar));
let welcome = document.querySelector('.welcome')
let app = document.querySelector('.app')
let content = document.querySelector('#content')
let boton = document.querySelector('.enter')
let pay = document.querySelector('#content')

window.addEventListener('load', init, false)
function init() {
    welcome.style.visibility = 'visible'
    app.style.visibility = 'hidden'
    content.style.visibility = 'hidden'
    boton.addEventListener('click', function () {
        if (app.style.visibility === 'hidden') {
            app.style.visibility = 'visible'
            welcome.style.visibility = 'hidden'
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

    if (document.getElementById('name').length < 1) {
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
    if (document.getElementById('ccv').value.length < 1) {
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

        let pagar = document.getElementById('cardNumber');
        let validar = validator.isValid(pagar.value);
        let ocultar = validator.maskify(pagar.value)
        if (validar == true) {
            alert("Pago procesado")
            pagar.value = ocultar
            pay.style.visibility = 'visible';
            app.style.visibility = 'hidden'


        }
        else {
            document.getElementById("validTarjeta").innerText = "Tarjeta invalida"
        }

        valida()
    })


