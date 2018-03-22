$(document).ready(function(){
    $('.brgr').click(function(){
        $('.brgr').toggleClass('active'); 
        $('#menu').toggleClass('visible');
        $('#menu').toggleClass('invisible');
    })
})