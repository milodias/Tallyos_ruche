<?php
require "../model/ruche_bdd.php";
$pseudo = $_POST['pseudo'];
$pass = $_POST['pass'];
$user = new ruche_bdd();
$user->login_db();


$check = $user->checkLog($pseudo, $pass);
if(empty($check) || $check == NULL){
    echo 'fail';
}
else {
    echo $check;
}