<?php
require '../Connection/Connect.php';
require '../Class/User.php';

$username = $_POST['txtUser'];
$password = $_POST['txtPass'];

$result = (new User())->checkedUser($username, $password);

if (count($result) == 0) {
    header('location: /Web2/FrontEnd/Page/Login/');
} else {
    header('location: /Web2/FrontEnd/Page/Index/'); 
}
?>