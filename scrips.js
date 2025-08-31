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

/*
* LIDL - Bookmarklet
*/
javascript: (function () {
    location.href = 'https://www.lidl.de/prm/promotions-list';
    window.onload = function () {
        var script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/Henahax/coupon-helper/main/scrips.js';
        script.onload = function () { activateCouponsLidl(); };
        document.body.appendChild(script);
    };
})();


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

/*
* Kaufland - Bookmarklet
*/
javascript: (function () {
    location.href = 'https://mein.kaufland.de/coupons.html';
    window.onload = function () {
        var script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/Henahax/coupon-helper/main/scrips.js';
        script.onload = function () { activateCouponsKaufland(); };
        document.body.appendChild(script);
    };
})();
