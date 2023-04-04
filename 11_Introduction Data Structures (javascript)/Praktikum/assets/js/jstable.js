// mendeklarasikan variable element yang dimasukan
const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const productImage = document.getElementById("product-image");
const productFreshness = document.getElementsByName("product-freshness");
const productDescription = document.getElementById("formDesc");
const productPrice = document.getElementById("product-price");
const form = document.getElementById("form");
const deletebutton = document.getElementById("delete-button");
const searchbutton = document.getElementById("search-button");
var tableproduct = document.getElementById("table-product");
let product = [];

// fungsi untuk mengecek apakah button sudah terisi semua dan mengaktifkan tombol submit
function checkSubmitButton() {
    const productName = form.elements["product-name"].value;
    const productCategory = form.elements["product-category"].value;
    const productImage = form.elements["product-image"].value;
    const productFreshness = form.elements["product-freshness"].value;
    const productDescription = form.elements["formDesc"].value;
    const productPrice = form.elements["product-price"].value;
    const submitButton = document.getElementById("submit-button");

    if (productName && productCategory && productImage && productFreshness && productDescription && productPrice) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// fungsi untuk memvalidasi input form create product
// function validate() {
//     //Name
//     if (productName.value.length > 25) {
//         alert("Product Name Max input is 25 characters");
//         productName.style.borderColor = "red";
//         return;
//     } else if (productName.value === "") {
//         alert("Product Name is Empty.");
//         productName.style.borderColor = "red";
//         return;
//     } else {
//         productName.style.borderColor = "green";
//     }

//     if (productName.value.includes("@") || productName.value.includes("#") || productName.value.includes("/") || productName.value.includes("{") || productName.value.includes("}")) {
//         alert("Product Name cannot Had @/#{}");
//         productName.style.borderColor = "red";
//         return;  
//     } else {
//         productName.style.borderColor = "green";
//     }

//     //Category
//     if (productCategory.value === "Choose") {
//         alert("Please Choose product category.");
//         productCategory.style.borderColor = "red";
//         return;
//       } else {
//         productCategory.style.borderColor = "green";
//       }
    
//     //Image
//     if (productImage.value === "") {
//         alert("Please Insert Image.");
//         productImage.style.borderColor = "red";
//         return;
//       } else {
//         productImage.style.borderColor = "green";
//       }
    
//     //Freshness
//     if (!(productFreshness[0].checked || productFreshness[1].checked || productFreshness[2].checked)) {
//         alert("Please Choose product freshness.");
//         productFreshness.forEach((element) => {
//           element.style.borderColor = "red";
//         });
//         return;
//       } else {
//         productFreshness.forEach((element) => {
//           element.style.borderColor = "green";
//         });
//       }
    
//     //Description
//     if (productDescription.value === "") {
//         alert("Product Description is Empty.");
//         productDescription.style.borderColor = "red";
//         return;
//       } else {
//         productDescription.style.borderColor = "green";
//       }

//     //Price
//     if (productPrice.value === "") {
//         alert("Product Price is Empty.");
//         productPrice.style.borderColor = "red";
//       } else {
//         productPrice.style.borderColor = "green";
//       }
//       return;
// }

// fungsi untuk mereset field input form creat product
function resetField() {
    productName.value = "";
    productCategory.value = "Choose";
    productImage.value = "";
    productDescription.value = "";
    productPrice.value = "";
    productName.style.removeProperty("border-color");
    productCategory.style.removeProperty("border-color");
    productImage.style.removeProperty("border-color");
    productFreshness.forEach((element) => {
      if (element.checked) {
        element.checked = false;
      }
      element.style.removeProperty("border-color");
    });
    productDescription.style.removeProperty("border-color");
    productPrice.style.removeProperty("border-color");
  }

let id = 1001;

// menambahkan event add listener ketika submit button ditekan
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // // memanggil fungsi validate
    // validate();
    // melooping untuk mengetahui input product freshness
    let selectedFreshness;
    productFreshness.forEach((element) => {
        if (element.checked) {
            selectedFreshness = element.value;
        }
    });

    // variable baru untuk menambahkan tabel
    var barisBaru = document.createElement("tr");
    tableproduct.appendChild(barisBaru);

    var idCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var categoryCell = document.createElement("td");
    var imageCell = document.createElement("td");
    var freshnessCell = document.createElement("td");
    var descriptionCell = document.createElement("td");
    var priceCell = document.createElement("td");

    // method menambahkan data value ke dalam array product
    product.push({
        name: productName.value,
        category: productCategory.value,
        image: productImage.value,
        freshness: selectedFreshness,
        description: productDescription.value,
        price: productPrice.value,
    });


    // fungsi untuk menampilkan data yang tersimpan
    idCell.innerText = id++;
    for (i = 0; i < product.length; i++) {
        nameCell.innerText = product[i].name;
        categoryCell.innerText = product[i].category;
        imageCell.innerText = product[i].image;
        freshnessCell.innerText = product[i].freshness;
        descriptionCell.innerText = product[i].description;
        priceCell.innerText = product[i].price;
    }

    // method untuk menentukan posisi dari setiap cell data
    barisBaru.appendChild(idCell);
    barisBaru.appendChild(nameCell);
    barisBaru.appendChild(categoryCell);
    barisBaru.appendChild(imageCell);
    barisBaru.appendChild(freshnessCell);
    barisBaru.appendChild(descriptionCell);
    barisBaru.appendChild(priceCell);

    // memanggil fungsi reset field
    resetField();
});

// fungsi tombol delete
deletebutton.addEventListener("click", (event) => {
    event.preventDefault();
    if(window.confirm("yakin ingin menghapus?")){
      product.pop();
      var lastRow = tableproduct.lastElementChild;
      tableproduct.removeChild(lastRow)
    }
})




