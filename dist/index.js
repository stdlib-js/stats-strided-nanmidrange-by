"use strict";var l=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var p=l(function(K,y){
var g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist');function O(n,i,o,c,s,q){var v,t,u,r,e,a,f;if(v=i.data,t=i.accessors[0],n===1||o===0)return a=s.call(q,t(v,c),0,c,v),a===void 0||m(a)?NaN:a;for(e=c,f=0;f<n&&(a=s.call(q,t(v,e),f,e,v),!(a!==void 0&&a===a));f++)e+=o;if(f===n)return NaN;for(r=a,u=r,f+=1,f;f<n;f++)e+=o,a=s.call(q,t(v,e),f,e,v),!(a===void 0||m(a))&&(a<r||a===r&&j(a)?r=a:(a>u||a===u&&g(a))&&(u=a));return(u+r)/2}y.exports=O
});var d=l(function(L,B){
var R=require('@stdlib/math-base-assert-is-positive-zero/dist'),w=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),C=p();function D(n,i,o,c,s,q){var v,t,u,r,e,a;if(n<=0)return NaN;if(a=z(i),a.accessorProtocol)return C(n,a,o,c,s,q);if(n===1||o===0)return r=s.call(q,i[c],0,c,i),r===void 0||Z(r)?NaN:r;for(u=c,e=0;e<n&&(r=s.call(q,i[u],e,u,i),!(r!==void 0&&r===r));e++)u+=o;if(e===n)return NaN;for(t=r,v=t,e+=1,e;e<n;e++)u+=o,r=s.call(q,i[u],e,u,i),!(r===void 0||Z(r))&&(r<t||r===t&&w(r)?t=r:(r>v||r===v&&R(r))&&(v=r));return(v+t)/2}B.exports=D
});var P=l(function(M,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=d();function G(n,i,o,c,s){return F(n,i,o,E(n,o),c,s)}N.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),I=d();H(x,"ndarray",I);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
