const employees = require("../dataquiz/emplyee")

function searchEmployee(employees,prefix,prefix1){
    return employees.filter(x => x.first_name.startsWith(prefix))
}
console.log(searchEmployee(employees,"D"))