<?php

class Teacher extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllTeacher()
    {
        return $this->getTable($this->getConnection(),'teacher');   
    }

    public function createTeacher($idTeacher, $idSubject, $fullName, $address, $phoneNumber)
    {
        $sql = "INSERT INTO `teacher`(`idTeacher`, `idSubject`, `fullName`, `address`, `phoneNumber`) 
            VALUES ('$idTeacher', '$idSubject', '$fullName', '$address', '$phoneNumber')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateTeacher($idTeacher, $idSubject, $fullName, $address, $phoneNumber)
    {
        $sql = "UPDATE `teacher` 
            SET `idSubject`='$idSubject',
                `fullName`='$fullName',`address`='$address',
                `phoneNumber`='$phoneNumber'
            WHERE `idTeacher`='$idTeacher'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteTeacher($idTeacher)
    {
        $sql = "DELETE FROM `teacher` 
            WHERE `teacher`.`idTeacher` = '$idTeacher'";
        return $this->query($this->getConnection(), $sql);
    }

}
