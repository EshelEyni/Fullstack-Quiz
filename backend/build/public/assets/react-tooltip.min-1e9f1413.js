import{r as m,R as he}from"./index-f9e05c39.js";import{c as ct}from"./Button-0c06efe1.js";function Ne(e){return e.split("-")[1]}function nt(e){return e==="y"?"height":"width"}function fe(e){return e.split("-")[0]}function De(e){return["top","bottom"].includes(fe(e))?"x":"y"}function st(e,t,n){let{reference:o,floating:i}=e;const r=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,c=De(t),s=nt(c),p=o[s]/2-i[s]/2,y=c==="x";let u;switch(fe(t)){case"top":u={x:r,y:o.y-i.height};break;case"bottom":u={x:r,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:a};break;case"left":u={x:o.x-i.width,y:a};break;default:u={x:o.x,y:o.y}}switch(Ne(t)){case"start":u[c]-=p*(n&&y?-1:1);break;case"end":u[c]+=p*(n&&y?-1:1)}return u}const Ot=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:a}=n,c=r.filter(Boolean),s=await(a.isRTL==null?void 0:a.isRTL(t));let p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:y,y:u}=st(p,o,s),v=o,h={},f=0;for(let g=0;g<c.length;g++){const{name:w,fn:S}=c[g],{x,y:E,data:L,reset:A}=await S({x:y,y:u,initialPlacement:o,placement:v,strategy:i,middlewareData:h,rects:p,platform:a,elements:{reference:e,floating:t}});y=x??y,u=E??u,h={...h,[w]:{...h[w],...L}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(v=A.placement),A.rects&&(p=A.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):A.rects),{x:y,y:u}=st(p,v,s)),g=-1)}return{x:y,y:u,placement:v,strategy:i,middlewareData:h}};function We(e,t){return typeof e=="function"?e(t):e}function wt(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function qe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function bt(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:a,elements:c,strategy:s}=e,{boundary:p="clippingAncestors",rootBoundary:y="viewport",elementContext:u="floating",altBoundary:v=!1,padding:h=0}=We(t,e),f=wt(h),g=c[v?u==="floating"?"reference":"floating":u],w=qe(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:p,rootBoundary:y,strategy:s})),S=u==="floating"?{...a.floating,x:o,y:i}:a.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),E=await(r.isElement==null?void 0:r.isElement(x))&&await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1},L=qe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:S,offsetParent:x,strategy:s}):S);return{top:(w.top-L.top+f.top)/E.y,bottom:(L.bottom-w.bottom+f.bottom)/E.y,left:(w.left-L.left+f.left)/E.x,right:(L.right-w.right+f.right)/E.x}}const et=Math.min,Ct=Math.max;function tt(e,t,n){return Ct(e,et(t,n))}const Nt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:a,elements:c}=t,{element:s,padding:p=0}=We(e,t)||{};if(s==null)return{};const y=wt(p),u={x:n,y:o},v=De(i),h=nt(v),f=await a.getDimensions(s),g=v==="y",w=g?"top":"left",S=g?"bottom":"right",x=g?"clientHeight":"clientWidth",E=r.reference[h]+r.reference[v]-u[v]-r.floating[h],L=u[v]-r.reference[v],A=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s));let M=A?A[x]:0;M&&await(a.isElement==null?void 0:a.isElement(A))||(M=c.floating[x]||r.floating[h]);const F=E/2-L/2,J=M/2-f[h]/2-1,Q=et(y[w],J),B=et(y[S],J),R=Q,$=M-f[h]-B,T=M/2-f[h]/2+F,_=tt(R,T,$),O=Ne(i)!=null&&T!=_&&r.reference[h]/2-(T<R?Q:B)-f[h]/2<0?T<R?R-T:$-T:0;return{[v]:u[v]-O,data:{[v]:_,centerOffset:T-_+O}}}}),Dt=["top","right","bottom","left"];Dt.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const Wt={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(e){return e.replace(/left|right|bottom|top/g,t=>Wt[t])}function Ht(e,t,n){n===void 0&&(n=!1);const o=Ne(e),i=De(e),r=nt(i);let a=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=ze(a)),{main:a,cross:ze(a)}}const Pt={start:"end",end:"start"};function Ue(e){return e.replace(/start|end/g,t=>Pt[t])}const Bt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:a,platform:c,elements:s}=t,{mainAxis:p=!0,crossAxis:y=!0,fallbackPlacements:u,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:f=!0,...g}=We(e,t),w=fe(o),S=fe(a)===a,x=await(c.isRTL==null?void 0:c.isRTL(s.floating)),E=u||(S||!f?[ze(a)]:function(R){const $=ze(R);return[Ue(R),$,Ue($)]}(a));u||h==="none"||E.push(...function(R,$,T,_){const O=Ne(R);let W=function(Z,N,te){const H=["left","right"],V=["right","left"],we=["top","bottom"],ie=["bottom","top"];switch(Z){case"top":case"bottom":return te?N?V:H:N?H:V;case"left":case"right":return N?we:ie;default:return[]}}(fe(R),T==="start",_);return O&&(W=W.map(Z=>Z+"-"+O),$&&(W=W.concat(W.map(Ue)))),W}(a,f,h,x));const L=[a,...E],A=await bt(t,g),M=[];let F=((n=i.flip)==null?void 0:n.overflows)||[];if(p&&M.push(A[w]),y){const{main:R,cross:$}=Ht(o,r,x);M.push(A[R],A[$])}if(F=[...F,{placement:o,overflows:M}],!M.every(R=>R<=0)){var J,Q;const R=(((J=i.flip)==null?void 0:J.index)||0)+1,$=L[R];if($)return{data:{index:R,overflows:F},reset:{placement:$}};let T=(Q=F.filter(_=>_.overflows[0]<=0).sort((_,O)=>_.overflows[1]-O.overflows[1])[0])==null?void 0:Q.placement;if(!T)switch(v){case"bestFit":{var B;const _=(B=F.map(O=>[O.placement,O.overflows.filter(W=>W>0).reduce((W,Z)=>W+Z,0)]).sort((O,W)=>O[1]-W[1])[0])==null?void 0:B[0];_&&(T=_);break}case"initialPlacement":T=a}if(o!==T)return{reset:{placement:T}}}return{}}}},Mt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,i=await async function(r,a){const{placement:c,platform:s,elements:p}=r,y=await(s.isRTL==null?void 0:s.isRTL(p.floating)),u=fe(c),v=Ne(c),h=De(c)==="x",f=["left","top"].includes(u)?-1:1,g=y&&h?-1:1,w=We(a,r);let{mainAxis:S,crossAxis:x,alignmentAxis:E}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...w};return v&&typeof E=="number"&&(x=v==="end"?-1*E:E),h?{x:x*g,y:S*f}:{x:S*f,y:x*g}}(t,e);return{x:n+i.x,y:o+i.y,data:i}}}};function Vt(e){return e==="x"?"y":"x"}const Ft=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:w=>{let{x:S,y:x}=w;return{x:S,y:x}}},...s}=We(e,t),p={x:n,y:o},y=await bt(t,s),u=De(fe(i)),v=Vt(u);let h=p[u],f=p[v];if(r){const w=u==="y"?"bottom":"right";h=tt(h+y[u==="y"?"top":"left"],h,h-y[w])}if(a){const w=v==="y"?"bottom":"right";f=tt(f+y[v==="y"?"top":"left"],f,f-y[w])}const g=c.fn({...t,[u]:h,[v]:f});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function j(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function K(e){return j(e).getComputedStyle(e)}function xt(e){return e instanceof j(e).Node}function re(e){return xt(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){return e instanceof HTMLElement||e instanceof j(e).HTMLElement}function at(e){return typeof ShadowRoot<"u"&&(e instanceof j(e).ShadowRoot||e instanceof ShadowRoot)}function Oe(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=K(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function It(e){return["table","td","th"].includes(re(e))}function ot(e){const t=rt(),n=K(e);return n.transform!=="none"||n.perspective!=="none"||!!n.containerType&&n.containerType!=="normal"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function rt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Je(e){return["html","body","#document"].includes(re(e))}const ut=Math.min,ke=Math.max,Xe=Math.round,le=e=>({x:e,y:e});function Et(e){const t=K(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=X(e),r=i?e.offsetWidth:n,a=i?e.offsetHeight:o,c=Xe(n)!==r||Xe(o)!==a;return c&&(n=r,o=a),{width:n,height:o,$:c}}function ee(e){return e instanceof Element||e instanceof j(e).Element}function St(e){return ee(e)?e:e.contextElement}function ve(e){const t=St(e);if(!X(t))return le(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=Et(t);let a=(r?Xe(n.width):n.width)/o,c=(r?Xe(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}const jt=le(0);function _t(e){const t=j(e);return rt()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:jt}function Ce(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),r=St(e);let a=le(1);t&&(o?ee(o)&&(a=ve(o)):a=ve(e));const c=function(v,h,f){return h===void 0&&(h=!1),!(!f||h&&f!==j(v))&&h}(r,n,o)?_t(r):le(0);let s=(i.left+c.x)/a.x,p=(i.top+c.y)/a.y,y=i.width/a.x,u=i.height/a.y;if(r){const v=j(r),h=o&&ee(o)?j(o):o;let f=v.frameElement;for(;f&&o&&h!==v;){const g=ve(f),w=f.getBoundingClientRect(),S=getComputedStyle(f),x=w.left+(f.clientLeft+parseFloat(S.paddingLeft))*g.x,E=w.top+(f.clientTop+parseFloat(S.paddingTop))*g.y;s*=g.x,p*=g.y,y*=g.x,u*=g.y,s+=x,p+=E,f=j(f).frameElement}}return qe({width:y,height:u,x:s,y:p})}function Qe(e){return ee(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ne(e){var t;return(t=(xt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Rt(e){return Ce(ne(e)).left+Qe(e).scrollLeft}function ge(e){if(re(e)==="html")return e;const t=e.assignedSlot||e.parentNode||at(e)&&e.host||ne(e);return at(t)?t.host:t}function At(e){const t=ge(e);return Je(t)?e.ownerDocument?e.ownerDocument.body:e.body:X(t)&&Oe(t)?t:At(t)}function Tt(e,t){var n;t===void 0&&(t=[]);const o=At(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),r=j(o);return i?t.concat(r,r.visualViewport||[],Oe(o)?o:[]):t.concat(o,Tt(o))}function ft(e,t,n){let o;if(t==="viewport")o=function(i,r){const a=j(i),c=ne(i),s=a.visualViewport;let p=c.clientWidth,y=c.clientHeight,u=0,v=0;if(s){p=s.width,y=s.height;const h=rt();(!h||h&&r==="fixed")&&(u=s.offsetLeft,v=s.offsetTop)}return{width:p,height:y,x:u,y:v}}(e,n);else if(t==="document")o=function(i){const r=ne(i),a=Qe(i),c=i.ownerDocument.body,s=ke(r.scrollWidth,r.clientWidth,c.scrollWidth,c.clientWidth),p=ke(r.scrollHeight,r.clientHeight,c.scrollHeight,c.clientHeight);let y=-a.scrollLeft+Rt(i);const u=-a.scrollTop;return K(c).direction==="rtl"&&(y+=ke(r.clientWidth,c.clientWidth)-s),{width:s,height:p,x:y,y:u}}(ne(e));else if(ee(t))o=function(i,r){const a=Ce(i,!0,r==="fixed"),c=a.top+i.clientTop,s=a.left+i.clientLeft,p=X(i)?ve(i):le(1);return{width:i.clientWidth*p.x,height:i.clientHeight*p.y,x:s*p.x,y:c*p.y}}(t,n);else{const i=_t(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return qe(o)}function Lt(e,t){const n=ge(e);return!(n===t||!ee(n)||Je(n))&&(K(n).position==="fixed"||Lt(n,t))}function qt(e,t,n){const o=X(t),i=ne(t),r=n==="fixed",a=Ce(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const s=le(0);if(o||!o&&!r)if((re(t)!=="body"||Oe(i))&&(c=Qe(t)),X(t)){const p=Ce(t,!0,r,t);s.x=p.x+t.clientLeft,s.y=p.y+t.clientTop}else i&&(s.x=Rt(i));return{x:a.left+c.scrollLeft-s.x,y:a.top+c.scrollTop-s.y,width:a.width,height:a.height}}function dt(e,t){return X(e)&&K(e).position!=="fixed"?t?t(e):e.offsetParent:null}function pt(e,t){const n=j(e);if(!X(e))return n;let o=dt(e,t);for(;o&&It(o)&&K(o).position==="static";)o=dt(o,t);return o&&(re(o)==="html"||re(o)==="body"&&K(o).position==="static"&&!ot(o))?n:o||function(i){let r=ge(i);for(;X(r)&&!Je(r);){if(ot(r))return r;r=ge(r)}return null}(e)||n}const zt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=X(n),r=ne(n);if(n===r)return t;let a={scrollLeft:0,scrollTop:0},c=le(1);const s=le(0);if((i||!i&&o!=="fixed")&&((re(n)!=="body"||Oe(r))&&(a=Qe(n)),X(n))){const p=Ce(n);c=ve(n),s.x=p.x+n.clientLeft,s.y=p.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-a.scrollLeft*c.x+s.x,y:t.y*c.y-a.scrollTop*c.y+s.y}},getDocumentElement:ne,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const r=[...n==="clippingAncestors"?function(s,p){const y=p.get(s);if(y)return y;let u=Tt(s).filter(g=>ee(g)&&re(g)!=="body"),v=null;const h=K(s).position==="fixed";let f=h?ge(s):s;for(;ee(f)&&!Je(f);){const g=K(f),w=ot(f);w||g.position!=="fixed"||(v=null),(h?!w&&!v:!w&&g.position==="static"&&v&&["absolute","fixed"].includes(v.position)||Oe(f)&&!w&&Lt(s,f))?u=u.filter(S=>S!==f):v=g,f=ge(f)}return p.set(s,u),u}(t,this._c):[].concat(n),o],a=r[0],c=r.reduce((s,p)=>{const y=ft(t,p,i);return s.top=ke(y.top,s.top),s.right=ut(y.right,s.right),s.bottom=ut(y.bottom,s.bottom),s.left=ke(y.left,s.left),s},ft(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:pt,getElementRects:async function(e){let{reference:t,floating:n,strategy:o}=e;const i=this.getOffsetParent||pt,r=this.getDimensions;return{reference:qt(t,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return Et(e)},getScale:ve,isElement:ee,isRTL:function(e){return getComputedStyle(e).direction==="rtl"}},mt=(e,t,n)=>{const o=new Map,i={platform:zt,...n},r={...i.platform,_c:o};return Ot(e,t,{...i,platform:r})};/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const Xt="react-tooltip-core-styles",Jt="react-tooltip-base-styles";function yt({css:e,id:t=Jt,type:n="base",ref:o}){var i,r;if(n==="core"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_CORE_STYLES)||n!=="core"&&typeof process<"u"&&(!((r=process==null?void 0:process.env)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;n==="core"&&(t=Xt),o||(o={});const{insertAt:a}=o;if(!e||typeof document>"u"||document.getElementById(t))return;const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css",a==="top"&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}const ht=(e,t,n)=>{let o=null;return function(...i){const r=()=>{o=null,n||e.apply(this,i)};n&&!o&&(e.apply(this,i),o=setTimeout(r,t)),n||(o&&clearTimeout(o),o=setTimeout(r,t))}},Qt="DEFAULT_TOOLTIP_ID",Zt={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Gt=m.createContext({getTooltipData:()=>Zt});function $t(e=Qt){return m.useContext(Gt).getTooltipData(e)}const Kt=typeof window<"u"?m.useLayoutEffect:m.useEffect,Ut=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(n=>{const o=t.getPropertyValue(n);return o==="auto"||o==="scroll"})},vt=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(Ut(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},gt=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:o="top",offset:i=10,strategy:r="absolute",middlewares:a=[Mt(Number(i)),Bt(),Ft({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(t===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const s=a;return n?(s.push(Nt({element:n,padding:5})),mt(e,t,{placement:o,strategy:r,middleware:s}).then(({x:p,y,placement:u,middlewareData:v})=>{var h,f;const g={left:`${p}px`,top:`${y}px`,border:c},{x:w,y:S}=(h=v.arrow)!==null&&h!==void 0?h:{x:0,y:0},x=(f={top:"bottom",right:"left",bottom:"top",left:"right"}[u.split("-")[0]])!==null&&f!==void 0?f:"bottom",E=c&&{top:{borderBottom:c,borderRight:c},right:{borderBottom:c,borderLeft:c},bottom:{borderTop:c,borderLeft:c},left:{borderTop:c,borderRight:c}}[u.split("-")[0]];let L=0;if(c){const A=`${c}`.match(/(\d+)px/);L=A!=null&&A[1]?Number(A[1]):1}return{tooltipStyles:g,tooltipArrowStyles:{left:w!=null?`${w}px`:"",top:S!=null?`${S}px`:"",right:"",bottom:"",...E,[x]:`-${4+L}px`},place:u}})):mt(e,t,{placement:"bottom",strategy:r,middleware:s}).then(({x:p,y,placement:u})=>({tooltipStyles:{left:`${p}px`,top:`${y}px`},tooltipArrowStyles:{},place:u}))};var Yt="core-styles-module_tooltip__3vRRp",eo="core-styles-module_fixed__pcSol",to="core-styles-module_arrow__cvMwQ",oo="core-styles-module_noArrow__xock6",no="core-styles-module_clickable__ZuTTB",ro="core-styles-module_show__Nt9eE",Ye={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const lo=({id:e,className:t,classNameArrow:n,variant:o="dark",anchorId:i,anchorSelect:r,place:a="top",offset:c=10,events:s=["hover"],openOnClick:p=!1,positionStrategy:y="absolute",middlewares:u,wrapper:v,delayShow:h=0,delayHide:f=0,float:g=!1,hidden:w=!1,noArrow:S=!1,clickable:x=!1,closeOnEsc:E=!1,closeOnScroll:L=!1,closeOnResize:A=!1,style:M,position:F,afterShow:J,afterHide:Q,content:B,contentWrapperRef:R,isOpen:$,setIsOpen:T,activeAnchor:_,setActiveAnchor:O,border:W,opacity:Z})=>{const N=m.useRef(null),te=m.useRef(null),H=m.useRef(null),V=m.useRef(null),[we,ie]=m.useState(a),[He,be]=m.useState({}),[Ze,xe]=m.useState({}),[G,Ee]=m.useState(!1),[Pe,ce]=m.useState(!1),Be=m.useRef(!1),de=m.useRef(null),{anchorRefs:Me,setActiveAnchor:Se}=$t(e),_e=m.useRef(!1),[oe,Re]=m.useState([]),se=m.useRef(!1),pe=p||s.includes("click");Kt(()=>(se.current=!0,()=>{se.current=!1}),[]),m.useEffect(()=>{if(!G){const l=setTimeout(()=>{ce(!1)},150);return()=>{clearTimeout(l)}}return()=>null},[G]);const q=l=>{se.current&&(l&&ce(!0),setTimeout(()=>{se.current&&(T==null||T(l),$===void 0&&Ee(l))},10))};m.useEffect(()=>{if($===void 0)return()=>null;$&&ce(!0);const l=setTimeout(()=>{Ee($)},10);return()=>{clearTimeout(l)}},[$]),m.useEffect(()=>{G!==Be.current&&(Be.current=G,G?J==null||J():Q==null||Q())},[G]);const U=(l=f)=>{V.current&&clearTimeout(V.current),V.current=setTimeout(()=>{_e.current||q(!1)},l)},Ve=l=>{var d;if(!l)return;const b=(d=l.currentTarget)!==null&&d!==void 0?d:l.target;if(!(b!=null&&b.isConnected))return O(null),void Se({current:null});h?(H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{q(!0)},h)):q(!0),O(b),Se({current:b}),V.current&&clearTimeout(V.current)},Ae=()=>{x?U(f||100):f?U():q(!1),H.current&&clearTimeout(H.current)},me=({x:l,y:d})=>{gt({place:a,offset:c,elementReference:{getBoundingClientRect:()=>({x:l,y:d,width:0,height:0,top:d,left:l,right:l,bottom:d})},tooltipReference:N.current,tooltipArrowReference:te.current,strategy:y,middlewares:u,border:W}).then(b=>{Object.keys(b.tooltipStyles).length&&be(b.tooltipStyles),Object.keys(b.tooltipArrowStyles).length&&xe(b.tooltipArrowStyles),ie(b.place)})},Fe=l=>{if(!l)return;const d=l,b={x:d.clientX,y:d.clientY};me(b),de.current=b},Ie=l=>{Ve(l),f&&U()},ae=l=>{var d;[document.querySelector(`[id='${i}']`),...oe].some(b=>b==null?void 0:b.contains(l.target))||!((d=N.current)===null||d===void 0)&&d.contains(l.target)||(q(!1),H.current&&clearTimeout(H.current))},Te=ht(Ve,50,!0),je=ht(Ae,50,!0);m.useEffect(()=>{var l,d;const b=new Set(Me);oe.forEach(Y=>{b.add({current:Y})});const z=document.querySelector(`[id='${i}']`);z&&b.add({current:z});const k=()=>{q(!1)},C=vt(_),P=vt(N.current);L&&(window.addEventListener("scroll",k),C==null||C.addEventListener("scroll",k),P==null||P.addEventListener("scroll",k)),A&&window.addEventListener("resize",k);const ye=Y=>{Y.key==="Escape"&&q(!1)};E&&window.addEventListener("keydown",ye);const ue=[];pe?(window.addEventListener("click",ae),ue.push({event:"click",listener:Ie})):(ue.push({event:"mouseenter",listener:Te},{event:"mouseleave",listener:je},{event:"focus",listener:Te},{event:"blur",listener:je}),g&&ue.push({event:"mousemove",listener:Fe}));const lt=()=>{_e.current=!0},it=()=>{_e.current=!1,Ae()};return x&&!pe&&((l=N.current)===null||l===void 0||l.addEventListener("mouseenter",lt),(d=N.current)===null||d===void 0||d.addEventListener("mouseleave",it)),ue.forEach(({event:Y,listener:Le})=>{b.forEach(Ge=>{var $e;($e=Ge.current)===null||$e===void 0||$e.addEventListener(Y,Le)})}),()=>{var Y,Le;L&&(window.removeEventListener("scroll",k),C==null||C.removeEventListener("scroll",k),P==null||P.removeEventListener("scroll",k)),A&&window.removeEventListener("resize",k),pe&&window.removeEventListener("click",ae),E&&window.removeEventListener("keydown",ye),x&&!pe&&((Y=N.current)===null||Y===void 0||Y.removeEventListener("mouseenter",lt),(Le=N.current)===null||Le===void 0||Le.removeEventListener("mouseleave",it)),ue.forEach(({event:Ge,listener:$e})=>{b.forEach(kt=>{var Ke;(Ke=kt.current)===null||Ke===void 0||Ke.removeEventListener(Ge,$e)})})}},[Pe,Me,oe,E,s]),m.useEffect(()=>{let l=r??"";!l&&e&&(l=`[data-tooltip-id='${e}']`);const d=new MutationObserver(b=>{const z=[];b.forEach(k=>{if(k.type==="attributes"&&k.attributeName==="data-tooltip-id"&&k.target.getAttribute("data-tooltip-id")===e&&z.push(k.target),k.type==="childList"&&(_&&[...k.removedNodes].some(C=>{var P;return!!(!((P=C==null?void 0:C.contains)===null||P===void 0)&&P.call(C,_))&&(ce(!1),q(!1),O(null),H.current&&clearTimeout(H.current),V.current&&clearTimeout(V.current),!0)}),l))try{const C=[...k.addedNodes].filter(P=>P.nodeType===1);z.push(...C.filter(P=>P.matches(l))),z.push(...C.flatMap(P=>[...P.querySelectorAll(l)]))}catch{}}),z.length&&Re(k=>[...k,...z])});return d.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{d.disconnect()}},[e,r,_]);const D=()=>{F?me(F):g?de.current&&me(de.current):gt({place:a,offset:c,elementReference:_,tooltipReference:N.current,tooltipArrowReference:te.current,strategy:y,middlewares:u,border:W}).then(l=>{se.current&&(Object.keys(l.tooltipStyles).length&&be(l.tooltipStyles),Object.keys(l.tooltipArrowStyles).length&&xe(l.tooltipArrowStyles),ie(l.place))})};m.useEffect(()=>{D()},[G,_,B,M,a,c,y,F]),m.useEffect(()=>{if(!(R!=null&&R.current))return()=>null;const l=new ResizeObserver(()=>{D()});return l.observe(R.current),()=>{l.disconnect()}},[B,R==null?void 0:R.current]),m.useEffect(()=>{var l;const d=document.querySelector(`[id='${i}']`),b=[...oe,d];_&&b.includes(_)||O((l=oe[0])!==null&&l!==void 0?l:d)},[i,oe,_]),m.useEffect(()=>()=>{H.current&&clearTimeout(H.current),V.current&&clearTimeout(V.current)},[]),m.useEffect(()=>{let l=r;if(!l&&e&&(l=`[data-tooltip-id='${e}']`),l)try{const d=Array.from(document.querySelectorAll(l));Re(d)}catch{Re([])}},[e,r]);const I=!w&&B&&G&&Object.keys(He).length>0;return Pe?he.createElement(v,{id:e,role:"tooltip",className:ct("react-tooltip",Yt,Ye.tooltip,Ye[o],t,`react-tooltip__place-${we}`,{[ro]:I,[eo]:y==="fixed",[no]:x}),style:{...M,...He,opacity:Z!==void 0&&I?Z:void 0},ref:N},B,he.createElement(v,{className:ct("react-tooltip-arrow",to,Ye.arrow,n,{[oo]:S}),style:Ze,ref:te})):null},io=({content:e})=>he.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),ao=({id:e,anchorId:t,anchorSelect:n,content:o,html:i,render:r,className:a,classNameArrow:c,variant:s="dark",place:p="top",offset:y=10,wrapper:u="div",children:v=null,events:h=["hover"],openOnClick:f=!1,positionStrategy:g="absolute",middlewares:w,delayShow:S=0,delayHide:x=0,float:E=!1,hidden:L=!1,noArrow:A=!1,clickable:M=!1,closeOnEsc:F=!1,closeOnScroll:J=!1,closeOnResize:Q=!1,style:B,position:R,isOpen:$,border:T,opacity:_,setIsOpen:O,afterShow:W,afterHide:Z})=>{const[N,te]=m.useState(o),[H,V]=m.useState(i),[we,ie]=m.useState(p),[He,be]=m.useState(s),[Ze,xe]=m.useState(y),[G,Ee]=m.useState(S),[Pe,ce]=m.useState(x),[Be,de]=m.useState(E),[Me,Se]=m.useState(L),[_e,oe]=m.useState(u),[Re,se]=m.useState(h),[pe,q]=m.useState(g),[U,Ve]=m.useState(null),{anchorRefs:Ae,activeAnchor:me}=$t(e),Fe=D=>D==null?void 0:D.getAttributeNames().reduce((I,l)=>{var d;return l.startsWith("data-tooltip-")&&(I[l.replace(/^data-tooltip-/,"")]=(d=D==null?void 0:D.getAttribute(l))!==null&&d!==void 0?d:null),I},{}),Ie=D=>{const I={place:l=>{var d;ie((d=l)!==null&&d!==void 0?d:p)},content:l=>{te(l??o)},html:l=>{V(l??i)},variant:l=>{var d;be((d=l)!==null&&d!==void 0?d:s)},offset:l=>{xe(l===null?y:Number(l))},wrapper:l=>{var d;oe((d=l)!==null&&d!==void 0?d:u)},events:l=>{const d=l==null?void 0:l.split(" ");se(d??h)},"position-strategy":l=>{var d;q((d=l)!==null&&d!==void 0?d:g)},"delay-show":l=>{Ee(l===null?S:Number(l))},"delay-hide":l=>{ce(l===null?x:Number(l))},float:l=>{de(l===null?E:l==="true")},hidden:l=>{Se(l===null?L:l==="true")}};Object.values(I).forEach(l=>l(null)),Object.entries(D).forEach(([l,d])=>{var b;(b=I[l])===null||b===void 0||b.call(I,d)})};m.useEffect(()=>{te(o)},[o]),m.useEffect(()=>{V(i)},[i]),m.useEffect(()=>{ie(p)},[p]),m.useEffect(()=>{be(s)},[s]),m.useEffect(()=>{xe(y)},[y]),m.useEffect(()=>{Ee(S)},[S]),m.useEffect(()=>{ce(x)},[x]),m.useEffect(()=>{de(E)},[E]),m.useEffect(()=>{Se(L)},[L]),m.useEffect(()=>{q(g)},[g]),m.useEffect(()=>{var D;const I=new Set(Ae);let l=n;if(!l&&e&&(l=`[data-tooltip-id='${e}']`),l)try{document.querySelectorAll(l).forEach(C=>{I.add({current:C})})}catch{console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const d=document.querySelector(`[id='${t}']`);if(d&&I.add({current:d}),!I.size)return()=>null;const b=(D=U??d)!==null&&D!==void 0?D:me.current,z=new MutationObserver(C=>{C.forEach(P=>{var ye;if(!b||P.type!=="attributes"||!(!((ye=P.attributeName)===null||ye===void 0)&&ye.startsWith("data-tooltip-")))return;const ue=Fe(b);Ie(ue)})}),k={attributes:!0,childList:!1,subtree:!1};if(b){const C=Fe(b);Ie(C),z.observe(b,k)}return()=>{z.disconnect()}},[Ae,me,U,t,n]),m.useEffect(()=>{B!=null&&B.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),T&&!CSS.supports("border",`${T}`)&&console.warn(`[react-tooltip] "${T}" is not a valid \`border\`.`),B!=null&&B.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),_&&!CSS.supports("opacity",`${_}`)&&console.warn(`[react-tooltip] "${_}" is not a valid \`opacity\`.`)},[]);let ae=v;const Te=m.useRef(null);if(r){const D=r({content:N??null,activeAnchor:U});ae=D?he.createElement("div",{ref:Te,className:"react-tooltip-content-wrapper"},D):null}else N&&(ae=N);H&&(ae=he.createElement(io,{content:H}));const je={id:e,anchorId:t,anchorSelect:n,className:a,classNameArrow:c,content:ae,contentWrapperRef:Te,place:we,variant:He,offset:Ze,wrapper:_e,events:Re,openOnClick:f,positionStrategy:pe,middlewares:w,delayShow:G,delayHide:Pe,float:Be,hidden:Me,noArrow:A,clickable:M,closeOnEsc:F,closeOnScroll:J,closeOnResize:Q,style:B,position:R,isOpen:$,border:T,opacity:_,setIsOpen:O,afterShow:W,afterHide:Z,activeAnchor:U,setActiveAnchor:D=>Ve(D)};return he.createElement(lo,{...je})};yt({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),yt({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px;transform:rotate(45deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`});export{ao as q};
