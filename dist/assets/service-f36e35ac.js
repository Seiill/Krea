import{G as C,p as t,v as e,j as o,r as c,_ as X,s as y,f as k,u as H,q as m,F as q}from"./index-1ae8889f.js";import{m as u,t as f}from"./Responsive-64219d17.js";import{u as J,C as I}from"./index.esm-1d6c0cb5.js";import{s as K}from"./ScrollToTop-e4b609f8.js";function U(n){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(n)}const N=t.nav`
    position: sticky;
    top: 70px;
    display: flex;
    min-height: 60px;
    width: 100%;
    max-width: 1280px;
    justify-content: space-around;
    z-index: 2;

  ${u({flexWrap:"wrap",rowGap:"1rem"})}
`,L=t.button`
width: 23%;
height: 2.5rem;
font-family: 'DINAlternate';
  background-color: ${e.bgColor};
  border: none;
  color: ${e.primaryColor};
  border-radius: 0 0 15px 15px;
  transition: all 0.3s;

  &:hover {
    color: ${e.secondColor};
    font-weight: ${e.mediumBoldFont};
    border: none;
    transform: scale(1.05);
   
  }
  ${u({minWidth:"150px"})}
`;t.div`
  position: relative;
`;t.button`
  width: 100%;
  height: 2.5rem;
  font-family: 'DINAlternate';
  background-color: ${e.bgColor};
  border: none;
  color: ${e.primaryColor};
  border-radius: 0 0 15px 15px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  &:hover {
    color: ${e.secondColor};
    font-weight: ${e.mediumBoldFont};
    border: none;
    transform: scale(1.05);
  }
`;t.h1`

margin-top: 4rem;
color: ${e.hoverPrimaryDarkColor};
`;const M=t.h3`
color: ${e.hoverPrimaryDarkColor};
/* font-family: 'DINAlternate'; */
position: absolute;
    bottom: 100px;
    right: 170px;
    font-size: 1.2rem;

    ${u({right:"15px",bottom:"104px",textWrap:"balance",textAlign:"center",margin:"0 2px"})}
    ${f({right:"35px",bottom:"104px",textWrap:"balance",textAlign:"center",margin:"0 2px"})}
`;t.h2`
color: ${e.hoverPrimaryDarkColor};
`;const Me=t.p`
color: ${e.hoverPrimaryDarkColor};
font-weight: ${e.regularFont};
padding: 2rem .5rem;
`,Pe=t.div``,Ae=t.figure`
  width: 98%;
  ${u({height:"auto"})}
`,Be=t.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`,Ee=t.button`

width: fit-content;
padding: 1rem 3rem; 
background-color: ${e.secondColor};
border: none;
text-align: center;
color: ${e.bgColor};
font-weight: ${e.boldFont};
cursor: pointer;
transition: all .3s ease-in-out;
border-radius: 20px;
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
${M}, &::after{
  transition: inherit;
}
`,_e=t.h1`
`;t.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative; 
`;const Ve=t.img`
  width: 100%;
  object-fit: cover;
  ${f({margin:"auto !important",height:"auto",objectPosition:"center"})}
`,We=t.video`
  width: 100%;
  min-height: 515px;
  object-position: center;
  object-fit: cover;

  ${f({height:"auto",objectPosition:"center"})}
`,Ge=t.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 40px;
  display: grid;
  align-items: center;
  justify-items: stretch;
  justify-content: space-evenly;
  position: relative;
  ${u({gridTemplateColumns:"1fr",height:"100%"})}
 
`,Re=t.div`
display: grid;
  grid-template-columns:  1fr 2fr;
max-height: 520px;
overflow: hidden;
gap: 2px; 
  justify-items: center;

  ${f({gridTemplateColumns:"1fr",gap:"0px",margin:"0 auto",overflow:"hidden",maxHeight:"100%"})}
