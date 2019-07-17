document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    main();
});

function main() {
    handlingOfferEvents();
    handlingContactEvents();
}

/* **** Offer section events **** */

// Color offer articles when 'mouseover'
function offerArticleEventOn() {
    this.classList.add("offer--selected");
}

function offerArticleEventOff() {
    this.classList.remove("offer--selected");
}

// Add offer section event listeners
function handlingOfferEvents() {
    var offerArticle = document.querySelectorAll(".offer");
    console.log(offerArticle);

    offerArticle.forEach(function (element) {
        element.addEventListener("mouseover", offerArticleEventOn);
    });
    offerArticle.forEach(function (element) {
        element.addEventListener("mouseout", offerArticleEventOff);
    });
}

/* **** Contact section events **** */

// Checkbox event
function contactCheckboxEvent() {
    if (this.classList.contains("contact__check--checked")) {
        this.classList.remove("contact__check--checked");
    } else {
        this.classList.add("contact__check--checked");
    }
}

// Add contact section event listeners
function handlingContactEvents() {
    var contactCheckbox = document.querySelectorAll(".contact__check");
    console.log(contactCheckbox);

    contactCheckbox.forEach(function (element) {
        element.addEventListener("click", contactCheckboxEvent);
    });
}