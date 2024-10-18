"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[7029],{87029:(e,a,t)=>{t.r(a),t.d(a,{Modal:()=>F,ModalBox:()=>g,ModalBoxBody:()=>h,ModalBoxCloseButton:()=>v,ModalBoxFooter:()=>E,ModalBoxHeader:()=>N,ModalContent:()=>w,ModalVariant:()=>k});var l=t(8674),o=t(19365),i=t(91688),s=t(17732),n=t(47931),r=t(33774);t(95067);const d="pf-v5-c-backdrop__open";var c=t(32257);t(26078);const m={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"};var p=t(32069),b=t(31398);const u=e=>{var{children:a=null,className:t=""}=e,i=(0,l.Tt)(e,["children","className"]);return o.createElement("div",Object.assign({},i,{className:(0,r.A)("pf-v5-c-backdrop",t)}),a)};u.displayName="Backdrop";const h=e=>{var{children:a=null,className:t=""}=e,i=(0,l.Tt)(e,["children","className"]);return o.createElement("div",Object.assign({},i,{className:(0,r.A)(m.modalBoxBody,t)}),a)};h.displayName="ModalBoxBody";var f=t(72583),y=t(44397);const v=e=>{var{className:a,onClose:t=()=>{},"aria-label":i="Close",ouiaId:s}=e,n=(0,l.Tt)(e,["className","onClose","aria-label","ouiaId"]);return o.createElement("div",{className:(0,r.A)(m.modalBoxClose,a)},o.createElement(f.$n,Object.assign({variant:"plain",onClick:e=>t(e),"aria-label":i},s&&{ouiaId:`${s}-${v.displayName}`},n),o.createElement(y.Ay,null)))};v.displayName="ModalBoxCloseButton";const x="--pf-v5-c-modal-box--m-align-top--spacer",g=e=>{var{children:a,className:t="",variant:i="default",position:s,positionOffset:n,"aria-labelledby":d,"aria-label":c="","aria-describedby":p,style:b}=e,u=(0,l.Tt)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return n&&((b=b||{})[x]=n),o.createElement("div",Object.assign({},u,{role:"dialog","aria-label":c||null,"aria-labelledby":d||null,"aria-describedby":p,"aria-modal":"true",className:(0,r.A)(m.modalBox,t,"top"===s&&m.modifiers.alignTop,"large"===i&&m.modifiers.lg,"small"===i&&m.modifiers.sm,"medium"===i&&m.modifiers.md),style:b}),a)};g.displayName="ModalBox";const E=e=>{var{children:a=null,className:t=""}=e,i=(0,l.Tt)(e,["children","className"]);return o.createElement("footer",Object.assign({},i,{className:(0,r.A)(m.modalBoxFooter,t)}),a)};E.displayName="ModalBoxFooter";const C=e=>{var{children:a=null,className:t="",id:i=""}=e,s=(0,l.Tt)(e,["children","className","id"]);return o.createElement("div",Object.assign({},s,{id:i,className:(0,r.A)(m.modalBoxDescription,t)}),a)};C.displayName="ModalBoxDescription";const N=e=>{var{children:a=null,className:t="",help:i=null}=e,s=(0,l.Tt)(e,["children","className","help"]);return o.createElement("header",Object.assign({className:(0,r.A)(m.modalBoxHeader,i&&m.modifiers.help,t)},s),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.A)(m.modalBoxHeaderMain)},a),o.createElement("div",{className:`${m.modalBoxHeader}-help`},i)),!i&&a)};N.displayName="ModalBoxHeader";var B=t(45523),I=t(19202),A=t(31003),T=t(99851),O=t(29962),L=t(79284),M=t(55251);const S=e=>["success","danger","warning","info","custom"].includes(e),_=e=>{var{className:a="",id:t,title:i,titleIconVariant:s,titleLabel:d=""}=e,c=(0,l.Tt)(e,["className","id","title","titleIconVariant","titleLabel"]);const[p,b]=o.useState(!1),u=o.useRef(null),h=d||(S(s)?`${(0,n.ZH)(s)} alert:`:d),f={success:o.createElement(I.Ay,null),danger:o.createElement(A.Ay,null),warning:o.createElement(T.Ay,null),info:o.createElement(O.Ay,null),custom:o.createElement(L.Ay,null)},y=!S(s)&&s;(0,M.E)((()=>{b(u.current&&u.current.offsetWidth<u.current.scrollWidth)}),[]);const v=o.createElement("h1",Object.assign({id:t,ref:u,className:(0,r.A)(m.modalBoxTitle,s&&m.modifiers.icon,a)},c),s&&o.createElement("span",{className:(0,r.A)(m.modalBoxTitleIcon)},S(s)?f[s]:o.createElement(y,null)),h&&o.createElement("span",{className:"pf-v5-screen-reader"},h),o.createElement("span",{className:(0,r.A)(m.modalBoxTitleText)},i));return p?o.createElement(B.m,{content:i},v):v};_.displayName="ModalBoxTitle";const w=e=>{var{children:a,className:t="",isOpen:i=!1,header:s=null,help:n=null,description:d=null,title:f="",titleIconVariant:y=null,titleLabel:x="","aria-label":B="","aria-describedby":I,"aria-labelledby":A,bodyAriaLabel:T,bodyAriaRole:O,showClose:L=!0,footer:M=null,actions:k=[],onClose:F=()=>{},variant:j="default",position:W,positionOffset:R,width:V,maxWidth:$,boxId:H,labelId:D,descriptorId:P,disableFocusTrap:z=!1,hasNoBodyWrapper:K=!1,ouiaId:U,ouiaSafe:Z=!0,elementToFocus:X}=e,q=(0,l.Tt)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","maxWidth","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe","elementToFocus"]);if(!i)return null;const G=s?o.createElement(N,{help:n},s):f&&o.createElement(N,{help:n},o.createElement(_,{title:f,titleIconVariant:y,titleLabel:x,id:D}),d&&o.createElement(C,{id:P},d)),J=M?o.createElement(E,null,M):k.length>0&&o.createElement(E,null,k),Q=T?"region":void 0,Y=d||I?void 0:P,ee=K?a:o.createElement(h,Object.assign({"aria-label":T,role:O||Q},q,{id:Y}),a),ae=o.createElement(g,Object.assign({id:H,className:(0,r.A)(t,S(y)&&m.modifiers[y]),variant:j,position:W,positionOffset:R,"aria-label":B,"aria-labelledby":(()=>{if(null===A)return null;const e=[];return""!==(B&&H)&&e.push(B&&H),A&&e.push(A),f&&e.push(D),e.join(" ")})(),"aria-describedby":I||(K?null:P)},(0,b.Bs)(w.displayName,U,Z),{style:Object.assign(Object.assign({},V&&{"--pf-v5-c-modal-box--Width":"number"!=typeof V?V:`${V}px`}),$&&{"--pf-v5-c-modal-box--MaxWidth":"number"!=typeof $?$:`${$}px`})}),L&&o.createElement(v,{onClose:e=>F(e),ouiaId:U}),G,ee,J);return o.createElement(u,null,o.createElement(c.s,{active:!z,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},initialFocus:X||void 0},className:(0,r.A)(p.A.bullseye)},ae))};var k;w.displayName="ModalContent",function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(k||(k={}));class F extends o.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,t;const{onEscapePress:l}=this.props;e.key===s.RU.Escape&&this.props.isOpen&&(l?l(e):null===(t=(a=this.props).onClose)||void 0===t||t.call(a,e))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=F.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:(0,b.X)(F.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:o,header:i}=this.props,s=this.getElement(e),n=document.createElement("div");this.setState({container:n}),s.appendChild(n),s.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?s.classList.add((0,r.A)(d)):s.classList.remove((0,r.A)(d)),!a&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(o||i)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add((0,r.A)(d)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove((0,r.A)(d)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove((0,r.A)(d)),this.toggleSiblingsFromScreenReaders(!1)}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":s,"aria-label":r,"aria-describedby":d,bodyAriaLabel:c,bodyAriaRole:m,title:p,titleIconVariant:b,titleLabel:u,ouiaId:h,ouiaSafe:f,position:y,elementToFocus:v}=e,x=(0,l.Tt)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe","position","elementToFocus"]),{container:g}=this.state;return n.Sw&&g?i.createPortal(o.createElement(w,Object.assign({},x,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:p,titleIconVariant:b,titleLabel:u,"aria-label":r,"aria-describedby":d,"aria-labelledby":s,bodyAriaLabel:c,bodyAriaRole:m,ouiaId:void 0!==h?h:this.state.ouiaStateId,ouiaSafe:f,position:y,elementToFocus:v})),g):null}}F.displayName="Modal",F.currentId=0,F.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0,position:"default"}},79284:(e,a,t)=>{t.d(a,{Ay:()=>l});const l=(0,t(68419).w)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},29962:(e,a,t)=>{t.d(a,{Ay:()=>l});const l=(0,t(68419).w)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},32069:(e,a,t)=>{t.d(a,{A:()=>l}),t(2580);const l={bullseye:"pf-v5-l-bullseye"}}}]);