//render => table
const renderTeacher = (teacher, index) => {
    return `<tr>
                <td>${teacher.idTeacher}</td>
                <td>${teacher.fullName}</td>
                <td>${teacher.idSubject}</td>
                <td>${teacher.address}</td>
                <td>${teacher.phoneNumber}</td>
                <td>
                    <button onclick="editTeacher(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delTeacher(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editTeacher = (event) => {
    let row = event.target.parentElement.parentElement.children

    let teacher = {
        idTeacher: row[0].textContent,
        fullName: row[1].textContent,
        idSubject: row[2].textContent,
        address: row[3].textContent,
        phoneNumber: row[4].textContent,
    }
    document.getElementById('form-teacher-info').innerHTML = renderEditTeacherForm(teacher)
}

const delTeacher = (event) => {
    let row = event.target.parentElement.parentElement
    document.getElementById('teacher-table').removeChild(row)
    axios.post('/Web2/App/Views/Teacher.php', {
        idTeacher: row.children[0].textContent,
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

const renderListTeacher = (teacherList) => {
    return teacherList.map(
        (teacher, index) => {
            return renderTeacher(teacher, index);
        }
    )
}

const teacherHTML = (teacherList) => {
    return renderListTeacher(teacherList).join('');
};

const searchTeacher = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("teacher-table");
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

const renderAddTeacherForm = () => {
    return`<div>
            <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin giáo viên</h2>
            <form class="border border-primary p-4" action="Teacher.php" method="POST">

                <div class="form-group row">
                    <label for="inputTeacherId" class="col-3 col-form-label">Mã giáo viên</label>
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputTeacherId" name="idTeacher" placeholder="Mã giáo viên">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTeacherName" class="col-3 col-form-label">Họ và tên</label>
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputTeacherName" name="fullName" placeholder="Họ và tên">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTeacherIdMh" class="col-3 col-form-label">Mã môn học</label>
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputTeacherIdMh" name="idSubject" placeholder="Mã môn học">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTeacherArs" class="col-3 col-form-label">Địa chỉ</label>
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputTeacherArs" name="address" placeholder="Địa chỉ">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="tel" class="col-3 col-form-label">Số điện thoại</label>
                    <div class="col-8">
                        <input type="tel" class="form-control" id="tel" name="phoneNumber" placeholder="Số điện thoại">
                    </div>
                </div>

                <div class="form-group row mb-1">
                    <div class="col text-center">
                        <button type="submit" name="createTeacher" class="btn btn-success">Thêm giáo viên</button>
                    </div>
                </div>

            </form>
        </div>`
}

const renderEditTeacherForm = (teacher) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin giáo viên</h2>
                <form class="border border-primary p-4" action="Teacher.php" method="POST">

                    <div class="form-group row d-none">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã giáo viên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId" 
                            placeholder="Mã giáo viên" name="idTeacher" value="${teacher.idTeacher}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" name="fullName" placeholder="Họ và tên" value="${teacher.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" name="idSubject" placeholder="Mã môn học" value="${teacher.idSubject}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Địa chỉ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" name="address" placeholder="Địa chỉ" value="${teacher.address}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="tel" class="col-3 col-form-label">Số điện thoại</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" id="tel"
                                placeholder="Số điện thoại" name="phoneNumber" value="${teacher.phoneNumber}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="updateTeacher" class="btn btn-primary">Sửa giáo viên</button>
                        </div>
                    </div>

                </form>
            </div>`
}



document.getElementById('btn-add-teacher').addEventListener('click', () => {
    document.getElementById('form-teacher-info').innerHTML = renderAddTeacherForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchTeacher)
//render table student

axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('teacher-table').innerHTML = teacherHTML([...response.data.teacherList]);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });