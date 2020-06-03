<?php

class Assignment extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllAssignment()
    {
        return getTable($this->getConnection(),'assignment');   
    }

    public function createAssignment($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateAssignment($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteAssignment($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
