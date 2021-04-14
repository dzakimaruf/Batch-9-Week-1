for(let i = 0; i < 10; i++){
    console.log("i :"+i);
}

const s = "hello javascript";

for (let i = 0; i < s.length; i++){
    if(s[i] === "s"){
        console.log("found in :"+i);
        break;
    }
}

// while do
{let i = 0;
while(i<s.length){
    if (s[i]==="p"){
        console.log("found in :"+i);
    }
    i++;
}
}
// do while
let i = 0;
do {
    if (s[i]==="p"){
        console.log("found in :"+i);
    }
    i++;
} while (i < s.length);