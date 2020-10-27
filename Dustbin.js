class Dustbin{
    constructor(x,y,width,height){
   var option={
       isStatic : true
   }
   this.body = Bodies.rectangle(x,y,width,height,option)
   this.image = loadImage("dustbingreen.png")
   World.add(world,this.body)
   this.w = width
   this.h = height
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
       
        image(this.image,pos.x,pos.y,this.w,this.h)
    }
}