var is_paused = false;
var count_jump = 0;
var first_press = 0;

// head

var arc_end = 300;
var head_1 = 318;
var head_2 = 360;
var head_3 = 380;
var eye1 = 300;
var eye2 = 297;
var mouth_h = 320;
var mouth_m1 = 400;
var mouth_m2 = 350;


// prop

var prop_x1 = 400;
var prop_x2 = 800;


let intervalGame;
let intervalId;
let intervalDraw;


var text_size = 30;
var text_count = 0;

var score = 0;

var best_score = 0;

function static_player () {
    var canvas = document.getElementById("cnv");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 500, 700);
    ctx.lineWidth = 2;

    // background
    ctx.beginPath();
    ctx.fillStyle="lightblue";
    ctx.fillRect(0,0,700,500);
    ctx.strokeStyle = "green";
    ctx.moveTo(0, 400);
    ctx.lineTo(700, 400);
    ctx.fillStyle="lightgreen";
    ctx.fillRect(0, 400, 700, 200);
    ctx.stroke();

    // head

    ctx.beginPath();
    ctx.fillStyle = "rgb(245, 181, 98)";
    ctx.moveTo(93, head_1);
    ctx.lineTo(110, head_2);
    ctx.lineTo(150, head_3);
    ctx.lineTo(190, head_2);
    ctx.lineTo(207, head_1);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "black";

    ctx.arc(150, arc_end, 60, 0.9*Math.PI, 2.1*Math.PI, false);
    ctx.fillStyle = "rgb(245, 181, 98)";
    ctx.fill();

    ctx.moveTo(93, head_1);
    ctx.lineTo(110, head_2);

    ctx.moveTo(207, head_1);
    ctx.lineTo(190, head_2);

    ctx.moveTo(190, head_2);
    ctx.lineTo(150, head_3);

    ctx.moveTo(110, head_2);
    ctx.lineTo(150, head_3);
    ctx.stroke();

    //left eye

    ctx.beginPath();
    ctx.arc(130, eye1, 15, 0, 2*Math.PI, false);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(130, eye1, 4, 0, 2*Math.PI, false);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(132, eye2, 2, 0, 2*Math.PI, false);
    ctx.fillStyle="white";
    ctx.fill();

    // right eye

    ctx.beginPath();
    ctx.arc(170, eye1, 15, 0, 2*Math.PI, false);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(170, eye1, 4, 0, 2*Math.PI, false);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(172, eye2, 2, 0, 2*Math.PI, false);
    ctx.fillStyle="white";
    ctx.fill();

    // mouth

    ctx.beginPath();
    ctx.moveTo(190, mouth_h);
    ctx.quadraticCurveTo(150, mouth_m1, 110, mouth_h);
    fillStyle= "white";
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(190, mouth_h);
    ctx.quadraticCurveTo(150, mouth_m2, 110, mouth_h);
    ctx.fillStyle = "rgb(245, 181, 98)";
    ctx.fill();
    ctx.stroke();

    // funny body

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, head_3);
    ctx.lineTo(150, head_3+10);
    ctx.stroke();

    // funny arms

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, head_3);
    ctx.lineTo(145, head_3+10);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, head_3);
    ctx.lineTo(155, head_3+10);
    ctx.stroke();

    // funny legs

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, head_3+10);
    ctx.lineTo(145, head_3+20);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(150, head_3+10);
    ctx.lineTo(155, head_3+20);
    ctx.stroke();
    

    // prop 

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(prop_x1, 300, 50, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(prop_x2, 300, 50, 100);
    ctx.stroke();
}

function draw_int() 
{
    intervalDraw = setInterval(draw, 20);
}

function draw() 
{
    static_player ();


    // text
    var canvas = document.getElementById("cnv");
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.fillStyle = "black";

    if (text_size < 40 && text_count == 0) 
    {
        ctx.font = `${text_size += 0.2}px Roboto`;
        text_count = text_size >= 35 ? 1 : 0;
    }
    else 
    {
        ctx.font = `${text_size -= 0.2}px Roboto`;
        text_count = text_size <= 30 ? 0 : 1;
    }

    ctx.fillText("PRESS START", 100, 100);
    ctx.stroke();
}


