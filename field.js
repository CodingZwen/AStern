

export default class Field 
{

    
    constructor(width,height,tilesize)
    {
        this.width = width;
        this.height = height;
        this.tilesize = tilesize;
        this.field = [];
        this.obstacle = 'O';
        this.grass = 'W';

    }

    drawTile(xpos,ypos,ctx)
    {

        ctx.beginPath();
        ctx.lineWidth=1;

        ctx.strokeStyle = "#111111";
        ctx.strokeRect(xpos,ypos,this.tilesize,this.tilesize);
        ctx.stroke();


    }


    draw(ctx)
    {

        for(let y = 0 ; y < this.height;y++)
        {
            this.field[y] = new Array(this.width);

            for(let x = 0 ; x < this.width;x++)
            {

                this.drawTile(x*this.tilesize,y*this.tilesize,ctx);
                console.log("ich versuche zu malen");
                this.field[y][x] = this.grass;
            }
        }

        console.log(this.field);
    }

    initField()
    {

        for(let y = 0 ; y < this.height;y++)
        {
            this.field[y] = new Array(this.width);

            for(let x = 0 ; x < this.width;x++)
            {

                this.drawTile(x*this.tilesize,y*this.tilesize,ctx);              
                this.field[y][x] = this.grass;
            }
        }

        console.log(this.field);
    }




}