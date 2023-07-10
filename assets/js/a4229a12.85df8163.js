"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(r),v=a,y=l["".concat(s,".").concat(v)]||l[v]||d[v]||p;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},i="Use Besu-extended privacy",o={unversionedId:"private-networks/how-to/use-privacy/besu-extended",id:"version-23.4.1/private-networks/how-to/use-privacy/besu-extended",title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/besu-extended.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/besu-extended",permalink:"/stable/private-networks/how-to/use-privacy/besu-extended",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/besu-extended.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689007774,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:2,frontMatter:{title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use EEA-compliant privacy",permalink:"/stable/private-networks/how-to/use-privacy/eea-compliant"},next:{title:"Run Tessera with Besu",permalink:"/stable/private-networks/how-to/use-privacy/tessera"}},s={},c=[{value:"Privacy group type",id:"privacy-group-type",level:2}],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-besu-extended-privacy"},"Use Besu-extended privacy"),(0,a.kt)("p",null,"Hyperledger Besu provides an extended implementation of privacy allowing you to ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/privacy-groups"},"create a privacy group for a set of participants"),". You must specify the privacy group ID when sending private transactions."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/#priv-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"PRIV")," API methods"),", use the ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-http-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-ws-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,a.kt)("p",null,"To create the privacy group containing the recipients of a private transaction, use ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/#priv_createprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup")),"."),(0,a.kt)("p",null,"To create an EEA-compliant private transaction, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"privacyGroupId")," when creating the signed transaction passed as an input parameter to ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("h2",{id:"privacy-group-type"},"Privacy group type"),(0,a.kt)("p",null,"Privacy groups created using ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/#priv_createprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup"))," have a ",(0,a.kt)("inlineCode",{parentName:"p"},"BESU")," privacy group type when returned by ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/reference/api/#priv_findprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "GpK3ErNO0xF27T0sevgkJ3+4qk9Z+E3HtXYxcKIBKX8=",\n      "name": "Group B",\n      "description": "Description of Group B",\n      "type": "BESU",\n      "members": [\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw="\n      ]\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);