function home_start() 
{
    document.getElementById("home_screen").style.display = "none";
    document.getElementById("wrapper").style.display = "flex";
}

function jump () 
{
    if (first_press == 0) 
    {
        document.getElementById("jump_btn").value = "JUMP";
        intervalGame = setInterval(game, 20);
        first_press++;
        clearInterval(intervalDraw);
    }
    else if (first_press == 2) 
    {
        if (score > best_score) best_score = score;

        score = 0;
        is_paused = false;
        count_jump = 0;
        first_press = 0;
        arc_end = 300;
        head_1 = 318;
        head_2 = 360;
        head_3 = 380;
        prop_x1 = 400;
        prop_x2 = 800;
        eye1 = 300;
        eye2 = 297;
        mouth_h = 320;
        mouth_m1 = 400;
        mouth_m2 = 350;
        draw_int();
        document.getElementById("jump_btn").value = "START";
        document.getElementById("score").innerHTML = "Score: " + score;
        document.getElementById("best_score").innerHTML = "Best score: " + best_score;
    }
    else jumping();
}

function jump_speed (s) 
{
    arc_end += s;
    head_1 += s;
    head_2 += s;
    head_3 += s;
    eye1 += s;
    eye2 += s;
    mouth_h += s;
    mouth_m1 += s;
    mouth_m2 += s;
}

function jumping () 
{
    document.getElementById("jump_btn").style.visibility = "hidden";

    intervalId = setInterval(() => 
    {
        if (head_3 > 250 && count_jump == 0) 
        {
            if (head_3 >= 300) jump_speed(-5);
            else if (head_3 >= 270) jump_speed(-3);
            else jump_speed(-2);
            console.log(head_3);
            
            if (head_3 <= 250) 
            {
                is_paused = true;
                count_jump++;
                setTimeout(() => {
                    is_paused = false;
                }, 50);
            }
        } 
        else if (head_3 < 380 && !is_paused) 
        {
            console.log(head_3);
            if (head_3 <= 270) jump_speed(3);
            else if (head_3 <= 300) jump_speed(4);
            else jump_speed(5);

            if (head_3 >= 380) 
            {
                clearInterval(intervalId);
                document.getElementById("jump_btn").style.visibility = "visible";
                count_jump = 0;
            }
        }
    }, 20);
}


function game () {
    static_player ();
    console.log(prop_x2, prop_x1);

    prop_x1 -= 5;
    prop_x2 -= 5;


    // checker

    if (prop_x1 > 65 && prop_x1 < 185 && head_3 > 310) game_over();
    if (prop_x1 < -50)
    {
        prop_x1 = 800;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    if (prop_x2 > 65 && prop_x2 < 185 && head_3 > 310) game_over();
    if (prop_x2 < -50) 
    {
        prop_x2 = 800;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}


function game_over() {
    clearInterval(intervalId);
    clearInterval(intervalGame);
    document.getElementById("jump_btn").value = "TRY AGAIN";
    document.getElementById("jump_btn").style.visibility = "visible";
    first_press++;

    var canvas = document.getElementById("cnv");
    var ctx = canvas.getContext("2d");


    // game over screen
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(200, 155, 290, 190);
    ctx.fillStyle = "white";
    ctx.fillRect(205, 160, 280, 180);
    ctx.font = "30px Roboto";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", 255, 210);
    ctx.fillStyle = "black";
    ctx.fillText("SCORE: " + score, 255, 260);
    ctx.fillText("BEST SCORE: " + best_score, 255, 310);
    ctx.stroke();
}


function rain() {
    var count = 0;
    while (count < 50) {
        var rain_start = Math.floor(Math.random() * 500);
        var rain_end = Math.floor(Math.random() * 500);
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.moveTo(rain_start, rain_end);
        ctx.lineTo(rain_start-10, rain_end+20);
        ctx.stroke();
        count++;
    }
}