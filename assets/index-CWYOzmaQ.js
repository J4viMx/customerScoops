import{d as n,r as c,j as e}from"./index-Bb_VmvaQ.js";import{u as i,C as d,P as u,F as p,B as l,S as x,a as m,L as g,b as h,c as j,d as S,N as b}from"./NavigationButtons-B3g12gLJ.js";const y=n.input`
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
`,P=()=>{const{state:a,dispatch:s}=i(),t=c.useRef("step-1"),r=o=>{s({type:"SET_RESPONSE",payload:{step:t.current,response:o.target.value}})};return e.jsxs(d,{children:[e.jsx(u,{$progress:"16%"}),e.jsx(p,{children:e.jsx(l,{pageNumber:"01"})}),e.jsx(x,{children:e.jsxs(m,{children:[e.jsx(g,{}),e.jsxs(h,{children:["Muchas gracias por tu interés en conocer"," ",e.jsx(j,{children:"customerScoops,"})," que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio."]}),e.jsx(S,{$spacing:!0,children:"Queremos conocerte, ¿cuál es tu nombre?"}),e.jsx(y,{placeholder:"Nombre",type:"text",value:a[t.current]??"",onChange:r}),e.jsx(b,{text:"Comenzar",isFirstORLastPage:!0,nextPage:"/step-2"})]})})]})};export{P as default};
