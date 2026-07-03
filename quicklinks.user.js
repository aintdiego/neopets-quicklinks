// ==UserScript==
// @name         Neopets - Quicklinks
// @version      1.0
// @description  Adds quick links under the top navbar
// @author       Leo
// @match        *://www.neopets.com/*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

jQuery.fn.exists = function () {
    return this.length > 0;
};

const NAVSUB_LINKS = [
    {
        href: "https://www.neopets.com/quickref.phtml",
        iconSrc: "https://images.neopets.com/themes/h5/hauntedwoods/images/mypets-icon.svg",
        text: "Quickref"
    },
    {
        href: "https://www.neopets.com/inventory.phtml",
        iconSrc: "https://images.neopets.com/themes/h5/hauntedwoods/images/inventory-icon.svg",
        text: "Inventory",
    },
    {
        href: "https://www.neopets.com/quickstock.phtml",
        iconSrc: "https://images.neopets.com/themes/h5/hauntedwoods/images/quickstock-icon.svg",
        text: "Quick Stock",
    },
    {
        href: "https://www.neopets.com/safetydeposit.phtml",
        iconSrc: "https://images.neopets.com/themes/h5/hauntedwoods/images/safetydeposit-icon.svg",
        text: "SDB",
    },
    {
        href: "javascript:void(0)",
        iconSrc: "https://images.neopets.com/themes/h5/basic/images/bankroll-icon.png",
        text: "Bankroll",
        onClick: "void 0;toggleWidget__2020('bankroll')",
        premiumOnly: true,
    },
];

// Helpers
function makeNavLink(href, iconSrc, text, onClick) {
    const clickAttr = onClick ? ` onClick="${onClick}"` : '';
    return `<a href="${href}"${clickAttr}><div class="navsub-np-meter__2020" style="display:inline-block;margin-right:5px;margin-bottom:0;text-align:center;"><div class="navsub-np-icon__2020" style="background:none!important;"><img src="${iconSrc}" width="25"></div><span class="np-text__2020">${text}</span></div></a>`;
}

// Main
function addLinks() {
    if (!$("[class^='nav-pet-menu-icon']").exists()) return;

    const hasPremium = $("[class^='navsub-ssw-icon']").exists();
    const clock = document.getElementsByClassName("nav-profile-dropdown-clock__2020")[0];

    if (!clock) return;

    const navLinks = NAVSUB_LINKS
        .filter(({ premiumOnly }) => !premiumOnly || hasPremium)
        .map(({ href, iconSrc, text, onClick }) => makeNavLink(href, iconSrc, text, onClick));

    const bankLink = document.getElementsByClassName("navsub-right__2020")[0];
    for (const html of [...navLinks].reverse()) {
        const el = document.createElement('span');
        el.innerHTML = html;
        bankLink.insertBefore(el, bankLink.children[0]);
    }
}

addLinks();
