const DOMselectors = {
    button: document.getElementById("submitbtn"),
    text: document.getElementById("addertitle"),
    box: document.querySelector(".creator"),
};

function backgroundandText(background, text) {
    background.style.backgroundColor = "orange";
    text.textContent = "This is fun";
}

DOMselectors.button.addEventListener("click", function () {
    backgroundandText(DOMselectors.box, DOMselectors.text);
});