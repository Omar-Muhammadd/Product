var productName = document.getElementById("ProductName")
var productPrice = document.getElementById("ProductPrice")
var productCategory = document.getElementById("ProductCategory")
var productDesc = document.getElementById("ProductDesc")
var productNum = document.getElementById("ProductNum")

var productArr ;

if(localStorage.getItem("ourProducts")== null){
    productArr = []
}else{
    productArr = JSON.parse(localStorage.getItem("ourProducts")) ;
    AddProduct();
}



function AddProduct(){
    var products = {
        name: productName.value,
        price: productPrice.value,
        cate: productCategory.value,
        decs: productDesc.value,
        num: productNum.value,
    }

    if( products.num <= 0 ){
        productArr.push(products)
    }else if( products.num > 0){
        for(var i=0 ; i< products.num ; i++){
            productArr.push(products)
       }
    }

    localStorage.setItem("ourProducts", JSON.stringify(productArr));
    empytInput();
    AddHtml();
}

function AddHtml(){
    var addTR = ""
    for (var i=0 ; i< productArr.length ; i++){
        addTR += `
        <tr>
        <td class="left">${i+1} </td>
        <td>${productArr[i].name}</td>
        <td>${productArr[i].price}</td>
        <td>${productArr[i].cate}</td>
        <td>${productArr[i].decs}</td>
        <td><button type="submit" class="delete-item item" onclick="Delete(${i})"> Delete </button></td>
        <td><button type="submit" class="update-item item" onclick="Update(${i})"> Update </button></td>
        </tr>
        `
    }
    document.getElementById("TBody").innerHTML = addTR;
}

function empytInput(){
    productName.value = null
    productPrice.value = null
    productCategory.value = null
    productDesc.value = null
    productNum.value = null
}


function DeleteAll(){
    productArr =[]
    localStorage.setItem("ourProducts", JSON.stringify(productArr))
    AddHtml()
}


function Delete(i) {
    productArr.splice(i, 1); // حذف العنصر من المصفوفة
    localStorage.setItem("ourProducts", JSON.stringify(productArr)); // تحديث التخزين المحلي
    AddHtml(); // إعادة تحديث الجدول
}


function Update(i) {
    productName.value = productArr[i].name;
    productPrice.value = productArr[i].price;
    productCategory.value = productArr[i].cate;
    productDesc.value = productArr[i].decs;// نضع القيمة بـ 1 لتحديث عنصر واحد فقط

    // حذف المنتج القديم من المصفوفة للسماح بإضافة النسخة المعدلة
    productArr.splice(i, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productArr)); // تحديث التخزين المحلي
    AddHtml(); // إعادة تحديث الجدول
}