import{r as c,j as a}from"./index-aOwAP3n6.js";import{C as o,P as u,F as l,B as m,S as d,a as x,L as p,e as S,d as g,N as j}from"./NavigationButtons-aIZdorSK.js";import{O as h}from"./OptionsComponent-pjro10hV.js";import{u as v}from"./useSurvey-DOGRzGTl.js";var r=(e=>(e.Tecnología="Tecnología",e.Software="Software",e.Servicios="Servicios",e.Financiera="Financiera",e.Telecomunicaciones="Telecomunicaciones",e["Producción / Fabricación"]="Producción Fabricación",e.Logística="Logística",e["Consumo Masivo"]="Consumo Masivo",e.Mayorista="Mayorista",e.Retail="Retail",e.Otra="Otra",e))(r||{});const F=()=>{const{state:e,dispatch:t}=v(),s=c.useRef("02"),i=n=>{t({type:"SET_RESPONSE",payload:{step:s.current,response:n}})};return a.jsxs(o,{children:[a.jsx(u,{$progress:"80%"}),a.jsx(l,{children:a.jsx(m,{pageNumber:"05"})}),a.jsx(d,{children:a.jsxs(x,{children:[a.jsx(p,{}),a.jsx(S,{children:"Ahora te vamos a sorprender..."}),a.jsx(g,{children:"¿A cuál industria pertenece tu empresa?"}),a.jsx(h,{selected:e[s.current],options:Object.values(r),columns:"2",handleClick:i}),a.jsx(j,{text:"Siguiente",isFirstORLastPage:!1,nextPage:"/step-6",previousPage:"/step-5"})]})})]})};export{F as default};