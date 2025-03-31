let users = [];
function isValidEmail(email) {//ham ktra email xem email co @ va .com hoac .vn 
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'));//endsWith dung de ktra cuoi co ket thuc bang ki tu .com hoac .vn ko
}
function registerEmail(email) {// ham ktra danh sach email da ton tai chx
    if (users.includes(email)) {
        alert("Tai khoan da ton tai!");
    } else {
        if (isValidEmail(email)) {
            users.push(email);
            localStorage.setItem("users", JSON.stringify(users))//chuyen doi mang nguoi dung thanh mot mang JSON bang JSON.stringify va luu chuoi do trong bo nho trinh duyet 
            alert("Dang ky thanh cong!");
        } else {
            alert("Email khong hop le. Vui long kiem tra lai!");
        }
    }
}
let email = prompt("Vui long nhap tai khoan email muon dang ky:");
registerEmail(email);
console.log("Danh sach tai khoan da dang ky:", users);
