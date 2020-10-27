class Paper{
    constructor(){
var option ={
    restitution : 0.3,
    friction : 0.5,
    density :1.2
}
this.body= Bodies.circle(100,50,40,option)
this.image=loadImage("paper.png")
World.add(world,this.body)
    }
display(){
console.log("hi")
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,45,45)
    pop()
}
}