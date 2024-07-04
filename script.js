let turn = "x";
let turnaudio = new Audio("ting.mp3");
let myturntext = document.querySelector(".info");
const myboxes = document.querySelectorAll(".box");
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
    // Horizontal rows
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[1].innerHTML &&
      myboxes[1].innerHTML === myboxes[2].innerHTML) ||
    (myboxes[3].innerHTML !== "" &&
      myboxes[3].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[5].innerHTML) ||
    (myboxes[6].innerHTML !== "" &&
      myboxes[6].innerHTML === myboxes[7].innerHTML &&
      myboxes[7].innerHTML === myboxes[8].innerHTML) ||
    // Vertical columns
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[3].innerHTML &&
      myboxes[3].innerHTML === myboxes[6].innerHTML) ||
    (myboxes[1].innerHTML !== "" &&
      myboxes[1].innerHTML === myboxes[4].innerHTML &&
      myboxes[4].innerHTML === myboxes[7].innerHTML) ||
    (myboxes[2].innerHTML !== "" &&
      myboxes[2].innerHTML === myboxes[5].innerHTML &&
      myboxes[5].innerHTML === myboxes[8].innerHTML) ||
    // Diagonals
    (myboxes[0].innerHTML !== "" &&
      myboxes[0].innerHTML === myboxes[5].innerHTML &&
      myboxes[5].innerHTML === myboxes[9].innerHTML) ||
    (myboxes[3].innerHTML !== "" &&
      myboxes[3].innerHTML === myboxes[5].innerHTML &&
      myboxes[5].innerHTML === myboxes[7].innerHTML)
  ) {
    return true;
  }
}

myboxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.innerHTML = turn;
    turnaudio.play();
    changeturn(); // change
    myturntext.innerHTML = "Turn for " + turn;
    box.style.pointerEvents = "none";
    checkwin();
    if (checkwin()) {
      console.log("win");
    }
  });
});
