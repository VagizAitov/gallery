import{r as i,j as s}from"./index-BpEKypL4.js";const z="_width_first_15eoo_1",G="_width_second_15eoo_1",J="_width_third_15eoo_1",K="_disp_15eoo_2",Q="_notDisp_15eoo_15",U="_main_15eoo_22",W="_filterAuthors_15eoo_27",X="_closeMenu_15eoo_49",$="_buttons_15eoo_63",e0="_result_15eoo_71",s0="_clear_15eoo_82",i0="_authors_15eoo_94",t0="_invisible_15eoo_113",l0="_listAuthors_15eoo_118",n0="_years_15eoo_146",o0="_lineBetween_15eoo_166",r0="_chosenAuthor_15eoo_170",a0="_yearFromTo_15eoo_184",u0="_plus_15eoo_188",c0="_pointer_15eoo_202",e={width_first:z,width_second:G,width_third:J,disp:K,notDisp:Q,main:U,filterAuthors:W,closeMenu:X,buttons:$,result:e0,clear:s0,authors:i0,invisible:t0,listAuthors:l0,years:n0,lineBetween:o0,chosenAuthor:r0,yearFromTo:a0,plus:u0,pointer:c0},d0=({disp:B,setDisp:f,authors:S,locations:V,selectAuthors:T,selectLocations:E,notChosenClass:p,showFilterResult:Z,setSelectedYearsFrom:g,setSelectedYearsTo:j,chosenClass:H,clear:F})=>{const[u,t]=i.useState("plus"),[c,l]=i.useState("plus"),[h,n]=i.useState("plus"),[D,o]=i.useState(e.invisible),[P,r]=i.useState(e.invisible),[b,y]=i.useState(e.invisible),[L,A]=i.useState(e.invisible),[N,M]=i.useState(e.invisible),[k,C]=i.useState(e.invisible),[O,v]=i.useState(e.invisible),x=()=>{b==e.invisible?y(e.authors):(y(e.invisible),C(e.invisible))},w=()=>{L==e.invisible?A(e.authors):(A(e.invisible),v(e.invisible))},m=()=>{N==e.invisible?M(e.years):M(e.invisible)},R=()=>{k==e.invisible?C(e.listAuthors):C(e.invisible)},Y=()=>{O==e.invisible?v(e.listAuthors):v(e.invisible)};return s.jsxs("div",{className:B?e.disp:e.notDisp,children:[s.jsx("div",{onClick:()=>f(!1)}),s.jsxs("div",{className:e.main,children:[s.jsx("button",{className:e.closeMenu,onClick:()=>f(!1),children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z",fill:"#DEDEDE"})})}),s.jsx("input",{className:e.filterAuthors,type:"text",value:"ARTIST",onClick:()=>{u=="plus"?(t("minus"),o(e.pointer)):(t("plus"),o(e.invisible)),x()},readOnly:!0}),s.jsx("div",{className:e.plus,children:u=="plus"?s.jsx("svg",{onClick:()=>{u=="plus"?(t("minus"),o(e.pointer)):(t("plus"),o(e.invisible)),x()},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z",fill:"#575757"})}):s.jsx("svg",{onClick:()=>{u=="plus"?(t("minus"),o(e.pointer)):(t("plus"),o(e.invisible)),x()},width:"16",height:"2",viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z",fill:"#575757"})})}),s.jsx("input",{type:"text",value:"Select the artist",className:b,onClick:()=>R(),readOnly:!0}),s.jsx("div",{className:D,children:s.jsx("svg",{width:"12",height:"6",viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M6 6L0.803848 0.75L11.1962 0.749999L6 6Z",fill:"#575757"})})}),s.jsx("div",{className:k,children:S.map((a,_)=>s.jsx("input",{type:"text",value:a.name,onClick:()=>T(event),className:p,readOnly:!0}))}),s.jsx("input",{className:e.filterAuthors,type:"text",value:"LOCATION",onClick:()=>{c=="plus"?(l("minus"),r(e.pointer)):(l("plus"),r(e.invisible)),w()},readOnly:!0}),s.jsx("div",{className:e.plus,children:c=="plus"?s.jsx("svg",{onClick:()=>{c=="plus"?(l("minus"),r(e.pointer)):(l("plus"),r(e.invisible)),w()},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z",fill:"#575757"})}):s.jsx("svg",{onClick:()=>{c=="plus"?(l("minus"),r(e.pointer)):(l("plus"),r(e.invisible)),w()},width:"16",height:"2",viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z",fill:"#575757"})})}),s.jsx("input",{type:"text",value:"Select the location",className:L,onClick:()=>Y(),readOnly:!0}),s.jsx("div",{className:P,children:s.jsx("svg",{width:"12",height:"6",viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M6 6L0.803848 0.75L11.1962 0.749999L6 6Z",fill:"#575757"})})}),s.jsx("div",{className:O,children:V.map((a,_)=>s.jsx("input",{type:"text",value:a.location,onClick:()=>E(event),className:p,readOnly:!0}))}),s.jsx("div",{className:e.locations}),s.jsx("input",{className:e.filterAuthors,type:"text",value:"YEARS",onClick:()=>{h=="plus"?n("minus"):n("plus"),m()},readOnly:!0}),s.jsx("div",{className:e.plus,children:h=="plus"?s.jsx("svg",{onClick:()=>{h=="plus"?n("minus"):n("plus"),m()},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C8.17681 0 8.34638 0.070238 8.47141 0.195262C8.59643 0.320287 8.66667 0.489856 8.66667 0.666667V7.33333H15.3333C15.5101 7.33333 15.6797 7.40357 15.8047 7.5286C15.9298 7.65362 16 7.82319 16 8C16 8.17681 15.9298 8.34638 15.8047 8.47141C15.6797 8.59643 15.5101 8.66667 15.3333 8.66667H8.66667V15.3333C8.66667 15.5101 8.59643 15.6797 8.47141 15.8047C8.34638 15.9298 8.17681 16 8 16C7.82319 16 7.65362 15.9298 7.5286 15.8047C7.40357 15.6797 7.33333 15.5101 7.33333 15.3333V8.66667H0.666667C0.489856 8.66667 0.320287 8.59643 0.195262 8.47141C0.070238 8.34638 0 8.17681 0 8C0 7.82319 0.070238 7.65362 0.195262 7.5286C0.320287 7.40357 0.489856 7.33333 0.666667 7.33333H7.33333V0.666667C7.33333 0.489856 7.40357 0.320287 7.5286 0.195262C7.65362 0.070238 7.82319 0 8 0Z",fill:"#575757"})}):s.jsx("svg",{onClick:()=>{h=="plus"?n("minus"):n("plus"),m()},width:"16",height:"2",viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.7 1.70005H15.4C15.6 1.70005 15.7 1.60005 15.9 1.50005C15.9 1.30005 16 1.20005 16 1.00005C16 0.800049 15.9 0.700049 15.8 0.500049C15.7 0.400049 15.5 0.300049 15.3 0.300049H8.7H7.3H0.7C0.5 0.300049 0.4 0.400049 0.2 0.500049C0.1 0.700049 0 0.800049 0 1.00005C0 1.20005 0.1 1.30005 0.2 1.50005C0.3 1.60005 0.5 1.70005 0.7 1.70005H7.4H8.7Z",fill:"#575757"})})}),s.jsxs("div",{className:N,children:[s.jsx("input",{type:"text",placeholder:"From",className:e.yearFromTo,onChange:()=>{event.target.value==""?g("0"):g(event.target.value)}}),s.jsx("svg",{className:e.lineBetween,width:"16",height:"2",viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.7 1.6998H15.4C15.6 1.6998 15.7 1.5998 15.9 1.4998C15.9 1.2998 16 1.1998 16 0.999804C16 0.799805 15.9 0.699804 15.8 0.499804C15.7 0.399804 15.5 0.299805 15.3 0.299805H8.7H7.3H0.7C0.5 0.299805 0.4 0.399804 0.2 0.499804C0.1 0.699804 0 0.799805 0 0.999804C0 1.1998 0.1 1.2998 0.2 1.4998C0.3 1.5998 0.5 1.6998 0.7 1.6998H7.4H8.7Z",fill:"#9C9C9C"})}),s.jsx("input",{type:"text",placeholder:"To",className:e.yearFromTo,onChange:()=>{event.target.value==""?j("2000"):j(event.target.value)}})]}),s.jsxs("div",{className:e.buttons,children:[s.jsx("a",{className:e.result,onClick:()=>Z(),children:"Show the result"}),s.jsx("a",{className:e.clear,onClick:()=>{const a=document.getElementsByClassName(H),_=document.getElementsByClassName(e.yearFromTo),I=Array.from(a),q=Array.from(_);I.forEach(d=>{d.classList.add(p),d.classList.remove(H)}),q.forEach(d=>{d.value=""}),F()},children:"Clear"})]})]})]})};export{d0 as default};
