"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[913],{68809:(e,a,r)=>{r.d(a,{W:()=>o});var l=r(65353),t=r(28416),i=r(11924),s=r(38296);const o=e=>{var{children:a=null,className:r=""}=e,o=(0,l._T)(e,["children","className"]);const n=(0,s.i)(i.Z.formGroup,i.Z.modifiers.action,r),d=t.createElement("div",{className:(0,s.i)(i.Z.formActions)},a);return t.createElement("div",Object.assign({},o,{className:n}),t.createElement("div",{className:(0,s.i)(i.Z.formGroupControl)},d))};o.displayName="ActionGroup"},83115:(e,a,r)=>{r.d(a,{l:()=>n});var l=r(65353),t=r(28416),i=r(11924),s=r(38296);const o=e=>{var{children:a=null,className:r="",isHorizontal:o=!1,isWidthLimited:n=!1,maxWidth:d="",innerRef:c}=e,m=(0,l._T)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return t.createElement("form",Object.assign({noValidate:!0},d&&{style:Object.assign({"--pf-v5-c-form--m-limit-width--MaxWidth":d},m.style)},m,{className:(0,s.i)(i.Z.form,o&&i.Z.modifiers.horizontal,(n||d)&&i.Z.modifiers.limitWidth,r),ref:c}),a)},n=t.forwardRef(((e,a)=>t.createElement(o,Object.assign({innerRef:a},e))));n.displayName="Form"},59775:(e,a,r)=>{r.d(a,{c:()=>d});var l=r(65353),t=r(28416),i=r(11924),s=r(11888),o=r(38296),n=r(41724);const d=e=>{var{children:a=null,className:r="",label:d,labelInfo:c,labelIcon:m,isRequired:u=!1,isInline:p=!1,hasNoPaddingTop:g=!1,isStack:b=!1,fieldId:f,role:N}=e,E=(0,l._T)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const v="group"===N||"radiogroup"===N,h=v?"span":"label",F=t.createElement(t.Fragment,null,t.createElement(h,Object.assign({className:(0,o.i)(i.Z.formLabel)},!v&&{htmlFor:f}),t.createElement("span",{className:(0,o.i)(i.Z.formLabelText)},d),u&&t.createElement("span",{className:(0,o.i)(i.Z.formLabelRequired),"aria-hidden":"true"}," ",s.t))," ",t.isValidElement(m)&&m);return t.createElement(n.w,null,(e=>t.createElement("div",Object.assign({className:(0,o.i)(i.Z.formGroup,r)},N&&{role:N},v&&{"aria-labelledby":`${f||e}-legend`},E),d&&t.createElement("div",Object.assign({className:(0,o.i)(i.Z.formGroupLabel,c&&i.Z.modifiers.info,g&&i.Z.modifiers.noPaddingTop)},v&&{id:`${f||e}-legend`}),c&&t.createElement(t.Fragment,null,t.createElement("div",{className:(0,o.i)(i.Z.formGroupLabelMain)},F),t.createElement("div",{className:(0,o.i)(i.Z.formGroupLabelInfo)},c)),!c&&F),t.createElement("div",{className:(0,o.i)(i.Z.formGroupControl,p&&i.Z.modifiers.inline,b&&i.Z.modifiers.stack)},a))))};d.displayName="FormGroup"},73536:(e,a,r)=>{r.r(a),r.d(a,{ActionGroup:()=>l.W,Form:()=>t.l,FormAlert:()=>d,FormContextConsumer:()=>x,FormContextProvider:()=>Z,FormFieldGroup:()=>f,FormFieldGroupExpandable:()=>N,FormFieldGroupHeader:()=>E,FormGroup:()=>v.c,FormHelperText:()=>h.Q,FormSection:()=>F,useFormContext:()=>G});var l=r(68809),t=r(83115),i=r(65353),s=r(28416),o=r.n(s),n=r(38296);const d=e=>{var{children:a=null,className:r=""}=e,l=(0,i._T)(e,["children","className"]);return s.createElement("div",Object.assign({},l,{className:(0,n.i)("pf-v5-c-form__alert",r)}),a)};d.displayName="FormAlert";var c=r(11924),m=r(93174),u=r(47173);const p=e=>{var{className:a,onToggle:r,isExpanded:l,"aria-label":t,"aria-labelledby":o,toggleId:d}=e,p=(0,i._T)(e,["className","onToggle","isExpanded","aria-label","aria-labelledby","toggleId"]);return s.createElement("div",Object.assign({className:(0,n.i)(c.Z.formFieldGroupToggle,a)},p),s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupToggleButton)},s.createElement(u.zx,{variant:"plain","aria-label":t,onClick:r,"aria-expanded":l,"aria-labelledby":o,id:d},s.createElement("span",{className:(0,n.i)(c.Z.formFieldGroupToggleIcon)},s.createElement(m.default,{"aria-hidden":"true"})))))};p.displayName="FormFieldGroupToggle";var g=r(41724);const b=e=>{var{children:a,className:r,header:l,isExpandable:t,isExpanded:o,onToggle:d,toggleAriaLabel:m}=e,u=(0,i._T)(e,["children","className","header","isExpandable","isExpanded","onToggle","toggleAriaLabel"]);const b=l?l.props.titleText:null;return!t||m||b||console.error("FormFieldGroupExpandable:","toggleAriaLabel or the titleText prop of FormFieldGroupHeader is required to make the toggle button accessible"),s.createElement("div",Object.assign({className:(0,n.i)(c.Z.formFieldGroup,o&&t&&c.Z.modifiers.expanded,r),role:"group"},b&&{"aria-labelledby":`${l.props.titleText.id}`},u),t&&s.createElement(g.w,{prefix:"form-field-group-toggle"},(e=>s.createElement(p,Object.assign({onToggle:d,isExpanded:o,"aria-label":m,toggleId:e},b&&{"aria-labelledby":`${l.props.titleText.id} ${e}`})))),l&&l,(!t||t&&o)&&s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupBody)},a))};b.displayName="InternalFormFieldGroup";const f=e=>{var{children:a,className:r,header:l}=e,t=(0,i._T)(e,["children","className","header"]);return s.createElement(b,Object.assign({className:r,header:l},t),a)};f.displayName="FormFieldGroup";const N=e=>{var{children:a,className:r,header:l,isExpanded:t=!1,toggleAriaLabel:o}=e,n=(0,i._T)(e,["children","className","header","isExpanded","toggleAriaLabel"]);const[d,c]=(0,s.useState)(t);return s.createElement(b,Object.assign({className:r,header:l,isExpandable:!0,isExpanded:d,toggleAriaLabel:o,onToggle:()=>c(!d)},n),a)};N.displayName="FormFieldGroupExpandable";const E=e=>{var{className:a,titleText:r,titleDescription:l,actions:t}=e,o=(0,i._T)(e,["className","titleText","titleDescription","actions"]);return s.createElement("div",Object.assign({className:(0,n.i)(c.Z.formFieldGroupHeader,a)},o),s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupHeaderMain)},r&&s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupHeaderTitle)},s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupHeaderTitleText),id:r.id},r.text)),l&&s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupHeaderDescription)},l)),s.createElement("div",{className:(0,n.i)(c.Z.formFieldGroupHeaderActions)},t&&t))};E.displayName="FormFieldGroupHeader";var v=r(59775),h=r(87828);const F=e=>{var{className:a="",children:r,title:l="",titleElement:t="div"}=e,o=(0,i._T)(e,["className","children","title","titleElement"]);return s.createElement(g.w,{prefix:"pf-form-section-title"},(e=>s.createElement("section",Object.assign({className:(0,n.i)(c.Z.formSection,a),role:"group"},l&&{"aria-labelledby":e},o),l&&s.createElement(t,{id:e,className:(0,n.i)(c.Z.formSectionTitle,a)},l),r)))};F.displayName="FormSection";const T=o().createContext({}),x=T.Consumer,Z=({initialValues:e,children:a})=>{var r;const[l,t]=o().useState(e||{}),[s,n]=o().useState({}),[d,c]=o().useState({}),[m,u]=o().useState({}),p=0===(null===(r=Object.keys(s))||void 0===r?void 0:r.length);return o().createElement(T.Provider,{value:{values:l,errors:s,touched:m,isValid:p,setValues:t,setErrors:n,getValue:e=>Object.entries(l).reduce(((a,[r,l])=>r===e?l:a),""),setValue:(e,a,r=!0)=>{var i;l[e]!==a&&(t((r=>Object.assign(Object.assign({},r),{[e]:a}))),r&&(null===(i=d[e])||void 0===i||i.call(d,a)))},getError:e=>Object.entries(s).reduce(((a,[r,l])=>r===e?l:a),""),setError:(e,a)=>s[e]!==a&&n((r=>{var l=e,t=(r[l],(0,i._T)(r,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),!!a&&{[e]:a})})),validate:()=>{var e;return null===(e=Object.entries(d))||void 0===e?void 0:e.reduce(((e,[a,r])=>{const t=r(l[a]);return t&&(e[a]=t),e}),{})},setValidator:(e,a)=>d[e]!==a&&c((r=>Object.assign(Object.assign({},r),{[e]:a}))),isTouched:e=>Object.entries(m).reduce(((a,[r,l])=>r===e?l:a),!1),setTouched:(e,a)=>m[e]!==a&&u((r=>{var l=e,t=(r[l],(0,i._T)(r,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),a&&{[e]:a})}))}},"function"==typeof a?o().createElement(T.Consumer,null,(e=>a(e))):a)};Z.displayName="FormContextProvider";const G=()=>o().useContext(T)}}]);
//# sourceMappingURL=../sourcemaps/913.0e3a74a7bc5b873c1544ae95bfce86cc.js.map