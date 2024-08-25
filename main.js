var productName = document.getElementById("ProductName")
var productPrice = document.getElementById("ProductPrice")
var productCategory = document.getElementById("ProductCategory")
var productDesc = document.getElementById("ProductDesc")

var productArr =[]




function AddProduct(){
    var products = {
        name: productName.value,
        price: productPrice.value,
        cate: productCategory.value,
        decs: productDesc.value,
    }
    productArr.push(products)
    empytInput()
    AddHtml()
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
                <td><button type="submit" class="delete-item item" onclick="Delete()"> Delete </button></td>
                <td><button type="submit" class="update-item item" onclick="Update()"> Update </button></td>
            </tr>
        `
    }
    document.getElementById("TBody").innerHTML = addTR
}

function empytInput(){
    productName.value = null
    productPrice.value = null
    productCategory.value = null
    productDesc.value = null
}


function DeleteAll(){
    productArr =[]
    AddHtml()
}


function Delete(){

}


function Update(){

}