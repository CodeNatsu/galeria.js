function startDownloadCounter(buttonId, counterLabelId, downloadLinkId, downloadUrl) {
      var boton = document.getElementById(buttonId);
      var counterLabel = document.getElementById(counterLabelId);
      var downloadLink = document.getElementById(downloadLinkId);
      var contador = 15;

      counterLabel.innerHTML = "<b>15 segundos para descargar.</b>";
      counterLabel.style.display = "block";
      downloadLink.style.display = "none";

      var id = setInterval(function() {
        contador--;
        if (contador < 0) {
          clearInterval(id);
          counterLabel.style.display = "none";
          downloadLink.style.display = "block";
        } else {
          counterLabel.innerHTML = contador.toString() + "<b> segundos para descargar. </b>";
        }
      }, 1000);

      boton.style.display = "none";
      downloadLink.href = downloadUrl;
    }
