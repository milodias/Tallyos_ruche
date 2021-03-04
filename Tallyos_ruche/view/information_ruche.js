$(document).ready(() => {
    var token = localStorage.getItem('token');
    $.ajax({
        url: '../control/ruche.php',
        type: 'post',
        data: {
            'token': token
        },
        success: function (res) {
            console.log(res);
            if (res == '') {
                window.location.href = "connexion_ruche.html";
            } else {
                $('#welcome').html('Bienvenue ' + res);

                $.ajax({
                    url: '../control/ruche.php',
                    type: 'post',
                    data: {
                        'token__': token
                    },

                    success: function (data) {
                        console.log(data);
                        var tab = JSON.parse(data);
                        for (const key in tab) {
                            const element = tab[key];
                            $('tbody').append("<tr> <th scope='row'>" + element['ruche'] + "</th> <td>" + element['date_ping'] + "</td> <td>" + element['poids'] + "</td> <td>" + element['temperature'] + "</td> <td>" + element['humidite'] + "</td>   <td> <button  class ='btn btn-secondary btn-modif'>Modifier</button> <button data-id='" + element['id_user'] + "' class ='btn btn-secondary del'>Supprimer</button> </td> </tr>");
                        }
                    }
                });
            }
        }
    });

});