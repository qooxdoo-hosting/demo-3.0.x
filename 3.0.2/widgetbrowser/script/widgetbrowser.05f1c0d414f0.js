qx.$$packageData['146']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("146", function() {
(function(){var a="scrollY",b="The method 'getItemRight' is not implemented!",c="update",d="scrollX",f="The method 'getItemLeft' is not implemented!",g="The method 'getItemBottom' is not implemented!",h="The method 'getItemTop' is not implemented!",i="pane",j="os.scrollBarOverlayed",k="qx.ui.virtual.core.Scroller";qx.Class.define(k,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(o,l,n,m){qx.ui.core.scroll.AbstractScrollArea.call(this);this.__Ay=new qx.ui.virtual.core.Pane(o,l,n,m);this.__Ay.addListener(c,this._computeScrollbars,this);this.__Ay.addListener(d,this._onScrollPaneX,this);this.__Ay.addListener(a,this._onScrollPaneY,this);if(qx.core.Environment.get(j)){this._add(this.__Ay,{edge:0});}else {this._add(this.__Ay,{row:0,column:0});};},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__Ay:null,getPane:function(){return this.__Ay;},_createChildControlImpl:function(q,p){if(q==i){return this.__Ay;}else {return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,q);};},getItemTop:function(r){throw new Error(h);},getItemBottom:function(s){throw new Error(g);},getItemLeft:function(t){throw new Error(f);},getItemRight:function(u){throw new Error(b);},_onScrollBarX:function(e){this.__Ay.setScrollX(e.getData());},_onScrollBarY:function(e){this.__Ay.setScrollY(e.getData());}},destruct:function(){this.__Ay.dispose();this.__Ay=null;}});})();(function(){var a="qx.ui.virtual.core.ILayer";qx.Interface.define(a,{members:{fullUpdate:function(d,e,c,b){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(d);this.assertPositiveInteger(e);this.assertArray(c);this.assertArray(b);},updateLayerWindow:function(h,i,g,f){this.assertArgumentsCount(arguments,6,6);this.assertPositiveInteger(h);this.assertPositiveInteger(i);this.assertArray(g);this.assertArray(f);},updateLayerData:function(){}}});})();(function(){var a="qx.ui.virtual.layer.Abstract",b="abstract",c="Abstract method '_fullUpdate' called!";qx.Class.define(a,{extend:qx.ui.core.Widget,type:b,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);this.__iQ={};},properties:{anonymous:{refine:true,init:true}},members:{__iQ:null,__bG:null,__zH:null,__zI:null,__zJ:null,__ox:null,getFirstRow:function(){return this.__zH;},getFirstColumn:function(){return this.__zI;},getRowSizes:function(){return this.__zJ||[];},getColumnSizes:function(){return this.__ox||[];},syncWidget:function(e){if(!this.getContentElement().getDomElement()){return;};if(this.__iQ.fullUpdate||this.__iQ.updateLayerWindow&&this.__iQ.updateLayerData){this._fullUpdate.apply(this,this.__bG);}else if(this.__iQ.updateLayerWindow){this._updateLayerWindow.apply(this,this.__bG);}else if(this.__iQ.updateLayerData&&this.__zJ){this._updateLayerData();};if(this.__iQ.fullUpdate||this.__iQ.updateLayerWindow){var d=this.__bG;this.__zH=d[0];this.__zI=d[1];this.__zJ=d[2];this.__ox=d[3];};this.__iQ={};},_updateLayerData:function(){this._fullUpdate(this.__zH,this.__zI,this.__zJ,this.__ox);},_fullUpdate:function(g,i,h,f){throw new Error(c);},_updateLayerWindow:function(k,m,l,j){this._fullUpdate(k,m,l,j);},updateLayerData:function(){this.__iQ.updateLayerData=true;qx.ui.core.queue.Widget.add(this);},fullUpdate:function(p,q,o,n){this.__bG=arguments;this.__iQ.fullUpdate=true;qx.ui.core.queue.Widget.add(this);},updateLayerWindow:function(t,u,s,r){this.__bG=arguments;this.__iQ.updateLayerWindow=true;qx.ui.core.queue.Widget.add(this);}},destruct:function(){this.__iQ=this.__bG=this.__zJ=this.__ox=null;}});})();(function(){var a="cell.column",b="updated",c="qx.event.type.Event",d="qx.ui.virtual.layer.WidgetCell",e="cell.row",f="cell.empty";qx.Class.define(d,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);this.setZIndex(12);{};this._cellProvider=g;this.__zY=[];},properties:{anonymous:{refine:true,init:false}},events:{updated:c},members:{__zY:null,getRenderedCellWidget:function(p,m){var h=this.getColumnSizes().length;var o=this.getRowSizes().length;var n=this.getFirstRow();var l=this.getFirstColumn();if(p<n||p>=n+o||m<l||m>=l+h){return null;};var k=(m-l)+(p-n)*h;var j=this._getChildren()[k];if(j.getUserData(f)){return null;}else {return j;};},_getSpacer:function(){var q=this.__zY.pop();if(!q){q=new qx.ui.core.Spacer();q.setUserData(f,1);};return q;},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();for(var i=t.length-1;i>=0;i-- ){if(!t[i].getUserData(f)){t[i].activate();break;};};};},_fullUpdate:function(z,u,C,w){var A=this._cellProvider;var F=this._getChildren();for(var i=0;i<F.length;i++ ){var D=F[i];if(D.getUserData(f)){this.__zY.push(D);}else {this._activateNotEmptyChild(D);A.poolCellWidget(D);};};this._removeAll();var top=0;var E=0;for(var y=0;y<C.length;y++ ){for(var x=0;x<w.length;x++ ){var G=z+y;var v=u+x;var B=A.getCellWidget(G,v)||this._getSpacer();B.setUserBounds(E,top,w[x],C[y]);B.setUserData(e,G);B.setUserData(a,v);this._add(B);E+=w[x];};top+=C[y];E=0;};this.fireEvent(b);},_updateLayerWindow:function(T,H,K,W){{};var L=T+K.length-1;var U=H+W.length-1;var J={firstRow:Math.max(T,this.getFirstRow()),lastRow:Math.min(L,this._lastRow),firstColumn:Math.max(H,this.getFirstColumn()),lastColumn:Math.min(U,this._lastColumn)};this._lastColumn=U;this._lastRow=L;if(J.firstRow>J.lastRow||J.firstColumn>J.lastColumn){return this._fullUpdate(T,H,K,W);};var M=this._getChildren();var O=this.getColumnSizes().length;var R=[];var V={};for(var N=T;N<=L;N++ ){R[N]=[];for(var X=H;X<=U;X++ ){if(N>=J.firstRow&&N<=J.lastRow&&X>=J.firstColumn&&X<=J.lastColumn){var x=X-this.getFirstColumn();var y=N-this.getFirstRow();var P=y*O+x;R[N][X]=M[P];V[P]=true;};};};var I=this._cellProvider;var M=this._getChildren();for(var i=0;i<M.length;i++ ){if(!V[i]){var S=M[i];if(S.getUserData(f)){this.__zY.push(S);}else {this._activateNotEmptyChild(S);I.poolCellWidget(S);};};};this._removeAll();var top=0;var Y=0;for(var y=0;y<K.length;y++ ){for(var x=0;x<W.length;x++ ){var N=T+y;var X=H+x;var Q=R[N][X]||I.getCellWidget(N,X)||this._getSpacer();Q.setUserBounds(Y,top,W[x],K[y]);Q.setUserData(e,N);Q.setUserData(a,X);this._add(Q);Y+=W[x];};top+=K[y];Y=0;};this.fireEvent(b);}},destruct:function(){var ba=this._getChildren();for(var i=0;i<ba.length;i++ ){ba[i].dispose();};this._cellProvider=this.__zY=null;}});})();(function(){var a="qx.ui.virtual.selection.Abstract",b="mouseup",c="mousedown",d="losecapture",e="mouseover",f="mousemove",g="removeItem",h="keypress",i="addItem";qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(k,j){qx.ui.core.selection.Abstract.call(this);{};this._pane=k;this._delegate=j||{};},members:{_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);};},attachMouseEvents:function(){var p=this._pane.getContentElement();p.addListener(c,this.handleMouseDown,this);p.addListener(b,this.handleMouseUp,this);p.addListener(e,this.handleMouseOver,this);p.addListener(f,this.handleMouseMove,this);p.addListener(d,this.handleLoseCapture,this);},detatchMouseEvents:function(){var q=this._pane.getContentElement();q.removeListener(c,this.handleMouseDown,this);q.removeListener(b,this.handleMouseUp,this);q.removeListener(e,this.handleMouseOver,this);q.removeListener(f,this.handleMouseMove,this);q.removeListener(d,this.handleLoseCapture,this);},attachKeyEvents:function(r){r.addListener(h,this.handleKeyPress,this);},detachKeyEvents:function(s){s.removeListener(h,this.handleKeyPress,this);},attachListEvents:function(t){t.addListener(i,this.handleAddItem,this);t.addListener(g,this.handleRemoveItem,this);},detachListEvents:function(u){u.removeListener(i,this.handleAddItem,this);u.removeListener(g,this.handleRemoveItem,this);},_capture:function(){this._pane.capture();},_releaseCapture:function(){this._pane.releaseCapture();},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);this._pane.setScrollY(this._pane.getScrollY()+w);},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();return x?qx.bom.element.Location.get(x):null;},_getDimension:function(){return this._pane.getInnerSize();}},destruct:function(){this._pane=this._delegate=null;}});})();(function(){var a="qx.ui.virtual.selection.Row",b="above",c="under";qx.Class.define(a,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();},_getSelectableFromMouseEvent:function(event){var d=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());if(!d){return null;};return this._isSelectable(d.row)?d.row:null;},getSelectables:function(f){var e=[];for(var i=0,l=this._getItemCount();i<l;i++ ){if(this._isSelectable(i)){e.push(i);};};return e;},_getSelectableRange:function(j,k){var m=[];var g=Math.min(j,k);var h=Math.max(j,k);for(var i=g;i<=h;i++ ){if(this._isSelectable(i)){m.push(i);};};return m;},_getFirstSelectable:function(){var n=this._getItemCount();for(var i=0;i<n;i++ ){if(this._isSelectable(i)){return i;};};return null;},_getLastSelectable:function(){var o=this._getItemCount();for(var i=o-1;i>=0;i-- ){if(this._isSelectable(i)){return i;};};return null;},_getRelatedSelectable:function(q,s){if(s==b){var r=q-1;var p=0;var t=-1;}else if(s==c){var r=q+1;var p=this._getItemCount()-1;var t=1;}else {return null;};for(var i=r;i!==p+t;i+=t){if(this._isSelectable(i)){return i;};};return null;},_getPage:function(v,u){if(u){return this._getFirstSelectable();}else {return this._getLastSelectable();};},_selectableToHashCode:function(w){return w;},_scrollItemIntoView:function(x){this._pane.scrollRowIntoView(x);},_getSelectableLocationX:function(y){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};},_getSelectableLocationY:function(z){var C=this._pane.getRowConfig();var B=C.getItemPosition(z);var A=B+C.getItemSize(z)-1;return {top:B,bottom:A};}}});})();(function(){var a="qx.ui.virtual.core.Pane",b="resize",c="click",d="mousedown",f="update",g="scrollX",h="dblclick",j="change",k="contextmenu",l="cellClick",m="cellContextmenu",n="appear",o="__zS",p="qx.ui.virtual.core.CellEvent",q="qx.event.type.Event",r="__zR",s="__zK",t="cellDblclick",u="scrollY",v="__zL",w="qx.event.type.Data";qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(A,x,z,y){qx.ui.core.Widget.call(this);this.__zK=new qx.ui.virtual.core.Axis(z,A);this.__zL=new qx.ui.virtual.core.Axis(y,x);this.__zM=0;this.__zN=0;this.__zO=0;this.__zP=0;this.__zQ={};this.__iQ={};this.__zR=new qx.ui.container.Composite();this.__zR.setUserBounds(0,0,0,0);this._add(this.__zR);this.__zS=[];this.__zK.addListener(j,this.fullUpdate,this);this.__zL.addListener(j,this.fullUpdate,this);this.addListener(b,this._onResize,this);this.addListenerOnce(n,this._onAppear,this);this.addListener(d,this._onMouseDown,this);this.addListener(c,this._onClick,this);this.addListener(h,this._onDblclick,this);this.addListener(k,this._onContextmenu,this);},events:{cellClick:p,cellContextmenu:p,cellDblclick:p,update:q,scrollX:w,scrollY:w},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zK:null,__zL:null,__zM:null,__zN:null,__zO:null,__zP:null,__zQ:null,__iQ:null,__zR:null,__zS:null,__zT:null,__ox:null,__zJ:null,__zU:null,getRowConfig:function(){return this.__zK;},getColumnConfig:function(){return this.__zL;},getChildren:function(){return [this.__zR];},addLayer:function(B){{};this.__zS.push(B);B.setUserBounds(0,0,0,0);this.__zR.add(B);},getLayers:function(){return this.__zS;},getVisibleLayers:function(){var C=[];for(var i=0;i<this.__zS.length;i++ ){var D=this.__zS[i];if(D.isVisible()){C.push(D);};};return C;},getScrollMaxX:function(){var E=this.getInnerSize();if(E){return Math.max(0,this.__zL.getTotalSize()-E.width);};return 0;},getScrollMaxY:function(){var F=this.getInnerSize();if(F){return Math.max(0,this.__zK.getTotalSize()-F.height);};return 0;},setScrollY:function(I){var G=this.getScrollMaxY();if(I<0){I=0;}else if(I>G){I=G;};if(this.__zM!==I){var H=this.__zM;this.__zM=I;this._deferredUpdateScrollPosition();this.fireDataEvent(u,I,H);};},getScrollY:function(){return this.__zM;},setScrollX:function(L){var J=this.getScrollMaxX();if(L<0){L=0;}else if(L>J){L=J;};if(L!==this.__zN){var K=this.__zN;this.__zN=L;this._deferredUpdateScrollPosition();this.fireDataEvent(g,L,K);};},getScrollX:function(){return this.__zN;},getScrollSize:function(){return {width:this.__zL.getTotalSize(),height:this.__zK.getTotalSize()};},scrollRowIntoView:function(O){var P=this.getBounds();if(!P){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(O);},this,0);},this);return;};var Q=this.__zK.getItemPosition(O);var N=Q+this.__zK.getItemSize(O);var M=this.getScrollY();if(Q<M){this.setScrollY(Q);}else if(N>M+P.height){this.setScrollY(N-P.height);};},scrollColumnIntoView:function(R){var U=this.getBounds();if(!U){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(R);},this,0);},this);return;};var T=this.__zL.getItemPosition(R);var S=T+this.__zL.getItemSize(R);var V=this.getScrollX();if(T<V){this.setScrollX(T);}else if(S>V+U.width){this.setScrollX(S-U.width);};},scrollCellIntoView:function(W,Y){var X=this.getBounds();if(!X){this.addListenerOnce(n,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(W,Y);},this,0);},this);return;};this.scrollColumnIntoView(W);this.scrollRowIntoView(Y);},getCellAtPosition:function(ba,bb){var be,bd;var bc=this.getContentLocation();if(!bc||bb<bc.top||bb>=bc.bottom||ba<bc.left||ba>=bc.right){return null;};be=this.__zK.getItemAtPosition(this.getScrollY()+bb-bc.top);bd=this.__zL.getItemAtPosition(this.getScrollX()+ba-bc.left);if(!be||!bd){return null;};return {row:be.index,column:bd.index};},prefetchX:function(bi,bl,bj,bh){var bf=this.getVisibleLayers();if(bf.length==0){return;};var bk=this.getBounds();if(!bk){return;};var bm=this.__zN+bk.width;var bn=this.__zP-bm;if(this.__zN-this.__zQ.left<Math.min(this.__zN,bi)||this.__zQ.right-bm<Math.min(bn,bj)){var bo=Math.min(this.__zN,bl);var bg=Math.min(bn,bh);this._setLayerWindow(bf,this.__zN-bo,this.__zM,bk.width+bo+bg,bk.height,false);};},prefetchY:function(by,bu,bq,bt){var bp=this.getVisibleLayers();if(bp.length==0){return;};var bv=this.getBounds();if(!bv){return;};var br=this.__zM+bv.height;var bs=this.__zO-br;if(this.__zM-this.__zQ.top<Math.min(this.__zM,by)||this.__zQ.bottom-br<Math.min(bs,bq)){var bx=Math.min(this.__zM,bu);var bw=Math.min(bs,bt);this._setLayerWindow(bp,this.__zN,this.__zM-bx,bv.width,bv.height+bx+bw,false);};},_onResize:function(){if(this.getContentElement().getDomElement()){this.__zT=true;this._updateScrollPosition();this.__zT=null;this.fireEvent(f);};},_onAppear:function(){this.fullUpdate();},_onMouseDown:function(e){this.__zU=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());},_onClick:function(e){this.__zV(e,l);},_onContextmenu:function(e){this.__zV(e,m);},_onDblclick:function(e){this.__zV(e,t);},__zV:function(e,bB){var bA=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());if(!bA){return;};var bz=this.__zU;if(bz==null||bz.row!==bA.row||bz.column!==bA.column){return;};this.fireNonBubblingEvent(bB,qx.ui.virtual.core.CellEvent,[this,e,bA.row,bA.column]);},syncWidget:function(bC){if(this.__iQ._fullUpdate){this._fullUpdate();}else if(this.__iQ._updateScrollPosition){this._updateScrollPosition();};this.__iQ={};},_setLayerWindow:function(bD,bS,top,bO,bK,bU){var bJ=this.__zK.getItemAtPosition(top);if(bJ){var bM=bJ.index;var bQ=this.__zK.getItemSizes(bM,bK+bJ.offset);var bL=qx.lang.Array.sum(bQ);var bT=top-bJ.offset;var bP=top-bJ.offset+bL;}else {var bM=0;var bQ=[];var bL=0;var bT=0;var bP=0;};var bE=this.__zL.getItemAtPosition(bS);if(bE){var bI=bE.index;var bG=this.__zL.getItemSizes(bI,bO+bE.offset);var bN=qx.lang.Array.sum(bG);var bR=bS-bE.offset;var bH=bS-bE.offset+bN;}else {var bI=0;var bG=[];var bN=0;var bR=0;var bH=0;};this.__zQ={top:bT,bottom:bP,left:bR,right:bH};this.__zR.setUserBounds((this.getPaddingLeft()||0)+(this.__zQ.left-this.__zN),(this.getPaddingTop()||0)+(this.__zQ.top-this.__zM),bN,bL);this.__ox=bG;this.__zJ=bQ;for(var i=0;i<this.__zS.length;i++ ){var bF=this.__zS[i];bF.setUserBounds(0,0,bN,bL);if(bU){bF.fullUpdate(bM,bI,bQ,bG);}else {bF.updateLayerWindow(bM,bI,bQ,bG);};};},__zW:function(){if(this.__zT){return;};var bV=this.getScrollSize();if(this.__zO!==bV.height||this.__zP!==bV.width){this.__zO=bV.height;this.__zP=bV.width;this.fireEvent(f);};},fullUpdate:function(){this.__iQ._fullUpdate=1;qx.ui.core.queue.Widget.add(this);},isUpdatePending:function(){return !!this.__iQ._fullUpdate;},_fullUpdate:function(){var bW=this.getVisibleLayers();if(bW.length==0){this.__zW();return;};var bX=this.getBounds();if(!bX){return;};this._setLayerWindow(bW,this.__zN,this.__zM,bX.width,bX.height,true);this.__zW();},_deferredUpdateScrollPosition:function(){this.__iQ._updateScrollPosition=1;qx.ui.core.queue.Widget.add(this);},_updateScrollPosition:function(){var bY=this.getVisibleLayers();if(bY.length==0){this.__zW();return;};var cb=this.getBounds();if(!cb){return;};var ca={top:this.__zM,bottom:this.__zM+cb.height,left:this.__zN,right:this.__zN+cb.width};if(this.__zQ.top<=ca.top&&this.__zQ.bottom>=ca.bottom&&this.__zQ.left<=ca.left&&this.__zQ.right>=ca.right){this.__zR.setUserBounds((this.getPaddingLeft()||0)+(this.__zQ.left-ca.left),(this.getPaddingTop()||0)+(this.__zQ.top-ca.top),this.__zQ.right-this.__zQ.left,this.__zQ.bottom-this.__zQ.top);}else {this._setLayerWindow(bY,this.__zN,this.__zM,cb.width,cb.height,false);};this.__zW();}},destruct:function(){this._disposeArray(o);this._disposeObjects(s,v,r);this.__zQ=this.__iQ=this.__ox=this.__zJ=null;}});})();(function(){var a="qx.data.controller.ISelection";qx.Interface.define(a,{members:{setSelection:function(b){},getSelection:function(){},resetSelection:function(){}}});})();(function(){var a="qx.ui.virtual.cell.IWidgetCell";qx.Interface.define(a,{members:{getCellWidget:function(c,b){},pool:function(d){},updateStates:function(f,e){},updateData:function(g,h){}}});})();(function(){var a="created",b="qx.ui.virtual.cell.AbstractWidget",c="cell.states",d="abstract method call",e="qx.event.type.Data";qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);this.__cM=[];},events:{"created":e},members:{__cM:null,_createWidget:function(){throw new Error(d);},updateData:function(f,g){throw new Error(d);},updateStates:function(j,h){var k=j.getUserData(c);if(k){var i=h||{};for(var l in k){if(!i[l]){j.removeState(l);};};}else {k={};};if(h){for(var l in h){if(!k.state){j.addState(l);};};};j.setUserData(c,h);},getCellWidget:function(o,m){var n=this.__Ao();this.updateStates(n,m);this.updateData(n,o);return n;},pool:function(p){this.__cM.push(p);},_cleanupPool:function(){var q=this.__cM.pop();while(q){q.destroy();q=this.__cM.pop();};},__Ao:function(){var r=this.__cM.pop();if(r==null){r=this._createWidget();this.fireDataEvent(a,r);};return r;}},destruct:function(){this._cleanupPool();this.__cM=null;}});})();(function(){var a="one",b="Boolean",c="qx.ui.virtual.selection.MModel",d="qx.data.Array",f="multi",g="selected",h="_applySelection",j="change",k="_applyDragSelection",l="single",m="_applyQuickSelection",n="changeSelection",o="_applySelectionMode",p="additive",q="qx.event.type.Data";qx.Mixin.define(c,{construct:function(){this._initSelectionManager();this.__Aa=new qx.data.Array();this.initSelection(this.__Aa);},properties:{selection:{check:d,event:n,apply:h,nullable:false,deferredInit:true},selectionMode:{check:[l,f,p,a],init:l,apply:o},dragSelection:{check:b,init:false,apply:k},quickSelection:{check:b,init:false,apply:m}},events:{"changeSelection":q},members:{_manager:null,__Ar:false,__Az:false,__Aa:null,_initSelectionManager:function(){var self=this;var r={isItemSelectable:function(s){return self._provider.isSelectable(s);},styleSelectable:function(t,u,v){if(u!=g){return;};if(v){self._provider.styleSelectabled(t);}else {self._provider.styleUnselectabled(t);};}};this._manager=new qx.ui.virtual.selection.Row(this.getPane(),r);this._manager.attachMouseEvents(this.getPane());this._manager.attachKeyEvents(this);this._manager.addListener(n,this._onManagerChangeSelection,this);},_updateSelection:function(){if(this._manager==null){return;};this._onChangeSelection();},_applySelection:function(x,w){x.addListener(j,this._onChangeSelection,this);if(w!=null){w.removeListener(j,this._onChangeSelection,this);};this._onChangeSelection();},_applySelectionMode:function(z,y){this._manager.setMode(z);},_applyDragSelection:function(B,A){this._manager.setDrag(B);},_applyQuickSelection:function(D,C){this._manager.setQuick(D);},_onChangeSelection:function(e){if(this.__Az==true){return;};this.__Ar=true;var F=this.getSelection();var H=[];for(var i=0;i<F.getLength();i++ ){var G=F.getItem(i);var I=this._getSelectables();var E=-1;if(I!=null){E=I.indexOf(G);};var J=this._reverseLookup(E);if(J>=0){H.push(J);};};if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(H);};try{if(!qx.lang.Array.equals(H,this._manager.getSelection())){this._manager.replaceSelection(H);};}catch(K){this._manager.selectItem(H[H.length-1]);};this.__Af();if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();};this.__Ar=false;},_onManagerChangeSelection:function(e){if(this.__Ar==true){return;};this.__Az=true;this.__Af();this.__Az=false;},__Af:function(){if(this.__AB()){return;};var L=this._manager.getSelection();var M=[];for(var i=0;i<L.length;i++ ){var N=this._getDataFromRow(L[i]);if(N!=null){M.push(N);};};this.__AA(M);},__AA:function(Q){var P=this.getSelection();if(Q.length>0){var O=[0,P.getLength()];O=O.concat(Q);var R=P.splice.apply(P,O);R.dispose();}else {P.removeAll();};},__AB:function(){var T=this.getSelection();var V=this._manager.getSelection();if(T.getLength()!==V.length){return false;};for(var i=0;i<T.getLength();i++ ){var U=T.getItem(i);var W=this._getSelectables();var S=-1;if(W!=null){S=W.indexOf(U);};var X=this._reverseLookup(S);if(X!==V[i]){return false;};};return true;},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();};}},destruct:function(){this._manager.dispose();this._manager=null;if(this.__Aa){this.__Aa.dispose();};}});})();(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";qx.Interface.define(a,{members:{getCellWidget:function(c,b){},poolCellWidget:function(d){}}});})();(function(){var c="change",d="qx.event.type.Event",e="qx.ui.virtual.core.Axis";qx.Class.define(e,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);this.itemCount=g;this.defaultItemSize=f;this.customSizes={};},events:{"change":d},members:{__Au:null,getDefaultItemSize:function(){return this.defaultItemSize;},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;this.__Au=null;this.fireNonBubblingEvent(c);};},getItemCount:function(){return this.itemCount;},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;this.__Au=null;this.fireNonBubblingEvent(c);};},setItemSize:function(k,l){{};if(this.customSizes[k]==l){return;};if(l===null){delete this.customSizes[k];}else {this.customSizes[k]=l;};this.__Au=null;this.fireNonBubblingEvent(c);},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;},resetItemSizes:function(){this.customSizes={};this.__Au=null;this.fireNonBubblingEvent(c);},__Av:function(){if(this.__Au){return this.__Au;};var q=this.defaultItemSize;var o=this.itemCount;var w=[];for(var t in this.customSizes){var n=parseInt(t,10);if(n<o){w.push(n);};};if(w.length==0){var s=[{startIndex:0,endIndex:o-1,firstItemSize:q,rangeStart:0,rangeEnd:o*q-1}];this.__Au=s;return s;};w.sort(function(a,b){return a>b?1:-1;});var s=[];var p=0;for(var i=0;i<w.length;i++ ){var n=w[i];if(n>=o){break;};var v=this.customSizes[n];var r=n*q+p;p+=v-q;s[i]={startIndex:n,firstItemSize:v,rangeStart:r};if(i>0){s[i-1].rangeEnd=r-1;s[i-1].endIndex=n-1;};};if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:q,rangeStart:0,rangeEnd:s[0].rangeStart-1});};var x=s[s.length-1];var u=(o-x.startIndex-1)*q;x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;x.endIndex=o-1;this.__Au=s;return s;},__Aw:function(D){var z=this.__Au||this.__Av();var A=0;var y=z.length-1;while(true){var C=A+((y-A)>>1);var B=z[C];if(B.rangeEnd<D){A=C+1;}else if(B.rangeStart>D){y=C-1;}else {return B;};};},getItemAtPosition:function(I){if(I<0||I>=this.getTotalSize()){return null;};var H=this.__Aw(I);var J=H.rangeStart;var E=H.startIndex;var G=H.firstItemSize;if(J+G>I){return {index:E,offset:I-J};}else {var F=this.defaultItemSize;return {index:E+1+Math.floor((I-J-G)/F),offset:(I-J-G)%F};};},__Ax:function(K){var M=this.__Au||this.__Av();var N=0;var L=M.length-1;while(true){var P=N+((L-N)>>1);var O=M[P];if(O.endIndex<K){N=P+1;}else if(O.startIndex>K){L=P-1;}else {return O;};};},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;};var R=this.__Ax(Q);if(R.startIndex==Q){return R.rangeStart;}else {return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;};},getTotalSize:function(){var S=this.__Au||this.__Av();return S[S.length-1].rangeEnd+1;},getItemSizes:function(Y,T){var X=this.customSizes;var W=this.defaultItemSize;var V=0;var U=[];var i=0;while(V<T){var ba=X[Y++ ]||W;V+=ba;U[i++ ]=ba;if(Y>=this.itemCount){break;};};return U;}},destruct:function(){this.customSizes=this.__Au=null;}});})();(function(){var a="qx.util.Delegate";qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);};return null;},containsMethod:function(e,f){var d=qx.lang.Type;if(d.isObject(e)){return d.isFunction(e[f]);};return false;}}});})();(function(){var a="_applyDelegate",b="qx.ui.virtual.cell.WidgetCell",c="Can't update data! The key '",d="' is not a Property!";qx.Class.define(b,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:a,init:null,nullable:true}},members:{_applyDelegate:function(f,e){this._cleanupPool();},_createWidget:function(){var g=this.getDelegate();if(g!=null&&g.createWidget!=null){return g.createWidget();}else {return new qx.ui.core.Widget();};},updateData:function(h,i){for(var j in i){if(qx.Class.hasProperty(h.constructor,j)){qx.util.PropertyUtil.setUserValue(h,j,i[j]);}else {throw new Error(c+j+d);};};}}});})();(function(){var a="qx.ui.virtual.core.CellEvent",b="Integer";qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,c,f,d){c.clone(this);this.setBubbles(false);this.setRow(f);this.setColumn(d);}}});})();
});