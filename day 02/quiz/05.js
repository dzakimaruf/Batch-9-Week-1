function sum(n){
let numbers = [1, 2, 3, 4, 5];
let hasil = "";
for (let i = 0; i < numbers.length; i++){
    if((numbers[i] + i) === n){
        hasil = numbers[i]  
        }return hasil
    }
}   
console.log(sum(9))