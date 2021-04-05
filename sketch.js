var hr,min,sec;
var hrAngle,minAngle,secAngle;


function setup() {
  createCanvas(400,400);

  angleMode(DEGREES)
}

function draw() {
  background(0);  
 
  translate(200,200)
  rotate(-90)

  //calculate time using predefined functions
 hr = hour();
 min = minute();
 sec = second();

 secAngle=map(sec,0,60,0,360)
 minAngle=map(min,0,60,0,360)
 hrAngle=map(hr % 12,0,12,0,360)


 //draw the sec hand
 push();
 rotate(secAngle)
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 pop();
 //draw the min hand
 push();
 rotate(minAngle)
 stroke(0,255,0)
 strokeWeight(7)
 line(0,0,75,0)
 pop();

 //draw the hr hand
 push();
 rotate(hrAngle)
 stroke(0,0,255)
 strokeWeight(7)
 line(0,0,50,0)
 pop();

 stroke(255,0,255);
 point(0,0);

 //drawing arcs
 strokeWeight(10)
 noFill();

//seconds
stroke(255,0,0)
arc(0,0,300,300,0,secAngle);

//minutes
stroke(0,255,0)
arc(0,0,280,280,0,minAngle);

//hour
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle);

}