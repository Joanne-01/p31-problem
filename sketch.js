var drop;

function preload(){
    
}

function setup(){
    createCanvas(600,600)
   var maxDrops = 100;
   for(var i=0; i<maxDrops; i++){
    drop.push(new createDrop(random(0,400), random(0,400)));
   }
    
}

function draw(){
   drop.display();
    
}   

