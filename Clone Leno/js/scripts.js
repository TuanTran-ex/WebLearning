// Hiệu ứng Navbar cuộn xuống
window.onscroll = function () {
    ScrollEff();
}

function ScrollEff() {
    var header_nav = document.getElementById("header-nav");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
        header_nav.className = header_nav.className.replace(" p-4","");
        header_nav.style.backgroundColor = "rgb(70, 51, 175)"; 
        header_nav.style.backgroundImage = "";
    }
    else
    {
        header_nav.className += " p-4";
        header_nav.style.backgroundImage = "linear-gradient(to right, rgba(70, 51, 175, 0), rgb(70, 51, 175));";
        header_nav.style.backgroundColor = "";
    }
}

// Hiệu ứng thay đổi chữ theo thời gian
var WordChange_Index = 0;
WordChange();
function WordChange() {
    var i;
    var List_word = document.getElementsByClassName("word-change");
    for (i = 0; i < List_word.length; i++)
    {
        List_word[i].style.display = "none";
    }
    List_word[WordChange_Index].style.display = "block";
    WordChange_Index++;
    if (WordChange_Index >= List_word.length) WordChange_Index = 0;
    setTimeout(WordChange, 2000);
}

// Slide
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });