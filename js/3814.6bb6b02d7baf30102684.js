"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[3814,5964],{82011:(e,t,i)=>{i.d(t,{B:()=>h});var a=i(65353),r=i(28416),n=i(12276),s=i(38296),l=i(12455),o=i(20344),d=i(49644),c=i(62472),u=i(5964);class p extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.value)},e.id||e["aria-label"]||console.error("FormSelect requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,c.ql)(p.displayName,e.validated)}}render(){const e=this.props,{children:t,className:i,value:n,validated:m,isDisabled:v,isRequired:f,ouiaId:h,ouiaSafe:b}=e,g=(0,a._T)(e,["children","className","value","validated","isDisabled","isRequired","ouiaId","ouiaSafe"]),y=r.Children.toArray(t).find((e=>e.props.value===n)),N=y&&y.props.isPlaceholder,E=["success","error","warning"].includes(m);return r.createElement("span",{className:(0,s.i)(l.Z.formControl,v&&l.Z.modifiers.disabled,N&&l.Z.modifiers.placeholder,E&&l.Z.modifiers[m],i)},r.createElement("select",Object.assign({},g,{"aria-invalid":m===o.LD.error},(0,c.dp)(p.displayName,void 0!==h?h:this.state.ouiaStateId,b),{onChange:this.handleChange,disabled:v,required:f,value:n}),t),r.createElement("span",{className:(0,s.i)(l.Z.formControlUtilities)},E&&r.createElement(d.J,{status:m}),r.createElement("span",{className:(0,s.i)(l.Z.formControlToggleIcon)},r.createElement(u.default,null))))}}p.displayName="FormSelect",p.defaultProps={className:"",value:"",validated:"default",isDisabled:!1,isRequired:!1,onBlur:()=>{},onFocus:()=>{},onChange:()=>{},ouiaSafe:!0};var m=i(45469),v=i(92607);const f=e=>{var{className:t,children:i,innerRef:l}=e,o=(0,a._T)(e,["className","children","innerRef"]);const d=[p,m.Kx,v.oi].map((e=>e.displayName)),c=(()=>{const e=e=>r.Children.toArray(e).find((e=>{var t,i;return!d.includes(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.displayName)&&(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.id)}));let t=e(i);return t||(r.Children.toArray(i).find((i=>{const a=e(i.props.children);if(a)return t=a,!0})),t)})(),u=r.useRef(null),f=l||u,h=r.Children.map(i,(e=>{var t;if("InputGroupItem"===(null==e?void 0:e.type.displayName)){const t=r.Children.map(e.props.children,(e=>{var t;return e.props?e.props["aria-describedby"]?e:d.includes(e.type.displayName)?r.cloneElement(e,{"aria-describedby":""===e.props["aria-describedby"]||null===(t=null==c?void 0:c.props)||void 0===t?void 0:t.id}):e:e}));return r.cloneElement(e,{},t)}return(null==e?void 0:e.props["aria-describedby"])?e:d.includes(null==e?void 0:e.type.displayName)?r.cloneElement(e,{"aria-describedby":""===e.props["aria-describedby"]||null===(t=null==c?void 0:c.props)||void 0===t?void 0:t.id}):e}));return r.createElement("div",Object.assign({ref:f,className:(0,s.i)(n.Z.inputGroup,t)},o),c?h:i)};f.displayName="InputGroupBase";const h=r.forwardRef(((e,t)=>r.createElement(f,Object.assign({innerRef:t},e))));h.displayName="InputGroup"},43446:(e,t,i)=>{i.d(t,{o:()=>l});var a=i(65353),r=i(28416),n=i(12276),s=i(38296);const l=e=>{var{className:t,children:i,isFill:l=!1,isBox:o=!1,isPlain:d,isDisabled:c}=e,u=(0,a._T)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return r.createElement("div",Object.assign({className:(0,s.i)(n.Z.inputGroupItem,l&&n.Z.modifiers.fill,o&&n.Z.modifiers.box,d&&n.Z.modifiers.plain,c&&n.Z.modifiers.disabled,t)},u),i)};l.displayName="InputGroupItem"},13814:(e,t,i)=>{i.r(t),i.d(t,{Slider:()=>E});var a=i(65353),r=i(28416);i(27479);const n="pf-m-disabled",s="pf-m-active",l="pf-m-floating",o="pf-v5-c-slider__actions",d="pf-v5-c-slider__steps",c="pf-v5-c-slider__value";var u=i(38296);const p="--pf-v5-c-slider__step--Left",m="0",v=e=>{var{className:t,label:i,value:n,isTickHidden:l=!1,isLabelHidden:o=!1,isActive:d=!1}=e,c=(0,a._T)(e,["className","label","value","isTickHidden","isLabelHidden","isActive"]);const v={[p]:`${n||m}%`};return r.createElement("div",Object.assign({className:(0,u.i)("pf-v5-c-slider__step",d&&s,t),style:v},c),!l&&r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__step-tick")}),!o&&i&&r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__step-label")},i))};v.displayName="SliderStep";var f=i(82011),h=i(43446),b=i(12276);const g=e=>{var{className:t,component:i="span",children:n,isPlain:s,isDisabled:l}=e,o=(0,a._T)(e,["className","component","children","isPlain","isDisabled"]);const d=i;return r.createElement(h.o,{isPlain:s,isBox:!0,isDisabled:l},r.createElement(d,Object.assign({className:(0,u.i)(b.Z.inputGroupText,t)},o),n))};g.displayName="InputGroupText";var y=i(92607),N=i(75824);const E=e=>{var{className:t,value:i=0,customSteps:s,areCustomStepsContinuous:p=!1,isDisabled:m=!1,isInputVisible:b=!1,inputValue:E=0,inputLabel:C,inputAriaLabel:R="Slider value input",thumbAriaLabel:_="Value",hasTooltipOverThumb:A=!1,inputPosition:w="end",onChange:D,leftActions:x,startActions:L,rightActions:I,endActions:T,step:P=1,min:S=0,max:k=100,showTicks:O=!1,showBoundaries:Z=!0,"aria-describedby":B,"aria-labelledby":q}=e,V=(0,a._T)(e,["className","value","customSteps","areCustomStepsContinuous","isDisabled","isInputVisible","inputValue","inputLabel","inputAriaLabel","thumbAriaLabel","hasTooltipOverThumb","inputPosition","onChange","leftActions","startActions","rightActions","endActions","step","min","max","showTicks","showBoundaries","aria-describedby","aria-labelledby"]);const H=r.useRef(),j=r.useRef(),[z,F]=(0,r.useState)(i),[G,M]=(0,r.useState)(E);let $;r.useEffect((()=>{$="rtl"===window.getComputedStyle(H.current).getPropertyValue("direction")})),r.useEffect((()=>{F(i)}),[i]),r.useEffect((()=>{M(E)}),[E]);let X,K=0;const W={"--pf-v5-c-slider--value":100*(z-S)/(k-S)+"%"},J={"--pf-v5-c-slider__value--c-form-control--width-chars":r.useMemo((()=>G.toString().length),[G])},U=(e,t)=>{M(Number(t))},Q=e=>{"Enter"===e.key&&(e.preventDefault(),D&&D(e,z,G,M))},Y=e=>{e.stopPropagation()},ee=e=>{D&&D(e,z,G,M)},te=()=>{if(!p&&s){const e=s.find((e=>e.value===z));if(e)return e.label}return Number(Number(z).toFixed(2)).toString()},ie=e=>{"touchmove"===e.type&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.touches&&e.touches.length?e.touches[0].clientX:e.clientX;let i;i=$?H.current.getBoundingClientRect().right-t-K:t-K-H.current.getBoundingClientRect().left;const a=H.current.offsetWidth-j.current.offsetWidth;i<0&&(i=0),i>a&&(i=a);const r=((e,t)=>100*e/t)(i,a);j.current.style.setProperty("--pf-v5-c-slider--value",`${r}%`);const n=Math.round(100*(r*(k-S)/100+S))/100;if(F(n),s||(X=Math.round(100*(Math.round((n-S)/P)*P+S))/100,j.current.style.setProperty("--pf-v5-c-slider--value",`${X}%`),F(X)),!p&&s){let e=r;100!==s[s.length-1].value&&(e=r*(k-S)/100+S);const t=s.findIndex((t=>t.value>=e));if(s[t].value===e)X=s[t].value;else{const i=(s[t].value+s[t-1].value)/2;X=i>e?s[t-1].value:s[t].value}F(X)}D&&D(e,void 0!==X?X:n)},ae=r.useCallback(ie,[S,k,s,D]),re=r.useCallback((()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",re),document.removeEventListener("touchmove",ae),document.removeEventListener("touchend",re),document.removeEventListener("touchcancel",re)}),[S,k,s,D]),ne=()=>{const e=r.createElement(y.oi,{isDisabled:m,type:"number",value:G,"aria-label":R,onKeyDown:Q,onChange:U,onClick:Y,onFocus:Y,onBlur:ee});return C?r.createElement(f.B,null,r.createElement(h.o,{isFill:!0},e),r.createElement(g,{isDisabled:m},C)):e},se=(e,t,i)=>100*(e-t)/(i-t),le=r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__thumb"),ref:j,tabIndex:m?-1:0,role:"slider","aria-valuemin":s?s[0].value:S,"aria-valuemax":s?s[s.length-1].value:k,"aria-valuenow":z,"aria-valuetext":te(),"aria-label":_,"aria-disabled":m,"aria-describedby":B,"aria-labelledby":q,onMouseDown:m?null:e=>{e.stopPropagation(),e.preventDefault(),K=$?j.current.getBoundingClientRect().right-e.clientX:e.clientX-j.current.getBoundingClientRect().left,document.addEventListener("mousemove",ae),document.addEventListener("mouseup",re)},onTouchStart:m?null:e=>{e.stopPropagation(),K=$?j.current.getBoundingClientRect().right-e.touches[0].clientX:e.touches[0].clientX-j.current.getBoundingClientRect().left,document.addEventListener("touchmove",ae,{passive:!1}),document.addEventListener("touchend",re),document.addEventListener("touchcancel",re)},onKeyDown:m?null:e=>{const t=e.key;if("ArrowLeft"!==t&&"ArrowRight"!==t)return;e.preventDefault();let i=z;if(!p&&s){const e=s.findIndex((e=>e.value===z));"ArrowRight"===t?$?e-1>=0&&(i=s[e-1].value):e+1<s.length&&(i=s[e+1].value):"ArrowLeft"===t&&($?e+1<s.length&&(i=s[e+1].value):e-1>=0&&(i=s[e-1].value))}else"ArrowRight"===t?i=$?z-P>=S?z-P:S:z+P<=k?z+P:k:"ArrowLeft"===t&&(i=$?z+P<=k?z+P:k:z-P>=S?z-P:S);i!==z&&(j.current.style.setProperty("--pf-v5-c-slider--value",`${i}%`),F(i),D&&D(e,i))},onClick:m?null:()=>{j.current.focus()}});return r.createElement("div",Object.assign({className:(0,u.i)("pf-v5-c-slider",t,m&&n),style:Object.assign(Object.assign({},W),J)},V),(x||L)&&r.createElement("div",{className:(0,u.i)(o)},x||L),r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__main")},r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__rail"),ref:H,onClick:m?null:e=>{ie(e),X&&!p&&(j.current.style.setProperty("--pf-v5-c-slider--value",`${X}%`),F(X),D&&D(e,X))}},r.createElement("div",{className:(0,u.i)("pf-v5-c-slider__rail-track")})),s&&r.createElement("div",{className:(0,u.i)(d),"aria-hidden":"true"},s.map((e=>{const t=s[0].value,i=s[s.length-1].value,a=se(e.value,t,i);return r.createElement(v,{key:e.value,value:a,label:e.label,isLabelHidden:e.isLabelHidden,isActive:e.value<=z})}))),!s&&(O||Z)&&r.createElement("div",{className:(0,u.i)(d),"aria-hidden":"true"},(()=>{const e=[];for(let t=S;t<=k;t+=P){const i=se(t,S,k);!O&&Z&&t!==S&&t!==k||e.push(r.createElement(v,{key:t,value:i,label:t.toString(),isTickHidden:!O,isLabelHidden:t!==S&&t!==k||!Z,isActive:t<=z}))}return e})()),A?r.createElement(N.u,{triggerRef:j,entryDelay:0,content:te()},le):le,b&&"aboveThumb"===w&&r.createElement("div",{className:(0,u.i)(c,l)},ne())),b&&("right"===w||"end"===w)&&r.createElement("div",{className:(0,u.i)(c)},ne()),(I||T)&&r.createElement("div",{className:(0,u.i)(o)},I||T))};E.displayName="Slider"},45469:(e,t,i)=>{i.d(t,{Kx:()=>m,f:()=>a,lW:()=>r});var a,r,n=i(65353),s=i(28416),l=i(12455),o=i(38296),d=i(80164),c=i(20344),u=i(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class p extends s.Component{constructor(e){super(e),this.inputRef=s.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const i=window.getComputedStyle(e),a=parseInt(i.getPropertyValue("border-top-width"))+parseInt(i.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(i.getPropertyValue("padding-bottom"))+parseInt(i.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${a}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&d.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&d.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:i,validated:a,isRequired:r,isDisabled:p,readOnlyVariant:m,resizeOrientation:v,innerRef:f,disabled:h,autoResize:b,onChange:g,onBlur:y,onFocus:N}=e,E=(0,n._T)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),C=`resize${(0,d.kC)(v)}`,R=["success","error","warning"].includes(a);return s.createElement("span",{className:(0,o.i)(l.Z.formControl,m&&l.Z.modifiers.readonly,"plain"===m&&l.Z.modifiers.plain,v&&l.Z.modifiers[C],p&&l.Z.modifiers.disabled,R&&l.Z.modifiers[a],t)},s.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:N,onBlur:y},"string"!=typeof this.props.defaultValue&&{value:i},{"aria-invalid":a===c.LD.error,required:r,disabled:p||h,readOnly:!!m,ref:f||this.inputRef},E)),R&&s.createElement("span",{className:(0,o.i)(l.Z.formControlUtilities)},s.createElement(u.J,{status:a})))}}p.displayName="TextArea",p.defaultProps={innerRef:s.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const m=s.forwardRef(((e,t)=>s.createElement(p,Object.assign({},e,{innerRef:t}))));m.displayName="TextArea"},5964:(e,t,i)=>{i.r(t),i.d(t,{CaretDownIcon:()=>n,CaretDownIconConfig:()=>r,default:()=>s});var a=i(40400);const r={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},n=(0,a.I)(r),s=n},12276:(e,t,i)=>{i.d(t,{Z:()=>a}),i(74282);const a={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/3814.93d5cea94134bd0a8ae98f059e015f92.js.map