import{r as o,j as r}from"./index-mpLyFMy0.js";import{u,C as c,P as d,F as l,B as p,S as x,a as g,L as j,b as m,c as S,d as h,N as v}from"./NavigationButtons-CjIusg3B.js";import{O as f}from"./OptionsComponent-CUmsmk3p.js";var s=(e=>(e["Board member"]="Board member",e["C-level"]="C-level",e.Gerente="Gerente",e.Subgerente="Subgerente",e["Jefe área"]="Jefe área",e["Lider de área"]="Lider de área",e["Ejecutivo / Analista"]="Ejecutivo / Analista",e.Otro="Otro",e))(s||{});const E=()=>{const{state:e,dispatch:t}=u(),a=o.useRef("step-2"),n=i=>{t({type:"SET_RESPONSE",payload:{step:a.current,response:i}})};return r.jsxs(c,{children:[r.jsx(d,{$progress:"32%"}),r.jsx(l,{children:r.jsx(p,{pageNumber:"02"})}),r.jsx(x,{children:r.jsxs(g,{children:[r.jsx(j,{}),r.jsxs(m,{children:[r.jsxs(S,{children:["Genial ",e["step-1"],", "]}),"ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:"]}),r.jsx(h,{$spacing:!0,children:"¿Cuál es tu cargo/posición dentro de tu empresa?"}),r.jsx(f,{selected:e[a.current],options:Object.values(s),columns:"2",handleClick:n}),r.jsx(v,{text:"Siguiente",isFirstORLastPage:!1,nextPage:"/step-3",previousPage:"/"})]})})]})};export{E as default};
