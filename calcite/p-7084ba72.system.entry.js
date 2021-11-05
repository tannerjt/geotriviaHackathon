var __awaiter=this&&this.__awaiter||function(t,e,a,i){function n(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function o(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i["throw"](t))}catch(t){r(t)}}function l(t){t.done?a(t.value):n(t.value).then(o,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,n&&(r=o[0]&2?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;if(n=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;n=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(o[0]===6&&a.label<r[1]){a.label=r[1];r=o;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(o);break}if(r[2])a.ops.pop();a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t];n=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-3c9923f1.system.js","./p-a7a7301d.system.js","./p-53caa311.system.js","./p-2a9b4a25.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,a,i,n,r,o,s,l,c,u;return{setters:[function(t){e=t.r;a=t.c;i=t.h;n=t.F;r=t.g},function(t){o=t.f;s=t.g;l=t.C},function(t){c=t.d},function(t){u=t.f},function(){}],execute:function(){var f={container:"container",searchIcon:"search-icon",clearButton:"clear-button"};var p={filterLabel:"Filter",clear:"Clear filter"};var m={search:"search",close:"x"};var d="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}.search-icon{display:-ms-flexbox;display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem;-webkit-box-shadow:0 2px 0 var(--calcite-ui-brand);box-shadow:0 2px 0 var(--calcite-ui-brand)}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";var b=250;var h=t("calcite_filter",function(){function t(t){var i=this;e(this,t);this.calciteFilterChange=a(this,"calciteFilterChange",7);this.disabled=false;this.empty=true;this.filter=c((function(t){var e=new RegExp(t,"ig");if(i.data.length===0){console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects");i.calciteFilterChange.emit([]);return}var a=function(t,e){var i=false;u(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(a(t,e)){i=true}}else if(e.test(t)){i=true}}));return i};var n=i.data.filter((function(t){return a(t,e)}));i.calciteFilterChange.emit(n)}),b);this.inputHandler=function(t){var e=t.target;i.empty=e.value==="";i.filter(e.value)};this.keyDownHandler=function(t){var e=t.key;if(e==="Escape"){i.clear()}};this.clear=function(){i.textInput.value="";i.empty=true;i.calciteFilterChange.emit(i.data);i.setFocus()}}t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){o(this.textInput);return[2]}))}))};t.prototype.render=function(){var t=this;var e=s(this.el)==="rtl";var a=this.disabled;return i(n,null,a?i("calcite-scrim",null):null,i("div",{class:f.container},i("label",{class:e?l.rtl:null},i("input",{"aria-label":this.intlLabel||p.filterLabel,disabled:this.disabled,onInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:function(e){t.textInput=e},type:"text",value:""}),i("div",{class:f.searchIcon},i("calcite-icon",{icon:m.search,scale:"s"}))),!this.empty?i("button",{"aria-label":this.intlClear||p.clear,class:f.clearButton,onClick:this.clear},i("calcite-icon",{icon:m.close})):null))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());h.style=d}}}));