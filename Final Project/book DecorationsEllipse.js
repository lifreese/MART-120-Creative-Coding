class DecorationEllipse
{
    constructor(x,y,w,h,color)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    display()
    {
        fill (this.color);
        ellipse(this.x, this.y, this.w, this.h)
    }
}