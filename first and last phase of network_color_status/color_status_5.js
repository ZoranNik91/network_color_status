var element = document.createElement("div");
element.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: red;
    bottom: 0;
    right: 0;`;
var color_array = ["#f00",  "#fa0", "#0f6"]; 
document.body.appendChild(element);


function changeColor(){
    var mb = navigator.connection.downlink;
    var color_index = Math.min(Math.ceil(mb), 2);
    color = color_array[color_index];
    element.style.background = color;
}

setInterval(changeColor, 10000);
changeColor();

window.addEventListener("online", changeColor);
window.addEventListener("offline", changeColor);