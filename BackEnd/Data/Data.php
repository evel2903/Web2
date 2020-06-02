<?php
require '../Connection/Connect.php';
$connect = (new Connect())->getConnection();

function getTable($connect, $table)
{
    $student_connect = mysqli_query($connect, "SELECT * FROM $table");
    $studentList = array();
    while ($row = mysqli_fetch_assoc($student_connect)) {
        # code...
        $studentList[] = $row;
    }
    return  $studentList;
}

$allData = new \stdClass; //fixed  'Creating default object from empty value'

//Học sinh
$allData->studentList = getTable($connect, 'student'); 
//Giáo viên
$allData->teacherList = getTable($connect, 'teacher');
//Môn học
$allData->subjectList = getTable($connect, 'subject');
//Lớp học
$allData->classroomList = getTable($connect, 'classroom');
//Học kỳ
$allData->semesterList = getTable($connect, 'semester');
//Điểm số
$allData->studentMarkList = getTable($connect, 'mark');
//Phân công giảng dạy
$allData->assignmentList = getTable($connect, 'assignment');
//User
$allData->userList = getTable($connect, 'user');

echo json_encode($allData);
