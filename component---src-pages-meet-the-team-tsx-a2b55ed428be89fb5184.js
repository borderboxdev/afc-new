"use strict";(self.webpackChunkafc=self.webpackChunkafc||[]).push([[6],{3276:function(e,t,n){n.r(t),n.d(t,{default:function(){return dt}});var r=n(7294),l=n(8767),o=n(9297),a=n.p+"static/meet-the-team-header-bg-7b7093f66222274f9e3387274779c530.webp";function i(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,i),r}var u=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(u||{}),s=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(s||{});function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:a}){let u=f(t,e);if(o)return d(u,n,r,a);let s=null!=l?l:0;if(2&s){let{static:e=!1,...t}=u;if(e)return d(t,n,r,a)}if(1&s){let{unmount:e=!0,...t}=u;return i(e?0:1,{0(){return null},1(){return d({...t,hidden:!0,style:{display:"none"}},n,r,a)}})}return d(u,n,r,a)}function d(e,t={},n,l){let{as:o=n,children:a,refName:i="ref",...u}=v(e,["unmount","static"]),s=void 0!==e.ref?{[i]:e.ref}:{},c="function"==typeof a?a(t):a;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let d={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(o===r.Fragment&&Object.keys(p(u)).length>0){if(!(0,r.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${l} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(c,Object.assign({},f(c.props,p(v(u,["ref"]))),d,s,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,r.createElement)(o,Object.assign({},v(u,["ref"]),o!==r.Fragment&&s,o!==r.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function m(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let h=(0,r.createContext)(null);h.displayName="OpenClosedContext";var g=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(g||{});function E(){return(0,r.useContext)(h)}function b({value:e,children:t}){return r.createElement(h.Provider,{value:e},t)}const w="undefined"==typeof window||"undefined"==typeof document;let y=w?r.useEffect:r.useLayoutEffect;function T(){let e=(0,r.useRef)(!1);return y((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function x(e){let t=(0,r.useRef)(e);return y((()=>{t.current=e}),[e]),t}let F={serverHandoffComplete:!1};function P(){let[e,t]=(0,r.useState)(F.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===F.serverHandoffComplete&&(F.serverHandoffComplete=!0)}),[]),e}let C=function(e){let t=x(e);return r.useCallback(((...e)=>t.current(...e)),[t])},N=Symbol();function S(e,t=!0){return Object.assign(e,{[N]:t})}function A(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=C((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[N])))?void 0:n}function R(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function k(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener(e,t,r,l){return e.addEventListener(t,r,l),n.add((()=>e.removeEventListener(t,r,l)))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame(...e){return n.requestAnimationFrame((()=>n.requestAnimationFrame(...e)))},setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return R((()=>{t.current&&e[0]()})),n.add((()=>{t.current=!1}))},add(t){return e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}},dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function O(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}function D(e,t,n,r){let l=n?"enter":"leave",o=k(),a=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===l&&(e.removeAttribute("hidden"),e.style.display="");let u=i(l,{enter:()=>t.enter,leave:()=>t.leave}),s=i(l,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=i(l,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return L(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),O(e,...u,...c),o.nextFrame((()=>{L(e,...c),O(e,...s),function(e,t){let n=k();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[o,a]=[r,l].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(o+a!==0){let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(L(e,...u),O(e,...t.entered),a())))})),o.dispose}function M(){let[e]=(0,r.useState)(k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}function I({container:e,direction:t,classes:n,onStart:r,onStop:l}){let o=T(),a=M(),i=x(t);y((()=>{let t=k();a.add(t.dispose);let u=e.current;if(u&&"idle"!==i.current&&o.current)return t.dispose(),r.current(i.current),t.add(D(u,n.current,"enter"===i.current,(()=>{t.dispose(),l.current(i.current)}))),t.dispose}),[t])}function H(...e){return e.filter(Boolean).join(" ")}function j(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let B=(0,r.createContext)(null);B.displayName="TransitionContext";var U=(e=>(e.Visible="visible",e.Hidden="hidden",e))(U||{});let _=(0,r.createContext)(null);function $(e){return"children"in e?$(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function q(e,t){let n=x(e),l=(0,r.useRef)([]),o=T(),a=M(),u=C(((e,t=s.Hidden)=>{let r=l.current.findIndex((({el:t})=>t===e));-1!==r&&(i(t,{[s.Unmount](){l.current.splice(r,1)},[s.Hidden](){l.current[r].state="hidden"}}),a.microTask((()=>{var e;!$(l)&&o.current&&(null==(e=n.current)||e.call(n))})))})),c=C((e=>{let t=l.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):l.current.push({el:e,state:"visible"}),()=>u(e,s.Unmount)})),d=(0,r.useRef)([]),f=(0,r.useRef)(Promise.resolve()),m=(0,r.useRef)({enter:[],leave:[],idle:[]}),p=C(((e,n,r)=>{d.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{d.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(m.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?f.current=f.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),v=C(((e,t,n)=>{Promise.all(m.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=d.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:l,register:c,unregister:u,onStart:p,onStop:v,wait:f,chains:m})),[c,u,l,p,v,m,f])}function W(){}_.displayName="NestingContext";let G=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Y(e){var t;let n={};for(let r of G)n[r]=null!=(t=e[r])?t:W;return n}let V=u.RenderStrategy,z=m((function(e,t){let{beforeEnter:n,afterEnter:l,beforeLeave:o,afterLeave:a,enter:u,enterFrom:d,enterTo:f,entered:m,leave:p,leaveFrom:v,leaveTo:h,...E}=e,w=(0,r.useRef)(null),y=A(w,t),T=E.unmount?s.Unmount:s.Hidden,{show:F,appear:N,initial:S}=function(){let e=(0,r.useContext)(B);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[R,k]=(0,r.useState)(F?"visible":"hidden"),O=function(){let e=(0,r.useContext)(_);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:L,unregister:D}=O,M=(0,r.useRef)(null);(0,r.useEffect)((()=>L(w)),[L,w]),(0,r.useEffect)((()=>{if(T===s.Hidden&&w.current)return F&&"visible"!==R?void k("visible"):i(R,{hidden:()=>D(w),visible:()=>L(w)})}),[R,w,L,D,F,T]);let U=x({enter:j(u),enterFrom:j(d),enterTo:j(f),entered:j(m),leave:j(p),leaveFrom:j(v),leaveTo:j(h)}),W=function(e){let t=(0,r.useRef)(Y(e));return(0,r.useEffect)((()=>{t.current=Y(e)}),[e]),t}({beforeEnter:n,afterEnter:l,beforeLeave:o,afterLeave:a}),G=P();(0,r.useEffect)((()=>{if(G&&"visible"===R&&null===w.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[w,R,G]);let z=S&&!N,K=!G||z||M.current===F?"idle":F?"enter":"leave",Q=C((e=>i(e,{enter:()=>W.current.beforeEnter(),leave:()=>W.current.beforeLeave(),idle:()=>{}}))),X=C((e=>i(e,{enter:()=>W.current.afterEnter(),leave:()=>W.current.afterLeave(),idle:()=>{}}))),J=q((()=>{k("hidden"),D(w)}),O);I({container:w,classes:U,direction:K,onStart:x((e=>{J.onStart(w,e,Q)})),onStop:x((e=>{J.onStop(w,e,X),"leave"===e&&!$(J)&&(k("hidden"),D(w))}))}),(0,r.useEffect)((()=>{!z||(T===s.Hidden?M.current=null:M.current=F)}),[F,z,R]);let Z=E,ee={ref:y};return N&&F&&("undefined"==typeof window||"undefined"==typeof document)&&(Z={...Z,className:H(E.className,...U.current.enter,...U.current.enterFrom)}),r.createElement(_.Provider,{value:J},r.createElement(b,{value:i(R,{visible:g.Open,hidden:g.Closed})},c({ourProps:ee,theirProps:Z,defaultTag:"div",features:V,visible:"visible"===R,name:"Transition.Child"})))})),K=m((function(e,t){let{show:n,appear:l=!1,unmount:o,...a}=e,u=(0,r.useRef)(null),s=A(u,t);P();let d=E();if(void 0===n&&null!==d&&(n=i(d,{[g.Open]:!0,[g.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[f,m]=(0,r.useState)(n?"visible":"hidden"),p=q((()=>{m("hidden")})),[v,h]=(0,r.useState)(!0),b=(0,r.useRef)([n]);y((()=>{!1!==v&&b.current[b.current.length-1]!==n&&(b.current.push(n),h(!1))}),[b,n]);let w=(0,r.useMemo)((()=>({show:n,appear:l,initial:v})),[n,l,v]);(0,r.useEffect)((()=>{if(n)m("visible");else if($(p)){let e=u.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")}),[n,p]);let T={unmount:o};return r.createElement(_.Provider,{value:p},r.createElement(B.Provider,{value:w},c({ourProps:{...T,as:r.Fragment,children:r.createElement(z,{ref:s,...T,...a})},theirProps:{},defaultTag:r.Fragment,features:V,visible:"visible"===f,name:"Transition"})))})),Q=m((function(e,t){let n=null!==(0,r.useContext)(B),l=null!==E();return r.createElement(r.Fragment,null,!n&&l?r.createElement(K,{ref:t,...e}):r.createElement(z,{ref:t,...e}))})),X=Object.assign(K,{Child:Q,Root:K});var J,Z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Z||{});function ee(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let te=0;function ne(){return++te}let re=null!=(J=r.useId)?J:function(){let e=P(),[t,n]=r.useState(e?ne:null);return y((()=>{null===t&&n(ne())}),[t]),null!=t?""+t:void 0};var le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(le||{});let oe=m((function(e,t){let{features:n=1,...r}=e;return c({ourProps:{ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function ae(e){return w?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ie=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var ue,se=((ue=se||{})[ue.First=1]="First",ue[ue.Previous=2]="Previous",ue[ue.Next=4]="Next",ue[ue.Last=8]="Last",ue[ue.WrapAround=16]="WrapAround",ue[ue.NoScroll=32]="NoScroll",ue),ce=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ce||{}),de=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(de||{});function fe(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(ie)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(me||{});function pe(e,t=0){var n;return e!==(null==(n=ae(e))?void 0:n.body)&&i(t,{0(){return e.matches(ie)},1(){let t=e;for(;null!==t;){if(t.matches(ie))return!0;t=t.parentElement}return!1}})}function ve(e){null==e||e.focus({preventScroll:!0})}let he=["textarea","input"].join(",");function ge(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),l=t(n);if(null===r||null===l)return 0;let o=r.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:fe(e);l.length>0&&(a=a.filter((e=>!l.includes(e)))),r=null!=r?r:o.activeElement;let i,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,f=a.length;do{if(d>=f||d+f<=0)return 0;let e=s+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}i=a[e],null==i||i.focus(c),d+=u}while(i!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,he))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}var Ee=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ee||{});function be(){let e=(0,r.useRef)(0);return function(e,t,n){let l=x(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}function we(...e){return(0,r.useMemo)((()=>ae(...e)),[...e])}function ye(e,t,n,l){let o=x(n);(0,r.useEffect)((()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}),[e,t,l])}function Te(e,t){let n=(0,r.useRef)([]),l=C(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,o]of t.entries())if(n.current[r]!==o){let r=l(t,e);return n.current=t,r}}),[l,...t])}var xe,Fe=((xe=Fe||{})[xe.None=1]="None",xe[xe.InitialFocus=2]="InitialFocus",xe[xe.TabLock=4]="TabLock",xe[xe.FocusLock=8]="FocusLock",xe[xe.RestoreFocus=16]="RestoreFocus",xe[xe.All=30]="All",xe);let Pe=Object.assign(m((function(e,t){let n=(0,r.useRef)(null),l=A(n,t),{initialFocus:o,containers:a,features:u=30,...s}=e;P()||(u=1);let d=we(n);!function({ownerDocument:e},t){let n=(0,r.useRef)(null);ye(null==e?void 0:e.defaultView,"focusout",(e=>{!t||n.current||(n.current=e.target)}),!0),Te((()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&ve(n.current),n.current=null)}),[t]);let l=(0,r.useRef)(!1);(0,r.useEffect)((()=>(l.current=!1,()=>{l.current=!0,R((()=>{!l.current||(ve(n.current),n.current=null)}))})),[])}({ownerDocument:d},Boolean(16&u));let f=function({ownerDocument:e,container:t,initialFocus:n},l){let o=(0,r.useRef)(null),a=T();return Te((()=>{if(!l)return;let r=t.current;!r||R((()=>{if(!a.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(o.current=t)}else if(r.contains(t))return void(o.current=t);null!=n&&n.current?ve(n.current):ge(r,se.First)===ce.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement}))}),[l]),o}({ownerDocument:d,container:n,initialFocus:o},Boolean(2&u));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let o=T();ye(null==e?void 0:e.defaultView,"focus",(e=>{if(!l||!o.current)return;let a=new Set(null==n?void 0:n.current);a.add(t);let i=r.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?Ce(a,u)?(r.current=u,ve(u)):(e.preventDefault(),e.stopPropagation(),ve(i)):ve(r.current)}),!0)}({ownerDocument:d,container:n,containers:a,previousActiveElement:f},Boolean(8&u));let m=be(),p=C((e=>{let t=n.current;t&&i(m.current,{[Ee.Forwards]:()=>ge(t,se.First,{skipElements:[e.relatedTarget]}),[Ee.Backwards]:()=>ge(t,se.Last,{skipElements:[e.relatedTarget]})})})),v=M(),h=(0,r.useRef)(!1),g={ref:l,onKeyDown(e){"Tab"==e.key&&(h.current=!0,v.requestAnimationFrame((()=>{h.current=!1})))},onBlur(e){let t=new Set(null==a?void 0:a.current);t.add(n);let r=e.relatedTarget;!r||"true"!==r.dataset.headlessuiFocusGuard&&(Ce(t,r)||(h.current?ge(n.current,i(m.current,{[Ee.Forwards]:()=>se.Next,[Ee.Backwards]:()=>se.Previous})|se.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&ve(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&u)&&r.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:le.Focusable}),c({ourProps:g,theirProps:s,defaultTag:"div",name:"FocusTrap"}),Boolean(4&u)&&r.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:le.Focusable}))})),{features:Fe});function Ce(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}let Ne=new Set,Se=new Map;function Ae(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Re(e){let t=Se.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var ke=n(3935);let Oe=(0,r.createContext)(!1);function Le(){return(0,r.useContext)(Oe)}function De(e){return r.createElement(Oe.Provider,{value:e.force},e.children)}let Me=r.Fragment,Ie=m((function(e,t){let n=e,l=(0,r.useRef)(null),o=A(S((e=>{l.current=e})),t),a=we(l),i=function(e){let t=Le(),n=(0,r.useContext)(je),l=we(e),[o,a]=(0,r.useState)((()=>{if(!t&&null!==n||w)return null;let e=null==l?void 0:l.getElementById("headlessui-portal-root");if(e)return e;if(null===l)return null;let r=l.createElement("div");return r.setAttribute("id","headlessui-portal-root"),l.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==o&&(null!=l&&l.body.contains(o)||null==l||l.body.appendChild(o))}),[o,l]),(0,r.useEffect)((()=>{t||null!==n&&a(n.current)}),[n,a,t]),o}(l),[u]=(0,r.useState)((()=>{var e;return w?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),s=P(),d=(0,r.useRef)(!1);return y((()=>{if(d.current=!1,i&&u)return i.contains(u)||(u.setAttribute("data-headlessui-portal",""),i.appendChild(u)),()=>{d.current=!0,R((()=>{var e;!d.current||!i||!u||(i.removeChild(u),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))}))}}),[i,u]),s&&i&&u?(0,ke.createPortal)(c({ourProps:{ref:o},theirProps:n,defaultTag:Me,name:"Portal"}),u):null})),He=r.Fragment,je=(0,r.createContext)(null),Be=m((function(e,t){let{target:n,...l}=e,o={ref:A(t)};return r.createElement(je.Provider,{value:n},c({ourProps:o,theirProps:l,defaultTag:He,name:"Popover.Group"}))})),Ue=Object.assign(Ie,{Group:Be}),_e=(0,r.createContext)(null);function $e(){let e=(0,r.useContext)(_e);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,$e),e}return e}function qe(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=C((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),l=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(_e.Provider,{value:l},e.children)}),[t])]}let We=m((function(e,t){let n=re(),{id:r=`headlessui-description-${n}`,...l}=e,o=$e(),a=A(t);return y((()=>o.register(r)),[r,o.register]),c({ourProps:{ref:a,...o.props,id:r},theirProps:l,slot:o.slot||{},defaultTag:"p",name:o.name||"Description"})})),Ge=(0,r.createContext)((()=>{}));Ge.displayName="StackContext";var Ye=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ye||{});function Ve({children:e,onUpdate:t,type:n,element:l,enabled:o}){let a=(0,r.useContext)(Ge),i=C(((...e)=>{null==t||t(...e),a(...e)}));return y((()=>{let e=void 0===o||!0===o;return e&&i(0,n,l),()=>{e&&i(1,n,l)}}),[i,n,l,o]),r.createElement(Ge.Provider,{value:i},e)}function ze(e,t,n){let l=x(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function Ke(e,t,n=!0){let l=(0,r.useRef)(!1);function o(n,r){if(!l.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),a=r(n);if(null!==a&&a.getRootNode().contains(a)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(a)||n.composed&&n.composedPath().includes(t))return}return!pe(a,me.Loose)&&-1!==a.tabIndex&&n.preventDefault(),t(n,a)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{l.current=n}))}),[n]);let a=(0,r.useRef)(null);ze("mousedown",(e=>{var t,n;l.current&&(a.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),ze("click",(e=>{!a.current||(o(e,(()=>a.current)),a.current=null)}),!0),ze("blur",(e=>o(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Xe=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Xe||{});let Je={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Ze=(0,r.createContext)(null);function et(e){let t=(0,r.useContext)(Ze);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,et),t}return t}function tt(e,t,n=(()=>[document.body])){(0,r.useEffect)((()=>{var r;if(!t||!e)return;let l=k(),o=window.pageYOffset;function a(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),l.add((()=>{Object.assign(e.style,{[t]:r})}))}let i=e.documentElement,u=(null!=(r=e.defaultView)?r:window).innerWidth-i.clientWidth;if(a(i,"overflow","hidden"),u>0){a(i,"paddingRight",`${u-(i.clientWidth-i.offsetWidth)}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){a(e.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let t=null;l.addEventListener(e,"click",(r=>{if(r.target instanceof HTMLElement)try{let l=r.target.closest("a");if(!l)return;let{hash:o}=new URL(l.href),a=e.querySelector(o);a&&!n().some((e=>e.contains(a)))&&(t=a)}catch{}}),!0),l.addEventListener(e,"touchmove",(e=>{e.target instanceof HTMLElement&&!n().some((t=>t.contains(e.target)))&&e.preventDefault()}),{passive:!1}),l.add((()=>{window.scrollTo(0,window.pageYOffset+o),t&&t.isConnected&&(t.scrollIntoView({block:"nearest"}),t=null)}))}return l.dispose}),[e,t])}function nt(e,t){return i(t.type,Je,e,t)}Ze.displayName="DialogContext";let rt=u.RenderStrategy|u.Static,lt=m((function(e,t){let n=re(),{id:l=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:u,__demoMode:s=!1,...d}=e,[f,m]=(0,r.useState)(0),p=E();void 0===o&&null!==p&&(o=i(p,{[g.Open]:!0,[g.Closed]:!1}));let v=(0,r.useRef)(new Set),h=(0,r.useRef)(null),b=A(h,t),w=(0,r.useRef)(null),T=we(h),x=e.hasOwnProperty("open")||null!==p,F=e.hasOwnProperty("onClose");if(!x&&!F)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!F)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if("function"!=typeof a)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let N=o?0:1,[S,R]=(0,r.useReducer)(nt,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),k=C((()=>a(!1))),O=C((e=>R({type:0,id:e}))),L=!!P()&&(!s&&0===N),D=f>1,M=null!==(0,r.useContext)(Ze),I=D?"parent":"leaf";!function(e,t=!0){y((()=>{if(!t||!e.current)return;let n=e.current,r=ae(n);if(r){Ne.add(n);for(let e of Se.keys())e.contains(n)&&(Re(e),Se.delete(e));return r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement){for(let t of Ne)if(e.contains(t))return;1===Ne.size&&(Se.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),Ae(e))}})),()=>{if(Ne.delete(n),Ne.size>0)r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement&&!Se.has(e)){for(let t of Ne)if(e.contains(t))return;Se.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),Ae(e)}}));else for(let e of Se.keys())Re(e),Se.delete(e)}}}),[t])}(h,!!D&&L);let H=C((()=>{var e,t;return[...Array.from(null!=(e=null==T?void 0:T.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(!(e instanceof HTMLElement)||e.contains(w.current)||S.panelRef.current&&e.contains(S.panelRef.current)))),null!=(t=S.panelRef.current)?t:h.current]}));Ke((()=>H()),k,L&&!D),ye(null==T?void 0:T.defaultView,"keydown",(e=>{e.defaultPrevented||e.key===Z.Escape&&0===N&&(D||(e.preventDefault(),e.stopPropagation(),k()))})),tt(T,0===N&&!M,H),(0,r.useEffect)((()=>{if(0!==N||!h.current)return;let e=new IntersectionObserver((e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&k()}));return e.observe(h.current),()=>e.disconnect()}),[N,h,k]);let[j,B]=qe(),U=(0,r.useMemo)((()=>[{dialogState:N,close:k,setTitleId:O},S]),[N,S,k,O]),_=(0,r.useMemo)((()=>({open:0===N})),[N]),$={ref:b,id:l,role:"dialog","aria-modal":0===N||void 0,"aria-labelledby":S.titleId,"aria-describedby":j};return r.createElement(Ve,{type:"Dialog",enabled:0===N,element:h,onUpdate:C(((e,t,n)=>{"Dialog"===t&&i(e,{[Ye.Add](){v.current.add(n),m((e=>e+1))},[Ye.Remove](){v.current.add(n),m((e=>e-1))}})}))},r.createElement(De,{force:!0},r.createElement(Ue,null,r.createElement(Ze.Provider,{value:U},r.createElement(Ue.Group,{target:h},r.createElement(De,{force:!1},r.createElement(B,{slot:_,name:"Dialog.Description"},r.createElement(Pe,{initialFocus:u,containers:v,features:L?i(I,{parent:Pe.features.RestoreFocus,leaf:Pe.features.All&~Pe.features.FocusLock}):Pe.features.None},c({ourProps:$,theirProps:d,slot:_,defaultTag:"div",features:rt,visible:0===N,name:"Dialog"})))))))),r.createElement(oe,{features:le.Hidden,ref:w}))})),ot=m((function(e,t){let n=re(),{id:l=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:i}]=et("Dialog.Overlay"),u=A(t),s=C((e=>{if(e.target===e.currentTarget){if(ee(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}));return c({ourProps:{ref:u,id:l,"aria-hidden":!0,onClick:s},theirProps:o,slot:(0,r.useMemo)((()=>({open:0===a})),[a]),defaultTag:"div",name:"Dialog.Overlay"})})),at=m((function(e,t){let n=re(),{id:l=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},i]=et("Dialog.Backdrop"),u=A(t);(0,r.useEffect)((()=>{if(null===i.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[i.panelRef]);let s=(0,r.useMemo)((()=>({open:0===a})),[a]);return r.createElement(De,{force:!0},r.createElement(Ue,null,c({ourProps:{ref:u,id:l,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))})),it=m((function(e,t){let n=re(),{id:l=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},i]=et("Dialog.Panel"),u=A(t,i.panelRef),s=(0,r.useMemo)((()=>({open:0===a})),[a]),d=C((e=>{e.stopPropagation()}));return c({ourProps:{ref:u,id:l,onClick:d},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Panel"})})),ut=m((function(e,t){let n=re(),{id:l=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:i}]=et("Dialog.Title"),u=A(t);(0,r.useEffect)((()=>(i(l),()=>i(null))),[l,i]);let s=(0,r.useMemo)((()=>({open:0===a})),[a]);return c({ourProps:{ref:u,id:l},theirProps:o,slot:s,defaultTag:"h2",name:"Dialog.Title"})})),st=Object.assign(lt,{Backdrop:at,Panel:it,Overlay:ot,Title:ut,Description:We});var ct=e=>r.createElement(X,{appear:!0,show:e.isOpen,as:r.Fragment},r.createElement(st,{as:"div",className:"fixed z-[1000] w-full height-full bg-[rgba(0,0,0,.75)] backdrop-blur-sm top-0 left-0",onClose:()=>e.setIsOpen(!1)},r.createElement("div",{className:"min-h-screen px-4 text-center"},r.createElement(X.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},r.createElement(st.Overlay,{className:"fixed inset-0"})),r.createElement("span",{className:"inline-block h-screen align-middle","aria-hidden":"true"},"​"),r.createElement(X.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},r.createElement("div",{className:"inline-block w-full max-w-6xl max-h-[60vh] overflow-hidden text-left align-middle transition-all transform bg-white text-black shadow-xl rounded-2xl"},r.createElement("div",{className:"grid md:grid-cols-2"},r.createElement("div",{className:"grid place-content-center mb-6 md:mb-0 max-h-[60vh]"},r.createElement("figure",{className:"flex place-content-center rounded-full overflow-hidden md:rounded-none max-h-[60vh] h-[60vh]"},r.createElement("img",{className:"object-cover max-w-none h-full",src:e.imageUrl}))),r.createElement("div",{className:"p-8 max-h-[50vh] grid grid-row-[auto_1fr]"},r.createElement("div",null,r.createElement(st.Title,{className:"font-bold"},e.title),r.createElement("p",{className:"text-xs mb-2"},e.roleAlt),r.createElement("p",{className:"text-xs font-semibold"},e.email)),r.createElement("div",{className:"overflow-scroll"},r.createElement("div",{className:"mt-6"},r.createElement("p",{className:"text-sm text-gray-500 border-t pt-4",dangerouslySetInnerHTML:{__html:e.description||""}})),r.createElement("div",{className:"mt-4"},r.createElement("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm text-yellow bg-black border border-transparent rounded-md hover:bg-red-200 duration-300",onClick:()=>e.setIsOpen(!1)},"Close"))))))))));var dt=()=>{const[e,t]=r.useState(!1),[n,i]=r.useState(""),[u,s]=r.useState(""),[c,d]=r.useState(""),[f,m]=r.useState(""),[p,v]=r.useState(""),{isLoading:h,isError:g,data:E,error:b}=(0,l.useQuery)("getHomeContent",(()=>(0,o.ET)("\n        query {\n            teamMembersCPT(first: 100) {\n                nodes {\n                  teamMember_ACF {\n                    role\n                    profilePhoto {\n                      mediaItemUrl\n                    }\n                    roleAlt\n                    email\n                    buttonLabel\n                  }\n                  title\n                  content\n                }\n              }\n        }\n    ")));return r.createElement("div",{className:"page-wrapper"},r.createElement("section",{className:"sub-hero"},r.createElement("div",{className:"image-wrap"},r.createElement("img",{src:a,alt:"Meet The Team Header BG Image"})),r.createElement("article",null,r.createElement("h1",null,"Meet The Team"),r.createElement("p",null,"We have a fun and friendly group of trainers and staff who take pride in our fitness community and welcome every new face who walks in our doors. Our expertise, encouragement, service, and quest to assure you good health are benefits we proudly acknowledge."))),r.createElement("main",{className:"main"},r.createElement("section",{className:" grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-[repeat(5,_minmax(0,322px))]  place-content-center  place-items-center  items-start  gap-y-6  gap-7 "},!h&&E&&E.teamMembersCPT&&E.teamMembersCPT.nodes.map(((e,n)=>r.createElement("div",{key:n,className:" grid  gap-3  bg-transparent text-black  rounded-xl  cursor-pointer  min-w-[250px]  sm:min-w-0  max-w-[300px] ",onClick:()=>{i(e.title),s(e.teamMember_ACF.roleAlt),d(e.content),m(e.teamMember_ACF.email),v(e.teamMember_ACF.profilePhoto.mediaItemUrl),t(!0)}},r.createElement("figure",{className:" rounded-2xl  overflow-hidden  max-h-[400px]  h-[400px] "},r.createElement("img",{className:"h-full object-cover",src:e.teamMember_ACF.profilePhoto.mediaItemUrl})),r.createElement("div",{className:" grid  place-items-center  text-center "},r.createElement("h2",{className:"font-bold text-xl"},e.title),r.createElement("p",{className:"text-xs uppercase"},e.teamMember_ACF.role))))))),r.createElement(ct,{title:n,roleAlt:u,description:c,isOpen:e,setIsOpen:t,email:f,imageUrl:p}))}}}]);
//# sourceMappingURL=component---src-pages-meet-the-team-tsx-a2b55ed428be89fb5184.js.map