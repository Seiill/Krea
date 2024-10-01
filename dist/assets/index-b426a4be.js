import{p as e,v as t,L as a,u as l,j as o}from"./index-c8120dc3.js";import{l as c}from"./logo-409ecb93.js";import{m as n,t as r}from"./Responsive-56429a13.js";e(a)`
color: ${t.bgColor};
text-decoration: none; 
font-size: 18px;
padding: 5px 0;
`;const d=e.footer`
  background-color: ${t.hoverPrimaryDarkColor};
  color: ${t.bgColor};
  padding: 1.5rem;
  ${n({height:"90vh"})}
`,m=e.div`
display: flex;
column-gap: 1rem;
align-items: flex-end;
`,x=e.div`
width: 100%;
display:flex;
justify-content: center;
`,p=e.h2`
  font-size: ${t.bigFont};
  padding: 2rem 0;
  ${r({fontSize:"1.3rem",textAlign:"center"})}
`,g=e.button`
  background-color: ${t.secondColor};
  color: ${t.bgColor};
  font-weight: ${t.mediumBoldFont};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${t.hoverSecondaryDarkColor};
  }
  ${n({fontSize:"1.8rem",width:"100%"})}
`,f=e.div`
width: 100%;
min-width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

${n({flexDirection:"column",alignItems:"flex-start"})}
`,h=e.img`
filter: brightness(0) invert(1);
width: 3.5rem;
padding: 1rem 0;
${r({width:"2.8rem"})}
`;e.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`;const u=e.div`
display: flex;
flex-direction: column;
justify-content:  flex-end;
align-items: flex-start;
`,C=()=>{const i=l(),s=()=>{i("/contactUs")};return o.jsxs(d,{children:[o.jsx(x,{children:o.jsxs(p,{children:[o.jsx(g,{onClick:s,children:"KREEMOS"})," un proyecto juntos !"]})}),o.jsxs(f,{children:[o.jsxs(m,{children:[o.jsx(h,{src:c,alt:"Logo de 'Krea' agencia creativa"}),o.jsxs("p",{children:["No solo hacemos una",o.jsx("br",{})," marca bonita,",o.jsx("br",{}),"¡la hacemos visible!"]})]}),o.jsxs(u,{children:[o.jsx("p",{children:"Teléfono: +1 321-333-7270"}),o.jsx("p",{children:"Correo: Kreadigitalgraphic@gmail.com"})]})]})]})};export{C as default};
