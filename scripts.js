// Swiper initialization
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,

    spaceBetween: 10,
    centeredSlides: true,
});

const heroSwiper = new Swiper('.hero-slider', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Ensure only one slide is visible at a time
});


// Ensuring images have consistent width
document.addEventListener('DOMContentLoaded', function() {
    const swiperSlides = document.querySelectorAll('.swiper-slide img');
    let maxWidth = 0;

    swiperSlides.forEach(img => {
        if (img.naturalWidth > maxWidth) {
            maxWidth = img.naturalWidth;
        }
    });

    swiperSlides.forEach(img => {
        img.style.width = maxWidth + 'px';
    });
});





window.addEventListener('load', function() {
    // Get all images in the Swiper container
    const images = document.querySelectorAll('.swiper-slide img');
    let maxWidth = 0;

    // Loop through images to find the maximum width
    images.forEach(image => {
        if (image.width > maxWidth) {
            maxWidth = image.width;
        }
    });

    // Set all images to the maximum width
    images.forEach(image => {
        image.style.width = maxWidth + 'px';
    });
});