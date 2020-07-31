// Header-navbar
window.onscroll = function () {
    scrollEff();
    displayTopBtn();
}

function displayTopBtn() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('toTop-btn').style.display = 'block';
    }
    else {
        document.getElementById('toTop-btn').style.display = 'none';
    }
}

function scrollEff() {
    var header_top_1 = document.getElementById('header-top-1');
    var header_top_2 = document.getElementById('header-top-2')
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header_top_1.style.top = '0';
        header_top_1.style.opacity = '1';
        header_top_2.style.opacity = '0';
    }
    else {
        header_top_1.style.top = '-100%';
        header_top_1.style.opacity = '0';
        header_top_2.style.opacity = '1';
    }
}

// scroll to top smoth without jquery
function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
}

// Header slide
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderCustom: function (swiper, current, total) {
            return current + ' of ' + total;
        },
    },
});

