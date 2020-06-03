<?php

class Semester extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllSemester()
    {
        return getTable($this->getConnection(),'semester');   
    }

    public function createSemester($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateSemester($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteSemester($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
