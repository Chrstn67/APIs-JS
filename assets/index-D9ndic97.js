(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))o(A);new MutationObserver(A=>{for(const j of A)if(j.type==="childList")for(const w of j.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function g(A){const j={};return A.integrity&&(j.integrity=A.integrity),A.referrerPolicy&&(j.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?j.credentials="include":A.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function o(A){if(A.ep)return;A.ep=!0;const j=g(A);fetch(A.href,j)}})();var Kr={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function qh(){if(Fd)return xi;Fd=1;var u=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function g(o,A,j){var w=null;if(j!==void 0&&(w=""+j),A.key!==void 0&&(w=""+A.key),"key"in A){j={};for(var q in A)q!=="key"&&(j[q]=A[q])}else j=A;return A=j.ref,{$$typeof:u,type:o,key:w,ref:A!==void 0?A:null,props:j}}return xi.Fragment=M,xi.jsx=g,xi.jsxs=g,xi}var Wd;function Oh(){return Wd||(Wd=1,Kr.exports=qh()),Kr.exports}var a=Oh(),Jr={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function kh(){if(ef)return de;ef=1;var u=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),w=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),D=Symbol.iterator;function _(m){return m===null||typeof m!="object"?null:(m=D&&m[D]||m["@@iterator"],typeof m=="function"?m:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Z={};function O(m,X,F){this.props=m,this.context=X,this.refs=Z,this.updater=F||L}O.prototype.isReactComponent={},O.prototype.setState=function(m,X){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,X,"setState")},O.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function I(){}I.prototype=O.prototype;function E(m,X,F){this.props=m,this.context=X,this.refs=Z,this.updater=F||L}var Y=E.prototype=new I;Y.constructor=E,G(Y,O.prototype),Y.isPureReactComponent=!0;var J=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function Q(m,X,F,K,se,ue){return F=ue.ref,{$$typeof:u,type:m,key:X,ref:F!==void 0?F:null,props:ue}}function b(m,X){return Q(m.type,X,void 0,void 0,void 0,m.props)}function h(m){return typeof m=="object"&&m!==null&&m.$$typeof===u}function P(m){var X={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(F){return X[F]})}var ee=/\/+/g;function W(m,X){return typeof m=="object"&&m!==null&&m.key!=null?P(""+m.key):X.toString(36)}function te(){}function xe(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(te,te):(m.status="pending",m.then(function(X){m.status==="pending"&&(m.status="fulfilled",m.value=X)},function(X){m.status==="pending"&&(m.status="rejected",m.reason=X)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function me(m,X,F,K,se){var ue=typeof m;(ue==="undefined"||ue==="boolean")&&(m=null);var ie=!1;if(m===null)ie=!0;else switch(ue){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(m.$$typeof){case u:case M:ie=!0;break;case R:return ie=m._init,me(ie(m._payload),X,F,K,se)}}if(ie)return se=se(m),ie=K===""?"."+W(m,0):K,J(se)?(F="",ie!=null&&(F=ie.replace(ee,"$&/")+"/"),me(se,X,F,"",function(It){return It})):se!=null&&(h(se)&&(se=b(se,F+(se.key==null||m&&m.key===se.key?"":(""+se.key).replace(ee,"$&/")+"/")+ie)),X.push(se)),1;ie=0;var Ke=K===""?".":K+":";if(J(m))for(var De=0;De<m.length;De++)K=m[De],ue=Ke+W(K,De),ie+=me(K,X,F,ue,se);else if(De=_(m),typeof De=="function")for(m=De.call(m),De=0;!(K=m.next()).done;)K=K.value,ue=Ke+W(K,De++),ie+=me(K,X,F,ue,se);else if(ue==="object"){if(typeof m.then=="function")return me(xe(m),X,F,K,se);throw X=String(m),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ie}function T(m,X,F){if(m==null)return m;var K=[],se=0;return me(m,K,"","",function(ue){return X.call(F,ue,se++)}),K}function $(m){if(m._status===-1){var X=m._result;X=X(),X.then(function(F){(m._status===0||m._status===-1)&&(m._status=1,m._result=F)},function(F){(m._status===0||m._status===-1)&&(m._status=2,m._result=F)}),m._status===-1&&(m._status=0,m._result=X)}if(m._status===1)return m._result.default;throw m._result}var ne=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function fe(){}return de.Children={map:T,forEach:function(m,X,F){T(m,function(){X.apply(this,arguments)},F)},count:function(m){var X=0;return T(m,function(){X++}),X},toArray:function(m){return T(m,function(X){return X})||[]},only:function(m){if(!h(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},de.Component=O,de.Fragment=g,de.Profiler=A,de.PureComponent=E,de.StrictMode=o,de.Suspense=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,de.__COMPILER_RUNTIME={__proto__:null,c:function(m){return B.H.useMemoCache(m)}},de.cache=function(m){return function(){return m.apply(null,arguments)}},de.cloneElement=function(m,X,F){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var K=G({},m.props),se=m.key,ue=void 0;if(X!=null)for(ie in X.ref!==void 0&&(ue=void 0),X.key!==void 0&&(se=""+X.key),X)!k.call(X,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&X.ref===void 0||(K[ie]=X[ie]);var ie=arguments.length-2;if(ie===1)K.children=F;else if(1<ie){for(var Ke=Array(ie),De=0;De<ie;De++)Ke[De]=arguments[De+2];K.children=Ke}return Q(m.type,se,void 0,void 0,ue,K)},de.createContext=function(m){return m={$$typeof:w,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:j,_context:m},m},de.createElement=function(m,X,F){var K,se={},ue=null;if(X!=null)for(K in X.key!==void 0&&(ue=""+X.key),X)k.call(X,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(se[K]=X[K]);var ie=arguments.length-2;if(ie===1)se.children=F;else if(1<ie){for(var Ke=Array(ie),De=0;De<ie;De++)Ke[De]=arguments[De+2];se.children=Ke}if(m&&m.defaultProps)for(K in ie=m.defaultProps,ie)se[K]===void 0&&(se[K]=ie[K]);return Q(m,ue,void 0,void 0,null,se)},de.createRef=function(){return{current:null}},de.forwardRef=function(m){return{$$typeof:q,render:m}},de.isValidElement=h,de.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:$}},de.memo=function(m,X){return{$$typeof:f,type:m,compare:X===void 0?null:X}},de.startTransition=function(m){var X=B.T,F={};B.T=F;try{var K=m(),se=B.S;se!==null&&se(F,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(fe,ne)}catch(ue){ne(ue)}finally{B.T=X}},de.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},de.use=function(m){return B.H.use(m)},de.useActionState=function(m,X,F){return B.H.useActionState(m,X,F)},de.useCallback=function(m,X){return B.H.useCallback(m,X)},de.useContext=function(m){return B.H.useContext(m)},de.useDebugValue=function(){},de.useDeferredValue=function(m,X){return B.H.useDeferredValue(m,X)},de.useEffect=function(m,X,F){var K=B.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(m,X)},de.useId=function(){return B.H.useId()},de.useImperativeHandle=function(m,X,F){return B.H.useImperativeHandle(m,X,F)},de.useInsertionEffect=function(m,X){return B.H.useInsertionEffect(m,X)},de.useLayoutEffect=function(m,X){return B.H.useLayoutEffect(m,X)},de.useMemo=function(m,X){return B.H.useMemo(m,X)},de.useOptimistic=function(m,X){return B.H.useOptimistic(m,X)},de.useReducer=function(m,X,F){return B.H.useReducer(m,X,F)},de.useRef=function(m){return B.H.useRef(m)},de.useState=function(m){return B.H.useState(m)},de.useSyncExternalStore=function(m,X,F){return B.H.useSyncExternalStore(m,X,F)},de.useTransition=function(){return B.H.useTransition()},de.version="19.1.0",de}var tf;function ic(){return tf||(tf=1,Jr.exports=kh()),Jr.exports}var v=ic(),Fr={exports:{}},yi={},Wr={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Lh(){return nf||(nf=1,function(u){function M(T,$){var ne=T.length;T.push($);e:for(;0<ne;){var fe=ne-1>>>1,m=T[fe];if(0<A(m,$))T[fe]=$,T[ne]=m,ne=fe;else break e}}function g(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var $=T[0],ne=T.pop();if(ne!==$){T[0]=ne;e:for(var fe=0,m=T.length,X=m>>>1;fe<X;){var F=2*(fe+1)-1,K=T[F],se=F+1,ue=T[se];if(0>A(K,ne))se<m&&0>A(ue,K)?(T[fe]=ue,T[se]=ne,fe=se):(T[fe]=K,T[F]=ne,fe=F);else if(se<m&&0>A(ue,ne))T[fe]=ue,T[se]=ne,fe=se;else break e}}return $}function A(T,$){var ne=T.sortIndex-$.sortIndex;return ne!==0?ne:T.id-$.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;u.unstable_now=function(){return j.now()}}else{var w=Date,q=w.now();u.unstable_now=function(){return w.now()-q}}var x=[],f=[],R=1,D=null,_=3,L=!1,G=!1,Z=!1,O=!1,I=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function J(T){for(var $=g(f);$!==null;){if($.callback===null)o(f);else if($.startTime<=T)o(f),$.sortIndex=$.expirationTime,M(x,$);else break;$=g(f)}}function B(T){if(Z=!1,J(T),!G)if(g(x)!==null)G=!0,k||(k=!0,W());else{var $=g(f);$!==null&&me(B,$.startTime-T)}}var k=!1,Q=-1,b=5,h=-1;function P(){return O?!0:!(u.unstable_now()-h<b)}function ee(){if(O=!1,k){var T=u.unstable_now();h=T;var $=!0;try{e:{G=!1,Z&&(Z=!1,E(Q),Q=-1),L=!0;var ne=_;try{t:{for(J(T),D=g(x);D!==null&&!(D.expirationTime>T&&P());){var fe=D.callback;if(typeof fe=="function"){D.callback=null,_=D.priorityLevel;var m=fe(D.expirationTime<=T);if(T=u.unstable_now(),typeof m=="function"){D.callback=m,J(T),$=!0;break t}D===g(x)&&o(x),J(T)}else o(x);D=g(x)}if(D!==null)$=!0;else{var X=g(f);X!==null&&me(B,X.startTime-T),$=!1}}break e}finally{D=null,_=ne,L=!1}$=void 0}}finally{$?W():k=!1}}}var W;if(typeof Y=="function")W=function(){Y(ee)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,xe=te.port2;te.port1.onmessage=ee,W=function(){xe.postMessage(null)}}else W=function(){I(ee,0)};function me(T,$){Q=I(function(){T(u.unstable_now())},$)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(T){T.callback=null},u.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},u.unstable_getCurrentPriorityLevel=function(){return _},u.unstable_next=function(T){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var ne=_;_=$;try{return T()}finally{_=ne}},u.unstable_requestPaint=function(){O=!0},u.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var ne=_;_=T;try{return $()}finally{_=ne}},u.unstable_scheduleCallback=function(T,$,ne){var fe=u.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?fe+ne:fe):ne=fe,T){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=ne+m,T={id:R++,callback:$,priorityLevel:T,startTime:ne,expirationTime:m,sortIndex:-1},ne>fe?(T.sortIndex=ne,M(f,T),g(x)===null&&T===g(f)&&(Z?(E(Q),Q=-1):Z=!0,me(B,ne-fe))):(T.sortIndex=m,M(x,T),G||L||(G=!0,k||(k=!0,W()))),T},u.unstable_shouldYield=P,u.unstable_wrapCallback=function(T){var $=_;return function(){var ne=_;_=$;try{return T.apply(this,arguments)}finally{_=ne}}}}(ec)),ec}var af;function Bh(){return af||(af=1,Wr.exports=Lh()),Wr.exports}var tc={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function Uh(){if(sf)return $e;sf=1;var u=ic();function M(x){var f="https://react.dev/errors/"+x;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)f+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var o={d:{f:g,r:function(){throw Error(M(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},A=Symbol.for("react.portal");function j(x,f,R){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:D==null?null:""+D,children:x,containerInfo:f,implementation:R}}var w=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(x,f){if(x==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$e.createPortal=function(x,f){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(M(299));return j(x,f,null,R)},$e.flushSync=function(x){var f=w.T,R=o.p;try{if(w.T=null,o.p=2,x)return x()}finally{w.T=f,o.p=R,o.d.f()}},$e.preconnect=function(x,f){typeof x=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,o.d.C(x,f))},$e.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},$e.preinit=function(x,f){if(typeof x=="string"&&f&&typeof f.as=="string"){var R=f.as,D=q(R,f.crossOrigin),_=typeof f.integrity=="string"?f.integrity:void 0,L=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;R==="style"?o.d.S(x,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:D,integrity:_,fetchPriority:L}):R==="script"&&o.d.X(x,{crossOrigin:D,integrity:_,fetchPriority:L,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},$e.preinitModule=function(x,f){if(typeof x=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var R=q(f.as,f.crossOrigin);o.d.M(x,{crossOrigin:R,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&o.d.M(x)},$e.preload=function(x,f){if(typeof x=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var R=f.as,D=q(R,f.crossOrigin);o.d.L(x,R,{crossOrigin:D,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},$e.preloadModule=function(x,f){if(typeof x=="string")if(f){var R=q(f.as,f.crossOrigin);o.d.m(x,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:R,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else o.d.m(x)},$e.requestFormReset=function(x){o.d.r(x)},$e.unstable_batchedUpdates=function(x,f){return x(f)},$e.useFormState=function(x,f,R){return w.H.useFormState(x,f,R)},$e.useFormStatus=function(){return w.H.useHostTransitionStatus()},$e.version="19.1.0",$e}var lf;function Hh(){if(lf)return tc.exports;lf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(M){console.error(M)}}return u(),tc.exports=Uh(),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function _h(){if(rf)return yi;rf=1;var u=Bh(),M=ic(),g=Hh();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(j(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=j(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return q(s),e;if(l===i)return q(s),t;l=l.sibling}throw Error(o(188))}if(n.return!==i.return)n=s,i=l;else{for(var r=!1,c=s.child;c;){if(c===n){r=!0,n=s,i=l;break}if(c===i){r=!0,i=s,n=l;break}c=c.sibling}if(!r){for(c=l.child;c;){if(c===n){r=!0,n=l,i=s;break}if(c===i){r=!0,i=l,n=s;break}c=c.sibling}if(!r)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,D=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case O:return"Profiler";case Z:return"StrictMode";case B:return"Suspense";case k:return"SuspenseList";case h:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case Y:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case b:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var me=Array.isArray,T=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},fe=[],m=-1;function X(e){return{current:e}}function F(e){0>m||(e.current=fe[m],fe[m]=null,m--)}function K(e,t){m++,fe[m]=e.current,e.current=t}var se=X(null),ue=X(null),ie=X(null),Ke=X(null);function De(e,t){switch(K(ie,t),K(ue,e),K(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cd(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(se),K(se,e)}function It(){F(se),F(ue),F(ie)}function ks(e){e.memoizedState!==null&&K(Ke,e);var t=se.current,n=Td(t,e.type);t!==n&&(K(ue,e),K(se,n))}function bi(e){ue.current===e&&(F(se),F(ue)),Ke.current===e&&(F(Ke),mi._currentValue=ne)}var Ls=Object.prototype.hasOwnProperty,Bs=u.unstable_scheduleCallback,Us=u.unstable_cancelCallback,df=u.unstable_shouldYield,ff=u.unstable_requestPaint,Et=u.unstable_now,mf=u.unstable_getCurrentPriorityLevel,sc=u.unstable_ImmediatePriority,lc=u.unstable_UserBlockingPriority,ji=u.unstable_NormalPriority,hf=u.unstable_LowPriority,rc=u.unstable_IdlePriority,pf=u.log,gf=u.unstable_setDisableYieldValue,ja=null,at=null;function Qt(e){if(typeof pf=="function"&&gf(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(ja,e)}catch{}}var it=Math.clz32?Math.clz32:yf,vf=Math.log,xf=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(vf(e)/xf|0)|0}var Si=256,Ni=4194304;function xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ai(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=i&134217727;return c!==0?(i=c&~l,i!==0?s=xn(i):(r&=c,r!==0?s=xn(r):n||(n=c&~e,n!==0&&(s=xn(n))))):(c=i&~l,c!==0?s=xn(c):r!==0?s=xn(r):n||(n=i&~e,n!==0&&(s=xn(n)))),s===0?0:t!==0&&t!==s&&(t&l)===0&&(l=s&-s,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:s}function Sa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cc(){var e=Si;return Si<<=1,(Si&4194048)===0&&(Si=256),e}function oc(){var e=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jf(e,t,n,i,s,l){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,N=e.hiddenUpdates;for(n=r&~n;0<n;){var U=31-it(n),V=1<<U;c[U]=0,d[U]=-1;var C=N[U];if(C!==null)for(N[U]=null,U=0;U<C.length;U++){var z=C[U];z!==null&&(z.lane&=-536870913)}n&=~V}i!==0&&uc(e,i,0),l!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~t))}function uc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-it(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function dc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-it(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fc(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Id(e.type))}function Sf(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Zt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Zt,Fe="__reactProps$"+Zt,Ln="__reactContainer$"+Zt,Vs="__reactEvents$"+Zt,Nf="__reactListeners$"+Zt,Af="__reactHandles$"+Zt,mc="__reactResources$"+Zt,Aa="__reactMarker$"+Zt;function Ys(e){delete e[Qe],delete e[Fe],delete e[Vs],delete e[Nf],delete e[Af]}function Bn(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wd(e);e!==null;){if(n=e[Qe])return n;e=wd(e)}return t}e=n,n=e.parentNode}return null}function Un(e){if(e=e[Qe]||e[Ln]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Hn(e){var t=e[mc];return t||(t=e[mc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[Aa]=!0}var hc=new Set,pc={};function yn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(pc[e]=t,e=0;e<t.length;e++)hc.add(t[e])}var Ef=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},vc={};function Cf(e){return Ls.call(vc,e)?!0:Ls.call(gc,e)?!1:Ef.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function Ei(e,t,n){if(Cf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Xs,xc;function Gn(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||"",xc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xs+e+xc}var Ps=!1;function Is(e,t){if(!e||Ps)return"";Ps=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(z){var C=z}Reflect.construct(e,[],V)}else{try{V.call()}catch(z){C=z}e.call(V.prototype)}}else{try{throw Error()}catch(z){C=z}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],c=l[1];if(r&&c){var d=r.split(`
`),N=c.split(`
`);for(s=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;if(i===d.length||s===N.length)for(i=d.length-1,s=N.length-1;1<=i&&0<=s&&d[i]!==N[s];)s--;for(;1<=i&&0<=s;i--,s--)if(d[i]!==N[s]){if(i!==1||s!==1)do if(i--,s--,0>s||d[i]!==N[s]){var U=`
`+d[i].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=i&&0<=s);break}}}finally{Ps=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Gn(n):""}function Tf(e){switch(e.tag){case 26:case 27:case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 15:return Is(e.type,!1);case 11:return Is(e.type.render,!1);case 1:return Is(e.type,!0);case 31:return Gn("Activity");default:return""}}function yc(e){try{var t="";do t+=Tf(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zf(e){var t=bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){i=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=zf(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=bc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Df=/[\n"\\]/g;function mt(e){return e.replace(Df,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qs(e,t,n,i,s,l,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Zs(e,r,ft(t)):n!=null?Zs(e,r,ft(n)):i!=null&&e.removeAttribute("value"),s==null&&l!=null&&(e.defaultChecked=!!l),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ft(c):e.removeAttribute("name")}function Sc(e,t,n,i,s,l,r,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;n=n!=null?""+ft(n):"",t=t!=null?""+ft(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=c?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function Zs(e,t,n){t==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vn(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Nc(e,t,n){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ft(n):""}function Ac(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(me(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ft(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ec(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Mf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cc(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Ec(e,s,i)}else for(var l in t)t.hasOwnProperty(l)&&Ec(e,l,t[l])}function $s(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return Rf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ks=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xn=null,Pn=null;function Tc(e){var t=Un(e);if(t&&(e=t.stateNode)){var n=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Fe]||null;if(!s)throw Error(o(90));Qs(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&jc(i)}break e;case"textarea":Nc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}}}var Fs=!1;function zc(e,t,n){if(Fs)return e(t,n);Fs=!0;try{var i=e(t);return i}finally{if(Fs=!1,(Xn!==null||Pn!==null)&&(hs(),Xn&&(t=Xn,e=Pn,Pn=Xn=null,Tc(t),e)))for(t=0;t<e.length;t++)Tc(e[t])}}function Ca(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Fe]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(Rt)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Ws=!1}var $t=null,el=null,Mi=null;function Dc(){if(Mi)return Mi;var e,t=el,n=t.length,i,s="value"in $t?$t.value:$t.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[l-i];i++);return Mi=s.slice(e,1<i?1-i:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Mc(){return!1}function We(e){function t(n,i,s,l,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ri:Mc,this.isPropagationStopped=Mc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=We(bn),za=R({},bn,{view:0,detail:0}),qf=We(za),tl,nl,Da,Oi=R({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Da&&(Da&&e.type==="mousemove"?(tl=e.screenX-Da.screenX,nl=e.screenY-Da.screenY):nl=tl=0,Da=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),wc=We(Oi),Of=R({},Oi,{dataTransfer:0}),kf=We(Of),Lf=R({},za,{relatedTarget:0}),al=We(Lf),Bf=R({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=We(Bf),Hf=R({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=We(Hf),Gf=R({},bn,{data:0}),Rc=We(Gf),Vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xf[e])?!!t[e]:!1}function il(){return Pf}var If=R({},za,{key:function(e){if(e.key){var t=Vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qf=We(If),Zf=R({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=We(Zf),$f=R({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Kf=We($f),Jf=R({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=We(Jf),Wf=R({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=We(Wf),tm=R({},bn,{newState:0,oldState:0}),nm=We(tm),am=[9,13,27,32],sl=Rt&&"CompositionEvent"in window,Ma=null;Rt&&"documentMode"in document&&(Ma=document.documentMode);var im=Rt&&"TextEvent"in window&&!Ma,Oc=Rt&&(!sl||Ma&&8<Ma&&11>=Ma),kc=" ",Lc=!1;function Bc(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function sm(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Lc=!0,kc);case"textInput":return e=t.data,e===kc&&Lc?null:e;default:return null}}function lm(e,t){if(In)return e==="compositionend"||!sl&&Bc(e,t)?(e=Dc(),Mi=el=$t=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rm[e.type]:t==="textarea"}function _c(e,t,n,i){Xn?Pn?Pn.push(i):Pn=[i]:Xn=i,t=bs(t,"onChange"),0<t.length&&(n=new qi("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var wa=null,Ra=null;function cm(e){jd(e,0)}function ki(e){var t=Ea(e);if(jc(t))return e}function Gc(e,t){if(e==="change")return t}var Vc=!1;if(Rt){var ll;if(Rt){var rl="oninput"in document;if(!rl){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),rl=typeof Yc.oninput=="function"}ll=rl}else ll=!1;Vc=ll&&(!document.documentMode||9<document.documentMode)}function Xc(){wa&&(wa.detachEvent("onpropertychange",Pc),Ra=wa=null)}function Pc(e){if(e.propertyName==="value"&&ki(Ra)){var t=[];_c(t,Ra,e,Js(e)),zc(cm,t)}}function om(e,t,n){e==="focusin"?(Xc(),wa=t,Ra=n,wa.attachEvent("onpropertychange",Pc)):e==="focusout"&&Xc()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Ra)}function dm(e,t){if(e==="click")return ki(t)}function fm(e,t){if(e==="input"||e==="change")return ki(t)}function mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:mm;function qa(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Ls.call(t,s)||!st(e[s],t[s]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Ic(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hm=Rt&&"documentMode"in document&&11>=document.documentMode,Qn=null,ol=null,Oa=null,ul=!1;function Kc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Qn==null||Qn!==zi(i)||(i=Qn,"selectionStart"in i&&cl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&qa(Oa,i)||(Oa=i,i=bs(ol,"onSelect"),0<i.length&&(t=new qi("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Qn)))}function jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionrun:jn("Transition","TransitionRun"),transitionstart:jn("Transition","TransitionStart"),transitioncancel:jn("Transition","TransitionCancel"),transitionend:jn("Transition","TransitionEnd")},dl={},Jc={};Rt&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Sn(e){if(dl[e])return dl[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return dl[e]=t[n];return e}var Fc=Sn("animationend"),Wc=Sn("animationiteration"),eo=Sn("animationstart"),pm=Sn("transitionrun"),gm=Sn("transitionstart"),vm=Sn("transitioncancel"),to=Sn("transitionend"),no=new Map,fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fl.push("scrollEnd");function St(e,t){no.set(e,t),yn(t,[e])}var ao=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var n=ao.get(e);return n!==void 0?n:(t={value:e,source:t,stack:yc(t)},ao.set(e,t),t)}return{value:e,source:t,stack:yc(t)}}var pt=[],$n=0,ml=0;function Li(){for(var e=$n,t=ml=$n=0;t<e;){var n=pt[t];pt[t++]=null;var i=pt[t];pt[t++]=null;var s=pt[t];pt[t++]=null;var l=pt[t];if(pt[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}l!==0&&io(n,s,l)}}function Bi(e,t,n,i){pt[$n++]=e,pt[$n++]=t,pt[$n++]=n,pt[$n++]=i,ml|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function hl(e,t,n,i){return Bi(e,t,n,i),Ui(e)}function Kn(e,t){return Bi(e,null,null,t),Ui(e)}function io(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(s=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,s&&t!==null&&(s=31-it(n),e=l.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),l):null}function Ui(e){if(50<si)throw si=0,br=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jn={};function xm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,i){return new xm(e,t,n,i)}function pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function so(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hi(e,t,n,i,s,l){var r=0;if(i=e,typeof e=="function")pl(e)&&(r=1);else if(typeof e=="string")r=bh(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case h:return e=lt(31,n,t,s),e.elementType=h,e.lanes=l,e;case G:return Nn(n.children,s,l,t);case Z:r=8,s|=24;break;case O:return e=lt(12,n,t,s|2),e.elementType=O,e.lanes=l,e;case B:return e=lt(13,n,t,s),e.elementType=B,e.lanes=l,e;case k:return e=lt(19,n,t,s),e.elementType=k,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:case Y:r=10;break e;case E:r=9;break e;case J:r=11;break e;case Q:r=14;break e;case b:r=16,i=null;break e}r=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=lt(r,n,t,s),t.elementType=e,t.type=i,t.lanes=l,t}function Nn(e,t,n,i){return e=lt(7,e,i,t),e.lanes=n,e}function gl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fn=[],Wn=0,_i=null,Gi=0,gt=[],vt=0,An=null,Ot=1,kt="";function En(e,t){Fn[Wn++]=Gi,Fn[Wn++]=_i,_i=e,Gi=t}function lo(e,t,n){gt[vt++]=Ot,gt[vt++]=kt,gt[vt++]=An,An=e;var i=Ot;e=kt;var s=32-it(i)-1;i&=~(1<<s),n+=1;var l=32-it(t)+s;if(30<l){var r=s-s%5;l=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ot=1<<32-it(t)+s|n<<s|i,kt=l+e}else Ot=1<<l|n<<s|i,kt=e}function xl(e){e.return!==null&&(En(e,1),lo(e,1,0))}function yl(e){for(;e===_i;)_i=Fn[--Wn],Fn[Wn]=null,Gi=Fn[--Wn],Fn[Wn]=null;for(;e===An;)An=gt[--vt],gt[vt]=null,kt=gt[--vt],gt[vt]=null,Ot=gt[--vt],gt[vt]=null}var Je=null,Re=null,je=!1,Cn=null,Ct=!1,bl=Error(o(519));function Tn(e){var t=Error(o(418,""));throw Ba(ht(t,e)),bl}function ro(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Qe]=e,t[Fe]=i,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<ri.length;n++)ve(ri[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Sc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Ti(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),Ac(t,i.value,i.defaultValue,i.children),Ti(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ed(t.textContent,n)?(i.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),i.onScroll!=null&&ve("scroll",t),i.onScrollEnd!=null&&ve("scrollend",t),i.onClick!=null&&(t.onclick=js),t=!0):t=!1,t||Tn(e)}function co(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Je=Je.return}}function ka(e){if(e!==Je)return!1;if(!je)return co(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lr(e.type,e.memoizedProps)),n=!n),n&&Re&&Tn(e),co(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,fn(e.type)?(e=_r,_r=null,Re=e):Re=t):Re=Je?At(e.stateNode.nextSibling):null;return!0}function La(){Re=Je=null,je=!1}function oo(){var e=Cn;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),Cn=null),e}function Ba(e){Cn===null?Cn=[e]:Cn.push(e)}var jl=X(null),zn=null,Lt=null;function Kt(e,t,n){K(jl,t._currentValue),t._currentValue=n}function Bt(e){e._currentValue=jl.current,F(jl)}function Sl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Nl(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){var r=s.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=s;for(var d=0;d<t.length;d++)if(c.context===t[d]){l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Sl(l.return,n,e),i||(r=null);break e}l=c.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(o(341));r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Sl(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ua(e,t,n,i){e=null;for(var s=t,l=!1;s!==null;){if(!l){if((s.flags&524288)!==0)l=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var c=s.type;st(s.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(s===Ke.current){if(r=s.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}s=s.return}e!==null&&Nl(t,e,n,i),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!st(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dn(e){zn=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return uo(zn,e)}function Yi(e,t){return zn===null&&Dn(e),uo(e,t)}function uo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Lt===null){if(e===null)throw Error(o(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return n}var ym=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bm=u.unstable_scheduleCallback,jm=u.unstable_NormalPriority,Ue={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Al(){return{controller:new ym,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&bm(jm,function(){e.controller.abort()})}var _a=null,El=0,ea=0,ta=null;function Sm(e,t){if(_a===null){var n=_a=[];El=0,ea=Tr(),ta={status:"pending",value:void 0,then:function(i){n.push(i)}}}return El++,t.then(fo,fo),t}function fo(){if(--El===0&&_a!==null){ta!==null&&(ta.status="fulfilled");var e=_a;_a=null,ea=0,ta=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var mo=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sm(e,t),mo!==null&&mo(e,t)};var Mn=X(null);function Cl(){var e=Mn.current;return e!==null?e:ze.pooledCache}function Xi(e,t){t===null?K(Mn,Mn.current):K(Mn,t.pool)}function ho(){var e=Cl();return e===null?null:{parent:Ue._currentValue,pool:e}}var Ga=Error(o(460)),po=Error(o(474)),Pi=Error(o(542)),Tl={then:function(){}};function go(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function vo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yo(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yo(e),e}throw Va=t,Ga}}var Va=null;function xo(){if(Va===null)throw Error(o(459));var e=Va;return Va=null,e}function yo(e){if(e===Ga||e===Pi)throw Error(o(483))}var Jt=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ft(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Ui(e),io(e,null,n),t}return Bi(e,i,t,n),Ui(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,dc(e,n)}}function Ml(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?s=l=r:l=l.next=r,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wl=!1;function Xa(){if(wl){var e=ta;if(e!==null)throw e}}function Pa(e,t,n,i){wl=!1;var s=e.updateQueue;Jt=!1;var l=s.firstBaseUpdate,r=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var d=c,N=d.next;d.next=null,r===null?l=N:r.next=N,r=d;var U=e.alternate;U!==null&&(U=U.updateQueue,c=U.lastBaseUpdate,c!==r&&(c===null?U.firstBaseUpdate=N:c.next=N,U.lastBaseUpdate=d))}if(l!==null){var V=s.baseState;r=0,U=N=d=null,c=l;do{var C=c.lane&-536870913,z=C!==c.lane;if(z?(ye&C)===C:(i&C)===C){C!==0&&C===ea&&(wl=!0),U!==null&&(U=U.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var oe=e,re=c;C=t;var Ce=n;switch(re.tag){case 1:if(oe=re.payload,typeof oe=="function"){V=oe.call(Ce,V,C);break e}V=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=re.payload,C=typeof oe=="function"?oe.call(Ce,V,C):oe,C==null)break e;V=R({},V,C);break e;case 2:Jt=!0}}C=c.callback,C!==null&&(e.flags|=64,z&&(e.flags|=8192),z=s.callbacks,z===null?s.callbacks=[C]:z.push(C))}else z={lane:C,tag:c.tag,payload:c.payload,callback:c.callback,next:null},U===null?(N=U=z,d=V):U=U.next=z,r|=C;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;z=c,c=z.next,z.next=null,s.lastBaseUpdate=z,s.shared.pending=null}}while(!0);U===null&&(d=V),s.baseState=d,s.firstBaseUpdate=N,s.lastBaseUpdate=U,l===null&&(s.shared.lanes=0),cn|=r,e.lanes=r,e.memoizedState=V}}function bo(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function jo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bo(n[e],t)}var na=X(null),Qi=X(0);function So(e,t){e=Xt,K(Qi,e),K(na,t),Xt=e|t.baseLanes}function Rl(){K(Qi,Xt),K(na,na.current)}function ql(){Xt=Qi.current,F(na),F(Qi)}var en=0,he=null,Ae=null,Le=null,Zi=!1,aa=!1,wn=!1,$i=0,Ia=0,ia=null,Am=0;function Oe(){throw Error(o(321))}function Ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function kl(e,t,n,i,s,l){return en=l,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?su:lu,wn=!1,l=n(i,s),wn=!1,aa&&(l=Ao(t,n,i,s)),No(e),l}function No(e){T.H=ts;var t=Ae!==null&&Ae.next!==null;if(en=0,Le=Ae=he=null,Zi=!1,Ia=0,ia=null,t)throw Error(o(300));e===null||Ge||(e=e.dependencies,e!==null&&Vi(e)&&(Ge=!0))}function Ao(e,t,n,i){he=e;var s=0;do{if(aa&&(ia=null),Ia=0,aa=!1,25<=s)throw Error(o(301));if(s+=1,Le=Ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}T.H=wm,l=t(n,i)}while(aa);return l}function Em(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Qa(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(he.flags|=1024),t}function Ll(){var e=$i!==0;return $i=0,e}function Bl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ul(e){if(Zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zi=!1}en=0,Le=Ae=he=null,aa=!1,Ia=$i=0,ia=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?he.memoizedState=Le=e:Le=Le.next=e,Le}function Be(){if(Ae===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Le===null?he.memoizedState:Le.next;if(t!==null)Le=t,Ae=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Le===null?he.memoizedState=Le=e:Le=Le.next=e}return Le}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qa(e){var t=Ia;return Ia+=1,ia===null&&(ia=[]),e=vo(ia,e,t),t=he,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?su:lu),e}function Ki(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qa(e);if(e.$$typeof===Y)return Ze(e)}throw Error(o(438,String(e)))}function _l(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hl(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=P;return t.index++,n}function Ut(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=Be();return Gl(t,Ae,e)}function Gl(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var s=e.baseQueue,l=i.pending;if(l!==null){if(s!==null){var r=s.next;s.next=l.next,l.next=r}t.baseQueue=s=l,i.pending=null}if(l=e.baseState,s===null)e.memoizedState=l;else{t=s.next;var c=r=null,d=null,N=t,U=!1;do{var V=N.lane&-536870913;if(V!==N.lane?(ye&V)===V:(en&V)===V){var C=N.revertLane;if(C===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),V===ea&&(U=!0);else if((en&C)===C){N=N.next,C===ea&&(U=!0);continue}else V={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},d===null?(c=d=V,r=l):d=d.next=V,he.lanes|=C,cn|=C;V=N.action,wn&&n(l,V),l=N.hasEagerState?N.eagerState:n(l,V)}else C={lane:V,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},d===null?(c=d=C,r=l):d=d.next=C,he.lanes|=V,cn|=V;N=N.next}while(N!==null&&N!==t);if(d===null?r=l:d.next=c,!st(l,e.memoizedState)&&(Ge=!0,U&&(n=ta,n!==null)))throw n;e.memoizedState=l,e.baseState=r,e.baseQueue=d,i.lastRenderedState=l}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Vl(e){var t=Be(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do l=e(l,r.action),r=r.next;while(r!==s);st(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Eo(e,t,n){var i=he,s=Be(),l=je;if(l){if(n===void 0)throw Error(o(407));n=n()}else n=t();var r=!st((Ae||s).memoizedState,n);r&&(s.memoizedState=n,Ge=!0),s=s.queue;var c=zo.bind(null,i,s,e);if(Za(2048,8,c,[e]),s.getSnapshot!==t||r||Le!==null&&Le.memoizedState.tag&1){if(i.flags|=2048,sa(9,Fi(),To.bind(null,i,s,n,t),null),ze===null)throw Error(o(349));l||(en&124)!==0||Co(i,t,n)}return n}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Hl(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function To(e,t,n,i){t.value=n,t.getSnapshot=i,Do(t)&&Mo(e)}function zo(e,t,n){return n(function(){Do(t)&&Mo(e)})}function Do(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Mo(e){var t=Kn(e,2);t!==null&&dt(t,e,2)}function Yl(e){var t=et();if(typeof e=="function"){var n=e;if(e=n(),wn){Qt(!0);try{n()}finally{Qt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},t}function wo(e,t,n,i){return e.baseState=n,Gl(e,Ae,typeof i=="function"?i:Ut)}function Cm(e,t,n,i,s){if(es(e))throw Error(o(485));if(e=t.action,e!==null){var l={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};T.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,Ro(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Ro(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var l=T.T,r={};T.T=r;try{var c=n(s,i),d=T.S;d!==null&&d(r,c),qo(e,t,c)}catch(N){Xl(e,t,N)}finally{T.T=l}}else try{l=n(s,i),qo(e,t,l)}catch(N){Xl(e,t,N)}}function qo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Oo(e,t,i)},function(i){return Xl(e,t,i)}):Oo(e,t,n)}function Oo(e,t,n){t.status="fulfilled",t.value=n,ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ro(e,n)))}function Xl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ko(t),t=t.next;while(t!==i)}e.action=null}function ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lo(e,t){return t}function Bo(e,t){if(je){var n=ze.formState;if(n!==null){e:{var i=he;if(je){if(Re){t:{for(var s=Re,l=Ct;s.nodeType!==8;){if(!l){s=null;break t}if(s=At(s.nextSibling),s===null){s=null;break t}}l=s.data,s=l==="F!"||l==="F"?s:null}if(s){Re=At(s.nextSibling),i=s.data==="F!";break e}}Tn(i)}i=!1}i&&(t=n[0])}}return n=et(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},n.queue=i,n=nu.bind(null,he,i),i.dispatch=n,i=Yl(!1),l=$l.bind(null,he,!1,i.queue),i=et(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Cm.bind(null,he,s,l,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Uo(e){var t=Be();return Ho(t,Ae,e)}function Ho(e,t,n){if(t=Gl(e,t,Lo)[0],e=Ji(Ut)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Qa(t)}catch(r){throw r===Ga?Pi:r}else i=t;t=Be();var s=t.queue,l=s.dispatch;return n!==t.memoizedState&&(he.flags|=2048,sa(9,Fi(),Tm.bind(null,s,n),null)),[i,l,e]}function Tm(e,t){e.action=t}function _o(e){var t=Be(),n=Ae;if(n!==null)return Ho(t,n,e);Be(),t=t.memoizedState,n=Be();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function sa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=Hl(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fi(){return{destroy:void 0,resource:void 0}}function Go(){return Be().memoizedState}function Wi(e,t,n,i){var s=et();i=i===void 0?null:i,he.flags|=e,s.memoizedState=sa(1|t,Fi(),n,i)}function Za(e,t,n,i){var s=Be();i=i===void 0?null:i;var l=s.memoizedState.inst;Ae!==null&&i!==null&&Ol(i,Ae.memoizedState.deps)?s.memoizedState=sa(t,l,n,i):(he.flags|=e,s.memoizedState=sa(1|t,l,n,i))}function Vo(e,t){Wi(8390656,8,e,t)}function Yo(e,t){Za(2048,8,e,t)}function Xo(e,t){return Za(4,2,e,t)}function Po(e,t){return Za(4,4,e,t)}function Io(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qo(e,t,n){n=n!=null?n.concat([e]):null,Za(4,4,Io.bind(null,t,e),n)}function Pl(){}function Zo(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ol(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=Be();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ol(t,i[1]))return i[0];if(i=e(),wn){Qt(!0);try{e()}finally{Qt(!1)}}return n.memoizedState=[i,t],i}function Il(e,t,n){return n===void 0||(en&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Fu(),he.lanes|=e,cn|=e,n)}function Ko(e,t,n,i){return st(n,t)?n:na.current!==null?(e=Il(e,n,i),st(e,t)||(Ge=!0),e):(en&42)===0?(Ge=!0,e.memoizedState=n):(e=Fu(),he.lanes|=e,cn|=e,t)}function Jo(e,t,n,i,s){var l=$.p;$.p=l!==0&&8>l?l:8;var r=T.T,c={};T.T=c,$l(e,!1,t,n);try{var d=s(),N=T.S;if(N!==null&&N(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var U=Nm(d,i);$a(e,t,U,ut(e))}else $a(e,t,i,ut(e))}catch(V){$a(e,t,{then:function(){},status:"rejected",reason:V},ut())}finally{$.p=l,T.T=r}}function zm(){}function Ql(e,t,n,i){if(e.tag!==5)throw Error(o(476));var s=Fo(e).queue;Jo(e,s,t,ne,n===null?zm:function(){return Wo(e),n(i)})}function Fo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wo(e){var t=Fo(e).next.queue;$a(e,t,{},ut())}function Zl(){return Ze(mi)}function eu(){return Be().memoizedState}function tu(){return Be().memoizedState}function Dm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ut();e=Ft(n);var i=Wt(t,e,n);i!==null&&(dt(i,t,n),Ya(i,t,n)),t={cache:Al()},e.payload=t;return}t=t.return}}function Mm(e,t,n){var i=ut();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},es(e)?au(t,n):(n=hl(e,t,n,i),n!==null&&(dt(n,e,i),iu(n,t,i)))}function nu(e,t,n){var i=ut();$a(e,t,n,i)}function $a(e,t,n,i){var s={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(es(e))au(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,c=l(r,n);if(s.hasEagerState=!0,s.eagerState=c,st(c,r))return Bi(e,t,s,0),ze===null&&Li(),!1}catch{}finally{}if(n=hl(e,t,s,i),n!==null)return dt(n,e,i),iu(n,t,i),!0}return!1}function $l(e,t,n,i){if(i={lane:2,revertLane:Tr(),action:i,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(o(479))}else t=hl(e,n,i,2),t!==null&&dt(t,e,2)}function es(e){var t=e.alternate;return e===he||t!==null&&t===he}function au(e,t){aa=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iu(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,dc(e,n)}}var ts={readContext:Ze,use:Ki,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe},su={readContext:Ze,use:Ki,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Vo,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Wi(4194308,4,Io.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){Wi(4,2,e,t)},useMemo:function(e,t){var n=et();t=t===void 0?null:t;var i=e();if(wn){Qt(!0);try{e()}finally{Qt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=et();if(n!==void 0){var s=n(t);if(wn){Qt(!0);try{n(t)}finally{Qt(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Mm.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Yl(e);var t=e.queue,n=nu.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Pl,useDeferredValue:function(e,t){var n=et();return Il(n,e,t)},useTransition:function(){var e=Yl(!1);return e=Jo.bind(null,he,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=he,s=et();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),ze===null)throw Error(o(349));(ye&124)!==0||Co(i,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,Vo(zo.bind(null,i,l,e),[e]),i.flags|=2048,sa(9,Fi(),To.bind(null,i,l,n,t),null),n},useId:function(){var e=et(),t=ze.identifierPrefix;if(je){var n=kt,i=Ot;n=(i&~(1<<32-it(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Am++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Zl,useFormState:Bo,useActionState:Bo,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$l.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:_l,useCacheRefresh:function(){return et().memoizedState=Dm.bind(null,he)}},lu={readContext:Ze,use:Ki,useCallback:Zo,useContext:Ze,useEffect:Yo,useImperativeHandle:Qo,useInsertionEffect:Xo,useLayoutEffect:Po,useMemo:$o,useReducer:Ji,useRef:Go,useState:function(){return Ji(Ut)},useDebugValue:Pl,useDeferredValue:function(e,t){var n=Be();return Ko(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ji(Ut)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Qa(e),t]},useSyncExternalStore:Eo,useId:eu,useHostTransitionStatus:Zl,useFormState:Uo,useActionState:Uo,useOptimistic:function(e,t){var n=Be();return wo(n,Ae,e,t)},useMemoCache:_l,useCacheRefresh:tu},wm={readContext:Ze,use:Ki,useCallback:Zo,useContext:Ze,useEffect:Yo,useImperativeHandle:Qo,useInsertionEffect:Xo,useLayoutEffect:Po,useMemo:$o,useReducer:Vl,useRef:Go,useState:function(){return Vl(Ut)},useDebugValue:Pl,useDeferredValue:function(e,t){var n=Be();return Ae===null?Il(n,e,t):Ko(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Vl(Ut)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Qa(e),t]},useSyncExternalStore:Eo,useId:eu,useHostTransitionStatus:Zl,useFormState:_o,useActionState:_o,useOptimistic:function(e,t){var n=Be();return Ae!==null?wo(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_l,useCacheRefresh:tu},la=null,Ka=0;function ns(e){var t=Ka;return Ka+=1,la===null&&(la=[]),vo(la,e,t)}function Ja(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function as(e,t){throw t.$$typeof===D?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ru(e){var t=e._init;return t(e._payload)}function cu(e){function t(y,p){if(e){var S=y.deletions;S===null?(y.deletions=[p],y.flags|=16):S.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function i(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function s(y,p){return y=qt(y,p),y.index=0,y.sibling=null,y}function l(y,p,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<p?(y.flags|=67108866,p):S):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function r(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,p,S,H){return p===null||p.tag!==6?(p=gl(S,y.mode,H),p.return=y,p):(p=s(p,S),p.return=y,p)}function d(y,p,S,H){var ae=S.type;return ae===G?U(y,p,S.props.children,H,S.key):p!==null&&(p.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===b&&ru(ae)===p.type)?(p=s(p,S.props),Ja(p,S),p.return=y,p):(p=Hi(S.type,S.key,S.props,null,y.mode,H),Ja(p,S),p.return=y,p)}function N(y,p,S,H){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=vl(S,y.mode,H),p.return=y,p):(p=s(p,S.children||[]),p.return=y,p)}function U(y,p,S,H,ae){return p===null||p.tag!==7?(p=Nn(S,y.mode,H,ae),p.return=y,p):(p=s(p,S),p.return=y,p)}function V(y,p,S){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=gl(""+p,y.mode,S),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _:return S=Hi(p.type,p.key,p.props,null,y.mode,S),Ja(S,p),S.return=y,S;case L:return p=vl(p,y.mode,S),p.return=y,p;case b:var H=p._init;return p=H(p._payload),V(y,p,S)}if(me(p)||W(p))return p=Nn(p,y.mode,S,null),p.return=y,p;if(typeof p.then=="function")return V(y,ns(p),S);if(p.$$typeof===Y)return V(y,Yi(y,p),S);as(y,p)}return null}function C(y,p,S,H){var ae=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return ae!==null?null:c(y,p,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return S.key===ae?d(y,p,S,H):null;case L:return S.key===ae?N(y,p,S,H):null;case b:return ae=S._init,S=ae(S._payload),C(y,p,S,H)}if(me(S)||W(S))return ae!==null?null:U(y,p,S,H,null);if(typeof S.then=="function")return C(y,p,ns(S),H);if(S.$$typeof===Y)return C(y,p,Yi(y,S),H);as(y,S)}return null}function z(y,p,S,H,ae){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return y=y.get(S)||null,c(p,y,""+H,ae);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case _:return y=y.get(H.key===null?S:H.key)||null,d(p,y,H,ae);case L:return y=y.get(H.key===null?S:H.key)||null,N(p,y,H,ae);case b:var pe=H._init;return H=pe(H._payload),z(y,p,S,H,ae)}if(me(H)||W(H))return y=y.get(S)||null,U(p,y,H,ae,null);if(typeof H.then=="function")return z(y,p,S,ns(H),ae);if(H.$$typeof===Y)return z(y,p,S,Yi(p,H),ae);as(p,H)}return null}function oe(y,p,S,H){for(var ae=null,pe=null,le=p,ce=p=0,Ye=null;le!==null&&ce<S.length;ce++){le.index>ce?(Ye=le,le=null):Ye=le.sibling;var be=C(y,le,S[ce],H);if(be===null){le===null&&(le=Ye);break}e&&le&&be.alternate===null&&t(y,le),p=l(be,p,ce),pe===null?ae=be:pe.sibling=be,pe=be,le=Ye}if(ce===S.length)return n(y,le),je&&En(y,ce),ae;if(le===null){for(;ce<S.length;ce++)le=V(y,S[ce],H),le!==null&&(p=l(le,p,ce),pe===null?ae=le:pe.sibling=le,pe=le);return je&&En(y,ce),ae}for(le=i(le);ce<S.length;ce++)Ye=z(le,y,ce,S[ce],H),Ye!==null&&(e&&Ye.alternate!==null&&le.delete(Ye.key===null?ce:Ye.key),p=l(Ye,p,ce),pe===null?ae=Ye:pe.sibling=Ye,pe=Ye);return e&&le.forEach(function(vn){return t(y,vn)}),je&&En(y,ce),ae}function re(y,p,S,H){if(S==null)throw Error(o(151));for(var ae=null,pe=null,le=p,ce=p=0,Ye=null,be=S.next();le!==null&&!be.done;ce++,be=S.next()){le.index>ce?(Ye=le,le=null):Ye=le.sibling;var vn=C(y,le,be.value,H);if(vn===null){le===null&&(le=Ye);break}e&&le&&vn.alternate===null&&t(y,le),p=l(vn,p,ce),pe===null?ae=vn:pe.sibling=vn,pe=vn,le=Ye}if(be.done)return n(y,le),je&&En(y,ce),ae;if(le===null){for(;!be.done;ce++,be=S.next())be=V(y,be.value,H),be!==null&&(p=l(be,p,ce),pe===null?ae=be:pe.sibling=be,pe=be);return je&&En(y,ce),ae}for(le=i(le);!be.done;ce++,be=S.next())be=z(le,y,ce,be.value,H),be!==null&&(e&&be.alternate!==null&&le.delete(be.key===null?ce:be.key),p=l(be,p,ce),pe===null?ae=be:pe.sibling=be,pe=be);return e&&le.forEach(function(Rh){return t(y,Rh)}),je&&En(y,ce),ae}function Ce(y,p,S,H){if(typeof S=="object"&&S!==null&&S.type===G&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case _:e:{for(var ae=S.key;p!==null;){if(p.key===ae){if(ae=S.type,ae===G){if(p.tag===7){n(y,p.sibling),H=s(p,S.props.children),H.return=y,y=H;break e}}else if(p.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===b&&ru(ae)===p.type){n(y,p.sibling),H=s(p,S.props),Ja(H,S),H.return=y,y=H;break e}n(y,p);break}else t(y,p);p=p.sibling}S.type===G?(H=Nn(S.props.children,y.mode,H,S.key),H.return=y,y=H):(H=Hi(S.type,S.key,S.props,null,y.mode,H),Ja(H,S),H.return=y,y=H)}return r(y);case L:e:{for(ae=S.key;p!==null;){if(p.key===ae)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){n(y,p.sibling),H=s(p,S.children||[]),H.return=y,y=H;break e}else{n(y,p);break}else t(y,p);p=p.sibling}H=vl(S,y.mode,H),H.return=y,y=H}return r(y);case b:return ae=S._init,S=ae(S._payload),Ce(y,p,S,H)}if(me(S))return oe(y,p,S,H);if(W(S)){if(ae=W(S),typeof ae!="function")throw Error(o(150));return S=ae.call(S),re(y,p,S,H)}if(typeof S.then=="function")return Ce(y,p,ns(S),H);if(S.$$typeof===Y)return Ce(y,p,Yi(y,S),H);as(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,p!==null&&p.tag===6?(n(y,p.sibling),H=s(p,S),H.return=y,y=H):(n(y,p),H=gl(S,y.mode,H),H.return=y,y=H),r(y)):n(y,p)}return function(y,p,S,H){try{Ka=0;var ae=Ce(y,p,S,H);return la=null,ae}catch(le){if(le===Ga||le===Pi)throw le;var pe=lt(29,le,null,y.mode);return pe.lanes=H,pe.return=y,pe}finally{}}}var ra=cu(!0),ou=cu(!1),xt=X(null),Tt=null;function tn(e){var t=e.alternate;K(He,He.current&1),K(xt,e),Tt===null&&(t===null||na.current!==null||t.memoizedState!==null)&&(Tt=e)}function uu(e){if(e.tag===22){if(K(He,He.current),K(xt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else nn()}function nn(){K(He,He.current),K(xt,xt.current)}function Ht(e){F(xt),Tt===e&&(Tt=null),F(He)}var He=X(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Hr(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Kl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ut(),s=Ft(i);s.payload=t,n!=null&&(s.callback=n),t=Wt(e,s,i),t!==null&&(dt(t,e,i),Ya(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ut(),s=Ft(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Wt(e,s,i),t!==null&&(dt(t,e,i),Ya(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),i=Ft(n);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,n),t!==null&&(dt(t,e,n),Ya(t,e,n))}};function du(e,t,n,i,s,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,r):t.prototype&&t.prototype.isPureReactComponent?!qa(n,i)||!qa(s,l):!0}function fu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Jl.enqueueReplaceState(t,t.state,null)}function Rn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mu(e){ss(e)}function hu(e){console.error(e)}function pu(e){ss(e)}function ls(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function gu(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Fl(e,t,n){return n=Ft(n),n.tag=3,n.payload={element:null},n.callback=function(){ls(e,t)},n}function vu(e){return e=Ft(e),e.tag=3,e}function xu(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var l=i.value;e.payload=function(){return s(l)},e.callback=function(){gu(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){gu(t,n,i),typeof s!="function"&&(on===null?on=new Set([this]):on.add(this));var c=i.stack;this.componentDidCatch(i.value,{componentStack:c!==null?c:""})})}function Rm(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ua(t,n,s,!0),n=xt.current,n!==null){switch(n.tag){case 13:return Tt===null?Sr():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Tl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ar(e,i,s)),!1;case 22:return n.flags|=65536,i===Tl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ar(e,i,s)),!1}throw Error(o(435,n.tag))}return Ar(e,i,s),Sr(),!1}if(je)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==bl&&(e=Error(o(422),{cause:i}),Ba(ht(e,n)))):(i!==bl&&(t=Error(o(423),{cause:i}),Ba(ht(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ht(i,n),s=Fl(e.stateNode,i,s),Ml(e,s),qe!==4&&(qe=2)),!1;var l=Error(o(520),{cause:i});if(l=ht(l,n),ii===null?ii=[l]:ii.push(l),qe!==4&&(qe=2),t===null)return!0;i=ht(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Fl(n.stateNode,i,e),Ml(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(on===null||!on.has(l))))return n.flags|=65536,s&=-s,n.lanes|=s,s=vu(s),xu(s,e,n,i),Ml(n,s),!1}n=n.return}while(n!==null);return!1}var yu=Error(o(461)),Ge=!1;function Xe(e,t,n,i){t.child=e===null?ou(t,null,n,i):ra(t,e.child,n,i)}function bu(e,t,n,i,s){n=n.render;var l=t.ref;if("ref"in i){var r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}else r=i;return Dn(t),i=kl(e,t,n,r,l,s),c=Ll(),e!==null&&!Ge?(Bl(e,t,s),_t(e,t,s)):(je&&c&&xl(t),t.flags|=1,Xe(e,t,i,s),t.child)}function ju(e,t,n,i,s){if(e===null){var l=n.type;return typeof l=="function"&&!pl(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Su(e,t,l,i,s)):(e=Hi(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!lr(e,s)){var r=l.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(r,i)&&e.ref===t.ref)return _t(e,t,s)}return t.flags|=1,e=qt(l,i),e.ref=t.ref,e.return=t,t.child=e}function Su(e,t,n,i,s){if(e!==null){var l=e.memoizedProps;if(qa(l,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=l,lr(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,_t(e,t,s)}return Wl(e,t,n,i,s)}function Nu(e,t,n){var i=t.pendingProps,s=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=l!==null?l.baseLanes|n:n,e!==null){for(s=t.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;t.childLanes=l&~i}else t.childLanes=0,t.child=null;return Au(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xi(t,l!==null?l.cachePool:null),l!==null?So(t,l):Rl(),uu(t);else return t.lanes=t.childLanes=536870912,Au(e,t,l!==null?l.baseLanes|n:n,n)}else l!==null?(Xi(t,l.cachePool),So(t,l),nn(),t.memoizedState=null):(e!==null&&Xi(t,null),Rl(),nn());return Xe(e,t,s,n),t.child}function Au(e,t,n,i){var s=Cl();return s=s===null?null:{parent:Ue._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Xi(t,null),Rl(),uu(t),e!==null&&Ua(e,t,i,!0),null}function rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wl(e,t,n,i,s){return Dn(t),n=kl(e,t,n,i,void 0,s),i=Ll(),e!==null&&!Ge?(Bl(e,t,s),_t(e,t,s)):(je&&i&&xl(t),t.flags|=1,Xe(e,t,n,s),t.child)}function Eu(e,t,n,i,s,l){return Dn(t),t.updateQueue=null,n=Ao(t,i,n,s),No(e),i=Ll(),e!==null&&!Ge?(Bl(e,t,l),_t(e,t,l)):(je&&i&&xl(t),t.flags|=1,Xe(e,t,n,l),t.child)}function Cu(e,t,n,i,s){if(Dn(t),t.stateNode===null){var l=Jn,r=n.contextType;typeof r=="object"&&r!==null&&(l=Ze(r)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Jl,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},zl(t),r=n.contextType,l.context=typeof r=="object"&&r!==null?Ze(r):Jn,l.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Kl(t,n,r,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Jl.enqueueReplaceState(l,l.state,null),Pa(t,i,l,s),Xa(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var c=t.memoizedProps,d=Rn(n,c);l.props=d;var N=l.context,U=n.contextType;r=Jn,typeof U=="object"&&U!==null&&(r=Ze(U));var V=n.getDerivedStateFromProps;U=typeof V=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,U||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||N!==r)&&fu(t,l,i,r),Jt=!1;var C=t.memoizedState;l.state=C,Pa(t,i,l,s),Xa(),N=t.memoizedState,c||C!==N||Jt?(typeof V=="function"&&(Kl(t,n,V,i),N=t.memoizedState),(d=Jt||du(t,n,d,i,C,N,r))?(U||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),l.props=i,l.state=N,l.context=r,i=d):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Dl(e,t),r=t.memoizedProps,U=Rn(n,r),l.props=U,V=t.pendingProps,C=l.context,N=n.contextType,d=Jn,typeof N=="object"&&N!==null&&(d=Ze(N)),c=n.getDerivedStateFromProps,(N=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==V||C!==d)&&fu(t,l,i,d),Jt=!1,C=t.memoizedState,l.state=C,Pa(t,i,l,s),Xa();var z=t.memoizedState;r!==V||C!==z||Jt||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof c=="function"&&(Kl(t,n,c,i),z=t.memoizedState),(U=Jt||du(t,n,U,i,C,z,d)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,z,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,z,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=z),l.props=i,l.state=z,l.context=d,i=U):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,rs(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=ra(t,e.child,null,s),t.child=ra(t,null,n,s)):Xe(e,t,n,s),t.memoizedState=l.state,e=t.child):e=_t(e,t,s),e}function Tu(e,t,n,i){return La(),t.flags|=256,Xe(e,t,n,i),t.child}var er={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tr(e){return{baseLanes:e,cachePool:ho()}}function nr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yt),e}function zu(e,t,n){var i=t.pendingProps,s=!1,l=(t.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(s?tn(t):nn(),je){var c=Re,d;if(d=c){e:{for(d=c,c=Ct;d.nodeType!==8;){if(!c){c=null;break e}if(d=At(d.nextSibling),d===null){c=null;break e}}c=d}c!==null?(t.memoizedState={dehydrated:c,treeContext:An!==null?{id:Ot,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},d=lt(18,null,null,0),d.stateNode=c,d.return=t,t.child=d,Je=t,Re=null,d=!0):d=!1}d||Tn(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Hr(c)?t.lanes=32:t.lanes=536870912,null;Ht(t)}return c=i.children,i=i.fallback,s?(nn(),s=t.mode,c=cs({mode:"hidden",children:c},s),i=Nn(i,s,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,s=t.child,s.memoizedState=tr(n),s.childLanes=nr(e,r,n),t.memoizedState=er,i):(tn(t),ar(t,c))}if(d=e.memoizedState,d!==null&&(c=d.dehydrated,c!==null)){if(l)t.flags&256?(tn(t),t.flags&=-257,t=ir(e,t,n)):t.memoizedState!==null?(nn(),t.child=e.child,t.flags|=128,t=null):(nn(),s=i.fallback,c=t.mode,i=cs({mode:"visible",children:i.children},c),s=Nn(s,c,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,ra(t,e.child,null,n),i=t.child,i.memoizedState=tr(n),i.childLanes=nr(e,r,n),t.memoizedState=er,t=s);else if(tn(t),Hr(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;r=N,i=Error(o(419)),i.stack="",i.digest=r,Ba({value:i,source:null,stack:null}),t=ir(e,t,n)}else if(Ge||Ua(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=ze,r!==null&&(i=n&-n,i=(i&42)!==0?1:_s(i),i=(i&(r.suspendedLanes|n))!==0?0:i,i!==0&&i!==d.retryLane))throw d.retryLane=i,Kn(e,i),dt(r,e,i),yu;c.data==="$?"||Sr(),t=ir(e,t,n)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Re=At(c.nextSibling),Je=t,je=!0,Cn=null,Ct=!1,e!==null&&(gt[vt++]=Ot,gt[vt++]=kt,gt[vt++]=An,Ot=e.id,kt=e.overflow,An=t),t=ar(t,i.children),t.flags|=4096);return t}return s?(nn(),s=i.fallback,c=t.mode,d=e.child,N=d.sibling,i=qt(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,N!==null?s=qt(N,s):(s=Nn(s,c,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,c=e.child.memoizedState,c===null?c=tr(n):(d=c.cachePool,d!==null?(N=Ue._currentValue,d=d.parent!==N?{parent:N,pool:N}:d):d=ho(),c={baseLanes:c.baseLanes|n,cachePool:d}),s.memoizedState=c,s.childLanes=nr(e,r,n),t.memoizedState=er,i):(tn(t),n=e.child,e=n.sibling,n=qt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function ar(e,t){return t=cs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cs(e,t){return e=lt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ir(e,t,n){return ra(t,e.child,null,n),e=ar(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Du(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sl(e.return,t,n)}function sr(e,t,n,i,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=s)}function Mu(e,t,n){var i=t.pendingProps,s=i.revealOrder,l=i.tail;if(Xe(e,t,i.children,n),i=He.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(K(He,i),s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),sr(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&is(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}sr(t,!0,n,null,l);break;case"together":sr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ua(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function qm(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Kt(t,Ue,e.memoizedState.cache),La();break;case 27:case 5:ks(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Kt(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(tn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?zu(e,t,n):(tn(t),e=_t(e,t,n),e!==null?e.sibling:null);tn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ua(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Mu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),K(He,He.current),i)break;return null;case 22:case 23:return t.lanes=0,Nu(e,t,n);case 24:Kt(t,Ue,e.memoizedState.cache)}return _t(e,t,n)}function wu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!lr(e,n)&&(t.flags&128)===0)return Ge=!1,qm(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,je&&(t.flags&1048576)!==0&&lo(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")pl(i)?(e=Rn(i,e),t.tag=1,t=Cu(null,t,i,e,n)):(t.tag=0,t=Wl(null,t,i,e,n));else{if(i!=null){if(s=i.$$typeof,s===J){t.tag=11,t=bu(null,t,i,e,n);break e}else if(s===Q){t.tag=14,t=ju(null,t,i,e,n);break e}}throw t=xe(i)||i,Error(o(306,t,""))}}return t;case 0:return Wl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Rn(i,t.pendingProps),Cu(e,t,i,s,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var l=t.memoizedState;s=l.element,Dl(e,t),Pa(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Kt(t,Ue,i),i!==l.cache&&Nl(t,[Ue],n,!0),Xa(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Tu(e,t,i,n);break e}else if(i!==s){s=ht(Error(o(424)),t),Ba(s),t=Tu(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=At(e.firstChild),Je=t,je=!0,Cn=null,Ct=!0,n=ou(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(La(),i===s){t=_t(e,t,n);break e}Xe(e,t,i,n)}t=t.child}return t;case 26:return rs(e,t),e===null?(n=kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,i=Ss(ie.current).createElement(n),i[Qe]=t,i[Fe]=e,Ie(i,n,e),_e(i),t.stateNode=i):t.memoizedState=kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ks(t),e===null&&je&&(i=t.stateNode=Rd(t.type,t.pendingProps,ie.current),Je=t,Ct=!0,s=Re,fn(t.type)?(_r=s,Re=At(i.firstChild)):Re=s),Xe(e,t,t.pendingProps.children,n),rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((s=i=Re)&&(i=rh(i,t.type,t.pendingProps,Ct),i!==null?(t.stateNode=i,Je=t,Re=At(i.firstChild),Ct=!1,s=!0):s=!1),s||Tn(t)),ks(t),s=t.type,l=t.pendingProps,r=e!==null?e.memoizedProps:null,i=l.children,Lr(s,l)?i=null:r!==null&&Lr(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=kl(e,t,Em,null,null,n),mi._currentValue=s),rs(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&je&&((e=n=Re)&&(n=ch(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Je=t,Re=null,e=!0):e=!1),e||Tn(t)),null;case 13:return zu(e,t,n);case 4:return De(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ra(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return bu(e,t,t.type,t.pendingProps,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Kt(t,t.type,i.value),Xe(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Dn(t),s=Ze(s),i=i(s),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return ju(e,t,t.type,t.pendingProps,n);case 15:return Su(e,t,t.type,t.pendingProps,n);case 19:return Mu(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=cs(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=qt(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Nu(e,t,n);case 24:return Dn(t),i=Ze(Ue),e===null?(s=Cl(),s===null&&(s=ze,l=Al(),s.pooledCache=l,l.refCount++,l!==null&&(s.pooledCacheLanes|=n),s=l),t.memoizedState={parent:i,cache:s},zl(t),Kt(t,Ue,s)):((e.lanes&n)!==0&&(Dl(e,t),Pa(t,null,null,n),Xa()),s=e.memoizedState,l=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Kt(t,Ue,i)):(i=l.cache,Kt(t,Ue,i),i!==s.cache&&Nl(t,[Ue],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Gt(e){e.flags|=4}function Ru(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_d(t)){if(t=xt.current,t!==null&&((ye&4194048)===ye?Tt!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==Tt))throw Va=Tl,po;e.flags|=8192}}function os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?oc():536870912,e.lanes|=t,da|=t)}function Fa(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Om(e,t,n){var i=t.pendingProps;switch(yl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bt(Ue),It(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ka(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oo())),we(t),null;case 26:return n=t.memoizedState,e===null?(Gt(t),n!==null?(we(t),Ru(t,n)):(we(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Gt(t),we(t),Ru(t,n)):(we(t),t.flags&=-16777217):(e.memoizedProps!==i&&Gt(t),we(t),t.flags&=-16777217),null;case 27:bi(t),n=ie.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return we(t),null}e=se.current,ka(t)?ro(t):(e=Rd(s,i,n),t.stateNode=e,Gt(t))}return we(t),null;case 5:if(bi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return we(t),null}if(e=se.current,ka(t))ro(t);else{switch(s=Ss(ie.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?s.createElement(n,{is:i.is}):s.createElement(n)}}e[Qe]=t,e[Fe]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;e:switch(Ie(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ie.current,ka(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Je,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ed(e.nodeValue,n)),e||Tn(t)}else e=Ss(e).createTextNode(i),e[Qe]=t,t.stateNode=e}return we(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ka(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Qe]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),s=!1}else s=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Ht(t),t):(Ht(t),null)}if(Ht(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var l=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),os(t,t.updateQueue),we(t),null;case 4:return It(),e===null&&wr(t.stateNode.containerInfo),we(t),null;case 10:return Bt(t.type),we(t),null;case 19:if(F(He),s=t.memoizedState,s===null)return we(t),null;if(i=(t.flags&128)!==0,l=s.rendering,l===null)if(i)Fa(s,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=is(e),l!==null){for(t.flags|=128,Fa(s,!1),e=l.updateQueue,t.updateQueue=e,os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)so(n,e),n=n.sibling;return K(He,He.current&1|2),t.child}e=e.sibling}s.tail!==null&&Et()>fs&&(t.flags|=128,i=!0,Fa(s,!1),t.lanes=4194304)}else{if(!i)if(e=is(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,os(t,e),Fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!je)return we(t),null}else 2*Et()-s.renderingStartTime>fs&&n!==536870912&&(t.flags|=128,i=!0,Fa(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(e=s.last,e!==null?e.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Et(),t.sibling=null,e=He.current,K(He,i?e&1|2:e&1),t):(we(t),null);case 22:case 23:return Ht(t),ql(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),n=t.updateQueue,n!==null&&os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&F(Mn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(Ue),we(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function km(e,t){switch(yl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Ue),It(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bi(t),null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(He),null;case 4:return It(),null;case 10:return Bt(t.type),null;case 22:case 23:return Ht(t),ql(),e!==null&&F(Mn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Ue),null;case 25:return null;default:return null}}function qu(e,t){switch(yl(t),t.tag){case 3:Bt(Ue),It();break;case 26:case 27:case 5:bi(t);break;case 4:It();break;case 13:Ht(t);break;case 19:F(He);break;case 10:Bt(t.type);break;case 22:case 23:Ht(t),ql(),e!==null&&F(Mn);break;case 24:Bt(Ue)}}function Wa(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var l=n.create,r=n.inst;i=l(),r.destroy=i}n=n.next}while(n!==s)}}catch(c){Te(t,t.return,c)}}function an(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&e)===e){var r=i.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,s=t;var d=n,N=c;try{N()}catch(U){Te(s,d,U)}}}i=i.next}while(i!==l)}}catch(U){Te(t,t.return,U)}}function Ou(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jo(t,n)}catch(i){Te(e,e.return,i)}}}function ku(e,t,n){n.props=Rn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Te(e,t,i)}}function ei(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Te(e,t,s)}}function zt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Te(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Te(e,t,s)}else n.current=null}function Lu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Te(e,e.return,s)}}function rr(e,t,n){try{var i=e.stateNode;nh(i,e.type,n,t),i[Fe]=t}catch(s){Te(e,e.return,s)}}function Bu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fn(e.type)||e.tag===4}function cr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function or(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(i!==4&&(i===27&&fn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(or(e,t,n),e=e.sibling;e!==null;)or(e,t,n),e=e.sibling}function us(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&fn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}function Uu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ie(t,i,n),t[Qe]=e,t[Fe]=n}catch(l){Te(e,e.return,l)}}var Vt=!1,ke=!1,ur=!1,Hu=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Lm(e,t){if(e=e.containerInfo,Or=zs,e=$c(e),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var r=0,c=-1,d=-1,N=0,U=0,V=e,C=null;t:for(;;){for(var z;V!==n||s!==0&&V.nodeType!==3||(c=r+s),V!==l||i!==0&&V.nodeType!==3||(d=r+i),V.nodeType===3&&(r+=V.nodeValue.length),(z=V.firstChild)!==null;)C=V,V=z;for(;;){if(V===e)break t;if(C===n&&++N===s&&(c=r),C===l&&++U===i&&(d=r),(z=V.nextSibling)!==null)break;V=C,C=V.parentNode}V=z}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(kr={focusedElem:e,selectionRange:n},zs=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,s=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var oe=Rn(n.type,s,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(oe,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(re){Te(n,n.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ur(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function _u(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n),i&4&&Wa(5,n);break;case 1:if(sn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Te(n,n.return,r)}else{var s=Rn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Te(n,n.return,r)}}i&64&&Ou(n),i&512&&ei(n,n.return);break;case 3:if(sn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jo(e,t)}catch(r){Te(n,n.return,r)}}break;case 27:t===null&&i&4&&Uu(n);case 26:case 5:sn(e,n),t===null&&i&4&&Lu(n),i&512&&ei(n,n.return);break;case 12:sn(e,n);break;case 13:sn(e,n),i&4&&Yu(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Pm.bind(null,n),oh(e,n))));break;case 22:if(i=n.memoizedState!==null||Vt,!i){t=t!==null&&t.memoizedState!==null||ke,s=Vt;var l=ke;Vt=i,(ke=t)&&!l?ln(e,n,(n.subtreeFlags&8772)!==0):sn(e,n),Vt=s,ke=l}break;case 30:break;default:sn(e,n)}}function Gu(e){var t=e.alternate;t!==null&&(e.alternate=null,Gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ys(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,tt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(ja,n)}catch{}switch(n.tag){case 26:ke||zt(n,t),Yt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||zt(n,t);var i=Me,s=tt;fn(n.type)&&(Me=n.stateNode,tt=!1),Yt(e,t,n),oi(n.stateNode),Me=i,tt=s;break;case 5:ke||zt(n,t);case 6:if(i=Me,s=tt,Me=null,Yt(e,t,n),Me=i,tt=s,Me!==null)if(tt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(l){Te(n,t,l)}else try{Me.removeChild(n.stateNode)}catch(l){Te(n,t,l)}break;case 18:Me!==null&&(tt?(e=Me,Md(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vi(e)):Md(Me,n.stateNode));break;case 4:i=Me,s=tt,Me=n.stateNode.containerInfo,tt=!0,Yt(e,t,n),Me=i,tt=s;break;case 0:case 11:case 14:case 15:ke||an(2,n,t),ke||an(4,n,t),Yt(e,t,n);break;case 1:ke||(zt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ku(n,t,i)),Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:ke=(i=ke)||n.memoizedState!==null,Yt(e,t,n),ke=i;break;default:Yt(e,t,n)}}function Yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(n){Te(t,t.return,n)}}function Bm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hu),t;default:throw Error(o(435,e.tag))}}function dr(e,t){var n=Bm(e);t.forEach(function(i){var s=Im.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}function rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],l=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(fn(c.type)){Me=c.stateNode,tt=!1;break e}break;case 5:Me=c.stateNode,tt=!1;break e;case 3:case 4:Me=c.stateNode.containerInfo,tt=!0;break e}c=c.return}if(Me===null)throw Error(o(160));Vu(l,r,s),Me=null,tt=!1,l=s.alternate,l!==null&&(l.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}var Nt=null;function Xu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ct(e),i&4&&(an(3,e,e.return),Wa(3,e),an(5,e,e.return));break;case 1:rt(t,e),ct(e),i&512&&(ke||n===null||zt(n,n.return)),i&64&&Vt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Nt;if(rt(t,e),ct(e),i&512&&(ke||n===null||zt(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":l=s.getElementsByTagName("title")[0],(!l||l[Aa]||l[Qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=s.createElement(i),s.head.insertBefore(l,s.querySelector("head > title"))),Ie(l,i,n),l[Qe]=e,_e(l),i=l;break e;case"link":var r=Ud("link","href",s).get(i+(n.href||""));if(r){for(var c=0;c<r.length;c++)if(l=r[c],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(c,1);break t}}l=s.createElement(i),Ie(l,i,n),s.head.appendChild(l);break;case"meta":if(r=Ud("meta","content",s).get(i+(n.content||""))){for(c=0;c<r.length;c++)if(l=r[c],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(c,1);break t}}l=s.createElement(i),Ie(l,i,n),s.head.appendChild(l);break;default:throw Error(o(468,i))}l[Qe]=e,_e(l),i=l}e.stateNode=i}else Hd(s,e.type,e.stateNode);else e.stateNode=Bd(s,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?Hd(s,e.type,e.stateNode):Bd(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&rr(e,e.memoizedProps,n.memoizedProps)}break;case 27:rt(t,e),ct(e),i&512&&(ke||n===null||zt(n,n.return)),n!==null&&i&4&&rr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(rt(t,e),ct(e),i&512&&(ke||n===null||zt(n,n.return)),e.flags&32){s=e.stateNode;try{Yn(s,"")}catch(z){Te(e,e.return,z)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,rr(e,s,n!==null?n.memoizedProps:s)),i&1024&&(ur=!0);break;case 6:if(rt(t,e),ct(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(z){Te(e,e.return,z)}}break;case 3:if(Es=null,s=Nt,Nt=Ns(t.containerInfo),rt(t,e),Nt=s,ct(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(z){Te(e,e.return,z)}ur&&(ur=!1,Pu(e));break;case 4:i=Nt,Nt=Ns(e.stateNode.containerInfo),rt(t,e),ct(e),Nt=i;break;case 12:rt(t,e),ct(e);break;case 13:rt(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vr=Et()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,dr(e,i)));break;case 22:s=e.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,N=Vt,U=ke;if(Vt=N||s,ke=U||d,rt(t,e),ke=U,Vt=N,ct(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||d||Vt||ke||qn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){d=n=t;try{if(l=d.stateNode,s)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=d.stateNode;var V=d.memoizedProps.style,C=V!=null&&V.hasOwnProperty("display")?V.display:null;c.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(z){Te(d,d.return,z)}}}else if(t.tag===6){if(n===null){d=t;try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(z){Te(d,d.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,dr(e,n))));break;case 19:rt(t,e),ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,dr(e,i)));break;case 30:break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Bu(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode,l=cr(e);us(e,l,s);break;case 5:var r=n.stateNode;n.flags&32&&(Yn(r,""),n.flags&=-33);var c=cr(e);us(e,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,N=cr(e);or(e,N,d);break;default:throw Error(o(161))}}catch(U){Te(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_u(e,t.alternate,t),t=t.sibling}function qn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:an(4,t,t.return),qn(t);break;case 1:zt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ku(t,t.return,n),qn(t);break;case 27:oi(t.stateNode);case 26:case 5:zt(t,t.return),qn(t);break;case 22:t.memoizedState===null&&qn(t);break;case 30:qn(t);break;default:qn(t)}e=e.sibling}}function ln(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,l=t,r=l.flags;switch(l.tag){case 0:case 11:case 15:ln(s,l,n),Wa(4,l);break;case 1:if(ln(s,l,n),i=l,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(N){Te(i,i.return,N)}if(i=l,s=i.updateQueue,s!==null){var c=i.stateNode;try{var d=s.shared.hiddenCallbacks;if(d!==null)for(s.shared.hiddenCallbacks=null,s=0;s<d.length;s++)bo(d[s],c)}catch(N){Te(i,i.return,N)}}n&&r&64&&Ou(l),ei(l,l.return);break;case 27:Uu(l);case 26:case 5:ln(s,l,n),n&&i===null&&r&4&&Lu(l),ei(l,l.return);break;case 12:ln(s,l,n);break;case 13:ln(s,l,n),n&&r&4&&Yu(s,l);break;case 22:l.memoizedState===null&&ln(s,l,n),ei(l,l.return);break;case 30:break;default:ln(s,l,n)}t=t.sibling}}function fr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function mr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Dt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Iu(e,t,n,i),t=t.sibling}function Iu(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,n,i),s&2048&&Wa(9,t);break;case 1:Dt(e,t,n,i);break;case 3:Dt(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e)));break;case 12:if(s&2048){Dt(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,r=l.id,c=l.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Te(t,t.return,d)}}else Dt(e,t,n,i);break;case 13:Dt(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,r=t.alternate,t.memoizedState!==null?l._visibility&2?Dt(e,t,n,i):ti(e,t):l._visibility&2?Dt(e,t,n,i):(l._visibility|=2,ca(e,t,n,i,(t.subtreeFlags&10256)!==0)),s&2048&&fr(r,t);break;case 24:Dt(e,t,n,i),s&2048&&mr(t.alternate,t);break;default:Dt(e,t,n,i)}}function ca(e,t,n,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,r=t,c=n,d=i,N=r.flags;switch(r.tag){case 0:case 11:case 15:ca(l,r,c,d,s),Wa(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?ca(l,r,c,d,s):ti(l,r):(U._visibility|=2,ca(l,r,c,d,s)),s&&N&2048&&fr(r.alternate,r);break;case 24:ca(l,r,c,d,s),s&&N&2048&&mr(r.alternate,r);break;default:ca(l,r,c,d,s)}t=t.sibling}}function ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ti(n,i),s&2048&&fr(i.alternate,i);break;case 24:ti(n,i),s&2048&&mr(i.alternate,i);break;default:ti(n,i)}t=t.sibling}}var ni=8192;function oa(e){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)Qu(e),e=e.sibling}function Qu(e){switch(e.tag){case 26:oa(e),e.flags&ni&&e.memoizedState!==null&&Sh(Nt,e.memoizedState,e.memoizedProps);break;case 5:oa(e);break;case 3:case 4:var t=Nt;Nt=Ns(e.stateNode.containerInfo),oa(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ni,ni=16777216,oa(e),ni=t):oa(e));break;default:oa(e)}}function Zu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ve=i,Ku(i,e)}Zu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$u(e),e=e.sibling}function $u(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&an(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ds(e)):ai(e);break;default:ai(e)}}function ds(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ve=i,Ku(i,e)}Zu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:an(8,t,t.return),ds(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ds(t));break;default:ds(t)}e=e.sibling}}function Ku(e,t){for(;Ve!==null;){var n=Ve;switch(n.tag){case 0:case 11:case 15:an(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ve=i;else e:for(n=e;Ve!==null;){i=Ve;var s=i.sibling,l=i.return;if(Gu(i),i===n){Ve=null;break e}if(s!==null){s.return=l,Ve=s;break e}Ve=l}}}var Um={getCacheForType:function(e){var t=Ze(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Hm=typeof WeakMap=="function"?WeakMap:Map,Se=0,ze=null,ge=null,ye=0,Ne=0,ot=null,rn=!1,ua=!1,hr=!1,Xt=0,qe=0,cn=0,On=0,pr=0,yt=0,da=0,ii=null,nt=null,gr=!1,vr=0,fs=1/0,ms=null,on=null,Pe=0,un=null,fa=null,ma=0,xr=0,yr=null,Ju=null,si=0,br=null;function ut(){if((Se&2)!==0&&ye!==0)return ye&-ye;if(T.T!==null){var e=ea;return e!==0?e:Tr()}return fc()}function Fu(){yt===0&&(yt=(ye&536870912)===0||je?cc():536870912);var e=xt.current;return e!==null&&(e.flags|=32),yt}function dt(e,t,n){(e===ze&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ha(e,0),dn(e,ye,yt,!1)),Na(e,n),((Se&2)===0||e!==ze)&&(e===ze&&((Se&2)===0&&(On|=n),qe===4&&dn(e,ye,yt,!1)),Mt(e))}function Wu(e,t,n){if((Se&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Sa(e,t),s=i?Vm(e,t):Nr(e,t,!0),l=i;do{if(s===0){ua&&!i&&dn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!_m(n)){s=Nr(e,t,!1),l=!1;continue}if(s===2){if(l=t,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;s=ii;var d=c.current.memoizedState.isDehydrated;if(d&&(ha(c,r).flags|=256),r=Nr(c,r,!1),r!==2){if(hr&&!d){c.errorRecoveryDisabledLanes|=l,On|=l,s=4;break e}l=nt,nt=s,l!==null&&(nt===null?nt=l:nt.push.apply(nt,l))}s=r}if(l=!1,s!==2)continue}}if(s===1){ha(e,0),dn(e,t,0,!0);break}e:{switch(i=e,l=s,l){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:dn(i,t,yt,!rn);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=vr+300-Et(),10<s)){if(dn(i,t,yt,!rn),Ai(i,0,!0)!==0)break e;i.timeoutHandle=zd(ed.bind(null,i,n,nt,ms,gr,t,yt,On,da,rn,l,2,-0,0),s);break e}ed(i,n,nt,ms,gr,t,yt,On,da,rn,l,0,-0,0)}}break}while(!0);Mt(e)}function ed(e,t,n,i,s,l,r,c,d,N,U,V,C,z){if(e.timeoutHandle=-1,V=t.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(fi={stylesheets:null,count:0,unsuspend:jh},Qu(t),V=Nh(),V!==null)){e.cancelPendingCommit=V(rd.bind(null,e,t,l,n,i,s,r,c,d,U,1,C,z)),dn(e,l,r,!N);return}rd(e,t,l,n,i,s,r,c,d)}function _m(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],l=s.getSnapshot;s=s.value;try{if(!st(l(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t,n,i){t&=~pr,t&=~On,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var l=31-it(s),r=1<<l;i[l]=-1,s&=~r}n!==0&&uc(e,n,t)}function hs(){return(Se&6)===0?(li(0),!1):!0}function jr(){if(ge!==null){if(Ne===0)var e=ge.return;else e=ge,Lt=zn=null,Ul(e),la=null,Ka=0,e=ge;for(;e!==null;)qu(e.alternate,e),e=e.return;ge=null}}function ha(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ih(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jr(),ze=e,ge=n=qt(e.current,null),ye=t,Ne=0,ot=null,rn=!1,ua=Sa(e,t),hr=!1,da=yt=pr=On=cn=qe=0,nt=ii=null,gr=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-it(i),l=1<<s;t|=e[s],i&=~l}return Xt=t,Li(),n}function td(e,t){he=null,T.H=ts,t===Ga||t===Pi?(t=xo(),Ne=3):t===po?(t=xo(),Ne=4):Ne=t===yu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ge===null&&(qe=1,ls(e,ht(t,e.current)))}function nd(){var e=T.H;return T.H=ts,e===null?ts:e}function ad(){var e=T.A;return T.A=Um,e}function Sr(){qe=4,rn||(ye&4194048)!==ye&&xt.current!==null||(ua=!0),(cn&134217727)===0&&(On&134217727)===0||ze===null||dn(ze,ye,yt,!1)}function Nr(e,t,n){var i=Se;Se|=2;var s=nd(),l=ad();(ze!==e||ye!==t)&&(ms=null,ha(e,t)),t=!1;var r=qe;e:do try{if(Ne!==0&&ge!==null){var c=ge,d=ot;switch(Ne){case 8:jr(),r=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var N=Ne;if(Ne=0,ot=null,pa(e,c,d,N),n&&ua){r=0;break e}break;default:N=Ne,Ne=0,ot=null,pa(e,c,d,N)}}Gm(),r=qe;break}catch(U){td(e,U)}while(!0);return t&&e.shellSuspendCounter++,Lt=zn=null,Se=i,T.H=s,T.A=l,ge===null&&(ze=null,ye=0,Li()),r}function Gm(){for(;ge!==null;)id(ge)}function Vm(e,t){var n=Se;Se|=2;var i=nd(),s=ad();ze!==e||ye!==t?(ms=null,fs=Et()+500,ha(e,t)):ua=Sa(e,t);e:do try{if(Ne!==0&&ge!==null){t=ge;var l=ot;t:switch(Ne){case 1:Ne=0,ot=null,pa(e,t,l,1);break;case 2:case 9:if(go(l)){Ne=0,ot=null,sd(t);break}t=function(){Ne!==2&&Ne!==9||ze!==e||(Ne=7),Mt(e)},l.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:go(l)?(Ne=0,ot=null,sd(t)):(Ne=0,ot=null,pa(e,t,l,7));break;case 5:var r=null;switch(ge.tag){case 26:r=ge.memoizedState;case 5:case 27:var c=ge;if(!r||_d(r)){Ne=0,ot=null;var d=c.sibling;if(d!==null)ge=d;else{var N=c.return;N!==null?(ge=N,ps(N)):ge=null}break t}}Ne=0,ot=null,pa(e,t,l,5);break;case 6:Ne=0,ot=null,pa(e,t,l,6);break;case 8:jr(),qe=6;break e;default:throw Error(o(462))}}Ym();break}catch(U){td(e,U)}while(!0);return Lt=zn=null,T.H=i,T.A=s,Se=n,ge!==null?0:(ze=null,ye=0,Li(),qe)}function Ym(){for(;ge!==null&&!df();)id(ge)}function id(e){var t=wu(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?ps(e):ge=t}function sd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Eu(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Eu(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Ul(t);default:qu(n,t),t=ge=so(t,Xt),t=wu(n,t,Xt)}e.memoizedProps=e.pendingProps,t===null?ps(e):ge=t}function pa(e,t,n,i){Lt=zn=null,Ul(t),la=null,Ka=0;var s=t.return;try{if(Rm(e,s,t,n,ye)){qe=1,ls(e,ht(n,e.current)),ge=null;return}}catch(l){if(s!==null)throw ge=s,l;qe=1,ls(e,ht(n,e.current)),ge=null;return}t.flags&32768?(je||i===1?e=!0:ua||(ye&536870912)!==0?e=!1:(rn=e=!0,(i===2||i===9||i===3||i===6)&&(i=xt.current,i!==null&&i.tag===13&&(i.flags|=16384))),ld(t,e)):ps(t)}function ps(e){var t=e;do{if((t.flags&32768)!==0){ld(t,rn);return}e=t.return;var n=Om(t.alternate,t,Xt);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);qe===0&&(qe=5)}function ld(e,t){do{var n=km(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);qe=6,ge=null}function rd(e,t,n,i,s,l,r,c,d){e.cancelPendingCommit=null;do gs();while(Pe!==0);if((Se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(l=t.lanes|t.childLanes,l|=ml,jf(e,n,l,r,c,d),e===ze&&(ge=ze=null,ye=0),fa=t,un=e,ma=n,xr=l,yr=s,Ju=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qm(ji,function(){return fd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,s=$.p,$.p=2,r=Se,Se|=4;try{Lm(e,t,n)}finally{Se=r,$.p=s,T.T=i}}Pe=1,cd(),od(),ud()}}function cd(){if(Pe===1){Pe=0;var e=un,t=fa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var i=$.p;$.p=2;var s=Se;Se|=4;try{Xu(t,e);var l=kr,r=$c(e.containerInfo),c=l.focusedElem,d=l.selectionRange;if(r!==c&&c&&c.ownerDocument&&Zc(c.ownerDocument.documentElement,c)){if(d!==null&&cl(c)){var N=d.start,U=d.end;if(U===void 0&&(U=N),"selectionStart"in c)c.selectionStart=N,c.selectionEnd=Math.min(U,c.value.length);else{var V=c.ownerDocument||document,C=V&&V.defaultView||window;if(C.getSelection){var z=C.getSelection(),oe=c.textContent.length,re=Math.min(d.start,oe),Ce=d.end===void 0?re:Math.min(d.end,oe);!z.extend&&re>Ce&&(r=Ce,Ce=re,re=r);var y=Qc(c,re),p=Qc(c,Ce);if(y&&p&&(z.rangeCount!==1||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==p.node||z.focusOffset!==p.offset)){var S=V.createRange();S.setStart(y.node,y.offset),z.removeAllRanges(),re>Ce?(z.addRange(S),z.extend(p.node,p.offset)):(S.setEnd(p.node,p.offset),z.addRange(S))}}}}for(V=[],z=c;z=z.parentNode;)z.nodeType===1&&V.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<V.length;c++){var H=V[c];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}zs=!!Or,kr=Or=null}finally{Se=s,$.p=i,T.T=n}}e.current=t,Pe=2}}function od(){if(Pe===2){Pe=0;var e=un,t=fa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var i=$.p;$.p=2;var s=Se;Se|=4;try{_u(e,t.alternate,t)}finally{Se=s,$.p=i,T.T=n}}Pe=3}}function ud(){if(Pe===4||Pe===3){Pe=0,ff();var e=un,t=fa,n=ma,i=Ju;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,fa=un=null,dd(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(on=null),Gs(n),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(ja,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=T.T,s=$.p,$.p=2,T.T=null;try{for(var l=e.onRecoverableError,r=0;r<i.length;r++){var c=i[r];l(c.value,{componentStack:c.stack})}}finally{T.T=t,$.p=s}}(ma&3)!==0&&gs(),Mt(e),s=e.pendingLanes,(n&4194090)!==0&&(s&42)!==0?e===br?si++:(si=0,br=e):si=0,li(0)}}function dd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function gs(e){return cd(),od(),ud(),fd()}function fd(){if(Pe!==5)return!1;var e=un,t=xr;xr=0;var n=Gs(ma),i=T.T,s=$.p;try{$.p=32>n?32:n,T.T=null,n=yr,yr=null;var l=un,r=ma;if(Pe=0,fa=un=null,ma=0,(Se&6)!==0)throw Error(o(331));var c=Se;if(Se|=4,$u(l.current),Iu(l,l.current,r,n),Se=c,li(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(ja,l)}catch{}return!0}finally{$.p=s,T.T=i,dd(e,t)}}function md(e,t,n){t=ht(n,t),t=Fl(e.stateNode,t,2),e=Wt(e,t,2),e!==null&&(Na(e,2),Mt(e))}function Te(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(on===null||!on.has(i))){e=ht(n,e),n=vu(2),i=Wt(t,n,2),i!==null&&(xu(n,i,t,e),Na(i,2),Mt(i));break}}t=t.return}}function Ar(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Hm;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(hr=!0,s.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Xm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(ye&n)===n&&(qe===4||qe===3&&(ye&62914560)===ye&&300>Et()-vr?(Se&2)===0&&ha(e,0):pr|=n,da===ye&&(da=0)),Mt(e)}function hd(e,t){t===0&&(t=oc()),e=Kn(e,t),e!==null&&(Na(e,t),Mt(e))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hd(e,n)}function Im(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),hd(e,n)}function Qm(e,t){return Bs(e,t)}var vs=null,ga=null,Er=!1,xs=!1,Cr=!1,kn=0;function Mt(e){e!==ga&&e.next===null&&(ga===null?vs=ga=e:ga=ga.next=e),xs=!0,Er||(Er=!0,$m())}function li(e,t){if(!Cr&&xs){Cr=!0;do for(var n=!1,i=vs;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var l=0;else{var r=i.suspendedLanes,c=i.pingedLanes;l=(1<<31-it(42|e)+1)-1,l&=s&~(r&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,xd(i,l))}else l=ye,l=Ai(i,i===ze?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Sa(i,l)||(n=!0,xd(i,l));i=i.next}while(n);Cr=!1}}function Zm(){pd()}function pd(){xs=Er=!1;var e=0;kn!==0&&(ah()&&(e=kn),kn=0);for(var t=Et(),n=null,i=vs;i!==null;){var s=i.next,l=gd(i,t);l===0?(i.next=null,n===null?vs=s:n.next=s,s===null&&(ga=n)):(n=i,(e!==0||(l&3)!==0)&&(xs=!0)),i=s}li(e)}function gd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-it(l),c=1<<r,d=s[r];d===-1?((c&n)===0||(c&i)!==0)&&(s[r]=bf(c,t)):d<=t&&(e.expiredLanes|=c),l&=~c}if(t=ze,n=ye,n=Ai(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Us(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Sa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Us(i),Gs(n)){case 2:case 8:n=lc;break;case 32:n=ji;break;case 268435456:n=rc;break;default:n=ji}return i=vd.bind(null,e),n=Bs(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Us(i),e.callbackPriority=2,e.callbackNode=null,2}function vd(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gs()&&e.callbackNode!==n)return null;var i=ye;return i=Ai(e,e===ze?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Wu(e,i,t),gd(e,Et()),e.callbackNode!=null&&e.callbackNode===n?vd.bind(null,e):null)}function xd(e,t){if(gs())return null;Wu(e,t,!0)}function $m(){sh(function(){(Se&6)!==0?Bs(sc,Zm):pd()})}function Tr(){return kn===0&&(kn=cc()),kn}function yd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(""+e)}function bd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Km(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var l=yd((s[Fe]||null).action),r=i.submitter;r&&(t=(t=r[Fe]||null)?yd(t.formAction):r.getAttribute("formAction"),t!==null&&(l=t,r=null));var c=new qi("action","action",null,i,s);e.push({event:c,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(kn!==0){var d=r?bd(s,r):new FormData(s);Ql(n,{pending:!0,data:d,method:s.method,action:l},null,d)}}else typeof l=="function"&&(c.preventDefault(),d=r?bd(s,r):new FormData(s),Ql(n,{pending:!0,data:d,method:s.method,action:l},l,d))},currentTarget:s}]})}}for(var zr=0;zr<fl.length;zr++){var Dr=fl[zr],Jm=Dr.toLowerCase(),Fm=Dr[0].toUpperCase()+Dr.slice(1);St(Jm,"on"+Fm)}St(Fc,"onAnimationEnd"),St(Wc,"onAnimationIteration"),St(eo,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(pm,"onTransitionRun"),St(gm,"onTransitionStart"),St(vm,"onTransitionCancel"),St(to,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function jd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var r=i.length-1;0<=r;r--){var c=i[r],d=c.instance,N=c.currentTarget;if(c=c.listener,d!==l&&s.isPropagationStopped())break e;l=c,s.currentTarget=N;try{l(s)}catch(U){ss(U)}s.currentTarget=null,l=d}else for(r=0;r<i.length;r++){if(c=i[r],d=c.instance,N=c.currentTarget,c=c.listener,d!==l&&s.isPropagationStopped())break e;l=c,s.currentTarget=N;try{l(s)}catch(U){ss(U)}s.currentTarget=null,l=d}}}}function ve(e,t){var n=t[Vs];n===void 0&&(n=t[Vs]=new Set);var i=e+"__bubble";n.has(i)||(Sd(t,e,2,!1),n.add(i))}function Mr(e,t,n){var i=0;t&&(i|=4),Sd(n,e,i,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[ys]){e[ys]=!0,hc.forEach(function(n){n!=="selectionchange"&&(Wm.has(n)||Mr(n,!1,e),Mr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,Mr("selectionchange",!1,t))}}function Sd(e,t,n,i){switch(Id(t)){case 2:var s=Ch;break;case 8:s=Th;break;default:s=Pr}n=s.bind(null,t,n,e),s=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Rr(e,t,n,i,s){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var c=i.stateNode.containerInfo;if(c===s)break;if(r===4)for(r=i.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;c!==null;){if(r=Bn(c),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){i=l=r;continue e}c=c.parentNode}}i=i.return}zc(function(){var N=l,U=Js(n),V=[];e:{var C=no.get(e);if(C!==void 0){var z=qi,oe=e;switch(e){case"keypress":if(wi(n)===0)break e;case"keydown":case"keyup":z=Qf;break;case"focusin":oe="focus",z=al;break;case"focusout":oe="blur",z=al;break;case"beforeblur":case"afterblur":z=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Kf;break;case Fc:case Wc:case eo:z=Uf;break;case to:z=Ff;break;case"scroll":case"scrollend":z=qf;break;case"wheel":z=em;break;case"copy":case"cut":case"paste":z=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=qc;break;case"toggle":case"beforetoggle":z=nm}var re=(t&4)!==0,Ce=!re&&(e==="scroll"||e==="scrollend"),y=re?C!==null?C+"Capture":null:C;re=[];for(var p=N,S;p!==null;){var H=p;if(S=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||S===null||y===null||(H=Ca(p,y),H!=null&&re.push(ci(p,H,S))),Ce)break;p=p.return}0<re.length&&(C=new z(C,oe,null,n,U),V.push({event:C,listeners:re}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",C&&n!==Ks&&(oe=n.relatedTarget||n.fromElement)&&(Bn(oe)||oe[Ln]))break e;if((z||C)&&(C=U.window===U?U:(C=U.ownerDocument)?C.defaultView||C.parentWindow:window,z?(oe=n.relatedTarget||n.toElement,z=N,oe=oe?Bn(oe):null,oe!==null&&(Ce=j(oe),re=oe.tag,oe!==Ce||re!==5&&re!==27&&re!==6)&&(oe=null)):(z=null,oe=N),z!==oe)){if(re=wc,H="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(re=qc,H="onPointerLeave",y="onPointerEnter",p="pointer"),Ce=z==null?C:Ea(z),S=oe==null?C:Ea(oe),C=new re(H,p+"leave",z,n,U),C.target=Ce,C.relatedTarget=S,H=null,Bn(U)===N&&(re=new re(y,p+"enter",oe,n,U),re.target=S,re.relatedTarget=Ce,H=re),Ce=H,z&&oe)t:{for(re=z,y=oe,p=0,S=re;S;S=va(S))p++;for(S=0,H=y;H;H=va(H))S++;for(;0<p-S;)re=va(re),p--;for(;0<S-p;)y=va(y),S--;for(;p--;){if(re===y||y!==null&&re===y.alternate)break t;re=va(re),y=va(y)}re=null}else re=null;z!==null&&Nd(V,C,z,re,!1),oe!==null&&Ce!==null&&Nd(V,Ce,oe,re,!0)}}e:{if(C=N?Ea(N):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var ae=Gc;else if(Hc(C))if(Vc)ae=fm;else{ae=um;var pe=om}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?N&&$s(N.elementType)&&(ae=Gc):ae=dm;if(ae&&(ae=ae(e,N))){_c(V,ae,n,U);break e}pe&&pe(e,C,N),e==="focusout"&&N&&C.type==="number"&&N.memoizedProps.value!=null&&Zs(C,"number",C.value)}switch(pe=N?Ea(N):window,e){case"focusin":(Hc(pe)||pe.contentEditable==="true")&&(Qn=pe,ol=N,Oa=null);break;case"focusout":Oa=ol=Qn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Kc(V,n,U);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Kc(V,n,U)}var le;if(sl)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else In?Bc(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(Oc&&n.locale!=="ko"&&(In||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&In&&(le=Dc()):($t=U,el="value"in $t?$t.value:$t.textContent,In=!0)),pe=bs(N,ce),0<pe.length&&(ce=new Rc(ce,e,null,n,U),V.push({event:ce,listeners:pe}),le?ce.data=le:(le=Uc(n),le!==null&&(ce.data=le)))),(le=im?sm(e,n):lm(e,n))&&(ce=bs(N,"onBeforeInput"),0<ce.length&&(pe=new Rc("onBeforeInput","beforeinput",null,n,U),V.push({event:pe,listeners:ce}),pe.data=le)),Km(V,e,N,n,U)}jd(V,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,l=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||l===null||(s=Ca(e,n),s!=null&&i.unshift(ci(e,s,l)),s=Ca(e,t),s!=null&&i.push(ci(e,s,l))),e.tag===3)return i;e=e.return}return[]}function va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nd(e,t,n,i,s){for(var l=t._reactName,r=[];n!==null&&n!==i;){var c=n,d=c.alternate,N=c.stateNode;if(c=c.tag,d!==null&&d===i)break;c!==5&&c!==26&&c!==27||N===null||(d=N,s?(N=Ca(n,l),N!=null&&r.unshift(ci(n,N,d))):s||(N=Ca(n,l),N!=null&&r.push(ci(n,N,d)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var eh=/\r\n?/g,th=/\u0000|\uFFFD/g;function Ad(e){return(typeof e=="string"?e:""+e).replace(eh,`
`).replace(th,"")}function Ed(e,t){return t=Ad(t),Ad(e)===t}function js(){}function Ee(e,t,n,i,s,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Yn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Yn(e,""+i);break;case"className":Ci(e,"class",i);break;case"tabIndex":Ci(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,i);break;case"style":Cc(e,i,l);break;case"data":if(t!=="object"){Ci(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Di(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",s.name,s,null),Ee(e,t,"formEncType",s.formEncType,s,null),Ee(e,t,"formMethod",s.formMethod,s,null),Ee(e,t,"formTarget",s.formTarget,s,null)):(Ee(e,t,"encType",s.encType,s,null),Ee(e,t,"method",s.method,s,null),Ee(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Di(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=js);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Di(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ei(e,"popover",i);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ei(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wf.get(n)||n,Ei(e,n,i))}}function qr(e,t,n,i,s,l){switch(n){case"style":Cc(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Yn(e,i):(typeof i=="number"||typeof i=="bigint")&&Yn(e,""+i);break;case"onScroll":i!=null&&ve("scroll",e);break;case"onScrollEnd":i!=null&&ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=js);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),l=e[Fe]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,s),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ei(e,n,i)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var i=!1,s=!1,l;for(l in n)if(n.hasOwnProperty(l)){var r=n[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,l,r,n,null)}}s&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var c=l=r=s=null,d=null,N=null;for(i in n)if(n.hasOwnProperty(i)){var U=n[i];if(U!=null)switch(i){case"name":s=U;break;case"type":r=U;break;case"checked":d=U;break;case"defaultChecked":N=U;break;case"value":l=U;break;case"defaultValue":c=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Ee(e,t,i,U,n,null)}}Sc(e,l,c,d,N,r,s,!1),Ti(e);return;case"select":ve("invalid",e),i=r=l=null;for(s in n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case"value":l=c;break;case"defaultValue":r=c;break;case"multiple":i=c;default:Ee(e,t,s,c,n,null)}t=l,n=r,e.multiple=!!i,t!=null?Vn(e,!!i,t,!1):n!=null&&Vn(e,!!i,n,!0);return;case"textarea":ve("invalid",e),l=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(c=n[r],c!=null))switch(r){case"value":i=c;break;case"defaultValue":s=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:Ee(e,t,r,c,n,null)}Ac(e,i,s,l),Ti(e);return;case"option":for(d in n)if(n.hasOwnProperty(d)&&(i=n[d],i!=null))switch(d){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ee(e,t,d,i,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(i=0;i<ri.length;i++)ve(ri[i],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(i=n[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,N,i,n,null)}return;default:if($s(t)){for(U in n)n.hasOwnProperty(U)&&(i=n[U],i!==void 0&&qr(e,t,U,i,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(i=n[c],i!=null&&Ee(e,t,c,i,n,null))}function nh(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,l=null,r=null,c=null,d=null,N=null,U=null;for(z in n){var V=n[z];if(n.hasOwnProperty(z)&&V!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":d=V;default:i.hasOwnProperty(z)||Ee(e,t,z,null,i,V)}}for(var C in i){var z=i[C];if(V=n[C],i.hasOwnProperty(C)&&(z!=null||V!=null))switch(C){case"type":l=z;break;case"name":s=z;break;case"checked":N=z;break;case"defaultChecked":U=z;break;case"value":r=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==V&&Ee(e,t,C,z,i,V)}}Qs(e,r,c,d,N,U,l,s);return;case"select":z=r=c=C=null;for(l in n)if(d=n[l],n.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":z=d;default:i.hasOwnProperty(l)||Ee(e,t,l,null,i,d)}for(s in i)if(l=i[s],d=n[s],i.hasOwnProperty(s)&&(l!=null||d!=null))switch(s){case"value":C=l;break;case"defaultValue":c=l;break;case"multiple":r=l;default:l!==d&&Ee(e,t,s,l,i,d)}t=c,n=r,i=z,C!=null?Vn(e,!!n,C,!1):!!i!=!!n&&(t!=null?Vn(e,!!n,t,!0):Vn(e,!!n,n?[]:"",!1));return;case"textarea":z=C=null;for(c in n)if(s=n[c],n.hasOwnProperty(c)&&s!=null&&!i.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ee(e,t,c,null,i,s)}for(r in i)if(s=i[r],l=n[r],i.hasOwnProperty(r)&&(s!=null||l!=null))switch(r){case"value":C=s;break;case"defaultValue":z=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==l&&Ee(e,t,r,s,i,l)}Nc(e,C,z);return;case"option":for(var oe in n)if(C=n[oe],n.hasOwnProperty(oe)&&C!=null&&!i.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Ee(e,t,oe,null,i,C)}for(d in i)if(C=i[d],z=n[d],i.hasOwnProperty(d)&&C!==z&&(C!=null||z!=null))switch(d){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ee(e,t,d,C,i,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in n)C=n[re],n.hasOwnProperty(re)&&C!=null&&!i.hasOwnProperty(re)&&Ee(e,t,re,null,i,C);for(N in i)if(C=i[N],z=n[N],i.hasOwnProperty(N)&&C!==z&&(C!=null||z!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:Ee(e,t,N,C,i,z)}return;default:if($s(t)){for(var Ce in n)C=n[Ce],n.hasOwnProperty(Ce)&&C!==void 0&&!i.hasOwnProperty(Ce)&&qr(e,t,Ce,void 0,i,C);for(U in i)C=i[U],z=n[U],!i.hasOwnProperty(U)||C===z||C===void 0&&z===void 0||qr(e,t,U,C,i,z);return}}for(var y in n)C=n[y],n.hasOwnProperty(y)&&C!=null&&!i.hasOwnProperty(y)&&Ee(e,t,y,null,i,C);for(V in i)C=i[V],z=n[V],!i.hasOwnProperty(V)||C===z||C==null&&z==null||Ee(e,t,V,C,i,z)}var Or=null,kr=null;function Ss(e){return e.nodeType===9?e:e.ownerDocument}function Cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Br=null;function ah(){var e=window.event;return e&&e.type==="popstate"?e===Br?!1:(Br=e,!0):(Br=null,!1)}var zd=typeof setTimeout=="function"?setTimeout:void 0,ih=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(lh)}:zd;function lh(e){setTimeout(function(){throw e})}function fn(e){return e==="head"}function Md(e,t){var n=t,i=0,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<i&&8>i){n=i;var r=e.ownerDocument;if(n&1&&oi(r.documentElement),n&2&&oi(r.body),n&4)for(n=r.head,oi(n),r=n.firstChild;r;){var c=r.nextSibling,d=r.nodeName;r[Aa]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=c}}if(s===0){e.removeChild(l),vi(t);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:i=n.charCodeAt(0)-48;else i=0;n=l}while(n);vi(t)}function Ur(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ur(n),Ys(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rh(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function ch(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function Hr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oh(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var _r=null;function wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Rd(e,t,n){switch(t=Ss(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function oi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ys(e)}var bt=new Map,qd=new Set;function Ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=$.d;$.d={f:uh,r:dh,D:fh,C:mh,L:hh,m:ph,X:vh,S:gh,M:xh};function uh(){var e=Pt.f(),t=hs();return e||t}function dh(e){var t=Un(e);t!==null&&t.tag===5&&t.type==="form"?Wo(t):Pt.r(e)}var xa=typeof document>"u"?null:document;function Od(e,t,n){var i=xa;if(i&&typeof t=="string"&&t){var s=mt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),qd.has(s)||(qd.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Ie(t,"link",e),_e(t),i.head.appendChild(t)))}}function fh(e){Pt.D(e),Od("dns-prefetch",e,null)}function mh(e,t){Pt.C(e,t),Od("preconnect",e,t)}function hh(e,t,n){Pt.L(e,t,n);var i=xa;if(i&&e&&t){var s='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+mt(n.imageSizes)+'"]')):s+='[href="'+mt(e)+'"]';var l=s;switch(t){case"style":l=ya(e);break;case"script":l=ba(e)}bt.has(l)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),bt.set(l,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ui(l))||t==="script"&&i.querySelector(di(l))||(t=i.createElement("link"),Ie(t,"link",e),_e(t),i.head.appendChild(t)))}}function ph(e,t){Pt.m(e,t);var n=xa;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+mt(i)+'"][href="'+mt(e)+'"]',l=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ba(e)}if(!bt.has(l)&&(e=R({rel:"modulepreload",href:e},t),bt.set(l,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(l)))return}i=n.createElement("link"),Ie(i,"link",e),_e(i),n.head.appendChild(i)}}}function gh(e,t,n){Pt.S(e,t,n);var i=xa;if(i&&e){var s=Hn(i).hoistableStyles,l=ya(e);t=t||"default";var r=s.get(l);if(!r){var c={loading:0,preload:null};if(r=i.querySelector(ui(l)))c.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=bt.get(l))&&Gr(e,n);var d=r=i.createElement("link");_e(d),Ie(d,"link",e),d._p=new Promise(function(N,U){d.onload=N,d.onerror=U}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,As(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:c},s.set(l,r)}}}function vh(e,t){Pt.X(e,t);var n=xa;if(n&&e){var i=Hn(n).hoistableScripts,s=ba(e),l=i.get(s);l||(l=n.querySelector(di(s)),l||(e=R({src:e,async:!0},t),(t=bt.get(s))&&Vr(e,t),l=n.createElement("script"),_e(l),Ie(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(s,l))}}function xh(e,t){Pt.M(e,t);var n=xa;if(n&&e){var i=Hn(n).hoistableScripts,s=ba(e),l=i.get(s);l||(l=n.querySelector(di(s)),l||(e=R({src:e,async:!0,type:"module"},t),(t=bt.get(s))&&Vr(e,t),l=n.createElement("script"),_e(l),Ie(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(s,l))}}function kd(e,t,n,i){var s=(s=ie.current)?Ns(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ya(n.href),n=Hn(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ya(n.href);var l=Hn(s).hoistableStyles,r=l.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=s.querySelector(ui(e)))&&!l._p&&(r.instance=l,r.state.loading=5),bt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bt.set(e,n),l||yh(s,e,n,r.state))),t&&i===null)throw Error(o(528,""));return r}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ba(n),n=Hn(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ya(e){return'href="'+mt(e)+'"'}function ui(e){return'link[rel="stylesheet"]['+e+"]"}function Ld(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function yh(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ie(t,"link",n),_e(t),e.head.appendChild(t))}function ba(e){return'[src="'+mt(e)+'"]'}function di(e){return"script[async]"+e}function Bd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(i)return t.instance=i,_e(i),i;var s=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),_e(i),Ie(i,"style",s),As(i,n.precedence,e),t.instance=i;case"stylesheet":s=ya(n.href);var l=e.querySelector(ui(s));if(l)return t.state.loading|=4,t.instance=l,_e(l),l;i=Ld(n),(s=bt.get(s))&&Gr(i,s),l=(e.ownerDocument||e).createElement("link"),_e(l);var r=l;return r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Ie(l,"link",i),t.state.loading|=4,As(l,n.precedence,e),t.instance=l;case"script":return l=ba(n.src),(s=e.querySelector(di(l)))?(t.instance=s,_e(s),s):(i=n,(s=bt.get(l))&&(i=R({},n),Vr(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),_e(s),Ie(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,As(i,n.precedence,e));return t.instance}function As(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,l=s,r=0;r<i.length;r++){var c=i[r];if(c.dataset.precedence===t)l=c;else if(l!==s)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Es=null;function Ud(e,t,n){if(Es===null){var i=new Map,s=Es=new Map;s.set(n,i)}else s=Es,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var l=n[s];if(!(l[Aa]||l[Qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(t)||"";r=e+r;var c=i.get(r);c?c.push(l):i.set(r,[l])}}return i}function Hd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bh(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fi=null;function jh(){}function Sh(e,t,n){if(fi===null)throw Error(o(475));var i=fi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=ya(n.href),l=e.querySelector(ui(s));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Cs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=l,_e(l);return}l=e.ownerDocument||e,n=Ld(n),(s=bt.get(s))&&Gr(n,s),l=l.createElement("link"),_e(l);var r=l;r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Ie(l,"link",n),t.instance=l}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Cs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Nh(){if(fi===null)throw Error(o(475));var e=fi;return e.stylesheets&&e.count===0&&Yr(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Yr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cs(){if(this.count--,this.count===0){if(this.stylesheets)Yr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ts=null;function Yr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ts=new Map,t.forEach(Ah,e),Ts=null,Cs.call(e))}function Ah(e,t){if(!(t.state.loading&4)){var n=Ts.get(e);if(n)var i=n.get(null);else{n=new Map,Ts.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<s.length;l++){var r=s[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),l=n.get(r)||i,l===i&&n.set(null,s),n.set(r,s),this.count++,i=Cs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),l?l.parentNode.insertBefore(s,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Eh(e,t,n,i,s,l,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.hiddenUpdates=Hs(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Gd(e,t,n,i,s,l,r,c,d,N,U,V){return e=new Eh(e,t,n,r,c,d,N,V),t=1,l===!0&&(t|=24),l=lt(3,null,null,t),e.current=l,l.stateNode=e,t=Al(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},zl(l),e}function Vd(e){return e?(e=Jn,e):Jn}function Yd(e,t,n,i,s,l){s=Vd(s),i.context===null?i.context=s:i.pendingContext=s,i=Ft(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Wt(e,i,t),n!==null&&(dt(n,e,t),Ya(n,e,t))}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xr(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Pd(e){if(e.tag===13){var t=Kn(e,67108864);t!==null&&dt(t,e,67108864),Xr(e,67108864)}}var zs=!0;function Ch(e,t,n,i){var s=T.T;T.T=null;var l=$.p;try{$.p=2,Pr(e,t,n,i)}finally{$.p=l,T.T=s}}function Th(e,t,n,i){var s=T.T;T.T=null;var l=$.p;try{$.p=8,Pr(e,t,n,i)}finally{$.p=l,T.T=s}}function Pr(e,t,n,i){if(zs){var s=Ir(i);if(s===null)Rr(e,t,i,Ds,n),Qd(e,i);else if(Dh(s,e,t,n,i))i.stopPropagation();else if(Qd(e,i),t&4&&-1<zh.indexOf(e)){for(;s!==null;){var l=Un(s);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=xn(l.pendingLanes);if(r!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var d=1<<31-it(r);c.entanglements[1]|=d,r&=~d}Mt(l),(Se&6)===0&&(fs=Et()+500,li(0))}}break;case 13:c=Kn(l,2),c!==null&&dt(c,l,2),hs(),Xr(l,2)}if(l=Ir(i),l===null&&Rr(e,t,i,Ds,n),l===s)break;s=l}s!==null&&i.stopPropagation()}else Rr(e,t,i,null,n)}}function Ir(e){return e=Js(e),Qr(e)}var Ds=null;function Qr(e){if(Ds=null,e=Bn(e),e!==null){var t=j(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ds=e,null}function Id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mf()){case sc:return 2;case lc:return 8;case ji:case hf:return 32;case rc:return 268435456;default:return 32}default:return 32}}var Zr=!1,mn=null,hn=null,pn=null,hi=new Map,pi=new Map,gn=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function gi(e,t,n,i,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[s]},t!==null&&(t=Un(t),t!==null&&Pd(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Dh(e,t,n,i,s){switch(t){case"focusin":return mn=gi(mn,e,t,n,i,s),!0;case"dragenter":return hn=gi(hn,e,t,n,i,s),!0;case"mouseover":return pn=gi(pn,e,t,n,i,s),!0;case"pointerover":var l=s.pointerId;return hi.set(l,gi(hi.get(l)||null,e,t,n,i,s)),!0;case"gotpointercapture":return l=s.pointerId,pi.set(l,gi(pi.get(l)||null,e,t,n,i,s)),!0}return!1}function Zd(e){var t=Bn(e.target);if(t!==null){var n=j(t);if(n!==null){if(t=n.tag,t===13){if(t=w(n),t!==null){e.blockedOn=t,Sf(e.priority,function(){if(n.tag===13){var i=ut();i=_s(i);var s=Kn(n,i);s!==null&&dt(s,n,i),Xr(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ir(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ks=i,n.target.dispatchEvent(i),Ks=null}else return t=Un(n),t!==null&&Pd(t),e.blockedOn=n,!1;t.shift()}return!0}function $d(e,t,n){Ms(e)&&n.delete(t)}function Mh(){Zr=!1,mn!==null&&Ms(mn)&&(mn=null),hn!==null&&Ms(hn)&&(hn=null),pn!==null&&Ms(pn)&&(pn=null),hi.forEach($d),pi.forEach($d)}function ws(e,t){e.blockedOn===t&&(e.blockedOn=null,Zr||(Zr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Mh)))}var Rs=null;function Kd(e){Rs!==e&&(Rs=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Rs===e&&(Rs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Qr(i||n)===null)continue;break}var l=Un(n);l!==null&&(e.splice(t,3),t-=3,Ql(l,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function vi(e){function t(d){return ws(d,e)}mn!==null&&ws(mn,e),hn!==null&&ws(hn,e),pn!==null&&ws(pn,e),hi.forEach(t),pi.forEach(t);for(var n=0;n<gn.length;n++){var i=gn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Zd(n),n.blockedOn===null&&gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],r=s[Fe]||null;if(typeof l=="function")r||Kd(n);else if(r){var c=null;if(l&&l.hasAttribute("formAction")){if(s=l,r=l[Fe]||null)c=r.formAction;else if(Qr(s)!==null)continue}else c=r.action;typeof c=="function"?n[i+1]=c:(n.splice(i,3),i-=3),Kd(n)}}}function $r(e){this._internalRoot=e}qs.prototype.render=$r.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=ut();Yd(n,i,e,t,null,null)},qs.prototype.unmount=$r.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yd(e.current,2,null,e,null,null),hs(),t[Ln]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Zd(e)}};var Jd=M.version;if(Jd!=="19.1.0")throw Error(o(527,Jd,"19.1.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var wh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{ja=Os.inject(wh),at=Os}catch{}}return yi.createRoot=function(e,t){if(!A(e))throw Error(o(299));var n=!1,i="",s=mu,l=hu,r=pu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Gd(e,1,!1,null,null,n,i,s,l,r,c,null),e[Ln]=t.current,wr(e),new $r(t)},yi.hydrateRoot=function(e,t,n){if(!A(e))throw Error(o(299));var i=!1,s="",l=mu,r=hu,c=pu,d=null,N=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks),n.formState!==void 0&&(N=n.formState)),t=Gd(e,1,!0,t,n??null,i,s,l,r,c,d,N),t.context=Vd(null),n=t.current,i=ut(),i=_s(i),s=Ft(i),s.callback=null,Wt(n,s,i),n=i,t.current.lanes=n,Na(t,n),Mt(t),e[Ln]=t.current,wr(e),new qs(t)},yi.version="19.1.0",yi}var cf;function Gh(){if(cf)return Fr.exports;cf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(M){console.error(M)}}return u(),Fr.exports=_h(),Fr.exports}var Vh=Gh();function Yh(){const u=v.useRef(null);return v.useEffect(()=>{const M=u.current,g=M.getContext("2d"),o=()=>{M.width=window.innerWidth,M.height=window.innerHeight};o(),window.addEventListener("resize",o);const A=[],j=50;for(let q=0;q<j;q++)A.push({x:Math.random()*M.width,y:Math.random()*M.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1,opacity:Math.random()*.5+.2});const w=()=>{g.clearRect(0,0,M.width,M.height),g.strokeStyle="rgba(0, 255, 255, 0.1)",g.lineWidth=1;const q=50;for(let x=0;x<M.width;x+=q)g.beginPath(),g.moveTo(x,0),g.lineTo(x,M.height),g.stroke();for(let x=0;x<M.height;x+=q)g.beginPath(),g.moveTo(0,x),g.lineTo(M.width,x),g.stroke();A.forEach(x=>{x.x+=x.vx,x.y+=x.vy,(x.x<0||x.x>M.width)&&(x.vx*=-1),(x.y<0||x.y>M.height)&&(x.vy*=-1),g.beginPath(),g.arc(x.x,x.y,x.size,0,Math.PI*2),g.fillStyle=`rgba(0, 255, 255, ${x.opacity})`,g.fill()}),requestAnimationFrame(w)};return w(),()=>{window.removeEventListener("resize",o)}},[]),a.jsx("canvas",{ref:u,className:"tech-background",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none"}})}function Xh({categories:u,activeCategory:M,setActiveCategory:g,apis:o,activeApi:A,setActiveApi:j}){const[w,q]=v.useState(!1);v.useEffect(()=>{const R=D=>{w&&!D.target.closest(".tech-mobile-menu")&&!D.target.closest(".tech-burger-button")&&q(!1)};return document.addEventListener("click",R),()=>document.removeEventListener("click",R)},[w]);const x=R=>{j(R),q(!1)},f=R=>{g(R),q(!1)};return a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:`tech-burger-button ${w?"active":""}`,onClick:()=>q(!w),"aria-label":"Menu mobile","aria-expanded":w,children:[a.jsxs("div",{className:"burger-lines",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("div",{className:"burger-glow"})]}),a.jsxs("div",{className:`tech-mobile-menu ${w?"open":""}`,children:[a.jsxs("div",{className:"menu-header",children:[a.jsx("div",{className:"header-line"}),a.jsx("h3",{children:"CATEGORIES"}),a.jsx("div",{className:"header-line"})]}),a.jsx("div",{className:"menu-categories",children:u.map(R=>a.jsxs("button",{className:`tech-category-btn ${M===R?"active":""}`,onClick:()=>f(R),children:[a.jsx("span",{className:"btn-text",children:R}),a.jsx("div",{className:"btn-glow"})]},R))}),a.jsxs("div",{className:"menu-header",children:[a.jsx("div",{className:"header-line"}),a.jsx("h3",{children:"APIS"}),a.jsx("div",{className:"header-line"})]}),a.jsx("div",{className:"menu-apis",children:o.filter(R=>M==="Tous"||R.category===M).map(R=>a.jsxs("button",{className:`tech-api-btn ${A===R.id?"active":""}`,onClick:()=>x(R.id),children:[a.jsx("span",{className:"api-icon",children:R.icon}),a.jsx("span",{className:"api-name",children:R.name}),a.jsx("div",{className:"btn-glow"})]},R.id))})]})]})}function jt({apiName:u}){const[M,g]=v.useState(!1),o=()=>{const A=nc[u]||"";navigator.clipboard.writeText(A),g(!0),setTimeout(()=>g(!1),2e3)};return nc[u]?a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"💻 Code d'exemple"}),a.jsx("p",{className:"code-description",children:"Voici un exemple concret que vous pouvez copier et utiliser dans votre projet :"}),a.jsxs("div",{className:"code-container",children:[a.jsxs("div",{className:"code-header",children:[a.jsxs("span",{className:"code-title",children:[u,".js"]}),a.jsx("button",{className:"copy-button",onClick:o,"aria-label":"Copier le code",children:M?"✅ Copié !":"📋 Copier"})]}),a.jsx("pre",{className:"code-block",children:nc[u]})]}),a.jsx("style",{jsx:!0,children:`
        .code-description {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .code-container {
          background: rgba(5, 5, 8, 0.9);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 10px;
          margin: 1rem 0;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
        }

        .code-title {
          font-family: "Orbitron", monospace;
          color: var(--primary-cyan);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .copy-button {
          background: transparent;
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .copy-button:hover {
          background: rgba(0, 255, 255, 0.1);
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
        }

        .code-block {
          padding: 1rem;
          overflow-x: auto;
          font-family: "Courier New", monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--secondary-green);
          white-space: pre;
          max-height: 400px;
          overflow-y: auto;
        }
      `})]}):null}const nc={IntersectionObserver:`// Exemple d'utilisation de l'Intersection Observer API
const options = {
  root: null, // null = viewport
  rootMargin: '0px',
  threshold: 0.5 // déclencher quand 50% de l'élément est visible
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element visible !', entry.target);
      
      // Exemple : ajouter une classe pour animer l'élément
      entry.target.classList.add('visible');
      
      // Exemple : charger une image lazy
      if (entry.target.dataset.src) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target); // arrêter d'observer après chargement
      }
    } else {
      console.log('Element non visible', entry.target);
    }
  });
};

// Créer l'observer
const observer = new IntersectionObserver(callback, options);

// Observer plusieurs éléments
document.querySelectorAll('.observe-me').forEach(el => {
  observer.observe(el);
});

// Exemple d'implémentation de lazy loading d'images
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// Exemple d'implémentation d'infinite scroll
const loadMoreContent = () => {
  // Charger plus de contenu via fetch/AJAX
  fetch('/api/more-content')
    .then(res => res.json())
    .then(data => {
      // Ajouter le contenu à la page
      const container = document.querySelector('.content-container');
      
      data.items.forEach(item => {
        const el = document.createElement('div');
        el.textContent = item.text;
        container.appendChild(el);
      });
      
      // Réobserver le sentinel pour le prochain chargement
      observer.observe(document.querySelector('.sentinel'));
    });
};

// Observer un élément "sentinel" en bas de page
const sentinel = document.querySelector('.sentinel');
const infiniteScrollObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMoreContent();
  }
});
infiniteScrollObserver.observe(sentinel);`,ResizeObserver:`// Exemple d'utilisation de l'API ResizeObserver
const resizeCallback = entries => {
  for (const entry of entries) {
    // Récupérer les nouvelles dimensions
    const { width, height } = entry.contentRect;
    console.log('Element redimensionné:', entry.target);
    console.log(\`Nouvelles dimensions: \${Math.round(width)}px × \${Math.round(height)}px\`);
    
    // Exemple : Adapter le contenu selon la largeur
    if (width < 400) {
      entry.target.classList.add('compact');
      entry.target.classList.remove('expanded');
    } else {
      entry.target.classList.add('expanded');
      entry.target.classList.remove('compact');
    }
    
    // Exemple : Ajuster la taille de police
    let fontSize = '16px';
    if (width < 300) fontSize = '12px';
    else if (width < 600) fontSize = '18px';
    else fontSize = '24px';
    
    entry.target.style.fontSize = fontSize;
  }
};

// Créer l'observer
const resizeObserver = new ResizeObserver(resizeCallback);

// Observer un élément
const elementToObserve = document.querySelector('.resize-me');
resizeObserver.observe(elementToObserve);

// Observer plusieurs éléments
document.querySelectorAll('.responsive-element').forEach(el => {
  resizeObserver.observe(el);
});

// Arrêter d'observer un élément
// resizeObserver.unobserve(elementToObserve);

// Arrêter d'observer tous les éléments
// resizeObserver.disconnect();

// Cas pratique: Graphique responsive avec redimensionnement automatique
const chart = document.querySelector('#chart');
const redrawChart = (width, height) => {
  // Logique pour redessiner le graphique avec les nouvelles dimensions
  console.log(\`Redessiner le graphique: \${width}×\${height}\`);
};

resizeObserver.observe(chart);`,Clipboard:`// Exemples d'utilisation de l'API Clipboard

// 1. Copier du texte vers le presse-papier
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Texte copié avec succès !');
    return true;
  } catch (err) {
    console.error('Erreur lors de la copie :', err);
    return false;
  }
}

// Exemple d'utilisation
document.querySelector('#copy-button').addEventListener('click', () => {
  const textToCopy = document.querySelector('#text-to-copy').value;
  copyTextToClipboard(textToCopy)
    .then(success => {
      if (success) {
        showNotification('✅ Copié avec succès !');
      } else {
        showNotification('❌ Échec de la copie');
      }
    });
});

// 2. Lire du texte depuis le presse-papier
async function readTextFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Texte lu depuis le presse-papier:', text);
    return text;
  } catch (err) {
    console.error('Erreur lors de la lecture :', err);
    return null;
  }
}

// Exemple d'utilisation
document.querySelector('#paste-button').addEventListener('click', async () => {
  const text = await readTextFromClipboard();
  if (text) {
    document.querySelector('#paste-target').textContent = text;
    showNotification('📋 Texte collé !');
  } else {
    showNotification('❌ Impossible de lire le presse-papier');
  }
});

// Fonction utilitaire pour afficher une notification
function showNotification(message, duration = 3000) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = \`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    z-index: 1000;
  \`;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s';
    setTimeout(() => notification.remove(), 500);
  }, duration);
}

// Exemple plus avancé : Bouton de copie pour les blocs de code
document.querySelectorAll('.code-block').forEach(block => {
  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copier';
  copyBtn.className = 'copy-code-btn';
  
  copyBtn.addEventListener('click', async () => {
    const code = block.querySelector('code').textContent;
    const success = await copyTextToClipboard(code);
    
    if (success) {
      copyBtn.textContent = 'Copié !';
      setTimeout(() => { copyBtn.textContent = 'Copier'; }, 2000);
    }
  });
  
  block.appendChild(copyBtn);
});`,WebShare:`// Exemples d'utilisation de l'API Web Share

// Vérifier si l'API est supportée
function isWebShareSupported() {
  return navigator.share !== undefined;
}

// Fonction de partage basique
async function shareContent(data) {
  if (!isWebShareSupported()) {
    console.log('Web Share API n'est pas supportée sur ce navigateur');
    return false;
  }
  
  try {
    await navigator.share(data);
    console.log('Contenu partagé avec succès');
    return true;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Erreur lors du partage:', err);
    } else {
      console.log('Partage annulé par l'utilisateur');
    }
    return false;
  }
}

// Exemple: Partage de texte simple
document.querySelector('#share-text').addEventListener('click', () => {
  shareContent({
    title: 'Mon super article',
    text: 'Découvrez cet article incroyable sur les APIs JavaScript modernes !',
    url: window.location.href
  });
});

// Exemple: Partage avec fallback pour les navigateurs non supportés
function shareWithFallback(data) {
  if (isWebShareSupported()) {
    return shareContent(data);
  } else {
    // Fallback: ouvrir une fenêtre popup avec des liens vers les réseaux sociaux
    const text = encodeURIComponent(data.text || '');
    const url = encodeURIComponent(data.url || window.location.href);
    const title = encodeURIComponent(data.title || document.title);
    
    const twitterUrl = \`https://twitter.com/intent/tweet?text=\${title}&url=\${url}\`;
    const facebookUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${url}\`;
    const linkedinUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${url}\`;
    
    // Créer la modal de partage personnalisée
    const modal = document.createElement('div');
    modal.innerHTML = \`
      <div class="share-modal">
        <h3>Partager sur</h3>
        <div class="share-buttons">
          <a href="\${twitterUrl}" target="_blank">Twitter</a>
          <a href="\${facebookUrl}" target="_blank">Facebook</a>
          <a href="\${linkedinUrl}" target="_blank">LinkedIn</a>
          <a href="mailto:?subject=\${title}&body=\${text}%20\${url}">Email</a>
        </div>
        <button id="close-share-modal">Fermer</button>
      </div>
    \`;
    
    document.body.appendChild(modal);
    document.getElementById('close-share-modal').addEventListener('click', () => {
      modal.remove();
    });
    
    return true;
  }
}

// Utilisation de la fonction avec fallback
document.querySelector('#share-with-fallback').addEventListener('click', () => {
  shareWithFallback({
    title: 'Partage avec fallback',
    text: 'Contenu partageable sur tous les navigateurs !',
    url: window.location.href
  });
});

// Exemple avancé: Partage de fichiers
async function shareFiles(title, files) {
  if (!navigator.canShare || !navigator.canShare({ files })) {
    console.log('Le partage de fichiers n'est pas pris en charge sur ce navigateur');
    return false;
  }
  
  try {
    await navigator.share({
      title: title,
      files: files
    });
    console.log('Fichiers partagés avec succès');
    return true;
  } catch (err) {
    console.error('Erreur lors du partage de fichiers:', err);
    return false;
  }
}

// Exemple d'utilisation
document.querySelector('#share-image').addEventListener('click', async () => {
  // Récupérer une image (par exemple depuis un canvas)
  const canvas = document.querySelector('#my-canvas');
  
  if (canvas) {
    // Convertir le canvas en blob
    canvas.toBlob(async blob => {
      // Créer un fichier à partir du blob
      const file = new File([blob], 'image.png', { type: 'image/png' });
      
      // Partager le fichier
      await shareFiles('Mon image', [file]);
    }, 'image/png');
  }
});`,MutationObserver:`// Exemples d'utilisation de l'API MutationObserver

// Configuration de l'observer
const config = {
  childList: true,     // Observer les ajouts/suppressions d'enfants
  attributes: true,    // Observer les changements d'attributs
  characterData: true, // Observer les modifications de contenu textuel
  subtree: true,       // Observer également tous les descendants
  attributeOldValue: true,    // Conserver l'ancienne valeur des attributs
  characterDataOldValue: true // Conserver l'ancienne valeur du contenu
};

// Callback exécuté à chaque mutation
const callback = function(mutationsList, observer) {
  console.log('Mutations détectées:', mutationsList.length);
  
  for (const mutation of mutationsList) {
    // Gestion des ajouts/suppressions d'éléments
    if (mutation.type === 'childList') {
      if (mutation.addedNodes.length > 0) {
        console.log('Nœuds ajoutés:', mutation.addedNodes);
        
        // Exemple: Traiter les nouveaux éléments
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Faire quelque chose avec le nouvel élément
            node.classList.add('new-element');
            
            // Exemple: Initialiser des tooltips sur les nouveaux éléments
            if (node.dataset.tooltip) {
              initTooltip(node);
            }
          }
        });
      }
      
      if (mutation.removedNodes.length > 0) {
        console.log('Nœuds supprimés:', mutation.removedNodes);
        
        // Exemple: Nettoyer les ressources pour les éléments supprimés
        mutation.removedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE && node._cleanup) {
            node._cleanup();
          }
        });
      }
    }
    
    // Gestion des changements d'attributs
    else if (mutation.type === 'attributes') {
      console.log(
        \`L'attribut "\${mutation.attributeName}" a été modifié\`,
        \`Ancienne valeur: \${mutation.oldValue}\`,
        \`Nouvelle valeur: \${mutation.target.getAttribute(mutation.attributeName)}\`
      );
      
      // Exemple: Réagir aux changements de classe
      if (mutation.attributeName === 'class') {
        if (mutation.target.classList.contains('highlight')) {
          // L'élément a reçu la classe highlight
          animateHighlight(mutation.target);
        }
      }
      
      // Exemple: Synchroniser les attributs data avec l'état interne
      if (mutation.attributeName.startsWith('data-')) {
        updateElementState(mutation.target);
      }
    }
    
    // Gestion des modifications de contenu textuel
    else if (mutation.type === 'characterData') {
      console.log(
        'Le contenu textuel a été modifié',
        \`Ancienne valeur: "\${mutation.oldValue}"\`,
        \`Nouvelle valeur: "\${mutation.target.textContent}"\`
      );
      
      // Exemple: Mise à jour automatique de compteurs
      updateCharacterCounter(mutation.target);
    }
  }
};

// Créer l'observer
const observer = new MutationObserver(callback);

// Cibler l'élément à observer
const targetNode = document.getElementById('content-container');

// Démarrer l'observation
observer.observe(targetNode, config);

// Arrêter l'observation plus tard si nécessaire
// observer.disconnect();

// Exemple d'optimisation pour éviter les surcharges
function createOptimizedObserver(targetElement) {
  // Utiliser un debounce pour limiter les appels de la fonction
  let timeout = null;
  
  const processChanges = (mutations) => {
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      console.log('Traitement des mutations par lots');
      // Traitement groupé des mutations
      processBatchMutations(mutations);
    }, 100); // Délai en ms
  };
  
  const batchObserver = new MutationObserver(processChanges);
  
  // Configuration avec seulement les options nécessaires
  batchObserver.observe(targetElement, {
    childList: true,
    subtree: false,      // Limité à l'élément parent seulement
    attributes: true,
    attributeFilter: ['class', 'style'], // Limité aux attributs spécifiques
    characterData: false  // Désactivé si pas nécessaire
  });
  
  return batchObserver;
}

// Utilisation de l'observer optimisé
const dynamicList = document.getElementById('dynamic-list');
const optimizedObserver = createOptimizedObserver(dynamicList);`,IdleCallback:`// Exemples d'utilisation de requestIdleCallback

// Fonction à exécuter pendant les périodes d'inactivité
function doIdleWork(deadline) {
  // Vérifier combien de temps est disponible
  console.log(\`Temps restant: \${deadline.timeRemaining()} ms\`);
  
  // Vérifier si l'exécution est urgente
  console.log(\`Tâche urgente: \${deadline.didTimeout ? 'oui' : 'non'}\`);
  
  // Continuer tant qu'il reste du temps et qu'il y a du travail à faire
  while (deadline.timeRemaining() > 0 && tasksQueue.length > 0) {
    const task = tasksQueue.shift();
    task();
  }
  
  // S'il reste des tâches, planifier à nouveau
  if (tasksQueue.length > 0) {
    requestIdleCallback(doIdleWork, { timeout: 1000 });
  }
}

// File d'attente pour les tâches à exécuter pendant les périodes d'inactivité
const tasksQueue = [];

// Ajouter des tâches à la file
function addIdleTask(task) {
  tasksQueue.push(task);
  
  // Si c'est la première tâche, démarrer le traitement
  if (tasksQueue.length === 1) {
    requestIdleCallback(doIdleWork, { timeout: 2000 });
  }
}

// Exemples de tâches à ajouter
function calculatePrimes(limit) {
  return () => {
    console.log(\`Calcul des nombres premiers jusqu'à \${limit}\`);
    const primes = [];
    
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    
    console.log(\`Terminé: \${primes.length} nombres premiers trouvés\`);
    return primes;
  };
}

function preprocessData(data) {
  return () => {
    console.log('Prétraitement des données');
    // Simuler un traitement lourd
    const processed = data.map(item => {
      // Traitement complexe...
      return item * 2;
    });
    
    console.log('Prétraitement terminé');
    return processed;
  };
}

// Utilisation
document.getElementById('add-task-button').addEventListener('click', () => {
  addIdleTask(calculatePrimes(10000));
  addIdleTask(preprocessData(Array(5000).fill(1)));
});

// Polyfill pour les navigateurs qui ne supportent pas requestIdleCallback
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function(callback, options) {
    const start = Date.now();
    return setTimeout(function() {
      callback({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  };
  
  window.cancelIdleCallback = function(id) {
    clearTimeout(id);
  };
}

// Utilisation pratique: chargement d'images en arrière-plan
function loadImagesInIdle() {
  const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));
  
  function loadImage(image) {
    return () => {
      if (!image.dataset.src) return;
      
      image.src = image.dataset.src;
      image.onload = () => {
        image.removeAttribute('data-src');
        image.classList.add('loaded');
      };
    };
  }
  
  lazyImages.forEach(img => {
    addIdleTask(loadImage(img));
  });
}

// Charger les images quand la page est complètement chargée
window.addEventListener('load', loadImagesInIdle);`,Battery:`// Exemples d'utilisation de l'API Battery Status

// Fonction principale pour accéder à l'API Battery
async function getBatteryInfo() {
  // Vérifier si l'API est supportée
  if (!('getBattery' in navigator)) {
    console.log('Battery API non supportée sur ce navigateur');
    return null;
  }
  
  try {
    // Accéder à l'objet BatteryManager
    const battery = await navigator.getBattery();
    
    // Récupérer les informations actuelles
    const batteryInfo = {
      level: battery.level * 100,           // Niveau en pourcentage
      charging: battery.charging,           // En cours de charge ou non
      chargingTime: battery.chargingTime,   // Temps restant pour charger (en secondes)
      dischargingTime: battery.dischargingTime // Temps restant d'autonomie (en secondes)
    };
    
    console.log('Informations batterie:', batteryInfo);
    
    // Ajouter des écouteurs d'événements pour suivre les changements
    battery.addEventListener('levelchange', () => {
      console.log(\`Niveau de batterie modifié: \${battery.level * 100}%\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('chargingchange', () => {
      console.log(\`État de charge modifié: \${battery.charging ? 'En charge' : 'Sur batterie'}\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('chargingtimechange', () => {
      console.log(\`Temps de charge restant modifié: \${formatTime(battery.chargingTime)}\`);
      updateBatteryUI(battery);
    });
    
    battery.addEventListener('dischargingtimechange', () => {
      console.log(\`Temps de décharge restant modifié: \${formatTime(battery.dischargingTime)}\`);
      updateBatteryUI(battery);
    });
    
    return battery;
    
  } catch (error) {
    console.error('Erreur lors de l'accès à l'API Battery:', error);
    return null;
  }
}

// Fonction pour formater le temps en heures/minutes
function formatTime(seconds) {
  if (seconds === Infinity || seconds === 0) {
    return 'Inconnu';
  }
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return \`\${hours}h \${minutes}min\`;
  }
  return \`\${minutes}min\`;
}

// Fonction pour mettre à jour l'interface utilisateur
function updateBatteryUI(battery) {
  const batteryLevel = document.getElementById('battery-level');
  const chargingStatus = document.getElementById('charging-status');
  const remainingTime = document.getElementById('remaining-time');
  
  if (batteryLevel) {
    batteryLevel.textContent = \`\${Math.round(battery.level * 100)}%\`;
    batteryLevel.style.width = \`\${battery.level * 100}%\`;
  }
  
  if (chargingStatus) {
    chargingStatus.textContent = battery.charging ? 'En charge' : 'Sur batterie';
    chargingStatus.className = battery.charging ? 'charging' : 'discharging';
  }
  
  if (remainingTime) {
    const time = battery.charging ? battery.chargingTime : battery.dischargingTime;
    remainingTime.textContent = formatTime(time);
  }
  
  // Activer le mode économie d'énergie si niveau faible
  if (battery.level < 0.2 && !battery.charging) {
    enablePowerSaveMode();
  } else {
    disablePowerSaveMode();
  }
}

// Fonctions pour optimiser la consommation d'énergie
function enablePowerSaveMode() {
  console.log('Activation du mode économie d'énergie');
  
  // Réduire les animations
  document.body.classList.add('power-save-mode');
  
  // Réduire la fréquence des requêtes
  window.powerSaveModeEnabled = true;
  
  // Réduire la qualité des médias
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.setAttribute('data-original-quality', video.quality || 'high');
    video.quality = 'low';
  });
}

function disablePowerSaveMode() {
  if (document.body.classList.contains('power-save-mode')) {
    console.log('Désactivation du mode économie d'énergie');
    
    document.body.classList.remove('power-save-mode');
    window.powerSaveModeEnabled = false;
    
    // Restaurer la qualité des médias
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.quality = video.getAttribute('data-original-quality') || 'high';
    });
  }
}

// Initialiser et suivre l'état de la batterie
document.addEventListener('DOMContentLoaded', () => {
  getBatteryInfo().then(battery => {
    if (battery) {
      updateBatteryUI(battery);
    }
  });
});`,Performance:`// Exemples d'utilisation de l'API Performance et PerformanceObserver

// 1. Mesurer le temps d'exécution avec performance.now()
function mesureExecutionTime(callback) {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  
  console.log(\`Temps d'exécution: \${endTime - startTime} ms\`);
  return endTime - startTime;
}

// Exemple d'utilisation
mesureExecutionTime(() => {
  // Code à mesurer
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }
});

// 2. Créer des marques et mesures personnalisées
function complexOperation() {
  // Marque de début
  performance.mark('operation-start');
  
  // Première étape
  performance.mark('step1-start');
  for (let i = 0; i < 500000; i++) {
    Math.sqrt(i);
  }
  performance.mark('step1-end');
  
  // Deuxième étape
  performance.mark('step2-start');
  let array = Array(100000).fill(0).map((_, i) => i);
  array.sort(() => Math.random() - 0.5);
  performance.mark('step2-end');
  
  // Troisième étape
  performance.mark('step3-start');
  array.reduce((sum, val) => sum + val, 0);
  performance.mark('step3-end');
  
  // Marque de fin
  performance.mark('operation-end');
  
  // Créer des mesures à partir des marques
  performance.measure('Opération complète', 'operation-start', 'operation-end');
  performance.measure('Étape 1 (Racines carrées)', 'step1-start', 'step1-end');
  performance.measure('Étape 2 (Tri)', 'step2-start', 'step2-end');
  performance.measure('Étape 3 (Réduction)', 'step3-start', 'step3-end');
  
  // Afficher les résultats
  const measures = performance.getEntriesByType('measure');
  measures.forEach(measure => {
    console.log(\`\${measure.name}: \${measure.duration.toFixed(2)} ms\`);
  });
}

complexOperation();

// 3. Utiliser PerformanceObserver pour surveiller automatiquement
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(\`[Observer] \${entry.name}: \${entry.duration.toFixed(2)} ms\`);
  });
});

// Configurer l'observer pour surveiller les mesures et les ressources
observer.observe({ entryTypes: ['measure', 'resource', 'navigation', 'paint'] });

// 4. Mesurer les ressources chargées
function analyzeResourcePerformance() {
  const resources = performance.getEntriesByType('resource');
  
  const results = resources.map(resource => ({
    name: resource.name.split('/').pop(),
    type: resource.initiatorType,
    size: resource.transferSize,
    duration: resource.duration,
    startTime: resource.startTime
  }));
  
  // Trier par durée de chargement
  results.sort((a, b) => b.duration - a.duration);
  
  // Afficher les ressources les plus lentes
  console.log('Ressources les plus lentes:');
  results.slice(0, 5).forEach(res => {
    console.log(\`\${res.name} (\${res.type}): \${res.duration.toFixed(2)} ms, \${(res.size/1024).toFixed(2)} KB\`);
  });
  
  // Calculer des statistiques
  const totalSize = results.reduce((sum, res) => sum + res.size, 0) / 1024; // KB
  const totalTime = Math.max(...results.map(res => res.startTime + res.duration));
  
  console.log(\`
Total: \${results.length} ressources, \${totalSize.toFixed(2)} KB, \${totalTime.toFixed(2)} ms\`);
}

// Exécuter l'analyse au chargement complet de la page
window.addEventListener('load', () => {
  // Attendre un peu pour que toutes les ressources soient comptabilisées
  setTimeout(analyzeResourcePerformance, 500);
});

// 5. Navigation Timing API
function analyzePageLoad() {
  const timing = performance.getEntriesByType('navigation')[0];
  
  if (timing) {
    // Temps de chargement total
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    
    // Temps de requête DNS
    const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
    
    // Temps de connexion TCP
    const tcpTime = timing.connectEnd - timing.connectStart;
    
    // Temps jusqu'au premier octet (TTFB)
    const ttfb = timing.responseStart - timing.requestStart;
    
    // Temps de téléchargement de la page
    const downloadTime = timing.responseEnd - timing.responseStart;
    
    // Temps de traitement DOM
    const domProcessingTime = timing.domComplete - timing.domInteractive;
    
    console.log(\`
Performance de chargement de page:
-----------------------------------
Temps de chargement total: \${loadTime.toFixed(2)} ms
Recherche DNS: \${dnsTime.toFixed(2)} ms
Connexion TCP: \${tcpTime.toFixed(2)} ms
Temps jusqu'au premier octet (TTFB): \${ttfb.toFixed(2)} ms
Téléchargement de la réponse: \${downloadTime.toFixed(2)} ms
Traitement du DOM: \${domProcessingTime.toFixed(2)} ms
\`);
  } else {
    console.log('Navigation Timing API non supportée ou données non disponibles.');
  }
}

window.addEventListener('load', analyzePageLoad);`,BroadcastChannel:`// Exemples d'utilisation de l'API BroadcastChannel

// 1. Créer un canal de communication
function createChannel(channelName) {
  // Vérifier le support de l'API
  if (!('BroadcastChannel' in window)) {
    console.error('BroadcastChannel API non supportée par ce navigateur');
    return null;
  }
  
  try {
    // Créer une instance du canal
    const channel = new BroadcastChannel(channelName);
    console.log(\`Canal "\${channelName}" créé avec succès\`);
    return channel;
  } catch (error) {
    console.error(\`Erreur lors de la création du canal "\${channelName}":, error\`);
    return null;
  }
}

// 2. Envoyer des messages simples
function sendMessage(channel, message) {
  if (!channel) return false;
  
  try {
    channel.postMessage(message);
    console.log('Message envoyé:', message);
    return true;
  } catch (error) {
    console.error('Erreur lors de l'envoi du message:', error);
    return false;
  }
}

// 3. Écouter les messages reçus
function listenForMessages(channel, callback) {
  if (!channel) return false;
  
  try {
    channel.onmessage = (event) => {
      console.log('Message reçu:', event.data);
      callback(event.data);
    };
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la configuration de l'écouteur de messages:', error);
    return false;
  }
}

// 4. Gérer les erreurs
function handleChannelErrors(channel) {
  if (!channel) return;
  
  channel.onmessageerror = (event) => {
    console.error('Erreur de réception du message:', event);
  };
}

// 5. Fermer le canal proprement
function closeChannel(channel) {
  if (!channel) return;
  
  try {
    channel.close();
    console.log('Canal fermé');
  } catch (error) {
    console.error('Erreur lors de la fermeture du canal:', error);
  }
}

// Exemple d'implémentation complète
document.addEventListener('DOMContentLoaded', () => {
  // Créer un canal pour la synchronisation
  const syncChannel = createChannel('app-sync');
  
  if (syncChannel) {
    // Configurer l'écouteur
    listenForMessages(syncChannel, (data) => {
      // Traiter différents types de messages
      if (typeof data === 'object' && data !== null) {
        switch (data.type) {
          case 'CART_UPDATE':
            updateCartUI(data.items);
            break;
            
          case 'NOTIFICATION':
            showNotification(data.message);
            break;
            
          case 'USER_STATUS':
            updateUserStatus(data.status);
            break;
            
          case 'SYNC_REQUEST':
            // Répondre avec l'état actuel
            syncChannel.postMessage({
              type: 'SYNC_RESPONSE',
              state: getCurrentState(),
              timestamp: Date.now()
            });
            break;
        }
      }
    });
    
    handleChannelErrors(syncChannel);
    
    // Exemples d'envoi de messages
    document.getElementById('update-button').addEventListener('click', () => {
      sendMessage(syncChannel, {
        type: 'CART_UPDATE',
        items: getCartItems(),
        timestamp: Date.now()
      });
    });
    
    document.getElementById('notify-button').addEventListener('click', () => {
      sendMessage(syncChannel, {
        type: 'NOTIFICATION',
        message: 'Ceci est une notification en temps réel !',
        timestamp: Date.now()
      });
    });
    
    // Annoncer notre présence
    sendMessage(syncChannel, {
      type: 'TAB_OPENED',
      tabId: generateUniqueTabId(),
      timestamp: Date.now()
    });
    
    // Nettoyer lors de la fermeture
    window.addEventListener('beforeunload', () => {
      sendMessage(syncChannel, {
        type: 'TAB_CLOSED',
        tabId: generateUniqueTabId(),
        timestamp: Date.now()
      });
      
      closeChannel(syncChannel);
    });
  }
  
  // Fonctions utilitaires
  function generateUniqueTabId() {
    return \`tab-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
  
  function getCurrentState() {
    // Récupérer l'état actuel de l'application
    return {
      cart: getCartItems(),
      userPrefs: getUserPreferences(),
      lastUpdate: new Date().toISOString()
    };
  }
});`,Geolocation:`// Exemples d'utilisation de l'API Geolocation

// 1. Vérifier la prise en charge de l'API
function isGeolocationSupported() {
  if ('geolocation' in navigator) {
    console.log('Géolocalisation supportée !');
    return true;
  } else {
    console.log('La géolocalisation n'est pas prise en charge par votre navigateur');
    return false;
  }
}

// 2. Obtenir la position actuelle
function getCurrentPosition() {
  if (!isGeolocationSupported()) {
    return Promise.reject(new Error('Géolocalisation non supportée'));
  }
  
  const options = {
    enableHighAccuracy: true,  // Meilleure précision (GPS sur mobile)
    timeout: 5000,            // Délai maximum (5 secondes)
    maximumAge: 0             // Ne pas utiliser de résultat en cache
  };
  
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Position obtenue !', position.coords);
        resolve(position);
      },
      (error) => {
        console.error('Erreur de géolocalisation:', getErrorMessage(error));
        reject(error);
      },
      options
    );
  });
}

// 3. Suivre la position en temps réel
function watchPosition(successCallback, errorCallback) {
  if (!isGeolocationSupported()) {
    errorCallback(new Error('Géolocalisation non supportée'));
    return null;
  }
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 30000  // Accepte des résultats de moins de 30 secondes
  };
  
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, accuracy, altitude, heading, speed } = position.coords;
      
      console.log(\`Position mise à jour: \${latitude}, \${longitude} (précision: \${accuracy}m)\`);
      
      // Informations supplémentaires
      if (altitude) console.log(\`Altitude: \${altitude}m\`);
      if (heading) console.log(\`Direction: \${heading}° du nord\`);
      if (speed) console.log(\`Vitesse: \${speed * 3.6} km/h\`);  // m/s → km/h
      
      successCallback(position);
    },
    (error) => {
      console.error('Erreur de suivi:', getErrorMessage(error));
      errorCallback(error);
    },
    options
  );
  
  return watchId;
}

// 4. Arrêter le suivi de position
function stopWatching(watchId) {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    console.log('Suivi de position arrêté');
  }
}

// 5. Obtenir une adresse à partir de coordonnées (géocodage inverse)
async function reverseGeocode(latitude, longitude) {
  try {
    // Utiliser l'API Nominatim d'OpenStreetMap (gratuite)
    const response = await fetch(
      \`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${latitude}&lon=\${longitude}&zoom=18&addressdetails=1\`,
      {
        headers: {
          'User-Agent': 'MonApplication/1.0', // Respecter les conditions d'utilisation
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Adresse trouvée:', data.display_name);
    
    return {
      fullAddress: data.display_name,
      street: data.address?.road,
      houseNumber: data.address?.house_number,
      city: data.address?.city || data.address?.town || data.address?.village,
      postcode: data.address?.postcode,
      country: data.address?.country,
      countryCode: data.address?.country_code
    };
    
  } catch (error) {
    console.error('Erreur de géocodage inverse:', error);
    throw error;
  }
}

// 6. Calculer la distance entre deux points (formule de Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Rayon de la Terre en mètres
  
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
           Math.cos(φ1) * Math.cos(φ2) *
           Math.sin(Δλ/2) * Math.sin(Δλ/2);
           
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance; // en mètres
}

// 7. Formater un message d'erreur
function getErrorMessage(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      return "L'utilisateur a refusé l'accès à la géolocalisation.";
    case error.POSITION_UNAVAILABLE:
      return "Les informations de position ne sont pas disponibles.";
    case error.TIMEOUT:
      return "La demande de géolocalisation a expiré.";
    default:
      return \`Erreur inconnue (\${error.code}): \${error.message}\`;
  }
}

// Exemple d'utilisation complet
document.addEventListener('DOMContentLoaded', () => {
  // Obtenir la position et l'adresse
  document.getElementById('get-location-btn').addEventListener('click', async () => {
    try {
      // Afficher un indicateur de chargement
      document.getElementById('location-status').textContent = "Recherche de votre position...";
      
      // Obtenir la position
      const position = await getCurrentPosition();
      const { latitude, longitude, accuracy } = position.coords;
      
      // Afficher les coordonnées
      document.getElementById('coordinates').textContent = 
        \`\${latitude.toFixed(6)}, \${longitude.toFixed(6)} (±\${Math.round(accuracy)}m)\`;
      
      // Obtenir l'adresse
      document.getElementById('location-status').textContent = "Recherche de l'adresse...";
      const address = await reverseGeocode(latitude, longitude);
      
      // Afficher l'adresse
      document.getElementById('address').textContent = address.fullAddress;
      
      // Créer un lien Google Maps
      const mapLink = document.getElementById('map-link');
      mapLink.href = \`https://www.google.com/maps?q=\${latitude},\${longitude}\`;
      mapLink.textContent = "Voir sur Google Maps";
      mapLink.style.display = "block";
      
      document.getElementById('location-status').textContent = "Localisation terminée";
      
    } catch (error) {
      document.getElementById('location-status').textContent = \`Erreur: \${getErrorMessage(error)}\`;
    }
  });
  
  // Suivre la position
  let trackingId = null;
  document.getElementById('track-location-btn').addEventListener('click', () => {
    if (trackingId) {
      stopWatching(trackingId);
      trackingId = null;
      document.getElementById('tracking-status').textContent = "Suivi arrêté";
      document.getElementById('track-location-btn').textContent = "Démarrer le suivi";
    } else {
      document.getElementById('tracking-status').textContent = "Démarrage du suivi...";
      
      trackingId = watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          const historyList = document.getElementById('position-history');
          const listItem = document.createElement('li');
          listItem.textContent = \`\${new Date().toLocaleTimeString()}: \${latitude.toFixed(6)}, \${longitude.toFixed(6)}\`;
          historyList.prepend(listItem);
          
          document.getElementById('tracking-status').textContent = "Suivi actif";
        },
        (error) => {
          document.getElementById('tracking-status').textContent = \`Erreur: \${getErrorMessage(error)}\`;
          trackingId = null;
          document.getElementById('track-location-btn').textContent = "Démarrer le suivi";
        }
      );
      
      document.getElementById('track-location-btn').textContent = "Arrêter le suivi";
    }
  });
});`,WebAudio:`// Exemples d'utilisation de l'API Web Audio

// 1. Création du contexte audio
function createAudioContext() {
  // Le constructeur peut être préfixé sur les anciens navigateurs
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  
  if (!AudioContext) {
    console.error('Web Audio API non supportée par ce navigateur');
    return null;
  }
  
  try {
    const context = new AudioContext();
    console.log(\`Contexte audio créé - fréquence d'échantillonnage: \${context.sampleRate}Hz\`);
    return context;
  } catch (err) {
    console.error('Erreur lors de la création du contexte audio:', err);
    return null;
  }
}

// 2. Gestion de l'état du contexte audio
function handleAudioContext(audioContext) {
  if (!audioContext) return;
  
  // Reprise du contexte audio (nécessite une interaction utilisateur)
  if (audioContext.state === 'suspended') {
    audioContext.resume().then(() => {
      console.log('Contexte audio repris');
    });
  }
  
  // Afficher l'état actuel du contexte audio
  console.log(\`État du contexte audio: \${audioContext.state}\`);
  
  // Écouter les changements d'état
  audioContext.addEventListener('statechange', () => {
    console.log(\`Nouvel état du contexte audio: \${audioContext.state}\`);
  });
}

// 3. Synthèse sonore simple avec un oscillateur
function createSimpleOscillator(audioContext, options = {}) {
  if (!audioContext) return null;
  
  // Valeurs par défaut
  const defaults = {
    type: 'sine',          // Type d'onde: sine, square, sawtooth, triangle
    frequency: 440,        // La 440Hz
    detune: 0,             // Désaccordage en cents
    volume: 0.5,           // Volume (0-1)
    duration: 1,           // Durée en secondes
  };
  
  const config = { ...defaults, ...options };
  
  // Créer l'oscillateur
  const oscillator = audioContext.createOscillator();
  oscillator.type = config.type;
  oscillator.frequency.value = config.frequency;
  oscillator.detune.value = config.detune;
  
  // Créer un nœud de gain pour contrôler le volume
  const gainNode = audioContext.createGain();
  gainNode.gain.value = config.volume;
  
  // Connecter les nœuds
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Fonction pour jouer l'oscillateur
  const play = (startTime = audioContext.currentTime, endTime = startTime + config.duration) => {
    oscillator.start(startTime);
    oscillator.stop(endTime);
  };
  
  return {
    oscillator,
    gainNode,
    play,
    // Fonctions de contrôle
    setFrequency: (value) => oscillator.frequency.value = value,
    setDetune: (value) => oscillator.detune.value = value,
    setVolume: (value) => gainNode.gain.value = value,
    setType: (value) => oscillator.type = value,
  };
}

// 4. Charger et jouer des fichiers audio
async function loadAudioFile(audioContext, url) {
  if (!audioContext) return null;
  
  try {
    // Télécharger le fichier audio
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    // Convertir en ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();
    
    // Décoder l'audio
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    console.log(\`Fichier audio chargé: \${audioBuffer.duration.toFixed(2)}s, \${audioBuffer.numberOfChannels} canaux\`);
    
    return audioBuffer;
  } catch (err) {
    console.error('Erreur de chargement du fichier audio:', err);
    return null;
  }
}

function playAudioBuffer(audioContext, audioBuffer, options = {}) {
  if (!audioContext || !audioBuffer) return null;
  
  const defaults = {
    volume: 1,
    loop: false,
    playbackRate: 1,
    startTime: 0,
    offset: 0
  };
  
  const config = { ...defaults, ...options };
  
  // Créer une source à partir du buffer
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.loop = config.loop;
  source.playbackRate.value = config.playbackRate;
  
  // Créer un nœud de gain pour le volume
  const gainNode = audioContext.createGain();
  gainNode.gain.value = config.volume;
  
  // Connecter les nœuds
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Démarrer la lecture
  source.start(config.startTime, config.offset);
  
  return {
    source,
    gainNode,
    stop: (time = audioContext.currentTime) => source.stop(time),
    setVolume: (value) => gainNode.gain.value = value,
    setPlaybackRate: (value) => source.playbackRate.value = value
  };
}

// 5. Créer un égaliseur simple
function createEqualizer(audioContext, bands = [60, 170, 350, 1000, 3500, 10000]) {
  if (!audioContext) return null;
  
  const filters = bands.map(frequency => {
    const filter = audioContext.createBiquadFilter();
    filter.type = 'peaking';  // Filtre de type peak
    filter.frequency.value = frequency;
    filter.Q.value = 1;       // Facteur de qualité
    filter.gain.value = 0;    // Gain neutre (dB)
    return filter;
  });
  
  // Connecter les filtres en série
  for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }
  
  // Fonctions de contrôle
  function setGain(bandIndex, gainValue) {
    if (bandIndex >= 0 && bandIndex < filters.length) {
      filters[bandIndex].gain.value = gainValue;
    }
  }
  
  return {
    filters,
    setGain,
    input: filters[0],
    output: filters[filters.length - 1],
    connectSource: (source) => source.connect(filters[0]),
    connectDestination: (destination) => filters[filters.length - 1].connect(destination)
  };
}

// 6. Analyse et visualisation audio
function createAnalyser(audioContext, options = {}) {
  if (!audioContext) return null;
  
  const defaults = {
    fftSize: 2048,
    smoothingTimeConstant: 0.8,
    minDecibels: -100,
    maxDecibels: -30
  };
  
  const config = { ...defaults, ...options };
  
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = config.fftSize;
  analyser.smoothingTimeConstant = config.smoothingTimeConstant;
  analyser.minDecibels = config.minDecibels;
  analyser.maxDecibels = config.maxDecibels;
  
  // Créer les tableaux pour stocker les données
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  const timeData = new Uint8Array(analyser.fftSize);
  
  // Fonction pour récupérer les données fréquentielles
  function getFrequencyData() {
    analyser.getByteFrequencyData(frequencyData);
    return frequencyData;
  }
  
  // Fonction pour récupérer les données temporelles
  function getTimeData() {
    analyser.getByteTimeDomainData(timeData);
    return timeData;
  }
  
  return {
    analyser,
    frequencyData,
    timeData,
    getFrequencyData,
    getTimeData,
    bins: analyser.frequencyBinCount,
    connect: (destination) => analyser.connect(destination)
  };
}

// 7. Visualisation sur Canvas
function visualizeAudio(analyser, canvas, options = {}) {
  if (!analyser || !canvas) return null;
  
  const defaults = {
    type: 'frequency',  // 'frequency' ou 'waveform'
    barWidth: 2,
    barGap: 1,
    barColor: 'rgb(0, 255, 255)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    gradientColors: ['rgb(0, 0, 255)', 'rgb(0, 255, 255)', 'rgb(0, 255, 0)']
  };
  
  const config = { ...defaults, ...options };
  
  const ctx = canvas.getContext('2d');
  let animationId = null;
  
  function draw() {
    // Dimensions du canvas
    const width = canvas.width;
    const height = canvas.height;
    
    // Effacer le canvas
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);
    
    // Choisir le type de données et de visualisation
    if (config.type === 'frequency') {
      // Récupérer les données de fréquence
      const data = analyser.getFrequencyData();
      const barCount = Math.min(data.length, Math.floor(width / (config.barWidth + config.barGap)));
      
      // Créer un gradient si spécifié
      if (config.gradientColors.length > 1) {
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        config.gradientColors.forEach((color, index) => {
          gradient.addColorStop(index / (config.gradientColors.length - 1), color);
        });
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = config.barColor;
      }
      
      // Dessiner les barres de fréquence
      for (let i = 0; i < barCount; i++) {
        const barHeight = (data[i] / 255) * height;
        const x = i * (config.barWidth + config.barGap);
        const y = height - barHeight;
        
        ctx.fillRect(x, y, config.barWidth, barHeight);
      }
    } else if (config.type === 'waveform') {
      // Récupérer les données temporelles
      const data = analyser.getTimeData();
      
      ctx.strokeStyle = config.barColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      const sliceWidth = width / data.length;
      let x = 0;
      
      for (let i = 0; i < data.length; i++) {
        const v = data[i] / 128.0;
        const y = v * height / 2;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        x += sliceWidth;
      }
      
      ctx.stroke();
    }
    
    // Continuer l'animation
    animationId = requestAnimationFrame(draw);
  }
  
  // Démarrer l'animation
  draw();
  
  return {
    stop: () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  };
}

// Exemple d'utilisation complète
document.addEventListener('DOMContentLoaded', () => {
  let audioContext = null;
  let currentSound = null;
  let analyser = null;
  let visualization = null;
  
  // Initialiser le contexte audio
  document.getElementById('init-audio').addEventListener('click', () => {
    audioContext = createAudioContext();
    if (audioContext) {
      handleAudioContext(audioContext);
      
      // Créer l'analyseur pour la visualisation
      analyser = createAnalyser(audioContext);
      
      // Connecter l'analyseur à la destination
      analyser.connect(audioContext.destination);
      
      // Démarrer la visualisation
      const canvas = document.getElementById('audio-canvas');
      if (canvas && analyser) {
        visualization = visualizeAudio(analyser, canvas);
      }
    }
  });
  
  // Jouer un oscillateur
  document.getElementById('play-oscillator').addEventListener('click', () => {
    if (!audioContext) return;
    
    const sound = createSimpleOscillator(audioContext, {
      type: 'sine',
      frequency: 440,
      volume: 0.3,
      duration: 2
    });
    
    if (sound && analyser) {
      sound.gainNode.connect(analyser.analyser);
      sound.play();
    }
  });
  
  // Charger et jouer un fichier audio
  document.getElementById('load-audio').addEventListener('click', async () => {
    if (!audioContext) return;
    
    const url = 'path/to/your/audio/file.mp3'; // Remplacer par votre fichier
    const audioBuffer = await loadAudioFile(audioContext, url);
    
    if (audioBuffer && analyser) {
      currentSound = playAudioBuffer(audioContext, audioBuffer);
      currentSound.gainNode.connect(analyser.analyser);
    }
  });
});`,Gamepad:`// Exemples d'utilisation de l'API Gamepad

// 1. Vérifier la prise en charge de l'API
function isGamepadSupported() {
  if ('getGamepads' in navigator) {
    console.log('API Gamepad supportée !');
    return true;
  } else {
    console.log('API Gamepad non supportée par ce navigateur');
    return false;
  }
}

// 2. Détecter la connexion/déconnexion de manettes
function setupGamepadEvents() {
  if (!isGamepadSupported()) return;
  
  window.addEventListener('gamepadconnected', (event) => {
    const gamepad = event.gamepad;
    console.log(\`Manette connectée: \${gamepad.id} (index: \${gamepad.index})\`);
    console.log(\`Nombre de boutons: \${gamepad.buttons.length}\`);
    console.log(\`Nombre d'axes: \${gamepad.axes.length}\`);
    
    // Afficher les informations dans l'interface
    updateGamepadInfo(gamepad);
    
    // Démarrer la boucle de lecture si c'est la première manette
    if (!gamepadLoop.isRunning) {
      startGamepadLoop();
    }
  });
  
  window.addEventListener('gamepaddisconnected', (event) => {
    const gamepad = event.gamepad;
    console.log(\`Manette déconnectée: \${gamepad.id} (index: \${gamepad.index})\`);
    
    // Arrêter la boucle si plus de manettes
    const gamepads = navigator.getGamepads();
    const connectedGamepads = Array.from(gamepads).filter(gp => gp !== null);
    
    if (connectedGamepads.length === 0) {
      stopGamepadLoop();
    }
  });
}

// 3. Boucle de lecture des manettes
const gamepadLoop = {
  isRunning: false,
  animationId: null,
  
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('Démarrage de la boucle de lecture des manettes');
    
    const loop = () => {
      if (!this.isRunning) return;
      
      // Lire l'état de toutes les manettes connectées
      const gamepads = navigator.getGamepads();
      
      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
          processGamepadInput(gamepad);
        }
      }
      
      this.animationId = requestAnimationFrame(loop);
    };
    
    loop();
  },
  
  stop() {
    if (!this.isRunning) return;
    
    this.isRunning = false;
    console.log('Arrêt de la boucle de lecture des manettes');
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
};

function startGamepadLoop() {
  gamepadLoop.start();
}

function stopGamepadLoop() {
  gamepadLoop.stop();
}

// 4. Traitement des entrées de la manette
function processGamepadInput(gamepad) {
  // État précédent pour détecter les changements
  if (!gamepad.previousState) {
    gamepad.previousState = {
      buttons: gamepad.buttons.map(b => ({ pressed: b.pressed, value: b.value })),
      axes: [...gamepad.axes]
    };
    return;
  }
  
  // Traitement des boutons
  gamepad.buttons.forEach((button, index) => {
    const wasPressed = gamepad.previousState.buttons[index].pressed;
    const isPressed = button.pressed;
    
    // Détection des pressions/relâchements
    if (isPressed && !wasPressed) {
      onButtonPressed(gamepad.index, index, button.value);
    } else if (!isPressed && wasPressed) {
      onButtonReleased(gamepad.index, index);
    } else if (isPressed) {
      onButtonHeld(gamepad.index, index, button.value);
    }
    
    // Mettre à jour l'état précédent
    gamepad.previousState.buttons[index] = { pressed: isPressed, value: button.value };
  });
  
  // Traitement des axes (joysticks)
  gamepad.axes.forEach((axisValue, index) => {
    const previousValue = gamepad.previousState.axes[index];
    
    // Seuil de zone morte pour éviter les micro-mouvements
    const deadZone = 0.1;
    const currentValue = Math.abs(axisValue) > deadZone ? axisValue : 0;
    const prevValue = Math.abs(previousValue) > deadZone ? previousValue : 0;
    
    if (currentValue !== prevValue) {
      onAxisChanged(gamepad.index, index, currentValue, prevValue);
    }
    
    gamepad.previousState.axes[index] = axisValue;
  });
}

// 5. Gestionnaires d'événements pour les boutons
function onButtonPressed(gamepadIndex, buttonIndex, value) {
  console.log(\`Manette \${gamepadIndex} - Bouton \${buttonIndex} pressé (valeur: \${value.toFixed(2)})\`);
  
  // Mappage des boutons standards (Xbox/PlayStation)
  const buttonNames = [
    'A/X', 'B/Cercle', 'X/Carré', 'Y/Triangle',
    'LB/L1', 'RB/R1', 'LT/L2', 'RT/R2',
    'Select/Share', 'Start/Options', 'Stick gauche', 'Stick droit',
    'Haut', 'Bas', 'Gauche', 'Droite'
  ];
  
  const buttonName = buttonNames[buttonIndex] || \`Bouton \${buttonIndex}\`;
  
  // Actions spécifiques selon le bouton
  switch (buttonIndex) {
    case 0: // A/X
      console.log('Action: Saut/Validation');
      break;
    case 1: // B/Cercle
      console.log('Action: Annuler/Retour');
      break;
    case 2: // X/Carré
      console.log('Action: Attaque/Action');
      break;
    case 3: // Y/Triangle
      console.log('Action: Interaction');
      break;
    case 12: // Haut
      console.log('Direction: Haut');
      break;
    case 13: // Bas
      console.log('Direction: Bas');
      break;
    case 14: // Gauche
      console.log('Direction: Gauche');
      break;
    case 15: // Droite
      console.log('Direction: Droite');
      break;
  }
  
  // Mettre à jour l'interface
  updateButtonDisplay(gamepadIndex, buttonIndex, true, value);
}

function onButtonReleased(gamepadIndex, buttonIndex) {
  console.log(\`Manette \${gamepadIndex} - Bouton \${buttonIndex} relâché\`);
  updateButtonDisplay(gamepadIndex, buttonIndex, false, 0);
}

function onButtonHeld(gamepadIndex, buttonIndex, value) {
  // Traitement pour les boutons maintenus (ex: gâchettes analogiques)
  if (buttonIndex === 6 || buttonIndex === 7) { // LT/RT
    console.log(\`Gâchette \${buttonIndex === 6 ? 'gauche' : 'droite'}: \${(value * 100).toFixed(0)}%\`);
  }
}

// 6. Gestionnaire pour les axes (joysticks)
function onAxisChanged(gamepadIndex, axisIndex, currentValue, previousValue) {
  console.log(\`Manette \${gamepadIndex} - Axe \${axisIndex}: \${currentValue.toFixed(2)} (était: \${previousValue.toFixed(2)})\`);
  
  // Mappage des axes standards
  const axisNames = ['Stick gauche X', 'Stick gauche Y', 'Stick droit X', 'Stick droit Y'];
  const axisName = axisNames[axisIndex] || \`Axe \${axisIndex}\`;
  
  // Traitement selon l'axe
  if (axisIndex === 0 || axisIndex === 1) {
    // Stick gauche - mouvement du personnage
    const x = axisIndex === 0 ? currentValue : previousValue;
    const y = axisIndex === 1 ? currentValue : previousValue;
    
    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
      console.log(\`Mouvement: X=\${x.toFixed(2)}, Y=\${y.toFixed(2)}\`);
      // movePlayer(x, y);
    }
  } else if (axisIndex === 2 || axisIndex === 3) {
    // Stick droit - caméra/visée
    const x = axisIndex === 2 ? currentValue : previousValue;
    const y = axisIndex === 3 ? currentValue : previousValue;
    
    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
      console.log(\`Caméra: X=\${x.toFixed(2)}, Y=\${y.toFixed(2)}\`);
      // rotateCamera(x, y);
    }
  }
  
  // Mettre à jour l'interface
  updateAxisDisplay(gamepadIndex, axisIndex, currentValue);
}

// 7. Fonctions utilitaires pour l'interface
function updateGamepadInfo(gamepad) {
  const infoElement = document.getElementById('gamepad-info');
  if (infoElement) {
    infoElement.innerHTML = \`
      <h3>Manette connectée</h3>
      <p><strong>ID:</strong> \${gamepad.id}</p>
      <p><strong>Index:</strong> \${gamepad.index}</p>
      <p><strong>Boutons:</strong> \${gamepad.buttons.length}</p>
      <p><strong>Axes:</strong> \${gamepad.axes.length}</p>
      <p><strong>Timestamp:</strong> \${gamepad.timestamp}</p>
    \`;
  }
}

function updateButtonDisplay(gamepadIndex, buttonIndex, pressed, value) {
  const buttonElement = document.getElementById(\`button-\${gamepadIndex}-\${buttonIndex}\`);
  if (buttonElement) {
    buttonElement.style.backgroundColor = pressed ? '#00ff00' : '#333';
    buttonElement.style.opacity = pressed ? value : 0.3;
    buttonElement.textContent = \`B\${buttonIndex} (\${(value * 100).toFixed(0)}%)\`;
  }
}

function updateAxisDisplay(gamepadIndex, axisIndex, value) {
  const axisElement = document.getElementById(\`axis-\${gamepadIndex}-\${axisIndex}\`);
  if (axisElement) {
    const percentage = (value * 100).toFixed(0);
    axisElement.textContent = \`Axe \${axisIndex}: \${percentage}%\`;
    axisElement.style.color = Math.abs(value) > 0.5 ? '#ff0000' : '#ffffff';
  }
}

// 8. Vibration (si supportée)
function vibrateGamepad(gamepadIndex, duration = 200, strongMagnitude = 1.0, weakMagnitude = 0.5) {
  const gamepads = navigator.getGamepads();
  const gamepad = gamepads[gamepadIndex];
  
  if (gamepad && gamepad.vibrationActuator) {
    gamepad.vibrationActuator.playEffect('dual-rumble', {
      duration: duration,
      strongMagnitude: strongMagnitude,
      weakMagnitude: weakMagnitude
    }).then(() => {
      console.log(\`Vibration de la manette \${gamepadIndex} terminée\`);
    }).catch(err => {
      console.error('Erreur de vibration:', err);
    });
  } else {
    console.log(\`Vibration non supportée pour la manette \${gamepadIndex}\`);
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  setupGamepadEvents();
  
  // Bouton de test de vibration
  document.getElementById('vibrate-btn')?.addEventListener('click', () => {
    vibrateGamepad(0, 500, 0.8, 0.4);
  });
  
  // Afficher les manettes déjà connectées
  const gamepads = navigator.getGamepads();
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      updateGamepadInfo(gamepads[i]);
      if (!gamepadLoop.isRunning) {
        startGamepadLoop();
      }
    }
  }
});`};function of(){const[u,M]=v.useState(0),[g,o]=v.useState(0),A=v.useRef(null);return v.useEffect(()=>{const j=new ResizeObserver(w=>{for(const q of w)M(q.contentRect.width),o(q.contentRect.height)});return A.current&&j.observe(A.current),()=>{A.current&&j.unobserve(A.current),j.disconnect()}},[]),a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h1",{children:"ResizeObserver Demo"}),a.jsx("div",{ref:A,style:{width:"50%",height:"200px",backgroundColor:"#f0f0f0",border:"1px solid #ccc",resize:"both",overflow:"auto",marginBottom:"20px"},children:a.jsx("p",{style:{color:"black"},children:"Resize this box to see the width and height change."})}),a.jsxs("p",{children:["Width: ",u,"px"]}),a.jsxs("p",{children:["Height: ",g,"px"]}),a.jsx(jt,{apiName:"ResizeObserver"})]})}const Ph=()=>{const[u,M]=v.useState(!1),g=v.useRef(null);return v.useEffect(()=>{const o=new IntersectionObserver(A=>{A.forEach(j=>{j.isIntersecting&&(M(!0),o.unobserve(j.target))})},{threshold:.5});return g.current&&o.observe(g.current),()=>{g.current&&o.unobserve(g.current)}},[]),a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h1",{children:"Intersection Observer Demo"}),a.jsx("p",{children:"Scroll down to see the element become visible."}),a.jsx("div",{ref:g,style:{width:"200px",height:"200px",backgroundColor:u?"green":"red",transition:"background-color 0.5s ease",marginTop:"500px",marginBottom:"500px",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"20px"},children:u?"Visible!":"Not Visible"}),a.jsx(jt,{apiName:"IntersectionObserver"})]})},Ih=()=>a.jsxs("div",{children:[a.jsx("h1",{children:"Clipboard Demo"}),a.jsx("p",{children:"This is a demonstration of the Clipboard API."}),a.jsx(jt,{apiName:"Clipboard"})]}),Qh=()=>{const u=async()=>{if(navigator.share)try{await navigator.share({title:"Web Share API Demo",text:"Check out this cool website!",url:"https://example.com"}),console.log("Successfully shared!")}catch(M){console.error("Error sharing:",M)}else console.log("Web Share API not supported.")};return a.jsxs("div",{className:"container",children:[a.jsx("h1",{children:"Web Share API Demo"}),a.jsx("p",{children:"Click the button below to share this page."}),a.jsx("button",{onClick:u,disabled:!navigator.share,children:"Share"}),!navigator.share&&a.jsx("p",{children:"Web Share API is not supported in this browser."}),a.jsx(jt,{apiName:"WebShare"})]})};function Zh(){const[u,M]=v.useState(0),g=v.useRef(null);v.useEffect(()=>{const w=new MutationObserver(x=>{M(f=>f+x.length)}),q={attributes:!0,childList:!0,subtree:!0,characterData:!0};return g.current&&w.observe(g.current,q),()=>{w.disconnect()}},[]);const o=()=>{const w=document.createElement("p");w.textContent="New Paragraph",g.current.appendChild(w)},A=()=>{g.current&&g.current.setAttribute("data-test",Math.random())},j=()=>{if(g.current)if(g.current.firstChild)g.current.firstChild.textContent=`Updated Text ${Math.random()}`;else{const w=document.createTextNode(`Initial Text ${Math.random()}`);g.current.appendChild(w)}};return a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h1",{children:"MutationObserver Demo"}),a.jsxs("p",{children:["Mutations Observed: ",u]}),a.jsx("div",{ref:g,style:{border:"1px solid black",padding:"10px",marginTop:"10px"},children:a.jsx("p",{children:"Initial Text"})}),a.jsx("button",{onClick:o,style:{margin:"5px"},className:"btn",children:"Add Element"}),a.jsx("button",{onClick:A,style:{margin:"5px"},className:"btn",children:"Change Attribute"}),a.jsx("button",{onClick:j,style:{margin:"5px"},className:"btn",children:"Change Text"}),a.jsx(jt,{apiName:"MutationObserver"})]})}function $h(){const[u,M]=v.useState("IdleCallback not yet triggered."),[g,o]=v.useState(!1);return v.useEffect(()=>{let A;const j=w=>{for(;w.timeRemaining()>0&&!g;)console.log("Performing idle work..."),M("IdleCallback triggered and performing work."),o(!0);g?M("IdleCallback completed."):A=requestIdleCallback(j)};return A=requestIdleCallback(j),()=>{cancelIdleCallback(A)}},[g]),a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h2",{children:"IdleCallback Demo"}),a.jsx("p",{children:u}),a.jsx(jt,{apiName:"IdleCallback"})]})}function Kh(){const[u,M]=v.useState(null),[g,o]=v.useState(null),[A,j]=v.useState(null),[w,q]=v.useState(null);return v.useEffect(()=>{(async()=>{try{if("getBattery"in navigator){const f=await navigator.getBattery();M(f.level),o(f.charging),j(f.chargingTime),q(f.dischargingTime),f.addEventListener("levelchange",()=>{M(f.level)}),f.addEventListener("chargingchange",()=>{o(f.charging)}),f.addEventListener("chargingtimechange",()=>{j(f.chargingTime)}),f.addEventListener("dischargingtimechange",()=>{q(f.dischargingTime)})}else console.log("Battery Status API is not supported in this browser.")}catch(f){console.error("Error getting battery info:",f)}})()},[]),a.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"5px",maxWidth:"600px",margin:"0 auto"},children:[a.jsx("h2",{children:"Battery Status Demo"}),u!==null?a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Battery Level: ",(u*100).toFixed(0),"%"]}),a.jsxs("p",{children:["Charging: ",g?"Yes":"No"]}),g?a.jsxs("p",{children:["Charging Time: ",A?(A/60).toFixed(2)+" minutes":"Calculating..."]}):a.jsxs("p",{children:["Discharging Time: ",w?(w/60).toFixed(2)+" minutes":"Calculating..."]})]}):a.jsx("p",{children:"Getting battery information..."}),a.jsx(jt,{apiName:"Battery"})]})}const Jh=()=>{const[u,M]=v.useState([]),[g,o]=v.useState(!0),[A,j]=v.useState(null),[w,q]=v.useState(100),[x,f]=v.useState(1),R=v.useCallback(async()=>{o(!0);try{const E=await fetch("https://jsonplaceholder.typicode.com/posts");if(!E.ok)throw new Error(`HTTP error! status: ${E.status}`);const Y=await E.json();M(Y)}catch(E){j(E)}finally{o(!1)}},[]);v.useEffect(()=>{R()},[R]);const D=E=>{q(Number.parseInt(E.target.value,10)),f(1)},_=Math.ceil(u.length/w),L=(x-1)*w,G=L+w,Z=u.slice(L,G),O=()=>{f(E=>Math.max(E-1,1))},I=()=>{f(E=>Math.min(E+1,_))};return g?a.jsx("div",{children:"Loading..."}):A?a.jsxs("div",{children:["Error: ",A.message]}):a.jsxs("div",{className:"container mx-auto p-4",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Performance Demo"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"itemsPerPage",className:"mr-2",children:"Items per page:"}),a.jsxs("select",{id:"itemsPerPage",value:w,onChange:D,className:"border rounded px-2 py-1",children:[a.jsx("option",{value:"50",children:"50"}),a.jsx("option",{value:"100",children:"100"}),a.jsx("option",{value:"200",children:"200"})]})]}),a.jsxs("table",{className:"table-auto w-full",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-2",children:"ID"}),a.jsx("th",{className:"px-4 py-2",children:"Title"})]})}),a.jsx("tbody",{children:Z.map(E=>a.jsxs("tr",{children:[a.jsx("td",{className:"border px-4 py-2",children:E.id}),a.jsx("td",{className:"border px-4 py-2",children:E.title})]},E.id))})]}),a.jsxs("div",{className:"flex justify-between mt-4",children:[a.jsx("button",{onClick:O,disabled:x===1,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50",children:"Previous"}),a.jsxs("span",{children:["Page ",x," of ",_]}),a.jsx("button",{onClick:I,disabled:x===_,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50",children:"Next"})]}),a.jsx(jt,{apiName:"Performance"})]})};function Fh(){const[u,M]=v.useState(""),[g,o]=v.useState([]),[A,j]=v.useState(null);v.useEffect(()=>{const q=new BroadcastChannel("my-channel");return j(q),q.onmessage=x=>{o(f=>[...f,x.data])},()=>{q.close()}},[]);const w=()=>{A&&u&&(A.postMessage(u),M(""))};return a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h1",{children:"BroadcastChannel Demo"}),a.jsx("p",{children:"Open this page in multiple tabs to see the BroadcastChannel in action."}),a.jsxs("div",{children:[a.jsx("input",{type:"text",value:u,onChange:q=>M(q.target.value),placeholder:"Enter message"}),a.jsx("button",{onClick:w,children:"Send Message"})]}),a.jsxs("div",{children:[a.jsx("h2",{children:"Received Messages:"}),a.jsx("ul",{children:g.map((q,x)=>a.jsx("li",{children:q},x))})]}),a.jsx(jt,{apiName:"BroadcastChannel"})]})}function Wh(){const[u,M]=v.useState({username:"",password:""}),[g,o]=v.useState("credentials"in navigator),[A,j]=v.useState(""),[w,q]=v.useState(null),x=async _=>{if(_.preventDefault(),!u.username||!u.password){j("❌ Veuillez remplir tous les champs");return}try{j("🔄 Connexion en cours..."),await new Promise(G=>setTimeout(G,1e3));const L={displayName:`Utilisateur ${u.username}`,avatar:`https://ui-avatars.com/api/?name=${u.username}&background=667eea&color=fff`};if(j("✅ Connexion réussie !"),g)try{const G=new PasswordCredential({id:u.username,password:u.password,name:L.displayName,iconURL:L.avatar});await navigator.credentials.store(G),j("✅ Connexion réussie ! Identifiants sauvegardés."),q({username:u.username,displayName:L.displayName})}catch(G){j("✅ Connexion réussie ! (Sauvegarde des identifiants échouée)"),console.error("Erreur sauvegarde:",G)}}catch(L){j("❌ Erreur de connexion"),console.error("Erreur:",L)}setTimeout(()=>j(""),5e3)},f=async()=>{if(!g){j("❌ API non supportée");return}try{j("🔄 Recherche d'identifiants sauvegardés...");const _=await navigator.credentials.get({password:!0,mediation:"optional"});_&&_.type==="password"?(M({username:_.id,password:_.password||"••••••••"}),j("🔑 Identifiants récupérés ! Connexion automatique..."),setTimeout(()=>{j("✅ Connexion automatique réussie !"),q({username:_.id,displayName:_.name||_.id})},1e3)):j("ℹ️ Aucun identifiant sauvegardé trouvé")}catch(_){_.name==="NotAllowedError"?j("❌ Accès aux identifiants refusé par l'utilisateur"):j("❌ Erreur lors de la récupération des identifiants"),console.error("Erreur auto-login:",_)}setTimeout(()=>j(""),5e3)},R=()=>{M({username:"",password:""}),q(null),j("🗑️ Formulaire effacé"),setTimeout(()=>j(""),3e3)},D=()=>{q(null),M({username:"",password:""}),j("👋 Déconnexion simulée"),setTimeout(()=>j(""),3e3)};return a.jsxs("div",{className:"demo-container",children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🔒 Credential Management API"}),a.jsx("p",{className:"demo-description",children:"Intègre avec le gestionnaire de mots de passe du navigateur pour une expérience de connexion fluide et sécurisée."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Support de l'API"}),a.jsx("div",{className:`status-indicator ${g?"online":"offline"}`,children:g?"✅ Credential Management API supportée":"❌ API non supportée"}),!g&&a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est principalement supportée sur Chrome/Edge. La démonstration reste fonctionnelle."})]}),w&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Session Actuelle"}),a.jsxs("div",{className:"card",style:{background:"#e8f5e8"},children:[a.jsx("h4",{children:"👤 Utilisateur Connecté"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Nom d'utilisateur:"})," ",w.username]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Nom d'affichage:"})," ",w.displayName]}),a.jsx("button",{className:"btn danger",onClick:D,style:{marginTop:"1rem"},children:"🚪 Se Déconnecter"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Connexion Automatique"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn success",onClick:f,disabled:!g,children:"🔑 Connexion Automatique"})}),a.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginTop:"0.5rem"},children:"Tente de récupérer les identifiants sauvegardés pour une connexion automatique."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Connexion Manuelle"}),a.jsxs("form",{onSubmit:x,children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Nom d'utilisateur:"}),a.jsx("input",{type:"text",value:u.username,onChange:_=>M(L=>({...L,username:_.target.value})),placeholder:"Entrez votre nom d'utilisateur",autoComplete:"username"})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Mot de passe:"}),a.jsx("input",{type:"password",value:u.password,onChange:_=>M(L=>({...L,password:_.target.value})),placeholder:"Entrez votre mot de passe",autoComplete:"current-password"})]}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{type:"submit",className:"btn success",children:"🔐 Se Connecter"}),a.jsx("button",{type:"button",className:"btn",onClick:R,children:"🗑️ Effacer"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Statut de l'Authentification"}),a.jsx("div",{className:"demo-output",children:A||"Aucune action récente"})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Comment ça Fonctionne"}),a.jsx("div",{className:"demo-output",children:`🔐 Processus de sauvegarde:
1. L'utilisateur se connecte avec succès
2. Un objet PasswordCredential est créé
3. navigator.credentials.store() sauvegarde les identifiants
4. Le navigateur propose de sauvegarder (selon les paramètres)

🔑 Processus de récupération:
1. navigator.credentials.get() demande les identifiants
2. Le navigateur peut afficher un sélecteur d'identifiants
3. Les identifiants sont récupérés automatiquement
4. Connexion automatique possible

⚙️ Options de médiation:
- 'silent': Récupération silencieuse (pas d'UI)
- 'optional': UI optionnelle selon le contexte
- 'required': Force l'affichage de l'UI de sélection`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Avantages pour l'UX"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🚀 Connexion Rapide"}),a.jsx("p",{children:"Connexion en un clic avec les identifiants sauvegardés"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔒 Sécurité Renforcée"}),a.jsx("p",{children:"Intégration avec les gestionnaires de mots de passe"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Multi-Plateforme"}),a.jsx("p",{children:"Synchronisation des identifiants entre appareils"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"♿ Accessibilité"}),a.jsx("p",{children:"Facilite l'accès pour les utilisateurs avec handicaps"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Considérations de Sécurité"}),a.jsx("div",{className:"demo-output",children:`🛡️ Bonnes pratiques:
- Toujours valider les identifiants côté serveur
- Utiliser HTTPS obligatoirement
- Implémenter une authentification à deux facteurs
- Gérer les cas d'erreur gracieusement
- Respecter les préférences utilisateur

⚠️ Limitations:
- Support navigateur limité (principalement Chromium)
- Nécessite une interaction utilisateur
- Peut être désactivé par les politiques d'entreprise`})]})]})}function ep(){const[u,M]=v.useState(null),[g,o]=v.useState(null),[A,j]=v.useState(!1),[w,q]=v.useState(null),[x,f]=v.useState([]),[R,D]=v.useState(""),[_]=v.useState("geolocation"in navigator),[L,G]=v.useState(!1),Z=async(b,h)=>{var P,ee,W,te,xe,me,T,$,ne,fe,m,X,F,K,se;G(!0);try{const ue=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${b}&lon=${h}&zoom=18&addressdetails=1`,{headers:{"User-Agent":"Modern-JS-APIs-Demo/1.0"}});if(ue.ok){const ie=await ue.json(),Ke={fullAddress:ie.display_name,street:((P=ie.address)==null?void 0:P.road)||((ee=ie.address)==null?void 0:ee.pedestrian)||((W=ie.address)==null?void 0:W.path),houseNumber:(te=ie.address)==null?void 0:te.house_number,city:((xe=ie.address)==null?void 0:xe.city)||((me=ie.address)==null?void 0:me.town)||((T=ie.address)==null?void 0:T.village)||(($=ie.address)==null?void 0:$.municipality),postcode:(ne=ie.address)==null?void 0:ne.postcode,country:(fe=ie.address)==null?void 0:fe.country,countryCode:(m=ie.address)==null?void 0:m.country_code,state:((X=ie.address)==null?void 0:X.state)||((F=ie.address)==null?void 0:F.region),suburb:((K=ie.address)==null?void 0:K.suburb)||((se=ie.address)==null?void 0:se.neighbourhood),formatted:O(ie.address)};o(Ke)}else o({error:"Impossible de récupérer l'adresse"})}catch(ue){console.error("Erreur géocodage:",ue),o({error:"Erreur lors du géocodage inverse"})}finally{G(!1)}},O=b=>{if(!b)return"Adresse non disponible";const h=[];return b.house_number&&b.road?h.push(`${b.house_number} ${b.road}`):b.road?h.push(b.road):b.pedestrian&&h.push(b.pedestrian),(b.suburb||b.neighbourhood)&&h.push(b.suburb||b.neighbourhood),b.postcode&&(b.city||b.town||b.village)?h.push(`${b.postcode} ${b.city||b.town||b.village}`):(b.city||b.town||b.village)&&h.push(b.city||b.town||b.village),b.country&&h.push(b.country),h.join(", ")||"Adresse non disponible"},I=()=>{if(!_){D("Géolocalisation non supportée");return}D(""),o(null);const b={enableHighAccuracy:!0,timeout:15e3,maximumAge:3e5};navigator.geolocation.getCurrentPosition(h=>{const P={latitude:h.coords.latitude,longitude:h.coords.longitude,accuracy:h.coords.accuracy,altitude:h.coords.altitude,altitudeAccuracy:h.coords.altitudeAccuracy,heading:h.coords.heading,speed:h.coords.speed,timestamp:new Date(h.timestamp).toLocaleTimeString()};M(P),D(""),Z(P.latitude,P.longitude)},h=>{let P="";switch(h.code){case h.PERMISSION_DENIED:P="Permission de géolocalisation refusée";break;case h.POSITION_UNAVAILABLE:P="Position non disponible";break;case h.TIMEOUT:P="Timeout de géolocalisation (15s)";break;default:P="Erreur de géolocalisation inconnue"}D(P)},b)},E=()=>{if(!_){D("Géolocalisation non supportée");return}const b={enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4},h=navigator.geolocation.watchPosition(P=>{const ee={latitude:P.coords.latitude,longitude:P.coords.longitude,accuracy:P.coords.accuracy,altitude:P.coords.altitude,altitudeAccuracy:P.coords.altitudeAccuracy,heading:P.coords.heading,speed:P.coords.speed,timestamp:new Date(P.timestamp).toLocaleTimeString()};M(ee),f(W=>{const te=W[W.length-1];return!te||J(te,ee)>10?[...W.slice(-9),ee]:W}),(!g||J(u,ee)>50)&&Z(ee.latitude,ee.longitude),D("")},P=>{D(`Erreur de suivi: ${P.message}`)},b);q(h),j(!0)},Y=()=>{w&&(navigator.geolocation.clearWatch(w),q(null),j(!1))},J=(b,h)=>{if(!b||!h)return 0;const P=6371e3,ee=(h.latitude-b.latitude)*Math.PI/180,W=(h.longitude-b.longitude)*Math.PI/180,te=Math.sin(ee/2)*Math.sin(ee/2)+Math.cos(b.latitude*Math.PI/180)*Math.cos(h.latitude*Math.PI/180)*Math.sin(W/2)*Math.sin(W/2),xe=2*Math.atan2(Math.sqrt(te),Math.sqrt(1-te));return P*xe},B=()=>{f([])},k=()=>{if(u){const b=`https://www.google.com/maps?q=${u.latitude},${u.longitude}`;window.open(b,"_blank")}},Q=()=>{if(u){const b=`${u.latitude}, ${u.longitude}`;navigator.clipboard.writeText(b)}};return v.useEffect(()=>()=>{w&&navigator.geolocation.clearWatch(w)},[w]),_?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🌍 Geolocation API Avancée"}),a.jsx("p",{className:"demo-description",children:"Géolocalisation précise avec adresse complète, ville, rue et suivi de position en temps réel."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles de Géolocalisation"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:I,children:"📍 Position Actuelle"}),A?a.jsx("button",{className:"btn danger",onClick:Y,children:"⏹️ Arrêter le Suivi"}):a.jsx("button",{className:"btn",onClick:E,children:"🎯 Démarrer le Suivi"}),u&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn",onClick:k,children:"🗺️ Ouvrir dans Maps"}),a.jsx("button",{className:"btn",onClick:Q,children:"📋 Copier Coordonnées"})]})]})]}),R&&a.jsx("div",{className:"demo-section",children:a.jsxs("div",{className:"status-indicator offline",children:["❌ ",R]})}),u&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Position et Adresse"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📍 Coordonnées GPS"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Latitude:"})," ",u.latitude.toFixed(6),"°"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Longitude:"})," ",u.longitude.toFixed(6),"°"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Précision:"})," ±",Math.round(u.accuracy),"m"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Dernière MAJ:"})," ",u.timestamp]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🏠 Adresse Complète"}),L?a.jsx("div",{className:"status-indicator loading",children:"🔄 Recherche d'adresse..."}):g?g.error?a.jsx("p",{style:{color:"#f44336"},children:g.error}):a.jsxs("div",{children:[g.street&&g.houseNumber&&a.jsxs("p",{children:[a.jsx("strong",{children:"Adresse:"})," ",g.houseNumber," ",g.street]}),g.street&&!g.houseNumber&&a.jsxs("p",{children:[a.jsx("strong",{children:"Rue:"})," ",g.street]}),g.suburb&&a.jsxs("p",{children:[a.jsx("strong",{children:"Quartier:"})," ",g.suburb]}),g.city&&a.jsxs("p",{children:[a.jsx("strong",{children:"Ville:"})," ",g.city]}),g.postcode&&a.jsxs("p",{children:[a.jsx("strong",{children:"Code postal:"})," ",g.postcode]}),g.state&&a.jsxs("p",{children:[a.jsx("strong",{children:"Région:"})," ",g.state]}),g.country&&a.jsxs("p",{children:[a.jsx("strong",{children:"Pays:"})," ",g.country]})]}):a.jsx("p",{style:{color:"#666",fontStyle:"italic"},children:`Cliquez sur "Position Actuelle" pour obtenir l'adresse`})]})]})]}),u&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Informations Détaillées"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎯 Précision"}),a.jsxs("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#667eea"},children:["±",Math.round(u.accuracy),"m"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666"},children:u.accuracy<10?"Excellente":u.accuracy<50?"Bonne":u.accuracy<100?"Moyenne":"Approximative"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🏔️ Altitude"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:u.altitude!==null?`${Math.round(u.altitude)}m`:"N/A"}),u.altitudeAccuracy&&a.jsxs("p",{style:{fontSize:"0.8rem",color:"#666"},children:["±",Math.round(u.altitudeAccuracy),"m"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🧭 Mouvement"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Direction:"})," ",u.heading!==null?`${Math.round(u.heading)}°`:"N/A"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Vitesse:"})," ",u.speed!==null?`${Math.round(u.speed*3.6)} km/h`:"N/A"]})]})]})]}),g&&g.formatted&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Adresse Formatée"}),a.jsx("div",{className:"demo-output",children:g.formatted})]}),x.length>0&&a.jsxs("div",{className:"demo-section",children:[a.jsxs("h3",{children:["Historique des Positions (",x.length,")"]}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:B,children:"🗑️ Effacer l'Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:x.map((b,h)=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:"bold",marginBottom:"0.25rem"},children:["📍 Position #",h+1," - ",b.timestamp]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[b.latitude.toFixed(6),", ",b.longitude.toFixed(6)," (±",Math.round(b.accuracy),"m)"]})]},h))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🚚 Livraison"}),a.jsx("p",{children:"Suivi en temps réel avec adresse exacte"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🏪 Store Locator"}),a.jsx("p",{children:"Trouver les magasins les plus proches"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🚗 Navigation"}),a.jsx("p",{children:"GPS avec adresses complètes"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🌤️ Météo Locale"}),a.jsx("p",{children:"Prévisions pour votre ville exacte"})]})]})]}),a.jsx(jt,{apiName:"Geolocation"})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🌍 Geolocation API"}),a.jsx("p",{className:"demo-description",children:"Géolocalisation avancée avec adresse complète."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Geolocation API non supportée"})})]})}const tp=()=>{const[u,M]=v.useState(!1),g=v.useRef(null),o=v.useRef(null);v.useEffect(()=>()=>{o.current&&o.current.stop(),g.current&&g.current.close()},[]);const A=()=>{g.current||(g.current=new(window.AudioContext||window.webkitAudioContext)),o.current||(o.current=g.current.createOscillator(),o.current.type="sine",o.current.frequency.setValueAtTime(440,g.current.currentTime),o.current.connect(g.current.destination)),u?(o.current.stop(),o.current=null,M(!1)):(o.current=g.current.createOscillator(),o.current.type="sine",o.current.frequency.setValueAtTime(440,g.current.currentTime),o.current.connect(g.current.destination),o.current.start(),M(!0))};return a.jsxs("div",{children:[a.jsx("h1",{children:"Web Audio API Demo"}),a.jsxs("button",{onClick:A,children:[u?"Stop":"Play"," A4 (440Hz)"]}),a.jsx(jt,{apiName:"WebAudio"})]})},np=()=>{const[u,M]=v.useState([]);v.useEffect(()=>{const o=j=>{console.log("Gamepad connected:",j.gamepad),g()},A=j=>{console.log("Gamepad disconnected:",j.gamepad),g()};return window.addEventListener("gamepadconnected",o),window.addEventListener("gamepaddisconnected",A),g(),()=>{window.removeEventListener("gamepadconnected",o),window.removeEventListener("gamepaddisconnected",A)}},[]);const g=()=>{const o=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():[];M(Array.from(o).filter(A=>A!==null))};return a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("h1",{children:"Gamepad API Demo"}),a.jsx("p",{children:"Connect a gamepad to your computer and see its data displayed below."}),u.length===0?a.jsx("p",{children:"No gamepads connected."}):u.map(o=>a.jsxs("div",{style:{border:"1px solid #ccc",padding:"10px",marginBottom:"10px"},children:[a.jsxs("h3",{children:["Gamepad ",o.index,": ",o.id]}),a.jsxs("p",{children:["Axes:"," ",o.axes.map((A,j)=>a.jsxs("span",{children:[j,": ",A.toFixed(2)," "]},j))]}),a.jsxs("p",{children:["Buttons:"," ",o.buttons.map((A,j)=>a.jsxs("span",{children:[j,": ",A.pressed?"Pressed":"Not Pressed"," (Value: ",A.value.toFixed(2),")"]},j))]})]},o.index)),a.jsx(jt,{apiName:"Gamepad"})]})};function ap(){const[u,M]=v.useState("default"),[g]=v.useState("Notification"in window),[o,A]=v.useState([]),[j,w]=v.useState({title:"Notification de Test",body:"Ceci est une notification de démonstration !",icon:"🔔",tag:"demo-notification",requireInteraction:!1,silent:!1});v.useEffect(()=>{g&&M(Notification.permission)},[g]);const q=async()=>{if(g)try{const O=await Notification.requestPermission();M(O),O==="granted"?x("✅ Permission accordée pour les notifications"):O==="denied"&&x("❌ Permission refusée pour les notifications")}catch{x("❌ Erreur lors de la demande de permission")}},x=O=>{A(I=>[{id:Date.now(),message:O,timestamp:new Date().toLocaleTimeString()},...I.slice(0,9)])},f=()=>{if(u!=="granted"){x("❌ Permission requise pour afficher les notifications");return}const O=new Notification(j.title,{body:j.body,icon:`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">${j.icon}</text></svg>`,tag:j.tag,requireInteraction:j.requireInteraction,silent:j.silent});O.onclick=()=>{x("👆 Notification cliquée"),window.focus(),O.close()},O.onshow=()=>{x("👁️ Notification affichée")},O.onclose=()=>{x("❌ Notification fermée")},O.onerror=()=>{x("⚠️ Erreur lors de l'affichage")},x(`🔔 Notification envoyée: "${j.title}"`)},R=()=>{if(u!=="granted"){x("❌ Permission requise pour afficher les notifications");return}const O=new Notification("Notification Avancée",{body:"Cette notification a des options avancées",icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">⚡</text></svg>',badge:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">🔥</text></svg>',tag:"advanced-notification",requireInteraction:!0,silent:!1,timestamp:Date.now(),data:{url:window.location.href,action:"demo"}});O.onclick=()=>{x("👆 Notification avancée cliquée"),console.log("Données de la notification:",O.data),window.focus(),O.close()},x("⚡ Notification avancée envoyée")},D=()=>{if(u!=="granted"){x("❌ Permission requise pour afficher les notifications");return}const O=new Notification("Notification Temporisée",{body:"Cette notification se fermera automatiquement dans 5 secondes",icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">⏰</text></svg>',tag:"timed-notification"});setTimeout(()=>{O.close(),x("⏰ Notification fermée automatiquement")},5e3),x("⏰ Notification temporisée (5s) envoyée")},_=()=>{if(u!=="granted"){x("❌ Permission requise pour afficher les notifications");return}let O=0;const I=()=>{O+=10,new Notification(`Progression: ${O}%`,{body:`Téléchargement en cours... ${O}% terminé`,icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">📥</text></svg>',tag:"progress-notification",silent:!0}),O<100?setTimeout(I,1e3):setTimeout(()=>{new Notification("Téléchargement Terminé!",{body:"Le fichier a été téléchargé avec succès",icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90">✅</text></svg>',tag:"progress-notification"}),x("✅ Téléchargement simulé terminé")},1e3)};I(),x("📥 Simulation de progression démarrée")},L=()=>{A([])},G=()=>{switch(u){case"granted":return{text:"✅ Accordée",color:"#4CAF50"};case"denied":return{text:"❌ Refusée",color:"#f44336"};default:return{text:"⏳ Non demandée",color:"#FF9800"}}};if(!g)return a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🔔 Notification API"}),a.jsx("p",{className:"demo-description",children:"Affichage de notifications système natives."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Notification API non supportée"})})]});const Z=G();return a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🔔 Notification API"}),a.jsx("p",{className:"demo-description",children:"Créez des notifications système natives avec options avancées, gestion des permissions et interactions utilisateur."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État des Permissions"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔐 Permission Actuelle"}),a.jsx("p",{style:{fontSize:"1.2rem",fontWeight:"bold",color:Z.color},children:Z.text}),u!=="granted"&&a.jsx("button",{className:"btn success",onClick:q,style:{marginTop:"1rem"},children:"🔔 Demander Permission"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Support Navigateur"}),a.jsx("div",{className:"status-indicator online",children:"✅ Notification API supportée"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Configuration de Notification"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Titre:"}),a.jsx("input",{type:"text",value:j.title,onChange:O=>w(I=>({...I,title:O.target.value}))})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Icône (Emoji):"}),a.jsx("input",{type:"text",value:j.icon,onChange:O=>w(I=>({...I,icon:O.target.value})),maxLength:2})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Message:"}),a.jsx("textarea",{value:j.body,onChange:O=>w(I=>({...I,body:O.target.value})),rows:2})]}),a.jsxs("div",{className:"grid grid-2",children:[a.jsx("div",{className:"input-group",children:a.jsxs("label",{children:[a.jsx("input",{type:"checkbox",checked:j.requireInteraction,onChange:O=>w(I=>({...I,requireInteraction:O.target.checked})),style:{marginRight:"0.5rem"}}),"Nécessite une interaction"]})}),a.jsx("div",{className:"input-group",children:a.jsxs("label",{children:[a.jsx("input",{type:"checkbox",checked:j.silent,onChange:O=>w(I=>({...I,silent:O.target.checked})),style:{marginRight:"0.5rem"}}),"Mode silencieux"]})})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Types de Notifications"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:f,disabled:u!=="granted",children:"🔔 Notification Basique"}),a.jsx("button",{className:"btn",onClick:R,disabled:u!=="granted",children:"⚡ Notification Avancée"}),a.jsx("button",{className:"btn",onClick:D,disabled:u!=="granted",children:"⏰ Notification Temporisée"}),a.jsx("button",{className:"btn",onClick:_,disabled:u!=="granted",children:"📥 Simulation Progression"})]}),u!=="granted"&&a.jsx("p",{style:{marginTop:"1rem",color:"#666",fontStyle:"italic"},children:"💡 Accordez la permission pour tester les notifications"})]}),a.jsxs("div",{className:"demo-section",children:[a.jsxs("h3",{children:["Journal des Notifications (",o.length,")"]}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:L,children:"🗑️ Effacer Journal"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:o.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Aucune notification envoyée. Testez les boutons ci-dessus !"}):o.map(O=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666",marginBottom:"0.25rem"},children:["[",O.timestamp,"]"]}),a.jsx("div",{style:{fontSize:"0.9rem"},children:O.message})]},O.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités Avancées"}),a.jsx("div",{className:"demo-output",children:`🔔 Options disponibles:
- title: Titre de la notification
- body: Contenu du message
- icon: Icône personnalisée (URL ou emoji)
- badge: Badge pour les notifications groupées
- tag: Identifiant pour remplacer/grouper
- requireInteraction: Notification persistante
- silent: Mode silencieux (pas de son)
- timestamp: Horodatage personnalisé
- data: Données personnalisées

🎯 Événements gérés:
- onclick: Clic sur la notification
- onshow: Notification affichée
- onclose: Notification fermée
- onerror: Erreur d'affichage

💡 Bonnes pratiques:
- Demander la permission au bon moment
- Utiliser des tags pour éviter le spam
- Fournir des actions claires
- Respecter les préférences utilisateur`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💬 Messagerie"}),a.jsx("p",{children:"Notifications de nouveaux messages en temps réel"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📧 Email"}),a.jsx("p",{children:"Alertes pour nouveaux emails importants"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📅 Calendrier"}),a.jsx("p",{children:"Rappels de rendez-vous et événements"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🛒 E-commerce"}),a.jsx("p",{children:"Notifications de commandes et promotions"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]})}function ip(){const[u]=v.useState("vibrate"in navigator),[M,g]=v.useState([]),[o,A]=v.useState("200,100,200"),[j,w]=v.useState(!1),q=G=>{g(Z=>[{id:Date.now(),message:G,timestamp:new Date().toLocaleTimeString()},...Z.slice(0,9)])},x=(G,Z)=>{if(!u){q("❌ Vibration non supportée sur cet appareil");return}try{if(navigator.vibrate(G)){q(`📳 ${Z}`),w(!0);const I=Array.isArray(G)?G.reduce((E,Y,J)=>J%2===0?E+Y:E,0):G;setTimeout(()=>w(!1),I)}else q("❌ Vibration refusée ou échouée")}catch{q("❌ Erreur lors de la vibration")}},f=()=>{u&&(navigator.vibrate(0),w(!1),q("⏹️ Vibration arrêtée"))},R=()=>{try{const G=o.split(",").map(Z=>Number.parseInt(Z.trim())).filter(Z=>!isNaN(Z)&&Z>=0);if(G.length===0){q("❌ Pattern invalide");return}return G}catch{return q("❌ Erreur de parsing du pattern"),null}},D=()=>{const G=R();G&&x(G,`Pattern personnalisé: [${G.join(", ")}]`)},_=()=>{g([])},L=[{name:"Court",pattern:100,description:"Vibration courte (100ms)"},{name:"Moyen",pattern:300,description:"Vibration moyenne (300ms)"},{name:"Long",pattern:1e3,description:"Vibration longue (1000ms)"},{name:"Double Tap",pattern:[100,100,100],description:"Double vibration"},{name:"Triple Tap",pattern:[100,50,100,50,100],description:"Triple vibration"},{name:"SOS",pattern:[100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100],description:"Pattern SOS (morse)"},{name:"Heartbeat",pattern:[100,30,100,300],description:"Battement de cœur"},{name:"Notification",pattern:[200,100,200,100,200],description:"Pattern notification"},{name:"Alerte",pattern:[300,200,300,200,300],description:"Pattern d'alerte"},{name:"Succès",pattern:[50,50,50,50,200],description:"Pattern de succès"}];return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📳 Vibration API"}),a.jsx("p",{className:"demo-description",children:"Contrôlez la vibration de l'appareil avec des patterns personnalisés. Idéal pour les notifications, jeux et retour haptique."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État de la Vibration"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Support Appareil"}),a.jsx("div",{className:"status-indicator online",children:"✅ Vibration API supportée"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📳 État Actuel"}),a.jsx("div",{className:`status-indicator ${j?"loading":"online"}`,children:j?"📳 En vibration...":"⏸️ Inactif"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Vibrations Simples"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:()=>x(100,"Vibration courte (100ms)"),children:"📳 Court (100ms)"}),a.jsx("button",{className:"btn",onClick:()=>x(300,"Vibration moyenne (300ms)"),children:"📳 Moyen (300ms)"}),a.jsx("button",{className:"btn",onClick:()=>x(1e3,"Vibration longue (1000ms)"),children:"📳 Long (1000ms)"}),a.jsx("button",{className:"btn danger",onClick:f,children:"⏹️ Arrêter"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Patterns Prédéfinis"}),a.jsx("div",{className:"demo-controls",children:L.slice(0,6).map((G,Z)=>a.jsxs("button",{className:"btn",onClick:()=>x(G.pattern,G.description),title:G.description,children:["📳 ",G.name]},Z))}),a.jsx("div",{className:"demo-controls",style:{marginTop:"1rem"},children:L.slice(6).map((G,Z)=>a.jsxs("button",{className:"btn",onClick:()=>x(G.pattern,G.description),title:G.description,children:["📳 ",G.name]},Z+6))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Pattern Personnalisé"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Pattern (vibration,pause,vibration,pause...) en millisecondes:"}),a.jsx("input",{type:"text",value:o,onChange:G=>A(G.target.value),placeholder:"200,100,200,100,500"}),a.jsx("small",{style:{color:"#666",marginTop:"0.5rem",display:"block"},children:'Exemple: "200,100,200" = vibrer 200ms, pause 100ms, vibrer 200ms'})]}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn success",onClick:D,children:"📳 Tester Pattern Personnalisé"})})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Exemples d'Usage"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:()=>x([50,50,50],"Notification de succès"),children:"✅ Succès"}),a.jsx("button",{className:"btn warning",onClick:()=>x([200,100,200],"Notification d'avertissement"),children:"⚠️ Avertissement"}),a.jsx("button",{className:"btn danger",onClick:()=>x([300,200,300,200,300],"Notification d'erreur"),children:"❌ Erreur"}),a.jsx("button",{className:"btn",onClick:()=>x([25,25,25,25,25,25,25,25],"Vibration de jeu"),children:"🎮 Jeu (Tir)"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsxs("h3",{children:["Journal des Vibrations (",M.length,")"]}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:_,children:"🗑️ Effacer Journal"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:M.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Aucune vibration testée. Utilisez les boutons ci-dessus !"}):M.map(G=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666",marginBottom:"0.25rem"},children:["[",G.timestamp,"]"]}),a.jsx("div",{style:{fontSize:"0.9rem"},children:G.message})]},G.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Guide des Patterns"}),a.jsx("div",{className:"demo-output",children:`📳 Format des patterns:
- Nombre simple: durée de vibration en ms (ex: 200)
- Tableau: [vibration, pause, vibration, pause...] (ex: [200, 100, 200])

⏱️ Exemples de patterns:
- Court: 100
- Notification: [200, 100, 200]
- SOS: [100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]
- Heartbeat: [100, 30, 100, 300]

🎯 Bonnes pratiques:
- Vibrations courtes pour les notifications
- Patterns distinctifs pour différents types d'alertes
- Éviter les vibrations trop longues (économie batterie)
- Tester sur différents appareils

⚠️ Limitations:
- Fonctionne uniquement sur mobile
- Peut être désactivé par l'utilisateur
- Certains navigateurs limitent la durée max
- Nécessite une interaction utilisateur sur certains navigateurs`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Retour haptique pour les actions de jeu"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Notifications"}),a.jsx("p",{children:"Alertes discrètes avec patterns distinctifs"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⏰ Alarmes"}),a.jsx("p",{children:"Réveils et rappels avec vibrations"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"♿ Accessibilité"}),a.jsx("p",{children:"Feedback tactile pour utilisateurs malvoyants"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📳 Vibration API"}),a.jsx("p",{className:"demo-description",children:"Contrôle de la vibration des appareils mobiles."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Vibration API non supportée sur cet appareil"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API fonctionne principalement sur les appareils mobiles (smartphones, tablettes) avec un moteur de vibration."})]})]})}function sp(){const[u,M]=v.useState(null),[g]=v.useState("screen"in window&&"orientation"in window.screen),[o,A]=v.useState(""),[j,w]=v.useState([]);v.useEffect(()=>{if(!g)return;const D=()=>{const _={type:screen.orientation.type,angle:screen.orientation.angle,timestamp:new Date().toLocaleTimeString()};M(_),w(L=>[_,...L.slice(0,9)])};return D(),screen.orientation.addEventListener("change",D),()=>{screen.orientation.removeEventListener("change",D)}},[g]);const q=async D=>{if(!g){A("❌ API non supportée");return}try{await screen.orientation.lock(D),A(`🔒 Orientation verrouillée en ${D}`)}catch(_){A(`❌ Impossible de verrouiller: ${_.message}`)}setTimeout(()=>A(""),5e3)},x=()=>{if(g){try{screen.orientation.unlock(),A("🔓 Orientation déverrouillée")}catch(D){A(`❌ Erreur de déverrouillage: ${D.message}`)}setTimeout(()=>A(""),5e3)}},f=D=>D!=null&&D.includes("portrait")?"📱":D!=null&&D.includes("landscape")?"📲":"📱",R=D=>{switch(D){case"portrait-primary":return"Portrait principal (normal)";case"portrait-secondary":return"Portrait secondaire (inversé)";case"landscape-primary":return"Paysage principal";case"landscape-secondary":return"Paysage secondaire (inversé)";default:return"Orientation inconnue"}};return g?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📱 Screen Orientation API"}),a.jsx("p",{className:"demo-description",children:"Détectez et contrôlez l'orientation de l'écran. Verrouillez l'orientation pour les jeux, vidéos ou applications spécifiques."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Orientation Actuelle"}),u&&a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsxs("h4",{children:[f(u.type)," Type"]}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:u.type}),a.jsx("p",{style:{fontSize:"0.9rem",color:"#666"},children:R(u.type)})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Angle"}),a.jsxs("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:[u.angle,"°"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⏰ Dernière MAJ"}),a.jsx("p",{children:u.timestamp})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Verrouillage d'Orientation"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:()=>q("portrait-primary"),children:"📱 Portrait"}),a.jsx("button",{className:"btn",onClick:()=>q("landscape-primary"),children:"📲 Paysage"}),a.jsx("button",{className:"btn",onClick:()=>q("portrait"),children:"📱 Portrait (Any)"}),a.jsx("button",{className:"btn",onClick:()=>q("landscape"),children:"📲 Paysage (Any)"}),a.jsx("button",{className:"btn danger",onClick:x,children:"🔓 Déverrouiller"})]}),o&&a.jsx("div",{className:"demo-output",style:{marginTop:"1rem"},children:o})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Changements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:j.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Tournez votre appareil pour voir les changements d'orientation"}):j.map((D,_)=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:[f(D.type)," ",D.type," - ",D.angle,"°"]}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:D.timestamp})]},_))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Verrouiller en paysage pour les jeux d'action"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📺 Vidéos"}),a.jsx("p",{children:"Forcer le mode paysage pour le visionnage"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📖 Lecture"}),a.jsx("p",{children:"Maintenir le portrait pour les articles"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Dashboards"}),a.jsx("p",{children:"Adapter l'interface selon l'orientation"})]})]})]})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📱 Screen Orientation API"}),a.jsx("p",{className:"demo-description",children:"Contrôle et détection de l'orientation de l'écran."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Screen Orientation API non supportée"})})]})}function lp(){const[u,M]=v.useState("visible"),[g,o]=v.useState(!1),[A,j]=v.useState([]),[w,q]=v.useState(0),[x]=v.useState(Date.now()),[f]=v.useState("visibilityState"in document);v.useEffect(()=>{if(!f)return;const L=()=>{const Z=document.visibilityState,O=document.hidden;M(Z),o(O);const I={state:Z,hidden:O,timestamp:new Date().toLocaleTimeString(),action:O?"Page cachée":"Page visible"};j(E=>[I,...E.slice(0,19)])};L(),document.addEventListener("visibilitychange",L);const G=setInterval(()=>{document.hidden||q(Date.now()-x)},1e3);return()=>{document.removeEventListener("visibilitychange",L),clearInterval(G)}},[f,x]);const R=L=>{const G=Math.floor(L/1e3),Z=Math.floor(G/60),O=Math.floor(Z/60);return O>0?`${O}h ${Z%60}m ${G%60}s`:Z>0?`${Z}m ${G%60}s`:`${G}s`},D=()=>{document.hidden?(console.log("🔄 Tâche en arrière-plan suspendue"),j(L=>[{state:"background-task",hidden:!0,timestamp:new Date().toLocaleTimeString(),action:"🔄 Tâche suspendue (page cachée)"},...L.slice(0,19)])):(console.log("▶️ Tâche en cours d'exécution"),j(L=>[{state:"background-task",hidden:!1,timestamp:new Date().toLocaleTimeString(),action:"▶️ Tâche active (page visible)"},...L.slice(0,19)]))},_=()=>{j([])};return f?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"👀 Page Visibility API"}),a.jsx("p",{className:"demo-description",children:"Détectez quand l'utilisateur change d'onglet ou minimise la fenêtre. Optimisez les performances et l'expérience utilisateur."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État Actuel de la Page"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"👁️ Visibilité"}),a.jsx("div",{className:`status-indicator ${g?"offline":"online"}`,children:g?"👁️‍🗨️ Cachée":"👀 Visible"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 État"}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:u})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⏱️ Temps Actif"}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#4CAF50"},children:R(w)})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Test d'Optimisation"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:D,children:"🔄 Tester Tâche en Arrière-plan"}),a.jsx("button",{className:"btn danger",onClick:_,children:"🗑️ Effacer Historique"})]}),a.jsx("p",{style:{marginTop:"1rem",color:"#666",fontSize:"0.9rem"},children:"💡 Changez d'onglet ou minimisez la fenêtre pour voir l'API en action"})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique de Visibilité"}),a.jsx("div",{style:{maxHeight:"400px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:A.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Changez d'onglet pour voir l'historique des événements"}):A.map((L,G)=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:L.hidden?"#ffebee":"#e8f5e8",border:`1px solid ${L.hidden?"#ffcdd2":"#c8e6c8"}`,animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:L.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:["État: ",L.state," | ",L.timestamp]})]},G))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Optimisations Recommandées"}),a.jsx("div",{className:"demo-output",children:`🎯 Quand la page est cachée:
- Suspendre les animations CSS/JS
- Réduire la fréquence des requêtes API
- Arrêter les timers non essentiels
- Suspendre la lecture vidéo/audio
- Sauvegarder l'état de l'application

⚡ Quand la page redevient visible:
- Reprendre les animations
- Synchroniser les données
- Relancer les timers
- Reprendre la lecture média
- Actualiser le contenu si nécessaire

📊 États possibles:
- "visible": Page complètement visible
- "hidden": Page complètement cachée
- "prerender": Page en pré-rendu (rare)`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Pause automatique quand l'utilisateur change d'onglet"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📹 Vidéos"}),a.jsx("p",{children:"Suspendre la lecture pour économiser la bande passante"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Analytics"}),a.jsx("p",{children:"Mesurer le temps réel passé sur la page"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💬 Chat"}),a.jsx("p",{children:"Réduire la fréquence de polling des messages"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"👀 Page Visibility API"}),a.jsx("p",{className:"demo-description",children:"Détection de la visibilité de la page."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Page Visibility API non supportée"})})]})}function rp(){var f,R;const[u,M]=v.useState(null),[g]=v.useState("connection"in navigator),[o,A]=v.useState([]);v.useEffect(()=>{if(!g)return;const D=()=>{const _=navigator.connection,L={effectiveType:_.effectiveType,downlink:_.downlink,rtt:_.rtt,saveData:_.saveData,timestamp:new Date().toLocaleTimeString()};M(L),A(G=>[L,...G.slice(0,9)])};return D(),navigator.connection.addEventListener("change",D),()=>{navigator.connection.removeEventListener("change",D)}},[g]);const j=D=>{switch(D){case"4g":return"📶";case"3g":return"📶";case"2g":return"📶";case"slow-2g":return"📶";default:return"📶"}},w=D=>{switch(D){case"4g":return"#4CAF50";case"3g":return"#FF9800";case"2g":return"#f44336";case"slow-2g":return"#9C27B0";default:return"#666"}},q=D=>D>=10?"Très rapide":D>=1.5?"Rapide":D>=.5?"Moyen":"Lent",x=()=>{if(!u)return;const D=[];return u.saveData&&D.push("🔋 Mode économie de données activé"),u.effectiveType==="slow-2g"||u.effectiveType==="2g"?(D.push("📱 Charger version allégée"),D.push("🖼️ Réduire qualité des images"),D.push("📺 Désactiver autoplay vidéo")):u.effectiveType==="3g"?(D.push("📱 Charger version standard"),D.push("🖼️ Images qualité moyenne")):(D.push("📱 Charger version complète"),D.push("🖼️ Images haute qualité"),D.push("📺 Autoplay vidéo autorisé")),D};return g?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📶 Network Information API"}),a.jsx("p",{className:"demo-description",children:"Adaptez votre contenu selon la qualité de connexion. Optimisez l'expérience utilisateur en fonction du réseau."})]}),u&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Informations Réseau Actuelles"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("h4",{children:[j(u.effectiveType)," Type de Connexion"]}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:w(u.effectiveType)},children:(f=u.effectiveType)==null?void 0:f.toUpperCase()})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⬇️ Débit Descendant"}),a.jsxs("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#667eea"},children:[u.downlink," Mbps"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666"},children:q(u.downlink)})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⏱️ Latence (RTT)"}),a.jsxs("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:[u.rtt,"ms"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔋 Économie de Données"}),a.jsx("div",{className:`status-indicator ${u.saveData?"loading":"online"}`,children:u.saveData?"🔋 Activée":"📶 Désactivée"})]})]})]}),u&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Recommandations d'Adaptation"}),a.jsx("div",{className:"demo-output",children:((R=x())==null?void 0:R.join(`
`))||"Aucune recommandation disponible"})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Changements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:o.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Changez de réseau pour voir l'historique"}):o.map((D,_)=>{var L;return a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:[j(D.effectiveType)," ",(L=D.effectiveType)==null?void 0:L.toUpperCase()," - ",D.downlink," Mbps"]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:["RTT: ",D.rtt,"ms | Économie: ",D.saveData?"Oui":"Non"," | ",D.timestamp]})]},_)})})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Stratégies d'Optimisation"}),a.jsx("div",{className:"demo-output",children:`📶 Adaptation par type de connexion:

🚀 4G/WiFi rapide:
- Images haute résolution
- Vidéos en autoplay
- Préchargement de contenu
- Animations fluides

📱 3G:
- Images qualité moyenne
- Vidéos sur demande
- Chargement progressif
- Animations réduites

🐌 2G/Slow-2G:
- Images compressées
- Pas de vidéo autoplay
- Contenu textuel prioritaire
- Interface simplifiée

🔋 Mode économie de données:
- Désactiver images non essentielles
- Réduire fréquence de sync
- Compresser les requêtes
- Avertir avant gros téléchargements`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Apps Mobiles"}),a.jsx("p",{children:"Adapter la qualité selon la connexion"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📺 Streaming"}),a.jsx("p",{children:"Ajuster automatiquement la résolution vidéo"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🛒 E-commerce"}),a.jsx("p",{children:"Optimiser le chargement des images produits"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📰 Médias"}),a.jsx("p",{children:"Proposer versions allégées des articles"})]})]})]})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📶 Network Information API"}),a.jsx("p",{className:"demo-description",children:"Informations sur la connexion réseau."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Network Information API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est principalement supportée sur Chrome/Edge mobile."})]})]})}function cp(){const[u,M]=v.useState(null),[g]=v.useState("DeviceMotionEvent"in window),[o,A]=v.useState(!1),[j,w]=v.useState(0),[q,x]=v.useState([]),[f,R]=v.useState("unknown");v.useEffect(()=>{typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function"?R("required"):R("granted")},[]);const D=async()=>{if(typeof DeviceMotionEvent.requestPermission=="function")try{const O=await DeviceMotionEvent.requestPermission();R(O),O==="granted"&&_()}catch{R("denied")}},_=()=>{if(!g||f==="denied")return;const O=I=>{var J,B,k,Q,b,h,P,ee,W,te,xe,me,T,$,ne,fe,m,X,F,K,se;const E={acceleration:{x:((B=(J=I.acceleration)==null?void 0:J.x)==null?void 0:B.toFixed(2))||0,y:((Q=(k=I.acceleration)==null?void 0:k.y)==null?void 0:Q.toFixed(2))||0,z:((h=(b=I.acceleration)==null?void 0:b.z)==null?void 0:h.toFixed(2))||0},accelerationIncludingGravity:{x:((ee=(P=I.accelerationIncludingGravity)==null?void 0:P.x)==null?void 0:ee.toFixed(2))||0,y:((te=(W=I.accelerationIncludingGravity)==null?void 0:W.y)==null?void 0:te.toFixed(2))||0,z:((me=(xe=I.accelerationIncludingGravity)==null?void 0:xe.z)==null?void 0:me.toFixed(2))||0},rotationRate:{alpha:(($=(T=I.rotationRate)==null?void 0:T.alpha)==null?void 0:$.toFixed(2))||0,beta:((fe=(ne=I.rotationRate)==null?void 0:ne.beta)==null?void 0:fe.toFixed(2))||0,gamma:((X=(m=I.rotationRate)==null?void 0:m.gamma)==null?void 0:X.toFixed(2))||0},interval:I.interval,timestamp:new Date().toLocaleTimeString()};M(E);const Y=Math.sqrt(Math.pow(((F=I.accelerationIncludingGravity)==null?void 0:F.x)||0,2)+Math.pow(((K=I.accelerationIncludingGravity)==null?void 0:K.y)||0,2)+Math.pow(((se=I.accelerationIncludingGravity)==null?void 0:se.z)||0,2));Y>20&&(w(ue=>ue+1),x(ue=>[{type:"shake",value:Y.toFixed(2),timestamp:E.timestamp},...ue.slice(0,9)]))};return window.addEventListener("devicemotion",O),A(!0),()=>{window.removeEventListener("devicemotion",O),A(!1)}},L=()=>{window.removeEventListener("devicemotion",()=>{}),A(!1)},G=()=>{w(0),x([])},Z=O=>{const I=Math.abs(O);return I>10?{level:"Forte",color:"#f44336"}:I>5?{level:"Moyenne",color:"#FF9800"}:I>1?{level:"Faible",color:"#4CAF50"}:{level:"Statique",color:"#666"}};return g?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📲 Device Motion API"}),a.jsx("p",{className:"demo-description",children:"Détectez les mouvements, secousses et rotations de l'appareil. Parfait pour les jeux, interfaces gestuelles et applications fitness."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles"}),a.jsxs("div",{className:"demo-controls",children:[f==="required"&&a.jsx("button",{className:"btn success",onClick:D,children:"🔐 Demander Permission"}),f==="granted"&&!o&&a.jsx("button",{className:"btn success",onClick:_,children:"▶️ Démarrer Écoute"}),o&&a.jsx("button",{className:"btn danger",onClick:L,children:"⏹️ Arrêter Écoute"}),a.jsx("button",{className:"btn",onClick:G,children:"🔄 Reset Compteurs"})]}),a.jsxs("div",{className:"grid grid-2",style:{marginTop:"1rem"},children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 État"}),a.jsx("div",{className:`status-indicator ${o?"online":"offline"}`,children:o?"👂 En écoute":"⏸️ Arrêté"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📳 Secousses Détectées"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#667eea"},children:j})]})]})]}),u&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Données de Mouvement en Temps Réel"}),a.jsx("h4",{children:"🏃 Accélération (sans gravité)"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 X (Gauche/Droite)"}),a.jsxs("p",{style:{fontSize:"1.2rem",fontWeight:"bold",color:Z(u.acceleration.x).color},children:[u.acceleration.x," m/s²"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666"},children:Z(u.acceleration.x).level})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 Y (Avant/Arrière)"}),a.jsxs("p",{style:{fontSize:"1.2rem",fontWeight:"bold",color:Z(u.acceleration.y).color},children:[u.acceleration.y," m/s²"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666"},children:Z(u.acceleration.y).level})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 Z (Haut/Bas)"}),a.jsxs("p",{style:{fontSize:"1.2rem",fontWeight:"bold",color:Z(u.acceleration.z).color},children:[u.acceleration.z," m/s²"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666"},children:Z(u.acceleration.z).level})]})]}),a.jsx("h4",{children:"🌍 Accélération (avec gravité)"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 X"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:[u.accelerationIncludingGravity.x," m/s²"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 Y"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:[u.accelerationIncludingGravity.y," m/s²"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📐 Z"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:[u.accelerationIncludingGravity.z," m/s²"]})]})]}),a.jsx("h4",{children:"🔄 Vitesse de Rotation"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Alpha (Z)"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#4CAF50"},children:[u.rotationRate.alpha,"°/s"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Beta (X)"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#4CAF50"},children:[u.rotationRate.beta,"°/s"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Gamma (Y)"}),a.jsxs("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#4CAF50"},children:[u.rotationRate.gamma,"°/s"]})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:q.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Secouez votre appareil pour voir les événements"}):q.map((O,I)=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff3cd",border:"1px solid #ffeaa7"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:["📳 Secousse détectée - Intensité: ",O.value," m/s²"]}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:O.timestamp})]},I))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Contrôles gestuels et détection de secousses"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🏃 Fitness"}),a.jsx("p",{children:"Compteur de pas et détection d'activité"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🚨 Sécurité"}),a.jsx("p",{children:"Détection de chute ou d'urgence"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎨 Créatif"}),a.jsx("p",{children:"Interfaces artistiques basées sur le mouvement"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Guide des Axes"}),a.jsx("div",{className:"demo-output",children:`📐 Système de coordonnées:
- X: Gauche (-) / Droite (+)
- Y: Arrière (-) / Avant (+)  
- Z: Bas (-) / Haut (+)

🔄 Rotations:
- Alpha: Rotation autour de Z (boussole)
- Beta: Rotation autour de X (tangage)
- Gamma: Rotation autour de Y (roulis)

📱 Conseils d'utilisation:
- Testez sur appareil mobile réel
- Calibrez selon l'orientation
- Filtrez les petites variations
- Gérez les permissions iOS 13+`})]})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📲 Device Motion API"}),a.jsx("p",{className:"demo-description",children:"Détection des mouvements de l'appareil."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Device Motion API non supportée"})})]})}function op(){var k;const[u]=v.useState("webkitSpeechRecognition"in window||"SpeechRecognition"in window),[M,g]=v.useState(!1),[o,A]=v.useState(""),[j,w]=v.useState(""),[q,x]=v.useState(null),[f,R]=v.useState("fr-FR"),[D,_]=v.useState(0),[L,G]=v.useState([]);v.useEffect(()=>{if(!u)return;const Q=window.SpeechRecognition||window.webkitSpeechRecognition,b=new Q;return b.continuous=!0,b.interimResults=!0,b.lang=f,b.onstart=()=>{g(!0),Z("🎤 Écoute démarrée")},b.onend=()=>{g(!1),Z("⏹️ Écoute arrêtée")},b.onresult=h=>{let P="",ee="";for(let W=h.resultIndex;W<h.results.length;W++){const te=h.results[W];te.isFinal?(ee+=te[0].transcript,_(te[0].confidence),Z(`✅ "${te[0].transcript}" (${Math.round(te[0].confidence*100)}%)`)):P+=te[0].transcript}A(P),ee&&w(W=>W+ee+" ")},b.onerror=h=>{Z(`❌ Erreur: ${h.error}`),g(!1)},x(b),()=>{b&&b.stop()}},[f,u]);const Z=Q=>{G(b=>[{id:Date.now(),message:Q,timestamp:new Date().toLocaleTimeString()},...b.slice(0,9)])},O=()=>{q&&!M&&q.start()},I=()=>{q&&M&&q.stop()},E=()=>{A(""),w(""),_(0)},Y=()=>{G([])},J=Q=>{const b=Q.toLowerCase();b.includes("effacer")||b.includes("clear")?(E(),Z("🗑️ Commande: Transcription effacée")):b.includes("arrêter")||b.includes("stop")?(I(),Z("⏹️ Commande: Arrêt de l'écoute")):b.includes("bonjour")||b.includes("hello")?Z("👋 Commande: Salutation détectée"):(b.includes("merci")||b.includes("thank"))&&Z("🙏 Commande: Remerciement détecté")};v.useEffect(()=>{j&&J(j)},[j]);const B=[{code:"fr-FR",name:"Français (France)"},{code:"en-US",name:"English (US)"},{code:"en-GB",name:"English (UK)"},{code:"es-ES",name:"Español (España)"},{code:"de-DE",name:"Deutsch (Deutschland)"},{code:"it-IT",name:"Italiano (Italia)"},{code:"pt-BR",name:"Português (Brasil)"},{code:"ja-JP",name:"日本語 (Japon)"},{code:"ko-KR",name:"한국어 (Corée)"},{code:"zh-CN",name:"中文 (Chine)"}];return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🎤 Speech Recognition API"}),a.jsx("p",{className:"demo-description",children:"Reconnaissance vocale en temps réel avec support multilingue. Convertissez la parole en texte et créez des interfaces vocales."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Configuration"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Langue de reconnaissance:"}),a.jsx("select",{value:f,onChange:Q=>R(Q.target.value),disabled:M,children:B.map(Q=>a.jsx("option",{value:Q.code,children:Q.name},Q.code))})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎯 Confiance"}),a.jsxs("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:[Math.round(D*100),"%"]})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles Vocaux"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:O,disabled:M,children:"🎤 Démarrer Écoute"}),a.jsx("button",{className:"btn danger",onClick:I,disabled:!M,children:"⏹️ Arrêter Écoute"}),a.jsx("button",{className:"btn",onClick:E,children:"🗑️ Effacer Texte"}),a.jsx("button",{className:"btn",onClick:Y,children:"🗑️ Effacer Historique"})]}),a.jsxs("div",{className:"grid grid-2",style:{marginTop:"1rem"},children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 État"}),a.jsx("div",{className:`status-indicator ${M?"loading":"online"}`,children:M?"🎤 En écoute...":"⏸️ Arrêté"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🌍 Langue"}),a.jsx("p",{children:(k=B.find(Q=>Q.code===f))==null?void 0:k.name})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Transcription en Temps Réel"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Texte en cours (temporaire):"}),a.jsx("textarea",{value:o,readOnly:!0,rows:2,style:{backgroundColor:"#fff3cd",border:"2px solid #ffeaa7",fontStyle:o?"normal":"italic"},placeholder:"Parlez pour voir la transcription en temps réel..."})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Transcription finale:"}),a.jsx("textarea",{value:j,readOnly:!0,rows:4,style:{backgroundColor:"#e8f5e8",border:"2px solid #c8e6c8"},placeholder:"Le texte final apparaîtra ici..."})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Commandes Vocales Reconnues"}),a.jsx("div",{className:"demo-output",children:`🗣️ Commandes disponibles:
- "Effacer" / "Clear" → Efface la transcription
- "Arrêter" / "Stop" → Arrête l'écoute
- "Bonjour" / "Hello" → Salutation
- "Merci" / "Thank you" → Remerciement

💡 Conseils pour une meilleure reconnaissance:
- Parlez clairement et distinctement
- Évitez les bruits de fond
- Utilisez un microphone de qualité
- Faites des pauses entre les phrases`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:L.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Commencez à parler pour voir l'historique"}):L.map(Q=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem"},children:Q.message}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:Q.timestamp})]},Q.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💬 Assistants Vocaux"}),a.jsx("p",{children:"Interfaces conversationnelles et chatbots vocaux"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"♿ Accessibilité"}),a.jsx("p",{children:"Navigation vocale pour utilisateurs handicapés"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📝 Dictée"}),a.jsx("p",{children:"Saisie de texte par reconnaissance vocale"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Commandes vocales dans les jeux"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🎤 Speech Recognition API"}),a.jsx("p",{className:"demo-description",children:"Reconnaissance vocale en temps réel."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Speech Recognition API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est principalement supportée sur Chrome/Edge."})]})]})}function up(){const[u]=v.useState("speechSynthesis"in window),[M,g]=v.useState([]),[o,A]=v.useState(null),[j,w]=v.useState("Bonjour ! Ceci est une démonstration de synthèse vocale."),[q,x]=v.useState(!1),[f,R]=v.useState({rate:1,pitch:1,volume:1}),[D,_]=v.useState([]);v.useEffect(()=>{if(!u)return;const k=()=>{const Q=speechSynthesis.getVoices();g(Q);const b=Q.find(h=>h.lang.startsWith("fr")||h.name.toLowerCase().includes("french"));A(b||Q[0])};return k(),speechSynthesis.addEventListener("voiceschanged",k),()=>{speechSynthesis.removeEventListener("voiceschanged",k),speechSynthesis.cancel()}},[u]);const L=k=>{_(Q=>[{id:Date.now(),message:k,timestamp:new Date().toLocaleTimeString()},...Q.slice(0,9)])},G=(k=j)=>{if(!u||!o)return;speechSynthesis.cancel();const Q=new SpeechSynthesisUtterance(k);Q.voice=o,Q.rate=f.rate,Q.pitch=f.pitch,Q.volume=f.volume,Q.onstart=()=>{x(!0),L(`🗣️ Début: "${k.substring(0,50)}${k.length>50?"...":""}"`)},Q.onend=()=>{x(!1),L("✅ Synthèse terminée")},Q.onerror=b=>{x(!1),L(`❌ Erreur: ${b.error}`)},speechSynthesis.speak(Q)},Z=()=>{speechSynthesis.cancel(),x(!1),L("⏹️ Synthèse arrêtée")},O=()=>{speechSynthesis.speaking&&!speechSynthesis.paused&&(speechSynthesis.pause(),L("⏸️ Synthèse en pause"))},I=()=>{speechSynthesis.paused&&(speechSynthesis.resume(),L("▶️ Synthèse reprise"))},E=(k,Q)=>{w(k),G(k),L(`📝 Preset: ${Q}`)},Y=()=>{_([])},J=k=>{const Q={fr:"🇫🇷",en:"🇺🇸",es:"🇪🇸",de:"🇩🇪",it:"🇮🇹",pt:"🇵🇹",ja:"🇯🇵",ko:"🇰🇷",zh:"🇨🇳",ru:"🇷🇺",ar:"🇸🇦"},b=k.split("-")[0];return Q[b]||"🌍"},B=[{text:"Bonjour et bienvenue dans cette démonstration de synthèse vocale !",description:"Salutation française"},{text:"Hello and welcome to this speech synthesis demonstration!",description:"Salutation anglaise"},{text:"Les nombres : un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.",description:"Nombres en français"},{text:"Ceci est un test de vitesse de parole avec différents paramètres.",description:"Test de vitesse"},{text:"La synthèse vocale permet de convertir du texte en parole naturelle.",description:"Explication technique"}];return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🗣️ Speech Synthesis API"}),a.jsx("p",{className:"demo-description",children:"Convertissez du texte en parole naturelle avec contrôle de la voix, vitesse, tonalité et volume. Support multilingue."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Configuration de la Voix"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"input-group",children:[a.jsxs("label",{children:["Voix disponibles (",M.length,"):"]}),a.jsx("select",{value:(o==null?void 0:o.name)||"",onChange:k=>{const Q=M.find(b=>b.name===k.target.value);A(Q)},children:M.map((k,Q)=>a.jsxs("option",{value:k.name,children:[J(k.lang)," ",k.name," (",k.lang,")"]},Q))})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎭 Voix Sélectionnée"}),o?a.jsxs("div",{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Nom:"})," ",o.name]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Langue:"})," ",J(o.lang)," ",o.lang]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Local:"})," ",o.localService?"Oui":"Non"]})]}):a.jsx("p",{children:"Aucune voix sélectionnée"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Paramètres de Synthèse"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"input-group",children:[a.jsxs("label",{children:["Vitesse: ",f.rate,"x"]}),a.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:f.rate,onChange:k=>R(Q=>({...Q,rate:Number.parseFloat(k.target.value)}))})]}),a.jsxs("div",{className:"input-group",children:[a.jsxs("label",{children:["Tonalité: ",f.pitch]}),a.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:f.pitch,onChange:k=>R(Q=>({...Q,pitch:Number.parseFloat(k.target.value)}))})]}),a.jsxs("div",{className:"input-group",children:[a.jsxs("label",{children:["Volume: ",Math.round(f.volume*100),"%"]}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:f.volume,onChange:k=>R(Q=>({...Q,volume:Number.parseFloat(k.target.value)}))})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Texte à Synthétiser"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Votre texte:"}),a.jsx("textarea",{value:j,onChange:k=>w(k.target.value),rows:4,placeholder:"Entrez le texte que vous voulez faire lire..."})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles de Lecture"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:()=>G(),disabled:q||!j.trim(),children:"🗣️ Lire le Texte"}),a.jsx("button",{className:"btn warning",onClick:O,disabled:!q,children:"⏸️ Pause"}),a.jsx("button",{className:"btn",onClick:I,disabled:!speechSynthesis.paused,children:"▶️ Reprendre"}),a.jsx("button",{className:"btn danger",onClick:Z,disabled:!q,children:"⏹️ Arrêter"})]}),a.jsxs("div",{className:"card",style:{marginTop:"1rem"},children:[a.jsx("h4",{children:"📊 État de la Synthèse"}),a.jsx("div",{className:`status-indicator ${q?"loading":"online"}`,children:q?"🗣️ En cours de lecture...":"⏸️ Arrêté"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Textes Prédéfinis"}),a.jsx("div",{className:"demo-controls",children:B.map((k,Q)=>a.jsxs("button",{className:"btn",onClick:()=>E(k.text,k.description),disabled:q,title:k.text,children:["🗣️ ",k.description]},Q))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Synthèses"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:Y,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:D.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):D.map(k=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem"},children:k.message}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:k.timestamp})]},k.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Paramètres Avancés"}),a.jsx("div",{className:"demo-output",children:`🎛️ Contrôles disponibles:
- Vitesse: 0.1x à 3x (normal = 1x)
- Tonalité: 0 à 2 (normal = 1)
- Volume: 0% à 100%

🗣️ Types de voix:
- Voix locales: Plus rapides, toujours disponibles
- Voix en ligne: Plus naturelles, nécessitent internet
- Support multilingue selon le système

⚙️ Événements gérés:
- onstart: Début de la synthèse
- onend: Fin de la synthèse
- onpause: Mise en pause
- onresume: Reprise
- onerror: Gestion des erreurs`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"♿ Accessibilité"}),a.jsx("p",{children:"Lecture d'écran pour utilisateurs malvoyants"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📚 E-learning"}),a.jsx("p",{children:"Narration de cours et contenus éducatifs"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🤖 Assistants"}),a.jsx("p",{children:"Réponses vocales d'assistants virtuels"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Apps Mobiles"}),a.jsx("p",{children:"Navigation vocale et notifications parlées"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🗣️ Speech Synthesis API"}),a.jsx("p",{className:"demo-description",children:"Synthèse vocale text-to-speech."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Speech Synthesis API non supportée"})})]})}function dp(){const[u]=v.useState("showOpenFilePicker"in window),[M,g]=v.useState(null),[o,A]=v.useState(""),[j,w]=v.useState(""),[q,x]=v.useState(0),[f,R]=v.useState(""),[D,_]=v.useState([]),L=(B,k)=>{_(Q=>[{id:Date.now(),operation:B,details:k,timestamp:new Date().toLocaleTimeString()},...Q.slice(0,9)])},G=async()=>{if(!u){L("❌ Erreur","File System Access API non supportée");return}try{const[B]=await window.showOpenFilePicker({types:[{description:"Fichiers texte",accept:{"text/plain":[".txt"],"text/javascript":[".js"],"text/html":[".html"],"application/json":[".json"],"text/css":[".css"],"text/markdown":[".md"]}}]}),k=await B.getFile(),Q=await k.text();g(B),A(Q),w(k.name),x(k.size),R(k.type),L("📂 Fichier ouvert",`${k.name} (${(k.size/1024).toFixed(2)} KB)`)}catch(B){B.name!=="AbortError"&&L("❌ Erreur",`Impossible d'ouvrir le fichier: ${B.message}`)}},Z=async()=>{if(!M){L("❌ Erreur","Aucun fichier ouvert");return}try{const B=await M.createWritable();await B.write(o),await B.close(),L("💾 Fichier sauvegardé",j)}catch(B){L("❌ Erreur",`Impossible de sauvegarder: ${B.message}`)}},O=async()=>{if(!u){L("❌ Erreur","File System Access API non supportée");return}try{const B=await window.showSaveFilePicker({suggestedName:j||"nouveau-fichier.txt",types:[{description:"Fichiers texte",accept:{"text/plain":[".txt"],"text/javascript":[".js"],"text/html":[".html"],"application/json":[".json"]}}]}),k=await B.createWritable();await k.write(o),await k.close(),g(B),w(B.name),L("💾 Fichier sauvegardé sous",B.name)}catch(B){B.name!=="AbortError"&&L("❌ Erreur",`Impossible de sauvegarder: ${B.message}`)}},I=()=>{g(null),A(`// Nouveau fichier
// Commencez à taper votre contenu ici...`),w("nouveau-fichier.txt"),x(0),R("text/plain"),L("📄 Nouveau fichier","Fichier créé en mémoire")},E=async()=>{if(!("showDirectoryPicker"in window)){L("❌ Erreur","Directory Picker non supporté");return}try{const B=await window.showDirectoryPicker();let k=0;for await(const[Q,b]of B.entries())if(k++,k>10)break;L("📁 Dossier ouvert",`${B.name} (${k}+ fichiers)`)}catch(B){B.name!=="AbortError"&&L("❌ Erreur",`Impossible d'ouvrir le dossier: ${B.message}`)}},Y=()=>{_([])},J=B=>{if(B===0)return"0 B";const k=1024,Q=["B","KB","MB","GB"],b=Math.floor(Math.log(B)/Math.log(k));return Number.parseFloat((B/Math.pow(k,b)).toFixed(2))+" "+Q[b]};return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📁 File System Access API"}),a.jsx("p",{className:"demo-description",children:"Accédez directement aux fichiers locaux. Ouvrez, modifiez et sauvegardez des fichiers comme une application native."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Opérations sur les Fichiers"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:G,children:"📂 Ouvrir Fichier"}),a.jsx("button",{className:"btn",onClick:I,children:"📄 Nouveau Fichier"}),a.jsx("button",{className:"btn",onClick:Z,disabled:!M,children:"💾 Sauvegarder"}),a.jsx("button",{className:"btn",onClick:O,children:"💾 Sauvegarder Sous..."}),a.jsx("button",{className:"btn",onClick:E,children:"📁 Ouvrir Dossier"})]})]}),j&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Informations du Fichier"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📄 Détails"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Nom:"})," ",j]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Taille:"})," ",J(q)]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Type:"})," ",f||"Non défini"]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 État"}),a.jsx("div",{className:`status-indicator ${M?"online":"loading"}`,children:M?"💾 Lié au fichier":"📝 En mémoire"}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#666",marginTop:"0.5rem"},children:M?"Modifications sauvegardées directement":"Utilisez 'Sauvegarder Sous' pour créer le fichier"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Éditeur de Fichier"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Contenu du fichier:"}),a.jsx("textarea",{value:o,onChange:B=>{A(B.target.value),x(new Blob([B.target.value]).size)},rows:12,style:{fontFamily:"Monaco, Menlo, monospace",fontSize:"0.9rem"},placeholder:"Ouvrez un fichier ou créez-en un nouveau pour commencer l'édition..."})]}),o&&a.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.9rem",color:"#666"},children:["📊 Statistiques: ",o.length," caractères, ",o.split(`
`).length," lignes"]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Opérations"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:Y,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:D.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Effectuez des opérations pour voir l'historique"}):D.map(B=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:B.operation}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[B.details," | ",B.timestamp]})]},B.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Capacités de l'API"}),a.jsx("div",{className:"demo-output",children:`📁 Fonctionnalités disponibles:
- Ouverture de fichiers avec sélecteur natif
- Sauvegarde directe (sans téléchargement)
- Accès aux dossiers et navigation
- Permissions persistantes
- Support des types de fichiers

🔒 Sécurité:
- Permissions explicites de l'utilisateur
- Accès limité aux fichiers sélectionnés
- Pas d'accès arbitraire au système
- Fonctionne uniquement en HTTPS

💡 Avantages vs input[type="file"]:
- Sauvegarde directe sans téléchargement
- Modification de fichiers existants
- Accès aux métadonnées complètes
- Expérience utilisateur native`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📝 Éditeurs de Code"}),a.jsx("p",{children:"IDE et éditeurs de texte dans le navigateur"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎨 Outils Créatifs"}),a.jsx("p",{children:"Éditeurs d'images, audio, vidéo"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Productivité"}),a.jsx("p",{children:"Tableurs, traitements de texte"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔧 Outils Dev"}),a.jsx("p",{children:"Gestionnaires de projets, build tools"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📁 File System Access API"}),a.jsx("p",{className:"demo-description",children:"Accès direct au système de fichiers."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ File System Access API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est supportée sur Chrome/Edge 86+ et nécessite HTTPS."})]})]})}function fp(){var I;const[u]=v.useState("PaymentRequest"in window),[M,g]=v.useState([]),[o,A]=v.useState(null),[j,w]=v.useState([]),[q,x]=v.useState({total:29.99,currency:"EUR",items:[{label:"Produit Premium",amount:24.99},{label:"Livraison",amount:5}]}),f=(E,Y,J="info")=>{w(B=>[{id:Date.now(),operation:E,details:Y,status:J,timestamp:new Date().toLocaleTimeString()},...B.slice(0,9)])},R=async()=>{if(!u){f("❌ Erreur","Payment Request API non supportée","error");return}const E=[{supportedMethods:"basic-card",data:{supportedNetworks:["visa","mastercard","amex"],supportedTypes:["debit","credit"]}},{supportedMethods:"https://google.com/pay",data:{environment:"TEST",merchantId:"demo-merchant",paymentMethodTokenizationParameters:{tokenizationType:"PAYMENT_GATEWAY",parameters:{gateway:"example",gatewayMerchantId:"demo-gateway-merchant-id"}}}}],Y={total:{label:"Total",amount:{currency:q.currency,value:q.total.toFixed(2)}},displayItems:q.items.map(J=>({label:J.label,amount:{currency:q.currency,value:J.amount.toFixed(2)}}))};try{await new PaymentRequest(E,Y).canMakePayment()?(g(E),f("✅ Vérification","Méthodes de paiement disponibles","success")):f("⚠️ Avertissement","Aucune méthode de paiement disponible","warning")}catch(J){f("❌ Erreur",`Vérification échouée: ${J.message}`,"error")}},D=async()=>{if(!u){f("❌ Erreur","Payment Request API non supportée","error");return}const E=[{supportedMethods:"basic-card",data:{supportedNetworks:["visa","mastercard","amex"],supportedTypes:["debit","credit"]}}],Y={total:{label:"Total à payer",amount:{currency:q.currency,value:q.total.toFixed(2)}},displayItems:q.items.map(B=>({label:B.label,amount:{currency:q.currency,value:B.amount.toFixed(2)}})),shippingOptions:[{id:"standard",label:"Livraison standard (5-7 jours)",amount:{currency:q.currency,value:"5.00"},selected:!0},{id:"express",label:"Livraison express (1-2 jours)",amount:{currency:q.currency,value:"15.00"}}]},J={requestPayerName:!0,requestPayerEmail:!0,requestPayerPhone:!0,requestShipping:!0};try{const B=new PaymentRequest(E,Y,J);f("🔄 Traitement","Ouverture de l'interface de paiement","info");const k=await B.show();await new Promise(Q=>setTimeout(Q,2e3)),await k.complete("success"),A({methodName:k.methodName,details:k.details,payerName:k.payerName,payerEmail:k.payerEmail,payerPhone:k.payerPhone,shippingAddress:k.shippingAddress,shippingOption:k.shippingOption}),f("✅ Succès",`Paiement de ${q.total}€ accepté`,"success")}catch(B){B.name==="AbortError"?f("❌ Annulé","Paiement annulé par l'utilisateur","warning"):f("❌ Erreur",`Paiement échoué: ${B.message}`,"error")}},_=E=>{const Y=E.reduce((J,B)=>J+B.amount,0);x(J=>({...J,items:E,total:Y}))},L=()=>{const E={label:"Nouvel article",amount:10};_([...q.items,E]),f("➕ Article","Article ajouté au panier","info")},G=E=>{const Y=q.items.filter((J,B)=>B!==E);_(Y),f("➖ Article","Article retiré du panier","info")},Z=()=>{w([])},O=()=>{A(null)};return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"💳 Payment Request API"}),a.jsx("p",{className:"demo-description",children:"Interface de paiement native et sécurisée. Intégrez Apple Pay, Google Pay et cartes bancaires facilement."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Commande Actuelle"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🛒 Articles"}),q.items.map((E,Y)=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem",padding:"0.5rem",backgroundColor:"#f8f9fa",borderRadius:"4px"},children:[a.jsx("span",{children:E.label}),a.jsxs("div",{children:[a.jsxs("span",{style:{fontWeight:"bold"},children:[E.amount.toFixed(2),"€"]}),a.jsx("button",{onClick:()=>G(Y),style:{marginLeft:"0.5rem",background:"none",border:"none",color:"#f44336",cursor:"pointer"},children:"❌"})]})]},Y)),a.jsx("button",{className:"btn",onClick:L,style:{marginTop:"0.5rem"},children:"➕ Ajouter Article"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💰 Total"}),a.jsxs("p",{style:{fontSize:"2rem",fontWeight:"bold",color:"#4CAF50"},children:[q.total.toFixed(2)," ",q.currency]}),a.jsxs("div",{style:{fontSize:"0.9rem",color:"#666"},children:[q.items.length," article(s)"]})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Actions de Paiement"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:R,children:"🔍 Vérifier Méthodes"}),a.jsx("button",{className:"btn success",onClick:D,children:"💳 Payer Maintenant"}),o&&a.jsx("button",{className:"btn",onClick:O,children:"🗑️ Effacer Résultat"})]})]}),o&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Résultat du Paiement"}),a.jsxs("div",{className:"card",style:{backgroundColor:"#e8f5e8"},children:[a.jsx("h4",{children:"✅ Paiement Réussi"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Méthode:"})," ",o.methodName]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Nom:"})," ",o.payerName||"Non fourni"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Email:"})," ",o.payerEmail||"Non fourni"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Téléphone:"})," ",o.payerPhone||"Non fourni"]})]}),a.jsxs("div",{children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Livraison:"})," ",o.shippingOption||"Non sélectionnée"]}),o.shippingAddress&&a.jsxs("div",{children:[a.jsx("p",{children:a.jsx("strong",{children:"Adresse:"})}),a.jsxs("p",{style:{fontSize:"0.9rem",color:"#666"},children:[(I=o.shippingAddress.addressLine)==null?void 0:I[0],a.jsx("br",{}),o.shippingAddress.city,", ",o.shippingAddress.postalCode]})]})]})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Transactions"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:Z,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:j.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Effectuez des actions pour voir l'historique"}):j.map(E=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:E.status==="success"?"#e8f5e8":E.status==="error"?"#ffebee":E.status==="warning"?"#fff3e0":"#fff",border:`1px solid ${E.status==="success"?"#c8e6c8":E.status==="error"?"#ffcdd2":E.status==="warning"?"#ffcc02":"#ddd"}`,animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:E.operation}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[E.details," | ",E.timestamp]})]},E.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Méthodes de Paiement Supportées"}),a.jsx("div",{className:"demo-output",children:`💳 Types de paiement:
- Cartes bancaires (Visa, Mastercard, Amex)
- Apple Pay (Safari sur iOS/macOS)
- Google Pay (Chrome avec compte Google)
- Samsung Pay (navigateurs Samsung)
- Portefeuilles numériques tiers

🔒 Sécurité:
- Tokenisation des données sensibles
- Pas de stockage des numéros de carte
- Authentification biométrique
- Conformité PCI DSS automatique

⚡ Avantages:
- Interface native du système
- Expérience utilisateur optimisée
- Réduction de l'abandon de panier
- Intégration simplifiée pour les développeurs`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🛒 E-commerce"}),a.jsx("p",{children:"Checkout rapide et sécurisé"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Apps Mobiles"}),a.jsx("p",{children:"Paiements in-app natifs"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎫 Billetterie"}),a.jsx("p",{children:"Achat rapide de tickets et réservations"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💰 Services"}),a.jsx("p",{children:"Abonnements et paiements récurrents"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"💳 Payment Request API"}),a.jsx("p",{className:"demo-description",children:"Interface de paiement native du navigateur."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Payment Request API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est supportée sur Chrome, Edge et Safari avec des méthodes de paiement configurées."})]})]})}function mp(){const[u]=v.useState("locks"in navigator),[M,g]=v.useState([]),[o,A]=v.useState([]),[j,w]=v.useState(!1),[q,x]=v.useState(0),f=(E,Y,J="info")=>{A(B=>[{id:Date.now(),operation:E,details:Y,status:J,timestamp:new Date().toLocaleTimeString()},...B.slice(0,19)])},R=async()=>{if(u)try{const E=await navigator.locks.query();g(E.held.concat(E.pending))}catch(E){console.error("Erreur lors de la requête des locks:",E)}},D=async(E="shared-resource")=>{if(!u){f("❌ Erreur","Web Locks API non supportée","error");return}w(!0),f("🔒 Demande",`Lock exclusif sur "${E}"`,"info");try{await navigator.locks.request(E,async Y=>{f("✅ Acquis",`Lock exclusif "${E}" obtenu`,"success"),await R();for(let J=0;J<5;J++)await new Promise(B=>setTimeout(B,1e3)),x(B=>B+1),f("🔄 Traitement",`Opération ${J+1}/5 sur ressource partagée`,"info");await new Promise(J=>setTimeout(J,1e3)),f("🔓 Libéré",`Lock exclusif "${E}" libéré`,"success")})}catch(Y){f("❌ Erreur",`Échec du lock: ${Y.message}`,"error")}finally{w(!1),await R()}},_=async(E="shared-read-resource")=>{if(!u){f("❌ Erreur","Web Locks API non supportée","error");return}f("🔒 Demande",`Lock partagé sur "${E}"`,"info");try{await navigator.locks.request(E,{mode:"shared"},async Y=>{f("✅ Acquis",`Lock partagé "${E}" obtenu`,"success"),await R(),await new Promise(J=>setTimeout(J,3e3)),f("📖 Lecture",`Lecture de la ressource "${E}"`,"info"),f("🔓 Libéré",`Lock partagé "${E}" libéré`,"success")})}catch(Y){f("❌ Erreur",`Échec du lock partagé: ${Y.message}`,"error")}finally{await R()}},L=async(E="timeout-resource")=>{if(!u){f("❌ Erreur","Web Locks API non supportée","error");return}const Y=new AbortController,J=setTimeout(()=>{Y.abort(),f("⏰ Timeout",`Lock "${E}" abandonné après 3s`,"warning")},3e3);f("🔒 Demande",`Lock avec timeout sur "${E}"`,"info");try{await navigator.locks.request(E,{signal:Y.signal},async B=>{clearTimeout(J),f("✅ Acquis",`Lock avec timeout "${E}" obtenu`,"success"),await R(),await new Promise(k=>setTimeout(k,2e3)),f("🔓 Libéré",`Lock avec timeout "${E}" libéré`,"success")})}catch(B){clearTimeout(J),B.name==="AbortError"?f("⏰ Timeout",`Lock "${E}" abandonné`,"warning"):f("❌ Erreur",`Échec du lock: ${B.message}`,"error")}finally{await R()}},G=async()=>{if(!u)return;f("🔄 Simulation","Prévention de deadlock avec ordre des ressources","info");const E=["resource-a","resource-b"].sort();try{await navigator.locks.request(E[0],async Y=>{f("🔒 Lock A",`Ressource ${E[0]} verrouillée`,"success"),await R(),await new Promise(J=>setTimeout(J,1e3)),await navigator.locks.request(E[1],async J=>{f("🔒 Lock B",`Ressource ${E[1]} verrouillée`,"success"),await R(),await new Promise(B=>setTimeout(B,2e3)),f("⚡ Opération","Opération critique sur les deux ressources","info"),f("🔓 Lock B",`Ressource ${E[1]} libérée`,"success")}),f("🔓 Lock A",`Ressource ${E[0]} libérée`,"success")})}catch(Y){f("❌ Erreur",`Simulation échouée: ${Y.message}`,"error")}finally{await R()}},Z=async()=>{if(u)try{const E=await navigator.locks.query();f("📊 Requête",`${E.held.length} locks actifs, ${E.pending.length} en attente`,"info"),g(E.held.concat(E.pending))}catch(E){f("❌ Erreur",`Requête échouée: ${E.message}`,"error")}},O=()=>{A([])},I=()=>{x(0),f("🔄 Reset","Ressource partagée remise à zéro","info")};return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🔐 Web Locks API"}),a.jsx("p",{className:"demo-description",children:"Synchronisez l'accès aux ressources partagées entre onglets et workers. Prévenez les conditions de course et les deadlocks."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État des Ressources"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Locks Actifs"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#667eea"},children:M.length})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Traitement"}),a.jsx("div",{className:`status-indicator ${j?"loading":"online"}`,children:j?"🔄 En cours...":"⏸️ Inactif"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📈 Ressource Partagée"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:q}),a.jsx("button",{className:"btn",onClick:I,style:{marginTop:"0.5rem",fontSize:"0.8rem"},children:"🔄 Reset"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Types de Verrouillage"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn success",onClick:()=>D(),disabled:j,children:"🔒 Lock Exclusif"}),a.jsx("button",{className:"btn",onClick:()=>_(),disabled:j,children:"🔓 Lock Partagé"}),a.jsx("button",{className:"btn warning",onClick:()=>L(),disabled:j,children:"⏰ Lock avec Timeout"}),a.jsx("button",{className:"btn",onClick:G,disabled:j,children:"🔄 Prévention Deadlock"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Gestion des Locks"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:Z,children:"📊 Interroger Locks"}),a.jsx("button",{className:"btn danger",onClick:O,children:"🗑️ Effacer Historique"})]})]}),M.length>0&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Locks Actifs"}),a.jsx("div",{style:{border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:M.map((E,Y)=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:["🔒 ",E.name]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:["Mode: ",E.mode||"exclusive"," | Client: ",E.clientId]})]},Y))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Opérations"}),a.jsx("div",{style:{maxHeight:"400px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:o.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Effectuez des opérations pour voir l'historique"}):o.map(E=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:E.status==="success"?"#e8f5e8":E.status==="error"?"#ffebee":E.status==="warning"?"#fff3e0":"#fff",border:`1px solid ${E.status==="success"?"#c8e6c8":E.status==="error"?"#ffcdd2":E.status==="warning"?"#ffcc02":"#ddd"}`,animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:E.operation}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[E.details," | ",E.timestamp]})]},E.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Concepts Clés"}),a.jsx("div",{className:"demo-output",children:`🔐 Types de locks:
- Exclusif: Un seul holder à la fois
- Partagé: Plusieurs holders simultanés pour lecture

⚡ Fonctionnalités:
- Locks nommés pour identifier les ressources
- Support des timeouts et annulation
- Requêtes pour lister les locks actifs
- Prévention automatique des deadlocks

🛡️ Cas d'usage:
- Synchronisation entre onglets
- Accès exclusif aux ressources partagées
- Coordination entre Service Workers
- Prévention des conditions de course

💡 Bonnes pratiques:
- Utiliser des noms de ressources cohérents
- Acquérir les locks dans un ordre déterministe
- Implémenter des timeouts appropriés
- Libérer les locks rapidement`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💾 Bases de Données"}),a.jsx("p",{children:"Synchronisation d'accès aux données locales"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📁 Fichiers"}),a.jsx("p",{children:"Accès exclusif aux fichiers en édition"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Synchronisation"}),a.jsx("p",{children:"Coordination entre onglets et workers"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⚡ Performance"}),a.jsx("p",{children:"Éviter les opérations concurrentes coûteuses"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🔐 Web Locks API"}),a.jsx("p",{className:"demo-description",children:"Synchronisation et verrouillage de ressources."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Web Locks API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est supportée sur Chrome/Edge 69+ et Firefox 96+."})]})]})}function hp(){const[u]=v.useState("mediaSession"in navigator),[M,g]=v.useState(!1),[o,A]=v.useState(0),[j,w]=v.useState(0),[q,x]=v.useState(180),[f,R]=v.useState(.7),[D,_]=v.useState([]),L=[{title:"Démo Track 1",artist:"Artiste Demo",album:"Album Demo",artwork:[{src:"/placeholder.svg?height=96&width=96",sizes:"96x96",type:"image/svg+xml"},{src:"/placeholder.svg?height=128&width=128",sizes:"128x128",type:"image/svg+xml"},{src:"/placeholder.svg?height=192&width=192",sizes:"192x192",type:"image/svg+xml"},{src:"/placeholder.svg?height=256&width=256",sizes:"256x256",type:"image/svg+xml"}]},{title:"Démo Track 2",artist:"Autre Artiste",album:"Autre Album",artwork:[{src:"/placeholder.svg?height=96&width=96",sizes:"96x96",type:"image/svg+xml"},{src:"/placeholder.svg?height=128&width=128",sizes:"128x128",type:"image/svg+xml"}]},{title:"Démo Track 3",artist:"Troisième Artiste",album:"Troisième Album",artwork:[{src:"/placeholder.svg?height=96&width=96",sizes:"96x96",type:"image/svg+xml"}]}],G=(k,Q)=>{_(b=>[{id:Date.now(),action:k,details:Q,timestamp:new Date().toLocaleTimeString()},...b.slice(0,9)])};v.useEffect(()=>{if(!u)return;const k=L[o];navigator.mediaSession.metadata=new MediaMetadata({title:k.title,artist:k.artist,album:k.album,artwork:k.artwork});const Q={play:()=>{g(!0),G("▶️ Play","Lecture démarrée via contrôles système")},pause:()=>{g(!1),G("⏸️ Pause","Lecture mise en pause via contrôles système")},previoustrack:()=>{const b=o>0?o-1:L.length-1;A(b),w(0),G("⏮️ Previous",`Piste précédente: ${L[b].title}`)},nexttrack:()=>{const b=o<L.length-1?o+1:0;A(b),w(0),G("⏭️ Next",`Piste suivante: ${L[b].title}`)},seekbackward:b=>{const h=b.seekOffset||10,P=Math.max(0,j-h);w(P),G("⏪ Seek Back",`Retour de ${h}s`)},seekforward:b=>{const h=b.seekOffset||10,P=Math.min(q,j+h);w(P),G("⏩ Seek Forward",`Avance de ${h}s`)},seekto:b=>{b.seekTime!==void 0&&(w(b.seekTime),G("🎯 Seek To",`Position: ${Math.round(b.seekTime)}s`))},stop:()=>{g(!1),w(0),G("⏹️ Stop","Lecture arrêtée via contrôles système")}};return Object.entries(Q).forEach(([b,h])=>{try{navigator.mediaSession.setActionHandler(b,h)}catch(P){console.log(`Action ${b} non supportée:`,P)}}),()=>{Object.keys(Q).forEach(b=>{try{navigator.mediaSession.setActionHandler(b,null)}catch{}})}},[o,j,q,u]),v.useEffect(()=>{u&&navigator.mediaSession.setPositionState({duration:q,playbackRate:1,position:j})},[j,q,u]),v.useEffect(()=>{if(!M)return;const k=setInterval(()=>{w(Q=>{if(Q>=q){const b=o<L.length-1?o+1:0;return A(b),G("🔄 Auto Next",`Piste suivante automatique: ${L[b].title}`),0}return Q+1})},1e3);return()=>clearInterval(k)},[M,q,o,L]);const Z=()=>{const k=!M;g(k),G(k?"▶️ Play":"⏸️ Pause","Action depuis l'interface web")},O=()=>{const k=o>0?o-1:L.length-1;A(k),w(0),G("⏮️ Previous",`Interface web: ${L[k].title}`)},I=()=>{const k=o<L.length-1?o+1:0;A(k),w(0),G("⏭️ Next",`Interface web: ${L[k].title}`)},E=k=>{w(k),G("🎯 Seek",`Position: ${Math.round(k)}s`)},Y=k=>{const Q=Math.floor(k/60),b=Math.floor(k%60);return`${Q}:${b.toString().padStart(2,"0")}`},J=()=>{_([])};if(!u)return a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🎬 Media Session API"}),a.jsx("p",{className:"demo-description",children:"Contrôles média système intégrés."})]}),a.jsx("div",{className:"demo-section",children:a.jsx("div",{className:"status-indicator offline",children:"❌ Media Session API non supportée"})})]});const B=L[o];return a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🎬 Media Session API"}),a.jsx("p",{className:"demo-description",children:"Intégrez vos contrôles média avec le système. Affichez les métadonnées dans les notifications et contrôlez depuis les raccourcis clavier."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Lecteur Média"}),a.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2rem"},children:[a.jsx("div",{style:{marginBottom:"1rem"},children:a.jsx("img",{src:"/placeholder.svg?height=200&width=200",alt:"Album artwork",style:{width:"200px",height:"200px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}})}),a.jsx("h3",{style:{margin:"0.5rem 0",fontSize:"1.5rem"},children:B.title}),a.jsx("p",{style:{margin:"0.5rem 0",color:"#666"},children:B.artist}),a.jsx("p",{style:{margin:"0.5rem 0",color:"#888",fontSize:"0.9rem"},children:B.album}),a.jsx("div",{style:{margin:"1.5rem 0"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:Y(j)}),a.jsx("input",{type:"range",min:"0",max:q,value:j,onChange:k=>E(Number(k.target.value)),style:{flex:1}}),a.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:Y(q)})]})}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"1rem"},children:[a.jsx("button",{className:"btn",onClick:O,style:{fontSize:"1.2rem"},children:"⏮️"}),a.jsx("button",{className:`btn ${M?"danger":"success"}`,onClick:Z,style:{fontSize:"1.2rem",width:"60px"},children:M?"⏸️":"▶️"}),a.jsx("button",{className:"btn",onClick:I,style:{fontSize:"1.2rem"},children:"⏭️"})]}),a.jsxs("div",{style:{marginTop:"1.5rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:"🔈"}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:f,onChange:k=>R(Number(k.target.value)),style:{width:"100px"}}),a.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:"🔊"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles Système"}),a.jsx("div",{className:"demo-output",children:`🎮 Contrôles disponibles:
- ▶️/⏸️ Play/Pause: Contrôles système, raccourcis média
- ⏮️/⏭️ Précédent/Suivant: Boutons physiques, notifications
- ⏪/⏩ Retour/Avance rapide: Raccourcis clavier
- 🎯 Seek: Barre de progression système

📱 Où les trouver:
- Centre de contrôle iOS/Android
- Écran de verrouillage
- Barre des tâches Windows/macOS
- Notifications système
- Raccourcis clavier média

💡 Conseil: Testez avec les touches média de votre clavier ou le centre de contrôle de votre appareil mobile`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Actions"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:J,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:D.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):D.map(k=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:k.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[k.details," | ",k.timestamp]})]},k.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎵 Streaming Audio"}),a.jsx("p",{children:"Contrôles système pour services de musique"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎞️ Vidéo"}),a.jsx("p",{children:"Contrôle de lecture vidéo depuis le système"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎙️ Podcasts"}),a.jsx("p",{children:"Navigation facile dans les épisodes"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📚 Audiobooks"}),a.jsx("p",{children:"Contrôle de la narration depuis l'écran de verrouillage"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]})}function pp(){const u=v.useRef(null),[M,g]=v.useState(!1),[o,A]=v.useState(!1),[j,w]=v.useState(!1),[q,x]=v.useState([]),[f,R]=v.useState("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"),[D,_]=v.useState(!1);v.useEffect(()=>{const Y=document.pictureInPictureEnabled||document.pictureInPictureElement!==void 0||"pictureInPictureEnabled"in document;g(Y)},[]),v.useEffect(()=>{const Y=u.current;if(!Y)return;const J=()=>w(!0),B=()=>w(!1),k=()=>{A(!0),L("✅ Entrée","Mode Picture-in-Picture activé")},Q=()=>{A(!1),L("❌ Sortie","Mode Picture-in-Picture désactivé")};return Y.addEventListener("play",J),Y.addEventListener("pause",B),Y.addEventListener("enterpictureinpicture",k),Y.addEventListener("leavepictureinpicture",Q),()=>{Y.removeEventListener("play",J),Y.removeEventListener("pause",B),Y.removeEventListener("enterpictureinpicture",k),Y.removeEventListener("leavepictureinpicture",Q)}},[]);const L=(Y,J)=>{x(B=>[{id:Date.now(),action:Y,details:J,timestamp:new Date().toLocaleTimeString()},...B.slice(0,9)])},G=async()=>{try{document.pictureInPictureElement?(await document.exitPictureInPicture(),L("🔄 Action","Sortie manuelle du mode PiP")):u.current&&(await u.current.requestPictureInPicture(),L("🔄 Action","Entrée manuelle en mode PiP"))}catch(Y){L("❌ Erreur",`PiP échoué: ${Y.message}`)}},Z=()=>{const Y=u.current;Y&&(Y.paused?(Y.play(),L("▶️ Lecture","Vidéo démarrée")):(Y.pause(),L("⏸️ Pause","Vidéo mise en pause")))},O=Y=>{const J=u.current;if(!J)return;const B=!J.paused;R(Y),L("🎞️ Source",`Changement de vidéo: ${Y.split("/").pop()}`),B&&(J.onloadeddata=()=>{J.play(),J.onloadeddata=null})},I=()=>{x([])},E=()=>{_(Y=>!Y),L("🎛️ Contrôles",D?"Contrôles standards activés":"Contrôles personnalisés activés")};return M?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📺 Picture-in-Picture API"}),a.jsx("p",{className:"demo-description",children:"Affichez une vidéo dans une fenêtre flottante qui reste visible même en naviguant sur d'autres onglets ou applications."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Lecteur Vidéo"}),a.jsxs("div",{style:{position:"relative",borderRadius:"8px",overflow:"hidden"},children:[a.jsx("video",{ref:u,src:f,style:{width:"100%",borderRadius:"8px"},controls:!D,controlsList:"nodownload",poster:"/placeholder.svg?height=400&width=800"}),D&&a.jsxs("div",{style:{position:"absolute",bottom:"0",left:"0",right:"0",padding:"1rem",background:"linear-gradient(transparent, rgba(0,0,0,0.7))",display:"flex",justifyContent:"center",gap:"1rem"},children:[a.jsx("button",{className:"btn",onClick:Z,style:{backgroundColor:"rgba(255,255,255,0.2)"},children:j?"⏸️":"▶️"}),a.jsx("button",{className:"btn",onClick:G,style:{backgroundColor:"rgba(255,255,255,0.2)"},children:o?"📺 Quitter PiP":"📺 Activer PiP"})]})]}),a.jsxs("div",{className:"demo-controls",style:{marginTop:"1rem"},children:[a.jsx("button",{className:`btn ${o?"danger":"success"}`,onClick:G,children:o?"📺 Quitter PiP":"📺 Activer PiP"}),a.jsx("button",{className:`btn ${j?"danger":"success"}`,onClick:Z,children:j?"⏸️ Pause":"▶️ Lecture"}),a.jsxs("button",{className:`btn ${D?"success":"warning"}`,onClick:E,children:["🎛️ ",D?"Contrôles Standards":"Contrôles Personnalisés"]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Sources Vidéo"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:()=>O("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"),children:"🎬 Big Buck Bunny"}),a.jsx("button",{className:"btn",onClick:()=>O("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"),children:"🎬 Elephants Dream"}),a.jsx("button",{className:"btn",onClick:()=>O("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"),children:"🎬 Tears of Steel"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État Actuel"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Mode PiP"}),a.jsx("div",{className:`status-indicator ${o?"online":"offline"}`,children:o?"✅ Actif":"❌ Inactif"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"▶️ Lecture"}),a.jsx("div",{className:`status-indicator ${j?"loading":"offline"}`,children:j?"▶️ En cours":"⏸️ En pause"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎛️ Contrôles"}),a.jsx("p",{children:D?"Personnalisés":"Standards"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:I,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:q.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):q.map(Y=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:Y.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[Y.details," | ",Y.timestamp]})]},Y.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités Avancées"}),a.jsx("div",{className:"demo-output",children:`📺 Capacités du mode PiP:
- Reste visible lors du changement d'onglet
- Fenêtre redimensionnable par l'utilisateur
- Contrôles de lecture intégrés
- Personnalisation possible des contrôles

🎛️ Contrôles personnalisés:
- Ajout de boutons personnalisés
- Styles et disposition sur mesure
- Intégration avec d'autres APIs
- Réponse aux événements spécifiques

💡 Conseils d'utilisation:
- Testez en changeant d'onglet ou d'application
- Essayez de redimensionner la fenêtre PiP
- Vérifiez le comportement sur différents OS
- Utilisez avec des vidéos de conférence ou tutoriels`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📹 Vidéoconférence"}),a.jsx("p",{children:"Garder la vidéo visible pendant la prise de notes"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎓 E-learning"}),a.jsx("p",{children:"Suivre un tutoriel tout en pratiquant"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎬 Streaming"}),a.jsx("p",{children:"Regarder une vidéo tout en naviguant"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Gaming"}),a.jsx("p",{children:"Suivre un stream tout en jouant"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📺 Picture-in-Picture API"}),a.jsx("p",{className:"demo-description",children:"Lecture vidéo en fenêtre flottante."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Picture-in-Picture API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API est supportée sur la plupart des navigateurs modernes, mais pas sur ce navigateur."})]})]})}function gp(){const u=v.useRef(null),M=v.useRef(null),g=v.useRef(null),[o,A]=v.useState(!1),[j,w]=v.useState(!1),[q,x]=v.useState(null),[f,R]=v.useState([]);v.useEffect(()=>{const O=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;A(O);const I=()=>{const E=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;if(w(!!E),E){let Y="inconnu";E===u.current?Y="conteneur":E===M.current?Y="vidéo":E===g.current&&(Y="image"),x(Y),D("✅ Entrée",`Mode plein écran activé (${Y})`)}else x(null),D("❌ Sortie","Mode plein écran désactivé")};return document.addEventListener("fullscreenchange",I),document.addEventListener("webkitfullscreenchange",I),document.addEventListener("mozfullscreenchange",I),document.addEventListener("MSFullscreenChange",I),()=>{document.removeEventListener("fullscreenchange",I),document.removeEventListener("webkitfullscreenchange",I),document.removeEventListener("mozfullscreenchange",I),document.removeEventListener("MSFullscreenChange",I)}},[]);const D=(O,I)=>{R(E=>[{id:Date.now(),action:O,details:I,timestamp:new Date().toLocaleTimeString()},...E.slice(0,9)])},_=O=>{if(O)try{O.requestFullscreen?O.requestFullscreen():O.webkitRequestFullscreen?O.webkitRequestFullscreen():O.mozRequestFullScreen?O.mozRequestFullScreen():O.msRequestFullscreen&&O.msRequestFullscreen(),D("🔄 Action",`Demande de plein écran pour ${O.tagName.toLowerCase()}`)}catch(I){D("❌ Erreur",`Plein écran échoué: ${I.message}`)}},L=()=>{try{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),D("🔄 Action","Sortie manuelle du plein écran")}catch(O){D("❌ Erreur",`Sortie échouée: ${O.message}`)}},G=O=>{j?L():_(O)},Z=()=>{R([])};return o?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"⛶ Fullscreen API"}),a.jsx("p",{className:"demo-description",children:"Affichez n'importe quel élément en plein écran. Créez des présentations, galeries et expériences immersives."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État Actuel"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Mode Plein Écran"}),a.jsx("div",{className:`status-indicator ${j?"online":"offline"}`,children:j?"✅ Actif":"❌ Inactif"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎯 Élément Actif"}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:j?q:"Aucun"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Conteneur Personnalisé"}),a.jsxs("div",{ref:u,style:{position:"relative",padding:"2rem",backgroundColor:"#f8f9fa",borderRadius:"12px",border:"2px solid #ddd",textAlign:"center"},children:[a.jsx("h4",{children:"Conteneur avec Contenu Personnalisé"}),a.jsx("p",{children:"Ce conteneur entier peut être affiché en plein écran."}),a.jsx("p",{children:"En mode plein écran, tous les éléments à l'intérieur seront visibles."}),a.jsx("div",{style:{marginTop:"1rem"},children:a.jsx("button",{className:"btn success",onClick:()=>G(u.current),children:j&&q==="conteneur"?"❌ Quitter Plein Écran":"⛶ Plein Écran"})})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Éléments Multimédias"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎬 Vidéo"}),a.jsx("video",{ref:M,src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",style:{width:"100%",borderRadius:"8px",marginBottom:"1rem"},controls:!0,controlsList:"nodownload",poster:"/placeholder.svg?height=200&width=400"}),a.jsx("button",{className:"btn",onClick:()=>G(M.current),children:"⛶ Plein Écran Vidéo"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🖼️ Image"}),a.jsx("img",{ref:g,src:"/placeholder.svg?height=200&width=400",alt:"Image de démonstration",style:{width:"100%",borderRadius:"8px",marginBottom:"1rem"}}),a.jsx("button",{className:"btn",onClick:()=>G(g.current),children:"⛶ Plein Écran Image"})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles Globaux"}),a.jsxs("div",{className:"demo-controls",children:[j?a.jsx("button",{className:"btn danger",onClick:L,children:"❌ Quitter le Mode Plein Écran"}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn success",onClick:()=>_(u.current),children:"⛶ Conteneur en Plein Écran"}),a.jsx("button",{className:"btn",onClick:()=>_(M.current),children:"⛶ Vidéo en Plein Écran"}),a.jsx("button",{className:"btn",onClick:()=>_(g.current),children:"⛶ Image en Plein Écran"})]}),a.jsx("button",{className:"btn",onClick:Z,children:"🗑️ Effacer Historique"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:f.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):f.map(O=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:O.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[O.details," | ",O.timestamp]})]},O.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités et Limitations"}),a.jsx("div",{className:"demo-output",children:`⛶ Capacités du mode plein écran:
- Affichage de n'importe quel élément HTML
- Contrôle programmatique (entrée/sortie)
- Détection des changements d'état
- Styles CSS spécifiques au plein écran

🔒 Restrictions de sécurité:
- Doit être déclenché par une action utilisateur
- Certains éléments peuvent être bloqués (iframes)
- Peut nécessiter des permissions
- Comportement différent selon les navigateurs

💡 Conseils d'utilisation:
- Utilisez ::backdrop pour styliser l'arrière-plan
- Gérez l'orientation sur mobile
- Proposez toujours une sortie facile
- Testez sur différents navigateurs`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux"}),a.jsx("p",{children:"Expérience immersive sans distractions"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Présentations"}),a.jsx("p",{children:"Diaporamas et présentations professionnelles"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🖼️ Galeries"}),a.jsx("p",{children:"Visualisation d'images en plein écran"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Applications"}),a.jsx("p",{children:"Mode immersif pour applications web"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"⛶ Fullscreen API"}),a.jsx("p",{className:"demo-description",children:"Affichage en plein écran."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Fullscreen API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API n'est pas supportée sur ce navigateur ou est désactivée."})]})]})}function vp(){const u=v.useRef(null),M=v.useRef(null),[g,o]=v.useState(!1),[A,j]=v.useState(!1),[w,q]=v.useState({x:0,y:0}),[x,f]=v.useState({x:0,y:0}),[R,D]=v.useState([]),[_,L]=v.useState(!1),[G,Z]=v.useState(0),[O,I]=v.useState([]);v.useEffect(()=>{const b="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document;o(b)},[]),v.useEffect(()=>{if(!g)return;const b=()=>{const ee=(document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement)===u.current;j(ee),ee?(E("✅ Verrouillé","Pointeur verrouillé sur le canvas"),_||B()):(E("❌ Déverrouillé","Pointeur libéré"),_&&k())},h=()=>{E("❌ Erreur","Impossible de verrouiller le pointeur"),j(!1)};return document.addEventListener("pointerlockchange",b),document.addEventListener("mozpointerlockchange",b),document.addEventListener("webkitpointerlockchange",b),document.addEventListener("pointerlockerror",h),document.addEventListener("mozpointerlockerror",h),document.addEventListener("webkitpointerlockerror",h),()=>{document.removeEventListener("pointerlockchange",b),document.removeEventListener("mozpointerlockchange",b),document.removeEventListener("webkitpointerlockchange",b),document.removeEventListener("pointerlockerror",h),document.removeEventListener("mozpointerlockerror",h),document.removeEventListener("webkitpointerlockerror",h)}},[g,_]),v.useEffect(()=>{if(!A)return;const b=h=>{const P=h.movementX||h.mozMovementX||h.webkitMovementX||0,ee=h.movementY||h.mozMovementY||h.webkitMovementY||0;f({x:P,y:ee}),q(W=>{const te=u.current;if(!te)return W;const xe=Math.max(0,Math.min(te.width,W.x+P)),me=Math.max(0,Math.min(te.height,W.y+ee));return{x:xe,y:me}})};return document.addEventListener("mousemove",b),()=>{document.removeEventListener("mousemove",b)}},[A]),v.useEffect(()=>{const b=u.current;if(!b)return;const h=b.getContext("2d");if(!h)return;const P=()=>{const te=M.current;te&&(b.width=te.clientWidth,b.height=400,q({x:b.width/2,y:b.height/2}))};P(),window.addEventListener("resize",P);const ee=()=>{h.clearRect(0,0,b.width,b.height),h.fillStyle="#f8f9fa",h.fillRect(0,0,b.width,b.height),O.forEach(te=>{h.fillStyle=te.color,h.beginPath(),h.arc(te.x,te.y,te.radius,0,Math.PI*2),h.fill()}),A&&(h.fillStyle="#4CAF50",h.beginPath(),h.arc(w.x,w.y,10,0,Math.PI*2),h.fill(),h.strokeStyle="#000",h.lineWidth=2,h.beginPath(),h.moveTo(w.x-15,w.y),h.lineTo(w.x+15,w.y),h.moveTo(w.x,w.y-15),h.lineTo(w.x,w.y+15),h.stroke()),_&&(h.fillStyle="#000",h.font="20px Arial",h.textAlign="left",h.fillText(`Score: ${G}`,20,30)),A||(h.fillStyle="#000",h.font="20px Arial",h.textAlign="center",h.fillText("Cliquez pour verrouiller le pointeur et commencer",b.width/2,b.height/2)),requestAnimationFrame(ee)},W=requestAnimationFrame(ee);return()=>{window.removeEventListener("resize",P),cancelAnimationFrame(W)}},[A,w,O,_,G]),v.useEffect(()=>{if(!_)return;const b=()=>{const W=O.filter(te=>{const xe=te.x-w.x,me=te.y-w.y;return Math.sqrt(xe*xe+me*me)<te.radius+10?(Z($=>$+te.points),E("🎯 Cible",`+${te.points} points`),!1):!0});I(W)},h=()=>{const W=u.current;if(!W)return;const te=Math.random()*20+10,xe=Math.random()*(W.width-te*2)+te,me=Math.random()*(W.height-te*2)+te;let T,$;te<15?(T="#f44336",$=10):te<25?(T="#FF9800",$=5):(T="#4CAF50",$=2),I(ne=>[...ne,{x:xe,y:me,radius:te,color:T,points:$}])},P=setInterval(b,100),ee=setInterval(h,1e3);return()=>{clearInterval(P),clearInterval(ee)}},[_,w,O]);const E=(b,h)=>{D(P=>[{id:Date.now(),action:b,details:h,timestamp:new Date().toLocaleTimeString()},...P.slice(0,9)])},Y=()=>{const b=u.current;if(b)try{b.requestPointerLock?b.requestPointerLock():b.mozRequestPointerLock?b.mozRequestPointerLock():b.webkitRequestPointerLock&&b.webkitRequestPointerLock(),E("🔄 Action","Demande de verrouillage du pointeur")}catch(h){E("❌ Erreur",`Verrouillage échoué: ${h.message}`)}},J=()=>{try{document.exitPointerLock?document.exitPointerLock():document.mozExitPointerLock?document.mozExitPointerLock():document.webkitExitPointerLock&&document.webkitExitPointerLock(),E("🔄 Action","Sortie manuelle du verrouillage")}catch(b){E("❌ Erreur",`Sortie échouée: ${b.message}`)}},B=()=>{L(!0),Z(0),I([]),E("🎮 Jeu","Démarrage du jeu")},k=()=>{L(!1),E("🎮 Jeu",`Fin du jeu - Score final: ${G}`)},Q=()=>{D([])};return g?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🖱️ Pointer Lock API"}),a.jsx("p",{className:"demo-description",children:"Verrouillez le pointeur de la souris pour les jeux et applications immersives. Contrôlez la caméra sans limites de mouvement."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Zone de Démonstration"}),a.jsxs("div",{ref:M,style:{position:"relative",borderRadius:"12px",overflow:"hidden",border:"2px solid #ddd"},children:[a.jsx("canvas",{ref:u,onClick:A?void 0:Y,style:{display:"block",cursor:A?"none":"pointer"}}),_&&a.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"rgba(255, 255, 255, 0.7)",padding:"5px 10px",borderRadius:"4px"},children:a.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"Échap pour quitter"})})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État Actuel"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔒 Verrouillage"}),a.jsx("div",{className:`status-indicator ${A?"online":"offline"}`,children:A?"✅ Verrouillé":"❌ Déverrouillé"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeu"}),a.jsx("div",{className:`status-indicator ${_?"loading":"offline"}`,children:_?"🎮 En cours":"⏸️ Inactif"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🏆 Score"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#4CAF50"},children:G})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Données du Pointeur"}),a.jsxs("div",{className:"grid grid-2",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📍 Position"}),a.jsxs("p",{children:["X: ",Math.round(w.x)]}),a.jsxs("p",{children:["Y: ",Math.round(w.y)]})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Mouvement"}),a.jsxs("p",{children:["ΔX: ",x.x]}),a.jsxs("p",{children:["ΔY: ",x.y]})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Contrôles"}),a.jsxs("div",{className:"demo-controls",children:[A?a.jsx("button",{className:"btn danger",onClick:J,children:"🔓 Déverrouiller Pointeur"}):a.jsx("button",{className:"btn success",onClick:Y,children:"🔒 Verrouiller Pointeur"}),a.jsx("button",{className:"btn",onClick:Q,children:"🗑️ Effacer Historique"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Instructions du Jeu"}),a.jsx("div",{className:"demo-output",children:`🎯 Objectif:
- Cliquez sur le canvas pour verrouiller le pointeur
- Déplacez la souris pour viser les cibles
- Touchez les cibles pour marquer des points
- Appuyez sur Échap pour quitter

💰 Points:
- Petites cibles rouges: 10 points
- Cibles moyennes orange: 5 points
- Grandes cibles vertes: 2 points`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa"},children:R.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):R.map(b=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:"#fff",border:"1px solid #ddd",animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:b.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[b.details," | ",b.timestamp]})]},b.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités et Limitations"}),a.jsx("div",{className:"demo-output",children:`🖱️ Capacités du verrouillage de pointeur:
- Mouvements illimités de la souris
- Accès aux données de mouvement brutes
- Masquage du curseur système
- Contrôle total de l'expérience utilisateur

🔒 Restrictions de sécurité:
- Doit être déclenché par une action utilisateur
- L'utilisateur peut toujours quitter avec Échap
- Nécessite HTTPS sur certains navigateurs
- Permissions requises sur certains systèmes

💡 Conseils d'utilisation:
- Fournir des instructions claires
- Indiquer comment quitter le mode
- Gérer les différences entre navigateurs
- Combiner avec Fullscreen API pour immersion totale`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Jeux FPS"}),a.jsx("p",{children:"Contrôle de caméra à la souris sans limites"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🌐 3D/VR"}),a.jsx("p",{children:"Navigation dans des environnements virtuels"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎨 Créatif"}),a.jsx("p",{children:"Outils de dessin et modélisation précis"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎬 Simulateurs"}),a.jsx("p",{children:"Contrôles réalistes pour simulateurs"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"🖱️ Pointer Lock API"}),a.jsx("p",{className:"demo-description",children:"Verrouillage du pointeur de la souris."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Pointer Lock API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API n'est pas supportée sur ce navigateur ou est désactivée."})]})]})}function xp(){const u=v.useRef(null),M=v.useRef(null),[g]=v.useState("mediaDevices"in navigator&&"getDisplayMedia"in navigator.mediaDevices),[o,A]=v.useState(!1),[j,w]=v.useState(null),[q,x]=v.useState([]),[f,R]=v.useState([]),[D,_]=v.useState(null),[L,G]=v.useState(!1),[Z,O]=v.useState({width:0,height:0,frameRate:0});v.useEffect(()=>()=>{D&&D.getTracks().forEach(h=>h.stop())},[D]);const I=(h,P,ee="info")=>{x(W=>[{id:Date.now(),action:h,details:P,status:ee,timestamp:new Date().toLocaleTimeString()},...W.slice(0,9)])},E=async h=>{if(!g){I("❌ Erreur","Screen Capture API non supportée","error");return}try{D&&D.getTracks().forEach(te=>te.stop());const P={video:{cursor:"always"},audio:L};h==="screen"?P.video.displaySurface="monitor":h==="window"?P.video.displaySurface="window":h==="tab"&&(P.video.displaySurface="browser");const ee=await navigator.mediaDevices.getDisplayMedia(P);_(ee);const W=u.current;W.srcObject=ee,W.onloadedmetadata=()=>{W.play();const xe=ee.getVideoTracks()[0].getSettings();O({width:xe.width||0,height:xe.height||0,frameRate:xe.frameRate||0})},ee.getVideoTracks()[0].onended=()=>{Y()},A(!0),w(h),I("✅ Démarré",`Capture ${h} démarrée`,"success")}catch(P){P.name==="NotAllowedError"?I("❌ Refusé","Permission refusée par l'utilisateur","error"):I("❌ Erreur",`Capture échouée: ${P.message}`,"error")}},Y=()=>{D&&(D.getTracks().forEach(h=>h.stop()),_(null)),u.current&&(u.current.srcObject=null),A(!1),w(null),O({width:0,height:0,frameRate:0}),I("⏹️ Arrêté","Capture arrêtée","info")},J=()=>{if(!o||!u.current){I("❌ Erreur","Impossible de prendre une capture d'écran","error");return}const h=u.current,P=M.current;P.width=h.videoWidth,P.height=h.videoHeight,P.getContext("2d").drawImage(h,0,0,P.width,P.height);try{const W=P.toDataURL("image/png");R(te=>[{id:Date.now(),dataUrl:W,timestamp:new Date().toLocaleTimeString(),width:P.width,height:P.height},...te.slice(0,4)]),I("📸 Capture",`Screenshot ${P.width}x${P.height} pris`,"success")}catch(W){I("❌ Erreur",`Capture échouée: ${W.message}`,"error")}},B=(h,P)=>{const ee=document.createElement("a");ee.href=h,ee.download=`screenshot-${Date.now()}.png`,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),I("💾 Téléchargement",`Screenshot ${P+1} téléchargé`,"info")},k=()=>{x([])},Q=()=>{R([]),I("🗑️ Nettoyage","Captures d'écran effacées","info")},b=()=>{G(h=>!h),I("🔊 Audio",L?"Audio désactivé":"Audio activé","info")};return g?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📹 Screen Capture API"}),a.jsx("p",{className:"demo-description",children:"Capturez l'écran, une fenêtre ou un onglet spécifique. Idéal pour les enregistrements, tutoriels et partages d'écran."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Options de Capture"}),a.jsx("div",{className:"demo-controls",children:o?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn danger",onClick:Y,children:"⏹️ Arrêter Capture"}),a.jsx("button",{className:"btn",onClick:J,children:"📸 Prendre Screenshot"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn success",onClick:()=>E("screen"),children:"🖥️ Capturer Écran"}),a.jsx("button",{className:"btn success",onClick:()=>E("window"),children:"🪟 Capturer Fenêtre"}),a.jsx("button",{className:"btn success",onClick:()=>E("tab"),children:"📑 Capturer Onglet"}),a.jsx("button",{className:`btn ${L?"warning":""}`,onClick:b,children:L?"🔊 Audio Activé":"🔇 Audio Désactivé"})]})})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État Actuel"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Statut"}),a.jsx("div",{className:`status-indicator ${o?"loading":"offline"}`,children:o?"📹 En cours":"⏹️ Arrêté"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎯 Type"}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#667eea"},children:j?`${j.charAt(0).toUpperCase()+j.slice(1)}`:"Aucun"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔊 Audio"}),a.jsx("p",{children:L?"Activé":"Désactivé"})]})]})]}),o&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Aperçu de Capture"}),a.jsxs("div",{style:{position:"relative",borderRadius:"8px",overflow:"hidden",border:"2px solid #ddd",backgroundColor:"#000"},children:[a.jsx("video",{ref:u,style:{width:"100%",maxHeight:"400px",objectFit:"contain"},muted:!0}),a.jsxs("div",{style:{position:"absolute",bottom:"10px",right:"10px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"#fff",padding:"5px 10px",borderRadius:"4px",fontSize:"0.8rem"},children:[Z.width,"x",Z.height," @ ",Z.frameRate.toFixed(1)," FPS"]})]}),a.jsx("canvas",{ref:M,style:{display:"none"}})]}),f.length>0&&a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Captures d'Écran"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:Q,children:"🗑️ Effacer Captures"})}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"1rem",marginTop:"1rem"},children:f.map((h,P)=>a.jsxs("div",{style:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",backgroundColor:"#fff"},children:[a.jsx("img",{src:h.dataUrl||"/placeholder.svg",alt:`Capture d'écran ${P+1}`,style:{width:"100%",height:"150px",objectFit:"cover"}}),a.jsxs("div",{style:{padding:"0.5rem"},children:[a.jsxs("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"#666"},children:[h.width,"x",h.height," | ",h.timestamp]}),a.jsx("button",{className:"btn",onClick:()=>B(h.dataUrl,P),style:{width:"100%",fontSize:"0.8rem"},children:"💾 Télécharger"})]})]},h.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Événements"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:k,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:q.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):q.map(h=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:h.status==="success"?"#e8f5e8":h.status==="error"?"#ffebee":h.status==="warning"?"#fff3e0":"#fff",border:`1px solid ${h.status==="success"?"#c8e6c8":h.status==="error"?"#ffcdd2":h.status==="warning"?"#ffcc02":"#ddd"}`,animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:h.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[h.details," | ",h.timestamp]})]},h.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités et Limitations"}),a.jsx("div",{className:"demo-output",children:`📹 Capacités de capture:
- Écran entier (un ou plusieurs moniteurs)
- Fenêtre spécifique d'application
- Onglet de navigateur
- Capture avec ou sans audio
- Contrôle du curseur et des animations

🔒 Restrictions de sécurité:
- Nécessite une permission explicite de l'utilisateur
- Fonctionne uniquement en HTTPS
- Indicateur de partage toujours visible
- Certains contenus protégés peuvent être bloqués (DRM)

💡 Conseils d'utilisation:
- Gérer les différentes résolutions d'écran
- Optimiser la qualité/performance selon les cas
- Proposer des options de capture adaptées
- Combiner avec MediaRecorder pour l'enregistrement`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎓 Tutoriels"}),a.jsx("p",{children:"Création de guides et démonstrations"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"👥 Collaboration"}),a.jsx("p",{children:"Partage d'écran pour travail à distance"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🎮 Gaming"}),a.jsx("p",{children:"Streaming et enregistrement de gameplay"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🐞 Support"}),a.jsx("p",{children:"Assistance technique avec visualisation"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"📹 Screen Capture API"}),a.jsx("p",{className:"demo-description",children:"Capture d'écran et enregistrement."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ Screen Capture API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API nécessite un navigateur moderne et HTTPS."})]})]})}function yp(){const[u]=v.useState("indexedDB"in window),[M,g]=v.useState(!1),[o]=v.useState("DemoDB"),[A]=v.useState(1),[j,w]=v.useState([]),[q,x]=v.useState([]),[f,R]=v.useState({title:"",content:"",color:"#ffffff"}),[D,_]=v.useState(""),[L,G]=v.useState({count:0,size:0});v.useEffect(()=>{if(!u)return;(()=>{const P=indexedDB.open(o,A);P.onerror=ee=>{Z("❌ Erreur",`Impossible d'ouvrir la base de données: ${ee.target.error}`,"error")},P.onsuccess=ee=>{Z("✅ Succès",`Base de données "${o}" ouverte`,"success"),g(!0),O()},P.onupgradeneeded=ee=>{const W=ee.target.result;if(!W.objectStoreNames.contains("notes")){const te=W.createObjectStore("notes",{keyPath:"id",autoIncrement:!0});te.createIndex("title","title",{unique:!1}),te.createIndex("content","content",{unique:!1}),te.createIndex("timestamp","timestamp",{unique:!1}),Z("🔄 Mise à jour",`Schéma de base de données créé (v${A})`,"info")}}})()},[u,o,A]);const Z=(h,P,ee="info")=>{w(W=>[{id:Date.now(),action:h,details:P,status:ee,timestamp:new Date().toLocaleTimeString()},...W.slice(0,19)])},O=(h="")=>{if(!M)return;const P=indexedDB.open(o);P.onsuccess=ee=>{const me=ee.target.result.transaction(["notes"],"readonly").objectStore("notes").getAll();me.onsuccess=()=>{let T=me.result;if(h){const ne=h.toLowerCase();T=T.filter(fe=>fe.title.toLowerCase().includes(ne)||fe.content.toLowerCase().includes(ne))}T.sort((ne,fe)=>fe.timestamp-ne.timestamp),x(T);const $=T.reduce((ne,fe)=>ne+JSON.stringify(fe).length,0);G({count:T.length,size:$}),h?Z("🔍 Recherche",`${T.length} notes trouvées pour "${h}"`,"info"):Z("📋 Chargement",`${T.length} notes chargées`,"info")},me.onerror=T=>{Z("❌ Erreur",`Chargement échoué: ${T.target.error}`,"error")}}},I=()=>{if(!M||!f.title.trim())return;const h=indexedDB.open(o);h.onsuccess=P=>{const te=P.target.result.transaction(["notes"],"readwrite").objectStore("notes"),xe={...f,timestamp:Date.now()},me=te.add(xe);me.onsuccess=()=>{Z("✅ Ajout",`Note "${xe.title}" ajoutée`,"success"),R({title:"",content:"",color:"#ffffff"}),O()},me.onerror=T=>{Z("❌ Erreur",`Ajout échoué: ${T.target.error}`,"error")}}},E=(h,P)=>{if(!M)return;const ee=indexedDB.open(o);ee.onsuccess=W=>{const T=W.target.result.transaction(["notes"],"readwrite").objectStore("notes").delete(h);T.onsuccess=()=>{Z("🗑️ Suppression",`Note "${P}" supprimée`,"warning"),O(D)},T.onerror=$=>{Z("❌ Erreur",`Suppression échouée: ${$.target.error}`,"error")}}},Y=()=>{if(!M||!confirm("Êtes-vous sûr de vouloir supprimer toutes les notes ?"))return;const h=indexedDB.open(o);h.onsuccess=P=>{const xe=P.target.result.transaction(["notes"],"readwrite").objectStore("notes").clear();xe.onsuccess=()=>{Z("🗑️ Suppression","Toutes les notes ont été supprimées","warning"),O()},xe.onerror=me=>{Z("❌ Erreur",`Suppression échouée: ${me.target.error}`,"error")}}},J=()=>{O(D)},B=()=>{_(""),O("")},k=()=>{w([])},Q=h=>h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(2)} KB`:`${(h/(1024*1024)).toFixed(2)} MB`,b=h=>new Date(h).toLocaleString();return u?a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"💾 IndexedDB API"}),a.jsx("p",{className:"demo-description",children:"Stockez et interrogez des données complexes localement. Base de données NoSQL complète dans le navigateur avec support de transactions."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"État de la Base de Données"}),a.jsxs("div",{className:"grid grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Statut"}),a.jsx("div",{className:`status-indicator ${M?"online":"offline"}`,children:M?"✅ Connecté":"❌ Déconnecté"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📝 Notes"}),a.jsx("p",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#667eea"},children:L.count})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"💾 Taille"}),a.jsx("p",{style:{fontSize:"1.1rem",fontWeight:"bold",color:"#4CAF50"},children:Q(L.size)})]})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Ajouter une Note"}),a.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"1rem",borderRadius:"8px",border:"1px solid #ddd"},children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Titre:"}),a.jsx("input",{type:"text",value:f.title,onChange:h=>R(P=>({...P,title:h.target.value})),placeholder:"Titre de la note"})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Contenu:"}),a.jsx("textarea",{value:f.content,onChange:h=>R(P=>({...P,content:h.target.value})),placeholder:"Contenu de la note",rows:3})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Couleur:"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[a.jsx("input",{type:"color",value:f.color,onChange:h=>R(P=>({...P,color:h.target.value})),style:{width:"50px",height:"30px"}}),a.jsx("span",{children:f.color})]})]}),a.jsx("button",{className:"btn success",onClick:I,disabled:!f.title.trim(),style:{marginTop:"1rem"},children:"💾 Sauvegarder Note"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Rechercher des Notes"}),a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsx("input",{type:"text",value:D,onChange:h=>_(h.target.value),placeholder:"Rechercher par titre ou contenu",style:{flex:1}}),a.jsx("button",{className:"btn",onClick:J,children:"🔍 Rechercher"}),a.jsx("button",{className:"btn",onClick:B,children:"❌ Effacer"})]})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Notes Enregistrées"}),a.jsxs("div",{className:"demo-controls",children:[a.jsx("button",{className:"btn",onClick:()=>O(),children:"🔄 Rafraîchir"}),a.jsx("button",{className:"btn danger",onClick:Y,children:"🗑️ Supprimer Tout"})]}),a.jsx("div",{style:{marginTop:"1rem"},children:q.length===0?a.jsx("div",{style:{padding:"2rem",textAlign:"center",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px dashed #ddd"},children:a.jsx("p",{style:{color:"#666",fontStyle:"italic"},children:D?"Aucune note ne correspond à votre recherche":"Aucune note enregistrée"})}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1rem"},children:q.map(h=>a.jsxs("div",{style:{backgroundColor:h.color,padding:"1rem",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",position:"relative",minHeight:"150px",display:"flex",flexDirection:"column"},children:[a.jsx("h4",{style:{margin:"0 0 0.5rem",fontSize:"1.1rem"},children:h.title}),a.jsx("p",{style:{margin:"0 0 1rem",fontSize:"0.9rem",flex:1,whiteSpace:"pre-wrap"},children:h.content}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666",borderTop:"1px solid rgba(0,0,0,0.1)",paddingTop:"0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{children:b(h.timestamp)}),a.jsx("button",{onClick:()=>E(h.id,h.title),style:{background:"none",border:"none",cursor:"pointer",color:"#f44336",fontSize:"1rem"},children:"🗑️"})]})]},h.id))})})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Historique des Opérations"}),a.jsx("div",{className:"demo-controls",children:a.jsx("button",{className:"btn danger",onClick:k,children:"🗑️ Effacer Historique"})}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",border:"2px solid #ddd",borderRadius:"12px",padding:"1rem",backgroundColor:"#f8f9fa",marginTop:"1rem"},children:j.length===0?a.jsx("p",{style:{textAlign:"center",color:"#666",fontStyle:"italic"},children:"Utilisez les contrôles pour voir l'historique"}):j.map(h=>a.jsxs("div",{style:{padding:"0.75rem",margin:"0.5rem 0",borderRadius:"8px",backgroundColor:h.status==="success"?"#e8f5e8":h.status==="error"?"#ffebee":h.status==="warning"?"#fff3e0":"#fff",border:`1px solid ${h.status==="success"?"#c8e6c8":h.status==="error"?"#ffcdd2":h.status==="warning"?"#ffcc02":"#ddd"}`,animation:"slideIn 0.3s ease"},children:[a.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:h.action}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[h.details," | ",h.timestamp]})]},h.id))})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Fonctionnalités et Capacités"}),a.jsx("div",{className:"demo-output",children:`💾 Caractéristiques d'IndexedDB:
- Stockage NoSQL orienté objet
- Capacité de stockage importante (plusieurs GB)
- Transactions ACID complètes
- Indexation et recherche avancée
- API asynchrone basée sur les événements

🔑 Concepts clés:
- Database: Container principal
- Object Store: Collection d'objets (comme une table)
- Index: Pour recherche rapide
- Transaction: Groupe d'opérations atomiques
- Cursor: Pour parcourir les résultats

💡 Avantages vs localStorage:
- Stockage structuré d'objets complexes
- Performances supérieures pour grandes quantités
- Transactions et requêtes avancées
- Meilleure gestion de la mémoire`})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("h3",{children:"Applications Pratiques"}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📱 Mode Hors-ligne"}),a.jsx("p",{children:"Applications fonctionnelles sans connexion"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"⚡ Performance"}),a.jsx("p",{children:"Cache local pour données fréquemment utilisées"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"📊 Données Utilisateur"}),a.jsx("p",{children:"Préférences et paramètres persistants"})]}),a.jsxs("div",{className:"card",children:[a.jsx("h4",{children:"🔄 Synchronisation"}),a.jsx("p",{children:"Stockage temporaire avant envoi au serveur"})]})]})]}),a.jsx("style",{jsx:!0,children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):a.jsxs("div",{children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{className:"demo-title",children:"💾 IndexedDB API"}),a.jsx("p",{className:"demo-description",children:"Base de données locale du navigateur."})]}),a.jsxs("div",{className:"demo-section",children:[a.jsx("div",{className:"status-indicator offline",children:"❌ IndexedDB API non supportée"}),a.jsx("p",{style:{marginTop:"1rem",color:"#666"},children:"Cette API n'est pas supportée sur ce navigateur."})]})]})}const ac=[{id:"resize",name:"ResizeObserver",icon:"🔍",category:"Observer"},{id:"intersection",name:"IntersectionObserver",icon:"👁️",category:"Observer"},{id:"mutation",name:"MutationObserver",icon:"🔄",category:"Observer"},{id:"performance",name:"PerformanceObserver",icon:"📊",category:"Observer"},{id:"clipboard",name:"Clipboard API",icon:"📋",category:"System"},{id:"webshare",name:"Web Share API",icon:"🌐",category:"System"},{id:"notification",name:"Notification API",icon:"🔔",category:"System"},{id:"vibration",name:"Vibration API",icon:"📳",category:"System"},{id:"idle",name:"requestIdleCallback",icon:"⚡",category:"Performance"},{id:"battery",name:"Battery Status API",icon:"🔋",category:"Device"},{id:"geolocation",name:"Geolocation API",icon:"🌍",category:"Device"},{id:"screenorientation",name:"Screen Orientation",icon:"📱",category:"Device"},{id:"networkinfo",name:"Network Information",icon:"📶",category:"Device"},{id:"devicemotion",name:"Device Motion",icon:"📲",category:"Device"},{id:"pagevisibility",name:"Page Visibility",icon:"👀",category:"Browser"},{id:"broadcast",name:"Broadcast Channel",icon:"📡",category:"Communication"},{id:"credential",name:"Credential Management",icon:"🔒",category:"Security"},{id:"webaudio",name:"Web Audio API",icon:"🎵",category:"Media"},{id:"gamepad",name:"Gamepad API",icon:"🎮",category:"Input"},{id:"speechrecognition",name:"Speech Recognition",icon:"🎤",category:"AI"},{id:"speechsynthesis",name:"Speech Synthesis",icon:"🗣️",category:"AI"},{id:"filesystem",name:"File System Access",icon:"📁",category:"Storage"},{id:"indexeddb",name:"IndexedDB",icon:"🗄️",category:"Storage"},{id:"paymentrequest",name:"Payment Request",icon:"💳",category:"Commerce"},{id:"weblocks",name:"Web Locks API",icon:"🔐",category:"Concurrency"},{id:"mediasession",name:"Media Session",icon:"🎬",category:"Media"},{id:"pictureinpicture",name:"Picture-in-Picture",icon:"📺",category:"Media"},{id:"fullscreen",name:"Fullscreen API",icon:"⛶",category:"Display"},{id:"pointerlock",name:"Pointer Lock",icon:"🖱️",category:"Input"},{id:"screencapture",name:"Screen Capture",icon:"📹",category:"Media"}],uf=["Tous","Observer","System","Performance","Device","Browser","Communication","Security","Media","Input","AI","Storage","Commerce","Concurrency","Display"];function bp(){const[u,M]=v.useState("resize"),[g,o]=v.useState("Tous"),[A,j]=v.useState(""),w=ac.filter(x=>{const f=g==="Tous"||x.category===g,R=x.name.toLowerCase().includes(A.toLowerCase());return f&&R}),q=()=>{switch(u){case"resize":return a.jsx(of,{});case"intersection":return a.jsx(Ph,{});case"clipboard":return a.jsx(Ih,{});case"webshare":return a.jsx(Qh,{});case"mutation":return a.jsx(Zh,{});case"idle":return a.jsx($h,{});case"battery":return a.jsx(Kh,{});case"performance":return a.jsx(Jh,{});case"broadcast":return a.jsx(Fh,{});case"credential":return a.jsx(Wh,{});case"geolocation":return a.jsx(ep,{});case"webaudio":return a.jsx(tp,{});case"gamepad":return a.jsx(np,{});case"notification":return a.jsx(ap,{});case"vibration":return a.jsx(ip,{});case"screenorientation":return a.jsx(sp,{});case"pagevisibility":return a.jsx(lp,{});case"networkinfo":return a.jsx(rp,{});case"devicemotion":return a.jsx(cp,{});case"speechrecognition":return a.jsx(op,{});case"speechsynthesis":return a.jsx(up,{});case"filesystem":return a.jsx(dp,{});case"paymentrequest":return a.jsx(fp,{});case"weblocks":return a.jsx(mp,{});case"mediasession":return a.jsx(hp,{});case"pictureinpicture":return a.jsx(pp,{});case"fullscreen":return a.jsx(gp,{});case"pointerlock":return a.jsx(vp,{});case"screencapture":return a.jsx(xp,{});case"indexeddb":return a.jsx(yp,{});default:return a.jsx(of,{})}};return a.jsxs("div",{className:"app",children:[a.jsx(Yh,{}),a.jsx("header",{className:"tech-header",children:a.jsxs("div",{className:"header-content",children:[a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"JS TECH APIS"}),a.jsxs("p",{className:"header-subtitle",children:["EXPLORE ",ac.length," CUTTING-EDGE WEB TECHNOLOGIES"]})]}),a.jsx("div",{className:"header-controls",children:a.jsxs("div",{className:"tech-search-box",children:[a.jsx("input",{type:"text",placeholder:"Search APIs...",value:A,onChange:x=>j(x.target.value),className:"tech-search-input"}),a.jsx("span",{className:"search-icon",children:"🔍"})]})})]})}),a.jsx("nav",{className:"tech-navbar",children:a.jsx("div",{className:"navbar-content",children:a.jsx("div",{className:"tech-category-filters",children:uf.map(x=>a.jsx("button",{className:`tech-category-btn ${g===x?"active":""}`,onClick:()=>o(x),children:x},x))})})}),a.jsx("div",{className:"tech-api-tabs",children:a.jsx("div",{className:"api-tabs-container",children:w.map(x=>a.jsxs("button",{className:`tech-api-tab ${u===x.id?"active":""}`,onClick:()=>M(x.id),title:x.name,children:[a.jsx("span",{className:"api-icon",children:x.icon}),a.jsx("span",{className:"api-name",children:x.name}),a.jsx("span",{className:"api-category",children:x.category})]},x.id))})}),a.jsx("main",{className:"tech-main-content",children:a.jsx("div",{className:"tech-demo-container",children:q()})}),a.jsx(Xh,{categories:uf,activeCategory:g,setActiveCategory:o,apis:ac,activeApi:u,setActiveApi:M})]})}Vh.createRoot(document.getElementById("root")).render(a.jsx(v.StrictMode,{children:a.jsx(bp,{})}));
