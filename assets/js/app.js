console.log("created by Shiryakov Yaroslav");


console.log("this is tabs component");

$(document).ready(function () {
  $('.menu__list-link').click(function (e) {
    e.preventDefault()

    $('.menu__list-link').removeClass('menu__list-link--active')
    $('.tabs__item').removeClass('tabs__item--active')

    $(this).addClass('menu__list-link--active')
    $($(this).attr('href')).addClass('tabs__item--active')
  })

  $('.menu__list-link:first').click()
})
// //= components/modal.js
// //= components/webpcss.js


// //= ../../../node_modules/slick-carousel/slick/slick.js

$(function () {
  // //= components/slick.js

});