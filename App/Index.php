<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<title>Login</title>
	<link rel="stylesheet" href="/Web2/App/Views/assets/css/-Login-form-Page-BS4-.css">
	<link rel="stylesheet" href="/Web2/App/Views/assets/css/login-form---Ambrodu-1.css">
	<link rel="stylesheet" href="/Web2/App/Views/assets/css/login-form---Ambrodu.css">
	<link rel="stylesheet" href="/Web2/App/Views/assets/css/Login-Form-Clean.css">
	<link rel="stylesheet" href="/Web2/App/Views/assets/css/styles.css">

	<link rel="stylesheet" href="/Web2/App/Vendors/bootstrap/css/bootstrap.min.css">
</head>

<body>
	<div class="body" style="padding-top: 150px;">
		<div class="border rounded shadow login-center">
			<form onsubmit="return checkedLogin" action="index.php" method="POST" style="padding-top: 32px;">
				<div class="form-group text-center"><img class="img-fluid" style="width: 100px;" src="/Web2/App/Views/assets/img/default.png"></div>
				<div class="form-group d-flex justify-content-center">
					<span id="showError" class="text-danger">
						<?php
						require '../App/Connection/Connect.php';
						require '../App/Class/User.php';

						if (isset($_POST['Submit'])) {
							$username = $_POST['txtUser'];
							$password = $_POST['txtPass'];

							if (!$username || !$password) {
								echo '<span id="showError" class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin đăng nhập</span>';
							} else {
								$result = (new User())->checkedUser($username, $password);

								if (count($result) == 0) {
									echo '<span id="showError" class="text-danger border border-danger py-1 px-5">Sai tên đăng nhập hoặc mật khẩu</span>';
								} else {
									session_start();
									$_SESSION['username'] = $username;
									$_SESSION['password'] = $password;
									header('location: /Web2/App/views/Student.php');
								}
							}
						}
						?>
					</span>
				</div>
				<div class="form-group d-flex justify-content-center">
					<input class="form-control" type="text" style="width: 250px;" name="txtUser" id="txtUser" placeholder="Username">
				</div>
				<div class="form-group d-flex justify-content-center">
					<input class="form-control" type="password" style="width: 250px;" name="txtPass" id="txtPass" placeholder="Password">
				</div>
				<div class="form-group d-flex justify-content-center">
					<button class="btn btn-dark" style="width: 150px;" name="Submit" type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
	<script src="/Web2/App/Vendors/js/jquery.min.js"></script>
	<script src="/Web2/App/Vendors/bootstrap/js/bootstrap.min.js"></script>
	<script src="/Web2/App/Vendors/js/axios.min.js"></script>

	<script src="/Web2/App/Views/assets/js/Validation.js"></script>
</body>

</html>