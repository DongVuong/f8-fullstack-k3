// # Bài 1: Hoán vị 2 số
//Input: Cho trước 2 số a, b
//Output: Thực hiện hoán vị 2 số không dùng biến trung gian
console.log(`Bai 1`);

var a = 10;
var b = 5;
console.log(`gia tri truoc khi hoan vi: a = ${a}, b= ${b}`);

a = a + b;
b = a - b;
a = a - b;
console.log(`gia tri sau khi hoan vi: a = ${a}, b= ${b}`);

// # Bài 2: Thực hiện phép toán
// Viết chương trình tính toán biểu thức sau
// S = 10 + 20 + 5^10 / 2
console.log(`Bai 2`);

S = 10 + 20 + 5 ** 10 / 2;
console.log(S);

//# Bài 3: Tìm số lớn nhất
//Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau

//Input:

//Cho trước 3 số a, b, c

//Output:

//Tìm số lớn nhất trong 3 số và hiển thị kết quả
console.log(`Bai 3`);
var a = "2";
var b = "8";
var c = "10";
a = +a;
b = +b;
c = +c;
if (a == b) {
  if (b >= c) {
    console.log(`so lon nhat la ${a}`);
  } else {
    console.log(`so lon nhat la ${c}`);
  }
} else if (a < b) {
  if (b >= c) {
    console.log(`so lon nhat la ${b}`);
  } else {
    console.log(`so lon nhat la ${c}`);
  }
} else {
  if (a >= c) {
    console.log(`so lon nhat la ${a}`);
  } else {
    console.log(`so lon nhat la ${c}`);
  }
}

//# Bài 4: Kiểm tra số cùng dấu
//Input:

//Cho trước 2 số a, b

//Output:

//Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
console.log(`Bai 4`);
var a = 10;
var b = 5.5;
a = +a;
b = +b;
if (a != 0 && b != 0) {
  if (a * b > 0) {
    console.log(`2 so a va b cung dau`);
  } else {
    console.log(`2 so a va b khac dau`);
  }
} else {
  console.log(`khong the check`);
}
//# Bài 5: Sắp xếp 3 số
//Input:

//Cho trước 3 số a, b, c

//Output:

//Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
console.log(`Bai 5`);
var a = "10";
var b = "7";
var c = "8";
a = +a;
b = +b;
c = +c;
if (a > b) {
  w = a;
  a = b;
  b = w;
}
if (b > c) {
  w = b;
  b = c;
  c = w;
}
if (a > c) {
  w = a;
  a = c;
  c = w;
}
console.log(`day so sau khi duoc sap xep ${a}, ${b}, ${c}`);
