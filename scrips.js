function activateCoupons(store, selector, { requiredLabel, excludedLabels = [], excludedChildSelector } = {}) {
    const buttons = document.querySelectorAll(selector);
    let found = 0;
    let clicked = 0;
    let skipped = 0;
    let failed = 0;

    buttons.forEach((button) => {
        const label = button.textContent.trim().toLocaleLowerCase("de-DE");

        if (excludedLabels.some((excludedLabel) => label === excludedLabel.toLocaleLowerCase("de-DE"))) {
            skipped++;
            return;
        }

        if (excludedChildSelector && button.querySelector(excludedChildSelector)) {
            skipped++;
            return;
        }

        if (requiredLabel && label !== requiredLabel.toLocaleLowerCase("de-DE")) {
            skipped++;
            return;
        }

        found++;

        if (button.disabled || button.getAttribute("aria-disabled") === "true") {
            skipped++;
            return;
        }

        try {
            button.click();
            clicked++;
        } catch (error) {
            failed++;
            console.error(`[${store}] Klick fehlgeschlagen:`, error);
        }
    });

    console.info(`[${store}] Coupons gefunden: ${found}; Klicks ausgelöst: ${clicked}; übersprungen: ${skipped}; Fehler: ${failed}.`);
    console.info(`[${store}] Klicks sind keine Bestätigung, dass der Shop die Coupons erfolgreich aktiviert hat.`);
}

const hostname = location.hostname;

if (hostname === "lidl.de" || hostname.endsWith(".lidl.de")) {
    activateCoupons("Lidl", ".promotion button.bg-button_primary-positive-color-background");
} else if (hostname === "kaufland.de" || hostname.endsWith(".kaufland.de")) {
    activateCoupons("Kaufland", "button.k-coupon-activation-button.k-coupon-activation__button", {
        requiredLabel: "Aktivieren",
        excludedChildSelector: ".k-coupon-activation-button__buyable-text"
    });
} else if (hostname === "payback.de" || hostname.endsWith(".payback.de")) {
    activateCoupons("PAYBACK", 'button[data-testid$="-not_activated"]', {
        requiredLabel: "Jetzt aktivieren",
        excludedLabels: ["JETZT TEILNEHMEN"]
    });
} else {
    console.warn("[Coupon Helper] Diese Seite wird nicht unterstützt.");
}
