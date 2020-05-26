const studentMarkList = [
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: null,
        mark151: null,
        mark152: null,
        mark45: null,
        mark90: null,
        avg: null
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: null,
        mark151: null,
        mark152: null,
        mark45: null,
        mark90: null,
        avg: null
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: null,
        mark151: null,
        mark152: null,
        mark45: null,
        mark90: null,
        avg: null
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: null,
        mark151: null,
        mark152: null,
        mark45: null,
        mark90: null,
        avg: null
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: null,
        mark151: null,
        mark152: null,
        mark45: null,
        mark90: null,
        avg: null
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sang',
        mark1: 10,
        mark151: 5,
        mark152: 10,
        mark45: 10,
        mark90: 10,
        avg: null
    },
]

const renderStudentMark = (studentMark, index) => {
    return `<tr>
                <th scope="row">${index}</th>
                <td>${studentMark.id}</td>
                <td>${studentMark.fullName}</td>
                <td>${studentMark.mark1}</td>
                <td>${studentMark.mark151}</td>
                <td>${studentMark.mark152}</td>
                <td>${studentMark.mark45}</td>
                <td>${studentMark.mark90}</td>
                <td>${studentMark.avg = 
                    (studentMark.mark1 + studentMark.mark151 + studentMark.mark151)/3 * (30/100)
                    + (studentMark.mark45) * (20/100)
                    + (studentMark.mark90) * (50/100)
                }</td>                               
                <td>
                    <button onclick="editStudentMark(event)" class="btn btn-primary">Sửa</button>
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

const renderStudentMarkFormEdit = (studentMark) =>{
    return `    <div>
                    <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập điểm học sinh</h2>
                    <form class="" action="">

                        <div class="form-group row">
                            <label for="inputStudentId" class="col-3 col-form-label">Mã số học sinh</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputStudentId"
                                    placeholder="Mã số học sinh" value="${studentMark.id}" disabled>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputStudentName" class="col-3 col-form-label">Họ và tên</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputStudentName" placeholder="Họ và tên" value="${studentMark.fullName}" disabled>
                            </div>
                        </div>

                        <div class="border border-primary pt-4 px-4 mb-3">
                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="col-6 col-form-label d-inline">Điểm
                                        miệng</label>
                                    <div class="col-6 d-inline">
                                        <input type="number" class="form-control" id="mark1" placeholder="Điểm miệng" value="${studentMark.mark1}">
                                    </div>
                                </div>

                                <div class="col-6">

                                    <label class="col-6 col-form-label d-inline">Điểm
                                        15p1</label>
                                    <div class="col-6 d-inline">
                                        <input type="number" class="form-control" id="mark151"
                                            placeholder="Điểm 15 phút 1" value="${studentMark.mark151}">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="col-6 col-form-label d-inline">Điểm
                                        15p2</label>
                                    <div class="col-6 d-inline">
                                        <input type="number" class="form-control" id="mark152"
                                            placeholder="Điểm 15 phút 2" value="${studentMark.mark151}">
                                    </div>
                                </div>

                                <div class="col-6">

                                    <label class="col-6 col-form-label d-inline">Điểm giữa
                                        kỳ</label>
                                    <div class="col-6 d-inline">
                                        <input type="number" class="form-control" id="mark45"
                                            placeholder="Điểm giữa kỳ" value="${studentMark.mark45}">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="col-6 col-form-label d-inline">Điểm cuối
                                        kỳ</label>
                                    <div class="col-6 d-inline">
                                        <input type="number" class="form-control" id="mark90"
                                            placeholder="Điểm cuối kỳ" value="${studentMark.mark90}">
                                    </div>
                                </div>

                                <div class="col-6">


                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-1">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-success">Sửa điểm</button>
                            </div>
                        </div>

                    </form>
                </div>`
}

const renderStudentMarkFormEnter = () => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập điểm học sinh</h2>
                <form class="" action="">

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

                    <div class="border border-primary pt-4 px-4 mb-3">
                        <div class="form-group row">
                            <div class="col-6">
                                <label class="col-6 col-form-label d-inline">Điểm
                                    miệng</label>
                                <div class="col-6 d-inline">
                                    <input type="number" class="form-control" id="mark1" placeholder="Điểm miệng">
                                </div>
                            </div>

                            <div class="col-6">

                                <label class="col-6 col-form-label d-inline">Điểm
                                    15p1</label>
                                <div class="col-6 d-inline">
                                    <input type="number" class="form-control" id="mark151"
                                        placeholder="Điểm 15 phút 1">
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-6">
                                <label class="col-6 col-form-label d-inline">Điểm
                                    15p2</label>
                                <div class="col-6 d-inline">
                                    <input type="number" class="form-control" id="mark152"
                                        placeholder="Điểm 15 phút 2">
                                </div>
                            </div>

                            <div class="col-6">

                                <label class="col-6 col-form-label d-inline">Điểm giữa
                                    kỳ</label>
                                <div class="col-6 d-inline">
                                    <input type="number" class="form-control" id="mark45"
                                        placeholder="Điểm giữa kỳ">
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-6">
                                <label class="col-6 col-form-label d-inline">Điểm cuối
                                    kỳ</label>
                                <div class="col-6 d-inline">
                                    <input type="number" class="form-control" id="mark90"
                                        placeholder="Điểm cuối kỳ">
                                </div>
                            </div>

                            <div class="col-6">


                            </div>
                        </div>
                    </div>

                    <div class="form-group row mb-1">
                        <div class="col-sm-10">
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
        mark151: row[4].textContent,
        mark152: row[5].textContent,
        mark45: row[6].textContent,
        mark90: row[7].textContent,
        agv: row[8].textContent
    }
    
    document.getElementById('form-std-mark').innerHTML = renderStudentMarkFormEdit(studentMark)
    
}


document.getElementById('btn-enter-mark').addEventListener('click', () => {
    document.getElementById('form-std-mark').innerHTML = renderStudentMarkFormEnter();
})

document.getElementById('student-table').innerHTML = studentMarkListHTML(studentMarkList)