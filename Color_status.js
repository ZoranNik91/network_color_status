function beacon(options){

    var default_ms = 10000;
    
    if (options  &&  typeof options === 'object') {
        options =  options.sec * 1000;
        console.log(options)
    } else {
        options = default_ms;
        console.log(options)
    }
    
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
    setInterval(changeColor, options);
    changeColor();
} 