import{av as pe,aw as mt,F as Ce,au as L,n as T,G as x,at as _t}from"./index-client.Bfxe-HCJ.js";new URL("sveltekit-internal://");function yt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function wt(e){return e.split("%25").map(decodeURI).join("%25")}function vt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ge({href:e}){return e.split("#")[0]}function bt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const At="/__data.json",St=".html__data.json";function kt(e){return e.endsWith(".html")?e.replace(/\.html$/,St):e.replace(/\/$/,"")+At}function Et(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Rt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Ge=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&M.delete(Ae(e)),Ge(e,t));const M=new Map;function It(e,t){const n=Ae(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Rt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Ut(e,t,n){if(M.size>0){const r=Ae(e,n),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(t,n)}function Ae(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Et(...a)}"]`}return r}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Pt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return me(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return me(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=Lt.exec(c),[,p,f,u,g]=d;return t.push({name:u,matcher:g,optional:!!p,rest:!!f,chained:f?l===1&&i[0]==="":!1}),f?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return me(c)}).join("")}).join("")}/?$`),params:t}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Pt(e){return e.slice(1).split("/").filter(xt)}function Ct(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],p=a[o+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function me(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:p,params:f}=Tt(o),u={id:o,exec:g=>{const h=p.exec(g);if(h)return Ct(h,f,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:s(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Me(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Oe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const $=[];function Se(e,t=pe){let n=null;const r=new Set;function a(o){if(mt(e,o)&&(e=o,n)){const c=!$.length;for(const l of r)l[1](),$.push(l,e);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function s(o){a(o(e))}function i(o,c=pe){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||pe),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}const U=globalThis.__sveltekit_x3mc3i?.base??"/zeldsite",Nt=globalThis.__sveltekit_x3mc3i?.assets??U,jt="1736351405943",He="sveltekit:snapshot",Ke="sveltekit:scroll",ze="sveltekit:states",$t="sveltekit:pageurl",F="sveltekit:history",z="sveltekit:navigation",Q={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function We(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ke(){return{x:pageXOffset,y:pageYOffset}}function D(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ne={...Q,"":Q.hover};function Ye(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Je(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function we(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ce(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===X&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ee(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=D(o,"preload-code")),a===null&&(a=D(o,"preload-data")),t===null&&(t=D(o,"keepfocus")),n===null&&(n=D(o,"noscroll")),s===null&&(s=D(o,"reload")),i===null&&(i=D(o,"replacestate")),o=Ye(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[r??"off"],preload_data:Ne[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function je(e){const t=Se(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Xe={v:()=>{}};function Dt(){const{set:e,subscribe:t}=Se(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==jt;return i&&(e(!0),Xe.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ce(e,t,n){return e.origin!==X||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function $e(e){const t=Vt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Ft="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Vt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Ft.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Bt=-1,qt=-2,Gt=-3,Mt=-4,Ht=-5,Kt=-6;function zt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Bt)return;if(s===Gt)return NaN;if(s===Mt)return 1/0;if(s===Ht)return-1/0;if(s===Kt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let u=1;u<o.length;u+=1)d.add(a(o[u]));break;case"Map":const p=new Map;r[s]=p;for(let u=1;u<o.length;u+=2)p.set(a(o[u]),a(o[u+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const f=Object.create(null);r[s]=f;for(let u=1;u<o.length;u+=2)f[o[u]]=a(o[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=o[1],h=$e(g),S=new u(h);r[s]=S;break}case"ArrayBuffer":{const u=o[1],g=$e(u);r[s]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==qt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Wt=new Set([...Ze]);[...Wt];function Yt(e){return e.filter(t=>t!=null)}class le{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(t,n){this.status=t,this.location=n}}class Ee extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Jt="x-sveltekit-invalidated",Xt="x-sveltekit-trailing-slash";function te(e){return e instanceof le||e instanceof Ee?e.status:500}function Zt(e){return e instanceof Ee?e.text:"Internal Error"}let k,W,_e;const Qt=Ce.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ce.toString());Qt?(k={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},_e={current:!1}):(k=new class{#e=L({});get data(){return T(this.#e)}set data(t){x(this.#e,t)}#t=L(null);get form(){return T(this.#t)}set form(t){x(this.#t,t)}#n=L(null);get error(){return T(this.#n)}set error(t){x(this.#n,t)}#r=L({});get params(){return T(this.#r)}set params(t){x(this.#r,t)}#a=L({id:null});get route(){return T(this.#a)}set route(t){x(this.#a,t)}#o=L({});get state(){return T(this.#o)}set state(t){x(this.#o,t)}#s=L(-1);get status(){return T(this.#s)}set status(t){x(this.#s,t)}#i=L(new URL("https://example.com"));get url(){return T(this.#i)}set url(t){x(this.#i,t)}},W=new class{#e=L(null);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},_e=new class{#e=L(!1);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},Xe.v=()=>_e.current=!0);function en(e){Object.assign(k,e)}const tn=new Set(["icon","shortcut icon","apple-touch-icon"]),j=Me(Ke)??{},Y=Me(He)??{},N={url:je({}),page:je({}),navigating:Se(null),updated:Dt()};function Re(e){j[e]=ke()}function nn(e,t){let n=e+1;for(;j[n];)delete j[n],n+=1;for(n=t+1;Y[n];)delete Y[n],n+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function De(){}let ue,ve,ne,C,be,v;const tt=[],re=[];let O=null;const nt=new Set,rn=new Set,H=new Set;let _={branch:[],error:null,url:null},Ie=!1,ae=!1,Fe=!0,J=!1,q=!1,rt=!1,Ue=!1,at,b,I,oe;const K=new Set;async function yn(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),ue=Ot(e),C=document.documentElement,be=t,ve=e.nodes[0],ne=e.nodes[1],ve(),ne(),b=history.state?.[F],I=history.state?.[z],b||(b=I=Date.now(),history.replaceState({...history.state,[F]:b,[z]:I},""));const r=j[b];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await dn(be,n):un(location.href,{replaceState:!0}),fn()}function an(){tt.length=0,Ue=!1}function ot(e){re.some(t=>t?.snapshot)&&(Y[e]=re.map(t=>t?.snapshot?.capture()))}function st(e){Y[e]?.forEach((t,n)=>{re[n]?.snapshot?.restore(t)})}function Ve(){Re(b),Oe(Ke,j),ot(I),Oe(He,Y)}async function it(e,t,n,r){return G({type:"goto",url:We(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ue=!0)}})}async function on(e){if(e.id!==O?.id){const t={};K.add(t),O={id:e.id,token:t,promise:lt({...e,preload:t}).then(n=>(K.delete(t),n.type==="loaded"&&n.state.error&&(O=null),n))}}return O.promise}async function ye(e){const t=ue.find(n=>n.exec(ut(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function ct(e,t,n){_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(k,e.props.page),at=new v.root({target:t,props:{...e.props,stores:N,components:re},hydrate:n,sync:!1}),st(I);const a={from:null,to:{params:_.params,route:{id:_.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};H.forEach(s=>s(a)),ae=!0}function se({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const u of n)u?.slash!==void 0&&(o=u.slash);e.pathname=yt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Yt(n).map(u=>u.node.component),page:Pe(k)}};i!==void 0&&(c.props.form=i);let l={},d=!k,p=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],h=_.branch[u];g?.data!==h?.data&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${p}`]=l),p+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==k.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:k.data}),c}async function Le({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...f){for(const u of f){const{href:g}=new URL(u,n);c.dependencies.add(g)}};const p={route:new Proxy(a,{get:(f,u)=>(o&&(c.route=!0),f[u])}),params:new Proxy(r,{get:(f,u)=>(o&&c.params.add(u),f[u])}),data:s?.data??null,url:bt(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},v.hash),async fetch(f,u){let g;f instanceof Request?(g=f.url,u={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...u}):g=f;const h=new URL(g,n);return o&&d(h.href),h.origin===n.origin&&(g=h.href.slice(n.origin.length)),ae?Ut(g,h.href,u):It(g,u)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function Be(e,t,n,r,a,s){if(Ue)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(tt.some(o=>o(new URL(i))))return!0;return!1}function Te(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function sn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function qe({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Pe(k),constructors:[]}}}async function lt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(O?.id===e)return K.delete(O.token),O.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(m=>m?.().catch(()=>{})),l.forEach(m=>m?.[1]().catch(()=>{}));let d=null;const p=_.url?e!==ie(_.url):!1,f=_.route?a.id!==_.route.id:!1,u=sn(_.url,n);let g=!1;const h=l.map((m,y)=>{const R=_.branch[y],A=!!m?.[0]&&(R?.loader!==m[1]||Be(g,f,p,u,R.server?.uses,r));return A&&(g=!0),A});if(h.some(Boolean)){try{d=await ht(n,h)}catch(m){const y=await V(m,{url:n,params:r,route:{id:e}});return K.has(s)?qe({error:y,url:n,params:r,route:a}):fe({status:te(m),error:y,url:n,route:a})}if(d.type==="redirect")return d}const S=d?.nodes;let E=!1;const P=l.map(async(m,y)=>{if(!m)return;const R=_.branch[y],A=S?.[y];if((!A||A.type==="skip")&&m[1]===R?.loader&&!Be(E,f,p,u,R.universal?.uses,r))return R;if(E=!0,A?.type==="error")throw A;return Le({loader:m[1],url:n,params:r,route:a,parent:async()=>{const de={};for(let he=0;he<y;he+=1)Object.assign(de,(await P[he])?.data);return de},server_data_node:Te(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?R?.server:void 0)})});for(const m of P)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await P[m])}catch(y){if(y instanceof Qe)return{type:"redirect",location:y.location};if(K.has(s))return qe({error:await V(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let R=te(y),A;if(S?.includes(y))R=y.status??R,A=y.error;else if(y instanceof le)A=y.body;else{if(await N.updated.check())return await et(),await B(n);A=await V(y,{params:r,url:n,route:{id:a.id}})}const Z=await cn(m,w,i);return Z?se({url:n,params:r,branch:w.slice(0,Z.idx).concat(Z.node),status:R,error:A,route:a}):await dt(n,{id:a.id},A,R)}else w.push(void 0);return se({url:n,params:r,branch:w,status:200,error:null,route:a,form:t?void 0:null})}async function cn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:t,url:n,route:r}){const a={};let s=null;if(v.server_loads[0]===0)try{const l=await ht(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==X||n.pathname!==location.pathname||Ie)&&await B(n)}const o=await Le({loader:ve,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Te(s)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return se({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function xe(e,t){if(!e||ce(e,U,v.hash))return;let n;try{if(n=v.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);v.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=ut(n);for(const a of ue){const s=a.exec(r);if(s)return{id:ie(e),invalidating:t,route:a,params:vt(s),url:e}}}function ut(e){return wt(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ie(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ft({url:e,type:t,intent:n,delta:r}){let a=!1;const s=gt(_,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return J||nt.forEach(o=>o(i)),a?null:s}async function G({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=De,block:d=De}){const p=xe(t,!1),f=ft({url:t,type:e,delta:n?.delta,intent:p});if(!f){d();return}const u=b,g=I;l(),J=!0,ae&&N.navigating.set(W.current=f.navigation),oe=c;let h=p&&await lt(p);if(!h){if(ce(t,U,v.hash))return await B(t);h=await dt(t,{id:null},await V(new Ee(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=p?.url||t,oe!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await fe({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return it(new URL(h.location,t).href,{},o+1,c),!1;else h.props.page.status>=400&&await N.updated.check()&&(await et(),await B(t));if(an(),Re(u),ot(g),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const w=s?0:1,m={[F]:b+=w,[z]:I+=w,[ze]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||nn(b,I)}if(O=null,h.props.page.state=i,ae){_=h.state,h.props.page&&(h.props.page.url=t);const w=(await Promise.all(Array.from(rn,m=>m(f.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){w.forEach(y=>{H.delete(y)})};w.push(m),w.forEach(y=>{H.add(y)})}at.$set(h.props),en(h.props.page),rt=!0}else ct(h,be,!1);const{activeElement:S}=document;await _t();const E=n?n.scroll:a?ke():null;if(Fe){const w=t.hash&&document.getElementById(decodeURIComponent(v.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):w?w.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==S&&document.activeElement!==document.body;!r&&!P&&hn(),Fe=!0,h.props.page&&Object.assign(k,h.props.page),J=!1,e==="popstate"&&st(I),f.fulfil(void 0),H.forEach(w=>w(f.navigation)),N.navigating.set(W.current=null)}async function dt(e,t,n,r){return e.origin===X&&e.pathname===location.pathname&&!Ie?await fe({status:r,error:n,url:e,route:t}):await B(e)}function ln(){let e;C.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}C.addEventListener("mousedown",t),C.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(ye(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Je(s,C);if(!o)return;const{url:c,external:l,download:d}=we(o,U,v.hash);if(l||d)return;const p=ee(o),f=c&&ie(_.url)===ie(c);if(!p.reload&&!f)if(i<=p.preload_data){const u=xe(c,!1);u&&on(u)}else i<=p.preload_code&&ye(c)}function a(){n.disconnect();for(const s of C.querySelectorAll("a")){const{url:i,external:o,download:c}=we(s,U,v.hash);if(o||c)continue;const l=ee(s);l.reload||(l.preload_code===Q.viewport&&n.observe(s),l.preload_code===Q.eager&&ye(i))}}H.add(a),a()}function V(e,t){if(e instanceof le)return e.body;const n=te(e),r=Zt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function un(e,t={}){return e=new URL(We(e)),e.origin!==X?Promise.reject(new Error("goto: invalid URL")):it(e,t,0)}function fn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Ve(),!J){const r=gt(_,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};nt.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ve()}),navigator.connection?.saveData||ln(),C.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Je(t.composedPath()[0],C);if(!n)return;const{url:r,external:a,target:s,download:i}=we(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=ee(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[l,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),p=l===ge(location);if(a||o.reload&&(!p||!d)){ft({url:r,type:"link"})?J=!0:t.preventDefault();return}if(d!==void 0&&p){const[,f]=_.url.href.split("#");if(f===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const u=n.ownerDocument.getElementById(decodeURIComponent(d));u&&(u.scrollIntoView(),u.focus())}return}if(q=!0,Re(b),e(r),!o.replace_state)return;q=!1}t.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),G({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),C.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ce(i,U,!1))return;const o=t.target,c=ee(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(o),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),G({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[F]){const n=t.state[F];if(oe={},n===b)return;const r=j[n],a=t.state[ze]??{},s=new URL(t.state[$t]??location.href),i=t.state[z],o=ge(location)===ge(_.url);if(i===I&&(rt||o)){a!==k.state&&(k.state=a),e(s),j[b]=ke(),r&&scrollTo(r.x,r.y),b=n;return}const l=n-b;await G({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{b=n,I=i},block:()=>{history.go(-l)},nav_token:oe})}else if(!q){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++b,[z]:I},"",location.href)):v.hash&&_.url.hash===location.hash&&G({type:"goto",url:_.url})});for(const t of document.querySelectorAll("link"))tn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&N.navigating.set(W.current=null)});function e(t){_.url=k.url=t,N.page.set(Pe(k)),N.page.notify()}}async function dn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Ie=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=xe(c,!1)||{});let l,d=!0;try{const p=r.map(async(g,h)=>{const S=i[h];return S?.uses&&(S.uses=pt(S.uses)),Le({loader:v.nodes[g],url:c,params:a,route:s,parent:async()=>{const E={};for(let P=0;P<h;P+=1)Object.assign(E,(await p[P]).data);return E},server_data_node:Te(S)})}),f=await Promise.all(p),u=ue.find(({id:g})=>g===s.id);if(u){const g=u.layouts;for(let h=0;h<g.length;h++)g[h]||f.splice(h,0,void 0)}l=se({url:c,params:a,branch:f,status:t,error:n,form:o,route:u??null})}catch(p){if(p instanceof Qe){await B(new URL(p.location,location.href));return}l=await fe({status:te(p),error:await V(p,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),ct(l,e,d)}async function ht(e,t){const n=new URL(e);n.pathname=kt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Xt,"1"),n.searchParams.append(Jt,t.map(a=>a?"1":"0").join(""));const r=await Ge(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new le(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return zt(d,{...v.decoders,Promise:p=>new Promise((f,u)=>{s.set(p,{fulfil:f,reject:u})})})}let l="";for(;;){const{done:d,value:p}=await i.read();if(d&&!l)break;for(l+=!p&&l?`
`:o.decode(p,{stream:!0});;){const f=l.indexOf(`
`);if(f===-1)break;const u=JSON.parse(l.slice(0,f));if(l=l.slice(f+1),u.type==="redirect")return a(u);if(u.type==="data")u.nodes?.forEach(g=>{g?.type==="data"&&(g.uses=pt(g.uses),g.data=c(g.data))}),a(u);else if(u.type==="chunk"){const{id:g,data:h,error:S}=u,E=s.get(g);s.delete(g),S?E.reject(c(S)):E.fulfil(c(h))}}}})}function pt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function hn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function gt(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Pe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{yn as a,k as p,N as s,_e as u};
