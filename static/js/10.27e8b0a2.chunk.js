(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[10],{101:function(e,t,n){"use strict";var r=n(7),a=n(0),o=n.n(a),i=n(92),c=n(93),l=n(94),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);u.Container=i.a,u.Content=c.a,u.Pane=l.a,t.a=u},102:function(e,t,n){"use strict";var r=n(80),a=n(0),o=n.n(a),i=n(1),c=n(2),l=(n(57),n(14)),u=n(33),s=n(32),d=n(31),f=n(92),m=n(93),b=n(94),v=n(91);function E(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,i=t.tabClassName;return null==n?null:o.a.createElement(d.a,{as:s.a,eventKey:r,disabled:a,className:i},n)}var p=o.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),r=n.id,a=n.onSelect,s=n.transition,d=n.mountOnEnter,p=n.unmountOnExit,O=n.children,y=n.activeKey,g=void 0===y?function(e){var t;return Object(v.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(O):y,h=Object(c.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(f.a,{ref:t,id:r,activeKey:g,onSelect:a,transition:s,mountOnEnter:d,unmountOnExit:p},o.a.createElement(u.a,Object(i.a)({},h,{role:"tablist",as:"nav"}),Object(v.b)(O,E)),o.a.createElement(m.a,null,Object(v.b)(O,(function(e){var t=Object(i.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(b.a,t)}))))}));p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs";var O=p,y=n(81);t.a=function(e){var t=Object(a.useState)(),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(y.a)(e.id,(function(e){e&&c(e.activeKey)}),(function(){return{activeKey:i}})),o.a.createElement(O,{activeKey:i,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){c(e)}},e.children)}},137:function(e,t,n){},183:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(101),i=n(102);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=n(80),u=n(85),s=n(88),d=n(90),f=n(87),m=n(81),b=n(20),v=n(1),E=n(2),p=n(13),O=n.n(p),y={id:O.a.any,href:O.a.string,onClick:O.a.func,title:O.a.node.isRequired,disabled:O.a.bool,menuRole:O.a.string,rootCloseEvent:O.a.string,bsPrefix:O.a.string,variant:O.a.string,size:O.a.string},g=a.a.forwardRef((function(e,t){var n=e.title,r=e.children,o=e.bsPrefix,i=e.rootCloseEvent,c=e.variant,l=e.size,u=e.menuRole,s=e.disabled,d=e.href,f=e.id,m=Object(E.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","disabled","href","id"]);return a.a.createElement(b.a,Object(v.a)({ref:t},m),a.a.createElement(b.a.Toggle,{id:f,href:d,size:l,variant:c,disabled:s,childBsPrefix:o},n),a.a.createElement(b.a.Menu,{role:u,rootCloseEvent:i},r))}));g.displayName="DropdownButton",g.propTypes=y;var h=g;var x=function(e){return a.a.createElement(h,{title:e.title,key:e.index,id:"color-select-".concat(e.index),onSelect:function(t){var n=e.onChange;n&&n(e.index,function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=u.Resistor.colorTable[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(e===i.name)return i}}catch(c){n=!0,r=c}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}(t))}},e.colors.map((function(t,n){return a.a.createElement(b.a.Item,{key:"".concat(e.index,"-").concat(n),eventKey:t.name},t.name)})))};n(137);var j=function(e){function t(t){return t===e.bands.length-1?104:18*t+20}function n(n){var r=e.bands[n];if(null!==r)return a.a.createElement("use",{xlinkHref:"#Band",x:t(n),fill:r.colorCode})}return a.a.createElement("div",{className:"ResistorPicture"},a.a.createElement("svg",{width:"240",viewBox:"0 0 136 40"},a.a.createElement("defs",null,a.a.createElement("g",{id:"Wire"},a.a.createElement("rect",{y:"20",height:"1",width:"8",fill:"black"})),a.a.createElement("g",{id:"Resistor"},a.a.createElement("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),a.a.createElement("use",{xlinkHref:"#Wire",x:"0"}),a.a.createElement("use",{xlinkHref:"#Wire",x:"128"})),a.a.createElement("g",{id:"Band"},a.a.createElement("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"}))),a.a.createElement("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),n(0),n(1),n(2),n(3),n(4),"Sorry, your browser does not support inline SVG."))};function N(e){var t=e.slice(0,-1).filter((function(e){return null!==e})),n=u.Resistor.getValue(t);return n===u.Resistor.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(u.Resistor.getDisplayValue(n)," \u2126 \xb1 ").concat(e[e.length-1].toleranceInPercent,"%")}var w=function(){var e=[u.Resistor.BLACK,u.Resistor.BLACK,u.Resistor.BLACK,null,u.Resistor.BROWN],t=Object(r.useState)(N(e)),n=Object(l.a)(t,2),o=n[0],i=n[1],b=Object(r.useState)(e),v=Object(l.a)(b,2),E=v[0],p=v[1];function O(e){p(e),i(N(e))}function y(e,t){var n=Array.from(E);n[e]=t||null,O(n)}Object(m.a)("ResistorInput",(function(e){e&&O(e.bands)}),(function(){return{bands:E}}));var g=u.Resistor.colorTable.filter((function(e){return e.hasValue()})),h=u.Resistor.colorTable.filter((function(e){return e.hasTolerance()}));return a.a.createElement("div",{className:"ResistorInput"},a.a.createElement(f.a,{className:"ResistorInput-input"},a.a.createElement(f.a.Header,null,"Input"),a.a.createElement(f.a.Body,null,a.a.createElement("div",{className:"ResistorInput-display"},a.a.createElement(j,{bands:E})),a.a.createElement("div",{className:"ResistorSelectors"},a.a.createElement(d.a,null,a.a.createElement(s.a,null,a.a.createElement(x,{index:0,title:"First Band",colors:g,onChange:y})),a.a.createElement(s.a,null,a.a.createElement(x,{index:1,title:"Second Band",colors:g,onChange:y})),a.a.createElement(s.a,null,a.a.createElement(x,{index:2,title:"Third Band",colors:u.Resistor.colorTable,onChange:y})),a.a.createElement(s.a,null,a.a.createElement(x,{index:3,title:"Fourth Band",colors:[new u.ResistorColorEntry("None","",0)].concat(c(u.Resistor.colorTable)),onChange:y})),a.a.createElement(s.a,null,a.a.createElement(x,{index:4,title:"Tolerance Band",colors:h,onChange:y})))))),a.a.createElement(f.a,{className:"ResistorInput-output"},a.a.createElement(f.a.Header,null,"Output"),a.a.createElement(f.a.Body,null,o)))},R=n(89);function C(e){var t=e.substring(1),n=parseInt(t,16);return.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(255&n)<40?"#ffffff":"#000000"}n(183);function I(e){return{backgroundColor:e.colorCode,color:C(e.colorCode)}}var P=function(){return a.a.createElement("div",{className:"ResistorTable"},a.a.createElement(R.a,{striped:!0,responsive:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Color"),a.a.createElement("th",null,"Value"),a.a.createElement("th",null,"Multiplier"),a.a.createElement("th",null,"Tolerance (%)"))),a.a.createElement("tbody",null,u.Resistor.colorTable.map((function(e){return a.a.createElement("tr",{key:e.name},a.a.createElement("td",{style:I(e)},e.name),a.a.createElement("td",null,e.getDisplayValue()),a.a.createElement("td",null,e.multiplier),a.a.createElement("td",null,e.toleranceInPercent))})))))};t.default=function(){return a.a.createElement(i.a,{id:"Resistors-tabs"},a.a.createElement(o.a,{eventKey:1,title:"Value"},a.a.createElement(w,null)),a.a.createElement(o.a,{eventKey:2,title:"Reference"},a.a.createElement(P,null)))}},80:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(83);function o(e,t,n){Object(r.useLayoutEffect)((function(){return t(Object(a.b)(e))}),[e]),Object(r.useEffect)((function(){return Object(a.c)(e,n())}))}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="1.0.0"},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var r,a=n(84),o=n.n(a),i=n(82);function c(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==o()(t,e)}catch(n){}return!0})(function(e){if(u())return window.localStorage.getItem(c(e));return null}("appVersion"),i.a)&&(f(),e="appVersion",t=i.a,u()&&window.localStorage.setItem(c(e),t))}function u(){if(void 0===r){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),r=!0}catch(n){r=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}r&&l()}return r}function s(e){if(u()){var t=window.localStorage.getItem(c(e));if(null!==t)return JSON.parse(t)}return null}function d(e,t){u()&&window.localStorage.setItem(c(e),JSON.stringify(t))}function f(){u()&&window.localStorage.clear()}},84:function(e,t,n){var r,a,o;a=[],void 0===(o="function"===typeof(r=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,r=e.replace(/^v/,"").replace(/\+.*$/,""),a=(n="-",-1===(t=r).indexOf(n)?t.length:t.indexOf(n)),o=r.substring(0,a).split(".");return o.push(r.substring(a+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function r(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function a(e,a){[e,a].forEach(r);for(var o=t(e),i=t(a),c=0;c<Math.max(o.length-1,i.length-1);c++){var l=parseInt(o[c]||0,10),u=parseInt(i[c]||0,10);if(l>u)return 1;if(u>l)return-1}var s=o[o.length-1],d=i[i.length-1];if(s&&d){var f=s.split(".").map(n),m=d.split(".").map(n);for(c=0;c<Math.max(f.length,m.length);c++){if(void 0===f[c]||"string"===typeof m[c]&&"number"===typeof f[c])return-1;if(void 0===m[c]||"string"===typeof f[c]&&"number"===typeof m[c])return 1;if(f[c]>m[c])return 1;if(m[c]>f[c])return-1}}else if(s||d)return s?-1:1;return 0}var o=[">",">=","=","<","<="],i={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return a.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var r=a(e,t);return i[n].indexOf(r)>-1},a})?r.apply(t,a):r)||(e.exports=o)},86:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(3),c=n.n(i);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(r.a)({},t,{ref:n,className:c()(t.className,e)}))}))}},87:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=n(26),d=n(86),f=n(42),m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.variant,s=e.as,d=void 0===s?"img":s,f=Object(a.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.a)(n,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:i()(c?m+"-"+c:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,v=Object(d.a)("h5"),E=Object(d.a)("h6"),p=Object(s.a)("card-body"),O=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,d=e.text,m=e.border,b=e.body,v=e.children,E=e.as,O=void 0===E?"div":E,y=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(u.a)(n,"card"),h=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(f.a.Provider,{value:h},l.a.createElement(O,Object(r.a)({ref:t},y,{className:i()(o,g,s&&"bg-"+s,d&&"text-"+d,m&&"border-"+m)}),b?l.a.createElement(p,null,v):v))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=b,O.Title=Object(s.a)("card-title",{Component:v}),O.Subtitle=Object(s.a)("card-subtitle",{Component:E}),O.Body=p,O.Link=Object(s.a)("card-link",{Component:"a"}),O.Text=Object(s.a)("card-text",{Component:"p"}),O.Header=Object(s.a)("card-header"),O.Footer=Object(s.a)("card-footer"),O.ImgOverlay=Object(s.a)("card-img-overlay");t.a=O},88:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,c=e.toggle,s=e.vertical,d=e.className,f=e.as,m=void 0===f?"div":f,b=Object(a.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(u.a)(n,"btn-group"),E=v;return s&&(E=v+"-vertical"),l.a.createElement(m,Object(r.a)({},b,{ref:t,className:i()(d,E,o&&v+"-"+o,c&&v+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=s},89:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.striped,s=e.bordered,d=e.borderless,f=e.hover,m=e.size,b=e.variant,v=e.responsive,E=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(u.a)(n,"table"),O=i()(o,p,b&&p+"-"+b,m&&p+"-"+m,c&&p+"-striped",s&&p+"-bordered",d&&p+"-borderless",f&&p+"-hover"),y=l.a.createElement("table",Object(r.a)({},E,{className:O,ref:t}));if(v){var g=p+"-responsive";return"string"===typeof v&&(g=g+"-"+v),l.a.createElement("div",{className:g},y)}return y}));t.a=s},90:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=Object(a.a)(e,["bsPrefix","className"]),s=Object(u.a)(n,"btn-toolbar");return l.a.createElement("div",Object(r.a)({},c,{ref:t,className:i()(o,s)}))}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.a=s},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function o(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}function i(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}},92:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(14),i=n(43),c=n(6);t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,f=t.mountOnEnter,m=t.unmountOnExit,b=t.children,v=Object(r.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),E=Object(r.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:f,unmountOnExit:m,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[u,s,d,f,m,v]);return a.a.createElement(i.a.Provider,{value:E},a.a.createElement(c.a.Provider,{value:u},b))}},93:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,c=void 0===o?"div":o,s=e.className,d=Object(a.a)(e,["bsPrefix","as","className"]),f=Object(u.a)(n,"tab-content");return l.a.createElement(c,Object(r.a)({ref:t},d,{className:i()(s,f)}))}));t.a=s},94:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(3),i=n.n(o),c=n(0),l=n.n(c),u=n(4),s=n(43),d=n(6),f=n(96);var m=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,i=t.getControllerId,l=Object(a.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==l.transition,m=Object(d.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=m?Object(d.b)(n)===m:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:u&&(e.transition||l.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),o=n.bsPrefix,m=n.className,b=n.active,v=n.onEnter,E=n.onEntering,p=n.onEntered,O=n.onExit,y=n.onExiting,g=n.onExited,h=n.mountOnEnter,x=n.unmountOnExit,j=n.transition,N=n.as,w=void 0===N?"div":N,R=(n.eventKey,Object(a.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),C=Object(u.a)(o,"tab-pane");if(!b&&x)return null;var I=l.a.createElement(w,Object(r.a)({},R,{ref:t,role:"tabpanel","aria-hidden":!b,className:i()(m,C,{active:b})}));return j&&(I=l.a.createElement(j,{in:b,onEnter:v,onEntering:E,onEntered:p,onExit:O,onExiting:y,onExited:g,mountOnEnter:h,unmountOnExit:x},I)),l.a.createElement(s.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},I))}));m.displayName="TabPane",t.a=m},96:function(e,t,n){"use strict";var r,a=n(1),o=n(2),i=n(3),c=n.n(i),l=n(44),u=n(0),s=n.n(u),d=n(22),f=n(45),m=((r={})[d.b]="show",r[d.a]="show",r),b=s.a.forwardRef((function(e,t){var n=e.className,r=e.children,i=Object(o.a)(e,["className","children"]),b=Object(u.useCallback)((function(e){Object(f.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return s.a.createElement(d.e,Object(a.a)({ref:t,addEndListener:l.a},i,{onEnter:b}),(function(e,t){return s.a.cloneElement(r,Object(a.a)({},t,{className:c()("fade",n,r.props.className,m[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b}}]);
//# sourceMappingURL=10.27e8b0a2.chunk.js.map