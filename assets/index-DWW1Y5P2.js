import{r as c,j as a}from"./index-mpLyFMy0.js";import{u as o,C as u,P as l,F as d,B as x,S as m,a as p,L as S,e as g,d as j,N as h}from"./NavigationButtons-CjIusg3B.js";import{O as v}from"./OptionsComponent-CUmsmk3p.js";var r=(e=>(e.Tecnología="Tecnología",e.Software="Software",e.Servicios="Servicios",e.Financiera="Financiera",e.Telecomunicaciones="Telecomunicaciones",e["Producción / Fabricación"]="Producción Fabricación",e.Logística="Logística",e["Consumo Masivo"]="Consumo Masivo",e.Mayorista="Mayorista",e.Retail="Retail",e.Otra="Otra",e))(r||{});const C=()=>{const{state:e,dispatch:t}=o(),s=c.useRef("step-5"),i=n=>{t({type:"SET_RESPONSE",payload:{step:s.current,response:n}})};return a.jsxs(u,{children:[a.jsx(l,{$progress:"80%"}),a.jsx(d,{children:a.jsx(x,{pageNumber:"05"})}),a.jsx(m,{children:a.jsxs(p,{children:[a.jsx(S,{}),a.jsx(g,{children:"Ahora te vamos a sorprender..."}),a.jsx(j,{children:"¿A cuál industria pertenece tu empresa?"}),a.jsx(v,{selected:e[s.current],options:Object.values(r),columns:"2",handleClick:i}),a.jsx(h,{text:"Siguiente",isFirstORLastPage:!1,nextPage:"/step-6",previousPage:"/step-4"})]})})]})};export{C as default};