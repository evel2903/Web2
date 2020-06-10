<?php

class Mark extends Connect
{

    function query($connect, $sql)
    {
        return mysqli_query($connect, $sql);
    }
    public function getAllMark()
    {
        $sql = "SELECT
                    `student`.`idStd`,
                    `student`.`fullName`,
                    `student`.`idClass`,
                    `semester`.`idSem`,
                    `subject`.`idSubject`,
                    `mark`.`mark1`,
                    `mark`.`mark15`,
                    `mark`.`mark45`,
                    `mark`.`mark90`,
                    `mark`.`avg`   
                    FROM `mark` 
                    RIGHT JOIN `student` ON `mark`.`idStd` = `student`.`idStd`,
                    `subject`,
                    `semester`";
        $table_connect = mysqli_query($this->getConnection(), $sql);
        $table = array();
        while ($row = mysqli_fetch_assoc($table_connect)) {
            # code...
            $table[] = $row;
        }
        return  $table;   
    }

    public function getMark($idClass, $idSem, $idSubject)
    {
        $sql = "SELECT
                    `student`.`idStd`,
                    `student`.`fullName`,
                    `student`.`idClass`,
                    `semester`.`idSem`,
                    `subject`.`idSubject`,
                    `mark`.`mark1`,
                    `mark`.`mark15`,
                    `mark`.`mark45`,
                    `mark`.`mark90`,
                    `mark`.`avg`   
                    FROM `mark` 
                    RIGHT JOIN `student` ON `mark`.`idStd` = `student`.`idStd`,
                    `subject`,
                    `semester`
                    WHERE
                        `student`.`idClass` = '$idClass' AND
                        `semester`.`idSem` = '$idSem' AND
                        `subject`.`idSubject` = '$idSubject'";
        $table_connect = mysqli_query($this->getConnection(), $sql);
        $table = array();
        while ($row = mysqli_fetch_assoc($table_connect)) {
            # code...
            $table[] = $row;
        }
        return  $table;   
    }

    public function createMark($idStd, $idClass, $idSem, $idSubject, $mark1, $mark15, $mark45, $mark90)
    {
        $avg = ($mark1 * 10/100) 
                + ($mark15 * 10/100) 
                + ($mark45 * 30/100) 
                + ($mark90 * 50/100);
        $sql = "INSERT INTO `mark`(`idStd`, `idClass`, `idSem`, `idSubject`, `mark1`, `mark15`, `mark45`, `mark90`, `avg`) 
            VALUES ('$idStd', '$idClass', '$idSem', '$idSubject', '$mark1', '$mark15', '$mark45', '$mark90', '$avg')";
        return $this->query($this->getConnection(), $sql);
    }

    public function updateMark($idStd, $idClass, $idSem, $idSubject, $mark1, $mark15, $mark45, $mark90)
    {
        $avg = ($mark1 * 10/100) 
                + ($mark15 * 10/100) 
                + ($mark45 * 30/100) 
                + ($mark90 * 50/100);
        $sql = "UPDATE `mark` 
            SET `mark1` = '$mark1', `mark15` = '$mark15', `mark45` = '$mark45', `mark90` = '$mark90', `avg` = '$avg' 
            WHERE `mark`.`idStd` = '$idStd'
                AND `mark`.`idClass`='$idClass' 
                AND `mark`.`idSem`='$idSem'
                AND `mark`.`idSubject` = '$idSubject'";
        return $this->query($this->getConnection(), $sql);
    }

    public function deleteMark($username)
    {
        $sql = "";
        return $this->query($this->getConnection(), $sql);
    }

}
