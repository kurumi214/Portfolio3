
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".l-hamburger");
    const headerHamburger = document.querySelector(".l-header-hamburger");

    headerHamburger.addEventListener("click", function () {
        headerHamburger.classList.toggle("is-active");
        hamburger.classList.toggle("is-active");

        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    const sliderItems = document.querySelectorAll(".l-column-left-slider-item");
    let currentIndex = 0;

    function showSliderItem(index) {
        
        sliderItems.forEach((item) => (item.style.opacity = "0"));

        sliderItems[index].style.opacity = "1";
    }

    
    function nextSliderItem() {
        currentIndex++;
        if (currentIndex >= sliderItems.length) currentIndex = 0; 
        showSliderItem(currentIndex); 
    }

    showSliderItem(0);

    setInterval(nextSliderItem, 5000);

    const flipBtn = document.querySelectorAll(".c-recipe-flip-btn");

    flipBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const flipImages = btn
                .closest(".c-recipe-flip")
                .querySelectorAll(".c-recipe-flip-img");
            flipImages.forEach(function (img) {
                img.classList.toggle("inactive");
            });
        });
    });

    const titleElements = document.querySelectorAll(".l-footer-col-title");

    titleElements.forEach(function (el) {
        el.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });

    const flipButtons = document.querySelectorAll(
        ".c-flip-btn, .c-recipe-flip-btn"
    );

    flipButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.add("spin-anim");

            button.addEventListener("animationend", function () {
                button.classList.remove("spin-anim");
            });
        });
    });
});

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#top, #new, #features, #about");
    const menuItems = document.querySelectorAll(".l-column-left-menu-item a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    menuItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }
    });
});

function flipImage() {
    var images = document.querySelectorAll(".l-description-flip-img");
    images.forEach(function (image) {
        image.classList.toggle("inactive");
    });
}
