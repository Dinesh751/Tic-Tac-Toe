let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let container=document.querySelector(".container");
let newGameBtn=document.querySelector(".newGame");
let winnerText=document.querySelector(".winnerText");


newGameBtn.addEventListener("click",()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })

    newGameContainer.style.display = "none";
    container.style.display="";

})

resetBtn.addEventListener("click",()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })

    newGameContainer.style.display = "none";
    container.style.display="";
})



let turn0=true;

let winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

let newGameContainer=document.querySelector(".newGameContainer");
newGameContainer.style.display = "none";

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turn0){
            box.innerText="O";
        }else{
            box.innerText="X"
        }
       checkWinner();
        turn0=!turn0;
        box.disabled=true;

    })
})

checkWinner=()=>{
    winPattern.forEach((p)=>{
        
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
     
        if(p1 != "" && p2!="" && p3 != ""){
            if(p1 == p2 && p2 == p3){
                newGameContainer.style.display ='';
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                container.style.display="none";
                winnerText.innerText=`Winner is ${p1}`;
            }
        }
        
    })
    
}
