import{j as a,L as l,m as i,b as r,d,e as g,g as m}from"./index-Bkq04ISC.js";function p({blogItem:e}){const{image:t,title:s,type:n,date:o,path:c}=e;return a.jsxs(l,{className:"blog__card",to:`/blog/${c}`,children:[a.jsx("img",{src:t,alt:"blog1"}),a.jsxs("div",{className:"blog__info",children:[a.jsx("span",{className:"blog__info-title",children:s}),a.jsxs("p",{className:"blog__info-status",children:[a.jsx("span",{className:"blog__info-status-type",children:n}),a.jsx("span",{className:"blog__info-status-dote"}),a.jsx("span",{className:"blog__info-status-date",children:o})]})]})]})}const h=[{image:r,title:"AI: Your Guide to Reducing Work Time and Boosting Efficiency",type:"AI",date:"05/10/2024",path:"ai-guide"},{image:d,title:"Understanding Caching in JavaScript and React: Boosting Performance",type:"Web Development",date:"12/10/2024",path:"js-caching"},{image:g,title:"The Mathematical Foundations of Computer Science",type:"Computer Science",date:"18/10/2024",path:"math-computer-science"},{image:m,title:"Mastering State Management in React: Tools and Techniques",type:"ReactJS",date:"25/10/2024",path:"state-management-react"}],u={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},b={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.6,ease:"easeOut"}}};function j(){return a.jsxs(i.div,{className:"blog container",initial:"hidden",animate:"visible",variants:u,children:[a.jsx(i.h1,{className:"main__title",variants:b,children:"Thoughts"}),a.jsx("div",{className:"blog__cards",children:h.map((e,t)=>a.jsx(p,{blogItem:e},t))})]})}export{h as blogData,j as default};
