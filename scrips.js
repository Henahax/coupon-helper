/*
* LIDL
* https://www.lidl.de/prm/promotions-list
*/
function activateCouponsLidl() {
    let couponsLidl = document.querySelectorAll(".promotion button.bg-button_primary-positive-color-background");
    couponsLidl.forEach((coupon) => {
        coupon.click();
    });
}
activateCouponsLidl();

/*
* Kaufland
* https://mein.kaufland.de/coupons.html
*/
function activateCouponsKaufland() {
    let kauflandCoupons = document.querySelectorAll(".m-coupon-item[data-status='0']:not(.m-coupon-item--buyable) button.m-coupon-item__button-activate.js-coupon-item__button-activate");
    kauflandCoupons.forEach((coupon) => {
        coupon.click();
    });
}
activateCouponsKaufland();
