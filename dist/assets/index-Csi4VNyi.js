(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Bw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dg={exports:{}},Xc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function $N(){if(K0)return Xc;K0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return Xc.Fragment=e,Xc.jsx=t,Xc.jsxs=t,Xc}var Y0;function XN(){return Y0||(Y0=1,dg.exports=$N()),dg.exports}var v=XN(),fg={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function JN(){if(Q0)return Le;Q0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function L(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Z={};function ge(k,$,re){this.props=k,this.context=$,this.refs=Z,this.updater=re||q}ge.prototype.isReactComponent={},ge.prototype.setState=function(k,$){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,$,"setState")},ge.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _e(){}_e.prototype=ge.prototype;function de(k,$,re){this.props=k,this.context=$,this.refs=Z,this.updater=re||q}var ke=de.prototype=new _e;ke.constructor=de,J(ke,ge.prototype),ke.isPureReactComponent=!0;var Ue=Array.isArray;function Ee(){}var C={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function N(k,$,re){var ce=re.ref;return{$$typeof:n,type:k,key:$,ref:ce!==void 0?ce:null,props:re}}function x(k,$){return N(k.type,$,k.props)}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function M(k){var $={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(re){return $[re]})}var D=/\/+/g;function He(k,$){return typeof k=="object"&&k!==null&&k.key!=null?M(""+k.key):$.toString(36)}function Dt(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Ee,Ee):(k.status="pending",k.then(function($){k.status==="pending"&&(k.status="fulfilled",k.value=$)},function($){k.status==="pending"&&(k.status="rejected",k.reason=$)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function K(k,$,re,ce,Ce){var Oe=typeof k;(Oe==="undefined"||Oe==="boolean")&&(k=null);var ze=!1;if(k===null)ze=!0;else switch(Oe){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(k.$$typeof){case n:case e:ze=!0;break;case E:return ze=k._init,K(ze(k._payload),$,re,ce,Ce)}}if(ze)return Ce=Ce(k),ze=ce===""?"."+He(k,0):ce,Ue(Ce)?(re="",ze!=null&&(re=ze.replace(D,"$&/")+"/"),K(Ce,$,re,"",function(gn){return gn})):Ce!=null&&(I(Ce)&&(Ce=x(Ce,re+(Ce.key==null||k&&k.key===Ce.key?"":(""+Ce.key).replace(D,"$&/")+"/")+ze)),$.push(Ce)),1;ze=0;var ht=ce===""?".":ce+":";if(Ue(k))for(var nt=0;nt<k.length;nt++)ce=k[nt],Oe=ht+He(ce,nt),ze+=K(ce,$,re,Oe,Ce);else if(nt=L(k),typeof nt=="function")for(k=nt.call(k),nt=0;!(ce=k.next()).done;)ce=ce.value,Oe=ht+He(ce,nt++),ze+=K(ce,$,re,Oe,Ce);else if(Oe==="object"){if(typeof k.then=="function")return K(Dt(k),$,re,ce,Ce);throw $=String(k),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ze}function le(k,$,re){if(k==null)return k;var ce=[],Ce=0;return K(k,ce,"","",function(Oe){return $.call(re,Oe,Ce++)}),ce}function Te(k){if(k._status===-1){var $=k._result;$=$(),$.then(function(re){(k._status===0||k._status===-1)&&(k._status=1,k._result=re)},function(re){(k._status===0||k._status===-1)&&(k._status=2,k._result=re)}),k._status===-1&&(k._status=0,k._result=$)}if(k._status===1)return k._result.default;throw k._result}var Ae=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Xe={map:le,forEach:function(k,$,re){le(k,function(){$.apply(this,arguments)},re)},count:function(k){var $=0;return le(k,function(){$++}),$},toArray:function(k){return le(k,function($){return $})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Le.Activity=S,Le.Children=Xe,Le.Component=ge,Le.Fragment=t,Le.Profiler=a,Le.PureComponent=de,Le.StrictMode=s,Le.Suspense=p,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Le.__COMPILER_RUNTIME={__proto__:null,c:function(k){return C.H.useMemoCache(k)}},Le.cache=function(k){return function(){return k.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(k,$,re){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ce=J({},k.props),Ce=k.key;if($!=null)for(Oe in $.key!==void 0&&(Ce=""+$.key),$)!R.call($,Oe)||Oe==="key"||Oe==="__self"||Oe==="__source"||Oe==="ref"&&$.ref===void 0||(ce[Oe]=$[Oe]);var Oe=arguments.length-2;if(Oe===1)ce.children=re;else if(1<Oe){for(var ze=Array(Oe),ht=0;ht<Oe;ht++)ze[ht]=arguments[ht+2];ce.children=ze}return N(k.type,Ce,ce)},Le.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Le.createElement=function(k,$,re){var ce,Ce={},Oe=null;if($!=null)for(ce in $.key!==void 0&&(Oe=""+$.key),$)R.call($,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(Ce[ce]=$[ce]);var ze=arguments.length-2;if(ze===1)Ce.children=re;else if(1<ze){for(var ht=Array(ze),nt=0;nt<ze;nt++)ht[nt]=arguments[nt+2];Ce.children=ht}if(k&&k.defaultProps)for(ce in ze=k.defaultProps,ze)Ce[ce]===void 0&&(Ce[ce]=ze[ce]);return N(k,Oe,Ce)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(k){return{$$typeof:f,render:k}},Le.isValidElement=I,Le.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:Te}},Le.memo=function(k,$){return{$$typeof:g,type:k,compare:$===void 0?null:$}},Le.startTransition=function(k){var $=C.T,re={};C.T=re;try{var ce=k(),Ce=C.S;Ce!==null&&Ce(re,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(Ee,Ae)}catch(Oe){Ae(Oe)}finally{$!==null&&re.types!==null&&($.types=re.types),C.T=$}},Le.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Le.use=function(k){return C.H.use(k)},Le.useActionState=function(k,$,re){return C.H.useActionState(k,$,re)},Le.useCallback=function(k,$){return C.H.useCallback(k,$)},Le.useContext=function(k){return C.H.useContext(k)},Le.useDebugValue=function(){},Le.useDeferredValue=function(k,$){return C.H.useDeferredValue(k,$)},Le.useEffect=function(k,$){return C.H.useEffect(k,$)},Le.useEffectEvent=function(k){return C.H.useEffectEvent(k)},Le.useId=function(){return C.H.useId()},Le.useImperativeHandle=function(k,$,re){return C.H.useImperativeHandle(k,$,re)},Le.useInsertionEffect=function(k,$){return C.H.useInsertionEffect(k,$)},Le.useLayoutEffect=function(k,$){return C.H.useLayoutEffect(k,$)},Le.useMemo=function(k,$){return C.H.useMemo(k,$)},Le.useOptimistic=function(k,$){return C.H.useOptimistic(k,$)},Le.useReducer=function(k,$,re){return C.H.useReducer(k,$,re)},Le.useRef=function(k){return C.H.useRef(k)},Le.useState=function(k){return C.H.useState(k)},Le.useSyncExternalStore=function(k,$,re){return C.H.useSyncExternalStore(k,$,re)},Le.useTransition=function(){return C.H.useTransition()},Le.version="19.2.4",Le}var W0;function V_(){return W0||(W0=1,fg.exports=JN()),fg.exports}var ue=V_();const to=Bw(ue);var mg={exports:{}},Jc={},pg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function ZN(){return $0||($0=1,(function(n){function e(K,le){var Te=K.length;K.push(le);e:for(;0<Te;){var Ae=Te-1>>>1,Xe=K[Ae];if(0<a(Xe,le))K[Ae]=le,K[Te]=Xe,Te=Ae;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var le=K[0],Te=K.pop();if(Te!==le){K[0]=Te;e:for(var Ae=0,Xe=K.length,k=Xe>>>1;Ae<k;){var $=2*(Ae+1)-1,re=K[$],ce=$+1,Ce=K[ce];if(0>a(re,Te))ce<Xe&&0>a(Ce,re)?(K[Ae]=Ce,K[ce]=Te,Ae=ce):(K[Ae]=re,K[$]=Te,Ae=$);else if(ce<Xe&&0>a(Ce,Te))K[Ae]=Ce,K[ce]=Te,Ae=ce;else break e}}return le}function a(K,le){var Te=K.sortIndex-le.sortIndex;return Te!==0?Te:K.id-le.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var p=[],g=[],E=1,S=null,w=3,L=!1,q=!1,J=!1,Z=!1,ge=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function ke(K){for(var le=t(g);le!==null;){if(le.callback===null)s(g);else if(le.startTime<=K)s(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(g)}}function Ue(K){if(J=!1,ke(K),!q)if(t(p)!==null)q=!0,Ee||(Ee=!0,M());else{var le=t(g);le!==null&&Dt(Ue,le.startTime-K)}}var Ee=!1,C=-1,R=5,N=-1;function x(){return Z?!0:!(n.unstable_now()-N<R)}function I(){if(Z=!1,Ee){var K=n.unstable_now();N=K;var le=!0;try{e:{q=!1,J&&(J=!1,_e(C),C=-1),L=!0;var Te=w;try{t:{for(ke(K),S=t(p);S!==null&&!(S.expirationTime>K&&x());){var Ae=S.callback;if(typeof Ae=="function"){S.callback=null,w=S.priorityLevel;var Xe=Ae(S.expirationTime<=K);if(K=n.unstable_now(),typeof Xe=="function"){S.callback=Xe,ke(K),le=!0;break t}S===t(p)&&s(p),ke(K)}else s(p);S=t(p)}if(S!==null)le=!0;else{var k=t(g);k!==null&&Dt(Ue,k.startTime-K),le=!1}}break e}finally{S=null,w=Te,L=!1}le=void 0}}finally{le?M():Ee=!1}}}var M;if(typeof de=="function")M=function(){de(I)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,He=D.port2;D.port1.onmessage=I,M=function(){He.postMessage(null)}}else M=function(){ge(I,0)};function Dt(K,le){C=ge(function(){K(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(K){switch(w){case 1:case 2:case 3:var le=3;break;default:le=w}var Te=w;w=le;try{return K()}finally{w=Te}},n.unstable_requestPaint=function(){Z=!0},n.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Te=w;w=K;try{return le()}finally{w=Te}},n.unstable_scheduleCallback=function(K,le,Te){var Ae=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Ae+Te:Ae):Te=Ae,K){case 1:var Xe=-1;break;case 2:Xe=250;break;case 5:Xe=1073741823;break;case 4:Xe=1e4;break;default:Xe=5e3}return Xe=Te+Xe,K={id:E++,callback:le,priorityLevel:K,startTime:Te,expirationTime:Xe,sortIndex:-1},Te>Ae?(K.sortIndex=Te,e(g,K),t(p)===null&&K===t(g)&&(J?(_e(C),C=-1):J=!0,Dt(Ue,Te-Ae))):(K.sortIndex=Xe,e(p,K),q||L||(q=!0,Ee||(Ee=!0,M()))),K},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(K){var le=w;return function(){var Te=w;w=le;try{return K.apply(this,arguments)}finally{w=Te}}}})(gg)),gg}var X0;function e2(){return X0||(X0=1,pg.exports=ZN()),pg.exports}var _g={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function t2(){if(J0)return Ln;J0=1;var n=V_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:p,containerInfo:g,implementation:E}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,E)},Ln.flushSync=function(p){var g=u.T,E=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=g,s.p=E,s.d.f()}},Ln.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ln.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:L}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:w,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ln.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=f(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Ln.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ln.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=f(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Ln.requestFormReset=function(p){s.d.r(p)},Ln.unstable_batchedUpdates=function(p,g){return p(g)},Ln.useFormState=function(p,g,E){return u.H.useFormState(p,g,E)},Ln.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var Z0;function n2(){if(Z0)return _g.exports;Z0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),_g.exports=t2(),_g.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS;function i2(){if(eS)return Jc;eS=1;var n=e2(),e=V_(),t=n2();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function p(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),i;if(m===c)return p(d),r;m=m.sibling}throw Error(s(188))}if(o.return!==c.return)o=d,c=m;else{for(var y=!1,b=d.child;b;){if(b===o){y=!0,o=d,c=m;break}if(b===c){y=!0,c=d,o=m;break}b=b.sibling}if(!y){for(b=m.child;b;){if(b===o){y=!0,o=m,c=d;break}if(b===c){y=!0,c=m,o=d;break}b=b.sibling}if(!y)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function E(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=E(i),r!==null)return r;i=i.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),_e=Symbol.for("react.consumer"),de=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function M(i){return i===null||typeof i!="object"?null:(i=I&&i[I]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function He(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case J:return"Fragment";case ge:return"Profiler";case Z:return"StrictMode";case Ue:return"Suspense";case Ee:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case q:return"Portal";case de:return i.displayName||"Context";case _e:return(i._context.displayName||"Context")+".Consumer";case ke:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case C:return r=i.displayName||null,r!==null?r:He(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return He(i(r))}catch{}}return null}var Dt=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Ae=[],Xe=-1;function k(i){return{current:i}}function $(i){0>Xe||(i.current=Ae[Xe],Ae[Xe]=null,Xe--)}function re(i,r){Xe++,Ae[Xe]=i.current,i.current=r}var ce=k(null),Ce=k(null),Oe=k(null),ze=k(null);function ht(i,r){switch(re(Oe,r),re(Ce,i),re(ce,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?p0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=p0(r),i=g0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}$(ce),re(ce,i)}function nt(){$(ce),$(Ce),$(Oe)}function gn(i){i.memoizedState!==null&&re(ze,i);var r=ce.current,o=g0(r,i.type);r!==o&&(re(Ce,i),re(ce,o))}function $t(i){Ce.current===i&&($(ce),$(Ce)),ze.current===i&&($(ze),Yc._currentValue=Te)}var dt,se;function fe(i){if(dt===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);dt=r&&r[1]||"",se=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+i+se}var Re=!1;function Ie(i,r){if(!i||Re)return"";Re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(G){var B=G}Reflect.construct(i,[],te)}else{try{te.call()}catch(G){B=G}i.call(te.prototype)}}else{try{throw Error()}catch(G){B=G}(te=i())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(G){if(G&&B&&typeof G.stack=="string")return[G.stack,B.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),y=m[0],b=m[1];if(y&&b){var O=y.split(`
`),F=b.split(`
`);for(d=c=0;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;for(;d<F.length&&!F[d].includes("DetermineComponentFrameRoot");)d++;if(c===O.length||d===F.length)for(c=O.length-1,d=F.length-1;1<=c&&0<=d&&O[c]!==F[d];)d--;for(;1<=c&&0<=d;c--,d--)if(O[c]!==F[d]){if(c!==1||d!==1)do if(c--,d--,0>d||O[c]!==F[d]){var W=`
`+O[c].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=c&&0<=d);break}}}finally{Re=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fe(o):""}function V(i,r){switch(i.tag){case 26:case 27:case 5:return fe(i.type);case 16:return fe("Lazy");case 13:return i.child!==r&&r!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return Ie(i.type,!1);case 11:return Ie(i.type.render,!1);case 1:return Ie(i.type,!0);case 31:return fe("Activity");default:return""}}function Q(i){try{var r="",o=null;do r+=V(i,o),o=i,i=i.return;while(i);return r}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var ie=Object.prototype.hasOwnProperty,pe=n.unstable_scheduleCallback,je=n.unstable_cancelCallback,wt=n.unstable_shouldYield,At=n.unstable_requestPaint,Rt=n.unstable_now,hn=n.unstable_getCurrentPriorityLevel,ns=n.unstable_ImmediatePriority,wn=n.unstable_UserBlockingPriority,Xt=n.unstable_NormalPriority,Vt=n.unstable_LowPriority,Bn=n.unstable_IdlePriority,yi=n.log,Os=n.unstable_setDisableYieldValue,vt=null,dn=null;function Kn(i){if(typeof yi=="function"&&Os(i),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(vt,i)}catch{}}var Ut=Math.clz32?Math.clz32:Ao,kn=Math.log,gr=Math.LN2;function Ao(i){return i>>>=0,i===0?32:31-(kn(i)/gr|0)|0}var vi=256,is=262144,jt=4194304;function Y(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ve(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var d=0,m=i.suspendedLanes,y=i.pingedLanes;i=i.warmLanes;var b=c&134217727;return b!==0?(c=b&~m,c!==0?d=Y(c):(y&=b,y!==0?d=Y(y):o||(o=b&~i,o!==0&&(d=Y(o))))):(b=c&~m,b!==0?d=Y(b):y!==0?d=Y(y):o||(o=c&~i,o!==0&&(d=Y(o)))),d===0?0:r!==0&&r!==d&&(r&m)===0&&(m=d&-d,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:d}function rt(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ft(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(){var i=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),i}function ss(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Ta(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function _m(i,r,o,c,d,m){var y=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var b=i.entanglements,O=i.expirationTimes,F=i.hiddenUpdates;for(o=y&~o;0<o;){var W=31-Ut(o),te=1<<W;b[W]=0,O[W]=-1;var B=F[W];if(B!==null)for(F[W]=null,W=0;W<B.length;W++){var G=B[W];G!==null&&(G.lane&=-536870913)}o&=~te}c!==0&&Sa(i,c,0),m!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=m&~(y&~r))}function Sa(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Ut(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&261930}function Jl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-Ut(o),d=1<<c;d&r|i[c]&r&&(i[c]|=r),o&=~d}}function Zl(i,r){var o=r&-r;return o=(o&42)!==0?1:ba(o),(o&(i.suspendedLanes|r))!==0?0:o}function ba(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ms(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function oh(){var i=le.p;return i!==0?i:(i=window.event,i===void 0?32:j0(i.type))}function Vi(i,r){var o=le.p;try{return le.p=i,r()}finally{le.p=o}}var Ui=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Ui,_n="__reactProps$"+Ui,rs="__reactContainer$"+Ui,Co="__reactEvents$"+Ui,ym="__reactListeners$"+Ui,lh="__reactHandles$"+Ui,ch="__reactResources$"+Ui,as="__reactMarker$"+Ui;function Io(i){delete i[Jt],delete i[_n],delete i[Co],delete i[ym],delete i[lh]}function os(i){var r=i[Jt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[rs]||o[Jt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=b0(i);i!==null;){if(o=i[Jt])return o;i=b0(i)}return r}i=o,o=i.parentNode}return null}function Ei(i){if(i=i[Jt]||i[rs]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function oi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function ls(i){var r=i[ch];return r||(r=i[ch]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Zt(i){i[as]=!0}var ec=new Set,tc={};function cs(i,r){us(i,r),us(i+"Capture",r)}function us(i,r){for(tc[i]=r,i=0;i<r.length;i++)ec.add(r[i])}var nc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ic={},sc={};function uh(i){return ie.call(sc,i)?!0:ie.call(ic,i)?!1:nc.test(i)?sc[i]=!0:(ic[i]=!0,!1)}function Ro(i,r,o){if(uh(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function li(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function en(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}function yn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function _r(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rc(i,r,o){var c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,m=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,m.call(this,y)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function pt(i){if(!i._valueTracker){var r=_r(i)?"checked":"value";i._valueTracker=rc(i,r,""+i[r])}}function wa(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=_r(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function hs(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Aa=/[\n"\\]/g;function Yn(i){return i.replace(Aa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function No(i,r,o,c,d,m,y,b){i.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?i.type=y:i.removeAttribute("type"),r!=null?y==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+yn(r)):i.value!==""+yn(r)&&(i.value=""+yn(r)):y!=="submit"&&y!=="reset"||i.removeAttribute("value"),r!=null?ac(i,y,yn(r)):o!=null?ac(i,y,yn(o)):c!=null&&i.removeAttribute("value"),d==null&&m!=null&&(i.defaultChecked=!!m),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+yn(b):i.removeAttribute("name")}function hh(i,r,o,c,d,m,y,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){pt(i);return}o=o!=null?""+yn(o):"",r=r!=null?""+yn(r):o,b||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(i.name=y),pt(i)}function ac(i,r,o){r==="number"&&hs(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function yr(i,r,o,c){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+yn(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function dh(i,r,o){if(r!=null&&(r=""+yn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+yn(o):""}function vr(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Dt(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=yn(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c),pt(i)}function Qn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oc(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||fh.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function lc(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&o[d]!==c&&oc(i,d,c)}else for(var m in r)r.hasOwnProperty(m)&&oc(i,m,r[m])}function Do(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Er=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xo(i){return Er.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function ji(){}var cc=null;function Ti(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Tr=null,ds=null;function Ca(i){var r=Ei(i);if(r&&(i=r.stateNode)){var o=i[_n]||null;e:switch(i=r.stateNode,r.type){case"input":if(No(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Yn(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var d=c[_n]||null;if(!d)throw Error(s(90));No(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&wa(c)}break e;case"textarea":dh(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&yr(i,!!o.multiple,r,!1)}}}var Oo=!1;function Sr(i,r,o){if(Oo)return i(r,o);Oo=!0;try{var c=i(r);return c}finally{if(Oo=!1,(Tr!==null||ds!==null)&&(od(),Tr&&(r=Tr,i=ds,ds=Tr=null,Ca(r),i)))for(r=0;r<i.length;r++)Ca(i[r])}}function zi(i,r){var o=i.stateNode;if(o===null)return null;var c=o[_n]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=!1;if(Si)try{var Et={};Object.defineProperty(Et,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Et,Et),window.removeEventListener("test",Et,Et)}catch{Ia=!1}var fs=null,uc=null,Ra=null;function hc(){if(Ra)return Ra;var i,r=uc,o=r.length,c,d="value"in fs?fs.value:fs.textContent,m=d.length;for(i=0;i<o&&r[i]===d[i];i++);var y=o-i;for(c=1;c<=y&&r[o-c]===d[m-c];c++);return Ra=d.slice(i,1<c?1-c:void 0)}function Na(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function ks(){return!0}function Fi(){return!1}function An(i){function r(o,c,d,m,y){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(o=i[b],this[b]=o?o(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ks:Fi,this.isPropagationStopped=Fi,this}return S(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),r}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=An(Ps),br=S({},Ps,{view:0,detail:0}),dc=An(br),wr,Mo,ps,ko=S({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ps&&(ps&&i.type==="mousemove"?(wr=i.screenX-ps.screenX,Mo=i.screenY-ps.screenY):Mo=wr=0,ps=i),wr)},movementY:function(i){return"movementY"in i?i.movementY:Mo}}),fc=An(ko),Da=S({},ko,{dataTransfer:0}),ph=An(Da),gh=S({},br,{relatedTarget:0}),xa=An(gh),mc=S({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=An(mc),Po=S({},Ps,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),yh=An(Po),vh=S({},Ps,{data:0}),gs=An(vh),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Sh[i])?!!r[i]:!1}function Ar(){return bh}var qn=S({},br,{key:function(i){if(i.key){var r=Eh[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Na(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Th[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(i){return i.type==="keypress"?Na(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Na(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),wh=An(qn),Ah=S({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=An(Ah),h=S({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),_=An(h),T=S({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=An(T),j=S({},ko,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),H=An(j),oe=S({},Ps,{newState:0,oldState:0}),Fe=An(oe),Ht=[9,13,27,32],lt=Si&&"CompositionEvent"in window,Pt=null;Si&&"documentMode"in document&&(Pt=document.documentMode);var bi=Si&&"TextEvent"in window&&!Pt,_s=Si&&(!lt||Pt&&8<Pt&&11>=Pt),Bi=" ",qi=!1;function Oa(i,r){switch(i){case"keyup":return Ht.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lo(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Vo=!1;function ER(i,r){switch(i){case"compositionend":return Lo(r);case"keypress":return r.which!==32?null:(qi=!0,Bi);case"textInput":return i=r.data,i===Bi&&qi?null:i;default:return null}}function TR(i,r){if(Vo)return i==="compositionend"||!lt&&Oa(i,r)?(i=hc(),Ra=uc=fs=null,Vo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _s&&r.locale!=="ko"?null:r.data;default:return null}}var SR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!SR[i.type]:r==="textarea"}function Iv(i,r,o,c){Tr?ds?ds.push(c):ds=[c]:Tr=c,r=md(r,"onChange"),0<r.length&&(o=new ms("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var pc=null,gc=null;function bR(i){c0(i,0)}function Ch(i){var r=oi(i);if(wa(r))return i}function Rv(i,r){if(i==="change")return r}var Nv=!1;if(Si){var vm;if(Si){var Em="oninput"in document;if(!Em){var Dv=document.createElement("div");Dv.setAttribute("oninput","return;"),Em=typeof Dv.oninput=="function"}vm=Em}else vm=!1;Nv=vm&&(!document.documentMode||9<document.documentMode)}function xv(){pc&&(pc.detachEvent("onpropertychange",Ov),gc=pc=null)}function Ov(i){if(i.propertyName==="value"&&Ch(gc)){var r=[];Iv(r,gc,i,Ti(i)),Sr(bR,r)}}function wR(i,r,o){i==="focusin"?(xv(),pc=r,gc=o,pc.attachEvent("onpropertychange",Ov)):i==="focusout"&&xv()}function AR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ch(gc)}function CR(i,r){if(i==="click")return Ch(r)}function IR(i,r){if(i==="input"||i==="change")return Ch(r)}function RR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var ci=typeof Object.is=="function"?Object.is:RR;function _c(i,r){if(ci(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!ie.call(r,d)||!ci(i[d],r[d]))return!1}return!0}function Mv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function kv(i,r){var o=Mv(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Mv(o)}}function Pv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Pv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Lv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=hs(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=hs(i.document)}return r}function Tm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var NR=Si&&"documentMode"in document&&11>=document.documentMode,Uo=null,Sm=null,yc=null,bm=!1;function Vv(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bm||Uo==null||Uo!==hs(c)||(c=Uo,"selectionStart"in c&&Tm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yc&&_c(yc,c)||(yc=c,c=md(Sm,"onSelect"),0<c.length&&(r=new ms("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=Uo)))}function Ma(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var jo={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},wm={},Uv={};Si&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function ka(i){if(wm[i])return wm[i];if(!jo[i])return i;var r=jo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Uv)return wm[i]=r[o];return i}var jv=ka("animationend"),zv=ka("animationiteration"),Fv=ka("animationstart"),DR=ka("transitionrun"),xR=ka("transitionstart"),OR=ka("transitioncancel"),Bv=ka("transitionend"),qv=new Map,Am="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Am.push("scrollEnd");function Hi(i,r){qv.set(i,r),cs(r,[i])}var Ih=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},wi=[],zo=0,Cm=0;function Rh(){for(var i=zo,r=Cm=zo=0;r<i;){var o=wi[r];wi[r++]=null;var c=wi[r];wi[r++]=null;var d=wi[r];wi[r++]=null;var m=wi[r];if(wi[r++]=null,c!==null&&d!==null){var y=c.pending;y===null?d.next=d:(d.next=y.next,y.next=d),c.pending=d}m!==0&&Hv(o,d,m)}}function Nh(i,r,o,c){wi[zo++]=i,wi[zo++]=r,wi[zo++]=o,wi[zo++]=c,Cm|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function Im(i,r,o,c){return Nh(i,r,o,c),Dh(i)}function Pa(i,r){return Nh(i,null,null,r),Dh(i)}function Hv(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=i.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(d=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,d&&r!==null&&(d=31-Ut(o),i=m.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=o|536870912),m):null}function Dh(i){if(50<zc)throw zc=0,Lp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Fo={};function MR(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(i,r,o,c){return new MR(i,r,o,c)}function Rm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,r){var o=i.alternate;return o===null?(o=ui(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Gv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function xh(i,r,o,c,d,m){var y=0;if(c=i,typeof i=="function")Rm(i)&&(y=1);else if(typeof i=="string")y=UN(i,o,ce.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=ui(31,o,r,d),i.elementType=N,i.lanes=m,i;case J:return La(o.children,d,m,r);case Z:y=8,d|=24;break;case ge:return i=ui(12,o,r,d|2),i.elementType=ge,i.lanes=m,i;case Ue:return i=ui(13,o,r,d),i.elementType=Ue,i.lanes=m,i;case Ee:return i=ui(19,o,r,d),i.elementType=Ee,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case de:y=10;break e;case _e:y=9;break e;case ke:y=11;break e;case C:y=14;break e;case R:y=16,c=null;break e}y=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=ui(y,o,r,d),r.elementType=i,r.type=c,r.lanes=m,r}function La(i,r,o,c){return i=ui(7,i,c,r),i.lanes=o,i}function Nm(i,r,o){return i=ui(6,i,null,r),i.lanes=o,i}function Kv(i){var r=ui(18,null,null,0);return r.stateNode=i,r}function Dm(i,r,o){return r=ui(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Yv=new WeakMap;function Ai(i,r){if(typeof i=="object"&&i!==null){var o=Yv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Q(r)},Yv.set(i,r),r)}return{value:i,source:r,stack:Q(r)}}var Bo=[],qo=0,Oh=null,vc=0,Ci=[],Ii=0,Cr=null,ys=1,vs="";function Us(i,r){Bo[qo++]=vc,Bo[qo++]=Oh,Oh=i,vc=r}function Qv(i,r,o){Ci[Ii++]=ys,Ci[Ii++]=vs,Ci[Ii++]=Cr,Cr=i;var c=ys;i=vs;var d=32-Ut(c)-1;c&=~(1<<d),o+=1;var m=32-Ut(r)+d;if(30<m){var y=d-d%5;m=(c&(1<<y)-1).toString(32),c>>=y,d-=y,ys=1<<32-Ut(r)+d|o<<d|c,vs=m+i}else ys=1<<m|o<<d|c,vs=i}function xm(i){i.return!==null&&(Us(i,1),Qv(i,1,0))}function Om(i){for(;i===Oh;)Oh=Bo[--qo],Bo[qo]=null,vc=Bo[--qo],Bo[qo]=null;for(;i===Cr;)Cr=Ci[--Ii],Ci[Ii]=null,vs=Ci[--Ii],Ci[Ii]=null,ys=Ci[--Ii],Ci[Ii]=null}function Wv(i,r){Ci[Ii++]=ys,Ci[Ii++]=vs,Ci[Ii++]=Cr,ys=r.id,vs=r.overflow,Cr=i}var Cn=null,xt=null,it=!1,Ir=null,Ri=!1,Mm=Error(s(519));function Rr(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ec(Ai(r,i)),Mm}function $v(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[Jt]=i,r[_n]=c,o){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(o=0;o<Bc.length;o++)We(Bc[o],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":We("invalid",r),hh(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":We("invalid",r);break;case"textarea":We("invalid",r),vr(r,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||f0(r.textContent,o)?(c.popover!=null&&(We("beforetoggle",r),We("toggle",r)),c.onScroll!=null&&We("scroll",r),c.onScrollEnd!=null&&We("scrollend",r),c.onClick!=null&&(r.onclick=ji),r=!0):r=!1,r||Rr(i,!0)}function Xv(i){for(Cn=i.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Cn=Cn.return}}function Ho(i){if(i!==Cn)return!1;if(!it)return Xv(i),it=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Xp(i.type,i.memoizedProps)),o=!o),o&&xt&&Rr(i),Xv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));xt=S0(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));xt=S0(i)}else r===27?(r=xt,Br(i.type)?(i=ng,ng=null,xt=i):xt=r):xt=Cn?Di(i.stateNode.nextSibling):null;return!0}function Va(){xt=Cn=null,it=!1}function km(){var i=Ir;return i!==null&&(Jn===null?Jn=i:Jn.push.apply(Jn,i),Ir=null),i}function Ec(i){Ir===null?Ir=[i]:Ir.push(i)}var Pm=k(null),Ua=null,js=null;function Nr(i,r,o){re(Pm,r._currentValue),r._currentValue=o}function zs(i){i._currentValue=Pm.current,$(Pm)}function Lm(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function Vm(i,r,o,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=d;for(var O=0;O<r.length;O++)if(b.context===r[O]){m.lanes|=o,b=m.alternate,b!==null&&(b.lanes|=o),Lm(m.return,o,i),c||(y=null);break e}m=b.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(s(341));y.lanes|=o,m=y.alternate,m!==null&&(m.lanes|=o),Lm(y,o,i),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===i){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Go(i,r,o,c){i=null;for(var d=r,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=d.type;ci(d.pendingProps.value,y.value)||(i!==null?i.push(b):i=[b])}}else if(d===ze.current){if(y=d.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Yc):i=[Yc])}d=d.return}i!==null&&Vm(r,i,o,c),r.flags|=262144}function Mh(i){for(i=i.firstContext;i!==null;){if(!ci(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ja(i){Ua=i,js=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function In(i){return Jv(Ua,i)}function kh(i,r){return Ua===null&&ja(i),Jv(i,r)}function Jv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},js===null){if(i===null)throw Error(s(308));js=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else js=js.next=r;return o}var kR=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},PR=n.unstable_scheduleCallback,LR=n.unstable_NormalPriority,tn={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Um(){return{controller:new kR,data:new Map,refCount:0}}function Tc(i){i.refCount--,i.refCount===0&&PR(LR,function(){i.controller.abort()})}var Sc=null,jm=0,Ko=0,Yo=null;function VR(i,r){if(Sc===null){var o=Sc=[];jm=0,Ko=Bp(),Yo={status:"pending",value:void 0,then:function(c){o.push(c)}}}return jm++,r.then(Zv,Zv),r}function Zv(){if(--jm===0&&Sc!==null){Yo!==null&&(Yo.status="fulfilled");var i=Sc;Sc=null,Ko=0,Yo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function UR(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var eE=K.S;K.S=function(i,r){VT=Rt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&VR(i,r),eE!==null&&eE(i,r)};var za=k(null);function zm(){var i=za.current;return i!==null?i:Ct.pooledCache}function Ph(i,r){r===null?re(za,za.current):re(za,r.pool)}function tE(){var i=zm();return i===null?null:{parent:tn._currentValue,pool:i}}var Qo=Error(s(460)),Fm=Error(s(474)),Lh=Error(s(542)),Vh={then:function(){}};function nE(i){return i=i.status,i==="fulfilled"||i==="rejected"}function iE(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(ji,ji),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,rE(i),i;default:if(typeof r.status=="string")r.then(ji,ji);else{if(i=Ct,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,rE(i),i}throw Ba=r,Qo}}function Fa(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ba=o,Qo):o}}var Ba=null;function sE(){if(Ba===null)throw Error(s(459));var i=Ba;return Ba=null,i}function rE(i){if(i===Qo||i===Lh)throw Error(s(483))}var Wo=null,bc=0;function Uh(i){var r=bc;return bc+=1,Wo===null&&(Wo=[]),iE(Wo,i,r)}function wc(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function jh(i,r){throw r.$$typeof===w?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function aE(i){function r(U,P){if(i){var z=U.deletions;z===null?(U.deletions=[P],U.flags|=16):z.push(P)}}function o(U,P){if(!i)return null;for(;P!==null;)r(U,P),P=P.sibling;return null}function c(U){for(var P=new Map;U!==null;)U.key!==null?P.set(U.key,U):P.set(U.index,U),U=U.sibling;return P}function d(U,P){return U=Vs(U,P),U.index=0,U.sibling=null,U}function m(U,P,z){return U.index=z,i?(z=U.alternate,z!==null?(z=z.index,z<P?(U.flags|=67108866,P):z):(U.flags|=67108866,P)):(U.flags|=1048576,P)}function y(U){return i&&U.alternate===null&&(U.flags|=67108866),U}function b(U,P,z,X){return P===null||P.tag!==6?(P=Nm(z,U.mode,X),P.return=U,P):(P=d(P,z),P.return=U,P)}function O(U,P,z,X){var be=z.type;return be===J?W(U,P,z.props.children,X,z.key):P!==null&&(P.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&Fa(be)===P.type)?(P=d(P,z.props),wc(P,z),P.return=U,P):(P=xh(z.type,z.key,z.props,null,U.mode,X),wc(P,z),P.return=U,P)}function F(U,P,z,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Dm(z,U.mode,X),P.return=U,P):(P=d(P,z.children||[]),P.return=U,P)}function W(U,P,z,X,be){return P===null||P.tag!==7?(P=La(z,U.mode,X,be),P.return=U,P):(P=d(P,z),P.return=U,P)}function te(U,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Nm(""+P,U.mode,z),P.return=U,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case L:return z=xh(P.type,P.key,P.props,null,U.mode,z),wc(z,P),z.return=U,z;case q:return P=Dm(P,U.mode,z),P.return=U,P;case R:return P=Fa(P),te(U,P,z)}if(Dt(P)||M(P))return P=La(P,U.mode,z,null),P.return=U,P;if(typeof P.then=="function")return te(U,Uh(P),z);if(P.$$typeof===de)return te(U,kh(U,P),z);jh(U,P)}return null}function B(U,P,z,X){var be=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return be!==null?null:b(U,P,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===be?O(U,P,z,X):null;case q:return z.key===be?F(U,P,z,X):null;case R:return z=Fa(z),B(U,P,z,X)}if(Dt(z)||M(z))return be!==null?null:W(U,P,z,X,null);if(typeof z.then=="function")return B(U,P,Uh(z),X);if(z.$$typeof===de)return B(U,P,kh(U,z),X);jh(U,z)}return null}function G(U,P,z,X,be){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return U=U.get(z)||null,b(P,U,""+X,be);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return U=U.get(X.key===null?z:X.key)||null,O(P,U,X,be);case q:return U=U.get(X.key===null?z:X.key)||null,F(P,U,X,be);case R:return X=Fa(X),G(U,P,z,X,be)}if(Dt(X)||M(X))return U=U.get(z)||null,W(P,U,X,be,null);if(typeof X.then=="function")return G(U,P,z,Uh(X),be);if(X.$$typeof===de)return G(U,P,z,kh(P,X),be);jh(P,X)}return null}function ye(U,P,z,X){for(var be=null,at=null,Se=P,qe=P=0,Ze=null;Se!==null&&qe<z.length;qe++){Se.index>qe?(Ze=Se,Se=null):Ze=Se.sibling;var ot=B(U,Se,z[qe],X);if(ot===null){Se===null&&(Se=Ze);break}i&&Se&&ot.alternate===null&&r(U,Se),P=m(ot,P,qe),at===null?be=ot:at.sibling=ot,at=ot,Se=Ze}if(qe===z.length)return o(U,Se),it&&Us(U,qe),be;if(Se===null){for(;qe<z.length;qe++)Se=te(U,z[qe],X),Se!==null&&(P=m(Se,P,qe),at===null?be=Se:at.sibling=Se,at=Se);return it&&Us(U,qe),be}for(Se=c(Se);qe<z.length;qe++)Ze=G(Se,U,qe,z[qe],X),Ze!==null&&(i&&Ze.alternate!==null&&Se.delete(Ze.key===null?qe:Ze.key),P=m(Ze,P,qe),at===null?be=Ze:at.sibling=Ze,at=Ze);return i&&Se.forEach(function(Yr){return r(U,Yr)}),it&&Us(U,qe),be}function Ne(U,P,z,X){if(z==null)throw Error(s(151));for(var be=null,at=null,Se=P,qe=P=0,Ze=null,ot=z.next();Se!==null&&!ot.done;qe++,ot=z.next()){Se.index>qe?(Ze=Se,Se=null):Ze=Se.sibling;var Yr=B(U,Se,ot.value,X);if(Yr===null){Se===null&&(Se=Ze);break}i&&Se&&Yr.alternate===null&&r(U,Se),P=m(Yr,P,qe),at===null?be=Yr:at.sibling=Yr,at=Yr,Se=Ze}if(ot.done)return o(U,Se),it&&Us(U,qe),be;if(Se===null){for(;!ot.done;qe++,ot=z.next())ot=te(U,ot.value,X),ot!==null&&(P=m(ot,P,qe),at===null?be=ot:at.sibling=ot,at=ot);return it&&Us(U,qe),be}for(Se=c(Se);!ot.done;qe++,ot=z.next())ot=G(Se,U,qe,ot.value,X),ot!==null&&(i&&ot.alternate!==null&&Se.delete(ot.key===null?qe:ot.key),P=m(ot,P,qe),at===null?be=ot:at.sibling=ot,at=ot);return i&&Se.forEach(function(WN){return r(U,WN)}),it&&Us(U,qe),be}function bt(U,P,z,X){if(typeof z=="object"&&z!==null&&z.type===J&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var be=z.key;P!==null;){if(P.key===be){if(be=z.type,be===J){if(P.tag===7){o(U,P.sibling),X=d(P,z.props.children),X.return=U,U=X;break e}}else if(P.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&Fa(be)===P.type){o(U,P.sibling),X=d(P,z.props),wc(X,z),X.return=U,U=X;break e}o(U,P);break}else r(U,P);P=P.sibling}z.type===J?(X=La(z.props.children,U.mode,X,z.key),X.return=U,U=X):(X=xh(z.type,z.key,z.props,null,U.mode,X),wc(X,z),X.return=U,U=X)}return y(U);case q:e:{for(be=z.key;P!==null;){if(P.key===be)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){o(U,P.sibling),X=d(P,z.children||[]),X.return=U,U=X;break e}else{o(U,P);break}else r(U,P);P=P.sibling}X=Dm(z,U.mode,X),X.return=U,U=X}return y(U);case R:return z=Fa(z),bt(U,P,z,X)}if(Dt(z))return ye(U,P,z,X);if(M(z)){if(be=M(z),typeof be!="function")throw Error(s(150));return z=be.call(z),Ne(U,P,z,X)}if(typeof z.then=="function")return bt(U,P,Uh(z),X);if(z.$$typeof===de)return bt(U,P,kh(U,z),X);jh(U,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(o(U,P.sibling),X=d(P,z),X.return=U,U=X):(o(U,P),X=Nm(z,U.mode,X),X.return=U,U=X),y(U)):o(U,P)}return function(U,P,z,X){try{bc=0;var be=bt(U,P,z,X);return Wo=null,be}catch(Se){if(Se===Qo||Se===Lh)throw Se;var at=ui(29,Se,null,U.mode);return at.lanes=X,at.return=U,at}finally{}}}var qa=aE(!0),oE=aE(!1),Dr=!1;function Bm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function xr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Or(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ct&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=Dh(i),Hv(i,null,o),r}return Nh(i,c,r,o),Dh(i)}function Ac(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Jl(i,o)}}function Hm(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,o=o.next}while(o!==null);m===null?d=m=r:m=m.next=r}else d=m=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Gm=!1;function Cc(){if(Gm){var i=Yo;if(i!==null)throw i}}function Ic(i,r,o,c){Gm=!1;var d=i.updateQueue;Dr=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var O=b,F=O.next;O.next=null,y===null?m=F:y.next=F,y=O;var W=i.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==y&&(b===null?W.firstBaseUpdate=F:b.next=F,W.lastBaseUpdate=O))}if(m!==null){var te=d.baseState;y=0,W=F=O=null,b=m;do{var B=b.lane&-536870913,G=B!==b.lane;if(G?(Je&B)===B:(c&B)===B){B!==0&&B===Ko&&(Gm=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ye=i,Ne=b;B=r;var bt=o;switch(Ne.tag){case 1:if(ye=Ne.payload,typeof ye=="function"){te=ye.call(bt,te,B);break e}te=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Ne.payload,B=typeof ye=="function"?ye.call(bt,te,B):ye,B==null)break e;te=S({},te,B);break e;case 2:Dr=!0}}B=b.callback,B!==null&&(i.flags|=64,G&&(i.flags|=8192),G=d.callbacks,G===null?d.callbacks=[B]:G.push(B))}else G={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(F=W=G,O=te):W=W.next=G,y|=B;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;G=b,b=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);W===null&&(O=te),d.baseState=O,d.firstBaseUpdate=F,d.lastBaseUpdate=W,m===null&&(d.shared.lanes=0),Vr|=y,i.lanes=y,i.memoizedState=te}}function lE(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function cE(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)lE(o[i],r)}var $o=k(null),zh=k(0);function uE(i,r){i=Ws,re(zh,i),re($o,r),Ws=i|r.baseLanes}function Km(){re(zh,Ws),re($o,$o.current)}function Ym(){Ws=zh.current,$($o),$(zh)}var hi=k(null),Ni=null;function Mr(i){var r=i.alternate;re(Gt,Gt.current&1),re(hi,i),Ni===null&&(r===null||$o.current!==null||r.memoizedState!==null)&&(Ni=i)}function Qm(i){re(Gt,Gt.current),re(hi,i),Ni===null&&(Ni=i)}function hE(i){i.tag===22?(re(Gt,Gt.current),re(hi,i),Ni===null&&(Ni=i)):kr()}function kr(){re(Gt,Gt.current),re(hi,hi.current)}function di(i){$(hi),Ni===i&&(Ni=null),$(Gt)}var Gt=k(0);function Fh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||eg(o)||tg(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fs=0,Be=null,Tt=null,nn=null,Bh=!1,Xo=!1,Ha=!1,qh=0,Rc=0,Jo=null,jR=0;function Bt(){throw Error(s(321))}function Wm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!ci(i[o],r[o]))return!1;return!0}function $m(i,r,o,c,d,m){return Fs=m,Be=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?QE:hp,Ha=!1,m=o(c,d),Ha=!1,Xo&&(m=fE(r,o,c,d)),dE(i),m}function dE(i){K.H=xc;var r=Tt!==null&&Tt.next!==null;if(Fs=0,nn=Tt=Be=null,Bh=!1,Rc=0,Jo=null,r)throw Error(s(300));i===null||sn||(i=i.dependencies,i!==null&&Mh(i)&&(sn=!0))}function fE(i,r,o,c){Be=i;var d=0;do{if(Xo&&(Jo=null),Rc=0,Xo=!1,25<=d)throw Error(s(301));if(d+=1,nn=Tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=WE,m=r(o,c)}while(Xo);return m}function zR(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?Nc(r):r,i=i.useState()[0],(Tt!==null?Tt.memoizedState:null)!==i&&(Be.flags|=1024),r}function Xm(){var i=qh!==0;return qh=0,i}function Jm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Zm(i){if(Bh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bh=!1}Fs=0,nn=Tt=Be=null,Xo=!1,Rc=qh=0,Jo=null}function Hn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Be.memoizedState=nn=i:nn=nn.next=i,nn}function Kt(){if(Tt===null){var i=Be.alternate;i=i!==null?i.memoizedState:null}else i=Tt.next;var r=nn===null?Be.memoizedState:nn.next;if(r!==null)nn=r,Tt=i;else{if(i===null)throw Be.alternate===null?Error(s(467)):Error(s(310));Tt=i,i={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},nn===null?Be.memoizedState=nn=i:nn=nn.next=i}return nn}function Hh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nc(i){var r=Rc;return Rc+=1,Jo===null&&(Jo=[]),i=iE(Jo,i,r),r=Be,(nn===null?r.memoizedState:nn.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?QE:hp),i}function Gh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Nc(i);if(i.$$typeof===de)return In(i)}throw Error(s(438,String(i)))}function ep(i){var r=null,o=Be.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Hh(),Be.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=x;return r.index++,o}function Bs(i,r){return typeof r=="function"?r(i):r}function Kh(i){var r=Kt();return tp(r,Tt,i)}function tp(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var d=i.baseQueue,m=c.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}r.baseQueue=d=m,c.pending=null}if(m=i.baseState,d===null)i.memoizedState=m;else{r=d.next;var b=y=null,O=null,F=r,W=!1;do{var te=F.lane&-536870913;if(te!==F.lane?(Je&te)===te:(Fs&te)===te){var B=F.revertLane;if(B===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),te===Ko&&(W=!0);else if((Fs&B)===B){F=F.next,B===Ko&&(W=!0);continue}else te={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(b=O=te,y=m):O=O.next=te,Be.lanes|=B,Vr|=B;te=F.action,Ha&&o(m,te),m=F.hasEagerState?F.eagerState:o(m,te)}else B={lane:te,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(b=O=B,y=m):O=O.next=B,Be.lanes|=te,Vr|=te;F=F.next}while(F!==null&&F!==r);if(O===null?y=m:O.next=b,!ci(m,i.memoizedState)&&(sn=!0,W&&(o=Yo,o!==null)))throw o;i.memoizedState=m,i.baseState=y,i.baseQueue=O,c.lastRenderedState=m}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function np(i){var r=Kt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,m=r.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do m=i(m,y.action),y=y.next;while(y!==d);ci(m,r.memoizedState)||(sn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,c]}function mE(i,r,o){var c=Be,d=Kt(),m=it;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var y=!ci((Tt||d).memoizedState,o);if(y&&(d.memoizedState=o,sn=!0),d=d.queue,rp(_E.bind(null,c,d,i),[i]),d.getSnapshot!==r||y||nn!==null&&nn.memoizedState.tag&1){if(c.flags|=2048,Zo(9,{destroy:void 0},gE.bind(null,c,d,o,r),null),Ct===null)throw Error(s(349));m||(Fs&127)!==0||pE(c,r,o)}return o}function pE(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Be.updateQueue,r===null?(r=Hh(),Be.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function gE(i,r,o,c){r.value=o,r.getSnapshot=c,yE(r)&&vE(i)}function _E(i,r,o){return o(function(){yE(r)&&vE(i)})}function yE(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!ci(i,o)}catch{return!0}}function vE(i){var r=Pa(i,2);r!==null&&Zn(r,i,2)}function ip(i){var r=Hn();if(typeof i=="function"){var o=i;if(i=o(),Ha){Kn(!0);try{o()}finally{Kn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:i},r}function EE(i,r,o,c){return i.baseState=o,tp(i,Tt,typeof c=="function"?c:Bs)}function FR(i,r,o,c,d){if(Wh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};K.T!==null?o(!0):m.isTransition=!1,c(m),o=r.pending,o===null?(m.next=r.pending=m,TE(r,m)):(m.next=o.next,r.pending=o.next=m)}}function TE(i,r){var o=r.action,c=r.payload,d=i.state;if(r.isTransition){var m=K.T,y={};K.T=y;try{var b=o(d,c),O=K.S;O!==null&&O(y,b),SE(i,r,b)}catch(F){sp(i,r,F)}finally{m!==null&&y.types!==null&&(m.types=y.types),K.T=m}}else try{m=o(d,c),SE(i,r,m)}catch(F){sp(i,r,F)}}function SE(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){bE(i,r,c)},function(c){return sp(i,r,c)}):bE(i,r,o)}function bE(i,r,o){r.status="fulfilled",r.value=o,wE(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,TE(i,o)))}function sp(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,wE(r),r=r.next;while(r!==c)}i.action=null}function wE(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function AE(i,r){return r}function CE(i,r){if(it){var o=Ct.formState;if(o!==null){e:{var c=Be;if(it){if(xt){t:{for(var d=xt,m=Ri;d.nodeType!==8;){if(!m){d=null;break t}if(d=Di(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){xt=Di(d.nextSibling),c=d.data==="F!";break e}}Rr(c)}c=!1}c&&(r=o[0])}}return o=Hn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:AE,lastRenderedState:r},o.queue=c,o=GE.bind(null,Be,c),c.dispatch=o,c=ip(!1),m=up.bind(null,Be,!1,c.queue),c=Hn(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,o=FR.bind(null,Be,d,m,o),d.dispatch=o,c.memoizedState=i,[r,o,!1]}function IE(i){var r=Kt();return RE(r,Tt,i)}function RE(i,r,o){if(r=tp(i,r,AE)[0],i=Kh(Bs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Nc(r)}catch(y){throw y===Qo?Lh:y}else c=r;r=Kt();var d=r.queue,m=d.dispatch;return o!==r.memoizedState&&(Be.flags|=2048,Zo(9,{destroy:void 0},BR.bind(null,d,o),null)),[c,m,i]}function BR(i,r){i.action=r}function NE(i){var r=Kt(),o=Tt;if(o!==null)return RE(r,o,i);Kt(),r=r.memoizedState,o=Kt();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function Zo(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=Be.updateQueue,r===null&&(r=Hh(),Be.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function DE(){return Kt().memoizedState}function Yh(i,r,o,c){var d=Hn();Be.flags|=i,d.memoizedState=Zo(1|r,{destroy:void 0},o,c===void 0?null:c)}function Qh(i,r,o,c){var d=Kt();c=c===void 0?null:c;var m=d.memoizedState.inst;Tt!==null&&c!==null&&Wm(c,Tt.memoizedState.deps)?d.memoizedState=Zo(r,m,o,c):(Be.flags|=i,d.memoizedState=Zo(1|r,m,o,c))}function xE(i,r){Yh(8390656,8,i,r)}function rp(i,r){Qh(2048,8,i,r)}function qR(i){Be.flags|=4;var r=Be.updateQueue;if(r===null)r=Hh(),Be.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function OE(i){var r=Kt().memoizedState;return qR({ref:r,nextImpl:i}),function(){if((ct&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function ME(i,r){return Qh(4,2,i,r)}function kE(i,r){return Qh(4,4,i,r)}function PE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function LE(i,r,o){o=o!=null?o.concat([i]):null,Qh(4,4,PE.bind(null,r,i),o)}function ap(){}function VE(i,r){var o=Kt();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Wm(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function UE(i,r){var o=Kt();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Wm(r,c[1]))return c[0];if(c=i(),Ha){Kn(!0);try{i()}finally{Kn(!1)}}return o.memoizedState=[c,r],c}function op(i,r,o){return o===void 0||(Fs&1073741824)!==0&&(Je&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=jT(),Be.lanes|=i,Vr|=i,o)}function jE(i,r,o,c){return ci(o,r)?o:$o.current!==null?(i=op(i,o,c),ci(i,r)||(sn=!0),i):(Fs&42)===0||(Fs&1073741824)!==0&&(Je&261930)===0?(sn=!0,i.memoizedState=o):(i=jT(),Be.lanes|=i,Vr|=i,r)}function zE(i,r,o,c,d){var m=le.p;le.p=m!==0&&8>m?m:8;var y=K.T,b={};K.T=b,up(i,!1,r,o);try{var O=d(),F=K.S;if(F!==null&&F(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=UR(O,c);Dc(i,r,W,pi(i))}else Dc(i,r,c,pi(i))}catch(te){Dc(i,r,{then:function(){},status:"rejected",reason:te},pi())}finally{le.p=m,y!==null&&b.types!==null&&(y.types=b.types),K.T=y}}function HR(){}function lp(i,r,o,c){if(i.tag!==5)throw Error(s(476));var d=FE(i).queue;zE(i,d,r,Te,o===null?HR:function(){return BE(i),o(c)})}function FE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:Te},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function BE(i){var r=FE(i);r.next===null&&(r=i.alternate.memoizedState),Dc(i,r.next.queue,{},pi())}function cp(){return In(Yc)}function qE(){return Kt().memoizedState}function HE(){return Kt().memoizedState}function GR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=pi();i=xr(o);var c=Or(r,i,o);c!==null&&(Zn(c,r,o),Ac(c,r,o)),r={cache:Um()},i.payload=r;return}r=r.return}}function KR(i,r,o){var c=pi();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(i)?KE(r,o):(o=Im(i,r,o,c),o!==null&&(Zn(o,i,c),YE(o,r,c)))}function GE(i,r,o){var c=pi();Dc(i,r,o,c)}function Dc(i,r,o,c){var d={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(i))KE(r,d);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var y=r.lastRenderedState,b=m(y,o);if(d.hasEagerState=!0,d.eagerState=b,ci(b,y))return Nh(i,r,d,0),Ct===null&&Rh(),!1}catch{}finally{}if(o=Im(i,r,d,c),o!==null)return Zn(o,i,c),YE(o,r,c),!0}return!1}function up(i,r,o,c){if(c={lane:2,revertLane:Bp(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Wh(i)){if(r)throw Error(s(479))}else r=Im(i,o,c,2),r!==null&&Zn(r,i,2)}function Wh(i){var r=i.alternate;return i===Be||r!==null&&r===Be}function KE(i,r){Xo=Bh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function YE(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Jl(i,o)}}var xc={readContext:In,use:Gh,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt};xc.useEffectEvent=Bt;var QE={readContext:In,use:Gh,useCallback:function(i,r){return Hn().memoizedState=[i,r===void 0?null:r],i},useContext:In,useEffect:xE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Yh(4194308,4,PE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Yh(4194308,4,i,r)},useInsertionEffect:function(i,r){Yh(4,2,i,r)},useMemo:function(i,r){var o=Hn();r=r===void 0?null:r;var c=i();if(Ha){Kn(!0);try{i()}finally{Kn(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=Hn();if(o!==void 0){var d=o(r);if(Ha){Kn(!0);try{o(r)}finally{Kn(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=KR.bind(null,Be,i),[c.memoizedState,i]},useRef:function(i){var r=Hn();return i={current:i},r.memoizedState=i},useState:function(i){i=ip(i);var r=i.queue,o=GE.bind(null,Be,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:ap,useDeferredValue:function(i,r){var o=Hn();return op(o,i,r)},useTransition:function(){var i=ip(!1);return i=zE.bind(null,Be,i.queue,!0,!1),Hn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=Be,d=Hn();if(it){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),Ct===null)throw Error(s(349));(Je&127)!==0||pE(c,r,o)}d.memoizedState=o;var m={value:o,getSnapshot:r};return d.queue=m,xE(_E.bind(null,c,m,i),[i]),c.flags|=2048,Zo(9,{destroy:void 0},gE.bind(null,c,m,o,r),null),o},useId:function(){var i=Hn(),r=Ct.identifierPrefix;if(it){var o=vs,c=ys;o=(c&~(1<<32-Ut(c)-1)).toString(32)+o,r="_"+r+"R_"+o,o=qh++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=jR++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:cp,useFormState:CE,useActionState:CE,useOptimistic:function(i){var r=Hn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=up.bind(null,Be,!0,o),o.dispatch=r,[i,r]},useMemoCache:ep,useCacheRefresh:function(){return Hn().memoizedState=GR.bind(null,Be)},useEffectEvent:function(i){var r=Hn(),o={impl:i};return r.memoizedState=o,function(){if((ct&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},hp={readContext:In,use:Gh,useCallback:VE,useContext:In,useEffect:rp,useImperativeHandle:LE,useInsertionEffect:ME,useLayoutEffect:kE,useMemo:UE,useReducer:Kh,useRef:DE,useState:function(){return Kh(Bs)},useDebugValue:ap,useDeferredValue:function(i,r){var o=Kt();return jE(o,Tt.memoizedState,i,r)},useTransition:function(){var i=Kh(Bs)[0],r=Kt().memoizedState;return[typeof i=="boolean"?i:Nc(i),r]},useSyncExternalStore:mE,useId:qE,useHostTransitionStatus:cp,useFormState:IE,useActionState:IE,useOptimistic:function(i,r){var o=Kt();return EE(o,Tt,i,r)},useMemoCache:ep,useCacheRefresh:HE};hp.useEffectEvent=OE;var WE={readContext:In,use:Gh,useCallback:VE,useContext:In,useEffect:rp,useImperativeHandle:LE,useInsertionEffect:ME,useLayoutEffect:kE,useMemo:UE,useReducer:np,useRef:DE,useState:function(){return np(Bs)},useDebugValue:ap,useDeferredValue:function(i,r){var o=Kt();return Tt===null?op(o,i,r):jE(o,Tt.memoizedState,i,r)},useTransition:function(){var i=np(Bs)[0],r=Kt().memoizedState;return[typeof i=="boolean"?i:Nc(i),r]},useSyncExternalStore:mE,useId:qE,useHostTransitionStatus:cp,useFormState:NE,useActionState:NE,useOptimistic:function(i,r){var o=Kt();return Tt!==null?EE(o,Tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:ep,useCacheRefresh:HE};WE.useEffectEvent=OE;function dp(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:S({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var fp={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=pi(),d=xr(c);d.payload=r,o!=null&&(d.callback=o),r=Or(i,d,c),r!==null&&(Zn(r,i,c),Ac(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=pi(),d=xr(c);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=Or(i,d,c),r!==null&&(Zn(r,i,c),Ac(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=pi(),c=xr(o);c.tag=2,r!=null&&(c.callback=r),r=Or(i,c,o),r!==null&&(Zn(r,i,o),Ac(r,i,o))}};function $E(i,r,o,c,d,m,y){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,y):r.prototype&&r.prototype.isPureReactComponent?!_c(o,c)||!_c(d,m):!0}function XE(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&fp.enqueueReplaceState(r,r.state,null)}function Ga(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=S({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function JE(i){Ih(i)}function ZE(i){console.error(i)}function eT(i){Ih(i)}function $h(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function tT(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function mp(i,r,o){return o=xr(o),o.tag=3,o.payload={element:null},o.callback=function(){$h(i,r)},o}function nT(i){return i=xr(i),i.tag=3,i}function iT(i,r,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;i.payload=function(){return d(m)},i.callback=function(){tT(r,o,c)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){tT(r,o,c),typeof d!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function YR(i,r,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&Go(r,o,d,!0),o=hi.current,o!==null){switch(o.tag){case 31:case 13:return Ni===null?ld():o.alternate===null&&qt===0&&(qt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Vh?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),jp(i,c,d)),!1;case 22:return o.flags|=65536,c===Vh?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),jp(i,c,d)),!1}throw Error(s(435,o.tag))}return jp(i,c,d),ld(),!1}if(it)return r=hi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==Mm&&(i=Error(s(422),{cause:c}),Ec(Ai(i,o)))):(c!==Mm&&(r=Error(s(423),{cause:c}),Ec(Ai(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=Ai(c,o),d=mp(i.stateNode,c,d),Hm(i,d),qt!==4&&(qt=2)),!1;var m=Error(s(520),{cause:c});if(m=Ai(m,o),jc===null?jc=[m]:jc.push(m),qt!==4&&(qt=2),r===null)return!0;c=Ai(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=mp(o.stateNode,c,i),Hm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ur===null||!Ur.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=nT(d),iT(d,i,o,c),Hm(o,d),!1}o=o.return}while(o!==null);return!1}var pp=Error(s(461)),sn=!1;function Rn(i,r,o,c){r.child=i===null?oE(r,null,o,c):qa(r,i.child,o,c)}function sT(i,r,o,c,d){o=o.render;var m=r.ref;if("ref"in c){var y={};for(var b in c)b!=="ref"&&(y[b]=c[b])}else y=c;return ja(r),c=$m(i,r,o,y,m,d),b=Xm(),i!==null&&!sn?(Jm(i,r,d),qs(i,r,d)):(it&&b&&xm(r),r.flags|=1,Rn(i,r,c,d),r.child)}function rT(i,r,o,c,d){if(i===null){var m=o.type;return typeof m=="function"&&!Rm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,aT(i,r,m,c,d)):(i=xh(o.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!bp(i,d)){var y=m.memoizedProps;if(o=o.compare,o=o!==null?o:_c,o(y,c)&&i.ref===r.ref)return qs(i,r,d)}return r.flags|=1,i=Vs(m,c),i.ref=r.ref,i.return=r,r.child=i}function aT(i,r,o,c,d){if(i!==null){var m=i.memoizedProps;if(_c(m,c)&&i.ref===r.ref)if(sn=!1,r.pendingProps=c=m,bp(i,d))(i.flags&131072)!==0&&(sn=!0);else return r.lanes=i.lanes,qs(i,r,d)}return gp(i,r,o,c,d)}function oT(i,r,o,c){var d=c.children,m=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,i!==null){for(c=r.child=i.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~m}else c=0,r.child=null;return lT(i,r,m,o,c)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Ph(r,m!==null?m.cachePool:null),m!==null?uE(r,m):Km(),hE(r);else return c=r.lanes=536870912,lT(i,r,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(Ph(r,m.cachePool),uE(r,m),kr(),r.memoizedState=null):(i!==null&&Ph(r,null),Km(),kr());return Rn(i,r,d,o),r.child}function Oc(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function lT(i,r,o,c,d){var m=zm();return m=m===null?null:{parent:tn._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},i!==null&&Ph(r,null),Km(),hE(r),i!==null&&Go(i,r,c,!0),r.childLanes=d,null}function Xh(i,r){return r=Zh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function cT(i,r,o){return qa(r,i.child,null,o),i=Xh(r,r.pendingProps),i.flags|=2,di(r),r.memoizedState=null,i}function QR(i,r,o){var c=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(it){if(c.mode==="hidden")return i=Xh(r,c),r.lanes=536870912,Oc(null,i);if(Qm(r),(i=xt)?(i=T0(i,Ri),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Cr!==null?{id:ys,overflow:vs}:null,retryLane:536870912,hydrationErrors:null},o=Kv(i),o.return=r,r.child=o,Cn=r,xt=null)):i=null,i===null)throw Rr(r);return r.lanes=536870912,null}return Xh(r,c)}var m=i.memoizedState;if(m!==null){var y=m.dehydrated;if(Qm(r),d)if(r.flags&256)r.flags&=-257,r=cT(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(sn||Go(i,r,o,!1),d=(o&i.childLanes)!==0,sn||d){if(c=Ct,c!==null&&(y=Zl(c,o),y!==0&&y!==m.retryLane))throw m.retryLane=y,Pa(i,y),Zn(c,i,y),pp;ld(),r=cT(i,r,o)}else i=m.treeContext,xt=Di(y.nextSibling),Cn=r,it=!0,Ir=null,Ri=!1,i!==null&&Wv(r,i),r=Xh(r,c),r.flags|=4096;return r}return i=Vs(i.child,{mode:c.mode,children:c.children}),i.ref=r.ref,r.child=i,i.return=r,i}function Jh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function gp(i,r,o,c,d){return ja(r),o=$m(i,r,o,c,void 0,d),c=Xm(),i!==null&&!sn?(Jm(i,r,d),qs(i,r,d)):(it&&c&&xm(r),r.flags|=1,Rn(i,r,o,d),r.child)}function uT(i,r,o,c,d,m){return ja(r),r.updateQueue=null,o=fE(r,c,o,d),dE(i),c=Xm(),i!==null&&!sn?(Jm(i,r,m),qs(i,r,m)):(it&&c&&xm(r),r.flags|=1,Rn(i,r,o,m),r.child)}function hT(i,r,o,c,d){if(ja(r),r.stateNode===null){var m=Fo,y=o.contextType;typeof y=="object"&&y!==null&&(m=In(y)),m=new o(c,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=fp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=c,m.state=r.memoizedState,m.refs={},Bm(r),y=o.contextType,m.context=typeof y=="object"&&y!==null?In(y):Fo,m.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(dp(r,o,y,c),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&fp.enqueueReplaceState(m,m.state,null),Ic(r,c,m,d),Cc(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){m=r.stateNode;var b=r.memoizedProps,O=Ga(o,b);m.props=O;var F=m.context,W=o.contextType;y=Fo,typeof W=="object"&&W!==null&&(y=In(W));var te=o.getDerivedStateFromProps;W=typeof te=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,W||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||F!==y)&&XE(r,m,c,y),Dr=!1;var B=r.memoizedState;m.state=B,Ic(r,c,m,d),Cc(),F=r.memoizedState,b||B!==F||Dr?(typeof te=="function"&&(dp(r,o,te,c),F=r.memoizedState),(O=Dr||$E(r,o,O,c,B,F,y))?(W||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),m.props=c,m.state=F,m.context=y,c=O):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,qm(i,r),y=r.memoizedProps,W=Ga(o,y),m.props=W,te=r.pendingProps,B=m.context,F=o.contextType,O=Fo,typeof F=="object"&&F!==null&&(O=In(F)),b=o.getDerivedStateFromProps,(F=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==te||B!==O)&&XE(r,m,c,O),Dr=!1,B=r.memoizedState,m.state=B,Ic(r,c,m,d),Cc();var G=r.memoizedState;y!==te||B!==G||Dr||i!==null&&i.dependencies!==null&&Mh(i.dependencies)?(typeof b=="function"&&(dp(r,o,b,c),G=r.memoizedState),(W=Dr||$E(r,o,W,c,B,G,O)||i!==null&&i.dependencies!==null&&Mh(i.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,G,O),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,G,O)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=G),m.props=c,m.state=G,m.context=O,c=W):(typeof m.componentDidUpdate!="function"||y===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),c=!1)}return m=c,Jh(i,r),c=(r.flags&128)!==0,m||c?(m=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&c?(r.child=qa(r,i.child,null,d),r.child=qa(r,null,o,d)):Rn(i,r,o,d),r.memoizedState=m.state,i=r.child):i=qs(i,r,d),i}function dT(i,r,o,c){return Va(),r.flags|=256,Rn(i,r,o,c),r.child}var _p={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yp(i){return{baseLanes:i,cachePool:tE()}}function vp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=mi),i}function fT(i,r,o){var c=r.pendingProps,d=!1,m=(r.flags&128)!==0,y;if((y=m)||(y=i!==null&&i.memoizedState===null?!1:(Gt.current&2)!==0),y&&(d=!0,r.flags&=-129),y=(r.flags&32)!==0,r.flags&=-33,i===null){if(it){if(d?Mr(r):kr(),(i=xt)?(i=T0(i,Ri),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Cr!==null?{id:ys,overflow:vs}:null,retryLane:536870912,hydrationErrors:null},o=Kv(i),o.return=r,r.child=o,Cn=r,xt=null)):i=null,i===null)throw Rr(r);return tg(i)?r.lanes=32:r.lanes=536870912,null}var b=c.children;return c=c.fallback,d?(kr(),d=r.mode,b=Zh({mode:"hidden",children:b},d),c=La(c,d,o,null),b.return=r,c.return=r,b.sibling=c,r.child=b,c=r.child,c.memoizedState=yp(o),c.childLanes=vp(i,y,o),r.memoizedState=_p,Oc(null,c)):(Mr(r),Ep(r,b))}var O=i.memoizedState;if(O!==null&&(b=O.dehydrated,b!==null)){if(m)r.flags&256?(Mr(r),r.flags&=-257,r=Tp(i,r,o)):r.memoizedState!==null?(kr(),r.child=i.child,r.flags|=128,r=null):(kr(),b=c.fallback,d=r.mode,c=Zh({mode:"visible",children:c.children},d),b=La(b,d,o,null),b.flags|=2,c.return=r,b.return=r,c.sibling=b,r.child=c,qa(r,i.child,null,o),c=r.child,c.memoizedState=yp(o),c.childLanes=vp(i,y,o),r.memoizedState=_p,r=Oc(null,c));else if(Mr(r),tg(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var F=y.dgst;y=F,c=Error(s(419)),c.stack="",c.digest=y,Ec({value:c,source:null,stack:null}),r=Tp(i,r,o)}else if(sn||Go(i,r,o,!1),y=(o&i.childLanes)!==0,sn||y){if(y=Ct,y!==null&&(c=Zl(y,o),c!==0&&c!==O.retryLane))throw O.retryLane=c,Pa(i,c),Zn(y,i,c),pp;eg(b)||ld(),r=Tp(i,r,o)}else eg(b)?(r.flags|=192,r.child=i.child,r=null):(i=O.treeContext,xt=Di(b.nextSibling),Cn=r,it=!0,Ir=null,Ri=!1,i!==null&&Wv(r,i),r=Ep(r,c.children),r.flags|=4096);return r}return d?(kr(),b=c.fallback,d=r.mode,O=i.child,F=O.sibling,c=Vs(O,{mode:"hidden",children:c.children}),c.subtreeFlags=O.subtreeFlags&65011712,F!==null?b=Vs(F,b):(b=La(b,d,o,null),b.flags|=2),b.return=r,c.return=r,c.sibling=b,r.child=c,Oc(null,c),c=r.child,b=i.child.memoizedState,b===null?b=yp(o):(d=b.cachePool,d!==null?(O=tn._currentValue,d=d.parent!==O?{parent:O,pool:O}:d):d=tE(),b={baseLanes:b.baseLanes|o,cachePool:d}),c.memoizedState=b,c.childLanes=vp(i,y,o),r.memoizedState=_p,Oc(i.child,c)):(Mr(r),o=i.child,i=o.sibling,o=Vs(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(y=r.deletions,y===null?(r.deletions=[i],r.flags|=16):y.push(i)),r.child=o,r.memoizedState=null,o)}function Ep(i,r){return r=Zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Zh(i,r){return i=ui(22,i,null,r),i.lanes=0,i}function Tp(i,r,o){return qa(r,i.child,null,o),i=Ep(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function mT(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),Lm(i.return,r,o)}function Sp(i,r,o,c,d,m){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d,treeForkCount:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=c,y.tail=o,y.tailMode=d,y.treeForkCount=m)}function pT(i,r,o){var c=r.pendingProps,d=c.revealOrder,m=c.tail;c=c.children;var y=Gt.current,b=(y&2)!==0;if(b?(y=y&1|2,r.flags|=128):y&=1,re(Gt,y),Rn(i,r,c,o),c=it?vc:0,!b&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&mT(i,o,r);else if(i.tag===19)mT(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&Fh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Sp(r,!1,d,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&Fh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}Sp(r,!0,o,null,m,c);break;case"together":Sp(r,!1,null,null,void 0,c);break;default:r.memoizedState=null}return r.child}function qs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Vr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Go(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Vs(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Vs(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function bp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Mh(i)))}function WR(i,r,o){switch(r.tag){case 3:ht(r,r.stateNode.containerInfo),Nr(r,tn,i.memoizedState.cache),Va();break;case 27:case 5:gn(r);break;case 4:ht(r,r.stateNode.containerInfo);break;case 10:Nr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Qm(r),null;break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Mr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?fT(i,r,o):(Mr(r),i=qs(i,r,o),i!==null?i.sibling:null);Mr(r);break;case 19:var d=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(Go(i,r,o,!1),c=(o&r.childLanes)!==0),d){if(c)return pT(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),re(Gt,Gt.current),c)break;return null;case 22:return r.lanes=0,oT(i,r,o,r.pendingProps);case 24:Nr(r,tn,i.memoizedState.cache)}return qs(i,r,o)}function gT(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)sn=!0;else{if(!bp(i,o)&&(r.flags&128)===0)return sn=!1,WR(i,r,o);sn=(i.flags&131072)!==0}else sn=!1,it&&(r.flags&1048576)!==0&&Qv(r,vc,r.index);switch(r.lanes=0,r.tag){case 16:e:{var c=r.pendingProps;if(i=Fa(r.elementType),r.type=i,typeof i=="function")Rm(i)?(c=Ga(i,c),r.tag=1,r=hT(null,r,i,c,o)):(r.tag=0,r=gp(null,r,i,c,o));else{if(i!=null){var d=i.$$typeof;if(d===ke){r.tag=11,r=sT(null,r,i,c,o);break e}else if(d===C){r.tag=14,r=rT(null,r,i,c,o);break e}}throw r=He(i)||i,Error(s(306,r,""))}}return r;case 0:return gp(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,d=Ga(c,r.pendingProps),hT(i,r,c,d,o);case 3:e:{if(ht(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var m=r.memoizedState;d=m.element,qm(i,r),Ic(r,c,null,o);var y=r.memoizedState;if(c=y.cache,Nr(r,tn,c),c!==m.cache&&Vm(r,[tn],o,!0),Cc(),c=y.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:y.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=dT(i,r,c,o);break e}else if(c!==d){d=Ai(Error(s(424)),r),Ec(d),r=dT(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(xt=Di(i.firstChild),Cn=r,it=!0,Ir=null,Ri=!0,o=oE(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Va(),c===d){r=qs(i,r,o);break e}Rn(i,r,c,o)}r=r.child}return r;case 26:return Jh(i,r),i===null?(o=I0(r.type,null,r.pendingProps,null))?r.memoizedState=o:it||(o=r.type,i=r.pendingProps,c=pd(Oe.current).createElement(o),c[Jt]=r,c[_n]=i,Nn(c,o,i),Zt(c),r.stateNode=c):r.memoizedState=I0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return gn(r),i===null&&it&&(c=r.stateNode=w0(r.type,r.pendingProps,Oe.current),Cn=r,Ri=!0,d=xt,Br(r.type)?(ng=d,xt=Di(c.firstChild)):xt=d),Rn(i,r,r.pendingProps.children,o),Jh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&it&&((d=c=xt)&&(c=AN(c,r.type,r.pendingProps,Ri),c!==null?(r.stateNode=c,Cn=r,xt=Di(c.firstChild),Ri=!1,d=!0):d=!1),d||Rr(r)),gn(r),d=r.type,m=r.pendingProps,y=i!==null?i.memoizedProps:null,c=m.children,Xp(d,m)?c=null:y!==null&&Xp(d,y)&&(r.flags|=32),r.memoizedState!==null&&(d=$m(i,r,zR,null,null,o),Yc._currentValue=d),Jh(i,r),Rn(i,r,c,o),r.child;case 6:return i===null&&it&&((i=o=xt)&&(o=CN(o,r.pendingProps,Ri),o!==null?(r.stateNode=o,Cn=r,xt=null,i=!0):i=!1),i||Rr(r)),null;case 13:return fT(i,r,o);case 4:return ht(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=qa(r,null,c,o):Rn(i,r,c,o),r.child;case 11:return sT(i,r,r.type,r.pendingProps,o);case 7:return Rn(i,r,r.pendingProps,o),r.child;case 8:return Rn(i,r,r.pendingProps.children,o),r.child;case 12:return Rn(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,Nr(r,r.type,c.value),Rn(i,r,c.children,o),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,ja(r),d=In(d),c=c(d),r.flags|=1,Rn(i,r,c,o),r.child;case 14:return rT(i,r,r.type,r.pendingProps,o);case 15:return aT(i,r,r.type,r.pendingProps,o);case 19:return pT(i,r,o);case 31:return QR(i,r,o);case 22:return oT(i,r,o,r.pendingProps);case 24:return ja(r),c=In(tn),i===null?(d=zm(),d===null&&(d=Ct,m=Um(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),r.memoizedState={parent:c,cache:d},Bm(r),Nr(r,tn,d)):((i.lanes&o)!==0&&(qm(i,r),Ic(r,null,null,o),Cc()),d=i.memoizedState,m=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),Nr(r,tn,c)):(c=m.cache,Nr(r,tn,c),c!==d.cache&&Vm(r,[tn],o,!0))),Rn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Hs(i){i.flags|=4}function wp(i,r,o,c,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(qT())i.flags|=8192;else throw Ba=Vh,Fm}else i.flags&=-16777217}function _T(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!O0(r))if(qT())i.flags|=8192;else throw Ba=Vh,Fm}function ed(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Pn():536870912,i.lanes|=r,il|=r)}function Mc(i,r){if(!it)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Ot(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function $R(i,r,o){var c=r.pendingProps;switch(Om(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ot(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),zs(tn),nt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Ho(r)?Hs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,km())),Ot(r),null;case 26:var d=r.type,m=r.memoizedState;return i===null?(Hs(r),m!==null?(Ot(r),_T(r,m)):(Ot(r),wp(r,d,null,c,o))):m?m!==i.memoizedState?(Hs(r),Ot(r),_T(r,m)):(Ot(r),r.flags&=-16777217):(i=i.memoizedProps,i!==c&&Hs(r),Ot(r),wp(r,d,i,c,o)),null;case 27:if($t(r),o=Oe.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Hs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Ot(r),null}i=ce.current,Ho(r)?$v(r):(i=w0(d,c,o),r.stateNode=i,Hs(r))}return Ot(r),null;case 5:if($t(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Hs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Ot(r),null}if(m=ce.current,Ho(r))$v(r);else{var y=pd(Oe.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?y.createElement("select",{is:c.is}):y.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?y.createElement(d,{is:c.is}):y.createElement(d)}}m[Jt]=r,m[_n]=c;e:for(y=r.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break e;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}r.stateNode=m;e:switch(Nn(m,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Hs(r)}}return Ot(r),wp(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Hs(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=Oe.current,Ho(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,d=Cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[Jt]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||f0(i.nodeValue,o)),i||Rr(r,!0)}else i=pd(i).createTextNode(c),i[Jt]=r,r.stateNode=i}return Ot(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(c=Ho(r),o!==null){if(i===null){if(!c)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[Jt]=r}else Va(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),i=!1}else o=km(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(di(r),r):(di(r),null);if((r.flags&128)!==0)throw Error(s(558))}return Ot(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=Ho(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Jt]=r}else Va(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),d=!1}else d=km(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(di(r),r):(di(r),null)}return di(r),(r.flags&128)!==0?(r.lanes=o,r):(o=c!==null,i=i!==null&&i.memoizedState!==null,o&&(c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),ed(r,r.updateQueue),Ot(r),null);case 4:return nt(),i===null&&Kp(r.stateNode.containerInfo),Ot(r),null;case 10:return zs(r.type),Ot(r),null;case 19:if($(Gt),c=r.memoizedState,c===null)return Ot(r),null;if(d=(r.flags&128)!==0,m=c.rendering,m===null)if(d)Mc(c,!1);else{if(qt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Fh(i),m!==null){for(r.flags|=128,Mc(c,!1),i=m.updateQueue,r.updateQueue=i,ed(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Gv(o,i),o=o.sibling;return re(Gt,Gt.current&1|2),it&&Us(r,c.treeForkCount),r.child}i=i.sibling}c.tail!==null&&Rt()>rd&&(r.flags|=128,d=!0,Mc(c,!1),r.lanes=4194304)}else{if(!d)if(i=Fh(m),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,ed(r,i),Mc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!it)return Ot(r),null}else 2*Rt()-c.renderingStartTime>rd&&o!==536870912&&(r.flags|=128,d=!0,Mc(c,!1),r.lanes=4194304);c.isBackwards?(m.sibling=r.child,r.child=m):(i=c.last,i!==null?i.sibling=m:r.child=m,c.last=m)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Rt(),i.sibling=null,o=Gt.current,re(Gt,d?o&1|2:o&1),it&&Us(r,c.treeForkCount),i):(Ot(r),null);case 22:case 23:return di(r),Ym(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),o=r.updateQueue,o!==null&&ed(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&$(za),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),zs(tn),Ot(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function XR(i,r){switch(Om(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return zs(tn),nt(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return $t(r),null;case 31:if(r.memoizedState!==null){if(di(r),r.alternate===null)throw Error(s(340));Va()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(di(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Va()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return $(Gt),null;case 4:return nt(),null;case 10:return zs(r.type),null;case 22:case 23:return di(r),Ym(),i!==null&&$(za),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return zs(tn),null;case 25:return null;default:return null}}function yT(i,r){switch(Om(r),r.tag){case 3:zs(tn),nt();break;case 26:case 27:case 5:$t(r);break;case 4:nt();break;case 31:r.memoizedState!==null&&di(r);break;case 13:di(r);break;case 19:$(Gt);break;case 10:zs(r.type);break;case 22:case 23:di(r),Ym(),i!==null&&$(za);break;case 24:zs(tn)}}function kc(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&i)===i){c=void 0;var m=o.create,y=o.inst;c=m(),y.destroy=c}o=o.next}while(o!==d)}}catch(b){_t(r,r.return,b)}}function Pr(i,r,o){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&i)===i){var y=c.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,d=r;var O=o,F=b;try{F()}catch(W){_t(d,O,W)}}}c=c.next}while(c!==m)}}catch(W){_t(r,r.return,W)}}function vT(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{cE(r,o)}catch(c){_t(i,i.return,c)}}}function ET(i,r,o){o.props=Ga(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){_t(i,r,c)}}function Pc(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(d){_t(i,r,d)}}function Es(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){_t(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){_t(i,r,d)}else o.current=null}function TT(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){_t(i,i.return,d)}}function Ap(i,r,o){try{var c=i.stateNode;vN(c,i.type,o,r),c[_n]=r}catch(d){_t(i,i.return,d)}}function ST(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Br(i.type)||i.tag===4}function Cp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ST(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Br(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ip(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ji));else if(c!==4&&(c===27&&Br(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Ip(i,r,o),i=i.sibling;i!==null;)Ip(i,r,o),i=i.sibling}function td(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&Br(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(td(i,r,o),i=i.sibling;i!==null;)td(i,r,o),i=i.sibling}function bT(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);Nn(r,c,o),r[Jt]=i,r[_n]=o}catch(m){_t(i,i.return,m)}}var Gs=!1,rn=!1,Rp=!1,wT=typeof WeakSet=="function"?WeakSet:Set,vn=null;function JR(i,r){if(i=i.containerInfo,Wp=Sd,i=Lv(i),Tm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var y=0,b=-1,O=-1,F=0,W=0,te=i,B=null;t:for(;;){for(var G;te!==o||d!==0&&te.nodeType!==3||(b=y+d),te!==m||c!==0&&te.nodeType!==3||(O=y+c),te.nodeType===3&&(y+=te.nodeValue.length),(G=te.firstChild)!==null;)B=te,te=G;for(;;){if(te===i)break t;if(B===o&&++F===d&&(b=y),B===m&&++W===c&&(O=y),(G=te.nextSibling)!==null)break;te=B,B=te.parentNode}te=G}o=b===-1||O===-1?null:{start:b,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for($p={focusedElem:i,selectionRange:o},Sd=!1,vn=r;vn!==null;)if(r=vn,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,vn=i;else for(;vn!==null;){switch(r=vn,m=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ye=Ga(o.type,d);i=c.getSnapshotBeforeUpdate(ye,m),c.__reactInternalSnapshotBeforeUpdate=i}catch(Ne){_t(o,o.return,Ne)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Zp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Zp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,vn=i;break}vn=r.return}}function AT(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Ys(i,o),c&4&&kc(5,o);break;case 1:if(Ys(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(y){_t(o,o.return,y)}else{var d=Ga(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(y){_t(o,o.return,y)}}c&64&&vT(o),c&512&&Pc(o,o.return);break;case 3:if(Ys(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{cE(i,r)}catch(y){_t(o,o.return,y)}}break;case 27:r===null&&c&4&&bT(o);case 26:case 5:Ys(i,o),r===null&&c&4&&TT(o),c&512&&Pc(o,o.return);break;case 12:Ys(i,o);break;case 31:Ys(i,o),c&4&&RT(i,o);break;case 13:Ys(i,o),c&4&&NT(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=oN.bind(null,o),IN(i,o))));break;case 22:if(c=o.memoizedState!==null||Gs,!c){r=r!==null&&r.memoizedState!==null||rn,d=Gs;var m=rn;Gs=c,(rn=r)&&!m?Qs(i,o,(o.subtreeFlags&8772)!==0):Ys(i,o),Gs=d,rn=m}break;case 30:break;default:Ys(i,o)}}function CT(i){var r=i.alternate;r!==null&&(i.alternate=null,CT(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Io(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Lt=null,Wn=!1;function Ks(i,r,o){for(o=o.child;o!==null;)IT(i,r,o),o=o.sibling}function IT(i,r,o){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(vt,o)}catch{}switch(o.tag){case 26:rn||Es(o,r),Ks(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:rn||Es(o,r);var c=Lt,d=Wn;Br(o.type)&&(Lt=o.stateNode,Wn=!1),Ks(i,r,o),Hc(o.stateNode),Lt=c,Wn=d;break;case 5:rn||Es(o,r);case 6:if(c=Lt,d=Wn,Lt=null,Ks(i,r,o),Lt=c,Wn=d,Lt!==null)if(Wn)try{(Lt.nodeType===9?Lt.body:Lt.nodeName==="HTML"?Lt.ownerDocument.body:Lt).removeChild(o.stateNode)}catch(m){_t(o,r,m)}else try{Lt.removeChild(o.stateNode)}catch(m){_t(o,r,m)}break;case 18:Lt!==null&&(Wn?(i=Lt,v0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),hl(i)):v0(Lt,o.stateNode));break;case 4:c=Lt,d=Wn,Lt=o.stateNode.containerInfo,Wn=!0,Ks(i,r,o),Lt=c,Wn=d;break;case 0:case 11:case 14:case 15:Pr(2,o,r),rn||Pr(4,o,r),Ks(i,r,o);break;case 1:rn||(Es(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&ET(o,r,c)),Ks(i,r,o);break;case 21:Ks(i,r,o);break;case 22:rn=(c=rn)||o.memoizedState!==null,Ks(i,r,o),rn=c;break;default:Ks(i,r,o)}}function RT(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{hl(i)}catch(o){_t(r,r.return,o)}}}function NT(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{hl(i)}catch(o){_t(r,r.return,o)}}function ZR(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new wT),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new wT),r;default:throw Error(s(435,i.tag))}}function nd(i,r){var o=ZR(i);r.forEach(function(c){if(!o.has(c)){o.add(c);var d=lN.bind(null,i,c);c.then(d,d)}})}function $n(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=i,y=r,b=y;e:for(;b!==null;){switch(b.tag){case 27:if(Br(b.type)){Lt=b.stateNode,Wn=!1;break e}break;case 5:Lt=b.stateNode,Wn=!1;break e;case 3:case 4:Lt=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Lt===null)throw Error(s(160));IT(m,y,d),Lt=null,Wn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)DT(r,i),r=r.sibling}var Gi=null;function DT(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:$n(r,i),Xn(i),c&4&&(Pr(3,i,i.return),kc(3,i),Pr(5,i,i.return));break;case 1:$n(r,i),Xn(i),c&512&&(rn||o===null||Es(o,o.return)),c&64&&Gs&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=Gi;if($n(r,i),Xn(i),c&512&&(rn||o===null||Es(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[as]||m[Jt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Nn(m,c,o),m[Jt]=i,Zt(m),c=m;break e;case"link":var y=D0("link","href",d).get(c+(o.href||""));if(y){for(var b=0;b<y.length;b++)if(m=y[b],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(b,1);break t}}m=d.createElement(c),Nn(m,c,o),d.head.appendChild(m);break;case"meta":if(y=D0("meta","content",d).get(c+(o.content||""))){for(b=0;b<y.length;b++)if(m=y[b],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(b,1);break t}}m=d.createElement(c),Nn(m,c,o),d.head.appendChild(m);break;default:throw Error(s(468,c))}m[Jt]=i,Zt(m),c=m}i.stateNode=c}else x0(d,i.type,i.stateNode);else i.stateNode=N0(d,c,i.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?x0(d,i.type,i.stateNode):N0(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Ap(i,i.memoizedProps,o.memoizedProps)}break;case 27:$n(r,i),Xn(i),c&512&&(rn||o===null||Es(o,o.return)),o!==null&&c&4&&Ap(i,i.memoizedProps,o.memoizedProps);break;case 5:if($n(r,i),Xn(i),c&512&&(rn||o===null||Es(o,o.return)),i.flags&32){d=i.stateNode;try{Qn(d,"")}catch(ye){_t(i,i.return,ye)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,Ap(i,d,o!==null?o.memoizedProps:d)),c&1024&&(Rp=!0);break;case 6:if($n(r,i),Xn(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(ye){_t(i,i.return,ye)}}break;case 3:if(yd=null,d=Gi,Gi=gd(r.containerInfo),$n(r,i),Gi=d,Xn(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{hl(r.containerInfo)}catch(ye){_t(i,i.return,ye)}Rp&&(Rp=!1,xT(i));break;case 4:c=Gi,Gi=gd(i.stateNode.containerInfo),$n(r,i),Xn(i),Gi=c;break;case 12:$n(r,i),Xn(i);break;case 31:$n(r,i),Xn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,nd(i,c)));break;case 13:$n(r,i),Xn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sd=Rt()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,nd(i,c)));break;case 22:d=i.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,F=Gs,W=rn;if(Gs=F||d,rn=W||O,$n(r,i),rn=W,Gs=F,Xn(i),c&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||O||Gs||rn||Ka(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){O=o=r;try{if(m=O.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=O.stateNode;var te=O.memoizedProps.style,B=te!=null&&te.hasOwnProperty("display")?te.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ye){_t(O,O.return,ye)}}}else if(r.tag===6){if(o===null){O=r;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(ye){_t(O,O.return,ye)}}}else if(r.tag===18){if(o===null){O=r;try{var G=O.stateNode;d?E0(G,!0):E0(O.stateNode,!1)}catch(ye){_t(O,O.return,ye)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,nd(i,o))));break;case 19:$n(r,i),Xn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,nd(i,c)));break;case 30:break;case 21:break;default:$n(r,i),Xn(i)}}function Xn(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(ST(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,m=Cp(i);td(i,m,d);break;case 5:var y=o.stateNode;o.flags&32&&(Qn(y,""),o.flags&=-33);var b=Cp(i);td(i,b,y);break;case 3:case 4:var O=o.stateNode.containerInfo,F=Cp(i);Ip(i,F,O);break;default:throw Error(s(161))}}catch(W){_t(i,i.return,W)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function xT(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;xT(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ys(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)AT(i,r.alternate,r),r=r.sibling}function Ka(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Pr(4,r,r.return),Ka(r);break;case 1:Es(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&ET(r,r.return,o),Ka(r);break;case 27:Hc(r.stateNode);case 26:case 5:Es(r,r.return),Ka(r);break;case 22:r.memoizedState===null&&Ka(r);break;case 30:Ka(r);break;default:Ka(r)}i=i.sibling}}function Qs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,m=r,y=m.flags;switch(m.tag){case 0:case 11:case 15:Qs(d,m,o),kc(4,m);break;case 1:if(Qs(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(F){_t(c,c.return,F)}if(c=m,d=c.updateQueue,d!==null){var b=c.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)lE(O[d],b)}catch(F){_t(c,c.return,F)}}o&&y&64&&vT(m),Pc(m,m.return);break;case 27:bT(m);case 26:case 5:Qs(d,m,o),o&&c===null&&y&4&&TT(m),Pc(m,m.return);break;case 12:Qs(d,m,o);break;case 31:Qs(d,m,o),o&&y&4&&RT(d,m);break;case 13:Qs(d,m,o),o&&y&4&&NT(d,m);break;case 22:m.memoizedState===null&&Qs(d,m,o),Pc(m,m.return);break;case 30:break;default:Qs(d,m,o)}r=r.sibling}}function Np(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Tc(o))}function Dp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Tc(i))}function Ki(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)OT(i,r,o,c),r=r.sibling}function OT(i,r,o,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:Ki(i,r,o,c),d&2048&&kc(9,r);break;case 1:Ki(i,r,o,c);break;case 3:Ki(i,r,o,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Tc(i)));break;case 12:if(d&2048){Ki(i,r,o,c),i=r.stateNode;try{var m=r.memoizedProps,y=m.id,b=m.onPostCommit;typeof b=="function"&&b(y,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(O){_t(r,r.return,O)}}else Ki(i,r,o,c);break;case 31:Ki(i,r,o,c);break;case 13:Ki(i,r,o,c);break;case 23:break;case 22:m=r.stateNode,y=r.alternate,r.memoizedState!==null?m._visibility&2?Ki(i,r,o,c):Lc(i,r):m._visibility&2?Ki(i,r,o,c):(m._visibility|=2,el(i,r,o,c,(r.subtreeFlags&10256)!==0||!1)),d&2048&&Np(y,r);break;case 24:Ki(i,r,o,c),d&2048&&Dp(r.alternate,r);break;default:Ki(i,r,o,c)}}function el(i,r,o,c,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=i,y=r,b=o,O=c,F=y.flags;switch(y.tag){case 0:case 11:case 15:el(m,y,b,O,d),kc(8,y);break;case 23:break;case 22:var W=y.stateNode;y.memoizedState!==null?W._visibility&2?el(m,y,b,O,d):Lc(m,y):(W._visibility|=2,el(m,y,b,O,d)),d&&F&2048&&Np(y.alternate,y);break;case 24:el(m,y,b,O,d),d&&F&2048&&Dp(y.alternate,y);break;default:el(m,y,b,O,d)}r=r.sibling}}function Lc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,d=c.flags;switch(c.tag){case 22:Lc(o,c),d&2048&&Np(c.alternate,c);break;case 24:Lc(o,c),d&2048&&Dp(c.alternate,c);break;default:Lc(o,c)}r=r.sibling}}var Vc=8192;function tl(i,r,o){if(i.subtreeFlags&Vc)for(i=i.child;i!==null;)MT(i,r,o),i=i.sibling}function MT(i,r,o){switch(i.tag){case 26:tl(i,r,o),i.flags&Vc&&i.memoizedState!==null&&jN(o,Gi,i.memoizedState,i.memoizedProps);break;case 5:tl(i,r,o);break;case 3:case 4:var c=Gi;Gi=gd(i.stateNode.containerInfo),tl(i,r,o),Gi=c;break;case 22:i.memoizedState===null&&(c=i.alternate,c!==null&&c.memoizedState!==null?(c=Vc,Vc=16777216,tl(i,r,o),Vc=c):tl(i,r,o));break;default:tl(i,r,o)}}function kT(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Uc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];vn=c,LT(c,i)}kT(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)PT(i),i=i.sibling}function PT(i){switch(i.tag){case 0:case 11:case 15:Uc(i),i.flags&2048&&Pr(9,i,i.return);break;case 3:Uc(i);break;case 12:Uc(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,id(i)):Uc(i);break;default:Uc(i)}}function id(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];vn=c,LT(c,i)}kT(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Pr(8,r,r.return),id(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,id(r));break;default:id(r)}i=i.sibling}}function LT(i,r){for(;vn!==null;){var o=vn;switch(o.tag){case 0:case 11:case 15:Pr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Tc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,vn=c;else e:for(o=i;vn!==null;){c=vn;var d=c.sibling,m=c.return;if(CT(c),c===o){vn=null;break e}if(d!==null){d.return=m,vn=d;break e}vn=m}}}var eN={getCacheForType:function(i){var r=In(tn),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return In(tn).controller.signal}},tN=typeof WeakMap=="function"?WeakMap:Map,ct=0,Ct=null,Qe=null,Je=0,gt=0,fi=null,Lr=!1,nl=!1,xp=!1,Ws=0,qt=0,Vr=0,Ya=0,Op=0,mi=0,il=0,jc=null,Jn=null,Mp=!1,sd=0,VT=0,rd=1/0,ad=null,Ur=null,fn=0,jr=null,sl=null,$s=0,kp=0,Pp=null,UT=null,zc=0,Lp=null;function pi(){return(ct&2)!==0&&Je!==0?Je&-Je:K.T!==null?Bp():oh()}function jT(){if(mi===0)if((Je&536870912)===0||it){var i=is;is<<=1,(is&3932160)===0&&(is=262144),mi=i}else mi=536870912;return i=hi.current,i!==null&&(i.flags|=32),mi}function Zn(i,r,o){(i===Ct&&(gt===2||gt===9)||i.cancelPendingCommit!==null)&&(rl(i,0),zr(i,Je,mi,!1)),Ta(i,o),((ct&2)===0||i!==Ct)&&(i===Ct&&((ct&2)===0&&(Ya|=o),qt===4&&zr(i,Je,mi,!1)),Ts(i))}function zT(i,r,o){if((ct&6)!==0)throw Error(s(327));var c=!o&&(r&127)===0&&(r&i.expiredLanes)===0||rt(i,r),d=c?sN(i,r):Up(i,r,!0),m=c;do{if(d===0){nl&&!c&&zr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!nN(o)){d=Up(i,r,!1),m=!1;continue}if(d===2){if(m=r,i.errorRecoveryDisabledLanes&m)var y=0;else y=i.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){r=y;e:{var b=i;d=jc;var O=b.current.memoizedState.isDehydrated;if(O&&(rl(b,y).flags|=256),y=Up(b,y,!1),y!==2){if(xp&&!O){b.errorRecoveryDisabledLanes|=m,Ya|=m,d=4;break e}m=Jn,Jn=d,m!==null&&(Jn===null?Jn=m:Jn.push.apply(Jn,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){rl(i,0),zr(i,r,0,!0);break}e:{switch(c=i,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:zr(c,r,mi,!Lr);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=sd+300-Rt(),10<d)){if(zr(c,r,mi,!Lr),ve(c,0,!0)!==0)break e;$s=r,c.timeoutHandle=_0(FT.bind(null,c,o,Jn,ad,Mp,r,mi,Ya,il,Lr,m,"Throttled",-0,0),d);break e}FT(c,o,Jn,ad,Mp,r,mi,Ya,il,Lr,m,null,-0,0)}}break}while(!0);Ts(i)}function FT(i,r,o,c,d,m,y,b,O,F,W,te,B,G){if(i.timeoutHandle=-1,te=r.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},MT(r,m,te);var ye=(m&62914560)===m?sd-Rt():(m&4194048)===m?VT-Rt():0;if(ye=zN(te,ye),ye!==null){$s=m,i.cancelPendingCommit=ye(WT.bind(null,i,r,m,o,c,d,y,b,O,W,te,null,B,G)),zr(i,m,y,!F);return}}WT(i,r,m,o,c,d,y,b,O)}function nN(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!ci(m(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(i,r,o,c){r&=~Op,r&=~Ya,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var m=31-Ut(d),y=1<<m;c[m]=-1,d&=~y}o!==0&&Sa(i,o,r)}function od(){return(ct&6)===0?(Fc(0),!1):!0}function Vp(){if(Qe!==null){if(gt===0)var i=Qe.return;else i=Qe,js=Ua=null,Zm(i),Wo=null,bc=0,i=Qe;for(;i!==null;)yT(i.alternate,i),i=i.return;Qe=null}}function rl(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,SN(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),$s=0,Vp(),Ct=i,Qe=o=Vs(i.current,null),Je=r,gt=0,fi=null,Lr=!1,nl=rt(i,r),xp=!1,il=mi=Op=Ya=Vr=qt=0,Jn=jc=null,Mp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-Ut(c),m=1<<d;r|=i[d],c&=~m}return Ws=r,Rh(),o}function BT(i,r){Be=null,K.H=xc,r===Qo||r===Lh?(r=sE(),gt=3):r===Fm?(r=sE(),gt=4):gt=r===pp?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,fi=r,Qe===null&&(qt=1,$h(i,Ai(r,i.current)))}function qT(){var i=hi.current;return i===null?!0:(Je&4194048)===Je?Ni===null:(Je&62914560)===Je||(Je&536870912)!==0?i===Ni:!1}function HT(){var i=K.H;return K.H=xc,i===null?xc:i}function GT(){var i=K.A;return K.A=eN,i}function ld(){qt=4,Lr||(Je&4194048)!==Je&&hi.current!==null||(nl=!0),(Vr&134217727)===0&&(Ya&134217727)===0||Ct===null||zr(Ct,Je,mi,!1)}function Up(i,r,o){var c=ct;ct|=2;var d=HT(),m=GT();(Ct!==i||Je!==r)&&(ad=null,rl(i,r)),r=!1;var y=qt;e:do try{if(gt!==0&&Qe!==null){var b=Qe,O=fi;switch(gt){case 8:Vp(),y=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(r=!0);var F=gt;if(gt=0,fi=null,al(i,b,O,F),o&&nl){y=0;break e}break;default:F=gt,gt=0,fi=null,al(i,b,O,F)}}iN(),y=qt;break}catch(W){BT(i,W)}while(!0);return r&&i.shellSuspendCounter++,js=Ua=null,ct=c,K.H=d,K.A=m,Qe===null&&(Ct=null,Je=0,Rh()),y}function iN(){for(;Qe!==null;)KT(Qe)}function sN(i,r){var o=ct;ct|=2;var c=HT(),d=GT();Ct!==i||Je!==r?(ad=null,rd=Rt()+500,rl(i,r)):nl=rt(i,r);e:do try{if(gt!==0&&Qe!==null){r=Qe;var m=fi;t:switch(gt){case 1:gt=0,fi=null,al(i,r,m,1);break;case 2:case 9:if(nE(m)){gt=0,fi=null,YT(r);break}r=function(){gt!==2&&gt!==9||Ct!==i||(gt=7),Ts(i)},m.then(r,r);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:nE(m)?(gt=0,fi=null,YT(r)):(gt=0,fi=null,al(i,r,m,7));break;case 5:var y=null;switch(Qe.tag){case 26:y=Qe.memoizedState;case 5:case 27:var b=Qe;if(y?O0(y):b.stateNode.complete){gt=0,fi=null;var O=b.sibling;if(O!==null)Qe=O;else{var F=b.return;F!==null?(Qe=F,cd(F)):Qe=null}break t}}gt=0,fi=null,al(i,r,m,5);break;case 6:gt=0,fi=null,al(i,r,m,6);break;case 8:Vp(),qt=6;break e;default:throw Error(s(462))}}rN();break}catch(W){BT(i,W)}while(!0);return js=Ua=null,K.H=c,K.A=d,ct=o,Qe!==null?0:(Ct=null,Je=0,Rh(),qt)}function rN(){for(;Qe!==null&&!wt();)KT(Qe)}function KT(i){var r=gT(i.alternate,i,Ws);i.memoizedProps=i.pendingProps,r===null?cd(i):Qe=r}function YT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=uT(o,r,r.pendingProps,r.type,void 0,Je);break;case 11:r=uT(o,r,r.pendingProps,r.type.render,r.ref,Je);break;case 5:Zm(r);default:yT(o,r),r=Qe=Gv(r,Ws),r=gT(o,r,Ws)}i.memoizedProps=i.pendingProps,r===null?cd(i):Qe=r}function al(i,r,o,c){js=Ua=null,Zm(r),Wo=null,bc=0;var d=r.return;try{if(YR(i,d,r,o,Je)){qt=1,$h(i,Ai(o,i.current)),Qe=null;return}}catch(m){if(d!==null)throw Qe=d,m;qt=1,$h(i,Ai(o,i.current)),Qe=null;return}r.flags&32768?(it||c===1?i=!0:nl||(Je&536870912)!==0?i=!1:(Lr=i=!0,(c===2||c===9||c===3||c===6)&&(c=hi.current,c!==null&&c.tag===13&&(c.flags|=16384))),QT(r,i)):cd(r)}function cd(i){var r=i;do{if((r.flags&32768)!==0){QT(r,Lr);return}i=r.return;var o=$R(r.alternate,r,Ws);if(o!==null){Qe=o;return}if(r=r.sibling,r!==null){Qe=r;return}Qe=r=i}while(r!==null);qt===0&&(qt=5)}function QT(i,r){do{var o=XR(i.alternate,i);if(o!==null){o.flags&=32767,Qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Qe=i;return}Qe=i=o}while(i!==null);qt=6,Qe=null}function WT(i,r,o,c,d,m,y,b,O){i.cancelPendingCommit=null;do ud();while(fn!==0);if((ct&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Cm,_m(i,o,m,y,b,O),i===Ct&&(Qe=Ct=null,Je=0),sl=r,jr=i,$s=o,kp=m,Pp=d,UT=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,cN(Xt,function(){return e0(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=K.T,K.T=null,d=le.p,le.p=2,y=ct,ct|=4;try{JR(i,r,o)}finally{ct=y,le.p=d,K.T=c}}fn=1,$T(),XT(),JT()}}function $T(){if(fn===1){fn=0;var i=jr,r=sl,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var c=le.p;le.p=2;var d=ct;ct|=4;try{DT(r,i);var m=$p,y=Lv(i.containerInfo),b=m.focusedElem,O=m.selectionRange;if(y!==b&&b&&b.ownerDocument&&Pv(b.ownerDocument.documentElement,b)){if(O!==null&&Tm(b)){var F=O.start,W=O.end;if(W===void 0&&(W=F),"selectionStart"in b)b.selectionStart=F,b.selectionEnd=Math.min(W,b.value.length);else{var te=b.ownerDocument||document,B=te&&te.defaultView||window;if(B.getSelection){var G=B.getSelection(),ye=b.textContent.length,Ne=Math.min(O.start,ye),bt=O.end===void 0?Ne:Math.min(O.end,ye);!G.extend&&Ne>bt&&(y=bt,bt=Ne,Ne=y);var U=kv(b,Ne),P=kv(b,bt);if(U&&P&&(G.rangeCount!==1||G.anchorNode!==U.node||G.anchorOffset!==U.offset||G.focusNode!==P.node||G.focusOffset!==P.offset)){var z=te.createRange();z.setStart(U.node,U.offset),G.removeAllRanges(),Ne>bt?(G.addRange(z),G.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),G.addRange(z))}}}}for(te=[],G=b;G=G.parentNode;)G.nodeType===1&&te.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<te.length;b++){var X=te[b];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Sd=!!Wp,$p=Wp=null}finally{ct=d,le.p=c,K.T=o}}i.current=r,fn=2}}function XT(){if(fn===2){fn=0;var i=jr,r=sl,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var c=le.p;le.p=2;var d=ct;ct|=4;try{AT(i,r.alternate,r)}finally{ct=d,le.p=c,K.T=o}}fn=3}}function JT(){if(fn===4||fn===3){fn=0,At();var i=jr,r=sl,o=$s,c=UT;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?fn=5:(fn=0,sl=jr=null,ZT(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Ur=null),Ms(o),r=r.stateNode,dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(vt,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=K.T,d=le.p,le.p=2,K.T=null;try{for(var m=i.onRecoverableError,y=0;y<c.length;y++){var b=c[y];m(b.value,{componentStack:b.stack})}}finally{K.T=r,le.p=d}}($s&3)!==0&&ud(),Ts(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===Lp?zc++:(zc=0,Lp=i):zc=0,Fc(0)}}function ZT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Tc(r)))}function ud(){return $T(),XT(),JT(),e0()}function e0(){if(fn!==5)return!1;var i=jr,r=kp;kp=0;var o=Ms($s),c=K.T,d=le.p;try{le.p=32>o?32:o,K.T=null,o=Pp,Pp=null;var m=jr,y=$s;if(fn=0,sl=jr=null,$s=0,(ct&6)!==0)throw Error(s(331));var b=ct;if(ct|=4,PT(m.current),OT(m,m.current,y,o),ct=b,Fc(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(vt,m)}catch{}return!0}finally{le.p=d,K.T=c,ZT(i,r)}}function t0(i,r,o){r=Ai(o,r),r=mp(i.stateNode,r,2),i=Or(i,r,2),i!==null&&(Ta(i,2),Ts(i))}function _t(i,r,o){if(i.tag===3)t0(i,i,o);else for(;r!==null;){if(r.tag===3){t0(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){i=Ai(o,i),o=nT(2),c=Or(r,o,2),c!==null&&(iT(o,c,r,i),Ta(c,2),Ts(c));break}}r=r.return}}function jp(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new tN;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(xp=!0,d.add(o),i=aN.bind(null,i,r,o),r.then(i,i))}function aN(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,Ct===i&&(Je&o)===o&&(qt===4||qt===3&&(Je&62914560)===Je&&300>Rt()-sd?(ct&2)===0&&rl(i,0):Op|=o,il===Je&&(il=0)),Ts(i)}function n0(i,r){r===0&&(r=Pn()),i=Pa(i,r),i!==null&&(Ta(i,r),Ts(i))}function oN(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),n0(i,o)}function lN(i,r){var o=0;switch(i.tag){case 31:case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),n0(i,o)}function cN(i,r){return pe(i,r)}var hd=null,ol=null,zp=!1,dd=!1,Fp=!1,Fr=0;function Ts(i){i!==ol&&i.next===null&&(ol===null?hd=ol=i:ol=ol.next=i),dd=!0,zp||(zp=!0,hN())}function Fc(i,r){if(!Fp&&dd){Fp=!0;do for(var o=!1,c=hd;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var y=c.suspendedLanes,b=c.pingedLanes;m=(1<<31-Ut(42|i)+1)-1,m&=d&~(y&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,a0(c,m))}else m=Je,m=ve(c,c===Ct?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||rt(c,m)||(o=!0,a0(c,m));c=c.next}while(o);Fp=!1}}function uN(){i0()}function i0(){dd=zp=!1;var i=0;Fr!==0&&TN()&&(i=Fr);for(var r=Rt(),o=null,c=hd;c!==null;){var d=c.next,m=s0(c,r);m===0?(c.next=null,o===null?hd=d:o.next=d,d===null&&(ol=o)):(o=c,(i!==0||(m&3)!==0)&&(dd=!0)),c=d}fn!==0&&fn!==5||Fc(i),Fr!==0&&(Fr=0)}function s0(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var y=31-Ut(m),b=1<<y,O=d[y];O===-1?((b&o)===0||(b&c)!==0)&&(d[y]=Ft(b,r)):O<=r&&(i.expiredLanes|=b),m&=~b}if(r=Ct,o=Je,o=ve(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(gt===2||gt===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&je(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||rt(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&je(c),Ms(o)){case 2:case 8:o=wn;break;case 32:o=Xt;break;case 268435456:o=Bn;break;default:o=Xt}return c=r0.bind(null,i),o=pe(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&je(c),i.callbackPriority=2,i.callbackNode=null,2}function r0(i,r){if(fn!==0&&fn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(ud()&&i.callbackNode!==o)return null;var c=Je;return c=ve(i,i===Ct?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(zT(i,c,r),s0(i,Rt()),i.callbackNode!=null&&i.callbackNode===o?r0.bind(null,i):null)}function a0(i,r){if(ud())return null;zT(i,r,!0)}function hN(){bN(function(){(ct&6)!==0?pe(ns,uN):i0()})}function Bp(){if(Fr===0){var i=Ko;i===0&&(i=vi,vi<<=1,(vi&261888)===0&&(vi=256)),Fr=i}return Fr}function o0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:xo(""+i)}function l0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function dN(i,r,o,c,d){if(r==="submit"&&o&&o.stateNode===d){var m=o0((d[_n]||null).action),y=c.submitter;y&&(r=(r=y[_n]||null)?o0(r.formAction):y.getAttribute("formAction"),r!==null&&(m=r,y=null));var b=new ms("action","action",null,c,d);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Fr!==0){var O=y?l0(d,y):new FormData(d);lp(o,{pending:!0,data:O,method:d.method,action:m},null,O)}}else typeof m=="function"&&(b.preventDefault(),O=y?l0(d,y):new FormData(d),lp(o,{pending:!0,data:O,method:d.method,action:m},m,O))},currentTarget:d}]})}}for(var qp=0;qp<Am.length;qp++){var Hp=Am[qp],fN=Hp.toLowerCase(),mN=Hp[0].toUpperCase()+Hp.slice(1);Hi(fN,"on"+mN)}Hi(jv,"onAnimationEnd"),Hi(zv,"onAnimationIteration"),Hi(Fv,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(DR,"onTransitionRun"),Hi(xR,"onTransitionStart"),Hi(OR,"onTransitionCancel"),Hi(Bv,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cs("onBeforeInput",["compositionend","keypress","textInput","paste"]),cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bc));function c0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var y=c.length-1;0<=y;y--){var b=c[y],O=b.instance,F=b.currentTarget;if(b=b.listener,O!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=F;try{m(d)}catch(W){Ih(W)}d.currentTarget=null,m=O}else for(y=0;y<c.length;y++){if(b=c[y],O=b.instance,F=b.currentTarget,b=b.listener,O!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=F;try{m(d)}catch(W){Ih(W)}d.currentTarget=null,m=O}}}}function We(i,r){var o=r[Co];o===void 0&&(o=r[Co]=new Set);var c=i+"__bubble";o.has(c)||(u0(r,i,2,!1),o.add(c))}function Gp(i,r,o){var c=0;r&&(c|=4),u0(o,i,c,r)}var fd="_reactListening"+Math.random().toString(36).slice(2);function Kp(i){if(!i[fd]){i[fd]=!0,ec.forEach(function(o){o!=="selectionchange"&&(pN.has(o)||Gp(o,!1,i),Gp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[fd]||(r[fd]=!0,Gp("selectionchange",!1,r))}}function u0(i,r,o,c){switch(j0(r)){case 2:var d=qN;break;case 8:d=HN;break;default:d=og}o=d.bind(null,r,o,i),d=void 0,!Ia||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function Yp(i,r,o,c,d){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var y=c.tag;if(y===3||y===4){var b=c.stateNode.containerInfo;if(b===d)break;if(y===4)for(y=c.return;y!==null;){var O=y.tag;if((O===3||O===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;b!==null;){if(y=os(b),y===null)return;if(O=y.tag,O===5||O===6||O===26||O===27){c=m=y;continue e}b=b.parentNode}}c=c.return}Sr(function(){var F=m,W=Ti(o),te=[];e:{var B=qv.get(i);if(B!==void 0){var G=ms,ye=i;switch(i){case"keypress":if(Na(o)===0)break e;case"keydown":case"keyup":G=wh;break;case"focusin":ye="focus",G=xa;break;case"focusout":ye="blur",G=xa;break;case"beforeblur":case"afterblur":G=xa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=_;break;case jv:case zv:case Fv:G=_h;break;case Bv:G=A;break;case"scroll":case"scrollend":G=dc;break;case"wheel":G=H;break;case"copy":case"cut":case"paste":G=yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Ls;break;case"toggle":case"beforetoggle":G=Fe}var Ne=(r&4)!==0,bt=!Ne&&(i==="scroll"||i==="scrollend"),U=Ne?B!==null?B+"Capture":null:B;Ne=[];for(var P=F,z;P!==null;){var X=P;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||U===null||(X=zi(P,U),X!=null&&Ne.push(qc(P,X,z))),bt)break;P=P.return}0<Ne.length&&(B=new G(B,ye,null,o,W),te.push({event:B,listeners:Ne}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",B&&o!==cc&&(ye=o.relatedTarget||o.fromElement)&&(os(ye)||ye[rs]))break e;if((G||B)&&(B=W.window===W?W:(B=W.ownerDocument)?B.defaultView||B.parentWindow:window,G?(ye=o.relatedTarget||o.toElement,G=F,ye=ye?os(ye):null,ye!==null&&(bt=l(ye),Ne=ye.tag,ye!==bt||Ne!==5&&Ne!==27&&Ne!==6)&&(ye=null)):(G=null,ye=F),G!==ye)){if(Ne=fc,X="onMouseLeave",U="onMouseEnter",P="mouse",(i==="pointerout"||i==="pointerover")&&(Ne=Ls,X="onPointerLeave",U="onPointerEnter",P="pointer"),bt=G==null?B:oi(G),z=ye==null?B:oi(ye),B=new Ne(X,P+"leave",G,o,W),B.target=bt,B.relatedTarget=z,X=null,os(W)===F&&(Ne=new Ne(U,P+"enter",ye,o,W),Ne.target=z,Ne.relatedTarget=bt,X=Ne),bt=X,G&&ye)t:{for(Ne=gN,U=G,P=ye,z=0,X=U;X;X=Ne(X))z++;X=0;for(var be=P;be;be=Ne(be))X++;for(;0<z-X;)U=Ne(U),z--;for(;0<X-z;)P=Ne(P),X--;for(;z--;){if(U===P||P!==null&&U===P.alternate){Ne=U;break t}U=Ne(U),P=Ne(P)}Ne=null}else Ne=null;G!==null&&h0(te,B,G,Ne,!1),ye!==null&&bt!==null&&h0(te,bt,ye,Ne,!0)}}e:{if(B=F?oi(F):window,G=B.nodeName&&B.nodeName.toLowerCase(),G==="select"||G==="input"&&B.type==="file")var at=Rv;else if(Cv(B))if(Nv)at=IR;else{at=AR;var Se=wR}else G=B.nodeName,!G||G.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?F&&Do(F.elementType)&&(at=Rv):at=CR;if(at&&(at=at(i,F))){Iv(te,at,o,W);break e}Se&&Se(i,B,F),i==="focusout"&&F&&B.type==="number"&&F.memoizedProps.value!=null&&ac(B,"number",B.value)}switch(Se=F?oi(F):window,i){case"focusin":(Cv(Se)||Se.contentEditable==="true")&&(Uo=Se,Sm=F,yc=null);break;case"focusout":yc=Sm=Uo=null;break;case"mousedown":bm=!0;break;case"contextmenu":case"mouseup":case"dragend":bm=!1,Vv(te,o,W);break;case"selectionchange":if(NR)break;case"keydown":case"keyup":Vv(te,o,W)}var qe;if(lt)e:{switch(i){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else Vo?Oa(i,o)&&(Ze="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ze="onCompositionStart");Ze&&(_s&&o.locale!=="ko"&&(Vo||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&Vo&&(qe=hc()):(fs=W,uc="value"in fs?fs.value:fs.textContent,Vo=!0)),Se=md(F,Ze),0<Se.length&&(Ze=new gs(Ze,i,null,o,W),te.push({event:Ze,listeners:Se}),qe?Ze.data=qe:(qe=Lo(o),qe!==null&&(Ze.data=qe)))),(qe=bi?ER(i,o):TR(i,o))&&(Ze=md(F,"onBeforeInput"),0<Ze.length&&(Se=new gs("onBeforeInput","beforeinput",null,o,W),te.push({event:Se,listeners:Ze}),Se.data=qe)),dN(te,i,F,o,W)}c0(te,r)})}function qc(i,r,o){return{instance:i,listener:r,currentTarget:o}}function md(i,r){for(var o=r+"Capture",c=[];i!==null;){var d=i,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=zi(i,o),d!=null&&c.unshift(qc(i,d,m)),d=zi(i,r),d!=null&&c.push(qc(i,d,m))),i.tag===3)return c;i=i.return}return[]}function gN(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function h0(i,r,o,c,d){for(var m=r._reactName,y=[];o!==null&&o!==c;){var b=o,O=b.alternate,F=b.stateNode;if(b=b.tag,O!==null&&O===c)break;b!==5&&b!==26&&b!==27||F===null||(O=F,d?(F=zi(o,m),F!=null&&y.unshift(qc(o,F,O))):d||(F=zi(o,m),F!=null&&y.push(qc(o,F,O)))),o=o.return}y.length!==0&&i.push({event:r,listeners:y})}var _N=/\r\n?/g,yN=/\u0000|\uFFFD/g;function d0(i){return(typeof i=="string"?i:""+i).replace(_N,`
`).replace(yN,"")}function f0(i,r){return r=d0(r),d0(i)===r}function St(i,r,o,c,d,m){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Qn(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Qn(i,""+c);break;case"className":li(i,"class",c);break;case"tabIndex":li(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":li(i,o,c);break;case"style":lc(i,c,m);break;case"data":if(r!=="object"){li(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=xo(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&St(i,r,"name",d.name,d,null),St(i,r,"formEncType",d.formEncType,d,null),St(i,r,"formMethod",d.formMethod,d,null),St(i,r,"formTarget",d.formTarget,d,null)):(St(i,r,"encType",d.encType,d,null),St(i,r,"method",d.method,d,null),St(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=xo(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=ji);break;case"onScroll":c!=null&&We("scroll",i);break;case"onScrollEnd":c!=null&&We("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=xo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":We("beforetoggle",i),We("toggle",i),Ro(i,"popover",c);break;case"xlinkActuate":en(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":en(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":en(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":en(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":en(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":en(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":en(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":en(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":en(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ro(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=mh.get(o)||o,Ro(i,o,c))}}function Qp(i,r,o,c,d,m){switch(o){case"style":lc(i,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?Qn(i,c):(typeof c=="number"||typeof c=="bigint")&&Qn(i,""+c);break;case"onScroll":c!=null&&We("scroll",i);break;case"onScrollEnd":c!=null&&We("scrollend",i);break;case"onClick":c!=null&&(i.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tc.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),m=i[_n]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,d);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):Ro(i,o,c)}}}function Nn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",i),We("load",i);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var y=o[m];if(y!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:St(i,r,m,y,o,null)}}d&&St(i,r,"srcSet",o.srcSet,o,null),c&&St(i,r,"src",o.src,o,null);return;case"input":We("invalid",i);var b=m=y=d=null,O=null,F=null;for(c in o)if(o.hasOwnProperty(c)){var W=o[c];if(W!=null)switch(c){case"name":d=W;break;case"type":y=W;break;case"checked":O=W;break;case"defaultChecked":F=W;break;case"value":m=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:St(i,r,c,W,o,null)}}hh(i,m,b,O,F,y,d,!1);return;case"select":We("invalid",i),c=y=m=null;for(d in o)if(o.hasOwnProperty(d)&&(b=o[d],b!=null))switch(d){case"value":m=b;break;case"defaultValue":y=b;break;case"multiple":c=b;default:St(i,r,d,b,o,null)}r=m,o=y,i.multiple=!!c,r!=null?yr(i,!!c,r,!1):o!=null&&yr(i,!!c,o,!0);return;case"textarea":We("invalid",i),m=d=c=null;for(y in o)if(o.hasOwnProperty(y)&&(b=o[y],b!=null))switch(y){case"value":c=b;break;case"defaultValue":d=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:St(i,r,y,b,o,null)}vr(i,c,d,m);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(c=o[O],c!=null))switch(O){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:St(i,r,O,c,o,null)}return;case"dialog":We("beforetoggle",i),We("toggle",i),We("cancel",i),We("close",i);break;case"iframe":case"object":We("load",i);break;case"video":case"audio":for(c=0;c<Bc.length;c++)We(Bc[c],i);break;case"image":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"embed":case"source":case"link":We("error",i),We("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(c=o[F],c!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:St(i,r,F,c,o,null)}return;default:if(Do(r)){for(W in o)o.hasOwnProperty(W)&&(c=o[W],c!==void 0&&Qp(i,r,W,c,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(c=o[b],c!=null&&St(i,r,b,c,o,null))}function vN(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,b=null,O=null,F=null,W=null;for(G in o){var te=o[G];if(o.hasOwnProperty(G)&&te!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":O=te;default:c.hasOwnProperty(G)||St(i,r,G,null,c,te)}}for(var B in c){var G=c[B];if(te=o[B],c.hasOwnProperty(B)&&(G!=null||te!=null))switch(B){case"type":m=G;break;case"name":d=G;break;case"checked":F=G;break;case"defaultChecked":W=G;break;case"value":y=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==te&&St(i,r,B,G,c,te)}}No(i,y,b,O,F,W,m,d);return;case"select":G=y=b=B=null;for(m in o)if(O=o[m],o.hasOwnProperty(m)&&O!=null)switch(m){case"value":break;case"multiple":G=O;default:c.hasOwnProperty(m)||St(i,r,m,null,c,O)}for(d in c)if(m=c[d],O=o[d],c.hasOwnProperty(d)&&(m!=null||O!=null))switch(d){case"value":B=m;break;case"defaultValue":b=m;break;case"multiple":y=m;default:m!==O&&St(i,r,d,m,c,O)}r=b,o=y,c=G,B!=null?yr(i,!!o,B,!1):!!c!=!!o&&(r!=null?yr(i,!!o,r,!0):yr(i,!!o,o?[]:"",!1));return;case"textarea":G=B=null;for(b in o)if(d=o[b],o.hasOwnProperty(b)&&d!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:St(i,r,b,null,c,d)}for(y in c)if(d=c[y],m=o[y],c.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":B=d;break;case"defaultValue":G=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&St(i,r,y,d,c,m)}dh(i,B,G);return;case"option":for(var ye in o)if(B=o[ye],o.hasOwnProperty(ye)&&B!=null&&!c.hasOwnProperty(ye))switch(ye){case"selected":i.selected=!1;break;default:St(i,r,ye,null,c,B)}for(O in c)if(B=c[O],G=o[O],c.hasOwnProperty(O)&&B!==G&&(B!=null||G!=null))switch(O){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:St(i,r,O,B,c,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ne in o)B=o[Ne],o.hasOwnProperty(Ne)&&B!=null&&!c.hasOwnProperty(Ne)&&St(i,r,Ne,null,c,B);for(F in c)if(B=c[F],G=o[F],c.hasOwnProperty(F)&&B!==G&&(B!=null||G!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:St(i,r,F,B,c,G)}return;default:if(Do(r)){for(var bt in o)B=o[bt],o.hasOwnProperty(bt)&&B!==void 0&&!c.hasOwnProperty(bt)&&Qp(i,r,bt,void 0,c,B);for(W in c)B=c[W],G=o[W],!c.hasOwnProperty(W)||B===G||B===void 0&&G===void 0||Qp(i,r,W,B,c,G);return}}for(var U in o)B=o[U],o.hasOwnProperty(U)&&B!=null&&!c.hasOwnProperty(U)&&St(i,r,U,null,c,B);for(te in c)B=c[te],G=o[te],!c.hasOwnProperty(te)||B===G||B==null&&G==null||St(i,r,te,B,c,G)}function m0(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EN(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var d=o[c],m=d.transferSize,y=d.initiatorType,b=d.duration;if(m&&b&&m0(y)){for(y=0,b=d.responseEnd,c+=1;c<o.length;c++){var O=o[c],F=O.startTime;if(F>b)break;var W=O.transferSize,te=O.initiatorType;W&&m0(te)&&(O=O.responseEnd,y+=W*(O<b?1:(b-F)/(O-F)))}if(--c,r+=8*(m+y)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Wp=null,$p=null;function pd(i){return i.nodeType===9?i:i.ownerDocument}function p0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Xp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jp=null;function TN(){var i=window.event;return i&&i.type==="popstate"?i===Jp?!1:(Jp=i,!0):(Jp=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,SN=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,bN=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(i){return y0.resolve(null).then(i).catch(wN)}:_0;function wN(i){setTimeout(function(){throw i})}function Br(i){return i==="head"}function v0(i,r){var o=r,c=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(c===0){i.removeChild(d),hl(r);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Hc(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,Hc(o);for(var m=o.firstChild;m;){var y=m.nextSibling,b=m.nodeName;m[as]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=y}}else o==="body"&&Hc(i.ownerDocument.body);o=d}while(o);hl(r)}function E0(i,r){var o=i;i=0;do{var c=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=c}while(o)}function Zp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zp(o),Io(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function AN(i,r,o,c){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[as])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Di(i.nextSibling),i===null)break}return null}function CN(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Di(i.nextSibling),i===null))return null;return i}function T0(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=Di(i.nextSibling),i===null))return null;return i}function eg(i){return i.data==="$?"||i.data==="$~"}function tg(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function IN(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Di(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var ng=null;function S0(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return Di(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function b0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function w0(i,r,o){switch(r=pd(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Hc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Io(i)}var xi=new Map,A0=new Set;function gd(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Xs=le.d;le.d={f:RN,r:NN,D:DN,C:xN,L:ON,m:MN,X:PN,S:kN,M:LN};function RN(){var i=Xs.f(),r=od();return i||r}function NN(i){var r=Ei(i);r!==null&&r.tag===5&&r.type==="form"?BE(r):Xs.r(i)}var ll=typeof document>"u"?null:document;function C0(i,r,o){var c=ll;if(c&&typeof r=="string"&&r){var d=Yn(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),A0.has(d)||(A0.add(d),i={rel:i,crossOrigin:o,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),Nn(r,"link",i),Zt(r),c.head.appendChild(r)))}}function DN(i){Xs.D(i),C0("dns-prefetch",i,null)}function xN(i,r){Xs.C(i,r),C0("preconnect",i,r)}function ON(i,r,o){Xs.L(i,r,o);var c=ll;if(c&&i&&r){var d='link[rel="preload"][as="'+Yn(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Yn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Yn(o.imageSizes)+'"]')):d+='[href="'+Yn(i)+'"]';var m=d;switch(r){case"style":m=cl(i);break;case"script":m=ul(i)}xi.has(m)||(i=S({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),xi.set(m,i),c.querySelector(d)!==null||r==="style"&&c.querySelector(Gc(m))||r==="script"&&c.querySelector(Kc(m))||(r=c.createElement("link"),Nn(r,"link",i),Zt(r),c.head.appendChild(r)))}}function MN(i,r){Xs.m(i,r);var o=ll;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+Yn(c)+'"][href="'+Yn(i)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ul(i)}if(!xi.has(m)&&(i=S({rel:"modulepreload",href:i},r),xi.set(m,i),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Kc(m)))return}c=o.createElement("link"),Nn(c,"link",i),Zt(c),o.head.appendChild(c)}}}function kN(i,r,o){Xs.S(i,r,o);var c=ll;if(c&&i){var d=ls(c).hoistableStyles,m=cl(i);r=r||"default";var y=d.get(m);if(!y){var b={loading:0,preload:null};if(y=c.querySelector(Gc(m)))b.loading=5;else{i=S({rel:"stylesheet",href:i,"data-precedence":r},o),(o=xi.get(m))&&ig(i,o);var O=y=c.createElement("link");Zt(O),Nn(O,"link",i),O._p=new Promise(function(F,W){O.onload=F,O.onerror=W}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,_d(y,r,c)}y={type:"stylesheet",instance:y,count:1,state:b},d.set(m,y)}}}function PN(i,r){Xs.X(i,r);var o=ll;if(o&&i){var c=ls(o).hoistableScripts,d=ul(i),m=c.get(d);m||(m=o.querySelector(Kc(d)),m||(i=S({src:i,async:!0},r),(r=xi.get(d))&&sg(i,r),m=o.createElement("script"),Zt(m),Nn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function LN(i,r){Xs.M(i,r);var o=ll;if(o&&i){var c=ls(o).hoistableScripts,d=ul(i),m=c.get(d);m||(m=o.querySelector(Kc(d)),m||(i=S({src:i,async:!0,type:"module"},r),(r=xi.get(d))&&sg(i,r),m=o.createElement("script"),Zt(m),Nn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function I0(i,r,o,c){var d=(d=Oe.current)?gd(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=cl(o.href),o=ls(d).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=cl(o.href);var m=ls(d).hoistableStyles,y=m.get(i);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,y),(m=d.querySelector(Gc(i)))&&!m._p&&(y.instance=m,y.state.loading=5),xi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},xi.set(i,o),m||VN(d,i,o,y.state))),r&&c===null)throw Error(s(528,""));return y}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ul(o),o=ls(d).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function cl(i){return'href="'+Yn(i)+'"'}function Gc(i){return'link[rel="stylesheet"]['+i+"]"}function R0(i){return S({},i,{"data-precedence":i.precedence,precedence:null})}function VN(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Nn(r,"link",o),Zt(r),i.head.appendChild(r))}function ul(i){return'[src="'+Yn(i)+'"]'}function Kc(i){return"script[async]"+i}function N0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+Yn(o.href)+'"]');if(c)return r.instance=c,Zt(c),c;var d=S({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),Zt(c),Nn(c,"style",d),_d(c,o.precedence,i),r.instance=c;case"stylesheet":d=cl(o.href);var m=i.querySelector(Gc(d));if(m)return r.state.loading|=4,r.instance=m,Zt(m),m;c=R0(o),(d=xi.get(d))&&ig(c,d),m=(i.ownerDocument||i).createElement("link"),Zt(m);var y=m;return y._p=new Promise(function(b,O){y.onload=b,y.onerror=O}),Nn(m,"link",c),r.state.loading|=4,_d(m,o.precedence,i),r.instance=m;case"script":return m=ul(o.src),(d=i.querySelector(Kc(m)))?(r.instance=d,Zt(d),d):(c=o,(d=xi.get(m))&&(c=S({},o),sg(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),Zt(d),Nn(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,_d(c,o.precedence,i));return r.instance}function _d(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,y=0;y<c.length;y++){var b=c[y];if(b.dataset.precedence===r)m=b;else if(m!==d)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function ig(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function sg(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var yd=null;function D0(i,r,o){if(yd===null){var c=new Map,d=yd=new Map;d.set(o,c)}else d=yd,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var m=o[d];if(!(m[as]||m[Jt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(r)||"";y=i+y;var b=c.get(y);b?b.push(m):c.set(y,[m])}}return c}function x0(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function UN(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function O0(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function jN(i,r,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=cl(c.href),m=r.querySelector(Gc(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=vd.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=m,Zt(m);return}m=r.ownerDocument||r,c=R0(c),(d=xi.get(d))&&ig(c,d),m=m.createElement("link"),Zt(m);var y=m;y._p=new Promise(function(b,O){y.onload=b,y.onerror=O}),Nn(m,"link",c),o.instance=m}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=vd.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var rg=0;function zN(i,r){return i.stylesheets&&i.count===0&&Td(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var c=setTimeout(function(){if(i.stylesheets&&Td(i,i.stylesheets),i.unsuspend){var m=i.unsuspend;i.unsuspend=null,m()}},6e4+r);0<i.imgBytes&&rg===0&&(rg=62500*EN());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&Td(i,i.stylesheets),i.unsuspend)){var m=i.unsuspend;i.unsuspend=null,m()}},(i.imgBytes>rg?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function vd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Td(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Ed=null;function Td(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Ed=new Map,r.forEach(FN,i),Ed=null,vd.call(i))}function FN(i,r){if(!(r.state.loading&4)){var o=Ed.get(i);if(o)var c=o.get(null);else{o=new Map,Ed.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),c=y)}c&&o.set(null,c)}d=r.instance,y=d.getAttribute("data-precedence"),m=o.get(y)||c,m===c&&o.set(null,d),o.set(y,d),this.count++,c=vd.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Yc={$$typeof:de,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function BN(i,r,o,c,d,m,y,b,O){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function M0(i,r,o,c,d,m,y,b,O,F,W,te){return i=new BN(i,r,o,y,O,F,W,te,b),r=1,m===!0&&(r|=24),m=ui(3,null,null,r),i.current=m,m.stateNode=i,r=Um(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:r},Bm(m),i}function k0(i){return i?(i=Fo,i):Fo}function P0(i,r,o,c,d,m){d=k0(d),c.context===null?c.context=d:c.pendingContext=d,c=xr(r),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Or(i,c,r),o!==null&&(Zn(o,i,r),Ac(o,i,r))}function L0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function ag(i,r){L0(i,r),(i=i.alternate)&&L0(i,r)}function V0(i){if(i.tag===13||i.tag===31){var r=Pa(i,67108864);r!==null&&Zn(r,i,67108864),ag(i,67108864)}}function U0(i){if(i.tag===13||i.tag===31){var r=pi();r=ba(r);var o=Pa(i,r);o!==null&&Zn(o,i,r),ag(i,r)}}var Sd=!0;function qN(i,r,o,c){var d=K.T;K.T=null;var m=le.p;try{le.p=2,og(i,r,o,c)}finally{le.p=m,K.T=d}}function HN(i,r,o,c){var d=K.T;K.T=null;var m=le.p;try{le.p=8,og(i,r,o,c)}finally{le.p=m,K.T=d}}function og(i,r,o,c){if(Sd){var d=lg(c);if(d===null)Yp(i,r,c,bd,o),z0(i,c);else if(KN(d,i,r,o,c))c.stopPropagation();else if(z0(i,c),r&4&&-1<GN.indexOf(i)){for(;d!==null;){var m=Ei(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Y(m.pendingLanes);if(y!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var O=1<<31-Ut(y);b.entanglements[1]|=O,y&=~O}Ts(m),(ct&6)===0&&(rd=Rt()+500,Fc(0))}}break;case 31:case 13:b=Pa(m,2),b!==null&&Zn(b,m,2),od(),ag(m,2)}if(m=lg(c),m===null&&Yp(i,r,c,bd,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Yp(i,r,c,null,o)}}function lg(i){return i=Ti(i),cg(i)}var bd=null;function cg(i){if(bd=null,i=os(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return bd=i,null}function j0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hn()){case ns:return 2;case wn:return 8;case Xt:case Vt:return 32;case Bn:return 268435456;default:return 32}default:return 32}}var ug=!1,qr=null,Hr=null,Gr=null,Qc=new Map,Wc=new Map,Kr=[],GN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z0(i,r){switch(i){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Qc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wc.delete(r.pointerId)}}function $c(i,r,o,c,d,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=Ei(r),r!==null&&V0(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function KN(i,r,o,c,d){switch(r){case"focusin":return qr=$c(qr,i,r,o,c,d),!0;case"dragenter":return Hr=$c(Hr,i,r,o,c,d),!0;case"mouseover":return Gr=$c(Gr,i,r,o,c,d),!0;case"pointerover":var m=d.pointerId;return Qc.set(m,$c(Qc.get(m)||null,i,r,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Wc.set(m,$c(Wc.get(m)||null,i,r,o,c,d)),!0}return!1}function F0(i){var r=os(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,Vi(i.priority,function(){U0(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,Vi(i.priority,function(){U0(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function wd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=lg(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);cc=c,o.target.dispatchEvent(c),cc=null}else return r=Ei(o),r!==null&&V0(r),i.blockedOn=o,!1;r.shift()}return!0}function B0(i,r,o){wd(i)&&o.delete(r)}function YN(){ug=!1,qr!==null&&wd(qr)&&(qr=null),Hr!==null&&wd(Hr)&&(Hr=null),Gr!==null&&wd(Gr)&&(Gr=null),Qc.forEach(B0),Wc.forEach(B0)}function Ad(i,r){i.blockedOn===r&&(i.blockedOn=null,ug||(ug=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,YN)))}var Cd=null;function q0(i){Cd!==i&&(Cd=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Cd===i&&(Cd=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(cg(c||o)===null)continue;break}var m=Ei(o);m!==null&&(i.splice(r,3),r-=3,lp(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function hl(i){function r(O){return Ad(O,i)}qr!==null&&Ad(qr,i),Hr!==null&&Ad(Hr,i),Gr!==null&&Ad(Gr,i),Qc.forEach(r),Wc.forEach(r);for(var o=0;o<Kr.length;o++){var c=Kr[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Kr.length&&(o=Kr[0],o.blockedOn===null);)F0(o),o.blockedOn===null&&Kr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],y=d[_n]||null;if(typeof m=="function")y||q0(o);else if(y){var b=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[_n]||null)b=y.formAction;else if(cg(d)!==null)continue}else b=y.action;typeof b=="function"?o[c+1]=b:(o.splice(c,3),c-=3),q0(o)}}}function H0(){function i(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function hg(i){this._internalRoot=i}Id.prototype.render=hg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=pi();P0(o,c,i,r,null,null)},Id.prototype.unmount=hg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;P0(i.current,2,null,i,null,null),od(),r[rs]=null}};function Id(i){this._internalRoot=i}Id.prototype.unstable_scheduleHydration=function(i){if(i){var r=oh();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Kr.length&&r!==0&&r<Kr[o].priority;o++);Kr.splice(o,0,i),o===0&&F0(i)}};var G0=e.version;if(G0!=="19.2.4")throw Error(s(527,G0,"19.2.4"));le.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?E(i):null,i=i===null?null:i.stateNode,i};var QN={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rd.isDisabled&&Rd.supportsFiber)try{vt=Rd.inject(QN),dn=Rd}catch{}}return Jc.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",d=JE,m=ZE,y=eT;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),r=M0(i,1,!1,null,null,o,c,null,d,m,y,H0),i[rs]=r.current,Kp(i),new hg(r)},Jc.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,d="",m=JE,y=ZE,b=eT,O=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.formState!==void 0&&(O=o.formState)),r=M0(i,1,!0,r,o??null,c,d,O,m,y,b,H0),r.context=k0(null),o=r.current,c=pi(),c=ba(c),d=xr(c),d.callback=null,Or(o,d,c),o=c,r.current.lanes=o,Ta(r,o),Ts(r),i[rs]=r.current,Kp(i),new Id(r)},Jc.version="19.2.4",Jc}var tS;function s2(){if(tS)return mg.exports;tS=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),mg.exports=i2(),mg.exports}var r2=s2();const a2=()=>{};var nS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(n,e){if(!n)throw zl(e)},zl=function(n){return new Error("Firebase Database ("+qw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},o2=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],f=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,f=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,E=l>>2,S=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,L=g&63;p||(L=64,u||(w=64)),s.push(t[E],t[S],t[w],t[L])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):o2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const S=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||S==null)throw new l2;const w=l<<2|f>>4;if(s.push(w),g!==64){const L=f<<4&240|g>>2;if(s.push(L),S!==64){const q=g<<6&192|S;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class l2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gw=function(n){const e=Hw(n);return U_.encodeByteArray(e,!0)},Jd=function(n){return Gw(n).replace(/\./g,"")},Zd=function(n){try{return U_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(n){return Kw(void 0,n)}function Kw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!u2(t)||(n[t]=Kw(n[t],e[t]));return n}function u2(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=()=>h2().__FIREBASE_DEFAULTS__,f2=()=>{if(typeof process>"u"||typeof nS>"u")return;const n=nS.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},m2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},Lf=()=>{try{return a2()||d2()||f2()||m2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yw=n=>{var e,t;return(t=(e=Lf())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qw=n=>{const e=Yw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ww=()=>{var n;return(n=Lf())==null?void 0:n.config},$w=n=>{var e;return(e=Lf())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Jd(JSON.stringify(t)),Jd(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zn())}function p2(){var e;const n=(e=Lf())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function z_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _2(){const n=zn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function y2(){return qw.NODE_ADMIN===!0}function v2(){return!p2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function Zw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="FirebaseError";class ts extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=E2,Object.setPrototypeOf(this,ts.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?T2(l,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new ts(a,f,s)}}function T2(n,e){return n.replace(S2,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const S2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n){return JSON.parse(n)}function bn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=bu(Zd(l[0])||""),t=bu(Zd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},b2=function(n){const e=eA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},w2=function(n){const e=eA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Rl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function lr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],u=e[a];if(iS(l)&&iS(u)){if(!lr(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function iS(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function au(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ou(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)s[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)s[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const w=s[S-3]^s[S-8]^s[S-14]^s[S-16];s[S]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,E;for(let S=0;S<80;S++){S<40?S<20?(g=f^l&(u^f),E=1518500249):(g=l^u^f,E=1859775393):S<60?(g=l&u|f&(l|u),E=2400959708):(g=l^u^f,E=3395469782);const w=(a<<5|a>>>27)+g+p+E+s[S]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function C2(n,e){const t=new I2(n,e);return t.subscribe.bind(t)}class I2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");R2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=yg),a.error===void 0&&(a.error=yg),a.complete===void 0&&(a.complete=yg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yg(){}function Nl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ae(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Vf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=1e3,x2=2,O2=14400*1e3,M2=.5;function sS(n,e=D2,t=x2){const s=e*Math.pow(t,n),a=Math.round(M2*s*(Math.random()-.5)*2);return Math.min(O2,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function q_(n){return(await fetch(n,{credentials:"include"})).ok}class ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Zs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L2(e))try{this.getOrInitializeService({instanceIdentifier:Qa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Qa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qa){return this.instances.has(e)}getOptions(e=Qa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:P2(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qa){return this.component?this.component.multipleInstances?e:Qa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P2(n){return n===Qa?void 0:n}function L2(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new k2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const U2={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},j2=$e.INFO,z2={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},F2=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=z2[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bu{constructor(e){this.name=e,this._logLevel=j2,this._logHandler=F2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const B2=(n,e)=>e.some(t=>n instanceof t);let rS,aS;function q2(){return rS||(rS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H2(){return aS||(aS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tA=new WeakMap,Kg=new WeakMap,nA=new WeakMap,vg=new WeakMap,H_=new WeakMap;function G2(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Zr(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&tA.set(t,n)}).catch(()=>{}),H_.set(e,n),e}function K2(n){if(Kg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Kg.set(n,e)}let Yg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Kg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Y2(n){Yg=n(Yg)}function Q2(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Eg(this),e,...t);return nA.set(s,e.sort?e.sort():[e]),Zr(s)}:H2().includes(n)?function(...e){return n.apply(Eg(this),e),Zr(tA.get(this))}:function(...e){return Zr(n.apply(Eg(this),e))}}function W2(n){return typeof n=="function"?Q2(n):(n instanceof IDBTransaction&&K2(n),B2(n,q2())?new Proxy(n,Yg):n)}function Zr(n){if(n instanceof IDBRequest)return G2(n);if(vg.has(n))return vg.get(n);const e=W2(n);return e!==n&&(vg.set(n,e),H_.set(e,n)),e}const Eg=n=>H_.get(n);function iA(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),f=Zr(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Zr(u.result),p.oldVersion,p.newVersion,Zr(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const $2=["get","getKey","getAll","getAllKeys","count"],X2=["put","add","delete","clear"],Tg=new Map;function oS(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tg.get(e))return Tg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=X2.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||$2.includes(t)))return;const l=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return Tg.set(e,l),l}Y2(n=>({...n,get:(e,t,s)=>oS(e,t)||n.get(e,t,s),has:(e,t)=>!!oS(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Z2(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Z2(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qg="@firebase/app",lS="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Bu("@firebase/app"),eD="@firebase/app-compat",tD="@firebase/analytics-compat",nD="@firebase/analytics",iD="@firebase/app-check-compat",sD="@firebase/app-check",rD="@firebase/auth",aD="@firebase/auth-compat",oD="@firebase/database",lD="@firebase/data-connect",cD="@firebase/database-compat",uD="@firebase/functions",hD="@firebase/functions-compat",dD="@firebase/installations",fD="@firebase/installations-compat",mD="@firebase/messaging",pD="@firebase/messaging-compat",gD="@firebase/performance",_D="@firebase/performance-compat",yD="@firebase/remote-config",vD="@firebase/remote-config-compat",ED="@firebase/storage",TD="@firebase/storage-compat",SD="@firebase/firestore",bD="@firebase/ai",wD="@firebase/firestore-compat",AD="firebase",CD="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="[DEFAULT]",ID={[Qg]:"fire-core",[eD]:"fire-core-compat",[nD]:"fire-analytics",[tD]:"fire-analytics-compat",[sD]:"fire-app-check",[iD]:"fire-app-check-compat",[rD]:"fire-auth",[aD]:"fire-auth-compat",[oD]:"fire-rtdb",[lD]:"fire-data-connect",[cD]:"fire-rtdb-compat",[uD]:"fire-fn",[hD]:"fire-fn-compat",[dD]:"fire-iid",[fD]:"fire-iid-compat",[mD]:"fire-fcm",[pD]:"fire-fcm-compat",[gD]:"fire-perf",[_D]:"fire-perf-compat",[yD]:"fire-rc",[vD]:"fire-rc-compat",[ED]:"fire-gcs",[TD]:"fire-gcs-compat",[SD]:"fire-fst",[wD]:"fire-fst-compat",[bD]:"fire-vertex","fire-js":"fire-js",[AD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map,RD=new Map,$g=new Map;function cS(n,e){try{n.container.addComponent(e)}catch(t){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zi(n){const e=n.name;if($g.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;$g.set(e,n);for(const t of wu.values())cS(t,n);for(const t of RD.values())cS(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ti(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ea=new _o("app","Firebase",ND);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ea.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=CD;function sA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Wg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw ea.create("bad-app-name",{appName:String(a)});if(t||(t=Ww()),!t)throw ea.create("no-options");const l=wu.get(a);if(l){if(lr(t,l.options)&&lr(s,l.config))return l;throw ea.create("duplicate-app",{appName:a})}const u=new V2(a);for(const p of $g.values())u.addComponent(p);const f=new DD(t,s,u);return wu.set(a,f),f}function qu(n=Wg){const e=wu.get(n);if(!e&&n===Wg&&Ww())return sA();if(!e)throw ea.create("no-app",{appName:n});return e}function xD(){return Array.from(wu.values())}function ri(n,e,t){let s=ID[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(u.join(" "));return}Zi(new ki(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="firebase-heartbeat-database",MD=1,Au="firebase-heartbeat-store";let Sg=null;function rA(){return Sg||(Sg=iA(OD,MD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Au)}catch(t){console.warn(t)}}}}).catch(n=>{throw ea.create("idb-open",{originalErrorMessage:n.message})})),Sg}async function kD(n){try{const t=(await rA()).transaction(Au),s=await t.objectStore(Au).get(aA(n));return await t.done,s}catch(e){if(e instanceof ts)cr.warn(e.message);else{const t=ea.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(t.message)}}}async function uS(n,e){try{const s=(await rA()).transaction(Au,"readwrite");await s.objectStore(Au).put(e,aA(n)),await s.done}catch(t){if(t instanceof ts)cr.warn(t.message);else{const s=ea.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cr.warn(s.message)}}}function aA(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=1024,LD=30;class VD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=hS();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>LD){const u=zD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hS(),{heartbeatsToSend:s,unsentEntries:a}=UD(this._heartbeatsCache.heartbeats),l=Jd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return cr.warn(t),""}}}function hS(){return new Date().toISOString().substring(0,10)}function UD(n,e=PD){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),dS(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),dS(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class jD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return uS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return uS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dS(n){return Jd(JSON.stringify({version:2,heartbeats:n})).length}function zD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(n){Zi(new ki("platform-logger",e=>new J2(e),"PRIVATE")),Zi(new ki("heartbeat",e=>new VD(e),"PRIVATE")),ri(Qg,lS,n),ri(Qg,lS,"esm2020"),ri("fire-js","")}FD("");function oA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BD=oA,lA=new _o("auth","Firebase",oA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Bu("@firebase/auth");function qD(n,...e){nf.logLevel<=$e.WARN&&nf.warn(`Auth (${vo}): ${n}`,...e)}function zd(n,...e){nf.logLevel<=$e.ERROR&&nf.error(`Auth (${vo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,...e){throw K_(n,...e)}function $i(n,...e){return K_(n,...e)}function G_(n,e,t){const s={...BD(),[e]:t};return new _o("auth","Firebase",s).create(e,{appName:n.name})}function rr(n){return G_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pi(n,"argument-error"),G_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function K_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return lA.create(n,...e)}function De(n,e,...t){if(!n)throw K_(e,...t)}function tr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zd(e),new Error(e)}function ur(n,e){n||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function GD(){return fS()==="http:"||fS()==="https:"}function fS(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GD()||z_()||"connection"in navigator)?navigator.onLine:!0}function YD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ur(t>e,"Short delay should be less than long delay!"),this.isMobile=j_()||Jw()}get(){return KD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n,e){ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$D=new Hu(3e4,6e4);function pa(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xs(n,e,t,s,a={}){return uA(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const f=Fl({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return g2()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&yo(n.emulatorConfig.host)&&(g.credentials="include"),cA.fetch()(await hA(n,n.config.apiHost,t,f),g)})}async function uA(n,e,t){n._canInitEmulator=!1;const s={...QD,...e};try{const a=new JD(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Nd(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nd(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Nd(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Nd(n,"user-disabled",u);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw G_(n,E,g);Pi(n,E)}}catch(a){if(a instanceof ts)throw a;Pi(n,"network-request-failed",{message:String(a)})}}async function Gu(n,e,t,s,a={}){const l=await xs(n,e,t,s,a);return"mfaPendingCredential"in l&&Pi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function hA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?Y_(n.config,a):`${n.config.apiScheme}://${a}`;return WD.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function XD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s($i(this.auth,"network-request-failed")),$D.get())})}}function Nd(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=$i(n,e,s);return a.customData._tokenResponse=t,a}function mS(n){return n!==void 0&&n.enterprise!==void 0}class ZD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return XD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ex(n,e){return xs(n,"GET","/v2/recaptchaConfig",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(n,e){return xs(n,"POST","/v1/accounts:delete",e)}async function sf(n,e){return xs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nx(n,e=!1){const t=mt(n),s=await t.getIdToken(e),a=Q_(s);De(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:fu(bg(a.auth_time)),issuedAtTime:fu(bg(a.iat)),expirationTime:fu(bg(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function bg(n){return Number(n)*1e3}function Q_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return zd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Zd(t);return a?JSON.parse(a):(zd("Failed to decode base64 JWT payload"),null)}catch(a){return zd("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function pS(n){const e=Q_(n);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ts&&ix(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ix({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fu(this.lastLoginAt),this.creationTime=fu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(n){var S;const e=n.auth,t=await n.getIdToken(),s=await io(n,sf(e,{idToken:t}));De(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=(S=a.providerUserInfo)!=null&&S.length?dA(a.providerUserInfo):[],u=ax(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Jg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function rx(n){const e=mt(n);await rf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ax(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function dA(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(n,e){const t=await uA(n,{},async()=>{const s=Fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await hA(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return n.emulatorConfig&&yo(n.emulatorConfig.host)&&(p.credentials="include"),cA.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lx(n,e){return xs(n,"POST","/v2/accounts:revokeToken",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){De(e.length!==0,"internal-error");const t=pS(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await ox(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new yl;return s&&(De(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(De(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(De(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yl,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e){De(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await io(this,this.stsTokenManager.getToken(this.auth,e));return De(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nx(this,e)}reload(){return rx(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ti(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await io(this,tx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:w,isAnonymous:L,providerData:q,stsTokenManager:J}=t;De(S&&J,e,"internal-error");const Z=yl.fromJSON(this.name,J);De(typeof S=="string",e,"internal-error"),Qr(s,e.name),Qr(a,e.name),De(typeof w=="boolean",e,"internal-error"),De(typeof L=="boolean",e,"internal-error"),Qr(l,e.name),Qr(u,e.name),Qr(f,e.name),Qr(p,e.name),Qr(g,e.name),Qr(E,e.name);const ge=new Qi({uid:S,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:L,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:Z,createdAt:g,lastLoginAt:E});return q&&Array.isArray(q)&&(ge.providerData=q.map(_e=>({..._e}))),p&&(ge._redirectEventId=p),ge}static async _fromIdTokenResponse(e,t,s=!1){const a=new yl;a.updateFromServerResponse(t);const l=new Qi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await rf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];De(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?dA(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new yl;f.updateFromIdToken(s);const p=new Qi({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Jg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new Map;function nr(n){ur(n instanceof Function,"Expected a class definition");let e=gS.get(n);return e?(ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gS.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fA.type="NONE";const _S=fA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e,t){return`firebase:${n}:${e}:${t}`}class vl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Fd(this.userKey,a.apiKey,l),this.fullPersistenceKey=Fd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sf(this.auth,{idToken:e}).catch(()=>{});return t?Qi._fromGetAccountInfoResponse(this.auth,t,e):null}return Qi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new vl(nr(_S),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||nr(_S);const u=Fd(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(u);if(E){let S;if(typeof E=="string"){const w=await sf(e,{idToken:E}).catch(()=>{});if(!w)break;S=await Qi._fromGetAccountInfoResponse(e,w,E)}else S=Qi._fromJSON(e,E);g!==l&&(f=S),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new vl(l,e,s):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new vl(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_A(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vA(e))return"Blackberry";if(EA(e))return"Webos";if(pA(e))return"Safari";if((e.includes("chrome/")||gA(e))&&!e.includes("edge/"))return"Chrome";if(yA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mA(n=zn()){return/firefox\//i.test(n)}function pA(n=zn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gA(n=zn()){return/crios\//i.test(n)}function _A(n=zn()){return/iemobile/i.test(n)}function yA(n=zn()){return/android/i.test(n)}function vA(n=zn()){return/blackberry/i.test(n)}function EA(n=zn()){return/webos/i.test(n)}function W_(n=zn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cx(n=zn()){var e;return W_(n)&&!!((e=window.navigator)!=null&&e.standalone)}function ux(){return _2()&&document.documentMode===10}function TA(n=zn()){return W_(n)||yA(n)||EA(n)||vA(n)||/windows phone/i.test(n)||_A(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n,e=[]){let t;switch(n){case"Browser":t=yS(zn());break;case"Worker":t=`${yS(zn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,f)=>{try{const p=e(l);u(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(n,e={}){return xs(n,"GET","/v2/passwordPolicy",pa(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=6;class mx{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vS(this),this.idTokenSubscription=new vS(this),this.beforeStateQueue=new hx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nr(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await vl.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sf(this,{idToken:e}),s=await Qi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(ti(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ti(this.app))return Promise.reject(rr(this));const t=e?mt(e):null;return t&&De(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ti(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ti(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dx(this),t=new mx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await lx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nr(e)||this._popupRedirectResolver;De(t,this,"argument-error"),this.redirectPersistenceManager=await vl.create(this,[nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ti(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ga(n){return mt(n)}class vS{constructor(e){this.auth=e,this.observer=null,this.addObserver=C2(t=>this.observer=t)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gx(n){Uf=n}function bA(n){return Uf.loadJS(n)}function _x(){return Uf.recaptchaEnterpriseScript}function yx(){return Uf.gapiScript}function vx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ex{constructor(){this.enterprise=new Tx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Tx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Sx="recaptcha-enterprise",wA="NO_RECAPTCHA";class bx{constructor(e){this.type=Sx,this.auth=ga(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{ex(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new ZD(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,u,f){const p=window.grecaptcha;mS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(wA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ex().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(f=>{if(!t&&mS(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_x();p.length!==0&&(p+=f),bA(p).then(()=>{a(f,l,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function ES(n,e,t,s=!1,a=!1){const l=new bx(n);let u;if(a)u=wA;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Zg(n,e,t,s,a){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ES(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ES(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(n,e){const t=ma(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(lr(l,e??{}))return a;Pi(a,"already-initialized")}return t.initialize({options:e})}function Ax(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(nr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Cx(n,e,t){const s=ga(n);De(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=AA(e),{host:u,port:f}=Ix(e),p=f===null?"":`:${f}`,g={url:`${l}//${u}${p}/`},E=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){De(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),De(lr(g,s.config.emulator)&&lr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,yo(u)?q_(`${l}//${u}${p}`):Rx()}function AA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ix(n){const e=AA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:TS(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:TS(u)}}}function TS(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,t){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function Nx(n,e){return xs(n,"POST","/v1/accounts:update",e)}async function Dx(n,e){return xs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(n,e){return Gu(n,"POST","/v1/accounts:signInWithPassword",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e){return Gu(n,"POST","/v1/accounts:signInWithEmailLink",pa(n,e))}async function Mx(n,e){return Gu(n,"POST","/v1/accounts:signInWithEmailLink",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends $_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Cu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Cu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zg(e,t,"signInWithPassword",xx);case"emailLink":return Ox(e,{email:this._email,oobCode:this._password});default:Pi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zg(e,s,"signUpPassword",Dx);case"emailLink":return Mx(e,{idToken:t,email:this._email,oobCode:this._password});default:Pi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n,e){return Gu(n,"POST","/v1/accounts:signInWithIdp",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="http://localhost";class so extends $_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new so(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new so(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return El(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,El(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,El(e,t)}buildRequest(){const e={requestUri:kx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lx(n){const e=au(ou(n)).link,t=e?au(ou(e)).deep_link_id:null,s=au(ou(n)).deep_link_id;return(s?au(ou(s)).link:null)||s||t||e||n}class X_{constructor(e){const t=au(ou(e)),s=t.apiKey??null,a=t.oobCode??null,l=Px(t.mode??null);De(s&&a&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Lx(e);try{return new X_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.providerId=Bl.PROVIDER_ID}static credential(e,t){return Cu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=X_.parseLink(t);return De(s,"argument-error"),Cu._fromEmailAndCode(e,s.code,s.tenantId)}}Bl.PROVIDER_ID="password";Bl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends J_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ku{constructor(){super("facebook.com")}static credential(e){return so._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return so._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return er.credential(t,s)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Ku{constructor(){super("github.com")}static credential(e){return so._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ku{constructor(){super("twitter.com")}static credential(e,t){return so._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Xr.credential(t,s)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(n,e){return Gu(n,"POST","/v1/accounts:signUp",pa(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Qi._fromIdTokenResponse(e,s,a),u=SS(s);return new ro({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=SS(s);return new ro({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function SS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends ts{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,af.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new af(e,t,s,a)}}function CA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?af._fromErrorAndOperation(n,l,e,s):l})}async function Ux(n,e,t=!1){const s=await io(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ro._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(n,e,t=!1){const{auth:s}=n;if(ti(s.app))return Promise.reject(rr(s));const a="reauthenticate";try{const l=await io(n,CA(s,a,e,n),t);De(l.idToken,s,"internal-error");const u=Q_(l.idToken);De(u,s,"internal-error");const{sub:f}=u;return De(n.uid===f,s,"user-mismatch"),ro._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Pi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e,t=!1){if(ti(n.app))return Promise.reject(rr(n));const s="signIn",a=await CA(n,s,e),l=await ro._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function zx(n,e){return IA(ga(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(n){const e=ga(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bS(n,e,t){if(ti(n.app))return Promise.reject(rr(n));const s=ga(n),u=await Zg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vx).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&RA(n),p}),f=await ro._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(f.user),f}function wS(n,e,t){return ti(n.app)?Promise.reject(rr(n)):zx(mt(n),Bl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&RA(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(n,e){return xs(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=mt(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await io(s,Fx(s.auth,l));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function Bx(n,e){return qx(mt(n),null,e)}async function qx(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const u=await io(n,Nx(s,l));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(n,e){return mt(n).setPersistence(e)}function Gx(n,e,t,s){return mt(n).onIdTokenChanged(e,t,s)}function Kx(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function Yx(n,e,t,s){return mt(n).onAuthStateChanged(e,t,s)}function wg(n){return mt(n).signOut()}const of="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(of,"1"),this.storage.removeItem(of),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=1e3,Wx=10;class xA extends DA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);ux()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Wx):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xA.type="LOCAL";const OA=xA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA extends DA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}MA.type="SESSION";const kA=MA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new jf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async g=>g(t.origin,l)),p=await $x(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const g=Z_("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(S){const w=S;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){return window}function Jx(n){ws().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){return typeof ws().WorkerGlobalScope<"u"&&typeof ws().importScripts=="function"}async function Zx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eO(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function tO(){return PA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="firebaseLocalStorageDb",nO=1,lf="firebaseLocalStorage",VA="fbase_key";class Yu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(n,e){return n.transaction([lf],e?"readwrite":"readonly").objectStore(lf)}function iO(){const n=indexedDB.deleteDatabase(LA);return new Yu(n).toPromise()}function e_(){const n=indexedDB.open(LA,nO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(lf,{keyPath:VA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(lf)?e(s):(s.close(),await iO(),e(await e_()))})})}async function AS(n,e,t){const s=zf(n,!0).put({[VA]:e,value:t});return new Yu(s).toPromise()}async function sO(n,e){const t=zf(n,!1).get(e),s=await new Yu(t).toPromise();return s===void 0?null:s.value}function CS(n,e){const t=zf(n,!0).delete(e);return new Yu(t).toPromise()}const rO=800,aO=3;class UA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await e_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>aO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(tO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Zx(),!this.activeServiceWorker)return;this.sender=new Xx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await e_();return await AS(e,of,"1"),await CS(e,of),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>AS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>sO(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>CS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=zf(a,!1).getAll();return new Yu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UA.type="LOCAL";const oO=UA;new Hu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n,e){return e?nr(e):(De(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey extends $_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return El(e,this._buildIdpRequest())}_linkToIdToken(e,t){return El(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return El(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lO(n){return IA(n.auth,new ey(n),n.bypassAuthState)}function cO(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),jx(t,new ey(n),n.bypassAuthState)}async function uO(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),Ux(t,new ey(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lO;case"linkViaPopup":case"linkViaRedirect":return uO;case"reauthViaPopup":case"reauthViaRedirect":return cO;default:Pi(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=new Hu(2e3,1e4);async function dO(n,e,t){if(ti(n.app))return Promise.reject($i(n,"operation-not-supported-in-this-environment"));const s=ga(n);HD(n,e,J_);const a=jA(s,t);return new $a(s,"signInViaPopup",e,a).executeNotNull()}class $a extends zA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Z_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($i(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($i(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($i(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hO.get())};e()}}$a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="pendingRedirect",Bd=new Map;class mO extends zA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Bd.get(this.auth._key());if(!e){try{const s=await pO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Bd.set(this.auth._key(),e)}return this.bypassAuthState||Bd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pO(n,e){const t=yO(e),s=_O(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function gO(n,e){Bd.set(n._key(),e)}function _O(n){return nr(n._redirectPersistence)}function yO(n){return Fd(fO,n.config.apiKey,n.name)}async function vO(n,e,t=!1){if(ti(n.app))return Promise.reject(rr(n));const s=ga(n),a=jA(s,e),u=await new mO(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=600*1e3;class TO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!FA(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError($i(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EO&&this.cachedEventUids.clear(),this.cachedEventUids.has(IS(e))}saveEventToCache(e){this.cachedEventUids.add(IS(e)),this.lastProcessedEventTime=Date.now()}}function IS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function FA({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(n,e={}){return xs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AO=/^https?/;async function CO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bO(n);for(const t of e)try{if(IO(t))return}catch{}Pi(n,"unauthorized-domain")}function IO(n){const e=Xg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!AO.test(t))return!1;if(wO.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new Hu(3e4,6e4);function RS(){const n=ws().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NO(n){return new Promise((e,t)=>{var a,l,u;function s(){RS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{RS(),t($i(n,"network-request-failed"))},timeout:RO.get()})}if((l=(a=ws().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=ws().gapi)!=null&&u.load)s();else{const f=vx("iframefcb");return ws()[f]=()=>{gapi.load?s():t($i(n,"network-request-failed"))},bA(`${yx()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw qd=null,e})}let qd=null;function DO(n){return qd=qd||NO(n),qd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new Hu(5e3,15e3),OO="__/auth/iframe",MO="emulator/auth/iframe",kO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LO(n){const e=n.config;De(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Y_(e,MO):`https://${n.config.authDomain}/${OO}`,s={apiKey:e.apiKey,appName:n.name,v:vo},a=PO.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Fl(s).slice(1)}`}async function VO(n){const e=await DO(n),t=ws().gapi;return De(t,n,"internal-error"),e.open({where:document.body,url:LO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kO,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=$i(n,"network-request-failed"),f=ws().setTimeout(()=>{l(u)},xO.get());function p(){ws().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jO=500,zO=600,FO="_blank",BO="http://localhost";class NS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qO(n,e,t,s=jO,a=zO){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...UO,width:s.toString(),height:a.toString(),top:l,left:u},g=zn().toLowerCase();t&&(f=gA(g)?FO:t),mA(g)&&(e=e||BO,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[L,q])=>`${w}${L}=${q},`,"");if(cx(g)&&f!=="_self")return HO(e||"",f),new NS(null);const S=window.open(e||"",f,E);De(S,n,"popup-blocked");try{S.focus()}catch{}return new NS(S)}function HO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO="__/auth/handler",KO="emulator/auth/handler",YO=encodeURIComponent("fac");async function DS(n,e,t,s,a,l){De(n.config.authDomain,n,"auth-domain-config-required"),De(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:vo,eventId:a};if(e instanceof J_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",ef(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))u[E]=S}if(e instanceof Ku){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),g=p?`#${YO}=${encodeURIComponent(p)}`:"";return`${QO(n)}?${Fl(f).slice(1)}${g}`}function QO({config:n}){return n.emulator?Y_(n,KO):`https://${n.authDomain}/${GO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="webStorageSupport";class WO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kA,this._completeRedirectFn=vO,this._overrideRedirectResult=gO}async _openPopup(e,t,s,a){var u;ur((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await DS(e,t,s,Xg(),a);return qO(e,l,Z_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await DS(e,t,s,Xg(),a);return Jx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(ur(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await VO(e),s=new TO(e);return t.register("authEvent",a=>(De(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ag,{type:Ag},a=>{var u;const l=(u=a==null?void 0:a[0])==null?void 0:u[Ag];l!==void 0&&t(!!l),Pi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return TA()||pA()||W_()}}const $O=WO;var xS="@firebase/auth",OS="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZO(n){Zi(new ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;De(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SA(n)},g=new px(s,a,l,p);return Ax(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Zi(new ki("auth-internal",e=>{const t=ga(e.getProvider("auth").getImmediate());return(s=>new XO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(xS,OS,JO(n)),ri(xS,OS,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=300,tM=$w("authIdTokenMaxAge")||eM;let MS=null;const nM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>tM)return;const a=t==null?void 0:t.token;MS!==a&&(MS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function iM(n=qu()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wx(n,{popupRedirectResolver:$O,persistence:[oO,OA,kA]}),s=$w("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=nM(l.toString());Kx(t,u,()=>u(t.currentUser)),Gx(t,f=>u(f))}}const a=Yw("auth");return a&&Cx(t,`http://${a}`),t}function sM(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}gx({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=$i("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",sM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZO("Browser");var rM="firebase",aM="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri(rM,aM,"app");const BA="@firebase/installations",ty="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=1e4,HA=`w:${ty}`,GA="FIS_v2",oM="https://firebaseinstallations.googleapis.com/v1",lM=3600*1e3,cM="installations",uM="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ao=new _o(cM,uM,hM);function KA(n){return n instanceof ts&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA({projectId:n}){return`${oM}/projects/${n}/installations`}function QA(n){return{token:n.token,requestStatus:2,expiresIn:fM(n.expiresIn),creationTime:Date.now()}}async function WA(n,e){const s=(await e.json()).error;return ao.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $A({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function dM(n,{refreshToken:e}){const t=$A(n);return t.append("Authorization",mM(e)),t}async function XA(n){const e=await n();return e.status>=500&&e.status<600?n():e}function fM(n){return Number(n.replace("s","000"))}function mM(n){return`${GA} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pM({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=YA(n),a=$A(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={fid:t,authVersion:GA,appId:n.appId,sdkVersion:HA},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await XA(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:QA(g.authToken)}}else throw await WA("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^[cdef][\w-]{21}$/,t_="";function yM(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=vM(n);return _M.test(t)?t:t_}catch{return t_}}function vM(n){return gM(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Map;function eC(n,e){const t=Ff(n);tC(t,e),EM(t,e)}function tC(n,e){const t=ZA.get(n);if(t)for(const s of t)s(e)}function EM(n,e){const t=TM();t&&t.postMessage({key:n,fid:e}),SM()}let Xa=null;function TM(){return!Xa&&"BroadcastChannel"in self&&(Xa=new BroadcastChannel("[Firebase] FID Change"),Xa.onmessage=n=>{tC(n.data.key,n.data.fid)}),Xa}function SM(){ZA.size===0&&Xa&&(Xa.close(),Xa=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM="firebase-installations-database",wM=1,oo="firebase-installations-store";let Cg=null;function ny(){return Cg||(Cg=iA(bM,wM,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(oo)}}})),Cg}async function cf(n,e){const t=Ff(n),a=(await ny()).transaction(oo,"readwrite"),l=a.objectStore(oo),u=await l.get(t);return await l.put(e,t),await a.done,(!u||u.fid!==e.fid)&&eC(n,e.fid),e}async function nC(n){const e=Ff(n),s=(await ny()).transaction(oo,"readwrite");await s.objectStore(oo).delete(e),await s.done}async function Bf(n,e){const t=Ff(n),a=(await ny()).transaction(oo,"readwrite"),l=a.objectStore(oo),u=await l.get(t),f=e(u);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&eC(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n){let e;const t=await Bf(n.appConfig,s=>{const a=AM(s),l=CM(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===t_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function AM(n){const e=n||{fid:yM(),registrationStatus:0};return iC(e)}function CM(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ao.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=IM(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RM(n)}:{installationEntry:e}}async function IM(n,e){try{const t=await pM(n,e);return cf(n.appConfig,t)}catch(t){throw KA(t)&&t.customData.serverCode===409?await nC(n.appConfig):await cf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RM(n){let e=await kS(n.appConfig);for(;e.registrationStatus===1;)await JA(100),e=await kS(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await iy(n);return s||t}return e}function kS(n){return Bf(n,e=>{if(!e)throw ao.create("installation-not-found");return iC(e)})}function iC(n){return NM(n)?{fid:n.fid,registrationStatus:0}:n}function NM(n){return n.registrationStatus===1&&n.registrationTime+qA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM({appConfig:n,heartbeatServiceProvider:e},t){const s=xM(n,t),a=dM(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={installation:{sdkVersion:HA,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await XA(()=>fetch(s,f));if(p.ok){const g=await p.json();return QA(g)}else throw await WA("Generate Auth Token",p)}function xM(n,{fid:e}){return`${YA(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,e=!1){let t;const s=await Bf(n.appConfig,l=>{if(!sC(l))throw ao.create("not-registered");const u=l.authToken;if(!e&&kM(u))return l;if(u.requestStatus===1)return t=OM(n,e),l;{if(!navigator.onLine)throw ao.create("app-offline");const f=LM(l);return t=MM(n,f),f}});return t?await t:s.authToken}async function OM(n,e){let t=await PS(n.appConfig);for(;t.authToken.requestStatus===1;)await JA(100),t=await PS(n.appConfig);const s=t.authToken;return s.requestStatus===0?sy(n,e):s}function PS(n){return Bf(n,e=>{if(!sC(e))throw ao.create("not-registered");const t=e.authToken;return VM(t)?{...e,authToken:{requestStatus:0}}:e})}async function MM(n,e){try{const t=await DM(n,e),s={...e,authToken:t};return await cf(n.appConfig,s),t}catch(t){if(KA(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await nC(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await cf(n.appConfig,s)}throw t}}function sC(n){return n!==void 0&&n.registrationStatus===2}function kM(n){return n.requestStatus===2&&!PM(n)}function PM(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+lM}function LM(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function VM(n){return n.requestStatus===1&&n.requestTime+qA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UM(n){const e=n,{installationEntry:t,registrationPromise:s}=await iy(e);return s?s.catch(console.error):sy(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jM(n,e=!1){const t=n;return await zM(t),(await sy(t,e)).token}async function zM(n){const{registrationPromise:e}=await iy(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(n){if(!n||!n.options)throw Ig("App Configuration");if(!n.name)throw Ig("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ig(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ig(n){return ao.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="installations",BM="installations-internal",qM=n=>{const e=n.getProvider("app").getImmediate(),t=FM(e),s=ma(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},HM=n=>{const e=n.getProvider("app").getImmediate(),t=ma(e,rC).getImmediate();return{getId:()=>UM(t),getToken:a=>jM(t,a)}};function GM(){Zi(new ki(rC,qM,"PUBLIC")),Zi(new ki(BM,HM,"PRIVATE"))}GM();ri(BA,ty);ri(BA,ty,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="analytics",KM="firebase_id",YM="origin",QM=60*1e3,WM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ry="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Bu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_i=new _o("analytics","Analytics",$M);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(n){if(!n.startsWith(ry)){const e=_i.create("invalid-gtag-resource",{gtagURL:n});return Gn.warn(e.message),""}return n}function aC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function JM(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function ZM(n,e){const t=JM("firebase-js-sdk-policy",{createScriptURL:XM}),s=document.createElement("script"),a=`${ry}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function ek(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function tk(n,e,t,s,a,l){const u=s[a];try{if(u)await e[u];else{const p=(await aC(t)).find(g=>g.measurementId===a);p&&await e[p.appId]}}catch(f){Gn.error(f)}n("config",a,l)}async function nk(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await aC(t);for(const p of u){const g=f.find(S=>S.measurementId===p),E=g&&e[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){Gn.error(l)}}function ik(n,e,t,s){async function a(l,...u){try{if(l==="event"){const[f,p]=u;await nk(n,e,t,f,p)}else if(l==="config"){const[f,p]=u;await tk(n,e,t,s,f,p)}else if(l==="consent"){const[f,p]=u;n("consent",f,p)}else if(l==="get"){const[f,p,g]=u;n("get",f,p,g)}else if(l==="set"){const[f]=u;n("set",f)}else n(l,...u)}catch(f){Gn.error(f)}}return a}function sk(n,e,t,s,a){let l=function(...u){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=ik(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function rk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ry)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=30,ok=1e3;class lk{constructor(e={},t=ok){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oC=new lk;function ck(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function uk(n){var u;const{appId:e,apiKey:t}=n,s={method:"GET",headers:ck(t)},a=WM.replace("{app-id}",e),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(u=p.error)!=null&&u.message&&(f=p.error.message)}catch{}throw _i.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function hk(n,e=oC,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw _i.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw _i.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new mk;return setTimeout(async()=>{f.abort()},QM),lC({appId:s,apiKey:a,measurementId:l},u,f,e)}async function lC(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=oC){var f;const{appId:l,measurementId:u}=n;try{await dk(s,e)}catch(p){if(u)return Gn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw p}try{const p=await uk(n);return a.deleteThrottleMetadata(l),p}catch(p){const g=p;if(!fk(g)){if(a.deleteThrottleMetadata(l),u)return Gn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw p}const E=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?sS(t,a.intervalMillis,ak):sS(t,a.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return a.setThrottleMetadata(l,S),Gn.debug(`Calling attemptFetch again in ${E} millis`),lC(n,S,s,a)}}function dk(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(_i.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fk(n){if(!(n instanceof ts)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class mk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pk(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,u={...s,send_to:l};n("event",t,u)}}async function gk(n,e,t,s){if(s&&s.global){const a={};for(const l of Object.keys(t))a[`user_properties.${l}`]=t[l];return n("set",a),Promise.resolve()}else{const a=await e;n("config",a,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(){if(F_())try{await B_()}catch(n){return Gn.warn(_i.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Gn.warn(_i.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yk(n,e,t,s,a,l,u){const f=hk(n);f.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Gn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Gn.error(w)),e.push(f);const p=_k().then(w=>{if(w)return s.getId()}),[g,E]=await Promise.all([f,p]);rk(l)||ZM(l,g.measurementId),a("js",new Date);const S=(u==null?void 0:u.config)??{};return S[YM]="firebase",S.update=!0,E!=null&&(S[KM]=E),a("config",g.measurementId,S),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.app=e}_delete(){return delete Tl[this.app.options.appId],Promise.resolve()}}let Tl={},LS=[];const VS={};let Rg="dataLayer",Ek="gtag",US,ay,jS=!1;function Tk(){const n=[];if(z_()&&n.push("This is a browser extension environment."),Zw()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=_i.create("invalid-analytics-context",{errorInfo:e});Gn.warn(t.message)}}function Sk(n,e,t){Tk();const s=n.options.appId;if(!s)throw _i.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Gn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _i.create("no-api-key");if(Tl[s]!=null)throw _i.create("already-exists",{id:s});if(!jS){ek(Rg);const{wrappedGtag:l,gtagCore:u}=sk(Tl,LS,VS,Rg,Ek);ay=l,US=u,jS=!0}return Tl[s]=yk(n,LS,VS,e,US,Rg,t),new vk(n)}function bk(n=qu()){n=mt(n);const e=ma(n,uf);return e.isInitialized()?e.getImmediate():wk(n)}function wk(n,e={}){const t=ma(n,uf);if(t.isInitialized()){const a=t.getImmediate();if(lr(e,t.getOptions()))return a;throw _i.create("already-initialized")}return t.initialize({options:e})}async function Ak(){if(z_()||!Zw()||!F_())return!1;try{return await B_()}catch{return!1}}function Ck(n,e,t){n=mt(n),gk(ay,Tl[n.app.options.appId],e,t).catch(s=>Gn.error(s))}function Ik(n,e,t,s){n=mt(n),pk(ay,Tl[n.app.options.appId],e,t,s).catch(a=>Gn.error(a))}const zS="@firebase/analytics",FS="0.10.21";function Rk(){Zi(new ki(uf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return Sk(s,a,t)},"PUBLIC")),Zi(new ki("analytics-internal",n,"PRIVATE")),ri(zS,FS),ri(zS,FS,"esm2020");function n(e){try{const t=e.getProvider(uf).getImmediate();return{logEvent:(s,a,l)=>Ik(t,s,a,l),setUserProperties:(s,a)=>Ck(t,s,a)}}catch(t){throw _i.create("interop-component-reg-failed",{reason:t})}}}Rk();var BS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,cC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function N(){}N.prototype=R.prototype,C.F=R.prototype,C.prototype=new N,C.prototype.constructor=C,C.D=function(x,I,M){for(var D=Array(arguments.length-2),He=2;He<arguments.length;He++)D[He-2]=arguments[He];return R.prototype[I].apply(x,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,R,N){N||(N=0);const x=Array(16);if(typeof R=="string")for(var I=0;I<16;++I)x[I]=R.charCodeAt(N++)|R.charCodeAt(N++)<<8|R.charCodeAt(N++)<<16|R.charCodeAt(N++)<<24;else for(I=0;I<16;++I)x[I]=R[N++]|R[N++]<<8|R[N++]<<16|R[N++]<<24;R=C.g[0],N=C.g[1],I=C.g[2];let M=C.g[3],D;D=R+(M^N&(I^M))+x[0]+3614090360&4294967295,R=N+(D<<7&4294967295|D>>>25),D=M+(I^R&(N^I))+x[1]+3905402710&4294967295,M=R+(D<<12&4294967295|D>>>20),D=I+(N^M&(R^N))+x[2]+606105819&4294967295,I=M+(D<<17&4294967295|D>>>15),D=N+(R^I&(M^R))+x[3]+3250441966&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(M^N&(I^M))+x[4]+4118548399&4294967295,R=N+(D<<7&4294967295|D>>>25),D=M+(I^R&(N^I))+x[5]+1200080426&4294967295,M=R+(D<<12&4294967295|D>>>20),D=I+(N^M&(R^N))+x[6]+2821735955&4294967295,I=M+(D<<17&4294967295|D>>>15),D=N+(R^I&(M^R))+x[7]+4249261313&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(M^N&(I^M))+x[8]+1770035416&4294967295,R=N+(D<<7&4294967295|D>>>25),D=M+(I^R&(N^I))+x[9]+2336552879&4294967295,M=R+(D<<12&4294967295|D>>>20),D=I+(N^M&(R^N))+x[10]+4294925233&4294967295,I=M+(D<<17&4294967295|D>>>15),D=N+(R^I&(M^R))+x[11]+2304563134&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(M^N&(I^M))+x[12]+1804603682&4294967295,R=N+(D<<7&4294967295|D>>>25),D=M+(I^R&(N^I))+x[13]+4254626195&4294967295,M=R+(D<<12&4294967295|D>>>20),D=I+(N^M&(R^N))+x[14]+2792965006&4294967295,I=M+(D<<17&4294967295|D>>>15),D=N+(R^I&(M^R))+x[15]+1236535329&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(I^M&(N^I))+x[1]+4129170786&4294967295,R=N+(D<<5&4294967295|D>>>27),D=M+(N^I&(R^N))+x[6]+3225465664&4294967295,M=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(M^R))+x[11]+643717713&4294967295,I=M+(D<<14&4294967295|D>>>18),D=N+(M^R&(I^M))+x[0]+3921069994&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^M&(N^I))+x[5]+3593408605&4294967295,R=N+(D<<5&4294967295|D>>>27),D=M+(N^I&(R^N))+x[10]+38016083&4294967295,M=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(M^R))+x[15]+3634488961&4294967295,I=M+(D<<14&4294967295|D>>>18),D=N+(M^R&(I^M))+x[4]+3889429448&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^M&(N^I))+x[9]+568446438&4294967295,R=N+(D<<5&4294967295|D>>>27),D=M+(N^I&(R^N))+x[14]+3275163606&4294967295,M=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(M^R))+x[3]+4107603335&4294967295,I=M+(D<<14&4294967295|D>>>18),D=N+(M^R&(I^M))+x[8]+1163531501&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^M&(N^I))+x[13]+2850285829&4294967295,R=N+(D<<5&4294967295|D>>>27),D=M+(N^I&(R^N))+x[2]+4243563512&4294967295,M=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(M^R))+x[7]+1735328473&4294967295,I=M+(D<<14&4294967295|D>>>18),D=N+(M^R&(I^M))+x[12]+2368359562&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(N^I^M)+x[5]+4294588738&4294967295,R=N+(D<<4&4294967295|D>>>28),D=M+(R^N^I)+x[8]+2272392833&4294967295,M=R+(D<<11&4294967295|D>>>21),D=I+(M^R^N)+x[11]+1839030562&4294967295,I=M+(D<<16&4294967295|D>>>16),D=N+(I^M^R)+x[14]+4259657740&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^M)+x[1]+2763975236&4294967295,R=N+(D<<4&4294967295|D>>>28),D=M+(R^N^I)+x[4]+1272893353&4294967295,M=R+(D<<11&4294967295|D>>>21),D=I+(M^R^N)+x[7]+4139469664&4294967295,I=M+(D<<16&4294967295|D>>>16),D=N+(I^M^R)+x[10]+3200236656&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^M)+x[13]+681279174&4294967295,R=N+(D<<4&4294967295|D>>>28),D=M+(R^N^I)+x[0]+3936430074&4294967295,M=R+(D<<11&4294967295|D>>>21),D=I+(M^R^N)+x[3]+3572445317&4294967295,I=M+(D<<16&4294967295|D>>>16),D=N+(I^M^R)+x[6]+76029189&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^M)+x[9]+3654602809&4294967295,R=N+(D<<4&4294967295|D>>>28),D=M+(R^N^I)+x[12]+3873151461&4294967295,M=R+(D<<11&4294967295|D>>>21),D=I+(M^R^N)+x[15]+530742520&4294967295,I=M+(D<<16&4294967295|D>>>16),D=N+(I^M^R)+x[2]+3299628645&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(I^(N|~M))+x[0]+4096336452&4294967295,R=N+(D<<6&4294967295|D>>>26),D=M+(N^(R|~I))+x[7]+1126891415&4294967295,M=R+(D<<10&4294967295|D>>>22),D=I+(R^(M|~N))+x[14]+2878612391&4294967295,I=M+(D<<15&4294967295|D>>>17),D=N+(M^(I|~R))+x[5]+4237533241&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~M))+x[12]+1700485571&4294967295,R=N+(D<<6&4294967295|D>>>26),D=M+(N^(R|~I))+x[3]+2399980690&4294967295,M=R+(D<<10&4294967295|D>>>22),D=I+(R^(M|~N))+x[10]+4293915773&4294967295,I=M+(D<<15&4294967295|D>>>17),D=N+(M^(I|~R))+x[1]+2240044497&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~M))+x[8]+1873313359&4294967295,R=N+(D<<6&4294967295|D>>>26),D=M+(N^(R|~I))+x[15]+4264355552&4294967295,M=R+(D<<10&4294967295|D>>>22),D=I+(R^(M|~N))+x[6]+2734768916&4294967295,I=M+(D<<15&4294967295|D>>>17),D=N+(M^(I|~R))+x[13]+1309151649&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~M))+x[4]+4149444226&4294967295,R=N+(D<<6&4294967295|D>>>26),D=M+(N^(R|~I))+x[11]+3174756917&4294967295,M=R+(D<<10&4294967295|D>>>22),D=I+(R^(M|~N))+x[2]+718787259&4294967295,I=M+(D<<15&4294967295|D>>>17),D=N+(M^(I|~R))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(I+(D<<21&4294967295|D>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+M&4294967295}s.prototype.v=function(C,R){R===void 0&&(R=C.length);const N=R-this.blockSize,x=this.C;let I=this.h,M=0;for(;M<R;){if(I==0)for(;M<=N;)a(this,C,M),M+=this.blockSize;if(typeof C=="string"){for(;M<R;)if(x[I++]=C.charCodeAt(M++),I==this.blockSize){a(this,x),I=0;break}}else for(;M<R;)if(x[I++]=C[M++],I==this.blockSize){a(this,x),I=0;break}}this.h=I,this.o+=R},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;R=this.o*8;for(var N=C.length-8;N<C.length;++N)C[N]=R&255,R/=256;for(this.v(C),C=Array(16),R=0,N=0;N<4;++N)for(let x=0;x<32;x+=8)C[R++]=this.g[N]>>>x&255;return C};function l(C,R){var N=f;return Object.prototype.hasOwnProperty.call(N,C)?N[C]:N[C]=R(C)}function u(C,R){this.h=R;const N=[];let x=!0;for(let I=C.length-1;I>=0;I--){const M=C[I]|0;x&&M==R||(N[I]=M,x=!1)}this.g=N}var f={};function p(C){return-128<=C&&C<128?l(C,function(R){return new u([R|0],R<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return S;if(C<0)return Z(g(-C));const R=[];let N=1;for(let x=0;C>=N;x++)R[x]=C/N|0,N*=4294967296;return new u(R,0)}function E(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return Z(E(C.substring(1),R));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const N=g(Math.pow(R,8));let x=S;for(let M=0;M<C.length;M+=8){var I=Math.min(8,C.length-M);const D=parseInt(C.substring(M,M+I),R);I<8?(I=g(Math.pow(R,I)),x=x.j(I).add(g(D))):(x=x.j(N),x=x.add(g(D)))}return x}var S=p(0),w=p(1),L=p(16777216);n=u.prototype,n.m=function(){if(J(this))return-Z(this).m();let C=0,R=1;for(let N=0;N<this.g.length;N++){const x=this.i(N);C+=(x>=0?x:4294967296+x)*R,R*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(q(this))return"0";if(J(this))return"-"+Z(this).toString(C);const R=g(Math.pow(C,6));var N=this;let x="";for(;;){const I=ke(N,R).g;N=ge(N,I.j(R));let M=((N.g.length>0?N.g[0]:N.h)>>>0).toString(C);if(N=I,q(N))return M+x;for(;M.length<6;)M="0"+M;x=M+x}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function q(C){if(C.h!=0)return!1;for(let R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function J(C){return C.h==-1}n.l=function(C){return C=ge(this,C),J(C)?-1:q(C)?0:1};function Z(C){const R=C.g.length,N=[];for(let x=0;x<R;x++)N[x]=~C.g[x];return new u(N,~C.h).add(w)}n.abs=function(){return J(this)?Z(this):this},n.add=function(C){const R=Math.max(this.g.length,C.g.length),N=[];let x=0;for(let I=0;I<=R;I++){let M=x+(this.i(I)&65535)+(C.i(I)&65535),D=(M>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);x=D>>>16,M&=65535,D&=65535,N[I]=D<<16|M}return new u(N,N[N.length-1]&-2147483648?-1:0)};function ge(C,R){return C.add(Z(R))}n.j=function(C){if(q(this)||q(C))return S;if(J(this))return J(C)?Z(this).j(Z(C)):Z(Z(this).j(C));if(J(C))return Z(this.j(Z(C)));if(this.l(L)<0&&C.l(L)<0)return g(this.m()*C.m());const R=this.g.length+C.g.length,N=[];for(var x=0;x<2*R;x++)N[x]=0;for(x=0;x<this.g.length;x++)for(let I=0;I<C.g.length;I++){const M=this.i(x)>>>16,D=this.i(x)&65535,He=C.i(I)>>>16,Dt=C.i(I)&65535;N[2*x+2*I]+=D*Dt,_e(N,2*x+2*I),N[2*x+2*I+1]+=M*Dt,_e(N,2*x+2*I+1),N[2*x+2*I+1]+=D*He,_e(N,2*x+2*I+1),N[2*x+2*I+2]+=M*He,_e(N,2*x+2*I+2)}for(C=0;C<R;C++)N[C]=N[2*C+1]<<16|N[2*C];for(C=R;C<2*R;C++)N[C]=0;return new u(N,0)};function _e(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function de(C,R){this.g=C,this.h=R}function ke(C,R){if(q(R))throw Error("division by zero");if(q(C))return new de(S,S);if(J(C))return R=ke(Z(C),R),new de(Z(R.g),Z(R.h));if(J(R))return R=ke(C,Z(R)),new de(Z(R.g),R.h);if(C.g.length>30){if(J(C)||J(R))throw Error("slowDivide_ only works with positive integers.");for(var N=w,x=R;x.l(C)<=0;)N=Ue(N),x=Ue(x);var I=Ee(N,1),M=Ee(x,1);for(x=Ee(x,2),N=Ee(N,2);!q(x);){var D=M.add(x);D.l(C)<=0&&(I=I.add(N),M=D),x=Ee(x,1),N=Ee(N,1)}return R=ge(C,I.j(R)),new de(I,R)}for(I=S;C.l(R)>=0;){for(N=Math.max(1,Math.floor(C.m()/R.m())),x=Math.ceil(Math.log(N)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),M=g(N),D=M.j(R);J(D)||D.l(C)>0;)N-=x,M=g(N),D=M.j(R);q(M)&&(M=w),I=I.add(M),C=ge(C,D)}return new de(I,C)}n.B=function(C){return ke(this,C).h},n.and=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)&C.i(x);return new u(N,this.h&C.h)},n.or=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)|C.i(x);return new u(N,this.h|C.h)},n.xor=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)^C.i(x);return new u(N,this.h^C.h)};function Ue(C){const R=C.g.length+1,N=[];for(let x=0;x<R;x++)N[x]=C.i(x)<<1|C.i(x-1)>>>31;return new u(N,C.h)}function Ee(C,R){const N=R>>5;R%=32;const x=C.g.length-N,I=[];for(let M=0;M<x;M++)I[M]=R>0?C.i(M+N)>>>R|C.i(M+N+1)<<32-R:C.i(M+N);return new u(I,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,cC=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=E,ta=u}).apply(typeof BS<"u"?BS:typeof self<"u"?self:typeof window<"u"?window:{});var Dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uC,lu,hC,Hd,n_,dC,fC,mC;(function(){var n,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dd=="object"&&Dd];for(var _=0;_<h.length;++_){var T=h[_];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var T=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in T))break e;T=T[j]}h=h[h.length-1],A=T[h],_=_(A),_!=A&&_!=null&&e(T,h,{configurable:!0,writable:!0,value:_})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(_){var T=[],A;for(A in _)Object.prototype.hasOwnProperty.call(_,A)&&T.push([A,_[A]]);return T}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function p(h,_,T){return h.call.apply(h.bind,arguments)}function g(h,_,T){return g=p,g.apply(null,arguments)}function E(h,_){var T=Array.prototype.slice.call(arguments,1);return function(){var A=T.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function S(h,_){function T(){}T.prototype=_.prototype,h.Z=_.prototype,h.prototype=new T,h.prototype.constructor=h,h.Ob=function(A,j,H){for(var oe=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)oe[Fe-2]=arguments[Fe];return _.prototype[j].apply(A,oe)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function L(h){const _=h.length;if(_>0){const T=Array(_);for(let A=0;A<_;A++)T[A]=h[A];return T}return[]}function q(h,_){for(let A=1;A<arguments.length;A++){const j=arguments[A];var T=typeof j;if(T=T!="object"?T:j?Array.isArray(j)?"array":T:"null",T=="array"||T=="object"&&typeof j.length=="number"){T=h.length||0;const H=j.length||0;h.length=T+H;for(let oe=0;oe<H;oe++)h[T+oe]=j[oe]}else h.push(j)}}class J{constructor(_,T){this.i=_,this.j=T,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Z(h){u.setTimeout(()=>{throw h},0)}function ge(){var h=C;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class _e{constructor(){this.h=this.g=null}add(_,T){const A=de.get();A.set(_,T),this.h?this.h.next=A:this.g=A,this.h=A}}var de=new J(()=>new ke,h=>h.reset());class ke{constructor(){this.next=this.g=this.h=null}set(_,T){this.h=_,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Ee=!1,C=new _e,R=()=>{const h=Promise.resolve(void 0);Ue=()=>{h.then(N)}};function N(){for(var h;h=ge();){try{h.h.call(h.g)}catch(T){Z(T)}var _=de;_.j(h),_.h<100&&(_.h++,h.next=_.g,_.g=h)}Ee=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const T=()=>{};u.addEventListener("test",T,_),u.removeEventListener("test",T,_)}catch{}return h})();function D(h){return/^[\s\xa0]*$/.test(h)}function He(h,_){I.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,_)}S(He,I),He.prototype.init=function(h,_){const T=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget,_||(T=="mouseover"?_=h.fromElement:T=="mouseout"&&(_=h.toElement)),this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),K=0;function le(h,_,T,A,j){this.listener=h,this.proxy=null,this.src=_,this.type=T,this.capture=!!A,this.ha=j,this.key=++K,this.da=this.fa=!1}function Te(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ae(h,_,T){for(const A in h)_.call(T,h[A],A,h)}function Xe(h,_){for(const T in h)_.call(void 0,h[T],T,h)}function k(h){const _={};for(const T in h)_[T]=h[T];return _}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(h,_){let T,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(T in A)h[T]=A[T];for(let H=0;H<$.length;H++)T=$[H],Object.prototype.hasOwnProperty.call(A,T)&&(h[T]=A[T])}}function ce(h){this.src=h,this.g={},this.h=0}ce.prototype.add=function(h,_,T,A,j){const H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);const oe=Oe(h,_,A,j);return oe>-1?(_=h[oe],T||(_.fa=!1)):(_=new le(_,this.src,H,!!A,j),_.fa=T,h.push(_)),_};function Ce(h,_){const T=_.type;if(T in h.g){var A=h.g[T],j=Array.prototype.indexOf.call(A,_,void 0),H;(H=j>=0)&&Array.prototype.splice.call(A,j,1),H&&(Te(_),h.g[T].length==0&&(delete h.g[T],h.h--))}}function Oe(h,_,T,A){for(let j=0;j<h.length;++j){const H=h[j];if(!H.da&&H.listener==_&&H.capture==!!T&&H.ha==A)return j}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),ht={};function nt(h,_,T,A,j){if(Array.isArray(_)){for(let H=0;H<_.length;H++)nt(h,_[H],T,A,j);return null}return T=Q(T),h&&h[Dt]?h.J(_,T,f(A)?!!A.capture:!1,j):gn(h,_,T,!1,A,j)}function gn(h,_,T,A,j,H){if(!_)throw Error("Invalid event type");const oe=f(j)?!!j.capture:!!j;let Fe=Ie(h);if(Fe||(h[ze]=Fe=new ce(h)),T=Fe.add(_,T,A,oe,H),T.proxy)return T;if(A=$t(),T.proxy=A,A.src=h,A.listener=T,h.addEventListener)M||(j=oe),j===void 0&&(j=!1),h.addEventListener(_.toString(),A,j);else if(h.attachEvent)h.attachEvent(fe(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return T}function $t(){function h(T){return _.call(h.src,h.listener,T)}const _=Re;return h}function dt(h,_,T,A,j){if(Array.isArray(_))for(var H=0;H<_.length;H++)dt(h,_[H],T,A,j);else A=f(A)?!!A.capture:!!A,T=Q(T),h&&h[Dt]?(h=h.i,H=String(_).toString(),H in h.g&&(_=h.g[H],T=Oe(_,T,A,j),T>-1&&(Te(_[T]),Array.prototype.splice.call(_,T,1),_.length==0&&(delete h.g[H],h.h--)))):h&&(h=Ie(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Oe(_,T,A,j)),(T=h>-1?_[h]:null)&&se(T))}function se(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Dt])Ce(_.i,h);else{var T=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(T,A,h.capture):_.detachEvent?_.detachEvent(fe(T),A):_.addListener&&_.removeListener&&_.removeListener(A),(T=Ie(_))?(Ce(T,h),T.h==0&&(T.src=null,_[ze]=null)):Te(h)}}}function fe(h){return h in ht?ht[h]:ht[h]="on"+h}function Re(h,_){if(h.da)h=!0;else{_=new He(_,this);const T=h.listener,A=h.ha||h.src;h.fa&&se(h),h=T.call(A,_)}return h}function Ie(h){return h=h[ze],h instanceof ce?h:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(h){return typeof h=="function"?h:(h[V]||(h[V]=function(_){return h.handleEvent(_)}),h[V])}function ie(){x.call(this),this.i=new ce(this),this.M=this,this.G=null}S(ie,x),ie.prototype[Dt]=!0,ie.prototype.removeEventListener=function(h,_,T,A){dt(this,h,_,T,A)};function pe(h,_){var T,A=h.G;if(A)for(T=[];A;A=A.G)T.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new I(_,h);else if(_ instanceof I)_.target=_.target||h;else{var j=_;_=new I(A,h),re(_,j)}j=!0;let H,oe;if(T)for(oe=T.length-1;oe>=0;oe--)H=_.g=T[oe],j=je(H,A,!0,_)&&j;if(H=_.g=h,j=je(H,A,!0,_)&&j,j=je(H,A,!1,_)&&j,T)for(oe=0;oe<T.length;oe++)H=_.g=T[oe],j=je(H,A,!1,_)&&j}ie.prototype.N=function(){if(ie.Z.N.call(this),this.i){var h=this.i;for(const _ in h.g){const T=h.g[_];for(let A=0;A<T.length;A++)Te(T[A]);delete h.g[_],h.h--}}this.G=null},ie.prototype.J=function(h,_,T,A){return this.i.add(String(h),_,!1,T,A)},ie.prototype.K=function(h,_,T,A){return this.i.add(String(h),_,!0,T,A)};function je(h,_,T,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();let j=!0;for(let H=0;H<_.length;++H){const oe=_[H];if(oe&&!oe.da&&oe.capture==T){const Fe=oe.listener,Ht=oe.ha||oe.src;oe.fa&&Ce(h.i,oe),j=Fe.call(Ht,A)!==!1&&j}}return j&&!A.defaultPrevented}function wt(h,_){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:u.setTimeout(h,_||0)}function At(h){h.g=wt(()=>{h.g=null,h.i&&(h.i=!1,At(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Rt extends x{constructor(_,T){super(),this.m=_,this.l=T,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(h){x.call(this),this.h=h,this.g={}}S(hn,x);var ns=[];function wn(h){Ae(h.g,function(_,T){this.g.hasOwnProperty(T)&&se(_)},h),h.g={}}hn.prototype.N=function(){hn.Z.N.call(this),wn(this)},hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xt=u.JSON.stringify,Vt=u.JSON.parse,Bn=class{stringify(h){return u.JSON.stringify(h,void 0)}parse(h){return u.JSON.parse(h,void 0)}};function yi(){}function Os(){}var vt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function dn(){I.call(this,"d")}S(dn,I);function Kn(){I.call(this,"c")}S(Kn,I);var Ut={},kn=null;function gr(){return kn=kn||new ie}Ut.Ia="serverreachability";function Ao(h){I.call(this,Ut.Ia,h)}S(Ao,I);function vi(h){const _=gr();pe(_,new Ao(_))}Ut.STAT_EVENT="statevent";function is(h,_){I.call(this,Ut.STAT_EVENT,h),this.stat=_}S(is,I);function jt(h){const _=gr();pe(_,new is(_,h))}Ut.Ja="timingevent";function Y(h,_){I.call(this,Ut.Ja,h),this.size=_}S(Y,I);function ve(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){h()},_)}function rt(){this.g=!0}rt.prototype.ua=function(){this.g=!1};function Ft(h,_,T,A,j,H){h.info(function(){if(h.g)if(H){var oe="",Fe=H.split("&");for(let lt=0;lt<Fe.length;lt++){var Ht=Fe[lt].split("=");if(Ht.length>1){const Pt=Ht[0];Ht=Ht[1];const bi=Pt.split("_");oe=bi.length>=2&&bi[1]=="type"?oe+(Pt+"="+Ht+"&"):oe+(Pt+"=redacted&")}}}else oe=null;else oe=H;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+_+`
`+T+`
`+oe})}function Pn(h,_,T,A,j,H,oe){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+_+`
`+T+`
`+H+" "+oe})}function ss(h,_,T,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+_m(h,T)+(A?" "+A:"")})}function Ta(h,_){h.info(function(){return"TIMEOUT: "+_})}rt.prototype.info=function(){};function _m(h,_){if(!h.g)return _;if(!_)return null;try{const H=JSON.parse(_);if(H){for(h=0;h<H.length;h++)if(Array.isArray(H[h])){var T=H[h];if(!(T.length<2)){var A=T[1];if(Array.isArray(A)&&!(A.length<1)){var j=A[0];if(j!="noop"&&j!="stop"&&j!="close")for(let oe=1;oe<A.length;oe++)A[oe]=""}}}}return Xt(H)}catch{return _}}var Sa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zl;function ba(){}S(ba,yi),ba.prototype.g=function(){return new XMLHttpRequest},Zl=new ba;function Ms(h){return encodeURIComponent(String(h))}function oh(h){var _=1;h=h.split(":");const T=[];for(;_>0&&h.length;)T.push(h.shift()),_--;return h.length&&T.push(h.join(":")),T}function Vi(h,_,T,A){this.j=h,this.i=_,this.l=T,this.S=A||1,this.V=new hn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var Jt={},_n={};function rs(h,_,T){h.M=1,h.A=wa(en(_)),h.u=T,h.R=!0,Co(h,null)}function Co(h,_){h.F=Date.now(),as(h),h.B=en(h.A);var T=h.B,A=h.S;Array.isArray(A)||(A=[String(A)]),Do(T.i,"t",A),h.C=0,T=h.j.L,h.h=new Ui,h.g=Sh(h.j,T?_:null,!h.u),h.P>0&&(h.O=new Rt(g(h.Y,h,h.g),h.P)),_=h.V,T=h.g,A=h.ba;var j="readystatechange";Array.isArray(j)||(j&&(ns[0]=j.toString()),j=ns);for(let H=0;H<j.length;H++){const oe=nt(T,j[H],A||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.J?k(h.J):{},h.u?(h.v||(h.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,_)):(h.v="GET",h.g.ea(h.B,h.v,null,_)),vi(),Ft(h.i,h.v,h.B,h.l,h.S,h.u)}Vi.prototype.ba=function(h){h=h.target;const _=this.O;_&&Fi(h)==3?_.j():this.Y(h)},Vi.prototype.Y=function(h){try{if(h==this.g)e:{const Fe=Fi(this.g),Ht=this.g.ya(),lt=this.g.ca();if(!(Fe<3)&&(Fe!=3||this.g&&(this.h.h||this.g.la()||An(this.g)))){this.K||Fe!=4||Ht==7||(Ht==8||lt<=0?vi(3):vi(2)),os(this);var _=this.g.ca();this.X=_;var T=ym(this);if(this.o=_==200,Pn(this.i,this.v,this.B,this.l,this.S,Fe,_),this.o){if(this.U&&!this.L){t:{if(this.g){var A,j=this.g;if((A=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(A)){var H=A;break t}}H=null}if(h=H)ss(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,h);else{this.o=!1,this.m=3,jt(12),oi(this),Ei(this);break e}}if(this.R){h=!0;let Pt;for(;!this.K&&this.C<T.length;)if(Pt=ch(this,T),Pt==_n){Fe==4&&(this.m=4,jt(14),h=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Jt){this.m=4,jt(15),ss(this.i,this.l,T,"[Invalid Chunk]"),h=!1;break}else ss(this.i,this.l,Pt,null),ls(this,Pt);if(lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||T.length!=0||this.h.h||(this.m=1,jt(16),h=!1),this.o=this.o&&h,!h)ss(this.i,this.l,T,"[Invalid Chunked Response]"),oi(this),Ei(this);else if(T.length>0&&!this.W){this.W=!0;var oe=this.j;oe.g==this&&oe.aa&&!oe.P&&(oe.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),mc(oe),oe.P=!0,jt(11))}}else ss(this.i,this.l,T,null),ls(this,T);Fe==4&&oi(this),this.o&&!this.K&&(Fe==4?yh(this.j,this):(this.o=!1,as(this)))}else Ps(this.g),_==400&&T.indexOf("Unknown SID")>0?(this.m=3,jt(12)):(this.m=0,jt(13)),oi(this),Ei(this)}}}catch{}finally{}};function ym(h){if(!lh(h))return h.g.la();const _=An(h.g);if(_==="")return"";let T="";const A=_.length,j=Fi(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return oi(h),Ei(h),"";h.h.i=new u.TextDecoder}for(let H=0;H<A;H++)h.h.h=!0,T+=h.h.i.decode(_[H],{stream:!(j&&H==A-1)});return _.length=0,h.h.g+=T,h.C=0,h.h.g}function lh(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function ch(h,_){var T=h.C,A=_.indexOf(`
`,T);return A==-1?_n:(T=Number(_.substring(T,A)),isNaN(T)?Jt:(A+=1,A+T>_.length?_n:(_=_.slice(A,A+T),h.C=A+T,_)))}Vi.prototype.cancel=function(){this.K=!0,oi(this)};function as(h){h.T=Date.now()+h.H,Io(h,h.H)}function Io(h,_){if(h.D!=null)throw Error("WatchDog timer not null");h.D=ve(g(h.aa,h),_)}function os(h){h.D&&(u.clearTimeout(h.D),h.D=null)}Vi.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(Ta(this.i,this.B),this.M!=2&&(vi(),jt(17)),oi(this),this.m=2,Ei(this)):Io(this,this.T-h)};function Ei(h){h.j.I==0||h.K||yh(h.j,h)}function oi(h){os(h);var _=h.O;_&&typeof _.dispose=="function"&&_.dispose(),h.O=null,wn(h.V),h.g&&(_=h.g,h.g=null,_.abort(),_.dispose())}function ls(h,_){try{var T=h.j;if(T.I!=0&&(T.g==h||us(T.h,h))){if(!h.L&&us(T.h,h)&&T.I==3){try{var A=T.Ba.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!T.v){if(T.g)if(T.g.F+3e3<h.F)Po(T),wr(T);else break e;xa(T),jt(18)}}else T.xa=j[1],0<T.xa-T.K&&j[2]<37500&&T.F&&T.A==0&&!T.C&&(T.C=ve(g(T.Va,T),6e3));cs(T.h)<=1&&T.ta&&(T.ta=void 0)}else gs(T,11)}else if((h.L||T.g==h)&&Po(T),!D(_))for(j=T.Ba.g.parse(_),_=0;_<j.length;_++){let lt=j[_];const Pt=lt[0];if(!(Pt<=T.K))if(T.K=Pt,lt=lt[1],T.I==2)if(lt[0]=="c"){T.M=lt[1],T.ba=lt[2];const bi=lt[3];bi!=null&&(T.ka=bi,T.j.info("VER="+T.ka));const _s=lt[4];_s!=null&&(T.za=_s,T.j.info("SVER="+T.za));const Bi=lt[5];Bi!=null&&typeof Bi=="number"&&Bi>0&&(A=1.5*Bi,T.O=A,T.j.info("backChannelRequestTimeoutMs_="+A)),A=T;const qi=h.g;if(qi){const Oa=qi.g?qi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var H=A.h;H.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(nc(H,H.h),H.h=null))}if(A.G){const Lo=qi.g?qi.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(A.wa=Lo,pt(A.J,A.G,Lo))}}T.I=3,T.l&&T.l.ra(),T.aa&&(T.T=Date.now()-h.F,T.j.info("Handshake RTT: "+T.T+"ms")),A=T;var oe=h;if(A.na=Th(A,A.L?A.ba:null,A.W),oe.L){ic(A.h,oe);var Fe=oe,Ht=A.O;Ht&&(Fe.H=Ht),Fe.D&&(os(Fe),as(Fe)),A.g=oe}else gh(A);T.i.length>0&&ps(T)}else lt[0]!="stop"&&lt[0]!="close"||gs(T,7);else T.I==3&&(lt[0]=="stop"||lt[0]=="close"?lt[0]=="stop"?gs(T,7):dc(T):lt[0]!="noop"&&T.l&&T.l.qa(lt),T.A=0)}}vi(4)}catch{}}var Zt=class{constructor(h,_){this.g=h,this.map=_}};function ec(h){this.l=h||10,u.PerformanceNavigationTiming?(h=u.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tc(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function cs(h){return h.h?1:h.g?h.g.size:0}function us(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function nc(h,_){h.g?h.g.add(_):h.h=_}function ic(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ec.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function sc(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const T of h.g.values())_=_.concat(T.G);return _}return L(h.i)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ro(h,_){if(h){h=h.split("&");for(let T=0;T<h.length;T++){const A=h[T].indexOf("=");let j,H=null;A>=0?(j=h[T].substring(0,A),H=h[T].substring(A+1)):j=h[T],_(j,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function li(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;h instanceof li?(this.l=h.l,yn(this,h.j),this.o=h.o,this.g=h.g,_r(this,h.u),this.h=h.h,rc(this,mh(h.i)),this.m=h.m):h&&(_=String(h).match(uh))?(this.l=!1,yn(this,_[1]||"",!0),this.o=hs(_[2]||""),this.g=hs(_[3]||"",!0),_r(this,_[4]),this.h=hs(_[5]||"",!0),rc(this,_[6]||"",!0),this.m=hs(_[7]||"")):(this.l=!1,this.i=new vr(null,this.l))}li.prototype.toString=function(){const h=[];var _=this.j;_&&h.push(Aa(_,No,!0),":");var T=this.g;return(T||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Aa(_,No,!0),"@"),h.push(Ms(T).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.u,T!=null&&h.push(":",String(T))),(T=this.h)&&(this.g&&T.charAt(0)!="/"&&h.push("/"),h.push(Aa(T,T.charAt(0)=="/"?ac:hh,!0))),(T=this.i.toString())&&h.push("?",T),(T=this.m)&&h.push("#",Aa(T,dh)),h.join("")},li.prototype.resolve=function(h){const _=en(this);let T=!!h.j;T?yn(_,h.j):T=!!h.o,T?_.o=h.o:T=!!h.g,T?_.g=h.g:T=h.u!=null;var A=h.h;if(T)_r(_,h.u);else if(T=!!h.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var j=_.h.lastIndexOf("/");j!=-1&&(A=_.h.slice(0,j+1)+A)}if(j=A,j==".."||j==".")A="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){A=j.lastIndexOf("/",0)==0,j=j.split("/");const H=[];for(let oe=0;oe<j.length;){const Fe=j[oe++];Fe=="."?A&&oe==j.length&&H.push(""):Fe==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),A&&oe==j.length&&H.push("")):(H.push(Fe),A=!0)}A=H.join("/")}else A=j}return T?_.h=A:T=h.i.toString()!=="",T?rc(_,mh(h.i)):T=!!h.m,T&&(_.m=h.m),_};function en(h){return new li(h)}function yn(h,_,T){h.j=T?hs(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function _r(h,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);h.u=_}else h.u=null}function rc(h,_,T){_ instanceof vr?(h.i=_,xo(h.i,h.l)):(T||(_=Aa(_,yr)),h.i=new vr(_,h.l))}function pt(h,_,T){h.i.set(_,T)}function wa(h){return pt(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function hs(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Aa(h,_,T){return typeof h=="string"?(h=encodeURI(h).replace(_,Yn),T&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Yn(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var No=/[#\/\?@]/g,hh=/[#\?:]/g,ac=/[#\?]/g,yr=/[#\?@]/g,dh=/#/g;function vr(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Qn(h){h.g||(h.g=new Map,h.h=0,h.i&&Ro(h.i,function(_,T){h.add(decodeURIComponent(_.replace(/\+/g," ")),T)}))}n=vr.prototype,n.add=function(h,_){Qn(this),this.i=null,h=Er(this,h);let T=this.g.get(h);return T||this.g.set(h,T=[]),T.push(_),this.h+=1,this};function fh(h,_){Qn(h),_=Er(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function oc(h,_){return Qn(h),_=Er(h,_),h.g.has(_)}n.forEach=function(h,_){Qn(this),this.g.forEach(function(T,A){T.forEach(function(j){h.call(_,j,A,this)},this)},this)};function lc(h,_){Qn(h);let T=[];if(typeof _=="string")oc(h,_)&&(T=T.concat(h.g.get(Er(h,_))));else for(h=Array.from(h.g.values()),_=0;_<h.length;_++)T=T.concat(h[_]);return T}n.set=function(h,_){return Qn(this),this.i=null,h=Er(this,h),oc(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=lc(this,h),h.length>0?String(h[0]):_):_};function Do(h,_,T){fh(h,_),T.length>0&&(h.i=null,h.g.set(Er(h,_),L(T)),h.h+=T.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(let A=0;A<_.length;A++){var T=_[A];const j=Ms(T);T=lc(this,T);for(let H=0;H<T.length;H++){let oe=j;T[H]!==""&&(oe+="="+Ms(T[H])),h.push(oe)}}return this.i=h.join("&")};function mh(h){const _=new vr;return _.i=h.i,h.g&&(_.g=new Map(h.g),_.h=h.h),_}function Er(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function xo(h,_){_&&!h.j&&(Qn(h),h.i=null,h.g.forEach(function(T,A){const j=A.toLowerCase();A!=j&&(fh(this,A),Do(this,j,T))},h)),h.j=_}function ji(h,_){const T=new rt;if(u.Image){const A=new Image;A.onload=E(Ti,T,"TestLoadImage: loaded",!0,_,A),A.onerror=E(Ti,T,"TestLoadImage: error",!1,_,A),A.onabort=E(Ti,T,"TestLoadImage: abort",!1,_,A),A.ontimeout=E(Ti,T,"TestLoadImage: timeout",!1,_,A),u.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function cc(h,_){const T=new rt,A=new AbortController,j=setTimeout(()=>{A.abort(),Ti(T,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(H=>{clearTimeout(j),H.ok?Ti(T,"TestPingServer: ok",!0,_):Ti(T,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),Ti(T,"TestPingServer: error",!1,_)})}function Ti(h,_,T,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(T)}catch{}}function Tr(){this.g=new Bn}function ds(h){this.i=h.Sb||null,this.h=h.ab||!1}S(ds,yi),ds.prototype.g=function(){return new Ca(this.i,this.h)};function Ca(h,_){ie.call(this),this.H=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ca,ie),n=Ca.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=_,this.readyState=1,zi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(_.body=h),(this.H||u).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},n.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oo(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function Oo(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}n.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Sr(this):zi(this),this.readyState==3&&Oo(this)}},n.Oa=function(h){this.g&&(this.response=this.responseText=h,Sr(this))},n.Na=function(h){this.g&&(this.response=h,Sr(this))},n.ga=function(){this.g&&Sr(this)};function Sr(h){h.readyState=4,h.l=null,h.j=null,h.B=null,zi(h)}n.setRequestHeader=function(h,_){this.A.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var T=_.next();!T.done;)T=T.value,h.push(T[0]+": "+T[1]),T=_.next();return h.join(`\r
`)};function zi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Si(h){let _="";return Ae(h,function(T,A){_+=A,_+=":",_+=T,_+=`\r
`}),_}function Ia(h,_,T){e:{for(A in T){var A=!1;break e}A=!0}A||(T=Si(T),typeof h=="string"?T!=null&&Ms(T):pt(h,_,T))}function Et(h){ie.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Et,ie);var fs=/^https?$/i,uc=["POST","PUT"];n=Et.prototype,n.Fa=function(h){this.H=h},n.ea=function(h,_,T,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zl.g(),this.g.onreadystatechange=w(g(this.Ca,this));try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Ra(this,H);return}if(h=T||"",T=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)T.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())T.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(T.keys()).find(H=>H.toLowerCase()=="content-type"),j=u.FormData&&h instanceof u.FormData,!(Array.prototype.indexOf.call(uc,_,void 0)>=0)||A||j||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,oe]of T)this.g.setRequestHeader(H,oe);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(H){Ra(this,H)}};function Ra(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.o=5,hc(h),ks(h)}function hc(h){h.A||(h.A=!0,pe(h,"complete"),pe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,pe(this,"complete"),pe(this,"abort"),ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ks(this,!0)),Et.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Na(this):this.Xa())},n.Xa=function(){Na(this)};function Na(h){if(h.h&&typeof l<"u"){if(h.v&&Fi(h)==4)setTimeout(h.Ca.bind(h),0);else if(pe(h,"readystatechange"),Fi(h)==4){h.h=!1;try{const H=h.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var T;if(!(T=_)){var A;if(A=H===0){let oe=String(h.D).match(uh)[1]||null;!oe&&u.self&&u.self.location&&(oe=u.self.location.protocol.slice(0,-1)),A=!fs.test(oe?oe.toLowerCase():"")}T=A}if(T)pe(h,"complete"),pe(h,"success");else{h.o=6;try{var j=Fi(h)>2?h.g.statusText:""}catch{j=""}h.l=j+" ["+h.ca()+"]",hc(h)}}finally{ks(h)}}}}function ks(h,_){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const T=h.g;h.g=null,_||pe(h,"ready");try{T.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Fi(h){return h.g?h.g.readyState:0}n.ca=function(){try{return Fi(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Vt(_)}};function An(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(h){const _={};h=(h.g&&Fi(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(D(h[A]))continue;var T=oh(h[A]);const j=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const H=_[j]||[];_[j]=H,H.push(T)}Xe(_,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(h,_,T){return T&&T.internalChannelParams&&T.internalChannelParams[h]||_}function br(h){this.za=0,this.i=[],this.j=new rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ms("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ms("baseRetryDelayMs",5e3,h),this.Za=ms("retryDelaySeedMs",1e4,h),this.Ta=ms("forwardChannelMaxRetries",2,h),this.va=ms("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new ec(h&&h.concurrentRequestLimit),this.Ba=new Tr,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=br.prototype,n.ka=8,n.I=1,n.connect=function(h,_,T,A){jt(0),this.W=h,this.H=_||{},T&&A!==void 0&&(this.H.OSID=T,this.H.OAID=A),this.F=this.X,this.J=Th(this,null,this.W),ps(this)};function dc(h){if(Mo(h),h.I==3){var _=h.V++,T=en(h.J);if(pt(T,"SID",h.M),pt(T,"RID",_),pt(T,"TYPE","terminate"),Da(h,T),_=new Vi(h,h.j,_),_.M=2,_.A=wa(en(T)),T=!1,u.navigator&&u.navigator.sendBeacon)try{T=u.navigator.sendBeacon(_.A.toString(),"")}catch{}!T&&u.Image&&(new Image().src=_.A,T=!0),T||(_.g=Sh(_.j,null),_.g.ea(_.A)),_.F=Date.now(),as(_)}Eh(h)}function wr(h){h.g&&(mc(h),h.g.cancel(),h.g=null)}function Mo(h){wr(h),h.v&&(u.clearTimeout(h.v),h.v=null),Po(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&u.clearTimeout(h.m),h.m=null)}function ps(h){if(!tc(h.h)&&!h.m){h.m=!0;var _=h.Ea;Ue||R(),Ee||(Ue(),Ee=!0),C.add(_,h),h.D=0}}function ko(h,_){return cs(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=_.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=ve(g(h.Ea,h,_),vh(h,h.D)),h.D++,!0)}n.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const j=new Vi(this,this.j,h);let H=this.o;if(this.U&&(H?(H=k(H),re(H,this.U)):H=this.U),this.u!==null||this.R||(j.J=H,H=null),this.S)e:{for(var _=0,T=0;T<this.i.length;T++){t:{var A=this.i[T];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,_>4096){_=T;break e}if(_===4096||T===this.i.length-1){_=T+1;break e}}_=1e3}else _=1e3;_=ph(this,j,_),T=en(this.J),pt(T,"RID",h),pt(T,"CVER",22),this.G&&pt(T,"X-HTTP-Session-Id",this.G),Da(this,T),H&&(this.R?_="headers="+Ms(Si(H))+"&"+_:this.u&&Ia(T,this.u,H)),nc(this.h,j),this.Ra&&pt(T,"TYPE","init"),this.S?(pt(T,"$req",_),pt(T,"SID","null"),j.U=!0,rs(j,T,null)):rs(j,T,_),this.I=2}}else this.I==3&&(h?fc(this,h):this.i.length==0||tc(this.h)||fc(this))};function fc(h,_){var T;_?T=_.l:T=h.V++;const A=en(h.J);pt(A,"SID",h.M),pt(A,"RID",T),pt(A,"AID",h.K),Da(h,A),h.u&&h.o&&Ia(A,h.u,h.o),T=new Vi(h,h.j,T,h.D+1),h.u===null&&(T.J=h.o),_&&(h.i=_.G.concat(h.i)),_=ph(h,T,1e3),T.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),nc(h.h,T),rs(T,A,_)}function Da(h,_){h.H&&Ae(h.H,function(T,A){pt(_,A,T)}),h.l&&Ae({},function(T,A){pt(_,A,T)})}function ph(h,_,T){T=Math.min(h.i.length,T);const A=h.l?g(h.l.Ka,h.l,h):null;e:{var j=h.i;let Fe=-1;for(;;){const Ht=["count="+T];Fe==-1?T>0?(Fe=j[0].g,Ht.push("ofs="+Fe)):Fe=0:Ht.push("ofs="+Fe);let lt=!0;for(let Pt=0;Pt<T;Pt++){var H=j[Pt].g;const bi=j[Pt].map;if(H-=Fe,H<0)Fe=Math.max(0,j[Pt].g-100),lt=!1;else try{H="req"+H+"_"||"";try{var oe=bi instanceof Map?bi:Object.entries(bi);for(const[_s,Bi]of oe){let qi=Bi;f(Bi)&&(qi=Xt(Bi)),Ht.push(H+_s+"="+encodeURIComponent(qi))}}catch(_s){throw Ht.push(H+"type="+encodeURIComponent("_badmap")),_s}}catch{A&&A(bi)}}if(lt){oe=Ht.join("&");break e}}oe=void 0}return h=h.i.splice(0,T),_.G=h,oe}function gh(h){if(!h.g&&!h.v){h.Y=1;var _=h.Da;Ue||R(),Ee||(Ue(),Ee=!0),C.add(_,h),h.A=0}}function xa(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=ve(g(h.Da,h),vh(h,h.A)),h.A++,!0)}n.Da=function(){if(this.v=null,_h(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=ve(g(this.Wa,this),h)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,jt(10),wr(this),_h(this))};function mc(h){h.B!=null&&(u.clearTimeout(h.B),h.B=null)}function _h(h){h.g=new Vi(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var _=en(h.na);pt(_,"RID","rpc"),pt(_,"SID",h.M),pt(_,"AID",h.K),pt(_,"CI",h.F?"0":"1"),!h.F&&h.ia&&pt(_,"TO",h.ia),pt(_,"TYPE","xmlhttp"),Da(h,_),h.u&&h.o&&Ia(_,h.u,h.o),h.O&&(h.g.H=h.O);var T=h.g;h=h.ba,T.M=1,T.A=wa(en(_)),T.u=null,T.R=!0,Co(T,h)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),xa(this),jt(19))};function Po(h){h.C!=null&&(u.clearTimeout(h.C),h.C=null)}function yh(h,_){var T=null;if(h.g==_){Po(h),mc(h),h.g=null;var A=2}else if(us(h.h,_))T=_.G,ic(h.h,_),A=1;else return;if(h.I!=0){if(_.o)if(A==1){T=_.u?_.u.length:0,_=Date.now()-_.F;var j=h.D;A=gr(),pe(A,new Y(A,T)),ps(h)}else gh(h);else if(j=_.m,j==3||j==0&&_.X>0||!(A==1&&ko(h,_)||A==2&&xa(h)))switch(T&&T.length>0&&(_=h.h,_.i=_.i.concat(T)),j){case 1:gs(h,5);break;case 4:gs(h,10);break;case 3:gs(h,6);break;default:gs(h,2)}}}function vh(h,_){let T=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(T*=2),T*_}function gs(h,_){if(h.j.info("Error code "+_),_==2){var T=g(h.bb,h),A=h.Ua;const j=!A;A=new li(A||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||yn(A,"https"),wa(A),j?ji(A.toString(),T):cc(A.toString(),T)}else jt(2);h.I=0,h.l&&h.l.pa(_),Eh(h),Mo(h)}n.bb=function(h){h?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Eh(h){if(h.I=0,h.ja=[],h.l){const _=sc(h.h);(_.length!=0||h.i.length!=0)&&(q(h.ja,_),q(h.ja,h.i),h.h.i.length=0,L(h.i),h.i.length=0),h.l.oa()}}function Th(h,_,T){var A=T instanceof li?en(T):new li(T);if(A.g!="")_&&(A.g=_+"."+A.g),_r(A,A.u);else{var j=u.location;A=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;const H=new li(null);A&&yn(H,A),_&&(H.g=_),j&&_r(H,j),T&&(H.h=T),A=H}return T=h.G,_=h.wa,T&&_&&pt(A,T,_),pt(A,"VER",h.ka),Da(h,A),A}function Sh(h,_,T){if(_&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Aa&&!h.ma?new Et(new ds({ab:T})):new Et(h.ma),_.Fa(h.L),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bh(){}n=bh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ar(){}Ar.prototype.g=function(h,_){return new qn(h,_)};function qn(h,_){ie.call(this),this.g=new br(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(h?h["X-WebChannel-Client-Profile"]=_.sa:h={"X-WebChannel-Client-Profile":_.sa}),this.g.U=h,(h=_&&_.Qb)&&!D(h)&&(this.g.u=h),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!D(_)&&(this.g.G=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ls(this)}S(qn,ie),qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){dc(this.g)},qn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var T={};T.__data__=h,h=T}else this.v&&(T={},T.__data__=Xt(h),h=T);_.i.push(new Zt(_.Ya++,h)),_.I==3&&ps(_)},qn.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,qn.Z.N.call(this)};function wh(h){dn.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const T in _){h=T;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}S(wh,dn);function Ah(){Kn.call(this),this.status=1}S(Ah,Kn);function Ls(h){this.g=h}S(Ls,bh),Ls.prototype.ra=function(){pe(this.g,"a")},Ls.prototype.qa=function(h){pe(this.g,new wh(h))},Ls.prototype.pa=function(h){pe(this.g,new Ah)},Ls.prototype.oa=function(){pe(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,mC=function(){return new Ar},fC=function(){return gr()},dC=Ut,n_={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,Hd=Sa,Jl.COMPLETE="complete",hC=Jl,Os.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ie.prototype.listen=ie.prototype.J,lu=Os,Et.prototype.listenOnce=Et.prototype.K,Et.prototype.getLastError=Et.prototype.Ha,Et.prototype.getLastErrorCode=Et.prototype.ya,Et.prototype.getStatus=Et.prototype.ca,Et.prototype.getResponseJson=Et.prototype.La,Et.prototype.getResponseText=Et.prototype.la,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Fa,uC=Et}).apply(typeof Dd<"u"?Dd:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Un.UNAUTHENTICATED=new Un(null),Un.GOOGLE_CREDENTIALS=new Un("google-credentials-uid"),Un.FIRST_PARTY=new Un("first-party-uid"),Un.MOCK_USER=new Un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql="12.11.0";function Nk(n){ql=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Bu("@firebase/firestore");function fl(){return lo.logLevel}function me(n,...e){if(lo.logLevel<=$e.DEBUG){const t=e.map(oy);lo.debug(`Firestore (${ql}): ${n}`,...t)}}function hr(n,...e){if(lo.logLevel<=$e.ERROR){const t=e.map(oy);lo.error(`Firestore (${ql}): ${n}`,...t)}}function co(n,...e){if(lo.logLevel<=$e.WARN){const t=e.map(oy);lo.warn(`Firestore (${ql}): ${n}`,...t)}}function oy(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,pC(n,s,t)}function pC(n,e,t){let s=`FIRESTORE (${ql}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw hr(s),new Error(s)}function ft(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||pC(e,a,s)}function Ve(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends ts{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Un.UNAUTHENTICATED)))}shutdown(){}}class xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ok{constructor(e){this.t=e,this.currentUser=Un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ft(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ar,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ar)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string",31837,{l:s}),new gC(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string",2055,{h:e}),new Un(e)}}class Mk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Un.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class kk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Mk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ti(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ft(this.o===void 0,3512);const s=l=>{l.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,me("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ft(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qS(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Lk(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function et(n,e){return n<e?-1:n>e?1:0}function i_(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return Ng(a)===Ng(l)?et(a,l):Ng(a)?1:-1}return et(n.length,e.length)}const Vk=55296,Uk=57343;function Ng(n){const e=n.charCodeAt(0);return e>=Vk&&e<=Uk}function Dl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="__name__";class bs{constructor(e,t,s){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&xe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=bs.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return et(e.length,t.length)}static compareSegments(e,t){const s=bs.isNumericId(e),a=bs.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?bs.extractNumericId(e).compare(bs.extractNumericId(t)):i_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class Nt extends bs{construct(e,t,s){return new Nt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new Nt(t)}static emptyPath(){return new Nt([])}}const jk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class On extends bs{construct(e,t,s){return new On(e,t,s)}static isValidIdentifier(e){return jk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),On.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===HS}static keyField(){return new On([HS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new he(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(s+=f,a++):(l(),a++)}if(l(),u)throw new he(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new On(t)}static emptyPath(){return new On([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(Nt.fromString(e))}static fromName(e){return new we(Nt.fromString(e).popFirst(5))}static empty(){return new we(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new Nt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n,e,t){if(!t)throw new he(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zk(n,e,t,s){if(e===!0&&s===!0)throw new he(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function GS(n){if(!we.isDocumentKey(n))throw new he(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function KS(n){if(we.isDocumentKey(n))throw new he(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yC(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function dr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(n);throw new he(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qu(n,e){if(!yC(n))throw new he(ee.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new he(ee.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=-62135596800,QS=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*QS);return new kt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<YS)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/QS}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qu(e,kt._jsonSchema))return new kt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-YS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:cn("string",kt._jsonSchemaVersion),seconds:cn("number"),nanoseconds:cn("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new kt(0,0))}static max(){return new Pe(new kt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=-1;function Fk(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Pe.fromTimestamp(s===1e9?new kt(t+1,0):new kt(t,s));return new ra(a,we.empty(),e)}function Bk(n){return new ra(n.readTime,n.key,Iu)}class ra{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ra(Pe.min(),we.empty(),Iu)}static max(){return new ra(Pe.max(),we.empty(),Iu)}}function qk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:et(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==Hk)throw n;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ne(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ne?t:ne.resolve(t)}catch(t){return ne.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ne.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ne.reject(t)}static resolve(e){return new ne(((t,s)=>{t(e)}))}static reject(e){return new ne(((t,s)=>{s(e)}))}static waitFor(e){return new ne(((t,s)=>{let a=0,l=0,u=!1;e.forEach((f=>{++a,f.next((()=>{++l,u&&l===a&&t()}),(p=>s(p)))})),u=!0,l===a&&t()}))}static or(e){let t=ne.resolve(!1);for(const s of e)t=t.next((a=>a?ne.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ne(((s,a)=>{const l=e.length,u=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((E=>{u[g]=E,++f,f===l&&s(u)}),(E=>a(E)))}}))}static doWhile(e,t){return new ne(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function Kk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=-1;function Gf(n){return n==null}function hf(n){return n===0&&1/n==-1/0}function Yk(n){return typeof n=="number"&&Number.isInteger(n)&&!hf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="";function Qk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=WS(e)),e=Wk(n.get(t),e);return WS(e)}function Wk(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case vC:t+="";break;default:t+=l}}return t}function WS(n){return n+vC+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _a(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function EC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class s_{constructor(e,t){this.comparator=e,this.root=t||na.EMPTY}insert(e,t){return new s_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,na.BLACK,null,null))}remove(e){return new s_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,na.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xd(this.root,e,this.comparator,!1)}getReverseIterator(){return new xd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xd(this.root,e,this.comparator,!0)}},xd=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},na=class Js{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Js.RED,this.left=a??Js.EMPTY,this.right=l??Js.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Js(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Js.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Js.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Js.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Js.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}};na.EMPTY=null,na.RED=!0,na.BLACK=!1;na.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new na(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e,this.data=new un(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new XS(this.data.getIterator())}getIteratorFrom(e){return new XS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mn(this.comparator);return t.data=e,t}}class XS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.fields=e,e.sort(On.comparator)}static empty(){return new gi([])}unionWith(e){let t=new mn(On.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new gi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new TC("Invalid base64 string: "+l):l}})(e);return new Mn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new Mn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mn.EMPTY_BYTE_STRING=new Mn("");const $k=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function aa(n){if(ft(!!n,39018),typeof n=="string"){let e=0;const t=$k.exec(n);if(ft(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Yt(n.seconds),nanos:Yt(n.nanos)}}function Yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oa(n){return typeof n=="string"?Mn.fromBase64String(n):Mn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="server_timestamp",bC="__type__",wC="__previous_value__",AC="__local_write_time__";function uy(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bC])==null?void 0:s.stringValue)===SC}function Kf(n){const e=n.mapValue.fields[wC];return uy(e)?Kf(e):e}function Ru(n){const e=aa(n.mapValue.fields[AC].timestampValue);return new kt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,t,s,a,l,u,f,p,g,E,S){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E,this.apiKey=S}}const df="(default)";class Nu{constructor(e,t){this.projectId=e,this.database=t||df}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database===df}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}function Jk(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new he(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="__type__",Zk="__max__",Od={mapValue:{}},IC="__vector__",ff="value";function la(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uy(n)?4:tP(n)?9007199254740991:eP(n)?10:11:xe(28295,{value:n})}function Ns(n,e){if(n===e)return!0;const t=la(n);if(t!==la(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ru(n).isEqual(Ru(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=aa(a.timestampValue),f=aa(l.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return oa(a.bytesValue).isEqual(oa(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Yt(a.geoPointValue.latitude)===Yt(l.geoPointValue.latitude)&&Yt(a.geoPointValue.longitude)===Yt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Yt(a.integerValue)===Yt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Yt(a.doubleValue),f=Yt(l.doubleValue);return u===f?hf(u)===hf(f):isNaN(u)&&isNaN(f)}return!1})(n,e);case 9:return Dl(n.arrayValue.values||[],e.arrayValue.values||[],Ns);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},f=l.mapValue.fields||{};if($S(u)!==$S(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!Ns(u[p],f[p])))return!1;return!0})(n,e);default:return xe(52216,{left:n})}}function Du(n,e){return(n.values||[]).find((t=>Ns(t,e)))!==void 0}function xl(n,e){if(n===e)return 0;const t=la(n),s=la(e);if(t!==s)return et(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return et(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const f=Yt(l.integerValue||l.doubleValue),p=Yt(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return JS(n.timestampValue,e.timestampValue);case 4:return JS(Ru(n),Ru(e));case 5:return i_(n.stringValue,e.stringValue);case 6:return(function(l,u){const f=oa(l),p=oa(u);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const f=l.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const E=et(f[g],p[g]);if(E!==0)return E}return et(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const f=et(Yt(l.latitude),Yt(u.latitude));return f!==0?f:et(Yt(l.longitude),Yt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ZS(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var w,L,q,J;const f=l.fields||{},p=u.fields||{},g=(w=f[ff])==null?void 0:w.arrayValue,E=(L=p[ff])==null?void 0:L.arrayValue,S=et(((q=g==null?void 0:g.values)==null?void 0:q.length)||0,((J=E==null?void 0:E.values)==null?void 0:J.length)||0);return S!==0?S:ZS(g,E)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===Od.mapValue&&u===Od.mapValue)return 0;if(l===Od.mapValue)return 1;if(u===Od.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=u.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const w=i_(p[S],E[S]);if(w!==0)return w;const L=xl(f[p[S]],g[E[S]]);if(L!==0)return L}return et(p.length,E.length)})(n.mapValue,e.mapValue);default:throw xe(23264,{he:t})}}function JS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return et(n,e);const t=aa(n),s=aa(e),a=et(t.seconds,s.seconds);return a!==0?a:et(t.nanos,s.nanos)}function ZS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=xl(t[a],s[a]);if(l)return l}return et(t.length,s.length)}function Ol(n){return r_(n)}function r_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=aa(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return oa(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return we.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=r_(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${r_(t.fields[u])}`;return a+"}"})(n.mapValue):xe(61005,{value:n})}function Gd(n){switch(la(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kf(n);return e?16+Gd(e):16;case 5:return 2*n.stringValue.length;case 6:return oa(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Gd(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return _a(s.fields,((l,u)=>{a+=l.length+Gd(u)})),a})(n.mapValue);default:throw xe(13486,{value:n})}}function eb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function a_(n){return!!n&&"integerValue"in n}function hy(n){return!!n&&"arrayValue"in n}function tb(n){return!!n&&"nullValue"in n}function nb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kd(n){return!!n&&"mapValue"in n}function eP(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[CC])==null?void 0:s.stringValue)===IC}function mu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _a(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=mu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mu(n.arrayValue.values[t]);return e}return{...n}}function tP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Zk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.value=e}static empty(){return new ni({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Kd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mu(t)}setAll(e){let t=On.emptyPath(),s={},a=[];e.forEach(((u,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=f.popLast()}u?s[f.lastSegment()]=mu(u):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Kd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ns(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Kd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){_a(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new ni(mu(this.value))}}function RC(n){const e=[];return _a(n.fields,((t,s)=>{const a=new On([t]);if(Kd(s)){const l=RC(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new gi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,s,a,l,u,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=f}static newInvalidDocument(e){return new jn(e,0,Pe.min(),Pe.min(),Pe.min(),ni.empty(),0)}static newFoundDocument(e,t,s,a){return new jn(e,1,t,Pe.min(),s,a,0)}static newNoDocument(e,t){return new jn(e,2,t,Pe.min(),Pe.min(),ni.empty(),0)}static newUnknownDocument(e,t){return new jn(e,3,t,Pe.min(),Pe.min(),ni.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ni.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ni.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.position=e,this.inclusive=t}}function ib(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=we.comparator(we.fromName(u.referenceValue),t.key):s=xl(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function sb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ns(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function nP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{}class ln extends NC{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sP(e,t,s):t==="array-contains"?new oP(e,s):t==="in"?new lP(e,s):t==="not-in"?new cP(e,s):t==="array-contains-any"?new uP(e,s):new ln(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new rP(e,s):new aP(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xl(t,this.value)):t!==null&&la(this.value)===la(t)&&this.matchesComparison(xl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class es extends NC{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new es(e,t)}matches(e){return DC(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function DC(n){return n.op==="and"}function xC(n){return iP(n)&&DC(n)}function iP(n){for(const e of n.filters)if(e instanceof es)return!1;return!0}function o_(n){if(n instanceof ln)return n.field.canonicalString()+n.op.toString()+Ol(n.value);if(xC(n))return n.filters.map((e=>o_(e))).join(",");{const e=n.filters.map((t=>o_(t))).join(",");return`${n.op}(${e})`}}function OC(n,e){return n instanceof ln?(function(s,a){return a instanceof ln&&s.op===a.op&&s.field.isEqual(a.field)&&Ns(s.value,a.value)})(n,e):n instanceof es?(function(s,a){return a instanceof es&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,f)=>l&&OC(u,a.filters[f])),!0):!1})(n,e):void xe(19439)}function MC(n){return n instanceof ln?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ol(t.value)}`})(n):n instanceof es?(function(t){return t.op.toString()+" {"+t.getFilters().map(MC).join(" ,")+"}"})(n):"Filter"}class sP extends ln{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class rP extends ln{constructor(e,t){super(e,"in",t),this.keys=kC("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class aP extends ln{constructor(e,t){super(e,"not-in",t),this.keys=kC("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kC(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>we.fromName(s.referenceValue)))}class oP extends ln{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hy(t)&&Du(t.arrayValue,this.value)}}class lP extends ln{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Du(this.value.arrayValue,t)}}class cP extends ln{constructor(e,t){super(e,"not-in",t)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Du(this.value.arrayValue,t)}}class uP extends ln{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Du(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,t=null,s=[],a=[],l=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=f,this.Te=null}}function rb(n,e=null,t=[],s=[],a=null,l=null,u=null){return new hP(n,e,t,s,a,l,u)}function dy(n){const e=Ve(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>o_(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Gf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ol(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ol(s))).join(",")),e.Te=t}return e.Te}function fy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!OC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sb(n.startAt,e.startAt)&&sb(n.endAt,e.endAt)}function l_(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t=null,s=[],a=[],l=null,u="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=f,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function dP(n,e,t,s,a,l,u,f){return new Kl(n,e,t,s,a,l,u,f)}function my(n){return new Kl(n)}function ab(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fP(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function PC(n){return n.collectionGroup!==null}function pu(n){const e=Ve(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new mn(On.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new xu(l,s))})),t.has(On.keyField().canonicalString())||e.Ee.push(new xu(On.keyField(),s))}return e.Ee}function As(n){const e=Ve(n);return e.Ie||(e.Ie=mP(e,pu(n))),e.Ie}function mP(n,e){if(n.limitType==="F")return rb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new xu(a.field,l)}));const t=n.endAt?new mf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new mf(n.startAt.position,n.startAt.inclusive):null;return rb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function c_(n,e){const t=n.filters.concat([e]);return new Kl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pP(n,e){const t=n.explicitOrderBy.concat([e]);return new Kl(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function u_(n,e,t){return new Kl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yf(n,e){return fy(As(n),As(e))&&n.limitType===e.limitType}function LC(n){return`${dy(As(n))}|lt:${n.limitType}`}function ml(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>MC(a))).join(", ")}]`),Gf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>Ol(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>Ol(a))).join(",")),`Target(${s})`})(As(n))}; limitType=${n.limitType})`}function Qf(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):we.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of pu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,f,p){const g=ib(u,f,p);return u.inclusive?g<=0:g<0})(s.startAt,pu(s),a)||s.endAt&&!(function(u,f,p){const g=ib(u,f,p);return u.inclusive?g>=0:g>0})(s.endAt,pu(s),a))})(n,e)}function gP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function VC(n){return(e,t)=>{let s=!1;for(const a of pu(n)){const l=_P(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function _P(n,e,t){const s=n.field.isKeyField()?we.comparator(e.key,t.key):(function(l,u,f){const p=u.data.field(l),g=f.data.field(l);return p!==null&&g!==null?xl(p,g):xe(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return xe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){_a(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return EC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new un(we.comparator);function fr(){return yP}const UC=new un(we.comparator);function cu(...n){let e=UC;for(const t of n)e=e.insert(t.key,t);return e}function jC(n){let e=UC;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ja(){return gu()}function zC(){return gu()}function gu(){return new Eo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vP=new un(we.comparator),EP=new mn(we.comparator);function tt(...n){let e=EP;for(const t of n)e=e.add(t);return e}const TP=new mn(et);function SP(){return TP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hf(e)?"-0":e}}function FC(n){return{integerValue:""+n}}function bP(n,e){return Yk(e)?FC(e):py(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this._=void 0}}function wP(n,e,t){return n instanceof Ou?(function(a,l){const u={fields:{[bC]:{stringValue:SC},[AC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&uy(l)&&(l=Kf(l)),l&&(u.fields[wC]=l),{mapValue:u}})(t,e):n instanceof Mu?qC(n,e):n instanceof ku?HC(n,e):(function(a,l){const u=BC(a,l),f=ob(u)+ob(a.Ae);return a_(u)&&a_(a.Ae)?FC(f):py(a.serializer,f)})(n,e)}function AP(n,e,t){return n instanceof Mu?qC(n,e):n instanceof ku?HC(n,e):t}function BC(n,e){return n instanceof pf?(function(s){return a_(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ou extends Wf{}class Mu extends Wf{constructor(e){super(),this.elements=e}}function qC(n,e){const t=GC(e);for(const s of n.elements)t.some((a=>Ns(a,s)))||t.push(s);return{arrayValue:{values:t}}}class ku extends Wf{constructor(e){super(),this.elements=e}}function HC(n,e){let t=GC(e);for(const s of n.elements)t=t.filter((a=>!Ns(a,s)));return{arrayValue:{values:t}}}class pf extends Wf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ob(n){return Yt(n.integerValue||n.doubleValue)}function GC(n){return hy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t){this.field=e,this.transform=t}}function IP(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof Mu&&a instanceof Mu||s instanceof ku&&a instanceof ku?Dl(s.elements,a.elements,Ns):s instanceof pf&&a instanceof pf?Ns(s.Ae,a.Ae):s instanceof Ou&&a instanceof Ou})(n.transform,e.transform)}class RP{constructor(e,t){this.version=e,this.transformResults=t}}class Cs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cs}static exists(e){return new Cs(void 0,e)}static updateTime(e){return new Cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $f{}function KC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new QC(n.key,Cs.none()):new Wu(n.key,n.data,Cs.none());{const t=n.data,s=ni.empty();let a=new mn(On.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new ya(n.key,s,new gi(a.toArray()),Cs.none())}}function NP(n,e,t){n instanceof Wu?(function(a,l,u){const f=a.value.clone(),p=cb(a.fieldTransforms,l,u.transformResults);f.setAll(p),l.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ya?(function(a,l,u){if(!Yd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const f=cb(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(YC(a)),p.setAll(f),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function _u(n,e,t,s){return n instanceof Wu?(function(l,u,f,p){if(!Yd(l.precondition,u))return f;const g=l.value.clone(),E=ub(l.fieldTransforms,p,u);return g.setAll(E),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof ya?(function(l,u,f,p){if(!Yd(l.precondition,u))return f;const g=ub(l.fieldTransforms,p,u),E=u.data;return E.setAll(YC(l)),E.setAll(g),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(n,e,t,s):(function(l,u,f){return Yd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f})(n,e,t)}function DP(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=BC(s.transform,a||null);l!=null&&(t===null&&(t=ni.empty()),t.set(s.field,l))}return t||null}function lb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Dl(s,a,((l,u)=>IP(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wu extends $f{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ya extends $f{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function YC(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function cb(n,e,t){const s=new Map;ft(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,f=e.data.field(l.field);s.set(l.field,AP(u,f,t[a]))}return s}function ub(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,wP(l,u,e))}return s}class QC extends $f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xP extends $f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&NP(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=_u(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=_u(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=zC();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let f=this.applyToLocalView(u,l.mutatedFields);f=t.has(a.key)?null:f;const p=KC(u,f);p!==null&&s.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Pe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),tt())}isEqual(e){return this.batchId===e.batchId&&Dl(this.mutations,e.mutations,((t,s)=>lb(t,s)))&&Dl(this.baseMutations,e.baseMutations,((t,s)=>lb(t,s)))}}class gy{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){ft(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return vP})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new gy(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an,st;function PP(n){switch(n){case ee.OK:return xe(64938);case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return xe(15467,{code:n})}}function WC(n){if(n===void 0)return hr("GRPC error has no .code"),ee.UNKNOWN;switch(n){case an.OK:return ee.OK;case an.CANCELLED:return ee.CANCELLED;case an.UNKNOWN:return ee.UNKNOWN;case an.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case an.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case an.INTERNAL:return ee.INTERNAL;case an.UNAVAILABLE:return ee.UNAVAILABLE;case an.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case an.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case an.NOT_FOUND:return ee.NOT_FOUND;case an.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case an.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case an.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case an.ABORTED:return ee.ABORTED;case an.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case an.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case an.DATA_LOSS:return ee.DATA_LOSS;default:return xe(39323,{code:n})}}(st=an||(an={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new ta([4294967295,4294967295],0);function hb(n){const e=LP().encode(n),t=new cC;return t.update(e),new Uint8Array(t.digest())}function db(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ta([t,s],0),new ta([a,l],0)]}class _y{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new uu(`Invalid padding: ${t}`);if(s<0)throw new uu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new uu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new uu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ta.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(ta.fromNumber(s)));return a.compare(VP)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hb(e),[s,a]=db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new _y(l,a,t);return s.forEach((f=>u.insert(f))),u}insert(e){if(this.ge===0)return;const t=hb(e),[s,a]=db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,$u.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xf(Pe.min(),a,new un(et),fr(),tt())}}class $u{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $u(s,t,tt(),tt(),tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class $C{constructor(e,t){this.targetId=e,this.Ce=t}}class XC{constructor(e,t,s=Mn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class fb{constructor(){this.ve=0,this.Fe=mb(),this.Me=Mn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=tt(),t=tt(),s=tt();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:xe(38017,{changeType:l})}})),new $u(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=mb()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ft(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class UP{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.Je=Md(),this.He=Md(),this.Ze=new un(et)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:xe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(l_(l))if(s===0){const u=new we(l.path);this.et(t,u,jn.newNoDocument(u,Pe.min()))}else ft(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const f=this.ut(e),p=f?this.ct(f,e,u):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,f;try{u=oa(s).toUint8Array()}catch(p){if(p instanceof TC)return co("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new _y(u,a,l)}catch(p){return co(p instanceof uu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const f=this.ot(u);if(f){if(l.current&&l_(f.target)){const p=new we(f.target.path);this.Et(p).has(u)||this.It(u,p)||this.et(u,p,jn.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=tt();this.He.forEach(((l,u)=>{let f=!0;u.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new Xf(e,t,this.Ze,this.je,s);return this.je=fr(),this.Je=Md(),this.He=Md(),this.Ze=new un(et),a}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.It(e,t)?a.Ke(t,1):a.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new fb,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new mn(et),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new mn(et),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||me("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Md(){return new un(we.comparator)}function mb(){return new un(we.comparator)}const jP={asc:"ASCENDING",desc:"DESCENDING"},zP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FP={and:"AND",or:"OR"};class BP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function h_(n,e){return n.useProto3Json||Gf(e)?e:{value:e}}function gf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qP(n,e){return gf(n,e.toTimestamp())}function Is(n){return ft(!!n,49232),Pe.fromTimestamp((function(t){const s=aa(t);return new kt(s.seconds,s.nanos)})(n))}function yy(n,e){return d_(n,e).canonicalString()}function d_(n,e){const t=(function(a){return new Nt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ZC(n){const e=Nt.fromString(n);return ft(s1(e),10190,{key:e.toString()}),e}function f_(n,e){return yy(n.databaseId,e.path)}function Dg(n,e){const t=ZC(e);if(t.get(1)!==n.databaseId.projectId)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(t1(t))}function e1(n,e){return yy(n.databaseId,e)}function HP(n){const e=ZC(n);return e.length===4?Nt.emptyPath():t1(e)}function m_(n){return new Nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function t1(n){return ft(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pb(n,e,t){return{name:f_(n,e),fields:t.value.mapValue.fields}}function GP(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:xe(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,E){return g.useProto3Json?(ft(E===void 0||typeof E=="string",58123),Mn.fromBase64String(E||"")):(ft(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Mn.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&(function(g){const E=g.code===void 0?ee.UNKNOWN:WC(g.code);return new he(E,g.message||"")})(u);t=new XC(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Dg(n,s.document.name),l=Is(s.document.updateTime),u=s.document.createTime?Is(s.document.createTime):Pe.min(),f=new ni({mapValue:{fields:s.document.fields}}),p=jn.newFoundDocument(a,l,u,f),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Qd(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Dg(n,s.document),l=s.readTime?Is(s.readTime):Pe.min(),u=jn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Qd([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Dg(n,s.document),l=s.removedTargetIds||[];t=new Qd([],l,a,null)}else{if(!("filter"in e))return xe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new kP(a,l),f=s.targetId;t=new $C(f,u)}}return t}function KP(n,e){let t;if(e instanceof Wu)t={update:pb(n,e.key,e.value)};else if(e instanceof QC)t={delete:f_(n,e.key)};else if(e instanceof ya)t={update:pb(n,e.key,e.data),updateMask:tL(e.fieldMask)};else{if(!(e instanceof xP))return xe(16599,{dt:e.type});t={verify:f_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const f=u.transform;if(f instanceof Ou)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Mu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ku)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof pf)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw xe(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:qP(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:xe(27497)})(n,e.precondition)),t}function YP(n,e){return n&&n.length>0?(ft(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?Is(a.updateTime):Is(l);return u.isEqual(Pe.min())&&(u=Is(l)),new RP(u,a.transformResults||[])})(t,e)))):[]}function QP(n,e){return{documents:[e1(n,e.path)]}}function WP(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=e1(n,a);const l=(function(g){if(g.length!==0)return i1(es.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(g){if(g.length!==0)return g.map((E=>(function(w){return{field:pl(w.field),direction:JP(w.dir)}})(E)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=h_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function $P(n){let e=HP(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){ft(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(S){const w=n1(S);return w instanceof es&&xC(w)?w.getFilters():[w]})(t.where));let u=[];t.orderBy&&(u=(function(S){return S.map((w=>(function(q){return new xu(gl(q.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(w)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let w;return w=typeof S=="object"?S.value:S,Gf(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(S){const w=!!S.before,L=S.values||[];return new mf(L,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(S){const w=!S.before,L=S.values||[];return new mf(L,w)})(t.endAt)),dP(e,a,u,l,f,"F",p,g)}function XP(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function n1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=gl(t.unaryFilter.field);return ln.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=gl(t.unaryFilter.field);return ln.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=gl(t.unaryFilter.field);return ln.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=gl(t.unaryFilter.field);return ln.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ln.create(gl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return es.create(t.compositeFilter.filters.map((s=>n1(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return xe(1026)}})(t.compositeFilter.op))})(n):xe(30097,{filter:n})}function JP(n){return jP[n]}function ZP(n){return zP[n]}function eL(n){return FP[n]}function pl(n){return{fieldPath:n.canonicalString()}}function gl(n){return On.fromServerFormat(n.fieldPath)}function i1(n){return n instanceof ln?(function(t){if(t.op==="=="){if(nb(t.value))return{unaryFilter:{field:pl(t.field),op:"IS_NAN"}};if(tb(t.value))return{unaryFilter:{field:pl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nb(t.value))return{unaryFilter:{field:pl(t.field),op:"IS_NOT_NAN"}};if(tb(t.value))return{unaryFilter:{field:pl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pl(t.field),op:ZP(t.op),value:t.value}}})(n):n instanceof es?(function(t){const s=t.getFilters().map((a=>i1(a)));return s.length===1?s[0]:{compositeFilter:{op:eL(t.op),filters:s}}})(n):xe(54877,{filter:n})}function tL(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function s1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function r1(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,s,a,l=Pe.min(),u=Pe.min(),f=Mn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.yt=e}}function iL(n){const e=$P({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?u_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.bn=new rL}addToCollectionParentIndex(e,t){return this.bn.add(t),ne.resolve()}getCollectionParents(e,t){return ne.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return ne.resolve()}deleteFieldIndex(e,t){return ne.resolve()}deleteAllFieldIndexes(e){return ne.resolve()}createTargetIndexes(e,t){return ne.resolve()}getDocumentsMatchingTarget(e,t){return ne.resolve(null)}getIndexType(e,t){return ne.resolve(0)}getFieldIndexes(e,t){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,t){return ne.resolve(ra.min())}getMinOffsetFromCollectionGroup(e,t){return ne.resolve(ra.min())}updateCollectionGroup(e,t,s){return ne.resolve()}updateIndexEntries(e,t){return ne.resolve()}}class rL{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new mn(Nt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new mn(Nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a1=41943040;class ei{static withCacheSize(e){return new ei(e,ei.DEFAULT_COLLECTION_PERCENTILE,ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei.DEFAULT_COLLECTION_PERCENTILE=10,ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ei.DEFAULT=new ei(a1,ei.DEFAULT_COLLECTION_PERCENTILE,ei.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ei.DISABLED=new ei(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ml(0)}static ar(){return new Ml(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="LruGarbageCollector",aL=1048576;function yb([n,e],[t,s]){const a=et(n,t);return a===0?et(e,s):a}class oL{constructor(e){this.Pr=e,this.buffer=new mn(yb),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lL{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){me(_b,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gl(t)?me(_b,"Ignoring IndexedDB error during garbage collection: ",t):await Hl(t)}await this.Ar(3e5)}))}}class cL{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ne.resolve(Hf.ce);const s=new oL(t);return this.Vr.forEachTarget(e,(a=>s.Ir(a.sequenceNumber))).next((()=>this.Vr.mr(e,(a=>s.Ir(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),ne.resolve(gb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gb):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,a,l,u,f,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,u=Date.now(),this.nthSequenceNumber(e,a)))).next((S=>(s=S,f=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(g=Date.now(),fl()<=$e.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${S} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),ne.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S}))))}}function uL(n,e){return new cL(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.changes=new Eo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ne.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&_u(s.mutation,a,gi.empty(),kt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,tt()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=tt()){const a=Ja();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=cu();return l.forEach(((f,p)=>{u=u.insert(f,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=Ja();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,tt())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,f)=>{t.set(u,f)}))}))}computeViews(e,t,s,a){let l=fr();const u=gu(),f=(function(){return gu()})();return t.forEach(((p,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof ya)?l=l.insert(g.key,g):E!==void 0?(u.set(g.key,E.mutation.getFieldMask()),_u(E.mutation,g,E.mutation.getFieldMask(),kt.now())):u.set(g.key,gi.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,E)=>u.set(g,E))),t.forEach(((g,E)=>f.set(g,new dL(E,u.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=gu();let a=new un(((u,f)=>u-f)),l=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const f of u)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||gi.empty();E=f.applyToLocalView(g,E),s.set(p,E);const S=(a.get(f.batchId)||tt()).add(p);a=a.insert(f.batchId,S)}))})).next((()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,E=p.value,S=zC();E.forEach((w=>{if(!l.has(w)){const L=KC(t.get(w),s.get(w));L!==null&&S.set(w,L),l=l.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,S))}return ne.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return fP(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):PC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ne.resolve(Ja());let f=Iu,p=l;return u.next((g=>ne.forEach(g,((E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(E)?ne.resolve():this.remoteDocumentCache.getEntry(e,E).next((w=>{p=p.insert(E,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,tt()))).next((E=>({batchId:f,changes:jC(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next((s=>{let a=cu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=cu();return this.indexManager.getCollectionParents(e,l).next((f=>ne.forEach(f,(p=>{const g=(function(S,w){return new Kl(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((E=>{E.forEach(((S,w)=>{u=u.insert(S,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((p,g)=>{const E=g.getKey();u.get(E)===null&&(u=u.insert(E,jn.newInvalidDocument(E)))}));let f=cu();return u.forEach(((p,g)=>{const E=l.get(p);E!==void 0&&_u(E.mutation,g,gi.empty(),kt.now()),Qf(t,g)&&(f=f.insert(p,g))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return ne.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Is(a.createTime)}})(t)),ne.resolve()}getNamedQuery(e,t){return ne.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(a){return{name:a.name,query:iL(a.bundledQuery),readTime:Is(a.readTime)}})(t)),ne.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.overlays=new un(we.comparator),this.Lr=new Map}getOverlay(e,t){return ne.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ja();return ne.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ne.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Lr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),ne.resolve()}getOverlaysForCollection(e,t,s){const a=Ja(),l=t.length+1,u=new we(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ne.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new un(((g,E)=>g-E));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=Ja(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const f=Ja(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>f.set(g,E))),!(f.size()>=a)););return ne.resolve(f)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.Lr.get(a.largestBatchId).delete(s.key);this.Lr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new MP(t,s));let l=this.Lr.get(t);l===void 0&&(l=tt(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.sessionToken=Mn.EMPTY_BYTE_STRING}getSessionToken(e){return ne.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ne.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.kr=new mn(Tn.qr),this.Kr=new mn(Tn.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tn(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tn(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new we(new Nt([])),s=new Tn(t,e),a=new Tn(t,e+1),l=[];return this.Kr.forEachInRange([s,a],(u=>{this.Wr(u),l.push(u.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new we(new Nt([])),s=new Tn(t,e),a=new Tn(t,e+1);let l=tt();return this.Kr.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new Tn(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tn{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return we.comparator(e.key,t.key)||et(e.Jr,t.Jr)}static Ur(e,t){return et(e.Jr,t.Jr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new mn(Tn.qr)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new OP(l,t,s,a);this.mutationQueue.push(u);for(const f of a)this.Hr=this.Hr.add(new Tn(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ne.resolve(u)}lookupMutationBatch(e,t){return ne.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return ne.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?cy:this.Yn-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tn(t,0),a=new Tn(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,a],(u=>{const f=this.Zr(u.Jr);l.push(f)})),ne.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mn(et);return t.forEach((a=>{const l=new Tn(a,0),u=new Tn(a,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,u],(f=>{s=s.add(f.Jr)}))})),ne.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;we.isDocumentKey(l)||(l=l.child(""));const u=new Tn(new we(l),0);let f=new mn(et);return this.Hr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Jr)),!0)}),u),ne.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){ft(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return ne.forEach(t.mutations,(a=>{const l=new Tn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Tn(t,0),a=this.Hr.firstAfterOrEqual(s);return ne.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.ti=e,this.docs=(function(){return new un(we.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ne.resolve(s?s.document.mutableCopy():jn.newInvalidDocument(t))}getEntries(e,t){let s=fr();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():jn.newInvalidDocument(a))})),ne.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=fr();const u=t.path,f=new we(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||qk(Bk(E),s)<=0||(a.has(E.key)||Qf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ne.resolve(l)}getAllFromCollectionGroup(e,t,s,a){xe(9500)}ni(e,t){return ne.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new vL(this)}getSize(e){return ne.resolve(this.size)}}class vL extends hL{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Mr.addEntry(e,a)):this.Mr.removeEntry(s)})),ne.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.persistence=e,this.ri=new Eo((t=>dy(t)),fy),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.ii=0,this.si=new vy,this.targetCount=0,this.oi=Ml._r()}forEachTarget(e,t){return this.ri.forEach(((s,a)=>t(a))),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),ne.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ml(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,ne.resolve()}updateTargetData(e,t){return this.lr(t),ne.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ri.forEach(((u,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(u),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),ne.waitFor(l).next((()=>a))}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return ne.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),ne.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),ne.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),ne.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return ne.resolve(s)}containsKey(e,t){return ne.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t){this._i={},this.overlays={},this.ai=new Hf(0),this.ui=!1,this.ui=!0,this.ci=new gL,this.referenceDelegate=e(this),this.li=new EL(this),this.indexManager=new sL,this.remoteDocumentCache=(function(a){return new yL(a)})((s=>this.referenceDelegate.hi(s))),this.serializer=new nL(t),this.Pi=new mL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new _L(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){me("MemoryPersistence","Starting transaction:",e);const a=new TL(this.ai.next());return this.referenceDelegate.Ti(),s(a).next((l=>this.referenceDelegate.Ei(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ii(e,t){return ne.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class TL extends Gk{constructor(e){super(),this.currentSequenceNumber=e}}class Ey{constructor(e){this.persistence=e,this.Ri=new vy,this.Ai=null}static Vi(e){return new Ey(e)}get di(){if(this.Ai)return this.Ai;throw xe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),ne.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),ne.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((a=>this.di.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.di,(s=>{const a=we.fromPath(s);return this.mi(e,a).next((l=>{l||t.removeEntry(a,Pe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return ne.or([()=>ne.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class _f{constructor(e,t){this.persistence=e,this.fi=new Eo((s=>Qk(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=uL(this,t)}static Vi(e,t){return new _f(e,t)}Ti(){}Ei(e){return ne.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return ne.forEach(this.fi,((s,a)=>this.wr(e,s,a).next((l=>l?ne.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ni(e,(u=>this.wr(e,u,t).next((f=>{f||(s++,l.removeEntry(u,Pe.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),ne.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ne.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ne.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),ne.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gd(e.data.value)),t}wr(e,t,s){return ne.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.fi.get(t);return ne.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=a}static Is(e,t){let s=tt(),a=tt();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Ty(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return v2()?8:Kk(zn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.gs(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ps(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new SL;return this.ys(e,t,u).next((f=>{if(l.result=f,this.As)return this.ws(e,t,u,f.size)}))})).next((()=>l.result))}ws(e,t,s,a){return s.documentReadCount<this.Vs?(fl()<=$e.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",ml(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ne.resolve()):(fl()<=$e.DEBUG&&me("QueryEngine","Query:",ml(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ds*a?(fl()<=$e.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",ml(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,As(t))):ne.resolve())}gs(e,t){if(ab(t))return ne.resolve(null);let s=As(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=u_(t,null,"F"),s=As(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=tt(...l);return this.fs.getDocuments(e,u).next((f=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ss(t,f);return this.bs(t,g,u,p.readTime)?this.gs(e,u_(t,null,"F")):this.Ds(e,g,t,p)}))))})))))}ps(e,t,s,a){return ab(t)||a.isEqual(Pe.min())?ne.resolve(null):this.fs.getDocuments(e,s).next((l=>{const u=this.Ss(t,l);return this.bs(t,u,s,a)?ne.resolve(null):(fl()<=$e.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ml(t)),this.Ds(e,u,t,Fk(a,Iu)).next((f=>f)))}))}Ss(e,t){let s=new mn(VC(e));return t.forEach(((a,l)=>{Qf(e,l)&&(s=s.add(l))})),s}bs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ys(e,t,s){return fl()<=$e.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",ml(t)),this.fs.getDocumentsMatchingQuery(e,t,ra.min(),s)}Ds(e,t,s,a){return this.fs.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="LocalStore",wL=3e8;class AL{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.vs=new un(et),this.Fs=new Eo((l=>dy(l)),fy),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fL(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function CL(n,e,t,s){return new AL(n,e,t,s)}async function l1(n,e){const t=Ve(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],f=[];let p=tt();for(const g of a){u.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ns:g,removedBatchIds:u,addedBatchIds:f})))}))}))}function IL(n,e){const t=Ve(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,E){const S=g.batch,w=S.keys();let L=ne.resolve();return w.forEach((q=>{L=L.next((()=>E.getEntry(p,q))).next((J=>{const Z=g.docVersions.get(q);ft(Z!==null,48541),J.version.compareTo(Z)<0&&(S.applyToRemoteDocument(J,g),J.isValidDocument()&&(J.setReadTime(g.commitVersion),E.addEntry(J)))}))})),L.next((()=>f.mutationQueue.removeMutationBatch(p,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let p=tt();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function c1(n){const e=Ve(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function RL(n,e){const t=Ve(n),s=e.snapshotVersion;let a=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});a=t.vs;const f=[];e.targetChanges.forEach(((E,S)=>{const w=a.get(S);if(!w)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,S).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,S))));let L=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?L=L.withResumeToken(Mn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),a=a.insert(S,L),(function(J,Z,ge){return J.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=wL?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(w,L,E)&&f.push(t.li.updateTargetData(l,L))}));let p=fr(),g=tt();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(NL(l,u,e.documentUpdates).next((E=>{p=E.Bs,g=E.Ls}))),!s.isEqual(Pe.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((S=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return ne.waitFor(f).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.vs=a,l)))}function NL(n,e,t){let s=tt(),a=tt();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=fr();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(Pe.min())?(e.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(f,p)):me(Sy,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{Bs:u,Ls:a}}))}function DL(n,e){const t=Ve(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=cy),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function xL(n,e){const t=Ve(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.li.getTargetData(s,e).next((l=>l?(a=l,ne.resolve(a)):t.li.allocateTargetId(s).next((u=>(a=new Jr(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.vs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function p_(n,e,t){const s=Ve(n),a=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Gl(u))throw u;me(Sy,`Failed to update sequence numbers for target ${e}: ${u}`)}s.vs=s.vs.remove(e),s.Fs.delete(a.target)}function vb(n,e,t){const s=Ve(n);let a=Pe.min(),l=tt();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,g,E){const S=Ve(p),w=S.Fs.get(E);return w!==void 0?ne.resolve(S.vs.get(w)):S.li.getTargetData(g,E)})(s,u,As(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(u,f.targetId).next((p=>{l=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(u,e,t?a:Pe.min(),t?l:tt()))).next((f=>(OL(s,gP(e),f),{documents:f,ks:l})))))}function OL(n,e,t){let s=n.Ms.get(e)||Pe.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Ms.set(e,s)}class Eb{constructor(){this.activeTargetIds=SP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ML{constructor(){this.vo=new Eb,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Eb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="ConnectivityMonitor";class Sb{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){me(Tb,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){me(Tb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd=null;function g_(){return kd===null?kd=(function(){return 268435456+Math.round(2147483648*Math.random())})():kd++,"0x"+kd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="RestConnection",PL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LL{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.$o=this.databaseId.database===df?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const u=g_(),f=this.Qo(e,t.toUriEncodedString());me(xg,`Sending RPC '${e}' ${u}:`,f,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,a,l);const{host:g}=new URL(f),E=yo(g);return this.zo(e,f,p,s,E).then((S=>(me(xg,`Received RPC '${e}' ${u}: `,S),S)),(S=>{throw co(xg,`RPC '${e}' ${u} failed with error: `,S,"url: ",f,"request:",s),S}))}jo(e,t,s,a,l,u){return this.Wo(e,t,s,a,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ql})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}Qo(e,t){const s=PL[e];let a=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(a=`${a}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),a}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="WebChannelConnection",Zc=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(a){setTimeout((()=>{throw a}),0)}}))};class Sl extends LL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Sl.c_){const e=fC();Zc(e,dC.STAT_EVENT,(t=>{t.stat===n_.PROXY?me(Vn,"STAT_EVENT: detected buffering proxy"):t.stat===n_.NOPROXY&&me(Vn,"STAT_EVENT: detected no buffering proxy")})),Sl.c_=!0}}zo(e,t,s,a,l){const u=g_();return new Promise(((f,p)=>{const g=new uC;g.setWithCredentials(!0),g.listenOnce(hC.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Hd.NO_ERROR:const S=g.getResponseJson();me(Vn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(S)),f(S);break;case Hd.TIMEOUT:me(Vn,`RPC '${e}' ${u} timed out`),p(new he(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Hd.HTTP_ERROR:const w=g.getStatus();if(me(Vn,`RPC '${e}' ${u} failed with status:`,w,"response text:",g.getResponseText()),w>0){let L=g.getResponseJson();Array.isArray(L)&&(L=L[0]);const q=L==null?void 0:L.error;if(q&&q.status&&q.message){const J=(function(ge){const _e=ge.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(_e)>=0?_e:ee.UNKNOWN})(q.status);p(new he(J,q.message))}else p(new he(ee.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new he(ee.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{l_:e,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{me(Vn,`RPC '${e}' ${u} completed.`)}}));const E=JSON.stringify(a);me(Vn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",E,s,15)}))}T_(e,t,s){const a=g_(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const g=l.join("");me(Vn,`Creating RPC '${e}' stream ${a}: ${g}`,f);const E=u.createWebChannel(g,f);this.E_(E);let S=!1,w=!1;const L=new VL({Jo:q=>{w?me(Vn,`Not sending because RPC '${e}' stream ${a} is closed:`,q):(S||(me(Vn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),S=!0),me(Vn,`RPC '${e}' stream ${a} sending:`,q),E.send(q))},Ho:()=>E.close()});return Zc(E,lu.EventType.OPEN,(()=>{w||(me(Vn,`RPC '${e}' stream ${a} transport opened.`),L.i_())})),Zc(E,lu.EventType.CLOSE,(()=>{w||(w=!0,me(Vn,`RPC '${e}' stream ${a} transport closed`),L.o_(),this.I_(E))})),Zc(E,lu.EventType.ERROR,(q=>{w||(w=!0,co(Vn,`RPC '${e}' stream ${a} transport errored. Name:`,q.name,"Message:",q.message),L.o_(new he(ee.UNAVAILABLE,"The operation could not be completed")))})),Zc(E,lu.EventType.MESSAGE,(q=>{var J;if(!w){const Z=q.data[0];ft(!!Z,16349);const ge=Z,_e=(ge==null?void 0:ge.error)||((J=ge[0])==null?void 0:J.error);if(_e){me(Vn,`RPC '${e}' stream ${a} received error:`,_e);const de=_e.status;let ke=(function(C){const R=an[C];if(R!==void 0)return WC(R)})(de),Ue=_e.message;de==="NOT_FOUND"&&Ue.includes("database")&&Ue.includes("does not exist")&&Ue.includes(this.databaseId.database)&&co(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ke===void 0&&(ke=ee.INTERNAL,Ue="Unknown error status: "+de+" with message "+_e.message),w=!0,L.o_(new he(ke,Ue)),E.close()}else me(Vn,`RPC '${e}' stream ${a} received:`,Z),L.__(Z)}})),Sl.u_(),setTimeout((()=>{L.s_()}),0),L}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return mC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(n){return new Sl(n)}function Og(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){return new BP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sl.c_=!1;class u1{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=a,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&me("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="PersistentStream";class h1{constructor(e,t,s,a,l,u,f,p){this.Ci=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new u1(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(hr(t.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new he(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return me(bb,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(me(bb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jL extends h1{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=GP(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Pe.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Pe.min():u.readTime?Is(u.readTime):Pe.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=m_(this.serializer),t.addTarget=(function(l,u){let f;const p=u.target;if(f=l_(p)?{documents:QP(l,p)}:{query:WP(l,p).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=JC(l,u.resumeToken);const g=h_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(Pe.min())>0){f.readTime=gf(l,u.snapshotVersion.toTimestamp());const g=h_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=XP(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=m_(this.serializer),t.removeTarget=e,this.q_(t)}}class zL extends h1{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ft(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ft(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ft(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=YP(e.writeResults,e.commitTime),s=Is(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=m_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>KP(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{}class BL extends FL{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Wo(e,d_(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(ee.UNKNOWN,l.toString())}))}jo(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.jo(e,d_(t,s),a,u,f,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(ee.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function qL(n,e,t,s){return new BL(n,e,t,s)}class HL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(t),this.aa=!1):me("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="RemoteStore";class GL{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((u=>{s.enqueueAndForget((async()=>{To(this)&&(me(uo,"Restarting streams for network reachability change."),await(async function(p){const g=Ve(p);g.Ia.add(4),await Xu(g),g.Va.set("Unknown"),g.Ia.delete(4),await Zf(g)})(this))}))})),this.Va=new HL(s,a)}}async function Zf(n){if(To(n))for(const e of n.Ra)await e(!0)}async function Xu(n){for(const e of n.Ra)await e(!1)}function d1(n,e){const t=Ve(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Cy(t)?Ay(t):Yl(t).O_()&&wy(t,e))}function by(n,e){const t=Ve(n),s=Yl(t);t.Ea.delete(e),s.O_()&&f1(t,e),t.Ea.size===0&&(s.O_()?s.L_():To(t)&&t.Va.set("Unknown"))}function wy(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yl(n).Z_(e)}function f1(n,e){n.da.$e(e),Yl(n).X_(e)}function Ay(n){n.da=new UP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yl(n).start(),n.Va.ua()}function Cy(n){return To(n)&&!Yl(n).x_()&&n.Ea.size>0}function To(n){return Ve(n).Ia.size===0}function m1(n){n.da=void 0}async function KL(n){n.Va.set("Online")}async function YL(n){n.Ea.forEach(((e,t)=>{wy(n,e)}))}async function QL(n,e){m1(n),Cy(n)?(n.Va.ha(e),Ay(n)):n.Va.set("Unknown")}async function WL(n,e,t){if(n.Va.set("Online"),e instanceof XC&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const f of l.targetIds)a.Ea.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.Ea.delete(f),a.da.removeTarget(f))})(n,e)}catch(s){me(uo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yf(n,s)}else if(e instanceof Qd?n.da.Xe(e):e instanceof $C?n.da.st(e):n.da.tt(e),!t.isEqual(Pe.min()))try{const s=await c1(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const f=l.da.Tt(u);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ea.get(g);E&&l.Ea.set(g,E.withResumeToken(p.resumeToken,u))}})),f.targetMismatches.forEach(((p,g)=>{const E=l.Ea.get(p);if(!E)return;l.Ea.set(p,E.withResumeToken(Mn.EMPTY_BYTE_STRING,E.snapshotVersion)),f1(l,p);const S=new Jr(E.target,p,g,E.sequenceNumber);wy(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){me(uo,"Failed to raise snapshot:",s),await yf(n,s)}}async function yf(n,e,t){if(!Gl(e))throw e;n.Ia.add(1),await Xu(n),n.Va.set("Offline"),t||(t=()=>c1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{me(uo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Zf(n)}))}function p1(n,e){return e().catch((t=>yf(n,t,e)))}async function em(n){const e=Ve(n),t=ca(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cy;for(;$L(e);)try{const a=await DL(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,XL(e,a)}catch(a){await yf(e,a)}g1(e)&&_1(e)}function $L(n){return To(n)&&n.Ta.length<10}function XL(n,e){n.Ta.push(e);const t=ca(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function g1(n){return To(n)&&!ca(n).x_()&&n.Ta.length>0}function _1(n){ca(n).start()}async function JL(n){ca(n).ra()}async function ZL(n){const e=ca(n);for(const t of n.Ta)e.ea(t.mutations)}async function eV(n,e,t){const s=n.Ta.shift(),a=gy.from(s,e,t);await p1(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await em(n)}async function tV(n,e){e&&ca(n).Y_&&await(async function(s,a){if((function(u){return PP(u)&&u!==ee.ABORTED})(a.code)){const l=s.Ta.shift();ca(s).B_(),await p1(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await em(s)}})(n,e),g1(n)&&_1(n)}async function wb(n,e){const t=Ve(n);t.asyncQueue.verifyOperationInProgress(),me(uo,"RemoteStore received new credentials");const s=To(t);t.Ia.add(3),await Xu(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Zf(t)}async function nV(n,e){const t=Ve(n);e?(t.Ia.delete(2),await Zf(t)):e||(t.Ia.add(2),await Xu(t),t.Va.set("Unknown"))}function Yl(n){return n.ma||(n.ma=(function(t,s,a){const l=Ve(t);return l.sa(),new jL(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:KL.bind(null,n),Yo:YL.bind(null,n),t_:QL.bind(null,n),H_:WL.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Cy(n)?Ay(n):n.Va.set("Unknown")):(await n.ma.stop(),m1(n))}))),n.ma}function ca(n){return n.fa||(n.fa=(function(t,s,a){const l=Ve(t);return l.sa(),new zL(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:JL.bind(null,n),t_:tV.bind(null,n),ta:ZL.bind(null,n),na:eV.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await em(n)):(await n.fa.stop(),n.Ta.length>0&&(me(uo,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,f=new Iy(e,t,u,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ry(n,e){if(hr("AsyncQueue",`${e}: ${n}`),Gl(n))return new he(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static emptySet(e){return new bl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||we.comparator(t.key,s.key):(t,s)=>we.comparator(t.key,s.key),this.keyedMap=cu(),this.sortedSet=new un(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new bl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.ga=new un(we.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):xe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class kl{constructor(e,t,s,a,l,u,f,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((f=>{u.push({type:0,doc:f})})),new kl(e,t,bl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class sV{constructor(){this.queries=Cb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ve(t),l=a.queries;a.queries=Cb(),l.forEach(((u,f)=>{for(const p of f.Sa)p.onError(s)}))})(this,new he(ee.ABORTED,"Firestore shutting down"))}}function Cb(){return new Eo((n=>LC(n)),Yf)}async function y1(n,e){const t=Ve(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new iV,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=Ry(u,`Initialization of query '${ml(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Ny(t)}async function v1(n,e){const t=Ve(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rV(n,e){const t=Ve(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const f of u.Sa)f.Fa(a)&&(s=!0);u.wa=a}}s&&Ny(t)}function aV(n,e,t){const s=Ve(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function Ny(n){n.Ca.forEach((e=>{e.next()}))}var __,Ib;(Ib=__||(__={})).Ma="default",Ib.Cache="cache";class E1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new kl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==__.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.key=e}}class S1{constructor(e){this.key=e}}class oV{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=tt(),this.mutatedKeys=tt(),this.eu=VC(e),this.tu=new bl(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Ab,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,S)=>{const w=a.get(E),L=Qf(this.query,S)?S:null,q=!!w&&this.mutatedKeys.has(w.key),J=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let Z=!1;w&&L?w.data.isEqual(L.data)?q!==J&&(s.track({type:3,doc:L}),Z=!0):this.su(w,L)||(s.track({type:2,doc:L}),Z=!0,(p&&this.eu(L,p)>0||g&&this.eu(L,g)<0)&&(f=!0)):!w&&L?(s.track({type:0,doc:L}),Z=!0):w&&!L&&(s.track({type:1,doc:w}),Z=!0,(p||g)&&(f=!0)),Z&&(L?(u=u.add(L),l=J?l.add(E):l.delete(E)):(u=u.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:u,iu:s,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((E,S)=>(function(L,q){const J=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{Vt:Z})}};return J(L)-J(q)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),a=a??!1;const f=t&&!a?this._u():[],p=this.Ya.size===0&&this.current&&!a?1:0,g=p!==this.Xa;return this.Xa=p,u.length!==0||g?{snapshot:new kl(this.query,e.tu,l,u,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ab,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=tt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new S1(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new T1(s))})),t}cu(e){this.Za=e.ks,this.Ya=tt();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return kl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Dy="SyncEngine";class lV{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cV{constructor(e){this.key=e,this.hu=!1}}class uV{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Eo((f=>LC(f)),Yf),this.Eu=new Map,this.Iu=new Set,this.Ru=new un(we.comparator),this.Au=new Map,this.Vu=new vy,this.du={},this.mu=new Map,this.fu=Ml.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hV(n,e,t=!0){const s=R1(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await b1(s,e,t,!0),a}async function dV(n,e){const t=R1(n);await b1(t,e,!0,!1)}async function b1(n,e,t,s){const a=await xL(n.localStore,As(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await fV(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&d1(n.remoteStore,a),f}async function fV(n,e,t,s,a){n.pu=(S,w,L)=>(async function(J,Z,ge,_e){let de=Z.view.ru(ge);de.bs&&(de=await vb(J.localStore,Z.query,!1).then((({documents:C})=>Z.view.ru(C,de))));const ke=_e&&_e.targetChanges.get(Z.targetId),Ue=_e&&_e.targetMismatches.get(Z.targetId)!=null,Ee=Z.view.applyChanges(de,J.isPrimaryClient,ke,Ue);return Nb(J,Z.targetId,Ee.au),Ee.snapshot})(n,S,w,L);const l=await vb(n.localStore,e,!0),u=new oV(e,l.ks),f=u.ru(l.documents),p=$u.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=u.applyChanges(f,n.isPrimaryClient,p);Nb(n,t,g.au);const E=new lV(e,t,u);return n.Tu.set(e,E),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),g.snapshot}async function mV(n,e,t){const s=Ve(n),a=s.Tu.get(e),l=s.Eu.get(a.targetId);if(l.length>1)return s.Eu.set(a.targetId,l.filter((u=>!Yf(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await p_(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&by(s.remoteStore,a.targetId),y_(s,a.targetId)})).catch(Hl)):(y_(s,a.targetId),await p_(s.localStore,a.targetId,!0))}async function pV(n,e){const t=Ve(n),s=t.Tu.get(e),a=t.Eu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),by(t.remoteStore,s.targetId))}async function gV(n,e,t){const s=bV(n);try{const a=await(function(u,f){const p=Ve(u),g=kt.now(),E=f.reduce(((L,q)=>L.add(q.key)),tt());let S,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let q=fr(),J=tt();return p.xs.getEntries(L,E).next((Z=>{q=Z,q.forEach(((ge,_e)=>{_e.isValidDocument()||(J=J.add(ge))}))})).next((()=>p.localDocuments.getOverlayedDocuments(L,q))).next((Z=>{S=Z;const ge=[];for(const _e of f){const de=DP(_e,S.get(_e.key).overlayedDocument);de!=null&&ge.push(new ya(_e.key,de,RC(de.value.mapValue),Cs.exists(!0)))}return p.mutationQueue.addMutationBatch(L,g,ge,f)})).next((Z=>{w=Z;const ge=Z.applyToLocalDocumentSet(S,J);return p.documentOverlayCache.saveOverlays(L,Z.batchId,ge)}))})).then((()=>({batchId:w.batchId,changes:jC(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,f,p){let g=u.du[u.currentUser.toKey()];g||(g=new un(et)),g=g.insert(f,p),u.du[u.currentUser.toKey()]=g})(s,a.batchId,t),await Ju(s,a.changes),await em(s.remoteStore)}catch(a){const l=Ry(a,"Failed to persist write");t.reject(l)}}async function w1(n,e){const t=Ve(n);try{const s=await RL(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(ft(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?ft(u.hu,14607):a.removedDocuments.size>0&&(ft(u.hu,42227),u.hu=!1))})),await Ju(t,s,e)}catch(s){await Hl(s)}}function Rb(n,e,t){const s=Ve(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const f=u.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(u,f){const p=Ve(u);p.onlineState=f;let g=!1;p.queries.forEach(((E,S)=>{for(const w of S.Sa)w.va(f)&&(g=!0)})),g&&Ny(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _V(n,e,t){const s=Ve(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new un(we.comparator);u=u.insert(l,jn.newNoDocument(l,Pe.min()));const f=tt().add(l),p=new Xf(Pe.min(),new Map,new un(et),u,f);await w1(s,p),s.Ru=s.Ru.remove(l),s.Au.delete(e),xy(s)}else await p_(s.localStore,e,!1).then((()=>y_(s,e,t))).catch(Hl)}async function yV(n,e){const t=Ve(n),s=e.batch.batchId;try{const a=await IL(t.localStore,e);C1(t,s,null),A1(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ju(t,a)}catch(a){await Hl(a)}}async function vV(n,e,t){const s=Ve(n);try{const a=await(function(u,f){const p=Ve(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,f).next((S=>(ft(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(g,S)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);C1(s,e,t),A1(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ju(s,a)}catch(a){await Hl(a)}}function A1(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function C1(n,e,t){const s=Ve(n);let a=s.du[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.du[s.currentUser.toKey()]=a}}function y_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||I1(n,s)}))}function I1(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(by(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),xy(n))}function Nb(n,e,t){for(const s of t)s instanceof T1?(n.Vu.addReference(s.key,e),EV(n,s)):s instanceof S1?(me(Dy,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||I1(n,s.key)):xe(19791,{wu:s})}function EV(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(me(Dy,"New document in limbo: "+t),n.Iu.add(s),xy(n))}function xy(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(Nt.fromString(e)),s=n.fu.next();n.Au.set(s,new cV(t)),n.Ru=n.Ru.insert(t,s),d1(n.remoteStore,new Jr(As(my(t.path)),s,"TargetPurposeLimboResolution",Hf.ce))}}async function Ju(n,e,t){const s=Ve(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,p)=>{u.push(s.pu(p,e,t).then((g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(g){a.push(g);const S=Ty.Is(p.targetId,g);l.push(S)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(p,g){const E=Ve(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>ne.forEach(g,(w=>ne.forEach(w.Ts,(L=>E.persistence.referenceDelegate.addReference(S,w.targetId,L))).next((()=>ne.forEach(w.Es,(L=>E.persistence.referenceDelegate.removeReference(S,w.targetId,L)))))))))}catch(S){if(!Gl(S))throw S;me(Sy,"Failed to update sequence numbers: "+S)}for(const S of g){const w=S.targetId;if(!S.fromCache){const L=E.vs.get(w),q=L.snapshotVersion,J=L.withLastLimboFreeSnapshotVersion(q);E.vs=E.vs.insert(w,J)}}})(s.localStore,l))}async function TV(n,e){const t=Ve(n);if(!t.currentUser.isEqual(e)){me(Dy,"User change. New user:",e.toKey());const s=await l1(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new he(ee.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ju(t,s.Ns)}}function SV(n,e){const t=Ve(n),s=t.Au.get(e);if(s&&s.hu)return tt().add(s.key);{let a=tt();const l=t.Eu.get(e);if(!l)return a;for(const u of l){const f=t.Tu.get(u);a=a.unionWith(f.view.nu)}return a}}function R1(n){const e=Ve(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=w1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_V.bind(null,e),e.Pu.H_=rV.bind(null,e.eventManager),e.Pu.yu=aV.bind(null,e.eventManager),e}function bV(n){const e=Ve(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vV.bind(null,e),e}class vf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return CL(this.persistence,new bL,e.initialUser,this.serializer)}Cu(e){return new o1(Ey.Vi,this.serializer)}Du(e){return new ML}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vf.provider={build:()=>new vf};class wV extends vf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ft(this.persistence.referenceDelegate instanceof _f,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new lL(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ei.withCacheSize(this.cacheSizeBytes):ei.DEFAULT;return new o1((s=>_f.Vi(s,t)),this.serializer)}}class v_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TV.bind(null,this.syncEngine),await nV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sV})()}createDatastore(e){const t=Jf(e.databaseInfo.databaseId),s=UL(e.databaseInfo);return qL(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,f){return new GL(s,a,l,u,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Rb(this.syncEngine,t,0)),(function(){return Sb.v()?new Sb:new kL})())}createSyncEngine(e,t){return(function(a,l,u,f,p,g,E){const S=new uV(a,l,u,f,p,g);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Ve(a);me(uo,"RemoteStore shutting down."),l.Ia.add(5),await Xu(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}v_.provider={build:()=>new v_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="FirestoreClient";class AV{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=a,this.user=Un.UNAUTHENTICATED,this.clientId=ly.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{me(ua,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(me(ua,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ry(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Mg(n,e){n.asyncQueue.verifyOperationInProgress(),me(ua,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await l1(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Db(n,e){n.asyncQueue.verifyOperationInProgress();const t=await CV(n);me(ua,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>wb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>wb(e.remoteStore,a))),n._onlineComponents=e}async function CV(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){me(ua,"Using user provided OfflineComponentProvider");try{await Mg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===ee.FAILED_PRECONDITION||a.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;co("Error using user provided cache. Falling back to memory cache: "+t),await Mg(n,new vf)}}else me(ua,"Using default OfflineComponentProvider"),await Mg(n,new wV(void 0));return n._offlineComponents}async function D1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(me(ua,"Using user provided OnlineComponentProvider"),await Db(n,n._uninitializedComponentsProvider._online)):(me(ua,"Using default OnlineComponentProvider"),await Db(n,new v_))),n._onlineComponents}function IV(n){return D1(n).then((e=>e.syncEngine))}async function x1(n){const e=await D1(n),t=e.eventManager;return t.onListen=hV.bind(null,e.syncEngine),t.onUnlisten=mV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pV.bind(null,e.syncEngine),t}function RV(n,e,t={}){const s=new ar;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new N1({next:w=>{E.Nu(),u.enqueueAndForget((()=>v1(l,S)));const L=w.docs.has(f);!L&&w.fromCache?g.reject(new he(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&w.fromCache&&p&&p.source==="server"?g.reject(new he(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new E1(my(f.path),E,{includeMetadataChanges:!0,qa:!0});return y1(l,S)})(await x1(n),n.asyncQueue,e,t,s))),s.promise}function NV(n,e,t={}){const s=new ar;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new N1({next:w=>{E.Nu(),u.enqueueAndForget((()=>v1(l,S))),w.fromCache&&p.source==="server"?g.reject(new he(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new E1(f,E,{includeMetadataChanges:!0,qa:!0});return y1(l,S)})(await x1(n),n.asyncQueue,e,t,s))),s.promise}function DV(n,e){const t=new ar;return n.asyncQueue.enqueueAndForget((async()=>gV(await IV(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="ComponentProvider",xb=new Map;function OV(n,e,t,s,a){return new Xk(n,e,t,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,O1(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="firestore.googleapis.com",Ob=!0;class Mb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M1,this.ssl=Ob}else this.host=e.host,this.ssl=e.ssl??Ob;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aL)throw new he(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O1(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tm{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Dk;switch(s.type){case"firstParty":return new kk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=xb.get(t);s&&(me(xV,"Removing Datastore"),xb.delete(t),s.terminate())})(this),Promise.resolve()}}function MV(n,e,t,s={}){var g;n=dr(n,tm);const a=yo(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;a&&q_(`https://${f}`),l.host!==M1&&l.host!==f&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:s};if(!lr(p,u)&&(n._setSettings(p),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Un.MOCK_USER;else{E=Xw(s.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new he(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Un(w)}n._authCredentials=new xk(new gC(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new So(this.firestore,e,this._query)}}class Wt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}toJSON(){return{type:Wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qu(t,Wt._jsonSchema))return new Wt(e,s||null,new we(Nt.fromString(t.referencePath)))}}Wt._jsonSchemaVersion="firestore/documentReference/1.0",Wt._jsonSchema={type:cn("string",Wt._jsonSchemaVersion),referencePath:cn("string")};class ia extends So{constructor(e,t,s){super(e,t,my(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new we(e))}withConverter(e){return new ia(this.firestore,e,this._path)}}function k1(n,e,...t){if(n=mt(n),_C("collection","path",e),n instanceof tm){const s=Nt.fromString(e,...t);return KS(s),new ia(n,null,s)}{if(!(n instanceof Wt||n instanceof ia))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(e,...t));return KS(s),new ia(n.firestore,null,s)}}function Ql(n,e,...t){if(n=mt(n),arguments.length===1&&(e=ly.newId()),_C("doc","path",e),n instanceof tm){const s=Nt.fromString(e,...t);return GS(s),new Wt(n,null,new we(s))}{if(!(n instanceof Wt||n instanceof ia))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(e,...t));return GS(s),new Wt(n.firestore,n instanceof ia?n.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="AsyncQueue";class Pb{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new u1(this,"async_queue_retry"),this._c=()=>{const s=Og();s&&me(kb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Og();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Og();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ar;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gl(e))throw e;me(kb,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",Lb(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Iy.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&xe(47125,{Pc:Lb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Lb(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Zu extends tm{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Pb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pb(e),this._firestoreClient=void 0,await e}}}function kV(n,e){const t=typeof n=="object"?n:qu(),s=typeof n=="string"?n:df,a=ma(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Qw("firestore");l&&MV(a,...l)}return a}function Oy(n){if(n._terminated)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PV(n),n._firestoreClient}function PV(n){var s,a,l,u;const e=n._freezeSettings(),t=OV(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(a=n._app)==null?void 0:a.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new AV(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(Mn.fromBase64String(e))}catch(t){throw new he(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oi(Mn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Oi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qu(e,Oi._jsonSchema))return Oi.fromBase64String(e.bytes)}}Oi._jsonSchemaVersion="firestore/bytes/1.0",Oi._jsonSchema={type:cn("string",Oi._jsonSchemaVersion),bytes:cn("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new On(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rs._jsonSchemaVersion}}static fromJSON(e){if(Qu(e,Rs._jsonSchema))return new Rs(e.latitude,e.longitude)}}Rs._jsonSchemaVersion="firestore/geoPoint/1.0",Rs._jsonSchema={type:cn("string",Rs._jsonSchemaVersion),latitude:cn("number"),longitude:cn("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qu(e,Xi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xi(e.vectorValues);throw new he(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xi._jsonSchemaVersion="firestore/vectorValue/1.0",Xi._jsonSchema={type:cn("string",Xi._jsonSchemaVersion),vectorValues:cn("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=/^__.*__$/;class VV{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ya(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wu(e,this.data,t,this.fieldTransforms)}}class P1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ya(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function L1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe(40011,{dataSource:n})}}class ky{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ky({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ef(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(L1(this.dataSource)&&LV.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class UV{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Jf(e)}A(e,t,s,a=!1){return new ky({dataSource:e,methodName:t,targetDoc:s,path:On.emptyPath(),arrayElement:!1,hasConverter:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Py(n){const e=n._freezeSettings(),t=Jf(n._databaseId);return new UV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jV(n,e,t,s,a,l={}){const u=n.A(l.merge||l.mergeFields?2:0,e,t,a);Vy("Data must be an object, but it was:",u,s);const f=V1(s,u);let p,g;if(l.merge)p=new gi(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const w=Pl(e,S,t);if(!u.contains(w))throw new he(ee.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);z1(E,w)||E.push(w)}p=new gi(E),g=u.fieldTransforms.filter((S=>p.covers(S.field)))}else p=null,g=u.fieldTransforms;return new VV(new ni(f),p,g)}class im extends nm{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof im}}class Ly extends nm{_toFieldTransform(e){return new CP(e.path,new Ou)}isEqual(e){return e instanceof Ly}}function zV(n,e,t,s){const a=n.A(1,e,t);Vy("Data must be an object, but it was:",a,s);const l=[],u=ni.empty();_a(s,((p,g)=>{const E=j1(e,p,t);g=mt(g);const S=a.fc(E);if(g instanceof im)l.push(E);else{const w=eh(g,S);w!=null&&(l.push(E),u.set(E,w))}}));const f=new gi(l);return new P1(u,f,a.fieldTransforms)}function FV(n,e,t,s,a,l){const u=n.A(1,e,t),f=[Pl(e,s,t)],p=[a];if(l.length%2!=0)throw new he(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)f.push(Pl(e,l[w])),p.push(l[w+1]);const g=[],E=ni.empty();for(let w=f.length-1;w>=0;--w)if(!z1(g,f[w])){const L=f[w];let q=p[w];q=mt(q);const J=u.fc(L);if(q instanceof im)g.push(L);else{const Z=eh(q,J);Z!=null&&(g.push(L),E.set(L,Z))}}const S=new gi(g);return new P1(E,S,u.fieldTransforms)}function BV(n,e,t,s=!1){return eh(t,n.A(s?4:3,e))}function eh(n,e){if(U1(n=mt(n)))return Vy("Unsupported field value:",e,n),V1(n,e);if(n instanceof nm)return(function(s,a){if(!L1(a.dataSource))throw a.yc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const f of s){let p=eh(f,a.gc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bP(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=kt.fromDate(s);return{timestampValue:gf(a.serializer,l)}}if(s instanceof kt){const l=new kt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gf(a.serializer,l)}}if(s instanceof Rs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Oi)return{bytesValue:JC(a.serializer,s._byteString)};if(s instanceof Wt){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.yc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:yy(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Xi)return(function(u,f){const p=u instanceof Xi?u.toArray():u;return{mapValue:{fields:{[CC]:{stringValue:IC},[ff]:{arrayValue:{values:p.map((E=>{if(typeof E!="number")throw f.yc("VectorValues must only contain numeric values.");return py(f.serializer,E)}))}}}}}})(s,a);if(r1(s))return s._toProto(a.serializer);throw a.yc(`Unsupported field value: ${qf(s)}`)})(n,e)}function V1(n,e){const t={};return EC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_a(n,((s,a)=>{const l=eh(a,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function U1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof Rs||n instanceof Oi||n instanceof Wt||n instanceof nm||n instanceof Xi||r1(n))}function Vy(n,e,t){if(!U1(t)||!yC(t)){const s=qf(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function Pl(n,e,t){if((e=mt(e))instanceof My)return e._internalPath;if(typeof e=="string")return j1(n,e);throw Ef("Field path arguments must be of type string or ",n,!1,void 0,t)}const qV=new RegExp("[~\\*/\\[\\]]");function j1(n,e,t){if(e.search(qV)>=0)throw Ef(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new My(...e.split("."))._internalPath}catch{throw Ef(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ef(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${s}`),u&&(p+=` in document ${a}`),p+=")"),new he(ee.INVALID_ARGUMENT,f+n+p)}function z1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{convertValue(e,t="none"){switch(la(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(oa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _a(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,a,l;const t=(l=(a=(s=e.fields)==null?void 0:s[ff].arrayValue)==null?void 0:a.values)==null?void 0:l.map((u=>Yt(u.doubleValue)));return new Xi(t)}convertGeoPoint(e){return new Rs(Yt(e.latitude),Yt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Kf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ru(e));default:return null}}convertTimestamp(e){const t=aa(e);return new kt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Nt.fromString(e);ft(s1(s),9688,{name:e});const a=new Nu(s.get(1),s.get(3)),l=new we(s.popFirst(5));return a.isEqual(t)||hr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1 extends HV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function ho(){return new Ly("serverTimestamp")}const Vb="@firebase/firestore",Ub="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Pl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GV extends B1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uy{}class q1 extends Uy{}function H1(n,e,...t){let s=[];e instanceof Uy&&s.push(e),s=s.concat(t),(function(l){const u=l.filter((p=>p instanceof zy)).length,f=l.filter((p=>p instanceof jy)).length;if(u>1||u>0&&f>0)throw new he(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class jy extends q1{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new jy(e,t,s)}_apply(e){const t=this._parse(e);return K1(e._query,t),new So(e.firestore,e.converter,c_(e._query,t))}_parse(e){const t=Py(e.firestore);return(function(l,u,f,p,g,E,S){let w;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new he(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){zb(S,E);const q=[];for(const J of S)q.push(jb(p,l,J));w={arrayValue:{values:q}}}else w=jb(p,l,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||zb(S,E),w=BV(f,u,S,E==="in"||E==="not-in");return ln.create(g,E,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class zy extends Uy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:es.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let u=a;const f=l.getFlattenedFilters();for(const p of f)K1(u,p),u=c_(u,p)})(e._query,t),new So(e.firestore,e.converter,c_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fy extends q1{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fy(e,t)}_apply(e){const t=(function(a,l,u){if(a.startAt!==null)throw new he(ee.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new he(ee.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xu(l,u)})(e._query,this._field,this._direction);return new So(e.firestore,e.converter,pP(e._query,t))}}function G1(n,e="asc"){const t=e,s=Pl("orderBy",n);return Fy._create(s,t)}function jb(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new he(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PC(e)&&t.indexOf("/")!==-1)throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Nt.fromString(t));if(!we.isDocumentKey(s))throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return eb(n,new we(s))}if(t instanceof Wt)return eb(n,t._key);throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qf(t)}.`)}function zb(n,e){if(!Array.isArray(n)||n.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function K1(n,e){const t=(function(a,l){for(const u of a)for(const f of u.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function YV(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class hu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class no extends B1{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Pl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=no._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}no._jsonSchemaVersion="firestore/documentSnapshot/1.0",no._jsonSchema={type:cn("string",no._jsonSchemaVersion),bundleSource:cn("string","DocumentSnapshot"),bundleName:cn("string"),bundle:cn("string")};class Wd extends no{data(e={}){return super.data(e)}}class wl{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new hu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Wd(this._firestore,this._userDataWriter,s.key,s,new hu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((f=>{const p=new Wd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new hu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Wd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new hu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),E=u.indexOf(f.doc.key)),{type:QV(f.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ly.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wl._jsonSchemaVersion="firestore/querySnapshot/1.0",wl._jsonSchema={type:cn("string",wl._jsonSchemaVersion),bundleSource:cn("string","QuerySnapshot"),bundleName:cn("string"),bundle:cn("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){n=dr(n,Wt);const e=dr(n.firestore,Zu),t=Oy(e);return RV(t,n._key).then((s=>WV(e,n,s)))}function Y1(n){n=dr(n,So);const e=dr(n.firestore,Zu),t=Oy(e),s=new F1(e);return KV(n._query),NV(t,n._query).then((a=>new wl(e,s,n,a)))}function By(n,e,t){n=dr(n,Wt);const s=dr(n.firestore,Zu),a=YV(n.converter,e,t),l=Py(s);return W1(s,[jV(l,"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Cs.none())])}function Q1(n,e,t,...s){n=dr(n,Wt);const a=dr(n.firestore,Zu),l=Py(a);let u;return u=typeof(e=mt(e))=="string"||e instanceof My?FV(l,"updateDoc",n._key,e,t,s):zV(l,"updateDoc",n._key,e),W1(a,[u.toMutation(n._key,Cs.exists(!0))])}function W1(n,e){const t=Oy(n);return DV(t,e)}function WV(n,e,t){const s=t.docs.get(e._key),a=new F1(n);return new no(n,a,e._key,s,new hu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Nk(vo),Zi(new ki("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),f=new Zu(new Ok(s.getProvider("auth-internal")),new Pk(u,s.getProvider("app-check-internal")),Jk(u,a),u);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ri(Vb,Ub,e),ri(Vb,Ub,"esm2020")})();var Fb={};const Bb="@firebase/database",qb="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $1="";function $V(n){$1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),bn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ds(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XV(e)}}catch{}return new JV},Za=X1("localStorage"),ZV=X1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Bu("@firebase/database"),e4=(function(){let n=1;return function(){return n++}})(),J1=function(n){const e=N2(n),t=new A2;t.update(e);const s=t.digest();return U_.encodeByteArray(s)},nh=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=nh.apply(null,s):typeof s=="object"?e+=bn(s):e+=s,e+=" "}return e};let yu=null,Hb=!0;const t4=function(n,e){ae(!0,"Can't turn on custom loggers persistently."),Al.logLevel=$e.VERBOSE,yu=Al.log.bind(Al)},xn=function(...n){if(Hb===!0&&(Hb=!1,yu===null&&ZV.get("logging_enabled")===!0&&t4()),yu){const e=nh.apply(null,n);yu(e)}},ih=function(n){return function(...e){xn(n,...e)}},E_=function(...n){const e="FIREBASE INTERNAL ERROR: "+nh(...n);Al.error(e)},mr=function(...n){const e=`FIREBASE FATAL ERROR: ${nh(...n)}`;throw Al.error(e),new Error(e)},ai=function(...n){const e="FIREBASE WARNING: "+nh(...n);Al.warn(e)},n4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ai("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sm=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},i4=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ll="[MIN_NAME]",fo="[MAX_NAME]",bo=function(n,e){if(n===e)return 0;if(n===Ll||e===fo)return-1;if(e===Ll||n===fo)return 1;{const t=Gb(n),s=Gb(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},s4=function(n,e){return n===e?0:n<e?-1:1},eu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+bn(e))},qy=function(n){if(typeof n!="object"||n===null)return bn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=bn(e[s]),t+=":",t+=qy(n[e[s]]);return t+="}",t},Z1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Fn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const eI=function(n){ae(!sm(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,f,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let S="";for(p=0;p<64;p+=8){let w=parseInt(E.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),S=S+w}return S.toLowerCase()},r4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},a4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o4(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const l4=new RegExp("^-?(0*)\\d{1,10}$"),c4=-2147483648,u4=2147483647,Gb=function(n){if(l4.test(n)){const e=Number(n);if(e>=c4&&e<=u4)return e}return null},Wl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ai("Exception was thrown by user callback.",t),e},Math.floor(0))}},h4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ti(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ai(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ai(e)}}class $d{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$d.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="5",tI="v",nI="s",iI="r",sI="f",rI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aI="ls",oI="p",T_="ac",lI="websocket",cI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,s,a,l=!1,u="",f=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Za.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Za.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function m4(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function hI(n,e,t){ae(typeof e=="string","typeof type must == string"),ae(typeof t=="object","typeof params must == object");let s;if(e===lI)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cI)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);m4(n)&&(t.ns=n.namespace);const a=[];return Fn(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.counters_={}}incrementCounter(e,t=1){Ds(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return c2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={},Pg={};function Gy(n){const e=n.toString();return kg[e]||(kg[e]=new p4),kg[e]}function g4(n,e){const t=n.toString();return Pg[t]||(Pg[t]=e()),Pg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Wl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="start",y4="close",v4="pLPCommand",E4="pRTLPCB",dI="id",fI="pw",mI="ser",T4="cb",S4="seg",b4="ts",w4="d",A4="dframe",pI=1870,gI=30,C4=pI-gI,I4=25e3,R4=3e4;class _l{constructor(e,t,s,a,l,u,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ih(e),this.stats_=Gy(t),this.urlFn=p=>(this.appCheckToken&&(p[T_]=this.appCheckToken),hI(t,cI,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R4)),i4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ky((...l)=>{const[u,f,p,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Kb)this.id=f,this.password=p;else if(u===y4)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Kb]="t",s[mI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[T4]=this.scriptTagHolder.uniqueCallbackIdentifier),s[tI]=Hy,this.transportSessionId&&(s[nI]=this.transportSessionId),this.lastSessionId&&(s[aI]=this.lastSessionId),this.applicationId&&(s[oI]=this.applicationId),this.appCheckToken&&(s[T_]=this.appCheckToken),typeof location<"u"&&location.hostname&&rI.test(location.hostname)&&(s[iI]=sI);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_l.forceAllow_=!0}static forceDisallow(){_l.forceDisallow_=!0}static isAvailable(){return _l.forceAllow_?!0:!_l.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!r4()&&!a4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=bn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Gw(t),a=Z1(s,C4);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[A4]="t",s[dI]=e,s[fI]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=bn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ky{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=e4(),window[v4+this.uniqueCallbackIdentifier]=e,window[E4+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ky.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){xn("frame writing exception"),f.stack&&xn(f.stack),xn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dI]=this.myID,e[fI]=this.myPW,e[mI]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gI+s.length<=pI;){const u=this.pendingSegs.shift();s=s+"&"+S4+a+"="+u.seg+"&"+b4+a+"="+u.ts+"&"+w4+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(I4)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{xn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=16384,D4=45e3;let Tf=null;typeof MozWebSocket<"u"?Tf=MozWebSocket:typeof WebSocket<"u"&&(Tf=WebSocket);class Yi{constructor(e,t,s,a,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ih(this.connId),this.stats_=Gy(t),this.connURL=Yi.connectionURL_(t,u,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[tI]=Hy,typeof location<"u"&&location.hostname&&rI.test(location.hostname)&&(u[iI]=sI),t&&(u[nI]=t),s&&(u[aI]=s),a&&(u[T_]=a),l&&(u[oI]=l),hI(e,lI,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Za.set("previous_websocket_failure",!0);try{let s;y2(),this.mySock=new Tf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Yi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tf!==null&&!Yi.forceDisallow_}static previouslyFailed(){return Za.isInMemoryStorage||Za.get("previous_websocket_failure")===!0}markConnectionHealthy(){Za.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=bu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=bn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Z1(t,N4);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(D4))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yi.responsesRequiredToBeHealthy=2;Yi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static get ALL_TRANSPORTS(){return[_l,Yi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Yi&&Yi.isAvailable();let s=t&&!Yi.previouslyFailed();if(e.webSocketOnly&&(t||ai("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Yi];else{const a=this.transports_=[];for(const l of Pu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Pu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=6e4,O4=5e3,M4=10*1024,k4=100*1024,Lg="t",Yb="d",P4="s",Qb="r",L4="e",Wb="o",$b="a",Xb="n",Jb="p",V4="h";class U4{constructor(e,t,s,a,l,u,f,p,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ih("c:"+this.id+":"),this.transportManager_=new Pu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>M4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lg in e){const t=e[Lg];t===$b?this.upgradeIfSecondaryHealthy_():t===Qb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Wb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=eu("t",e),s=eu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$b,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=eu("t",e),s=eu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=eu(Lg,e);if(Yb in e){const s=e[Yb];if(t===V4){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Xb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===P4?this.onConnectionShutdown_(s):t===Qb?this.onReset_(s):t===L4?E_("Server Error: "+s):t===Wb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hy!==s&&ai("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(x4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Za.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends yI{static getInstance(){return new Sf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!j_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=32,ew=768;class yt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new yt("")}function Ge(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ha(n){return n.pieces_.length-n.pieceNum_}function It(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new yt(n.pieces_,e)}function Yy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function j4(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Lu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function vI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new yt(e,0)}function Qt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof yt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new yt(t,0)}function Ke(n){return n.pieceNum_>=n.pieces_.length}function ii(n,e){const t=Ge(n),s=Ge(e);if(t===null)return e;if(t===s)return ii(It(n),It(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function z4(n,e){const t=Lu(n,0),s=Lu(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=bo(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Qy(n,e){if(ha(n)!==ha(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Mi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ha(n)>ha(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class F4{constructor(e,t){this.errorPrefix_=t,this.parts_=Lu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vf(this.parts_[s]);EI(this)}}function B4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vf(e),EI(n)}function q4(n){const e=n.parts_.pop();n.byteLength_-=Vf(e),n.parts_.length>0&&(n.byteLength_-=1)}function EI(n){if(n.byteLength_>ew)throw new Error(n.errorPrefix_+"has a key path longer than "+ew+" bytes ("+n.byteLength_+").");if(n.parts_.length>Zb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zb+") or object contains a cycle "+Wa(n))}function Wa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends yI{static getInstance(){return new Wy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=1e3,H4=300*1e3,tw=30*1e3,G4=1.3,K4=3e4,Y4="server_kill",nw=3;class or extends _I{constructor(e,t,s,a,l,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=or.nextPersistentConnectionId_++,this.log_=ih("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tu,this.maxReconnectDelay_=H4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(bn(l)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Zs,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,g=f.s;or.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ds(e,"w")){const s=Rl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ai(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||w2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=b2(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+bn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):E_("Unrecognized action received from server: "+bn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>K4&&(this.reconnectDelay_=tu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*G4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+or.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(S){ae(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(S)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,w]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?xn("getToken() completed but was canceled"):(xn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=w&&w.token,f=new U4(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,L=>{ai(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y4)},l))}catch(S){this.log_("Failed to get token: "+S),u||(this.repoInfo_.nodeAdmin&&ai(S),p())}}}interrupt(e){xn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ef(this.interruptReasons_)&&(this.reconnectDelay_=tu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>qy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new yt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){xn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nw&&(this.reconnectDelay_=tw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$1.replace(/\./g,"-")]=1,j_()?e["framework.cordova"]=1:Jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sf.getInstance().currentlyOnline();return ef(this.interruptReasons_)&&e}}or.nextPersistentConnectionId_=0;or.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ye(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ye(Ll,e),a=new Ye(Ll,t);return this.compare(s,a)!==0}minPost(){return Ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;class TI extends rm{static get __EMPTY_NODE(){return Pd}static set __EMPTY_NODE(e){Pd=e}compare(e,t){return bo(e.name,t.name)}isDefinedOn(e){throw zl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(fo,Pd)}makePost(e,t){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,Pd)}toString(){return".key"}}const Cl=new TI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Sn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Sn.RED,this.left=a??si.EMPTY_NODE,this.right=l??si.EMPTY_NODE}copy(e,t,s,a,l){return new Sn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return si.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return si.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Sn.RED=!0;Sn.BLACK=!1;class Q4{copy(e,t,s,a,l){return this}insert(e,t,s){return new Sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class si{constructor(e,t=si.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new si(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Sn.BLACK,null,null))}remove(e){return new si(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Sn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ld(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ld(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ld(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ld(this.root_,null,this.comparator_,!0,e)}}si.EMPTY_NODE=new Q4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(n,e){return bo(n.name,e.name)}function $y(n,e){return bo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S_;function $4(n){S_=n}const SI=function(n){return typeof n=="number"?"number:"+eI(n):"string:"+n},bI=function(n){if(n.isLeafNode()){const e=n.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ds(e,".sv"),"Priority must be a string or number.")}else ae(n===S_||n.isEmpty(),"priority of unexpected type.");ae(n===S_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iw;class En{static set __childrenNodeConstructor(e){iw=e}static get __childrenNodeConstructor(){return iw}constructor(e,t=En.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new En(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:En.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ke(e)?this:Ge(e)===".priority"?this.priorityNode_:En.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:En.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ge(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ae(s!==".priority"||ha(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,En.__childrenNodeConstructor.EMPTY_NODE.updateChild(It(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+SI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=eI(this.value_):e+=this.value_,this.lazyHash_=J1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===En.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof En.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=En.VALUE_TYPE_ORDER.indexOf(t),l=En.VALUE_TYPE_ORDER.indexOf(s);return ae(a>=0,"Unknown leaf type: "+t),ae(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}En.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wI,AI;function X4(n){wI=n}function J4(n){AI=n}class Z4 extends rm{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?bo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(fo,new En("[PRIORITY-POST]",AI))}makePost(e,t){const s=wI(e);return new Ye(t,new En("[PRIORITY-POST]",s))}toString(){return".priority"}}const zt=new Z4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3=Math.log(2);class t3{constructor(e){const t=l=>parseInt(Math.log(l)/e3,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bf=function(n,e,t,s){n.sort(e);const a=function(p,g){const E=g-p;let S,w;if(E===0)return null;if(E===1)return S=n[p],w=t?t(S):S,new Sn(w,S.node,Sn.BLACK,null,null);{const L=parseInt(E/2,10)+p,q=a(p,L),J=a(L+1,g);return S=n[L],w=t?t(S):S,new Sn(w,S.node,Sn.BLACK,q,J)}},l=function(p){let g=null,E=null,S=n.length;const w=function(q,J){const Z=S-q,ge=S;S-=q;const _e=a(Z+1,ge),de=n[Z],ke=t?t(de):de;L(new Sn(ke,de.node,J,null,_e))},L=function(q){g?(g.left=q,g=q):(E=q,g=q)};for(let q=0;q<p.count;++q){const J=p.nextBitIsOne(),Z=Math.pow(2,p.count-(q+1));J?w(Z,Sn.BLACK):(w(Z,Sn.BLACK),w(Z,Sn.RED))}return E},u=new t3(n.length),f=l(u);return new si(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vg;const dl={};class ir{static get Default(){return ae(dl&&zt,"ChildrenNode.ts has not been loaded"),Vg=Vg||new ir({".priority":dl},{".priority":zt}),Vg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Rl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof si?t:null}hasIndex(e){return Ds(this.indexSet_,e.toString())}addIndex(e,t){ae(e!==Cl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ye.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;a?f=bf(s,e.getCompare()):f=dl;const p=e.toString(),g={...this.indexSet_};g[p]=e;const E={...this.indexes_};return E[p]=f,new ir(E,g)}addToIndexes(e,t){const s=tf(this.indexes_,(a,l)=>{const u=Rl(this.indexSet_,l);if(ae(u,"Missing index implementation for "+l),a===dl)if(u.isDefinedOn(e.node)){const f=[],p=t.getIterator(Ye.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),bf(f,u.getCompare())}else return dl;else{const f=t.get(e.name);let p=a;return f&&(p=p.remove(new Ye(e.name,f))),p.insert(e,e.node)}});return new ir(s,this.indexSet_)}removeFromIndexes(e,t){const s=tf(this.indexes_,a=>{if(a===dl)return a;{const l=t.get(e.name);return l?a.remove(new Ye(e.name,l)):a}});return new ir(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;class Me{static get EMPTY_NODE(){return nu||(nu=new Me(new si($y),null,ir.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&bI(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nu}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?nu:t}}getChild(e){const t=Ge(e);return t===null?this:this.getImmediateChild(t).getChild(It(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ae(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ye(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?nu:this.priorityNode_;return new Me(a,u,l)}}updateChild(e,t){const s=Ge(e);if(s===null)return t;{ae(Ge(e)!==".priority"||ha(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(It(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(zt,(u,f)=>{t[u]=f.val(e),s++,l&&Me.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+SI(this.getPriority().val())+":"),this.forEachChild(zt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":J1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ye(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ye(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sh?-1:0}withIndex(e){if(e===Cl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Cl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(zt),a=t.getIterator(zt);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Cl?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class n3 extends Me{constructor(){super(new si($y),Me.EMPTY_NODE,ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const sh=new n3;Object.defineProperties(Ye,{MIN:{value:new Ye(Ll,Me.EMPTY_NODE)},MAX:{value:new Ye(fo,sh)}});TI.__EMPTY_NODE=Me.EMPTY_NODE;En.__childrenNodeConstructor=Me;$4(sh);J4(sh);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3=!0;function on(n,e=null){if(n===null)return Me.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new En(t,on(e))}if(!(n instanceof Array)&&i3){const t=[];let s=!1;if(Fn(n,(u,f)=>{if(u.substring(0,1)!=="."){const p=on(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ye(u,p)))}}),t.length===0)return Me.EMPTY_NODE;const l=bf(t,W4,u=>u.name,$y);if(s){const u=bf(t,zt.getCompare());return new Me(l,on(e),new ir({".priority":u},{".priority":zt}))}else return new Me(l,on(e),ir.Default)}else{let t=Me.EMPTY_NODE;return Fn(n,(s,a)=>{if(Ds(n,s)&&s.substring(0,1)!=="."){const l=on(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(on(e))}}X4(on);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3 extends rm{constructor(e){super(),this.indexPath_=e,ae(!Ke(e)&&Ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?bo(e.name,t.name):l}makePost(e,t){const s=on(e),a=Me.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ye(t,a)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,sh);return new Ye(fo,e)}toString(){return Lu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3 extends rm{compare(e,t){const s=e.node.compareTo(t.node);return s===0?bo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,t){const s=on(e);return new Ye(t,s)}toString(){return".value"}}const a3=new r3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){return{type:"value",snapshotNode:n}}function Vl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Uu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function o3(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,u){ae(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(t)?u.trackChildChange(Vu(t,f)):ae(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Vl(t,s)):u.trackChildChange(Uu(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(zt,(a,l)=>{t.hasChild(a)||s.trackChildChange(Vu(a,l))}),t.isLeafNode()||t.forEachChild(zt,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||s.trackChildChange(Uu(a,l,u))}else s.trackChildChange(Vl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Me.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.indexedFilter_=new Xy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ju.getStartPost_(e),this.endPost_=ju.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,u){return this.matches(new Ye(t,s))||(s=Me.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,u)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Me.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Me.EMPTY_NODE);const l=this;return t.forEachChild(zt,(u,f)=>{l.matches(new Ye(u,f))||(a=a.updateImmediateChild(u,Me.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ju(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,u){return this.rangedFilter_.matches(new Ye(t,s))||(s=Me.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,u):this.fullLimitUpdateChild_(e,t,s,l,u)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Me.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Me.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Me.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,Me.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let u;if(this.reverse_){const S=this.index_.getCompare();u=(w,L)=>S(L,w)}else u=this.index_.getCompare();const f=e;ae(f.numChildren()===this.limit_,"");const p=new Ye(t,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(p);if(f.hasChild(t)){const S=f.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const L=w==null?1:u(w,p);if(E&&!s.isEmpty()&&L>=0)return l!=null&&l.trackChildChange(Uu(t,s,S)),f.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(Vu(t,S));const J=f.updateImmediateChild(t,Me.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(Vl(w.name,w.node)),J.updateImmediateChild(w.name,w.node)):J}}else return s.isEmpty()?e:E&&u(g,p)>=0?(l!=null&&(l.trackChildChange(Vu(g.name,g.node)),l.trackChildChange(Vl(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(g.name,Me.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ll}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){const e=new Jy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function c3(n){return n.loadsAllData()?new Xy(n.getIndex()):n.hasLimit()?new l3(n):new ju(n)}function sw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===zt?t="$priority":n.index_===a3?t="$value":n.index_===Cl?t="$key":(ae(n.index_ instanceof s3,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=bn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=bn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+bn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=bn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+bn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function rw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==zt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends _I{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=ih("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=wf.getListenId_(e,s),f={};this.listens_[u]=f;const p=sw(e._queryParams);this.restRequest_(l+".json",p,(g,E)=>{let S=E;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(l,S,!1,s),Rl(this.listens_,u)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=wf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=sw(e._queryParams),s=e._path.toString(),a=new Zs;return this.restRequest_(s+".json",t,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fl(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=bu(f.responseText)}catch{ai("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ai("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){return{value:null,children:new Map}}function $l(n,e,t){if(Ke(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ge(e);n.children.has(s)||n.children.set(s,Af());const a=n.children.get(s);e=It(e),$l(a,e,t)}}function b_(n,e){if(Ke(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(zt,(s,a)=>{$l(n,new yt(s),a)}),b_(n,e)}}else if(n.children.size>0){const t=Ge(e);return e=It(e),n.children.has(t)&&b_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function w_(n,e,t){n.value!==null?t(e,n.value):h3(n,(s,a)=>{const l=new yt(e.toString()+"/"+s);w_(a,l,t)})}function h3(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Fn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=10*1e3,f3=30*1e3,m3=300*1e3;class p3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new d3(e);const s=aw+(f3-aw)*Math.random();vu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Fn(e,(a,l)=>{l>0&&Ds(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*m3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wi||(Wi={}));function II(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ev(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Wi.ACK_USER_WRITE,this.source=II()}operationForChild(e){if(Ke(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yt(e));return new Cf(ut(),t,this.revert)}}else return ae(Ge(this.path)===e,"operationForChild called for unrelated child."),new Cf(It(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.source=e,this.path=t,this.type=Wi.LISTEN_COMPLETE}operationForChild(e){return Ke(this.path)?new zu(this.source,ut()):new zu(this.source,It(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Wi.OVERWRITE}operationForChild(e){return Ke(this.path)?new mo(this.source,ut(),this.snap.getImmediateChild(e)):new mo(this.source,It(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Wi.MERGE}operationForChild(e){if(Ke(this.path)){const t=this.children.subtree(new yt(e));return t.isEmpty()?null:t.value?new mo(this.source,ut(),t.value):new Fu(this.source,ut(),t)}else return ae(Ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fu(this.source,It(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ge(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _3(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(o3(u.childName,u.snapshotNode))}),iu(n,a,"child_removed",e,s,t),iu(n,a,"child_added",e,s,t),iu(n,a,"child_moved",l,s,t),iu(n,a,"child_changed",e,s,t),iu(n,a,"value",e,s,t),a}function iu(n,e,t,s,a,l){const u=s.filter(f=>f.type===t);u.sort((f,p)=>v3(n,f,p)),u.forEach(f=>{const p=y3(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,n.query_))})})}function y3(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function v3(n,e,t){if(e.childName==null||t.childName==null)throw zl("Should only compare child_ events.");const s=new Ye(e.childName,e.snapshotNode),a=new Ye(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n,e){return{eventCache:n,serverCache:e}}function Eu(n,e,t,s){return am(new po(e,t,s),n.serverCache)}function RI(n,e,t,s){return am(n.eventCache,new po(e,t,s))}function A_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function go(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ug;const E3=()=>(Ug||(Ug=new si(s4)),Ug);class Mt{static fromObject(e){let t=new Mt(null);return Fn(e,(s,a)=>{t=t.set(new yt(s),a)}),t}constructor(e,t=E3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ut(),value:this.value};if(Ke(e))return null;{const s=Ge(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(It(e),t);return l!=null?{path:Qt(new yt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ke(e))return this;{const t=Ge(e),s=this.children.get(t);return s!==null?s.subtree(It(e)):new Mt(null)}}set(e,t){if(Ke(e))return new Mt(t,this.children);{const s=Ge(e),l=(this.children.get(s)||new Mt(null)).set(It(e),t),u=this.children.insert(s,l);return new Mt(this.value,u)}}remove(e){if(Ke(e))return this.children.isEmpty()?new Mt(null):new Mt(null,this.children);{const t=Ge(e),s=this.children.get(t);if(s){const a=s.remove(It(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new Mt(null):new Mt(this.value,l)}else return this}}get(e){if(Ke(e))return this.value;{const t=Ge(e),s=this.children.get(t);return s?s.get(It(e)):null}}setTree(e,t){if(Ke(e))return t;{const s=Ge(e),l=(this.children.get(s)||new Mt(null)).setTree(It(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new Mt(this.value,u)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Qt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ke(e))return null;{const l=Ge(e),u=this.children.get(l);return u?u.findOnPath_(It(e),Qt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,s){if(Ke(e))return this;{this.value&&s(t,this.value);const a=Ge(e),l=this.children.get(a);return l?l.foreachOnPath_(It(e),Qt(t,a),s):new Mt(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Qt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.writeTree_=e}static empty(){return new Ji(new Mt(null))}}function Tu(n,e,t){if(Ke(e))return new Ji(new Mt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=ii(a,e);return l=l.updateChild(u,t),new Ji(n.writeTree_.set(a,l))}else{const a=new Mt(t),l=n.writeTree_.setTree(e,a);return new Ji(l)}}}function ow(n,e,t){let s=n;return Fn(t,(a,l)=>{s=Tu(s,Qt(e,a),l)}),s}function lw(n,e){if(Ke(e))return Ji.empty();{const t=n.writeTree_.setTree(e,new Mt(null));return new Ji(t)}}function C_(n,e){return wo(n,e)!=null}function wo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ii(t.path,e)):null}function cw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(zt,(s,a)=>{e.push(new Ye(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ye(s,a.value))}),e}function sa(n,e){if(Ke(e))return n;{const t=wo(n,e);return t!=null?new Ji(new Mt(t)):new Ji(n.writeTree_.subtree(e))}}function I_(n){return n.writeTree_.isEmpty()}function Ul(n,e){return NI(ut(),n.writeTree_,e)}function NI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ae(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=NI(Qt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Qt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n,e){return MI(e,n)}function T3(n,e,t,s,a){ae(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Tu(n.visibleWrites,e,t)),n.lastWriteId=s}function S3(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function b3(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);ae(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&w3(f,s.path)?a=!1:Mi(s.path,f.path)&&(l=!0)),u--}if(a){if(l)return A3(n),!0;if(s.snap)n.visibleWrites=lw(n.visibleWrites,s.path);else{const f=s.children;Fn(f,p=>{n.visibleWrites=lw(n.visibleWrites,Qt(s.path,p))})}return!0}else return!1}function w3(n,e){if(n.snap)return Mi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Mi(Qt(n.path,t),e))return!0;return!1}function A3(n){n.visibleWrites=DI(n.allWrites,C3,ut()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function C3(n){return n.visible}function DI(n,e,t){let s=Ji.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let f;if(l.snap)Mi(t,u)?(f=ii(t,u),s=Tu(s,f,l.snap)):Mi(u,t)&&(f=ii(u,t),s=Tu(s,ut(),l.snap.getChild(f)));else if(l.children){if(Mi(t,u))f=ii(t,u),s=ow(s,f,l.children);else if(Mi(u,t))if(f=ii(u,t),Ke(f))s=ow(s,ut(),l.children);else{const p=Rl(l.children,Ge(f));if(p){const g=p.getChild(It(f));s=Tu(s,ut(),g)}}}else throw zl("WriteRecord should have .snap or .children")}}return s}function xI(n,e,t,s,a){if(!s&&!a){const l=wo(n.visibleWrites,e);if(l!=null)return l;{const u=sa(n.visibleWrites,e);if(I_(u))return t;if(t==null&&!C_(u,ut()))return null;{const f=t||Me.EMPTY_NODE;return Ul(u,f)}}}else{const l=sa(n.visibleWrites,e);if(!a&&I_(l))return t;if(!a&&t==null&&!C_(l,ut()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(Mi(g.path,e)||Mi(e,g.path))},f=DI(n.allWrites,u,e),p=t||Me.EMPTY_NODE;return Ul(f,p)}}}function I3(n,e,t){let s=Me.EMPTY_NODE;const a=wo(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(zt,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=sa(n.visibleWrites,e);return t.forEachChild(zt,(u,f)=>{const p=Ul(sa(l,new yt(u)),f);s=s.updateImmediateChild(u,p)}),cw(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=sa(n.visibleWrites,e);return cw(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function R3(n,e,t,s,a){ae(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Qt(e,t);if(C_(n.visibleWrites,l))return null;{const u=sa(n.visibleWrites,l);return I_(u)?a.getChild(t):Ul(u,a.getChild(t))}}function N3(n,e,t,s){const a=Qt(e,t),l=wo(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=sa(n.visibleWrites,a);return Ul(u,s.getNode().getImmediateChild(t))}else return null}function D3(n,e){return wo(n.visibleWrites,e)}function x3(n,e,t,s,a,l,u){let f;const p=sa(n.visibleWrites,e),g=wo(p,ut());if(g!=null)f=g;else if(t!=null)f=Ul(p,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const E=[],S=u.getCompare(),w=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let L=w.getNext();for(;L&&E.length<a;)S(L,s)!==0&&E.push(L),L=w.getNext();return E}else return[]}function O3(){return{visibleWrites:Ji.empty(),allWrites:[],lastWriteId:-1}}function If(n,e,t,s){return xI(n.writeTree,n.treePath,e,t,s)}function nv(n,e){return I3(n.writeTree,n.treePath,e)}function uw(n,e,t,s){return R3(n.writeTree,n.treePath,e,t,s)}function Rf(n,e){return D3(n.writeTree,Qt(n.treePath,e))}function M3(n,e,t,s,a,l){return x3(n.writeTree,n.treePath,e,t,s,a,l)}function iv(n,e,t){return N3(n.writeTree,n.treePath,e,t)}function OI(n,e){return MI(Qt(n.treePath,e),n.writeTree)}function MI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ae(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ae(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Uu(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,Vu(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Vl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Uu(s,e.snapshotNode,a.oldSnap));else throw zl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const kI=new P3;class sv{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new po(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iv(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:go(this.viewCache_),l=M3(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(n){return{filter:n}}function V3(n,e){ae(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function U3(n,e,t,s,a){const l=new k3;let u,f;if(t.type===Wi.OVERWRITE){const g=t;g.source.fromUser?u=R_(n,e,g.path,g.snap,s,a,l):(ae(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ke(g.path),u=Nf(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===Wi.MERGE){const g=t;g.source.fromUser?u=z3(n,e,g.path,g.children,s,a,l):(ae(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=N_(n,e,g.path,g.children,s,a,f,l))}else if(t.type===Wi.ACK_USER_WRITE){const g=t;g.revert?u=q3(n,e,g.path,s,a,l):u=F3(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Wi.LISTEN_COMPLETE)u=B3(n,e,t.path,s,l);else throw zl("Unknown operation type: "+t.type);const p=l.getChanges();return j3(e,u,p),{viewCache:u,changes:p}}function j3(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=A_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(CI(A_(e)))}}function PI(n,e,t,s,a,l){const u=e.eventCache;if(Rf(s,t)!=null)return e;{let f,p;if(Ke(t))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=go(e),E=g instanceof Me?g:Me.EMPTY_NODE,S=nv(s,E);f=n.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const g=If(s,go(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ge(t);if(g===".priority"){ae(ha(t)===1,"Can't have a priority with additional path components");const E=u.getNode();p=e.serverCache.getNode();const S=uw(s,t,E,p);S!=null?f=n.filter.updatePriority(E,S):f=u.getNode()}else{const E=It(t);let S;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const w=uw(s,t,u.getNode(),p);w!=null?S=u.getNode().getImmediateChild(g).updateChild(E,w):S=u.getNode().getImmediateChild(g)}else S=iv(s,g,e.serverCache);S!=null?f=n.filter.updateChild(u.getNode(),g,S,E,a,l):f=u.getNode()}}return Eu(e,f,u.isFullyInitialized()||Ke(t),n.filter.filtersNodes())}}function Nf(n,e,t,s,a,l,u,f){const p=e.serverCache;let g;const E=u?n.filter:n.filter.getIndexedFilter();if(Ke(t))g=E.updateFullNode(p.getNode(),s,null);else if(E.filtersNodes()&&!p.isFiltered()){const L=p.getNode().updateChild(t,s);g=E.updateFullNode(p.getNode(),L,null)}else{const L=Ge(t);if(!p.isCompleteForPath(t)&&ha(t)>1)return e;const q=It(t),Z=p.getNode().getImmediateChild(L).updateChild(q,s);L===".priority"?g=E.updatePriority(p.getNode(),Z):g=E.updateChild(p.getNode(),L,Z,q,kI,null)}const S=RI(e,g,p.isFullyInitialized()||Ke(t),E.filtersNodes()),w=new sv(a,S,l);return PI(n,S,t,a,w,f)}function R_(n,e,t,s,a,l,u){const f=e.eventCache;let p,g;const E=new sv(a,e,l);if(Ke(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,u),p=Eu(e,g,!0,n.filter.filtersNodes());else{const S=Ge(t);if(S===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Eu(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=It(t),L=f.getNode().getImmediateChild(S);let q;if(Ke(w))q=s;else{const J=E.getCompleteChild(S);J!=null?Yy(w)===".priority"&&J.getChild(vI(w)).isEmpty()?q=J:q=J.updateChild(w,s):q=Me.EMPTY_NODE}if(L.equals(q))p=e;else{const J=n.filter.updateChild(f.getNode(),S,q,w,E,u);p=Eu(e,J,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function hw(n,e){return n.eventCache.isCompleteForChild(e)}function z3(n,e,t,s,a,l,u){let f=e;return s.foreach((p,g)=>{const E=Qt(t,p);hw(e,Ge(E))&&(f=R_(n,f,E,g,a,l,u))}),s.foreach((p,g)=>{const E=Qt(t,p);hw(e,Ge(E))||(f=R_(n,f,E,g,a,l,u))}),f}function dw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function N_(n,e,t,s,a,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ke(t)?g=s:g=new Mt(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((S,w)=>{if(E.hasChild(S)){const L=e.serverCache.getNode().getImmediateChild(S),q=dw(n,L,w);p=Nf(n,p,new yt(S),q,a,l,u,f)}}),g.children.inorderTraversal((S,w)=>{const L=!e.serverCache.isCompleteForChild(S)&&w.value===null;if(!E.hasChild(S)&&!L){const q=e.serverCache.getNode().getImmediateChild(S),J=dw(n,q,w);p=Nf(n,p,new yt(S),J,a,l,u,f)}}),p}function F3(n,e,t,s,a,l,u){if(Rf(a,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ke(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Nf(n,e,t,p.getNode().getChild(t),a,l,f,u);if(Ke(t)){let g=new Mt(null);return p.getNode().forEachChild(Cl,(E,S)=>{g=g.set(new yt(E),S)}),N_(n,e,t,g,a,l,f,u)}else return e}else{let g=new Mt(null);return s.foreach((E,S)=>{const w=Qt(t,E);p.isCompleteForPath(w)&&(g=g.set(E,p.getNode().getChild(w)))}),N_(n,e,t,g,a,l,f,u)}}function B3(n,e,t,s,a){const l=e.serverCache,u=RI(e,l.getNode(),l.isFullyInitialized()||Ke(t),l.isFiltered());return PI(n,u,t,s,kI,a)}function q3(n,e,t,s,a,l){let u;if(Rf(s,t)!=null)return e;{const f=new sv(s,e,a),p=e.eventCache.getNode();let g;if(Ke(t)||Ge(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=If(s,go(e));else{const S=e.serverCache.getNode();ae(S instanceof Me,"serverChildren would be complete if leaf node"),E=nv(s,S)}E=E,g=n.filter.updateFullNode(p,E,l)}else{const E=Ge(t);let S=iv(s,E,e.serverCache);S==null&&e.serverCache.isCompleteForChild(E)&&(S=p.getImmediateChild(E)),S!=null?g=n.filter.updateChild(p,E,S,It(t),f,l):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(p,E,Me.EMPTY_NODE,It(t),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=If(s,go(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||Rf(s,ut())!=null,Eu(e,g,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Xy(s.getIndex()),l=c3(s);this.processor_=L3(l);const u=t.serverCache,f=t.eventCache,p=a.updateFullNode(Me.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(Me.EMPTY_NODE,f.getNode(),null),E=new po(p,u.isFullyInitialized(),a.filtersNodes()),S=new po(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=am(S,E),this.eventGenerator_=new g3(this.query_)}get query(){return this.query_}}function G3(n){return n.viewCache_.serverCache.getNode()}function K3(n,e){const t=go(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ke(e)&&!t.getImmediateChild(Ge(e)).isEmpty())?t.getChild(e):null}function fw(n){return n.eventRegistrations_.length===0}function Y3(n,e){n.eventRegistrations_.push(e)}function mw(n,e,t){const s=[];if(t){ae(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(t,a);u&&s.push(u)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function pw(n,e,t,s){e.type===Wi.MERGE&&e.source.queryId!==null&&(ae(go(n.viewCache_),"We should always have a full cache before handling merges"),ae(A_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=U3(n.processor_,a,e,t,s);return V3(n.processor_,l.viewCache),ae(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,LI(n,l.changes,l.viewCache.eventCache.getNode(),null)}function Q3(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(zt,(l,u)=>{s.push(Vl(l,u))}),t.isFullyInitialized()&&s.push(CI(t.getNode())),LI(n,s,t.getNode(),e)}function LI(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return _3(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;class W3{constructor(){this.views=new Map}}function $3(n){ae(!Df,"__referenceConstructor has already been defined"),Df=n}function X3(){return ae(Df,"Reference.ts has not been loaded"),Df}function J3(n){return n.views.size===0}function rv(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ae(l!=null,"SyncTree gave us an op for an invalid query."),pw(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat(pw(u,e,t,s));return l}}function Z3(n,e,t,s,a){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let f=If(t,a?s:null),p=!1;f?p=!0:s instanceof Me?(f=nv(t,s),p=!1):(f=Me.EMPTY_NODE,p=!1);const g=am(new po(f,p,!1),new po(s,a,!1));return new H3(e,g)}return u}function eU(n,e,t,s,a,l){const u=Z3(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),Y3(u,t),Q3(u,t)}function tU(n,e,t,s){const a=e._queryIdentifier,l=[];let u=[];const f=da(n);if(a==="default")for(const[p,g]of n.views.entries())u=u.concat(mw(g,t,s)),fw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(u=u.concat(mw(p,t,s)),fw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!da(n)&&l.push(new(X3())(e._repo,e._path)),{removed:l,events:u}}function VI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Il(n,e){let t=null;for(const s of n.views.values())t=t||K3(s,e);return t}function UI(n,e){if(e._queryParams.loadsAllData())return om(n);{const s=e._queryIdentifier;return n.views.get(s)}}function jI(n,e){return UI(n,e)!=null}function da(n){return om(n)!=null}function om(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;function nU(n){ae(!xf,"__referenceConstructor has already been defined"),xf=n}function iU(){return ae(xf,"Reference.ts has not been loaded"),xf}let sU=1;class gw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Mt(null),this.pendingWriteTree_=O3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zI(n,e,t,s,a){return T3(n.pendingWriteTree_,e,t,s,a),a?rh(n,new mo(II(),e,t)):[]}function eo(n,e,t=!1){const s=S3(n.pendingWriteTree_,e);if(b3(n.pendingWriteTree_,e)){let l=new Mt(null);return s.snap!=null?l=l.set(ut(),!0):Fn(s.children,u=>{l=l.set(new yt(u),!0)}),rh(n,new Cf(s.path,l,t))}else return[]}function lm(n,e,t){return rh(n,new mo(Zy(),e,t))}function rU(n,e,t){const s=Mt.fromObject(t);return rh(n,new Fu(Zy(),e,s))}function aU(n,e){return rh(n,new zu(Zy(),e))}function oU(n,e,t){const s=ov(n,t);if(s){const a=lv(s),l=a.path,u=a.queryId,f=ii(l,e),p=new zu(ev(u),f);return cv(n,l,p)}else return[]}function D_(n,e,t,s,a=!1){const l=e._path,u=n.syncPointTree_.get(l);let f=[];if(u&&(e._queryIdentifier==="default"||jI(u,e))){const p=tU(u,e,t,s);J3(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(f=p.events,!a){const E=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,S=n.syncPointTree_.findOnPath(l,(w,L)=>da(L));if(E&&!S){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const L=uU(w);for(let q=0;q<L.length;++q){const J=L[q],Z=J.query,ge=qI(n,J);n.listenProvider_.startListening(Su(Z),Of(n,Z),ge.hashFn,ge.onComplete)}}}!S&&g.length>0&&!s&&(E?n.listenProvider_.stopListening(Su(e),null):g.forEach(w=>{const L=n.queryToTagMap.get(cm(w));n.listenProvider_.stopListening(Su(w),L)}))}hU(n,g)}return f}function lU(n,e,t,s){const a=ov(n,s);if(a!=null){const l=lv(a),u=l.path,f=l.queryId,p=ii(u,e),g=new mo(ev(f),p,t);return cv(n,u,g)}else return[]}function cU(n,e,t,s){const a=ov(n,s);if(a){const l=lv(a),u=l.path,f=l.queryId,p=ii(u,e),g=Mt.fromObject(t),E=new Fu(ev(f),p,g);return cv(n,u,E)}else return[]}function _w(n,e,t,s=!1){const a=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,L)=>{const q=ii(w,a);l=l||Il(L,q),u=u||da(L)});let f=n.syncPointTree_.get(a);f?(u=u||da(f),l=l||Il(f,ut())):(f=new W3,n.syncPointTree_=n.syncPointTree_.set(a,f));let p;l!=null?p=!0:(p=!1,l=Me.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((L,q)=>{const J=Il(q,ut());J&&(l=l.updateImmediateChild(L,J))}));const g=jI(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=cm(e);ae(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const L=dU();n.queryToTagMap.set(w,L),n.tagToQueryMap.set(L,w)}const E=tv(n.pendingWriteTree_,a);let S=eU(f,e,t,E,l,p);if(!g&&!u&&!s){const w=UI(f,e);S=S.concat(fU(n,e,w))}return S}function av(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,f)=>{const p=ii(u,e),g=Il(f,p);if(g)return g});return xI(a,e,l,t,!0)}function rh(n,e){return FI(e,n.syncPointTree_,null,tv(n.pendingWriteTree_,ut()))}function FI(n,e,t,s){if(Ke(n.path))return BI(n,e,t,s);{const a=e.get(ut());t==null&&a!=null&&(t=Il(a,ut()));let l=[];const u=Ge(n.path),f=n.operationForChild(u),p=e.children.get(u);if(p&&f){const g=t?t.getImmediateChild(u):null,E=OI(s,u);l=l.concat(FI(f,p,g,E))}return a&&(l=l.concat(rv(a,n,s,t))),l}}function BI(n,e,t,s){const a=e.get(ut());t==null&&a!=null&&(t=Il(a,ut()));let l=[];return e.children.inorderTraversal((u,f)=>{const p=t?t.getImmediateChild(u):null,g=OI(s,u),E=n.operationForChild(u);E&&(l=l.concat(BI(E,f,p,g)))}),a&&(l=l.concat(rv(a,n,s,t))),l}function qI(n,e){const t=e.query,s=Of(n,t);return{hashFn:()=>(G3(e)||Me.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?oU(n,t._path,s):aU(n,t._path);{const l=o4(a,t);return D_(n,t,null,l)}}}}function Of(n,e){const t=cm(e);return n.queryToTagMap.get(t)}function cm(n){return n._path.toString()+"$"+n._queryIdentifier}function ov(n,e){return n.tagToQueryMap.get(e)}function lv(n){const e=n.indexOf("$");return ae(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new yt(n.substr(0,e))}}function cv(n,e,t){const s=n.syncPointTree_.get(e);ae(s,"Missing sync point for query tag that we're tracking");const a=tv(n.pendingWriteTree_,e);return rv(s,t,a,null)}function uU(n){return n.fold((e,t,s)=>{if(t&&da(t))return[om(t)];{let a=[];return t&&(a=VI(t)),Fn(s,(l,u)=>{a=a.concat(u)}),a}})}function Su(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(iU())(n._repo,n._path):n}function hU(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=cm(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function dU(){return sU++}function fU(n,e,t){const s=e._path,a=Of(n,e),l=qI(n,t),u=n.listenProvider_.startListening(Su(e),a,l.hashFn,l.onComplete),f=n.syncPointTree_.subtree(s);if(a)ae(!da(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,E,S)=>{if(!Ke(g)&&E&&da(E))return[om(E).query];{let w=[];return E&&(w=w.concat(VI(E).map(L=>L.query))),Fn(S,(L,q)=>{w=w.concat(q)}),w}});for(let g=0;g<p.length;++g){const E=p[g];n.listenProvider_.stopListening(Su(E),Of(n,E))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new uv(t)}node(){return this.node_}}class hv{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new hv(this.syncTree_,t)}node(){return av(this.syncTree_,this.path_)}}const mU=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yw=function(n,e,t){if(!n||typeof n!="object")return n;if(ae(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pU(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gU(n[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pU=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ae(!1,"Unexpected server value: "+n)}},gU=function(n,e,t){n.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ae(!1,"Unexpected increment value: "+s);const a=e.node();if(ae(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},_U=function(n,e,t,s){return dv(e,new hv(t,n),s)},HI=function(n,e,t){return dv(n,new uv(e),t)};function dv(n,e,t){const s=n.getPriority().val(),a=yw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,f=yw(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new En(f,on(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new En(a))),u.forEachChild(zt,(f,p)=>{const g=dv(p,e.getImmediateChild(f),t);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function mv(n,e){let t=e instanceof yt?e:new yt(e),s=n,a=Ge(t);for(;a!==null;){const l=Rl(s.node.children,a)||{children:{},childCount:0};s=new fv(a,s,l),t=It(t),a=Ge(t)}return s}function Xl(n){return n.node.value}function GI(n,e){n.node.value=e,x_(n)}function KI(n){return n.node.childCount>0}function yU(n){return Xl(n)===void 0&&!KI(n)}function um(n,e){Fn(n.node.children,(t,s)=>{e(new fv(t,n,s))})}function YI(n,e,t,s){t&&e(n),um(n,a=>{YI(a,e,!0)})}function vU(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ah(n){return new yt(n.parent===null?n.name:ah(n.parent)+"/"+n.name)}function x_(n){n.parent!==null&&EU(n.parent,n.name,n)}function EU(n,e,t){const s=yU(t),a=Ds(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,x_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,x_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=/[\[\].#$\/\u0000-\u001F\u007F]/,SU=/[\[\].#$\u0000-\u001F\u007F]/,jg=10*1024*1024,pv=function(n){return typeof n=="string"&&n.length!==0&&!TU.test(n)},QI=function(n){return typeof n=="string"&&n.length!==0&&!SU.test(n)},bU=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),QI(n)},WI=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!sm(n)||n&&typeof n=="object"&&Ds(n,".sv")},O_=function(n,e,t,s){hm(Nl(n,"value"),e,t)},hm=function(n,e,t){const s=t instanceof yt?new F4(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Wa(s));if(typeof e=="function")throw new Error(n+"contains a function "+Wa(s)+" with contents = "+e.toString());if(sm(e))throw new Error(n+"contains "+e.toString()+" "+Wa(s));if(typeof e=="string"&&e.length>jg/3&&Vf(e)>jg)throw new Error(n+"contains a string greater than "+jg+" utf8 bytes "+Wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Fn(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!pv(u)))throw new Error(n+" contains an invalid key ("+u+") "+Wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B4(s,u),hm(n,f,s),q4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Wa(s)+" in addition to actual children.")}},wU=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=Lu(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!pv(l[u]))throw new Error(n+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(z4);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&Mi(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},AU=function(n,e,t,s){const a=Nl(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Fn(e,(u,f)=>{const p=new yt(u);if(hm(a,f,Qt(t,p)),Yy(p)===".priority"&&!WI(f))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),wU(a,l)},CU=function(n,e,t){if(sm(e))throw new Error(Nl(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!WI(e))throw new Error(Nl(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},$I=function(n,e,t,s){if(!QI(t))throw new Error(Nl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IU=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$I(n,e,t)},du=function(n,e){if(Ge(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},RU=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!bU(t))throw new Error(Nl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gv(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Qy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function XI(n,e,t){gv(n,t),JI(n,s=>Qy(s,e))}function pr(n,e,t){gv(n,t),JI(n,s=>Mi(s,e)||Mi(e,s))}function JI(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(DU(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function DU(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();yu&&xn("event: "+t.toString()),Wl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU="repo_interrupt",OU=25;class MU{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Af(),this.transactionQueueTree_=new fv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kU(n,e,t){if(n.stats_=Gy(n.repoInfo_),n.forceRestClient_||h4())n.server_=new wf(n.repoInfo_,(s,a,l,u)=>{vw(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ew(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{bn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new or(n.repoInfo_,e,(s,a,l,u)=>{vw(n,s,a,l,u)},s=>{Ew(n,s)},s=>{LU(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=g4(n.repoInfo_,()=>new p3(n.stats_,n.server_)),n.infoData_=new u3,n.infoSyncTree_=new gw({startListening:(s,a,l,u)=>{let f=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(f=lm(n.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),yv(n,"connected",!1),n.serverSyncTree_=new gw({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(f,p)=>{const g=u(f,p);pr(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function PU(n){const t=n.infoData_.getNode(new yt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _v(n){return mU({timestamp:PU(n)})}function vw(n,e,t,s,a){n.dataUpdateCount++;const l=new yt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const p=tf(t,g=>on(g));u=cU(n.serverSyncTree_,l,p,a)}else{const p=on(t);u=lU(n.serverSyncTree_,l,p,a)}else if(s){const p=tf(t,g=>on(g));u=rU(n.serverSyncTree_,l,p)}else{const p=on(t);u=lm(n.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=dm(n,l)),pr(n.eventQueue_,f,u)}function Ew(n,e){yv(n,"connected",e),e===!1&&UU(n)}function LU(n,e){Fn(e,(t,s)=>{yv(n,t,s)})}function yv(n,e,t){const s=new yt("/.info/"+e),a=on(t);n.infoData_.updateSnapshot(s,a);const l=lm(n.infoSyncTree_,s,a);pr(n.eventQueue_,s,l)}function ZI(n){return n.nextWriteId_++}function VU(n,e,t,s,a){vv(n,"set",{path:e.toString(),value:t,priority:s});const l=_v(n),u=on(t,s),f=av(n.serverSyncTree_,e),p=HI(u,f,l),g=ZI(n),E=zI(n.serverSyncTree_,e,p,g,!0);gv(n.eventQueue_,E),n.server_.put(e.toString(),u.val(!0),(w,L)=>{const q=w==="ok";q||ai("set at "+e+" failed: "+w);const J=eo(n.serverSyncTree_,g,!q);pr(n.eventQueue_,e,J),jl(n,a,w,L)});const S=sR(n,e);dm(n,S),pr(n.eventQueue_,S,[])}function UU(n){vv(n,"onDisconnectEvents");const e=_v(n),t=Af();w_(n.onDisconnect_,ut(),(a,l)=>{const u=_U(a,l,n.serverSyncTree_,e);$l(t,a,u)});let s=[];w_(t,ut(),(a,l)=>{s=s.concat(lm(n.serverSyncTree_,a,l));const u=sR(n,a);dm(n,u)}),n.onDisconnect_=Af(),pr(n.eventQueue_,ut(),s)}function jU(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&b_(n.onDisconnect_,e),jl(n,t,s,a)})}function Tw(n,e,t,s){const a=on(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,u)=>{l==="ok"&&$l(n.onDisconnect_,e,a),jl(n,s,l,u)})}function zU(n,e,t,s,a){const l=on(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(u,f)=>{u==="ok"&&$l(n.onDisconnect_,e,l),jl(n,a,u,f)})}function FU(n,e,t,s){if(ef(t)){xn("onDisconnect().update() called with empty data.  Don't do anything."),jl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Fn(t,(u,f)=>{const p=on(f);$l(n.onDisconnect_,Qt(e,u),p)}),jl(n,s,a,l)})}function BU(n,e,t){let s;Ge(e._path)===".info"?s=_w(n.infoSyncTree_,e,t):s=_w(n.serverSyncTree_,e,t),XI(n.eventQueue_,e._path,s)}function qU(n,e,t){let s;Ge(e._path)===".info"?s=D_(n.infoSyncTree_,e,t):s=D_(n.serverSyncTree_,e,t),XI(n.eventQueue_,e._path,s)}function HU(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xU)}function vv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xn(t,...e)}function jl(n,e,t,s){e&&Wl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const u=new Error(l);u.code=a,e(u)}})}function eR(n,e,t){return av(n.serverSyncTree_,e,t)||Me.EMPTY_NODE}function Ev(n,e=n.transactionQueueTree_){if(e||fm(n,e),Xl(e)){const t=nR(n,e);ae(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&GU(n,ah(e),t)}else KI(e)&&um(e,t=>{Ev(n,t)})}function GU(n,e,t){const s=t.map(g=>g.currentWriteId),a=eR(n,e,s);let l=a;const u=a.hash();for(let g=0;g<t.length;g++){const E=t[g];ae(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const S=ii(e,E.path);l=l.updateChild(S,E.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;n.server_.put(p.toString(),f,g=>{vv(n,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const S=[];for(let w=0;w<t.length;w++)t[w].status=2,E=E.concat(eo(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&S.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();fm(n,mv(n.transactionQueueTree_,e)),Ev(n,n.transactionQueueTree_),pr(n.eventQueue_,e,E);for(let w=0;w<S.length;w++)Wl(S[w])}else{if(g==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{ai("transaction at "+p.toString()+" failed: "+g);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=g}dm(n,e)}},u)}function dm(n,e){const t=tR(n,e),s=ah(t),a=nR(n,t);return KU(n,a,s),s}function KU(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=ii(t,p.path);let E=!1,S;if(ae(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,S=p.abortReason,a=a.concat(eo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=OU)E=!0,S="maxretry",a=a.concat(eo(n.serverSyncTree_,p.currentWriteId,!0));else{const w=eR(n,p.path,u);p.currentInputSnapshot=w;const L=e[f].update(w.val());if(L!==void 0){hm("transaction failed: Data returned ",L,p.path);let q=on(L);typeof L=="object"&&L!=null&&Ds(L,".priority")||(q=q.updatePriority(w.getPriority()));const Z=p.currentWriteId,ge=_v(n),_e=HI(q,w,ge);p.currentOutputSnapshotRaw=q,p.currentOutputSnapshotResolved=_e,p.currentWriteId=ZI(n),u.splice(u.indexOf(Z),1),a=a.concat(zI(n.serverSyncTree_,p.path,_e,p.currentWriteId,p.applyLocally)),a=a.concat(eo(n.serverSyncTree_,Z,!0))}else E=!0,S="nodata",a=a.concat(eo(n.serverSyncTree_,p.currentWriteId,!0))}pr(n.eventQueue_,t,a),a=[],E&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(S==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(S),!1,null))))}fm(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Wl(s[f]);Ev(n,n.transactionQueueTree_)}function tR(n,e){let t,s=n.transactionQueueTree_;for(t=Ge(e);t!==null&&Xl(s)===void 0;)s=mv(s,t),e=It(e),t=Ge(e);return s}function nR(n,e){const t=[];return iR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function iR(n,e,t){const s=Xl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);um(e,a=>{iR(n,a,t)})}function fm(n,e){const t=Xl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,GI(e,t.length>0?t:void 0)}um(e,s=>{fm(n,s)})}function sR(n,e){const t=ah(tR(n,e)),s=mv(n.transactionQueueTree_,e);return vU(s,a=>{zg(n,a)}),zg(n,s),YI(s,a=>{zg(n,a)}),t}function zg(n,e){const t=Xl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ae(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(ae(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(eo(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?GI(e,void 0):t.length=l+1,pr(n.eventQueue_,ah(e),a);for(let u=0;u<s.length;u++)Wl(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function QU(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ai(`Invalid query segment '${t}' in query '${n}'`)}return e}const Sw=function(n,e){const t=WU(n),s=t.namespace;t.domain==="firebase.com"&&mr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&mr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||n4();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new uI(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new yt(t.pathString)}},WU=function(n){let e="",t="",s="",a="",l="",u=!0,f="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(E,S)),E<S&&(a=YU(n.substring(E,S)));const w=QU(n.substring(Math.min(n.length,S)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const L=e.slice(0,g);if(L.toLowerCase()==="localhost")t="localhost";else if(L.split(".").length<=2)t=L;else{const q=e.indexOf(".");s=e.substring(0,q).toLowerCase(),t=e.substring(q+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+bn(this.snapshot.exportVal())}}class XU{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ae(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Zs;return jU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){du("OnDisconnect.remove",this._path);const e=new Zs;return Tw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){du("OnDisconnect.set",this._path),O_("OnDisconnect.set",e,this._path);const t=new Zs;return Tw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){du("OnDisconnect.setWithPriority",this._path),O_("OnDisconnect.setWithPriority",e,this._path),CU("OnDisconnect.setWithPriority",t);const s=new Zs;return zU(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){du("OnDisconnect.update",this._path),AU("OnDisconnect.update",e,this._path);const t=new Zs;return FU(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ke(this._path)?null:Yy(this._path)}get ref(){return new va(this._repo,this._path)}get _queryIdentifier(){const e=rw(this._queryParams),t=qy(e);return t==="{}"?"default":t}get _queryObject(){return rw(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Tv))return!1;const t=this._repo===e._repo,s=Qy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+j4(this._path)}}class va extends Tv{constructor(e,t){super(e,t,new Jy,!1)}get parent(){const e=vI(this._path);return e===null?null:new va(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mf{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new yt(e),s=M_(this.ref,e);return new Mf(this._node.getChild(t),s,zt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new Mf(a,M_(this.ref,s),zt)))}hasChild(e){const t=new yt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bw(n,e){return n=mt(n),n._checkNotDeleted("ref"),e!==void 0?M_(n._root,e):n._root}function M_(n,e){return n=mt(n),Ge(n._path)===null?IU("child","path",e):$I("child","path",e),new va(n._repo,Qt(n._path,e))}function ej(n){return n=mt(n),new ZU(n._repo,n._path)}function ww(n,e){n=mt(n),du("set",n._path),O_("set",e,n._path);const t=new Zs;return VU(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Sv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new $U("value",this,new Mf(e.snapshotNode,new va(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new XU(this,e,t):null}matches(e){return e instanceof Sv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tj(n,e,t,s,a){const l=new JU(t,void 0),u=new Sv(l);return BU(n._repo,n,u),()=>qU(n._repo,n,u)}function nj(n,e,t,s){return tj(n,"value",e)}$3(va);nU(va);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij="FIREBASE_DATABASE_EMULATOR_HOST",k_={};let sj=!1;function rj(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=yo(l);n.repoInfo_=new uI(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function aj(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||mr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Sw(l,a),f=u.repoInfo,p;typeof process<"u"&&Fb&&(p=Fb[ij]),p?(l=`http://${p}?ns=${f.namespace}`,u=Sw(l,a),f=u.repoInfo):u.repoInfo.secure;const g=new f4(n.name,n.options,e);RU("Invalid Firebase Database URL",u),Ke(u.path)||mr("Database URL must point to the root of a Firebase Database (not including a child path).");const E=lj(f,n,g,new d4(n,t));return new cj(E,n)}function oj(n,e){const t=k_[e];(!t||t[n.key]!==n)&&mr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),HU(n),delete t[n.key]}function lj(n,e,t,s){let a=k_[e.name];a||(a={},k_[e.name]=a);let l=a[n.toURLString()];return l&&mr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new MU(n,sj,t,s),a[n.toURLString()]=l,l}class cj{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new va(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mr("Cannot call "+e+" on a deleted database.")}}function uj(n=qu(),e){const t=ma(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qw("database");s&&hj(t,...s)}return t}function hj(n,e,t,s={}){n=mt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&lr(s,l.repoInfo_.emulatorOptions))return;mr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&mr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new $d($d.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Xw(s.mockUserToken,n.app.options.projectId);u=new $d(f)}yo(e)&&q_(e),rj(l,a,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dj(n){$V(vo),Zi(new ki("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return aj(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ri(Bb,qb,n),ri(Bb,qb,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fj={".sv":"timestamp"};function Aw(){return fj}or.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};or.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};dj();const mj={apiKey:"AIzaSyA1SSHyqPe0qUodvjLEsLof0mUN-Z70Hqc",authDomain:"vocalsalvosporcristo-70e5f.firebaseapp.com",databaseURL:"https://vocalsalvosporcristo-70e5f-default-rtdb.firebaseio.com",projectId:"vocalsalvosporcristo-70e5f",storageBucket:"vocalsalvosporcristo-70e5f.firebasestorage.app",messagingSenderId:"867220919903",appId:"1:867220919903:web:b769416ea3d76bb508adea",measurementId:"G-MPT7K3FKVL"},mm=xD().length?qu():sA(mj),Dn=iM(mm),Ea=kV(mm),Cw=uj(mm);Hx(Dn,OA).catch(()=>{});typeof window>"u"||["localhost","127.0.0.1"].includes(window.location.hostname)?Promise.resolve(null):Ak().then(n=>n?bk(mm):null).catch(()=>null);const Iw="admin",Rw="admin@vocalsalvosporcristo.app",rR="admin",aR="admin123",pj=["Maestro","Secretário","Vice-Secretário"],pm=["Adicionar músicas","Adicionar avisos","Adicionar datas de ensaios","Adicionar documentos e partituras","Cadastrar membros","Postar avisos","Alterar dados","Mexer na agenda","Comentar"],bv=["Ver músicas","Receber avisos, ensaios e documentos","Notificar atraso ou imprevisto","Solicitar alteração de dado","Comentar em agenda e avisos"],gj=Array.from(new Set([...pm,...bv]));function fa(n){return n==="administration"||n==="direction"?n:"member"}function P_(n){return n==="member"?bv:pm}function sr(n,e){if(Array.isArray(n)){const t=n.filter(s=>typeof s=="string"&&s.trim().length>0);if(t.length>0)return Array.from(new Set(t))}return[...P_(fa(e))]}const su=[{id:"perfil",title:"Sua identidade no ministério",description:"Colete os dados principais para iniciar o cadastro com clareza e segurança."},{id:"localizacao",title:"Logística e deslocamento",description:"Organize ensaios, escalas e comunicação com base na localização do membro."},{id:"voz",title:"Perfil vocal e disponibilidade",description:"Finalize o cadastro com informações que ajudam a montar escalas melhores."}],Fg={loginEmail:"",loginPassword:"",name:"",phone:"",email:"",password:"",confirmPassword:"",cep:"",neighborhood:"",city:"",street:"",houseNumber:"",maritalStatus:"",gender:"",vocalRange:"",availability:"Terças e sábados"},_j=320,yj=7e5;function wv(n){return n.replace(/\D/g,"")}function vj(n){return{uid:n.uid,name:n.name,phone:n.phone,phoneNormalized:n.phoneNormalized,avatarDataUrl:n.avatarDataUrl,vocalRange:n.vocalRange,leadershipRole:n.leadershipRole||"",accountLevel:n.accountLevel||"member",availability:n.availability,updatedAt:ho()}}async function gm(n){await By(Ql(Ea,"memberDirectory",n.uid),vj(n),{merge:!0})}function Ej(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{e(String(s.result||""))},s.onerror=()=>{t(new Error("Não foi possível ler a imagem selecionada."))},s.readAsDataURL(n)})}function Tj(n){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("Não foi possível processar a imagem do perfil.")),s.src=n})}async function oR(n){const e=await Ej(n),t=await Tj(e),s=Math.min(1,_j/Math.max(t.width,t.height)),a=Math.max(1,Math.round(t.width*s)),l=Math.max(1,Math.round(t.height*s)),u=document.createElement("canvas");u.width=a,u.height=l;const f=u.getContext("2d");if(!f)throw new Error("Não foi possível preparar a foto do perfil.");f.drawImage(t,0,0,a,l);const p=u.toDataURL("image/jpeg",.78);if(p.length>yj)throw new Error("A foto ainda ficou grande para salvar. Use uma imagem menor.");return p}async function Sj(n,e,t){const s=Ql(Ea,"members",n.uid),a=await th(s),l=a.exists()?a.data():null,u=fa(l==null?void 0:l.accountLevel),f=sr(l==null?void 0:l.permissions,u);let p=(l==null?void 0:l.avatarDataUrl)||n.photoURL||"";t&&(p=await oR(t));const g={uid:n.uid,email:(n.email||e.email).trim().toLowerCase(),name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:wv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),avatarDataUrl:p,accountLevel:u,leadershipRole:(l==null?void 0:l.leadershipRole)||"",permissions:f,createdAt:a.exists()?a.data().createdAt:ho(),updatedAt:ho()};return await By(s,g,{merge:!0}),await gm(g),await NA(n,{displayName:g.name,photoURL:p||null}),{...g,createdAt:void 0,updatedAt:void 0}}async function lR(n){const e=await th(Ql(Ea,"members",n));return e.exists()?e.data():null}async function Nw(n){const e=Ql(Ea,"members",n.uid),t=await th(e),s=t.exists()?t.data():null,a={uid:n.uid,email:(n.email||"").trim().toLowerCase(),name:(s==null?void 0:s.name)||n.displayName||"Administrador do Vocal",phone:(s==null?void 0:s.phone)||"",phoneNormalized:(s==null?void 0:s.phoneNormalized)||"",cep:(s==null?void 0:s.cep)||"",neighborhood:(s==null?void 0:s.neighborhood)||"",city:(s==null?void 0:s.city)||"",street:(s==null?void 0:s.street)||"",houseNumber:(s==null?void 0:s.houseNumber)||"",maritalStatus:(s==null?void 0:s.maritalStatus)||"",gender:(s==null?void 0:s.gender)||"Outro",vocalRange:(s==null?void 0:s.vocalRange)||"",availability:(s==null?void 0:s.availability)||"Disponibilidade administrativa",avatarDataUrl:(s==null?void 0:s.avatarDataUrl)||n.photoURL||"",accountLevel:"administration",leadershipRole:(s==null?void 0:s.leadershipRole)||"",permissions:sr((s==null?void 0:s.permissions)||pm,"administration"),createdAt:t.exists()?t.data().createdAt:ho(),updatedAt:ho()};return await By(e,a,{merge:!0}),await gm(a),{...a,createdAt:void 0,updatedAt:void 0}}async function bj(){const n=H1(k1(Ea,"members"),G1("name"));return(await Y1(n)).docs.map(t=>t.data())}async function Dw(){const n=H1(k1(Ea,"memberDirectory"),G1("name"));return(await Y1(n)).docs.map(t=>t.data())}async function wj(n,e,t,s=!1){const a=Ql(Ea,"members",n.uid),l=await th(a);if(!l.exists())throw new Error("Perfil do membro não encontrado.");const u=l.data();let f=u.avatarDataUrl||n.photoURL||"";t&&(f=await oR(t));const p={...u,name:s?e.name.trim():u.name,phone:e.phone.trim(),phoneNormalized:wv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:s?e.maritalStatus.trim():u.maritalStatus,gender:s?e.gender.trim():u.gender,vocalRange:s?e.vocalRange.trim():u.vocalRange,availability:e.availability.trim(),avatarDataUrl:f,accountLevel:u.accountLevel,leadershipRole:u.leadershipRole,permissions:u.permissions};return await Q1(a,{name:p.name,phone:p.phone,phoneNormalized:p.phoneNormalized,cep:p.cep,neighborhood:p.neighborhood,city:p.city,street:p.street,houseNumber:p.houseNumber,maritalStatus:p.maritalStatus,gender:p.gender,vocalRange:p.vocalRange,availability:p.availability,avatarDataUrl:p.avatarDataUrl,updatedAt:ho()}),await gm(p),await NA(n,{displayName:p.name,photoURL:p.avatarDataUrl||null}),p}async function Aj(n,e){const t=Ql(Ea,"members",n);await Q1(t,{name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:wv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),accountLevel:fa(e.accountLevel),leadershipRole:e.leadershipRole.trim(),permissions:sr(e.permissions,e.accountLevel),updatedAt:ho()});const s=await th(t);s.exists()&&await gm(s.data())}function Cj(n,e){const t=bw(Cw,`presence/${n}`),s=bw(Cw,".info/connected"),a={state:"offline",displayName:e,lastChanged:Aw()},l={state:"online",displayName:e,lastChanged:Aw()},u=nj(s,f=>{f.val()===!0&&ej(t).set(a).then(()=>ww(t,l))});return()=>{u(),ww(t,a)}}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=n=>{const e=Rj(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Dj=ue.createContext({}),xj=()=>ue.useContext(Dj),Oj=ue.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...f},p)=>{const{size:g=24,strokeWidth:E=2,absoluteStrokeWidth:S=!1,color:w="currentColor",className:L=""}=xj()??{},q=s??S?Number(t??E)*24/Number(e??g):t??E;return ue.createElement("svg",{ref:p,...Bg,width:e??g??Bg.width,height:e??g??Bg.height,stroke:n??w,strokeWidth:q,className:cR("lucide",L,a),...!l&&!Nj(f)&&{"aria-hidden":"true"},...f},[...u.map(([J,Z])=>ue.createElement(J,Z)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(n,e)=>{const t=ue.forwardRef(({className:s,...a},l)=>ue.createElement(Oj,{ref:l,iconNode:e,className:cR(`lucide-${Ij(xw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=xw(n),t};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],kj=pn("arrow-left",Mj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],uR=pn("arrow-right",Pj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Vj=pn("building-2",Lj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],jj=pn("camera",Uj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fj=pn("chevron-down",zj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hR=pn("circle-question-mark",Bj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Hj=pn("house",qj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],dR=pn("key-round",Gj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],L_=pn("lock-keyhole",Kj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],fR=pn("mail",Yj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qg=pn("map-pin",Qj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],$j=pn("music",Wj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Jj=pn("phone",Xj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],e9=pn("save",Zj);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mR=pn("shield-check",t9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],i9=pn("shield-plus",n9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],r9=pn("user-round",s9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ow=pn("user",a9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pR=pn("users",o9),Av="/assets/BackGround-DJtypmwv.png";function l9({onAdminLogin:n,isSubmitting:e=!1,statusMessage:t=""}){const[s,a]=ue.useState(""),[l,u]=ue.useState(""),[f,p]=ue.useState(""),g=E=>{if(E.preventDefault(),!s.trim()||!l.trim()){p("Informe usuário e senha para entrar no painel oculto.");return}p(""),n(s.trim(),l)};return v.jsxs("div",{className:"page admin-page",children:[v.jsx("img",{className:"page-bg admin-bg-image",src:Av,alt:""}),v.jsx("div",{className:"admin-bg-overlay"}),v.jsx("div",{className:"admin-access-shell",children:v.jsxs("div",{className:"admin-access-card",children:[v.jsxs("div",{className:"admin-access-badge",children:[v.jsx(mR,{size:22,strokeWidth:2.4}),"Painel interno"]}),v.jsx("h1",{children:"Acesso administrativo"}),v.jsx("p",{children:"Entre com a credencial oculta para gerenciar contas, níveis e permissões do ministério."}),v.jsx("p",{children:"Credencial inicial: admin / admin"}),t?v.jsx("p",{className:"admin-status-message",children:t}):null,f?v.jsx("p",{className:"admin-status-message",children:f}):null,v.jsxs("form",{className:"admin-access-form",onSubmit:g,children:[v.jsxs("label",{className:"admin-input-group",children:[v.jsx("span",{children:"Usuário"}),v.jsxs("div",{className:"admin-input-shell",children:[v.jsx(r9,{size:18,strokeWidth:2.1}),v.jsx("input",{type:"text",value:s,onChange:E=>a(E.target.value),placeholder:"Usuário administrativo",disabled:e})]})]}),v.jsxs("label",{className:"admin-input-group",children:[v.jsx("span",{children:"Senha"}),v.jsxs("div",{className:"admin-input-shell",children:[v.jsx(dR,{size:18,strokeWidth:2.1}),v.jsx("input",{type:"password",value:l,onChange:E=>u(E.target.value),placeholder:"Senha administrativa",disabled:e})]})]}),v.jsx("button",{className:"admin-primary-btn",type:"submit",disabled:e,children:e?"Entrando...":"Entrar como administrador"})]})]})})]})}function c9(n){const e=fa(n.accountLevel);return{uid:n.uid,email:n.email,name:n.name,phone:n.phone,cep:n.cep,neighborhood:n.neighborhood,city:n.city,street:n.street,houseNumber:n.houseNumber,maritalStatus:n.maritalStatus,gender:n.gender,vocalRange:n.vocalRange,availability:n.availability,accountLevel:e,leadershipRole:n.leadershipRole||"",permissions:sr(n.permissions,e)}}function u9({adminName:n,members:e,isLoading:t,isSaving:s,statusMessage:a="",onRefresh:l,onSaveMember:u,onChangeAdminPassword:f,onSignOut:p}){const[g,E]=ue.useState(""),[S,w]=ue.useState({}),[L,q]=ue.useState(""),J=ue.useMemo(()=>Object.fromEntries(e.map(C=>[C.uid,c9(C)])),[e]),Z=ue.useMemo(()=>e.map(C=>S[C.uid]??J[C.uid]),[S,J,e]),ge=ue.useMemo(()=>{const C=g.trim().toLowerCase();return Z.filter(R=>C?`${R.name} ${R.email} ${R.accountLevel} ${R.leadershipRole}`.toLowerCase().includes(C):!0)},[Z,g]),_e=(C,R)=>C[R]??J[R],de=(C,R)=>{w(N=>{const x=_e(N,C);if(!x)return N;const I={...x,...R};if(R.accountLevel){const M=fa(R.accountLevel);I.accountLevel=M,M!=="direction"&&(I.leadershipRole=""),I.permissions=[...P_(M)]}return{...N,[C]:I}})},ke=(C,R)=>{w(N=>{const x=_e(N,C);if(!x)return N;const I=x.permissions.includes(R);return{...N,[C]:{...x,permissions:I?x.permissions.filter(M=>M!==R):[...x.permissions,R]}}})},Ue=C=>{w(R=>{const N=_e(R,C);return N?{...R,[C]:{...N,permissions:[...P_(N.accountLevel)]}}:R})},Ee=C=>!!S[C];return v.jsx("div",{className:"page admin-dashboard-page",children:v.jsxs("div",{className:"admin-dashboard-shell",children:[v.jsxs("header",{className:"admin-dashboard-header",children:[v.jsxs("div",{children:[v.jsx("p",{className:"admin-dashboard-eyebrow",children:"Gestão central"}),v.jsx("h1",{children:"Painel do administrador"}),v.jsxs("p",{className:"admin-dashboard-copy",children:["Sessão ativa como ",n,". Ajuste níveis, cargos, permissões e dados dos membros por aqui."]})]}),v.jsxs("div",{className:"admin-dashboard-actions",children:[v.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void l(),children:[v.jsx(pR,{size:18,strokeWidth:2.2}),"Atualizar lista"]}),v.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void p(),children:[v.jsx(mR,{size:18,strokeWidth:2.2}),"Sair"]})]})]}),v.jsxs("section",{className:"admin-password-card",children:[v.jsxs("div",{children:[v.jsx("p",{className:"admin-dashboard-eyebrow",children:"Segurança"}),v.jsx("h2",{children:"Trocar senha do administrador"})]}),v.jsxs("div",{className:"admin-password-row",children:[v.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[v.jsx(dR,{size:18,strokeWidth:2.1}),v.jsx("input",{type:"password",value:L,onChange:C=>q(C.target.value),placeholder:"Nova senha do administrador",disabled:s})]}),v.jsx("button",{type:"button",className:"admin-primary-btn",disabled:s||L.trim().length<6,onClick:()=>{f(L.trim()),q("")},children:"Atualizar senha"})]})]}),v.jsxs("section",{className:"admin-members-panel",children:[v.jsxs("div",{className:"admin-members-toolbar",children:[v.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[v.jsx(i9,{size:18,strokeWidth:2.1}),v.jsx("input",{type:"search",value:g,onChange:C=>E(C.target.value),placeholder:"Buscar membro, e-mail ou nível"})]}),a?v.jsx("p",{className:"admin-inline-status",children:a}):null]}),t?v.jsx("p",{className:"admin-empty-state",children:"Carregando contas cadastradas..."}):null,!t&&ge.length===0?v.jsx("p",{className:"admin-empty-state",children:"Nenhuma conta encontrada para esse filtro."}):null,v.jsx("div",{className:"admin-member-list",children:ge.map(C=>{const R=C.accountLevel==="direction"?["",...pj]:[""],N=C.accountLevel==="member"?bv:Array.from(new Set([...pm,...gj])),x=Ee(C.uid);return v.jsxs("article",{className:"admin-member-card",children:[v.jsxs("div",{className:"admin-member-topline",children:[v.jsxs("div",{children:[v.jsx("h2",{children:C.name||"Conta sem nome"}),v.jsx("p",{children:C.email})]}),v.jsxs("button",{type:"button",className:"admin-primary-btn",disabled:s||!x,onClick:async()=>{await u(C),w(I=>{const M={...I};return delete M[C.uid],M})},children:[v.jsx(e9,{size:16,strokeWidth:2.2}),x?"Salvar alterações":"Sem alterações"]})]}),v.jsxs("div",{className:"admin-form-grid",children:[v.jsxs("label",{children:[v.jsx("span",{children:"Nome"}),v.jsx("input",{value:C.name,onChange:I=>de(C.uid,{name:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Telefone"}),v.jsx("input",{value:C.phone,onChange:I=>de(C.uid,{phone:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Cidade"}),v.jsx("input",{value:C.city,onChange:I=>de(C.uid,{city:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Bairro"}),v.jsx("input",{value:C.neighborhood,onChange:I=>de(C.uid,{neighborhood:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Rua"}),v.jsx("input",{value:C.street,onChange:I=>de(C.uid,{street:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Número"}),v.jsx("input",{value:C.houseNumber,onChange:I=>de(C.uid,{houseNumber:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Nível"}),v.jsx("div",{className:"admin-segmented-control",role:"group","aria-label":`Definir nível de ${C.name}`,children:[["member","Membro"],["direction","Direção"],["administration","Administração"]].map(([I,M])=>{const D=C.accountLevel===I;return v.jsx("button",{type:"button",className:`admin-segment-btn${D?" is-active":""}`,"aria-pressed":D,onClick:()=>de(C.uid,{accountLevel:I}),children:M},I)})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Cargo"}),v.jsx("div",{className:"admin-role-grid",role:"group","aria-label":`Definir cargo de ${C.name}`,children:R.map(I=>v.jsx("button",{type:"button",className:`admin-role-chip${(C.leadershipRole||"")===I?" is-active":""}`,"aria-pressed":(C.leadershipRole||"")===I,disabled:C.accountLevel!=="direction"&&I!=="",onClick:()=>de(C.uid,{leadershipRole:I}),children:I||"Sem cargo"},I||"sem-cargo"))})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Gênero"}),v.jsx("input",{value:C.gender,onChange:I=>de(C.uid,{gender:I.target.value})})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Timbre"}),v.jsx("input",{value:C.vocalRange,onChange:I=>de(C.uid,{vocalRange:I.target.value})})]}),v.jsxs("label",{className:"admin-form-grid-span",children:[v.jsx("span",{children:"Disponibilidade"}),v.jsx("input",{value:C.availability,onChange:I=>de(C.uid,{availability:I.target.value})})]})]}),v.jsxs("div",{className:"admin-permission-block",children:[v.jsxs("div",{className:"admin-permission-header",children:[v.jsx("p",{children:"Permissões ativas"}),v.jsx("button",{type:"button",className:"admin-secondary-btn admin-ghost-btn",onClick:()=>Ue(C.uid),children:"Restaurar padrão"})]}),v.jsx("div",{className:"admin-permission-grid",children:N.map(I=>v.jsxs("button",{type:"button",className:`admin-permission-item${C.permissions.includes(I)?" is-active":""}`,"aria-pressed":C.permissions.includes(I),onClick:()=>ke(C.uid,I),children:[v.jsx("span",{className:"admin-permission-toggle","aria-hidden":"true"}),v.jsx("span",{children:I})]},I))})]})]},C.uid)})})]})]})})}var gR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mw=to.createContext&&to.createContext(gR),h9=["attr","size","title"];function d9(n,e){if(n==null)return{};var t,s,a=f9(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)t=l[s],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function f9(n,e){if(n==null)return{};var t={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(e.indexOf(s)!==-1)continue;t[s]=n[s]}return t}function kf(){return kf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},kf.apply(null,arguments)}function kw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,s)}return t}function Pf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kw(Object(t),!0).forEach(function(s){m9(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kw(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function m9(n,e,t){return(e=p9(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p9(n){var e=g9(n,"string");return typeof e=="symbol"?e:e+""}function g9(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _R(n){return n&&n.map((e,t)=>to.createElement(e.tag,Pf({key:t},e.attr),_R(e.child)))}function Li(n){return e=>to.createElement(_9,kf({attr:Pf({},n.attr)},e),_R(n.child))}function _9(n){var e=t=>{var{attr:s,size:a,title:l}=n,u=d9(n,h9),f=a||t.size||"1em",p;return t.className&&(p=t.className),n.className&&(p=(p?p+" ":"")+n.className),to.createElement("svg",kf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:p,style:Pf(Pf({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&to.createElement("title",null,l),n.children)};return Mw!==void 0?to.createElement(Mw.Consumer,null,t=>e(t)):e(gR)}function y9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function v9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function E9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function T9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(n)}function S9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function b9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function w9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(n)}function A9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(n)}function C9(n){return Li({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function I9(n){return Li({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M138.2 22.71c-25.5-.14-45.82 38.57-50.14 80.29H32v18h55.23c.07 6.1.49 12.1 1.33 18l17.34-18h25.5c-3.8 3.9-7.9 7.7-12.1 11.8l-31.24 32.5v-.1c-.53.6-1.1 1.2-1.64 1.8H32v18h38.17c-12.95 14.6-25.91 30.2-35.67 46H34v.8c-8.09 13.3-13.89 26.8-15.44 39.9-3.5 33.5 9.52 67.3 33.39 87.3H32v18h65.54c2.56.1 5.16.1 7.86 0h20.1c3.7 20.7 7 41.2 8.9 60 .4 3.6-6.6 10.6-10 11.4 0-22-17.8-39.9-39.84-39.9-21.9 0-39.8 17.9-39.8 39.9.1 20.1 15.2 35.8 35 39.5 41.84 7.7 78.34-17.9 72.44-53-2.9-19.1-6.2-38.5-9.7-57.9H480v-18H139.3c-2.9-15.5-5.8-30.9-8.5-46h37.3c-2.6 7.8-8.1 15.9-15.4 23l3.7 20.8c15.5-11.3 31.3-26.6 35.7-43.8H480v-18H192.9c-1.6-14.5-7.8-30.8-17.8-39.9-2.5-2.3-5.1-4.3-7.8-6.1H480v-18H116.8c-1.2-7.7-1.9-11.8-2.7-16.4l-15.54 15.1c.08.4.17.9.25 1.3H72.63c12.31-16.2 26.52-30.9 41.17-46H480v-18H130.9c10.5-11.3 20.9-23.2 30.7-36.4 2-2.8 3.8-6 5.3-9.6H480v-18H172.1c2.5-12.89 2.7-26.36 1.2-35.24-2.7-16.12-14.2-42.89-31.9-44.83-1.1-.14-2.1-.22-3.2-.22zm-5.5 37c6.9.1 14.4 5.8 15.6 15.95 1.3 11.18-.3 19.87-3.8 27.34h-36c3.4-20 11.2-42.23 24.2-43.29zM60.23 249h31.24c-13.45 12.5-19.59 29.6-18.93 46H42.79c.04-5.6.98-11.3 2.97-17 4.02-10.4 8.93-20 14.47-29zm63.57 11.3c11.8-.3 26.9 5.8 34 12.9 5.7 6.2 9.6 14.1 11.2 21.8h-41.5c-2.1-11.8-4.2-23.4-6-34.6.7-.1 1.5-.1 2.3-.1zm-19.4 6.5c1.5 8.9 3.3 18.4 5.2 28.2H90.63c.1-11 4.22-21.2 13.77-28.2zM45.75 313h30.39c2.69 7.2 6.83 13.9 12.42 19.4 5.1 5.2 15.14-2.7 10-8.6-1.93-3.5-3.54-7.1-4.81-10.8h19.35c3 15 6.1 30.5 9.1 46h-20v-.1c-25.44-3.3-48.49-22.3-56.45-45.9z"},child:[]}]})(n)}function R9(n){return Li({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(n)}function N9(n){return Li({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M16 14h.01"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M16 18h.01"},child:[]}]})(n)}const yR="/assets/LogoAD-DmeX6Ev_.png",D9=[],x9=[],Pw=[];function Vd(n){return`${n}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function O9(n){return n.trim().split(" ")[0]||n}function Ud(n){var t,s;const e=n.trim().split(/\s+/).filter(Boolean);return((((t=e[0])==null?void 0:t[0])||"V")+(((s=e[1])==null?void 0:s[0])||"")).toUpperCase()}function M9(n){return n.replace(/\D/g,"")}function Lw(n){if(!n)return"Hoje";const e=new Date(`${n}T12:00:00`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(e)}function k9(n){const e=M9(n);return e?`https://wa.me/${e.startsWith("55")?e:`55${e}`}`:""}function P9(n,e,t){const s=t==="Feminino";return n==="Secretário"?s?"Secretária":"Secretário":n==="Vice-Secretário"?s?"Vice-Secretária":"Vice-Secretário":n==="Maestro"?s?"Maestra":"Maestro":e==="administration"?s?"Administradora":"Administrador":n||"Integrante"}function Vw(n){return n.accountLevel==="administration"?"Administração":n.leadershipRole||"Membro"}function L9(n){switch(n){case"agenda":return"Buscar eventos, local ou observações";case"songs":return"Buscar músicas e observações";case"profile":return"Buscar membro, cargo ou timbre";default:return"Buscar avisos, comentários ou informações"}}function Hg(n,e,t,s){return{name:(n==null?void 0:n.name)||e,phone:(n==null?void 0:n.phone)||"",cep:(n==null?void 0:n.cep)||"",neighborhood:(n==null?void 0:n.neighborhood)||"",city:(n==null?void 0:n.city)||"",street:(n==null?void 0:n.street)||"",houseNumber:(n==null?void 0:n.houseNumber)||"",maritalStatus:(n==null?void 0:n.maritalStatus)||"",gender:(n==null?void 0:n.gender)||t,vocalRange:(n==null?void 0:n.vocalRange)||s,availability:(n==null?void 0:n.availability)||""}}function V9({memberName:n,memberGender:e,memberVocalRange:t,accountLevel:s,leadershipRole:a,permissions:l,onBackToAuth:u}){var jt;const[f,p]=ue.useState("home"),[g,E]=ue.useState(""),[S,w]=ue.useState(D9),[L,q]=ue.useState(x9),[J,Z]=ue.useState({}),[ge,_e]=ue.useState(!1),[de,ke]=ue.useState("home"),[Ue,Ee]=ue.useState(!1),[C,R]=ue.useState(!1),[N,x]=ue.useState({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:"Ensaio"}),[I,M]=ue.useState(null),[D,He]=ue.useState(()=>Hg(null,n,e,t)),[Dt,K]=ue.useState(""),[le,Te]=ue.useState(null),[Ae,Xe]=ue.useState(!1),[k,$]=ue.useState(""),[re,ce]=ue.useState([]),[Ce,Oe]=ue.useState(!1),[ze,ht]=ue.useState(""),[nt,gn]=ue.useState(""),$t=ue.useDeferredValue(g.trim().toLowerCase()),dt=Dn.currentUser,se=(dt==null?void 0:dt.uid)||"",fe=fa((I==null?void 0:I.accountLevel)||s),Re=(I==null?void 0:I.leadershipRole)||a,Ie=(I==null?void 0:I.gender)||e,V=(I==null?void 0:I.name)||n,Q=(I==null?void 0:I.vocalRange)||t,ie=P9(Re,fe,Ie),pe=O9(V),je=sr((I==null?void 0:I.permissions)??l,fe),wt=fe==="administration"||Re==="Secretário",At=fe==="administration"||Re==="Maestro"||Re==="Secretário"||Re==="Vice-Secretário"||je.includes("Postar avisos"),Rt=At||je.includes("Mexer na agenda"),hn=At||je.includes("Comentar")||je.includes("Comentar em agenda e avisos");ue.useEffect(()=>{let Y=!0;async function ve(){if(se){Oe(!0),$(""),ht("");try{const[rt,Ft]=await Promise.all([lR(se),Dw()]);if(!Y)return;M(rt),He(Hg(rt,n,e,t)),K((rt==null?void 0:rt.avatarDataUrl)||(dt==null?void 0:dt.photoURL)||""),ce(Ft)}catch{if(!Y)return;ht("Não foi possível carregar a lista de membros agora."),$("Não foi possível carregar seus dados completos agora.")}finally{Y&&Oe(!1)}}}return ve(),()=>{Y=!1}},[se,dt==null?void 0:dt.photoURL,e,n,t]);const ns=ue.useMemo(()=>$t?S.filter(Y=>[Y.category,Y.title,Y.content,Y.author,...Y.comments.map(ve=>ve.text)].join(" ").toLowerCase().includes($t)):S,[$t,S]),wn=ue.useMemo(()=>$t?L.filter(Y=>[Y.kind,Y.title,Y.location,Y.note,Y.dateLabel,...Y.comments.map(ve=>ve.text)].join(" ").toLowerCase().includes($t)):L,[L,$t]),Xt=ue.useMemo(()=>{const Y=re.filter(ve=>ve.uid!==se);return $t?Y.filter(ve=>[ve.name,ve.vocalRange,ve.leadershipRole,ve.accountLevel,ve.phone].join(" ").toLowerCase().includes($t)):Y},[se,$t,re]);ue.useEffect(()=>{if(!Xt.length){gn("");return}Xt.some(Y=>Y.uid===nt)||gn(Xt[0].uid)},[Xt,nt]);const Vt=Xt.find(Y=>Y.uid===nt)||null,Bn=wn[0]??L[0],yi=Dt||(dt==null?void 0:dt.photoURL)||(I==null?void 0:I.avatarDataUrl)||"",Os=()=>{if(f==="agenda"&&Rt)ke("agenda");else if(At)ke("home");else if(Rt)ke("agenda");else return;x({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:f==="agenda"?"Ensaio":"Aviso"}),_e(!0)},vt=Y=>{const{name:ve,value:rt}=Y.target;x(Ft=>({...Ft,[ve]:rt}))},dn=()=>{if(!(!N.title.trim()||!N.content.trim())){if(de==="agenda"){const Y={id:Vd("event"),kind:N.kind||"Ensaio",title:N.title.trim(),dateLabel:Lw(N.date),time:N.time.trim()||"19:30",location:N.location.trim()||"Local a definir",note:N.content.trim(),author:ie,comments:[]};q(ve=>[Y,...ve]),p("agenda")}else{const Y={id:Vd("post"),category:N.category||"Aviso",title:N.title.trim(),content:N.content.trim(),author:V,role:ie,dateLabel:N.date?Lw(N.date):"Agora mesmo",imageUrl:N.imageUrl.trim(),comments:[]};w(ve=>[Y,...ve]),p("home")}_e(!1)}},Kn=Y=>{var rt;const ve=(rt=J[Y])==null?void 0:rt.trim();ve&&(w(Ft=>Ft.map(Pn=>Pn.id===Y?{...Pn,comments:[...Pn.comments,{id:Vd("post-comment"),author:V,role:ie,text:ve,createdAt:"agora"}]}:Pn)),Z(Ft=>({...Ft,[Y]:""})))},Ut=Y=>{var rt;const ve=(rt=J[Y])==null?void 0:rt.trim();ve&&(q(Ft=>Ft.map(Pn=>Pn.id===Y?{...Pn,comments:[...Pn.comments,{id:Vd("agenda-comment"),author:V,role:ie,text:ve,createdAt:"agora"}]}:Pn)),Z(Ft=>({...Ft,[Y]:""})))},kn=Y=>{const{name:ve,value:rt}=Y.target;He(Ft=>({...Ft,[ve]:rt}))},gr=Y=>{var Ft;const ve=(Ft=Y.target.files)==null?void 0:Ft[0];if(!ve)return;Te(ve);const rt=new FileReader;rt.onload=()=>{K(String(rt.result||""))},rt.readAsDataURL(ve)},Ao=async()=>{if(!dt){$("Não foi possível identificar a sua sessão.");return}Xe(!0),$("");try{const Y=await wj(dt,D,le,wt),ve=await Dw();M(Y),He(Hg(Y,n,e,t)),K(Y.avatarDataUrl||""),Te(null),ce(ve),$("Perfil atualizado com sucesso.")}catch(Y){$(Y instanceof Error?Y.message:"Não foi possível atualizar seu perfil agora.")}finally{Xe(!1)}},vi=async Y=>{if(!Y.trim()){ht("Esse membro ainda não informou telefone.");return}try{await navigator.clipboard.writeText(Y),ht("Telefone copiado para a área de transferência.")}catch{ht("Não foi possível copiar o telefone agora.")}},is=(Y,ve,rt)=>hn?v.jsxs("div",{className:"home-comment-composer",children:[v.jsx("input",{type:"text",value:J[Y]||"",onChange:Ft=>Z(Pn=>({...Pn,[Y]:Ft.target.value})),placeholder:ve}),v.jsx("button",{type:"button",className:"home-inline-action",onClick:rt,children:"Comentar"})]}):v.jsx("p",{className:"home-comment-disabled",children:"Comentários liberados apenas para perfis com acesso a interação interna."});return v.jsxs("div",{className:"page page-home",children:[v.jsx("div",{className:"home-surface"}),v.jsxs("div",{className:"home-modern-shell",children:[v.jsxs("header",{className:"home-modern-header",children:[v.jsxs("div",{className:"home-identity-block",children:[v.jsx("div",{className:"home-brand-mark",children:v.jsx("img",{src:yR,alt:"Logo do vocal"})}),v.jsxs("div",{className:"home-identity-copy",children:[v.jsx("p",{className:"home-card-eyebrow",children:"Ministério em movimento"}),v.jsxs("h1",{children:["Bem-vindo, ",pe]}),v.jsxs("div",{className:"home-chip-row",children:[v.jsx("span",{className:"home-role-chip",children:ie}),Q?v.jsxs("span",{className:"home-chip",children:["Timbre ",Q]}):null]})]})]}),v.jsx("button",{className:"home-profile-trigger",type:"button","aria-label":"Abrir perfil do usuário",onClick:()=>p("profile"),children:yi?v.jsx("img",{src:yi,alt:V}):v.jsx("span",{children:Ud(V)})})]}),v.jsxs("section",{className:"home-hero-card",children:[v.jsxs("div",{children:[v.jsx("p",{className:"home-hero-kicker",children:"Painel do vocal"}),v.jsx("h2",{children:"Home e Agenda no mesmo fluxo"}),v.jsx("p",{children:"Veja avisos, publique recados, acompanhe eventos e responda rapidamente quando não puder comparecer."})]}),v.jsxs("button",{type:"button",className:"login-help-btn home-help-btn",onClick:()=>R(!0),children:[v.jsx(b9,{size:18}),"AJUDA"]})]}),v.jsx("section",{className:"home-toolbar",children:v.jsxs("label",{className:"home-search-shell","aria-label":"Buscar na tela atual",children:[v.jsx(v9,{size:18}),v.jsx("input",{type:"search",value:g,onChange:Y=>E(Y.target.value),placeholder:L9(f)})]})}),v.jsxs("section",{className:"home-summary-strip",children:[v.jsxs("article",{className:"home-summary-card modern",children:[v.jsx("span",{children:"Próximo compromisso"}),v.jsx("strong",{children:(Bn==null?void 0:Bn.title)||"Sem evento próximo"}),v.jsx("p",{children:Bn?`${Bn.dateLabel} • ${Bn.time} • ${Bn.location}`:"Ainda não existe ensaio, culto ou saída cadastrada."})]}),v.jsxs("article",{className:"home-summary-card modern",children:[v.jsx("span",{children:"Movimento do mural"}),v.jsxs("strong",{children:[S.length," publicações"]}),v.jsx("p",{children:((jt=S[0])==null?void 0:jt.title)||"Nenhum aviso ou publicação criada até agora."})]})]}),v.jsx("div",{className:"home-view-tabs",role:"tablist","aria-label":"Seções da tela inicial",children:[["home","Home"],["agenda","Agenda"],["songs","Músicas"],["profile","Usuário"]].map(([Y,ve])=>v.jsx("button",{type:"button",role:"tab","aria-selected":f===Y,className:`home-view-tab${f===Y?" is-active":""}`,onClick:()=>p(Y),children:ve},Y))}),v.jsxs("main",{className:"home-main-panel",children:[f==="home"?v.jsxs("div",{className:"home-feed-stack",children:[ns.map(Y=>v.jsxs("article",{className:"home-feed-card",children:[v.jsxs("div",{className:"home-card-topline",children:[v.jsx("span",{children:Y.category}),v.jsx("strong",{children:Y.dateLabel})]}),v.jsx("h3",{children:Y.title}),v.jsx("p",{children:Y.content}),Y.imageUrl?v.jsx("div",{className:"home-feed-media",children:v.jsx("img",{src:Y.imageUrl,alt:Y.title})}):null,v.jsxs("div",{className:"home-post-author",children:[v.jsx("span",{children:Y.author}),v.jsx("small",{children:Y.role})]}),v.jsx("div",{className:"home-comment-list",children:Y.comments.map(ve=>v.jsxs("div",{className:"home-comment-card",children:[v.jsxs("div",{children:[v.jsx("strong",{children:ve.author}),v.jsx("small",{children:ve.role})]}),v.jsx("p",{children:ve.text}),v.jsx("span",{children:ve.createdAt})]},ve.id))}),is(Y.id,"Responder ao aviso ou adicionar informação...",()=>Kn(Y.id))]},Y.id)),ns.length===0?v.jsxs("article",{className:"home-empty-card",children:[v.jsx("h3",{children:"Mural vazio"}),v.jsxs("p",{children:["Ainda não há avisos, imagens ou informações publicados.",At?" Use o botão + para criar a primeira publicação.":" Quando a liderança publicar algo, vai aparecer aqui."]})]}):null]}):null,f==="agenda"?v.jsxs("div",{className:"home-agenda-stack",children:[wn.map(Y=>v.jsxs("article",{className:"home-agenda-card",children:[v.jsxs("div",{className:"home-card-topline",children:[v.jsx("span",{children:Y.kind}),v.jsx("strong",{children:Y.dateLabel})]}),v.jsx("h3",{children:Y.title}),v.jsxs("div",{className:"home-agenda-meta",children:[v.jsx("span",{children:Y.time}),v.jsx("span",{children:Y.location}),v.jsxs("span",{children:["Lançado por ",Y.author]})]}),v.jsx("p",{children:Y.note}),v.jsx("div",{className:"home-comment-list",children:Y.comments.map(ve=>v.jsxs("div",{className:"home-comment-card agenda",children:[v.jsxs("div",{children:[v.jsx("strong",{children:ve.author}),v.jsx("small",{children:ve.role})]}),v.jsx("p",{children:ve.text}),v.jsx("span",{children:ve.createdAt})]},ve.id))}),is(Y.id,"Comentar ausência, atraso, carona ou observação...",()=>Ut(Y.id))]},Y.id)),wn.length===0?v.jsxs("article",{className:"home-empty-card",children:[v.jsx("h3",{children:"Agenda vazia"}),v.jsxs("p",{children:["Nenhum ensaio, saída ou culto foi cadastrado.",Rt?" Use o botão + para lançar o primeiro compromisso.":" Quando a agenda for atualizada, os eventos aparecerão aqui."]})]}):null]}):null,f==="songs"?v.jsxs("section",{className:"home-song-grid",children:[Pw.map(Y=>v.jsxs("article",{className:"home-song-card",children:[v.jsxs("div",{className:"home-card-topline",children:[v.jsx("span",{children:"Repertório"}),v.jsxs("strong",{children:["Tonalidade ",Y.tone]})]}),v.jsx("h3",{children:Y.title}),v.jsx("p",{children:Y.note})]},Y.id)),Pw.length===0?v.jsxs("article",{className:"home-empty-card",children:[v.jsx("h3",{children:"Repertório vazio"}),v.jsx("p",{children:"As músicas ainda não foram lançadas aqui."})]}):null]}):null,f==="profile"?v.jsxs("section",{className:"home-profile-panel",children:[v.jsxs("article",{className:"home-profile-card home-profile-summary-card",children:[v.jsxs("div",{className:"home-profile-summary",children:[v.jsxs("label",{className:"home-profile-avatar-editor",htmlFor:"profile-avatar-input",children:[yi?v.jsx("img",{src:yi,alt:V}):v.jsx("span",{children:Ud(V)}),v.jsx("span",{className:"home-profile-avatar-badge",children:v.jsx(A9,{size:14})})]}),v.jsxs("div",{className:"home-profile-summary-copy",children:[v.jsxs("div",{className:"home-card-topline compact",children:[v.jsx("span",{children:"Meu perfil"}),v.jsx("strong",{children:ie})]}),v.jsx("h3",{children:V}),v.jsx("p",{children:"Atualize foto, telefone, endereço e dados essenciais do seu cadastro."}),v.jsxs("div",{className:"home-chip-row",children:[Q?v.jsxs("span",{className:"home-chip",children:["Timbre ",Q]}):null,v.jsx("span",{className:"home-chip",children:ie})]})]})]}),v.jsx("input",{id:"profile-avatar-input",className:"hidden-input",type:"file",accept:"image/*",onChange:gr}),v.jsxs("div",{className:"home-profile-inline-actions",children:[v.jsx("label",{htmlFor:"profile-avatar-input",className:"home-secondary-action home-inline-label-btn",children:"Trocar foto"}),v.jsxs("button",{type:"button",className:"home-secondary-action",onClick:()=>Ee(!0),children:[v.jsx(R9,{size:16}),"Sair"]})]}),k?v.jsx("p",{className:"home-inline-status",children:k}):null]}),v.jsxs("article",{className:"home-profile-card home-profile-edit-card",children:[v.jsxs("div",{className:"home-card-topline compact",children:[v.jsx("span",{children:"Dados editáveis"}),v.jsx("strong",{children:wt?"Edição ampliada":"Edição básica"})]}),wt?null:v.jsx("p",{className:"home-profile-note",children:"Nome, estado civil, gênero e timbre são ajustados apenas por administração e secretaria."}),v.jsxs("div",{className:"home-profile-form-grid",children:[v.jsxs("label",{children:[v.jsx("span",{children:"Nome"}),v.jsx("input",{name:"name",value:D.name,onChange:kn,disabled:!wt||Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Telefone"}),v.jsx("input",{name:"phone",value:D.phone,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"CEP"}),v.jsx("input",{name:"cep",value:D.cep,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Bairro"}),v.jsx("input",{name:"neighborhood",value:D.neighborhood,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Cidade"}),v.jsx("input",{name:"city",value:D.city,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Rua"}),v.jsx("input",{name:"street",value:D.street,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Número"}),v.jsx("input",{name:"houseNumber",value:D.houseNumber,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Disponibilidade"}),v.jsx("input",{name:"availability",value:D.availability,onChange:kn,disabled:Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Estado civil"}),v.jsx("input",{name:"maritalStatus",value:D.maritalStatus,onChange:kn,disabled:!wt||Ae})]}),v.jsxs("label",{children:[v.jsx("span",{children:"Gênero"}),v.jsx("input",{name:"gender",value:D.gender,onChange:kn,disabled:!wt||Ae})]}),v.jsxs("label",{className:"home-profile-form-span",children:[v.jsx("span",{children:"Timbre"}),v.jsx("input",{name:"vocalRange",value:D.vocalRange,onChange:kn,disabled:!wt||Ae})]})]}),v.jsx("div",{className:"home-profile-footer",children:v.jsx("button",{type:"button",className:"home-primary-action",onClick:Ao,disabled:Ae,children:"Salvar alterações"})})]}),v.jsxs("article",{className:"home-profile-card home-directory-card",children:[v.jsxs("div",{className:"home-directory-header",children:[v.jsxs("div",{children:[v.jsx("p",{className:"home-card-eyebrow",children:"Contato interno"}),v.jsx("h3",{children:"Membros do vocal"}),v.jsx("p",{children:"Lista limitada a dados úteis para contato e organização, sem expor informações sensíveis."})]}),v.jsxs("strong",{children:[Xt.length," membros"]})]}),ze?v.jsx("p",{className:"home-inline-status",children:ze}):null,v.jsxs("div",{className:"home-directory-layout",children:[v.jsxs("div",{className:"home-directory-list",children:[Ce?v.jsx("p",{className:"home-directory-empty",children:"Carregando membros..."}):null,!Ce&&Xt.length===0?v.jsx("p",{className:"home-directory-empty",children:"Nenhum outro membro encontrado para este filtro."}):null,Xt.map(Y=>v.jsxs("button",{type:"button",className:`home-directory-item${nt===Y.uid?" is-active":""}`,onClick:()=>gn(Y.uid),children:[v.jsx("div",{className:"home-directory-avatar",children:Y.avatarDataUrl?v.jsx("img",{src:Y.avatarDataUrl,alt:Y.name}):v.jsx("span",{children:Ud(Y.name)})}),v.jsxs("div",{className:"home-directory-copy",children:[v.jsx("strong",{children:Y.name}),v.jsx("span",{children:Vw(Y)}),Y.vocalRange?v.jsxs("small",{children:["Timbre ",Y.vocalRange]}):null]})]},Y.uid))]}),v.jsx("div",{className:"home-directory-detail",children:Vt?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"home-directory-detail-header",children:[v.jsx("div",{className:"home-directory-avatar large",children:Vt.avatarDataUrl?v.jsx("img",{src:Vt.avatarDataUrl,alt:Vt.name}):v.jsx("span",{children:Ud(Vt.name)})}),v.jsxs("div",{children:[v.jsx("h4",{children:Vt.name}),v.jsx("p",{children:Vw(Vt)}),v.jsxs("div",{className:"home-chip-row",children:[Vt.vocalRange?v.jsxs("span",{className:"home-chip",children:["Timbre ",Vt.vocalRange]}):null,v.jsx("span",{className:"home-chip",children:"Contato interno"})]})]})]}),v.jsxs("div",{className:"home-directory-contact-row",children:[v.jsxs("div",{className:"home-directory-contact-card",children:[v.jsx(T9,{size:16}),v.jsx("span",{children:Vt.phone||"Telefone não informado"})]}),v.jsxs("div",{className:"home-directory-contact-actions",children:[v.jsxs("a",{className:`home-whatsapp-btn${Vt.phoneNormalized?"":" is-disabled"}`,href:Vt.phoneNormalized?k9(Vt.phoneNormalized):void 0,target:"_blank",rel:"noreferrer","aria-disabled":!Vt.phoneNormalized,onClick:Y=>{Vt.phoneNormalized||Y.preventDefault()},children:[v.jsx(C9,{size:18}),"WhatsApp"]}),v.jsxs("button",{type:"button",className:"home-secondary-action compact",onClick:()=>vi(Vt.phone),children:[v.jsx(w9,{size:15}),"Copiar número"]})]})]}),v.jsx("p",{className:"home-directory-safety-note",children:"Endereço completo e outros dados privados não aparecem aqui por segurança. Este espaço existe só para facilitar contato rápido e organização do ministério."})]}):v.jsx("p",{className:"home-directory-empty",children:"Selecione um membro para ver o contato disponível."})})]})]})]}):null]}),At||Rt?v.jsx("button",{className:"home-fab-action",type:"button","aria-label":f==="agenda"?"Criar evento":"Criar publicação",onClick:Os,children:v.jsx(E9,{size:24})}):null,v.jsxs("nav",{className:"home-bottom-nav","aria-label":"Navegação principal",children:[v.jsxs("button",{className:`nav-icon-btn${f==="home"?" is-active":""}`,type:"button","aria-label":"Home",onClick:()=>p("home"),children:[v.jsx(S9,{size:22}),v.jsx("span",{children:"Home"})]}),v.jsxs("button",{className:`nav-icon-btn${f==="agenda"?" is-active":""}`,type:"button","aria-label":"Agenda",onClick:()=>p("agenda"),children:[v.jsx(N9,{size:22}),v.jsx("span",{children:"Agenda"})]}),v.jsxs("button",{className:`nav-icon-btn${f==="songs"?" is-active":""}`,type:"button","aria-label":"Músicas",onClick:()=>p("songs"),children:[v.jsx(I9,{size:24}),v.jsx("span",{children:"Músicas"})]}),v.jsxs("button",{className:`nav-icon-btn${f==="profile"?" is-active":""}`,type:"button","aria-label":"Usuário",onClick:()=>p("profile"),children:[v.jsx(y9,{size:22}),v.jsx("span",{children:"Usuário"})]})]})]}),ge?v.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>_e(!1),children:v.jsxs("div",{className:"home-modal-card",role:"dialog","aria-modal":"true",onClick:Y=>Y.stopPropagation(),children:[v.jsxs("div",{className:"home-modal-header",children:[v.jsxs("div",{children:[v.jsx("p",{className:"home-card-eyebrow",children:"Criação rápida"}),v.jsx("h3",{children:de==="agenda"?"Novo evento da agenda":"Nova publicação do mural"})]}),v.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>_e(!1),children:"Fechar"})]}),de==="home"?v.jsxs("div",{className:"home-modal-form",children:[v.jsx("div",{className:"home-pill-row",children:["Aviso","Informação","Imagem"].map(Y=>v.jsx("button",{type:"button",className:`home-pill-btn${N.category===Y?" is-active":""}`,onClick:()=>x(ve=>({...ve,category:Y})),children:Y},Y))}),v.jsx("input",{name:"title",value:N.title,onChange:vt,placeholder:"Título da publicação"}),v.jsx("textarea",{name:"content",value:N.content,onChange:vt,placeholder:"Escreva o aviso, a informação ou instrução para o vocal",rows:5}),v.jsx("input",{name:"date",type:"date",value:N.date,onChange:vt}),v.jsx("input",{name:"imageUrl",value:N.imageUrl,onChange:vt,placeholder:"URL de imagem opcional"})]}):v.jsxs("div",{className:"home-modal-form",children:[v.jsx("div",{className:"home-pill-row",children:["Ensaio","Saída","Culto"].map(Y=>v.jsx("button",{type:"button",className:`home-pill-btn${N.kind===Y?" is-active":""}`,onClick:()=>x(ve=>({...ve,kind:Y})),children:Y},Y))}),v.jsx("input",{name:"title",value:N.title,onChange:vt,placeholder:"Título do compromisso"}),v.jsx("textarea",{name:"content",value:N.content,onChange:vt,placeholder:"Detalhes, observações e instruções para a equipe",rows:5}),v.jsx("input",{name:"date",type:"date",value:N.date,onChange:vt}),v.jsx("input",{name:"time",type:"time",value:N.time,onChange:vt}),v.jsx("input",{name:"location",value:N.location,onChange:vt,placeholder:"Local do ensaio, saída ou culto"})]}),v.jsxs("div",{className:"home-modal-actions",children:[v.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>_e(!1),children:"Cancelar"}),v.jsx("button",{type:"button",className:"home-primary-action",onClick:dn,children:"Publicar"})]})]})}):null,C?v.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>R(!1),children:v.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:Y=>Y.stopPropagation(),children:[v.jsxs("div",{className:"home-modal-header",children:[v.jsxs("div",{children:[v.jsx("p",{className:"home-card-eyebrow",children:"Ajuda rápida"}),v.jsx("h3",{children:"Como usar essa tela"})]}),v.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>R(!1),children:"Fechar"})]}),v.jsxs("div",{className:"home-help-list",children:[v.jsx("p",{children:"No Home você vê avisos, imagens e recados internos."}),v.jsx("p",{children:"Na Agenda você acompanha ensaios, saídas e horários com espaço para justificar ausência."}),v.jsx("p",{children:"Na aba Usuário você atualiza seu perfil e encontra os contatos internos liberados para o ministério."})]})]})}):null,Ue?v.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>Ee(!1),children:v.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:Y=>Y.stopPropagation(),children:[v.jsx("div",{className:"home-modal-header",children:v.jsxs("div",{children:[v.jsx("p",{className:"home-card-eyebrow",children:"Encerrar sessão"}),v.jsx("h3",{children:"Deseja realmente sair?"})]})}),v.jsx("p",{className:"home-logout-copy",children:"Você vai voltar para a tela de autenticação e precisará entrar novamente para continuar."}),v.jsxs("div",{className:"home-modal-actions",children:[v.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>Ee(!1),children:"Cancelar"}),v.jsx("button",{type:"button",className:"home-primary-action danger",onClick:()=>{Ee(!1),u()},children:"Sair agora"})]})]})}):null]})}const Uw="/assets/Login_Logo-BH4BrKrM.png";function U9(){return v.jsx("span",{className:"google-mark","aria-hidden":"true",children:"G"})}function j9({form:n,errors:e,onFieldChange:t,onErrorsChange:s,onLogin:a,onGoogleLogin:l,onOpenRegister:u,isSubmitting:f=!1,statusMessage:p=""}){const g=E=>{E.preventDefault();const S={};n.loginEmail.trim()||(S.loginEmail="Informe o e-mail ou telefone."),n.loginPassword.trim()||(S.loginPassword="Informe sua senha."),s(S),!(Object.keys(S).length>0)&&a()};return v.jsxs("div",{className:"page page-login",children:[v.jsx("img",{className:"page-bg login-bg-image",src:Av,alt:""}),v.jsx("div",{className:"login-bg-overlay"}),v.jsxs("div",{className:"login-content",children:[v.jsx("header",{className:"login-brand-block",children:v.jsx("div",{className:"login-brand-logo-wrap",style:{"--login-logo-image":`url(${Uw})`},children:v.jsx("img",{className:"login-brand-logo",src:Uw,alt:"Vocal Salvos por Cristo"})})}),v.jsxs("form",{className:"login-card",onSubmit:g,children:[v.jsxs("div",{className:"login-card-header",children:[v.jsx("h1",{children:"Entrar"}),v.jsx("p",{children:"Entre com seu e-mail ou com Google. Se faltar algo no perfil, você confirma no cadastro."})]}),p?v.jsx("p",{className:"login-status-message",children:p}):null,v.jsxs("label",{className:`login-input-group ${e.loginEmail?"is-error":""}`,children:[v.jsx("span",{className:"login-input-label",children:"Email"}),v.jsxs("div",{className:"login-input-shell",children:[v.jsx(fR,{size:18,strokeWidth:2.2}),v.jsx("input",{type:"email",name:"loginEmail",value:n.loginEmail,onChange:t,placeholder:"Email cadastrado",autoComplete:"email",disabled:f})]}),e.loginEmail?v.jsx("p",{className:"login-field-error",children:e.loginEmail}):null]}),v.jsxs("label",{className:`login-input-group ${e.loginPassword?"is-error":""}`,children:[v.jsx("span",{className:"login-input-label",children:"Senha"}),v.jsxs("div",{className:"login-input-shell",children:[v.jsx(L_,{size:18,strokeWidth:2.2}),v.jsx("input",{type:"password",name:"loginPassword",value:n.loginPassword,onChange:t,placeholder:"Senha",autoComplete:"current-password",disabled:f})]}),e.loginPassword?v.jsx("p",{className:"login-field-error",children:e.loginPassword}):null]}),v.jsxs("div",{className:"login-actions",children:[v.jsxs("button",{type:"submit",className:"login-submit-btn",disabled:f,children:[f?"Entrando...":"Entrar no painel",v.jsx(uR,{size:18,strokeWidth:2.5})]}),v.jsxs("div",{className:"login-divider","aria-hidden":"true",children:[v.jsx("span",{}),v.jsx("small",{children:"ou"}),v.jsx("span",{})]}),v.jsxs("button",{type:"button",className:"login-google-btn",onClick:()=>{l()},disabled:f,children:[v.jsx(U9,{}),f?"Aguarde...":"Continuar com Google"]}),v.jsx("button",{type:"button",className:"login-register-btn-modern",onClick:u,disabled:f,children:"Criar conta"})]})]}),v.jsxs("button",{type:"button",className:"login-help-btn",disabled:f,children:[v.jsx(hR,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})}var Xd={exports:{}},jd={exports:{}},jw;function z9(){return jw||(jw=1,(function(n,e){var t=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof s<"u")return s;throw new Error("unable to locate global object")},s=t();n.exports=e=s.fetch,s.fetch&&(e.default=s.fetch.bind(s)),e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response})(jd,jd.exports)),jd.exports}var F9=Xd.exports,zw;function B9(){return zw||(zw=1,(function(n,e){(function(t,s){n.exports=s(z9())})(F9,function(t){function s(V){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Q){return typeof Q}:function(Q){return Q&&typeof Symbol=="function"&&Q.constructor===Symbol&&Q!==Symbol.prototype?"symbol":typeof Q})(V)}function a(V,Q){if(!(V instanceof Q))throw new TypeError("Cannot call a class as a function")}function l(V,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Super expression must either be null or a function");V.prototype=Object.create(Q&&Q.prototype,{constructor:{value:V,writable:!0,configurable:!0}}),Q&&f(V,Q)}function u(V){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(Q){return Q.__proto__||Object.getPrototypeOf(Q)})(V)}function f(V,Q){return(f=Object.setPrototypeOf||function(ie,pe){return ie.__proto__=pe,ie})(V,Q)}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function g(V,Q,ie){return(g=p()?Reflect.construct:function(pe,je,wt){var At=[null];At.push.apply(At,je);var Rt=new(Function.bind.apply(pe,At));return wt&&f(Rt,wt.prototype),Rt}).apply(null,arguments)}function E(V){var Q=typeof Map=="function"?new Map:void 0;return(E=function(ie){if(ie===null||(pe=ie,Function.toString.call(pe).indexOf("[native code]")===-1))return ie;var pe;if(typeof ie!="function")throw new TypeError("Super expression must either be null or a function");if(Q!==void 0){if(Q.has(ie))return Q.get(ie);Q.set(ie,je)}function je(){return g(ie,arguments,u(this).constructor)}return je.prototype=Object.create(ie.prototype,{constructor:{value:je,enumerable:!1,writable:!0,configurable:!0}}),f(je,ie)})(V)}function S(V,Q){return!Q||typeof Q!="object"&&typeof Q!="function"?(function(ie){if(ie===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ie})(V):Q}function w(V){var Q=p();return function(){var ie,pe=u(V);return S(this,Q?(ie=u(this).constructor,Reflect.construct(pe,arguments,ie)):pe.apply(this,arguments))}}function L(V){return(function(Q){if(Array.isArray(Q))return J(Q)})(V)||(function(Q){if(typeof Symbol<"u"&&Symbol.iterator in Object(Q))return Array.from(Q)})(V)||q(V)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function q(V,Q){if(V){if(typeof V=="string")return J(V,Q);var ie=Object.prototype.toString.call(V).slice(8,-1);return ie==="Object"&&V.constructor&&(ie=V.constructor.name),ie==="Map"||ie==="Set"?Array.from(V):ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie)?J(V,Q):void 0}}function J(V,Q){(Q==null||Q>V.length)&&(Q=V.length);for(var ie=0,pe=new Array(Q);ie<Q;ie++)pe[ie]=V[ie];return pe}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var Z=(function(){l(Q,E(Error));var V=w(Q);function Q(){var ie,pe=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},je=pe.message,wt=pe.type,At=pe.errors;return a(this,Q),(ie=V.call(this)).name="CepPromiseError",ie.message=je,ie.type=wt,ie.errors=At,ie}return Q})(),ge=(function(){l(Q,E(Error));var V=w(Q);function Q(){var ie,pe=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},je=pe.message,wt=pe.service;return a(this,Q),(ie=V.call(this)).name="ServiceError",ie.message=je,ie.service=wt,ie}return Q})();function _e(V,Q){var ie={method:"POST",body:`<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
  <soapenv:Header />
  <soapenv:Body>
    <cli:consultaCEP>
      <cep>`.concat(V,`</cep>
    </cli:consultaCEP>
  </soapenv:Body>
</soapenv:Envelope>`),headers:{"Content-Type":"text/xml;charset=UTF-8","cache-control":"no-cache"},timeout:Q.timeout||3e4};return t("https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",ie).then(de).catch(R)}function de(V){return V.ok?V.text().then(ke).then(C):V.text().then(Ue).then(Ee)}function ke(V){try{var Q;return((Q=V.replace(/\r?\n|\r/g,"").match(/<return>(.*)<\/return>/)[0])!==null&&Q!==void 0?Q:"").replace("<return>","").replace("</return>","").split(/</).reduce(function(ie,pe){var je=pe.split(">");return 1<je.length&&je[1].length&&(ie[je[0]]=je[1]),ie},{})}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function Ue(V){try{var Q;return((Q=V.match(/<faultstring>(.*)<\/faultstring>/)[0])!==null&&Q!==void 0?Q:"").replace("<faultstring>","").replace("</faultstring>","")}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function Ee(V){throw new Error(V)}function C(V){return{cep:V.cep,state:V.uf,city:V.cidade,neighborhood:V.bairro,street:V.end,service:"correios"}}function R(V){var Q=new ge({message:V.message,service:"correios"});throw V.name==="FetchError"&&(Q.message="Erro ao se conectar com o serviço dos Correios."),Q}function N(V,Q){var ie={method:"POST",mode:"cors",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8",Referer:"https://buscacepinter.correios.com.br/app/endereco/index.php","Referrer-Policy":"strict-origin-when-cross-origin"},body:"endereco=".concat(V,"&tipoCEP=ALL"),timeout:Q.timeout||3e4};return t("https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php",ie).then(x).then(I).catch(M)}function x(V){return V.json().then(function(Q){if(Q.total===0||Q.erro||Q.dados[0].cep==="")throw new Error("CEP não encontrado na base dos Correios.");return Q})}function I(V){var Q=V.dados[0];return{cep:Q.cep,state:Q.uf,city:Q.localidade,neighborhood:Q.bairro,street:Q.logradouroDNEC,service:"correios-alt"}}function M(V){var Q=new ge({message:V.message,service:"correios-alt"});throw V.name==="FetchError"&&(Q.message="Erro ao se conectar com o serviço dos Correios Alt."),Q}function D(V,Q){var ie="https://viacep.com.br/ws/".concat(V,"/json/"),pe={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:Q.timeout||3e4};return typeof window>"u"&&(pe.headers["user-agent"]="cep-promise"),t(ie,pe).then(He).then(Dt).then(K).catch(le)}function He(V){if(V.ok)return V.json();throw Error("Erro ao se conectar com o serviço ViaCEP.")}function Dt(V){if(V.erro===!0)throw new Error("CEP não encontrado na base do ViaCEP.");return V}function K(V){return{cep:V.cep.replace("-",""),state:V.uf,city:V.localidade,neighborhood:V.bairro,street:V.logradouro,service:"viacep"}}function le(V){var Q=new ge({message:V.message,service:"viacep"});throw V.name==="FetchError"&&(Q.message="Erro ao se conectar com o serviço ViaCEP."),Q}function Te(V,Q){var ie="".concat(V.slice(0,5),"-").concat(V.slice(5)),pe="https://cdn.apicep.com/file/apicep/".concat(ie,".json"),je={method:"GET",mode:"cors",headers:{accept:"application/json"},timeout:Q.timeout||3e4};return t(pe,je).then(Ae).then(Xe).then(k).catch($)}function Ae(V){if(V.ok)return V.json();throw Error("Erro ao se conectar com o serviço WideNet.")}function Xe(V){if(V.ok===!1||V.status!==200)throw new Error("CEP não encontrado na base do WideNet.");return V}function k(V){return{cep:V.code.replace("-",""),state:V.state,city:V.city,neighborhood:V.district,street:V.address,service:"widenet"}}function $(V){var Q=new ge({message:V.message,service:"widenet"});throw V.name==="FetchError"&&(Q.message="Erro ao se conectar com o serviço WideNet."),Q}function re(V,Q){var ie="https://brasilapi.com.br/api/cep/v1/".concat(V),pe={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:Q.timeout||3e4};return t(ie,pe).then(ce).then(Ce).catch(Oe)}function ce(V){if(V.ok===!1||V.status!==200)throw new Error("CEP não encontrado na base do BrasilAPI.");return V.json()}function Ce(V){return{cep:V.cep,state:V.state,city:V.city,neighborhood:V.neighborhood,street:V.street,service:"brasilapi"}}function Oe(V){var Q=new ge({message:V.message,service:"brasilapi"});throw V.name==="FetchError"&&(Q.message="Erro ao se conectar com o serviço BrasilAPI."),Q}function ze(){return typeof window<"u"?{viacep:D,widenet:Te,brasilapi:re}:{correios:_e,"correios-alt":N,viacep:D,widenet:Te,brasilapi:re}}function ht(V){return new Promise(function(Q,ie){return Promise.resolve(V).then(ie,Q)})}Promise.any=function(V){return ht(Promise.all(L(V).map(ht)))};var nt=Promise,gn=8;function $t(V){var Q=s(V);if(Q==="number"||Q==="string")return V;throw new Z({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"Você deve chamar o construtor utilizando uma String ou um Number.",service:"cep_validation"}]})}function dt(V){return V.toString().replace(/\D+/g,"")}function se(V){return"0".repeat(gn-V.length)+V}function fe(V){if(V.length<=gn)return V;throw new Z({message:"CEP deve conter exatamente ".concat(gn," caracteres."),type:"validation_error",errors:[{message:"CEP informado possui mais do que ".concat(gn," caracteres."),service:"cep_validation"}]})}function Re(V){throw V.length!==void 0?new Z({message:"Todos os serviços de CEP retornaram erro.",type:"service_error",errors:V}):V}function Ie(V){var Q=V.message,ie=V.type,pe=V.errors;throw new Z({message:Q,type:ie,errors:pe})}return function(V){var Q=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return nt.resolve(V).then($t).then(function(ie){return Q.providers=Q.providers?Q.providers:[],(function(pe){var je=Object.keys(ze());if(!Array.isArray(pe))throw new Z({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"O parâmetro providers deve ser uma lista.",service:"providers_validation"}]});var wt,At=(function(hn,ns){var wn;if(typeof Symbol>"u"||hn[Symbol.iterator]==null){if(Array.isArray(hn)||(wn=q(hn))||ns){wn&&(hn=wn);var Xt=0,Vt=function(){};return{s:Vt,n:function(){return Xt>=hn.length?{done:!0}:{done:!1,value:hn[Xt++]}},e:function(vt){throw vt},f:Vt}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bn,yi=!0,Os=!1;return{s:function(){wn=hn[Symbol.iterator]()},n:function(){var vt=wn.next();return yi=vt.done,vt},e:function(vt){Os=!0,Bn=vt},f:function(){try{yi||wn.return==null||wn.return()}finally{if(Os)throw Bn}}}})(pe);try{for(At.s();!(wt=At.n()).done;){var Rt=wt.value;if(!je.includes(Rt))throw new Z({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:'O provider "'.concat(Rt,'" é inválido. Os providers disponíveis são: ["').concat(je.join('", "'),'"].'),service:"providers_validation"}]})}}catch(hn){At.e(hn)}finally{At.f()}})(Q.providers),ie}).then(dt).then(fe).then(se).then(function(ie){return pe=ie,je=Q,wt=ze(),je.providers.length!==0?nt.any(je.providers.map(function(At){return wt[At](pe,je)})):nt.any(Object.values(wt).map(function(At){return At(pe,je)}));var pe,je,wt}).catch(Re).catch(Ie)}})})(Xd)),Xd.exports}var q9=B9();const H9=Bw(q9);function Ss({label:n,name:e,type:t="text",value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g,icon:E,error:S}){return v.jsxs("label",{className:"register-field-group",children:[v.jsx("span",{className:"register-field-label",children:n}),v.jsxs("span",{className:`register-field-shell ${S?"is-error":""}`,children:[v.jsx(E,{size:18,strokeWidth:2.2}),v.jsx("input",{type:t,name:e,value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g})]}),S?v.jsx("span",{className:"register-field-error",children:S}):null]})}function G9(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function Fw(n){const e=n.replace(/\D/g,"").slice(0,8);return e.length<=5?e:`${e.slice(0,5)}-${e.slice(5)}`}function Gg({label:n,name:e,value:t,onChange:s,options:a,placeholder:l,icon:u,error:f}){return v.jsxs("label",{className:"register-field-group",children:[v.jsx("span",{className:"register-field-label",children:n}),v.jsxs("span",{className:`register-field-shell register-select-shell ${f?"is-error":""}`,children:[v.jsx(u,{size:18,strokeWidth:2.2}),v.jsxs("select",{name:e,value:t,onChange:s,className:t?"has-value":"",children:[v.jsx("option",{value:"",children:l}),a.map(p=>v.jsx("option",{value:p,children:p},p))]}),v.jsx(Fj,{size:18,strokeWidth:2.3})]}),f?v.jsx("span",{className:"register-field-error",children:f}):null]})}function K9(n,e,t=!1){const s={};return n===0&&(e.name.trim()||(s.name="Informe o nome completo."),e.phone.trim()||(s.phone="Informe um telefone para contato."),e.email.trim()||(s.email="Informe um e-mail válido."),t||(e.password.trim()||(s.password="Crie uma senha."),e.password.length>0&&e.password.length<6&&(s.password="A senha precisa ter pelo menos 6 caracteres."),e.confirmPassword!==e.password&&(s.confirmPassword="As senhas precisam ser iguais."))),n===1&&(e.cep.trim()||(s.cep="Informe o CEP."),e.neighborhood.trim()||(s.neighborhood="Informe o bairro."),e.city.trim()||(s.city="Informe a cidade."),e.street.trim()||(s.street="Informe a rua."),e.houseNumber.trim()||(s.houseNumber="Informe o número da casa.")),n===2&&(e.maritalStatus||(s.maritalStatus="Selecione o estado civil."),e.gender||(s.gender="Selecione o gênero."),e.vocalRange||(s.vocalRange="Selecione o timbre vocal.")),s}function Y9({form:n,errors:e,registerStep:t,avatarPreview:s,onFieldChange:a,onErrorsChange:l,onStepChange:u,onAvatarChange:f,onOpenLogin:p,onRegisterFinish:g,isSubmitting:E=!1,statusMessage:S="",profileCompletionMode:w=!1,googleProfileMode:L=!1}){const q=su[t],[J,Z]=ue.useState(""),[ge,_e]=ue.useState(!1),de=ue.useRef(""),ke=(x,I)=>{a({target:{name:x,value:I},currentTarget:{name:x,value:I}})},Ue=async x=>{if(!(x.length!==8||de.current===x)){de.current=x,_e(!0),Z("Buscando endereço pelo CEP...");try{const I=await H9(x);ke("cep",Fw(x)),ke("neighborhood",I.neighborhood||""),ke("city",I.city||""),ke("street",I.street||""),l(M=>({...M,cep:"",neighborhood:"",city:"",street:""})),Z("Endereço preenchido automaticamente. Confirme os dados antes de continuar.")}catch{de.current="",l(I=>({...I,cep:"Não encontramos esse CEP. Confira os números digitados."})),Z("CEP não localizado. Você ainda pode preencher o endereço manualmente.")}finally{_e(!1)}}},Ee=x=>{if(x.target.name==="phone"){const I=G9(x.target.value);a({...x,target:{...x.target,name:x.target.name,value:I},currentTarget:{...x.currentTarget,name:x.target.name,value:I}});return}if(x.target.name==="cep"){const I=Fw(x.target.value),M=I.replace(/\D/g,"");a({...x,target:{...x.target,name:x.target.name,value:I},currentTarget:{...x.currentTarget,name:x.target.name,value:I}}),M.length<8&&(de.current="",Z(""),_e(!1)),M.length===8&&Ue(M);return}a(x)},C=()=>{if(t===0){p();return}u(t-1)},R=()=>{const x=K9(t,n,w);if(l(x),!(Object.keys(x).length>0)){if(t<su.length-1){u(t+1);return}g(n.name||"Novo membro")}},N=()=>t===0?v.jsxs(v.Fragment,{children:[w?v.jsxs("div",{className:"register-prefill-note",children:[v.jsx("strong",{children:L?"Conta Google conectada":"Conta autenticada"}),v.jsx("p",{children:"Revise os dados preenchidos automaticamente e complete o que estiver faltando antes de finalizar."})]}):null,v.jsx(Ss,{label:"Nome",name:"name",value:n.name,onChange:Ee,placeholder:"Seu nome completo",autoComplete:"name",icon:Ow,error:e.name}),v.jsx(Ss,{label:"Telefone",name:"phone",type:"tel",value:n.phone,onChange:Ee,placeholder:"(00) 0 0000-0000",autoComplete:"tel",inputMode:"numeric",maxLength:16,icon:Jj,error:e.phone}),v.jsx(Ss,{label:"E-mail",name:"email",type:"email",value:n.email,onChange:Ee,placeholder:"voce@email.com",autoComplete:"email",disabled:w,icon:fR,error:e.email}),w?null:v.jsxs(v.Fragment,{children:[v.jsx(Ss,{label:v.jsxs(v.Fragment,{children:["Senha ",v.jsx("span",{className:"required-star",children:"*"})]}),name:"password",type:"password",value:n.password,onChange:Ee,placeholder:"Mín. 6 caracteres",autoComplete:"new-password",icon:L_,error:e.password}),v.jsx(Ss,{label:"Confirmar senha",name:"confirmPassword",type:"password",value:n.confirmPassword,onChange:Ee,placeholder:"Repita a senha",autoComplete:"new-password",icon:L_,error:e.confirmPassword})]})]}):t===1?v.jsxs(v.Fragment,{children:[v.jsx(Ss,{label:"CEP",name:"cep",value:n.cep,onChange:Ee,placeholder:"00000-000",inputMode:"numeric",maxLength:9,icon:qg,error:e.cep}),J?v.jsx("p",{className:`register-field-note ${ge?"is-loading":""}`,children:J}):null,v.jsx(Ss,{label:"Bairro",name:"neighborhood",value:n.neighborhood,onChange:Ee,placeholder:"Seu bairro",icon:qg,error:e.neighborhood}),v.jsx(Ss,{label:"Cidade",name:"city",value:n.city,onChange:Ee,placeholder:"Cidade",icon:Vj,error:e.city}),v.jsx(Ss,{label:"Rua",name:"street",value:n.street,onChange:Ee,placeholder:"Rua e complemento",icon:qg,error:e.street}),v.jsx(Ss,{label:"Número da casa",name:"houseNumber",value:n.houseNumber,onChange:Ee,placeholder:"Número da casa",icon:Hj,error:e.houseNumber})]}):v.jsxs(v.Fragment,{children:[v.jsx(Gg,{label:"Estado civil",name:"maritalStatus",value:n.maritalStatus,onChange:Ee,placeholder:"Selecione",options:["Solteiro(a)","Casado(a)","Divorciado(a)","Viúvo(a)"],icon:pR,error:e.maritalStatus}),v.jsx(Gg,{label:"Gênero",name:"gender",value:n.gender,onChange:Ee,placeholder:"Selecione",options:["Masculino","Feminino","Outro"],icon:Ow,error:e.gender}),v.jsx(Gg,{label:v.jsxs(v.Fragment,{children:["Timbre vocal ",v.jsx("span",{className:"required-star",children:"*"})]}),name:"vocalRange",value:n.vocalRange,onChange:Ee,placeholder:"Selecione o timbre",options:["Soprano","Mezzo-soprano","Contralto","Tenor","Barítono","Baixo"],icon:$j,error:e.vocalRange}),v.jsxs("label",{className:"register-field-group register-avatar-field",children:[v.jsx("span",{className:"register-field-label",children:"Foto de perfil"}),v.jsxs("span",{className:"register-avatar-shell",children:[v.jsx("span",{className:"register-avatar-preview",children:s?v.jsx("img",{src:s,alt:"Avatar do integrante"}):v.jsx("span",{className:"register-avatar-fallback",children:n.name?n.name.slice(0,1).toUpperCase():"V"})}),v.jsxs("span",{className:"register-avatar-copy",children:[v.jsx("strong",{children:"Adicione uma foto"}),v.jsx("small",{children:"Escolha uma imagem clara para identificar o integrante no vocal."})]}),v.jsxs("span",{className:"register-avatar-action",children:[v.jsx(jj,{size:18,strokeWidth:2.2}),"Escolher imagem"]})]}),v.jsx("input",{type:"file",accept:"image/*",className:"hidden-input",onChange:f})]})]});return v.jsxs("div",{className:"page page-register page-register-modern",children:[v.jsx("img",{className:"page-bg register-bg-image",src:Av,alt:""}),v.jsx("div",{className:"register-bg-overlay"}),v.jsxs("div",{className:"register-content",children:[v.jsxs("div",{className:"register-topbar",children:[v.jsx("button",{className:"register-back-btn",type:"button",onClick:C,"aria-label":"Voltar",children:v.jsx(kj,{size:20,strokeWidth:2.4})}),v.jsxs("div",{className:"register-heading",children:[v.jsx("span",{className:"register-eyebrow",children:"Criar conta"}),v.jsx("h1",{children:q.title}),v.jsx("p",{children:q.description})]})]}),v.jsx("div",{className:"register-steps-bar",children:su.map((x,I)=>v.jsxs("div",{className:`register-step-pill ${I===t?"is-active":""} ${I<t?"is-done":""}`,children:[v.jsx("span",{children:I+1}),v.jsx("small",{children:x.id})]},x.id))}),v.jsx("div",{className:"register-form-scroll",children:v.jsxs("div",{className:"register-form-stack",children:[S?v.jsx("p",{className:"register-status-message",children:S}):null,N()]})}),v.jsxs("div",{className:"register-bottom-bar",children:[v.jsxs("span",{className:"register-progress-copy",children:["Etapa ",t+1," de ",su.length]}),v.jsxs("div",{className:"register-actions-row",children:[t>0?v.jsx("button",{type:"button",className:"register-secondary-btn",onClick:C,disabled:E,children:"Voltar"}):null,v.jsxs("button",{type:"button",className:"register-primary-btn",onClick:R,disabled:E,children:[E?"Salvando...":t===su.length-1?"Finalizar cadastro":"Continuar",v.jsx(uR,{size:18,strokeWidth:2.4})]})]}),v.jsxs("div",{className:"register-help-stack",children:[v.jsx("img",{className:"register-ad-logo",src:yR,alt:"Assembleia de Deus"}),v.jsxs("button",{type:"button",className:"register-help-btn",disabled:E,children:[v.jsx(hR,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})]})]})}const Q9="/acesso-interno-admin";function ru(n){switch(n){case"auth/email-already-in-use":return"Esse e-mail já está em uso.";case"auth/invalid-email":return"Informe um e-mail válido.";case"auth/user-disabled":return"Essa conta está desativada.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"E-mail ou senha inválidos.";case"auth/weak-password":return"A senha precisa ter pelo menos 6 caracteres.";case"auth/network-request-failed":return"Falha de conexão. Verifique sua internet e tente novamente.";case"auth/popup-closed-by-user":return"O login com Google foi fechado antes da conclusão.";case"auth/cancelled-popup-request":return"Já existe uma janela de login aberta. Conclua ou feche a anterior.";case"auth/account-exists-with-different-credential":return"Esse e-mail já está vinculado a outro método de acesso.";default:return"Não foi possível concluir a autenticação agora."}}function W9(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function $9(){var n;return(n=Dn.currentUser)==null?void 0:n.providerData.some(e=>e.providerId==="google.com")}function X9(n){return n===rR?aR:n}function J9(){const n=typeof window<"u"&&window.location.pathname.toLowerCase().startsWith(Q9),[e,t]=ue.useState("login"),[s,a]=ue.useState(0),[l,u]=ue.useState("Maria Clara"),[f,p]=ue.useState(""),[g,E]=ue.useState(""),[S,w]=ue.useState("member"),[L,q]=ue.useState(""),[J,Z]=ue.useState([]),[ge,_e]=ue.useState(""),[de,ke]=ue.useState(null),[Ue,Ee]=ue.useState({...Fg}),[C,R]=ue.useState({}),[N,x]=ue.useState(!1),[I,M]=ue.useState(""),[D,He]=ue.useState(!1),[Dt,K]=ue.useState([]),[le,Te]=ue.useState(!1),Ae=async()=>{Te(!0);try{const se=await bj();K(se)}catch{M("Não foi possível carregar a lista de membros agora.")}finally{Te(!1)}},Xe=se=>{const fe=Dn.currentUser,Re=fe!=null&&fe.phoneNumber?W9(fe.phoneNumber):"";Ee(Ie=>({...Ie,loginEmail:(fe==null?void 0:fe.email)||Ie.loginEmail,name:(se==null?void 0:se.name)??Ie.name,phone:(se==null?void 0:se.phone)??Re??Ie.phone,email:(se==null?void 0:se.email)??(fe==null?void 0:fe.email)??Ie.email,password:se==null?void 0:se.password,confirmPassword:se==null?void 0:se.confirmPassword,cep:(se==null?void 0:se.cep)??Ie.cep,neighborhood:(se==null?void 0:se.neighborhood)??Ie.neighborhood,city:(se==null?void 0:se.city)??Ie.city,street:(se==null?void 0:se.street)??Ie.street,houseNumber:(se==null?void 0:se.houseNumber)??Ie.houseNumber,maritalStatus:(se==null?void 0:se.maritalStatus)??Ie.maritalStatus,gender:(se==null?void 0:se.gender)??Ie.gender,vocalRange:(se==null?void 0:se.vocalRange)??Ie.vocalRange,availability:(se==null?void 0:se.availability)??Ie.availability})),_e((fe==null?void 0:fe.photoURL)||""),ke(null)};ue.useEffect(()=>{let se;const fe=Yx(Dn,async Re=>{var Ie;if(se==null||se(),se=void 0,!Re){He(!1),u("Maria Clara"),p(""),E(""),w("member"),q(""),Z([]),K([]),t("login");return}try{const V=await lR(Re.uid),Q=await Re.getIdTokenResult(),ie=fa(typeof Q.claims.accountLevel=="string"?Q.claims.accountLevel:V==null?void 0:V.accountLevel),pe=typeof Q.claims.leadershipRole=="string"?Q.claims.leadershipRole:(V==null?void 0:V.leadershipRole)||"";if(!V){const wt=Re.providerData.some(At=>At.providerId==="google.com");He(!0),a(0),R({}),Xe({name:Re.displayName||"",email:Re.email||"",password:"",confirmPassword:""}),M(wt?"Encontramos nome, e-mail e foto da sua conta Google. Confirme e complete o restante do cadastro.":"Sua conta foi autenticada, mas o perfil do ministério ainda precisa ser concluído."),ue.startTransition(()=>{t("register")});return}const je=V.name||Re.displayName||((Ie=Re.email)==null?void 0:Ie.split("@")[0])||"Integrante do vocal";He(!1),u(je),p(V.gender||""),E(V.vocalRange||""),w(ie),q(pe),Z(sr(V.permissions,ie)),_e(V.avatarDataUrl||Re.photoURL||""),M(""),n&&ie==="administration"&&await Ae(),ue.startTransition(()=>{t(n&&ie==="administration"?"admin":"home")}),se=Cj(Re.uid,je)}catch{M("Sua sessão foi iniciada, mas o perfil não pôde ser carregado agora.")}});return()=>{fe(),se==null||se()}},[n]);const k=se=>{const{name:fe,value:Re}=se.target;Ee(Ie=>({...Ie,[fe]:Re})),R(Ie=>({...Ie,[fe]:""}))},$=()=>{if(Dn.currentUser){wg(Dn).finally(()=>{He(!1),_e(""),ke(null),Z([]),Ee({...Fg}),ue.startTransition(()=>{t("login"),M(""),R({})})});return}He(!1),ue.startTransition(()=>{t("login"),M(""),R({})})},re=()=>{He(!1),ue.startTransition(()=>{t("register"),a(0),M(""),R({})})},ce=async()=>{x(!0),M("");try{await wg(Dn),He(!1),p(""),E(""),w("member"),q(""),Z([]),K([]),Ee(se=>({...se,loginPassword:""})),a(0),R({})}catch{M("Não foi possível encerrar a sessão agora.")}finally{x(!1)}},Ce=se=>{var Ie;const fe=(Ie=se.target.files)==null?void 0:Ie[0];if(!fe)return;ke(fe);const Re=new FileReader;Re.onload=()=>{_e(String(Re.result||""))},Re.readAsDataURL(fe)},Oe=async()=>{const se=Ue.loginEmail.trim().toLowerCase();if(!se.includes("@")){R(fe=>({...fe,loginEmail:"Use o e-mail cadastrado para entrar com Firebase."}));return}x(!0),M("");try{await wS(Dn,se,Ue.loginPassword),Ee(fe=>({...fe,loginPassword:""}))}catch(fe){const Re=fe instanceof Error&&"code"in fe?String(fe.code):"",Ie=ru(Re);R(V=>({...V,loginPassword:Ie}))}finally{x(!1)}},ze=async()=>{const se=new er;se.setCustomParameters({prompt:"select_account"}),x(!0),M(""),R({});try{await dO(Dn,se),Ee(fe=>({...fe,loginPassword:""}))}catch(fe){const Re=fe instanceof Error&&"code"in fe?String(fe.code):"";M(ru(Re))}finally{x(!1)}},ht=async()=>{x(!0),M("");try{const se=Dn.currentUser,fe=D&&se?se:(await bS(Dn,Ue.email.trim().toLowerCase(),Ue.password)).user,Re=await Sj(fe,Ue,de),Ie=await fe.getIdTokenResult(),V=fa(typeof Ie.claims.accountLevel=="string"?Ie.claims.accountLevel:Re.accountLevel);He(!1),u(Re.name),p(Re.gender||""),E(Re.vocalRange||""),w(V),q(typeof Ie.claims.leadershipRole=="string"?Ie.claims.leadershipRole:Re.leadershipRole||""),Z(sr(Re.permissions,V)),_e(Re.avatarDataUrl||""),ke(null),M(""),Ee({...Fg,loginEmail:Re.email}),ue.startTransition(()=>{t(n&&V==="administration"?"admin":"home")})}catch(se){const fe=se instanceof Error&&"code"in se?String(se.code):"",Re=ru(fe);fe==="auth/email-already-in-use"||fe==="auth/invalid-email"?R(Ie=>({...Ie,email:Re})):fe==="auth/weak-password"?R(Ie=>({...Ie,password:Re})):M(Re)}finally{x(!1)}},nt=async(se,fe)=>{if(Dn.currentUser&&await wg(Dn),se!==Iw){M("Usuário administrativo inválido.");return}x(!0),M("");const Re=X9(fe);try{const Ie=await wS(Dn,Rw,Re),V=await Nw(Ie.user);u(V.name),w("administration"),Z(sr(V.permissions,"administration")),await Ae(),ue.startTransition(()=>{t("admin")})}catch(Ie){const V=Ie instanceof Error&&"code"in Ie?String(Ie.code):"";if(!(se===Iw&&fe===rR&&(V==="auth/user-not-found"||V==="auth/invalid-credential"))){M(ru(V)),x(!1);return}try{const ie=await bS(Dn,Rw,aR),pe=await Nw(ie.user);u(pe.name),w("administration"),Z(sr(pe.permissions,"administration")),await Ae(),M("Conta administrativa inicial criada. Troque a senha assim que entrar."),ue.startTransition(()=>{t("admin")})}catch(ie){const pe=ie instanceof Error&&"code"in ie?String(ie.code):"";M(pe==="auth/email-already-in-use"?"A conta administrativa já existe. Use a senha atual definida para esse acesso.":ru(pe))}}finally{x(!1)}},gn=async se=>{const fe=Dn.currentUser;if(!fe){M("A sessão administrativa não está ativa.");return}x(!0),M("");try{await Bx(fe,se),M("Senha administrativa atualizada com sucesso.")}catch{M("Não foi possível atualizar a senha agora. Faça login novamente e tente outra vez.")}finally{x(!1)}},$t=async se=>{x(!0),M("");try{await Aj(se.uid,se),await Ae(),M("Conta atualizada com sucesso.")}catch{M("Não foi possível salvar as alterações desse membro.")}finally{x(!1)}};let dt;return n&&e!=="register"?e==="admin"&&S==="administration"?dt=v.jsx(u9,{adminName:l,members:Dt,isLoading:le,isSaving:N,statusMessage:I,onRefresh:Ae,onSaveMember:$t,onChangeAdminPassword:gn,onSignOut:ce}):dt=v.jsx(l9,{onAdminLogin:nt,isSubmitting:N,statusMessage:I}):e==="home"?dt=v.jsx(V9,{memberName:l,memberGender:f,memberVocalRange:g,accountLevel:S,leadershipRole:L,permissions:J,onBackToAuth:ce}):e==="register"?dt=v.jsx(Y9,{form:Ue,errors:C,registerStep:s,avatarPreview:ge,onFieldChange:k,onErrorsChange:R,onStepChange:a,onAvatarChange:Ce,onOpenLogin:$,onRegisterFinish:ht,isSubmitting:N,statusMessage:I,profileCompletionMode:D,googleProfileMode:!!(D&&$9())}):dt=v.jsx(j9,{form:Ue,errors:C,onFieldChange:k,onErrorsChange:R,onLogin:Oe,onGoogleLogin:ze,onOpenRegister:re,isSubmitting:N,statusMessage:I}),v.jsx("div",{className:"app-shell",children:dt})}function Z9(){return v.jsx(J9,{})}const vR=document.getElementById("root");if(!vR)throw new Error("Root element #root was not found.");r2.createRoot(vR).render(v.jsx(ue.StrictMode,{children:v.jsx(Z9,{})}));
