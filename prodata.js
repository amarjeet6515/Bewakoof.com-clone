var data = JSON.parse(localStorage.getItem("bewakoof_single_product")) || {};


displayItems();

function displayItems(){

      document.getElementById("main_img_1").value=data.image;
      document.getElementById("muliple_img1").value=data.image_1;
      document.getElementById("muliple_img2").value=data.image_2;
      document.getElementById("muliple_img3").value=data.image_3;
      document.getElementById("muliple_img4").value=data.image_4;
}



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

