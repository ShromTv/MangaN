var timeid=setInterval("day()","1000");



function contactus(){
  document.location.href="form.html";
}

function next(){
  window.history.forward();
}

function rtn(){
  window.history.back();
}
function day(){
  var now= new Date();
  var day=document.getElementById("day");

  day.innerHTML= now;

}