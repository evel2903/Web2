<?php

class Semester extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllSemester()
    {
        return $this->getTable($this->getConnection(),'semester');   
    }

    public function createSemester($idSem, $fullName, $coefficient, $schoolYear)
    {
        $sql = "INSERT INTO `semester`(`idSem`, `fullName`, `coefficient`, `schoolYear`) 
            VALUES ('$idSem', '$fullName', '$coefficient', '$schoolYear')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateSemester($idSem, $fullName, $coefficient, $schoolYear)
    {
        $sql = "UPDATE `semester` 
            SET `fullName`='$fullName',`coefficient`='$coefficient',`schoolYear`='$schoolYear' WHERE `idSem`='$idSem'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteSemester($idSem)
    {
        $sql = "DELETE FROM `semester` WHERE `semester`.`idSem` = '$idSem'";
        return $this->query($this->getConnection(), $sql);
    }

}
