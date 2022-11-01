// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,d,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(r,e,t.get),_&&u&&u.call(r,e,t.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var d=Math.floor;function _(r,e,t,n){var o,a,u,i,f,l,c,p,y,s,b,v,j;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(b=0,j=0;j<r;j++)b+=e[o],o+=t;return b}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],c=e[o+5*t],p=e[o+6*t],y=e[o+7*t],o+=8*t,s=r%8,j=8;j<r-s;j+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],c+=e[o+5*t],p+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(b=a+u+(i+f)+(l+c+(p+y));j<r;j++)b+=e[o],o+=t;return b}return v=d(r/2),_(v-=v%8,e,t,o)+_(r-v,e,t,o+v*t)}function p(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function y(r,e,t,n){var o,a,u,i,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=p(r,t,n)/r,a=n<0?(1-r)*n:0,u=0,i=0,c=0;c<r;c++)u+=(f=t[a]-o)*f,i+=f,a+=n;return u/l-i/r*(i/l)}c(p,"ndarray",_),c(y,"ndarray",(function(r,e,t,n,o){var a,u,i,f,l,c,d;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(a=_(r,t,n,o)/r,u=o,i=0,f=0,d=0;d<r;d++)i+=(l=t[u]-a)*l,f+=l,u+=n;return i/c-f/r*(f/c)}));const{ndarray:s}=y;var b=Math.sqrt;function v(r,e,t,n){return b(y(r,e,t,n))}c(v,"ndarray",(function(r,e,t,n,o){return b(s(r,e,t,n,o))}));const{ndarray:j}=v;function g(r,e,t,n){return v(r,e,t,n)}c(g,"ndarray",(function(r,e,t,n,o){return j(r,e,t,n,o)}));const{ndarray:h}=g;r.default=g,r.ndarray=h,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).stdev={});
//# sourceMappingURL=index.js.map
