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
			<form onsubmit="return checkedLogin()" action="index.php" method="POST" style="padding-top: 32px;">
				<div class="form-group text-center"><img class="img-fluid" style="width: 100px;" src="/Web2/App/Views/assets/img/default.png"></div>
				<div class="form-group d-flex justify-content-center">
					<span id="showError" class="text-danger">
						<?php
						require '../App/Connection/Connect.php';
						require '../App/Class/User.php';

						if (isset($_POST['Submit'])) {
							$username = $_POST['txtUser'];
							$password = $_POST['txtPass'];

							$result = (new User())->checkedUser($username, $password);

							if (count($result) == 0) {
								echo 'Sai tên đăng nhập hoặc mật khẩu';
							} else {
								header('location: /Web2/App/views/Student.php');
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
	<script>
		const checkedLogin = () => {
			let username = document.getElementById('txtUser').value;
			let password = document.getElementById('txtPass').value;
			if (username.length === 0 || password.length === 0) {
				document.getElementById('showError').innerHTML = 'Nhập thiếu thông tin đăng nhập'
				return false;
			}
			return true;
		}
	</script>
	<script src="/Web2/App/Vendors/js/jquery.min.js"></script>
	<script src="/Web2/App/Vendors/bootstrap/js/bootstrap.min.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

</body>

</html>