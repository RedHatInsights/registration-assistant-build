(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[8392,1398,689,3070,6011],{17661:(e,t,a)=>{"use strict";a.d(t,{G:()=>n,S:()=>f});var n,s=a(8674),i=a(19365),c=a(87229),o=a(33774),l=a(20689),r=a(19202),d=a(31003),u=a(99851),p=a(31398);!function(e){e.success="success",e.danger="danger",e.warning="warning"}(n||(n={}));class m extends i.Component{constructor(){super(...arguments),this.displayName="MenuToggleBase",this.state={ouiaStateId:(0,p.getDefaultOUIAId)(f.displayName,this.props.variant)}}render(){const e=this.props,{children:t,className:a,icon:m,badge:g,isExpanded:h,isDisabled:b,isFullHeight:y,isFullWidth:A,splitButtonOptions:v,variant:k,status:C,statusIcon:O,innerRef:I,onClick:T,"aria-label":x,ouiaId:w,ouiaSafe:E}=e,N=(0,s.Tt)(e,["children","className","icon","badge","isExpanded","isDisabled","isFullHeight","isFullWidth","splitButtonOptions","variant","status","statusIcon","innerRef","onClick","aria-label","ouiaId","ouiaSafe"]),_="plain"===k,j="plainText"===k,P="typeahead"===k,S=(0,p.getOUIAProps)(f.displayName,null!=w?w:this.state.ouiaStateId,E);let $=O;if(!O)switch(C){case n.success:$=i.createElement(r.Ay,{"aria-hidden":"true"});break;case n.warning:$=i.createElement(u.Ay,{"aria-hidden":"true"});break;case n.danger:$=i.createElement(d.Ay,{"aria-hidden":"true"})}const D=i.createElement("span",{className:(0,o.A)(c.A.menuToggleControls)},void 0!==C&&i.createElement("span",{className:(0,o.A)(c.A.menuToggleStatusIcon)},$),i.createElement("span",{className:(0,o.A)(c.A.menuToggleToggleIcon)},i.createElement(l.default,{"aria-hidden":!0}))),M=i.createElement(i.Fragment,null,m&&i.createElement("span",{className:(0,o.A)(c.A.menuToggleIcon)},m),P?t:i.createElement("span",{className:(0,o.A)(c.A.menuToggleText)},t),i.isValidElement(g)&&i.createElement("span",{className:(0,o.A)(c.A.menuToggleCount)},g),P?i.createElement("button",Object.assign({type:"button",className:(0,o.A)(c.A.menuToggleButton),"aria-expanded":h,onClick:T,"aria-label":x||"Menu toggle",tabIndex:-1},S),D):D),B=(0,o.A)(c.A.menuToggle,h&&c.A.modifiers.expanded,"primary"===k&&c.A.modifiers.primary,"secondary"===k&&c.A.modifiers.secondary,C&&c.A.modifiers[C],(_||j)&&c.A.modifiers.plain,j&&c.A.modifiers.text,y&&c.A.modifiers.fullHeight,A&&c.A.modifiers.fullWidth,b&&c.A.modifiers.disabled,a),z=Object.assign(Object.assign({children:_?t:M},b&&{disabled:!0}),N);return P?i.createElement("div",Object.assign({ref:I,className:(0,o.A)(B,c.A.modifiers.typeahead)},z)):v?i.createElement("div",{ref:I,className:(0,o.A)(B,c.A.modifiers.splitButton,"action"===(null==v?void 0:v.variant)&&c.A.modifiers.action)},null==v?void 0:v.items,i.createElement("button",Object.assign({className:(0,o.A)(c.A.menuToggleButton,t&&c.A.modifiers.text),type:"button","aria-expanded":h,"aria-label":x,disabled:b,onClick:T},N,S),t&&i.createElement("span",{className:(0,o.A)(c.A.menuToggleText)},t),D)):i.createElement("button",Object.assign({className:(0,o.A)(B),type:"button","aria-label":x,"aria-expanded":h,ref:I,disabled:b,onClick:T},z,S))}}m.defaultProps={className:"",isExpanded:!1,isDisabled:!1,isFullWidth:!1,isFullHeight:!1,ouiaSafe:!0};const f=i.forwardRef(((e,t)=>i.createElement(m,Object.assign({innerRef:t},e))));f.displayName="MenuToggle"},18392:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MenuToggle:()=>n.S,MenuToggleAction:()=>l,MenuToggleCheckbox:()=>u,MenuToggleStatus:()=>n.G});var n=a(17661),s=a(8674),i=a(19365),c=a(87229),o=a(33774);class l extends i.Component{render(){const e=this.props,{id:t,className:a,onClick:n,isDisabled:l,children:r}=e,d=(0,s.Tt)(e,["id","className","onClick","isDisabled","children"]);return i.createElement("button",Object.assign({id:t,className:(0,o.A)(c.A.menuToggleButton,a),onClick:n,type:"button",disabled:l},d),r)}}l.displayName="MenuToggleAction",l.defaultProps={className:"",isDisabled:!1,onClick:()=>{}};var r=a(48280),d=a(31398);class u extends i.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.target.checked,e)},this.calculateChecked=()=>{const{isChecked:e,defaultChecked:t}=this.props;return null!==e&&(void 0!==e?e:t)},this.state={ouiaStateId:(0,d.getDefaultOUIAId)(u.displayName)}}render(){const e=this.props,{className:t,isValid:a,isDisabled:n,isChecked:c,children:l,ouiaId:p,ouiaSafe:m,onChange:f,defaultChecked:g,id:h}=e,b=(0,s.Tt)(e,["className","isValid","isDisabled","isChecked","children","ouiaId","ouiaSafe","onChange","defaultChecked","id"]),y=l&&i.createElement("span",{className:(0,o.A)(r.A.checkLabel,t),"aria-hidden":"true",id:h},l);return i.createElement("label",{className:(0,o.A)(r.A.check,!l&&r.A.modifiers.standalone,t)},i.createElement("input",Object.assign({className:(0,o.A)(r.A.checkInput)},void 0!==this.calculateChecked()&&{onChange:this.handleChange},{name:h,type:"checkbox",ref:e=>e&&(e.indeterminate=null===c),"aria-invalid":!a,disabled:n},void 0!==g?{defaultChecked:g}:{checked:this.calculateChecked()},(0,d.getOUIAProps)(u.displayName,void 0!==p?p:this.state.ouiaStateId,m),b)),y)}}u.displayName="MenuToggleCheckbox",u.defaultProps={isValid:!0,isDisabled:!1,onChange:()=>{}}},31398:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>o,useOUIAId:()=>r,useOUIAProps:()=>l});var n=a(19365);let s=0;const i="OUIA-Generated-",c={};function o(e,t,a=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":t}}const l=(e,t,a=!0,n)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":r(e,t,n)}),r=(e,t,a)=>{const s=(0,n.useMemo)((()=>d(e,a)),[e,a]);return null!=t?t:s};function d(e,t){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,c[a]||(c[a]=0),`${i}${e}-${t?`${t}-`:""}${++c[a]}`}catch(a){return`${i}${e}-${t?`${t}-`:""}${++s}`}}},68419:(e,t,a)=>{"use strict";a.d(t,{w:()=>c});var n=a(8674),s=a(19365);let i=0;function c({name:e,xOffset:t=0,yOffset:a=0,width:c,height:o,svgPath:l}){var r;return r=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{title:i,className:r}=e,d=(0,n.Tt)(e,["title","className"]),u=r?`pf-v5-svg ${r}`:"pf-v5-svg",p=Boolean(i),m=[t,a,c,o].join(" ");return s.createElement("svg",Object.assign({className:u,viewBox:m,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&s.createElement("title",{id:this.id},i),s.createElement("path",{d:l}))}},r.displayName=e,r}},20689:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>i,CaretDownIconConfig:()=>s,default:()=>c});var n=a(68419);const s={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i=(0,n.w)(s),c=i},19202:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},31003:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},99851:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},48280:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(56905);const n={check:"pf-v5-c-check",checkBody:"pf-v5-c-check__body",checkDescription:"pf-v5-c-check__description",checkInput:"pf-v5-c-check__input",checkLabel:"pf-v5-c-check__label",checkLabelRequired:"pf-v5-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},87229:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(8700);const n={check:"pf-v5-c-check",checkInput:"pf-v5-c-check__input",menuToggle:"pf-v5-c-menu-toggle",menuToggleButton:"pf-v5-c-menu-toggle__button",menuToggleControls:"pf-v5-c-menu-toggle__controls",menuToggleCount:"pf-v5-c-menu-toggle__count",menuToggleIcon:"pf-v5-c-menu-toggle__icon",menuToggleStatusIcon:"pf-v5-c-menu-toggle__status-icon",menuToggleText:"pf-v5-c-menu-toggle__text",menuToggleToggleIcon:"pf-v5-c-menu-toggle__toggle-icon",modifiers:{primary:"pf-m-primary",secondary:"pf-m-secondary",expanded:"pf-m-expanded",plain:"pf-m-plain",text:"pf-m-text",fullHeight:"pf-m-full-height",disabled:"pf-m-disabled",typeahead:"pf-m-typeahead",splitButton:"pf-m-split-button",action:"pf-m-action",active:"pf-m-active",fullWidth:"pf-m-full-width",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger"},textInputGroup:"pf-v5-c-text-input-group",themeDark:"pf-v5-theme-dark"}},33774:(e,t,a)=>{"use strict";function n(...e){const t=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const s=typeof e;if("string"===s||"number"===s)t.push(e);else if(Array.isArray(e)&&e.length){const a=n(...e);a&&t.push(a)}else if("object"===s)for(const n in e)a.call(e,n)&&e[n]&&t.push(n)})),t.join(" ")}a.d(t,{A:()=>n})},8674:(e,t,a)=>{"use strict";a.d(t,{C6:()=>s,Cl:()=>i,Tt:()=>c,fX:()=>o});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},n(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var i=function(){return i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};function c(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a}function o(e,t,a){if(a||2===arguments.length)for(var n,s=0,i=t.length;s<i;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},56905:()=>{},8700:()=>{}}]);