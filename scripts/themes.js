let body = document.querySelector('body');

document.getElementById('modecheck').addEventListener('click',()=>{
  if(body.style.backgroundColor ==="black"){
    body.style.backgroundColor = "white";
    document.getElementById('navlogo').src = "/assets/dark-logo.png";
    document.getElementById('server-name').style.color = "black";
    document.getElementById('infoicon').style.color = "black";
    document.getElementById('modeicon').style.color = "black";
  }
  else{
    body.style.backgroundColor = "black";
    document.getElementById('navlogo').src = "/assets/light-logo.png";
    document.getElementById('server-name').style.color = "white";
    document.getElementById('infoicon').style.color = "white";
    document.getElementById('modeicon').style.color = "white";
  }
})