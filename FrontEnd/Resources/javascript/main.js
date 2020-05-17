import {
    studentHTML,
    renderAddStudentForm,
    renderEditStudentForm,
    renderDelStudentForm,
    searchStudent
} from './Module/Student.js'

const studentList = [
    {
        id: 1234,
        fullName: 'Ly Xuan Sg',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1235,
        fullName: 'Ly Xuan San',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1236,
        fullName: 'Ly Xuan ang',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1237,
        fullName: 'Ly Xuan Sag',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sg',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1235,
        fullName: 'Ly Xuan San',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1236,
        fullName: 'Ly Xuan ang',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1237,
        fullName: 'Ly Xuan Sag',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sg',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1235,
        fullName: 'Ly Xuan San',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1236,
        fullName: 'Ly Xuan ang',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1237,
        fullName: 'Ly Xuan Sag',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1234,
        fullName: 'Ly Xuan Sg',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1235,
        fullName: 'Ly Xuan San',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1236,
        fullName: 'Ly Xuan ang',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1237,
        fullName: 'Ly Xuan Sag',
        genderMale: true,
        birthday: '03/05/2000',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    },
    {
        id: 1237,
        fullName: 'Ly Gia Han',
        genderMale: false,
        birthday: '03/05/2018',
        placeOfBirth: 'Dong Nai',
        familyPhone: '0123456789'
    }

]

//render 

//render form 
let formStdInfo = document.getElementById('form-std-info')

document.getElementById('btn-add-student').addEventListener('click', () => {
    formStdInfo.innerHTML = renderAddStudentForm();
})

document.getElementById('btn-edit-student').addEventListener('click', () => {
    formStdInfo.innerHTML = renderEditStudentForm();
})

document.getElementById('btn-del-student').addEventListener('click', () => {
    formStdInfo.innerHTML = renderDelStudentForm();
})

//search student

document.getElementById('inputSearch').addEventListener('keyup', searchStudent)


//render table student
document.getElementById('student-table').innerHTML = studentHTML(studentList);

