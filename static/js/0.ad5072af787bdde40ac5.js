webpackJsonp([0,4],{58:function(t,e,n){n(78);var s=n(0)(n(75),n(80),null,null);t.exports=s.exports},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!0,hotMovies:[],current:0,title:"",controlShow:{loading:!0,content:!1}}},created:function(){var t="https://api.douban.com/v2/movie/in_theaters";this.$http.jsonp(t,{},{headers:{},emulateJSON:!0}).then(function(t){this.controlShow.content=!0,this.hotMovies=t.data.subjects,this.title=t.data.title},function(t){console.log(t)})},methods:{goBack:function(){this.$store.state.goBlackUrl;this.$router.replace({path:"/",force:!0})},saveId:function(t){var e=this.hotMovies[t].id;this.$store.dispatch("saveId",e),this.$store.dispatch("blackUrl",this.$route.path),this.$router.replace({path:"/moviecontent",force:!0})}}}},76:function(t,e,n){e=t.exports=n(72)(),e.push([t.i,".cursor{cursor:pointer}.theatre_content-Hot{margin-top:9.83rem}.theatre_content-Hot ul{list-style:none}.subject_content-pic img{width:100%;height:9.16rem}.subject_content-info p{font-size:1.17rem}.Seen{color:#27a}","",{version:3,sources:["/./src/components/theatreHot.vue"],names:[],mappings:"AACA,QACE,cAAgB,CACjB,AACD,qBACE,kBAAoB,CACrB,AACD,wBACE,eAAiB,CAClB,AACD,yBACE,WAAY,AACZ,cAAgB,CACjB,AACD,wBACE,iBAAmB,CACpB,AACD,MACE,UAAW,CACZ",file:"theatreHot.vue",sourcesContent:["\n.cursor{\n  cursor: pointer;\n}\n.theatre_content-Hot{\n  margin-top: 9.83rem;\n}\n.theatre_content-Hot ul{\n  list-style: none;\n}\n.subject_content-pic img{\n  width: 100%;\n  height: 9.16rem;\n}\n.subject_content-info p{\n  font-size: 1.17rem;\n}\n.Seen{\n  color:#27a;\n}\n"],sourceRoot:"webpack://"}])},78:function(t,e,n){var s=n(76);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(73)("20c3eac2",s,!0)},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theatre_content-Hot"},[n("ul",t._l(t.hotMovies,function(e,s){return n("li",[n("div",{staticClass:"container cursor",on:{click:function(e){t.saveId(s)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center "}),t._v(" "),n("div",{staticClass:"subject_content-item"},[n("div",{staticClass:"row"},[n("div",{staticClass:"subject_content-pic col-md-3 \t.col-sm-5"},[n("img",{attrs:{src:e.images.small}})]),t._v(" "),n("div",{staticClass:"subject_content-info col-md-9"},[n("p"),n("h4",[t._v(t._s(e.title))]),n("p"),t._v(" "),n("p",[n("span",{staticClass:"average"},[t._v(t._s(e.rating.average)+"分")]),n("span",{staticClass:"Seen"},[t._v(t._s(e.collect_count)+"人看过")])]),t._v(" "),n("p",[t._v("导演："+t._s(e.directors[0].name))]),t._v(" "),n("p",[t._v("类型:"+t._s(e.genres))]),t._v(" "),n("p",[t._v("主演:"),t._l(e.casts,function(e,s){return n("span",[t._v(t._s(e.name)+"/")])})],2),t._v(" "),n("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("购票")])])])])])])])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=0.ad5072af787bdde40ac5.js.map