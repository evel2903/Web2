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

    public function createClassroom($idClass, $fullName, $grade)
    {
        $sql = "INSERT INTO `classroom`(`idClass`, `fullName`, `grade`) VALUES ('$idClass', '$fullName', '$grade')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateClassroom($idClass, $fullName, $grade)
    {
        $sql = "UPDATE `classroom` SET `fullName`='$fullName',`grade`='$grade' WHERE `idClass`='$idClass'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteClassroom($idClass)
    {
        $sql = "DELETE FROM `classroom` WHERE `classroom`.`idClass` = '$idClass'";
        return $this->query($this->getConnection(), $sql);
    }

}
