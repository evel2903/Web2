<?php
require '../Connection/Connect.php';

class Login extends Connect
{
    function getAllUser()
    {
        $connect = $this->getConnection();
        $sql = 'select * from user';
        $query = mysqli_query($connect, $sql);
        $result = array();
        if ($query) {
            while ($row = mysqli_fetch_assoc($query));
            $result[] = $row;
        }
        return $result;
    }
    function checkedUser($id, $pass)
    {
        $connect = $this->getConnection();
        $mysql = "select * from user where userId={$id} and password={$pass}";
        $query = mysqli_query($connect, $mysql);
        $result = array();
        if (mysqli_num_rows($query) > 0) {
            $row = mysqli_fetch_assoc($query);
            $result[] = $row;
        }
        return $result;
    }
}
