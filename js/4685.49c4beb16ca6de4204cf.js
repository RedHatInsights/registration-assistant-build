"use strict";(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[4685],{83873:(e,t,n)=>{n.d(t,{S:()=>d});var i=n(8674),l=n(19365),a=n(48280),s=n(33774),o=n(31398),r=n(57709);const c=()=>{};class d extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,o.getDefaultOUIAId)(d.displayName)}}render(){const e=this.props,{"aria-label":t,className:n,inputClassName:m,onChange:u,isLabelWrapped:f,isLabelBeforeButton:p,isValid:h,isDisabled:g,isRequired:v,isChecked:b,label:A,checked:I,defaultChecked:E,description:y,body:w,ouiaId:k,ouiaSafe:x,component:C}=e,L=(0,i.Tt)(e,["aria-label","className","inputClassName","onChange","isLabelWrapped","isLabelBeforeButton","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);L.id||console.error("Checkbox:","id is required to make input accessible");const N={};([!0,!1].includes(I)||!0===b)&&(N.checked=I||b),u!==c&&(N.checked=b),[!1,!0].includes(E)&&(N.defaultChecked=E);const _=l.createElement("input",Object.assign({},L,{className:(0,s.A)(a.A.checkInput,m),type:"checkbox",onChange:this.handleChange,"aria-invalid":!h,"aria-label":t,disabled:g,required:v,ref:e=>e&&(e.indeterminate=null===b)},N,(0,o.getOUIAProps)(d.displayName,void 0!==k?k:this.state.ouiaStateId,x))),M=f&&!C||"label"===C,S=M?"span":"label",D=A?l.createElement(S,{className:(0,s.A)(a.A.checkLabel,g&&a.A.modifiers.disabled),htmlFor:M?void 0:L.id},A,v&&l.createElement("span",{className:(0,s.A)(a.A.checkLabelRequired),"aria-hidden":"true"},r.L)):null,R=null!=C?C:M?"label":"div";return N.checked=null!==N.checked&&N.checked,l.createElement(R,{className:(0,s.A)(a.A.check,!A&&a.A.modifiers.standalone,n),htmlFor:M?L.id:void 0},p?l.createElement(l.Fragment,null,D,_):l.createElement(l.Fragment,null,_,D),y&&l.createElement("span",{className:(0,s.A)(a.A.checkDescription)},y),w&&l.createElement("span",{className:(0,s.A)(a.A.checkBody)},w))}}d.displayName="Checkbox",d.defaultProps={className:"",isLabelWrapped:!1,isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:c,ouiaSafe:!0}},72414:(e,t,n)=>{n.d(t,{W:()=>p});var i=n(8674),l=n(19365),a=n(88144);n(39829);const s="pf-v5-c-breadcrumb__link";n(41069);const o="pf-v5-c-dropdown__toggle";var r=n(33774),c=n(31398),d=n(10874),m=n(47931),u=n(12976);class f extends l.Component{constructor(e){super(e),this.menuRef=l.createRef(),this.activeMenu=null,this.state={ouiaStateId:(0,c.getDefaultOUIAId)(p.displayName),transitionMoveTarget:null,flyoutRef:null,disableHover:!1,currentDrilldownMenuId:this.props.id},this.handleDrilldownTransition=e=>{const t=this.menuRef.current;if(t&&(t===e.target.closest(`.${a.A.menu}`)||Array.from(t.getElementsByClassName(a.A.menu)).includes(e.target.closest(`.${a.A.menu}`))))if(this.state.transitionMoveTarget)this.state.transitionMoveTarget.focus(),this.setState({transitionMoveTarget:null});else{const e=t.querySelector("#"+this.props.activeMenu)||t||null,n=e.getElementsByTagName("UL");if(0===n.length)return;const i=Array.from(n[0].children);if(this.state.currentDrilldownMenuId&&e.id===this.state.currentDrilldownMenuId)return;this.setState({currentDrilldownMenuId:e.id});const l=i.filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.A.divider))))[0].firstChild;l.focus(),l.tabIndex=0}},this.handleExtraKeys=e=>{const t=this.props.containsDrilldown,n=document.activeElement;if(e.target.closest(`.${a.A.menu}`)===this.activeMenu||e.target.classList.contains(s)||(this.activeMenu=e.target.closest(`.${a.A.menu}`),this.setState({disableHover:!0})),"INPUT"===e.target.tagName)return;const i=this.activeMenu,l=e.key,r=n.classList.contains(s)||n.classList.contains(o);if(" "===l||"Enter"===l){if(e.preventDefault(),t&&!r)if(n.closest("li").classList.contains("pf-m-current-path")&&"LI"===i.parentElement.tagName)n.tabIndex=-1,i.parentElement.firstChild.tabIndex=0,this.setState({transitionMoveTarget:i.parentElement.firstChild});else if(n.nextElementSibling&&n.nextElementSibling.classList.contains(a.A.menu)){const e=Array.from(n.nextElementSibling.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.A.divider))));n.tabIndex=-1,e[0].firstChild.tabIndex=0,this.setState({transitionMoveTarget:e[0].firstChild})}document.activeElement.click()}},this.createNavigableElements=()=>this.props.containsDrilldown?this.activeMenu?Array.from(this.activeMenu.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.A.divider)))):[]:this.menuRef.current?Array.from(this.menuRef.current.getElementsByTagName("LI")).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.A.divider)))):[],e.innerRef&&(this.menuRef=e.innerRef)}allowTabFirstItem(){const e=this.menuRef.current;if(e){const t=e.querySelector("ul button:not(:disabled), ul a:not(:disabled)");t&&(t.tabIndex=0)}}componentDidMount(){this.context&&this.setState({disableHover:this.context.disableHover}),m.Sw&&window.addEventListener("transitionend",this.props.isRootMenu?this.handleDrilldownTransition:null),this.allowTabFirstItem()}componentWillUnmount(){m.Sw&&window.removeEventListener("transitionend",this.handleDrilldownTransition)}componentDidUpdate(e){e.children!==this.props.children&&this.allowTabFirstItem()}render(){const e=this.props,{id:t,children:n,className:m,onSelect:f,selected:h=null,onActionClick:g,ouiaId:v,ouiaSafe:b,containsFlyout:A,isNavFlyout:I,containsDrilldown:E,isMenuDrilledIn:y,isPlain:w,isScrollable:k,drilldownItemPath:x,drilledInMenus:C,onDrillIn:L,onDrillOut:N,onGetMenuHeight:_,parentMenu:M=null,activeItemId:S=null,innerRef:D,isRootMenu:R,activeMenu:H,role:T}=e,O=(0,i.Tt)(e,["id","children","className","onSelect","selected","onActionClick","ouiaId","ouiaSafe","containsFlyout","isNavFlyout","containsDrilldown","isMenuDrilledIn","isPlain","isScrollable","drilldownItemPath","drilledInMenus","onDrillIn","onDrillOut","onGetMenuHeight","parentMenu","activeItemId","innerRef","isRootMenu","activeMenu","role"]),P=y||C&&C.includes(t)||!1;return l.createElement(d.x.Provider,{value:{menuId:t,parentMenu:M||t,onSelect:f,onActionClick:g,activeItemId:S,selected:h,drilledInMenus:C,drilldownItemPath:x,onDrillIn:L,onDrillOut:N,onGetMenuHeight:_,flyoutRef:this.state.flyoutRef,setFlyoutRef:e=>this.setState({flyoutRef:e}),disableHover:this.state.disableHover,role:T}},R&&l.createElement(u.oV,{containerRef:this.menuRef||null,additionalKeyHandler:this.handleExtraKeys,createNavigableElements:this.createNavigableElements,isActiveElement:e=>document.activeElement.closest("li")===e||document.activeElement.parentElement===e||document.activeElement.closest(`.${a.A.menuSearch}`)===e||document.activeElement.closest("ol")&&document.activeElement.closest("ol").firstChild===e,getFocusableElement:e=>{var t,n;return"DIV"===(null==e?void 0:e.tagName)&&e.querySelector("input")||"LABEL"===(null===(t=e.firstChild)||void 0===t?void 0:t.tagName)&&e.querySelector("input")||"DIV"===(null===(n=e.firstChild)||void 0===n?void 0:n.tagName)&&e.querySelector("a, button, input")||e.firstChild},noHorizontalArrowHandling:document.activeElement&&(document.activeElement.classList.contains(s)||document.activeElement.classList.contains(o)||"INPUT"===document.activeElement.tagName),noEnterHandling:!0,noSpaceHandling:!0}),l.createElement("div",Object.assign({id:t,className:(0,r.A)(a.A.menu,w&&a.A.modifiers.plain,k&&a.A.modifiers.scrollable,A&&a.A.modifiers.flyout,I&&a.A.modifiers.nav,E&&a.A.modifiers.drilldown,P&&a.A.modifiers.drilledIn,m),ref:this.menuRef},(0,c.getOUIAProps)(p.displayName,void 0!==v?v:this.state.ouiaStateId,b),O),n))}}f.displayName="Menu",f.contextType=d.x,f.defaultProps={ouiaSafe:!0,isRootMenu:!0,isPlain:!1,isScrollable:!1,role:"menu"};const p=l.forwardRef(((e,t)=>l.createElement(f,Object.assign({},e,{innerRef:t}))));p.displayName="Menu"},94494:(e,t,n)=>{n.d(t,{r:()=>d});var i=n(8674),l=n(19365),a=n(88144),s=n(33774),o=n(10874);const r="--pf-v5-c-menu__content--Height",c="--pf-v5-c-menu__content--MaxHeight",d=l.forwardRef(((e,t)=>{const{getHeight:n,children:d,menuHeight:m,maxMenuHeight:u}=e,f=(0,i.Tt)(e,["getHeight","children","menuHeight","maxMenuHeight"]),p=l.createRef();return l.createElement(o.x.Consumer,null,(({menuId:i,onGetMenuHeight:o})=>l.createElement("div",Object.assign({},f,{className:(0,s.A)(a.A.menuContent,e.className),ref:e=>((e,i,l)=>{if(e){let t=e.clientHeight,s=null,o=e.closest(`.${a.A.menuList}`);for(;null!==o&&1===o.nodeType;)o.classList.contains(a.A.menuList)&&(s=o),o=o.parentElement;if(s){const e=getComputedStyle(s);t+=parseFloat(e.getPropertyValue("padding-top").replace(/px/g,""))+parseFloat(e.getPropertyValue("padding-bottom").replace(/px/g,""))+parseFloat(getComputedStyle(s.parentElement).getPropertyValue("border-bottom-width").replace(/px/g,""))}l&&l(i,t),n&&n(t.toString())}return t||p})(e,i,o),style:Object.assign(Object.assign({},m&&{[r]:m}),u&&{[c]:u})}),d)))}));d.displayName="MenuContent"},10874:(e,t,n)=>{n.d(t,{q:()=>a,x:()=>l});var i=n(19365);const l=i.createContext({menuId:null,parentMenu:null,onActionClick:()=>null,onSelect:()=>null,activeItemId:null,selected:null,drilledInMenus:[],drilldownItemPath:[],onDrillIn:null,onDrillOut:null,onGetMenuHeight:()=>null,flyoutRef:null,setFlyoutRef:()=>null,disableHover:!1,role:"menu"}),a=i.createContext({itemId:null,isDisabled:!1})},40091:(e,t,n)=>{n.d(t,{D:()=>x});var i=n(8674),l=n(19365),a=n(88144),s=n(33774);const o="--pf-v5-c-menu--m-flyout__menu--top-offset",r="--pf-v5-c-menu--m-flyout__menu--m-left--right-offset",c="--pf-v5-c-menu--m-flyout__menu--left-offset";var d=n(40167),m=n(89015),u=n(91918),f=n(59779),p=n(83873),h=n(10874);const g=(0,n(68419).w)({name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0}),v=e=>{var{className:t="",icon:n,onClick:o,"aria-label":r,isFavorited:c=null,isDisabled:d,actionId:m,innerRef:u}=e,f=(0,i.Tt)(e,["className","icon","onClick","aria-label","isFavorited","isDisabled","actionId","innerRef"]);return l.createElement(h.x.Consumer,null,(({onActionClick:e})=>l.createElement(h.q.Consumer,null,(({itemId:i,isDisabled:p})=>l.createElement("button",Object.assign({className:(0,s.A)(a.A.menuItemAction,null!==c&&a.A.modifiers.favorite,c&&a.A.modifiers.favorited,t),"aria-label":r,onClick:t=>{o&&o(t),e&&e(t,i,m)}},(!0===d||!0===p)&&{disabled:!0},{ref:u,tabIndex:-1},f),l.createElement("span",{className:(0,s.A)(a.A.menuItemActionIcon)},"favorites"===n||null!==c?l.createElement(g,{"aria-hidden":!0}):n))))))},b=l.forwardRef(((e,t)=>l.createElement(v,Object.assign({},e,{innerRef:t}))));b.displayName="MenuItemAction";var A=n(45523),I=n(47931),E=n(55251),y=n(65518);const w=l.createContext({direction:"right"}),k=e=>{var{children:t,className:n,itemId:g=null,to:v,hasCheckbox:k=!1,isActive:x=null,isFavorited:C=null,isLoadButton:L=!1,isLoading:N=!1,flyoutMenu:_,direction:M,description:S=null,onClick:D=()=>{},component:R="button",isDisabled:H=!1,isAriaDisabled:T=!1,isExternalLink:O=!1,isSelected:P=null,isFocused:F,isDanger:U=!1,icon:q,actions:V,onShowFlyout:B,drilldownMenu:j,isOnPath:$,innerRef:G,id:K,"aria-label":z,tooltipProps:W,rel:X,target:Z,download:J}=e,Q=(0,i.Tt)(e,["children","className","itemId","to","hasCheckbox","isActive","isFavorited","isLoadButton","isLoading","flyoutMenu","direction","description","onClick","component","isDisabled","isAriaDisabled","isExternalLink","isSelected","isFocused","isDanger","icon","actions","onShowFlyout","drilldownMenu","isOnPath","innerRef","id","aria-label","tooltipProps","rel","target","download"]);const{menuId:Y,parentMenu:ee,onSelect:te,onActionClick:ne,activeItemId:ie,selected:le,drilldownItemPath:ae,onDrillIn:se,onDrillOut:oe,flyoutRef:re,setFlyoutRef:ce,disableHover:de,role:me}=l.useContext(h.x);let ue=v?"a":R;k&&!v&&(ue="label");const[fe,pe]=l.useState(null),he=l.useContext(w),[ge,ve]=l.useState(he.direction),be=l.useRef(),Ae=be===re,Ie=void 0!==_,Ee=e=>{!Ae&&e?ce(be):Ae&&!e&&ce(null),B&&e&&B()};(0,E.E)((()=>{if(Ie&&be.current&&I.Sw){const e=be.current.lastElementChild;if(e&&e.classList.contains(a.A.menu)){const t=be.current.getClientRects()[0],n=e.getClientRects()[0];if(t&&n){const i=t.x-n.width,l=window.innerWidth-t.x-t.width-n.width;let s=ge;l<0&&"left"!==s?(ve("left"),s="left"):i<0&&"right"!==s&&(ve("right"),s="right");let d=0;i<0&&l<0&&(d="right"===s?-l:-i),"left"===s?(e.classList.add(a.A.modifiers.left),e.style.setProperty(r,`-${d}px`)):e.style.setProperty(c,`-${d}px`);const m=window.innerHeight-t.y-n.height;window.innerHeight-n.height<0&&m<0||m<0&&e.style.setProperty(o,`${m}px`)}}}}),[Ae,_]),l.useEffect((()=>{ve(he.direction)}),[he]),l.useEffect((()=>{if(fe)if(Ae){const e=fe.nextElementSibling;Array.from(e.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.A.divider))))[0].firstChild.focus()}else fe.focus()}),[Ae,fe]);const ye=e=>{const t=e.key,n=e.target,i=e.type;" "!==t&&"Enter"!==t&&"ArrowRight"!==t&&"click"!==i||(e.stopPropagation(),e.preventDefault(),Ae||(Ee(!0),pe(n))),"Escape"!==t&&"ArrowLeft"!==t||Ae&&(e.stopPropagation(),Ee(!1))},we=(e,t)=>{T||(t&&t(e,g),D&&D(e))},ke=$&&$||ae&&ae.includes(g)||!1;let xe;M&&(xe="down"===M?e=>se&&se(e,Y,"function"==typeof j?j().props.id:j.props.id,g):e=>oe&&oe(e,ee,g));let Ce={};"a"===ue?Ce={href:v,"aria-disabled":!(!H&&!T)||null,disabled:null,target:O?"_blank":Z,rel:X,download:J}:"button"===ue&&(Ce={type:"button","aria-disabled":!!T||null}),$?Ce["aria-expanded"]=!0:Ie&&(Ce["aria-haspopup"]="menu",Ce["aria-expanded"]=Ae);const Le=()=>null!==P?P:null!==le&&null!==g&&(Array.isArray(le)&&le.includes(g)||g===le);l.useEffect((()=>{if(F&&be.current){const e=be.current,t=e.parentElement;if(t){const n=e.offsetTop-t.offsetTop<t.scrollTop,i=e.offsetTop-t.offsetTop+e.clientHeight;(n||i)&&e.scrollIntoView({behavior:"auto",block:"nearest"})}}}),[F]);const Ne="listbox"===me,_e=l.createElement(l.Fragment,null,l.createElement(y.N,null,(e=>l.createElement(ue,Object.assign({id:K,tabIndex:-1,className:(0,s.A)(a.A.menuItem,Le()&&!k&&a.A.modifiers.selected,n),"aria-current":null!==x?x?"page":null:null!==g&&null!==ie?g===ie:null},!k&&{disabled:H,"aria-label":z},!k&&!_&&{role:Ne?"option":"menuitem"},!k&&!_&&Ne&&{"aria-selected":Le()},{ref:G},!k&&{onClick:e=>{T?e.preventDefault():(we(e,te),xe&&xe(e),_&&ye(e))}},k&&{htmlFor:e},Ce),l.createElement("span",{className:(0,s.A)(a.A.menuItemMain)},"up"===M&&l.createElement("span",{className:(0,s.A)(a.A.menuItemToggleIcon)},l.createElement(u.Ay,{"aria-hidden":!0})),q&&l.createElement("span",{className:(0,s.A)(a.A.menuItemIcon)},q),k&&l.createElement("span",{className:(0,s.A)(a.A.menuItemCheck)},l.createElement(p.S,{id:e,component:"span",isChecked:P||!1,onChange:e=>we(e,te),isDisabled:H,"aria-disabled":T})),l.createElement("span",{className:(0,s.A)(a.A.menuItemText)},t),O&&l.createElement("span",{className:(0,s.A)(a.A.menuItemExternalIcon)},l.createElement(d.default,{"aria-hidden":!0})),(_||"down"===M)&&l.createElement("span",{className:(0,s.A)(a.A.menuItemToggleIcon)},l.createElement(m.default,{"aria-hidden":!0})),Le()&&l.createElement("span",{className:(0,s.A)(a.A.menuItemSelectIcon)},l.createElement(f.default,{"aria-hidden":!0}))),S&&"up"!==M&&l.createElement("span",{className:(0,s.A)(a.A.menuItemDescription)},l.createElement("span",null,S))))),Ae&&l.createElement(h.x.Provider,{value:{disableHover:de}},l.createElement(w.Provider,{value:{direction:ge}},_)),"function"==typeof j?j():j,l.createElement(h.q.Provider,{value:{itemId:g,isDisabled:H}},V,null!==C&&l.createElement(b,{icon:"favorites",isFavorited:C,"aria-label":C?"starred":"not starred",onClick:e=>ne(e,g),tabIndex:-1,actionId:"fav"})));return l.createElement("li",Object.assign({className:(0,s.A)(a.A.menuListItem,H&&a.A.modifiers.disabled,T&&a.A.modifiers.ariaDisabled,ke&&a.A.modifiers.currentPath,L&&a.A.modifiers.load,N&&a.A.modifiers.loading,F&&a.A.modifiers.focus,U&&a.A.modifiers.danger,n),onMouseOver:()=>{T||de||(Ie?Ee(!0):ce(null))}},_&&!T&&{onKeyDown:ye},{ref:be,role:k?"menuitem":"none"},k&&{"aria-label":z},Q),W?l.createElement(A.m,Object.assign({},W),_e):_e)},x=l.forwardRef(((e,t)=>l.createElement(k,Object.assign({},e,{innerRef:t}))));x.displayName="MenuItem"},75797:(e,t,n)=>{n.d(t,{c:()=>r});var i=n(8674),l=n(19365),a=n(88144),s=n(33774),o=n(10874);const r=e=>{var{children:t=null,className:n,isAriaMultiselectable:r=!1,"aria-label":c}=e,d=(0,i.Tt)(e,["children","className","isAriaMultiselectable","aria-label"]);const{role:m}=l.useContext(o.x);return l.createElement("ul",Object.assign({role:m},"listbox"===m&&{"aria-multiselectable":r},{className:(0,s.A)(a.A.menuList,n),"aria-label":c},d),t)};r.displayName="MenuList"},65518:(e,t,n)=>{n.d(t,{N:()=>s});var i=n(19365),l=n(47931);let a=0;class s extends i.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,l.LP)():a++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}s.displayName="GenerateId",s.defaultProps={prefix:"pf-random-id-",isRandom:!1}},12976:(e,t,n)=>{n.d(t,{TH:()=>a,oV:()=>s});var i=n(19365),l=n(47931);const a=(e,t,n=e=>document.activeElement.contains(e),i=e=>e,l=["A","BUTTON","INPUT"],a=!1,s=!1,o=!0,r=!0)=>{const c=document.activeElement,d=e.key;let m=null;if(!a&&["ArrowUp","ArrowDown"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let l=-1;t.forEach(((e,a)=>{if(n(e)){let e=0;for(;!m&&e<t.length&&-1*e<t.length;)"ArrowUp"===d?e--:e++,l=a+e,l>=t.length&&(l=0),l<0&&(l=t.length-1),m=i(t[l])}}))}if(!s&&["ArrowLeft","ArrowRight"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((a,s)=>{if(n(a)){const n=t[s].querySelectorAll(l.join(","));if(!n.length||r){let e=c;for(;e;)if(e="ArrowLeft"===d?e.previousElementSibling:e.nextElementSibling,e&&l.includes(e.tagName)){m=e;break}}else n.forEach(((t,l)=>{e.target===t&&(i=l+("ArrowLeft"===d?-1:1),i>=n.length&&(i=0),i<0&&(i=n.length-1),m=n[i])}))}}))}m&&(o&&(c.tabIndex=-1,m.tabIndex=0),m.focus())};class s extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:n,getFocusableElement:i,noVerticalArrowHandling:l,noHorizontalArrowHandling:s,noEnterHandling:o,noSpaceHandling:r,updateTabIndex:c,validSiblingTags:d,additionalKeyHandler:m,createNavigableElements:u,onlyTraverseSiblings:f}=this.props;m&&m(e);const p=u();if(!p)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const h=e.key;o||"Enter"===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),r||" "===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),a(e,p,n,i,d,l,s,c,f)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){l.Sw&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){l.Sw&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}s.displayName="KeyboardHandler",s.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},57709:(e,t,n)=>{n.d(t,{L:()=>i});const i="*"},91918:(e,t,n)=>{n.d(t,{Ay:()=>i});const i=(0,n(68419).w)({name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0})},89015:(e,t,n)=>{n.r(t),n.d(t,{AngleRightIcon:()=>a,AngleRightIconConfig:()=>l,default:()=>s});var i=n(68419);const l={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},a=(0,i.w)(l),s=a},59779:(e,t,n)=>{n.r(t),n.d(t,{CheckIcon:()=>a,CheckIconConfig:()=>l,default:()=>s});var i=n(68419);const l={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},a=(0,i.w)(l),s=a},40167:(e,t,n)=>{n.r(t),n.d(t,{ExternalLinkAltIcon:()=>a,ExternalLinkAltIconConfig:()=>l,default:()=>s});var i=n(68419);const l={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},a=(0,i.w)(l),s=a},48280:(e,t,n)=>{n.d(t,{A:()=>i}),n(56905);const i={check:"pf-v5-c-check",checkBody:"pf-v5-c-check__body",checkDescription:"pf-v5-c-check__description",checkInput:"pf-v5-c-check__input",checkLabel:"pf-v5-c-check__label",checkLabelRequired:"pf-v5-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},88144:(e,t,n)=>{n.d(t,{A:()=>i}),n(1641);const i={breadcrumb:"pf-v5-c-breadcrumb",check:"pf-v5-c-check",dirRtl:"pf-v5-m-dir-rtl",divider:"pf-v5-c-divider",menu:"pf-v5-c-menu",menuBreadcrumb:"pf-v5-c-menu__breadcrumb",menuContent:"pf-v5-c-menu__content",menuFooter:"pf-v5-c-menu__footer",menuGroup:"pf-v5-c-menu__group",menuGroupTitle:"pf-v5-c-menu__group-title",menuHeader:"pf-v5-c-menu__header",menuItem:"pf-v5-c-menu__item",menuItemAction:"pf-v5-c-menu__item-action",menuItemActionIcon:"pf-v5-c-menu__item-action-icon",menuItemCheck:"pf-v5-c-menu__item-check",menuItemDescription:"pf-v5-c-menu__item-description",menuItemExternalIcon:"pf-v5-c-menu__item-external-icon",menuItemIcon:"pf-v5-c-menu__item-icon",menuItemMain:"pf-v5-c-menu__item-main",menuItemSelectIcon:"pf-v5-c-menu__item-select-icon",menuItemText:"pf-v5-c-menu__item-text",menuItemToggleIcon:"pf-v5-c-menu__item-toggle-icon",menuList:"pf-v5-c-menu__list",menuListItem:"pf-v5-c-menu__list-item",menuSearch:"pf-v5-c-menu__search",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",flyout:"pf-m-flyout",top:"pf-m-top",left:"pf-m-left",drilldown:"pf-m-drilldown",drilledIn:"pf-m-drilled-in",currentPath:"pf-m-current-path",static:"pf-m-static",plain:"pf-m-plain",scrollable:"pf-m-scrollable",nav:"pf-m-nav",focus:"pf-m-focus",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",load:"pf-m-load",loading:"pf-m-loading",danger:"pf-m-danger",selected:"pf-m-selected",favorite:"pf-m-favorite",favorited:"pf-m-favorited"},themeDark:"pf-v5-theme-dark"}}}]);