const id = new URLSearchParams(window.location.search).get('id');
const containerImage = document.querySelector('#image'); //sign to the id
const containerInfo = document.querySelector('#info'); //sign to the id


const renderDetails = async() => {
    const res = await fetch('../data/db.json');

    const product = await res.json();

    return product;
}

renderDetails().then(data => {

    const product = data.products.filter(function(product) {
        if (product.productID === id) {
            return true;
        }
    })

    const templateImage = `
         <img src="${product[0].image}" class="img">
    `;

    const templateInfo = `
         <div class="information">NEW</div>
         <h2>${product[0].productName}</h2>
         <label><b>Product Code</b></label>
         <p class="text_green">${product[0].productID}</p>
         <img src="../assets/star.png" alt="star.png" class="star">
         <p>${product[0].description}</p>
         <p class="price">RM ${product[0].price}</p>
         <label><b>Availability</b></label>
         <p class="text_green"> In Stock</p>
         <label><b>Condition</b></label>
         <p class="text_green"> New</p>
         <label><b> Quantity</b></label>
         <input type="text" value="1" id="inCart">
         <button type="button" class="btn_cart" onclick="addToCart('${product[0].productID}  ','  ${product[0].productName} ','  ${product[0].image} ',' ${product[0].price} ',' ${product[0].totalPrice} ')">
             Add to Cart
         </button>
    `;

    containerImage.innerHTML = templateImage;
    containerInfo.innerHTML = templateInfo;



});



function addToCart(productID, productName, productImage, productPrice, productTotalPrice) {

    var popup = document.querySelector('.popup');
    var add_okay = document.querySelector('#add_okay');

    const productInCart = document.querySelector('#inCart').value;

    setItems(productID, productName, productImage, productPrice, parseInt(productInCart), productTotalPrice);


    popup.classList.add("active");

    add_okay.addEventListener("click", function() {
        popup.classList.remove("active");
    });

}

function setItems(productID, productName, productImage, productPrice, productInCart, productTotalPrice) {

    let product = {
        productID,
        productName,
        productImage,
        productPrice: parseInt(productPrice),
        productInCart: parseInt(productInCart),
        productTotalPrice: parseInt(productTotalPrice)
    };


    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems !== null) {

        let isLooped = false;
        for (let i = 0; i < cartItems.length; i++) {

            if (cartItems[i].productID == productID) {
                cartItems[i].productInCart += productInCart;
                cartItems[i].productTotalPrice = cartItems[i].productPrice * cartItems[i].productInCart;
                isLooped = true;
            }

        }
        product.productTotalPrice = product.productPrice * product.productInCart;
        if (!isLooped) {
            cartItems = [
                ...cartItems,
                product
            ];

        }
    } else {
        product.productTotalPrice = product.productPrice * product.productInCart;
        cartItems = [
            product
        ]


    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));


}


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('.products-container');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
           <tr>
           <td><a href=""><i class="fas fa-trash" onclick="deleteCart(${item.productID})"></i></a></td>
           <td><img src="${item.productImage}" alt=""></td>
           <td>
               <h5>${item.productName}</h5>
           </td>
           <td>
               <h5>${item.productPrice}</h5>
           </td>
           <td>
               <h5>${item.productInCart}</h5>
           </td>
           <td>
               <h5>${item.productTotalPrice}</h5>
           </td>
           </tr>

           `;

        });
    } else {
        productContainer.innerHTML += `
        <h5 class="no_product"> No product in cart!<h5>
       `;
    }

    if (cartItems.length !== 0 && productContainer !== "") {

        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
           <tr>
           <td><a href=""><i class="fas fa-trash" onclick="deleteCart(${item.productID})"></i></a></td>
           <td><img src="${item.productImage}" alt=""></td>
           <td>
               <h5>${item.productName}</h5>
           </td>
           <td>
               <h5>${item.productPrice}</h5>
           </td>
           <td>
               <h5>${item.productInCart}</h5>
           </td>
           <td>
               <h5>${item.productTotalPrice}</h5>
           </td>
           </tr>

           `;

        });
    } else {
        productContainer.innerHTML += `
        <h5 class="no_product"> No product in cart!<h5>
       `;
    }


}


function deleteCart(productID) {

    var popup = document.querySelector('.popup');
    var delete_okay = document.querySelector('#delete_okay');

    if (productID >= 1 && productID <= 9) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);
        localStorage.setItem("productsInCart", JSON.stringify(temp));

    } else if (productID > 9 && productID < 16) {
        productID += 2;
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);

        localStorage.setItem("productsInCart", JSON.stringify(temp));

    } else if (productID >= 16 && productID < 19) {
        productID += 4;
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);


        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);
        localStorage.setItem("productsInCart", JSON.stringify(temp));

    } else if (productID >= 20) {
        productID += 4;
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);


        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);
        localStorage.setItem("productsInCart", JSON.stringify(temp));
    }

    if (productID === 8) {
        productID += 2;
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);

        localStorage.setItem("productsInCart", JSON.stringify(temp));
    }

    if (productID === 19) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let temp = cartItems.filter(item => parseInt(item.productID) !== productID);

        localStorage.setItem("productsInCart", JSON.stringify(temp));

    }

    alert("Item Deleted");

}



function totalAmount() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalAmount = localStorage.getItem('totalAmount');
    totalAmount = JSON.parse(totalAmount);

    let subTotal = 0;

    Object.values(cartItems).map(item =>
        subTotal += item.productTotalPrice
    );

    localStorage.setItem("totalAmount", JSON.stringify(subTotal));

    discountFive(subTotal);
    discountTen(subTotal);
    postageFee(subTotal);

}

totalAmount();

function discountFive(subTotal) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalAmountOfFiveDiscount = localStorage.getItem('totalAmountOfFiveDiscount');
    totalAmountOfFiveDiscount = JSON.parse(totalAmountOfFiveDiscount);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });
    if (totalOfProductCart >= 5 && totalOfProductCart <= 10) {
        subTotal *= 0.95;
        localStorage.setItem("totalAmountOfFiveDiscount", JSON.stringify(subTotal));
    }


}

function discountTen(subTotal) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalAmountOfTenDiscount = localStorage.getItem('totalAmountOfTenDiscount');
    totalAmountOfTenDiscount = JSON.parse(totalAmountOfTenDiscount);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });

    if (totalOfProductCart > 10) {
        subTotal *= 0.85;
        localStorage.setItem("totalAmountOfTenDiscount", JSON.stringify(subTotal));
    }


}

function postageFee(subTotal) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let postageFee = localStorage.getItem('postageFee');
    postageFee = JSON.parse(postageFee);


    let totalOfProductCart = 0;


    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });

    if (subTotal >= 100) {
        localStorage.setItem("postageFee", JSON.stringify("FREE"));
    } else if (subTotal < 100 && totalOfProductCart !== 0) {
        postageTotal = localStorage.setItem("postageFee", JSON.stringify(10));

    } else {
        localStorage.setItem("postageFee", JSON.stringify("NO PRODUCTS"));
    }

}
displayCart();