var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function m(t,e,n){var o,r,i,f,u,a,c=0,m=!1,b=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(h,e),m?g(t):f}function O(t){var n=t-a;return void 0===a||n>=e||n<0||b&&t-c>=i}function h(){var t=d();if(O(t))return S(t);u=setTimeout(h,function(t){var n=e-(t-a);return b?s(n,i-(t-c)):n}(t))}function S(t){return u=void 0,y&&o?g(t):(o=r=void 0,f)}function T(){var t=d(),n=O(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(b)return u=setTimeout(h,e),g(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=p(e)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},T.flush=function(){return void 0===u?f:S(d())},T}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}const b={form:document.querySelector(".feedback-form")};let y=JSON.parse(localStorage.getItem("feedback-form-state"))||{};b.form.addEventListener("input",(function(t){y[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))})),b.form.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),t.target.reset(),y={}}));
//# sourceMappingURL=03-feedback.12219a56.js.map