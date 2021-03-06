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
    <title>Quản lý học sinh</title>
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
                            <div class="dropdown-menu pulse animated" role="menu">
                                <a class="dropdown-item" role="presentation" href="/Web2/App/Views/Manage.php">Quản lý User</a>
                                <a class="dropdown-item" role="presentation" href="/Web2/App/index.php">Đăng xuất</a>
                            </div>
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
                    require '../Class/Student.php';
                    if (isset($_POST['createStudent'])) {
                        if( !$_POST['idStd']||
                            !$_POST['idClass']||
                            !$_POST['fullName']||
                            !$_POST['gender-male']||
                            !$_POST['birthday']||
                            !$_POST['placeOfBirth']||
                            !$_POST['familyPhone']){
                                echo '<span id="showError" class="text-warning border border-warning py-1 px-5">Vui lòng nhâp đủ thông tin</span>';
                        }
                        else{
                            $result = (new Student())->createStudent(
                                $_POST['idStd'],
                                $_POST['idClass'],
                                $_POST['fullName'],
                                isset($_POST['gender-male']) ? 'Nam' : 'Nữ',
                                $_POST['birthday'],
                                $_POST['placeOfBirth'],
                                $_POST['familyPhone']
                            );
    
                            if ($result) {
                                echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Thêm thành công</span>';
                            } else {
                                echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Thêm thất bại</span>';
                            }
                        }
                        
                    }

                    if (isset($_POST['updateStudent'])) {
                        if( !$_POST['idStd']||
                        !$_POST['idClass']||
                        !$_POST['fullName']||
                        !$_POST['gender-male']||
                        !$_POST['birthday']||
                        !$_POST['placeOfBirth']||
                        !$_POST['familyPhone']){
                            echo '<span id="showError" class="text-warning border border-warning py-1 px-5">Vui lòng nhâp đủ thông tin</span>';
                        }
                        else{
                            $result = (new Student())->updateStudent(
                                $_POST['idStd'],
                                $_POST['idClass'],
                                $_POST['fullName'],
                                isset($_POST['gender-male']) ? 'Nam' : 'Nữ',
                                $_POST['birthday'],
                                $_POST['placeOfBirth'],
                                $_POST['familyPhone']
                            );
    
                            if ($result) {
                                echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Sửa thành công</span>';
                            } else {
                                echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Sửa thất bại</span>';
                            }
                        }
                        
                    }

                    if (json_decode(file_get_contents('php://input'), true) !== null) {

                        $idStd = json_decode(file_get_contents('php://input'), true)['idStd'];
                        $result = (new Student())->deleteStudent($idStd);
                        if ($result) {
                            echo '<span id="showError" class="text-success border border-success py-1 px-5 border-success">Xóa thành công</span>';
                        } else {
                            echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Xóa thất bại</span>';
                        }
                    }

                    ?>

                </div>

                <div id="form-std-info">
                    <div class="enter-student-information">
                        <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học sinh</h2>
                        <form onsubmit=" return checkedStudent()" class="border border-primary p-4" action="Student.php" method="POST">

                            <div class="form-group row">
                                <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" name="idStd" id="idStd" placeholder="Mã số học sinh">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="idClass" class="col-3 col-form-label">Mã lớp học</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" name="idClass" id="idClass" placeholder="Mã lớp học">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" name="fullName" id="fullName" placeholder="Họ và tên">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-3"><label>Giới tính</label></div>
                                <div class="col-8">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gender-male" name="gender-male">
                                        <label class="form-check-label" for="gridCheck1">
                                            Nam
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                                <div class="col-8">
                                    <input type="date" class="form-control" id="birthday" name="birthday" placeholder="Ngày sinh">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" name="placeOfBirth" id="placeOfBirth" placeholder="Nơi sinh">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                                <div class="col-8">
                                    <input type="tel" class="form-control" name="familyPhone" id="familyPhone" placeholder="Số điện thoại gia đình">
                                </div>
                            </div>

                            <div class="form-group row mb-1">
                                <div class="col text-center">
                                    <button name="createStudent" type="submit" class="btn btn-success">Thêm học sinh</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <div class="col-8 mx-auto bg-white rounded shadow">
                <div class="row flex-row d-flex py-3 justify-content-between">
                    <select class="form-control col-2 mx-3" name="classroom" id="classroom">
                        <?php
                        require '../Class/Classroom.php';
                        $classroomList = (new Classroom())->getAllClassroom();
                        foreach ($classroomList as $class) {
                            echo "<option value='$class[idClass]'>$class[idClass]</option>";
                        }
                        ?>
                    </select>
                    <input id="inputSearch" class="form-control col-6 px-3 mx-3" type="search" placeholder="Tìm kiếm mã học sinh" aria-label="Search">

                    <button id="btn-add-student" class="btn btn-success  col-2 px-3 mx-3">Thêm học sinh</button>
                </div>

                <!-- Fixed header table-->
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead class="table-header">
                            <tr>
                                <th scope="col">Mã HS</th>
                                <th scope="col">Mã Lớp</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Ngày Sinh</th>
                                <th scope="col">Nơi Sinh</th>
                                <th scope="col">SĐT gia đình</th>
                                <th scope="col">Sửa / Xoá</th>
                            </tr>
                        </thead>
                        <tbody class="table-content" id="student-table">

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

    <script src="/Web2/App/Views/assets/js/Module/Student.js"></script>
    <script src="/Web2/App/Views/assets/js/Validation.js"></script>
</body>

</html>