import './style.css';


// Gameplay

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


// Menu

const menu = document.querySelector("#menu");

const btn_moins = document.querySelector("#btn_moins");
const p_counter = document.querySelector("#counter");
let counter = 10
const btn_plus = document.querySelector("#btn_plus");
const validate_btn = document.querySelector("#validate_btn");

// Moins

btn_moins.addEventListener("click", ()=> {
  counter--
  p_counter.textContent = counter

  if(counter <= 1) {
    btn_moins.disabled = true
  } else if(counter <= 15) {
    btn_plus.disabled = false
  }
})


// Plus

btn_plus.addEventListener("click", ()=> {
  counter++
  p_counter.textContent = counter

  if(counter >= 15) {
    btn_plus.disabled = true
  } else if(counter > 1) {
    btn_moins.disabled = false
  }
})

validate_btn.addEventListener("click", ()=> {
  menu.style.display = "none";
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    menu.style.display = "flex";
  }
});