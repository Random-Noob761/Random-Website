var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;

window.onload = function() {
  var introduction = document.getElementById ("introduction");
  introduction.style.width = screenWidth * 5/8 + "px";
  introduction.style.marginTop = screenHeight * 25/960 + "px";
  introduction.style.marginBottom = screenHeight * 75/960 + "px";

  var info1 = document.getElementById("likesDislikes");
  info1.style.marginLeft = screenWidth * 1/6 + "px";
  info1.style.marginRight = screenWidth * 1/6 + "px";
  info1.style.marginBottom = screenHeight * 50/960 + "px";

  var gameImages = document.getElementById("fav-game-pics")
  gameImages.style.width = screenWidth * 1/3 + "px"
  gameImages.style.height = screenWidth * 1/6 + "px"

  var container = document.getElementById("container")
  container.style.width = screenWidth * 2/3 + "px"
  container.style.height = screenHeight * 1/3 + "px"
}

function show() {
  var a = document.getElementById ("hc")
  a.style.display = "block"

  var a1 = document.getElementById ("buttonShow")
  a1.style.visibility = "hidden"

  var a2 = document.getElementById ("buttonHide")
  a2.style.visibility = "visible"
}

function hide() {
  var a = document.getElementById ("hc")
  a.style.display = "none"

  var a1 = document.getElementById ("buttonHide")
  a1.style.visibility = "hidden"

  var a2 = document.getElementById ("buttonShow")
  a2.style.visibility = "visible"
}

function changeText() {
  document.getElementById("colorMode").setAttribute( "onClick","javascript: changeText1();")

  var x = document.getElementById ("x")
  x.style.background = "orange";
  x.style.color = "black"

  var x1 = document.getElementById ("hc")
  x1.style.color = "black"

  document.getElementById("colorMode").innerHTML = "Dark Theme"

}

function changeText1() {
  document.getElementById("colorMode").setAttribute ("onClick", "javascript: changeText();")

  var x = document.getElementById ("x")
  x.style.background = "rgb(24,24,24)";
  x.style.color = "rgb(200,200,200)"

  var x1 = document.getElementById ("hc")
  x1.style.color = "rgb(200,200,200)"

  document.getElementById("colorMode").innerHTML = "Light Theme"
}


var gamePics = [
  "https://wallpapercave.com/wp/BpfSrOJ.jpg",
  "https://wallpapercave.com/wp/wp7501215.jpg",
  "https://wallpapercave.com/wp/wp6803685.jpg"
];

var currentNo = 0;

function previousImage() {
  function findNo(picNo) {
    return picNo == document.getElementById("fav-game-pics").getAttribute("src")
  }
  currentNo = gamePics.findIndex(findNo);
  if (currentNo === 0){
    document.getElementById("fav-game-pics").setAttribute("src", gamePics[gamePics.length - 1])
  } else {
  document.getElementById("fav-game-pics").setAttribute("src", gamePics[(currentNo - 1) % gamePics.length]);
  }
}


function nextImage() {
  function findNo(picNo) {
    return picNo == document.getElementById("fav-game-pics").getAttribute("src")
  }
  currentNo = gamePics.findIndex(findNo);
  document.getElementById("fav-game-pics").setAttribute("src", gamePics[(currentNo + 1) % gamePics.length]);
}



