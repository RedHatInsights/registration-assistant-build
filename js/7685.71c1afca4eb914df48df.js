(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[7685],{37685:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>N,AlertActionCloseButton:()=>A,AlertActionLink:()=>_,AlertContext:()=>g,AlertGroup:()=>P,AlertVariant:()=>L});var n=a(65353),i=a(28416),r=a(38296);a(81754);const l={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var s=a(68778),o=a(43047),c=a(69957),u=a(53688),m=a(34143);const d={success:s.ZP,danger:o.ZP,warning:c.ZP,info:u.ZP,custom:m.ZP},p=e=>{var{variant:t,customIcon:a,className:s=""}=e,o=(0,n._T)(e,["variant","customIcon","className"]);const c=d[t];return c?i.createElement("div",Object.assign({},o,{className:(0,r.i)(l.alertIcon,s)}),a||i.createElement(c,null)):null};var v=a(80164),f=a(62472);const g=i.createContext(null),C="--pf-v5-c-alert__title--max-lines";var E=a(75824),b=a(47173),h=a(93174);const T=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:s,isExpanded:o=!1}=e,c=(0,n._T)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:m}=i.useContext(g);return i.createElement(b.zx,Object.assign({variant:b.Wu.plain,onClick:s,"aria-expanded":o,"aria-label":""===t?`Toggle ${a||m} alert: ${u}`:t},c),i.createElement("span",{className:(0,r.i)(l.alertToggleIcon)},i.createElement(h.default,{"aria-hidden":"true"})))};var L;T.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(L||(L={}));const N=e=>{var{variant:t=L.custom,isInline:a=!1,isPlain:s=!1,isLiveRegion:o=!1,variantLabel:c=`${(0,v.kC)(t)} alert:`,actionClose:u,actionLinks:m,title:d,component:b="h4",children:h="",className:x="",ouiaId:A,ouiaSafe:_=!0,timeout:k=!1,timeoutAnimation:I=3e3,onTimeout:w=(()=>{}),truncateTitle:P=0,tooltipPosition:O,customIcon:y,isExpandable:M=!1,toggleAriaLabel:S=`${(0,v.kC)(t)} alert details`,onMouseEnter:R=(()=>{}),onMouseLeave:Z=(()=>{}),id:j}=e,$=(0,n._T)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const z=(0,f.S$)(N.displayName,A,_,t),G=i.createElement(i.Fragment,null,i.createElement("span",{className:"pf-v5-screen-reader"},c),d),B=i.useRef(null),D=b,W=i.useRef(),[H,q]=(0,i.useState)(!1);i.useEffect((()=>{if(!B.current||!P)return;B.current.style.setProperty(C,P.toString());const e=B.current&&B.current.offsetHeight<B.current.scrollHeight;H!==e&&q(e)}),[B,P,H]);const[F,U]=(0,i.useState)(!1),[V,J]=(0,i.useState)(!0),[K,Q]=(0,i.useState)(),[X,Y]=(0,i.useState)(),ee=F&&V&&!K&&!X;i.useEffect((()=>{const e=!0===k?8e3:Number(k);if(e>0){const t=setTimeout((()=>U(!0)),e);return()=>clearTimeout(t)}}),[k]),i.useEffect((()=>{const e=()=>{W.current&&(W.current.contains(document.activeElement)?(Y(!0),J(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),i.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>J(!0)),I);return()=>clearTimeout(e)}}),[X,K,I]),i.useEffect((()=>{ee&&w()}),[ee,w]);const[te,ae]=(0,i.useState)(!1);if(ee)return null;const ne=i.createElement(D,Object.assign({},H&&{tabIndex:0},{ref:B,className:(0,r.i)(l.alertTitle,P&&l.modifiers.truncate)}),G);return i.createElement("div",Object.assign({ref:W,className:(0,r.i)(l.alert,a&&l.modifiers.inline,s&&l.modifiers.plain,M&&l.modifiers.expandable,te&&l.modifiers.expanded,l.modifiers[t],x)},z,o&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),R(e)},onMouseLeave:e=>{Q(!1),Z(e)},id:j},$),M&&i.createElement(g.Provider,{value:{title:d,variantLabel:c}},i.createElement("div",{className:(0,r.i)(l.alertToggle)},i.createElement(T,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":S}))),i.createElement(p,{variant:t,customIcon:y}),H?i.createElement(E.u,{content:G,position:O},ne):ne,u&&i.createElement(g.Provider,{value:{title:d,variantLabel:c}},i.createElement("div",{className:(0,r.i)(l.alertAction)},u)),h&&(!M||M&&te)&&i.createElement("div",{className:(0,r.i)(l.alertDescription)},h),m&&i.createElement("div",{className:(0,r.i)(l.alertActionGroup)},m))};N.displayName="Alert";var x=a(24307);const A=e=>{var{className:t,onClose:a=(()=>{}),"aria-label":r="",variantLabel:l}=e,s=(0,n._T)(e,["className","onClose","aria-label","variantLabel"]);return i.createElement(g.Consumer,null,(({title:e,variantLabel:n})=>i.createElement(b.zx,Object.assign({variant:b.Wu.plain,onClick:a,"aria-label":""===r?`Close ${l||n} alert: ${e}`:r,className:t},s),i.createElement(x.ZP,null))))};A.displayName="AlertActionCloseButton";const _=e=>{var{className:t="",children:a}=e,r=(0,n._T)(e,["className","children"]);return i.createElement(b.zx,Object.assign({variant:b.Wu.link,isInline:!0,className:t},r),a)};_.displayName="AlertActionLink";var k=a(31051);a(81235);const I="pf-m-toast",w=e=>{var{className:t,children:a,isToast:l,isLiveRegion:s,onOverflowClick:o,overflowMessage:c}=e,u=(0,n._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return i.createElement("ul",Object.assign({role:"list","aria-live":s?"polite":null,"aria-atomic":!s&&null,className:(0,r.i)("pf-v5-c-alert-group",t,l?I:"")},u),i.Children.toArray(a).map(((e,t)=>{var a;return i.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),c&&i.createElement("li",null,i.createElement("button",{onClick:o,className:(0,r.i)("pf-v5-c-alert-group__overflow-button")},c)))};w.displayName="AlertGroupInline";class P extends i.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:r,isLiveRegion:l,onOverflowClick:s,overflowMessage:o,"aria-label":c,appendTo:u}=e,m=(0,n._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),d=i.createElement(w,Object.assign({onOverflowClick:s,className:t,isToast:r,isLiveRegion:l,overflowMessage:o,"aria-label":c},m),a);if(!this.props.isToast)return d;const p=this.state.container;return v.Nq&&p?k.createPortal(d,p):null}}P.displayName="AlertGroup"},34143:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},53688:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},81235:()=>{},81754:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7685.90350af1ba471cc88dcc448ca9096c9a.js.map