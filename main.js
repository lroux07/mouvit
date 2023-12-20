import './style.css';

const cursor = document.querySelector("#cursor");

document.onkeydown = function(e) {
  switch (e.code) {
    case "ArrowLeft":
      cursor.style.position = "relative";
      cursor.style.right = "80px";
      break;
    case "ArrowUp":
      cursor.style.position = "relative";
      cursor.style.bottom = "100px"
      break;
    case "ArrowRight":
      cursor.style.marginLeft = "80px";
      break;
    case "ArrowDown":
      cursor.style.marginTop = "100px";
      break;
  }
}