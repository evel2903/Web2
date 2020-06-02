//render => table
const renderUser = (User, index) => {
    return `<tr>
                <th scope="row">${index  + 1}</th>
                <td>${User.username}</td>
                <td>${User.level == 0 ? 'Quản trị viên' : 'Người dùng'}</td>
                <td>
                    <button onclick="editUser(event)" class="btn btn-primary">Sửa</button>
                    <button onclick="delUser(event)" class="btn btn-danger">Xoá</button>
                </td>
                
            </tr>`
}

//process student table
const editUser = (event) => {
    let row = event.target.parentElement.parentElement.children

    let user = {
        username: row[1].textContent,
        level:row[2].textContent === 'Quản trị viên' ? 0 : 1,
    }
    document.getElementById('form-user-info').innerHTML = renderEditUserForm(user)
}

const delUser = (event) =>{
    let row = event.target.parentElement.parentElement
    document.getElementById('user-table').removeChild(row)
    
}

const renderListUser = (userList) => {
    return userList.map(
        (user, index) => {
            return renderUser(user,index);
        }
    )
}

const userHTML = (userList) =>{
    return renderListUser(userList).join('');
};

const searchUser = () => {
    let input, filter, table, row, id, getId;

    input = document.getElementById("inputSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("user-table");
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

const renderAddUserForm = () => {
    return `<div>
            <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin người dùng</h2>
            <form class="border border-primary p-4" action="">

                <div class="form-group row">
                    <label for="inputTeacherId" class="col-3 col-form-label">Tên đằng nhập</label>
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputTeacherId" placeholder="Tên đằng nhập">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTeacherName" class="col-3 col-form-label">Mật khẩu</label>
                    <div class="col-8">
                        <input type="password" class="form-control" id="inputTeacherName" placeholder="Mật khẩu">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputTeacherIdMh" class="col-3 col-form-label">Mức truy cập</label>
                    <div class="col-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="level" id="level0" value="0"
                                checked>
                            <label class="form-check-label" for="inlineRadio1">Quản trị viên</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="level" id="level1" value="1">
                            <label class="form-check-label" for="inlineRadio2">Người dùng</label>
                        </div>
                    </div>
                </div>



                <div class="form-group row mb-1">
                    <div class="col text-center">
                        <button type="submit" class="btn btn-success">Thêm người dùng</button>
                    </div>
                </div>

            </form>
        </div>`
}

const renderEditUserForm = (user) => {
    return `<div>
                <h2 class="border-bottom border-primary my-5 pb-5 text-center">Nhập thông tin người dùng</h2>
                <form class="border border-primary p-4" action="">

                    <div class="form-group row">
                        <label for="inputTeacherId" class="col-3 col-form-label">Tên đằng nhập</label>
                        <div class="col-8">
                            <input type="text" class="form-control" id="inputTeacherId" placeholder="Tên đằng nhập" value="${user.username}" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherName" class="col-3 col-form-label">Mật khẩu</label>
                        <div class="col-8">
                            <input type="password" class="form-control" id="inputTeacherName" placeholder="Mật khẩu">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputTeacherIdMh" class="col-3 col-form-label">Mức truy cập</label>
                        <div class="col-8">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="level" id="level0" value="0" ${user.level === 0 && 'checked'}>
                                <label class="form-check-label" for="inlineRadio1">Quản trị viên</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="level" id="level1" value="1" ${user.level === 1 && 'checked'}>
                                <label class="form-check-label" for="inlineRadio2">Người dùng</label>
                            </div>
                        </div>
                    </div>



                    <div class="form-group row mb-1">
                        <div class="col text-center">
                            <button type="submit" class="btn btn-success">Thêm người dùng</button>
                        </div>
                    </div>

                </form>
            </div>`
}



document.getElementById('btn-add-user').addEventListener('click', () => {
    document.getElementById('form-user-info').innerHTML = renderAddUserForm();
})


//search student
document.getElementById('inputSearch').addEventListener('keyup', searchUser)
//render table student

axios.get('/Web2/Backend/Data/Data.php')
    .then(function (response) {
        // handle success
        document.getElementById('user-table').innerHTML = userHTML([...response.data.userList]);    
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });