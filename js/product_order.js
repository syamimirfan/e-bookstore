function displayCartTotal() {
    let totalAmount = localStorage.getItem('totalAmount');
    totalAmount = JSON.parse(totalAmount);

    let cartTotal = document.querySelector('.subtotal');

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });

    if (totalAmount && totalOfProductCart < 5 && totalOfProductCart > 0) {
        cartTotal.innerHTML += `
        <h6>0% DISCOUNT</h6>
        <p>RM ${totalAmount}</p> 
        `;

    } else {
        cartTotal.innerHTML += `
        <h6>0% DISCOUNT</h6>
        <p></p> 
        `;
    }
}
displayCartTotal();

function displayCartTotalDiscount5() {
    const discount5 = document.querySelector('.discount1');

    let totalAmountOfFiveDiscount = localStorage.getItem('totalAmountOfFiveDiscount');
    totalAmountOfFiveDiscount = JSON.parse(totalAmountOfFiveDiscount);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });

    if (totalAmountOfFiveDiscount && totalOfProductCart >= 5 && totalOfProductCart <= 10) {
        discount5.innerHTML += `
        <h6>5% Discount</h6>
         <p>RM ${totalAmountOfFiveDiscount}</p>
         `;
    } else {
        discount5.innerHTML += `
        <h6>5% Discount</h6>
        <p></p> 
        `;
    }
}

displayCartTotalDiscount5();

function displayCartTotalDiscount10() {
    const discount15 = document.querySelector('.discount2');

    let totalAmountOfTenDiscount = localStorage.getItem('totalAmountOfTenDiscount');
    totalAmountOfTenDiscount = JSON.parse(totalAmountOfTenDiscount);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });


    if (totalAmountOfTenDiscount && totalOfProductCart >= 10) {
        discount15.innerHTML += `
        <h6>15% Discount</h6>
         <p>RM ${totalAmountOfTenDiscount}</p>
         `;
    } else {
        discount15.innerHTML += `
        <h6>15% Discount</h6>
        <p></p> 
        `;
    }
}

displayCartTotalDiscount10();

function postageFee() {
    const postage = document.querySelector('.postage');

    let postageFee = localStorage.getItem('postageFee');
    postageFee = JSON.parse(postageFee);

    if (postageFee !== 10) {
        postage.innerHTML += `
        <h6>Postage</h6>
        <p>${postageFee}</p>
    `;
    } else {
        postage.innerHTML += `
        <h6>Postage</h6>
        <p>RM ${postageFee}</p>
    `;
    }
}

postageFee();

function totalAmount() {
    const amount = document.querySelector('.amount');

    let totalAmount = localStorage.getItem('totalAmount');
    totalAmount = JSON.parse(totalAmount);

    let postageFee = localStorage.getItem('postageFee');
    postageFee = JSON.parse(postageFee);

    let totalAmountOfFiveDiscount = localStorage.getItem('totalAmountOfFiveDiscount');
    totalAmountOfFiveDiscount = JSON.parse(totalAmountOfFiveDiscount);

    let totalAmountOfTenDiscount = localStorage.getItem('totalAmountOfTenDiscount');
    totalAmountOfTenDiscount = JSON.parse(totalAmountOfTenDiscount);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalOfProductCart = 0;

    Object.values(cartItems).map(item => {
        totalOfProductCart += item.productInCart;

    });

    if (totalAmount && postageFee === 10 && totalOfProductCart < 5) {
        amount.innerHTML += `
        <h6>TOTAL</h6>
         <p>RM ${totalAmount + 10}</p>
        `;
    } else if (totalAmount && totalOfProductCart < 5) {
        amount.innerHTML += `
        <h6>TOTAL</h6>
         <p>RM ${totalAmount}</p>
        `;
    }

    if (totalAmountOfFiveDiscount && postageFee === 10 && totalOfProductCart >= 5 && totalOfProductCart <= 10) {
        amount.innerHTML += `
        <h6>TOTAL 5% DISCOUNT</h6>
         <p>RM ${totalAmountOfFiveDiscount + 10}</p>
        `;
    } else if (totalAmountOfFiveDiscount && totalOfProductCart >= 5 && totalOfProductCart <= 10) {
        amount.innerHTML += `
        <h6>TOTAL 5% DISCOUNT</h6>
         <p>RM ${totalAmountOfFiveDiscount}</p>
        `;
    }
    if (totalAmountOfTenDiscount && postageFee === 10 && totalOfProductCart > 10) {
        amount.innerHTML += `
        <h6>TOTAL 15% DISCOUNT</h6>
         <p>RM ${totalAmountOfTenDiscount + 10}</p>
        `;
    } else if (totalAmountOfTenDiscount && totalOfProductCart > 10) {
        amount.innerHTML += `
        <h6>TOTAL 15% DISCOUNT</h6>
         <p>RM ${totalAmountOfTenDiscount}</p>
        `;
    }
}

totalAmount();