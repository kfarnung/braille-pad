(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{194:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(25),c=n(33),o=n(31),s=n(32),l=n(1),d=n.n(l),i=n(181),u=n(94),b=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return d.a.createElement(u.a,{striped:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Letter"),d.a.createElement("th",null,"NATO Word"))),d.a.createElement("tbody",null,this.renderRows(i.NatoData.instance.entries)))}},{key:"renderRows",value:function(e){return e.map(function(e){return d.a.createElement("tr",{key:e.character},d.a.createElement("td",null,e.character),d.a.createElement("td",null,e.word))})}}]),t}(l.Component),p=(n(194),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"NatoTable"},d.a.createElement("div",{className:"NatoTable-content"},d.a.createElement(b,null)))}}]),t}(l.Component));t.default=p},94:function(e,t,n){"use strict";var r=n(3),a=n(4),c=n(6),o=n(5),s=n.n(o),l=n(1),d=n.n(l),i=n(0),u=n.n(i),b=n(2),p={striped:u.a.bool,bordered:u.a.bool,condensed:u.a.bool,hover:u.a.bool,responsive:u.a.bool},m=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.striped,c=t.bordered,o=t.condensed,l=t.hover,i=t.responsive,u=t.className,p=Object(a.a)(t,["striped","bordered","condensed","hover","responsive","className"]),m=Object(b.f)(p),O=m[0],j=m[1],h=Object(r.a)({},Object(b.d)(O),((e={})[Object(b.e)(O,"striped")]=n,e[Object(b.e)(O,"bordered")]=c,e[Object(b.e)(O,"condensed")]=o,e[Object(b.e)(O,"hover")]=l,e)),v=d.a.createElement("table",Object(r.a)({},j,{className:s()(u,h)}));return i?d.a.createElement("div",{className:Object(b.e)(O,"responsive")},v):v},t}(d.a.Component);m.propTypes=p,m.defaultProps={bordered:!1,condensed:!1,hover:!1,responsive:!1,striped:!1},t.a=Object(b.a)("table",m)}}]);
//# sourceMappingURL=10.dbe19cdb.chunk.js.map