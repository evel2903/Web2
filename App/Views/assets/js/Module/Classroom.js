//render => table
const renderClassroom= (classroom, index) => {
    return `<tr>
                <td>${classroom.idClass}</td>
                <td>${classroom.fullName}</td>
                <td>${classroom.grade}</td>
                <td>
                    <button onclick="editClassroom(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delClassroom(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editClassroom = (event) => {
    let row = event.target.parentElement.parentElement.children

    let subject = {
        idClass: row[0].textContent,
        fullName:row[1].textContent,
        grade: row[2].textContent,
    }
    document.getElementById('form-classroom-info').innerHTML = renderEditClassroomForm(subject)
}

const delClassroom = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('classroom-table').removeChild(row)
    axios.post('/Web2/App/Views/Classroom.php', {
        idClass: row.children[0].textContent,
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

const renderListClassroom = (classroomList) => {
    return classroomList.map(
        (classroom, index) => {
            return renderClassroom(classroom,index);
        }
    )
}

const classroomHTML = (classroomList) =>{
    return renderListClassroom(classroomList).join('');
};

const searchClassroom = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("classroom-table");
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

const renderAddClassroomForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin lớp học</h2>
                <form class="border border-primary p-4" action="Classroom.php" method="POST">

                    <div class="form-group row">
                        <label for="idClass" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="idClass" name="idClass" placeholder="Mã lớp học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Tên lớp học">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="grade" class="col-3 col-form-label">Khối</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="grade" name="grade" placeholder="Khối">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="createClassroom" class="btn btn-success">Thêm lớp học</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditClassroomForm = (classroom) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin lớp học</h2>
                <form class="border border-primary p-4" action="Classroom.php" method="POST">

                    <div class="form-group row d-none">
                        <label for="idClass" class="col-3 col-form-label">Mã lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="idClass"
                                placeholder="Mã lớp học" name="idClass" value="${classroom.idClass}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên lớp học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" placeholder="Tên lớp học" name="fullName" value="${classroom.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="grade" class="col-3 col-form-label">Khối</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="grade" placeholder="Khối" name="grade" value="${classroom.grade}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="updateClassroom" class="btn btn-primary">Sửa lớp học</button>
                        </div>
                    </div>

                </form>
            </div>`
}



document.getElementById('btn-add-classroom').addEventListener('click', () => {
    document.getElementById('form-classroom-info').innerHTML = renderAddClassroomForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchClassroom)
//render table student

axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('classroom-table').innerHTML = classroomHTML([...response.data.classroomList]);        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });