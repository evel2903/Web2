<?php

class Classroom extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllClassroom()
    {
        return $this->getTable($this->getConnection(),'classroom');   
    }

    public function createClassroom($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateClassroom($username, $password, $level)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteClassroom($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
