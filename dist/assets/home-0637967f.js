import{p as n,v as o,r as l,j as e,i as h,u as y,c as v,f as w}from"./index-1ae8889f.js";import{t as a,m as d}from"./Responsive-64219d17.js";import{m as x}from"./motion-572d1ae2.js";import{s as j}from"./ScrollToTop-e4b609f8.js";import{L as $}from"./Lightbulb-5b518c9c.js";const I=n.div`
position: relative;
top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${a({height:"auto"})}
`,C=n.div`
  cursor: pointer;
  ${a({width:"100%"})}

`,S=n.div`
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
  ${d({padding:"1rem 0"})}
`;const F=n.h2`
text-wrap: balance;
text-align: center;
width: 70%;
padding: 1.2rem 0;
color: ${o.primaryColor};
${d({margin:"auto"})}
`,k=n.p`
font-size: 1.2rem;
font-weight: ${o.mediumBoldFont};
font-family: 'DINAlternate';
color: ${o.secondColor};
text-align: center;
`,z=n.img`
border-radius: .7rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease; 
  transform: scale(1);

  &:hover {
    transform: scale(1.2); 
  }
`,D=n.figure`
padding: 1rem;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: solid 2px ${o.hoverPrimaryDarkColor};
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
  font-size: ${o.bigFont};
  cursor: pointer;
  color: ${o.hoverSecondaryLightColor};
`;n.iframe`
  width: 90vw;
  height: 90vh;
  border: none;
`;const E="/assets/Infografia-Diseño-Web-2f714570.jpeg",A="/assets/Infografia-Imagen-Corporativa-741efdad.jpeg",P="/assets/Infografia-rrss-153be279.jpeg",B="/assets/diseño-web-6bd7b85c.pdf",N="/assets/imagen-corporativa-01248e65.pdf",L="/assets/rrss-sociales-f9ec53d7.pdf",T=t=>{switch(t){case"icon1":return E;case"icon2":return A;case"icon3":return P;default:return""}},X=t=>{switch(t){case"icon1":return B;case"icon2":return N;case"icon3":return L;default:return""}},H=()=>{const[t,f]=l.useState(!1),r=l.useRef(null);l.useEffect(()=>{const i=new IntersectionObserver(([s])=>{f(s.isIntersecting)},{threshold:.2});return r.current&&i.observe(r.current),()=>{r.current&&i.unobserve(r.current)}},[]);const p=i=>{const s=h[i],c=X(s.icon);c&&window.open(c,"_blank")};return e.jsxs(I,{ref:r,children:[e.jsx(F,{children:"Descubre nuestras infografías y visualiza el brillante horizonte para tu éxito empresarial. Juntos, construyamos el camino hacia el logro de tus metas."}),e.jsx(S,{children:h.map((i,s)=>e.jsx(x.div,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:s*.1},children:e.jsxs(C,{onClick:()=>p(s),children:[e.jsx(D,{children:e.jsx(z,{src:T(i.icon),alt:i.title})}),e.jsx(k,{children:i.title})]})},i.id))})]})},R=n.div`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  ${a({})}
`,V=n.div`
display: flex;
justify-content: space-around;
padding: 4rem 0;
width: 100%;
max-width: 1280px;
overflow: hidden;
align-items: center;
${a({flexDirection:"column",padding:"2rem 0",rowGap:"1rem",height:"100%",justifyContent:"center",alignItems:"center"})}
`,O=n.p`
text-wrap: balance;
font-size:${o.smallFont};
font-weight: ${o.mediumBoldFont};
color: ${o.hoverPrimaryDarkColor};
width: 80%; 
 ${a({textAlign:"center"})} 
`,J=n.div`
width: 60%;
border-radius: 20px;
overflow: hidden;
${d({width:"90%"})}
`,W=n.img`
  width: 100%;
  object-fit: cover;

`,Y=n.article`
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    ${a({width:"90%",alignItems:"center",justifyContent:"center",textAlign:"center",margin:"auto"})}
`,M=n.button`
width: fit-content;
padding: 1rem 3rem; 
background-color: ${o.secondColor};
border: none;
text-align: center;
color: ${o.bgColor};
font-weight: ${o.boldFont};
cursor: pointer;
transition: all .3s ease-in-out;
border-radius: 20px;
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
`,U=n.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`,G="/assets/lapiz-jedan-7540515f.jpg",q=()=>{const[t,f]=l.useState(!1),r=l.useRef(null),p=y();l.useEffect(()=>{const c=new IntersectionObserver(g=>{g.forEach(b=>{b.isIntersecting&&f(!0)})},{threshold:.2});return r.current&&c.observe(r.current),()=>{r.current&&c.unobserve(r.current)}},[]);const i=()=>{p("/jedan-process-brand-construction")},s=v[0];return e.jsx(R,{ref:r,children:e.jsx(x.div,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.5},children:e.jsxs(V,{children:[e.jsx(J,{children:e.jsx(W,{src:G,alt:"Boceto de logo de JEDAN"})}),e.jsxs(Y,{children:[e.jsx(O,{children:s.description}),e.jsx(U,{children:e.jsx(M,{onClick:i,children:"Ver Más"})})]})]})})})},_=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(H,{})]}),K=w`
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
`,Q=n.div`
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: #f0f0f0;

