import{r as t,c as i,h as a,g as e,H as s}from"./p-263e9c6f.js";import{S as n}from"./p-a57a7f49.js";import{m as o,d as r,s as l,h as c,g as m,k as h,i as d,a as b,c as p,r as f,b as u,e as k,f as w,j as x,L as y,I as g,C as v,S as D}from"./p-5923992e.js";import{g as _}from"./p-0ae16e31.js";import{g as z}from"./p-a4e6e35b.js";import{a as I}from"./p-c47fe2f9.js";import"./p-58421494.js";var j;!function(t){t.grip="grip"}(j||(j={}));const C=class{constructor(a){t(this,a),this.calciteListChange=i(this,"calciteListChange",7),this.calciteListOrderChange=i(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(o.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectSiblingItems=r.bind(this),this.selectSiblings=l.bind(this),this.handleFilter=c.bind(this),this.getItemData=m.bind(this),this.keyDownHandler=t=>{const i=t.composedPath().find((t=>{var i;return void 0!==(null===(i=t.dataset)||void 0===i?void 0:i.jsHandle)})),a=t.composedPath().find((t=>{var i;return"calcite-value-list-item"===(null===(i=t.tagName)||void 0===i?void 0:i.toLowerCase())}));if(!i||!a.handleActivated)return void h.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:e,items:s}=this,n="ArrowDown"===t.key?1:-1,o=s.indexOf(a),r=_(o+n,s.length);if(r===s.length-1)e.appendChild(a);else{const t=e.children[r];e.insertBefore(a,t===a.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame((()=>i.focus())),a.handleActivated=!0}}connectedCallback(){d.call(this),b.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){p.call(this),this.cleanUpDragAndDrop()}calciteListItemRemoveHandler(t){f.call(this,t)}calciteListItemChangeHandler(t){u.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){k.call(this,t)}setUpItems(){w.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=n.create(this.el,{dataIdAttr:"id",handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}async getSelectedItems(){return this.selectedValues}async setFocus(t){return x.call(this,t)}getIconType(){let t=null;return this.dragEnabled&&(t=j.grip),t}render(){return a(y,{onKeyDown:this.keyDownHandler,props:this})}get el(){return e(this)}};C.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:10}calcite-filter{margin-bottom:1px}";const L=class{constructor(a){t(this,a),this.calciteListItemRemove=i(this,"calciteListItemRemove",7),this.disabled=!1,this.disableDeselect=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid=`calcite-value-list-item-${z()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected}}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){var t;null===(t=this.pickListItem)||void 0===t||t.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return I(t,"actions-end")?a("slot",{name:"actions-end",slot:D.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return I(t,"actions-start")?a("slot",{name:"actions-start",slot:D.actionsStart}):null}renderHandle(){const{icon:t}=this;if(t===g.grip)return a("span",{"aria-pressed":this.handleActivated.toString(),class:{[v.handle]:!0,[v.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},a("calcite-icon",{icon:"drag",scale:"s"}))}render(){return a(s,{id:this.el.id||this.guid},this.renderHandle(),a("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return e(this)}};L.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{margin-bottom:1px;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);-webkit-transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}calcite-pick-list-item{-webkit-box-shadow:none;box-shadow:none;-ms-flex-positive:1;flex-grow:1;position:relative;margin:0}:host([active]),:host([selected]){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);cursor:move;color:var(--calcite-ui-border-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}";export{C as calcite_value_list,L as calcite_value_list_item}