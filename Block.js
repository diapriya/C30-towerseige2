class Block{
  constructor(x, y, width, height){

   this.body = Bodies.rectangle(x,y,width,height,{stiffness:0});
   this.width = width;
   this.height = height;
  // this.Visibility=255;
   World.add(world, this.body);


  // console.log(speed);
  }
  display(){
   if(this.body.speed<3){
  var pos =this.body.position;
  push();
  rectMode(CENTER);
  fill("lightblue");
  rect(pos.x, pos.y, this.width, this.height);
  pop();
 }

    else{
    World.remove(world,this.body);
    push ();
    this.Visibility=this.Visibility-5; 
   tint (255,this.Visibility);
     pop ();
   }
}
};
