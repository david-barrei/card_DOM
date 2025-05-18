function generateRandomCard() {
    const simbolo = ["♠", "♥", "♦", "♣"];
    const valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    // Eliminar carta existente
    const existingCard = document.querySelector(".card-container");
    if (existingCard !== null) {
      document.body.removeChild(existingCard);
    }
  
    // Seleccionar palo y valor aleatorios
    const randomSuit = simbolo[Math.floor(Math.random() * simbolo.length)];
    const randomValue = valor[Math.floor(Math.random() * valor.length)];
    const isRed = randomSuit === "♥" || randomSuit === "♦";
  
    // Crear contenedor de la carta
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container", "d-flex", "justify-content-center", "align-items-center");
    cardContainer.style.width = "150px";
    cardContainer.style.height = "220px";
    cardContainer.style.border = "2px solid black";
    cardContainer.style.borderRadius = "10px";
    cardContainer.style.backgroundColor = "white";
    cardContainer.style.position = "relative";
    cardContainer.style.margin = "20px auto";
  
    // Añadir palo superior
    const topSuit = document.createElement("div");
    topSuit.classList.add("top-suit");
    topSuit.style.position = "absolute";
    topSuit.style.top = "10px";
    topSuit.style.left = "10px";
    topSuit.style.color = isRed ? "red" : "black";
    topSuit.innerText = randomSuit;
  
    // Añadir valor central
    const cardValue = document.createElement("div");
    cardValue.classList.add("card-value");
    cardValue.style.fontSize = "48px";
    cardValue.style.textAlign = "center";
    cardValue.style.color = isRed ? "red" : "black";
    cardValue.innerText = randomValue;
  
    // Añadir palo inferior
    const bottomSuit = document.createElement("div");
    bottomSuit.classList.add("bottom-suit");
    bottomSuit.style.position = "absolute";
    bottomSuit.style.bottom = "10px";
    bottomSuit.style.right = "10px";
    bottomSuit.style.color = isRed ? "red" : "black";
    bottomSuit.style.transform = "rotate(180deg)";
    bottomSuit.innerText = randomSuit;
  
    // Insertar elementos en la carta
    cardContainer.append(topSuit, cardValue, bottomSuit);
    document.body.append(cardContainer);
  }
  
  // Crear botón para generar cartas
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerText = "Generar carta";
  button.style.marginTop = "20px";
  

  button.addEventListener("click", generateRandomCard);
  
  
  document.body.append(button);