(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[6917,1398,3931],{23931:(e,a,i)=>{"use strict";i.r(a),i.d(a,{Page:()=>f,PageBreadcrumb:()=>S,PageContext:()=>p.NQ,PageContextConsumer:()=>p.rP,PageContextProvider:()=>p.qK,PageGroup:()=>g,PageLayouts:()=>u,PageNavigation:()=>k,PageSection:()=>O.d8,PageSectionTypes:()=>O.yp,PageSectionVariants:()=>O.zC,PageSidebar:()=>A,PageSidebarBody:()=>N,PageSidebarContext:()=>v,PageToggleButton:()=>P,pageContextDefaults:()=>p.R1,pageSidebarContextDefaults:()=>w});var t=i(8674),r=i(19365),n=i(73408),s=i(33774),o=i(69724),d=i(47931),l=i(41829),c=i(55401),h=i(30130),m=i(35900),p=i(54282);const g=e=>{var{className:a="",children:i,stickyOnBreakpoint:o,hasShadowTop:l=!1,hasShadowBottom:c=!1,hasOverflowScroll:h=!1,"aria-label":m}=e,g=(0,t.Tt)(e,["className","children","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:u,getVerticalBreakpoint:b}=r.useContext(p.NQ);return r.useEffect((()=>{h&&!m&&console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[h,m]),r.createElement("div",Object.assign({},g,{className:(0,s.A)(n.A.pageMainGroup,(0,d.ay)(o,n.A,"sticky-",b(u),!0),l&&n.A.modifiers.shadowTop,c&&n.A.modifiers.shadowBottom,h&&n.A.modifiers.overflowScroll,a)},h&&{tabIndex:0,role:"region","aria-label":m}),i)};g.displayName="PageGroup";var u,b=i(49045);!function(e){e.vertical="vertical",e.horizontal="horizontal"}(u||(u={}));class f extends r.Component{constructor(e){super(e),this.mainRef=r.createRef(),this.pageRef=r.createRef(),this.observer=()=>{},this.getWindowWidth=()=>d.Sw?this.pageRef.current?this.pageRef.current.clientWidth:window.innerWidth:1200,this.isMobile=()=>this.getWindowWidth()<Number.parseInt(o.A.value,10),this.resize=e=>{var a;const{onPageResize:i}=this.props,t=this.isMobile();if(i&&i(e,{mobileView:t,windowSize:this.getWindowWidth()}),t!==this.state.mobileView&&this.setState({mobileView:t}),null===(a=this.pageRef)||void 0===a?void 0:a.current){const e=this.pageRef.current.clientWidth,a=this.pageRef.current.clientHeight;this.state.width!==e&&this.setState({width:e}),this.state.height!==a&&this.setState({height:a})}},this.handleResize=(0,d.sg)(this.resize,250),this.handleMainClick=()=>{this.isMobile()&&this.state.mobileIsSidebarOpen&&this.mainRef.current&&this.setState({mobileIsSidebarOpen:!1})},this.onSidebarToggleMobile=()=>{this.setState((e=>({mobileIsSidebarOpen:!e.mobileIsSidebarOpen})))},this.onSidebarToggleDesktop=()=>{this.setState((e=>({desktopIsSidebarOpen:!e.desktopIsSidebarOpen})))};const{isManagedSidebar:a,defaultManagedSidebarIsOpen:i}=e,t=!a||i;this.state={desktopIsSidebarOpen:t,mobileIsSidebarOpen:!1,mobileView:!1,width:null,height:null}}componentDidMount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer=(0,b.N)(this.pageRef.current,this.handleResize);const e=this.mainRef.current;e&&(e.addEventListener("mousedown",this.handleMainClick),e.addEventListener("touchstart",this.handleMainClick)),this.resize()}}componentWillUnmount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer();const e=this.mainRef.current;e&&(e.removeEventListener("mousedown",this.handleMainClick),e.removeEventListener("touchstart",this.handleMainClick))}}render(){const e=this.props,{breadcrumb:a,isBreadcrumbWidthLimited:i,className:o,children:u,header:b,sidebar:f,notificationDrawer:S,isNotificationDrawerExpanded:w,onNotificationDrawerExpand:v,drawerDefaultSize:A,drawerMinSize:N,drawerMaxSize:O,isTertiaryNavWidthLimited:k,skipToContent:y,role:P,mainContainerId:B,isManagedSidebar:E,defaultManagedSidebarIsOpen:M,onPageResize:I,getBreakpoint:T,getVerticalBreakpoint:x,mainAriaLabel:C,mainTabIndex:z,mainComponent:R,tertiaryNav:W,isTertiaryNavGrouped:$,isBreadcrumbGrouped:D,additionalGroupedContent:L,groupProps:V,breadcrumbProps:G}=e,U=(0,t.Tt)(e,["breadcrumb","isBreadcrumbWidthLimited","className","children","header","sidebar","notificationDrawer","isNotificationDrawerExpanded","onNotificationDrawerExpand","drawerDefaultSize","drawerMinSize","drawerMaxSize","isTertiaryNavWidthLimited","skipToContent","role","mainContainerId","isManagedSidebar","defaultManagedSidebarIsOpen","onPageResize","getBreakpoint","getVerticalBreakpoint","mainAriaLabel","mainTabIndex","mainComponent","tertiaryNav","isTertiaryNavGrouped","isBreadcrumbGrouped","additionalGroupedContent","groupProps","breadcrumbProps"]),{mobileView:j,mobileIsSidebarOpen:q,desktopIsSidebarOpen:F,width:Q,height:K}=this.state,_={isManagedSidebar:E,onSidebarToggle:j?this.onSidebarToggleMobile:this.onSidebarToggleDesktop,isSidebarOpen:j?q:F,width:Q,height:K,getBreakpoint:T,getVerticalBreakpoint:x};let H=null;W&&k?H=r.createElement("div",{className:(0,s.A)(n.A.pageMainNav,n.A.modifiers.limitWidth)},r.createElement("div",{className:(0,s.A)(n.A.pageMainBody)},W)):W&&(H=r.createElement("div",{className:(0,s.A)(n.A.pageMainNav)},W));const J=a?r.createElement("section",{className:(0,s.A)(n.A.pageMainBreadcrumb,i&&n.A.modifiers.limitWidth,(0,d.ay)(null==G?void 0:G.stickyOnBreakpoint,n.A,"sticky-",x(K),!0))},i?r.createElement("div",{className:(0,s.A)(n.A.pageMainBody)},a):a):null,X=$||D||L?r.createElement(g,Object.assign({},V),$&&H,D&&J,L):null,Y=R,Z=r.createElement(Y,{ref:this.mainRef,role:P,id:B,className:(0,s.A)(n.A.pageMain),tabIndex:z,"aria-label":C},X,!$&&H,!D&&J,u),ee=r.createElement(l.X,{defaultSize:A,minSize:N,maxSize:O},S);return r.createElement(p.qK,{value:_},r.createElement("div",Object.assign({ref:this.pageRef},U,{className:(0,s.A)(n.A.page,null!==Q&&null!==K&&"pf-m-resize-observer",null!==Q&&`pf-m-breakpoint-${T(Q)}`,null!==K&&`pf-m-height-breakpoint-${x(K)}`,o)}),y,b,f,S&&r.createElement("div",{className:(0,s.A)(n.A.pageDrawer)},r.createElement(c._s,{isExpanded:w,onExpand:e=>v(e)},r.createElement(h.z,{panelContent:ee},r.createElement(m.J,null,Z)))),!S&&Z))}}f.displayName="Page",f.defaultProps={isManagedSidebar:!1,isBreadcrumbWidthLimited:!1,defaultManagedSidebarIsOpen:!0,mainTabIndex:-1,isNotificationDrawerExpanded:!1,onNotificationDrawerExpand:()=>null,mainComponent:"main",getBreakpoint:d._y,getVerticalBreakpoint:d.Yo};const S=e=>{var{className:a="",children:i,isWidthLimited:o,stickyOnBreakpoint:l,hasShadowTop:c=!1,hasShadowBottom:h=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,u=(0,t.Tt)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:f}=r.useContext(p.NQ);return r.useEffect((()=>{m&&!g&&console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),r.createElement("section",Object.assign({className:(0,s.A)(n.A.pageMainBreadcrumb,(0,d.ay)(l,n.A,"sticky-",f(b),!0),o&&n.A.modifiers.limitWidth,c&&n.A.modifiers.shadowTop,h&&n.A.modifiers.shadowBottom,m&&n.A.modifiers.overflowScroll,a)},m&&{tabIndex:0},{"aria-label":g},u),o&&r.createElement("div",{className:(0,s.A)(n.A.pageMainBody)},i),!o&&i)};S.displayName="PageBreadcrumb";const w={isSidebarOpen:!0},v=r.createContext(w),A=e=>{var{className:a="",children:i,isSidebarOpen:o=!0,theme:d="dark",id:l="page-sidebar"}=e,c=(0,t.Tt)(e,["className","children","isSidebarOpen","theme","id"]);return r.createElement(p.rP,null,(({isManagedSidebar:e,isSidebarOpen:t})=>{const h=e?t:o;return r.createElement("div",Object.assign({id:l,className:(0,s.A)(n.A.pageSidebar,"light"===d&&n.A.modifiers.light,h&&n.A.modifiers.expanded,!h&&n.A.modifiers.collapsed,a),"aria-hidden":!h},c),r.createElement(v.Provider,{value:{isSidebarOpen:h}},i))}))};A.displayName="PageSidebar";const N=e=>{var{children:a,className:i,usePageInsets:o,isFilled:d}=e,l=(0,t.Tt)(e,["children","className","usePageInsets","isFilled"]);return r.createElement("div",Object.assign({className:(0,s.A)(n.A.pageSidebarBody,o&&n.A.modifiers.pageInsets,!1===d&&n.A.modifiers.noFill,!0===d&&n.A.modifiers.fill,i)},l),a)};N.displayName="PageSidebarBody";var O=i(63802);const k=e=>{var{className:a="",children:i,isWidthLimited:o,stickyOnBreakpoint:l,hasShadowTop:c=!1,hasShadowBottom:h=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,u=(0,t.Tt)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:f}=r.useContext(p.NQ);return r.useEffect((()=>{m&&!g&&console.warn("PageNavigation: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),r.createElement("div",Object.assign({className:(0,s.A)(n.A.pageMainNav,(0,d.ay)(l,n.A,"sticky-",f(b),!0),o&&n.A.modifiers.limitWidth,c&&n.A.modifiers.shadowTop,h&&n.A.modifiers.shadowBottom,m&&n.A.modifiers.overflowScroll,a)},m&&{tabIndex:0,role:"region","aria-label":g},u),o&&r.createElement("div",{className:(0,s.A)(n.A.pageMainBody)},i),!o&&i)};k.displayName="PageNavigation";var y=i(72583);const P=e=>{var{children:a,isSidebarOpen:i=!0,onSidebarToggle:n=()=>{},id:s="nav-toggle"}=e,o=(0,t.Tt)(e,["children","isSidebarOpen","onSidebarToggle","id"]);return r.createElement(p.rP,null,(({isManagedSidebar:e,onSidebarToggle:t,isSidebarOpen:d})=>{const l=e?t:n,c=e?d:i;return r.createElement(y.$n,Object.assign({id:s,onClick:l,"aria-label":"Side navigation toggle","aria-expanded":c?"true":"false",variant:y.Ak.plain},o),a)}))};P.displayName="PageToggleButton"},65518:(e,a,i)=>{"use strict";i.d(a,{N:()=>s});var t=i(19365),r=i(47931);let n=0;class s extends t.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,r.LP)():n++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}s.displayName="GenerateId",s.defaultProps={prefix:"pf-random-id-",isRandom:!1}},31398:(e,a,i)=>{"use strict";i.r(a),i.d(a,{getDefaultOUIAId:()=>c,getOUIAProps:()=>o,useOUIAId:()=>l,useOUIAProps:()=>d});var t=i(19365);let r=0;const n="OUIA-Generated-",s={};function o(e,a,i=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":i,"data-ouia-component-id":a}}const d=(e,a,i=!0,t)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":i,"data-ouia-component-id":l(e,a,t)}),l=(e,a,i)=>{const r=(0,t.useMemo)((()=>c(e,i)),[e,i]);return null!=a?a:r};function c(e,a){try{let i;return i="undefined"!=typeof window?`${window.location.href}-${e}-${a||""}`:`${e}-${a||""}`,s[i]||(s[i]=0),`${n}${e}-${a?`${a}-`:""}${++s[i]}`}catch(i){return`${n}${e}-${a?`${a}-`:""}${++r}`}}},21741:()=>{},30935:()=>{},86893:()=>{},50545:()=>{},97553:()=>{}}]);