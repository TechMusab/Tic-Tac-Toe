let turn = "x";
let turnaudio = new Audio("ting.mp3");
let myturntext = document.querySelector(".info");
const myboxes = document.querySelectorAll(".box");
const win = document.querySelector(".win");
let reset = document.querySelector("#reset");
console.log(myboxes[2]);
function changeturn() {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
}
function checkwin() {
  if (
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[1].innerHTML &&
      myboxes[1].innerHTML === myboxes[2].innerHTML) ||
    (myboxes[3].innerHTML !== "" &&
      myboxes[3].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[5].innerHTML) ||
    (myboxes[6].innerHTML !== "" &&
      myboxes[6].innerHTML === myboxes[7].innerHTML &&
      myboxes[7].innerHTML === myboxes[8].innerHTML) ||
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[3].innerHTML &&
      myboxes[3].innerHTML === myboxes[6].innerHTML) ||
    (myboxes[1].innerHTML !== "" &&
      myboxes[1].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[7].innerHTML) ||
    (myboxes[2].innerHTML !== "" &&
      myboxes[2].innerHTML === myboxes[5].innerHTML &&
      myboxes[5].innerHTML === myboxes[8].innerHTML) ||
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[8].innerHTML) ||
    (myboxes[2].innerHTML !== "" &&
      myboxes[2].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[6].innerHTML)
  ) {
    return true;
  } else {
    return false;
  }
}

myboxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.innerHTML = turn;
    turnaudio.play();
    box.style.pointerEvents = "none";
    if (checkwin()) {
      setTimeout(resetgame, 1500);
      win.style.display = "block";
      win.innerHTML = turn + " wins";
      myboxes.forEach(function (box) {
        box.style.pointerEvents = "none";
      });
    } else if (checkDraw()) {
      setTimeout(resetgame, 1500);
      win.style.display = "block";
      win.innerHTML = "Game Draw";
    } else {
      changeturn();
      myturntext.innerHTML = "Turn for " + turn;
    }
    z;
  });
});
function checkDraw() {
  for (let box of myboxes) {
    if (box.innerHTML === "") {
      return false; 
    }
  }
  return true; 
}
function resetgame() {
  myboxes.forEach(function (box) {
    box.innerHTML = "";
    box.style.pointerEvents = "auto";
  });
  turn = "x";
  myturntext.innerHTML = "Turn for " + turn;
  win.style.display = "none";
}

reset.addEventListener("click", resetgame);
