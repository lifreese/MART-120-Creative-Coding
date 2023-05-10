var bookShapeObject;

var bookDecorRectObject;

var bookDecorEllipseObject;


function setup()
{
    createCanvas(1500,800);

    //Shelf
    ShelfObject = new bookShapes(0,500,1500,200,75,30,0);
    ShelfObject2 = new bookShapes(0,700,1500,100,50,20,0);

    //Picture Frame With Instructions
    FrameObject = new bookShapes(600,50,400,400,10,10,10);
    FrameObject2 = new bookShapes(625,75,350,350,500,500,210);
    
    //book shapes
    DraculaObject = new bookShapes(100,50,100,600,100,0,0,);
    MetaObject = new bookShapes(200,75,75,575,0,50,0);
    TurnObject = new bookShapes(275,50,75,600,0,0,50);
    FrankObject = new bookShapes(350,75,100,575,100,50,0);
    DorianObject = new bookShapes(450,100,50,550,50,0,70);
    YellowObject = new bookShapes(500,75,50,575,150,100,0);

    //book decorations

    DraculaDecorObject = new bookDecorationRect(100,25,100,25,'silver');
    DraculaDecorObject2 = new bookDecorationRect(100,150,100,15,'black');
    DraculaDecorObject3 = new bookDecorationRect(100,550,100,15,'black');

    MetaDecorObject2 = new bookDecorationRect(200,50,100,25, 'silver');
    ////Bug Parts
    MetaDecorObject = new DecorationEllipse(235,150,30,50,'black');
    MetaDecorObject3 = new DecorationsLine(235,125,210,100,'black');
    MetaDecorObject4 = new DecorationsLine(235,125,260,100,'black');
    MetaDecorObject5 = new DecorationsLine(210,150,260,150,'black');
    MetaDecorObject6 = new DecorationsLine(210,125,260,175,'black');
    MetaDecorObject7 = new DecorationsLine(210,175,260,125,'black');

    TurnDecorObject = new bookDecorationRect(275,25,75,25,'silver');
    TurnDecorObject2 = new bookDecorationRect(275,200,100,300,'black');

    FrankDecorObject = new bookDecorationRect(350,50,100,25,'silver');
    ////Eye Parts
    FrankDecorObject2 = new DecorationEllipse(400,125,75,50,'white');
    FrankDecorObject3 = new DecorationEllipse(400,125,25,50,'black');
    ////Bands
    FrankDecorObject4 = new bookDecorationRect(350,200,100,25,'brown');
    FrankDecorObject5 = new bookDecorationRect(350,500,100,25,'brown');

    DorianDecorObject = new bookDecorationRect(450,75,50,25,'silver');

    YellowDecorObject = new bookDecorationRect(500,50,50,25,'silver');
    YellowDecorObject2 = new bookDecorationRect(500,125,50,475,'yellow');

    //Candle Using files made
    CandleObject = new bookDecorationRect(650,500,75,125,'white');
    CandleFlameObject = new DecorationEllipse(680,450,25,75,'yellow');
    CandleWickObject = new DecorationsLine(680,475,680,525,'black');

    

    
}

function draw()
{
    background(50);
    strokeWeight(5);

    //Frame
    FrameObject.display();
    FrameObject2.display();
    
    FrameText();

    //Shelf
    ShelfObject.display();
    ShelfObject2.display();

    //Dracula
    
    DraculaObject.display();
    DraculaDecorObject.display();
    DraculaDecorObject2.display();
    DraculaDecorObject3.display();
    
    //Metemorphasis
    MetaObject.display();
    ////Bug Parts
    MetaDecorObject.display();
    MetaDecorObject2.display();
    MetaDecorObject3.display();
    MetaDecorObject4.display();
    MetaDecorObject5.display();
    MetaDecorObject6.display();
    MetaDecorObject7.display();

    //Turn of the Screw

    TurnObject.display();
    TurnDecorObject.display();
    TurnDecorObject2.display();

    //Frankenstein
    FrankObject.display();
    FrankDecorObject.display();
    FrankDecorObject2.display();
    FrankDecorObject3.display();
    FrankDecorObject4.display();
    FrankDecorObject5.display();

    //Dorian Grey
    DorianObject.display();
    DorianDecorObject.display();

    //Yellow Wallpaper
    YellowObject.display();
    YellowDecorObject.display();
    YellowDecorObject2.display();

    //Candle
    CandleObject.display();
    CandleFlameObject.display();
    CandleWickObject.display();
    
    //Links

    //Titles
    BookTitles();
    
}

function FrameText()
{
    fill('black');
    textSize(30);
    textFont('Cursive');
    text('Welcome to the Library!', 650,125);

    textSize(20);
    text('If you like spooky stories then our little ', 640,175);
    text('shelf will be perfect for you!  If you find',640, 225);
    text('a book you are interested in, just click on',640,275);
    text('it with your mouse cursor to check it out!',640,325);

    textSize(15);
    text('Brought to you by the Forg Family Foundation,', 650,375);
    text('building a better pond together since 1999!',650,400);
}

function BookTitles()
{

}