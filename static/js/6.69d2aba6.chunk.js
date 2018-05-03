webpackJsonp([6],{352:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,n=o(0),a=(o.n(n),o(397)),u=o(398),i=(o.n(u),this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)})),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return n.createElement("div",{className:"Autokey"},n.createElement("div",{className:"Autokey-content"},n.createElement(a.a,null)))},e}(n.Component);e.default=s},361:function(t,e,o){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Letter=2]="Letter",t[t.Number=4]="Number",t[t.Formatting=8]="Formatting",t[t.Punctuation=16]="Punctuation",t[t.All=255]="All"}(r||(r={})),e.default=r},362:function(t,e,o){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.LetterA=1]="LetterA",t[t.LetterB=3]="LetterB",t[t.LetterC=9]="LetterC",t[t.LetterD=25]="LetterD",t[t.LetterE=17]="LetterE",t[t.LetterF=11]="LetterF",t[t.LetterG=27]="LetterG",t[t.LetterH=19]="LetterH",t[t.LetterI=10]="LetterI",t[t.LetterJ=26]="LetterJ",t[t.LetterK=5]="LetterK",t[t.LetterL=7]="LetterL",t[t.LetterM=13]="LetterM",t[t.LetterN=29]="LetterN",t[t.LetterO=21]="LetterO",t[t.LetterP=15]="LetterP",t[t.LetterQ=31]="LetterQ",t[t.LetterR=23]="LetterR",t[t.LetterS=14]="LetterS",t[t.LetterT=30]="LetterT",t[t.LetterU=37]="LetterU",t[t.LetterV=39]="LetterV",t[t.LetterX=45]="LetterX",t[t.LetterY=61]="LetterY",t[t.LetterZ=53]="LetterZ",t[t.LetterW=58]="LetterW",t[t.Number1=1]="Number1",t[t.Number2=3]="Number2",t[t.Number3=9]="Number3",t[t.Number4=25]="Number4",t[t.Number5=17]="Number5",t[t.Number6=11]="Number6",t[t.Number7=27]="Number7",t[t.Number8=19]="Number8",t[t.Number9=10]="Number9",t[t.Number0=26]="Number0",t[t.FormattingNumber=60]="FormattingNumber",t[t.FormattingCapital=32]="FormattingCapital",t[t.PunctuationComma=2]="PunctuationComma",t[t.PunctuationSemicolon=6]="PunctuationSemicolon",t[t.PunctuationApostrophe=4]="PunctuationApostrophe",t[t.PunctuationColon=18]="PunctuationColon",t[t.PunctuationHyphen=36]="PunctuationHyphen",t[t.PunctuationDecimalPoint=40]="PunctuationDecimalPoint",t[t.PunctuationFullStop=50]="PunctuationFullStop",t[t.PunctuationExclamationPoint=22]="PunctuationExclamationPoint",t[t.PunctuationOpenQuote=38]="PunctuationOpenQuote",t[t.PunctuationQuestionMark=38]="PunctuationQuestionMark",t[t.PunctuationCloseQuote=52]="PunctuationCloseQuote",t[t.PunctuationBracket=54]="PunctuationBracket",t[t.PunctuationSlash=12]="PunctuationSlash"}(r||(r={})),e.default=r},363:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this._data=t,this._category=e,this.invalidateLookup()}return Object.defineProperty(t.prototype,"category",{get:function(){return this._category},set:function(t){this._category!==t&&(this._category=t,this.invalidateLookup())},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.onClear(),this.invalidateLookup()},t.prototype.empty=function(){return this.onEmpty()},t.prototype.getExactMatches=function(){return this.ensureLookup().exact},t.prototype.getPotentialMatches=function(){return this.ensureLookup().partial},t.prototype.toString=function(){return this.ensureLookup().exactString},t.prototype.valid=function(){return this.ensureLookup().exact.length>0},t.prototype.valueOf=function(){return this.getEncoding()},t.prototype.invalidateLookup=function(){this._lookup=null},t.prototype.ensureLookup=function(){return this._lookup||(this._lookup=this._data.lookup(this.getEncoding(),this._category)),this._lookup},t}();e.default=r},364:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(361),n=o(370),a=o(379),u=function(){function t(){this._entries=[]}return t.prototype.lookup=function(t,e){void 0===e&&(e=r.default.All);for(var o=new a.default,n=0,u=this._entries;n<u.length;n++){var i=u[n];0!==(i.category&e)&&(i.encoding===t?o.exact.push(i):(i.encoding&t)===t&&o.partial.push(i))}return o},t.prototype.addToList=function(t,e,o){this._entries.push(new n.default(t,e,o))},t}();e.default=u},365:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(371),n=function(){function t(){}return t.rotateLetter=function(t,e){if(1!==t.length)throw new Error("Expected a single character");(e%=this.alphaLength)<0&&(e+=this.alphaLength);var o=t.charCodeAt(0),r=0;if(this.isLowerAlpha(o))r=this.lowerA;else{if(!this.isUpperAlpha(o))return t;r=this.upperA}return String.fromCharCode((o-r+e)%this.alphaLength+r)},t.rotateLetterWithKey=function(t,e,o,n){if(void 0===n&&(n=!1),0===e.length)return t;var a=this.getCharacterWithMod(e,o),u=r.default.toOrdinal(a)-1;return n&&(u=-u),this.rotateLetter(t,u)},t.isAlpha=function(t){var e=t.charCodeAt(0);return this.isUpperAlpha(e)||this.isLowerAlpha(e)},t.getCharacterWithMod=function(t,e){return t.charAt(e%t.length)},t.isUpperAlpha=function(t){return t>=this.upperA&&t<=this.upperZ},t.isLowerAlpha=function(t){return t>=this.lowerA&&t<=this.lowerZ},t.upperA="A".charCodeAt(0),t.upperZ="Z".charCodeAt(0),t.lowerA="a".charCodeAt(0),t.lowerZ="z".charCodeAt(0),t.alphaLength=26,t}();e.default=n},366:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){void 0===t&&(t=""),void 0===e&&(e=""),this._text=t,this._key=e}return Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this._key},set:function(t){this._key=t},enumerable:!0,configurable:!0}),t.prototype.encrypt=function(){return this.convert(!1)},t.prototype.decrypt=function(){return this.convert(!0)},t}();e.default=r},367:function(t,e,o){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var o=n.None,r=0,a=0,u=t;a<u.length;a++){var i=u[a];o|=i<<=r,r+=2}return o}var n;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Dot=1]="Dot",t[t.Dash=2]="Dash",t[t.LetterA=r(t.Dot,t.Dash)]="LetterA",t[t.LetterB=r(t.Dash,t.Dot,t.Dot,t.Dot)]="LetterB",t[t.LetterC=r(t.Dash,t.Dot,t.Dash,t.Dot)]="LetterC",t[t.LetterD=r(t.Dash,t.Dot,t.Dot)]="LetterD",t[t.LetterE=r(t.Dot)]="LetterE",t[t.LetterF=r(t.Dot,t.Dot,t.Dash,t.Dot)]="LetterF",t[t.LetterG=r(t.Dash,t.Dash,t.Dot)]="LetterG",t[t.LetterH=r(t.Dot,t.Dot,t.Dot,t.Dot)]="LetterH",t[t.LetterI=r(t.Dot,t.Dot)]="LetterI",t[t.LetterJ=r(t.Dot,t.Dash,t.Dash,t.Dash)]="LetterJ",t[t.LetterK=r(t.Dash,t.Dot,t.Dash)]="LetterK",t[t.LetterL=r(t.Dot,t.Dash,t.Dot,t.Dot)]="LetterL",t[t.LetterM=r(t.Dash,t.Dash)]="LetterM",t[t.LetterN=r(t.Dash,t.Dot)]="LetterN",t[t.LetterO=r(t.Dash,t.Dash,t.Dash)]="LetterO",t[t.LetterP=r(t.Dot,t.Dash,t.Dash,t.Dot)]="LetterP",t[t.LetterQ=r(t.Dash,t.Dash,t.Dot,t.Dash)]="LetterQ",t[t.LetterR=r(t.Dot,t.Dash,t.Dot)]="LetterR",t[t.LetterS=r(t.Dot,t.Dot,t.Dot)]="LetterS",t[t.LetterT=r(t.Dash)]="LetterT",t[t.LetterU=r(t.Dot,t.Dot,t.Dash)]="LetterU",t[t.LetterV=r(t.Dot,t.Dot,t.Dot,t.Dash)]="LetterV",t[t.LetterW=r(t.Dot,t.Dash,t.Dash)]="LetterW",t[t.LetterX=r(t.Dash,t.Dot,t.Dot,t.Dash)]="LetterX",t[t.LetterY=r(t.Dash,t.Dot,t.Dash,t.Dash)]="LetterY",t[t.LetterZ=r(t.Dash,t.Dash,t.Dot,t.Dot)]="LetterZ",t[t.Number0=r(t.Dash,t.Dash,t.Dash,t.Dash,t.Dash)]="Number0",t[t.Number1=r(t.Dot,t.Dash,t.Dash,t.Dash,t.Dash)]="Number1",t[t.Number2=r(t.Dot,t.Dot,t.Dash,t.Dash,t.Dash)]="Number2",t[t.Number3=r(t.Dot,t.Dot,t.Dot,t.Dash,t.Dash)]="Number3",t[t.Number4=r(t.Dot,t.Dot,t.Dot,t.Dot,t.Dash)]="Number4",t[t.Number5=r(t.Dot,t.Dot,t.Dot,t.Dot,t.Dot)]="Number5",t[t.Number6=r(t.Dash,t.Dot,t.Dot,t.Dot,t.Dot)]="Number6",t[t.Number7=r(t.Dash,t.Dash,t.Dot,t.Dot,t.Dot)]="Number7",t[t.Number8=r(t.Dash,t.Dash,t.Dash,t.Dot,t.Dot)]="Number8",t[t.Number9=r(t.Dash,t.Dash,t.Dash,t.Dash,t.Dot)]="Number9",t[t.PunctuationPeriod=r(t.Dot,t.Dash,t.Dot,t.Dash,t.Dot,t.Dash)]="PunctuationPeriod",t[t.PunctuationComma=r(t.Dash,t.Dash,t.Dot,t.Dot,t.Dash,t.Dash)]="PunctuationComma",t[t.PunctuationQuestionMark=r(t.Dot,t.Dot,t.Dash,t.Dash,t.Dot,t.Dot)]="PunctuationQuestionMark",t[t.PunctuationApostrophe=r(t.Dot,t.Dash,t.Dash,t.Dash,t.Dash,t.Dot)]="PunctuationApostrophe",t[t.PunctuationExclamationPoint=r(t.Dash,t.Dot,t.Dash,t.Dot,t.Dash,t.Dash)]="PunctuationExclamationPoint",t[t.PunctuationForwardSlash=r(t.Dash,t.Dot,t.Dot,t.Dash,t.Dot)]="PunctuationForwardSlash",t[t.PunctuationOpenParenthesis=r(t.Dash,t.Dot,t.Dash,t.Dash,t.Dot)]="PunctuationOpenParenthesis",t[t.PunctuationCloseParenthesis=r(t.Dash,t.Dot,t.Dash,t.Dash,t.Dot,t.Dash)]="PunctuationCloseParenthesis",t[t.PunctuationAmpersand=r(t.Dot,t.Dash,t.Dot,t.Dot,t.Dot)]="PunctuationAmpersand",t[t.PunctuationColon=r(t.Dash,t.Dash,t.Dash,t.Dot,t.Dot,t.Dot)]="PunctuationColon",t[t.PunctuationSemicolon=r(t.Dash,t.Dot,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationSemicolon",t[t.PunctuationDoubleDash=r(t.Dash,t.Dot,t.Dot,t.Dot,t.Dash)]="PunctuationDoubleDash",t[t.PunctuationPlusSign=r(t.Dot,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationPlusSign",t[t.PunctuationHyphen=r(t.Dash,t.Dot,t.Dot,t.Dot,t.Dot,t.Dash)]="PunctuationHyphen",t[t.PunctuationUnderscore=r(t.Dot,t.Dot,t.Dash,t.Dash,t.Dot,t.Dash)]="PunctuationUnderscore",t[t.PunctuationQuotationMark=r(t.Dot,t.Dash,t.Dot,t.Dot,t.Dash,t.Dot)]="PunctuationQuotationMark",t[t.PunctuationDollarSign=r(t.Dot,t.Dot,t.Dot,t.Dash,t.Dot,t.Dot,t.Dash)]="PunctuationDollarSign",t[t.PunctuationAtSign=r(t.Dot,t.Dash,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationAtSign"}(n||(n={})),e.default=n},368:function(t,e,o){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.North=2]="North",t[t.NorthEast=4]="NorthEast",t[t.East=8]="East",t[t.SouthEast=16]="SouthEast",t[t.South=32]="South",t[t.SouthWest=64]="SouthWest",t[t.West=128]="West",t[t.NorthWest=256]="NorthWest"}(r||(r={})),e.default=r},369:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(364),i=o(362),s=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.FormattingNumber,a.default.Formatting,"#"),e.addToList(i.default.FormattingCapital,a.default.Formatting,"^"),e.addToList(i.default.PunctuationComma,a.default.Punctuation,","),e.addToList(i.default.PunctuationSemicolon,a.default.Punctuation,";"),e.addToList(i.default.PunctuationApostrophe,a.default.Punctuation,"'"),e.addToList(i.default.PunctuationColon,a.default.Punctuation,":"),e.addToList(i.default.PunctuationHyphen,a.default.Punctuation,"-"),e.addToList(i.default.PunctuationDecimalPoint,a.default.Punctuation,"."),e.addToList(i.default.PunctuationFullStop,a.default.Punctuation,"."),e.addToList(i.default.PunctuationExclamationPoint,a.default.Punctuation,"!"),e.addToList(i.default.PunctuationOpenQuote,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationQuestionMark,a.default.Punctuation,"?"),e.addToList(i.default.PunctuationCloseQuote,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationBracket,a.default.Punctuation,"("),e.addToList(i.default.PunctuationBracket,a.default.Punctuation,")"),e.addToList(i.default.PunctuationSlash,a.default.Punctuation,"/"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=s},370:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,o){this.encoding=t,this.category=e,this.display=o}return t.prototype.toString=function(){return this.display},t}();e.default=r},371:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(372),n=function(){function t(){}return t.getAsciiTable=function(){var e=[];return t.addAsciiRange(e,48,57,t.toAscii,127),t.addAsciiRange(e,65,90,t.toAscii,127),t.addAsciiRange(e,97,122,t.toAscii,127),e},t.getOrdinalTable=function(){var e=[];return t.addAsciiRange(e,65,90,t.toOrdinal,26),e},t.toAscii=function(t){if("string"!==typeof t||1!==t.length)throw new Error("A single character is required");var e=t.charCodeAt(0);return e>=0&&e<=127?e:-1},t.toOrdinal=function(t){if("string"!==typeof t||1!==t.length)throw new Error("A single character is required");var e=t.charCodeAt(0),o=e-"a".charCodeAt(0);return o>=0&&o<26?o+1:(o=e-"A".charCodeAt(0))>=0&&o<26?o+1:-1},t.addAsciiRange=function(t,e,o,n,a){for(var u=e;u<=o;u++){var i=String.fromCharCode(u);t.push(new r.default(i,n(i),a))}},t}();e.default=n},372:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(383),n=function(){function t(e,o,r){this.character=e,this.binary=t.getValue(o,2,r),this.ternary=t.getValue(o,3,r),this.octal=t.getValue(o,8,r),this.decimal=t.getValue(o,10,r),this.hexadecimal=t.getValue(o,16,r)}return t.getValue=function(t,e,o){return r(t.toString(e),Math.ceil(Math.log(o)/Math.log(e)),"0")},t}();e.default=n},373:function(t,e,o){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.LetterA=96]="LetterA",t[t.LetterB=160]="LetterB",t[t.LetterC=288]="LetterC",t[t.LetterD=34]="LetterD",t[t.LetterE=36]="LetterE",t[t.LetterF=40]="LetterF",t[t.LetterG=48]="LetterG",t[t.LetterH=192]="LetterH",t[t.LetterI=320]="LetterI",t[t.LetterJ=10]="LetterJ",t[t.LetterK=66]="LetterK",t[t.LetterL=68]="LetterL",t[t.LetterM=72]="LetterM",t[t.LetterN=80]="LetterN",t[t.LetterO=384]="LetterO",t[t.LetterP=130]="LetterP",t[t.LetterQ=132]="LetterQ",t[t.LetterR=136]="LetterR",t[t.LetterS=144]="LetterS",t[t.LetterT=258]="LetterT",t[t.LetterU=260]="LetterU",t[t.LetterV=18]="LetterV",t[t.LetterW=12]="LetterW",t[t.LetterX=20]="LetterX",t[t.LetterY=264]="LetterY",t[t.LetterZ=24]="LetterZ",t[t.Number1=96]="Number1",t[t.Number2=160]="Number2",t[t.Number3=288]="Number3",t[t.Number4=34]="Number4",t[t.Number5=36]="Number5",t[t.Number6=40]="Number6",t[t.Number7=48]="Number7",t[t.Number8=192]="Number8",t[t.Number9=320]="Number9",t[t.Number0=66]="Number0",t[t.FormattingNumber=6]="FormattingNumber"}(r||(r={})),e.default=r},374:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(368),n=function(){function t(){}return t.FromDegrees=function(t){if(t>=360&&(t%=360),t%45!==0||t<0)throw new Error("Invalid degrees");var e=t/45;return r.default.North<<e},t.ToDegrees=function(t){for(var e=r.default.North,o=0;o<9&&e!==t;)e<<=1,o++;return 45*o},t}();e.default=n},375:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(378);e.BrailleCharacter=r.default;var n=o(380);e.BrailleDot=n.default;var a=o(362);e.BrailleEncoding=a.default;var u=o(381);e.BrailleStream=u.default;var i=o(382);e.AutoKeyString=i.default;var s=o(384);e.CaesarString=s.default;var d=o(366);e.KeyedCipherStringBase=d.default;var c=o(385);e.VigenereString=c.default;var l=o(361);e.EncodingCategory=l.default;var f=o(370);e.EncodingEntry=f.default;var h=o(371);e.CharacterConversion=h.default;var p=o(372);e.CharacterTableEntry=p.default;var L=o(386);e.MorseCharacter=L.default;var _=o(367);e.MorseEncoding=_.default;var m=o(388);e.SemaphoreCharacter=m.default;var D=o(374);e.SemaphoreDegrees=D.default;var y=o(368);e.SemaphoreDirection=y.default},376:function(t,e,o){"use strict";var r=function(){function t(){}return t.isSupported=function(){if(void 0===this._isSupported){var t=window.localStorage,e="__storage_test__";try{t.setItem(e,e),t.removeItem(e),this._isSupported=!0}catch(e){this._isSupported=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}return this._isSupported},t.getItem=function(t){return this.isSupported()?window.localStorage.getItem(this.getKey(t)):null},t.getObject=function(t){if(this.isSupported()){var e=window.localStorage.getItem(this.getKey(t));if(null!==e)return JSON.parse(e)}return null},t.setItem=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),e)},t.setObject=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),JSON.stringify(e))},t.clear=function(){this.isSupported()&&window.localStorage.clear()},t.getKey=function(t){return this._prefix+"_"+t},t._prefix="puzzle-web",t}();e.a=r},377:function(t,e,o){"use strict";var r,n=o(0),a=(o.n(n),o(376)),u=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.componentDidMount=function(){this.restoreState(),this.updateState()},e.prototype.updateState=function(){this.onUpdateState(),this.saveState()},e.prototype.saveState=function(){a.a.setObject(this.getLocalStorageKey(),this.onSaveState())},e.prototype.restoreState=function(){this.onRestoreState(a.a.getObject(this.getLocalStorageKey()))},e}(n.Component);e.a=i},378:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(363),i=o(369),s=o(362),d=function(t){function e(e,o){void 0===e&&(e=s.default.None),void 0===o&&(o=a.default.All);var r=t.call(this,i.default.instance,o)||this;return r._encoding=e,r}return n(e,t),Object.defineProperty(e.prototype,"encoding",{get:function(){return this._encoding},set:function(t){this._encoding=t,this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.get=function(t){return(this._encoding&t)===t},e.prototype.toggle=function(t){this._encoding^=t,this.invalidateLookup()},e.prototype.onClear=function(){this._encoding=s.default.None,this.invalidateLookup()},e.prototype.onEmpty=function(){return this._encoding===s.default.None},e.prototype.getEncoding=function(){return this._encoding},e}(u.default);e.default=d},379:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.exact=[],this.partial=[]}return Object.defineProperty(t.prototype,"exactString",{get:function(){return this.exact.map(function(t){return t.toString()}).join("/")},enumerable:!0,configurable:!0}),t}();e.default=r},380:function(t,e,o){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.UpperLeft=1]="UpperLeft",t[t.MiddleLeft=2]="MiddleLeft",t[t.LowerLeft=4]="LowerLeft",t[t.UpperRight=8]="UpperRight",t[t.MiddleRight=16]="MiddleRight",t[t.LowerRight=32]="LowerRight"}(r||(r={})),e.default=r},381:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(361),n=o(369),a=o(362),u=function(){function t(){this._chars=[],this.invalidate()}return Object.defineProperty(t.prototype,"chars",{get:function(){return this._chars},set:function(t){this.clear();for(var e=0,o=t;e<o.length;e++){var r=o[e];this._chars.push(r)}},enumerable:!0,configurable:!0}),t.prototype.append=function(t){this._chars.push(t.valueOf())},t.prototype.clear=function(){this._chars.length=0,this.invalidate()},t.prototype.backspace=function(){this._chars.pop(),this.invalidate()},t.prototype.space=function(){this._chars.push(a.default.None)},t.prototype.toString=function(){return this.update(),this._currentStr},t.prototype.invalidate=function(){this._currentStr="",this._processPosition=0,this._numberMode=!1},t.prototype.update=function(){for(;this._processPosition<this._chars.length;){var t=this._chars[this._processPosition];switch(t){case a.default.None:this._numberMode=!1,this._currentStr+=" ";break;case a.default.FormattingNumber:this._numberMode=!0,this._currentStr+="#";break;default:var e=r.default.Punctuation|(this._numberMode?r.default.Number:r.default.Letter),o=n.default.instance.lookup(t,e).exact;o.length>0&&(this._currentStr+=o[0].toString())}this._processPosition++}},t}();e.default=u},382:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(365),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.convert=function(t){if(this._key.length<1)return this._text;for(var e=[],o=0,r=this._key,n=0,u=this._text;n<u.length;n++){var i=u[n];if(a.default.isAlpha(i)){var s=a.default.rotateLetterWithKey(i,r,o++,t);e.push(s),r+=t?s:i}else e.push(i)}return e.join("")},e}(o(366).default);e.default=u},383:function(t,e,o){"use strict";t.exports=function(t,e,o){if((e-=(t+="").length)<=0)return t;o||0===o||(o=" ");if(" "===(o+="")&&e<10)return r[e]+t;var n="";for(;1&e&&(n+=o),e>>=1;)o+=o;return n+t};var r=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},384:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(365),n=function(){function t(t){void 0===t&&(t=""),this._text=t}return Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t},enumerable:!0,configurable:!0}),t.prototype.getRotation=function(t){for(var e=[],o=0,n=this._text;o<n.length;o++){var a=n[o];e.push(r.default.rotateLetter(a,t))}return e.join("")},t.prototype.getRotations=function(){var t=[];t.push(this._text);for(var e=1;e<26;e++)t.push(this.getRotation(e));return t},t}();e.default=n},385:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(365),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.convert=function(t){for(var e=[],o=0,r=0,n=this._text;r<n.length;r++){var u=n[r];a.default.isAlpha(u)?e.push(a.default.rotateLetterWithKey(u,this._key,o++,t)):e.push(u)}return e.join("")},e}(o(366).default);e.default=u},386:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(363),i=o(387),s=o(367),d=s.default.Dot|s.default.Dash,c=function(t){function e(e,o){void 0===e&&(e=""),void 0===o&&(o=a.default.All);var r=t.call(this,i.default.instance,o)||this;return r._morse=e,r}return n(e,t),e.toMorseString=function(t){for(var e="";t!==s.default.None;){if((t&d)===s.default.Dot)e+=".";else{if((t&d)!==s.default.Dash)throw new Error("Invalid morse bits");e+="-"}t>>>=2}return e},e.parseMorseString=function(t){for(var e=s.default.None,o=t.length-1;o>=0;o--){var r=t[o];if("."===r)e|=s.default.Dot;else{if("-"!==r)throw new Error("Invalid morse character");e|=s.default.Dash}e<<=2}return e>>>=2},Object.defineProperty(e.prototype,"morseString",{get:function(){return this._morse},set:function(t){this._morse=t,this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.backspace=function(){this._morse.length>0&&(this._morse=this._morse.substring(0,this._morse.length-1),this.invalidateLookup())},e.prototype.dot=function(){this._morse+=".",this.invalidateLookup()},e.prototype.dash=function(){this._morse+="-",this.invalidateLookup()},e.prototype.onClear=function(){this._morse="",this.invalidateLookup()},e.prototype.onEmpty=function(){return 0===this._morse.length},e.prototype.getEncoding=function(){return e.parseMorseString(this._morse)},e}(u.default);e.default=c},387:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(364),i=o(367),s=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.PunctuationPeriod,a.default.Punctuation,"."),e.addToList(i.default.PunctuationComma,a.default.Punctuation,","),e.addToList(i.default.PunctuationQuestionMark,a.default.Punctuation,"?"),e.addToList(i.default.PunctuationApostrophe,a.default.Punctuation,"'"),e.addToList(i.default.PunctuationExclamationPoint,a.default.Punctuation,"!"),e.addToList(i.default.PunctuationForwardSlash,a.default.Punctuation,"/"),e.addToList(i.default.PunctuationOpenParenthesis,a.default.Punctuation,"("),e.addToList(i.default.PunctuationCloseParenthesis,a.default.Punctuation,")"),e.addToList(i.default.PunctuationAmpersand,a.default.Punctuation,"&"),e.addToList(i.default.PunctuationColon,a.default.Punctuation,":"),e.addToList(i.default.PunctuationSemicolon,a.default.Punctuation,";"),e.addToList(i.default.PunctuationDoubleDash,a.default.Punctuation,"="),e.addToList(i.default.PunctuationPlusSign,a.default.Punctuation,"+"),e.addToList(i.default.PunctuationHyphen,a.default.Punctuation,"-"),e.addToList(i.default.PunctuationUnderscore,a.default.Punctuation,"_"),e.addToList(i.default.PunctuationQuotationMark,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationDollarSign,a.default.Punctuation,"$"),e.addToList(i.default.PunctuationAtSign,a.default.Punctuation,"@"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=s},388:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(363),i=o(389),s=o(374),d=o(368),c=o(373),l=function(t){function e(e,o){void 0===e&&(e=c.default.None),void 0===o&&(o=a.default.All);var r=t.call(this,i.default.instance,o)||this;return r._directions=[],r.addDirection(e),r}return n(e,t),e.parseEncoding=function(t){for(var e=[],o=1;o<=8;o++){var r=1<<o;(t&r)===r&&e.push(r)}return e},Object.defineProperty(e.prototype,"directions",{get:function(){return this._directions},set:function(t){this._directions=t.slice(0,2),this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.addDirection=function(t){for(var o=0,r=e.parseEncoding(t);o<r.length;o++){var n=r[o];this._directions.push(n)}this._directions.length>2&&this._directions.splice(0,this._directions.length-2),this.invalidateLookup()},e.prototype.removeDirection=function(t){for(var o=0,r=e.parseEncoding(t);o<r.length;o++){var n=r[o],a=this._directions.indexOf(n);a>=0&&this._directions.splice(a,1)}this.invalidateLookup()},e.prototype.hasDirection=function(t){return this._directions.indexOf(t)>=0},e.prototype.getDegrees=function(){return this._directions.map(function(t){return s.default.ToDegrees(t)}).sort(function(t,e){return t-e})},e.prototype.onClear=function(){this._directions.length=0},e.prototype.onEmpty=function(){return 0===this._directions.length},e.prototype.getEncoding=function(){return this._directions.reduce(function(t,e){return t|e},d.default.None)},e}(u.default);e.default=l},389:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var a=o(361),u=o(364),i=o(373),s=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.FormattingNumber,a.default.Formatting,"#"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=s},393:function(t,e,o){"use strict";var r,n=o(0),a=(o.n(n),o(147)),u=o(377),i=o(394),s=(o.n(i),this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)})),d=function(t){function e(e,o){var r=t.call(this,e)||this;return r._conversion=2,r._cipher=o,r.state={conversion:0,key:"",output:"",text:""},r}return s(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this._input.focus()},e.prototype.render=function(){var t=this;return n.createElement("div",{className:"KeyedCipherStreamBase"},n.createElement(a.d,{className:"KeyedCipherStreamBase-input",inputRef:function(e){t._input=e},onChange:function(e){return t.onTextChanged(e)},placeholder:"Text",value:this.state.text}),n.createElement(a.d,{className:"KeyedCipherStreamBase-input",onChange:function(e){return t.onKeyChanged(e)},placeholder:"Key",value:this.state.key}),n.createElement(a.c,{className:"KeyedCipherStreamBase-commands"},n.createElement(a.m,{name:"KeyedCipherStreamBase-conversion",onChange:function(e){return t.onConversionChanged(e)},type:"radio",value:this.state.conversion},n.createElement(a.l,{value:1},"Encrypt"),n.createElement(a.l,{value:2},"Decrypt")),n.createElement(a.b,null,n.createElement(a.a,{onClick:function(e){return t.onClearClick(e)}},"Clear"))),n.createElement("pre",{className:"KeyedCipherStreamBase-output"},this.state.output))},e.prototype.onSaveState=function(){return{conversion:this._conversion,key:this._cipher.key,text:this._cipher.text}},e.prototype.onRestoreState=function(t){null!==t&&(this._cipher.text=t.text,this._cipher.key=t.key,this._conversion=t.conversion)},e.prototype.onUpdateState=function(){this.setState({conversion:this._conversion,key:this._cipher.key,output:1===this._conversion?this._cipher.encrypt():this._cipher.decrypt(),text:this._cipher.text})},e.prototype.onTextChanged=function(t){var e=t.target;this._cipher.text=e.value,this.updateState()},e.prototype.onKeyChanged=function(t){var e=t.target;this._cipher.key=e.value,this.updateState()},e.prototype.onConversionChanged=function(t){this._conversion=t,this.updateState()},e.prototype.onClearClick=function(t){this._cipher.key="",this._cipher.text="",this._conversion=2,this.updateState()},e}(u.a);e.a=d},394:function(t,e,o){var r=o(395);"string"===typeof r&&(r=[[t.i,r,""]]);var n={hmr:!1,transform:void 0};o(351)(r,n);r.locals&&(t.exports=r.locals)},395:function(t,e,o){(t.exports=o(350)(!0)).push([t.i,".KeyedCipherStreamBase-commands .btn-group,.KeyedCipherStreamBase-input{margin-bottom:10px}.KeyedCipherStreamBase-output{font-size:16px;min-height:44px;white-space:pre-wrap}","",{version:3,sources:["/home/travis/build/kfarnung/puzztool/src/Cipher/KeyedCipherStreamBase/KeyedCipherStreamBase.css"],names:[],mappings:"AAIA,wEACE,kBAAoB,CACrB,AAED,8BACE,eAAgB,AAChB,gBAAiB,AACjB,oBAAsB,CACvB",file:"KeyedCipherStreamBase.css",sourcesContent:[".KeyedCipherStreamBase-input {\n  margin-bottom: 10px;\n}\n\n.KeyedCipherStreamBase-commands .btn-group {\n  margin-bottom: 10px;\n}\n\n.KeyedCipherStreamBase-output {\n  font-size: 16px;\n  min-height: 44px;\n  white-space: pre-wrap;\n}\n"],sourceRoot:""}])},397:function(t,e,o){"use strict";var r,n=o(393),a=o(375),u=(o.n(a),this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)})),i=function(t){function e(e){return t.call(this,e,new a.AutoKeyString)||this}return u(e,t),e.prototype.getLocalStorageKey=function(){return"AutokeyStream"},e}(n.a);e.a=i},398:function(t,e,o){var r=o(399);"string"===typeof r&&(r=[[t.i,r,""]]);var n={hmr:!1,transform:void 0};o(351)(r,n);r.locals&&(t.exports=r.locals)},399:function(t,e,o){(t.exports=o(350)(!0)).push([t.i,".Autokey-content{padding:0 15px 20px}","",{version:3,sources:["/home/travis/build/kfarnung/puzztool/src/Views/Cipher/Autokey.css"],names:[],mappings:"AAAA,iBACE,mBAA4B,CAC7B",file:"Autokey.css",sourcesContent:[".Autokey-content {\n  padding: 0px 15px 20px 15px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=6.69d2aba6.chunk.js.map