function passwordValid(password) {
  if (password.length < 6) {
    return false;
  }
  let DownCase = false;
  let UpCase = false;
  let Digit = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "a" && char <= "z") {
      DownCase = true;
    }
    if (char >= "A" && char <= "Z") {
      UpCase = true;
    }
    if (char >= "0" && char <= "9") {
      Digit = true;
    }
  }
  return DownCase && UpCase && Digit;
}

//

function setpassword() {
  let password = prompt("Nhập vào mật khẩu muốn đặt!");
  if (passwordValid(password)) {
    alert(`Đặt mật khẩu thành công!`);
    return password;
  } else {
    alert(`Mật khẩu không hợp lệ!
      1.Có ít nhất 6 kí tự
      2.Có ít nhất 1 số
      3.Có ít nhất 1 kí tự viết hoa
      4.Có ít nhất 1 kí tự viết thường`);
    return setpassword();
  }
}

let passwordOK = setpassword();

let LoginCount = 0;
while (true) {
  let PassLogin = prompt(`Nhập mật khẩu để đăng nhập!`);
  if (PassLogin === passwordOK) {
    alert(`Đăng nhập thành công!`);
    break;
  } else {
    LoginCount++;
    if (LoginCount < 5) {
      alert(
        `Mật khẩu bạn nhập không chính xác! bạn còn ${5 - LoginCount} lượt thử!`
      );
    } else {
      alert(`Tài khoản của bạn đã bị khóa. Liên hệ Admin Trung Hiếu`);
      break;
    }
  }
}