`;t.div`
position: absolute;
z-index: 1;
display: flex;
top: calc(50% - 50px);
width: 98%;
justify-content: space-between;
margin: 0 10px;
font-weight: bold;
`;t.nav`
position: absolute;
top: 25%;
left: 25%;
${u({display:"none"})}
`;t.button`
border: none;
font-size: ${e.smallFont};
font-weight: ${e.regularFont};
color: ${e.primaryColor};
background-color: transparent;
text-decoration: underline;
padding: 1rem;
max-width: 12rem;
min-width: 6rem;
transition: all 0.3s ease-in-out;

&:hover{
  color: ${e.hoverSecondaryDarkColor};
  background-color: ${e.hoverSecondaryLightColor};
  border: solid 2px ${e.hoverSecondaryDarkColor};
  border-radius: 20px;
  text-decoration: none;
  font-weight: ${e.boldFont};
}
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
${M}, &::after{
  transition: inherit;
}
`;t.ul`
list-style-type: none;
display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
`;t.li`
`;const Qe=t.section`
position: relative;
width: 100%;
max-width: 1280px;
margin: auto;
`,Ye=t.section`
width: 90%;
margin: 0 auto;
`,Z=({services:n,onSelectService:i})=>o.jsx(N,{children:n.flatMap(a=>a.items).map(a=>o.jsx(L,{onClick:()=>i(a.id),children:a.title},a.id))});function ee(n){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}const oe=({services:n,onSelectService:i})=>{const[a,d]=c.useState(!1),g=()=>{d(!a)},h=p=>{i(p),d(!1)};return o.jsxs(te,{children:[o.jsxs(ne,{onClick:g,children:["Ver Servicios ",o.jsx(ee,{})]}),a&&o.jsx(N,{children:n.flatMap(p=>p.items).map(p=>o.jsx(L,{onClick:()=>h(p.id),children:p.title},p.id))})]})},te=t.div`
width: 100%;
display: flex;
position: fixed;
z-index: 12;
top: 70px;
row-gap: 1.2rem;
flex-direction: column;
align-items: center;
background-color: ${e.bgColor};

`,ne=t.button`
  width: fit-content;
  height: 2.5rem;
  font-family: 'DINAlternate';
  background-color: ${e.secondColor};
  border: none;
  color: ${e.bgColor};
  border-radius: 15px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.5rem;
  font-weight: ${e.boldFont};
  font-size: ${e.smallFont};

  &:hover {
    color: ${e.primaryColor};
    font-weight: ${e.mediumBoldFont};
    border: none;
    transform: scale(1.05);
  }
`,re=c.lazy(()=>X(()=>import("./showServices-8a55591e.js"),["assets/showServices-8a55591e.js","assets/index-1ae8889f.js","assets/index-398a30e3.css","assets/mockup-two-jedan-80-4595cab1.js","assets/Responsive-64219d17.js","assets/index.esm-1d6c0cb5.js","assets/ScrollToTop-e4b609f8.js"])),ie=()=>{const[n,i]=c.useState(null),a=d=>{const g=y.flatMap(h=>h.items).find(h=>h.id===d);g?i(g):console.error("No se encontró ningún servicio con el ID:",d)};return o.jsxs(o.Fragment,{children:[o.jsx(se,{children:o.jsx(Z,{services:y,onSelectService:a})}),o.jsx(ae,{children:o.jsx(oe,{services:y,onSelectService:a})}),o.jsx(c.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(re,{selectedService:n})})]})},se=t.div`
display: block;
  ${f({display:"none"})}
`,ae=t.div`

