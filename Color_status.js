var element = document.createElement("div");
element.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: red;
    bottom: 0;
    right: 0;`;

// network API

var color_array = ["red",  "#fa0", "#0f0"]; 

// document.createElement("div").style.background = color_array[1]; // yellow - low internet speed (under 1 mb/s)
// document.createElement("div").style.background = color_array[2]; // green - has internet  

document.body.appendChild(element);

element.style.background = color_array[2];





