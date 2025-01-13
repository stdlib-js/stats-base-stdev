// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+i(n):i(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=a(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=a(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):n.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function y(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":s(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=u.call(i,b,"$1e"),i=u.call(i,v,"e"),i=u.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),r.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):p.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,k=Array.isArray;function x(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,i,n,o,s,p,l,u,f,g,d,h;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",p=1,l=0;l<r.length;l++)if(i=r[l],"string"==typeof i)s+=i;else{if(e=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,x(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",p+=1}return s}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,i,a;for(t=[],a=0,i=V.exec(r);i;)(e=r.slice(a,V.lastIndex-i[0].length)).length&&t.push(e),t.push(j(i)),a=V.lastIndex,i=V.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var I=Object.prototype,T=I.toString,A=I.__defineGetter__,C=I.__defineSetter__,R=I.__lookupGetter__,O=I.__lookupSetter__;var P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(R.call(r,e)||O.call(r,e)?(i=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&A&&A.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function Z(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=Math.floor,N=128;function W(r,e,t,i){var a,n,o,c,s,p,l,u,f,g,d,h,w;if(r<=0)return 0;if(1===r||0===t)return e[i];if(a=i,r<8){for(d=0,w=0;w<r;w++)d+=e[a],a+=t;return d}if(r<=N){for(n=e[a],o=e[a+t],c=e[a+2*t],s=e[a+3*t],p=e[a+4*t],l=e[a+5*t],u=e[a+6*t],f=e[a+7*t],a+=8*t,g=r%8,w=8;w<r-g;w+=8)n+=e[a],o+=e[a+t],c+=e[a+2*t],s+=e[a+3*t],p+=e[a+4*t],l+=e[a+5*t],u+=e[a+6*t],f+=e[a+7*t],a+=8*t;for(d=n+o+(c+s)+(p+l+(u+f));w<r;w++)d+=e[a],a+=t;return d}return h=G(r/2),W(h-=h%8,e,t,a)+W(r-h,e,t,a+h*t)}function L(r,e,t){var i,a,n;if(r<=0)return 0;if(1===r||0===t)return e[0];if(i=t<0?(1-r)*t:0,r<8){for(a=0,n=0;n<r;n++)a+=e[i],i+=t;return a}return W(r,e,t,i)}function M(r,e,t,i){var a,n,o,c,s,p,l;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===i)return 0;for(a=L(r,t,i)/r,n=i<0?(1-r)*i:0,o=0,c=0,l=0;l<r;l++)o+=(s=t[n]-a)*s,c+=s,n+=i;return o/p-c/r*(c/p)}Z(L,"ndarray",W),Z(M,"ndarray",(function(r,e,t,i,a){var n,o,c,s,p,l,u;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===i)return 0;for(n=W(r,t,i,a)/r,o=a,c=0,s=0,u=0;u<r;u++)c+=(p=t[o]-n)*p,s+=p,o+=i;return c/l-s/r*(s/l)}));const{ndarray:U}=M;var X=Math.sqrt;function q(r,e,t,i){return X(M(r,e,t,i))}Z(q,"ndarray",(function(r,e,t,i,a){return X(U(r,e,t,i,a))}));const{ndarray:z}=q;function B(r,e,t,i){return q(r,e,t,i)}Z(B,"ndarray",(function(r,e,t,i,a){return z(r,e,t,i,a)}));const{ndarray:D}=B;export{B as default,D as ndarray};
//# sourceMappingURL=mod.js.map
