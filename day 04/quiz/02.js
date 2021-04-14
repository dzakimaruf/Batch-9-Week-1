const employees = require("../dataquiz/emplyee")

function searchEmployee(employees,min,max){
    return employees.filter(x => x.salary >= min && x.salary<= max)
}
console.log(searchEmployee(employees,2400,4800))