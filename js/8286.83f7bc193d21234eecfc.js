"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[8286],{88286:(e,a,l)=>{l.r(a),l.d(a,{Modal:()=>P,ModalBox:()=>g,ModalBoxBody:()=>h,ModalBoxCloseButton:()=>v,ModalBoxFooter:()=>E,ModalBoxHeader:()=>N,ModalContent:()=>F,ModalVariant:()=>w});var t=l(65353),i=l(28416),o=l(31051),s=l(20344),n=l(80164),r=l(38296);l(70347);const d="pf-v5-c-backdrop__open";var c=l(27017);l(25238);const m={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"};var p=l(66042),b=l(62472);const u=e=>{var{children:a=null,className:l=""}=e,o=(0,t._T)(e,["children","className"]);return i.createElement("div",Object.assign({},o,{className:(0,r.i)("pf-v5-c-backdrop",l)}),a)};u.displayName="Backdrop";const h=e=>{var{children:a=null,className:l=""}=e,o=(0,t._T)(e,["children","className"]);return i.createElement("div",Object.assign({},o,{className:(0,r.i)(m.modalBoxBody,l)}),a)};h.displayName="ModalBoxBody";var f=l(47173),y=l(24307);const v=e=>{var{className:a,onClose:l=(()=>{}),"aria-label":o="Close",ouiaId:s}=e,n=(0,t._T)(e,["className","onClose","aria-label","ouiaId"]);return i.createElement("div",{className:(0,r.i)(m.modalBoxClose,a)},i.createElement(f.zx,Object.assign({variant:"plain",onClick:e=>l(e),"aria-label":o},s&&{ouiaId:`${s}-${v.displayName}`},n),i.createElement(y.ZP,null)))};v.displayName="ModalBoxCloseButton";const x="--pf-v5-c-modal-box--m-align-top--spacer",g=e=>{var{children:a,className:l="",variant:o="default",position:s,positionOffset:n,"aria-labelledby":d,"aria-label":c="","aria-describedby":p,style:b}=e,u=(0,t._T)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return n&&((b=b||{})[x]=n),i.createElement("div",Object.assign({},u,{role:"dialog","aria-label":c||null,"aria-labelledby":d||null,"aria-describedby":p,"aria-modal":"true",className:(0,r.i)(m.modalBox,l,"top"===s&&m.modifiers.alignTop,"large"===o&&m.modifiers.lg,"small"===o&&m.modifiers.sm,"medium"===o&&m.modifiers.md),style:b}),a)};g.displayName="ModalBox";const E=e=>{var{children:a=null,className:l=""}=e,o=(0,t._T)(e,["children","className"]);return i.createElement("footer",Object.assign({},o,{className:(0,r.i)(m.modalBoxFooter,l)}),a)};E.displayName="ModalBoxFooter";const C=e=>{var{children:a=null,className:l="",id:o=""}=e,s=(0,t._T)(e,["children","className","id"]);return i.createElement("div",Object.assign({},s,{id:o,className:(0,r.i)(m.modalBoxDescription,l)}),a)};C.displayName="ModalBoxDescription";const N=e=>{var{children:a=null,className:l="",help:o=null}=e,s=(0,t._T)(e,["children","className","help"]);return i.createElement("header",Object.assign({className:(0,r.i)(m.modalBoxHeader,o&&m.modifiers.help,l)},s),o&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,r.i)(m.modalBoxHeaderMain)},a),i.createElement("div",{className:`${m.modalBoxHeader}-help`},o)),!o&&a)};N.displayName="ModalBoxHeader";var I=l(75824),B=l(68778),T=l(43047),O=l(69957),L=l(53688),_=l(34143),M=l(6551);const k=e=>["success","danger","warning","info","custom"].includes(e),S=e=>{var{className:a="",id:l,title:o,titleIconVariant:s,titleLabel:d=""}=e,c=(0,t._T)(e,["className","id","title","titleIconVariant","titleLabel"]);const[p,b]=i.useState(!1),u=i.useRef(null),h=d||(k(s)?`${(0,n.kC)(s)} alert:`:d),f={success:i.createElement(B.ZP,null),danger:i.createElement(T.ZP,null),warning:i.createElement(O.ZP,null),info:i.createElement(L.ZP,null),custom:i.createElement(_.ZP,null)},y=!k(s)&&s;(0,M.L)((()=>{b(u.current&&u.current.offsetWidth<u.current.scrollWidth)}),[]);const v=i.createElement("h1",Object.assign({id:l,ref:u,className:(0,r.i)(m.modalBoxTitle,s&&m.modifiers.icon,a)},c),s&&i.createElement("span",{className:(0,r.i)(m.modalBoxTitleIcon)},k(s)?f[s]:i.createElement(y,null)),h&&i.createElement("span",{className:"pf-v5-screen-reader"},h),i.createElement("span",{className:(0,r.i)(m.modalBoxTitleText)},o));return p?i.createElement(I.u,{content:o},v):v};S.displayName="ModalBoxTitle";const F=e=>{var{children:a,className:l="",isOpen:o=!1,header:s=null,help:n=null,description:d=null,title:f="",titleIconVariant:y=null,titleLabel:x="","aria-label":I="","aria-describedby":B,"aria-labelledby":T,bodyAriaLabel:O,bodyAriaRole:L,showClose:_=!0,footer:M=null,actions:w=[],onClose:P=(()=>{}),variant:j="default",position:A,positionOffset:W,width:Z,maxWidth:R,boxId:V,labelId:$,descriptorId:D,disableFocusTrap:H=!1,hasNoBodyWrapper:z=!1,ouiaId:K,ouiaSafe:q=!0,elementToFocus:U}=e,G=(0,t._T)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","maxWidth","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe","elementToFocus"]);if(!o)return null;const J=s?i.createElement(N,{help:n},s):f&&i.createElement(N,{help:n},i.createElement(S,{title:f,titleIconVariant:y,titleLabel:x,id:$}),d&&i.createElement(C,{id:D},d)),Q=M?i.createElement(E,null,M):w.length>0&&i.createElement(E,null,w),X=O?"region":void 0,Y=d||B?void 0:D,ee=z?a:i.createElement(h,Object.assign({"aria-label":O,role:L||X},G,{id:Y}),a),ae=i.createElement(g,Object.assign({id:V,className:(0,r.i)(l,k(y)&&m.modifiers[y]),variant:j,position:A,positionOffset:W,"aria-label":I,"aria-labelledby":(()=>{if(null===T)return null;const e=[];return""!==(I&&V)&&e.push(I&&V),T&&e.push(T),f&&e.push($),e.join(" ")})(),"aria-describedby":B||(z?null:D)},(0,b.dp)(F.displayName,K,q),{style:Object.assign(Object.assign({},Z&&{"--pf-v5-c-modal-box--Width":"number"!=typeof Z?Z:`${Z}px`}),R&&{"--pf-v5-c-modal-box--MaxWidth":"number"!=typeof R?R:`${R}px`})}),_&&i.createElement(v,{onClose:e=>P(e),ouiaId:K}),J,ee,Q);return i.createElement(u,null,i.createElement(c.i,{active:!H,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},initialFocus:U||void 0},className:(0,r.i)(p.Z.bullseye)},ae))};var w;F.displayName="ModalContent",function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(w||(w={}));class P extends i.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,l;const{onEscapePress:t}=this.props;e.key===s.yu.Escape&&this.props.isOpen&&(t?t(e):null===(l=(a=this.props).onClose)||void 0===l||l.call(a,e))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,l=this.getElement(a).children;for(const a of Array.from(l))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=P.currentId++,l=a+1,t=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${l}`,this.descriptorId=`pf-modal-part-${t}`,this.state={container:void 0,ouiaStateId:(0,b.ql)(P.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":l,"aria-labelledby":t,hasNoBodyWrapper:i,header:o}=this.props,s=this.getElement(e),n=document.createElement("div");this.setState({container:n}),s.appendChild(n),s.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?s.classList.add((0,r.i)(d)):s.classList.remove((0,r.i)(d)),this.isEmpty(a)&&this.isEmpty(l)&&this.isEmpty(t)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(l)&&this.isEmpty(t)&&(i||o)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add((0,r.i)(d)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove((0,r.i)(d)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove((0,r.i)(d)),this.toggleSiblingsFromScreenReaders(!1)}render(){const e=this.props,{appendTo:a,onEscapePress:l,"aria-labelledby":s,"aria-label":r,"aria-describedby":d,bodyAriaLabel:c,bodyAriaRole:m,title:p,titleIconVariant:b,titleLabel:u,ouiaId:h,ouiaSafe:f,position:y,elementToFocus:v}=e,x=(0,t._T)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe","position","elementToFocus"]),{container:g}=this.state;return n.Nq&&g?o.createPortal(i.createElement(F,Object.assign({},x,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:p,titleIconVariant:b,titleLabel:u,"aria-label":r,"aria-describedby":d,"aria-labelledby":s,bodyAriaLabel:c,bodyAriaRole:m,ouiaId:void 0!==h?h:this.state.ouiaStateId,ouiaSafe:f,position:y,elementToFocus:v})),g):null}}P.displayName="Modal",P.currentId=0,P.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0,position:"default"}},34143:(e,a,l)=>{l.d(a,{ZP:()=>t});const t=(0,l(40400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},53688:(e,a,l)=>{l.d(a,{ZP:()=>t});const t=(0,l(40400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},66042:(e,a,l)=>{l.d(a,{Z:()=>t}),l(87234);const t={bullseye:"pf-v5-l-bullseye"}}}]);
//# sourceMappingURL=../sourcemaps/8286.9b9c65de086b90346f59744e84153405.js.map