(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[8182,1398,5801],{26243:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>N,AlertActionCloseButton:()=>L,AlertActionLink:()=>I,AlertContext:()=>v,AlertGroup:()=>k,AlertVariant:()=>C});var n=a(8674),i=a(19365),s=a(33774);a(16789);const l={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var r=a(19202),o=a(31003),c=a(99851),m=a(29962),d=a(79284);const u={success:r.default,danger:o.Ay,warning:c.Ay,info:m.Ay,custom:d.Ay},p=e=>{var{variant:t,customIcon:a,className:r=""}=e,o=(0,n.Tt)(e,["variant","customIcon","className"]);const c=u[t];return c?i.createElement("div",Object.assign({},o,{className:(0,s.A)(l.alertIcon,r)}),a||i.createElement(c,null)):null};var f=a(47931),g=a(31398);const v=i.createContext(null),b="--pf-v5-c-alert__title--max-lines";var h=a(45523),A=a(72583),y=a(89015);const E=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:r,isExpanded:o=!1}=e,c=(0,n.Tt)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:m,variantLabel:d}=i.useContext(v);return i.createElement(A.$n,Object.assign({variant:A.Ak.plain,onClick:r,"aria-expanded":o,"aria-label":""===t?`Toggle ${a||d} alert: ${m}`:t},c),i.createElement("span",{className:(0,s.A)(l.alertToggleIcon)},i.createElement(y.default,{"aria-hidden":"true"})))};var C;E.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(C||(C={}));const N=e=>{var{variant:t=C.custom,isInline:a=!1,isPlain:r=!1,isLiveRegion:o=!1,variantLabel:c=`${(0,f.ZH)(t)} alert:`,actionClose:m,actionLinks:d,title:u,component:A="h4",children:y="",className:x="",ouiaId:L,ouiaSafe:I=!0,timeout:T=!1,timeoutAnimation:w=3e3,onTimeout:O=()=>{},truncateTitle:k=0,tooltipPosition:P,customIcon:$,isExpandable:_=!1,toggleAriaLabel:M=`${(0,f.ZH)(t)} alert details`,onMouseEnter:R=()=>{},onMouseLeave:z=()=>{},id:j}=e,B=(0,n.Tt)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const S=(0,g.useOUIAProps)(N.displayName,L,I,t),D=i.createElement(i.Fragment,null,i.createElement("span",{className:"pf-v5-screen-reader"},c),u),U=i.useRef(null),G=A,H=i.useRef(),[V,Z]=(0,i.useState)(!1);i.useEffect((()=>{if(!U.current||!k)return;U.current.style.setProperty(b,k.toString());const e=U.current&&U.current.offsetHeight<U.current.scrollHeight;V!==e&&Z(e)}),[U,k,V]);const[F,J]=(0,i.useState)(!1),[Q,K]=(0,i.useState)(!0),[W,q]=(0,i.useState)(),[X,Y]=(0,i.useState)(),ee=F&&Q&&!W&&!X;i.useEffect((()=>{const e=!0===T?8e3:Number(T);if(e>0){const t=setTimeout((()=>J(!0)),e);return()=>clearTimeout(t)}}),[T]),i.useEffect((()=>{const e=()=>{H.current&&(H.current.contains(document.activeElement)?(Y(!0),K(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),i.useEffect((()=>{if(!1===X||!1===W){const e=setTimeout((()=>K(!0)),w);return()=>clearTimeout(e)}}),[X,W,w]),i.useEffect((()=>{ee&&O()}),[ee,O]);const[te,ae]=(0,i.useState)(!1);if(ee)return null;const ne=i.createElement(G,Object.assign({},V&&{tabIndex:0},{ref:U,className:(0,s.A)(l.alertTitle,k&&l.modifiers.truncate)}),D);return i.createElement("div",Object.assign({ref:H,className:(0,s.A)(l.alert,a&&l.modifiers.inline,r&&l.modifiers.plain,_&&l.modifiers.expandable,te&&l.modifiers.expanded,l.modifiers[t],x)},S,o&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{q(!0),K(!1),R(e)},onMouseLeave:e=>{q(!1),z(e)},id:j},B),_&&i.createElement(v.Provider,{value:{title:u,variantLabel:c}},i.createElement("div",{className:(0,s.A)(l.alertToggle)},i.createElement(E,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":M}))),i.createElement(p,{variant:t,customIcon:$}),V?i.createElement(h.m,{content:D,position:P},ne):ne,m&&i.createElement(v.Provider,{value:{title:u,variantLabel:c}},i.createElement("div",{className:(0,s.A)(l.alertAction)},m)),y&&(!_||_&&te)&&i.createElement("div",{className:(0,s.A)(l.alertDescription)},y),d&&i.createElement("div",{className:(0,s.A)(l.alertActionGroup)},d))};N.displayName="Alert";var x=a(44397);const L=e=>{var{className:t,onClose:a=()=>{},"aria-label":s="",variantLabel:l}=e,r=(0,n.Tt)(e,["className","onClose","aria-label","variantLabel"]);return i.createElement(v.Consumer,null,(({title:e,variantLabel:n})=>i.createElement(A.$n,Object.assign({variant:A.Ak.plain,onClick:a,"aria-label":""===s?`Close ${l||n} alert: ${e}`:s,className:t},r),i.createElement(x.Ay,null))))};L.displayName="AlertActionCloseButton";const I=e=>{var{className:t="",children:a}=e,s=(0,n.Tt)(e,["className","children"]);return i.createElement(A.$n,Object.assign({variant:A.Ak.link,isInline:!0,className:t},s),a)};I.displayName="AlertActionLink";var T=a(91688);a(66403);const w="pf-m-toast",O=e=>{var{className:t,children:a,isToast:l,isLiveRegion:r,onOverflowClick:o,overflowMessage:c}=e,m=(0,n.Tt)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return i.createElement("ul",Object.assign({role:"list","aria-live":r?"polite":null,"aria-atomic":!r&&null,className:(0,s.A)("pf-v5-c-alert-group",t,l?w:"")},m),i.Children.toArray(a).map(((e,t)=>{var a;return i.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),c&&i.createElement("li",null,i.createElement("button",{onClick:o,className:(0,s.A)("pf-v5-c-alert-group__overflow-button")},c)))};O.displayName="AlertGroupInline";class k extends i.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:s,isLiveRegion:l,onOverflowClick:r,overflowMessage:o,"aria-label":c,appendTo:m}=e,d=(0,n.Tt)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),u=i.createElement(O,Object.assign({onOverflowClick:r,className:t,isToast:s,isLiveRegion:l,overflowMessage:o,"aria-label":c},d),a);if(!this.props.isToast)return u;const p=this.state.container;return f.Sw&&p?T.createPortal(u,p):null}}k.displayName="AlertGroup"},74992:(e,t,a)=>{"use strict";a.d(t,{E:()=>o});var n=a(8674),i=a(19365),s=a(33774);a(21741);const l="pf-m-read",r="pf-m-unread",o=e=>{var{isRead:t=!1,className:a="",children:o="",screenReaderText:c}=e,m=(0,n.Tt)(e,["isRead","className","children","screenReaderText"]);return i.createElement("span",Object.assign({},m,{className:(0,s.A)("pf-v5-c-badge",t?l:r,a)}),o,c&&i.createElement("span",{className:"pf-v5-screen-reader"},c))};o.displayName="Badge"},72583:(e,t,a)=>{"use strict";a.d(t,{$n:()=>f,Ak:()=>n,Mp:()=>s,VQ:()=>i});var n,i,s,l=a(8674),r=a(19365),o=a(73530),c=a(33774),m=a(932),d=a(31398),u=a(74992);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(n||(n={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(i||(i={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(s||(s={}));const p=e=>{var{children:t=null,className:a="",component:p="button",isActive:g=!1,isBlock:v=!1,isDisabled:b=!1,isAriaDisabled:h=!1,isLoading:A=null,isDanger:y=!1,spinnerAriaValueText:E,spinnerAriaLabelledBy:C,spinnerAriaLabel:N,size:x=s.default,inoperableEvents:L=["onClick","onKeyPress"],isInline:I=!1,type:T=i.button,variant:w=n.primary,iconPosition:O="start","aria-label":k=null,icon:P=null,ouiaId:$,ouiaSafe:_=!0,tabIndex:M=null,innerRef:R,countOptions:z}=e,j=(0,l.Tt)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const B=(0,d.useOUIAProps)(f.displayName,$,_,w),S=p,D="button"===S,U=I&&"span"===S,G=L.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return r.createElement(S,Object.assign({},j,h?G:null,{"aria-disabled":b||h,"aria-label":k,className:(0,c.A)(o.A.button,o.A.modifiers[w],v&&o.A.modifiers.block,b&&o.A.modifiers.disabled,h&&o.A.modifiers.ariaDisabled,g&&o.A.modifiers.active,I&&w===n.link&&o.A.modifiers.inline,y&&(w===n.secondary||w===n.link)&&o.A.modifiers.danger,null!==A&&w!==n.plain&&o.A.modifiers.progress,A&&o.A.modifiers.inProgress,x===s.sm&&o.A.modifiers.small,x===s.lg&&o.A.modifiers.displayLg,a),disabled:D?b:null,tabIndex:null!==M?M:b?D?null:-1:h?null:U?0:void 0,type:D||U?T:null,role:U?"button":null,ref:R},B),A&&r.createElement("span",{className:(0,c.A)(o.A.buttonProgress)},r.createElement(m.y,{size:m.J.md,isInline:I,"aria-valuetext":E,"aria-label":N,"aria-labelledby":C})),w===n.plain&&null===t&&P?P:null,w!==n.plain&&P&&("start"===O||"left"===O)&&r.createElement("span",{className:(0,c.A)(o.A.buttonIcon,o.A.modifiers.start)},P),t,w!==n.plain&&P&&("end"===O||"right"===O)&&r.createElement("span",{className:(0,c.A)(o.A.buttonIcon,o.A.modifiers.end)},P),z&&r.createElement("span",{className:(0,c.A)(o.A.buttonCount,z.className)},r.createElement(u.E,{isRead:z.isRead},z.count)))},f=r.forwardRef(((e,t)=>r.createElement(p,Object.assign({innerRef:t},e))));f.displayName="Button"},932:(e,t,a)=>{"use strict";a.d(t,{y:()=>c,J:()=>o});var n=a(8674),i=a(19365);a(97553);const s={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var l=a(33774);const r="--pf-v5-c-spinner--diameter";var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const c=e=>{var{className:t="",size:a="xl","aria-valuetext":o="Loading...",diameter:c,isInline:m=!1,"aria-label":d,"aria-labelledBy":u}=e,p=(0,n.Tt)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return i.createElement("svg",Object.assign({className:(0,l.A)(s.spinner,m?s.modifiers.inline:s.modifiers[a],t),role:"progressbar","aria-valuetext":o,viewBox:"0 0 100 100"},c&&{style:{[r]:c}},d&&{"aria-label":d},u&&{"aria-labelledBy":u},!d&&!u&&{"aria-label":"Contents"},p),i.createElement("circle",{className:s.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};c.displayName="Spinner"},31398:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getDefaultOUIAId:()=>m,getOUIAProps:()=>r,useOUIAId:()=>c,useOUIAProps:()=>o});var n=a(19365);let i=0;const s="OUIA-Generated-",l={};function r(e,t,a=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":t}}const o=(e,t,a=!0,n)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":c(e,t,n)}),c=(e,t,a)=>{const i=(0,n.useMemo)((()=>m(e,a)),[e,a]);return null!=t?t:i};function m(e,t){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,l[a]||(l[a]=0),`${s}${e}-${t?`${t}-`:""}${++l[a]}`}catch(a){return`${s}${e}-${t?`${t}-`:""}${++i}`}}},68419:(e,t,a)=>{"use strict";a.d(t,{w:()=>l});var n=a(8674),i=a(19365);let s=0;function l({name:e,xOffset:t=0,yOffset:a=0,width:l,height:r,svgPath:o}){var c;return c=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{title:s,className:c}=e,m=(0,n.Tt)(e,["title","className"]),d=c?`pf-v5-svg ${c}`:"pf-v5-svg",u=Boolean(s),p=[t,a,l,r].join(" ");return i.createElement("svg",Object.assign({className:d,viewBox:p,fill:"currentColor","aria-labelledby":u?this.id:null,"aria-hidden":!u||null,role:"img",width:"1em",height:"1em"},m),u&&i.createElement("title",{id:this.id},s),i.createElement("path",{d:o}))}},c.displayName=e,c}},89015:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AngleRightIcon:()=>s,AngleRightIconConfig:()=>i,default:()=>l});var n=a(68419);const i={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},s=(0,n.w)(i),l=s},79284:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},19202:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CheckCircleIcon:()=>s,CheckCircleIconConfig:()=>i,default:()=>l});var n=a(68419);const i={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},s=(0,n.w)(i),l=s},31003:(e,t,a)=>{"use strict";a.d(t,{$Q:()=>n,Ay:()=>i});const n=(0,a(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),i=n},99851:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},29962:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},44397:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},73530:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(30935);const n={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},79826:()=>{},66403:()=>{},16789:()=>{},21741:()=>{},30935:()=>{},97553:()=>{},27077:()=>{}}]);