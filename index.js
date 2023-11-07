const DOMselectors = {
    subbutton: document.getElementById("submitbtn"),
    box: document.querySelector(".creator"),
    secondbox: document.getElementById("cardcontainer"),
    destinationname: document.getElementById("destination-name"),
    image: document.getElementById("img-url"),
    remover: document.querySelector(".rmvbtn"),
    card: document.querySelector(".card"),
    cardtitle: document.querySelector(".cardtitle"),
    cardimg: document.querySelector("cardimg"),
};

//INSERT NEW CARD//
DOMselectors.subbutton.addEventListener("click", function () {
    const destinationname = DOMselectors.destinationname.value;
    const image = DOMselectors.image.value;
    const cardhtml = `
    <div class="card">
    <h2 class="cardtitle">${destinationname}</h2>
    <img class="cardimg" src="${image}"></img>
    <button class="rmvbtn">Remove</button>
    </div>
    `;
    DOMselectors.secondbox.insertAdjacentHTML("afterbegin", cardhtml);

    const cards =[
        
    ]
});


//CLEAR INPUT FIELDS//
DOMselectors.subbutton.addEventListener("click", function (){
    DOMselectors.destinationname.value="";
    DOMselectors.image.value="";
})

//REMOVE BUTTON//
DOMselectors.remover.addEventListener("click" , function (){
    const card = DOMselectors.card;
    card.remove();
})