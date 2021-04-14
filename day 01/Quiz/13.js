function wordslength(str){
    let array = str.split(" ")
    let panjang = ""
for(let i = 0; i < array.length; i++){
    if(panjang.length < array[i].length){
    panjang =array[i];
    }
    
}
console.log(panjang)
}
wordslength("aku suka bootcamp")
