import{r as t,j as b,a0 as N,Y as L,a as H,F as x}from"./index-6de6e250.js";import{u as B}from"./useOutsideClick-3309492b.js";import{M as D}from"./Button-7d124a9b.js";function P(i,o){var a;const e=(a=i.current)==null?void 0:a.getBoundingClientRect();if(!e)return;const n=window.innerHeight-e.top<o,c={top:e.bottom+e.height/2+window.scrollY},u={bottom:window.innerHeight-e.top+e.height/2};return{isModalAbove:n,position:{...n?u:c,left:e.left+e.width/2+window.scrollX},rect:e}}const w=t.createContext(void 0),f=({children:i,externalStateControl:o,onClose:e,onOpen:s,onAfterClose:n})=>{const[c,u]=t.useState(""),[a,M]=t.useState(null),[h,l]=t.useState(null),[r,p]=t.useState(!1),d=()=>{if(e==null||e(),o){o.setOpenedModalName(""),n==null||n();return}u(""),n==null||n()},v=E=>{if(s==null||s(),o){o.setOpenedModalName(E);return}u(E)},{debouncedFunc:m,cancel:g}=N(()=>{d()},500),O={openedModalName:(o==null?void 0:o.openedModalName)||c,close:d,open:v,position:a,setPosition:M,isModalAbove:r,setIsModalAbove:p,modalHoverGuardZone:h,setModalHoverGuardZone:l,debouncedClose:m,cancelDebouncedClose:g};return b(w.Provider,{value:O,children:i})},k=({children:i,modalName:o,className:e,setPositionByRef:s=!1,modalHeight:n=0,externalControlFunc:c})=>{const{open:u,setPosition:a,setIsModalAbove:M}=t.useContext(w),h=t.useRef(null),l=t.useCallback(()=>{const p=P(h,n),{isModalAbove:d,position:v}=p;M(d),a(v)},[n,M,a]),r=()=>{if(s&&l(),c)return c();u(o)};return t.useEffect(()=>{if(!s)return;const p=["wheel","scroll","resize"];return p.forEach(d=>{window.addEventListener(d,l)}),()=>{p.forEach(d=>{window.removeEventListener(d,l)})}},[s,l]),t.cloneElement(i,{onClick:r,ref:h,className:e})},G=({children:i,onClickFn:o,className:e})=>{const{close:s}=t.useContext(w);return t.cloneElement(i,{onClick:()=>{o==null||o(),s()},className:e})},I=({children:i,modalName:o,modalHeight:e=0})=>{const{open:s,setPosition:n,setIsModalAbove:c,setModalHoverGuardZone:u,debouncedClose:a,cancelDebouncedClose:M}=t.useContext(w),h=t.useRef(null),{debouncedFunc:l,cancel:r}=N(p,500);function p(){const m=P(h,e);m&&(n(m.position),c(m.isModalAbove),u({height:m.rect.height,width:m.rect.width}),s(o))}function d(){M(),l()}function v(){r(),a()}return b("div",{className:"modal-hover-open",ref:h,onMouseEnter:d,onMouseLeave:v,children:i})},Z=({children:i,name:o,className:e,elementId:s="root",style:n={},hoverControl:c=!1})=>{const{openedModalName:u,open:a,close:M,position:h,isModalAbove:l,modalHoverGuardZone:r,debouncedClose:p,cancelDebouncedClose:d}=t.useContext(w),{outsideClickRef:v}=B(M);function m(){d(),a(o)}function g(){p()}return o!==u?null:L.createPortal(H(x,{children:[b(D,{onClickFn:M,darkMode:!0}),H("section",{className:e,style:{...n,...h},ref:v,onMouseEnter:()=>c&&m(),onMouseLeave:()=>c&&g(),"data-testid":"modal-window",children:[i,c&&r&&b("div",{className:"modal-hover-guard-zone",style:{top:l?"100%":`-${r.height/2}px`,height:`${r.height/2}px`||"10%",width:`${r.width}px`||"10%"}})]})]}),document.getElementById(s))};f.OpenBtn=k;f.Window=Z;f.CloseBtn=G;f.ModalHoverOpen=I;export{f as M};
