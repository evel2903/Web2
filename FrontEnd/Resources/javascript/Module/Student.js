//render => table
const renderStudent = (student, index) => {
    return `<tr>
        <th scope="row">${index  + 1}</th>
        <td>${student.id}</td>
        <td>${student.fullName}</td>
        <td>${student.genderMale ? 'Nam' : 'Nữ'}</td>
        <td>${student.birthday}</td>
        <td>${student.placeOfBirth}</td>
        <td>${student.familyPhone}</td>
    </tr>`
}

const renderListStudent = (studentList) => {
    return studentList.map(
        (student, index) => {
            return renderStudent(student,index);
        }
    )
}

const studentHTML = (studentList) =>{
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
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-success">Thêm học sinh</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditStudentForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Sửa thông tin học sinh</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentId"
                                placeholder="Mã số học sinh" disabled>
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
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Sửa học sinh</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderDelStudentForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Xoá thông tin học sinh</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentId" placeholder="Mã số học sinh" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputStudentName" placeholder="Họ và tên" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-3"><label>Giới tính</label></div>
                        <div class="col-8">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gender-male" disabled>
                                <label class="form-check-label" for="gridCheck1">
                                    Nam
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputStudentBirthday" class="col-3 col-form-label">Ngày sinh</label>
                        <div class="col-8">
                            <input type="date" class="form-control" id="inputStudentBirthday" placeholder="Ngày sinh" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="birthplace" class="col-3 col-form-label">Nơi sinh</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="birthplace" placeholder="Nơi sinh" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="telFamily" class="col-3 col-form-label">SĐT gia đình</label>
                        <div class="col-8">
                            <input type="tel" class="form-control" id="telFamily" placeholder="Số điện thoại gia đình" disabled>
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-danger">Xoá thông tin</button>
                        </div>
                    </div>

                </form>
            </div>`
}
export {
    studentHTML,
    renderAddStudentForm,
    renderEditStudentForm, 
    renderDelStudentForm,
    searchStudent
}
