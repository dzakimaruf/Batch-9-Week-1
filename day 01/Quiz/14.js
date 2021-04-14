function segitiga(N) {
    let hasil = '';
    for (let i = 0; i < N; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));

function segitiga(panjang,atas) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));
