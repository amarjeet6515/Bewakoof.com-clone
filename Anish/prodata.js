var data = JSON.parse(localStorage.getItem("bewakoof_single_product")) || {};
console.log(data);


var img1 = document.getElementById("main_img_1").src = data.image;
document.getElementById("muliple_img1").src = data.image_1;
document.getElementById("muliple_img2").src = data.image_2;
document.getElementById("muliple_img3").src = data.image_3;
document.getElementById("muliple_img4").src = data.image_4;
document.getElementById("product_name_main").innerText = data.name;
document.getElementById("product_new_price_main").innerText = data.mrp;
document.getElementById("product_original_price_main").innerText = data.price;
document.getElementById("product_discount_percentage_main").innerText = data.discount+"% OFF";




document.getElementById("muliple_img1").addEventListener("click", () => {
  var img1 = document.getElementById("main_img_1");
  img1.src = data.image_1;
  img1.style.height = "560px";
  img1.style.width = "420px";


})
document.getElementById("muliple_img2").addEventListener("click", () => {
  document.getElementById("main_img_1").src = data.image_2;
})
document.getElementById("muliple_img3").addEventListener("click", () => {
  document.getElementById("main_img_1").src = data.image_3;
})
document.getElementById("muliple_img4").addEventListener("click", () => {
  document.getElementById("main_img_1").src = data.image_4;
})


var list1 = document.getElementById("list1");
list1.style.display = "none";
var button = document.getElementById("bt1");
button.addEventListener("click", (event) => {
  if (list1.style.display == "none") {
    list1.style.display = "block";
  }
  else {
    list1.style.display = "none";
  }
})

var list2 = document.getElementById("list2");
list2.style.display = "none";
var button = document.getElementById("bt2");
button.addEventListener("click", (event) => {
  if (list2.style.display == "none") {
    list2.style.display = "block";
  }
  else {
    list2.style.display = "none";
  }
})

var list3 = document.getElementById("list3");
list3.style.display = "none";
var button = document.getElementById("bt3");
button.addEventListener("click", (event) => {
  if (list3.style.display == "none") {
    list3.style.display = "block";
  }
  else {
    list3.style.display = "none";
  }
})
var CartItemsArray=JSON.parse(localStorage.getItem("bewakoof_cart")) || [];
console.log(CartItemsArray);

function storeDataToCart() {
  CartItemsArray.push(data);
  localStorage.setItem("bewakoof_cart", JSON.stringify(CartItemsArray));
  document.getElementById("btn1").textContent = "ADDED TO BAG";
  document.getElementById("btn1").setAttribute("id","toCheck");
  // document.getElementById("btn1").style.backgroundColor="yellow";
}
// document.getElementById("btn1").addEventListener("click", goToCart);

// function goToCart() {
//   console.log("hello")
//   window.location.href = "cartpage.html";
// }

var WishItemsArray=JSON.parse(localStorage.getItem("bewakoof_wishlist_product")) || [];
function storeToCart(){
  WishItemsArray.push(data);
  localStorage.setItem("bewakoof_wishlist_product", JSON.stringify(WishItemsArray));
  document.getElementById("btn2").textContent="WISHLISTED"
  document.getElementById("btn2").setAttribute("id","toCheck2");

  // window.location.reload;
}

