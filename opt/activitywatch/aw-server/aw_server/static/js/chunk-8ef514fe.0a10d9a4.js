(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ef514fe"],{"0919":function(t,e,n){"use strict";var i=n("90c6"),a=n.n(i);a.a},"2c21":function(t,e,n){"use strict";var i=n("35b5"),a=n.n(i);a.a},"35b5":function(t,e,n){},4795:function(t,e,n){var i=n("23e7"),a=n("da84"),r=n("342f"),s=[].slice,c=/MSIE .\./.test(r),o=function(t){return function(e,n){var i=arguments.length>2,a=i?s.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,a)}:e,n)}};i({global:!0,bind:!0,forced:c},{setTimeout:o(a.setTimeout),setInterval:o(a.setInterval)})},"641e":function(t,e,n){"use strict";var i=n("0874");i["default"].register({edit:{width:576,height:512,paths:[{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.4 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.8-3.8 10-3.8 13.8 0zM564.6 60.3c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 346.2c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5h-229.8v320h320v-101.8z"}]}})},8981:function(t,e,n){"use strict";var i=n("0874");i["default"].register({save:{width:448,height:512,paths:[{d:"M433.9 129.9c7.8 7.8 14.1 23 14.1 33.9v268.1c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h268.1c11 0 26.2 6.3 33.9 14.1zM224 416c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM320 111.5c0-2.7-1.6-6.5-3.5-8.5l-3.5-3.5c-2.3-2.3-5.3-3.5-8.5-3.5h-228.5c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h232c6.6 0 12-5.4 12-12v-100.5z"}]}})},"90c6":function(t,e,n){},a56d:function(t,e,n){"use strict";var i=n("0874");i["default"].register({trash:{width:448,height:512,paths:[{d:"M432 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h120l9.4-18.7c3.6-7.3 13.1-13.3 21.3-13.3h0.1 114.3 0c8.2 0 17.8 6 21.5 13.3l9.4 18.7h120zM53.2 467l-21.2-339h384l-21.2 339c-1.6 24.8-23 45-47.9 45h-245.8c-24.9 0-46.3-20.2-47.9-45z"}]}})},b728:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"eventEditModal",attrs:{id:"edit-modal-"+t.event.id,title:"Edit event",centered:"","hide-footer":""}},[n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",[t._v("Bucket")]),n("td",[t._v(t._s(t.bucket_id))])]),n("tr",[n("th",[t._v("ID")]),n("td",[t._v(t._s(t.event.id))])]),n("tr",[n("th",[t._v("Start")]),n("datetime",{attrs:{type:"datetime"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1),n("tr",[n("th",[t._v("End")]),n("datetime",{attrs:{type:"datetime"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1),n("tr",[n("th",[t._v("Duration")]),n("td",[t._v(t._s(t._f("friendlyduration")(t.editedEvent.duration)))])])]),n("hr"),n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",[t._v("Key")]),n("th",[t._v("Value")])]),t._l(t.event.data,(function(e,i){return n("tr",[n("td",[n("b-input",{attrs:{disabled:"",value:i,size:"sm"}})],1),n("td",["boolean"===typeof t.event.data[i]?n("b-checkbox",{staticStyle:{margin:"0.25em"},model:{value:t.editedEvent.data[i],callback:function(e){t.$set(t.editedEvent.data,i,e)},expression:"editedEvent.data[k]"}}):t._e(),"string"===typeof t.event.data[i]?n("b-input",{attrs:{size:"sm"},model:{value:t.editedEvent.data[i],callback:function(e){t.$set(t.editedEvent.data,i,e)},expression:"editedEvent.data[k]"}}):t._e()],1)])}))],2),n("hr"),n("div",{staticClass:"float-left"},[n("b-button",{staticClass:"mx-1",attrs:{variant:"danger"},on:{click:function(e){t.delete_(),t.close()}}},[n("icon",{staticClass:"mx-1",attrs:{name:"trash"}}),t._v("Delete")],1)],1),n("div",{staticClass:"float-right"},[n("b-button",{staticClass:"mx-1",on:{click:t.close}},[n("icon",{staticClass:"mx-1",attrs:{name:"times"}}),t._v("Cancel")],1),n("b-button",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:function(e){t.save(),t.close()}}},[n("icon",{staticClass:"mx-1",attrs:{name:"save"}}),t._v("Save")],1)],1)])},a=[],r=(n("0d03"),n("96cf"),n("1da1")),s=n("c1df"),c=n.n(s),o=(n("c52b"),n("8981"),n("a56d"),{name:"EventEditor",props:{event:Object,bucket_id:String},data:function(){return{editedEvent:JSON.parse(JSON.stringify(this.event))}},computed:{start:{get:function(){return c()(this.editedEvent.timestamp).format()},set:function(t){this.editedEvent.duration=c()(this.end).diff(t,"seconds"),this.editedEvent.timestamp=new Date(t)}},end:{get:function(){var t=c()(this.editedEvent.timestamp).add(this.editedEvent.duration,"seconds");return t.format()},set:function(t){this.editedEvent.duration=c()(t).diff(this.editedEvent.timestamp,"seconds")}}},methods:{save:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("save",t.editedEvent),e.next=3,t.$aw.replaceEvent(t.bucket_id,t.editedEvent);case 3:case"end":return e.stop()}}),e)})))()},delete_:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("delete",t.event),e.next=3,t.$aw.deleteEvent(t.bucket_id,t.event.id);case 3:case"end":return e.stop()}}),e)})))()},close:function(){this.$refs.eventEditModal.hide(),this.$emit("close",this.event)}}}),u=o,d=n("2877"),l=Object(d["a"])(u,i,a,!1,null,null,null);e["a"]=l.exports},c52b:function(t,e,n){"use strict";var i=n("0874");i["default"].register({times:{width:352,height:512,paths:[{d:"M242.7 256l100.1 100.1c12.3 12.3 12.3 32.2 0 44.5l-22.2 22.2c-12.3 12.3-32.2 12.3-44.5 0l-100.1-100.1-100.1 100.1c-12.3 12.3-32.2 12.3-44.5 0l-22.2-22.2c-12.3-12.3-12.3-32.2 0-44.5l100.1-100.1-100.1-100.1c-12.3-12.3-12.3-32.2 0-44.5l22.2-22.2c12.3-12.3 32.2-12.3 44.5 0l100.1 100.1 100.1-100.1c12.3-12.3 32.2-12.3 44.5 0l22.2 22.2c12.3 12.3 12.3 32.2 0 44.5z"}]}})},c740:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,r=n("44d2"),s=n("ae40"),c="findIndex",o=!0,u=s(c);c in[]&&Array(1)[c]((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},eb8a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Stopwatch")]),n("p",[t._v("Using bucket: "+t._s(t.bucket_id))]),n("b-alert",{attrs:{show:""}},[t._v("This is an early experiment, an important missing feature is the ability to set start/end times manually.")]),n("b-input-group",{attrs:{size:"lg"}},[n("b-input",{attrs:{placeholder:"What are you working on?"},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.startTimer(t.label)}}},[n("icon",{attrs:{name:"play"}}),t._v("Start")],1)],1)],1),n("hr"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[t.runningTimers.length>0?n("div",[n("h3",[t._v("Running")]),t._l(t.runningTimers,(function(e){return n("div",[n("stopwatch-entry",{attrs:{event:e,bucket_id:t.bucket_id,now:t.now},on:{delete:t.removeTimer,update:t.updateTimer}}),n("hr",{staticStyle:{margin:"0"}})],1)}))],2):n("div",[n("span",{staticStyle:{color:"#555"}},[t._v("No stopwatch running")]),n("hr")]),t.stoppedTimers.length>0?n("div",[n("h3",{staticClass:"mt-4 mb-4"},[t._v("History")]),t._l(Object.keys(t.timersByDate).sort().reverse(),(function(e){return n("div",[n("h5",{staticClass:"mt-2 mb-1"},[t._v(t._s(e))]),t._l(t.timersByDate[e],(function(e){return n("div",[n("stopwatch-entry",{attrs:{event:e,bucket_id:t.bucket_id,now:t.now},on:{delete:t.removeTimer,update:t.updateTimer,new:function(n){return t.startTimer(e.data.label)}}}),n("hr",{staticStyle:{margin:"0"}})],1)}))],2)}))],2):n("div",[n("span",{staticStyle:{color:"#555"}},[t._v("No history to show")]),n("hr")])])])],1)},a=[],r=(n("c740"),n("0d03"),n("4795"),n("96cf"),n("1da1")),s=n("6edf"),c=n.n(s),o=n("9380"),u=n.n(o),d=n("c1df"),l=n.n(d),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row px-3 py-2",attrs:{id:"root"}},[n("div",{staticClass:"flex-fill"},[n("span",[n("b",[t._v(t._s(t.event.data.label||"No label"))])]),n("span",{staticStyle:{color:"#888"}},[t._v(" | ")]),t.event.data.running?n("span",[t._v("Running for "),n("span",{attrs:{title:t.event.timestamp}},[t._v(t._s(t._f("friendlyduration")(t.event.data.running?(t.now-t.event.timestamp)/1e3:t.event.duration)))]),t._v(" (Started "+t._s(t._f("shorttime")(t.event.timestamp))+")")]):n("span",[t._v("Started "),n("span",{attrs:{title:t.event.timestamp}},[t._v(t._s(t._f("friendlytime")(t.event.timestamp)))]),t._v(" ("+t._s(t._f("friendlyduration")(t.event.data.running?(t.now-t.event.timestamp)/1e3:t.event.duration))+")")])]),n("div",[t.event.data.running?n("b-button",{staticClass:"mx-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.stop}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"stop"}}),t._v("Stop")],1):t._e(),t.event.data.running?t._e():n("b-button",{staticClass:"mx-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.$emit("new")}}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"play"}}),t._v("Start new")],1),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-modal-"+t.event.id,expression:"'edit-modal-' + event.id"}],staticClass:"mx-1",attrs:{variant:"outline-dark",size:"sm"}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"edit"}}),t._v("Edit")],1)],1)]),n("event-editor",{attrs:{event:t.event,bucket_id:t.bucket_id},on:{save:t.save,delete:t.delete_}})],1)},h=[],m=(n("641e"),n("0874"));m["default"].register({stop:{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352z"}]}}),m["default"].register({play:{width:448,height:512,paths:[{d:"M424.4 214.7c31.5 18.5 31.4 64.1 0 82.6l-352 208c-31.7 18.8-72.4-3.8-72.4-41.3v-416.1c0-41.8 43.8-58.2 72.4-41.3z"}]}});var p=n("b728"),f={name:"StopwatchEntry",components:{"event-editor":p["a"]},props:{event:Object,bucket_id:String,now:{type:l.a,default:l()()}},methods:{stop:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=JSON.parse(JSON.stringify(this.event)),e.data.running=!1,e.duration=(l()()-l()(e.timestamp))/1e3,t.next=5,this.$aw.replaceEvent(this.bucket_id,e);case 5:e=t.sent,this.$emit("update",e);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("update",e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),delete_:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$emit("delete",e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},b=f,_=(n("2c21"),n("2877")),w=Object(_["a"])(b,v,h,!1,null,"3b7d7928",null),g=w.exports,y=(n("a56d"),{name:"Stopwatch",components:{"stopwatch-entry":g},data:function(){return{bucket_id:"aw-stopwatch",events:[],label:"",now:l()()}},computed:{runningTimers:function(){return u()(this.events,(function(t){return t.data.running}))},stoppedTimers:function(){return u()(this.events,(function(t){return!t.data.running}))},timersByDate:function(){return c()(this.stoppedTimers,(function(t){return l()(t.timestamp).format("YYYY-MM-DD")}))}},mounted:function(){var t=this;this.$aw.ensureBucket(this.bucket_id,"general.stopwatch","unknown"),this.getEvents(),setInterval((function(){return t.now=l()()}),1e3)},methods:{startTimer:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$aw.insertEvent(this.bucket_id,{timestamp:new Date,data:{running:!0,label:e}});case 2:n=t.sent,this.events.unshift(n);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),updateTimer:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this.events.findIndex((function(t){return t.id==e.id})),-1!=n?this.$set(this.events,n,e):console.error(":(");case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),removeTimer:function(t){this.events=u()(this.events,(function(e){return e.id!=t.id}))},getEvents:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$aw.getEvents(this.bucket_id,{limit:100});case 2:this.events=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),k=y,x=(n("0919"),Object(_["a"])(k,i,a,!1,null,"7a4238b4",null));e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-8ef514fe.0a10d9a4.js.map