display: none;
${f({display:"block"})}
`;function le(n){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"}},{tag:"path",attr:{d:"M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(n)}const ce=k`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,de=k`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`,pe=t.div`
  width: fit-content;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: ${e.hoverSecondaryDarkColor};
  font-weight: ${e.boldFont};
  padding: 10px 20px;
  border-radius: 10px;
  border: solid 1px ${e.primaryColor};
  visibility: ${n=>n.$visible?"visible":"hidden"};
  animation: ${n=>n.$visible?ce:de} 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: ${e.mediumBoldFont};
  position: relative; 
background-color:  ${e.bgColor} ;
`,me=({message:n,visible:i,onClose:a})=>(c.useEffect(()=>{if(i){const d=setTimeout(()=>{a()},2e3);return()=>clearTimeout(d)}},[i,a]),o.jsxs(pe,{$visible:i,children:[o.jsx(le,{})," ",n]}));t.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${({show:n})=>n?"block":"none"};
  `;const ue=t.span`
display: flex;
width: 100%;
color: ${e.primaryColor};
padding: 7rem 0;
flex-direction: column;
align-items: center;
row-gap: 2rem;
${u({padding:"8rem 0"})}
`,he=t.p`
text-wrap: balance;
font-size: 1.4rem;
font-weight: ${e.boldFont};
text-align: center;
width: 70%;
margin: auto;
${u({width:"70%"})}
`;t.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
    background-color: ${e.bgColor};
    padding: 20px;
    border-radius: 10px;
  `;t.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${e.hoverPrimaryDarkColor};
  `;t.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    
  `;const ge=t.div`
    font-size: 2rem;
    color: black;
    margin: auto;
  `,fe=t.textarea`
    width: 600px;
    min-width: 350px;
    height: 140px;
    min-height: 130px;
    padding: 10px;
    font-size: ${e.smallFont};
    border: 2px solid ${e.primaryColor};
    border-radius: 10px;
  `,xe=t.div`
    width: 100%;
    overflow: hidden;
  `,be=t.div`
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 20px;
    flex-wrap: wrap;
  `,ve=t.div`
    background-color: ${e.secondColor};
    min-width: 100%;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    transition: transform 0.5s ease-in-out;
    ${u({height:"100%",padding:"1rem 0",overflow:"visible",marginBottom:"2rem"})}
  `,$e=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `,w=t.button`
    margin-top: 20px;
    width: 15%;
    min-width: 350px;
    font-size: ${e.smallFont};
    padding: 10px;
    color: ${e.primaryColor};
    border: none;
    background-color: ${e.hoverSecondaryLightColor};
    border-radius: 20px;
    font-weight: ${e.boldFont};
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${e.hoverSecondaryDarkColor};
      color: ${e.bgColor};
    }
  `,ye=t.form`
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    padding-top: 3rem;
  `,we=t.span`
    width: 70%;
    text-align: center;
    font-size: ${e.mediumFont};
    font-weight: ${e.mediumBoldFont};
    background-color: ${e.primaryColor};
    padding: 10px;
    border-radius: 20px;
    color: ${e.bgColor};
  `,je=t.label`
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    column-gap: ${e.mediumFont};
    font-size: ${e.smallFont};
    font-weight: ${e.boldFont};
    color: ${e.bgColor};
    padding: 10px;
  `,j=t.input`
  width: ${({customWidth:n})=>n||"fit-content"};
  padding: 10px;
  font-size: ${({customFontSize:n})=>n||e.smallFont};
  border: 2px solid ${e.primaryColor};
  border-radius: 10px;
`,Ce=t.div`
width: 100%;
    position: absolute;
    background-color: #e4f6ff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,ke=t.div`
display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`,Se=k`
  0% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
`,Fe=t(q)`
margin-top: 3rem;
font-size:2rem;
color: ${e.secondColor};
  animation: ${Se} 2s ease-out forwards 5; 
