"use strict";var d=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var m=d(function(z,q){
var p=require('@stdlib/array-base-resolve-getter/dist');function b(a,t){var e,v,s,r;for(e=p(a),v=p(t),s=[],r=0;r<a.length;r++)v(t,r)&&s.push(e(a,r));return s}q.exports=b
});var P=d(function(A,x){
var h=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/strided-base-reinterpret-complex/dist');function C(a,t,e,v,s){var r,i;for(r=s,i=0;i<a.length;i++)t[i]&&(e[r]=a[i],r+=v);return e}function D(a,t,e,v,s){var r,i,o,u,c,n,f,l;for(r=a.data,i=t.data,o=e.data,u=a.accessors[0],c=t.accessors[0],n=e.accessors[1],f=s,l=0;l<r.length;l++)c(i,l)&&(n(o,f,u(r,l)),f+=v);return o}function G(a,t,e,v,s){var r,i,o,u,c,n;for(r=t.data,i=t.accessors[0],u=v*2,o=s*2,c=0;c<r.length;c++)i(r,c)&&(n=c*2,e[o]=a[n],e[o+1]=a[n+1],o+=u);return e}function O(a,t,e,v,s){var r,i,o;return r=g(a),i=g(t),o=g(e),r.accessorProtocol||i.accessorProtocol||o.accessorProtocol?h(r.dtype)&&h(o.dtype)?(G(y(a,0),i,y(e,0),v,s),e):(D(r,i,o,v,s),e):(C(a,t,e,v,s),e)}x.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),T=P();R(j,"assign",T);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
