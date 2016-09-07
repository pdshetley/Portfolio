$(function() {
    //Simple filter controls
    $('.filter li').click(function() {
        $('.filter li').removeClass('active');
        $(this).addClass('active');
    });
});
