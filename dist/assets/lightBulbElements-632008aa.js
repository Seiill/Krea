import{p as t,v as o}from"./index-c8120dc3.js";import{m as i,t as e}from"./Responsive-56429a13.js";const p=t.section`
width: 100%;
height: 100%;
${i({marginTop:"0"})}
`,s=t.div`
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

  ${i({gridTemplateAreas:"'left' 'right'",gridTemplateColumns:"1fr",padding:"2rem",textAlign:"center"})}
`,l=t.div`
  grid-area: left;
  color: #fff;
  padding: 10px;
`;t.div`
${i({width:"100%",marginTop:"40%",height:"auto"})}
`;t.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(${r=>r.$isswitchon?"0%":"100%"});
  transition: filter 0.3s ease;
`;const d=t.div`
  grid-area: right;
  color: #fff;
  padding: 10px;
`,h=t.div`
  margin: 0;
  padding: 1.5rem 0;
  border-bottom: solid 2px ${o.secondColor};
  border-radius: 0 0 0 20px;
  ${i({padding:"2.5rem 2px",textWrap:" balance",textAlign:"center"})}
`,g=t.h1`
color: ${o.secondColor};
font-family: 'DINAlternate';
`,c=t.h2`

position: relative;
top: 4rem;
color: ${o.hoverPrimaryDarkColor};
width: 50%;
text-align: center;
margin: auto;
padding: 20px 0;
${i({top:"2rem",fontSize:`${o.smallFont}`})}
`,x=t.p`
color: ${o.hoverPrimaryDarkColor};
font-weight: ${o.mediumBoldFont};
`;t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${r=>r.$isswitchon?"#ccc":"#FFE268"};
${e({width:"100px",height:"100px"})}

`;t.svg`
  position: absolute;
  width: 28%;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);

  path.cls-1 {
    fill: ${o.secondColor};
  }
  ${e({width:"28%",top:"40px",left:"50%"})}
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
    ${e({left:"36px"})}
  }
  ${e({left:"31px",height:"32px",width:"2px",top:"50px"})}
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
    ${e({width:"21px",height:"40px",left:"50%",top:"60px"})}
`;t.div`
position: absolute;
top: 30px;
z-index: 2;
width: 100%;
height: 3px;
background-color: #000;
${e({top:"17px",height:"2px"})}

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
    ${e({top:"10px"})}
  }


`;export{p as C,x as D,s as G,l as L,d as R,c as T,h as a,g as b};
