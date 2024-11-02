const images = [
    
    "./src/img/fada.jpg",
    "./src/img/fada.jpg",
    "./src/img/galinha.jpg",
    "./src/img/galinha.jpg",
    "./src/img/life.jpg",
    "./src/img/life.jpg",
    "./src/img/pot.jpg",
    "./src/img/pot.jpg",
    "./src/img/rupees.jpg",
    "./src/img/rupees.jpg",
    "./src/img/sword.jpg",
    "./src/img/sword.jpg",
    "./src/img/shield.jpg",
    "./src/img/shield.jpg",
    "./src/img/trinit.jpg",
    "./src/img/trinit.jpg"

];
let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1)); // Sorteia os emojis aleatoriamente

for (let i=0; i < images.length; i++) { // Cria um elemento div para cada emoji
    let box = document.createElement("div"); // Cria um elemento div
    box.className = "item"; // Adiciona uma classe que foi feita no CSS
    
    let img = document.createElement("img");
    img.src = shuffleImages[i];
    box.appendChild(img);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); // Adiciona o elemento div ao elemento game
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);     
        
    }
}

function checkMatch() { // Verifica se as cartas sao iguais
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatched");
        openCards[1].classList.add("boxMatched");
        
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatched").length === images.length){
        alert("Parabéns, você ganhou!");
}
}