!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequire7bc7=o);var i=o("6JpON");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.amount.valueAsNumber,r=n.currentTarget.step.valueAsNumber,o=n.currentTarget.delay.valueAsNumber,u=1;u<=t;u++)a(u,o).then((function(n){var t=n.position,r=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))})),o+=r;function a(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r({position:e,delay:n}):o({position:e,delay:n})}),n)}))}n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.a1d5da27.js.map