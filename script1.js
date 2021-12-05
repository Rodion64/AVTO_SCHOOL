$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


document.getElementById('mess_send').addEventListener('click', function (){
    alert('Сообщение отправлено!');
    window.location.reload(true);
});

function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}
