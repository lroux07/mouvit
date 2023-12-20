import './style.css';

const cursor = document.querySelector("#cursor");

let moveLeft = 80;
let moveRight = 80;
let moveUp = 60;
let moveDown = 60;

addEventListener("keydown", function(e) {
  switch (e.code) {
    case "ArrowLeft":
      moveLeft += 80
      cursor.style.position = "relative";
      cursor.style.right = moveLeft + "px";
      break;
    case "ArrowUp":
      moveUp += 60
      cursor.style.position = "relative";
      cursor.style.bottom = moveUp + "px";
      break;
    case "ArrowRight":
      moveRight += 80
      cursor.style.marginLeft = moveRight + "px";
      break;
    case "ArrowDown":
      moveDown += 60
      cursor.style.marginTop = moveDown + "px";
      break;
  }
});