import{d as e,j as i,L as s}from"./index-aOwAP3n6.js";const A=e.div`
  width: 100%;
  position: relative;
`,l=e.div`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2;
`,p=e.div`
  width: 2px;
  height: 26px;
  margin-inline: 3px;
  background-color: ${t=>t.theme.colors.primary};
`,U=e.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
  }
`,c=e.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
  gap: 10px;
`,X=e.div`
  display: grid;
  grid-template-columns: repeat(
    ${t=>t.$columns?t.$columns:2},
    1fr
  );
  gap: 5px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${t=>t.$columns?parseInt(t.$columns,10)+1:3},
      1fr
    );
  }
`,P=e.div`
  @media (max-width: 1023px) {
    &:nth-child(odd):last-child {
      grid-column: 1 / -1;
    }
  }
`,V=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    background-color: ${t=>t.$isLastStep?t.theme.colors.blue:""};
  }
`,M=e.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    order: 2;
  }
`,T=e.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`,L=e.div`
  height: 4px;
  width: ${t=>t.$progress};
  background-color: ${t=>t.theme.colors.primary};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;

  @media (min-width: 768px) {
    height: 8px;
  }
`,m=e.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    display: none;
  }
`,g=e.img`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    display: none;
  }
`,h=e.img`
  width: 100%;
  height: 100vh;
  /* object-position: center; */
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`,x=e.img`
  display: none;
  width: 113px;
  height: 41px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: block;
  }
`,u=e.img`
  display: none;
  @media (min-width: 768px) {
    display: ${t=>t.$isFirstORLastPage?"none":"block"};
  }
`,y="/assets/banner_mobile-CBl6AMHh.png",S="/assets/banner-desktop-oJIU8P16.png",r="data:image/png;base64,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",a=e.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  color: ${t=>t.theme.colors.primary};
`,w=e(a)`
  font-size: 10px;
  line-height: 12px;
`,N=e.p`
  text-align: center;
  font-size: 11px;
  flex: 1;
`,f=e.p`
  font-size: 19px;
  font-weight: 900;
  line-height: 24px;
  color: ${t=>t.theme.colors.primary};
  text-align: left;
`,k=e(f)`
  line-height: 39px;
  font-size: 30px;
`,v=e.p`
  font-style: oblique;
  font-size: 20px;
  line-height: 26px;
  color: ${t=>t.theme.colors.primary};
  text-align: left;
  margin-top: 40px;
  font-weight: 500;
`,b=e.p`
  font-weight: 400;
  font-size: ${t=>t.theme.text.medium};
  line-height: 24px;
  color: ${t=>t.theme.colors.primary};
  text-align: left;

  @media (min-width: 768px) {
    font-size: ${t=>t.$isLastStep?"30px":"19px"};
    line-height: ${t=>t.$isLastStep?"39px":"19px"};
  }
`,D=e(b)`
  margin-top: ${t=>t.$spacing?"50px":"0px"};
  margin-bottom: 50px;
`,J=e.span`
  font-weight: 900;
`,Y=({pageNumber:t})=>i.jsxs(A,{style:{paddingLeft:"20px"},children:[i.jsx(m,{src:y,alt:"Banner mobile"}),i.jsx(h,{src:S,alt:"Banner desktop"}),i.jsx(g,{src:r,alt:"Logo Customer Scoops"}),i.jsxs(l,{children:[i.jsx(a,{children:t}),i.jsx(p,{}),i.jsx(w,{children:"06"})]})]}),H=()=>i.jsx(x,{src:r,alt:"logo Customer Scoops"}),j=e.button`
  width: 100px;
  height: 35px;
  color: white;
  font-size: ${t=>t.theme.text.small};
  background-color: ${t=>t.theme.colors.primary};
  border: none;
  border-radius: ${t=>t.theme.borderRadius};
  line-height: 13px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`,C=e.div`
  width: 35px;
  height: 35px;
  border: 2px solid ${t=>t.theme.colors.primary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,F=e.div`
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${t=>t.selected?"white":t.theme.colors.primary};
  font-size: ${t=>t.theme.text.small};
  background-color: ${t=>t.selected?t.theme.colors.primary:"transparent"};
  border: 2px solid ${t=>t.theme.colors.primary};
  border-radius: ${t=>t.theme.borderRadius};
  line-height: 13px;
  cursor: pointer;
`,z=e.div`
  width: 50px;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${t=>t.theme.colors.blue};
  color: white;
  border-radius: ${t=>t.theme.borderRadius};
  font-weight: 900;
  margin-left: 5px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBjZCxDcJADEVtXRpEcxIMEgZABDEAI7ACdRIUR+GYI5OEAAUljEEVUQESnMyRMjiQ39iynu2vDyBIZ3EgzdUXaMhXYI+92RjuxWH3E34U5aU/naBrqbmgpHe37b6UFlATaVAvX/SInLgSMDJV0SbFQRblgLCAP7LII89aS57ycglwF5euzJkxvcbmjG2XhiZMHEQfsFqtqfbcFRThOmd+nppgq7QJxXTeER9OAMw1IS8AAAAASUVORK5CYII=",E=({text:t,nextPage:o,isFirstORLastPage:n})=>i.jsx(s,{to:`${o}`,children:i.jsxs(j,{children:[t,i.jsx(u,{src:R,alt:"arrow",$isFirstORLastPage:n})]})}),I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACfSURBVHgBpZAxDsIwDEX96YRYoC0SYkKl2UMvmHAEbsAROEI5QTkCG0ywwVJiEqQgtUqVoX+yrefvLxMFJJZShuaT/qDIK2UMms08vNABt9mOy1Tq0SA8CGYL4YSPOYTAlugKYbOZBA1FhePPucylZoayZQ3wPujc0uXfuAWXuUgrNeSd+OLxutfZbOUu6cV0Tc/37Uwx+QvRP3uJAfALawYt7qtWnsYAAAAASUVORK5CYII=",O=({link:t})=>i.jsx(s,{to:t,children:i.jsx(C,{children:i.jsx("img",{src:I,alt:"arrow"})})}),G=({text:t,isFirstORLastPage:o,nextPage:n,previousPage:d})=>i.jsxs(c,{children:[!o&&i.jsx(O,{link:d||""}),i.jsx(E,{text:t,nextPage:n,isFirstORLastPage:o})]});export{Y as B,V as C,M as F,P as I,H as L,G as N,L as P,T as S,U as a,b,J as c,D as d,f as e,F as f,z as g,N as h,X as i,k as j,v as k};
