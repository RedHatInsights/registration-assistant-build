"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[7808,5964],{47808:(e,t,i)=>{i.r(t),i.d(t,{Wizard:()=>M,WizardBody:()=>T,WizardContext:()=>_,WizardFooter:()=>S,WizardFooterWrapper:()=>h,WizardHeader:()=>Z,WizardNav:()=>F,WizardNavItem:()=>R,WizardNavItemStatus:()=>v,WizardStep:()=>W,WizardStepChangeScope:()=>f,WizardToggle:()=>H,isCustomWizardFooter:()=>E,isCustomWizardNav:()=>g,isCustomWizardNavItem:()=>b,isWizardBasicStep:()=>x,isWizardParentStep:()=>N,isWizardSubStep:()=>y,useWizardContext:()=>k,useWizardFooter:()=>G});var a=i(65353),n=i(28416),s=i.n(n),l=i(38296);i(40209);const r="pf-m-expanded",d="pf-m-current",o="pf-m-expandable",c="pf-m-disabled",u="pf-m-no-padding",p="pf-v5-c-wizard__nav-list",m="pf-v5-c-wizard__toggle-list-item";var v,f;function g(e){return"function"==typeof e||s().isValidElement(e)}function b(e){return"function"==typeof e||s().isValidElement(e)}function E(e){return"function"==typeof e||s().isValidElement(e)}function x(e){return void 0===(null==e?void 0:e.subStepIds)&&!y(e)}function y(e){return void 0!==(null==e?void 0:e.parentId)}function N(e){return void 0!==(null==e?void 0:e.subStepIds)}!function(e){e.Default="default",e.Error="error"}(v||(v={})),function(e){e.Next="next",e.Back="back",e.Nav="nav"}(f||(f={}));var z=i(47173);const h=({children:e})=>s().createElement("footer",{className:(0,l.i)("pf-v5-c-wizard__footer")},e),S=e=>{var{activeStep:t}=e,i=(0,a._T)(e,["activeStep"]);const n=!E(null==t?void 0:t.footer)&&(null==t?void 0:t.footer);return s().createElement(C,Object.assign({},i,n))},C=({onNext:e,onBack:t,onClose:i,isNextDisabled:a,isBackDisabled:n,isBackHidden:l,isCancelHidden:r,nextButtonText:d="Next",backButtonText:o="Back",cancelButtonText:c="Cancel"})=>s().createElement(h,null,!l&&s().createElement(z.zx,{variant:z.Wu.secondary,onClick:t,isDisabled:n},o),s().createElement(z.zx,{variant:z.Wu.primary,type:"submit",onClick:e,isDisabled:a},d),!r&&s().createElement("div",{className:"pf-v5-c-wizard__footer-cancel"},s().createElement(z.zx,{variant:z.Wu.link,onClick:i},c)));h.displayName="WizardFooterWrapper",S.displayName="WizardFooter";const _=s().createContext({}),I=({steps:e,footer:t,activeStepIndex:i,children:a,onNext:n,onBack:l,onClose:r,goToStepById:d,goToStepByName:o,goToStepByIndex:c})=>{const[u,p]=s().useState(e),[m,v]=s().useState(),f=s().useMemo((()=>u.map(((t,i)=>Object.assign(Object.assign({},t),e[i])))),[e,u]),g=s().useMemo((()=>f.find((e=>e.index===i))),[i,f]),b=s().useCallback((()=>null==r?void 0:r(null)),[r]),x=s().useCallback((()=>n(null,f)),[n,f]),N=s().useCallback((()=>l(null,f)),[l,f]),z=s().useMemo((()=>{const e=(null==g?void 0:g.footer)||m||t;if(E(e)){const t=e;return"function"==typeof t?t(g,x,N,b):t}return s().createElement(S,Object.assign({activeStep:g,onNext:x,onBack:N,onClose:b,isBackDisabled:1===(null==g?void 0:g.index)||y(g)&&2===(null==g?void 0:g.index)},e))}),[m,t,g,x,N,b]),h=s().useCallback((e=>f.find((t=>t.id===e))),[f]),C=s().useCallback((e=>p((t=>t.map((t=>t.id===e.id?Object.assign(Object.assign({},t),e):t))))),[]);return s().createElement(_.Provider,{value:{steps:f,activeStep:g,footer:z,close:b,getStep:h,setStep:C,goToNextStep:x,goToPrevStep:N,setFooter:v,goToStepById:s().useCallback((e=>d(f,e)),[d,f]),goToStepByName:s().useCallback((e=>o(f,e)),[o,f]),goToStepByIndex:s().useCallback((e=>c(null,f,e)),[c,f])}},a)};I.displayName="WizardContextProvider";const k=()=>s().useContext(_),W=e=>{var{children:t,steps:i}=e,n=(0,a._T)(e,["children","steps"]);const{activeStep:l,setStep:r}=k(),{id:d,name:o,body:c,isDisabled:u,isHidden:p,navItem:m,footer:v,status:f}=n,g=N(l);return s().useEffect((()=>{r(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({id:d,name:o},c&&{body:c}),u&&{isDisabled:u}),p&&{isHidden:p}),m&&{navItem:m}),v&&{footer:v}),f&&{status:f}),!g&&d===(null==l?void 0:l.id)&&!(null==l?void 0:l.isVisited)&&{isVisited:!0}))}),[c,v,d,u,p,o,m,f,g,r,null==l?void 0:l.id,null==l?void 0:l.isVisited]),s().createElement(s().Fragment,null,t)};W.displayName="WizardStep";const w=e=>{var{children:t,steps:i}=e;return(0,a._T)(e,["children","steps"])};var O=i(93174),j=i(5964),B=i(20344),V=i(80164),D=i(84709);const T=({children:e,hasNoPadding:t=!1,"aria-label":i,"aria-labelledby":a,component:n="div"})=>{const[r,d]=s().useState(!1),[o,c]=s().useState(void 0),p=s().useRef(null),m=n,{activeStep:v}=s().useContext(_),f=i||`${null==v?void 0:v.name} content`;return s().useEffect((()=>{const e=(0,V.Ds)((()=>{if(null==p?void 0:p.current){const{offsetWidth:e,offsetHeight:t,scrollHeight:i}=p.current;o!==e&&(c(e),d(t<i))}}),250);let t=()=>{};if(null==p?void 0:p.current){t=(0,D.p)(p.current,e);const{offsetHeight:i,scrollHeight:a}=p.current;d(i<a),c(p.current.offsetWidth)}return()=>{t()}}),[]),s().createElement(m,Object.assign({ref:p},"div"===n&&r&&{role:"region"},r&&{"aria-label":f,"aria-labelledby":a,tabIndex:0},{className:(0,l.i)("pf-v5-c-wizard__main")}),s().createElement("div",{className:(0,l.i)("pf-v5-c-wizard__main-body",t&&u)},e))};T.displayName="WizardBody";const H=({steps:e,activeStep:t,footer:i,nav:n,isNavExpanded:r,toggleNavExpanded:d,"aria-label":o="Wizard toggle"})=>{const c=y(t),u=c&&e.find((e=>e.id===t.parentId)),p=e.filter((e=>!y(e))).indexOf(u||t)+1,v=s().useCallback((e=>{r&&e.key===B.yu.Escape&&(null==d||d(e))}),[r,d]);s().useEffect((()=>{const e="undefined"!=typeof document?document.body:null;return null==e||e.addEventListener("keydown",v,!1),()=>{null==e||e.removeEventListener("keydown",v,!1)}}),[v]);const f=e.map((e=>{var i;const n=(null===(i=e.component)||void 0===i?void 0:i.props)||{},{children:l,body:r}=n,d=(0,a._T)(n,["children","body"]);return s().createElement(s().Fragment,{key:e.id},(null==t?void 0:t.name)===e.name&&(r||void 0===r?s().createElement(T,Object.assign({},r),l):l),s().createElement("div",{key:e.id,style:{display:"none"}},s().createElement(W,Object.assign({},d))))}));return s().createElement(s().Fragment,null,s().createElement("button",{onClick:d,className:(0,l.i)("pf-v5-c-wizard__toggle",r&&"pf-m-expanded"),"aria-label":o,"aria-expanded":r},s().createElement("span",{className:(0,l.i)("pf-v5-c-wizard__toggle-list")},s().createElement("span",{className:(0,l.i)(m)},s().createElement("span",{className:(0,l.i)("pf-v5-c-wizard__toggle-num")},p)," ",(null==u?void 0:u.name)||(null==t?void 0:t.name),c&&s().createElement(O.default,{className:(0,l.i)("pf-v5-c-wizard__toggle-separator"),"aria-hidden":"true"})),c&&s().createElement("span",{className:(0,l.i)(m)},null==t?void 0:t.name)),s().createElement("span",{className:(0,l.i)("pf-v5-c-wizard__toggle-icon")},s().createElement(j.default,{"aria-hidden":"true"}))),s().createElement("div",{className:(0,l.i)("pf-v5-c-wizard__outer-wrap")},s().createElement("div",{className:(0,l.i)("pf-v5-c-wizard__inner-wrap")},n,f),i))};H.displayName="WizardToggle";const F=({children:e,"aria-label":t,"aria-labelledby":i,isExpanded:a=!1,isInnerList:s=!1})=>s?n.createElement("ol",{className:(0,l.i)(p),role:"list"},e):n.createElement("nav",{className:(0,l.i)("pf-v5-c-wizard__nav",a&&r),"aria-label":t,"aria-labelledby":i},n.createElement("ol",{className:(0,l.i)(p),role:"list"},e));F.displayName="WizardNav";var P=i(43047),L=i(62472);const R=({children:e=null,content:t="",isCurrent:i=!1,isDisabled:a=!1,isVisited:s=!1,stepIndex:u,onClick:p,component:m="button",href:f,isExpandable:g=!1,id:b,status:E="default",target:x,ouiaId:y,ouiaSafe:N=!0})=>{const[z,h]=n.useState(!1),S=(0,L.S$)(R.displayName,y,N);n.useEffect((()=>{h(i)}),[i]);const C=n.useMemo((()=>{if(E===v.Error||s&&!i){let e=t.toString();return E===v.Error&&(e+=`, ${E}`),s&&!i&&(e+=", visited"),e}}),[t,i,s,E]);return n.createElement("li",{className:(0,l.i)("pf-v5-c-wizard__nav-item",g&&o,g&&z&&r)},n.createElement(m,Object.assign({},"a"===m?{tabIndex:a?-1:void 0,href:f,target:x}:{disabled:a},b&&{id:b.toString()},{onClick:e=>{e.stopPropagation(),g?h(!z||i):null==p||p(e,u)},className:(0,l.i)("pf-v5-c-wizard__nav-link",i&&d,a&&c),"aria-disabled":!!a||null,"aria-current":!(!i||e)&&"step"},g&&{"aria-expanded":z},C&&{"aria-label":C},S),g?n.createElement(n.Fragment,null,n.createElement("span",{className:(0,l.i)("pf-v5-c-wizard__nav-link-text")},t),n.createElement("span",{className:(0,l.i)("pf-v5-c-wizard__nav-link-toggle")},n.createElement("span",{className:(0,l.i)("pf-v5-c-wizard__nav-link-toggle-icon")},n.createElement(O.default,{"aria-label":(i?"Collapse":"Expand")+" step icon"})))):n.createElement(n.Fragment,null,t,E===v.Error&&n.createElement("span",{style:{marginLeft:"var(--pf-v5-global--spacer--sm)"}},n.createElement(P.ZP,{color:"var(--pf-v5-global--danger-color--100)"})))),e)};R.displayName="WizardNavItem";const q=({nav:e,isVisitRequired:t,isProgressive:i,isNavExpanded:a})=>{const{activeStep:n,steps:l,goToStepByIndex:r}=k(),d=Object.assign({isExpanded:a,"aria-label":(null==e?void 0:e["aria-label"])||"Wizard steps"},(null==e?void 0:e["aria-labelledby"])&&{"aria-labelledby":e["aria-labelledby"]});return s().createElement(F,Object.assign({},d),l.map(((e,a)=>{var o;const c=l.some((e=>e.index>a+1&&e.isVisited)),u=e.isDisabled||t&&!e.isVisited&&!c,p=b(e.navItem)&&s().createElement(s().Fragment,{key:e.id},"function"==typeof e.navItem?e.navItem(e,n,l,r):e.navItem);if(N(e)&&!e.isHidden){let a,c=!1;const u=null===(o=e.subStepIds)||void 0===o?void 0:o.map(((e,d)=>{const o=l.find((t=>t.id===e)),u=l.some((e=>e.index>o.index&&e.isVisited)),p=o.isDisabled||t&&!o.isVisited&&!u,m=b(o.navItem)&&s().createElement(s().Fragment,{key:o.id},"function"==typeof o.navItem?o.navItem(o,n,l,r):o.navItem);if(!o.isHidden)return 0===d&&(a=o.index),(null==n?void 0:n.id)===o.id&&(c=!0),!i||i&&o.index<=n.index?m||s().createElement(R,Object.assign({key:o.id,id:o.id,content:o.name,isCurrent:(null==n?void 0:n.id)===o.id,isDisabled:p,isVisited:o.isVisited,stepIndex:o.index,onClick:()=>r(o.index),status:o.status},o.navItem)):void 0})),m=s().Children.toArray(u).some((e=>s().isValidElement(e)&&!e.props.isDisabled));if(!i||i&&e.index<=n.index)return p||s().createElement(R,Object.assign({key:e.id,id:e.id,content:e.name,isExpandable:e.isExpandable,isCurrent:c,isDisabled:!m,isVisited:e.isVisited,stepIndex:a,onClick:()=>r(a),status:e.status},e.navItem),s().createElement(F,Object.assign({},d,{isInnerList:!0}),u))}if(x(e)&&!e.isHidden&&(!i||i&&e.index<=n.index))return p||s().createElement(R,Object.assign({key:e.id,id:e.id,content:e.name,isCurrent:(null==n?void 0:n.id)===e.id,isDisabled:u,isVisited:e.isVisited,stepIndex:e.index,onClick:()=>r(e.index),status:e.status},e.navItem))})))},M=e=>{var{children:t,footer:i,height:n,width:r,className:d,header:o,nav:c,startIndex:u=1,isVisitRequired:p=!1,isProgressive:m=!1,onStepChange:v,onSave:g,onClose:b}=e,E=(0,a._T)(e,["children","footer","height","width","className","header","nav","startIndex","isVisitRequired","isProgressive","onStepChange","onSave","onClose"]);const[x,y]=s().useState(u),z=(e=>s().Children.toArray(e).reduce(((e,t,i)=>{if(!function(e){return s().isValidElement(e)&&e.type===W}(t))throw new Error("Wizard only accepts children of type WizardStep.");{const{props:a}=t,{steps:n,id:s}=a,l=e.length+1,r=[];e.push(Object.assign(Object.assign(Object.assign({index:l,component:t},0===i&&!(null==n?void 0:n.length)&&{isVisited:!0}),n&&{subStepIds:null==n?void 0:n.map(((e,t)=>(r.push(Object.assign(Object.assign({index:l+t+1,component:e,parentId:s},0===i&&0===t&&{isVisited:!0}),w(e.props))),e.props.id)))}),w(a)),...r)}return e}),[]))(t),h=s().useRef(z[u-1]);return s().useEffect((()=>{N(h.current)&&y(u+1)}),[u]),s().createElement(I,{steps:z,activeStepIndex:x,footer:i,onNext:(e,t=z)=>{const i=t.find((e=>e.index>x&&!e.isHidden&&!e.isDisabled&&!N(e)));if(x>=t.length||!(null==i?void 0:i.index))return g?g(e):null==b?void 0:b(e);const a=N(t[x])?t[x+1]:t[x],n=t[x-1];y(null==i?void 0:i.index),null==v||v(e,a,n,f.Next)},onBack:(e,t=z)=>{const i=[...t].reverse().find((e=>e.index<x&&!e.isHidden&&!e.isDisabled&&!N(e))),a=N(t[x-2])?t[x-3]:t[x-2],n=t[x-1];y(null==i?void 0:i.index),null==v||v(e,a,n,f.Back)},onClose:b,goToStepById:(e=z,t)=>{const i=e.find((e=>e.id===t)),a=null==i?void 0:i.index,n=e.length+1;a>0&&a<n&&!i.isDisabled&&!i.isHidden&&y(a)},goToStepByName:(e=z,t)=>{const i=e.find((e=>e.name===t)),a=null==i?void 0:i.index,n=e.length+1;a>0&&a<n&&!i.isDisabled&&!i.isHidden&&y(a)},goToStepByIndex:(e,t=z,i)=>{const a=t.length+1;i<1?i=1:i>a&&(i=a);const n=t[i-1],s=t[x-1];y(i),null==v||v(e,n,s,f.Nav)}},s().createElement("div",Object.assign({className:(0,l.i)("pf-v5-c-wizard",d),style:Object.assign(Object.assign({},n?{height:n}:{}),r?{width:r}:{})},E),o,s().createElement(A,{nav:c,isVisitRequired:p,isProgressive:m})))},A=({nav:e,isVisitRequired:t,isProgressive:i})=>{const{activeStep:a,steps:n,footer:l,goToStepByIndex:r}=k(),[d,o]=s().useState(!1),c=s().useMemo((()=>g(e)?"function"==typeof e?e(d,n,a,r):e:s().createElement(q,{nav:e,isNavExpanded:d,isVisitRequired:t,isProgressive:i})),[a,t,i,r,d,e,n]);return s().createElement(H,{nav:c,footer:l,steps:n,activeStep:a,isNavExpanded:d,toggleNavExpanded:()=>o((e=>!e))})};M.displayName="Wizard";var $=i(24307);const Z=({onClose:e=(()=>{}),title:t,description:i,isCloseHidden:a,closeButtonAriaLabel:s,titleId:r,descriptionComponent:d="div",descriptionId:o})=>n.createElement("div",{className:(0,l.i)("pf-v5-c-wizard__header")},!a&&n.createElement("div",{className:(0,l.i)("pf-v5-c-wizard__close")},n.createElement(z.zx,{variant:"plain","aria-label":s,onClick:e},n.createElement($.ZP,{"aria-hidden":"true"}))),n.createElement("div",{className:(0,l.i)("pf-v5-c-wizard__title")},n.createElement("h2",{className:(0,l.i)("pf-v5-c-wizard__title-text"),id:r},t||n.createElement(n.Fragment,null," "))),i&&n.createElement(d,{className:(0,l.i)("pf-v5-c-wizard__description"),id:o},i));Z.displayName="WizardHeader";const G=(e,t)=>{const{activeStep:i,setFooter:a}=k();s().useEffect((()=>{if(e&&(!t||(null==i?void 0:i.id)===t))return a(e),()=>{a(null)}}),[i,e,a,t])}},5964:(e,t,i)=>{i.r(t),i.d(t,{CaretDownIcon:()=>s,CaretDownIconConfig:()=>n,default:()=>l});var a=i(40400);const n={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,a.I)(n),l=s}}]);
//# sourceMappingURL=../sourcemaps/7808.63f644962894930f1f360da1eda8eb5b.js.map