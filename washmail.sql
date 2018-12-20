-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 20 Décembre 2018 à 18:18
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `washmail`
--

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `id` int(11) NOT NULL,
  `cookies` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cache`
--

INSERT INTO `cache` (`id`, `cookies`) VALUES
(1, 'mot de passe 1'),
(2, 'mot de passe 2'),
(3, 'mot de passe 3'),
(4, 'mot de passe 4'),
(5, 'mot de passe 5'),
(6, 'mot de passe 6'),
(7, 'mot de passe 7'),
(8, 'mot de passe 8');

-- --------------------------------------------------------

--
-- Structure de la table `extension`
--

CREATE TABLE `extension` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `jour` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `extension`
--

INSERT INTO `extension` (`id`, `nom`, `jour`) VALUES
(1, 'Allblock plus', 62),
(2, 'Astalavista Security', 34),
(3, 'Hangins', 156),
(4, 'That ColorPick extension', 12),
(5, 'Gogole Translate', 54);

-- --------------------------------------------------------

--
-- Structure de la table `historique`
--

CREATE TABLE `historique` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `historique`
--

INSERT INTO `historique` (`id`, `url`) VALUES
(3, 'https://www.chatonsmignons.com'),
(4, 'https://www.gogole.fr'),
(5, 'https://www.fessebouc.com'),
(6, 'https://www.gitanhub.com'),
(7, 'https://www.darkoueb.io'),
(8, 'https://www.slackunderflo.com'),
(9, 'https://www.tontube.fr'),
(10, 'https://www.dixheures.com'),
(11, 'https://www.touiteur.com'),
(12, 'https://www.gpasdmail.fr'),
(13, 'https://www.sitehonteux.net');

-- --------------------------------------------------------

--
-- Structure de la table `mail`
--

CREATE TABLE `mail` (
  `id` int(11) NOT NULL,
  `expéditeur` varchar(255) NOT NULL,
  `nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mail`
--

INSERT INTO `mail` (`id`, `expéditeur`, `nombre`) VALUES
(1, 'Amas Jaune', 25),
(2, 'Enlarge Your Blinis', 73),
(3, 'La Refoule', 34),
(4, 'REAL NIGERIAN PRINCE', 58),
(5, 'Super Legal Lotery', 39),
(6, 'Bill Gates Official', 33),
(7, 'Maman', 41),
(8, 'Mon Directeur Général', 26),
(9, 'Newsletter envahissante', 124),
(10, 'Newsletter énervante', 98),
(11, 'Newsletter inutile', 84),
(12, 'Newsletter d\'entreprise', 52);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `telechargement`
--

CREATE TABLE `telechargement` (
  `id` int(11) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `telechargement`
--

INSERT INTO `telechargement` (`id`, `file`) VALUES
(3, 'Ultra_cute_puppies.mp4'),
(4, 'That_Super_Popular_Game.rar'),
(5, 'LoveSong#4.mp3'),
(6, 'Mon-CV-de-Dev.pdf'),
(7, 'Funniest_meme_ever.jpg'),
(8, 'AngularSpringBoot7ClientDemo.zip'),
(9, 'ThatFileDoesntWork.deb');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `extension`
--
ALTER TABLE `extension`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `historique`
--
ALTER TABLE `historique`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mail`
--
ALTER TABLE `mail`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `telechargement`
--
ALTER TABLE `telechargement`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `cache`
--
ALTER TABLE `cache`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `extension`
--
ALTER TABLE `extension`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `historique`
--
ALTER TABLE `historique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `mail`
--
ALTER TABLE `mail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `telechargement`
--
ALTER TABLE `telechargement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
