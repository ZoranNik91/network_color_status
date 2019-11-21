function beacon(options){

    const opt = Object.assign({
        zIndex: 2147483647,
		sec: 10,        // seconds
        x:100,          // percentage
        y:100,          // percentage
		size: 10,       // pixels
		colors: ["#f00", "#fc0", "#0f6"],
	}, options);
    
    const element = document.createElement("div");

    var ox = opt.size * opt.x / 100;
    var oy = opt.size * opt.y / 100;

    element.style.cssText = `
        position: fixed;
        z-index: ${opt.zIndex};
        width: ${opt.size}px;
        height: ${opt.size}px;
        background: red;
        left: calc(${opt.x}% - ${ox}px);
        top: calc(${opt.y}% - ${oy}px);
        `;

    document.body.appendChild(element);

    function changeColor(){
        var i = Math.min(Math.ceil( navigator.connection.downlink), 2);
        element.style.background = opt.colors[i];
    }

    window.addEventListener("offline", changeColor);
    window.addEventListener("online", changeColor);
    setInterval(changeColor, opt.sec * 1000);
    changeColor();
}
