"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[3401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function f(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??f(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=d({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??f;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(f(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},17442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},l="Configure free gas networks",u={unversionedId:"private-networks/how-to/configure/free-gas",id:"version-23.4.1/private-networks/how-to/configure/free-gas",title:"Free gas network",description:"Configuring free gas networks",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/free-gas.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/free-gas",permalink:"/stable/private-networks/how-to/configure/free-gas",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/free-gas.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689007774,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:2,frontMatter:{title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and remove validators without voting",permalink:"/stable/private-networks/how-to/configure/consensus/add-validators-without-voting"},next:{title:"Bootnodes",permalink:"/stable/private-networks/how-to/configure/bootnodes"}},c={},f=[{value:"Configure free gas in Besu",id:"configure-free-gas-in-besu",level:2},{value:"1. Set the block size",id:"1-set-the-block-size",level:3},{value:"2. Set the contract size",id:"2-set-the-contract-size",level:3},{value:"3. Start Besu with a minimum gas price of zero",id:"3-start-besu-with-a-minimum-gas-price-of-zero",level:3},{value:"4. Enable zero base fee if using London fork or later",id:"4-enable-zero-base-fee-if-using-london-fork-or-later",level:3},{value:"Configure free gas in Truffle",id:"configure-free-gas-in-truffle",level:2},{value:"Update <code>truffle-config.js</code>",id:"update-truffle-configjs",level:3}],p={toc:f},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-free-gas-networks"},"Configure free gas networks"),(0,a.kt)("p",null,"Transactions use computational resources so have an associated cost. Gas is the cost unit and the gas price is the price per gas unit. The transaction cost is the gas used ","*"," gas price."),(0,a.kt)("p",null,"In public networks, the account submitting the transaction pays the transaction cost, in Ether. The miner (or validator in PoA networks) that includes the transaction in a block receives transaction cost."),(0,a.kt)("p",null,"In many private networks, network participants run the validators and do not require gas as an incentive. Networks that don't require gas as an incentive usually configure the gas price to be zero (that is, free gas). Some private networks might allocate Ether and use a non-zero gas price to limit resource use."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We use the term ",(0,a.kt)("em",{parentName:"p"},"free gas network")," to refer to a network with a gas price of zero. A network with a gas price of zero is also known as a ",(0,a.kt)("em",{parentName:"p"},"zero gas network")," or ",(0,a.kt)("em",{parentName:"p"},"no gas network"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Some pre-crafted transactions require the deployment account to have gas available. For example, the transaction that creates the smart contract in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1820"},"EIP-1820"),".")),(0,a.kt)("p",null,"In a free gas network, transactions still use gas but the gas price is zero, meaning the transaction cost is zero. Transaction cost = gas used ","*"," 0 (the gas price)."),(0,a.kt)("h2",{id:"configure-free-gas-in-besu"},"Configure free gas in Besu"),(0,a.kt)("p",null,"When gas is free, limiting block and contract sizes is less important. In free gas networks, we increase the block size limit and set the contract size limit to the maximum value."),(0,a.kt)("h3",{id:"1-set-the-block-size"},"1. Set the block size"),(0,a.kt)("p",null,"If you want to remove gas from consideration and don't mind blocks potentially taking longer to create, in the genesis file set the block size limit (measured in gas) to the maximum accepted by Truffle (",(0,a.kt)("inlineCode",{parentName:"p"},"0x1fffffffffffff"),"). In the genesis file, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"gasLimit")," following the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n  ....\n  },\n  ...\n  "gasLimit": "0x1fffffffffffff",\n  ....\n}\n')),(0,a.kt)("p",null,"If you are more concerned about blocks arriving on time and don't have expensive individual transactions, set ",(0,a.kt)("inlineCode",{parentName:"p"},"gasLimit")," to a value closer to the amount of gas your validators can process in the configured block time."),(0,a.kt)("h3",{id:"2-set-the-contract-size"},"2. Set the contract size"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," section of the genesis file, set the contract size limit to the maximum supported size (in bytes)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'(\n  "config": {\n    ...\n    "contractSizeLimit": 2147483647,\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("h3",{id:"3-start-besu-with-a-minimum-gas-price-of-zero"},"3. Start Besu with a minimum gas price of zero"),(0,a.kt)("p",null,"When starting nodes, set the ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#min-gas-price"},"minimum gas price")," to zero."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{label:"Command Line",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--min-gas-price=0\n"))),(0,a.kt)(i.Z,{label:"Configuration File",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"min-gas-price=0\n")))),(0,a.kt)("h1",{id:"command-line-1"},"Command Line"),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In a free gas network, ensure the ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#min-gas-price"},"minimum gas price")," is set to zero for every node. Any node with a minimum gas price set higher than zero will silently drop transactions with a zero gas price. You can query a node's gas configuration using ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_gasprice"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_gasPrice")),".")),(0,a.kt)("h3",{id:"4-enable-zero-base-fee-if-using-london-fork-or-later"},"4. Enable zero base fee if using London fork or later"),(0,a.kt)("p",null,"If your network is configured to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"londonBlock")," or a later hard fork, then you must also enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"zeroBaseFee")," configuration. You must set this on all your nodes. Once it is set, future blocks produced by that node will set a ",(0,a.kt)("inlineCode",{parentName:"p"},"baseFee")," of 0. This is required because the London hard fork (EIP-1559) introduced a non-zero ",(0,a.kt)("inlineCode",{parentName:"p"},"baseFee")," into the block which normally means transactions require gas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "londonBlock": 0,\n    "zeroBaseFee": true,\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("h2",{id:"configure-free-gas-in-truffle"},"Configure free gas in Truffle"),(0,a.kt)("p",null,"If using Truffle to develop on your free gas network, you also need to configure free gas in Truffle."),(0,a.kt)("p",null,"Like setting block and contract size limits to their maximum values for Besu, set the transaction gas limit in Truffle to the maximum possible."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Besu does not support private key management. To use Besu with Truffle, you must configure a ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/develop/truffle"},"Truffle wallet"),".")),(0,a.kt)("h3",{id:"update-truffle-configjs"},"Update ",(0,a.kt)("inlineCode",{parentName:"h3"},"truffle-config.js")),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," file:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the gas price to zero."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gasPrice: 0;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the gas limit for a transaction (that is, contract creation) to be the block gas limit - 1."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'gas: "0x1ffffffffffffe";\n')))))}d.isMDXComponent=!0}}]);