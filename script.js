import Field from "./field.js";



var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var w_height = 400;
var f = new Field(10,10,50);
var w_width = 600;
canvas.height = 400;
canvas.width = 600;




function update()
{

   f.draw(ctx);
}


function run ()
{
    setInterval(update,50);
}



run();

