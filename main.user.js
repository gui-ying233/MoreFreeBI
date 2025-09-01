// ==UserScript==
// @name         商业内幕查看更多
// @namespace    https://github.com/gui-ying233/MoreFreeBI
// @version      1.0.0
// @description  去除商业内幕的订阅提示并显示更多内容（不一定能完全显示）
// @author       鬼影233
// @license      MIT
// @match        https://www.businessinsider.com/*
// @icon         https://www.businessinsider.com/public/assets/BI/US/favicons/favicon.svg
// @supportURL   https://github.com/gui-ying233/MoreFreeBI/issues
// ==/UserScript==

(() => {
	"use strict";
	document.head.appendChild(
		Object.assign(document.createElement("style"), {
			textContent:
				".pw-active,.inline-backup-paywall{display:none!important}.post-summary-bullets,.post-body-content{display:initial!important}",
		})
	);
})();
