(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ffe9dd"],{"3fb5":function(t,e,i){"use strict";var r=i("58b6"),n=i.n(r);n.a},"46fe":function(t,e,i){"use strict";var r=i("0874");r["default"].register({plus:{width:448,height:512,paths:[{d:"M416 208c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-144v144c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-144h-144c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h144v-144c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v144h144z"}]}})},"4fad":function(t,e,i){var r=i("23e7"),n=i("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return n(t)}})},"58b6":function(t,e,i){},"641e":function(t,e,i){"use strict";var r=i("0874");r["default"].register({edit:{width:576,height:512,paths:[{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.4 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.8-3.8 10-3.8 13.8 0zM564.6 60.3c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 346.2c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5h-229.8v320h320v-101.8z"}]}})},"6f53":function(t,e,i){var r=i("83ab"),n=i("df75"),a=i("fc6a"),s=i("d1e7").f,o=function(t){return function(e){var i,o=a(e),c=n(o),u=c.length,l=0,d=[];while(u>l)i=c[l++],r&&!s.call(o,i)||d.push(t?[i,o[i]]:o[i]);return d}};t.exports={entries:o(!0),values:o(!1)}},8981:function(t,e,i){"use strict";var r=i("0874");r["default"].register({save:{width:448,height:512,paths:[{d:"M433.9 129.9c7.8 7.8 14.1 23 14.1 33.9v268.1c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h268.1c11 0 26.2 6.3 33.9 14.1zM224 416c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM320 111.5c0-2.7-1.6-6.5-3.5-8.5l-3.5-3.5c-2.3-2.3-5.3-3.5-8.5-3.5h-228.5c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h232c6.6 0 12-5.4 12-12v-100.5z"}]}})},c52b:function(t,e,i){"use strict";var r=i("0874");r["default"].register({times:{width:352,height:512,paths:[{d:"M242.7 256l100.1 100.1c12.3 12.3 12.3 32.2 0 44.5l-22.2 22.2c-12.3 12.3-32.2 12.3-44.5 0l-100.1-100.1-100.1 100.1c-12.3 12.3-32.2 12.3-44.5 0l-22.2-22.2c-12.3-12.3-12.3-32.2 0-44.5l100.1-100.1-100.1-100.1c-12.3-12.3-12.3-32.2 0-44.5l22.2-22.2c12.3-12.3 32.2-12.3 44.5 0l100.1 100.1 100.1-100.1c12.3-12.3 32.2-12.3 44.5 0l22.2 22.2c12.3 12.3 12.3 32.2 0 44.5z"}]}})},f922:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"mb-0"},[t._v("Activity for "+t._s(t.periodReadable))]),i("div",{staticClass:"mb-2"},[i("ul",{staticClass:"list-group list-group-horizontal-md mb-3",staticStyle:{"font-size":"0.9em",opacity:"0.7"}},[i("li",{staticClass:"list-group-item pl-0 pr-3 py-0",staticStyle:{border:"0"}},[i("b",[t._v("Host:")]),t._v(" "+t._s(t.host))]),i("li",{staticClass:"list-group-item pl-0 pr-3 py-0",staticStyle:{border:"0"}},[i("b",[t._v("Time active:")]),t._v(" "+t._s(t._f("friendlyduration")(t.$store.state.activity.active.duration)))])])]),i("div",{staticClass:"mb-2 d-flex"},[i("div",[i("b-input-group",[i("b-input-group-prepend",[i("b-button",{staticClass:"px-2",attrs:{to:t.link_prefix+"/"+t.previousPeriod()+"/"+t.subview,variant:"outline-dark"}},[i("icon",{attrs:{name:"arrow-left"}})],1)],1),i("b-select",{staticClass:"px-2",attrs:{value:t.periodLength,options:["day","week","month"]},on:{change:function(e){return t.setDate(t._date,e)}}}),i("b-input-group-append",[i("b-button",{staticClass:"px-2",attrs:{to:t.link_prefix+"/"+t.nextPeriod()+"/"+t.subview,disabled:t.nextPeriod()>t.today,variant:"outline-dark"}},[i("icon",{attrs:{name:"arrow-right"}})],1)],1)],1)],1),"day"===t.periodLength?i("div",{staticClass:"mx-2"},[i("input",{staticClass:"form-control px-2",attrs:{id:"date",type:"date",max:t.today},domProps:{value:t._date},on:{change:function(e){return t.setDate(e.target.value,t.periodLength)}}})]):t._e(),i("div",{staticClass:"ml-auto"},[i("b-button-group",[i("b-button",{staticClass:"px-2",attrs:{variant:"outline-dark"},on:{click:function(e){return t.refresh(!0)}}},[i("icon",{attrs:{name:"sync"}}),i("span",{staticClass:"d-none d-md-inline"},[t._v(" Refresh")])],1)],1)],1)]),i("aw-periodusage",{attrs:{periodusage_arr:t.periodusage},on:{update:t.setDate}}),i("ul",{staticClass:"row nav nav-tabs mt-3 px-3"},[t._l(t.views,(function(e){return i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",class:{"router-link-exact-active":t.currentView.id==e.id},attrs:{to:{name:"activity-view",params:Object.assign({},t.$route.params,{view_id:e.id})}}},[i("h6",[t._v(t._s(e.name))])])],1)})),i("li",{staticClass:"nav-item",staticStyle:{"margin-left":"auto"}},[i("a",{staticClass:"nav-link",on:{click:function(e){return t.$refs.new_view.show()}}},[i("h6",[i("icon",{attrs:{name:"plus"}}),i("span",{staticClass:"d-none d-md-inline"},[t._v("New view")])],1)])])],2),i("b-modal",{ref:"new_view",attrs:{id:"new_view",title:"New view"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[i("div",{staticClass:"my-1"},[i("b-input-group",{staticClass:"my-1",attrs:{prepend:"ID"}},[i("b-form-input",{model:{value:t.new_view.id,callback:function(e){t.$set(t.new_view,"id",e)},expression:"new_view.id"}})],1),i("b-input-group",{staticClass:"my-1",attrs:{prepend:"Name"}},[i("b-form-input",{model:{value:t.new_view.name,callback:function(e){t.$set(t.new_view,"name",e)},expression:"new_view.name"}})],1)],1)]),i("div",[i("router-view")],1),i("div",[i("hr"),i("h5",[t._v("Options")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("b-form-group",{attrs:{label:"Show/filter category","label-cols":"5","label-cols-lg":"4"}},[i("b-form-select",{attrs:{options:t.categories},model:{value:t.filterCategory,callback:function(e){t.filterCategory=e},expression:"filterCategory"}})],1)],1)]),i("aw-devonly",[i("b-btn",{attrs:{id:"load-demo"},on:{click:t.load_demo}},[t._v("Load demo data")])],1)],1)],1)},n=[],a=(i("99af"),i("4de4"),i("7db0"),i("caad"),i("a15b"),i("d81d"),i("fb6a"),i("b0c0"),i("4fad"),i("2532"),i("3835")),s=(i("96cf"),i("1da1")),o=i("9380"),c=i.n(o),u=i("63ea"),l=i.n(u),d=i("c1df"),h=i.n(d),f=i("5acd"),v=i("0874");v["default"].register({"arrow-left":{width:448,height:512,paths:[{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0l-194.4-194.3c-9.4-9.4-9.4-24.6 0-33.9l194.4-194.4c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-0.4 34.3l-120.5 114.8h287.4c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-287.4l120.5 114.8c9.8 9.3 10 24.8 0.4 34.3z"}]}}),v["default"].register({"arrow-right":{width:448,height:512,paths:[{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0l194.4 194.3c9.4 9.4 9.4 24.6 0 33.9l-194.4 194.4c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 0.4-34.3l120.5-114.8h-287.4c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4l-120.5-114.8c-9.8-9.3-10-24.8-0.4-34.3z"}]}}),v["default"].register({sync:{width:512,height:512,paths:[{d:"M440.6 12.6c0-0.2 0-0.4 0-0.6 0-6.6 5.4-12 12-12h47.4c6.6 0 12 5.4 12 12v200.3c0 6.6-5.4 12-12 12h-200.2c-6.6 0-12-5.4-12-12v-47.4 0c0-6.6 5.4-12 12-12 0.2 0 0.4 0 0.6 0l101.5 4.9c-28.9-42.9-94.3-77.8-146-77.8-76.5 0-153.1 60.3-171 134.7-1.2 5.1-6.4 9.3-11.7 9.3h-49c-6.6 0-12-5.4-12-12 0-0.6 0.1-1.6 0.2-2.2 21.6-114.9 122.4-201.8 243.5-201.8h0.3c63.2 0 147.7 39.1 188.5 87.3zM255.8 432c76.5 0 153.1-60.4 171-134.7 1.2-5.1 6.4-9.3 11.7-9.3h49c6.6 0 12 5.4 12 12 0 0.6-0.1 1.6-0.2 2.2-21.6 114.9-122.4 201.8-243.6 201.8h-0.2c-63.1 0-147.5-39.1-188.4-87.2l4.1 82.6c0 0.2 0 0.4 0 0.6 0 6.6-5.4 12-12 12h0-47.3c-6.6 0-12-5.4-12-12v-200.3c0-6.6 5.4-12 12-12h200.2c6.6 0 12 5.4 12 12v47.4 0c0 6.6-5.4 12-12 12-0.2 0-0.4 0-0.6 0l-101.8-4.9c28.8 42.9 94.1 77.8 145.8 77.8h0.2z"}]}});i("46fe"),i("641e"),i("c52b"),i("8981");var p={name:"Activity",props:{host:String,date:{type:String},periodLength:{type:String,default:"day"}},data:function(){return{today:Object(f["get_today"])(),filterCategory:null,new_view:{}}},computed:{views:function(){return this.$store.state.views.views},currentView:function(){var t=this;return this.views.find((function(e){return e.id==t.$route.params.view_id}))||this.views[0]},_date:function(){return this.date||Object(f["get_today"])()},subview:function(){return this.$route.meta.subview},categories:function(){var t=this.$store.getters["categories/all_categories"],e=t.map((function(t){return{text:t.join(" > "),value:t}}));return[{text:"All",value:null},{text:"Uncategorized",value:["Uncategorized"]}].concat(e)},filterCategories:function(){if(this.filterCategory){var t=this.$store.getters["categories/all_categories"],e=function(t){return function(e){return e.length>t.length&&l()(t,e.slice(0,t.length))}},i=c()(t,e(this.filterCategory));return[this.filterCategory].concat(i)}return null},link_prefix:function(){return"/activity/".concat(this.host,"/").concat(this.periodLength)},periodusage:function(){return this.$store.getters["activity/getActiveHistoryAroundTimeperiod"](this.timeperiod)},timeperiod:function(){return{start:Object(f["get_day_start_with_offset"])(this._date),length:[1,this.periodLength]}},dateformat:function(){return"day"===this.periodLength?"YYYY-MM-DD":"week"===this.periodLength?"YYYY[ W]WW":"month"===this.periodLength?"YYYY-MM":"year"===this.periodLength?"YYYY":"YYYY-MM-DD"},periodReadable:function(){return h()(this.timeperiod.start).format(this.dateformat)},periodLengthMoment:function(){return this.periodLengthConvertMoment(this.periodLength)}},watch:{timeperiod:function(){this.refresh()},filterCategory:function(){this.refresh()}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.dispatch("views/load"),this.$store.dispatch("categories/load"),t.next=4,this.refresh();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{previousPeriod:function(){return h()(this._date).subtract(1,"".concat(this.periodLength,"s")).format("YYYY-MM-DD")},nextPeriod:function(){return h()(this._date).add(1,"".concat(this.periodLength,"s")).format("YYYY-MM-DD")},periodLengthConvertMoment:function(t){return"day"===t?"day":"week"===t?"isoWeek":"month"===t?"month":"year"===t?"year":(console.error('Invalid periodLength ${periodLength}, defaulting to "day"'),"day")},setDate:function(t,e){e||(e=this.periodLength);var i=this.periodLengthConvertMoment(e),r=h()(t).startOf(i).format("YYYY-MM-DD");console.log(r,e),this.$router.push("/activity/".concat(this.host,"/").concat(e,"/").concat(r,"/").concat(this.subview))},refresh:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("activity/ensure_loaded",{timeperiod:this.timeperiod,host:this.host,force:e,filterAFK:!0,filterCategories:this.filterCategories});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),load_demo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("activity/load_demo");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkFormValidity:function(){var t={"ID is not unique":this.$store.state.views.views.map((function(t){return t.id})).includes(this.new_view.id),"Missing name":""===this.new_view.name},e=Object.entries(t).filter((function(t){var e=Object(a["a"])(t,2),i=(e[0],e[1]);return i})).map((function(t){var e=Object(a["a"])(t,2),i=e[0];e[1];return i})),i=0==e.length;return i||alert("Invalid form input: ".concat(e)),i},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this,e=this.checkFormValidity();e&&(this.$store.commit("views/addView",{id:this.new_view.id,name:this.new_view.name}),this.$nextTick((function(){t.$refs.new_view.hide()})))},resetModal:function(){this.new_view={id:"",name:""}}}},g=p,m=(i("3fb5"),i("2877")),w=Object(m["a"])(g,r,n,!1,null,"6c46e3a3",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-23ffe9dd.76953258.js.map