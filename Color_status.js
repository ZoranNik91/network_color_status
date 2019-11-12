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
    var i = Math.min(Math.ceil( navigator.connection.downlink), 2);
    element.style.background = color_array[i];
}

window.addEventListener("offline", changeColor);
window.addEventListener("online", changeColor);
setInterval(changeColor, 10000);
changeColor();

// TODO (dok importam tvoj projekt u neki moj) beacon() // interval 10 s default, ili ovako: beacon({sec:5 }); 