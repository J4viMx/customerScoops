import{d as n,r as c,j as e}from"./index-aOwAP3n6.js";import{C as i,P as d,F as u,B as p,S as l,a as m,L as x,b as g,c as h,d as j,N as S}from"./NavigationButtons-aIZdorSK.js";import{u as b}from"./useSurvey-DOGRzGTl.js";const y=n.input`
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: ${a=>a.theme.text.medium};
  color: #aaa;
  background-color: transparent;
  outline: none;

  &:focus {
    border-bottom-color: #aaaa;
  }

  &::placeholder {
    color: #aaa;
  }
`,P=()=>{const{state:a,dispatch:r}=b(),t=c.useRef("01"),s=o=>{r({type:"SET_RESPONSE",payload:{step:t.current,response:o.target.value}})};return e.jsxs(i,{children:[e.jsx(d,{$progress:"16%"}),e.jsx(u,{children:e.jsx(p,{pageNumber:"01"})}),e.jsx(l,{children:e.jsxs(m,{children:[e.jsx(x,{}),e.jsxs(g,{children:["Muchas gracias por tu interés en conocer"," ",e.jsx(h,{children:"customerScoops,"})," que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio."]}),e.jsx(j,{$spacing:!0,children:"Queremos conocerte, ¿cuál es tu nombre?"}),e.jsx(y,{placeholder:"Nombre",type:"text",value:a[t.current]??"",onChange:s}),e.jsx(S,{text:"Comenzar",isFirstORLastPage:!0,nextPage:"/step-2"})]})})]})};export{P as default};
