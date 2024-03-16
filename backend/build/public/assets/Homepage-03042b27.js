import{u as k,p as R,x as v,r as h,b as C,y as E,a as m,j as e,F as O,v as T,z as Y,M as J,A as X,B as j,C as Z,D as ee,E as te,I as ne,q as z,J as se,K as q,H as oe,O as ie}from"./index-cdd8e374.js";import{B as Q,c as B}from"./Button-f92ed4d8.js";import{u as x,q as re,B as ae}from"./useKey-c33b5532.js";import{a as le,b as ce,d as ue,c as de,B as fe,Q as me}from"./QuestionLoader-593f09cb.js";import{u as ge}from"./user.service-b41c4c5e.js";import{s as pe}from"./config-2b6c6df4.js";import{E as xe}from"./ErrMsg-4db6d54d.js";import"./Modal-b498fae9.js";import"./useOutsideClick-0ffacc63.js";const he=()=>{const s=k(),t=R(),{language:r,numQuestions:o}=v(),[g,d]=h.useState(!1),{loggedInUser:p}=C();x("Enter",c),x("ArrowDown",f),x("ArrowUp",a);function c(){s(E("active"))}function a(){d(!1)}function f(){d(!0)}function y(){p&&t(`/profile/${p.id}`)}return m("div",{className:"flex flex-1 flex-col items-center gap-3 px-3",children:[e("h2",{className:"w-full text-center text-4xl font-bold text-gray-50",children:`Welcome to The ${r} Quiz!`}),e("h3",{className:"w-full text-center text-xl font-bold text-gray-50 ",children:`${o} question to test your ${r} mastery`}),o>0?e(Q,{onClickFn:c,className:B("mt-10 rounded-full bg-gray-600 px-8 py-6 text-3xl font-medium uppercase text-gray-100 transition-all duration-300",{"scale-110 bg-gray-800 text-gray-200":g}),children:"Let's start"}):m(O,{children:[e("p",{className:"mt-10 text-center text-2xl font-bold text-gray-50",children:"You have completed all the questions. Go to profile to reset the questions."}),e(Q,{onClickFn:y,className:"mt-10 rounded-full bg-gray-600 px-8 py-6 text-3xl font-medium uppercase text-gray-100 transition-all duration-300",children:"Go to Profile"})]})]})},ye=()=>{const{numQuestions:s,questionIdx:t,points:r,maxPossiblePoints:o,answerIdx:g}=v();return m("div",{className:"mb-16 grid grid-cols-2 gap-5 text-2xl",children:[e("progress",{value:t+ +(g!==null),max:s,className:"quiz-progress-bar col-span-full h-4 w-full"}),m("p",{children:["Question ",e("strong",{children:t+1}),"/",s]}),m("p",{className:"justify-self-end text-end",children:["Points ",e("strong",{children:r}),"/",o]})]})},we=()=>{const s=k(),{questions:t,isTimerOn:r,secondsPerQuestion:o}=v(),[g,d]=h.useState(t.length*o),p=h.useRef(null),c=Math.floor(g/60),a=g%60;function f(){p.current&&clearInterval(p.current)}return h.useEffect(()=>(s(T(!0)),()=>{s(T(!1))}),[s]),h.useEffect(()=>{function y(){p.current=setInterval(()=>{d(n=>n===0?(s(E("finished")),n):n-1)},1e3)}return r?y():f(),()=>{f()}},[r,s]),e("div",{className:"col-start-1 row-start-1 flex h-16 items-center justify-center justify-self-start rounded-[100px] border-2 border-gray-200 px-8 text-3xl text-gray-200",children:m("span",{children:[c<10&&"0",c,":",a<10&&"0",a]})})},ve=()=>{const s=k(),{isTimerOn:t}=v();function r(){s(T(!t))}const o=h.useRef(Y()).current;return m(O,{children:[e("button",{onClick:r,"data-tooltip-id":o,"data-tooltip-content":"Toggle timer","data-tooltip-place":"top",children:t?e(J,{color:"#f1f3f5",className:"text-5xl md:text-4xl"}):e(X,{color:"#f1f3f5",className:"text-5xl md:text-4xl"})}),e(re,{id:o,style:{fontSize:"16px"},className:"hidden md:block"})]})},M=h.createContext(void 0);function Ne({children:s}){const t=k(),r=R(),{loggedInUser:o}=C(),{questions:g,questionIdx:d,numQuestions:p,answerIdx:c,points:a,highScore:f,isTimerOn:y}=v(),[n,u]=h.useState(""),l=g[d],w=o==null?void 0:o.roles.includes("admin"),S=c!==null,N=d===p-1;x("Enter",U,{},[n]),x("ArrowRight",L,{},[n]),x("ArrowLeft",$,{},[n]),x("ArrowUp",H,{},[c,n]),x("ArrowDown",D,{},[c,n]),x("e",W,{},[l.id,w]),x("a",_,{},[w,l.isRevised]),x("m",G,{},[w,l.isMarkedToBeRevised]),x("t",K,{},[y]);function L(){u("next")}function $(){u("quit")}function H(){if(c)return;let i="";const b=l.options.length;if(n==="")i="option-1";else if(n.includes("option")){const A=Number(n.split("-")[1]);A===1?i=`option-${b}`:i=`option-${A-1}`}else n?i=`option-${b+1}`:i="option-1";u(i)}function D(){if(c)return;let i="";const b=l.options.length;if(n.includes("option")){const A=Number(n.split("-")[1]);A===b?i="option-1":i=`option-${A+1}`}else i="option-1";u(i)}function U(){if(n==="next")P();else if(n==="quit")F();else if(n.includes("option")){const i=Number(n.split("-")[1]);I(i-1)}u("")}function F(){t(j())}function I(i){t(Z(i)),l.correctOption===i&&(t(ee(l.points)),o&&ge.recordUserCorrectAnswer(l))}function P(){if(c===null)return;d>=0&&d<p-1?t(te()):N&&(t(E("finished")),a>f&&t(ne(a)))}function K(){t(T(!y))}function W(){w&&(t(T(!1)),r(`question-edit/${l.id}`))}function _(){if(!w)return;const i={...l,isRevised:!l.isRevised};t(z(i,"approve"))}function G(){if(!w)return;const i={...l,isMarkedToBeRevised:!l.isMarkedToBeRevised};t(z(i,"mark"))}h.useEffect(()=>{function i(){n!==""&&u("")}return document.addEventListener("mousemove",i),()=>{document.removeEventListener("mousemove",i)}},[n]);const V={focusedBtn:n,question:l,isNextBtnShown:S,isLastQuestionIdx:N,onPassQuestion:P,handleQuitClick:F,onOptionSelection:I};return e(M.Provider,{value:V,children:s})}function Qe(){const s=h.useContext(M);if(s===void 0)throw new Error("useQuestion must be used within a QuestionProvider");return s}const be=()=>{const{loggedInUser:s}=C(),t=s==null?void 0:s.roles.includes("admin"),{focusedBtn:r,question:o,isNextBtnShown:g,isLastQuestionIdx:d,onPassQuestion:p,handleQuitClick:c,onOptionSelection:a}=Qe(),{answerIdx:f}=v();return o?m("section",{className:"w-full max-w-[575px] px-14",children:[e(ye,{}),m("div",{children:[e("div",{className:"question-header",children:e("h4",{className:"mb-16 text-4xl font-bold text-gray-50 md:text-3xl",children:o.question})}),e("ul",{className:"mb-4 flex flex-col gap-4",children:o.options.map((y,n)=>{const u=f!==null,l=f===n,w=u&&o.correctOption===n;return e(Q,{className:B("option-display w-full cursor-pointer rounded-full bg-gray-600 px-10 py-5 text-left text-3xl transition-all duration-300",{"translate-x-10":l,correct:w,wrong:u&&!w,"translate-x-5 !bg-gray-800 text-gray-200":r===`option-${n+1}`,"!cursor-not-allowed":f!==null}),onClickFn:()=>a(n),disabled:u,children:y},n)})})]}),m(se,{className:"grid grid-cols-2 grid-rows-2	items-center gap-4",children:[e(we,{}),g&&e(Q,{onClickFn:p,className:B("col-start-2 row-start-1 flex h-20 items-center justify-center justify-self-end rounded-full bg-gray-600 px-7 text-3xl font-medium leading-none tracking-wide text-gray-100 transition-all duration-300 hover:scale-110 md:h-14 md:text-2xl",{"scale-110 bg-gray-800 text-gray-200":r==="next"}),children:e("span",{children:d?"Finish":"Next"})}),e(Q,{onClickFn:c,className:B("col-start-1 row-start-2 flex h-20 items-center justify-center justify-self-start rounded-full bg-gray-600 px-7 text-3xl font-medium leading-none tracking-wide text-gray-100 transition-all duration-300 hover:scale-110 md:h-14 md:text-2xl",{"scale-110 bg-gray-800 text-gray-200":r==="quit"}),children:e("span",{children:"Quit"})}),t&&m("div",{className:"col-start-2 row-start-2 flex  items-center justify-center gap-3 justify-self-end",children:[e(ve,{}),e(ae,{question:o}),e(le,{question:o}),e(ce,{question:o}),e(ue,{question:o}),e(de,{questionId:o.id}),e(fe,{question:o,isToggled:!0})]})]})]}):null},Be=()=>{const s=k(),{language:t,level:r,page:o,points:g,maxPossiblePoints:d,highScore:p,numQuestions:c}=v(),a=g/d*100,[f,y]=h.useState("none"),n=h.useRef("none");let u;a===100?u="🥳":a>=80?u="😎":a>=60?u="🙂":u="😞";function l(){s(q({language:t,level:r,page:o+1,limit:c}))}function w(){s(j())}x("ArrowRight",()=>{y(N=>"restart")}),x("ArrowLeft",()=>{y(N=>"newQuiz")}),x("Enter",()=>{const N=n.current;N==="newQuiz"?l():N==="restart"&&w()});function S(){y(N=>"none")}return h.useEffect(()=>(document.addEventListener("mousemove",S),()=>{document.removeEventListener("mousemove",S)}),[]),h.useEffect(()=>{n.current=f},[f]),m("section",{className:"flex flex-col items-center gap-12 px-4",children:[m("p",{className:"rounded-full px-6 py-8 text-center text-4xl font-medium",style:{background:"var(--color-theme)"},children:[e("span",{className:"mr-[4px] text-4xl",children:u}),"You scored ",e("strong",{children:g})," out of"," ",e("strong",{children:d})," points. (",Math.ceil(a),"%)"]}),m("p",{className:"text-center text-3xl",children:["(Highscore: ",p," points)"]}),m("div",{className:"flex items-center justify-center gap-5",children:[e(Q,{className:B("cursor-pointer rounded-full bg-gray-600 px-10 py-7 text-3xl font-medium text-gray-100 transition-all duration-300",{"scale-110 bg-gray-800 text-gray-200":f==="newQuiz"}),onClickFn:l,children:"Start New Quiz"}),e(Q,{className:B("cursor-pointer rounded-full bg-gray-600 px-10 py-7 text-3xl font-medium text-gray-100 transition-all duration-300",{"scale-110 bg-gray-800 text-gray-200":f==="restart"}),onClickFn:w,children:"Restart"})]})]})},ke=()=>{const{language:s}=v(),t=pe.programmingLanguages[s];if(!t)return null;const{img:r}=t;return m(oe,{className:"mb-12 mt-6 flex w-full items-center justify-center gap-5 px-10",children:[e("h1",{className:"text-6xl font-bold text-gray-50",children:"DevQuiz"}),e("img",{src:r,alt:"logo",className:"h-20 w-20 object-contain"})]})},Se=({children:s,className:t})=>e("main",{className:t,children:s}),ze=()=>{const s=k(),{loggedInUser:t}=C(),{status:r,language:o,level:g,page:d,questions:p}=v();function c(a){switch(a){case"loading":return e(me,{});case"error":return e(xe,{msg:"There was an error fetching questions. Please try again later."});case"ready":return e(he,{});case"active":return e(Ne,{children:e(be,{})});case"finished":return e(Be,{});default:return e(O,{})}}return h.useEffect(()=>{if(p.length>0)return;function a(){if(!t)s(q({language:o,level:g,page:d}));else{const{language:f,level:y,numQuestions:n,secondsPerQuestion:u}=t.quizSettings;s(q({language:f,level:y,limit:n,secondsPerQuestion:u}))}}return a(),()=>{a()}},[t,o,g,d,s,p.length]),m(Se,{className:"flex w-full flex-1 flex-col items-center pb-24",children:[e(ke,{}),c(r),e(ie,{})]})};export{ze as default};
