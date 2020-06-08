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
    <title>Quản lý môn học</title>
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
                <div class="m-0 d-flex justify-content-center">
                    <?php
                    require '../Connection/Connect.php';
                    require '../Class/Subject.php';
                    if (isset($_POST['createSubject'])) {

                        $result = (new Subject())->createSubject(
                            $_POST['idSubject'],
                            $_POST['fullName'],
                            $_POST['lesson'],
                            $_POST['coefficient']
                        );

                        if ($result) {
                            echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Thêm thành công</span>';
                        } else {
                            echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Thêm thất bại</span>';
                        }
                    }

                    if (isset($_POST['updateSubject'])) {

                        $result = (new Subject())->updateSubject(
                            $_POST['idSubject'],
                            $_POST['fullName'],
                            $_POST['lesson'],
                            $_POST['coefficient']
                        );

                        if ($result) {
                            echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Sửa thành công</span>';
                        } else {
                            echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Sửa thất bại</span>';
                        }
                    }

                    if (json_decode(file_get_contents('php://input'), true) !== null) {

                        $idSubject = json_decode(file_get_contents('php://input'), true)['idSubject'];
                        $result = (new Subject())->deleteSubject($idSubject);
                        if ($result) {
                            echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Xóa thành công</span>';
                        } else {
                            echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Xóa thất bại</span>';
                        }
                    }

                    ?>

                </div>
                <div id="form-subject-info">
                    <div>
                        <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin môn học</h2>
                        <form class="border border-primary p-4" action="Subjects.php" method="POST">

                            <div class="form-group row">
                                <label for="inputTeacherId" class="col-3 col-form-label">Mã môn học</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputTeacherId" name="idSubject" placeholder="Mã môn học">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherName" class="col-3 col-form-label">Tên môn học</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputTeacherName" name="fullName" placeholder="Tên môn học">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherIdMh" class="col-3 col-form-label">Số tiết</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputTeacherIdMh" name="lesson" placeholder="Số tiết">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputTeacherArs" class="col-3 col-form-label">Hệ số</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputTeacherArs" name="coefficient" placeholder="Hệ số">
                                </div>
                            </div>

                            <div class="form-group row mb-1">
                                <div class="col text-center">
                                    <button type="submit" name="createSubject" class="btn btn-success">Thêm môn học</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <div class="col-8 mx-auto bg-white rounded shadow">
                <div class="row flex-row d-flex py-3 justify-content-between">
                    <input id="inputSearch" class="form-control w-25 px-3 mx-3" type="search" placeholder="Tìm kiếm tên môn học" aria-label="Search">
                    <button id="btn-add-subject" class="btn btn-success px-3 mx-3">Thêm môn học</button>
                </div>

                <!-- Fixed header table-->
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead class="table-header">
                            <tr>

                                <th scope="col">Mã môn học</th>
                                <th scope="col">Tên môn học</th>
                                <th scope="col">Số tiết</th>
                                <th scope="col">Hệ số</th>
                                <th scope="col">Sửa / Xoá</th>
                            </tr>
                        </thead>
                        <tbody class="table-content" id="subject-table">

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


    <script src="/Web2/App/Views/assets/js/Module/Subject.js"></script>
</body>

</html>