const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['img1.jpg', `img2.jpg`, `img3.jpg`, `img4.jpg`, `img5.jpg`];
const alts = {
  'img1.jpg' : 'the weeknd singing in fortnite',
  'img2.jpg' : 'ariana grande in fortnite',
  'img3.jpg' : 'ICE SPICE IN FORTNITE!',
  'img4.jpg' : 'Billie Eilish in fortnite',
  'img5.jpg' : 'snoop dogg in fortnite'
}


/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });