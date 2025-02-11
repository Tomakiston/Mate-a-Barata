let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
let playerLife = 100;
let enemyLife = 100;
let positionX = 260;
let positionY = 320;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && positionX > 10) positionX -= 20;
    if (e.key === "ArrowRight" && positionX < 510) positionX += 20;
    player.style.left = positionX + "px";

    if (e.key === "ArrowUp" && positionY > 10) positionY -= 20;
    if (e.key === "ArrowDown" && positionY < 510) positionY += 20;
    player.style.top = positionY + "px";
});

function changeLife(value) {
    playerLife += value;
    if (playerLife > 100) playerLife = 100;
    if (playerLife < 0) playerLife = 0;

    let bar = document.getElementById("playerLife");
    bar.style.width = playerLife + "%";
    bar.style.background = playerLife > 60 ? "green" : playerLife > 30 ? "yellow" : "red";

    if (playerLife === 0) document.getElementById("dialog").innerText = "A barata era voadora, foge logo da sua casa!";   
}

function openShop() {
    let choice = confirm("Quer pagar terapia por 100 reais?");
    if (choice) changeLife(30);
}

function specialAttack() {
    enemyLife -= 25;
    if (enemyLife < 0) enemyLife = 0;

    let bar = document.getElementById("enemyLife");
    bar.style.width = enemyLife + "%";

    document.getElementById("enemy").style.transform = "scale(1.2)";
    setTimeout(() => document.getElementById("enemy").style.transform = "scale(1)", 200);

    if (enemyLife === 0) document.getElementById("dialog").innerText = "Você eliminou esse feroz monstro da sua casa. Parabéns!"
}