import{j as t}from"./index-aOwAP3n6.js";import{f as a,g as d,h as i,i as x,I as h}from"./NavigationButtons-aIZdorSK.js";const p=({text:n,selected:s,letter:o,handleClick:e})=>t.jsxs(a,{onClick:e,selected:s,children:[t.jsx(d,{children:o}),t.jsx(i,{children:n})]}),u=({options:n=[],columns:s,isSpecialSelector:o,handleClick:e,selected:l})=>t.jsx(x,{$columns:s,children:n.map((r,c)=>t.jsx(h,{children:o?t.jsx(p,{text:r,selected:l===r,handleClick:()=>e(r),letter:String.fromCharCode(96+(c+1))}):t.jsx(a,{selected:l===r,onClick:()=>e(r),children:r})},r))});export{u as O};
