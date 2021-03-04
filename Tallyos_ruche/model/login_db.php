<?php

class HIVE_LIVE {
    protected $bdd;
    
    function login_db () {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "ruche_tallyos";
        
        try {
            $bdd = new PDO("mysql:host=$servername; dbname=$dbname","$username", "$password");
            $this->bdd = $bdd;
        } catch (Exception $e) {
            echo "erreur: " . ($e)->getMessage();
            die();
        }
    }

}