document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".l-hamburger"); // ハンバーガーボタンを選択
    const headerHamburger = document.querySelector(".l-header-hamburger"); // ヘッダーハンバーガーボタンを選択

    const header = document.querySelector('.l-header'); // ヘッダーを選択
    const headerContainer = document.querySelector('.l-header-container'); // ヘッダーコンテナを選択
    const headerMenu = document.querySelector('.l-header-menu'); // メニューを選択
    const headerLogo = document.querySelector('.l-header-logo'); // ロゴを選択

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
            document.body.style.overflow = "hidden"; // オーバーフローを隠す
        } else {
            document.body.style.overflow = ""; // オーバーフローを通常に戻す
        }
    });

    
    // l-header-product-item Productをホバーしたときのイベントリスナー
    const hoverTarget = document.getElementById("is-active");
    const contentToShow = document.getElementById("content-to-show");

    // ホバーしたときのアクティブ化処理
    hoverTarget.addEventListener("mouseenter", function () {
        contentToShow.classList.add("active");
    });

    hoverTarget.addEventListener("mouseleave", function () {
        setTimeout(function() {
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


    // スライドショー


    setInterval(slide_time, 1500);


    // スライダーアイテムを選択
    const sliderItems = document.querySelectorAll(".l-column-left-slider-item"); 
    let currentIndex = 0; // 現在のインデックス

    function showSliderItem(index) {
        // すべてのスライダーアイテムの不透明度を0に設定
        sliderItems.forEach((item) => (item.style.opacity = "0"));

        // 指定されたインデックスのアイテムのみ不透明にする
        sliderItems[index].style.opacity = "1";
    }

    function nextSliderItem() {
        // インデックスを増加
        currentIndex++;
        if (currentIndex >= sliderItems.length) currentIndex = 0; // インデックスが範囲を超えたらリセット
        showSliderItem(currentIndex); // 次のアイテムを表示
    }

    showSliderItem(0); // 最初のアイテムを表示

    // スライダーアイテムを5秒ごとに切り替える
    setInterval(nextSliderItem, 5000);

    const flipBtn = document.querySelectorAll(".c-recipe-flip-btn"); // レシピフリップボタンを選択

    flipBtn.forEach(function (btn) {
        // フリップボタンのクリックイベントリスナー
        btn.addEventListener("click", function () {
            const flipImages = btn.closest(".c-recipe-flip").querySelectorAll(".c-recipe-flip-img");
            // フリップ画像のクラスをトグルする
            flipImages.forEach(function (img) {
                img.classList.toggle("inactive");
            });
        });
    });

    const titleElements = document.querySelectorAll(".l-footer-col-title"); // フッターのタイトルエレメントを選択

    titleElements.forEach(function (el) {
        // フッタータイトルのクリックイベントリスナー
        el.addEventListener("click", function () {
            this.parentElement.classList.toggle("active"); // 親エレメントのクラスをトグルする
        });
    });

    const flipButtons = document.querySelectorAll(".c-flip-btn, .c-recipe-flip-btn"); // フリップボタンを選択

    flipButtons.forEach(function (button) {
        // フリップボタンのクリックイベントリスナー
        button.addEventListener("click", function () {
            button.classList.add("spin-anim"); // スピンアニメーションを追加

            // アニメーション終了時にクラスを削除
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

    let currentSection = ""; // 現在のセクション

    sections.forEach((section) => {
        const sectionTop = section.offsetTop; // セクションの上端位置
        if (scrollY >= sectionTop - 50) {
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
        image.classList.toggle("inactive"); // 画像のクラスをトグルする
    });
}