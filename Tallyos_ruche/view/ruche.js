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
                            $('tbody').append("<tr> <th scope='row'>" + element['nom'] + "</th> <td>" + element['latitude'] + "</td> <td>" + element['longitude'] + "</td> <td> <button id='"+element['id_user']+"' class ='btn btn-secondary  btn-modif'>Modifier</button> <button data-id='"+element['id_user']+"' class ='btn btn-secondary del'>Supprimer</button> </td> </tr>");
                        }
                    }
                });

                // $(".btn-modif").click((e)=>{
                //     console.log('ok')
                //     $(".poppins").remove();
                //     $('#btn-add').after("<div class='poppins'> <div class='form-group'> <label for='nom'>Nom</label> <input type='text' class='form-control' id='nom'  placeholder='Nom de la ruche'> </div> <div class='form-group'> <label for='latitude'>Latitude</label> <input type='text' class='form-control' id='latitude' placeholder='49.100000'> </div> <div class='form-group'> <label for='longitude'>Longitude</label> <input type='text' class='form-control' id='longitude' placeholder='49.100000'> </div> <button type='submit' class='btn btn-primary' id='ajouter'>Ajouter</button> <button class = 'btn btn-danger' id='close'>Fermer </button> </div>");
                //     $('.poppins').css({
                //         position: 'absolute',
                //         'z-index': '1000',
                //         'background-color': 'white',
                //         border: '1px solid black',
                //         padding: '15px'
                //     });
                // });

                $(".btn-primary").click((e) => {
                    localStorage.clear('token');
                    location.reload();
                });

                $('#btn-add').click(function (e) {
                    $(".poppin").remove();
                    $(this).after("<div class='poppin'> <div class='form-group'> <label for='nom'>Nom</label> <input type='text' class='form-control' id='nom'  placeholder='Nom de la ruche'> </div> <div class='form-group'> <label for='latitude'>Latitude</label> <input type='text' class='form-control' id='latitude' placeholder='49.100000'> </div> <div class='form-group'> <label for='longitude'>Longitude</label> <input type='text' class='form-control' id='longitude' placeholder='49.100000'> </div> <button type='submit' class='btn btn-primary' id='ajouter'>Ajouter</button> <button class = 'btn btn-danger' id='close'>Fermer </button> </div>");
                    $('.poppin').css({

                        position: 'absolute',
                        'z-index': '1000',
                        'background-color': 'white',
                        border: '1px solid black',
                        padding: '15px'
                    });
                    $('#close').click(function () {
                        $('.poppin').slideUp(1000);
                    })

                    $('#ajouter').click(function (e) {
                        var nom = $('#nom').val();
                        var latitude = $('#latitude').val();
                        var longitude = $('#longitude').val();
                        if (nom == '' || latitude == '' || longitude == '') {
                            $('.error_msg').remove();
                            $('.poppin').prepend("<div class= 'error_msg'> Veuillez remplir les champs </div>");
                            $('.poppin').css({
                                color : 'red',
                                fontWeight : 'bold',
                            })
                        } else {
                            $.ajax({
                                url: '../control/ruche.php',
                                type: 'post',
                                data: {
                                    'nom': nom,
                                    'latitude': latitude,
                                    'longitude': longitude,
                                    'token_': token
                                },
                                success: function (env) {
                                    console.log(env);
                                }
                            })
                            $('.poppin').fadeOut(1000);
                        }
                    });
                });
            }
        }
    });

});