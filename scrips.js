/**
 *  LIDL
 * 
 *  Webseite öffnen und anmelden:
 *  https://www.lidl.de/prm/promotions-list
 *  
 *  Skript in Browserkonsole ausführen (F12)
 */

function activateCouponsLidl(activate = true) {

    let elementClass = "bg-button_primary-positive-color-background";

    if (!activate) {
        elementClass = "bg-lidl-color-green";
    }

    let coupons = document.querySelectorAll(".promotion button");

    coupons.forEach((coupon) => {
        if (coupon.classList.contains(elementClass)) {
            coupon.click();
        }
    });
}

activateCouponsLidl();
