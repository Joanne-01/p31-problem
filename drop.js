class Drop{
    constructor(x,y) {
        var options = {
            isStatic: true
    }
    this.body = Bodies.circle(x,y,options);
    this.x = x;
    this.y = y;
    World.add(world, this.body);
}
}
function rain(){
    if(this.rain.position.y > height )
    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)}) 
}