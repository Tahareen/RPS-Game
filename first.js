let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".img");
const msg=document.querySelector("#msg_p");
const usp=document.querySelector("#usp");
const csp=document.querySelector("#csp");
const message=document.querySelector(".msg");


const gencompchoice = ()=>{
     const options=["rock","paper","scissor"];
     const randidx= Math.floor(Math.random() * (2 -0 + 1) + 0);
     return options[randidx];
}

const showWinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        console.log("user wins");
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
        usp.innerText=userscore;
    }else{
        computerscore++
        console.log("comp wins");
        msg.innerText=`you lose! ${compchoice} beats ${userchoice}`;
        csp.innerText=computerscore;
        message.style.backgroundColor="red";
        
    }
}

const play =(userchoice) =>{
    console.log("userchoice",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice",compchoice); 
    userwin=true;
    if(userchoice===compchoice){
        console.log("game was draw");
    }else{
        if(userchoice==="rock"){
          userwin= compchoice==="scissor"? true :false; 
        }
        else if(userchoice==="paper"){
            userwin= compchoice==="rock"? true :false; 
        }
        else{
            userwin= compchoice==="paper"? true :false;   
        }
        showWinner(userwin,userchoice,compchoice);
    }
}


choices.forEach((choice) =>{
  choice.addEventListener("click",()=>{
     const userchoice =choice.id;
     play(userchoice);
  });
});