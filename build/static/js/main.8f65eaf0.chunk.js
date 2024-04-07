(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),o=a.n(r);a(12),a(13);var c=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),": ",e.alert.msg)};function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-2")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onChange:e.toggleMode}),n.a.createElement("label",{className:"form-check-label ",for:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){let t=0;const a=e=>e.toLowerCase()!==e.toUpperCase();let r={color:"light"===e.mode?"black":"white"};const[o,c]=Object(l.useState)("Set Text Here2"),[s,m]=Object(l.useState)("normal"),[i,u]=Object(l.useState)("normal");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{...r}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:e=>{c(e.target.value)},id:"myBox",rows:"8",style:{fontWeight:s,fontStyle:i,backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})),n.a.createElement("button",{className:"btn btn-primary",onClick:()=>{if(0===o.length)e.showAlert("Please enter some text!","danger");else{let t=o.toUpperCase();c(t),e.showAlert("Converted to UpperCase!","success")}}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-success mx-3",onClick:()=>{let t=o.toLowerCase();c(t),console.log(s),e.showAlert("Converted to LowerCase!","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn1 btn-primary mx-2",value:s,onClick:()=>{c(o),m("normal"===s?"bold":"normal"),console.log(s)},style:{fontWeight:s}},"B"),n.a.createElement("button",{className:"btn2 btn-primary mx-2",value:s,onClick:()=>{c(o),u("normal"===i?"italic":"normal"),console.log(s)},style:{fontStyle:i}},"I"),n.a.createElement("button",{className:"btn btn-primary mx-2",value:s,onClick:()=>{let t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard!","success")}},"CopyText"),n.a.createElement("button",{className:"btn btn-primary mx-2",value:s,onClick:()=>{let t=o.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra Spaces Removed!","success")}},"Remove Extra Space")),n.a.createElement("div",{className:"container my-3",style:{...r}},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,(()=>{if(o.length>0){for(let e=0;e<o.length-1;e++)" "===o[e]&&a(o.charAt(e+1))&&e>0&&t++;t++}return t})()," words and ",o.length," characters"),n.a.createElement("p",null,.008*o.split(" ").length," Minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter Something in the textbox to preview it here")))}s.defaultProps={title:"Default Title",aboutText:"Default about"};var i=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),o=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"MyApp",aboutText:"About",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",o("Dark mode is enabled","success"),document.title="TextUtils - Dark Mode"):(t("light"),document.body.style.backgroundColor="white",o("Light mode is enabled","success"),document.title="TextUtils - Light Mode")}}),n.a.createElement(c,{alert:a}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(m,{heading:"Enter the text to analyze below",mode:e,showAlert:o})))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:o}=t;a(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.8f65eaf0.chunk.js.map