/*
# Bài 1:
Yêu cầu: Viết hàm getError(field) có tham số truyền vào là field tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là lỗi đầu tiên tìm được(lỗi đầu tiên đúng) của 1 nhóm

Ví dụ:
getError('name') //Vui lòng nhập họ tên
getError('email') //Định dạng email không hợp lệ
*/
console.log(`Bai tap 1`);
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(field) {
  const element = errors[field];
  if (element) {
    var smallKeys = Object.keys(element);
    var result;
    smallKeys.length > 0
      ? (result = Object.values(element)[0])
      : (result = `khong co loi trong key nay`);
    return result;
  } else {
    return "key khong hop le";
  }
}
console.log(getError("name"));

/*
# Bài 2:
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.
*/
console.log(`Bai tap 2`);
var Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
const customers = [
  new Customer("Nguyễn Văn A", "11", "Ha Noi"),
  new Customer("Nguyễn Văn B", "2", "Hai Phong"),
  new Customer("Nguyễn Văn C", "12", "TP.HCM"),
];
console.log(customers);
function createCustomers(customers) {
  var newArr = customers.sort?.(function (a, b) {
    return a.age - b.age;
  });
  newArr = newArr.map(function (customer) {
    shortName = `${customer.name.split(" ")[0]} ${customer.name
      .split(" ")
      .slice(-1)}`;
    customer.shortName = shortName;
    return customer;
  });
  console.log(newArr);
}
const result = createCustomers(customers);

/*# Bài 3:
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

Tự động thêm role là user cho mỗi đối tượng.

Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
*/
console.log(`Bai tap 3`);
//ham tao
var User = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};
const data = [];
//function register
var handleRegister = function (name, password, email) {
  if (!name | !password | !email) {
    console.log(`thong tin khong day du khong the dang ki`);
    return null;
  } else {
    var user = new User(name, password, email);
    user.role = "user";
    if (data.length === 0) {
      data.push(user);
      console.log("dang ki thanh cong");
      return user;
    } else {
      var check = data.some(function (element) {
        return element["email"] === email;
      });
      if (check) {
        console.log(`email da ton tai`);
        return null;
      } else {
        data.push(user);
        return user;
      }
    }
  }
};
console.log(handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com"));
console.log(handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com"));
console.log(data);

//function login
function handleLogin(email, password) {
  var result = data.filter(function (user) {
    if (user["email"] === email && user["password"] === password) {
      return true;
    }
  });
  if (result.length === 0) {
    return `thong tin dang nhap khong hop le`;
  } else {
    return result;
  }
}
console.log(handleLogin("nguyenvanb@email.com", "1234567"));
