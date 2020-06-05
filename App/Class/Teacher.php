<?php

class Teacher extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllTeacher()
    {
        return getTable($this->getConnection(),'teacher');   
    }

    public function createTeacher($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateTeacher($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteTeacher($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
