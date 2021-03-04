<?php
require "../model/ruche_bdd.php";

$user = new ruche_bdd();
$user->login_db();

if(isset($_POST['token'])){
    $token = $_POST['token'];
    $name = $user->keepLogin($token);
    echo $name;
}

if(isset($_POST['latitude'])){
    $nom = $_POST['nom'];
    $latitude = floatval($_POST['latitude']);
    $longitude = floatval($_POST['longitude']);
    $token = $_POST['token_'];

    $user->addRuche($nom, $latitude, $longitude, $token);
}

if(isset($_POST['token__'])){
    $token = $_POST['token__'];

    $tab = json_encode($user->displayRuche($token));
    echo $tab;
}
