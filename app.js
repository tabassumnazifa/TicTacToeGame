let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset btn");
let turnO=true;
const winpart=[
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
    box.addEventListener("click", () => {
        console.log("Box Was Clicked");
        if(turnO==true)
           {
                box.innerText="0";
                turnO=false;
           } 
        else
           {
                 box.innerText="X";
                turnO=true;
           } 
        box.disabled=true;
        checker();
    });
});
const checker=() =>{
for(let it of winpart){
let pos1=boxes[it[0]].innerText;
let pos2=boxes[it[1]].innerText;
let pos3=boxes[it[2]].innerText;
}

}