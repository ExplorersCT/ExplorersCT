var exploreButton = document.getElementById('explore-button');
var iframe = document.getElementById('iframe');
var randomPages = [
    "https://www.youtube.com/embed/OwQcv7TyX04",
    "https://www.youtube.com/embed/g9VjiTDbVDk",
    "https://www.youtube.com/embed/-0gED3rn2Tc",
    "https://www.youtube.com/embed/T-RtG5Z-9jQ"];
var randomPage = randomPages[Math.floor(Math.random()*randomPages.length)];

// Display a random iframe source at the first visit
iframe.src = randomPage;

//when pressing the Explore button
exploreButton.addEventListener('click', function() {

    //get random page 
    randomPage = randomPages[Math.floor(Math.random()*randomPages.length)];

    //change the iframe source
    iframe.src = randomPage;

});