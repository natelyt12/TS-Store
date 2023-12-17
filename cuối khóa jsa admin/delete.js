// Retrieve the product list element
const productList = document.getElementById('productList');

// Retrieve existing products from local storage (if any)
const storedProducts = localStorage.getItem('products');
let productsData = storedProducts ? JSON.parse(storedProducts) : {};

// Function to delete a product from HTML and local storage
function deleteProduct(index) {
  // Remove the product from the productsData array
  productsData.data.splice(index, 1);

  // Update the product list in HTML
  renderProductList();

  // Update the products in local storage
  localStorage.setItem('products', JSON.stringify(productsData));
}

// Function to render the product list in HTML
function renderProductList() {
  // Clear the existing product list
  productList.innerHTML = '';

  // Loop through the products and create HTML elements for each product
  productsData.data.forEach((product, index) => {
    const listItem = document.createElement('li');

    // Create the product image element
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.itemsname;
    listItem.appendChild(productImg);

    // Create the product name element
    const productName = document.createElement('h5');
    productName.textContent = product.itemsname;
    listItem.appendChild(productName);

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    listItem.appendChild(deleteButton);

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      alert("sản phẩm đã xóa")
      deleteProduct(index);
    });

    // Append the list item to the product list
    productList.appendChild(listItem);
  });
}

// Render the initial product list
renderProductList();


function find() {
  //document.getElementById("products").innerHTML=
  let search_value=document.getElementById("search").value.toLowerCase()
  console.log(search_value)
  document.getElementById("productList").innerHTML=""
  for(let i of productsData.data){
        if (i.itemsname.toLowerCase().indexOf(search_value)!=-1) {
              // let product_info=document.createElement("div")
              // product_info.classList.add("product_info")
              // product_info.classList.add("col-lg-3")
              // product_info.classList.add("col-md-4")
              // product_info.classList.add("col-12")
        
              // let product_img=document.createElement("div")
              // product_img.classList.add("product_img")
              // product_img.classList.add("w-100")
              // product_info.appendChild(product_img)
        
              // let image=document.createElement("img")
              // image.setAttribute("alt",i.name)
              // image.setAttribute("width","100%")
              // image.setAttribute("src",i.image)
              // product_img.appendChild(image)
        
              // let name=document.createElement("h4")
              // name.innerText=i.itemsname
              // product_img.appendChild(name)

              // let deleteButton = document.createElement('button');
              // deleteButton.textContent = 'Xóa';
              // listItem.appendChild(deleteButton);

                  // Create the product image element
                  const productImg = document.createElement('img');
                  productImg.src = product.image;
                  productImg.alt = product.itemsname;
                  listItem.appendChild(productImg);

                  // Create the product name element
                  const productName = document.createElement('h5');
                  productName.textContent = product.itemsname;
                  listItem.appendChild(productName);

                  // Create the delete button
                  const deleteButton = document.createElement('button');
                  deleteButton.textContent = 'Xóa';
                  listItem.appendChild(deleteButton);
              

              document.getElementById("productList").appendChild(product_info)
        } 
       
  }
  
}
