function mudarFundo() {
    // Altera a cor de fundo para criar uma "imersão"
    document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "#f0f0f0" : "black";
    document.body.style.color = document.body.style.backgroundColor === "black" ? "#333" : "#fff";
}
