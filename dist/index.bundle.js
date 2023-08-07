(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(81),o=n.n(a),r=n(645),c=n.n(r),i=n(667),s=n.n(i),d=new URL(n(32),n.b),l=new URL(n(391),n.b),u=c()(o()),p=s()(d),m=s()(l);u.push([e.id,"@font-face {\n    font-family: 'Kablammo';\n    src: url("+p+");\n}\n\n\nh1, h2 {\n    font-family: 'Kablammo';\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\nfooter a {\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n.footer-logo {\n    height: 2rem;\n}\n\n#content {\n    background: url("+m+") no-repeat center fixed;\n    background-size: cover;\n    height: 98vh;\n    width: 98vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#menu-item img {\n    height: 100px;\n    width: 100px;\n}\n\n\n",""]);const f=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},32:(e,t,n)=>{e.exports=n.p+"f8619bf76281e77a4626.ttf"},391:(e,t,n)=>{e.exports=n.p+"2a1e67f326edec4659a4.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"7525a97cafaf62584af3.jpg",t=n.p+"cb6a33124f7a4a2d86e4.jpg",a=n.p+"dc9ca45ac34bf1219d11.jpg",o=n.p+"fbd5c378107ad11811f4.jpg",r=n.p+"60143d7e251b3e23164c.jpg",c=n.p+"de571ba727854075efe2.jpg",i=n.p+"f07f298af4b5cc35c2da.jpg",s=n.p+"f098b82eb2edce35832b.jpg",d=n.p+"a52b4f97de33c0f942e4.jpg";let l=[];const u=(e,t,n,a)=>({type:e,name:t,description:n,picture:a}),p=u("Taco","Chicken Tacos","Chicken, Onion, Fresh Cilantro, Lime, and Salsa",e),m=u("Taco","Steak Tacos","Steak, Onion, Fresh Cilantro, Salsa",t),f=u("Taco","Shrimp Tacos","Crispy battered Shrimp, Pickled Onion, Fresh Cilantro, Lime",a),h=u("Taco","Crispy Birria Tacos","2 Layer Crispy Tacos with Melted Cheese, Birria, Onions, Fresh Cilantro, and served with Consomé",o),b=u("Meal","Taco Plate","3 Tacos served with Rice and Beans",r),v=u("Meal","Taco Salad","Crispy Tortilla, Choice of Meat, Rice, Beans, Cheese, Lettuce, Salsa, Guacamole",c),g=u("Side","Salsa","Spicy Chipotle Salsa, Served with Chips",i),C=u("Side","Guacamole","Served with Tortilla Chips",s),y=u("Drink","Bottled Soda","Assorted Flavors",d);l.push(p,m,f,h,b,v,g,C,y);const E=function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","contact");const n=document.createElement("h1");n.textContent="Contact Us";const a=document.createElement("div");a.setAttribute("class","contact-info");const o=document.createElement("div");o.setAttribute("class","address");const r=document.createElement("div");r.setAttribute("class","hours");const c=document.createElement("div");c.setAttribute("class","phone");const i=document.createElement("div");i.setAttribute("class","mail");const s=document.createElement("img");s.setAttribute("src","../src/images/icons/map-pin.svg");const d=document.createElement("img");d.setAttribute("src","../src/images/icons/clock.svg");const l=document.createElement("img");l.setAttribute("src","../src/images/icons/phone.svg");const u=document.createElement("img");u.setAttribute("src","../src/images/icons/mail.svg");const p=document.createElement("p");p.textContent="1071 Santa Rosa Plaza, Santa Rosa, CA 95401";const m=document.createElement("p");m.textContent="M-Th: 11am-10pm F-Sa: 11am-11pm Su: 12pm-9pm";const f=document.createElement("p");f.textContent="707-000-7777";const h=document.createElement("p");h.textContent="Message Us";const b=document.createElement("div"),v=document.createElement("iframe");v.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.096870292537!2d-122.71938722397569!3d38.43923137182571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808447ffdc4220bd%3A0x499818ef26fda11!2s1071%20Santa%20Rosa%20Plaza%2C%20Santa%20Rosa%2C%20CA%2095401!5e0!3m2!1sen!2sus!4v1691425917569!5m2!1sen!2sus"),v.setAttribute("width","600"),v.setAttribute("height","450"),v.setAttribute("style","border:0;"),v.setAttribute("allowfullscreen",""),v.setAttribute("loading","lazy"),v.setAttribute("referrerpolicy","no-referrer-when-downgrade"),o.append(s,p),r.append(d,m),c.append(l,f),i.append(u,h),b.appendChild(v),a.append(o,r,c,i,b),t.append(n,a),e.appendChild(t)};var x=n(379),A=n.n(x),w=n(795),S=n.n(w),T=n(569),j=n.n(T),k=n(565),M=n.n(k),R=n(216),I=n.n(R),P=n(589),B=n.n(P),L=n(426),F={};F.styleTagTransform=B(),F.setAttributes=M(),F.insert=j().bind(null,"head"),F.domAPI=S(),F.insertStyleElement=I(),A()(L.Z,F),L.Z&&L.Z.locals&&L.Z.locals,console.log("hello world and me"),function(){const e=document.body,t=document.createElement("header"),n=document.createElement("h2");n.textContent="Taco Delicioso",t.appendChild(n);const a=document.createElement("nav"),o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");o.setAttribute("class","home-button"),r.setAttribute("class","menu-button"),c.setAttribute("class","contact-button"),o.setAttribute("id","tab"),r.setAttribute("id","tab"),c.setAttribute("id","tab"),o.textContent="Home",r.textContent="Menu",c.textContent="Contact",a.appendChild(o),a.appendChild(r),a.appendChild(c),t.appendChild(a),e.insertAdjacentElement("afterbegin",t)}(),E(),function(){const e=document.body,t=document.createElement("footer"),n=document.createElement("a");n.setAttribute("href","https://github.com/T-Khoury/Restaurant-Page");const a=document.createElement("img");a.setAttribute("src","../src/images/icons/github-mark-white.svg"),a.setAttribute("class","footer-logo"),n.textContent="Created by T-Khoury as part of The Odin Project",n.appendChild(a),t.appendChild(n),e.insertAdjacentElement("beforeend",t)}(),document.querySelectorAll("#tab").forEach((e=>{e.addEventListener("click",(e=>{!function(e){switch(document.getElementById("content").replaceChildren(),console.log(e.target.className),e.target.className){case"home-button":!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("p");t.setAttribute("id","home"),n.textContent="Delicious and Authentic Tacos!",a.textContent="Treat yourself today!",t.appendChild(n),t.appendChild(a),e.appendChild(t)}();break;case"menu-button":!function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","menu");const n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");l.map((e=>function(e){const t=document.createElement("div");t.setAttribute("id","menu-item"),t.className=e.type;const n=document.createElement("h2"),a=document.createElement("p"),o=document.createElement("img");return n.textContent=e.name,a.textContent=e.description,o.src=e.picture,t.append(n,a,o),t}(e))).forEach((e=>{switch(e.getAttribute("class")){case"Taco":n.appendChild(e);break;case"Meal":a.appendChild(e);break;case"Side":o.appendChild(e);break;case"Drink":r.appendChild(e);break;default:console.log("oops")}})),t.append(n,a,o,r),e.appendChild(t)}();break;case"contact-button":E()}}(e)}))}))})()})();