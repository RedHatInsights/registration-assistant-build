!function(e){function t(t){for(var o,i,a=t[0],r=t[1],s=t[2],l=0,c=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(_,i)&&_[i]&&c.push(_[i][0]),_[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(N&&N(t);c.length;)c.shift()();return T.push.apply(T,s||[]),n()}function n(){for(var e,t=0;t<T.length;t++){for(var n=T[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==_[a]&&(o=!1)}o&&(T.splice(t--,1),e=P(P.s=n[0]))}return e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!S[e]||!I[e])return;for(var n in I[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--b&&0===v&&E()}(e,t),o&&o(e,t)};var i,a=!0,r="9262220342949a0b753b",s={},l=[],c=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(g={})[t]=e[t],h("ready");break;case"ready":A(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:H,apply:k,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[t]};return i=void 0,n}var u=[],p="idle";function h(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,g,m,y,b=0,v=0,w={},I={},S={};function R(e){return+e+""===e?+e:e}function H(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,i=P.p+""+r+".hot-update.json";o.open("GET",i,!0),o.timeout=t,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return h(C()?"ready":"idle"),null;I={},w={},S=e.c,m=e.h,h("prepare");var t=new Promise((function(e,t){f={resolve:e,reject:t}}));for(var n in g={},_)x(n);return"prepare"===p&&0===v&&0===b&&E(),t}));var t}function x(e){S[e]?(I[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function E(){h("ready");var e=f;if(f=null,e)if(a)Promise.resolve().then((function(){return k(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(R(n));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var o,a,c,d,u;function p(e){for(var t=[e],n={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),a=i.id,r=i.chain;if((d=O[a])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:r,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:r,moduleId:a};for(var s=0;s<d.parents.length;s++){var l=d.parents[s],c=O[l];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:r.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(c.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),f(n[l],[a])):(delete n[l],t.push(l),o.push({chain:r.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}C();var b={},v=[],w={},I=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var H in g)if(Object.prototype.hasOwnProperty.call(g,H)){var x;u=R(H),x=g[H]?p(u):{type:"disposed",moduleId:H};var E=!1,k=!1,A=!1,T="";switch(x.chain&&(T="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+x.moduleId+T));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+T));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+T));break;case"accepted":n.onAccepted&&n.onAccepted(x),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),A=!0;break;default:throw new Error("Unexception type "+x.type)}if(E)return h("abort"),Promise.reject(E);if(k)for(u in w[u]=g[u],f(v,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,u)&&(b[u]||(b[u]=[]),f(b[u],x.outdatedDependencies[u]));A&&(f(v,[x.moduleId]),w[u]=I)}var D,M=[];for(a=0;a<v.length;a++)u=v[a],O[u]&&O[u].hot._selfAccepted&&w[u]!==I&&!O[u].hot._selfInvalidated&&M.push({module:u,parents:O[u].parents.slice(),errorHandler:O[u].hot._selfAccepted});h("dispose"),Object.keys(S).forEach((function(e){!1===S[e]&&function(e){delete _[e]}(e)}));var j,N,F=v.slice();for(;F.length>0;)if(u=F.pop(),d=O[u]){var L={},U=d.hot._disposeHandlers;for(c=0;c<U.length;c++)(o=U[c])(L);for(s[u]=L,d.hot.active=!1,delete O[u],delete b[u],c=0;c<d.children.length;c++){var B=O[d.children[c]];B&&((D=B.parents.indexOf(u))>=0&&B.parents.splice(D,1))}}for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(d=O[u]))for(N=b[u],c=0;c<N.length;c++)j=N[c],(D=d.children.indexOf(j))>=0&&d.children.splice(D,1);h("apply"),void 0!==m&&(r=m,m=void 0);for(u in g=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var z=null;for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(d=O[u])){N=b[u];var W=[];for(a=0;a<N.length;a++)if(j=N[a],o=d.hot._acceptedDependencies[j]){if(-1!==W.indexOf(o))continue;W.push(o)}for(a=0;a<W.length;a++){o=W[a];try{o(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[a],error:e}),n.ignoreErrored||z||(z=e)}}}for(a=0;a<M.length;a++){var G=M[a];u=G.module,l=G.parents,i=u;try{P(u)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||z||(z=t),z||(z=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||z||(z=e)}}if(z)return h("fail"),Promise.reject(z);if(y)return t(n).then((function(e){return v.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return h("idle"),new Promise((function(e){e(v)}))}(t=t||{})}function C(){if(y)return g||(g={}),y.forEach(A),y=void 0,!0}function A(t){Object.prototype.hasOwnProperty.call(g,t)||(g[t]=e[t])}var O={},_={1:0},T=[];function P(t){if(O[t])return O[t].exports;var n=O[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=l,l=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=O[e];if(!t)return P;var n=function(n){return t.hot.active?(O[n]?-1===O[n].parents.indexOf(e)&&O[n].parents.push(e):(l=[e],i=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),P(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,o(a));return n.e=function(e){return"ready"===p&&h("prepare"),v++,P.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(w[e]||x(e),0===v&&0===b&&E())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=_[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=_[e]=[t,o]}));t.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,P.nc&&a.setAttribute("nonce",P.nc),a.src=function(e){return P.p+"js/"+({2:"Register",6:"vendors~Register"}[e]||e)+".js"}(e);var r=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=_[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,n[1](r)}_[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},P.m=e,P.c=O,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)P.d(n,o,function(t){return e[t]}.bind(null,o));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/apps/registration/",P.oe=function(e){throw console.error(e),e},P.h=function(){return r};var D=window.webpackJsonp=window.webpackJsonp||[],M=D.push.bind(D);D.push=t,D=D.slice();for(var j=0;j<D.length;j++)t(D[j]);var N=M;T.push([305,0,4,3,5]),n()}({164:function(e){e.exports=JSON.parse('{"en":{"registerYourSystems":"Register your systems with Red Hat Insights","preinstallationChecks":"Preinstallation checks","systemsManaged":"How are the systems managed?","viewInsightsDashboard":"View Insights dashboard","installTheClient":"Install the client and register your systems to Red Hat Insights","rhel8":"RHEL 8","rhel76":"RHEL 7 & 6","downloadPuppet":"Download the Insights-client puppet module","downloadModule":"Download module","installAndConfigure":"Install and configure your puppet module","automatedInstallation":"Automated Installation","manualInstall":"Manual Installation","puppetAutomatedInstall":"If you are using Red Hat Satellite\'s configuration management provided by puppet this process can be automated by applying the preinstalled Puppet class {class}. This class can be imported from the Puppet Master into the appropriate Puppet environment and applied to hosts that you wish to subscribe to Red Hat Insights.","puppetAutomatedInstallMoInfo":"For more information on this topic, refer to the Creating a Host Group chapter in the official Satellite 6 User Guide.","deployingRHInsights":"Deploying Red Hat Insights using the Ansible Role included with your Smart Management entitlement","youCanAutomate":"You can automate the installation and registration of hosts with Red Hat Insights using the {role} Ansible role. For more information about adding this role to your Satellite, see {link}.","managingAnsibleRoles":"Managing Ansible Roles","hostGroup":"Host Group chapter","rhSupported":"Red Hat-supported versions","operatingSystem":"Operating System","operatingSystemNote":"Note: Red Hat Insights can be used on all {rhSupported} of Red Hat Enterprise Linux, version 6.4 and later.","stepOneTitle":"Step 1: Tell us about your systems","deployRHI":"Deploy Red Hat Insights using Puppet in Satellite","stepNumberTitle":"Step {number}: {variable}","rhsChooseConfigMan":"Choose a configuration management tool","rhsChooseConfig":"Note: you can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.","rhsChooseConfigStepOne":"Add the RedHatInsights.insights-client role to the hosts. {newLine}\\n        For new hosts, see {linkOne}. {newLine}\\n        For existing hosts, see {linkTwo}.","rhsChooseConfigStepTwo":"To run the RedHatInsights.insights-client role on your host, navigate to Hosts > All Hosts and click the name of the host that you want to use.","rhsChooseConfigStepThree":"Click the Run Ansible roles button.","rhsChooseConfigStepFour":"See host on the Insights > Overview page of the Satellite web UI","sectionTwo":"Section 2.1, \\"Creating a Host in Red Hat Satellite\\"","chapterEight":"Chapter 8, Using Ansible Roles","toApply":"To apply any system updates to the Red Hat Insights plug-in, enter httpd restart after updating.","toView":"To view the logs for Red Hat Insights and all plug-ins, go to /var/log/foreman/production.log.","ifYouHaveProblems":"If you have problems connecting to Red Hat Insights, ensure that your certificates are up-to-date. Refresh your subscription manifest to update your certificates.","youCanChange":"You can change the default schedule for running insights-client by configuring insights-client.timer on a host. For more information, see {link} in the Client Configuration Guide for Red Hat Insights.","changingTheInsights":"Changing the insights-client schedule","rhsm":"Red Hat Subscription Manager","registerRhsm":"Register with RHSM","registerRhsmText":"You must register all Red Hat Enterprise Linux (RHEL) systems with Red Hat Subscription Manager to receive necessary updates and to resolve software dependencies.","registerRhsmTextNote":"Note: If the system cannot be subscribed to RHSM, {basicAuth} can be configured on the client.","registerRhsmTextNoteAfter":"If you have a web-based proxy between your system and the Internet, you can configure the insights-client to connect through it. For more information, refer to {howToAccess}.","basicAuth":"basic authentication","howToAccess":"How to access Red Hat Insights through a firewall/Proxy","rhs":"Red Hat Satellite","publicCloud":"Public cloud/RHUI","enablingInsightsOnRhuiTitle":"Enabling Insights on RHUI/Cloud marketplace","enablingInsightsOnRhuiParagraph1":"You must have a Red Hat account.  If you\'ve used RHEL on-demand through a public cloud marketplace but have never interacted with Red Hat directly, you can create an account by {createRedHatAccountInstructions}.","enablingInsightsOnRhuiParagraph2":"If you\'re using a Red Hat subscription to entitle your RHEL system, you must enable the subscription for Red Hat Cloud Access.  Learn how to in the {cloudAccessDocumentation}.","createRedHatAccountInstructions":"following these instructions","cloudAccessDocumentation":"Cloud Access documentation","deployInsightsOnCloudInfra":"Deploy Red Hat Insights on your cloud infrastructure","deployInsightsOnCloudText":"The following guidance is user who wish to deploy Red Hat Insights on an existing, cloud marketplace-purchased Red Hat Enterprise Linux (RHEL) system managed by Red Hat Update Infrastructure (RHUI).  This include on-demand, hourly systems purchased from CCSP marketplace, as well as systems deployed from Red Hat Gold Images in AWS.  This procedure involves the following tasks:","installInsightsClient":"Install the Insights client on each system","registerInsightsClient":"Register the system to Insights","configureBasicAuthTitle":"Configure basic authentication in /etc/insights-client/insights-client.conf","configureBasicAuthStep1":"Modify the auto_config= value to FALSE","configureBasicAuthStep2":"Add your Red Hat SSO username to username","configureBasicAuthStep3":"Add your Red Hat SSO password to password","configureBasicAuthStep4":"Save the configuration","insightsWithBasicAuthNote":"Note: To read more about using Red Hat Insights with basic authentication and recommended best practices, {visitOurDocumentation}.","visitOurDocumentation":"visit our documentation","dataCollection":"Data collection & controls","learnMore":"Learn more","setupConfigure":"Setup and Configure","assessAndMonitor":"Assess and monitor the compliance of your RHEL systems using Policies","detectAndNotify":"Detect and be notified of system configuration changes using Custom Policies","rhSM":"Red Hat® Smart Management","combineTheFlexible":"Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights","subscribeSatellite":"Subscribe hosts to the Satellite server","subscribeSatelliteBody":"This step is typically already performed as par of Satellite host configuration.  Only RHEL hosts registered to the particular Satellite server will have reports available in the Satellite UI.","verifySatellite":"Verify Satellite server connection to Red Hat Insights","verifySatelliteStepOne":"In the Satellite UI, navigate to Insights > Manage.","verifySatelliteStepTwo":"Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.","verifySatelliteNote":"Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.","useAutomation":"Do you wish to use automation for installation?","automationNote":"Note: You can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.","ansible":"Ansible","puppet":"Puppet","no":"No","additionalInfo":"Additional Information","downloadClientPlaybook":"Download the insights-client playbook","downloadPlaybook":"Download playbook","configurePlaybook":"Install and configure your playbook","workWithPlaybook":"Working With Playbooks","installAnsible":"Install Ansible and get started","configureClient":"Configure insights-client playbook","installSystemRoles":"Installing RHEL System Roles and Ansible","inventorySetup":"Setup your Ansible inventory","inventorySetupSubtitle":"{method} generated inventory","statically":"Statically","dynamically":"Dynamically","staticInventory":"Ansible works against multiple managed hosts in your infrastructure at the same time, using host lists known as inventory.","dynamicInventory":"Generate an Ansible inventory on system inventory which fluctuates over time. Also track hosts from multiple sources.","roleVariables":"Role Variables","factsInstalled":"Facts Installed","examples":"Examples","rolesAndConfig":"Role Variables / Configuration","rolesAndConfigDescription":"The following variables can be used to perform some initial configuration for the insights-client install. These variables can be passed directly with the playbook invocation or placed in a configuration yaml file. See the section \'Example Playbook\' for information on various ways to use these variables.","optional":"optional","username":"username","password":"password","displayNameOne":"Sets or resets the Display Name/System Name within Insights. Insights needs an easily identifiable name for each system. If no explicit display name is given to a system, Insights uses it\'s hostname. If a system\'s hostname is not easily identifiable, like \\"localhost\\" or \\"d4098731408\\", you can give it a better name by setting \'insights_display_name.\'","displayNameTwo":"If undefined (not set at all), this role will not make changes to a system\'s display name.","displayNameThree":"If defined (set) to be the empty string, this role will remove any previously set display name for the system, and cause it to use the systems hostname as it\'s Display name/System name.","displayNameFour":"If defined to be a non-empty string, this role will replace any previously set display name for the system with the given string.","userPassOne":"If defined, this sets, changes, or removes the {key} in the Insights configuration. If undefined, this role will make no changes to the Insights configuration.","userPassTwo":"If defined to a non-empty string this role will set or change the {key}. If defined to an empty string this role will remove the {key}.","userPassThree":"These should be valid {key} for Insights/Red Hat Portal/Red Hat Subscription Manager.","userPassFour":"If the {key} is set in the Insights configuration, it will be used as credentials for all future interactions with the Insights server.","userPassFive":"These credentials are only necessary if the client system is not registered with Red Hat Subscription Manager. If the username and password are not set in the Insights configuration, which is the default initial state, all interactions with the Insights server will use the CERT provided by RHSM.","autoConfig":"True/False - attempt to auto-configure the network connection with Satellite or RHSM. Default behavior is True.","authMethod":"BASIC/CERT - This parameter is used to set the authentication method for the Portal. Default behavior is BASIC. Note: when \'auto_config\' is enabled (set to True), CERT will be used if RHSM or Satellite is detected.","insightsProxy":"If the insights client is behind a proxy or firewall, a proxy can be specified. Default is unspecified. Ex: http://user:pass@192.168.100.50:8080","pythonInterpreterOne":"This variable allows you to provide the python interpreter path for ansible to use. This is needed when managing RHEL 8 with older versions of Ansible (2.7 and lower).","pythonInterpreterTwo":"RHEL 8 platform-python path: <strong>/usr/libexec/platform-python</strong>","factsInstalledOne":"This role installs a new fact \'insights\' that provides the system\'s Insights\' System Id. This System Id can be used to query about the system with the Insights Service API.","factsInstalledTwo":"Once this role is run against a system, any future playbook run against that same system will have the system\'s Insights System Id in the fact \'ansible_local.insights.system_id\'.","exampleTaskOne":"For example the task:","exampleTaskTwo":"will display the System ID.","examplePlaybook":"Example Playbook","examplePlaybookOne":"In the examples directory is a very basic playbook utilizing this role:","examplePlaybookTwo":"Here is an example with additional configuration (though using a separate file is preferred if including usernames or passwords):","exampleConfigurationFile":"Example Configuration File","exampleConfigurationOne":"The insights-client install can be configured by using a configuration yaml file to modify various parameters. Here\'s an example, insights-client-config.yml, that configures the insights-client to register via basic auth using the provided username/password and display_name:","exampleConfigurationTwo":"<strong>Reminder:</strong> Check Requirements above to determine if ansible_python_interpreter should be configured prior to running.","exampleConfigurationThree":"If you need to run the Insights Client on a system that is not registered to Red Hat Subscription Manager, as often happens in testing and demoing, set the redhat_portal_username/redhat_portal_password","exampleConfigurationFour":"Note: Any of the role variables mentioned earlier can be placed in this configuration file","exampleConfigurationFive":"Change the permissions on the file so that only you can read them (in case usernames/passwords are listed), and then any time you invoke this role, add the ansible-playbook --extra-vars option:","exampleConfigurationSix":"Note: One of the really useful features of Ansible Tower is role based management of credentials.","exampleUse":"Example Use","exampleUseOne":"On a system where Ansible is installed, run the following command:","exampleUseTwo":"This will install the latest version of the role to ansible\'s default role directory (if using a non default role directory update the playbook accordingly)","exampleUseThree":"Copy the Example Playbook to a file named \'install-insights.yml\'.","exampleUseFour":"Run the following command, replacing \'myhost.example.com\' with the name of the system where you want to install, configure, and register the insights client.","exampleUseFive":"Note: The ansible-playbook invocation will depend on ansible configuration"}}')},178:function(e,t,n){var o=n(77);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(o,i);o.locals&&(e.exports=o.locals),e.hot.accept(77,(function(){var t=n(77);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},305:function(e,t,n){"use strict";n.r(t);var o=n(121),i=n.n(o),a=n(156),r=n.n(a),s=(n(178),n(122)),l=n(0),c=n.n(l),d=n(24),u=n.n(d),p=n(63),h=n(154),f=n.n(h),g=n(158),m=n.n(g),y=n(15),b=n(355),v=n(356),w=n(175),I=function(){return c.a.createElement(b.a,null,c.a.createElement(v.a,{variant:"container",component:function(){return c.a.createElement("span",{className:"pf-c-spinner",role:"progressbar","aria-valuetext":"Loading..."},c.a.createElement("span",{className:"pf-c-spinner__clipper"}),c.a.createElement("span",{className:"pf-c-spinner__lead-ball"}),c.a.createElement("span",{className:"pf-c-spinner__tail-ball"}))}}),c.a.createElement(w.a,{size:"lg",headingLevel:"h4"},"Loading"))},S=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(2)]).then(n.bind(null,427))})),R="/",H=function(e){var t=e.component,n=e.rootClass,o=m()(e,["component","rootClass"]),i=document.getElementById("root");return i.removeAttribute("class"),i.classList.add("page__".concat(n),"pf-c-page__main"),i.setAttribute("role","main"),c.a.createElement(y.b,f()({},o,{component:t}))};H.propTypes={component:u.a.func,rootClass:u.a.string};var x=function(){return c.a.createElement(y.d,null,c.a.createElement(H,{key:"register",exact:!0,path:R,rootClass:"Insights",component:function(){return c.a.createElement(l.Suspense,{fallback:c.a.createElement(I,null)}," ",c.a.createElement(S,null)," ")}}),c.a.createElement(y.a,{path:"*",to:R,push:!0}))},E=n(159),k=Object(E.getRegistry)();k.register({notifications:s.notifications});var C=function(e){function t(){return(t=r()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:insights.chrome.init(),insights.chrome.identifyApp("registration");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){t.apply(this,arguments)}()}),[]),c.a.createElement(p.Provider,{store:k.getStore()},c.a.createElement(s.NotificationsPortal,null),c.a.createElement(x,{childProps:e}))};C.propTypes={history:u.a.object};var A,O=Object(y.g)(C),_=n(160),T=n(31),P=n.n(T),D=n(69),M=n(165),j=n(163),N=n.n(j),F=n(162);var L=n(164);P.a.render(c.a.createElement(_.IntlProvider,{locale:navigator.language,messages:L,onError:console.log},c.a.createElement(p.Provider,{store:function(){if(A)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A=new N.a({},[F.a].concat(t))}().getStore()},c.a.createElement(D.a,{basename:Object(M.getBaseName)(window.location.pathname)},c.a.createElement(O,null)))),document.getElementById("root"))},77:function(e,t,n){var o=n(6),i=n(179);(t=o(!1)).i(i),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-registration-assistant pre{background-color:var(--pf-global--palette--black-150);border:var(--pf-global--BorderWidth--sm) solid var(--pf-global--palette--black-200);padding:var(--pf-global--spacer--md);overflow:auto;white-space:pre-wrap;margin-top:var(--pf-global--spacer--lg)}.ins-c-registration-assistant pre+pre{margin-top:var(--pf-global--spacer--md)}.pf-c-title.ins-c-step-title,.pf-c-content .pf-c-title.ins-c-step-title{margin-bottom:var(--pf-global--spacer--md)}.pf-c-title.ins-c-content-title,.ins-c-content-title{font-family:var(--pf-global--FontFamily--sans-serif);font-size:var(--pf-global--FontSize--lg)}.pf-c-drawer__panel .pf-c-title.ins-c-content-title,.pf-c-drawer__panel .ins-c-content-title{margin-bottom:var(--pf-global--spacer--md)}.pf-c-title.ins-c-content-title.ins-m-font-light,.ins-c-content-title.ins-m-font-light{font-weight:var(--pf-global--FontWeight--light)}.pf-c-title.ins-c-content-title.ins-m-font-normal,.ins-c-content-title.ins-m-font-normal{font-weight:var(--pf-global--FontWeight--normal)}.pf-c-title.ins-c-content-title.ins-m-font-semi-bold,.ins-c-content-title.ins-m-font-semi-bold{font-weight:var(--pf-global--FontWeight--semi-bold)}.pf-c-title.ins-c-content-title.ins-m-font-bold,.ins-c-content-title.ins-m-font-bold{font-weight:var(--pf-global--FontWeight--bold)}.ins-c-title-group{display:grid;grid-gap:var(--pf-global--spacer--sm);grid-template-columns:2rem auto;align-items:center}.ins-c-title-group .pf-c-title,.ins-c-title-group .ins-c-title{display:inline;font-family:var(--pf-global--FontFamily--sans-serif);font-size:var(--pf-global--FontSize--sm);font-weight:var(--pf-global--FontWeight--semi-bold)}.ins-c-title-group .ins-c-icon{margin-right:var(--pf-global--spacer--sm)}.pf-c-form__helper-text span{display:block;max-width:500px}.pf-c-form__helper-text.ins-m-conditional-helper{--pf-c-content--MarginBottom: 0;margin-top:calc((var(--pf-c-form--GridGap) * -1) + var(--pf-c-form__helper-text--MarginTop))}.pf-c-form__helper-text.ins-m-light{--pf-c-form__helper-text--Color: var(--pf-global--secondary-color--100)}.ins-c-learn-more{font-size:var(--pf-global--FontSize--sm);white-space:nowrap}p .ins-c-learn-more{margin-left:var(--pf-global--spacer--sm)}.ins-c-dashboard-link{margin-top:var(--pf-global--spacer--xl)}.pf-c-drawer__panel.ins-m-light-300{background-color:var(--pf-global--BackgroundColor--light-300)}@media screen and (min-width: 768px){.ins-c-overflow-content{max-height:100%}}\n",""]),e.exports=t}});
//# sourceMappingURL=App.js.map