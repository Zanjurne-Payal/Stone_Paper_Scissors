let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscr = document.querySelector("#user");
let comscr = document.querySelector("#computer");
const computerchoice=()=>{
    //roc,paper,scissor
    const option =["rock","paper","scissor"];
    const randomind= Math.floor(Math.random()*3);
    return option[randomind];
};

const drawgame =()=>{
    msg.innerText="Game is draw";
    msg.style.backgroundColor="black";
}

const showwinner =(uwin)=>{
    if(uwin)
        {
            msg.innerText="wow! You Win";
            msg.style.backgroundColor="green";
            userscore++;
            userscr.innerText=userscore;
        }
    else{
            msg.innerText="Oops! You lose";
            msg.style.backgroundColor="red";
            compscore++;
            comscr.innerText=compscore;
        }
}
const playGame = (userchoice) =>{
    //generate computer choice =>modular
    let comp=computerchoice();

    if(userchoice === comp)
        {
            //draw
            drawgame();
        }
    else{
        let uwin="true";
        if(userchoice==="rock")
            {
               uwin=comp==="paper"?false:true;
            }
        else if(userchoice==="paper")
            {
                uwin=comp==="rock"?true:false;
            }
        else
            {
                uwin=comp==="rock"?false:true;
            }
            showwinner(uwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});