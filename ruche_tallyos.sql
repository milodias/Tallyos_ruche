-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 04 mars 2021 à 16:04
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ruche_tallyos`
--

-- --------------------------------------------------------

--
-- Structure de la table `info_ruche`
--

DROP TABLE IF EXISTS `info_ruche`;
CREATE TABLE IF NOT EXISTS `info_ruche` (
  `id_ruche` int NOT NULL,
  `ruche` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `date_ping` datetime NOT NULL,
  `temperature` int NOT NULL COMMENT 'en Celcius °',
  `humidite` int NOT NULL,
  `id_user` int NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `poids` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `info_ruche`
--

INSERT INTO `info_ruche` (`id_ruche`, `ruche`, `date_ping`, `temperature`, `humidite`, `id_user`, `token`, `poids`) VALUES
(0, 'RUSH A', '2021-03-04 16:58:17', 25, 80, 1, 'azerty', 50);

-- --------------------------------------------------------

--
-- Structure de la table `ruche`
--

DROP TABLE IF EXISTS `ruche`;
CREATE TABLE IF NOT EXISTS `ruche` (
  `id_ruche` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `id_user` int NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_ruche`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `ruche`
--

INSERT INTO `ruche` (`id_ruche`, `nom`, `latitude`, `longitude`, `id_user`, `token`) VALUES
(1, '$nom', 49, 48, 0, '$token'),
(2, 'Ruche A', 48, 49, 1, 'azerty'),
(3, 'Ruche AA', 48.1241, 49.1235, 1, 'azerty'),
(4, 'RUCHE B', 47.1547, 48.1547, 1, 'azerty'),
(5, 'RUCHE C', 48.1795, 47.1265, 1, 'azerty'),
(6, '', 0, 0, 1, 'azerty');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `date_naissance` date NOT NULL,
  `ville` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `pseudo` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_bin NOT NULL COMMENT 'hash_password',
  `token` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `date_naissance`, `ville`, `pseudo`, `pass`, `token`) VALUES
(1, 'DOE', 'JOHN', '2021-03-04', 'HoneyCity', 'ruche', 'tuche', 'azerty');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
