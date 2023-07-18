"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[72295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={description:"private networks reference overview",tags:["private networks"]},o="Reference",s={unversionedId:"private-networks/reference/index",id:"version-stable/private-networks/reference/index",title:"Reference",description:"private networks reference overview",source:"@site/versioned_docs/version-stable/private-networks/reference/index.md",sourceDirName:"private-networks/reference",slug:"/private-networks/reference/",permalink:"/stable/private-networks/reference/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-stable/private-networks/reference/index.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"stable",lastUpdatedAt:1687400597,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{description:"private networks reference overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy using Microsoft Azure",permalink:"/stable/private-networks/tutorials/azure"},next:{title:"Private network options",permalink:"/stable/private-networks/reference/cli/options"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("p",null,"This section provides reference material for private network features."),(0,a.kt)("p",null,"The following features and resources are shared with ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/"},"public networks")," and the content can be found in the public networks section:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Besu command line:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options"},"Standard options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/subcommands"},"Standard subcommands")))),(0,a.kt)("li",{parentName:"ul"},"Besu API:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/"},"Standard Besu API methods")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/objects"},"Standard Besu API objects")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/genesis-items"},"Genesis file items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/evm-tool"},"EVM tool options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/trace-types"},"Transaction trace types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/projects-using-besu"},"Projects using Besu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/disclosure"},"Security disclosure policy"))))}u.isMDXComponent=!0}}]);