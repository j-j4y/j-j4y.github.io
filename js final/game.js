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

// checks every 100ms to see if obstacle has been hit
setInterval(() => {
    obst = document.querySelector(".obstacle").getBoundingClientRect();
    duck = document.getElementById("duck").getBoundingClientRect();
    if(duck.right >= obst.x && duck.bottom > obst.y){
        alert("you lost!");
        document.querySelector("obstacle").style.animation ="none";
    }

},100) //unit is milliseconds
