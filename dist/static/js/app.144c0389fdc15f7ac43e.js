webpackJsonp([1],{"09yM":function(t,e){},"8JY/":function(t,e){},"991W":function(t,e){},GcrD:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};i.d(n,"increment",function(){return D});var o=i("kV13"),a={name:"App",created:function(){this.getDeviceType()},methods:{getDeviceType:function(){var t,e,i,n,o,a,s,c=(t=navigator.userAgent,e=/(?:Windows Phone)/.test(t),i=/(?:SymbianOS)/.test(t)||e,n=/(?:Android)/.test(t),o=/(?:Firefox)/.test(t),/(?:Chrome|CriOS)/.test(t),a=/(?:iPad|PlayBook)/.test(t)||n&&!/(?:Mobile)/.test(t)||o&&/(?:Tablet)/.test(t),s=/(?:iPhone)/.test(t)&&!a,{isTablet:a,isPhone:s,isAndroid:n,isPc:!s&&!n&&!i}),r="pc";c.isAndroid||c.isPhone?r="phone":c.isTablet?r="pad":c.isPc&&(r="pc");var d={width:document.body.clientWidth||document.documentElement.clientWidth,height:document.body.clientHeight||document.documentElement.clientHeight};this.$store.commit({type:"deviceType",value:r}),this.$store.commit({type:"documentWH",value:d})},getRem:function(t,e){var i=document.getElementsByTagName("html")[0],n=document.body.clientWidth||document.documentElement.clientWidth;i.style.fontSize=n/t*e+"px"}},mounted:function(){this.getRem(750,100),window.addEventListener("resize",this.getRem(750,100),!1)}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("C7Lr")(a,s,!1,function(t){i("GcrD")},null,null).exports,r=i("5inH"),d=i("IHPB"),l=i.n(d),u=i("4YfN"),p=i.n(u),m=i("48sp"),f=i("rVsN"),h=i.n(f),g=i("5PMM"),v={props:["dataArr","suoyinId"],name:"transition-example-2",display:"Transitions",components:{draggable:i.n(g).a},data:function(){return{list:[{id:"1",src:""},{id:"2",src:""},{id:"3",src:""},{id:"4",src:""}],drag:!1,message:"你好啊今天天气太好了等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等",images:[],editBook:!1}},mounted:function(){this.list=this.dataArr},computed:p()({},Object(m.b)({deviceType:function(t){return t.deviceType},documentWH:function(t){return t.documentWH}}),{dragOptions:function(){return{animation:200,group:"description",disabled:!this.editBook,ghostClass:"ghost",filter:".addIcon"}}}),methods:{editBookEdit:function(){this.editBook=!0,this.$emit("editBook",this.editBook)},editBookSure:function(){this.editBook=!1,this.$emit("editBook",this.editBook)},getdata:function(t){return console.log(t),9999!==t.relatedContext.element.id},addPic:function(t){this.$refs.upLoad.click()},onFileChange:function(t){console.log(t);var e=this,i=t.target.files||t.dataTransfer.files;i.length&&(this.createImage(i).then(function(i){e.suoyinId;var n={suoyin:e.suoyinId,newPic:i};e.$emit("dataChange",n),t.srcElement.value=""}).catch(function(t){return alert(t),!1}),console.log(e.list.length))},createImage:function(t){return new h.a(function(e,i){if("function"==typeof FileReader){var n=[],o=0,a=new FileReader;a.readAsDataURL(t[o]),a.onload=function(i){if(i.target.result){var s=t[o];s.id=(new Date).getTime(),s.src=i.target.result,n.push(s),++o<t.length?a.readAsDataURL(t[o]):e(n)}}}else{i("FileReader API不支持")}})},delImage:function(t){this.list.splice(t,1)},removeImage:function(t){this.images=[]},update:function(t){this.$emit("dataChange",this.list)},sort:function(){this.list=this.list.sort(function(t,e){return t.name-e.name})}},watch:{dataArr:function(){this.list=this.dataArr}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid",class:{phone:"phone"==t.deviceType}},[i("div",{staticClass:"row content"},[i("div",{staticClass:"col-md-12 itemMsg"},[i("el-input",{staticClass:"textarea",attrs:{type:"textarea",disabled:!t.editBook,resize:"none",rows:3,placeholder:"请输入内容",maxlength:"200"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),i("div",{staticClass:"col-md-12"},[i("draggable",t._b({staticClass:"list-group itemUl",attrs:{tag:"ul",move:t.getdata},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},update:t.update},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},"draggable",t.dragOptions,!1),t._l(t.list,function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:9999!=e.id||9999==e.id&&t.list.length<10&&1==t.editBook,expression:"item.id !=9999 || item.id ==9999 && list.length<10 && editBook==true"}],key:e.id,staticClass:" itemPic fl",class:{addIcon:9999==e.id}},[9999!=e.id?i("div",{staticStyle:{width:"100%",height:"100%"}},[i("img",{staticClass:"itemPicImg",attrs:{src:e.src,alt:"暂无"}}),t._v(" "),1==t.editBook?i("i",{staticClass:"delItem point",on:{click:function(e){return e.stopPropagation(),t.delImage(n)}}},[t._v("x")]):t._e()]):t._e(),t._v(" "),9999==e.id&&1==t.editBook?i("div",{staticClass:"point",staticStyle:{width:"100%",height:"100%"},on:{click:t.addPic}},[i("p",[t._v("+")])]):t._e()])}),0)],1)]),t._v(" "),i("div",{staticClass:"row contentEdit"},[i("div",{staticClass:"col-md-12"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.editBook,expression:"editBook == false"}],on:{click:t.editBookEdit}},[t._v(" 编辑 ")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.editBook,expression:"editBook == true"}],on:{click:t.editBookSure}},[t._v(" 保存 ")]),t._v(" "),i("input",{ref:"upLoad",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.onFileChange}})],1)])])},staticRenderFns:[]};var y={name:"transition-example-2",components:{drag:i("C7Lr")(v,b,!1,function(t){i("8JY/")},"data-v-572d1616",null).exports},data:function(){return{editBookTog:!1,maxImg:9,picSrc:"https://www.baidu.com/img/bd_logo1.png",fanyeData:[{id:1,arr:[{id:11,src:"https://www.baidu.com/img/bd_logo1.png"},{id:22,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},{id:9999,src:""}]},{id:2,arr:[{id:11,src:"https://www.baidu.com/img/bd_logo1.png"},{id:22,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},{id:33,src:"https://www.baidu.com/img/bd_logo1.png"},{id:44,src:"https://www.baidu.com/img/bd_logo1.png"}]},{id:3,arr:[{id:111,src:"https://www.baidu.com/img/bd_logo1.png"},{id:222,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},{id:333,src:"https://www.baidu.com/img/bd_logo1.png"},{id:444,src:"https://www.baidu.com/img/bd_logo1.png"}]}]}},computed:p()({},Object(m.b)({deviceType:function(t){return t.deviceType},documentWH:function(t){return t.documentWH}})),mounted:function(){},methods:{editBook:function(t){this.editBookTog=t},dataChange:function(t){var e=t.suoyin,i=t.newPic;console.log(i);for(var n=0,o=this.fanyeData.length;n<o;n++)if(this.fanyeData[n].id==e){var a,s=this.maxImg+1-this.fanyeData[n].arr.length;console.log(s);var c=i.splice(0,s);console.log(c),(a=this.fanyeData[n].arr).splice.apply(a,[this.fanyeData[n].arr.length-1,0].concat(l()(c)))}console.log(this.fanyeData[0].arr)},changArr:function(t){t.push({id:99999}),t.splice(t.length-1,1)},previousFun:function(){1!=this.editBookTog?($(".flipbook").turn("disable",!1),$(".flipbook").turn("previous"),$(".flipbook").turn("disable",!0)):this.$message({message:"请保存后,重新尝试.",type:"error"})},nextFun:function(){1!=this.editBookTog?($(".flipbook").turn("disable",!1),$(".flipbook").turn("next"),$(".flipbook").turn("disable",!0)):this.$message({message:"请保存后,重新尝试.",type:"error"})},xinFanye:function(){var t=this;yepnope({complete:function(){$(".flipbook").turn({width:"phone"==t.deviceType?t.documentWH.width:922,height:"phone"==t.deviceType?t.documentWH.height:600,elevation:50,gradients:!0,display:"phone"==t.deviceType?"single":"double",autoCenter:!0}),$(".flipbook").turn("disable",!0),$(document).keydown(function(t){switch(t.keyCode){case 37:$(".flipbook").turn("previous");break;case 39:$(".flipbook").turn("next")}})}})}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid",class:{phone:"phone"==t.deviceType},staticStyle:{height:"100%"}},[i("div",{staticClass:"flipbook-viewport"},[i("div",{staticClass:"container2"},[i("div",{staticClass:"flipbook",attrs:{id:"flipbook"}},t._l(t.fanyeData,function(e){return i("div",{key:e.id,class:{first:1==e,last:e==t.fanyeData.length}})}),0)]),t._v(" "),i("div",{staticClass:"flipbookControl"},[i("div",[i("el-button",{on:{click:t.previousFun}},[t._v("上一页")]),i("el-button",{on:{click:t.nextFun}},[t._v("下一页")])],1)])])])},staticRenderFns:[]};var k=i("C7Lr")(y,w,!1,function(t){i("PlD2")},"data-v-0876b1f2",null).exports;o.default.use(r.a);var _=new r.a({routes:[{path:"/",name:"fanye",component:k}]}),C=i("TcQY"),B=i.n(C),x=(i("09yM"),i("991W"),i("HzJ8")),T=i.n(x),P={test:function(t,e){return function(t){var e=[],i=!0,n=!1,o=void 0;try{for(var a,s=T()(t);!(i=(a=s.next()).done);i=!0){var c=a.value;e.push(c.dId)}}catch(t){n=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}return e}(t.traceData.result)}},D=function(t){t.commit("increment")};o.default.use(m.a);var H=new m.a.Store({state:{deviceType:"os",documentWH:{}},mutations:{deviceType:function(t,e){t.deviceType=e.value},documentWH:function(t,e){t.documentWH=e.value}},getters:P,actions:n,modules:{},strict:!1});o.default.config.productionTip=!1,o.default.use(B.a),new o.default({el:"#app",router:_,store:H,components:{App:c},template:"<App/>"})},PlD2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.144c0389fdc15f7ac43e.js.map