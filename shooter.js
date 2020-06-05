class Shooter{
    constructor(x,y,width,height){
        var options = {
            restitution : 1.0,
            friction : 1.0,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
    }
    display(){
        fill('white');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}