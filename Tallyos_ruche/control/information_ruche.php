<?php
require "../model/ruche_bdd.php";

$user = new ruche_bdd();
$user->login_db();

if(isset($_POST['token__'])){
    $token = $_POST['token__'];

    $tab = json_encode($user->displayInfoRuche($token));
    echo $tab;
}