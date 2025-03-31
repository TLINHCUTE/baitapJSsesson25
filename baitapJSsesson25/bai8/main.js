function isStrongPassword(password) {
    if (password.length < 8){
        return "mk it nhat 8 ky tu! moi nhap lai";
    }
    let chuHoa = false;
    let chuThuong = false;
    let num = false;
    for (let i in password){
        let char = password[i];
        if(char >= 'A' && char <= 'Z'){
            chuHoa = true;
        }
        if(char >= 'a' && char <= 'z'){
            chuThuong = true;
        }
        if(char >='0' && char <='9'){
            num = true;
        }
        if(chuHoa && chuThuong && num){
            return true;
        }
    }
    return false;
}
let password = prompt("nhap mat khau de kiem tra: ");
if(isStrongPassword(password)){
    alert("mk manh");
} else {
    alert("mk yeu! vui long nhap lai");
}