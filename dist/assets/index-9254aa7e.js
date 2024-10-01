import{p as t,v as e,L as s,u as l,j as o}from"./index-98e50ebb.js";import{l as c}from"./logo-409ecb93.js";import{m as n,t as i}from"./Responsive-7f92e7c6.js";t(s)`
color: ${e.bgColor};
text-decoration: none; 
font-size: 18px;
padding: 5px 0;
`;const d=t.footer`
  background-color: ${e.hoverPrimaryDarkColor};
  color: ${e.bgColor};
  padding: 1.5rem;
  ${n({height:"90vh"})}
`,m=t.div`
display: flex;
column-gap: 1rem;
align-items: flex-end;
`,x=t.div`
width: 100%;
display:flex;
justify-content: center;
`,g=t.h2`
  font-size: ${e.bigFont};
  padding: 2rem 0;
  ${i({fontSize:"1.3rem",textAlign:"center"})}
`,p=t.button`
  background-color: ${e.secondColor};
  color: ${e.bgColor};
  font-weight: ${e.mediumBoldFont};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${e.hoverSecondaryDarkColor};
  }
  ${n({fontSize:"1.8rem",width:"100%"})}
`,f=t.div`
width: 100%;
min-width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

${n({flexDirection:"column",alignItems:"flex-start"})}
`,h=t.img`
filter: brightness(0) invert(1);
width: 3.5rem;
padding: 1rem 0;
${i({width:"2.8rem"})}
`;t.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`;const u=t.div`
display: flex;
flex-direction: column;
justify-content:  flex-end;
align-items: flex-start;
`;t.a`
font-size:${e.smallFont};
font-weight:${e.mediumBoldFont};
color:${e.bgColor};
text-decoration: none;
padding: 1rem 0;
`;const $=()=>{const r=l(),a=()=>{r("/contactUs")};return o.jsxs(d,{children:[o.jsx(x,{children:o.jsxs(g,{children:[o.jsx(p,{onClick:a,children:"KREEMOS"})," un proyecto juntos !"]})}),o.jsxs(f,{children:[o.jsxs(m,{children:[o.jsx(h,{src:c,alt:"Logo de 'Krea' agencia creativa"}),o.jsxs("p",{children:["No solo hacemos una",o.jsx("br",{})," marca bonita,",o.jsx("br",{}),"¡la hacemos visible!"]})]}),o.jsxs(u,{children:[o.jsx("p",{children:"Teléfono: +1 321-333-7270"}),o.jsx("p",{children:"Correo: Kreadigitalgraphic@gmail.com"})]})]})]})};export{$ as default};
