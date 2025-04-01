let users = [];

function registerEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    if (!emailRegex.test(email)) {
        console.log("Email khong hop le! Vui long nhap dia chi email dung.");
        return;
    }
    if (users.includes(email)) {
        console.log(`Tai khoan voi email "${email}" da ton tai!`);
        return;
    }
    users.push(email);
    console.log(`Dang ky thanh cong! Email "${email}" da duoc them vao.`);
}
registerEmail("test@example.com"); // Dang ky thanh cong
registerEmail("test@example.com"); // Tai khoan da ton tai
registerEmail("invalid-email");    // Email khong hop le

console.log(users);