justify-content: space-between;
${a({flexDirection:"column"})}


`,Z=n.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${a({width:"100%",backgroundColor:`${o.bgColor}`,height:"50vh"})}
`,m=n.span`
  font-size: ${({fontSize:t})=>t||"2rem"};
  font-family: ${({fontFamily:t})=>t};
  
  font-weight: bold;
  letter-spacing: ${({letterSpacing:t})=>t||"0"};
  color: ${({$textShadow:t})=>t?o.bgColor:o.hoverPrimaryDarkColor};
  text-shadow: ${({$textShadow:t})=>t||"none"};

  ${d({fontSize:({$mobileFontSize:t})=>t||"inherit"})}
`,ee=n.span`
color:${o.hoverPrimaryDarkColor};
font-family: ${t=>t.fontFamily};
font-size: ${({fontSize:t})=>t||"5.3rem"};
font-weight: 900;
display: inline-block; 
letter-spacing: 29.3px;
animation: ${K} 2s ease-in-out 1; 
text-align: center;
padding-left: 20px;
${d({fontSize:({$mobileFontSize:t})=>t||"inherit"})}

`,te=n.img`
width: 100%;

object-fit: cover;
object-position: center;
/* ${d({marginBottom:"4rem"})} */
`,ne=n.div`
    flex: 1;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${a({width:"100%",backgroundColor:`${o.bgColor}`,height:"50vh"})}
`,oe="/assets/HomeIlustration-25082f1a.svg",ie=()=>e.jsxs(Q,{id:"background",children:[e.jsxs(Z,{id:"text",children:[e.jsx(m,{$mobileFontSize:"1.2rem",fontSize:"2.5rem",fontFamily:"DINAlternate",letterSpacing:"5.1px",children:"TRABAJAMOS JUNTOS"}),e.jsx(m,{fontFamily:"DINAlternate",fontSize:"3.5rem",$mobileFontSize:"1.8rem",letterSpacing:"8.2px",$textShadow:"-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633",children:"PARA HACERTE"}),e.jsx(ee,{fontSize:"5.3rem",$mobileFontSize:"2rem",fontFamily:"DINAlternate",children:"VISIBLE"}),e.jsx(m,{$mobileFontSize:"1.4rem",fontFamily:"DINAlternate",fontSize:"2.5rem",letterSpacing:"3.9px",$textShadow:"-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633",children:"EN EL MUNDO DIGITAL"})]}),e.jsx(ne,{id:"image",children:e.jsx(te,{src:oe,alt:"Un niño camina hacia un portal que conduce a un mundo digital. El niño está sonriendo y parece emocionado de explorar el nuevo mundo."})})]}),re=()=>{const[t,f]=l.useState(!1);return l.useEffect(()=>{const r=()=>{if(!t){const p=window.scrollY,i=document.getElementById("text"),s=document.getElementById("image"),c=document.getElementById("background");p>0?(i.style.transform="translateX(-100%)",i.style.opacity="0",s.style.transform="translateX(100%)",s.style.opacity="0",c&&(c.style.backgroundColor="rgba(0, 0, 0, 0)")):(i.style.transform="translateX(0)",i.style.opacity="1",s.style.transform="translateX(0)",s.style.opacity="1",c&&(c.style.backgroundColor="rgba(0, 0, 0, 1)")),f(!0),window.removeEventListener("scroll",r)}};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[t]),t},se=n.div`
  height: ${t=>t.hasScrolled?"100%":"100vh"};
transition: height 0.3s ease;
`,ae=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
`,u=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${t=>t.$zIndex};
`,ce=()=>{const t=re();return e.jsx(se,{hasScrolled:t,children:e.jsxs(ae,{children:[e.jsx(u,{$zIndex:2,children:e.jsx(ie,{})}),e.jsx(u,{style:{position:"relative",margin:"auto"},$zIndex:1,children:e.jsx($,{})})]})})},he=()=>(l.useEffect(()=>{j()},[]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(_,{})]}));export{he as default};
