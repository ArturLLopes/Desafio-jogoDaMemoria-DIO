const emojis = [
    
    "🐴",
    "🐴",
    "🦄",
    "🦄",
    "🐸",
    "🐸",
    "🐼",
    "🐼",
    "🐨",
    "🐨",
    "🐻‍❄️",
    "🐻‍❄️",
    "🐶",
    "🐶",
    "😽",
    "😽"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); // Sorteia os emojis aleatoriamente

for (let i=0; i < emojis.length; i++) { // Cria um elemento div para cada emoji
    let box = document.createElement("div"); // Cria um elemento div
    box.className = "item"; // Adiciona uma classe que foi feita no CSS
    box.innerHTML = shuffleEmojis[i]; // Adiciona o emoji ao elemento div
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

    if(document.querySelectorAll(".boxMatched").length === emojis.length){
        alert("Parabéns, você ganhou!");
}
}