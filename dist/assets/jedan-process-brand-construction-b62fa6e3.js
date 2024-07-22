import{p as t,v as c,j as e,r as p}from"./index-9cf82e43.js";import{t as n,m as r}from"./Responsive-a2a8a111.js";import{j as h}from"./mockup-two-jedan-80-4595cab1.js";import{s as g}from"./ScrollToTop-e4b609f8.js";const m=t.div`
  width: 100%;
  overflow: hidden;
  max-width: 1280px;
  color: ${c.hoverPrimaryDarkColor};
  margin: auto;
`,x=t.section`
  position: relative;
  background-color: #253E8E;
  height: 90vh;
`,j=t.img`
  position: absolute;
  z-index: 1;
  object-fit: cover;
  object-position: center;
  width: 110%;
  height: 100%;
`,f=t.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  z-index: 2;
  object-position: center;
`,u=t.p`
  width: 60%;
  height: fit-content;
  text-wrap: balance;
  font-size: ${c.smallFont};
  font-weight: ${c.mediumBoldFont};

  ${n({width:"85%",margin:"10px"})}
`,o=t.section``,v=t.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'description description'
    'left right';
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  ${n({gridTemplateAreas:`
      'description'
      'left'
      'right'
    `,justifyItems:"center",gridTemplateColumns:"1fr",gridTemplateRows:"15vh 1fr 1fr"})}
  ${r({display:"flex",flexDirection:"column",alignItems:"center"})}
`,b=t.div`
  grid-area: description;
  padding: 10px;
  width: 100%;
  height: fit-content;

  ${n({gridArea:"description",padding:"10px",width:"100%"})}
`,w=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: left;
  padding: 10px;
  width: 100%;

  ${n({gridArea:"left",padding:"10px",width:"100%"})}
`,E=t.div`
  grid-area: right;
  padding: 10px;
  width: 100%;

  ${r({gridArea:"right",padding:"10px",width:"100%"})}
`,s=t.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`,$=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  ${r({gridTemplateColumns:"1fr"})}
`,C=t.div`
  background-color: ${i=>i.color};
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
  height: 50vh;
  min-height: 20vh;
  font-size: 1.5rem;
  font-weight: bold;
  ${r({height:"15vh",minHeight:"10vh"})}
`,D=t.span`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
`,y=t.div``,a=t.div`
  width: ${i=>i.width?i.width:"100%"};
`,k="/assets/log-jedan-color-c1fef4ee.svg",A="/assets/jedanCardOne-87c7a72a.jpg",J="/assets/jedanMockupOne-8d78ad56.jpg",N="/assets/jedanWebMobile-19690374.jpg",T="/assets/webmockup-2-39ac2da4.svg",B="/assets/jedn-9b0d8f0f.jpg",F="/assets/log-jedan-white-52a59138.svg",I="/assets/jedan-banner-one-fa24f229.svg",z=()=>{const i=["#253E8E","#7484B7","#FAB223","#FFD386","#D28E29"];return e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx(j,{src:I,alt:"imagen con símbolos de ocnstrucción usados como adorno en JEDAN"}),e.jsx(f,{src:F,alt:"logo blanco de Jedan"})]}),e.jsx(o,{children:e.jsxs(v,{children:[e.jsx(b,{children:e.jsx(u,{children:"Desde los cimientos de la planificación estratégica hasta los toques finales de la ejecución creativa, te llevaremos paso a paso a través de cada etapa de este apasionante proceso. Verás cómo cada decisión, cada color y cada palabra contribuyen a dar forma a la personalidad y la imagen de la marca, reflejando su visión, valores y compromiso con la excelencia."})}),e.jsx(w,{children:e.jsx(a,{width:"40%",children:e.jsx(s,{src:k,alt:"logo a color de JEDAN "})})}),e.jsx(E,{children:e.jsx(a,{children:e.jsx(s,{src:A,alt:"mockup tarjetas corporativas de JEDAN "})})})]})}),e.jsx(o,{children:e.jsx($,{children:i.map((d,l)=>e.jsx(C,{color:d,children:e.jsx(D,{children:d})},l))})}),e.jsx(o,{children:e.jsx(s,{src:J,alt:"mockup sitio web JEDAN"})}),e.jsx(o,{children:e.jsxs(y,{children:[e.jsx(a,{src:N,alt:""}),e.jsx(a,{src:T,alt:""})]})}),e.jsx(o,{children:e.jsx(s,{src:B,alt:"mockup sitio web escritorio y mobile JEDAN"})}),e.jsx(o,{children:e.jsx(s,{src:h,alt:"mockup redes sociales JEDAN"})})]})},G=()=>(p.useEffect(()=>{g()},[]),e.jsx(z,{}));export{G as default};
