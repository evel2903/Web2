//render => table
const renderSemester= (semester, index) => {
    return `<tr>
                <th scope="row">${index  + 1}</th>
                <td>${semester.id}</td>
                <td>${semester.fullName}</td>
                <td>${semester.coefficient}</td>
                <td>${semester.schoolYear}</td>
                <td>
                    <button onclick="editSemester(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delSemester(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editSemester = (event) => {
    let row = event.target.parentElement.parentElement.children

    let subject = {
        id: row[1].textContent,
        fullName:row[2].textContent,
        coefficient: row[3].textContent,
        schoolYear: row[4].textContent,
    }
    document.getElementById('form-semester-info').innerHTML = renderEditSemesterForm(subject)
}

const delSemester = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('semester-table').removeChild(row)
    
}

const renderListSemester = (semesterList) => {
    return semesterList.map(
        (semester, index) => {
            return renderSemester(semester,index);
        }
    )
}

const semesterHTML = (semesterList) =>{
    return renderListSemester(semesterList).join('');
};

const searchSemester = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("semester-table");
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

const renderAddSemesterForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học kỳ</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId"
                                placeholder="Mã học kỳ">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Tên học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" placeholder="Tên học kỳ">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Số tiết</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Hệ số">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Năm học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Năm học">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm học kỳ</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditSemesterForm = (semester) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học kỳ</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId"
                                placeholder="Mã học kỳ" value="${semester.id}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Tên học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" placeholder="Tên học kỳ" value="${semester.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Số tiết</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Hệ số" value="${semester.coefficient}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Năm học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Năm học" value="${semester.schoolYear}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm học kỳ</button>
                        </div>
                    </div>

                </form>
            </div>`
}



document.getElementById('btn-add-semester').addEventListener('click', () => {
    document.getElementById('form-semester-info').innerHTML = renderAddSemesterForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchSemester)
//render table student
document.getElementById('semester-table').innerHTML = semesterHTML(semesterList);