import{r as l,m,c as b,F as x,j as n,p as C,n as g,_ as j}from"./index-f9e05c39.js";import{q as y}from"./react-tooltip.min-1e9f1413.js";const $=({question:i,color:r="#f1f3f5",size:p=30})=>{const e=l.useRef(m()).current;function a(){if(!i)return;const c=Object.entries(i).reduce((t,[o,s])=>{if(o==="question")return t+`${o}: ${s}
`;if(o==="options"){const d=s.map((f,u)=>`Option ${u+1}: ${f}`);return t+d.join(`
`)+`
`}return t},"");g(c),j.success("Question copied to clipboard",{style:{background:"#333",color:"#fff",fontSize:"13px",fontWeight:"600"}})}return b(x,{children:[n("button",{"data-tooltip-id":e,"data-tooltip-content":"Copy question to clipboard","data-tooltip-place":"top",onClick:a,children:n(C,{size:p,color:r})}),n(y,{id:e,style:{fontSize:"16px"},className:"hidden md:block"})]})};export{$ as B};
