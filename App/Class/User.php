<?php
class User extends Connect
{  
    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllUser()
    {
        return getTable($this->getConnection(),'user');
    }

    public function createUser($username, $password, $level)
    {
        $sql = "INSERT INTO `user` (`username`, `password`, `level`) VALUES ('$username', '$password', '$level')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateUser($username, $password, $level)
    {
        $sql = "UPDATE `user` SET `password`=' $password',`level`= $level WHERE `username`='$username'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteUser($username)
    {
        $sql = "DELETE FROM `user` WHERE `username` = '$username'";
        return $this->query($this->getConnection(), $sql);
    }

    public function checkedUser($username, $password)
    {
        $mysql = "select * from user where username='$username' and password='$password'";
        $query = mysqli_query($this->getConnection(), $mysql);
        $result = array();
        if (mysqli_num_rows($query) > 0) {
            $row = mysqli_fetch_assoc($query);
            $result[] = $row;
        }
        return $result;
    }
}
