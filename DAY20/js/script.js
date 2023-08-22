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
var result3 = Object.values(resultThree(arr3));
console.log(result3);
/*# Bài 4
Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện
*/
console.log(`bai tap 4`);
var posts = [
  {
    title: "Tieu de bai viet 1",
    thumbnail:
      "https://fastly.picsum.photos/id/962/500/300.jpg?hmac=u0s-ZaVFueyCDUeuFxtPjwO7EmtjcCxcVGoZ6N7V9wU",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fuga excepturi iure fugiat aliquid quidem vero, quaerat corporis praesentium laborum molestiae, iste unde voluptatibus minus id adipisci accusamus ut! Adipisci eum facere officiis quidem quasi dolorem obcaecati cum sed repellat, perferendis ducimus ipsam dolorum atque fugit quod, omnis at praesentium?",
  },
  {
    title: "Tieu de bai viet 2",
    thumbnail:
      "https://fastly.picsum.photos/id/962/500/300.jpg?hmac=u0s-ZaVFueyCDUeuFxtPjwO7EmtjcCxcVGoZ6N7V9wU",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fuga excepturi iure fugiat aliquid quidem vero, quaerat corporis praesentium laborum molestiae, iste unde voluptatibus minus id adipisci accusamus ut! Adipisci eum facere officiis quidem quasi dolorem obcaecati cum sed repellat, perferendis ducimus ipsam dolorum atque fugit quod, omnis at praesentium?",
  },
  {
    title: "Tieu de bai viet 3",
    thumbnail:
      "https://fastly.picsum.photos/id/962/500/300.jpg?hmac=u0s-ZaVFueyCDUeuFxtPjwO7EmtjcCxcVGoZ6N7V9wU",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fuga excepturi iure fugiat aliquid quidem vero, quaerat corporis praesentium laborum molestiae, iste unde voluptatibus minus id adipisci accusamus ut! Adipisci eum facere officiis quidem quasi dolorem obcaecati cum sed repellat, perferendis ducimus ipsam dolorum atque fugit quod, omnis at praesentium?",
  },
  {
    title: "Tieu de bai viet 4",
    thumbnail:
      "https://fastly.picsum.photos/id/962/500/300.jpg?hmac=u0s-ZaVFueyCDUeuFxtPjwO7EmtjcCxcVGoZ6N7V9wU",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fuga excepturi iure fugiat aliquid quidem vero, quaerat corporis praesentium laborum molestiae, iste unde voluptatibus minus id adipisci accusamus ut! Adipisci eum facere officiis quidem quasi dolorem obcaecati cum sed repellat, perferendis ducimus ipsam dolorum atque fugit quod, omnis at praesentium?",
  },
];

var html = `<div class="content-wrap">
<!--content1-->
${posts
  .map(function (post, index) {
    return `<div class="post ${index % 2 === 0 ? "" : "post-right"}">
  <img
    src="${post.thumbnail}"
    alt=""
  />

  <div>
    <h2>${post.title}</h2>
    <p>
     ${post.excerpt}
    </p>
  </div>
</div>`;
  })
  .join("")}
<!--end content1-->
</div>`;
document.write(html);
