<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('location: /Web2/App/index.php');
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Quản lý giáo viên</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Advanced-NavBar---Multi-dropdown.css">
    <link rel="stylesheet" href="assets/css/Bootstrap-4---Table-Fixed-Header.css">
    <link rel="stylesheet" href="assets/css/gradient-navbar-1.css">
    <link rel="stylesheet" href="assets/css/gradient-navbar.css">
    <link rel="stylesheet" href="/Web2/App/Vendors/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <header>
        <nav class="navbar navbar-light navbar-expand-md pulse" id="app-navbar">
            <div class="container-fluid"><a class="navbar-brand" href="/Web2/App/Views/Student.php"><i class="icon ion-ios-infinite" id="brand-logo"></i></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-2"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-2">
                    <ul class="nav navbar-nav mr-auto">

                        <li class="nav-item dropdown">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Quản
                                lý hồ sơ</a>
                            <div class="dropdown-menu pulse animated" role="menu">
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Student.php">Học sinh</a>
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Teacher.php">Giáo viên</a>
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Subjects.php">Môn học</a>
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Classroom.php">Lớp học</a>
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Semester.php">Học kỳ</a></div>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/Web2/App/Views/Mark.php">Quản lý điểm</a>
                        </li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/Web2/App/Views/Assignment.php">Phân công giảng dạy</a>
                        </li>
                        <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Cài đặt</a>
                            <div class="dropdown-menu pulse animated" role="menu"><a class="dropdown-item" role="presentation" href="/Web2/App/Views/Manage.php">Quản lý User</a><a class="dropdown-item" role="presentation" href="/Web2/App/index.php">Đăng xuất</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container-fluid py-5">
        <div class="row">
            <div class="col-4">
                <div class="m-0 d-flex justify-content-center" id="showError">
                    <?php
                    require '../Connection/Connect.php';
                    require '../Class/Teacher.php';
                    if (isset($_POST['createTeacher'])) {
                        if (
                            !$_POST['idTeacher']||
                            !$_POST['idSubject']||
                            !$_POST['fullName']||
                            !$_POST['address']||
                            !$_POST['phoneNumber']
                        ) {
                            echo '<span id="showError" class="text-warning border border-warning py-1 px-5">Vui lòng nhâp đủ thông tin</span>';
                        }
                        else{
                            $result = (new Teacher())->createTeacher(
                                $_POST['idTeacher'],
                                $_POST['idSubject'],
                                $_POST['fullName'],
                                $_POST['address'],
                                $_POST['phoneNumber'],
                            );
    
                            if ($result) {
                                echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Thêm thành công</span>';
                            } else {
                                echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Thêm thất bại</span>';
                            }
                        }
                        
                    }

                    if (isset($_POST['updateTeacher'])) {
                        if (
                            !$_POST['idTeacher']||
                            !$_POST['idSubject']||
                            !$_POST['fullName']||
                            !$_POST['address']||
                            !$_POST['phoneNumber']
                        ) {
                            echo '<span id="showError" class="text-warning border border-warning py-1 px-5">Vui lòng nhâp đủ thông tin</span>';
                        }
                        else{
                            $result = (new Teacher())->updateTeacher(
                                $_POST['idTeacher'],
                                $_POST['idSubject'],
                                $_POST['fullName'],
                                $_POST['address'],
                                $_POST['phoneNumber'],
                            );
    
                            if ($result) {
                                echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Sửa thành công</span>';
                            } else {
                                echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Sửa thất bại</span>';
                            }
                        }
                        
                    }

                    if (json_decode(file_get_contents('php://input'), true) !== null) {

                        $idTeacher = json_decode(file_get_contents('php://input'), true)['idTeacher'];
                        $result = (new Teacher())->deleteTeacher($idTeacher);
                        if ($result) {
                            echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Xóa thành công</span>';
                        } else {
                            echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Xóa thất bại</span>';
                        }
                    }

                    ?>

                </div>
                <div id="form-teacher-info">
                    <div>
                        <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin giáo viên</h2>
                        <form onsubmit="return checkedTeacher()" class="border border-primary p-4" action="Teacher.php" method="POST">

                            <div class="form-group row">
                                <label for="inputTeacherId" class="col-3 col-form-label">Mã giáo viên</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="idTeacher" name="idTeacher" placeholder="Mã giáo viên">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherName" class="col-3 col-form-label">Họ và tên</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Họ và tên">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherIdMh" class="col-3 col-form-label">Mã môn học</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="idSubject" name="idSubject" placeholder="Mã môn học">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherArs" class="col-3 col-form-label">Địa chỉ</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="address" name="address" placeholder="Địa chỉ">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="tel" class="col-3 col-form-label">Số điện thoại</label>
                                <div class="col-8">
                                    <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Số điện thoại">
                                </div>
                            </div>

                            <div class="form-group row mb-1">
                                <div class="col text-center">
                                    <button type="submit" name="createTeacher" class="btn btn-success">Thêm giáo viên</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div class="col-8 mx-auto bg-white rounded shadow">
                <div class="row flex-row d-flex py-3 justify-content-between">
                    <input id="inputSearch" class="form-control w-25 px-3 mx-3" type="search" placeholder="Tìm kiếm mã giáo viên" aria-label="Search">
                    <button id="btn-add-teacher" class="btn btn-success px-3 mx-3">Thêm giáo viên</button>
                </div>

                <!-- Fixed header table-->
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead class="table-header">
                            <tr>
                                <th scope="col">Mã giáo viên</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Mã môn học</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Sửa / Xoá</th>
                            </tr>
                        </thead>
                        <tbody class="table-content" id="teacher-table">

                        </tbody>
                    </table>
                </div><!-- End -->

            </div>
        </div>
    </div>

    <footer id="footerpad">
        <div class="container-fluid badge-dark">
            <div class="row">
                <div class="col mx-auto">
                    <p class="copyright text-muted text-center my-3">Copyright © Your Company 2020 | Web Design by Evel</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/Advanced-NavBar---Multi-dropdown.js"></script>
    <script src="/Web2/App/Vendors/js/axios.min.js"></script>


    <script src="/Web2/App/Views/assets/js/Module/Teacher.js"></script>
    <script src="/Web2/App/Views/assets/js/Validation.js"></script>
</body>

</html>