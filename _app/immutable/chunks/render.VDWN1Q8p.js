import{O as b,P as E,Q as D,R as N,T as I,q as P,V as W,W as Y,X as R,Y as q,Z as H,_ as M,$ as m,c as w,s as O,a as $,f as p,a0 as B,a1 as C,a2 as j,a3 as Q,a4 as X,a5 as Z,a6 as z,e as F,x as G,h as S,A as J,l as K}from"./index-client.Bfxe-HCJ.js";import{b as U}from"./disclose-version.DEOVRINt.js";const tt=["touchstart","touchmove"];function et(t){return tt.includes(t)}function rt(t){var e=D,a=N;b(null),E(null);try{return t()}finally{b(e),E(a)}}const at=new Set,A=new Set;function nt(t,e,a,o){function s(r){if(o.capture||y.call(e,r),!r.cancelBubble)return rt(()=>a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?P(()=>{e.addEventListener(t,s,o)}):e.addEventListener(t,s,o),s}function ut(t,e,a,o,s){var r={capture:o,passive:s},u=nt(t,e,a,r);(e===document.body||e===window||e===document)&&I(()=>{e.removeEventListener(t,u,r)})}function y(t){var e=this,a=e.ownerDocument,o=t.type,s=t.composedPath?.()||[],r=s[0]||t.target,u=0,d=t.__root;if(d){var l=s.indexOf(d);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var _=s.indexOf(e);if(_===-1)return;l<=_&&(u=l)}if(r=s[u]||t.target,r!==e){W(t,"currentTarget",{configurable:!0,get(){return r||a}});var T=D,f=N;b(null),E(null);try{for(var n,i=[];r!==null;){var h=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+o];if(c!==void 0&&!r.disabled)if(Y(c)){var[k,...x]=c;k.apply(r,[t,...x])}else c.call(r,t)}catch(g){n?i.push(g):n=g}if(t.cancelBubble||h===e||h===null)break;r=h}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{t.__root=e,delete t.currentTarget,b(T),E(f)}}}function ft(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??=t.nodeValue)&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function st(t,e){return V(t,e)}function lt(t,e){R(),e.intro=e.intro??!1;const a=e.target,o=S,s=p;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==H);)r=M(r);if(!r)throw m;w(!0),O(r),$();const u=V(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==B)throw C(),m;return w(!1),u}catch(u){if(u===m)return e.recover===!1&&j(),R(),Q(a),w(!1),st(t,e);throw u}finally{w(o),O(s)}}const v=new Map;function V(t,{target:e,anchor:a,props:o={},events:s,context:r,intro:u=!0}){R();var d=new Set,l=f=>{for(var n=0;n<f.length;n++){var i=f[n];if(!d.has(i)){d.add(i);var h=et(i);e.addEventListener(i,y,{passive:h});var c=v.get(i);c===void 0?(document.addEventListener(i,y,{passive:h}),v.set(i,1)):v.set(i,c+1)}}};l(X(at)),A.add(l);var _=void 0,T=Z(()=>{var f=a??e.appendChild(z());return F(()=>{if(r){G({});var n=K;n.c=r}s&&(o.$$events=s),S&&U(f,null),_=t(f,o)||{},S&&(N.nodes_end=p),r&&J()}),()=>{for(var n of d){e.removeEventListener(n,y);var i=v.get(n);--i===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,i)}A.delete(l),f!==a&&f.parentNode?.removeChild(f)}});return L.set(_,T),_}let L=new WeakMap;function ct(t,e){const a=L.get(t);return a?(L.delete(t),a(e)):Promise.resolve()}export{ut as e,lt as h,st as m,ft as s,ct as u};
