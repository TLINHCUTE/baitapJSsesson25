function nho(arr) {
    if (!Array.isArray(arr)) {
        return "gia tri ko hop le"; 
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu"; 
    }
    return Math.min(...arr);
}

let input = [2,4,8,1,9]
let result = nho(input);
alert(`gia tri nho nhat trong mang la: ${result}`);
