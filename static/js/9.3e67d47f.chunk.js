(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,a){"use strict";var r=a(20),n=a(21),c=a(32),o=a(30),i=a(31),s=a(138),l=a.n(s),u=a(0),h=a(134),p=a(135),f=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var n=h.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(n,p.a)&&(h.a.clear(),h.a.setObject(a.VERSION_STORAGE_KEY,p.a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===l()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){h.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(h.a.getObject(this.getLocalStorageKey()))}}]),t}(u.Component);t.a=f},134:function(e,t,a){"use strict";var r=a(20),n=a(21),c=function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();c._isSupported=void 0,c._prefix="puzztool",t.a=c},135:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r="0.7.0"},137:function(e,t,a){"use strict";var r=a(30);function n(e,t,a){return(n="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(n){var c=Object.getOwnPropertyDescriptor(n,t);return c.get?c.get.call(a):c.value}})(e,t,a||e)}a.d(t,"a",function(){return n})},150:function(e,t,a){"use strict";var r=a(20),n=a(21),c=a(32),o=a(30),i=a(31),s=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e)))._activeKey=1,a.state={activeKey:a._activeKey},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(a(133).a);t.a=s},155:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),c=r(a(5)),o=r(a(8)),i=r(a(0)),s=a(9),l=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.fluid,l=e.as,u=void 0===l?"div":l,h=e.className,p=(0,c.default)(e,["bsPrefix","fluid","as","className"]),f=(0,s.useBootstrapPrefix)(a,"container");return i.default.createElement(u,(0,n.default)({ref:t},p,{className:(0,o.default)(h,r?f+"-fluid":f)}))});l.displayName="Container",l.defaultProps={fluid:!1};var u=l;t.default=u,e.exports=t.default},156:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),c=r(a(5)),o=r(a(19)),i=r(a(8)),s=r(a(0)),l=a(9),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.noGutters,r=e.as,o=void 0===r?"div":r,l=e.className,u=(0,c.default)(e,["bsPrefix","noGutters","as","className"]);return s.default.createElement(o,(0,n.default)({},u,{className:(0,i.default)(l,t,a&&"no-gutters")}))},t}(s.default.Component);u.defaultProps={noGutters:!1};var h=(0,l.createBootstrapComponent)(u,"row");t.default=h,e.exports=t.default},157:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),c=r(a(5)),o=r(a(8)),i=r(a(0)),s=a(9),l=["xl","lg","md","sm","xs"],u=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,u=e.as,h=void 0===u?"div":u,p=(0,c.default)(e,["bsPrefix","className","as"]),f=(0,s.useBootstrapPrefix)(a,"col"),m=[],d=[];return l.forEach(function(e){var t,a,r,n=p[e];if(delete p[e],null!=n&&"object"===typeof n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+f+o:""+f+o+"-"+t),null!=r&&d.push("order"+o+"-"+r),null!=a&&d.push("offset"+o+"-"+a)}),m.length||m.push(f),i.default.createElement(h,(0,n.default)({},p,{ref:t,className:o.default.apply(void 0,[r].concat(m,d))}))});u.displayName="Col";var h=u;t.default=h,e.exports=t.default},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),c=a(32),o=a(30),i=a(31),s=a(0),l=a.n(s),u=a(153),h=a.n(u),p=a(152),f=a.n(p),m=a(150),d=a(49),v=a(137),g=a(70),y=a.n(g),S=a(140),E=a.n(S),b=a(142),k=a.n(b),C=a(136),O=a.n(C),j=a(157),_=a.n(j),w=a(155),x=a.n(w),N=a(156),K=a.n(N),D=a(133),P=(a(244),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={character:e.character},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SemaphoreCheckbox ".concat(this.props.className)},l.a.createElement("input",{type:"checkbox",checked:this.state.character.hasDirection(this.props.direction),onChange:function(t){return e.onCheckboxChange(t)}}),l.a.createElement("label",null,this.getPotentialMatch()))}},{key:"getPotentialMatch",value:function(){var e=this.props.character.getPotentialMatch(this.props.direction);return e?e.toString():""}},{key:"onCheckboxChange",value:function(e){var t=e.target;this.props.onChange(t.checked?"add":"remove",this.props.direction)}}]),t}(s.Component));function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(s){n=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={left:-1,right:-1},a}return Object(i.a)(t,e),Object(n.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,a){var r=t.getFlagAngles(e.character);return{left:r.left,right:r.right}}},{key:"getFlagAngles",value:function(e){var t={left:-1,right:-1},a=R(e.getDegrees(),2),r=a[0],n=a[1];return void 0!==r&&(void 0===n?r<=180?t.right=r:t.left=r:0===r&&n<=180||r<=45&&n<180||n<=90||r>=270?(t.left=r,t.right=n):(t.right=r,t.left=n)),t}}]),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{width:this.props.width,viewBox:"0 0 76 64"},l.a.createElement("defs",null,l.a.createElement("g",{id:"Person",fill:"black"},l.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),l.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),l.a.createElement("g",{id:"Flag"},l.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),l.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),l.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),l.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),l.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),l.a.createElement("g",{id:"LeftFlag"},l.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),l.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),this.getLeftFlag(),this.getRightFlag(),"Sorry, your browser does not support inline SVG.")}},{key:"getLeftFlag",value:function(){return this.state.left>=0?l.a.createElement("use",{transform:"rotate(".concat(this.state.left,", 33, 32)"),x:"33",xlinkHref:0===this.state.left||this.state.left>=180?"#LeftFlag":"#Flag",y:"4"}):null}},{key:"getRightFlag",value:function(){return this.state.right>=0?l.a.createElement("use",{transform:"rotate(".concat(this.state.right,", 43, 32)"),x:"43",xlinkHref:this.state.right<=180?"#Flag":"#LeftFlag",y:"4"}):null}}]),t}(s.Component),F=a(132),M=(a(245),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"SemaphoreCharacter"},l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-north",direction:F.SemaphoreDirection.North,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-northEast",direction:F.SemaphoreDirection.NorthEast,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-east",direction:F.SemaphoreDirection.East,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-southEast",direction:F.SemaphoreDirection.SouthEast,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-south",direction:F.SemaphoreDirection.South,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-southWest",direction:F.SemaphoreDirection.SouthWest,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-west",direction:F.SemaphoreDirection.West,onChange:this.props.onChange}),l.a.createElement(P,{character:this.props.character,className:"SemaphoreCheckbox-northWest",direction:F.SemaphoreDirection.NorthWest,onChange:this.props.onChange}),l.a.createElement(I,{width:240,character:this.props.character}))}}]),t}(s.Component)),L=(a(246),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e)))._character=new F.SemaphoreCharacter,a._stream="",a.onKeyDown=a.onKeyDown.bind(Object(d.a)(a)),a.onKeyPress=a.onKeyPress.bind(Object(d.a)(a)),a.state={character:a._character,stream:""},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){Object(v.a)(Object(o.a)(t.prototype),"componentDidMount",this).call(this),document.addEventListener("keypress",this.onKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyPress)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SemaphoreStream"},l.a.createElement(O.a,{className:"SemaphoreStream-input"},l.a.createElement(O.a.Header,null,"Input"),l.a.createElement(O.a.Body,null,l.a.createElement(x.a,{fluid:!0},l.a.createElement(K.a,null,l.a.createElement(_.a,{xs:"auto",sm:"auto",md:"auto"},l.a.createElement(M,{character:this.state.character,onChange:function(t,a){return e.onCharacterChange(t,a)}})),l.a.createElement(_.a,null,l.a.createElement("div",{className:"SemaphoreStream-view"},this.state.character.toString()||"?"))),l.a.createElement(K.a,null,l.a.createElement(_.a,null,l.a.createElement(k.a,null,l.a.createElement(E.a,null,l.a.createElement(y.a,{onClick:function(){return e.onBackspaceClick()}},"\u232b")),l.a.createElement(E.a,null,l.a.createElement(y.a,{onClick:function(){return e.onNextClick()}},"Next")),l.a.createElement(E.a,null,l.a.createElement(y.a,{onClick:function(){return e.onClearClick()},variant:"danger"},"Clear")))))))),l.a.createElement(O.a,null,l.a.createElement(O.a.Header,null,"Output"),l.a.createElement(O.a.Body,null,l.a.createElement("pre",{className:"SemaphoreStream-output"},this.state.stream,l.a.createElement("span",{className:"blinking-cursor"},"|")))))}},{key:"getLocalStorageKey",value:function(){return"SemaphoreStream"}},{key:"onSaveState",value:function(){return{directions:this._character.directions,stream:this._stream}}},{key:"onRestoreState",value:function(e){null!==e&&(this._character.directions=e.directions,this._stream=e.stream)}},{key:"onUpdateState",value:function(){this.setState({character:this._character,stream:this._stream})}},{key:"onKeyDown",value:function(e){if(!e.defaultPrevented){var t=!1;8===e.keyCode&&(this.onBackspaceClick(),t=!0),t&&e.preventDefault()}}},{key:"onKeyPress",value:function(e){if(!e.defaultPrevented){var t=!1;if(13===e.keyCode)this.onNextClick(),t=!0;else if(e.charCode>=49&&e.charCode<=56){var a=F.SemaphoreDegrees.FromDegrees(45*(e.charCode-49));this.onCharacterChange(this._character.hasDirection(a)?"remove":"add",a)}t&&e.preventDefault()}}},{key:"onCharacterChange",value:function(e,t){switch(e){case"add":this._character.addDirection(t);break;case"remove":this._character.removeDirection(t);break;default:throw new Error("Invalid change type")}this.updateState()}},{key:"onNextClick",value:function(){var e=this._character.getExactMatches();e.length>0?(this._stream+=e[0].toString(),this._character.clear()):this._stream+=" ",this.updateState()}},{key:"onClearClick",value:function(){this._character.clear(),this._stream="",this.updateState()}},{key:"onBackspaceClick",value:function(){this._stream=this._stream.substring(0,this._stream.length-1),this.updateState()}}]),t}(D.a)),A=a(139),B=a.n(A),T=(a(247),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"SemaphoreTable"},l.a.createElement(B.a,{striped:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Character"),l.a.createElement("th",null,"Semaphore"))),l.a.createElement("tbody",null,this.renderRows())))}},{key:"renderRows",value:function(){return(new F.SemaphoreCharacter).getPotentialMatches().map(function(e){return l.a.createElement("tr",{key:e.display},l.a.createElement("td",null,e.display),l.a.createElement("td",null,l.a.createElement(I,{width:100,character:new F.SemaphoreCharacter(e.encoding,e.category)})))})}}]),t}(s.Component)),W=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Semaphore"},l.a.createElement("div",{className:"Semaphore-content"},l.a.createElement(f.a,{activeKey:this.state.activeKey,animation:!1,id:"Semaphore-tabs",onSelect:function(t){return e.onTabSelect(t)}},l.a.createElement(h.a,{eventKey:1,title:"Value"},l.a.createElement(L,null)),l.a.createElement(h.a,{eventKey:2,title:"Reference"},l.a.createElement(T,null)))))}},{key:"getLocalStorageKey",value:function(){return"Semaphore"}}]),t}(m.a);t.default=W}}]);
//# sourceMappingURL=9.3e67d47f.chunk.js.map