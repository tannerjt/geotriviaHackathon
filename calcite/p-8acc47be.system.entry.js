System.register(["./p-3c9923f1.system.js","./p-a7a7301d.system.js","./p-5b7ef513.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,i,a,n,o,r,l,c,s;return{setters:[function(t){e=t.r;i=t.c;a=t.h;n=t.H;o=t.g},function(t){r=t.a;l=t.g;c=t.C},function(t){s=t.C},function(){}],execute:function(){var d={article:"article",content:"content",headerContainer:"header-container",icon:"icon",statusIcon:"status-icon",toggle:"toggle",toggleIcon:"toggle-icon",title:"title",heading:"heading",header:"header",button:"button",summary:"summary",controlContainer:"control-container",valid:"valid",invalid:"invalid"};var m={collapse:"Collapse",expand:"Expand",loading:"Loading",options:"Options"};var g={icon:"icon",control:"control",headerMenuActions:"header-menu-actions"};var p={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"};var u=4;var f='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:1rem;padding-right:1rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;line-height:1.25;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.toggle-icon{margin-right:1rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in var(--calcite-animation-timing) ease-in-out;animation:in var(--calcite-animation-timing) ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}calcite-action-menu{grid-area:menu}.calcite--rtl .toggle-icon{margin-right:0;margin-left:1rem}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}';var h=t("calcite_block",function(){function t(t){var a=this;e(this,t);this.calciteBlockToggle=i(this,"calciteBlockToggle",7);this.collapsible=false;this.disabled=false;this.dragHandle=false;this.intlLoading=m.loading;this.intlOptions=m.options;this.loading=false;this.open=false;this.onHeaderClick=function(){a.open=!a.open;a.calciteBlockToggle.emit()}}t.prototype.renderScrim=function(){var t=this,e=t.disabled,i=t.loading;var n=a("slot",null);return[i||e?a("calcite-scrim",{loading:i}):null,n]};t.prototype.renderIcon=function(){var t;var e;var i=this,n=i.el,o=i.status;var l=(e=p[o])!==null&&e!==void 0?e:false;var c=r(n,g.icon)||l;var s=!l?a("slot",{name:g.icon}):a("calcite-icon",{class:(t={},t[d.statusIcon]=true,t[d.valid]=o=="valid",t[d.invalid]=o=="invalid",t),icon:l,scale:"m"});return c?a("div",{class:d.icon},s):null};t.prototype.render=function(){var t;var e=this,i=e.collapsible,o=e.disabled,f=e.el,h=e.heading,b=e.intlCollapse,v=e.intlExpand,w=e.loading,x=e.open,y=e.summary,k=e.intlLoading,D=e.headingLevel;var z=x?b||m.collapse:v||m.expand;var _=a("header",{class:d.header},this.renderIcon(),a("div",{class:d.title},a(s,{class:d.heading,level:D||u},h),y?a("div",{class:d.summary},y):null));var C=!!r(f,g.control);var S=!!r(f,g.headerMenuActions);var I=x?p.opened:p.closed;var H=a("div",{class:d.headerContainer},this.dragHandle?a("calcite-handle",null):null,i?a("button",{"aria-expanded":i?x.toString():null,"aria-label":z,class:d.toggle,onClick:this.onHeaderClick,title:z},_,!C&&!S?a("calcite-icon",{"aria-hidden":"true",class:d.toggleIcon,icon:I,scale:"s"}):null):_,w?a("calcite-loader",{inline:true,"is-active":true,label:k}):C?a("div",{class:d.controlContainer},a("slot",{name:g.control})):null,S?a("calcite-action-menu",{label:this.intlOptions||m.options},a("slot",{name:g.headerMenuActions})):null);var j=l(f)==="rtl";return a(n,{tabIndex:o?-1:null},a("article",{"aria-busy":w.toString(),class:(t={},t[d.article]=true,t[c.rtl]=j,t)},H,a("div",{class:d.content,hidden:!x},this.renderScrim())))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());h.style=f;var b={content:"content",invalid:"invalid",toggle:"toggle",toggleSwitch:"toggle--switch",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",valid:"valid"};var v={collapse:"Collapse",expand:"Expand"};var w={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"};var x="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);display:block}:host([open]){border-style:solid;border-width:0;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px}:host(:last-child){border-bottom-width:0}.toggle{background-color:transparent;border-width:0;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin-left:0;margin-right:0;margin-top:0.25rem;margin-bottom:0.25rem;padding-left:0;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{-ms-flex-item-align:end;align-self:flex-end}.section-header__text{-ms-flex:1 1 auto;flex:1 1 auto;margin-left:0.75rem;margin-right:0.75rem;margin-top:0;margin-bottom:0;text-align:initial}.toggle--switch calcite-switch{pointer-events:none;margin-left:0.25rem;margin-right:0.25rem}.toggle--switch .status-icon{margin-left:0.25rem;margin-right:0.25rem}.toggle--switch__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.calcite--rtl .toggle--switch{padding-right:0;padding-left:0.5rem}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:0.5rem}.calcite--rtl .section-header{padding-right:0;padding-left:0.25rem}";var y=t("calcite_block_section",function(){function t(t){var a=this;e(this,t);this.calciteBlockSectionToggle=i(this,"calciteBlockSectionToggle",7);this.open=false;this.toggleDisplay="button";this.toggleSection=function(){a.open=!a.open;a.calciteBlockSectionToggle.emit()}}t.prototype.handleHeaderLabelKeyDown=function(t){if(t.key===" "||t.key==="Enter"){t.preventDefault();t.stopPropagation();this.click()}};t.prototype.renderStatusIcon=function(){var t;var e;var i=this.status;var n=(e=w[i])!==null&&e!==void 0?e:false;var o=(t={},t[b.statusIcon]=true,t[b.valid]=i=="valid",t[b.invalid]=i=="invalid",t);return!!n?a("calcite-icon",{class:o,icon:n,scale:"s"}):null};t.prototype.render=function(){var t,e,i;var n=this,o=n.el,r=n.intlCollapse,s=n.intlExpand,d=n.open,m=n.text,g=n.toggleDisplay;var p=l(o);var u=d?w.menuOpen:p==="rtl"?w.menuClosedLeft:w.menuClosedRight;var f=d?r||v.collapse:s||v.expand;var h=g==="switch"?a("label",{"aria-label":f,class:(t={},t[b.toggle]=true,t[b.toggleSwitch]=true,t),onKeyDown:this.handleHeaderLabelKeyDown,tabIndex:0,title:f},a("div",{class:b.toggleSwitchContent},a("span",{class:b.toggleSwitchText},m)),a("calcite-switch",{onCalciteSwitchChange:this.toggleSection,scale:"s",switched:d,tabIndex:-1}),this.renderStatusIcon()):a("button",{"aria-label":f,class:(e={},e[b.sectionHeader]=true,e[b.toggle]=true,e),name:f,onClick:this.toggleSection,onKeyDown:this.handleHeaderLabelKeyDown},a("calcite-icon",{icon:u,scale:"s"}),a("span",{class:b.sectionHeaderText},m),this.renderStatusIcon());return a("section",{"aria-expanded":d.toString(),class:(i={},i[c.rtl]=p==="rtl",i)},h,a("div",{class:b.content,hidden:!d},a("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());y.style=x}}}));