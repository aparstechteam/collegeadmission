var M=Object.defineProperty,S=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var T=(a,s,i)=>s in a?M(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,x=(a,s)=>{for(var i in s||(s={}))N.call(s,i)&&T(a,i,s[i]);if(w)for(var i of w(s))A.call(s,i)&&T(a,i,s[i]);return a},k=(a,s)=>S(a,H(s));import{K as D,L as I,q as L,j as r,k as n,l as o,y as l,C as y,m as u,B as R,A as O,z as C,F as p,x as f,M as Q,N as j,H as g}from"./index.9f497bb3.js";import{a as B}from"./api.84595ed4.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";const J={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(a,s,i){var t;if((t=JSON.parse(localStorage.getItem("ca22")))==null?void 0:t.roll){i();return}i({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let a=null;B(this.$route.params.id).then(s=>{if(new Date(s.exam.start_date).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+s.exam.question,this.ended=new Date(s.exam.end_date).getTime(),this.timelimit=s.exam.timelimit*6e4,this.immediate=!s.exam.special,this.solutionpdf=s.exam.solve_sheet,a=s.exam.duration;let i=JSON.parse(localStorage.getItem("ca22")).roll;fetch(this.url+"&type=check&phone="+i).then(m=>m.json()).then(m=>{m.message=="exists"||this.ended<Date.now()?(this.result=m.result?m.result:["","Time's up"],fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{this.solution=t;let d=a;this.inttime=d*6e4,this.end=d*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(t=>t.json()).then(t=>{let d=localStorage.getItem(`attempt${this.$route.params.id}`);d?localStorage.setItem(`attempt${this.$route.params.id}`,Number(d)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=t.map((b,e)=>k(x({},b),{selected:"",id:e})),this.questions=this.questions.sort(()=>Math.random()-.5);let c=a;this.inttime=c*6e4,this.end=c*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let a=this.solution.reduce((s,i)=>(i.correct==i.selected?(s+=1,this.status.Correct+=1):i.selected?(s-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,s),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${a}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=a,this.solution=this.solution.map(s=>k(x({},s),{selected:""})),window.scroll(0,0)})},submitAns(){let a=Date.now()-this.starttime;this.eload=!0;let s=this.questions.reduce((c,b)=>(b.correct==b.selected?(c+=1,this.status.Correct+=1):b.selected?(c-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,c),0);clearTimeout(this.timing);let{roll:i,name:m,school:t}=JSON.parse(localStorage.getItem("ca22")),d=this.questions.map(c=>{let e=[c.a,c.b,c.c,c.d].indexOf(c.selected);return{id:c.id,s:e}}).filter(c=>c.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:m,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:s,college:t,duration:a,submission:JSON.stringify(d)})}).then(()=>{clearTimeout(this.timing),parseInt(this.$route.query.q||this.questions.length),this.$swal({icon:"success",title:"Successfully Submitted",text:`You Scored ${s}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.gotoLeaderboard(),window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(a){this.show=!0;const s=setInterval(()=>{const i=a-Date.now();if(i<0){clearInterval(s);return}const m=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),d=Math.floor(i%this._hours/this._minutes),c=Math.floor(i%this._minutes/this._seconds);this.second=c<10?"0"+c:c,this.minute=d<10?"0"+d:d,this.hours=t<10?"0"+t:t,this.days=m<10?"0"+m:m},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:k(x({},D(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>I.state.currentTime})},v=a=>(Q("data-v-be1fa52e"),a=a(),j(),a),V={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},Y={class:"py-3 text-center"},z={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},E={key:0},F={key:1,class:"text-center text-gray-900"},K={class:"py-5"},G=y(" View Solution "),P=["textContent"],U={key:0,class:"my-5 text-center"},Z={key:1,class:"text-center"},X=["textContent"],$={key:2,class:"text-center"},q=v(()=>o("button",{class:"btn loading btn-circle"},null,-1)),ee=[q],te={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},oe={class:"py-4 text-center"},re={class:"text-2xl font-bold text-gray-900"},ne=v(()=>o("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},le=["innerHTML"],de={class:"btn btn-sm"},ae={class:"mt-3"},ce=["innerHTML","onClick"],ue=["innerHTML","onClick"],he=["innerHTML","onClick"],ge=["innerHTML","onClick"],me={class:"mb-10 text-center"},be={key:2,class:"pb-10"},_e={class:"py-4 text-center"},ye={class:"text-2xl font-bold text-gray-900"},xe=v(()=>o("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ke={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},pe=["innerHTML"],ve=y(),fe={class:"btn btn-sm"},we={class:"mt-3"},Te=["innerHTML","onClick"],Le=["innerHTML","onClick"],Ce=["innerHTML","onClick"],Me=["innerHTML","onClick"],Se={key:0,class:"my-2 text-center"},He={key:1,class:"mb-10 text-center"},Ne=["disabled"],Ae={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},De={class:"flex flex-wrap justify-center"},Ie={class:"w-full p-3 md:w-1/2"},Re={class:"text-center"},Oe={class:"text-lg font-semibold text-gray-900 dark:text-white"},Qe={class:"text-gray-600 dark:text-white"},je={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},Be={class:"text-gray-900"},We={class:"text-lg font-bold"},Je={class:"text-lg font-bold"},Ve={class:"text-lg font-bold"},Ye={class:"text-lg font-bold"},ze=["innerHTML"],Ee={class:"mt-3"},Fe=["innerHTML"],Ke=["innerHTML"],Ge=["innerHTML"],Pe=["innerHTML"],Ue={key:0,class:"my-2 poppins"},Ze=["innerHTML"],Xe={class:"material-icons"},$e={key:0,class:"my-2 text-center"},qe={key:1,class:"mb-10 text-center"},et=["disabled"],tt={key:3,class:"white--text fixed__timer"},st={class:"text-white bg-blue-500 border border-white shadow"},ot={key:1,class:"flex items-center justify-center w-full h-screen"},rt=v(()=>o("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[o("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),o("div",{class:"text-lg dark:text-white"},"Loading ...")],-1)),nt=[rt];function it(a,s,i,m,t,d){const c=L("router-link"),b=L("pie-chart");return t.loading?(r(),n("div",ot,nt)):(r(),n("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(r(),n("div",V,[o("div",Y,[t.result[1]?(r(),n("h2",z,[t.result[1]!=="Time's up"?(r(),n("span",E,"You Scored:")):l("",!0),y(" "+u(t.result[1]),1)])):l("",!0),t.result[1]=="Time's up"?(r(),n("p",F,"But you can still give the exam. Click 'Test yourself again'.")):l("",!0),o("div",K,[this.ended<d.currentTime||t.immediate?(r(),R(c,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:O(()=>[G]),_:1},8,["to"])):(r(),n("button",{key:1,class:"btn btn-primary",onClick:s[0]||(s[0]=(...e)=>d.endalert&&d.endalert(...e)),textContent:u("View Solution")},null,8,P))])]),!t.retake&&t.solution.length>0?(r(),n("div",U,[C(c,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):l("",!0),!t.retake&&t.solution.length>0?(r(),n("div",Z,[o("button",{class:"mx-auto btn btn-primary",onClick:s[1]||(s[1]=(...e)=>d.startRetake&&d.startRetake(...e)),textContent:u("Test Yourself Again")},null,8,X)])):(r(),n("div",$,ee)),!t.retake&&t.solution.length>0?(r(),n("div",te," Retake exam score will not be recorded ")):l("",!0)])):l("",!0),t.retake?(r(),n("div",se,[o("div",oe,[o("h1",re," Retake Exam - "+u(this.$route.params.id),1),ne]),o("div",ie,[(r(!0),n(p,null,f(t.solution,(e,h)=>(r(),n("div",{key:h,class:g(["p-5 mx-auto my-3 text-lg text-gray-900 border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.solution[h].selected}])},[o("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,le),o("span",de,"Q No. "+u(h+1),1),o("div",ae,[e.a?(r(),n("div",{key:0,innerHTML:e.a,onClick:_=>t.solution[h].selected=e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ce)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,onClick:_=>t.solution[h].selected=e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ue)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,onClick:_=>t.solution[h].selected=e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,he)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,onClick:_=>t.solution[h].selected=e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ge)):l("",!0)])],2))),128)),o("div",me,[o("button",{onClick:s[2]||(s[2]=(...e)=>d.retakeResult&&d.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):l("",!0),t.questions.length>0?(r(),n("div",be,[o("div",_e,[o("h1",ye," Exam - "+u(this.$route.params.id),1),xe]),t.viewDetails?(r(),n("div",Ae,[o("div",null,[o("div",De,[o("div",Ie,[o("div",Re,[o("h3",Oe," You Scored: "+u(t.score),1),o("p",Qe," out of "+u(t.questions.length),1)])])])]),o("div",null,[o("div",je,[o("div",null,[C(b,{data:t.status},null,8,["data"])]),o("div",Be,[o("p",We," Total: "+u(t.questions.length),1),o("p",Je," Correct: "+u(t.status.Correct),1),o("p",Ve," Incorrect: "+u(t.status.Wrong),1),o("p",Ye," Not Answered: "+u(t.status.Not_Answered),1)])])]),(r(!0),n(p,null,f(t.questions,(e,h)=>(r(),n("div",{key:h,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 dark:bg-black dark:text-white kalpurush"},[o("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${h+1})</span>`+e.question},null,8,ze),o("div",Ee,[e.a?(r(),n("div",{key:0,innerHTML:e.a,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Fe)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ke)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Ge)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,class:g(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,Pe)):l("",!0)]),e.explain?(r(),n("h2",Ue,"Explain:")):l("",!0),e.explain?(r(),n("div",{key:1,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,Ze)):l("",!0),o("div",{class:g(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[o("span",Xe,u(e.correct==e.selected?"done":"close"),1),e.selected?(r(),n(p,{key:0},[y(u(e.correct==e.selected?"Correct":"Wrong"),1)],64)):l("",!0),y(" "+u(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(r(),n("div",$e,[o("button",{onClick:s[5]||(s[5]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(r(),n("div",qe,[o("button",{onClick:s[6]||(s[6]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,et)]))])):(r(),n("div",ke,[(r(!0),n(p,null,f(t.questions,(e,h)=>(r(),n("div",{key:h,class:g(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.questions[h].selected}])},[o("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,pe),ve,o("span",fe,"Q No. "+u(h+1),1),o("div",we,[e.a?(r(),n("div",{key:0,innerHTML:e.a,onClick:_=>t.questions[h].selected=e.a,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Te)):l("",!0),e.b?(r(),n("div",{key:1,innerHTML:e.b,onClick:_=>t.questions[h].selected=e.b,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Le)):l("",!0),e.c?(r(),n("div",{key:2,innerHTML:e.c,onClick:_=>t.questions[h].selected=e.c,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Ce)):l("",!0),e.d?(r(),n("div",{key:3,innerHTML:e.d,onClick:_=>t.questions[h].selected=e.d,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,Me)):l("",!0)])],2))),128)),t.viewDetails?(r(),n("div",Se,[o("button",{onClick:s[3]||(s[3]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(r(),n("div",He,[o("button",{onClick:s[4]||(s[4]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,Ne)]))]))])):l("",!0),t.show?(r(),n("div",tt,[o("div",st,u(t.minute)+" : "+u(t.second),1)])):l("",!0)],32))}var ut=W(J,[["render",it],["__scopeId","data-v-be1fa52e"]]);export{ut as default};
