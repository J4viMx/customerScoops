import{r as i,j as s}from"./index-mpLyFMy0.js";import{u as c,C as u,P as p,F as l,B as x,S as d,a as m,L as j,d as g,N as S}from"./NavigationButtons-CjIusg3B.js";import{O as C}from"./OptionsComponent-CUmsmk3p.js";var r=(e=>(e.SAP="SAP",e["Microsoft Dynamics"]="Microsoft Dynamics",e.Salesforce="Salesforce",e.Hubspot="Hubspot",e.Zoho="Zoho",e["Netsuite (Oracle)"]="Netsuite (Oracle)",e.Monday="Monday",e["CRM Propio"]="CRM Propio",e["No tengo CRM"]="No tengo CRM",e))(r||{});const h=()=>{const{state:e,dispatch:a}=c(),t=i.useRef("step-4"),o=n=>{a({type:"SET_RESPONSE",payload:{step:t.current,response:n}})};return s.jsxs(u,{children:[s.jsx(p,{$progress:"64%"}),s.jsx(l,{children:s.jsx(x,{pageNumber:"04"})}),s.jsx(d,{children:s.jsxs(m,{children:[s.jsx(j,{}),s.jsxs(g,{$spacing:!0,children:["¿Cuál CRM están utilizando en tu empresa? ",s.jsx("br",{})," CRM:"]}),s.jsx(C,{selected:e[t.current],options:Object.values(r),columns:"2",handleClick:o}),s.jsx(S,{text:"Siguiente",isFirstORLastPage:!1,nextPage:"/step-5",previousPage:"/step-3"})]})})]})};export{h as default};