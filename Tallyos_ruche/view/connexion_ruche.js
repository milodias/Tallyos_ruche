$(document).ready(()=> {
    $('#login').on('click', (e)=> {
        e.preventDefault();
        if ($('#pseudo').val().length < 3 || $('#pass').val().length <3 ) {
            $('.nope').remove();
            $('h1').before("<p class='nope'> Please fill in the fields </p>");
        } else {
            $('.nope').remove();
            let ajax = $.ajax({
                url : '../control/connexion_ruche.php',
                type : 'post',
                data : {
                    'pseudo' : $('#pseudo').val(),
                    'pass' : $('#pass').val(),
                }
            });
            ajax.done((res)=>{
                console.log(res);
                if (res == 'fail' || res.length>10) {
                    $('.wrong').remove();
                    $('h1').before("<p class = 'wrong'> Pseudo or password WRONG ! </p>");
                    $('.wrong').css({
                        'color' : 'red',
                        'font-size' : '20px',  
                        'border' : 'solid 2px red',
                        'padding' : '7px',
                        'border-radius' : '30px',
                    });
                }
                else {
                    localStorage.setItem('token', res);
                    window.location.href = "ruche.html";
                }
            }); 
        }
    });
})