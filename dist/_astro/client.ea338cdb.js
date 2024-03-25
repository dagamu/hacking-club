import{c as u,a as w,s as g,e as H,b as B}from"./solid.c09dcdea.js";function N(o,i,e){let n=e.length,s=i.length,l=n,f=0,t=0,h=i[s-1].nextSibling,y=null;for(;f<s||t<l;){if(i[f]===e[t]){f++,t++;continue}for(;i[s-1]===e[l-1];)s--,l--;if(s===f){const d=l<n?t?e[t-1].nextSibling:e[l-t]:h;for(;t<l;)o.insertBefore(e[t++],d)}else if(l===t)for(;f<s;)(!y||!y.has(i[f]))&&i[f].remove(),f++;else if(i[f]===e[l-1]&&e[t]===i[s-1]){const d=i[--s].nextSibling;o.insertBefore(e[t++],i[f++].nextSibling),o.insertBefore(e[--l],d),i[s]=e[l]}else{if(!y){y=new Map;let c=t;for(;c<l;)y.set(e[c],c++)}const d=y.get(i[f]);if(d!=null)if(t<d&&d<l){let c=f,A=1,p;for(;++c<s&&c<l&&!((p=y.get(i[c]))==null||p!==d+A);)A++;if(A>d-t){const b=i[f];for(;t<d;)o.insertBefore(e[t++],b)}else o.replaceChild(e[t++],i[f++])}else f++;else i[f++].remove()}}}function T(o,i,e,n={}){let s;return u(l=>{s=l,i===document?o():_(i,o(),i.firstChild?null:void 0,e)},n.owner),()=>{s(),i.textContent=""}}function _(o,i,e,n){if(e!==void 0&&!n&&(n=[]),typeof i!="function")return x(o,i,n,e);w(s=>x(o,i(),s,e),n)}function $(o,i,e={}){g.completed=globalThis._$HY.completed,g.events=globalThis._$HY.events,g.load=globalThis._$HY.load,g.gather=s=>S(i,s),g.registry=new Map,g.context={id:e.renderId||"",count:0},S(i,e.renderId);const n=T(o,i,[...i.childNodes],e);return g.context=null,n}function x(o,i,e,n,s){if(g.context){!e&&(e=[...o.childNodes]);let t=[];for(let h=0;h<e.length;h++){const y=e[h];y.nodeType===8&&y.data.slice(0,2)==="!$"?y.remove():t.push(y)}e=t}for(;typeof e=="function";)e=e();if(i===e)return e;const l=typeof i,f=n!==void 0;if(o=f&&e[0]&&e[0].parentNode||o,l==="string"||l==="number"){if(g.context)return e;if(l==="number"&&(i=i.toString()),f){let t=e[0];t&&t.nodeType===3?t.data=i:t=document.createTextNode(i),e=r(o,e,n,t)}else e!==""&&typeof e=="string"?e=o.firstChild.data=i:e=o.textContent=i}else if(i==null||l==="boolean"){if(g.context)return e;e=r(o,e,n)}else{if(l==="function")return w(()=>{let t=i();for(;typeof t=="function";)t=t();e=x(o,t,e,n)}),()=>e;if(Array.isArray(i)){const t=[],h=e&&Array.isArray(e);if(a(t,i,e,s))return w(()=>e=x(o,t,e,n,!0)),()=>e;if(g.context){if(!t.length)return e;for(let y=0;y<t.length;y++)if(t[y].parentNode)return e=t}if(t.length===0){if(e=r(o,e,n),f)return e}else h?e.length===0?C(o,t,n):N(o,e,t):(e&&r(o),C(o,t));e=t}else if(i.nodeType){if(g.context&&i.parentNode)return e=f?[i]:i;if(Array.isArray(e)){if(f)return e=r(o,e,n,i);r(o,e,null,i)}else e==null||e===""||!o.firstChild?o.appendChild(i):o.replaceChild(i,o.firstChild);e=i}else console.warn("Unrecognized value. Skipped inserting",i)}return e}function a(o,i,e,n){let s=!1;for(let l=0,f=i.length;l<f;l++){let t=i[l],h=e&&e[l],y;if(!(t==null||t===!0||t===!1))if((y=typeof t)=="object"&&t.nodeType)o.push(t);else if(Array.isArray(t))s=a(o,t,h)||s;else if(y==="function")if(n){for(;typeof t=="function";)t=t();s=a(o,Array.isArray(t)?t:[t],Array.isArray(h)?h:[h])||s}else o.push(t),s=!0;else{const d=String(t);h&&h.nodeType===3&&h.data===d?o.push(h):o.push(document.createTextNode(d))}}return s}function C(o,i,e=null){for(let n=0,s=i.length;n<s;n++)o.insertBefore(i[n],e)}function r(o,i,e,n){if(e===void 0)return o.textContent="";const s=n||document.createTextNode("");if(i.length){let l=!1;for(let f=i.length-1;f>=0;f--){const t=i[f];if(s!==t){const h=t.parentNode===o;!l&&!f?h?o.replaceChild(s,t):o.insertBefore(s,e):h&&t.remove()}else l=!0}}else o.insertBefore(s,e);return[s]}function S(o,i){const e=o.querySelectorAll("*[data-hk]");for(let n=0;n<e.length;n++){const s=e[n],l=s.getAttribute("data-hk");(!i||l.startsWith(i))&&!g.registry.has(l)&&g.registry.set(l,s)}}const E=(...o)=>(H(),$(...o));var Y=o=>(i,e,n,{client:s})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!o.hasAttribute("ssr"))return;const l=s==="only"?T:E;let f={};if(Object.keys(n).length>0)if(g.context)o.querySelectorAll("astro-slot").forEach(d=>{f[d.getAttribute("name")||"default"]=d.cloneNode(!0)});else for(const[d,c]of Object.entries(n))f[d]=document.createElement("astro-slot"),d!=="default"&&f[d].setAttribute("name",d),f[d].innerHTML=c;const{default:t,...h}=f,y=o.dataset.solidRenderId;l(()=>B(i,{...e,...h,children:t}),o,{renderId:y})};export{Y as default};
