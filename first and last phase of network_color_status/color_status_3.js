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


if (navigator.onLine){
    element.style.background = color_array[2];
}   
window.addEventListener("online", function(){
    element.style.background = color_array[2];
});
window.addEventListener("offline", function(){
    element.style.background = color_array[0];
});

setInterval(function(){
    var mb = navigator.connection.downlink;
    // var color = (mb > 0 && mb < 1) ?  color_array[1]  :  (mb > 1) ? color_array[2] : color_array[0] ;
    var color_index = Math.min(Math.ceil(mb), 2);
    color = color_array[color_index];

    element.style.background = color;

}, 1000);
