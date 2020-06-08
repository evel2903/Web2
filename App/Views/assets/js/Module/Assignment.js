//render => table
const renderAssignment = (assignment, index) => {
    return `<tr>
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
        idAssignment: row[0].textContent,
        idSubject: row[1].textContent,
        idTeacher: row[2].textContent,
        idClass: row[3].textContent,
        idSem: row[4].textContent,
    }

    let form_assignment = document.getElementById('form-assignment').children

    form_assignment[0].children[0].value = assignment.idAssignment

    for(let op of form_assignment[1].children[1].children){
        if(op.value === assignment.idSubject){
            op.selected = true
        }  
        else{
            op.selected = false
        }
    }

    for(let op of form_assignment[2].children[1].children){
        if(op.value === assignment.idTeacher){
            op.selected = true
        }  
        else{
            op.selected = false
        }    
    }

    for(let op of form_assignment[3].children[1].children){
        if(op.value === assignment.idClass){
            op.selected = true
        } 
        else{
            op.selected = false
        }    
    }

    for(let op of form_assignment[4].children[1].children){
        if(op.value === assignment.idSem){
            op.selected = true
        }  
        else{
            op.selected = false
        }   
    }

    let btnSubmit = document.getElementById('btnSubmit')
    btnSubmit.innerHTML = `Sửa phân công`
    btnSubmit.setAttribute('name', 'updateAssignment')
    btnSubmit.setAttribute('class', 'btn btn-primary')
    
}

const delAssignment = (event) => {
    let row = event.target.parentElement.parentElement
    document.getElementById('assignment-table').removeChild(row)
    axios.post('/Web2/App/Views/Assignment.php', {
        idAssignment: row.children[0].textContent,
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


document.getElementById('btn-add-assignment').addEventListener('click', () => {
    let btnSubmit = document.getElementById('btnSubmit')
    btnSubmit.innerHTML = `Thêm phân công`
    btnSubmit.setAttribute('name', 'createAssignment')
    btnSubmit.setAttribute('class', 'btn btn-success');
})

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
        id = row[i].children[2];
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