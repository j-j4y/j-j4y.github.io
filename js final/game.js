const jumpFox = document.getElementById("fox")

let fox = {};
fox = document.getElementById("fox").getBoundingClientRect();

let obst = {};
obst = document.querySelector(".obstacle").getBoundingClientRect();


// allowing player to jump
function jump() {
    if (jumpFox.classList != "jump") {
        jumpFox.classList.add("jump")
    }

    setTimeout(function () {
        jumpFox.classList.remove("jump");
    }, 300);
}

// jump using spacebar
document.addEventListener("keydown", e=> {
    if(e.code == "Space"){
        jump();
}});

let score = 0;


setInterval(() => {
    obst = document.querySelector(".obstacle").getBoundingClientRect();
    fox = document.getElementById("fox").getBoundingClientRect();
    if(fox.right >= obst.x && fox.bottom > obst.y) { //if player touches sides or top of obstacle, end the game
        alert("you lost!");
        score = 0;
        document.getElementById("fox").style.backgroundImage = "url(imgs/my_FOX.png)"; //reset to fox when player loses IF secret level reached
        document.getElementById("container").style.backgroundImage = "" ;
        document.querySelector("obstacle").style.animation ="none";
    }else if(obst.x <= fox.x) {
        score += 1;
        document.getElementById("score").innerHTML = `Score: ${score}` ; //increment score and print it to the page
    }else if(score >= 30) {
        document.getElementById("container").style.backgroundImage = "url(imgs/ice_bg.png)"; //changes to secret level bg
        document.getElementById("fox").style.backgroundImage = "url(imgs/penguin.png)"; //changes player at certain score
    }else if(score >= 20) {
        document.getElementById("container").style.backgroundImage = "url(imgs/Summer8.png)"; //changes to level 3 bg
        // document.getElementById("container").style.backgroundColor = "pink";
        // console.log("changed color");
    }else if(score >= 10) {
        document.getElementById("container").style.backgroundImage = "url(imgs/Summer6.png)";
        
    }

},100) //checks to see if player has been hit (unit is milliseconds)

