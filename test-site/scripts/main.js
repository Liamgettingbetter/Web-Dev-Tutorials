var myImage = document.querySelector("img");

myImage.onClick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/Assassin's_Creed.jpg") {
        myImage.setAttribute("src", "images/mark.png");
    } else {
        myImage.setAttribute("src", "images/Assassin's_Creed.jpg");
    }
}

var myButton  = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onClick = function() {
    setUserName();
}