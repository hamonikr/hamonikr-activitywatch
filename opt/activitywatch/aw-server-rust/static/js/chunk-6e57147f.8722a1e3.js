(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e57147f"],{"26e9":function(t,e,a){"use strict";var n=a("23e7"),i=a("e8b5"),r=[].reverse,s=[1,2];n({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),r.call(this)}})},"2b10":function(t,e){function a(t,e,a){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),a=a>i?i:a,a<0&&(a+=i),i=e>a?0:a-e>>>0,e>>>=0;var r=Array(i);while(++n<i)r[n]=t[n+e];return r}t.exports=a},3482:function(t,e,a){var n=a("087d"),i=a("5c69"),r=a("4359"),s=a("6747");function o(){var t=arguments.length;if(!t)return[];var e=Array(t-1),a=arguments[0],o=t;while(o--)e[o-1]=arguments[o];return n(s(a)?r(a):[a],i(e,1))}t.exports=o},"4e82":function(t,e,a){"use strict";var n=a("23e7"),i=a("1c0b"),r=a("7b0b"),s=a("d039"),o=a("a640"),c=[],l=c.sort,d=s((function(){c.sort(void 0)})),u=s((function(){c.sort(null)})),f=o("sort"),h=d||!u||!f;n({target:"Array",proto:!0,forced:h},{sort:function(t){return void 0===t?l.call(r(this)):l.call(r(this),i(t))}})},"65c2":function(t,e,a){"use strict";var n=a("7cfd"),i=a.n(n);i.a},"69f38":function(t,e,a){t.exports=a("a59b")},"7cfd":function(t,e,a){},a59b:function(t,e){function a(t){return t&&t.length?t[0]:void 0}t.exports=a},b2fc:function(t,e,a){"use strict";a.r(e);var n,i,r,s,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sunburst"},[t._m(0),a("div",{staticClass:"main"},[a("div",{staticClass:"chart"},[a("div",{staticClass:"explanation"},[a("div",{staticClass:"base"},[t._v(t._s(t.centerMsg))]),t._m(1)])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"legend"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hover",staticStyle:{visibility:"hidden"}},[a("div",{staticClass:"date"}),a("div",{staticClass:"title"}),a("div",{staticClass:"time"}),a("div",{staticClass:"duration"}),a("div",{staticClass:"data",staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}})])}],l=a("ce20"),d=a.n(l),u=a("69f38"),f=a.n(u),h=a("3482"),v=a.n(h),p=a("c707"),m=a.n(p),g=(a("4de4"),a("c975"),a("26e9"),a("4e82"),a("d3b7"),a("ddb0"),a("5acd")),y=a("5698"),x=a("c1df"),w=a("9031"),b=750,C=600,k=Math.min(b,C)/2,M={afk:w.getColorFromString("afk"),"not-afk":w.getColorFromString("not-afk"),hibernating:w.getColorFromString("hibernating")};function A(){var t={w:75,h:30,s:3,r:3},e=y.select(".legend").append("svg:svg").attr("width",t.w).attr("height",y.keys(M).length*(t.h+t.s)),a=e.selectAll("g").data(y.entries(M)).enter().append("svg:g").attr("transform",(function(e,a){return"translate(0,"+a*(t.h+t.s)+")"}));a.append("svg:rect").attr("rx",t.r).attr("ry",t.r).attr("width",t.w).attr("height",t.h).style("fill",(function(t){return t.value})),a.append("svg:text").attr("x",t.w/2).attr("y",t.h/2).attr("dy","0.35em").attr("text-anchor","middle").text((function(t){return t.key}))}function S(t){var e=Math.cos(t),a=Math.sin(t);i.append("line").attr("x1",170*e).attr("y1",170*a).attr("x2",155*e).attr("y2",155*a).style("stroke","#CCC").style("stroke-width",1)}function _(t,e,a){var n=2*Math.PI*(t/24+e/24/60)-.5*Math.PI;S(n);var r=Math.cos(n),s=Math.sin(n);i.append("text").text(a||x({hours:t}).format("HH:mm")).attr("text-anchor","middle").attr("font-size","1.2em").style("fill","#999").attr("x",130*r).attr("y",5+140*s)}function O(t){console.log("Clicked"),console.log(t)}function I(t){var e=y.select(".explanation > .hover"),a=x(t.data.timestamp);e.select(".date").text(a.format("YYYY-MM-DD")),e.select(".time").text(a.format("HH:mm:ss"));var n=Object(g["seconds_to_duration"])(t.data.duration);e.select(".duration").text(n),e.select(".title").text(t.data.data.app||t.data.data.status),e.select(".data").text(t.data.data.title||""),y.select(".explanation > .base").style("display","none"),e.style("visibility","")}function B(t){I(t);var e=t.ancestors().reverse();e.shift(),n.selectAll("path").style("opacity",.5),n.selectAll("path").filter((function(t){return e.indexOf(t)>=0})).style("opacity",1)}function E(){n.selectAll("path").on("mouseover",null),n.selectAll("path").transition().duration(100).style("opacity",1).on("end",(function(){y.select(this).on("mouseover",B)})),n.select(".explanation > .base").style("display",""),n.select(".explanation > .hover").style("visibility","hidden")}function H(){var t=y.select(".sequence").append("svg:svg").attr("width",b).attr("height",50).attr("id","trail");t.append("svg:text").attr("id","endlabel").style("fill","#000")}function $(t){n=y.select(".chart"),n.selectAll("svg").remove(),i=n.append("svg:svg").attr("width",b).attr("height",C).append("svg:g").attr("id","container").attr("transform","translate("+b/2+","+C/2+")"),A(t),r=y.partition().size([2*Math.PI,k*k]),s=y.arc().startAngle((function(t){return t.x0})).endAngle((function(t){return t.x1})).innerRadius((function(t){return Math.sqrt(t.y0)})).outerRadius((function(t){return Math.sqrt(t.y1)}))}function z(t,e){H(),t.querySelector("#container").innerHTML="",i.append("svg:circle").attr("r",k).style("opacity",0);var a=y.hierarchy(e),n=r(a),o=!0;if(o){var c=!0,l=x(e.timestamp),d=x(e.timestamp).add(e.duration,"seconds");if(c){l=l.startOf("day"),d=l.clone().endOf("day"),_(0,0),_(6,0),_(12,0),_(18,0);var u=x();_(u.hour(),u.minute(),"Now")}n=n.each((function(t){var e=x(t.data.timestamp).diff(l,"seconds",!0),a=x(t.data.timestamp).add(t.data.duration,"seconds").diff(l,"seconds",!0),n=Math.max(0,e/((d-l)/1e3)),i=Math.min(1,a/((d-l)/1e3));t.x0=2*Math.PI*n,t.x1=2*Math.PI*i})).descendants()}else a=a.sum((function(t){return t.duration})).sort((function(t,e){return JSON.stringify(t.data.data).localeCompare(JSON.stringify(e.data.data))})),n=n.descendants();n=n.filter((function(t){var e=.001;return t.x1-t.x0>e})),i.data([e]).selectAll("path").data(n).enter().append("svg:path").attr("display",(function(t){return t.depth?null:"none"})).attr("d",s).attr("fill-rule","evenodd").style("fill",(function(t){return w.getColorFromString(t.data.data.status||t.data.data.app)})).style("opacity",1).on("mouseover",B).on("click",O),y.select("#container").on("mouseleave",E)}var P={create:$,update:z},q=a("c1df"),F=a.n(q),J={name:"aw-sunburst-clock",props:{date:{type:String},afkBucketId:{type:String},windowBucketId:{type:String}},data:function(){return{starttime:F()(),endtime:F()(),centerMsg:"Loading..."}},watch:{date:function(t){this.starttime=F()(t),this.endtime=F()(this.starttime).add(1,"days"),this.visualize()}},mounted:function(){P.create(this.$el),this.starttime=F()(this.date),this.endtime=F()(this.date).add(1,"days"),this.visualize()},methods:{todaysEvents:function(t){return this.$aw.getEvents(t,{limit:-1,start:this.starttime.format(),end:this.endtime.format()})},visualize:function(){var t=this;function e(t,e){t=m()(t,"timestamp","desc"),e=m()(e,"timestamp","desc");for(var a=0,n=0;n<t.length;n++){var i=t[n],r=F()(i.timestamp),s=r.clone().add(i.duration,"seconds");i.children=[];while(a<e.length){var o=e[a],c=F()(o.timestamp),l=c.clone().add(o.duration,"seconds"),u=l.isBefore(r),h=c.isAfter(r)&&l.isBefore(s),p=c.isAfter(s);if(u)a++;else if(h)i.children=v()(i.children,o),a++;else{if(p)break;console.warn("Between parents"),i.children=v()(i.children,o),a++}}}var g=F()(f()(t).timestamp),y=F()(d()(t).timestamp),x=(y-g)/1e3;return{timestamp:f()(t).timestamp,duration:x,data:{title:"ROOT"},children:t}}this.todaysEvents(this.afkBucketId).then((function(a){t.todaysEvents(t.windowBucketId).then((function(n){var i=null;a.length>0&&n.length>0?(i=e(a,n),t.centerMsg="Hover to inspect"):(i={timestamp:"",duration:0,data:{title:"ROOT"},children:[]},t.centerMsg="No data"),P.update(t.$el,i)}))}))}}},N=J,R=(a("65c2"),a("2877")),Y=Object(R["a"])(N,o,c,!1,null,"570be8f2",null);e["default"]=Y.exports},ce20:function(t,e,a){var n=a("2b10");function i(t){var e=null==t?0:t.length;return e?n(t,1,e):[]}t.exports=i}}]);
//# sourceMappingURL=chunk-6e57147f.8722a1e3.js.map