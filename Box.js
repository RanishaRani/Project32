class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255
    
    }
    display(){
      push();
      if (this.body.speed <= 3){
        super.display()
      }
      else{
        World.remove(world,this.body)
      tint(this.Visibility,255)
    }
    pop();
  }
    
  }
  