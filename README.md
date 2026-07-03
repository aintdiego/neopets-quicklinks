# Quicklinks
Adds links as buttons under the top navbar:

<img width="698" height="141" alt="image" src="https://github.com/user-attachments/assets/e403bea5-7df1-4aaa-af5b-4e225a0a4c6b" />

Editable by modifying the NAVSUB_LINKS constant at the top of the script:

```
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
```
