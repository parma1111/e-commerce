

// var productdata = JSON.parse(localStorage.getItem("data")) || [];

// productdata.map(function (ele,index){
//     var box = document.createElement("div")
//     box.style.border="1px solid black"
//     box.style.margin="10px 20px 0px 20px"

//     var p1 = document.createElement("p")
//     p1.innerText=ele.brand

//     var image1=document.createElement("img")
//     image1.style.width="100%"
//     image1.style.height="40%"
//     image1.src=ele.image

//     var p2=document.createElement("p")
//     p2.innerText=ele.name

//     var p3=document.createElement("p")
//     p3.innerText=ele.price
    
//     var box2=document.createElement("div")
//     box2.setAttribute("class","box2")

//     var btn1=document.createElement("button")
//     btn1.innerText="Add To Cart"

//     var btn2=document.createElement("button")
//     btn2.innerText="Remove"

//     btn2.addEventListener("class", function(){
//         remove(ele,index)
//     });
//     box2.append(btn1,btn2)
//     box.append(p2,image1,p3,p4,box2)
//     document.querySelector("#products_data").append(box)


// });

// function remove(ele,index){
//     data2.splice(index,1)
//     localStorage.setItem("data",JSON.stringify(data2))
//     window.location.reload()
// }

var productdata = JSON.parse(localStorage.getItem("data")) || []

    productdata.map(function(ele, index) {

        let div1 = document.createElement("div")
        div1.setAttribute("class", "div1")

        var img1 = document.createElement("img")
        img1.src = ele.image
        img1.style.width = "100%"
        img1.style.height = "200px"
        var p1 = document.createElement("p")
        p1.innerText = "brand"+"-"+ele.brand
       
        var p2 = document.createElement("p")
        p2.innerText = "name"+"-"+ele.name
        var p3 = document.createElement("p")
        p3.innerText = "$"+ele.price
      

        div2 = document.createElement("div")
        div2.setAttribute("class", "div2")

        btn1 = document.createElement("button")
        btn1.setAttribute("id", "remove_product")
        btn1.innerText = "Remove"
        btn1.style.border = "0px"
        btn1.style.backgroundColor = "rgb(238, 50, 50)"
        btn1.style.color = "white"
        btn1.style.margin = "0px 20px 0px 10px"
        btn1.style.padding = "5px 10px"
        btn1.addEventListener("click", function() {
            Removefromcart(ele, index)
        });


        btn2 = document.createElement("button1")

        div2.append(btn1)

        div1.append(img1, p1, p2, p3, div2)
        document.querySelector("#products_data").append(div1)

    });

    function Removefromcart(ele, i) {
        productdata.splice(i, 1)
        localStorage.setItem("data", JSON.stringify(productdata))
        window.location.reload()
    }