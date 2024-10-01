import{G as C,p as t,v as e,j as o,r as p,_ as X,s as w,f as k,u as H,q as h,F as q}from"./index-98e50ebb.js";import{m as g,t as f}from"./Responsive-7f92e7c6.js";import{m as J}from"./motion-db849514.js";import{u as K,C as I}from"./index.esm-6dc4c3f0.js";import{s as U}from"./ScrollToTop-e4b609f8.js";function Z(n){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(n)}const N=t.nav`
    position: sticky;
    top: 70px;
    display: flex;
    min-height: 60px;
    width: 100%;
    max-width: 1280px;
    justify-content: space-around;
    z-index: 2;

  ${g({flexWrap:"wrap",rowGap:"1rem"})}
`,L=t.button`
width: fit-content;
height: 2.5rem;
padding: 0.5rem 1rem;
font-family: 'DINAlternate';
  background-color: ${e.secondColor};
  border: none;
  border-radius: 15px;
  color: ${e.bgColor};
  border-radius: 0 0 15px 15px;
  transition: all 0.3s;

  &:hover {
    color: ${e.bgColor};
    font-weight: ${e.mediumBoldFont};
    border: none;
    transform: scale(1.05);
   
  }
  ${g({minWidth:"50px",width:"23%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})}
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

    ${g({right:"15px",bottom:"104px",textWrap:"balance",textAlign:"center",margin:"0 2px"})}
    ${f({right:"35px",bottom:"104px",textWrap:"balance",textAlign:"center",margin:"0 2px"})}
`;t.h2`
color: ${e.hoverPrimaryDarkColor};
`;const Ae=t.p`
color: ${e.hoverPrimaryDarkColor};
font-weight: ${e.regularFont};
padding: 2rem .5rem;
`,Be=t.div``,Ee=t.figure`
  width: 98%;
  ${g({height:"auto"})}
`,Ve=t.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`,_e=t.button`

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
`,We=t.h1`
`;t.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative; 
`;const Ge=t.img`
  width: 100%;
  object-fit: cover;
  ${f({margin:"auto !important",height:"auto",objectPosition:"center"})}
`,Oe=t.video`
  width: 100%;
  min-height: 515px;
  object-position: center;
  object-fit: cover;

  ${f({height:"auto",objectPosition:"center"})}
`,Re=t.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 40px;
  display: grid;
  align-items: center;
  justify-items: stretch;
  justify-content: space-evenly;
  position: relative;
  ${g({gridTemplateColumns:"1fr",height:"100%"})}
 
`,Qe=t.div`
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
${g({display:"none"})}
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
`;const Ye=t.section`
position: relative;
width: 100%;
max-width: 1280px;
margin: auto;
`,Xe=t.section`
width: 90%;
margin: 0 auto;
`,ee=({services:n,onSelectService:i})=>{const l=n.flatMap(a=>a.items),c={hidden:{scale:1},visible:a=>({scale:[1,1.2,1],transition:{delay:a*.2,duration:.7,repeatType:"loop"}})};return o.jsx(N,{children:l.map((a,m)=>o.jsx(J.div,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},custom:m,initial:"hidden",animate:"visible",variants:c,whileHover:{scale:1.2},children:o.jsx(L,{onClick:()=>i(a.id),children:a.title})},a.id))})};function oe(n){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}const te=({services:n,onSelectService:i})=>{const[l,c]=p.useState(!1),a=()=>{c(!l)},m=u=>{i(u),c(!1)};return o.jsxs(ne,{children:[o.jsxs(re,{onClick:a,children:["Ver Servicios ",o.jsx(oe,{})]}),l&&o.jsx(N,{children:n.flatMap(u=>u.items).map(u=>o.jsx(L,{onClick:()=>m(u.id),children:u.title},u.id))})]})},ne=t.div`
width: 100%;
display: flex;
position: fixed;
z-index: 12;
top: 70px;
row-gap: 1.2rem;
flex-direction: column;
align-items: center;
background-color: ${e.bgColor};

