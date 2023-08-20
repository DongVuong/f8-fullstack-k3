//# Bài 1
//Lấy kết quả giao giữa 2 mảng

console.log("Bai tap 1");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var diff = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(diff);

//# Bài 2
//Làm phẳng array sau (Chuyển về mảng 1 chiều)
console.log("Bai tap 2");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(arr.flat(Infinity));
function concatArr(arr) {
  return arr.reduce(function (result, current) {
    if (Array.isArray(current)) {
      return result.concat(concatArr(current));
    } else {
      result.push(current);
      return result;
    }
  }, []);
}
console.log(concatArr(arr));
/*# Bài 3
Tách phần tử trong mảng theo đúng kiểu dữ liệu
*/
console.log("Bai tap 3");
var arr3 = [
  ["a", 1, true],
  ["b", 2, false],
];

const resultThree = function (arr) {
  if (Array.isArray(arr)) {
    var newArr3 = concatArr(arr);
    return newArr3.reduce(function (prev, element) {
      if (!Object.keys(prev).includes(typeof element)) {
        prev[typeof element] = [];
      }
      prev[typeof element].push(element);
      return prev;
    }, {});
  } else return `khong phai mang`;
};
console.log(resultThree(arr3));
/*# Bài 4
Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện
*/
