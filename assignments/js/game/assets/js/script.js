var boy = document.getElementById("boy");

var idleImageNumber = 1;
var idleAnimationNumber = 0;

function idleAnimation() {

    idleImageNumber=idleImageNumber+1;

    if (idleImageNumber === 11){

        idleImageNumber = 1;
    }


    boy.src ="assets/images/Idle("+idleImageNumber+").png";

}

function idleAnimationStart() {

    idleAnimationNumber=setInterval(idleAnimation,200);
}

runImageNumber=1;
runAnimationNumber=0;

function runAnimation() {

    runImageNumber = runImageNumber+1;

    if (runImageNumber===9){
        runImageNumber=1;
    }

    boy.src="assets/images/Run("+runImageNumber+").png";
}

function runAnimationStart() {

    runAnimationNumber = setInterval(runAnimation,200);

    clearInterval(idleAnimationNumber);

}

jumpImageNumber = 1;
jumpAnimationNumber = 0;
boyMarginTop = 307;

function jumpAnimation() {

    jumpImageNumber = jumpImageNumber +1;

    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop -20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 7){
        boyMarginTop = boyMarginTop +20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber == 13){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumImagNumber = 0;
        jumpAnimationStart();
    }
    boy.src = "assets/images/Jump("+jumpImageNumber+").png";
}
function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}

function keyCheck(event) {

    // alert(event.which);
    // enter =13
    // space = 32
    var keyCode = event.which;

    if (keyCode === 13){

        if (runAnimationNumber === 0){
            runAnimationStart();
        }

        if (moveBackgroundAnimationId === 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
    }

    if (keyCode == 32){
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }

        if (moveBackgroundAnimationId === 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
    }

}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground() {

    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX+"px";

}

