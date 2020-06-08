<?php

class Mark extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllMark()
    {
        return $this->getTable($this->getConnection(),'mark');   
    }

    public function createMark($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateMark($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteMark($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
