document.addEventListener("DOMContentLoaded", function () {
    // ヘッダーハンバーガーボタンと関連要素を選択
    const hamburger = document.querySelector(".l-hamburger");
    const headerHamburger = document.querySelector(".l-header-hamburger");

    const header = document.querySelector('.l-header');
    const headerContainer = document.querySelector('.l-header-container');
    const headerMenu = document.querySelector('.l-header-menu');
    const headerLogo = document.querySelector('.l-header-logo');

    // ハンバーガーメニューのイベントリスナー
    if (headerHamburger && hamburger && header && headerContainer && headerMenu && headerLogo) {
        headerHamburger.addEventListener("click", function () {
            [headerHamburger, hamburger, header, headerContainer, headerMenu, headerLogo].forEach(el => {
                el.classList.toggle("is-active");
            });

            if (headerHamburger.classList.contains("is-active")) {
                hamburger.scrollTop = -999999;
            }

            document.body.style.overflow = document.body.style.overflow === "hidden" ? "" : "hidden";
        });
    }

    // l-header-product-item Productをホバーしたときのイベントリスナー
    const hoverTarget = document.getElementById("is-active");
    const contentToShow = document.getElementById("content-to-show");

    if (hoverTarget && contentToShow) {
        hoverTarget.addEventListener("mouseenter", function () {
            contentToShow.classList.add("active");
        });

        hoverTarget.addEventListener("mouseleave", function () {
            setTimeout(function () {
                if (!contentToShow.matches(':hover')) {
                    contentToShow.classList.remove("active");
                }
            }, 100);
        });

        contentToShow.addEventListener("mouseleave", function () {
            if (!hoverTarget.matches(':hover')) {
                contentToShow.classList.remove("active");
            }
        });
    }

    // 可視範囲に入ったらアニメーションを発火
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                showElm(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '-10% 0% -10% 0%'
    });

    const elements = document.querySelectorAll('.e, .bigger');
    elements.forEach(el => observer.observe(el));

    function showElm(element) {
        if (element.classList.contains('e')) {
            element.classList.add('e-v');
        } else if (element.classList.contains('bigger')) {
            element.classList.add('bigger-visible');
        }
    }

    // 拡大アニメーション
    const slideShowTiming = 4000;
    const transitionDelay = 600;
    const image = document.getElementById('material');

    image.classList.add('expand');

    function startAnimation() {
        setTimeout(function startShrinkExpandCycle() {
            image.classList.toggle('expand');
            image.classList.add("shrink");

            setTimeout(() => {
                image.classList.remove("shrink");
                image.classList.add("expand");
            }, transitionDelay);

            setTimeout(startShrinkExpandCycle, slideShowTiming);
        }, slideShowTiming);
    }

    startAnimation();

    // スライドショー
    setInterval(() => {
        let productItems = document.querySelectorAll('.l-about-product-item');
        const productContainer = document.querySelector(".l-about-product-wrap");

        while (productItems.length > 5) {
            productItems[productItems.length - 1].remove();
            productItems = document.querySelectorAll('.l-about-product-item');
        }

        let frameCounter = 1;
        const frameMax = 60;
        const animationTime = 600;

        const frameInterval = setInterval(() => {
            let position = (14 - (14 * frameCounter / frameMax));
            position = Math.max(position, 0);

            productItems[0].style.width = position + "em";
            frameCounter++;

            if (frameCounter > frameMax) {
                productItems[0].style.width = "14em";

                const firstItem = productItems[0].cloneNode(true);
                productItems[0].remove();
                productContainer.appendChild(firstItem);

                clearInterval(frameInterval);
            }
        }, (animationTime / frameMax));
    }, slideShowTiming);

    // スライダーアイテムを選択
    const sliderItems = document.querySelectorAll(".l-column-left-slider-item");
    let sliderCurrentIndex = 0;

    if (sliderItems.length > 0) {
        function showSliderItem(index) {
            sliderItems.forEach((item) => {
                item.style.opacity = "0";
            });
            sliderItems[index].style.opacity = "1";
        }

        function nextSliderItem() {
            sliderCurrentIndex = (sliderCurrentIndex + 1) % sliderItems.length;
            showSliderItem(sliderCurrentIndex);
        }

        showSliderItem(0);
        setInterval(nextSliderItem, 5000);
    }

    // レシピフリップボタンのクリックイベントリスナー
    const flipBtn = document.querySelectorAll(".c-recipe-flip-btn");

    flipBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const flipImages = btn.closest(".c-recipe-flip").querySelectorAll(".c-recipe-flip-img");
            flipImages.forEach(function (img) {
                img.classList.toggle("inactive");
            });
        });
    });

    // フッターのタイトルエレメントのクリックイベントリスナー
    const titleElements = document.querySelectorAll(".l-footer-col-title");

    titleElements.forEach(function (el) {
        el.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });

    // フリップボタンのクリックイベントリスナー
    const flipButtons = document.querySelectorAll(".c-flip-btn, .c-recipe-flip-btn");

    flipButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.add("spin-anim");
            button.addEventListener("animationend", function () {
                button.classList.remove("spin-anim");
            });
        });
    });
});

// スクロールイベントリスナー
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#top, #new, #features, #about");
    const menuItems = document.querySelectorAll(".l-column-left-menu-item a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
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

// フリップ画像をトグルする関数
function flipImage() {
    var images = document.querySelectorAll(".l-description-flip-img");
    images.forEach(function (image) {
        image.classList.toggle("inactive");
    });
}