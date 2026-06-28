(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function s(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=s(f);fetch(f.href,m)}})();function $0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qs={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function w0(){if(Np)return Ri;Np=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(u,f,m){var x=null;if(m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),"key"in f){m={};for(var j in f)j!=="key"&&(m[j]=f[j])}else m=f;return f=m.ref,{$$typeof:n,type:u,key:x,ref:f!==void 0?f:null,props:m}}return Ri.Fragment=o,Ri.jsx=s,Ri.jsxs=s,Ri}var kp;function E0(){return kp||(kp=1,qs.exports=w0()),qs.exports}var r=E0(),Gs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function T0(){if(Lp)return ie;Lp=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function D(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,U={};function H(S,N,G){this.props=S,this.context=N,this.refs=U,this.updater=G||k}H.prototype.isReactComponent={},H.prototype.setState=function(S,N){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,N,"setState")},H.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function L(){}L.prototype=H.prototype;function Z(S,N,G){this.props=S,this.context=N,this.refs=U,this.updater=G||k}var V=Z.prototype=new L;V.constructor=Z,q(V,H.prototype),V.isPureReactComponent=!0;var te=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function F(S,N,G,Q,P,ue){return G=ue.ref,{$$typeof:n,type:S,key:N,ref:G!==void 0?G:null,props:ue}}function we(S,N){return F(S.type,N,void 0,void 0,void 0,S.props)}function Le(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function At(S){var N={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(G){return N[G]})}var yt=/\/+/g;function qe(S,N){return typeof S=="object"&&S!==null&&S.key!=null?At(""+S.key):N.toString(36)}function Ct(){}function Dt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Ct,Ct):(S.status="pending",S.then(function(N){S.status==="pending"&&(S.status="fulfilled",S.value=N)},function(N){S.status==="pending"&&(S.status="rejected",S.reason=N)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Ee(S,N,G,Q,P){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var ne=!1;if(S===null)ne=!0;else switch(ue){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(S.$$typeof){case n:case o:ne=!0;break;case v:return ne=S._init,Ee(ne(S._payload),N,G,Q,P)}}if(ne)return P=P(S),ne=Q===""?"."+qe(S,0):Q,te(P)?(G="",ne!=null&&(G=ne.replace(yt,"$&/")+"/"),Ee(P,N,G,"",function(it){return it})):P!=null&&(Le(P)&&(P=we(P,G+(P.key==null||S&&S.key===P.key?"":(""+P.key).replace(yt,"$&/")+"/")+ne)),N.push(P)),1;ne=0;var Ke=Q===""?".":Q+":";if(te(S))for(var ge=0;ge<S.length;ge++)Q=S[ge],ue=Ke+qe(Q,ge),ne+=Ee(Q,N,G,ue,P);else if(ge=D(S),typeof ge=="function")for(S=ge.call(S),ge=0;!(Q=S.next()).done;)Q=Q.value,ue=Ke+qe(Q,ge++),ne+=Ee(Q,N,G,ue,P);else if(ue==="object"){if(typeof S.then=="function")return Ee(Dt(S),N,G,Q,P);throw N=String(S),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ne}function O(S,N,G){if(S==null)return S;var Q=[],P=0;return Ee(S,Q,"","",function(ue){return N.call(G,ue,P++)}),Q}function Y(S){if(S._status===-1){var N=S._result;N=N(),N.then(function(G){(S._status===0||S._status===-1)&&(S._status=1,S._result=G)},function(G){(S._status===0||S._status===-1)&&(S._status=2,S._result=G)}),S._status===-1&&(S._status=0,S._result=N)}if(S._status===1)return S._result.default;throw S._result}var I=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function se(){}return ie.Children={map:O,forEach:function(S,N,G){O(S,function(){N.apply(this,arguments)},G)},count:function(S){var N=0;return O(S,function(){N++}),N},toArray:function(S){return O(S,function(N){return N})||[]},only:function(S){if(!Le(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ie.Component=H,ie.Fragment=s,ie.Profiler=f,ie.PureComponent=Z,ie.StrictMode=u,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ie.__COMPILER_RUNTIME={__proto__:null,c:function(S){return X.H.useMemoCache(S)}},ie.cache=function(S){return function(){return S.apply(null,arguments)}},ie.cloneElement=function(S,N,G){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Q=q({},S.props),P=S.key,ue=void 0;if(N!=null)for(ne in N.ref!==void 0&&(ue=void 0),N.key!==void 0&&(P=""+N.key),N)!W.call(N,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&N.ref===void 0||(Q[ne]=N[ne]);var ne=arguments.length-2;if(ne===1)Q.children=G;else if(1<ne){for(var Ke=Array(ne),ge=0;ge<ne;ge++)Ke[ge]=arguments[ge+2];Q.children=Ke}return F(S.type,P,void 0,void 0,ue,Q)},ie.createContext=function(S){return S={$$typeof:x,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},ie.createElement=function(S,N,G){var Q,P={},ue=null;if(N!=null)for(Q in N.key!==void 0&&(ue=""+N.key),N)W.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=N[Q]);var ne=arguments.length-2;if(ne===1)P.children=G;else if(1<ne){for(var Ke=Array(ne),ge=0;ge<ne;ge++)Ke[ge]=arguments[ge+2];P.children=Ke}if(S&&S.defaultProps)for(Q in ne=S.defaultProps,ne)P[Q]===void 0&&(P[Q]=ne[Q]);return F(S,ue,void 0,void 0,null,P)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(S){return{$$typeof:j,render:S}},ie.isValidElement=Le,ie.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:Y}},ie.memo=function(S,N){return{$$typeof:g,type:S,compare:N===void 0?null:N}},ie.startTransition=function(S){var N=X.T,G={};X.T=G;try{var Q=S(),P=X.S;P!==null&&P(G,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(se,I)}catch(ue){I(ue)}finally{X.T=N}},ie.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ie.use=function(S){return X.H.use(S)},ie.useActionState=function(S,N,G){return X.H.useActionState(S,N,G)},ie.useCallback=function(S,N){return X.H.useCallback(S,N)},ie.useContext=function(S){return X.H.useContext(S)},ie.useDebugValue=function(){},ie.useDeferredValue=function(S,N){return X.H.useDeferredValue(S,N)},ie.useEffect=function(S,N,G){var Q=X.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(S,N)},ie.useId=function(){return X.H.useId()},ie.useImperativeHandle=function(S,N,G){return X.H.useImperativeHandle(S,N,G)},ie.useInsertionEffect=function(S,N){return X.H.useInsertionEffect(S,N)},ie.useLayoutEffect=function(S,N){return X.H.useLayoutEffect(S,N)},ie.useMemo=function(S,N){return X.H.useMemo(S,N)},ie.useOptimistic=function(S,N){return X.H.useOptimistic(S,N)},ie.useReducer=function(S,N,G){return X.H.useReducer(S,N,G)},ie.useRef=function(S){return X.H.useRef(S)},ie.useState=function(S){return X.H.useState(S)},ie.useSyncExternalStore=function(S,N,G){return X.H.useSyncExternalStore(S,N,G)},ie.useTransition=function(){return X.H.useTransition()},ie.version="19.1.0",ie}var Up;function Tu(){return Up||(Up=1,Gs.exports=T0()),Gs.exports}var T=Tu();const Kt=$0(T);var Ys={exports:{}},zi={},Qs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function R0(){return Hp||(Hp=1,function(n){function o(O,Y){var I=O.length;O.push(Y);e:for(;0<I;){var se=I-1>>>1,S=O[se];if(0<f(S,Y))O[se]=Y,O[I]=S,I=se;else break e}}function s(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var Y=O[0],I=O.pop();if(I!==Y){O[0]=I;e:for(var se=0,S=O.length,N=S>>>1;se<N;){var G=2*(se+1)-1,Q=O[G],P=G+1,ue=O[P];if(0>f(Q,I))P<S&&0>f(ue,Q)?(O[se]=ue,O[P]=I,se=P):(O[se]=Q,O[G]=I,se=G);else if(P<S&&0>f(ue,I))O[se]=ue,O[P]=I,se=P;else break e}}return Y}function f(O,Y){var I=O.sortIndex-Y.sortIndex;return I!==0?I:O.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var x=Date,j=x.now();n.unstable_now=function(){return x.now()-j}}var y=[],g=[],v=1,w=null,D=3,k=!1,q=!1,U=!1,H=!1,L=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function te(O){for(var Y=s(g);Y!==null;){if(Y.callback===null)u(g);else if(Y.startTime<=O)u(g),Y.sortIndex=Y.expirationTime,o(y,Y);else break;Y=s(g)}}function X(O){if(U=!1,te(O),!q)if(s(y)!==null)q=!0,W||(W=!0,qe());else{var Y=s(g);Y!==null&&Ee(X,Y.startTime-O)}}var W=!1,F=-1,we=5,Le=-1;function At(){return H?!0:!(n.unstable_now()-Le<we)}function yt(){if(H=!1,W){var O=n.unstable_now();Le=O;var Y=!0;try{e:{q=!1,U&&(U=!1,Z(F),F=-1),k=!0;var I=D;try{t:{for(te(O),w=s(y);w!==null&&!(w.expirationTime>O&&At());){var se=w.callback;if(typeof se=="function"){w.callback=null,D=w.priorityLevel;var S=se(w.expirationTime<=O);if(O=n.unstable_now(),typeof S=="function"){w.callback=S,te(O),Y=!0;break t}w===s(y)&&u(y),te(O)}else u(y);w=s(y)}if(w!==null)Y=!0;else{var N=s(g);N!==null&&Ee(X,N.startTime-O),Y=!1}}break e}finally{w=null,D=I,k=!1}Y=void 0}}finally{Y?qe():W=!1}}}var qe;if(typeof V=="function")qe=function(){V(yt)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Dt=Ct.port2;Ct.port1.onmessage=yt,qe=function(){Dt.postMessage(null)}}else qe=function(){L(yt,0)};function Ee(O,Y){F=L(function(){O(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return D},n.unstable_next=function(O){switch(D){case 1:case 2:case 3:var Y=3;break;default:Y=D}var I=D;D=Y;try{return O()}finally{D=I}},n.unstable_requestPaint=function(){H=!0},n.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=D;D=O;try{return Y()}finally{D=I}},n.unstable_scheduleCallback=function(O,Y,I){var se=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=I+S,O={id:v++,callback:Y,priorityLevel:O,startTime:I,expirationTime:S,sortIndex:-1},I>se?(O.sortIndex=I,o(g,O),s(y)===null&&O===s(g)&&(U?(Z(F),F=-1):U=!0,Ee(X,I-se))):(O.sortIndex=S,o(y,O),q||k||(q=!0,W||(W=!0,qe()))),O},n.unstable_shouldYield=At,n.unstable_wrapCallback=function(O){var Y=D;return function(){var I=D;D=Y;try{return O.apply(this,arguments)}finally{D=I}}}}(Vs)),Vs}var qp;function z0(){return qp||(qp=1,Qs.exports=R0()),Qs.exports}var Xs={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function A0(){if(Gp)return ct;Gp=1;var n=Tu();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:y,containerInfo:g,implementation:v}}var x=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ct.createPortal=function(y,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return m(y,g,null,v)},ct.flushSync=function(y){var g=x.T,v=u.p;try{if(x.T=null,u.p=2,y)return y()}finally{x.T=g,u.p=v,u.d.f()}},ct.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(y,g))},ct.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},ct.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var v=g.as,w=j(v,g.crossOrigin),D=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?u.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:k}):v==="script"&&u.d.X(y,{crossOrigin:w,integrity:D,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=j(g.as,g.crossOrigin);u.d.M(y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(y)},ct.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=j(v,g.crossOrigin);u.d.L(y,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(y,g){if(typeof y=="string")if(g){var v=j(g.as,g.crossOrigin);u.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(y)},ct.requestFormReset=function(y){u.d.r(y)},ct.unstable_batchedUpdates=function(y,g){return y(g)},ct.useFormState=function(y,g,v){return x.H.useFormState(y,g,v)},ct.useFormStatus=function(){return x.H.useHostTransitionStatus()},ct.version="19.1.0",ct}var Yp;function C0(){if(Yp)return Xs.exports;Yp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Xs.exports=A0(),Xs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function D0(){if(Qp)return zi;Qp=1;var n=z0(),o=Tu(),s=C0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(m(e)!==e)throw Error(u(188))}function y(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var c=i.alternate;if(c===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===l)return j(i),e;if(c===a)return j(i),t;c=c.sibling}throw Error(u(188))}if(l.return!==a.return)l=i,a=c;else{for(var d=!1,p=i.child;p;){if(p===l){d=!0,l=i,a=c;break}if(p===a){d=!0,a=i,l=c;break}p=p.sibling}if(!d){for(p=c.child;p;){if(p===l){d=!0,l=c,a=i;break}if(p===a){d=!0,a=c,l=i;break}p=p.sibling}if(!d)throw Error(u(189))}}if(l.alternate!==a)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),V=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),At=Symbol.for("react.memo_cache_sentinel"),yt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=yt&&e[yt]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case H:return"Profiler";case U:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case Le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case V:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var Ee=Array.isArray,O=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],S=-1;function N(e){return{current:e}}function G(e){0>S||(e.current=se[S],se[S]=null,S--)}function Q(e,t){S++,se[S]=e.current,e.current=t}var P=N(null),ue=N(null),ne=N(null),Ke=N(null);function ge(e,t){switch(Q(ne,t),Q(ue,e),Q(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=fp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(P),Q(P,e)}function it(){G(P),G(ue),G(ne)}function al(e){e.memoizedState!==null&&Q(Ke,e);var t=P.current,l=fp(t,e.type);t!==l&&(Q(ue,e),Q(P,l))}function cn(e){ue.current===e&&(G(P),G(ue)),Ke.current===e&&(G(Ke),ji._currentValue=I)}var Ot=Object.prototype.hasOwnProperty,zr=n.unstable_scheduleCallback,Ar=n.unstable_cancelCallback,ty=n.unstable_shouldYield,ny=n.unstable_requestPaint,Wt=n.unstable_now,ly=n.unstable_getCurrentPriorityLevel,Yu=n.unstable_ImmediatePriority,Qu=n.unstable_UserBlockingPriority,Ui=n.unstable_NormalPriority,ay=n.unstable_LowPriority,Vu=n.unstable_IdlePriority,iy=n.log,oy=n.unstable_setDisableYieldValue,Ca=null,xt=null;function Cn(e){if(typeof iy=="function"&&oy(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(Ca,e)}catch{}}var bt=Math.clz32?Math.clz32:sy,ry=Math.log,cy=Math.LN2;function sy(e){return e>>>=0,e===0?32:31-(ry(e)/cy|0)|0}var Hi=256,qi=4194304;function il(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~c,a!==0?i=il(a):(d&=p,d!==0?i=il(d):l||(l=p&~e,l!==0&&(i=il(l))))):(p=a&~c,p!==0?i=il(p):d!==0?i=il(d):l||(l=a&~e,l!==0&&(i=il(l)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,l=t&-t,c>=l||c===32&&(l&4194048)!==0)?t:i}function Da(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var e=Hi;return Hi<<=1,(Hi&4194048)===0&&(Hi=256),e}function Zu(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function Cr(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fy(e,t,l,a,i,c){var d=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,z=e.hiddenUpdates;for(l=d&~l;0<l;){var M=31-bt(l),_=1<<M;p[M]=0,b[M]=-1;var A=z[M];if(A!==null)for(z[M]=null,M=0;M<A.length;M++){var C=A[M];C!==null&&(C.lane&=-536870913)}l&=~_}a!==0&&Ku(e,a,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function Ku(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&4194090}function Fu(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-bt(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function Dr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ju(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Cp(e.type))}function dy(e,t){var l=Y.p;try{return Y.p=e,t()}finally{Y.p=l}}var Dn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Dn,ft="__reactProps$"+Dn,Cl="__reactContainer$"+Dn,Mr="__reactEvents$"+Dn,hy="__reactListeners$"+Dn,py="__reactHandles$"+Dn,Pu="__reactResources$"+Dn,Ma="__reactMarker$"+Dn;function Br(e){delete e[ot],delete e[ft],delete e[Mr],delete e[hy],delete e[py]}function Dl(e){var t=e[ot];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Cl]||l[ot]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=mp(e);e!==null;){if(l=e[ot])return l;e=mp(e)}return t}e=l,l=e.parentNode}return null}function Ol(e){if(e=e[ot]||e[Cl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ba(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ml(e){var t=e[Pu];return t||(t=e[Pu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Ma]=!0}var Wu=new Set,Iu={};function ol(e,t){Bl(e,t),Bl(e+"Capture",t)}function Bl(e,t){for(Iu[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var my=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ef={},tf={};function gy(e){return Ot.call(tf,e)?!0:Ot.call(ef,e)?!1:my.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function Yi(e,t,l){if(gy(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Qi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function sn(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}var _r,nf;function _l(e){if(_r===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);_r=t&&t[1]||"",nf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_r+e+nf}var Nr=!1;function kr(e,t){if(!e||Nr)return"";Nr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(C){var A=C}Reflect.construct(e,[],_)}else{try{_.call()}catch(C){A=C}e.call(_.prototype)}}else{try{throw Error()}catch(C){A=C}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),d=c[0],p=c[1];if(d&&p){var b=d.split(`
`),z=p.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===z.length)for(a=b.length-1,i=z.length-1;1<=a&&0<=i&&b[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==z[i]){var M=`
`+b[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=i);break}}}finally{Nr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?_l(l):""}function yy(e){switch(e.tag){case 26:case 27:case 5:return _l(e.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 15:return kr(e.type,!1);case 11:return kr(e.type.render,!1);case 1:return kr(e.type,!0);case 31:return _l("Activity");default:return""}}function lf(e){try{var t="";do t+=yy(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xy(e){var t=af(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=xy(e))}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=af(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var by=/[\n"\\]/g;function Bt(e){return e.replace(by,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lr(e,t,l,a,i,c,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ur(e,d,Mt(t)):l!=null?Ur(e,d,Mt(l)):a!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Mt(p):e.removeAttribute("name")}function rf(e,t,l,a,i,c,d,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||l!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;l=l!=null?""+Mt(l):"",t=t!=null?""+Mt(t):l,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Ur(e,t,l){t==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Nl(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Mt(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cf(e,t,l){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Mt(l):""}function sf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(u(92));if(Ee(a)){if(1<a.length)throw Error(u(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Mt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a)}function kl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||vy.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ff(e,t,l){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&uf(e,i,a)}else for(var c in t)t.hasOwnProperty(c)&&uf(e,c,t[c])}function Hr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zi(e){return jy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,Ul=null;function df(e){var t=Ol(e);if(t&&(e=t.stateNode)){var l=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lr(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[ft]||null;if(!i)throw Error(u(90));Lr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&of(a)}break e;case"textarea":cf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Nl(e,!!l.multiple,t,!1)}}}var Yr=!1;function hf(e,t,l){if(Yr)return e(t,l);Yr=!0;try{var a=e(t);return a}finally{if(Yr=!1,(Ll!==null||Ul!==null)&&(Mo(),Ll&&(t=Ll,e=Ul,Ul=Ll=null,df(t),e)))for(t=0;t<e.length;t++)df(e[t])}}function _a(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ft]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,t,typeof l));return l}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=!1;if(un)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Qr=!1}var On=null,Vr=null,Ki=null;function pf(){if(Ki)return Ki;var e,t=Vr,l=t.length,a,i="value"in On?On.value:On.textContent,c=i.length;for(e=0;e<l&&t[e]===i[e];e++);var d=l-e;for(a=1;a<=d&&t[l-a]===i[c-a];a++);return Ki=i.slice(e,1<a?1-a:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function mf(){return!1}function dt(e){function t(l,a,i,c,d){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(l=e[p],this[p]=l?l(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ji:mf,this.isPropagationStopped=mf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),t}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=dt(rl),ka=v({},rl,{view:0,detail:0}),$y=dt(ka),Xr,Zr,La,Wi=v({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(Xr=e.screenX-La.screenX,Zr=e.screenY-La.screenY):Zr=Xr=0,La=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:Zr}}),gf=dt(Wi),wy=v({},Wi,{dataTransfer:0}),Ey=dt(wy),Ty=v({},ka,{relatedTarget:0}),Kr=dt(Ty),Ry=v({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=dt(Ry),Ay=v({},rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cy=dt(Ay),Dy=v({},rl,{data:0}),yf=dt(Dy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=By[e])?!!t[e]:!1}function Fr(){return _y}var Ny=v({},ka,{key:function(e){if(e.key){var t=Oy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fr,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ky=dt(Ny),Ly=v({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=dt(Ly),Uy=v({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fr}),Hy=dt(Uy),qy=v({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=dt(qy),Yy=v({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=dt(Yy),Vy=v({},rl,{newState:0,oldState:0}),Xy=dt(Vy),Zy=[9,13,27,32],Jr=un&&"CompositionEvent"in window,Ua=null;un&&"documentMode"in document&&(Ua=document.documentMode);var Ky=un&&"TextEvent"in window&&!Ua,bf=un&&(!Jr||Ua&&8<Ua&&11>=Ua),vf=" ",Sf=!1;function jf(e,t){switch(e){case"keyup":return Zy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hl=!1;function Fy(e,t){switch(e){case"compositionend":return $f(t);case"keypress":return t.which!==32?null:(Sf=!0,vf);case"textInput":return e=t.data,e===vf&&Sf?null:e;default:return null}}function Jy(e,t){if(Hl)return e==="compositionend"||!Jr&&jf(e,t)?(e=pf(),Ki=Vr=On=null,Hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bf&&t.locale!=="ko"?null:t.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Py[e.type]:t==="textarea"}function Ef(e,t,l,a){Ll?Ul?Ul.push(a):Ul=[a]:Ll=a,t=Uo(t,"onChange"),0<t.length&&(l=new Pi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ha=null,qa=null;function Wy(e){ip(e,0)}function Ii(e){var t=Ba(e);if(of(t))return e}function Tf(e,t){if(e==="change")return t}var Rf=!1;if(un){var Pr;if(un){var Wr="oninput"in document;if(!Wr){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Wr=typeof zf.oninput=="function"}Pr=Wr}else Pr=!1;Rf=Pr&&(!document.documentMode||9<document.documentMode)}function Af(){Ha&&(Ha.detachEvent("onpropertychange",Cf),qa=Ha=null)}function Cf(e){if(e.propertyName==="value"&&Ii(qa)){var t=[];Ef(t,qa,e,Gr(e)),hf(Wy,t)}}function Iy(e,t,l){e==="focusin"?(Af(),Ha=t,qa=l,Ha.attachEvent("onpropertychange",Cf)):e==="focusout"&&Af()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(qa)}function tx(e,t){if(e==="click")return Ii(t)}function nx(e,t){if(e==="input"||e==="change")return Ii(t)}function lx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:lx;function Ga(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Ot.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,t){var l=Df(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Df(l)}}function Mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ax=un&&"documentMode"in document&&11>=document.documentMode,ql=null,ec=null,Ya=null,tc=!1;function _f(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tc||ql==null||ql!==Xi(a)||(a=ql,"selectionStart"in a&&Ir(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&Ga(Ya,a)||(Ya=a,a=Uo(ec,"onSelect"),0<a.length&&(t=new Pi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ql)))}function cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Gl={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionrun:cl("Transition","TransitionRun"),transitionstart:cl("Transition","TransitionStart"),transitioncancel:cl("Transition","TransitionCancel"),transitionend:cl("Transition","TransitionEnd")},nc={},Nf={};un&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Gl.animationend.animation,delete Gl.animationiteration.animation,delete Gl.animationstart.animation),"TransitionEvent"in window||delete Gl.transitionend.transition);function sl(e){if(nc[e])return nc[e];if(!Gl[e])return e;var t=Gl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Nf)return nc[e]=t[l];return e}var kf=sl("animationend"),Lf=sl("animationiteration"),Uf=sl("animationstart"),ix=sl("transitionrun"),ox=sl("transitionstart"),rx=sl("transitioncancel"),Hf=sl("transitionend"),qf=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function Vt(e,t){qf.set(e,t),ol(t,[e])}var Gf=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var l=Gf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:lf(t)},Gf.set(e,t),t)}return{value:e,source:t,stack:lf(t)}}var Nt=[],Yl=0,ac=0;function eo(){for(var e=Yl,t=ac=Yl=0;t<e;){var l=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var i=Nt[t];Nt[t++]=null;var c=Nt[t];if(Nt[t++]=null,a!==null&&i!==null){var d=a.pending;d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i}c!==0&&Yf(l,i,c)}}function to(e,t,l,a){Nt[Yl++]=e,Nt[Yl++]=t,Nt[Yl++]=l,Nt[Yl++]=a,ac|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ic(e,t,l,a){return to(e,t,l,a),no(e)}function Ql(e,t){return to(e,null,null,t),no(e)}function Yf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,c=e.return;c!==null;)c.childLanes|=l,a=c.alternate,a!==null&&(a.childLanes|=l),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-bt(l),e=c.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),c):null}function no(e){if(50<pi)throw pi=0,fs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vl={};function cx(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,l,a){return new cx(e,t,l,a)}function oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var l=e.alternate;return l===null?(l=St(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Qf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lo(e,t,l,a,i,c){var d=0;if(a=e,typeof e=="function")oc(e)&&(d=1);else if(typeof e=="string")d=u0(e,l,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Le:return e=St(31,l,t,i),e.elementType=Le,e.lanes=c,e;case q:return ul(l.children,i,c,t);case U:d=8,i|=24;break;case H:return e=St(12,l,t,i|2),e.elementType=H,e.lanes=c,e;case X:return e=St(13,l,t,i),e.elementType=X,e.lanes=c,e;case W:return e=St(19,l,t,i),e.elementType=W,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case V:d=10;break e;case Z:d=9;break e;case te:d=11;break e;case F:d=14;break e;case we:d=16,a=null;break e}d=29,l=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=St(d,l,t,i),t.elementType=e,t.type=a,t.lanes=c,t}function ul(e,t,l,a){return e=St(7,e,a,t),e.lanes=l,e}function rc(e,t,l){return e=St(6,e,null,t),e.lanes=l,e}function cc(e,t,l){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xl=[],Zl=0,ao=null,io=0,kt=[],Lt=0,fl=null,dn=1,hn="";function dl(e,t){Xl[Zl++]=io,Xl[Zl++]=ao,ao=e,io=t}function Vf(e,t,l){kt[Lt++]=dn,kt[Lt++]=hn,kt[Lt++]=fl,fl=e;var a=dn;e=hn;var i=32-bt(a)-1;a&=~(1<<i),l+=1;var c=32-bt(t)+i;if(30<c){var d=i-i%5;c=(a&(1<<d)-1).toString(32),a>>=d,i-=d,dn=1<<32-bt(t)+i|l<<i|a,hn=c+e}else dn=1<<c|l<<i|a,hn=e}function sc(e){e.return!==null&&(dl(e,1),Vf(e,1,0))}function uc(e){for(;e===ao;)ao=Xl[--Zl],Xl[Zl]=null,io=Xl[--Zl],Xl[Zl]=null;for(;e===fl;)fl=kt[--Lt],kt[Lt]=null,hn=kt[--Lt],kt[Lt]=null,dn=kt[--Lt],kt[Lt]=null}var ut=null,Ne=null,me=!1,hl=null,It=!1,fc=Error(u(519));function pl(e){var t=Error(u(418,""));throw Xa(_t(t,e)),fc}function Xf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ot]=e,t[ft]=a,l){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(l=0;l<gi.length;l++)de(gi[l],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),rf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Vi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),sf(t,a.value,a.defaultValue,a.children),Vi(t)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||sp(t.textContent,l)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ho),t=!0):t=!1,t||pl(e)}function Zf(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:ut=ut.return}}function Qa(e){if(e!==ut)return!1;if(!me)return Zf(e),me=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Rs(e.type,e.memoizedProps)),l=!l),l&&Ne&&pl(e),Zf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){Ne=Zt(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,Kn(e.type)?(e=Ds,Ds=null,Ne=e):Ne=t):Ne=ut?Zt(e.stateNode.nextSibling):null;return!0}function Va(){Ne=ut=null,me=!1}function Kf(){var e=hl;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),hl=null),e}function Xa(e){hl===null?hl=[e]:hl.push(e)}var dc=N(null),ml=null,pn=null;function Mn(e,t,l){Q(dc,t._currentValue),t._currentValue=l}function mn(e){e._currentValue=dc.current,G(dc)}function hc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function pc(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var d=i.child;c=c.firstContext;e:for(;c!==null;){var p=c;c=i;for(var b=0;b<t.length;b++)if(p.context===t[b]){c.lanes|=l,p=c.alternate,p!==null&&(p.lanes|=l),hc(c.return,l,e),a||(d=null);break e}c=p.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(u(341));d.lanes|=l,c=d.alternate,c!==null&&(c.lanes|=l),hc(d,l,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Za(e,t,l,a){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var p=i.type;vt(i.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(i===Ke.current){if(d=i.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ji):e=[ji])}i=i.return}e!==null&&pc(t,e,l,a),t.flags|=262144}function oo(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gl(e){ml=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Ff(ml,e)}function ro(e,t){return ml===null&&gl(e),Ff(e,t)}function Ff(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},pn===null){if(e===null)throw Error(u(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return l}var sx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},ux=n.unstable_scheduleCallback,fx=n.unstable_NormalPriority,Ve={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new sx,data:new Map,refCount:0}}function Ka(e){e.refCount--,e.refCount===0&&ux(fx,function(){e.controller.abort()})}var Fa=null,gc=0,Kl=0,Fl=null;function dx(e,t){if(Fa===null){var l=Fa=[];gc=0,Kl=xs(),Fl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return gc++,t.then(Jf,Jf),t}function Jf(){if(--gc===0&&Fa!==null){Fl!==null&&(Fl.status="fulfilled");var e=Fa;Fa=null,Kl=0,Fl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hx(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Pf=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&dx(e,t),Pf!==null&&Pf(e,t)};var yl=N(null);function yc(){var e=yl.current;return e!==null?e:Re.pooledCache}function co(e,t){t===null?Q(yl,yl.current):Q(yl,t.pool)}function Wf(){var e=yc();return e===null?null:{parent:Ve._currentValue,pool:e}}var Ja=Error(u(460)),If=Error(u(474)),so=Error(u(542)),xc={then:function(){}};function ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uo(){}function td(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(uo,uo),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e;default:if(typeof t.status=="string")t.then(uo,uo);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e}throw Pa=t,Ja}}var Pa=null;function nd(){if(Pa===null)throw Error(u(459));var e=Pa;return Pa=null,e}function ld(e){if(e===Ja||e===so)throw Error(u(483))}var Bn=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=no(e),Yf(e,null,l),t}return to(e,a,t,l),no(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Fu(e,l)}}function Sc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,c=null;if(l=l.firstBaseUpdate,l!==null){do{var d={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};c===null?i=c=d:c=c.next=d,l=l.next}while(l!==null);c===null?i=c=t:c=c.next=t}else i=c=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var jc=!1;function Ia(){if(jc){var e=Fl;if(e!==null)throw e}}function ei(e,t,l,a){jc=!1;var i=e.updateQueue;Bn=!1;var c=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var b=p,z=b.next;b.next=null,d===null?c=z:d.next=z,d=b;var M=e.alternate;M!==null&&(M=M.updateQueue,p=M.lastBaseUpdate,p!==d&&(p===null?M.firstBaseUpdate=z:p.next=z,M.lastBaseUpdate=b))}if(c!==null){var _=i.baseState;d=0,M=z=b=null,p=c;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(he&A)===A:(a&A)===A){A!==0&&A===Kl&&(jc=!0),M!==null&&(M=M.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ae=e,ee=p;A=t;var $e=l;switch(ee.tag){case 1:if(ae=ee.payload,typeof ae=="function"){_=ae.call($e,_,A);break e}_=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ee.payload,A=typeof ae=="function"?ae.call($e,_,A):ae,A==null)break e;_=v({},_,A);break e;case 2:Bn=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},M===null?(z=M=C,b=_):M=M.next=C,d|=A;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);M===null&&(b=_),i.baseState=b,i.firstBaseUpdate=z,i.lastBaseUpdate=M,c===null&&(i.shared.lanes=0),Qn|=d,e.lanes=d,e.memoizedState=_}}function ad(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function id(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ad(l[e],t)}var Jl=N(null),fo=N(0);function od(e,t){e=jn,Q(fo,e),Q(Jl,t),jn=e|t.baseLanes}function $c(){Q(fo,jn),Q(Jl,Jl.current)}function wc(){jn=fo.current,G(Jl),G(fo)}var kn=0,re=null,Se=null,Ge=null,ho=!1,Pl=!1,xl=!1,po=0,ti=0,Wl=null,px=0;function Ue(){throw Error(u(321))}function Ec(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!vt(e[l],t[l]))return!1;return!0}function Tc(e,t,l,a,i,c){return kn=c,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Yd:Qd,xl=!1,c=l(a,i),xl=!1,Pl&&(c=cd(t,l,a,i)),rd(e),c}function rd(e){O.H=vo;var t=Se!==null&&Se.next!==null;if(kn=0,Ge=Se=re=null,ho=!1,ti=0,Wl=null,t)throw Error(u(300));e===null||Je||(e=e.dependencies,e!==null&&oo(e)&&(Je=!0))}function cd(e,t,l,a){re=e;var i=0;do{if(Pl&&(Wl=null),ti=0,Pl=!1,25<=i)throw Error(u(301));if(i+=1,Ge=Se=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}O.H=Sx,c=t(l,a)}while(Pl);return c}function mx(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(re.flags|=1024),t}function Rc(){var e=po!==0;return po=0,e}function zc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ac(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}kn=0,Ge=Se=re=null,Pl=!1,ti=po=0,Wl=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ye(){if(Se===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ge===null?re.memoizedState:Ge.next;if(t!==null)Ge=t,Se=e;else{if(e===null)throw re.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ti;return ti+=1,Wl===null&&(Wl=[]),e=td(Wl,e,t),t=re,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Yd:Qd),e}function mo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===V)return rt(e)}throw Error(u(438,String(e)))}function Dc(e){var t=null,l=re.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Cc(),re.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=At;return t.index++,l}function gn(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Ye();return Oc(t,Se,e)}function Oc(e,t,l){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=l;var i=e.baseQueue,c=a.pending;if(c!==null){if(i!==null){var d=i.next;i.next=c.next,c.next=d}t.baseQueue=i=c,a.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var p=d=null,b=null,z=t,M=!1;do{var _=z.lane&-536870913;if(_!==z.lane?(he&_)===_:(kn&_)===_){var A=z.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),_===Kl&&(M=!0);else if((kn&A)===A){z=z.next,A===Kl&&(M=!0);continue}else _={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(p=b=_,d=c):b=b.next=_,re.lanes|=A,Qn|=A;_=z.action,xl&&l(c,_),c=z.hasEagerState?z.eagerState:l(c,_)}else A={lane:_,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},b===null?(p=b=A,d=c):b=b.next=A,re.lanes|=_,Qn|=_;z=z.next}while(z!==null&&z!==t);if(b===null?d=c:b.next=p,!vt(c,e.memoizedState)&&(Je=!0,M&&(l=Fl,l!==null)))throw l;e.memoizedState=c,e.baseState=d,e.baseQueue=b,a.lastRenderedState=c}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Mc(e){var t=Ye(),l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,c=t.memoizedState;if(i!==null){l.pending=null;var d=i=i.next;do c=e(c,d.action),d=d.next;while(d!==i);vt(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),l.lastRenderedState=c}return[c,a]}function sd(e,t,l){var a=re,i=Ye(),c=me;if(c){if(l===void 0)throw Error(u(407));l=l()}else l=t();var d=!vt((Se||i).memoizedState,l);d&&(i.memoizedState=l,Je=!0),i=i.queue;var p=dd.bind(null,a,i,e);if(li(2048,8,p,[e]),i.getSnapshot!==t||d||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,Il(9,yo(),fd.bind(null,a,i,l,t),null),Re===null)throw Error(u(349));c||(kn&124)!==0||ud(a,t,l)}return l}function ud(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=re.updateQueue,t===null?(t=Cc(),re.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function fd(e,t,l,a){t.value=l,t.getSnapshot=a,hd(t)&&pd(e)}function dd(e,t,l){return l(function(){hd(t)&&pd(e)})}function hd(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!vt(e,l)}catch{return!0}}function pd(e){var t=Ql(e,2);t!==null&&Tt(t,e,2)}function Bc(e){var t=ht();if(typeof e=="function"){var l=e;if(e=l(),xl){Cn(!0);try{l()}finally{Cn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t}function md(e,t,l,a){return e.baseState=l,Oc(e,Se,typeof a=="function"?a:gn)}function gx(e,t,l,a,i){if(bo(e))throw Error(u(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};O.T!==null?l(!0):c.isTransition=!1,a(c),l=t.pending,l===null?(c.next=t.pending=c,gd(t,c)):(c.next=l.next,t.pending=l.next=c)}}function gd(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var c=O.T,d={};O.T=d;try{var p=l(i,a),b=O.S;b!==null&&b(d,p),yd(e,t,p)}catch(z){_c(e,t,z)}finally{O.T=c}}else try{c=l(i,a),yd(e,t,c)}catch(z){_c(e,t,z)}}function yd(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){xd(e,t,a)},function(a){return _c(e,t,a)}):xd(e,t,l)}function xd(e,t,l){t.status="fulfilled",t.value=l,bd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,gd(e,l)))}function _c(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,bd(t),t=t.next;while(t!==a)}e.action=null}function bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vd(e,t){return t}function Sd(e,t){if(me){var l=Re.formState;if(l!==null){e:{var a=re;if(me){if(Ne){t:{for(var i=Ne,c=It;i.nodeType!==8;){if(!c){i=null;break t}if(i=Zt(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){Ne=Zt(i.nextSibling),a=i.data==="F!";break e}}pl(a)}a=!1}a&&(t=l[0])}}return l=ht(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vd,lastRenderedState:t},l.queue=a,l=Hd.bind(null,re,a),a.dispatch=l,a=Bc(!1),c=Hc.bind(null,re,!1,a.queue),a=ht(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=gx.bind(null,re,i,c,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function jd(e){var t=Ye();return $d(t,Se,e)}function $d(e,t,l){if(t=Oc(e,t,vd)[0],e=go(gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ni(t)}catch(d){throw d===Ja?so:d}else a=t;t=Ye();var i=t.queue,c=i.dispatch;return l!==t.memoizedState&&(re.flags|=2048,Il(9,yo(),yx.bind(null,i,l),null)),[a,c,e]}function yx(e,t){e.action=t}function wd(e){var t=Ye(),l=Se;if(l!==null)return $d(t,l,e);Ye(),t=t.memoizedState,l=Ye();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Il(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=re.updateQueue,t===null&&(t=Cc(),re.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function yo(){return{destroy:void 0,resource:void 0}}function Ed(){return Ye().memoizedState}function xo(e,t,l,a){var i=ht();a=a===void 0?null:a,re.flags|=e,i.memoizedState=Il(1|t,yo(),l,a)}function li(e,t,l,a){var i=Ye();a=a===void 0?null:a;var c=i.memoizedState.inst;Se!==null&&a!==null&&Ec(a,Se.memoizedState.deps)?i.memoizedState=Il(t,c,l,a):(re.flags|=e,i.memoizedState=Il(1|t,c,l,a))}function Td(e,t){xo(8390656,8,e,t)}function Rd(e,t){li(2048,8,e,t)}function zd(e,t){return li(4,2,e,t)}function Ad(e,t){return li(4,4,e,t)}function Cd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,l){l=l!=null?l.concat([e]):null,li(4,4,Cd.bind(null,t,e),l)}function Nc(){}function Od(e,t){var l=Ye();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Ec(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Md(e,t){var l=Ye();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Ec(t,a[1]))return a[0];if(a=e(),xl){Cn(!0);try{e()}finally{Cn(!1)}}return l.memoizedState=[a,t],a}function kc(e,t,l){return l===void 0||(kn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Nh(),re.lanes|=e,Qn|=e,l)}function Bd(e,t,l,a){return vt(l,t)?l:Jl.current!==null?(e=kc(e,l,a),vt(e,t)||(Je=!0),e):(kn&42)===0?(Je=!0,e.memoizedState=l):(e=Nh(),re.lanes|=e,Qn|=e,t)}function _d(e,t,l,a,i){var c=Y.p;Y.p=c!==0&&8>c?c:8;var d=O.T,p={};O.T=p,Hc(e,!1,t,l);try{var b=i(),z=O.S;if(z!==null&&z(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var M=hx(b,a);ai(e,t,M,Et(e))}else ai(e,t,a,Et(e))}catch(_){ai(e,t,{then:function(){},status:"rejected",reason:_},Et())}finally{Y.p=c,O.T=d}}function xx(){}function Lc(e,t,l,a){if(e.tag!==5)throw Error(u(476));var i=Nd(e).queue;_d(e,i,t,I,l===null?xx:function(){return kd(e),l(a)})}function Nd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:I},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kd(e){var t=Nd(e).next.queue;ai(e,t,{},Et())}function Uc(){return rt(ji)}function Ld(){return Ye().memoizedState}function Ud(){return Ye().memoizedState}function bx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Et();e=_n(l);var a=Nn(t,e,l);a!==null&&(Tt(a,t,l),Wa(a,t,l)),t={cache:mc()},e.payload=t;return}t=t.return}}function vx(e,t,l){var a=Et();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},bo(e)?qd(t,l):(l=ic(e,t,l,a),l!==null&&(Tt(l,e,a),Gd(l,t,a)))}function Hd(e,t,l){var a=Et();ai(e,t,l,a)}function ai(e,t,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(bo(e))qd(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,p=c(d,l);if(i.hasEagerState=!0,i.eagerState=p,vt(p,d))return to(e,t,i,0),Re===null&&eo(),!1}catch{}finally{}if(l=ic(e,t,i,a),l!==null)return Tt(l,e,a),Gd(l,t,a),!0}return!1}function Hc(e,t,l,a){if(a={lane:2,revertLane:xs(),action:a,hasEagerState:!1,eagerState:null,next:null},bo(e)){if(t)throw Error(u(479))}else t=ic(e,l,a,2),t!==null&&Tt(t,e,2)}function bo(e){var t=e.alternate;return e===re||t!==null&&t===re}function qd(e,t){Pl=ho=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Gd(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Fu(e,l)}}var vo={readContext:rt,use:mo,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},Yd={readContext:rt,use:mo,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Td,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,xo(4194308,4,Cd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){xo(4,2,e,t)},useMemo:function(e,t){var l=ht();t=t===void 0?null:t;var a=e();if(xl){Cn(!0);try{e()}finally{Cn(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ht();if(l!==void 0){var i=l(t);if(xl){Cn(!0);try{l(t)}finally{Cn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=vx.bind(null,re,e),[a.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Bc(e);var t=e.queue,l=Hd.bind(null,re,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Nc,useDeferredValue:function(e,t){var l=ht();return kc(l,e,t)},useTransition:function(){var e=Bc(!1);return e=_d.bind(null,re,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=re,i=ht();if(me){if(l===void 0)throw Error(u(407));l=l()}else{if(l=t(),Re===null)throw Error(u(349));(he&124)!==0||ud(a,t,l)}i.memoizedState=l;var c={value:l,getSnapshot:t};return i.queue=c,Td(dd.bind(null,a,c,e),[e]),a.flags|=2048,Il(9,yo(),fd.bind(null,a,c,l,t),null),l},useId:function(){var e=ht(),t=Re.identifierPrefix;if(me){var l=hn,a=dn;l=(a&~(1<<32-bt(a)-1)).toString(32)+l,t="«"+t+"R"+l,l=po++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=px++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Uc,useFormState:Sd,useActionState:Sd,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Hc.bind(null,re,!0,l),l.dispatch=t,[e,t]},useMemoCache:Dc,useCacheRefresh:function(){return ht().memoizedState=bx.bind(null,re)}},Qd={readContext:rt,use:mo,useCallback:Od,useContext:rt,useEffect:Rd,useImperativeHandle:Dd,useInsertionEffect:zd,useLayoutEffect:Ad,useMemo:Md,useReducer:go,useRef:Ed,useState:function(){return go(gn)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=Ye();return Bd(l,Se.memoizedState,e,t)},useTransition:function(){var e=go(gn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:sd,useId:Ld,useHostTransitionStatus:Uc,useFormState:jd,useActionState:jd,useOptimistic:function(e,t){var l=Ye();return md(l,Se,e,t)},useMemoCache:Dc,useCacheRefresh:Ud},Sx={readContext:rt,use:mo,useCallback:Od,useContext:rt,useEffect:Rd,useImperativeHandle:Dd,useInsertionEffect:zd,useLayoutEffect:Ad,useMemo:Md,useReducer:Mc,useRef:Ed,useState:function(){return Mc(gn)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=Ye();return Se===null?kc(l,e,t):Bd(l,Se.memoizedState,e,t)},useTransition:function(){var e=Mc(gn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:sd,useId:Ld,useHostTransitionStatus:Uc,useFormState:wd,useActionState:wd,useOptimistic:function(e,t){var l=Ye();return Se!==null?md(l,Se,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:Ud},ea=null,ii=0;function So(e){var t=ii;return ii+=1,ea===null&&(ea=[]),td(ea,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function jo(e,t){throw t.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vd(e){var t=e._init;return t(e._payload)}function Xd(e){function t(E,$){if(e){var R=E.deletions;R===null?(E.deletions=[$],E.flags|=16):R.push($)}}function l(E,$){if(!e)return null;for(;$!==null;)t(E,$),$=$.sibling;return null}function a(E){for(var $=new Map;E!==null;)E.key!==null?$.set(E.key,E):$.set(E.index,E),E=E.sibling;return $}function i(E,$){return E=fn(E,$),E.index=0,E.sibling=null,E}function c(E,$,R){return E.index=R,e?(R=E.alternate,R!==null?(R=R.index,R<$?(E.flags|=67108866,$):R):(E.flags|=67108866,$)):(E.flags|=1048576,$)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function p(E,$,R,B){return $===null||$.tag!==6?($=rc(R,E.mode,B),$.return=E,$):($=i($,R),$.return=E,$)}function b(E,$,R,B){var K=R.type;return K===q?M(E,$,R.props.children,B,R.key):$!==null&&($.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Vd(K)===$.type)?($=i($,R.props),oi($,R),$.return=E,$):($=lo(R.type,R.key,R.props,null,E.mode,B),oi($,R),$.return=E,$)}function z(E,$,R,B){return $===null||$.tag!==4||$.stateNode.containerInfo!==R.containerInfo||$.stateNode.implementation!==R.implementation?($=cc(R,E.mode,B),$.return=E,$):($=i($,R.children||[]),$.return=E,$)}function M(E,$,R,B,K){return $===null||$.tag!==7?($=ul(R,E.mode,B,K),$.return=E,$):($=i($,R),$.return=E,$)}function _(E,$,R){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=rc(""+$,E.mode,R),$.return=E,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return R=lo($.type,$.key,$.props,null,E.mode,R),oi(R,$),R.return=E,R;case k:return $=cc($,E.mode,R),$.return=E,$;case we:var B=$._init;return $=B($._payload),_(E,$,R)}if(Ee($)||qe($))return $=ul($,E.mode,R,null),$.return=E,$;if(typeof $.then=="function")return _(E,So($),R);if($.$$typeof===V)return _(E,ro(E,$),R);jo(E,$)}return null}function A(E,$,R,B){var K=$!==null?$.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return K!==null?null:p(E,$,""+R,B);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case D:return R.key===K?b(E,$,R,B):null;case k:return R.key===K?z(E,$,R,B):null;case we:return K=R._init,R=K(R._payload),A(E,$,R,B)}if(Ee(R)||qe(R))return K!==null?null:M(E,$,R,B,null);if(typeof R.then=="function")return A(E,$,So(R),B);if(R.$$typeof===V)return A(E,$,ro(E,R),B);jo(E,R)}return null}function C(E,$,R,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return E=E.get(R)||null,p($,E,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return E=E.get(B.key===null?R:B.key)||null,b($,E,B,K);case k:return E=E.get(B.key===null?R:B.key)||null,z($,E,B,K);case we:var ce=B._init;return B=ce(B._payload),C(E,$,R,B,K)}if(Ee(B)||qe(B))return E=E.get(R)||null,M($,E,B,K,null);if(typeof B.then=="function")return C(E,$,R,So(B),K);if(B.$$typeof===V)return C(E,$,R,ro($,B),K);jo($,B)}return null}function ae(E,$,R,B){for(var K=null,ce=null,J=$,le=$=0,We=null;J!==null&&le<R.length;le++){J.index>le?(We=J,J=null):We=J.sibling;var pe=A(E,J,R[le],B);if(pe===null){J===null&&(J=We);break}e&&J&&pe.alternate===null&&t(E,J),$=c(pe,$,le),ce===null?K=pe:ce.sibling=pe,ce=pe,J=We}if(le===R.length)return l(E,J),me&&dl(E,le),K;if(J===null){for(;le<R.length;le++)J=_(E,R[le],B),J!==null&&($=c(J,$,le),ce===null?K=J:ce.sibling=J,ce=J);return me&&dl(E,le),K}for(J=a(J);le<R.length;le++)We=C(J,E,le,R[le],B),We!==null&&(e&&We.alternate!==null&&J.delete(We.key===null?le:We.key),$=c(We,$,le),ce===null?K=We:ce.sibling=We,ce=We);return e&&J.forEach(function(In){return t(E,In)}),me&&dl(E,le),K}function ee(E,$,R,B){if(R==null)throw Error(u(151));for(var K=null,ce=null,J=$,le=$=0,We=null,pe=R.next();J!==null&&!pe.done;le++,pe=R.next()){J.index>le?(We=J,J=null):We=J.sibling;var In=A(E,J,pe.value,B);if(In===null){J===null&&(J=We);break}e&&J&&In.alternate===null&&t(E,J),$=c(In,$,le),ce===null?K=In:ce.sibling=In,ce=In,J=We}if(pe.done)return l(E,J),me&&dl(E,le),K;if(J===null){for(;!pe.done;le++,pe=R.next())pe=_(E,pe.value,B),pe!==null&&($=c(pe,$,le),ce===null?K=pe:ce.sibling=pe,ce=pe);return me&&dl(E,le),K}for(J=a(J);!pe.done;le++,pe=R.next())pe=C(J,E,le,pe.value,B),pe!==null&&(e&&pe.alternate!==null&&J.delete(pe.key===null?le:pe.key),$=c(pe,$,le),ce===null?K=pe:ce.sibling=pe,ce=pe);return e&&J.forEach(function(j0){return t(E,j0)}),me&&dl(E,le),K}function $e(E,$,R,B){if(typeof R=="object"&&R!==null&&R.type===q&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case D:e:{for(var K=R.key;$!==null;){if($.key===K){if(K=R.type,K===q){if($.tag===7){l(E,$.sibling),B=i($,R.props.children),B.return=E,E=B;break e}}else if($.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Vd(K)===$.type){l(E,$.sibling),B=i($,R.props),oi(B,R),B.return=E,E=B;break e}l(E,$);break}else t(E,$);$=$.sibling}R.type===q?(B=ul(R.props.children,E.mode,B,R.key),B.return=E,E=B):(B=lo(R.type,R.key,R.props,null,E.mode,B),oi(B,R),B.return=E,E=B)}return d(E);case k:e:{for(K=R.key;$!==null;){if($.key===K)if($.tag===4&&$.stateNode.containerInfo===R.containerInfo&&$.stateNode.implementation===R.implementation){l(E,$.sibling),B=i($,R.children||[]),B.return=E,E=B;break e}else{l(E,$);break}else t(E,$);$=$.sibling}B=cc(R,E.mode,B),B.return=E,E=B}return d(E);case we:return K=R._init,R=K(R._payload),$e(E,$,R,B)}if(Ee(R))return ae(E,$,R,B);if(qe(R)){if(K=qe(R),typeof K!="function")throw Error(u(150));return R=K.call(R),ee(E,$,R,B)}if(typeof R.then=="function")return $e(E,$,So(R),B);if(R.$$typeof===V)return $e(E,$,ro(E,R),B);jo(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,$!==null&&$.tag===6?(l(E,$.sibling),B=i($,R),B.return=E,E=B):(l(E,$),B=rc(R,E.mode,B),B.return=E,E=B),d(E)):l(E,$)}return function(E,$,R,B){try{ii=0;var K=$e(E,$,R,B);return ea=null,K}catch(J){if(J===Ja||J===so)throw J;var ce=St(29,J,null,E.mode);return ce.lanes=B,ce.return=E,ce}finally{}}}var ta=Xd(!0),Zd=Xd(!1),Ut=N(null),en=null;function Ln(e){var t=e.alternate;Q(Xe,Xe.current&1),Q(Ut,e),en===null&&(t===null||Jl.current!==null||t.memoizedState!==null)&&(en=e)}function Kd(e){if(e.tag===22){if(Q(Xe,Xe.current),Q(Ut,e),en===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(en=e)}}else Un()}function Un(){Q(Xe,Xe.current),Q(Ut,Ut.current)}function yn(e){G(Ut),en===e&&(en=null),G(Xe)}var Xe=N(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Cs(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:v({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Gc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Et(),i=_n(a);i.payload=t,l!=null&&(i.callback=l),t=Nn(e,i,a),t!==null&&(Tt(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Et(),i=_n(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=Nn(e,i,a),t!==null&&(Tt(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Et(),a=_n(l);a.tag=2,t!=null&&(a.callback=t),t=Nn(e,a,l),t!==null&&(Tt(t,e,l),Wa(t,e,l))}};function Fd(e,t,l,a,i,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,d):t.prototype&&t.prototype.isPureReactComponent?!Ga(l,a)||!Ga(i,c):!0}function Jd(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Gc.enqueueReplaceState(t,t.state,null)}function bl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=v({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}var wo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Pd(e){wo(e)}function Wd(e){console.error(e)}function Id(e){wo(e)}function Eo(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function eh(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Yc(e,t,l){return l=_n(l),l.tag=3,l.payload={element:null},l.callback=function(){Eo(e,t)},l}function th(e){return e=_n(e),e.tag=3,e}function nh(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var c=a.value;e.payload=function(){return i(c)},e.callback=function(){eh(t,l,a)}}var d=l.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){eh(t,l,a),typeof i!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function jx(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Za(t,l,i,!0),l=Ut.current,l!==null){switch(l.tag){case 13:return en===null?hs():l.alternate===null&&ke===0&&(ke=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===xc?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ms(e,a,i)),!1;case 22:return l.flags|=65536,a===xc?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ms(e,a,i)),!1}throw Error(u(435,l.tag))}return ms(e,a,i),hs(),!1}if(me)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==fc&&(e=Error(u(422),{cause:a}),Xa(_t(e,l)))):(a!==fc&&(t=Error(u(423),{cause:a}),Xa(_t(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=_t(a,l),i=Yc(e.stateNode,a,i),Sc(e,i),ke!==4&&(ke=2)),!1;var c=Error(u(520),{cause:a});if(c=_t(c,l),hi===null?hi=[c]:hi.push(c),ke!==4&&(ke=2),t===null)return!0;a=_t(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=Yc(l.stateNode,a,e),Sc(l,e),!1;case 1:if(t=l.type,c=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Vn===null||!Vn.has(c))))return l.flags|=65536,i&=-i,l.lanes|=i,i=th(i),nh(i,e,l,a),Sc(l,i),!1}l=l.return}while(l!==null);return!1}var lh=Error(u(461)),Je=!1;function nt(e,t,l,a){t.child=e===null?Zd(t,null,l,a):ta(t,e.child,l,a)}function ah(e,t,l,a,i){l=l.render;var c=t.ref;if("ref"in a){var d={};for(var p in a)p!=="ref"&&(d[p]=a[p])}else d=a;return gl(t),a=Tc(e,t,l,d,c,i),p=Rc(),e!==null&&!Je?(zc(e,t,i),xn(e,t,i)):(me&&p&&sc(t),t.flags|=1,nt(e,t,a,i),t.child)}function ih(e,t,l,a,i){if(e===null){var c=l.type;return typeof c=="function"&&!oc(c)&&c.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=c,oh(e,t,c,a,i)):(e=lo(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Pc(e,i)){var d=c.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(d,a)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=fn(c,a),e.ref=t.ref,e.return=t,t.child=e}function oh(e,t,l,a,i){if(e!==null){var c=e.memoizedProps;if(Ga(c,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=c,Pc(e,i))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,xn(e,t,i)}return Qc(e,t,l,a,i)}function rh(e,t,l){var a=t.pendingProps,i=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=c!==null?c.baseLanes|l:l,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;t.childLanes=c&~a}else t.childLanes=0,t.child=null;return ch(e,t,a,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&co(t,c!==null?c.cachePool:null),c!==null?od(t,c):$c(),Kd(t);else return t.lanes=t.childLanes=536870912,ch(e,t,c!==null?c.baseLanes|l:l,l)}else c!==null?(co(t,c.cachePool),od(t,c),Un(),t.memoizedState=null):(e!==null&&co(t,null),$c(),Un());return nt(e,t,i,l),t.child}function ch(e,t,l,a){var i=yc();return i=i===null?null:{parent:Ve._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&co(t,null),$c(),Kd(t),e!==null&&Za(e,t,a,!0),null}function To(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Qc(e,t,l,a,i){return gl(t),l=Tc(e,t,l,a,void 0,i),a=Rc(),e!==null&&!Je?(zc(e,t,i),xn(e,t,i)):(me&&a&&sc(t),t.flags|=1,nt(e,t,l,i),t.child)}function sh(e,t,l,a,i,c){return gl(t),t.updateQueue=null,l=cd(t,a,l,i),rd(e),a=Rc(),e!==null&&!Je?(zc(e,t,c),xn(e,t,c)):(me&&a&&sc(t),t.flags|=1,nt(e,t,l,c),t.child)}function uh(e,t,l,a,i){if(gl(t),t.stateNode===null){var c=Vl,d=l.contextType;typeof d=="object"&&d!==null&&(c=rt(d)),c=new l(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},bc(t),d=l.contextType,c.context=typeof d=="object"&&d!==null?rt(d):Vl,c.state=t.memoizedState,d=l.getDerivedStateFromProps,typeof d=="function"&&(qc(t,l,d,a),c.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Gc.enqueueReplaceState(c,c.state,null),ei(t,a,c,i),Ia(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var p=t.memoizedProps,b=bl(l,p);c.props=b;var z=c.context,M=l.contextType;d=Vl,typeof M=="object"&&M!==null&&(d=rt(M));var _=l.getDerivedStateFromProps;M=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||z!==d)&&Jd(t,c,a,d),Bn=!1;var A=t.memoizedState;c.state=A,ei(t,a,c,i),Ia(),z=t.memoizedState,p||A!==z||Bn?(typeof _=="function"&&(qc(t,l,_,a),z=t.memoizedState),(b=Bn||Fd(t,l,b,a,A,z,d))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),c.props=a,c.state=z,c.context=d,a=b):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,vc(e,t),d=t.memoizedProps,M=bl(l,d),c.props=M,_=t.pendingProps,A=c.context,z=l.contextType,b=Vl,typeof z=="object"&&z!==null&&(b=rt(z)),p=l.getDerivedStateFromProps,(z=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==_||A!==b)&&Jd(t,c,a,b),Bn=!1,A=t.memoizedState,c.state=A,ei(t,a,c,i),Ia();var C=t.memoizedState;d!==_||A!==C||Bn||e!==null&&e.dependencies!==null&&oo(e.dependencies)?(typeof p=="function"&&(qc(t,l,p,a),C=t.memoizedState),(M=Bn||Fd(t,l,M,a,A,C,b)||e!==null&&e.dependencies!==null&&oo(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,C,b),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,C,b)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=C),c.props=a,c.state=C,c.context=b,a=M):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,To(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=ta(t,e.child,null,i),t.child=ta(t,null,l,i)):nt(e,t,l,i),t.memoizedState=c.state,e=t.child):e=xn(e,t,i),e}function fh(e,t,l,a){return Va(),t.flags|=256,nt(e,t,l,a),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:Wf()}}function Zc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ht),e}function dh(e,t,l){var a=t.pendingProps,i=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(i?Ln(t):Un(),me){var p=Ne,b;if(b=p){e:{for(b=p,p=It;b.nodeType!==8;){if(!p){p=null;break e}if(b=Zt(b.nextSibling),b===null){p=null;break e}}p=b}p!==null?(t.memoizedState={dehydrated:p,treeContext:fl!==null?{id:dn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},b=St(18,null,null,0),b.stateNode=p,b.return=t,t.child=b,ut=t,Ne=null,b=!0):b=!1}b||pl(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Cs(p)?t.lanes=32:t.lanes=536870912,null;yn(t)}return p=a.children,a=a.fallback,i?(Un(),i=t.mode,p=Ro({mode:"hidden",children:p},i),a=ul(a,i,l,null),p.return=t,a.return=t,p.sibling=a,t.child=p,i=t.child,i.memoizedState=Xc(l),i.childLanes=Zc(e,d,l),t.memoizedState=Vc,a):(Ln(t),Kc(t,p))}if(b=e.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(c)t.flags&256?(Ln(t),t.flags&=-257,t=Fc(e,t,l)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),i=a.fallback,p=t.mode,a=Ro({mode:"visible",children:a.children},p),i=ul(i,p,l,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,ta(t,e.child,null,l),a=t.child,a.memoizedState=Xc(l),a.childLanes=Zc(e,d,l),t.memoizedState=Vc,t=i);else if(Ln(t),Cs(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;d=z,a=Error(u(419)),a.stack="",a.digest=d,Xa({value:a,source:null,stack:null}),t=Fc(e,t,l)}else if(Je||Za(e,t,l,!1),d=(l&e.childLanes)!==0,Je||d){if(d=Re,d!==null&&(a=l&-l,a=(a&42)!==0?1:Dr(a),a=(a&(d.suspendedLanes|l))!==0?0:a,a!==0&&a!==b.retryLane))throw b.retryLane=a,Ql(e,a),Tt(d,e,a),lh;p.data==="$?"||hs(),t=Fc(e,t,l)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ne=Zt(p.nextSibling),ut=t,me=!0,hl=null,It=!1,e!==null&&(kt[Lt++]=dn,kt[Lt++]=hn,kt[Lt++]=fl,dn=e.id,hn=e.overflow,fl=t),t=Kc(t,a.children),t.flags|=4096);return t}return i?(Un(),i=a.fallback,p=t.mode,b=e.child,z=b.sibling,a=fn(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,z!==null?i=fn(z,i):(i=ul(i,p,l,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,p=e.child.memoizedState,p===null?p=Xc(l):(b=p.cachePool,b!==null?(z=Ve._currentValue,b=b.parent!==z?{parent:z,pool:z}:b):b=Wf(),p={baseLanes:p.baseLanes|l,cachePool:b}),i.memoizedState=p,i.childLanes=Zc(e,d,l),t.memoizedState=Vc,a):(Ln(t),l=e.child,e=l.sibling,l=fn(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=l,t.memoizedState=null,l)}function Kc(e,t){return t=Ro({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ro(e,t){return e=St(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Fc(e,t,l){return ta(t,e.child,null,l),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hh(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),hc(e.return,t,l)}function Jc(e,t,l,a,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=i)}function ph(e,t,l){var a=t.pendingProps,i=a.revealOrder,c=a.tail;if(nt(e,t,a.children,l),a=Xe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hh(e,l,t);else if(e.tag===19)hh(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Q(Xe,a),i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&$o(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Jc(t,!1,i,l,c);break;case"backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$o(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Jc(t,!0,l,null,c);break;case"together":Jc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Za(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,l=fn(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=fn(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oo(e)))}function $x(e,t,l){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Mn(t,Ve,e.memoizedState.cache),Va();break;case 27:case 5:al(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ln(t),t.flags|=128,null):(l&t.child.childLanes)!==0?dh(e,t,l):(Ln(t),e=xn(e,t,l),e!==null?e.sibling:null);Ln(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Za(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return ph(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Xe,Xe.current),a)break;return null;case 22:case 23:return t.lanes=0,rh(e,t,l);case 24:Mn(t,Ve,e.memoizedState.cache)}return xn(e,t,l)}function mh(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Pc(e,l)&&(t.flags&128)===0)return Je=!1,$x(e,t,l);Je=(e.flags&131072)!==0}else Je=!1,me&&(t.flags&1048576)!==0&&Vf(t,io,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")oc(a)?(e=bl(a,e),t.tag=1,t=uh(null,t,a,e,l)):(t.tag=0,t=Qc(null,t,a,e,l));else{if(a!=null){if(i=a.$$typeof,i===te){t.tag=11,t=ah(null,t,a,e,l);break e}else if(i===F){t.tag=14,t=ih(null,t,a,e,l);break e}}throw t=Dt(a)||a,Error(u(306,t,""))}}return t;case 0:return Qc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=bl(a,t.pendingProps),uh(e,t,a,i,l);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var c=t.memoizedState;i=c.element,vc(e,t),ei(t,a,null,l);var d=t.memoizedState;if(a=d.cache,Mn(t,Ve,a),a!==c.cache&&pc(t,[Ve],l,!0),Ia(),a=d.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=fh(e,t,a,l);break e}else if(a!==i){i=_t(Error(u(424)),t),Xa(i),t=fh(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Zt(e.firstChild),ut=t,me=!0,hl=null,It=!0,l=Zd(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Va(),a===i){t=xn(e,t,l);break e}nt(e,t,a,l)}t=t.child}return t;case 26:return To(e,t),e===null?(l=bp(t.type,null,t.pendingProps,null))?t.memoizedState=l:me||(l=t.type,e=t.pendingProps,a=qo(ne.current).createElement(l),a[ot]=t,a[ft]=e,at(a,l,e),Fe(a),t.stateNode=a):t.memoizedState=bp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return al(t),e===null&&me&&(a=t.stateNode=gp(t.type,t.pendingProps,ne.current),ut=t,It=!0,i=Ne,Kn(t.type)?(Ds=i,Ne=Zt(a.firstChild)):Ne=i),nt(e,t,t.pendingProps.children,l),To(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((i=a=Ne)&&(a=Px(a,t.type,t.pendingProps,It),a!==null?(t.stateNode=a,ut=t,Ne=Zt(a.firstChild),It=!1,i=!0):i=!1),i||pl(t)),al(t),i=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,a=c.children,Rs(i,c)?a=null:d!==null&&Rs(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Tc(e,t,mx,null,null,l),ji._currentValue=i),To(e,t),nt(e,t,a,l),t.child;case 6:return e===null&&me&&((e=l=Ne)&&(l=Wx(l,t.pendingProps,It),l!==null?(t.stateNode=l,ut=t,Ne=null,e=!0):e=!1),e||pl(t)),null;case 13:return dh(e,t,l);case 4:return ge(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ta(t,null,a,l):nt(e,t,a,l),t.child;case 11:return ah(e,t,t.type,t.pendingProps,l);case 7:return nt(e,t,t.pendingProps,l),t.child;case 8:return nt(e,t,t.pendingProps.children,l),t.child;case 12:return nt(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Mn(t,t.type,a.value),nt(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,gl(t),i=rt(i),a=a(i),t.flags|=1,nt(e,t,a,l),t.child;case 14:return ih(e,t,t.type,t.pendingProps,l);case 15:return oh(e,t,t.type,t.pendingProps,l);case 19:return ph(e,t,l);case 31:return a=t.pendingProps,l=t.mode,a={mode:a.mode,children:a.children},e===null?(l=Ro(a,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=fn(e.child,a),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return rh(e,t,l);case 24:return gl(t),a=rt(Ve),e===null?(i=yc(),i===null&&(i=Re,c=mc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=l),i=c),t.memoizedState={parent:a,cache:i},bc(t),Mn(t,Ve,i)):((e.lanes&l)!==0&&(vc(e,t),ei(t,null,null,l),Ia()),i=e.memoizedState,c=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Mn(t,Ve,a)):(a=c.cache,Mn(t,Ve,a),a!==i.cache&&pc(t,[Ve],l,!0))),nt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function bn(e){e.flags|=4}function gh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wp(t)){if(t=Ut.current,t!==null&&((he&4194048)===he?en!==null:(he&62914560)!==he&&(he&536870912)===0||t!==en))throw Pa=xc,If;e.flags|=8192}}function zo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zu():536870912,e.lanes|=t,ia|=t)}function ri(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function wx(e,t,l){var a=t.pendingProps;switch(uc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),mn(Ve),it(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kf())),De(t),null;case 26:return l=t.memoizedState,e===null?(bn(t),l!==null?(De(t),gh(t,l)):(De(t),t.flags&=-16777217)):l?l!==e.memoizedState?(bn(t),De(t),gh(t,l)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&bn(t),De(t),t.flags&=-16777217),null;case 27:cn(t),l=ne.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}e=P.current,Qa(t)?Xf(t):(e=gp(i,a,l),t.stateNode=e,bn(t))}return De(t),null;case 5:if(cn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}if(e=P.current,Qa(t))Xf(t);else{switch(i=qo(ne.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}e[ot]=t,e[ft]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(at(e,l,a),l){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&bn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,Qa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=ut,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||sp(e.nodeValue,l)),e||pl(t)}else e=qo(e).createTextNode(a),e[ot]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Qa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[ot]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(yn(t),t):(yn(t),null)}if(yn(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=a!==null,e=e!==null&&e.memoizedState!==null,l){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==i&&(a.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),zo(t,t.updateQueue),De(t),null;case 4:return it(),e===null&&js(t.stateNode.containerInfo),De(t),null;case 10:return mn(t.type),De(t),null;case 19:if(G(Xe),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,c=i.rendering,c===null)if(a)ri(i,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=$o(e),c!==null){for(t.flags|=128,ri(i,!1),e=c.updateQueue,t.updateQueue=e,zo(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Qf(l,e),l=l.sibling;return Q(Xe,Xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Wt()>Do&&(t.flags|=128,a=!0,ri(i,!1),t.lanes=4194304)}else{if(!a)if(e=$o(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zo(t,e),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!me)return De(t),null}else 2*Wt()-i.renderingStartTime>Do&&l!==536870912&&(t.flags|=128,a=!0,ri(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Wt(),t.sibling=null,e=Xe.current,Q(Xe,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return yn(t),wc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),l=t.updateQueue,l!==null&&zo(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&G(yl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(Ve),De(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Ex(e,t){switch(uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Ve),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return cn(t),null;case 13:if(yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Xe),null;case 4:return it(),null;case 10:return mn(t.type),null;case 22:case 23:return yn(t),wc(),e!==null&&G(yl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Ve),null;case 25:return null;default:return null}}function yh(e,t){switch(uc(t),t.tag){case 3:mn(Ve),it();break;case 26:case 27:case 5:cn(t);break;case 4:it();break;case 13:yn(t);break;case 19:G(Xe);break;case 10:mn(t.type);break;case 22:case 23:yn(t),wc(),e!==null&&G(yl);break;case 24:mn(Ve)}}function ci(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var c=l.create,d=l.inst;a=c(),d.destroy=a}l=l.next}while(l!==i)}}catch(p){Te(t,t.return,p)}}function Hn(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var c=i.next;a=c;do{if((a.tag&e)===e){var d=a.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,i=t;var b=l,z=p;try{z()}catch(M){Te(i,b,M)}}}a=a.next}while(a!==c)}}catch(M){Te(t,t.return,M)}}function xh(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{id(t,l)}catch(a){Te(e,e.return,a)}}}function bh(e,t,l){l.props=bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Te(e,t,a)}}function si(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){Te(e,t,i)}}function tn(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Te(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Te(e,t,i)}else l.current=null}function vh(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Te(e,e.return,i)}}function Wc(e,t,l){try{var a=e.stateNode;Xx(a,e.type,l,t),a[ft]=t}catch(i){Te(e,e.return,i)}}function Sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ho));else if(a!==4&&(a===27&&Kn(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(es(e,t,l),e=e.sibling;e!==null;)es(e,t,l),e=e.sibling}function Ao(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Kn(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ao(e,t,l),e=e.sibling;e!==null;)Ao(e,t,l),e=e.sibling}function jh(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);at(t,a,l),t[ot]=e,t[ft]=l}catch(c){Te(e,e.return,c)}}var vn=!1,He=!1,ts=!1,$h=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Tx(e,t){if(e=e.containerInfo,Es=Zo,e=Bf(e),Ir(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var d=0,p=-1,b=-1,z=0,M=0,_=e,A=null;t:for(;;){for(var C;_!==l||i!==0&&_.nodeType!==3||(p=d+i),_!==c||a!==0&&_.nodeType!==3||(b=d+a),_.nodeType===3&&(d+=_.nodeValue.length),(C=_.firstChild)!==null;)A=_,_=C;for(;;){if(_===e)break t;if(A===l&&++z===i&&(p=d),A===c&&++M===a&&(b=d),(C=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=C}l=p===-1||b===-1?null:{start:p,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ts={focusedElem:e,selectionRange:l},Zo=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,l=t,i=c.memoizedProps,c=c.memoizedState,a=l.stateNode;try{var ae=bl(l.type,i,l.elementType===l.type);e=a.getSnapshotBeforeUpdate(ae,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Te(l,l.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)As(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":As(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function wh(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:qn(e,l),a&4&&ci(5,l);break;case 1:if(qn(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(d){Te(l,l.return,d)}else{var i=bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Te(l,l.return,d)}}a&64&&xh(l),a&512&&si(l,l.return);break;case 3:if(qn(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{id(e,t)}catch(d){Te(l,l.return,d)}}break;case 27:t===null&&a&4&&jh(l);case 26:case 5:qn(e,l),t===null&&a&4&&vh(l),a&512&&si(l,l.return);break;case 12:qn(e,l);break;case 13:qn(e,l),a&4&&Rh(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=_x.bind(null,l),Ix(e,l))));break;case 22:if(a=l.memoizedState!==null||vn,!a){t=t!==null&&t.memoizedState!==null||He,i=vn;var c=He;vn=a,(He=t)&&!c?Gn(e,l,(l.subtreeFlags&8772)!==0):qn(e,l),vn=i,He=c}break;case 30:break;default:qn(e,l)}}function Eh(e){var t=e.alternate;t!==null&&(e.alternate=null,Eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Br(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,pt=!1;function Sn(e,t,l){for(l=l.child;l!==null;)Th(e,t,l),l=l.sibling}function Th(e,t,l){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ca,l)}catch{}switch(l.tag){case 26:He||tn(l,t),Sn(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:He||tn(l,t);var a=Ae,i=pt;Kn(l.type)&&(Ae=l.stateNode,pt=!1),Sn(e,t,l),xi(l.stateNode),Ae=a,pt=i;break;case 5:He||tn(l,t);case 6:if(a=Ae,i=pt,Ae=null,Sn(e,t,l),Ae=a,pt=i,Ae!==null)if(pt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(l.stateNode)}catch(c){Te(l,t,c)}else try{Ae.removeChild(l.stateNode)}catch(c){Te(l,t,c)}break;case 18:Ae!==null&&(pt?(e=Ae,pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ti(e)):pp(Ae,l.stateNode));break;case 4:a=Ae,i=pt,Ae=l.stateNode.containerInfo,pt=!0,Sn(e,t,l),Ae=a,pt=i;break;case 0:case 11:case 14:case 15:He||Hn(2,l,t),He||Hn(4,l,t),Sn(e,t,l);break;case 1:He||(tn(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&bh(l,t,a)),Sn(e,t,l);break;case 21:Sn(e,t,l);break;case 22:He=(a=He)||l.memoizedState!==null,Sn(e,t,l),He=a;break;default:Sn(e,t,l)}}function Rh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(l){Te(t,t.return,l)}}function Rx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $h),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $h),t;default:throw Error(u(435,e.tag))}}function ns(e,t){var l=Rx(e);t.forEach(function(a){var i=Nx.bind(null,e,a);l.has(a)||(l.add(a),a.then(i,i))})}function jt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],c=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Kn(p.type)){Ae=p.stateNode,pt=!1;break e}break;case 5:Ae=p.stateNode,pt=!1;break e;case 3:case 4:Ae=p.stateNode.containerInfo,pt=!0;break e}p=p.return}if(Ae===null)throw Error(u(160));Th(c,d,i),Ae=null,pt=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)zh(t,e),t=t.sibling}var Xt=null;function zh(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),$t(e),a&4&&(Hn(3,e,e.return),ci(3,e),Hn(5,e,e.return));break;case 1:jt(t,e),$t(e),a&512&&(He||l===null||tn(l,l.return)),a&64&&vn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Xt;if(jt(t,e),$t(e),a&512&&(He||l===null||tn(l,l.return)),a&4){var c=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Ma]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(a),i.head.insertBefore(c,i.querySelector("head > title"))),at(c,a,l),c[ot]=e,Fe(c),a=c;break e;case"link":var d=jp("link","href",i).get(a+(l.href||""));if(d){for(var p=0;p<d.length;p++)if(c=d[p],c.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&c.getAttribute("rel")===(l.rel==null?null:l.rel)&&c.getAttribute("title")===(l.title==null?null:l.title)&&c.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){d.splice(p,1);break t}}c=i.createElement(a),at(c,a,l),i.head.appendChild(c);break;case"meta":if(d=jp("meta","content",i).get(a+(l.content||""))){for(p=0;p<d.length;p++)if(c=d[p],c.getAttribute("content")===(l.content==null?null:""+l.content)&&c.getAttribute("name")===(l.name==null?null:l.name)&&c.getAttribute("property")===(l.property==null?null:l.property)&&c.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&c.getAttribute("charset")===(l.charSet==null?null:l.charSet)){d.splice(p,1);break t}}c=i.createElement(a),at(c,a,l),i.head.appendChild(c);break;default:throw Error(u(468,a))}c[ot]=e,Fe(c),a=c}e.stateNode=a}else $p(i,e.type,e.stateNode);else e.stateNode=Sp(i,a,e.memoizedProps);else c!==a?(c===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):c.count--,a===null?$p(i,e.type,e.stateNode):Sp(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,l.memoizedProps)}break;case 27:jt(t,e),$t(e),a&512&&(He||l===null||tn(l,l.return)),l!==null&&a&4&&Wc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(jt(t,e),$t(e),a&512&&(He||l===null||tn(l,l.return)),e.flags&32){i=e.stateNode;try{kl(i,"")}catch(C){Te(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Wc(e,i,l!==null?l.memoizedProps:i)),a&1024&&(ts=!0);break;case 6:if(jt(t,e),$t(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(C){Te(e,e.return,C)}}break;case 3:if(Qo=null,i=Xt,Xt=Go(t.containerInfo),jt(t,e),Xt=i,$t(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(C){Te(e,e.return,C)}ts&&(ts=!1,Ah(e));break;case 4:a=Xt,Xt=Go(e.stateNode.containerInfo),jt(t,e),$t(e),Xt=a;break;case 12:jt(t,e),$t(e);break;case 13:jt(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(cs=Wt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ns(e,a)));break;case 22:i=e.memoizedState!==null;var b=l!==null&&l.memoizedState!==null,z=vn,M=He;if(vn=z||i,He=M||b,jt(t,e),He=M,vn=z,$t(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||b||vn||He||vl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){b=l=t;try{if(c=b.stateNode,i)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=b.stateNode;var _=b.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(C){Te(b,b.return,C)}}}else if(t.tag===6){if(l===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(C){Te(b,b.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,ns(e,l))));break;case 19:jt(t,e),$t(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ns(e,a)));break;case 30:break;case 21:break;default:jt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Sh(a)){l=a;break}a=a.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var i=l.stateNode,c=Ic(e);Ao(e,c,i);break;case 5:var d=l.stateNode;l.flags&32&&(kl(d,""),l.flags&=-33);var p=Ic(e);Ao(e,p,d);break;case 3:case 4:var b=l.stateNode.containerInfo,z=Ic(e);es(e,z,b);break;default:throw Error(u(161))}}catch(M){Te(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ah(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ah(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wh(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hn(4,t,t.return),vl(t);break;case 1:tn(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&bh(t,t.return,l),vl(t);break;case 27:xi(t.stateNode);case 26:case 5:tn(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function Gn(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:Gn(i,c,l),ci(4,c);break;case 1:if(Gn(i,c,l),a=c,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Te(a,a.return,z)}if(a=c,i=a.updateQueue,i!==null){var p=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)ad(b[i],p)}catch(z){Te(a,a.return,z)}}l&&d&64&&xh(c),si(c,c.return);break;case 27:jh(c);case 26:case 5:Gn(i,c,l),l&&a===null&&d&4&&vh(c),si(c,c.return);break;case 12:Gn(i,c,l);break;case 13:Gn(i,c,l),l&&d&4&&Rh(i,c);break;case 22:c.memoizedState===null&&Gn(i,c,l),si(c,c.return);break;case 30:break;default:Gn(i,c,l)}t=t.sibling}}function ls(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ka(l))}function as(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ka(e))}function nn(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ch(e,t,l,a),t=t.sibling}function Ch(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,l,a),i&2048&&ci(9,t);break;case 1:nn(e,t,l,a);break;case 3:nn(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ka(e)));break;case 12:if(i&2048){nn(e,t,l,a),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,p=c.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Te(t,t.return,b)}}else nn(e,t,l,a);break;case 13:nn(e,t,l,a);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?nn(e,t,l,a):ui(e,t):c._visibility&2?nn(e,t,l,a):(c._visibility|=2,na(e,t,l,a,(t.subtreeFlags&10256)!==0)),i&2048&&ls(d,t);break;case 24:nn(e,t,l,a),i&2048&&as(t.alternate,t);break;default:nn(e,t,l,a)}}function na(e,t,l,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,d=t,p=l,b=a,z=d.flags;switch(d.tag){case 0:case 11:case 15:na(c,d,p,b,i),ci(8,d);break;case 23:break;case 22:var M=d.stateNode;d.memoizedState!==null?M._visibility&2?na(c,d,p,b,i):ui(c,d):(M._visibility|=2,na(c,d,p,b,i)),i&&z&2048&&ls(d.alternate,d);break;case 24:na(c,d,p,b,i),i&&z&2048&&as(d.alternate,d);break;default:na(c,d,p,b,i)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:ui(l,a),i&2048&&ls(a.alternate,a);break;case 24:ui(l,a),i&2048&&as(a.alternate,a);break;default:ui(l,a)}t=t.sibling}}var fi=8192;function la(e){if(e.subtreeFlags&fi)for(e=e.child;e!==null;)Dh(e),e=e.sibling}function Dh(e){switch(e.tag){case 26:la(e),e.flags&fi&&e.memoizedState!==null&&d0(Xt,e.memoizedState,e.memoizedProps);break;case 5:la(e);break;case 3:case 4:var t=Xt;Xt=Go(e.stateNode.containerInfo),la(e),Xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=fi,fi=16777216,la(e),fi=t):la(e));break;default:la(e)}}function Oh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Pe=a,Bh(a,e)}Oh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mh(e),e=e.sibling}function Mh(e){switch(e.tag){case 0:case 11:case 15:di(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:di(e);break;case 12:di(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Co(e)):di(e);break;default:di(e)}}function Co(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Pe=a,Bh(a,e)}Oh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hn(8,t,t.return),Co(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Co(t));break;default:Co(t)}e=e.sibling}}function Bh(e,t){for(;Pe!==null;){var l=Pe;switch(l.tag){case 0:case 11:case 15:Hn(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ka(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Pe=a;else e:for(l=e;Pe!==null;){a=Pe;var i=a.sibling,c=a.return;if(Eh(a),a===l){Pe=null;break e}if(i!==null){i.return=c,Pe=i;break e}Pe=c}}}var zx={getCacheForType:function(e){var t=rt(Ve),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},Ax=typeof WeakMap=="function"?WeakMap:Map,be=0,Re=null,fe=null,he=0,ve=0,wt=null,Yn=!1,aa=!1,is=!1,jn=0,ke=0,Qn=0,Sl=0,os=0,Ht=0,ia=0,hi=null,mt=null,rs=!1,cs=0,Do=1/0,Oo=null,Vn=null,lt=0,Xn=null,oa=null,ra=0,ss=0,us=null,_h=null,pi=0,fs=null;function Et(){if((be&2)!==0&&he!==0)return he&-he;if(O.T!==null){var e=Kl;return e!==0?e:xs()}return Ju()}function Nh(){Ht===0&&(Ht=(he&536870912)===0||me?Xu():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function Tt(e,t,l){(e===Re&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(ca(e,0),Zn(e,he,Ht,!1)),Oa(e,l),((be&2)===0||e!==Re)&&(e===Re&&((be&2)===0&&(Sl|=l),ke===4&&Zn(e,he,Ht,!1)),ln(e))}function kh(e,t,l){if((be&6)!==0)throw Error(u(327));var a=!l&&(t&124)===0&&(t&e.expiredLanes)===0||Da(e,t),i=a?Ox(e,t):ps(e,t,!0),c=a;do{if(i===0){aa&&!a&&Zn(e,t,0,!1);break}else{if(l=e.current.alternate,c&&!Cx(l)){i=ps(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;i=hi;var b=p.current.memoizedState.isDehydrated;if(b&&(ca(p,d).flags|=256),d=ps(p,d,!1),d!==2){if(is&&!b){p.errorRecoveryDisabledLanes|=c,Sl|=c,i=4;break e}c=mt,mt=i,c!==null&&(mt===null?mt=c:mt.push.apply(mt,c))}i=d}if(c=!1,i!==2)continue}}if(i===1){ca(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,c=i,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,Ht,!Yn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=cs+300-Wt(),10<i)){if(Zn(a,t,Ht,!Yn),Gi(a,0,!0)!==0)break e;a.timeoutHandle=dp(Lh.bind(null,a,l,mt,Oo,rs,t,Ht,Sl,ia,Yn,c,2,-0,0),i);break e}Lh(a,l,mt,Oo,rs,t,Ht,Sl,ia,Yn,c,0,-0,0)}}break}while(!0);ln(e)}function Lh(e,t,l,a,i,c,d,p,b,z,M,_,A,C){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Si={stylesheets:null,count:0,unsuspend:f0},Dh(t),_=h0(),_!==null)){e.cancelPendingCommit=_(Vh.bind(null,e,t,c,l,a,i,d,p,b,M,1,A,C)),Zn(e,c,d,!z);return}Vh(e,t,c,l,a,i,d,p,b)}function Cx(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],c=i.getSnapshot;i=i.value;try{if(!vt(c(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,l,a){t&=~os,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var c=31-bt(i),d=1<<c;a[c]=-1,i&=~d}l!==0&&Ku(e,l,t)}function Mo(){return(be&6)===0?(mi(0),!1):!0}function ds(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,pn=ml=null,Ac(e),ea=null,ii=0,e=fe;for(;e!==null;)yh(e.alternate,e),e=e.return;fe=null}}function ca(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Kx(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ds(),Re=e,fe=l=fn(e.current,null),he=t,ve=0,wt=null,Yn=!1,aa=Da(e,t),is=!1,ia=Ht=os=Sl=Qn=ke=0,mt=hi=null,rs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-bt(a),c=1<<i;t|=e[i],a&=~c}return jn=t,eo(),l}function Uh(e,t){re=null,O.H=vo,t===Ja||t===so?(t=nd(),ve=3):t===If?(t=nd(),ve=4):ve=t===lh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,fe===null&&(ke=1,Eo(e,_t(t,e.current)))}function Hh(){var e=O.H;return O.H=vo,e===null?vo:e}function qh(){var e=O.A;return O.A=zx,e}function hs(){ke=4,Yn||(he&4194048)!==he&&Ut.current!==null||(aa=!0),(Qn&134217727)===0&&(Sl&134217727)===0||Re===null||Zn(Re,he,Ht,!1)}function ps(e,t,l){var a=be;be|=2;var i=Hh(),c=qh();(Re!==e||he!==t)&&(Oo=null,ca(e,t)),t=!1;var d=ke;e:do try{if(ve!==0&&fe!==null){var p=fe,b=wt;switch(ve){case 8:ds(),d=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var z=ve;if(ve=0,wt=null,sa(e,p,b,z),l&&aa){d=0;break e}break;default:z=ve,ve=0,wt=null,sa(e,p,b,z)}}Dx(),d=ke;break}catch(M){Uh(e,M)}while(!0);return t&&e.shellSuspendCounter++,pn=ml=null,be=a,O.H=i,O.A=c,fe===null&&(Re=null,he=0,eo()),d}function Dx(){for(;fe!==null;)Gh(fe)}function Ox(e,t){var l=be;be|=2;var a=Hh(),i=qh();Re!==e||he!==t?(Oo=null,Do=Wt()+500,ca(e,t)):aa=Da(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var c=wt;t:switch(ve){case 1:ve=0,wt=null,sa(e,t,c,1);break;case 2:case 9:if(ed(c)){ve=0,wt=null,Yh(t);break}t=function(){ve!==2&&ve!==9||Re!==e||(ve=7),ln(e)},c.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:ed(c)?(ve=0,wt=null,Yh(t)):(ve=0,wt=null,sa(e,t,c,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var p=fe;if(!d||wp(d)){ve=0,wt=null;var b=p.sibling;if(b!==null)fe=b;else{var z=p.return;z!==null?(fe=z,Bo(z)):fe=null}break t}}ve=0,wt=null,sa(e,t,c,5);break;case 6:ve=0,wt=null,sa(e,t,c,6);break;case 8:ds(),ke=6;break e;default:throw Error(u(462))}}Mx();break}catch(M){Uh(e,M)}while(!0);return pn=ml=null,O.H=a,O.A=i,be=l,fe!==null?0:(Re=null,he=0,eo(),ke)}function Mx(){for(;fe!==null&&!ty();)Gh(fe)}function Gh(e){var t=mh(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?Bo(e):fe=t}function Yh(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=sh(l,t,t.pendingProps,t.type,void 0,he);break;case 11:t=sh(l,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Ac(t);default:yh(l,t),t=fe=Qf(t,jn),t=mh(l,t,jn)}e.memoizedProps=e.pendingProps,t===null?Bo(e):fe=t}function sa(e,t,l,a){pn=ml=null,Ac(t),ea=null,ii=0;var i=t.return;try{if(jx(e,i,t,l,he)){ke=1,Eo(e,_t(l,e.current)),fe=null;return}}catch(c){if(i!==null)throw fe=i,c;ke=1,Eo(e,_t(l,e.current)),fe=null;return}t.flags&32768?(me||a===1?e=!0:aa||(he&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),Qh(t,e)):Bo(t)}function Bo(e){var t=e;do{if((t.flags&32768)!==0){Qh(t,Yn);return}e=t.return;var l=wx(t.alternate,t,jn);if(l!==null){fe=l;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ke===0&&(ke=5)}function Qh(e,t){do{var l=Ex(e.alternate,e);if(l!==null){l.flags&=32767,fe=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=l}while(e!==null);ke=6,fe=null}function Vh(e,t,l,a,i,c,d,p,b){e.cancelPendingCommit=null;do _o();while(lt!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(c=t.lanes|t.childLanes,c|=ac,fy(e,l,c,d,p,b),e===Re&&(fe=Re=null,he=0),oa=t,Xn=e,ra=l,ss=c,us=i,_h=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kx(Ui,function(){return Jh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,i=Y.p,Y.p=2,d=be,be|=4;try{Tx(e,t,l)}finally{be=d,Y.p=i,O.T=a}}lt=1,Xh(),Zh(),Kh()}}function Xh(){if(lt===1){lt=0;var e=Xn,t=oa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=Y.p;Y.p=2;var i=be;be|=4;try{zh(t,e);var c=Ts,d=Bf(e.containerInfo),p=c.focusedElem,b=c.selectionRange;if(d!==p&&p&&p.ownerDocument&&Mf(p.ownerDocument.documentElement,p)){if(b!==null&&Ir(p)){var z=b.start,M=b.end;if(M===void 0&&(M=z),"selectionStart"in p)p.selectionStart=z,p.selectionEnd=Math.min(M,p.value.length);else{var _=p.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var C=A.getSelection(),ae=p.textContent.length,ee=Math.min(b.start,ae),$e=b.end===void 0?ee:Math.min(b.end,ae);!C.extend&&ee>$e&&(d=$e,$e=ee,ee=d);var E=Of(p,ee),$=Of(p,$e);if(E&&$&&(C.rangeCount!==1||C.anchorNode!==E.node||C.anchorOffset!==E.offset||C.focusNode!==$.node||C.focusOffset!==$.offset)){var R=_.createRange();R.setStart(E.node,E.offset),C.removeAllRanges(),ee>$e?(C.addRange(R),C.extend($.node,$.offset)):(R.setEnd($.node,$.offset),C.addRange(R))}}}}for(_=[],C=p;C=C.parentNode;)C.nodeType===1&&_.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<_.length;p++){var B=_[p];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Zo=!!Es,Ts=Es=null}finally{be=i,Y.p=a,O.T=l}}e.current=t,lt=2}}function Zh(){if(lt===2){lt=0;var e=Xn,t=oa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=Y.p;Y.p=2;var i=be;be|=4;try{wh(e,t.alternate,t)}finally{be=i,Y.p=a,O.T=l}}lt=3}}function Kh(){if(lt===4||lt===3){lt=0,ny();var e=Xn,t=oa,l=ra,a=_h;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,oa=Xn=null,Fh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Vn=null),Or(l),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,i=Y.p,Y.p=2,O.T=null;try{for(var c=e.onRecoverableError,d=0;d<a.length;d++){var p=a[d];c(p.value,{componentStack:p.stack})}}finally{O.T=t,Y.p=i}}(ra&3)!==0&&_o(),ln(e),i=e.pendingLanes,(l&4194090)!==0&&(i&42)!==0?e===fs?pi++:(pi=0,fs=e):pi=0,mi(0)}}function Fh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ka(t)))}function _o(e){return Xh(),Zh(),Kh(),Jh()}function Jh(){if(lt!==5)return!1;var e=Xn,t=ss;ss=0;var l=Or(ra),a=O.T,i=Y.p;try{Y.p=32>l?32:l,O.T=null,l=us,us=null;var c=Xn,d=ra;if(lt=0,oa=Xn=null,ra=0,(be&6)!==0)throw Error(u(331));var p=be;if(be|=4,Mh(c.current),Ch(c,c.current,d,l),be=p,mi(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ca,c)}catch{}return!0}finally{Y.p=i,O.T=a,Fh(e,t)}}function Ph(e,t,l){t=_t(l,t),t=Yc(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(Oa(e,2),ln(e))}function Te(e,t,l){if(e.tag===3)Ph(e,e,l);else for(;t!==null;){if(t.tag===3){Ph(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=_t(l,e),l=th(2),a=Nn(t,l,2),a!==null&&(nh(l,a,t,e),Oa(a,2),ln(a));break}}t=t.return}}function ms(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Ax;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(is=!0,i.add(l),e=Bx.bind(null,e,t,l),t.then(e,e))}function Bx(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Re===e&&(he&l)===l&&(ke===4||ke===3&&(he&62914560)===he&&300>Wt()-cs?(be&2)===0&&ca(e,0):os|=l,ia===he&&(ia=0)),ln(e)}function Wh(e,t){t===0&&(t=Zu()),e=Ql(e,t),e!==null&&(Oa(e,t),ln(e))}function _x(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Wh(e,l)}function Nx(e,t){var l=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Wh(e,l)}function kx(e,t){return zr(e,t)}var No=null,ua=null,gs=!1,ko=!1,ys=!1,jl=0;function ln(e){e!==ua&&e.next===null&&(ua===null?No=ua=e:ua=ua.next=e),ko=!0,gs||(gs=!0,Ux())}function mi(e,t){if(!ys&&ko){ys=!0;do for(var l=!1,a=No;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var c=0;else{var d=a.suspendedLanes,p=a.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=i&~(d&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(l=!0,np(a,c))}else c=he,c=Gi(a,a===Re?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||Da(a,c)||(l=!0,np(a,c));a=a.next}while(l);ys=!1}}function Lx(){Ih()}function Ih(){ko=gs=!1;var e=0;jl!==0&&(Zx()&&(e=jl),jl=0);for(var t=Wt(),l=null,a=No;a!==null;){var i=a.next,c=ep(a,t);c===0?(a.next=null,l===null?No=i:l.next=i,i===null&&(ua=l)):(l=a,(e!==0||(c&3)!==0)&&(ko=!0)),a=i}mi(e)}function ep(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-bt(c),p=1<<d,b=i[d];b===-1?((p&l)===0||(p&a)!==0)&&(i[d]=uy(p,t)):b<=t&&(e.expiredLanes|=p),c&=~p}if(t=Re,l=he,l=Gi(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ar(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Da(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ar(a),Or(l)){case 2:case 8:l=Qu;break;case 32:l=Ui;break;case 268435456:l=Vu;break;default:l=Ui}return a=tp.bind(null,e),l=zr(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ar(a),e.callbackPriority=2,e.callbackNode=null,2}function tp(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(_o()&&e.callbackNode!==l)return null;var a=he;return a=Gi(e,e===Re?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(kh(e,a,t),ep(e,Wt()),e.callbackNode!=null&&e.callbackNode===l?tp.bind(null,e):null)}function np(e,t){if(_o())return null;kh(e,t,!0)}function Ux(){Fx(function(){(be&6)!==0?zr(Yu,Lx):Ih()})}function xs(){return jl===0&&(jl=Xu()),jl}function lp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zi(""+e)}function ap(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Hx(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var c=lp((i[ft]||null).action),d=a.submitter;d&&(t=(t=d[ft]||null)?lp(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var p=new Pi("action","action",null,a,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(jl!==0){var b=d?ap(i,d):new FormData(i);Lc(l,{pending:!0,data:b,method:i.method,action:c},null,b)}}else typeof c=="function"&&(p.preventDefault(),b=d?ap(i,d):new FormData(i),Lc(l,{pending:!0,data:b,method:i.method,action:c},c,b))},currentTarget:i}]})}}for(var bs=0;bs<lc.length;bs++){var vs=lc[bs],qx=vs.toLowerCase(),Gx=vs[0].toUpperCase()+vs.slice(1);Vt(qx,"on"+Gx)}Vt(kf,"onAnimationEnd"),Vt(Lf,"onAnimationIteration"),Vt(Uf,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(ix,"onTransitionRun"),Vt(ox,"onTransitionStart"),Vt(rx,"onTransitionCancel"),Vt(Hf,"onTransitionEnd"),Bl("onMouseEnter",["mouseout","mouseover"]),Bl("onMouseLeave",["mouseout","mouseover"]),Bl("onPointerEnter",["pointerout","pointerover"]),Bl("onPointerLeave",["pointerout","pointerover"]),ol("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ol("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ol("onBeforeInput",["compositionend","keypress","textInput","paste"]),ol("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ol("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function ip(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var d=a.length-1;0<=d;d--){var p=a[d],b=p.instance,z=p.currentTarget;if(p=p.listener,b!==c&&i.isPropagationStopped())break e;c=p,i.currentTarget=z;try{c(i)}catch(M){wo(M)}i.currentTarget=null,c=b}else for(d=0;d<a.length;d++){if(p=a[d],b=p.instance,z=p.currentTarget,p=p.listener,b!==c&&i.isPropagationStopped())break e;c=p,i.currentTarget=z;try{c(i)}catch(M){wo(M)}i.currentTarget=null,c=b}}}}function de(e,t){var l=t[Mr];l===void 0&&(l=t[Mr]=new Set);var a=e+"__bubble";l.has(a)||(op(t,e,2,!1),l.add(a))}function Ss(e,t,l){var a=0;t&&(a|=4),op(l,e,a,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function js(e){if(!e[Lo]){e[Lo]=!0,Wu.forEach(function(l){l!=="selectionchange"&&(Yx.has(l)||Ss(l,!1,e),Ss(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,Ss("selectionchange",!1,t))}}function op(e,t,l,a){switch(Cp(t)){case 2:var i=g0;break;case 8:i=y0;break;default:i=Ns}l=i.bind(null,t,l,e),i=void 0,!Qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function $s(e,t,l,a,i){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var p=a.stateNode.containerInfo;if(p===i)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;p!==null;){if(d=Dl(p),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=c=d;continue e}p=p.parentNode}}a=a.return}hf(function(){var z=c,M=Gr(l),_=[];e:{var A=qf.get(e);if(A!==void 0){var C=Pi,ae=e;switch(e){case"keypress":if(Fi(l)===0)break e;case"keydown":case"keyup":C=ky;break;case"focusin":ae="focus",C=Kr;break;case"focusout":ae="blur",C=Kr;break;case"beforeblur":case"afterblur":C=Kr;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Hy;break;case kf:case Lf:case Uf:C=zy;break;case Hf:C=Gy;break;case"scroll":case"scrollend":C=$y;break;case"wheel":C=Qy;break;case"copy":case"cut":case"paste":C=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=xf;break;case"toggle":case"beforetoggle":C=Xy}var ee=(t&4)!==0,$e=!ee&&(e==="scroll"||e==="scrollend"),E=ee?A!==null?A+"Capture":null:A;ee=[];for(var $=z,R;$!==null;){var B=$;if(R=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||R===null||E===null||(B=_a($,E),B!=null&&ee.push(yi($,B,R))),$e)break;$=$.return}0<ee.length&&(A=new C(A,ae,null,l,M),_.push({event:A,listeners:ee}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&l!==qr&&(ae=l.relatedTarget||l.fromElement)&&(Dl(ae)||ae[Cl]))break e;if((C||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,C?(ae=l.relatedTarget||l.toElement,C=z,ae=ae?Dl(ae):null,ae!==null&&($e=m(ae),ee=ae.tag,ae!==$e||ee!==5&&ee!==27&&ee!==6)&&(ae=null)):(C=null,ae=z),C!==ae)){if(ee=gf,B="onMouseLeave",E="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ee=xf,B="onPointerLeave",E="onPointerEnter",$="pointer"),$e=C==null?A:Ba(C),R=ae==null?A:Ba(ae),A=new ee(B,$+"leave",C,l,M),A.target=$e,A.relatedTarget=R,B=null,Dl(M)===z&&(ee=new ee(E,$+"enter",ae,l,M),ee.target=R,ee.relatedTarget=$e,B=ee),$e=B,C&&ae)t:{for(ee=C,E=ae,$=0,R=ee;R;R=fa(R))$++;for(R=0,B=E;B;B=fa(B))R++;for(;0<$-R;)ee=fa(ee),$--;for(;0<R-$;)E=fa(E),R--;for(;$--;){if(ee===E||E!==null&&ee===E.alternate)break t;ee=fa(ee),E=fa(E)}ee=null}else ee=null;C!==null&&rp(_,A,C,ee,!1),ae!==null&&$e!==null&&rp(_,$e,ae,ee,!0)}}e:{if(A=z?Ba(z):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var K=Tf;else if(wf(A))if(Rf)K=nx;else{K=ex;var ce=Iy}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?z&&Hr(z.elementType)&&(K=Tf):K=tx;if(K&&(K=K(e,z))){Ef(_,K,l,M);break e}ce&&ce(e,A,z),e==="focusout"&&z&&A.type==="number"&&z.memoizedProps.value!=null&&Ur(A,"number",A.value)}switch(ce=z?Ba(z):window,e){case"focusin":(wf(ce)||ce.contentEditable==="true")&&(ql=ce,ec=z,Ya=null);break;case"focusout":Ya=ec=ql=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,_f(_,l,M);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":_f(_,l,M)}var J;if(Jr)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Hl?jf(e,l)&&(le="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(le="onCompositionStart");le&&(bf&&l.locale!=="ko"&&(Hl||le!=="onCompositionStart"?le==="onCompositionEnd"&&Hl&&(J=pf()):(On=M,Vr="value"in On?On.value:On.textContent,Hl=!0)),ce=Uo(z,le),0<ce.length&&(le=new yf(le,e,null,l,M),_.push({event:le,listeners:ce}),J?le.data=J:(J=$f(l),J!==null&&(le.data=J)))),(J=Ky?Fy(e,l):Jy(e,l))&&(le=Uo(z,"onBeforeInput"),0<le.length&&(ce=new yf("onBeforeInput","beforeinput",null,l,M),_.push({event:ce,listeners:le}),ce.data=J)),Hx(_,e,z,l,M)}ip(_,t)})}function yi(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Uo(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=_a(e,l),i!=null&&a.unshift(yi(e,i,c)),i=_a(e,t),i!=null&&a.push(yi(e,i,c))),e.tag===3)return a;e=e.return}return[]}function fa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rp(e,t,l,a,i){for(var c=t._reactName,d=[];l!==null&&l!==a;){var p=l,b=p.alternate,z=p.stateNode;if(p=p.tag,b!==null&&b===a)break;p!==5&&p!==26&&p!==27||z===null||(b=z,i?(z=_a(l,c),z!=null&&d.unshift(yi(l,z,b))):i||(z=_a(l,c),z!=null&&d.push(yi(l,z,b)))),l=l.return}d.length!==0&&e.push({event:t,listeners:d})}var Qx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Vx,"")}function sp(e,t){return t=cp(t),cp(e)===t}function Ho(){}function je(e,t,l,a,i,c){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||kl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&kl(e,""+a);break;case"className":Qi(e,"class",a);break;case"tabIndex":Qi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(e,l,a);break;case"style":ff(e,a,c);break;case"data":if(t!=="object"){Qi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Zi(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(l==="formAction"?(t!=="input"&&je(e,t,"name",i.name,i,null),je(e,t,"formEncType",i.formEncType,i,null),je(e,t,"formMethod",i.formMethod,i,null),je(e,t,"formTarget",i.formTarget,i,null)):(je(e,t,"encType",i.encType,i,null),je(e,t,"method",i.method,i,null),je(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Zi(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ho);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Zi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Yi(e,"popover",a);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Sy.get(l)||l,Yi(e,l,a))}}function ws(e,t,l,a,i,c){switch(l){case"style":ff(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof a=="string"?kl(e,a):(typeof a=="number"||typeof a=="bigint")&&kl(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ho);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Iu.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),c=e[ft]||null,c=c!=null?c[l]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof a=="function")){typeof c!="function"&&c!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Yi(e,l,a)}}}function at(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,c;for(c in l)if(l.hasOwnProperty(c)){var d=l[c];if(d!=null)switch(c){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,c,d,l,null)}}i&&je(e,t,"srcSet",l.srcSet,l,null),a&&je(e,t,"src",l.src,l,null);return;case"input":de("invalid",e);var p=c=d=i=null,b=null,z=null;for(a in l)if(l.hasOwnProperty(a)){var M=l[a];if(M!=null)switch(a){case"name":i=M;break;case"type":d=M;break;case"checked":b=M;break;case"defaultChecked":z=M;break;case"value":c=M;break;case"defaultValue":p=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:je(e,t,a,M,l,null)}}rf(e,c,p,b,z,d,i,!1),Vi(e);return;case"select":de("invalid",e),a=d=c=null;for(i in l)if(l.hasOwnProperty(i)&&(p=l[i],p!=null))switch(i){case"value":c=p;break;case"defaultValue":d=p;break;case"multiple":a=p;default:je(e,t,i,p,l,null)}t=c,l=d,e.multiple=!!a,t!=null?Nl(e,!!a,t,!1):l!=null&&Nl(e,!!a,l,!0);return;case"textarea":de("invalid",e),c=i=a=null;for(d in l)if(l.hasOwnProperty(d)&&(p=l[d],p!=null))switch(d){case"value":a=p;break;case"defaultValue":i=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:je(e,t,d,p,l,null)}sf(e,a,i,c),Vi(e);return;case"option":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:je(e,t,b,a,l,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)de(gi[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in l)if(l.hasOwnProperty(z)&&(a=l[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,z,a,l,null)}return;default:if(Hr(t)){for(M in l)l.hasOwnProperty(M)&&(a=l[M],a!==void 0&&ws(e,t,M,a,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!=null&&je(e,t,p,a,l,null))}function Xx(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,d=null,p=null,b=null,z=null,M=null;for(C in l){var _=l[C];if(l.hasOwnProperty(C)&&_!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=_;default:a.hasOwnProperty(C)||je(e,t,C,null,a,_)}}for(var A in a){var C=a[A];if(_=l[A],a.hasOwnProperty(A)&&(C!=null||_!=null))switch(A){case"type":c=C;break;case"name":i=C;break;case"checked":z=C;break;case"defaultChecked":M=C;break;case"value":d=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==_&&je(e,t,A,C,a,_)}}Lr(e,d,p,b,z,M,c,i);return;case"select":C=d=p=A=null;for(c in l)if(b=l[c],l.hasOwnProperty(c)&&b!=null)switch(c){case"value":break;case"multiple":C=b;default:a.hasOwnProperty(c)||je(e,t,c,null,a,b)}for(i in a)if(c=a[i],b=l[i],a.hasOwnProperty(i)&&(c!=null||b!=null))switch(i){case"value":A=c;break;case"defaultValue":p=c;break;case"multiple":d=c;default:c!==b&&je(e,t,i,c,a,b)}t=p,l=d,a=C,A!=null?Nl(e,!!l,A,!1):!!a!=!!l&&(t!=null?Nl(e,!!l,t,!0):Nl(e,!!l,l?[]:"",!1));return;case"textarea":C=A=null;for(p in l)if(i=l[p],l.hasOwnProperty(p)&&i!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:je(e,t,p,null,a,i)}for(d in a)if(i=a[d],c=l[d],a.hasOwnProperty(d)&&(i!=null||c!=null))switch(d){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==c&&je(e,t,d,i,a,c)}cf(e,A,C);return;case"option":for(var ae in l)if(A=l[ae],l.hasOwnProperty(ae)&&A!=null&&!a.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:je(e,t,ae,null,a,A)}for(b in a)if(A=a[b],C=l[b],a.hasOwnProperty(b)&&A!==C&&(A!=null||C!=null))switch(b){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:je(e,t,b,A,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in l)A=l[ee],l.hasOwnProperty(ee)&&A!=null&&!a.hasOwnProperty(ee)&&je(e,t,ee,null,a,A);for(z in a)if(A=a[z],C=l[z],a.hasOwnProperty(z)&&A!==C&&(A!=null||C!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:je(e,t,z,A,a,C)}return;default:if(Hr(t)){for(var $e in l)A=l[$e],l.hasOwnProperty($e)&&A!==void 0&&!a.hasOwnProperty($e)&&ws(e,t,$e,void 0,a,A);for(M in a)A=a[M],C=l[M],!a.hasOwnProperty(M)||A===C||A===void 0&&C===void 0||ws(e,t,M,A,a,C);return}}for(var E in l)A=l[E],l.hasOwnProperty(E)&&A!=null&&!a.hasOwnProperty(E)&&je(e,t,E,null,a,A);for(_ in a)A=a[_],C=l[_],!a.hasOwnProperty(_)||A===C||A==null&&C==null||je(e,t,_,A,a,C)}var Es=null,Ts=null;function qo(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=null;function Zx(){var e=window.event;return e&&e.type==="popstate"?e===zs?!1:(zs=e,!0):(zs=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(e){return hp.resolve(null).then(e).catch(Jx)}:dp;function Jx(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function pp(e,t){var l=t,a=0,i=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"){if(0<a&&8>a){l=a;var d=e.ownerDocument;if(l&1&&xi(d.documentElement),l&2&&xi(d.body),l&4)for(l=d.head,xi(l),d=l.firstChild;d;){var p=d.nextSibling,b=d.nodeName;d[Ma]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=p}}if(i===0){e.removeChild(c),Ti(t);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=c}while(l);Ti(t)}function As(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":As(l),Br(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Px(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function Wx(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Zt(e.nextSibling),e===null))return null;return e}function Cs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ix(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ds=null;function mp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function gp(e,t,l){switch(t=qo(l),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function xi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Br(e)}var qt=new Map,yp=new Set;function Go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=Y.d;Y.d={f:e0,r:t0,D:n0,C:l0,L:a0,m:i0,X:r0,S:o0,M:c0};function e0(){var e=$n.f(),t=Mo();return e||t}function t0(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?kd(t):$n.r(e)}var da=typeof document>"u"?null:document;function xp(e,t,l){var a=da;if(a&&typeof t=="string"&&t){var i=Bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),yp.has(i)||(yp.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),at(t,"link",e),Fe(t),a.head.appendChild(t)))}}function n0(e){$n.D(e),xp("dns-prefetch",e,null)}function l0(e,t){$n.C(e,t),xp("preconnect",e,t)}function a0(e,t,l){$n.L(e,t,l);var a=da;if(a&&e&&t){var i='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Bt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Bt(l.imageSizes)+'"]')):i+='[href="'+Bt(e)+'"]';var c=i;switch(t){case"style":c=ha(e);break;case"script":c=pa(e)}qt.has(c)||(e=v({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),qt.set(c,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(bi(c))||t==="script"&&a.querySelector(vi(c))||(t=a.createElement("link"),at(t,"link",e),Fe(t),a.head.appendChild(t)))}}function i0(e,t){$n.m(e,t);var l=da;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Bt(a)+'"][href="'+Bt(e)+'"]',c=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pa(e)}if(!qt.has(c)&&(e=v({rel:"modulepreload",href:e},t),qt.set(c,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vi(c)))return}a=l.createElement("link"),at(a,"link",e),Fe(a),l.head.appendChild(a)}}}function o0(e,t,l){$n.S(e,t,l);var a=da;if(a&&e){var i=Ml(a).hoistableStyles,c=ha(e);t=t||"default";var d=i.get(c);if(!d){var p={loading:0,preload:null};if(d=a.querySelector(bi(c)))p.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},l),(l=qt.get(c))&&Os(e,l);var b=d=a.createElement("link");Fe(b),at(b,"link",e),b._p=new Promise(function(z,M){b.onload=z,b.onerror=M}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Yo(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:p},i.set(c,d)}}}function r0(e,t){$n.X(e,t);var l=da;if(l&&e){var a=Ml(l).hoistableScripts,i=pa(e),c=a.get(i);c||(c=l.querySelector(vi(i)),c||(e=v({src:e,async:!0},t),(t=qt.get(i))&&Ms(e,t),c=l.createElement("script"),Fe(c),at(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(i,c))}}function c0(e,t){$n.M(e,t);var l=da;if(l&&e){var a=Ml(l).hoistableScripts,i=pa(e),c=a.get(i);c||(c=l.querySelector(vi(i)),c||(e=v({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Ms(e,t),c=l.createElement("script"),Fe(c),at(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(i,c))}}function bp(e,t,l,a){var i=(i=ne.current)?Go(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ha(l.href),l=Ml(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ha(l.href);var c=Ml(i).hoistableStyles,d=c.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=i.querySelector(bi(e)))&&!c._p&&(d.instance=c,d.state.loading=5),qt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},qt.set(e,l),c||s0(i,e,l,d.state))),t&&a===null)throw Error(u(528,""));return d}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pa(l),l=Ml(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ha(e){return'href="'+Bt(e)+'"'}function bi(e){return'link[rel="stylesheet"]['+e+"]"}function vp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function s0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),at(t,"link",l),Fe(t),e.head.appendChild(t))}function pa(e){return'[src="'+Bt(e)+'"]'}function vi(e){return"script[async]"+e}function Sp(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Bt(l.href)+'"]');if(a)return t.instance=a,Fe(a),a;var i=v({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),at(a,"style",i),Yo(a,l.precedence,e),t.instance=a;case"stylesheet":i=ha(l.href);var c=e.querySelector(bi(i));if(c)return t.state.loading|=4,t.instance=c,Fe(c),c;a=vp(l),(i=qt.get(i))&&Os(a,i),c=(e.ownerDocument||e).createElement("link"),Fe(c);var d=c;return d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),at(c,"link",a),t.state.loading|=4,Yo(c,l.precedence,e),t.instance=c;case"script":return c=pa(l.src),(i=e.querySelector(vi(c)))?(t.instance=i,Fe(i),i):(a=l,(i=qt.get(c))&&(a=v({},l),Ms(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),at(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Yo(a,l.precedence,e));return t.instance}function Yo(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,c=i,d=0;d<a.length;d++){var p=a[d];if(p.dataset.precedence===t)c=p;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qo=null;function jp(e,t,l){if(Qo===null){var a=new Map,i=Qo=new Map;i.set(l,a)}else i=Qo,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var c=l[i];if(!(c[Ma]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var p=a.get(d);p?p.push(c):a.set(d,[c])}}return a}function $p(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function u0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Si=null;function f0(){}function d0(e,t,l){if(Si===null)throw Error(u(475));var a=Si;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ha(l.href),c=e.querySelector(bi(i));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Vo.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=c,Fe(c);return}c=e.ownerDocument||e,l=vp(l),(i=qt.get(i))&&Os(l,i),c=c.createElement("link"),Fe(c);var d=c;d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),at(c,"link",l),t.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Vo.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function h0(){if(Si===null)throw Error(u(475));var e=Si;return e.stylesheets&&e.count===0&&Bs(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Bs(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Vo(){if(this.count--,this.count===0){if(this.stylesheets)Bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xo=null;function Bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xo=new Map,t.forEach(p0,e),Xo=null,Vo.call(e))}function p0(e,t){if(!(t.state.loading&4)){var l=Xo.get(e);if(l)var a=l.get(null);else{l=new Map,Xo.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var d=i[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(l.set(d.dataset.precedence,d),a=d)}a&&l.set(null,a)}i=t.instance,d=i.getAttribute("data-precedence"),c=l.get(d)||a,c===a&&l.set(null,i),l.set(d,i),this.count++,a=Vo.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ji={$$typeof:V,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function m0(e,t,l,a,i,c,d,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.hiddenUpdates=Cr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ep(e,t,l,a,i,c,d,p,b,z,M,_){return e=new m0(e,t,l,d,p,b,z,_),t=1,c===!0&&(t|=24),c=St(3,null,null,t),e.current=c,c.stateNode=e,t=mc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:l,cache:t},bc(c),e}function Tp(e){return e?(e=Vl,e):Vl}function Rp(e,t,l,a,i,c){i=Tp(i),a.context===null?a.context=i:a.pendingContext=i,a=_n(t),a.payload={element:l},c=c===void 0?null:c,c!==null&&(a.callback=c),l=Nn(e,a,t),l!==null&&(Tt(l,e,t),Wa(l,e,t))}function zp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function _s(e,t){zp(e,t),(e=e.alternate)&&zp(e,t)}function Ap(e){if(e.tag===13){var t=Ql(e,67108864);t!==null&&Tt(t,e,67108864),_s(e,67108864)}}var Zo=!0;function g0(e,t,l,a){var i=O.T;O.T=null;var c=Y.p;try{Y.p=2,Ns(e,t,l,a)}finally{Y.p=c,O.T=i}}function y0(e,t,l,a){var i=O.T;O.T=null;var c=Y.p;try{Y.p=8,Ns(e,t,l,a)}finally{Y.p=c,O.T=i}}function Ns(e,t,l,a){if(Zo){var i=ks(a);if(i===null)$s(e,t,a,Ko,l),Dp(e,a);else if(b0(i,e,t,l,a))a.stopPropagation();else if(Dp(e,a),t&4&&-1<x0.indexOf(e)){for(;i!==null;){var c=Ol(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=il(c.pendingLanes);if(d!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var b=1<<31-bt(d);p.entanglements[1]|=b,d&=~b}ln(c),(be&6)===0&&(Do=Wt()+500,mi(0))}}break;case 13:p=Ql(c,2),p!==null&&Tt(p,c,2),Mo(),_s(c,2)}if(c=ks(a),c===null&&$s(e,t,a,Ko,l),c===i)break;i=c}i!==null&&a.stopPropagation()}else $s(e,t,a,null,l)}}function ks(e){return e=Gr(e),Ls(e)}var Ko=null;function Ls(e){if(Ko=null,e=Dl(e),e!==null){var t=m(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=x(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ko=e,null}function Cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ly()){case Yu:return 2;case Qu:return 8;case Ui:case ay:return 32;case Vu:return 268435456;default:return 32}default:return 32}}var Us=!1,Fn=null,Jn=null,Pn=null,$i=new Map,wi=new Map,Wn=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":$i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Ei(e,t,l,a,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:c,targetContainers:[i]},t!==null&&(t=Ol(t),t!==null&&Ap(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b0(e,t,l,a,i){switch(t){case"focusin":return Fn=Ei(Fn,e,t,l,a,i),!0;case"dragenter":return Jn=Ei(Jn,e,t,l,a,i),!0;case"mouseover":return Pn=Ei(Pn,e,t,l,a,i),!0;case"pointerover":var c=i.pointerId;return $i.set(c,Ei($i.get(c)||null,e,t,l,a,i)),!0;case"gotpointercapture":return c=i.pointerId,wi.set(c,Ei(wi.get(c)||null,e,t,l,a,i)),!0}return!1}function Op(e){var t=Dl(e.target);if(t!==null){var l=m(t);if(l!==null){if(t=l.tag,t===13){if(t=x(l),t!==null){e.blockedOn=t,dy(e.priority,function(){if(l.tag===13){var a=Et();a=Dr(a);var i=Ql(l,a);i!==null&&Tt(i,l,a),_s(l,a)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ks(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);qr=a,l.target.dispatchEvent(a),qr=null}else return t=Ol(l),t!==null&&Ap(t),e.blockedOn=l,!1;t.shift()}return!0}function Mp(e,t,l){Fo(e)&&l.delete(t)}function v0(){Us=!1,Fn!==null&&Fo(Fn)&&(Fn=null),Jn!==null&&Fo(Jn)&&(Jn=null),Pn!==null&&Fo(Pn)&&(Pn=null),$i.forEach(Mp),wi.forEach(Mp)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,v0)))}var Po=null;function Bp(e){Po!==e&&(Po=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Po===e&&(Po=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Ls(a||l)===null)continue;break}var c=Ol(l);c!==null&&(e.splice(t,3),t-=3,Lc(c,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ti(e){function t(b){return Jo(b,e)}Fn!==null&&Jo(Fn,e),Jn!==null&&Jo(Jn,e),Pn!==null&&Jo(Pn,e),$i.forEach(t),wi.forEach(t);for(var l=0;l<Wn.length;l++){var a=Wn[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Wn.length&&(l=Wn[0],l.blockedOn===null);)Op(l),l.blockedOn===null&&Wn.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],c=l[a+1],d=i[ft]||null;if(typeof c=="function")d||Bp(l);else if(d){var p=null;if(c&&c.hasAttribute("formAction")){if(i=c,d=c[ft]||null)p=d.formAction;else if(Ls(i)!==null)continue}else p=d.action;typeof p=="function"?l[a+1]=p:(l.splice(a,3),a-=3),Bp(l)}}}function Hs(e){this._internalRoot=e}Wo.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var l=t.current,a=Et();Rp(l,a,e,t,null,null)},Wo.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rp(e.current,2,null,e,null,null),Mo(),t[Cl]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ju();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Wn.length&&t!==0&&t<Wn[l].priority;l++);Wn.splice(l,0,e),l===0&&Op(e)}};var _p=o.version;if(_p!=="19.1.0")throw Error(u(527,_p,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var S0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ca=Io.inject(S0),xt=Io}catch{}}return zi.createRoot=function(e,t){if(!f(e))throw Error(u(299));var l=!1,a="",i=Pd,c=Wd,d=Id,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=Ep(e,1,!1,null,null,l,a,i,c,d,p,null),e[Cl]=t.current,js(e),new Hs(t)},zi.hydrateRoot=function(e,t,l){if(!f(e))throw Error(u(299));var a=!1,i="",c=Pd,d=Wd,p=Id,b=null,z=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(c=l.onUncaughtError),l.onCaughtError!==void 0&&(d=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(b=l.unstable_transitionCallbacks),l.formState!==void 0&&(z=l.formState)),t=Ep(e,1,!0,t,l??null,a,i,c,d,p,b,z),t.context=Tp(null),l=t.current,a=Et(),a=Dr(a),i=_n(a),i.callback=null,Nn(l,i,a),l=a,t.current.lanes=l,Oa(t,l),ln(t),e[Cl]=t.current,js(e),new Wo(t)},zi.version="19.1.0",zi}var Vp;function O0(){if(Vp)return Ys.exports;Vp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Ys.exports=D0(),Ys.exports}var M0=O0(),tt=function(){return tt=Object.assign||function(o){for(var s,u=1,f=arguments.length;u<f;u++){s=arguments[u];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(o[m]=s[m])}return o},tt.apply(this,arguments)};function Mi(n,o,s){if(s||arguments.length===2)for(var u=0,f=o.length,m;u<f;u++)(m||!(u in o))&&(m||(m=Array.prototype.slice.call(o,0,u)),m[u]=o[u]);return n.concat(m||Array.prototype.slice.call(o))}var ze="-ms-",Oi="-moz-",ye="-webkit-",Vm="comm",gr="rule",Ru="decl",B0="@import",Xm="@keyframes",_0="@layer",Zm=Math.abs,zu=String.fromCharCode,pu=Object.assign;function N0(n,o){return Ie(n,0)^45?(((o<<2^Ie(n,0))<<2^Ie(n,1))<<2^Ie(n,2))<<2^Ie(n,3):0}function Km(n){return n.trim()}function wn(n,o){return(n=o.exec(n))?n[0]:n}function oe(n,o,s){return n.replace(o,s)}function lr(n,o,s){return n.indexOf(o,s)}function Ie(n,o){return n.charCodeAt(o)|0}function ya(n,o,s){return n.slice(o,s)}function an(n){return n.length}function Fm(n){return n.length}function Di(n,o){return o.push(n),n}function k0(n,o){return n.map(o).join("")}function Xp(n,o){return n.filter(function(s){return!wn(s,o)})}var yr=1,xa=1,Jm=0,Yt=0,Qe=0,$a="";function xr(n,o,s,u,f,m,x,j){return{value:n,root:o,parent:s,type:u,props:f,children:m,line:yr,column:xa,length:x,return:"",siblings:j}}function el(n,o){return pu(xr("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function ma(n){for(;n.root;)n=el(n.root,{children:[n]});Di(n,n.siblings)}function L0(){return Qe}function U0(){return Qe=Yt>0?Ie($a,--Yt):0,xa--,Qe===10&&(xa=1,yr--),Qe}function Ft(){return Qe=Yt<Jm?Ie($a,Yt++):0,xa++,Qe===10&&(xa=1,yr++),Qe}function Tl(){return Ie($a,Yt)}function ar(){return Yt}function br(n,o){return ya($a,n,o)}function mu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H0(n){return yr=xa=1,Jm=an($a=n),Yt=0,[]}function q0(n){return $a="",n}function Zs(n){return Km(br(Yt-1,gu(n===91?n+2:n===40?n+1:n)))}function G0(n){for(;(Qe=Tl())&&Qe<33;)Ft();return mu(n)>2||mu(Qe)>3?"":" "}function Y0(n,o){for(;--o&&Ft()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return br(n,ar()+(o<6&&Tl()==32&&Ft()==32))}function gu(n){for(;Ft();)switch(Qe){case n:return Yt;case 34:case 39:n!==34&&n!==39&&gu(Qe);break;case 40:n===41&&gu(n);break;case 92:Ft();break}return Yt}function Q0(n,o){for(;Ft()&&n+Qe!==57;)if(n+Qe===84&&Tl()===47)break;return"/*"+br(o,Yt-1)+"*"+zu(n===47?n:Ft())}function V0(n){for(;!mu(Tl());)Ft();return br(n,Yt)}function X0(n){return q0(ir("",null,null,null,[""],n=H0(n),0,[0],n))}function ir(n,o,s,u,f,m,x,j,y){for(var g=0,v=0,w=x,D=0,k=0,q=0,U=1,H=1,L=1,Z=0,V="",te=f,X=m,W=u,F=V;H;)switch(q=Z,Z=Ft()){case 40:if(q!=108&&Ie(F,w-1)==58){lr(F+=oe(Zs(Z),"&","&\f"),"&\f",Zm(g?j[g-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:F+=Zs(Z);break;case 9:case 10:case 13:case 32:F+=G0(q);break;case 92:F+=Y0(ar()-1,7);continue;case 47:switch(Tl()){case 42:case 47:Di(Z0(Q0(Ft(),ar()),o,s,y),y);break;default:F+="/"}break;case 123*U:j[g++]=an(F)*L;case 125*U:case 59:case 0:switch(Z){case 0:case 125:H=0;case 59+v:L==-1&&(F=oe(F,/\f/g,"")),k>0&&an(F)-w&&Di(k>32?Kp(F+";",u,s,w-1,y):Kp(oe(F," ","")+";",u,s,w-2,y),y);break;case 59:F+=";";default:if(Di(W=Zp(F,o,s,g,v,f,j,V,te=[],X=[],w,m),m),Z===123)if(v===0)ir(F,o,W,W,te,m,w,j,X);else switch(D===99&&Ie(F,3)===110?100:D){case 100:case 108:case 109:case 115:ir(n,W,W,u&&Di(Zp(n,W,W,0,0,f,j,V,f,te=[],w,X),X),f,X,w,j,u?te:X);break;default:ir(F,W,W,W,[""],X,0,j,X)}}g=v=k=0,U=L=1,V=F="",w=x;break;case 58:w=1+an(F),k=q;default:if(U<1){if(Z==123)--U;else if(Z==125&&U++==0&&U0()==125)continue}switch(F+=zu(Z),Z*U){case 38:L=v>0?1:(F+="\f",-1);break;case 44:j[g++]=(an(F)-1)*L,L=1;break;case 64:Tl()===45&&(F+=Zs(Ft())),D=Tl(),v=w=an(V=F+=V0(ar())),Z++;break;case 45:q===45&&an(F)==2&&(U=0)}}return m}function Zp(n,o,s,u,f,m,x,j,y,g,v,w){for(var D=f-1,k=f===0?m:[""],q=Fm(k),U=0,H=0,L=0;U<u;++U)for(var Z=0,V=ya(n,D+1,D=Zm(H=x[U])),te=n;Z<q;++Z)(te=Km(H>0?k[Z]+" "+V:oe(V,/&\f/g,k[Z])))&&(y[L++]=te);return xr(n,o,s,f===0?gr:j,y,g,v,w)}function Z0(n,o,s,u){return xr(n,o,s,Vm,zu(L0()),ya(n,2,-2),0,u)}function Kp(n,o,s,u,f){return xr(n,o,s,Ru,ya(n,0,u),ya(n,u+1,-1),u,f)}function Pm(n,o,s){switch(N0(n,o)){case 5103:return ye+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+n+n;case 4789:return Oi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+n+Oi+n+ze+n+n;case 5936:switch(Ie(n,o+11)){case 114:return ye+n+ze+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ye+n+ze+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ye+n+ze+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ye+n+ze+n+n;case 6165:return ye+n+ze+"flex-"+n+n;case 5187:return ye+n+oe(n,/(\w+).+(:[^]+)/,ye+"box-$1$2"+ze+"flex-$1$2")+n;case 5443:return ye+n+ze+"flex-item-"+oe(n,/flex-|-self/g,"")+(wn(n,/flex-|baseline/)?"":ze+"grid-row-"+oe(n,/flex-|-self/g,""))+n;case 4675:return ye+n+ze+"flex-line-pack"+oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ye+n+ze+oe(n,"shrink","negative")+n;case 5292:return ye+n+ze+oe(n,"basis","preferred-size")+n;case 6060:return ye+"box-"+oe(n,"-grow","")+ye+n+ze+oe(n,"grow","positive")+n;case 4554:return ye+oe(n,/([^-])(transform)/g,"$1"+ye+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+n+n;case 4200:if(!wn(n,/flex-|baseline/))return ze+"grid-column-align"+ya(n,o)+n;break;case 2592:case 3360:return ze+oe(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(u,f){return o=f,wn(u.props,/grid-\w+-end/)})?~lr(n+(s=s[o].value),"span",0)?n:ze+oe(n,"-start","")+n+ze+"grid-row-span:"+(~lr(s,"span",0)?wn(s,/\d+/):+wn(s,/\d+/)-+wn(n,/\d+/))+";":ze+oe(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(u){return wn(u.props,/grid-\w+-start/)})?n:ze+oe(oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,ye+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(n)-1-o>6)switch(Ie(n,o+1)){case 109:if(Ie(n,o+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Oi+(Ie(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~lr(n,"stretch",0)?Pm(oe(n,"stretch","fill-available"),o,s)+n:n}break;case 5152:case 5920:return oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,m,x,j,y,g){return ze+f+":"+m+g+(x?ze+f+"-span:"+(j?y:+y-+m)+g:"")+n});case 4949:if(Ie(n,o+6)===121)return oe(n,":",":"+ye)+n;break;case 6444:switch(Ie(n,Ie(n,14)===45?18:11)){case 120:return oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Ie(n,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+ze+"$2box$3")+n;case 100:return oe(n,":",":"+ze)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(n,"scroll-","scroll-snap-")+n}return n}function ur(n,o){for(var s="",u=0;u<n.length;u++)s+=o(n[u],u,n,o)||"";return s}function K0(n,o,s,u){switch(n.type){case _0:if(n.children.length)break;case B0:case Ru:return n.return=n.return||n.value;case Vm:return"";case Xm:return n.return=n.value+"{"+ur(n.children,u)+"}";case gr:if(!an(n.value=n.props.join(",")))return""}return an(s=ur(n.children,u))?n.return=n.value+"{"+s+"}":""}function F0(n){var o=Fm(n);return function(s,u,f,m){for(var x="",j=0;j<o;j++)x+=n[j](s,u,f,m)||"";return x}}function J0(n){return function(o){o.root||(o=o.return)&&n(o)}}function P0(n,o,s,u){if(n.length>-1&&!n.return)switch(n.type){case Ru:n.return=Pm(n.value,n.length,s);return;case Xm:return ur([el(n,{value:oe(n.value,"@","@"+ye)})],u);case gr:if(n.length)return k0(s=n.props,function(f){switch(wn(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(el(n,{props:[oe(f,/:(read-\w+)/,":"+Oi+"$1")]})),ma(el(n,{props:[f]})),pu(n,{props:Xp(s,u)});break;case"::placeholder":ma(el(n,{props:[oe(f,/:(plac\w+)/,":"+ye+"input-$1")]})),ma(el(n,{props:[oe(f,/:(plac\w+)/,":"+Oi+"$1")]})),ma(el(n,{props:[oe(f,/:(plac\w+)/,ze+"input-$1")]})),ma(el(n,{props:[f]})),pu(n,{props:Xp(s,u)});break}return""})}}var W0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},ba=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",Wm="active",Im="data-styled-version",vr="6.1.17",Au=`/*!sc*/
`,fr=typeof window<"u"&&"HTMLElement"in window,I0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),eb={},Sr=Object.freeze([]),va=Object.freeze({});function eg(n,o,s){return s===void 0&&(s=va),n.theme!==s.theme&&n.theme||o||s.theme}var tg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nb=/(^-|-$)/g;function Fp(n){return n.replace(tb,"-").replace(nb,"")}var lb=/(a)(d)/gi,er=52,Jp=function(n){return String.fromCharCode(n+(n>25?39:97))};function yu(n){var o,s="";for(o=Math.abs(n);o>er;o=o/er|0)s=Jp(o%er)+s;return(Jp(o%er)+s).replace(lb,"$1-$2")}var Ks,ng=5381,ga=function(n,o){for(var s=o.length;s;)n=33*n^o.charCodeAt(--s);return n},lg=function(n){return ga(ng,n)};function ag(n){return yu(lg(n)>>>0)}function ab(n){return n.displayName||n.name||"Component"}function Fs(n){return typeof n=="string"&&!0}var ig=typeof Symbol=="function"&&Symbol.for,og=ig?Symbol.for("react.memo"):60115,ib=ig?Symbol.for("react.forward_ref"):60112,ob={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cb=((Ks={})[ib]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ks[og]=rg,Ks);function Pp(n){return("type"in(o=n)&&o.type.$$typeof)===og?rg:"$$typeof"in n?cb[n.$$typeof]:ob;var o}var sb=Object.defineProperty,ub=Object.getOwnPropertyNames,Wp=Object.getOwnPropertySymbols,fb=Object.getOwnPropertyDescriptor,db=Object.getPrototypeOf,Ip=Object.prototype;function cg(n,o,s){if(typeof o!="string"){if(Ip){var u=db(o);u&&u!==Ip&&cg(n,u,s)}var f=ub(o);Wp&&(f=f.concat(Wp(o)));for(var m=Pp(n),x=Pp(o),j=0;j<f.length;++j){var y=f[j];if(!(y in rb||s&&s[y]||x&&y in x||m&&y in m)){var g=fb(o,y);try{sb(n,y,g)}catch{}}}}return n}function Rl(n){return typeof n=="function"}function Cu(n){return typeof n=="object"&&"styledComponentId"in n}function El(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function xu(n,o){if(n.length===0)return"";for(var s=n[0],u=1;u<n.length;u++)s+=n[u];return s}function Bi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function bu(n,o,s){if(s===void 0&&(s=!1),!s&&!Bi(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=bu(n[u],o[u]);else if(Bi(o))for(var u in o)n[u]=bu(n[u],o[u]);return n}function Du(n,o){Object.defineProperty(n,"toString",{value:o})}function zl(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var hb=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var s=0,u=0;u<o;u++)s+=this.groupSizes[u];return s},n.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,m=f;o>=m;)if((m<<=1)<0)throw zl(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(u),this.length=m;for(var x=f;x<m;x++)this.groupSizes[x]=0}for(var j=this.indexOfGroup(o+1),y=(x=0,s.length);x<y;x++)this.tag.insertRule(j,s[x])&&(this.groupSizes[o]++,j++)},n.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],u=this.indexOfGroup(o),f=u+s;this.groupSizes[o]=0;for(var m=u;m<f;m++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var u=this.groupSizes[o],f=this.indexOfGroup(o),m=f+u,x=f;x<m;x++)s+="".concat(this.tag.getRule(x)).concat(Au);return s},n}(),or=new Map,dr=new Map,rr=1,tr=function(n){if(or.has(n))return or.get(n);for(;dr.has(rr);)rr++;var o=rr++;return or.set(n,o),dr.set(o,n),o},pb=function(n,o){rr=o+1,or.set(n,o),dr.set(o,n)},mb="style[".concat(ba,"][").concat(Im,'="').concat(vr,'"]'),gb=new RegExp("^".concat(ba,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yb=function(n,o,s){for(var u,f=s.split(","),m=0,x=f.length;m<x;m++)(u=f[m])&&n.registerName(o,u)},xb=function(n,o){for(var s,u=((s=o.textContent)!==null&&s!==void 0?s:"").split(Au),f=[],m=0,x=u.length;m<x;m++){var j=u[m].trim();if(j){var y=j.match(gb);if(y){var g=0|parseInt(y[1],10),v=y[2];g!==0&&(pb(v,g),yb(n,v,y[3]),n.getTag().insertRules(g,f)),f.length=0}else f.push(j)}}},em=function(n){for(var o=document.querySelectorAll(mb),s=0,u=o.length;s<u;s++){var f=o[s];f&&f.getAttribute(ba)!==Wm&&(xb(n,f),f.parentNode&&f.parentNode.removeChild(f))}};function bb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sg=function(n){var o=document.head,s=n||o,u=document.createElement("style"),f=function(j){var y=Array.from(j.querySelectorAll("style[".concat(ba,"]")));return y[y.length-1]}(s),m=f!==void 0?f.nextSibling:null;u.setAttribute(ba,Wm),u.setAttribute(Im,vr);var x=bb();return x&&u.setAttribute("nonce",x),s.insertBefore(u,m),u},vb=function(){function n(o){this.element=sg(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var u=document.styleSheets,f=0,m=u.length;f<m;f++){var x=u[f];if(x.ownerNode===s)return x}throw zl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},n}(),Sb=function(){function n(o){this.element=sg(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),jb=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),tm=fr,$b={isServer:!fr,useCSSOMInjection:!I0},hr=function(){function n(o,s,u){o===void 0&&(o=va),s===void 0&&(s={});var f=this;this.options=tt(tt({},$b),o),this.gs=s,this.names=new Map(u),this.server=!!o.isServer,!this.server&&fr&&tm&&(tm=!1,em(this)),Du(this,function(){return function(m){for(var x=m.getTag(),j=x.length,y="",g=function(w){var D=function(L){return dr.get(L)}(w);if(D===void 0)return"continue";var k=m.names.get(D),q=x.getGroup(w);if(k===void 0||!k.size||q.length===0)return"continue";var U="".concat(ba,".g").concat(w,'[id="').concat(D,'"]'),H="";k!==void 0&&k.forEach(function(L){L.length>0&&(H+="".concat(L,","))}),y+="".concat(q).concat(U,'{content:"').concat(H,'"}').concat(Au)},v=0;v<j;v++)g(v);return y}(f)})}return n.registerId=function(o){return tr(o)},n.prototype.rehydrate=function(){!this.server&&fr&&em(this)},n.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new n(tt(tt({},this.options),o),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(s){var u=s.useCSSOMInjection,f=s.target;return s.isServer?new jb(f):u?new vb(f):new Sb(f)}(this.options),new hb(o)));var o},n.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},n.prototype.registerName=function(o,s){if(tr(o),this.names.has(o))this.names.get(o).add(s);else{var u=new Set;u.add(s),this.names.set(o,u)}},n.prototype.insertRules=function(o,s,u){this.registerName(o,s),this.getTag().insertRules(tr(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(tr(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),wb=/&/g,Eb=/^\s*\/\/.*$/gm;function ug(n,o){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=ug(s.children,o)),s})}function Tb(n){var o,s,u,f=va,m=f.options,x=m===void 0?va:m,j=f.plugins,y=j===void 0?Sr:j,g=function(D,k,q){return q.startsWith(s)&&q.endsWith(s)&&q.replaceAll(s,"").length>0?".".concat(o):D},v=y.slice();v.push(function(D){D.type===gr&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(wb,s).replace(u,g))}),x.prefix&&v.push(P0),v.push(K0);var w=function(D,k,q,U){k===void 0&&(k=""),q===void 0&&(q=""),U===void 0&&(U="&"),o=U,s=k,u=new RegExp("\\".concat(s,"\\b"),"g");var H=D.replace(Eb,""),L=X0(q||k?"".concat(q," ").concat(k," { ").concat(H," }"):H);x.namespace&&(L=ug(L,x.namespace));var Z=[];return ur(L,F0(v.concat(J0(function(V){return Z.push(V)})))),Z};return w.hash=y.length?y.reduce(function(D,k){return k.name||zl(15),ga(D,k.name)},ng).toString():"",w}var Rb=new hr,vu=Tb(),fg=Kt.createContext({shouldForwardProp:void 0,styleSheet:Rb,stylis:vu});fg.Consumer;Kt.createContext(void 0);function Su(){return T.useContext(fg)}var zb=function(){function n(o,s){var u=this;this.inject=function(f,m){m===void 0&&(m=vu);var x=u.name+m.hash;f.hasNameForId(u.id,x)||f.insertRules(u.id,x,m(u.rules,x,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,Du(this,function(){throw zl(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=vu),this.name+o.hash},n}(),Ab=function(n){return n>="A"&&n<="Z"};function nm(n){for(var o="",s=0;s<n.length;s++){var u=n[s];if(s===1&&u==="-"&&n[0]==="-")return n;Ab(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var dg=function(n){return n==null||n===!1||n===""},hg=function(n){var o,s,u=[];for(var f in n){var m=n[f];n.hasOwnProperty(f)&&!dg(m)&&(Array.isArray(m)&&m.isCss||Rl(m)?u.push("".concat(nm(f),":"),m,";"):Bi(m)?u.push.apply(u,Mi(Mi(["".concat(f," {")],hg(m),!1),["}"],!1)):u.push("".concat(nm(f),": ").concat((o=f,(s=m)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in W0||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return u};function ll(n,o,s,u){if(dg(n))return[];if(Cu(n))return[".".concat(n.styledComponentId)];if(Rl(n)){if(!Rl(m=n)||m.prototype&&m.prototype.isReactComponent||!o)return[n];var f=n(o);return ll(f,o,s,u)}var m;return n instanceof zb?s?(n.inject(s,u),[n.getName(u)]):[n]:Bi(n)?hg(n):Array.isArray(n)?Array.prototype.concat.apply(Sr,n.map(function(x){return ll(x,o,s,u)})):[n.toString()]}function pg(n){for(var o=0;o<n.length;o+=1){var s=n[o];if(Rl(s)&&!Cu(s))return!1}return!0}var Cb=lg(vr),Db=function(){function n(o,s,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&pg(o),this.componentId=s,this.baseHash=ga(Cb,s),this.baseStyle=u,hr.registerId(s)}return n.prototype.generateAndInjectStyles=function(o,s,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=El(f,this.staticRulesId);else{var m=xu(ll(this.rules,o,s,u)),x=yu(ga(this.baseHash,m)>>>0);if(!s.hasNameForId(this.componentId,x)){var j=u(m,".".concat(x),void 0,this.componentId);s.insertRules(this.componentId,x,j)}f=El(f,x),this.staticRulesId=x}else{for(var y=ga(this.baseHash,u.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var D=xu(ll(w,o,s,u));y=ga(y,D+v),g+=D}}if(g){var k=yu(y>>>0);s.hasNameForId(this.componentId,k)||s.insertRules(this.componentId,k,u(g,".".concat(k),void 0,this.componentId)),f=El(f,k)}}return f},n}(),_i=Kt.createContext(void 0);_i.Consumer;function Ob(n){var o=Kt.useContext(_i),s=T.useMemo(function(){return function(u,f){if(!u)throw zl(14);if(Rl(u)){var m=u(f);return m}if(Array.isArray(u)||typeof u!="object")throw zl(8);return f?tt(tt({},f),u):u}(n.theme,o)},[n.theme,o]);return n.children?Kt.createElement(_i.Provider,{value:s},n.children):null}var Js={};function Mb(n,o,s){var u=Cu(n),f=n,m=!Fs(n),x=o.attrs,j=x===void 0?Sr:x,y=o.componentId,g=y===void 0?function(te,X){var W=typeof te!="string"?"sc":Fp(te);Js[W]=(Js[W]||0)+1;var F="".concat(W,"-").concat(ag(vr+W+Js[W]));return X?"".concat(X,"-").concat(F):F}(o.displayName,o.parentComponentId):y,v=o.displayName,w=v===void 0?function(te){return Fs(te)?"styled.".concat(te):"Styled(".concat(ab(te),")")}(n):v,D=o.displayName&&o.componentId?"".concat(Fp(o.displayName),"-").concat(o.componentId):o.componentId||g,k=u&&f.attrs?f.attrs.concat(j).filter(Boolean):j,q=o.shouldForwardProp;if(u&&f.shouldForwardProp){var U=f.shouldForwardProp;if(o.shouldForwardProp){var H=o.shouldForwardProp;q=function(te,X){return U(te,X)&&H(te,X)}}else q=U}var L=new Db(s,D,u?f.componentStyle:void 0);function Z(te,X){return function(W,F,we){var Le=W.attrs,At=W.componentStyle,yt=W.defaultProps,qe=W.foldedComponentIds,Ct=W.styledComponentId,Dt=W.target,Ee=Kt.useContext(_i),O=Su(),Y=W.shouldForwardProp||O.shouldForwardProp,I=eg(F,Ee,yt)||va,se=function(ue,ne,Ke){for(var ge,it=tt(tt({},ne),{className:void 0,theme:Ke}),al=0;al<ue.length;al+=1){var cn=Rl(ge=ue[al])?ge(it):ge;for(var Ot in cn)it[Ot]=Ot==="className"?El(it[Ot],cn[Ot]):Ot==="style"?tt(tt({},it[Ot]),cn[Ot]):cn[Ot]}return ne.className&&(it.className=El(it.className,ne.className)),it}(Le,F,I),S=se.as||Dt,N={};for(var G in se)se[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&se.theme===I||(G==="forwardedAs"?N.as=se.forwardedAs:Y&&!Y(G,S)||(N[G]=se[G]));var Q=function(ue,ne){var Ke=Su(),ge=ue.generateAndInjectStyles(ne,Ke.styleSheet,Ke.stylis);return ge}(At,se),P=El(qe,Ct);return Q&&(P+=" "+Q),se.className&&(P+=" "+se.className),N[Fs(S)&&!tg.has(S)?"class":"className"]=P,we&&(N.ref=we),T.createElement(S,N)}(V,te,X)}Z.displayName=w;var V=Kt.forwardRef(Z);return V.attrs=k,V.componentStyle=L,V.displayName=w,V.shouldForwardProp=q,V.foldedComponentIds=u?El(f.foldedComponentIds,f.styledComponentId):"",V.styledComponentId=D,V.target=u?f.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=u?function(X){for(var W=[],F=1;F<arguments.length;F++)W[F-1]=arguments[F];for(var we=0,Le=W;we<Le.length;we++)bu(X,Le[we],!0);return X}({},f.defaultProps,te):te}}),Du(V,function(){return".".concat(V.styledComponentId)}),m&&cg(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function lm(n,o){for(var s=[n[0]],u=0,f=o.length;u<f;u+=1)s.push(o[u],n[u+1]);return s}var am=function(n){return Object.assign(n,{isCss:!0})};function mg(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(Rl(n)||Bi(n))return am(ll(lm(Sr,Mi([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?ll(u):am(ll(lm(u,o)))}function ju(n,o,s){if(s===void 0&&(s=va),!o)throw zl(1,o);var u=function(f){for(var m=[],x=1;x<arguments.length;x++)m[x-1]=arguments[x];return n(o,s,mg.apply(void 0,Mi([f],m,!1)))};return u.attrs=function(f){return ju(n,o,tt(tt({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return ju(n,o,tt(tt({},s),f))},u}var gg=function(n){return ju(Mb,n)},h=gg;tg.forEach(function(n){h[n]=gg(n)});var Bb=function(){function n(o,s){this.rules=o,this.componentId=s,this.isStatic=pg(o),hr.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,s,u,f){var m=f(xu(ll(this.rules,s,u,f)),""),x=this.componentId+o;u.insertRules(x,x,m)},n.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,s,u,f){o>2&&hr.registerId(this.componentId+o),this.removeStyles(o,u),this.createStyles(o,s,u,f)},n}();function _b(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var u=mg.apply(void 0,Mi([n],o,!1)),f="sc-global-".concat(ag(JSON.stringify(u))),m=new Bb(u,f),x=function(y){var g=Su(),v=Kt.useContext(_i),w=Kt.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&j(w,y,g.styleSheet,v,g.stylis),Kt.useLayoutEffect(function(){if(!g.styleSheet.server)return j(w,y,g.styleSheet,v,g.stylis),function(){return m.removeStyles(w,g.styleSheet)}},[w,y,g.styleSheet,v,g.stylis]),null};function j(y,g,v,w,D){if(m.isStatic)m.renderStyles(y,eb,v,D);else{var k=tt(tt({},g),{theme:eg(g,w,x.defaultProps)});m.renderStyles(y,k,v,D)}}return Kt.memo(x)}/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ou=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,yg=/^[\\/]{2}/;function Nb(n,o){return o+n.replace(/\\/g,"/")}var im="popstate";function om(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function kb(n={}){function o(u,f){var g;let m=(g=f.state)==null?void 0:g.masked,{pathname:x,search:j,hash:y}=m||u.location;return $u("",{pathname:x,search:j,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function s(u,f){return typeof f=="string"?f:Ni(f)}return Ub(o,s,null,n)}function Ce(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Pt(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Lb(){return Math.random().toString(36).substring(2,10)}function rm(n,o){return{usr:n.state,key:n.key,idx:o,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function $u(n,o,s=null,u,f){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?wa(o):o,state:s,key:o&&o.key||u||Lb(),mask:f}}function Ni({pathname:n="/",search:o="",hash:s=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function wa(n){let o={};if(n){let s=n.indexOf("#");s>=0&&(o.hash=n.substring(s),n=n.substring(0,s));let u=n.indexOf("?");u>=0&&(o.search=n.substring(u),n=n.substring(0,u)),n&&(o.pathname=n)}return o}function Ub(n,o,s,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,x=f.history,j="POP",y=null,g=v();g==null&&(g=0,x.replaceState({...x.state,idx:g},""));function v(){return(x.state||{idx:null}).idx}function w(){j="POP";let H=v(),L=H==null?null:H-g;g=H,y&&y({action:j,location:U.location,delta:L})}function D(H,L){j="PUSH";let Z=om(H)?H:$u(U.location,H,L);g=v()+1;let V=rm(Z,g),te=U.createHref(Z.mask||Z);try{x.pushState(V,"",te)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;f.location.assign(te)}m&&y&&y({action:j,location:U.location,delta:1})}function k(H,L){j="REPLACE";let Z=om(H)?H:$u(U.location,H,L);g=v();let V=rm(Z,g),te=U.createHref(Z.mask||Z);x.replaceState(V,"",te),m&&y&&y({action:j,location:U.location,delta:0})}function q(H){return Hb(f,H)}let U={get action(){return j},get location(){return n(f,x)},listen(H){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(im,w),y=H,()=>{f.removeEventListener(im,w),y=null}},createHref(H){return o(f,H)},createURL:q,encodeLocation(H){let L=q(H);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:D,replace:k,go(H){return x.go(H)}};return U}function Hb(n,o,s=!1){let u="http://localhost";n&&(u=n.location.origin!=="null"?n.location.origin:n.location.href),Ce(u,"No window.location.(origin|href) available to create URL");let f=typeof o=="string"?o:Ni(o);return f=f.replace(/ $/,"%20"),!s&&yg.test(f)&&(f=u+f),new URL(f,u)}function xg(n,o,s="/"){return qb(n,o,s,!1)}function qb(n,o,s,u,f){let m=typeof o=="string"?wa(o):o,x=En(m.pathname||"/",s);if(x==null)return null;let j=Gb(n),y=null,g=Ib(x);for(let v=0;y==null&&v<j.length;++v)y=Wb(j[v],g,u);return y}function Gb(n){let o=bg(n);return Yb(o),o}function bg(n,o=[],s=[],u="",f=!1){let m=(x,j,y=f,g)=>{let v={relativePath:g===void 0?x.path||"":g,caseSensitive:x.caseSensitive===!0,childrenIndex:j,route:x};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(u)&&y)return;Ce(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length)}let w=Jt([u,v.relativePath]),D=s.concat(v);x.children&&x.children.length>0&&(Ce(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),bg(x.children,o,D,w,y)),!(x.path==null&&!x.index)&&o.push({path:w,score:Jb(w,x.index),routesMeta:D.map((k,q)=>{let[U,H]=jg(k.relativePath,k.caseSensitive,q===D.length-1);return{...k,matcher:U,compiledParams:H}})})};return n.forEach((x,j)=>{var y;if(x.path===""||!((y=x.path)!=null&&y.includes("?")))m(x,j);else for(let g of vg(x.path))m(x,j,!0,g)}),o}function vg(n){let o=n.split("/");if(o.length===0)return[];let[s,...u]=o,f=s.endsWith("?"),m=s.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let x=vg(u.join("/")),j=[];return j.push(...x.map(y=>y===""?m:[m,y].join("/"))),f&&j.push(...x),j.map(y=>n.startsWith("/")&&y===""?"/":y)}function Yb(n){n.sort((o,s)=>o.score!==s.score?s.score-o.score:Pb(o.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}var Qb=/^:[\w-]+$/,Vb=3,Xb=2,Zb=1,Kb=10,Fb=-2,cm=n=>n==="*";function Jb(n,o){let s=n.split("/"),u=s.length;return s.some(cm)&&(u+=Fb),o&&(u+=Xb),s.filter(f=>!cm(f)).reduce((f,m)=>f+(Qb.test(m)?Vb:m===""?Zb:Kb),u)}function Pb(n,o){return n.length===o.length&&n.slice(0,-1).every((u,f)=>u===o[f])?n[n.length-1]-o[o.length-1]:0}function Wb(n,o,s=!1){let{routesMeta:u}=n,f={},m="/",x=[];for(let j=0;j<u.length;++j){let y=u[j],g=j===u.length-1,v=m==="/"?o:o.slice(m.length)||"/",w={path:y.relativePath,caseSensitive:y.caseSensitive,end:g},D=y.matcher&&y.compiledParams?Sg(w,v,y.matcher,y.compiledParams):pr(w,v),k=y.route;if(!D&&g&&s&&!u[u.length-1].route.index&&(D=pr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!D)return null;Object.assign(f,D.params),x.push({params:f,pathname:Jt([m,D.pathname]),pathnameBase:nv(Jt([m,D.pathnameBase])),route:k}),D.pathnameBase!=="/"&&(m=Jt([m,D.pathnameBase]))}return x}function pr(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,u]=jg(n.path,n.caseSensitive,n.end);return Sg(n,o,s,u)}function Sg(n,o,s,u){let f=o.match(s);if(!f)return null;let m=f[0],x=m.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:u.reduce((g,{paramName:v,isOptional:w},D)=>{if(v==="*"){let q=j[D]||"";x=m.slice(0,m.length-q.length).replace(/(.)\/+$/,"$1")}const k=j[D];return w&&!k?g[v]=void 0:g[v]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:x,pattern:n}}function jg(n,o=!1,s=!0){Pt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],f="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,j,y,g,v)=>{if(u.push({paramName:j,isOptional:y!=null}),y){let w=v.charAt(g+x.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),f+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":n!==""&&n!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),u]}function Ib(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Pt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function En(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,u=n.charAt(s);return u&&u!=="/"?null:n.slice(s)||"/"}function ev(n,o="/"){let{pathname:s,search:u="",hash:f=""}=typeof n=="string"?wa(n):n,m;return s?(s=$g(s),s.startsWith("/")?m=sm(s.substring(1),"/"):m=sm(s,o)):m=o,{pathname:m,search:lv(u),hash:av(f)}}function sm(n,o){let s=mr(o).split("/");return n.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Ps(n,o,s,u){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tv(n){return n.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Mu(n){let o=tv(n);return o.map((s,u)=>u===o.length-1?s.pathname:s.pathnameBase)}function jr(n,o,s,u=!1){let f;typeof n=="string"?f=wa(n):(f={...n},Ce(!f.pathname||!f.pathname.includes("?"),Ps("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),Ps("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),Ps("#","search","hash",f)));let m=n===""||f.pathname==="",x=m?"/":f.pathname,j;if(x==null)j=s;else{let w=o.length-1;if(!u&&x.startsWith("..")){let D=x.split("/");for(;D[0]==="..";)D.shift(),w-=1;f.pathname=D.join("/")}j=w>=0?o[w]:"/"}let y=ev(f,j),g=x&&x!=="/"&&x.endsWith("/"),v=(m||x===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(g||v)&&(y.pathname+="/"),y}var $g=n=>n.replace(/[\\/]{2,}/g,"/"),Jt=n=>$g(n.join("/")),mr=n=>n.replace(/\/+$/,""),nv=n=>mr(n).replace(/^\/*/,"/"),lv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,av=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,iv=class{constructor(n,o,s,u=!1){this.status=n,this.statusText=o||"",this.internal=u,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function ov(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function rv(n){let o=n.map(s=>s.route.path).filter(Boolean);return Jt(o)||"/"}var wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Eg(n,o){let s=n;if(typeof s!="string"||!Ou.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let u=s,f=!1;if(wg)try{let m=new URL(window.location.href),x=yg.test(s)?new URL(Nb(s,m.protocol)):new URL(s),j=En(x.pathname,o);x.origin===m.origin&&j!=null?s=j+x.search+x.hash:f=!0}catch{Pt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tg=["POST","PUT","PATCH","DELETE"];new Set(Tg);var cv=["GET",...Tg];new Set(cv);var sv=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function uv(n){try{return sv.includes(new URL(n).protocol)}catch{return!1}}var Ea=T.createContext(null);Ea.displayName="DataRouter";var $r=T.createContext(null);$r.displayName="DataRouterState";var Rg=T.createContext(!1);function fv(){return T.useContext(Rg)}var zg=T.createContext({isTransitioning:!1});zg.displayName="ViewTransition";var dv=T.createContext(new Map);dv.displayName="Fetchers";var hv=T.createContext(null);hv.displayName="Await";var zt=T.createContext(null);zt.displayName="Navigation";var ki=T.createContext(null);ki.displayName="Location";var Qt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var Bu=T.createContext(null);Bu.displayName="RouteError";var Ag="REACT_ROUTER_ERROR",pv="REDIRECT",mv="ROUTE_ERROR_RESPONSE";function gv(n){if(n.startsWith(`${Ag}:${pv}:{`))try{let o=JSON.parse(n.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function yv(n){if(n.startsWith(`${Ag}:${mv}:{`))try{let o=JSON.parse(n.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new iv(o.status,o.statusText,o.data)}catch{}}function xv(n,{relative:o}={}){Ce(Ta(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:u}=T.useContext(zt),{hash:f,pathname:m,search:x}=Li(n,{relative:o}),j=m;return s!=="/"&&(j=m==="/"?s:Jt([s,m])),u.createHref({pathname:j,search:x,hash:f})}function Ta(){return T.useContext(ki)!=null}function on(){return Ce(Ta(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ki).location}var Cg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dg(n){T.useContext(zt).static||T.useLayoutEffect(n)}function rn(){let{isDataRoute:n}=T.useContext(Qt);return n?Mv():bv()}function bv(){Ce(Ta(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(Ea),{basename:o,navigator:s}=T.useContext(zt),{matches:u}=T.useContext(Qt),{pathname:f}=on(),m=JSON.stringify(Mu(u)),x=T.useRef(!1);return Dg(()=>{x.current=!0}),T.useCallback((y,g={})=>{if(Pt(x.current,Cg),!x.current)return;if(typeof y=="number"){s.go(y);return}let v=jr(y,JSON.parse(m),f,g.relative==="path");n==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:Jt([o,v.pathname])),(g.replace?s.replace:s.push)(v,g.state,g)},[o,s,m,f,n])}var vv=T.createContext(null);function Sv(n){let o=T.useContext(Qt).outlet;return T.useMemo(()=>o&&T.createElement(vv.Provider,{value:n},o),[o,n])}function wr(){let{matches:n}=T.useContext(Qt),o=n[n.length-1];return(o==null?void 0:o.params)??{}}function Li(n,{relative:o}={}){let{matches:s}=T.useContext(Qt),{pathname:u}=on(),f=JSON.stringify(Mu(s));return T.useMemo(()=>jr(n,JSON.parse(f),u,o==="path"),[n,f,u,o])}function jv(n,o){return Og(n,o)}function Og(n,o,s){var H;Ce(Ta(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=T.useContext(zt),{matches:f}=T.useContext(Qt),m=f[f.length-1],x=m?m.params:{},j=m?m.pathname:"/",y=m?m.pathnameBase:"/",g=m&&m.route;{let L=g&&g.path||"";Bg(j,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let v=on(),w;if(o){let L=typeof o=="string"?wa(o):o;Ce(y==="/"||((H=L.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),w=L}else w=v;let D=w.pathname||"/",k=D;if(y!=="/"){let L=y.replace(/^\//,"").split("/");k="/"+D.replace(/^\//,"").split("/").slice(L.length).join("/")}let q=s&&s.state.matches.length?s.state.matches.map(L=>Object.assign(L,{route:s.manifest[L.route.id]||L.route})):xg(n,{pathname:k});Pt(g||q!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=Rv(q&&q.map(L=>Object.assign({},L,{params:Object.assign({},x,L.params),pathname:Jt([y,u.encodeLocation?u.encodeLocation(L.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:Jt([y,u.encodeLocation?u.encodeLocation(L.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,s);return o&&U?T.createElement(ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},U):U}function $v(){let n=Ov(),o=ov(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",n),x=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),s?T.createElement("pre",{style:f},s):null,x)}var wv=T.createElement($v,null),Mg=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){this.props.onError?this.props.onError(n,o):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const s=yv(n.digest);s&&(n=s)}let o=n!==void 0?T.createElement(Qt.Provider,{value:this.props.routeContext},T.createElement(Bu.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?T.createElement(Ev,{error:n},o):o}};Mg.contextType=Rg;var Ws=new WeakMap;function Ev({children:n,error:o}){let{basename:s}=T.useContext(zt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let u=gv(o.digest);if(u){let f=Ws.get(o);if(f)throw f;let m=Eg(u.location,s),x=m.absoluteURL||m.to;if(uv(x))throw new Error("Invalid redirect location");if(wg&&!Ws.get(o))if(m.isExternal||u.reloadDocument)window.location.href=x;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw Ws.set(o,j),j}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x}`})}}return n}function Tv({routeContext:n,match:o,children:s}){let u=T.useContext(Ea);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Qt.Provider,{value:n},s)}function Rv(n,o=[],s){let u=s==null?void 0:s.state;if(n==null){if(!u)return null;if(u.errors)n=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)n=u.matches;else return null}let f=n,m=u==null?void 0:u.errors;if(m!=null){let v=f.findIndex(w=>w.route.id&&(m==null?void 0:m[w.route.id])!==void 0);Ce(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let x=!1,j=-1;if(s&&u){x=u.renderFallback;for(let v=0;v<f.length;v++){let w=f[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(j=v),w.route.id){let{loaderData:D,errors:k}=u,q=w.route.loader&&!D.hasOwnProperty(w.route.id)&&(!k||k[w.route.id]===void 0);if(w.route.lazy||q){s.isStatic&&(x=!0),j>=0?f=f.slice(0,j+1):f=[f[0]];break}}}}let y=s==null?void 0:s.onError,g=u&&y?(v,w)=>{var D,k;y(v,{location:u.location,params:((k=(D=u.matches)==null?void 0:D[0])==null?void 0:k.params)??{},pattern:rv(u.matches),errorInfo:w})}:void 0;return f.reduceRight((v,w,D)=>{let k,q=!1,U=null,H=null;u&&(k=m&&w.route.id?m[w.route.id]:void 0,U=w.route.errorElement||wv,x&&(j<0&&D===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,H=null):j===D&&(q=!0,H=w.route.hydrateFallbackElement||null)));let L=o.concat(f.slice(0,D+1)),Z=()=>{let V;return k?V=U:q?V=H:w.route.Component?V=T.createElement(w.route.Component,null):w.route.element?V=w.route.element:V=v,T.createElement(Tv,{match:w,routeContext:{outlet:v,matches:L,isDataRoute:u!=null},children:V})};return u&&(w.route.ErrorBoundary||w.route.errorElement||D===0)?T.createElement(Mg,{location:u.location,revalidation:u.revalidation,component:U,error:k,children:Z(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:g}):Z()},null)}function _u(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zv(n){let o=T.useContext(Ea);return Ce(o,_u(n)),o}function Av(n){let o=T.useContext($r);return Ce(o,_u(n)),o}function Cv(n){let o=T.useContext(Qt);return Ce(o,_u(n)),o}function Nu(n){let o=Cv(n),s=o.matches[o.matches.length-1];return Ce(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function Dv(){return Nu("useRouteId")}function Ov(){var u;let n=T.useContext(Bu),o=Av("useRouteError"),s=Nu("useRouteError");return n!==void 0?n:(u=o.errors)==null?void 0:u[s]}function Mv(){let{router:n}=zv("useNavigate"),o=Nu("useNavigate"),s=T.useRef(!1);return Dg(()=>{s.current=!0}),T.useCallback(async(f,m={})=>{Pt(s.current,Cg),s.current&&(typeof f=="number"?await n.navigate(f):await n.navigate(f,{fromRouteId:o,...m}))},[n,o])}var um={};function Bg(n,o,s){!o&&!um[n]&&(um[n]=!0,Pt(!1,s))}T.memo(Bv);function Bv({routes:n,manifest:o,future:s,state:u,isStatic:f,onError:m}){return Og(n,void 0,{manifest:o,state:u,isStatic:f,onError:m})}function Sa({to:n,replace:o,state:s,relative:u}){Ce(Ta(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=T.useContext(zt);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=T.useContext(Qt),{pathname:x}=on(),j=rn(),y=jr(n,Mu(m),x,u==="path"),g=JSON.stringify(y);return T.useEffect(()=>{j(JSON.parse(g),{replace:o,state:s,relative:u})},[j,g,u,o,s]),null}function _g(n){return Sv(n.context)}function Oe(n){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:n="/",children:o=null,location:s,navigationType:u="POP",navigator:f,static:m=!1,useTransitions:x}){Ce(!Ta(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=n.replace(/^\/*/,"/"),y=T.useMemo(()=>({basename:j,navigator:f,static:m,useTransitions:x,future:{}}),[j,f,m,x]);typeof s=="string"&&(s=wa(s));let{pathname:g="/",search:v="",hash:w="",state:D=null,key:k="default",mask:q}=s,U=T.useMemo(()=>{let H=En(g,j);return H==null?null:{location:{pathname:H,search:v,hash:w,state:D,key:k,mask:q},navigationType:u}},[j,g,v,w,D,k,u,q]);return Pt(U!=null,`<Router basename="${j}"> is not able to match the URL "${g}${v}${w}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:T.createElement(zt.Provider,{value:y},T.createElement(ki.Provider,{children:o,value:U}))}function Nv({children:n,location:o}){return jv(wu(n),o)}function wu(n,o=[]){let s=[];return T.Children.forEach(n,(u,f)=>{if(!T.isValidElement(u))return;let m=[...o,f];if(u.type===T.Fragment){s.push.apply(s,wu(u.props.children,m));return}Ce(u.type===Oe,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!u.props.index||!u.props.children,"An index route cannot have child routes.");let x={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(x.children=wu(u.props.children,m)),s.push(x)}),s}var cr="get",sr="application/x-www-form-urlencoded";function Er(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function kv(n){return Er(n)&&n.tagName.toLowerCase()==="button"}function Lv(n){return Er(n)&&n.tagName.toLowerCase()==="form"}function Uv(n){return Er(n)&&n.tagName.toLowerCase()==="input"}function Hv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qv(n,o){return n.button===0&&(!o||o==="_self")&&!Hv(n)}var nr=null;function Gv(){if(nr===null)try{new FormData(document.createElement("form"),0),nr=!1}catch{nr=!0}return nr}var Yv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Is(n){return n!=null&&!Yv.has(n)?(Pt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sr}"`),null):n}function Qv(n,o){let s,u,f,m,x;if(Lv(n)){let j=n.getAttribute("action");u=j?En(j,o):null,s=n.getAttribute("method")||cr,f=Is(n.getAttribute("enctype"))||sr,m=new FormData(n)}else if(kv(n)||Uv(n)&&(n.type==="submit"||n.type==="image")){let j=n.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||j.getAttribute("action");if(u=y?En(y,o):null,s=n.getAttribute("formmethod")||j.getAttribute("method")||cr,f=Is(n.getAttribute("formenctype"))||Is(j.getAttribute("enctype"))||sr,m=new FormData(j,n),!Gv()){let{name:g,type:v,value:w}=n;if(v==="image"){let D=g?`${g}.`:"";m.append(`${D}x`,"0"),m.append(`${D}y`,"0")}else g&&m.append(g,w)}}else{if(Er(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=cr,u=null,f=sr,x=n}return m&&f==="text/plain"&&(x=m,m=void 0),{action:u,method:s.toLowerCase(),encType:f,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ku(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Ng(n,o,s,u){let f=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:o&&En(f.pathname,o)==="/"?f.pathname=`${mr(o)}/_root.${u}`:f.pathname=`${mr(f.pathname)}.${u}`,f}async function Vv(n,o){if(n.id in o)return o[n.id];try{let s=await import(n.module);return o[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xv(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Zv(n,o,s){let u=await Promise.all(n.map(async f=>{let m=o.routes[f.route.id];if(m){let x=await Vv(m,s);return x.links?x.links():[]}return[]}));return Pv(u.flat(1).filter(Xv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function fm(n,o,s,u,f,m){let x=(y,g)=>s[g]?y.route.id!==s[g].route.id:!0,j=(y,g)=>{var v;return s[g].pathname!==y.pathname||((v=s[g].route.path)==null?void 0:v.endsWith("*"))&&s[g].params["*"]!==y.params["*"]};return m==="assets"?o.filter((y,g)=>x(y,g)||j(y,g)):m==="data"?o.filter((y,g)=>{var w;let v=u.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(x(y,g)||j(y,g))return!0;if(y.route.shouldRevalidate){let D=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((w=s[0])==null?void 0:w.params)||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Kv(n,o,{includeHydrateFallback:s}={}){return Fv(n.map(u=>{let f=o.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Fv(n){return[...new Set(n)]}function Jv(n){let o={},s=Object.keys(n).sort();for(let u of s)o[u]=n[u];return o}function Pv(n,o){let s=new Set;return new Set(o),n.reduce((u,f)=>{let m=JSON.stringify(Jv(f));return s.has(m)||(s.add(m),u.push({key:m,link:f})),u},[])}function Lu(){let n=T.useContext(Ea);return ku(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Wv(){let n=T.useContext($r);return ku(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uu=T.createContext(void 0);Uu.displayName="FrameworkContext";function Tr(){let n=T.useContext(Uu);return ku(n,"You must render this element inside a <HydratedRouter> element"),n}function Iv(n,o){let s=T.useContext(Uu),[u,f]=T.useState(!1),[m,x]=T.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=o,D=T.useRef(null);T.useEffect(()=>{if(n==="render"&&x(!0),n==="viewport"){let U=L=>{L.forEach(Z=>{x(Z.isIntersecting)})},H=new IntersectionObserver(U,{threshold:.5});return D.current&&H.observe(D.current),()=>{H.disconnect()}}},[n]),T.useEffect(()=>{if(u){let U=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(U)}}},[u]);let k=()=>{f(!0)},q=()=>{f(!1),x(!1)};return s?n!=="intent"?[m,D,{}]:[m,D,{onFocus:Ai(j,k),onBlur:Ai(y,q),onMouseEnter:Ai(g,k),onMouseLeave:Ai(v,q),onTouchStart:Ai(w,k)}]:[!1,D,{}]}function Ai(n,o){return s=>{n&&n(s),s.defaultPrevented||o(s)}}function e1({page:n,...o}){let s=fv(),{nonce:u}=Tr(),{router:f}=Lu(),m=T.useMemo(()=>xg(f.routes,n,f.basename),[f.routes,n,f.basename]);return m?(o.nonce==null&&u&&(o={...o,nonce:u}),s?T.createElement(n1,{page:n,matches:m,...o}):T.createElement(l1,{page:n,matches:m,...o})):null}function t1(n){let{manifest:o,routeModules:s}=Tr(),[u,f]=T.useState([]);return T.useEffect(()=>{let m=!1;return Zv(n,o,s).then(x=>{m||f(x)}),()=>{m=!0}},[n,o,s]),u}function n1({page:n,matches:o,...s}){let u=on(),{future:f}=Tr(),{basename:m}=Lu(),x=T.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let j=Ng(n,m,f.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,g=[];for(let v of o)typeof v.route.shouldRevalidate=="function"?y=!0:g.push(v.route.id);return y&&g.length>0&&j.searchParams.set("_routes",g.join(",")),[j.pathname+j.search]},[m,f.v8_trailingSlashAwareDataRequests,n,u,o]);return T.createElement(T.Fragment,null,x.map(j=>T.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...s})))}function l1({page:n,matches:o,...s}){let u=on(),{future:f,manifest:m,routeModules:x}=Tr(),{basename:j}=Lu(),{loaderData:y,matches:g}=Wv(),v=T.useMemo(()=>fm(n,o,g,m,u,"data"),[n,o,g,m,u]),w=T.useMemo(()=>fm(n,o,g,m,u,"assets"),[n,o,g,m,u]),D=T.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let U=new Set,H=!1;if(o.forEach(Z=>{var te;let V=m.routes[Z.route.id];!V||!V.hasLoader||(!v.some(X=>X.route.id===Z.route.id)&&Z.route.id in y&&((te=x[Z.route.id])!=null&&te.shouldRevalidate)||V.hasClientLoader?H=!0:U.add(Z.route.id))}),U.size===0)return[];let L=Ng(n,j,f.v8_trailingSlashAwareDataRequests,"data");return H&&U.size>0&&L.searchParams.set("_routes",o.filter(Z=>U.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[L.pathname+L.search]},[j,f.v8_trailingSlashAwareDataRequests,y,u,m,v,o,n,x]),k=T.useMemo(()=>Kv(w,m),[w,m]),q=t1(w);return T.createElement(T.Fragment,null,D.map(U=>T.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...s})),k.map(U=>T.createElement("link",{key:U,rel:"modulepreload",href:U,...s})),q.map(({key:U,link:H})=>T.createElement("link",{key:U,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function a1(...n){return o=>{n.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var i1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{i1&&(window.__reactRouterVersion="7.18.0")}catch{}function o1({basename:n,children:o,useTransitions:s,window:u}){let f=T.useRef();f.current==null&&(f.current=kb({window:u,v5Compat:!0}));let m=f.current,[x,j]=T.useState({action:m.action,location:m.location}),y=T.useCallback(g=>{s===!1?j(g):T.startTransition(()=>j(g))},[s]);return T.useLayoutEffect(()=>m.listen(y),[m,y]),T.createElement(_v,{basename:n,children:o,location:x.location,navigationType:x.action,navigator:m,useTransitions:s})}var st=T.forwardRef(function({onClick:o,discover:s="render",prefetch:u="none",relative:f,reloadDocument:m,replace:x,mask:j,state:y,target:g,to:v,preventScrollReset:w,viewTransition:D,defaultShouldRevalidate:k,...q},U){let{basename:H,navigator:L,useTransitions:Z}=T.useContext(zt),V=typeof v=="string"&&Ou.test(v),te=Eg(v,H);v=te.to;let X=xv(v,{relative:f}),W=on(),F=null;if(j){let Ee=jr(j,[],W.mask?W.mask.pathname:"/",!0);H!=="/"&&(Ee.pathname=Ee.pathname==="/"?H:Jt([H,Ee.pathname])),F=L.createHref(Ee)}let[we,Le,At]=Iv(u,q),yt=s1(v,{replace:x,mask:j,state:y,target:g,preventScrollReset:w,relative:f,viewTransition:D,defaultShouldRevalidate:k,useTransitions:Z});function qe(Ee){o&&o(Ee),Ee.defaultPrevented||yt(Ee)}let Ct=!(te.isExternal||m),Dt=T.createElement("a",{...q,...At,href:(Ct?F:void 0)||te.absoluteURL||X,onClick:Ct?qe:o,ref:a1(U,Le),target:g,"data-discover":!V&&s==="render"?"true":void 0});return we&&!V?T.createElement(T.Fragment,null,Dt,T.createElement(e1,{page:X})):Dt});st.displayName="Link";var kg=T.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:u="",end:f=!1,style:m,to:x,viewTransition:j,children:y,...g},v){let w=Li(x,{relative:g.relative}),D=on(),k=T.useContext($r),{navigator:q,basename:U}=T.useContext(zt),H=k!=null&&p1(w)&&j===!0,L=q.encodeLocation?q.encodeLocation(w).pathname:w.pathname,Z=D.pathname,V=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||(Z=Z.toLowerCase(),V=V?V.toLowerCase():null,L=L.toLowerCase()),V&&U&&(V=En(V,U)||V);const te=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let X=Z===L||!f&&Z.startsWith(L)&&Z.charAt(te)==="/",W=V!=null&&(V===L||!f&&V.startsWith(L)&&V.charAt(L.length)==="/"),F={isActive:X,isPending:W,isTransitioning:H},we=X?o:void 0,Le;typeof u=="function"?Le=u(F):Le=[u,X?"active":null,W?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let At=typeof m=="function"?m(F):m;return T.createElement(st,{...g,"aria-current":we,className:Le,ref:v,style:At,to:x,viewTransition:j},typeof y=="function"?y(F):y)});kg.displayName="NavLink";var r1=T.forwardRef(({discover:n="render",fetcherKey:o,navigate:s,reloadDocument:u,replace:f,state:m,method:x=cr,action:j,onSubmit:y,relative:g,preventScrollReset:v,viewTransition:w,defaultShouldRevalidate:D,...k},q)=>{let{useTransitions:U}=T.useContext(zt),H=d1(),L=h1(j,{relative:g}),Z=x.toLowerCase()==="get"?"get":"post",V=typeof j=="string"&&Ou.test(j),te=X=>{if(y&&y(X),X.defaultPrevented)return;X.preventDefault();let W=X.nativeEvent.submitter,F=(W==null?void 0:W.getAttribute("formmethod"))||x,we=()=>H(W||X.currentTarget,{fetcherKey:o,method:F,navigate:s,replace:f,state:m,relative:g,preventScrollReset:v,viewTransition:w,defaultShouldRevalidate:D});U&&s!==!1?T.startTransition(()=>we()):we()};return T.createElement("form",{ref:q,method:Z,action:L,onSubmit:u?y:te,...k,"data-discover":!V&&n==="render"?"true":void 0})});r1.displayName="Form";function c1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lg(n){let o=T.useContext(Ea);return Ce(o,c1(n)),o}function s1(n,{target:o,replace:s,mask:u,state:f,preventScrollReset:m,relative:x,viewTransition:j,defaultShouldRevalidate:y,useTransitions:g}={}){let v=rn(),w=on(),D=Li(n,{relative:x});return T.useCallback(k=>{if(qv(k,o)){k.preventDefault();let q=s!==void 0?s:Ni(w)===Ni(D),U=()=>v(n,{replace:q,mask:u,state:f,preventScrollReset:m,relative:x,viewTransition:j,defaultShouldRevalidate:y});g?T.startTransition(()=>U()):U()}},[w,v,D,s,u,f,o,n,m,x,j,y,g])}var u1=0,f1=()=>`__${String(++u1)}__`;function d1(){let{router:n}=Lg("useSubmit"),{basename:o}=T.useContext(zt),s=Dv(),u=n.fetch,f=n.navigate;return T.useCallback(async(m,x={})=>{let{action:j,method:y,encType:g,formData:v,body:w}=Qv(m,o);if(x.navigate===!1){let D=x.fetcherKey||f1();await u(D,s,x.action||j,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:v,body:w,formMethod:x.method||y,formEncType:x.encType||g,flushSync:x.flushSync})}else await f(x.action||j,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:v,body:w,formMethod:x.method||y,formEncType:x.encType||g,replace:x.replace,state:x.state,fromRouteId:s,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,f,o,s])}function h1(n,{relative:o}={}){let{basename:s}=T.useContext(zt),u=T.useContext(Qt);Ce(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...Li(n||".",{relative:o})},x=on();if(n==null){m.search=x.search;let j=new URLSearchParams(m.search),y=j.getAll("index");if(y.some(v=>v==="")){j.delete("index"),y.filter(w=>w).forEach(w=>j.append("index",w));let v=j.toString();m.search=v?`?${v}`:""}}return(!n||n===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:Jt([s,m.pathname])),Ni(m)}function p1(n,{relative:o}={}){let s=T.useContext(zg);Ce(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Lg("useViewTransitionState"),f=Li(n,{relative:o});if(!s.isTransitioning)return!1;let m=En(s.currentLocation.pathname,u)||s.currentLocation.pathname,x=En(s.nextLocation.pathname,u)||s.nextLocation.pathname;return pr(f.pathname,x)!=null||pr(f.pathname,m)!=null}const xe=h.div`
  width: 100%;
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({theme:n})=>n.layout.pagePadding};
  padding-right: ${({theme:n})=>n.layout.pagePadding};
`,m1={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"숨 쉬고, 먹고, 십자가를 따르는 하루",body:"신앙을 일상의 루틴으로 연결하는 라이프스타일 브랜드",cta:"브랜드 이야기 보기"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"하루의 작은 점(Dot)이 선(Line)이 되고, 선이 모여 하나님과 동행하는 삶의 형태(Form)가 됩니다.",items:[{title:"Dot",description:"하루의 작은 실천. QT 5분, 성경 한 장, 감사 한 줄."},{title:"Line",description:"작은 실천이 반복되어 습관이 되고, 지속 가능한 루틴이 됩니다."},{title:"Form",description:"습관이 쌓여 삶의 형태가 되고, 하나님과 동행하는 삶이 됩니다."}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:"태초에 하나님은 점에서 시작된 생명을 빚으셨습니다. 그 생명은 선으로 이어지고, 빛으로 드러나 마침내 하나의 형상(form)으로 회복됩니다. DoLF는 이 회복의 여정을 일상의 작은 실천으로 함께 걷고자 합니다.",closing:["점으로 시작된 생명의 이야기,","선으로 이어지는 믿음의 여정,","빛으로 드러나는 하나님의 형상."]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"신앙과 일상을 함께 기록하는 플래그십 플래너"},{name:"Bible Reading Tracker",description:"성경 통독을 한눈에 시각화하는 기록 도구"},{name:"2027 Calendar",description:"점자와 7-세그먼트로 표현한 미니멀 캘린더"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"신앙을 일상의 루틴으로 연결하는 라이프스타일 브랜드, DoLF의 이야기"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"많은 사람들이 신앙을 지속하지 못하는 것은 의지가 부족해서가 아닙니다. 신앙을 일상의 루틴으로 만들어 주는 도구와 경험이 부족하기 때문입니다. DoLF는 매일의 작은 실천이 습관이 되고, 습관이 삶의 형태가 되도록 돕습니다."},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"신앙을 일상의 루틴으로 연결한다",description:"신앙이 특별한 순간의 결심이 아니라 매일의 습관이 되도록 돕습니다."},{label:"Vision",subhead:"하나님과 동행하는 삶을 지속 가능한 습관으로",description:"작은 실천이 쌓여 삶의 방향을 바꾸는 신앙 라이프스타일을 꿈꿉니다."}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"신앙은 DoLF의 출발점입니다."},{label:"Consistency",description:"완벽함보다 지속성을 중요하게 생각합니다."},{label:"Simplicity",description:"단순함에서 좋은 습관이 시작됩니다."},{label:"Growth",description:"결과보다 성장의 과정을 소중히 여깁니다."},{label:"Community",description:"함께할 때 변화는 더 오래 지속됩니다."}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"신앙을 일상의 루틴으로 만들어 주는 DoLF의 제품들"},features:[{name:"Breathe — Planner & Diary",description:"하루를 계획하는 동시에 감사·묵상·성찰을 기록하며, 하나님과의 관계를 일상 속에서 이어가는 DoLF의 플래그십 플래너입니다.",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"1절을 하나의 점(Dot)으로. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하는 기록 도구입니다.",spec:"B5  ·  120P"},{name:"2027 Calendar",description:"점자(braille)와 7-세그먼트 라인으로 월을 표현한 미니멀 캘린더. B5 양면과 B2 포스터로 구성됩니다.",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"복음서 조화, 시편·잠언, 평행 본문 등 한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 낱장과 접지 형태로 고를 수 있습니다.",spec:"B5  ·  낱장 / 접지  ·  주제별"}]},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"혼자보다 함께할 때 신앙은 더 오래 지속됩니다. DoLF의 소모임 이야기"},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"성경 1독 소모임",description:"12주 동안 함께 통독하며 완주를 돕는 소모임입니다."},{title:"QT Circle",subhead:"QT 습관 형성",description:"매일의 묵상을 함께 나누며 QT를 습관으로 만듭니다."},{title:"Faith & Life Circle",subhead:"신앙과 삶",description:"신앙과 일상의 고민을 함께 나누는 공동체입니다."}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"Bible Reading Circle은 12주 프로그램으로 운영되며, 참가비 49,000–99,000원에 트래커 제품이 포함됩니다.",cta:"함께하기 문의"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"제품 문의, 협업, 소모임 참여 — 무엇이든 편하게 연락 주세요."},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"DM 또는 이메일로 문의해 주세요"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"궁금한 점을 남겨 주세요. 확인 후 빠르게 답변 드리겠습니다.",namePlaceholder:"이름",emailPlaceholder:"이메일",messagePlaceholder:"메시지를 입력해 주세요",submit:"보내기",b2bText:"도매 · B2B 파트너십 문의는 별도로 진행됩니다.",b2bCta:"B2B 문의하기"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"신앙을 일상의 루틴으로 — DoLF의 제품을 만나보세요."},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"장바구니에 담겼습니다"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"로그아웃",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"가입하신 계정으로 로그인하세요. 계정 권한에 따라 자동으로 이동합니다.",emailLabel:"이메일",emailPlaceholder:"you@example.com",passwordLabel:"비밀번호",passwordPlaceholder:"비밀번호를 입력하세요",forgotPassword:"비밀번호 찾기",keepLoggedIn:"로그인 상태 유지",submit:"Sign In",notice:"관리자 계정으로 로그인하면 관리자 콘솔로, 일반 회원은 마이페이지로 자동 이동합니다. 별도 선택은 필요 없습니다.",noAccount:"계정이 없으신가요?",signUpLink:"회원가입",notFound:"등록되지 않은 이메일입니다. 시드 계정 또는 가입한 이메일을 사용해 주세요."},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"* 표시는 필수 항목입니다. 해외 회원은 이메일만 입력하면 가입할 수 있어요.",countryLabel:"국가 / 지역 *",nameLabel:"이름 *",namePlaceholder:"이름을 입력하세요",emailLabel:"이메일 *",emailPlaceholder:"you@example.com",phoneLabel:"전화번호 (선택)",phonePlaceholder:"10-0000-0000",passwordLabel:"비밀번호 *",passwordPlaceholder:"8자 이상 입력",passwordConfirmLabel:"비밀번호 확인 *",passwordConfirmPlaceholder:"비밀번호를 다시 입력",terms:"이용약관 및 개인정보 처리방침에 동의합니다.",submit:"Sign Up",hasAccount:"이미 계정이 있으신가요?",signInLink:"로그인"},myPage:{eyebrow:"MY PAGE",greeting:"안녕하세요, {name}님",subhead:"DoLF와 함께한 기록을 한곳에서 관리하세요.",statsOrders:"주문",statsWishlist:"위시리스트",statsSpent:"누적 구매",ordersTitle:"주문 내역",wishlistTitle:"위시리스트",settingsTitle:"계정 설정",settingName:"이름",settingEmail:"이메일",settingPhone:"전화번호",settingAddress:"주소",settingMembership:"멤버십",edit:"수정"}}},g1={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"A day to breathe, to eat, and to follow the cross",body:"A lifestyle brand that weaves faith into your everyday routine",cta:"Discover our story"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"A small dot of each day becomes a line, and lines come together to form a life that walks with God.",items:[{title:"Dot",description:"A small daily practice. Five minutes of quiet time, one chapter of Scripture, one line of gratitude."},{title:"Line",description:"Small practices, repeated, become habits — and habits become a sustainable routine."},{title:"Form",description:"Habits build up into the shape of a life — a life that walks with God."}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:"In the beginning, God shaped life that started from a single dot. That life was drawn into a line, revealed in light, and finally restored into a single form. DoLF walks this journey of restoration alongside you, through the small practices of everyday life.",closing:["A story of life that begins with a dot,","a journey of faith drawn into a line,","the image of God revealed in light."]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"Our flagship planner for recording faith and everyday life together"},{name:"Bible Reading Tracker",description:"A recording tool that brings your Bible reading journey into view at a glance"},{name:"2027 Calendar",description:"A minimal calendar expressed through braille and seven-segment lines"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"The story of DoLF, a lifestyle brand that weaves faith into your everyday routine"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"For many people, faith falters not because they lack willpower, but because they lack the tools and experiences that turn faith into a daily routine. DoLF helps small daily practices become habits, and habits become the shape of a life."},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"To weave faith into the everyday routine",description:"We help faith become a daily habit rather than a resolution made in special moments."},{label:"Vision",subhead:"A life walking with God, sustained as a lasting habit",description:"We dream of a faith-driven lifestyle where small practices add up and change the direction of a life."}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"Faith is where DoLF begins."},{label:"Consistency",description:"We value consistency over perfection."},{label:"Simplicity",description:"Good habits begin with simplicity."},{label:"Growth",description:"We cherish the process of growth over results."},{label:"Community",description:"Change lasts longer when we walk together."}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"DoLF's products that turn faith into a daily routine"},features:[{name:"Breathe — Planner & Diary",description:"DoLF's flagship planner that lets you plan your day while recording gratitude, meditation, and reflection — carrying your relationship with God through everyday life.",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"One verse as a single dot. A recording tool that visually completes the reading journey as dots gather into lines, and lines into a whole.",spec:"B5  ·  120P"},{name:"2027 Calendar",description:"A minimal calendar that expresses each month through braille and seven-segment lines. Available as a B5 double-sided sheet and a B2 poster.",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"A single-page reading tracker for following one theme in depth — gospel harmonies, Psalms and Proverbs, parallel passages, and more. Available as a single sheet or a folded format.",spec:"B5  ·  SINGLE / FOLDED  ·  BY THEME"}]},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"Faith lasts longer together than alone. The story of DoLF circles."},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"Read the Bible together",description:"A circle that reads through Scripture together over 12 weeks and helps you finish the journey."},{title:"QT Circle",subhead:"Building the quiet time habit",description:"Share daily meditations together and turn quiet time into a habit."},{title:"Faith & Life Circle",subhead:"Faith and life",description:"A community for sharing the questions of faith and everyday life together."}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"The Bible Reading Circle runs as a 12-week program. The participation fee of 49,000–99,000 KRW includes a tracker product.",cta:"Inquire about joining"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"Product inquiries, collaborations, joining a circle — reach out about anything."},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"Reach us by DM or email"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"Leave us your question. We will review it and get back to you quickly.",namePlaceholder:"Name",emailPlaceholder:"Email",messagePlaceholder:"Enter your message",submit:"Send",b2bText:"Wholesale and B2B partnership inquiries are handled separately.",b2bCta:"B2B inquiry"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"Faith as a daily routine — explore the products of DoLF."},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"Added to your cart"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"Log Out",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"Sign in with your account. You will be routed automatically based on your account permissions.",emailLabel:"Email",emailPlaceholder:"you@example.com",passwordLabel:"Password",passwordPlaceholder:"Enter your password",forgotPassword:"Forgot password",keepLoggedIn:"Keep me logged in",submit:"Sign In",notice:"Sign in with an admin account to go to the admin console, or with a member account to go to My Page. No separate selection is needed.",noAccount:"Don't have an account?",signUpLink:"Sign up",notFound:"This email is not registered. Please use a seed account or the email you signed up with."},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"Fields marked * are required. International members can sign up with just an email.",countryLabel:"Country / Region *",nameLabel:"Name *",namePlaceholder:"Enter your name",emailLabel:"Email *",emailPlaceholder:"you@example.com",phoneLabel:"Phone (optional)",phonePlaceholder:"10-0000-0000",passwordLabel:"Password *",passwordPlaceholder:"At least 8 characters",passwordConfirmLabel:"Confirm password *",passwordConfirmPlaceholder:"Re-enter your password",terms:"I agree to the Terms of Service and Privacy Policy.",submit:"Sign Up",hasAccount:"Already have an account?",signInLink:"Sign in"},myPage:{eyebrow:"MY PAGE",greeting:"Hello, {name}",subhead:"Manage everything you have done with DoLF in one place.",statsOrders:"Orders",statsWishlist:"Wishlist",statsSpent:"Total Spent",ordersTitle:"Order History",wishlistTitle:"Wishlist",settingsTitle:"Account Settings",settingName:"Name",settingEmail:"Email",settingPhone:"Phone",settingAddress:"Address",settingMembership:"Membership",edit:"Edit"}}},y1={nav:{about:"About",products:"Products",community:"Community",contact:"Contact",shop:"Shop"},hero:{tagline:"dot of line and form",title:`A day to breathe, eat,
and follow the cross.`,subhead:"呼吸し、食べ、十字架に従う一日",body:"信仰を日常のルーティンへとつなぐライフスタイルブランド",cta:"ブランドストーリーを見る"},philosophy:{eyebrow:"PHILOSOPHY",title:"Dot. Line. Form.",intro:"一日の小さな点（Dot）が線（Line）になり、線が集まって神とともに歩む人生の形（Form）になります。",items:[{title:"Dot",description:"一日の小さな実践。QT5分、聖書1章、感謝のひと言。"},{title:"Line",description:"小さな実践が繰り返されて習慣となり、続けられるルーティンになります。"},{title:"Form",description:"習慣が積み重なって人生の形となり、神とともに歩む人生になります。"}]},story:{eyebrow:"OUR STORY",title:"This is the story of DoLF",body:"初めに、神は点から始まる命を造られました。その命は線へとつながり、光となって現れ、ついには一つの形（form）へと回復されます。DoLFは、この回復の旅路を日常の小さな実践とともに歩んでいきたいと考えています。",closing:["点から始まった命の物語、","線へとつながる信仰の旅路、","光となって現れる神の形。"]},products:{eyebrow:"PRODUCTS",title:"Our Products",items:[{name:"Breathe Planner & Diary",description:"信仰と日常をともに記録するフラッグシッププランナー"},{name:"Bible Reading Tracker",description:"聖書通読をひと目で可視化する記録ツール"},{name:"2027 Calendar",description:"点字と7セグメントで表現したミニマルカレンダー"}]},footer:{tagline:"dot of line and form",instagram:"@dolf._official",copyright:"© 2026 DoLF. All rights reserved."},about:{hero:{eyebrow:"ABOUT",title:"Faith, woven into the everyday",subhead:"信仰を日常のルーティンへとつなぐライフスタイルブランド、DoLFの物語"},why:{eyebrow:"WHY DoLF",title:"Not willpower, but rhythm",body:"多くの人が信仰を続けられないのは、意志が足りないからではありません。信仰を日常のルーティンにしてくれる道具と経験が足りないからです。DoLFは、毎日の小さな実践が習慣となり、習慣が人生の形になるよう手助けします。"},missionVision:{eyebrow:"MISSION & VISION",items:[{label:"Mission",subhead:"信仰を日常のルーティンへとつなぐ",description:"信仰が特別な瞬間の決意ではなく、毎日の習慣となるよう手助けします。"},{label:"Vision",subhead:"神とともに歩む人生を、続けられる習慣へ",description:"小さな実践が積み重なり、人生の方向を変える信仰ライフスタイルを夢見ています。"}]},coreValues:{eyebrow:"CORE VALUES",title:"What we believe",items:[{label:"Faith",description:"信仰はDoLFの出発点です。"},{label:"Consistency",description:"完璧さよりも継続を大切にします。"},{label:"Simplicity",description:"シンプルさから良い習慣が始まります。"},{label:"Growth",description:"結果よりも成長の過程を大切にします。"},{label:"Community",description:"共に歩むとき、変化はより長く続きます。"}]}},productsPage:{hero:{eyebrow:"PRODUCTS",title:"Tools for a faithful routine",subhead:"信仰を日常のルーティンにしてくれるDoLFの製品たち"},features:[{name:"Breathe — Planner & Diary",description:"一日を計画すると同時に、感謝・黙想・省察を記録し、神との関係を日常の中で育んでいくDoLFのフラッグシッププランナーです。",spec:"B5  ·  128P  ·  LAY-FLAT"},{name:"Bible Reading Tracker",description:"1節を一つの点（Dot）に。点が集まって線となり、面となる通読の旅路を視覚的に完成させる記録ツールです。",spec:"B5  ·  120P"},{name:"2027 Calendar",description:"点字（braille）と7セグメントのラインで月を表現したミニマルカレンダー。B5両面とB2ポスターで構成されます。",spec:"B5 DOUBLE-SIDE  ·  B2 POSTER"},{name:"Topical Reading Tracker",description:"福音書の調和、詩篇・箴言、並行箇所など、一つのテーマを深く追って読む1枚の通読トラッカーです。一枚もの、または折りたたみ形式からお選びいただけます。",spec:"B5  ·  一枚もの / 折りたたみ  ·  テーマ別"}]},community:{hero:{eyebrow:"COMMUNITY",title:"Grow together, stay longer",subhead:"一人よりも共に歩むとき、信仰はより長く続きます。DoLFの小グループの物語"},circles:{eyebrow:"CIRCLES",items:[{title:"Bible Reading Circle",subhead:"聖書通読の小グループ",description:"12週間にわたって共に通読し、完走をサポートする小グループです。"},{title:"QT Circle",subhead:"QT習慣づくり",description:"毎日の黙想を分かち合いながら、QTを習慣にしていきます。"},{title:"Faith & Life Circle",subhead:"信仰と生活",description:"信仰と日常の悩みを共に分かち合うコミュニティです。"}]},program:{eyebrow:"PROGRAM",title:"Start your 12 weeks",body:"Bible Reading Circleは12週間のプログラムとして運営され、参加費49,000〜99,000ウォンにトラッカー製品が含まれます。",cta:"参加のお問い合わせ"}},contact:{hero:{eyebrow:"CONTACT",title:"Let's stay in touch",subhead:"製品のお問い合わせ、コラボレーション、小グループへの参加 — どんなことでもお気軽にご連絡ください。"},info:[{label:"Instagram",value:"@dolf._official"},{label:"Shop",value:"Etsy (B2C) · Faire (B2B)"},{label:"Inquiry",value:"DMまたはメールでお問い合わせください"}],form:{eyebrow:"GET IN TOUCH",title:"Ask us anything",body:"ご質問をお寄せください。確認のうえ、迅速にお返事いたします。",namePlaceholder:"お名前",emailPlaceholder:"メールアドレス",messagePlaceholder:"メッセージをご入力ください",submit:"送信",b2bText:"卸売・B2Bパートナーシップのお問い合わせは別途承ります。",b2bCta:"B2Bのお問い合わせ"}},shop:{hero:{eyebrow:"SHOP",title:"Shop DoLF",subhead:"信仰を日常のルーティンへ — DoLFの製品をご覧ください。"},addToCart:"Add to Cart",buyNow:"Buy Now",cart:"Cart",added:"カートに追加しました"},account:{signInNav:"Sign In",myPageNav:"My Page",logout:"ログアウト",signIn:{eyebrow:"WELCOME BACK",title:"Sign in to DoLF",subhead:"ご登録のアカウントでログインしてください。アカウント権限に応じて自動的に移動します。",emailLabel:"メールアドレス",emailPlaceholder:"you@example.com",passwordLabel:"パスワード",passwordPlaceholder:"パスワードをご入力ください",forgotPassword:"パスワードをお忘れの方",keepLoggedIn:"ログイン状態を保持",submit:"Sign In",notice:"管理者アカウントでログインすると管理者コンソールへ、一般会員はマイページへ自動的に移動します。別途の選択は必要ありません。",noAccount:"アカウントをお持ちでないですか？",signUpLink:"会員登録",notFound:"登録されていないメールアドレスです。シードアカウント、またはご登録のメールアドレスをご利用ください。"},signUp:{eyebrow:"GET STARTED",title:"Create your account",subhead:"* 印は必須項目です。海外の会員はメールアドレスのみで登録できます。",countryLabel:"国 / 地域 *",nameLabel:"お名前 *",namePlaceholder:"お名前をご入力ください",emailLabel:"メールアドレス *",emailPlaceholder:"you@example.com",phoneLabel:"電話番号（任意）",phonePlaceholder:"10-0000-0000",passwordLabel:"パスワード *",passwordPlaceholder:"8文字以上でご入力ください",passwordConfirmLabel:"パスワード確認 *",passwordConfirmPlaceholder:"パスワードを再度ご入力ください",terms:"利用規約およびプライバシーポリシーに同意します。",submit:"Sign Up",hasAccount:"すでにアカウントをお持ちですか？",signInLink:"ログイン"},myPage:{eyebrow:"MY PAGE",greeting:"こんにちは、{name}さん",subhead:"DoLFとともに歩んだ記録を一か所で管理しましょう。",statsOrders:"注文",statsWishlist:"ウィッシュリスト",statsSpent:"累計購入額",ordersTitle:"注文履歴",wishlistTitle:"ウィッシュリスト",settingsTitle:"アカウント設定",settingName:"お名前",settingEmail:"メールアドレス",settingPhone:"電話番号",settingAddress:"住所",settingMembership:"メンバーシップ",edit:"編集"}}},x1={ko:m1,en:g1,ja:y1},Ug=T.createContext(null);function _e(){const n=T.useContext(Ug);if(!n)throw new Error("useLocale must be used within a LocaleProvider");return n}const Hg=T.createContext(null);function Hu(){const n=T.useContext(Hg);if(!n)throw new Error("useCart must be used within a CartProvider");return n}const qg=T.createContext(null);function Ra(){const n=T.useContext(qg);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}const b1=["en","ko","ja"];function v1(){const{t:n,locale:o,setLocale:s}=_e(),{count:u}=Hu(),{user:f}=Ra(),m=f?{to:f.role==="admin"?"/admin":"/mypage",label:n.account.myPageNav}:{to:"/signin",label:n.account.signInNav},x=[{label:n.nav.about,to:"/about"},{label:n.nav.products,to:"/products"},{label:n.nav.community,to:"/community"},{label:n.nav.contact,to:"/contact"},{label:n.nav.shop,to:"/shop"}];return r.jsx(E1,{children:r.jsxs(T1,{children:[r.jsx(R1,{to:"/",children:"DoLF"}),r.jsx(z1,{children:x.map(j=>r.jsx(A1,{to:j.to,children:j.label},j.to))}),r.jsxs(S1,{children:[r.jsx(C1,{children:b1.map(j=>r.jsx(D1,{type:"button",$active:o===j,onClick:()=>s(j),children:j.toUpperCase()},j))}),r.jsx($1,{to:m.to,children:m.label}),r.jsxs(j1,{to:"/shop",children:[n.shop.cart,u>0&&r.jsx(w1,{children:u})]})]})]})})}const S1=h.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,j1=h(st)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brandRed};
  }
`,$1=h(st)`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brandRed};
  }
`,w1=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0;
`,E1=h.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({theme:n})=>n.colors.cream};
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,T1=h(xe)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
`,R1=h(st)`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: ${({theme:n})=>n.colors.ink};
`,z1=h.nav`
  display: flex;
  gap: 36px;
`,A1=h(st)`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.ink};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.brandRed};
  }
`,C1=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,D1=h.button`
  border: none;
  background: none;
  padding: 0;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.textSecondary};
  font-weight: ${({$active:n})=>n?600:400};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.ink};
  }
`;function O1(){const{t:n}=_e(),o=[{label:n.nav.about,to:"/about"},{label:n.nav.products,to:"/products"},{label:n.nav.community,to:"/community"},{label:n.nav.contact,to:"/contact"},{label:n.nav.shop,to:"/shop"}];return r.jsx(M1,{children:r.jsxs(B1,{children:[r.jsxs(_1,{children:[r.jsxs(N1,{children:[r.jsx(k1,{children:"DoLF"}),r.jsx(L1,{children:n.footer.tagline})]}),r.jsxs(U1,{children:[r.jsxs(H1,{children:["Instagram ",n.footer.instagram]}),r.jsx(q1,{children:o.map(s=>r.jsx(G1,{to:s.to,children:s.label},s.to))})]})]}),r.jsx(Y1,{}),r.jsx(Q1,{children:n.footer.copyright})]})})}const M1=h.footer`
  background-color: ${({theme:n})=>n.colors.ink};
  color: ${({theme:n})=>n.colors.white};
`,B1=h(xe)`
  padding-top: 56px;
  padding-bottom: 40px;
`,_1=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
`,N1=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,k1=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
`,L1=h.span`
  font-family: ${({theme:n})=>n.fonts.script};
  font-size: 24px;
  color: ${({theme:n})=>n.colors.brandRed};
`,U1=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`,H1=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  color: rgba(255, 255, 255, 0.7);
`,q1=h.nav`
  display: flex;
  gap: 24px;
`,G1=h(st)`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.white};
  }
`,Y1=h.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 32px 0 20px;
`,Q1=h.p`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.5);
`;function V1(){return r.jsxs(r.Fragment,{children:[r.jsx(v1,{}),r.jsx("main",{children:r.jsx(_g,{})}),r.jsx(O1,{})]})}const Gg=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border: none;
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;function X1(){const{t:n}=_e();return r.jsx(Z1,{children:r.jsxs(K1,{children:[r.jsx(F1,{children:n.hero.tagline}),r.jsx(J1,{children:n.hero.title}),r.jsx(P1,{children:n.hero.subhead}),r.jsx(W1,{children:n.hero.body}),r.jsx(Gg,{type:"button",children:n.hero.cta})]})})}const Z1=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,K1=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 96px;
  padding-bottom: 112px;
`,F1=h.p`
  font-family: ${({theme:n})=>n.fonts.script};
  font-size: 30px;
  color: ${({theme:n})=>n.colors.brandRed};
  margin-bottom: 12px;
`,J1=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h1};
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 1.12;
  color: ${({theme:n})=>n.colors.ink};
  white-space: pre-line;
  margin-bottom: 28px;
`,P1=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:n})=>n.colors.ink};
  margin-bottom: 12px;
`,W1=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-bottom: 36px;
`,Ze=h.span`
  display: block;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.brandRed};
`,Tn=h.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
  line-height: 1.2;
`,I1="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3ccircle%20id='Ellipse'%20cx='44'%20cy='28'%20r='8'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",eS="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3crect%20id='Rectangle'%20x='12'%20y='27'%20width='64'%20height='2'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse'%20cx='17'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_2'%20cx='44'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_3'%20cx='71'%20cy='28'%20r='5'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",tS="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2088%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='motif'%3e%3ccircle%20id='Ellipse'%20cx='34'%20cy='18'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_2'%20cx='54'%20cy='18'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_3'%20cx='34'%20cy='38'%20r='6'%20fill='var(--fill-0,%20%231F1F21)'/%3e%3ccircle%20id='Ellipse_4'%20cx='54'%20cy='38'%20r='6'%20fill='var(--fill-0,%20%23A81212)'/%3e%3c/g%3e%3c/svg%3e",nS=[I1,eS,tS];function lS(){const{t:n}=_e();return r.jsx(aS,{children:r.jsxs(iS,{children:[r.jsxs(oS,{children:[r.jsx(Ze,{children:n.philosophy.eyebrow}),r.jsx(Tn,{children:n.philosophy.title}),r.jsx(rS,{children:n.philosophy.intro})]}),r.jsx(cS,{children:n.philosophy.items.map((o,s)=>r.jsxs(sS,{children:[r.jsx(uS,{src:nS[s],alt:"","aria-hidden":!0}),r.jsx(fS,{children:o.title}),r.jsx(dS,{children:o.description})]},o.title))})]})})}const aS=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,iS=h(xe)`
  padding-top: 96px;
  padding-bottom: 96px;
`,oS=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  max-width: 720px;
  margin: 0 auto 64px;
`,rS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`,cS=h.div`
  display: flex;
  gap: 32px;
  max-width: 1040px;
  margin: 0 auto;
`,sS=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`,uS=h.img`
  width: 88px;
  height: 56px;
  object-fit: contain;
`,fS=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,dS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function hS(){const{t:n}=_e();return r.jsx(pS,{children:r.jsxs(mS,{children:[r.jsx(Ze,{children:n.story.eyebrow}),r.jsx(Tn,{children:n.story.title}),r.jsx(gS,{children:n.story.body}),r.jsx(yS,{children:n.story.closing.map(o=>r.jsx("span",{children:o},o))})]})})}const pS=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,mS=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: 720px;
  padding-top: 104px;
  padding-bottom: 104px;
`,gS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.85;
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-top: 8px;
`,yS=h.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.6;
  color: ${({theme:n})=>n.colors.ink};
  margin-top: 12px;
`,xS="/dolf/assets/hero-ChOiTWCF.png",bS="/dolf/assets/hero-CJSOf2Pk.png",vS="/dolf/assets/hero-DTWScntO.png",SS=[xS,bS,vS];function jS(){const{t:n}=_e();return r.jsx($S,{children:r.jsxs(wS,{children:[r.jsxs(ES,{children:[r.jsx(Ze,{children:n.products.eyebrow}),r.jsx(Tn,{children:n.products.title})]}),r.jsx(TS,{children:n.products.items.map((o,s)=>r.jsxs(RS,{children:[r.jsx(zS,{children:r.jsx(AS,{src:SS[s],alt:o.name})}),r.jsx(CS,{children:o.name}),r.jsx(DS,{children:o.description})]},o.name))})]})})}const $S=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,wS=h(xe)`
  padding-top: 96px;
  padding-bottom: 104px;
`,ES=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  margin-bottom: 56px;
`,TS=h.div`
  display: flex;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
`,RS=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,zS=h.div`
  width: 100%;
  height: 494px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
  margin-bottom: 20px;
`,AS=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,CS=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
  margin-bottom: 8px;
`,DS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.7;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function OS(){return r.jsxs(r.Fragment,{children:[r.jsx(X1,{}),r.jsx(lS,{}),r.jsx(hS,{}),r.jsx(jS,{})]})}function MS(){const{t:n}=_e();return r.jsx(BS,{children:r.jsxs(_S,{children:[r.jsx(Ze,{children:n.about.hero.eyebrow}),r.jsx(NS,{children:n.about.hero.title}),r.jsx(kS,{children:n.about.hero.subhead})]})})}const BS=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,_S=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 72px;
`,NS=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:n})=>n.colors.ink};
`,kS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function LS(){const{t:n}=_e();return r.jsx(US,{children:r.jsxs(HS,{children:[r.jsx(Ze,{children:n.about.why.eyebrow}),r.jsx(Tn,{children:n.about.why.title}),r.jsx(qS,{children:n.about.why.body})]})})}const US=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,HS=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: calc(760px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;
`,qS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function GS(){const{t:n}=_e();return r.jsx(YS,{children:r.jsxs(QS,{children:[r.jsx(VS,{children:n.about.missionVision.eyebrow}),r.jsx(XS,{children:n.about.missionVision.items.map(o=>r.jsxs(ZS,{children:[r.jsx(KS,{children:o.label}),r.jsx(FS,{children:o.subhead}),r.jsx(JS,{children:o.description})]},o.label))})]})})}const YS=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,QS=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-top: 96px;
  padding-bottom: 96px;
`,VS=h(Ze)`
  text-align: center;
`,XS=h.div`
  display: flex;
  gap: 48px;
  width: 100%;
  max-width: 980px;
`,ZS=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,KS=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:n})=>n.colors.brandRed};
`,FS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:n})=>n.colors.ink};
`,JS=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function PS(){const{t:n}=_e();return r.jsx(WS,{children:r.jsxs(IS,{children:[r.jsxs(e2,{children:[r.jsx(Ze,{children:n.about.coreValues.eyebrow}),r.jsx(Tn,{children:n.about.coreValues.title})]}),r.jsx(t2,{children:n.about.coreValues.items.map(o=>r.jsxs(n2,{children:[r.jsx(l2,{children:o.label}),r.jsx(a2,{children:o.description})]},o.label))})]})})}const WS=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,IS=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 104px;
`,e2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,t2=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;
`,n2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,l2=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,a2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function i2(){return r.jsxs(r.Fragment,{children:[r.jsx(MS,{}),r.jsx(LS,{}),r.jsx(GS,{}),r.jsx(PS,{})]})}function o2(){const{t:n}=_e();return r.jsx(r2,{children:r.jsxs(c2,{children:[r.jsx(Ze,{children:n.productsPage.hero.eyebrow}),r.jsx(s2,{children:n.productsPage.hero.title}),r.jsx(u2,{children:n.productsPage.hero.subhead})]})})}const r2=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,c2=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;
`,s2=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:n})=>n.colors.ink};
`,u2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function f2({imageSide:n,background:o,name:s,description:u,spec:f,image:m}){return r.jsx(d2,{$background:o,children:r.jsxs(h2,{$imageRight:n==="right",children:[r.jsx(p2,{children:r.jsx(m2,{src:m,alt:s})}),r.jsxs(g2,{children:[r.jsx(y2,{children:s}),r.jsx(x2,{children:u}),r.jsx(b2,{children:f})]})]})})}const d2=h.section`
  background-color: ${({theme:n,$background:o})=>n.colors[o]};
`,h2=h.div`
  display: flex;
  flex-direction: ${({$imageRight:n})=>n?"row-reverse":"row"};
  align-items: center;
  gap: 72px;
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 96px;
`,p2=h.div`
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,m2=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,g2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,y2=h.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h2};
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme:n})=>n.colors.ink};
`,x2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`,b2=h.p`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  letter-spacing: 0.4px;
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-top: 8px;
`,v2="/dolf/assets/hero-ChOiTWCF.png",S2="/dolf/assets/hero-CJSOf2Pk.png",j2="/dolf/assets/hero-DTWScntO.png",$2="/dolf/assets/hero-IAGVR8nw.png",w2=[v2,S2,j2,$2],E2=["cream","surface","cream","cream"];function T2(){const{t:n}=_e();return r.jsxs(r.Fragment,{children:[r.jsx(o2,{}),n.productsPage.features.map((o,s)=>r.jsx(f2,{imageSide:s%2===0?"left":"right",background:E2[s],name:o.name,description:o.description,spec:o.spec,image:w2[s]},o.name))]})}function R2(){const{t:n}=_e();return r.jsx(z2,{children:r.jsxs(A2,{children:[r.jsx(Ze,{children:n.community.hero.eyebrow}),r.jsx(C2,{children:n.community.hero.title}),r.jsx(D2,{children:n.community.hero.subhead})]})})}const z2=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,A2=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;
`,C2=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:n})=>n.colors.ink};
`,D2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function O2(){const{t:n}=_e();return r.jsx(M2,{children:r.jsxs(B2,{children:[r.jsx(_2,{children:n.community.circles.eyebrow}),r.jsx(N2,{children:n.community.circles.items.map(o=>r.jsxs(k2,{children:[r.jsx(L2,{children:o.title}),r.jsx(U2,{children:o.subhead}),r.jsx(H2,{children:o.description})]},o.title))})]})})}const M2=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,B2=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-top: 88px;
  padding-bottom: 88px;
`,_2=h(Ze)`
  text-align: center;
`,N2=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1120px;
`,k2=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 3px;
  padding: 36px 32px;
`,L2=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,U2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.textSecondary};
`,H2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function q2(){const{t:n}=_e();return r.jsx(G2,{children:r.jsxs(Y2,{children:[r.jsx(Ze,{children:n.community.program.eyebrow}),r.jsx(Tn,{children:n.community.program.title}),r.jsx(Q2,{children:n.community.program.body}),r.jsx(Gg,{type:"button",children:n.community.program.cta})]})})}const G2=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,Y2=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 96px;
  padding-bottom: 104px;
`,Q2=h.p`
  max-width: 640px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-bottom: 14px;
`;function V2(){return r.jsxs(r.Fragment,{children:[r.jsx(R2,{}),r.jsx(O2,{}),r.jsx(q2,{})]})}function X2(){const{t:n}=_e();return r.jsx(Z2,{children:r.jsxs(K2,{children:[r.jsx(Ze,{children:n.contact.hero.eyebrow}),r.jsx(F2,{children:n.contact.hero.title}),r.jsx(J2,{children:n.contact.hero.subhead})]})})}const Z2=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,K2=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 64px;
`,F2=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:n})=>n.colors.ink};
`,J2=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function P2(){const{t:n}=_e();return r.jsx(W2,{children:r.jsx(I2,{children:r.jsx(ej,{children:n.contact.info.map(o=>r.jsxs(tj,{children:[r.jsx(nj,{children:o.label}),r.jsx(lj,{children:o.value})]},o.label))})})})}const W2=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,I2=h(xe)`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`,ej=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`,tj=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`,nj=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:n})=>n.colors.brandRed};
`,lj=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function aj(){const{t:n}=_e(),[o,s]=T.useState(""),[u,f]=T.useState(""),[m,x]=T.useState(""),j=y=>{y.preventDefault()};return r.jsx(ij,{children:r.jsxs(oj,{children:[r.jsxs(rj,{children:[r.jsx(Ze,{children:n.contact.form.eyebrow}),r.jsx(Tn,{children:n.contact.form.title}),r.jsx(cj,{children:n.contact.form.body})]}),r.jsxs(sj,{onSubmit:j,children:[r.jsx(dm,{type:"text",placeholder:n.contact.form.namePlaceholder,value:o,onChange:y=>s(y.target.value)}),r.jsx(dm,{type:"email",placeholder:n.contact.form.emailPlaceholder,value:u,onChange:y=>f(y.target.value)}),r.jsx(uj,{placeholder:n.contact.form.messagePlaceholder,value:m,onChange:y=>x(y.target.value)}),r.jsx(fj,{type:"submit",children:n.contact.form.submit})]}),r.jsxs(dj,{children:[r.jsx(hj,{children:n.contact.form.b2bText}),r.jsx(pj,{type:"button",children:n.contact.form.b2bCta})]})]})})}const ij=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,oj=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-top: 96px;
  padding-bottom: 96px;
`,rj=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
`,cj=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`,sj=h.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 560px;
`,Yg=`
  border-radius: 4px;
  padding: 15px 18px;
  font-size: 15px;
  width: 100%;
`,dm=h.input`
  ${Yg}
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  font-family: ${({theme:n})=>n.fonts.kr};
  color: ${({theme:n})=>n.colors.ink};

  &::placeholder {
    color: ${({theme:n})=>n.colors.textSecondary};
  }
`,uj=h.textarea`
  ${Yg}
  height: 130px;
  resize: vertical;
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  font-family: ${({theme:n})=>n.fonts.kr};
  color: ${({theme:n})=>n.colors.ink};

  &::placeholder {
    color: ${({theme:n})=>n.colors.textSecondary};
  }
`,fj=h.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,dj=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
`,hj=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`,pj=h.button`
  padding: 14px 32px;
  background: none;
  border: 1px solid ${({theme:n})=>n.colors.ink};
  border-radius: 4px;
  color: ${({theme:n})=>n.colors.ink};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:n})=>n.colors.ink};
    color: ${({theme:n})=>n.colors.white};
  }
`;function mj(){return r.jsxs(r.Fragment,{children:[r.jsx(X2,{}),r.jsx(P2,{}),r.jsx(aj,{})]})}const gj="/dolf/assets/hero-ChOiTWCF.png",yj="/dolf/assets/hero-ChOiTWCF.png",xj="/dolf/assets/inside-monthly-BmFW1NlQ.png",bj="/dolf/assets/inside-weekly-DnOtp2S6.png",vj="/dolf/assets/inside-daily-Du0Ihun5.png",Sj="/dolf/assets/page1-C0wrA_x3.png",jj="/dolf/assets/page2-C_yOt3O2.png",$j="/dolf/assets/page3-DIeuC41j.png",wj="/dolf/assets/page4-B2_sygYv.png",Ej="/dolf/assets/page5-CQFDNZrq.png",Tj="/dolf/assets/page6-CcqjQoor.png",Rj="/dolf/assets/hero-CJSOf2Pk.png",zj="/dolf/assets/hero-DTWScntO.png",Aj={slug:"breathe",catalogImage:gj,catalogName:"Breathe — Planner & Diary",catalogPrice:"$38",hero:{gallery:[yj],title:"Breathe",subtitle:"Planner & Diary — 신앙과 일상을 함께 기록하는 플래너",price:"$38",description:"하루를 계획하는 동시에 감사·묵상·성찰을 기록할 수 있도록 설계된 루틴 플래너입니다. 완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 돕습니다.",specLines:["B5 · 176 × 250mm","128 페이지","Lay-flat 제본"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why Breathe",paragraphs:["Breathe는 단순한 일정 관리 도구가 아닙니다. 하루를 계획하는 동시에 하나님을 기억하고, 삶을 돌아보며, 작은 감사와 묵상을 기록할 수 있도록 설계된 루틴 플래너입니다.","완벽한 계획보다 하루를 의미 있게 살아가는 데 집중하도록 만들었습니다. 매일의 작은 기록이 쌓여 신앙과 일상이 자연스럽게 연결되는 경험을 선물합니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"Monthly",image:xj},{caption:"Weekly",image:bj},{caption:"Daily",image:vj}]},features:{eyebrow:"WHAT'S INSIDE",title:"Designed for your day",items:[{title:"Monthly",desc:"한 달의 흐름을 한눈에"},{title:"Weekly",desc:"주간 계획과 루틴"},{title:"Daily",desc:"하루를 의미 있게"},{title:"Sermon Note",desc:"말씀과 설교 기록"},{title:"Reflection",desc:"하루를 돌아보는 성찰"},{title:"Gratitude",desc:"감사 한 줄의 기록"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every page has a reason",intro:"모든 페이지에는 이유가 있습니다. 각 속지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.",items:[{title:"Dot of Line and Form",desc:"다이어리의 첫 장은 하나의 점(Dot)과 DoLF 로고로 시작합니다. QR 코드로 인스타그램과 연결되어 브랜드의 이야기로 이어집니다.",usage:"어떻게 쓰나요 — 한 해를 시작하며 점·선·형(Dot·Line·Form)의 철학을 떠올리며 펼쳐보세요.",image:Sj},{title:"One line a day",desc:"작은 점이 선이 된다는 믿음에서 출발한 트래커입니다. 하루 한 줄의 기록이 쌓여 습관이 됩니다 — Turn your days from − to +.",usage:"어떻게 쓰나요 — 매일 한 칸씩 한 줄로 하루를 기록하세요. − 였던 하루가 + 로 바뀌는 것을 보게 됩니다.",image:jj},{title:"Monthly",desc:"한 달의 흐름을 한눈에 봅니다. 약속과 계획, 그리고 신앙의 리듬을 월 단위로 그립니다.",usage:"어떻게 쓰나요 — 매달 시작에 주요 일정과 QT·예배 계획을 함께 적어보세요.",image:$j},{title:"Weekly",desc:"7am부터 11pm까지 이어지는 시간축은 하루를 의도적으로 설계하게 합니다. 생산성과 신앙을 하나의 흐름 안에 둡니다.",usage:"어떻게 쓰나요 — 한 주의 일정과 QT·기도 시간을 함께 계획하세요.",image:wj},{title:"Daily QT",desc:"the Word · Question · Reflect · Apply · Pray의 흐름으로 매일의 묵상을 기록합니다. 말씀이 하루의 삶에 적용되도록 설계했습니다.",usage:"어떻게 쓰나요 — 말씀을 적고, 질문하고, 묵상하고, 삶에 적용하고, 기도로 마무리하세요.",image:Ej},{title:"Man does not live on bread alone",desc:"'사람이 떡으로만 살 것이 아니라 하나님의 입으로 나오는 모든 말씀으로 산다'(신명기 8:3). 말씀이 다이어리의 중심임을 기억하게 합니다.",usage:"어떻게 쓰나요 — 한 챕터를 시작할 때 이 말씀을 떠올리며 하루를 시작하세요.",image:Tj}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Plan",desc:"Monthly · Weekly로 하루와 한 주를 계획하세요."},{num:"02",title:"Reflect",desc:"Daily에 말씀과 묵상, 감사를 기록하세요."},{num:"03",title:"Grow",desc:"매일의 작은 점이 모여 신앙 습관이 됩니다."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"128 페이지"},{label:"Binding",value:"Lay-flat 사철 제본"},{label:"Paper",value:"미색 모조지"},{label:"Layout",value:"Monthly · Weekly · Daily · Sermon · Reflection · Gratitude"},{label:"Dating",value:"Undated — 원하는 날부터 시작"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Rj,title:"Bible Reading Tracker",desc:"성경 통독을 한눈에 시각화하는 기록 도구"},{image:zj,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},Cj="/dolf/assets/hero-CJSOf2Pk.png",Dj="/dolf/assets/hero-CJSOf2Pk.png",Oj="/dolf/assets/inside-new-testament-DbbLiCN0.png",hm="/dolf/assets/inside-chapter-DxxLVUX4.png",pm="/dolf/assets/inside-verse-BBGMusky.png",Mj="/dolf/assets/page-before-4bkd9rzr.png",Bj="/dolf/assets/page-read-dots-DfIaByAP.png",_j="/dolf/assets/page-visual-map-BdHr_7el.png",Nj="/dolf/assets/hero-ChOiTWCF.png",kj="/dolf/assets/hero-DTWScntO.png",Lj={slug:"tracker",catalogImage:Cj,catalogName:"Bible Reading Tracker",catalogPrice:"$30",hero:{gallery:[Dj],title:"Bible Reading Tracker",subtitle:"Reading Tracker — 성경 통독을 한눈에 시각화하는 기록 도구",price:"$30",description:"1절을 하나의 점(Dot)으로 기록합니다. 점이 모여 선이 되고 면이 되는 통독의 여정을 시각적으로 완성하며, 완주를 향한 동기를 지속시킵니다.",specLines:["B5 · 176 × 250mm","120 페이지","성경 66권 전체"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Tracker",paragraphs:["Bible Reading Tracker는 단순한 통독표가 아닙니다. 성경을 읽게 만드는 것이 아니라, 읽기를 지속하게 만드는 데 집중합니다.","1절을 하나의 점(Dot)으로 표현해, 읽을수록 점이 채워지고 데이터 아트처럼 나만의 통독 여정이 완성됩니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"New Testament",image:Oj},{caption:"Chapter Tracker",image:hm},{caption:"Verse Tracker",image:pm}]},features:{eyebrow:"WHAT'S INSIDE",title:"Built for the whole journey",items:[{title:"Verse Check",desc:"절 단위로 체크"},{title:"Progress",desc:"진행률 시각화"},{title:"66 Books",desc:"성경 66권 전체"},{title:"By Genre",desc:"장르별 통독 흐름"},{title:"Data Art",desc:"점이 모여 만드는 데이터 아트"},{title:"Achievement",desc:"완주의 성취감"}]},pagesExplained:{eyebrow:"DESIGNED WITH INTENT",title:"Every dot has a reason",intro:"통독표의 모든 페이지에는 이유가 있습니다. 각 페이지가 왜 이렇게 디자인됐고, 어떻게 쓰면 되는지 소개합니다.",items:[{title:"Before You Begin",desc:"66권 1,189장 31,102절. '주의 말씀은 내 발의 등이요'(시 119:105). 통독의 여정을 시작하는 다짐의 페이지입니다.",usage:"어떻게 쓰나요 — 시작한 날짜를 적고, QR로 인스타그램과 연결해 여정을 함께 나누세요.",image:Mj},{title:"Read the Dots",desc:"1절 또는 1장이 하나의 점(Dot)입니다. 읽으면 색을 칠하고, 점의 크기는 분량을, 굵은 링은 5·10 단위를 나타냅니다.",usage:"어떻게 쓰나요 — 읽은 곳의 원을 칠하세요. 점이 채워질수록 진도가 한눈에 보입니다.",image:Bj},{title:"The Visual Map",desc:"성경 66권 전체를 하나의 지도로 펼쳤습니다. 점의 크기는 장의 길이를 나타내, 성경의 구조가 한눈에 보입니다.",usage:"어떻게 쓰나요 — 전체 진행을 한눈에 확인하며 다음에 읽을 곳을 계획하세요.",image:_j},{title:"Chapter Tracker",desc:"장르별(오경·역사서·시가서·선지서·복음서…)로 나누어 장 단위로 체크합니다. 점 크기는 각 장의 길이를 나타냅니다.",usage:"어떻게 쓰나요 — 한 장을 읽을 때마다 해당 원을 칠해 나가세요.",image:hm},{title:"Verse Tracker",desc:"1절을 1개의 점으로. 31,102개의 점이 하나씩 채워지며 나만의 데이터 아트가 완성됩니다.",usage:"어떻게 쓰나요 — 절 단위로 더 촘촘하게 기록하고 싶을 때 사용하세요.",image:pm}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Read",desc:"오늘 분량의 말씀을 읽으세요."},{num:"02",title:"Check",desc:"읽은 절을 점(Dot)으로 체크하세요."},{num:"03",title:"See",desc:"점이 모여 나만의 통독 지도가 완성됩니다."}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Pages",value:"120 페이지"},{label:"Binding",value:"사철 제본"},{label:"Paper",value:"미색 모조지"},{label:"Layout",value:"절 단위 체크 · 진행률 시각화"},{label:"Coverage",value:"성경 66권 전체"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Nj,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"},{image:kj,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},Uj="/dolf/assets/hero-DTWScntO.png",mm="/dolf/assets/hero-DTWScntO.png",Hj="/dolf/assets/inside-back-SUz4ASlk.png",qj="/dolf/assets/hero-CJSOf2Pk.png",Gj="/dolf/assets/hero-ChOiTWCF.png",Yj={slug:"calendar",catalogImage:Uj,catalogName:"2027 Calendar",catalogPrice:"$20",hero:{gallery:[mm],title:"2027 Calendar",subtitle:"Calendar & Poster — 점자와 7-세그먼트로 표현한 미니멀 캘린더",price:"$20",description:"점자(braille) 모티프로 각 월을 표현한 미니멀 캘린더입니다. B5 양면 캘린더와 B2 포스터로 구성되어 일상의 공간을 따뜻하게 채웁니다.",specLines:["B5 양면 · 176 × 250mm","B2 포스터 동봉","2027 공휴일 표기"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why the Calendar",paragraphs:["2027 Calendar는 점(dot)으로 시간을 그립니다. 점자와 7-세그먼트 라인으로 각 월의 숫자를 표현한 미니멀한 디자인입니다.","B5 양면 캘린더와 B2 포스터로 구성되어, 책상 위에도 벽에도 DoLF의 무드를 더합니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B5 · 12 Months",image:mm},{caption:"B5 · DoLF Back",image:Hj}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"책상이나 벽에 걸어 한 해를 시작하세요."},{num:"02",title:"Read",desc:"점자로 표현된 달과 날짜를 따라가세요."},{num:"03",title:"Live",desc:"매일의 공간을 DoLF의 무드로 채우세요."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Crafted with braille",items:[{title:"12 Months",desc:"12개월 미니 캘린더"},{title:"Braille",desc:"점자 모티프 디자인"},{title:"7-Segment",desc:"7-세그먼트 숫자 라인"},{title:"Double-side",desc:"B5 양면 구성"},{title:"B2 Poster",desc:"B2 포스터 동봉"},{title:"Holidays",desc:"2027 공휴일 표기"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 양면 · 176 × 250mm"},{label:"Format",value:"캘린더 + 포스터"},{label:"Poster",value:"B2 · 500 × 707mm"},{label:"Design",value:"점자 + 7-세그먼트"},{label:"Year",value:"2027"},{label:"Holidays",value:"대한민국 공휴일 표기"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:qj,title:"Bible Reading Tracker",desc:"성경 통독을 한눈에 시각화하는 기록 도구"},{image:Gj,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"}]}},Qj="/dolf/assets/hero-CyrxStpk.png",Vj="/dolf/assets/hero-CyrxStpk.png",Xj="/dolf/assets/hero-CyrxStpk.png",Zj="/dolf/assets/hero-DTWScntO.png",Kj="/dolf/assets/hero-ChOiTWCF.png",Fj={slug:"poster",catalogImage:Qj,catalogName:"2027 Poster (B2)",catalogPrice:"$32",hero:{gallery:[Vj],title:"2027 Poster",subtitle:"B2 Wall Poster — 점자와 7-세그먼트 숫자로 표현한 캘린더 포스터",price:"$32",description:"DoLF 2027 캘린더를 B2(500×707mm) 대형 포스터로. 미니멀한 점·선 디자인이 한 해 동안 공간을 채웁니다.",specLines:["B2 · 500 × 707mm","대형 월 포스터","점자 + 7-세그먼트"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why a poster",paragraphs:["캘린더는 책상 위에만 있지 않습니다. B2 포스터는 한 해 전체를 벽에 펼쳐, 매일 시선이 닿는 곳에서 시간을 바라보게 합니다.","점자와 7-세그먼트 숫자로 표현한 미니멀 디자인은 공간을 채우는 하나의 오브제가 됩니다."]},insidePages:{eyebrow:"INSIDE THE PAGES",title:"A look inside",items:[{caption:"B2 · 500 × 707mm",image:Xj}]},howToUse:{eyebrow:"HOW TO USE",title:"A simple daily rhythm",steps:[{num:"01",title:"Hang",desc:"책상이나 벽에 걸어 한 해를 시작하세요."},{num:"02",title:"Read",desc:"점자로 표현된 달과 날짜를 따라가세요."},{num:"03",title:"Live",desc:"매일의 공간을 DoLF의 무드로 채우세요."}]},features:{eyebrow:"WHAT'S INSIDE",title:"Made for your wall",items:[{title:"B2 Size",desc:"500 × 707mm 대형"},{title:"12 Months",desc:"한 해 전체를 한 면에"},{title:"Braille",desc:"점자 모티프 디자인"},{title:"7-Segment",desc:"디지털 숫자 월 표기"},{title:"Holidays",desc:"2027 공휴일 표기"},{title:"Wall-ready",desc:"벽을 채우는 미니멀 오브제"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B2 · 500 × 707mm"},{label:"Type",value:"월 포스터 (Wall)"},{label:"Orientation",value:"세로 (Portrait)"},{label:"Design",value:"점자 + 7-세그먼트"},{label:"Year",value:"2027"},{label:"Holidays",value:"대한민국 공휴일"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:Zj,title:"2027 Calendar (B5)",desc:"점자로 표현한 B5 미니멀 캘린더"},{image:Kj,title:"Breathe — Planner & Diary",desc:"신앙과 일상을 함께 기록하는 플래너"}]}},Jj="/dolf/assets/hero-IAGVR8nw.png",eu="/dolf/assets/hero-IAGVR8nw.png",Pj="/dolf/assets/inside-foldout-V9ArSbMG.png",Wj="/dolf/assets/topic-psalms-DS_k7MhJ.png",Ij="/dolf/assets/topic-kings-BHghIbI4.png",e$="/dolf/assets/topic-synoptic-BFJzeuxq.png",t$="/dolf/assets/hero-CJSOf2Pk.png",n$="/dolf/assets/hero-DTWScntO.png",l$={slug:"topical",catalogImage:Jj,catalogName:"Topical Reading Tracker",catalogPrice:"from $12",hero:{gallery:[eu],title:"Topical Reading Tracker",subtitle:"Single Sheet & Foldout — 주제별 성경 통독 트래커",price:"from $12",description:"한 주제를 깊이 따라 읽는 1장짜리 통독 트래커입니다. 복음서 조화, 시편·잠언, 평행 본문 등 주제별로 골라보세요.",specLines:["B5 · 176 × 250mm","낱장(Single) 또는 접지(Foldout)","주제별 디자인"]},story:{eyebrow:"ABOUT THIS PRODUCT",title:"Why topical reading?",paragraphs:["성경 전체 통독이 부담될 때, 한 주제를 깊이 따라가 보세요. 복음서 조화, 시편·잠언, 평행 본문 등 주제별로 짜인 1장짜리 트래커입니다.","낱장은 가볍게, 접지는 펼쳐서 더 넓게. 원하는 형태를 골라 책상에 두거나 성경에 끼워 사용하세요."]},insidePages:{eyebrow:"A LOOK INSIDE",title:"Single & Foldout",items:[{caption:"SINGLE SHEET · 낱장",image:eu},{caption:"FOLDOUT · 접지",image:Pj}]},pagesExplained:{eyebrow:"TOPICS",title:"A few of the topics",intro:"각 주제가 성경의 어느 부분을, 어떤 내용으로 다루는지 살펴보세요.",items:[{title:"A Harmony of the Gospels",desc:"예수님의 탄생부터 부활·승천까지, 네 복음서의 같은 사건을 한 줄에 모아 따라 읽습니다. 복음서마다 강조점이 어떻게 다른지 비교하며 예수님의 생애를 입체적으로 보게 됩니다. (낱장·접지)",usage:"READING · 마태 · 마가 · 누가 · 요한 (4복음서)",image:eu},{title:"Psalms & Proverbs",desc:"매일 시편 5편과 잠언 1장씩, 30일이면 지혜서를 한 바퀴. 예배와 기도의 언어(시편)와 삶의 지혜(잠언)를 매일 함께 묵상합니다.",usage:"READING · 시편 150편 · 잠언 31장",image:Wj},{title:"Kings & Chronicles",desc:"같은 시대를 다룬 두 역사서를 나란히 읽습니다. 열왕기(선지자의 시선)와 역대기(제사장의 시선)가 같은 사건을 어떻게 다르게 기록했는지 비교하며 이스라엘 왕정의 흐름을 봅니다. (낱장·접지)",usage:"READING · 열왕기상·하 · 역대기상·하",image:Ij},{title:"Synoptic Gospels",desc:"세 공관복음을 평행으로 두고, 같은 비유와 기적이 복음서마다 어떻게 기록됐는지 비교하며 읽습니다. (낱장·접지)",usage:"READING · 마태 · 마가 · 누가 (공관복음)",image:e$}]},features:{eyebrow:"WHAT'S INSIDE",title:"What you get",items:[{title:"9 Topics",desc:"복음서 조화부터 평행 본문까지"},{title:"Single & Foldout",desc:"낱장 또는 접지 형태 선택"},{title:"By Chapter",desc:"장(chapter)을 점으로 체크"},{title:"By Theme",desc:"한 주제를 깊이 따라 읽기"},{title:"Notes",desc:"묵상·메모 공간 포함"},{title:"B5 Size",desc:"176 × 250mm"}]},specs:{eyebrow:"SPECIFICATIONS",title:"The details",rows:[{label:"Size",value:"B5 · 176 × 250mm"},{label:"Format",value:"낱장(Single) · 접지(Foldout)"},{label:"Topics",value:"낱장 9종 · 접지 3종"},{label:"Print",value:"단면 또는 양면"},{label:"Paper",value:"미색 모조지"},{label:"Foldout",value:"+$4 추가"}]},shippingFaq:{eyebrow:"SHIPPING & FAQ",title:"Good to know",shipping:{title:"Shipping & Returns",body:"주문 후 2–3일 이내 출고되며 국내 택배로 배송됩니다. 단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능합니다."},faq:[{q:"Q. 날짜가 인쇄되어 있나요?",a:"Undated 방식으로, 원하는 날부터 자유롭게 시작할 수 있습니다."},{q:"Q. 선물 포장이 되나요?",a:"DM으로 요청해 주시면 선물 포장을 안내해 드립니다."},{q:"Q. 해외 배송이 가능한가요?",a:"Etsy를 통해 글로벌 배송이 가능합니다."}]},related:{eyebrow:"MORE FROM DoLF",cards:[{image:t$,title:"Bible Reading Tracker",desc:"성경 전체를 한 권으로 통독"},{image:n$,title:"2027 Calendar",desc:"점자로 표현한 미니멀 캘린더"}]}},Qg=[Aj,Lj,Yj,Fj,l$];function Vg(n){return Qg.find(o=>o.slug===n)}function a$(){const{t:n}=_e(),{addItem:o}=Hu();return r.jsxs(r.Fragment,{children:[r.jsx(i$,{children:r.jsxs(o$,{children:[r.jsx(Ze,{children:n.shop.hero.eyebrow}),r.jsx(r$,{children:n.shop.hero.title}),r.jsx(c$,{children:n.shop.hero.subhead})]})}),r.jsx(s$,{children:r.jsx(u$,{children:Qg.map(s=>r.jsxs(f$,{children:[r.jsxs(d$,{to:`/shop/${s.slug}`,children:[r.jsx(h$,{children:r.jsx(p$,{src:s.catalogImage,alt:s.catalogName})}),r.jsx(m$,{children:s.catalogName}),r.jsx(g$,{children:s.catalogPrice})]}),r.jsx(y$,{type:"button",onClick:()=>o({slug:s.slug,name:s.catalogName,price:s.catalogPrice,image:s.catalogImage}),children:n.shop.addToCart})]},s.slug))})})]})}const i$=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,o$=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding-top: 88px;
  padding-bottom: 56px;
`,r$=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.15;
  color: ${({theme:n})=>n.colors.ink};
`,c$=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`,s$=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,u$=h(xe)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 28px;
  max-width: 1180px;
  padding-top: 40px;
  padding-bottom: 96px;
`,f$=h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,d$=h(st)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,h$=h.div`
  height: 512px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,p$=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,m$=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  line-height: 1.3;
  color: ${({theme:n})=>n.colors.ink};
`,g$=h.p`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,y$=h.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;function x$({product:n}){const{t:o}=_e(),{addItem:s}=Hu(),{hero:u}=n,f=()=>s({slug:n.slug,name:u.title,price:u.price,image:n.catalogImage});return r.jsx(b$,{children:r.jsxs(v$,{children:[r.jsx(S$,{children:r.jsx(j$,{src:u.gallery[0],alt:u.title})}),r.jsxs($$,{children:[r.jsx(w$,{children:u.title}),r.jsx(E$,{children:u.subtitle}),r.jsx(T$,{children:u.price}),r.jsx(R$,{}),r.jsx(z$,{children:u.description}),r.jsx(A$,{children:u.specLines.map(m=>r.jsx(C$,{children:m},m))}),r.jsxs(D$,{children:[r.jsx(O$,{type:"button",onClick:f,children:o.shop.buyNow}),r.jsx(M$,{type:"button",onClick:f,children:o.shop.addToCart})]})]})]})})}const b$=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,v$=h(xe)`
  display: flex;
  gap: 72px;
  padding-top: 64px;
  padding-bottom: 80px;
`,S$=h.div`
  flex: 1;
  height: 835px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,j$=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,$$=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,w$=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 64px;
  font-weight: 300;
  line-height: 1.1;
  color: ${({theme:n})=>n.colors.ink};
`,E$=h.p`
  margin-top: 12px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.krSubhead};
  font-weight: 500;
  line-height: 1.52;
  color: ${({theme:n})=>n.colors.textSecondary};
`,T$=h.p`
  margin-top: 20px;
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,R$=h.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({theme:n})=>n.colors.border};
  margin: 24px 0;
`,z$=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`,A$=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
`,C$=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,D$=h.div`
  display: flex;
  gap: 12px;
  margin-top: 36px;
`,O$=h.button`
  flex: 1;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,M$=h.button`
  flex: 1;
  padding: 16px;
  border: 1px solid ${({theme:n})=>n.colors.ink};
  border-radius: 4px;
  background: none;
  color: ${({theme:n})=>n.colors.ink};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:n})=>n.colors.ink};
    color: ${({theme:n})=>n.colors.white};
  }
`;function B$({data:n}){return r.jsx(_$,{children:r.jsxs(N$,{children:[r.jsx(Ze,{children:n.eyebrow}),r.jsx(Tn,{children:n.title}),n.paragraphs.map(o=>r.jsx(k$,{children:o},o))]})})}const _$=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,N$=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  max-width: calc(720px + 128px);
  padding-top: 96px;
  padding-bottom: 96px;
`,k$=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  line-height: 1.78;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function za({eyebrow:n,title:o,intro:s}){return r.jsxs(L$,{children:[r.jsx(Ze,{children:n}),r.jsx(Tn,{children:o}),s&&r.jsx(U$,{children:s})]})}const L$=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,U$=h.p`
  max-width: 640px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function H$({data:n}){return r.jsx(q$,{children:r.jsxs(G$,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title}),r.jsx(Y$,{children:n.items.map(o=>r.jsxs(Q$,{children:[r.jsx(V$,{children:r.jsx(X$,{src:o.image,alt:o.caption})}),r.jsx(Z$,{children:o.caption})]},o.caption))})]})})}const q$=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,G$=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`,Y$=h.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1180px;
`,Q$=h.figure`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,V$=h.div`
  height: 498px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,X$=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Z$=h.figcaption`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`;function K$({data:n}){return r.jsx(F$,{children:r.jsxs(J$,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title}),r.jsx(P$,{children:n.items.map(o=>r.jsxs(W$,{children:[r.jsx(I$,{children:o.title}),r.jsx(ew,{children:o.desc})]},o.title))})]})})}const F$=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,J$=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`,P$=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;
  width: 100%;
  max-width: 1180px;
`,W$=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I$=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,ew=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function tw({data:n}){return r.jsx(nw,{children:r.jsxs(lw,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title,intro:n.intro}),r.jsx(aw,{children:n.items.map((o,s)=>r.jsxs(iw,{$imageRight:s%2===1,children:[r.jsx(ow,{children:r.jsx(rw,{src:o.image,alt:o.title})}),r.jsxs(cw,{children:[r.jsx(sw,{children:o.title}),r.jsx(uw,{children:o.desc}),r.jsx(fw,{children:o.usage})]})]},o.title))})]})})}const nw=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,lw=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-top: 96px;
  padding-bottom: 96px;
`,aw=h.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
  max-width: 1040px;
`,iw=h.div`
  display: flex;
  flex-direction: ${({$imageRight:n})=>n?"row-reverse":"row"};
  align-items: center;
  gap: 56px;
`,ow=h.div`
  width: 340px;
  height: 483px;
  flex-shrink: 0;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,rw=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,cw=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,sw=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,uw=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`,fw=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.brandRed};
`;function dw({data:n}){return r.jsx(hw,{children:r.jsxs(pw,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title}),r.jsx(mw,{children:n.steps.map(o=>r.jsxs(gw,{children:[r.jsx(yw,{children:o.num}),r.jsx(xw,{children:o.title}),r.jsx(bw,{children:o.desc})]},o.num))})]})})}const hw=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,pw=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`,mw=h.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1040px;
`,gw=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`,yw=h.span`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 40px;
  font-weight: 300;
  color: ${({theme:n})=>n.colors.brandRed};
`,xw=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,bw=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function vw({data:n}){return r.jsx(Sw,{children:r.jsxs(jw,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title}),r.jsx($w,{children:n.rows.map(o=>r.jsxs(ww,{children:[r.jsx(Ew,{children:o.label}),r.jsx(Tw,{children:o.value})]},o.label))})]})})}const Sw=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,jw=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`,$w=h.dl`
  width: 100%;
  max-width: 640px;
  margin: 0;
`,ww=h.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,Ew=h.dt`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.body};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,Tw=h.dd`
  margin: 0;
  text-align: right;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.textSecondary};
`;function Rw({data:n}){return r.jsx(zw,{children:r.jsxs(Aw,{children:[r.jsx(za,{eyebrow:n.eyebrow,title:n.title}),r.jsxs(Cw,{children:[r.jsxs(gm,{children:[r.jsx(Dw,{children:n.shipping.title}),r.jsx(ym,{children:n.shipping.body})]}),n.faq.map(o=>r.jsxs(gm,{children:[r.jsx(Ow,{children:o.q}),r.jsx(ym,{children:o.a})]},o.q))]})]})})}const zw=h.section`
  background-color: ${({theme:n})=>n.colors.surface};
`,Aw=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
`,Cw=h.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 720px;
`,gm=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dw=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,Ow=h.h4`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,ym=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.8;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function Mw({data:n}){return r.jsx(Bw,{children:r.jsxs(_w,{children:[r.jsx(Nw,{children:n.eyebrow}),r.jsx(kw,{children:n.cards.map(o=>r.jsxs(Lw,{children:[r.jsx(Uw,{children:r.jsx(Hw,{src:o.image,alt:o.title})}),r.jsx(qw,{children:o.title}),r.jsx(Gw,{children:o.desc})]},o.title))})]})})}const Bw=h.section`
  background-color: ${({theme:n})=>n.colors.cream};
`,_w=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 96px;
  padding-bottom: 104px;
`,Nw=h(Ze)`
  text-align: center;
`,kw=h.div`
  display: flex;
  gap: 28px;
  width: 100%;
  max-width: 760px;
`,Lw=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Uw=h.div`
  height: 520px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;
`,Hw=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,qw=h.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,Gw=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.7;
  color: ${({theme:n})=>n.colors.textSecondary};
`;function Yw(){const{slug:n}=wr(),o=n?Vg(n):void 0;return o?r.jsxs(r.Fragment,{children:[r.jsx(x$,{product:o}),o.story&&r.jsx(B$,{data:o.story}),o.insidePages&&r.jsx(H$,{data:o.insidePages}),o.features&&r.jsx(K$,{data:o.features}),o.pagesExplained&&r.jsx(tw,{data:o.pagesExplained}),o.howToUse&&r.jsx(dw,{data:o.howToUse}),o.specs&&r.jsx(vw,{data:o.specs}),o.shippingFaq&&r.jsx(Rw,{data:o.shippingFaq}),o.related&&r.jsx(Mw,{data:o.related})]}):r.jsx(Sa,{to:"/shop",replace:!0})}function Xg({eyebrow:n,title:o,subhead:s,children:u}){return r.jsx(Qw,{children:r.jsxs(Vw,{children:[r.jsxs(Xw,{children:[r.jsx(Ze,{children:n}),r.jsx(Zw,{children:o}),r.jsx(Kw,{children:s})]}),u]})})}const Qw=h.section`
  display: flex;
  justify-content: center;
  background-color: ${({theme:n})=>n.colors.cream};
  padding: 80px 64px 120px;
`,Vw=h.div`
  width: 100%;
  max-width: 460px;
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 6px;
  padding: 40px;
`,Xw=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 28px;
`,Zw=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,Kw=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  line-height: 1.6;
  color: ${({theme:n})=>n.colors.textSecondary};
`,tl=h.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
`,Fw=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,nl=h.label`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,wl=h.input`
  width: 100%;
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 15px;
  color: ${({theme:n})=>n.colors.ink};

  &::placeholder {
    color: ${({theme:n})=>n.colors.textSecondary};
  }
`,Jw=h.select`
  width: 100%;
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  padding: 13px 15px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 15px;
  color: ${({theme:n})=>n.colors.ink};
`,Zg=h.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,Eu=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.brandRed};
`,Kg=h.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-bottom: 16px;
  cursor: pointer;
`,Fg=h.p`
  text-align: center;
  margin-top: 20px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,Pw=h.p`
  margin-top: 16px;
  padding: 14px 16px;
  background-color: ${({theme:n})=>n.colors.surface};
  border-radius: 4px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({theme:n})=>n.colors.textSecondary};
`,Ww=h.p`
  margin-bottom: 12px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.brandRed};
`;function Iw(){const{t:n}=_e(),{login:o}=Ra(),s=rn(),[u,f]=T.useState(""),[m,x]=T.useState(""),[j,y]=T.useState(""),g=n.account.signIn,v=w=>{w.preventDefault();const D=o(u);if(!D){y(g.notFound);return}s(D.role==="admin"?"/admin":"/mypage",{replace:!0})};return r.jsxs(Xg,{eyebrow:g.eyebrow,title:g.title,subhead:g.subhead,children:[r.jsxs("form",{onSubmit:v,children:[j&&r.jsx(Ww,{children:j}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"email",children:g.emailLabel}),r.jsx(wl,{id:"email",type:"email",placeholder:g.emailPlaceholder,value:u,onChange:w=>f(w.target.value),required:!0})]}),r.jsxs(tl,{children:[r.jsxs(Fw,{children:[r.jsx(nl,{htmlFor:"password",children:g.passwordLabel}),r.jsx(Eu,{as:"span",children:g.forgotPassword})]}),r.jsx(wl,{id:"password",type:"password",placeholder:g.passwordPlaceholder,value:m,onChange:w=>x(w.target.value)})]}),r.jsxs(Kg,{children:[r.jsx("input",{type:"checkbox",defaultChecked:!0}),g.keepLoggedIn]}),r.jsx(Zg,{type:"submit",children:g.submit})]}),r.jsx(Pw,{children:g.notice}),r.jsxs(Fg,{children:[g.noAccount," ",r.jsx(st,{to:"/signup",children:r.jsx(Eu,{children:g.signUpLink})})]})]})}function eE(){const{t:n}=_e(),{signUp:o}=Ra(),s=rn(),[u,f]=T.useState(""),[m,x]=T.useState(""),[j,y]=T.useState(""),g=n.account.signUp,v=w=>{w.preventDefault(),o({name:u,email:m,phone:j||void 0}),s("/mypage",{replace:!0})};return r.jsxs(Xg,{eyebrow:g.eyebrow,title:g.title,subhead:g.subhead,children:[r.jsxs("form",{onSubmit:v,children:[r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"country",children:g.countryLabel}),r.jsxs(Jw,{id:"country",defaultValue:"KR",children:[r.jsx("option",{value:"KR",children:"대한민국 (KR)"}),r.jsx("option",{value:"US",children:"United States (US)"}),r.jsx("option",{value:"JP",children:"日本 (JP)"})]})]}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"name",children:g.nameLabel}),r.jsx(wl,{id:"name",type:"text",placeholder:g.namePlaceholder,value:u,onChange:w=>f(w.target.value),required:!0})]}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"email",children:g.emailLabel}),r.jsx(wl,{id:"email",type:"email",placeholder:g.emailPlaceholder,value:m,onChange:w=>x(w.target.value),required:!0})]}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"phone",children:g.phoneLabel}),r.jsx(wl,{id:"phone",type:"tel",placeholder:g.phonePlaceholder,value:j,onChange:w=>y(w.target.value)})]}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"password",children:g.passwordLabel}),r.jsx(wl,{id:"password",type:"password",placeholder:g.passwordPlaceholder})]}),r.jsxs(tl,{children:[r.jsx(nl,{htmlFor:"passwordConfirm",children:g.passwordConfirmLabel}),r.jsx(wl,{id:"passwordConfirm",type:"password",placeholder:g.passwordConfirmPlaceholder})]}),r.jsxs(Kg,{children:[r.jsx("input",{type:"checkbox",required:!0}),g.terms]}),r.jsx(Zg,{type:"submit",children:g.submit})]}),r.jsxs(Fg,{children:[g.hasAccount," ",r.jsx(st,{to:"/signin",children:r.jsx(Eu,{children:g.signInLink})})]})]})}const xm=[{id:"DLF-1043",date:"2026-05-14",title:"Breathe + Tracker 세트",status:"배송 완료",amount:"$68"},{id:"DLF-1021",date:"2026-03-02",title:"2027 Calendar",status:"배송 완료",amount:"$20"},{id:"DLF-0998",date:"2026-01-20",title:"Bible Reading Tracker",status:"배송 완료",amount:"$30"}],tE=["poster","topical","breathe","calendar"];function nE(){const{t:n}=_e(),{user:o,logout:s}=Ra(),u=rn(),f=n.account.myPage;if(!o)return null;const m=tE.map(y=>Vg(y)).filter(y=>!!y),x=[{label:f.settingName,value:o.name},{label:f.settingEmail,value:o.email},{label:f.settingPhone,value:o.phone??"-"},{label:f.settingAddress,value:o.address??"-"},{label:f.settingMembership,value:o.membership??"Member"}],j=()=>{s(),u("/",{replace:!0})};return r.jsxs(lE,{children:[r.jsxs(aE,{children:[r.jsx(Ze,{children:f.eyebrow}),r.jsx(iE,{children:f.greeting.replace("{name}",o.name)}),r.jsx(oE,{children:f.subhead})]}),r.jsxs(rE,{children:[r.jsxs(tu,{children:[r.jsx(nu,{children:xm.length}),r.jsx(lu,{children:f.statsOrders})]}),r.jsxs(tu,{children:[r.jsx(nu,{children:m.length}),r.jsx(lu,{children:f.statsWishlist})]}),r.jsxs(tu,{children:[r.jsx(nu,{children:o.membership??"Member"}),r.jsx(lu,{children:f.statsSpent})]})]}),r.jsxs(au,{children:[r.jsx(iu,{children:f.ordersTitle}),r.jsx(cE,{children:xm.map(y=>r.jsxs(sE,{children:[r.jsxs(uE,{children:[r.jsxs(fE,{children:[y.id," · ",y.date]}),r.jsx(dE,{children:y.title}),r.jsx(hE,{children:y.status})]}),r.jsx(pE,{children:y.amount})]},y.id))})]}),r.jsxs(au,{children:[r.jsx(iu,{children:f.wishlistTitle}),r.jsx(mE,{children:m.map(y=>r.jsxs(gE,{to:`/shop/${y.slug}`,children:[r.jsx(yE,{children:r.jsx("img",{src:y.catalogImage,alt:y.catalogName})}),r.jsx(xE,{children:y.catalogName}),r.jsx(bE,{children:y.catalogPrice})]},y.slug))})]}),r.jsxs(au,{children:[r.jsx(iu,{children:f.settingsTitle}),r.jsx(vE,{children:x.map(y=>r.jsxs(SE,{children:[r.jsx(jE,{children:y.label}),r.jsx($E,{children:y.value}),r.jsx(wE,{children:f.edit})]},y.label))}),r.jsx(EE,{type:"button",onClick:j,children:n.account.logout})]})]})}const lE=h(xe)`
  padding-top: 64px;
  padding-bottom: 104px;
`,aE=h.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`,iE=h.h1`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 32px;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.ink};
`,oE=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.textSecondary};
`,rE=h.div`
  display: flex;
  gap: 16px;
  margin-bottom: 56px;
`,tu=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  background-color: ${({theme:n})=>n.colors.surface};
  border-radius: 6px;
`,nu=h.span`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 28px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,lu=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,au=h.section`
  margin-bottom: 56px;
`,iu=h.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
  margin-bottom: 20px;
`,cE=h.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:n})=>n.colors.border};
`,sE=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,uE=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fE=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,dE=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,hE=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.brandRed};
`,pE=h.span`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h3};
  color: ${({theme:n})=>n.colors.ink};
`,mE=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`,gE=h(st)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,yE=h.div`
  height: 280px;
  border: 1.5px solid ${({theme:n})=>n.colors.border};
  border-radius: 2px;
  background-color: ${({theme:n})=>n.colors.white};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,xE=h.span`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.body};
  font-weight: 600;
  color: ${({theme:n})=>n.colors.ink};
`,bE=h.span`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.textSecondary};
`,vE=h.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:n})=>n.colors.border};
`,SE=h.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,jE=h.span`
  width: 100px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,$E=h.span`
  flex: 1;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,wE=h.button`
  border: none;
  background: none;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.brandRed};
  cursor: pointer;
`,EE=h.button`
  margin-top: 32px;
  padding: 12px 28px;
  background: none;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:n})=>n.colors.ink};
    color: ${({theme:n})=>n.colors.ink};
  }
`,TE=[{to:"/admin",label:"Dashboard",end:!0},{to:"/admin/insights",label:"Customer Insights",indent:!0},{to:"/admin/members",label:"Members"},{to:"/admin/orders",label:"Orders"},{to:"/admin/products",label:"Products"},{to:"/admin/settings",label:"Settings"}];function RE(){const{user:n,logout:o}=Ra(),s=rn(),u=()=>{o(),s("/",{replace:!0})};return r.jsxs(zE,{children:[r.jsxs(AE,{children:[r.jsxs(CE,{children:[r.jsx(DE,{children:"DoLF"}),r.jsx(OE,{children:"ADMIN CONSOLE"})]}),r.jsx(ME,{children:TE.map(f=>r.jsx(BE,{to:f.to,end:f.end,$indent:f.indent,children:f.label},f.to))}),r.jsxs(_E,{children:[r.jsxs(NE,{children:["관리자 · ",(n==null?void 0:n.name)??"admin"]}),r.jsx(kE,{type:"button",onClick:u,children:"로그아웃"})]})]}),r.jsx(LE,{children:r.jsx(_g,{})})]})}const zE=h.div`
  display: flex;
  min-height: 100vh;
`,AE=h.aside`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  background-color: ${({theme:n})=>n.colors.ink};
  color: ${({theme:n})=>n.colors.white};
  padding: 32px 0;
`,CE=h.div`
  padding: 0 28px 36px;
`,DE=h.div`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.5px;
`,OE=h.div`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`,ME=h.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`,BE=h(kg)`
  padding: 11px 28px;
  padding-left: ${({$indent:n})=>n?"44px":"28px"};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  color: rgba(255, 255, 255, 0.65);
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    color: ${({theme:n})=>n.colors.white};
  }

  &.active {
    color: ${({theme:n})=>n.colors.white};
    border-left-color: ${({theme:n})=>n.colors.brandRed};
    background-color: rgba(255, 255, 255, 0.05);
  }
`,_E=h.div`
  padding: 24px 28px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,NE=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: rgba(255, 255, 255, 0.7);
`,kE=h.button`
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    color: ${({theme:n})=>n.colors.white};
  }
`,LE=h.main`
  flex: 1;
  background-color: ${({theme:n})=>n.colors.surface};
  padding: 36px 40px;
  overflow-x: auto;
`,Rn=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`,zn=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,An=h.p`
  margin-top: 6px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.textSecondary};
`,et=h.section`
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 8px;
  padding: 24px;
`,Gt=h.h2`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.bodyLg};
  font-weight: 700;
  color: ${({theme:n})=>n.colors.ink};
  margin-bottom: 20px;
`,Aa=h.button`
  padding: 11px 18px;
  border: none;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.nav};
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`,Al=h.button`
  padding: 8px 14px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
  cursor: pointer;
`,Rr=h.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({theme:n})=>n.fonts.kr};
`,Me=h.th`
  text-align: left;
  padding: 12px 14px;
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.textSecondary};
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
  background-color: ${({theme:n})=>n.colors.surface};
  white-space: nowrap;
`,Be=h.td`
  padding: 14px;
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
  white-space: nowrap;
`,UE={Paid:"#a81212",Shipped:"#1f1f21",Pending:"#6e6e72",Cancelled:"#b0b0b4",Active:"#a81212",Inactive:"#b0b0b4"},ja=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({$status:n})=>UE[n]??"#1f1f21"};
`,qu=[{id:"M-1001",name:"김지혜",email:"jihye@example.com",joinedAt:"2026-01-12",orders:8,totalSpent:"$284",grade:"VIP",status:"Active"},{id:"M-1002",name:"이서준",email:"seojun@example.com",joinedAt:"2026-02-03",orders:3,totalSpent:"$98",grade:"Silver",status:"Active"},{id:"M-1003",name:"박민지",email:"minji@example.com",joinedAt:"2026-02-21",orders:0,totalSpent:"$0",grade:"Basic",status:"Inactive"},{id:"M-1004",name:"정우성",email:"woosung@example.com",joinedAt:"2026-03-15",orders:12,totalSpent:"$476",grade:"VIP",status:"Active"},{id:"M-1005",name:"최유나",email:"yuna@example.com",joinedAt:"2026-04-02",orders:5,totalSpent:"$152",grade:"Gold",status:"Active"},{id:"M-1006",name:"한도윤",email:"doyoon@example.com",joinedAt:"2026-05-19",orders:1,totalSpent:"$38",grade:"Basic",status:"Active"},{id:"M-1007",name:"오세훈",email:"sehoon@example.com",joinedAt:"2026-05-28",orders:2,totalSpent:"$66",grade:"Silver",status:"Active"},{id:"M-1008",name:"강민서",email:"minseo@example.com",joinedAt:"2026-06-10",orders:4,totalSpent:"$134",grade:"Gold",status:"Active"}],Gu=[{id:"DLF-2046",customer:"김지혜",product:"Breathe + Tracker 세트",date:"2026-06-22",amount:"$68",status:"Cancelled"},{id:"DLF-2045",customer:"정우성",product:"2027 Poster (B2)",date:"2026-06-21",amount:"$32",status:"Shipped",overseas:!0},{id:"DLF-2044",customer:"최유나",product:"Topical Tracker (Foldout)",date:"2026-06-20",amount:"$16",status:"Paid"},{id:"DLF-2043",customer:"강민서",product:"2027 Calendar",date:"2026-06-19",amount:"$20",status:"Pending"},{id:"DLF-2042",customer:"이서준",product:"Bible Reading Tracker",date:"2026-06-18",amount:"$30",status:"Shipped"},{id:"DLF-2041",customer:"오세훈",product:"Breathe — Planner & Diary",date:"2026-06-17",amount:"$38",status:"Shipped",overseas:!0}],HE=[{name:"Breathe — Planner & Diary",sku:"DLF-BR-01",price:"$38",stock:142,sales:920},{name:"Bible Reading Tracker",sku:"DLF-BT-01",price:"$30",stock:210,sales:780},{name:"2027 Calendar",sku:"DLF-CA-01",price:"$20",stock:305,sales:640},{name:"Topical Reading Tracker",sku:"DLF-TT-01",price:"from $12",stock:188,sales:470},{name:"2027 Poster (B2)",sku:"DLF-PO-01",price:"$32",stock:96,sales:330}],qE=[{label:"총 회원",value:"1,284",delta:"8.6% this month"},{label:"총 주문",value:"3,672",delta:"12.4% this month"},{label:"매출 (월)",value:"$48.2K",delta:"5.1% this month"},{label:"신규 가입",value:"86",delta:"최근 30일"}],GE=[{label:"Jan",value:58},{label:"Feb",value:72},{label:"Mar",value:64},{label:"Apr",value:86},{label:"May",value:70},{label:"Jun",value:100,highlight:!0}],YE=[{name:"Breathe",percent:92},{name:"Bible Reading Tracker",percent:78},{name:"2027 Calendar",percent:64},{name:"Topical Tracker",percent:47},{name:"2027 Poster",percent:33}];function QE(n){return qu.find(o=>o.id===n)}function Jg(n){return Gu.find(o=>o.id===n)}function VE(){const n=Gu.slice(0,5),o=[...qu].reverse().slice(0,5);return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"Dashboard"}),r.jsx(An,{children:"DoLF 스토어 현황을 한눈에 살펴봅니다."})]}),r.jsx(Al,{type:"button",children:"최근 30일 ▾"})]}),r.jsx(XE,{children:qE.map(s=>r.jsxs(ZE,{children:[r.jsx(KE,{children:s.label}),r.jsx(FE,{children:s.value}),r.jsxs(JE,{children:["▲ ",s.delta]})]},s.label))}),r.jsxs(bm,{children:[r.jsxs(et,{children:[r.jsx(Gt,{children:"매출 추이"}),r.jsx(PE,{children:GE.map(s=>r.jsxs(WE,{children:[r.jsx(IE,{style:{height:`${s.value}%`},$highlight:s.highlight}),r.jsx(eT,{children:s.label})]},s.label))})]}),r.jsxs(et,{children:[r.jsx(Gt,{children:"상품별 판매"}),r.jsx(tT,{children:YE.map(s=>r.jsxs(nT,{children:[r.jsxs(lT,{children:[r.jsx("span",{children:s.name}),r.jsxs("span",{children:[s.percent,"%"]})]}),r.jsx(aT,{children:r.jsx(iT,{style:{width:`${s.percent}%`}})})]},s.name))})]})]}),r.jsxs(bm,{children:[r.jsxs(et,{children:[r.jsxs(vm,{children:[r.jsx(Gt,{children:"최근 주문"}),r.jsx(Sm,{to:"/admin/orders",children:"전체 보기 →"})]}),r.jsx(jm,{children:n.map(s=>r.jsxs($m,{children:[r.jsxs("div",{children:[r.jsxs(wm,{children:["#",s.id]}),r.jsx(ou,{children:s.product})]}),r.jsx(ja,{$status:s.status,children:s.status})]},s.id))})]}),r.jsxs(et,{children:[r.jsxs(vm,{children:[r.jsx(Gt,{children:"신규 회원"}),r.jsx(Sm,{to:"/admin/members",children:"전체 보기 →"})]}),r.jsx(jm,{children:o.map(s=>r.jsxs($m,{children:[r.jsxs("div",{children:[r.jsx(wm,{children:s.name}),r.jsx(ou,{children:s.email})]}),r.jsx(ou,{children:s.joinedAt})]},s.id))})]})]})]})}const XE=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`,ZE=h.div`
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 8px;
  padding: 22px;
`,KE=h.div`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,FE=h.div`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 32px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
  margin: 10px 0 8px;
`,JE=h.div`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.brandRed};
`,bm=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
`,PE=h.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  height: 180px;
`,WE=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  gap: 10px;
`,IE=h.div`
  width: 100%;
  max-width: 40px;
  border-radius: 2px 2px 0 0;
  background-color: ${({theme:n,$highlight:o})=>o?n.colors.brandRed:n.colors.ink};
`,eT=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,tT=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,nT=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lT=h.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,aT=h.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.surface};
`,iT=h.div`
  height: 100%;
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.brandRed};
`,vm=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sm=h(st)`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.brandRed};
  margin-bottom: 20px;
`,jm=h.div`
  display: flex;
  flex-direction: column;
`,$m=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid ${({theme:n})=>n.colors.border};
`,wm=h.div`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,ou=h.div`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
  margin-top: 2px;
`,oT=["전체","Active","Inactive"];function rT(){const[n,o]=T.useState("전체"),s=rn(),u=qu.filter(f=>n==="전체"||f.status===n);return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"Members"}),r.jsx(An,{children:"전체 1,284명의 회원을 관리합니다."})]}),r.jsx(Aa,{type:"button",children:"+ 회원 추가"})]}),r.jsxs(cT,{children:[r.jsx(sT,{children:oT.map(f=>r.jsx(uT,{type:"button",$active:n===f,onClick:()=>o(f),children:f},f))}),r.jsx(fT,{placeholder:"이름 · 이메일 검색…"})]}),r.jsxs(et,{children:[r.jsxs(Rr,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(Me,{children:"이름"}),r.jsx(Me,{children:"이메일"}),r.jsx(Me,{children:"가입일"}),r.jsx(Me,{children:"주문"}),r.jsx(Me,{children:"총 구매액"}),r.jsx(Me,{children:"등급"}),r.jsx(Me,{children:"상태"})]})}),r.jsx("tbody",{children:u.map(f=>r.jsxs(dT,{onClick:()=>s(`/admin/members/${f.id}`),children:[r.jsx(Be,{children:f.name}),r.jsx(Be,{children:f.email}),r.jsx(Be,{children:f.joinedAt}),r.jsx(Be,{children:f.orders}),r.jsx(Be,{children:f.totalSpent}),r.jsx(Be,{children:r.jsx(hT,{$vip:f.grade==="VIP",children:f.grade})}),r.jsx(Be,{children:r.jsx(ja,{$status:f.status,children:f.status})})]},f.id))})]}),r.jsxs(pT,{children:[r.jsx(mT,{children:"1–8 / 1,284명"}),r.jsxs(gT,{children:[r.jsx(Ci,{$active:!0,children:"1"}),r.jsx(Ci,{children:"2"}),r.jsx(Ci,{children:"3"}),r.jsx(Ci,{children:"…"}),r.jsx(Ci,{children:"161"})]})]})]})]})}const cT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`,sT=h.div`
  display: flex;
  gap: 8px;
`,uT=h.button`
  padding: 8px 16px;
  border: 1px solid
    ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.border};
  border-radius: 20px;
  background-color: ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.white};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.textSecondary};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  cursor: pointer;
`,fT=h.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
`,dT=h.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:n})=>n.colors.surface};
  }
`,hT=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:n,$vip:o})=>o?n.colors.brandRed:n.colors.textSecondary};
`,pT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`,mT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,gT=h.div`
  display: flex;
  gap: 6px;
`,Ci=h.button`
  min-width: 30px;
  height: 30px;
  border: 1px solid
    ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.border};
  border-radius: 4px;
  background-color: ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.white};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.textSecondary};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  cursor: pointer;
`,yT=[{id:"DLF-2041",product:"Breathe — Planner & Diary",amount:"$38",status:"Paid"},{id:"DLF-2018",product:"2027 Calendar",amount:"$20",status:"Shipped"},{id:"DLF-1990",product:"Bible Reading Tracker",amount:"$30",status:"Shipped"}],xT={VIP:"VIP (상위 3%)",Gold:"Gold (상위 15%)",Silver:"Silver",Basic:"Basic"};function bT(){const{id:n=""}=wr(),o=rn(),s=QE(n);if(!s)return r.jsx(Sa,{to:"/admin/members",replace:!0});const u=[{label:"가입일",value:s.joinedAt},{label:"최근 접속",value:"2026-06-23"},{label:"총 주문",value:`${s.orders}건`},{label:"총 구매액",value:s.totalSpent},{label:"연락처",value:"010-1234-5678"},{label:"등급",value:xT[s.grade]}];return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"회원 상세"}),r.jsxs(An,{children:[s.id," 회원의 정보와 주문 내역입니다."]})]}),r.jsx(Al,{type:"button",onClick:()=>o("/admin/members"),children:"← 목록으로"})]}),r.jsxs(et,{children:[r.jsxs(vT,{children:[r.jsx(ST,{children:s.name.charAt(0)}),r.jsxs(jT,{children:[r.jsxs($T,{children:[r.jsx(wT,{children:s.name}),r.jsx(ET,{$vip:s.grade==="VIP",children:s.grade}),r.jsxs(ja,{$status:s.status,children:["● ",s.status]})]}),r.jsx(TT,{children:s.email})]})]}),r.jsx(RT,{children:u.map(f=>r.jsxs(zT,{children:[r.jsx(AT,{children:f.label}),r.jsx(CT,{children:f.value})]},f.label))}),r.jsx(DT,{children:"최근 주문"}),r.jsx(OT,{children:yT.map(f=>r.jsxs(MT,{children:[r.jsxs(BT,{children:[r.jsxs(_T,{children:["#",f.id]}),r.jsx(NT,{children:f.product})]}),r.jsxs(kT,{children:[r.jsx(LT,{children:f.amount}),r.jsx(ja,{$status:f.status,children:f.status})]})]},f.id))}),r.jsxs(UT,{children:[r.jsx(Aa,{type:"button",children:"메시지 보내기"}),r.jsx(Al,{type:"button",children:"계정 정지"})]})]})]})}const vT=h.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};
`,ST=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.surface};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,jT=h.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,$T=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 17px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,ET=h.span`
  padding: 3px 8px;
  border-radius: 4px;
  background-color: ${({theme:n,$vip:o})=>o?n.colors.brandRed:n.colors.textSecondary};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({theme:n})=>n.colors.white};
`,TT=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,RT=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 20px;
  margin-top: 22px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${({theme:n})=>n.colors.cream};
`,zT=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,AT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,CT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,DT=h.h2`
  margin-top: 22px;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,OT=h.div`
  margin-top: 14px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 6px;
`,MT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  & + & {
    border-top: 1px solid ${({theme:n})=>n.colors.border};
  }
`,BT=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_T=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,NT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,kT=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,LT=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,UT=h.div`
  display: flex;
  gap: 10px;
  margin-top: 22px;

  & > * {
    flex: 1;
    text-align: center;
  }
`,HT=["전체","Paid","Shipped","Pending","Cancelled"];function qT(){const[n,o]=T.useState("전체"),s=rn(),u=Gu.filter(f=>n==="전체"||f.status===n);return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"Orders"}),r.jsx(An,{children:"전체 3,672건의 주문을 관리합니다."})]}),r.jsx(Al,{type:"button",children:"주문 내보내기"})]}),r.jsxs(GT,{children:[r.jsx(YT,{children:HT.map(f=>r.jsx(QT,{type:"button",$active:n===f,onClick:()=>o(f),children:f},f))}),r.jsx(VT,{placeholder:"주문번호 · 고객 검색…"})]}),r.jsxs(et,{children:[r.jsxs(Rr,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(Me,{children:"주문번호"}),r.jsx(Me,{children:"고객"}),r.jsx(Me,{children:"상품"}),r.jsx(Me,{children:"금액"}),r.jsx(Me,{children:"배송지"}),r.jsx(Me,{children:"상태"}),r.jsx(Me,{children:"날짜"})]})}),r.jsx("tbody",{children:u.map(f=>r.jsxs(XT,{onClick:()=>s(`/admin/orders/${f.id}`),children:[r.jsxs(Be,{children:["#",f.id]}),r.jsx(Be,{children:f.customer}),r.jsx(Be,{children:f.product}),r.jsx(Be,{children:f.amount}),r.jsx(Be,{children:f.overseas?"해외":"국내"}),r.jsx(Be,{children:r.jsx(ja,{$status:f.status,children:f.status})}),r.jsx(Be,{children:f.date})]},f.id))})]}),r.jsxs(ZT,{children:[r.jsx(KT,{children:"1–8 / 3,672건 · 해외 1,420건"}),r.jsxs(FT,{children:[r.jsx($l,{children:"‹"}),r.jsx($l,{$active:!0,children:"1"}),r.jsx($l,{children:"2"}),r.jsx($l,{children:"3"}),r.jsx($l,{children:"…"}),r.jsx($l,{children:"459"}),r.jsx($l,{children:"›"})]})]})]})]})}const GT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`,YT=h.div`
  display: flex;
  gap: 8px;
`,QT=h.button`
  padding: 8px 16px;
  border: 1px solid
    ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.border};
  border-radius: 20px;
  background-color: ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.white};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.textSecondary};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  cursor: pointer;
`,VT=h.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
`,XT=h.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:n})=>n.colors.surface};
  }
`,ZT=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`,KT=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,FT=h.div`
  display: flex;
  gap: 6px;
`,$l=h.button`
  min-width: 32px;
  height: 32px;
  border: 1px solid
    ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.border};
  border-radius: 4px;
  background-color: ${({theme:n,$active:o})=>o?n.colors.ink:n.colors.white};
  color: ${({theme:n,$active:o})=>o?n.colors.white:n.colors.textSecondary};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  cursor: pointer;
`,JT={"DLF-2045":{email:"emma.w@example.com",phone:"+1 415-555-0142",country:"United States (US)",address:"123 Market St, San Francisco",addressLine2:"CA 94103",carrier:"EMS (국제특급)",trackingNo:"EE123456789KR",hsCode:"4910.00 · Calendars",customsTerms:"DDU (관세 수취인 부담)",qty:1,subtotal:"$32",intlShipping:"$18",payment:"PayPal",currency:"USD ($)",total:"$50 USD"}},PT={email:"—",phone:"—",country:"대한민국 (KR)",address:"주소 정보 없음",addressLine2:"",carrier:"—",trackingNo:"—",hsCode:"—",customsTerms:"—",qty:1,subtotal:"—",intlShipping:"$0",payment:"—",currency:"USD ($)",total:"—"};function WT(){const{id:n=""}=wr(),o=Jg(n);if(!o)return r.jsx(Sa,{to:"/admin/orders",replace:!0});const s=JT[o.id]??PT;return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(e3,{to:"/admin/orders",children:"‹ 주문 목록"}),r.jsxs(t3,{children:[r.jsxs(zn,{children:["주문 #",o.id]}),r.jsx(ja,{$status:o.status,children:o.status}),o.overseas&&r.jsx(n3,{children:"International"})]}),r.jsxs(An,{children:[o.date," · ",o.customer]})]}),r.jsxs(l3,{children:[r.jsx(Al,{type:"button",children:"상태 변경 ▾"}),r.jsx(Aa,{as:st,to:`/admin/orders/${o.id}/tracking`,children:"배송 추적"})]})]}),r.jsxs(a3,{children:[r.jsxs(et,{children:[r.jsx(Gt,{children:"고객 (Customer)"}),r.jsx(gt,{label:"이름",value:o.customer}),r.jsx(gt,{label:"이메일",value:s.email}),r.jsx(gt,{label:"연락처",value:s.phone})]}),r.jsxs(et,{children:[r.jsx(Gt,{children:"배송지 (Ship to)"}),r.jsx(gt,{label:"국가",value:s.country}),r.jsx(gt,{label:"주소",value:s.address}),s.addressLine2&&r.jsx(gt,{label:"",value:s.addressLine2})]}),o.overseas&&r.jsxs(et,{children:[r.jsx(Gt,{children:"국제배송 (International Shipping)"}),r.jsx(gt,{label:"배송 수단",value:s.carrier}),r.jsx(gt,{label:"트래킹 번호",value:s.trackingNo}),r.jsx(gt,{label:"HS Code",value:s.hsCode}),r.jsx(gt,{label:"통관 조건",value:s.customsTerms})]}),r.jsxs(et,{children:[r.jsx(Gt,{children:"결제"}),r.jsx(gt,{label:"결제수단",value:s.payment}),r.jsx(gt,{label:"통화",value:s.currency}),r.jsx(gt,{label:"소계 (Subtotal)",value:s.subtotal}),r.jsx(gt,{label:"국제배송비 (Intl. shipping)",value:s.intlShipping}),r.jsx(IT,{label:"합계 (Total)",value:s.total})]})]}),r.jsxs(et,{style:{marginTop:20},children:[r.jsx(Gt,{children:"주문 상품"}),r.jsxs(Rr,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(Me,{children:"상품"}),r.jsx(Me,{children:"수량"}),r.jsx(Me,{children:"금액"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx(Be,{children:o.product}),r.jsxs(Be,{children:["×",s.qty]}),r.jsx(Be,{children:o.amount})]})})]})]})]})}function gt({label:n,value:o}){return r.jsxs(Pg,{children:[r.jsx(Wg,{children:n}),r.jsx(Ig,{children:o})]})}function IT({label:n,value:o}){return r.jsxs(Pg,{children:[r.jsx(Wg,{children:n}),r.jsx(i3,{children:o})]})}const e3=h(st)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({theme:n})=>n.colors.ink};
  }
`,t3=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,n3=h.span`
  padding: 3px 10px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 20px;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,l3=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,a3=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`,Pg=h.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:n})=>n.colors.border};

  &:last-child {
    border-bottom: none;
  }
`,Wg=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,Ig=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
  text-align: right;
`,i3=h(Ig)`
  font-weight: 700;
  color: ${({theme:n})=>n.colors.brandRed};
`,Em=["EMS · 국제특급 우편","DHL Express","FedEx International","UPS Worldwide","CJ대한통운"];function o3(){const{id:n=""}=wr(),o=rn(),s=Jg(n),[u,f]=T.useState(Em[0]),[m,x]=T.useState(""),[j,y]=T.useState(""),[g,v]=T.useState(!0);if(!s)return r.jsx(Sa,{to:"/admin/orders",replace:!0});function w(D){D.preventDefault(),o(`/admin/orders/${n}`)}return r.jsxs(r.Fragment,{children:[r.jsx(Rn,{children:r.jsxs("div",{children:[r.jsxs(r3,{to:`/admin/orders/${n}`,children:["‹ 주문 #",s.id]}),r.jsx(zn,{children:"송장 입력"}),r.jsxs(An,{children:["주문 #",s.id," · ",s.customer," 배송 정보를 입력합니다."]})]})}),r.jsx(c3,{children:r.jsxs("form",{onSubmit:w,children:[r.jsxs(ru,{children:[r.jsx(cu,{htmlFor:"carrier",children:"배송사 (Carrier)"}),r.jsx(s3,{id:"carrier",value:u,onChange:D=>f(D.target.value),children:Em.map(D=>r.jsx("option",{value:D,children:D},D))})]}),r.jsxs(ru,{children:[r.jsx(cu,{htmlFor:"tracking",children:"송장번호 (Tracking No.)"}),r.jsx(Tm,{id:"tracking",value:m,placeholder:"예: EE123456789KR",onChange:D=>x(D.target.value)})]}),r.jsxs(ru,{children:[r.jsx(cu,{htmlFor:"shipped",children:"발송일 (Shipped date)"}),r.jsx(Tm,{id:"shipped",type:"date",value:j,onChange:D=>y(D.target.value)})]}),r.jsx(Rm,{}),r.jsxs(u3,{children:[r.jsx("input",{id:"notify",type:"checkbox",checked:g,onChange:D=>v(D.target.checked)}),r.jsxs(f3,{children:[r.jsx(d3,{children:"고객에게 배송 시작 알림 보내기"}),r.jsxs(h3,{children:[s.customer," 님께 배송 안내 이메일이 발송됩니다."]})]})]}),r.jsx(Rm,{}),r.jsxs(p3,{children:[r.jsx(Al,{as:st,to:`/admin/orders/${n}`,children:"취소"}),r.jsx(Aa,{type:"submit",disabled:!m.trim(),children:"송장 저장 · 발송 처리"})]})]})})]})}const r3=h(st)`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${({theme:n})=>n.colors.ink};
  }
`,c3=h(et)`
  max-width: 520px;
`,ru=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`,cu=h.label`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.textSecondary};
  letter-spacing: 0.5px;
`,ey=`
  width: 100%;
  padding: 12px 14px;
  border-radius: 3px;
  box-sizing: border-box;
`,Tm=h.input`
  ${ey}
  border: 1px solid ${({theme:n})=>n.colors.border};
  background-color: ${({theme:n})=>n.colors.cream};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,s3=h.select`
  ${ey}
  border: 1px solid ${({theme:n})=>n.colors.border};
  background-color: ${({theme:n})=>n.colors.cream};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.ink};
`,Rm=h.div`
  height: 1px;
  margin: 18px 0;
  background-color: ${({theme:n})=>n.colors.border};
`,u3=h.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`,f3=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,d3=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,h3=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,p3=h.div`
  display: flex;
  gap: 10px;

  & > * {
    flex: 1;
    text-align: center;
  }
`,m3=100;function g3(n){return n<m3?"재고 부족":"판매중"}function y3(){return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"Products"}),r.jsx(An,{children:"판매 중인 제품과 재고를 관리합니다."})]}),r.jsx(Aa,{type:"button",children:"+ 상품 추가"})]}),r.jsx(et,{children:r.jsxs(Rr,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(Me,{children:"상품명"}),r.jsx(Me,{children:"SKU"}),r.jsx(Me,{children:"가격"}),r.jsx(Me,{children:"재고"}),r.jsx(Me,{children:"판매"}),r.jsx(Me,{children:"상태"})]})}),r.jsx("tbody",{children:HE.map(n=>{const o=g3(n.stock),s=o==="재고 부족";return r.jsxs(x3,{children:[r.jsx(Be,{children:n.name}),r.jsx(b3,{children:n.sku}),r.jsx(Be,{children:n.price}),r.jsx(S3,{$low:s,children:n.stock}),r.jsx(v3,{children:n.sales}),r.jsx(j3,{$low:s,children:o})]},n.sku)})})]})})]})}const x3=h.tr`
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({theme:n})=>n.colors.surface};
  }
`,b3=h(Be)`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: ${({theme:n})=>n.fontSizes.eyebrow};
  color: ${({theme:n})=>n.colors.textSecondary};
`,v3=h(Be)`
  color: ${({theme:n})=>n.colors.textSecondary};
`,S3=h(Be)`
  color: ${({theme:n,$low:o})=>o?n.colors.brandRed:n.colors.textSecondary};
`,j3=h(Be)`
  font-weight: 500;
  color: ${({theme:n,$low:o})=>o?n.colors.brandRed:n.colors.ink};
`,zm=[{id:"storeName",label:"스토어 이름",value:"DoLF"},{id:"storeEmail",label:"대표 이메일",value:"hello@dolf.official"},{id:"instagram",label:"인스타그램",value:"@dolf._official"},{id:"bizNumber",label:"사업자등록번호",value:"123-45-67890"}],Am=[{id:"currency",label:"기본 통화",value:"USD ($)"},{id:"shippingFee",label:"기본 배송비",value:"₩ 3,000"},{id:"freeShipping",label:"무료배송 기준",value:"₩ 50,000 이상"},{id:"dispatch",label:"기본 출고일",value:"결제 후 2–3일"}],Cm=[{id:"newOrder",label:"신규 주문 알림",desc:"새 주문이 들어오면 이메일로 알립니다.",on:!0},{id:"newMember",label:"신규 회원 가입 알림",desc:"새 회원이 가입하면 알립니다.",on:!0},{id:"lowStock",label:"재고 부족 알림",desc:"상품 재고가 60개 미만이면 알립니다.",on:!1}];function $3(){const[n,o]=T.useState(()=>Object.fromEntries(zm.map(g=>[g.id,g.value]))),[s,u]=T.useState(()=>Object.fromEntries(Am.map(g=>[g.id,g.value]))),[f,m]=T.useState(()=>Object.fromEntries(Cm.map(g=>[g.id,g.on]))),x=(g,v)=>o(w=>({...w,[g]:v})),j=(g,v)=>u(w=>({...w,[g]:v})),y=g=>m(v=>({...v,[g]:!v[g]}));return r.jsxs(r.Fragment,{children:[r.jsx(Rn,{children:r.jsxs("div",{children:[r.jsx(zn,{children:"Settings"}),r.jsx(An,{children:"스토어 운영 설정을 관리합니다."})]})}),r.jsxs(su,{children:[r.jsxs(uu,{children:[r.jsx(fu,{children:"스토어 정보"}),r.jsx(du,{children:"기본 스토어 정보를 설정합니다."})]}),r.jsx(Dm,{children:zm.map(g=>r.jsxs(Om,{children:[r.jsx(Mm,{htmlFor:g.id,children:g.label}),r.jsx(Bm,{id:g.id,value:n[g.id],onChange:v=>x(g.id,v.target.value)})]},g.id))})]}),r.jsxs(su,{children:[r.jsxs(uu,{children:[r.jsx(fu,{children:"결제 · 배송"}),r.jsx(du,{children:"통화와 배송 정책을 설정합니다."})]}),r.jsx(Dm,{children:Am.map(g=>r.jsxs(Om,{children:[r.jsx(Mm,{htmlFor:g.id,children:g.label}),r.jsx(Bm,{id:g.id,value:s[g.id],onChange:v=>j(g.id,v.target.value)})]},g.id))})]}),r.jsxs(su,{children:[r.jsxs(uu,{children:[r.jsx(fu,{children:"알림"}),r.jsx(du,{children:"관리자 알림 수신을 설정합니다."})]}),r.jsx(w3,{children:Cm.map(g=>r.jsxs(E3,{children:[r.jsxs("div",{children:[r.jsx(T3,{children:g.label}),r.jsx(R3,{children:g.desc})]}),r.jsx(z3,{type:"button",role:"switch","aria-checked":f[g.id],"aria-label":g.label,$on:f[g.id],onClick:()=>y(g.id),children:r.jsx(A3,{$on:f[g.id]})})]},g.id))})]}),r.jsx(C3,{children:r.jsx(Aa,{type:"button",children:"변경사항 저장"})})]})}const su=h(et)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  margin-bottom: 24px;
`,uu=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fu=h.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,du=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,Dm=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`,Om=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Mm=h.label`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,Bm=h.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 3px;
  background-color: ${({theme:n})=>n.colors.cream};
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 14px;
  color: ${({theme:n})=>n.colors.ink};

  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.ink};
  }
`,w3=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,E3=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0;
`,T3=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,R3=h.p`
  margin-top: 3px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,z3=h.button`
  position: relative;
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({theme:n,$on:o})=>o?n.colors.brandRed:n.colors.border};
  transition: background-color 0.2s ease;
`,A3=h.span`
  position: absolute;
  top: 2px;
  left: ${({$on:n})=>n?"22px":"2px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.white};
  transition: left 0.2s ease;
`,C3=h.div`
  display: flex;
  justify-content: flex-end;
`,D3=[{label:"주 연령대",value:"20–30대",delta:"전체의 72%"},{label:"주 성별",value:"여성",delta:"72% : 28%"},{label:"주 국가",value:"대한민국",delta:"58% · 해외 42%"},{label:"재구매율",value:"34%",delta:"▲ 6% vs 평균"}],O3=[{label:"10대",percent:8},{label:"20대",percent:38,highlight:!0},{label:"30대",percent:34,highlight:!0},{label:"40대",percent:14},{label:"50대+",percent:6}],M3=[{label:"여성 (Female)",percent:72,highlight:!0},{label:"남성 (Male)",percent:28}],B3=[{label:"🇰🇷 대한민국",percent:58,highlight:!0},{label:"🇺🇸 미국",percent:19},{label:"🇯🇵 일본",percent:12},{label:"🇫🇷 프랑스",percent:6},{label:"기타",percent:5}],_3=["20–30대 여성이 핵심 구매층으로 전체의 절반 이상을 차지합니다.","해외 비중이 42%까지 성장 — 미국·일본 고객 대상 영문화·국제배송 우선순위.","재구매율 34%로 평균 대비 높아 리필·시즌 에디션 기회가 있습니다.","선물 수요(12월·신년)에 매출이 집중되는 경향이 보입니다."];function N3(){return r.jsxs(r.Fragment,{children:[r.jsxs(Rn,{children:[r.jsxs("div",{children:[r.jsx(zn,{children:"Customer Insights"}),r.jsx(An,{children:"상품별 주 고객층을 연령·성별·국가로 분석합니다."})]}),r.jsx(Al,{type:"button",children:"Breathe — Planner & Diary ▾"})]}),r.jsx(k3,{children:D3.map(n=>r.jsxs(L3,{children:[r.jsx(U3,{children:n.label}),r.jsx(H3,{children:n.value}),r.jsx(q3,{children:n.delta})]},n.label))}),r.jsxs(_m,{children:[r.jsxs(et,{children:[r.jsx(Gt,{children:"연령대 분포"}),r.jsx(G3,{children:O3.map(n=>r.jsxs(Y3,{children:[r.jsxs(Q3,{$highlight:n.highlight,children:[n.percent,"%"]}),r.jsx(V3,{style:{height:`${n.percent*2.6}px`},$highlight:n.highlight}),r.jsx(X3,{children:n.label})]},n.label))})]}),r.jsxs(et,{children:[r.jsx(Gt,{children:"성별 분포"}),r.jsx(Nm,{children:M3.map(n=>r.jsxs(km,{children:[r.jsxs(Lm,{children:[r.jsx("span",{children:n.label}),r.jsxs("span",{children:[n.percent,"%"]})]}),r.jsx(Um,{$thick:!0,children:r.jsx(Hm,{style:{width:`${n.percent}%`},$highlight:n.highlight})})]},n.label))}),r.jsx(qm,{children:"Breathe 플래너는 20–30대 여성 구매 비중이 가장 높습니다."})]})]}),r.jsxs(_m,{children:[r.jsxs(et,{children:[r.jsx(Gt,{children:"국가 분포"}),r.jsx(Nm,{children:B3.map(n=>r.jsxs(km,{children:[r.jsxs(Lm,{children:[r.jsx("span",{children:n.label}),r.jsxs(Z3,{$highlight:n.highlight,children:[n.percent,"%"]})]}),r.jsx(Um,{children:r.jsx(Hm,{style:{width:`${n.percent}%`},$highlight:n.highlight})})]},n.label))}),r.jsx(qm,{children:"해외 비중 42%. 미국·일본 순으로 높아 영문 상세·국제배송 강화 시 성장 여지가 큽니다."})]}),r.jsxs(K3,{children:[r.jsx(F3,{children:"주요 인사이트"}),r.jsx(J3,{children:_3.map(n=>r.jsxs(P3,{children:[r.jsx(W3,{}),r.jsx(I3,{children:n})]},n))})]})]})]})}const k3=h.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`,L3=h.div`
  background-color: ${({theme:n})=>n.colors.white};
  border: 1px solid ${({theme:n})=>n.colors.border};
  border-radius: 6px;
  padding: 22px;
`,U3=h.div`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.8px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,H3=h.div`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 30px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
  margin: 8px 0;
`,q3=h.div`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 12px;
  color: ${({theme:n})=>n.colors.brandRed};
`,_m=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
`,G3=h.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 180px;
`,Y3=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 8px;
`,Q3=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:n,$highlight:o})=>o?n.colors.brandRed:n.colors.textSecondary};
`,V3=h.div`
  width: 40px;
  border-radius: 4px 4px 0 0;
  background-color: ${({theme:n,$highlight:o})=>o?n.colors.brandRed:n.colors.ink};
  opacity: ${({$highlight:n})=>n?1:.78};
`,X3=h.span`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 11px;
  color: ${({theme:n})=>n.colors.textSecondary};
`,Nm=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,km=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Lm=h.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,Z3=h.span`
  font-family: ${({theme:n})=>n.fonts.sans};
  color: ${({theme:n,$highlight:o})=>o?n.colors.brandRed:n.colors.textSecondary};
`,Um=h.div`
  height: ${({$thick:n})=>n?"10px":"8px"};
  border-radius: ${({$thick:n})=>n?"5px":"4px"};
  background-color: ${({theme:n})=>n.colors.surface};
`,Hm=h.div`
  height: 100%;
  border-radius: inherit;
  background-color: ${({theme:n,$highlight:o})=>o?n.colors.brandRed:n.colors.ink};
  opacity: ${({$highlight:n})=>n?1:.8};
`,qm=h.p`
  margin-top: 18px;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 12px;
  line-height: 1.6;
  color: ${({theme:n})=>n.colors.textSecondary};
`,K3=h.section`
  background-color: ${({theme:n})=>n.colors.ink};
  border-radius: 6px;
  padding: 26px;
`,F3=h.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 20px;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.white};
  margin-bottom: 16px;
`,J3=h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,P3=h.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,W3=h.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  margin-top: 7px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.brandRed};
`,I3=h.p`
  flex: 1;
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: 13px;
  line-height: 1.6;
  color: ${({theme:n})=>n.colors.white};
  opacity: 0.92;
`;function Gm({children:n,role:o}){const{user:s}=Ra();return s?o&&s.role!==o?r.jsx(Sa,{to:"/",replace:!0}):r.jsx(r.Fragment,{children:n}):r.jsx(Sa,{to:"/signin",replace:!0})}function e4({title:n}){return r.jsxs(t4,{children:[r.jsx(n4,{children:n}),r.jsx(l4,{children:"이 페이지는 곧 준비됩니다."})]})}const t4=h(xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  min-height: 60vh;
`,n4=h.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: ${({theme:n})=>n.fontSizes.h2};
  font-weight: 500;
  color: ${({theme:n})=>n.colors.ink};
`,l4=h.p`
  font-family: ${({theme:n})=>n.fonts.kr};
  font-size: ${({theme:n})=>n.fontSizes.body};
  color: ${({theme:n})=>n.colors.textSecondary};
`,a4="/dolf/";function i4(){return r.jsx(o1,{basename:a4,children:r.jsxs(Nv,{children:[r.jsxs(Oe,{element:r.jsx(V1,{}),children:[r.jsx(Oe,{index:!0,element:r.jsx(OS,{})}),r.jsx(Oe,{path:"about",element:r.jsx(i2,{})}),r.jsx(Oe,{path:"products",element:r.jsx(T2,{})}),r.jsx(Oe,{path:"community",element:r.jsx(V2,{})}),r.jsx(Oe,{path:"contact",element:r.jsx(mj,{})}),r.jsx(Oe,{path:"shop",element:r.jsx(a$,{})}),r.jsx(Oe,{path:"shop/:slug",element:r.jsx(Yw,{})}),r.jsx(Oe,{path:"signin",element:r.jsx(Iw,{})}),r.jsx(Oe,{path:"signup",element:r.jsx(eE,{})}),r.jsx(Oe,{path:"mypage",element:r.jsx(Gm,{role:"user",children:r.jsx(nE,{})})}),r.jsx(Oe,{path:"*",element:r.jsx(e4,{title:"Not Found"})})]}),r.jsxs(Oe,{path:"admin",element:r.jsx(Gm,{role:"admin",children:r.jsx(RE,{})}),children:[r.jsx(Oe,{index:!0,element:r.jsx(VE,{})}),r.jsx(Oe,{path:"insights",element:r.jsx(N3,{})}),r.jsx(Oe,{path:"members",element:r.jsx(rT,{})}),r.jsx(Oe,{path:"members/:id",element:r.jsx(bT,{})}),r.jsx(Oe,{path:"orders",element:r.jsx(qT,{})}),r.jsx(Oe,{path:"orders/:id",element:r.jsx(WT,{})}),r.jsx(Oe,{path:"orders/:id/tracking",element:r.jsx(o3,{})}),r.jsx(Oe,{path:"products",element:r.jsx(y3,{})}),r.jsx(Oe,{path:"settings",element:r.jsx($3,{})})]})]})})}const o4={colors:{cream:"#fcfbf9",surface:"#f3f1ed",ink:"#1f1f21",textSecondary:"#6e6e72",brandRed:"#a81212",border:"#e2dfd9",white:"#ffffff"},fonts:{serif:'"Cormorant", Georgia, serif',script:'"Reenie Beanie", cursive',sans:'"Inter", "Noto Sans KR", system-ui, sans-serif',kr:'"Noto Sans KR", "Inter", system-ui, sans-serif'},fontSizes:{h1:"72px",h2:"34px",h3:"22px",krSubhead:"21px",bodyLg:"18px",body:"16px",nav:"14px",eyebrow:"13px"},layout:{maxWidth:"1440px",pagePadding:"64px",sectionPadding:"96px"}},r4=_b`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({theme:n})=>n.colors.cream};
    color: ${({theme:n})=>n.colors.ink};
    font-family: ${({theme:n})=>n.fonts.sans};
    font-size: ${({theme:n})=>n.fontSizes.body};
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
`;function c4({children:n}){const[o,s]=T.useState("ko"),u=T.useMemo(()=>({locale:o,setLocale:s,t:x1[o]}),[o]);return r.jsx(Ug.Provider,{value:u,children:n})}function s4({children:n}){const[o,s]=T.useState([]),u=T.useCallback((m,x=1)=>{s(j=>j.find(g=>g.slug===m.slug)?j.map(g=>g.slug===m.slug?{...g,quantity:g.quantity+x}:g):[...j,{...m,quantity:x}])},[]),f=T.useMemo(()=>({items:o,count:o.reduce((m,x)=>m+x.quantity,0),addItem:u}),[o,u]);return r.jsx(Hg.Provider,{value:f,children:n})}const u4=[{email:"admin@dolf.official",name:"DoLF Admin",role:"admin"},{email:"jihye@example.com",name:"김지혜",role:"user",joinedAt:"2025.01.12",phone:"010-1234-5678",address:"서울특별시 마포구 양화로 123, 4층",membership:"VIP"}],hu="dolf_auth",Ym="dolf_users";function Qm(n,o){try{const s=localStorage.getItem(n);return s?JSON.parse(s):o}catch{return o}}function f4({children:n}){const[o,s]=T.useState(()=>Qm(hu,null)),[u,f]=T.useState(()=>Qm(Ym,[])),m=T.useCallback(v=>{s(v),v?localStorage.setItem(hu,JSON.stringify(v)):localStorage.removeItem(hu)},[]),x=T.useCallback(v=>{const w=v.trim().toLowerCase(),D=u4.find(k=>k.email.toLowerCase()===w)??u.find(k=>k.email.toLowerCase()===w);return D?(m(D),D):null},[u,m]),j=T.useCallback(v=>{const w={email:v.email.trim(),name:v.name.trim(),role:"user",phone:v.phone,joinedAt:new Date().toISOString().slice(0,10).replace(/-/g,".")},D=[...u.filter(k=>k.email.toLowerCase()!==w.email.toLowerCase()),w];return f(D),localStorage.setItem(Ym,JSON.stringify(D)),m(w),w},[u,m]),y=T.useCallback(()=>m(null),[m]),g=T.useMemo(()=>({user:o,login:x,signUp:j,logout:y}),[o,x,j,y]);return r.jsx(qg.Provider,{value:g,children:n})}M0.createRoot(document.getElementById("root")).render(r.jsx(T.StrictMode,{children:r.jsxs(Ob,{theme:o4,children:[r.jsx(r4,{}),r.jsx(c4,{children:r.jsx(f4,{children:r.jsx(s4,{children:r.jsx(i4,{})})})})]})}));
