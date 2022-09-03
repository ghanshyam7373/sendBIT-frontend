let c = document.createElement("canvas");
document.body.appendChild(c);
let style = c.style;
style.height = "100%";
style.position = "absolute";
style.left = 0;
style.top = 0;
let ctx = c.getContext("2d");
let x, y, w, h, d;

function init() {
  w = window.innerWidth;
  h = window.innerHeight;
  c.width = w;
  c.height = h;
  x = w / 2;
  y = h / 2;
  d = Math.max(h, w, 1000) / 13; //13 is equal to no. of circle
  drawCircles();
}

window.onresize = init;

let step = 0;

function drawCircles() {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    let color = Math.round(102 * (1 - (d * i + (step % d)) / Math.max(w, h)));
    ctx.strokeStyle = "rgba(" + 255 + "," + color + "," + 0 + ",0.2)";
    ctx.arc(x, y, d * i + (step % d), 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 2;
  }
  step += 1;
}
function animate() {
  requestAnimationFrame(function () {
    drawCircles();
    animate();
  });
}
window.backgroundAnimation = () => {
  animate();
};

init();
animate();
