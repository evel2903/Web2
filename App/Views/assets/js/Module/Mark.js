const renderStudentMark = (studentMark) => {
    return `<tr>
                <td>${studentMark.idStd}</td>
                <td>${studentMark.fullName}</td>
                <td>${studentMark.idClass}</td>
                <td>${studentMark.idSem}</td>
                <td>${studentMark.idSubject}</td>
                <td>${studentMark.mark1}</td>
                <td>${studentMark.mark15}</td>
                <td>${studentMark.mark45}</td>
                <td>${studentMark.mark90}</td>
                <td>${studentMark.avg = (studentMark.mark1) *(10 / 100)
                                        + (studentMark.mark15) * (10 / 100)
                                        + (studentMark.mark45) * (30 / 100)
                                        + (studentMark.mark90) * (50 / 100)
        }</td>                               
                <td>
                    <button onclick="editStudentMark(event)"  class="btn btn-primary" data-toggle="modal"
                        data-target="#exampleModalCenter">
                        Nhập
                    </button>
                </td>
            </tr>`
}

const renderStudentMarkList = (studentMarkList) => {
    return studentMarkList.map(
        (studentMark, index) => {
            return renderStudentMark(studentMark, index)
        }
    )
}

const studentMarkListHTML = (studentMarkList) => {
    return renderStudentMarkList(studentMarkList).join('')
}

const renderStudentMarkFormEdit = (studentMark) => {
    return `                    <div>
    <form class="" action="" method="POST">

        <div class="form-group row">
            <label for="idStd" class="col-3 col-form-label">Mã số học sinh</label>
            <div class="col-8">
                <input type="text" class="form-control" id="idStd" name="idStd" placeholder="Mã số học sinh" value="${studentMark.idStd}">
            </div>
        </div>

        <div class="form-group row">
            <label for="fullName" class="col-3 col-form-label">Họ và tên</label>
            <div class="col-8">
                <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Họ và tên" value="${studentMark.fullName}">
            </div>
        </div>

        <div class="form-group row">
            <label for="idClass" class="col-3 col-form-label">Lớp học</label>
            <div class="col-8">
                <input type="text" class="form-control" id="idClass" name="idClass" placeholder="Lớp học" value="${studentMark.idClass}">
            </div>
        </div>

        <div class="form-group row">
            <label for="idSem" class="col-3 col-form-label">Học kỳ</label>
            <div class="col-8">
                <input type="text" class="form-control" id="idSem" name="idSem" placeholder="Học kỳ" value="${studentMark.idSem}">
            </div>
        </div>

        <div class="form-group row">
            <label for="idSubject" class="col-3 col-form-label">Môn học</label>
            <div class="col-8">
                <input type="text" class="form-control" id="idSubject" name="idSubject" placeholder="Môn học" value="${studentMark.idSubject}">
            </div>
        </div>

        <div class="py-5 px-4">
            <div class="form-group row">
                <div class="col-6">
                    <label>Điểm miệng</label>
                    <input type="number" class="form-control" name="mark1" id="mark1" placeholder="Điểm miệng" value="${studentMark.mark1}">
                </div>

                <div class="col-6">

                    <label>Điểm 15p</label>
                    <input type="number" class="form-control" name="mark15" id="mark15" placeholder="Điểm 15 phút" value="${studentMark.mark15}">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-6">

                    <label>Điểm 45p</label>
                    <input type="number" class="form-control" name="mark45" id="mark45" placeholder="Điểm giữa kỳ" value="${studentMark.mark45}">
                </div>
                <div class="col-6">
                    <label>Điểm thi</label>
                    <input type="number" class="form-control" name="mark90" id="mark90" placeholder="Điểm thi cuối kỳ" value="${studentMark.mark90}">
                </div>
            </div>


        </div>
        <div class="form-group row">
            <label for="avg" class="col-3 col-form-label">Điểm trung bình</label>
            <div class="col-8">
                <input type="text" class="form-control" id="avg" placeholder="Điểm trung bình" value="${studentMark.avg}">
            </div>
        </div>

        <div class="form-group row">
            <div class="col text-center">
                <button type="submit" name="createMark" class="mx-5 btn btn-success">Nhập điểm</button>
                <button type="submit" name="updateMark" class="mx-5 btn btn-primary">Sửa điểm</button>
            </div>
        </div>

    </form>
</div>`
}


const editStudentMark = (event) => {
    let row = event.target.parentElement.parentElement.children

    let studentMark = {
        idStd: row[0].textContent,
        fullName: row[1].textContent,
        idClass: row[2].textContent,
        idSem: row[3].textContent,
        idSubject: row[4].textContent,
        mark1: row[5].textContent,
        mark15: row[6].textContent,
        mark45: row[7].textContent,
        mark90: row[8].textContent,
        avg: row[9].textContent
    }

    document.getElementById('edit-std-mark').innerHTML = renderStudentMarkFormEdit(studentMark)
}
const searchMark = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("mark-table");
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
document.getElementById('inputSearch').addEventListener('keyup', searchMark)
let allMarkList = [];
axios.get('/Web2/App/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('mark-table').innerHTML = studentMarkListHTML([...response.data.studentMarkList])
        allMarkList = [...response.data.studentMarkList];


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

document.getElementById('filterListMark').addEventListener('click', () => {
    let filterMarkList = allMarkList.filter((mark) => {
        return mark.idClass == document.getElementById('classroom').value
        &&  mark.idSem == document.getElementById('semester').value
        &&  mark.idSubject == document.getElementById('subjects').value
    })
    console.log(filterMarkList);  

    document.getElementById('mark-table').innerHTML = studentMarkListHTML([...filterMarkList])
})