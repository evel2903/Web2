<?php
require '../Connection/Connect.php';
require '../Class/Student.php';
require '../Class/Teacher.php';
require '../Class/Subject.php';
require '../Class/Classroom.php';
require '../Class/Semester.php';
require '../Class/Mark.php';
require '../Class/Assignment.php';
require '../Class/User.php';

$connect = (new Connect())->getConnection();


//get all Data of table
function getTable($connect, $tableName)
{
    $table_connect = mysqli_query($connect, "SELECT * FROM $tableName");
    $table = array();
    while ($row = mysqli_fetch_assoc($table_connect)) {
        # code...
        $table[] = $row;
    }
    return  $table;
}

$allData = new \stdClass; //fixed  'Creating default object from empty value'

//Học sinh
$allData->studentList = (new Student())->getAllStudent();
//Giáo viên
$allData->teacherList = (new Teacher())->getAllTeacher();
//Môn học
$allData->subjectList = (new Subject())->getAllSubject();
//Lớp học
$allData->classroomList = (new Classroom())->getAllClassroom();
//Học kỳ
$allData->semesterList = (new Semester())->getAllSemester();
//Điểm số
$allData->studentMarkList = (new Mark())->getAllMark();
//Phân công giảng dạy
$allData->assignmentList = (new Assignment())->getAllAssignment();
//User
$allData->userList = getTable($connect, 'user');

 echo json_encode($allData);

