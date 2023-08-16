/*
# Bài 01
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
*/
console.log("bai tap 1");
var numbers = [4, 9, 8, 1, 5, 6];
var resultMax = numbers.reduce(function (max, current) {
  return max < current ? current : max;
});
var positionMax = numbers.indexOf(resultMax) + 1;
console.log(`max la ${resultMax} tai vi tri ${positionMax}`);
var resultMin = numbers.reduce(function (min, current) {
  return min > current ? current : min;
});
var positionMin = numbers.indexOf(resultMin) + 1;
console.log(`min la ${resultMin} tai vi tri ${positionMin}`);
/*
# Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
*/
console.log("bai tap 2");
var numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr = numbersTwo.filter(function (number) {
  if (number >= 2 && number % 1 === 0) {
    for (i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
});
console.log(newArr);
if (newArr.length === 0) {
  console.log(`trong mang khong co so nguyen to`);
} else {
  var sum = newArr.reduce(function (total, current) {
    return total + current;
  }, 0);
  var average = sum / newArr.length;
  console.log(`trung binh cong cua day so nguyen to la ${average}`);
}
/*
# Bài 03
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
*/
console.log("bai tap 3");
var numbersThree = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var newArr = numbersThree.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(newArr);
/*
# Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Sắp xếp mảng theo thứ tự tăng dần

Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
*/
console.log("bai tap 4");
var numbersFour = [5, 1, 9, 8, 10];
var element = 4;
var resultFour = [];

var newArrFour = numbersFour.sort(function (a, b) {
  return a - b;
});
console.log(newArrFour);
if (element >= newArrFour[newArrFour.length - 1]) {
  newArrFour[newArrFour.length] = element;
} else {
  for (var i = 0; i < newArrFour.length; i++) {
    if (element <= newArrFour[i]) {
      newArrFour.splice(i, 0, element);
      break;
    }
  }
}
console.log(newArrFour);
