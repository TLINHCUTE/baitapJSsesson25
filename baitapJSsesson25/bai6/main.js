function isPalindrome() {
    let chuoi = prompt("Nhap vao mot chuoi de kiem tra doi xung:");
    
    if (!chuoi) {
        alert("Ban chua nhap chuoi nao.");
        return;
    }
    let chuoiDaXuLy ='';
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] !== ' ') {
            chuoiDaXuLy += chuoi[i].toLowerCase();
        }
    }
    let laDoiXung = true;
    for (let i = 0; i < chuoiDaXuLy.length / 2; i++) {
        if (chuoiDaXuLy[i] !== chuoiDaXuLy[chuoiDaXuLy.length - 1 - i]) {
            laDoiXung = false;
            break;
        }
    }

    if (laDoiXung) {
        alert(`"${chuoi}" la chuoi doi xung.`);
    } else {
        alert(`"${chuoi}" khong phai la chuoi doi xung.`);
    }
}
isPalindrome();
