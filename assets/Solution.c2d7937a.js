import{a as g}from"./api.84595ed4.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{j as s,k as n,l as e,m as i,F as x,x as u,H as b,y as f}from"./index.fa4f0393.js";const w={data(){return{solution:[],loading:!1,unknown:!1,download:""}},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){g(this.$route.params.id).then(c=>{this.url="https://script.google.com/macros/s/AKfycbzOBSdG0T8p7OIhwx8FSVELW8OwReJ-hS-HBS09FT3abMJR6MEeUyGFjItGBoVJYLDCkQ/exec?sheet="+c.exam.question;let p=JSON.parse(localStorage.getItem("ca22")).roll;fetch(this.url+"&type=check&phone="+p).then(d=>d.json()).then(d=>{new Date(c.exam.end_date).getTime()<Date.now()?(fetch(this.url+"&type=question").then(a=>a.json()).then(a=>{fetch(this.url).then(o=>o.json()).then(o=>{let _=a.map((t,l)=>(t.total_ans=0,t.t_0=0,t.t_1=0,t.t_2=0,t.t_3=0,o.forEach(r=>{JSON.parse(r.submission).forEach(m=>{l==m.id&&(t[`t_${m.s}`]++,t.total_ans++)})}),t.per_a=t.t_0/t.total_ans*100||0,t.per_b=t.t_1/t.total_ans*100||0,t.per_c=t.t_2/t.total_ans*100||0,t.per_d=t.t_3/t.total_ans*100||0,t));this.solution=_})}),this.loading=!1):(this.$router.push("/"),this.unknown=!0)})})}},created(){this.getQuestionLink()}},k={key:0},v={key:0,class:"pb-10"},L={class:"py-4 text-center"},S={class:"text-2xl font-bold text-gray-800 poppins"},T={class:"mx-2 md:w-2/3 md:mx-auto print:text-black",ref:"content"},M=["innerHTML"],$={class:"mt-3 space-y-2"},E=["innerHTML"],H={class:"text-sm priint:hidden"},j={class:"print:hidden"},B={key:0,class:"my-2 poppins"},F=["innerHTML"],J={key:1},O=e("h2",{class:"mt-10 text-2xl text-center dark:text-white"}," You must participate in the exam or you will not be able to view this solution untill time ends. ",-1),C=[O],D={key:1,class:"flex items-center justify-center w-full h-screen"},I=e("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[e("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),e("div",{class:"text-lg"},"Loading ...")],-1),N=[I];function R(c,p,d,a,o,_){return o.solution.length>0?(s(),n("div",k,[o.unknown?(s(),n("div",J,C)):(s(),n("div",v,[e("div",L,[e("h1",S," Solution for Exam - "+i(this.$route.params.id),1)]),e("div",T,[(s(!0),n(x,null,u(o.solution,(t,l)=>(s(),n("div",{key:l,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg print:border-none print:shadow-none print:p-1 dkalpurush"},[e("div",{class:"inline-flex print:text-black",innerHTML:`<span class='mr-2'>${l+1})</span>`+t.question},null,8,M),e("div",$,[(s(),n(x,null,u(["a","b","c","d"],(r,h)=>e("div",{key:h,class:b(["flex flex-col p-3 rounded shadow",{" bg-green-300 print:border-gray-900":t[r]==t.correct}])},[e("div",{innerHTML:t[r]},null,8,E),e("div",H,"Response: "+i(t[`t_${h}`])+" ("+i(parseInt(t[`per_${r}`]))+"%) ",1)],2)),64)),e("p",j,"Total Response: "+i(t.total_ans),1)]),t.explain?(s(),n("h2",B,"Explain:")):f("",!0),t.explain?(s(),n("div",{key:1,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded print:text-black",innerHTML:t.explain},null,8,F)):f("",!0)]))),128))],512)]))])):(s(),n("div",D,N))}var Q=y(w,[["render",R]]);export{Q as default};
