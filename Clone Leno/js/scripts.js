// Quan trọng: 	+ Scroll top top smoth without jquery
//				+ Display none + animate.css
//				+ Chữ thay đổi theo thời gian
//				+ Swiper vs breakpoints và thuộc tính khác

// Hiệu ứng Navbar cuộn xuống
window.onscroll = function () {
    scrollEff();
    displayTopBtn();
}

function scrollEff() {
    var header_nav = document.getElementById('header-nav');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        header_nav.className = header_nav.className.replace(' p-4','');
        header_nav.style.backgroundColor = 'rgb(70, 51, 175)'; 
        header_nav.style.backgroundImage = '';
    }
    else {
        header_nav.className += ' p-4';
        header_nav.style.backgroundImage = 'linear-gradient(to right, rgba(70, 51, 175, 0), rgb(70, 51, 175));';
        header_nav.style.backgroundColor = '';
    }
}

function displayTopBtn() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('toTop-btn').style.display = 'block';
    }
    else {
        document.getElementById('toTop-btn').style.display = 'none';
    }
}

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 20);
    } else clearTimeout(scrollAnimation);
}

// Hiệu ứng thay đổi chữ theo thời gian
var WordChange_Index = 0;
wordChange();
function wordChange() {
    var i;
    var List_word = document.getElementsByClassName('word-change');
    for (i = 0; i < List_word.length; i++) {
        List_word[i].style.display = 'none';
    }
    List_word[WordChange_Index].style.display = 'inline-block';
    WordChange_Index++;
    if (WordChange_Index >= List_word.length) WordChange_Index = 0;
    setTimeout(wordChange, 2000);
}

// Features
var featureSlideIndex = 0;
displayFeature(featureSlideIndex);
function displayFeature(n) {
    var i;
    var feature_btn = document.getElementsByClassName('feature-btn');
    var feature_slides = document.getElementsByClassName('features-slide');
    for (i = 0; i < feature_slides.length; i++) {
        feature_slides[i].style.display = 'none';
        feature_btn[i].style.borderColor = 'white';
        feature_btn[i].children[0].style.color = 'white';
    }
    feature_btn[n].style.borderColor = '#00C9D1';
    feature_slides[n].style.display = 'block';
    feature_btn[n].children[0].style.color = '#00C9D1';
}

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
var countSlide = function(width) {
    if (width > 992) {return 3;}
    else if (width > 768) {return 2;}
    else if (width < 768) {return 1;}
}

// Slide
var testimonial_swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.testimonial-swiper-btn-next',
        prevEl: '.testimonial-swiper-btn-prev',
    },
});

var screenshot_swiper = new Swiper('.screenshot-swiper', {
    slidesPerView: 2,
    centeredslide: true,
    spaceBetween: 15,
    loop: false,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        517: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },
});
