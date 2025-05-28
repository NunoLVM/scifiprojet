<?php


if (ENV == "local") {
    $host = 'localhost';
    $dbname = 'popcorn'; // nom base de données sql
    $user = 'root';
    $password = '';
} else {
    $host = 'blobidesafec.mysql.db';
    $dbname = 'blobidesafec'; // nom base de données sql
    $user = 'blobidesafec';
    $password = 'Afec2025Dax';
    
    //https://phpmyadmin.hosting.ovh.net/index.php?pma_username=blobidesafec&pma_servername=blobidesafec.mysql.db

}

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $password);
    // Active le mode exception pour les erreurs PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Facultatif : mode fetch par défaut en tableau associatif
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die('Connexion échouée : ' . $e->getMessage());
}
?>