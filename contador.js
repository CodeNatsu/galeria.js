 // Función para incrementar el contador y actualizar el valor en la página
    function actualizarContador() {
        if (localStorage.getItem("visitas")) {
            var contadorActual = parseInt(localStorage.getItem("visitas"));
            contadorActual++;
            localStorage.setItem("visitas", contadorActual);
        } else {
            localStorage.setItem("visitas", "1");
        }

        var contadorElemento = document.getElementById("contador");
        contadorElemento.innerText = localStorage.getItem("visitas");
    }

    // Llamada inicial para cargar el contador
    window.onload = function() {
        actualizarContador();
    };
