// desencriptador.js
// Esta parte del script también sería accesible en el navegador.

function desencriptar(contenidoEncriptado) {
    const bytesDesencriptados = CryptoJS.AES.decrypt(contenidoEncriptado, claveEncriptacion);
    return bytesDesencriptados.toString(CryptoJS.enc.Utf8);
}

// Desencriptar la plantilla al cargar la página
window.onload = function() {
    const contenidoEncriptado = document.getElementById("contenido-encriptado").innerHTML;
    const contenidoDesencriptado = desencriptar(contenidoEncriptado);
    document.getElementById("contenido-encriptado").innerHTML = contenidoDesencriptado;
}
