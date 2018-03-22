$(document).ready(function(){
    $('.brgr').click(function(){
        $('.brgr').toggleClass('active'); 
        $('#sidebarMenu').toggleClass('activeSidebar');
    });
})