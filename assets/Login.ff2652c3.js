import{r,B as _,g,j as v,k as e,C as f,m as b,D as x,E as k}from"./index.51b6b19b.js";import{l as w}from"./api.84595ed4.js";const y={class:"container mx-auto py-20"},B={class:"max-w-md mx-auto"},S=["onSubmit"],C=e("h2",{class:"text-lg font-medium text-center"},"Login With Credentials",-1),D={class:"form-control"},E={class:"text-center"},L=e("div",{class:"text-center pt-10"},[e("p",{class:"mt-5"}," To enroll and know more about the program please enroll. "),e("a",{href:"https://aparsclassroom.com/shop/ndc-hcc/hsc24",target:"_blank",class:"btn btn-sm"},"Enroll")],-1),U={__name:"Login",setup(N){const s=r(""),n=_(),o=r(!1),c=()=>{o.value=!0;let a=s.value.substr(s.value.length-10);w(a).then(t=>{t.user||n.push("/register?phone="+a);let l=t.user,[i,u,m,d,p]=l,h={phone:i,roll:u,name:m,email:d,school:p};localStorage.setItem("ca22",JSON.stringify(h)),n.push("/")}).catch(t=>{console.log(t),o.value=!1})};return(a,t)=>(g(),v("div",y,[e("div",B,[e("form",{class:"space-y-2",onSubmit:f(c,["prevent"])},[C,e("div",D,[b(e("input",{type:"tel",class:"input input-bordered",placeholder:"Your Phone Number",id:"phone","onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l)},null,512),[[x,s.value]])]),e("div",E,[e("button",{class:k(["btn btn-success",{loading:o.value}])},"Login",2)])],40,S)]),L]))}};export{U as default};
