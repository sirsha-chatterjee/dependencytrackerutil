(this.webpackJsonpmyfrontend=this.webpackJsonpmyfrontend||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/Intuit-Logo.5e00b596.png"},45:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},51:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),c=(a(50),a(20)),o=a(15),s=a(21),m=a(22),u=a(24),d=(a(51),a(52),a(11)),h=a(25),p=a.n(h),E=a(104),g=a(100),v=a(42),b=a(101),f=a(105),y=a(102),k=a(99),N=a(38),S=a.n(N),C=a(103),R=a(43),w=a.n(R),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).longText="\n\t  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\n\t  Praesent non nunc mollis, fermentum neque at, semper arcu.\n\t  Nullam eget est sed sem iaculis gravida eget vitae justo.\n\t  ",a.state={firstLoad:!0,dependencies:[],roots:[],repos:[],repoName1:"",repoName:"",branch:"",branchName:"",errorMsg:"",loadingMenu:!0,loadingRepo:!1,loadingDep:!1},a.handleBranchChange=a.handleBranchChange.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleRootChange=a.handleRootChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://billingcomm-billing-dev-ebpi-util-api.t4i-preprod-west2.a.intuit.com/dependencytracker").then((function(t){console.log(t.data),e.setState({roots:t.data,loadingMenu:!1})})).catch((function(t){console.log(t.response),e.setState({errorMsg:"Error retrieving data",loadingMenu:!1})}))}},{key:"handleChange",value:function(e){this.setState({repoName:e.target.value,branchName:""})}},{key:"handleRootChange",value:function(e){var t=this;this.setState({rootName:e.target.value,loadingRepo:!0}),this.state.rootName=e.target.value,p.a.get("https://billingcomm-billing-dev-ebpi-util-api.t4i-preprod-west2.a.intuit.com/dependencytracker/repositories?root="+this.state.rootName).then((function(e){console.log(e.data),t.setState({repos:e.data,loadingRepo:!1})})).catch((function(e){console.log(e.response),t.setState({errorMsg:"Error retrieving data",loadingMenu:!1,loadingRepo:!1})}))}},{key:"renderTooltip",value:function(e){return l.a.createElement(C.a,e,"Simple tooltip")}},{key:"handleBranchChange",value:function(e){this.setState({branch:e.target.value}),this.state.branch=e.target.value}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loadingMenu:!1,loadingDep:!0,dependencies:[],branchName:this.state.branch,repoName1:this.state.repoName}),p.a.get("https://billingcomm-billing-dev-ebpi-util-api.t4i-preprod-west2.a.intuit.com/dependencytracker/dependencies?root="+this.state.rootName+"&repo="+this.state.repoName+"&branch="+this.state.branch).then((function(e){console.log(e),t.setState({dependencies:e.data,errorMsg:null,loadingDep:!1})})).catch((function(e){console.log(e),t.setState({errorMsg:"Error retrieving data",dependencies:[],loadingDep:!1})})),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,a=t.repos,n=t.dependencies,r=t.errorMsg,i=t.roots;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:S.a,alt:"",width:"200"}),l.a.createElement("h5",{padding:"35px 70px"},"Dependency Tracker")),this.state.loadingMenu?l.a.createElement("div",null,"Loading Repositories...",l.a.createElement(k.a,null)):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E.a,{onSubmit:this.handleSubmit},l.a.createElement(g.a,null,l.a.createElement(v.a,{xs:1}),l.a.createElement(v.a,{xs:3},l.a.createElement(E.a.Label,null,"1.-Please select your Root Github Repository:",l.a.createElement("select",{class:"browser-default custom-select",value:this.state.rootName,name:"root",onChange:this.handleRootChange},l.a.createElement("option",null,"---Select Base Repository---"),i.length?i.map((function(e,t){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})):null))),l.a.createElement(v.a,{xs:3},l.a.createElement(E.a.Label,null,"2.-Please select your Github Repository:",this.state.loadingRepo?l.a.createElement(k.a,null):l.a.createElement("select",{class:"browser-default custom-select",value:this.state.repoName,name:"repo",onChange:this.handleChange},l.a.createElement("option",null,"---Select Repository---"),a.length?a.map((function(e,t){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})):null))),l.a.createElement(v.a,{xs:3},l.a.createElement(E.a.Label,null,"3.-Please select Repository's branch:",this.state.loadingRepo?l.a.createElement("div",null,l.a.createElement(k.a,null)):l.a.createElement("select",{class:"browser-default custom-select",value:this.state.branch,name:"branch",onChange:this.handleBranchChange},l.a.createElement("option",null,"---Select Branch---"),a.length?a.map((function(t){return t.name===e.state.repoName?t.branchList.map((function(e){return l.a.createElement("option",{key:e.branchName,value:e.branchName},e.branchName)})):null})):null))),l.a.createElement(v.a,null,l.a.createElement(E.a.Label,null),l.a.createElement(b.a,null,l.a.createElement(f.a,{type:"submit",disabled:this.state.loadingRepo},l.a.createElement(w.a,null),"Start Analysis")))))),this.state.loadingDep?l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(k.a,null),l.a.createElement("span",{className:"sr-only"},"Loading dependencies..."),"Loading dependencies..."))):l.a.createElement("div",null,l.a.createElement("table",{class:"table table-hover",responsive:"sm"},l.a.createElement("thead",{class:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{colspan:"6"},"(",n.length,") dependencies found for"," ",this.state.repoName1," / ",this.state.branchName))),l.a.createElement("thead",{class:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("div",null,"Artifact ID")),l.a.createElement("th",null,l.a.createElement("div",null,"Group ID")),l.a.createElement("th",null,l.a.createElement("div",null,"Current Version")),l.a.createElement("th",null,l.a.createElement("div",null,"Latest Release Version")),l.a.createElement("th",null,l.a.createElement("div",null,"Comments")),l.a.createElement("th",null,l.a.createElement("div",null,"All present Versions")))),l.a.createElement("tbody",null,n.length?n.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{key:e.artifactId},e.artifactId)),l.a.createElement("td",null,l.a.createElement("div",{key:e.artifactId},e.groupId)),l.a.createElement("td",null,l.a.createElement("div",{key:e.artifactId},l.a.createElement(y.a,{variant:"primary"},e.currentVersion))),l.a.createElement("td",null,l.a.createElement("div",{key:e.artifactId},l.a.createElement(y.a,{variant:"success"},e.newVersion),l.a.createElement("span",null))),l.a.createElement("td",null,l.a.createElement("div",{key:e.artifactId},"OK"===e.comment?l.a.createElement("div",null,l.a.createElement(y.a,{variant:"success"},e.comment)):"NOT OK"===e.comment?l.a.createElement(y.a,{variant:"danger"},e.comment):l.a.createElement(y.a,{variant:"warning"},e.comment))),l.a.createElement("td",null,l.a.createElement("div",null),l.a.createElement("div",{key:e.artifactId},e.otherVersions.map((function(e){return l.a.createElement(C.a,{title:e.projectList.map((function(e){return l.a.createElement("li",null,e)}))},l.a.createElement(y.a,{variant:"warning"},e.version))})))))})):null)),r?l.a.createElement("div",null,r):null)))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6522e7d6.chunk.js.map