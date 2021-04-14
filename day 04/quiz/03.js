const employees = require("../dataquiz/emplyee")
console.log(employees[1]);

function hireRangeDate(employees,startDate,endDate){
    let hasil = employees.filter(employ=> employ.manager_id === null & employ.hire_date > startDate && employ.hire_date < endDate);
return hasil;
}
console.log(hireRangeDate(employees, "12-01-1993","12-12-1995"));
