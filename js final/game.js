const jumpDuck = document.getElementById("duck")

let duck = {};
duck = document.getElementById("duck").getBoundingClientRect();

let obst = {};
obst = document.querySelector(".obstacle").getBoundingClientRect();


function jump() {
    if (jumpDuck.classList != "jump") {
        jumpDuck.classList.add("jump")
    }

    setTimeout(function () {
        jumpDuck.classList.remove("jump");
    }, 300);
}

document.addEventListener("keydown", e=> {
    if(e.code == "Space"){
        jump();
}});

let score = 0;

// checks every 100ms to see if obstacle has been hit
setInterval(() => {
    obst = document.querySelector(".obstacle").getBoundingClientRect();
    duck = document.getElementById("duck").getBoundingClientRect();
    if(duck.right >= obst.x && duck.bottom > obst.y) {
        alert("you lost!");
        score = 0;
        document.getElementById("container").style.backgroundImage = "" ;
        document.querySelector("obstacle").style.animation ="none";
    }else if(obst.x <= duck.x) {
        score += 1;
        document.getElementById("score").innerHTML = `Score: ${score}` ;
    }else if(score >= 8) {
        document.getElementById("container").style.backgroundImage = "url(imgs/morning.jpg)"; //changes to daytime bg
    }
    if(score >= 10) {
        document.getElementById("container").style.backgroundImage = "url(imgs/night.jpg)"; //changes to mightt bg
        // document.getElementById("container").style.backgroundColor = "pink";
        // console.log("changed color");
    }
    

},100) //unit is milliseconds

