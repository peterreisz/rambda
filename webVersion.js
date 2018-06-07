!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(n.rambda={});}(this,function(n){function r(n){return function(r){for(var t=[],u=arguments.length-1;u-->0;)t[u]=arguments[u+1];var i=0;return n.apply(null,[function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.apply(null,n.concat([i++]));}].concat(t));};}function t(n,r){if(void 0===r)return function(r){return t(n,r);};if(void 0===r.length)return function(n,r){var t={};for(var u in r)n(r[u],u)&&(t[u]=r[u]);return t;}(n,r);for(var u=-1,i=0,e=r.length,o=[],f;++u<e;){f=r[u];n(f)&&(o[i++]=f);}return o;}function u(n,r){if(void 0===r)return function(r){return u(n,r);};for(var t=0;t<r.length;){if(n(r[t]))return!0;t++;}return!1;}function i(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];var u=n.slice();if(u.length>0){for(var i=u.pop().apply(void 0,r);u.length>0;)i=u.pop()(i);return i;}};}function e(n){var r=typeof n;if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===r)return"Boolean";if("number"===r)return"Number";if("string"===r)return"String";if(Array.isArray(n))return"Array";if(n instanceof RegExp)return"RegExp";var t=n.toString();return t.startsWith("async")?"Async":"[object Promise]"===t?"Promise":t.includes("function")||t.includes("=>")?"Function":"Object";}function o(n,r){if(1===arguments.length)return function(r){return o(n,r);};if(n===r)return!0;var t=e(n);if(t!==e(r))return!1;if("Array"===t){var u=Array.from(n),i=Array.from(r);if(u.toString()!==i.toString())return!1;var f=!0;return u.forEach(function(n,r){f&&(n===i[r]||o(n,i[r])||(f=!1));}),f;}if("Object"===t){var c=Object.keys(n);if(c.length!==Object.keys(r).length)return!1;var a=!0;return c.forEach(function(t){if(a){var u=n[t],i=r[t];u===i||o(u,i)||(a=!1);}}),a;}return!1;}function f(n,r){if(void 0===r)return function(r){return f(n,r);};for(var t=-1,u=!1;++t<r.length&&!u;)o(r[t],n)&&(u=!0);return u;}function c(n,r){return void 0===r&&(r=[]),function(){for(var t,u=[],i=arguments.length;i--;)u[i]=arguments[i];return(t=r.concat(u)).length>=n.length?n.apply(void 0,t):c(n,t);};}function a(n,r){return 1===arguments.length?function(r){return a(n,r);}:void 0===r||null===r||!0===Number.isNaN(r)?n:r;}function v(n,r){return void 0===r?function(r){return v(n,r);}:r.slice(n);}function l(n,r){if(void 0===r)return function(r){return l(n,r);};if(void 0===r.length)return function(n,r){var t={};for(var u in r)t[u]=n(r[u],u);return t;}(n,r);for(var t=-1,u=r.length,i=Array(u);++t<u;)i[t]=n(r[t]);return i;}function d(n,r,t){var u=-1,i=n.length;(t=t>i?i:t)<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var e=Array(i);++u<i;)e[u]=n[u+r];return e;}function s(n,r){return void 0===r?function(r){return s(n,r);}:Object.assign({},n,r);}function p(n,r){if(1===arguments.length)return function(r){return p(n,r);};if(null!==r&&void 0!==r){for(var t=r,u=0,i="string"==typeof n?n.split("."):n;u<i.length;){if(null===t||void 0===t)return;t=t[i[u]],u++;}return t;}}var h=c(function(n,r,t){return a(n,p(r,t));});function g(n,r){if(void 0===r)return function(r){return g(n,r);};for(var t=[],u=n;u<r;u++)t.push(u);return t;}function y(n,r,t){return void 0===r?function(r,t){return y(n,r,t);}:void 0===t?function(t){return y(n,r,t);}:t.reduce(n,r);}n.add=function n(r,t){return void 0===t?function(t){return n(r,t);}:r+t;},n.addIndex=r,n.adjust=function n(r,t,u){return void 0===t?function(t,u){return n(r,t,u);}:void 0===u?function(u){return n(r,t,u);}:u.concat().map(function(n,i){return i===t?r(u[t]):n;});},n.all=function n(r,u){return void 0===u?function(t){return n(r,t);}:t(r,u).length===u.length;},n.allPass=function n(r,t){return 1===arguments.length?function(t){return n(r,t);}:!u(function(n){return!n(t);},r);},n.anyPass=function n(r,t){return 1===arguments.length?function(t){return n(r,t);}:u(function(n){return n(t);})(r);},n.always=function(n){return function(){return n;};},n.any=u,n.append=function n(r,t){if(void 0===t)return function(t){return n(r,t);};if("string"==typeof t)return""+t+r;var u=t.concat();return u.push(r),u;},n.both=function n(r,t){return void 0===t?function(t){return n(r,t);}:function(n){return r(n)&&t(n);};},n.complement=function(n){return function(r){return!n(r);};},n.compose=i,n.concat=function n(r,t){return void 0===t?function(t){return n(r,t);}:"string"==typeof r?""+r+t:r.concat(t);},n.contains=f,n.curry=c,n.dec=function(n){return n-1;},n.defaultTo=a,n.dissoc=function n(r,t){if(1===arguments.length)return function(t){return n(r,t);};if(null!==t&&void 0!==t){var u={};for(var i in t)i!==""+r&&(u[i]=t[i]);return u;}},n.divide=function n(r,t){return void 0===t?function(t){return n(r,t);}:r/t;},n.drop=v,n.dropLast=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.slice(0,-r);},n.either=function n(r,t){return void 0===t?function(t){return n(r,t);}:function(n){return r(n)||t(n);};},n.endsWith=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.endsWith(r);},n.inc=function(n){return n+1;},n.equals=o,n.F=function(){return!1;},n.filter=t,n.find=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.find(r);},n.findIndex=function n(r,t){if(void 0===t)return function(t){return n(r,t);};for(var u=t.length,i=-1;++i<u;)if(r(t[i]))return i;return-1;},n.flatten=function n(r,t){t=void 0===t?[]:t;for(var u=0;u<r.length;u++)Array.isArray(r[u])?n(r[u],t):t.push(r[u]);return t;},n.flip=function(n){for(var r=[],t=arguments.length-1;t-->0;)r[t]=arguments[t+1];return function(n){return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];return 1===r.length?function(t){return n(t,r[0]);}:2===r.length?n(r[1],r[0]):void 0;};}(n);},n.forEach=function n(r,t){return void 0===t?function(t){return n(r,t);}:(l(r,t),t);},n.groupBy=function n(r,t){if(void 0===t)return function(t){return n(r,t);};for(var u={},i=0;i<t.length;i++){var e=t[i],o=r(e);u[o]||(u[o]=[]),u[o].push(e);}return u;},n.has=function n(r,t){return void 0===t?function(t){return n(r,t);}:void 0!==t[r];},n.head=function(n){return"string"==typeof n?n[0]||"":n[0];},n.identity=function(n){return n;},n.ifElse=function n(r,t,u){return void 0===t?function(t,u){return n(r,t,u);}:void 0===u?function(u){return n(r,t,u);}:function(n){return!0===("boolean"==typeof r?r:r(n))?t(n):u(n);};},n.is=function n(r,t){return void 0===t?function(t){return n(r,t);}:t instanceof r||t.constructor===r;},n.isNil=function(n){return void 0===n||null===n;},n.includes=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.includes(r);},n.indexBy=function n(r,t){if(void 0===t)return function(t){return n(r,t);};for(var u={},i=0,e;i<t.length;i++){e=t[i];u[r(e)]=e;}return u;},n.indexOf=function n(r,t){if(void 0===t)return function(t){return n(r,t);};for(var u=-1,i=t.length;++u<i;)if(t[u]===r)return u;return-1;},n.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?d(n,0,-1):[];},n.join=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.join(r);},n.lastIndexOf=function n(r,t){if(void 0===t)return function(t){return n(r,t);};var u=-1;return t.map(function(n,t){o(n,r)&&(u=t);}),u;},n.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1];},n.length=function(n){return n.length;},n.map=l,n.match=function n(r,t){if(void 0===t)return function(t){return n(r,t);};var u=t.match(r);return null===u?[]:u;},n.merge=s,n.modulo=function n(r,t){return void 0===t?function(t){return n(r,t);}:r%t;},n.multiply=function n(r,t){return void 0===t?function(t){return n(r,t);}:r*t;},n.none=function n(r,t){return void 0===t?function(t){return n(r,t);}:0===t.filter(r).length;},n.not=function(n){return!n;},n.omit=function n(r,t){if(1===arguments.length)return function(t){return n(r,t);};if(null!==t&&void 0!==t){var u="string"==typeof r?r=r.split(","):r,i={};for(var e in t)u.includes(e)||(i[e]=t[e]);return i;}},n.partialCurry=function(n,r){return void 0===r&&(r={}),function(t){return"Async"===e(n)||"Promise"===e(n)?new Promise(function(u,i){n(s(t,r)).then(u).catch(i);}):n(s(t,r));};},n.path=p,n.pathOr=h,n.pick=function n(r,t){if(1===arguments.length)return function(t){return n(r,t);};if(null!==t&&void 0!==t){for(var u="string"==typeof r?r.split(","):r,i={},e=0;e<u.length;)u[e]in t&&(i[u[e]]=t[u[e]]),e++;return i;}},n.pickAll=function n(r,t){if(1===arguments.length)return function(t){return n(r,t);};if(null!==t&&void 0!==t){for(var u="string"==typeof r?r.split(","):r,i={},e=0;e<u.length;)i[u[e]]=u[e]in t?t[u[e]]:void 0,e++;return i;}},n.pipe=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return i.apply(void 0,n.reverse());},n.pluck=function n(r,t){if(void 0===t)return function(t){return n(r,t);};var u=[];return l(function(n){void 0!==n[r]&&u.push(n[r]);},t),u;},n.prepend=function n(r,t){if(void 0===t)return function(t){return n(r,t);};if("string"==typeof t)return""+r+t;var u=t.concat();return u.unshift(r),u;},n.prop=function n(r,t){return void 0===t?function(t){return n(r,t);}:t[r];},n.propEq=function n(r,t,u){return void 0===t?function(t,u){return n(r,t,u);}:void 0===u?function(u){return n(r,t,u);}:u[r]===t;},n.range=g,n.reduce=y,n.reject=function n(r,u){return void 0===u?function(t){return n(r,t);}:t(function(n){return!r(n);},u);},n.repeat=function n(r,t){return void 0===t?function(t){return n(r,t);}:Array(t).fill(r);},n.replace=function n(r,t,u){return void 0===t?function(t,u){return n(r,t,u);}:void 0===u?function(u){return n(r,t,u);}:u.replace(r,t);},n.reverse=function(n){return n.concat().reverse();},n.sort=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.concat().sort(r);},n.sortBy=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.concat().sort(function(n,t){var u=r(n),i=r(t);return u<i?-1:u>i?1:0;});},n.split=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.split(r);},n.splitEvery=function n(r,t){if(void 0===t)return function(t){return n(r,t);};for(var u=r>1?r:1,i=[],e=0;e<t.length;)i.push(t.slice(e,e+=u));return i;},n.startsWith=function n(r,t){return void 0===t?function(t){return n(r,t);}:t.startsWith(r);},n.subtract=function n(r,t){return void 0===t?function(t){return n(r,t);}:r-t;},n.T=function(){return!0;},n.tap=function n(r,t){return void 0===t?function(t){return n(r,t);}:(r(t),t);},n.tail=function(n){return v(1,n);},n.take=function n(r,t){return void 0===t?function(t){return n(r,t);}:"string"==typeof t?t.slice(0,r):d(t,0,r);},n.takeLast=function n(r,t){if(void 0===t)return function(t){return n(r,t);};var u=t.length,i=r>u?u:r;return"string"==typeof t?t.slice(u-i):d(t,i=u-i,u);},n.test=function n(r,t){return void 0===t?function(t){return n(r,t);}:-1!==t.search(r);},n.times=function n(r,t){return void 0===t?function(t){return n(r,t);}:l(r,g(0,t));},n.toLower=function(n){return n.toLowerCase();},n.toUpper=function(n){return n.toUpperCase();},n.toString=function(n){return n.toString();},n.trim=function(n){return n.trim();},n.type=e,n.uniq=function(n){for(var r=-1,t=[],u;++r<n.length;){u=n[r];f(u,t)||t.push(u);}return t;},n.uniqWith=function n(r,t){if(1===arguments.length)return function(t){return n(r,t);};for(var i=-1,e=[],o=function(){var n=t[i];u(function(t){return r(n,t);},e)||e.push(n);};++i<t.length;)o();return e;},n.update=function n(r,t,u){return void 0===t?function(t,u){return n(r,t,u);}:void 0===u?function(u){return n(r,t,u);}:u.concat().fill(t,r,r+1);},n.values=function(n){var r=[];for(var t in n)r.push(n[t]);return r;},n.without=function(n,r){return y(function(r,t){return f(t,n)?r:r.concat(t);},[],r);},n.zip=function n(t,u){return void 0===u?function(r){return n(t,r);}:r(y)(function(n,r,t){return u[t]?n.concat([[r,u[t]]]):n;},[],t);};});