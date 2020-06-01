//render => table
const renderTeacher= (subject, index) => {
    return `<tr>
                <th scope="row">${index  + 1}</th>
                <td>${subject.id}</td>
                <td>${subject.fullName}</td>
                <td>${subject.lesson}</td>
                <td>${subject.coefficient}</td>
                <td>
                    <button onclick="editSubject(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delSubject(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editSubject = (event) => {
    let row = event.target.parentElement.parentElement.children

    let subject = {
        id: row[1].textContent,
        fullName:row[2].textContent,
        lesson: row[3].textContent,
        coefficient:row[4].textContent,
    }
    document.getElementById('form-subject-info').innerHTML = renderEditSubjectForm(subject)
}

const delSubject = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('subject-table').removeChild(row)
    
}

const renderListSubject = (subjectList) => {
    return subjectList.map(
        (subject, index) => {
            return renderTeacher(subject,index);
        }
    )
}

const subjectHTML = (subjectList) =>{
    return renderListSubject(subjectList).join('');
};

const searchSubject = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("subject-table");
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

const renderAddSubjectForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin môn học</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId"
                                placeholder="Mã môn học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Tên môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherName" placeholder="Tên môn học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Số tiết</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Số tiết">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherArs" class="col-3 col-form-label">Hệ số</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherArs" placeholder="Hệ số">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm môn học</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditSubjectForm = (subject) => {
    return `<div>
    <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin môn học</h2>
    <form class="border border-primary p-4" action="">

        <div class="form-group row">
            <label for="inputTeacherId" class="col-3 col-form-label">Mã môn học</label>
            <div class="col-8">
                <input type="text" class="form-control" id="inputTeacherId"
                    placeholder="Mã môn học" value="${subject.id}" disabled>
            </div>
        </div>

        <div class="form-group row">
            <label for="inputTeacherName" class="col-3 col-form-label">Tên môn học</label>
            <div class="col-8">
                <input type="text" class="form-control" id="inputTeacherName" placeholder="Tên môn học" value="${subject.fullName}">
            </div>
        </div>

        <div class="form-group row">
            <label for="inputTeacherIdMh" class="col-3 col-form-label">Số tiết</label>
            <div class="col-8">
                <input type="text" class="form-control" id="inputTeacherIdMh" placeholder="Số tiết" value="${subject.lesson}">
            </div>
        </div>

        <div class="form-group row">
            <label for="inputTeacherArs" class="col-3 col-form-label">Hệ số</label>
            <div class="col-8">
                <input type="text" class="form-control" id="inputTeacherArs" placeholder="Hệ số" value="${subject.coefficient}">
            </div>
        </div>

        <div class="form-group row mb-1">
            <div class="col text-center">
                <button type="submit" class="btn btn-success">Sửa môn học</button>
            </div>
        </div>

    </form>
</div>`
}



document.getElementById('btn-add-subject').addEventListener('click', () => {
    document.getElementById('form-subject-info').innerHTML = renderAddSubjectForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchSubject)
//render table student
document.getElementById('subject-table').innerHTML = subjectHTML(subjectList);