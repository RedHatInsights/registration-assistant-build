(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[2892,5353,863],{42892:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Radio:()=>p});var n=a(65353),r=a(28416);a(99624);const o="pf-m-standalone",i="pf-m-disabled",l="pf-v5-c-radio",c="pf-v5-c-radio__label";var s=a(38296),u=a(62472);class p extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,u.ql)(p.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:d,inputClassName:f,defaultChecked:h,isLabelWrapped:b,isLabelBeforeButton:y,isChecked:m,isDisabled:v,isValid:g,label:w,onChange:O,description:k,body:C,ouiaId:$,ouiaSafe:_=!0}=e,E=(0,n._T)(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe"]);E.id||console.error("Radio:","id is required to make input accessible");const N=r.createElement("input",Object.assign({},E,{className:(0,s.i)("pf-v5-c-radio__input",f),type:"radio",onChange:this.handleChange,"aria-invalid":!g,disabled:v,checked:a||m},void 0===a&&{defaultChecked:h},!w&&{"aria-label":t},(0,u.dp)(p.displayName,void 0!==$?$:this.state.ouiaStateId,_)));let j=null;w&&b?j=r.createElement("span",{className:(0,s.i)(c,v&&i)},w):w&&(j=r.createElement("label",{className:(0,s.i)(c,v&&i),htmlFor:E.id},w));const S=k?r.createElement("span",{className:(0,s.i)("pf-v5-c-radio__description")},k):null,P=C?r.createElement("span",{className:(0,s.i)("pf-v5-c-radio__body")},C):null,x=y?r.createElement(r.Fragment,null,j,N,S,P):r.createElement(r.Fragment,null,N,j,S,P);return b?r.createElement("label",{className:(0,s.i)(l,d),htmlFor:E.id},x):r.createElement("div",{className:(0,s.i)(l,!w&&o,d)},x)}}p.displayName="Radio",p.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},62472:(e,t,a)=>{"use strict";a.d(t,{S$:()=>c,dp:()=>l,ql:()=>u});var n=a(28416);let r=0;const o="OUIA-Generated-",i={};function l(e,t,a=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":t}}const c=(e,t,a=!0,n)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":s(e,t,n)}),s=(e,t,a)=>{const r=(0,n.useMemo)((()=>u(e,a)),[e,a]);return null!=t?t:r};function u(e,t){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[a]||(i[a]=0),`${o}${e}-${t?`${t}-`:""}${++i[a]}`}catch(a){return`${o}${e}-${t?`${t}-`:""}${++r}`}}},38296:(e,t,a)=>{"use strict";function n(...e){const t=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)&&e.length){const a=n(...e);a&&t.push(a)}else if("object"===r)for(const n in e)a.call(e,n)&&e[n]&&t.push(n)})),t.join(" ")}a.d(t,{i:()=>n})},65353:(e,t,a)=>{"use strict";a.d(t,{Jh:()=>c,ZT:()=>r,_T:()=>i,ev:()=>s,mG:()=>l,pi:()=>o});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},n(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function i(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}function l(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))}function c(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function s(e,t,a){if(a||2===arguments.length)for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},99624:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2892.d23f692c6e23cc22c0a3335e25c8c36b.js.map