document.getElementById('getComicButton').addEventListener('click', function() {

    const randomComicNumber = Math.floor(Math.random() * 3000) + 1;

    
    fetch(`https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`)
        .then(res => res.json())
        .then(data => {
            // Update the comic title, image, and published date
            document.getElementById('comicTitle').innerText = data.title;
            document.getElementById('comicImage').src = data.img;
            document.getElementById('comicImage').alt = data.alt;

            const formattedDate = formatDate(data.year, data.month, data.day);
            document.getElementById('publishDate').innerText = "Date Published: " + formattedDate;

            console.log(data)
        })
        .catch(error => {console.log(error);});
});

// properly formatting date
function formatDate(year, month, day) {
    return new Date(year, month - 1, day).toLocaleDateString("en-US");
} //month is - 1 beacuse java starts at 0 (same in python)