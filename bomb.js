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
    setTimeout(kill, 1000);

}


function explosionDistance() {

    let bx = bombe.x;
    let by = bombe.y;

    blockGrid[bx][by].traverser = false;

    for (var i = 0; i < bombeListe.length; i++) {

        // up
        if (by > 0) {
            if (!(blockGrid[bx][by - 1].traverser)) {
                blockGrid[bx][by - 1].traverser = true;
            }
            blockGrid[bx][by - 1].style.backgroundImage = 'url("img/explosion.png"), url("img/ground.png")';
            setTimeout(function() {
                blockGrid[bx][by - 1].style.backgroundImage = 'url("img/ground.png")';
            }, 500);

        }

        // down
        if (by < V_GRID - 1) {
            if (!(blockGrid[bx][by + 1].traverser)) {
                blockGrid[bx][by + 1].traverser = true;
            }
            blockGrid[bx][by + 1].style.backgroundImage = 'url("img/explosion.png"), url("img/ground.png")';
            setTimeout(function() {
                blockGrid[bx][by + 1].style.backgroundImage = 'url("img/ground.png")';
            }, 500);
        }

        // left
        if (bx > 0) {
            if (!(blockGrid[bx - 1][by].traverser)) {
                blockGrid[bx - 1][by].traverser = true;
            }
            blockGrid[bx - 1][by].style.backgroundImage = 'url("img/explosion.png"), url("img/ground.png")';
            setTimeout(function() {
                blockGrid[bx - 1][by].style.backgroundImage = 'url("img/ground.png")';
            }, 500);
        }

        // right
        if (bx < H_GRID - 1) {
            if (!(blockGrid[bx + 1][by].traverser)) {
                blockGrid[bx + 1][by].traverser = true;
            }
            blockGrid[bx + 1][by].style.backgroundImage = 'url("img/explosion.png"), url("img/ground.png")';
            setTimeout(function() {
                blockGrid[bx + 1][by].style.backgroundImage = 'url("img/ground.png")';
            }, 500);
        }

        drawScore();

    }

    document.getElementById("bombe").remove();
    blockGrid[bx][by].traverser = true;

}


function kill() {


    let killed = [];

    for (var i = 0; i < vilainListe.length; i++) {



        if (parseInt(bombe.style.left) == vilainListe[i].offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == vilainListe[i].offsetTop) {
            vilainListe[i].traverser = true;
            vilainListe[i].remove();
            killed.push(i);

            score++;

        }

        if (parseInt(bombe.style.left) - GRID_SIZE == vilainListe[i].offsetLeft && parseInt(bombe.style.top) == vilainListe[i].offsetTop) {
            vilainListe[i].traverser = true;
            vilainListe[i].remove();
            killed.push(i);

            score++;

        }

        if (parseInt(bombe.style.left) + GRID_SIZE == vilainListe[i].offsetLeft && parseInt(bombe.style.top) == vilainListe[i].offsetTop) {
            vilainListe[i].traverser = true;
            vilainListe[i].remove();
            killed.push(i);

            score++;

        }


        if (parseInt(bombe.style.left) == vilainListe[i].offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == vilainListe[i].offsetTop) {
            vilainListe[i].traverser = true;
            vilainListe[i].remove();
            killed.push(i);

            score++;

        }

        drawScore();

    }

    // updating the list
    let offseti = 0;
    for (var i = 0; i < killed.length; i++) {
        vilainListe.splice(killed[i - offseti], 1);
        offseti++;
    }

    if (vilainListe.length == 0) {
        alert("Gagné ! Score " + score + " - Time: " + pad(parseInt(totalSeconds / 60)) + ":" + pad(totalSeconds % 60));
        windiw.location.href = window.location.href;
        return;
    }

    for (var i = 0; i < GRID_SIZE; i++) {


        if (parseInt(bombe.style.left) == parseInt(stylePion.left) && parseInt(bombe.style.top) == parseInt(stylePion.top)) {
            document.getElementById('pion').remove();
            alert("Perdu ! Attention la prochaine fois..");
            windiw.location.href = window.location.href;
            break;
        }

        // Top
        if (parseInt(bombe.style.left) == parseInt(stylePion.left) && parseInt(bombe.style.top) - GRID_SIZE == parseInt(stylePion.top)) {
            document.getElementById('pion').remove();
            alert("Perdu ! Attention la prochaine fois..");
            windiw.location.href = window.location.href;
            break;
        }

        if (parseInt(bombe.style.left) - GRID_SIZE == parseInt(stylePion.left) && parseInt(bombe.style.top) == parseInt(stylePion.top)) {
            document.getElementById('pion').remove();
            alert("Perdu ! Attention la prochaine fois..");
            windiw.location.href = window.location.href;
            break;
        }

        if (parseInt(bombe.style.left) + GRID_SIZE == parseInt(stylePion.left) && parseInt(bombe.style.top) == parseInt(stylePion.top)) {
            document.getElementById('pion').remove();
            alert("Perdu ! Attention la prochaine fois..");
            windiw.location.href = window.location.href;
            break;
        }

        if (parseInt(bombe.style.left) == parseInt(stylePion.left) && parseInt(bombe.style.top) + GRID_SIZE == parseInt(stylePion.top)) {
            document.getElementById('pion').remove();
            alert("Perdu ! Recommencer...");
            windiw.location.href = window.location.href;
            break;
        }

    }

}