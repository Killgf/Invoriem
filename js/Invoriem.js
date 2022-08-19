const nav = document.querySelector(".header__body")
const noskroll = document.querySelector("body")
document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    nav.classList.toggle('header__active');
    noskroll.classList.toggle('no-scroll');
}
$(document).ready(function () {
    $('.case__slider').slick({
        slidesToScroll: 1,
        autoplay: false,
        slidesToShow: 3,
        variableWidth: true
    });
});


const videoBtn = document.querySelector(".video__btn");
const videoWrapper = document.querySelector(".video__video-block");
const video = document.querySelector(".video__mp4");

videoBtn.addEventListener("click", function () {
    if (video.paused) {
        video.classList.remove("video__overlay");
        videoBtn.classList.add("video__none");
        video.play();
    }

})
video.addEventListener("click", function () {
    video.pause();
    video.classList.add("video__overlay");
    videoBtn.classList.remove("video__none");

})