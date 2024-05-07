
// header hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.l-hamburger');
    const headerHamburger = document.querySelector('.l-header-hamburger');

    headerHamburger.addEventListener('click', function () {
        headerHamburger.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');

        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});

// column-left slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.l-column-left-slider-item');
    let currentIndex = 0;

    function showSliderItem(index) {
        // すべてのアイテムを非表示にする
        sliderItems.forEach(item => item.style.display = 'none');

        sliderItems[index].style.display = 'block';
    }

    // スライドを繰り返す
    function nextSliderItem() {
        currentIndex++;
        if (currentIndex >= sliderItems.length) currentIndex = 0; // 最後のアイテムから最初に戻る
        showSliderItem(currentIndex); // 新しいインデックスのアイテムを表示
    }

    // 一番最初のアイテムを表示してスタート
    showSliderItem(0);

    setInterval(nextSliderItem, 5000);
});

// recipe flip
document.addEventListener('DOMContentLoaded', function() {
    const flipBtn = document.querySelectorAll('.c-recipe-flip-btn');

    flipBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const flipImages = btn.closest('.c-recipe-flip').querySelectorAll('.c-recipe-flip-img');
            flipImages.forEach(function(img) {
                if (img.style.display === "none") {
                    img.style.display = "block";
                    img.classList.add("active");
                    img.classList.remove("inactive");
                } else {
                    img.style.display = "none";
                    img.classList.add("inactive");
                    img.classList.remove("active");
                }
            });
        });
    });
});