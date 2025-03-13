let homeVal = 0;
let guestVal = 0;

let home = document.getElementById("digit_home");
let guest = document.getElementById("digit_guest");

let homeContainer = document.getElementById("digit_bg_home");
let guestContainer = document.getElementById("digit_bg_guest");

function updateHighlight() {
    if (homeVal > guestVal) {
        homeContainer.style.border = "4px solid gold";
        homeContainer.style.boxShadow= "4px 4px 50px black";
        guestContainer.style.border = "2px solid pink";
    } else if (guestVal > homeVal) {
        guestContainer.style.border = "4px solid gold";
        homeContainer.style.border = "2px solid pink";
        guestContainer.style.boxShadow= "4px 4px 50px black";
    } else {
        homeContainer.style.border = "2px solid pink";
        guestContainer.style.border = "2px solid pink";
    }
}

function incrementhome1() {
    homeVal += 1;
    home.innerText = homeVal;
    updateHighlight();
}

function incrementhome2() {
    homeVal += 2;
    home.innerText = homeVal;
    updateHighlight();
}

function incrementhome3() {
    homeVal += 3;
    home.innerText = homeVal;
    updateHighlight();
}

function incrementguest1() {
    guestVal += 1;
    guest.innerText = guestVal;
    updateHighlight();
}

function incrementguest2() {
    guestVal += 2;
    guest.innerText = guestVal;
    updateHighlight();
}

function incrementguest3() {
    guestVal += 3;
    guest.innerText = guestVal;
    updateHighlight();
}

function reset() {
    homeVal = 0;
    guestVal = 0;
    home.innerText = homeVal;
    guest.innerText = guestVal;
    updateHighlight();
}
