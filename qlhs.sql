-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 16, 2020 lúc 06:21 PM
-- Phiên bản máy phục vụ: 8.0.19
-- Phiên bản PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlhs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `assignment`
--

CREATE TABLE `assignment` (
  `idAssignment` int NOT NULL,
  `idSubject` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `idTeacher` int NOT NULL,
  `idClass` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `idSem` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `assignment`
--

INSERT INTO `assignment` (`idAssignment`, `idSubject`, `idTeacher`, `idClass`, `idSem`) VALUES
(1, 'T', 1010, '10A1', '12016'),
(2, 'A', 1012, '10A2', '12016'),
(3, 'T', 1010, '10A2', '12016'),
(4, 'CN', 1010, '10A2', '12016');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `classroom`
--

CREATE TABLE `classroom` (
  `idClass` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `grade` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `classroom`
--

INSERT INTO `classroom` (`idClass`, `fullName`, `grade`) VALUES
('10A1', '10A1', '10'),
('10A2', '10A2', '10'),
('10A3', '10A3', '10'),
('10A4', '10A4', '10'),
('10A5', '10A5', '10'),
('10A6', '10A6', '10'),
('10A7', '10A7', '10'),
('10A8', '10A8', '10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mark`
--

CREATE TABLE `mark` (
  `idMark` int NOT NULL,
  `idStd` int NOT NULL,
  `idClass` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `idSem` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `idSubject` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mark1` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mark15` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mark45` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mark90` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `avg` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `mark`
--

INSERT INTO `mark` (`idMark`, `idStd`, `idClass`, `idSem`, `idSubject`, `mark1`, `mark15`, `mark45`, `mark90`, `avg`) VALUES
(26, 100102, '10A1', '12016', 'A', '10', '10', '10', '0', 5),
(27, 100103, '10A1', '12016', 'A', '10', '9', '8', '9', 8.8),
(28, 100107, '10A1', '12016', 'A', '9', '9', '9', '8', 8.5),
(29, 100109, '10A1', '12016', 'A', '9', '10', '10', '10', 9.9);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `semester`
--

CREATE TABLE `semester` (
  `idSem` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `coefficient` int NOT NULL,
  `schoolYear` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `semester`
--

INSERT INTO `semester` (`idSem`, `fullName`, `coefficient`, `schoolYear`) VALUES
('12016', 'HK 1 2016 - 2017', 1, '2016-2017'),
('22016', 'HK 2 2016 - 2017', 2, '2016-2017');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student`
--

CREATE TABLE `student` (
  `idStd` int NOT NULL,
  `idClass` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `placeOfBirth` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `familyPhone` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `student`
--

INSERT INTO `student` (`idStd`, `idClass`, `fullName`, `gender`, `birthday`, `placeOfBirth`, `familyPhone`) VALUES
(100102, '10A1', 'Nguyễn Thị Phương Anh', 'Nữ', '2000-11-02', 'Bình Phước', '0123456789'),
(100103, '10A1', 'Trịnh Hữu Huy', 'Nữ', '2000-11-01', 'Thái Nguyên', '0123456789'),
(100104, '10A2', 'Trần Thiện Nhân', 'Nam', '2000-11-23', 'Trà Vinh', '0123456789'),
(100105, '10A2', 'Lương Xuân Trường', 'Nam', '2001-11-09', 'Tuyên Quang', '0123456789'),
(100107, '10A1', 'Nguyễn Thị Bê', 'Nữ', '2000-12-06', 'Hải Phòng', '0123456789'),
(100109, '10A1', 'Lý Xuân Sang', 'Nam', '2020-06-06', 'Đồng Nai', '0999999999'),
(100111, '10A1', 'Nguyễn Trương Phong', 'Nam', '1999-12-05', 'Thái Bình', '0123456789'),
(100201, '10A2', 'Nguyễn Công Phượng', 'Nam', '2001-12-26', 'Nghệ An', '0123456789'),
(100505, '10A1', 'Trịnh Văn Tôn', 'Nam', '1999-02-22', 'Điện Biên Phủ', '0123456789'),
(100605, '10A3', 'Nguyễn Trương Phong', 'Nam', '1999-12-05', 'Thái Bình', '0123456789');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subject`
--

CREATE TABLE `subject` (
  `idSubject` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lesson` int NOT NULL,
  `coefficient` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `subject`
--

INSERT INTO `subject` (`idSubject`, `fullName`, `lesson`, `coefficient`) VALUES
('A', 'Tiếng Anh', 105, 1),
('CN', 'Công Nghệ', 50, 1),
('DL', 'Địa Lý', 70, 1),
('GD', 'Giáo Dục Công Dân', 50, 1),
('H', 'Hóa Học', 70, 1),
('QP', 'Giáo dục quốc phòng', 50, 1),
('S', 'Lịch Sử', 100, 1),
('Si', 'Sinh Học', 75, 1),
('T', 'Toán', 100, 2),
('Ti', 'Tin Học', 100, 1),
('V', 'Văn', 120, 2),
('VL', 'Vật Lý', 70, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `teacher`
--

CREATE TABLE `teacher` (
  `idTeacher` int NOT NULL,
  `idSubject` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phoneNumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `teacher`
--

INSERT INTO `teacher` (`idTeacher`, `idSubject`, `fullName`, `address`, `phoneNumber`) VALUES
(1010, 'T', 'Lê Thị Ngọc Hoa', '285 Cao Lỗ Phường 4 Quận 8 Hồ Chí Minh       ', '01226156288'),
(1012, 'A', 'Đinh Thị Ngoc Diệp', '123 Bis Phạm Hùng Quận 8 Hồ Chí Minh      ', '0190919008'),
(1501, 'S', 'Trần Thị Ngọc Sử', '125 Nguyễn Tri Phương Quận 10\r\n  ', '05167654156'),
(6006, 'H', 'Tạ Minh Tâm', '84/2 Bình Hưng Hòa Bình Tân   ', '0846965632'),
(9001, 'CN', 'Nguyễn Thị Nghệ', '65 Trần Hưng Đạo Quận 5  ', '0987654336');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `userid` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `level` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`userid`, `username`, `password`, `level`) VALUES
(9, 'root', '3f07ca40af8cedb2045bb5d1dab9bc8d', 0),
(10, 'admin', 'b6b32266f1e95063eb8d27e2bb344411', 0),
(11, 'user', '0726a7ddb95c9405f41eb6a130ed1197', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`idAssignment`),
  ADD KEY `fk_day_monhoc` (`idSubject`),
  ADD KEY `fk_day_gv` (`idTeacher`),
  ADD KEY `fk_day_hocky` (`idSem`),
  ADD KEY `fk_day_lophoc` (`idClass`);

--
-- Chỉ mục cho bảng `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`idClass`);

--
-- Chỉ mục cho bảng `mark`
--
ALTER TABLE `mark`
  ADD PRIMARY KEY (`idMark`),
  ADD KEY `fk_diem_mahk` (`idSem`),
  ADD KEY `fk_diem_monhoc` (`idSubject`),
  ADD KEY `fk_diem_hocsinh` (`idStd`),
  ADD KEY `MaLopHoc` (`idClass`);

--
-- Chỉ mục cho bảng `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`idSem`);

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`idStd`),
  ADD KEY `fk_hs_lh` (`idClass`);

--
-- Chỉ mục cho bảng `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`idSubject`);

--
-- Chỉ mục cho bảng `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`idTeacher`),
  ADD UNIQUE KEY `SDT` (`phoneNumber`),
  ADD KEY `fk_gv_mh` (`idSubject`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `assignment`
--
ALTER TABLE `assignment`
  MODIFY `idAssignment` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `mark`
--
ALTER TABLE `mark`
  MODIFY `idMark` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `fk_day_gv` FOREIGN KEY (`idTeacher`) REFERENCES `teacher` (`idTeacher`),
  ADD CONSTRAINT `fk_day_hocky` FOREIGN KEY (`idSem`) REFERENCES `semester` (`idSem`),
  ADD CONSTRAINT `fk_day_lophoc` FOREIGN KEY (`idClass`) REFERENCES `classroom` (`idClass`),
  ADD CONSTRAINT `fk_day_monhoc` FOREIGN KEY (`idSubject`) REFERENCES `subject` (`idSubject`);

--
-- Các ràng buộc cho bảng `mark`
--
ALTER TABLE `mark`
  ADD CONSTRAINT `mark-class` FOREIGN KEY (`idClass`) REFERENCES `classroom` (`idClass`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `mark-sem` FOREIGN KEY (`idSem`) REFERENCES `semester` (`idSem`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `mark-student` FOREIGN KEY (`idStd`) REFERENCES `student` (`idStd`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `mark-subject` FOREIGN KEY (`idSubject`) REFERENCES `subject` (`idSubject`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_hs_lh` FOREIGN KEY (`idClass`) REFERENCES `classroom` (`idClass`);

--
-- Các ràng buộc cho bảng `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `fk_gv_mh` FOREIGN KEY (`idSubject`) REFERENCES `subject` (`idSubject`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
