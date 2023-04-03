
//head var
var headX=300;
var headY=300;

//ear var
var earX=200;
var earY=325;

//eyebrow var
var browY=250;

//neck var
var neckX=280;
var neckY=50;

//mole var
var moleX=375;
var moleY=350;


//text var
var size=10;
var count=0;
var sizeDirection=2;

//Move Vars
var movement= 1;

function setup () {
    createCanvas(600,600);
    movement = floor(random() * 10) + 1;
}

function draw () {
    background(500);

    strokeWeight(5);
//ear
    ellipse(earX,earY,40,50);
  if(earX <= 175 || earX >= 350)
  {
    movement*=-1;
  }
  
  earX += movement
    

//chest
    triangle(310,450,400,600,200,600);
//neck
    rect(neckX,400,neckY,100);
    
   
//head
    ellipse(headX,headY,200,275);
    if(headX <= 275 || headX >= 325)
    {
        movement*=-1;
    }

    headX += movement

//mole
    point (moleX,moleY)
if(moleX <= 300 || moleX>= 400)
{
    movement*=-1;
}
moleX += movement
if(moleY <= 300 || moleY >=400)
{
    movement*=-1;
}
moleY += movement
   

    line(250,225,175,275);
    line(250,225,325,200);
    line(325,200,325,165);
    line(175,275,200,300);
    line(150,290,200,300);
    line(150,290,150,250);
    line(150,250,175,200);
    line(175,200,300,150);
    line(300,150,325,165);

    line(325,200,375,250);
    line(375,250,400,270);
    line(425,250,400,270);
    line(425,250,425,200);
    line(425,200,325,165);

//eyes
    circle(250,300,50);
    circle(350,300,50);


    line(275,300,225,300);
    line(375,300,325, 300);
    circle(300,365,20);
    circle(250,310,15);
    circle(350,310,15);

    ellipse(270,325,45,35);
    ellipse(350,325,45,35);
//eyebrows
    rect(200,browY,50,10);
    rect(325,browY,50,10);
    if(browY <= 200)
    {
        movement*=-1;
    }
    if(browY >= 300)
    {
        movement*=-1;
    }
    browY += movement

    circle(300,365,20);
    triangle(300,300,325,375,300,375);
    line(290,325,325,325);

    line(275,400,300,400);
    line(275,400,250,390);
//text
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 20)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('by: Lila F.', 400,150);
    text('Self Portrait,', 400,100)
   
   
}
