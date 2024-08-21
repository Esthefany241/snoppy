function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let esperando = document.getElementById("esperando");

    if (texto.length !== 0) {
        let encriptado = btoa(texto);
        document.getElementById("texto").value = encriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "Ingresa otro mensaje que desees encriptar";
        esperando.src = "img/oki.gif.gif";
    } else {
        esperando.src = "img/pruebita.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let esperando = document.getElementById("esperando");

    if (texto.length !== 0) {
        
            let desencriptado = atob(texto);
            document.getElementById("texto").value = desencriptado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "Ingresa otro mensaje que desees desencriptar";
            esperando.src = "img/escribiendo.gif.gif"
    } else {
        esperando.src = "img/pruebita.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}

