var animationInterval;
var spriteSheet = document.getElementById("pion");
var widthOfSpriteSheet = 160;
var widthOfEachSprite = 40;
var heightOfSpriteSheet = 160;
var heightOfEachSprite = 40;

function startAnimationDown() {
    stopAnimation();
    var position = widthOfEachSprite;
    const speed = 110;
    const diff = widthOfEachSprite;

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 0px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {

            position = widthOfEachSprite;
        }

    }, speed);
}

function startAnimationUp() {
    stopAnimation();
    var position = widthOfEachSprite;
    const speed = 110;
    const diff = widthOfEachSprite;

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 40px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {

            position = widthOfEachSprite;
        }

    }, speed);
}

function startAnimationLeft() {
    stopAnimation();
    var position = widthOfEachSprite;
    const speed = 110;
    const diff = widthOfEachSprite;

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 80px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {

            position = widthOfEachSprite;
        }

    }, speed);
}

function startAnimationRight() {
    stopAnimation();
    var position = widthOfEachSprite;
    const speed = 110;
    const diff = widthOfEachSprite;

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 120px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {

            position = widthOfEachSprite;
        }

    }, speed);
}

function stopAnimation() {
    clearInterval(animationInterval);
}