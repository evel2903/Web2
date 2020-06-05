//render => table
const renderAssignment = (assignment, index) => {
    return `<tr>
                <th scope="row">${index + 1}</th>
                <td>${assignment.idAssignment}</td>
                <td>${assignment.idSubject}</td>
                <td>${assignment.idTeacher}</td>
                <td>${assignment.idClass}</td>
                <td>${assignment.idSem}</td>
                <td>
                    <button onclick="editAssignment(event)" class="btn btn-primary" data-toggle="modal"
                        data-target="#exampleModalCenter">
                        Sửa
                     </button>
                    <button onclick="delAssignment(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editAssignment = (event) => {
    let row = event.target.parentElement.parentElement.children

    let assignment = {
        idAssignment: row[1].textContent,
        idSubject: row[2].textContent,
        idTeacher: row[3].textContent,
        idClass: row[4].textContent,
        idSem: row[5].textContent,
    }
    document.getElementById('form-assignment-info').innerHTML = renderEditAssignmentForm(assignment)
}

const delAssignment = (event) => {
    let row = event.target.parentElement.parentElement
    document.getElementById('assignment-table').removeChild(row)

}

const renderListAssignment = (assignmentList) => {
    return assignmentList.map(
        (assignment, index) => {
            return renderAssignment(assignment, index);
        }
    )
}

const assignmentHTML = (assignmentList) => {
    return renderListAssignment(assignmentList).join('');
};

const searchAssignment = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("assignment-table");
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

const renderAddAssignmentForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin phân công</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã phân công</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId" placeholder="Mã phân công">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" placeholder="Mã môn học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Mã giáo viên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Mã giáo viên">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Mã lớp học">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Mã học kỳ">
                        </div>
                    </div>


                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm phân công</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditAssignmentForm = (assignment) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin phân công</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã phân công</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId" placeholder="Mã phân công" value="${assignment.idAssignment}" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" placeholder="Mã môn học" value="${assignment.idSubject}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Mã giáo viên</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Mã giáo viên" value="${assignment.idTeacher}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Mã lớp học" value="${assignment.idClass}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Mã học kỳ" value="${assignment.idSem}">
                        </div>
                    </div>


                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm phân công</button>
                        </div>
                    </div>

                </form>
            </div>`
}



document.getElementById('btn-add-assignment').addEventListener('click', () => {
    document.getElementById('form-assignment-info').innerHTML = renderAddAssignmentForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchAssignment)
//render table student
axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('assignment-table').innerHTML = assignmentHTML([...response.data.assignmentList]);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });