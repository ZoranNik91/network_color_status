# beacon() 

Beacon creates a small square in the bottom right corner of the window.
Changes colors depending on the current internet connection status:

- `red` - network status offline
- `green` - network status online
- `yellow` - network status slow internet ( under 1 Mb/s)

  
It changes color instantaneously if the network is off or back on.
Additionally it checks the internet speed every 10 seconds changing the color to yellow if the internet speed drops below 1Mb/s.

```
beacon() 
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `sec` |  Integer | `10` | interval in seconds to check internet status |
| `x` |  Integer | `100` | x-axis position on window (0 - 100) |
| `y` |  Integer | `100` | y-axis position on window (0 - 100) |
| `size` |  Integer | `10` | size of the square in pixels |
| `colors` |  Array | `["#f00", "#fc0", "#0f6"]` | 3 colors of network status: red, yellow, green |
| `zIndex` |  Integer | `2147483647` | z-index position of the square |


### Example

```
beacon({
    x: 50,
    y: 50, 
    sec: 20, 
    size: 200, 
    colors: ["rgb(255, 30, 30)", "orange", "#0000FF"],
    zIndex: 9999
})
```


<hr>

Licence: MIT
