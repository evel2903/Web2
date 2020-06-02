const renderStudentMark = (studentMark, index) => {
    return `<tr>
                <th scope="row">${index}</th>
                <td>${studentMark.idStd}</td>
                <td>${studentMark.fullName}</td>
                <td>${studentMark.mark1}</td>
                <td>${studentMark.mark15}</td>
                <td>${studentMark.mark45}</td>
                <td>${studentMark.mark90}</td>
                <td>${studentMark.avg = 
                    (studentMark.mark1 + studentMark.mark15)/2 * (20/100)
                    + (studentMark.mark45) * (30/100)
                    + (studentMark.mark90) * (50/100)
                }</td>                               
                <td>
                    <button onclick="editStudentMark(event)" class="btn btn-primary" data-toggle="modal"
                        data-target="#exampleModalCenter">
                        Nhập
                    </button>
                </td>
            </tr>`
}

const renderStudentMarkList = (studentMarkList) => {
    return studentMarkList.map(
        (studentMark, index) => {
            return renderStudentMark(studentMark,index)
        }
    )
}

const studentMarkListHTML = (studentMarkList) =>{
    return renderStudentMarkList(studentMarkList).join('')
}

const renderStudentMarkFormEdit = (studentMark) => {
    return `<div>
        <form class="" action="" method="">

            <div class="form-group row">
                <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                <div class="col-8">
                    <input type="text" class="form-control" id="inputStudentId"
                        placeholder="Mã số học sinh" value="${studentMark.idStd}" disabled>
                </div>
            </div>

            <div class="form-group row">
                <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                <div class="col-8">
                    <input type="text" class="form-control" id="inputStudentName"
                        placeholder="Họ và tên" value="${studentMark.fullName}" disabled>
                </div>
            </div>

            <div class="py-5 px-4">
                <div class="form-group row">
                    <div class="col-6">
                        <label>Điểm miệng</label>
                        <input type="number" class="form-control" id="mark1" placeholder="Điểm miệng" value="${studentMark.mark1}">
                    </div>

                    <div class="col-6">

                        <label>Điểm 15p</label>
                        <input type="number" class="form-control" id="mark151"
                                placeholder="Điểm 15 phút" value="${studentMark.mark15}">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-6">

                        <label>Điểm 45p</label>
                        <input type="number" class="form-control" id="mark45"
                                placeholder="Điểm giữa kỳ" value="${studentMark.mark45}">
                    </div>
                    <div class="col-6">
                        <label>Điểm thi</label>
                        <input type="number" class="form-control" id="mark90"
                                placeholder="Điểm thi cuối kỳ" value="${studentMark.mark90}">
                    </div>
                </div>


            </div>

            <div class="form-group row">
                <div class="col text-center">
                    <button type="submit" class="btn btn-success">Nhập điểm</button>
                </div>
            </div>

        </form>
    </div>`
}


const editStudentMark = (event) => {
    let row = event.target.parentElement.parentElement.children

    let studentMark = {
        id: row[1].textContent,
        fullName: row[2].textContent,
        mark1: row[3].textContent,
        mark15: row[4].textContent,
        mark45: row[5].textContent,
        mark90: row[6].textContent,
        agv: row[7].textContent
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

axios.get('/Web2/Backend/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('mark-table').innerHTML = studentMarkListHTML([...response.data.studentMarkList])
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });