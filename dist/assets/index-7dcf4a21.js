import{p as e,v as t,L as l,u as c,j as o}from"./index-1ae8889f.js";import{m as r,t as i}from"./Responsive-64219d17.js";const d="/assets/logo-2febf382.svg",n=e(l)`
color: ${t.bgColor};
text-decoration: none; 
font-size: 18px;
padding: 5px 0;
`,m=e.footer`
  background-color: ${t.hoverPrimaryDarkColor};
  color: ${t.bgColor};
  padding: 1.5rem;
  ${r({height:"90vh"})}
`,x=e.div`
display: flex;
column-gap: 1rem;
align-items: flex-end;
`,g=e.div`
width: 100%;
display:flex;
justify-content: center;
`,p=e.h2`
  font-size: ${t.bigFont};
  padding: 2rem 0;
  ${i({fontSize:"1.3rem",textAlign:"center"})}
`,h=e.button`
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
  ${r({fontSize:"1.8rem",width:"100%"})}
`,f=e.div`
width: 100%;
min-width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

${r({flexDirection:"column",alignItems:"flex-start"})}
`,u=e.img`
filter: brightness(0) invert(1);
width: 3.5rem;
padding: 1rem 0;
${i({width:"2.8rem"})}
`,b=e.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`,j=e.div`
display: flex;
flex-direction: column;
justify-content:  flex-end;
align-items: flex-start;
`,C=()=>{const s=c(),a=()=>{s("/contactUs")};return o.jsxs(m,{children:[o.jsx(g,{children:o.jsxs(p,{children:[o.jsx(h,{onClick:a,children:"KREEMOS"})," un proyecto juntos !"]})}),o.jsxs(f,{children:[o.jsxs(x,{children:[o.jsx(u,{src:d,alt:"Logo de 'Krea' agencia creativa"}),o.jsxs("p",{children:["No solo hacemos una",o.jsx("br",{})," marca bonita,",o.jsx("br",{}),"¡la hacemos visible!"]})]}),o.jsxs(b,{children:[o.jsx(n,{to:"https://facebook.com",target:"_blank",children:"Facebook"}),o.jsx(n,{to:"https://linkedin.com",target:"_blank",children:"LinkedIn"}),o.jsx(n,{to:"https://instagram.com",target:"_blank",children:"Instagram"})]}),o.jsxs(j,{children:[o.jsx("p",{children:"Teléfono: +1 123-456-789"}),o.jsx("p",{children:"Correo: ejemplo@kreemos.com"})]})]})]})};export{C as default};
