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
    // Create chair section
    handlingCreateEvents();
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

/* **** Create your chair section **** */

// Checkbox
function checkTransport() {
    var transport = document.querySelector(".checkbox input:checked");
    var transportPrice = parseInt(document.querySelector(".checkbox input").dataset.transport_price);
    var panelLeft = document.querySelector(".summary_panel .panel_left");
    var panelRight = document.querySelector(".summary_panel .panel_right");
    var sumPanel = document.querySelector(".summary_panel .sum");
    var sumValue = parseInt(sumPanel.innerHTML);

    // Check if NaN
    if (sumValue != sumValue) {
        panelLeft.querySelector(".transport").innerText = "Transport";
        panelRight.querySelector(".transport").innerText = transportPrice;
        sumValue = transportPrice;
        sumPanel.innerText = sumValue;
    } else {
        if (transport === null) {
            panelLeft.querySelector(".transport").innerText = "";
            panelRight.querySelector(".transport").innerText = "";
            sumValue -= transportPrice;
            sumPanel.innerText = sumValue;
        } else {
            panelLeft.querySelector(".transport").innerText = "Transport";
            panelRight.querySelector(".transport").innerText = transportPrice;
            sumValue += transportPrice;
            sumPanel.innerText = sumValue;
        }
    }
}

function selectChairOption() {
    var panelLeft = document.querySelector(".summary_panel .panel_left");
    var panelRight = document.querySelector(".summary_panel .panel_right");
    var sumPanel = document.querySelector(".summary_panel .sum");
    var listLabels = document.querySelectorAll(".list_label");

    var chairValue;
    var colorValue;
    var patternValue;
    var sum;

    if (this.hasAttribute("data-chair_price")) {
        panelLeft.querySelector(".title").innerText = this.innerText;
        this.parentElement.parentElement.querySelector(".list_label").innerText = this.innerText;
        panelRight.querySelector(".title").innerText = this.dataset.chair_price;
    } else if (this.hasAttribute("data-color_price")) {
        panelLeft.querySelector(".color").innerText = this.innerText;
        this.parentElement.parentElement.querySelector(".list_label").innerText = this.innerText;
        panelRight.querySelector(".color").innerText = this.dataset.color_price;
    } else if (this.hasAttribute("data-fabric_price")) {
        panelLeft.querySelector(".pattern").innerText = this.innerText;
        this.parentElement.parentElement.querySelector(".list_label").innerText = this.innerText;
        panelRight.querySelector(".pattern").innerText = this.dataset.fabric_price;
    }

    if (parseInt(panelRight.querySelector(".title").innerText) > 0) {
        chairValue = parseInt(panelRight.querySelector(".title").innerText);
    } else {
        chairValue = 0;
    }

    if (parseInt(panelRight.querySelector(".color").innerText) > 0) {
        colorValue = parseInt(panelRight.querySelector(".color").innerText);
    } else {
        colorValue = 0;
    }

    if (parseInt(panelRight.querySelector(".pattern").innerText) > 0) {
        patternValue = parseInt(panelRight.querySelector(".pattern").innerText)
    } else {
        patternValue = 0;
    }

    sum = chairValue + colorValue + patternValue;
    sumPanel.innerText = sum;

}

// Hide all items except argument
function hideAllDropListItems(item) {
    var dropdownList = document.querySelectorAll(".drop_down_list");
    dropdownList.forEach(function (element) {
        if (element.style.display != "none" && element != item) {
            element.querySelector(".list_panel").style.display = "none";
        }
    });
}

function createChairDropListShow() {
    // Hide all items except the one was clicked
    hideAllDropListItems(this);

    if (this.querySelector(".list_panel").style.display === "none") {
        this.querySelector(".list_panel").style.display = "inline-block";
        var list = this.querySelectorAll(".list_panel li");
        list.forEach(function (element) {
            element.addEventListener("click", selectChairOption);
        });
    } else {
        this.querySelector(".list_panel").style.display = "none";
    }
}

// Add create section events
function handlingCreateEvents() {
    var dropdownList = document.querySelectorAll(".drop_down_list");

    dropdownList.forEach(function (element) {
        element.addEventListener("click", createChairDropListShow);
    });

    // Checkbox transport
    var transport = document.querySelector(".checkbox input");
    transport.addEventListener("click", checkTransport);
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