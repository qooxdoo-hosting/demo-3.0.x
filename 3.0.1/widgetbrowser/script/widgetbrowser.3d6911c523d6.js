qx.$$packageData['256']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/blank.html":"widgetbrowser"},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("256", function() {
(function(){var a="center",b="qx.ui.splitpane.Splitter",c="vertical",d="knob",e="middle";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);if(f.getOrientation()==c){this._setLayout(new qx.ui.layout.HBox(0,a));this._getLayout().setAlignY(e);}else {this._setLayout(new qx.ui.layout.VBox(0,e));this._getLayout().setAlignX(a);};this._createChildControl(d);},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(i,h){var g;switch(i){case d:g=new qx.ui.basic.Image;this._add(g);break;};return g||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,i);}}});})();(function(){var a="splitter",b="qx.ui.splitpane.HLayout",c="slider";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(s,k,r){var h=this._getLayoutChildren();var length=h.length;var t,n;var o,v,u,j;var x=r.left||0;var l=r.top||0;for(var i=0;i<length;i++ ){t=h[i];n=t.getLayoutProperties().type;if(n===a){v=t;}else if(n===c){u=t;}else if(!o){o=t;}else {j=t;};};if(o&&j){var A=o.getLayoutProperties().flex;var g=j.getLayoutProperties().flex;if(A==null){A=1;};if(g==null){g=1;};var d=o.getSizeHint();var e=v.getSizeHint();var m=j.getSizeHint();var q=d.width;var z=e.width;var y=m.width;if(A>0&&g>0){var f=A+g;var p=s-z;var q=Math.round((p/f)*A);var y=p-q;var w=qx.ui.layout.Util.arrangeIdeals(d.minWidth,q,d.maxWidth,m.minWidth,y,m.maxWidth);q=w.begin;y=w.end;}else if(A>0){q=s-z-y;if(q<d.minWidth){q=d.minWidth;};if(q>d.maxWidth){q=d.maxWidth;};}else if(g>0){y=s-q-z;if(y<m.minWidth){y=m.minWidth;};if(y>m.maxWidth){y=m.maxWidth;};};o.renderLayout(x,l,q,k);v.renderLayout(q+x,l,z,k);j.renderLayout(q+z+x,l,y,k);}else {v.renderLayout(0,0,0,0);if(o){o.renderLayout(x,l,s,k);}else if(j){j.renderLayout(x,l,s,k);};};},_computeSizeHint:function(){var K=this._getLayoutChildren();var length=K.length;var J,C,D;var H=0,I=0,B=0;var E=0,G=0,F=0;for(var i=0;i<length;i++ ){J=K[i];D=J.getLayoutProperties();if(D.type===c){continue;};C=J.getSizeHint();H+=C.minWidth;I+=C.width;B+=C.maxWidth;if(C.minHeight>E){E=C.minHeight;};if(C.height>G){G=C.height;};if(C.maxHeight>F){F=C.maxHeight;};};return {minWidth:H,width:I,maxWidth:B,minHeight:E,height:G,maxHeight:F};}}});})();(function(){var a="qx.ui.splitpane.Slider";qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});})();(function(){var a="slider",b="slideAnimationEnd",c="PositiveNumber",d="changeValue",f="Integer",g="execute",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",i="_applyKnobFactor",j="visible",k="qx.event.type.Event",l="knob",m="button-begin",n="hidden",o="qx.ui.core.scroll.ScrollBar",p="resize",q="vertical",r="_applyOrientation",s="scrollAnimationEnd",t="_applyPageStep",u="right",v="PositiveInteger",w="horizontal",x="up",y="_applyPosition",z="scrollbar",A="_applyMaximum",B="left",C="button-end",D="down",E="scroll";qx.Class.define(o,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(F){qx.ui.core.Widget.call(this);this._createChildControl(m);this._createChildControl(a).addListener(p,this._onResizeSlider,this);this._createChildControl(C);if(F!=null){this.setOrientation(F);}else {this.initOrientation();};},events:{"scrollAnimationEnd":k},properties:{appearance:{refine:true,init:z},orientation:{check:[w,q],init:w,apply:r},maximum:{check:v,apply:A,init:100},position:{check:h,init:0,apply:y,event:E},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:t},knobFactor:{check:c,apply:i,nullable:true}},members:{__AF:2,__AG:0,_computeSizeHint:function(){var G=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===w){this.__AG=G.minWidth;G.minWidth=0;}else {this.__AG=G.minHeight;G.minHeight=0;};return G;},renderLayout:function(L,top,I,H){var K=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,I,H);var J=this.getOrientation()===w;if(this.__AG>=(J?I:H)){this.getChildControl(m).setVisibility(n);this.getChildControl(C).setVisibility(n);}else {this.getChildControl(m).setVisibility(j);this.getChildControl(C).setVisibility(j);};return K;},_createChildControlImpl:function(O,N){var M;switch(O){case a:M=new qx.ui.core.scroll.ScrollSlider();M.setPageStep(100);M.setFocusable(false);M.addListener(d,this._onChangeSliderValue,this);M.addListener(b,this._onSlideAnimationEnd,this);this._add(M,{flex:1});break;case m:M=new qx.ui.form.RepeatButton();M.setFocusable(false);M.addListener(g,this._onExecuteBegin,this);this._add(M);break;case C:M=new qx.ui.form.RepeatButton();M.setFocusable(false);M.addListener(g,this._onExecuteEnd,this);this._add(M);break;};return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);},_applyMaximum:function(P){this.getChildControl(a).setMaximum(P);},_applyPosition:function(Q){this.getChildControl(a).setValue(Q);},_applyKnobFactor:function(R){this.getChildControl(a).setKnobFactor(R);},_applyPageStep:function(S){this.getChildControl(a).setPageStep(S);},_applyOrientation:function(V,T){var U=this._getLayout();if(U){U.dispose();};if(V===w){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(q,w);this.getChildControl(m).replaceState(x,B);this.getChildControl(C).replaceState(D,u);}else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(w,q);this.getChildControl(m).replaceState(B,x);this.getChildControl(C).replaceState(u,D);};this.getChildControl(a).setOrientation(V);},scrollTo:function(X,W){this.getChildControl(a).slideTo(X,W);},scrollBy:function(ba,Y){this.getChildControl(a).slideBy(ba,Y);},scrollBySteps:function(bc,bb){var bd=this.getSingleStep();this.getChildControl(a).slideBy(bc*bd,bb);},updatePosition:function(be){this.getChildControl(a).updatePosition(be);},stopScrollAnimation:function(){this.getChildControl(a).stopSlideAnimation();},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep(),50);},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep(),50);},_onSlideAnimationEnd:function(){this.fireEvent(s);},_onChangeSliderValue:function(e){this.setPosition(e.getData());},_onResizeSlider:function(e){var bf=this.getChildControl(a).getChildControl(l);var bi=bf.getSizeHint();var bg=false;var bh=this.getChildControl(a).getInnerSize();if(this.getOrientation()==q){if(bh.height<bi.minHeight+this.__AF){bg=true;};}else {if(bh.width<bi.minWidth+this.__AF){bg=true;};};if(bg){bf.exclude();}else {bf.show();};}}});})();(function(){var a="source",b="element",c="name",d="qx.event.type.Event",f="iframe",g="qx.html.Iframe",h="navigate",i="qx.event.type.Data";qx.Class.define(g,{extend:qx.html.Element,construct:function(j,k,l){qx.html.Element.call(this,f,k,l);this.setSource(j);this.addListener(h,this.__Fh,this);qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(b);},events:{"load":d,"navigate":i},members:{_applyProperty:function(name,n){qx.html.Element.prototype._applyProperty.call(this,name,n);if(name==a){var o=this.getDomElement();var m=qx.bom.Iframe.queryCurrentUrl(o);if(n===m){return;};qx.bom.Iframe.setSource(o,n);};},_createDomElement:function(){return qx.bom.Iframe.create(this._content);},getWindow:function(){var p=this.getDomElement();if(p){return qx.bom.Iframe.getWindow(p);}else {return null;};},getDocument:function(){var q=this.getDomElement();if(q){return qx.bom.Iframe.getDocument(q);}else {return null;};},getBody:function(){var r=this.getDomElement();if(r){return qx.bom.Iframe.getBody(r);}else {return null;};},setSource:function(s){this._setProperty(a,s,true);return this;},getSource:function(){return this._getProperty(a);},setName:function(name){this.setAttribute(c,name);return this;},getName:function(){return this.getAttribute(c);},reload:function(){var u=this.getDomElement();if(u){var t=this.getSource();this.setSource(null);this.setSource(t);};},__Fh:function(e){var v=e.getData();if(v){this.setSource(v);};}}});})();(function(){var a="mshtml",b="engine.name",c="repeat",d="horizontal",e="top",f="height",g="_applyOrientation",h="url(",i="qx.ui.splitpane.Blocker",j="width",k=")",l="col-resize",m="row-resize",n="px",o="100%",p="div",q="left",r="vertical",s="qx/static/blank.gif",t="cursor",u="absolute";qx.Class.define(i,{extend:qx.html.Element,construct:function(w){var v={position:u,zIndex:11};if((qx.core.Environment.get(b)==a)){v.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(s)+k;v.backgroundRepeat=c;};qx.html.Element.call(this,p,v);if(w){this.setOrientation(w);}else {this.initOrientation();};},properties:{orientation:{init:d,check:[d,r],apply:g}},members:{_applyOrientation:function(y,x){if(y==d){this.setStyle(f,o);this.setStyle(t,l);this.setStyle(e,null);}else {this.setStyle(j,o);this.setStyle(q,null);this.setStyle(t,m);};},setWidth:function(A,z){var B=z+2*A;this.setStyle(j,B+n);},setHeight:function(D,C){var E=C+2*D;this.setStyle(f,E+n);},setLeft:function(G,F){var H=F-G;this.setStyle(q,H+n);},setTop:function(J,I){var top=I-J;this.setStyle(e,top+n);}}});})();(function(){var a="horizontal",b="mousewheel",c="qx.ui.core.scroll.ScrollSlider",d="keypress";qx.Class.define(c,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);this.removeListener(d,this._onKeyPress);this.removeListener(b,this._onMouseWheel);},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===a){g.width=0;}else {g.height=0;};return g;}}});})();(function(){var a="splitter",b="qx.ui.splitpane.VLayout",c="slider";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(t,l,s){var j=this._getLayoutChildren();var length=j.length;var u,o;var p,w,v,k;var y=s.left||0;var m=s.top||0;for(var i=0;i<length;i++ ){u=j[i];o=u.getLayoutProperties().type;if(o===a){w=u;}else if(o===c){v=u;}else if(!p){p=u;}else {k=u;};};if(p&&k){var A=p.getLayoutProperties().flex;var g=k.getLayoutProperties().flex;if(A==null){A=1;};if(g==null){g=1;};var d=p.getSizeHint();var e=w.getSizeHint();var n=k.getSizeHint();var r=d.height;var h=e.height;var z=n.height;if(A>0&&g>0){var f=A+g;var q=l-h;var r=Math.round((q/f)*A);var z=q-r;var x=qx.ui.layout.Util.arrangeIdeals(d.minHeight,r,d.maxHeight,n.minHeight,z,n.maxHeight);r=x.begin;z=x.end;}else if(A>0){r=l-h-z;if(r<d.minHeight){r=d.minHeight;};if(r>d.maxHeight){r=d.maxHeight;};}else if(g>0){z=l-r-h;if(z<n.minHeight){z=n.minHeight;};if(z>n.maxHeight){z=n.maxHeight;};};p.renderLayout(y,m,t,r);w.renderLayout(y,r+m,t,h);k.renderLayout(y,r+h+m,t,z);}else {w.renderLayout(0,0,0,0);if(p){p.renderLayout(y,m,t,l);}else if(k){k.renderLayout(y,m,t,l);};};},_computeSizeHint:function(){var K=this._getLayoutChildren();var length=K.length;var J,C,D;var E=0,G=0,F=0;var H=0,I=0,B=0;for(var i=0;i<length;i++ ){J=K[i];D=J.getLayoutProperties();if(D.type===c){continue;};C=J.getSizeHint();E+=C.minHeight;G+=C.height;F+=C.maxHeight;if(C.minWidth>H){H=C.minWidth;};if(C.width>I){I=C.width;};if(C.maxWidth>B){B=C.maxWidth;};};return {minHeight:E,height:G,maxHeight:F,minWidth:H,width:I,maxWidth:B};}}});})();(function(){var a="slider",b="mousedown",c="splitter",d="px",f="mouseout",g="Integer",h="height",i="mousemove",j="move",k="maxHeight",l="resize",m="vertical",n="width",o="_applyOrientation",p="_applyOffset",q="splitpane",r="qx.ui.splitpane.Pane",s="top",t="minHeight",u="knob",v="mouseup",w="horizontal",z="minWidth",A="appear",B="losecapture",C="left",D="maxWidth";qx.Class.define(r,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);this.__fq=[];if(E){this.setOrientation(E);}else {this.initOrientation();};this.__la.addListener(b,this._onMouseDown,this);this.__la.addListener(v,this._onMouseUp,this);this.__la.addListener(i,this._onMouseMove,this);this.__la.addListener(f,this._onMouseOut,this);this.__la.addListener(B,this._onMouseUp,this);},properties:{appearance:{refine:true,init:q},offset:{check:g,init:6,apply:p},orientation:{init:w,check:[w,m],apply:o}},members:{__sa:null,__sb:false,__sc:null,__sd:null,__mV:null,__se:null,__sf:null,__fq:null,__la:null,_createChildControlImpl:function(H,G){var F;switch(H){case a:F=new qx.ui.splitpane.Slider(this);F.exclude();this._add(F,{type:H});break;case c:F=new qx.ui.splitpane.Splitter(this);this._add(F,{type:H});F.addListener(j,this.__sg,this);break;};return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);},__sg:function(e){this.__si(e.getData());},__sh:function(K){this.__la=new qx.ui.splitpane.Blocker(K);this.getContentElement().add(this.__la);var I=this.getChildControl(c);var J=I.getWidth();if(!J){I.addListenerOnce(A,function(){this.__si();},this);};I.addListener(l,function(e){var L=e.getData();if(L.height==0||L.width==0){this.__la.hide();}else {this.__la.show();};},this);},getBlocker:function(){return this.__la;},_applyOrientation:function(Q,N){var R=this.getChildControl(a);var M=this.getChildControl(c);this.__mV=Q===w;if(!this.__la){this.__sh(Q);};this.__la.setOrientation(Q);var P=this._getLayout();if(P){P.dispose();};var O=Q===m?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;this._setLayout(O);M.removeState(N);M.addState(Q);M.getChildControl(u).removeState(N);M.getChildControl(u).addState(Q);R.removeState(N);R.addState(Q);qx.ui.core.queue.Manager.flush();this.__si();},_applyOffset:function(T,S){this.__si();},__si:function(V){var U=this.getChildControl(c);var ba=this.getOffset();var bb=U.getBounds();var Y=U.getContentElement().getDomElement();if(!Y){return;};if(this.__mV){var X=null;if(V){X=V.width;}else if(bb){X=bb.width;};var bc=V&&V.left;if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;};this.__la.setWidth(ba,X);this.__la.setLeft(ba,bc);};}else {var W=null;if(V){W=V.height;}else if(bb){W=bb.height;};var top=V&&V.top;if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;};this.__la.setHeight(ba,W);this.__la.setTop(ba,top);};};},add:function(be,bd){if(bd==null){this._add(be);}else {this._add(be,{flex:bd});};this.__fq.push(be);},remove:function(bf){this._remove(bf);qx.lang.Array.remove(this.__fq,bf);},getChildren:function(){return this.__fq;},_onMouseDown:function(e){if(!e.isLeftPressed()){return;};var bg=this.getChildControl(c);var bj=bg.getContentLocation();var bh=this.getContentLocation();this.__sa=this.__mV?e.getDocumentLeft()-bj.left+bh.left:e.getDocumentTop()-bj.top+bh.top;var bi=this.getChildControl(a);var bk=bg.getBounds();bi.setUserBounds(bk.left,bk.top,bk.width,bk.height);bi.setZIndex(bg.getZIndex()+1);bi.show();this.__sb=true;this.__la.capture();e.stop();},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());if(this.__sb){this.__sj();var bl=this.getChildControl(a);var bm=this.__se;if(this.__mV){bl.setDomLeft(bm);this.__la.setStyle(C,(bm-this.getOffset())+d);}else {bl.setDomTop(bm);this.__la.setStyle(s,(bm-this.getOffset())+d);};e.stop();};},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());},_onMouseUp:function(e){if(!this.__sb){return;};this._finalizeSizes();var bn=this.getChildControl(a);bn.exclude();this.__sb=false;this.releaseCapture();e.stop();},_finalizeSizes:function(){var br=this.__se;var bo=this.__sf;if(br==null){return;};var bt=this._getChildren();var bs=bt[2];var bq=bt[3];var bp=bs.getLayoutProperties().flex;var bu=bq.getLayoutProperties().flex;if((bp!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});bq.setLayoutProperties({flex:bo});}else {if(this.__mV){bs.setWidth(br);bq.setWidth(bo);}else {bs.setHeight(br);bq.setHeight(bo);};};},__sj:function(){if(this.__mV){var bx=z,bE=n,by=D,bC=this.__sc;}else {var bx=t,bE=h,by=k,bC=this.__sd;};var bD=this._getChildren();var bv=bD[2].getSizeHint();var bA=bD[3].getSizeHint();var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];var bz=bC-this.__sa;var bw=bB-bz;if(bz<bv[bx]){bw-=bv[bx]-bz;bz=bv[bx];}else if(bw<bA[bx]){bz-=bA[bx]-bw;bw=bA[bx];};if(bz>bv[by]){bw+=bz-bv[by];bz=bv[by];}else if(bw>bA[by]){bz+=bw-bA[by];bw=bA[by];};this.__se=bz;this.__sf=bw;},_isActiveDragSession:function(){return this.__sb;},_setLastMousePosition:function(x,y){this.__sc=x;this.__sd=y;}},destruct:function(){this.__fq=null;}});})();(function(){var a="splitter",b="horizontal",c="widgetbrowser.pages.EmbedFrame",d="Iframe",e="widgetbrowser/blank.html",f="ThemedIframe";qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.setLayout(new qx.ui.layout.Canvas(10));this.initWidgets();},members:{initWidgets:function(){var m=this._widgets;var k,n,g;var h=qx.util.ResourceManager.getInstance().toUri(e);var j=new qx.ui.splitpane.Pane(b);j.getChildControl(a).setBackgroundColor(null);this.add(j);k=new qx.ui.basic.Label(d);n=new qx.ui.container.Composite(new qx.ui.layout.Canvas());var l=new qx.ui.embed.Iframe().set({source:h,width:300,height:200});m.push(l);n.add(k,{top:0,left:5});n.add(l,{top:20,left:0,right:0});k=new qx.ui.basic.Label(f);g=new qx.ui.container.Composite(new qx.ui.layout.Canvas());var i=new qx.ui.embed.ThemedIframe().set({source:h,width:300,height:200});m.push(i);g.add(k,{top:0,left:5});g.add(i,{top:20,left:0,right:0});j.add(n);j.add(g);}}});})();(function(){var a="qx.ui.embed.AbstractIframe",b="name",c="Abstract method call",d="",f="about:blank",g="_applySource",h="navigate",i="qx.event.type.Event",j="String",k="_applyFrameName",l="qx.event.type.Data";qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(m){qx.ui.core.Widget.call(this);if(m){this.setSource(m);};this._getIframeElement().addListener(h,this.__Fh,this);},events:{"load":i,"navigate":l},properties:{source:{check:j,apply:g,init:f},frameName:{check:j,init:d,apply:k}},members:{_getIframeElement:function(){throw new Error(c);},_applySource:function(o,n){this._getIframeElement().setSource(o);},_applyFrameName:function(q,p){this._getIframeElement().setAttribute(b,q);},getWindow:function(){return this._getIframeElement().getWindow();},getDocument:function(){return this._getIframeElement().getDocument();},getBody:function(){return this._getIframeElement().getBody();},getName:function(){return this._getIframeElement().getName();},reload:function(){this._getIframeElement().reload();},__Fh:function(e){var r=e.getData();if(r){this.setSource(r);};this.fireDataEvent(h,r);}}});})();(function(){var a="resize",b="scroll",c="interval",d="horizontal",f="hidden",g="mousewheel",h="qx.ui.embed.ThemedIframe",i="_updateScrollbars",j="iframe",k="scrollbarX",l="scrollbarY",m="scrollbar-y",n="load",o="off",p="corner",q="on",r="scrollarea",s="scrollbar-x",t="auto",u="vertical";qx.Class.define(h,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.scroll.MWheelHandling,construct:function(v){qx.ui.embed.AbstractIframe.call(this,v);var w=new qx.ui.layout.Grid();w.setColumnFlex(0,1);w.setRowFlex(0,1);this._setLayout(w);this._showChildControl(j);},properties:{appearance:{refine:true,init:r},scrollbarX:{check:[t,q,o],init:t,themeable:true,apply:i},scrollbarY:{check:[t,q,o],init:t,themeable:true,apply:i},scrollbar:{group:[k,l]}},members:{__Fi:null,__Fj:null,_getIframeElement:function(){return this.getChildControl(j).getContentElement();},_createChildControlImpl:function(B,A){var z;switch(B){case j:z=new qx.ui.embed.Iframe(this.getSource());z.addListener(n,this._onIframeLoad,this);z.addListener(a,this._onIframeResize,this);this._add(z,{row:0,column:0});break;case s:z=new qx.ui.core.scroll.ScrollBar(d);z.setMinWidth(0);z.exclude();z.addListener(b,this._onScrollBarX,this);this._add(z,{row:1,column:0});break;case m:z=new qx.ui.core.scroll.ScrollBar(u);z.setMinHeight(0);z.exclude();z.addListener(b,this._onScrollBarY,this);this._add(z,{row:0,column:1});break;case p:z=new qx.ui.core.Widget();z.setWidth(0);z.setHeight(0);z.exclude();this._add(z,{row:1,column:1});break;};return z||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,B);},_onIframeLoad:function(){this._disableScollbars();var C=this._getIframeElement().getBody();if(C){this._startIframeObserver();this._addWheelListener();};this.fireEvent(n);},_onIframeResize:function(){this._updateScrollbars();},_disableScollbars:function(){this._excludeChildControl(s);this._excludeChildControl(m);this._excludeChildControl(p);this._stopIframeObserver();},_addWheelListener:function(){try{var D=this._getIframeElement().getBody();qx.bom.Element.addListener(D,g,this._onMouseWheel,this);}catch(e){this._disableScollbars();};},_startIframeObserver:function(){if(this.__Fj){this._stopIframeObserver();};var E=qx.event.Idle.getInstance();this.__Fj=E.addListener(c,this._onIframeObserverInterval,this);},_stopIframeObserver:function(){this.__Fi=null;if(!this.__Fj){return;};var F=qx.event.Idle.getInstance();F.removeListenerById(this.__Fj);},_onIframeObserverInterval:function(){var G=this._getIframeSize();if(!G){this._disableScollbars();return;};if(this.__Fi&&G.width==this.__Fi.width&&G.height==this.__Fi.height){return;};this.__Fi=G;this._preventIframeScrolling();this._updateScrollbars();},_preventIframeScrolling:function(){try{var H=this._getIframeElement().getWindow();var I=this._getIframeElement().getDocument();if(qx.bom.Document.isStandardMode(H)){I.documentElement.style.overflow=f;}else {I.body.style.overflow=f;};}catch(e){this._disableScollbars();};},_updateScrollbars:function(){var J=this.__Fi;var M=this.getChildControl(j).getBounds();var K=this.getChildControl(j).getInnerSize();if(!J||!K||!K){return;};var L=false;var P=false;var N=this.getScrollbarX();var O=this.getScrollbarY();if(N===t&&O===t){var L=J.width>K.width;var P=J.height>K.height;if((L||P)&&!(L&&P)){if(L){P=J.height>M.height;}else if(P){L=J.width>M.width;};};}else {var L=N===q;var P=O===q;if(J.width>(L?M.width:K.width)&&N===t){L=true;};if(J.height>(L?M.height:K.height)&&O===t){P=true;};};this._configureScrollbar(s,L,K.width,J.width);this._configureScrollbar(m,P,K.height,J.height);this._updateCornerWidget();},_getIframeSize:function(){try{var Q=this._getIframeElement().getWindow();var R={width:qx.bom.Document.getWidth(Q),height:qx.bom.Document.getHeight(Q)};return R;}catch(e){return null;};},_updateCornerWidget:function(){if(this._isChildControlVisible(s)&&this._isChildControlVisible(m)){this._showChildControl(p);}else {this._excludeChildControl(p);};},_configureScrollbar:function(S,T,W,V){if(!T){this._excludeChildControl(S);return;};var U=this._showChildControl(S);if(W>=V){U.set({position:0,maximum:V,knobFactor:1,enabled:false});}else {U.setMaximum(1000000);U.set({position:Math.min(U.getPosition(),V),maximum:V-W,knobFactor:W/V,enabled:true});};},_onScrollBarX:function(e){this.scrollToX(e.getData());},_onScrollBarY:function(e){this.scrollToY(e.getData());},scrollToX:function(x){try{var X=this._getIframeElement().getWindow();X.scroll(x,qx.bom.Viewport.getScrollTop(X));}catch(e){this._disableScollbars();};},scrollToY:function(y){try{var Y=this._getIframeElement().getWindow();Y.scroll(qx.bom.Viewport.getScrollLeft(Y),y);}catch(e){this._disableScollbars();};}},destruct:function(){this._stopIframeObserver();this.__Fi=null;}});})();(function(){var a="no",b="mousedown",c="Boolean",d="px",f="event.help",g="gecko",h="__vV",i="auto",j="_applyScrollbar",k="DOMNodeInserted",l="load",m="_applyNativeHelp",n="yes",o="scrolling",p="/",q="help",r="appear",s="engine.name",t="mouseup",u="block",v="qx.ui.embed.Iframe",w="losecapture",x="contextmenu",y="none",z="iframe",A="display";qx.Class.define(v,{extend:qx.ui.embed.AbstractIframe,construct:function(B){if(B!=null){this.__Fk=B;};qx.ui.embed.AbstractIframe.call(this,B);qx.event.Registration.addListener(document.body,b,this.block,this,true);qx.event.Registration.addListener(document.body,t,this.release,this,true);qx.event.Registration.addListener(document.body,w,this.release,this,true);this.__vV=this._createBlockerElement();if((qx.core.Environment.get(s)==g)){this.addListenerOnce(r,function(e){var C=this.getContentElement().getDomElement();qx.bom.Event.addNativeListener(C,k,this._onDOMNodeInserted);});this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);};},properties:{appearance:{refine:true,init:z},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:c,init:false,apply:m},scrollbar:{check:[i,a,n],nullable:true,themeable:true,apply:j}},members:{__Fk:null,__vV:null,renderLayout:function(H,top,F,D){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,H,top,F,D);var G=d;var E=this.getInsets();this.__vV.setStyles({"left":(H+E.left)+G,"top":(top+E.top)+G,"width":(F-E.left-E.right)+G,"height":(D-E.top-E.bottom)+G});},_createContentElement:function(){var I=new qx.html.Iframe(this.__Fk);I.addListener(l,this._onIframeLoad,this);return I;},_getIframeElement:function(){return this.getContentElement();},_createBlockerElement:function(){var J=new qx.html.Blocker();J.setStyles({"zIndex":20,"display":y});return J;},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);this._applyNativeHelp(this.getNativeHelp(),null);this.fireNonBubblingEvent(l);},block:function(){this.__vV.setStyle(A,u);},release:function(){this.__vV.setStyle(A,y);},_applyNativeContextMenu:function(M,L){if(M!==false&&L!==false){return;};var K=this.getDocument();if(!K){return;};try{var N=K.documentElement;}catch(e){return;};if(L===false){qx.event.Registration.removeListener(N,x,this._onNativeContextMenu,this,true);};if(M===false){qx.event.Registration.addListener(N,x,this._onNativeContextMenu,this,true);};},_onNativeContextMenu:function(e){e.preventDefault();},_applyNativeHelp:function(P,O){if(qx.core.Environment.get(f)){var document=this.getDocument();if(!document){return;};try{if(O===false){qx.bom.Event.removeNativeListener(document,q,(function(){return false;}));};if(P===false){qx.bom.Event.addNativeListener(document,q,(function(){return false;}));};}catch(e){{};};};},_syncSourceAfterDOMMove:function(){var R=this.getContentElement().getDomElement();var Q=R.src;if(Q.charAt(Q.length-1)==p){Q=Q.substring(0,Q.length-1);};if(Q!=this.getSource()){qx.bom.Iframe.getWindow(R).stop();R.src=this.getSource();};},_applyScrollbar:function(S){this.getContentElement().setAttribute(o,S);},setLayoutParent:function(parent){qx.ui.embed.AbstractIframe.prototype.setLayoutParent.call(this,parent);if(parent){this.getLayoutParent().getContentElement().add(this.__vV);};}},destruct:function(){if(this.getLayoutParent()&&this.__vV.getParent()){this.getLayoutParent().getContentElement().remove(this.__vV);};this._disposeObjects(h);qx.event.Registration.removeListener(document.body,b,this.block,this,true);qx.event.Registration.removeListener(document.body,t,this.release,this,true);qx.event.Registration.removeListener(document.body,w,this.release,this,true);}});})();
});