//store the products array in localstorage as "data"

document.querySelector("#product_form").addEventListener("submit",myfunction);
var data1 = JSON.parse(localStorage.getItem("data"))||[];


function myfunction(event){
    event.preventDefault(event);
   
    var brand = document.querySelector("#product_brand").value
    var name = document.querySelector("#product_name").value
    var price = document.querySelector("#product_price").value
    var image = document.querySelector("#product_image").value
 
    var obj1={
        brand:brand,
        name:name,
        price:price,
        image:image,
    }
    data1.push(obj1);
    localStorage.setItem("data",JSON.stringify(data1));
    

}