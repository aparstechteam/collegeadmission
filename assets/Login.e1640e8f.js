import{r,s as _,j as v,k as f,l as e,H as g,y as b,I as x,D as k}from"./index.7d4b2b2b.js";import{l as y}from"./api.84595ed4.js";const w={class:"container mx-auto py-20"},S={class:"max-w-md mx-auto"},B=["onSubmit"],D=e("h2",{class:"text-lg font-medium text-center"},"Login With Credentials",-1),N={class:"form-control"},C={class:"text-center"},E=e("div",{class:"text-center pt-10"},[e("p",{class:"mt-5"}," To enroll and know more about the program please enroll. "),e("a",{href:"https://aparsclassroom.com/shop/ndc-hcc/hsc24",target:"_blank",class:"btn btn-sm"},"Enroll")],-1),T={setup(I){const s=r(""),n=_(),o=r(!1),c=()=>{o.value=!0;let a=s.value.substr(s.value.length-10);y(a).then(t=>{t.user||n.push("/register?phone="+a);let l=t.user,[i,u,d,p,h]=l,m={phone:i,roll:u,name:d,email:p,school:h};localStorage.setItem("ca22",JSON.stringify(m)),n.push("/")}).catch(t=>{console.log(t),o.value=!1})};return(a,t)=>(v(),f("div",w,[e("div",S,[e("form",{class:"space-y-2",onSubmit:g(c,["prevent"])},[D,e("div",N,[b(e("input",{type:"tel",class:"input input-bordered",placeholder:"Your Phone Number",id:"phone","onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l)},null,512),[[x,s.value]])]),e("div",C,[e("button",{class:k(["btn btn-success",{loading:o.value}])},"Login",2)])],40,B)]),E]))}};export{T as default};
