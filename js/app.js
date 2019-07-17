document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    main();
});

function main() {
    handlingEvents();
}

// Color offer articles when 'mouseover'
function offerArticleEventOn() {
    this.classList.add("offer--selected");
}

function offerArticleEventOff() {
    this.classList.remove("offer--selected");
}

// Add event listeners
function handlingEvents() {
    var offerArticle = document.querySelectorAll(".offer");
    console.log(offerArticle);

    offerArticle.forEach(function (element) {
        element.addEventListener("mouseover", offerArticleEventOn);
    });
    offerArticle.forEach(function (element) {
        element.addEventListener("mouseout", offerArticleEventOff);
    });
}