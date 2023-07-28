function appointment() {
    const appointment=document.querySelector(".appointment")
    const menu= document.querySelector(".menu");
    appointment.classList.toggle("c-active");
    menu.classList.toggle("c-active");
}

function togglemenu() {
    const togglemenu=document.querySelector(".togglemenu")
    const navigation= document.querySelector(".navigation");
    togglemenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
    },
});

