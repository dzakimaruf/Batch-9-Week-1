const employees = require("../dataquiz/emplyee")

function totalSalaryByDepartment(employees,departmentId){
    let dep = employees.filter(x=>x.department_id==departmentId)
    return dep.reduce((x,y)=> x + parseInt(y.salary),0)
}
console.log(totalSalaryByDepartment(employees,11))