`,re=t.button`
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
`,ie=p.lazy(()=>X(()=>import("./showServices-315f2c6d.js"),["assets/showServices-315f2c6d.js","assets/index-98e50ebb.js","assets/index-398a30e3.css","assets/mockup-two-jedan-80-4595cab1.js","assets/Responsive-7f92e7c6.js","assets/motion-db849514.js","assets/index.esm-6dc4c3f0.js","assets/ScrollToTop-e4b609f8.js"])),se=()=>{const[n,i]=p.useState(null),l=c=>{const a=w.flatMap(m=>m.items).find(m=>m.id===c);a?i(a):console.error("No se encontró ningún servicio con el ID:",c)};return o.jsxs(o.Fragment,{children:[o.jsx(ae,{children:o.jsx(ee,{services:w,onSelectService:l})}),o.jsx(le,{children:o.jsx(te,{services:w,onSelectService:l})}),o.jsx(p.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(ie,{selectedService:n})})]})},ae=t.div`
display: block;
  ${f({display:"none"})}
`,le=t.div`

display: none;
${f({display:"block"})}
`;function ce(n){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"}},{tag:"path",attr:{d:"M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(n)}const de=k`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`,pe=k`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`,me=t.div`
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
  animation: ${n=>n.$visible?de:pe} 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: ${e.mediumBoldFont};
  position: relative; 
background-color:  ${e.bgColor} ;
`,ue=({message:n,visible:i,onClose:l})=>(p.useEffect(()=>{if(i){const c=setTimeout(()=>{l()},2e3);return()=>clearTimeout(c)}},[i,l]),o.jsxs(me,{$visible:i,children:[o.jsx(ce,{})," ",n]}));t.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${({show:n})=>n?"block":"none"};
  `;const he=t.span`
display: flex;
width: 100%;
color: ${e.primaryColor};
padding: 7rem 0;
flex-direction: column;
align-items: center;
row-gap: 2rem;
${g({padding:"8rem 0"})}
`,ge=t.p`
text-wrap: balance;
font-size: 1.4rem;
font-weight: ${e.boldFont};
text-align: center;
width: 70%;
margin: auto;
${g({width:"70%"})}
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
    
  `;const fe=t.div`
    font-size: 2rem;
    color: black;
    margin: auto;
  `,xe=t.textarea`
    width: 600px;
    min-width: 350px;
    height: 140px;
    min-height: 130px;
    padding: 10px;
    font-size: ${e.smallFont};
    border: 2px solid ${e.primaryColor};
    border-radius: 10px;
  `,be=t.div`
    width: 100%;
    overflow: hidden;
  `,ve=t.div`
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 20px;
    flex-wrap: wrap;
  `,$e=t.div`
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
    ${g({height:"100%",padding:"1rem 0",overflow:"visible",marginBottom:"2rem"})}
  `,we=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `,y=t.button`
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
  `,je=t.span`
    width: 70%;
    text-align: center;
    font-size: ${e.mediumFont};
    font-weight: ${e.mediumBoldFont};
    background-color: ${e.primaryColor};
    padding: 10px;
    border-radius: 20px;
    color: ${e.bgColor};
  `,Ce=t.label`
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
`,ke=t.div`
width: 100%;
    position: absolute;
    background-color: #e4f6ff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Se=t.div`
display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`,Fe=k`
  0% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
`,ze=t(q)`
margin-top: 3rem;
font-size:2rem;
color: ${e.secondColor};
  animation: ${Fe} 2s ease-out forwards 5; 
