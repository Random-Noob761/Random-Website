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

var picNo = 0;

function previousImage() {
  if(picNo >=1) {
    picNo--;
    if(picNo == 1) {
      document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8MXQlwEkaqA%2Fmaxresdefault.jpg&f=1&nofb=1";
      console.log(picNo);
    }

    if(picNo == 0) {
      document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fiomega-europe.com%2Fwp-content%2Fuploads%2F2019%2F03%2Famong-us.png&f=1&nofb=1";
      console.log(picNo);
    }
  }
  else {
    picNo = 2;
        document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apkmody.io%2Fuploads%2F2018%2F07%2FBloons-TD-6.jpg&f=1&nofb=1";
    console.log(picNo);
  }
}

function nextImage() {
    if(picNo <=1) {
    picNo++;
    if(picNo == 1) {
      document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apkmody.io%2Fuploads%2F2018%2F07%2FBloons-TD-6.jpg&f=1&nofb=1";
      console.log(picNo);
    }

    if(picNo == 2) {
      document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8MXQlwEkaqA%2Fmaxresdefault.jpg&f=1&nofb=1";
      console.log(picNo);
    }
  }
  else {
    picNo = 0;
        document.getElementById("fav-game-pics").src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fiomega-europe.com%2Fwp-content%2Fuploads%2F2019%2F03%2Famong-us.png&f=1&nofb=1";
    console.log(picNo);
  }
}


