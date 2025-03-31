function sum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "du lieu ko hop le";
    }
    let sum = a + b;
    return sum;
}

let result = sum(2, 6); 
console.log(result); 


