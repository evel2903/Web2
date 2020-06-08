<?php

class Subject extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllSubject()
    {
        return $this->getTable($this->getConnection(),'subject');   
    }

    public function createSubject($idSubject, $fullName, $lesson, $coefficient)
    {
        $sql = "INSERT INTO `subject`(`idSubject`, `fullName`, `lesson`, `coefficient`) 
            VALUES ('$idSubject', '$fullName', '$lesson', '$coefficient')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateSubject($idSubject, $fullName, $lesson, $coefficient)
    {
        $sql = "UPDATE `subject` SET`fullName`='$fullName',`lesson`='$lesson',`coefficient`='$coefficient' WHERE `idSubject`='$idSubject'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteSubject($idSubject)
    {
        $sql = "DELETE FROM `subject` WHERE `subject`.`idSubject` = '$idSubject'";
        return $this->query($this->getConnection(), $sql);
    }

}
