var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var text = document.getElementById("text")


function Gradient(){
    text.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
    text.style.setProperty("-webkit-background-clip","text","Important")
    text.style.setProperty("-webkit-text-fill-color","transparent","Important")
    
}