/** pear-admin-v3.10.0 MIT License By http://www.pearadmin.com/ */
 ;"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n){"function"==typeof define&&define.amd?define(n):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=n():e.NProgress=n()}(void 0,(function(){var e,n,t={version:"0.2.0"},r=t.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e){return"object"===("undefined"==typeof HTMLElement?"undefined":_typeof(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":_typeof(e))&&1===e.nodeType&&"string"==typeof e.nodeName}function i(e,n,t){return e<n?n:e>t?t:e}function s(e){return 100*(-1+e)}t.configure=function(e){var n,t;for(n in e)void 0!==(t=e[n])&&e.hasOwnProperty(n)&&(r[n]=t);return this},t.status=null,t.set=function(e){var n=t.isStarted();e=i(e,r.minimum,1),t.status=1===e?null:e;var o=t.render(!n),c=o.querySelector(r.barSelector),f=r.speed,l=r.easing;return o.offsetWidth,u((function(n){""===r.positionUsing&&(r.positionUsing=t.getPositioningCSS()),a(c,function(e,n,t){var o;o="translate3d"===r.positionUsing?{transform:"translate3d("+s(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(e)+"%,0)"}:{"margin-left":s(e)+"%"};return o.transition="all "+n+"ms "+t,o}(e,f,l)),1===e?(a(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout((function(){a(o,{transition:"all "+f+"ms linear",opacity:0}),setTimeout((function(){t.remove(),n()}),f)}),f)):setTimeout(n,f)})),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);return r.trickle&&function e(){setTimeout((function(){t.status&&(t.trickle(),e())}),r.trickleSpeed)}(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var n=t.status;return n?n>1?void 0:("number"!=typeof e&&(e=n>=0&&n<.2?.1:n>=.2&&n<.5?.04:n>=.5&&n<.8?.02:n>=.8&&n<.99?.005:0),n=i(n+e,0,.994),t.set(n)):t.start()},t.trickle=function(){return t.inc()},e=0,n=0,t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always((function(){0==--n?(e=0,t.done()):t.set((e-n)/e)})),this):this},t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=r.template;var i,u=n.querySelector(r.barSelector),c=e?"-100":s(t.status||0),l=o(r.parent)?r.parent:document.querySelector(r.parent);return a(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),r.showSpinner||(i=n.querySelector(r.spinnerSelector))&&p(i),l!=document.body&&f(l,"nprogress-custom-parent"),l.appendChild(n),n},t.remove=function(){l(document.documentElement,"nprogress-busy"),l(o(r.parent)?r.parent:document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var u=function(){var e=[];function n(){var t=e.shift();t&&t(n)}return function(t){e.push(t),1==e.length&&n()}}(),a=function(){var e=["Webkit","O","Moz","ms"],n={};function t(t){return t=t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,n){return n.toUpperCase()})),n[t]||(n[t]=function(n){var t=document.body.style;if(n in t)return n;for(var r,o=e.length,i=n.charAt(0).toUpperCase()+n.slice(1);o--;)if((r=e[o]+i)in t)return r;return n}(t))}function r(e,n,r){n=t(n),e.style[n]=r}return function(e,n){var t,o,i=arguments;if(2==i.length)for(t in n)void 0!==(o=n[t])&&n.hasOwnProperty(t)&&r(e,t,o);else r(e,i[1],i[2])}}();function c(e,n){return("string"==typeof e?e:d(e)).indexOf(" "+n+" ")>=0}function f(e,n){var t=d(e),r=t+n;c(t,n)||(e.className=r.substring(1))}function l(e,n){var t,r=d(e);c(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function d(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})),layui.define([],(function(e){e("nprogress",NProgress)}));