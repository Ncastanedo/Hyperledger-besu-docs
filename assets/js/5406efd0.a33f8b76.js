"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[16279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Upgrade",description:"Upgrading protocol versions",sidebar_position:8,tags:["private networks"]},i="Network and protocol upgrades",p={unversionedId:"private-networks/how-to/upgrade",id:"version-23.4.1/private-networks/how-to/upgrade",title:"Upgrade",description:"Upgrading protocol versions",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/upgrade.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/upgrade",permalink:"/stable/private-networks/how-to/upgrade",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/upgrade.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689014716,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:8,frontMatter:{title:"Upgrade",description:"Upgrading protocol versions",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Backup and restore",permalink:"/stable/private-networks/how-to/backup"},next:{title:"Concepts",permalink:"/stable/private-networks/concepts/"}},l={},s=[{value:"Upgrade the protocol",id:"upgrade-the-protocol",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"network-and-protocol-upgrades"},"Network and protocol upgrades"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Node upgrades upgrade your Besu client to a later version. In private networks, you can ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/upgrade-node"},"upgrade your node")," as in public networks.")),(0,n.kt)("p",null,"Network upgrades are the mechanism for upgrading the Ethereum protocol. Protocol upgrades occur during the network upgrades."),(0,n.kt)("p",null,"For Ethereum Mainnet and public testnets, the milestone block definitions are included in Besu. Upgrading your Besu client applies the network upgrade."),(0,n.kt)("p",null,"For private networks, all network participants must agree on the protocol upgrades and coordinate the network upgrades. The genesis file specifies the milestone block at which to apply the protocol upgrade."),(0,n.kt)("h2",{id:"upgrade-the-protocol"},"Upgrade the protocol"),(0,n.kt)("p",null,"To upgrade the protocol in a private network:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Review included EIPs for breaking changes. A ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/meta"},"meta EIP")," for each protocol upgrade lists included EIPs. For example, ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1679"},"Istanbul"),"."),(0,n.kt)("li",{parentName:"ol"},"Network participants agree on the block number at which to upgrade."),(0,n.kt)("li",{parentName:"ol"},"For each node in the network:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Add the ",(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/genesis-items#milestone-blocks"},"milestone block number")," to the genesis file."),(0,n.kt)("li",{parentName:"ol"},"Restart the node before reaching milestone block.")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid a forked network, all network participants must update their genesis file to include the agreed on milestone block and restart their node before reaching the milestone block.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"For compatibility with future protocol upgrades, don't hardcode any gas price assumptions."),(0,n.kt)("li",{parentName:"ul"},"Implementing upgradeable contracts enables contracts to be upgraded if a protocol upgrade does include breaking changes."))))}u.isMDXComponent=!0}}]);