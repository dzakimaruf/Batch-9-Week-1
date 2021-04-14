function factorial(n){
    if (n > 0 && n <= 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

function factorial1(n){
    for (let i = n; i > 1; i--) {
        n = n*i;
    {
}
    return n   
    }
}console.log(factorial1(5));