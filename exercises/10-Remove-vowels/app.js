// Your code goes here
const rapid = (s) => {
    let t = "";
    for (let c of s) {
        const chr = c.toUpperCase();
        if (chr === 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U') {
            continue;
        }
        t += chr;
    }
    return t;
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
