let boxes = document.querySelectorAll(".box");
let turnO = true;
let winner = false;
let boxcnt = 0;

let popup = document.getElementById("popup");
let popupMessage = document.getElementById("popup-message");
let closePopup = document.getElementById("close-popup");
let turn = document.getElementById("turn");
let reset = document.getElementById("reset-btn");

const winpart = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

// --- Box Click ---
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (winner) return;

        box.innerText = turnO ? "0" : "X";
        turnO = !turnO;
        box.disabled = true;
        boxcnt++;

        checker();
    });
});

// --- Check Winner ---
const checker = () => {
    player();
    for (let it of winpart) {
        let pos1 = boxes[it[0]].innerText;
        let pos2 = boxes[it[1]].innerText;
        let pos3 = boxes[it[2]].innerText;

        if (pos1 && pos2 && pos3 && pos1 === pos2 && pos2 === pos3) {
            winner = true;
            showpop("Player " + pos1 + " Wins!");
            disableAllBoxes();
            return;
        }
    }
    if (boxcnt === 9 && !winner) {
        showpop("It's A Tie!");
    }
};

// --- Disable all boxes ---
const disableAllBoxes = () => {
    boxes.forEach((dis) => dis.disabled = true);
};

// --- Show popup ---
const showpop = (message) => {
    popupMessage.innerText = message;
    popup.style.display = "flex";
};

// --- Show player's turn ---
const player = () => {
    turn.innerText = "Player " + (turnO ? "0" : "X") + "'s Turn";
};
// --- Restart Game ---
const restart = () => {
  winner = false;
  turnO = true;
  boxcnt = 0;

  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });

  popup.style.display = "none";
  player();
};

// --- Attach reset button ---
reset.addEventListener("click", restart);

// --- Close Popup ---
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