`,ze=()=>{const[n,i]=c.useState(0),{control:a,handleSubmit:d,setValue:g,getValues:h,formState:{errors:p},register:S,reset:P}=J(),[A,F]=c.useState(!1),[B,E]=c.useState(""),[_,V]=c.useState({}),[W,v]=c.useState(!1),G=H(),x=r=>{E(r),F(!0)},$=()=>{F(!1)},R=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),z=r=>{const s=h(`question${m[r].id}`);return s!==void 0&&s!==""&&s!==null?!0:(x("Por favor, selecciona una respuesta antes de continuar."),!1)},D=(r,s)=>{if(s==="next"&&!z(r))return;const l=s==="next"?r+1:r-1;l>=0&&l<m.length&&i(l)},Q=async r=>{try{if(!r.name.trim()){x("Por favor, ingresa tu nombre.");return}if(!R(r.email)){x("Por favor, ingresa un correo electrónico válido.");return}console.log(r),x("¡Formulario enviado con éxito!"),P(),v(!1),i(0),G("/services")}catch(s){x(s.message)}},Y=()=>{if(!z(n))return;const r=h(`question${m[n].id}`);V({..._,[`question${m[n].id}`]:r}),n===m.length-1?v(!0):n===1&&r==="No tengo marca"?i(7):n===11&&r==="No"?i(16):n===16&&r==="No"?i(19):n===19&&r==="No"?i(21):n===21&&r==="No"?i(23):n===23&&r==="No"?i(25):(D(n,"next"),$())},O=()=>{D(n,"prev"),$()};return o.jsxs(xe,{children:[o.jsxs(ue,{children:[o.jsx(he,{children:'¿Quieres impulsar tu negocio en el mundo digital? ¡Este cuestionario te ayudará! Descubre rápidamente el estado de tu empresa en el mundo digital. ¡Conoce tus oportunidades de mejora y destaca en línea! ¡Comienza ahora!"'}),o.jsx(Fe,{})]}),o.jsxs(ye,{onSubmit:d(Q),children:[m.map((r,s)=>o.jsxs("div",{style:{display:s===n?"block":"none"},children:[o.jsxs(ve,{children:[o.jsx(we,{children:r.text}),o.jsx($e,{children:r.options.length>0?r.options.map((l,b)=>o.jsx(je,{htmlFor:`question${r.id}-${b}`,children:o.jsx(I,{name:`question${r.id}`,control:a,render:({field:T})=>o.jsxs(o.Fragment,{children:[o.jsx(j,{type:"radio",...T,id:`question${r.id}-${b}`,value:l,checked:T.value===l,onChange:()=>g(`question${r.id}`,l)}),l]})})},`option-${r.id}-${b}`)):o.jsx(I,{name:`question${r.id}`,control:a,render:({field:l})=>o.jsx(fe,{...l,id:`question${r.id}`,placeholder:"Escribe tu respuesta aquí...",onChange:b=>g(`question${r.id}`,b.target.value)})})}),o.jsxs(be,{children:[o.jsx(w,{type:"button",onClick:O,style:{display:s===n&&s>0?"block":"none"},children:"Anterior"}),o.jsx(w,{type:"button",onClick:()=>{s===n&&s<m.length-1?Y():s===n&&s===m.length-1&&v(!0)},style:{display:"block"},children:s===m.length-1?"Finalizar":"Siguiente"})]})]}),p[`question${r.id}`]&&o.jsx(ge,{children:r.errorMessage})]},r.id)),W&&o.jsxs(Ce,{children:[o.jsx("h2",{children:"Deja tus datos para enviarte los resultados de este test"}),o.jsxs(ke,{children:[o.jsx(j,{...S("name"),placeholder:"Nombre",customWidth:"40vw"}),o.jsx(j,{...S("email"),placeholder:"Correo electrónico",customWidth:"40vw"})]}),o.jsxs(w,{type:"submit",children:["Enviar ",o.jsx(U,{})]})]})]}),o.jsx(me,{message:B,visible:A,onClose:$})]})},De=()=>(c.useEffect(()=>{K()},[]),o.jsxs(o.Fragment,{children:[o.jsx(ie,{}),o.jsx(ze,{})]})),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{Pe as G,M as H,Qe as I,Me as P,Ge as S,_e as T,We as V,Ve as a,Ye as b,Re as c,Be as d,Ae as e,Ee as f,Oe as s};
