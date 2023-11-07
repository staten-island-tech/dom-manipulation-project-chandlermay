const DOMselectors = {
    subbutton: document.getElementById("submitbtn"),
    box: document.querySelector(".creator"),
    secondbox: document.getElementById("cardcontainer"),
    destinationname: document.getElementById("destination-name"),
    image: document.getElementById("img-url"),
};

// function backgroundandText(background, text) {
//     background.style.backgroundColor = "orange";
//     text.textContent = "This is fun";
// }

DOMselectors.subbutton.addEventListener("click", function () {
    const destinationname = DOMselectors.destinationname.value;
    const image = DOMselectors.image.value;
    const cardhtml = `
    <div class="card">
    <h2 class="cardtitle">${destinationname}</h2>
    <img class="cardimg" src="${DOMselectors.image}">
    <button class="rmvbtn">Remove Vacation Destination</button>
    </div>
    `;
    DOMselectors.secondbox.insertAdjacentHTML("afterend", cardhtml);
});
