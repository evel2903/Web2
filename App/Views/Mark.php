<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Quản lý điểm</title>
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

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Điểm học sinh</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="edit-std-mark">
                    <div>
                        <form class="" action="">

                            <div class="form-group row">
                                <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputStudentId"
                                        placeholder="Mã số học sinh">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputStudentName"
                                        placeholder="Họ và tên">
                                </div>
                            </div>

                            <div class="py-5 px-4">
                                <div class="form-group row">
                                    <div class="col-6">
                                        <label>Điểm miệng</label>
                                        <input type="number" class="form-control" id="mark1" placeholder="Điểm miệng">
                                    </div>

                                    <div class="col-6">

                                        <label>Điểm 15p</label>
                                        <input type="number" class="form-control" id="mark151"
                                            placeholder="Điểm 15 phút">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-6">

                                        <label>Điểm 45p</label>
                                        <input type="number" class="form-control" id="mark45"
                                            placeholder="Điểm giữa kỳ">
                                    </div>
                                    <div class="col-6">
                                        <label>Điểm thi</label>
                                        <input type="number" class="form-control" id="mark90"
                                            placeholder="Điểm thi cuối kỳ">
                                    </div>
                                </div>


                            </div>

                            <div class="form-group row">
                                <div class="col text-center">
                                    <button type="submit" class="btn btn-success">Nhập điểm</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="container-fluid py-4">
        <div class="row pt-0" id="option">
            <form class="col-9" action="" method="post">
                <div class="form-group row">
                    <div class="form-group col-2">
                        <label for="classroom">Lớp học</label>
                        <select class="form-control" name="classroom" id="classroom">

                        </select>
                    </div>
                    <div class="form-group col-2">
                        <label for="semester">Học kỳ</label>
                        <select class="form-control" name="semester" id="semester">

                        </select>
                    </div>
                    <div class="form-group col-2">
                        <label for="subjects">Môn học</label>
                        <select class="form-control" name="subjects" id="subjects">

                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-12 mx-auto bg-white rounded shadow">
                <div class="row flex-row d-flex py-3 justify-content-between">
                    <input id="inputSearch" class="form-control w-25 px-3 mx-3" type="search"
                        placeholder="Tìm kiếm mã môn học" aria-label="Search">

                </div>

                <!-- Fixed header table-->
                <div class="table-responsive">
                    <table class="table table-fixed">
                        <thead class="table-header">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã học sinh</th>
                                <th scope="col">Tên học sinh</th>
                                <th scope="col">Điểm miệng</th>
                                <th scope="col">Điểm 15p</th>
                                <th scope="col">Điểm 45p</th>
                                <th scope="col">Điểm thi</th>
                                <th scope="col">Điểm tổng kết</th>
                                <th scope="col">Nhập điểm</th>
                            </tr>
                        </thead>
                        <tbody class="table-content" id="mark-table">
                            <tr>
                                <th scope="row">1</th>
                                <td>123456</td>
                                <td>Lý Xuân Sang</td>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>
                                    <button onclick="editStudentMark(event)" class="btn btn-primary" data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                        Nhập
                                    </button>
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


    <script src="/Web2/App/Views/assets/js/Module/Mark.js"></script>
</body>

</html>