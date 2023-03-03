const nombre = document.getElementById("nombre")
const email = document.getElementById("mail")
const txt = document.getElementById("txt")
const contacto = document.getElementById("contacto")
const parrafo = document.getElementById("warnings")

contacto.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 1) {
        warnings += `Ingrese un nombre <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `Ingrese un email válido <br>`
        entrar = true
    }
    if (txt.value.length < 1) {
        warnings += `Ingrese un mensaje <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Datos enviados correctamente ¡Muchas Gracias!"
    }
})