//regular function
function say (){
    return "hello gaez"
}

console.log (say());

// function expression

const fnc_exp = function (value){
    return value;
}

console.log(fnc_exp);

//function expression with name
const fnc_expn = function joo(value){
    return value;
}
console.log(fnc_expn)

//arrow function
const arrow =(param)=>{
    return "arrow" +param;
}

console.log("value : "+arrow(12));

// genap ganjil
const gage = (param) =>{
    if(param %2 === 0 ){
        return gage
    }else {
        return gage
    }
}

console.log("apakah parameter genap "+ gage (2));

