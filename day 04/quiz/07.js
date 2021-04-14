const employees = require("../dataquiz/emplyee")

function totalemployeeByDepartment(employees){
    let arr = []
    let arr1 = []
    for (let i = 0; i < employees.length; i++) {
    arr = employees.filter(x => x.department_id === i) //hasilnya bentuk arr karena declared di baris 4
    if(arr.length>0) arr1.push(["Pada department " + i,"terdapat "+ arr.length + " Pegawai"]) //kalo abis if cuma satu perintah gk perlu pake kurawa 
    
    }
    return arr1
}
console.log(totalemployeeByDepartment(employees))