<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Quản lý người dùng</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Advanced-NavBar---Multi-dropdown.css">
    <link rel="stylesheet" href="assets/css/Bootstrap-4---Table-Fixed-Header.css">
    <link rel="stylesheet" href="assets/css/gradient-navbar-1.css">
    <link rel="stylesheet" href="assets/css/gradient-navbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <header>
    <nav class="navbar navbar-light navbar-expand-md pulse" id="app-navbar">
            <div class="container-fluid"><a class="navbar-brand" href="/Web2/App/Views/Student.php"><i class="icon ion-ios-infinite"
                        id="brand-logo"></i></a><button data-toggle="collapse" class="navbar-toggler"
                    data-target="#navcol-2"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-2">
                    <ul class="nav navbar-nav mr-auto">

                        <li class="nav-item dropdown">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"
                                href="#">Quản
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
                        <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown"
                                aria-expanded="false" href="#">Cài đặt</a>
                            <div class="dropdown-menu pulse animated" role="menu"><a class="dropdown-item"
                                    role="presentation" href="/Web2/App/Views/Manage.php">Quản lý User</a><a class="dropdown-item"
                                    role="presentation" href="#">Đăng xuất</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container-fluid py-5">
        <div class="row">
            <div id="form-user-info" class=" col-4">
                <div>
                    <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin người dùng</h2>
                    <form class="border border-primary p-4" action="">

                        <div class="form-group row">
                            <label for="inputTeacherId" class="col-3 col-form-label">Tên đằng nhập</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputTeacherId" placeholder="Tên đằng nhập">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputTeacherName" class="col-3 col-form-label">Mật khẩu</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputTeacherName"
                                    placeholder="Mật khẩu">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputTeacherIdMh" class="col-3 col-form-label">Mức truy cập</label>
                            <div class="col-8">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="level" id="level0" value="0"
                                        checked>
                                    <label class="form-check-label" for="inlineRadio1">Quản trị viên</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="level" id="level1" value="1">
                                    <label class="form-check-label" for="inlineRadio2">Người dùng</label>
                                </div>
                            </div>
                        </div>



                        <div class="form-group row mb-1">
                            <div class="col text-center">
                                <button type="submit" class="btn btn-success">Thêm người dùng</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div class="col-8 mx-auto bg-white rounded shadow">
                <div class="row flex-row d-flex py-3 justify-content-between">
                    <input id="inputSearch" class="form-control w-25 px-3 mx-3" type="search"
                        placeholder="Tìm kiếm mã giáo viên" aria-label="Search">
                    <button id="btn-add-user" class="btn btn-success px-3 mx-3">Thêm người dùng</button>
                </div>

                <!-- Fixed header table-->
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead class="table-header">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên đăng nhập</th>
                                <th scope="col">Mức độ truy cập</th>
                                <th scope="col">Sửa / Xoá</th>
                            </tr>
                        </thead>
                        <tbody class="table-content" id="user-table">
                            <tr>
                                <th scope="row">1</th>
                                <td>10</td>
                                <td>10</td>
                                <td>
                                    <button onclick="editUser(event)" class="btn btn-primary">Sửa</button>
                                    <button onclick="delUser(event)" class="btn btn-danger">Xoá</button>
                                </td>
                            </tr>
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
                    <p class="copyright text-muted text-center my-3">Copyright © Your Company 2020 | Web Design by Evel
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/Advanced-NavBar---Multi-dropdown.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>


    <script src="/Web2/App/Views/assets/js/Module/Manage.js"></script>
</body>

</html>