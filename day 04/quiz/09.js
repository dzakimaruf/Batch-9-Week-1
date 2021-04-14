const employees = require("../dataquiz/emplyee")

function sortSalary(employees){
   let sorting = employees.sort((employeesX,employeesY)=>{ 
        return employeesX.salary - employeesY.salary  
    
    }
    )
    return ["upah pembantu " + sorting[0].salary, "upah majikan "+sorting[sorting.length-1].salary]
}
console.log(sortSalary(employees))