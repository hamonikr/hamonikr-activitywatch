(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9f79038"],{3118:function(t,e,n){},"35cd":function(t,e,n){"use strict";var i=n("3118"),a=n.n(i);a.a},4711:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},a=[],r=n("9031"),l=n("5acd"),s=n("5698"),o=n("6929"),c=n("2ef0"),d=n("c1df");function u(t,e){var n=t.querySelector("#"+e),i=t.querySelector(".titleinfo-container");i.innerHTML=n.innerHTML,i.style.height=n.getAttribute("height")}function p(t){t.innerHTML="",s.select(t).append("svg").attr("class","apptimeline").attr("viewBox","0 0 100 10").attr("width","100%"),s.select(t).append("div").attr("class","titleinfo-list").attr("display","none");var e=document.createElement("div");e.style.width="100%",e.style.height="200px",e.style.overflowY="scroll",t.appendChild(e),s.select(e).append("div").attr("width","100%").attr("class","titleinfo-container")}function f(t,e){var n=t.querySelector(".apptimeline"),i=t.querySelector(".titleinfo-list"),a=t.querySelector(".titleinfo-container"),r=s.select(n);n.innerHTML="",i.innerHTML="",a.innerHTML="",r.append("text").attr("x","0").attr("y","3").text(e).attr("font-family","sans-serif").attr("font-size","3").attr("fill","black")}function h(t,e,n,i,a){var p=s.select(t.querySelector(".apptimeline")).html(null),h=s.select(t.querySelector(".titleinfo-list")).html(null);if(s.select(t.querySelector(".titleinfo-container")).html(null),!(e.length<=0)){var m=e[0],y=e[e.length-1],v=d(m.timestamp),w=d(y.timestamp).add(y.duration,"seconds"),x=c.sumBy(e,"duration"),_=w.diff(v,"seconds",!0),g=0;return c.each(e,(function(e,s){var f,m;if(n){var y=d(e.timestamp);f=y.diff(v,"seconds",!0)/_,f=100*f+"%",m=e.duration/_*100+"%"}else f=g,m=e.duration/x*100;var w=Object(r["getColorFromString"])(i(e)),k=o(w).darken(.4).hex(),b=p.append("g").attr("id","timeline_event_"+s),S=b.append("rect").attr("x",f).attr("y",0).attr("width",m).attr("height",10).style("fill",w).on("mouseover",(function(){S.style("fill",k),u(t,"titleinfo_event_"+s)})).on("mouseout",(function(){S.style("fill",w)})),q=h.append("div").attr("id","titleinfo_event_"+s).style("display","none");q.append("h5").attr("x","10px").attr("y","20px").text(i(e)+" ("+Object(l["seconds_to_duration"])(e.duration)+")").attr("font-family","sans-serif").attr("font-size","20px").attr("fill","black");var H=q.append("table");c.each(e.data.subevents,(function(t){var e=H.append("tr"),n=d(t.timestamp).format("HH:mm:ss");e.append("td").text(n);var i=Object(l["seconds_to_duration"])(t.duration);e.append("td").text(i).style("padding-left","1em").style("text-align","right"),e.append("td").text(a(t)).style("padding-left","1em")})),g+=m})),t}f(t,"No data")}var m={create:p,update:h,set_status:f},y={name:"aw-timeline",props:{chunks:{type:Object},show_afk:{type:Boolean},chunkfunc:{type:Function},eventfunc:{type:Function}},watch:{chunks:function(){this.update()},show_afk:function(){this.update()}},mounted:function(){m.create(this.$el),this.update()},methods:{update:function(){null===this.chunks?m.set_status(this.$el,"Loading..."):m.update(this.$el,this.chunks,this.show_afk,this.chunkfunc,this.eventfunc)}}},v=y,w=(n("35cd"),n("2877")),x=Object(w["a"])(v,i,a,!1,null,"62b8c91d",null);e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-d9f79038.cfaab515.js.map