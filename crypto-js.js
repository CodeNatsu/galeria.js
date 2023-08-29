// encriptador.js
// Esta parte del script también sería accesible en el navegador.

const claveEncriptacion = "miClaveSecreta"; // Cambia esto por una clave segura

function encriptar(contenido) {
    const cifrado = CryptoJS.AES.encrypt(contenido, claveEncriptacion);
    return cifrado.toString();
}

// Encriptar la plantilla al cargar la página
window.onload = function() {
    const contenidoOriginal = document.getElementById("contenido-encriptado").innerHTML;
    const contenidoEncriptado = encriptar(contenidoOriginal);
    document.getElementById("contenido-encriptado").innerHTML = contenidoEncriptado;
}
