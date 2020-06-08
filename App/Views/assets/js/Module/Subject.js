//render => table
const renderTeacher= (subject, index) => {
    return `<tr>
                <td>${subject.idSubject}</td>
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
        idSubject: row[0].textContent,
        fullName:row[1].textContent,
        lesson: row[2].textContent,
        coefficient:row[3].textContent,
    }
    document.getElementById('form-subject-info').innerHTML = renderEditSubjectForm(subject)
}

const delSubject = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('subject-table').removeChild(row)
    axios.post('/Web2/App/Views/Subjects.php', {
        idSubject: row.children[0].textContent,
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
                <form class="border border-primary p-4" action="Subjects.php" method="POST">

                    <div class="form-group row">
                        <label for="idSubject" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="idSubject" name="idSubject" placeholder="Mã môn học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Tên môn học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="lesson" class="col-3 col-form-label">Số tiết</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="lesson" name="lesson" placeholder="Số tiết">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="coefficient" class="col-3 col-form-label">Hệ số</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="coefficient" name="coefficient" placeholder="Hệ số">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="createSubject" class="btn btn-success">Thêm môn học</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditSubjectForm = (subject) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin môn học</h2>
                <form class="border border-primary p-4" action="Subjects.php" method="POST">

                    <div class="form-group row d-none">
                        <label for="idSubject" class="col-3 col-form-label">Mã môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId"
                                placeholder="Mã môn học" name="idSubject" value="${subject.idSubject}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên môn học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Tên môn học" value="${subject.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="lesson" class="col-3 col-form-label">Số tiết</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="lesson" name="lesson" placeholder="Số tiết" value="${subject.lesson}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="coefficient" class="col-3 col-form-label">Hệ số</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="coefficient" name="coefficient" placeholder="Hệ số" value="${subject.coefficient}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="updateSubject" class="btn btn-primary">Sửa môn học</button>
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

axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('subject-table').innerHTML = subjectHTML([...response.data.subjectList]);
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });