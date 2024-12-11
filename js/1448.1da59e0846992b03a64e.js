(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[1448,1398,9067],{82944:(e,t,s)=>{"use strict";s.d(t,{T:()=>u});var r=s(8674),n=s(19365),a=s(19581),i=s(33774),o=s(19202),l=s(31003),c=s(99851);const d={success:o.default,error:l.Ay,warning:c.Ay},u=e=>{var{status:t,customIcon:s,className:o}=e,l=(0,r.Tt)(e,["status","customIcon","className"]);const c=t&&d[t];return n.createElement("span",Object.assign({className:(0,i.A)(a.A.formControlIcon,t&&a.A.modifiers.status,o)},l),s||n.createElement(c,null))}},23285:(e,t,s)=>{"use strict";s.d(t,{RQ:()=>n,ks:()=>m,lB:()=>h,tj:()=>r});var r,n,a=s(8674),i=s(19365),o=s(19581),l=s(33774),c=s(21678),d=s(47931),u=s(31398),p=s(49045),f=s(82944);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(r||(r={})),function(e){e.default="default",e.plain="plain"}(n||(n={}));class h extends i.Component{constructor(e){super(e),this.inputRef=i.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,d.Mr)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:s,onFocus:r}=this.props;(t||s)&&this.restoreText(),r&&r(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:s,onBlur:r}=this.props;(t||s)&&this.handleResize(),r&&r(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,u.getDefaultOUIAId)(h.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.N)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:r,value:n,placeholder:d,validated:p,onChange:h,onFocus:v,onBlur:g,isLeftTruncated:y,isStartTruncated:I,isExpanded:x,expandedProps:T,readOnly:w,readOnlyVariant:b,isRequired:C,isDisabled:A,customIcon:O,ouiaId:z,ouiaSafe:R}=e,E=(0,a.Tt)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),$=["success","error","warning"].includes(p),N=T?{"aria-expanded":null==T?void 0:T.isExpanded,"aria-controls":null==T?void 0:T.ariaControls,role:"combobox"}:{};return i.createElement("span",{className:(0,l.A)(o.A.formControl,b&&o.A.modifiers.readonly,"plain"===b&&o.A.modifiers.plain,A&&o.A.modifiers.disabled,(x||(null==T?void 0:T.isExpanded))&&o.A.modifiers.expanded,O&&o.A.modifiers.icon,$&&o.A.modifiers[p],s)},i.createElement("input",Object.assign({},E,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:r,value:this.sanitizeInputValue(n),"aria-invalid":E["aria-invalid"]?E["aria-invalid"]:p===c.nh.error},N,{required:C,disabled:A,readOnly:!!b||w,ref:t||this.inputRef,placeholder:d},(0,u.getOUIAProps)(m.displayName,void 0!==z?z:this.state.ouiaStateId,R))),(O||$)&&i.createElement("span",{className:(0,l.A)(o.A.formControlUtilities)},O&&i.createElement(f.T,{customIcon:O}),$&&i.createElement(f.T,{status:p})))}}h.displayName="TextInputBase",h.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:r.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const m=i.forwardRef(((e,t)=>i.createElement(h,Object.assign({},e,{innerRef:t}))));m.displayName="TextInput"},21448:(e,t,s)=>{"use strict";s.r(t),s.d(t,{TextInput:()=>r.ks,TextInputBase:()=>r.lB,TextInputReadOnlyVariant:()=>r.RQ,TextInputTypes:()=>r.tj});var r=s(23285)},31398:(e,t,s)=>{"use strict";s.r(t),s.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>o,useOUIAId:()=>c,useOUIAProps:()=>l});var r=s(19365);let n=0;const a="OUIA-Generated-",i={};function o(e,t,s=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":s,"data-ouia-component-id":t}}const l=(e,t,s=!0,r)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":s,"data-ouia-component-id":c(e,t,r)}),c=(e,t,s)=>{const n=(0,r.useMemo)((()=>d(e,s)),[e,s]);return null!=t?t:n};function d(e,t){try{let s;return s="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[s]||(i[s]=0),`${a}${e}-${t?`${t}-`:""}${++i[s]}`}catch(s){return`${a}${e}-${t?`${t}-`:""}${++n}`}}},49045:(e,t,s)=>{"use strict";s.d(t,{N:()=>n});var r=s(47931);const n=(e,t,s)=>{let n;if(r.Sw){const{ResizeObserver:a}=window;if(e&&a){const i=new a((e=>{s?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&(0,r.sg)(t,100)})):Array.isArray(e)&&e.length>0&&t()}));i.observe(e),n=()=>i.unobserve(e)}else window.addEventListener("resize",t),n=()=>window.removeEventListener("resize",t)}return()=>{n&&n()}}},68419:(e,t,s)=>{"use strict";s.d(t,{w:()=>i});var r=s(8674),n=s(19365);let a=0;function i({name:e,xOffset:t=0,yOffset:s=0,width:i,height:o,svgPath:l}){var c;return c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+a++}render(){const e=this.props,{title:a,className:c}=e,d=(0,r.Tt)(e,["title","className"]),u=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(a),f=[t,s,i,o].join(" ");return n.createElement("svg",Object.assign({className:u,viewBox:f,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&n.createElement("title",{id:this.id},a),n.createElement("path",{d:l}))}},c.displayName=e,c}},19202:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CheckCircleIcon:()=>a,CheckCircleIconConfig:()=>n,default:()=>i});var r=s(68419);const n={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},a=(0,r.w)(n),i=a},31003:(e,t,s)=>{"use strict";s.d(t,{$Q:()=>r,Ay:()=>n});const r=(0,s(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),n=r},99851:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>r});const r=(0,s(68419).w)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},19581:(e,t,s)=>{"use strict";s.d(t,{A:()=>r}),s(92004);const r={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},92004:()=>{}}]);