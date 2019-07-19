document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    main();
});

function main() {
    // Menu
    handlingMenuEvents();
    // Front section
    handlingFrontGalleryEvents();
    // Widget section
    handlingWidgetEvents();
    // Offers section
    handlingOfferEvents();
    // Contact section
    handlingContactEvents();
}

/* **** Header events **** */

// Menu
function menuEventOn() {
    var submenu = this.querySelector(".submenu-list");
    if (submenu != null) {
        submenu.style.display = "block";
    }
}

function menuEventOff() {
    var submenu = this.querySelector(".submenu-list");
    if (submenu != null) {
        submenu.style.display = "none";
    }
}

function handlingMenuEvents() {
    var mainMenuItems = document.querySelectorAll(".menu > .menu-list > .menu-list__item");

    mainMenuItems.forEach(function (element) {
        element.addEventListener("mouseover", menuEventOn);
        element.addEventListener("mouseout", menuEventOff);
    });
}

/* ******** Main view ******** */

/* **** Front section events **** */

function frontContainerGalleryPrev() {
    // List of front containers
    var frontContainers = document.querySelectorAll(".front-section__container");
    // Index of visible container
    var frontIndex;
    for (var i = 0; i < frontContainers.length; i++) {
        if (frontContainers[i].classList.contains("front-section__container--visible")) {
            frontContainers[i].classList.remove("front-section__container--visible");
            frontIndex = i - 1;
            if (i === 0) {
                frontIndex = frontContainers.length - 1;
            }
            frontContainers[frontIndex].classList.add("front-section__container--visible");
            break;
        }
    }
}

function frontContainerGalleryNext() {
    // List of front containers
    var frontContainers = document.querySelectorAll(".front-section__container");
    // Index of visible container
    var frontIndex = 0;
    for (var i = 0; i < frontContainers.length; i++) {
        if (frontContainers[i].classList.contains("front-section__container--visible")) {
            frontContainers[i].classList.remove("front-section__container--visible");
            frontIndex = i + 1;
            if (i === 2) {
                frontIndex = 0;
            }
            frontContainers[frontIndex].classList.add("front-section__container--visible");
            break;
        }
    }
}

function handlingFrontGalleryEvents() {
    // Previous button
    var prev = document.querySelectorAll(".front-section__arrow")[0];
    // Next button
    var next = document.querySelectorAll(".front-section__arrow")[1];

    prev.addEventListener("click", frontContainerGalleryPrev);
    next.addEventListener("click", frontContainerGalleryNext);
}

/* **** Widget section events **** */

function widgetMouseOn() {
    this.classList.add("widget--description");
}

function widgetMouseOff() {
    this.classList.remove("widget--description");
}

function handlingWidgetEvents() {
    var widgets = document.querySelectorAll(".widget");
    widgets.forEach(function (element) {
        element.addEventListener("mouseover", widgetMouseOn);
        element.addEventListener("mouseout", widgetMouseOff);
    });
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

    offerArticle.forEach(function (element) {
        element.addEventListener("mouseover", offerArticleEventOn);
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

    contactCheckbox.forEach(function (element) {
        element.addEventListener("click", contactCheckboxEvent);
    });

    var nameInput = document.querySelector(".contact__input-name");
    var emailInput = document.querySelector(".contact__input-email");
    var areaInput = document.querySelector(".contact__area");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        if (document.querySelector(".contact__check--checked") && nameInput.vale != "" && emailInput.value != "" && areaInput.value != "") {
            console.log("Imię: " + nameInput.value);
            console.log("E-mail: " + emailInput.value);
            console.log("Wiadomość: " + areaInput.value);
        }
    });

}