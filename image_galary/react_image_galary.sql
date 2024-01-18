-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2024 at 06:05 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_image_galary`
--

-- --------------------------------------------------------

--
-- Table structure for table `image_galary`
--

CREATE TABLE `image_galary` (
  `S_No` int(255) NOT NULL,
  `Categories` varchar(500) NOT NULL,
  `Image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image_galary`
--

INSERT INTO `image_galary` (`S_No`, `Categories`, `Image`) VALUES
(1, 'category 1', 'bg5.jpeg'),
(2, 'category 2', 'bg10.jpeg'),
(3, 'category 3', 'bg54.jpg'),
(4, 'category 4', 'bg55.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `top_search`
--

CREATE TABLE `top_search` (
  `S_No` int(255) NOT NULL,
  `TopSearch` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `top_search`
--

INSERT INTO `top_search` (`S_No`, `TopSearch`) VALUES
(1, 'category 1'),
(2, 'category 2'),
(3, 'category 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image_galary`
--
ALTER TABLE `image_galary`
  ADD PRIMARY KEY (`S_No`);

--
-- Indexes for table `top_search`
--
ALTER TABLE `top_search`
  ADD PRIMARY KEY (`S_No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image_galary`
--
ALTER TABLE `image_galary`
  MODIFY `S_No` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `top_search`
--
ALTER TABLE `top_search`
  MODIFY `S_No` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
