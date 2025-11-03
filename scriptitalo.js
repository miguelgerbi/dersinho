document.getElementById("mostrarCores").addEventListener("click", function() {
    const coresDiv = document.getElementById("cores");
    coresDiv.innerHTML = "";

    const cores = ["vermelho", "laranja", "amarelo", "verde", "azul", "anil", "violeta"];
    const coresHex = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"];

    for (let i = 0; i < cores.length; i++) {
        let div = document.createElement("div");
        div.className = "cor";
        div.style.backgroundColor = coresHex[i];
        div.title = cores[i];
        coresDiv.appendChild(div);
    }
});