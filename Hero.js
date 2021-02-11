class Hero{
    constructor(x,y,radius){
        var options = {
            density : 1,
            frictionAir : 0.05  
        }

        this.radius = radius;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x,y,radius/2,options);
        
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}