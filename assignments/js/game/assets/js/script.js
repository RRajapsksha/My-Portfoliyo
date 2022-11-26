var boy = document.getElementById("boy");

var idleImageNumber = 0;
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

runImageNumber=0;
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

function keyCheck(event) {

    // alert(event.which);
    // enter =13
    var keyCode = event.which;

    if (keyCode === 13){

        if (runAnimationNumber === 0){
            runAnimationStart();
        }
    }
}