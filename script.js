
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
