

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
        this.initField();

    }

    drawTile(xpos,ypos,ctx,color)
    {

        

        ctx.beginPath();
        ctx.lineWidth=1;
        ctx.strokeStyle = "#111111";
        ctx.strokeRect(xpos*this.tilesize,ypos*this.tilesize,this.tilesize,this.tilesize);
        ctx.stroke();

        ctx.fillStyle=color;
        ctx.fillRect(xpos*this.tilesize,ypos*this.tilesize,this.tilesize,this.tilesize);

    }


    draw(ctx)
    {

        for(let y = 0 ; y < this.height;y++)
        {
           

            for(let x = 0 ; x < this.width;x++)
            {

                var tileType = this.field[y][x];
                switch(tileType)
                {
                    case 'W' :
                    this.drawTile(x,y,ctx,'#00ff00');
                    break;
                    case 'O' :
                        this.drawTile(x,y,ctx,'#000000');    
                    break;
                    default :
                    this.drawTile(x,y,ctx,'#ff0000');
                     break;
                }
            }
        }

      
    }

    initField()
    {

        for(let y = 0 ; y < this.height;y++)
        {
            this.field[y] = new Array(this.width);

            for(let x = 0 ; x < this.width;x++)
            {
            
                this.field[y][x] = this.grass;
            }
        }

        console.log(this.field);
       
    }




}