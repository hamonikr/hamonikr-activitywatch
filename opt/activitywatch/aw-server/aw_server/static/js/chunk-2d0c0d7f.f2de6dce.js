(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0d7f"],{4409:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Developer zone")]),e._v("Just some tools to aid in development and debugging."),n("div",[n("b-btn",{on:{click:function(t){return e.query_window_timing()}}},[e._v("Run window query")]),n("b-btn",{on:{click:function(t){return e.query_browser_timing()}}},[e._v("Run browser query")])],1)])},i=[],o=(n("96cf"),n("1da1")),u=n("c1df"),s=n.n(u);console.log(s.a);var a={name:"aw-dev",data:function(){return{queryOptions:{aw_client:this.$aw,date:s()().format("YYYY-MM-DD"),host:"erb-laptop2-arch",filterAFK:!0,browserBuckets:["aw-watcher-web-firefox-imported-2019-10-03T1"]}}},mounted:function(){console.log(this.$store)},methods:{query_window_timing:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("activity/query_window",this.queryOptions);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),query_browser_timing:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("activity/query_browser",this.queryOptions);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=a,w=n("2877"),d=Object(w["a"])(c,r,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c0d7f.f2de6dce.js.map