function setup(){
  Canvas = createCanvas(600, 500);
  Canvas.center();
}
x = 0;
y = 0;
draw_rect = "";
draw_circle = "";
var speaking = window.webkitSpeechRecognition;
var speaks = new speaking();
function start(){
  document.getElementById("status").innerHTML = "System is listening, please speak";
  speaks.start();
}
speaks.onresult = function(event)
{
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "The speech is recogonised as " + content;
if((content == "circle" ) || (content == "Circle")){
  console.log(content);
  x = Math.floor(Math.random()*600);
  y = Math.floor(Math.random()*500);
  draw_circle = "set";
  
document.getElementById("status").innerHTML = "Started drawing circle";
}
if((content == "rectangle") || (content == "Rectangle")){
  console.log(content);
  x = Math.floor(Math.random()*600);
  y = Math.floor(Math.random()*500);
  draw_rect = "set";
  document.getElementById("status").innerHTML = "Started drawing rectangle";

}
}
function draw(){
  if(draw_circle == "set"){
      radius = Math.floor(Math.random()*100);
      circle(x, y, radius);
      document.getElementById("status").innerHTML = "Circle is drawn";
      draw_circle = "";
  }
  if(draw_rect == "set"){
      rect(x, y, 100, 200);
      document.getElementById("status").innerHTML = "Rectangle is drawn";
      draw_rect = "";

  }
}