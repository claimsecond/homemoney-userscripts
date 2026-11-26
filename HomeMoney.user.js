// ==UserScript==
// @name         HomeMoney Premium Blocker
// @namespace    homemoney
// @version      1.0
// @description  Hide HomeMoney Premium promotional dialogs
// @match        https://homemoney.ua/*
// @match        https://www.homemoney.ua/*
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const selectors = [
        '[class*="premium"]',
        '[id*="premium"]',
        '[class*="subscription"]',
        '[id*="subscription"]'
    ];

    function hidePromotions() {
        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach(el => {
                const text = (el.innerText || '').toLowerCase();

                if (
                    text.includes('премиум') ||
                    text.includes('premium') ||
                    text.includes('премиум-версия')
                ) {
                    el.style.setProperty('display', 'none', 'important');
                }
            });
        }
    }

    hidePromotions();

    new MutationObserver(hidePromotions).observe(
        document.documentElement,
        { childList: true, subtree: true }
    );
})();
