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

    console.log(product);

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
         <p class="price">${product[0].price}</p>
         <label><b>Availability</b></label>
         <p class="text_green"> In Stock</p>
         <label><b>Condition</b></label>
         <p class="text_green"> New</p>
         <label><b> Quantity</b></label>
         <input type="text" value="1">
         <button type="button" class="btn_cart">
             Order Now
         </button>
    `;

    containerImage.innerHTML = templateImage;
    containerInfo.innerHTML = templateInfo;

});