class Bob {
  constructor(x,y,radius){
      var options = {
            isStatic:false,
            'restitution':1.0,
            'friction':0,
            'density':0.9,
      }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
  World.add(world, this.body);
  }
  display(){
      
      push ();
      translate(this.body.position.x, this.body.position.y);
      rotate (this.body.angle);
      ellipseMode(RADIUS)
      fill(255,0,255);
      ellipse(0,0,this.radius,this.radius) 
      pop ();
  }
}
  