function nguyento(number) {
    if (typeof number !== "number" || !Number.isInteger(number) || number <= 0) {
        return "du lieu ko hop le";
    }

    if (number < 2) {
        return "ko phai so nguyen to";
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "ko phai so nguyen to";
        } else {
            return "la so nguyen to";
        }
    }

}


let input = 6;
let check = nguyento(input);
console.log(`Kết quả kiểm tra số ${input}: ${check}`);
