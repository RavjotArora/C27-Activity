class Chain {

constructor(bodyA, bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:30,
    stiffness:0.04 

}

this.chain = Constraint.create(options);
World.add(world, this.chain)
}

display(){
var PointA = this.chain.bodyA.position
var PointB = this.chain.bodyB.position
stroke("white");
strokeWeight(5);
line(PointA.x,PointA.y,PointB.x, PointB.y )

}


}