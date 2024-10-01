import{p as e,v as t,L as l,u as c,j as o}from"./index-9cf82e43.js";import{l as d}from"./logo-409ecb93.js";import{m as i,t as r}from"./Responsive-a2a8a111.js";const n=e(l)`
color: ${t.bgColor};
text-decoration: none; 
font-size: 18px;
padding: 5px 0;
`,m=e.footer`
  background-color: ${t.hoverPrimaryDarkColor};
  color: ${t.bgColor};
  padding: 1.5rem;
  ${i({height:"90vh"})}
`,p=e.div`
display: flex;
column-gap: 1rem;
align-items: flex-end;
`,g=e.div`
width: 100%;
display:flex;
justify-content: center;
`,h=e.h2`
  font-size: ${t.bigFont};
  padding: 2rem 0;
  ${r({fontSize:"1.3rem",textAlign:"center"})}
`,x=e.button`
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
  ${i({fontSize:"1.8rem",width:"100%"})}
`,f=e.div`
width: 100%;
min-width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

${i({flexDirection:"column",alignItems:"flex-start"})}
`,u=e.img`
filter: brightness(0) invert(1);
width: 3.5rem;
padding: 1rem 0;
${r({width:"2.8rem"})}
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
`,y=()=>{const a=c(),s=()=>{a("/contactUs")};return o.jsxs(m,{children:[o.jsx(g,{children:o.jsxs(h,{children:[o.jsx(x,{onClick:s,children:"KREEMOS"})," un proyecto juntos !"]})}),o.jsxs(f,{children:[o.jsxs(p,{children:[o.jsx(u,{src:d,alt:"Logo de 'Krea' agencia creativa"}),o.jsxs("p",{children:["No solo hacemos una",o.jsx("br",{})," marca bonita,",o.jsx("br",{}),"¡la hacemos visible!"]})]}),o.jsxs(b,{children:[o.jsx(n,{to:"https://www.facebook.com/profile.php?id=61562504063913",target:"_blank",children:"Facebook"}),o.jsx(n,{to:"https://www.linkedin.com/in/katherine-camargo-9a57ba318/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",target:"_blank",children:"LinkedIn"}),o.jsx(n,{to:"https://instagram.com",target:"_blank",children:"Instagram"})]}),o.jsxs(j,{children:[o.jsx("a",{href:"tel:+13213337270",children:"Teléfono: +1 (321) 333-7270"}),o.jsx("a",{href:"mailto:Kreadigitalgraphic@gmail.com",children:"Kreadigitalgraphic@gmail.com"})]})]})]})};export{y as default};
