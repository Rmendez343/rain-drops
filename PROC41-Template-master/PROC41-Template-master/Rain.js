class drops{
        constructor(x,y,r){
		var options={
			restitution:1,
			friction:0,
			density:0.2
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			
	}

}
    var maxDrops=100;
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }