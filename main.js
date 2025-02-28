$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.nav-list').toggleClass('active');
        $('.menu-btn').toggleClass('toggle');
        $('.social').toggleClass('opacity');
    })
});