var bombeListe = [];


function createBomb() {
    if (!document.getElementById("bombe")) {
        bombe = document.createElement("div");
        bombe.style.width = GRID_SIZE + "px";
        bombe.style.height = GRID_SIZE + "px";
        bombe.style.position = "absolute";
        bombe.style.backgroundImage = "url('img/bomb.png')";
        bombe.style.backgroundRepeat = "no-repeat";
        bombe.style.backgroundSize = "contain";
        bombe.style.zIndex = "100";
        bombe.id = "bombe";
        bombe.style.left = String(x * GRID_SIZE) + "px";
        bombe.style.top = String(y * GRID_SIZE) + "px";


        
        blockGrid[x][y].traverser = false;

        bombe.x = x;
        bombe.y = y;

        document.getElementById("plateau").appendChild(bombe);

        bombeListe.push(bombe);

        setTimeout(bombexplosion, 2000);
    }
}


function bombexplosion() {

    let bx = bombe.x;
    let by = bombe.y;

    if (document.getElementById("bombe")) {
        document.getElementById("bombe").style.backgroundImage = "url('img/bomb.png')";
    }

    setTimeout(explosionDistance, 1000);
    setTimeout(killEmAll, 1000);

}


