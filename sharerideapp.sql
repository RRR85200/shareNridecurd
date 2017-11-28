-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2017 at 08:05 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sharerideapp`
--
CREATE DATABASE IF NOT EXISTS `sharerideapp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sharerideapp`;

-- --------------------------------------------------------

--
-- Table structure for table `avail_coupons`
--

CREATE TABLE `avail_coupons` (
  `coupon_code` int(10) NOT NULL,
  `coupon_type` float(5,2) NOT NULL,
  `coupon_validity` datetime NOT NULL,
  `coupon_rides` int(5) NOT NULL,
  `coupon_price` float(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avail_coupons`
--

INSERT INTO `avail_coupons` (`coupon_code`, `coupon_type`, `coupon_validity`, `coupon_rides`, `coupon_price`) VALUES
(90001, 25.00, '2017-12-31 00:00:00', 10, 25.00),
(90002, 50.00, '2018-01-31 00:00:00', 5, 25.00),
(90003, 75.00, '2017-12-20 00:00:00', 4, 25.00),
(90004, 20.00, '2017-11-30 00:00:00', 15, 25.00);

-- --------------------------------------------------------

--
-- Table structure for table `car_details`
--

CREATE TABLE `car_details` (
  `user_id` int(10) NOT NULL,
  `model` varchar(20) NOT NULL,
  `company` varchar(20) NOT NULL,
  `year` int(10) NOT NULL,
  `vehicle_num` varchar(20) NOT NULL,
  `seats` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `current_rides`
--

CREATE TABLE `current_rides` (
  `current_rideid` int(11) NOT NULL,
  `ride_driver_name` varchar(100) NOT NULL,
  `ride_rider_name` varchar(100) NOT NULL,
  `ride_user_id` int(20) NOT NULL,
  `ride_driver_id` int(20) NOT NULL,
  `origin` varchar(255) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `ridetime` datetime NOT NULL,
  `ride_id` int(234) NOT NULL,
  `seats` int(10) NOT NULL,
  `price` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `current_rides`
--

INSERT INTO `current_rides` (`current_rideid`, `ride_driver_name`, `ride_rider_name`, `ride_user_id`, `ride_driver_id`, `origin`, `destination`, `ridetime`, `ride_id`, `seats`, `price`) VALUES
(29, 'rangarayudu', 'ajay trinet', 129, 124, 'Independence', 'UCM main campus', '2017-11-18 11:16:20', 9030, 0, 0.00),
(31, 'Ranga', 'Nareshanna Krish', 130, 124, 'UCM main campus', 'Sedali', '2017-11-30 01:01:00', 9018, 1, 5.00),
(33, 'NareshannaKrish', 'ajay trinet', 129, 130, 'UCM main campus', 'Lee summit Campus', '2017-11-18 17:30:07', 9033, 1, 5.00),
(36, 'NareshannaKrish', 'samba siva ', 138, 130, 'Olathe', 'Lee summit Campus', '2017-11-19 21:51:52', 9047, 1, 6.00),
(37, 'NareshannaKrish', 'samba siva ', 138, 130, 'Olathe', 'Lee summit Campus', '2017-11-19 21:51:54', 9047, 1, 6.00);

-- --------------------------------------------------------

--
-- Table structure for table `location_dist`
--

CREATE TABLE `location_dist` (
  `origin` varchar(20) NOT NULL,
  `destination` varchar(20) NOT NULL,
  `miles` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rides_avail`
--

CREATE TABLE `rides_avail` (
  `user_id` int(11) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `seats` int(12) NOT NULL,
  `date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `userType` varchar(30) NOT NULL,
  `mobile` float(15,0) NOT NULL,
  `ride_id` int(11) NOT NULL,
  `postedBy` text NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rides_avail`
--

INSERT INTO `rides_avail` (`user_id`, `origin`, `destination`, `seats`, `date`, `userType`, `mobile`, `ride_id`, `postedBy`, `price`) VALUES
(124, 'UCM main campus', 'Sedali', 5, '2017-11-04 01:01:00', 'Driver', 122345568, 9032, 'Ranga', 5),
(130, 'UCM main campus', 'Lee summit Campus', 3, '2017-11-18 17:31:22', 'Driver', 6748744, 9033, 'NareshannaKrish', 5),
(124, 'Olathe', 'Lone Jack', 0, '2017-11-19 02:10:31', 'Driver', 5102097920, 9034, 'rangarayudu', 8),
(129, 'Kansas Zoo Area', 'Bristle Ridge', 3, '2015-12-05 12:57:00', 'Rider', 9584425984, 9046, 'ajaytrinet', 0),
(130, 'Olathe', 'Lee summit Campus', 0, '2017-11-19 21:51:57', 'Driver', 6748744, 9047, 'NareshannaKrish', 6),
(124, 'Sedali', 'Walmart warrensburg', 6, '2017-12-28 15:22:00', 'Driver', 5102097920, 9048, 'rangarayudu', 6),
(129, 'Knob Knoster', 'Knob Knoster', 5, '2018-02-01 15:44:00', 'Rider', 9584425984, 9049, 'ajaytrinet', 0),
(138, 'Overland Park', 'Lone Jack', 7, '2017-12-21 12:14:00', 'Rider', 5102036480, 9050, 'sambasiva ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ride_history`
--

CREATE TABLE `ride_history` (
  `ride_hist_id` int(11) NOT NULL,
  `ride_driver_name` varchar(200) NOT NULL,
  `ride_rider_name` varchar(200) NOT NULL,
  `ride_user_id` int(200) NOT NULL,
  `ride_driver_id` int(200) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `ridetime` datetime NOT NULL,
  `ride_id` int(200) NOT NULL,
  `rideendtime` datetime NOT NULL,
  `price` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ride_history`
--

INSERT INTO `ride_history` (`ride_hist_id`, `ride_driver_name`, `ride_rider_name`, `ride_user_id`, `ride_driver_id`, `origin`, `destination`, `ridetime`, `ride_id`, `rideendtime`, `price`) VALUES
(8, 'rangarayudu', 'ranga rayudu', 124, 124, 'Lee summit Campus', 'Knob Knoster', '2017-12-12 12:12:00', 9024, '2017-11-05 11:17:45', 0.00),
(10, 'NareshannaKrish', 'ranga rayudu', 124, 130, 'UCM main campus', 'KCI Airport', '2017-12-12 01:01:00', 9026, '2017-11-06 21:57:10', 0.00),
(12, 'rangarayudu', 'ranga rayudu', 124, 124, 'Lee summit Campus', 'Knob Knoster', '2017-12-12 12:12:00', 9024, '2017-11-16 23:45:24', 0.00),
(14, 'NareshannaKrish', 'Tarak Rayapudi', 136, 130, 'UCM main campus', 'KCI Airport', '2017-12-12 01:01:00', 9026, '2017-11-18 00:22:14', 0.00),
(16, 'NareshannaKrish', 'ajay trinet', 129, 130, 'UCM main campus', 'Lee summit Campus', '2017-11-18 17:30:07', 9033, '2017-11-18 22:30:36', 0.00),
(18, 'Nareshanna Krish', 'ajaytrinet', 129, 130, 'Kansas City', 'Lee summit Campus', '2017-12-12 05:00:00', 9036, '2017-11-19 02:12:44', 0.00),
(25, 'Nareshanna Krish', 'ajaytrinet', 129, 130, 'Kansas City', 'Lee summit Campus', '2017-12-12 05:00:00', 9036, '2017-11-19 02:56:50', 0.00),
(27, 'Nareshanna Krish', 'ajaytrinet', 129, 130, 'UCM main campus', 'UCM main campus', '2017-12-15 12:12:00', 9045, '2017-11-19 02:59:50', 0.00),
(29, 'Nareshanna Krish', 'ajaytrinet', 129, 130, 'UCM main campus', 'UCM main campus', '2017-12-15 12:12:00', 9045, '2017-11-19 03:02:01', 0.00),
(31, 'rangarayudu', 'Nareshanna Krish', 130, 124, 'Olathe', 'Lone Jack', '2017-11-19 00:09:34', 9034, '2017-11-19 03:03:43', 0.00),
(32, 'ranga rayudu', 'ajaytrinet', 129, 124, 'Kansas City', 'Lee summit Campus', '2017-12-12 05:00:00', 9036, '2017-11-19 03:03:44', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `firstname` varchar(30) CHARACTER SET latin1 NOT NULL,
  `lastname` varchar(30) CHARACTER SET latin1 NOT NULL,
  `email` varchar(30) CHARACTER SET latin1 NOT NULL,
  `mobile` double(15,0) NOT NULL,
  `password` varchar(30) CHARACTER SET latin1 NOT NULL,
  `userType` varchar(30) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `email`, `mobile`, `password`, `userType`) VALUES
(120, 'raghu', 'Rayapudi', 'raghu@hmai.com', 5102033709, 'rayudu123', 'Rider'),
(124, 'ranga', 'rayudu', 'ranga-me15@snu.edu.in', 5102098008, 'rayudu123', 'Driver'),
(129, 'ajay', 'trinet', 'ajay.trinet@gmail.com', 9584425524, 'ajay123', 'Rider'),
(130, 'Nareshanna', 'Krish', 'naresh.k@gmail.com', 6748744, 'naresh123', 'Driver'),
(132, 'Ravali', 'Pothineni', 'ravali@gmail.com', 5102589634, 'ravali123', 'Rider'),
(134, 'Nagrjuna', 'Rayapudi', 'nagarjuna@gmail.com', 9966078842, 'nag123', 'Rider'),
(136, 'Tarak', 'Rayapudi', 'tarakram@gmail.com', 5102032569, 'tarak123', 'Rider'),
(138, 'samba', 'siva ', 'samba.siva@gmail.com', 5102036697, 'samba123', 'Rider');

-- --------------------------------------------------------

--
-- Table structure for table `user_coupons`
--

CREATE TABLE `user_coupons` (
  `user_id` int(11) NOT NULL,
  `coupon_code` int(11) NOT NULL,
  `coupon_type` float(10,2) NOT NULL,
  `coupon_validity` datetime NOT NULL,
  `coupon_rides` int(11) NOT NULL,
  `coupon_price` float(10,2) NOT NULL,
  `coupon_seq` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_coupons`
--

INSERT INTO `user_coupons` (`user_id`, `coupon_code`, `coupon_type`, `coupon_validity`, `coupon_rides`, `coupon_price`, `coupon_seq`) VALUES
(130, 90002, 50.00, '2018-01-31 00:00:00', 5, 25.00, 2000),
(129, 90001, 25.00, '2017-12-31 00:00:00', 10, 25.00, 2001);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avail_coupons`
--
ALTER TABLE `avail_coupons`
  ADD PRIMARY KEY (`coupon_code`);

--
-- Indexes for table `car_details`
--
ALTER TABLE `car_details`
  ADD PRIMARY KEY (`vehicle_num`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `current_rides`
--
ALTER TABLE `current_rides`
  ADD PRIMARY KEY (`current_rideid`),
  ADD KEY `ride_user_id` (`ride_user_id`),
  ADD KEY `ride_driver_id` (`ride_driver_id`);

--
-- Indexes for table `rides_avail`
--
ALTER TABLE `rides_avail`
  ADD PRIMARY KEY (`ride_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `ride_history`
--
ALTER TABLE `ride_history`
  ADD PRIMARY KEY (`ride_hist_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_coupons`
--
ALTER TABLE `user_coupons`
  ADD PRIMARY KEY (`coupon_seq`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `coupon_code` (`coupon_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avail_coupons`
--
ALTER TABLE `avail_coupons`
  MODIFY `coupon_code` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90005;
--
-- AUTO_INCREMENT for table `current_rides`
--
ALTER TABLE `current_rides`
  MODIFY `current_rideid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `rides_avail`
--
ALTER TABLE `rides_avail`
  MODIFY `ride_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9051;
--
-- AUTO_INCREMENT for table `ride_history`
--
ALTER TABLE `ride_history`
  MODIFY `ride_hist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
--
-- AUTO_INCREMENT for table `user_coupons`
--
ALTER TABLE `user_coupons`
  MODIFY `coupon_seq` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2002;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `car_details`
--
ALTER TABLE `car_details`
  ADD CONSTRAINT `car_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `current_rides`
--
ALTER TABLE `current_rides`
  ADD CONSTRAINT `current_rides_ibfk_1` FOREIGN KEY (`ride_user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `current_rides_ibfk_2` FOREIGN KEY (`ride_driver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rides_avail`
--
ALTER TABLE `rides_avail`
  ADD CONSTRAINT `rides_avail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_coupons`
--
ALTER TABLE `user_coupons`
  ADD CONSTRAINT `user_coupons_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_coupons_ibfk_2` FOREIGN KEY (`coupon_code`) REFERENCES `avail_coupons` (`coupon_code`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
