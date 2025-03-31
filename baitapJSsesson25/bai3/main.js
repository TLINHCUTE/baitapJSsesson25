function HTchan(arr) {
    if (!Array.isArray(arr)){
        return "du lieu ko hop le";
    }
    let sochan = [];
    for (let i in arr){
        if(typeof arr[i] === "number" && arr[i] % 2 === 0) {
            sochan.push(arr[i]);
        }
    }
    if (sochan.length === 0){
        alert("mang ko chua so chan");
    } else {
        alert(`cac so chan chua trong mang la: ${sochan.join(" ")}`);
    }
}
let input = [11,4,65,6];
HTchan(input);
