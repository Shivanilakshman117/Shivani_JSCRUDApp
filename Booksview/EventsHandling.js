var modal = document.querySelector(".modal");
var infomodal = document.querySelector(".infomodal");
var trigger = document.querySelector(".trigger");//get button id to toggle modal window
var DeleteMultiple = document.querySelector(".DeleteMultiple");
var subtrigger = document.querySelector(".subtrigger");//get button id to toggle modal window
var closeButton = document.querySelector(".close-button");
var closeButton2 = document.querySelector(".close-button2");
trigger.addEventListener("click", toggleModal);
DeleteMultiple.addEventListener("click", DeleteMultiplefn);//call DeleteMultiplefn on click
subtrigger.addEventListener("click", toggleModal);//toggle modal window
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleinfoModal);
window.addEventListener("click", windowOnClick);

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function toggleinfoModal() {
   
    infomodal.classList.toggle("show-infomodal");
}

function windowOnClick(event) {
    if (event.target === modal) 
        {   
            toggleModal();
        }
        else if(event.target===infomodal)
        {
        toggleinfoModal();
        }
}

function Inputmodal() {
    
    document.getElementById("Sno").value=document.getElementById("Book").rows.length-1;
    modal.classList.toggle("show-modal");
}

