var adminAccount = {
    email : "admin@TS.co",
    password : "TS3546HL",
    username : "admin"
}
var json = JSON.stringify(adminAccount)
localStorage.setItem(adminAccount.email, json)



function sign_up(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username.includes(' ')) {
        alert('Tên người dùng không được chứa dấu cách');
        return
    }
    var user = {
        username: username,
        email: email,
        password: password,
    }
    localStorage.setItem("username", username)
    var json = JSON.stringify(user);
    localStorage.setItem(email, json)
    alert("Đăng kí thành công!, vui lòng đăng nhập để tiếp tục")
    window.location.href = "index.html"
}

function sign_in(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(email);
    var adminn = localStorage.getItem(adminAccount.email);
    var adminn_data = JSON.parse(adminn);
    var data = JSON.parse(user);
    if (user == null) {
        alert("Email hoặc mật khẩu sai, vui lòng thử lại")
    } else if (email == adminn_data.email && password == adminn_data.password) {
        alert("Xin chào ADMIN!")
        window.location.href = "../cuối khóa jsa admin/JHjhjgdjhb)&(^NJh757675.html"
    } else if (email == data.email && password == data.password) {
        localStorage.setItem("username", data.username)
        window.location.href = "../index.html"
    }
    else {
        alert("Email hoặc mật khẩu sai, vui lòng thử lại")
    }
}

