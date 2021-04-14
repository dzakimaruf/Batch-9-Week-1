const arrmat = [[4,6,8],[9,10,11],[12,14,16]];
console.log(arrmat);

function printMatrix(matrix){
    let out = " ";
    for(let row=0;row<matrix.length; row++){
        for(let column = 0; column<matrix.length; column++){
            out = out +" "+ matrix[row][column]
        }
        out +="\n";
    }
    return out
}
console.log(printMatrix(arrmat));