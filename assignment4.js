//assign an ID to the circles to give them animation
//add event listener to to circles to start animation

var cir = document.getElementById('circle');
//assign top of letter P to an ID
var p = document.getElementById('circle-top');
var rec = document.getElementById('rect-bottom');
var cir2 = document.getElementById('circle2');
var l = document.getElementById('rectangle');


cir.addEventListener("click", ChangeCircleBg);
p.addEventListener("click", ChangeCircleTopBg);
rec.addEventListener("click", ChangeRectangleBg);
cir2.addEventListener("click", ChangeCircle2Bg);
l.addEventListener("click", ChangeRectangle1Bg);
rec.addEventListener("mouseover", ChangeStickPos);
rec.addEventListener("mouseout", ChangeBackStickPos);

function ChangeCircleBg(){
  cir.style.backgroundColor = "#31e390";
}

function ChangeCircleTopBg(){
  p.style.backgroundColor = "#df43a1";
}

function ChangeRectangleBg(){
  rec.style.backgroundColor = "#df43a1";
}

function ChangeCircle2Bg(){
  cir2.style.backgroundColor = "#f9e03c";
}

function ChangeRectangle1Bg(){
  l.style.backgroundColor = "#df43a1";
}
function ChangeStickPos(){
  rec.style.left = "20%";
}
function ChangeBackStickPos(){
  rec.style.left = "65%";
}
