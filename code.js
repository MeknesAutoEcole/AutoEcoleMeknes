let modalContainer = document.getElementById("modal-container");
let modal = document.getElementById("modal");
let whatsapp = document.getElementsByClassName("fa-whatsapp")[0];


function displayModal(gender) {
    modalContainer.style.display = "block";
    
    if(gender == "M") {
        modal.style.color = "white";
        modal.style.backgroundColor = "black";

    } else if(gender == "F") {
        modal.style.color = "black";
        modal.style.backgroundColor = "white";

    }

}

function closeModal() {
    modalContainer.style.display = "none";
  
}

function showNumber() {
    whatsapp.innerHTML = " 06 xx xx xx xx";
    
}
