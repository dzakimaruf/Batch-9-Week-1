//a.
let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
fruits.push('Anggur', 'Banana', 'Sirsak')
console.log(fruits)

//b.
fruits.pop();
console.log(fruits);

//c.
fruits.splice(2,1)
console.log(fruits);

//d.
fruits.splice(2,3)
console.log(fruits);

//e.
fruits.splice(2,0,'Rambutan', 'Bangkuang',)
console.log(fruits);

//f.
fruits.splice(4,1,"Nangka")
console.log(fruits);

//g.
{
let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
var all = fruits.concat(sayur);
console.log(all);


//h.
{
    fruits.reverse();
console.log(fruits)
}
}

//i.