let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let winner = document.querySelector(".winner-display");

let turn = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked!");
        if(turn){
            box.innerText= "X";
            turn = false;
        } else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () =>{
    for(let ptn of winningPattern){
        // console.log(ptn[0], ptn[1], ptn[2]);
        // console.log(boxes[ptn[0]].innerText, boxes[ptn[1]].innerText, boxes[ptn[2]].innerText);
        let position1 = boxes[ptn[0]].innerText;
        let position2 = boxes[ptn[1]].innerText;
        let position3 = boxes[ptn[2]].innerText;

        if(position1 !="" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log("winner");
                boxes.disabled = true;
                showWinner(position1);
            }
        }
    }
};

const showWinner = (win) =>{
    winner.innerText = `Congratulation! winner is ${win}`;
    for(let box of boxes){
        box.disabled = true;
    }

};
const resetOpt = () =>{
    turn = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
    winner.innerText = "";
};

reset.addEventListener("click",resetOpt);