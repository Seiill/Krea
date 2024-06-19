import{p as t,v as r,r as c,j as e}from"./index-1ae8889f.js";import{m as s,t as o}from"./Responsive-64219d17.js";import{m as h}from"./motion-572d1ae2.js";const m=t.section`
width: 100%;
height: 100%;
${s({marginTop:"0"})}
`,g=t.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 70px;
  grid-template-areas:
    "left  right"
    "left right"
    "left  right"
    "left  right";
  height: 100%;
  align-items: stretch;
  padding: 2rem 8rem;

  ${s({gridTemplateAreas:"'left' 'right'",gridTemplateColumns:"1fr",padding:"2rem",textAlign:"center"})}
`,f=t.div`
  grid-area: left;
  color: #fff;
  padding: 10px;
`;t.div`
${s({width:"100%",marginTop:"40%",height:"auto"})}
`;t.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(${i=>i.$isswitchon?"0%":"100%"});
  transition: filter 0.3s ease;
`;const b=t.div`
  grid-area: right;
  color: #fff;
  padding: 10px;
`,n=t.div`
  margin: 0;
  padding: 1.5rem 0;
  border-bottom: solid 2px ${r.secondColor};
  border-radius: 0 0 0 20px;
  ${s({padding:"2.5rem 2px",textWrap:" balance",textAlign:"center"})}
`,d=t.h1`
color: ${r.secondColor};
font-family: 'DINAlternate';
`,v=t.h2`

position: relative;
top: 4rem;
color: ${r.hoverPrimaryDarkColor};
width: 50%;
text-align: center;
margin: auto;
padding: 20px 0;
${s({top:"2rem",fontSize:`${r.smallFont}`})}
`,l=t.p`
color: ${r.hoverPrimaryDarkColor};
font-weight: ${r.mediumBoldFont};
`;t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${i=>i.$isswitchon?"#ccc":"#FFE268"};
${o({width:"100px",height:"100px"})}

`;t.svg`
  position: absolute;
  width: 28%;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);

  path.cls-1 {
    fill: ${r.secondColor};
  }
  ${o({width:"28%",top:"40px",left:"50%"})}
`;t.div`
position: absolute;
position: absolute;
left: 67px;
height: 110px;
width: 4px;
background-color: #000;
transform: skew(15deg, 0) scaleY(-1);
top: 73px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 70px;
    height: 100%;
    width: 100%;
    background-color: inherit;
    transform: skew(30deg, 0) scaleY(-1);
    z-index: 1;
    ${o({left:"36px"})}
  }
  ${o({left:"31px",height:"32px",width:"2px",top:"50px"})}
`;t.div`
position: absolute;
    width: 70px;
    height: 80px;
    background-color: #d9d8ce;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 125px;
    z-index: -1;
    border-radius: 0 0 25px 25px;
    ${o({width:"21px",height:"40px",left:"50%",top:"60px"})}
`;t.div`
position: absolute;
top: 30px;
z-index: 2;
width: 100%;
height: 3px;
background-color: #000;
${o({top:"17px",height:"2px"})}

&::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: inherit;
    transform: scaleY(-1);
    z-index: 3;
    ${o({top:"10px"})}
  }


`;const w=()=>{const[i,x]=c.useState(!1),a=c.useRef(null);return c.useEffect(()=>{const p=new IntersectionObserver(([u])=>{u.intersectionRatio>.1&&!i&&x(!0)},{threshold:.1});return a.current&&p.observe(a.current),()=>{a.current&&p.unobserve(a.current)}},[i]),e.jsxs(m,{children:[e.jsx(v,{children:"¡En nuestra agencia de diseño, la clave es tu visión! Nuestro enfoque se basa en cuatro pasos fundamentales:"}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsxs(h.div,{ref:a,initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:[e.jsxs(n,{children:[e.jsx(d,{children:" Escuchar "}),e.jsx(l,{children:"Nos sumergimos en tus ideas, necesidades y objetivos. Tu voz es nuestra brújula, y estamos aquí para captar cada detalle de tu visión."})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Analizar"}),e.jsx(l,{children:"Estudiamos cuidadosamente cada aspecto, evaluamos posibilidades y trazamos estrategias. Esta fase nos permite trazar el camino más sólido para convertir tu visión en realidad."})]})]})}),e.jsx(b,{children:e.jsxs(h.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:[e.jsxs(n,{children:[e.jsx(d,{children:"Krear"}),e.jsx(l,{children:"Nuestro equipo creativo se sumerge en el proceso de dar forma a tus ideas, utilizando nuestra experiencia y creatividad para hacerlas cobrar vida."})]}),e.jsxs(n,{children:[e.jsx(d,{children:"Resolver"}),e.jsx(l,{children:"Nos comprometemos a superar desafíos, encontrar soluciones innovadoras y asegurar que tu proyecto se complete con excelencia y precisión."})]})]})})]})]})};export{w as L};
