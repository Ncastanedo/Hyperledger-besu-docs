"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[97920],{88824:(e,t,r)=>{r.d(t,{c:()=>o});var a=r(67294),n=r(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},51473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var a=r(67294),n=r(52263),l=r(70179),s=r(35742),c=r(39960),u=r(95999),o=r(88824),m=r(16550),h=r(10412);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=h.Z.canUseDOM?new URLSearchParams(t.search):null,l=a?.get("q")||"",s=a?.get("ctx")||"",c=a?.get("version")||"",u=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=u(t);e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${r}search?${t.toString()}`}}};var p=r(90022),g=r(98202),d=r(82539),f=r(10726),y=r(91073),E=r(80311),S=r(73926),I=r(61029);const R={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function w(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,o.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:m}=i(),[h,d]=(0,a.useState)(r),[f,y]=(0,a.useState)(),[S,I]=(0,a.useState)(),w=`${e}${c}`,P=(0,a.useMemo)((()=>h?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{m(h),f&&(h?f(h,(e=>{I(e)})):I(void 0))}),[h,f]);const v=(0,a.useCallback)((e=>{d(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==h&&d(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(w,l);y((()=>(0,g.v)(e,t,100)))}()}),[l,w]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,P)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,P),a.createElement("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:v,value:h,autoComplete:"off",autoFocus:!0}),!f&&h&&a.createElement("div",null,a.createElement(E.Z,null)),S&&(S.length>0?a.createElement("p",null,t(S.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))):a.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,S&&S.map((e=>a.createElement(b,{key:e.document.i,searchResult:e}))))))}function b(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const u=0===r,o=2===r,m=(u?t.b:n.b).slice(),h=o?t.s:t.t;u||m.push(n.t);let i="";if(I.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:R.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,d.C)(h,l):(0,f.o)(h,(0,y.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R.searchResultItemPath},(0,S.e)(m)),o&&a.createElement("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,y.m)(s,"t"),l,100)}}))}const P=function(){return a.createElement(l.Z,null,a.createElement(w,null))}}}]);