/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

 
 function GameEnd(){

    const finalblock = document.querySelector("div.exit")

    TotalReset();

    for(const box of boxes){
        box.addEventListener('click', SelectImage);
    }
    
    finalblock.classList.add("hidden");

 }


 function Winner(vincitore){

    const titolo = document.querySelector("h1.TextExit");

    titolo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].title;

    const testo = document.querySelector("div.TextExit");

    testo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].contents;

    const finalblock = document.querySelector("div.exit")
    
    finalblock.classList.remove("hidden");
    
}




function ExitPoll(chosen){

    if(chosen[1].dataset.choiceId === chosen[2].dataset.choiceId){
            return Winner(chosen[1]);
    }
    
    return Winner(chosen[0])

}



function CheckEnd(){

    const chosen = document.querySelectorAll(".checked");

    if(chosen.length === 3){
        for(const box of boxes){
            box.removeEventListener('click', SelectImage);
        }

        ExitPoll(chosen);
    }
}

function TotalReset(){

    const notchosen = document.querySelectorAll(".unchecked");
    const chosen = document.querySelectorAll(".checked");

    for(const chosenOne of chosen){
        chosenOne.classList.remove("checked");
        chosenOne.querySelector(".checkbox").src= "images/unchecked.png";
    }

    for(const choice of notchosen){
        choice.classList.remove("unchecked");
    }
}

function ResetSection(section){

    const notchosen = section.querySelectorAll(".unchecked");
    const chosen = section.querySelector(".checked");

    if(chosen){
        chosen.classList.remove("checked");
        chosen.querySelector(".checkbox").src= "images/unchecked.png";
    }

    for(const choice of notchosen){
        choice.classList.remove("unchecked");
    }
}

function SelectImage(event){

    ResetSection(event.currentTarget.parentNode);
    const checkbox = event.currentTarget.querySelector(".checkbox");
    checkbox.src = "images/checked.png";
    event.currentTarget.classList.add("checked");

    const listabox = event.currentTarget.parentNode.querySelectorAll(".choice-grid div");

    for(const box of listabox){

        if(box !== event.currentTarget){
            box.classList.add("unchecked");
        }

    }

    CheckEnd();
}

const boxes = document.querySelectorAll(".choice-grid div");
for(const box of boxes){
    box.addEventListener('click', SelectImage);
}

document.querySelector("button").addEventListener('click', GameEnd);