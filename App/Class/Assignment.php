<?php

class Assignment extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllAssignment()
    {
        return $this->getTable($this->getConnection(),'assignment');   
    }

    public function createAssignment($idSubject, $idTeacher, $idClass, $idSem)
    {
        $sql = "INSERT INTO `assignment`(`idSubject`, `idTeacher`, `idClass`, `idSem`) 
            VALUES ('$idSubject', '$idTeacher', '$idClass', '$idSem')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateAssignment($idAssignment, $idSubject, $idTeacher, $idClass, $idSem)
    {
        $sql = "UPDATE `assignment` SET `idSubject`='$idSubject',`idTeacher`='$idTeacher',`idClass`='$idClass',`idSem`='$idSem' 
            WHERE `idAssignment`='$idAssignment'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteAssignment($idAssignment)
    {
        $sql = "DELETE FROM `assignment` WHERE `assignment`.`idAssignment` = '$idAssignment'";
        return $this->query($this->getConnection(), $sql);
    }

}
