

let navState = true;

isDesktop();

function ToggleNav() {
    if(navState) {
        HideNav();
    }else {
        ShowNav();
    }

}

function ShowNav() {
    const NAV_BAR = document.querySelector('nav');
    NAV_BAR.classList.remove('hide');
    NAV_BAR.classList.add('show');
    navState = true;
}

function HideNav() {
    const NAV_BAR = document.querySelector('nav');
    NAV_BAR.classList.remove('show');
    NAV_BAR.classList.add('hide');
    navState = false;
}

window.addEventListener("resize", () => {
    isDesktop();
});


function isDesktop() {
    if(document.body.clientWidth > 1024) {
        ShowNav();
    }else {
        HideNav();
    }
}