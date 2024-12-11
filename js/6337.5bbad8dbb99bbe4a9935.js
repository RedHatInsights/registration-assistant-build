"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[6337],{35600:(e,a,r)=>{r.d(a,{K:()=>o});var l=r(8674),t=r(19365),i=r(70358),s=r(33774);const o=e=>{var{children:a=null,className:r=""}=e,o=(0,l.Tt)(e,["children","className"]);const n=(0,s.A)(i.A.formGroup,i.A.modifiers.action,r),d=t.createElement("div",{className:(0,s.A)(i.A.formActions)},a);return t.createElement("div",Object.assign({},o,{className:n}),t.createElement("div",{className:(0,s.A)(i.A.formGroupControl)},d))};o.displayName="ActionGroup"},73133:(e,a,r)=>{r.d(a,{l:()=>d});var l=r(8674),t=r(19365),i=r(70358),s=r(33774);const o="--pf-v5-c-form--m-limit-width--MaxWidth",n=e=>{var{children:a=null,className:r="",isHorizontal:n=!1,isWidthLimited:d=!1,maxWidth:c="",innerRef:m}=e,u=(0,l.Tt)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return t.createElement("form",Object.assign({noValidate:!0},c&&{style:Object.assign({[o]:c},u.style)},u,{className:(0,s.A)(i.A.form,n&&i.A.modifiers.horizontal,(d||c)&&i.A.modifiers.limitWidth,r),ref:m}),a)},d=t.forwardRef(((e,a)=>t.createElement(n,Object.assign({innerRef:a},e))));d.displayName="Form"},56780:(e,a,r)=>{r.d(a,{g:()=>d});var l=r(8674),t=r(19365),i=r(70358),s=r(57709),o=r(33774),n=r(65518);const d=e=>{var{children:a=null,className:r="",label:d,labelInfo:c,labelIcon:m,isRequired:u=!1,isInline:p=!1,hasNoPaddingTop:g=!1,isStack:b=!1,fieldId:A,role:N}=e,f=(0,l.Tt)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const E="group"===N||"radiogroup"===N,v=E?"span":"label",h=t.createElement(t.Fragment,null,t.createElement(v,Object.assign({className:(0,o.A)(i.A.formLabel)},!E&&{htmlFor:A}),t.createElement("span",{className:(0,o.A)(i.A.formLabelText)},d),u&&t.createElement("span",{className:(0,o.A)(i.A.formLabelRequired),"aria-hidden":"true"}," ",s.L))," ",t.isValidElement(m)&&m);return t.createElement(n.N,null,(e=>t.createElement("div",Object.assign({className:(0,o.A)(i.A.formGroup,r)},N&&{role:N},E&&{"aria-labelledby":`${A||e}-legend`},f),d&&t.createElement("div",Object.assign({className:(0,o.A)(i.A.formGroupLabel,c&&i.A.modifiers.info,g&&i.A.modifiers.noPaddingTop)},E&&{id:`${A||e}-legend`}),c&&t.createElement(t.Fragment,null,t.createElement("div",{className:(0,o.A)(i.A.formGroupLabelMain)},h),t.createElement("div",{className:(0,o.A)(i.A.formGroupLabelInfo)},c)),!c&&h),t.createElement("div",{className:(0,o.A)(i.A.formGroupControl,p&&i.A.modifiers.inline,b&&i.A.modifiers.stack)},a))))};d.displayName="FormGroup"},78718:(e,a,r)=>{r.r(a),r.d(a,{ActionGroup:()=>l.K,Form:()=>t.l,FormAlert:()=>c,FormContextConsumer:()=>T,FormContextProvider:()=>x,FormFieldGroup:()=>A,FormFieldGroupExpandable:()=>N,FormFieldGroupHeader:()=>f,FormGroup:()=>E.g,FormHelperText:()=>v.e,FormSection:()=>h,useFormContext:()=>G});var l=r(35600),t=r(73133),i=r(8674),s=r(19365),o=r.n(s),n=r(33774),d=r(70358);const c=e=>{var{children:a=null,className:r=""}=e,l=(0,i.Tt)(e,["children","className"]);return s.createElement("div",Object.assign({},l,{className:(0,n.A)(`${d.A.form}__alert`,r)}),a)};c.displayName="FormAlert";var m=r(89015),u=r(72583);const p=e=>{var{className:a,onToggle:r,isExpanded:l,"aria-label":t,"aria-labelledby":o,toggleId:c}=e,p=(0,i.Tt)(e,["className","onToggle","isExpanded","aria-label","aria-labelledby","toggleId"]);return s.createElement("div",Object.assign({className:(0,n.A)(d.A.formFieldGroupToggle,a)},p),s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupToggleButton)},s.createElement(u.$n,{variant:"plain","aria-label":t,onClick:r,"aria-expanded":l,"aria-labelledby":o,id:c},s.createElement("span",{className:(0,n.A)(d.A.formFieldGroupToggleIcon)},s.createElement(m.default,{"aria-hidden":"true"})))))};p.displayName="FormFieldGroupToggle";var g=r(65518);const b=e=>{var{children:a,className:r,header:l,isExpandable:t,isExpanded:o,onToggle:c,toggleAriaLabel:m}=e,u=(0,i.Tt)(e,["children","className","header","isExpandable","isExpanded","onToggle","toggleAriaLabel"]);const b=l?l.props.titleText:null;return!t||m||b||console.error("FormFieldGroupExpandable:","toggleAriaLabel or the titleText prop of FormFieldGroupHeader is required to make the toggle button accessible"),s.createElement("div",Object.assign({className:(0,n.A)(d.A.formFieldGroup,o&&t&&d.A.modifiers.expanded,r),role:"group"},b&&{"aria-labelledby":`${l.props.titleText.id}`},u),t&&s.createElement(g.N,{prefix:"form-field-group-toggle"},(e=>s.createElement(p,Object.assign({onToggle:c,isExpanded:o,"aria-label":m,toggleId:e},b&&{"aria-labelledby":`${l.props.titleText.id} ${e}`})))),l&&l,(!t||t&&o)&&s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupBody)},a))};b.displayName="InternalFormFieldGroup";const A=e=>{var{children:a,className:r,header:l}=e,t=(0,i.Tt)(e,["children","className","header"]);return s.createElement(b,Object.assign({className:r,header:l},t),a)};A.displayName="FormFieldGroup";const N=e=>{var{children:a,className:r,header:l,isExpanded:t=!1,toggleAriaLabel:o}=e,n=(0,i.Tt)(e,["children","className","header","isExpanded","toggleAriaLabel"]);const[d,c]=(0,s.useState)(t);return s.createElement(b,Object.assign({className:r,header:l,isExpandable:!0,isExpanded:d,toggleAriaLabel:o,onToggle:()=>c(!d)},n),a)};N.displayName="FormFieldGroupExpandable";const f=e=>{var{className:a,titleText:r,titleDescription:l,actions:t}=e,o=(0,i.Tt)(e,["className","titleText","titleDescription","actions"]);return s.createElement("div",Object.assign({className:(0,n.A)(d.A.formFieldGroupHeader,a)},o),s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupHeaderMain)},r&&s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupHeaderTitle)},s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupHeaderTitleText),id:r.id},r.text)),l&&s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupHeaderDescription)},l)),s.createElement("div",{className:(0,n.A)(d.A.formFieldGroupHeaderActions)},t&&t))};f.displayName="FormFieldGroupHeader";var E=r(56780),v=r(61864);const h=e=>{var{className:a="",children:r,title:l="",titleElement:t="div"}=e,o=(0,i.Tt)(e,["className","children","title","titleElement"]);return s.createElement(g.N,{prefix:"pf-form-section-title"},(e=>s.createElement("section",Object.assign({className:(0,n.A)(d.A.formSection,a),role:"group"},l&&{"aria-labelledby":e},o),l&&s.createElement(t,{id:e,className:(0,n.A)(d.A.formSectionTitle,a)},l),r)))};h.displayName="FormSection";const F=o().createContext({}),T=F.Consumer,x=({initialValues:e,children:a})=>{var r;const[l,t]=o().useState(e||{}),[s,n]=o().useState({}),[d,c]=o().useState({}),[m,u]=o().useState({}),p=0===(null===(r=Object.keys(s))||void 0===r?void 0:r.length);return o().createElement(F.Provider,{value:{values:l,errors:s,touched:m,isValid:p,setValues:t,setErrors:n,getValue:e=>Object.entries(l).reduce(((a,[r,l])=>r===e?l:a),""),setValue:(e,a,r=!0)=>{var i;l[e]!==a&&(t((r=>Object.assign(Object.assign({},r),{[e]:a}))),r&&(null===(i=d[e])||void 0===i||i.call(d,a)))},getError:e=>Object.entries(s).reduce(((a,[r,l])=>r===e?l:a),""),setError:(e,a)=>s[e]!==a&&n((r=>{var l=e,t=(r[l],(0,i.Tt)(r,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),!!a&&{[e]:a})})),validate:()=>{var e;return null===(e=Object.entries(d))||void 0===e?void 0:e.reduce(((e,[a,r])=>{const t=r(l[a]);return t&&(e[a]=t),e}),{})},setValidator:(e,a)=>d[e]!==a&&c((r=>Object.assign(Object.assign({},r),{[e]:a}))),isTouched:e=>Object.entries(m).reduce(((a,[r,l])=>r===e?l:a),!1),setTouched:(e,a)=>m[e]!==a&&u((r=>{var l=e,t=(r[l],(0,i.Tt)(r,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),a&&{[e]:a})}))}},"function"==typeof a?o().createElement(F.Consumer,null,(e=>a(e))):a)};x.displayName="FormContextProvider";const G=()=>o().useContext(F)}}]);