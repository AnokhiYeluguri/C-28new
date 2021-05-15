class Slingshot{

    constructor (body1,pointB){
        var options ={
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04,
        }

        this.chain = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.chain)
    }
    display(){

if(this.chain.bodyA){
    var p1 = this.chain.bodyA.position;
    var p2 = this.pointB
    strokeWeight(3)
    line(p1.x,p1.y,p2.x,p2.y)
}

    }
    fly(){

        this.chain.bodyA = null
    }
}