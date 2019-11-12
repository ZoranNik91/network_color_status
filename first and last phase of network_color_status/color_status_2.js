var element = document.createElement("div");
element.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: red;
    bottom: 0;
    right: 0;`;

var color_array = ["red",  "yellow", "green"]; 

// document.createElement("div").style.background = color_array[1]; // yellow - low internet speed (under 1 Mb/s)
// document.createElement("div").style.background = color_array[2]; // green - has internet  

document.body.appendChild(element);

//navigator.connection
//navigator.connection.downlink // shows the internet download speed in Mb/s    
//navigator.onLine // true if is online, false if is offline

if (navigator.onLine){
    element.style.background = color_array[2];
}   
window.addEventListener("online", function(){
    element.style.background = color_array[2];
});
window.addEventListener("offline", function(){
    element.style.background = color_array[0];
});

/*
window.addEventListener("slow", function(event) {
    element.style.background = event.detail.name; 
});
*/

setInterval(function(){
    var mb_second = navigator.connection.downlink;
    var color = (mb_second > 0 && mb_second < 1) ?  color_array[1]  :  (mb_second > 1) ? color_array[2] : color_array[0]  ;
    element.style.background = color_array[]; 

    /*
    console.log(navigator.connection.downlink);

    if (mb_second < 1 && mb_second > 0) {
        window.dispatchEvent(new CustomEvent("slow", {
            detail: { name: color_array[1] }
        }));        
    }
    if (mb_second > 1) {
        window.dispatchEvent(new CustomEvent("slow", {
            detail: { name: color_array[2] }
        }));   
    } 
    */
}, 1000);


/*
navigator.connection.downlink  from MDN Documentation:
The downlink read-only property of the NetworkInformation
interface returns the effective bandwidth estimate in megabits per second,
rounded to the nearest multiple of 25 kilobits per seconds.
This value is based on recently observed application layer
throughput across recently active connections, excluding connections made 
to a private address space. In the absence of recent bandwidth measurement
data, the attribute value is determined by the properties of the underlying connection technology.
*/