`,De=()=>{const[n,i]=p.useState(0),{control:l,handleSubmit:c,setValue:a,getValues:m,formState:{errors:u},register:S,reset:P}=K(),[A,F]=p.useState(!1),[B,E]=p.useState(""),[V,_]=p.useState({}),[W,v]=p.useState(!1),G=H(),x=r=>{E(r),F(!0)},$=()=>{F(!1)},O=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),z=r=>{const s=m(`question${h[r].id}`);return s!==void 0&&s!==""&&s!==null?!0:(x("Por favor, selecciona una respuesta antes de continuar."),!1)},D=(r,s)=>{if(s==="next"&&!z(r))return;const d=s==="next"?r+1:r-1;d>=0&&d<h.length&&i(d)},R=async r=>{try{if(!r.name.trim()){x("Por favor, ingresa tu nombre.");return}if(!O(r.email)){x("Por favor, ingresa un correo electrónico válido.");return}console.log(r),x("¡Formulario enviado con éxito!"),P(),v(!1),i(0),G("/services")}catch(s){x(s.message)}},Q=()=>{if(!z(n))return;const r=m(`question${h[n].id}`);_({...V,[`question${h[n].id}`]:r}),n===h.length-1?v(!0):n===1&&r==="No tengo marca"?i(7):n===11&&r==="No"?i(16):n===16&&r==="No"?i(19):n===19&&r==="No"?i(21):n===21&&r==="No"?i(23):n===23&&r==="No"?i(25):(D(n,"next"),$())},Y=()=>{D(n,"prev"),$()};return o.jsxs(be,{children:[o.jsxs(he,{children:[o.jsx(ge,{children:'¿Quieres impulsar tu negocio en el mundo digital? ¡Este cuestionario te ayudará! Descubre rápidamente el estado de tu empresa en el mundo digital. ¡Conoce tus oportunidades de mejora y destaca en línea! ¡Comienza ahora!"'}),o.jsx(ze,{})]}),o.jsxs(ye,{onSubmit:c(R),children:[h.map((r,s)=>o.jsxs("div",{style:{display:s===n?"block":"none"},children:[o.jsxs($e,{children:[o.jsx(je,{children:r.text}),o.jsx(we,{children:r.options.length>0?r.options.map((d,b)=>o.jsx(Ce,{htmlFor:`question${r.id}-${b}`,children:o.jsx(I,{name:`question${r.id}`,control:l,render:({field:T})=>o.jsxs(o.Fragment,{children:[o.jsx(j,{type:"radio",...T,id:`question${r.id}-${b}`,value:d,checked:T.value===d,onChange:()=>a(`question${r.id}`,d)}),d]})})},`option-${r.id}-${b}`)):o.jsx(I,{name:`question${r.id}`,control:l,render:({field:d})=>o.jsx(xe,{...d,id:`question${r.id}`,placeholder:"Escribe tu respuesta aquí...",onChange:b=>a(`question${r.id}`,b.target.value)})})}),o.jsxs(ve,{children:[o.jsx(y,{type:"button",onClick:Y,style:{display:s===n&&s>0?"block":"none"},children:"Anterior"}),o.jsx(y,{type:"button",onClick:()=>{s===n&&s<h.length-1?Q():s===n&&s===h.length-1&&v(!0)},style:{display:"block"},children:s===h.length-1?"Finalizar":"Siguiente"})]})]}),u[`question${r.id}`]&&o.jsx(fe,{children:r.errorMessage})]},r.id)),W&&o.jsxs(ke,{children:[o.jsx("h2",{children:"Deja tus datos para enviarte los resultados de este test"}),o.jsxs(Se,{children:[o.jsx(j,{...S("name"),placeholder:"Nombre",customWidth:"40vw"}),o.jsx(j,{...S("email"),placeholder:"Correo electrónico",customWidth:"40vw"})]}),o.jsxs(y,{type:"submit",children:["Enviar ",o.jsx(Z,{})]})]})]}),o.jsx(ue,{message:B,visible:A,onClose:$})]})},Te=()=>(p.useEffect(()=>{U()},[]),o.jsxs(o.Fragment,{children:[o.jsx(se,{}),o.jsx(De,{})]})),He=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));export{Be as G,M as H,Ye as I,Ae as P,Re as S,We as T,Oe as V,Ge as a,Xe as b,Qe as c,Ve as d,Ee as e,_e as f,He as s};
