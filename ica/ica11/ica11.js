

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);

}

var future = ""
tellFortune('pro-gamer', 'Toronto', 'Gunna', 2);
tellFortune('mailman', 'Russia', 'Beyonce', 23);
tellFortune('limosine driver', 'Beijing', 'Jeff Bezos', 0);

document.getElementById('fortune').innerHTML = future;


document.getElementById("generate").addEventListener("click", function(e){
    tellFortune(future)});


// dog age 
