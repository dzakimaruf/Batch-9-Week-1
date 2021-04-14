const employees = require("../dataquiz/emplyee")

function sortSalary(employees){
    return employees.sort((employeesX,employeesY)=>{ //parameter atas X, parameter bawah Y
        return employeesY.salary-employeesX.salary  //kalo mau nyari yang dari min-max parX-parY
    })
}
console.log(sortSalary(employees))