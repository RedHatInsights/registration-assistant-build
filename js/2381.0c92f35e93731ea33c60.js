(self.webpackChunkregistration=self.webpackChunkregistration||[]).push([[2381],{1394:(e,t,s)=>{"use strict";var n=s(19365),i=s.n(n),o=s(97732),a=s(33675),l=s(86130),r=s(33905),h=s(932);const u=()=>i().createElement(a.p,null,i().createElement(l.o,{titleText:"Loading",headingLevel:"h4",icon:i().createElement(r.q,{icon:h.y})}));var d=s(7026);const c=(0,n.lazy)((()=>Promise.all([s.e(7931),s.e(1134),s.e(4685),s.e(6695),s.e(3794),s.e(6610),s.e(6794),s.e(6877),s.e(1156),s.e(1688),s.e(6848)]).then(s.bind(s,69596)))),g=(0,n.lazy)((()=>Promise.all([s.e(7931),s.e(1134),s.e(4685),s.e(6695),s.e(3794),s.e(6610),s.e(6794),s.e(6877),s.e(1156),s.e(1688),s.e(6848)]).then(s.bind(s,73223)))),p=()=>{const e=(()=>{const{flagsReady:e}=(0,d.useFlagsStatus)(),t=(0,d.useFlag)("registration-assistant-refresh");return e?t:void 0})();return i().createElement(o.Routes,null,i().createElement(o.Route,{key:"register",exact:!0,path:"/",rootClass:"Insights",element:i().createElement(n.Suspense,{fallback:i().createElement(u,null)}," ",e?i().createElement(g,null):i().createElement(c,null)," ")}),i().createElement(o.Route,{path:"*",element:i().createElement(o.Navigate,{to:"/"})}))},m=e=>((0,n.useEffect)((()=>{insights.chrome.hideGlobalFilter?.()}),[]),i().createElement(p,{childProps:e}));var y=s(23685);const f=JSON.parse('{"en":{"registerYourSystems":"Register your systems with Red Hat Insights","preinstallationChecks":"Preinstallation checks","systemsManaged":"How are the systems managed?","viewInsightsDashboard":"View Insights dashboard","installTheClient":"Install the client and register your systems to Red Hat Insights","rhel8":"RHEL 8","rhel76":"RHEL 7 & 6","downloadPuppet":"Download the Insights-client puppet module","downloadModule":"Download module","installAndConfigure":"Install and configure your puppet module","automatedInstallation":"Automated Installation","manualInstall":"Manual Installation","puppetAutomatedInstall":"If you are using Red Hat Satellite\'s configuration management provided by puppet this process can be automated by applying the preinstalled Puppet class {class}. This class can be imported from the Puppet Master into the appropriate Puppet environment and applied to hosts that you wish to subscribe to Red Hat Insights.","puppetAutomatedInstallMoInfo":"For more information on this topic, refer to the Creating a Host Group chapter in the official Satellite 6 User Guide.","deployingRHInsights":"Deploying Red Hat Insights using the Ansible Role included with your Satellite entitlement","youCanAutomate":"You can automate the installation and registration of hosts with Red Hat Insights using the {role} Ansible role. For more information about adding this role to your Satellite, see {link}.","managingAnsibleRoles":"Managing Ansible Roles","hostGroup":"Host Group chapter","rhSupported":"Red Hat-supported versions","operatingSystem":"Operating System","operatingSystemNote":"Note: Red Hat Insights can be used on all {rhSupported} of Red Hat Enterprise Linux, version 6.4 and later.","stepOneTitle":"Step 1: Tell us about your systems","deployRHI":"Deploy Red Hat Insights using Puppet in Satellite","stepNumberTitle":"Step {number}: {variable}","rhsChooseConfigMan":"Choose a configuration management tool","rhsChooseConfigStepOne":"Add the RedHatInsights.insights-client role to the hosts. {newLine}\\n        For new hosts, see {linkOne}. {newLine}\\n        For existing hosts, see {linkTwo}.","rhsChooseConfigStepTwo":"To run the RedHatInsights.insights-client role on your host, navigate to Hosts > All Hosts and click the name of the host that you want to use.","rhsChooseConfigStepThree":"Click the Run Ansible roles button.","rhsChooseConfigStepFour":"See host on the Insights > Overview page of the Satellite web UI","sectionTwo":"Section 2.1, \\"Creating a Host in Red Hat Satellite\\"","chapterEight":"Chapter 8, Using Ansible Roles","toApply":"To apply any system updates to the Red Hat Insights plug-in, enter httpd restart after updating.","toView":"To view the logs for Red Hat Insights and all plug-ins, go to /var/log/foreman/production.log.","ifYouHaveProblems":"If you have problems connecting to Red Hat Insights, ensure that your certificates are up-to-date. Refresh your subscription manifest to update your certificates.","youCanChange":"You can change the default schedule for running insights-client by configuring insights-client.timer on a host. For more information, see {link} in the Client Configuration Guide for Red Hat Insights.","changingTheInsights":"Changing the insights-client schedule","rhsm":"Red Hat Subscription Manager","registerRhsm":"Register with RHSM","registerRhsmText":"You must register all Red Hat Enterprise Linux (RHEL) systems with Red Hat Subscription Manager to receive necessary updates and to resolve software dependencies.","registerRhsmTextNote":"Note: If the system cannot be subscribed to RHSM, {basicAuth} can be configured on the client.","registerRhsmTextNoteAfter":"If you have a web-based proxy between your system and the Internet, you can configure the insights-client to connect through it. For more information, refer to {howToAccess}.","basicAuth":"basic authentication","howToAccess":"How to access Red Hat Insights through a firewall/Proxy","rhs":"Red Hat Satellite","publicCloud":"Public cloud/RHUI","enablingInsightsOnRhuiTitle":"Enabling Insights on RHUI/Cloud marketplace","enablingInsightsOnRhuiParagraph1":"You must have a Red Hat account.  If you\'ve used RHEL on-demand through a public cloud marketplace but have never interacted with Red Hat directly, you can create an account by {createRedHatAccountInstructions}.","enablingInsightsOnRhuiParagraph2":"If you\'re using a Red Hat subscription to entitle your RHEL system, you must enable the subscription for Red Hat Cloud Access.  Learn how to in the {cloudAccessDocumentation}.","createRedHatAccountInstructions":"following these instructions","cloudAccessDocumentation":"Cloud Access documentation","deployInsightsOnCloudInfra":"Deploy Red Hat Insights on your cloud infrastructure","registerInsightsClient":"Register the system to Insights","dataCollection":"Data collection & controls","learnMore":"Learn more","setupConfigure":"Setup and Configure","assessAndMonitor":"Assess and monitor the compliance of your RHEL systems using Policies","detectAndNotify":"Detect and be notified of system configuration changes using Custom Policies","rhS":"Red Hat® Satellite","combineTheFlexible":"Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights","subscribeSatellite":"Subscribe hosts to the Satellite server","subscribeSatelliteBody":"This step is typically already performed as par of Satellite host configuration.  Only RHEL hosts registered to the particular Satellite server will have reports available in the Satellite UI.","verifySatellite":"Verify Satellite server connection to Red Hat Insights","verifySatelliteStepOne":"In the Satellite UI, navigate to Insights > Manage.","verifySatelliteStepTwo":"Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.","verifySatelliteNote":"Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.","useAutomation":"Do you wish to use automation for installation?","automationNote":"Note: You can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.","ansible":"Ansible","puppet":"Puppet","no":"No","additionalInfo":"Additional Information","downloadClientPlaybook":"Download the insights-client playbook","downloadPlaybook":"Download playbook","configurePlaybook":"Install and configure your playbook","workWithPlaybook":"Working With Playbooks","installAnsible":"Install Ansible and get started","configureClient":"Configure insights-client playbook","installSystemRoles":"Installing RHEL System Roles and Ansible","inventorySetup":"Setup your Ansible inventory","inventorySetupSubtitle":"{method} generated inventory","statically":"Statically","dynamically":"Dynamically","staticInventory":"Ansible works against multiple managed hosts in your infrastructure at the same time, using host lists known as inventory.","dynamicInventory":"Generate an Ansible inventory on system inventory which fluctuates over time. Also track hosts from multiple sources.","roleVariables":"Role Variables","factsInstalled":"Facts Installed","examples":"Examples","rolesAndConfig":"Role Variables / Configuration","rolesAndConfigDescription":"The following variables can be used to perform some initial configuration for the insights-client install. These variables can be passed directly with the playbook invocation or placed in a configuration yaml file. See the section \'Example Playbook\' for information on various ways to use these variables.","optional":"optional","username":"username","password":"password","displayNameOne":"Sets or resets the Display Name/System Name within Insights. Insights needs an easily identifiable name for each system. If no explicit display name is given to a system, Insights uses it\'s hostname. If a system\'s hostname is not easily identifiable, like \\"localhost\\" or \\"d4098731408\\", you can give it a better name by setting \'insights_display_name.\'","displayNameTwo":"If undefined (not set at all), this role will not make changes to a system\'s display name.","displayNameThree":"If defined (set) to be the empty string, this role will remove any previously set display name for the system, and cause it to use the systems hostname as it\'s Display name/System name.","displayNameFour":"If defined to be a non-empty string, this role will replace any previously set display name for the system with the given string.","userPassOne":"If defined, this sets, changes, or removes the {key} in the Insights configuration. If undefined, this role will make no changes to the Insights configuration.","userPassTwo":"If defined to a non-empty string this role will set or change the {key}. If defined to an empty string this role will remove the {key}.","userPassThree":"These should be valid {key} for Insights/Red Hat Portal/Red Hat Subscription Manager.","userPassFour":"If the {key} is set in the Insights configuration, it will be used as credentials for all future interactions with the Insights server.","userPassFive":"These credentials are only necessary if the client system is not registered with Red Hat Subscription Manager. If the username and password are not set in the Insights configuration, which is the default initial state, all interactions with the Insights server will use the CERT provided by RHSM.","autoConfig":"True/False - attempt to auto-configure the network connection with Satellite or RHSM. Default behavior is True.","authMethod":"BASIC/CERT - This parameter is used to set the authentication method for the Portal. Default behavior is BASIC. Note: when \'auto_config\' is enabled (set to True), CERT will be used if RHSM or Satellite is detected.","insightsProxy":"If the insights client is behind a proxy or firewall, a proxy can be specified. Default is unspecified. Ex: http://user:pass@192.168.100.50:8080","pythonInterpreterOne":"This variable allows you to provide the python interpreter path for ansible to use. This is needed when managing RHEL 8 with older versions of Ansible (2.7 and lower).","pythonInterpreterTwo":"RHEL 8 platform-python path: <strong>/usr/libexec/platform-python</strong>","factsInstalledOne":"This role installs a new fact \'insights\' that provides the system\'s Insights\' System Id. This System Id can be used to query about the system with the Insights Service API.","factsInstalledTwo":"Once this role is run against a system, any future playbook run against that same system will have the system\'s Insights System Id in the fact \'ansible_local.insights.system_id\'.","exampleTaskOne":"For example the task:","exampleTaskTwo":"will display the System ID.","examplePlaybook":"Example Playbook","examplePlaybookOne":"In the examples directory is a very basic playbook utilizing this role:","examplePlaybookTwo":"Here is an example with additional configuration (though using a separate file is preferred if including usernames or passwords):","exampleConfigurationFile":"Example Configuration File","exampleConfigurationOne":"The insights-client install can be configured by using a configuration yaml file to modify various parameters. Here\'s an example, insights-client-config.yml, that configures the insights-client to register via basic auth using the provided username/password and display_name:","exampleConfigurationTwo":"<strong>Reminder:</strong> Check Requirements above to determine if ansible_python_interpreter should be configured prior to running.","exampleConfigurationThree":"If you need to run the Insights Client on a system that is not registered to Red Hat Subscription Manager, as often happens in testing and demoing, set the redhat_portal_username/redhat_portal_password","exampleConfigurationFour":"Note: Any of the role variables mentioned earlier can be placed in this configuration file","exampleConfigurationFive":"Change the permissions on the file so that only you can read them (in case usernames/passwords are listed), and then any time you invoke this role, add the ansible-playbook --extra-vars option:","exampleConfigurationSix":"Note: One of the really useful features of Ansible Tower is role based management of credentials.","exampleUse":"Example Use","exampleUseOne":"On a system where Ansible is installed, run the following command:","exampleUseTwo":"This will install the latest version of the role to ansible\'s default role directory (if using a non default role directory update the playbook accordingly)","exampleUseThree":"Copy the Example Playbook to a file named \'install-insights.yml\'.","exampleUseFour":"Run the following command, replacing \'myhost.example.com\' with the name of the system where you want to install, configure, and register the insights client.","exampleUseFive":"Note: The ansible-playbook invocation will depend on ansible configuration","pleaseIndicate":"Please indicate how your systems are managed.","insightsRegistrationAssistant":"The Insights registration assistant will guide you through the setup process for the Red Hat Insights Client. You will be prompted with a series of questions about your environment to provide you with setup instructions tailored for your environment."}}');(0,s(91688).createRoot)(document.getElementById("root")).render(i().createElement((()=>i().createElement(y.Dk,{locale:navigator.language.slice(0,2),messages:f,onError:console.log},i().createElement(m,null))),null))},74778:()=>{},97553:()=>{}}]);