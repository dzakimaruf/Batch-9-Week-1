function ge(n){
let s1 = n.split("")
let bantuan = "";
for (let i = 0; i <= n; i++){
    if(parseInt(s1[i])%2 === 0){
        bantuan = bantuan + s1[i] + " ";
       }   
    }return bantuan;
}
console.log(ge("2345678"));