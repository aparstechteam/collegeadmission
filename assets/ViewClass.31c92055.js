import{d as i,r as n,h as u,o as l,c as a,a as t,t as o}from"./index.f92bb1a9.js";const d={key:0,class:"container py-5 mx-auto px-2"},_={class:"text-center mb-4"},p={class:"text-2xl font-semibold"},m={class:"text-center text-2xl"},v={class:"md:w-2/3 mx-auto rounded-2xl overflow-hidden"},h=["src"],x={key:1,class:"py-10 text-center"},b=t("button",{class:"btn btn-circle loading"},null,-1),f=[b],g={__name:"ViewClass",setup(w){const r=i(),e=n(null);return u(r.params.id).then(s=>{let c=s.exam.video;e.value={title:s.exam.title,video:c.split("v=")[1],instructor:s.exam.instructor,chapter:s.exam.chapter,subject:s.exam.subject}}),(s,c)=>e.value?(l(),a("div",d,[t("div",_,[t("h1",p,o(e.value.subject),1),t("h1",m,o(e.value.chapter)+" - "+o(e.value.title),1),t("p",null,o(e.value.instructor),1)]),t("div",v,[t("iframe",{class:"w-full aspect-video",src:`https://www.youtube.com/embed/${e.value.video}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,h)])])):(l(),a("div",x,f))}};export{g as default};
