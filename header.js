
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {

    menuToggle.classList.toggle("active", open);

    navLinks.classList.toggle("active", open);

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

    menuToggle.setAttribute(
        "aria-label",
        open ? "メニューを閉じる" : "メニューを開く"
    );

}

menuToggle.addEventListener("click", function () {

    const isOpen = menuToggle.classList.contains("active");

    setMenu(!isOpen);

});

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        setMenu(false);

    });

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        setMenu(false);

    }

});

window.addEventListener("resize", function () {

    if (window.innerWidth > 800) {

        setMenu(false);

    }

});
