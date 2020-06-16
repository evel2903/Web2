//login
const checkedLogin = () => {
    let username = document.getElementById('txtUser').value;
    let password = document.getElementById('txtPass').value;
    if (username.length === 0 || password.length === 0) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin đăng nhập</span>'
        return false;
    }
    return true;
};
//Teacher
const checkedTeacher = () => {
    let idSubject = document.getElementById('idSubject').value;
    let fullName = document.getElementById('fullName').value;
    let address = document.getElementById('address').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (
        idSubject.length === 0 ||
        fullName.length === 0 ||
        address.length === 0 ||
        phoneNumber.length === 0
    ) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin</span>'
        return false;
    }
    return true;

}
//Subject
const checkedSubject = () => {
    let idSubject = document.getElementById('idSubject').value;
    let fullName = document.getElementById('fullName').value;
    let lesson = document.getElementById('lesson').value;
    let coefficient = document.getElementById('coefficient').value;
    if (
        idSubject.length === 0 ||
        fullName.length === 0 ||
        lesson.length === 0 ||
        coefficient.length === 0
    ) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin</span>'
        return false;
    }
    return true;
}
//Student
const checkedStudent = () => {
    let idStd = document.getElementById('idStd').value;
    let idClass = document.getElementById('idClass').value;
    let fullName = document.getElementById('fullName').value;
    let birthday = document.getElementById('birthday').value;
    let placeOfBirth = document.getElementById('placeOfBirth').value;
    let familyPhone = document.getElementById('familyPhone').value;
    if (
        idStd.length === 0 ||
        idClass.length === 0 ||
        fullName.length === 0 ||
        birthday.length === 0 ||
        fullName.length === 0 ||
        placeOfBirth.length === 0 ||
        familyPhone.length === 0
    ) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin</span>'
        return false;
    }
    return true;
}
//Semester
const checkedSemester = () => {
    let idSem = document.getElementById('idSem').value;
    let fullName = document.getElementById('fullName').value;
    let coefficient = document.getElementById('coefficient').value;
    let schoolYear = document.getElementById('schoolYear').value;
    if (
        idSem.length === 0 ||
        fullName.length === 0 ||
        coefficient.length === 0 ||
        schoolYear.length === 0
    ) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin</span>'
        return false;
    }
    return true;
}
//Classroom
const checkedClassroom = () => {
    let idClass = document.getElementById('idClass').value;
    let fullName = document.getElementById('fullName').value;
    let grade = document.getElementById('grade').value;
    if (
        idClass.length === 0 ||
        fullName.length === 0 ||
        grade.length === 0
    ) {
        document.getElementById('showError').innerHTML = '<span class="text-warning border border-warning py-1 px-5">Nhập thiếu thông tin</span>'
        return false;
    }
    return true;
}
                                