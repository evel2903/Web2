//render => table
const renderSemester= (semester, index) => {
    return `<tr>
                <td>${semester.idSem}</td>
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
        idSem: row[0].textContent,
        fullName:row[1].textContent,
        coefficient: row[2].textContent,
        schoolYear: row[3].textContent,
    }
    document.getElementById('form-semester-info').innerHTML = renderEditSemesterForm(subject)
}

const delSemester = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('semester-table').removeChild(row)
    axios.post('/Web2/App/Views/Semester.php', {
        idSem: row.children[0].textContent,
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

const renderAddSemesterForm = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học kỳ</h2>
                <form class="border border-primary p-4" action="Semester.php" method="POST">

                    <div class="form-group row">
                        <label for="idSem" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="idSem" name="idSem" placeholder="Mã học kỳ">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Tên học kỳ">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="coefficient" class="col-3 col-form-label">Hệ số</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="coefficient" name="coefficient" placeholder="Hệ số">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="schoolYear" class="col-3 col-form-label">Năm học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="schoolYear" name="schoolYear" placeholder="Năm học">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="createSemester" class="btn btn-success">Thêm học kỳ</button>
                        </div>
                    </div>

                </form>
            </div>`
}

const renderEditSemesterForm = (semester) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin học kỳ</h2>
                <form class="border border-primary p-4" action="Semester.php" method="POST">

                    <div class="form-group row d-none">
                        <label for="idSem" class="col-3 col-form-label">Mã học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="idSem" name="idSem"
                                placeholder="Mã học kỳ" value="${semester.idSem}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="fullName" class="col-3 col-form-label">Tên học kỳ</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Tên học kỳ" value="${semester.fullName}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="coefficient" class="col-3 col-form-label">Hệ số</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="coefficient" name="coefficient"  placeholder="Hệ số" value="${semester.coefficient}">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="schoolYear" class="col-3 col-form-label">Năm học</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="schoolYear" name="schoolYear" placeholder="Năm học" value="${semester.schoolYear}">
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" name="updateSemester" class="btn btn-primary">Sửa học kỳ</button>
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

axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('semester-table').innerHTML = semesterHTML([...response.data.semesterList]);
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });