var productName = document.getElementById("ProductName")
var productPrice = document.getElementById("ProductPrice")
var productCategory = document.getElementById("ProductCategory")
var productDesc = document.getElementById("ProductDesc")
var productImg = document.getElementById("ProductImg")
var productNum = document.getElementById("ProductNum")
var productArr ;

if(localStorage.getItem("ourProducts")== null){
    productArr = []
}else{
    productArr = JSON.parse(localStorage.getItem("ourProducts")) ;
    AddHtml()
}


function AddProduct(){
    if (
        productName.value.trim() === "" || 
        productPrice.value.trim() === "" || 
        productCategory.value.trim() === "" || 
        productDesc.value.trim() === "" || 
        !productImg.files[0]  
    ) {
        alert("يرجى ملء جميع الحقول قبل إضافة المنتج.");
        return; 
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        var imgBase64 = event.target.result;

        var products = {
            name: productName.value,
            price: productPrice.value,
            cate: productCategory.value,
            decs: productDesc.value,
            num: productNum.value,
            img: imgBase64,  
        }

        if(products.num <= 0){
            productArr.push(products);
        } else if(products.num > 0){
            for(var i=0 ; i< products.num ; i++){
                productArr.push(products);
            }
        }

        localStorage.setItem("ourProducts", JSON.stringify(productArr));
        empytInput();
        AddHtml();
    }

    reader.readAsDataURL(productImg.files[0]);  
}


// function AddProduct(){

//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var imgBase64 = event.target.result;

//         var products = {
//             name: productName.value,
//             price: productPrice.value,
//             cate: productCategory.value,
//             decs: productDesc.value,
//             num: productNum.value,
//             img: imgBase64,  
//         }

//         if(products.num <= 0){
//             productArr.push(products)
//         } else if(products.num > 0){
//             for(var i=0 ; i< products.num ; i++){
//                 productArr.push(products)
//             }
//         }

//         localStorage.setItem("ourProducts", JSON.stringify(productArr));
//         empytInput();
//         AddHtml();
//     }

//     reader.readAsDataURL(productImg.files[0]);  
// }

// function AddProduct(){

//     var products = {
//         name: productName.value,
//         price: productPrice.value,
//         cate: productCategory.value,
//         decs: productDesc.value,
//         num: productNum.value,
//         img: productImg.value,
//     }

//     if( products.num <= 0 ){
//         productArr.push(products)
//     }else if( products.num > 0){
//         for(var i=0 ; i< products.num ; i++){
//             productArr.push(products)
//        }
//     }
//     localStorage.setItem("ourProducts", JSON.stringify(productArr));
//     empytInput();
//     AddHtml();
// }

function AddHtml(){
    var addTR = ""
    for (var i=0 ; i< productArr.length ; i++){
            addTR += `
            <div class="card">
                        <div class="product">
                            <p class="id">ID ${i+1}</p>
                            <img src="${productArr[i].img}" alt="">
                        </div>
                        <div class="product-details">
                            <h3>${productArr[i].name}</h3>
                            <p>${productArr[i].cate}</p>
                            <p class="desc">${productArr[i].decs}</p>
                            <p class="price">${productArr[i].price} $</p>
                            <div class="btn">
                                <button type="submit" class="update-item item" onclick="Update(${i})"> Update </button>
                                <button type="submit" class="delete-item item" onclick="Delete(${i})"> Delete </button>
                            </div>
                            
                        </div>
                    </div>
            `
    }
    document.getElementById("parent-card").innerHTML = addTR;
    
}

function empytInput(){
    productName.value = null
    productPrice.value = null
    productCategory.value = null
    productDesc.value = null
    productNum.value = null
    productImg.value = null
}


function DeleteAll(){
    productArr =[]
    localStorage.setItem("ourProducts", JSON.stringify(productArr))
    AddHtml()
}


function Delete(i) {
    productArr.splice(i, 1);     
    localStorage.setItem("ourProducts", JSON.stringify(productArr)); 
    AddHtml();
}


function Update(i) {
    productName.value = productArr[i].name;
    productPrice.value = productArr[i].price;
    productCategory.value = productArr[i].cate;
    productDesc.value = productArr[i].decs;

    productArr.splice(i, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productArr)); 
    AddHtml();    
}


