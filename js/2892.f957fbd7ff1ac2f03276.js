(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[2892,863],{42892:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Radio:()=>c});var o=a(65353),r=a(28416);a(99624);const n="pf-m-standalone",i="pf-m-disabled";var s=a(38296),l=a(62472);class c extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,l.ql)(c.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:p,inputClassName:d,defaultChecked:u,isLabelWrapped:f,isLabelBeforeButton:h,isChecked:b,isDisabled:y,isValid:m,label:v,onChange:g,description:O,body:C,ouiaId:$,ouiaSafe:_=!0,component:w}=e,j=(0,o._T)(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe","component"]);j.id||console.error("Radio:","id is required to make input accessible");const k=r.createElement("input",Object.assign({},j,{className:(0,s.i)("pf-v5-c-radio__input",d),type:"radio",onChange:this.handleChange,"aria-invalid":!m,disabled:y,checked:a||b},void 0===a&&{defaultChecked:u},!v&&{"aria-label":t},(0,l.dp)(c.displayName,void 0!==$?$:this.state.ouiaStateId,_))),N=f&&!w||"label"===w,E=N?"span":"label",P=v?r.createElement(E,{className:(0,s.i)("pf-v5-c-radio__label",y&&i),htmlFor:N?void 0:j.id},v):null,S=null!=w?w:N?"label":"div";return r.createElement(S,{className:(0,s.i)("pf-v5-c-radio",!v&&n,p),htmlFor:N?j.id:void 0},h?r.createElement(r.Fragment,null,P,k):r.createElement(r.Fragment,null,k,P),O&&r.createElement("span",{className:(0,s.i)("pf-v5-c-radio__description")},O),C&&r.createElement("span",{className:(0,s.i)("pf-v5-c-radio__body")},C))}}c.displayName="Radio",c.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},62472:(e,t,a)=>{"use strict";a.d(t,{S$:()=>l,dp:()=>s,ql:()=>p});var o=a(28416);let r=0;const n="OUIA-Generated-",i={};function s(e,t,a=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":t}}const l=(e,t,a=!0,o)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":c(e,t,o)}),c=(e,t,a)=>{const r=(0,o.useMemo)((()=>p(e,a)),[e,a]);return null!=t?t:r};function p(e,t){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[a]||(i[a]=0),`${n}${e}-${t?`${t}-`:""}${++i[a]}`}catch(a){return`${n}${e}-${t?`${t}-`:""}${++r}`}}},38296:(e,t,a)=>{"use strict";function o(...e){const t=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)&&e.length){const a=o(...e);a&&t.push(a)}else if("object"===r)for(const o in e)a.call(e,o)&&e[o]&&t.push(o)})),t.join(" ")}a.d(t,{i:()=>o})},65353:(e,t,a)=>{"use strict";a.d(t,{ZT:()=>r,_T:()=>i,ev:()=>s,pi:()=>n});var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},o(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var n=function(){return n=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};function i(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}function s(e,t,a){if(a||2===arguments.length)for(var o,r=0,n=t.length;r<n;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},99624:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2892.0e212f7c93c8d606d58862663c601733.js.map