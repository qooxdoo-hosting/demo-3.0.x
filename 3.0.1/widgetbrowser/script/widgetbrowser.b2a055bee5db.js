qx.$$packageData['16']={"locales":{},"resources":{"widgetbrowser/people.json":"widgetbrowser"},"translations":{"en":{}}};
qx.Part.$$notifyLoad("16", function() {
(function(){var c="widgetbrowser/people.json",d="List",e="List (virtual, grouped)",f="",g="List (virtual)",h="model",i="no model...",j="model.people",k="json",l="widgetbrowser.pages.List",m="success",n=", ",o="firstname";qx.Class.define(l,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.__mN=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));this.__Od=qx.util.ResourceManager.getInstance().toUri(c);this.add(this.__mN);this.initWidgets();},members:{__mN:null,__Od:null,initWidgets:function(){var p=this._widgets;var t=new qx.ui.basic.Label(d);this.__mN.add(t,{row:0,column:0});var r=this.__Oe();this.__mN.add(r,{row:1,column:0});p.push(r);t=new qx.ui.basic.Label(g);this.__mN.add(t,{row:0,column:1});var q=this.__Of();this.__mN.add(q,{row:1,column:1});p.push(q);t=new qx.ui.basic.Label(e);this.__mN.add(t,{row:0,column:2});var s=this.__Og();this.__mN.add(s,{row:1,column:2});p.push(s);},__Oe:function(){var v=new qx.ui.form.List();v.setWidth(150);var u=new qx.io.request.Xhr(this.__Od);u.setParser(k);u.addListener(m,function(){var w=u.getResponse().people;w.forEach(function(x){var y=new qx.ui.form.ListItem(f+x.lastname+n+x.firstname);y.setHeight(25);v.add(y);});});u.send();return v;},__Of:function(){var z=new qx.ui.list.List().set({height:280,width:150,labelPath:o,labelOptions:{converter:function(B,A){return A?A.getLastname()+n+B:i;}}});this.__Oh(z);return z;},__Og:function(){var C=this.__Of();var D={sorter:function(a,b){a=a.getLastname();b=b.getLastname();return a>b?1:a<b?-1:0;},group:function(E){return E.getLastname().charAt(0).toUpperCase();}};C.setDelegate(D);return C;},__Oh:function(F){var G=new qx.data.store.Json(this.__Od);G.bind(j,F,h);}}});})();
});