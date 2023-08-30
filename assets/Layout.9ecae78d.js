import{_ as S,r as R,o as n,c,f as $,d as C,h as P,i as p,j as de,g as e,F as I,k as A,l as w,a as g,t as x,m as Y,n as T,w as N,p as ce,q as y,b as j,s as X,v as z,x as Te,y as J,z as Q,A as K,B as _e,C as pe,D as E,u as he,e as D,T as me,E as O,G as fe,H as q,I as G,J as xe,K as Be,L as Z,M as be,N as ge,O as Ne,P as ke,Q as De,R as U,S as ee,U as Ie,V as He,W as Me,X as Pe}from"./app.7ce21507.js";const Ee=i=>/^mailto:/.test(i),Re=i=>/^tel:/.test(i),Ae={},Fe={class:"theme-default-content custom"};function Oe(i,r){const t=R("Content");return n(),c("div",Fe,[$(t)])}var ze=S(Ae,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=C({__name:"HomeFeatures",setup(i){const r=P(),t=p(()=>de(r.value.features)?r.value.features:[]);return(u,o)=>e(t).length?(n(),c("div",We,[(n(!0),c(I,null,A(e(t),d=>(n(),c("div",{key:d.title,class:"feature"},[g("h2",null,x(d.title),1),g("p",null,x(d.details),1)]))),128))])):w("",!0)}});var Ue=S(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=C({__name:"HomeFooter",setup(i){const r=P(),t=p(()=>r.value.footer),u=p(()=>r.value.footerHtml);return(o,d)=>e(t)?(n(),c(I,{key:0},[e(u)?(n(),c("div",{key:0,class:"footer",innerHTML:e(t)},null,8,je)):(n(),c("div",{key:1,class:"footer",textContent:x(e(t))},null,8,Ke))],64)):w("",!0)}});var Ge=S(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=C({inheritAttrs:!1}),Je=C({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(i){const r=i,t=z(),u=Te(),{item:o}=Y(r),d=p(()=>X(o.value.link)),m=p(()=>Ee(o.value.link)||Re(o.value.link)),h=p(()=>{if(!m.value){if(o.value.target)return o.value.target;if(d.value)return"_blank"}}),a=p(()=>h.value==="_blank"),s=p(()=>!d.value&&!m.value&&!a.value),l=p(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(a.value)return"noopener noreferrer"}}),v=p(()=>o.value.ariaLabel||o.value.text),_=p(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(f=>f===o.value.link):o.value.link!=="/"}),b=p(()=>_.value?t.path.startsWith(o.value.link):!1),k=p(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):b.value:!1);return(L,f)=>{const B=R("RouterLink"),H=R("AutoLinkExternalIcon");return e(s)?(n(),T(B,ce({key:0,class:{"router-link-active":e(k)},to:e(o).link,"aria-label":e(v)},L.$attrs),{default:N(()=>[y(L.$slots,"before"),j(" "+x(e(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",ce({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(h),"aria-label":e(v)},L.$attrs),[y(L.$slots,"before"),j(" "+x(e(o).text)+" ",1),e(a)?(n(),T(H,{key:0})):w("",!0),y(L.$slots,"after")],16,Xe))}}});var M=S(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=C({__name:"HomeHero",setup(i){const r=P(),t=J(),u=Q(),o=p(()=>u.value&&r.value.heroImageDark!==void 0?r.value.heroImageDark:r.value.heroImage),d=p(()=>r.value.heroText===null?null:r.value.heroText||t.value.title||"Hello"),m=p(()=>r.value.heroAlt||d.value||"hero"),h=p(()=>r.value.tagline===null?null:r.value.tagline||t.value.description||"Welcome to your VuePress site"),a=p(()=>de(r.value.actions)?r.value.actions.map(({text:l,link:v,type:_="primary"})=>({text:l,link:v,type:_})):[]),s=()=>{if(!o.value)return null;const l=K("img",{src:_e(o.value),alt:m.value});return r.value.heroImageDark===void 0?l:K(pe,()=>l)};return(l,v)=>(n(),c("header",Qe,[$(s),e(d)?(n(),c("h1",Ze,x(e(d)),1)):w("",!0),e(h)?(n(),c("p",et,x(e(h)),1)):w("",!0),e(a).length?(n(),c("p",tt,[(n(!0),c(I,null,A(e(a),_=>(n(),T(M,{key:_.text,class:E(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=S(at,[["__file","HomeHero.vue"]]);const rt={class:"home"},ot=C({__name:"Home",setup(i){return(r,t)=>(n(),c("main",rt,[$(nt),$(Ue),$(ze),$(Ge)]))}});var st=S(ot,[["__file","Home.vue"]]);const lt=C({__name:"NavbarBrand",setup(i){const r=he(),t=J(),u=D(),o=Q(),d=p(()=>u.value.home||r.value),m=p(()=>t.value.title),h=p(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),a=()=>{if(!h.value)return null;const s=K("img",{class:"logo",src:_e(h.value),alt:m.value});return u.value.logoDark===void 0?s:K(pe,()=>s)};return(s,l)=>{const v=R("RouterLink");return n(),T(v,{to:e(d)},{default:N(()=>[$(a),e(m)?(n(),c("span",{key:0,class:E(["site-name",{"can-hide":e(h)}])},x(e(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ut=S(lt,[["__file","NavbarBrand.vue"]]);const it=C({__name:"DropdownTransition",setup(i){const r=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(n(),T(me,{name:"dropdown",onEnter:r,onAfterEnter:t,onBeforeLeave:r},{default:N(()=>[y(u.$slots,"default")]),_:3}))}});var $e=S(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],pt={class:"title"},ht={class:"navbar-dropdown"},mt={class:"navbar-dropdown-subtitle"},ft={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(i){const r=i,{item:t}=Y(r),u=p(()=>t.value.ariaLabel||t.value.text),o=O(!1),d=z();fe(()=>d.path,()=>{o.value=!1});const m=a=>{a.detail===0?o.value=!o.value:o.value=!1},h=(a,s)=>s[s.length-1]===a;return(a,s)=>(n(),c("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:m},[g("span",vt,x(e(t).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[g("span",pt,x(e(t).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,_t),$($e,null,{default:N(()=>[q(g("ul",ht,[(n(!0),c(I,null,A(e(t).children,l=>(n(),c("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),c(I,{key:0},[g("h4",mt,[l.link?(n(),T(M,{key:0,item:l,onFocusout:v=>h(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",ft,x(l.text),1))]),g("ul",bt,[(n(!0),c(I,null,A(l.children,v=>(n(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[$(M,{item:v,onFocusout:_=>h(v,l.children)&&h(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),T(M,{key:1,item:l,onFocusout:v=>h(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}});var kt=S(gt,[["__file","NavbarDropdown.vue"]]);const ve=i=>decodeURI(i).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(i,r)=>{if(r.hash===i)return!0;const t=ve(r.path),u=ve(i);return t===u},Le=(i,r)=>i.link&&$t(i.link,r)?!0:i.children?i.children.some(t=>Le(t,r)):!1,ye=i=>!X(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:i,editLinkPattern:r})=>{if(r)return r;const t=ye(i);return t!==null?Lt[t]:null},wt=({docsRepo:i,docsBranch:r,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const d=yt({docsRepo:i,editLinkPattern:o});return d?d.replace(/:repo/,X(i)?i:`https://github.com/${i}`).replace(/:branch/,r).replace(/:path/,xe(`${Be(t)}/${u}`)):null},St={key:0,class:"navbar-items"},Ct=C({__name:"NavbarItems",setup(i){const r=()=>{const s=Z(),l=he(),v=J(),_=D();return p(()=>{var B,H;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(B=_.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=_.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var ne,re,oe,se,le,ue;const W=(re=(ne=v.value.locales)==null?void 0:ne[F])!=null?re:{},te=(se=(oe=_.value.locales)==null?void 0:oe[F])!=null?se:{},ae=`${W.lang}`,Se=(le=te.selectLanguageName)!=null?le:ae;let V;if(ae===v.value.lang)V=L;else{const ie=k.replace(l.value,F);s.getRoutes().some(Ce=>Ce.path===ie)?V=ie:V=(ue=te.home)!=null?ue:F}return{text:Se,link:V}})}]})},t=()=>{const s=D(),l=p(()=>s.value.repo),v=p(()=>l.value?ye(l.value):null),_=p(()=>l.value&&!X(l.value)?`https://github.com/${l.value}`:l.value),b=p(()=>_.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return p(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},u=s=>be(s)?ge(s):s.children?{...s,children:s.children.map(u)}:s,d=(()=>{const s=D();return p(()=>(s.value.navbar||[]).map(u))})(),m=r(),h=t(),a=p(()=>[...d.value,...m.value,...h.value]);return(s,l)=>e(a).length?(n(),c("nav",St,[(n(!0),c(I,null,A(e(a),v=>(n(),c("div",{key:v.text,class:"navbar-item"},[v.children?(n(),T(kt,{key:0,item:v},null,8,["item"])):(n(),T(M,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}});var we=S(Ct,[["__file","NavbarItems.vue"]]);const Tt=["title"],xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=Ne('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Nt=[Bt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ht=[It],Mt=C({__name:"ToggleDarkModeButton",setup(i){const r=D(),t=Q(),u=()=>{t.value=!t.value};return(o,d)=>(n(),c("button",{class:"toggle-dark-button",title:e(r).toggleDarkMode,onClick:u},[q((n(),c("svg",xt,Nt,512)),[[G,!e(t)]]),q((n(),c("svg",Dt,Ht,512)),[[G,e(t)]])],8,Tt))}});var Pt=S(Mt,[["__file","ToggleDarkModeButton.vue"]]);const Et=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ft=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(i){const r=D();return(t,u)=>(n(),c("div",{class:"toggle-sidebar-button",title:e(r).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},At,8,Et))}});var Ot=S(Ft,[["__file","ToggleSidebarButton.vue"]]);const zt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(i){const r=D(),t=O(null),u=O(null),o=O(0),d=p(()=>o.value?{maxWidth:o.value+"px"}:{}),m=p(()=>r.value.darkMode);ke(()=>{const s=h(t.value,"paddingLeft")+h(t.value,"paddingRight"),l=()=>{var v;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-s-(((v=u.value)==null?void 0:v.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function h(a,s){var _,b,k;const l=(k=(b=(_=a==null?void 0:a.ownerDocument)==null?void 0:_.defaultView)==null?void 0:b.getComputedStyle(a,null))==null?void 0:k[s],v=Number.parseInt(l,10);return Number.isNaN(v)?0:v}return(a,s)=>{const l=R("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:t,class:"navbar"},[$(Ot,{onToggle:s[0]||(s[0]=v=>a.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[$(ut)],512),g("div",{class:"navbar-items-wrapper",style:De(e(d))},[y(a.$slots,"before"),$(we,{class:"can-hide"}),y(a.$slots,"after"),e(m)?(n(),T(Pt,{key:0})):w("",!0),$(l)],4)],512)}}});var Wt=S(zt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Ut={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},qt={class:"meta-item-info"},Gt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=C({__name:"PageMeta",setup(i){const r=()=>{const a=D(),s=U(),l=P();return p(()=>{var H,F,W;if(!((F=(H=l.value.editLink)!=null?H:a.value.editLink)!=null?F:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:k="main",docsDir:L="",editLinkText:f}=a.value;if(!b)return null;const B=wt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=l.value.editLinkPattern)!=null?W:a.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},t=()=>{const a=D(),s=U(),l=P();return p(()=>{var b,k,L,f;return!((k=(b=l.value.lastUpdated)!=null?b:a.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=()=>{const a=D(),s=U(),l=P();return p(()=>{var _,b,k,L;return((b=(_=l.value.contributors)!=null?_:a.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},o=D(),d=r(),m=t(),h=u();return(a,s)=>{const l=R("ClientOnly");return n(),c("footer",Vt,[e(d)?(n(),c("div",Ut,[$(M,{class:"meta-item-label",item:e(d)},null,8,["item"])])):w("",!0),e(m)?(n(),c("div",jt,[g("span",Kt,x(e(o).lastUpdatedText)+": ",1),$(l,null,{default:N(()=>[g("span",qt,x(e(m)),1)]),_:1})])):w("",!0),e(h)&&e(h).length?(n(),c("div",Gt,[g("span",Xt,x(e(o).contributorsText)+": ",1),g("span",Yt,[(n(!0),c(I,null,A(e(h),(v,_)=>(n(),c(I,{key:_},[g("span",{class:"contributor",title:`email: ${v.email}`},x(v.name),9,Jt),_!==e(h).length-1?(n(),c(I,{key:0},[j(", ")],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var Zt=S(Qt,[["__file","PageMeta.vue"]]);const ea={key:0,class:"page-nav"},ta={class:"inner"},aa={key:0,class:"prev"},na={key:1,class:"next"},ra=C({__name:"PageNav",setup(i){const r=a=>a===!1?null:be(a)?ge(a):Ie(a)?a:!1,t=(a,s,l)=>{const v=a.findIndex(_=>_.link===s);if(v!==-1){const _=a[v+l];return _!=null&&_.link?_:null}for(const _ of a)if(_.children){const b=t(_.children,s,l);if(b)return b}return null},u=P(),o=ee(),d=z(),m=p(()=>{const a=r(u.value.prev);return a!==!1?a:t(o.value,d.path,-1)}),h=p(()=>{const a=r(u.value.next);return a!==!1?a:t(o.value,d.path,1)});return(a,s)=>e(m)||e(h)?(n(),c("nav",ea,[g("p",ta,[e(m)?(n(),c("span",aa,[$(M,{item:e(m)},null,8,["item"])])):w("",!0),e(h)?(n(),c("span",na,[$(M,{item:e(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var oa=S(ra,[["__file","PageNav.vue"]]);const sa={class:"page"},la={class:"theme-default-content"},ua=C({__name:"Page",setup(i){return(r,t)=>{const u=R("Content");return n(),c("main",sa,[y(r.$slots,"top"),g("div",la,[$(u)]),$(Zt),$(oa),y(r.$slots,"bottom")])}}});var ia=S(ua,[["__file","Page.vue"]]);const ca={class:"sidebar-item-children"},va=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(i){const r=i,{item:t,depth:u}=Y(r),o=z(),d=Z(),m=p(()=>Le(t.value,o)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:m.value,collapsible:t.value.collapsible})),a=O(!0),s=O(void 0);return t.value.collapsible&&(a.value=m.value,s.value=()=>{a.value=!a.value},d.afterEach(()=>{a.value=m.value})),(l,v)=>{var b;const _=R("SidebarItem",!0);return n(),c("li",null,[e(t).link?(n(),T(M,{key:0,class:E(e(h)),item:e(t)},null,8,["class","item"])):(n(),c("p",{key:1,tabindex:"0",class:E(e(h)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=He((...k)=>s.value&&s.value(...k),["enter"]))},[j(x(e(t).text)+" ",1),e(t).collapsible?(n(),c("span",{key:0,class:E(["arrow",a.value?"down":"right"])},null,2)):w("",!0)],34)),(b=e(t).children)!=null&&b.length?(n(),T($e,{key:2},{default:N(()=>[q(g("ul",ca,[(n(!0),c(I,null,A(e(t).children,k=>(n(),T(_,{key:`${e(u)}${k.text}${k.link}`,item:k,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[G,a.value]])]),_:1})):w("",!0)])}}});var da=S(va,[["__file","SidebarItem.vue"]]);const _a={key:0,class:"sidebar-items"},pa=C({__name:"SidebarItems",setup(i){const r=z(),t=ee();return fe(()=>r.hash,u=>{const o=document.querySelector(".sidebar");if(!o)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${r.path}${u}"]`);if(!d)return;const m=o.getBoundingClientRect().top,h=o.getBoundingClientRect().height,a=d.getBoundingClientRect().top,s=d.getBoundingClientRect().height;a<m?d.scrollIntoView(!0):a+s>m+h&&d.scrollIntoView(!1)}),(u,o)=>e(t).length?(n(),c("ul",_a,[(n(!0),c(I,null,A(e(t),d=>(n(),T(da,{key:d.link||d.text,item:d},null,8,["item"]))),128))])):w("",!0)}});var ha=S(pa,[["__file","SidebarItems.vue"]]);const ma={class:"sidebar"},fa=C({__name:"Sidebar",setup(i){return(r,t)=>(n(),c("aside",ma,[$(we),y(r.$slots,"top"),$(ha),y(r.$slots,"bottom")]))}});var ba=S(fa,[["__file","Sidebar.vue"]]);const ga=C({__name:"Layout",setup(i){const r=U(),t=P(),u=D(),o=p(()=>t.value.navbar!==!1&&u.value.navbar!==!1),d=ee(),m=O(!1),h=f=>{m.value=typeof f=="boolean"?f:!m.value},a={x:0,y:0},s=f=>{a.x=f.changedTouches[0].clientX,a.y=f.changedTouches[0].clientY},l=f=>{const B=f.changedTouches[0].clientX-a.x,H=f.changedTouches[0].clientY-a.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&a.x<=80?h(!0):h(!1))},v=p(()=>[{"no-navbar":!o.value,"no-sidebar":!d.value.length,"sidebar-open":m.value},t.value.pageClass]);let _;ke(()=>{_=Z().afterEach(()=>{h(!1)})}),Me(()=>{_()});const b=Pe(),k=b.resolve,L=b.pending;return(f,B)=>(n(),c("div",{class:E(["theme-container",e(v)]),onTouchstart:s,onTouchend:l},[y(f.$slots,"navbar",{},()=>[e(o)?(n(),T(Wt,{key:0,onToggleSidebar:h},{before:N(()=>[y(f.$slots,"navbar-before")]),after:N(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>h(!1))}),y(f.$slots,"sidebar",{},()=>[$(ba,null,{top:N(()=>[y(f.$slots,"sidebar-top")]),bottom:N(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[e(t).home?(n(),T(st,{key:0})):(n(),T(me,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(k),onBeforeLeave:e(L)},{default:N(()=>[(n(),T(ia,{key:e(r).path},{top:N(()=>[y(f.$slots,"page-top")]),bottom:N(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var $a=S(ga,[["__file","Layout.vue"]]);export{$a as default};
