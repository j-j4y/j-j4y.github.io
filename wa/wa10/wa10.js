var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was 36 fahrenheit outside, so :insertx: went to the beach. When they got to :inserty:, they were flabbergasted, then :insertz:. You saw the whole thing, but were not concerned — :insertx: can bench 300 pounds, so you took a nap.';

var insertX = ['Spiderman from Fortnite','Anthony Davis','Lil Uzi Vert'];

var insertY = ['water','jetski rental','a hole with a bunch of crabs in it'];

var insertZ = ['did a backflip','got crushed by a grand piano','fainted'];

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('You',name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(21) + ' stone';
    var temperature =  Math.round(2.2) + ' centigrade';
    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('36 fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}