var data = JSON.parse(localStorage.getItem("bewakoof_single_product")) || {};



      document.getElementById("main_img_1").src=data.image;
      document.getElementById("muliple_img1").src=data.image_1;
      document.getElementById("muliple_img2").src=data.image_2;
      document.getElementById("muliple_img3").src=data.image_3;
      document.getElementById("muliple_img4").src=data.image_4;
      document.getElementById("product_name_main").innerText=data.name;
      document.getElementById("product_new_price_main").innerText=data.mrp;
      document.getElementById("product_original_price_main").innerText =data.price;
      document.getElementById("product_discount_percentage_main").innerText=data.discount;




document.getElementById("muliple_img1").addEventListener("click", ()=>{
    document.getElementById("main_img_1").src = data.image_1;
  })
  document.getElementById("muliple_img2").addEventListener("click", ()=>{
    document.getElementById("main_img_1").src = data.image_2;
  })
  document.getElementById("muliple_img3").addEventListener("click", ()=>{
    document.getElementById("main_img_1").src = data.image_3;
  })
  document.getElementById("muliple_img4").addEventListener("click", ()=>{
    document.getElementById("main_img_1").src = data.image_4;
  })

