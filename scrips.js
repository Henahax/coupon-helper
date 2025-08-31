/**
 *  Webseite öffnen und anmelden
 *  Skript in Browserkonsole ausführen (F12)
 */

/**
 *  LIDL
 *  https://www.lidl.de/prm/promotions-list
 */

function activateCouponsLidl() {

    let coupons = document.querySelectorAll(".promotion button.bg-button_primary-positive-color-background");

    coupons.forEach((coupon) => {
        coupon.click();

    });
}
activateCouponsLidl();


/**
 *  Kaufland
 *  https://mein.kaufland.de/coupons.html
 */

function activateCouponsKaufland() {

    let coupons = document.querySelectorAll(".m-coupon-item[data-status='0']:not(.m-coupon-item--buyable) button.m-coupon-item__button-activate.js-coupon-item__button-activate");

    coupons.forEach((coupon) => {
        coupon.click();
    });
}
activateCouponsKaufland();

