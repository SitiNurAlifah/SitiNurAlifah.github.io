
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".aku").slideToggle("fast");

    $('nav ul li.mati').each(function(index, el) {
        var akuID = el.id.split('_')[1];
        $('.aku#' + akuID).hide();
    });
});

$('nav').delegate('.mati', 'click', function(event) {
    var pilihIsi = this.id.split('_')[1];
    console.log(pilihIsi);
    document.location.hash = pilihIsi;

    $('.aku:visible').fadeOut('fast', function() {
        $('.aku#' + pilihIsi).fadeIn('fast');
    });

    var $this = $(this);
    $this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});