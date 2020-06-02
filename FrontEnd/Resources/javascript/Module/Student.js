//render => table

const renderStudent = (student, index) => {
    return `<tr>
                <th scope="row">${index + 1}</th>
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
        id: row[1].textContent,
        fullName: row[2].textContent,
        gender: row[4].textContent,
        birthday: row[5].textContent,
        placeOfBirth: row[6].textContent,
        familyPhone: row[7].textContent,
    }
    document.getElementById('form-std-info').innerHTML = renderEditStudentForm(student)
}

const delStudent = (event) => {
    let row = event.target.parentElement.parentElement
    document.getElementById('student-table').removeChild(row)

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

const searchStudent = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
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


//select form

const renderAddStudentForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học sinh</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentId"
                                placeholder="Mã số học sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentName" placeholder="Họ và tên">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-3"><label>Giới tính</label></div>
                        <div class="col-8">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gender-male">
                                <label class="form-check-label" for="gridCheck1">
                                    Nam
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                        <div class="col-8">
                            <input type="date" class="form-control" id="inputStudentBirthday"
                                placeholder="Ngày sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="birthplace" placeholder="Nơi sinh">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" id="telFamily"
                                placeholder="Số điện thoại gia đình">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm học sinh</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditStudentForm = (student) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Sửa thông tin học sinh</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentId"
                                placeholder="Mã số học sinh" value="${student.id}" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentName" placeholder="Họ và tên" value="${student.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-3"><label>Giới tính</label></div>
                        <div class="col-8">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gender-male" ${student.gender === 'Nam' ? 'checked' : ''}>
                                <label class="form-check-label" for="gridCheck1">
                                    Nam
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                        <div class="col-8">
                            <input type="date" class="form-control" id="inputStudentBirthday"
                                placeholder="Ngày sinh" value="${student.birthday}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="birthplace" placeholder="Nơi sinh" value="${student.placeOfBirth}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" id="telFamily"
                                placeholder="Số điện thoại gia đình" value="${student.familyPhone}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-primary">Sửa học sinh</button>
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
//render table student

axios.get('/Web2/Backend/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('student-table').innerHTML = studentHTML([...response.data.studentList]);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });