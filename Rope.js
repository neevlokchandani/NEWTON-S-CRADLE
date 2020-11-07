class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;


        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("black")

        var P1X = pointA.x;
        var P1Y = pointA.y;

        var P2X = pointB.x+this.offsetX;
        var P2Y = pointB.y+this.offsetY;

        line(P1X, P1Y, P2X, P2Y);
    }
}