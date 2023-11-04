const DOMselectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("cardcontainer")
};

function backgroundandText(background, text){
    background.style.backgroundColor ="red";
    text.innerHTML = "This is fun";
}

backgroundandText(DOMselectors.box, DOMselectors.text);