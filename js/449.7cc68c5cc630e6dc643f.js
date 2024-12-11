(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[449,1398,1282],{82944:(e,t,s)=>{"use strict";s.d(t,{T:()=>d});var i=s(8674),a=s(19365),n=s(19581),r=s(33774),l=s(19202),o=s(31003),c=s(99851);const u={success:l.default,error:o.Ay,warning:c.Ay},d=e=>{var{status:t,customIcon:s,className:l}=e,o=(0,i.Tt)(e,["status","customIcon","className"]);const c=t&&u[t];return a.createElement("span",Object.assign({className:(0,r.A)(n.A.formControlIcon,t&&n.A.modifiers.status,l)},o),s||a.createElement(c,null))}},35253:(e,t,s)=>{"use strict";s.d(t,{M:()=>o});var i=s(8674),a=s(19365),n=s(37621),r=s(33774);const l=e=>{var{className:t,children:s,innerRef:l}=e,o=(0,i.Tt)(e,["className","children","innerRef"]);const c=a.useRef(null),u=l||c;return a.createElement("div",Object.assign({ref:u,className:(0,r.A)(n.A.inputGroup,t)},o),s)};l.displayName="InputGroupBase";const o=a.forwardRef(((e,t)=>a.createElement(l,Object.assign({innerRef:t},e))));o.displayName="InputGroup"},53642:(e,t,s)=>{"use strict";s.d(t,{b:()=>l});var i=s(8674),a=s(19365),n=s(37621),r=s(33774);const l=e=>{var{className:t,children:s,isFill:l=!1,isBox:o=!1,isPlain:c,isDisabled:u}=e,d=(0,i.Tt)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return a.createElement("div",Object.assign({className:(0,r.A)(n.A.inputGroupItem,l&&n.A.modifiers.fill,o&&n.A.modifiers.box,c&&n.A.modifiers.plain,u&&n.A.modifiers.disabled,t)},d),s)};l.displayName="InputGroupItem"},31282:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Slider:()=>C});var i=s(8674),a=s(19365);s(86073);const n="pf-m-disabled",r="pf-m-active",l="pf-m-floating",o="pf-v5-c-slider__actions",c="pf-v5-c-slider__steps",u="pf-v5-c-slider__value";var d=s(33774);const p="--pf-v5-c-slider__step--Left",m="0",f=e=>{var{className:t,label:s,value:n,isTickHidden:l=!1,isLabelHidden:o=!1,isActive:c=!1}=e,u=(0,i.Tt)(e,["className","label","value","isTickHidden","isLabelHidden","isActive"]);const f={[p]:`${n||m}%`};return a.createElement("div",Object.assign({className:(0,d.A)("pf-v5-c-slider__step",c&&r,t),style:f},u),!l&&a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__step-tick")}),!o&&s&&a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__step-label")},s))};f.displayName="SliderStep";var h=s(35253),v=s(53642),b=s(37621);const g=e=>{var{className:t,component:s="span",children:n,isPlain:r,isDisabled:l}=e,o=(0,i.Tt)(e,["className","component","children","isPlain","isDisabled"]);const c=s;return a.createElement(v.b,{isPlain:r,isBox:!0,isDisabled:l},a.createElement(c,Object.assign({className:(0,d.A)(b.A.inputGroupText,t)},o),n))};g.displayName="InputGroupText";var A=s(23285),y=s(45523);const E="--pf-v5-c-slider--value",N="--pf-v5-c-slider__value--c-form-control--width-chars";var w=s(47931);const C=e=>{var{className:t,value:s=0,customSteps:r,areCustomStepsContinuous:p=!1,isDisabled:m=!1,isInputVisible:b=!1,inputValue:C=0,inputLabel:x,inputAriaLabel:T="Slider value input",thumbAriaLabel:I="Value",hasTooltipOverThumb:R=!1,inputPosition:L="end",onChange:O,leftActions:_,startActions:S,rightActions:k,endActions:P,step:z=1,min:D=0,max:$=100,showTicks:B=!1,showBoundaries:M=!0,"aria-describedby":j,"aria-labelledby":F}=e,G=(0,i.Tt)(e,["className","value","customSteps","areCustomStepsContinuous","isDisabled","isInputVisible","inputValue","inputLabel","inputAriaLabel","thumbAriaLabel","hasTooltipOverThumb","inputPosition","onChange","leftActions","startActions","rightActions","endActions","step","min","max","showTicks","showBoundaries","aria-describedby","aria-labelledby"]);const H=a.useRef(),U=a.useRef(),[V,q]=(0,a.useState)(s),[X,W]=(0,a.useState)(C);let K;a.useEffect((()=>{K="rtl"===(0,w.iJ)(H.current)})),a.useEffect((()=>{q(s)}),[s]),a.useEffect((()=>{W(C)}),[C]);let Q,J=0;const Y=100*(V-D)/($-D),Z={[E]:`${Y}%`},ee=a.useMemo((()=>X.toString().length),[X]),te={[N]:ee},se=(e,t)=>{W(Number(t))},ie=e=>{"Enter"===e.key&&(e.preventDefault(),O&&O(e,V,X,W))},ae=e=>{e.stopPropagation()},ne=e=>{O&&O(e,V,X,W)},re=()=>{if(!p&&r){const e=r.find((e=>e.value===V));if(e)return e.label}return Number(Number(V).toFixed(2)).toString()},le=e=>{"touchmove"===e.type&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.touches&&e.touches.length?e.touches[0].clientX:e.clientX;let s;s=K?H.current.getBoundingClientRect().right-t-J:t-J-H.current.getBoundingClientRect().left;const i=H.current.offsetWidth-U.current.offsetWidth;s<0&&(s=0),s>i&&(s=i);const a=((e,t)=>100*e/t)(s,i);U.current.style.setProperty(E,`${a}%`);const n=Math.round(100*(a*($-D)/100+D))/100;if(q(n),r||(Q=Math.round(100*(Math.round((n-D)/z)*z+D))/100,U.current.style.setProperty(E,`${Q}%`),q(Q)),!p&&r){let e=a;100!==r[r.length-1].value&&(e=a*($-D)/100+D);const t=r.findIndex((t=>t.value>=e));if(r[t].value===e)Q=r[t].value;else{const s=(r[t].value+r[t-1].value)/2;Q=s>e?r[t-1].value:r[t].value}q(Q)}O&&O(e,void 0!==Q?Q:n)},oe=a.useCallback(le,[D,$,r,O]),ce=a.useCallback((()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",ce),document.removeEventListener("touchmove",oe),document.removeEventListener("touchend",ce),document.removeEventListener("touchcancel",ce)}),[D,$,r,O]),ue=()=>{const e=a.createElement(A.ks,{isDisabled:m,type:"number",value:X,"aria-label":T,onKeyDown:ie,onChange:se,onClick:ae,onFocus:ae,onBlur:ne});return x?a.createElement(h.M,null,a.createElement(v.b,{isFill:!0},e),a.createElement(g,{isDisabled:m},x)):e},de=(e,t,s)=>100*(e-t)/(s-t),pe=a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__thumb"),ref:U,tabIndex:m?-1:0,role:"slider","aria-valuemin":r?r[0].value:D,"aria-valuemax":r?r[r.length-1].value:$,"aria-valuenow":V,"aria-valuetext":re(),"aria-label":I,"aria-disabled":m,"aria-describedby":j,"aria-labelledby":F,onMouseDown:m?null:e=>{e.stopPropagation(),e.preventDefault(),J=K?U.current.getBoundingClientRect().right-e.clientX:e.clientX-U.current.getBoundingClientRect().left,document.addEventListener("mousemove",oe),document.addEventListener("mouseup",ce)},onTouchStart:m?null:e=>{e.stopPropagation(),J=K?U.current.getBoundingClientRect().right-e.touches[0].clientX:e.touches[0].clientX-U.current.getBoundingClientRect().left,document.addEventListener("touchmove",oe,{passive:!1}),document.addEventListener("touchend",ce),document.addEventListener("touchcancel",ce)},onKeyDown:m?null:e=>{const t=e.key;if("ArrowLeft"!==t&&"ArrowRight"!==t)return;e.preventDefault();let s=V;if(!p&&r){const e=r.findIndex((e=>e.value===V));"ArrowRight"===t?K?e-1>=0&&(s=r[e-1].value):e+1<r.length&&(s=r[e+1].value):"ArrowLeft"===t&&(K?e+1<r.length&&(s=r[e+1].value):e-1>=0&&(s=r[e-1].value))}else"ArrowRight"===t?s=K?V-z>=D?V-z:D:V+z<=$?V+z:$:"ArrowLeft"===t&&(s=K?V+z<=$?V+z:$:V-z>=D?V-z:D);s!==V&&(U.current.style.setProperty(E,`${s}%`),q(s),O&&O(e,s))},onClick:m?null:()=>{U.current.focus()}});return a.createElement("div",Object.assign({className:(0,d.A)("pf-v5-c-slider",t,m&&n),style:Object.assign(Object.assign({},Z),te)},G),(_||S)&&a.createElement("div",{className:(0,d.A)(o)},_||S),a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__main")},a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__rail"),ref:H,onClick:m?null:e=>{le(e),Q&&!p&&(U.current.style.setProperty(E,`${Q}%`),q(Q),O&&O(e,Q))}},a.createElement("div",{className:(0,d.A)("pf-v5-c-slider__rail-track")})),r&&a.createElement("div",{className:(0,d.A)(c),"aria-hidden":"true"},r.map((e=>{const t=r[0].value,s=r[r.length-1].value,i=de(e.value,t,s);return a.createElement(f,{key:e.value,value:i,label:e.label,isLabelHidden:e.isLabelHidden,isActive:e.value<=V})}))),!r&&(B||M)&&a.createElement("div",{className:(0,d.A)(c),"aria-hidden":"true"},(()=>{const e=[];for(let t=D;t<=$;t+=z){const s=de(t,D,$);!B&&M&&t!==D&&t!==$||e.push(a.createElement(f,{key:t,value:s,label:t.toString(),isTickHidden:!B,isLabelHidden:t!==D&&t!==$||!M,isActive:t<=V}))}return e})()),R?a.createElement(y.m,{triggerRef:U,entryDelay:0,content:re()},pe):pe,b&&"aboveThumb"===L&&a.createElement("div",{className:(0,d.A)(u,l)},ue())),b&&("right"===L||"end"===L)&&a.createElement("div",{className:(0,d.A)(u)},ue()),(k||P)&&a.createElement("div",{className:(0,d.A)(o)},k||P))};C.displayName="Slider"},23285:(e,t,s)=>{"use strict";s.d(t,{RQ:()=>a,ks:()=>h,lB:()=>f,tj:()=>i});var i,a,n=s(8674),r=s(19365),l=s(19581),o=s(33774),c=s(21678),u=s(47931),d=s(31398),p=s(49045),m=s(82944);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={})),function(e){e.default="default",e.plain="plain"}(a||(a={}));class f extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,u.Mr)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:s,onFocus:i}=this.props;(t||s)&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:s,onBlur:i}=this.props;(t||s)&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.getDefaultOUIAId)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.N)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:i,value:a,placeholder:u,validated:p,onChange:f,onFocus:v,onBlur:b,isLeftTruncated:g,isStartTruncated:A,isExpanded:y,expandedProps:E,readOnly:N,readOnlyVariant:w,isRequired:C,isDisabled:x,customIcon:T,ouiaId:I,ouiaSafe:R}=e,L=(0,n.Tt)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),O=["success","error","warning"].includes(p),_=E?{"aria-expanded":null==E?void 0:E.isExpanded,"aria-controls":null==E?void 0:E.ariaControls,role:"combobox"}:{};return r.createElement("span",{className:(0,o.A)(l.A.formControl,w&&l.A.modifiers.readonly,"plain"===w&&l.A.modifiers.plain,x&&l.A.modifiers.disabled,(y||(null==E?void 0:E.isExpanded))&&l.A.modifiers.expanded,T&&l.A.modifiers.icon,O&&l.A.modifiers[p],s)},r.createElement("input",Object.assign({},L,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:i,value:this.sanitizeInputValue(a),"aria-invalid":L["aria-invalid"]?L["aria-invalid"]:p===c.nh.error},_,{required:C,disabled:x,readOnly:!!w||N,ref:t||this.inputRef,placeholder:u},(0,d.getOUIAProps)(h.displayName,void 0!==I?I:this.state.ouiaStateId,R))),(T||O)&&r.createElement("span",{className:(0,o.A)(l.A.formControlUtilities)},T&&r.createElement(m.T,{customIcon:T}),O&&r.createElement(m.T,{status:p})))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:i.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const h=r.forwardRef(((e,t)=>r.createElement(f,Object.assign({},e,{innerRef:t}))));h.displayName="TextInput"},31398:(e,t,s)=>{"use strict";s.r(t),s.d(t,{getDefaultOUIAId:()=>u,getOUIAProps:()=>l,useOUIAId:()=>c,useOUIAProps:()=>o});var i=s(19365);let a=0;const n="OUIA-Generated-",r={};function l(e,t,s=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":s,"data-ouia-component-id":t}}const o=(e,t,s=!0,i)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":s,"data-ouia-component-id":c(e,t,i)}),c=(e,t,s)=>{const a=(0,i.useMemo)((()=>u(e,s)),[e,s]);return null!=t?t:a};function u(e,t){try{let s;return s="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,r[s]||(r[s]=0),`${n}${e}-${t?`${t}-`:""}${++r[s]}`}catch(s){return`${n}${e}-${t?`${t}-`:""}${++a}`}}},49045:(e,t,s)=>{"use strict";s.d(t,{N:()=>a});var i=s(47931);const a=(e,t,s)=>{let a;if(i.Sw){const{ResizeObserver:n}=window;if(e&&n){const r=new n((e=>{s?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&(0,i.sg)(t,100)})):Array.isArray(e)&&e.length>0&&t()}));r.observe(e),a=()=>r.unobserve(e)}else window.addEventListener("resize",t),a=()=>window.removeEventListener("resize",t)}return()=>{a&&a()}}},68419:(e,t,s)=>{"use strict";s.d(t,{w:()=>r});var i=s(8674),a=s(19365);let n=0;function r({name:e,xOffset:t=0,yOffset:s=0,width:r,height:l,svgPath:o}){var c;return c=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+n++}render(){const e=this.props,{title:n,className:c}=e,u=(0,i.Tt)(e,["title","className"]),d=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(n),m=[t,s,r,l].join(" ");return a.createElement("svg",Object.assign({className:d,viewBox:m,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},u),p&&a.createElement("title",{id:this.id},n),a.createElement("path",{d:o}))}},c.displayName=e,c}},19202:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CheckCircleIcon:()=>n,CheckCircleIconConfig:()=>a,default:()=>r});var i=s(68419);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},n=(0,i.w)(a),r=n},31003:(e,t,s)=>{"use strict";s.d(t,{$Q:()=>i,Ay:()=>a});const i=(0,s(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),a=i},99851:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>i});const i=(0,s(68419).w)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},19581:(e,t,s)=>{"use strict";s.d(t,{A:()=>i}),s(92004);const i={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},37621:(e,t,s)=>{"use strict";s.d(t,{A:()=>i}),s(71036);const i={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}},79826:()=>{},92004:()=>{},71036:()=>{},86073:()=>{},27077:()=>{}}]);