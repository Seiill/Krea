import{p as n,v as r,r as l,j as e,i as $,u as z,c as D,f as g,a as j,L as F}from"./index-c8120dc3.js";import{t as a,m as p}from"./Responsive-56429a13.js";import{m as S}from"./motion-6b5c5925.js";import{s as E}from"./ScrollToTop-e4b609f8.js";import"./lightBulbElements-632008aa.js";import{l as A}from"./logo-409ecb93.js";const T=n.div`
position: relative;
top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${a({height:"auto"})}
`,L=n.div`
  cursor: pointer;
  ${a({width:"100%"})}

`,P=n.div`
display: flex;
${a({flexDirection:"column"})}
`;n.div`
display: flex;
flex-direction: column;
padding: 4rem 0;
  margin: auto;
  width: 100%;
  height: auto;
  overflow: hidden;
  align-items: center;
  ${p({padding:"1rem 0"})}
`;const B=n.h2`
text-wrap: balance;
text-align: center;
width: 70%;
padding: 1.2rem 0;
color: ${r.primaryColor};
${p({margin:"auto"})}
`,X=n.p`
font-size: 1.2rem;
font-weight: ${r.mediumBoldFont};
font-family: 'DINAlternate';
color: ${r.secondColor};
text-align: center;
`,N=n.img`
border-radius: .7rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease; 
  transform: scale(1);

  &:hover {
    transform: scale(1.2); 
  }
`,H=n.figure`
padding: 1rem;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: solid 2px ${r.hoverPrimaryDarkColor};
  border-radius: .8rem;
  display: flex;
  ${a({width:"300px",height:"300px"})}

`;n.button`
font-size: 2.5rem;
padding: 15px;
background-color: #363636;
color: white;
transition: background-color 0.3s, transform 0.3s;
margin: 0 20px;

  &:hover {
    background-color: #999;
    color: #222;
    transform: scale(1.1);
  }
`;n.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 54, 85, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;n.div`
  background-color: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  border-radius: 8px;

`;n.button`
  position: absolute;
  top: 20px;
  right: 50px;
  background: none;
  border: none;
  font-size: ${r.bigFont};
  cursor: pointer;
  color: ${r.hoverSecondaryLightColor};
`;n.iframe`
  width: 90vw;
  height: 90vh;
  border: none;
`;const M="/assets/Infografia-Diseño-Web-2f714570.jpeg",Y="/assets/Infografia-Imagen-Corporativa-741efdad.jpeg",R="/assets/Infografia-rrss-153be279.jpeg",V="/assets/diseño-web-6bd7b85c.pdf",O="/assets/imagen-corporativa-01248e65.pdf",U="/assets/rrss-sociales-f9ec53d7.pdf",J=t=>{switch(t){case"icon1":return M;case"icon2":return Y;case"icon3":return R;default:return""}},W=t=>{switch(t){case"icon1":return V;case"icon2":return O;case"icon3":return U;default:return""}},q=()=>{const[t,o]=l.useState(!1),i=l.useRef(null);l.useEffect(()=>{const s=new IntersectionObserver(([c])=>{o(c.isIntersecting)},{threshold:.2});return i.current&&s.observe(i.current),()=>{i.current&&s.unobserve(i.current)}},[]);const h=s=>{const c=$[s],m=W(c.icon);m&&window.open(m,"_blank")};return e.jsxs(T,{ref:i,children:[e.jsx(B,{children:"Descubre nuestras infografías y visualiza el brillante horizonte para tu éxito empresarial. Juntos, construyamos el camino hacia el logro de tus metas."}),e.jsx(P,{children:$.map((s,c)=>e.jsx(S.div,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:c*.1},children:e.jsxs(L,{onClick:()=>h(c),children:[e.jsx(H,{children:e.jsx(N,{src:J(s.icon),alt:s.title})}),e.jsx(X,{children:s.title})]})},s.id))})]})},G=n.div`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  ${a({})}
`,Z=n.div`
display: flex;
justify-content: space-around;
padding: 4rem 0;
width: 100%;
max-width: 1280px;
overflow: hidden;
align-items: center;
${a({flexDirection:"column",padding:"2rem 0",rowGap:"1rem",height:"100%",justifyContent:"center",alignItems:"center"})}
`,_=n.p`
text-wrap: balance;
font-size:${r.smallFont};
font-weight: ${r.mediumBoldFont};
color: ${r.hoverPrimaryDarkColor};
width: 80%; 
 ${a({textAlign:"center"})} 
`,K=n.div`
width: 60%;
border-radius: 20px;
overflow: hidden;
${p({width:"90%"})}
`,Q=n.img`
  width: 100%;
  object-fit: cover;

`,ee=n.article`
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    ${a({width:"90%",alignItems:"center",justifyContent:"center",textAlign:"center",margin:"auto"})}
`,te=n.button`
width: fit-content;
padding: 1rem 3rem; 
background-color: ${r.secondColor};
border: none;
text-align: center;
color: ${r.bgColor};
font-weight: ${r.boldFont};
cursor: pointer;
transition: all .3s ease-in-out;
border-radius: 20px;
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
`,ne=n.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`,oe="/assets/lapiz-jedan-7540515f.jpg",re=()=>{const[t,o]=l.useState(!1),i=l.useRef(null),h=z();l.useEffect(()=>{const m=new IntersectionObserver(y=>{y.forEach(x=>{x.isIntersecting&&o(!0)})},{threshold:.2});return i.current&&m.observe(i.current),()=>{i.current&&m.unobserve(i.current)}},[]);const s=()=>{h("/jedan-process-brand-construction")},c=D[0];return e.jsx(G,{ref:i,children:e.jsx(S.div,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.5},children:e.jsxs(Z,{children:[e.jsx(K,{children:e.jsx(Q,{src:oe,alt:"Boceto de logo de JEDAN"})}),e.jsxs(ee,{children:[e.jsx(_,{children:c.description}),e.jsx(ne,{children:e.jsx(te,{onClick:s,children:"Ver Más"})})]})]})})})},ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx(q,{})]}),se=g`
  0%, 100% {
    opacity: 0;
    transform: scaleX(1) scaleY(1);
   
  }
  70% {
    opacity: .8;
    transform: scaleX(1.2) scaleY(1.3);
    
  }
  100%{
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`,ae=n.div`
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: #f0f0f0;

justify-content: space-between;
${a({flexDirection:"column"})}


`,ce=n.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${a({width:"100%",backgroundColor:`${r.bgColor}`,height:"50vh"})}
`,v=n.span`
  font-size: ${({fontSize:t})=>t||"2rem"};
  font-family: ${({fontFamily:t})=>t};
  
  font-weight: bold;
  letter-spacing: ${({letterSpacing:t})=>t||"0"};
  color: ${({$textShadow:t})=>t?r.bgColor:r.hoverPrimaryDarkColor};
  text-shadow: ${({$textShadow:t})=>t||"none"};

  ${p({fontSize:({$mobileFontSize:t})=>t||"inherit"})}
`,le=n.span`
color:${r.hoverPrimaryDarkColor};
font-family: ${t=>t.fontFamily};
font-size: ${({fontSize:t})=>t||"5.3rem"};
font-weight: 900;
display: inline-block; 
letter-spacing: 29.3px;
animation: ${se} 2s ease-in-out 1; 
text-align: center;
padding-left: 20px;
${p({fontSize:({$mobileFontSize:t})=>t||"inherit"})}

`,de=n.img`
width: 100%;

object-fit: cover;
object-position: center;
/* ${p({marginBottom:"4rem"})} */
`,me=n.div`
    flex: 1;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${a({width:"100%",backgroundColor:`${r.bgColor}`,height:"50vh"})}
`,fe="/assets/HomeIlustration-25082f1a.svg",he=()=>e.jsxs(ae,{id:"background",children:[e.jsxs(ce,{id:"text",children:[e.jsx(v,{$mobileFontSize:"1.2rem",fontSize:"2.5rem",fontFamily:"DINAlternate",letterSpacing:"5.1px",children:"TRABAJAMOS JUNTOS"}),e.jsx(v,{fontFamily:"DINAlternate",fontSize:"3.5rem",$mobileFontSize:"1.8rem",letterSpacing:"8.2px",$textShadow:"-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633",children:"PARA HACERTE"}),e.jsx(le,{fontSize:"5.3rem",$mobileFontSize:"2rem",fontFamily:"DINAlternate",children:"VISIBLE"}),e.jsx(v,{$mobileFontSize:"1.4rem",fontFamily:"DINAlternate",fontSize:"2.5rem",letterSpacing:"3.9px",$textShadow:"-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633",children:"EN EL MUNDO DIGITAL"})]}),e.jsx(me,{id:"image",children:e.jsx(de,{src:fe,alt:"Un niño camina hacia un portal que conduce a un mundo digital. El niño está sonriendo y parece emocionado de explorar el nuevo mundo."})})]}),pe=()=>{const[t,o]=l.useState(!1),[i,h]=l.useState(2),[s,c]=l.useState(1);return l.useEffect(()=>{const m=()=>{if(!t){const y=window.scrollY,x=document.getElementById("text"),u=document.getElementById("image"),b=document.getElementById("background");y>0?(x.style.transform="translateX(-100%)",x.style.opacity="0",u.style.transform="translateX(100%)",u.style.opacity="0",b&&(b.style.backgroundColor="rgba(0, 0, 0, 0)"),h(1),c(2),o(!0)):(x.style.transform="translateX(0)",x.style.opacity="1",u.style.transform="translateX(0)",u.style.opacity="1",b&&(b.style.backgroundColor="rgba(0, 0, 0, 1)"),h(2),c(1),o(!1)),window.removeEventListener("scroll",m)}};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[t]),{hasScrolled:t,zIndexLayer1:i,zIndexLayer2:s}},xe="/assets/fb-d4e78777.svg",ge="/assets/insta-2d84b2cf.svg",ue="/assets/lupa-6e683bbd.svg",be="/assets/mail-702db3f0.svg",ye="/assets/music-a4fda7aa.svg",ve="/assets/rocket_1-3d723288.svg",je="/assets/row dowm-0eb95677.svg",$e="/assets/talk-62102efe.svg",we="/assets/hearth-47f26861.svg";g`${j`
  0%, 100% {
    opacity: 0;
    transform: scaleX(1) scaleY(1);
  }
  70% {
    opacity: .8;
    transform: scaleX(1.2) scaleY(1.3);
  }
  100%{
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`}`;const w=()=>{const t=Math.floor(Math.random()*10-5),o=Math.floor(Math.random()*10-5),i=1+Math.random()*.1;return{randomTranslateX:t,randomTranslateY:o,randomScale:i}},Ie=()=>{const{randomTranslateX:t,randomTranslateY:o,randomScale:i}=w(),{randomTranslateX:h,randomTranslateY:s,randomScale:c}=w();return g`
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(${t}px, ${o}px) scale(${i});
    }
    50% {
      transform: translate(${h}px, ${s}px) scale(${c});
    }
    75% {
      transform: translate(${-t}px, ${-o}px) scale(${i});
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  `},Ce=t=>{let o;switch(t){case"up":o="translateY(-100%)";break;case"down":o="translateY(100%)";break;case"left":o="translateX(-100%)";break;case"right":o="translateX(100%)";break;case"top-left":o="translate(-100%, -100%)";break;case"top-right":o="translate(100%, -100%)";break;case"bottom-left":o="translate(-100%, 100%)";break;case"bottom-right":o="translate(100%, 100%)";break;default:o="translate(0, 0)"}return g`
    from {
      transform: none;
      opacity: 1;
      filter: none;
    }
    to {
      transform: ${o};
      opacity: 0.09;
      filter: grayscale(100%);
    }
  `},ke=g`
  from {
    opacity: 0.09 ;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`,Se=n.section`
  display: flex;
  padding: 50px 20px;
  background: linear-gradient(to bottom right, #f5f7fa, ${r.bgColor});
  ${a({flexDirection:"column",padding:"20px"})}
`,I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  ${a({width:"100%"})}
`,ze=n.h1`
  font-size: 48px;
  color: ${r.secondColor};
`,De=n.h2`
  font-size: 24px;
  color: ${r.primaryColor};
`,Fe=n.div`
  display: none;
  position: relative;
  bottom: 50%;
    left: 150%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  z-index: 100;

  .container:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${ke} 1s forwards;
  }
  /* ${a({})}
  ${p({top:"-842px",left:"71px"})} */
`,Ee=n.p`
  text-wrap: balance;
  font-size: 18px;
  color: ${r.hoverPrimaryDarkColor};
`,Ae=n.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1.5rem;
`,C=n(F)`
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  margin-right: 10px;
  color: ${r.primaryColor};
  border-radius: 20px;
  cursor: pointer;
  font-weight: ${r.mediumBoldFont};
  transition: all .3s;  

  &:hover {
    color: ${r.bgColor};
  }
  &:first-child {
    background: #9BC9DD;
    &:hover {
      background: #177596; 
    }
  }

  &:last-child {
    background: #FFE169;
    &:hover {
      background: #ffc107; 
    }
  }
`,Te=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-height: 90vh;
  ${a({maxHeight:"52vh"})}
  ${p({height:"50vh"})}

  &:hover div {
    animation: ${j`${Ce()} 1s forwards`};
  }
`,f=n.div`
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({duration:t})=>j`${Ie()} ${t} cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite`};
`,d=n.img`
  object-fit: cover;
  width: ${({width:t})=>t||"45%"};
  object-position: center;
`,Le=()=>{const t=`${Math.floor(Math.random()*5)+3}s`;return e.jsxs(Se,{children:[e.jsxs(I,{children:[e.jsx(ze,{children:"¡NO DEJES QUE TU MARCA PASE DESAPERCIBIDA!"}),e.jsx(De,{children:"Escríbenos y haz que todos hablen de ti"}),e.jsx(Ee,{children:"Somos una agencia especializada en diseño de marca, diseño web, diseño multimedia y marketing digital. Transformamos tus ideas en realidad visual."}),e.jsxs(Ae,{children:[e.jsx(C,{to:"/contactUs",href:"#contact",children:"Contáctanos Ahora"}),e.jsx(C,{to:"/services",href:"#portfolio",children:"Ver Nuestros Trabajos"})]})]}),e.jsx(I,{children:e.jsxs(Te,{className:"container",children:[e.jsx(f,{duration:t,children:e.jsx(d,{src:xe,alt:"Facebook"})}),e.jsx(f,{duration:t,children:e.jsx(d,{src:ge,alt:"Instagram"})}),e.jsx(f,{duration:t,children:e.jsx(d,{width:"60%",src:ue,alt:"Lupa"})}),e.jsx(f,{duration:t,children:e.jsx(d,{src:be,alt:"Mail"})}),e.jsx(f,{duration:t,children:e.jsx(d,{width:"30%",src:ye,alt:"Music"})}),e.jsx(f,{duration:t,children:e.jsx(d,{width:"60%",src:ve,alt:"Rocket"})}),e.jsx(f,{duration:t,children:e.jsx(d,{src:je,alt:"Arrow Down"})}),e.jsx(f,{duration:t,children:e.jsx(d,{width:"60%",src:$e,alt:"Talk"})}),e.jsx(f,{duration:t,children:e.jsx(d,{width:"47%",src:we,alt:"Heart"})}),e.jsx(Fe,{children:e.jsx(d,{width:"300%",src:A,alt:"Logo de Krea, agencia de Diseño de marcas, diseño multimedia, diseño web y marketing digital"})})]})})]})},Pe=n.div`
  height: ${t=>t.$hasScrolled?"100%":"100vh"};
  transition: height 0.3s ease;
`,Be=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
`,k=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${t=>t.$zIndex};
`,Xe=()=>{const{hasScrolled:t,zIndexLayer1:o,zIndexLayer2:i}=pe();return e.jsx(Pe,{$hasScrolled:t,children:e.jsxs(Be,{children:[e.jsx(k,{$zIndex:o,children:e.jsx(he,{})}),e.jsx(k,{style:{position:"relative",margin:"auto"},$zIndex:i,children:e.jsx(Le,{})})]})})},Oe=()=>(l.useEffect(()=>{E()},[]),e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx(ie,{})]}));export{Oe as default};
