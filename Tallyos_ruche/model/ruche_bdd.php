<?php
// require "token.php";
require "login_db.php";

class ruche_bdd extends HIVE_LIVE  {
    

    function checkLog($pseudo, $pass){
        $query = $this->bdd->query("SELECT token FROM user WHERE pseudo='$pseudo' AND pass='$pass'");
        $fetch = $query->fetch();
        return $fetch['token'];
    }    

    function keepLogin($token){
        $query = $this->bdd->query("SELECT CONCAT(prenom, ' ' , UPPER(nom)) AS 'alias' FROM user WHERE token = '$token'");
        $done = $query->fetch();
        if (empty($done) || strlen($done['alias'])>20 ){
            return null;
        }else {
            return $done['alias'];
        }
    }

    function get_id($token){
        $query = $this->bdd->query("SELECT id_user FROM user WHERE token = '$token' ");
        $fetch = $query->fetch();
        return $fetch['id_user'];
    }

    function addRuche($nom, $latitude, $longitude, $token){
        $id_user = intval($this->get_id($token));
        $prepare = $this->bdd->prepare("INSERT INTO ruche VALUES (0, '$nom',$latitude, $longitude, $id_user, '$token')");
        $prepare->execute();
    }

    function displayRuche($token){
        $query = $this->bdd->query("SELECT nom , latitude , longitude, id_user FROM ruche WHERE token = '$token'");
        $fetchAll = $query->fetchAll();
        foreach ($fetchAll as $value) {
            $displayRuche[] = ['nom' => $value['nom'], 'latitude' => $value['latitude'], 'longitude' => $value['longitude'], $value['id_user']];
        }
        return $displayRuche;
    }

    function displayInfoRuche($token){
        $query = $this->bdd->query("SELECT ruche , date_ping, poids, temperature, humidite, id_user FROM info_ruche WHERE token = '$token'");
        $fetchAll = $query->fetchAll();
        foreach ($fetchAll as $value) {
            $displayInfoRuche[] = ['ruche' => $value['ruche'], 'date_ping' => $value['date_ping'], 'poids' => $value['poids'], 'temperature' => $value['temperature'], 'humidite'=>$value['humidite'], $value['id_user']];
        }
        return $displayInfoRuche;
    }


    
}