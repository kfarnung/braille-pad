(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[13],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(110);function i(e,t,n){Object(a.useLayoutEffect)(()=>t(Object(r.b)(e)),[e]),Object(a.useEffect)(()=>Object(r.c)(e,n()))}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a="1.0.0"},110:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var a=n(111),r=n.n(a),i=n(108);let o;function c(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==r()(t,e)}catch(n){}return!0})(function(e){if(u())return window.localStorage.getItem(c(e));return null}("appVersion"),i.a)&&(f(),e="appVersion",t=i.a,u()&&window.localStorage.setItem(c(e),t))}function u(){if(void 0===o){const t=window.localStorage,n="__storage_test__";try{t.setItem(n,n),t.removeItem(n),o=!0}catch(e){o=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}o&&l()}return o}function s(e){if(u()){const t=window.localStorage.getItem(c(e));if(null!==t)return JSON.parse(t)}return null}function d(e,t){u()&&window.localStorage.setItem(c(e),JSON.stringify(t))}function f(){u()&&window.localStorage.clear()}},111:function(e,t,n){var a,r,i;r=[],void 0===(i="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),i=a.substring(0,r).split(".");return i.push(a.substring(r+1)),i}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var i=t(e),o=t(r),c=0;c<Math.max(i.length-1,o.length-1);c++){var l=parseInt(i[c]||0,10),u=parseInt(o[c]||0,10);if(l>u)return 1;if(u>l)return-1}var s=i[i.length-1],d=o[o.length-1];if(s&&d){var f=s.split(".").map(n),m=d.split(".").map(n);for(c=0;c<Math.max(f.length,m.length);c++){if(void 0===f[c]||"string"===typeof m[c]&&"number"===typeof f[c])return-1;if(void 0===m[c]||"string"===typeof f[c]&&"number"===typeof m[c])return 1;if(f[c]>m[c])return 1;if(m[c]>f[c])return-1}}else if(s||d)return s?-1:1;return 0}var i=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.validate=function(t){return"string"===typeof t&&e.test(t)},r.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===i.indexOf(e))throw new TypeError("Invalid operator, expected one of "+i.join("|"))}(n);var a=r(e,t);return o[n].indexOf(a)>-1},r})?a.apply(t,r):a)||(e.exports=i)},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function i(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function o(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}},117:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(4),o=n.n(i),c=n(0),l=n.n(c),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.striped,s=e.bordered,d=e.borderless,f=e.hover,m=e.size,v=e.variant,E=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(u.a)(n,"table"),O=o()(i,p,v&&p+"-"+v,m&&p+"-"+m,c&&p+"-striped",s&&p+"-bordered",d&&p+"-borderless",f&&p+"-hover"),h=l.a.createElement("table",Object(a.a)({},b,{className:O,ref:t}));if(E){var y=p+"-responsive";return"string"===typeof E&&(y=y+"-"+E),l.a.createElement("div",{className:y},h)}return h}));t.a=s},118:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(23),o=n(58),c=n(9);t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,f=t.mountOnEnter,m=t.unmountOnExit,v=t.children,E=Object(a.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),b=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:f,unmountOnExit:m,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[u,s,d,f,m,E]);return r.a.createElement(o.a.Provider,{value:b},r.a.createElement(c.a.Provider,{value:u},v))}},119:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(4),o=n.n(i),c=n(0),l=n.n(c),u=n(5),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,c=void 0===i?"div":i,s=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),f=Object(u.a)(n,"tab-content");return l.a.createElement(c,Object(a.a)({ref:t},d,{className:o()(s,f)}))}));t.a=s},120:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(4),o=n.n(i),c=n(0),l=n.n(c),u=n(5),s=n(58),d=n(9),f=n(122);var m=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(s.a);if(!t)return e;var n=t.activeKey,i=t.getControlledId,o=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==l.transition,m=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=m?Object(d.b)(n)===m:e.active,id:i(e.eventKey),"aria-labelledby":o(e.eventKey),transition:u&&(e.transition||l.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),i=n.bsPrefix,m=n.className,v=n.active,E=n.onEnter,b=n.onEntering,p=n.onEntered,O=n.onExit,h=n.onExiting,y=n.onExited,g=n.mountOnEnter,x=n.unmountOnExit,j=n.transition,w=n.as,C=void 0===w?"div":w,N=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),K=Object(u.a)(i,"tab-pane");if(!v&&!j&&x)return null;var I=l.a.createElement(C,Object(a.a)({},N,{ref:t,role:"tabpanel","aria-hidden":!v,className:o()(m,K,{active:v})}));return j&&(I=l.a.createElement(j,{in:v,onEnter:E,onEntering:b,onEntered:p,onExit:O,onExiting:h,onExited:y,mountOnEnter:g,unmountOnExit:x},I)),l.a.createElement(s.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},I))}));m.displayName="TabPane",t.a=m},122:function(e,t,n){"use strict";var a,r=n(1),i=n(3),o=n(4),c=n.n(o),l=n(59),u=n(0),s=n.n(u),d=n(30),f=n(60),m=((a={})[d.b]="show",a[d.a]="show",a),v=s.a.forwardRef((function(e,t){var n=e.className,a=e.children,o=Object(i.a)(e,["className","children"]),v=Object(u.useCallback)((function(e){Object(f.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return s.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:l.a},o,{onEnter:v}),(function(e,t){return s.a.cloneElement(a,Object(r.a)({},t,{className:c()("fade",n,a.props.className,m[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},127:function(e,t,n){"use strict";var a=n(11),r=n(0),i=n.n(r),o=n(118),c=n(119),l=n(120),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);u.Container=o.a,u.Content=c.a,u.Pane=l.a,t.a=u},128:function(e,t,n){"use strict";var a=n(52),r=n(0),i=n.n(r),o=n(1),c=n(3),l=(n(77),n(23)),u=n(46),s=n(45),d=n(44),f=n(118),m=n(119),v=n(120),E=n(116);function b(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName;return null==n?null:i.a.createElement(d.a,{as:s.a,eventKey:a,disabled:r,className:o},n)}var p=i.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),a=n.id,r=n.onSelect,s=n.transition,d=n.mountOnEnter,p=n.unmountOnExit,O=n.children,h=n.activeKey,y=void 0===h?function(e){var t;return Object(E.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(O):h,g=Object(c.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.a.createElement(f.a,{ref:t,id:a,activeKey:y,onSelect:r,transition:s,mountOnEnter:d,unmountOnExit:p},i.a.createElement(u.a,Object(o.a)({},g,{role:"tablist",as:"nav"}),Object(E.b)(O,b)),i.a.createElement(m.a,null,Object(E.b)(O,(function(e){var t=Object(o.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(v.a,t)}))))}));p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs";var O=p,h=n(107);t.a=function(e){const t=Object(r.useState)(),n=Object(a.a)(t,2),o=n[0],c=n[1];return Object(h.a)(e.id,e=>{e&&c(e.activeKey)},()=>({activeKey:o})),i.a.createElement(O,{activeKey:o,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){c(e)}},e.children)}},199:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(127),o=n(128),c=n(109),l=n(117);n(199);var u=function(e){return r.a.createElement("div",{className:"CharacterTable"},r.a.createElement(l.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Binary"),r.a.createElement("th",null,"Ternary"),r.a.createElement("th",null,"Octal"),r.a.createElement("th",null,"Decimal"),r.a.createElement("th",null,"Hexadecimal"))),r.a.createElement("tbody",null,e.data.map(e=>r.a.createElement("tr",{key:e.character},r.a.createElement("td",null,e.character),r.a.createElement("td",null,e.binary),r.a.createElement("td",null,e.ternary),r.a.createElement("td",null,e.octal),r.a.createElement("td",null,e.decimal),r.a.createElement("td",null,e.hexadecimal.toUpperCase()))))))};var s=function(){return r.a.createElement(u,{data:c.CharacterConversion.getAsciiTable()})};var d=function(){return r.a.createElement(u,{data:c.CharacterConversion.getOrdinalTable()})};t.default=function(){return r.a.createElement(o.a,{id:"CharacterEncodings-tabs"},r.a.createElement(i.a,{eventKey:1,title:"ASCII"},r.a.createElement(s,null)),r.a.createElement(i.a,{eventKey:2,title:"Ordinal"},r.a.createElement(d,null)))}}}]);
//# sourceMappingURL=13.095c89ac.chunk.js.map