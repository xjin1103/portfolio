-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2018 at 04:08 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xjin_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
CREATE TABLE IF NOT EXISTS `production` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_img` varchar(250) NOT NULL,
  `prod_scale` varchar(60) DEFAULT NULL,
  `prod_desc` varchar(800) DEFAULT NULL,
  `prod_lightbox` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `production`
--

INSERT INTO `production` (`prod_id`, `prod_img`, `prod_scale`, `prod_desc`, `prod_lightbox`) VALUES
(1, './images/works/Thumbnails/work01.jpg', 'long', '<p>A rough draft of Yuri</p>\r\n<p>He is a character from Tales of Vesperia</p>', './images/works/HD/workHD01.jpg'),
(2, './images/works/Thumbnails/work02.gif', 'short', '<p>My cute cat Mimi</p>\r\n<p>He\'s ten years old</p>', './images/works/HD/workHD02.gif'),
(3, './images/works/Thumbnails/work03.jpg', 'short', '<p>Fall is coming</p>\r\n<p>Shot in Victoria Park, 2016 Sep</p>', './images/works/HD/workHD03.jpg'),
(4, './images/works/Thumbnails/work04.jpg', 'long', '<p>Niagara Fall the firework show</p>', './images/works/HD/workHD04.jpg'),
(5, './images/works/Thumbnails/work05.jpg', 'long', '<p>Fall is here in London.</p>\r\n<p>Leaves are all over the ground</p>', './images/works/HD/workHD05.jpg'),
(6, './images/works/Thumbnails/work06.jpg', 'short', '<p>My design of work</p>\r\n<p>A logo of the most famous mountain in Japan-Mountain Fuli </p>', './images/works/HD/workHD06.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
