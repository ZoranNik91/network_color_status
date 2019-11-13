# beacon() method

beacon() method checks internet status, at the right bottom side of your browser as a little colored square.

`red` - network status offline

`green` - network status online

`yellow` - network status slow internet ( under 1 Mb/s)

The program checks the internet speed by default every 10 seconds and if the speed is under 1 Mb/s it will show a yellow square at the bottom on the right side.

```
beacon() 

If theres no arguments, checks the internet speed by default every 10 seconds
```

```
beacon({sec: 2})

The method can take one argument as a object "sec" as second.

For example:

beacon({sec: 2})  -  checks the internet speed every 2 seconds

beacon({sec: 5})  -  checks the internet speed every 5 seconds
```