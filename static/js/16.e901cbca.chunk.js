(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[16],{164:function(e,t,n){"use strict";var a=n(19),r=n(20),i=n(31),c=n(30),o=n(129),u=n(32),s=n(0),l=n.n(s),h=n(67),p=n.n(h),y=n(132),v=n.n(y),d=n(134),m=n.n(d),f=n(128),k=n.n(f),b=n(139),_=n.n(b),C=n(156),E=n.n(C),g=n(163),O=n.n(g),j=n(125),x=(n(165),function(e){function t(e,n){var r;return Object(a.a)(this,t),(r=Object(i.a)(this,Object(c.a)(t).call(this,e)))._input=l.a.createRef(),r._cipher=void 0,r._conversion=2,r._cipher=n,r.state={conversion:0,key:"",output:"",text:""},r}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(o.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this);var e=this._input.current;e&&e.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"KeyedCipherStreamBase"},l.a.createElement(k.a,{className:"KeyedCipherStreamBase-input"},l.a.createElement(k.a.Header,null,this.props.prompt),l.a.createElement(k.a.Body,null,l.a.createElement(_.a,{onChange:function(t){return e.onTextChanged(t)},placeholder:"Text",ref:this._input,value:this.state.text}),l.a.createElement(_.a,{onChange:function(t){return e.onKeyChanged(t)},placeholder:"Key",value:this.state.key}),l.a.createElement(m.a,null,l.a.createElement(O.a,{name:"KeyedCipherStreamBase-conversion",onChange:function(t){return e.onConversionChanged(t)},type:"radio",value:this.state.conversion},l.a.createElement(E.a,{value:1},"Encrypt"),l.a.createElement(E.a,{value:2},"Decrypt")),l.a.createElement(v.a,null,l.a.createElement(p.a,{onClick:function(t){return e.onClearClick(t)},variant:"danger"},"Clear"))))),l.a.createElement(k.a,{className:"KeyedCipherStreamBase-output"},l.a.createElement(k.a.Header,null,"Output"),l.a.createElement(k.a.Body,null,l.a.createElement("pre",null,this.state.output||" "))))}},{key:"onSaveState",value:function(){return{conversion:this._conversion,key:this._cipher.key,text:this._cipher.text}}},{key:"onRestoreState",value:function(e){null!==e&&(this._cipher.text=e.text,this._cipher.key=e.key,this._conversion=e.conversion)}},{key:"onUpdateState",value:function(){this.setState({conversion:this._conversion,key:this._cipher.key,output:1===this._conversion?this._cipher.encrypt():this._cipher.decrypt(),text:this._cipher.text})}},{key:"onTextChanged",value:function(e){var t=e.target;this._cipher.text=t.value,this.updateState()}},{key:"onKeyChanged",value:function(e){var t=e.target;this._cipher.key=t.value,this.updateState()}},{key:"onConversionChanged",value:function(e){this._conversion=e,this.updateState()}},{key:"onClearClick",value:function(e){this._cipher.key="",this._cipher.text="",this._conversion=2,this.updateState()}}]),t}(j.a));t.a=x},165:function(e,t,n){},242:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(20),i=n(31),c=n(30),o=n(32),u=n(0),s=n.n(u),l=n(164),h=n(124),p=function(e){function t(e){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).call(this,e,new h.VigenereString))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"getLocalStorageKey",value:function(){return"VigenereStream"}}]),t}(l.a),y=(n(242),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Vigenere"},s.a.createElement("div",{className:"Vigenere-info"},s.a.createElement("h2",null,"Vigenere Cipher"),s.a.createElement("p",null,'A Vigenere cipher is a type of substitution cipher.  It shifts each letter by using a keyword. For example, a the keyword "ace" would shift the first letter by 1, second by 3, and third by 5.')),s.a.createElement(p,{prompt:"Enter the text you want to convert, and the keyword to shift the text by."}))}}]),t}(u.Component));t.default=y}}]);
//# sourceMappingURL=16.e901cbca.chunk.js.map