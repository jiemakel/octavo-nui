(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["terms"],{bd91:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",[r("v-card-title",[r("h2",[e._v("Term Discovery")])]),r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{"pl-2":"","pr-2":""}},[r("v-container",{attrs:{fluid:"","pl-2":"","pr-2":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-select",{attrs:{label:"Endpoint",items:e.endpoints},model:{value:e.params.endpoint,callback:function(t){e.$set(e.params,"endpoint",t)},expression:"params.endpoint"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-select",{attrs:{label:"Default level",items:e.levels,"item-value":"value.id"},model:{value:e.params.level,callback:function(t){e.$set(e.params,"level",t)},expression:"params.level"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Query"},model:{value:e.params.query,callback:function(t){e.$set(e.params,"query",t)},expression:"params.query"}}),e._v("Understands an expanded form of "),r("a",{attrs:{href:"http://lucene.apache.org/core/6_5_1/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package.description"}},[e._v("Lucene query parser syntax")]),e._v(".")],1)],1)],1)],1)],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.search()}}},[e._v("Search")])],1),e._v(" "),r("v-alert",{attrs:{value:e.errorMessage,color:"error",icon:"warning"}},[r("h2",[e._v("An error occurred:")]),r("pre",[e._v(e._s(e.errorMessage))])]),r("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}]},[r("v-card-title",[r("h2",{directives:[{name:"show",rawName:"v-show",value:e.results.length!=e.totalTerms,expression:"results.length != totalTerms"}]},[e._v("First "+e._s(e._f("numFormat")(e.results.length))+" out of "+e._s(e._f("numFormat")(e.totalTerms))+" results (total document frequency: "+e._s(e._f("numFormat")(e.totalDocFreq))+", total term frequency: "+e._s(e._f("numFormat")(e.totalTermFreq))+")")]),r("h2",{directives:[{name:"show",rawName:"v-show",value:e.results.length==e.totalTerms,expression:"results.length == totalTerms"}]},[e._v("All "+e._s(e._f("numFormat")(e.results.length))+" results (total document frequency: "+e._s(e._f("numFormat")(e.totalDocFreq))+", total term frequency: "+e._s(e._f("numFormat")(e.totalTermFreq))+")")]),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"search",label:"Filter","single-line":"","hide-details":""},model:{value:e.tsearch,callback:function(t){e.tsearch=t},expression:"tsearch"}})],1),r("v-data-table",{ref:"dtable",attrs:{pagination:e.pagination,items:e.filteredResults,loading:e.loading,"total-items":e.totalTerms,"rows-per-page-items":[10,20,50,100,200,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],"item-key":"term",headers:e.headers,"must-sort":"","select-all":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[r("tr",[r("td",[r("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:t.selected,callback:function(r){e.$set(t,"selected",r)},expression:"props.selected"}})],1),r("td",[r("router-link",{attrs:{to:{name:"search",query:Object.assign({},e.$route.query,{query:t.item.term})},target:"_blank"}},[e._v(e._s(t.item.term))])],1),r("td",[e._v(e._s(e._f("numFormat")(t.item.totalDocFreq)))]),r("td",[e._v(e._s(e._f("numFormat")(t.item.totalTermFreq)))])])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),r("v-card",{directives:[{name:"show",rawName:"v-show",value:e.totalTerms>0,expression:"totalTerms>0"}]},[r("v-card-title",[r("h2",[e._v("Generated query")])]),r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{column:""}},[r("v-text-field",{attrs:{label:"Separator"},model:{value:e.separator,callback:function(t){e.separator=t},expression:"separator"}}),r("v-textarea",{attrs:{label:"Query"},model:{value:e.generatedQuery,callback:function(t){e.generatedQuery=t},expression:"generatedQuery"}}),r("v-btn",{attrs:{color:"secondary",to:{name:"search",query:Object.assign({},e.$route.query,{query:e.generatedQuery})},target:"_blank"}},[e._v("Search")])],1)],1)],1),e._v(" "),r("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.error,expression:"!error"}]},[r("v-card-title",[r("h2",[e._v("Request")])]),r("v-container",{attrs:{fluid:""}},[r("a",{attrs:{href:e.request,target:"_blank"}},[e._v(e._s(e.request))])])],1)],1)},n=[],s=r("a34a"),o=r.n(s),i=r("9ab4"),l=r("32e8"),u=r("def0"),c=r("60a3"),p=r("d3d8"),m=r("c713"),f=r("db3b"),d=r("a582"),h=r("5d92"),v=r("3ace"),y=r("46db"),b=r("3702"),g=r("10a1"),_=r("5896");function w(e){return w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){x(e,t,r[t])})}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t,r,a,n,s,o){try{var i=e[s](o),l=i.value}catch(u){return void r(u)}i.done?t(l):Promise.resolve(l).then(a,n)}function k(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function o(e){O(s,a,n,o,i,"next",e)}function i(e){O(s,a,n,o,i,"throw",e)}o(void 0)})}}function j(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t,r){return t&&j(e.prototype,t),r&&j(e,r),e}function T(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var I=function(e){function t(){var e;return Q(this,t),e=T(this,D(t).apply(this,arguments)),e.params={sort:"TDF",sortDirection:"D",offset:0,limit:20,level:"",query:"",endpoint:""},e.totalTerms=0,e.totalTermFreq=0,e.totalDocFreq=0,e.results=[],e.headers=[{text:"term",value:"term"},{text:"total document frequency",value:"TDF"},{text:"total term frequency",value:"TTF"}],e.pagination={sortBy:"TDF",descending:!0,page:1,rowsPerPage:e.params.limit},e.tsearch="",e.selected=[],e.separator="OR",e.generatedQuery="",e}return S(t,e),F(t,[{key:"onSelect",value:function(){this.generatedQuery=this.selected.map(function(e){return e.term}).join(" "+this.separator+" ")}},{key:"search",value:function(){var e=k(o.a.mark(function e(){var t,r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,this.error=null,this.params.sort=this.pagination.sortBy,this.params.offset=(this.pagination.page-1)*this.pagination.rowsPerPage,this.params.limit=this.pagination.rowsPerPage,this.params.sortDirection=this.pagination.descending?"D":"A",t=Object.assign({},this.$route.query,this.params),Object(l["a"])(this.$route.query,t)||this.$router.push({name:"terms",query:t}),e.prev=8,e.next=11,u["a"].get(this.params.endpoint+"similarTerms",{params:this.params,auth:this.auths[this.params.endpoint]});case 11:r=e.sent,this.request=r.config.url+"?pretty&"+r.config.paramsSerializer(r.config.params),this.loading=!1,this.totalTerms=r.data.result.general.terms,this.totalTermFreq=r.data.result.general.totalTermFreq,this.totalDocFreq=r.data.result.general.totalDocFreq,this.results=r.data.result.results,e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](8),this.loading=!1,this.error=e.t0;case 24:case"end":return e.stop()}},e,this,[[8,20]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"onQueryChanged",value:function(){var e=Object.assign({},this.$route.query,this.params);Object(l["a"])(this.$route.query,e)||(Object.assign(this.params,this.$route.query),this.params.endpoint&&this.params.query&&this.search())}},{key:"onIndexInfoChanged",value:function(){var e=this;this.indexInfo&&(this.params.level=this.indexInfo.levels.find(function(t){return t.id===e.indexInfo.defaultLevel}).id,this.params.query&&this.search())}},{key:"filteredResults",get:function(){var e=this.tsearch.toLowerCase().trim();if(""===e)return this.results;this.headers.map(function(e){return e.value});return this.results.filter(function(t){return-1!==t.term.toLowerCase().indexOf(e)})}}]),t}(_["a"]);i["a"]([Object(c["d"])("selected"),Object(c["d"])("separator")],I.prototype,"onSelect",null),i["a"]([Object(c["d"])("pagination",{deep:!0})],I.prototype,"search",null),i["a"]([Object(c["d"])("$route.query",{immediate:!0})],I.prototype,"onQueryChanged",null),i["a"]([Object(c["d"])("indexInfo")],I.prototype,"onIndexInfoChanged",null),I=i["a"]([Object(c["a"])({localStorage:p["a"],components:q({},m,h,f,d,v,y,b,g)})],I);var C=I,E=C,N=r("2877"),R=Object(N["a"])(E,a,n,!1,null,null,null);t["default"]=R.exports}}]);
//# sourceMappingURL=terms.97d80833.js.map