webpackJsonp([3],{LZvL:function(t,e){},NFsQ:function(t,e){},P9zw:function(t,e){},Tcpd:function(t,e){},dG7Z:function(t,e){},"ffz/":function(t,e){t.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"index",path:"/",type:"pages"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础",path:"/component",items:[{desc:"Icon 图标",name:"icon",path:"/icon"},{desc:"Tag 标签",name:"tag",path:"/tag"},{desc:"Button 按钮",name:"button",path:"/button"}]},{desc:"布局",path:"/layout",items:[{desc:"Grid 栅格",name:"grid",path:"/grid"}]}]}},fkkw:function(t,e){},i0oR:function(t,e,n){t.exports=n.p+"static/img/banner.cf8b052.svg"},mUtA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header",style:"index"===this.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e("div",{staticClass:"header-container"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:n("i0oR"),width:"100"}})]),this._v(" "),e("router-link",{attrs:{to:{name:"giud"}}},[this._v("组件")])],1)])},staticRenderFns:[]};var a=n("VU/8")({data:function(){return{}}},s,!1,function(t){n("sSAf")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-footer"},[e("div",{staticClass:"footer-container"})])}]};var r=n("VU/8")(null,o,!1,function(t){n("Tcpd")},"data-v-38680008",null).exports,l=n("ffz/"),u=n.n(l),c={data:function(){return{data:u.a}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e){return n("div",{staticClass:"group-container"},[n("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e){return e.desc?n("div",{staticClass:"side-nav-items"},[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):n("p",{staticClass:"side-nav-group"},[t._v(t._s(e.desc))]),t._v(" "),t._l(e.items,function(e){return n("div",[n("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))])],1)})],2):t._e()})],2)}),0)},staticRenderFns:[]};var h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-skeleton"},[e("w-skeleton",{attrs:{height:"80px"}}),this._v(" "),e("div",[e("div",{staticClass:"skeleton-container"},[e("div",{staticClass:"skeleton"},[e("w-skeleton",{attrs:{height:"300px"}})],1),this._v(" "),e("w-skeleton",{attrs:{height:"45px"}})],1),this._v(" "),e("div",{staticClass:"skeleton-bottom"},[e("w-skeleton",{attrs:{height:"45px"}})],1)])],1)},staticRenderFns:[]};var f={name:"app",data:function(){return{init:!1,isIndex:!0}},watch:{$route:function(){this.isIndex="index"===this.$route.name}},mounted:function(){var t=this;setTimeout(function(){t.init=!0},250)},components:{mainHeader:a,sideNav:n("VU/8")(c,d,!1,function(t){n("fkkw")},null,null).exports,mainFooter:r,mainSkeleton:n("VU/8")({data:function(){return{msg:"hello vue"}}},h,!1,function(t){n("LZvL")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.init?e("div",[e("mainHeader"),this._v(" "),this.isIndex?e("router-view",{staticClass:"page"}):e("div",{staticClass:"container"},[e("sideNav",{staticClass:"nav"}),this._v(" "),e("router-view",{staticClass:"view"})],1),this._v(" "),this.isIndex?this._e():e("mainFooter")],1):e("mainSkeleton")],1)},staticRenderFns:[]};var m=n("VU/8")(f,p,!1,function(t){n("yBeB")},null,null).exports,v=n("fZjL"),g=n.n(v),_=n("/ocq");i.a.use(_.a);var y=[];g()(u.a).forEach(function(t){y=y.concat(u.a[t])});!function t(e){e.forEach(function(e){if(e.items)t(e.items),y=y.concat(e.items);else{if("pages"===e.type)return void(e.component=function(t){return n.e(1).then(function(){return t(n("LFUG")("./"+e.name+".vue"))}.bind(null,n)).catch(n.oe)});e.component=function(t){return n.e(0).then(function(){return t(n("Gv6s")("./"+e.name+".md"))}.bind(null,n)).catch(n.oe)}}})}(y);var b=new _.a({routes:y}),w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"docs-demo-wrapper"},[e("div",{staticClass:"demo-container",style:{height:this.isExpand?"auto":"0"}},[e("div",{attrs:{span:"14"}},[e("div",{staticClass:"docs-demo docs-demo--expand"},[e("div",{staticClass:"highlight-wrapper"},[this._t("highlight")],2)])])]),this._v(" "),e("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:this.toggle}},[this._v(this._s(this.isExpand?"隐藏代码":"显示代码"))])])},staticRenderFns:[]};var x=n("VU/8")({data:function(){return{isExpand:!1}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},w,!1,function(t){n("dG7Z")},null,null).exports,$=n("pFYg"),C=n.n($),k="data-vue-meta-info";function E(){var t=document.getElementsByTagName("head")[0];return{setMetaInfo:function(e){var n=function(n){if("title"===n)return document.title=e.title,"continue";e.hasOwnProperty(n)&&e[n].forEach(function(e){var i=document.createElement(n);!function(t,e){for(var n in t.setAttribute(k,!0),e)e.hasOwnProperty(n)&&t.setAttribute(n,e[n])}(i,e),t.appendChild(i)})};for(var i in e)n(i)},removeMetaInfo:function(){!function(t){for(var e=t.querySelectorAll("["+k+"]"),n=e.length-1;n>-1;n--)"true"===e[n].getAttribute(k)&&t.removeChild(e[n])}(t)}}}function I(t){E().removeMetaInfo(),E().setMetaInfo(t)}var N=function(){};N.install=function(t){t.mixin({beforeCreate:function(){var t=this;if(void 0!==this.$options.metaInfo){var e=C()(this.$options.metaInfo);this._hasMetaInfo=!0,void 0===this.$options.computed&&(this.$options.computed={}),this.$options.computed.$metaInfo="function"===e?this.$options.metaInfo:function(){return t.$options.metaInfo}}},beforeMount:function(){this._hasMetaInfo&&I(this.$metaInfo)},mounted:function(){var t=this;this._hasMetaInfo&&this.$watch("$metaInfo",function(){I(t.$metaInfo)})},activated:function(){this._hasMetaInfo&&I(this.$metaInfo)},deactivated:function(){this._hasMetaInfo&&I(this.$metaInfo)}})};var S=N,q={name:"WLoadingBar",props:{type:{type:Number,default:1}},data:function(){return{speed:5,easing:"linear",percentNum:0,totalProgress:0,showSpinner:!0,isError:!1}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w__loading-bar"},[e("div",{staticClass:"w__loading-bar--bar",class:this.isError?"w__loading-bar--error":"",style:{transform:"translate3d(-"+(100-this.totalProgress)+"%, 0, 0)"},attrs:{role:"bar"}},[e("div",{staticClass:"w__loading-bar--peg"})]),this._v(" "),this.showSpinner?e("div",{staticClass:"w__loading-bar--spinner",attrs:{role:"spinner"}},[e("div",{staticClass:"spinner-icon",class:this.isError?"spinner-icon--error":"",style:{animation:"w-spinner 400ms "+this.easing+" infinite"}})]):this._e()])},staticRenderFns:[]},B=n("VU/8")(q,R,!1,null,null,null).exports,F=i.a.extend(B),U=null,V=null;F.prototype.config=function(t){var e=this;g()(t).forEach(function(n){"isError"!==n&&"totalProgress"!==n&&(e[n]=t[n])})},F.prototype.init=function(){return clearTimeout(U),this.totalProgress=0,this.isError=!1,this.vm=this.$mount(),document.body.appendChild(this.vm.$el),this},F.prototype.start=function(){var t=this;this.init(),U=setInterval(function(){t.totalProgress<90&&(t.totalProgress+=(t.percentNum||Math.random())*t.speed)},100)},F.prototype.end=function(){var t=this;U||this.init(),this.totalProgress=100,clearTimeout(V),V=setTimeout(function(){clearTimeout(U),U=null,document.body.removeChild(t.vm.$el)},200)},F.prototype.error=function(){this.end(),this.totalProgress=100,this.isError=!0};var Q=new F,j={name:"WSkeleton",props:{proportion:{type:Number,default:1},bgColor:{type:String,default:"#b4bccc"},width:{type:String,default:"100%"},height:{type:[String,Boolean],default:!1}},data:function(){return{paddingBottom:this.height||100*this.proportion+"%"}}},O={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w__skeleton",style:{background:this.bgColor,paddingBottom:this.paddingBottom,width:this.width}})},staticRenderFns:[]},P=n("VU/8")(j,O,!1,null,null,null).exports;P.install=function(t){t.component(P.name,P)};var z=P,M={name:"QiuButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},loading:{type:Boolean,default:!1},plain:Boolean,disabled:Boolean,round:Boolean},methods:{handleClick:function(t){this.disabled||this.$emit("click",t)}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"qiu_btn",class:["qiu_btn--"+t.type,{"is-plain":t.plain,"is-disabled":t.disabled,"is-radius":t.round},"qiu_btn--size-"+t.size],attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?n("i",{staticClass:"iconfont",class:t.icon}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},T=n("VU/8")(M,G,!1,null,null,null).exports;T.install=function(t){t.component(T.name,T)};var A=T,L=n("bOdI"),Z=n.n(L),W={name:"QiuIcon",props:{type:{type:String,default:""},size:[String,Number],color:String},computed:{classes:function(){return["iconfont",Z()({},""+this.type,""!=this.type)]},styles:function(){var t={};return this.size&&(t["font-size"]=this.size+"px"),this.color&&(t.color=this.color),t}},methods:{handlerClick:function(t){this.$emit("click",t)}}},H={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.classes,style:this.styles,on:{click:this.handlerClick}})},staticRenderFns:[]},D=n("VU/8")(W,H,!1,null,null,null).exports;D.install=function(t){t.component(D.name,D)};var J=D,Y={name:"QiuTag",components:{QiuIcon:D},props:{name:{type:[String,Number]},closable:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:[String,Number],default:""},type:{type:String,default:""}},data:function(){return{show:!0}},computed:{classes:function(){var t;return["qiu-tag",(t={},Z()(t,"qiu-tag-"+this.color,!!this.color),Z()(t,"qiu-tag-"+this.type,!!this.type),t)]}},methods:{handlerClick:function(t){this.show=!1,this.$emit("on-close",t)}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{class:t.classes},[n("span",[t._t("default")],2),t._v(" "),t.closable?n("QiuIcon",{attrs:{type:"icon-close"},on:{click:t.handlerClick}}):t._e()],1):t._e()])},staticRenderFns:[]},X=n("VU/8")(Y,K,!1,null,null,null).exports;X.install=function(t){t.component(X.name,X)};var tt=X,et=n("BO1k"),nt=n.n(et);function it(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}var st={name:"QiuRow",componentName:"QiuRow",props:{type:{validator:function(t){return it(t,["flex"])}},align:{validator:function(t){return it(t,["top","middle","bottom"])}},justify:{validator:function(t){return it(t,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String},computed:{classes:function(){var t;return[(t={},Z()(t,"qiu-row",!this.type),Z()(t,"qiu-row-"+this.type,!!this.type),Z()(t,"qiu-row-"+this.type+"-"+this.align,!!this.align),Z()(t,"qiu-row-"+this.type+"-"+this.justify,!!this.justify),Z()(t,""+this.className,!!this.className),t)]},styles:function(){var t={};return 0!==this.gutter&&(t={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),t}},methods:{updateGutter:function(t){var e=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.$parent.$children.filter(function(t){return t.$options.name===e}),s=i.findIndex(function(e){return e._uid===t._uid});return n&&i.splice(s,1),i}(function t(e,n){var i=e.$children,s=null;if(i.length){var a=!0,o=!1,r=void 0;try{for(var l,u=nt()(i);!(a=(l=u.next()).done);a=!0){var c=l.value;if(c.$options.name===n){s=c;break}if(s=t(c,n))break}}catch(t){o=!0,r=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw r}}}return s}(this,"QiuCol"),"QiuCol",!1);e.length&&e.forEach(function(e){0!==t&&(e.gutter=t)})}},watch:{gutter:function(t){this.updateGutter(t)}}},at={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},ot=n("VU/8")(st,at,!1,null,null,null).exports;ot.install=function(t){t.component(ot.name,ot)};var rt=ot,lt={name:"QiuCol",props:{span:[Number,String],offset:[Number,String],pull:[Number,String],push:[Number,String],xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object],xxl:[Number,Object]},data:function(){return{gutter:0}},computed:{classes:function(){var t,e=this,n=["qiu-col",(t={},Z()(t,"qiu-col-span-"+this.span,this.span),Z()(t,"qiu-col-order-"+this.order,this.order),Z()(t,"qiu-col-offset-"+this.offset,this.offset),Z()(t,"qiu-col-push-"+this.push,this.push),Z()(t,"qiu-col-pull-"+this.pull,this.pull),Z()(t,""+this.className,!!this.className),t)];return["xs","sm","md","lg","xl","xxl"].forEach(function(t){if("number"==typeof e[t])n.push("qiu-col-span-"+t+"-"+e[t]);else if("object"===C()(e[t])){var i=e[t];g()(i).forEach(function(e){n.push("span"!==e?"qiu-col-"+t+"-"+e+"-"+i[e]:"qiu-col-span-"+t+"-"+i[e])})}}),n},styles:function(){var t={};return 0!==this.gutter&&(t={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),t}},methods:{updateGutter:function(){var t=function(t,e,n){n="string"==typeof e?[e]:e;for(var i=t.$parent,s=i.$options.name;i&&(!s||n.indexOf(s)<0);)(i=i.$parent)&&(s=i.$options.name);return i}(this,"QiuRow");t&&(t.updateGutter(t.gutter),console.log("------------Row.gutter-----------------"),console.log(t.gutter))}},mounted:function(){this.updateGutter()},beforeDestroy:function(){this.updateGutter()}},ut={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},ct=n("VU/8")(lt,ut,!1,null,null,null).exports;ct.install=function(t){t.component(ct.name,ct)};var dt=[z,A,J,tt,rt,ct],ht=function t(e){t.installed||(dt.map(function(t){return e.component(t.name,t)}),S.install(e),e.prototype.$loading=Q)};"undefined"!=typeof window&&window.Vue&&ht(window.Vue);var ft={install:ht,QiuButton:A};n("NFsQ"),n("P9zw");i.a.config.productionTip=!1,i.a.component("demo-block",x),i.a.use(ft),new i.a({el:"#app",router:b,components:{App:m},template:"<App/>"})},sSAf:function(t,e){},yBeB:function(t,e){}},["mUtA"]);
//# sourceMappingURL=app.1787779b38142020424d.js.map