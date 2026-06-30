(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function f0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fc={exports:{}},Ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function h0(){if($m)return Ci;$m=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(u,d,g){var y=null;if(g!==void 0&&(y=""+g),d.key!==void 0&&(y=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:u,key:y,ref:d!==void 0?d:null,props:g}}return Ci.Fragment=r,Ci.jsx=c,Ci.jsxs=c,Ci}var Am;function p0(){return Am||(Am=1,Fc.exports=h0()),Fc.exports}var o=p0(),Vc={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function m0(){if(Em)return ie;Em=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),y=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function C(S){return S===null||typeof S!="object"?null:(S=T&&S[T]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function _(S,N,G){this.props=S,this.context=N,this.refs=H,this.updater=G||L}_.prototype.isReactComponent={},_.prototype.setState=function(S,N){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,N,"setState")},_.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function U(){}U.prototype=_.prototype;function P(S,N,G){this.props=S,this.context=N,this.refs=H,this.updater=G||L}var F=P.prototype=new U;F.constructor=P,q(F,_.prototype),F.isPureReactComponent=!0;var te=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function Z(S,N,G,Q,K,ue){return G=ue.ref,{$$typeof:l,type:S,key:N,ref:G!==void 0?G:null,props:ue}}function Te(S,N){return Z(S.type,N,void 0,void 0,void 0,S.props)}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Dt(S){var N={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(G){return N[G]})}var yt=/\/+/g;function qe(S,N){return typeof S=="object"&&S!==null&&S.key!=null?Dt(""+S.key):N.toString(36)}function zt(){}function Ct(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(zt,zt):(S.status="pending",S.then(function(N){S.status==="pending"&&(S.status="fulfilled",S.value=N)},function(N){S.status==="pending"&&(S.status="rejected",S.reason=N)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function $e(S,N,G,Q,K){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var le=!1;if(S===null)le=!0;else switch(ue){case"bigint":case"string":case"number":le=!0;break;case"object":switch(S.$$typeof){case l:case r:le=!0;break;case v:return le=S._init,$e(le(S._payload),N,G,Q,K)}}if(le)return K=K(S),le=Q===""?"."+qe(S,0):Q,te(K)?(G="",le!=null&&(G=le.replace(yt,"$&/")+"/"),$e(K,N,G,"",function(ot){return ot})):K!=null&&(Ue(K)&&(K=Te(K,G+(K.key==null||S&&S.key===K.key?"":(""+K.key).replace(yt,"$&/")+"/")+le)),N.push(K)),1;le=0;var Xe=Q===""?".":Q+":";if(te(S))for(var ge=0;ge<S.length;ge++)Q=S[ge],ue=Xe+qe(Q,ge),le+=$e(Q,N,G,ue,K);else if(ge=C(S),typeof ge=="function")for(S=ge.call(S),ge=0;!(Q=S.next()).done;)Q=Q.value,ue=Xe+qe(Q,ge++),le+=$e(Q,N,G,ue,K);else if(ue==="object"){if(typeof S.then=="function")return $e(Ct(S),N,G,Q,K);throw N=String(S),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return le}function O(S,N,G){if(S==null)return S;var Q=[],K=0;return $e(S,Q,"","",function(ue){return N.call(G,ue,K++)}),Q}function Y(S){if(S._status===-1){var N=S._result;N=N(),N.then(function(G){(S._status===0||S._status===-1)&&(S._status=1,S._result=G)},function(G){(S._status===0||S._status===-1)&&(S._status=2,S._result=G)}),S._status===-1&&(S._status=0,S._result=N)}if(S._status===1)return S._result.default;throw S._result}var J=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function ce(){}return ie.Children={map:O,forEach:function(S,N,G){O(S,function(){N.apply(this,arguments)},G)},count:function(S){var N=0;return O(S,function(){N++}),N},toArray:function(S){return O(S,function(N){return N})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ie.Component=_,ie.Fragment=c,ie.Profiler=d,ie.PureComponent=P,ie.StrictMode=u,ie.Suspense=b,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ie.__COMPILER_RUNTIME={__proto__:null,c:function(S){return V.H.useMemoCache(S)}},ie.cache=function(S){return function(){return S.apply(null,arguments)}},ie.cloneElement=function(S,N,G){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Q=q({},S.props),K=S.key,ue=void 0;if(N!=null)for(le in N.ref!==void 0&&(ue=void 0),N.key!==void 0&&(K=""+N.key),N)!W.call(N,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&N.ref===void 0||(Q[le]=N[le]);var le=arguments.length-2;if(le===1)Q.children=G;else if(1<le){for(var Xe=Array(le),ge=0;ge<le;ge++)Xe[ge]=arguments[ge+2];Q.children=Xe}return Z(S.type,K,void 0,void 0,ue,Q)},ie.createContext=function(S){return S={$$typeof:y,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:g,_context:S},S},ie.createElement=function(S,N,G){var Q,K={},ue=null;if(N!=null)for(Q in N.key!==void 0&&(ue=""+N.key),N)W.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(K[Q]=N[Q]);var le=arguments.length-2;if(le===1)K.children=G;else if(1<le){for(var Xe=Array(le),ge=0;ge<le;ge++)Xe[ge]=arguments[ge+2];K.children=Xe}if(S&&S.defaultProps)for(Q in le=S.defaultProps,le)K[Q]===void 0&&(K[Q]=le[Q]);return Z(S,ue,void 0,void 0,null,K)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(S){return{$$typeof:j,render:S}},ie.isValidElement=Ue,ie.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:Y}},ie.memo=function(S,N){return{$$typeof:p,type:S,compare:N===void 0?null:N}},ie.startTransition=function(S){var N=V.T,G={};V.T=G;try{var Q=S(),K=V.S;K!==null&&K(G,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ce,J)}catch(ue){J(ue)}finally{V.T=N}},ie.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ie.use=function(S){return V.H.use(S)},ie.useActionState=function(S,N,G){return V.H.useActionState(S,N,G)},ie.useCallback=function(S,N){return V.H.useCallback(S,N)},ie.useContext=function(S){return V.H.useContext(S)},ie.useDebugValue=function(){},ie.useDeferredValue=function(S,N){return V.H.useDeferredValue(S,N)},ie.useEffect=function(S,N,G){var Q=V.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(S,N)},ie.useId=function(){return V.H.useId()},ie.useImperativeHandle=function(S,N,G){return V.H.useImperativeHandle(S,N,G)},ie.useInsertionEffect=function(S,N){return V.H.useInsertionEffect(S,N)},ie.useLayoutEffect=function(S,N){return V.H.useLayoutEffect(S,N)},ie.useMemo=function(S,N){return V.H.useMemo(S,N)},ie.useOptimistic=function(S,N){return V.H.useOptimistic(S,N)},ie.useReducer=function(S,N,G){return V.H.useReducer(S,N,G)},ie.useRef=function(S){return V.H.useRef(S)},ie.useState=function(S){return V.H.useState(S)},ie.useSyncExternalStore=function(S,N,G){return V.H.useSyncExternalStore(S,N,G)},ie.useTransition=function(){return V.H.useTransition()},ie.version="19.1.0",ie}var Rm;function fd(){return Rm||(Rm=1,Vc.exports=m0()),Vc.exports}var A=fd();const Zt=f0(A);var Pc={exports:{}},Oi={},Xc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function g0(){return Dm||(Dm=1,function(l){function r(O,Y){var J=O.length;O.push(Y);e:for(;0<J;){var ce=J-1>>>1,S=O[ce];if(0<d(S,Y))O[ce]=Y,O[J]=S,J=ce;else break e}}function c(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var Y=O[0],J=O.pop();if(J!==Y){O[0]=J;e:for(var ce=0,S=O.length,N=S>>>1;ce<N;){var G=2*(ce+1)-1,Q=O[G],K=G+1,ue=O[K];if(0>d(Q,J))K<S&&0>d(ue,Q)?(O[ce]=ue,O[K]=J,ce=K):(O[ce]=Q,O[G]=J,ce=G);else if(K<S&&0>d(ue,J))O[ce]=ue,O[K]=J,ce=K;else break e}}return Y}function d(O,Y){var J=O.sortIndex-Y.sortIndex;return J!==0?J:O.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var y=Date,j=y.now();l.unstable_now=function(){return y.now()-j}}var b=[],p=[],v=1,T=null,C=3,L=!1,q=!1,H=!1,_=!1,U=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function te(O){for(var Y=c(p);Y!==null;){if(Y.callback===null)u(p);else if(Y.startTime<=O)u(p),Y.sortIndex=Y.expirationTime,r(b,Y);else break;Y=c(p)}}function V(O){if(H=!1,te(O),!q)if(c(b)!==null)q=!0,W||(W=!0,qe());else{var Y=c(p);Y!==null&&$e(V,Y.startTime-O)}}var W=!1,Z=-1,Te=5,Ue=-1;function Dt(){return _?!0:!(l.unstable_now()-Ue<Te)}function yt(){if(_=!1,W){var O=l.unstable_now();Ue=O;var Y=!0;try{e:{q=!1,H&&(H=!1,P(Z),Z=-1),L=!0;var J=C;try{t:{for(te(O),T=c(b);T!==null&&!(T.expirationTime>O&&Dt());){var ce=T.callback;if(typeof ce=="function"){T.callback=null,C=T.priorityLevel;var S=ce(T.expirationTime<=O);if(O=l.unstable_now(),typeof S=="function"){T.callback=S,te(O),Y=!0;break t}T===c(b)&&u(b),te(O)}else u(b);T=c(b)}if(T!==null)Y=!0;else{var N=c(p);N!==null&&$e(V,N.startTime-O),Y=!1}}break e}finally{T=null,C=J,L=!1}Y=void 0}}finally{Y?qe():W=!1}}}var qe;if(typeof F=="function")qe=function(){F(yt)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Ct=zt.port2;zt.port1.onmessage=yt,qe=function(){Ct.postMessage(null)}}else qe=function(){U(yt,0)};function $e(O,Y){Z=U(function(){O(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return C},l.unstable_next=function(O){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var J=C;C=Y;try{return O()}finally{C=J}},l.unstable_requestPaint=function(){_=!0},l.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=C;C=O;try{return Y()}finally{C=J}},l.unstable_scheduleCallback=function(O,Y,J){var ce=l.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=J+S,O={id:v++,callback:Y,priorityLevel:O,startTime:J,expirationTime:S,sortIndex:-1},J>ce?(O.sortIndex=J,r(p,O),c(b)===null&&O===c(p)&&(H?(P(Z),Z=-1):H=!0,$e(V,J-ce))):(O.sortIndex=S,r(b,O),q||L||(q=!0,W||(W=!0,qe()))),O},l.unstable_shouldYield=Dt,l.unstable_wrapCallback=function(O){var Y=C;return function(){var J=C;C=Y;try{return O.apply(this,arguments)}finally{C=J}}}}(Zc)),Zc}var zm;function y0(){return zm||(zm=1,Xc.exports=g0()),Xc.exports}var Ic={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function b0(){if(Cm)return ct;Cm=1;var l=fd();function r(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(b,p,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:b,containerInfo:p,implementation:v}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ct.createPortal=function(b,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return g(b,p,null,v)},ct.flushSync=function(b){var p=y.T,v=u.p;try{if(y.T=null,u.p=2,b)return b()}finally{y.T=p,u.p=v,u.d.f()}},ct.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(b,p))},ct.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},ct.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var v=p.as,T=j(v,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?u.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:L}):v==="script"&&u.d.X(b,{crossOrigin:T,integrity:C,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ct.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=j(p.as,p.crossOrigin);u.d.M(b,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(b)},ct.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,T=j(v,p.crossOrigin);u.d.L(b,v,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ct.preloadModule=function(b,p){if(typeof b=="string")if(p){var v=j(p.as,p.crossOrigin);u.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(b)},ct.requestFormReset=function(b){u.d.r(b)},ct.unstable_batchedUpdates=function(b,p){return b(p)},ct.useFormState=function(b,p,v){return y.H.useFormState(b,p,v)},ct.useFormStatus=function(){return y.H.useHostTransitionStatus()},ct.version="19.1.0",ct}var Om;function x0(){if(Om)return Ic.exports;Om=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ic.exports=b0(),Ic.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function v0(){if(Bm)return Oi;Bm=1;var l=y0(),r=fd(),c=x0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return j(i),e;if(s===n)return j(i),t;s=s.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=s;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,n=s;break}if(m===n){f=!0,n=i,a=s;break}m=m.sibling}if(!f){for(m=s.child;m;){if(m===a){f=!0,a=s,n=i;break}if(m===n){f=!0,n=s,a=i;break}m=m.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ue=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),yt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=yt&&e[yt]||e["@@iterator"],typeof e=="function"?e:null)}var zt=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case _:return"Profiler";case H:return"StrictMode";case V:return"Suspense";case W:return"SuspenseList";case Ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case F:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var $e=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ce=[],S=-1;function N(e){return{current:e}}function G(e){0>S||(e.current=ce[S],ce[S]=null,S--)}function Q(e,t){S++,ce[S]=e.current,e.current=t}var K=N(null),ue=N(null),le=N(null),Xe=N(null);function ge(e,t){switch(Q(le,t),Q(ue,e),Q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jp(t),e=em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(K),Q(K,e)}function ot(){G(K),G(ue),G(le)}function na(e){e.memoizedState!==null&&Q(Xe,e);var t=K.current,a=em(t,e.type);t!==a&&(Q(ue,e),Q(K,a))}function rl(e){ue.current===e&&(G(K),G(ue)),Xe.current===e&&(G(Xe),Ai._currentValue=J)}var Ot=Object.prototype.hasOwnProperty,Or=l.unstable_scheduleCallback,Br=l.unstable_cancelCallback,Qy=l.unstable_shouldYield,Fy=l.unstable_requestPaint,Jt=l.unstable_now,Vy=l.unstable_getCurrentPriorityLevel,Od=l.unstable_ImmediatePriority,Bd=l.unstable_UserBlockingPriority,Qi=l.unstable_NormalPriority,Py=l.unstable_LowPriority,kd=l.unstable_IdlePriority,Xy=l.log,Zy=l.unstable_setDisableYieldValue,kn=null,bt=null;function zl(e){if(typeof Xy=="function"&&Zy(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(kn,e)}catch{}}var xt=Math.clz32?Math.clz32:Wy,Iy=Math.log,Ky=Math.LN2;function Wy(e){return e>>>=0,e===0?32:31-(Iy(e)/Ky|0)|0}var Fi=256,Vi=4194304;function ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?i=ia(n):(f&=m,f!==0?i=ia(f):a||(a=m&~e,a!==0&&(i=ia(a))))):(m=n&~s,m!==0?i=ia(m):f!==0?i=ia(f):a||(a=n&~e,a!==0&&(i=ia(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function Mn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(){var e=Fi;return Fi<<=1,(Fi&4194048)===0&&(Fi=256),e}function Nd(){var e=Vi;return Vi<<=1,(Vi&62914560)===0&&(Vi=4194304),e}function kr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function eb(e,t,a,n,i,s){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,R=e.hiddenUpdates;for(a=f&~a;0<a;){var B=31-xt(a),M=1<<B;m[B]=0,x[B]=-1;var D=R[B];if(D!==null)for(R[B]=null,B=0;B<D.length;B++){var z=D[B];z!==null&&(z.lane&=-536870913)}a&=~M}n!==0&&Ld(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(f&~t))}function Ld(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-xt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ud(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-xt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hd(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:xm(e.type))}function tb(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Cl=Math.random().toString(36).slice(2),rt="__reactFiber$"+Cl,dt="__reactProps$"+Cl,Ca="__reactContainer$"+Cl,Lr="__reactEvents$"+Cl,lb="__reactListeners$"+Cl,ab="__reactHandles$"+Cl,_d="__reactResources$"+Cl,Ln="__reactMarker$"+Cl;function Ur(e){delete e[rt],delete e[dt],delete e[Lr],delete e[lb],delete e[ab]}function Oa(e){var t=e[rt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ca]||a[rt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=nm(e);e!==null;){if(a=e[rt])return a;e=nm(e)}return t}e=a,a=e.parentNode}return null}function Ba(e){if(e=e[rt]||e[Ca]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ka(e){var t=e[_d];return t||(t=e[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Ln]=!0}var qd=new Set,Gd={};function oa(e,t){Ma(e,t),Ma(e+"Capture",t)}function Ma(e,t){for(Gd[e]=t,e=0;e<t.length;e++)qd.add(t[e])}var nb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yd={},Qd={};function ib(e){return Ot.call(Qd,e)?!0:Ot.call(Yd,e)?!1:nb.test(e)?Qd[e]=!0:(Yd[e]=!0,!1)}function Xi(e,t,a){if(ib(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function sl(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Hr,Fd;function Na(e){if(Hr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Hr=t&&t[1]||"",Fd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hr+e+Fd}var _r=!1;function qr(e,t){if(!e||_r)return"";_r=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(z){var D=z}Reflect.construct(e,[],M)}else{try{M.call()}catch(z){D=z}e.call(M.prototype)}}else{try{throw Error()}catch(z){D=z}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(z){if(z&&D&&typeof z.stack=="string")return[z.stack,D.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),f=s[0],m=s[1];if(f&&m){var x=f.split(`
`),R=m.split(`
`);for(i=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(n===x.length||i===R.length)for(n=x.length-1,i=R.length-1;1<=n&&0<=i&&x[n]!==R[i];)i--;for(;1<=n&&0<=i;n--,i--)if(x[n]!==R[i]){if(n!==1||i!==1)do if(n--,i--,0>i||x[n]!==R[i]){var B=`
`+x[n].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=n&&0<=i);break}}}finally{_r=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Na(a):""}function ob(e){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return qr(e.type,!1);case 11:return qr(e.type.render,!1);case 1:return qr(e.type,!0);case 31:return Na("Activity");default:return""}}function Vd(e){try{var t="";do t+=ob(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rb(e){var t=Pd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,s.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=rb(e))}function Xd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Pd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function kt(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gr(e,t,a,n,i,s,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,f,Bt(t)):a!=null?Yr(e,f,Bt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Bt(m):e.removeAttribute("name")}function Zd(e,t,a,n,i,s,f,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+Bt(a):"",t=t!=null?""+Bt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Yr(e,t,a){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function La(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Id(e,t,a){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Bt(a):""}function Kd(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if($e(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Ua(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var cb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||cb.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Jd(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Wd(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&Wd(e,s,t[s])}function Qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),db=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return db.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Fr=null;function Vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,_a=null;function ef(e){var t=Ba(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[dt]||null;if(!i)throw Error(u(90));Gr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Xd(n)}break e;case"textarea":Id(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&La(e,!!a.multiple,t,!1)}}}var Pr=!1;function tf(e,t,a){if(Pr)return e(t,a);Pr=!0;try{var n=e(t);return n}finally{if(Pr=!1,(Ha!==null||_a!==null)&&(Uo(),Ha&&(t=Ha,e=_a,_a=Ha=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function Hn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[dt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var cl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xr=!1;if(cl)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Xr=!1}var Ol=null,Zr=null,Ji=null;function lf(){if(Ji)return Ji;var e,t=Zr,a=t.length,n,i="value"in Ol?Ol.value:Ol.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===i[s-n];n++);return Ji=i.slice(e,1<n?1-n:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function af(){return!1}function ft(e){function t(a,n,i,s,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:af,this.isPropagationStopped=af,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=ft(ra),qn=v({},ra,{view:0,detail:0}),fb=ft(qn),Ir,Kr,Gn,ao=v({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Ir=e.screenX-Gn.screenX,Kr=e.screenY-Gn.screenY):Kr=Ir=0,Gn=e),Ir)},movementY:function(e){return"movementY"in e?e.movementY:Kr}}),nf=ft(ao),hb=v({},ao,{dataTransfer:0}),pb=ft(hb),mb=v({},qn,{relatedTarget:0}),Wr=ft(mb),gb=v({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=ft(gb),bb=v({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xb=ft(bb),vb=v({},ra,{data:0}),of=ft(vb),Sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jb[e])?!!t[e]:!1}function Jr(){return Tb}var $b=v({},qn,{key:function(e){if(e.key){var t=Sb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jr,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ab=ft($b),Eb=v({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=ft(Eb),Rb=v({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jr}),Db=ft(Rb),zb=v({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=ft(zb),Ob=v({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=ft(Ob),kb=v({},ra,{newState:0,oldState:0}),Mb=ft(kb),Nb=[9,13,27,32],es=cl&&"CompositionEvent"in window,Yn=null;cl&&"documentMode"in document&&(Yn=document.documentMode);var Lb=cl&&"TextEvent"in window&&!Yn,sf=cl&&(!es||Yn&&8<Yn&&11>=Yn),cf=" ",uf=!1;function df(e,t){switch(e){case"keyup":return Nb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function Ub(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(uf=!0,cf);case"textInput":return e=t.data,e===cf&&uf?null:e;default:return null}}function Hb(e,t){if(qa)return e==="compositionend"||!es&&df(e,t)?(e=lf(),Ji=Zr=Ol=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var _b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_b[e.type]:t==="textarea"}function pf(e,t,a,n){Ha?_a?_a.push(n):_a=[n]:Ha=n,t=Qo(t,"onChange"),0<t.length&&(a=new lo("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Qn=null,Fn=null;function qb(e){Xp(e,0)}function no(e){var t=Un(e);if(Xd(t))return e}function mf(e,t){if(e==="change")return t}var gf=!1;if(cl){var ts;if(cl){var ls="oninput"in document;if(!ls){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),ls=typeof yf.oninput=="function"}ts=ls}else ts=!1;gf=ts&&(!document.documentMode||9<document.documentMode)}function bf(){Qn&&(Qn.detachEvent("onpropertychange",xf),Fn=Qn=null)}function xf(e){if(e.propertyName==="value"&&no(Fn)){var t=[];pf(t,Fn,e,Vr(e)),tf(qb,t)}}function Gb(e,t,a){e==="focusin"?(bf(),Qn=t,Fn=a,Qn.attachEvent("onpropertychange",xf)):e==="focusout"&&bf()}function Yb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Fn)}function Qb(e,t){if(e==="click")return no(t)}function Fb(e,t){if(e==="input"||e==="change")return no(t)}function Vb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Vb;function Vn(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ot.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sf(e,t){var a=vf(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vf(a)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ki(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pb=cl&&"documentMode"in document&&11>=document.documentMode,Ga=null,ns=null,Pn=null,is=!1;function Tf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;is||Ga==null||Ga!==Ki(n)||(n=Ga,"selectionStart"in n&&as(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pn&&Vn(Pn,n)||(Pn=n,n=Qo(ns,"onSelect"),0<n.length&&(t=new lo("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ga)))}function sa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ya={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},os={},$f={};cl&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ca(e){if(os[e])return os[e];if(!Ya[e])return e;var t=Ya[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in $f)return os[e]=t[a];return e}var Af=ca("animationend"),Ef=ca("animationiteration"),Rf=ca("animationstart"),Xb=ca("transitionrun"),Zb=ca("transitionstart"),Ib=ca("transitioncancel"),Df=ca("transitionend"),zf=new Map,rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rs.push("scrollEnd");function Vt(e,t){zf.set(e,t),oa(t,[e])}var Cf=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var a=Cf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Vd(t)},Cf.set(e,t),t)}return{value:e,source:t,stack:Vd(t)}}var Nt=[],Qa=0,ss=0;function io(){for(var e=Qa,t=ss=Qa=0;t<e;){var a=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var i=Nt[t];Nt[t++]=null;var s=Nt[t];if(Nt[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}s!==0&&Of(a,i,s)}}function oo(e,t,a,n){Nt[Qa++]=e,Nt[Qa++]=t,Nt[Qa++]=a,Nt[Qa++]=n,ss|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function cs(e,t,a,n){return oo(e,t,a,n),ro(e)}function Fa(e,t){return oo(e,null,null,t),ro(e)}function Of(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-xt(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),s):null}function ro(e){if(50<bi)throw bi=0,mc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Va={};function Kb(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,a,n){return new Kb(e,t,a,n)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ul(e,t){var a=e.alternate;return a===null?(a=St(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function so(e,t,a,n,i,s){var f=0;if(n=e,typeof e=="function")us(e)&&(f=1);else if(typeof e=="string")f=Jx(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ue:return e=St(31,a,t,i),e.elementType=Ue,e.lanes=s,e;case q:return ua(a.children,i,s,t);case H:f=8,i|=24;break;case _:return e=St(12,a,t,i|2),e.elementType=_,e.lanes=s,e;case V:return e=St(13,a,t,i),e.elementType=V,e.lanes=s,e;case W:return e=St(19,a,t,i),e.elementType=W,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case F:f=10;break e;case P:f=9;break e;case te:f=11;break e;case Z:f=14;break e;case Te:f=16,n=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=St(f,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function ua(e,t,a,n){return e=St(7,e,n,t),e.lanes=a,e}function ds(e,t,a){return e=St(6,e,null,t),e.lanes=a,e}function fs(e,t,a){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pa=[],Xa=0,co=null,uo=0,Lt=[],Ut=0,da=null,dl=1,fl="";function fa(e,t){Pa[Xa++]=uo,Pa[Xa++]=co,co=e,uo=t}function kf(e,t,a){Lt[Ut++]=dl,Lt[Ut++]=fl,Lt[Ut++]=da,da=e;var n=dl;e=fl;var i=32-xt(n)-1;n&=~(1<<i),a+=1;var s=32-xt(t)+i;if(30<s){var f=i-i%5;s=(n&(1<<f)-1).toString(32),n>>=f,i-=f,dl=1<<32-xt(t)+i|a<<i|n,fl=s+e}else dl=1<<s|a<<i|n,fl=e}function hs(e){e.return!==null&&(fa(e,1),kf(e,1,0))}function ps(e){for(;e===co;)co=Pa[--Xa],Pa[Xa]=null,uo=Pa[--Xa],Pa[Xa]=null;for(;e===da;)da=Lt[--Ut],Lt[Ut]=null,fl=Lt[--Ut],Lt[Ut]=null,dl=Lt[--Ut],Lt[Ut]=null}var ut=null,Ne=null,me=!1,ha=null,el=!1,ms=Error(u(519));function pa(e){var t=Error(u(418,""));throw In(Mt(t,e)),ms}function Mf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[rt]=e,t[dt]=n,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<vi.length;a++)fe(vi[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Zd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ii(t);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Kd(t,n.value,n.defaultValue,n.children),Ii(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Wp(t.textContent,a)?(n.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),n.onScroll!=null&&fe("scroll",t),n.onScrollEnd!=null&&fe("scrollend",t),n.onClick!=null&&(t.onclick=Fo),t=!0):t=!1,t||pa(e)}function Nf(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:el=!1;return;case 27:case 3:el=!0;return;default:ut=ut.return}}function Xn(e){if(e!==ut)return!1;if(!me)return Nf(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cc(e.type,e.memoizedProps)),a=!a),a&&Ne&&pa(e),Nf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ne=Xt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,Xl(e.type)?(e=Mc,Mc=null,Ne=e):Ne=t):Ne=ut?Xt(e.stateNode.nextSibling):null;return!0}function Zn(){Ne=ut=null,me=!1}function Lf(){var e=ha;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),ha=null),e}function In(e){ha===null?ha=[e]:ha.push(e)}var gs=N(null),ma=null,hl=null;function Bl(e,t,a){Q(gs,t._currentValue),t._currentValue=a}function pl(e){e._currentValue=gs.current,G(gs)}function ys(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function bs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var f=i.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=i;for(var x=0;x<t.length;x++)if(m.context===t[x]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),ys(s.return,a,e),n||(f=null);break e}s=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=a,s=f.alternate,s!==null&&(s.lanes|=a),ys(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Kn(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var m=i.type;vt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===Xe.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ai):e=[Ai])}i=i.return}e!==null&&bs(t,e,a,n),t.flags|=262144}function fo(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ma=e,hl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Uf(ma,e)}function ho(e,t){return ma===null&&ga(e),Uf(e,t)}function Uf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},hl===null){if(e===null)throw Error(u(308));hl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hl=hl.next=t;return a}var Wb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Jb=l.unstable_scheduleCallback,ex=l.unstable_NormalPriority,Fe={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xs(){return{controller:new Wb,data:new Map,refCount:0}}function Wn(e){e.refCount--,e.refCount===0&&Jb(ex,function(){e.controller.abort()})}var Jn=null,vs=0,Za=0,Ia=null;function tx(e,t){if(Jn===null){var a=Jn=[];vs=0,Za=wc(),Ia={status:"pending",value:void 0,then:function(n){a.push(n)}}}return vs++,t.then(Hf,Hf),t}function Hf(){if(--vs===0&&Jn!==null){Ia!==null&&(Ia.status="fulfilled");var e=Jn;Jn=null,Za=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lx(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var _f=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&tx(e,t),_f!==null&&_f(e,t)};var ya=N(null);function Ss(){var e=ya.current;return e!==null?e:Ee.pooledCache}function po(e,t){t===null?Q(ya,ya.current):Q(ya,t.pool)}function qf(){var e=Ss();return e===null?null:{parent:Fe._currentValue,pool:e}}var ei=Error(u(460)),Gf=Error(u(474)),mo=Error(u(542)),ws={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function go(){}function Qf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(go,go),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vf(e),e;default:if(typeof t.status=="string")t.then(go,go);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vf(e),e}throw ti=t,ei}}var ti=null;function Ff(){if(ti===null)throw Error(u(459));var e=ti;return ti=null,e}function Vf(e){if(e===ei||e===mo)throw Error(u(483))}var kl=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ml(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nl(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=ro(e),Of(e,null,a),t}return oo(e,n,t,a),ro(e)}function li(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ud(e,a)}}function $s(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=f:s=s.next=f,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var As=!1;function ai(){if(As){var e=Ia;if(e!==null)throw e}}function ni(e,t,a,n){As=!1;var i=e.updateQueue;kl=!1;var s=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var x=m,R=x.next;x.next=null,f===null?s=R:f.next=R,f=x;var B=e.alternate;B!==null&&(B=B.updateQueue,m=B.lastBaseUpdate,m!==f&&(m===null?B.firstBaseUpdate=R:m.next=R,B.lastBaseUpdate=x))}if(s!==null){var M=i.baseState;f=0,B=R=x=null,m=s;do{var D=m.lane&-536870913,z=D!==m.lane;if(z?(he&D)===D:(n&D)===D){D!==0&&D===Za&&(As=!0),B!==null&&(B=B.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,ee=m;D=t;var je=a;switch(ee.tag){case 1:if(ne=ee.payload,typeof ne=="function"){M=ne.call(je,M,D);break e}M=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ee.payload,D=typeof ne=="function"?ne.call(je,M,D):ne,D==null)break e;M=v({},M,D);break e;case 2:kl=!0}}D=m.callback,D!==null&&(e.flags|=64,z&&(e.flags|=8192),z=i.callbacks,z===null?i.callbacks=[D]:z.push(D))}else z={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},B===null?(R=B=z,x=M):B=B.next=z,f|=D;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;z=m,m=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);B===null&&(x=M),i.baseState=x,i.firstBaseUpdate=R,i.lastBaseUpdate=B,s===null&&(i.shared.lanes=0),Ql|=f,e.lanes=f,e.memoizedState=M}}function Pf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Xf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pf(a[e],t)}var Ka=N(null),yo=N(0);function Zf(e,t){e=Sl,Q(yo,e),Q(Ka,t),Sl=e|t.baseLanes}function Es(){Q(yo,Sl),Q(Ka,Ka.current)}function Rs(){Sl=yo.current,G(Ka),G(yo)}var Ll=0,re=null,Se=null,Ge=null,bo=!1,Wa=!1,ba=!1,xo=0,ii=0,Ja=null,ax=0;function He(){throw Error(u(321))}function Ds(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function zs(e,t,a,n,i,s){return Ll=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Oh:Bh,ba=!1,s=a(n,i),ba=!1,Wa&&(s=Kf(t,a,n,i)),If(e),s}function If(e){O.H=$o;var t=Se!==null&&Se.next!==null;if(Ll=0,Ge=Se=re=null,bo=!1,ii=0,Ja=null,t)throw Error(u(300));e===null||Ie||(e=e.dependencies,e!==null&&fo(e)&&(Ie=!0))}function Kf(e,t,a,n){re=e;var i=0;do{if(Wa&&(Ja=null),ii=0,Wa=!1,25<=i)throw Error(u(301));if(i+=1,Ge=Se=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=ux,s=t(a,n)}while(Wa);return s}function nx(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?oi(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(re.flags|=1024),t}function Cs(){var e=xo!==0;return xo=0,e}function Os(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bs(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}Ll=0,Ge=Se=re=null,Wa=!1,ii=xo=0,Ja=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ye(){if(Se===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ge===null?re.memoizedState:Ge.next;if(t!==null)Ge=t,Se=e;else{if(e===null)throw re.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(e){var t=ii;return ii+=1,Ja===null&&(Ja=[]),e=Qf(Ja,e,t),t=re,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Oh:Bh),e}function vo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oi(e);if(e.$$typeof===F)return st(e)}throw Error(u(438,String(e)))}function Ms(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ks(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Dt;return t.index++,a}function ml(e,t){return typeof t=="function"?t(e):t}function So(e){var t=Ye();return Ns(t,Se,e)}function Ns(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var f=i.next;i.next=s.next,s.next=f}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var m=f=null,x=null,R=t,B=!1;do{var M=R.lane&-536870913;if(M!==R.lane?(he&M)===M:(Ll&M)===M){var D=R.revertLane;if(D===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),M===Za&&(B=!0);else if((Ll&D)===D){R=R.next,D===Za&&(B=!0);continue}else M={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},x===null?(m=x=M,f=s):x=x.next=M,re.lanes|=D,Ql|=D;M=R.action,ba&&a(s,M),s=R.hasEagerState?R.eagerState:a(s,M)}else D={lane:M,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},x===null?(m=x=D,f=s):x=x.next=D,re.lanes|=M,Ql|=M;R=R.next}while(R!==null&&R!==t);if(x===null?f=s:x.next=m,!vt(s,e.memoizedState)&&(Ie=!0,B&&(a=Ia,a!==null)))throw a;e.memoizedState=s,e.baseState=f,e.baseQueue=x,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ls(e){var t=Ye(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do s=e(s,f.action),f=f.next;while(f!==i);vt(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Wf(e,t,a){var n=re,i=Ye(),s=me;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!vt((Se||i).memoizedState,a);f&&(i.memoizedState=a,Ie=!0),i=i.queue;var m=th.bind(null,n,i,e);if(ri(2048,8,m,[e]),i.getSnapshot!==t||f||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,en(9,wo(),eh.bind(null,n,i,a,t),null),Ee===null)throw Error(u(349));s||(Ll&124)!==0||Jf(n,t,a)}return a}function Jf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=ks(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function eh(e,t,a,n){t.value=a,t.getSnapshot=n,lh(t)&&ah(e)}function th(e,t,a){return a(function(){lh(t)&&ah(e)})}function lh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function ah(e){var t=Fa(e,2);t!==null&&At(t,e,2)}function Us(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),ba){zl(!0);try{a()}finally{zl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:e},t}function nh(e,t,a,n){return e.baseState=a,Ns(e,Se,typeof n=="function"?n:ml)}function ix(e,t,a,n,i){if(To(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){s.listeners.push(f)}};O.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,ih(t,s)):(s.next=a.next,t.pending=a.next=s)}}function ih(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=O.T,f={};O.T=f;try{var m=a(i,n),x=O.S;x!==null&&x(f,m),oh(e,t,m)}catch(R){Hs(e,t,R)}finally{O.T=s}}else try{s=a(i,n),oh(e,t,s)}catch(R){Hs(e,t,R)}}function oh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){rh(e,t,n)},function(n){return Hs(e,t,n)}):rh(e,t,a)}function rh(e,t,a){t.status="fulfilled",t.value=a,sh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ih(e,a)))}function Hs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,sh(t),t=t.next;while(t!==n)}e.action=null}function sh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ch(e,t){return t}function uh(e,t){if(me){var a=Ee.formState;if(a!==null){e:{var n=re;if(me){if(Ne){t:{for(var i=Ne,s=el;i.nodeType!==8;){if(!s){i=null;break t}if(i=Xt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ne=Xt(i.nextSibling),n=i.data==="F!";break e}}pa(n)}n=!1}n&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ch,lastRenderedState:t},a.queue=n,a=Dh.bind(null,re,n),n.dispatch=a,n=Us(!1),s=Qs.bind(null,re,!1,n.queue),n=ht(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=ix.bind(null,re,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function dh(e){var t=Ye();return fh(t,Se,e)}function fh(e,t,a){if(t=Ns(e,t,ch)[0],e=So(ml)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=oi(t)}catch(f){throw f===ei?mo:f}else n=t;t=Ye();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(re.flags|=2048,en(9,wo(),ox.bind(null,i,a),null)),[n,s,e]}function ox(e,t){e.action=t}function hh(e){var t=Ye(),a=Se;if(a!==null)return fh(t,a,e);Ye(),t=t.memoizedState,a=Ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function en(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=re.updateQueue,t===null&&(t=ks(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function wo(){return{destroy:void 0,resource:void 0}}function ph(){return Ye().memoizedState}function jo(e,t,a,n){var i=ht();n=n===void 0?null:n,re.flags|=e,i.memoizedState=en(1|t,wo(),a,n)}function ri(e,t,a,n){var i=Ye();n=n===void 0?null:n;var s=i.memoizedState.inst;Se!==null&&n!==null&&Ds(n,Se.memoizedState.deps)?i.memoizedState=en(t,s,a,n):(re.flags|=e,i.memoizedState=en(1|t,s,a,n))}function mh(e,t){jo(8390656,8,e,t)}function gh(e,t){ri(2048,8,e,t)}function yh(e,t){return ri(4,2,e,t)}function bh(e,t){return ri(4,4,e,t)}function xh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,a){a=a!=null?a.concat([e]):null,ri(4,4,xh.bind(null,t,e),a)}function _s(){}function Sh(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ds(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function wh(e,t){var a=Ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ds(t,n[1]))return n[0];if(n=e(),ba){zl(!0);try{e()}finally{zl(!1)}}return a.memoizedState=[n,t],n}function qs(e,t,a){return a===void 0||(Ll&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=$p(),re.lanes|=e,Ql|=e,a)}function jh(e,t,a,n){return vt(a,t)?a:Ka.current!==null?(e=qs(e,a,n),vt(e,t)||(Ie=!0),e):(Ll&42)===0?(Ie=!0,e.memoizedState=a):(e=$p(),re.lanes|=e,Ql|=e,t)}function Th(e,t,a,n,i){var s=Y.p;Y.p=s!==0&&8>s?s:8;var f=O.T,m={};O.T=m,Qs(e,!1,t,a);try{var x=i(),R=O.S;if(R!==null&&R(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=lx(x,n);si(e,t,B,$t(e))}else si(e,t,n,$t(e))}catch(M){si(e,t,{then:function(){},status:"rejected",reason:M},$t())}finally{Y.p=s,O.T=f}}function rx(){}function Gs(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=$h(e).queue;Th(e,i,t,J,a===null?rx:function(){return Ah(e),a(n)})}function $h(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ah(e){var t=$h(e).next.queue;si(e,t,{},$t())}function Ys(){return st(Ai)}function Eh(){return Ye().memoizedState}function Rh(){return Ye().memoizedState}function sx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$t();e=Ml(a);var n=Nl(t,e,a);n!==null&&(At(n,t,a),li(n,t,a)),t={cache:xs()},e.payload=t;return}t=t.return}}function cx(e,t,a){var n=$t();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},To(e)?zh(t,a):(a=cs(e,t,a,n),a!==null&&(At(a,e,n),Ch(a,t,n)))}function Dh(e,t,a){var n=$t();si(e,t,a,n)}function si(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(To(e))zh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var f=t.lastRenderedState,m=s(f,a);if(i.hasEagerState=!0,i.eagerState=m,vt(m,f))return oo(e,t,i,0),Ee===null&&io(),!1}catch{}finally{}if(a=cs(e,t,i,n),a!==null)return At(a,e,n),Ch(a,t,n),!0}return!1}function Qs(e,t,a,n){if(n={lane:2,revertLane:wc(),action:n,hasEagerState:!1,eagerState:null,next:null},To(e)){if(t)throw Error(u(479))}else t=cs(e,a,n,2),t!==null&&At(t,e,2)}function To(e){var t=e.alternate;return e===re||t!==null&&t===re}function zh(e,t){Wa=bo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ch(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ud(e,a)}}var $o={readContext:st,use:vo,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He},Oh={readContext:st,use:vo,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:mh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,jo(4194308,4,xh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){jo(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var n=e();if(ba){zl(!0);try{e()}finally{zl(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ht();if(a!==void 0){var i=a(t);if(ba){zl(!0);try{a(t)}finally{zl(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=cx.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Us(e);var t=e.queue,a=Dh.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_s,useDeferredValue:function(e,t){var a=ht();return qs(a,e,t)},useTransition:function(){var e=Us(!1);return e=Th.bind(null,re,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=re,i=ht();if(me){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(he&124)!==0||Jf(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,mh(th.bind(null,n,s,e),[e]),n.flags|=2048,en(9,wo(),eh.bind(null,n,s,a,t),null),a},useId:function(){var e=ht(),t=Ee.identifierPrefix;if(me){var a=fl,n=dl;a=(n&~(1<<32-xt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=xo++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=ax++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ys,useFormState:uh,useActionState:uh,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Qs.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ms,useCacheRefresh:function(){return ht().memoizedState=sx.bind(null,re)}},Bh={readContext:st,use:vo,useCallback:Sh,useContext:st,useEffect:gh,useImperativeHandle:vh,useInsertionEffect:yh,useLayoutEffect:bh,useMemo:wh,useReducer:So,useRef:ph,useState:function(){return So(ml)},useDebugValue:_s,useDeferredValue:function(e,t){var a=Ye();return jh(a,Se.memoizedState,e,t)},useTransition:function(){var e=So(ml)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:oi(e),t]},useSyncExternalStore:Wf,useId:Eh,useHostTransitionStatus:Ys,useFormState:dh,useActionState:dh,useOptimistic:function(e,t){var a=Ye();return nh(a,Se,e,t)},useMemoCache:Ms,useCacheRefresh:Rh},ux={readContext:st,use:vo,useCallback:Sh,useContext:st,useEffect:gh,useImperativeHandle:vh,useInsertionEffect:yh,useLayoutEffect:bh,useMemo:wh,useReducer:Ls,useRef:ph,useState:function(){return Ls(ml)},useDebugValue:_s,useDeferredValue:function(e,t){var a=Ye();return Se===null?qs(a,e,t):jh(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ls(ml)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:oi(e),t]},useSyncExternalStore:Wf,useId:Eh,useHostTransitionStatus:Ys,useFormState:hh,useActionState:hh,useOptimistic:function(e,t){var a=Ye();return Se!==null?nh(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:Rh},tn=null,ci=0;function Ao(e){var t=ci;return ci+=1,tn===null&&(tn=[]),Qf(tn,e,t)}function ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Eo(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kh(e){var t=e._init;return t(e._payload)}function Mh(e){function t($,w){if(e){var E=$.deletions;E===null?($.deletions=[w],$.flags|=16):E.push(w)}}function a($,w){if(!e)return null;for(;w!==null;)t($,w),w=w.sibling;return null}function n($){for(var w=new Map;$!==null;)$.key!==null?w.set($.key,$):w.set($.index,$),$=$.sibling;return w}function i($,w){return $=ul($,w),$.index=0,$.sibling=null,$}function s($,w,E){return $.index=E,e?(E=$.alternate,E!==null?(E=E.index,E<w?($.flags|=67108866,w):E):($.flags|=67108866,w)):($.flags|=1048576,w)}function f($){return e&&$.alternate===null&&($.flags|=67108866),$}function m($,w,E,k){return w===null||w.tag!==6?(w=ds(E,$.mode,k),w.return=$,w):(w=i(w,E),w.return=$,w)}function x($,w,E,k){var X=E.type;return X===q?B($,w,E.props.children,k,E.key):w!==null&&(w.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&kh(X)===w.type)?(w=i(w,E.props),ui(w,E),w.return=$,w):(w=so(E.type,E.key,E.props,null,$.mode,k),ui(w,E),w.return=$,w)}function R($,w,E,k){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=fs(E,$.mode,k),w.return=$,w):(w=i(w,E.children||[]),w.return=$,w)}function B($,w,E,k,X){return w===null||w.tag!==7?(w=ua(E,$.mode,k,X),w.return=$,w):(w=i(w,E),w.return=$,w)}function M($,w,E){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=ds(""+w,$.mode,E),w.return=$,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case C:return E=so(w.type,w.key,w.props,null,$.mode,E),ui(E,w),E.return=$,E;case L:return w=fs(w,$.mode,E),w.return=$,w;case Te:var k=w._init;return w=k(w._payload),M($,w,E)}if($e(w)||qe(w))return w=ua(w,$.mode,E,null),w.return=$,w;if(typeof w.then=="function")return M($,Ao(w),E);if(w.$$typeof===F)return M($,ho($,w),E);Eo($,w)}return null}function D($,w,E,k){var X=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return X!==null?null:m($,w,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return E.key===X?x($,w,E,k):null;case L:return E.key===X?R($,w,E,k):null;case Te:return X=E._init,E=X(E._payload),D($,w,E,k)}if($e(E)||qe(E))return X!==null?null:B($,w,E,k,null);if(typeof E.then=="function")return D($,w,Ao(E),k);if(E.$$typeof===F)return D($,w,ho($,E),k);Eo($,E)}return null}function z($,w,E,k,X){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return $=$.get(E)||null,m(w,$,""+k,X);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return $=$.get(k.key===null?E:k.key)||null,x(w,$,k,X);case L:return $=$.get(k.key===null?E:k.key)||null,R(w,$,k,X);case Te:var se=k._init;return k=se(k._payload),z($,w,E,k,X)}if($e(k)||qe(k))return $=$.get(E)||null,B(w,$,k,X,null);if(typeof k.then=="function")return z($,w,E,Ao(k),X);if(k.$$typeof===F)return z($,w,E,ho(w,k),X);Eo(w,k)}return null}function ne($,w,E,k){for(var X=null,se=null,I=w,ae=w=0,We=null;I!==null&&ae<E.length;ae++){I.index>ae?(We=I,I=null):We=I.sibling;var pe=D($,I,E[ae],k);if(pe===null){I===null&&(I=We);break}e&&I&&pe.alternate===null&&t($,I),w=s(pe,w,ae),se===null?X=pe:se.sibling=pe,se=pe,I=We}if(ae===E.length)return a($,I),me&&fa($,ae),X;if(I===null){for(;ae<E.length;ae++)I=M($,E[ae],k),I!==null&&(w=s(I,w,ae),se===null?X=I:se.sibling=I,se=I);return me&&fa($,ae),X}for(I=n(I);ae<E.length;ae++)We=z(I,$,ae,E[ae],k),We!==null&&(e&&We.alternate!==null&&I.delete(We.key===null?ae:We.key),w=s(We,w,ae),se===null?X=We:se.sibling=We,se=We);return e&&I.forEach(function(Jl){return t($,Jl)}),me&&fa($,ae),X}function ee($,w,E,k){if(E==null)throw Error(u(151));for(var X=null,se=null,I=w,ae=w=0,We=null,pe=E.next();I!==null&&!pe.done;ae++,pe=E.next()){I.index>ae?(We=I,I=null):We=I.sibling;var Jl=D($,I,pe.value,k);if(Jl===null){I===null&&(I=We);break}e&&I&&Jl.alternate===null&&t($,I),w=s(Jl,w,ae),se===null?X=Jl:se.sibling=Jl,se=Jl,I=We}if(pe.done)return a($,I),me&&fa($,ae),X;if(I===null){for(;!pe.done;ae++,pe=E.next())pe=M($,pe.value,k),pe!==null&&(w=s(pe,w,ae),se===null?X=pe:se.sibling=pe,se=pe);return me&&fa($,ae),X}for(I=n(I);!pe.done;ae++,pe=E.next())pe=z(I,$,ae,pe.value,k),pe!==null&&(e&&pe.alternate!==null&&I.delete(pe.key===null?ae:pe.key),w=s(pe,w,ae),se===null?X=pe:se.sibling=pe,se=pe);return e&&I.forEach(function(d0){return t($,d0)}),me&&fa($,ae),X}function je($,w,E,k){if(typeof E=="object"&&E!==null&&E.type===q&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case C:e:{for(var X=E.key;w!==null;){if(w.key===X){if(X=E.type,X===q){if(w.tag===7){a($,w.sibling),k=i(w,E.props.children),k.return=$,$=k;break e}}else if(w.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&kh(X)===w.type){a($,w.sibling),k=i(w,E.props),ui(k,E),k.return=$,$=k;break e}a($,w);break}else t($,w);w=w.sibling}E.type===q?(k=ua(E.props.children,$.mode,k,E.key),k.return=$,$=k):(k=so(E.type,E.key,E.props,null,$.mode,k),ui(k,E),k.return=$,$=k)}return f($);case L:e:{for(X=E.key;w!==null;){if(w.key===X)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){a($,w.sibling),k=i(w,E.children||[]),k.return=$,$=k;break e}else{a($,w);break}else t($,w);w=w.sibling}k=fs(E,$.mode,k),k.return=$,$=k}return f($);case Te:return X=E._init,E=X(E._payload),je($,w,E,k)}if($e(E))return ne($,w,E,k);if(qe(E)){if(X=qe(E),typeof X!="function")throw Error(u(150));return E=X.call(E),ee($,w,E,k)}if(typeof E.then=="function")return je($,w,Ao(E),k);if(E.$$typeof===F)return je($,w,ho($,E),k);Eo($,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,w!==null&&w.tag===6?(a($,w.sibling),k=i(w,E),k.return=$,$=k):(a($,w),k=ds(E,$.mode,k),k.return=$,$=k),f($)):a($,w)}return function($,w,E,k){try{ci=0;var X=je($,w,E,k);return tn=null,X}catch(I){if(I===ei||I===mo)throw I;var se=St(29,I,null,$.mode);return se.lanes=k,se.return=$,se}finally{}}}var ln=Mh(!0),Nh=Mh(!1),Ht=N(null),tl=null;function Ul(e){var t=e.alternate;Q(Ve,Ve.current&1),Q(Ht,e),tl===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(tl=e)}function Lh(e){if(e.tag===22){if(Q(Ve,Ve.current),Q(Ht,e),tl===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(tl=e)}}else Hl()}function Hl(){Q(Ve,Ve.current),Q(Ht,Ht.current)}function gl(e){G(Ht),tl===e&&(tl=null),G(Ve)}var Ve=N(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||kc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=$t(),i=Ml(n);i.payload=t,a!=null&&(i.callback=a),t=Nl(e,i,n),t!==null&&(At(t,e,n),li(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=$t(),i=Ml(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Nl(e,i,n),t!==null&&(At(t,e,n),li(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$t(),n=Ml(a);n.tag=2,t!=null&&(n.callback=t),t=Nl(e,n,a),t!==null&&(At(t,e,a),li(t,e,a))}};function Uh(e,t,a,n,i,s,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,f):t.prototype&&t.prototype.isPureReactComponent?!Vn(a,n)||!Vn(i,s):!0}function Hh(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function xa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Do=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _h(e){Do(e)}function qh(e){console.error(e)}function Gh(e){Do(e)}function zo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Yh(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ps(e,t,a){return a=Ml(a),a.tag=3,a.payload={element:null},a.callback=function(){zo(e,t)},a}function Qh(e){return e=Ml(e),e.tag=3,e}function Fh(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Yh(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Yh(t,a,n),typeof i!="function"&&(Fl===null?Fl=new Set([this]):Fl.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function dx(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Kn(t,a,i,!0),a=Ht.current,a!==null){switch(a.tag){case 13:return tl===null?yc():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===ws?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),xc(e,n,i)),!1;case 22:return a.flags|=65536,n===ws?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),xc(e,n,i)),!1}throw Error(u(435,a.tag))}return xc(e,n,i),yc(),!1}if(me)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==ms&&(e=Error(u(422),{cause:n}),In(Mt(e,a)))):(n!==ms&&(t=Error(u(423),{cause:n}),In(Mt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Mt(n,a),i=Ps(e.stateNode,n,i),$s(e,i),Le!==4&&(Le=2)),!1;var s=Error(u(520),{cause:n});if(s=Mt(s,a),yi===null?yi=[s]:yi.push(s),Le!==4&&(Le=2),t===null)return!0;n=Mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Ps(a.stateNode,n,e),$s(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Fl===null||!Fl.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Qh(i),Fh(i,e,a,n),$s(a,i),!1}a=a.return}while(a!==null);return!1}var Vh=Error(u(461)),Ie=!1;function at(e,t,a,n){t.child=e===null?Nh(t,null,a,n):ln(t,e.child,a,n)}function Ph(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var f={};for(var m in n)m!=="ref"&&(f[m]=n[m])}else f=n;return ga(t),n=zs(e,t,a,f,s,i),m=Cs(),e!==null&&!Ie?(Os(e,t,i),yl(e,t,i)):(me&&m&&hs(t),t.flags|=1,at(e,t,n,i),t.child)}function Xh(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!us(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Zh(e,t,s,n,i)):(e=so(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!tc(e,i)){var f=s.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(f,n)&&e.ref===t.ref)return yl(e,t,i)}return t.flags|=1,e=ul(s,n),e.ref=t.ref,e.return=t,t.child=e}function Zh(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(Vn(s,n)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=n=s,tc(e,i))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,yl(e,t,i)}return Xs(e,t,a,n,i)}function Ih(e,t,a){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=s!==null?s.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~n}else t.childLanes=0,t.child=null;return Kh(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&po(t,s!==null?s.cachePool:null),s!==null?Zf(t,s):Es(),Lh(t);else return t.lanes=t.childLanes=536870912,Kh(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(po(t,s.cachePool),Zf(t,s),Hl(),t.memoizedState=null):(e!==null&&po(t,null),Es(),Hl());return at(e,t,i,a),t.child}function Kh(e,t,a,n){var i=Ss();return i=i===null?null:{parent:Fe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&po(t,null),Es(),Lh(t),e!==null&&Kn(e,t,n,!0),null}function Co(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xs(e,t,a,n,i){return ga(t),a=zs(e,t,a,n,void 0,i),n=Cs(),e!==null&&!Ie?(Os(e,t,i),yl(e,t,i)):(me&&n&&hs(t),t.flags|=1,at(e,t,a,i),t.child)}function Wh(e,t,a,n,i,s){return ga(t),t.updateQueue=null,a=Kf(t,n,a,i),If(e),n=Cs(),e!==null&&!Ie?(Os(e,t,s),yl(e,t,s)):(me&&n&&hs(t),t.flags|=1,at(e,t,a,s),t.child)}function Jh(e,t,a,n,i){if(ga(t),t.stateNode===null){var s=Va,f=a.contextType;typeof f=="object"&&f!==null&&(s=st(f)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vs,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},js(t),f=a.contextType,s.context=typeof f=="object"&&f!==null?st(f):Va,s.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Fs(t,a,f,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(f=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),f!==s.state&&Vs.enqueueReplaceState(s,s.state,null),ni(t,n,s,i),ai(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,x=xa(a,m);s.props=x;var R=s.context,B=a.contextType;f=Va,typeof B=="object"&&B!==null&&(f=st(B));var M=a.getDerivedStateFromProps;B=typeof M=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,B||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||R!==f)&&Hh(t,s,n,f),kl=!1;var D=t.memoizedState;s.state=D,ni(t,n,s,i),ai(),R=t.memoizedState,m||D!==R||kl?(typeof M=="function"&&(Fs(t,a,M,n),R=t.memoizedState),(x=kl||Uh(t,a,x,n,D,R,f))?(B||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),s.props=n,s.state=R,s.context=f,n=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Ts(e,t),f=t.memoizedProps,B=xa(a,f),s.props=B,M=t.pendingProps,D=s.context,R=a.contextType,x=Va,typeof R=="object"&&R!==null&&(x=st(R)),m=a.getDerivedStateFromProps,(R=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==M||D!==x)&&Hh(t,s,n,x),kl=!1,D=t.memoizedState,s.state=D,ni(t,n,s,i),ai();var z=t.memoizedState;f!==M||D!==z||kl||e!==null&&e.dependencies!==null&&fo(e.dependencies)?(typeof m=="function"&&(Fs(t,a,m,n),z=t.memoizedState),(B=kl||Uh(t,a,B,n,D,z,x)||e!==null&&e.dependencies!==null&&fo(e.dependencies))?(R||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,z,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,z,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=z),s.props=n,s.state=z,s.context=x,n=B):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Co(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,a,i)):at(e,t,a,i),t.memoizedState=s.state,e=t.child):e=yl(e,t,i),e}function ep(e,t,a,n){return Zn(),t.flags|=256,at(e,t,a,n),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Is(e){return{baseLanes:e,cachePool:qf()}}function Ks(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function tp(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?Ul(t):Hl(),me){var m=Ne,x;if(x=m){e:{for(x=m,m=el;x.nodeType!==8;){if(!m){m=null;break e}if(x=Xt(x.nextSibling),x===null){m=null;break e}}m=x}m!==null?(t.memoizedState={dehydrated:m,treeContext:da!==null?{id:dl,overflow:fl}:null,retryLane:536870912,hydrationErrors:null},x=St(18,null,null,0),x.stateNode=m,x.return=t,t.child=x,ut=t,Ne=null,x=!0):x=!1}x||pa(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return kc(m)?t.lanes=32:t.lanes=536870912,null;gl(t)}return m=n.children,n=n.fallback,i?(Hl(),i=t.mode,m=Oo({mode:"hidden",children:m},i),n=ua(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=Is(a),i.childLanes=Ks(e,f,a),t.memoizedState=Zs,n):(Ul(t),Ws(t,m))}if(x=e.memoizedState,x!==null&&(m=x.dehydrated,m!==null)){if(s)t.flags&256?(Ul(t),t.flags&=-257,t=Js(e,t,a)):t.memoizedState!==null?(Hl(),t.child=e.child,t.flags|=128,t=null):(Hl(),i=n.fallback,m=t.mode,n=Oo({mode:"visible",children:n.children},m),i=ua(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,ln(t,e.child,null,a),n=t.child,n.memoizedState=Is(a),n.childLanes=Ks(e,f,a),t.memoizedState=Zs,t=i);else if(Ul(t),kc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var R=f.dgst;f=R,n=Error(u(419)),n.stack="",n.digest=f,In({value:n,source:null,stack:null}),t=Js(e,t,a)}else if(Ie||Kn(e,t,a,!1),f=(a&e.childLanes)!==0,Ie||f){if(f=Ee,f!==null&&(n=a&-a,n=(n&42)!==0?1:Mr(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==x.retryLane))throw x.retryLane=n,Fa(e,n),At(f,e,n),Vh;m.data==="$?"||yc(),t=Js(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ne=Xt(m.nextSibling),ut=t,me=!0,ha=null,el=!1,e!==null&&(Lt[Ut++]=dl,Lt[Ut++]=fl,Lt[Ut++]=da,dl=e.id,fl=e.overflow,da=t),t=Ws(t,n.children),t.flags|=4096);return t}return i?(Hl(),i=n.fallback,m=t.mode,x=e.child,R=x.sibling,n=ul(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,R!==null?i=ul(R,i):(i=ua(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=Is(a):(x=m.cachePool,x!==null?(R=Fe._currentValue,x=x.parent!==R?{parent:R,pool:R}:x):x=qf(),m={baseLanes:m.baseLanes|a,cachePool:x}),i.memoizedState=m,i.childLanes=Ks(e,f,a),t.memoizedState=Zs,n):(Ul(t),a=e.child,e=a.sibling,a=ul(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Ws(e,t){return t=Oo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oo(e,t){return e=St(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Js(e,t,a){return ln(t,e.child,null,a),e=Ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lp(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ys(e.return,t,a)}function ec(e,t,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function ap(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(at(e,t,n.children,a),n=Ve.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lp(e,a,t);else if(e.tag===19)lp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Q(Ve,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Ro(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ec(t,!1,i,a,s);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ec(t,!0,a,null,s);break;case"together":ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yl(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ql|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=ul(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ul(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fo(e)))}function fx(e,t,a){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Bl(t,Fe,e.memoizedState.cache),Zn();break;case 27:case 5:na(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Bl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ul(t),t.flags|=128,null):(a&t.child.childLanes)!==0?tp(e,t,a):(Ul(t),e=yl(e,t,a),e!==null?e.sibling:null);Ul(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Kn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return ap(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Ve,Ve.current),n)break;return null;case 22:case 23:return t.lanes=0,Ih(e,t,a);case 24:Bl(t,Fe,e.memoizedState.cache)}return yl(e,t,a)}function np(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!tc(e,a)&&(t.flags&128)===0)return Ie=!1,fx(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,me&&(t.flags&1048576)!==0&&kf(t,uo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")us(n)?(e=xa(n,e),t.tag=1,t=Jh(null,t,n,e,a)):(t.tag=0,t=Xs(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===te){t.tag=11,t=Ph(null,t,n,e,a);break e}else if(i===Z){t.tag=14,t=Xh(null,t,n,e,a);break e}}throw t=Ct(n)||n,Error(u(306,t,""))}}return t;case 0:return Xs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=xa(n,t.pendingProps),Jh(e,t,n,i,a);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,Ts(e,t),ni(t,n,null,a);var f=t.memoizedState;if(n=f.cache,Bl(t,Fe,n),n!==s.cache&&bs(t,[Fe],a,!0),ai(),n=f.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=ep(e,t,n,a);break e}else if(n!==i){i=Mt(Error(u(424)),t),In(i),t=ep(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Xt(e.firstChild),ut=t,me=!0,ha=null,el=!0,a=Nh(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zn(),n===i){t=yl(e,t,a);break e}at(e,t,n,a)}t=t.child}return t;case 26:return Co(e,t),e===null?(a=sm(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,n=Vo(le.current).createElement(a),n[rt]=t,n[dt]=e,it(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=sm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return na(t),e===null&&me&&(n=t.stateNode=im(t.type,t.pendingProps,le.current),ut=t,el=!0,i=Ne,Xl(t.type)?(Mc=i,Ne=Xt(n.firstChild)):Ne=i),at(e,t,t.pendingProps.children,a),Co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=n=Ne)&&(n=_x(n,t.type,t.pendingProps,el),n!==null?(t.stateNode=n,ut=t,Ne=Xt(n.firstChild),el=!1,i=!0):i=!1),i||pa(t)),na(t),i=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,n=s.children,Cc(i,s)?n=null:f!==null&&Cc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=zs(e,t,nx,null,null,a),Ai._currentValue=i),Co(e,t),at(e,t,n,a),t.child;case 6:return e===null&&me&&((e=a=Ne)&&(a=qx(a,t.pendingProps,el),a!==null?(t.stateNode=a,ut=t,Ne=null,e=!0):e=!1),e||pa(t)),null;case 13:return tp(e,t,a);case 4:return ge(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ln(t,null,n,a):at(e,t,n,a),t.child;case 11:return Ph(e,t,t.type,t.pendingProps,a);case 7:return at(e,t,t.pendingProps,a),t.child;case 8:return at(e,t,t.pendingProps.children,a),t.child;case 12:return at(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Bl(t,t.type,n.value),at(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,ga(t),i=st(i),n=n(i),t.flags|=1,at(e,t,n,a),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,a);case 15:return Zh(e,t,t.type,t.pendingProps,a);case 19:return ap(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Oo(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=ul(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Ih(e,t,a);case 24:return ga(t),n=st(Fe),e===null?(i=Ss(),i===null&&(i=Ee,s=xs(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},js(t),Bl(t,Fe,i)):((e.lanes&a)!==0&&(Ts(e,t),ni(t,null,null,a),ai()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Bl(t,Fe,n)):(n=s.cache,Bl(t,Fe,n),n!==i.cache&&bs(t,[Fe],a,!0))),at(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function bl(e){e.flags|=4}function ip(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(t)){if(t=Ht.current,t!==null&&((he&4194048)===he?tl!==null:(he&62914560)!==he&&(he&536870912)===0||t!==tl))throw ti=ws,Gf;e.flags|=8192}}function Bo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nd():536870912,e.lanes|=t,rn|=t)}function di(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function hx(e,t,a){var n=t.pendingProps;switch(ps(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pl(Fe),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xn(t)?bl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lf())),Be(t),null;case 26:return a=t.memoizedState,e===null?(bl(t),a!==null?(Be(t),ip(t,a)):(Be(t),t.flags&=-16777217)):a?a!==e.memoizedState?(bl(t),Be(t),ip(t,a)):(Be(t),t.flags&=-16777217):(e.memoizedProps!==n&&bl(t),Be(t),t.flags&=-16777217),null;case 27:rl(t),a=le.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&bl(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Be(t),null}e=K.current,Xn(t)?Mf(t):(e=im(i,n,a),t.stateNode=e,bl(t))}return Be(t),null;case 5:if(rl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&bl(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(e=K.current,Xn(t))Mf(t);else{switch(i=Vo(le.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[rt]=t,e[dt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(it(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&bl(t)}}return Be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&bl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,Xn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ut,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[rt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Wp(e.nodeValue,a)),e||pa(t)}else e=Vo(e).createTextNode(n),e[rt]=t,t.stateNode=e}return Be(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Xn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[rt]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=Lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(gl(t),t):(gl(t),null)}if(gl(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var s=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Bo(t,t.updateQueue),Be(t),null;case 4:return ot(),e===null&&Ac(t.stateNode.containerInfo),Be(t),null;case 10:return pl(t.type),Be(t),null;case 19:if(G(Ve),i=t.memoizedState,i===null)return Be(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)di(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ro(e),s!==null){for(t.flags|=128,di(i,!1),e=s.updateQueue,t.updateQueue=e,Bo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Bf(a,e),a=a.sibling;return Q(Ve,Ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Jt()>No&&(t.flags|=128,n=!0,di(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ro(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Bo(t,e),di(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!me)return Be(t),null}else 2*Jt()-i.renderingStartTime>No&&a!==536870912&&(t.flags|=128,n=!0,di(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Jt(),t.sibling=null,e=Ve.current,Q(Ve,n?e&1|2:e&1),t):(Be(t),null);case 22:case 23:return gl(t),Rs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),a=t.updateQueue,a!==null&&Bo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&G(ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pl(Fe),Be(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function px(e,t){switch(ps(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pl(Fe),ot(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rl(t),null;case 13:if(gl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ve),null;case 4:return ot(),null;case 10:return pl(t.type),null;case 22:case 23:return gl(t),Rs(),e!==null&&G(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pl(Fe),null;case 25:return null;default:return null}}function op(e,t){switch(ps(t),t.tag){case 3:pl(Fe),ot();break;case 26:case 27:case 5:rl(t);break;case 4:ot();break;case 13:gl(t);break;case 19:G(Ve);break;case 10:pl(t.type);break;case 22:case 23:gl(t),Rs(),e!==null&&G(ya);break;case 24:pl(Fe)}}function fi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,f=a.inst;n=s(),f.destroy=n}a=a.next}while(a!==i)}}catch(m){Ae(t,t.return,m)}}function _l(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var f=n.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var x=a,R=m;try{R()}catch(B){Ae(i,x,B)}}}n=n.next}while(n!==s)}}catch(B){Ae(t,t.return,B)}}function rp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xf(t,a)}catch(n){Ae(e,e.return,n)}}}function sp(e,t,a){a.props=xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function hi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ae(e,t,i)}}function ll(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ae(e,t,i)}else a.current=null}function cp(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ae(e,e.return,i)}}function lc(e,t,a){try{var n=e.stateNode;Mx(n,e.type,a,t),n[dt]=t}catch(i){Ae(e,e.return,i)}}function up(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xl(e.type)||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Fo));else if(n!==4&&(n===27&&Xl(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,a),e=e.sibling;e!==null;)nc(e,t,a),e=e.sibling}function ko(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Xl(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ko(e,t,a),e=e.sibling;e!==null;)ko(e,t,a),e=e.sibling}function dp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t,n,a),t[rt]=e,t[dt]=a}catch(s){Ae(e,e.return,s)}}var xl=!1,_e=!1,ic=!1,fp=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function mx(e,t){if(e=e.containerInfo,Dc=Wo,e=jf(e),as(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var f=0,m=-1,x=-1,R=0,B=0,M=e,D=null;t:for(;;){for(var z;M!==a||i!==0&&M.nodeType!==3||(m=f+i),M!==s||n!==0&&M.nodeType!==3||(x=f+n),M.nodeType===3&&(f+=M.nodeValue.length),(z=M.firstChild)!==null;)D=M,M=z;for(;;){if(M===e)break t;if(D===a&&++R===i&&(m=f),D===s&&++B===n&&(x=f),(z=M.nextSibling)!==null)break;M=D,D=M.parentNode}M=z}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:e,selectionRange:a},Wo=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var ne=xa(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ne,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ae(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function hp(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ql(e,a),n&4&&fi(5,a);break;case 1:if(ql(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ae(a,a.return,f)}else{var i=xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ae(a,a.return,f)}}n&64&&rp(a),n&512&&hi(a,a.return);break;case 3:if(ql(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xf(e,t)}catch(f){Ae(a,a.return,f)}}break;case 27:t===null&&n&4&&dp(a);case 26:case 5:ql(e,a),t===null&&n&4&&cp(a),n&512&&hi(a,a.return);break;case 12:ql(e,a);break;case 13:ql(e,a),n&4&&gp(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Tx.bind(null,a),Gx(e,a))));break;case 22:if(n=a.memoizedState!==null||xl,!n){t=t!==null&&t.memoizedState!==null||_e,i=xl;var s=_e;xl=n,(_e=t)&&!s?Gl(e,a,(a.subtreeFlags&8772)!==0):ql(e,a),xl=i,_e=s}break;case 30:break;default:ql(e,a)}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ur(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,pt=!1;function vl(e,t,a){for(a=a.child;a!==null;)mp(e,t,a),a=a.sibling}function mp(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(kn,a)}catch{}switch(a.tag){case 26:_e||ll(a,t),vl(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||ll(a,t);var n=ze,i=pt;Xl(a.type)&&(ze=a.stateNode,pt=!1),vl(e,t,a),wi(a.stateNode),ze=n,pt=i;break;case 5:_e||ll(a,t);case 6:if(n=ze,i=pt,ze=null,vl(e,t,a),ze=n,pt=i,ze!==null)if(pt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(s){Ae(a,t,s)}else try{ze.removeChild(a.stateNode)}catch(s){Ae(a,t,s)}break;case 18:ze!==null&&(pt?(e=ze,am(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zi(e)):am(ze,a.stateNode));break;case 4:n=ze,i=pt,ze=a.stateNode.containerInfo,pt=!0,vl(e,t,a),ze=n,pt=i;break;case 0:case 11:case 14:case 15:_e||_l(2,a,t),_e||_l(4,a,t),vl(e,t,a);break;case 1:_e||(ll(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&sp(a,t,n)),vl(e,t,a);break;case 21:vl(e,t,a);break;case 22:_e=(n=_e)||a.memoizedState!==null,vl(e,t,a),_e=n;break;default:vl(e,t,a)}}function gp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zi(e)}catch(a){Ae(t,t.return,a)}}function gx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fp),t;default:throw Error(u(435,e.tag))}}function oc(e,t){var a=gx(e);t.forEach(function(n){var i=$x.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function wt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Xl(m.type)){ze=m.stateNode,pt=!1;break e}break;case 5:ze=m.stateNode,pt=!1;break e;case 3:case 4:ze=m.stateNode.containerInfo,pt=!0;break e}m=m.return}if(ze===null)throw Error(u(160));mp(s,f,i),ze=null,pt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}var Pt=null;function yp(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(t,e),jt(e),n&4&&(_l(3,e,e.return),fi(3,e),_l(5,e,e.return));break;case 1:wt(t,e),jt(e),n&512&&(_e||a===null||ll(a,a.return)),n&64&&xl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Pt;if(wt(t,e),jt(e),n&512&&(_e||a===null||ll(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Ln]||s[rt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),it(s,n,a),s[rt]=e,Ze(s),n=s;break e;case"link":var f=dm("link","href",i).get(n+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(s=f[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}s=i.createElement(n),it(s,n,a),i.head.appendChild(s);break;case"meta":if(f=dm("meta","content",i).get(n+(a.content||""))){for(m=0;m<f.length;m++)if(s=f[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}s=i.createElement(n),it(s,n,a),i.head.appendChild(s);break;default:throw Error(u(468,n))}s[rt]=e,Ze(s),n=s}e.stateNode=n}else fm(i,e.type,e.stateNode);else e.stateNode=um(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?fm(i,e.type,e.stateNode):um(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:wt(t,e),jt(e),n&512&&(_e||a===null||ll(a,a.return)),a!==null&&n&4&&lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(wt(t,e),jt(e),n&512&&(_e||a===null||ll(a,a.return)),e.flags&32){i=e.stateNode;try{Ua(i,"")}catch(z){Ae(e,e.return,z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,lc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ic=!0);break;case 6:if(wt(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(z){Ae(e,e.return,z)}}break;case 3:if(Zo=null,i=Pt,Pt=Po(t.containerInfo),wt(t,e),Pt=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(z){Ae(e,e.return,z)}ic&&(ic=!1,bp(e));break;case 4:n=Pt,Pt=Po(e.stateNode.containerInfo),wt(t,e),jt(e),Pt=n;break;case 12:wt(t,e),jt(e);break;case 13:wt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fc=Jt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,oc(e,n)));break;case 22:i=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,R=xl,B=_e;if(xl=R||i,_e=B||x,wt(t,e),_e=B,xl=R,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||x||xl||_e||va(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(s=x.stateNode,i)f=s.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=x.stateNode;var M=x.memoizedProps.style,D=M!=null&&M.hasOwnProperty("display")?M.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(z){Ae(x,x.return,z)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(z){Ae(x,x.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,oc(e,a))));break;case 19:wt(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,oc(e,n)));break;case 30:break;case 21:break;default:wt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(up(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,s=ac(e);ko(e,s,i);break;case 5:var f=a.stateNode;a.flags&32&&(Ua(f,""),a.flags&=-33);var m=ac(e);ko(e,m,f);break;case 3:case 4:var x=a.stateNode.containerInfo,R=ac(e);nc(e,R,x);break;default:throw Error(u(161))}}catch(B){Ae(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ql(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hp(e,t.alternate,t),t=t.sibling}function va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_l(4,t,t.return),va(t);break;case 1:ll(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sp(t,t.return,a),va(t);break;case 27:wi(t.stateNode);case 26:case 5:ll(t,t.return),va(t);break;case 22:t.memoizedState===null&&va(t);break;case 30:va(t);break;default:va(t)}e=e.sibling}}function Gl(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,f=s.flags;switch(s.tag){case 0:case 11:case 15:Gl(i,s,a),fi(4,s);break;case 1:if(Gl(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ae(n,n.return,R)}if(n=s,i=n.updateQueue,i!==null){var m=n.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)Pf(x[i],m)}catch(R){Ae(n,n.return,R)}}a&&f&64&&rp(s),hi(s,s.return);break;case 27:dp(s);case 26:case 5:Gl(i,s,a),a&&n===null&&f&4&&cp(s),hi(s,s.return);break;case 12:Gl(i,s,a);break;case 13:Gl(i,s,a),a&&f&4&&gp(i,s);break;case 22:s.memoizedState===null&&Gl(i,s,a),hi(s,s.return);break;case 30:break;default:Gl(i,s,a)}t=t.sibling}}function rc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wn(a))}function sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wn(e))}function al(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xp(e,t,a,n),t=t.sibling}function xp(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:al(e,t,a,n),i&2048&&fi(9,t);break;case 1:al(e,t,a,n);break;case 3:al(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wn(e)));break;case 12:if(i&2048){al(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,f=s.id,m=s.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ae(t,t.return,x)}}else al(e,t,a,n);break;case 13:al(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,f=t.alternate,t.memoizedState!==null?s._visibility&2?al(e,t,a,n):pi(e,t):s._visibility&2?al(e,t,a,n):(s._visibility|=2,an(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&rc(f,t);break;case 24:al(e,t,a,n),i&2048&&sc(t.alternate,t);break;default:al(e,t,a,n)}}function an(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,f=t,m=a,x=n,R=f.flags;switch(f.tag){case 0:case 11:case 15:an(s,f,m,x,i),fi(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?an(s,f,m,x,i):pi(s,f):(B._visibility|=2,an(s,f,m,x,i)),i&&R&2048&&rc(f.alternate,f);break;case 24:an(s,f,m,x,i),i&&R&2048&&sc(f.alternate,f);break;default:an(s,f,m,x,i)}t=t.sibling}}function pi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:pi(a,n),i&2048&&rc(n.alternate,n);break;case 24:pi(a,n),i&2048&&sc(n.alternate,n);break;default:pi(a,n)}t=t.sibling}}var mi=8192;function nn(e){if(e.subtreeFlags&mi)for(e=e.child;e!==null;)vp(e),e=e.sibling}function vp(e){switch(e.tag){case 26:nn(e),e.flags&mi&&e.memoizedState!==null&&t0(Pt,e.memoizedState,e.memoizedProps);break;case 5:nn(e);break;case 3:case 4:var t=Pt;Pt=Po(e.stateNode.containerInfo),nn(e),Pt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=mi,mi=16777216,nn(e),mi=t):nn(e));break;default:nn(e)}}function Sp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,jp(n,e)}Sp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 0:case 11:case 15:gi(e),e.flags&2048&&_l(9,e,e.return);break;case 3:gi(e);break;case 12:gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mo(e)):gi(e);break;default:gi(e)}}function Mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,jp(n,e)}Sp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_l(8,t,t.return),Mo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mo(t));break;default:Mo(t)}e=e.sibling}}function jp(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:_l(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Wn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var i=n.sibling,s=n.return;if(pp(n),n===a){Ke=null;break e}if(i!==null){i.return=s,Ke=i;break e}Ke=s}}}var yx={getCacheForType:function(e){var t=st(Fe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},bx=typeof WeakMap=="function"?WeakMap:Map,xe=0,Ee=null,de=null,he=0,ve=0,Tt=null,Yl=!1,on=!1,cc=!1,Sl=0,Le=0,Ql=0,Sa=0,uc=0,_t=0,rn=0,yi=null,mt=null,dc=!1,fc=0,No=1/0,Lo=null,Fl=null,nt=0,Vl=null,sn=null,cn=0,hc=0,pc=null,Tp=null,bi=0,mc=null;function $t(){if((xe&2)!==0&&he!==0)return he&-he;if(O.T!==null){var e=Za;return e!==0?e:wc()}return Hd()}function $p(){_t===0&&(_t=(he&536870912)===0||me?Md():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),_t}function At(e,t,a){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(un(e,0),Pl(e,he,_t,!1)),Nn(e,a),((xe&2)===0||e!==Ee)&&(e===Ee&&((xe&2)===0&&(Sa|=a),Le===4&&Pl(e,he,_t,!1)),nl(e))}function Ap(e,t,a){if((xe&6)!==0)throw Error(u(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Mn(e,t),i=n?Sx(e,t):bc(e,t,!0),s=n;do{if(i===0){on&&!n&&Pl(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!xx(a)){i=bc(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=yi;var x=m.current.memoizedState.isDehydrated;if(x&&(un(m,f).flags|=256),f=bc(m,f,!1),f!==2){if(cc&&!x){m.errorRecoveryDisabledLanes|=s,Sa|=s,i=4;break e}s=mt,mt=i,s!==null&&(mt===null?mt=s:mt.push.apply(mt,s))}i=f}if(s=!1,i!==2)continue}}if(i===1){un(e,0),Pl(e,t,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Pl(n,t,_t,!Yl);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=fc+300-Jt(),10<i)){if(Pl(n,t,_t,!Yl),Pi(n,0,!0)!==0)break e;n.timeoutHandle=tm(Ep.bind(null,n,a,mt,Lo,dc,t,_t,Sa,rn,Yl,s,2,-0,0),i);break e}Ep(n,a,mt,Lo,dc,t,_t,Sa,rn,Yl,s,0,-0,0)}}break}while(!0);nl(e)}function Ep(e,t,a,n,i,s,f,m,x,R,B,M,D,z){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&($i={stylesheets:null,count:0,unsuspend:e0},vp(t),M=l0(),M!==null)){e.cancelPendingCommit=M(kp.bind(null,e,t,s,a,n,i,f,m,x,B,1,D,z)),Pl(e,s,f,!R);return}kp(e,t,s,a,n,i,f,m,x)}function xx(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pl(e,t,a,n){t&=~uc,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-xt(i),f=1<<s;n[s]=-1,i&=~f}a!==0&&Ld(e,a,t)}function Uo(){return(xe&6)===0?(xi(0),!1):!0}function gc(){if(de!==null){if(ve===0)var e=de.return;else e=de,hl=ma=null,Bs(e),tn=null,ci=0,e=de;for(;e!==null;)op(e.alternate,e),e=e.return;de=null}}function un(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Lx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),gc(),Ee=e,de=a=ul(e.current,null),he=t,ve=0,Tt=null,Yl=!1,on=Mn(e,t),cc=!1,rn=_t=uc=Sa=Ql=Le=0,mt=yi=null,dc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-xt(n),s=1<<i;t|=e[i],n&=~s}return Sl=t,io(),a}function Rp(e,t){re=null,O.H=$o,t===ei||t===mo?(t=Ff(),ve=3):t===Gf?(t=Ff(),ve=4):ve=t===Vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,de===null&&(Le=1,zo(e,Mt(t,e.current)))}function Dp(){var e=O.H;return O.H=$o,e===null?$o:e}function zp(){var e=O.A;return O.A=yx,e}function yc(){Le=4,Yl||(he&4194048)!==he&&Ht.current!==null||(on=!0),(Ql&134217727)===0&&(Sa&134217727)===0||Ee===null||Pl(Ee,he,_t,!1)}function bc(e,t,a){var n=xe;xe|=2;var i=Dp(),s=zp();(Ee!==e||he!==t)&&(Lo=null,un(e,t)),t=!1;var f=Le;e:do try{if(ve!==0&&de!==null){var m=de,x=Tt;switch(ve){case 8:gc(),f=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var R=ve;if(ve=0,Tt=null,dn(e,m,x,R),a&&on){f=0;break e}break;default:R=ve,ve=0,Tt=null,dn(e,m,x,R)}}vx(),f=Le;break}catch(B){Rp(e,B)}while(!0);return t&&e.shellSuspendCounter++,hl=ma=null,xe=n,O.H=i,O.A=s,de===null&&(Ee=null,he=0,io()),f}function vx(){for(;de!==null;)Cp(de)}function Sx(e,t){var a=xe;xe|=2;var n=Dp(),i=zp();Ee!==e||he!==t?(Lo=null,No=Jt()+500,un(e,t)):on=Mn(e,t);e:do try{if(ve!==0&&de!==null){t=de;var s=Tt;t:switch(ve){case 1:ve=0,Tt=null,dn(e,t,s,1);break;case 2:case 9:if(Yf(s)){ve=0,Tt=null,Op(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),nl(e)},s.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Yf(s)?(ve=0,Tt=null,Op(t)):(ve=0,Tt=null,dn(e,t,s,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(!f||hm(f)){ve=0,Tt=null;var x=m.sibling;if(x!==null)de=x;else{var R=m.return;R!==null?(de=R,Ho(R)):de=null}break t}}ve=0,Tt=null,dn(e,t,s,5);break;case 6:ve=0,Tt=null,dn(e,t,s,6);break;case 8:gc(),Le=6;break e;default:throw Error(u(462))}}wx();break}catch(B){Rp(e,B)}while(!0);return hl=ma=null,O.H=n,O.A=i,xe=a,de!==null?0:(Ee=null,he=0,io(),Le)}function wx(){for(;de!==null&&!Qy();)Cp(de)}function Cp(e){var t=np(e.alternate,e,Sl);e.memoizedProps=e.pendingProps,t===null?Ho(e):de=t}function Op(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wh(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Wh(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Bs(t);default:op(a,t),t=de=Bf(t,Sl),t=np(a,t,Sl)}e.memoizedProps=e.pendingProps,t===null?Ho(e):de=t}function dn(e,t,a,n){hl=ma=null,Bs(t),tn=null,ci=0;var i=t.return;try{if(dx(e,i,t,a,he)){Le=1,zo(e,Mt(a,e.current)),de=null;return}}catch(s){if(i!==null)throw de=i,s;Le=1,zo(e,Mt(a,e.current)),de=null;return}t.flags&32768?(me||n===1?e=!0:on||(he&536870912)!==0?e=!1:(Yl=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ht.current,n!==null&&n.tag===13&&(n.flags|=16384))),Bp(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){Bp(t,Yl);return}e=t.return;var a=hx(t.alternate,t,Sl);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Le===0&&(Le=5)}function Bp(e,t){do{var a=px(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Le=6,de=null}function kp(e,t,a,n,i,s,f,m,x){e.cancelPendingCommit=null;do _o();while(nt!==0);if((xe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=ss,eb(e,a,s,f,m,x),e===Ee&&(de=Ee=null,he=0),sn=t,Vl=e,cn=a,hc=s,pc=i,Tp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ax(Qi,function(){return Hp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,i=Y.p,Y.p=2,f=xe,xe|=4;try{mx(e,t,a)}finally{xe=f,Y.p=i,O.T=n}}nt=1,Mp(),Np(),Lp()}}function Mp(){if(nt===1){nt=0;var e=Vl,t=sn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=Y.p;Y.p=2;var i=xe;xe|=4;try{yp(t,e);var s=zc,f=jf(e.containerInfo),m=s.focusedElem,x=s.selectionRange;if(f!==m&&m&&m.ownerDocument&&wf(m.ownerDocument.documentElement,m)){if(x!==null&&as(m)){var R=x.start,B=x.end;if(B===void 0&&(B=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(B,m.value.length);else{var M=m.ownerDocument||document,D=M&&M.defaultView||window;if(D.getSelection){var z=D.getSelection(),ne=m.textContent.length,ee=Math.min(x.start,ne),je=x.end===void 0?ee:Math.min(x.end,ne);!z.extend&&ee>je&&(f=je,je=ee,ee=f);var $=Sf(m,ee),w=Sf(m,je);if($&&w&&(z.rangeCount!==1||z.anchorNode!==$.node||z.anchorOffset!==$.offset||z.focusNode!==w.node||z.focusOffset!==w.offset)){var E=M.createRange();E.setStart($.node,$.offset),z.removeAllRanges(),ee>je?(z.addRange(E),z.extend(w.node,w.offset)):(E.setEnd(w.node,w.offset),z.addRange(E))}}}}for(M=[],z=m;z=z.parentNode;)z.nodeType===1&&M.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<M.length;m++){var k=M[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Wo=!!Dc,zc=Dc=null}finally{xe=i,Y.p=n,O.T=a}}e.current=t,nt=2}}function Np(){if(nt===2){nt=0;var e=Vl,t=sn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=Y.p;Y.p=2;var i=xe;xe|=4;try{hp(e,t.alternate,t)}finally{xe=i,Y.p=n,O.T=a}}nt=3}}function Lp(){if(nt===4||nt===3){nt=0,Fy();var e=Vl,t=sn,a=cn,n=Tp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,sn=Vl=null,Up(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Fl=null),Nr(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(kn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,i=Y.p,Y.p=2,O.T=null;try{for(var s=e.onRecoverableError,f=0;f<n.length;f++){var m=n[f];s(m.value,{componentStack:m.stack})}}finally{O.T=t,Y.p=i}}(cn&3)!==0&&_o(),nl(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===mc?bi++:(bi=0,mc=e):bi=0,xi(0)}}function Up(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wn(t)))}function _o(e){return Mp(),Np(),Lp(),Hp()}function Hp(){if(nt!==5)return!1;var e=Vl,t=hc;hc=0;var a=Nr(cn),n=O.T,i=Y.p;try{Y.p=32>a?32:a,O.T=null,a=pc,pc=null;var s=Vl,f=cn;if(nt=0,sn=Vl=null,cn=0,(xe&6)!==0)throw Error(u(331));var m=xe;if(xe|=4,wp(s.current),xp(s,s.current,f,a),xe=m,xi(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(kn,s)}catch{}return!0}finally{Y.p=i,O.T=n,Up(e,t)}}function _p(e,t,a){t=Mt(a,t),t=Ps(e.stateNode,t,2),e=Nl(e,t,2),e!==null&&(Nn(e,2),nl(e))}function Ae(e,t,a){if(e.tag===3)_p(e,e,a);else for(;t!==null;){if(t.tag===3){_p(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Fl===null||!Fl.has(n))){e=Mt(a,e),a=Qh(2),n=Nl(t,a,2),n!==null&&(Fh(a,n,t,e),Nn(n,2),nl(n));break}}t=t.return}}function xc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new bx;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(cc=!0,i.add(a),e=jx.bind(null,e,t,a),t.then(e,e))}function jx(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(he&a)===a&&(Le===4||Le===3&&(he&62914560)===he&&300>Jt()-fc?(xe&2)===0&&un(e,0):uc|=a,rn===he&&(rn=0)),nl(e)}function qp(e,t){t===0&&(t=Nd()),e=Fa(e,t),e!==null&&(Nn(e,t),nl(e))}function Tx(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),qp(e,a)}function $x(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),qp(e,a)}function Ax(e,t){return Or(e,t)}var qo=null,fn=null,vc=!1,Go=!1,Sc=!1,wa=0;function nl(e){e!==fn&&e.next===null&&(fn===null?qo=fn=e:fn=fn.next=e),Go=!0,vc||(vc=!0,Rx())}function xi(e,t){if(!Sc&&Go){Sc=!0;do for(var a=!1,n=qo;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var f=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-xt(42|e)+1)-1,s&=i&~(f&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Fp(n,s))}else s=he,s=Pi(n,n===Ee?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Mn(n,s)||(a=!0,Fp(n,s));n=n.next}while(a);Sc=!1}}function Ex(){Gp()}function Gp(){Go=vc=!1;var e=0;wa!==0&&(Nx()&&(e=wa),wa=0);for(var t=Jt(),a=null,n=qo;n!==null;){var i=n.next,s=Yp(n,t);s===0?(n.next=null,a===null?qo=i:a.next=i,i===null&&(fn=a)):(a=n,(e!==0||(s&3)!==0)&&(Go=!0)),n=i}xi(e)}function Yp(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var f=31-xt(s),m=1<<f,x=i[f];x===-1?((m&a)===0||(m&n)!==0)&&(i[f]=Jy(m,t)):x<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ee,a=he,a=Pi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Br(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Mn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Br(n),Nr(a)){case 2:case 8:a=Bd;break;case 32:a=Qi;break;case 268435456:a=kd;break;default:a=Qi}return n=Qp.bind(null,e),a=Or(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Br(n),e.callbackPriority=2,e.callbackNode=null,2}function Qp(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_o()&&e.callbackNode!==a)return null;var n=he;return n=Pi(e,e===Ee?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Ap(e,n,t),Yp(e,Jt()),e.callbackNode!=null&&e.callbackNode===a?Qp.bind(null,e):null)}function Fp(e,t){if(_o())return null;Ap(e,t,!0)}function Rx(){Ux(function(){(xe&6)!==0?Or(Od,Ex):Gp()})}function wc(){return wa===0&&(wa=Md()),wa}function Vp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function Pp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dx(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=Vp((i[dt]||null).action),f=n.submitter;f&&(t=(t=f[dt]||null)?Vp(t.formAction):f.getAttribute("formAction"),t!==null&&(s=t,f=null));var m=new lo("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(wa!==0){var x=f?Pp(i,f):new FormData(i);Gs(a,{pending:!0,data:x,method:i.method,action:s},null,x)}}else typeof s=="function"&&(m.preventDefault(),x=f?Pp(i,f):new FormData(i),Gs(a,{pending:!0,data:x,method:i.method,action:s},s,x))},currentTarget:i}]})}}for(var jc=0;jc<rs.length;jc++){var Tc=rs[jc],zx=Tc.toLowerCase(),Cx=Tc[0].toUpperCase()+Tc.slice(1);Vt(zx,"on"+Cx)}Vt(Af,"onAnimationEnd"),Vt(Ef,"onAnimationIteration"),Vt(Rf,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(Xb,"onTransitionRun"),Vt(Zb,"onTransitionStart"),Vt(Ib,"onTransitionCancel"),Vt(Df,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function Xp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var f=n.length-1;0<=f;f--){var m=n[f],x=m.instance,R=m.currentTarget;if(m=m.listener,x!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=R;try{s(i)}catch(B){Do(B)}i.currentTarget=null,s=x}else for(f=0;f<n.length;f++){if(m=n[f],x=m.instance,R=m.currentTarget,m=m.listener,x!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=R;try{s(i)}catch(B){Do(B)}i.currentTarget=null,s=x}}}}function fe(e,t){var a=t[Lr];a===void 0&&(a=t[Lr]=new Set);var n=e+"__bubble";a.has(n)||(Zp(t,e,2,!1),a.add(n))}function $c(e,t,a){var n=0;t&&(n|=4),Zp(a,e,n,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Yo]){e[Yo]=!0,qd.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||$c(a,!1,e),$c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,$c("selectionchange",!1,t))}}function Zp(e,t,a,n){switch(xm(t)){case 2:var i=i0;break;case 8:i=o0;break;default:i=_c}a=i.bind(null,t,a,e),i=void 0,!Xr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Ec(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var m=n.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=n.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=Oa(m),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){n=s=f;continue e}m=m.parentNode}}n=n.return}tf(function(){var R=s,B=Vr(a),M=[];e:{var D=zf.get(e);if(D!==void 0){var z=lo,ne=e;switch(e){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":z=Ab;break;case"focusin":ne="focus",z=Wr;break;case"focusout":ne="blur",z=Wr;break;case"beforeblur":case"afterblur":z=Wr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Db;break;case Af:case Ef:case Rf:z=yb;break;case Df:z=Cb;break;case"scroll":case"scrollend":z=fb;break;case"wheel":z=Bb;break;case"copy":case"cut":case"paste":z=xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=rf;break;case"toggle":case"beforetoggle":z=Mb}var ee=(t&4)!==0,je=!ee&&(e==="scroll"||e==="scrollend"),$=ee?D!==null?D+"Capture":null:D;ee=[];for(var w=R,E;w!==null;){var k=w;if(E=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||E===null||$===null||(k=Hn(w,$),k!=null&&ee.push(Si(w,k,E))),je)break;w=w.return}0<ee.length&&(D=new z(D,ne,null,a,B),M.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",D&&a!==Fr&&(ne=a.relatedTarget||a.fromElement)&&(Oa(ne)||ne[Ca]))break e;if((z||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,z?(ne=a.relatedTarget||a.toElement,z=R,ne=ne?Oa(ne):null,ne!==null&&(je=g(ne),ee=ne.tag,ne!==je||ee!==5&&ee!==27&&ee!==6)&&(ne=null)):(z=null,ne=R),z!==ne)){if(ee=nf,k="onMouseLeave",$="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ee=rf,k="onPointerLeave",$="onPointerEnter",w="pointer"),je=z==null?D:Un(z),E=ne==null?D:Un(ne),D=new ee(k,w+"leave",z,a,B),D.target=je,D.relatedTarget=E,k=null,Oa(B)===R&&(ee=new ee($,w+"enter",ne,a,B),ee.target=E,ee.relatedTarget=je,k=ee),je=k,z&&ne)t:{for(ee=z,$=ne,w=0,E=ee;E;E=hn(E))w++;for(E=0,k=$;k;k=hn(k))E++;for(;0<w-E;)ee=hn(ee),w--;for(;0<E-w;)$=hn($),E--;for(;w--;){if(ee===$||$!==null&&ee===$.alternate)break t;ee=hn(ee),$=hn($)}ee=null}else ee=null;z!==null&&Ip(M,D,z,ee,!1),ne!==null&&je!==null&&Ip(M,je,ne,ee,!0)}}e:{if(D=R?Un(R):window,z=D.nodeName&&D.nodeName.toLowerCase(),z==="select"||z==="input"&&D.type==="file")var X=mf;else if(hf(D))if(gf)X=Fb;else{X=Yb;var se=Gb}else z=D.nodeName,!z||z.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?R&&Qr(R.elementType)&&(X=mf):X=Qb;if(X&&(X=X(e,R))){pf(M,X,a,B);break e}se&&se(e,D,R),e==="focusout"&&R&&D.type==="number"&&R.memoizedProps.value!=null&&Yr(D,"number",D.value)}switch(se=R?Un(R):window,e){case"focusin":(hf(se)||se.contentEditable==="true")&&(Ga=se,ns=R,Pn=null);break;case"focusout":Pn=ns=Ga=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,Tf(M,a,B);break;case"selectionchange":if(Pb)break;case"keydown":case"keyup":Tf(M,a,B)}var I;if(es)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else qa?df(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(sf&&a.locale!=="ko"&&(qa||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&qa&&(I=lf()):(Ol=B,Zr="value"in Ol?Ol.value:Ol.textContent,qa=!0)),se=Qo(R,ae),0<se.length&&(ae=new of(ae,e,null,a,B),M.push({event:ae,listeners:se}),I?ae.data=I:(I=ff(a),I!==null&&(ae.data=I)))),(I=Lb?Ub(e,a):Hb(e,a))&&(ae=Qo(R,"onBeforeInput"),0<ae.length&&(se=new of("onBeforeInput","beforeinput",null,a,B),M.push({event:se,listeners:ae}),se.data=I)),Dx(M,e,R,a,B)}Xp(M,t)})}function Si(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qo(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Hn(e,a),i!=null&&n.unshift(Si(e,i,s)),i=Hn(e,t),i!=null&&n.push(Si(e,i,s))),e.tag===3)return n;e=e.return}return[]}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,t,a,n,i){for(var s=t._reactName,f=[];a!==null&&a!==n;){var m=a,x=m.alternate,R=m.stateNode;if(m=m.tag,x!==null&&x===n)break;m!==5&&m!==26&&m!==27||R===null||(x=R,i?(R=Hn(a,s),R!=null&&f.unshift(Si(a,R,x))):i||(R=Hn(a,s),R!=null&&f.push(Si(a,R,x)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var Bx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function Kp(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(kx,"")}function Wp(e,t){return t=Kp(t),Kp(e)===t}function Fo(){}function we(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ua(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ua(e,""+n);break;case"className":Zi(e,"class",n);break;case"tabIndex":Zi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,a,n);break;case"style":Jd(e,n,s);break;case"data":if(t!=="object"){Zi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",i.name,i,null),we(e,t,"formEncType",i.formEncType,i,null),we(e,t,"formMethod",i.formMethod,i,null),we(e,t,"formTarget",i.formTarget,i,null)):(we(e,t,"encType",i.encType,i,null),we(e,t,"method",i.method,i,null),we(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Fo);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Wi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Xi(e,"popover",n);break;case"xlinkActuate":sl(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":sl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":sl(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":sl(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":sl(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":sl(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":sl(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":sl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":sl(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ub.get(a)||a,Xi(e,a,n))}}function Rc(e,t,a,n,i,s){switch(a){case"style":Jd(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ua(e,n):(typeof n=="number"||typeof n=="bigint")&&Ua(e,""+n);break;case"onScroll":n!=null&&fe("scroll",e);break;case"onScrollEnd":n!=null&&fe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Fo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[dt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Xi(e,a,n)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var f=a[s];if(f!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,s,f,a,null)}}i&&we(e,t,"srcSet",a.srcSet,a,null),n&&we(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var m=s=f=i=null,x=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var B=a[n];if(B!=null)switch(n){case"name":i=B;break;case"type":f=B;break;case"checked":x=B;break;case"defaultChecked":R=B;break;case"value":s=B;break;case"defaultValue":m=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:we(e,t,n,B,a,null)}}Zd(e,s,m,x,R,f,i,!1),Ii(e);return;case"select":fe("invalid",e),n=f=s=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":s=m;break;case"defaultValue":f=m;break;case"multiple":n=m;default:we(e,t,i,m,a,null)}t=s,a=f,e.multiple=!!n,t!=null?La(e,!!n,t,!1):a!=null&&La(e,!!n,a,!0);return;case"textarea":fe("invalid",e),s=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":n=m;break;case"defaultValue":i=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:we(e,t,f,m,a,null)}Kd(e,n,i,s),Ii(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:we(e,t,x,n,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(n=0;n<vi.length;n++)fe(vi[n],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,R,n,a,null)}return;default:if(Qr(t)){for(B in a)a.hasOwnProperty(B)&&(n=a[B],n!==void 0&&Rc(e,t,B,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&we(e,t,m,n,a,null))}function Mx(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,f=null,m=null,x=null,R=null,B=null;for(z in a){var M=a[z];if(a.hasOwnProperty(z)&&M!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=M;default:n.hasOwnProperty(z)||we(e,t,z,null,n,M)}}for(var D in n){var z=n[D];if(M=a[D],n.hasOwnProperty(D)&&(z!=null||M!=null))switch(D){case"type":s=z;break;case"name":i=z;break;case"checked":R=z;break;case"defaultChecked":B=z;break;case"value":f=z;break;case"defaultValue":m=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:z!==M&&we(e,t,D,z,n,M)}}Gr(e,f,m,x,R,B,s,i);return;case"select":z=f=m=D=null;for(s in a)if(x=a[s],a.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":z=x;default:n.hasOwnProperty(s)||we(e,t,s,null,n,x)}for(i in n)if(s=n[i],x=a[i],n.hasOwnProperty(i)&&(s!=null||x!=null))switch(i){case"value":D=s;break;case"defaultValue":m=s;break;case"multiple":f=s;default:s!==x&&we(e,t,i,s,n,x)}t=m,a=f,n=z,D!=null?La(e,!!a,D,!1):!!n!=!!a&&(t!=null?La(e,!!a,t,!0):La(e,!!a,a?[]:"",!1));return;case"textarea":z=D=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,n,i)}for(f in n)if(i=n[f],s=a[f],n.hasOwnProperty(f)&&(i!=null||s!=null))switch(f){case"value":D=i;break;case"defaultValue":z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&we(e,t,f,i,n,s)}Id(e,D,z);return;case"option":for(var ne in a)if(D=a[ne],a.hasOwnProperty(ne)&&D!=null&&!n.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:we(e,t,ne,null,n,D)}for(x in n)if(D=n[x],z=a[x],n.hasOwnProperty(x)&&D!==z&&(D!=null||z!=null))switch(x){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:we(e,t,x,D,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)D=a[ee],a.hasOwnProperty(ee)&&D!=null&&!n.hasOwnProperty(ee)&&we(e,t,ee,null,n,D);for(R in n)if(D=n[R],z=a[R],n.hasOwnProperty(R)&&D!==z&&(D!=null||z!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:we(e,t,R,D,n,z)}return;default:if(Qr(t)){for(var je in a)D=a[je],a.hasOwnProperty(je)&&D!==void 0&&!n.hasOwnProperty(je)&&Rc(e,t,je,void 0,n,D);for(B in n)D=n[B],z=a[B],!n.hasOwnProperty(B)||D===z||D===void 0&&z===void 0||Rc(e,t,B,D,n,z);return}}for(var $ in a)D=a[$],a.hasOwnProperty($)&&D!=null&&!n.hasOwnProperty($)&&we(e,t,$,null,n,D);for(M in n)D=n[M],z=a[M],!n.hasOwnProperty(M)||D===z||D==null&&z==null||we(e,t,M,D,n,z)}var Dc=null,zc=null;function Vo(e){return e.nodeType===9?e:e.ownerDocument}function Jp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oc=null;function Nx(){var e=window.event;return e&&e.type==="popstate"?e===Oc?!1:(Oc=e,!0):(Oc=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(Hx)}:tm;function Hx(e){setTimeout(function(){throw e})}function Xl(e){return e==="head"}function am(e,t){var a=t,n=0,i=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<n&&8>n){a=n;var f=e.ownerDocument;if(a&1&&wi(f.documentElement),a&2&&wi(f.body),a&4)for(a=f.head,wi(a),f=a.firstChild;f;){var m=f.nextSibling,x=f.nodeName;f[Ln]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}if(i===0){e.removeChild(s),zi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=s}while(a);zi(t)}function Bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bc(a),Ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _x(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ln])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function qx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xt(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gx(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Mc=null;function nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function im(e,t,a){switch(t=Vo(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function wi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ur(e)}var qt=new Map,om=new Set;function Po(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wl=Y.d;Y.d={f:Yx,r:Qx,D:Fx,C:Vx,L:Px,m:Xx,X:Ix,S:Zx,M:Kx};function Yx(){var e=wl.f(),t=Uo();return e||t}function Qx(e){var t=Ba(e);t!==null&&t.tag===5&&t.type==="form"?Ah(t):wl.r(e)}var pn=typeof document>"u"?null:document;function rm(e,t,a){var n=pn;if(n&&typeof t=="string"&&t){var i=kt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),om.has(i)||(om.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),it(t,"link",e),Ze(t),n.head.appendChild(t)))}}function Fx(e){wl.D(e),rm("dns-prefetch",e,null)}function Vx(e,t){wl.C(e,t),rm("preconnect",e,t)}function Px(e,t,a){wl.L(e,t,a);var n=pn;if(n&&e&&t){var i='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+kt(a.imageSizes)+'"]')):i+='[href="'+kt(e)+'"]';var s=i;switch(t){case"style":s=mn(e);break;case"script":s=gn(e)}qt.has(s)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ji(s))||t==="script"&&n.querySelector(Ti(s))||(t=n.createElement("link"),it(t,"link",e),Ze(t),n.head.appendChild(t)))}}function Xx(e,t){wl.m(e,t);var a=pn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+kt(n)+'"][href="'+kt(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=gn(e)}if(!qt.has(s)&&(e=v({rel:"modulepreload",href:e},t),qt.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ti(s)))return}n=a.createElement("link"),it(n,"link",e),Ze(n),a.head.appendChild(n)}}}function Zx(e,t,a){wl.S(e,t,a);var n=pn;if(n&&e){var i=ka(n).hoistableStyles,s=mn(e);t=t||"default";var f=i.get(s);if(!f){var m={loading:0,preload:null};if(f=n.querySelector(ji(s)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(s))&&Nc(e,a);var x=f=n.createElement("link");Ze(x),it(x,"link",e),x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Xo(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(s,f)}}}function Ix(e,t){wl.X(e,t);var a=pn;if(a&&e){var n=ka(a).hoistableScripts,i=gn(e),s=n.get(i);s||(s=a.querySelector(Ti(i)),s||(e=v({src:e,async:!0},t),(t=qt.get(i))&&Lc(e,t),s=a.createElement("script"),Ze(s),it(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Kx(e,t){wl.M(e,t);var a=pn;if(a&&e){var n=ka(a).hoistableScripts,i=gn(e),s=n.get(i);s||(s=a.querySelector(Ti(i)),s||(e=v({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Lc(e,t),s=a.createElement("script"),Ze(s),it(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function sm(e,t,a,n){var i=(i=le.current)?Po(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=mn(a.href),a=ka(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mn(a.href);var s=ka(i).hoistableStyles,f=s.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,f),(s=i.querySelector(ji(e)))&&!s._p&&(f.instance=s,f.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),s||Wx(i,e,a,f.state))),t&&n===null)throw Error(u(528,""));return f}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gn(a),a=ka(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mn(e){return'href="'+kt(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function cm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Wx(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),it(t,"link",a),Ze(t),e.head.appendChild(t))}function gn(e){return'[src="'+kt(e)+'"]'}function Ti(e){return"script[async]"+e}function um(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var i=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),it(n,"style",i),Xo(n,a.precedence,e),t.instance=n;case"stylesheet":i=mn(a.href);var s=e.querySelector(ji(i));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;n=cm(a),(i=qt.get(i))&&Nc(n,i),s=(e.ownerDocument||e).createElement("link"),Ze(s);var f=s;return f._p=new Promise(function(m,x){f.onload=m,f.onerror=x}),it(s,"link",n),t.state.loading|=4,Xo(s,a.precedence,e),t.instance=s;case"script":return s=gn(a.src),(i=e.querySelector(Ti(s)))?(t.instance=i,Ze(i),i):(n=a,(i=qt.get(s))&&(n=v({},a),Lc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ze(i),it(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Xo(n,a.precedence,e));return t.instance}function Xo(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,f=0;f<n.length;f++){var m=n[f];if(m.dataset.precedence===t)s=m;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zo=null;function dm(e,t,a){if(Zo===null){var n=new Map,i=Zo=new Map;i.set(a,n)}else i=Zo,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[Ln]||s[rt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var f=s.getAttribute(t)||"";f=e+f;var m=n.get(f);m?m.push(s):n.set(f,[s])}}return n}function fm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Jx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $i=null;function e0(){}function t0(e,t,a){if($i===null)throw Error(u(475));var n=$i;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=mn(a.href),s=e.querySelector(ji(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Io.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,Ze(s);return}s=e.ownerDocument||e,a=cm(a),(i=qt.get(i))&&Nc(a,i),s=s.createElement("link"),Ze(s);var f=s;f._p=new Promise(function(m,x){f.onload=m,f.onerror=x}),it(s,"link",a),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Io.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function l0(){if($i===null)throw Error(u(475));var e=$i;return e.stylesheets&&e.count===0&&Uc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Uc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Io(){if(this.count--,this.count===0){if(this.stylesheets)Uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ko=null;function Uc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ko=new Map,t.forEach(a0,e),Ko=null,Io.call(e))}function a0(e,t){if(!(t.state.loading&4)){var a=Ko.get(e);if(a)var n=a.get(null);else{a=new Map,Ko.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var f=i[s];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),s=a.get(f)||n,s===n&&a.set(null,i),a.set(f,i),this.count++,n=Io.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ai={$$typeof:F,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function n0(e,t,a,n,i,s,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.hiddenUpdates=kr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function pm(e,t,a,n,i,s,f,m,x,R,B,M){return e=new n0(e,t,a,f,m,x,R,M),t=1,s===!0&&(t|=24),s=St(3,null,null,t),e.current=s,s.stateNode=e,t=xs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},js(s),e}function mm(e){return e?(e=Va,e):Va}function gm(e,t,a,n,i,s){i=mm(i),n.context===null?n.context=i:n.pendingContext=i,n=Ml(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Nl(e,n,t),a!==null&&(At(a,e,t),li(a,e,t))}function ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hc(e,t){ym(e,t),(e=e.alternate)&&ym(e,t)}function bm(e){if(e.tag===13){var t=Fa(e,67108864);t!==null&&At(t,e,67108864),Hc(e,67108864)}}var Wo=!0;function i0(e,t,a,n){var i=O.T;O.T=null;var s=Y.p;try{Y.p=2,_c(e,t,a,n)}finally{Y.p=s,O.T=i}}function o0(e,t,a,n){var i=O.T;O.T=null;var s=Y.p;try{Y.p=8,_c(e,t,a,n)}finally{Y.p=s,O.T=i}}function _c(e,t,a,n){if(Wo){var i=qc(n);if(i===null)Ec(e,t,n,Jo,a),vm(e,n);else if(s0(i,e,t,a,n))n.stopPropagation();else if(vm(e,n),t&4&&-1<r0.indexOf(e)){for(;i!==null;){var s=Ba(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var f=ia(s.pendingLanes);if(f!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var x=1<<31-xt(f);m.entanglements[1]|=x,f&=~x}nl(s),(xe&6)===0&&(No=Jt()+500,xi(0))}}break;case 13:m=Fa(s,2),m!==null&&At(m,s,2),Uo(),Hc(s,2)}if(s=qc(n),s===null&&Ec(e,t,n,Jo,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Ec(e,t,n,null,a)}}function qc(e){return e=Vr(e),Gc(e)}var Jo=null;function Gc(e){if(Jo=null,e=Oa(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jo=e,null}function xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vy()){case Od:return 2;case Bd:return 8;case Qi:case Py:return 32;case kd:return 268435456;default:return 32}default:return 32}}var Yc=!1,Zl=null,Il=null,Kl=null,Ei=new Map,Ri=new Map,Wl=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vm(e,t){switch(e){case"focusin":case"focusout":Zl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Kl=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function Di(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ba(t),t!==null&&bm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function s0(e,t,a,n,i){switch(t){case"focusin":return Zl=Di(Zl,e,t,a,n,i),!0;case"dragenter":return Il=Di(Il,e,t,a,n,i),!0;case"mouseover":return Kl=Di(Kl,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Ei.set(s,Di(Ei.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Ri.set(s,Di(Ri.get(s)||null,e,t,a,n,i)),!0}return!1}function Sm(e){var t=Oa(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,tb(e.priority,function(){if(a.tag===13){var n=$t();n=Mr(n);var i=Fa(a,n);i!==null&&At(i,a,n),Hc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Fr=n,a.target.dispatchEvent(n),Fr=null}else return t=Ba(a),t!==null&&bm(t),e.blockedOn=a,!1;t.shift()}return!0}function wm(e,t,a){er(e)&&a.delete(t)}function c0(){Yc=!1,Zl!==null&&er(Zl)&&(Zl=null),Il!==null&&er(Il)&&(Il=null),Kl!==null&&er(Kl)&&(Kl=null),Ei.forEach(wm),Ri.forEach(wm)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yc||(Yc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,c0)))}var lr=null;function jm(e){lr!==e&&(lr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Gc(n||a)===null)continue;break}var s=Ba(a);s!==null&&(e.splice(t,3),t-=3,Gs(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function zi(e){function t(x){return tr(x,e)}Zl!==null&&tr(Zl,e),Il!==null&&tr(Il,e),Kl!==null&&tr(Kl,e),Ei.forEach(t),Ri.forEach(t);for(var a=0;a<Wl.length;a++){var n=Wl[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Wl.length&&(a=Wl[0],a.blockedOn===null);)Sm(a),a.blockedOn===null&&Wl.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],f=i[dt]||null;if(typeof s=="function")f||jm(a);else if(f){var m=null;if(s&&s.hasAttribute("formAction")){if(i=s,f=s[dt]||null)m=f.formAction;else if(Gc(i)!==null)continue}else m=f.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),jm(a)}}}function Qc(e){this._internalRoot=e}ar.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=$t();gm(a,n,e,t,null,null)},ar.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gm(e.current,2,null,e,null,null),Uo(),t[Ca]=null}};function ar(e){this._internalRoot=e}ar.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wl.length&&t!==0&&t<Wl[a].priority;a++);Wl.splice(a,0,e),a===0&&Sm(e)}};var Tm=r.version;if(Tm!=="19.1.0")throw Error(u(527,Tm,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var u0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{kn=nr.inject(u0),bt=nr}catch{}}return Oi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,n="",i=_h,s=qh,f=Gh,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=pm(e,1,!1,null,null,a,n,i,s,f,m,null),e[Ca]=t.current,Ac(e),new Qc(t)},Oi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var n=!1,i="",s=_h,f=qh,m=Gh,x=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),t=pm(e,1,!0,t,a??null,n,i,s,f,m,x,R),t.context=mm(null),a=t.current,n=$t(),n=Mr(n),i=Ml(n),i.callback=null,Nl(a,i,n),a=n,t.current.lanes=a,Nn(t,a),nl(t),e[Ca]=t.current,Ac(e),new ar(t)},Oi.version="19.1.0",Oi}var km;function S0(){if(km)return Pc.exports;km=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Pc.exports=v0(),Pc.exports}var w0=S0(),tt=function(){return tt=Object.assign||function(r){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(r[g]=c[g])}return r},tt.apply(this,arguments)};function Li(l,r,c){if(c||arguments.length===2)for(var u=0,d=r.length,g;u<d;u++)(g||!(u in r))&&(g||(g=Array.prototype.slice.call(r,0,u)),g[u]=r[u]);return l.concat(g||Array.prototype.slice.call(r))}var Re="-ms-",Ni="-moz-",ye="-webkit-",kg="comm",Sr="rule",hd="decl",j0="@import",Mg="@keyframes",T0="@layer",Ng=Math.abs,pd=String.fromCharCode,ed=Object.assign;function $0(l,r){return Je(l,0)^45?(((r<<2^Je(l,0))<<2^Je(l,1))<<2^Je(l,2))<<2^Je(l,3):0}function Lg(l){return l.trim()}function Tl(l,r){return(l=r.exec(l))?l[0]:l}function oe(l,r,c){return l.replace(r,c)}function sr(l,r,c){return l.indexOf(r,c)}function Je(l,r){return l.charCodeAt(r)|0}function wn(l,r,c){return l.slice(r,c)}function il(l){return l.length}function Ug(l){return l.length}function Mi(l,r){return r.push(l),l}function A0(l,r){return l.map(r).join("")}function Mm(l,r){return l.filter(function(c){return!Tl(c,r)})}var wr=1,jn=1,Hg=0,Yt=0,Qe=0,En="";function jr(l,r,c,u,d,g,y,j){return{value:l,root:r,parent:c,type:u,props:d,children:g,line:wr,column:jn,length:y,return:"",siblings:j}}function ea(l,r){return ed(jr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function yn(l){for(;l.root;)l=ea(l.root,{children:[l]});Mi(l,l.siblings)}function E0(){return Qe}function R0(){return Qe=Yt>0?Je(En,--Yt):0,jn--,Qe===10&&(jn=1,wr--),Qe}function It(){return Qe=Yt<Hg?Je(En,Yt++):0,jn++,Qe===10&&(jn=1,wr++),Qe}function Aa(){return Je(En,Yt)}function cr(){return Yt}function Tr(l,r){return wn(En,l,r)}function td(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D0(l){return wr=jn=1,Hg=il(En=l),Yt=0,[]}function z0(l){return En="",l}function Kc(l){return Lg(Tr(Yt-1,ld(l===91?l+2:l===40?l+1:l)))}function C0(l){for(;(Qe=Aa())&&Qe<33;)It();return td(l)>2||td(Qe)>3?"":" "}function O0(l,r){for(;--r&&It()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Tr(l,cr()+(r<6&&Aa()==32&&It()==32))}function ld(l){for(;It();)switch(Qe){case l:return Yt;case 34:case 39:l!==34&&l!==39&&ld(Qe);break;case 40:l===41&&ld(l);break;case 92:It();break}return Yt}function B0(l,r){for(;It()&&l+Qe!==57;)if(l+Qe===84&&Aa()===47)break;return"/*"+Tr(r,Yt-1)+"*"+pd(l===47?l:It())}function k0(l){for(;!td(Aa());)It();return Tr(l,Yt)}function M0(l){return z0(ur("",null,null,null,[""],l=D0(l),0,[0],l))}function ur(l,r,c,u,d,g,y,j,b){for(var p=0,v=0,T=y,C=0,L=0,q=0,H=1,_=1,U=1,P=0,F="",te=d,V=g,W=u,Z=F;_;)switch(q=P,P=It()){case 40:if(q!=108&&Je(Z,T-1)==58){sr(Z+=oe(Kc(P),"&","&\f"),"&\f",Ng(p?j[p-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:Z+=Kc(P);break;case 9:case 10:case 13:case 32:Z+=C0(q);break;case 92:Z+=O0(cr()-1,7);continue;case 47:switch(Aa()){case 42:case 47:Mi(N0(B0(It(),cr()),r,c,b),b);break;default:Z+="/"}break;case 123*H:j[p++]=il(Z)*U;case 125*H:case 59:case 0:switch(P){case 0:case 125:_=0;case 59+v:U==-1&&(Z=oe(Z,/\f/g,"")),L>0&&il(Z)-T&&Mi(L>32?Lm(Z+";",u,c,T-1,b):Lm(oe(Z," ","")+";",u,c,T-2,b),b);break;case 59:Z+=";";default:if(Mi(W=Nm(Z,r,c,p,v,d,j,F,te=[],V=[],T,g),g),P===123)if(v===0)ur(Z,r,W,W,te,g,T,j,V);else switch(C===99&&Je(Z,3)===110?100:C){case 100:case 108:case 109:case 115:ur(l,W,W,u&&Mi(Nm(l,W,W,0,0,d,j,F,d,te=[],T,V),V),d,V,T,j,u?te:V);break;default:ur(Z,W,W,W,[""],V,0,j,V)}}p=v=L=0,H=U=1,F=Z="",T=y;break;case 58:T=1+il(Z),L=q;default:if(H<1){if(P==123)--H;else if(P==125&&H++==0&&R0()==125)continue}switch(Z+=pd(P),P*H){case 38:U=v>0?1:(Z+="\f",-1);break;case 44:j[p++]=(il(Z)-1)*U,U=1;break;case 64:Aa()===45&&(Z+=Kc(It())),C=Aa(),v=T=il(F=Z+=k0(cr())),P++;break;case 45:q===45&&il(Z)==2&&(H=0)}}return g}function Nm(l,r,c,u,d,g,y,j,b,p,v,T){for(var C=d-1,L=d===0?g:[""],q=Ug(L),H=0,_=0,U=0;H<u;++H)for(var P=0,F=wn(l,C+1,C=Ng(_=y[H])),te=l;P<q;++P)(te=Lg(_>0?L[P]+" "+F:oe(F,/&\f/g,L[P])))&&(b[U++]=te);return jr(l,r,c,d===0?Sr:j,b,p,v,T)}function N0(l,r,c,u){return jr(l,r,c,kg,pd(E0()),wn(l,2,-2),0,u)}function Lm(l,r,c,u,d){return jr(l,r,c,hd,wn(l,0,u),wn(l,u+1,-1),u,d)}function _g(l,r,c){switch($0(l,r)){case 5103:return ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+l+l;case 4789:return Ni+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+l+Ni+l+Re+l+l;case 5936:switch(Je(l,r+11)){case 114:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ye+l+Re+l+l;case 6165:return ye+l+Re+"flex-"+l+l;case 5187:return ye+l+oe(l,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ye+l+Re+"flex-item-"+oe(l,/flex-|-self/g,"")+(Tl(l,/flex-|baseline/)?"":Re+"grid-row-"+oe(l,/flex-|-self/g,""))+l;case 4675:return ye+l+Re+"flex-line-pack"+oe(l,/align-content|flex-|-self/g,"")+l;case 5548:return ye+l+Re+oe(l,"shrink","negative")+l;case 5292:return ye+l+Re+oe(l,"basis","preferred-size")+l;case 6060:return ye+"box-"+oe(l,"-grow","")+ye+l+Re+oe(l,"grow","positive")+l;case 4554:return ye+oe(l,/([^-])(transform)/g,"$1"+ye+"$2")+l;case 6187:return oe(oe(oe(l,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),l,"")+l;case 5495:case 3959:return oe(l,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(l,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+l+l;case 4200:if(!Tl(l,/flex-|baseline/))return Re+"grid-column-align"+wn(l,r)+l;break;case 2592:case 3360:return Re+oe(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return r=d,Tl(u.props,/grid-\w+-end/)})?~sr(l+(c=c[r].value),"span",0)?l:Re+oe(l,"-start","")+l+Re+"grid-row-span:"+(~sr(c,"span",0)?Tl(c,/\d+/):+Tl(c,/\d+/)-+Tl(l,/\d+/))+";":Re+oe(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return Tl(u.props,/grid-\w+-start/)})?l:Re+oe(oe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return oe(l,/(.+)-inline(.+)/,ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(il(l)-1-r>6)switch(Je(l,r+1)){case 109:if(Je(l,r+4)!==45)break;case 102:return oe(l,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Ni+(Je(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~sr(l,"stretch",0)?_g(oe(l,"stretch","fill-available"),r,c)+l:l}break;case 5152:case 5920:return oe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,g,y,j,b,p){return Re+d+":"+g+p+(y?Re+d+"-span:"+(j?b:+b-+g)+p:"")+l});case 4949:if(Je(l,r+6)===121)return oe(l,":",":"+ye)+l;break;case 6444:switch(Je(l,Je(l,14)===45?18:11)){case 120:return oe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Je(l,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+l;case 100:return oe(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(l,"scroll-","scroll-snap-")+l}return l}function mr(l,r){for(var c="",u=0;u<l.length;u++)c+=r(l[u],u,l,r)||"";return c}function L0(l,r,c,u){switch(l.type){case T0:if(l.children.length)break;case j0:case hd:return l.return=l.return||l.value;case kg:return"";case Mg:return l.return=l.value+"{"+mr(l.children,u)+"}";case Sr:if(!il(l.value=l.props.join(",")))return""}return il(c=mr(l.children,u))?l.return=l.value+"{"+c+"}":""}function U0(l){var r=Ug(l);return function(c,u,d,g){for(var y="",j=0;j<r;j++)y+=l[j](c,u,d,g)||"";return y}}function H0(l){return function(r){r.root||(r=r.return)&&l(r)}}function _0(l,r,c,u){if(l.length>-1&&!l.return)switch(l.type){case hd:l.return=_g(l.value,l.length,c);return;case Mg:return mr([ea(l,{value:oe(l.value,"@","@"+ye)})],u);case Sr:if(l.length)return A0(c=l.props,function(d){switch(Tl(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(ea(l,{props:[oe(d,/:(read-\w+)/,":"+Ni+"$1")]})),yn(ea(l,{props:[d]})),ed(l,{props:Mm(c,u)});break;case"::placeholder":yn(ea(l,{props:[oe(d,/:(plac\w+)/,":"+ye+"input-$1")]})),yn(ea(l,{props:[oe(d,/:(plac\w+)/,":"+Ni+"$1")]})),yn(ea(l,{props:[oe(d,/:(plac\w+)/,Re+"input-$1")]})),yn(ea(l,{props:[d]})),ed(l,{props:Mm(c,u)});break}return""})}}var q0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},Tn=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",qg="active",Gg="data-styled-version",$r="6.1.17",md=`/*!sc*/
`,gr=typeof window<"u"&&"HTMLElement"in window,G0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),Y0={},Ar=Object.freeze([]),$n=Object.freeze({});function Yg(l,r,c){return c===void 0&&(c=$n),l.theme!==c.theme&&l.theme||r||c.theme}var Qg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Q0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,F0=/(^-|-$)/g;function Um(l){return l.replace(Q0,"-").replace(F0,"")}var V0=/(a)(d)/gi,ir=52,Hm=function(l){return String.fromCharCode(l+(l>25?39:97))};function ad(l){var r,c="";for(r=Math.abs(l);r>ir;r=r/ir|0)c=Hm(r%ir)+c;return(Hm(r%ir)+c).replace(V0,"$1-$2")}var Wc,Fg=5381,Sn=function(l,r){for(var c=r.length;c;)l=33*l^r.charCodeAt(--c);return l},Vg=function(l){return Sn(Fg,l)};function Pg(l){return ad(Vg(l)>>>0)}function P0(l){return l.displayName||l.name||"Component"}function Jc(l){return typeof l=="string"&&!0}var Xg=typeof Symbol=="function"&&Symbol.for,Zg=Xg?Symbol.for("react.memo"):60115,X0=Xg?Symbol.for("react.forward_ref"):60112,Z0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ig={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K0=((Wc={})[X0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wc[Zg]=Ig,Wc);function _m(l){return("type"in(r=l)&&r.type.$$typeof)===Zg?Ig:"$$typeof"in l?K0[l.$$typeof]:Z0;var r}var W0=Object.defineProperty,J0=Object.getOwnPropertyNames,qm=Object.getOwnPropertySymbols,ev=Object.getOwnPropertyDescriptor,tv=Object.getPrototypeOf,Gm=Object.prototype;function Kg(l,r,c){if(typeof r!="string"){if(Gm){var u=tv(r);u&&u!==Gm&&Kg(l,u,c)}var d=J0(r);qm&&(d=d.concat(qm(r)));for(var g=_m(l),y=_m(r),j=0;j<d.length;++j){var b=d[j];if(!(b in I0||c&&c[b]||y&&b in y||g&&b in g)){var p=ev(r,b);try{W0(l,b,p)}catch{}}}}return l}function Ea(l){return typeof l=="function"}function gd(l){return typeof l=="object"&&"styledComponentId"in l}function $a(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function nd(l,r){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function Ui(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function id(l,r,c){if(c===void 0&&(c=!1),!c&&!Ui(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)l[u]=id(l[u],r[u]);else if(Ui(r))for(var u in r)l[u]=id(l[u],r[u]);return l}function yd(l,r){Object.defineProperty(l,"toString",{value:r})}function Ra(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var lv=function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var c=0,u=0;u<r;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(r,c){if(r>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,g=d;r>=g;)if((g<<=1)<0)throw Ra(16,"".concat(r));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var y=d;y<g;y++)this.groupSizes[y]=0}for(var j=this.indexOfGroup(r+1),b=(y=0,c.length);y<b;y++)this.tag.insertRule(j,c[y])&&(this.groupSizes[r]++,j++)},l.prototype.clearGroup=function(r){if(r<this.length){var c=this.groupSizes[r],u=this.indexOfGroup(r),d=u+c;this.groupSizes[r]=0;for(var g=u;g<d;g++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(r){var c="";if(r>=this.length||this.groupSizes[r]===0)return c;for(var u=this.groupSizes[r],d=this.indexOfGroup(r),g=d+u,y=d;y<g;y++)c+="".concat(this.tag.getRule(y)).concat(md);return c},l}(),dr=new Map,yr=new Map,fr=1,or=function(l){if(dr.has(l))return dr.get(l);for(;yr.has(fr);)fr++;var r=fr++;return dr.set(l,r),yr.set(r,l),r},av=function(l,r){fr=r+1,dr.set(l,r),yr.set(r,l)},nv="style[".concat(Tn,"][").concat(Gg,'="').concat($r,'"]'),iv=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ov=function(l,r,c){for(var u,d=c.split(","),g=0,y=d.length;g<y;g++)(u=d[g])&&l.registerName(r,u)},rv=function(l,r){for(var c,u=((c=r.textContent)!==null&&c!==void 0?c:"").split(md),d=[],g=0,y=u.length;g<y;g++){var j=u[g].trim();if(j){var b=j.match(iv);if(b){var p=0|parseInt(b[1],10),v=b[2];p!==0&&(av(v,p),ov(l,v,b[3]),l.getTag().insertRules(p,d)),d.length=0}else d.push(j)}}},Ym=function(l){for(var r=document.querySelectorAll(nv),c=0,u=r.length;c<u;c++){var d=r[c];d&&d.getAttribute(Tn)!==qg&&(rv(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function sv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wg=function(l){var r=document.head,c=l||r,u=document.createElement("style"),d=function(j){var b=Array.from(j.querySelectorAll("style[".concat(Tn,"]")));return b[b.length-1]}(c),g=d!==void 0?d.nextSibling:null;u.setAttribute(Tn,qg),u.setAttribute(Gg,$r);var y=sv();return y&&u.setAttribute("nonce",y),c.insertBefore(u,g),u},cv=function(){function l(r){this.element=Wg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,g=u.length;d<g;d++){var y=u[d];if(y.ownerNode===c)return y}throw Ra(17)}(this.element),this.length=0}return l.prototype.insertRule=function(r,c){try{return this.sheet.insertRule(c,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var c=this.sheet.cssRules[r];return c&&c.cssText?c.cssText:""},l}(),uv=function(){function l(r){this.element=Wg(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,c){if(r<=this.length&&r>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l}(),dv=function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,c){return r<=this.length&&(this.rules.splice(r,0,c),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l}(),Qm=gr,fv={isServer:!gr,useCSSOMInjection:!G0},br=function(){function l(r,c,u){r===void 0&&(r=$n),c===void 0&&(c={});var d=this;this.options=tt(tt({},fv),r),this.gs=c,this.names=new Map(u),this.server=!!r.isServer,!this.server&&gr&&Qm&&(Qm=!1,Ym(this)),yd(this,function(){return function(g){for(var y=g.getTag(),j=y.length,b="",p=function(T){var C=function(U){return yr.get(U)}(T);if(C===void 0)return"continue";var L=g.names.get(C),q=y.getGroup(T);if(L===void 0||!L.size||q.length===0)return"continue";var H="".concat(Tn,".g").concat(T,'[id="').concat(C,'"]'),_="";L!==void 0&&L.forEach(function(U){U.length>0&&(_+="".concat(U,","))}),b+="".concat(q).concat(H,'{content:"').concat(_,'"}').concat(md)},v=0;v<j;v++)p(v);return b}(d)})}return l.registerId=function(r){return or(r)},l.prototype.rehydrate=function(){!this.server&&gr&&Ym(this)},l.prototype.reconstructWithOptions=function(r,c){return c===void 0&&(c=!0),new l(tt(tt({},this.options),r),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new dv(d):u?new cv(d):new uv(d)}(this.options),new lv(r)));var r},l.prototype.hasNameForId=function(r,c){return this.names.has(r)&&this.names.get(r).has(c)},l.prototype.registerName=function(r,c){if(or(r),this.names.has(r))this.names.get(r).add(c);else{var u=new Set;u.add(c),this.names.set(r,u)}},l.prototype.insertRules=function(r,c,u){this.registerName(r,c),this.getTag().insertRules(or(r),u)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(or(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l}(),hv=/&/g,pv=/^\s*\/\/.*$/gm;function Jg(l,r){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(r," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(r," ")),c.props=c.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Jg(c.children,r)),c})}function mv(l){var r,c,u,d=$n,g=d.options,y=g===void 0?$n:g,j=d.plugins,b=j===void 0?Ar:j,p=function(C,L,q){return q.startsWith(c)&&q.endsWith(c)&&q.replaceAll(c,"").length>0?".".concat(r):C},v=b.slice();v.push(function(C){C.type===Sr&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(hv,c).replace(u,p))}),y.prefix&&v.push(_0),v.push(L0);var T=function(C,L,q,H){L===void 0&&(L=""),q===void 0&&(q=""),H===void 0&&(H="&"),r=H,c=L,u=new RegExp("\\".concat(c,"\\b"),"g");var _=C.replace(pv,""),U=M0(q||L?"".concat(q," ").concat(L," { ").concat(_," }"):_);y.namespace&&(U=Jg(U,y.namespace));var P=[];return mr(U,U0(v.concat(H0(function(F){return P.push(F)})))),P};return T.hash=b.length?b.reduce(function(C,L){return L.name||Ra(15),Sn(C,L.name)},Fg).toString():"",T}var gv=new br,od=mv(),ey=Zt.createContext({shouldForwardProp:void 0,styleSheet:gv,stylis:od});ey.Consumer;Zt.createContext(void 0);function rd(){return A.useContext(ey)}var yv=function(){function l(r,c){var u=this;this.inject=function(d,g){g===void 0&&(g=od);var y=u.name+g.hash;d.hasNameForId(u.id,y)||d.insertRules(u.id,y,g(u.rules,y,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=c,yd(this,function(){throw Ra(12,String(u.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=od),this.name+r.hash},l}(),bv=function(l){return l>="A"&&l<="Z"};function Fm(l){for(var r="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;bv(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var ty=function(l){return l==null||l===!1||l===""},ly=function(l){var r,c,u=[];for(var d in l){var g=l[d];l.hasOwnProperty(d)&&!ty(g)&&(Array.isArray(g)&&g.isCss||Ea(g)?u.push("".concat(Fm(d),":"),g,";"):Ui(g)?u.push.apply(u,Li(Li(["".concat(d," {")],ly(g),!1),["}"],!1)):u.push("".concat(Fm(d),": ").concat((r=d,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||r in q0||r.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function aa(l,r,c,u){if(ty(l))return[];if(gd(l))return[".".concat(l.styledComponentId)];if(Ea(l)){if(!Ea(g=l)||g.prototype&&g.prototype.isReactComponent||!r)return[l];var d=l(r);return aa(d,r,c,u)}var g;return l instanceof yv?c?(l.inject(c,u),[l.getName(u)]):[l]:Ui(l)?ly(l):Array.isArray(l)?Array.prototype.concat.apply(Ar,l.map(function(y){return aa(y,r,c,u)})):[l.toString()]}function ay(l){for(var r=0;r<l.length;r+=1){var c=l[r];if(Ea(c)&&!gd(c))return!1}return!0}var xv=Vg($r),vv=function(){function l(r,c,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&ay(r),this.componentId=c,this.baseHash=Sn(xv,c),this.baseStyle=u,br.registerId(c)}return l.prototype.generateAndInjectStyles=function(r,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=$a(d,this.staticRulesId);else{var g=nd(aa(this.rules,r,c,u)),y=ad(Sn(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,y)){var j=u(g,".".concat(y),void 0,this.componentId);c.insertRules(this.componentId,y,j)}d=$a(d,y),this.staticRulesId=y}else{for(var b=Sn(this.baseHash,u.hash),p="",v=0;v<this.rules.length;v++){var T=this.rules[v];if(typeof T=="string")p+=T;else if(T){var C=nd(aa(T,r,c,u));b=Sn(b,C+v),p+=C}}if(p){var L=ad(b>>>0);c.hasNameForId(this.componentId,L)||c.insertRules(this.componentId,L,u(p,".".concat(L),void 0,this.componentId)),d=$a(d,L)}}return d},l}(),Hi=Zt.createContext(void 0);Hi.Consumer;function Sv(l){var r=Zt.useContext(Hi),c=A.useMemo(function(){return function(u,d){if(!u)throw Ra(14);if(Ea(u)){var g=u(d);return g}if(Array.isArray(u)||typeof u!="object")throw Ra(8);return d?tt(tt({},d),u):u}(l.theme,r)},[l.theme,r]);return l.children?Zt.createElement(Hi.Provider,{value:c},l.children):null}var eu={};function wv(l,r,c){var u=gd(l),d=l,g=!Jc(l),y=r.attrs,j=y===void 0?Ar:y,b=r.componentId,p=b===void 0?function(te,V){var W=typeof te!="string"?"sc":Um(te);eu[W]=(eu[W]||0)+1;var Z="".concat(W,"-").concat(Pg($r+W+eu[W]));return V?"".concat(V,"-").concat(Z):Z}(r.displayName,r.parentComponentId):b,v=r.displayName,T=v===void 0?function(te){return Jc(te)?"styled.".concat(te):"Styled(".concat(P0(te),")")}(l):v,C=r.displayName&&r.componentId?"".concat(Um(r.displayName),"-").concat(r.componentId):r.componentId||p,L=u&&d.attrs?d.attrs.concat(j).filter(Boolean):j,q=r.shouldForwardProp;if(u&&d.shouldForwardProp){var H=d.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;q=function(te,V){return H(te,V)&&_(te,V)}}else q=H}var U=new vv(c,C,u?d.componentStyle:void 0);function P(te,V){return function(W,Z,Te){var Ue=W.attrs,Dt=W.componentStyle,yt=W.defaultProps,qe=W.foldedComponentIds,zt=W.styledComponentId,Ct=W.target,$e=Zt.useContext(Hi),O=rd(),Y=W.shouldForwardProp||O.shouldForwardProp,J=Yg(Z,$e,yt)||$n,ce=function(ue,le,Xe){for(var ge,ot=tt(tt({},le),{className:void 0,theme:Xe}),na=0;na<ue.length;na+=1){var rl=Ea(ge=ue[na])?ge(ot):ge;for(var Ot in rl)ot[Ot]=Ot==="className"?$a(ot[Ot],rl[Ot]):Ot==="style"?tt(tt({},ot[Ot]),rl[Ot]):rl[Ot]}return le.className&&(ot.className=$a(ot.className,le.className)),ot}(Ue,Z,J),S=ce.as||Ct,N={};for(var G in ce)ce[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ce.theme===J||(G==="forwardedAs"?N.as=ce.forwardedAs:Y&&!Y(G,S)||(N[G]=ce[G]));var Q=function(ue,le){var Xe=rd(),ge=ue.generateAndInjectStyles(le,Xe.styleSheet,Xe.stylis);return ge}(Dt,ce),K=$a(qe,zt);return Q&&(K+=" "+Q),ce.className&&(K+=" "+ce.className),N[Jc(S)&&!Qg.has(S)?"class":"className"]=K,Te&&(N.ref=Te),A.createElement(S,N)}(F,te,V)}P.displayName=T;var F=Zt.forwardRef(P);return F.attrs=L,F.componentStyle=U,F.displayName=T,F.shouldForwardProp=q,F.foldedComponentIds=u?$a(d.foldedComponentIds,d.styledComponentId):"",F.styledComponentId=C,F.target=u?d.target:l,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=u?function(V){for(var W=[],Z=1;Z<arguments.length;Z++)W[Z-1]=arguments[Z];for(var Te=0,Ue=W;Te<Ue.length;Te++)id(V,Ue[Te],!0);return V}({},d.defaultProps,te):te}}),yd(F,function(){return".".concat(F.styledComponentId)}),g&&Kg(F,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function Vm(l,r){for(var c=[l[0]],u=0,d=r.length;u<d;u+=1)c.push(r[u],l[u+1]);return c}var Pm=function(l){return Object.assign(l,{isCss:!0})};function ny(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(Ea(l)||Ui(l))return Pm(aa(Vm(Ar,Li([l],r,!0))));var u=l;return r.length===0&&u.length===1&&typeof u[0]=="string"?aa(u):Pm(aa(Vm(u,r)))}function sd(l,r,c){if(c===void 0&&(c=$n),!r)throw Ra(1,r);var u=function(d){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];return l(r,c,ny.apply(void 0,Li([d],g,!1)))};return u.attrs=function(d){return sd(l,r,tt(tt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return sd(l,r,tt(tt({},c),d))},u}var iy=function(l){return sd(wv,l)},h=iy;Qg.forEach(function(l){h[l]=iy(l)});var jv=function(){function l(r,c){this.rules=r,this.componentId=c,this.isStatic=ay(r),br.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,c,u,d){var g=d(nd(aa(this.rules,c,u,d)),""),y=this.componentId+r;u.insertRules(y,y,g)},l.prototype.removeStyles=function(r,c){c.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,c,u,d){r>2&&br.registerId(this.componentId+r),this.removeStyles(r,u),this.createStyles(r,c,u,d)},l}();function Tv(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var u=ny.apply(void 0,Li([l],r,!1)),d="sc-global-".concat(Pg(JSON.stringify(u))),g=new jv(u,d),y=function(b){var p=rd(),v=Zt.useContext(Hi),T=Zt.useRef(p.styleSheet.allocateGSInstance(d)).current;return p.styleSheet.server&&j(T,b,p.styleSheet,v,p.stylis),Zt.useLayoutEffect(function(){if(!p.styleSheet.server)return j(T,b,p.styleSheet,v,p.stylis),function(){return g.removeStyles(T,p.styleSheet)}},[T,b,p.styleSheet,v,p.stylis]),null};function j(b,p,v,T,C){if(g.isStatic)g.renderStyles(b,Y0,v,C);else{var L=tt(tt({},p),{theme:Yg(p,T,y.defaultProps)});g.renderStyles(b,L,v,C)}}return Zt.memo(y)}/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,oy=/^[\\/]{2}/;function $v(l,r){return r+l.replace(/\\/g,"/")}var Xm="popstate";function Zm(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function Av(l={}){function r(u,d){var p;let g=(p=d.state)==null?void 0:p.masked,{pathname:y,search:j,hash:b}=g||u.location;return cd("",{pathname:y,search:j,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default",g?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function c(u,d){return typeof d=="string"?d:_i(d)}return Rv(r,c,null,l)}function Oe(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Wt(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ev(){return Math.random().toString(36).substring(2,10)}function Im(l,r){return{usr:l.state,key:l.key,idx:r,masked:l.mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function cd(l,r,c=null,u,d){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?Rn(r):r,state:c,key:r&&r.key||u||Ev(),mask:d}}function _i({pathname:l="/",search:r="",hash:c=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Rn(l){let r={};if(l){let c=l.indexOf("#");c>=0&&(r.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(r.search=l.substring(u),l=l.substring(0,u)),l&&(r.pathname=l)}return r}function Rv(l,r,c,u={}){let{window:d=document.defaultView,v5Compat:g=!1}=u,y=d.history,j="POP",b=null,p=v();p==null&&(p=0,y.replaceState({...y.state,idx:p},""));function v(){return(y.state||{idx:null}).idx}function T(){j="POP";let _=v(),U=_==null?null:_-p;p=_,b&&b({action:j,location:H.location,delta:U})}function C(_,U){j="PUSH";let P=Zm(_)?_:cd(H.location,_,U);p=v()+1;let F=Im(P,p),te=H.createHref(P.mask||P);try{y.pushState(F,"",te)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;d.location.assign(te)}g&&b&&b({action:j,location:H.location,delta:1})}function L(_,U){j="REPLACE";let P=Zm(_)?_:cd(H.location,_,U);p=v();let F=Im(P,p),te=H.createHref(P.mask||P);y.replaceState(F,"",te),g&&b&&b({action:j,location:H.location,delta:0})}function q(_){return Dv(d,_)}let H={get action(){return j},get location(){return l(d,y)},listen(_){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Xm,T),b=_,()=>{d.removeEventListener(Xm,T),b=null}},createHref(_){return r(d,_)},createURL:q,encodeLocation(_){let U=q(_);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:C,replace:L,go(_){return y.go(_)}};return H}function Dv(l,r,c=!1){let u="http://localhost";l&&(u=l.location.origin!=="null"?l.location.origin:l.location.href),Oe(u,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:_i(r);return d=d.replace(/ $/,"%20"),!c&&oy.test(d)&&(d=u+d),new URL(d,u)}function ry(l,r,c="/"){return zv(l,r,c,!1)}function zv(l,r,c,u,d){let g=typeof r=="string"?Rn(r):r,y=$l(g.pathname||"/",c);if(y==null)return null;let j=Cv(l),b=null,p=Gv(y);for(let v=0;b==null&&v<j.length;++v)b=qv(j[v],p,u);return b}function Cv(l){let r=sy(l);return Ov(r),r}function sy(l,r=[],c=[],u="",d=!1){let g=(y,j,b=d,p)=>{let v={relativePath:p===void 0?y.path||"":p,caseSensitive:y.caseSensitive===!0,childrenIndex:j,route:y};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(u)&&b)return;Oe(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length)}let T=Kt([u,v.relativePath]),C=c.concat(v);y.children&&y.children.length>0&&(Oe(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),sy(y.children,r,C,T,b)),!(y.path==null&&!y.index)&&r.push({path:T,score:Hv(T,y.index),routesMeta:C.map((L,q)=>{let[H,_]=dy(L.relativePath,L.caseSensitive,q===C.length-1);return{...L,matcher:H,compiledParams:_}})})};return l.forEach((y,j)=>{var b;if(y.path===""||!((b=y.path)!=null&&b.includes("?")))g(y,j);else for(let p of cy(y.path))g(y,j,!0,p)}),r}function cy(l){let r=l.split("/");if(r.length===0)return[];let[c,...u]=r,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(u.length===0)return d?[g,""]:[g];let y=cy(u.join("/")),j=[];return j.push(...y.map(b=>b===""?g:[g,b].join("/"))),d&&j.push(...y),j.map(b=>l.startsWith("/")&&b===""?"/":b)}function Ov(l){l.sort((r,c)=>r.score!==c.score?c.score-r.score:_v(r.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Bv=/^:[\w-]+$/,kv=3,Mv=2,Nv=1,Lv=10,Uv=-2,Km=l=>l==="*";function Hv(l,r){let c=l.split("/"),u=c.length;return c.some(Km)&&(u+=Uv),r&&(u+=Mv),c.filter(d=>!Km(d)).reduce((d,g)=>d+(Bv.test(g)?kv:g===""?Nv:Lv),u)}function _v(l,r){return l.length===r.length&&l.slice(0,-1).every((u,d)=>u===r[d])?l[l.length-1]-r[r.length-1]:0}function qv(l,r,c=!1){let{routesMeta:u}=l,d={},g="/",y=[];for(let j=0;j<u.length;++j){let b=u[j],p=j===u.length-1,v=g==="/"?r:r.slice(g.length)||"/",T={path:b.relativePath,caseSensitive:b.caseSensitive,end:p},C=b.matcher&&b.compiledParams?uy(T,v,b.matcher,b.compiledParams):xr(T,v),L=b.route;if(!C&&p&&c&&!u[u.length-1].route.index&&(C=xr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},v)),!C)return null;Object.assign(d,C.params),y.push({params:d,pathname:Kt([g,C.pathname]),pathnameBase:Fv(Kt([g,C.pathnameBase])),route:L}),C.pathnameBase!=="/"&&(g=Kt([g,C.pathnameBase]))}return y}function xr(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=dy(l.path,l.caseSensitive,l.end);return uy(l,r,c,u)}function uy(l,r,c,u){let d=r.match(c);if(!d)return null;let g=d[0],y=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:u.reduce((p,{paramName:v,isOptional:T},C)=>{if(v==="*"){let q=j[C]||"";y=g.slice(0,g.length-q.length).replace(/(.)\/+$/,"$1")}const L=j[C];return T&&!L?p[v]=void 0:p[v]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:g,pathnameBase:y,pattern:l}}function dy(l,r=!1,c=!0){Wt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,j,b,p,v)=>{if(u.push({paramName:j,isOptional:b!=null}),b){let T=v.charAt(p+y.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),u]}function Gv(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Wt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function $l(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function Yv(l,r="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?Rn(l):l,g;return c?(c=fy(c),c.startsWith("/")?g=Wm(c.substring(1),"/"):g=Wm(c,r)):g=r,{pathname:g,search:Vv(u),hash:Pv(d)}}function Wm(l,r){let c=vr(r).split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function tu(l,r,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(l){return l.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function xd(l){let r=Qv(l);return r.map((c,u)=>u===r.length-1?c.pathname:c.pathnameBase)}function Er(l,r,c,u=!1){let d;typeof l=="string"?d=Rn(l):(d={...l},Oe(!d.pathname||!d.pathname.includes("?"),tu("?","pathname","search",d)),Oe(!d.pathname||!d.pathname.includes("#"),tu("#","pathname","hash",d)),Oe(!d.search||!d.search.includes("#"),tu("#","search","hash",d)));let g=l===""||d.pathname==="",y=g?"/":d.pathname,j;if(y==null)j=c;else{let T=r.length-1;if(!u&&y.startsWith("..")){let C=y.split("/");for(;C[0]==="..";)C.shift(),T-=1;d.pathname=C.join("/")}j=T>=0?r[T]:"/"}let b=Yv(d,j),p=y&&y!=="/"&&y.endsWith("/"),v=(g||y===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(p||v)&&(b.pathname+="/"),b}var fy=l=>l.replace(/[\\/]{2,}/g,"/"),Kt=l=>fy(l.join("/")),vr=l=>l.replace(/\/+$/,""),Fv=l=>vr(l).replace(/^\/*/,"/"),Vv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Pv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Xv=class{constructor(l,r,c,u=!1){this.status=l,this.statusText=r||"",this.internal=u,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Zv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Iv(l){let r=l.map(c=>c.route.path).filter(Boolean);return Kt(r)||"/"}var hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function py(l,r){let c=l;if(typeof c!="string"||!bd.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let u=c,d=!1;if(hy)try{let g=new URL(window.location.href),y=oy.test(c)?new URL($v(c,g.protocol)):new URL(c),j=$l(y.pathname,r);y.origin===g.origin&&j!=null?c=j+y.search+y.hash:d=!0}catch{Wt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var my=["POST","PUT","PATCH","DELETE"];new Set(my);var Kv=["GET",...my];new Set(Kv);var Wv=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Jv(l){try{return Wv.includes(new URL(l).protocol)}catch{return!1}}var Dn=A.createContext(null);Dn.displayName="DataRouter";var Rr=A.createContext(null);Rr.displayName="DataRouterState";var gy=A.createContext(!1);function e1(){return A.useContext(gy)}var yy=A.createContext({isTransitioning:!1});yy.displayName="ViewTransition";var t1=A.createContext(new Map);t1.displayName="Fetchers";var l1=A.createContext(null);l1.displayName="Await";var Rt=A.createContext(null);Rt.displayName="Navigation";var qi=A.createContext(null);qi.displayName="Location";var Qt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var vd=A.createContext(null);vd.displayName="RouteError";var by="REACT_ROUTER_ERROR",a1="REDIRECT",n1="ROUTE_ERROR_RESPONSE";function i1(l){if(l.startsWith(`${by}:${a1}:{`))try{let r=JSON.parse(l.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function o1(l){if(l.startsWith(`${by}:${n1}:{`))try{let r=JSON.parse(l.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Xv(r.status,r.statusText,r.data)}catch{}}function r1(l,{relative:r}={}){Oe(zn(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=A.useContext(Rt),{hash:d,pathname:g,search:y}=Yi(l,{relative:r}),j=g;return c!=="/"&&(j=g==="/"?c:Kt([c,g])),u.createHref({pathname:j,search:y,hash:d})}function zn(){return A.useContext(qi)!=null}function Ft(){return Oe(zn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(qi).location}var xy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vy(l){A.useContext(Rt).static||A.useLayoutEffect(l)}function ol(){let{isDataRoute:l}=A.useContext(Qt);return l?w1():s1()}function s1(){Oe(zn(),"useNavigate() may be used only in the context of a <Router> component.");let l=A.useContext(Dn),{basename:r,navigator:c}=A.useContext(Rt),{matches:u}=A.useContext(Qt),{pathname:d}=Ft(),g=JSON.stringify(xd(u)),y=A.useRef(!1);return vy(()=>{y.current=!0}),A.useCallback((b,p={})=>{if(Wt(y.current,xy),!y.current)return;if(typeof b=="number"){c.go(b);return}let v=Er(b,JSON.parse(g),d,p.relative==="path");l==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:Kt([r,v.pathname])),(p.replace?c.replace:c.push)(v,p.state,p)},[r,c,g,d,l])}var c1=A.createContext(null);function u1(l){let r=A.useContext(Qt).outlet;return A.useMemo(()=>r&&A.createElement(c1.Provider,{value:l},r),[r,l])}function Gi(){let{matches:l}=A.useContext(Qt),r=l[l.length-1];return(r==null?void 0:r.params)??{}}function Yi(l,{relative:r}={}){let{matches:c}=A.useContext(Qt),{pathname:u}=Ft(),d=JSON.stringify(xd(c));return A.useMemo(()=>Er(l,JSON.parse(d),u,r==="path"),[l,d,u,r])}function d1(l,r){return Sy(l,r)}function Sy(l,r,c){var _;Oe(zn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=A.useContext(Rt),{matches:d}=A.useContext(Qt),g=d[d.length-1],y=g?g.params:{},j=g?g.pathname:"/",b=g?g.pathnameBase:"/",p=g&&g.route;{let U=p&&p.path||"";jy(j,!p||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Ft(),T;if(r){let U=typeof r=="string"?Rn(r):r;Oe(b==="/"||((_=U.pathname)==null?void 0:_.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${U.pathname}" was given in the \`location\` prop.`),T=U}else T=v;let C=T.pathname||"/",L=C;if(b!=="/"){let U=b.replace(/^\//,"").split("/");L="/"+C.replace(/^\//,"").split("/").slice(U.length).join("/")}let q=c&&c.state.matches.length?c.state.matches.map(U=>Object.assign(U,{route:c.manifest[U.route.id]||U.route})):ry(l,{pathname:L});Wt(p||q!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Wt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=g1(q&&q.map(U=>Object.assign({},U,{params:Object.assign({},y,U.params),pathname:Kt([b,u.encodeLocation?u.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?b:Kt([b,u.encodeLocation?u.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,c);return r&&H?A.createElement(qi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...T},navigationType:"POP"}},H):H}function f1(){let l=S1(),r=Zv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},g={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:g},"ErrorBoundary")," or"," ",A.createElement("code",{style:g},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},r),c?A.createElement("pre",{style:d},c):null,y)}var h1=A.createElement(f1,null),wy=class extends A.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.onError?this.props.onError(l,r):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const c=o1(l.digest);c&&(l=c)}let r=l!==void 0?A.createElement(Qt.Provider,{value:this.props.routeContext},A.createElement(vd.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?A.createElement(p1,{error:l},r):r}};wy.contextType=gy;var lu=new WeakMap;function p1({children:l,error:r}){let{basename:c}=A.useContext(Rt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=i1(r.digest);if(u){let d=lu.get(r);if(d)throw d;let g=py(u.location,c),y=g.absoluteURL||g.to;if(Jv(y))throw new Error("Invalid redirect location");if(hy&&!lu.get(r))if(g.isExternal||u.reloadDocument)window.location.href=y;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(g.to,{replace:u.replace}));throw lu.set(r,j),j}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${y}`})}}return l}function m1({routeContext:l,match:r,children:c}){let u=A.useContext(Dn);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),A.createElement(Qt.Provider,{value:l},c)}function g1(l,r=[],c){let u=c==null?void 0:c.state;if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,g=u==null?void 0:u.errors;if(g!=null){let v=d.findIndex(T=>T.route.id&&(g==null?void 0:g[T.route.id])!==void 0);Oe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let y=!1,j=-1;if(c&&u){y=u.renderFallback;for(let v=0;v<d.length;v++){let T=d[v];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(j=v),T.route.id){let{loaderData:C,errors:L}=u,q=T.route.loader&&!C.hasOwnProperty(T.route.id)&&(!L||L[T.route.id]===void 0);if(T.route.lazy||q){c.isStatic&&(y=!0),j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}}let b=c==null?void 0:c.onError,p=u&&b?(v,T)=>{var C,L;b(v,{location:u.location,params:((L=(C=u.matches)==null?void 0:C[0])==null?void 0:L.params)??{},pattern:Iv(u.matches),errorInfo:T})}:void 0;return d.reduceRight((v,T,C)=>{let L,q=!1,H=null,_=null;u&&(L=g&&T.route.id?g[T.route.id]:void 0,H=T.route.errorElement||h1,y&&(j<0&&C===0?(jy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,_=null):j===C&&(q=!0,_=T.route.hydrateFallbackElement||null)));let U=r.concat(d.slice(0,C+1)),P=()=>{let F;return L?F=H:q?F=_:T.route.Component?F=A.createElement(T.route.Component,null):T.route.element?F=T.route.element:F=v,A.createElement(m1,{match:T,routeContext:{outlet:v,matches:U,isDataRoute:u!=null},children:F})};return u&&(T.route.ErrorBoundary||T.route.errorElement||C===0)?A.createElement(wy,{location:u.location,revalidation:u.revalidation,component:H,error:L,children:P(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:p}):P()},null)}function Sd(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function y1(l){let r=A.useContext(Dn);return Oe(r,Sd(l)),r}function b1(l){let r=A.useContext(Rr);return Oe(r,Sd(l)),r}function x1(l){let r=A.useContext(Qt);return Oe(r,Sd(l)),r}function wd(l){let r=x1(l),c=r.matches[r.matches.length-1];return Oe(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function v1(){return wd("useRouteId")}function S1(){var u;let l=A.useContext(vd),r=b1("useRouteError"),c=wd("useRouteError");return l!==void 0?l:(u=r.errors)==null?void 0:u[c]}function w1(){let{router:l}=y1("useNavigate"),r=wd("useNavigate"),c=A.useRef(!1);return vy(()=>{c.current=!0}),A.useCallback(async(d,g={})=>{Wt(c.current,xy),c.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:r,...g}))},[l,r])}var Jm={};function jy(l,r,c){!r&&!Jm[l]&&(Jm[l]=!0,Wt(!1,c))}A.memo(j1);function j1({routes:l,manifest:r,future:c,state:u,isStatic:d,onError:g}){return Sy(l,void 0,{manifest:r,state:u,isStatic:d,onError:g})}function Da({to:l,replace:r,state:c,relative:u}){Oe(zn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=A.useContext(Rt);Wt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=A.useContext(Qt),{pathname:y}=Ft(),j=ol(),b=Er(l,xd(g),y,u==="path"),p=JSON.stringify(b);return A.useEffect(()=>{j(JSON.parse(p),{replace:r,state:c,relative:u})},[j,p,u,r,c]),null}function Ty(l){return u1(l.context)}function Ce(l){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function T1({basename:l="/",children:r=null,location:c,navigationType:u="POP",navigator:d,static:g=!1,useTransitions:y}){Oe(!zn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=l.replace(/^\/*/,"/"),b=A.useMemo(()=>({basename:j,navigator:d,static:g,useTransitions:y,future:{}}),[j,d,g,y]);typeof c=="string"&&(c=Rn(c));let{pathname:p="/",search:v="",hash:T="",state:C=null,key:L="default",mask:q}=c,H=A.useMemo(()=>{let _=$l(p,j);return _==null?null:{location:{pathname:_,search:v,hash:T,state:C,key:L,mask:q},navigationType:u}},[j,p,v,T,C,L,u,q]);return Wt(H!=null,`<Router basename="${j}"> is not able to match the URL "${p}${v}${T}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:A.createElement(Rt.Provider,{value:b},A.createElement(qi.Provider,{children:r,value:H}))}function $1({children:l,location:r}){return d1(ud(l),r)}function ud(l,r=[]){let c=[];return A.Children.forEach(l,(u,d)=>{if(!A.isValidElement(u))return;let g=[...r,d];if(u.type===A.Fragment){c.push.apply(c,ud(u.props.children,g));return}Oe(u.type===Ce,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=ud(u.props.children,g)),c.push(y)}),c}var hr="get",pr="application/x-www-form-urlencoded";function Dr(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function A1(l){return Dr(l)&&l.tagName.toLowerCase()==="button"}function E1(l){return Dr(l)&&l.tagName.toLowerCase()==="form"}function R1(l){return Dr(l)&&l.tagName.toLowerCase()==="input"}function D1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function z1(l,r){return l.button===0&&(!r||r==="_self")&&!D1(l)}var rr=null;function C1(){if(rr===null)try{new FormData(document.createElement("form"),0),rr=!1}catch{rr=!0}return rr}var O1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(l){return l!=null&&!O1.has(l)?(Wt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pr}"`),null):l}function B1(l,r){let c,u,d,g,y;if(E1(l)){let j=l.getAttribute("action");u=j?$l(j,r):null,c=l.getAttribute("method")||hr,d=au(l.getAttribute("enctype"))||pr,g=new FormData(l)}else if(A1(l)||R1(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||j.getAttribute("action");if(u=b?$l(b,r):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||hr,d=au(l.getAttribute("formenctype"))||au(j.getAttribute("enctype"))||pr,g=new FormData(j,l),!C1()){let{name:p,type:v,value:T}=l;if(v==="image"){let C=p?`${p}.`:"";g.append(`${C}x`,"0"),g.append(`${C}y`,"0")}else p&&g.append(p,T)}}else{if(Dr(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=hr,u=null,d=pr,y=l}return g&&d==="text/plain"&&(y=g,g=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:g,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jd(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function $y(l,r,c,u){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:r&&$l(d.pathname,r)==="/"?d.pathname=`${vr(r)}/_root.${u}`:d.pathname=`${vr(d.pathname)}.${u}`,d}async function k1(l,r){if(l.id in r)return r[l.id];try{let c=await import(l.module);return r[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function N1(l,r,c){let u=await Promise.all(l.map(async d=>{let g=r.routes[d.route.id];if(g){let y=await k1(g,c);return y.links?y.links():[]}return[]}));return _1(u.flat(1).filter(M1).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function eg(l,r,c,u,d,g){let y=(b,p)=>c[p]?b.route.id!==c[p].route.id:!0,j=(b,p)=>{var v;return c[p].pathname!==b.pathname||((v=c[p].route.path)==null?void 0:v.endsWith("*"))&&c[p].params["*"]!==b.params["*"]};return g==="assets"?r.filter((b,p)=>y(b,p)||j(b,p)):g==="data"?r.filter((b,p)=>{var T;let v=u.routes[b.route.id];if(!v||!v.hasLoader)return!1;if(y(b,p)||j(b,p))return!0;if(b.route.shouldRevalidate){let C=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((T=c[0])==null?void 0:T.params)||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function L1(l,r,{includeHydrateFallback:c}={}){return U1(l.map(u=>{let d=r.routes[u.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function U1(l){return[...new Set(l)]}function H1(l){let r={},c=Object.keys(l).sort();for(let u of c)r[u]=l[u];return r}function _1(l,r){let c=new Set;return new Set(r),l.reduce((u,d)=>{let g=JSON.stringify(H1(d));return c.has(g)||(c.add(g),u.push({key:g,link:d})),u},[])}function Td(){let l=A.useContext(Dn);return jd(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function q1(){let l=A.useContext(Rr);return jd(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var $d=A.createContext(void 0);$d.displayName="FrameworkContext";function zr(){let l=A.useContext($d);return jd(l,"You must render this element inside a <HydratedRouter> element"),l}function G1(l,r){let c=A.useContext($d),[u,d]=A.useState(!1),[g,y]=A.useState(!1),{onFocus:j,onBlur:b,onMouseEnter:p,onMouseLeave:v,onTouchStart:T}=r,C=A.useRef(null);A.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let H=U=>{U.forEach(P=>{y(P.isIntersecting)})},_=new IntersectionObserver(H,{threshold:.5});return C.current&&_.observe(C.current),()=>{_.disconnect()}}},[l]),A.useEffect(()=>{if(u){let H=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(H)}}},[u]);let L=()=>{d(!0)},q=()=>{d(!1),y(!1)};return c?l!=="intent"?[g,C,{}]:[g,C,{onFocus:Bi(j,L),onBlur:Bi(b,q),onMouseEnter:Bi(p,L),onMouseLeave:Bi(v,q),onTouchStart:Bi(T,L)}]:[!1,C,{}]}function Bi(l,r){return c=>{l&&l(c),c.defaultPrevented||r(c)}}function Y1({page:l,...r}){let c=e1(),{nonce:u}=zr(),{router:d}=Td(),g=A.useMemo(()=>ry(d.routes,l,d.basename),[d.routes,l,d.basename]);return g?(r.nonce==null&&u&&(r={...r,nonce:u}),c?A.createElement(F1,{page:l,matches:g,...r}):A.createElement(V1,{page:l,matches:g,...r})):null}function Q1(l){let{manifest:r,routeModules:c}=zr(),[u,d]=A.useState([]);return A.useEffect(()=>{let g=!1;return N1(l,r,c).then(y=>{g||d(y)}),()=>{g=!0}},[l,r,c]),u}function F1({page:l,matches:r,...c}){let u=Ft(),{future:d}=zr(),{basename:g}=Td(),y=A.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let j=$y(l,g,d.v8_trailingSlashAwareDataRequests,"rsc"),b=!1,p=[];for(let v of r)typeof v.route.shouldRevalidate=="function"?b=!0:p.push(v.route.id);return b&&p.length>0&&j.searchParams.set("_routes",p.join(",")),[j.pathname+j.search]},[g,d.v8_trailingSlashAwareDataRequests,l,u,r]);return A.createElement(A.Fragment,null,y.map(j=>A.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...c})))}function V1({page:l,matches:r,...c}){let u=Ft(),{future:d,manifest:g,routeModules:y}=zr(),{basename:j}=Td(),{loaderData:b,matches:p}=q1(),v=A.useMemo(()=>eg(l,r,p,g,u,"data"),[l,r,p,g,u]),T=A.useMemo(()=>eg(l,r,p,g,u,"assets"),[l,r,p,g,u]),C=A.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let H=new Set,_=!1;if(r.forEach(P=>{var te;let F=g.routes[P.route.id];!F||!F.hasLoader||(!v.some(V=>V.route.id===P.route.id)&&P.route.id in b&&((te=y[P.route.id])!=null&&te.shouldRevalidate)||F.hasClientLoader?_=!0:H.add(P.route.id))}),H.size===0)return[];let U=$y(l,j,d.v8_trailingSlashAwareDataRequests,"data");return _&&H.size>0&&U.searchParams.set("_routes",r.filter(P=>H.has(P.route.id)).map(P=>P.route.id).join(",")),[U.pathname+U.search]},[j,d.v8_trailingSlashAwareDataRequests,b,u,g,v,r,l,y]),L=A.useMemo(()=>L1(T,g),[T,g]),q=Q1(T);return A.createElement(A.Fragment,null,C.map(H=>A.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...c})),L.map(H=>A.createElement("link",{key:H,rel:"modulepreload",href:H,...c})),q.map(({key:H,link:_})=>A.createElement("link",{key:H,nonce:c.nonce,..._,crossOrigin:_.crossOrigin??c.crossOrigin})))}function P1(...l){return r=>{l.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X1&&(window.__reactRouterVersion="7.18.0")}catch{}function Z1({basename:l,children:r,useTransitions:c,window:u}){let d=A.useRef();d.current==null&&(d.current=Av({window:u,v5Compat:!0}));let g=d.current,[y,j]=A.useState({action:g.action,location:g.location}),b=A.useCallback(p=>{c===!1?j(p):A.startTransition(()=>j(p))},[c]);return A.useLayoutEffect(()=>g.listen(b),[g,b]),A.createElement(T1,{basename:l,children:r,location:y.location,navigationType:y.action,navigator:g,useTransitions:c})}var lt=A.forwardRef(function({onClick:r,discover:c="render",prefetch:u="none",relative:d,reloadDocument:g,replace:y,mask:j,state:b,target:p,to:v,preventScrollReset:T,viewTransition:C,defaultShouldRevalidate:L,...q},H){let{basename:_,navigator:U,useTransitions:P}=A.useContext(Rt),F=typeof v=="string"&&bd.test(v),te=py(v,_);v=te.to;let V=r1(v,{relative:d}),W=Ft(),Z=null;if(j){let $e=Er(j,[],W.mask?W.mask.pathname:"/",!0);_!=="/"&&($e.pathname=$e.pathname==="/"?_:Kt([_,$e.pathname])),Z=U.createHref($e)}let[Te,Ue,Dt]=G1(u,q),yt=W1(v,{replace:y,mask:j,state:b,target:p,preventScrollReset:T,relative:d,viewTransition:C,defaultShouldRevalidate:L,useTransitions:P});function qe($e){r&&r($e),$e.defaultPrevented||yt($e)}let zt=!(te.isExternal||g),Ct=A.createElement("a",{...q,...Dt,href:(zt?Z:void 0)||te.absoluteURL||V,onClick:zt?qe:r,ref:P1(H,Ue),target:p,"data-discover":!F&&c==="render"?"true":void 0});return Te&&!F?A.createElement(A.Fragment,null,Ct,A.createElement(Y1,{page:V})):Ct});lt.displayName="Link";var Ad=A.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:u="",end:d=!1,style:g,to:y,viewTransition:j,children:b,...p},v){let T=Yi(y,{relative:p.relative}),C=Ft(),L=A.useContext(Rr),{navigator:q,basename:H}=A.useContext(Rt),_=L!=null&&aS(T)&&j===!0,U=q.encodeLocation?q.encodeLocation(T).pathname:T.pathname,P=C.pathname,F=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;c||(P=P.toLowerCase(),F=F?F.toLowerCase():null,U=U.toLowerCase()),F&&H&&(F=$l(F,H)||F);const te=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let V=P===U||!d&&P.startsWith(U)&&P.charAt(te)==="/",W=F!=null&&(F===U||!d&&F.startsWith(U)&&F.charAt(U.length)==="/"),Z={isActive:V,isPending:W,isTransitioning:_},Te=V?r:void 0,Ue;typeof u=="function"?Ue=u(Z):Ue=[u,V?"active":null,W?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof g=="function"?g(Z):g;return A.createElement(lt,{...p,"aria-current":Te,className:Ue,ref:v,style:Dt,to:y,viewTransition:j},typeof b=="function"?b(Z):b)});Ad.displayName="NavLink";var I1=A.forwardRef(({discover:l="render",fetcherKey:r,navigate:c,reloadDocument:u,replace:d,state:g,method:y=hr,action:j,onSubmit:b,relative:p,preventScrollReset:v,viewTransition:T,defaultShouldRevalidate:C,...L},q)=>{let{useTransitions:H}=A.useContext(Rt),_=tS(),U=lS(j,{relative:p}),P=y.toLowerCase()==="get"?"get":"post",F=typeof j=="string"&&bd.test(j),te=V=>{if(b&&b(V),V.defaultPrevented)return;V.preventDefault();let W=V.nativeEvent.submitter,Z=(W==null?void 0:W.getAttribute("formmethod"))||y,Te=()=>_(W||V.currentTarget,{fetcherKey:r,method:Z,navigate:c,replace:d,state:g,relative:p,preventScrollReset:v,viewTransition:T,defaultShouldRevalidate:C});H&&c!==!1?A.startTransition(()=>Te()):Te()};return A.createElement("form",{ref:q,method:P,action:U,onSubmit:u?b:te,...L,"data-discover":!F&&l==="render"?"true":void 0})});I1.displayName="Form";function K1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(l){let r=A.useContext(Dn);return Oe(r,K1(l)),r}function W1(l,{target:r,replace:c,mask:u,state:d,preventScrollReset:g,relative:y,viewTransition:j,defaultShouldRevalidate:b,useTransitions:p}={}){let v=ol(),T=Ft(),C=Yi(l,{relative:y});return A.useCallback(L=>{if(z1(L,r)){L.preventDefault();let q=c!==void 0?c:_i(T)===_i(C),H=()=>v(l,{replace:q,mask:u,state:d,preventScrollReset:g,relative:y,viewTransition:j,defaultShouldRevalidate:b});p?A.startTransition(()=>H()):H()}},[T,v,C,c,u,d,r,l,g,y,j,b,p])}var J1=0,eS=()=>`__${String(++J1)}__`;function tS(){let{router:l}=Ay("useSubmit"),{basename:r}=A.useContext(Rt),c=v1(),u=l.fetch,d=l.navigate;return A.useCallback(async(g,y={})=>{let{action:j,method:b,encType:p,formData:v,body:T}=B1(g,r);if(y.navigate===!1){let C=y.fetcherKey||eS();await u(C,c,y.action||j,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:v,body:T,formMethod:y.method||b,formEncType:y.encType||p,flushSync:y.flushSync})}else await d(y.action||j,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:v,body:T,formMethod:y.method||b,formEncType:y.encType||p,replace:y.replace,state:y.state,fromRouteId:c,flushSync:y.flushSync,viewTransition:y.viewTransition})},[u,d,r,c])}function lS(l,{relative:r}={}){let{basename:c}=A.useContext(Rt),u=A.useContext(Qt);Oe(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),g={...Yi(l||".",{relative:r})},y=Ft();if(l==null){g.search=y.search;let j=new URLSearchParams(g.search),b=j.getAll("index");if(b.some(v=>v==="")){j.delete("index"),b.filter(T=>T).forEach(T=>j.append("index",T));let v=j.toString();g.search=v?`?${v}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:Kt([c,g.pathname])),_i(g)}function aS(l,{relative:r}={}){let c=A.useContext(yy);Oe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Ay("useViewTransitionState"),d=Yi(l,{relative:r});if(!c.isTransitioning)return!1;let g=$l(c.currentLocation.pathname,u)||c.currentLocation.pathname,y=$l(c.nextLocation.pathname,u)||c.nextLocation.pathname;return xr(d.pathname,y)!=null||xr(d.pathname,g)!=null}const be=h.div`
  width: 100%;
  max-width: ${({theme:l})=>l.layout.maxWidth};
  margin: 0 auto;
  padding-left: clamp(28px, 5vw, 64px);
  padding-right: clamp(28px, 5vw, 64px);
`,nS={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"숨 쉬고, 먹고, 십자가를 따르는 하루",body:"신앙을 일상의 루틴으로 연결하는 라이프스타일 브랜드",cta:"브랜드 이야기 보기"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"하루의 작은 점(Dot)이 선(Line)이 되고, 선이 모여 하나님과 동행하는 삶의 형태(Form)가 됩니다.",items:[{title:"Dot",description:`하루의 작은 실천.
QT 5분, 성경 한 장, 감사 한 줄.`},{title:"Line",description:`작은 실천이 반복되어 습관이 되고,
지속 가능한 루틴이 됩니다.`},{title:"Form",description:`습관이 쌓여 삶의 형태가 되고,
하나님과 동행하는 삶이 됩니다.`}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:`태초에 하나님은 자신의 형상으로 사람을 빚으셨지만,
인간의 죄로 하나님과 사람 사이의 선(line)은 끊어졌습니다.
그때 독생자 예수님이 한 점(dot)으로 이 땅에 오셔서,
십자가의 죽음과 부활로 끊어졌던 선을 다시 이어 생명의 길을 여셨습니다.

하루하루 이어지는 삶이 하나님의 구원과 만날 때,
절망뿐이던 일상에 은혜가 흐르고 잃어버렸던 주님의 형상(form)이 믿음 안에서 새 피조물로 회복됩니다.
작은 점이 모여 선이 되고,
선이 빛으로 드러나 완전한 형상이 되는 것 —
이것이 DoLF의 이야기입니다.`,closing:["점으로 시작된 생명의 이야기,","선으로 이어지는 믿음의 여정,","빛으로 드러나는 하나님의 형상."]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"신앙과 일상을 함께 기록하는 플래그십 플래너"},{name:"Bible Reading Tracker",description:"성경 통독을 한눈에 시각화하는 기록 도구"},{name:"2027 Calendar",description:"점자와 숫자로 표현한 미니멀 캘린더"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"신앙을 일상의 루틴으로 연결하는 라이프스타일 브랜드, DoLF의 이야기"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"많은 사람들이 신앙을 지속하지 못하는 것은 의지가 부족해서가 아닙니다. 신앙을 일상의 루틴으로 만들어 주는 도구와 경험이 부족하기 때문입니다. DoLF는 매일의 작은 실천이 습관이 되고, 습관이 삶의 형태가 되도록 돕습니다."},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"신앙을 일상의 루틴으로 연결한다",description:"신앙이 특별한 순간의 결심이 아니라 매일의 습관이 되도록 돕습니다."},{label:"Vision",subhead:"하나님과 동행하는 삶을 지속 가능한 습관으로",description:"작은 실천이 쌓여 삶의 방향을 바꾸는 신앙 라이프스타일을 꿈꿉니다."}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"신앙은 DoLF의 출발점입니다."},{label:"Consistency",description:"완벽함보다 지속성을 중요하게 생각합니다."},{label:"Simplicity",description:"단순함에서 좋은 습관이 시작됩니다."},{label:"Growth",description:"결과보다 성장의 과정을 소중히 여깁니다."},{label:"Community",description:"함께할 때 변화는 더 오래 지속됩니다."}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"신앙을 일상의 루틴으로 만들어 주는 DoLF의 제품들"},features:[{name:"Breathe — Planner & Diary",description:"하루를 계획하는 동시에 감사·묵상·성찰을 기록하며, 하나님과의 관계를 일상 속에서 이어가는 DoLF의 플래그십 플래너입니다.",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"1절을 하나의 점(Dot)으로. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하는 기록 도구입니다.",spec:"B5  ·  120P  ·  LAY-FLAT"},{name:"2027 Calendar",description:"점자(braille)와 숫자로 월을 표현한 미니멀 캘린더. B5 양면과 B2 포스터로 구성됩니다.",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"사복음서 대조, 시편·잠언, 평행 본문 등 한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 낱장과 접지 형태로 고를 수 있습니다.",spec:"B5  ·  SINGLE / FOLDED  ·  BY THEME"}],detailCta:"자세히 보기"},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"혼자보다 함께할 때 신앙은 더 오래 지속됩니다. DoLF의 소모임 이야기"},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"성경 1독 소모임",description:"12주 동안 함께 통독하며 완주를 돕는 소모임입니다."},{title:"QT Circle",subhead:"QT 습관 형성",description:"매일의 묵상을 함께 나누며 QT를 습관으로 만듭니다."},{title:"Faith & Life Circle",subhead:"신앙과 삶",description:"신앙과 일상의 고민을 함께 나누는 공동체입니다."}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"Bible Reading Circle은 12주 프로그램으로 운영되며, 참가비 49,000–99,000원에 트래커 제품이 포함됩니다.",cta:"함께하기 문의"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"제품 문의, 협업, 소모임 참여 — 무엇이든 편하게 연락 주세요."},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"DM 또는 이메일로 문의해 주세요"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"궁금한 점을 남겨 주세요. 확인 후 빠르게 답변 드리겠습니다.",namePlaceholder:"이름",emailPlaceholder:"이메일",messagePlaceholder:"메시지를 입력해 주세요",submit:"보내기",b2bText:"도매 · B2B 파트너십 문의는 별도로 진행됩니다.",b2bCta:"B2B 문의하기"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"신앙을 일상의 루틴으로 — DoLF의 제품을 만나보세요."},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"장바구니에 담겼습니다"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"로그아웃",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"가입하신 계정으로 로그인하세요. 계정 권한에 따라 자동으로 이동합니다.",emailLabel:"이메일",emailPlaceholder:"you@example.com",passwordLabel:"비밀번호",passwordPlaceholder:"비밀번호를 입력하세요",forgotPassword:"비밀번호 찾기",keepLoggedIn:"로그인 상태 유지",submit:"Sign In",notice:"관리자 계정으로 로그인하면 관리자 콘솔로, 일반 회원은 마이페이지로 자동 이동합니다. 별도 선택은 필요 없습니다.",noAccount:"계정이 없으신가요?",signUpLink:"회원가입",notFound:"등록되지 않은 이메일입니다. 시드 계정 또는 가입한 이메일을 사용해 주세요."},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"* 표시는 필수 항목입니다. 해외 회원은 이메일만 입력하면 가입할 수 있어요.",countryLabel:"국가 / 지역 *",nameLabel:"이름 *",namePlaceholder:"이름을 입력하세요",emailLabel:"이메일 *",emailPlaceholder:"you@example.com",phoneLabel:"전화번호 (선택)",phonePlaceholder:"10-0000-0000",passwordLabel:"비밀번호 *",passwordPlaceholder:"8자 이상 입력",passwordConfirmLabel:"비밀번호 확인 *",passwordConfirmPlaceholder:"비밀번호를 다시 입력",terms:"이용약관 및 개인정보 처리방침에 동의합니다.",submit:"Sign Up",hasAccount:"이미 계정이 있으신가요?",signInLink:"로그인"},myPage:{eyebrow:"MY PAGE",greeting:"안녕하세요, {name}님",subhead:"DoLF와 함께한 기록을 한곳에서 관리하세요.",statsOrders:"주문",statsWishlist:"위시리스트",statsSpent:"누적 구매",ordersTitle:"주문 내역",wishlistTitle:"위시리스트",settingsTitle:"계정 설정",settingName:"이름",settingEmail:"이메일",settingPhone:"전화번호",settingAddress:"주소",settingMembership:"멤버십",edit:"수정"}}},iS={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"A day to breathe, to eat, and to follow the cross",body:"A lifestyle brand that weaves faith into your everyday routine",cta:"Discover our story"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"A small dot of each day becomes a line, and lines come together to form a life that walks with God.",items:[{title:"Dot",description:"A small daily practice. Five minutes of quiet time, one chapter of Scripture, one line of gratitude."},{title:"Line",description:"Small practices, repeated, become habits — and habits become a sustainable routine."},{title:"Form",description:"Habits build up into the shape of a life — a life that walks with God."}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:"In the beginning, God shaped life that started from a single dot. That life was drawn into a line, revealed in light, and finally restored into a single form. DoLF walks this journey of restoration alongside you, through the small practices of everyday life.",closing:["A story of life that begins with a dot,","a journey of faith drawn into a line,","the image of God revealed in light."]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"Our flagship planner for recording faith and everyday life together"},{name:"Bible Reading Tracker",description:"A recording tool that brings your Bible reading journey into view at a glance"},{name:"2027 Calendar",description:"A minimal calendar expressed through braille and numbers"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"The story of DoLF, a lifestyle brand that weaves faith into your everyday routine"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"For many people, faith falters not because they lack willpower, but because they lack the tools and experiences that turn faith into a daily routine. DoLF helps small daily practices become habits, and habits become the shape of a life."},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"To weave faith into the everyday routine",description:"We help faith become a daily habit rather than a resolution made in special moments."},{label:"Vision",subhead:"A life walking with God, sustained as a lasting habit",description:"We dream of a faith-driven lifestyle where small practices add up and change the direction of a life."}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"Faith is where DoLF begins."},{label:"Consistency",description:"We value consistency over perfection."},{label:"Simplicity",description:"Good habits begin with simplicity."},{label:"Growth",description:"We cherish the process of growth over results."},{label:"Community",description:"Change lasts longer when we walk together."}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"DoLF's products that turn faith into a daily routine"},features:[{name:"Breathe — Planner & Diary",description:"DoLF's flagship planner that lets you plan your day while recording gratitude, meditation, and reflection — carrying your relationship with God through everyday life.",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"One verse as a single dot. A recording tool that visually completes the reading journey as dots gather into lines, and lines into a whole.",spec:"B5  ·  120P  ·  LAY-FLAT"},{name:"2027 Calendar",description:"A minimal calendar that expresses each month through braille and numbers. Available as a B5 double-sided sheet and a B2 poster.",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"A single-page reading tracker for following one theme in depth — gospel harmonies, Psalms and Proverbs, parallel passages, and more. Available as a single sheet or a folded format.",spec:"B5  ·  SINGLE / FOLDED  ·  BY THEME"}],detailCta:"View details"},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"Faith lasts longer together than alone. The story of DoLF circles."},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"Read the Bible together",description:"A circle that reads through Scripture together over 12 weeks and helps you finish the journey."},{title:"QT Circle",subhead:"Building the quiet time habit",description:"Share daily meditations together and turn quiet time into a habit."},{title:"Faith & Life Circle",subhead:"Faith and life",description:"A community for sharing the questions of faith and everyday life together."}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"The Bible Reading Circle runs as a 12-week program. The participation fee of 49,000–99,000 KRW includes a tracker product.",cta:"Inquire about joining"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"Product inquiries, collaborations, joining a circle — reach out about anything."},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"Reach us by DM or email"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"Leave us your question. We will review it and get back to you quickly.",namePlaceholder:"Name",emailPlaceholder:"Email",messagePlaceholder:"Enter your message",submit:"Send",b2bText:"Wholesale and B2B partnership inquiries are handled separately.",b2bCta:"B2B inquiry"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"Faith as a daily routine — explore the products of DoLF."},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"Added to your cart"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"Log Out",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"Sign in with your account. You will be routed automatically based on your account permissions.",emailLabel:"Email",emailPlaceholder:"you@example.com",passwordLabel:"Password",passwordPlaceholder:"Enter your password",forgotPassword:"Forgot password",keepLoggedIn:"Keep me logged in",submit:"Sign In",notice:"Sign in with an admin account to go to the admin console, or with a member account to go to My Page. No separate selection is needed.",noAccount:"Don't have an account?",signUpLink:"Sign up",notFound:"This email is not registered. Please use a seed account or the email you signed up with."},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"Fields marked * are required. International members can sign up with just an email.",countryLabel:"Country / Region *",nameLabel:"Name *",namePlaceholder:"Enter your name",emailLabel:"Email *",emailPlaceholder:"you@example.com",phoneLabel:"Phone (optional)",phonePlaceholder:"10-0000-0000",passwordLabel:"Password *",passwordPlaceholder:"At least 8 characters",passwordConfirmLabel:"Confirm password *",passwordConfirmPlaceholder:"Re-enter your password",terms:"I agree to the Terms of Service and Privacy Policy.",submit:"Sign Up",hasAccount:"Already have an account?",signInLink:"Sign in"},myPage:{eyebrow:"MY PAGE",greeting:"Hello, {name}",subhead:"Manage everything you have done with DoLF in one place.",statsOrders:"Orders",statsWishlist:"Wishlist",statsSpent:"Total Spent",ordersTitle:"Order History",wishlistTitle:"Wishlist",settingsTitle:"Account Settings",settingName:"Name",settingEmail:"Email",settingPhone:"Phone",settingAddress:"Address",settingMembership:"Membership",edit:"Edit"}}},oS={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"呼吸し、食べ、十字架に従う一日",body:"信仰を日常のルーティンへとつなぐライフスタイルブランド",cta:"ブランドストーリーを見る"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"一日の小さな点（Dot）が線（Line）になり、線が集まって神とともに歩む人生の形（Form）になります。",items:[{title:"Dot",description:"一日の小さな実践。QT5分、聖書1章、感謝のひと言。"},{title:"Line",description:"小さな実践が繰り返されて習慣となり、続けられるルーティンになります。"},{title:"Form",description:"習慣が積み重なって人生の形となり、神とともに歩む人生になります。"}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:"初めに、神は点から始まる命を造られました。その命は線へとつながり、光となって現れ、ついには一つの形（form）へと回復されます。DoLFは、この回復の旅路を日常の小さな実践とともに歩んでいきたいと考えています。",closing:["点から始まった命の物語、","線へとつながる信仰の旅路、","光となって現れる神の形。"]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"信仰と日常をともに記録するフラッグシッププランナー"},{name:"Bible Reading Tracker",description:"聖書通読をひと目で可視化する記録ツール"},{name:"2027 Calendar",description:"点字と数字で表現したミニマルカレンダー"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"信仰を日常のルーティンへとつなぐライフスタイルブランド、DoLFの物語"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"多くの人が信仰を続けられないのは、意志が足りないからではありません。信仰を日常のルーティンにしてくれる道具と経験が足りないからです。DoLFは、毎日の小さな実践が習慣となり、習慣が人生の形になるよう手助けします。"},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"信仰を日常のルーティンへとつなぐ",description:"信仰が特別な瞬間の決意ではなく、毎日の習慣となるよう手助けします。"},{label:"Vision",subhead:"神とともに歩む人生を、続けられる習慣へ",description:"小さな実践が積み重なり、人生の方向を変える信仰ライフスタイルを夢見ています。"}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"信仰はDoLFの出発点です。"},{label:"Consistency",description:"完璧さよりも継続を大切にします。"},{label:"Simplicity",description:"シンプルさから良い習慣が始まります。"},{label:"Growth",description:"結果よりも成長の過程を大切にします。"},{label:"Community",description:"共に歩むとき、変化はより長く続きます。"}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"信仰を日常のルーティンにしてくれるDoLFの製品たち"},features:[{name:"Breathe — Planner & Diary",description:"一日を計画すると同時に、感謝・黙想・省察を記録し、神との関係を日常の中で育んでいくDoLFのフラッグシッププランナーです。",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"1節を一つの点（Dot）に。点が集まって線となり、面となる通読の旅路を視覚的に完成させる記録ツールです。",spec:"B5  ·  120P  ·  LAY-FLAT"},{name:"2027 Calendar",description:"点字（braille）と数字で月を表現したミニマルカレンダー。B5両面とB2ポスターで構成されます。",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"福音書の調和、詩篇・箴言、並行箇所など、一つのテーマを深く追って読む1枚の通読トラッカーです。一枚もの、または折りたたみ形式からお選びいただけます。",spec:"B5  ·  SINGLE / FOLDED  ·  BY THEME"}],detailCta:"詳しく見る"},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"一人よりも共に歩むとき、信仰はより長く続きます。DoLFの小グループの物語"},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"聖書通読の小グループ",description:"12週間にわたって共に通読し、完走をサポートする小グループです。"},{title:"QT Circle",subhead:"QT習慣づくり",description:"毎日の黙想を分かち合いながら、QTを習慣にしていきます。"},{title:"Faith & Life Circle",subhead:"信仰と生活",description:"信仰と日常の悩みを共に分かち合うコミュニティです。"}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"Bible Reading Circleは12週間のプログラムとして運営され、参加費49,000〜99,000ウォンにトラッカー製品が含まれます。",cta:"参加のお問い合わせ"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"製品のお問い合わせ、コラボレーション、小グループへの参加 — どんなことでもお気軽にご連絡ください。"},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"DMまたはメールでお問い合わせください"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"ご質問をお寄せください。確認のうえ、迅速にお返事いたします。",namePlaceholder:"お名前",emailPlaceholder:"メールアドレス",messagePlaceholder:"メッセージをご入力ください",submit:"送信",b2bText:"卸売・B2Bパートナーシップのお問い合わせは別途承ります。",b2bCta:"B2Bのお問い合わせ"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"信仰を日常のルーティンへ — DoLFの製品をご覧ください。"},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"カートに追加しました"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"ログアウト",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"ご登録のアカウントでログインしてください。アカウント権限に応じて自動的に移動します。",emailLabel:"メールアドレス",emailPlaceholder:"you@example.com",passwordLabel:"パスワード",passwordPlaceholder:"パスワードをご入力ください",forgotPassword:"パスワードをお忘れの方",keepLoggedIn:"ログイン状態を保持",submit:"Sign In",notice:"管理者アカウントでログインすると管理者コンソールへ、一般会員はマイページへ自動的に移動します。別途の選択は必要ありません。",noAccount:"アカウントをお持ちでないですか？",signUpLink:"会員登録",notFound:"登録されていないメールアドレスです。シードアカウント、またはご登録のメールアドレスをご利用ください。"},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"* 印は必須項目です。海外の会員はメールアドレスのみで登録できます。",countryLabel:"国 / 地域 *",nameLabel:"お名前 *",namePlaceholder:"お名前をご入力ください",emailLabel:"メールアドレス *",emailPlaceholder:"you@example.com",phoneLabel:"電話番号（任意）",phonePlaceholder:"10-0000-0000",passwordLabel:"パスワード *",passwordPlaceholder:"8文字以上でご入力ください",passwordConfirmLabel:"パスワード確認 *",passwordConfirmPlaceholder:"パスワードを再度ご入力ください",terms:"利用規約およびプライバシーポリシーに同意します。",submit:"Sign Up",hasAccount:"すでにアカウントをお持ちですか？",signInLink:"ログイン"},myPage:{eyebrow:"MY PAGE",greeting:"こんにちは、{name}さん",subhead:"DoLFとともに歩んだ記録を一か所で管理しましょう。",statsOrders:"注文",statsWishlist:"ウィッシュリスト",statsSpent:"累計購入額",ordersTitle:"注文履歴",wishlistTitle:"ウィッシュリスト",settingsTitle:"アカウント設定",settingName:"お名前",settingEmail:"メールアドレス",settingPhone:"電話番号",settingAddress:"住所",settingMembership:"メンバーシップ",edit:"編集"}}},rS={ko:nS,en:iS,ja:oS},Ey=A.createContext(null);function De(){const l=A.useContext(Ey);if(!l)throw new Error("useLocale must be used within a LocaleProvider");return l}const Ry=A.createContext(null);function Ed(){const l=A.useContext(Ry);if(!l)throw new Error("useCart must be used within a CartProvider");return l}const Dy=A.createContext(null);function Cn(){const l=A.useContext(Dy);if(!l)throw new Error("useAuth must be used within an AuthProvider");return l}const sS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAACOCAYAAACMnOsxAAAOOUlEQVR4nO3dT3LbRhYG8PcatJSVRe/iskI2T2D5BJJPEHkzrpmN5RNYPoGsE1g6gaXVTGYz8gnCnCDUCdhE5PIqZaSSnYl+U01SKUWhbBAEGg3g+1WlUqmKCYZSPvbf94gAAAAAAAAAAAAAAAAAAAAgLLzqH+j19Csi6lKwrBGRZP7XveTDh/Fl1e8IwjEYDB6nqeyX/Zw05Yu6/+71evqo6vcQgqw/y86qL8xMh0SsKViRe49/6vcHRCQJEY1E7IhIjdKUR3X/RYd8plN5ohS/KfvziyIxRFTr3zHm8j+nOsj6s1w5TOuJ3Uh6jznac//U6biQ1S5ghyJ08fkzDz9+HE+qfpcAUF8tCdM7A3afmfY3Nmbh6oL1DMEKAHmoXH+qkXiPmc82Nshord9tb2/vVv2OAKA+EKZLiPBBFN0b9vv6x15Pv/D/YwGAukGYZhitulB9+HDQ9/VDAYD6QZhmwnvX03+EKgAsgzBdcfq/sSFDTP0B4DaE6cpYu6m/1vptt6sDvrwAAD4hTHMS4cOtLfoZ034AQJiujbWb9j96NHiMXyeAdsPIdG2sOx1CoAK0HMK0GF0EKkC7IUyLg0AFaDGEabG6nY5cYFMKoH0QpiVtSuHYFEC7IExLwbrbJRTWBWgRhGmJ51C1RpEUgLZAmJZIhE8w3QdoB4RpubpbW/Su5GcAQABaXGnfF953haavrq5+qvqdAIRHLpjpNQWMmVyLo9qG6YhZMn/Aaeq6paZd5qjPTDvz7qk86/cUgijquMZkT6t+HwChEaFkMjGuYV3thRqmiTFmuO6LaK33rKXHzHxANAvZivBenUang8GgP51Od5gjTWQ1keoy03VHWlcp67palvvGnn1ri5AhsgmRMtZOR2izDW0TapgWYhHI7q9TrbW21h4xRy5YvQt5dLq9rXeVct1byY3md6ylrlLXvxpRpteYt9ee/7tRdG/290UH2JHrAJumPER7bWiyRofpTcbMphIvtdbH1YRqWKPTeYDafWZ1sOjUWmKLbdpbtNc2zDT8/JlPEKzQNK3bzXehGsfxSxFxI8UqRqeVcl0CXE+rKOIhc3RYXpAuw9p1K+h0aNTv65/RsQCapHVhei2OzbGIeB+dVnXudBGixnUJCGNzjncWzQrHCFVogtaGqRPH5lxEDn0+8/59OvQ9nXcj0UWI9kNtA+NGqigQA3XW6jB14ticisiJr+cx8wtfz+r19Fs3nQ9jJPo1vOM6wPZ6uvKlEIA8Wh+msw9B0TGzZDqYWwDtjh6V+YBvv9W639cjZvY6Ci4CMx9hlAp1hDCdb0ol1vqbfqep7Jf12q4f1eamOw7GNe5L5UapMsS0H+oEYXpj/ZRIJj4+dGYqJUzdRk6nI8Mw10bz1IWlEZoVQl0gTG8Q8VWUhAu/jfXdd/r7xSZTJacFSoJWMFAbCNObH4aiU0+fe3cwKK49tBu9KUVn1EyzQMWUH0KHML21dkrkpsnlS1PZK2qzqdOR9w0bkd7WRSsYCB3C9BZ3j9zTZ1/IVH+x2dSANdKvYb21Rf+r+l0AUNvv5mel1KwwR+kWpQLX0uvpo3YE6TXe6/X0K3c2uOp3AsVgJvczDaqAurV0dnVlVq6hgTD9u0vygq9L2uWe3jNz6w64u//mhw8HFx8/jr2cvAAfN+Cokkpud1FqttS3cphimr983dRHsdruOvf0NzdbO+V166dN3WyDGkOYLiUjHx/+gwf5pujzwiDFH6+qj3k5w6rfBcBNmOYvIcLJvNhxuaZT0XmWFZjpmCrhrtyyEZl/2Syq7+9UcZIg5GLb0E4I0+W89KRh/rP9x6qjUs+bTmJE6EQpOjdmnCx7T/OA9/m+wiq2DYBp/nK+ip6sHKa+F+tF5JSZnrgd9Pl68vKruJOJ0b4LbodQbBvgGsJ0CRH6jQIMU7eD77Ocnogcx7E5vCtE7yi4fdKGYtsAtyFMa2Rjg155fNwwjs3KI784Nq993SKrotg2wF0QpktEEY0pQMz0zNezlMq/nMBML4t9N198Fnb1IQgI05p49Ejv+NrgYZaz8Tj/oXjXtFAk9XQWFFN9CAPCtCaiyN8IrIibVUopb1c+79+n7309C+AuCNMl0nT1XfayMRdTZSqD4Tqj0mvGmJHHtdMa9LiCpkOYLveAgsNPfDxFpLirmr4qcDHXoWEgNB3CtAa0dsd//KyXzruZFiNNVy8WkZPGESmoGsJ0CWbqB3bTylNzPDFFTPGvffhgRr66vuatcwBQFITpcl7WTEWy3bRKUxqQF1z4NVoRP1dz01RaXPgFQoAwXYJ5VoCkdCLT30IaKYtI4bVcRWjUpC9AgLsgTJfyUwXp3r17WS8HeAl3olIuK3gZmRL5Gr0DLIcwLamlSBZZ1yeZxdeoK6lx0ZgtT88BWAphuuSmkYiPkekqBaj9jJStnU5qXDQGoFKoZ3qLUr528tnXiK0VmNfrqQVVkQtmeh3S58+cbzaFMP3bB2n3iSIqm4i/ykoAoRKhZDIxvtbVS4Vp/i3MyksrDI+73ADgAcL0Bq31rq+bRp0OBxemzJ0ab+L4uRwAcBeE6Q3W2oMwbxr5CYo8PakyvOZWSBcgAMqCML3REoQ58hKmzDRctVsq+VHGqQFfx7pwagAqhTBd2NiwR74+9DRduZpSUuOD77522T95eg7AUtjN/3NUyt66fv7++8rVlHy1ni58vZjZW5g2YkcY6qv1I1MXpJubq0271yMXSZKt26f/g++8U9fbZGVcOABYRevDdHPTTbn9lW/LUzA5iryFfaF1Qf3dJiP6449OcKcjoF1aG6YuNPp9/SMRe6oV6oiJY3Oep0Gdr7qgRfZTiiJfdVgpWXW0D1C0Vobpo0eDx1tb7tC833YXq+7iV1EXlDl/i+cyX+srMCqFyqm2jUZ7PX3U6cyC1Htl9nW6for4murzThFTfbcW7evLCldzIQStCNPtbb3b6/Xebm3RuIg2xlX0olfKT3M6951z/z4d1umombVTX72mANpzNGowGPQ/fxat1GwXeYeZ9ucl7MovXvIlBYT4pVs39bGhw8yvul19kncd0u9RMzFXV1coGgOVCzVMd+abQ5m4cFkEDGtrZx02KSTzUalZ6+iOMSbp97VbG/Qxde5ubdG7JKFnef7wN9/QWxEKfh0aoA1h6lobN6QXupiilhaspROlvISpi6n9Xk+/iWOz0nt3a9IivE+eTKfTlU9H+MBML3s9HeLv8DDPiRKob5g2hgi9Kap9chS5m1N+pvoOMx/1epqyBqoLUr9r0iFP8XmXmXYpMDKfMiBMS9CKDaimjALcVN+NTskjF6j9vh5vb2/vfmmDzy3L+N7cc19UPp8H8CUYmZZGjFLFb8IoRaf+Q4R1FN0b9vvanXUdidjFmVfVZXbLDpW0DEmiiAMdlUIbIUxLYi0dTibFTO9vj057PX3CzGsfX1rdLDRdqUKqmoicrrupB1AkTPNLICLHv/xi3lNJlKJjX9dLwyQmivhd1e8C4CaEaQkjplV3wOuwdtrUTT2AoiBMCyWXcWy8TL/j2BwTSQvvpOcrFgNQNoRpYeRyvhnjj9vgatd0XxKlmnL+GJoGYVoAETl3Qeqm3+TReDy+tLY9x4NE6BDTewgVwrSYNdID30F6LY7NqYictGFTD9N7CBnCdA0icuhrjfRL4ti8FpEzavDIv+xNPYB1IUxzH8inHTcqpEAoRa+buCG1CFJvzQ4B8kKY5pjWM9MTt15JAXHLDJOJedKkEer1EkrV7wMgC4RpdsM0laduWl/V+mgWcWxeisibhqyRVr6EApAVwvSrxFgr+5PJ+OnVlanFXXB3BlVEDoikhgfbxSy+tGr/hQDtgjC929Da6bPJxAzKvBpaFrfz7Y5riaS1mfYzy4VbQqnLlxbATSh08heuVqg9s1a9b8L/0K5FNNGsSPGQmY6raCKYjVymKR024TOH9kKYzgKULqylc9e1dDKJg10PzWtxPvO819MvAgvVkTsji/Oj0ARtDFPjjhC51snW0mWbRkO3QvWgwtYwbjPvuE2fPTRfw8LU3VPnxchSjIgLTpuIyKVIZNzIM+SdeN+hqrV2DQhdew3Xs8kVeS6pHcqsfsDQfYEpRef4GUAThdXGEyqltd6zlh4TWc2sZq2ycwSsW6c1IumISLnLDT8ZYxp3mQDgNoQpfJUbwf61pfbfmBsbXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD/66T/7XZ3LdE+KbVPzF0SmV0zZHHVmGSkiM7+kSQ/Ff5uYWX9/kDwsQEUZzIZ89ph6kI0VeqcibLUwzRs7ZvnSeIqFEFFEKYAfsI0c9uSH7rdt1apYcYgdbQodeb+XOZ3CQBQU5lGpv958GBEzI9zP0Rk9PzTpydUsCaPuu769ltVkz8jgFqNTGcjyzWC1BHmHYxQAaDJvhimP3S7L0SpQnqXu9dxa65FvBYAQK3C1Cp1XOTDrFK1aTsMAFBImLpR5AqbTVlpjE4BoFVhasl1ryzelOhZGa8LABDmNF/NGqoV/0Dm78t4XQCAUNdMSwlTvrspGwBAbWU+tF8UcddPAQBaFKaJx/cBAFBr/sNUZFTK6wIAhBimTHRRyhMRpgDQqjC1tpQwFSJUkQKA9oSpq0cqIpNCnyZi/pkkw0JfEwAg9N38SORFkQ9jpd4U+XoAALUIUzc6ZWtPiniQtfb0+a+/YooPAO08Z/o8SV4T0Xo78NZe/itJCqk+BQAQoswFiF090jzl+NyIFEFaHRSHBgisbYkbobK1B5k3pUSMWPsUQQoAbZCrNca/u909JnqxKIayc+OQf0LWXgjRe+zahwEjU4AwWwoBAAAAAAAAAAAAAAAAAAAAlez/dl1HAAnmxs4AAAAASUVORK5CYII=",cS=["en","ko","ja"];function uS(){const{t:l,locale:r,setLocale:c}=De(),{count:u}=Ed(),{user:d}=Cn(),[g,y]=A.useState(!1),j=Ft();A.useEffect(()=>y(!1),[j.pathname]);const b=d?{to:d.role==="admin"?"/admin":"/mypage",label:l.account.myPageNav}:{to:"/signin",label:l.account.signInNav},p=[{label:l.nav.about,to:"/about"},{label:l.nav.products,to:"/products"},{label:l.nav.community,to:"/community"},{label:l.nav.contact,to:"/contact"},{label:l.nav.shop,to:"/shop"}],v=o.jsx(TS,{children:cS.map(T=>o.jsx($S,{type:"button",$active:r===T,onClick:()=>c(T),children:T.toUpperCase()},T))});return o.jsxs(dS,{children:[o.jsxs(fS,{children:[o.jsx(hS,{to:"/","aria-label":"DoLF",children:o.jsx(pS,{src:sS,alt:"DoLF"})}),o.jsx(mS,{children:p.map(T=>o.jsx(gS,{to:T.to,children:T.label},T.to))}),o.jsxs(yS,{children:[v,o.jsx(jS,{to:b.to,children:b.label}),o.jsxs(lg,{to:"/shop",children:[l.shop.cart,u>0&&o.jsx(ag,{children:u})]})]}),o.jsxs(bS,{type:"button","aria-label":"Menu",onClick:()=>y(T=>!T),children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),g&&o.jsxs(xS,{children:[o.jsx(vS,{children:p.map(T=>o.jsx(tg,{to:T.to,children:T.label},T.to))}),o.jsx(SS,{}),o.jsxs(wS,{children:[o.jsx(tg,{to:b.to,children:b.label}),o.jsxs(lg,{to:"/shop",children:[l.shop.cart,u>0&&o.jsx(ag,{children:u})]})]}),v]})]})}const dS=h.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${({theme:l})=>l.colors.cream};
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};
`,fS=h(be)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`,hS=h(lt)`
  display: inline-flex;
  align-items: center;
`,pS=h.img`
  height: 28px;
  width: auto;
  display: block;
`,mS=h.nav`
  display: flex;
  gap: 36px;

  ${({theme:l})=>l.media.nav} {
    display: none;
  }
`,gS=h(lt)`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({theme:l})=>l.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.brandRed};
  }
`,yS=h.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${({theme:l})=>l.media.nav} {
    display: none;
  }
`,bS=h.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 24px;
  padding: 4px 0;
  border: none;
  background: none;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    border-radius: 1px;
    background-color: ${({theme:l})=>l.colors.ink};
  }

  ${({theme:l})=>l.media.nav} {
    display: flex;
  }
`,xS=h.div`
  display: none;

  ${({theme:l})=>l.media.nav} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px 28px 32px;
    border-top: 1px solid ${({theme:l})=>l.colors.border};
    background-color: ${({theme:l})=>l.colors.cream};
  }
`,vS=h.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,tg=h(lt)`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({theme:l})=>l.colors.ink};
`,SS=h.hr`
  border: none;
  border-top: 1px solid ${({theme:l})=>l.colors.border};
  margin: 0;
`,wS=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,lg=h(lt)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({theme:l})=>l.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.brandRed};
  }
`,jS=h(lt)`
  white-space: nowrap;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({theme:l})=>l.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.brandRed};
  }
`,ag=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0;
`,TS=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,$S=h.button`
  border: none;
  background: none;
  padding: 0;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.textSecondary};
  font-weight: ${({$active:l})=>l?600:400};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.ink};
  }
`;function AS(){const{t:l}=De(),r=[{label:l.nav.about,to:"/about"},{label:l.nav.products,to:"/products"},{label:l.nav.community,to:"/community"},{label:l.nav.contact,to:"/contact"},{label:l.nav.shop,to:"/shop"}];return o.jsx(ES,{children:o.jsxs(RS,{children:[o.jsxs(DS,{children:[o.jsxs(zS,{children:[o.jsx(CS,{children:"DoLF"}),o.jsx(OS,{children:l.footer.tagline})]}),o.jsxs(BS,{children:[o.jsxs(kS,{children:["Instagram ",l.footer.instagram]}),o.jsx(MS,{children:r.map(c=>o.jsx(NS,{to:c.to,children:c.label},c.to))})]})]}),o.jsx(LS,{}),o.jsx(US,{children:l.footer.copyright})]})})}const ES=h.footer`
  background-color: ${({theme:l})=>l.colors.ink};
  color: ${({theme:l})=>l.colors.white};
`,RS=h(be)`
  padding-top: 56px;
  padding-bottom: 40px;
`,DS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 28px;
  }
`,zS=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,CS=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
`,OS=h.span`
  font-family: ${({theme:l})=>l.fonts.script};
  font-size: 24px;
  color: ${({theme:l})=>l.colors.brandRed};
`,BS=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  ${({theme:l})=>l.media.mobile} {
    align-items: flex-start;
  }
`,kS=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  color: rgba(255, 255, 255, 0.7);
`,MS=h.nav`
  display: flex;
  gap: 24px;
`,NS=h(lt)`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.white};
  }
`,LS=h.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 32px 0 20px;
`,US=h.p`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.5);
`;function HS(){return o.jsxs(o.Fragment,{children:[o.jsx(uS,{}),o.jsx("main",{children:o.jsx(Ty,{})}),o.jsx(AS,{})]})}const zy=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border: none;
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;function _S(){const{t:l}=De();return o.jsx(qS,{children:o.jsxs(GS,{children:[o.jsx(YS,{children:l.hero.tagline}),o.jsx(QS,{children:l.hero.title}),o.jsx(FS,{children:l.hero.subhead}),o.jsx(VS,{children:l.hero.body}),o.jsx(zy,{type:"button",children:l.hero.cta})]})})}const qS=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,GS=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 96px;
  padding-bottom: 112px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 64px;
  }
`,YS=h.p`
  font-family: ${({theme:l})=>l.fonts.script};
  font-size: 30px;
  color: ${({theme:l})=>l.colors.brandRed};
  margin-bottom: 12px;
`,QS=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h1};
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 1.12;
  color: ${({theme:l})=>l.colors.ink};
  white-space: pre-line;
  margin-bottom: 28px;
`,FS=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:l})=>l.colors.ink};
  margin-bottom: 12px;
`,VS=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-bottom: 36px;
`,Pe=h.span`
  display: block;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({theme:l})=>l.colors.brandRed};
`,Al=h.h2`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
  line-height: 1.2;
`,PS="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3ccircle%20id='Ellipse'%20cx='44'%20cy='28'%20r='8'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",XS="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3crect%20id='Rectangle'%20x='12'%20y='27'%20width='64'%20height='2'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse'%20cx='17'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_2'%20cx='44'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_3'%20cx='71'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",ZS="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3ccircle%20id='Ellipse'%20cx='34'%20cy='18'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_2'%20cx='54'%20cy='18'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_3'%20cx='34'%20cy='38'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_4'%20cx='54'%20cy='38'%20r='6'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",IS=[PS,XS,ZS];function KS(){const{t:l}=De();return o.jsx(WS,{children:o.jsxs(JS,{children:[o.jsxs(e2,{children:[o.jsx(Pe,{children:l.philosophy.eyebrow}),o.jsx(Al,{children:l.philosophy.title}),o.jsx(t2,{children:l.philosophy.intro})]}),o.jsx(l2,{children:l.philosophy.items.map((r,c)=>o.jsxs(a2,{children:[o.jsx(n2,{src:IS[c],alt:"","aria-hidden":!0}),o.jsx(i2,{children:r.title}),o.jsx(o2,{children:r.description})]},r.title))})]})})}const WS=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,JS=h(be)`
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,e2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  max-width: 720px;
  margin: 0 auto 64px;

  ${({theme:l})=>l.media.mobile} {
    margin-bottom: 40px;
  }
`,t2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`,l2=h.div`
  display: flex;
  gap: 32px;
  max-width: 1040px;
  margin: 0 auto;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 40px;
  }
`,a2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`,n2=h.img`
  width: 88px;
  height: 56px;
  object-fit: contain;
`,i2=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,o2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
  white-space: pre-line;
`;function r2(){const{t:l}=De();return o.jsx(s2,{children:o.jsxs(c2,{children:[o.jsx(Pe,{children:l.story.eyebrow}),o.jsx(Al,{children:l.story.title}),o.jsx(u2,{children:l.story.body}),o.jsx(d2,{children:l.story.closing.map(r=>o.jsx("span",{children:r},r))})]})})}const s2=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,c2=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: 720px;
  padding-top: 104px;
  padding-bottom: 104px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,u2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.85;
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-top: 8px;
  white-space: pre-line;
`,d2=h.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.6;
  color: ${({theme:l})=>l.colors.ink};
  margin-top: 12px;
`,f2="/dolf/assets/hero-ChOiTWCF.png",h2="/dolf/assets/hero-CJSOf2Pk.png",p2="/dolf/assets/hero-DTWScntO.png",m2=[f2,h2,p2];function g2(){const{t:l}=De();return o.jsx(y2,{children:o.jsxs(b2,{children:[o.jsxs(x2,{children:[o.jsx(Pe,{children:l.products.eyebrow}),o.jsx(Al,{children:l.products.title})]}),o.jsx(v2,{children:l.products.items.map((r,c)=>o.jsxs(S2,{children:[o.jsx(w2,{children:o.jsx(j2,{src:m2[c],alt:r.name})}),o.jsx(T2,{children:r.name}),o.jsx($2,{children:r.description})]},r.name))})]})})}const y2=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,b2=h(be)`
  padding-top: 96px;
  padding-bottom: 104px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,x2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  margin-bottom: 56px;

  ${({theme:l})=>l.media.mobile} {
    margin-bottom: 36px;
  }
`,v2=h.div`
  display: flex;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`,S2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,w2=h.div`
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;
  margin-bottom: 20px;
`,j2=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,T2=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
  margin-bottom: 8px;
`,$2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.7;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function A2(){return o.jsxs(o.Fragment,{children:[o.jsx(_S,{}),o.jsx(KS,{}),o.jsx(r2,{}),o.jsx(g2,{})]})}function E2(){const{t:l}=De();return o.jsx(R2,{children:o.jsxs(D2,{children:[o.jsx(Pe,{children:l.about.hero.eyebrow}),o.jsx(z2,{children:l.about.hero.title}),o.jsx(C2,{children:l.about.hero.subhead})]})})}const R2=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,D2=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 72px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 48px;
  }
`,z2=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:l})=>l.colors.ink};
`,C2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function O2(){const{t:l}=De();return o.jsx(B2,{children:o.jsxs(k2,{children:[o.jsx(Pe,{children:l.about.why.eyebrow}),o.jsx(Al,{children:l.about.why.title}),o.jsx(M2,{children:l.about.why.body})]})})}const B2=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,k2=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: calc(760px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,M2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function N2(){const{t:l}=De();return o.jsx(L2,{children:o.jsxs(U2,{children:[o.jsx(H2,{children:l.about.missionVision.eyebrow}),o.jsx(_2,{children:l.about.missionVision.items.map(r=>o.jsxs(q2,{children:[o.jsx(G2,{children:r.label}),o.jsx(Y2,{children:r.subhead}),o.jsx(Q2,{children:r.description})]},r.label))})]})})}const L2=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,U2=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,H2=h(Pe)`
  text-align: center;
`,_2=h.div`
  display: flex;
  gap: 48px;
  width: 100%;
  max-width: 980px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`,q2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,G2=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:l})=>l.colors.brandRed};
`,Y2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:l})=>l.colors.ink};
`,Q2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function F2(){const{t:l}=De();return o.jsx(V2,{children:o.jsxs(P2,{children:[o.jsxs(X2,{children:[o.jsx(Pe,{children:l.about.coreValues.eyebrow}),o.jsx(Al,{children:l.about.coreValues.title})]}),o.jsx(Z2,{children:l.about.coreValues.items.map(r=>o.jsxs(I2,{children:[o.jsx(K2,{children:r.label}),o.jsx(W2,{children:r.description})]},r.label))})]})})}const V2=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,P2=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 104px;

  ${({theme:l})=>l.media.mobile} {
    gap: 36px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,X2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,Z2=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`,I2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,K2=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,W2=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function J2(){return o.jsxs(o.Fragment,{children:[o.jsx(E2,{}),o.jsx(O2,{}),o.jsx(N2,{}),o.jsx(F2,{})]})}function ew(){const{t:l}=De();return o.jsx(tw,{children:o.jsxs(lw,{children:[o.jsx(Pe,{children:l.productsPage.hero.eyebrow}),o.jsx(aw,{children:l.productsPage.hero.title}),o.jsx(nw,{children:l.productsPage.hero.subhead})]})})}const tw=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,lw=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 48px;
  }
`,aw=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:l})=>l.colors.ink};
`,nw=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function iw({imageSide:l,background:r,name:c,description:u,spec:d,image:g,detailHref:y,detailLabel:j}){return o.jsx(rw,{$background:r,children:o.jsxs(sw,{$imageRight:l==="right",children:[o.jsx(cw,{children:o.jsx(uw,{src:g,alt:c})}),o.jsxs(dw,{children:[o.jsx(fw,{children:c}),o.jsx(hw,{children:u}),o.jsx(pw,{children:d}),o.jsxs(ow,{to:y,children:[j," →"]})]})]})})}const ow=h(lt)`
  margin-top: 20px;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  color: ${({theme:l})=>l.colors.brandRed};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`,rw=h.section`
  background-color: ${({theme:l,$background:r})=>l.colors[r]};
`,sw=h.div`
  display: flex;
  flex-direction: ${({$imageRight:l})=>l?"row-reverse":"row"};
  align-items: center;
  gap: 72px;
  max-width: ${({theme:l})=>l.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 96px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
    padding: 56px 24px;
  }
`,cw=h.div`
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  ${({theme:l})=>l.media.mobile} {
    width: 100%;
    height: 420px;
  }
`,uw=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,dw=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,fw=h.h2`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h2};
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme:l})=>l.colors.ink};
`,hw=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`,pw=h.p`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  letter-spacing: 0.4px;
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-top: 8px;
`,mw="/dolf/assets/hero-ChOiTWCF.png",gw="/dolf/assets/hero-CJSOf2Pk.png",yw="/dolf/assets/hero-DTWScntO.png",bw="/dolf/assets/hero-IAGVR8nw.png",xw=[mw,gw,yw,bw],vw=["cream","surface","cream","cream"],Sw=["breathe","tracker","calendar","topical"];function ww(){const{t:l}=De();return o.jsxs(o.Fragment,{children:[o.jsx(ew,{}),l.productsPage.features.map((r,c)=>o.jsx(iw,{imageSide:c%2===0?"left":"right",background:vw[c],name:r.name,description:r.description,spec:r.spec,image:xw[c],detailHref:`/products/${Sw[c]}`,detailLabel:l.productsPage.detailCta},r.name))]})}const nu="/dolf/assets/hero-ChOiTWCF.png",iu="/dolf/assets/hero-ChOiTWCF.png",ou="/dolf/assets/inside-monthly-BmFW1NlQ.png",ru="/dolf/assets/inside-weekly-DnOtp2S6.png",su="/dolf/assets/inside-daily-Du0Ihun5.png",cu="/dolf/assets/page1-C0wrA_x3.png",uu="/dolf/assets/page2-C_yOt3O2.png",du="/dolf/assets/page3-DIeuC41j.png",fu="/dolf/assets/page4-B2_sygYv.png",hu="/dolf/assets/page5-CQFDNZrq.png",pu="/dolf/assets/page6-CcqjQoor.png",mu="/dolf/assets/hero-CJSOf2Pk.png",gu="/dolf/assets/hero-DTWScntO.png",jw={ko:{slug:"breathe",catalogImage:nu,catalogName:"Breathe — Planner & Diary",catalogPrice:"$38",hero:{gallery:[iu],title:"Breathe",subtitle:"Planner & Diary — 신앙과 일상을 함께 기록하는 플래너",price:"$38",description:"하루를 계획하는 동시에 감사·묵상·성찰을 기록할 수 있도록 설계된 루틴 플래너입니다. 완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 돕습니다.",specLines:["B5 · 176 × 250mm","128 페이지","Lay-flat 제본"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why Breathe",paragraphs:["Breathe는 단순한 일정 관리 도구가 아닙니다. 하루를 계획하는 동시에 하나님을 기억하고, 삶을 돌아보며, 작은 감사와 묵상을 기록할 수 있도록 설계된 루틴 플래너입니다.","완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 만들었습니다. 매일의 작은 기록이 쌓여 신앙과 일상이 자연스럽게 연결되는 경험을 선물합니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"Monthly",image:ou},{caption:"Weekly",image:ru},{caption:"Daily",image:su}]},features:{eyebrow:"WHAT'S INSIDE",title:"Designed for your day",items:[{title:"Monthly",desc:"한 달의 흐름을 한눈에"},{title:"Weekly",desc:"주간 계획과 루틴"},{title:"Daily",desc:"하루를 의미 있게"},{title:"Sermon Note",desc:"말씀과 설교 기록"},{title:"Reflection",desc:"하루를 돌아보는 성찰"},{title:"Gratitude",desc:"감사 한 줄의 기록"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every page has a reason",intro:"모든 페이지에는 이유가 있습니다. 각 속지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.",items:[{title:"Dot of Line and Form",desc:"다이어리의 첫 장은 하나의 점(Dot)과 DoLF 로고로 시작합니다. QR 코드로 인스타그램과 연결되어 브랜드의 이야기로 이어집니다.",usage:"어떻게 쓰나요 — 한 해를 시작하며 점·선·형(Dot·Line·Form)의 철학을 떠올리며 펼쳐보세요.",image:cu},{title:"One line a day",desc:"작은 점이 선이 된다는 믿음에서 출발한 트래커입니다. 하루 한 줄의 기록이 쌓여 습관이 됩니다 — Turn your days from − to +.",usage:"어떻게 쓰나요 — 매일 한 칸씩 한 줄로 하루를 기록하세요. − 였던 하루가 + 로 바뀌는 것을 보게 됩니다.",image:uu},{title:"Monthly",desc:"한 달의 흐름을 한눈에 봅니다. 약속과 계획, 그리고 신앙의 리듬을 월 단위로 그립니다.",usage:"어떻게 쓰나요 — 매달 시작에 주요 일정과 QT·예배 계획을 함께 적어보세요.",image:du},{title:"Weekly",desc:"7am부터 11pm까지 이어지는 시간축은 하루를 의도적으로 설계하게 합니다. 생산성과 신앙을 하나의 흐름 안에 둡니다.",usage:"어떻게 쓰나요 — 한 주의 일정과 QT·기도 시간을 함께 계획하세요.",image:fu},{title:"Daily QT",desc:"the Word · Question · Reflect · Apply · Pray의 흐름으로 매일의 묵상을 기록합니다. 말씀이 하루의 삶에 적용되도록 설계했습니다.",usage:"어떻게 쓰나요 — 말씀을 적고, 질문하고, 묵상하고, 삶에 적용하고, 기도로 마무리하세요.",image:hu},{title:"Man does not live on bread alone",desc:"'사람이 떡으로만 살 것이 아니라 하나님의 입으로 나오는 모든 말씀으로 산다'(신명기 8:3). 말씀이 다이어리의 중심임을 기억하게 합니다.",usage:"어떻게 쓰나요 — 한 챕터를 시작할 때 이 말씀을 떠올리며 하루를 시작하세요.",image:pu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Plan",desc:"Monthly · Weekly로 하루와 한 주를 계획하세요."},{num:"02",title:"Reflect",desc:"Daily에 말씀과 묵상, 감사를 기록하세요."},{num:"03",title:"Grow",desc:"매일의 작은 점이 모여 신앙 습관이 됩니다."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"128 페이지"},{label:"Binding",value:"Lay-flat 사철 제본"},{label:"Paper",value:"미색 모조지"},{label:"Layout",value:"Monthly · Weekly · Daily · Sermon · Reflection · Gratitude"},{label:"Dating",value:"Undated — 원하는 날부터 시작"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:mu,title:"Bible Reading Tracker",desc:"성경 통독을 한눈에 시각화하는 기록 도구"},{image:gu,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},en:{slug:"breathe",catalogImage:nu,catalogName:"Breathe — Planner & Diary",catalogPrice:"$38",hero:{gallery:[iu],title:"Breathe",subtitle:"Planner & Diary — a planner for recording faith and daily life together",price:"$38",description:"A routine planner designed to let you plan your day while recording gratitude, devotion, and reflection. It helps you focus on living each day meaningfully rather than planning it perfectly.",specLines:["B5 · 176 × 250mm","128 pages","Lay-flat binding"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why Breathe",paragraphs:["Breathe is more than a simple scheduling tool. It is a routine planner designed to help you plan your day while remembering God, looking back on your life, and recording small moments of gratitude and devotion.","It was made to help you focus on living each day meaningfully rather than planning it perfectly. Small daily entries accumulate, giving you the experience of faith and everyday life connecting naturally."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"Monthly",image:ou},{caption:"Weekly",image:ru},{caption:"Daily",image:su}]},features:{eyebrow:"WHAT'S INSIDE",title:"Designed for your day",items:[{title:"Monthly",desc:"See the flow of the month at a glance"},{title:"Weekly",desc:"Weekly plans and routines"},{title:"Daily",desc:"Make each day meaningful"},{title:"Sermon Note",desc:"Record the Word and sermons"},{title:"Reflection",desc:"Look back on your day"},{title:"Gratitude",desc:"A single line of gratitude"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every page has a reason",intro:"Every page has a reason. Here is why each insert was designed the way it is, and how to use it.",items:[{title:"Dot of Line and Form",desc:"The first page of the diary begins with a single Dot and the DoLF logo. A QR code links to Instagram, leading into the brand’s story.",usage:"How to use — As you begin a new year, open it while recalling the philosophy of Dot · Line · Form.",image:cu},{title:"One line a day",desc:"A tracker born from the belief that small dots become a line. One line a day accumulates into a habit — Turn your days from − to +.",usage:"How to use — Record your day in a single line, one box each day. You will see days that were − turn into +.",image:uu},{title:"Monthly",desc:"See the flow of the month at a glance. Map out appointments, plans, and the rhythm of your faith on a monthly scale.",usage:"How to use — At the start of each month, write down your key schedules alongside your QT and worship plans.",image:du},{title:"Weekly",desc:"A timeline running from 7am to 11pm lets you design your day with intention, keeping productivity and faith within one flow.",usage:"How to use — Plan your weekly schedule together with your QT and prayer time.",image:fu},{title:"Daily QT",desc:"Record your daily devotion through the flow of the Word · Question · Reflect · Apply · Pray. Designed to help the Word be applied to daily life.",usage:"How to use — Write down the Word, ask questions, reflect, apply it to your life, and close with prayer.",image:hu},{title:"Man does not live on bread alone",desc:"'Man shall not live on bread alone, but on every word that comes from the mouth of God' (Deuteronomy 8:3). A reminder that the Word is at the heart of the diary.",usage:"How to use — As you begin a new chapter, recall this verse and start your day with it.",image:pu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Plan",desc:"Plan your day and week with Monthly · Weekly."},{num:"02",title:"Reflect",desc:"Record the Word, devotion, and gratitude in Daily."},{num:"03",title:"Grow",desc:"Small daily dots gather into a habit of faith."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"128 pages"},{label:"Binding",value:"Lay-flat thread-sewn binding"},{label:"Paper",value:"Cream wood-free paper"},{label:"Layout",value:"Monthly · Weekly · Daily · Sermon · Reflection · Gratitude"},{label:"Dating",value:"Undated — start from any day you like"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"Orders ship within 2–3 days via domestic courier. Exchanges and returns for a change of mind are accepted within 7 days of receiving the item."},faq:[{q:"Q. Are the dates pre-printed?",a:"It is undated, so you can freely start from any day you like."},{q:"Q. Is gift wrapping available?",a:"Send us a DM and we will guide you through gift wrapping."},{q:"Q. Is international shipping available?",a:"Global shipping is available through Etsy."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:mu,title:"Bible Reading Tracker",desc:"A recording tool that visualizes your Bible reading at a glance"},{image:gu,title:"2027 Calendar",desc:"A minimal calendar expressed in braille"}]}},ja:{slug:"breathe",catalogImage:nu,catalogName:"Breathe — Planner & Diary",catalogPrice:"$38",hero:{gallery:[iu],title:"Breathe",subtitle:"Planner & Diary — 信仰と日常をともに記録するプランナー",price:"$38",description:"一日を計画すると同時に、感謝・黙想・省察を記録できるよう設計されたルーティンプランナーです。完璧な計画よりも、一日を意味あるものとして生きることに集中できるよう手助けします。",specLines:["B5 · 176 × 250mm","128ページ","Lay-flat 製本"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why Breathe",paragraphs:["Breatheは単なるスケジュール管理ツールではありません。一日を計画すると同時に、神を思い起こし、人生を振り返り、小さな感謝と黙想を記録できるよう設計されたルーティンプランナーです。","完璧な計画よりも、一日を意味あるものとして生きることに集中できるよう作りました。毎日の小さな記録が積み重なり、信仰と日常が自然につながる体験を贈ります。"]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"Monthly",image:ou},{caption:"Weekly",image:ru},{caption:"Daily",image:su}]},features:{eyebrow:"WHAT'S INSIDE",title:"Designed for your day",items:[{title:"Monthly",desc:"ひと月の流れを一目で"},{title:"Weekly",desc:"週間の計画とルーティン"},{title:"Daily",desc:"一日を意味あるものに"},{title:"Sermon Note",desc:"みことばと説教の記録"},{title:"Reflection",desc:"一日を振り返る省察"},{title:"Gratitude",desc:"感謝の一行の記録"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every page has a reason",intro:"すべてのページには理由があります。それぞれの中紙がなぜこのようにデザインされ、どう使えばよいのかをご紹介します。",items:[{title:"Dot of Line and Form",desc:"ダイアリーの最初のページは、一つの点（Dot）とDoLFロゴから始まります。QRコードでInstagramとつながり、ブランドの物語へと続きます。",usage:"どう使うのか — 一年の始まりに、点・線・形（Dot・Line・Form）の哲学を思い起こしながら開いてみてください。",image:cu},{title:"One line a day",desc:"小さな点が線になるという信念から生まれたトラッカーです。一日一行の記録が積み重なり、習慣になります — Turn your days from − to +.",usage:"どう使うのか — 毎日ひとマスずつ、一行で一日を記録してください。− だった一日が + に変わっていくのが見えてきます。",image:uu},{title:"Monthly",desc:"ひと月の流れを一目で見渡します。約束や計画、そして信仰のリズムを月単位で描きます。",usage:"どう使うのか — 毎月の始めに、主な予定とQT・礼拝の計画をあわせて書いてみてください。",image:du},{title:"Weekly",desc:"7amから11pmまで続く時間軸が、一日を意図的に設計させてくれます。生産性と信仰を一つの流れの中に置きます。",usage:"どう使うのか — 一週間の予定とQT・祈りの時間をあわせて計画してください。",image:fu},{title:"Daily QT",desc:"the Word · Question · Reflect · Apply · Prayの流れで、毎日の黙想を記録します。みことばが一日の生活に適用されるよう設計しました。",usage:"どう使うのか — みことばを書き、問いかけ、黙想し、生活に適用し、祈りで締めくくってください。",image:hu},{title:"Man does not live on bread alone",desc:"「人はパンだけで生きるのではなく、神の口から出る一つ一つのことばによって生きる」（申命記8:3）。みことばがダイアリーの中心であることを思い起こさせます。",usage:"どう使うのか — 一つの章を始めるとき、このみことばを思い起こしながら一日を始めてください。",image:pu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Plan",desc:"Monthly · Weeklyで一日と一週間を計画してください。"},{num:"02",title:"Reflect",desc:"Dailyにみことばと黙想、感謝を記録してください。"},{num:"03",title:"Grow",desc:"毎日の小さな点が集まり、信仰の習慣になります。"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"128ページ"},{label:"Binding",value:"Lay-flat 糸かがり製本"},{label:"Paper",value:"クリーム色の上質紙"},{label:"Layout",value:"Monthly · Weekly · Daily · Sermon · Reflection · Gratitude"},{label:"Dating",value:"Undated — お好きな日から始められます"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"ご注文後2〜3日以内に出荷され、国内宅配便でお届けします。お客様都合による交換・返品は、商品受け取り後7日以内に承ります。"},faq:[{q:"Q. 日付は印刷されていますか？",a:"Undated方式のため、お好きな日から自由に始められます。"},{q:"Q. ギフト包装はできますか？",a:"DMでご依頼いただければ、ギフト包装についてご案内します。"},{q:"Q. 海外配送は可能ですか？",a:"Etsyを通じてグローバル配送が可能です。"}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:mu,title:"Bible Reading Tracker",desc:"聖書通読を一目で可視化する記録ツール"},{image:gu,title:"2027 Calendar",desc:"点字で表現したミニマルなカレンダー"}]}}},yu="/dolf/assets/hero-CJSOf2Pk.png",bu="/dolf/assets/hero-CJSOf2Pk.png",xu="/dolf/assets/inside-new-testament-DbbLiCN0.png",bn="/dolf/assets/inside-chapter-DxxLVUX4.png",xn="/dolf/assets/inside-verse-BBGMusky.png",vu="/dolf/assets/page-before-4bkd9rzr.png",Su="/dolf/assets/page-read-dots-DfIaByAP.png",wu="/dolf/assets/page-visual-map-BdHr_7el.png",ju="/dolf/assets/hero-ChOiTWCF.png",Tu="/dolf/assets/hero-DTWScntO.png",Tw={ko:{slug:"tracker",catalogImage:yu,catalogName:"Bible Reading Tracker",catalogPrice:"$30",hero:{gallery:[bu],title:"Bible Reading Tracker",subtitle:"Reading Tracker — 성경 통독을 한눈에 시각화하는 기록 도구",price:"$30",description:"1절을 하나의 점(Dot)으로 기록합니다. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하며, 완주를 향한 동기를 지속시킵니다.",specLines:["B5 · 176 × 250mm","120 페이지","Lay-flat 제본","성경 66권 전체"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Tracker",paragraphs:["Bible Reading Tracker는 단순한 통독표가 아닙니다. 성경을 읽게 만드는 것이 아니라, 읽기를 지속하게 만드는 데 집중합니다.","1절을 하나의 점(Dot)으로 표현해, 읽을수록 점이 채워지고 데이터 아트처럼 나만의 통독 여정이 완성됩니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"New Testament",image:xu},{caption:"Chapter Tracker",image:bn},{caption:"Verse Tracker",image:xn}]},features:{eyebrow:"WHAT'S INSIDE",title:"Built for the whole journey",items:[{title:"Verse Check",desc:"절 단위로 체크"},{title:"Progress",desc:"진행률 시각화"},{title:"66 Books",desc:"성경 66권 전체"},{title:"By Genre",desc:"장르별 통독 흐름"},{title:"Data Art",desc:"점이 모여 만드는 데이터 아트"},{title:"Achievement",desc:"완주의 성취감"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every dot has a reason",intro:"통독표의 모든 페이지에는 이유가 있습니다. 각 페이지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.",items:[{title:"Before You Begin",desc:"66권 1,189장 31,102절. '주의 말씀은 내 발의 등이요'(시 119:105). 통독의 여정을 시작하는 다짐의 페이지입니다.",usage:"어떻게 쓰나요 — 시작한 날짜를 적고, QR로 인스타그램과 연결해 여정을 함께 나누세요.",image:vu},{title:"Read the Dots",desc:"1절 또는 1장이 하나의 점(Dot)입니다. 읽으면 색을 칠하고, 점의 크기는 분량을, 굵은 링은 5·10 단위를 나타냅니다.",usage:"어떻게 쓰나요 — 읽은 곳의 원을 칠하세요. 점이 채워질수록 진도가 한눈에 보입니다.",image:Su},{title:"The Visual Map",desc:"성경 66권 전체를 하나의 지도로 펼쳤습니다. 점의 크기는 장의 길이를 나타내, 성경의 구조가 한눈에 보입니다.",usage:"어떻게 쓰나요 — 전체 진행을 한눈에 확인하며 다음에 읽을 곳을 계획하세요.",image:wu},{title:"Chapter Tracker",desc:"장르별(오경·역사서·시가서·선지서·복음서…)로 나누어 장 단위로 체크합니다. 점 크기는 각 장의 길이를 나타냅니다.",usage:"어떻게 쓰나요 — 한 장을 읽을 때마다 해당 원을 칠해 나가세요.",image:bn},{title:"Verse Tracker",desc:"1절을 1개의 점으로. 31,102개의 점이 하나씩 채워지며 나만의 데이터 아트가 완성됩니다.",usage:"어떻게 쓰나요 — 절 단위로 더 촘촘하게 기록하고 싶을 때 사용하세요.",image:xn}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Read",desc:"오늘 분량의 말씀을 읽으세요."},{num:"02",title:"Check",desc:"읽은 절을 점(Dot)으로 체크하세요."},{num:"03",title:"See",desc:"점이 모여 나만의 통독 지도가 완성됩니다."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"120 페이지"},{label:"Binding",value:"Lay-flat 사철 제본"},{label:"Paper",value:"미색 모조지"},{label:"Layout",value:"절 단위 체크 · 진행률 시각화"},{label:"Coverage",value:"성경 66권 전체"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:ju,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"},{image:Tu,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},en:{slug:"tracker",catalogImage:yu,catalogName:"Bible Reading Tracker",catalogPrice:"$30",hero:{gallery:[bu],title:"Bible Reading Tracker",subtitle:"Reading Tracker — a journaling tool that visualizes your Bible reading at a glance",price:"$30",description:"Record each verse as a single dot. As dots gather into lines and surfaces, your reading journey takes visual shape, keeping your motivation alive all the way to the finish.",specLines:["B5 · 176 × 250mm","120 pages","Lay-flat binding","All 66 books of the Bible"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Tracker",paragraphs:["The Bible Reading Tracker is more than a simple reading chart. It focuses not on making you read the Bible, but on helping you keep reading.","Each verse becomes a single dot, so the more you read, the more dots fill in—completing your own reading journey like a piece of data art."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"New Testament",image:xu},{caption:"Chapter Tracker",image:bn},{caption:"Verse Tracker",image:xn}]},features:{eyebrow:"WHAT'S INSIDE",title:"Built for the whole journey",items:[{title:"Verse Check",desc:"Check off verse by verse"},{title:"Progress",desc:"Visualize your progress"},{title:"66 Books",desc:"All 66 books of the Bible"},{title:"By Genre",desc:"A reading flow organized by genre"},{title:"Data Art",desc:"Data art formed by gathering dots"},{title:"Achievement",desc:"The satisfaction of finishing"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every dot has a reason",intro:"Every page of the tracker has a reason behind it. Here we introduce why each page is designed the way it is and how to use it.",items:[{title:"Before You Begin",desc:"66 books, 1,189 chapters, 31,102 verses. 'Your word is a lamp to my feet' (Psalm 119:105). A page of resolve to begin your reading journey.",usage:"How to use it — Write down the date you started and connect to Instagram via the QR code to share your journey.",image:vu},{title:"Read the Dots",desc:"One verse or one chapter is a single dot. Color it in as you read; the size of the dot shows the length, and the bold rings mark units of 5 and 10.",usage:"How to use it — Color in the circle for the part you read. The more dots fill in, the more clearly you can see your progress at a glance.",image:Su},{title:"The Visual Map",desc:"All 66 books of the Bible spread out as a single map. The size of each dot shows the length of the chapter, so the structure of the Bible is visible at a glance.",usage:"How to use it — Check your overall progress at a glance and plan where to read next.",image:wu},{title:"Chapter Tracker",desc:"Divided by genre (Pentateuch, History, Poetry, Prophets, Gospels…) and checked off chapter by chapter. The dot size shows the length of each chapter.",usage:"How to use it — Color in the corresponding circle each time you read a chapter.",image:bn},{title:"Verse Tracker",desc:"One verse, one dot. As all 31,102 dots fill in one by one, your own data art comes together.",usage:"How to use it — Use this when you want to track more finely, verse by verse.",image:xn}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Read",desc:"Read today's portion of Scripture."},{num:"02",title:"Check",desc:"Check off the verses you read as dots."},{num:"03",title:"See",desc:"The dots gather to complete your own reading map."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"120 pages"},{label:"Binding",value:"Lay-flat thread-sewn binding"},{label:"Paper",value:"Cream uncoated paper"},{label:"Layout",value:"Verse-by-verse check · progress visualization"},{label:"Coverage",value:"All 66 books of the Bible"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns due to a simple change of mind are accepted within 7 days of receiving the item."},faq:[{q:"Q. Are the dates pre-printed?",a:"It's undated, so you can start freely from any day you like."},{q:"Q. Is gift wrapping available?",a:"Send us a DM and we will guide you through gift wrapping."},{q:"Q. Is international shipping available?",a:"Global shipping is available through Etsy."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:ju,title:"Breathe — Planner & Diary",desc:"A planner for journaling faith and daily life together"},{image:Tu,title:"2027 Calendar",desc:"A minimalist calendar expressed in braille"}]}},ja:{slug:"tracker",catalogImage:yu,catalogName:"Bible Reading Tracker",catalogPrice:"$30",hero:{gallery:[bu],title:"Bible Reading Tracker",subtitle:"Reading Tracker — 聖書通読を一目で可視化する記録ツールです",price:"$30",description:"1節を1つの点（Dot）として記録します。点が集まって線になり面になる通読の旅を視覚的に完成させ、読み通すための動機を持続させます。",specLines:["B5 · 176 × 250mm","120ページ","Lay-flat製本","聖書66巻すべて"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Tracker",paragraphs:["Bible Reading Tracker は単なる通読表ではありません。聖書を読ませることではなく、読み続けられるようにすることに重点を置いています。","1節を1つの点（Dot）で表現し、読むほどに点が埋まっていき、データアートのように自分だけの通読の旅が完成します。"]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"New Testament",image:xu},{caption:"Chapter Tracker",image:bn},{caption:"Verse Tracker",image:xn}]},features:{eyebrow:"WHAT'S INSIDE",title:"Built for the whole journey",items:[{title:"Verse Check",desc:"節単位でチェック"},{title:"Progress",desc:"進捗の可視化"},{title:"66 Books",desc:"聖書66巻すべて"},{title:"By Genre",desc:"ジャンル別の通読の流れ"},{title:"Data Art",desc:"点が集まって生まれるデータアート"},{title:"Achievement",desc:"読み通す達成感"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every dot has a reason",intro:"通読表のすべてのページには理由があります。各ページがなぜこのようにデザインされ、どう使えばよいのかをご紹介します。",items:[{title:"Before You Begin",desc:"66巻1,189章31,102節。『あなたのみことばは、私の足のともしび』（詩篇119:105）。通読の旅を始める決意のページです。",usage:"どう使うの — 始めた日付を書き、QRでInstagramとつないで旅を一緒に分かち合いましょう。",image:vu},{title:"Read the Dots",desc:"1節または1章が1つの点（Dot）です。読んだら色を塗り、点の大きさは分量を、太いリングは5・10の単位を表します。",usage:"どう使うの — 読んだところの円を塗りましょう。点が埋まるほど進み具合が一目でわかります。",image:Su},{title:"The Visual Map",desc:"聖書66巻すべてを1つの地図として広げました。点の大きさは章の長さを表し、聖書の構造が一目でわかります。",usage:"どう使うの — 全体の進み具合を一目で確認し、次に読むところを計画しましょう。",image:wu},{title:"Chapter Tracker",desc:"ジャンル別（モーセ五書・歴史書・詩歌書・預言書・福音書…）に分け、章単位でチェックします。点の大きさは各章の長さを表します。",usage:"どう使うの — 1章読むごとに、その円を塗っていきましょう。",image:bn},{title:"Verse Tracker",desc:"1節を1つの点に。31,102個の点が1つずつ埋まっていき、自分だけのデータアートが完成します。",usage:"どう使うの — 節単位でより細かく記録したいときにお使いください。",image:xn}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Read",desc:"今日の分量のみことばを読みましょう。"},{num:"02",title:"Check",desc:"読んだ節を点（Dot）でチェックしましょう。"},{num:"03",title:"See",desc:"点が集まって自分だけの通読地図が完成します。"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"120ページ"},{label:"Binding",value:"Lay-flat 糸かがり製本"},{label:"Paper",value:"クリーム色の上質紙"},{label:"Layout",value:"節単位チェック · 進捗の可視化"},{label:"Coverage",value:"聖書66巻すべて"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。単なるお気持ちの変化による交換・返品は、商品お受け取り後7日以内に承ります。"},faq:[{q:"Q. 日付は印刷されていますか？",a:"Undated（日付なし）方式で、お好きな日から自由に始められます。"},{q:"Q. ギフト包装はできますか？",a:"DMでご依頼いただければ、ギフト包装についてご案内いたします。"},{q:"Q. 海外配送は可能ですか？",a:"Etsyを通じて海外配送が可能です。"}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:ju,title:"Breathe — Planner & Diary",desc:"信仰と日常を一緒に記録するプランナー"},{image:Tu,title:"2027 Calendar",desc:"点字で表現したミニマルなカレンダー"}]}}},$u="/dolf/assets/hero-DTWScntO.png",vn="/dolf/assets/hero-DTWScntO.png",Au="/dolf/assets/inside-back-SUz4ASlk.png",Eu="/dolf/assets/hero-CJSOf2Pk.png",Ru="/dolf/assets/hero-ChOiTWCF.png",$w={ko:{slug:"calendar",catalogImage:$u,catalogName:"2027 Calendar",catalogPrice:"$20",hero:{gallery:[vn],title:"2027 Calendar",subtitle:"Calendar & Poster — 점자와 숫자로 표현한 미니멀 캘린더",price:"$20",description:"점자(braille) 모티프로 각 월을 표현한 미니멀 캘린더입니다. B5 양면 캘린더와 B2 포스터로 구성되어 일상의 공간을 따뜻하게 채웁니다.",specLines:["B5 양면 · 176 × 250mm","B2 포스터 동봉","2027 공휴일 표기"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Calendar",paragraphs:["2027 Calendar는 점(dot)으로 시간을 그립니다. 점자와 숫자로 각 월의 날짜를 표현한 미니멀한 디자인입니다.","B5 양면 캘린더와 B2 포스터로 구성되어, 책상 위에도 벽에도 DoLF의 무드를 더합니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B5 · 12 Months",image:vn},{caption:"B5 · DoLF Back",image:Au}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"책상이나 벽에 걸어 한 해를 시작하세요."},{num:"02",title:"Read",desc:"점자로 표현된 달과 날짜를 따라가세요."},{num:"03",title:"Live",desc:"매일의 공간을 DoLF의 무드로 채우세요."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Crafted with braille",items:[{title:"12 Months",desc:"12개월 미니 캘린더"},{title:"Braille",desc:"점자 모티프 디자인"},{title:"숫자",desc:"미니멀한 숫자 표현"},{title:"Double-side",desc:"B5 양면 구성"},{title:"B2 Poster",desc:"B2 포스터 동봉"},{title:"Holidays",desc:"2027 공휴일 표기"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 양면 · 176 × 250mm"},{label:"Format",value:"캘린더 + 포스터"},{label:"Poster",value:"B2 · 500 × 707mm"},{label:"Design",value:"점자 + 숫자"},{label:"Year",value:"2027"},{label:"Holidays",value:"대한민국 공휴일 표기"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Eu,title:"Bible Reading Tracker",desc:"성경 통독을 한눈에 시각화하는 기록 도구"},{image:Ru,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"}]}},en:{slug:"calendar",catalogImage:$u,catalogName:"2027 Calendar",catalogPrice:"$20",hero:{gallery:[vn],title:"2027 Calendar",subtitle:"Calendar & Poster — a minimalist calendar expressed in braille and numbers",price:"$20",description:"A minimalist calendar that expresses each month with a braille motif. Comprising a B5 double-sided calendar and a B2 poster, it warmly fills your everyday spaces.",specLines:["B5 double-sided · 176 × 250mm","B2 poster included","2027 holidays marked"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Calendar",paragraphs:["The 2027 Calendar draws time with dots. A minimalist design that expresses each month’s dates with braille and numbers.","Comprising a B5 double-sided calendar and a B2 poster, it adds the DoLF mood to your desk and your wall alike."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B5 · 12 Months",image:vn},{caption:"B5 · DoLF Back",image:Au}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"Hang it on your desk or wall to begin the year."},{num:"02",title:"Read",desc:"Follow the months and dates expressed in braille."},{num:"03",title:"Live",desc:"Fill your everyday spaces with the DoLF mood."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Crafted with braille",items:[{title:"12 Months",desc:"12-month mini calendar"},{title:"Braille",desc:"Braille motif design"},{title:"Numbers",desc:"minimal number forms"},{title:"Double-side",desc:"B5 double-sided layout"},{title:"B2 Poster",desc:"B2 poster included"},{title:"Holidays",desc:"2027 holidays marked"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 double-sided · 176 × 250mm"},{label:"Format",value:"Calendar + poster"},{label:"Poster",value:"B2 · 500 × 707mm"},{label:"Design",value:"Braille + numbers"},{label:"Year",value:"2027"},{label:"Holidays",value:"South Korean holidays marked"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns due to a change of mind are accepted within 7 days of receiving the item."},faq:[{q:"Q. Are the dates printed in?",a:"It is undated, so you can freely start from any day you like."},{q:"Q. Is gift wrapping available?",a:"Send us a DM and we will guide you through gift wrapping."},{q:"Q. Is international shipping available?",a:"Global shipping is available through Etsy."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Eu,title:"Bible Reading Tracker",desc:"A logging tool that visualizes your Bible read-through at a glance"},{image:Ru,title:"Breathe — Planner & Diary",desc:"A planner for recording faith and daily life together"}]}},ja:{slug:"calendar",catalogImage:$u,catalogName:"2027 Calendar",catalogPrice:"$20",hero:{gallery:[vn],title:"2027 Calendar",subtitle:"Calendar & Poster — 点字と数字で表現したミニマルなカレンダー",price:"$20",description:"点字（braille）モチーフで各月を表現したミニマルなカレンダーです。B5両面カレンダーとB2ポスターで構成され、日常の空間を温かく彩ります。",specLines:["B5両面 · 176 × 250mm","B2ポスター同梱","2027年の祝日を記載"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Calendar",paragraphs:["2027 Calendarは点（dot）で時間を描きます。点字と数字で各月の日付を表現したミニマルなデザインです。","B5両面カレンダーとB2ポスターで構成され、机の上にも壁にもDoLFのムードを添えます。"]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B5 · 12 Months",image:vn},{caption:"B5 · DoLF Back",image:Au}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"机や壁に掛けて一年を始めましょう。"},{num:"02",title:"Read",desc:"点字で表現された月や日付をたどってみましょう。"},{num:"03",title:"Live",desc:"毎日の空間をDoLFのムードで満たしましょう。"}]},features:{eyebrow:"WHAT'S INSIDE",title:"Crafted with braille",items:[{title:"12 Months",desc:"12か月のミニカレンダー"},{title:"Braille",desc:"点字モチーフのデザイン"},{title:"数字",desc:"ミニマルな数字表現"},{title:"Double-side",desc:"B5両面構成"},{title:"B2 Poster",desc:"B2ポスター同梱"},{title:"Holidays",desc:"2027年の祝日を記載"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5両面 · 176 × 250mm"},{label:"Format",value:"カレンダー + ポスター"},{label:"Poster",value:"B2 · 500 × 707mm"},{label:"Design",value:"点字 + 数字"},{label:"Year",value:"2027"},{label:"Holidays",value:"大韓民国の祝日を記載"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"ご注文後2〜3日以内に出荷し、国内宅配便にてお届けします。お客様のご都合による交換・返品は、商品お受け取りから7日以内に承ります。"},faq:[{q:"Q. 日付は印刷されていますか？",a:"Undated（日付なし）方式で、お好きな日から自由に始められます。"},{q:"Q. ギフト包装はできますか？",a:"DMでご依頼いただければ、ギフト包装についてご案内いたします。"},{q:"Q. 海外配送は可能ですか？",a:"Etsyを通じて世界各国への配送が可能です。"}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Eu,title:"Bible Reading Tracker",desc:"聖書通読を一目で可視化できる記録ツール"},{image:Ru,title:"Breathe — Planner & Diary",desc:"信仰と日常を一緒に記録するプランナー"}]}}},Du="/dolf/assets/hero-CyrxStpk.png",zu="/dolf/assets/hero-CyrxStpk.png",Cu="/dolf/assets/hero-CyrxStpk.png",Ou="/dolf/assets/hero-DTWScntO.png",Bu="/dolf/assets/hero-ChOiTWCF.png",Aw={ko:{slug:"poster",catalogImage:Du,catalogName:"2027 Poster (B2)",catalogPrice:"$32",hero:{gallery:[zu],title:"2027 Poster",subtitle:"B2 Wall Poster — 점자와 숫자로 표현한 캘린더 포스터",price:"$32",description:"DoLF 2027 캘린더를 B2(500×707mm) 대형 포스터로. 미니멀한 점·선 디자인이 한 해 동안 공간을 채웁니다.",specLines:["B2 · 500 × 707mm","대형 월 포스터","점자 + 숫자"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why a poster",paragraphs:["캘린더는 책상 위에만 있지 않습니다. B2 포스터는 한 해 전체를 벽에 펼쳐, 매일 시선이 닿는 곳에서 시간을 바라보게 합니다.","점자와 숫자로 표현한 미니멀 디자인은 공간을 채우는 하나의 오브제가 됩니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B2 · 500 × 707mm",image:Cu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"책상이나 벽에 걸어 한 해를 시작하세요."},{num:"02",title:"Read",desc:"점자로 표현된 달과 날짜를 따라가세요."},{num:"03",title:"Live",desc:"매일의 공간을 DoLF의 무드로 채우세요."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Made for your wall",items:[{title:"B2 Size",desc:"500 × 707mm 대형"},{title:"12 Months",desc:"한 해 전체를 한 면에"},{title:"Braille",desc:"점자 모티프 디자인"},{title:"7-Segment",desc:"디지털 숫자 월 표기"},{title:"Holidays",desc:"2027 공휴일 표기"},{title:"Wall-ready",desc:"벽을 채우는 미니멀 오브제"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B2 · 500 × 707mm"},{label:"Type",value:"월 포스터 (Wall)"},{label:"Orientation",value:"세로 (Portrait)"},{label:"Design",value:"점자 + 숫자"},{label:"Year",value:"2027"},{label:"Holidays",value:"대한민국 공휴일"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Ou,title:"2027 Calendar (B5)",desc:"점자로 표현한 B5 미니멀 캘린더"},{image:Bu,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"}]}},en:{slug:"poster",catalogImage:Du,catalogName:"2027 Poster (B2)",catalogPrice:"$32",hero:{gallery:[zu],title:"2027 Poster",subtitle:"B2 Wall Poster — a calendar poster rendered in Braille and numbers",price:"$32",description:"The DoLF 2027 calendar as a large B2 (500×707mm) poster. A minimal dot-and-line design fills your space all year long.",specLines:["B2 · 500 × 707mm","Large monthly poster","Braille + numbers"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why a poster",paragraphs:["A calendar does not belong only on your desk. The B2 poster spreads the whole year across your wall, letting you see time wherever your eyes land each day.","The minimal design rendered in Braille and numbers becomes an object that fills the space."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B2 · 500 × 707mm",image:Cu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"Hang it on your desk or wall and begin the year."},{num:"02",title:"Read",desc:"Follow the months and dates rendered in Braille."},{num:"03",title:"Live",desc:"Fill your everyday space with the DoLF mood."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Made for your wall",items:[{title:"B2 Size",desc:"Large 500 × 707mm"},{title:"12 Months",desc:"The whole year on one sheet"},{title:"Braille",desc:"Braille motif design"},{title:"7-Segment",desc:"Digital-digit month notation"},{title:"Holidays",desc:"2027 holidays marked"},{title:"Wall-ready",desc:"A minimal object that fills the wall"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B2 · 500 × 707mm"},{label:"Type",value:"Monthly poster (Wall)"},{label:"Orientation",value:"Portrait"},{label:"Design",value:"Braille + numbers"},{label:"Year",value:"2027"},{label:"Holidays",value:"Republic of Korea holidays"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"Orders ship within 2–3 days and are delivered by domestic courier. Exchanges and returns for a change of mind are accepted within 7 days of receiving the item."},faq:[{q:"Q. Are the dates pre-printed?",a:"It is undated, so you can freely start from any day you like."},{q:"Q. Is gift wrapping available?",a:"Send us a DM and we will guide you through gift wrapping."},{q:"Q. Do you ship internationally?",a:"Global shipping is available through Etsy."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Ou,title:"2027 Calendar (B5)",desc:"A minimal B5 calendar rendered in Braille"},{image:Bu,title:"Breathe — Planner & Diary",desc:"A planner for recording faith and daily life together"}]}},ja:{slug:"poster",catalogImage:Du,catalogName:"2027 Poster (B2)",catalogPrice:"$32",hero:{gallery:[zu],title:"2027 Poster",subtitle:"B2 Wall Poster — 点字と数字で表現したカレンダーポスター",price:"$32",description:"DoLF 2027カレンダーをB2(500×707mm)の大判ポスターに。ミニマルな点と線のデザインが一年を通して空間を彩ります。",specLines:["B2 · 500 × 707mm","大判マンスリーポスター","点字 + 数字"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why a poster",paragraphs:["カレンダーは机の上だけのものではありません。B2ポスターは一年全体を壁に広げ、毎日視線が届く場所で時間を眺められるようにします。","点字と数字で表現したミニマルなデザインは、空間を彩る一つのオブジェになります。"]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B2 · 500 × 707mm",image:Cu}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"机や壁に掛けて一年を始めましょう。"},{num:"02",title:"Read",desc:"点字で表現された月と日付をたどってみましょう。"},{num:"03",title:"Live",desc:"毎日の空間をDoLFのムードで彩りましょう。"}]},features:{eyebrow:"WHAT'S INSIDE",title:"Made for your wall",items:[{title:"B2 Size",desc:"500 × 707mmの大判"},{title:"12 Months",desc:"一年全体を一面に"},{title:"Braille",desc:"点字モチーフのデザイン"},{title:"7-Segment",desc:"デジタル数字での月表記"},{title:"Holidays",desc:"2027年の祝日を表記"},{title:"Wall-ready",desc:"壁を彩るミニマルなオブジェ"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B2 · 500 × 707mm"},{label:"Type",value:"マンスリーポスター (Wall)"},{label:"Orientation",value:"縦 (Portrait)"},{label:"Design",value:"点字 + 数字"},{label:"Year",value:"2027"},{label:"Holidays",value:"大韓民国の祝日"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。お客様都合による交換・返品は、商品受け取り後7日以内に承ります。"},faq:[{q:"Q. 日付は印刷されていますか？",a:"デイトフリー(Undated)仕様で、お好きな日から自由に始められます。"},{q:"Q. ギフトラッピングは可能ですか？",a:"DMでご依頼いただければ、ギフトラッピングをご案内いたします。"},{q:"Q. 海外発送は可能ですか？",a:"Etsyを通じて世界各国への発送が可能です。"}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Ou,title:"2027 Calendar (B5)",desc:"点字で表現したB5のミニマルカレンダー"},{image:Bu,title:"Breathe — Planner & Diary",desc:"信仰と日常を一緒に記録するプランナー"}]}}},ku="/dolf/assets/hero-IAGVR8nw.png",jl="/dolf/assets/hero-IAGVR8nw.png",Mu="/dolf/assets/inside-foldout-V9ArSbMG.png",Nu="/dolf/assets/topic-psalms-DS_k7MhJ.png",Lu="/dolf/assets/topic-kings-BHghIbI4.png",Uu="/dolf/assets/topic-synoptic-BFJzeuxq.png",Hu="/dolf/assets/hero-CJSOf2Pk.png",_u="/dolf/assets/hero-DTWScntO.png",Ew={ko:{slug:"topical",catalogImage:ku,catalogName:"Topical Reading Tracker",catalogPrice:"from $12",hero:{gallery:[jl],title:"Topical Reading Tracker",subtitle:"Single Sheet & Foldout — 주제별 성경 통독 트래커",price:"from $12",description:"한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 사복음서 대조, 시편·잠언, 평행 본문 등 주제별로 골라보세요.",specLines:["B5 · 176 × 250mm","낱장(Single) 또는 접지(Foldout)","주제별 디자인"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why topical reading?",paragraphs:["성경 전체 통독이 부담될 때, 한 주제를 깊이 따라가 보세요. 사복음서 대조, 시편·잠언, 평행 본문 등 주제별로 짜인 1장짜리 트래커입니다.","낱장은 가볍게, 접지는 펼쳐서 더 넓게. 원하는 형태를 골라 책상에 두거나 성경에 끼워 사용하세요."]},insidePages:{eyebrow:"A LOOK INSIDE",title:"Single & Foldout",items:[{caption:"SINGLE SHEET · 낱장",image:jl},{caption:"FOLDOUT · 접지",image:Mu}]},pagesExplained:{eyebrow:"TOPICS",title:"A few of the topics",intro:"각 주제가 성경의 어느 부분을, 어떤 내용으로 다루는지 살펴보세요.",items:[{title:"A Harmony of the Gospels",desc:"예수님의 탄생부터 부활·승천까지, 네 복음서의 같은 사건을 한 줄에 모아 따라 읽습니다. 복음서마다 강조점이 어떻게 다른지 비교하며 예수님의 생애를 입체적으로 보게 됩니다. (낱장·접지)",usage:"READING · 마태 · 마가 · 누가 · 요한 (4복음서)",image:jl},{title:"Psalms & Proverbs",desc:"매일 시편 5편과 잠언 1장씩, 30일이면 지혜서를 한 바퀴. 예배와 기도의 언어(시편)와 삶의 지혜(잠언)를 매일 함께 묵상합니다.",usage:"READING · 시편 150편 · 잠언 31장",image:Nu},{title:"Kings & Chronicles",desc:"같은 시대를 다룬 두 역사서를 나란히 읽습니다. 열왕기(선지자의 시선)와 역대기(제사장의 시선)가 같은 사건을 어떻게 다르게 기록했는지 비교하며 이스라엘 왕정의 흐름을 봅니다. (낱장·접지)",usage:"READING · 열왕기상·하 · 역대기상·하",image:Lu},{title:"Synoptic Gospels",desc:"세 공관복음을 평행으로 두고, 같은 비유와 기적이 복음서마다 어떻게 기록됐는지 비교하며 읽습니다. (낱장·접지)",usage:"READING · 마태 · 마가 · 누가 (공관복음)",image:Uu}]},features:{eyebrow:"WHAT'S INSIDE",title:"What you get",items:[{title:"9 Topics",desc:"사복음서 대조부터 평행 본문까지"},{title:"Single & Foldout",desc:"낱장 또는 접지 형태 선택"},{title:"By Chapter",desc:"장(chapter)을 점으로 체크"},{title:"By Theme",desc:"한 주제를 깊이 따라 읽기"},{title:"Notes",desc:"묵상·메모 공간 포함"},{title:"B5 Size",desc:"176 × 250mm"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Format",value:"낱장(Single) · 접지(Foldout)"},{label:"Topics",value:"낱장 9종 · 접지 3종"},{label:"Print",value:"단면 또는 양면"},{label:"Paper",value:"미색 모조지"},{label:"Foldout",value:"+$4 추가"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Hu,title:"Bible Reading Tracker",desc:"성경 전체를 한 권으로 통독"},{image:_u,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},en:{slug:"topical",catalogImage:ku,catalogName:"Topical Reading Tracker",catalogPrice:"from $12",hero:{gallery:[jl],title:"Topical Reading Tracker",subtitle:"Single Sheet & Foldout — Topical Bible Reading Tracker",price:"from $12",description:"A one-page reading tracker for following a single theme in depth. Choose by topic—a Harmony of the Gospels, Psalms & Proverbs, parallel passages, and more.",specLines:["B5 · 176 × 250mm","Single sheet or Foldout","Designed by topic"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why topical reading?",paragraphs:["When reading the whole Bible feels overwhelming, try following one theme in depth. It is a one-page tracker organized by topic—a Harmony of the Gospels, Psalms & Proverbs, parallel passages, and more.","The single sheet is light and simple; the foldout opens up for more space. Pick the format you like and keep it on your desk or tucked into your Bible."]},insidePages:{eyebrow:"A LOOK INSIDE",title:"Single & Foldout",items:[{caption:"SINGLE SHEET · single",image:jl},{caption:"FOLDOUT · foldout",image:Mu}]},pagesExplained:{eyebrow:"TOPICS",title:"A few of the topics",intro:"See which part of the Bible each topic covers, and what it focuses on.",items:[{title:"A Harmony of the Gospels",desc:"From the birth of Jesus to His resurrection and ascension, the same events across all four Gospels are gathered on one line to read together. By comparing how each Gospel emphasizes things differently, you see the life of Jesus in fuller dimension. (Single · Foldout)",usage:"READING · Matthew · Mark · Luke · John (4 Gospels)",image:jl},{title:"Psalms & Proverbs",desc:"Five Psalms and one chapter of Proverbs each day—a full lap through the wisdom books in 30 days. Meditate daily on both the language of worship and prayer (Psalms) and the wisdom for living (Proverbs).",usage:"READING · Psalms 150 · Proverbs 31",image:Nu},{title:"Kings & Chronicles",desc:"Read two history books covering the same era side by side. By comparing how Kings (the prophet’s view) and Chronicles (the priest’s view) record the same events differently, you trace the course of Israel’s monarchy. (Single · Foldout)",usage:"READING · 1–2 Kings · 1–2 Chronicles",image:Lu},{title:"Synoptic Gospels",desc:"Place the three Synoptic Gospels in parallel and read while comparing how the same parables and miracles are recorded in each Gospel. (Single · Foldout)",usage:"READING · Matthew · Mark · Luke (Synoptic Gospels)",image:Uu}]},features:{eyebrow:"WHAT'S INSIDE",title:"What you get",items:[{title:"9 Topics",desc:"From a Harmony of the Gospels to parallel passages"},{title:"Single & Foldout",desc:"Choose a single sheet or foldout format"},{title:"By Chapter",desc:"Check off each chapter with a dot"},{title:"By Theme",desc:"Follow one theme in depth"},{title:"Notes",desc:"Includes space for reflection and notes"},{title:"B5 Size",desc:"176 × 250mm"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Format",value:"Single · Foldout"},{label:"Topics",value:"9 single sheets · 3 foldouts"},{label:"Print",value:"Single-sided or double-sided"},{label:"Paper",value:"Ivory woodfree paper"},{label:"Foldout",value:"+$4 extra"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"Orders ship within 2–3 days and are delivered by domestic courier. Exchanges or returns due to a simple change of mind are possible within 7 days of receiving the item."},faq:[{q:"Q. Are dates pre-printed?",a:"It is undated, so you can start freely from any day you like."},{q:"Q. Is gift wrapping available?",a:"Send us a DM and we will guide you through gift wrapping."},{q:"Q. Is international shipping available?",a:"Global shipping is available through Etsy."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Hu,title:"Bible Reading Tracker",desc:"Read through the whole Bible in a single book"},{image:_u,title:"2027 Calendar",desc:"A minimal calendar expressed in braille"}]}},ja:{slug:"topical",catalogImage:ku,catalogName:"Topical Reading Tracker",catalogPrice:"from $12",hero:{gallery:[jl],title:"Topical Reading Tracker",subtitle:"Single Sheet & Foldout — テーマ別聖書通読トラッカー",price:"from $12",description:"一つのテーマを深く追って読む、1枚の通読トラッカーです。福音書の調和、詩篇・箴言、並行箇所など、テーマ別にお選びください。",specLines:["B5 · 176 × 250mm","1枚（Single）または折り（Foldout）","テーマ別デザイン"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why topical reading?",paragraphs:["聖書全体の通読が負担に感じるときは、一つのテーマを深く追ってみてください。福音書の調和、詩篇・箴言、並行箇所など、テーマ別に組まれた1枚のトラッカーです。","1枚は手軽に、折りは広げてより大きく。お好みの形を選び、机に置いたり聖書に挟んだりしてお使いください。"]},insidePages:{eyebrow:"A LOOK INSIDE",title:"Single & Foldout",items:[{caption:"SINGLE SHEET · 1枚",image:jl},{caption:"FOLDOUT · 折り",image:Mu}]},pagesExplained:{eyebrow:"TOPICS",title:"A few of the topics",intro:"各テーマが聖書のどの部分を、どのような内容で扱っているかをご覧ください。",items:[{title:"A Harmony of the Gospels",desc:"イエス様の誕生から復活・昇天まで、四つの福音書の同じ出来事を一行にまとめて追って読みます。福音書ごとに強調点がどのように異なるかを比較しながら、イエス様の生涯を立体的に見ることができます。（1枚・折り）",usage:"READING · マタイ · マルコ · ルカ · ヨハネ（4福音書）",image:jl},{title:"Psalms & Proverbs",desc:"毎日、詩篇5篇と箴言1章ずつ、30日で知恵の書を一巡。礼拝と祈りの言葉（詩篇）と人生の知恵（箴言）を毎日ともに黙想します。",usage:"READING · 詩篇150篇 · 箴言31章",image:Nu},{title:"Kings & Chronicles",desc:"同じ時代を扱う二つの歴史書を並べて読みます。列王記（預言者の視点）と歴代誌（祭司の視点）が同じ出来事をどのように異なって記録したかを比較しながら、イスラエル王政の流れを見ます。（1枚・折り）",usage:"READING · 列王記上・下 · 歴代誌上・下",image:Lu},{title:"Synoptic Gospels",desc:"三つの共観福音書を並行に置き、同じたとえや奇跡が福音書ごとにどのように記録されているかを比較しながら読みます。（1枚・折り）",usage:"READING · マタイ · マルコ · ルカ（共観福音書）",image:Uu}]},features:{eyebrow:"WHAT'S INSIDE",title:"What you get",items:[{title:"9 Topics",desc:"福音書の調和から並行箇所まで"},{title:"Single & Foldout",desc:"1枚または折りの形を選択"},{title:"By Chapter",desc:"章（chapter）を点でチェック"},{title:"By Theme",desc:"一つのテーマを深く追って読む"},{title:"Notes",desc:"黙想・メモのスペースを含む"},{title:"B5 Size",desc:"176 × 250mm"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Format",value:"1枚（Single） · 折り（Foldout）"},{label:"Topics",value:"1枚9種 · 折り3種"},{label:"Print",value:"片面または両面"},{label:"Paper",value:"アイボリー上質紙"},{label:"Foldout",value:"+$4 追加"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"ご注文後2〜3日以内に出荷し、国内宅配便でお届けします。お客様都合による交換・返品は、商品お受け取り後7日以内に承ります。"},faq:[{q:"Q. 日付は印刷されていますか？",a:"Undated（日付なし）方式で、お好きな日から自由に始められます。"},{q:"Q. ギフト包装はできますか？",a:"DMでご依頼いただければ、ギフト包装についてご案内いたします。"},{q:"Q. 海外発送は可能ですか？",a:"Etsyを通じて海外発送が可能です。"}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Hu,title:"Bible Reading Tracker",desc:"聖書全体を一冊で通読"},{image:_u,title:"2027 Calendar",desc:"点字で表現したミニマルなカレンダー"}]}}},Rd=[jw,Tw,$w,Aw,Ew];function Rw(l){return Rd.map(r=>r[l])}function Dd(l,r){return Rd.map(c=>c[r]).find(c=>c.slug===l)}Rd.map(l=>l.ko.slug);function Cy({product:l}){const{t:r}=De(),{addItem:c}=Ed(),{hero:u}=l,d=()=>c({slug:l.slug,name:u.title,price:u.price,image:l.catalogImage});return o.jsx(Dw,{children:o.jsxs(zw,{children:[o.jsx(Cw,{children:o.jsx(Ow,{src:u.gallery[0],alt:u.title})}),o.jsxs(Bw,{children:[o.jsx(kw,{children:u.title}),o.jsx(Mw,{children:u.subtitle}),o.jsx(Nw,{children:u.price}),o.jsx(Lw,{}),o.jsx(Uw,{children:u.description}),o.jsx(Hw,{children:u.specLines.map(g=>o.jsx(_w,{children:g},g))}),o.jsxs(qw,{children:[o.jsx(Gw,{type:"button",onClick:d,children:r.shop.buyNow}),o.jsx(Yw,{type:"button",onClick:d,children:r.shop.addToCart})]})]})]})})}const Dw=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,zw=h(be)`
  display: flex;
  gap: 72px;
  padding-top: 64px;
  padding-bottom: 80px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 64px;
  }
`,Cw=h.div`
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  ${({theme:l})=>l.media.mobile} {
    height: 420px;
  }
`,Ow=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Bw=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,kw=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 64px;
  font-weight: 300;
  line-height: 1.1;
  color: ${({theme:l})=>l.colors.ink};
`,Mw=h.p`
  margin-top: 12px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:l})=>l.colors.textSecondary};
`,Nw=h.p`
  margin-top: 20px;
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,Lw=h.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({theme:l})=>l.colors.border};
  margin: 24px 0;
`,Uw=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`,Hw=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
`,_w=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,qw=h.div`
  display: flex;
  gap: 12px;
  margin-top: 36px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
  }
`,Gw=h.button`
  flex: 1;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,Yw=h.button`
  flex: 1;
  padding: 16px;
  border: 1px solid ${({theme:l})=>l.colors.ink};
  border-radius: 4px;
  background: none;
  color: ${({theme:l})=>l.colors.ink};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:l})=>l.colors.ink};
    color: ${({theme:l})=>l.colors.white};
  }
`;function On({eyebrow:l,title:r,intro:c}){return o.jsxs(Qw,{children:[o.jsx(Pe,{children:l}),o.jsx(Al,{children:r}),c&&o.jsx(Fw,{children:c})]})}const Qw=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,Fw=h.p`
  max-width: 640px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function Oy({data:l}){return o.jsx(Vw,{children:o.jsxs(Pw,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title}),o.jsx(Xw,{children:l.items.map(r=>o.jsxs(Zw,{children:[o.jsx(Iw,{children:r.title}),o.jsx(Kw,{children:r.desc})]},r.title))})]})})}const Vw=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,Pw=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,Xw=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
  width: 100%;
  max-width: 1180px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,Zw=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Iw=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,Kw=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function By({data:l}){return o.jsx(Ww,{children:o.jsxs(Jw,{children:[o.jsx(ej,{children:l.eyebrow}),o.jsx(tj,{children:l.cards.map(r=>o.jsxs(lj,{children:[o.jsx(aj,{children:o.jsx(nj,{src:r.image,alt:r.title})}),o.jsx(ij,{children:r.title}),o.jsx(oj,{children:r.desc})]},r.title))})]})})}const Ww=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,Jw=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 96px;
  padding-bottom: 104px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,ej=h(Pe)`
  text-align: center;
`,tj=h.div`
  display: flex;
  gap: 28px;
  width: 100%;
  max-width: 760px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
  }
`,lj=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,aj=h.div`
  height: 520px;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  ${({theme:l})=>l.media.mobile} {
    height: 360px;
  }
`,nj=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,ij=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,oj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.7;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function rj(){const{slug:l}=Gi(),{locale:r}=De(),c=l?Dd(l,r):void 0;return c?o.jsxs(o.Fragment,{children:[o.jsx(Cy,{product:c}),c.features&&o.jsx(Oy,{data:c.features}),c.related&&o.jsx(By,{data:c.related})]}):o.jsx(Da,{to:"/products",replace:!0})}function sj(){const{t:l}=De();return o.jsx(cj,{children:o.jsxs(uj,{children:[o.jsx(Pe,{children:l.community.hero.eyebrow}),o.jsx(dj,{children:l.community.hero.title}),o.jsx(fj,{children:l.community.hero.subhead})]})})}const cj=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,uj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 48px;
  }
`,dj=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:l})=>l.colors.ink};
`,fj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function hj(){const{t:l}=De();return o.jsx(pj,{children:o.jsxs(mj,{children:[o.jsx(gj,{children:l.community.circles.eyebrow}),o.jsx(yj,{children:l.community.circles.items.map(r=>o.jsxs(bj,{children:[o.jsx(xj,{children:r.title}),o.jsx(vj,{children:r.subhead}),o.jsx(Sj,{children:r.description})]},r.title))})]})})}const pj=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,mj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-top: 88px;
  padding-bottom: 88px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,gj=h(Pe)`
  text-align: center;
`,yj=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1120px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
`,bj=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 3px;
  padding: 36px 32px;
`,xj=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,vj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.textSecondary};
`,Sj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function wj(){const{t:l}=De();return o.jsx(jj,{children:o.jsxs(Tj,{children:[o.jsx(Pe,{children:l.community.program.eyebrow}),o.jsx(Al,{children:l.community.program.title}),o.jsx($j,{children:l.community.program.body}),o.jsx(zy,{type:"button",children:l.community.program.cta})]})})}const jj=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,Tj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 96px;
  padding-bottom: 104px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,$j=h.p`
  max-width: 640px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-bottom: 14px;
`;function Aj(){return o.jsxs(o.Fragment,{children:[o.jsx(sj,{}),o.jsx(hj,{}),o.jsx(wj,{})]})}function Ej(){const{t:l}=De();return o.jsx(Rj,{children:o.jsxs(Dj,{children:[o.jsx(Pe,{children:l.contact.hero.eyebrow}),o.jsx(zj,{children:l.contact.hero.title}),o.jsx(Cj,{children:l.contact.hero.subhead})]})})}const Rj=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,Dj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 48px;
  }
`,zj=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:l})=>l.colors.ink};
`,Cj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function Oj(){const{t:l}=De();return o.jsx(Bj,{children:o.jsx(kj,{children:o.jsx(Mj,{children:l.contact.info.map(r=>o.jsxs(Nj,{children:[o.jsx(Lj,{children:r.label}),o.jsx(Uj,{children:r.value})]},r.label))})})})}const Bj=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,kj=h(be)`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,Mj=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1000px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`,Nj=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`,Lj=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:l})=>l.colors.brandRed};
`,Uj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function Hj(){const{t:l}=De(),[r,c]=A.useState(""),[u,d]=A.useState(""),[g,y]=A.useState(""),j=b=>{b.preventDefault()};return o.jsx(_j,{children:o.jsxs(qj,{children:[o.jsxs(Gj,{children:[o.jsx(Pe,{children:l.contact.form.eyebrow}),o.jsx(Al,{children:l.contact.form.title}),o.jsx(Yj,{children:l.contact.form.body})]}),o.jsxs(Qj,{onSubmit:j,children:[o.jsx(ng,{type:"text",placeholder:l.contact.form.namePlaceholder,value:r,onChange:b=>c(b.target.value)}),o.jsx(ng,{type:"email",placeholder:l.contact.form.emailPlaceholder,value:u,onChange:b=>d(b.target.value)}),o.jsx(Fj,{placeholder:l.contact.form.messagePlaceholder,value:g,onChange:b=>y(b.target.value)}),o.jsx(Vj,{type:"submit",children:l.contact.form.submit})]}),o.jsxs(Pj,{children:[o.jsx(Xj,{children:l.contact.form.b2bText}),o.jsx(Zj,{type:"button",children:l.contact.form.b2bCta})]})]})})}const _j=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,qj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`,Gj=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
`,Yj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`,Qj=h.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 560px;

  ${({theme:l})=>l.media.mobile} {
    max-width: 100%;
  }
`,ky=`
  border-radius: 4px;
  padding: 15px 18px;
  font-size: 15px;
  width: 100%;
`,ng=h.input`
  ${ky}
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  font-family: ${({theme:l})=>l.fonts.kr};
  color: ${({theme:l})=>l.colors.ink};

  &::placeholder {
    color: ${({theme:l})=>l.colors.textSecondary};
  }
`,Fj=h.textarea`
  ${ky}
  height: 130px;
  resize: vertical;
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  font-family: ${({theme:l})=>l.fonts.kr};
  color: ${({theme:l})=>l.colors.ink};

  &::placeholder {
    color: ${({theme:l})=>l.colors.textSecondary};
  }
`,Vj=h.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,Pj=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
`,Xj=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`,Zj=h.button`
  padding: 14px 32px;
  background: none;
  border: 1px solid ${({theme:l})=>l.colors.ink};
  border-radius: 4px;
  color: ${({theme:l})=>l.colors.ink};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:l})=>l.colors.ink};
    color: ${({theme:l})=>l.colors.white};
  }
`;function Ij(){return o.jsxs(o.Fragment,{children:[o.jsx(Ej,{}),o.jsx(Oj,{}),o.jsx(Hj,{})]})}function Kj(){const{t:l,locale:r}=De(),{addItem:c}=Ed(),u=Rw(r);return o.jsxs(o.Fragment,{children:[o.jsx(Wj,{children:o.jsxs(Jj,{children:[o.jsx(Pe,{children:l.shop.hero.eyebrow}),o.jsx(eT,{children:l.shop.hero.title}),o.jsx(tT,{children:l.shop.hero.subhead})]})}),o.jsx(lT,{children:o.jsx(aT,{children:u.map(d=>o.jsxs(nT,{children:[o.jsxs(iT,{to:`/shop/${d.slug}`,children:[o.jsx(oT,{children:o.jsx(rT,{src:d.catalogImage,alt:d.catalogName})}),o.jsx(sT,{children:d.catalogName}),o.jsx(cT,{children:d.catalogPrice})]}),o.jsx(uT,{type:"button",onClick:()=>c({slug:d.slug,name:d.catalogName,price:d.catalogPrice,image:d.catalogImage}),children:l.shop.addToCart})]},d.slug))})})]})}const Wj=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,Jj=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 56px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 56px;
    padding-bottom: 40px;
  }
`,eT=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:l})=>l.colors.ink};
`,tT=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`,lT=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,aT=h(be)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 28px;
  max-width: 1180px;
  padding-top: 40px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 64px;
  }
`,nT=h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,iT=h(lt)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,oT=h.div`
  width: 100%;
  aspect-ratio: 348 / 494;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;
`,rT=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,sT=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:l})=>l.colors.ink};
`,cT=h.p`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,uT=h.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;function dT({data:l}){return o.jsx(fT,{children:o.jsxs(hT,{children:[o.jsx(Pe,{children:l.eyebrow}),o.jsx(Al,{children:l.title}),l.paragraphs.map(r=>o.jsx(pT,{children:r},r))]})})}const fT=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,hT=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: calc(720px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,pT=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function mT({data:l}){return o.jsx(gT,{children:o.jsxs(yT,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title}),o.jsx(bT,{children:l.items.map(r=>o.jsxs(xT,{children:[o.jsx(vT,{children:o.jsx(ST,{src:r.image,alt:r.caption})}),o.jsx(wT,{children:r.caption})]},r.caption))})]})})}const gT=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,yT=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,bT=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
  }
`,xT=h.figure`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,vT=h.div`
  height: 498px;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  ${({theme:l})=>l.media.mobile} {
    height: 360px;
  }
`,ST=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,wT=h.figcaption`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`;function jT({data:l}){return o.jsx(TT,{children:o.jsxs($T,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title,intro:l.intro}),o.jsx(AT,{children:l.items.map((r,c)=>o.jsxs(ET,{$imageRight:c%2===1,children:[o.jsx(RT,{children:o.jsx(DT,{src:r.image,alt:r.title})}),o.jsxs(zT,{children:[o.jsx(CT,{children:r.title}),o.jsx(OT,{children:r.desc}),o.jsx(BT,{children:r.usage})]})]},r.title))})]})})}const TT=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,$T=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 40px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,AT=h.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
  max-width: 1040px;

  ${({theme:l})=>l.media.mobile} {
    gap: 40px;
  }
`,ET=h.div`
  display: flex;
  flex-direction: ${({$imageRight:l})=>l?"row-reverse":"row"};
  align-items: center;
  gap: 56px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }
`,RT=h.div`
  width: 340px;
  height: 483px;
  flex-shrink: 0;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  ${({theme:l})=>l.media.mobile} {
    width: 100%;
    height: auto;
    aspect-ratio: 340 / 483;
  }
`,DT=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,zT=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,CT=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,OT=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`,BT=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.brandRed};
`;function kT({data:l}){return o.jsx(MT,{children:o.jsxs(NT,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title}),o.jsx(LT,{children:l.steps.map(r=>o.jsxs(UT,{children:[o.jsx(HT,{children:r.num}),o.jsx(_T,{children:r.title}),o.jsx(qT,{children:r.desc})]},r.num))})]})})}const MT=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,NT=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,LT=h.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1040px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
  }
`,UT=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,HT=h.span`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 40px;
  font-weight: 300;
  color: ${({theme:l})=>l.colors.brandRed};
`,_T=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,qT=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function GT({data:l}){return o.jsx(YT,{children:o.jsxs(QT,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title}),o.jsx(FT,{children:l.rows.map(r=>o.jsxs(VT,{children:[o.jsx(PT,{children:r.label}),o.jsx(XT,{children:r.value})]},r.label))})]})})}const YT=h.section`
  background-color: ${({theme:l})=>l.colors.cream};
`,QT=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,FT=h.dl`
  width: 100%;
  max-width: 640px;
  margin: 0;
`,VT=h.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};
`,PT=h.dt`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.body};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,XT=h.dd`
  margin: 0;
  text-align: right;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.textSecondary};
`;function ZT({data:l}){return o.jsx(IT,{children:o.jsxs(KT,{children:[o.jsx(On,{eyebrow:l.eyebrow,title:l.title}),o.jsxs(WT,{children:[o.jsxs(ig,{children:[o.jsx(JT,{children:l.shipping.title}),o.jsx(og,{children:l.shipping.body})]}),l.faq.map(r=>o.jsxs(ig,{children:[o.jsx(e$,{children:r.q}),o.jsx(og,{children:r.a})]},r.q))]})]})})}const IT=h.section`
  background-color: ${({theme:l})=>l.colors.surface};
`,KT=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;

  ${({theme:l})=>l.media.mobile} {
    gap: 32px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
`,WT=h.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 720px;
`,ig=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,JT=h.h3`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,e$=h.h4`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,og=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:l})=>l.colors.textSecondary};
`;function t$(){const{slug:l}=Gi(),{locale:r}=De(),c=l?Dd(l,r):void 0;return c?o.jsxs(o.Fragment,{children:[o.jsx(Cy,{product:c}),c.story&&o.jsx(dT,{data:c.story}),c.insidePages&&o.jsx(mT,{data:c.insidePages}),c.features&&o.jsx(Oy,{data:c.features}),c.pagesExplained&&o.jsx(jT,{data:c.pagesExplained}),c.howToUse&&o.jsx(kT,{data:c.howToUse}),c.specs&&o.jsx(GT,{data:c.specs}),c.shippingFaq&&o.jsx(ZT,{data:c.shippingFaq}),c.related&&o.jsx(By,{data:c.related})]}):o.jsx(Da,{to:"/shop",replace:!0})}function My({eyebrow:l,title:r,subhead:c,children:u}){return o.jsx(l$,{children:o.jsxs(a$,{children:[o.jsxs(n$,{children:[o.jsx(Pe,{children:l}),o.jsx(i$,{children:r}),o.jsx(o$,{children:c})]}),u]})})}const l$=h.section`
  display: flex;
  justify-content: center;
  background-color: ${({theme:l})=>l.colors.cream};
  padding: 80px 64px 120px;

  ${({theme:l})=>l.media.mobile} {
    padding: 56px 20px 64px;
  }
`,a$=h.div`
  width: 100%;
  max-width: 460px;
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 6px;
  padding: 40px;

  ${({theme:l})=>l.media.mobile} {
    padding: 28px 24px;
  }
`,n$=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 28px;
`,i$=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,o$=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  line-height: 1.6;
  color: ${({theme:l})=>l.colors.textSecondary};
`,ta=h.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
`,r$=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,la=h.label`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,Ta=h.input`
  width: 100%;
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 15px;
  color: ${({theme:l})=>l.colors.ink};

  &::placeholder {
    color: ${({theme:l})=>l.colors.textSecondary};
  }
`,s$=h.select`
  width: 100%;
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 15px;
  color: ${({theme:l})=>l.colors.ink};
`,Ny=h.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,dd=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.brandRed};
`,Ly=h.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-bottom: 16px;
  cursor: pointer;
`,Uy=h.p`
  text-align: center;
  margin-top: 20px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,c$=h.p`
  margin-top: 16px;
  padding: 14px 16px;
  background-color: ${({theme:l})=>l.colors.surface};
  border-radius: 4px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({theme:l})=>l.colors.textSecondary};
`,u$=h.p`
  margin-bottom: 12px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.brandRed};
`;function d$(){const{t:l}=De(),{login:r}=Cn(),c=ol(),[u,d]=A.useState(""),[g,y]=A.useState(""),[j,b]=A.useState(""),p=l.account.signIn,v=T=>{T.preventDefault();const C=r(u);if(!C){b(p.notFound);return}c(C.role==="admin"?"/admin":"/mypage",{replace:!0})};return o.jsxs(My,{eyebrow:p.eyebrow,title:p.title,subhead:p.subhead,children:[o.jsxs("form",{onSubmit:v,children:[j&&o.jsx(u$,{children:j}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"email",children:p.emailLabel}),o.jsx(Ta,{id:"email",type:"email",placeholder:p.emailPlaceholder,value:u,onChange:T=>d(T.target.value),required:!0})]}),o.jsxs(ta,{children:[o.jsxs(r$,{children:[o.jsx(la,{htmlFor:"password",children:p.passwordLabel}),o.jsx(dd,{as:"span",children:p.forgotPassword})]}),o.jsx(Ta,{id:"password",type:"password",placeholder:p.passwordPlaceholder,value:g,onChange:T=>y(T.target.value)})]}),o.jsxs(Ly,{children:[o.jsx("input",{type:"checkbox",defaultChecked:!0}),p.keepLoggedIn]}),o.jsx(Ny,{type:"submit",children:p.submit})]}),o.jsx(c$,{children:p.notice}),o.jsxs(Uy,{children:[p.noAccount," ",o.jsx(lt,{to:"/signup",children:o.jsx(dd,{children:p.signUpLink})})]})]})}function f$(){const{t:l}=De(),{signUp:r}=Cn(),c=ol(),[u,d]=A.useState(""),[g,y]=A.useState(""),[j,b]=A.useState(""),p=l.account.signUp,v=T=>{T.preventDefault(),r({name:u,email:g,phone:j||void 0}),c("/mypage",{replace:!0})};return o.jsxs(My,{eyebrow:p.eyebrow,title:p.title,subhead:p.subhead,children:[o.jsxs("form",{onSubmit:v,children:[o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"country",children:p.countryLabel}),o.jsxs(s$,{id:"country",defaultValue:"KR",children:[o.jsx("option",{value:"KR",children:"대한민국 (KR)"}),o.jsx("option",{value:"US",children:"United States (US)"}),o.jsx("option",{value:"JP",children:"日本 (JP)"})]})]}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"name",children:p.nameLabel}),o.jsx(Ta,{id:"name",type:"text",placeholder:p.namePlaceholder,value:u,onChange:T=>d(T.target.value),required:!0})]}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"email",children:p.emailLabel}),o.jsx(Ta,{id:"email",type:"email",placeholder:p.emailPlaceholder,value:g,onChange:T=>y(T.target.value),required:!0})]}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"phone",children:p.phoneLabel}),o.jsx(Ta,{id:"phone",type:"tel",placeholder:p.phonePlaceholder,value:j,onChange:T=>b(T.target.value)})]}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"password",children:p.passwordLabel}),o.jsx(Ta,{id:"password",type:"password",placeholder:p.passwordPlaceholder})]}),o.jsxs(ta,{children:[o.jsx(la,{htmlFor:"passwordConfirm",children:p.passwordConfirmLabel}),o.jsx(Ta,{id:"passwordConfirm",type:"password",placeholder:p.passwordConfirmPlaceholder})]}),o.jsxs(Ly,{children:[o.jsx("input",{type:"checkbox",required:!0}),p.terms]}),o.jsx(Ny,{type:"submit",children:p.submit})]}),o.jsxs(Uy,{children:[p.hasAccount," ",o.jsx(lt,{to:"/signin",children:o.jsx(dd,{children:p.signInLink})})]})]})}const rg=[{id:"DLF-1043",date:"2026-05-14",title:"Breathe + Tracker 세트",status:"배송 완료",amount:"$68"},{id:"DLF-1021",date:"2026-03-02",title:"2027 Calendar",status:"배송 완료",amount:"$20"},{id:"DLF-0998",date:"2026-01-20",title:"Bible Reading Tracker",status:"배송 완료",amount:"$30"}],h$=["poster","topical","breathe","calendar"];function p$(){const{t:l,locale:r}=De(),{user:c,logout:u}=Cn(),d=ol(),g=l.account.myPage;if(!c)return null;const y=h$.map(p=>Dd(p,r)).filter(p=>!!p),j=[{label:g.settingName,value:c.name},{label:g.settingEmail,value:c.email},{label:g.settingPhone,value:c.phone??"-"},{label:g.settingAddress,value:c.address??"-"},{label:g.settingMembership,value:c.membership??"Member"}],b=()=>{u(),d("/",{replace:!0})};return o.jsxs(m$,{children:[o.jsxs(g$,{children:[o.jsx(Pe,{children:g.eyebrow}),o.jsx(y$,{children:g.greeting.replace("{name}",c.name)}),o.jsx(b$,{children:g.subhead})]}),o.jsxs(x$,{children:[o.jsxs(qu,{children:[o.jsx(Gu,{children:rg.length}),o.jsx(Yu,{children:g.statsOrders})]}),o.jsxs(qu,{children:[o.jsx(Gu,{children:y.length}),o.jsx(Yu,{children:g.statsWishlist})]}),o.jsxs(qu,{children:[o.jsx(Gu,{children:c.membership??"Member"}),o.jsx(Yu,{children:g.statsSpent})]})]}),o.jsxs(Qu,{children:[o.jsx(Fu,{children:g.ordersTitle}),o.jsx(v$,{children:rg.map(p=>o.jsxs(S$,{children:[o.jsxs(w$,{children:[o.jsxs(j$,{children:[p.id," · ",p.date]}),o.jsx(T$,{children:p.title}),o.jsx($$,{children:p.status})]}),o.jsx(A$,{children:p.amount})]},p.id))})]}),o.jsxs(Qu,{children:[o.jsx(Fu,{children:g.wishlistTitle}),o.jsx(E$,{children:y.map(p=>o.jsxs(R$,{to:`/shop/${p.slug}`,children:[o.jsx(D$,{children:o.jsx("img",{src:p.catalogImage,alt:p.catalogName})}),o.jsx(z$,{children:p.catalogName}),o.jsx(C$,{children:p.catalogPrice})]},p.slug))})]}),o.jsxs(Qu,{children:[o.jsx(Fu,{children:g.settingsTitle}),o.jsx(O$,{children:j.map(p=>o.jsxs(B$,{children:[o.jsx(k$,{children:p.label}),o.jsx(M$,{children:p.value}),o.jsx(N$,{children:g.edit})]},p.label))}),o.jsx(L$,{type:"button",onClick:b,children:l.account.logout})]})]})}const m$=h(be)`
  padding-top: 64px;
  padding-bottom: 104px;
`,g$=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`,y$=h.h1`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 32px;
  font-weight: 700;
  color: ${({theme:l})=>l.colors.ink};
`,b$=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.textSecondary};
`,x$=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,qu=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  background-color: ${({theme:l})=>l.colors.surface};
  border-radius: 6px;
`,Gu=h.span`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 28px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,Yu=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,Qu=h.section`
  margin-bottom: 56px;
`,Fu=h.h2`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
  margin-bottom: 20px;
`,v$=h.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:l})=>l.colors.border};
`,S$=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};

  ${({theme:l})=>l.media.mobile} {
    gap: 12px;
  }
`,w$=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,j$=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,T$=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,$$=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.brandRed};
`,A$=h.span`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h3};
  color: ${({theme:l})=>l.colors.ink};
`,E$=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`,R$=h(lt)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,D$=h.div`
  height: 280px;
  border: 1.5px solid ${({theme:l})=>l.colors.border};
  border-radius: 2px;
  background-color: ${({theme:l})=>l.colors.white};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({theme:l})=>l.media.mobile} {
    height: 200px;
  }
`,z$=h.span`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.body};
  font-weight: 600;
  color: ${({theme:l})=>l.colors.ink};
`,C$=h.span`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.textSecondary};
`,O$=h.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:l})=>l.colors.border};
`,B$=h.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};

  ${({theme:l})=>l.media.mobile} {
    gap: 12px;
  }
`,k$=h.span`
  width: 100px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,M$=h.span`
  flex: 1;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,N$=h.button`
  border: none;
  background: none;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.brandRed};
  cursor: pointer;
`,L$=h.button`
  margin-top: 32px;
  padding: 12px 28px;
  background: none;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:l})=>l.colors.ink};
    color: ${({theme:l})=>l.colors.ink};
  }
`,U$=[{to:"/admin",label:"Dashboard",end:!0},{to:"/admin/insights",label:"Customer Insights",indent:!0},{to:"/admin/members",label:"Members"},{to:"/admin/orders",label:"Orders"},{to:"/admin/products",label:"Products"},{to:"/admin/settings",label:"Settings"}],H$=[{to:"/admin",label:"Dashboard",end:!0},{to:"/admin/members",label:"Members"},{to:"/admin/orders",label:"Orders"},{to:"/admin/products",label:"Products"},{to:"/admin/settings",label:"Settings"}];function _$(){const{user:l,logout:r}=Cn(),c=ol(),u=()=>{r(),c("/",{replace:!0})};return o.jsxs(q$,{children:[o.jsxs(G$,{children:[o.jsxs(Z$,{children:[o.jsx(I$,{children:"DoLF"}),o.jsx(K$,{children:"ADMIN CONSOLE"})]}),o.jsx(W$,{children:U$.map(d=>o.jsx(J$,{to:d.to,end:d.end,$indent:d.indent,children:d.label},d.to))}),o.jsxs(eA,{children:[o.jsxs(tA,{children:["관리자 · ",(l==null?void 0:l.name)??"admin"]}),o.jsx(lA,{type:"button",onClick:u,children:"로그아웃"})]})]}),o.jsxs(Y$,{children:[o.jsxs(Q$,{children:["DoLF ",o.jsx(F$,{children:"ADMIN"})]}),o.jsx(V$,{children:((l==null?void 0:l.name)??"A").charAt(0)})]}),o.jsx(aA,{children:o.jsx(Ty,{})}),o.jsx(P$,{children:H$.map(d=>o.jsx(X$,{to:d.to,end:d.end,children:d.label},d.to))})]})}const q$=h.div`
  display: flex;
  min-height: 100vh;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
  }
`,G$=h.aside`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  background-color: ${({theme:l})=>l.colors.ink};
  color: ${({theme:l})=>l.colors.white};
  padding: 32px 0;

  ${({theme:l})=>l.media.mobile} {
    display: none;
  }
`,Y$=h.header`
  display: none;

  ${({theme:l})=>l.media.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 16px 20px;
    background-color: ${({theme:l})=>l.colors.ink};
    color: ${({theme:l})=>l.colors.white};
  }
`,Q$=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5px;
`,F$=h.span`
  font-size: 11px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 4px;
`,V$=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 13px;
  font-weight: 600;
`,P$=h.nav`
  display: none;

  ${({theme:l})=>l.media.mobile} {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: ${({theme:l})=>l.colors.white};
    border-top: 1px solid ${({theme:l})=>l.colors.border};
  }
`,X$=h(Ad)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 11px;
  color: ${({theme:l})=>l.colors.textSecondary};

  &.active {
    color: ${({theme:l})=>l.colors.brandRed};
    font-weight: 600;
  }
`,Z$=h.div`
  padding: 0 28px 36px;
`,I$=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.5px;
`,K$=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`,W$=h.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,J$=h(Ad)`
  padding: 11px 28px;
  padding-left: ${({$indent:l})=>l?"44px":"28px"};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  color: rgba(255, 255, 255, 0.65);
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    color: ${({theme:l})=>l.colors.white};
  }

  &.active {
    color: ${({theme:l})=>l.colors.white};
    border-left-color: ${({theme:l})=>l.colors.brandRed};
    background-color: rgba(255, 255, 255, 0.05);
  }
`,eA=h.div`
  padding: 24px 28px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tA=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.7);
`,lA=h.button`
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    color: ${({theme:l})=>l.colors.white};
  }
`,aA=h.main`
  flex: 1;
  background-color: ${({theme:l})=>l.colors.surface};
  padding: 36px 40px;
  overflow-x: auto;

  ${({theme:l})=>l.media.mobile} {
    padding: 24px 20px 84px;
  }
`,El=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,Rl=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,Dl=h.p`
  margin-top: 6px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.textSecondary};
`,et=h.section`
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 8px;
  padding: 24px;
`,Gt=h.h2`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.bodyLg};
  font-weight: 700;
  color: ${({theme:l})=>l.colors.ink};
  margin-bottom: 20px;
`,Bn=h.button`
  padding: 11px 18px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
  color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.nav};
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,za=h.button`
  padding: 8px 14px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
  cursor: pointer;
`,Cr=h.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({theme:l})=>l.fonts.kr};
`,ke=h.th`
  text-align: left;
  padding: 12px 14px;
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.textSecondary};
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};
  background-color: ${({theme:l})=>l.colors.surface};
  white-space: nowrap;
`,Me=h.td`
  padding: 14px;
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};
  white-space: nowrap;
`,nA={Paid:"#a81212",Shipped:"#1f1f21",Pending:"#6e6e72",Cancelled:"#b0b0b4",Active:"#a81212",Inactive:"#b0b0b4"},An=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({$status:l})=>nA[l]??"#1f1f21"};
`,zd=[{id:"M-1001",name:"김지혜",email:"jihye@example.com",joinedAt:"2026-01-12",orders:8,totalSpent:"$284",grade:"VIP",status:"Active"},{id:"M-1002",name:"이서준",email:"seojun@example.com",joinedAt:"2026-02-03",orders:3,totalSpent:"$98",grade:"Silver",status:"Active"},{id:"M-1003",name:"박민지",email:"minji@example.com",joinedAt:"2026-02-21",orders:0,totalSpent:"$0",grade:"Basic",status:"Inactive"},{id:"M-1004",name:"정우성",email:"woosung@example.com",joinedAt:"2026-03-15",orders:12,totalSpent:"$476",grade:"VIP",status:"Active"},{id:"M-1005",name:"최유나",email:"yuna@example.com",joinedAt:"2026-04-02",orders:5,totalSpent:"$152",grade:"Gold",status:"Active"},{id:"M-1006",name:"한도윤",email:"doyoon@example.com",joinedAt:"2026-05-19",orders:1,totalSpent:"$38",grade:"Basic",status:"Active"},{id:"M-1007",name:"오세훈",email:"sehoon@example.com",joinedAt:"2026-05-28",orders:2,totalSpent:"$66",grade:"Silver",status:"Active"},{id:"M-1008",name:"강민서",email:"minseo@example.com",joinedAt:"2026-06-10",orders:4,totalSpent:"$134",grade:"Gold",status:"Active"}],Cd=[{id:"DLF-2046",customer:"김지혜",product:"Breathe + Tracker 세트",date:"2026-06-22",amount:"$68",status:"Cancelled"},{id:"DLF-2045",customer:"정우성",product:"2027 Poster (B2)",date:"2026-06-21",amount:"$32",status:"Shipped",overseas:!0},{id:"DLF-2044",customer:"최유나",product:"Topical Tracker (Foldout)",date:"2026-06-20",amount:"$16",status:"Paid"},{id:"DLF-2043",customer:"강민서",product:"2027 Calendar",date:"2026-06-19",amount:"$20",status:"Pending"},{id:"DLF-2042",customer:"이서준",product:"Bible Reading Tracker",date:"2026-06-18",amount:"$30",status:"Shipped"},{id:"DLF-2041",customer:"오세훈",product:"Breathe — Planner & Diary",date:"2026-06-17",amount:"$38",status:"Shipped",overseas:!0}],iA=[{name:"Breathe — Planner & Diary",sku:"DLF-BR-01",price:"$38",stock:142,sales:920},{name:"Bible Reading Tracker",sku:"DLF-BT-01",price:"$30",stock:210,sales:780},{name:"2027 Calendar",sku:"DLF-CA-01",price:"$20",stock:305,sales:640},{name:"Topical Reading Tracker",sku:"DLF-TT-01",price:"from $12",stock:188,sales:470},{name:"2027 Poster (B2)",sku:"DLF-PO-01",price:"$32",stock:96,sales:330}],oA=[{label:"총 회원",value:"1,284",delta:"8.6% this month"},{label:"총 주문",value:"3,672",delta:"12.4% this month"},{label:"매출 (월)",value:"$48.2K",delta:"5.1% this month"},{label:"신규 가입",value:"86",delta:"최근 30일"}],rA=[{label:"Jan",value:58},{label:"Feb",value:72},{label:"Mar",value:64},{label:"Apr",value:86},{label:"May",value:70},{label:"Jun",value:100,highlight:!0}],sA=[{name:"Breathe",percent:92},{name:"Bible Reading Tracker",percent:78},{name:"2027 Calendar",percent:64},{name:"Topical Tracker",percent:47},{name:"2027 Poster",percent:33}];function cA(l){return zd.find(r=>r.id===l)}function Hy(l){return Cd.find(r=>r.id===l)}function uA(){const l=Cd.slice(0,5),r=[...zd].reverse().slice(0,5);return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"Dashboard"}),o.jsx(Dl,{children:"DoLF 스토어 현황을 한눈에 살펴봅니다."})]}),o.jsx(za,{type:"button",children:"최근 30일 ▾"})]}),o.jsx(dA,{children:oA.map(c=>o.jsxs(fA,{children:[o.jsx(hA,{children:c.label}),o.jsx(pA,{children:c.value}),o.jsxs(mA,{children:["▲ ",c.delta]})]},c.label))}),o.jsxs(sg,{children:[o.jsxs(et,{children:[o.jsx(Gt,{children:"매출 추이"}),o.jsx(gA,{children:rA.map(c=>o.jsxs(yA,{children:[o.jsx(bA,{style:{height:`${c.value}%`},$highlight:c.highlight}),o.jsx(xA,{children:c.label})]},c.label))})]}),o.jsxs(et,{children:[o.jsx(Gt,{children:"상품별 판매"}),o.jsx(vA,{children:sA.map(c=>o.jsxs(SA,{children:[o.jsxs(wA,{children:[o.jsx("span",{children:c.name}),o.jsxs("span",{children:[c.percent,"%"]})]}),o.jsx(jA,{children:o.jsx(TA,{style:{width:`${c.percent}%`}})})]},c.name))})]})]}),o.jsxs(sg,{children:[o.jsxs(et,{children:[o.jsxs(cg,{children:[o.jsx(Gt,{children:"최근 주문"}),o.jsx(ug,{to:"/admin/orders",children:"전체 보기 →"})]}),o.jsx(dg,{children:l.map(c=>o.jsxs(fg,{children:[o.jsxs("div",{children:[o.jsxs(hg,{children:["#",c.id]}),o.jsx(Vu,{children:c.product})]}),o.jsx(An,{$status:c.status,children:c.status})]},c.id))})]}),o.jsxs(et,{children:[o.jsxs(cg,{children:[o.jsx(Gt,{children:"신규 회원"}),o.jsx(ug,{to:"/admin/members",children:"전체 보기 →"})]}),o.jsx(dg,{children:r.map(c=>o.jsxs(fg,{children:[o.jsxs("div",{children:[o.jsx(hg,{children:c.name}),o.jsx(Vu,{children:c.email})]}),o.jsx(Vu,{children:c.joinedAt})]},c.id))})]})]})]})}const dA=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`,fA=h.div`
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 8px;
  padding: 22px;
`,hA=h.div`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,pA=h.div`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 32px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
  margin: 10px 0 8px;
`,mA=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.brandRed};
`,sg=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,gA=h.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  height: 180px;
`,yA=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  gap: 10px;
`,bA=h.div`
  width: 100%;
  max-width: 40px;
  border-radius: 2px 2px 0 0;
  background-color: ${({theme:l,$highlight:r})=>r?l.colors.brandRed:l.colors.ink};
`,xA=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,vA=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,SA=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,wA=h.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,jA=h.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.surface};
`,TA=h.div`
  height: 100%;
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.brandRed};
`,cg=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ug=h(lt)`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.brandRed};
  margin-bottom: 20px;
`,dg=h.div`
  display: flex;
  flex-direction: column;
`,fg=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid ${({theme:l})=>l.colors.border};
`,hg=h.div`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,Vu=h.div`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
  margin-top: 2px;
`,$A=["전체","Active","Inactive"];function AA(){const[l,r]=A.useState("전체"),c=ol(),u=zd.filter(d=>l==="전체"||d.status===l);return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"Members"}),o.jsx(Dl,{children:"전체 1,284명의 회원을 관리합니다."})]}),o.jsx(Bn,{type:"button",children:"+ 회원 추가"})]}),o.jsxs(EA,{children:[o.jsx(RA,{children:$A.map(d=>o.jsx(DA,{type:"button",$active:l===d,onClick:()=>r(d),children:d},d))}),o.jsx(zA,{placeholder:"이름 · 이메일 검색…"})]}),o.jsxs(et,{children:[o.jsxs(Cr,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(ke,{children:"이름"}),o.jsx(ke,{children:"이메일"}),o.jsx(ke,{children:"가입일"}),o.jsx(ke,{children:"주문"}),o.jsx(ke,{children:"총 구매액"}),o.jsx(ke,{children:"등급"}),o.jsx(ke,{children:"상태"})]})}),o.jsx("tbody",{children:u.map(d=>o.jsxs(CA,{onClick:()=>c(`/admin/members/${d.id}`),children:[o.jsx(Me,{children:d.name}),o.jsx(Me,{children:d.email}),o.jsx(Me,{children:d.joinedAt}),o.jsx(Me,{children:d.orders}),o.jsx(Me,{children:d.totalSpent}),o.jsx(Me,{children:o.jsx(OA,{$vip:d.grade==="VIP",children:d.grade})}),o.jsx(Me,{children:o.jsx(An,{$status:d.status,children:d.status})})]},d.id))})]}),o.jsxs(BA,{children:[o.jsx(kA,{children:"1–8 / 1,284명"}),o.jsxs(MA,{children:[o.jsx(ki,{$active:!0,children:"1"}),o.jsx(ki,{children:"2"}),o.jsx(ki,{children:"3"}),o.jsx(ki,{children:"…"}),o.jsx(ki,{children:"161"})]})]})]})]})}const EA=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`,RA=h.div`
  display: flex;
  gap: 8px;

  ${({theme:l})=>l.media.mobile} {
    flex-wrap: wrap;
  }
`,DA=h.button`
  padding: 8px 16px;
  border: 1px solid
    ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.border};
  border-radius: 20px;
  background-color: ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.white};
  color: ${({theme:l,$active:r})=>r?l.colors.white:l.colors.textSecondary};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  cursor: pointer;
`,zA=h.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};

  ${({theme:l})=>l.media.mobile} {
    width: 100%;
    box-sizing: border-box;
  }
`,CA=h.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:l})=>l.colors.surface};
  }
`,OA=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:l,$vip:r})=>r?l.colors.brandRed:l.colors.textSecondary};
`,BA=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`,kA=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,MA=h.div`
  display: flex;
  gap: 6px;
`,ki=h.button`
  min-width: 30px;
  height: 30px;
  border: 1px solid
    ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.border};
  border-radius: 4px;
  background-color: ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.white};
  color: ${({theme:l,$active:r})=>r?l.colors.white:l.colors.textSecondary};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  cursor: pointer;
`,NA=[{id:"DLF-2041",product:"Breathe — Planner & Diary",amount:"$38",status:"Paid"},{id:"DLF-2018",product:"2027 Calendar",amount:"$20",status:"Shipped"},{id:"DLF-1990",product:"Bible Reading Tracker",amount:"$30",status:"Shipped"}],LA={VIP:"VIP (상위 3%)",Gold:"Gold (상위 15%)",Silver:"Silver",Basic:"Basic"};function UA(){const{id:l=""}=Gi(),r=ol(),c=cA(l);if(!c)return o.jsx(Da,{to:"/admin/members",replace:!0});const u=[{label:"가입일",value:c.joinedAt},{label:"최근 접속",value:"2026-06-23"},{label:"총 주문",value:`${c.orders}건`},{label:"총 구매액",value:c.totalSpent},{label:"연락처",value:"010-1234-5678"},{label:"등급",value:LA[c.grade]}];return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"회원 상세"}),o.jsxs(Dl,{children:[c.id," 회원의 정보와 주문 내역입니다."]})]}),o.jsx(za,{type:"button",onClick:()=>r("/admin/members"),children:"← 목록으로"})]}),o.jsxs(et,{children:[o.jsxs(HA,{children:[o.jsx(_A,{children:c.name.charAt(0)}),o.jsxs(qA,{children:[o.jsxs(GA,{children:[o.jsx(YA,{children:c.name}),o.jsx(QA,{$vip:c.grade==="VIP",children:c.grade}),o.jsxs(An,{$status:c.status,children:["● ",c.status]})]}),o.jsx(FA,{children:c.email})]})]}),o.jsx(VA,{children:u.map(d=>o.jsxs(PA,{children:[o.jsx(XA,{children:d.label}),o.jsx(ZA,{children:d.value})]},d.label))}),o.jsx(IA,{children:"최근 주문"}),o.jsx(KA,{children:NA.map(d=>o.jsxs(WA,{children:[o.jsxs(JA,{children:[o.jsxs(eE,{children:["#",d.id]}),o.jsx(tE,{children:d.product})]}),o.jsxs(lE,{children:[o.jsx(aE,{children:d.amount}),o.jsx(An,{$status:d.status,children:d.status})]})]},d.id))}),o.jsxs(nE,{children:[o.jsx(Bn,{type:"button",children:"메시지 보내기"}),o.jsx(za,{type:"button",children:"계정 정지"})]})]})]})}const HA=h.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};
`,_A=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({theme:l})=>l.colors.surface};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,qA=h.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,GA=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,YA=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,QA=h.span`
  padding: 3px 8px;
  border-radius: 4px;
  background-color: ${({theme:l,$vip:r})=>r?l.colors.brandRed:l.colors.textSecondary};
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({theme:l})=>l.colors.white};
`,FA=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,VA=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 20px;
  margin-top: 22px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({theme:l})=>l.colors.cream};

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,PA=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,XA=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,ZA=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,IA=h.h2`
  margin-top: 22px;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,KA=h.div`
  margin-top: 14px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 6px;
`,WA=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  & + & {
    border-top: 1px solid ${({theme:l})=>l.colors.border};
  }
`,JA=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,eE=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,tE=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,lE=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,aE=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,nE=h.div`
  display: flex;
  gap: 10px;
  margin-top: 22px;

  & > * {
    flex: 1;
    text-align: center;
  }
`,iE=["전체","Paid","Shipped","Pending","Cancelled"];function oE(){const[l,r]=A.useState("전체"),c=ol(),u=Cd.filter(d=>l==="전체"||d.status===l);return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"Orders"}),o.jsx(Dl,{children:"전체 3,672건의 주문을 관리합니다."})]}),o.jsx(za,{type:"button",children:"주문 내보내기"})]}),o.jsxs(rE,{children:[o.jsx(sE,{children:iE.map(d=>o.jsx(cE,{type:"button",$active:l===d,onClick:()=>r(d),children:d},d))}),o.jsx(uE,{placeholder:"주문번호 · 고객 검색…"})]}),o.jsxs(et,{children:[o.jsxs(Cr,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(ke,{children:"주문번호"}),o.jsx(ke,{children:"고객"}),o.jsx(ke,{children:"상품"}),o.jsx(ke,{children:"금액"}),o.jsx(ke,{children:"배송지"}),o.jsx(ke,{children:"상태"}),o.jsx(ke,{children:"날짜"})]})}),o.jsx("tbody",{children:u.map(d=>o.jsxs(dE,{onClick:()=>c(`/admin/orders/${d.id}`),children:[o.jsxs(Me,{children:["#",d.id]}),o.jsx(Me,{children:d.customer}),o.jsx(Me,{children:d.product}),o.jsx(Me,{children:d.amount}),o.jsx(Me,{children:d.overseas?"해외":"국내"}),o.jsx(Me,{children:o.jsx(An,{$status:d.status,children:d.status})}),o.jsx(Me,{children:d.date})]},d.id))})]}),o.jsxs(fE,{children:[o.jsx(hE,{children:"1–8 / 3,672건 · 해외 1,420건"}),o.jsxs(pE,{children:[o.jsx(ja,{children:"‹"}),o.jsx(ja,{$active:!0,children:"1"}),o.jsx(ja,{children:"2"}),o.jsx(ja,{children:"3"}),o.jsx(ja,{children:"…"}),o.jsx(ja,{children:"459"}),o.jsx(ja,{children:"›"})]})]})]})]})}const rE=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`,sE=h.div`
  display: flex;
  gap: 8px;

  ${({theme:l})=>l.media.mobile} {
    flex-wrap: wrap;
  }
`,cE=h.button`
  padding: 8px 16px;
  border: 1px solid
    ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.border};
  border-radius: 20px;
  background-color: ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.white};
  color: ${({theme:l,$active:r})=>r?l.colors.white:l.colors.textSecondary};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  cursor: pointer;
`,uE=h.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 4px;
  background-color: ${({theme:l})=>l.colors.white};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};

  ${({theme:l})=>l.media.mobile} {
    width: 100%;
    box-sizing: border-box;
  }
`,dE=h.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:l})=>l.colors.surface};
  }
`,fE=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`,hE=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,pE=h.div`
  display: flex;
  gap: 6px;
`,ja=h.button`
  min-width: 32px;
  height: 32px;
  border: 1px solid
    ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.border};
  border-radius: 4px;
  background-color: ${({theme:l,$active:r})=>r?l.colors.ink:l.colors.white};
  color: ${({theme:l,$active:r})=>r?l.colors.white:l.colors.textSecondary};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  cursor: pointer;
`,mE={"DLF-2045":{email:"emma.w@example.com",phone:"+1 415-555-0142",country:"United States (US)",address:"123 Market St, San Francisco",addressLine2:"CA 94103",carrier:"EMS (국제특급)",trackingNo:"EE123456789KR",hsCode:"4910.00 · Calendars",customsTerms:"DDU (관세 수취인 부담)",qty:1,subtotal:"$32",intlShipping:"$18",payment:"PayPal",currency:"USD ($)",total:"$50 USD"}},gE={email:"—",phone:"—",country:"대한민국 (KR)",address:"주소 정보 없음",addressLine2:"",carrier:"—",trackingNo:"—",hsCode:"—",customsTerms:"—",qty:1,subtotal:"—",intlShipping:"$0",payment:"—",currency:"USD ($)",total:"—"};function yE(){const{id:l=""}=Gi(),r=Hy(l);if(!r)return o.jsx(Da,{to:"/admin/orders",replace:!0});const c=mE[r.id]??gE;return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(xE,{to:"/admin/orders",children:"‹ 주문 목록"}),o.jsxs(vE,{children:[o.jsxs(Rl,{children:["주문 #",r.id]}),o.jsx(An,{$status:r.status,children:r.status}),r.overseas&&o.jsx(SE,{children:"International"})]}),o.jsxs(Dl,{children:[r.date," · ",r.customer]})]}),o.jsxs(wE,{children:[o.jsx(za,{type:"button",children:"상태 변경 ▾"}),o.jsx(Bn,{as:lt,to:`/admin/orders/${r.id}/tracking`,children:"배송 추적"})]})]}),o.jsxs(jE,{children:[o.jsxs(et,{children:[o.jsx(Gt,{children:"고객 (Customer)"}),o.jsx(gt,{label:"이름",value:r.customer}),o.jsx(gt,{label:"이메일",value:c.email}),o.jsx(gt,{label:"연락처",value:c.phone})]}),o.jsxs(et,{children:[o.jsx(Gt,{children:"배송지 (Ship to)"}),o.jsx(gt,{label:"국가",value:c.country}),o.jsx(gt,{label:"주소",value:c.address}),c.addressLine2&&o.jsx(gt,{label:"",value:c.addressLine2})]}),r.overseas&&o.jsxs(et,{children:[o.jsx(Gt,{children:"국제배송 (International Shipping)"}),o.jsx(gt,{label:"배송 수단",value:c.carrier}),o.jsx(gt,{label:"트래킹 번호",value:c.trackingNo}),o.jsx(gt,{label:"HS Code",value:c.hsCode}),o.jsx(gt,{label:"통관 조건",value:c.customsTerms})]}),o.jsxs(et,{children:[o.jsx(Gt,{children:"결제"}),o.jsx(gt,{label:"결제수단",value:c.payment}),o.jsx(gt,{label:"통화",value:c.currency}),o.jsx(gt,{label:"소계 (Subtotal)",value:c.subtotal}),o.jsx(gt,{label:"국제배송비 (Intl. shipping)",value:c.intlShipping}),o.jsx(bE,{label:"합계 (Total)",value:c.total})]})]}),o.jsxs(et,{style:{marginTop:20},children:[o.jsx(Gt,{children:"주문 상품"}),o.jsxs(Cr,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(ke,{children:"상품"}),o.jsx(ke,{children:"수량"}),o.jsx(ke,{children:"금액"})]})}),o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx(Me,{children:r.product}),o.jsxs(Me,{children:["×",c.qty]}),o.jsx(Me,{children:r.amount})]})})]})]})]})}function gt({label:l,value:r}){return o.jsxs(_y,{children:[o.jsx(qy,{children:l}),o.jsx(Gy,{children:r})]})}function bE({label:l,value:r}){return o.jsxs(_y,{children:[o.jsx(qy,{children:l}),o.jsx(TE,{children:r})]})}const xE=h(lt)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({theme:l})=>l.colors.ink};
  }
`,vE=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,SE=h.span`
  padding: 3px 10px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 20px;
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,wE=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,jE=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,_y=h.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:l})=>l.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,qy=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,Gy=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
  text-align: right;
`,TE=h(Gy)`
  font-weight: 700;
  color: ${({theme:l})=>l.colors.brandRed};
`,pg=["EMS · 국제특급 우편","DHL Express","FedEx International","UPS Worldwide","CJ대한통운"];function $E(){const{id:l=""}=Gi(),r=ol(),c=Hy(l),[u,d]=A.useState(pg[0]),[g,y]=A.useState(""),[j,b]=A.useState(""),[p,v]=A.useState(!0);if(!c)return o.jsx(Da,{to:"/admin/orders",replace:!0});function T(C){C.preventDefault(),r(`/admin/orders/${l}`)}return o.jsxs(o.Fragment,{children:[o.jsx(El,{children:o.jsxs("div",{children:[o.jsxs(AE,{to:`/admin/orders/${l}`,children:["‹ 주문 #",c.id]}),o.jsx(Rl,{children:"송장 입력"}),o.jsxs(Dl,{children:["주문 #",c.id," · ",c.customer," 배송 정보를 입력합니다."]})]})}),o.jsx(EE,{children:o.jsxs("form",{onSubmit:T,children:[o.jsxs(Pu,{children:[o.jsx(Xu,{htmlFor:"carrier",children:"배송사 (Carrier)"}),o.jsx(RE,{id:"carrier",value:u,onChange:C=>d(C.target.value),children:pg.map(C=>o.jsx("option",{value:C,children:C},C))})]}),o.jsxs(Pu,{children:[o.jsx(Xu,{htmlFor:"tracking",children:"송장번호 (Tracking No.)"}),o.jsx(mg,{id:"tracking",value:g,placeholder:"예: EE123456789KR",onChange:C=>y(C.target.value)})]}),o.jsxs(Pu,{children:[o.jsx(Xu,{htmlFor:"shipped",children:"발송일 (Shipped date)"}),o.jsx(mg,{id:"shipped",type:"date",value:j,onChange:C=>b(C.target.value)})]}),o.jsx(gg,{}),o.jsxs(DE,{children:[o.jsx("input",{id:"notify",type:"checkbox",checked:p,onChange:C=>v(C.target.checked)}),o.jsxs(zE,{children:[o.jsx(CE,{children:"고객에게 배송 시작 알림 보내기"}),o.jsxs(OE,{children:[c.customer," 님께 배송 안내 이메일이 발송됩니다."]})]})]}),o.jsx(gg,{}),o.jsxs(BE,{children:[o.jsx(za,{as:lt,to:`/admin/orders/${l}`,children:"취소"}),o.jsx(Bn,{type:"submit",disabled:!g.trim(),children:"송장 저장 · 발송 처리"})]})]})})]})}const AE=h(lt)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({theme:l})=>l.colors.ink};
  }
`,EE=h(et)`
  max-width: 520px;

  ${({theme:l})=>l.media.mobile} {
    max-width: 100%;
  }
`,Pu=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`,Xu=h.label`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.textSecondary};
  letter-spacing: 0.5px;
`,Yy=`
  width: 100%;
  padding: 12px 14px;
  border-radius: 3px;
  box-sizing: border-box;
`,mg=h.input`
  ${Yy}
  border: 1px solid ${({theme:l})=>l.colors.border};
  background-color: ${({theme:l})=>l.colors.cream};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,RE=h.select`
  ${Yy}
  border: 1px solid ${({theme:l})=>l.colors.border};
  background-color: ${({theme:l})=>l.colors.cream};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.ink};
`,gg=h.div`
  height: 1px;
  margin: 18px 0;
  background-color: ${({theme:l})=>l.colors.border};
`,DE=h.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`,zE=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,CE=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,OE=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,BE=h.div`
  display: flex;
  gap: 10px;

  & > * {
    flex: 1;
    text-align: center;
  }
`,kE=100;function ME(l){return l<kE?"재고 부족":"판매중"}function NE(){return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"Products"}),o.jsx(Dl,{children:"판매 중인 제품과 재고를 관리합니다."})]}),o.jsx(Bn,{type:"button",children:"+ 상품 추가"})]}),o.jsx(et,{children:o.jsxs(Cr,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(ke,{children:"상품명"}),o.jsx(ke,{children:"SKU"}),o.jsx(ke,{children:"가격"}),o.jsx(ke,{children:"재고"}),o.jsx(ke,{children:"판매"}),o.jsx(ke,{children:"상태"})]})}),o.jsx("tbody",{children:iA.map(l=>{const r=ME(l.stock),c=r==="재고 부족";return o.jsxs(LE,{children:[o.jsx(Me,{children:l.name}),o.jsx(UE,{children:l.sku}),o.jsx(Me,{children:l.price}),o.jsx(_E,{$low:c,children:l.stock}),o.jsx(HE,{children:l.sales}),o.jsx(qE,{$low:c,children:r})]},l.sku)})})]})})]})}const LE=h.tr`
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:l})=>l.colors.surface};
  }
`,UE=h(Me)`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: ${({theme:l})=>l.fontSizes.eyebrow};
  color: ${({theme:l})=>l.colors.textSecondary};
`,HE=h(Me)`
  color: ${({theme:l})=>l.colors.textSecondary};
`,_E=h(Me)`
  color: ${({theme:l,$low:r})=>r?l.colors.brandRed:l.colors.textSecondary};
`,qE=h(Me)`
  font-weight: 500;
  color: ${({theme:l,$low:r})=>r?l.colors.brandRed:l.colors.ink};
`,yg=[{id:"storeName",label:"스토어 이름",value:"DoLF"},{id:"storeEmail",label:"대표 이메일",value:"hello@dolf.official"},{id:"instagram",label:"인스타그램",value:"@dolf._official"},{id:"bizNumber",label:"사업자등록번호",value:"123-45-67890"}],bg=[{id:"currency",label:"기본 통화",value:"USD ($)"},{id:"shippingFee",label:"기본 배송비",value:"₩ 3,000"},{id:"freeShipping",label:"무료배송 기준",value:"₩ 50,000 이상"},{id:"dispatch",label:"기본 출고일",value:"결제 후 2–3일"}],xg=[{id:"newOrder",label:"신규 주문 알림",desc:"새 주문이 들어오면 이메일로 알립니다.",on:!0},{id:"newMember",label:"신규 회원 가입 알림",desc:"새 회원이 가입하면 알립니다.",on:!0},{id:"lowStock",label:"재고 부족 알림",desc:"상품 재고가 60개 미만이면 알립니다.",on:!1}];function GE(){const[l,r]=A.useState(()=>Object.fromEntries(yg.map(p=>[p.id,p.value]))),[c,u]=A.useState(()=>Object.fromEntries(bg.map(p=>[p.id,p.value]))),[d,g]=A.useState(()=>Object.fromEntries(xg.map(p=>[p.id,p.on]))),y=(p,v)=>r(T=>({...T,[p]:v})),j=(p,v)=>u(T=>({...T,[p]:v})),b=p=>g(v=>({...v,[p]:!v[p]}));return o.jsxs(o.Fragment,{children:[o.jsx(El,{children:o.jsxs("div",{children:[o.jsx(Rl,{children:"Settings"}),o.jsx(Dl,{children:"스토어 운영 설정을 관리합니다."})]})}),o.jsxs(Zu,{children:[o.jsxs(Iu,{children:[o.jsx(Ku,{children:"스토어 정보"}),o.jsx(Wu,{children:"기본 스토어 정보를 설정합니다."})]}),o.jsx(vg,{children:yg.map(p=>o.jsxs(Sg,{children:[o.jsx(wg,{htmlFor:p.id,children:p.label}),o.jsx(jg,{id:p.id,value:l[p.id],onChange:v=>y(p.id,v.target.value)})]},p.id))})]}),o.jsxs(Zu,{children:[o.jsxs(Iu,{children:[o.jsx(Ku,{children:"결제 · 배송"}),o.jsx(Wu,{children:"통화와 배송 정책을 설정합니다."})]}),o.jsx(vg,{children:bg.map(p=>o.jsxs(Sg,{children:[o.jsx(wg,{htmlFor:p.id,children:p.label}),o.jsx(jg,{id:p.id,value:c[p.id],onChange:v=>j(p.id,v.target.value)})]},p.id))})]}),o.jsxs(Zu,{children:[o.jsxs(Iu,{children:[o.jsx(Ku,{children:"알림"}),o.jsx(Wu,{children:"관리자 알림 수신을 설정합니다."})]}),o.jsx(YE,{children:xg.map(p=>o.jsxs(QE,{children:[o.jsxs("div",{children:[o.jsx(FE,{children:p.label}),o.jsx(VE,{children:p.desc})]}),o.jsx(PE,{type:"button",role:"switch","aria-checked":d[p.id],"aria-label":p.label,$on:d[p.id],onClick:()=>b(p.id),children:o.jsx(XE,{$on:d[p.id]})})]},p.id))})]}),o.jsx(ZE,{children:o.jsx(Bn,{type:"button",children:"변경사항 저장"})})]})}const Zu=h(et)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  margin-bottom: 24px;

  ${({theme:l})=>l.media.mobile} {
    gap: 16px;
    padding: 20px;
    margin-bottom: 16px;
  }
`,Iu=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ku=h.h2`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,Wu=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,vg=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Sg=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,wg=h.label`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,jg=h.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 3px;
  background-color: ${({theme:l})=>l.colors.cream};
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 14px;
  color: ${({theme:l})=>l.colors.ink};

  &:focus {
    outline: none;
    border-color: ${({theme:l})=>l.colors.ink};
  }
`,YE=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,QE=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0;
`,FE=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,VE=h.p`
  margin-top: 3px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,PE=h.button`
  position: relative;
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({theme:l,$on:r})=>r?l.colors.brandRed:l.colors.border};
  transition: background-color 0.2s ease;
`,XE=h.span`
  position: absolute;
  top: 2px;
  left: ${({$on:l})=>l?"22px":"2px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({theme:l})=>l.colors.white};
  transition: left 0.2s ease;
`,ZE=h.div`
  display: flex;
  justify-content: flex-end;
`,IE=[{label:"주 연령대",value:"20–30대",delta:"전체의 72%"},{label:"주 성별",value:"여성",delta:"72% : 28%"},{label:"주 국가",value:"대한민국",delta:"58% · 해외 42%"},{label:"재구매율",value:"34%",delta:"▲ 6% vs 평균"}],KE=[{label:"10대",percent:8},{label:"20대",percent:38,highlight:!0},{label:"30대",percent:34,highlight:!0},{label:"40대",percent:14},{label:"50대+",percent:6}],WE=[{label:"여성 (Female)",percent:72,highlight:!0},{label:"남성 (Male)",percent:28}],JE=[{label:"🇰🇷 대한민국",percent:58,highlight:!0},{label:"🇺🇸 미국",percent:19},{label:"🇯🇵 일본",percent:12},{label:"🇫🇷 프랑스",percent:6},{label:"기타",percent:5}],e3=["20–30대 여성이 핵심 구매층으로 전체의 절반 이상을 차지합니다.","해외 비중이 42%까지 성장 — 미국·일본 고객 대상 영문화·국제배송 우선순위.","재구매율 34%로 평균 대비 높아 리필·시즌 에디션 기회가 있습니다.","선물 수요(12월·신년)에 매출이 집중되는 경향이 보입니다."];function t3(){return o.jsxs(o.Fragment,{children:[o.jsxs(El,{children:[o.jsxs("div",{children:[o.jsx(Rl,{children:"Customer Insights"}),o.jsx(Dl,{children:"상품별 주 고객층을 연령·성별·국가로 분석합니다."})]}),o.jsx(za,{type:"button",children:"Breathe — Planner & Diary ▾"})]}),o.jsx(l3,{children:IE.map(l=>o.jsxs(a3,{children:[o.jsx(n3,{children:l.label}),o.jsx(i3,{children:l.value}),o.jsx(o3,{children:l.delta})]},l.label))}),o.jsxs(Tg,{children:[o.jsxs(et,{children:[o.jsx(Gt,{children:"연령대 분포"}),o.jsx(r3,{children:KE.map(l=>o.jsxs(s3,{children:[o.jsxs(c3,{$highlight:l.highlight,children:[l.percent,"%"]}),o.jsx(u3,{style:{height:`${l.percent*2.6}px`},$highlight:l.highlight}),o.jsx(d3,{children:l.label})]},l.label))})]}),o.jsxs(et,{children:[o.jsx(Gt,{children:"성별 분포"}),o.jsx($g,{children:WE.map(l=>o.jsxs(Ag,{children:[o.jsxs(Eg,{children:[o.jsx("span",{children:l.label}),o.jsxs("span",{children:[l.percent,"%"]})]}),o.jsx(Rg,{$thick:!0,children:o.jsx(Dg,{style:{width:`${l.percent}%`},$highlight:l.highlight})})]},l.label))}),o.jsx(zg,{children:"Breathe 플래너는 20–30대 여성 구매 비중이 가장 높습니다."})]})]}),o.jsxs(Tg,{children:[o.jsxs(et,{children:[o.jsx(Gt,{children:"국가 분포"}),o.jsx($g,{children:JE.map(l=>o.jsxs(Ag,{children:[o.jsxs(Eg,{children:[o.jsx("span",{children:l.label}),o.jsxs(f3,{$highlight:l.highlight,children:[l.percent,"%"]})]}),o.jsx(Rg,{children:o.jsx(Dg,{style:{width:`${l.percent}%`},$highlight:l.highlight})})]},l.label))}),o.jsx(zg,{children:"해외 비중 42%. 미국·일본 순으로 높아 영문 상세·국제배송 강화 시 성장 여지가 큽니다."})]}),o.jsxs(h3,{children:[o.jsx(p3,{children:"주요 인사이트"}),o.jsx(m3,{children:e3.map(l=>o.jsxs(g3,{children:[o.jsx(y3,{}),o.jsx(b3,{children:l})]},l))})]})]})]})}const l3=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`,a3=h.div`
  background-color: ${({theme:l})=>l.colors.white};
  border: 1px solid ${({theme:l})=>l.colors.border};
  border-radius: 6px;
  padding: 22px;
`,n3=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.8px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,i3=h.div`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
  margin: 8px 0;
`,o3=h.div`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 12px;
  color: ${({theme:l})=>l.colors.brandRed};
`,Tg=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  ${({theme:l})=>l.media.mobile} {
    grid-template-columns: 1fr;
  }
`,r3=h.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 180px;
`,s3=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 8px;
`,c3=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:l,$highlight:r})=>r?l.colors.brandRed:l.colors.textSecondary};
`,u3=h.div`
  width: 40px;
  border-radius: 4px 4px 0 0;
  background-color: ${({theme:l,$highlight:r})=>r?l.colors.brandRed:l.colors.ink};
  opacity: ${({$highlight:l})=>l?1:.78};
`,d3=h.span`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 11px;
  color: ${({theme:l})=>l.colors.textSecondary};
`,$g=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ag=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Eg=h.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,f3=h.span`
  font-family: ${({theme:l})=>l.fonts.sans};
  color: ${({theme:l,$highlight:r})=>r?l.colors.brandRed:l.colors.textSecondary};
`,Rg=h.div`
  height: ${({$thick:l})=>l?"10px":"8px"};
  border-radius: ${({$thick:l})=>l?"5px":"4px"};
  background-color: ${({theme:l})=>l.colors.surface};
`,Dg=h.div`
  height: 100%;
  border-radius: inherit;
  background-color: ${({theme:l,$highlight:r})=>r?l.colors.brandRed:l.colors.ink};
  opacity: ${({$highlight:l})=>l?1:.8};
`,zg=h.p`
  margin-top: 18px;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({theme:l})=>l.colors.textSecondary};
`,h3=h.section`
  background-color: ${({theme:l})=>l.colors.ink};
  border-radius: 6px;
  padding: 26px;
`,p3=h.h2`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:l})=>l.colors.white};
  margin-bottom: 16px;
`,m3=h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,g3=h.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,y3=h.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  margin-top: 7px;
  border-radius: 50%;
  background-color: ${({theme:l})=>l.colors.brandRed};
`,b3=h.p`
  flex: 1;
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: 13px;
  line-height: 1.6;
  color: ${({theme:l})=>l.colors.white};
  opacity: 0.92;
`;function Cg({children:l,role:r}){const{user:c}=Cn();return c?r&&c.role!==r?o.jsx(Da,{to:"/",replace:!0}):o.jsx(o.Fragment,{children:l}):o.jsx(Da,{to:"/signin",replace:!0})}function x3(){const{pathname:l}=Ft();return A.useEffect(()=>{window.scrollTo(0,0)},[l]),null}function v3({title:l}){return o.jsxs(S3,{children:[o.jsx(w3,{children:l}),o.jsx(j3,{children:"이 페이지는 곧 준비됩니다."})]})}const S3=h(be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  min-height: 60vh;
`,w3=h.h1`
  font-family: ${({theme:l})=>l.fonts.serif};
  font-size: ${({theme:l})=>l.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:l})=>l.colors.ink};
`,j3=h.p`
  font-family: ${({theme:l})=>l.fonts.kr};
  font-size: ${({theme:l})=>l.fontSizes.body};
  color: ${({theme:l})=>l.colors.textSecondary};
`,T3="/dolf/";function $3(){return o.jsxs(Z1,{basename:T3,children:[o.jsx(x3,{}),o.jsxs($1,{children:[o.jsxs(Ce,{element:o.jsx(HS,{}),children:[o.jsx(Ce,{index:!0,element:o.jsx(A2,{})}),o.jsx(Ce,{path:"about",element:o.jsx(J2,{})}),o.jsx(Ce,{path:"products",element:o.jsx(ww,{})}),o.jsx(Ce,{path:"products/:slug",element:o.jsx(rj,{})}),o.jsx(Ce,{path:"community",element:o.jsx(Aj,{})}),o.jsx(Ce,{path:"contact",element:o.jsx(Ij,{})}),o.jsx(Ce,{path:"shop",element:o.jsx(Kj,{})}),o.jsx(Ce,{path:"shop/:slug",element:o.jsx(t$,{})}),o.jsx(Ce,{path:"signin",element:o.jsx(d$,{})}),o.jsx(Ce,{path:"signup",element:o.jsx(f$,{})}),o.jsx(Ce,{path:"mypage",element:o.jsx(Cg,{role:"user",children:o.jsx(p$,{})})}),o.jsx(Ce,{path:"*",element:o.jsx(v3,{title:"Not Found"})})]}),o.jsxs(Ce,{path:"admin",element:o.jsx(Cg,{role:"admin",children:o.jsx(_$,{})}),children:[o.jsx(Ce,{index:!0,element:o.jsx(uA,{})}),o.jsx(Ce,{path:"insights",element:o.jsx(t3,{})}),o.jsx(Ce,{path:"members",element:o.jsx(AA,{})}),o.jsx(Ce,{path:"members/:id",element:o.jsx(UA,{})}),o.jsx(Ce,{path:"orders",element:o.jsx(oE,{})}),o.jsx(Ce,{path:"orders/:id",element:o.jsx(yE,{})}),o.jsx(Ce,{path:"orders/:id/tracking",element:o.jsx($E,{})}),o.jsx(Ce,{path:"products",element:o.jsx(NE,{})}),o.jsx(Ce,{path:"settings",element:o.jsx(GE,{})})]})]})]})}const A3={colors:{cream:"#fcfbf9",surface:"#f3f1ed",ink:"#1f1f21",textSecondary:"#6e6e72",brandRed:"#a81212",border:"#e2dfd9",white:"#ffffff"},fonts:{serif:'"Cormorant", Georgia, serif',script:'"Reenie Beanie", cursive',sans:'"Inter", "Noto Sans KR", system-ui, sans-serif',kr:'"Noto Sans KR", "Inter", system-ui, sans-serif'},fontSizes:{h1:"clamp(40px, 8vw, 72px)",h2:"clamp(27px, 5vw, 34px)",h3:"clamp(20px, 3vw, 22px)",krSubhead:"clamp(18px, 3vw, 21px)",bodyLg:"clamp(16px, 2.5vw, 18px)",body:"16px",nav:"14px",eyebrow:"13px"},layout:{maxWidth:"1440px",pagePadding:"64px",sectionPadding:"96px"},breakpoints:{mobile:"768px"},media:{mobile:"@media (max-width: 768px)",nav:"@media (max-width: 1100px)"}},E3=Tv`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({theme:l})=>l.colors.cream};
    color: ${({theme:l})=>l.colors.ink};
    font-family: ${({theme:l})=>l.fonts.sans};
    font-size: ${({theme:l})=>l.fontSizes.body};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    width: 100%;
  }
`;function R3({children:l}){const[r,c]=A.useState("ko"),u=A.useMemo(()=>({locale:r,setLocale:c,t:rS[r]}),[r]);return o.jsx(Ey.Provider,{value:u,children:l})}function D3({children:l}){const[r,c]=A.useState([]),u=A.useCallback((g,y=1)=>{c(j=>j.find(p=>p.slug===g.slug)?j.map(p=>p.slug===g.slug?{...p,quantity:p.quantity+y}:p):[...j,{...g,quantity:y}])},[]),d=A.useMemo(()=>({items:r,count:r.reduce((g,y)=>g+y.quantity,0),addItem:u}),[r,u]);return o.jsx(Ry.Provider,{value:d,children:l})}const z3=[{email:"admin@dolf.official",name:"DoLF Admin",role:"admin"},{email:"jihye@example.com",name:"김지혜",role:"user",joinedAt:"2025.01.12",phone:"010-1234-5678",address:"서울특별시 마포구 양화로 123, 4층",membership:"VIP"}],Ju="dolf_auth",Og="dolf_users";function Bg(l,r){try{const c=localStorage.getItem(l);return c?JSON.parse(c):r}catch{return r}}function C3({children:l}){const[r,c]=A.useState(()=>Bg(Ju,null)),[u,d]=A.useState(()=>Bg(Og,[])),g=A.useCallback(v=>{c(v),v?localStorage.setItem(Ju,JSON.stringify(v)):localStorage.removeItem(Ju)},[]),y=A.useCallback(v=>{const T=v.trim().toLowerCase(),C=z3.find(L=>L.email.toLowerCase()===T)??u.find(L=>L.email.toLowerCase()===T);return C?(g(C),C):null},[u,g]),j=A.useCallback(v=>{const T={email:v.email.trim(),name:v.name.trim(),role:"user",phone:v.phone,joinedAt:new Date().toISOString().slice(0,10).replace(/-/g,".")},C=[...u.filter(L=>L.email.toLowerCase()!==T.email.toLowerCase()),T];return d(C),localStorage.setItem(Og,JSON.stringify(C)),g(T),T},[u,g]),b=A.useCallback(()=>g(null),[g]),p=A.useMemo(()=>({user:r,login:y,signUp:j,logout:b}),[r,y,j,b]);return o.jsx(Dy.Provider,{value:p,children:l})}w0.createRoot(document.getElementById("root")).render(o.jsx(A.StrictMode,{children:o.jsxs(Sv,{theme:A3,children:[o.jsx(E3,{}),o.jsx(R3,{children:o.jsx(C3,{children:o.jsx(D3,{children:o.jsx($3,{})})})})]})}));
