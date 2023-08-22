
  let currentIndex = 0;
  let isLoading = false;

  function setLoading(isLoading) {
    // ... (tu código para mostrar el indicador de carga)
  }

  function updateImageCount() {
    const imageCount = document.getElementById("image-count");
    imageCount.textContent = `Imagen ${currentIndex + 1} de ${imageUrls.length}`;
  }

  function isFavorite(imageUrl) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.includes(imageUrl);
  }

  function toggleFavorite() {
    const imageUrl = imageUrls[currentIndex];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite(imageUrl)) {
      const updatedFavorites = favorites.filter(url => url !== imageUrl);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      document.getElementById("favoriteBtn").classList.remove("favorite");
    } else {
      favorites.push(imageUrl);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      document.getElementById("favoriteBtn").classList.add("favorite");
    }

    updateFavoritesCount();
  }

  function updateFavoritesCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const numFavorites = document.getElementById("num-favorites");
    numFavorites.textContent = favorites.length;

    const favoritesIcon = document.getElementById("favorites-icon");
    if (favorites.length > 0) {
      favoritesIcon.style.color = "#e74c3c"; // Cambiar color del icono cuando hay favoritos
    } else {
      favoritesIcon.style.color = "#ccc"; // Cambiar color del icono cuando no hay favoritos
    }
  }

  async function showImage(indexChange) {
    if (isLoading) return;

    currentIndex += indexChange;
    currentIndex = Math.max(0, Math.min(currentIndex, imageUrls.length - 1));
    setLoading(true);

    const imageElement = document.getElementById("image");
    imageElement.style.display = "none";

    const loadingTimeout = setTimeout(() => {
      setLoading(true);
    }, 500); // Mostrar el indicador de carga si la imagen tarda más de 500 ms en cargar

    const img = new Image();
    img.onerror = function () {
      clearTimeout(loadingTimeout);
      setLoading(false);
      imageElement.style.display = "none";
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
    };
    img.onload = function () {
      clearTimeout(loadingTimeout);
      setLoading(false);
      imageElement.src = imageUrls[currentIndex];
      imageElement.style.display = "block";
      updateImageCount();
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "none";
      if (isFavorite(imageUrls[currentIndex])) {
        document.getElementById("favoriteBtn").classList.add("favorite");
      } else {
        document.getElementById("favoriteBtn").classList.remove("favorite");
      }
    };
    img.src = imageUrls[currentIndex];
  }

  async function generatePDF() {
    const apiKey = 'c9fd2f51-61c9-4c16-8cbb-22b0b3809af4';
    const pdfUrls = [];

    for (const imageUrl of imageUrls) {
      const pdfUrl = `https://v2.api2pdf.com/chrome/image/url?url=${encodeURIComponent(imageUrl)}&apikey=${apiKey}`;
      pdfUrls.push(pdfUrl);
    }

    // Descargar imágenes y generar PDFs en una nueva ventana/tab
    for (const pdfUrl of pdfUrls) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = "imagen.pdf";
      link.click();
      await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar un segundo entre descargas
    }
  }

  // Mostrar la primera imagen al cargar la página
  showImage(0);

  // Inicializar el recuento de favoritos cuando la página se carga
  updateFavoritesCount();

  // Cargar favoritos desde el almacenamiento local
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  for (const storedFavorite of storedFavorites) {
    if (imageUrls.includes(storedFavorite)) {
      const favoriteIndex = imageUrls.indexOf(storedFavorite);
      document.getElementById("favoriteBtn").classList.add("favorite");
    }
  }
