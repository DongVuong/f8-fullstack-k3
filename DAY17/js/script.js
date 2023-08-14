/*# Bài 1: Tính tiền taxi
Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/
console.log(`Bai tap 1`);
var n = 121;
console.log(`so km da di ${n}`);
var cost = 15000;
var total = function (n) {
  if (n > 0 && n <= 1) {
    return `so tien phai tra ${cost}`;
  } else if (n > 1 && n <= 5) {
    cost = cost + 13500 * (n - 1);
    return `so tien phai tra ${cost}`;
  } else if (n > 5 && n <= 120) {
    cost = cost + 13500 * 4 + 11000 * (n - 5);
    return `so tien phai tra ${cost}`;
  } else if (n > 120) {
    cost = (cost + 13500 * 4 + 11000 * (n - 5)) * 0.9;
    return `so tien phai tra ${cost}`;
  } else {
    return false;
  }
};
console.log(total(n));

/*
 Bài 2: Tính tiền điện
Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

Input: Số điện tiêu thụ hàng tháng

Output: Hiển thị số tiền phải đóng

Chi tiết giá điện theo bậc
*/

var total = function (number) {
  console.log(`Bai tap 2`);
  console.log(`so kWh su dung ${number}`);
  var priceOne = 1.678;
  var priceTwo = 1.734;
  var priceThree = 2.014;
  var priceFour = 2.536;
  var priceFive = 2.834;
  var priceSix = 2.927;
  var cost = 0;
  if (number > 0 && number <= 50) {
    cost = priceOne * number;
  } else if (number > 50 && number <= 100) {
    cost = priceOne * 50 + priceTwo * (number - 50);
  } else if (number > 100 && number <= 200) {
    cost = priceOne * 50 + priceTwo * 50 + priceThree * (number - 100);
  } else if (number > 200 && number <= 300) {
    cost =
      priceOne * 50 +
      priceTwo * 50 +
      priceThree * 100 +
      priceFour * (number - 200);
  } else if (number > 300 && number <= 400) {
    cost =
      priceOne * 50 +
      priceTwo * 50 +
      priceThree * 100 +
      priceFour * 100 +
      priceFive * (number - 300);
  } else if (number > 400) {
    cost =
      priceOne * 50 +
      priceTwo * 50 +
      priceThree * 100 +
      priceFour * 100 +
      priceFive * 100 +
      priceSix * (number - 400);
  } else {
    cost = 0;
  }
  console.log(`so tien phai tra ${cost}`);
};
total(500);
/*
# Bài 3: Tính giá trị biểu thức
Cho trước số nguyên n. Tính giá trị biểu thức sau

S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
*/

var mrX = function (x) {
  console.log(`Bai tap 3`);
  var getMsg = function (x) {
    if (x === 0) {
      return 0;
    }
    return x * (x + 1) + getMsg(x - 1);
  };
  console.log(`ket qua la ` + getMsg(x));
};
mrX(2);
/*
Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

Hàm có 1 tham số là số cần kiểm tra
Hàm có giá trị trả về
Gọi hàm trong câu điều kiện if else
*/
var check = function (w) {
  console.log(`Bai tap 4`);
  if (w == 2) {
    return ` day la so nguyen to`;
  } else if (w > 2 && w % 1 === 0) {
    for (i = 2; i <= Math.sqrt(w); i++) {
      if (w % i === 0) {
        return `so ${w} khong phai so nguyen to`;
      }
    }
    return ` so ${w} la so nguyen to`;
  } else {
    return `so ${w} khong phai so nguyen to`;
  }
};
console.log(check(10));
/*
# Bài 5: Vẽ tam giác số
Vẽ tam giác số sau với N dòng
*/

var matrix = function (e) {
  document.write(`Bai tap 5`);
  document.write("<br />");
  counter = 0;
  for (var i = 1; i <= e; i++) {
    for (var j = 1; j <= i; j++) {
      counter += 1;
      document.write(`${counter} `);
    }
    document.write("<br />");
  }
  document.write("<br />");
};
matrix(5);
/*
# Bài 6: Vẽ bàn cờ vua
Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua
*/
document.write(`Bai tap 6`);
document.write("<br />");
var n = 8;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n; j++) {
    if (i % 2 !== 0) {
      if (j % 2 === 0) {
        document.write("⬛");
      } else {
        document.write("⬜");
      }
    } else {
      if (j % 2 === 0) {
        document.write("⬜");
      } else {
        document.write("⬛");
      }
    }
  }
  document.write("<br />");
}
document.write("<br />");
/*
# Bài 7: Vẽ bảng cửu chương
Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10
*/
document.write(`Bai tap 7`);
document.write("<br />");
var n = 10;
var number = 1;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n; j++) {
    number = i * j;
    document.write(`&nbsp;&nbsp;${number}&nbsp;&nbsp;`);
  }
  document.write("<br />");
}
/*
# Bài 8: Tính giá trị biểu thức không dùng vòng lặp
Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
*/
var getY = function (n) {
  if (n === 1) {
    return 1;
  }
  return 1 / n + getY(n - 1);
};
console.log(`ket qua la ` + getY(3));
