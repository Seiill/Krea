import{p as o,v as t,e as d,u as p,o as m,j as e}from"./index-98e50ebb.js";const x=o.div`
width: 100%;
height:  5rem;
background-color: ${({index:r})=>r%2===0?t.primaryColor:t.secondColor};
margin-top: 0;
text-align: center;
`;o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;o.div`
  width: 100%;
  background-color: ${t.bgColor};
  padding: 20px;
  border-radius: 20px;
`;const g=o.h2`

  margin-bottom: 2.5rem;
  color: ${t.secondColor};
  text-align: center;
  font-size: ${t.bigFont};
  text-transform: uppercase;
`,f=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 2rem;
  row-gap: 1rem;
`,u=o.div`
  border: 2px solid ${({index:r})=>r%2===0?t.primaryColor:t.secondColor};
  border-radius: 5px;
  margin: 0 10px;
  flex: 1 1 300px;
  max-width: 350px;
  display: flex;
flex-direction: column;
justify-content: space-between;


`,h=o.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: ${t.bgColor};
`,b=o.ul`
list-style-type: disc;
display: flex;
row-gap: .3rem;
min-height: 350px;
flex-direction: column;
justify-content: space-between;
margin-right: 10px;
    
`,y=o.li`
  margin-bottom: 5px;
  font-weight: ${t.mediumBoldFont};
  text-wrap: balance;
`,j=o.button`
  background-color: transparent;
  color: ${({index:r})=>r%2===0?t.secondColor:t.primaryColor};
  font-size: ${t.mediumFont};
  font-weight: ${t.mediumBoldFont};
  text-transform: capitalize;
  border: none;
  padding: 15px 15px;
  border-radius: 5px;
  cursor: pointer;
`,C=()=>{const{category:r}=d(),s=p(),a=m.find(n=>n.category===r);return a?e.jsxs(e.Fragment,{children:[e.jsx(g,{children:a.category}),e.jsx(f,{children:a.plans.map((n,i)=>e.jsxs(u,{index:i,children:[e.jsx(x,{index:i,children:e.jsx(h,{children:n.name})}),e.jsx(b,{children:n.details.map((c,l)=>e.jsx(y,{children:c},l))}),e.jsx(j,{index:i,onClick:()=>s("/contactUs"),children:n.action})]},n.name))})]}):e.jsx("div",{children:"No hay ofertas disponibles para esta categoría."})},v=()=>e.jsx(C,{});export{v as default};
