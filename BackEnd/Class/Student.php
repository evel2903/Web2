<?php

class Student extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }

    public function getAllStudent()
    {
        return getTable($this->getConnection(), 'student');
    }

    public function createStudent($idStd, $idClass, $fullName, $gender, $birthday, $placeOfBirth, $familyPhone)
    {
        $sql = "INSERT INTO `student`(`idStd`, `idClass`, `fullName`, `gender`, `birthday`, `placeOfBirth`, `familyPhone`) 
                VALUES ($idStd, $idClass, $fullName, $gender, $birthday, $placeOfBirth, $familyPhone)";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateStudent($idStd, $idClass, $fullName, $gender, $birthday, $placeOfBirth, $familyPhone)
    {
        $sql = "UPDATE `student` 
                SET `idClass`=$idClass,`fullName`=$fullName,`gender`=$gender,
                    `birthday`=$birthday,`placeOfBirth`=$placeOfBirth,`familyPhone`=$familyPhone 
                WHERE  `idStd`=$idStd";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteStudent($idStd)
    {
        $sql = "DELETE FROM `student` WHERE `student`.`idStd` = $idStd";
        return $this->query($this->getConnection(), $sql);
    }
}
