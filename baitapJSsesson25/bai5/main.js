function hienthisonguyenduong(arr) {
    let songuyen =[];
    for (let i in arr){
        if(Number.isInteger(arr[i]) && arr[i] > 0){
            songuyen.push(arr[i]);
        }
    }
    if(songuyen.length === 0){
        alert("ko co so nguyen trong mang");
    } else {
        alert(`so luong so nguyen trong mang la: ${songuyen.length}`);
    }
    
}
let input = [1.2,5.7,-8,6.8];
hienthisonguyenduong(input);