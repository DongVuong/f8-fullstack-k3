// list
var carts = getLocalStorage() ? getLocalStorage() : [];
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("carts"));
}
function setLocalStorage() {
  localStorage.setItem("carts", JSON.stringify(carts));
}
var productData = [
  {
    product_id: 1,
    product_name: "Sản phẩm 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "Sản phẩm 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "Sản phẩm 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "Sản phẩm 4",
    product_price: 4000,
  },
];
var cartData = document.getElementById("cart-data");

//creat product list
productData.forEach(function (item) {
  var productItem = "<tbody><tr>";
  productItem += "<td>" + item.product_id + "</td>";
  productItem += "<td>" + item.product_name + "</td>";
  productItem += "<td>" + item.product_price + "</td>";
  productItem +=
    '<td><input type="number" id="quantity_' +
    item.product_id +
    '" value="1" style="width: 90%; display: block; margin: 0 auto;"><button type="button" style="width: 100%;" id="add_to_cart_' +
    item.product_id +
    '">Thêm vào giỏ</button></td>';
  productItem += "</tr></tbody>";
  document.querySelector("table").innerHTML += productItem;
});

//add to cart
var add_to_cart = document.querySelectorAll("h3 + table button");
var quantityProduct = document.querySelectorAll("h3 + table input");
// console.log(add_to_cart);
add_to_cart.forEach(function (btn, index) {
  var stt = index + 1;
  btn.addEventListener("click", function () {
    if (quantityProduct[index].value < 0) {
      quantityProduct[index].value = 1;
    }
    var existProduct = carts.find(function (item) {
      return item.product_id === stt;
    });
    if (existProduct) {
      existProduct.quantity =
        +existProduct.quantity + +quantityProduct[index].value;
      existProduct.total = existProduct.quantity * existProduct.price;
      renderCart();
    } else {
      var dataProduct = {
        product_id: stt,
        name: productData[index].product_name,
        price: productData[index].product_price,
        quantity: quantityProduct[index].value,
        total: productData[index].product_price * quantityProduct[index].value,
      };
      carts.push(dataProduct);
      renderCart();
    }
  });
  setLocalStorage();
  //   customBtn();
});

var cartData = document.getElementById("cart_data");
var tableCart = document.createElement("table");

var css = {
  cellpadding: "0",
  cellspacing: "0",
  width: "100%",
  border: "1",
  id: "cart_table",
  textAlign: "center",
};
Object.assign(tableCart.style, css);
var renderCart = function () {
  if (!carts.length) {
    cartData.innerHTML = "Giỏ hàng không có sản phẩm";
  } else {
    cartData.innerHTML = "";
    cartData.append(tableCart);
  }
  tableCart.innerHTML = ` <thead>
  <tr>
    <th width="5%">STT</th>
    <th>Tên sản phẩm</th>
    <th width="20%">Giá</th>
    <th width="20%">Số lượng</th>
    <th width="20%">Thành tiền</th>
    <th width="5%">Xoá</th>
  </tr>
</thead>`;
  carts.forEach(function (item, index) {
    var cartWrap = document.createElement("tbody");
    var cartItem = document.createElement("tr");
    cartWrap.append(cartItem);
    cartItem.innerHTML = `
      <td>${index + 1}</td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>
                <input type="number" class="quantity" data-id="${
                  item.product_id
                }" value="${item.quantity}" />
              </td>
              <td>${item.total}</td>
              <td><button type="button" class="delete-item">Xoá</button></td>`;
    tableCart.appendChild(cartWrap);
  });
  var total = document.createElement("tbody");
  total.innerHTML = `
  <tr>
    <td colspan="3">Tổng</td>
    <td>${carts.reduce(function (total, item) {
      return total + +item.quantity;
    }, 0)}</td>
    <td colspan="2">${carts.reduce(function (total, item) {
      return total + +item.total;
    }, 0)}</td>
  </tr>`;
  tableCart.appendChild(total);
  //xoa
  var deleteBtn = document.querySelectorAll(".delete-item");
  deleteBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      if (confirm("Xóa sản phẩm?") === true) {
        carts.splice(index, 1);
        setLocalStorage();
        renderCart();
        alert("Xóa sản phẩm thành công");
      }
    });
  });
};
