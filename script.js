document.addEventListener("DOMContentLoaded", function () {
    // ヘッダーハンバーガーボタンと関連要素を選択
    const hamburger = document.querySelector(".l-hamburger"); // ハンバーガーボタンを選択
    const headerHamburger = document.querySelector(".l-header-hamburger"); // ヘッダーハンバーガーボタンを選択

    const header = document.querySelector('.l-header'); // ヘッダーを選択
    const headerContainer = document.querySelector('.l-header-container'); // ヘッダーコンテナを選択
    const headerMenu = document.querySelector('.l-header-menu'); // メニューを選択
    const headerLogo = document.querySelector('.l-header-logo'); // ロゴを選択

    if (headerHamburger && hamburger && header && headerContainer && headerMenu && headerLogo) {
        // l-header-hamburgerボタンをクリックしたときのイベントリスナー
        headerHamburger.addEventListener("click", function () {
            // 各要素のクラスをトグルする
            headerHamburger.classList.toggle("is-active");
            hamburger.classList.toggle("is-active");
            header.classList.toggle("is-active");
            headerContainer.classList.toggle("is-active");
            headerMenu.classList.toggle("is-active");
            headerLogo.classList.toggle("is-active");

            // ボディのオーバーフローを制御
            if (document.body.style.overflow !== "hidden") {
                document.body.style.overflow = "hidden"; 
            } else {
                document.body.style.overflow = ""; 
            }
        });
    }

    // l-header-product-item Productをホバーしたときのイベントリスナー
    const hoverTarget = document.getElementById("is-active");
    const contentToShow = document.getElementById("content-to-show");

    if (hoverTarget && contentToShow) {
        // ホバーしたときのアクティブ化処理
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
    const observer = new IntersectionObserver(function(entries) {
        for(let i = 0; i < entries.length; i++) {
        // 領域内なら処理を実行
        if (entries[i].intersectionRatio <= 0) continue;
        showElm(entries[i].target);
        }
    },{
        rootMargin: '-10% 0% -10% 0%'
    });

    const elements = document.querySelectorAll('.e');
    for(let i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
    }
    const anotherElements = document.querySelectorAll('.bigger');
    for (let i = 0; i < anotherElements.length; i++) {
        observer.observe(anotherElements[i]);
    }
    // 領域内に入ったとき実行する処理
    function showElm(element) {
        if (element.classList.contains('e')) {
            element.classList.add('e-v');
        } else if (element.classList.contains('bigger')) {
            element.classList.add('bigger-visible');
        }
        observer.unobserve(element);
    }



    // 拡大アニメーション
    const slideShowTiming = 4000
    const transitionDelay = 600;

    const image = document.getElementById('material');

    image.classList.add('expand');
    function startAnimation() {

        setTimeout(function startShrinkExpandCycle() {
            image.classList.remove("expand");
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
        const productItems = document.querySelectorAll('.l-about-product-item')
        const productContainer = document.querySelector(".l-about-product-wrap")

        while (productItems.length > 5) {
            productItems[productItems.length - 1].remove()
            productItems = document.querySelectorAll('.l-about-product-item')
        }
        
        let frameCounter = 1
        const frameMax = 60
        const animationTime = 600
        
        
        const frameInterval = setInterval(() => {
            let position = (14 - (14 * frameCounter / frameMax))
            if (position < 0) position = 0
            
            productItems[0].style.width = position + "em"
            frameCounter++
            
            if (frameCounter > frameMax) {
                
                productItems[0].style.width = "14em";
                
                const firstItem = productItems[0].cloneNode(true)
                productItems[0].remove()
                productContainer.appendChild(firstItem)
                
                clearInterval(frameInterval);
            }
        }, (animationTime / frameMax))
    }, slideShowTiming);


    // スライダーアイテムを選択
    const sliderItems = document.querySelectorAll(".l-column-left-slider-item"); 
    let sliderCurrentIndex = 0; // 現在のインデックス

    if (sliderItems.length > 0) {
        function showSliderItem(index) {
            // すべてのスライダーアイテムの不透明度を0に設定
            sliderItems.forEach((item) => (item.style.opacity = "0"));

            // 指定されたインデックスのアイテムのみ不透明にする
            sliderItems[index].style.opacity = "1";
        }

        function nextSliderItem() {
            // インデックスを増加
            sliderCurrentIndex++;
            if (sliderCurrentIndex >= sliderItems.length) sliderCurrentIndex = 0; // インデックスが範囲を超えたらリセット
            showSliderItem(sliderCurrentIndex); // 次のアイテムを表示
        }

        showSliderItem(0);

        // スライダーアイテムを5秒ごとに切り替える
        setInterval(nextSliderItem, 5000);
    }

    // レシピフリップボタンを選択
    const flipBtn = document.querySelectorAll(".c-recipe-flip-btn");

    flipBtn.forEach(function (btn) {
        // フリップボタンのクリックイベントリスナー
        btn.addEventListener("click", function () {
            const flipImages = btn.closest(".c-recipe-flip").querySelectorAll(".c-recipe-flip-img");
            flipImages.forEach(function (img) {
                img.classList.toggle("inactive"); // フリップ画像のクラスをトグルする
            });
        });
    });

    // フッターのタイトルエレメントを選択
    const titleElements = document.querySelectorAll(".l-footer-col-title");

    titleElements.forEach(function (el) {
        // フッタータイトルのクリックイベントリスナー
        el.addEventListener("click", function () {
            this.parentElement.classList.toggle("active"); // 親エレメントのクラスをトグルする
        });
    });

    // フリップボタンを選択
    const flipButtons = document.querySelectorAll(".c-flip-btn, .c-recipe-flip-btn");

    flipButtons.forEach(function (button) {
        // フリップボタンのクリックイベントリスナー
        button.addEventListener("click", function () {
            button.classList.add("spin-anim"); // スピンアニメーションを追加
            button.addEventListener("animationend", function () {
                button.classList.remove("spin-anim");
            });
        });
    });
});

// スクロールイベントリスナー
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("#top, #new, #features, #about"); // セクションを選択
    const menuItems = document.querySelectorAll(".l-column-left-menu-item a"); // メニューアイテムを選択

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute("id"); // 現在のセクションを更新
        }
    });

    // メニューアイテムのクラスをリセットし、現在のセクションのリンクにクラスを追加
    menuItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }
    });
});

// 画像をフリップする
function flipImage() {
    var images = document.querySelectorAll(".l-description-flip-img"); // フリップ画像を選択
    images.forEach(function (image) {
        image.classList.toggle("inactive");
    });
}