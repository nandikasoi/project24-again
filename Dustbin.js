class Dustbin {
    constructor(x,y,width,height){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction :  0.5
            
        }
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(World, this.body);
    }
    display(){
       var position = this.body.position;
       rectMode(CENTER);
       Fill(255);
       rect(position.x,position.y,this.width,this.height);
       
    }
}