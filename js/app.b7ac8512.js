(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==o[i]&&(r=!1)}r&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},s={app:0},o={app:0},n=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"024fe7e2","chunk-53ce9fe4":"1ae22bb6"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,"chunk-53ce9fe4":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"b70d75d8","chunk-53ce9fe4":"75bb3f3d"}[t]+".css",o=l.p+r,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var c=n[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===o))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],d=c.getAttribute("data-href");if(d===r||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete s[t],f.parentNode.removeChild(f),a(n)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,a[1](u)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0748":function(t,e,a){t.exports=a.p+"img/logo.cab8b0ae.png"},"1a1c":function(t,e,a){},"1b9f":function(t,e,a){t.exports=a.p+"img/dark-logo.6c884420.png"},"25f3":function(t,e,a){},"46a3":function(t,e,a){t.exports=a.p+"img/DP-profile-bg.ee7d17ad.png"},4913:function(t,e,a){"use strict";a("1a1c")},"49d8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"antialiased font-mono flex relative",class:[t.dark?"dark bg-dark-black":"bg-white"],attrs:{id:"app"}},[a("loader"),a("contact"),a("dark"),a("div",{staticClass:"flex flex-col md:border-t items-center md:shadow-none fixed md:flex-row md:justify-between overflow-hidden",class:[t.dark?"bg-dark-black shadow-white-r border-gray-600":"bg-white shadow-black-r border-gray-300 "],attrs:{id:"nav"}},[a("router-link",{staticClass:"logo md:mr-4",attrs:{to:"/"}},[a("img",{attrs:{src:[t.dark?t.logo[1]:t.logo[0]],alt:"logo"}})]),a("div",{staticClass:"nav-link md:flex md:justify-center md:items-center text-dark-black dark:text-white"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"}})]),t._v(" Home ")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 23.59375 24 C 23.515625 23.863281 23.550781 23.675781 23.4375 23.5625 C 23.058594 23.183594 22.523438 23 22 23 C 21.476563 23 20.941406 23.183594 20.5625 23.5625 C 20.449219 23.675781 20.484375 23.863281 20.40625 24 L 11.59375 24 C 11.515625 23.863281 11.550781 23.675781 11.4375 23.5625 C 11.058594 23.183594 10.523438 23 10 23 C 9.476563 23 8.941406 23.183594 8.5625 23.5625 C 8.449219 23.675781 8.484375 23.863281 8.40625 24 L 5 24 Z M 12 10 C 9.800781 10 8 11.800781 8 14 C 8 15.113281 8.476563 16.117188 9.21875 16.84375 C 7.886719 17.746094 7 19.285156 7 21 L 9 21 C 9 19.34375 10.34375 18 12 18 C 13.65625 18 15 19.34375 15 21 L 17 21 C 17 19.285156 16.113281 17.746094 14.78125 16.84375 C 15.523438 16.117188 16 15.113281 16 14 C 16 11.800781 14.199219 10 12 10 Z M 12 12 C 13.117188 12 14 12.882813 14 14 C 14 15.117188 13.117188 16 12 16 C 10.882813 16 10 15.117188 10 14 C 10 12.882813 10.882813 12 12 12 Z M 19 13 L 19 15 L 25 15 L 25 13 Z M 19 17 L 19 19 L 25 19 L 25 17 Z"}})]),t._v(" About ")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/projects"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"}})]),t._v(" Projects ")])],1)],1),a("div",{staticClass:"container mx-auto"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"z-50",attrs:{id:"contact"}},[a("section",{staticClass:"flex flex-col justify-end items-end",class:t.containerClass},[a("p",{staticClass:"p-2 max-w-max rounded-full shadow hover:shadow-md cursor-pointer border hover:opacity-90 z-10",class:[t.dark?"bg-white":"bg-dark-black"],on:{click:function(e){return t.showFrom()}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:[t.dark?"black":"white"],fill:[t.dark?"black":"white"],viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M 16 5 C 12.144531 5 9 8.144531 9 12 C 9 14.410156 10.230469 16.550781 12.09375 17.8125 C 8.527344 19.34375 6 22.882813 6 27 L 8 27 C 8 24.109375 9.527344 21.59375 11.8125 20.1875 C 12.484375 21.835938 14.121094 23 16 23 C 17.878906 23 19.515625 21.835938 20.1875 20.1875 C 22.472656 21.59375 24 24.109375 24 27 L 26 27 C 26 22.882813 23.472656 19.34375 19.90625 17.8125 C 21.769531 16.550781 23 14.410156 23 12 C 23 8.144531 19.855469 5 16 5 Z M 16 7 C 18.773438 7 21 9.226563 21 12 C 21 14.773438 18.773438 17 16 17 C 13.226563 17 11 14.773438 11 12 C 11 9.226563 13.226563 7 16 7 Z M 16 19 C 16.820313 19 17.601563 19.117188 18.34375 19.34375 C 17.996094 20.308594 17.089844 21 16 21 C 14.910156 21 14.003906 20.308594 13.65625 19.34375 C 14.398438 19.117188 15.179688 19 16 19 Z"}})])]),a("div",{staticClass:"text-black rounded-md -translate-y-14 rounded-tr-4xl border border-gray-200 dark:border-gray-700 mt-1 dark:bg-dark-black w-104 bg-white p-4 transform z-0",class:[t.formShow?"clip-active visible shadow-md":"clip-remove invisible"],attrs:{id:"form"}},[a("h1",{staticClass:"pb-3 border-b dark:text-white text-lg lg:text-base border-gray-100 font-semibold transform"},[t._v(" Contact Me ")]),a("form",{staticClass:"mt-10",class:t.formClass,attrs:{method:"POST",name:"contact"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex-1 mr-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"block py-2 px-1 border-b-2 w-full rounded",class:[t.dark?"bg-gray-500 border-gray-300 text-white":"border-gray-300 text-gray-800 bg-gray-50"],attrs:{id:"name",type:"text",name:"name",autocomplete:"off"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),a("label",{attrs:{for:"name"}},[t._v(" Name ")])]),a("div",{staticClass:"flex-1 ml-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"block w-full py-2 px-1 border-b-2 rounded",class:[t.dark?"bg-gray-500 border-gray-300 text-white":"border-gray-300 text-gray-800 bg-gray-50"],attrs:{id:"email",type:"email",name:"email",autocomplete:"off"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v(" E-mail ")])])]),a("div",{staticClass:"mt-10",class:[t.dark?"white-label":""]},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"block w-full py-2 px-1 border-b-2 rounded",class:[t.dark?"bg-gray-500 border-gray-300 text-white":"border-gray-300 text-gray-800 bg-gray-50"],staticStyle:{"max-height":"140px","min-height":"120px"},attrs:{name:"message",id:"message"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}}),a("label",{attrs:{for:"msg"}},[t._v(" Message ")])]),a("button",{staticClass:"py-2 px-6 mt-10 rounded font-medium uppercase focus:outline-none hover:shadow",class:[t.dark?"hover:bg-gray-300 bg-white text-dark-black":"hover:bg-gray-700 text-white bg-dark-black"],attrs:{type:"submit"},on:{submit:t.handleSubmit}},[t._v(" Send ")])])])])])},i=[],l=(a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),{data:function(){return{formShow:!1,formClass:"",containerClass:"",formData:{name:"",email:"",message:""}}},mounted:function(){this.containerClass="w-16"},methods:{showFrom:function(){var t=this;if(this.formShow=!this.formShow,this.formShow)return this.formClass="block",this.containerClass="";setTimeout((function(){return t.formClass="hidden",t.containerClass="w-16"}),300)},handleSubmit:function(t){t.preventDefault();var e=new FormData(this.formData);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(e).toString()}).then((function(){return console.log("Form successfully submitted")})).catch((function(t){return alert(t)}))}}}),c=l,d=(a("4913"),a("2877")),u=Object(d["a"])(c,n,i,!1,null,"28bb62cc",null),f=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"z-50",attrs:{id:"dark"}},[a("p",{staticClass:"text-black p-2 max-w-max rounded-full shadow hover:shadow-md cursor-pointer border hover:opacity-90 z-10",class:[t.dark?"bg-white":"bg-dark-black"],on:{click:function(e){return t.$root.switchDark()}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:[t.dark?"black":"white"],fill:[t.dark?"black":"white"],viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z"}})])])])},h=[],C={},b=C,p=(a("7998"),Object(d["a"])(b,m,h,!1,null,"fb652b82",null)),v=p.exports,g=a("0748"),L=a.n(g),w=a("1b9f"),k=a.n(w),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loader?a("div",{staticClass:"w-full h-screen top-0 right-0 bottom-0 left-0 fixed z-index-full overflow-hidden"},[t._m(0)]):t._e()},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative bg-white dark:bg-dark-black h-full flex items-center justify-center"},[a("div",{staticClass:"spinner-box"},[a("div",{staticClass:"configure-border-1 relative"},[a("div",{staticClass:"configure-core"}),a("div",{staticClass:"configure-border-2"},[a("div",{staticClass:"configure-core"})])])])])}],_={beforeMount:function(){var t=this,e=Math.round(performance.now());setTimeout((function(){return t.loader=!1}),e)},data:function(){return{loader:!0}}},M=_,j=(a("a071"),Object(d["a"])(M,x,y,!1,null,null,null)),S=j.exports,D={components:{Contact:f,Dark:v,Loader:S},data:function(){return{logo:[L.a,k.a]}}},z=D,Z=(a("5c0b"),Object(d["a"])(z,s,o,!1,null,null,null)),E=Z.exports,O=a("8c4f"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row ml-16 md:ml-0 md:flex-col-reverse justify-center items-center min-h-screen relative",class:[t.dark?"bg-dark-black":"bg-white"],attrs:{id:"home"}},[r("div",{staticClass:"flex-1 z-10 flex-center md:transform md:-translate-y-8 ml-10 md:ml-0"},[r("div",{staticClass:"text-4xl lg:text-2xl sm:text-lg text-dark-black dark:text-white"},[r("h1",{staticClass:"text-7xl font-bold lg:text-5xl sm:text-3xl sm:font-normal mb-1"},[t._v(" HEY, ")]),t._m(0),r("p",[t._v("I’m a Full-Stack Web Developer")]),t._m(1),r("social")],1)]),r("div",{staticClass:"flex-1 flex-center relative overflow-hidden"},[r("div",{staticClass:"z-0"},[r("div",{staticClass:"profile sm:profile shadow",class:[t.dark?"profile-bg hover:shadow-white-md":"bg-gray-100 hover:shadow-md"]},[r("img",{staticClass:"object-cover",attrs:{src:a("46a3"),alt:""}})])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" My name is "),a("span",{staticClass:"text-5xl sm:text-2xl lg:text-3xl"},[t._v(" Aashiq Hasnat ")]),t._v(" , ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" with a love for "),a("span",{staticClass:"laravel"},[t._v("Laravel")]),t._v(" & "),a("span",{staticClass:"vue"},[t._v("Vue")]),t._v(" . ")])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4 social-link"},[a("ul",{staticClass:"flex"},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/ashik-hasnat-a1ab0b1a7/",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:[t.dark?"white":"black"]}},[a("path",{attrs:{d:"M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"}})]),a("p",{staticClass:"text-gray-900 dark:text-white"},[t._v("LinkedIn")])])]),a("li",[a("a",{attrs:{href:"https://github.com/Nafario",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",stroke:[t.dark?"black":"white"],fill:[t.dark?"white":"black"]}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"}})]),a("p",{staticClass:"text-gray-900 dark:text-white"},[t._v("Github")])])]),a("li",[a("a",{attrs:{href:"https://twitter.com/AashikHasnat",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",stroke:[t.dark?"black":"white"],fill:[t.dark?"white":"black"]}},[a("path",{attrs:{d:"M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z"}})]),a("p",{staticClass:"text-gray-900 dark:text-white"},[t._v("Twitter")])])]),a("li",[a("a",{attrs:{href:"https://dev.to/nafario",target:"_blank"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:[t.dark?"white":"black"]}},[a("path",{attrs:{d:"M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.654 21 12 19.654 12 18 L 12 14 C 12 12.346 10.654 11 9 11 L 6 11 z M 16 11 C 14.897 11 14 11.897 14 13 L 14 19 C 14 20.103 14.897 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.691406 11 L 21.775391 20.025391 C 21.907391 20.595391 22.415 21 23 21 C 23.585 21 24.092609 20.595391 24.224609 20.025391 L 26.308594 11 L 24.255859 11 L 23 16.439453 L 21.744141 11 L 19.691406 11 z M 8 13 L 9 13 C 9.552 13 10 13.448 10 14 L 10 18 C 10 18.552 9.552 19 9 19 L 8 19 L 8 13 z"}})]),a("p",{staticClass:"text-gray-900 dark:text-white"},[t._v("DEV")])])])])])},B=[],A={},N=A,H=(a("b7cb"),Object(d["a"])(N,T,B,!1,null,"9e980dde",null)),F=H.exports,I={components:{Social:F},name:"Home"},q=I,J=(a("a2db"),Object(d["a"])(q,P,$,!1,null,"3d490792",null)),U=J.exports;r["a"].use(O["a"]);var V=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return a.e("chunk-53ce9fe4").then(a.bind(null,"acca"))}}],G=new O["a"]({mode:"history",base:"/",routes:V}),K=G;a("ba8c");r["a"].config.productionTip=!1,r["a"].mixin({computed:{dark:function(){return this.$root.darkMode}}}),new r["a"]({router:K,created:function(){return"true"==localStorage.getItem("theme")?this.darkMode=!0:"false"==localStorage.getItem("theme")?this.darkMode=!1:this.darkMode=!0},data:function(){return{darkMode:null}},methods:{switchDark:function(){this.darkMode=!this.darkMode,localStorage.setItem("theme",this.darkMode)}},render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},7998:function(t,e,a){"use strict";a("7f5e")},"7f5e":function(t,e,a){},"9c0c":function(t,e,a){},a071:function(t,e,a){"use strict";a("c25f")},a2db:function(t,e,a){"use strict";a("49d8")},b7cb:function(t,e,a){"use strict";a("25f3")},ba8c:function(t,e,a){},c25f:function(t,e,a){}});
//# sourceMappingURL=app.b7ac8512.js.map