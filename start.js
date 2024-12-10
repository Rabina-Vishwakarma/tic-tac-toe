let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let msgcontainer=document.querySelector('.msg-container');
let newbtn=document.querySelector(".new-btn");
let  msg=document.querySelector("#msg");
let  turno=true;  
// players0, playersx
 const winPattern=[
    [0,1,2],
    [3,4,5] ,
    [6,7,8], 
    [0,3,6] ,
    [1,4,7] ,
    [2,5,8] ,
    [0,4,8],
    [2,4,5]]; //rows and columns

    const resetGame =() =>
    {
      turno=true;
      enableBoxes();
      msgcontainer.classList.add("hide");
    };
     boxes.forEach( (box) =>{ 
        box.addEventListener("click", ()=>
         {
            console.log("box was clicked");
            if(turno)
            {
                box.innerText= "o";
                turno=false;
            }
            else 
            {
                box.innerText="X";
                turno=true;
            }
            box.disabled=true;
            checkWinner();
        });
     });
     const disableBoxes = ()=> 
        {
            for ( let box  of boxes ) 
            {
                box.disabled=true;
            }
        };
        const enableBoxes = ()=> 
        {
            for ( let box  of boxes ) 
            {
                box.disabled=false;
                box.innerText="";
            }
        };

        const showWinner = (winner) => 
        {
            msg.innerText= `Player ${winner} Wins!`;
            msgcontainer.classList.remove("hide");
            disableBoxes();
        };
   
     const checkWinner = () =>
     {
        for (let pattern of winPattern)
        {
            
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val= boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;
           if (pos1Val != "" && pos2Val ==pos3Val )
           {
            if (pos1Val == pos2Val && pos2Val == pos3Val )
            {
                console.log("winner ", pos1Val);

                showWinner(pos1Val);
            }
           }
          
        }
     };
    
      newbtn.addEventListener("click",resetGame);
      reset.addEventListener("click",resetGame);