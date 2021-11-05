var __awaiter=this&&this.__awaiter||function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function r(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n["throw"](t))}catch(t){o(t)}}function c(t){t.done?i(t.value):a(t.value).then(r,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(o=r[0]&2?a["return"]:r[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;if(a=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;a=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(r[0]===6&&i.label<o[1]){i.label=o[1];o=r;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(r);break}if(o[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t];a=0}finally{n=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,n=e.length,a=t.length;i<n;i++,a++)t[a]=e[i];return t};System.register(["./p-3c9923f1.system.js","./p-53caa311.system.js","./p-2a9b4a25.system.js","./p-a7a7301d.system.js","./p-95dfb659.system.js","./p-e220ebdc.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,i,n,a,o,r,s,c,l,p,m,u,d,f,b,h,v,x,g;return{setters:[function(t){e=t.r;i=t.c;n=t.h;a=t.H;o=t.g},function(t){r=t.a;s=t.S;c=t.d},function(t){l=t.i;p=t.f},function(t){m=t.n;u=t.g;d=t.d;f=t.C},function(t){b=t.g},function(t){h=t.u;v=t.c;x=t.C},function(t){g=t.g}],execute:function(){function y(t,e){var i=-1,n=t==null?0:t.length,a=Array(n);while(++i<n){a[i]=e(t[i],i,t)}return a}var w=1/0;var k=s?s.prototype:undefined,I=k?k.toString:undefined;function C(t){if(typeof t=="string"){return t}if(l(t)){return y(t,C)+""}if(r(t)){return I?I.call(t):""}var e=t+"";return e=="0"&&1/t==-w?"-0":e}function D(t){return t==null?"":C(t)}var _=/[\\^$.*+?()[\]{}|]/g,E=RegExp(_.source);function S(t){t=D(t);return t&&E.test(t)?t.replace(_,"\\$&"):t}var A=function(t,e){var i=S(e);var n=new RegExp(i,"ig");if(t.length===0){console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects")}var a=function(t,e){var i;if((i=t)===null||i===void 0?void 0:i.constant){return true}var n=false;p(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(a(t,e)){n=true}}else if(e.test(t)){n=true}}));return n};var o=t.filter((function(t){return a(t,n)}));return o};var H="CALCITE-COMBOBOX-ITEM";var L="CALCITE-COMBOBOX-ITEM-GROUP";var M=H+", "+L;var z="bottom-leading";function O(t){var e,i;var n=(e=t.parentElement)===null||e===void 0?void 0:e.closest(M);var a=(i=n===null||n===void 0?void 0:n.parentElement)===null||i===void 0?void 0:i.closest(M);return[n,a].filter((function(t){return t}))}function T(t){var e;return((e=t.ancestors)===null||e===void 0?void 0:e.filter((function(t){return t.nodeName==="CALCITE-COMBOBOX-ITEM"})))||[]}function F(t){return m(t.querySelectorAll("calcite-combobox-item"))}function P(t){var e=m(t.querySelectorAll("calcite-combobox-item"));return e.filter((function(t){return t.selected})).length>0}function j(t){var e=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return e.snapshotLength}var B="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:0 var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input{-ms-flex-positive:1;flex-grow:1;font-family:inherit;padding:0;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:inherit;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-bottom:0;margin-top:0;padding:0}.wrapper--active .input-single{cursor:text}.input--hidden{width:0;min-width:0;opacity:0;pointer-events:none}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:-ms-flexbox;display:flex}.input-wrap--single{-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.label{padding:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;pointer-events:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--spaced{padding-top:0;padding-bottom:0;padding-left:var(--calcite-combobox-item-spacing-unit-l);padding-right:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:1rem}.popper-container{width:100%;display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.popper-container--active{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-dropdown-width)}.list{display:block;margin:0;padding:0}.list--hide{height:0;overflow:hidden}.chip{margin-right:var(--calcite-combobox-item-spacing-unit-s);margin-bottom:var(--calcite-combobox-item-spacing-unit-s);max-width:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}.chip--rtl{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-l)}.chip--rtl:last-child{margin-left:0}.item{display:block}";var N=function(t){return t.tagName===L};var R=t("calcite_combobox",function(){function t(t){var n=this;e(this,t);this.calciteLookupChange=i(this,"calciteLookupChange",7);this.calciteComboboxChange=i(this,"calciteComboboxChange",7);this.calciteComboboxFilterChange=i(this,"calciteComboboxFilterChange",7);this.calciteComboboxChipDismiss=i(this,"calciteComboboxChipDismiss",7);this.calciteComboboxOpen=i(this,"calciteComboboxOpen",7);this.calciteComboboxClose=i(this,"calciteComboboxClose",7);this.active=false;this.disabled=false;this.maxItems=0;this.overlayPositioning="absolute";this.selectionMode="multi";this.scale="m";this.items=[];this.groupItems=[];this.selectedItems=[];this.visibleItems=[];this.hideList=!this.active;this.activeItemIndex=-1;this.activeChipIndex=-1;this.activeDescendant="";this.text="";this.open=this.active;this.maxScrollerHeight=0;this.textInput=null;this.observer=null;this.guid=g();this.inputHeight=0;this.ignoreSelectedEventsFlag=false;this.activeTransitionProp="opacity";this.keydownHandler=function(t){var e=b(t.key,u(n.el));switch(e){case"Tab":n.activeChipIndex=-1;n.activeItemIndex=-1;if(n.allowCustomValues&&n.text){n.addCustomChip(n.text,true);t.preventDefault()}else{n.active=false}break;case"ArrowLeft":n.previousChip();break;case"ArrowRight":n.nextChip();break;case"ArrowUp":t.preventDefault();n.active=true;n.shiftActiveItemIndex(-1);break;case"ArrowDown":t.preventDefault();n.active=true;n.shiftActiveItemIndex(1);break;case"Home":n.active=true;n.updateActiveItemIndex(0);break;case"End":n.active=true;n.updateActiveItemIndex(n.visibleItems.length-1);break;case"Escape":n.active=false;break;case"Enter":if(n.activeItemIndex>-1){n.toggleSelection(n.visibleItems[n.activeItemIndex])}else if(n.activeChipIndex>-1){n.removeActiveChip()}else if(n.allowCustomValues&&n.text){n.addCustomChip(n.text,true)}break;case"Delete":case"Backspace":if(n.activeChipIndex>-1){n.removeActiveChip()}else if(!n.text&&n.isMulti()){n.removeLastChip()}break;default:if(!n.active){n.setFocus()}break}};this.toggleCloseEnd=function(){n.hideList=true;n.el.removeEventListener("calciteComboboxClose",n.toggleCloseEnd)};this.toggleOpenEnd=function(){n.hideList=false;n.el.removeEventListener("calciteComboboxOpen",n.toggleOpenEnd)};this.transitionEnd=function(t){if(t.propertyName===n.activeTransitionProp){n.active?n.calciteComboboxOpen.emit():n.calciteComboboxClose.emit()}};this.setMaxScrollerHeight=function(){if(n.active){n.maxScrollerHeight=n.getMaxScrollerHeight(n.getCombinedItems())}};this.calciteChipDismissHandler=function(t,e){n.active=false;var i=n.items.find((function(t){return t===e}));if(i){n.toggleSelection(i,false)}n.calciteComboboxChipDismiss.emit(t.detail)};this.setFocusClick=function(){n.setFocus()};this.setInactiveIfNotContained=function(t){var e=t.composedPath();if(!n.active||e.includes(n.el)||e.includes(n.referenceEl)){return}if(n.allowCustomValues&&n.text){n.addCustomChip(n.text)}if(n.selectionMode==="single"){if(n.textInput){n.textInput.value=""}n.text="";n.filterItems("");n.updateActiveItemIndex(-1)}n.active=false};this.setMenuEl=function(t){n.menuEl=t};this.setListContainerEl=function(t){n.listContainerEl=t};this.setReferenceEl=function(t){n.referenceEl=t};this.inputHandler=function(t){var e=t.target.value;n.text=e;n.filterItems(e);if(e){n.activeChipIndex=-1}};this.filterItems=function(){var t=function(t,e){return t&&e.some((function(e){var i=e.label,n=e.value;if(N(t)){return n===t.label||n===t.label}return n===t.textLabel||n===t.value||i===t.textLabel||i===t.value}))};return c((function(e){var i=A(n.data,e);var a=n.getCombinedItems();a.forEach((function(e){var n=!t(e,i);e.hidden=n;var a=e.ancestors,o=a[0],r=a[1];if(t(o,i)||t(r,i)){e.hidden=false}if(!n){e.ancestors.forEach((function(t){return t.hidden=false}))}}));n.visibleItems=n.getVisibleItems();n.calciteComboboxFilterChange.emit({visibleItems:__spreadArray([],n.visibleItems),text:e})}),100)}();this.internalCalciteLookupChangeEvent=function(){n.calciteLookupChange.emit(n.selectedItems)};this.emitCalciteLookupChange=c(this.internalCalciteLookupChangeEvent,0);this.internalComboboxChangeEvent=function(){var t=n.selectedItems;n.calciteComboboxChange.emit({selectedItems:t})};this.emitComboboxChange=c(this.internalComboboxChangeEvent,0);this.updateItems=function(){n.items=n.getItems();n.groupItems=n.getGroupItems();n.data=n.getData();n.selectedItems=n.getSelectedItems();n.visibleItems=n.getVisibleItems();n.needsIcon=n.getNeedsIcon();if(!n.allowCustomValues){n.setMaxScrollerHeight()}};this.comboboxFocusHandler=function(){n.active=true;n.textInput.focus()};this.comboboxBlurHandler=function(t){n.setInactiveIfNotContained(t)}}t.prototype.activeHandler=function(t,e){var i=this;if(e&&!t){this.el.addEventListener("calciteComboboxClose",this.toggleCloseEnd);this.open=false}else if(!e&&t){this.el.addEventListener("calciteComboboxOpen",this.toggleOpenEnd);requestAnimationFrame((function(){i.reposition();i.setMaxScrollerHeight();i.open=true}))}this.reposition();this.setMaxScrollerHeight()};t.prototype.maxItemsHandler=function(){this.setMaxScrollerHeight()};t.prototype.documentClickHandler=function(t){this.setInactiveIfNotContained(t)};t.prototype.calciteComboboxItemChangeHandler=function(t){if(this.ignoreSelectedEventsFlag){return}var e=t.target;this.toggleSelection(e,e.selected)};t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,n;return __generator(this,(function(a){t=this,e=t.popper,i=t.menuEl;n=this.getModifiers();e?h({el:i,modifiers:n,placement:z,popper:e}):this.createPopper();return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){this.active=true;(t=this.textInput)===null||t===void 0?void 0:t.focus();this.activeChipIndex=-1;this.activeItemIndex=-1;return[2]}))}))};t.prototype.connectedCallback=function(){{this.observer=new MutationObserver(this.updateItems)}this.createPopper()};t.prototype.componentWillLoad=function(){this.updateItems()};t.prototype.componentDidLoad=function(){var t;(t=this.observer)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true})};t.prototype.componentDidRender=function(){if(this.el.offsetHeight!==this.inputHeight){this.reposition();this.inputHeight=this.el.offsetHeight}};t.prototype.disconnectedCallback=function(){var t;(t=this.observer)===null||t===void 0?void 0:t.disconnect();this.destroyPopper()};t.prototype.textHandler=function(){this.updateActiveItemIndex(-1)};t.prototype.getModifiers=function(){var t={name:"flip",enabled:true};t.options={fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]};return[t]};t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.menuEl,i=t.referenceEl,n=t.overlayPositioning;var a=this.getModifiers();this.popper=v({el:e,modifiers:a,overlayPositioning:n,placement:z,referenceEl:i})};t.prototype.destroyPopper=function(){var t=this.popper;if(t){t.destroy()}this.popper=null};t.prototype.getMaxScrollerHeight=function(t){var e=this;var i=this.maxItems;var n=0;var a=0;t.forEach((function(t){if(n<i&&i>0){var o=e.calculateSingleItemHeight(t);if(o>0){a+=o;n++}}}));return a};t.prototype.calculateSingleItemHeight=function(t){var e=t.offsetHeight;var i=t.querySelectorAll(M);i.forEach((function(t){e-=t.offsetHeight}));return e};t.prototype.getCombinedItems=function(){return __spreadArray(__spreadArray([],this.groupItems),this.items)};t.prototype.toggleSelection=function(t,e){if(e===void 0){e=!t.selected}if(!t){return}if(this.isMulti()){t.selected=e;this.updateAncestors(t);this.selectedItems=this.getSelectedItems();this.emitCalciteLookupChange();this.emitComboboxChange();this.resetText();this.textInput.focus();this.filterItems("")}else{this.ignoreSelectedEventsFlag=true;this.items.forEach((function(e){return e.selected=e===t}));this.ignoreSelectedEventsFlag=false;this.selectedItems=this.getSelectedItems();this.emitComboboxChange();this.textInput.value=t.textLabel;this.active=false;this.updateActiveItemIndex(-1);this.resetText();this.filterItems("")}};t.prototype.updateAncestors=function(t){if(this.selectionMode!=="ancestors"){return}var e=T(t);var i=F(t);if(t.selected){e.forEach((function(t){t.selected=true}))}else{i.forEach((function(t){return t.selected=false}));__spreadArray([],e).forEach((function(t){if(!P(t)){t.selected=false}}))}};t.prototype.getVisibleItems=function(){return this.items.filter((function(t){return!t.hidden}))};t.prototype.getSelectedItems=function(){var t=this;return!this.isMulti()?[this.items.find((function(t){return t.selected}))]:this.items.filter((function(e){return e.selected&&(t.selectionMode!=="ancestors"||!P(e))})).sort((function(e,i){var n=t.selectedItems.indexOf(e);var a=t.selectedItems.indexOf(i);if(n>-1&&a>-1){return n-a}return a-n}))};t.prototype.getData=function(){return this.items.map((function(t){return{constant:t.constant,value:t.value,label:t.textLabel,guid:t.guid}}))};t.prototype.getNeedsIcon=function(){return this.selectionMode==="single"&&this.items.some((function(t){return t.icon}))};t.prototype.resetText=function(){this.textInput.value="";this.text=""};t.prototype.getItems=function(){var t=Array.from(this.el.querySelectorAll(H));return t.filter((function(t){return!t.disabled}))};t.prototype.getGroupItems=function(){return Array.from(this.el.querySelectorAll(L))};t.prototype.addCustomChip=function(t,e){var i=this.items.find((function(e){return e.textLabel===t}));if(i){this.toggleSelection(i,true)}else{var n=document.createElement(H);n.value=t;n.textLabel=t;n.guid=g();n.selected=true;this.el.appendChild(n);this.resetText();if(e){this.setFocus()}this.updateItems();this.filterItems("");this.emitCalciteLookupChange();this.emitComboboxChange()}};t.prototype.removeActiveChip=function(){this.toggleSelection(this.selectedItems[this.activeChipIndex],false);this.setFocus()};t.prototype.removeLastChip=function(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],false);this.setFocus()};t.prototype.previousChip=function(){if(this.text){return}var t=this.selectedItems.length-1;var e=this.activeChipIndex;this.activeChipIndex=e===-1?t:Math.max(e-1,0);this.updateActiveItemIndex(-1);this.focusChip()};t.prototype.nextChip=function(){if(this.text||this.activeChipIndex===-1){return}var t=this.selectedItems.length-1;var e=this.activeChipIndex+1;if(e>t){this.activeChipIndex=-1;this.setFocus()}else{this.activeChipIndex=e;this.focusChip()}this.updateActiveItemIndex(-1)};t.prototype.focusChip=function(){var t;var e=(t=this.selectedItems[this.activeChipIndex])===null||t===void 0?void 0:t.guid;var i=this.referenceEl.querySelector("#chip-"+e);i===null||i===void 0?void 0:i.setFocus()};t.prototype.shiftActiveItemIndex=function(t){var e=this.visibleItems.length;var i=(this.activeItemIndex+e+t)%e;this.updateActiveItemIndex(i);var n=this.visibleItems[this.activeItemIndex];var a=this.calculateSingleItemHeight(n);var o=this.listContainerEl,r=o.offsetHeight,s=o.scrollTop;if(r+s<n.offsetTop+a){this.listContainerEl.scrollTop=n.offsetTop-r+a}else if(n.offsetTop<s){this.listContainerEl.scrollTop=n.offsetTop}};t.prototype.updateActiveItemIndex=function(t){this.activeItemIndex=t;var e=null;this.visibleItems.forEach((function(i,n){if(n===t){i.active=true;e=i.guid}else{i.active=false}}));this.activeDescendant=e;if(this.activeItemIndex>-1){this.activeChipIndex=-1;this.textInput.focus()}};t.prototype.isMulti=function(){return this.selectionMode!=="single"};t.prototype.renderChips=function(){var t=this;var e=this,i=e.activeChipIndex,a=e.scale,o=e.selectionMode,r=e.el;var s=u(r);return this.selectedItems.map((function(e,r){var c={chip:true,"chip--active":i===r,"chip--rtl":s==="rtl"};var l=__spreadArray([],T(e)).reverse();var p=__spreadArray(__spreadArray([],l),[e]).map((function(t){return t.textLabel}));var m=o!=="ancestors"?e.textLabel:p.join(" / ");return n("calcite-chip",{"aria-label":m,class:c,dismissLabel:"remove tag",dismissible:true,icon:e.icon,id:"chip-"+e.guid,key:e.textLabel,onCalciteChipDismiss:function(i){return t.calciteChipDismissHandler(i,e)},scale:a,title:m,value:e.value},m)}))};t.prototype.renderInput=function(){var t=this;var e=this,i=e.active,a=e.disabled,o=e.placeholder,r=e.selectionMode,s=e.needsIcon,c=e.label,l=e.selectedItems;var p=r==="single";var m=l[0];var u=!i&&p&&!!m;return n("span",{class:{"input-wrap":true,"input-wrap--single":p}},u&&n("span",{class:{label:true,"label--spaced":s},key:"label",onFocus:this.comboboxFocusHandler,tabindex:"0"},m.textLabel),n("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":g,"aria-label":c,class:{input:true,"input--transparent":this.activeChipIndex>-1,"input--single":p,"input--hidden":u,"input--icon":p&&s},disabled:a,id:g+"-input",key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:o,ref:function(e){return t.textInput=e},type:"text"}))};t.prototype.renderListBoxOptions=function(){return this.visibleItems.map((function(t){return n("li",{"aria-selected":(!!t.selected).toString(),id:t.guid,role:"option",tabindex:"-1"},t.textLabel)}))};t.prototype.renderPopperContainer=function(){var t;var e=this,i=e.active,a=e.maxScrollerHeight,o=e.setMenuEl,r=e.setListContainerEl,s=e.hideList,c=e.open;var l=(t={"list-container":true},t[x.animation]=true,t[x.animationActive]=i,t);var p={maxHeight:a>0?a+"px":""};return n("div",{"aria-hidden":"true",class:{"popper-container":true,"popper-container--active":c},ref:o},n("div",{class:l,onTransitionEnd:this.transitionEnd,ref:r,style:p},n("ul",{class:{list:true,"list--hide":s}},n("slot",null))))};t.prototype.renderIconStart=function(){var t=this,e=t.selectionMode,i=t.needsIcon,a=t.selectedItems;var o=a[0];return e==="single"&&i&&n("span",{class:"icon-start"},(o===null||o===void 0?void 0:o.icon)&&n("calcite-icon",{class:"selected-icon",icon:o.icon,scale:"s"}))};t.prototype.renderIconEnd=function(){return this.selectionMode==="single"&&n("span",{class:"icon-end"},n("calcite-icon",{icon:"chevron-down",scale:"s"}))};t.prototype.render=function(){var t=this,e=t.guid,i=t.open,o=t.label;var r=this.selectionMode==="single";var s=e+"-label";return n(a,{onKeyDown:this.keydownHandler},n("div",{"aria-autocomplete":"list","aria-expanded":i.toString(),"aria-haspopup":"listbox","aria-labelledby":s,"aria-owns":e,class:{wrapper:true,"wrapper--active":i,"wrapper--single":r},onClick:this.setFocusClick,ref:this.setReferenceEl,role:"combobox"},this.renderIconStart(),!r&&this.renderChips(),n("label",{class:"screen-readers-only",htmlFor:e+"-input",id:s},o),this.renderInput(),this.renderIconEnd()),n("ul",{"aria-labelledby":s,"aria-multiselectable":"true",class:"screen-readers-only",id:e,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderPopperContainer())};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"],maxItems:["maxItemsHandler"],text:["textHandler"]}},enumerable:false,configurable:true});return t}());R.style=B;var q={icon:"icon",iconActive:"icon--active",custom:"icon--custom",dot:"icon--dot",single:"label--single",label:"label",active:"label--active",selected:"label--selected",title:"title",textContainer:"text-container"};var X='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );--calcite-combobox-item-indent-start:var(--calcite-combobox-item-indent-value);--calcite-combobox-item-indent-end:unset}.calcite--rtl{--calcite-combobox-item-indent-start:unset;--calcite-combobox-item-indent-end:var(--calcite-combobox-item-indent-value)}:host(:focus){-webkit-box-shadow:none;box-shadow:none}:host,ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:100%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);cursor:pointer;position:relative;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-decoration:none;padding:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.title{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-left:var(--calcite-combobox-item-indent-start);padding-right:var(--calcite-combobox-item-indent-end)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{content:"•"}.calcite--rtl .icon--dot:before{text-align:right}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';var V=t("calcite_combobox_item",function(){function t(t){var n=this;e(this,t);this.calciteComboboxItemChange=i(this,"calciteComboboxItemChange",7);this.disabled=false;this.selected=false;this.active=false;this.guid=g();this.scale="m";this.itemClickHandler=function(t){t.preventDefault();if(n.disabled){return}n.selected=!n.selected}}t.prototype.selectedWatchHandler=function(){this.calciteComboboxItemChange.emit(this.el)};t.prototype.connectedCallback=function(){this.ancestors=O(this.el);this.scale=d(this.el,"scale",this.scale)};t.prototype.componentWillLoad=function(){this.hasDefaultSlot=this.el.querySelector(":not([slot])")!==null};t.prototype.toggleSelected=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.disabled){return[2]}this.selected=typeof t==="boolean"?t:!this.selected;return[2]}))}))};t.prototype.renderIcon=function(t){var e,i;var a=this,o=a.icon,r=a.disabled,s=a.selected;var c=q.icon+"--indent";var l=t?"dot":"check";var p=r?"circle-disallowed":l;var m=t&&!o&&!r;return m?n("span",{class:(e={},e[q.icon]=true,e[q.dot]=true,e[c]=true,e)}):n("calcite-icon",{class:(i={},i[q.icon]=!o,i[q.custom]=!!o,i[q.iconActive]=o&&s,i[c]=true,i),icon:o||p,scale:"s"})};t.prototype.renderChildren=function(){if(!this.hasDefaultSlot){return null}return n("ul",null,n("slot",null))};t.prototype.render=function(){var t;var e=d(this.el,"selection-mode","multi")==="single";var i=u(this.el);var o=(t={},t[f.rtl]=i==="rtl",t[q.label]=true,t[q.selected]=this.selected,t[q.active]=this.active,t[q.single]=e,t);var r=j(this.el);return n(a,{"aria-hidden":"true"},n("div",{class:"container scale--"+this.scale,style:{"--calcite-combobox-item-spacing-indent-multiplier":""+r}},n("li",{class:o,id:this.guid,onClick:this.itemClickHandler},this.renderIcon(e),n("span",{class:q.title},this.textLabel)),this.renderChildren()))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selected:["selectedWatchHandler"]}},enumerable:false,configurable:true});return t}());V.style=X;var Y={list:"list",label:"label",title:"title"};var G="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}.calcite--rtl{--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host,.list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;min-width:0;color:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex}.label--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.label--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.title{border:0 solid;display:block;-ms-flex:1 1 0%;flex:1 1 0%;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px;color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;word-break:break-word;padding:var(--calcite-combobox-item-spacing-unit-l) 0;margin-left:var(--calcite-combobox-item-spacing-unit-s);margin-right:var(--calcite-combobox-item-spacing-unit-s)}";var U=t("calcite_combobox_item_group",function(){function t(t){e(this,t);this.guid=g();this.scale="m"}t.prototype.connectedCallback=function(){this.ancestors=O(this.el);this.scale=d(this.el,"scale",this.scale)};t.prototype.render=function(){var t,e;var i=this,a=i.el,o=i.scale;var r=u(a);var s=Y.label+"--indent-"+j(a);return n("ul",{"aria-labelledby":this.guid,class:(t={},t[Y.list]=true,t[f.rtl]=r==="rtl",t["scale--"+o]=true,t),role:"group"},n("li",{class:(e={},e[Y.label]=true,e[s]=true,e),id:this.guid,role:"presentation"},n("span",{class:Y.title},this.label)),n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());U.style=G}}}));