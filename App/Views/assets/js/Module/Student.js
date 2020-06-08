//render => table

const renderStudent = (student, index) => {
    return `<tr>
                <td>${student.idStd}</td>
                <td>${student.idClass}</td>
                <td>${student.fullName}</td>
                <td>${student.gender}</td>
                <td>${student.birthday}</td>
                <td>${student.placeOfBirth}</td>
                <td>${student.familyPhone}</td>
                <td>
                    <button onclick="editStudent(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delStudent(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editStudent = (event) => {
    let row = event.target.parentElement.parentElement.children

    let student = {
        idStd: row[0].textContent,
        idClass: row[1].textContent,
        fullName: row[2].textContent,
        gender: row[3].textContent,
        birthday: row[4].textContent,
        placeOfBirth: row[5].textContent,
        familyPhone: row[6].textContent,
    }
    document.getElementById('form-std-info').innerHTML = renderEditStudentForm(student)
}

const delStudent = (event) => {
    let row = event.target.parentElement.parentElement
    document.getElementById('student-table').removeChild(row)

    axios.post('/Web2/App/Views/Student.php', {
        idStd: row.children[0].textContent,
    })
        .then(function () {
            // handle success
            alert('Xóa thành công')
        })
        .catch(function () {
            // handle error
            alert('Xóa thất bại')
        });

}

const renderListStudent = (studentList) => {
    return studentList.map(
        (student, index) => {
            return renderStudent(student, index);
        }
    )
}

const studentHTML = (studentList) => {
    return renderListStudent(studentList).join('');
};

const selectClassroom = () => {

    let input, filter, table, row, id, getId;

    input = document.getElementById("classroom");
    filter = input.value;
    table = document.getElementById("student-table");
    row = table.getElementsByTagName("tr");

    for (let i = 0; i < row.length; i++) {
        id = row[i].children[1];
        if (id) {
            getId = id.textContent || id.innerText;
            if (getId.toUpperCase().indexOf(filter) > -1) {
                row[i].style.display = "";
            } else {
                row[i].style.display = "none";
            }
        }
    }

}

const searchStudent = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("student-table");
    row = table.getElementsByTagName("tr");

    for (let i = 0; i < row.length; i++) {
        id = row[i].children[0];
        if (id) {
            getId = id.textContent || id.innerText;
            if (getId.toUpperCase().indexOf(filter) > -1) {
                row[i].style.display = "";
            } else {
                row[i].style.display = "none";
            }
        }
    }
}


//select form

const renderAddStudentForm = () => {
    return `<div class="enter-student-information">
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học sinh</h2>
                <form class="border border-primary p-4" action="Student.php" method="POST">

                    <div class="form-group row">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="idStd" id="inputStudentId" placeholder="Mã số học sinh">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="idClass" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="idClass" id="idClass" placeholder="Mã số học sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="fullName" id="inputStudentName" placeholder="Họ và tên">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-3"><label>Giới tính</label></div>
                        <div class="col-8">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gender-male" name="gender-male">
                                <label class="form-check-label" for="gridCheck1">
                                    Nam
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                        <div class="col-8">
                            <input type="date" class="form-control" id="inputStudentBirthday" name="birthday" placeholder="Ngày sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="placeOfBirth" id="birthplace" placeholder="Nơi sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" name="familyPhone" id="telFamily" placeholder="Số điện thoại gia đình">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button name="createStudent" type="submit" class="btn btn-success">Thêm học sinh</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditStudentForm = (student) => {
    return `<div class="enter-student-information">
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học sinh</h2>
                <form class="border border-primary p-4" action="Student.php" method="POST">

                    <div class="form-group row d-none">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="idStd" id="inputStudentId" placeholder="Mã số học sinh" value="${student.idStd}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="idClass" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="idClass" id="idClass" placeholder="Mã lớp học" value="${student.idClass}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="fullName" id="inputStudentName" placeholder="Họ và tên" value="${student.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-3"><label>Giới tính</label></div>
                        <div class="col-8">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gender-male" name="gender-male" ${student.gender === 'Nam' ? 'checked' : ''}>
                                <label class="form-check-label" for="gridCheck1">
                                    Nam
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                        <div class="col-8">
                            <input type="date" class="form-control" id="inputStudentBirthday" name="birthday" placeholder="Ngày sinh" value="${student.birthday}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="placeOfBirth" id="birthplace" placeholder="Nơi sinh" value="${student.placeOfBirth}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" name="familyPhone" id="telFamily" placeholder="Số điện thoại gia đình" value="${student.familyPhone}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button name="updateStudent" type="submit" class="btn btn-primary">Sửa thông tin</button>
                        </div>
                    </div>

                </form>
            </div>`
}


let formStdInfo = document.getElementById('form-std-info')

document.getElementById('btn-add-student').addEventListener('click', () => {
    formStdInfo.innerHTML = renderAddStudentForm();
})

//search student
document.getElementById('inputSearch').addEventListener('keyup', searchStudent)
//select Classroom
document.getElementById('classroom').addEventListener('change', selectClassroom);
// //render table student

axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('student-table').innerHTML = studentHTML([...response.data.studentList]);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });