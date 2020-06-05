<?php

class Subject extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllSubject()
    {
        return getTable($this->getConnection(),'subject');   
    }

    public function createSubject($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateSubject($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteSubject($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
