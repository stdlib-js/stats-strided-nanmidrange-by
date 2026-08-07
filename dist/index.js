"use strict";var l=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var p=l(function(K,y){
var g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist');function O(n,e,v,c,s,q){var u,t,o,r,i,a,f;if(u=e.data,t=e.accessors[0],n===1||v===0)return a=s.call(q,t(u,c),0,c,u),a===void 0||m(a)?NaN:a;for(i=c,f=0;f<n&&(a=s.call(q,t(u,i),f,i,u),!(a!==void 0&&a===a));f++)i+=v;if(f===n)return NaN;for(r=a,o=r,f+=1,f;f<n;f++)i+=v,a=s.call(q,t(u,i),f,i,u),!(a===void 0||m(a))&&(a<r||a===r&&j(a)?r=a:(a>o||a===o&&g(a))&&(o=a));return(o+r)/2}y.exports=O
});var d=l(function(L,B){
var R=require('@stdlib/math-base-assert-is-positive-zero/dist'),w=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),C=p();function D(n,e,v,c,s,q){var u,t,o,r,i,a;if(n<=0)return NaN;if(a=z(e),a.accessorProtocol)return C(n,a,v,c,s,q);if(n===1||v===0)return r=s.call(q,e[c],0,c,e),r===void 0||Z(r)?NaN:r;for(o=c,i=0;i<n&&(r=s.call(q,e[o],i,o,e),!(r!==void 0&&r===r));i++)o+=v;if(i===n)return NaN;for(t=r,u=t,i+=1,i;i<n;i++)o+=v,r=s.call(q,e[o],i,o,e),!(r===void 0||Z(r))&&(r<t||r===t&&w(r)?t=r:(r>u||r===u&&R(r))&&(u=r));return(u+t)/2}B.exports=D
});var P=l(function(M,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=d();function G(n,e,v,c,s){return F(n,e,v,E(n,v),c,s)}N.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),I=d();H(x,"ndarray",I);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
