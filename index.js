// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,a=t.__lookupGetter__,i=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,d,_;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(a.call(r,e)||i.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),d="get"in f,_="set"in f,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&o&&o.call(r,e,f.get),_&&u&&u.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function d(r,e,t,n){var o,u,a,i,f,l,_,p,y,s,b,v,j;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(b=0,j=0;j<r;j++)b+=e[o],o+=t;return b}if(r<=128){for(u=e[o],a=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],_=e[o+5*t],p=e[o+6*t],y=e[o+7*t],o+=8*t,s=r%8,j=8;j<r-s;j+=8)u+=e[o],a+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],_+=e[o+5*t],p+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(b=u+a+(i+f)+(l+_+(p+y));j<r;j++)b+=e[o],o+=t;return b}return v=c(r/2),d(v-=v%8,e,t,o)+d(r-v,e,t,o+v*t)}function _(r,e,t){var n,o,u;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,u=0;u<r;u++)o+=e[n],n+=t;return o}return d(r,e,t,n)}function p(r,e,t,n){var o,u,a,i,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=_(r,t,n)/r,u=n<0?(1-r)*n:0,a=0,i=0,c=0;c<r;c++)a+=(f=t[u]-o)*f,i+=f,u+=n;return a/l-i/r*(i/l)}l(_,"ndarray",d),l(p,"ndarray",(function(r,e,t,n,o){var u,a,i,f,l,c,_;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(u=d(r,t,n,o)/r,a=o,i=0,f=0,_=0;_<r;_++)i+=(l=t[a]-u)*l,f+=l,a+=n;return i/c-f/r*(f/c)}));const{ndarray:y}=p;var s=Math.sqrt;function b(r,e,t,n){return s(p(r,e,t,n))}l(b,"ndarray",(function(r,e,t,n,o){return s(y(r,e,t,n,o))}));const{ndarray:v}=b;function j(r,e,t,n){return b(r,e,t,n)}return l(j,"ndarray",(function(r,e,t,n,o){return v(r,e,t,n,o)})),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).stdev=e();
//# sourceMappingURL=index.js.map