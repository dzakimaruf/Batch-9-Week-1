const employees = require("../dataquiz/emplyee")

function totalSalaryAllEmployee(employees){
    return employees.reduce((x,y)=> x + parseInt(y.salary),0)
    /* let s;
    let total = 0
    for (let i = 0; i < employees.length; i++) {
         s = parseInt(employees[i].salary)
        total+= s//total sama dengan total + s
    }
    return total*/
}
console.log(totalSalaryAllEmployee(employees))

