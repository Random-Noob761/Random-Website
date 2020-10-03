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


var i = 0;

function test() {
   if(i<=3) {
     i++;
     console.log(i);
   } 
   else {
     i=0;
     console.log(i);
   }
}
