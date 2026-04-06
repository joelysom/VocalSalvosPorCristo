(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function I_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wp={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function HI(){if(IT)return eu;IT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return eu.Fragment=e,eu.jsx=t,eu.jsxs=t,eu}var NT;function GI(){return NT||(NT=1,Wp.exports=HI()),Wp.exports}var _=GI(),Yp={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT;function KI(){if(xT)return Pe;xT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),A=Symbol.iterator;function V(P){return P===null||typeof P!="object"?null:(P=A&&P[A]||P["@@iterator"],typeof P=="function"?P:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Y={};function pe(P,J,ce){this.props=P,this.context=J,this.refs=Y,this.updater=ce||H}pe.prototype.isReactComponent={},pe.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},pe.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ue(){}ue.prototype=pe.prototype;function le(P,J,ce){this.props=P,this.context=J,this.refs=Y,this.updater=ce||H}var Ee=le.prototype=new ue;Ee.constructor=le,Z(Ee,pe.prototype),Ee.isPureReactComponent=!0;var Me=Array.isArray;function de(){}var C={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function N(P,J,ce){var fe=ce.ref;return{$$typeof:n,type:P,key:J,ref:fe!==void 0?fe:null,props:ce}}function x(P,J){return N(P.type,J,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return J[ce]})}var D=/\/+/g;function Oe(P,J){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):J.toString(36)}function Ce(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(de,de):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,J,ce,fe,Ae){var Re=typeof P;(Re==="undefined"||Re==="boolean")&&(P=null);var ze=!1;if(P===null)ze=!0;else switch(Re){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(P.$$typeof){case n:case e:ze=!0;break;case E:return ze=P._init,U(ze(P._payload),J,ce,fe,Ae)}}if(ze)return Ae=Ae(P),ze=fe===""?"."+Oe(P,0):fe,Me(Ae)?(ce="",ze!=null&&(ce=ze.replace(D,"$&/")+"/"),U(Ae,J,ce,"",function(Sn){return Sn})):Ae!=null&&(I(Ae)&&(Ae=x(Ae,ce+(Ae.key==null||P&&P.key===Ae.key?"":(""+Ae.key).replace(D,"$&/")+"/")+ze)),J.push(Ae)),1;ze=0;var lt=fe===""?".":fe+":";if(Me(P))for(var Ve=0;Ve<P.length;Ve++)fe=P[Ve],Re=lt+Oe(fe,Ve),ze+=U(fe,J,ce,Re,Ae);else if(Ve=V(P),typeof Ve=="function")for(P=Ve.call(P),Ve=0;!(fe=P.next()).done;)fe=fe.value,Re=lt+Oe(fe,Ve++),ze+=U(fe,J,ce,Re,Ae);else if(Re==="object"){if(typeof P.then=="function")return U(Ce(P),J,ce,fe,Ae);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ze}function re(P,J,ce){if(P==null)return P;var fe=[],Ae=0;return U(P,fe,"","",function(Re){return J.call(ce,Re,Ae++)}),fe}function _e(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var Ne=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Fe={map:re,forEach:function(P,J,ce){re(P,function(){J.apply(this,arguments)},ce)},count:function(P){var J=0;return re(P,function(){J++}),J},toArray:function(P){return re(P,function(J){return J})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Pe.Activity=S,Pe.Children=Fe,Pe.Component=pe,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=le,Pe.StrictMode=s,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return C.H.useMemoCache(P)}},Pe.cache=function(P){return function(){return P.apply(null,arguments)}},Pe.cacheSignal=function(){return null},Pe.cloneElement=function(P,J,ce){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var fe=Z({},P.props),Ae=P.key;if(J!=null)for(Re in J.key!==void 0&&(Ae=""+J.key),J)!R.call(J,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&J.ref===void 0||(fe[Re]=J[Re]);var Re=arguments.length-2;if(Re===1)fe.children=ce;else if(1<Re){for(var ze=Array(Re),lt=0;lt<Re;lt++)ze[lt]=arguments[lt+2];fe.children=ze}return N(P.type,Ae,fe)},Pe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Pe.createElement=function(P,J,ce){var fe,Ae={},Re=null;if(J!=null)for(fe in J.key!==void 0&&(Re=""+J.key),J)R.call(J,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Ae[fe]=J[fe]);var ze=arguments.length-2;if(ze===1)Ae.children=ce;else if(1<ze){for(var lt=Array(ze),Ve=0;Ve<ze;Ve++)lt[Ve]=arguments[Ve+2];Ae.children=lt}if(P&&P.defaultProps)for(fe in ze=P.defaultProps,ze)Ae[fe]===void 0&&(Ae[fe]=ze[fe]);return N(P,Re,Ae)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(P){return{$$typeof:f,render:P}},Pe.isValidElement=I,Pe.lazy=function(P){return{$$typeof:E,_payload:{_status:-1,_result:P},_init:_e}},Pe.memo=function(P,J){return{$$typeof:g,type:P,compare:J===void 0?null:J}},Pe.startTransition=function(P){var J=C.T,ce={};C.T=ce;try{var fe=P(),Ae=C.S;Ae!==null&&Ae(ce,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(de,Ne)}catch(Re){Ne(Re)}finally{J!==null&&ce.types!==null&&(J.types=ce.types),C.T=J}},Pe.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Pe.use=function(P){return C.H.use(P)},Pe.useActionState=function(P,J,ce){return C.H.useActionState(P,J,ce)},Pe.useCallback=function(P,J){return C.H.useCallback(P,J)},Pe.useContext=function(P){return C.H.useContext(P)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(P,J){return C.H.useDeferredValue(P,J)},Pe.useEffect=function(P,J){return C.H.useEffect(P,J)},Pe.useEffectEvent=function(P){return C.H.useEffectEvent(P)},Pe.useId=function(){return C.H.useId()},Pe.useImperativeHandle=function(P,J,ce){return C.H.useImperativeHandle(P,J,ce)},Pe.useInsertionEffect=function(P,J){return C.H.useInsertionEffect(P,J)},Pe.useLayoutEffect=function(P,J){return C.H.useLayoutEffect(P,J)},Pe.useMemo=function(P,J){return C.H.useMemo(P,J)},Pe.useOptimistic=function(P,J){return C.H.useOptimistic(P,J)},Pe.useReducer=function(P,J,ce){return C.H.useReducer(P,J,ce)},Pe.useRef=function(P){return C.H.useRef(P)},Pe.useState=function(P){return C.H.useState(P)},Pe.useSyncExternalStore=function(P,J,ce){return C.H.useSyncExternalStore(P,J,ce)},Pe.useTransition=function(){return C.H.useTransition()},Pe.version="19.2.4",Pe}var DT;function N_(){return DT||(DT=1,Yp.exports=KI()),Yp.exports}var se=N_();const oo=I_(se);var Qp={exports:{}},tu={},$p={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT;function WI(){return MT||(MT=1,(function(n){function e(U,re){var _e=U.length;U.push(re);e:for(;0<_e;){var Ne=_e-1>>>1,Fe=U[Ne];if(0<a(Fe,re))U[Ne]=re,U[_e]=Fe,_e=Ne;else break e}}function t(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var re=U[0],_e=U.pop();if(_e!==re){U[0]=_e;e:for(var Ne=0,Fe=U.length,P=Fe>>>1;Ne<P;){var J=2*(Ne+1)-1,ce=U[J],fe=J+1,Ae=U[fe];if(0>a(ce,_e))fe<Fe&&0>a(Ae,ce)?(U[Ne]=Ae,U[fe]=_e,Ne=fe):(U[Ne]=ce,U[J]=_e,Ne=J);else if(fe<Fe&&0>a(Ae,_e))U[Ne]=Ae,U[fe]=_e,Ne=fe;else break e}}return re}function a(U,re){var _e=U.sortIndex-re.sortIndex;return _e!==0?_e:U.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var p=[],g=[],E=1,S=null,A=3,V=!1,H=!1,Z=!1,Y=!1,pe=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function Ee(U){for(var re=t(g);re!==null;){if(re.callback===null)s(g);else if(re.startTime<=U)s(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(g)}}function Me(U){if(Z=!1,Ee(U),!H)if(t(p)!==null)H=!0,de||(de=!0,O());else{var re=t(g);re!==null&&Ce(Me,re.startTime-U)}}var de=!1,C=-1,R=5,N=-1;function x(){return Y?!0:!(n.unstable_now()-N<R)}function I(){if(Y=!1,de){var U=n.unstable_now();N=U;var re=!0;try{e:{H=!1,Z&&(Z=!1,ue(C),C=-1),V=!0;var _e=A;try{t:{for(Ee(U),S=t(p);S!==null&&!(S.expirationTime>U&&x());){var Ne=S.callback;if(typeof Ne=="function"){S.callback=null,A=S.priorityLevel;var Fe=Ne(S.expirationTime<=U);if(U=n.unstable_now(),typeof Fe=="function"){S.callback=Fe,Ee(U),re=!0;break t}S===t(p)&&s(p),Ee(U)}else s(p);S=t(p)}if(S!==null)re=!0;else{var P=t(g);P!==null&&Ce(Me,P.startTime-U),re=!1}}break e}finally{S=null,A=_e,V=!1}re=void 0}}finally{re?O():de=!1}}}var O;if(typeof le=="function")O=function(){le(I)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Oe=D.port2;D.port1.onmessage=I,O=function(){Oe.postMessage(null)}}else O=function(){pe(I,0)};function Ce(U,re){C=pe(function(){U(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(U){switch(A){case 1:case 2:case 3:var re=3;break;default:re=A}var _e=A;A=re;try{return U()}finally{A=_e}},n.unstable_requestPaint=function(){Y=!0},n.unstable_runWithPriority=function(U,re){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var _e=A;A=U;try{return re()}finally{A=_e}},n.unstable_scheduleCallback=function(U,re,_e){var Ne=n.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?Ne+_e:Ne):_e=Ne,U){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=_e+Fe,U={id:E++,callback:re,priorityLevel:U,startTime:_e,expirationTime:Fe,sortIndex:-1},_e>Ne?(U.sortIndex=_e,e(g,U),t(p)===null&&U===t(g)&&(Z?(ue(C),C=-1):Z=!0,Ce(Me,_e-Ne))):(U.sortIndex=Fe,e(p,U),H||V||(H=!0,de||(de=!0,O()))),U},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(U){var re=A;return function(){var _e=A;A=re;try{return U.apply(this,arguments)}finally{A=_e}}}})(Xp)),Xp}var OT;function YI(){return OT||(OT=1,$p.exports=WI()),$p.exports}var Zp={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kT;function QI(){if(kT)return Vn;kT=1;var n=N_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:p,containerInfo:g,implementation:E}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,E)},Vn.flushSync=function(p){var g=u.T,E=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=g,s.p=E,s.d.f()}},Vn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Vn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Vn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:V}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:A,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Vn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=f(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Vn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Vn.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=f(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Vn.requestFormReset=function(p){s.d.r(p)},Vn.unstable_batchedUpdates=function(p,g){return p(g)},Vn.useFormState=function(p,g,E){return u.H.useFormState(p,g,E)},Vn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Vn.version="19.2.4",Vn}var PT;function $I(){if(PT)return Zp.exports;PT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Zp.exports=QI(),Zp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT;function XI(){if(LT)return tu;LT=1;var n=YI(),e=N_(),t=$I();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function p(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),i;if(m===c)return p(d),r;m=m.sibling}throw Error(s(188))}if(o.return!==c.return)o=d,c=m;else{for(var v=!1,w=d.child;w;){if(w===o){v=!0,o=d,c=m;break}if(w===c){v=!0,c=d,o=m;break}w=w.sibling}if(!v){for(w=m.child;w;){if(w===o){v=!0,o=m,c=d;break}if(w===c){v=!0,c=m,o=d;break}w=w.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function E(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=E(i),r!==null)return r;i=i.sibling}return null}var S=Object.assign,A=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),le=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function O(i){return i===null||typeof i!="object"?null:(i=I&&i[I]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function Oe(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Z:return"Fragment";case pe:return"Profiler";case Y:return"StrictMode";case Me:return"Suspense";case de:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case H:return"Portal";case le:return i.displayName||"Context";case ue:return(i._context.displayName||"Context")+".Consumer";case Ee:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case C:return r=i.displayName||null,r!==null?r:Oe(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return Oe(i(r))}catch{}}return null}var Ce=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},Ne=[],Fe=-1;function P(i){return{current:i}}function J(i){0>Fe||(i.current=Ne[Fe],Ne[Fe]=null,Fe--)}function ce(i,r){Fe++,Ne[Fe]=i.current,i.current=r}var fe=P(null),Ae=P(null),Re=P(null),ze=P(null);function lt(i,r){switch(ce(Re,r),ce(Ae,i),ce(fe,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?X0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=X0(r),i=Z0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}J(fe),ce(fe,i)}function Ve(){J(fe),J(Ae),J(Re)}function Sn(i){i.memoizedState!==null&&ce(ze,i);var r=fe.current,o=Z0(r,i.type);r!==o&&(ce(Ae,i),ce(fe,o))}function di(i){Ae.current===i&&(J(fe),J(Ae)),ze.current===i&&(J(ze),$c._currentValue=_e)}var un,fi;function wn(i){if(un===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);un=r&&r[1]||"",fi=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+un+i+fi}var Ii=!1;function hn(i,r){if(!i||Ii)return"";Ii=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch($){var W=$}Reflect.construct(i,[],ne)}else{try{ne.call()}catch($){W=$}i.call(ne.prototype)}}else{try{throw Error()}catch($){W=$}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch($){if($&&W&&typeof $.stack=="string")return[$.stack,W.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),v=m[0],w=m[1];if(v&&w){var M=v.split(`
`),G=w.split(`
`);for(d=c=0;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;for(;d<G.length&&!G[d].includes("DetermineComponentFrameRoot");)d++;if(c===M.length||d===G.length)for(c=M.length-1,d=G.length-1;1<=c&&0<=d&&M[c]!==G[d];)d--;for(;1<=c&&0<=d;c--,d--)if(M[c]!==G[d]){if(c!==1||d!==1)do if(c--,d--,0>d||M[c]!==G[d]){var X=`
`+M[c].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=c&&0<=d);break}}}finally{Ii=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?wn(o):""}function B(i,r){switch(i.tag){case 26:case 27:case 5:return wn(i.type);case 16:return wn("Lazy");case 13:return i.child!==r&&r!==null?wn("Suspense Fallback"):wn("Suspense");case 19:return wn("SuspenseList");case 0:case 15:return hn(i.type,!1);case 11:return hn(i.type.render,!1);case 1:return hn(i.type,!0);case 31:return wn("Activity");default:return""}}function k(i){try{var r="",o=null;do r+=B(i,o),o=i,i=i.return;while(i);return r}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var K=Object.prototype.hasOwnProperty,ae=n.unstable_scheduleCallback,oe=n.unstable_cancelCallback,qe=n.unstable_shouldYield,yt=n.unstable_requestPaint,nt=n.unstable_now,vt=n.unstable_getCurrentPriorityLevel,qt=n.unstable_ImmediatePriority,Xt=n.unstable_UserBlockingPriority,Pn=n.unstable_NormalPriority,zs=n.unstable_LowPriority,bn=n.unstable_IdlePriority,zt=n.log,Ht=n.unstable_setDisableYieldValue,jt=null,Ut=null;function Zn(i){if(typeof zt=="function"&&Ht(i),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(jt,i)}catch{}}var it=Math.clz32?Math.clz32:No,Bs=Math.log,mi=Math.LN2;function No(i){return i>>>=0,i===0?32:31-(Bs(i)/mi|0)|0}var Gn=256,Kn=262144,Ct=4194304;function Wn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ni(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var d=0,m=i.suspendedLanes,v=i.pingedLanes;i=i.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=Wn(c):(v&=w,v!==0?d=Wn(v):o||(o=w&~i,o!==0&&(d=Wn(o))))):(w=c&~m,w!==0?d=Wn(w):v!==0?d=Wn(v):o||(o=c&~i,o!==0&&(d=Wn(o)))),d===0?0:r!==0&&r!==d&&(r&m)===0&&(m=d&-d,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:d}function Jn(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ca(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(){var i=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),i}function ht(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yn(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function wr(i,r,o,c,d,m){var v=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,M=i.expirationTimes,G=i.hiddenUpdates;for(o=v&~o;0<o;){var X=31-it(o),ne=1<<X;w[X]=0,M[X]=-1;var W=G[X];if(W!==null)for(G[X]=null,X=0;X<W.length;X++){var $=W[X];$!==null&&($.lane&=-536870913)}o&=~ne}c!==0&&hs(i,c,0),m!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=m&~(v&~r))}function hs(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-it(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&261930}function ds(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-it(o),d=1<<c;d&r|i[c]&r&&(i[c]|=r),o&=~d}}function Ra(i,r){var o=r&-r;return o=(o&42)!==0?1:An(o),(o&(i.suspendedLanes|r))!==0?0:o}function An(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Wi(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function xo(){var i=re.p;return i!==0?i:(i=window.event,i===void 0?32:TT(i.type))}function pi(i,r){var o=re.p;try{return re.p=i,r()}finally{re.p=o}}var gi=Math.random().toString(36).slice(2),st="__reactFiber$"+gi,Zt="__reactProps$"+gi,xi="__reactContainer$"+gi,br="__reactEvents$"+gi,nc="__reactListeners$"+gi,Ia="__reactHandles$"+gi,Na="__reactResources$"+gi,F="__reactMarker$"+gi;function Se(i){delete i[st],delete i[Zt],delete i[br],delete i[nc],delete i[Ia]}function rt(i){var r=i[st];if(r)return r;for(var o=i.parentNode;o;){if(r=o[xi]||o[st]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=rT(i);i!==null;){if(o=i[st])return o;i=rT(i)}return r}i=o,o=i.parentNode}return null}function dt(i){if(i=i[st]||i[xi]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function Rt(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function fs(i){var r=i[Na];return r||(r=i[Na]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Jt(i){i[F]=!0}var ic=new Set,sc={};function ms(i,r){ps(i,r),ps(i+"Capture",r)}function ps(i,r){for(sc[i]=r,i=0;i<r.length;i++)ic.add(r[i])}var rc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ac={},oc={};function nh(i){return K.call(oc,i)?!0:K.call(ac,i)?!1:rc.test(i)?oc[i]=!0:(ac[i]=!0,!1)}function Do(i,r,o){if(nh(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function _i(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function en(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}function pn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ar(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function lc(i,r,o){var c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,m=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function pt(i){if(!i._valueTracker){var r=Ar(i)?"checked":"value";i._valueTracker=lc(i,r,""+i[r])}}function xa(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=Ar(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function gs(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Da=/[\n"\\]/g;function ei(i){return i.replace(Da,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(i,r,o,c,d,m,v,w){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),r!=null?v==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+pn(r)):i.value!==""+pn(r)&&(i.value=""+pn(r)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),r!=null?cc(i,v,pn(r)):o!=null?cc(i,v,pn(o)):c!=null&&i.removeAttribute("value"),d==null&&m!=null&&(i.defaultChecked=!!m),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+pn(w):i.removeAttribute("name")}function ih(i,r,o,c,d,m,v,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){pt(i);return}o=o!=null?""+pn(o):"",r=r!=null?""+pn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=w?i.checked:!!c,i.defaultChecked=!!c,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v),pt(i)}function cc(i,r,o){r==="number"&&gs(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Cr(i,r,o,c){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+pn(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function sh(i,r,o){if(r!=null&&(r=""+pn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+pn(o):""}function Rr(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Ce(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=pn(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c),pt(i)}function ti(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uc(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||rh.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function hc(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&o[d]!==c&&uc(i,d,c)}else for(var m in r)r.hasOwnProperty(m)&&uc(i,m,r[m])}function Oo(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ir=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(i){return Ir.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function Yi(){}var dc=null;function Di(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Nr=null,_s=null;function Ma(i){var r=dt(i);if(r&&(i=r.stateNode)){var o=i[Zt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Mo(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ei(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var d=c[Zt]||null;if(!d)throw Error(s(90));Mo(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&xa(c)}break e;case"textarea":sh(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Cr(i,!!o.multiple,r,!1)}}}var Po=!1;function xr(i,r,o){if(Po)return i(r,o);Po=!0;try{var c=i(r);return c}finally{if(Po=!1,(Nr!==null||_s!==null)&&(Jh(),Nr&&(r=Nr,i=_s,_s=Nr=null,Ma(r),i)))for(r=0;r<i.length;r++)Ma(i[r])}}function Qi(i,r){var o=i.stateNode;if(o===null)return null;var c=o[Zt]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=!1;if(Mi)try{var Et={};Object.defineProperty(Et,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Et,Et),window.removeEventListener("test",Et,Et)}catch{Oa=!1}var ys=null,fc=null,ka=null;function mc(){if(ka)return ka;var i,r=fc,o=r.length,c,d="value"in ys?ys.value:ys.textContent,m=d.length;for(i=0;i<o&&r[i]===d[i];i++);var v=o-i;for(c=1;c<=v&&r[o-c]===d[m-c];c++);return ka=d.slice(i,1<c?1-c:void 0)}function Pa(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Fs(){return!0}function $i(){return!1}function Cn(i){function r(o,c,d,m,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fs:$i,this.isPropagationStopped=$i,this}return S(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),r}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=Cn(qs),Dr=S({},qs,{view:0,detail:0}),pc=Cn(Dr),Mr,Lo,Es,Vo=S({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Or,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Es&&(Es&&i.type==="mousemove"?(Mr=i.screenX-Es.screenX,Lo=i.screenY-Es.screenY):Lo=Mr=0,Es=i),Mr)},movementY:function(i){return"movementY"in i?i.movementY:Lo}}),gc=Cn(Vo),La=S({},Vo,{dataTransfer:0}),oh=Cn(La),lh=S({},Dr,{relatedTarget:0}),Va=Cn(lh),_c=S({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Cn(_c),jo=S({},qs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),uh=Cn(jo),hh=S({},qs,{data:0}),Ts=Cn(hh),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=mh[i])?!!r[i]:!1}function Or(){return ph}var Qn=S({},Dr,{key:function(i){if(i.key){var r=dh[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Or,charCode:function(i){return i.type==="keypress"?Pa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),gh=Cn(Qn),_h=S({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=Cn(_h),h=S({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Or}),y=Cn(h),T=S({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=Cn(T),z=S({},Vo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Q=Cn(z),he=S({},qs,{newState:0,oldState:0}),je=Cn(he),Gt=[9,13,27,32],ct=Mi&&"CompositionEvent"in window,Lt=null;Mi&&"documentMode"in document&&(Lt=document.documentMode);var Oi=Mi&&"TextEvent"in window&&!Lt,Ss=Mi&&(!ct||Lt&&8<Lt&&11>=Lt),Xi=" ",Zi=!1;function ja(i,r){switch(i){case"keyup":return Gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zo=!1;function mR(i,r){switch(i){case"compositionend":return Uo(r);case"keypress":return r.which!==32?null:(Zi=!0,Xi);case"textInput":return i=r.data,i===Xi&&Zi?null:i;default:return null}}function pR(i,r){if(zo)return i==="compositionend"||!ct&&ja(i,r)?(i=mc(),ka=fc=ys=null,zo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ss&&r.locale!=="ko"?null:r.data;default:return null}}var gR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lv(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!gR[i.type]:r==="textarea"}function cv(i,r,o,c){Nr?_s?_s.push(c):_s=[c]:Nr=c,r=ad(r,"onChange"),0<r.length&&(o=new vs("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var yc=null,vc=null;function _R(i){G0(i,0)}function yh(i){var r=Rt(i);if(xa(r))return i}function uv(i,r){if(i==="change")return r}var hv=!1;if(Mi){var em;if(Mi){var tm="oninput"in document;if(!tm){var dv=document.createElement("div");dv.setAttribute("oninput","return;"),tm=typeof dv.oninput=="function"}em=tm}else em=!1;hv=em&&(!document.documentMode||9<document.documentMode)}function fv(){yc&&(yc.detachEvent("onpropertychange",mv),vc=yc=null)}function mv(i){if(i.propertyName==="value"&&yh(vc)){var r=[];cv(r,vc,i,Di(i)),xr(_R,r)}}function yR(i,r,o){i==="focusin"?(fv(),yc=r,vc=o,yc.attachEvent("onpropertychange",mv)):i==="focusout"&&fv()}function vR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return yh(vc)}function ER(i,r){if(i==="click")return yh(r)}function TR(i,r){if(i==="input"||i==="change")return yh(r)}function SR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var yi=typeof Object.is=="function"?Object.is:SR;function Ec(i,r){if(yi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!K.call(r,d)||!yi(i[d],r[d]))return!1}return!0}function pv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function gv(i,r){var o=pv(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=pv(o)}}function _v(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?_v(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function yv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=gs(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=gs(i.document)}return r}function nm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var wR=Mi&&"documentMode"in document&&11>=document.documentMode,Bo=null,im=null,Tc=null,sm=!1;function vv(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sm||Bo==null||Bo!==gs(c)||(c=Bo,"selectionStart"in c&&nm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Tc&&Ec(Tc,c)||(Tc=c,c=ad(im,"onSelect"),0<c.length&&(r=new vs("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=Bo)))}function Ua(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Fo={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},rm={},Ev={};Mi&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function za(i){if(rm[i])return rm[i];if(!Fo[i])return i;var r=Fo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Ev)return rm[i]=r[o];return i}var Tv=za("animationend"),Sv=za("animationiteration"),wv=za("animationstart"),bR=za("transitionrun"),AR=za("transitionstart"),CR=za("transitioncancel"),bv=za("transitionend"),Av=new Map,am="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");am.push("scrollEnd");function Ji(i,r){Av.set(i,r),ms(r,[i])}var vh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},ki=[],qo=0,om=0;function Eh(){for(var i=qo,r=om=qo=0;r<i;){var o=ki[r];ki[r++]=null;var c=ki[r];ki[r++]=null;var d=ki[r];ki[r++]=null;var m=ki[r];if(ki[r++]=null,c!==null&&d!==null){var v=c.pending;v===null?d.next=d:(d.next=v.next,v.next=d),c.pending=d}m!==0&&Cv(o,d,m)}}function Th(i,r,o,c){ki[qo++]=i,ki[qo++]=r,ki[qo++]=o,ki[qo++]=c,om|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function lm(i,r,o,c){return Th(i,r,o,c),Sh(i)}function Ba(i,r){return Th(i,null,null,r),Sh(i)}function Cv(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=i.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(d=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,d&&r!==null&&(d=31-it(o),i=m.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=o|536870912),m):null}function Sh(i){if(50<qc)throw qc=0,_p=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ho={};function RR(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(i,r,o,c){return new RR(i,r,o,c)}function cm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Gs(i,r){var o=i.alternate;return o===null?(o=vi(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Rv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function wh(i,r,o,c,d,m){var v=0;if(c=i,typeof i=="function")cm(i)&&(v=1);else if(typeof i=="string")v=MI(i,o,fe.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=vi(31,o,r,d),i.elementType=N,i.lanes=m,i;case Z:return Fa(o.children,d,m,r);case Y:v=8,d|=24;break;case pe:return i=vi(12,o,r,d|2),i.elementType=pe,i.lanes=m,i;case Me:return i=vi(13,o,r,d),i.elementType=Me,i.lanes=m,i;case de:return i=vi(19,o,r,d),i.elementType=de,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case le:v=10;break e;case ue:v=9;break e;case Ee:v=11;break e;case C:v=14;break e;case R:v=16,c=null;break e}v=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=vi(v,o,r,d),r.elementType=i,r.type=c,r.lanes=m,r}function Fa(i,r,o,c){return i=vi(7,i,c,r),i.lanes=o,i}function um(i,r,o){return i=vi(6,i,null,r),i.lanes=o,i}function Iv(i){var r=vi(18,null,null,0);return r.stateNode=i,r}function hm(i,r,o){return r=vi(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Nv=new WeakMap;function Pi(i,r){if(typeof i=="object"&&i!==null){var o=Nv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:k(r)},Nv.set(i,r),r)}return{value:i,source:r,stack:k(r)}}var Go=[],Ko=0,bh=null,Sc=0,Li=[],Vi=0,kr=null,ws=1,bs="";function Ks(i,r){Go[Ko++]=Sc,Go[Ko++]=bh,bh=i,Sc=r}function xv(i,r,o){Li[Vi++]=ws,Li[Vi++]=bs,Li[Vi++]=kr,kr=i;var c=ws;i=bs;var d=32-it(c)-1;c&=~(1<<d),o+=1;var m=32-it(r)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,ws=1<<32-it(r)+d|o<<d|c,bs=m+i}else ws=1<<m|o<<d|c,bs=i}function dm(i){i.return!==null&&(Ks(i,1),xv(i,1,0))}function fm(i){for(;i===bh;)bh=Go[--Ko],Go[Ko]=null,Sc=Go[--Ko],Go[Ko]=null;for(;i===kr;)kr=Li[--Vi],Li[Vi]=null,bs=Li[--Vi],Li[Vi]=null,ws=Li[--Vi],Li[Vi]=null}function Dv(i,r){Li[Vi++]=ws,Li[Vi++]=bs,Li[Vi++]=kr,ws=r.id,bs=r.overflow,kr=i}var Rn=null,xt=null,Xe=!1,Pr=null,ji=!1,mm=Error(s(519));function Lr(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wc(Pi(r,i)),mm}function Mv(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[st]=i,r[Zt]=c,o){case"dialog":Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":case"embed":Ge("load",r);break;case"video":case"audio":for(o=0;o<Gc.length;o++)Ge(Gc[o],r);break;case"source":Ge("error",r);break;case"img":case"image":case"link":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"input":Ge("invalid",r),ih(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ge("invalid",r);break;case"textarea":Ge("invalid",r),Rr(r,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||Q0(r.textContent,o)?(c.popover!=null&&(Ge("beforetoggle",r),Ge("toggle",r)),c.onScroll!=null&&Ge("scroll",r),c.onScrollEnd!=null&&Ge("scrollend",r),c.onClick!=null&&(r.onclick=Yi),r=!0):r=!1,r||Lr(i,!0)}function Ov(i){for(Rn=i.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Rn=Rn.return}}function Wo(i){if(i!==Rn)return!1;if(!Xe)return Ov(i),Xe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Mp(i.type,i.memoizedProps)),o=!o),o&&xt&&Lr(i),Ov(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));xt=sT(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));xt=sT(i)}else r===27?(r=xt,$r(i.type)?(i=Vp,Vp=null,xt=i):xt=r):xt=Rn?zi(i.stateNode.nextSibling):null;return!0}function qa(){xt=Rn=null,Xe=!1}function pm(){var i=Pr;return i!==null&&(ri===null?ri=i:ri.push.apply(ri,i),Pr=null),i}function wc(i){Pr===null?Pr=[i]:Pr.push(i)}var gm=P(null),Ha=null,Ws=null;function Vr(i,r,o){ce(gm,r._currentValue),r._currentValue=o}function Ys(i){i._currentValue=gm.current,J(gm)}function _m(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function ym(i,r,o,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var m=d.dependencies;if(m!==null){var v=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var M=0;M<r.length;M++)if(w.context===r[M]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),_m(m.return,o,i),c||(v=null);break e}m=w.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(s(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),_m(v,o,i),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Yo(i,r,o,c){i=null;for(var d=r,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=d.type;yi(d.pendingProps.value,v.value)||(i!==null?i.push(w):i=[w])}}else if(d===ze.current){if(v=d.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push($c):i=[$c])}d=d.return}i!==null&&ym(r,i,o,c),r.flags|=262144}function Ah(i){for(i=i.firstContext;i!==null;){if(!yi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ga(i){Ha=i,Ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function In(i){return kv(Ha,i)}function Ch(i,r){return Ha===null&&Ga(i),kv(i,r)}function kv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ws===null){if(i===null)throw Error(s(308));Ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ws=Ws.next=r;return o}var IR=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},NR=n.unstable_scheduleCallback,xR=n.unstable_NormalPriority,tn={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vm(){return{controller:new IR,data:new Map,refCount:0}}function bc(i){i.refCount--,i.refCount===0&&NR(xR,function(){i.controller.abort()})}var Ac=null,Em=0,Qo=0,$o=null;function DR(i,r){if(Ac===null){var o=Ac=[];Em=0,Qo=wp(),$o={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Em++,r.then(Pv,Pv),r}function Pv(){if(--Em===0&&Ac!==null){$o!==null&&($o.status="fulfilled");var i=Ac;Ac=null,Qo=0,$o=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function MR(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Lv=U.S;U.S=function(i,r){v0=nt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&DR(i,r),Lv!==null&&Lv(i,r)};var Ka=P(null);function Tm(){var i=Ka.current;return i!==null?i:At.pooledCache}function Rh(i,r){r===null?ce(Ka,Ka.current):ce(Ka,r.pool)}function Vv(){var i=Tm();return i===null?null:{parent:tn._currentValue,pool:i}}var Xo=Error(s(460)),Sm=Error(s(474)),Ih=Error(s(542)),Nh={then:function(){}};function jv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Uv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Yi,Yi),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(Yi,Yi);else{if(i=At,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw Ya=r,Xo}}function Wa(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ya=o,Xo):o}}var Ya=null;function zv(){if(Ya===null)throw Error(s(459));var i=Ya;return Ya=null,i}function Bv(i){if(i===Xo||i===Ih)throw Error(s(483))}var Zo=null,Cc=0;function xh(i){var r=Cc;return Cc+=1,Zo===null&&(Zo=[]),Uv(Zo,i,r)}function Rc(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Dh(i,r){throw r.$$typeof===A?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Fv(i){function r(j,L){if(i){var q=j.deletions;q===null?(j.deletions=[L],j.flags|=16):q.push(L)}}function o(j,L){if(!i)return null;for(;L!==null;)r(j,L),L=L.sibling;return null}function c(j){for(var L=new Map;j!==null;)j.key!==null?L.set(j.key,j):L.set(j.index,j),j=j.sibling;return L}function d(j,L){return j=Gs(j,L),j.index=0,j.sibling=null,j}function m(j,L,q){return j.index=q,i?(q=j.alternate,q!==null?(q=q.index,q<L?(j.flags|=67108866,L):q):(j.flags|=67108866,L)):(j.flags|=1048576,L)}function v(j){return i&&j.alternate===null&&(j.flags|=67108866),j}function w(j,L,q,ee){return L===null||L.tag!==6?(L=um(q,j.mode,ee),L.return=j,L):(L=d(L,q),L.return=j,L)}function M(j,L,q,ee){var we=q.type;return we===Z?X(j,L,q.props.children,ee,q.key):L!==null&&(L.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===R&&Wa(we)===L.type)?(L=d(L,q.props),Rc(L,q),L.return=j,L):(L=wh(q.type,q.key,q.props,null,j.mode,ee),Rc(L,q),L.return=j,L)}function G(j,L,q,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=hm(q,j.mode,ee),L.return=j,L):(L=d(L,q.children||[]),L.return=j,L)}function X(j,L,q,ee,we){return L===null||L.tag!==7?(L=Fa(q,j.mode,ee,we),L.return=j,L):(L=d(L,q),L.return=j,L)}function ne(j,L,q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=um(""+L,j.mode,q),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return q=wh(L.type,L.key,L.props,null,j.mode,q),Rc(q,L),q.return=j,q;case H:return L=hm(L,j.mode,q),L.return=j,L;case R:return L=Wa(L),ne(j,L,q)}if(Ce(L)||O(L))return L=Fa(L,j.mode,q,null),L.return=j,L;if(typeof L.then=="function")return ne(j,xh(L),q);if(L.$$typeof===le)return ne(j,Ch(j,L),q);Dh(j,L)}return null}function W(j,L,q,ee){var we=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return we!==null?null:w(j,L,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return q.key===we?M(j,L,q,ee):null;case H:return q.key===we?G(j,L,q,ee):null;case R:return q=Wa(q),W(j,L,q,ee)}if(Ce(q)||O(q))return we!==null?null:X(j,L,q,ee,null);if(typeof q.then=="function")return W(j,L,xh(q),ee);if(q.$$typeof===le)return W(j,L,Ch(j,q),ee);Dh(j,q)}return null}function $(j,L,q,ee,we){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return j=j.get(q)||null,w(L,j,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return j=j.get(ee.key===null?q:ee.key)||null,M(L,j,ee,we);case H:return j=j.get(ee.key===null?q:ee.key)||null,G(L,j,ee,we);case R:return ee=Wa(ee),$(j,L,q,ee,we)}if(Ce(ee)||O(ee))return j=j.get(q)||null,X(L,j,ee,we,null);if(typeof ee.then=="function")return $(j,L,q,xh(ee),we);if(ee.$$typeof===le)return $(j,L,q,Ch(L,ee),we);Dh(L,ee)}return null}function ve(j,L,q,ee){for(var we=null,at=null,Te=L,Be=L=0,Ye=null;Te!==null&&Be<q.length;Be++){Te.index>Be?(Ye=Te,Te=null):Ye=Te.sibling;var ot=W(j,Te,q[Be],ee);if(ot===null){Te===null&&(Te=Ye);break}i&&Te&&ot.alternate===null&&r(j,Te),L=m(ot,L,Be),at===null?we=ot:at.sibling=ot,at=ot,Te=Ye}if(Be===q.length)return o(j,Te),Xe&&Ks(j,Be),we;if(Te===null){for(;Be<q.length;Be++)Te=ne(j,q[Be],ee),Te!==null&&(L=m(Te,L,Be),at===null?we=Te:at.sibling=Te,at=Te);return Xe&&Ks(j,Be),we}for(Te=c(Te);Be<q.length;Be++)Ye=$(Te,j,Be,q[Be],ee),Ye!==null&&(i&&Ye.alternate!==null&&Te.delete(Ye.key===null?Be:Ye.key),L=m(Ye,L,Be),at===null?we=Ye:at.sibling=Ye,at=Ye);return i&&Te.forEach(function(ta){return r(j,ta)}),Xe&&Ks(j,Be),we}function Ie(j,L,q,ee){if(q==null)throw Error(s(151));for(var we=null,at=null,Te=L,Be=L=0,Ye=null,ot=q.next();Te!==null&&!ot.done;Be++,ot=q.next()){Te.index>Be?(Ye=Te,Te=null):Ye=Te.sibling;var ta=W(j,Te,ot.value,ee);if(ta===null){Te===null&&(Te=Ye);break}i&&Te&&ta.alternate===null&&r(j,Te),L=m(ta,L,Be),at===null?we=ta:at.sibling=ta,at=ta,Te=Ye}if(ot.done)return o(j,Te),Xe&&Ks(j,Be),we;if(Te===null){for(;!ot.done;Be++,ot=q.next())ot=ne(j,ot.value,ee),ot!==null&&(L=m(ot,L,Be),at===null?we=ot:at.sibling=ot,at=ot);return Xe&&Ks(j,Be),we}for(Te=c(Te);!ot.done;Be++,ot=q.next())ot=$(Te,j,Be,ot.value,ee),ot!==null&&(i&&ot.alternate!==null&&Te.delete(ot.key===null?Be:ot.key),L=m(ot,L,Be),at===null?we=ot:at.sibling=ot,at=ot);return i&&Te.forEach(function(qI){return r(j,qI)}),Xe&&Ks(j,Be),we}function wt(j,L,q,ee){if(typeof q=="object"&&q!==null&&q.type===Z&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case V:e:{for(var we=q.key;L!==null;){if(L.key===we){if(we=q.type,we===Z){if(L.tag===7){o(j,L.sibling),ee=d(L,q.props.children),ee.return=j,j=ee;break e}}else if(L.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===R&&Wa(we)===L.type){o(j,L.sibling),ee=d(L,q.props),Rc(ee,q),ee.return=j,j=ee;break e}o(j,L);break}else r(j,L);L=L.sibling}q.type===Z?(ee=Fa(q.props.children,j.mode,ee,q.key),ee.return=j,j=ee):(ee=wh(q.type,q.key,q.props,null,j.mode,ee),Rc(ee,q),ee.return=j,j=ee)}return v(j);case H:e:{for(we=q.key;L!==null;){if(L.key===we)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){o(j,L.sibling),ee=d(L,q.children||[]),ee.return=j,j=ee;break e}else{o(j,L);break}else r(j,L);L=L.sibling}ee=hm(q,j.mode,ee),ee.return=j,j=ee}return v(j);case R:return q=Wa(q),wt(j,L,q,ee)}if(Ce(q))return ve(j,L,q,ee);if(O(q)){if(we=O(q),typeof we!="function")throw Error(s(150));return q=we.call(q),Ie(j,L,q,ee)}if(typeof q.then=="function")return wt(j,L,xh(q),ee);if(q.$$typeof===le)return wt(j,L,Ch(j,q),ee);Dh(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,L!==null&&L.tag===6?(o(j,L.sibling),ee=d(L,q),ee.return=j,j=ee):(o(j,L),ee=um(q,j.mode,ee),ee.return=j,j=ee),v(j)):o(j,L)}return function(j,L,q,ee){try{Cc=0;var we=wt(j,L,q,ee);return Zo=null,we}catch(Te){if(Te===Xo||Te===Ih)throw Te;var at=vi(29,Te,null,j.mode);return at.lanes=ee,at.return=j,at}finally{}}}var Qa=Fv(!0),qv=Fv(!1),jr=!1;function wm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ur(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function zr(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ut&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=Sh(i),Cv(i,null,o),r}return Th(i,c,r,o),Sh(i)}function Ic(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ds(i,o)}}function Am(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?d=m=r:m=m.next=r}else d=m=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Cm=!1;function Nc(){if(Cm){var i=$o;if(i!==null)throw i}}function xc(i,r,o,c){Cm=!1;var d=i.updateQueue;jr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var M=w,G=M.next;M.next=null,v===null?m=G:v.next=G,v=M;var X=i.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==v&&(w===null?X.firstBaseUpdate=G:w.next=G,X.lastBaseUpdate=M))}if(m!==null){var ne=d.baseState;v=0,X=G=M=null,w=m;do{var W=w.lane&-536870913,$=W!==w.lane;if($?(We&W)===W:(c&W)===W){W!==0&&W===Qo&&(Cm=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ve=i,Ie=w;W=r;var wt=o;switch(Ie.tag){case 1:if(ve=Ie.payload,typeof ve=="function"){ne=ve.call(wt,ne,W);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Ie.payload,W=typeof ve=="function"?ve.call(wt,ne,W):ve,W==null)break e;ne=S({},ne,W);break e;case 2:jr=!0}}W=w.callback,W!==null&&(i.flags|=64,$&&(i.flags|=8192),$=d.callbacks,$===null?d.callbacks=[W]:$.push(W))}else $={lane:W,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(G=X=$,M=ne):X=X.next=$,v|=W;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;$=w,w=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);X===null&&(M=ne),d.baseState=M,d.firstBaseUpdate=G,d.lastBaseUpdate=X,m===null&&(d.shared.lanes=0),Gr|=v,i.lanes=v,i.memoizedState=ne}}function Hv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Gv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Hv(o[i],r)}var Jo=P(null),Mh=P(0);function Kv(i,r){i=ir,ce(Mh,i),ce(Jo,r),ir=i|r.baseLanes}function Rm(){ce(Mh,ir),ce(Jo,Jo.current)}function Im(){ir=Mh.current,J(Jo),J(Mh)}var Ei=P(null),Ui=null;function Br(i){var r=i.alternate;ce(Kt,Kt.current&1),ce(Ei,i),Ui===null&&(r===null||Jo.current!==null||r.memoizedState!==null)&&(Ui=i)}function Nm(i){ce(Kt,Kt.current),ce(Ei,i),Ui===null&&(Ui=i)}function Wv(i){i.tag===22?(ce(Kt,Kt.current),ce(Ei,i),Ui===null&&(Ui=i)):Fr()}function Fr(){ce(Kt,Kt.current),ce(Ei,Ei.current)}function Ti(i){J(Ei),Ui===i&&(Ui=null),J(Kt)}var Kt=P(0);function Oh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Pp(o)||Lp(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Qs=0,Ue=null,Tt=null,nn=null,kh=!1,el=!1,$a=!1,Ph=0,Dc=0,tl=null,OR=0;function Bt(){throw Error(s(321))}function xm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!yi(i[o],r[o]))return!1;return!0}function Dm(i,r,o,c,d,m){return Qs=m,Ue=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,U.H=i===null||i.memoizedState===null?xE:Km,$a=!1,m=o(c,d),$a=!1,el&&(m=Qv(r,o,c,d)),Yv(i),m}function Yv(i){U.H=kc;var r=Tt!==null&&Tt.next!==null;if(Qs=0,nn=Tt=Ue=null,kh=!1,Dc=0,tl=null,r)throw Error(s(300));i===null||sn||(i=i.dependencies,i!==null&&Ah(i)&&(sn=!0))}function Qv(i,r,o,c){Ue=i;var d=0;do{if(el&&(tl=null),Dc=0,el=!1,25<=d)throw Error(s(301));if(d+=1,nn=Tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=DE,m=r(o,c)}while(el);return m}function kR(){var i=U.H,r=i.useState()[0];return r=typeof r.then=="function"?Mc(r):r,i=i.useState()[0],(Tt!==null?Tt.memoizedState:null)!==i&&(Ue.flags|=1024),r}function Mm(){var i=Ph!==0;return Ph=0,i}function Om(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function km(i){if(kh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kh=!1}Qs=0,nn=Tt=Ue=null,el=!1,Dc=Ph=0,tl=null}function $n(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ue.memoizedState=nn=i:nn=nn.next=i,nn}function Wt(){if(Tt===null){var i=Ue.alternate;i=i!==null?i.memoizedState:null}else i=Tt.next;var r=nn===null?Ue.memoizedState:nn.next;if(r!==null)nn=r,Tt=i;else{if(i===null)throw Ue.alternate===null?Error(s(467)):Error(s(310));Tt=i,i={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},nn===null?Ue.memoizedState=nn=i:nn=nn.next=i}return nn}function Lh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mc(i){var r=Dc;return Dc+=1,tl===null&&(tl=[]),i=Uv(tl,i,r),r=Ue,(nn===null?r.memoizedState:nn.next)===null&&(r=r.alternate,U.H=r===null||r.memoizedState===null?xE:Km),i}function Vh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Mc(i);if(i.$$typeof===le)return In(i)}throw Error(s(438,String(i)))}function Pm(i){var r=null,o=Ue.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Ue.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Lh(),Ue.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=x;return r.index++,o}function $s(i,r){return typeof r=="function"?r(i):r}function jh(i){var r=Wt();return Lm(r,Tt,i)}function Lm(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var d=i.baseQueue,m=c.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}r.baseQueue=d=m,c.pending=null}if(m=i.baseState,d===null)i.memoizedState=m;else{r=d.next;var w=v=null,M=null,G=r,X=!1;do{var ne=G.lane&-536870913;if(ne!==G.lane?(We&ne)===ne:(Qs&ne)===ne){var W=G.revertLane;if(W===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),ne===Qo&&(X=!0);else if((Qs&W)===W){G=G.next,W===Qo&&(X=!0);continue}else ne={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},M===null?(w=M=ne,v=m):M=M.next=ne,Ue.lanes|=W,Gr|=W;ne=G.action,$a&&o(m,ne),m=G.hasEagerState?G.eagerState:o(m,ne)}else W={lane:ne,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},M===null?(w=M=W,v=m):M=M.next=W,Ue.lanes|=ne,Gr|=ne;G=G.next}while(G!==null&&G!==r);if(M===null?v=m:M.next=w,!yi(m,i.memoizedState)&&(sn=!0,X&&(o=$o,o!==null)))throw o;i.memoizedState=m,i.baseState=v,i.baseQueue=M,c.lastRenderedState=m}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Vm(i){var r=Wt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,m=r.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do m=i(m,v.action),v=v.next;while(v!==d);yi(m,r.memoizedState)||(sn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,c]}function $v(i,r,o){var c=Ue,d=Wt(),m=Xe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!yi((Tt||d).memoizedState,o);if(v&&(d.memoizedState=o,sn=!0),d=d.queue,zm(Jv.bind(null,c,d,i),[i]),d.getSnapshot!==r||v||nn!==null&&nn.memoizedState.tag&1){if(c.flags|=2048,nl(9,{destroy:void 0},Zv.bind(null,c,d,o,r),null),At===null)throw Error(s(349));m||(Qs&127)!==0||Xv(c,r,o)}return o}function Xv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ue.updateQueue,r===null?(r=Lh(),Ue.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Zv(i,r,o,c){r.value=o,r.getSnapshot=c,eE(r)&&tE(i)}function Jv(i,r,o){return o(function(){eE(r)&&tE(i)})}function eE(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!yi(i,o)}catch{return!0}}function tE(i){var r=Ba(i,2);r!==null&&ai(r,i,2)}function jm(i){var r=$n();if(typeof i=="function"){var o=i;if(i=o(),$a){Zn(!0);try{o()}finally{Zn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:i},r}function nE(i,r,o,c){return i.baseState=o,Lm(i,Tt,typeof c=="function"?c:$s)}function PR(i,r,o,c,d){if(Bh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};U.T!==null?o(!0):m.isTransition=!1,c(m),o=r.pending,o===null?(m.next=r.pending=m,iE(r,m)):(m.next=o.next,r.pending=o.next=m)}}function iE(i,r){var o=r.action,c=r.payload,d=i.state;if(r.isTransition){var m=U.T,v={};U.T=v;try{var w=o(d,c),M=U.S;M!==null&&M(v,w),sE(i,r,w)}catch(G){Um(i,r,G)}finally{m!==null&&v.types!==null&&(m.types=v.types),U.T=m}}else try{m=o(d,c),sE(i,r,m)}catch(G){Um(i,r,G)}}function sE(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){rE(i,r,c)},function(c){return Um(i,r,c)}):rE(i,r,o)}function rE(i,r,o){r.status="fulfilled",r.value=o,aE(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,iE(i,o)))}function Um(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,aE(r),r=r.next;while(r!==c)}i.action=null}function aE(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function oE(i,r){return r}function lE(i,r){if(Xe){var o=At.formState;if(o!==null){e:{var c=Ue;if(Xe){if(xt){t:{for(var d=xt,m=ji;d.nodeType!==8;){if(!m){d=null;break t}if(d=zi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){xt=zi(d.nextSibling),c=d.data==="F!";break e}}Lr(c)}c=!1}c&&(r=o[0])}}return o=$n(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oE,lastRenderedState:r},o.queue=c,o=RE.bind(null,Ue,c),c.dispatch=o,c=jm(!1),m=Gm.bind(null,Ue,!1,c.queue),c=$n(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,o=PR.bind(null,Ue,d,m,o),d.dispatch=o,c.memoizedState=i,[r,o,!1]}function cE(i){var r=Wt();return uE(r,Tt,i)}function uE(i,r,o){if(r=Lm(i,r,oE)[0],i=jh($s)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Mc(r)}catch(v){throw v===Xo?Ih:v}else c=r;r=Wt();var d=r.queue,m=d.dispatch;return o!==r.memoizedState&&(Ue.flags|=2048,nl(9,{destroy:void 0},LR.bind(null,d,o),null)),[c,m,i]}function LR(i,r){i.action=r}function hE(i){var r=Wt(),o=Tt;if(o!==null)return uE(r,o,i);Wt(),r=r.memoizedState,o=Wt();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function nl(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=Ue.updateQueue,r===null&&(r=Lh(),Ue.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function dE(){return Wt().memoizedState}function Uh(i,r,o,c){var d=$n();Ue.flags|=i,d.memoizedState=nl(1|r,{destroy:void 0},o,c===void 0?null:c)}function zh(i,r,o,c){var d=Wt();c=c===void 0?null:c;var m=d.memoizedState.inst;Tt!==null&&c!==null&&xm(c,Tt.memoizedState.deps)?d.memoizedState=nl(r,m,o,c):(Ue.flags|=i,d.memoizedState=nl(1|r,m,o,c))}function fE(i,r){Uh(8390656,8,i,r)}function zm(i,r){zh(2048,8,i,r)}function VR(i){Ue.flags|=4;var r=Ue.updateQueue;if(r===null)r=Lh(),Ue.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function mE(i){var r=Wt().memoizedState;return VR({ref:r,nextImpl:i}),function(){if((ut&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function pE(i,r){return zh(4,2,i,r)}function gE(i,r){return zh(4,4,i,r)}function _E(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function yE(i,r,o){o=o!=null?o.concat([i]):null,zh(4,4,_E.bind(null,r,i),o)}function Bm(){}function vE(i,r){var o=Wt();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&xm(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function EE(i,r){var o=Wt();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&xm(r,c[1]))return c[0];if(c=i(),$a){Zn(!0);try{i()}finally{Zn(!1)}}return o.memoizedState=[c,r],c}function Fm(i,r,o){return o===void 0||(Qs&1073741824)!==0&&(We&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=T0(),Ue.lanes|=i,Gr|=i,o)}function TE(i,r,o,c){return yi(o,r)?o:Jo.current!==null?(i=Fm(i,o,c),yi(i,r)||(sn=!0),i):(Qs&42)===0||(Qs&1073741824)!==0&&(We&261930)===0?(sn=!0,i.memoizedState=o):(i=T0(),Ue.lanes|=i,Gr|=i,r)}function SE(i,r,o,c,d){var m=re.p;re.p=m!==0&&8>m?m:8;var v=U.T,w={};U.T=w,Gm(i,!1,r,o);try{var M=d(),G=U.S;if(G!==null&&G(w,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var X=MR(M,c);Oc(i,r,X,bi(i))}else Oc(i,r,c,bi(i))}catch(ne){Oc(i,r,{then:function(){},status:"rejected",reason:ne},bi())}finally{re.p=m,v!==null&&w.types!==null&&(v.types=w.types),U.T=v}}function jR(){}function qm(i,r,o,c){if(i.tag!==5)throw Error(s(476));var d=wE(i).queue;SE(i,d,r,_e,o===null?jR:function(){return bE(i),o(c)})}function wE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:_e},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function bE(i){var r=wE(i);r.next===null&&(r=i.alternate.memoizedState),Oc(i,r.next.queue,{},bi())}function Hm(){return In($c)}function AE(){return Wt().memoizedState}function CE(){return Wt().memoizedState}function UR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=bi();i=Ur(o);var c=zr(r,i,o);c!==null&&(ai(c,r,o),Ic(c,r,o)),r={cache:vm()},i.payload=r;return}r=r.return}}function zR(i,r,o){var c=bi();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bh(i)?IE(r,o):(o=lm(i,r,o,c),o!==null&&(ai(o,i,c),NE(o,r,c)))}function RE(i,r,o){var c=bi();Oc(i,r,o,c)}function Oc(i,r,o,c){var d={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bh(i))IE(r,d);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var v=r.lastRenderedState,w=m(v,o);if(d.hasEagerState=!0,d.eagerState=w,yi(w,v))return Th(i,r,d,0),At===null&&Eh(),!1}catch{}finally{}if(o=lm(i,r,d,c),o!==null)return ai(o,i,c),NE(o,r,c),!0}return!1}function Gm(i,r,o,c){if(c={lane:2,revertLane:wp(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Bh(i)){if(r)throw Error(s(479))}else r=lm(i,o,c,2),r!==null&&ai(r,i,2)}function Bh(i){var r=i.alternate;return i===Ue||r!==null&&r===Ue}function IE(i,r){el=kh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function NE(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ds(i,o)}}var kc={readContext:In,use:Vh,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt};kc.useEffectEvent=Bt;var xE={readContext:In,use:Vh,useCallback:function(i,r){return $n().memoizedState=[i,r===void 0?null:r],i},useContext:In,useEffect:fE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Uh(4194308,4,_E.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Uh(4194308,4,i,r)},useInsertionEffect:function(i,r){Uh(4,2,i,r)},useMemo:function(i,r){var o=$n();r=r===void 0?null:r;var c=i();if($a){Zn(!0);try{i()}finally{Zn(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=$n();if(o!==void 0){var d=o(r);if($a){Zn(!0);try{o(r)}finally{Zn(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=zR.bind(null,Ue,i),[c.memoizedState,i]},useRef:function(i){var r=$n();return i={current:i},r.memoizedState=i},useState:function(i){i=jm(i);var r=i.queue,o=RE.bind(null,Ue,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Bm,useDeferredValue:function(i,r){var o=$n();return Fm(o,i,r)},useTransition:function(){var i=jm(!1);return i=SE.bind(null,Ue,i.queue,!0,!1),$n().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=Ue,d=$n();if(Xe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),At===null)throw Error(s(349));(We&127)!==0||Xv(c,r,o)}d.memoizedState=o;var m={value:o,getSnapshot:r};return d.queue=m,fE(Jv.bind(null,c,m,i),[i]),c.flags|=2048,nl(9,{destroy:void 0},Zv.bind(null,c,m,o,r),null),o},useId:function(){var i=$n(),r=At.identifierPrefix;if(Xe){var o=bs,c=ws;o=(c&~(1<<32-it(c)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Ph++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=OR++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:Hm,useFormState:lE,useActionState:lE,useOptimistic:function(i){var r=$n();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Gm.bind(null,Ue,!0,o),o.dispatch=r,[i,r]},useMemoCache:Pm,useCacheRefresh:function(){return $n().memoizedState=UR.bind(null,Ue)},useEffectEvent:function(i){var r=$n(),o={impl:i};return r.memoizedState=o,function(){if((ut&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},Km={readContext:In,use:Vh,useCallback:vE,useContext:In,useEffect:zm,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:gE,useMemo:EE,useReducer:jh,useRef:dE,useState:function(){return jh($s)},useDebugValue:Bm,useDeferredValue:function(i,r){var o=Wt();return TE(o,Tt.memoizedState,i,r)},useTransition:function(){var i=jh($s)[0],r=Wt().memoizedState;return[typeof i=="boolean"?i:Mc(i),r]},useSyncExternalStore:$v,useId:AE,useHostTransitionStatus:Hm,useFormState:cE,useActionState:cE,useOptimistic:function(i,r){var o=Wt();return nE(o,Tt,i,r)},useMemoCache:Pm,useCacheRefresh:CE};Km.useEffectEvent=mE;var DE={readContext:In,use:Vh,useCallback:vE,useContext:In,useEffect:zm,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:gE,useMemo:EE,useReducer:Vm,useRef:dE,useState:function(){return Vm($s)},useDebugValue:Bm,useDeferredValue:function(i,r){var o=Wt();return Tt===null?Fm(o,i,r):TE(o,Tt.memoizedState,i,r)},useTransition:function(){var i=Vm($s)[0],r=Wt().memoizedState;return[typeof i=="boolean"?i:Mc(i),r]},useSyncExternalStore:$v,useId:AE,useHostTransitionStatus:Hm,useFormState:hE,useActionState:hE,useOptimistic:function(i,r){var o=Wt();return Tt!==null?nE(o,Tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Pm,useCacheRefresh:CE};DE.useEffectEvent=mE;function Wm(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:S({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Ym={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=bi(),d=Ur(c);d.payload=r,o!=null&&(d.callback=o),r=zr(i,d,c),r!==null&&(ai(r,i,c),Ic(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=bi(),d=Ur(c);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=zr(i,d,c),r!==null&&(ai(r,i,c),Ic(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=bi(),c=Ur(o);c.tag=2,r!=null&&(c.callback=r),r=zr(i,c,o),r!==null&&(ai(r,i,o),Ic(r,i,o))}};function ME(i,r,o,c,d,m,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,v):r.prototype&&r.prototype.isPureReactComponent?!Ec(o,c)||!Ec(d,m):!0}function OE(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&Ym.enqueueReplaceState(r,r.state,null)}function Xa(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=S({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function kE(i){vh(i)}function PE(i){console.error(i)}function LE(i){vh(i)}function Fh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function VE(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Qm(i,r,o){return o=Ur(o),o.tag=3,o.payload={element:null},o.callback=function(){Fh(i,r)},o}function jE(i){return i=Ur(i),i.tag=3,i}function UE(i,r,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;i.payload=function(){return d(m)},i.callback=function(){VE(r,o,c)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){VE(r,o,c),typeof d!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function BR(i,r,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&Yo(r,o,d,!0),o=Ei.current,o!==null){switch(o.tag){case 31:case 13:return Ui===null?ed():o.alternate===null&&Ft===0&&(Ft=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Nh?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Ep(i,c,d)),!1;case 22:return o.flags|=65536,c===Nh?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Ep(i,c,d)),!1}throw Error(s(435,o.tag))}return Ep(i,c,d),ed(),!1}if(Xe)return r=Ei.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==mm&&(i=Error(s(422),{cause:c}),wc(Pi(i,o)))):(c!==mm&&(r=Error(s(423),{cause:c}),wc(Pi(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=Pi(c,o),d=Qm(i.stateNode,c,d),Am(i,d),Ft!==4&&(Ft=2)),!1;var m=Error(s(520),{cause:c});if(m=Pi(m,o),Fc===null?Fc=[m]:Fc.push(m),Ft!==4&&(Ft=2),r===null)return!0;c=Pi(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=Qm(o.stateNode,c,i),Am(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kr===null||!Kr.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=jE(d),UE(d,i,o,c),Am(o,d),!1}o=o.return}while(o!==null);return!1}var $m=Error(s(461)),sn=!1;function Nn(i,r,o,c){r.child=i===null?qv(r,null,o,c):Qa(r,i.child,o,c)}function zE(i,r,o,c,d){o=o.render;var m=r.ref;if("ref"in c){var v={};for(var w in c)w!=="ref"&&(v[w]=c[w])}else v=c;return Ga(r),c=Dm(i,r,o,v,m,d),w=Mm(),i!==null&&!sn?(Om(i,r,d),Xs(i,r,d)):(Xe&&w&&dm(r),r.flags|=1,Nn(i,r,c,d),r.child)}function BE(i,r,o,c,d){if(i===null){var m=o.type;return typeof m=="function"&&!cm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,FE(i,r,m,c,d)):(i=wh(o.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!sp(i,d)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ec,o(v,c)&&i.ref===r.ref)return Xs(i,r,d)}return r.flags|=1,i=Gs(m,c),i.ref=r.ref,i.return=r,r.child=i}function FE(i,r,o,c,d){if(i!==null){var m=i.memoizedProps;if(Ec(m,c)&&i.ref===r.ref)if(sn=!1,r.pendingProps=c=m,sp(i,d))(i.flags&131072)!==0&&(sn=!0);else return r.lanes=i.lanes,Xs(i,r,d)}return Xm(i,r,o,c,d)}function qE(i,r,o,c){var d=c.children,m=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,i!==null){for(c=r.child=i.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~m}else c=0,r.child=null;return HE(i,r,m,o,c)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Rh(r,m!==null?m.cachePool:null),m!==null?Kv(r,m):Rm(),Wv(r);else return c=r.lanes=536870912,HE(i,r,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(Rh(r,m.cachePool),Kv(r,m),Fr(),r.memoizedState=null):(i!==null&&Rh(r,null),Rm(),Fr());return Nn(i,r,d,o),r.child}function Pc(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function HE(i,r,o,c,d){var m=Tm();return m=m===null?null:{parent:tn._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},i!==null&&Rh(r,null),Rm(),Wv(r),i!==null&&Yo(i,r,c,!0),r.childLanes=d,null}function qh(i,r){return r=Gh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function GE(i,r,o){return Qa(r,i.child,null,o),i=qh(r,r.pendingProps),i.flags|=2,Ti(r),r.memoizedState=null,i}function FR(i,r,o){var c=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(Xe){if(c.mode==="hidden")return i=qh(r,c),r.lanes=536870912,Pc(null,i);if(Nm(r),(i=xt)?(i=iT(i,ji),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:kr!==null?{id:ws,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},o=Iv(i),o.return=r,r.child=o,Rn=r,xt=null)):i=null,i===null)throw Lr(r);return r.lanes=536870912,null}return qh(r,c)}var m=i.memoizedState;if(m!==null){var v=m.dehydrated;if(Nm(r),d)if(r.flags&256)r.flags&=-257,r=GE(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(sn||Yo(i,r,o,!1),d=(o&i.childLanes)!==0,sn||d){if(c=At,c!==null&&(v=Ra(c,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ba(i,v),ai(c,i,v),$m;ed(),r=GE(i,r,o)}else i=m.treeContext,xt=zi(v.nextSibling),Rn=r,Xe=!0,Pr=null,ji=!1,i!==null&&Dv(r,i),r=qh(r,c),r.flags|=4096;return r}return i=Gs(i.child,{mode:c.mode,children:c.children}),i.ref=r.ref,r.child=i,i.return=r,i}function Hh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Xm(i,r,o,c,d){return Ga(r),o=Dm(i,r,o,c,void 0,d),c=Mm(),i!==null&&!sn?(Om(i,r,d),Xs(i,r,d)):(Xe&&c&&dm(r),r.flags|=1,Nn(i,r,o,d),r.child)}function KE(i,r,o,c,d,m){return Ga(r),r.updateQueue=null,o=Qv(r,c,o,d),Yv(i),c=Mm(),i!==null&&!sn?(Om(i,r,m),Xs(i,r,m)):(Xe&&c&&dm(r),r.flags|=1,Nn(i,r,o,m),r.child)}function WE(i,r,o,c,d){if(Ga(r),r.stateNode===null){var m=Ho,v=o.contextType;typeof v=="object"&&v!==null&&(m=In(v)),m=new o(c,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ym,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=c,m.state=r.memoizedState,m.refs={},wm(r),v=o.contextType,m.context=typeof v=="object"&&v!==null?In(v):Ho,m.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Wm(r,o,v,c),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Ym.enqueueReplaceState(m,m.state,null),xc(r,c,m,d),Nc(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,M=Xa(o,w);m.props=M;var G=m.context,X=o.contextType;v=Ho,typeof X=="object"&&X!==null&&(v=In(X));var ne=o.getDerivedStateFromProps;X=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||G!==v)&&OE(r,m,c,v),jr=!1;var W=r.memoizedState;m.state=W,xc(r,c,m,d),Nc(),G=r.memoizedState,w||W!==G||jr?(typeof ne=="function"&&(Wm(r,o,ne,c),G=r.memoizedState),(M=jr||ME(r,o,M,c,W,G,v))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=G),m.props=c,m.state=G,m.context=v,c=M):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,bm(i,r),v=r.memoizedProps,X=Xa(o,v),m.props=X,ne=r.pendingProps,W=m.context,G=o.contextType,M=Ho,typeof G=="object"&&G!==null&&(M=In(G)),w=o.getDerivedStateFromProps,(G=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ne||W!==M)&&OE(r,m,c,M),jr=!1,W=r.memoizedState,m.state=W,xc(r,c,m,d),Nc();var $=r.memoizedState;v!==ne||W!==$||jr||i!==null&&i.dependencies!==null&&Ah(i.dependencies)?(typeof w=="function"&&(Wm(r,o,w,c),$=r.memoizedState),(X=jr||ME(r,o,X,c,W,$,M)||i!==null&&i.dependencies!==null&&Ah(i.dependencies))?(G||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,$,M),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,$,M)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=$),m.props=c,m.state=$,m.context=M,c=X):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),c=!1)}return m=c,Hh(i,r),c=(r.flags&128)!==0,m||c?(m=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&c?(r.child=Qa(r,i.child,null,d),r.child=Qa(r,null,o,d)):Nn(i,r,o,d),r.memoizedState=m.state,i=r.child):i=Xs(i,r,d),i}function YE(i,r,o,c){return qa(),r.flags|=256,Nn(i,r,o,c),r.child}var Zm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jm(i){return{baseLanes:i,cachePool:Vv()}}function ep(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=wi),i}function QE(i,r,o){var c=r.pendingProps,d=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=i!==null&&i.memoizedState===null?!1:(Kt.current&2)!==0),v&&(d=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,i===null){if(Xe){if(d?Br(r):Fr(),(i=xt)?(i=iT(i,ji),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:kr!==null?{id:ws,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},o=Iv(i),o.return=r,r.child=o,Rn=r,xt=null)):i=null,i===null)throw Lr(r);return Lp(i)?r.lanes=32:r.lanes=536870912,null}var w=c.children;return c=c.fallback,d?(Fr(),d=r.mode,w=Gh({mode:"hidden",children:w},d),c=Fa(c,d,o,null),w.return=r,c.return=r,w.sibling=c,r.child=w,c=r.child,c.memoizedState=Jm(o),c.childLanes=ep(i,v,o),r.memoizedState=Zm,Pc(null,c)):(Br(r),tp(r,w))}var M=i.memoizedState;if(M!==null&&(w=M.dehydrated,w!==null)){if(m)r.flags&256?(Br(r),r.flags&=-257,r=np(i,r,o)):r.memoizedState!==null?(Fr(),r.child=i.child,r.flags|=128,r=null):(Fr(),w=c.fallback,d=r.mode,c=Gh({mode:"visible",children:c.children},d),w=Fa(w,d,o,null),w.flags|=2,c.return=r,w.return=r,c.sibling=w,r.child=c,Qa(r,i.child,null,o),c=r.child,c.memoizedState=Jm(o),c.childLanes=ep(i,v,o),r.memoizedState=Zm,r=Pc(null,c));else if(Br(r),Lp(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var G=v.dgst;v=G,c=Error(s(419)),c.stack="",c.digest=v,wc({value:c,source:null,stack:null}),r=np(i,r,o)}else if(sn||Yo(i,r,o,!1),v=(o&i.childLanes)!==0,sn||v){if(v=At,v!==null&&(c=Ra(v,o),c!==0&&c!==M.retryLane))throw M.retryLane=c,Ba(i,c),ai(v,i,c),$m;Pp(w)||ed(),r=np(i,r,o)}else Pp(w)?(r.flags|=192,r.child=i.child,r=null):(i=M.treeContext,xt=zi(w.nextSibling),Rn=r,Xe=!0,Pr=null,ji=!1,i!==null&&Dv(r,i),r=tp(r,c.children),r.flags|=4096);return r}return d?(Fr(),w=c.fallback,d=r.mode,M=i.child,G=M.sibling,c=Gs(M,{mode:"hidden",children:c.children}),c.subtreeFlags=M.subtreeFlags&65011712,G!==null?w=Gs(G,w):(w=Fa(w,d,o,null),w.flags|=2),w.return=r,c.return=r,c.sibling=w,r.child=c,Pc(null,c),c=r.child,w=i.child.memoizedState,w===null?w=Jm(o):(d=w.cachePool,d!==null?(M=tn._currentValue,d=d.parent!==M?{parent:M,pool:M}:d):d=Vv(),w={baseLanes:w.baseLanes|o,cachePool:d}),c.memoizedState=w,c.childLanes=ep(i,v,o),r.memoizedState=Zm,Pc(i.child,c)):(Br(r),o=i.child,i=o.sibling,o=Gs(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(v=r.deletions,v===null?(r.deletions=[i],r.flags|=16):v.push(i)),r.child=o,r.memoizedState=null,o)}function tp(i,r){return r=Gh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Gh(i,r){return i=vi(22,i,null,r),i.lanes=0,i}function np(i,r,o){return Qa(r,i.child,null,o),i=tp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function $E(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),_m(i.return,r,o)}function ip(i,r,o,c,d,m){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d,treeForkCount:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=o,v.tailMode=d,v.treeForkCount=m)}function XE(i,r,o){var c=r.pendingProps,d=c.revealOrder,m=c.tail;c=c.children;var v=Kt.current,w=(v&2)!==0;if(w?(v=v&1|2,r.flags|=128):v&=1,ce(Kt,v),Nn(i,r,c,o),c=Xe?Sc:0,!w&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&$E(i,o,r);else if(i.tag===19)$E(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&Oh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),ip(r,!1,d,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&Oh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}ip(r,!0,o,null,m,c);break;case"together":ip(r,!1,null,null,void 0,c);break;default:r.memoizedState=null}return r.child}function Xs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Gr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Yo(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Gs(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Gs(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function sp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Ah(i)))}function qR(i,r,o){switch(r.tag){case 3:lt(r,r.stateNode.containerInfo),Vr(r,tn,i.memoizedState.cache),qa();break;case 27:case 5:Sn(r);break;case 4:lt(r,r.stateNode.containerInfo);break;case 10:Vr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Nm(r),null;break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Br(r),r.flags|=128,null):(o&r.child.childLanes)!==0?QE(i,r,o):(Br(r),i=Xs(i,r,o),i!==null?i.sibling:null);Br(r);break;case 19:var d=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(Yo(i,r,o,!1),c=(o&r.childLanes)!==0),d){if(c)return XE(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ce(Kt,Kt.current),c)break;return null;case 22:return r.lanes=0,qE(i,r,o,r.pendingProps);case 24:Vr(r,tn,i.memoizedState.cache)}return Xs(i,r,o)}function ZE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)sn=!0;else{if(!sp(i,o)&&(r.flags&128)===0)return sn=!1,qR(i,r,o);sn=(i.flags&131072)!==0}else sn=!1,Xe&&(r.flags&1048576)!==0&&xv(r,Sc,r.index);switch(r.lanes=0,r.tag){case 16:e:{var c=r.pendingProps;if(i=Wa(r.elementType),r.type=i,typeof i=="function")cm(i)?(c=Xa(i,c),r.tag=1,r=WE(null,r,i,c,o)):(r.tag=0,r=Xm(null,r,i,c,o));else{if(i!=null){var d=i.$$typeof;if(d===Ee){r.tag=11,r=zE(null,r,i,c,o);break e}else if(d===C){r.tag=14,r=BE(null,r,i,c,o);break e}}throw r=Oe(i)||i,Error(s(306,r,""))}}return r;case 0:return Xm(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,d=Xa(c,r.pendingProps),WE(i,r,c,d,o);case 3:e:{if(lt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var m=r.memoizedState;d=m.element,bm(i,r),xc(r,c,null,o);var v=r.memoizedState;if(c=v.cache,Vr(r,tn,c),c!==m.cache&&ym(r,[tn],o,!0),Nc(),c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=YE(i,r,c,o);break e}else if(c!==d){d=Pi(Error(s(424)),r),wc(d),r=YE(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(xt=zi(i.firstChild),Rn=r,Xe=!0,Pr=null,ji=!0,o=qv(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(qa(),c===d){r=Xs(i,r,o);break e}Nn(i,r,c,o)}r=r.child}return r;case 26:return Hh(i,r),i===null?(o=cT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Xe||(o=r.type,i=r.pendingProps,c=od(Re.current).createElement(o),c[st]=r,c[Zt]=i,xn(c,o,i),Jt(c),r.stateNode=c):r.memoizedState=cT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Sn(r),i===null&&Xe&&(c=r.stateNode=aT(r.type,r.pendingProps,Re.current),Rn=r,ji=!0,d=xt,$r(r.type)?(Vp=d,xt=zi(c.firstChild)):xt=d),Nn(i,r,r.pendingProps.children,o),Hh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Xe&&((d=c=xt)&&(c=vI(c,r.type,r.pendingProps,ji),c!==null?(r.stateNode=c,Rn=r,xt=zi(c.firstChild),ji=!1,d=!0):d=!1),d||Lr(r)),Sn(r),d=r.type,m=r.pendingProps,v=i!==null?i.memoizedProps:null,c=m.children,Mp(d,m)?c=null:v!==null&&Mp(d,v)&&(r.flags|=32),r.memoizedState!==null&&(d=Dm(i,r,kR,null,null,o),$c._currentValue=d),Hh(i,r),Nn(i,r,c,o),r.child;case 6:return i===null&&Xe&&((i=o=xt)&&(o=EI(o,r.pendingProps,ji),o!==null?(r.stateNode=o,Rn=r,xt=null,i=!0):i=!1),i||Lr(r)),null;case 13:return QE(i,r,o);case 4:return lt(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Qa(r,null,c,o):Nn(i,r,c,o),r.child;case 11:return zE(i,r,r.type,r.pendingProps,o);case 7:return Nn(i,r,r.pendingProps,o),r.child;case 8:return Nn(i,r,r.pendingProps.children,o),r.child;case 12:return Nn(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,Vr(r,r.type,c.value),Nn(i,r,c.children,o),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,Ga(r),d=In(d),c=c(d),r.flags|=1,Nn(i,r,c,o),r.child;case 14:return BE(i,r,r.type,r.pendingProps,o);case 15:return FE(i,r,r.type,r.pendingProps,o);case 19:return XE(i,r,o);case 31:return FR(i,r,o);case 22:return qE(i,r,o,r.pendingProps);case 24:return Ga(r),c=In(tn),i===null?(d=Tm(),d===null&&(d=At,m=vm(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),r.memoizedState={parent:c,cache:d},wm(r),Vr(r,tn,d)):((i.lanes&o)!==0&&(bm(i,r),xc(r,null,null,o),Nc()),d=i.memoizedState,m=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),Vr(r,tn,c)):(c=m.cache,Vr(r,tn,c),c!==d.cache&&ym(r,[tn],o,!0))),Nn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Zs(i){i.flags|=4}function rp(i,r,o,c,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(A0())i.flags|=8192;else throw Ya=Nh,Sm}else i.flags&=-16777217}function JE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!mT(r))if(A0())i.flags|=8192;else throw Ya=Nh,Sm}function Kh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Ln():536870912,i.lanes|=r,al|=r)}function Lc(i,r){if(!Xe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Dt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function HR(i,r,o){var c=r.pendingProps;switch(fm(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return Dt(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Ys(tn),Ve(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Wo(r)?Zs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,pm())),Dt(r),null;case 26:var d=r.type,m=r.memoizedState;return i===null?(Zs(r),m!==null?(Dt(r),JE(r,m)):(Dt(r),rp(r,d,null,c,o))):m?m!==i.memoizedState?(Zs(r),Dt(r),JE(r,m)):(Dt(r),r.flags&=-16777217):(i=i.memoizedProps,i!==c&&Zs(r),Dt(r),rp(r,d,i,c,o)),null;case 27:if(di(r),o=Re.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Zs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Dt(r),null}i=fe.current,Wo(r)?Mv(r):(i=aT(d,c,o),r.stateNode=i,Zs(r))}return Dt(r),null;case 5:if(di(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Zs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Dt(r),null}if(m=fe.current,Wo(r))Mv(r);else{var v=od(Re.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?v.createElement("select",{is:c.is}):v.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?v.createElement(d,{is:c.is}):v.createElement(d)}}m[st]=r,m[Zt]=c;e:for(v=r.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break e;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}r.stateNode=m;e:switch(xn(m,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Zs(r)}}return Dt(r),rp(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Zs(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=Re.current,Wo(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,d=Rn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[st]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Q0(i.nodeValue,o)),i||Lr(r,!0)}else i=od(i).createTextNode(c),i[st]=r,r.stateNode=i}return Dt(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(c=Wo(r),o!==null){if(i===null){if(!c)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[st]=r}else qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),i=!1}else o=pm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(Ti(r),r):(Ti(r),null);if((r.flags&128)!==0)throw Error(s(558))}return Dt(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=Wo(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[st]=r}else qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),d=!1}else d=pm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Ti(r),r):(Ti(r),null)}return Ti(r),(r.flags&128)!==0?(r.lanes=o,r):(o=c!==null,i=i!==null&&i.memoizedState!==null,o&&(c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),Kh(r,r.updateQueue),Dt(r),null);case 4:return Ve(),i===null&&Rp(r.stateNode.containerInfo),Dt(r),null;case 10:return Ys(r.type),Dt(r),null;case 19:if(J(Kt),c=r.memoizedState,c===null)return Dt(r),null;if(d=(r.flags&128)!==0,m=c.rendering,m===null)if(d)Lc(c,!1);else{if(Ft!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Oh(i),m!==null){for(r.flags|=128,Lc(c,!1),i=m.updateQueue,r.updateQueue=i,Kh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Rv(o,i),o=o.sibling;return ce(Kt,Kt.current&1|2),Xe&&Ks(r,c.treeForkCount),r.child}i=i.sibling}c.tail!==null&&nt()>Xh&&(r.flags|=128,d=!0,Lc(c,!1),r.lanes=4194304)}else{if(!d)if(i=Oh(m),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,Kh(r,i),Lc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Xe)return Dt(r),null}else 2*nt()-c.renderingStartTime>Xh&&o!==536870912&&(r.flags|=128,d=!0,Lc(c,!1),r.lanes=4194304);c.isBackwards?(m.sibling=r.child,r.child=m):(i=c.last,i!==null?i.sibling=m:r.child=m,c.last=m)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=nt(),i.sibling=null,o=Kt.current,ce(Kt,d?o&1|2:o&1),Xe&&Ks(r,c.treeForkCount),i):(Dt(r),null);case 22:case 23:return Ti(r),Im(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),o=r.updateQueue,o!==null&&Kh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&J(Ka),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ys(tn),Dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function GR(i,r){switch(fm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ys(tn),Ve(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return di(r),null;case 31:if(r.memoizedState!==null){if(Ti(r),r.alternate===null)throw Error(s(340));qa()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(Ti(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));qa()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return J(Kt),null;case 4:return Ve(),null;case 10:return Ys(r.type),null;case 22:case 23:return Ti(r),Im(),i!==null&&J(Ka),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ys(tn),null;case 25:return null;default:return null}}function e0(i,r){switch(fm(r),r.tag){case 3:Ys(tn),Ve();break;case 26:case 27:case 5:di(r);break;case 4:Ve();break;case 31:r.memoizedState!==null&&Ti(r);break;case 13:Ti(r);break;case 19:J(Kt);break;case 10:Ys(r.type);break;case 22:case 23:Ti(r),Im(),i!==null&&J(Ka);break;case 24:Ys(tn)}}function Vc(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&i)===i){c=void 0;var m=o.create,v=o.inst;c=m(),v.destroy=c}o=o.next}while(o!==d)}}catch(w){_t(r,r.return,w)}}function qr(i,r,o){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&i)===i){var v=c.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,d=r;var M=o,G=w;try{G()}catch(X){_t(d,M,X)}}}c=c.next}while(c!==m)}}catch(X){_t(r,r.return,X)}}function t0(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Gv(r,o)}catch(c){_t(i,i.return,c)}}}function n0(i,r,o){o.props=Xa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){_t(i,r,c)}}function jc(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(d){_t(i,r,d)}}function As(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){_t(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){_t(i,r,d)}else o.current=null}function i0(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){_t(i,i.return,d)}}function ap(i,r,o){try{var c=i.stateNode;fI(c,i.type,o,r),c[Zt]=r}catch(d){_t(i,i.return,d)}}function s0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&$r(i.type)||i.tag===4}function op(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||s0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&$r(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function lp(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Yi));else if(c!==4&&(c===27&&$r(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(lp(i,r,o),i=i.sibling;i!==null;)lp(i,r,o),i=i.sibling}function Wh(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&$r(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Wh(i,r,o),i=i.sibling;i!==null;)Wh(i,r,o),i=i.sibling}function r0(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);xn(r,c,o),r[st]=i,r[Zt]=o}catch(m){_t(i,i.return,m)}}var Js=!1,rn=!1,cp=!1,a0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function KR(i,r){if(i=i.containerInfo,xp=md,i=yv(i),nm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,w=-1,M=-1,G=0,X=0,ne=i,W=null;t:for(;;){for(var $;ne!==o||d!==0&&ne.nodeType!==3||(w=v+d),ne!==m||c!==0&&ne.nodeType!==3||(M=v+c),ne.nodeType===3&&(v+=ne.nodeValue.length),($=ne.firstChild)!==null;)W=ne,ne=$;for(;;){if(ne===i)break t;if(W===o&&++G===d&&(w=v),W===m&&++X===c&&(M=v),($=ne.nextSibling)!==null)break;ne=W,W=ne.parentNode}ne=$}o=w===-1||M===-1?null:{start:w,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;for(Dp={focusedElem:i,selectionRange:o},md=!1,gn=r;gn!==null;)if(r=gn,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,gn=i;else for(;gn!==null;){switch(r=gn,m=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ve=Xa(o.type,d);i=c.getSnapshotBeforeUpdate(ve,m),c.__reactInternalSnapshotBeforeUpdate=i}catch(Ie){_t(o,o.return,Ie)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)kp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":kp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,gn=i;break}gn=r.return}}function o0(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:tr(i,o),c&4&&Vc(5,o);break;case 1:if(tr(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(v){_t(o,o.return,v)}else{var d=Xa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(v){_t(o,o.return,v)}}c&64&&t0(o),c&512&&jc(o,o.return);break;case 3:if(tr(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Gv(i,r)}catch(v){_t(o,o.return,v)}}break;case 27:r===null&&c&4&&r0(o);case 26:case 5:tr(i,o),r===null&&c&4&&i0(o),c&512&&jc(o,o.return);break;case 12:tr(i,o);break;case 31:tr(i,o),c&4&&u0(i,o);break;case 13:tr(i,o),c&4&&h0(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=tI.bind(null,o),TI(i,o))));break;case 22:if(c=o.memoizedState!==null||Js,!c){r=r!==null&&r.memoizedState!==null||rn,d=Js;var m=rn;Js=c,(rn=r)&&!m?nr(i,o,(o.subtreeFlags&8772)!==0):tr(i,o),Js=d,rn=m}break;case 30:break;default:tr(i,o)}}function l0(i){var r=i.alternate;r!==null&&(i.alternate=null,l0(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Se(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Vt=null,ni=!1;function er(i,r,o){for(o=o.child;o!==null;)c0(i,r,o),o=o.sibling}function c0(i,r,o){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(jt,o)}catch{}switch(o.tag){case 26:rn||As(o,r),er(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:rn||As(o,r);var c=Vt,d=ni;$r(o.type)&&(Vt=o.stateNode,ni=!1),er(i,r,o),Wc(o.stateNode),Vt=c,ni=d;break;case 5:rn||As(o,r);case 6:if(c=Vt,d=ni,Vt=null,er(i,r,o),Vt=c,ni=d,Vt!==null)if(ni)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(o.stateNode)}catch(m){_t(o,r,m)}else try{Vt.removeChild(o.stateNode)}catch(m){_t(o,r,m)}break;case 18:Vt!==null&&(ni?(i=Vt,tT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),ml(i)):tT(Vt,o.stateNode));break;case 4:c=Vt,d=ni,Vt=o.stateNode.containerInfo,ni=!0,er(i,r,o),Vt=c,ni=d;break;case 0:case 11:case 14:case 15:qr(2,o,r),rn||qr(4,o,r),er(i,r,o);break;case 1:rn||(As(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&n0(o,r,c)),er(i,r,o);break;case 21:er(i,r,o);break;case 22:rn=(c=rn)||o.memoizedState!==null,er(i,r,o),rn=c;break;default:er(i,r,o)}}function u0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{ml(i)}catch(o){_t(r,r.return,o)}}}function h0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ml(i)}catch(o){_t(r,r.return,o)}}function WR(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new a0),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new a0),r;default:throw Error(s(435,i.tag))}}function Yh(i,r){var o=WR(i);r.forEach(function(c){if(!o.has(c)){o.add(c);var d=nI.bind(null,i,c);c.then(d,d)}})}function ii(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=i,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 27:if($r(w.type)){Vt=w.stateNode,ni=!1;break e}break;case 5:Vt=w.stateNode,ni=!1;break e;case 3:case 4:Vt=w.stateNode.containerInfo,ni=!0;break e}w=w.return}if(Vt===null)throw Error(s(160));c0(m,v,d),Vt=null,ni=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)d0(r,i),r=r.sibling}var es=null;function d0(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:ii(r,i),si(i),c&4&&(qr(3,i,i.return),Vc(3,i),qr(5,i,i.return));break;case 1:ii(r,i),si(i),c&512&&(rn||o===null||As(o,o.return)),c&64&&Js&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=es;if(ii(r,i),si(i),c&512&&(rn||o===null||As(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[F]||m[st]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),xn(m,c,o),m[st]=i,Jt(m),c=m;break e;case"link":var v=dT("link","href",d).get(c+(o.href||""));if(v){for(var w=0;w<v.length;w++)if(m=v[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(w,1);break t}}m=d.createElement(c),xn(m,c,o),d.head.appendChild(m);break;case"meta":if(v=dT("meta","content",d).get(c+(o.content||""))){for(w=0;w<v.length;w++)if(m=v[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(w,1);break t}}m=d.createElement(c),xn(m,c,o),d.head.appendChild(m);break;default:throw Error(s(468,c))}m[st]=i,Jt(m),c=m}i.stateNode=c}else fT(d,i.type,i.stateNode);else i.stateNode=hT(d,c,i.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?fT(d,i.type,i.stateNode):hT(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&ap(i,i.memoizedProps,o.memoizedProps)}break;case 27:ii(r,i),si(i),c&512&&(rn||o===null||As(o,o.return)),o!==null&&c&4&&ap(i,i.memoizedProps,o.memoizedProps);break;case 5:if(ii(r,i),si(i),c&512&&(rn||o===null||As(o,o.return)),i.flags&32){d=i.stateNode;try{ti(d,"")}catch(ve){_t(i,i.return,ve)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,ap(i,d,o!==null?o.memoizedProps:d)),c&1024&&(cp=!0);break;case 6:if(ii(r,i),si(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(ve){_t(i,i.return,ve)}}break;case 3:if(ud=null,d=es,es=ld(r.containerInfo),ii(r,i),es=d,si(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ml(r.containerInfo)}catch(ve){_t(i,i.return,ve)}cp&&(cp=!1,f0(i));break;case 4:c=es,es=ld(i.stateNode.containerInfo),ii(r,i),si(i),es=c;break;case 12:ii(r,i),si(i);break;case 31:ii(r,i),si(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Yh(i,c)));break;case 13:ii(r,i),si(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&($h=nt()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Yh(i,c)));break;case 22:d=i.memoizedState!==null;var M=o!==null&&o.memoizedState!==null,G=Js,X=rn;if(Js=G||d,rn=X||M,ii(r,i),rn=X,Js=G,si(i),c&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||M||Js||rn||Za(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){M=o=r;try{if(m=M.stateNode,d)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=M.stateNode;var ne=M.memoizedProps.style,W=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;w.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ve){_t(M,M.return,ve)}}}else if(r.tag===6){if(o===null){M=r;try{M.stateNode.nodeValue=d?"":M.memoizedProps}catch(ve){_t(M,M.return,ve)}}}else if(r.tag===18){if(o===null){M=r;try{var $=M.stateNode;d?nT($,!0):nT(M.stateNode,!1)}catch(ve){_t(M,M.return,ve)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Yh(i,o))));break;case 19:ii(r,i),si(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Yh(i,c)));break;case 30:break;case 21:break;default:ii(r,i),si(i)}}function si(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(s0(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,m=op(i);Wh(i,m,d);break;case 5:var v=o.stateNode;o.flags&32&&(ti(v,""),o.flags&=-33);var w=op(i);Wh(i,w,v);break;case 3:case 4:var M=o.stateNode.containerInfo,G=op(i);lp(i,G,M);break;default:throw Error(s(161))}}catch(X){_t(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function f0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;f0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function tr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)o0(i,r.alternate,r),r=r.sibling}function Za(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:qr(4,r,r.return),Za(r);break;case 1:As(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&n0(r,r.return,o),Za(r);break;case 27:Wc(r.stateNode);case 26:case 5:As(r,r.return),Za(r);break;case 22:r.memoizedState===null&&Za(r);break;case 30:Za(r);break;default:Za(r)}i=i.sibling}}function nr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,m=r,v=m.flags;switch(m.tag){case 0:case 11:case 15:nr(d,m,o),Vc(4,m);break;case 1:if(nr(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(G){_t(c,c.return,G)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var M=d.shared.hiddenCallbacks;if(M!==null)for(d.shared.hiddenCallbacks=null,d=0;d<M.length;d++)Hv(M[d],w)}catch(G){_t(c,c.return,G)}}o&&v&64&&t0(m),jc(m,m.return);break;case 27:r0(m);case 26:case 5:nr(d,m,o),o&&c===null&&v&4&&i0(m),jc(m,m.return);break;case 12:nr(d,m,o);break;case 31:nr(d,m,o),o&&v&4&&u0(d,m);break;case 13:nr(d,m,o),o&&v&4&&h0(d,m);break;case 22:m.memoizedState===null&&nr(d,m,o),jc(m,m.return);break;case 30:break;default:nr(d,m,o)}r=r.sibling}}function up(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&bc(o))}function hp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&bc(i))}function ts(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)m0(i,r,o,c),r=r.sibling}function m0(i,r,o,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:ts(i,r,o,c),d&2048&&Vc(9,r);break;case 1:ts(i,r,o,c);break;case 3:ts(i,r,o,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&bc(i)));break;case 12:if(d&2048){ts(i,r,o,c),i=r.stateNode;try{var m=r.memoizedProps,v=m.id,w=m.onPostCommit;typeof w=="function"&&w(v,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(M){_t(r,r.return,M)}}else ts(i,r,o,c);break;case 31:ts(i,r,o,c);break;case 13:ts(i,r,o,c);break;case 23:break;case 22:m=r.stateNode,v=r.alternate,r.memoizedState!==null?m._visibility&2?ts(i,r,o,c):Uc(i,r):m._visibility&2?ts(i,r,o,c):(m._visibility|=2,il(i,r,o,c,(r.subtreeFlags&10256)!==0||!1)),d&2048&&up(v,r);break;case 24:ts(i,r,o,c),d&2048&&hp(r.alternate,r);break;default:ts(i,r,o,c)}}function il(i,r,o,c,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=i,v=r,w=o,M=c,G=v.flags;switch(v.tag){case 0:case 11:case 15:il(m,v,w,M,d),Vc(8,v);break;case 23:break;case 22:var X=v.stateNode;v.memoizedState!==null?X._visibility&2?il(m,v,w,M,d):Uc(m,v):(X._visibility|=2,il(m,v,w,M,d)),d&&G&2048&&up(v.alternate,v);break;case 24:il(m,v,w,M,d),d&&G&2048&&hp(v.alternate,v);break;default:il(m,v,w,M,d)}r=r.sibling}}function Uc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,d=c.flags;switch(c.tag){case 22:Uc(o,c),d&2048&&up(c.alternate,c);break;case 24:Uc(o,c),d&2048&&hp(c.alternate,c);break;default:Uc(o,c)}r=r.sibling}}var zc=8192;function sl(i,r,o){if(i.subtreeFlags&zc)for(i=i.child;i!==null;)p0(i,r,o),i=i.sibling}function p0(i,r,o){switch(i.tag){case 26:sl(i,r,o),i.flags&zc&&i.memoizedState!==null&&OI(o,es,i.memoizedState,i.memoizedProps);break;case 5:sl(i,r,o);break;case 3:case 4:var c=es;es=ld(i.stateNode.containerInfo),sl(i,r,o),es=c;break;case 22:i.memoizedState===null&&(c=i.alternate,c!==null&&c.memoizedState!==null?(c=zc,zc=16777216,sl(i,r,o),zc=c):sl(i,r,o));break;default:sl(i,r,o)}}function g0(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Bc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];gn=c,y0(c,i)}g0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)_0(i),i=i.sibling}function _0(i){switch(i.tag){case 0:case 11:case 15:Bc(i),i.flags&2048&&qr(9,i,i.return);break;case 3:Bc(i);break;case 12:Bc(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Qh(i)):Bc(i);break;default:Bc(i)}}function Qh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];gn=c,y0(c,i)}g0(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:qr(8,r,r.return),Qh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Qh(r));break;default:Qh(r)}i=i.sibling}}function y0(i,r){for(;gn!==null;){var o=gn;switch(o.tag){case 0:case 11:case 15:qr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:bc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,gn=c;else e:for(o=i;gn!==null;){c=gn;var d=c.sibling,m=c.return;if(l0(c),c===o){gn=null;break e}if(d!==null){d.return=m,gn=d;break e}gn=m}}}var YR={getCacheForType:function(i){var r=In(tn),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return In(tn).controller.signal}},QR=typeof WeakMap=="function"?WeakMap:Map,ut=0,At=null,He=null,We=0,gt=0,Si=null,Hr=!1,rl=!1,dp=!1,ir=0,Ft=0,Gr=0,Ja=0,fp=0,wi=0,al=0,Fc=null,ri=null,mp=!1,$h=0,v0=0,Xh=1/0,Zh=null,Kr=null,dn=0,Wr=null,ol=null,sr=0,pp=0,gp=null,E0=null,qc=0,_p=null;function bi(){return(ut&2)!==0&&We!==0?We&-We:U.T!==null?wp():xo()}function T0(){if(wi===0)if((We&536870912)===0||Xe){var i=Kn;Kn<<=1,(Kn&3932160)===0&&(Kn=262144),wi=i}else wi=536870912;return i=Ei.current,i!==null&&(i.flags|=32),wi}function ai(i,r,o){(i===At&&(gt===2||gt===9)||i.cancelPendingCommit!==null)&&(ll(i,0),Yr(i,We,wi,!1)),Yn(i,o),((ut&2)===0||i!==At)&&(i===At&&((ut&2)===0&&(Ja|=o),Ft===4&&Yr(i,We,wi,!1)),Cs(i))}function S0(i,r,o){if((ut&6)!==0)throw Error(s(327));var c=!o&&(r&127)===0&&(r&i.expiredLanes)===0||Jn(i,r),d=c?ZR(i,r):vp(i,r,!0),m=c;do{if(d===0){rl&&!c&&Yr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!$R(o)){d=vp(i,r,!1),m=!1;continue}if(d===2){if(m=r,i.errorRecoveryDisabledLanes&m)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var w=i;d=Fc;var M=w.current.memoizedState.isDehydrated;if(M&&(ll(w,v).flags|=256),v=vp(w,v,!1),v!==2){if(dp&&!M){w.errorRecoveryDisabledLanes|=m,Ja|=m,d=4;break e}m=ri,ri=d,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}d=v}if(m=!1,d!==2)continue}}if(d===1){ll(i,0),Yr(i,r,0,!0);break}e:{switch(c=i,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Yr(c,r,wi,!Hr);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=$h+300-nt(),10<d)){if(Yr(c,r,wi,!Hr),Ni(c,0,!0)!==0)break e;sr=r,c.timeoutHandle=J0(w0.bind(null,c,o,ri,Zh,mp,r,wi,Ja,al,Hr,m,"Throttled",-0,0),d);break e}w0(c,o,ri,Zh,mp,r,wi,Ja,al,Hr,m,null,-0,0)}}break}while(!0);Cs(i)}function w0(i,r,o,c,d,m,v,w,M,G,X,ne,W,$){if(i.timeoutHandle=-1,ne=r.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},p0(r,m,ne);var ve=(m&62914560)===m?$h-nt():(m&4194048)===m?v0-nt():0;if(ve=kI(ne,ve),ve!==null){sr=m,i.cancelPendingCommit=ve(D0.bind(null,i,r,m,o,c,d,v,w,M,X,ne,null,W,$)),Yr(i,m,v,!G);return}}D0(i,r,m,o,c,d,v,w,M)}function $R(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!yi(m(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(i,r,o,c){r&=~fp,r&=~Ja,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var m=31-it(d),v=1<<m;c[m]=-1,d&=~v}o!==0&&hs(i,o,r)}function Jh(){return(ut&6)===0?(Hc(0),!1):!0}function yp(){if(He!==null){if(gt===0)var i=He.return;else i=He,Ws=Ha=null,km(i),Zo=null,Cc=0,i=He;for(;i!==null;)e0(i.alternate,i),i=i.return;He=null}}function ll(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,gI(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),sr=0,yp(),At=i,He=o=Gs(i.current,null),We=r,gt=0,Si=null,Hr=!1,rl=Jn(i,r),dp=!1,al=wi=fp=Ja=Gr=Ft=0,ri=Fc=null,mp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-it(c),m=1<<d;r|=i[d],c&=~m}return ir=r,Eh(),o}function b0(i,r){Ue=null,U.H=kc,r===Xo||r===Ih?(r=zv(),gt=3):r===Sm?(r=zv(),gt=4):gt=r===$m?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Si=r,He===null&&(Ft=1,Fh(i,Pi(r,i.current)))}function A0(){var i=Ei.current;return i===null?!0:(We&4194048)===We?Ui===null:(We&62914560)===We||(We&536870912)!==0?i===Ui:!1}function C0(){var i=U.H;return U.H=kc,i===null?kc:i}function R0(){var i=U.A;return U.A=YR,i}function ed(){Ft=4,Hr||(We&4194048)!==We&&Ei.current!==null||(rl=!0),(Gr&134217727)===0&&(Ja&134217727)===0||At===null||Yr(At,We,wi,!1)}function vp(i,r,o){var c=ut;ut|=2;var d=C0(),m=R0();(At!==i||We!==r)&&(Zh=null,ll(i,r)),r=!1;var v=Ft;e:do try{if(gt!==0&&He!==null){var w=He,M=Si;switch(gt){case 8:yp(),v=6;break e;case 3:case 2:case 9:case 6:Ei.current===null&&(r=!0);var G=gt;if(gt=0,Si=null,cl(i,w,M,G),o&&rl){v=0;break e}break;default:G=gt,gt=0,Si=null,cl(i,w,M,G)}}XR(),v=Ft;break}catch(X){b0(i,X)}while(!0);return r&&i.shellSuspendCounter++,Ws=Ha=null,ut=c,U.H=d,U.A=m,He===null&&(At=null,We=0,Eh()),v}function XR(){for(;He!==null;)I0(He)}function ZR(i,r){var o=ut;ut|=2;var c=C0(),d=R0();At!==i||We!==r?(Zh=null,Xh=nt()+500,ll(i,r)):rl=Jn(i,r);e:do try{if(gt!==0&&He!==null){r=He;var m=Si;t:switch(gt){case 1:gt=0,Si=null,cl(i,r,m,1);break;case 2:case 9:if(jv(m)){gt=0,Si=null,N0(r);break}r=function(){gt!==2&&gt!==9||At!==i||(gt=7),Cs(i)},m.then(r,r);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:jv(m)?(gt=0,Si=null,N0(r)):(gt=0,Si=null,cl(i,r,m,7));break;case 5:var v=null;switch(He.tag){case 26:v=He.memoizedState;case 5:case 27:var w=He;if(v?mT(v):w.stateNode.complete){gt=0,Si=null;var M=w.sibling;if(M!==null)He=M;else{var G=w.return;G!==null?(He=G,td(G)):He=null}break t}}gt=0,Si=null,cl(i,r,m,5);break;case 6:gt=0,Si=null,cl(i,r,m,6);break;case 8:yp(),Ft=6;break e;default:throw Error(s(462))}}JR();break}catch(X){b0(i,X)}while(!0);return Ws=Ha=null,U.H=c,U.A=d,ut=o,He!==null?0:(At=null,We=0,Eh(),Ft)}function JR(){for(;He!==null&&!qe();)I0(He)}function I0(i){var r=ZE(i.alternate,i,ir);i.memoizedProps=i.pendingProps,r===null?td(i):He=r}function N0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=KE(o,r,r.pendingProps,r.type,void 0,We);break;case 11:r=KE(o,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:km(r);default:e0(o,r),r=He=Rv(r,ir),r=ZE(o,r,ir)}i.memoizedProps=i.pendingProps,r===null?td(i):He=r}function cl(i,r,o,c){Ws=Ha=null,km(r),Zo=null,Cc=0;var d=r.return;try{if(BR(i,d,r,o,We)){Ft=1,Fh(i,Pi(o,i.current)),He=null;return}}catch(m){if(d!==null)throw He=d,m;Ft=1,Fh(i,Pi(o,i.current)),He=null;return}r.flags&32768?(Xe||c===1?i=!0:rl||(We&536870912)!==0?i=!1:(Hr=i=!0,(c===2||c===9||c===3||c===6)&&(c=Ei.current,c!==null&&c.tag===13&&(c.flags|=16384))),x0(r,i)):td(r)}function td(i){var r=i;do{if((r.flags&32768)!==0){x0(r,Hr);return}i=r.return;var o=HR(r.alternate,r,ir);if(o!==null){He=o;return}if(r=r.sibling,r!==null){He=r;return}He=r=i}while(r!==null);Ft===0&&(Ft=5)}function x0(i,r){do{var o=GR(i.alternate,i);if(o!==null){o.flags&=32767,He=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){He=i;return}He=i=o}while(i!==null);Ft=6,He=null}function D0(i,r,o,c,d,m,v,w,M){i.cancelPendingCommit=null;do nd();while(dn!==0);if((ut&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=om,wr(i,o,m,v,w,M),i===At&&(He=At=null,We=0),ol=r,Wr=i,sr=o,pp=m,gp=d,E0=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,iI(Pn,function(){return L0(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=re.p,re.p=2,v=ut,ut|=4;try{KR(i,r,o)}finally{ut=v,re.p=d,U.T=c}}dn=1,M0(),O0(),k0()}}function M0(){if(dn===1){dn=0;var i=Wr,r=ol,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=U.T,U.T=null;var c=re.p;re.p=2;var d=ut;ut|=4;try{d0(r,i);var m=Dp,v=yv(i.containerInfo),w=m.focusedElem,M=m.selectionRange;if(v!==w&&w&&w.ownerDocument&&_v(w.ownerDocument.documentElement,w)){if(M!==null&&nm(w)){var G=M.start,X=M.end;if(X===void 0&&(X=G),"selectionStart"in w)w.selectionStart=G,w.selectionEnd=Math.min(X,w.value.length);else{var ne=w.ownerDocument||document,W=ne&&ne.defaultView||window;if(W.getSelection){var $=W.getSelection(),ve=w.textContent.length,Ie=Math.min(M.start,ve),wt=M.end===void 0?Ie:Math.min(M.end,ve);!$.extend&&Ie>wt&&(v=wt,wt=Ie,Ie=v);var j=gv(w,Ie),L=gv(w,wt);if(j&&L&&($.rangeCount!==1||$.anchorNode!==j.node||$.anchorOffset!==j.offset||$.focusNode!==L.node||$.focusOffset!==L.offset)){var q=ne.createRange();q.setStart(j.node,j.offset),$.removeAllRanges(),Ie>wt?($.addRange(q),$.extend(L.node,L.offset)):(q.setEnd(L.node,L.offset),$.addRange(q))}}}}for(ne=[],$=w;$=$.parentNode;)$.nodeType===1&&ne.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ne.length;w++){var ee=ne[w];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}md=!!xp,Dp=xp=null}finally{ut=d,re.p=c,U.T=o}}i.current=r,dn=2}}function O0(){if(dn===2){dn=0;var i=Wr,r=ol,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=U.T,U.T=null;var c=re.p;re.p=2;var d=ut;ut|=4;try{o0(i,r.alternate,r)}finally{ut=d,re.p=c,U.T=o}}dn=3}}function k0(){if(dn===4||dn===3){dn=0,yt();var i=Wr,r=ol,o=sr,c=E0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?dn=5:(dn=0,ol=Wr=null,P0(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Kr=null),Wi(o),r=r.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(jt,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=U.T,d=re.p,re.p=2,U.T=null;try{for(var m=i.onRecoverableError,v=0;v<c.length;v++){var w=c[v];m(w.value,{componentStack:w.stack})}}finally{U.T=r,re.p=d}}(sr&3)!==0&&nd(),Cs(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===_p?qc++:(qc=0,_p=i):qc=0,Hc(0)}}function P0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,bc(r)))}function nd(){return M0(),O0(),k0(),L0()}function L0(){if(dn!==5)return!1;var i=Wr,r=pp;pp=0;var o=Wi(sr),c=U.T,d=re.p;try{re.p=32>o?32:o,U.T=null,o=gp,gp=null;var m=Wr,v=sr;if(dn=0,ol=Wr=null,sr=0,(ut&6)!==0)throw Error(s(331));var w=ut;if(ut|=4,_0(m.current),m0(m,m.current,v,o),ut=w,Hc(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(jt,m)}catch{}return!0}finally{re.p=d,U.T=c,P0(i,r)}}function V0(i,r,o){r=Pi(o,r),r=Qm(i.stateNode,r,2),i=zr(i,r,2),i!==null&&(Yn(i,2),Cs(i))}function _t(i,r,o){if(i.tag===3)V0(i,i,o);else for(;r!==null;){if(r.tag===3){V0(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){i=Pi(o,i),o=jE(2),c=zr(r,o,2),c!==null&&(UE(o,c,r,i),Yn(c,2),Cs(c));break}}r=r.return}}function Ep(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new QR;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(dp=!0,d.add(o),i=eI.bind(null,i,r,o),r.then(i,i))}function eI(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,At===i&&(We&o)===o&&(Ft===4||Ft===3&&(We&62914560)===We&&300>nt()-$h?(ut&2)===0&&ll(i,0):fp|=o,al===We&&(al=0)),Cs(i)}function j0(i,r){r===0&&(r=Ln()),i=Ba(i,r),i!==null&&(Yn(i,r),Cs(i))}function tI(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),j0(i,o)}function nI(i,r){var o=0;switch(i.tag){case 31:case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),j0(i,o)}function iI(i,r){return ae(i,r)}var id=null,ul=null,Tp=!1,sd=!1,Sp=!1,Qr=0;function Cs(i){i!==ul&&i.next===null&&(ul===null?id=ul=i:ul=ul.next=i),sd=!0,Tp||(Tp=!0,rI())}function Hc(i,r){if(!Sp&&sd){Sp=!0;do for(var o=!1,c=id;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var v=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-it(42|i)+1)-1,m&=d&~(v&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,F0(c,m))}else m=We,m=Ni(c,c===At?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Jn(c,m)||(o=!0,F0(c,m));c=c.next}while(o);Sp=!1}}function sI(){U0()}function U0(){sd=Tp=!1;var i=0;Qr!==0&&pI()&&(i=Qr);for(var r=nt(),o=null,c=id;c!==null;){var d=c.next,m=z0(c,r);m===0?(c.next=null,o===null?id=d:o.next=d,d===null&&(ul=o)):(o=c,(i!==0||(m&3)!==0)&&(sd=!0)),c=d}dn!==0&&dn!==5||Hc(i),Qr!==0&&(Qr=0)}function z0(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var v=31-it(m),w=1<<v,M=d[v];M===-1?((w&o)===0||(w&c)!==0)&&(d[v]=Ca(w,r)):M<=r&&(i.expiredLanes|=w),m&=~w}if(r=At,o=We,o=Ni(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(gt===2||gt===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&oe(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Jn(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&oe(c),Wi(o)){case 2:case 8:o=Xt;break;case 32:o=Pn;break;case 268435456:o=bn;break;default:o=Pn}return c=B0.bind(null,i),o=ae(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&oe(c),i.callbackPriority=2,i.callbackNode=null,2}function B0(i,r){if(dn!==0&&dn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(nd()&&i.callbackNode!==o)return null;var c=We;return c=Ni(i,i===At?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(S0(i,c,r),z0(i,nt()),i.callbackNode!=null&&i.callbackNode===o?B0.bind(null,i):null)}function F0(i,r){if(nd())return null;S0(i,r,!0)}function rI(){_I(function(){(ut&6)!==0?ae(qt,sI):U0()})}function wp(){if(Qr===0){var i=Qo;i===0&&(i=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Qr=i}return Qr}function q0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ko(""+i)}function H0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function aI(i,r,o,c,d){if(r==="submit"&&o&&o.stateNode===d){var m=q0((d[Zt]||null).action),v=c.submitter;v&&(r=(r=v[Zt]||null)?q0(r.formAction):v.getAttribute("formAction"),r!==null&&(m=r,v=null));var w=new vs("action","action",null,c,d);i.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Qr!==0){var M=v?H0(d,v):new FormData(d);qm(o,{pending:!0,data:M,method:d.method,action:m},null,M)}}else typeof m=="function"&&(w.preventDefault(),M=v?H0(d,v):new FormData(d),qm(o,{pending:!0,data:M,method:d.method,action:m},m,M))},currentTarget:d}]})}}for(var bp=0;bp<am.length;bp++){var Ap=am[bp],oI=Ap.toLowerCase(),lI=Ap[0].toUpperCase()+Ap.slice(1);Ji(oI,"on"+lI)}Ji(Tv,"onAnimationEnd"),Ji(Sv,"onAnimationIteration"),Ji(wv,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(bR,"onTransitionRun"),Ji(AR,"onTransitionStart"),Ji(CR,"onTransitionCancel"),Ji(bv,"onTransitionEnd"),ps("onMouseEnter",["mouseout","mouseover"]),ps("onMouseLeave",["mouseout","mouseover"]),ps("onPointerEnter",["pointerout","pointerover"]),ps("onPointerLeave",["pointerout","pointerover"]),ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ms("onBeforeInput",["compositionend","keypress","textInput","paste"]),ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gc));function G0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var v=c.length-1;0<=v;v--){var w=c[v],M=w.instance,G=w.currentTarget;if(w=w.listener,M!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=G;try{m(d)}catch(X){vh(X)}d.currentTarget=null,m=M}else for(v=0;v<c.length;v++){if(w=c[v],M=w.instance,G=w.currentTarget,w=w.listener,M!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=G;try{m(d)}catch(X){vh(X)}d.currentTarget=null,m=M}}}}function Ge(i,r){var o=r[br];o===void 0&&(o=r[br]=new Set);var c=i+"__bubble";o.has(c)||(K0(r,i,2,!1),o.add(c))}function Cp(i,r,o){var c=0;r&&(c|=4),K0(o,i,c,r)}var rd="_reactListening"+Math.random().toString(36).slice(2);function Rp(i){if(!i[rd]){i[rd]=!0,ic.forEach(function(o){o!=="selectionchange"&&(cI.has(o)||Cp(o,!1,i),Cp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[rd]||(r[rd]=!0,Cp("selectionchange",!1,r))}}function K0(i,r,o,c){switch(TT(r)){case 2:var d=VI;break;case 8:d=jI;break;default:d=Fp}o=d.bind(null,r,o,i),d=void 0,!Oa||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function Ip(i,r,o,c,d){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var w=c.stateNode.containerInfo;if(w===d)break;if(v===4)for(v=c.return;v!==null;){var M=v.tag;if((M===3||M===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;w!==null;){if(v=rt(w),v===null)return;if(M=v.tag,M===5||M===6||M===26||M===27){c=m=v;continue e}w=w.parentNode}}c=c.return}xr(function(){var G=m,X=Di(o),ne=[];e:{var W=Av.get(i);if(W!==void 0){var $=vs,ve=i;switch(i){case"keypress":if(Pa(o)===0)break e;case"keydown":case"keyup":$=gh;break;case"focusin":ve="focus",$=Va;break;case"focusout":ve="blur",$=Va;break;case"beforeblur":case"afterblur":$=Va;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=y;break;case Tv:case Sv:case wv:$=ch;break;case bv:$=b;break;case"scroll":case"scrollend":$=pc;break;case"wheel":$=Q;break;case"copy":case"cut":case"paste":$=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Hs;break;case"toggle":case"beforetoggle":$=je}var Ie=(r&4)!==0,wt=!Ie&&(i==="scroll"||i==="scrollend"),j=Ie?W!==null?W+"Capture":null:W;Ie=[];for(var L=G,q;L!==null;){var ee=L;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||j===null||(ee=Qi(L,j),ee!=null&&Ie.push(Kc(L,ee,q))),wt)break;L=L.return}0<Ie.length&&(W=new $(W,ve,null,o,X),ne.push({event:W,listeners:Ie}))}}if((r&7)===0){e:{if(W=i==="mouseover"||i==="pointerover",$=i==="mouseout"||i==="pointerout",W&&o!==dc&&(ve=o.relatedTarget||o.fromElement)&&(rt(ve)||ve[xi]))break e;if(($||W)&&(W=X.window===X?X:(W=X.ownerDocument)?W.defaultView||W.parentWindow:window,$?(ve=o.relatedTarget||o.toElement,$=G,ve=ve?rt(ve):null,ve!==null&&(wt=l(ve),Ie=ve.tag,ve!==wt||Ie!==5&&Ie!==27&&Ie!==6)&&(ve=null)):($=null,ve=G),$!==ve)){if(Ie=gc,ee="onMouseLeave",j="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(Ie=Hs,ee="onPointerLeave",j="onPointerEnter",L="pointer"),wt=$==null?W:Rt($),q=ve==null?W:Rt(ve),W=new Ie(ee,L+"leave",$,o,X),W.target=wt,W.relatedTarget=q,ee=null,rt(X)===G&&(Ie=new Ie(j,L+"enter",ve,o,X),Ie.target=q,Ie.relatedTarget=wt,ee=Ie),wt=ee,$&&ve)t:{for(Ie=uI,j=$,L=ve,q=0,ee=j;ee;ee=Ie(ee))q++;ee=0;for(var we=L;we;we=Ie(we))ee++;for(;0<q-ee;)j=Ie(j),q--;for(;0<ee-q;)L=Ie(L),ee--;for(;q--;){if(j===L||L!==null&&j===L.alternate){Ie=j;break t}j=Ie(j),L=Ie(L)}Ie=null}else Ie=null;$!==null&&W0(ne,W,$,Ie,!1),ve!==null&&wt!==null&&W0(ne,wt,ve,Ie,!0)}}e:{if(W=G?Rt(G):window,$=W.nodeName&&W.nodeName.toLowerCase(),$==="select"||$==="input"&&W.type==="file")var at=uv;else if(lv(W))if(hv)at=TR;else{at=vR;var Te=yR}else $=W.nodeName,!$||$.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?G&&Oo(G.elementType)&&(at=uv):at=ER;if(at&&(at=at(i,G))){cv(ne,at,o,X);break e}Te&&Te(i,W,G),i==="focusout"&&G&&W.type==="number"&&G.memoizedProps.value!=null&&cc(W,"number",W.value)}switch(Te=G?Rt(G):window,i){case"focusin":(lv(Te)||Te.contentEditable==="true")&&(Bo=Te,im=G,Tc=null);break;case"focusout":Tc=im=Bo=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,vv(ne,o,X);break;case"selectionchange":if(wR)break;case"keydown":case"keyup":vv(ne,o,X)}var Be;if(ct)e:{switch(i){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else zo?ja(i,o)&&(Ye="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(Ss&&o.locale!=="ko"&&(zo||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&zo&&(Be=mc()):(ys=X,fc="value"in ys?ys.value:ys.textContent,zo=!0)),Te=ad(G,Ye),0<Te.length&&(Ye=new Ts(Ye,i,null,o,X),ne.push({event:Ye,listeners:Te}),Be?Ye.data=Be:(Be=Uo(o),Be!==null&&(Ye.data=Be)))),(Be=Oi?mR(i,o):pR(i,o))&&(Ye=ad(G,"onBeforeInput"),0<Ye.length&&(Te=new Ts("onBeforeInput","beforeinput",null,o,X),ne.push({event:Te,listeners:Ye}),Te.data=Be)),aI(ne,i,G,o,X)}G0(ne,r)})}function Kc(i,r,o){return{instance:i,listener:r,currentTarget:o}}function ad(i,r){for(var o=r+"Capture",c=[];i!==null;){var d=i,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Qi(i,o),d!=null&&c.unshift(Kc(i,d,m)),d=Qi(i,r),d!=null&&c.push(Kc(i,d,m))),i.tag===3)return c;i=i.return}return[]}function uI(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function W0(i,r,o,c,d){for(var m=r._reactName,v=[];o!==null&&o!==c;){var w=o,M=w.alternate,G=w.stateNode;if(w=w.tag,M!==null&&M===c)break;w!==5&&w!==26&&w!==27||G===null||(M=G,d?(G=Qi(o,m),G!=null&&v.unshift(Kc(o,G,M))):d||(G=Qi(o,m),G!=null&&v.push(Kc(o,G,M)))),o=o.return}v.length!==0&&i.push({event:r,listeners:v})}var hI=/\r\n?/g,dI=/\u0000|\uFFFD/g;function Y0(i){return(typeof i=="string"?i:""+i).replace(hI,`
`).replace(dI,"")}function Q0(i,r){return r=Y0(r),Y0(i)===r}function St(i,r,o,c,d,m){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||ti(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&ti(i,""+c);break;case"className":_i(i,"class",c);break;case"tabIndex":_i(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(i,o,c);break;case"style":hc(i,c,m);break;case"data":if(r!=="object"){_i(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ko(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&St(i,r,"name",d.name,d,null),St(i,r,"formEncType",d.formEncType,d,null),St(i,r,"formMethod",d.formMethod,d,null),St(i,r,"formTarget",d.formTarget,d,null)):(St(i,r,"encType",d.encType,d,null),St(i,r,"method",d.method,d,null),St(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ko(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=Yi);break;case"onScroll":c!=null&&Ge("scroll",i);break;case"onScrollEnd":c!=null&&Ge("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=ko(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Ge("beforetoggle",i),Ge("toggle",i),Do(i,"popover",c);break;case"xlinkActuate":en(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":en(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":en(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":en(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":en(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":en(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":en(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":en(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":en(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Do(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ah.get(o)||o,Do(i,o,c))}}function Np(i,r,o,c,d,m){switch(o){case"style":hc(i,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?ti(i,c):(typeof c=="number"||typeof c=="bigint")&&ti(i,""+c);break;case"onScroll":c!=null&&Ge("scroll",i);break;case"onScrollEnd":c!=null&&Ge("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),m=i[Zt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,d);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):Do(i,o,c)}}}function xn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",i),Ge("load",i);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:St(i,r,m,v,o,null)}}d&&St(i,r,"srcSet",o.srcSet,o,null),c&&St(i,r,"src",o.src,o,null);return;case"input":Ge("invalid",i);var w=m=v=d=null,M=null,G=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":d=X;break;case"type":v=X;break;case"checked":M=X;break;case"defaultChecked":G=X;break;case"value":m=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:St(i,r,c,X,o,null)}}ih(i,m,w,M,G,v,d,!1);return;case"select":Ge("invalid",i),c=v=m=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":v=w;break;case"multiple":c=w;default:St(i,r,d,w,o,null)}r=m,o=v,i.multiple=!!c,r!=null?Cr(i,!!c,r,!1):o!=null&&Cr(i,!!c,o,!0);return;case"textarea":Ge("invalid",i),m=d=c=null;for(v in o)if(o.hasOwnProperty(v)&&(w=o[v],w!=null))switch(v){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:St(i,r,v,w,o,null)}Rr(i,c,d,m);return;case"option":for(M in o)if(o.hasOwnProperty(M)&&(c=o[M],c!=null))switch(M){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:St(i,r,M,c,o,null)}return;case"dialog":Ge("beforetoggle",i),Ge("toggle",i),Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":Ge("load",i);break;case"video":case"audio":for(c=0;c<Gc.length;c++)Ge(Gc[c],i);break;case"image":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"embed":case"source":case"link":Ge("error",i),Ge("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in o)if(o.hasOwnProperty(G)&&(c=o[G],c!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:St(i,r,G,c,o,null)}return;default:if(Oo(r)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&Np(i,r,X,c,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(c=o[w],c!=null&&St(i,r,w,c,o,null))}function fI(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,v=null,w=null,M=null,G=null,X=null;for($ in o){var ne=o[$];if(o.hasOwnProperty($)&&ne!=null)switch($){case"checked":break;case"value":break;case"defaultValue":M=ne;default:c.hasOwnProperty($)||St(i,r,$,null,c,ne)}}for(var W in c){var $=c[W];if(ne=o[W],c.hasOwnProperty(W)&&($!=null||ne!=null))switch(W){case"type":m=$;break;case"name":d=$;break;case"checked":G=$;break;case"defaultChecked":X=$;break;case"value":v=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:$!==ne&&St(i,r,W,$,c,ne)}}Mo(i,v,w,M,G,X,m,d);return;case"select":$=v=w=W=null;for(m in o)if(M=o[m],o.hasOwnProperty(m)&&M!=null)switch(m){case"value":break;case"multiple":$=M;default:c.hasOwnProperty(m)||St(i,r,m,null,c,M)}for(d in c)if(m=c[d],M=o[d],c.hasOwnProperty(d)&&(m!=null||M!=null))switch(d){case"value":W=m;break;case"defaultValue":w=m;break;case"multiple":v=m;default:m!==M&&St(i,r,d,m,c,M)}r=w,o=v,c=$,W!=null?Cr(i,!!o,W,!1):!!c!=!!o&&(r!=null?Cr(i,!!o,r,!0):Cr(i,!!o,o?[]:"",!1));return;case"textarea":$=W=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:St(i,r,w,null,c,d)}for(v in c)if(d=c[v],m=o[v],c.hasOwnProperty(v)&&(d!=null||m!=null))switch(v){case"value":W=d;break;case"defaultValue":$=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&St(i,r,v,d,c,m)}sh(i,W,$);return;case"option":for(var ve in o)if(W=o[ve],o.hasOwnProperty(ve)&&W!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:St(i,r,ve,null,c,W)}for(M in c)if(W=c[M],$=o[M],c.hasOwnProperty(M)&&W!==$&&(W!=null||$!=null))switch(M){case"selected":i.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:St(i,r,M,W,c,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ie in o)W=o[Ie],o.hasOwnProperty(Ie)&&W!=null&&!c.hasOwnProperty(Ie)&&St(i,r,Ie,null,c,W);for(G in c)if(W=c[G],$=o[G],c.hasOwnProperty(G)&&W!==$&&(W!=null||$!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:St(i,r,G,W,c,$)}return;default:if(Oo(r)){for(var wt in o)W=o[wt],o.hasOwnProperty(wt)&&W!==void 0&&!c.hasOwnProperty(wt)&&Np(i,r,wt,void 0,c,W);for(X in c)W=c[X],$=o[X],!c.hasOwnProperty(X)||W===$||W===void 0&&$===void 0||Np(i,r,X,W,c,$);return}}for(var j in o)W=o[j],o.hasOwnProperty(j)&&W!=null&&!c.hasOwnProperty(j)&&St(i,r,j,null,c,W);for(ne in c)W=c[ne],$=o[ne],!c.hasOwnProperty(ne)||W===$||W==null&&$==null||St(i,r,ne,W,c,$)}function $0(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mI(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var d=o[c],m=d.transferSize,v=d.initiatorType,w=d.duration;if(m&&w&&$0(v)){for(v=0,w=d.responseEnd,c+=1;c<o.length;c++){var M=o[c],G=M.startTime;if(G>w)break;var X=M.transferSize,ne=M.initiatorType;X&&$0(ne)&&(M=M.responseEnd,v+=X*(M<w?1:(w-G)/(M-G)))}if(--c,r+=8*(m+v)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var xp=null,Dp=null;function od(i){return i.nodeType===9?i:i.ownerDocument}function X0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Mp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Op=null;function pI(){var i=window.event;return i&&i.type==="popstate"?i===Op?!1:(Op=i,!0):(Op=null,!1)}var J0=typeof setTimeout=="function"?setTimeout:void 0,gI=typeof clearTimeout=="function"?clearTimeout:void 0,eT=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof eT<"u"?function(i){return eT.resolve(null).then(i).catch(yI)}:J0;function yI(i){setTimeout(function(){throw i})}function $r(i){return i==="head"}function tT(i,r){var o=r,c=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(c===0){i.removeChild(d),ml(r);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Wc(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,Wc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,w=m.nodeName;m[F]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Wc(i.ownerDocument.body);o=d}while(o);ml(r)}function nT(i,r){var o=i;i=0;do{var c=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=c}while(o)}function kp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":kp(o),Se(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function vI(i,r,o,c){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[F])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=zi(i.nextSibling),i===null)break}return null}function EI(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=zi(i.nextSibling),i===null))return null;return i}function iT(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=zi(i.nextSibling),i===null))return null;return i}function Pp(i){return i.data==="$?"||i.data==="$~"}function Lp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function TI(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function zi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var Vp=null;function sT(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return zi(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function rT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function aT(i,r,o){switch(r=od(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Wc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Se(i)}var Bi=new Map,oT=new Set;function ld(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var rr=re.d;re.d={f:SI,r:wI,D:bI,C:AI,L:CI,m:RI,X:NI,S:II,M:xI};function SI(){var i=rr.f(),r=Jh();return i||r}function wI(i){var r=dt(i);r!==null&&r.tag===5&&r.type==="form"?bE(r):rr.r(i)}var hl=typeof document>"u"?null:document;function lT(i,r,o){var c=hl;if(c&&typeof r=="string"&&r){var d=ei(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),oT.has(d)||(oT.add(d),i={rel:i,crossOrigin:o,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),xn(r,"link",i),Jt(r),c.head.appendChild(r)))}}function bI(i){rr.D(i),lT("dns-prefetch",i,null)}function AI(i,r){rr.C(i,r),lT("preconnect",i,r)}function CI(i,r,o){rr.L(i,r,o);var c=hl;if(c&&i&&r){var d='link[rel="preload"][as="'+ei(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+ei(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+ei(o.imageSizes)+'"]')):d+='[href="'+ei(i)+'"]';var m=d;switch(r){case"style":m=dl(i);break;case"script":m=fl(i)}Bi.has(m)||(i=S({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Bi.set(m,i),c.querySelector(d)!==null||r==="style"&&c.querySelector(Yc(m))||r==="script"&&c.querySelector(Qc(m))||(r=c.createElement("link"),xn(r,"link",i),Jt(r),c.head.appendChild(r)))}}function RI(i,r){rr.m(i,r);var o=hl;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+ei(c)+'"][href="'+ei(i)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fl(i)}if(!Bi.has(m)&&(i=S({rel:"modulepreload",href:i},r),Bi.set(m,i),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Qc(m)))return}c=o.createElement("link"),xn(c,"link",i),Jt(c),o.head.appendChild(c)}}}function II(i,r,o){rr.S(i,r,o);var c=hl;if(c&&i){var d=fs(c).hoistableStyles,m=dl(i);r=r||"default";var v=d.get(m);if(!v){var w={loading:0,preload:null};if(v=c.querySelector(Yc(m)))w.loading=5;else{i=S({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Bi.get(m))&&jp(i,o);var M=v=c.createElement("link");Jt(M),xn(M,"link",i),M._p=new Promise(function(G,X){M.onload=G,M.onerror=X}),M.addEventListener("load",function(){w.loading|=1}),M.addEventListener("error",function(){w.loading|=2}),w.loading|=4,cd(v,r,c)}v={type:"stylesheet",instance:v,count:1,state:w},d.set(m,v)}}}function NI(i,r){rr.X(i,r);var o=hl;if(o&&i){var c=fs(o).hoistableScripts,d=fl(i),m=c.get(d);m||(m=o.querySelector(Qc(d)),m||(i=S({src:i,async:!0},r),(r=Bi.get(d))&&Up(i,r),m=o.createElement("script"),Jt(m),xn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function xI(i,r){rr.M(i,r);var o=hl;if(o&&i){var c=fs(o).hoistableScripts,d=fl(i),m=c.get(d);m||(m=o.querySelector(Qc(d)),m||(i=S({src:i,async:!0,type:"module"},r),(r=Bi.get(d))&&Up(i,r),m=o.createElement("script"),Jt(m),xn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function cT(i,r,o,c){var d=(d=Re.current)?ld(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=dl(o.href),o=fs(d).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=dl(o.href);var m=fs(d).hoistableStyles,v=m.get(i);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,v),(m=d.querySelector(Yc(i)))&&!m._p&&(v.instance=m,v.state.loading=5),Bi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(i,o),m||DI(d,i,o,v.state))),r&&c===null)throw Error(s(528,""));return v}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=fl(o),o=fs(d).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function dl(i){return'href="'+ei(i)+'"'}function Yc(i){return'link[rel="stylesheet"]['+i+"]"}function uT(i){return S({},i,{"data-precedence":i.precedence,precedence:null})}function DI(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),xn(r,"link",o),Jt(r),i.head.appendChild(r))}function fl(i){return'[src="'+ei(i)+'"]'}function Qc(i){return"script[async]"+i}function hT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+ei(o.href)+'"]');if(c)return r.instance=c,Jt(c),c;var d=S({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),Jt(c),xn(c,"style",d),cd(c,o.precedence,i),r.instance=c;case"stylesheet":d=dl(o.href);var m=i.querySelector(Yc(d));if(m)return r.state.loading|=4,r.instance=m,Jt(m),m;c=uT(o),(d=Bi.get(d))&&jp(c,d),m=(i.ownerDocument||i).createElement("link"),Jt(m);var v=m;return v._p=new Promise(function(w,M){v.onload=w,v.onerror=M}),xn(m,"link",c),r.state.loading|=4,cd(m,o.precedence,i),r.instance=m;case"script":return m=fl(o.src),(d=i.querySelector(Qc(m)))?(r.instance=d,Jt(d),d):(c=o,(d=Bi.get(m))&&(c=S({},o),Up(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),Jt(d),xn(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,cd(c,o.precedence,i));return r.instance}function cd(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,v=0;v<c.length;v++){var w=c[v];if(w.dataset.precedence===r)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function jp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Up(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ud=null;function dT(i,r,o){if(ud===null){var c=new Map,d=ud=new Map;d.set(o,c)}else d=ud,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var m=o[d];if(!(m[F]||m[st]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(r)||"";v=i+v;var w=c.get(v);w?w.push(m):c.set(v,[m])}}return c}function fT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function MI(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function mT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function OI(i,r,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=dl(c.href),m=r.querySelector(Yc(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=hd.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=m,Jt(m);return}m=r.ownerDocument||r,c=uT(c),(d=Bi.get(d))&&jp(c,d),m=m.createElement("link"),Jt(m);var v=m;v._p=new Promise(function(w,M){v.onload=w,v.onerror=M}),xn(m,"link",c),o.instance=m}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=hd.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var zp=0;function kI(i,r){return i.stylesheets&&i.count===0&&fd(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var c=setTimeout(function(){if(i.stylesheets&&fd(i,i.stylesheets),i.unsuspend){var m=i.unsuspend;i.unsuspend=null,m()}},6e4+r);0<i.imgBytes&&zp===0&&(zp=62500*mI());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&fd(i,i.stylesheets),i.unsuspend)){var m=i.unsuspend;i.unsuspend=null,m()}},(i.imgBytes>zp?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function hd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var dd=null;function fd(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,dd=new Map,r.forEach(PI,i),dd=null,hd.call(i))}function PI(i,r){if(!(r.state.loading&4)){var o=dd.get(i);if(o)var c=o.get(null);else{o=new Map,dd.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var v=d[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),c=v)}c&&o.set(null,c)}d=r.instance,v=d.getAttribute("data-precedence"),m=o.get(v)||c,m===c&&o.set(null,d),o.set(v,d),this.count++,c=hd.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var $c={$$typeof:le,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function LI(i,r,o,c,d,m,v,w,M){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function pT(i,r,o,c,d,m,v,w,M,G,X,ne){return i=new LI(i,r,o,v,M,G,X,ne,w),r=1,m===!0&&(r|=24),m=vi(3,null,null,r),i.current=m,m.stateNode=i,r=vm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:r},wm(m),i}function gT(i){return i?(i=Ho,i):Ho}function _T(i,r,o,c,d,m){d=gT(d),c.context===null?c.context=d:c.pendingContext=d,c=Ur(r),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=zr(i,c,r),o!==null&&(ai(o,i,r),Ic(o,i,r))}function yT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Bp(i,r){yT(i,r),(i=i.alternate)&&yT(i,r)}function vT(i){if(i.tag===13||i.tag===31){var r=Ba(i,67108864);r!==null&&ai(r,i,67108864),Bp(i,67108864)}}function ET(i){if(i.tag===13||i.tag===31){var r=bi();r=An(r);var o=Ba(i,r);o!==null&&ai(o,i,r),Bp(i,r)}}var md=!0;function VI(i,r,o,c){var d=U.T;U.T=null;var m=re.p;try{re.p=2,Fp(i,r,o,c)}finally{re.p=m,U.T=d}}function jI(i,r,o,c){var d=U.T;U.T=null;var m=re.p;try{re.p=8,Fp(i,r,o,c)}finally{re.p=m,U.T=d}}function Fp(i,r,o,c){if(md){var d=qp(c);if(d===null)Ip(i,r,c,pd,o),ST(i,c);else if(zI(d,i,r,o,c))c.stopPropagation();else if(ST(i,c),r&4&&-1<UI.indexOf(i)){for(;d!==null;){var m=dt(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Wn(m.pendingLanes);if(v!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var M=1<<31-it(v);w.entanglements[1]|=M,v&=~M}Cs(m),(ut&6)===0&&(Xh=nt()+500,Hc(0))}}break;case 31:case 13:w=Ba(m,2),w!==null&&ai(w,m,2),Jh(),Bp(m,2)}if(m=qp(c),m===null&&Ip(i,r,c,pd,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Ip(i,r,c,null,o)}}function qp(i){return i=Di(i),Hp(i)}var pd=null;function Hp(i){if(pd=null,i=rt(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return pd=i,null}function TT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case qt:return 2;case Xt:return 8;case Pn:case zs:return 32;case bn:return 268435456;default:return 32}default:return 32}}var Gp=!1,Xr=null,Zr=null,Jr=null,Xc=new Map,Zc=new Map,ea=[],UI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ST(i,r){switch(i){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Xc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zc.delete(r.pointerId)}}function Jc(i,r,o,c,d,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=dt(r),r!==null&&vT(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function zI(i,r,o,c,d){switch(r){case"focusin":return Xr=Jc(Xr,i,r,o,c,d),!0;case"dragenter":return Zr=Jc(Zr,i,r,o,c,d),!0;case"mouseover":return Jr=Jc(Jr,i,r,o,c,d),!0;case"pointerover":var m=d.pointerId;return Xc.set(m,Jc(Xc.get(m)||null,i,r,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zc.set(m,Jc(Zc.get(m)||null,i,r,o,c,d)),!0}return!1}function wT(i){var r=rt(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,pi(i.priority,function(){ET(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,pi(i.priority,function(){ET(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function gd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=qp(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);dc=c,o.target.dispatchEvent(c),dc=null}else return r=dt(o),r!==null&&vT(r),i.blockedOn=o,!1;r.shift()}return!0}function bT(i,r,o){gd(i)&&o.delete(r)}function BI(){Gp=!1,Xr!==null&&gd(Xr)&&(Xr=null),Zr!==null&&gd(Zr)&&(Zr=null),Jr!==null&&gd(Jr)&&(Jr=null),Xc.forEach(bT),Zc.forEach(bT)}function _d(i,r){i.blockedOn===r&&(i.blockedOn=null,Gp||(Gp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,BI)))}var yd=null;function AT(i){yd!==i&&(yd=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){yd===i&&(yd=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(Hp(c||o)===null)continue;break}var m=dt(o);m!==null&&(i.splice(r,3),r-=3,qm(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function ml(i){function r(M){return _d(M,i)}Xr!==null&&_d(Xr,i),Zr!==null&&_d(Zr,i),Jr!==null&&_d(Jr,i),Xc.forEach(r),Zc.forEach(r);for(var o=0;o<ea.length;o++){var c=ea[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<ea.length&&(o=ea[0],o.blockedOn===null);)wT(o),o.blockedOn===null&&ea.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],v=d[Zt]||null;if(typeof m=="function")v||AT(o);else if(v){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,v=m[Zt]||null)w=v.formAction;else if(Hp(d)!==null)continue}else w=v.action;typeof w=="function"?o[c+1]=w:(o.splice(c,3),c-=3),AT(o)}}}function CT(){function i(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function Kp(i){this._internalRoot=i}vd.prototype.render=Kp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=bi();_T(o,c,i,r,null,null)},vd.prototype.unmount=Kp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;_T(i.current,2,null,i,null,null),Jh(),r[xi]=null}};function vd(i){this._internalRoot=i}vd.prototype.unstable_scheduleHydration=function(i){if(i){var r=xo();i={blockedOn:null,target:i,priority:r};for(var o=0;o<ea.length&&r!==0&&r<ea[o].priority;o++);ea.splice(o,0,i),o===0&&wT(i)}};var RT=e.version;if(RT!=="19.2.4")throw Error(s(527,RT,"19.2.4"));re.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?E(i):null,i=i===null?null:i.stateNode,i};var FI={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ed.isDisabled&&Ed.supportsFiber)try{jt=Ed.inject(FI),Ut=Ed}catch{}}return tu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",d=kE,m=PE,v=LE;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=pT(i,1,!1,null,null,o,c,null,d,m,v,CT),i[xi]=r.current,Rp(i),new Kp(r)},tu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,d="",m=kE,v=PE,w=LE,M=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(M=o.formState)),r=pT(i,1,!0,r,o??null,c,d,M,m,v,w,CT),r.context=gT(null),o=r.current,c=bi(),c=An(c),d=Ur(c),d.callback=null,zr(o,d,c),o=c,r.current.lanes=o,Yn(r,o),Cs(r),i[xi]=r.current,Rp(i),new vd(r)},tu.version="19.2.4",tu}var VT;function ZI(){if(VT)return Qp.exports;VT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Qp.exports=XI(),Qp.exports}var JI=ZI();const eN=()=>{};var jT={};/**
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
 */const Rw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const me=function(n,e){if(!n)throw Fl(e)},Fl=function(n){return new Error("Firebase Database ("+Rw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Iw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},tN=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],f=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},x_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,f=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,E=l>>2,S=(l&3)<<4|f>>4;let A=(f&15)<<2|g>>6,V=g&63;p||(V=64,u||(A=64)),s.push(t[E],t[S],t[A],t[V])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const S=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||S==null)throw new nN;const A=l<<2|f>>4;if(s.push(A),g!==64){const V=f<<4&240|g>>2;if(s.push(V),S!==64){const H=g<<6&192|S;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nw=function(n){const e=Iw(n);return x_.encodeByteArray(e,!0)},Gd=function(n){return Nw(n).replace(/\./g,"")},Kd=function(n){try{return x_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iN(n){return xw(void 0,n)}function xw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sN(t)||(n[t]=xw(n[t],e[t]));return n}function sN(n){return n!=="__proto__"}/**
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
 */function rN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aN=()=>rN().__FIREBASE_DEFAULTS__,oN=()=>{if(typeof process>"u"||typeof jT>"u")return;const n=jT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kd(n[1]);return e&&JSON.parse(e)},wf=()=>{try{return eN()||aN()||oN()||lN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dw=n=>{var e,t;return(t=(e=wf())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Mw=n=>{const e=Dw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ow=()=>{var n;return(n=wf())==null?void 0:n.config},kw=n=>{var e;return(e=wf())==null?void 0:e[`_${n}`]};/**
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
 */class D_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Pw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gd(JSON.stringify(t)),Gd(JSON.stringify(u)),""].join(".")}/**
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
 */function Hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hn())}function cN(){var e;const n=(e=wf())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hN(){const n=Hn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dN(){return Rw.NODE_ADMIN===!0}function fN(){return!cN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k_(){try{return typeof indexedDB=="object"}catch{return!1}}function P_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function Vw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mN="FirebaseError";class us extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mN,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?pN(l,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new us(a,f,s)}}function pN(n,e){return n.replace(gN,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const gN=/\{\$([^}]+)}/g;/**
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
 */function Au(n){return JSON.parse(n)}function Mn(n){return JSON.stringify(n)}/**
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
 */const jw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Au(Kd(l[0])||""),t=Au(Kd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},_N=function(n){const e=jw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yN=function(n){const e=jw(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Sr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function jg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wd(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Ps(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],u=e[a];if(UT(l)&&UT(u)){if(!Ps(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function UT(n){return n!==null&&typeof n=="object"}/**
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
 */function ql(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function uu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function hu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class vN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)s[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)s[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const A=s[S-3]^s[S-8]^s[S-14]^s[S-16];s[S]=(A<<1|A>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,E;for(let S=0;S<80;S++){S<40?S<20?(g=f^l&(u^f),E=1518500249):(g=l^u^f,E=1859775393):S<60?(g=l&u|f&(l|u),E=2400959708):(g=l^u^f,E=3395469782);const A=(a<<5|a>>>27)+g+p+E+s[S]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=A}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function EN(n,e){const t=new TN(n,e);return t.subscribe.bind(t)}class TN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");SN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Jp),a.error===void 0&&(a.error=Jp),a.complete===void 0&&(a.complete=Jp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jp(){}function wN(n,e){return`${n} failed: ${e} argument `}/**
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
 */const bN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,me(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},bf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const AN=1e3,CN=2,RN=14400*1e3,IN=.5;function zT(n,e=AN,t=CN){const s=e*Math.pow(t,n),a=Math.round(IN*s*(Math.random()-.5)*2);return Math.min(RN,s+a)}/**
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
 */function Nt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function So(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L_(n){return(await fetch(n,{credentials:"include"})).ok}class Hi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const eo="[DEFAULT]";/**
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
 */class NN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new D_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DN(e))try{this.getOrInitializeService({instanceIdentifier:eo})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=eo){return this.instances.has(e)}getOptions(e=eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=eo){return this.component?this.component.multipleInstances?e:eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xN(n){return n===eo?void 0:n}function DN(n){return n.instantiationMode==="EAGER"}/**
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
 */class MN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ke||(Ke={}));const ON={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},kN=Ke.INFO,PN={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},LN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=PN[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=kN,this._logHandler=LN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ON[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const VN=(n,e)=>e.some(t=>n instanceof t);let BT,FT;function jN(){return BT||(BT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UN(){return FT||(FT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uw=new WeakMap,Ug=new WeakMap,zw=new WeakMap,eg=new WeakMap,V_=new WeakMap;function zN(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(oa(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Uw.set(t,n)}).catch(()=>{}),V_.set(e,n),e}function BN(n){if(Ug.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Ug.set(n,e)}let zg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ug.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oa(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FN(n){zg=n(zg)}function qN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(tg(this),e,...t);return zw.set(s,e.sort?e.sort():[e]),oa(s)}:UN().includes(n)?function(...e){return n.apply(tg(this),e),oa(Uw.get(this))}:function(...e){return oa(n.apply(tg(this),e))}}function HN(n){return typeof n=="function"?qN(n):(n instanceof IDBTransaction&&BN(n),VN(n,jN())?new Proxy(n,zg):n)}function oa(n){if(n instanceof IDBRequest)return zN(n);if(eg.has(n))return eg.get(n);const e=HN(n);return e!==n&&(eg.set(n,e),V_.set(e,n)),e}const tg=n=>V_.get(n);function Bw(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),f=oa(u);return s&&u.addEventListener("upgradeneeded",p=>{s(oa(u.result),p.oldVersion,p.newVersion,oa(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const GN=["get","getKey","getAll","getAllKeys","count"],KN=["put","add","delete","clear"],ng=new Map;function qT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ng.get(e))return ng.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=KN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||GN.includes(t)))return;const l=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return ng.set(e,l),l}FN(n=>({...n,get:(e,t,s)=>qT(e,t)||n.get(e,t,s),has:(e,t)=>!!qT(e,t)||n.has(e,t)}));/**
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
 */class WN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function YN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bg="@firebase/app",HT="0.14.10";/**
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
 */const pr=new ju("@firebase/app"),QN="@firebase/app-compat",$N="@firebase/analytics-compat",XN="@firebase/analytics",ZN="@firebase/app-check-compat",JN="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",ix="@firebase/data-connect",sx="@firebase/database-compat",rx="@firebase/functions",ax="@firebase/functions-compat",ox="@firebase/installations",lx="@firebase/installations-compat",cx="@firebase/messaging",ux="@firebase/messaging-compat",hx="@firebase/performance",dx="@firebase/performance-compat",fx="@firebase/remote-config",mx="@firebase/remote-config-compat",px="@firebase/storage",gx="@firebase/storage-compat",_x="@firebase/firestore",yx="@firebase/ai",vx="@firebase/firestore-compat",Ex="firebase",Tx="12.11.0";/**
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
 */const Fg="[DEFAULT]",Sx={[Bg]:"fire-core",[QN]:"fire-core-compat",[XN]:"fire-analytics",[$N]:"fire-analytics-compat",[JN]:"fire-app-check",[ZN]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[ix]:"fire-data-connect",[sx]:"fire-rtdb-compat",[rx]:"fire-fn",[ax]:"fire-fn-compat",[ox]:"fire-iid",[lx]:"fire-iid-compat",[cx]:"fire-fcm",[ux]:"fire-fcm-compat",[hx]:"fire-perf",[dx]:"fire-perf-compat",[fx]:"fire-rc",[mx]:"fire-rc-compat",[px]:"fire-gcs",[gx]:"fire-gcs-compat",[_x]:"fire-fst",[vx]:"fire-fst-compat",[yx]:"fire-vertex","fire-js":"fire-js",[Ex]:"fire-js-all"};/**
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
 */const Cu=new Map,wx=new Map,qg=new Map;function GT(n,e){try{n.container.addComponent(e)}catch(t){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ls(n){const e=n.name;if(qg.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;qg.set(e,n);for(const t of Cu.values())GT(t,n);for(const t of wx.values())GT(t,n);return!0}function Ea(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function li(n){return n==null?!1:n.settings!==void 0}/**
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
 */const bx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},la=new To("app","Firebase",bx);/**
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
 */class Ax{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw la.create("app-deleted",{appName:this._name})}}/**
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
 */const wo=Tx;function Fw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Fg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw la.create("bad-app-name",{appName:String(a)});if(t||(t=Ow()),!t)throw la.create("no-options");const l=Cu.get(a);if(l){if(Ps(t,l.options)&&Ps(s,l.config))return l;throw la.create("duplicate-app",{appName:a})}const u=new MN(a);for(const p of qg.values())u.addComponent(p);const f=new Ax(t,s,u);return Cu.set(a,f),f}function Uu(n=Fg){const e=Cu.get(n);if(!e&&n===Fg&&Ow())return Fw();if(!e)throw la.create("no-app",{appName:n});return e}function Cx(){return Array.from(Cu.values())}function hi(n,e,t){let s=Sx[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(u.join(" "));return}ls(new Hi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rx="firebase-heartbeat-database",Ix=1,Ru="firebase-heartbeat-store";let ig=null;function qw(){return ig||(ig=Bw(Rx,Ix,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(n=>{throw la.create("idb-open",{originalErrorMessage:n.message})})),ig}async function Nx(n){try{const t=(await qw()).transaction(Ru),s=await t.objectStore(Ru).get(Hw(n));return await t.done,s}catch(e){if(e instanceof us)pr.warn(e.message);else{const t=la.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(t.message)}}}async function KT(n,e){try{const s=(await qw()).transaction(Ru,"readwrite");await s.objectStore(Ru).put(e,Hw(n)),await s.done}catch(t){if(t instanceof us)pr.warn(t.message);else{const s=la.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pr.warn(s.message)}}}function Hw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xx=1024,Dx=30;class Mx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=WT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Dx){const u=Px(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=WT(),{heartbeatsToSend:s,unsentEntries:a}=Ox(this._heartbeatsCache.heartbeats),l=Gd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return pr.warn(t),""}}}function WT(){return new Date().toISOString().substring(0,10)}function Ox(n,e=xx){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),YT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),YT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k_()?P_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return KT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return KT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function YT(n){return Gd(JSON.stringify({version:2,heartbeats:n})).length}function Px(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Lx(n){ls(new Hi("platform-logger",e=>new WN(e),"PRIVATE")),ls(new Hi("heartbeat",e=>new Mx(e),"PRIVATE")),hi(Bg,HT,n),hi(Bg,HT,"esm2020"),hi("fire-js","")}Lx("");function Gw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vx=Gw,Kw=new To("auth","Firebase",Gw());/**
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
 */const Yd=new ju("@firebase/auth");function jx(n,...e){Yd.logLevel<=Ke.WARN&&Yd.warn(`Auth (${wo}): ${n}`,...e)}function Od(n,...e){Yd.logLevel<=Ke.ERROR&&Yd.error(`Auth (${wo}): ${n}`,...e)}/**
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
 */function Gi(n,...e){throw U_(n,...e)}function rs(n,...e){return U_(n,...e)}function j_(n,e,t){const s={...Vx(),[e]:t};return new To("auth","Firebase",s).create(e,{appName:n.name})}function dr(n){return j_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ux(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Gi(n,"argument-error"),j_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function U_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Kw.create(n,...e)}function xe(n,e,...t){if(!n)throw U_(e,...t)}function lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Od(e),new Error(e)}function gr(n,e){n||lr(e)}/**
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
 */function Hg(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function zx(){return QT()==="http:"||QT()==="https:"}function QT(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zx()||O_()||"connection"in navigator)?navigator.onLine:!0}function Fx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,gr(t>e,"Short delay should be less than long delay!"),this.isMobile=M_()||Lw()}get(){return Bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function z_(n,e){gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ww{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gx=new zu(3e4,6e4);function Ta(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function js(n,e,t,s,a={}){return Yw(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const f=ql({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return uN()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&So(n.emulatorConfig.host)&&(g.credentials="include"),Ww.fetch()(await Qw(n,n.config.apiHost,t,f),g)})}async function Yw(n,e,t){n._canInitEmulator=!1;const s={...qx,...e};try{const a=new Wx(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Td(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Td(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Td(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Td(n,"user-disabled",u);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw j_(n,E,g);Gi(n,E)}}catch(a){if(a instanceof us)throw a;Gi(n,"network-request-failed",{message:String(a)})}}async function Bu(n,e,t,s,a={}){const l=await js(n,e,t,s,a);return"mfaPendingCredential"in l&&Gi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Qw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?z_(n.config,a):`${n.config.apiScheme}://${a}`;return Hx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function Kx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rs(this.auth,"network-request-failed")),Gx.get())})}}function Td(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=rs(n,e,s);return a.customData._tokenResponse=t,a}function $T(n){return n!==void 0&&n.enterprise!==void 0}class Yx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Kx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qx(n,e){return js(n,"GET","/v2/recaptchaConfig",Ta(n,e))}/**
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
 */async function $x(n,e){return js(n,"POST","/v1/accounts:delete",e)}async function Qd(n,e){return js(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xx(n,e=!1){const t=Nt(n),s=await t.getIdToken(e),a=B_(s);xe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:gu(sg(a.auth_time)),issuedAtTime:gu(sg(a.iat)),expirationTime:gu(sg(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function sg(n){return Number(n)*1e3}function B_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Od("JWT malformed, contained fewer than 3 sections"),null;try{const a=Kd(t);return a?JSON.parse(a):(Od("Failed to decode base64 JWT payload"),null)}catch(a){return Od("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function XT(n){const e=B_(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function co(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof us&&Zx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Zx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $d(n){var S;const e=n.auth,t=await n.getIdToken(),s=await co(n,Qd(e,{idToken:t}));xe(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=(S=a.providerUserInfo)!=null&&S.length?$w(a.providerUserInfo):[],u=tD(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Gg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function eD(n){const e=Nt(n);await $d(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tD(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function $w(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function nD(n,e){const t=await Yw(n,{},async()=>{const s=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await Qw(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return n.emulatorConfig&&So(n.emulatorConfig.host)&&(p.credentials="include"),Ww.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iD(n,e){return js(n,"POST","/v2/accounts:revokeToken",Ta(n,e))}/**
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
 */class Sl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=XT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await nD(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new Sl;return s&&(xe(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(xe(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(xe(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sl,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
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
 */function na(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class is{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Gg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await co(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xx(this,e)}reload(){return eD(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new is({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $d(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(li(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await co(this,$x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:V,providerData:H,stsTokenManager:Z}=t;xe(S&&Z,e,"internal-error");const Y=Sl.fromJSON(this.name,Z);xe(typeof S=="string",e,"internal-error"),na(s,e.name),na(a,e.name),xe(typeof A=="boolean",e,"internal-error"),xe(typeof V=="boolean",e,"internal-error"),na(l,e.name),na(u,e.name),na(f,e.name),na(p,e.name),na(g,e.name),na(E,e.name);const pe=new is({uid:S,auth:e,email:a,emailVerified:A,displayName:s,isAnonymous:V,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:Y,createdAt:g,lastLoginAt:E});return H&&Array.isArray(H)&&(pe.providerData=H.map(ue=>({...ue}))),p&&(pe._redirectEventId=p),pe}static async _fromIdTokenResponse(e,t,s=!1){const a=new Sl;a.updateFromServerResponse(t);const l=new is({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await $d(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];xe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?$w(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Sl;f.updateFromIdToken(s);const p=new is({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Gg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const ZT=new Map;function cr(n){gr(n instanceof Function,"Expected a class definition");let e=ZT.get(n);return e?(gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ZT.set(n,e),e)}/**
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
 */class Xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xw.type="NONE";const JT=Xw;/**
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
 */function kd(n,e,t){return`firebase:${n}:${e}:${t}`}class wl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=kd(this.userKey,a.apiKey,l),this.fullPersistenceKey=kd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qd(this.auth,{idToken:e}).catch(()=>{});return t?is._fromGetAccountInfoResponse(this.auth,t,e):null}return is._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wl(cr(JT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||cr(JT);const u=kd(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(u);if(E){let S;if(typeof E=="string"){const A=await Qd(e,{idToken:E}).catch(()=>{});if(!A)break;S=await is._fromGetAccountInfoResponse(e,A,E)}else S=is._fromJSON(e,E);g!==l&&(f=S),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new wl(l,e,s):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new wl(l,e,s))}}/**
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
 */function e1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ib(e))return"Blackberry";if(sb(e))return"Webos";if(Jw(e))return"Safari";if((e.includes("chrome/")||eb(e))&&!e.includes("edge/"))return"Chrome";if(nb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zw(n=Hn()){return/firefox\//i.test(n)}function Jw(n=Hn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eb(n=Hn()){return/crios\//i.test(n)}function tb(n=Hn()){return/iemobile/i.test(n)}function nb(n=Hn()){return/android/i.test(n)}function ib(n=Hn()){return/blackberry/i.test(n)}function sb(n=Hn()){return/webos/i.test(n)}function F_(n=Hn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sD(n=Hn()){var e;return F_(n)&&!!((e=window.navigator)!=null&&e.standalone)}function rD(){return hN()&&document.documentMode===10}function rb(n=Hn()){return F_(n)||nb(n)||sb(n)||ib(n)||/windows phone/i.test(n)||tb(n)}/**
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
 */function ab(n,e=[]){let t;switch(n){case"Browser":t=e1(Hn());break;case"Worker":t=`${e1(Hn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wo}/${s}`}/**
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
 */class aD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,f)=>{try{const p=e(l);u(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function oD(n,e={}){return js(n,"GET","/v2/passwordPolicy",Ta(n,e))}/**
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
 */const lD=6;class cD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class uD{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t1(this),this.idTokenSubscription=new t1(this),this.beforeStateQueue=new aD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cr(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await wl.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qd(this,{idToken:e}),s=await is._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(li(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $d(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(li(this.app))return Promise.reject(dr(this));const t=e?Nt(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return li(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return li(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oD(this),t=new cD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await iD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cr(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await wl.create(this,[cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ab(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(li(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Sa(n){return Nt(n)}class t1{constructor(e){this.auth=e,this.observer=null,this.addObserver=EN(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hD(n){Af=n}function ob(n){return Af.loadJS(n)}function dD(){return Af.recaptchaEnterpriseScript}function fD(){return Af.gapiScript}function mD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class pD{constructor(){this.enterprise=new gD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class gD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _D="recaptcha-enterprise",lb="NO_RECAPTCHA";class yD{constructor(e){this.type=_D,this.auth=Sa(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{Qx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Yx(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,u,f){const p=window.grecaptcha;$T(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(lb)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pD().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(f=>{if(!t&&$T(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=dD();p.length!==0&&(p+=f),ob(p).then(()=>{a(f,l,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function n1(n,e,t,s=!1,a=!1){const l=new yD(n);let u;if(a)u=lb;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Kg(n,e,t,s,a){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await n1(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await n1(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(u)})}/**
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
 */function vD(n,e){const t=Ea(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Ps(l,e??{}))return a;Gi(a,"already-initialized")}return t.initialize({options:e})}function ED(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(cr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function TD(n,e,t){const s=Sa(n);xe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=cb(e),{host:u,port:f}=SD(e),p=f===null?"":`:${f}`,g={url:`${l}//${u}${p}/`},E=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){xe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),xe(Ps(g,s.config.emulator)&&Ps(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,So(u)?L_(`${l}//${u}${p}`):wD()}function cb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function SD(n){const e=cb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:i1(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:i1(u)}}}function i1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,t){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function bD(n,e){return js(n,"POST","/v1/accounts:update",e)}async function AD(n,e){return js(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CD(n,e){return Bu(n,"POST","/v1/accounts:signInWithPassword",Ta(n,e))}/**
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
 */async function RD(n,e){return Bu(n,"POST","/v1/accounts:signInWithEmailLink",Ta(n,e))}async function ID(n,e){return Bu(n,"POST","/v1/accounts:signInWithEmailLink",Ta(n,e))}/**
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
 */class Iu extends q_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Iu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Iu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,t,"signInWithPassword",CD);case"emailLink":return RD(e,{email:this._email,oobCode:this._password});default:Gi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kg(e,s,"signUpPassword",AD);case"emailLink":return ID(e,{idToken:t,email:this._email,oobCode:this._password});default:Gi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bl(n,e){return Bu(n,"POST","/v1/accounts:signInWithIdp",Ta(n,e))}/**
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
 */const ND="http://localhost";class uo extends q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new uo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new uo(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return bl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bl(e,t)}buildRequest(){const e={requestUri:ND,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ql(t)}return e}}/**
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
 */function xD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DD(n){const e=uu(hu(n)).link,t=e?uu(hu(e)).deep_link_id:null,s=uu(hu(n)).deep_link_id;return(s?uu(hu(s)).link:null)||s||t||e||n}class H_{constructor(e){const t=uu(hu(e)),s=t.apiKey??null,a=t.oobCode??null,l=xD(t.mode??null);xe(s&&a&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=DD(e);try{return new H_(t)}catch{return null}}}/**
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
 */class Hl{constructor(){this.providerId=Hl.PROVIDER_ID}static credential(e,t){return Iu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=H_.parseLink(t);return xe(s,"argument-error"),Iu._fromEmailAndCode(e,s.code,s.tenantId)}}Hl.PROVIDER_ID="password";Hl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fu extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ia extends Fu{constructor(){super("facebook.com")}static credential(e){return uo._fromParams({providerId:ia.PROVIDER_ID,signInMethod:ia.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ia.credentialFromTaggedObject(e)}static credentialFromError(e){return ia.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ia.credential(e.oauthAccessToken)}catch{return null}}}ia.FACEBOOK_SIGN_IN_METHOD="facebook.com";ia.PROVIDER_ID="facebook.com";/**
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
 */class or extends Fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return uo._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return or.credential(t,s)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class sa extends Fu{constructor(){super("github.com")}static credential(e){return uo._fromParams({providerId:sa.PROVIDER_ID,signInMethod:sa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sa.credentialFromTaggedObject(e)}static credentialFromError(e){return sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sa.credential(e.oauthAccessToken)}catch{return null}}}sa.GITHUB_SIGN_IN_METHOD="github.com";sa.PROVIDER_ID="github.com";/**
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
 */class ra extends Fu{constructor(){super("twitter.com")}static credential(e,t){return uo._fromParams({providerId:ra.PROVIDER_ID,signInMethod:ra.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ra.credentialFromTaggedObject(e)}static credentialFromError(e){return ra.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ra.credential(t,s)}catch{return null}}}ra.TWITTER_SIGN_IN_METHOD="twitter.com";ra.PROVIDER_ID="twitter.com";/**
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
 */async function MD(n,e){return Bu(n,"POST","/v1/accounts:signUp",Ta(n,e))}/**
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
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await is._fromIdTokenResponse(e,s,a),u=s1(s);return new ho({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=s1(s);return new ho({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function s1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xd extends us{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Xd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Xd(e,t,s,a)}}function ub(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Xd._fromErrorAndOperation(n,l,e,s):l})}async function OD(n,e,t=!1){const s=await co(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ho._forOperation(n,"link",s)}/**
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
 */async function kD(n,e,t=!1){const{auth:s}=n;if(li(s.app))return Promise.reject(dr(s));const a="reauthenticate";try{const l=await co(n,ub(s,a,e,n),t);xe(l.idToken,s,"internal-error");const u=B_(l.idToken);xe(u,s,"internal-error");const{sub:f}=u;return xe(n.uid===f,s,"user-mismatch"),ho._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Gi(s,"user-mismatch"),l}}/**
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
 */async function hb(n,e,t=!1){if(li(n.app))return Promise.reject(dr(n));const s="signIn",a=await ub(n,s,e),l=await ho._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function PD(n,e){return hb(Sa(n),e)}/**
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
 */async function db(n){const e=Sa(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function r1(n,e,t){if(li(n.app))return Promise.reject(dr(n));const s=Sa(n),u=await Kg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MD).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&db(n),p}),f=await ho._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(f.user),f}function a1(n,e,t){return li(n.app)?Promise.reject(dr(n)):PD(Nt(n),Hl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&db(n),s})}/**
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
 */async function LD(n,e){return js(n,"POST","/v1/accounts:update",e)}/**
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
 */async function VD(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Nt(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await co(s,LD(s.auth,l));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function jD(n,e){return UD(Nt(n),null,e)}async function UD(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const u=await co(n,bD(s,l));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function zD(n,e){return Nt(n).setPersistence(e)}function BD(n,e,t,s){return Nt(n).onIdTokenChanged(e,t,s)}function FD(n,e,t){return Nt(n).beforeAuthStateChanged(e,t)}function qD(n,e,t,s){return Nt(n).onAuthStateChanged(e,t,s)}function rg(n){return Nt(n).signOut()}const Zd="__sak";/**
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
 */class fb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zd,"1"),this.storage.removeItem(Zd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HD=1e3,GD=10;class mb extends fb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);rD()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,GD):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},HD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mb.type="LOCAL";const pb=mb;/**
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
 */class gb extends fb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gb.type="SESSION";const _b=gb;/**
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
 */function KD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Cf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async g=>g(t.origin,l)),p=await KD(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cf.receivers=[];/**
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
 */function K_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class WD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const g=K_("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(S){const A=S;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function xs(){return window}function YD(n){xs().location.href=n}/**
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
 */function yb(){return typeof xs().WorkerGlobalScope<"u"&&typeof xs().importScripts=="function"}async function QD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $D(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function XD(){return yb()?self:null}/**
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
 */const vb="firebaseLocalStorageDb",ZD=1,Jd="firebaseLocalStorage",Eb="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rf(n,e){return n.transaction([Jd],e?"readwrite":"readonly").objectStore(Jd)}function JD(){const n=indexedDB.deleteDatabase(vb);return new qu(n).toPromise()}function Wg(){const n=indexedDB.open(vb,ZD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jd,{keyPath:Eb})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jd)?e(s):(s.close(),await JD(),e(await Wg()))})})}async function o1(n,e,t){const s=Rf(n,!0).put({[Eb]:e,value:t});return new qu(s).toPromise()}async function eM(n,e){const t=Rf(n,!1).get(e),s=await new qu(t).toPromise();return s===void 0?null:s.value}function l1(n,e){const t=Rf(n,!0).delete(e);return new qu(t).toPromise()}const tM=800,nM=3;class Tb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cf._getInstance(XD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await QD(),!this.activeServiceWorker)return;this.sender=new WD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$D()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await o1(e,Zd,"1"),await l1(e,Zd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>o1(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>eM(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>l1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Rf(a,!1).getAll();return new qu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tb.type="LOCAL";const iM=Tb;new zu(3e4,6e4);/**
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
 */function Sb(n,e){return e?cr(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class W_ extends q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sM(n){return hb(n.auth,new W_(n),n.bypassAuthState)}function rM(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),kD(t,new W_(n),n.bypassAuthState)}async function aM(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),OD(t,new W_(n),n.bypassAuthState)}/**
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
 */class wb{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sM;case"linkViaPopup":case"linkViaRedirect":return aM;case"reauthViaPopup":case"reauthViaRedirect":return rM;default:Gi(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oM=new zu(2e3,1e4);async function lM(n,e,t){if(li(n.app))return Promise.reject(rs(n,"operation-not-supported-in-this-environment"));const s=Sa(n);Ux(n,e,G_);const a=Sb(s,t);return new no(s,"signInViaPopup",e,a).executeNotNull()}class no extends wb{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=K_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rs(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rs(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rs(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oM.get())};e()}}no.currentPopupAction=null;/**
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
 */const cM="pendingRedirect",Pd=new Map;class uM extends wb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pd.get(this.auth._key());if(!e){try{const s=await hM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pd.set(this.auth._key(),e)}return this.bypassAuthState||Pd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hM(n,e){const t=mM(e),s=fM(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function dM(n,e){Pd.set(n._key(),e)}function fM(n){return cr(n._redirectPersistence)}function mM(n){return kd(cM,n.config.apiKey,n.name)}async function pM(n,e,t=!1){if(li(n.app))return Promise.reject(dr(n));const s=Sa(n),a=Sb(s,e),u=await new uM(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const gM=600*1e3;class _M{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!bb(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(rs(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gM&&this.cachedEventUids.clear(),this.cachedEventUids.has(c1(e))}saveEventToCache(e){this.cachedEventUids.add(c1(e)),this.lastProcessedEventTime=Date.now()}}function c1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bb(n);default:return!1}}/**
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
 */async function vM(n,e={}){return js(n,"GET","/v1/projects",e)}/**
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
 */const EM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TM=/^https?/;async function SM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vM(n);for(const t of e)try{if(wM(t))return}catch{}Gi(n,"unauthorized-domain")}function wM(n){const e=Hg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!TM.test(t))return!1;if(EM.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const bM=new zu(3e4,6e4);function u1(){const n=xs().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function AM(n){return new Promise((e,t)=>{var a,l,u;function s(){u1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{u1(),t(rs(n,"network-request-failed"))},timeout:bM.get()})}if((l=(a=xs().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=xs().gapi)!=null&&u.load)s();else{const f=mD("iframefcb");return xs()[f]=()=>{gapi.load?s():t(rs(n,"network-request-failed"))},ob(`${fD()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Ld=null,e})}let Ld=null;function CM(n){return Ld=Ld||AM(n),Ld}/**
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
 */const RM=new zu(5e3,15e3),IM="__/auth/iframe",NM="emulator/auth/iframe",xM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MM(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?z_(e,NM):`https://${n.config.authDomain}/${IM}`,s={apiKey:e.apiKey,appName:n.name,v:wo},a=DM.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ql(s).slice(1)}`}async function OM(n){const e=await CM(n),t=xs().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:MM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xM,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=rs(n,"network-request-failed"),f=xs().setTimeout(()=>{l(u)},RM.get());function p(){xs().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const kM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PM=500,LM=600,VM="_blank",jM="http://localhost";class h1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UM(n,e,t,s=PM,a=LM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...kM,width:s.toString(),height:a.toString(),top:l,left:u},g=Hn().toLowerCase();t&&(f=eb(g)?VM:t),Zw(g)&&(e=e||jM,p.scrollbars="yes");const E=Object.entries(p).reduce((A,[V,H])=>`${A}${V}=${H},`,"");if(sD(g)&&f!=="_self")return zM(e||"",f),new h1(null);const S=window.open(e||"",f,E);xe(S,n,"popup-blocked");try{S.focus()}catch{}return new h1(S)}function zM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BM="__/auth/handler",FM="emulator/auth/handler",qM=encodeURIComponent("fac");async function d1(n,e,t,s,a,l){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:wo,eventId:a};if(e instanceof G_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",jg(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))u[E]=S}if(e instanceof Fu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),g=p?`#${qM}=${encodeURIComponent(p)}`:"";return`${HM(n)}?${ql(f).slice(1)}${g}`}function HM({config:n}){return n.emulator?z_(n,FM):`https://${n.authDomain}/${BM}`}/**
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
 */const ag="webStorageSupport";class GM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_b,this._completeRedirectFn=pM,this._overrideRedirectResult=dM}async _openPopup(e,t,s,a){var u;gr((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await d1(e,t,s,Hg(),a);return UM(e,l,K_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await d1(e,t,s,Hg(),a);return YD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(gr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await OM(e),s=new _M(e);return t.register("authEvent",a=>(xe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ag,{type:ag},a=>{var u;const l=(u=a==null?void 0:a[0])==null?void 0:u[ag];l!==void 0&&t(!!l),Gi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rb()||Jw()||F_()}}const KM=GM;var f1="@firebase/auth",m1="1.12.2";/**
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
 */class WM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QM(n){ls(new Hi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;xe(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ab(n)},g=new uD(s,a,l,p);return ED(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ls(new Hi("auth-internal",e=>{const t=Sa(e.getProvider("auth").getImmediate());return(s=>new WM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(f1,m1,YM(n)),hi(f1,m1,"esm2020")}/**
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
 */const $M=300,XM=kw("authIdTokenMaxAge")||$M;let p1=null;const ZM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>XM)return;const a=t==null?void 0:t.token;p1!==a&&(p1=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function JM(n=Uu()){const e=Ea(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vD(n,{popupRedirectResolver:KM,persistence:[iM,pb,_b]}),s=kw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=ZM(l.toString());FD(t,u,()=>u(t.currentUser)),BD(t,f=>u(f))}}const a=Dw("auth");return a&&TD(t,`http://${a}`),t}function eO(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}hD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=rs("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",eO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QM("Browser");var tO="firebase",nO="12.11.0";/**
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
 */hi(tO,nO,"app");const Ab="@firebase/installations",Y_="0.6.21";/**
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
 */const Cb=1e4,Rb=`w:${Y_}`,Ib="FIS_v2",iO="https://firebaseinstallations.googleapis.com/v1",sO=3600*1e3,rO="installations",aO="Installations";/**
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
 */const oO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fo=new To(rO,aO,oO);function Nb(n){return n instanceof us&&n.code.includes("request-failed")}/**
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
 */function xb({projectId:n}){return`${iO}/projects/${n}/installations`}function Db(n){return{token:n.token,requestStatus:2,expiresIn:cO(n.expiresIn),creationTime:Date.now()}}async function Mb(n,e){const s=(await e.json()).error;return fo.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ob({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lO(n,{refreshToken:e}){const t=Ob(n);return t.append("Authorization",uO(e)),t}async function kb(n){const e=await n();return e.status>=500&&e.status<600?n():e}function cO(n){return Number(n.replace("s","000"))}function uO(n){return`${Ib} ${n}`}/**
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
 */async function hO({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=xb(n),a=Ob(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={fid:t,authVersion:Ib,appId:n.appId,sdkVersion:Rb},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await kb(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:Db(g.authToken)}}else throw await Mb("Create Installation",p)}/**
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
 */function Pb(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function dO(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fO=/^[cdef][\w-]{21}$/,Yg="";function mO(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=pO(n);return fO.test(t)?t:Yg}catch{return Yg}}function pO(n){return dO(n).substr(0,22)}/**
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
 */function If(n){return`${n.appName}!${n.appId}`}/**
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
 */const Lb=new Map;function Vb(n,e){const t=If(n);jb(t,e),gO(t,e)}function jb(n,e){const t=Lb.get(n);if(t)for(const s of t)s(e)}function gO(n,e){const t=_O();t&&t.postMessage({key:n,fid:e}),yO()}let io=null;function _O(){return!io&&"BroadcastChannel"in self&&(io=new BroadcastChannel("[Firebase] FID Change"),io.onmessage=n=>{jb(n.data.key,n.data.fid)}),io}function yO(){Lb.size===0&&io&&(io.close(),io=null)}/**
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
 */const vO="firebase-installations-database",EO=1,mo="firebase-installations-store";let og=null;function Q_(){return og||(og=Bw(vO,EO,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mo)}}})),og}async function ef(n,e){const t=If(n),a=(await Q_()).transaction(mo,"readwrite"),l=a.objectStore(mo),u=await l.get(t);return await l.put(e,t),await a.done,(!u||u.fid!==e.fid)&&Vb(n,e.fid),e}async function Ub(n){const e=If(n),s=(await Q_()).transaction(mo,"readwrite");await s.objectStore(mo).delete(e),await s.done}async function Nf(n,e){const t=If(n),a=(await Q_()).transaction(mo,"readwrite"),l=a.objectStore(mo),u=await l.get(t),f=e(u);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&Vb(n,f.fid),f}/**
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
 */async function $_(n){let e;const t=await Nf(n.appConfig,s=>{const a=TO(s),l=SO(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Yg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function TO(n){const e=n||{fid:mO(),registrationStatus:0};return zb(e)}function SO(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(fo.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wO(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bO(n)}:{installationEntry:e}}async function wO(n,e){try{const t=await hO(n,e);return ef(n.appConfig,t)}catch(t){throw Nb(t)&&t.customData.serverCode===409?await Ub(n.appConfig):await ef(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bO(n){let e=await g1(n.appConfig);for(;e.registrationStatus===1;)await Pb(100),e=await g1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await $_(n);return s||t}return e}function g1(n){return Nf(n,e=>{if(!e)throw fo.create("installation-not-found");return zb(e)})}function zb(n){return AO(n)?{fid:n.fid,registrationStatus:0}:n}function AO(n){return n.registrationStatus===1&&n.registrationTime+Cb<Date.now()}/**
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
 */async function CO({appConfig:n,heartbeatServiceProvider:e},t){const s=RO(n,t),a=lO(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={installation:{sdkVersion:Rb,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await kb(()=>fetch(s,f));if(p.ok){const g=await p.json();return Db(g)}else throw await Mb("Generate Auth Token",p)}function RO(n,{fid:e}){return`${xb(n)}/${e}/authTokens:generate`}/**
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
 */async function X_(n,e=!1){let t;const s=await Nf(n.appConfig,l=>{if(!Bb(l))throw fo.create("not-registered");const u=l.authToken;if(!e&&xO(u))return l;if(u.requestStatus===1)return t=IO(n,e),l;{if(!navigator.onLine)throw fo.create("app-offline");const f=MO(l);return t=NO(n,f),f}});return t?await t:s.authToken}async function IO(n,e){let t=await _1(n.appConfig);for(;t.authToken.requestStatus===1;)await Pb(100),t=await _1(n.appConfig);const s=t.authToken;return s.requestStatus===0?X_(n,e):s}function _1(n){return Nf(n,e=>{if(!Bb(e))throw fo.create("not-registered");const t=e.authToken;return OO(t)?{...e,authToken:{requestStatus:0}}:e})}async function NO(n,e){try{const t=await CO(n,e),s={...e,authToken:t};return await ef(n.appConfig,s),t}catch(t){if(Nb(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ub(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ef(n.appConfig,s)}throw t}}function Bb(n){return n!==void 0&&n.registrationStatus===2}function xO(n){return n.requestStatus===2&&!DO(n)}function DO(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sO}function MO(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function OO(n){return n.requestStatus===1&&n.requestTime+Cb<Date.now()}/**
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
 */async function kO(n){const e=n,{installationEntry:t,registrationPromise:s}=await $_(e);return s?s.catch(console.error):X_(e).catch(console.error),t.fid}/**
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
 */async function PO(n,e=!1){const t=n;return await LO(t),(await X_(t,e)).token}async function LO(n){const{registrationPromise:e}=await $_(n);e&&await e}/**
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
 */function VO(n){if(!n||!n.options)throw lg("App Configuration");if(!n.name)throw lg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw lg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function lg(n){return fo.create("missing-app-config-values",{valueName:n})}/**
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
 */const Fb="installations",jO="installations-internal",UO=n=>{const e=n.getProvider("app").getImmediate(),t=VO(e),s=Ea(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},zO=n=>{const e=n.getProvider("app").getImmediate(),t=Ea(e,Fb).getImmediate();return{getId:()=>kO(t),getToken:a=>PO(t,a)}};function BO(){ls(new Hi(Fb,UO,"PUBLIC")),ls(new Hi(jO,zO,"PRIVATE"))}BO();hi(Ab,Y_);hi(Ab,Y_,"esm2020");/**
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
 */const tf="analytics",FO="firebase_id",qO="origin",HO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Z_="https://www.googletagmanager.com/gtag/js";/**
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
 */const Xn=new ju("@firebase/analytics");/**
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
 */const KO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ci=new To("analytics","Analytics",KO);/**
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
 */function WO(n){if(!n.startsWith(Z_)){const e=Ci.create("invalid-gtag-resource",{gtagURL:n});return Xn.warn(e.message),""}return n}function qb(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function YO(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function QO(n,e){const t=YO("firebase-js-sdk-policy",{createScriptURL:WO}),s=document.createElement("script"),a=`${Z_}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function $O(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function XO(n,e,t,s,a,l){const u=s[a];try{if(u)await e[u];else{const p=(await qb(t)).find(g=>g.measurementId===a);p&&await e[p.appId]}}catch(f){Xn.error(f)}n("config",a,l)}async function ZO(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await qb(t);for(const p of u){const g=f.find(S=>S.measurementId===p),E=g&&e[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){Xn.error(l)}}function JO(n,e,t,s){async function a(l,...u){try{if(l==="event"){const[f,p]=u;await ZO(n,e,t,f,p)}else if(l==="config"){const[f,p]=u;await XO(n,e,t,s,f,p)}else if(l==="consent"){const[f,p]=u;n("consent",f,p)}else if(l==="get"){const[f,p,g]=u;n("get",f,p,g)}else if(l==="set"){const[f]=u;n("set",f)}else n(l,...u)}catch(f){Xn.error(f)}}return a}function e4(n,e,t,s,a){let l=function(...u){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=JO(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function t4(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Z_)&&t.src.includes(n))return t;return null}/**
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
 */const n4=30,i4=1e3;class s4{constructor(e={},t=i4){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hb=new s4;function r4(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function a4(n){var u;const{appId:e,apiKey:t}=n,s={method:"GET",headers:r4(t)},a=GO.replace("{app-id}",e),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(u=p.error)!=null&&u.message&&(f=p.error.message)}catch{}throw Ci.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function o4(n,e=Hb,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw Ci.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw Ci.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new u4;return setTimeout(async()=>{f.abort()},HO),Gb({appId:s,apiKey:a,measurementId:l},u,f,e)}async function Gb(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=Hb){var f;const{appId:l,measurementId:u}=n;try{await l4(s,e)}catch(p){if(u)return Xn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw p}try{const p=await a4(n);return a.deleteThrottleMetadata(l),p}catch(p){const g=p;if(!c4(g)){if(a.deleteThrottleMetadata(l),u)return Xn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw p}const E=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?zT(t,a.intervalMillis,n4):zT(t,a.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return a.setThrottleMetadata(l,S),Xn.debug(`Calling attemptFetch again in ${E} millis`),Gb(n,S,s,a)}}function l4(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(Ci.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function c4(n){if(!(n instanceof us)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class u4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h4(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,u={...s,send_to:l};n("event",t,u)}}async function d4(n,e,t,s){if(s&&s.global){const a={};for(const l of Object.keys(t))a[`user_properties.${l}`]=t[l];return n("set",a),Promise.resolve()}else{const a=await e;n("config",a,{update:!0,user_properties:t})}}/**
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
 */async function f4(){if(k_())try{await P_()}catch(n){return Xn.warn(Ci.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Xn.warn(Ci.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function m4(n,e,t,s,a,l,u){const f=o4(n);f.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&Xn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Xn.error(A)),e.push(f);const p=f4().then(A=>{if(A)return s.getId()}),[g,E]=await Promise.all([f,p]);t4(l)||QO(l,g.measurementId),a("js",new Date);const S=(u==null?void 0:u.config)??{};return S[qO]="firebase",S.update=!0,E!=null&&(S[FO]=E),a("config",g.measurementId,S),g.measurementId}/**
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
 */class p4{constructor(e){this.app=e}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},y1=[];const v1={};let cg="dataLayer",g4="gtag",E1,J_,T1=!1;function _4(){const n=[];if(O_()&&n.push("This is a browser extension environment."),Vw()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=Ci.create("invalid-analytics-context",{errorInfo:e});Xn.warn(t.message)}}function y4(n,e,t){_4();const s=n.options.appId;if(!s)throw Ci.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Xn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ci.create("no-api-key");if(Al[s]!=null)throw Ci.create("already-exists",{id:s});if(!T1){$O(cg);const{wrappedGtag:l,gtagCore:u}=e4(Al,y1,v1,cg,g4);J_=l,E1=u,T1=!0}return Al[s]=m4(n,y1,v1,e,E1,cg,t),new p4(n)}function v4(n=Uu()){n=Nt(n);const e=Ea(n,tf);return e.isInitialized()?e.getImmediate():E4(n)}function E4(n,e={}){const t=Ea(n,tf);if(t.isInitialized()){const a=t.getImmediate();if(Ps(e,t.getOptions()))return a;throw Ci.create("already-initialized")}return t.initialize({options:e})}async function T4(){if(O_()||!Vw()||!k_())return!1;try{return await P_()}catch{return!1}}function S4(n,e,t){n=Nt(n),d4(J_,Al[n.app.options.appId],e,t).catch(s=>Xn.error(s))}function w4(n,e,t,s){n=Nt(n),h4(J_,Al[n.app.options.appId],e,t,s).catch(a=>Xn.error(a))}const S1="@firebase/analytics",w1="0.10.21";function b4(){ls(new Hi(tf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return y4(s,a,t)},"PUBLIC")),ls(new Hi("analytics-internal",n,"PRIVATE")),hi(S1,w1),hi(S1,w1,"esm2020");function n(e){try{const t=e.getProvider(tf).getImmediate();return{logEvent:(s,a,l)=>w4(t,s,a,l),setUserProperties:(s,a)=>S4(t,s,a)}}catch(t){throw Ci.create("interop-component-reg-failed",{reason:t})}}}b4();var b1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ca,Kb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function N(){}N.prototype=R.prototype,C.F=R.prototype,C.prototype=new N,C.prototype.constructor=C,C.D=function(x,I,O){for(var D=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)D[Oe-2]=arguments[Oe];return R.prototype[I].apply(x,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,R,N){N||(N=0);const x=Array(16);if(typeof R=="string")for(var I=0;I<16;++I)x[I]=R.charCodeAt(N++)|R.charCodeAt(N++)<<8|R.charCodeAt(N++)<<16|R.charCodeAt(N++)<<24;else for(I=0;I<16;++I)x[I]=R[N++]|R[N++]<<8|R[N++]<<16|R[N++]<<24;R=C.g[0],N=C.g[1],I=C.g[2];let O=C.g[3],D;D=R+(O^N&(I^O))+x[0]+3614090360&4294967295,R=N+(D<<7&4294967295|D>>>25),D=O+(I^R&(N^I))+x[1]+3905402710&4294967295,O=R+(D<<12&4294967295|D>>>20),D=I+(N^O&(R^N))+x[2]+606105819&4294967295,I=O+(D<<17&4294967295|D>>>15),D=N+(R^I&(O^R))+x[3]+3250441966&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(O^N&(I^O))+x[4]+4118548399&4294967295,R=N+(D<<7&4294967295|D>>>25),D=O+(I^R&(N^I))+x[5]+1200080426&4294967295,O=R+(D<<12&4294967295|D>>>20),D=I+(N^O&(R^N))+x[6]+2821735955&4294967295,I=O+(D<<17&4294967295|D>>>15),D=N+(R^I&(O^R))+x[7]+4249261313&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(O^N&(I^O))+x[8]+1770035416&4294967295,R=N+(D<<7&4294967295|D>>>25),D=O+(I^R&(N^I))+x[9]+2336552879&4294967295,O=R+(D<<12&4294967295|D>>>20),D=I+(N^O&(R^N))+x[10]+4294925233&4294967295,I=O+(D<<17&4294967295|D>>>15),D=N+(R^I&(O^R))+x[11]+2304563134&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(O^N&(I^O))+x[12]+1804603682&4294967295,R=N+(D<<7&4294967295|D>>>25),D=O+(I^R&(N^I))+x[13]+4254626195&4294967295,O=R+(D<<12&4294967295|D>>>20),D=I+(N^O&(R^N))+x[14]+2792965006&4294967295,I=O+(D<<17&4294967295|D>>>15),D=N+(R^I&(O^R))+x[15]+1236535329&4294967295,N=I+(D<<22&4294967295|D>>>10),D=R+(I^O&(N^I))+x[1]+4129170786&4294967295,R=N+(D<<5&4294967295|D>>>27),D=O+(N^I&(R^N))+x[6]+3225465664&4294967295,O=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(O^R))+x[11]+643717713&4294967295,I=O+(D<<14&4294967295|D>>>18),D=N+(O^R&(I^O))+x[0]+3921069994&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^O&(N^I))+x[5]+3593408605&4294967295,R=N+(D<<5&4294967295|D>>>27),D=O+(N^I&(R^N))+x[10]+38016083&4294967295,O=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(O^R))+x[15]+3634488961&4294967295,I=O+(D<<14&4294967295|D>>>18),D=N+(O^R&(I^O))+x[4]+3889429448&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^O&(N^I))+x[9]+568446438&4294967295,R=N+(D<<5&4294967295|D>>>27),D=O+(N^I&(R^N))+x[14]+3275163606&4294967295,O=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(O^R))+x[3]+4107603335&4294967295,I=O+(D<<14&4294967295|D>>>18),D=N+(O^R&(I^O))+x[8]+1163531501&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(I^O&(N^I))+x[13]+2850285829&4294967295,R=N+(D<<5&4294967295|D>>>27),D=O+(N^I&(R^N))+x[2]+4243563512&4294967295,O=R+(D<<9&4294967295|D>>>23),D=I+(R^N&(O^R))+x[7]+1735328473&4294967295,I=O+(D<<14&4294967295|D>>>18),D=N+(O^R&(I^O))+x[12]+2368359562&4294967295,N=I+(D<<20&4294967295|D>>>12),D=R+(N^I^O)+x[5]+4294588738&4294967295,R=N+(D<<4&4294967295|D>>>28),D=O+(R^N^I)+x[8]+2272392833&4294967295,O=R+(D<<11&4294967295|D>>>21),D=I+(O^R^N)+x[11]+1839030562&4294967295,I=O+(D<<16&4294967295|D>>>16),D=N+(I^O^R)+x[14]+4259657740&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^O)+x[1]+2763975236&4294967295,R=N+(D<<4&4294967295|D>>>28),D=O+(R^N^I)+x[4]+1272893353&4294967295,O=R+(D<<11&4294967295|D>>>21),D=I+(O^R^N)+x[7]+4139469664&4294967295,I=O+(D<<16&4294967295|D>>>16),D=N+(I^O^R)+x[10]+3200236656&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^O)+x[13]+681279174&4294967295,R=N+(D<<4&4294967295|D>>>28),D=O+(R^N^I)+x[0]+3936430074&4294967295,O=R+(D<<11&4294967295|D>>>21),D=I+(O^R^N)+x[3]+3572445317&4294967295,I=O+(D<<16&4294967295|D>>>16),D=N+(I^O^R)+x[6]+76029189&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(N^I^O)+x[9]+3654602809&4294967295,R=N+(D<<4&4294967295|D>>>28),D=O+(R^N^I)+x[12]+3873151461&4294967295,O=R+(D<<11&4294967295|D>>>21),D=I+(O^R^N)+x[15]+530742520&4294967295,I=O+(D<<16&4294967295|D>>>16),D=N+(I^O^R)+x[2]+3299628645&4294967295,N=I+(D<<23&4294967295|D>>>9),D=R+(I^(N|~O))+x[0]+4096336452&4294967295,R=N+(D<<6&4294967295|D>>>26),D=O+(N^(R|~I))+x[7]+1126891415&4294967295,O=R+(D<<10&4294967295|D>>>22),D=I+(R^(O|~N))+x[14]+2878612391&4294967295,I=O+(D<<15&4294967295|D>>>17),D=N+(O^(I|~R))+x[5]+4237533241&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~O))+x[12]+1700485571&4294967295,R=N+(D<<6&4294967295|D>>>26),D=O+(N^(R|~I))+x[3]+2399980690&4294967295,O=R+(D<<10&4294967295|D>>>22),D=I+(R^(O|~N))+x[10]+4293915773&4294967295,I=O+(D<<15&4294967295|D>>>17),D=N+(O^(I|~R))+x[1]+2240044497&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~O))+x[8]+1873313359&4294967295,R=N+(D<<6&4294967295|D>>>26),D=O+(N^(R|~I))+x[15]+4264355552&4294967295,O=R+(D<<10&4294967295|D>>>22),D=I+(R^(O|~N))+x[6]+2734768916&4294967295,I=O+(D<<15&4294967295|D>>>17),D=N+(O^(I|~R))+x[13]+1309151649&4294967295,N=I+(D<<21&4294967295|D>>>11),D=R+(I^(N|~O))+x[4]+4149444226&4294967295,R=N+(D<<6&4294967295|D>>>26),D=O+(N^(R|~I))+x[11]+3174756917&4294967295,O=R+(D<<10&4294967295|D>>>22),D=I+(R^(O|~N))+x[2]+718787259&4294967295,I=O+(D<<15&4294967295|D>>>17),D=N+(O^(I|~R))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(I+(D<<21&4294967295|D>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+O&4294967295}s.prototype.v=function(C,R){R===void 0&&(R=C.length);const N=R-this.blockSize,x=this.C;let I=this.h,O=0;for(;O<R;){if(I==0)for(;O<=N;)a(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<R;)if(x[I++]=C.charCodeAt(O++),I==this.blockSize){a(this,x),I=0;break}}else for(;O<R;)if(x[I++]=C[O++],I==this.blockSize){a(this,x),I=0;break}}this.h=I,this.o+=R},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;R=this.o*8;for(var N=C.length-8;N<C.length;++N)C[N]=R&255,R/=256;for(this.v(C),C=Array(16),R=0,N=0;N<4;++N)for(let x=0;x<32;x+=8)C[R++]=this.g[N]>>>x&255;return C};function l(C,R){var N=f;return Object.prototype.hasOwnProperty.call(N,C)?N[C]:N[C]=R(C)}function u(C,R){this.h=R;const N=[];let x=!0;for(let I=C.length-1;I>=0;I--){const O=C[I]|0;x&&O==R||(N[I]=O,x=!1)}this.g=N}var f={};function p(C){return-128<=C&&C<128?l(C,function(R){return new u([R|0],R<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return S;if(C<0)return Y(g(-C));const R=[];let N=1;for(let x=0;C>=N;x++)R[x]=C/N|0,N*=4294967296;return new u(R,0)}function E(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return Y(E(C.substring(1),R));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const N=g(Math.pow(R,8));let x=S;for(let O=0;O<C.length;O+=8){var I=Math.min(8,C.length-O);const D=parseInt(C.substring(O,O+I),R);I<8?(I=g(Math.pow(R,I)),x=x.j(I).add(g(D))):(x=x.j(N),x=x.add(g(D)))}return x}var S=p(0),A=p(1),V=p(16777216);n=u.prototype,n.m=function(){if(Z(this))return-Y(this).m();let C=0,R=1;for(let N=0;N<this.g.length;N++){const x=this.i(N);C+=(x>=0?x:4294967296+x)*R,R*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(H(this))return"0";if(Z(this))return"-"+Y(this).toString(C);const R=g(Math.pow(C,6));var N=this;let x="";for(;;){const I=Ee(N,R).g;N=pe(N,I.j(R));let O=((N.g.length>0?N.g[0]:N.h)>>>0).toString(C);if(N=I,H(N))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function H(C){if(C.h!=0)return!1;for(let R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function Z(C){return C.h==-1}n.l=function(C){return C=pe(this,C),Z(C)?-1:H(C)?0:1};function Y(C){const R=C.g.length,N=[];for(let x=0;x<R;x++)N[x]=~C.g[x];return new u(N,~C.h).add(A)}n.abs=function(){return Z(this)?Y(this):this},n.add=function(C){const R=Math.max(this.g.length,C.g.length),N=[];let x=0;for(let I=0;I<=R;I++){let O=x+(this.i(I)&65535)+(C.i(I)&65535),D=(O>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);x=D>>>16,O&=65535,D&=65535,N[I]=D<<16|O}return new u(N,N[N.length-1]&-2147483648?-1:0)};function pe(C,R){return C.add(Y(R))}n.j=function(C){if(H(this)||H(C))return S;if(Z(this))return Z(C)?Y(this).j(Y(C)):Y(Y(this).j(C));if(Z(C))return Y(this.j(Y(C)));if(this.l(V)<0&&C.l(V)<0)return g(this.m()*C.m());const R=this.g.length+C.g.length,N=[];for(var x=0;x<2*R;x++)N[x]=0;for(x=0;x<this.g.length;x++)for(let I=0;I<C.g.length;I++){const O=this.i(x)>>>16,D=this.i(x)&65535,Oe=C.i(I)>>>16,Ce=C.i(I)&65535;N[2*x+2*I]+=D*Ce,ue(N,2*x+2*I),N[2*x+2*I+1]+=O*Ce,ue(N,2*x+2*I+1),N[2*x+2*I+1]+=D*Oe,ue(N,2*x+2*I+1),N[2*x+2*I+2]+=O*Oe,ue(N,2*x+2*I+2)}for(C=0;C<R;C++)N[C]=N[2*C+1]<<16|N[2*C];for(C=R;C<2*R;C++)N[C]=0;return new u(N,0)};function ue(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function le(C,R){this.g=C,this.h=R}function Ee(C,R){if(H(R))throw Error("division by zero");if(H(C))return new le(S,S);if(Z(C))return R=Ee(Y(C),R),new le(Y(R.g),Y(R.h));if(Z(R))return R=Ee(C,Y(R)),new le(Y(R.g),R.h);if(C.g.length>30){if(Z(C)||Z(R))throw Error("slowDivide_ only works with positive integers.");for(var N=A,x=R;x.l(C)<=0;)N=Me(N),x=Me(x);var I=de(N,1),O=de(x,1);for(x=de(x,2),N=de(N,2);!H(x);){var D=O.add(x);D.l(C)<=0&&(I=I.add(N),O=D),x=de(x,1),N=de(N,1)}return R=pe(C,I.j(R)),new le(I,R)}for(I=S;C.l(R)>=0;){for(N=Math.max(1,Math.floor(C.m()/R.m())),x=Math.ceil(Math.log(N)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=g(N),D=O.j(R);Z(D)||D.l(C)>0;)N-=x,O=g(N),D=O.j(R);H(O)&&(O=A),I=I.add(O),C=pe(C,D)}return new le(I,C)}n.B=function(C){return Ee(this,C).h},n.and=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)&C.i(x);return new u(N,this.h&C.h)},n.or=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)|C.i(x);return new u(N,this.h|C.h)},n.xor=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let x=0;x<R;x++)N[x]=this.i(x)^C.i(x);return new u(N,this.h^C.h)};function Me(C){const R=C.g.length+1,N=[];for(let x=0;x<R;x++)N[x]=C.i(x)<<1|C.i(x-1)>>>31;return new u(N,C.h)}function de(C,R){const N=R>>5;R%=32;const x=C.g.length-N,I=[];for(let O=0;O<x;O++)I[O]=R>0?C.i(O+N)>>>R|C.i(O+N+1)<<32-R:C.i(O+N);return new u(I,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Kb=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=E,ca=u}).apply(typeof b1<"u"?b1:typeof self<"u"?self:typeof window<"u"?window:{});var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wb,du,Yb,Vd,Qg,Qb,$b,Xb;(function(){var n,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sd=="object"&&Sd];for(var y=0;y<h.length;++y){var T=h[y];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var s=t(this);function a(h,y){if(y)e:{var T=s;h=h.split(".");for(var b=0;b<h.length-1;b++){var z=h[b];if(!(z in T))break e;T=T[z]}h=h[h.length-1],b=T[h],y=y(b),y!=b&&y!=null&&e(T,h,{configurable:!0,writable:!0,value:y})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(y){var T=[],b;for(b in y)Object.prototype.hasOwnProperty.call(y,b)&&T.push([b,y[b]]);return T}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function p(h,y,T){return h.call.apply(h.bind,arguments)}function g(h,y,T){return g=p,g.apply(null,arguments)}function E(h,y){var T=Array.prototype.slice.call(arguments,1);return function(){var b=T.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function S(h,y){function T(){}T.prototype=y.prototype,h.Z=y.prototype,h.prototype=new T,h.prototype.constructor=h,h.Ob=function(b,z,Q){for(var he=Array(arguments.length-2),je=2;je<arguments.length;je++)he[je-2]=arguments[je];return y.prototype[z].apply(b,he)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function V(h){const y=h.length;if(y>0){const T=Array(y);for(let b=0;b<y;b++)T[b]=h[b];return T}return[]}function H(h,y){for(let b=1;b<arguments.length;b++){const z=arguments[b];var T=typeof z;if(T=T!="object"?T:z?Array.isArray(z)?"array":T:"null",T=="array"||T=="object"&&typeof z.length=="number"){T=h.length||0;const Q=z.length||0;h.length=T+Q;for(let he=0;he<Q;he++)h[T+he]=z[he]}else h.push(z)}}class Z{constructor(y,T){this.i=y,this.j=T,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Y(h){u.setTimeout(()=>{throw h},0)}function pe(){var h=C;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class ue{constructor(){this.h=this.g=null}add(y,T){const b=le.get();b.set(y,T),this.h?this.h.next=b:this.g=b,this.h=b}}var le=new Z(()=>new Ee,h=>h.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(y,T){this.h=y,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,de=!1,C=new ue,R=()=>{const h=Promise.resolve(void 0);Me=()=>{h.then(N)}};function N(){for(var h;h=pe();){try{h.h.call(h.g)}catch(T){Y(T)}var y=le;y.j(h),y.h<100&&(y.h++,h.next=y.g,y.g=h)}de=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const T=()=>{};u.addEventListener("test",T,y),u.removeEventListener("test",T,y)}catch{}return h})();function D(h){return/^[\s\xa0]*$/.test(h)}function Oe(h,y){I.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,y)}S(Oe,I),Oe.prototype.init=function(h,y){const T=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget,y||(T=="mouseover"?y=h.fromElement:T=="mouseout"&&(y=h.toElement)),this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ce="closure_listenable_"+(Math.random()*1e6|0),U=0;function re(h,y,T,b,z){this.listener=h,this.proxy=null,this.src=y,this.type=T,this.capture=!!b,this.ha=z,this.key=++U,this.da=this.fa=!1}function _e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ne(h,y,T){for(const b in h)y.call(T,h[b],b,h)}function Fe(h,y){for(const T in h)y.call(void 0,h[T],T,h)}function P(h){const y={};for(const T in h)y[T]=h[T];return y}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(h,y){let T,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(T in b)h[T]=b[T];for(let Q=0;Q<J.length;Q++)T=J[Q],Object.prototype.hasOwnProperty.call(b,T)&&(h[T]=b[T])}}function fe(h){this.src=h,this.g={},this.h=0}fe.prototype.add=function(h,y,T,b,z){const Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);const he=Re(h,y,b,z);return he>-1?(y=h[he],T||(y.fa=!1)):(y=new re(y,this.src,Q,!!b,z),y.fa=T,h.push(y)),y};function Ae(h,y){const T=y.type;if(T in h.g){var b=h.g[T],z=Array.prototype.indexOf.call(b,y,void 0),Q;(Q=z>=0)&&Array.prototype.splice.call(b,z,1),Q&&(_e(y),h.g[T].length==0&&(delete h.g[T],h.h--))}}function Re(h,y,T,b){for(let z=0;z<h.length;++z){const Q=h[z];if(!Q.da&&Q.listener==y&&Q.capture==!!T&&Q.ha==b)return z}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),lt={};function Ve(h,y,T,b,z){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)Ve(h,y[Q],T,b,z);return null}return T=k(T),h&&h[Ce]?h.J(y,T,f(b)?!!b.capture:!1,z):Sn(h,y,T,!1,b,z)}function Sn(h,y,T,b,z,Q){if(!y)throw Error("Invalid event type");const he=f(z)?!!z.capture:!!z;let je=hn(h);if(je||(h[ze]=je=new fe(h)),T=je.add(y,T,b,he,Q),T.proxy)return T;if(b=di(),T.proxy=b,b.src=h,b.listener=T,h.addEventListener)O||(z=he),z===void 0&&(z=!1),h.addEventListener(y.toString(),b,z);else if(h.attachEvent)h.attachEvent(wn(y.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return T}function di(){function h(T){return y.call(h.src,h.listener,T)}const y=Ii;return h}function un(h,y,T,b,z){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)un(h,y[Q],T,b,z);else b=f(b)?!!b.capture:!!b,T=k(T),h&&h[Ce]?(h=h.i,Q=String(y).toString(),Q in h.g&&(y=h.g[Q],T=Re(y,T,b,z),T>-1&&(_e(y[T]),Array.prototype.splice.call(y,T,1),y.length==0&&(delete h.g[Q],h.h--)))):h&&(h=hn(h))&&(y=h.g[y.toString()],h=-1,y&&(h=Re(y,T,b,z)),(T=h>-1?y[h]:null)&&fi(T))}function fi(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Ce])Ae(y.i,h);else{var T=h.type,b=h.proxy;y.removeEventListener?y.removeEventListener(T,b,h.capture):y.detachEvent?y.detachEvent(wn(T),b):y.addListener&&y.removeListener&&y.removeListener(b),(T=hn(y))?(Ae(T,h),T.h==0&&(T.src=null,y[ze]=null)):_e(h)}}}function wn(h){return h in lt?lt[h]:lt[h]="on"+h}function Ii(h,y){if(h.da)h=!0;else{y=new Oe(y,this);const T=h.listener,b=h.ha||h.src;h.fa&&fi(h),h=T.call(b,y)}return h}function hn(h){return h=h[ze],h instanceof fe?h:null}var B="__closure_events_fn_"+(Math.random()*1e9>>>0);function k(h){return typeof h=="function"?h:(h[B]||(h[B]=function(y){return h.handleEvent(y)}),h[B])}function K(){x.call(this),this.i=new fe(this),this.M=this,this.G=null}S(K,x),K.prototype[Ce]=!0,K.prototype.removeEventListener=function(h,y,T,b){un(this,h,y,T,b)};function ae(h,y){var T,b=h.G;if(b)for(T=[];b;b=b.G)T.push(b);if(h=h.M,b=y.type||y,typeof y=="string")y=new I(y,h);else if(y instanceof I)y.target=y.target||h;else{var z=y;y=new I(b,h),ce(y,z)}z=!0;let Q,he;if(T)for(he=T.length-1;he>=0;he--)Q=y.g=T[he],z=oe(Q,b,!0,y)&&z;if(Q=y.g=h,z=oe(Q,b,!0,y)&&z,z=oe(Q,b,!1,y)&&z,T)for(he=0;he<T.length;he++)Q=y.g=T[he],z=oe(Q,b,!1,y)&&z}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var h=this.i;for(const y in h.g){const T=h.g[y];for(let b=0;b<T.length;b++)_e(T[b]);delete h.g[y],h.h--}}this.G=null},K.prototype.J=function(h,y,T,b){return this.i.add(String(h),y,!1,T,b)},K.prototype.K=function(h,y,T,b){return this.i.add(String(h),y,!0,T,b)};function oe(h,y,T,b){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();let z=!0;for(let Q=0;Q<y.length;++Q){const he=y[Q];if(he&&!he.da&&he.capture==T){const je=he.listener,Gt=he.ha||he.src;he.fa&&Ae(h.i,he),z=je.call(Gt,b)!==!1&&z}}return z&&!b.defaultPrevented}function qe(h,y){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(h,y||0)}function yt(h){h.g=qe(()=>{h.g=null,h.i&&(h.i=!1,yt(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class nt extends x{constructor(y,T){super(),this.m=y,this.l=T,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(h){x.call(this),this.h=h,this.g={}}S(vt,x);var qt=[];function Xt(h){Ne(h.g,function(y,T){this.g.hasOwnProperty(T)&&fi(y)},h),h.g={}}vt.prototype.N=function(){vt.Z.N.call(this),Xt(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=u.JSON.stringify,zs=u.JSON.parse,bn=class{stringify(h){return u.JSON.stringify(h,void 0)}parse(h){return u.JSON.parse(h,void 0)}};function zt(){}function Ht(){}var jt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ut(){I.call(this,"d")}S(Ut,I);function Zn(){I.call(this,"c")}S(Zn,I);var it={},Bs=null;function mi(){return Bs=Bs||new K}it.Ia="serverreachability";function No(h){I.call(this,it.Ia,h)}S(No,I);function Gn(h){const y=mi();ae(y,new No(y))}it.STAT_EVENT="statevent";function Kn(h,y){I.call(this,it.STAT_EVENT,h),this.stat=y}S(Kn,I);function Ct(h){const y=mi();ae(y,new Kn(y,h))}it.Ja="timingevent";function Wn(h,y){I.call(this,it.Ja,h),this.size=y}S(Wn,I);function Ni(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){h()},y)}function Jn(){this.g=!0}Jn.prototype.ua=function(){this.g=!1};function Ca(h,y,T,b,z,Q){h.info(function(){if(h.g)if(Q){var he="",je=Q.split("&");for(let ct=0;ct<je.length;ct++){var Gt=je[ct].split("=");if(Gt.length>1){const Lt=Gt[0];Gt=Gt[1];const Oi=Lt.split("_");he=Oi.length>=2&&Oi[1]=="type"?he+(Lt+"="+Gt+"&"):he+(Lt+"=redacted&")}}}else he=null;else he=Q;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+y+`
`+T+`
`+he})}function Ln(h,y,T,b,z,Q,he){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+y+`
`+T+`
`+Q+" "+he})}function ht(h,y,T,b){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+wr(h,T)+(b?" "+b:"")})}function Yn(h,y){h.info(function(){return"TIMEOUT: "+y})}Jn.prototype.info=function(){};function wr(h,y){if(!h.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(h=0;h<Q.length;h++)if(Array.isArray(Q[h])){var T=Q[h];if(!(T.length<2)){var b=T[1];if(Array.isArray(b)&&!(b.length<1)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(let he=1;he<b.length;he++)b[he]=""}}}}return Pn(Q)}catch{return y}}var hs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ds={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ra;function An(){}S(An,zt),An.prototype.g=function(){return new XMLHttpRequest},Ra=new An;function Wi(h){return encodeURIComponent(String(h))}function xo(h){var y=1;h=h.split(":");const T=[];for(;y>0&&h.length;)T.push(h.shift()),y--;return h.length&&T.push(h.join(":")),T}function pi(h,y,T,b){this.j=h,this.i=y,this.l=T,this.S=b||1,this.V=new vt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gi}function gi(){this.i=null,this.g="",this.h=!1}var st={},Zt={};function xi(h,y,T){h.M=1,h.A=xa(en(y)),h.u=T,h.R=!0,br(h,null)}function br(h,y){h.F=Date.now(),F(h),h.B=en(h.A);var T=h.B,b=h.S;Array.isArray(b)||(b=[String(b)]),Oo(T.i,"t",b),h.C=0,T=h.j.L,h.h=new gi,h.g=mh(h.j,T?y:null,!h.u),h.P>0&&(h.O=new nt(g(h.Y,h,h.g),h.P)),y=h.V,T=h.g,b=h.ba;var z="readystatechange";Array.isArray(z)||(z&&(qt[0]=z.toString()),z=qt);for(let Q=0;Q<z.length;Q++){const he=Ve(T,z[Q],b||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=h.J?P(h.J):{},h.u?(h.v||(h.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,y)):(h.v="GET",h.g.ea(h.B,h.v,null,y)),Gn(),Ca(h.i,h.v,h.B,h.l,h.S,h.u)}pi.prototype.ba=function(h){h=h.target;const y=this.O;y&&$i(h)==3?y.j():this.Y(h)},pi.prototype.Y=function(h){try{if(h==this.g)e:{const je=$i(this.g),Gt=this.g.ya(),ct=this.g.ca();if(!(je<3)&&(je!=3||this.g&&(this.h.h||this.g.la()||Cn(this.g)))){this.K||je!=4||Gt==7||(Gt==8||ct<=0?Gn(3):Gn(2)),rt(this);var y=this.g.ca();this.X=y;var T=nc(this);if(this.o=y==200,Ln(this.i,this.v,this.B,this.l,this.S,je,y),this.o){if(this.U&&!this.L){t:{if(this.g){var b,z=this.g;if((b=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(b)){var Q=b;break t}}Q=null}if(h=Q)ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fs(this,h);else{this.o=!1,this.m=3,Ct(12),Rt(this),dt(this);break e}}if(this.R){h=!0;let Lt;for(;!this.K&&this.C<T.length;)if(Lt=Na(this,T),Lt==Zt){je==4&&(this.m=4,Ct(14),h=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==st){this.m=4,Ct(15),ht(this.i,this.l,T,"[Invalid Chunk]"),h=!1;break}else ht(this.i,this.l,Lt,null),fs(this,Lt);if(Ia(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||T.length!=0||this.h.h||(this.m=1,Ct(16),h=!1),this.o=this.o&&h,!h)ht(this.i,this.l,T,"[Invalid Chunked Response]"),Rt(this),dt(this);else if(T.length>0&&!this.W){this.W=!0;var he=this.j;he.g==this&&he.aa&&!he.P&&(he.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),_c(he),he.P=!0,Ct(11))}}else ht(this.i,this.l,T,null),fs(this,T);je==4&&Rt(this),this.o&&!this.K&&(je==4?uh(this.j,this):(this.o=!1,F(this)))}else qs(this.g),y==400&&T.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),Rt(this),dt(this)}}}catch{}finally{}};function nc(h){if(!Ia(h))return h.g.la();const y=Cn(h.g);if(y==="")return"";let T="";const b=y.length,z=$i(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return Rt(h),dt(h),"";h.h.i=new u.TextDecoder}for(let Q=0;Q<b;Q++)h.h.h=!0,T+=h.h.i.decode(y[Q],{stream:!(z&&Q==b-1)});return y.length=0,h.h.g+=T,h.C=0,h.h.g}function Ia(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function Na(h,y){var T=h.C,b=y.indexOf(`
`,T);return b==-1?Zt:(T=Number(y.substring(T,b)),isNaN(T)?st:(b+=1,b+T>y.length?Zt:(y=y.slice(b,b+T),h.C=b+T,y)))}pi.prototype.cancel=function(){this.K=!0,Rt(this)};function F(h){h.T=Date.now()+h.H,Se(h,h.H)}function Se(h,y){if(h.D!=null)throw Error("WatchDog timer not null");h.D=Ni(g(h.aa,h),y)}function rt(h){h.D&&(u.clearTimeout(h.D),h.D=null)}pi.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(Yn(this.i,this.B),this.M!=2&&(Gn(),Ct(17)),Rt(this),this.m=2,dt(this)):Se(this,this.T-h)};function dt(h){h.j.I==0||h.K||uh(h.j,h)}function Rt(h){rt(h);var y=h.O;y&&typeof y.dispose=="function"&&y.dispose(),h.O=null,Xt(h.V),h.g&&(y=h.g,h.g=null,y.abort(),y.dispose())}function fs(h,y){try{var T=h.j;if(T.I!=0&&(T.g==h||ps(T.h,h))){if(!h.L&&ps(T.h,h)&&T.I==3){try{var b=T.Ba.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!T.v){if(T.g)if(T.g.F+3e3<h.F)jo(T),Mr(T);else break e;Va(T),Ct(18)}}else T.xa=z[1],0<T.xa-T.K&&z[2]<37500&&T.F&&T.A==0&&!T.C&&(T.C=Ni(g(T.Va,T),6e3));ms(T.h)<=1&&T.ta&&(T.ta=void 0)}else Ts(T,11)}else if((h.L||T.g==h)&&jo(T),!D(y))for(z=T.Ba.g.parse(y),y=0;y<z.length;y++){let ct=z[y];const Lt=ct[0];if(!(Lt<=T.K))if(T.K=Lt,ct=ct[1],T.I==2)if(ct[0]=="c"){T.M=ct[1],T.ba=ct[2];const Oi=ct[3];Oi!=null&&(T.ka=Oi,T.j.info("VER="+T.ka));const Ss=ct[4];Ss!=null&&(T.za=Ss,T.j.info("SVER="+T.za));const Xi=ct[5];Xi!=null&&typeof Xi=="number"&&Xi>0&&(b=1.5*Xi,T.O=b,T.j.info("backChannelRequestTimeoutMs_="+b)),b=T;const Zi=h.g;if(Zi){const ja=Zi.g?Zi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ja){var Q=b.h;Q.g||ja.indexOf("spdy")==-1&&ja.indexOf("quic")==-1&&ja.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(rc(Q,Q.h),Q.h=null))}if(b.G){const Uo=Zi.g?Zi.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(b.wa=Uo,pt(b.J,b.G,Uo))}}T.I=3,T.l&&T.l.ra(),T.aa&&(T.T=Date.now()-h.F,T.j.info("Handshake RTT: "+T.T+"ms")),b=T;var he=h;if(b.na=fh(b,b.L?b.ba:null,b.W),he.L){ac(b.h,he);var je=he,Gt=b.O;Gt&&(je.H=Gt),je.D&&(rt(je),F(je)),b.g=he}else lh(b);T.i.length>0&&Es(T)}else ct[0]!="stop"&&ct[0]!="close"||Ts(T,7);else T.I==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?Ts(T,7):pc(T):ct[0]!="noop"&&T.l&&T.l.qa(ct),T.A=0)}}Gn(4)}catch{}}var Jt=class{constructor(h,y){this.g=h,this.map=y}};function ic(h){this.l=h||10,u.PerformanceNavigationTiming?(h=u.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sc(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ms(h){return h.h?1:h.g?h.g.size:0}function ps(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function rc(h,y){h.g?h.g.add(y):h.h=y}function ac(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}ic.prototype.cancel=function(){if(this.i=oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function oc(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const T of h.g.values())y=y.concat(T.G);return y}return V(h.i)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Do(h,y){if(h){h=h.split("&");for(let T=0;T<h.length;T++){const b=h[T].indexOf("=");let z,Q=null;b>=0?(z=h[T].substring(0,b),Q=h[T].substring(b+1)):z=h[T],y(z,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function _i(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;h instanceof _i?(this.l=h.l,pn(this,h.j),this.o=h.o,this.g=h.g,Ar(this,h.u),this.h=h.h,lc(this,ah(h.i)),this.m=h.m):h&&(y=String(h).match(nh))?(this.l=!1,pn(this,y[1]||"",!0),this.o=gs(y[2]||""),this.g=gs(y[3]||"",!0),Ar(this,y[4]),this.h=gs(y[5]||"",!0),lc(this,y[6]||"",!0),this.m=gs(y[7]||"")):(this.l=!1,this.i=new Rr(null,this.l))}_i.prototype.toString=function(){const h=[];var y=this.j;y&&h.push(Da(y,Mo,!0),":");var T=this.g;return(T||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Da(y,Mo,!0),"@"),h.push(Wi(T).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.u,T!=null&&h.push(":",String(T))),(T=this.h)&&(this.g&&T.charAt(0)!="/"&&h.push("/"),h.push(Da(T,T.charAt(0)=="/"?cc:ih,!0))),(T=this.i.toString())&&h.push("?",T),(T=this.m)&&h.push("#",Da(T,sh)),h.join("")},_i.prototype.resolve=function(h){const y=en(this);let T=!!h.j;T?pn(y,h.j):T=!!h.o,T?y.o=h.o:T=!!h.g,T?y.g=h.g:T=h.u!=null;var b=h.h;if(T)Ar(y,h.u);else if(T=!!h.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var z=y.h.lastIndexOf("/");z!=-1&&(b=y.h.slice(0,z+1)+b)}if(z=b,z==".."||z==".")b="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){b=z.lastIndexOf("/",0)==0,z=z.split("/");const Q=[];for(let he=0;he<z.length;){const je=z[he++];je=="."?b&&he==z.length&&Q.push(""):je==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),b&&he==z.length&&Q.push("")):(Q.push(je),b=!0)}b=Q.join("/")}else b=z}return T?y.h=b:T=h.i.toString()!=="",T?lc(y,ah(h.i)):T=!!h.m,T&&(y.m=h.m),y};function en(h){return new _i(h)}function pn(h,y,T){h.j=T?gs(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Ar(h,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);h.u=y}else h.u=null}function lc(h,y,T){y instanceof Rr?(h.i=y,ko(h.i,h.l)):(T||(y=Da(y,Cr)),h.i=new Rr(y,h.l))}function pt(h,y,T){h.i.set(y,T)}function xa(h){return pt(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function gs(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Da(h,y,T){return typeof h=="string"?(h=encodeURI(h).replace(y,ei),T&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ei(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Mo=/[#\/\?@]/g,ih=/[#\?:]/g,cc=/[#\?]/g,Cr=/[#\?@]/g,sh=/#/g;function Rr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function ti(h){h.g||(h.g=new Map,h.h=0,h.i&&Do(h.i,function(y,T){h.add(decodeURIComponent(y.replace(/\+/g," ")),T)}))}n=Rr.prototype,n.add=function(h,y){ti(this),this.i=null,h=Ir(this,h);let T=this.g.get(h);return T||this.g.set(h,T=[]),T.push(y),this.h+=1,this};function rh(h,y){ti(h),y=Ir(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function uc(h,y){return ti(h),y=Ir(h,y),h.g.has(y)}n.forEach=function(h,y){ti(this),this.g.forEach(function(T,b){T.forEach(function(z){h.call(y,z,b,this)},this)},this)};function hc(h,y){ti(h);let T=[];if(typeof y=="string")uc(h,y)&&(T=T.concat(h.g.get(Ir(h,y))));else for(h=Array.from(h.g.values()),y=0;y<h.length;y++)T=T.concat(h[y]);return T}n.set=function(h,y){return ti(this),this.i=null,h=Ir(this,h),uc(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=hc(this,h),h.length>0?String(h[0]):y):y};function Oo(h,y,T){rh(h,y),T.length>0&&(h.i=null,h.g.set(Ir(h,y),V(T)),h.h+=T.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(let b=0;b<y.length;b++){var T=y[b];const z=Wi(T);T=hc(this,T);for(let Q=0;Q<T.length;Q++){let he=z;T[Q]!==""&&(he+="="+Wi(T[Q])),h.push(he)}}return this.i=h.join("&")};function ah(h){const y=new Rr;return y.i=h.i,h.g&&(y.g=new Map(h.g),y.h=h.h),y}function Ir(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function ko(h,y){y&&!h.j&&(ti(h),h.i=null,h.g.forEach(function(T,b){const z=b.toLowerCase();b!=z&&(rh(this,b),Oo(this,z,T))},h)),h.j=y}function Yi(h,y){const T=new Jn;if(u.Image){const b=new Image;b.onload=E(Di,T,"TestLoadImage: loaded",!0,y,b),b.onerror=E(Di,T,"TestLoadImage: error",!1,y,b),b.onabort=E(Di,T,"TestLoadImage: abort",!1,y,b),b.ontimeout=E(Di,T,"TestLoadImage: timeout",!1,y,b),u.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else y(!1)}function dc(h,y){const T=new Jn,b=new AbortController,z=setTimeout(()=>{b.abort(),Di(T,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:b.signal}).then(Q=>{clearTimeout(z),Q.ok?Di(T,"TestPingServer: ok",!0,y):Di(T,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),Di(T,"TestPingServer: error",!1,y)})}function Di(h,y,T,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(T)}catch{}}function Nr(){this.g=new bn}function _s(h){this.i=h.Sb||null,this.h=h.ab||!1}S(_s,zt),_s.prototype.g=function(){return new Ma(this.i,this.h)};function Ma(h,y){K.call(this),this.H=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ma,K),n=Ma.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=y,this.readyState=1,Qi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(y.body=h),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Po(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function Po(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}n.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?xr(this):Qi(this),this.readyState==3&&Po(this)}},n.Oa=function(h){this.g&&(this.response=this.responseText=h,xr(this))},n.Na=function(h){this.g&&(this.response=h,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(h){h.readyState=4,h.l=null,h.j=null,h.B=null,Qi(h)}n.setRequestHeader=function(h,y){this.A.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var T=y.next();!T.done;)T=T.value,h.push(T[0]+": "+T[1]),T=y.next();return h.join(`\r
`)};function Qi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Mi(h){let y="";return Ne(h,function(T,b){y+=b,y+=":",y+=T,y+=`\r
`}),y}function Oa(h,y,T){e:{for(b in T){var b=!1;break e}b=!0}b||(T=Mi(T),typeof h=="string"?T!=null&&Wi(T):pt(h,y,T))}function Et(h){K.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Et,K);var ys=/^https?$/i,fc=["POST","PUT"];n=Et.prototype,n.Fa=function(h){this.H=h},n.ea=function(h,y,T,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ra.g(),this.g.onreadystatechange=A(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(Q){ka(this,Q);return}if(h=T||"",T=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)T.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const Q of b.keys())T.set(Q,b.get(Q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(T.keys()).find(Q=>Q.toLowerCase()=="content-type"),z=u.FormData&&h instanceof u.FormData,!(Array.prototype.indexOf.call(fc,y,void 0)>=0)||b||z||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,he]of T)this.g.setRequestHeader(Q,he);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(Q){ka(this,Q)}};function ka(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.o=5,mc(h),Fs(h)}function mc(h){h.A||(h.A=!0,ae(h,"complete"),ae(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,ae(this,"complete"),ae(this,"abort"),Fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),Et.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Pa(this):this.Xa())},n.Xa=function(){Pa(this)};function Pa(h){if(h.h&&typeof l<"u"){if(h.v&&$i(h)==4)setTimeout(h.Ca.bind(h),0);else if(ae(h,"readystatechange"),$i(h)==4){h.h=!1;try{const Q=h.ca();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var T;if(!(T=y)){var b;if(b=Q===0){let he=String(h.D).match(nh)[1]||null;!he&&u.self&&u.self.location&&(he=u.self.location.protocol.slice(0,-1)),b=!ys.test(he?he.toLowerCase():"")}T=b}if(T)ae(h,"complete"),ae(h,"success");else{h.o=6;try{var z=$i(h)>2?h.g.statusText:""}catch{z=""}h.l=z+" ["+h.ca()+"]",mc(h)}}finally{Fs(h)}}}}function Fs(h,y){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const T=h.g;h.g=null,y||ae(h,"ready");try{T.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function $i(h){return h.g?h.g.readyState:0}n.ca=function(){try{return $i(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),zs(y)}};function Cn(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(h){const y={};h=(h.g&&$i(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(D(h[b]))continue;var T=xo(h[b]);const z=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const Q=y[z]||[];y[z]=Q,Q.push(T)}Fe(y,function(b){return b.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(h,y,T){return T&&T.internalChannelParams&&T.internalChannelParams[h]||y}function Dr(h){this.za=0,this.i=[],this.j=new Jn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vs("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vs("baseRetryDelayMs",5e3,h),this.Za=vs("retryDelaySeedMs",1e4,h),this.Ta=vs("forwardChannelMaxRetries",2,h),this.va=vs("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new ic(h&&h.concurrentRequestLimit),this.Ba=new Nr,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Dr.prototype,n.ka=8,n.I=1,n.connect=function(h,y,T,b){Ct(0),this.W=h,this.H=y||{},T&&b!==void 0&&(this.H.OSID=T,this.H.OAID=b),this.F=this.X,this.J=fh(this,null,this.W),Es(this)};function pc(h){if(Lo(h),h.I==3){var y=h.V++,T=en(h.J);if(pt(T,"SID",h.M),pt(T,"RID",y),pt(T,"TYPE","terminate"),La(h,T),y=new pi(h,h.j,y),y.M=2,y.A=xa(en(T)),T=!1,u.navigator&&u.navigator.sendBeacon)try{T=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!T&&u.Image&&(new Image().src=y.A,T=!0),T||(y.g=mh(y.j,null),y.g.ea(y.A)),y.F=Date.now(),F(y)}dh(h)}function Mr(h){h.g&&(_c(h),h.g.cancel(),h.g=null)}function Lo(h){Mr(h),h.v&&(u.clearTimeout(h.v),h.v=null),jo(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&u.clearTimeout(h.m),h.m=null)}function Es(h){if(!sc(h.h)&&!h.m){h.m=!0;var y=h.Ea;Me||R(),de||(Me(),de=!0),C.add(y,h),h.D=0}}function Vo(h,y){return ms(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=y.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=Ni(g(h.Ea,h,y),hh(h,h.D)),h.D++,!0)}n.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const z=new pi(this,this.j,h);let Q=this.o;if(this.U&&(Q?(Q=P(Q),ce(Q,this.U)):Q=this.U),this.u!==null||this.R||(z.J=Q,Q=null),this.S)e:{for(var y=0,T=0;T<this.i.length;T++){t:{var b=this.i[T];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,y>4096){y=T;break e}if(y===4096||T===this.i.length-1){y=T+1;break e}}y=1e3}else y=1e3;y=oh(this,z,y),T=en(this.J),pt(T,"RID",h),pt(T,"CVER",22),this.G&&pt(T,"X-HTTP-Session-Id",this.G),La(this,T),Q&&(this.R?y="headers="+Wi(Mi(Q))+"&"+y:this.u&&Oa(T,this.u,Q)),rc(this.h,z),this.Ra&&pt(T,"TYPE","init"),this.S?(pt(T,"$req",y),pt(T,"SID","null"),z.U=!0,xi(z,T,null)):xi(z,T,y),this.I=2}}else this.I==3&&(h?gc(this,h):this.i.length==0||sc(this.h)||gc(this))};function gc(h,y){var T;y?T=y.l:T=h.V++;const b=en(h.J);pt(b,"SID",h.M),pt(b,"RID",T),pt(b,"AID",h.K),La(h,b),h.u&&h.o&&Oa(b,h.u,h.o),T=new pi(h,h.j,T,h.D+1),h.u===null&&(T.J=h.o),y&&(h.i=y.G.concat(h.i)),y=oh(h,T,1e3),T.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),rc(h.h,T),xi(T,b,y)}function La(h,y){h.H&&Ne(h.H,function(T,b){pt(y,b,T)}),h.l&&Ne({},function(T,b){pt(y,b,T)})}function oh(h,y,T){T=Math.min(h.i.length,T);const b=h.l?g(h.l.Ka,h.l,h):null;e:{var z=h.i;let je=-1;for(;;){const Gt=["count="+T];je==-1?T>0?(je=z[0].g,Gt.push("ofs="+je)):je=0:Gt.push("ofs="+je);let ct=!0;for(let Lt=0;Lt<T;Lt++){var Q=z[Lt].g;const Oi=z[Lt].map;if(Q-=je,Q<0)je=Math.max(0,z[Lt].g-100),ct=!1;else try{Q="req"+Q+"_"||"";try{var he=Oi instanceof Map?Oi:Object.entries(Oi);for(const[Ss,Xi]of he){let Zi=Xi;f(Xi)&&(Zi=Pn(Xi)),Gt.push(Q+Ss+"="+encodeURIComponent(Zi))}}catch(Ss){throw Gt.push(Q+"type="+encodeURIComponent("_badmap")),Ss}}catch{b&&b(Oi)}}if(ct){he=Gt.join("&");break e}}he=void 0}return h=h.i.splice(0,T),y.G=h,he}function lh(h){if(!h.g&&!h.v){h.Y=1;var y=h.Da;Me||R(),de||(Me(),de=!0),C.add(y,h),h.A=0}}function Va(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=Ni(g(h.Da,h),hh(h,h.A)),h.A++,!0)}n.Da=function(){if(this.v=null,ch(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=Ni(g(this.Wa,this),h)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),Mr(this),ch(this))};function _c(h){h.B!=null&&(u.clearTimeout(h.B),h.B=null)}function ch(h){h.g=new pi(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var y=en(h.na);pt(y,"RID","rpc"),pt(y,"SID",h.M),pt(y,"AID",h.K),pt(y,"CI",h.F?"0":"1"),!h.F&&h.ia&&pt(y,"TO",h.ia),pt(y,"TYPE","xmlhttp"),La(h,y),h.u&&h.o&&Oa(y,h.u,h.o),h.O&&(h.g.H=h.O);var T=h.g;h=h.ba,T.M=1,T.A=xa(en(y)),T.u=null,T.R=!0,br(T,h)}n.Va=function(){this.C!=null&&(this.C=null,Mr(this),Va(this),Ct(19))};function jo(h){h.C!=null&&(u.clearTimeout(h.C),h.C=null)}function uh(h,y){var T=null;if(h.g==y){jo(h),_c(h),h.g=null;var b=2}else if(ps(h.h,y))T=y.G,ac(h.h,y),b=1;else return;if(h.I!=0){if(y.o)if(b==1){T=y.u?y.u.length:0,y=Date.now()-y.F;var z=h.D;b=mi(),ae(b,new Wn(b,T)),Es(h)}else lh(h);else if(z=y.m,z==3||z==0&&y.X>0||!(b==1&&Vo(h,y)||b==2&&Va(h)))switch(T&&T.length>0&&(y=h.h,y.i=y.i.concat(T)),z){case 1:Ts(h,5);break;case 4:Ts(h,10);break;case 3:Ts(h,6);break;default:Ts(h,2)}}}function hh(h,y){let T=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(T*=2),T*y}function Ts(h,y){if(h.j.info("Error code "+y),y==2){var T=g(h.bb,h),b=h.Ua;const z=!b;b=new _i(b||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||pn(b,"https"),xa(b),z?Yi(b.toString(),T):dc(b.toString(),T)}else Ct(2);h.I=0,h.l&&h.l.pa(y),dh(h),Lo(h)}n.bb=function(h){h?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function dh(h){if(h.I=0,h.ja=[],h.l){const y=oc(h.h);(y.length!=0||h.i.length!=0)&&(H(h.ja,y),H(h.ja,h.i),h.h.i.length=0,V(h.i),h.i.length=0),h.l.oa()}}function fh(h,y,T){var b=T instanceof _i?en(T):new _i(T);if(b.g!="")y&&(b.g=y+"."+b.g),Ar(b,b.u);else{var z=u.location;b=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;const Q=new _i(null);b&&pn(Q,b),y&&(Q.g=y),z&&Ar(Q,z),T&&(Q.h=T),b=Q}return T=h.G,y=h.wa,T&&y&&pt(b,T,y),pt(b,"VER",h.ka),La(h,b),b}function mh(h,y,T){if(y&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Aa&&!h.ma?new Et(new _s({ab:T})):new Et(h.ma),y.Fa(h.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ph(){}n=ph.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Or(){}Or.prototype.g=function(h,y){return new Qn(h,y)};function Qn(h,y){K.call(this),this.g=new Dr(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(h?h["X-WebChannel-Client-Profile"]=y.sa:h={"X-WebChannel-Client-Profile":y.sa}),this.g.U=h,(h=y&&y.Qb)&&!D(h)&&(this.g.u=h),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!D(y)&&(this.g.G=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Hs(this)}S(Qn,K),Qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qn.prototype.close=function(){pc(this.g)},Qn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var T={};T.__data__=h,h=T}else this.v&&(T={},T.__data__=Pn(h),h=T);y.i.push(new Jt(y.Ya++,h)),y.I==3&&Es(y)},Qn.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Qn.Z.N.call(this)};function gh(h){Ut.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const T in y){h=T;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}S(gh,Ut);function _h(){Zn.call(this),this.status=1}S(_h,Zn);function Hs(h){this.g=h}S(Hs,ph),Hs.prototype.ra=function(){ae(this.g,"a")},Hs.prototype.qa=function(h){ae(this.g,new gh(h))},Hs.prototype.pa=function(h){ae(this.g,new _h)},Hs.prototype.oa=function(){ae(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Qn.prototype.send=Qn.prototype.o,Qn.prototype.open=Qn.prototype.m,Qn.prototype.close=Qn.prototype.close,Xb=function(){return new Or},$b=function(){return mi()},Qb=it,Qg={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Vd=hs,ds.COMPLETE="complete",Yb=ds,Ht.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",K.prototype.listen=K.prototype.J,du=Ht,Et.prototype.listenOnce=Et.prototype.K,Et.prototype.getLastError=Et.prototype.Ha,Et.prototype.getLastErrorCode=Et.prototype.ya,Et.prototype.getStatus=Et.prototype.ca,Et.prototype.getResponseJson=Et.prototype.La,Et.prototype.getResponseText=Et.prototype.la,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Fa,Wb=Et}).apply(typeof Sd<"u"?Sd:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Gl="12.11.0";function A4(n){Gl=n}/**
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
 */const po=new ju("@firebase/firestore");function gl(){return po.logLevel}function ye(n,...e){if(po.logLevel<=Ke.DEBUG){const t=e.map(ey);po.debug(`Firestore (${Gl}): ${n}`,...t)}}function _r(n,...e){if(po.logLevel<=Ke.ERROR){const t=e.map(ey);po.error(`Firestore (${Gl}): ${n}`,...t)}}function go(n,...e){if(po.logLevel<=Ke.WARN){const t=e.map(ey);po.warn(`Firestore (${Gl}): ${n}`,...t)}}function ey(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function De(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Zb(n,s,t)}function Zb(n,e,t){let s=`FIRESTORE (${Gl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw _r(s),new Error(s)}function mt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Zb(e,a,s)}function Le(n,e){return n}/**
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
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends us{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Jb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Un.UNAUTHENTICATED)))}shutdown(){}}class R4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class I4{constructor(e){this.t=e,this.currentUser=Un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){mt(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new fr,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new fr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(mt(typeof s.accessToken=="string",31837,{l:s}),new Jb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string",2055,{h:e}),new Un(e)}}class N4{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Un.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class x4{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new N4(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class A1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,li(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){mt(this.o===void 0,3512);const s=l=>{l.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ye("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new A1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(mt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new A1(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function M4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class ty{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=M4(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Qe(n,e){return n<e?-1:n>e?1:0}function $g(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return ug(a)===ug(l)?Qe(a,l):ug(a)?1:-1}return Qe(n.length,e.length)}const O4=55296,k4=57343;function ug(n){const e=n.charCodeAt(0);return e>=O4&&e<=k4}function Ml(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
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
 */const C1="__name__";class Is{constructor(e,t,s){t===void 0?t=0:t>e.length&&De(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&De(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Is.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Is?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Is.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Qe(e.length,t.length)}static compareSegments(e,t){const s=Is.isNumericId(e),a=Is.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Is.extractNumericId(e).compare(Is.extractNumericId(t)):$g(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ca.fromString(e.substring(4,e.length-2))}}class It extends Is{construct(e,t,s){return new It(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new It(t)}static emptyPath(){return new It([])}}const P4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class On extends Is{construct(e,t,s){return new On(e,t,s)}static isValidIdentifier(e){return P4.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),On.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===C1}static keyField(){return new On([C1])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ge(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new ge(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(s+=f,a++):(l(),a++)}if(l(),u)throw new ge(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new On(t)}static emptyPath(){return new On([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(It.fromString(e))}static fromName(e){return new be(It.fromString(e).popFirst(5))}static empty(){return new be(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return It.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new It(e.slice()))}}/**
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
 */function eA(n,e,t){if(!t)throw new ge(te.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function L4(n,e,t,s){if(e===!0&&s===!0)throw new ge(te.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function R1(n){if(!be.isDocumentKey(n))throw new ge(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function I1(n){if(be.isDocumentKey(n))throw new ge(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tA(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":De(12329,{type:typeof n})}function yr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xf(n);throw new ge(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ln(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hu(n,e){if(!tA(n))throw new ge(te.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ge(te.INVALID_ARGUMENT,t);return!0}/**
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
 */const N1=-62135596800,x1=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*x1);return new kt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<N1)throw new ge(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/x1}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,kt._jsonSchema))return new kt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-N1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:ln("string",kt._jsonSchemaVersion),seconds:ln("number"),nanoseconds:ln("number")};/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new kt(0,0))}static max(){return new ke(new kt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Nu=-1;function V4(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=ke.fromTimestamp(s===1e9?new kt(t+1,0):new kt(t,s));return new fa(a,be.empty(),e)}function j4(n){return new fa(n.readTime,n.key,Nu)}class fa{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new fa(ke.min(),be.empty(),Nu)}static max(){return new fa(ke.max(),be.empty(),Nu)}}function U4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Qe(n.largestBatchId,e.largestBatchId))}/**
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
 */const z4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Kl(n){if(n.code!==te.FAILED_PRECONDITION||n.message!==z4)throw n;ye("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&De(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.reject(t)}static resolve(e){return new ie(((t,s)=>{t(e)}))}static reject(e){return new ie(((t,s)=>{s(e)}))}static waitFor(e){return new ie(((t,s)=>{let a=0,l=0,u=!1;e.forEach((f=>{++a,f.next((()=>{++l,u&&l===a&&t()}),(p=>s(p)))})),u=!0,l===a&&t()}))}static or(e){let t=ie.resolve(!1);for(const s of e)t=t.next((a=>a?ie.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ie(((s,a)=>{const l=e.length,u=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((E=>{u[g]=E,++f,f===l&&s(u)}),(E=>a(E)))}}))}static doWhile(e,t){return new ie(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function F4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Df{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Df.ce=-1;/**
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
 */const ny=-1;function Mf(n){return n==null}function nf(n){return n===0&&1/n==-1/0}function q4(n){return typeof n=="number"&&Number.isInteger(n)&&!nf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const nA="";function H4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=D1(e)),e=G4(n.get(t),e);return D1(e)}function G4(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case nA:t+="";break;default:t+=l}}return t}function D1(n){return n+nA+""}/**
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
 */function M1(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let cn=class Xg{constructor(e,t){this.comparator=e,this.root=t||ua.EMPTY}insert(e,t){return new Xg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ua.BLACK,null,null))}remove(e){return new Xg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ua.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wd(this.root,e,this.comparator,!1)}getReverseIterator(){return new wd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wd(this.root,e,this.comparator,!0)}},wd=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ua=class ar{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ar.RED,this.left=a??ar.EMPTY,this.right=l??ar.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new ar(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ar.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ar.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ar.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ar.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw De(43730,{key:this.key,value:this.value});if(this.right.isRed())throw De(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw De(27949);return e+(this.isRed()?0:1)}};ua.EMPTY=null,ua.RED=!0,ua.BLACK=!1;ua.EMPTY=new class{constructor(){this.size=0}get key(){throw De(57766)}get value(){throw De(16141)}get color(){throw De(16727)}get left(){throw De(29726)}get right(){throw De(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new ua(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fn{constructor(e){this.comparator=e,this.data=new cn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new O1(this.data.getIterator())}getIteratorFrom(e){return new O1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fn(this.comparator);return t.data=e,t}}class O1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ai{constructor(e){this.fields=e,e.sort(On.comparator)}static empty(){return new Ai([])}unionWith(e){let t=new fn(On.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ai(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ml(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class sA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new sA("Invalid base64 string: "+l):l}})(e);return new kn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new kn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kn.EMPTY_BYTE_STRING=new kn("");const K4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ma(n){if(mt(!!n,39018),typeof n=="string"){let e=0;const t=K4.exec(n);if(mt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Yt(n.seconds),nanos:Yt(n.nanos)}}function Yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pa(n){return typeof n=="string"?kn.fromBase64String(n):kn.fromUint8Array(n)}/**
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
 */const rA="server_timestamp",aA="__type__",oA="__previous_value__",lA="__local_write_time__";function iy(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[aA])==null?void 0:s.stringValue)===rA}function Of(n){const e=n.mapValue.fields[oA];return iy(e)?Of(e):e}function xu(n){const e=ma(n.mapValue.fields[lA].timestampValue);return new kt(e.seconds,e.nanos)}/**
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
 */class W4{constructor(e,t,s,a,l,u,f,p,g,E,S){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E,this.apiKey=S}}const sf="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||sf}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===sf}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}function Y4(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ge(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(n.options.projectId,e)}/**
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
 */const cA="__type__",Q4="__max__",bd={mapValue:{}},uA="__vector__",rf="value";function ga(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?iy(n)?4:X4(n)?9007199254740991:$4(n)?10:11:De(28295,{value:n})}function Ls(n,e){if(n===e)return!0;const t=ga(n);if(t!==ga(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xu(n).isEqual(xu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=ma(a.timestampValue),f=ma(l.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return pa(a.bytesValue).isEqual(pa(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Yt(a.geoPointValue.latitude)===Yt(l.geoPointValue.latitude)&&Yt(a.geoPointValue.longitude)===Yt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Yt(a.integerValue)===Yt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Yt(a.doubleValue),f=Yt(l.doubleValue);return u===f?nf(u)===nf(f):isNaN(u)&&isNaN(f)}return!1})(n,e);case 9:return Ml(n.arrayValue.values||[],e.arrayValue.values||[],Ls);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},f=l.mapValue.fields||{};if(M1(u)!==M1(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!Ls(u[p],f[p])))return!1;return!0})(n,e);default:return De(52216,{left:n})}}function Mu(n,e){return(n.values||[]).find((t=>Ls(t,e)))!==void 0}function Ol(n,e){if(n===e)return 0;const t=ga(n),s=ga(e);if(t!==s)return Qe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Qe(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const f=Yt(l.integerValue||l.doubleValue),p=Yt(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return k1(n.timestampValue,e.timestampValue);case 4:return k1(xu(n),xu(e));case 5:return $g(n.stringValue,e.stringValue);case 6:return(function(l,u){const f=pa(l),p=pa(u);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const f=l.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const E=Qe(f[g],p[g]);if(E!==0)return E}return Qe(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const f=Qe(Yt(l.latitude),Yt(u.latitude));return f!==0?f:Qe(Yt(l.longitude),Yt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return P1(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var A,V,H,Z;const f=l.fields||{},p=u.fields||{},g=(A=f[rf])==null?void 0:A.arrayValue,E=(V=p[rf])==null?void 0:V.arrayValue,S=Qe(((H=g==null?void 0:g.values)==null?void 0:H.length)||0,((Z=E==null?void 0:E.values)==null?void 0:Z.length)||0);return S!==0?S:P1(g,E)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===bd.mapValue&&u===bd.mapValue)return 0;if(l===bd.mapValue)return 1;if(u===bd.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=u.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const A=$g(p[S],E[S]);if(A!==0)return A;const V=Ol(f[p[S]],g[E[S]]);if(V!==0)return V}return Qe(p.length,E.length)})(n.mapValue,e.mapValue);default:throw De(23264,{he:t})}}function k1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Qe(n,e);const t=ma(n),s=ma(e),a=Qe(t.seconds,s.seconds);return a!==0?a:Qe(t.nanos,s.nanos)}function P1(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Ol(t[a],s[a]);if(l)return l}return Qe(t.length,s.length)}function kl(n){return Zg(n)}function Zg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ma(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return pa(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return be.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Zg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${Zg(t.fields[u])}`;return a+"}"})(n.mapValue):De(61005,{value:n})}function jd(n){switch(ga(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Of(n);return e?16+jd(e):16;case 5:return 2*n.stringValue.length;case 6:return pa(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+jd(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return wa(s.fields,((l,u)=>{a+=l.length+jd(u)})),a})(n.mapValue);default:throw De(13486,{value:n})}}function L1(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jg(n){return!!n&&"integerValue"in n}function sy(n){return!!n&&"arrayValue"in n}function V1(n){return!!n&&"nullValue"in n}function j1(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ud(n){return!!n&&"mapValue"in n}function $4(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cA])==null?void 0:s.stringValue)===uA}function _u(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return wa(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=_u(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_u(n.arrayValue.values[t]);return e}return{...n}}function X4(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Q4}/**
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
 */class ci{constructor(e){this.value=e}static empty(){return new ci({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ud(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_u(t)}setAll(e){let t=On.emptyPath(),s={},a=[];e.forEach(((u,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=f.popLast()}u?s[f.lastSegment()]=_u(u):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Ud(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ls(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Ud(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){wa(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new ci(_u(this.value))}}function hA(n){const e=[];return wa(n.fields,((t,s)=>{const a=new On([t]);if(Ud(s)){const l=hA(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new Ai(e)}/**
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
 */class zn{constructor(e,t,s,a,l,u,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=f}static newInvalidDocument(e){return new zn(e,0,ke.min(),ke.min(),ke.min(),ci.empty(),0)}static newFoundDocument(e,t,s,a){return new zn(e,1,t,ke.min(),s,a,0)}static newNoDocument(e,t){return new zn(e,2,t,ke.min(),ke.min(),ci.empty(),0)}static newUnknownDocument(e,t){return new zn(e,3,t,ke.min(),ke.min(),ci.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ci.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class af{constructor(e,t){this.position=e,this.inclusive=t}}function U1(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(u.referenceValue),t.key):s=Ol(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function z1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ls(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z4(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class dA{}class on extends dA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ek(e,t,s):t==="array-contains"?new ik(e,s):t==="in"?new sk(e,s):t==="not-in"?new rk(e,s):t==="array-contains-any"?new ak(e,s):new on(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new tk(e,s):new nk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ol(t,this.value)):t!==null&&ga(this.value)===ga(t)&&this.matchesComparison(Ol(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return De(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cs extends dA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new cs(e,t)}matches(e){return fA(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fA(n){return n.op==="and"}function mA(n){return J4(n)&&fA(n)}function J4(n){for(const e of n.filters)if(e instanceof cs)return!1;return!0}function e_(n){if(n instanceof on)return n.field.canonicalString()+n.op.toString()+kl(n.value);if(mA(n))return n.filters.map((e=>e_(e))).join(",");{const e=n.filters.map((t=>e_(t))).join(",");return`${n.op}(${e})`}}function pA(n,e){return n instanceof on?(function(s,a){return a instanceof on&&s.op===a.op&&s.field.isEqual(a.field)&&Ls(s.value,a.value)})(n,e):n instanceof cs?(function(s,a){return a instanceof cs&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,f)=>l&&pA(u,a.filters[f])),!0):!1})(n,e):void De(19439)}function gA(n){return n instanceof on?(function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`})(n):n instanceof cs?(function(t){return t.op.toString()+" {"+t.getFilters().map(gA).join(" ,")+"}"})(n):"Filter"}class ek extends on{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class tk extends on{constructor(e,t){super(e,"in",t),this.keys=_A("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class nk extends on{constructor(e,t){super(e,"not-in",t),this.keys=_A("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _A(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>be.fromName(s.referenceValue)))}class ik extends on{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sy(t)&&Mu(t.arrayValue,this.value)}}class sk extends on{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mu(this.value.arrayValue,t)}}class rk extends on{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mu(this.value.arrayValue,t)}}class ak extends on{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Mu(this.value.arrayValue,s)))}}/**
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
 */class ok{constructor(e,t=null,s=[],a=[],l=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=f,this.Te=null}}function B1(n,e=null,t=[],s=[],a=null,l=null,u=null){return new ok(n,e,t,s,a,l,u)}function ry(n){const e=Le(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>e_(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Mf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>kl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>kl(s))).join(",")),e.Te=t}return e.Te}function ay(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Z4(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!z1(n.startAt,e.startAt)&&z1(n.endAt,e.endAt)}function t_(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yl{constructor(e,t=null,s=[],a=[],l=null,u="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=f,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function lk(n,e,t,s,a,l,u,f){return new Yl(n,e,t,s,a,l,u,f)}function oy(n){return new Yl(n)}function F1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ck(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function yA(n){return n.collectionGroup!==null}function yu(n){const e=Le(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new fn(On.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Ou(l,s))})),t.has(On.keyField().canonicalString())||e.Ee.push(new Ou(On.keyField(),s))}return e.Ee}function Ds(n){const e=Le(n);return e.Ie||(e.Ie=uk(e,yu(n))),e.Ie}function uk(n,e){if(n.limitType==="F")return B1(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Ou(a.field,l)}));const t=n.endAt?new af(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new af(n.startAt.position,n.startAt.inclusive):null;return B1(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function n_(n,e){const t=n.filters.concat([e]);return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hk(n,e){const t=n.explicitOrderBy.concat([e]);return new Yl(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function i_(n,e,t){return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kf(n,e){return ay(Ds(n),Ds(e))&&n.limitType===e.limitType}function vA(n){return`${ry(Ds(n))}|lt:${n.limitType}`}function _l(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>gA(a))).join(", ")}]`),Mf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>kl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>kl(a))).join(",")),`Target(${s})`})(Ds(n))}; limitType=${n.limitType})`}function Pf(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of yu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,f,p){const g=U1(u,f,p);return u.inclusive?g<=0:g<0})(s.startAt,yu(s),a)||s.endAt&&!(function(u,f,p){const g=U1(u,f,p);return u.inclusive?g>=0:g>0})(s.endAt,yu(s),a))})(n,e)}function dk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function EA(n){return(e,t)=>{let s=!1;for(const a of yu(n)){const l=fk(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function fk(n,e,t){const s=n.field.isKeyField()?be.comparator(e.key,t.key):(function(l,u,f){const p=u.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Ol(p,g):De(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return De(19790,{direction:n.dir})}}/**
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
 */class bo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return iA(this.inner)}size(){return this.innerSize}}/**
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
 */const mk=new cn(be.comparator);function vr(){return mk}const TA=new cn(be.comparator);function fu(...n){let e=TA;for(const t of n)e=e.insert(t.key,t);return e}function SA(n){let e=TA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function so(){return vu()}function wA(){return vu()}function vu(){return new bo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pk=new cn(be.comparator),gk=new fn(be.comparator);function $e(...n){let e=gk;for(const t of n)e=e.add(t);return e}const _k=new fn(Qe);function yk(){return _k}/**
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
 */function ly(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nf(e)?"-0":e}}function bA(n){return{integerValue:""+n}}function vk(n,e){return q4(e)?bA(e):ly(n,e)}/**
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
 */class Lf{constructor(){this._=void 0}}function Ek(n,e,t){return n instanceof ku?(function(a,l){const u={fields:{[aA]:{stringValue:rA},[lA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&iy(l)&&(l=Of(l)),l&&(u.fields[oA]=l),{mapValue:u}})(t,e):n instanceof Pl?CA(n,e):n instanceof Pu?RA(n,e):(function(a,l){const u=AA(a,l),f=q1(u)+q1(a.Ae);return Jg(u)&&Jg(a.Ae)?bA(f):ly(a.serializer,f)})(n,e)}function Tk(n,e,t){return n instanceof Pl?CA(n,e):n instanceof Pu?RA(n,e):t}function AA(n,e){return n instanceof of?(function(s){return Jg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ku extends Lf{}class Pl extends Lf{constructor(e){super(),this.elements=e}}function CA(n,e){const t=IA(e);for(const s of n.elements)t.some((a=>Ls(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Pu extends Lf{constructor(e){super(),this.elements=e}}function RA(n,e){let t=IA(e);for(const s of n.elements)t=t.filter((a=>!Ls(a,s)));return{arrayValue:{values:t}}}class of extends Lf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function q1(n){return Yt(n.integerValue||n.doubleValue)}function IA(n){return sy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class NA{constructor(e,t){this.field=e,this.transform=t}}function Sk(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof Pl&&a instanceof Pl||s instanceof Pu&&a instanceof Pu?Ml(s.elements,a.elements,Ls):s instanceof of&&a instanceof of?Ls(s.Ae,a.Ae):s instanceof ku&&a instanceof ku})(n.transform,e.transform)}class wk{constructor(e,t){this.version=e,this.transformResults=t}}class Ms{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ms}static exists(e){return new Ms(void 0,e)}static updateTime(e){return new Ms(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vf{}function xA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new MA(n.key,Ms.none()):new Gu(n.key,n.data,Ms.none());{const t=n.data,s=ci.empty();let a=new fn(On.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new ba(n.key,s,new Ai(a.toArray()),Ms.none())}}function bk(n,e,t){n instanceof Gu?(function(a,l,u){const f=a.value.clone(),p=G1(a.fieldTransforms,l,u.transformResults);f.setAll(p),l.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ba?(function(a,l,u){if(!zd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const f=G1(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(DA(a)),p.setAll(f),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Eu(n,e,t,s){return n instanceof Gu?(function(l,u,f,p){if(!zd(l.precondition,u))return f;const g=l.value.clone(),E=K1(l.fieldTransforms,p,u);return g.setAll(E),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof ba?(function(l,u,f,p){if(!zd(l.precondition,u))return f;const g=K1(l.fieldTransforms,p,u),E=u.data;return E.setAll(DA(l)),E.setAll(g),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(n,e,t,s):(function(l,u,f){return zd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f})(n,e,t)}function Ak(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=AA(s.transform,a||null);l!=null&&(t===null&&(t=ci.empty()),t.set(s.field,l))}return t||null}function H1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ml(s,a,((l,u)=>Sk(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gu extends Vf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ba extends Vf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function DA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function G1(n,e,t){const s=new Map;mt(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,f=e.data.field(l.field);s.set(l.field,Tk(u,f,t[a]))}return s}function K1(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,Ek(l,u,e))}return s}class MA extends Vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ck extends Vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rk{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&bk(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Eu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Eu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=wA();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let f=this.applyToLocalView(u,l.mutatedFields);f=t.has(a.key)?null:f;const p=xA(u,f);p!==null&&s.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(ke.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$e())}isEqual(e){return this.batchId===e.batchId&&Ml(this.mutations,e.mutations,((t,s)=>H1(t,s)))&&Ml(this.baseMutations,e.baseMutations,((t,s)=>H1(t,s)))}}class cy{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){mt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return pk})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new cy(e,t,s,a)}}/**
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
 */class Ik{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Nk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var an,Je;function xk(n){switch(n){case te.OK:return De(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return De(15467,{code:n})}}function OA(n){if(n===void 0)return _r("GRPC error has no .code"),te.UNKNOWN;switch(n){case an.OK:return te.OK;case an.CANCELLED:return te.CANCELLED;case an.UNKNOWN:return te.UNKNOWN;case an.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case an.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case an.INTERNAL:return te.INTERNAL;case an.UNAVAILABLE:return te.UNAVAILABLE;case an.UNAUTHENTICATED:return te.UNAUTHENTICATED;case an.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case an.NOT_FOUND:return te.NOT_FOUND;case an.ALREADY_EXISTS:return te.ALREADY_EXISTS;case an.PERMISSION_DENIED:return te.PERMISSION_DENIED;case an.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case an.ABORTED:return te.ABORTED;case an.OUT_OF_RANGE:return te.OUT_OF_RANGE;case an.UNIMPLEMENTED:return te.UNIMPLEMENTED;case an.DATA_LOSS:return te.DATA_LOSS;default:return De(39323,{code:n})}}(Je=an||(an={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Dk(){return new TextEncoder}/**
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
 */const Mk=new ca([4294967295,4294967295],0);function W1(n){const e=Dk().encode(n),t=new Kb;return t.update(e),new Uint8Array(t.digest())}function Y1(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ca([t,s],0),new ca([a,l],0)]}class uy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new mu(`Invalid padding: ${t}`);if(s<0)throw new mu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new mu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new mu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ca.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(ca.fromNumber(s)));return a.compare(Mk)===1&&(a=new ca([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=W1(e),[s,a]=Y1(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new uy(l,a,t);return s.forEach((f=>u.insert(f))),u}insert(e){if(this.ge===0)return;const t=W1(e),[s,a]=Y1(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new jf(ke.min(),a,new cn(Qe),vr(),$e())}}class Ku{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ku(s,t,$e(),$e(),$e())}}/**
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
 */class Bd{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class kA{constructor(e,t){this.targetId=e,this.Ce=t}}class PA{constructor(e,t,s=kn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Q1{constructor(){this.ve=0,this.Fe=$1(),this.Me=kn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$e(),t=$e(),s=$e();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:De(38017,{changeType:l})}})),new Ku(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=$1()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,mt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ok{constructor(e){this.Ge=e,this.ze=new Map,this.je=vr(),this.Je=Ad(),this.He=Ad(),this.Ze=new cn(Qe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:De(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(t_(l))if(s===0){const u=new be(l.path);this.et(t,u,zn.newNoDocument(u,ke.min()))}else mt(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const f=this.ut(e),p=f?this.ct(f,e,u):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,f;try{u=pa(s).toUint8Array()}catch(p){if(p instanceof sA)return go("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new uy(u,a,l)}catch(p){return go(p instanceof mu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const f=this.ot(u);if(f){if(l.current&&t_(f.target)){const p=new be(f.target.path);this.Et(p).has(u)||this.It(u,p)||this.et(u,p,zn.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=$e();this.He.forEach(((l,u)=>{let f=!0;u.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new jf(e,t,this.Ze,this.je,s);return this.je=vr(),this.Je=Ad(),this.He=Ad(),this.Ze=new cn(Qe),a}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.It(e,t)?a.Ke(t,1):a.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Q1,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new fn(Qe),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new fn(Qe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ye("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Q1),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ad(){return new cn(be.comparator)}function $1(){return new cn(be.comparator)}const kk={asc:"ASCENDING",desc:"DESCENDING"},Pk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lk={and:"AND",or:"OR"};class Vk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function s_(n,e){return n.useProto3Json||Mf(e)?e:{value:e}}function lf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jk(n,e){return lf(n,e.toTimestamp())}function Os(n){return mt(!!n,49232),ke.fromTimestamp((function(t){const s=ma(t);return new kt(s.seconds,s.nanos)})(n))}function hy(n,e){return r_(n,e).canonicalString()}function r_(n,e){const t=(function(a){return new It(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function VA(n){const e=It.fromString(n);return mt(FA(e),10190,{key:e.toString()}),e}function a_(n,e){return hy(n.databaseId,e.path)}function hg(n,e){const t=VA(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(UA(t))}function jA(n,e){return hy(n.databaseId,e)}function Uk(n){const e=VA(n);return e.length===4?It.emptyPath():UA(e)}function o_(n){return new It(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function UA(n){return mt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function X1(n,e,t){return{name:a_(n,e),fields:t.value.mapValue.fields}}function zk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:De(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,E){return g.useProto3Json?(mt(E===void 0||typeof E=="string",58123),kn.fromBase64String(E||"")):(mt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),kn.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&(function(g){const E=g.code===void 0?te.UNKNOWN:OA(g.code);return new ge(E,g.message||"")})(u);t=new PA(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=hg(n,s.document.name),l=Os(s.document.updateTime),u=s.document.createTime?Os(s.document.createTime):ke.min(),f=new ci({mapValue:{fields:s.document.fields}}),p=zn.newFoundDocument(a,l,u,f),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Bd(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=hg(n,s.document),l=s.readTime?Os(s.readTime):ke.min(),u=zn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Bd([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=hg(n,s.document),l=s.removedTargetIds||[];t=new Bd([],l,a,null)}else{if(!("filter"in e))return De(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new Nk(a,l),f=s.targetId;t=new kA(f,u)}}return t}function Bk(n,e){let t;if(e instanceof Gu)t={update:X1(n,e.key,e.value)};else if(e instanceof MA)t={delete:a_(n,e.key)};else if(e instanceof ba)t={update:X1(n,e.key,e.data),updateMask:$k(e.fieldMask)};else{if(!(e instanceof Ck))return De(16599,{dt:e.type});t={verify:a_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const f=u.transform;if(f instanceof ku)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Pl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Pu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof of)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw De(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:jk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:De(27497)})(n,e.precondition)),t}function Fk(n,e){return n&&n.length>0?(mt(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?Os(a.updateTime):Os(l);return u.isEqual(ke.min())&&(u=Os(l)),new wk(u,a.transformResults||[])})(t,e)))):[]}function qk(n,e){return{documents:[jA(n,e.path)]}}function Hk(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=jA(n,a);const l=(function(g){if(g.length!==0)return BA(cs.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(g){if(g.length!==0)return g.map((E=>(function(A){return{field:yl(A.field),direction:Wk(A.dir)}})(E)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=s_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function Gk(n){let e=Uk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){mt(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(S){const A=zA(S);return A instanceof cs&&mA(A)?A.getFilters():[A]})(t.where));let u=[];t.orderBy&&(u=(function(S){return S.map((A=>(function(H){return new Ou(vl(H.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let A;return A=typeof S=="object"?S.value:S,Mf(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(S){const A=!!S.before,V=S.values||[];return new af(V,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(S){const A=!S.before,V=S.values||[];return new af(V,A)})(t.endAt)),lk(e,a,u,l,f,"F",p,g)}function Kk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return De(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vl(t.unaryFilter.field);return on.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=vl(t.unaryFilter.field);return on.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vl(t.unaryFilter.field);return on.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=vl(t.unaryFilter.field);return on.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return De(61313);default:return De(60726)}})(n):n.fieldFilter!==void 0?(function(t){return on.create(vl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return De(58110);default:return De(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return cs.create(t.compositeFilter.filters.map((s=>zA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return De(1026)}})(t.compositeFilter.op))})(n):De(30097,{filter:n})}function Wk(n){return kk[n]}function Yk(n){return Pk[n]}function Qk(n){return Lk[n]}function yl(n){return{fieldPath:n.canonicalString()}}function vl(n){return On.fromServerFormat(n.fieldPath)}function BA(n){return n instanceof on?(function(t){if(t.op==="=="){if(j1(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NAN"}};if(V1(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(j1(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NAN"}};if(V1(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yl(t.field),op:Yk(t.op),value:t.value}}})(n):n instanceof cs?(function(t){const s=t.getFilters().map((a=>BA(a)));return s.length===1?s[0]:{compositeFilter:{op:Qk(t.op),filters:s}}})(n):De(54877,{filter:n})}function $k(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function FA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function qA(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class aa{constructor(e,t,s,a,l=ke.min(),u=ke.min(),f=kn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new aa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new aa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new aa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new aa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Xk{constructor(e){this.yt=e}}function Zk(n){const e=Gk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?i_(e,e.limit,"L"):e}/**
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
 */class Jk{constructor(){this.bn=new eP}addToCollectionParentIndex(e,t){return this.bn.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(fa.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(fa.min())}updateCollectionGroup(e,t,s){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class eP{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new fn(It.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new fn(It.comparator)).toArray()}}/**
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
 */const Z1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},HA=41943040;class oi{static withCacheSize(e){return new oi(e,oi.DEFAULT_COLLECTION_PERCENTILE,oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */oi.DEFAULT_COLLECTION_PERCENTILE=10,oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oi.DEFAULT=new oi(HA,oi.DEFAULT_COLLECTION_PERCENTILE,oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oi.DISABLED=new oi(-1,0,0);/**
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
 */class Ll{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ll(0)}static ar(){return new Ll(-1)}}/**
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
 */const J1="LruGarbageCollector",tP=1048576;function eS([n,e],[t,s]){const a=Qe(n,t);return a===0?Qe(e,s):a}class nP{constructor(e){this.Pr=e,this.buffer=new fn(eS),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();eS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iP{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ye(J1,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wl(t)?ye(J1,"Ignoring IndexedDB error during garbage collection: ",t):await Kl(t)}await this.Ar(3e5)}))}}class sP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ie.resolve(Df.ce);const s=new nP(t);return this.Vr.forEachTarget(e,(a=>s.Ir(a.sequenceNumber))).next((()=>this.Vr.mr(e,(a=>s.Ir(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ye("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(Z1)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ye("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Z1):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,a,l,u,f,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ye("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,u=Date.now(),this.nthSequenceNumber(e,a)))).next((S=>(s=S,f=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(g=Date.now(),gl()<=Ke.DEBUG&&ye("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${S} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S}))))}}function rP(n,e){return new sP(n,e)}/**
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
 */class aP{constructor(){this.changes=new bo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ie.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lP{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Eu(s.mutation,a,Ai.empty(),kt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,$e()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=$e()){const a=so();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=fu();return l.forEach(((f,p)=>{u=u.insert(f,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=so();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,$e())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,f)=>{t.set(u,f)}))}))}computeViews(e,t,s,a){let l=vr();const u=vu(),f=(function(){return vu()})();return t.forEach(((p,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof ba)?l=l.insert(g.key,g):E!==void 0?(u.set(g.key,E.mutation.getFieldMask()),Eu(E.mutation,g,E.mutation.getFieldMask(),kt.now())):u.set(g.key,Ai.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,E)=>u.set(g,E))),t.forEach(((g,E)=>f.set(g,new oP(E,u.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=vu();let a=new cn(((u,f)=>u-f)),l=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const f of u)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||Ai.empty();E=f.applyToLocalView(g,E),s.set(p,E);const S=(a.get(f.batchId)||$e()).add(p);a=a.insert(f.batchId,S)}))})).next((()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,E=p.value,S=wA();E.forEach((A=>{if(!l.has(A)){const V=xA(t.get(A),s.get(A));V!==null&&S.set(A,V),l=l.add(A)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,S))}return ie.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return ck(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ie.resolve(so());let f=Nu,p=l;return u.next((g=>ie.forEach(g,((E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(E)?ie.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{p=p.insert(E,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,$e()))).next((E=>({batchId:f,changes:SA(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next((s=>{let a=fu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=fu();return this.indexManager.getCollectionParents(e,l).next((f=>ie.forEach(f,(p=>{const g=(function(S,A){return new Yl(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((E=>{E.forEach(((S,A)=>{u=u.insert(S,A)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((p,g)=>{const E=g.getKey();u.get(E)===null&&(u=u.insert(E,zn.newInvalidDocument(E)))}));let f=fu();return u.forEach(((p,g)=>{const E=l.get(p);E!==void 0&&Eu(E.mutation,g,Ai.empty(),kt.now()),Pf(t,g)&&(f=f.insert(p,g))})),f}))}}/**
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
 */class cP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return ie.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Os(a.createTime)}})(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(a){return{name:a.name,query:Zk(a.bundledQuery),readTime:Os(a.readTime)}})(t)),ie.resolve()}}/**
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
 */class uP{constructor(){this.overlays=new cn(be.comparator),this.Lr=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const s=so();return ie.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ie.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Lr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),ie.resolve()}getOverlaysForCollection(e,t,s){const a=so(),l=t.length+1,u=new be(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ie.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new cn(((g,E)=>g-E));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=so(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const f=so(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>f.set(g,E))),!(f.size()>=a)););return ie.resolve(f)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.Lr.get(a.largestBatchId).delete(s.key);this.Lr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new Ik(t,s));let l=this.Lr.get(t);l===void 0&&(l=$e(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class hP{constructor(){this.sessionToken=kn.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
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
 */class dy{constructor(){this.kr=new fn(vn.qr),this.Kr=new fn(vn.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new vn(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new vn(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new be(new It([])),s=new vn(t,e),a=new vn(t,e+1),l=[];return this.Kr.forEachInRange([s,a],(u=>{this.Wr(u),l.push(u.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new be(new It([])),s=new vn(t,e),a=new vn(t,e+1);let l=$e();return this.Kr.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new vn(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vn{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return be.comparator(e.key,t.key)||Qe(e.Jr,t.Jr)}static Ur(e,t){return Qe(e.Jr,t.Jr)||be.comparator(e.key,t.key)}}/**
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
 */class dP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fn(vn.qr)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Rk(l,t,s,a);this.mutationQueue.push(u);for(const f of a)this.Hr=this.Hr.add(new vn(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ie.resolve(u)}lookupMutationBatch(e,t){return ie.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return ie.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?ny:this.Yn-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vn(t,0),a=new vn(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,a],(u=>{const f=this.Zr(u.Jr);l.push(f)})),ie.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fn(Qe);return t.forEach((a=>{const l=new vn(a,0),u=new vn(a,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,u],(f=>{s=s.add(f.Jr)}))})),ie.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const u=new vn(new be(l),0);let f=new fn(Qe);return this.Hr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Jr)),!0)}),u),ie.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){mt(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return ie.forEach(t.mutations,(a=>{const l=new vn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new vn(t,0),a=this.Hr.firstAfterOrEqual(s);return ie.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fP{constructor(e){this.ti=e,this.docs=(function(){return new cn(be.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ie.resolve(s?s.document.mutableCopy():zn.newInvalidDocument(t))}getEntries(e,t){let s=vr();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():zn.newInvalidDocument(a))})),ie.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=vr();const u=t.path,f=new be(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||U4(j4(E),s)<=0||(a.has(E.key)||Pf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ie.resolve(l)}getAllFromCollectionGroup(e,t,s,a){De(9500)}ni(e,t){return ie.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new mP(this)}getSize(e){return ie.resolve(this.size)}}class mP extends aP{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Mr.addEntry(e,a)):this.Mr.removeEntry(s)})),ie.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class pP{constructor(e){this.persistence=e,this.ri=new bo((t=>ry(t)),ay),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.ii=0,this.si=new dy,this.targetCount=0,this.oi=Ll._r()}forEachTarget(e,t){return this.ri.forEach(((s,a)=>t(a))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),ie.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ll(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.lr(t),ie.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ri.forEach(((u,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(u),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),ie.waitFor(l).next((()=>a))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return ie.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),ie.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),ie.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return ie.resolve(s)}containsKey(e,t){return ie.resolve(this.si.containsKey(t))}}/**
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
 */class GA{constructor(e,t){this._i={},this.overlays={},this.ai=new Df(0),this.ui=!1,this.ui=!0,this.ci=new hP,this.referenceDelegate=e(this),this.li=new pP(this),this.indexManager=new Jk,this.remoteDocumentCache=(function(a){return new fP(a)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Xk(t),this.Pi=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new dP(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ye("MemoryPersistence","Starting transaction:",e);const a=new gP(this.ai.next());return this.referenceDelegate.Ti(),s(a).next((l=>this.referenceDelegate.Ei(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ii(e,t){return ie.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class gP extends B4{constructor(e){super(),this.currentSequenceNumber=e}}class fy{constructor(e){this.persistence=e,this.Ri=new dy,this.Ai=null}static Vi(e){return new fy(e)}get di(){if(this.Ai)return this.Ai;throw De(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),ie.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((a=>this.di.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.di,(s=>{const a=be.fromPath(s);return this.mi(e,a).next((l=>{l||t.removeEntry(a,ke.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return ie.or([()=>ie.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class cf{constructor(e,t){this.persistence=e,this.fi=new bo((s=>H4(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=rP(this,t)}static Vi(e,t){return new cf(e,t)}Ti(){}Ei(e){return ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return ie.forEach(this.fi,((s,a)=>this.wr(e,s,a).next((l=>l?ie.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ni(e,(u=>this.wr(e,u,t).next((f=>{f||(s++,l.removeEntry(u,ke.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),ie.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ie.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),ie.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jd(e.data.value)),t}wr(e,t,s){return ie.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.fi.get(t);return ie.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class my{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=a}static Is(e,t){let s=$e(),a=$e();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new my(e,t.fromCache,s,a)}}/**
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
 */class _P{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return fN()?8:F4(Hn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.gs(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ps(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new _P;return this.ys(e,t,u).next((f=>{if(l.result=f,this.As)return this.ws(e,t,u,f.size)}))})).next((()=>l.result))}ws(e,t,s,a){return s.documentReadCount<this.Vs?(gl()<=Ke.DEBUG&&ye("QueryEngine","SDK will not create cache indexes for query:",_l(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ie.resolve()):(gl()<=Ke.DEBUG&&ye("QueryEngine","Query:",_l(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ds*a?(gl()<=Ke.DEBUG&&ye("QueryEngine","The SDK decides to create cache indexes for query:",_l(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ds(t))):ie.resolve())}gs(e,t){if(F1(t))return ie.resolve(null);let s=Ds(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=i_(t,null,"F"),s=Ds(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=$e(...l);return this.fs.getDocuments(e,u).next((f=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ss(t,f);return this.bs(t,g,u,p.readTime)?this.gs(e,i_(t,null,"F")):this.Ds(e,g,t,p)}))))})))))}ps(e,t,s,a){return F1(t)||a.isEqual(ke.min())?ie.resolve(null):this.fs.getDocuments(e,s).next((l=>{const u=this.Ss(t,l);return this.bs(t,u,s,a)?ie.resolve(null):(gl()<=Ke.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),_l(t)),this.Ds(e,u,t,V4(a,Nu)).next((f=>f)))}))}Ss(e,t){let s=new fn(EA(e));return t.forEach(((a,l)=>{Pf(e,l)&&(s=s.add(l))})),s}bs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ys(e,t,s){return gl()<=Ke.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",_l(t)),this.fs.getDocumentsMatchingQuery(e,t,fa.min(),s)}Ds(e,t,s,a){return this.fs.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
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
 */const py="LocalStore",vP=3e8;class EP{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.vs=new cn(Qe),this.Fs=new bo((l=>ry(l)),ay),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function TP(n,e,t,s){return new EP(n,e,t,s)}async function KA(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],f=[];let p=$e();for(const g of a){u.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ns:g,removedBatchIds:u,addedBatchIds:f})))}))}))}function SP(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,E){const S=g.batch,A=S.keys();let V=ie.resolve();return A.forEach((H=>{V=V.next((()=>E.getEntry(p,H))).next((Z=>{const Y=g.docVersions.get(H);mt(Y!==null,48541),Z.version.compareTo(Y)<0&&(S.applyToRemoteDocument(Z,g),Z.isValidDocument()&&(Z.setReadTime(g.commitVersion),E.addEntry(Z)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(p,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let p=$e();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function WA(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function wP(n,e){const t=Le(n),s=e.snapshotVersion;let a=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});a=t.vs;const f=[];e.targetChanges.forEach(((E,S)=>{const A=a.get(S);if(!A)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,S).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,S))));let V=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?V=V.withResumeToken(kn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,s)),a=a.insert(S,V),(function(Z,Y,pe){return Z.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=vP?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(A,V,E)&&f.push(t.li.updateTargetData(l,V))}));let p=vr(),g=$e();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(bP(l,u,e.documentUpdates).next((E=>{p=E.Bs,g=E.Ls}))),!s.isEqual(ke.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((S=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return ie.waitFor(f).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.vs=a,l)))}function bP(n,e,t){let s=$e(),a=$e();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=vr();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(f,p)):ye(py,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{Bs:u,Ls:a}}))}function AP(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ny),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function CP(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.li.getTargetData(s,e).next((l=>l?(a=l,ie.resolve(a)):t.li.allocateTargetId(s).next((u=>(a=new aa(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.vs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function l_(n,e,t){const s=Le(n),a=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Wl(u))throw u;ye(py,`Failed to update sequence numbers for target ${e}: ${u}`)}s.vs=s.vs.remove(e),s.Fs.delete(a.target)}function tS(n,e,t){const s=Le(n);let a=ke.min(),l=$e();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,g,E){const S=Le(p),A=S.Fs.get(E);return A!==void 0?ie.resolve(S.vs.get(A)):S.li.getTargetData(g,E)})(s,u,Ds(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(u,f.targetId).next((p=>{l=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(u,e,t?a:ke.min(),t?l:$e()))).next((f=>(RP(s,dk(e),f),{documents:f,ks:l})))))}function RP(n,e,t){let s=n.Ms.get(e)||ke.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Ms.set(e,s)}class nS{constructor(){this.activeTargetIds=yk()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IP{constructor(){this.vo=new nS,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new nS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NP{Mo(e){}shutdown(){}}/**
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
 */const iS="ConnectivityMonitor";class sS{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ye(iS,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ye(iS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cd=null;function c_(){return Cd===null?Cd=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cd++,"0x"+Cd.toString(16)}/**
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
 */const dg="RestConnection",xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class DP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.$o=this.databaseId.database===sf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const u=c_(),f=this.Qo(e,t.toUriEncodedString());ye(dg,`Sending RPC '${e}' ${u}:`,f,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,a,l);const{host:g}=new URL(f),E=So(g);return this.zo(e,f,p,s,E).then((S=>(ye(dg,`Received RPC '${e}' ${u}: `,S),S)),(S=>{throw go(dg,`RPC '${e}' ${u} failed with error: `,S,"url: ",f,"request:",s),S}))}jo(e,t,s,a,l,u){return this.Wo(e,t,s,a,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}Qo(e,t){const s=xP[e];let a=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(a=`${a}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),a}terminate(){}}/**
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
 */class MP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const jn="WebChannelConnection",nu=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(a){setTimeout((()=>{throw a}),0)}}))};class Cl extends DP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Cl.c_){const e=$b();nu(e,Qb.STAT_EVENT,(t=>{t.stat===Qg.PROXY?ye(jn,"STAT_EVENT: detected buffering proxy"):t.stat===Qg.NOPROXY&&ye(jn,"STAT_EVENT: detected no buffering proxy")})),Cl.c_=!0}}zo(e,t,s,a,l){const u=c_();return new Promise(((f,p)=>{const g=new Wb;g.setWithCredentials(!0),g.listenOnce(Yb.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Vd.NO_ERROR:const S=g.getResponseJson();ye(jn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(S)),f(S);break;case Vd.TIMEOUT:ye(jn,`RPC '${e}' ${u} timed out`),p(new ge(te.DEADLINE_EXCEEDED,"Request time out"));break;case Vd.HTTP_ERROR:const A=g.getStatus();if(ye(jn,`RPC '${e}' ${u} failed with status:`,A,"response text:",g.getResponseText()),A>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const H=V==null?void 0:V.error;if(H&&H.status&&H.message){const Z=(function(pe){const ue=pe.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(ue)>=0?ue:te.UNKNOWN})(H.status);p(new ge(Z,H.message))}else p(new ge(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(te.UNAVAILABLE,"Connection failed."));break;default:De(9055,{l_:e,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ye(jn,`RPC '${e}' ${u} completed.`)}}));const E=JSON.stringify(a);ye(jn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",E,s,15)}))}T_(e,t,s){const a=c_(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const g=l.join("");ye(jn,`Creating RPC '${e}' stream ${a}: ${g}`,f);const E=u.createWebChannel(g,f);this.E_(E);let S=!1,A=!1;const V=new MP({Jo:H=>{A?ye(jn,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(S||(ye(jn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),S=!0),ye(jn,`RPC '${e}' stream ${a} sending:`,H),E.send(H))},Ho:()=>E.close()});return nu(E,du.EventType.OPEN,(()=>{A||(ye(jn,`RPC '${e}' stream ${a} transport opened.`),V.i_())})),nu(E,du.EventType.CLOSE,(()=>{A||(A=!0,ye(jn,`RPC '${e}' stream ${a} transport closed`),V.o_(),this.I_(E))})),nu(E,du.EventType.ERROR,(H=>{A||(A=!0,go(jn,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),V.o_(new ge(te.UNAVAILABLE,"The operation could not be completed")))})),nu(E,du.EventType.MESSAGE,(H=>{var Z;if(!A){const Y=H.data[0];mt(!!Y,16349);const pe=Y,ue=(pe==null?void 0:pe.error)||((Z=pe[0])==null?void 0:Z.error);if(ue){ye(jn,`RPC '${e}' stream ${a} received error:`,ue);const le=ue.status;let Ee=(function(C){const R=an[C];if(R!==void 0)return OA(R)})(le),Me=ue.message;le==="NOT_FOUND"&&Me.includes("database")&&Me.includes("does not exist")&&Me.includes(this.databaseId.database)&&go(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ee===void 0&&(Ee=te.INTERNAL,Me="Unknown error status: "+le+" with message "+ue.message),A=!0,V.o_(new ge(Ee,Me)),E.close()}else ye(jn,`RPC '${e}' stream ${a} received:`,Y),V.__(Y)}})),Cl.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xb()}}/**
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
 */function OP(n){return new Cl(n)}function fg(){return typeof document<"u"?document:null}/**
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
 */function Uf(n){return new Vk(n,!0)}/**
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
 */Cl.c_=!1;class YA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=a,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ye("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const rS="PersistentStream";class QA{constructor(e,t,s,a,l,u,f,p){this.Ci=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new YA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?(_r(t.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ge(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ye(rS,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ye(rS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kP extends QA{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=zk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ke.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?ke.min():u.readTime?Os(u.readTime):ke.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=o_(this.serializer),t.addTarget=(function(l,u){let f;const p=u.target;if(f=t_(p)?{documents:qk(l,p)}:{query:Hk(l,p).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=LA(l,u.resumeToken);const g=s_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(ke.min())>0){f.readTime=lf(l,u.snapshotVersion.toTimestamp());const g=s_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=Kk(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=o_(this.serializer),t.removeTarget=e,this.q_(t)}}class PP extends QA{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return mt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,mt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){mt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Fk(e.writeResults,e.commitTime),s=Os(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=o_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Bk(this.serializer,s)))};this.q_(t)}}/**
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
 */class LP{}class VP extends LP{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ge(te.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Wo(e,r_(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(te.UNKNOWN,l.toString())}))}jo(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.jo(e,r_(t,s),a,u,f,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(te.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function jP(n,e,t,s){return new VP(n,e,t,s)}class UP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_r(t),this.aa=!1):ye("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _o="RemoteStore";class zP{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((u=>{s.enqueueAndForget((async()=>{Ao(this)&&(ye(_o,"Restarting streams for network reachability change."),await(async function(p){const g=Le(p);g.Ia.add(4),await Wu(g),g.Va.set("Unknown"),g.Ia.delete(4),await zf(g)})(this))}))})),this.Va=new UP(s,a)}}async function zf(n){if(Ao(n))for(const e of n.Ra)await e(!0)}async function Wu(n){for(const e of n.Ra)await e(!1)}function $A(n,e){const t=Le(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),vy(t)?yy(t):Ql(t).O_()&&_y(t,e))}function gy(n,e){const t=Le(n),s=Ql(t);t.Ea.delete(e),s.O_()&&XA(t,e),t.Ea.size===0&&(s.O_()?s.L_():Ao(t)&&t.Va.set("Unknown"))}function _y(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ql(n).Z_(e)}function XA(n,e){n.da.$e(e),Ql(n).X_(e)}function yy(n){n.da=new Ok({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ql(n).start(),n.Va.ua()}function vy(n){return Ao(n)&&!Ql(n).x_()&&n.Ea.size>0}function Ao(n){return Le(n).Ia.size===0}function ZA(n){n.da=void 0}async function BP(n){n.Va.set("Online")}async function FP(n){n.Ea.forEach(((e,t)=>{_y(n,e)}))}async function qP(n,e){ZA(n),vy(n)?(n.Va.ha(e),yy(n)):n.Va.set("Unknown")}async function HP(n,e,t){if(n.Va.set("Online"),e instanceof PA&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const f of l.targetIds)a.Ea.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.Ea.delete(f),a.da.removeTarget(f))})(n,e)}catch(s){ye(_o,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uf(n,s)}else if(e instanceof Bd?n.da.Xe(e):e instanceof kA?n.da.st(e):n.da.tt(e),!t.isEqual(ke.min()))try{const s=await WA(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const f=l.da.Tt(u);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ea.get(g);E&&l.Ea.set(g,E.withResumeToken(p.resumeToken,u))}})),f.targetMismatches.forEach(((p,g)=>{const E=l.Ea.get(p);if(!E)return;l.Ea.set(p,E.withResumeToken(kn.EMPTY_BYTE_STRING,E.snapshotVersion)),XA(l,p);const S=new aa(E.target,p,g,E.sequenceNumber);_y(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){ye(_o,"Failed to raise snapshot:",s),await uf(n,s)}}async function uf(n,e,t){if(!Wl(e))throw e;n.Ia.add(1),await Wu(n),n.Va.set("Offline"),t||(t=()=>WA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ye(_o,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await zf(n)}))}function JA(n,e){return e().catch((t=>uf(n,t,e)))}async function Bf(n){const e=Le(n),t=_a(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ny;for(;GP(e);)try{const a=await AP(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,KP(e,a)}catch(a){await uf(e,a)}eC(e)&&tC(e)}function GP(n){return Ao(n)&&n.Ta.length<10}function KP(n,e){n.Ta.push(e);const t=_a(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function eC(n){return Ao(n)&&!_a(n).x_()&&n.Ta.length>0}function tC(n){_a(n).start()}async function WP(n){_a(n).ra()}async function YP(n){const e=_a(n);for(const t of n.Ta)e.ea(t.mutations)}async function QP(n,e,t){const s=n.Ta.shift(),a=cy.from(s,e,t);await JA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Bf(n)}async function $P(n,e){e&&_a(n).Y_&&await(async function(s,a){if((function(u){return xk(u)&&u!==te.ABORTED})(a.code)){const l=s.Ta.shift();_a(s).B_(),await JA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Bf(s)}})(n,e),eC(n)&&tC(n)}async function aS(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),ye(_o,"RemoteStore received new credentials");const s=Ao(t);t.Ia.add(3),await Wu(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await zf(t)}async function XP(n,e){const t=Le(n);e?(t.Ia.delete(2),await zf(t)):e||(t.Ia.add(2),await Wu(t),t.Va.set("Unknown"))}function Ql(n){return n.ma||(n.ma=(function(t,s,a){const l=Le(t);return l.sa(),new kP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:BP.bind(null,n),Yo:FP.bind(null,n),t_:qP.bind(null,n),H_:HP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),vy(n)?yy(n):n.Va.set("Unknown")):(await n.ma.stop(),ZA(n))}))),n.ma}function _a(n){return n.fa||(n.fa=(function(t,s,a){const l=Le(t);return l.sa(),new PP(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:WP.bind(null,n),t_:$P.bind(null,n),ta:YP.bind(null,n),na:QP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Bf(n)):(await n.fa.stop(),n.Ta.length>0&&(ye(_o,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ey{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,f=new Ey(e,t,u,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ty(n,e){if(_r("AsyncQueue",`${e}: ${n}`),Wl(n))return new ge(te.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rl{static emptySet(e){return new Rl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=fu(),this.sortedSet=new cn(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Rl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class oS{constructor(){this.ga=new cn(be.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):De(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Vl{constructor(e,t,s,a,l,u,f,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((f=>{u.push({type:0,doc:f})})),new Vl(e,t,Rl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class ZP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class JP{constructor(){this.queries=lS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Le(t),l=a.queries;a.queries=lS(),l.forEach(((u,f)=>{for(const p of f.Sa)p.onError(s)}))})(this,new ge(te.ABORTED,"Firestore shutting down"))}}function lS(){return new bo((n=>vA(n)),kf)}async function nC(n,e){const t=Le(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new ZP,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=Ty(u,`Initialization of query '${_l(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Sy(t)}async function iC(n,e){const t=Le(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function e3(n,e){const t=Le(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const f of u.Sa)f.Fa(a)&&(s=!0);u.wa=a}}s&&Sy(t)}function t3(n,e,t){const s=Le(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function Sy(n){n.Ca.forEach((e=>{e.next()}))}var u_,cS;(cS=u_||(u_={})).Ma="default",cS.Cache="cache";class sC{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Vl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==u_.Cache}}/**
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
 */class rC{constructor(e){this.key=e}}class aC{constructor(e){this.key=e}}class n3{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$e(),this.mutatedKeys=$e(),this.eu=EA(e),this.tu=new Rl(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new oS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,S)=>{const A=a.get(E),V=Pf(this.query,S)?S:null,H=!!A&&this.mutatedKeys.has(A.key),Z=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let Y=!1;A&&V?A.data.isEqual(V.data)?H!==Z&&(s.track({type:3,doc:V}),Y=!0):this.su(A,V)||(s.track({type:2,doc:V}),Y=!0,(p&&this.eu(V,p)>0||g&&this.eu(V,g)<0)&&(f=!0)):!A&&V?(s.track({type:0,doc:V}),Y=!0):A&&!V&&(s.track({type:1,doc:A}),Y=!0,(p||g)&&(f=!0)),Y&&(V?(u=u.add(V),l=Z?l.add(E):l.delete(E)):(u=u.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:u,iu:s,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((E,S)=>(function(V,H){const Z=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return De(20277,{Vt:Y})}};return Z(V)-Z(H)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),a=a??!1;const f=t&&!a?this._u():[],p=this.Ya.size===0&&this.current&&!a?1:0,g=p!==this.Xa;return this.Xa=p,u.length!==0||g?{snapshot:new Vl(this.query,e.tu,l,u,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oS,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=$e(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new aC(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new rC(s))})),t}cu(e){this.Za=e.ks,this.Ya=$e();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wy="SyncEngine";class i3{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class s3{constructor(e){this.key=e,this.hu=!1}}class r3{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new bo((f=>vA(f)),kf),this.Eu=new Map,this.Iu=new Set,this.Ru=new cn(be.comparator),this.Au=new Map,this.Vu=new dy,this.du={},this.mu=new Map,this.fu=Ll.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function a3(n,e,t=!0){const s=dC(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await oC(s,e,t,!0),a}async function o3(n,e){const t=dC(n);await oC(t,e,!0,!1)}async function oC(n,e,t,s){const a=await CP(n.localStore,Ds(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await l3(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&$A(n.remoteStore,a),f}async function l3(n,e,t,s,a){n.pu=(S,A,V)=>(async function(Z,Y,pe,ue){let le=Y.view.ru(pe);le.bs&&(le=await tS(Z.localStore,Y.query,!1).then((({documents:C})=>Y.view.ru(C,le))));const Ee=ue&&ue.targetChanges.get(Y.targetId),Me=ue&&ue.targetMismatches.get(Y.targetId)!=null,de=Y.view.applyChanges(le,Z.isPrimaryClient,Ee,Me);return hS(Z,Y.targetId,de.au),de.snapshot})(n,S,A,V);const l=await tS(n.localStore,e,!0),u=new n3(e,l.ks),f=u.ru(l.documents),p=Ku.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=u.applyChanges(f,n.isPrimaryClient,p);hS(n,t,g.au);const E=new i3(e,t,u);return n.Tu.set(e,E),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),g.snapshot}async function c3(n,e,t){const s=Le(n),a=s.Tu.get(e),l=s.Eu.get(a.targetId);if(l.length>1)return s.Eu.set(a.targetId,l.filter((u=>!kf(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await l_(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&gy(s.remoteStore,a.targetId),h_(s,a.targetId)})).catch(Kl)):(h_(s,a.targetId),await l_(s.localStore,a.targetId,!0))}async function u3(n,e){const t=Le(n),s=t.Tu.get(e),a=t.Eu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),gy(t.remoteStore,s.targetId))}async function h3(n,e,t){const s=y3(n);try{const a=await(function(u,f){const p=Le(u),g=kt.now(),E=f.reduce(((V,H)=>V.add(H.key)),$e());let S,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let H=vr(),Z=$e();return p.xs.getEntries(V,E).next((Y=>{H=Y,H.forEach(((pe,ue)=>{ue.isValidDocument()||(Z=Z.add(pe))}))})).next((()=>p.localDocuments.getOverlayedDocuments(V,H))).next((Y=>{S=Y;const pe=[];for(const ue of f){const le=Ak(ue,S.get(ue.key).overlayedDocument);le!=null&&pe.push(new ba(ue.key,le,hA(le.value.mapValue),Ms.exists(!0)))}return p.mutationQueue.addMutationBatch(V,g,pe,f)})).next((Y=>{A=Y;const pe=Y.applyToLocalDocumentSet(S,Z);return p.documentOverlayCache.saveOverlays(V,Y.batchId,pe)}))})).then((()=>({batchId:A.batchId,changes:SA(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,f,p){let g=u.du[u.currentUser.toKey()];g||(g=new cn(Qe)),g=g.insert(f,p),u.du[u.currentUser.toKey()]=g})(s,a.batchId,t),await Yu(s,a.changes),await Bf(s.remoteStore)}catch(a){const l=Ty(a,"Failed to persist write");t.reject(l)}}async function lC(n,e){const t=Le(n);try{const s=await wP(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(mt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?mt(u.hu,14607):a.removedDocuments.size>0&&(mt(u.hu,42227),u.hu=!1))})),await Yu(t,s,e)}catch(s){await Kl(s)}}function uS(n,e,t){const s=Le(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const f=u.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(u,f){const p=Le(u);p.onlineState=f;let g=!1;p.queries.forEach(((E,S)=>{for(const A of S.Sa)A.va(f)&&(g=!0)})),g&&Sy(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function d3(n,e,t){const s=Le(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new cn(be.comparator);u=u.insert(l,zn.newNoDocument(l,ke.min()));const f=$e().add(l),p=new jf(ke.min(),new Map,new cn(Qe),u,f);await lC(s,p),s.Ru=s.Ru.remove(l),s.Au.delete(e),by(s)}else await l_(s.localStore,e,!1).then((()=>h_(s,e,t))).catch(Kl)}async function f3(n,e){const t=Le(n),s=e.batch.batchId;try{const a=await SP(t.localStore,e);uC(t,s,null),cC(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Yu(t,a)}catch(a){await Kl(a)}}async function m3(n,e,t){const s=Le(n);try{const a=await(function(u,f){const p=Le(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,f).next((S=>(mt(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(g,S)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);uC(s,e,t),cC(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Yu(s,a)}catch(a){await Kl(a)}}function cC(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function uC(n,e,t){const s=Le(n);let a=s.du[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.du[s.currentUser.toKey()]=a}}function h_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||hC(n,s)}))}function hC(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(gy(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),by(n))}function hS(n,e,t){for(const s of t)s instanceof rC?(n.Vu.addReference(s.key,e),p3(n,s)):s instanceof aC?(ye(wy,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||hC(n,s.key)):De(19791,{wu:s})}function p3(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(ye(wy,"New document in limbo: "+t),n.Iu.add(s),by(n))}function by(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new be(It.fromString(e)),s=n.fu.next();n.Au.set(s,new s3(t)),n.Ru=n.Ru.insert(t,s),$A(n.remoteStore,new aa(Ds(oy(t.path)),s,"TargetPurposeLimboResolution",Df.ce))}}async function Yu(n,e,t){const s=Le(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,p)=>{u.push(s.pu(p,e,t).then((g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(g){a.push(g);const S=my.Is(p.targetId,g);l.push(S)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(p,g){const E=Le(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>ie.forEach(g,(A=>ie.forEach(A.Ts,(V=>E.persistence.referenceDelegate.addReference(S,A.targetId,V))).next((()=>ie.forEach(A.Es,(V=>E.persistence.referenceDelegate.removeReference(S,A.targetId,V)))))))))}catch(S){if(!Wl(S))throw S;ye(py,"Failed to update sequence numbers: "+S)}for(const S of g){const A=S.targetId;if(!S.fromCache){const V=E.vs.get(A),H=V.snapshotVersion,Z=V.withLastLimboFreeSnapshotVersion(H);E.vs=E.vs.insert(A,Z)}}})(s.localStore,l))}async function g3(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){ye(wy,"User change. New user:",e.toKey());const s=await KA(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new ge(te.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yu(t,s.Ns)}}function _3(n,e){const t=Le(n),s=t.Au.get(e);if(s&&s.hu)return $e().add(s.key);{let a=$e();const l=t.Eu.get(e);if(!l)return a;for(const u of l){const f=t.Tu.get(u);a=a.unionWith(f.view.nu)}return a}}function dC(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d3.bind(null,e),e.Pu.H_=e3.bind(null,e.eventManager),e.Pu.yu=t3.bind(null,e.eventManager),e}function y3(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m3.bind(null,e),e}class hf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return TP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new GA(fy.Vi,this.serializer)}Du(e){return new IP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hf.provider={build:()=>new hf};class v3 extends hf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){mt(this.persistence.referenceDelegate instanceof cf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iP(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?oi.withCacheSize(this.cacheSizeBytes):oi.DEFAULT;return new GA((s=>cf.Vi(s,t)),this.serializer)}}class d_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=g3.bind(null,this.syncEngine),await XP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JP})()}createDatastore(e){const t=Uf(e.databaseInfo.databaseId),s=OP(e.databaseInfo);return jP(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,f){return new zP(s,a,l,u,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>uS(this.syncEngine,t,0)),(function(){return sS.v()?new sS:new NP})())}createSyncEngine(e,t){return(function(a,l,u,f,p,g,E){const S=new r3(a,l,u,f,p,g);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Le(a);ye(_o,"RemoteStore shutting down."),l.Ia.add(5),await Wu(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}d_.provider={build:()=>new d_};/**
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
 */class fC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ya="FirestoreClient";class E3{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=a,this.user=Un.UNAUTHENTICATED,this.clientId=ty.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{ye(ya,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(ye(ya,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ty(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function mg(n,e){n.asyncQueue.verifyOperationInProgress(),ye(ya,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await KA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function dS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await T3(n);ye(ya,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>aS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>aS(e.remoteStore,a))),n._onlineComponents=e}async function T3(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ye(ya,"Using user provided OfflineComponentProvider");try{await mg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===te.FAILED_PRECONDITION||a.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;go("Error using user provided cache. Falling back to memory cache: "+t),await mg(n,new hf)}}else ye(ya,"Using default OfflineComponentProvider"),await mg(n,new v3(void 0));return n._offlineComponents}async function mC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ye(ya,"Using user provided OnlineComponentProvider"),await dS(n,n._uninitializedComponentsProvider._online)):(ye(ya,"Using default OnlineComponentProvider"),await dS(n,new d_))),n._onlineComponents}function S3(n){return mC(n).then((e=>e.syncEngine))}async function pC(n){const e=await mC(n),t=e.eventManager;return t.onListen=a3.bind(null,e.syncEngine),t.onUnlisten=c3.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=o3.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=u3.bind(null,e.syncEngine),t}function w3(n,e,t={}){const s=new fr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new fC({next:A=>{E.Nu(),u.enqueueAndForget((()=>iC(l,S)));const V=A.docs.has(f);!V&&A.fromCache?g.reject(new ge(te.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&A.fromCache&&p&&p.source==="server"?g.reject(new ge(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new sC(oy(f.path),E,{includeMetadataChanges:!0,qa:!0});return nC(l,S)})(await pC(n),n.asyncQueue,e,t,s))),s.promise}function b3(n,e,t={}){const s=new fr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new fC({next:A=>{E.Nu(),u.enqueueAndForget((()=>iC(l,S))),A.fromCache&&p.source==="server"?g.reject(new ge(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new sC(f,E,{includeMetadataChanges:!0,qa:!0});return nC(l,S)})(await pC(n),n.asyncQueue,e,t,s))),s.promise}function A3(n,e){const t=new fr;return n.asyncQueue.enqueueAndForget((async()=>h3(await S3(n),e,t))),t.promise}/**
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
 */function gC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const C3="ComponentProvider",fS=new Map;function R3(n,e,t,s,a){return new W4(n,e,t,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,gC(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator,s)}/**
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
 */const _C="firestore.googleapis.com",mS=!0;class pS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_C,this.ssl=mS}else this.host=e.host,this.ssl=e.ssl??mS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=HA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new ge(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gC(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ff{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new C4;switch(s.type){case"firstParty":return new x4(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=fS.get(t);s&&(ye(C3,"Removing Datastore"),fS.delete(t),s.terminate())})(this),Promise.resolve()}}function I3(n,e,t,s={}){var g;n=yr(n,Ff);const a=So(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;a&&L_(`https://${f}`),l.host!==_C&&l.host!==f&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:s};if(!Ps(p,u)&&(n._setSettings(p),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Un.MOCK_USER;else{E=Pw(s.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ge(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Un(A)}n._authCredentials=new R4(new Jb(E,S))}}/**
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
 */class Co{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Co(this.firestore,e,this._query)}}class Qt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}toJSON(){return{type:Qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Hu(t,Qt._jsonSchema))return new Qt(e,s||null,new be(It.fromString(t.referencePath)))}}Qt._jsonSchemaVersion="firestore/documentReference/1.0",Qt._jsonSchema={type:ln("string",Qt._jsonSchemaVersion),referencePath:ln("string")};class ha extends Co{constructor(e,t,s){super(e,t,oy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new be(e))}withConverter(e){return new ha(this.firestore,e,this._path)}}function Ay(n,e,...t){if(n=Nt(n),eA("collection","path",e),n instanceof Ff){const s=It.fromString(e,...t);return I1(s),new ha(n,null,s)}{if(!(n instanceof Qt||n instanceof ha))throw new ge(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(It.fromString(e,...t));return I1(s),new ha(n.firestore,null,s)}}function Aa(n,e,...t){if(n=Nt(n),arguments.length===1&&(e=ty.newId()),eA("doc","path",e),n instanceof Ff){const s=It.fromString(e,...t);return R1(s),new Qt(n,null,new be(s))}{if(!(n instanceof Qt||n instanceof ha))throw new ge(te.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(It.fromString(e,...t));return R1(s),new Qt(n.firestore,n instanceof ha?n.converter:null,new be(s))}}/**
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
 */const gS="AsyncQueue";class _S{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YA(this,"async_queue_retry"),this._c=()=>{const s=fg();s&&ye(gS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=fg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Wl(e))throw e;ye(gS,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,_r("INTERNAL UNHANDLED ERROR: ",yS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Ey.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&De(47125,{Pc:yS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qu extends Ff{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new _S,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _S(e),this._firestoreClient=void 0,await e}}}function N3(n,e){const t=typeof n=="object"?n:Uu(),s=typeof n=="string"?n:sf,a=Ea(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Mw("firestore");l&&I3(a,...l)}return a}function Cy(n){if(n._terminated)throw new ge(te.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||x3(n),n._firestoreClient}function x3(n){var s,a,l,u;const e=n._freezeSettings(),t=R3(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(a=n._app)==null?void 0:a.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new E3(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(n._componentsProvider))}/**
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
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(kn.fromBase64String(e))}catch(t){throw new ge(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fi(kn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,Fi._jsonSchema))return Fi.fromBase64String(e.bytes)}}Fi._jsonSchemaVersion="firestore/bytes/1.0",Fi._jsonSchema={type:ln("string",Fi._jsonSchemaVersion),bytes:ln("string")};/**
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
 */class Ry{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new On(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $u{constructor(e){this._methodName=e}}/**
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
 */class ks{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ks._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,ks._jsonSchema))return new ks(e.latitude,e.longitude)}}ks._jsonSchemaVersion="firestore/geoPoint/1.0",ks._jsonSchema={type:ln("string",ks._jsonSchemaVersion),latitude:ln("number"),longitude:ln("number")};/**
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
 */class as{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:as._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,as._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new as(e.vectorValues);throw new ge(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}as._jsonSchemaVersion="firestore/vectorValue/1.0",as._jsonSchema={type:ln("string",as._jsonSchemaVersion),vectorValues:ln("object")};/**
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
 */const D3=/^__.*__$/;class M3{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ba(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gu(e,this.data,t,this.fieldTransforms)}}class yC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ba(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw De(40011,{dataSource:n})}}class qf{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new qf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return df(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(vC(this.dataSource)&&D3.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class O3{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Uf(e)}A(e,t,s,a=!1){return new qf({dataSource:e,methodName:t,targetDoc:s,path:On.emptyPath(),arrayElement:!1,hasConverter:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Iy(n){const e=n._freezeSettings(),t=Uf(n._databaseId);return new O3(n._databaseId,!!e.ignoreUndefinedProperties,t)}function k3(n,e,t,s,a,l={}){const u=n.A(l.merge||l.mergeFields?2:0,e,t,a);Dy("Data must be an object, but it was:",u,s);const f=EC(s,u);let p,g;if(l.merge)p=new Ai(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const A=jl(e,S,t);if(!u.contains(A))throw new ge(te.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);wC(E,A)||E.push(A)}p=new Ai(E),g=u.fieldTransforms.filter((S=>p.covers(S.field)))}else p=null,g=u.fieldTransforms;return new M3(new ci(f),p,g)}class Hf extends $u{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hf}}function P3(n,e,t){return new qf({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ny extends $u{_toFieldTransform(e){return new NA(e.path,new ku)}isEqual(e){return e instanceof Ny}}class xy extends $u{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=P3(this,e,!0),s=this.Sc.map((l=>$l(l,t))),a=new Pl(s);return new NA(e.path,a)}isEqual(e){return e instanceof xy&&Ps(this.Sc,e.Sc)}}function L3(n,e,t,s){const a=n.A(1,e,t);Dy("Data must be an object, but it was:",a,s);const l=[],u=ci.empty();wa(s,((p,g)=>{const E=SC(e,p,t);g=Nt(g);const S=a.fc(E);if(g instanceof Hf)l.push(E);else{const A=$l(g,S);A!=null&&(l.push(E),u.set(E,A))}}));const f=new Ai(l);return new yC(u,f,a.fieldTransforms)}function V3(n,e,t,s,a,l){const u=n.A(1,e,t),f=[jl(e,s,t)],p=[a];if(l.length%2!=0)throw new ge(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(jl(e,l[A])),p.push(l[A+1]);const g=[],E=ci.empty();for(let A=f.length-1;A>=0;--A)if(!wC(g,f[A])){const V=f[A];let H=p[A];H=Nt(H);const Z=u.fc(V);if(H instanceof Hf)g.push(V);else{const Y=$l(H,Z);Y!=null&&(g.push(V),E.set(V,Y))}}const S=new Ai(g);return new yC(E,S,u.fieldTransforms)}function j3(n,e,t,s=!1){return $l(t,n.A(s?4:3,e))}function $l(n,e){if(TC(n=Nt(n)))return Dy("Unsupported field value:",e,n),EC(n,e);if(n instanceof $u)return(function(s,a){if(!vC(a.dataSource))throw a.yc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const f of s){let p=$l(f,a.gc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=Nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vk(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=kt.fromDate(s);return{timestampValue:lf(a.serializer,l)}}if(s instanceof kt){const l=new kt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:lf(a.serializer,l)}}if(s instanceof ks)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fi)return{bytesValue:LA(a.serializer,s._byteString)};if(s instanceof Qt){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.yc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:hy(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof as)return(function(u,f){const p=u instanceof as?u.toArray():u;return{mapValue:{fields:{[cA]:{stringValue:uA},[rf]:{arrayValue:{values:p.map((E=>{if(typeof E!="number")throw f.yc("VectorValues must only contain numeric values.");return ly(f.serializer,E)}))}}}}}})(s,a);if(qA(s))return s._toProto(a.serializer);throw a.yc(`Unsupported field value: ${xf(s)}`)})(n,e)}function EC(n,e){const t={};return iA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(n,((s,a)=>{const l=$l(a,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function TC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof ks||n instanceof Fi||n instanceof Qt||n instanceof $u||n instanceof as||qA(n))}function Dy(n,e,t){if(!TC(t)||!tA(t)){const s=xf(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function jl(n,e,t){if((e=Nt(e))instanceof Ry)return e._internalPath;if(typeof e=="string")return SC(n,e);throw df("Field path arguments must be of type string or ",n,!1,void 0,t)}const U3=new RegExp("[~\\*/\\[\\]]");function SC(n,e,t){if(e.search(U3)>=0)throw df(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ry(...e.split("."))._internalPath}catch{throw df(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function df(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${s}`),u&&(p+=` in document ${a}`),p+=")"),new ge(te.INVALID_ARGUMENT,f+n+p)}function wC(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class z3{convertValue(e,t="none"){switch(ga(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw De(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return wa(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,a,l;const t=(l=(a=(s=e.fields)==null?void 0:s[rf].arrayValue)==null?void 0:a.values)==null?void 0:l.map((u=>Yt(u.doubleValue)));return new as(t)}convertGeoPoint(e){return new ks(Yt(e.latitude),Yt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Of(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const t=ma(e);return new kt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=It.fromString(e);mt(FA(s),9688,{name:e});const a=new Du(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||_r(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class bC extends z3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,t)}}function Vs(){return new Ny("serverTimestamp")}function B3(...n){return new xy("arrayUnion",n)}const vS="@firebase/firestore",ES="4.13.0";/**
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
 */class AC{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class F3 extends AC{data(){return super.data()}}/**
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
 */function q3(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class My{}class CC extends My{}function RC(n,e,...t){let s=[];e instanceof My&&s.push(e),s=s.concat(t),(function(l){const u=l.filter((p=>p instanceof ky)).length,f=l.filter((p=>p instanceof Oy)).length;if(u>1||u>0&&f>0)throw new ge(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Oy extends CC{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Oy(e,t,s)}_apply(e){const t=this._parse(e);return NC(e._query,t),new Co(e.firestore,e.converter,n_(e._query,t))}_parse(e){const t=Iy(e.firestore);return(function(l,u,f,p,g,E,S){let A;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ge(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){SS(S,E);const H=[];for(const Z of S)H.push(TS(p,l,Z));A={arrayValue:{values:H}}}else A=TS(p,l,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||SS(S,E),A=j3(f,u,S,E==="in"||E==="not-in");return on.create(g,E,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ky extends My{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ky(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:cs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let u=a;const f=l.getFlattenedFilters();for(const p of f)NC(u,p),u=n_(u,p)})(e._query,t),new Co(e.firestore,e.converter,n_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Py extends CC{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Py(e,t)}_apply(e){const t=(function(a,l,u){if(a.startAt!==null)throw new ge(te.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ge(te.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ou(l,u)})(e._query,this._field,this._direction);return new Co(e.firestore,e.converter,hk(e._query,t))}}function IC(n,e="asc"){const t=e,s=jl("orderBy",n);return Py._create(s,t)}function TS(n,e,t){if(typeof(t=Nt(t))=="string"){if(t==="")throw new ge(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yA(e)&&t.indexOf("/")!==-1)throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(It.fromString(t));if(!be.isDocumentKey(s))throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return L1(n,new be(s))}if(t instanceof Qt)return L1(n,t._key);throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xf(t)}.`)}function SS(n,e){if(!Array.isArray(n)||n.length===0)throw new ge(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NC(n,e){const t=(function(a,l){for(const u of a)for(const f of u.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ge(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function H3(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class pu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lo extends AC{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}lo._jsonSchemaVersion="firestore/documentSnapshot/1.0",lo._jsonSchema={type:ln("string",lo._jsonSchemaVersion),bundleSource:ln("string","DocumentSnapshot"),bundleName:ln("string"),bundle:ln("string")};class Fd extends lo{data(e={}){return super.data(e)}}class Il{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new pu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Fd(this._firestore,this._userDataWriter,s.key,s,new pu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((f=>{const p=new Fd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new pu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Fd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new pu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),E=u.indexOf(f.doc.key)),{type:G3(f.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Il._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ty.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G3(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return De(61501,{type:n})}}/**
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
 */Il._jsonSchemaVersion="firestore/querySnapshot/1.0",Il._jsonSchema={type:ln("string",Il._jsonSchemaVersion),bundleSource:ln("string","QuerySnapshot"),bundleName:ln("string"),bundle:ln("string")};/**
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
 */function Xl(n){n=yr(n,Qt);const e=yr(n.firestore,Qu),t=Cy(e);return w3(t,n._key).then((s=>K3(e,n,s)))}function Ly(n){n=yr(n,Co);const e=yr(n.firestore,Qu),t=Cy(e),s=new bC(e);return q3(n._query),b3(t,n._query).then((a=>new Il(e,s,n,a)))}function Gf(n,e,t){n=yr(n,Qt);const s=yr(n.firestore,Qu),a=H3(n.converter,e,t),l=Iy(s);return xC(s,[k3(l,"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ms.none())])}function Vy(n,e,t,...s){n=yr(n,Qt);const a=yr(n.firestore,Qu),l=Iy(a);let u;return u=typeof(e=Nt(e))=="string"||e instanceof Ry?V3(l,"updateDoc",n._key,e,t,s):L3(l,"updateDoc",n._key,e),xC(a,[u.toMutation(n._key,Ms.exists(!0))])}function xC(n,e){const t=Cy(n);return A3(t,e)}function K3(n,e,t){const s=t.docs.get(e._key),a=new bC(n);return new lo(n,a,e._key,s,new pu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){A4(wo),ls(new Hi("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),f=new Qu(new I4(s.getProvider("auth-internal")),new D4(u,s.getProvider("app-check-internal")),Y4(u,a),u);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),hi(vS,ES,e),hi(vS,ES,"esm2020")})();var wS={};const bS="@firebase/database",AS="1.1.2";/**
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
 */let DC="";function W3(n){DC=n}/**
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
 */class Y3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Mn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Au(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Q3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const MC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y3(e)}}catch{}return new Q3},ro=MC("localStorage"),$3=MC("sessionStorage");/**
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
 */const Nl=new ju("@firebase/database"),X3=(function(){let n=1;return function(){return n++}})(),OC=function(n){const e=bN(n),t=new vN;t.update(e);const s=t.digest();return x_.encodeByteArray(s)},Xu=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Xu.apply(null,s):typeof s=="object"?e+=Mn(s):e+=s,e+=" "}return e};let Tu=null,CS=!0;const Z3=function(n,e){me(!0,"Can't turn on custom loggers persistently."),Nl.logLevel=Ke.VERBOSE,Tu=Nl.log.bind(Nl)},Bn=function(...n){if(CS===!0&&(CS=!1,Tu===null&&$3.get("logging_enabled")===!0&&Z3()),Tu){const e=Xu.apply(null,n);Tu(e)}},Zu=function(n){return function(...e){Bn(n,...e)}},f_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Xu(...n);Nl.error(e)},Er=function(...n){const e=`FIREBASE FATAL ERROR: ${Xu(...n)}`;throw Nl.error(e),new Error(e)},Ri=function(...n){const e="FIREBASE WARNING: "+Xu(...n);Nl.warn(e)},J3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ri("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eL=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ul="[MIN_NAME]",yo="[MAX_NAME]",Zl=function(n,e){if(n===e)return 0;if(n===Ul||e===yo)return-1;if(e===Ul||n===yo)return 1;{const t=RS(n),s=RS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},tL=function(n,e){return n===e?0:n<e?-1:1},iu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Mn(e))},jy=function(n){if(typeof n!="object"||n===null)return Mn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Mn(e[s]),t+=":",t+=jy(n[e[s]]);return t+="}",t},PC=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Ki(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const LC=function(n){me(!kC(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,f,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let S="";for(p=0;p<64;p+=8){let A=parseInt(E.substr(p,8),2).toString(16);A.length===1&&(A="0"+A),S=S+A}return S.toLowerCase()},nL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},sL=new RegExp("^-?(0*)\\d{1,10}$"),rL=-2147483648,aL=2147483647,RS=function(n){if(sL.test(n)){const e=Number(n);if(e>=rL&&e<=aL)return e}return null},Ju=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ri("Exception was thrown by user callback.",t),e},Math.floor(0))}},oL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Su=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class lL{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,li(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ri(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cL{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Bn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ri(e)}}class qd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qd.OWNER="owner";/**
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
 */const Uy="5",VC="v",jC="s",UC="r",zC="f",BC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,FC="ls",qC="p",m_="ac",HC="websocket",GC="long_polling";/**
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
 */class KC{constructor(e,t,s,a,l=!1,u="",f=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ro.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ro.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function uL(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function WC(n,e,t){me(typeof e=="string","typeof type must == string"),me(typeof t=="object","typeof params must == object");let s;if(e===HC)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===GC)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uL(n)&&(t.ns=n.namespace);const a=[];return Ki(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
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
 */class hL{constructor(){this.counters_={}}incrementCounter(e,t=1){Sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return iN(this.counters_)}}/**
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
 */const pg={},gg={};function zy(n){const e=n.toString();return pg[e]||(pg[e]=new hL),pg[e]}function dL(n,e){const t=n.toString();return gg[t]||(gg[t]=e()),gg[t]}/**
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
 */class fL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ju(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const IS="start",mL="close",pL="pLPCommand",gL="pRTLPCB",YC="id",QC="pw",$C="ser",_L="cb",yL="seg",vL="ts",EL="d",TL="dframe",XC=1870,ZC=30,SL=XC-ZC,wL=25e3,bL=3e4;class El{constructor(e,t,s,a,l,u,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zu(e),this.stats_=zy(t),this.urlFn=p=>(this.appCheckToken&&(p[m_]=this.appCheckToken),WC(t,GC,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bL)),eL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new By((...l)=>{const[u,f,p,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===IS)this.id=f,this.password=p;else if(u===mL)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[IS]="t",s[$C]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_L]=this.scriptTagHolder.uniqueCallbackIdentifier),s[VC]=Uy,this.transportSessionId&&(s[jC]=this.transportSessionId),this.lastSessionId&&(s[FC]=this.lastSessionId),this.applicationId&&(s[qC]=this.applicationId),this.appCheckToken&&(s[m_]=this.appCheckToken),typeof location<"u"&&location.hostname&&BC.test(location.hostname)&&(s[UC]=zC);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){El.forceAllow_=!0}static forceDisallow(){El.forceDisallow_=!0}static isAvailable(){return El.forceAllow_?!0:!El.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nL()&&!iL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Mn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Nw(t),a=PC(s,SL);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[TL]="t",s[YC]=e,s[QC]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Mn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class By{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=X3(),window[pL+this.uniqueCallbackIdentifier]=e,window[gL+this.uniqueCallbackIdentifier]=t,this.myIFrame=By.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Bn("frame writing exception"),f.stack&&Bn(f.stack),Bn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[YC]=this.myID,e[QC]=this.myPW,e[$C]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ZC+s.length<=XC;){const u=this.pendingSegs.shift();s=s+"&"+yL+a+"="+u.seg+"&"+vL+a+"="+u.ts+"&"+EL+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(wL)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Bn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const AL=16384,CL=45e3;let ff=null;typeof MozWebSocket<"u"?ff=MozWebSocket:typeof WebSocket<"u"&&(ff=WebSocket);class ns{constructor(e,t,s,a,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zu(this.connId),this.stats_=zy(t),this.connURL=ns.connectionURL_(t,u,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[VC]=Uy,typeof location<"u"&&location.hostname&&BC.test(location.hostname)&&(u[UC]=zC),t&&(u[jC]=t),s&&(u[FC]=s),a&&(u[m_]=a),l&&(u[qC]=l),WC(e,HC,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ro.set("previous_websocket_failure",!0);try{let s;dN(),this.mySock=new ff(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ff!==null&&!ns.forceDisallow_}static previouslyFailed(){return ro.isInMemoryStorage||ro.get("previous_websocket_failure")===!0}markConnectionHealthy(){ro.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Au(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(me(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Mn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=PC(t,AL);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ns.responsesRequiredToBeHealthy=2;ns.healthyTimeout=3e4;/**
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
 */class Lu{static get ALL_TRANSPORTS(){return[El,ns]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ns&&ns.isAvailable();let s=t&&!ns.previouslyFailed();if(e.webSocketOnly&&(t||Ri("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ns];else{const a=this.transports_=[];for(const l of Lu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Lu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lu.globalTransportInitialized_=!1;/**
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
 */const RL=6e4,IL=5e3,NL=10*1024,xL=100*1024,_g="t",NS="d",DL="s",xS="r",ML="e",DS="o",MS="a",OS="n",kS="p",OL="h";class kL{constructor(e,t,s,a,l,u,f,p,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zu("c:"+this.id+":"),this.transportManager_=new Lu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Su(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_g in e){const t=e[_g];t===MS?this.upgradeIfSecondaryHealthy_():t===xS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===DS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=iu("t",e),s=iu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:MS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:OS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=iu("t",e),s=iu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=iu(_g,e);if(NS in e){const s=e[NS];if(t===OL){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===OS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===DL?this.onConnectionShutdown_(s):t===xS?this.onReset_(s):t===ML?f_("Server Error: "+s):t===DS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):f_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Uy!==s&&Ri("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Su(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Su(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ro.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class JC{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class e2{constructor(e){this.allowedEvents_=e,this.listeners_={},me(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){me(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class mf extends e2{static getInstance(){return new mf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!M_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return me(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const PS=32,LS=768;class Pt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function bt(){return new Pt("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function va(n){return n.pieces_.length-n.pieceNum_}function Ot(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Pt(n.pieces_,e)}function t2(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function PL(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function n2(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function i2(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Pt(e,0)}function Tn(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Pt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Pt(t,0)}function Ze(n){return n.pieceNum_>=n.pieces_.length}function qi(n,e){const t=et(n),s=et(e);if(t===null)return e;if(t===s)return qi(Ot(n),Ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function s2(n,e){if(va(n)!==va(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ss(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(va(n)>va(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class LL{constructor(e,t){this.errorPrefix_=t,this.parts_=n2(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bf(this.parts_[s]);r2(this)}}function VL(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bf(e),r2(n)}function jL(n){const e=n.parts_.pop();n.byteLength_-=bf(e),n.parts_.length>0&&(n.byteLength_-=1)}function r2(n){if(n.byteLength_>LS)throw new Error(n.errorPrefix_+"has a key path longer than "+LS+" bytes ("+n.byteLength_+").");if(n.parts_.length>PS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+PS+") or object contains a cycle "+to(n))}function to(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Fy extends e2{static getInstance(){return new Fy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return me(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const su=1e3,UL=300*1e3,VS=30*1e3,zL=1.3,BL=3e4,FL="server_kill",jS=3;class mr extends JC{constructor(e,t,s,a,l,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=mr.nextPersistentConnectionId_++,this.log_=Zu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=su,this.maxReconnectDelay_=UL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Mn(l)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new D_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,g=f.s;mr.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Sr(e,"w")){const s=Dl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Ri(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=VS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=_N(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Mn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):f_("Unrecognized action received from server: "+Mn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BL&&(this.reconnectDelay_=su),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+mr.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(S){me(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(S)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,A]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?Bn("getToken() completed but was canceled"):(Bn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=A&&A.token,f=new kL(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,V=>{Ri(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(FL)},l))}catch(S){this.log_("Failed to get token: "+S),u||(this.repoInfo_.nodeAdmin&&Ri(S),p())}}}interrupt(e){Bn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jg(this.interruptReasons_)&&(this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>jy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Pt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){Bn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jS&&(this.reconnectDelay_=VS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Bn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+DC.replace(/\./g,"-")]=1,M_()?e["framework.cordova"]=1:Lw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mf.getInstance().currentlyOnline();return jg(this.interruptReasons_)&&e}}mr.nextPersistentConnectionId_=0;mr.nextConnectionId_=0;/**
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
 */class tt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new tt(e,t)}}/**
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
 */class Kf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new tt(Ul,e),a=new tt(Ul,t);return this.compare(s,a)!==0}minPost(){return tt.MIN}}/**
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
 */let Rd;class a2 extends Kf{static get __EMPTY_NODE(){return Rd}static set __EMPTY_NODE(e){Rd=e}compare(e,t){return Zl(e.name,t.name)}isDefinedOn(e){throw Fl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(yo,Rd)}makePost(e,t){return me(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Rd)}toString(){return".key"}}const xl=new a2;/**
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
 */class Id{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class En{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??En.RED,this.left=a??ui.EMPTY_NODE,this.right=l??ui.EMPTY_NODE}copy(e,t,s,a,l){return new En(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return ui.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ui.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,En.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,En.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}En.RED=!0;En.BLACK=!1;class qL{copy(e,t,s,a,l){return this}insert(e,t,s){return new En(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ui{constructor(e,t=ui.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ui(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,En.BLACK,null,null))}remove(e){return new ui(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,En.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Id(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Id(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Id(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Id(this.root_,null,this.comparator_,!0,e)}}ui.EMPTY_NODE=new qL;/**
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
 */function HL(n,e){return Zl(n.name,e.name)}function qy(n,e){return Zl(n,e)}/**
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
 */let p_;function GL(n){p_=n}const o2=function(n){return typeof n=="number"?"number:"+LC(n):"string:"+n},l2=function(n){if(n.isLeafNode()){const e=n.val();me(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sr(e,".sv"),"Priority must be a string or number.")}else me(n===p_||n.isEmpty(),"priority of unexpected type.");me(n===p_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let US;class yn{static set __childrenNodeConstructor(e){US=e}static get __childrenNodeConstructor(){return US}constructor(e,t=yn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l2(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new yn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:yn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ze(e)?this:et(e)===".priority"?this.priorityNode_:yn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:yn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=et(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(me(s!==".priority"||va(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,yn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+o2(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=LC(this.value_):e+=this.value_,this.lazyHash_=OC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===yn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof yn.__childrenNodeConstructor?-1:(me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=yn.VALUE_TYPE_ORDER.indexOf(t),l=yn.VALUE_TYPE_ORDER.indexOf(s);return me(a>=0,"Unknown leaf type: "+t),me(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}yn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let c2,u2;function KL(n){c2=n}function WL(n){u2=n}class YL extends Kf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Zl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(yo,new yn("[PRIORITY-POST]",u2))}makePost(e,t){const s=c2(e);return new tt(t,new yn("[PRIORITY-POST]",s))}toString(){return".priority"}}const qn=new YL;/**
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
 */const QL=Math.log(2);class $L{constructor(e){const t=l=>parseInt(Math.log(l)/QL,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pf=function(n,e,t,s){n.sort(e);const a=function(p,g){const E=g-p;let S,A;if(E===0)return null;if(E===1)return S=n[p],A=t?t(S):S,new En(A,S.node,En.BLACK,null,null);{const V=parseInt(E/2,10)+p,H=a(p,V),Z=a(V+1,g);return S=n[V],A=t?t(S):S,new En(A,S.node,En.BLACK,H,Z)}},l=function(p){let g=null,E=null,S=n.length;const A=function(H,Z){const Y=S-H,pe=S;S-=H;const ue=a(Y+1,pe),le=n[Y],Ee=t?t(le):le;V(new En(Ee,le.node,Z,null,ue))},V=function(H){g?(g.left=H,g=H):(E=H,g=H)};for(let H=0;H<p.count;++H){const Z=p.nextBitIsOne(),Y=Math.pow(2,p.count-(H+1));Z?A(Y,En.BLACK):(A(Y,En.BLACK),A(Y,En.RED))}return E},u=new $L(n.length),f=l(u);return new ui(s||e,f)};/**
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
 */let yg;const pl={};class ur{static get Default(){return me(pl&&qn,"ChildrenNode.ts has not been loaded"),yg=yg||new ur({".priority":pl},{".priority":qn}),yg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Dl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ui?t:null}hasIndex(e){return Sr(this.indexSet_,e.toString())}addIndex(e,t){me(e!==xl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(tt.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;a?f=pf(s,e.getCompare()):f=pl;const p=e.toString(),g={...this.indexSet_};g[p]=e;const E={...this.indexes_};return E[p]=f,new ur(E,g)}addToIndexes(e,t){const s=Wd(this.indexes_,(a,l)=>{const u=Dl(this.indexSet_,l);if(me(u,"Missing index implementation for "+l),a===pl)if(u.isDefinedOn(e.node)){const f=[],p=t.getIterator(tt.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),pf(f,u.getCompare())}else return pl;else{const f=t.get(e.name);let p=a;return f&&(p=p.remove(new tt(e.name,f))),p.insert(e,e.node)}});return new ur(s,this.indexSet_)}removeFromIndexes(e,t){const s=Wd(this.indexes_,a=>{if(a===pl)return a;{const l=t.get(e.name);return l?a.remove(new tt(e.name,l)):a}});return new ur(s,this.indexSet_)}}/**
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
 */let ru;class ft{static get EMPTY_NODE(){return ru||(ru=new ft(new ui(qy),null,ur.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&l2(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ru}updatePriority(e){return this.children_.isEmpty()?this:new ft(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ru:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(Ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(me(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new tt(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?ru:this.priorityNode_;return new ft(a,u,l)}}updateChild(e,t){const s=et(e);if(s===null)return t;{me(et(e)!==".priority"||va(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(Ot(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(qn,(u,f)=>{t[u]=f.val(e),s++,l&&ft.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+o2(this.getPriority().val())+":"),this.forEachChild(qn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":OC(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new tt(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eh?-1:0}withIndex(e){if(e===xl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ft(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(qn),a=t.getIterator(qn);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===xl?null:this.indexMap_.get(e.toString())}}ft.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XL extends ft{constructor(){super(new ui(qy),ft.EMPTY_NODE,ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ft.EMPTY_NODE}isEmpty(){return!1}}const eh=new XL;Object.defineProperties(tt,{MIN:{value:new tt(Ul,ft.EMPTY_NODE)},MAX:{value:new tt(yo,eh)}});a2.__EMPTY_NODE=ft.EMPTY_NODE;yn.__childrenNodeConstructor=ft;GL(eh);WL(eh);/**
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
 */const ZL=!0;function Fn(n,e=null){if(n===null)return ft.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),me(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new yn(t,Fn(e))}if(!(n instanceof Array)&&ZL){const t=[];let s=!1;if(Ki(n,(u,f)=>{if(u.substring(0,1)!=="."){const p=Fn(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new tt(u,p)))}}),t.length===0)return ft.EMPTY_NODE;const l=pf(t,HL,u=>u.name,qy);if(s){const u=pf(t,qn.getCompare());return new ft(l,Fn(e),new ur({".priority":u},{".priority":qn}))}else return new ft(l,Fn(e),ur.Default)}else{let t=ft.EMPTY_NODE;return Ki(n,(s,a)=>{if(Sr(n,s)&&s.substring(0,1)!=="."){const l=Fn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Fn(e))}}KL(Fn);/**
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
 */class JL extends Kf{constructor(e){super(),this.indexPath_=e,me(!Ze(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Zl(e.name,t.name):l}makePost(e,t){const s=Fn(e),a=ft.EMPTY_NODE.updateChild(this.indexPath_,s);return new tt(t,a)}maxPost(){const e=ft.EMPTY_NODE.updateChild(this.indexPath_,eh);return new tt(yo,e)}toString(){return n2(this.indexPath_,0).join("/")}}/**
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
 */class eV extends Kf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Zl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const s=Fn(e);return new tt(t,s)}toString(){return".value"}}const tV=new eV;/**
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
 */function nV(n){return{type:"value",snapshotNode:n}}function iV(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function sV(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function zS(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rV(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Hy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ul}hasEnd(){return this.endSet_}getIndexEndValue(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qn}copy(){const e=new Hy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function BS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===qn?t="$priority":n.index_===tV?t="$value":n.index_===xl?t="$key":(me(n.index_ instanceof JL,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Mn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Mn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Mn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Mn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Mn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function FS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==qn&&(e.i=n.index_.toString()),e}/**
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
 */class gf extends JC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Zu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=gf.getListenId_(e,s),f={};this.listens_[u]=f;const p=BS(e._queryParams);this.restRequest_(l+".json",p,(g,E)=>{let S=E;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(l,S,!1,s),Dl(this.listens_,u)===f){let A;g?g===401?A="permission_denied":A="rest_error:"+g:A="ok",a(A,null)}})}unlisten(e,t){const s=gf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=BS(e._queryParams),s=e._path.toString(),a=new D_;return this.restRequest_(s+".json",t,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ql(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Au(f.responseText)}catch{Ri("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Ri("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class aV{constructor(){this.rootNode_=ft.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function _f(){return{value:null,children:new Map}}function h2(n,e,t){if(Ze(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=et(e);n.children.has(s)||n.children.set(s,_f());const a=n.children.get(s);e=Ot(e),h2(a,e,t)}}function g_(n,e,t){n.value!==null?t(e,n.value):oV(n,(s,a)=>{const l=new Pt(e.toString()+"/"+s);g_(a,l,t)})}function oV(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class lV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ki(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const qS=10*1e3,cV=30*1e3,uV=300*1e3;class hV{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lV(e);const s=qS+(cV-qS)*Math.random();Su(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ki(e,(a,l)=>{l>0&&Sr(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Su(this.reportStats_.bind(this),Math.floor(Math.random()*2*uV))}}/**
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
 */var Ns;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ns||(Ns={}));function d2(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function f2(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m2(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class yf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ns.ACK_USER_WRITE,this.source=d2()}operationForChild(e){if(Ze(this.path)){if(this.affectedTree.value!=null)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Pt(e));return new yf(bt(),t,this.revert)}}else return me(et(this.path)===e,"operationForChild called for unrelated child."),new yf(Ot(this.path),this.affectedTree,this.revert)}}/**
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
 */class vo{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ns.OVERWRITE}operationForChild(e){return Ze(this.path)?new vo(this.source,bt(),this.snap.getImmediateChild(e)):new vo(this.source,Ot(this.path),this.snap)}}/**
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
 */class Vu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ns.MERGE}operationForChild(e){if(Ze(this.path)){const t=this.children.subtree(new Pt(e));return t.isEmpty()?null:t.value?new vo(this.source,bt(),t.value):new Vu(this.source,bt(),t)}else return me(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vu(this.source,Ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gy{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ze(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function dV(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(rV(u.childName,u.snapshotNode))}),au(n,a,"child_removed",e,s,t),au(n,a,"child_added",e,s,t),au(n,a,"child_moved",l,s,t),au(n,a,"child_changed",e,s,t),au(n,a,"value",e,s,t),a}function au(n,e,t,s,a,l){const u=s.filter(f=>f.type===t);u.sort((f,p)=>mV(n,f,p)),u.forEach(f=>{const p=fV(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,n.query_))})})}function fV(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function mV(n,e,t){if(e.childName==null||t.childName==null)throw Fl("Should only compare child_ events.");const s=new tt(e.childName,e.snapshotNode),a=new tt(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
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
 */function p2(n,e){return{eventCache:n,serverCache:e}}function wu(n,e,t,s){return p2(new Gy(e,t,s),n.serverCache)}function g2(n,e,t,s){return p2(n.eventCache,new Gy(e,t,s))}function __(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Eo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let vg;const pV=()=>(vg||(vg=new ui(tL)),vg);class Mt{static fromObject(e){let t=new Mt(null);return Ki(e,(s,a)=>{t=t.set(new Pt(s),a)}),t}constructor(e,t=pV()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:bt(),value:this.value};if(Ze(e))return null;{const s=et(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(Ot(e),t);return l!=null?{path:Tn(new Pt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ze(e))return this;{const t=et(e),s=this.children.get(t);return s!==null?s.subtree(Ot(e)):new Mt(null)}}set(e,t){if(Ze(e))return new Mt(t,this.children);{const s=et(e),l=(this.children.get(s)||new Mt(null)).set(Ot(e),t),u=this.children.insert(s,l);return new Mt(this.value,u)}}remove(e){if(Ze(e))return this.children.isEmpty()?new Mt(null):new Mt(null,this.children);{const t=et(e),s=this.children.get(t);if(s){const a=s.remove(Ot(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new Mt(null):new Mt(this.value,l)}else return this}}get(e){if(Ze(e))return this.value;{const t=et(e),s=this.children.get(t);return s?s.get(Ot(e)):null}}setTree(e,t){if(Ze(e))return t;{const s=et(e),l=(this.children.get(s)||new Mt(null)).setTree(Ot(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new Mt(this.value,u)}}fold(e){return this.fold_(bt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Tn(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,bt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ze(e))return null;{const l=et(e),u=this.children.get(l);return u?u.findOnPath_(Ot(e),Tn(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,bt(),t)}foreachOnPath_(e,t,s){if(Ze(e))return this;{this.value&&s(t,this.value);const a=et(e),l=this.children.get(a);return l?l.foreachOnPath_(Ot(e),Tn(t,a),s):new Mt(null)}}foreach(e){this.foreach_(bt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Tn(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class os{constructor(e){this.writeTree_=e}static empty(){return new os(new Mt(null))}}function bu(n,e,t){if(Ze(e))return new os(new Mt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=qi(a,e);return l=l.updateChild(u,t),new os(n.writeTree_.set(a,l))}else{const a=new Mt(t),l=n.writeTree_.setTree(e,a);return new os(l)}}}function HS(n,e,t){let s=n;return Ki(t,(a,l)=>{s=bu(s,Tn(e,a),l)}),s}function GS(n,e){if(Ze(e))return os.empty();{const t=n.writeTree_.setTree(e,new Mt(null));return new os(t)}}function y_(n,e){return Ro(n,e)!=null}function Ro(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(qi(t.path,e)):null}function KS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(qn,(s,a)=>{e.push(new tt(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new tt(s,a.value))}),e}function da(n,e){if(Ze(e))return n;{const t=Ro(n,e);return t!=null?new os(new Mt(t)):new os(n.writeTree_.subtree(e))}}function v_(n){return n.writeTree_.isEmpty()}function zl(n,e){return _2(bt(),n.writeTree_,e)}function _2(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(me(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=_2(Tn(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Tn(n,".priority"),s)),t}}/**
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
 */function y2(n,e){return w2(e,n)}function gV(n,e,t,s,a){me(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=bu(n.visibleWrites,e,t)),n.lastWriteId=s}function _V(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function yV(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);me(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&vV(f,s.path)?a=!1:ss(s.path,f.path)&&(l=!0)),u--}if(a){if(l)return EV(n),!0;if(s.snap)n.visibleWrites=GS(n.visibleWrites,s.path);else{const f=s.children;Ki(f,p=>{n.visibleWrites=GS(n.visibleWrites,Tn(s.path,p))})}return!0}else return!1}function vV(n,e){if(n.snap)return ss(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ss(Tn(n.path,t),e))return!0;return!1}function EV(n){n.visibleWrites=v2(n.allWrites,TV,bt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TV(n){return n.visible}function v2(n,e,t){let s=os.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let f;if(l.snap)ss(t,u)?(f=qi(t,u),s=bu(s,f,l.snap)):ss(u,t)&&(f=qi(u,t),s=bu(s,bt(),l.snap.getChild(f)));else if(l.children){if(ss(t,u))f=qi(t,u),s=HS(s,f,l.children);else if(ss(u,t))if(f=qi(u,t),Ze(f))s=HS(s,bt(),l.children);else{const p=Dl(l.children,et(f));if(p){const g=p.getChild(Ot(f));s=bu(s,bt(),g)}}}else throw Fl("WriteRecord should have .snap or .children")}}return s}function E2(n,e,t,s,a){if(!s&&!a){const l=Ro(n.visibleWrites,e);if(l!=null)return l;{const u=da(n.visibleWrites,e);if(v_(u))return t;if(t==null&&!y_(u,bt()))return null;{const f=t||ft.EMPTY_NODE;return zl(u,f)}}}else{const l=da(n.visibleWrites,e);if(!a&&v_(l))return t;if(!a&&t==null&&!y_(l,bt()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ss(g.path,e)||ss(e,g.path))},f=v2(n.allWrites,u,e),p=t||ft.EMPTY_NODE;return zl(f,p)}}}function SV(n,e,t){let s=ft.EMPTY_NODE;const a=Ro(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(qn,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=da(n.visibleWrites,e);return t.forEachChild(qn,(u,f)=>{const p=zl(da(l,new Pt(u)),f);s=s.updateImmediateChild(u,p)}),KS(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=da(n.visibleWrites,e);return KS(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function wV(n,e,t,s,a){me(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Tn(e,t);if(y_(n.visibleWrites,l))return null;{const u=da(n.visibleWrites,l);return v_(u)?a.getChild(t):zl(u,a.getChild(t))}}function bV(n,e,t,s){const a=Tn(e,t),l=Ro(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=da(n.visibleWrites,a);return zl(u,s.getNode().getImmediateChild(t))}else return null}function AV(n,e){return Ro(n.visibleWrites,e)}function CV(n,e,t,s,a,l,u){let f;const p=da(n.visibleWrites,e),g=Ro(p,bt());if(g!=null)f=g;else if(t!=null)f=zl(p,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const E=[],S=u.getCompare(),A=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let V=A.getNext();for(;V&&E.length<a;)S(V,s)!==0&&E.push(V),V=A.getNext();return E}else return[]}function RV(){return{visibleWrites:os.empty(),allWrites:[],lastWriteId:-1}}function E_(n,e,t,s){return E2(n.writeTree,n.treePath,e,t,s)}function T2(n,e){return SV(n.writeTree,n.treePath,e)}function WS(n,e,t,s){return wV(n.writeTree,n.treePath,e,t,s)}function vf(n,e){return AV(n.writeTree,Tn(n.treePath,e))}function IV(n,e,t,s,a,l){return CV(n.writeTree,n.treePath,e,t,s,a,l)}function Ky(n,e,t){return bV(n.writeTree,n.treePath,e,t)}function S2(n,e){return w2(Tn(n.treePath,e),n.writeTree)}function w2(n,e){return{treePath:n,writeTree:e}}/**
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
 */class NV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;me(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),me(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,zS(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,sV(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,iV(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,zS(s,e.snapshotNode,a.oldSnap));else throw Fl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class xV{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const b2=new xV;class Wy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ky(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Eo(this.viewCache_),l=IV(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function DV(n,e){me(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),me(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function MV(n,e,t,s,a){const l=new NV;let u,f;if(t.type===Ns.OVERWRITE){const g=t;g.source.fromUser?u=T_(n,e,g.path,g.snap,s,a,l):(me(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ze(g.path),u=Ef(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===Ns.MERGE){const g=t;g.source.fromUser?u=kV(n,e,g.path,g.children,s,a,l):(me(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=S_(n,e,g.path,g.children,s,a,f,l))}else if(t.type===Ns.ACK_USER_WRITE){const g=t;g.revert?u=VV(n,e,g.path,s,a,l):u=PV(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Ns.LISTEN_COMPLETE)u=LV(n,e,t.path,s,l);else throw Fl("Unknown operation type: "+t.type);const p=l.getChanges();return OV(e,u,p),{viewCache:u,changes:p}}function OV(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=__(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(nV(__(e)))}}function A2(n,e,t,s,a,l){const u=e.eventCache;if(vf(s,t)!=null)return e;{let f,p;if(Ze(t))if(me(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Eo(e),E=g instanceof ft?g:ft.EMPTY_NODE,S=T2(s,E);f=n.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const g=E_(s,Eo(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=et(t);if(g===".priority"){me(va(t)===1,"Can't have a priority with additional path components");const E=u.getNode();p=e.serverCache.getNode();const S=WS(s,t,E,p);S!=null?f=n.filter.updatePriority(E,S):f=u.getNode()}else{const E=Ot(t);let S;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const A=WS(s,t,u.getNode(),p);A!=null?S=u.getNode().getImmediateChild(g).updateChild(E,A):S=u.getNode().getImmediateChild(g)}else S=Ky(s,g,e.serverCache);S!=null?f=n.filter.updateChild(u.getNode(),g,S,E,a,l):f=u.getNode()}}return wu(e,f,u.isFullyInitialized()||Ze(t),n.filter.filtersNodes())}}function Ef(n,e,t,s,a,l,u,f){const p=e.serverCache;let g;const E=u?n.filter:n.filter.getIndexedFilter();if(Ze(t))g=E.updateFullNode(p.getNode(),s,null);else if(E.filtersNodes()&&!p.isFiltered()){const V=p.getNode().updateChild(t,s);g=E.updateFullNode(p.getNode(),V,null)}else{const V=et(t);if(!p.isCompleteForPath(t)&&va(t)>1)return e;const H=Ot(t),Y=p.getNode().getImmediateChild(V).updateChild(H,s);V===".priority"?g=E.updatePriority(p.getNode(),Y):g=E.updateChild(p.getNode(),V,Y,H,b2,null)}const S=g2(e,g,p.isFullyInitialized()||Ze(t),E.filtersNodes()),A=new Wy(a,S,l);return A2(n,S,t,a,A,f)}function T_(n,e,t,s,a,l,u){const f=e.eventCache;let p,g;const E=new Wy(a,e,l);if(Ze(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,u),p=wu(e,g,!0,n.filter.filtersNodes());else{const S=et(t);if(S===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=wu(e,g,f.isFullyInitialized(),f.isFiltered());else{const A=Ot(t),V=f.getNode().getImmediateChild(S);let H;if(Ze(A))H=s;else{const Z=E.getCompleteChild(S);Z!=null?t2(A)===".priority"&&Z.getChild(i2(A)).isEmpty()?H=Z:H=Z.updateChild(A,s):H=ft.EMPTY_NODE}if(V.equals(H))p=e;else{const Z=n.filter.updateChild(f.getNode(),S,H,A,E,u);p=wu(e,Z,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function YS(n,e){return n.eventCache.isCompleteForChild(e)}function kV(n,e,t,s,a,l,u){let f=e;return s.foreach((p,g)=>{const E=Tn(t,p);YS(e,et(E))&&(f=T_(n,f,E,g,a,l,u))}),s.foreach((p,g)=>{const E=Tn(t,p);YS(e,et(E))||(f=T_(n,f,E,g,a,l,u))}),f}function QS(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function S_(n,e,t,s,a,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ze(t)?g=s:g=new Mt(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((S,A)=>{if(E.hasChild(S)){const V=e.serverCache.getNode().getImmediateChild(S),H=QS(n,V,A);p=Ef(n,p,new Pt(S),H,a,l,u,f)}}),g.children.inorderTraversal((S,A)=>{const V=!e.serverCache.isCompleteForChild(S)&&A.value===null;if(!E.hasChild(S)&&!V){const H=e.serverCache.getNode().getImmediateChild(S),Z=QS(n,H,A);p=Ef(n,p,new Pt(S),Z,a,l,u,f)}}),p}function PV(n,e,t,s,a,l,u){if(vf(a,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ze(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ef(n,e,t,p.getNode().getChild(t),a,l,f,u);if(Ze(t)){let g=new Mt(null);return p.getNode().forEachChild(xl,(E,S)=>{g=g.set(new Pt(E),S)}),S_(n,e,t,g,a,l,f,u)}else return e}else{let g=new Mt(null);return s.foreach((E,S)=>{const A=Tn(t,E);p.isCompleteForPath(A)&&(g=g.set(E,p.getNode().getChild(A)))}),S_(n,e,t,g,a,l,f,u)}}function LV(n,e,t,s,a){const l=e.serverCache,u=g2(e,l.getNode(),l.isFullyInitialized()||Ze(t),l.isFiltered());return A2(n,u,t,s,b2,a)}function VV(n,e,t,s,a,l){let u;if(vf(s,t)!=null)return e;{const f=new Wy(s,e,a),p=e.eventCache.getNode();let g;if(Ze(t)||et(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=E_(s,Eo(e));else{const S=e.serverCache.getNode();me(S instanceof ft,"serverChildren would be complete if leaf node"),E=T2(s,S)}E=E,g=n.filter.updateFullNode(p,E,l)}else{const E=et(t);let S=Ky(s,E,e.serverCache);S==null&&e.serverCache.isCompleteForChild(E)&&(S=p.getImmediateChild(E)),S!=null?g=n.filter.updateChild(p,E,S,Ot(t),f,l):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(p,E,ft.EMPTY_NODE,Ot(t),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=E_(s,Eo(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||vf(s,bt())!=null,wu(e,g,u,n.filter.filtersNodes())}}function jV(n,e){const t=Eo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ze(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function $S(n,e,t,s){e.type===Ns.MERGE&&e.source.queryId!==null&&(me(Eo(n.viewCache_),"We should always have a full cache before handling merges"),me(__(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=MV(n.processor_,a,e,t,s);return DV(n.processor_,l.viewCache),me(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,UV(n,l.changes,l.viewCache.eventCache.getNode())}function UV(n,e,t,s){const a=n.eventRegistrations_;return dV(n.eventGenerator_,e,t,a)}/**
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
 */let XS;function zV(n){me(!XS,"__referenceConstructor has already been defined"),XS=n}function Yy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return me(l!=null,"SyncTree gave us an op for an invalid query."),$S(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat($S(u,e,t,s));return l}}function Qy(n,e){let t=null;for(const s of n.views.values())t=t||jV(s,e);return t}/**
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
 */let ZS;function BV(n){me(!ZS,"__referenceConstructor has already been defined"),ZS=n}class JS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Mt(null),this.pendingWriteTree_=RV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FV(n,e,t,s,a){return gV(n.pendingWriteTree_,e,t,s,a),a?Yf(n,new vo(d2(),e,t)):[]}function Tl(n,e,t=!1){const s=_V(n.pendingWriteTree_,e);if(yV(n.pendingWriteTree_,e)){let l=new Mt(null);return s.snap!=null?l=l.set(bt(),!0):Ki(s.children,u=>{l=l.set(new Pt(u),!0)}),Yf(n,new yf(s.path,l,t))}else return[]}function Wf(n,e,t){return Yf(n,new vo(f2(),e,t))}function qV(n,e,t){const s=Mt.fromObject(t);return Yf(n,new Vu(f2(),e,s))}function HV(n,e,t,s){const a=N2(n,s);if(a!=null){const l=x2(a),u=l.path,f=l.queryId,p=qi(u,e),g=new vo(m2(f),p,t);return D2(n,u,g)}else return[]}function GV(n,e,t,s){const a=N2(n,s);if(a){const l=x2(a),u=l.path,f=l.queryId,p=qi(u,e),g=Mt.fromObject(t),E=new Vu(m2(f),p,g);return D2(n,u,E)}else return[]}function C2(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,f)=>{const p=qi(u,e),g=Qy(f,p);if(g)return g});return E2(a,e,l,t,!0)}function Yf(n,e){return R2(e,n.syncPointTree_,null,y2(n.pendingWriteTree_,bt()))}function R2(n,e,t,s){if(Ze(n.path))return I2(n,e,t,s);{const a=e.get(bt());t==null&&a!=null&&(t=Qy(a,bt()));let l=[];const u=et(n.path),f=n.operationForChild(u),p=e.children.get(u);if(p&&f){const g=t?t.getImmediateChild(u):null,E=S2(s,u);l=l.concat(R2(f,p,g,E))}return a&&(l=l.concat(Yy(a,n,s,t))),l}}function I2(n,e,t,s){const a=e.get(bt());t==null&&a!=null&&(t=Qy(a,bt()));let l=[];return e.children.inorderTraversal((u,f)=>{const p=t?t.getImmediateChild(u):null,g=S2(s,u),E=n.operationForChild(u);E&&(l=l.concat(I2(E,f,p,g)))}),a&&(l=l.concat(Yy(a,n,s,t))),l}function N2(n,e){return n.tagToQueryMap.get(e)}function x2(n){const e=n.indexOf("$");return me(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Pt(n.substr(0,e))}}function D2(n,e,t){const s=n.syncPointTree_.get(e);me(s,"Missing sync point for query tag that we're tracking");const a=y2(n.pendingWriteTree_,e);return Yy(s,t,a,null)}/**
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
 */class $y{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $y(t)}node(){return this.node_}}class Xy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Tn(this.path_,e);return new Xy(this.syncTree_,t)}node(){return C2(this.syncTree_,this.path_)}}const KV=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ew=function(n,e,t){if(!n||typeof n!="object")return n;if(me(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return WV(n[".sv"],e,t);if(typeof n[".sv"]=="object")return YV(n[".sv"],e);me(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},WV=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:me(!1,"Unexpected server value: "+n)}},YV=function(n,e,t){n.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&me(!1,"Unexpected increment value: "+s);const a=e.node();if(me(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},QV=function(n,e,t,s){return Zy(e,new Xy(t,n),s)},$V=function(n,e,t){return Zy(n,new $y(e),t)};function Zy(n,e,t){const s=n.getPriority().val(),a=ew(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,f=ew(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new yn(f,Fn(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new yn(a))),u.forEachChild(qn,(f,p)=>{const g=Zy(p,e.getImmediateChild(f),t);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class Jy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ev(n,e){let t=e instanceof Pt?e:new Pt(e),s=n,a=et(t);for(;a!==null;){const l=Dl(s.node.children,a)||{children:{},childCount:0};s=new Jy(a,s,l),t=Ot(t),a=et(t)}return s}function Jl(n){return n.node.value}function M2(n,e){n.node.value=e,w_(n)}function O2(n){return n.node.childCount>0}function XV(n){return Jl(n)===void 0&&!O2(n)}function Qf(n,e){Ki(n.node.children,(t,s)=>{e(new Jy(t,n,s))})}function k2(n,e,t,s){t&&e(n),Qf(n,a=>{k2(a,e,!0)})}function ZV(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function th(n){return new Pt(n.parent===null?n.name:th(n.parent)+"/"+n.name)}function w_(n){n.parent!==null&&JV(n.parent,n.name,n)}function JV(n,e,t){const s=XV(t),a=Sr(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,w_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,w_(n))}/**
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
 */const e5=/[\[\].#$\/\u0000-\u001F\u007F]/,t5=/[\[\].#$\u0000-\u001F\u007F]/,Eg=10*1024*1024,P2=function(n){return typeof n=="string"&&n.length!==0&&!e5.test(n)},n5=function(n){return typeof n=="string"&&n.length!==0&&!t5.test(n)},i5=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),n5(n)},L2=function(n,e,t){const s=t instanceof Pt?new LL(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+to(s));if(typeof e=="function")throw new Error(n+"contains a function "+to(s)+" with contents = "+e.toString());if(kC(e))throw new Error(n+"contains "+e.toString()+" "+to(s));if(typeof e=="string"&&e.length>Eg/3&&bf(e)>Eg)throw new Error(n+"contains a string greater than "+Eg+" utf8 bytes "+to(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Ki(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!P2(u)))throw new Error(n+" contains an invalid key ("+u+") "+to(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VL(s,u),L2(n,f,s),jL(s)}),a&&l)throw new Error(n+' contains ".value" child '+to(s)+" in addition to actual children.")}},s5=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!P2(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!i5(t))throw new Error(wN(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class r5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function a5(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!s2(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Io(n,e,t){a5(n,t),o5(n,s=>ss(s,e)||ss(e,s))}function o5(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(l5(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function l5(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Tu&&Bn("event: "+t.toString()),Ju(s)}}}/**
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
 */const c5="repo_interrupt",u5=25;class h5{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_f(),this.transactionQueueTree_=new Jy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function d5(n,e,t){if(n.stats_=zy(n.repoInfo_),n.forceRestClient_||oL())n.server_=new gf(n.repoInfo_,(s,a,l,u)=>{tw(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>nw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Mn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new mr(n.repoInfo_,e,(s,a,l,u)=>{tw(n,s,a,l,u)},s=>{nw(n,s)},s=>{m5(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=dL(n.repoInfo_,()=>new hV(n.stats_,n.server_)),n.infoData_=new aV,n.infoSyncTree_=new JS({startListening:(s,a,l,u)=>{let f=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(f=Wf(n.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),tv(n,"connected",!1),n.serverSyncTree_=new JS({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(f,p)=>{const g=u(f,p);Io(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function f5(n){const t=n.infoData_.getNode(new Pt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function V2(n){return KV({timestamp:f5(n)})}function tw(n,e,t,s,a){n.dataUpdateCount++;const l=new Pt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const p=Wd(t,g=>Fn(g));u=GV(n.serverSyncTree_,l,p,a)}else{const p=Fn(t);u=HV(n.serverSyncTree_,l,p,a)}else if(s){const p=Wd(t,g=>Fn(g));u=qV(n.serverSyncTree_,l,p)}else{const p=Fn(t);u=Wf(n.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=iv(n,l)),Io(n.eventQueue_,f,u)}function nw(n,e){tv(n,"connected",e),e===!1&&g5(n)}function m5(n,e){Ki(e,(t,s)=>{tv(n,t,s)})}function tv(n,e,t){const s=new Pt("/.info/"+e),a=Fn(t);n.infoData_.updateSnapshot(s,a);const l=Wf(n.infoSyncTree_,s,a);Io(n.eventQueue_,s,l)}function p5(n){return n.nextWriteId_++}function g5(n){j2(n,"onDisconnectEvents");const e=V2(n),t=_f();g_(n.onDisconnect_,bt(),(a,l)=>{const u=QV(a,l,n.serverSyncTree_,e);h2(t,a,u)});let s=[];g_(t,bt(),(a,l)=>{s=s.concat(Wf(n.serverSyncTree_,a,l));const u=E5(n,a);iv(n,u)}),n.onDisconnect_=_f(),Io(n.eventQueue_,bt(),s)}function _5(n){n.persistentConnection_&&n.persistentConnection_.interrupt(c5)}function j2(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Bn(t,...e)}function U2(n,e,t){return C2(n.serverSyncTree_,e,t)||ft.EMPTY_NODE}function nv(n,e=n.transactionQueueTree_){if(e||$f(n,e),Jl(e)){const t=B2(n,e);me(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&y5(n,th(e),t)}else O2(e)&&Qf(e,t=>{nv(n,t)})}function y5(n,e,t){const s=t.map(g=>g.currentWriteId),a=U2(n,e,s);let l=a;const u=a.hash();for(let g=0;g<t.length;g++){const E=t[g];me(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const S=qi(e,E.path);l=l.updateChild(S,E.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;n.server_.put(p.toString(),f,g=>{j2(n,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const S=[];for(let A=0;A<t.length;A++)t[A].status=2,E=E.concat(Tl(n.serverSyncTree_,t[A].currentWriteId)),t[A].onComplete&&S.push(()=>t[A].onComplete(null,!0,t[A].currentOutputSnapshotResolved)),t[A].unwatcher();$f(n,ev(n.transactionQueueTree_,e)),nv(n,n.transactionQueueTree_),Io(n.eventQueue_,e,E);for(let A=0;A<S.length;A++)Ju(S[A])}else{if(g==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{Ri("transaction at "+p.toString()+" failed: "+g);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=g}iv(n,e)}},u)}function iv(n,e){const t=z2(n,e),s=th(t),a=B2(n,t);return v5(n,a,s),s}function v5(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=qi(t,p.path);let E=!1,S;if(me(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,S=p.abortReason,a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=u5)E=!0,S="maxretry",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else{const A=U2(n,p.path,u);p.currentInputSnapshot=A;const V=e[f].update(A.val());if(V!==void 0){L2("transaction failed: Data returned ",V,p.path);let H=Fn(V);typeof V=="object"&&V!=null&&Sr(V,".priority")||(H=H.updatePriority(A.getPriority()));const Y=p.currentWriteId,pe=V2(n),ue=$V(H,A,pe);p.currentOutputSnapshotRaw=H,p.currentOutputSnapshotResolved=ue,p.currentWriteId=p5(n),u.splice(u.indexOf(Y),1),a=a.concat(FV(n.serverSyncTree_,p.path,ue,p.currentWriteId,p.applyLocally)),a=a.concat(Tl(n.serverSyncTree_,Y,!0))}else E=!0,S="nodata",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0))}Io(n.eventQueue_,t,a),a=[],E&&(e[f].status=2,(function(A){setTimeout(A,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(S==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(S),!1,null))))}$f(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Ju(s[f]);nv(n,n.transactionQueueTree_)}function z2(n,e){let t,s=n.transactionQueueTree_;for(t=et(e);t!==null&&Jl(s)===void 0;)s=ev(s,t),e=Ot(e),t=et(e);return s}function B2(n,e){const t=[];return F2(n,e,t),t.sort((s,a)=>s.order-a.order),t}function F2(n,e,t){const s=Jl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Qf(e,a=>{F2(n,a,t)})}function $f(n,e){const t=Jl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,M2(e,t.length>0?t:void 0)}Qf(e,s=>{$f(n,s)})}function E5(n,e){const t=th(z2(n,e)),s=ev(n.transactionQueueTree_,e);return ZV(s,a=>{Tg(n,a)}),Tg(n,s),k2(s,a=>{Tg(n,a)}),t}function Tg(n,e){const t=Jl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(me(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(me(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Tl(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?M2(e,void 0):t.length=l+1,Io(n.eventQueue_,th(e),a);for(let u=0;u<s.length;u++)Ju(s[u])}}/**
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
 */function T5(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function S5(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ri(`Invalid query segment '${t}' in query '${n}'`)}return e}const iw=function(n,e){const t=w5(n),s=t.namespace;t.domain==="firebase.com"&&Er(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||J3();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new KC(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Pt(t.pathString)}},w5=function(n){let e="",t="",s="",a="",l="",u=!0,f="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(E,S)),E<S&&(a=T5(n.substring(E,S)));const A=S5(n.substring(Math.min(n.length,S)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const V=e.slice(0,g);if(V.toLowerCase()==="localhost")t="localhost";else if(V.split(".").length<=2)t=V;else{const H=e.indexOf(".");s=e.substring(0,H).toLowerCase(),t=e.substring(H+1),l=s}"ns"in A&&(l=A.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:u,scheme:f,pathString:a,namespace:l}};/**
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
 */class sv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ze(this._path)?null:t2(this._path)}get ref(){return new ec(this._repo,this._path)}get _queryIdentifier(){const e=FS(this._queryParams),t=jy(e);return t==="{}"?"default":t}get _queryObject(){return FS(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof sv))return!1;const t=this._repo===e._repo,s=s2(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+PL(this._path)}}class ec extends sv{constructor(e,t){super(e,t,new Hy,!1)}get parent(){const e=i2(this._path);return e===null?null:new ec(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}zV(ec);BV(ec);/**
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
 */const b5="FIREBASE_DATABASE_EMULATOR_HOST",b_={};let A5=!1;function C5(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=So(l);n.repoInfo_=new KC(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function R5(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=iw(l,a),f=u.repoInfo,p;typeof process<"u"&&wS&&(p=wS[b5]),p?(l=`http://${p}?ns=${f.namespace}`,u=iw(l,a),f=u.repoInfo):u.repoInfo.secure;const g=new cL(n.name,n.options,e);s5("Invalid Firebase Database URL",u),Ze(u.path)||Er("Database URL must point to the root of a Firebase Database (not including a child path).");const E=N5(f,n,g,new lL(n,t));return new x5(E,n)}function I5(n,e){const t=b_[e];(!t||t[n.key]!==n)&&Er(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_5(n),delete t[n.key]}function N5(n,e,t,s){let a=b_[e.name];a||(a={},b_[e.name]=a);let l=a[n.toURLString()];return l&&Er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new h5(n,A5,t,s),a[n.toURLString()]=l,l}class x5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(d5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ec(this._repo,bt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(I5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Er("Cannot call "+e+" on a deleted database.")}}function D5(n=Uu(),e){const t=Ea(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Mw("database");s&&M5(t,...s)}return t}function M5(n,e,t,s={}){n=Nt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Ps(s,l.repoInfo_.emulatorOptions))return;Er("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Er('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new qd(qd.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Pw(s.mockUserToken,n.app.options.projectId);u=new qd(f)}So(e)&&L_(e),C5(l,a,s,u)}/**
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
 */function O5(n){W3(wo),ls(new Hi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return R5(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),hi(bS,AS,n),hi(bS,AS,"esm2020")}mr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};mr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};O5();const k5={apiKey:"AIzaSyA1SSHyqPe0qUodvjLEsLof0mUN-Z70Hqc",authDomain:"vocalsalvosporcristo-70e5f.firebaseapp.com",databaseURL:"https://vocalsalvosporcristo-70e5f-default-rtdb.firebaseio.com",projectId:"vocalsalvosporcristo-70e5f",storageBucket:"vocalsalvosporcristo-70e5f.firebasestorage.app",messagingSenderId:"867220919903",appId:"1:867220919903:web:b769416ea3d76bb508adea",measurementId:"G-MPT7K3FKVL"},Xf=Cx().length?Uu():Fw(k5),Dn=JM(Xf),Us=N3(Xf);D5(Xf);zD(Dn,pb).catch(()=>{});typeof window>"u"||["localhost","127.0.0.1"].includes(window.location.hostname)?Promise.resolve(null):T4().then(n=>n?v4(Xf):null).catch(()=>null);const sw="admin",rw="admin@vocalsalvosporcristo.app",q2="admin",H2="admin123",P5=["Maestro","Secretário","Vice-Secretário"],L5=["Desenvolvedor"],Zf=["Adicionar músicas","Adicionar avisos","Adicionar datas de ensaios","Adicionar documentos e partituras","Cadastrar membros","Postar avisos","Alterar dados","Mexer na agenda","Comentar"],rv=["Ver músicas","Receber avisos, ensaios e documentos","Notificar atraso ou imprevisto","Solicitar alteração de dado","Comentar em agenda e avisos"],V5=Array.from(new Set([...Zf,...rv]));function Tr(n){return n==="administration"||n==="direction"?n:"member"}function A_(n){return n==="member"?rv:Zf}function hr(n,e){if(Array.isArray(n)){const t=n.filter(s=>typeof s=="string"&&s.trim().length>0);if(t.length>0)return Array.from(new Set(t))}return[...A_(Tr(e))]}const ou=[{id:"perfil",title:"Sua identidade no ministério",description:"Colete os dados principais para iniciar o cadastro com clareza e segurança."},{id:"localizacao",title:"Logística e deslocamento",description:"Organize ensaios, escalas e comunicação com base na localização do membro."},{id:"voz",title:"Perfil vocal e disponibilidade",description:"Finalize o cadastro com informações que ajudam a montar escalas melhores."}],Sg={loginEmail:"",loginPassword:"",name:"",phone:"",email:"",password:"",confirmPassword:"",cep:"",neighborhood:"",city:"",street:"",houseNumber:"",maritalStatus:"",gender:"",vocalRange:"",availability:"Terças e sábados"},j5=320,U5=7e5;function z5(n){return!!(n&&(n.startsWith("https://")||n.startsWith("http://")))}async function G2(n,e,t){const s={displayName:e};z5(t)&&(s.photoURL=t);try{await VD(n,s)}catch(a){console.warn("Falha ao sincronizar o perfil no Firebase Auth.",a)}}function av(n){return n.replace(/\D/g,"")}function B5(n){return{uid:n.uid,name:n.name,phone:n.phone,phoneNormalized:n.phoneNormalized,avatarDataUrl:n.avatarDataUrl,vocalRange:n.vocalRange,leadershipRole:n.leadershipRole||"",accountLevel:n.accountLevel||"member",availability:n.availability,updatedAt:Vs()}}async function tc(n){await Gf(Aa(Us,"memberDirectory",n.uid),B5(n),{merge:!0})}async function F5(n){await tc(n)}async function K2(){const n=await $2(),e=await Promise.allSettled(n.map(a=>tc(a))),t=e.filter(a=>a.status==="fulfilled").length,s=e.length-t;return{total:n.length,synced:t,failed:s}}function q5(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{e(String(s.result||""))},s.onerror=()=>{t(new Error("Não foi possível ler a imagem selecionada."))},s.readAsDataURL(n)})}function H5(n){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("Não foi possível processar a imagem do perfil.")),s.src=n})}async function G5(n){const e=await q5(n);return W2(e)}async function W2(n){const e=await H5(n),t=Math.min(1,j5/Math.max(e.width,e.height)),s=Math.max(1,Math.round(e.width*t)),a=Math.max(1,Math.round(e.height*t)),l=document.createElement("canvas");l.width=s,l.height=a;const u=l.getContext("2d");if(!u)throw new Error("Não foi possível preparar a foto do perfil.");u.drawImage(e,0,0,s,a);const f=l.toDataURL("image/jpeg",.78);if(f.length>U5)throw new Error("A foto ainda ficou grande para salvar. Use uma imagem menor.");return f}async function Y2(n){return n?typeof n=="string"?n.trim()?n.startsWith("http://")||n.startsWith("https://")?n:W2(n):"":G5(n):""}async function K5(n,e,t){const s=Aa(Us,"members",n.uid),a=await Xl(s),l=a.exists()?a.data():null,u=Tr(l==null?void 0:l.accountLevel),f=hr(l==null?void 0:l.permissions,u);let p=(l==null?void 0:l.avatarDataUrl)||n.photoURL||"";t&&(p=await Y2(t));const g={uid:n.uid,email:(n.email||e.email).trim().toLowerCase(),name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:av(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),avatarDataUrl:p,accountLevel:u,leadershipRole:(l==null?void 0:l.leadershipRole)||"",permissions:f,createdAt:a.exists()?a.data().createdAt:Vs(),updatedAt:Vs()};return await Gf(s,g,{merge:!0}),await tc(g),await G2(n,g.name,p),{...g,createdAt:void 0,updatedAt:void 0}}async function Q2(n){const e=await Xl(Aa(Us,"members",n));return e.exists()?e.data():null}async function aw(n){const e=Aa(Us,"members",n.uid),t=await Xl(e),s=t.exists()?t.data():null,a={uid:n.uid,email:(n.email||"").trim().toLowerCase(),name:(s==null?void 0:s.name)||n.displayName||"Administrador do Vocal",phone:(s==null?void 0:s.phone)||"",phoneNormalized:(s==null?void 0:s.phoneNormalized)||"",cep:(s==null?void 0:s.cep)||"",neighborhood:(s==null?void 0:s.neighborhood)||"",city:(s==null?void 0:s.city)||"",street:(s==null?void 0:s.street)||"",houseNumber:(s==null?void 0:s.houseNumber)||"",maritalStatus:(s==null?void 0:s.maritalStatus)||"",gender:(s==null?void 0:s.gender)||"Outro",vocalRange:(s==null?void 0:s.vocalRange)||"",availability:(s==null?void 0:s.availability)||"Disponibilidade administrativa",avatarDataUrl:(s==null?void 0:s.avatarDataUrl)||n.photoURL||"",accountLevel:"administration",leadershipRole:(s==null?void 0:s.leadershipRole)||"",permissions:hr((s==null?void 0:s.permissions)||Zf,"administration"),createdAt:t.exists()?t.data().createdAt:Vs(),updatedAt:Vs()};return await Gf(e,a,{merge:!0}),await tc(a),{...a,createdAt:void 0,updatedAt:void 0}}async function $2(){const n=RC(Ay(Us,"members"),IC("name"));return(await Ly(n)).docs.map(t=>t.data())}async function wg(){const n=RC(Ay(Us,"memberDirectory"),IC("name"));return(await Ly(n)).docs.map(t=>t.data())}async function W5(n,e,t,s=!1){const a=Aa(Us,"members",n.uid),l=await Xl(a);if(!l.exists())throw new Error("Perfil do membro não encontrado.");const u=l.data();let f=u.avatarDataUrl||n.photoURL||"";t&&(f=await Y2(t));const p={...u,name:s?e.name.trim():u.name,phone:e.phone.trim(),phoneNormalized:av(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:s?e.maritalStatus.trim():u.maritalStatus,gender:s?e.gender.trim():u.gender,vocalRange:s?e.vocalRange.trim():u.vocalRange,availability:e.availability.trim(),avatarDataUrl:f,accountLevel:u.accountLevel,leadershipRole:u.leadershipRole,permissions:u.permissions};return await Vy(a,{name:p.name,phone:p.phone,phoneNormalized:p.phoneNormalized,cep:p.cep,neighborhood:p.neighborhood,city:p.city,street:p.street,houseNumber:p.houseNumber,maritalStatus:p.maritalStatus,gender:p.gender,vocalRange:p.vocalRange,availability:p.availability,avatarDataUrl:p.avatarDataUrl,updatedAt:Vs()}),await tc(p),await G2(n,p.name,p.avatarDataUrl),p}async function Y5(n,e){const t=Aa(Us,"members",n);await Vy(t,{name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:av(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),accountLevel:Tr(e.accountLevel),leadershipRole:e.leadershipRole.trim(),permissions:hr(e.permissions,e.accountLevel),updatedAt:Vs()});const s=await Xl(t);s.exists()&&await tc(s.data())}const Q5=320,$5=7e5;function X5(n,e,t){return Math.min(Math.max(n,e),t)}function X2(n){return n*Math.PI/180}function Z5(n,e,t){const s=X2(t);return{width:Math.abs(Math.cos(s)*n)+Math.abs(Math.sin(s)*e),height:Math.abs(Math.sin(s)*n)+Math.abs(Math.cos(s)*e)}}function Z2(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{e(String(s.result||""))},s.onerror=()=>{t(new Error("Não foi possível ler a imagem selecionada."))},s.readAsDataURL(n)})}function J5(n){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("Não foi possível processar a foto selecionada.")),s.src=n})}function e6({saturation:n,brightness:e,contrast:t}){return`saturate(${n}%) brightness(${e}%) contrast(${t}%)`}async function t6(n){const e=[n.width,280,240,200].filter((s,a,l)=>s>0&&l.indexOf(s)===a),t=[.88,.82,.76,.7];for(const s of e){let a=n;if(s!==n.width){a=document.createElement("canvas"),a.width=s,a.height=s;const l=a.getContext("2d");if(!l)throw new Error("Não foi possível preparar a foto ajustada.");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(n,0,0,s,s)}for(const l of t){const u=a.toDataURL("image/jpeg",l);if(u.length<=$5)return u}}throw new Error("A foto ainda ficou grande para salvar. Reduza o zoom ou escolha outra imagem.")}async function n6(n,e,t){const s=await J5(n),a=Z5(s.width,s.height,t.rotation),l=document.createElement("canvas");l.width=Math.ceil(a.width),l.height=Math.ceil(a.height);const u=l.getContext("2d");if(!u)throw new Error("Não foi possível preparar a foto ajustada.");u.save(),u.translate(l.width/2,l.height/2),u.rotate(X2(t.rotation)),u.filter=e6(t),u.drawImage(s,-s.width/2,-s.height/2),u.restore();const f=X5(Math.max(e.width,e.height),1,t.outputSize||Q5),p=document.createElement("canvas");p.width=f,p.height=f;const g=p.getContext("2d");if(!g)throw new Error("Não foi possível finalizar a foto ajustada.");return g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high",g.drawImage(l,e.x,e.y,e.width,e.height,0,0,f,f),t6(p)}var C_=function(n,e){return C_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])},C_(n,e)};function i6(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");C_(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _n=function(){return _n=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},_n.apply(this,arguments)};var bg,ow;function s6(){if(ow)return bg;ow=1;var n=!1,e,t,s,a,l,u,f,p,g,E,S,A,V,H,Z;function Y(){if(!n){n=!0;var ue=navigator.userAgent,le=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(ue),Ee=/(Mac OS X)|(Windows)|(Linux)/.exec(ue);if(A=/\b(iPhone|iP[ao]d)/.exec(ue),V=/\b(iP[ao]d)/.exec(ue),E=/Android/i.exec(ue),H=/FBAN\/\w+;/i.exec(ue),Z=/Mobile/i.exec(ue),S=!!/Win64/.exec(ue),le){e=le[1]?parseFloat(le[1]):le[5]?parseFloat(le[5]):NaN,e&&document&&document.documentMode&&(e=document.documentMode);var Me=/(?:Trident\/(\d+.\d+))/.exec(ue);u=Me?parseFloat(Me[1])+4:e,t=le[2]?parseFloat(le[2]):NaN,s=le[3]?parseFloat(le[3]):NaN,a=le[4]?parseFloat(le[4]):NaN,a?(le=/(?:Chrome\/(\d+\.\d+))/.exec(ue),l=le&&le[1]?parseFloat(le[1]):NaN):l=NaN}else e=t=s=l=a=NaN;if(Ee){if(Ee[1]){var de=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(ue);f=de?parseFloat(de[1].replace("_",".")):!0}else f=!1;p=!!Ee[2],g=!!Ee[3]}else f=p=g=!1}}var pe={ie:function(){return Y()||e},ieCompatibilityMode:function(){return Y()||u>e},ie64:function(){return pe.ie()&&S},firefox:function(){return Y()||t},opera:function(){return Y()||s},webkit:function(){return Y()||a},safari:function(){return pe.webkit()},chrome:function(){return Y()||l},windows:function(){return Y()||p},osx:function(){return Y()||f},linux:function(){return Y()||g},iphone:function(){return Y()||A},mobile:function(){return Y()||A||V||E||Z},nativeApp:function(){return Y()||H},android:function(){return Y()||E},ipad:function(){return Y()||V}};return bg=pe,bg}var Ag,lw;function r6(){if(lw)return Ag;lw=1;var n=!!(typeof window<"u"&&window.document&&window.document.createElement),e={canUseDOM:n,canUseWorkers:typeof Worker<"u",canUseEventListeners:n&&!!(window.addEventListener||window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};return Ag=e,Ag}var Cg,cw;function a6(){if(cw)return Cg;cw=1;var n=r6(),e;n.canUseDOM&&(e=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function t(s,a){if(!n.canUseDOM||a&&!("addEventListener"in document))return!1;var l="on"+s,u=l in document;if(!u){var f=document.createElement("div");f.setAttribute(l,"return;"),u=typeof f[l]=="function"}return!u&&e&&s==="wheel"&&(u=document.implementation.hasFeature("Events.wheel","3.0")),u}return Cg=t,Cg}var Rg,uw;function o6(){if(uw)return Rg;uw=1;var n=s6(),e=a6(),t=10,s=40,a=800;function l(u){var f=0,p=0,g=0,E=0;return"detail"in u&&(p=u.detail),"wheelDelta"in u&&(p=-u.wheelDelta/120),"wheelDeltaY"in u&&(p=-u.wheelDeltaY/120),"wheelDeltaX"in u&&(f=-u.wheelDeltaX/120),"axis"in u&&u.axis===u.HORIZONTAL_AXIS&&(f=p,p=0),g=f*t,E=p*t,"deltaY"in u&&(E=u.deltaY),"deltaX"in u&&(g=u.deltaX),(g||E)&&u.deltaMode&&(u.deltaMode==1?(g*=s,E*=s):(g*=a,E*=a)),g&&!f&&(f=g<1?-1:1),E&&!p&&(p=E<1?-1:1),{spinX:f,spinY:p,pixelX:g,pixelY:E}}return l.getEventType=function(){return n.firefox()?"DOMMouseScroll":e("wheel")?"wheel":"mousewheel"},Rg=l,Rg}var Ig,hw;function l6(){return hw||(hw=1,Ig=o6()),Ig}var c6=l6();const u6=I_(c6);function h6(n,e,t,s,a,l){l===void 0&&(l=0);var u=Bl(n,e,l),f=u.width,p=u.height,g=Math.min(f,t),E=Math.min(p,s);return g>E*a?{width:E*a,height:E}:{width:g,height:g/a}}function d6(n){return n.width>n.height?n.width/n.naturalWidth:n.height/n.naturalHeight}function lu(n,e,t,s,a){a===void 0&&(a=0);var l=Bl(e.width,e.height,a),u=l.width,f=l.height;return{x:dw(n.x,u,t.width,s),y:dw(n.y,f,t.height,s)}}function dw(n,e,t,s){var a=Math.abs(e*s/2-t/2);return Jf(n,-a,a)}function fw(n,e){return Math.sqrt(Math.pow(n.y-e.y,2)+Math.pow(n.x-e.x,2))}function mw(n,e){return Math.atan2(e.y-n.y,e.x-n.x)*180/Math.PI}function f6(n,e,t,s,a,l,u){l===void 0&&(l=0),u===void 0&&(u=!0);var f=u?m6:p6,p=Bl(e.width,e.height,l),g=Bl(e.naturalWidth,e.naturalHeight,l),E={x:f(100,((p.width-t.width/a)/2-n.x/a)/p.width*100),y:f(100,((p.height-t.height/a)/2-n.y/a)/p.height*100),width:f(100,t.width/p.width*100/a),height:f(100,t.height/p.height*100/a)},S=Math.round(f(g.width,E.width*g.width/100)),A=Math.round(f(g.height,E.height*g.height/100)),V=g.width>=g.height*s,H=V?{width:Math.round(A*s),height:A}:{width:S,height:Math.round(S/s)},Z=_n(_n({},H),{x:Math.round(f(g.width-H.width,E.x*g.width/100)),y:Math.round(f(g.height-H.height,E.y*g.height/100))});return{croppedAreaPercentages:E,croppedAreaPixels:Z}}function m6(n,e){return Math.min(n,Math.max(0,e))}function p6(n,e){return e}function g6(n,e,t,s,a,l){var u=Bl(e.width,e.height,t),f=Jf(s.width/u.width*(100/n.width),a,l),p={x:f*u.width/2-s.width/2-u.width*f*(n.x/100),y:f*u.height/2-s.height/2-u.height*f*(n.y/100)};return{crop:p,zoom:f}}function _6(n,e,t){var s=d6(e);return t.height>t.width?t.height/(n.height*s):t.width/(n.width*s)}function y6(n,e,t,s,a,l){t===void 0&&(t=0);var u=Bl(e.naturalWidth,e.naturalHeight,t),f=Jf(_6(n,e,s),a,l),p=s.height>s.width?s.height/n.height:s.width/n.width,g={x:((u.width-n.width)/2-n.x)*p,y:((u.height-n.height)/2-n.y)*p};return{crop:g,zoom:f}}function pw(n,e){return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}function v6(n){return n*Math.PI/180}function Bl(n,e,t){var s=v6(t);return{width:Math.abs(Math.cos(s)*n)+Math.abs(Math.sin(s)*e),height:Math.abs(Math.sin(s)*n)+Math.abs(Math.cos(s)*e)}}function Jf(n,e,t){return Math.min(Math.max(n,e),t)}function Nd(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter(function(t){return typeof t=="string"&&t.length>0}).join(" ").trim()}var E6=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,T6=1,S6=3,w6=1,b6=(function(n){i6(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.cropperRef=se.createRef(),t.imageRef=se.createRef(),t.videoRef=se.createRef(),t.containerPosition={x:0,y:0},t.containerRef=null,t.styleRef=null,t.containerRect=null,t.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},t.dragStartPosition={x:0,y:0},t.dragStartCrop={x:0,y:0},t.gestureZoomStart=0,t.gestureRotationStart=0,t.isTouching=!1,t.lastPinchDistance=0,t.lastPinchRotation=0,t.rafDragTimeout=null,t.rafPinchTimeout=null,t.wheelTimer=null,t.currentDoc=typeof document<"u"?document:null,t.currentWindow=typeof window<"u"?window:null,t.resizeObserver=null,t.previousCropSize=null,t.isInitialized=!1,t.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},t.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!t.containerRef)){var s=!0;t.resizeObserver=new window.ResizeObserver(function(a){if(s){s=!1;return}t.computeSizes()}),t.resizeObserver.observe(t.containerRef)}},t.preventZoomSafari=function(s){return s.preventDefault()},t.cleanEvents=function(){t.currentDoc&&(t.currentDoc.removeEventListener("mousemove",t.onMouseMove),t.currentDoc.removeEventListener("mouseup",t.onDragStopped),t.currentDoc.removeEventListener("touchmove",t.onTouchMove),t.currentDoc.removeEventListener("touchend",t.onDragStopped),t.currentDoc.removeEventListener("gesturechange",t.onGestureChange),t.currentDoc.removeEventListener("gestureend",t.onGestureEnd),t.currentDoc.removeEventListener("scroll",t.onScroll))},t.clearScrollEvent=function(){t.containerRef&&t.containerRef.removeEventListener("wheel",t.onWheel),t.wheelTimer&&clearTimeout(t.wheelTimer)},t.onMediaLoad=function(){var s=t.computeSizes();s&&(t.previousCropSize=s,t.emitCropData(),t.setInitialCrop(s),t.isInitialized=!0),t.props.onMediaLoaded&&t.props.onMediaLoaded(t.mediaSize)},t.setInitialCrop=function(s){if(t.props.initialCroppedAreaPercentages){var a=g6(t.props.initialCroppedAreaPercentages,t.mediaSize,t.props.rotation,s,t.props.minZoom,t.props.maxZoom),l=a.crop,u=a.zoom;t.props.onCropChange(l),t.props.onZoomChange&&t.props.onZoomChange(u)}else if(t.props.initialCroppedAreaPixels){var f=y6(t.props.initialCroppedAreaPixels,t.mediaSize,t.props.rotation,s,t.props.minZoom,t.props.maxZoom),l=f.crop,u=f.zoom;t.props.onCropChange(l),t.props.onZoomChange&&t.props.onZoomChange(u)}},t.computeSizes=function(){var s,a,l,u,f,p,g=t.imageRef.current||t.videoRef.current;if(g&&t.containerRef){t.containerRect=t.containerRef.getBoundingClientRect(),t.saveContainerPosition();var E=t.containerRect.width/t.containerRect.height,S=((s=t.imageRef.current)===null||s===void 0?void 0:s.naturalWidth)||((a=t.videoRef.current)===null||a===void 0?void 0:a.videoWidth)||0,A=((l=t.imageRef.current)===null||l===void 0?void 0:l.naturalHeight)||((u=t.videoRef.current)===null||u===void 0?void 0:u.videoHeight)||0,V=g.offsetWidth<S||g.offsetHeight<A,H=S/A,Z=void 0;if(V)switch(t.state.mediaObjectFit){default:case"contain":Z=E>H?{width:t.containerRect.height*H,height:t.containerRect.height}:{width:t.containerRect.width,height:t.containerRect.width/H};break;case"horizontal-cover":Z={width:t.containerRect.width,height:t.containerRect.width/H};break;case"vertical-cover":Z={width:t.containerRect.height*H,height:t.containerRect.height};break}else Z={width:g.offsetWidth,height:g.offsetHeight};t.mediaSize=_n(_n({},Z),{naturalWidth:S,naturalHeight:A}),t.props.setMediaSize&&t.props.setMediaSize(t.mediaSize);var Y=t.props.cropSize?t.props.cropSize:h6(t.mediaSize.width,t.mediaSize.height,t.containerRect.width,t.containerRect.height,t.props.aspect,t.props.rotation);return(((f=t.state.cropSize)===null||f===void 0?void 0:f.height)!==Y.height||((p=t.state.cropSize)===null||p===void 0?void 0:p.width)!==Y.width)&&t.props.onCropSizeChange&&t.props.onCropSizeChange(Y),t.setState({cropSize:Y},t.recomputeCropPosition),t.props.setCropSize&&t.props.setCropSize(Y),Y}},t.saveContainerPosition=function(){if(t.containerRef){var s=t.containerRef.getBoundingClientRect();t.containerPosition={x:s.left,y:s.top}}},t.onMouseDown=function(s){t.currentDoc&&(s.preventDefault(),t.currentDoc.addEventListener("mousemove",t.onMouseMove),t.currentDoc.addEventListener("mouseup",t.onDragStopped),t.saveContainerPosition(),t.onDragStart(e.getMousePoint(s)))},t.onMouseMove=function(s){return t.onDrag(e.getMousePoint(s))},t.onScroll=function(s){t.currentDoc&&(s.preventDefault(),t.saveContainerPosition())},t.onTouchStart=function(s){t.currentDoc&&(t.isTouching=!0,!(t.props.onTouchRequest&&!t.props.onTouchRequest(s))&&(t.currentDoc.addEventListener("touchmove",t.onTouchMove,{passive:!1}),t.currentDoc.addEventListener("touchend",t.onDragStopped),t.saveContainerPosition(),s.touches.length===2?t.onPinchStart(s):s.touches.length===1&&t.onDragStart(e.getTouchPoint(s.touches[0]))))},t.onTouchMove=function(s){s.preventDefault(),s.touches.length===2?t.onPinchMove(s):s.touches.length===1&&t.onDrag(e.getTouchPoint(s.touches[0]))},t.onGestureStart=function(s){t.currentDoc&&(s.preventDefault(),t.currentDoc.addEventListener("gesturechange",t.onGestureChange),t.currentDoc.addEventListener("gestureend",t.onGestureEnd),t.gestureZoomStart=t.props.zoom,t.gestureRotationStart=t.props.rotation)},t.onGestureChange=function(s){if(s.preventDefault(),!t.isTouching){var a=e.getMousePoint(s),l=t.gestureZoomStart-1+s.scale;if(t.setNewZoom(l,a,{shouldUpdatePosition:!0}),t.props.onRotationChange){var u=t.gestureRotationStart+s.rotation;t.props.onRotationChange(u)}}},t.onGestureEnd=function(s){t.cleanEvents()},t.onDragStart=function(s){var a,l,u=s.x,f=s.y;t.dragStartPosition={x:u,y:f},t.dragStartCrop=_n({},t.props.crop),(l=(a=t.props).onInteractionStart)===null||l===void 0||l.call(a)},t.onDrag=function(s){var a=s.x,l=s.y;t.currentWindow&&(t.rafDragTimeout&&t.currentWindow.cancelAnimationFrame(t.rafDragTimeout),t.rafDragTimeout=t.currentWindow.requestAnimationFrame(function(){if(t.state.cropSize&&!(a===void 0||l===void 0)){var u=a-t.dragStartPosition.x,f=l-t.dragStartPosition.y,p={x:t.dragStartCrop.x+u,y:t.dragStartCrop.y+f},g=t.props.restrictPosition?lu(p,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):p;t.props.onCropChange(g)}}))},t.onDragStopped=function(){var s,a;t.isTouching=!1,t.cleanEvents(),t.emitCropData(),(a=(s=t.props).onInteractionEnd)===null||a===void 0||a.call(s)},t.onWheel=function(s){if(t.currentWindow&&!(t.props.onWheelRequest&&!t.props.onWheelRequest(s))){s.preventDefault();var a=e.getMousePoint(s),l=u6(s).pixelY,u=t.props.zoom-l*t.props.zoomSpeed/200;t.setNewZoom(u,a,{shouldUpdatePosition:!0}),t.state.hasWheelJustStarted||t.setState({hasWheelJustStarted:!0},function(){var f,p;return(p=(f=t.props).onInteractionStart)===null||p===void 0?void 0:p.call(f)}),t.wheelTimer&&clearTimeout(t.wheelTimer),t.wheelTimer=t.currentWindow.setTimeout(function(){return t.setState({hasWheelJustStarted:!1},function(){var f,p;return(p=(f=t.props).onInteractionEnd)===null||p===void 0?void 0:p.call(f)})},250)}},t.getPointOnContainer=function(s,a){var l=s.x,u=s.y;if(!t.containerRect)throw new Error("The Cropper is not mounted");return{x:t.containerRect.width/2-(l-a.x),y:t.containerRect.height/2-(u-a.y)}},t.getPointOnMedia=function(s){var a=s.x,l=s.y,u=t.props,f=u.crop,p=u.zoom;return{x:(a+f.x)/p,y:(l+f.y)/p}},t.setNewZoom=function(s,a,l){var u=l===void 0?{}:l,f=u.shouldUpdatePosition,p=f===void 0?!0:f;if(!(!t.state.cropSize||!t.props.onZoomChange)){var g=Jf(s,t.props.minZoom,t.props.maxZoom);if(p){var E=t.getPointOnContainer(a,t.containerPosition),S=t.getPointOnMedia(E),A={x:S.x*g-E.x,y:S.y*g-E.y},V=t.props.restrictPosition?lu(A,t.mediaSize,t.state.cropSize,g,t.props.rotation):A;t.props.onCropChange(V)}t.props.onZoomChange(g)}},t.getCropData=function(){if(!t.state.cropSize)return null;var s=t.props.restrictPosition?lu(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;return f6(s,t.mediaSize,t.state.cropSize,t.getAspect(),t.props.zoom,t.props.rotation,t.props.restrictPosition)},t.emitCropData=function(){var s=t.getCropData();if(s){var a=s.croppedAreaPercentages,l=s.croppedAreaPixels;t.props.onCropComplete&&t.props.onCropComplete(a,l),t.props.onCropAreaChange&&t.props.onCropAreaChange(a,l)}},t.emitCropAreaChange=function(){var s=t.getCropData();if(s){var a=s.croppedAreaPercentages,l=s.croppedAreaPixels;t.props.onCropAreaChange&&t.props.onCropAreaChange(a,l)}},t.recomputeCropPosition=function(){var s,a;if(t.state.cropSize){var l=t.props.crop;if(t.isInitialized&&(!((s=t.previousCropSize)===null||s===void 0)&&s.width)&&(!((a=t.previousCropSize)===null||a===void 0)&&a.height)){var u=Math.abs(t.previousCropSize.width-t.state.cropSize.width)>1e-6||Math.abs(t.previousCropSize.height-t.state.cropSize.height)>1e-6;if(u){var f=t.state.cropSize.width/t.previousCropSize.width,p=t.state.cropSize.height/t.previousCropSize.height;l={x:t.props.crop.x*f,y:t.props.crop.y*p}}}var g=t.props.restrictPosition?lu(l,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):l;t.previousCropSize=t.state.cropSize,t.props.onCropChange(g),t.emitCropData()}},t.onKeyDown=function(s){var a,l,u=t.props,f=u.crop,p=u.onCropChange,g=u.keyboardStep,E=u.zoom,S=u.rotation,A=g;if(t.state.cropSize){s.shiftKey&&(A*=.2);var V=_n({},f);switch(s.key){case"ArrowUp":V.y-=A,s.preventDefault();break;case"ArrowDown":V.y+=A,s.preventDefault();break;case"ArrowLeft":V.x-=A,s.preventDefault();break;case"ArrowRight":V.x+=A,s.preventDefault();break;default:return}t.props.restrictPosition&&(V=lu(V,t.mediaSize,t.state.cropSize,E,S)),s.repeat||(l=(a=t.props).onInteractionStart)===null||l===void 0||l.call(a),p(V)}},t.onKeyUp=function(s){var a,l;switch(s.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":s.preventDefault();break;default:return}t.emitCropData(),(l=(a=t.props).onInteractionEnd)===null||l===void 0||l.call(a)},t}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=E6,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},e.prototype.componentWillUnmount=function(){var t,s;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((s=this.styleRef.parentNode)===null||s===void 0||s.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(t){var s,a,l,u,f,p,g,E,S;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.objectFit!==this.props.objectFit?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():((s=t.cropSize)===null||s===void 0?void 0:s.height)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.height)||((l=t.cropSize)===null||l===void 0?void 0:l.width)!==((u=this.props.cropSize)===null||u===void 0?void 0:u.width)?this.computeSizes():(((f=t.crop)===null||f===void 0?void 0:f.x)!==((p=this.props.crop)===null||p===void 0?void 0:p.x)||((g=t.crop)===null||g===void 0?void 0:g.y)!==((E=this.props.crop)===null||E===void 0?void 0:E.y))&&this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&((S=this.videoRef.current)===null||S===void 0||S.load());var A=this.getObjectFit();A!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:A},this.computeSizes)},e.prototype.getAspect=function(){var t=this.props,s=t.cropSize,a=t.aspect;return s?s.width/s.height:a},e.prototype.getObjectFit=function(){var t,s,a,l;if(this.props.objectFit==="cover"){var u=this.imageRef.current||this.videoRef.current;if(u&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var f=this.containerRect.width/this.containerRect.height,p=((t=this.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoWidth)||0,g=((a=this.imageRef.current)===null||a===void 0?void 0:a.naturalHeight)||((l=this.videoRef.current)===null||l===void 0?void 0:l.videoHeight)||0,E=p/g;return E<f?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},e.prototype.onPinchStart=function(t){var s=e.getTouchPoint(t.touches[0]),a=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=fw(s,a),this.lastPinchRotation=mw(s,a),this.onDragStart(pw(s,a))},e.prototype.onPinchMove=function(t){var s=this;if(!(!this.currentDoc||!this.currentWindow)){var a=e.getTouchPoint(t.touches[0]),l=e.getTouchPoint(t.touches[1]),u=pw(a,l);this.onDrag(u),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var f=fw(a,l),p=s.props.zoom*(f/s.lastPinchDistance);s.setNewZoom(p,u,{shouldUpdatePosition:!1}),s.lastPinchDistance=f;var g=mw(a,l),E=s.props.rotation+(g-s.lastPinchRotation);s.props.onRotationChange&&s.props.onRotationChange(E),s.lastPinchRotation=g})}},e.prototype.render=function(){var t=this,s,a=this.props,l=a.image,u=a.video,f=a.mediaProps,p=a.cropperProps,g=a.transform,E=a.crop,S=E.x,A=E.y,V=a.rotation,H=a.zoom,Z=a.cropShape,Y=a.showGrid,pe=a.roundCropAreaPixels,ue=a.style,le=ue.containerStyle,Ee=ue.cropAreaStyle,Me=ue.mediaStyle,de=a.classes,C=de.containerClassName,R=de.cropAreaClassName,N=de.mediaClassName,x=(s=this.state.mediaObjectFit)!==null&&s!==void 0?s:this.getObjectFit();return se.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(O){return t.containerRef=O},"data-testid":"container",style:le,className:Nd("reactEasyCrop_Container",C)},l?se.createElement("img",_n({alt:"",className:Nd("reactEasyCrop_Image",x==="contain"&&"reactEasyCrop_Contain",x==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",x==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",N)},f,{src:l,ref:this.imageRef,style:_n(_n({},Me),{transform:g||"translate(".concat(S,"px, ").concat(A,"px) rotate(").concat(V,"deg) scale(").concat(H,")")}),onLoad:this.onMediaLoad})):u&&se.createElement("video",_n({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:Nd("reactEasyCrop_Video",x==="contain"&&"reactEasyCrop_Contain",x==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",x==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",N)},f,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:_n(_n({},Me),{transform:g||"translate(".concat(S,"px, ").concat(A,"px) rotate(").concat(V,"deg) scale(").concat(H,")")}),controls:!1}),(Array.isArray(u)?u:[{src:u}]).map(function(I){return se.createElement("source",_n({key:I.src},I))})),this.state.cropSize&&se.createElement("div",_n({ref:this.cropperRef,style:_n(_n({},Ee),{width:pe?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:pe?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:Nd("reactEasyCrop_CropArea",Z==="round"&&"reactEasyCrop_CropAreaRound",Y&&"reactEasyCrop_CropAreaGrid",R)},p)))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:S6,minZoom:T6,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:w6},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e})(se.Component),J2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gw=oo.createContext&&oo.createContext(J2),A6=["attr","size","title"];function C6(n,e){if(n==null)return{};var t,s,a=R6(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)t=l[s],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function R6(n,e){if(n==null)return{};var t={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(e.indexOf(s)!==-1)continue;t[s]=n[s]}return t}function Tf(){return Tf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Tf.apply(null,arguments)}function _w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,s)}return t}function Sf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_w(Object(t),!0).forEach(function(s){I6(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_w(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function I6(n,e,t){return(e=N6(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N6(n){var e=x6(n,"string");return typeof e=="symbol"?e:e+""}function x6(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function eR(n){return n&&n.map((e,t)=>oo.createElement(e.tag,Sf({key:t},e.attr),eR(e.child)))}function $t(n){return e=>oo.createElement(D6,Tf({attr:Sf({},n.attr)},e),eR(n.child))}function D6(n){var e=t=>{var{attr:s,size:a,title:l}=n,u=C6(n,A6),f=a||t.size||"1em",p;return t.className&&(p=t.className),n.className&&(p=(p?p+" ":"")+n.className),oo.createElement("svg",Tf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:p,style:Sf(Sf({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&oo.createElement("title",null,l),n.children)};return gw!==void 0?oo.createElement(gw.Consumer,null,t=>e(t)):e(J2)}function tR(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(n)}function M6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(n)}function O6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(n)}function yw(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function k6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(n)}function P6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function L6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(n)}function V6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function j6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function U6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(n)}function z6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(n)}function B6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(n)}function F6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(n)}function q6(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(n)}const Ng={x:0,y:0};function H6(n,e,t){return`saturate(${n}%) brightness(${e}%) contrast(${t}%)`}function nR({open:n,imageSrc:e,title:t,description:s,onClose:a,onApply:l}){const[u,f]=se.useState(Ng),[p,g]=se.useState(1.15),[E,S]=se.useState(0),[A,V]=se.useState(100),[H,Z]=se.useState(100),[Y,pe]=se.useState(100),[ue,le]=se.useState(null),[Ee,Me]=se.useState(!1),[de,C]=se.useState("");if(se.useEffect(()=>{n&&(f(Ng),g(1.15),S(0),V(100),Z(100),pe(100),le(null),C(""))},[e,n]),!n||!e)return null;const R=async()=>{if(!ue){C("Ajuste a foto antes de aplicar.");return}Me(!0),C("");try{const N=await n6(e,ue,{rotation:E,saturation:A,brightness:H,contrast:Y});await l(N)}catch(N){C(N instanceof Error?N.message:"Não foi possível preparar a foto agora.")}finally{Me(!1)}};return _.jsx("div",{className:"home-modal-backdrop avatar-editor-backdrop",role:"dialog","aria-modal":"true","aria-label":t,children:_.jsxs("div",{className:"home-modal-card avatar-editor-card",children:[_.jsxs("div",{className:"home-modal-header avatar-editor-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Foto de perfil"}),_.jsx("h3",{children:t}),_.jsx("p",{children:s})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:a,disabled:Ee,children:"Fechar"})]}),_.jsxs("div",{className:"avatar-editor-layout",children:[_.jsxs("div",{className:"avatar-editor-stage",children:[_.jsx("div",{className:"avatar-editor-cropper-shell",children:_.jsx(b6,{image:e,crop:u,zoom:p,rotation:E,cropShape:"round",showGrid:!1,aspect:1,objectFit:"cover",onCropChange:f,onZoomChange:g,onRotationChange:S,onCropComplete:(N,x)=>le(x),style:{mediaStyle:{filter:H6(A,H,Y)}}})}),_.jsxs("div",{className:"avatar-editor-tip-row",children:[_.jsx("span",{children:"Arraste a foto para enquadrar melhor o rosto."}),_.jsx("span",{children:"O resultado será salvo em formato otimizado."})]})]}),_.jsxs("div",{className:"avatar-editor-controls",children:[_.jsxs("div",{className:"avatar-editor-control-group",children:[_.jsxs("div",{className:"avatar-editor-control-header",children:[_.jsx(O6,{size:16}),_.jsx("strong",{children:"Enquadramento"})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Zoom"}),_.jsxs("strong",{children:[p.toFixed(2),"x"]}),_.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:p,onChange:N=>g(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Rotação"}),_.jsxs("strong",{children:[E,"°"]}),_.jsx("input",{type:"range",min:"-180",max:"180",step:"1",value:E,onChange:N=>S(Number(N.target.value))})]})]}),_.jsxs("div",{className:"avatar-editor-control-group",children:[_.jsxs("div",{className:"avatar-editor-control-header",children:[_.jsx(M6,{size:16}),_.jsx("strong",{children:"Imagem"})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Saturação"}),_.jsxs("strong",{children:[A,"%"]}),_.jsx("input",{type:"range",min:"40",max:"180",step:"1",value:A,onChange:N=>V(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Brilho"}),_.jsxs("strong",{children:[H,"%"]}),_.jsx("input",{type:"range",min:"70",max:"130",step:"1",value:H,onChange:N=>Z(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Contraste"}),_.jsxs("strong",{children:[Y,"%"]}),_.jsx("input",{type:"range",min:"80",max:"150",step:"1",value:Y,onChange:N=>pe(Number(N.target.value))})]})]}),_.jsxs("button",{type:"button",className:"home-secondary-action avatar-editor-reset",onClick:()=>{f(Ng),g(1.15),S(0),V(100),Z(100),pe(100),C("")},disabled:Ee,children:[_.jsx(k6,{size:15}),"Resetar ajustes"]}),de?_.jsx("p",{className:"avatar-editor-status",children:de}):null]})]}),_.jsxs("div",{className:"home-modal-actions avatar-editor-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:a,disabled:Ee,children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action",onClick:R,disabled:Ee,children:Ee?"Aplicando...":"Usar esta foto"})]})]})})}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=n=>{const e=K6(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Y6=se.createContext({}),Q6=()=>se.useContext(Y6),$6=se.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...f},p)=>{const{size:g=24,strokeWidth:E=2,absoluteStrokeWidth:S=!1,color:A="currentColor",className:V=""}=Q6()??{},H=s??S?Number(t??E)*24/Number(e??g):t??E;return se.createElement("svg",{ref:p,...xg,width:e??g??xg.width,height:e??g??xg.height,stroke:n??A,strokeWidth:H,className:iR("lucide",V,a),...!l&&!W6(f)&&{"aria-hidden":"true"},...f},[...u.map(([Z,Y])=>se.createElement(Z,Y)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(n,e)=>{const t=se.forwardRef(({className:s,...a},l)=>se.createElement($6,{ref:l,iconNode:e,className:iR(`lucide-${G6(vw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=vw(n),t};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Z6=mn("arrow-left",X6);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sR=mn("arrow-right",J6);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],t9=mn("building-2",e9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],i9=mn("camera",n9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],r9=mn("chevron-down",s9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rR=mn("circle-question-mark",a9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],l9=mn("house",o9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],aR=mn("key-round",c9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],R_=mn("lock-keyhole",u9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],oR=mn("mail",h9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Dg=mn("map-pin",d9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],m9=mn("music",f9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],g9=mn("phone",p9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],y9=mn("save",_9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lR=mn("shield-check",v9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],T9=mn("shield-plus",E9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],w9=mn("user-round",S9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ew=mn("user",b9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],cR=mn("users",A9),ov="/assets/BackGround-DJtypmwv.png";function C9({onAdminLogin:n,isSubmitting:e=!1,statusMessage:t=""}){const[s,a]=se.useState(""),[l,u]=se.useState(""),[f,p]=se.useState(""),g=E=>{if(E.preventDefault(),!s.trim()||!l.trim()){p("Informe usuário e senha para entrar no painel oculto.");return}p(""),n(s.trim(),l)};return _.jsxs("div",{className:"page admin-page",children:[_.jsx("img",{className:"page-bg admin-bg-image",src:ov,alt:""}),_.jsx("div",{className:"admin-bg-overlay"}),_.jsx("div",{className:"admin-access-shell",children:_.jsxs("div",{className:"admin-access-card",children:[_.jsxs("div",{className:"admin-access-badge",children:[_.jsx(lR,{size:22,strokeWidth:2.4}),"Painel interno"]}),_.jsx("h1",{children:"Acesso administrativo"}),_.jsx("p",{children:"Entre com a credencial oculta para gerenciar contas, níveis e permissões do ministério."}),_.jsx("p",{children:"Credencial inicial: admin / admin"}),t?_.jsx("p",{className:"admin-status-message",children:t}):null,f?_.jsx("p",{className:"admin-status-message",children:f}):null,_.jsxs("form",{className:"admin-access-form",onSubmit:g,children:[_.jsxs("label",{className:"admin-input-group",children:[_.jsx("span",{children:"Usuário"}),_.jsxs("div",{className:"admin-input-shell",children:[_.jsx(w9,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"text",value:s,onChange:E=>a(E.target.value),placeholder:"Usuário administrativo",disabled:e})]})]}),_.jsxs("label",{className:"admin-input-group",children:[_.jsx("span",{children:"Senha"}),_.jsxs("div",{className:"admin-input-shell",children:[_.jsx(aR,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"password",value:l,onChange:E=>u(E.target.value),placeholder:"Senha administrativa",disabled:e})]})]}),_.jsx("button",{className:"admin-primary-btn",type:"submit",disabled:e,children:e?"Entrando...":"Entrar como administrador"})]})]})})]})}function R9(n){const e=Tr(n.accountLevel);return{uid:n.uid,email:n.email,name:n.name,phone:n.phone,cep:n.cep,neighborhood:n.neighborhood,city:n.city,street:n.street,houseNumber:n.houseNumber,maritalStatus:n.maritalStatus,gender:n.gender,vocalRange:n.vocalRange,availability:n.availability,accountLevel:e,leadershipRole:n.leadershipRole||"",permissions:hr(n.permissions,e)}}function I9({adminName:n,members:e,isLoading:t,isSaving:s,statusMessage:a="",onRefresh:l,onSaveMember:u,onChangeAdminPassword:f,onSignOut:p}){const[g,E]=se.useState(""),[S,A]=se.useState({}),[V,H]=se.useState(""),Z=se.useMemo(()=>Object.fromEntries(e.map(C=>[C.uid,R9(C)])),[e]),Y=se.useMemo(()=>e.map(C=>S[C.uid]??Z[C.uid]),[S,Z,e]),pe=se.useMemo(()=>{const C=g.trim().toLowerCase();return Y.filter(R=>C?`${R.name} ${R.email} ${R.accountLevel} ${R.leadershipRole}`.toLowerCase().includes(C):!0)},[Y,g]),ue=(C,R)=>C[R]??Z[R],le=(C,R)=>{A(N=>{const x=ue(N,C);if(!x)return N;const I={...x,...R};if(R.accountLevel){const O=Tr(R.accountLevel);I.accountLevel=O,O!=="direction"&&(I.leadershipRole=""),I.permissions=[...A_(O)]}return{...N,[C]:I}})},Ee=(C,R)=>{A(N=>{const x=ue(N,C);if(!x)return N;const I=x.permissions.includes(R);return{...N,[C]:{...x,permissions:I?x.permissions.filter(O=>O!==R):[...x.permissions,R]}}})},Me=C=>{A(R=>{const N=ue(R,C);return N?{...R,[C]:{...N,permissions:[...A_(N.accountLevel)]}}:R})},de=C=>!!S[C];return _.jsx("div",{className:"page admin-dashboard-page",children:_.jsxs("div",{className:"admin-dashboard-shell",children:[_.jsxs("header",{className:"admin-dashboard-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"admin-dashboard-eyebrow",children:"Gestão central"}),_.jsx("h1",{children:"Painel do administrador"}),_.jsxs("p",{className:"admin-dashboard-copy",children:["Sessão ativa como ",n,". Ajuste níveis, cargos, permissões e dados dos membros por aqui."]})]}),_.jsxs("div",{className:"admin-dashboard-actions",children:[_.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void l(),children:[_.jsx(cR,{size:18,strokeWidth:2.2}),"Atualizar lista"]}),_.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void p(),children:[_.jsx(lR,{size:18,strokeWidth:2.2}),"Sair"]})]})]}),_.jsxs("section",{className:"admin-password-card",children:[_.jsxs("div",{children:[_.jsx("p",{className:"admin-dashboard-eyebrow",children:"Segurança"}),_.jsx("h2",{children:"Trocar senha do administrador"})]}),_.jsxs("div",{className:"admin-password-row",children:[_.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[_.jsx(aR,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"password",value:V,onChange:C=>H(C.target.value),placeholder:"Nova senha do administrador",disabled:s})]}),_.jsx("button",{type:"button",className:"admin-primary-btn",disabled:s||V.trim().length<6,onClick:()=>{f(V.trim()),H("")},children:"Atualizar senha"})]})]}),_.jsxs("section",{className:"admin-members-panel",children:[_.jsxs("div",{className:"admin-members-toolbar",children:[_.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[_.jsx(T9,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"search",value:g,onChange:C=>E(C.target.value),placeholder:"Buscar membro, e-mail ou nível"})]}),a?_.jsx("p",{className:"admin-inline-status",children:a}):null]}),t?_.jsx("p",{className:"admin-empty-state",children:"Carregando contas cadastradas..."}):null,!t&&pe.length===0?_.jsx("p",{className:"admin-empty-state",children:"Nenhuma conta encontrada para esse filtro."}):null,_.jsx("div",{className:"admin-member-list",children:pe.map(C=>{const R=C.accountLevel==="direction"?["",...P5]:C.accountLevel==="administration"?["",...L5]:[""],N=C.accountLevel==="member"?rv:Array.from(new Set([...Zf,...V5])),x=de(C.uid);return _.jsxs("article",{className:"admin-member-card",children:[_.jsxs("div",{className:"admin-member-topline",children:[_.jsxs("div",{children:[_.jsx("h2",{children:C.name||"Conta sem nome"}),_.jsx("p",{children:C.email})]}),_.jsxs("button",{type:"button",className:"admin-primary-btn",disabled:s||!x,onClick:async()=>{await u(C),A(I=>{const O={...I};return delete O[C.uid],O})},children:[_.jsx(y9,{size:16,strokeWidth:2.2}),x?"Salvar alterações":"Sem alterações"]})]}),_.jsxs("div",{className:"admin-form-grid",children:[_.jsxs("label",{children:[_.jsx("span",{children:"Nome"}),_.jsx("input",{value:C.name,onChange:I=>le(C.uid,{name:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Telefone"}),_.jsx("input",{value:C.phone,onChange:I=>le(C.uid,{phone:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cidade"}),_.jsx("input",{value:C.city,onChange:I=>le(C.uid,{city:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Bairro"}),_.jsx("input",{value:C.neighborhood,onChange:I=>le(C.uid,{neighborhood:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Rua"}),_.jsx("input",{value:C.street,onChange:I=>le(C.uid,{street:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Número"}),_.jsx("input",{value:C.houseNumber,onChange:I=>le(C.uid,{houseNumber:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Nível"}),_.jsx("div",{className:"admin-segmented-control",role:"group","aria-label":`Definir nível de ${C.name}`,children:[["member","Membro"],["direction","Direção"],["administration","Administração"]].map(([I,O])=>{const D=C.accountLevel===I;return _.jsx("button",{type:"button",className:`admin-segment-btn${D?" is-active":""}`,"aria-pressed":D,onClick:()=>le(C.uid,{accountLevel:I}),children:O},I)})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cargo"}),_.jsx("div",{className:"admin-role-grid",role:"group","aria-label":`Definir cargo de ${C.name}`,children:R.map(I=>_.jsx("button",{type:"button",className:`admin-role-chip${(C.leadershipRole||"")===I?" is-active":""}`,"aria-pressed":(C.leadershipRole||"")===I,onClick:()=>le(C.uid,{leadershipRole:I}),children:I||"Sem cargo"},I||"sem-cargo"))})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Gênero"}),_.jsx("input",{value:C.gender,onChange:I=>le(C.uid,{gender:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Timbre"}),_.jsx("input",{value:C.vocalRange,onChange:I=>le(C.uid,{vocalRange:I.target.value})})]}),_.jsxs("label",{className:"admin-form-grid-span",children:[_.jsx("span",{children:"Disponibilidade"}),_.jsx("input",{value:C.availability,onChange:I=>le(C.uid,{availability:I.target.value})})]})]}),_.jsxs("div",{className:"admin-permission-block",children:[_.jsxs("div",{className:"admin-permission-header",children:[_.jsx("p",{children:"Permissões ativas"}),_.jsx("button",{type:"button",className:"admin-secondary-btn admin-ghost-btn",onClick:()=>Me(C.uid),children:"Restaurar padrão"})]}),_.jsx("div",{className:"admin-permission-grid",children:N.map(I=>_.jsxs("button",{type:"button",className:`admin-permission-item${C.permissions.includes(I)?" is-active":""}`,"aria-pressed":C.permissions.includes(I),onClick:()=>Ee(C.uid,I),children:[_.jsx("span",{className:"admin-permission-toggle","aria-hidden":"true"}),_.jsx("span",{children:I})]},I))})]})]},C.uid)})})]})]})})}function N9(n){return $t({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function x9(n){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(n)}function D9(n){return $t({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"},child:[]}]})(n)}function M9(n){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M138.2 22.71c-25.5-.14-45.82 38.57-50.14 80.29H32v18h55.23c.07 6.1.49 12.1 1.33 18l17.34-18h25.5c-3.8 3.9-7.9 7.7-12.1 11.8l-31.24 32.5v-.1c-.53.6-1.1 1.2-1.64 1.8H32v18h38.17c-12.95 14.6-25.91 30.2-35.67 46H34v.8c-8.09 13.3-13.89 26.8-15.44 39.9-3.5 33.5 9.52 67.3 33.39 87.3H32v18h65.54c2.56.1 5.16.1 7.86 0h20.1c3.7 20.7 7 41.2 8.9 60 .4 3.6-6.6 10.6-10 11.4 0-22-17.8-39.9-39.84-39.9-21.9 0-39.8 17.9-39.8 39.9.1 20.1 15.2 35.8 35 39.5 41.84 7.7 78.34-17.9 72.44-53-2.9-19.1-6.2-38.5-9.7-57.9H480v-18H139.3c-2.9-15.5-5.8-30.9-8.5-46h37.3c-2.6 7.8-8.1 15.9-15.4 23l3.7 20.8c15.5-11.3 31.3-26.6 35.7-43.8H480v-18H192.9c-1.6-14.5-7.8-30.8-17.8-39.9-2.5-2.3-5.1-4.3-7.8-6.1H480v-18H116.8c-1.2-7.7-1.9-11.8-2.7-16.4l-15.54 15.1c.08.4.17.9.25 1.3H72.63c12.31-16.2 26.52-30.9 41.17-46H480v-18H130.9c10.5-11.3 20.9-23.2 30.7-36.4 2-2.8 3.8-6 5.3-9.6H480v-18H172.1c2.5-12.89 2.7-26.36 1.2-35.24-2.7-16.12-14.2-42.89-31.9-44.83-1.1-.14-2.1-.22-3.2-.22zm-5.5 37c6.9.1 14.4 5.8 15.6 15.95 1.3 11.18-.3 19.87-3.8 27.34h-36c3.4-20 11.2-42.23 24.2-43.29zM60.23 249h31.24c-13.45 12.5-19.59 29.6-18.93 46H42.79c.04-5.6.98-11.3 2.97-17 4.02-10.4 8.93-20 14.47-29zm63.57 11.3c11.8-.3 26.9 5.8 34 12.9 5.7 6.2 9.6 14.1 11.2 21.8h-41.5c-2.1-11.8-4.2-23.4-6-34.6.7-.1 1.5-.1 2.3-.1zm-19.4 6.5c1.5 8.9 3.3 18.4 5.2 28.2H90.63c.1-11 4.22-21.2 13.77-28.2zM45.75 313h30.39c2.69 7.2 6.83 13.9 12.42 19.4 5.1 5.2 15.14-2.7 10-8.6-1.93-3.5-3.54-7.1-4.81-10.8h19.35c3 15 6.1 30.5 9.1 46h-20v-.1c-25.44-3.3-48.49-22.3-56.45-45.9z"},child:[]}]})(n)}function O9(n){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M98.05 18.54c-11.46-.08-23.59 1.28-36.08 3.99L130.1 261.1c-14.2-5.1-31.18-6.2-48.09-3.2-39.17 6.9-67.15 33.8-62.52 59.8 4.64 26.1 40.14 41.7 79.33 34.7 39.08-6.9 67.08-33.7 62.38-59.8-22.1-80.8-44.4-163-66.39-244.21 50.69 3.59 72.59 31.58 90.59 60.31-.5-62.33-37.7-89.81-87.35-90.16zm310.65 30.7c-13.9.1-28.8 2.59-44.1 7.22l87.1 232.44c-14.6-3.9-31.6-3.7-48.3.7-38.4 10-64.2 39-57.5 64.6 6.7 25.7 43.4 38.3 81.8 28.2 38.5-10 64.2-39 57.5-64.6-28.6-78.8-57.3-158.9-85.8-238.2 50.8-.5 74.9 25.7 95.2 52.9-5.2-58.55-40.4-83.61-85.9-83.26zM258.4 163.5l1.8 248.1c-12.3-8.6-28.4-14.3-45.6-15.9-39.4-3.8-73.7 14.5-76.2 41-2.5 26.3 27.7 50.8 67.1 54.5 39.7 3.9 73.7-14.5 76.3-40.9.2-83.8.8-168.9 1.3-253.1 47.9 17 61.6 49.8 71.2 82.4 19.9-74.1-27.9-112.3-95.9-116.1z"},child:[]}]})(n)}function k9(n){return $t({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(n)}function P9(n){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M16 14h.01"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M16 18h.01"},child:[]}]})(n)}const uR="/assets/LogoAD-DmeX6Ev_.png";function hR(){return Ay(Us,"agendaEvents")}async function L9(){return(await Ly(hR())).docs.map(e=>e.data()).sort((e,t)=>`${e.scheduledDate}|${e.time}`.localeCompare(`${t.scheduledDate}|${t.time}`))}async function V9(n){const e=Aa(hR()),t={id:e.id,kind:n.kind,title:n.title,scheduledDate:n.scheduledDate,time:n.time,location:n.location,note:n.note,author:n.author,createdByUid:n.createdByUid,comments:[]};return await Gf(e,{...t,createdAt:Vs(),updatedAt:Vs()}),(await Xl(e)).data()}async function j9(n,e){await Vy(Aa(Us,"agendaEvents",n),{comments:B3(e),updatedAt:Vs()})}const U9=[],z9=[],Tw=[];function Mg(n){return`${n}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function B9(n){return n.trim().split(" ")[0]||n}function xd(n){var t,s;const e=n.trim().split(/\s+/).filter(Boolean);return((((t=e[0])==null?void 0:t[0])||"V")+(((s=e[1])==null?void 0:s[0])||"")).toUpperCase()}function F9(n){return n.replace(/\D/g,"")}function dR(n){if(!n)return"Hoje";const e=new Date(`${n}T12:00:00`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(e)}function q9(n){const e=F9(n);return e?`https://wa.me/${e.startsWith("55")?e:`55${e}`}`:""}function H9(n,e,t){const s=t==="Feminino";return n==="Desenvolvedor"?"Desenvolvedor":n==="Secretário"?s?"Secretária":"Secretário":n==="Vice-Secretário"?s?"Vice-Secretária":"Vice-Secretário":n==="Maestro"?s?"Maestra":"Maestro":e==="administration"?s?"Administradora do Vocal":"Administrador do Vocal":n||"Integrante"}function Og(n){return ao(n).label}function ao(n){return n.accountLevel==="administration"?n.leadershipRole==="Desenvolvedor"?{label:"Desenvolvedor",priority:1,icon:x9,accentClassName:"is-developer"}:{label:"Administrador do Vocal",priority:0,icon:D9,accentClassName:"is-admin"}:n.leadershipRole==="Maestro"?{label:"Maestro",priority:2,icon:O9,accentClassName:"is-maestro"}:n.leadershipRole==="Secretário"?{label:"Secretário",priority:3,icon:B6,accentClassName:"is-secretary"}:n.leadershipRole==="Vice-Secretário"?{label:"Vice-Secretário",priority:4,icon:U6,accentClassName:"is-vice-secretary"}:{label:"Membro do vocal",priority:5,icon:tR,accentClassName:"is-member"}}function Dd(n){return[...n].sort((e,t)=>{const s=ao(e),a=ao(t);return s.priority!==a.priority?s.priority-a.priority:e.name.localeCompare(t.name,"pt-BR",{sensitivity:"base"})})}function Sw(n){switch(n){case"agenda":return"Buscar eventos, local ou observações";case"songs":return"Buscar músicas e observações";case"members":return"Buscar membro, cargo ou timbre";default:return"Buscar avisos, comentários ou informações"}}function kg(n,e,t,s){return{name:(n==null?void 0:n.name)||e,phone:(n==null?void 0:n.phone)||"",cep:(n==null?void 0:n.cep)||"",neighborhood:(n==null?void 0:n.neighborhood)||"",city:(n==null?void 0:n.city)||"",street:(n==null?void 0:n.street)||"",houseNumber:(n==null?void 0:n.houseNumber)||"",maritalStatus:(n==null?void 0:n.maritalStatus)||"",gender:(n==null?void 0:n.gender)||t,vocalRange:(n==null?void 0:n.vocalRange)||s,availability:(n==null?void 0:n.availability)||""}}function G9(n){return{id:n.id,kind:n.kind,title:n.title,scheduledDate:n.scheduledDate,dateLabel:dR(n.scheduledDate),time:n.time,location:n.location,note:n.note,author:n.author,comments:Array.isArray(n.comments)?n.comments:[]}}function K9(n,e,t=!1){var s;return t&&n.length>0?`Diretório atualizado com ${n.length} membro(s).`:n.length===0?"Ainda não há perfis sincronizados no diretório interno.":n.length===1&&((s=n[0])==null?void 0:s.uid)===e?"Somente o seu perfil está sincronizado no diretório por enquanto.":""}async function Pg(){return(await L9()).map(G9)}async function Lg(n,e){let t=!1,s=await wg();return e&&!s.some(a=>a.uid===e.uid)&&(await F5(e),s=await wg()),e&&Tr(e.accountLevel)==="administration"&&s.length<=1&&(await K2()).synced>0&&(t=!0,s=await wg()),{members:s,statusMessage:K9(s,n,t)}}function W9({memberName:n,memberGender:e,memberVocalRange:t,accountLevel:s,leadershipRole:a,permissions:l,onBackToAuth:u}){var Na;const[f,p]=se.useState("home"),[g,E]=se.useState(""),[S,A]=se.useState(U9),[V,H]=se.useState(z9),[Z,Y]=se.useState({}),[pe,ue]=se.useState(!1),[le,Ee]=se.useState("home"),[Me,de]=se.useState(!1),[C,R]=se.useState(!1),[N,x]=se.useState(!1),[I,O]=se.useState(!1),[D,Oe]=se.useState(!1),[Ce,U]=se.useState({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:"Ensaio"}),[re,_e]=se.useState(null),[Ne,Fe]=se.useState(()=>kg(null,n,e,t)),[P,J]=se.useState(""),[ce,fe]=se.useState(null),[Ae,Re]=se.useState(""),[ze,lt]=se.useState(!1),[Ve,Sn]=se.useState(!1),[di,un]=se.useState(""),[fi,wn]=se.useState(!1),[Ii,hn]=se.useState(""),[B,k]=se.useState(!1),[K,ae]=se.useState([]),[oe,qe]=se.useState(!1),[yt,nt]=se.useState(!1),[vt,qt]=se.useState(""),[Xt,Pn]=se.useState(""),zs=se.useRef(null),bn=se.useDeferredValue(g.trim().toLowerCase()),zt=Dn.currentUser,Ht=(zt==null?void 0:zt.uid)||"",jt=Tr((re==null?void 0:re.accountLevel)||s),Ut=(re==null?void 0:re.leadershipRole)||a,Zn=(re==null?void 0:re.gender)||e,it=(re==null?void 0:re.name)||n,Bs=(re==null?void 0:re.vocalRange)||t,mi=H9(Ut,jt,Zn),No=B9(it),Gn=hr((re==null?void 0:re.permissions)??l,jt),Kn=jt==="administration"||Ut==="Secretário",Ct=jt==="administration"||Ut==="Maestro"||Ut==="Secretário"||Ut==="Vice-Secretário"||Gn.includes("Postar avisos"),Wn=Ct||Gn.includes("Mexer na agenda"),Ni=Ct||Gn.includes("Comentar")||Gn.includes("Comentar em agenda e avisos");se.useEffect(()=>{let F=!0;async function Se(){if(Ht){qe(!0),wn(!0),un(""),hn(""),qt("");try{const rt=await Q2(Ht),[dt,Rt]=await Promise.allSettled([Pg(),Lg(Ht,rt)]);if(!F)return;_e(rt),Fe(kg(rt,n,e,t)),J((rt==null?void 0:rt.avatarDataUrl)||(zt==null?void 0:zt.photoURL)||""),fe(null),Re(""),lt(!1),dt.status==="fulfilled"?H(dt.value):hn("Não foi possível carregar a agenda agora."),Rt.status==="fulfilled"?(ae(Dd(Rt.value.members)),qt(Rt.value.statusMessage)):qt("Não foi possível carregar a lista de membros agora.")}catch{if(!F)return;un("Não foi possível carregar seus dados completos agora.")}finally{F&&(qe(!1),wn(!1))}}}return Se(),()=>{F=!1}},[Ht,zt==null?void 0:zt.photoURL,e,n,t]);const Jn=se.useMemo(()=>bn?S.filter(F=>[F.category,F.title,F.content,F.author,...F.comments.map(Se=>Se.text)].join(" ").toLowerCase().includes(bn)):S,[bn,S]),Ca=se.useMemo(()=>bn?V.filter(F=>[F.kind,F.title,F.location,F.note,F.dateLabel,...F.comments.map(Se=>Se.text)].join(" ").toLowerCase().includes(bn)):V,[V,bn]),Ln=se.useMemo(()=>{const F=K.filter(Se=>!bn||[Se.name,Og(Se),Se.vocalRange,Se.leadershipRole,Se.accountLevel,Se.phone].join(" ").toLowerCase().includes(bn));return Dd(F)},[bn,K]);se.useEffect(()=>{if(!Ln.length){Pn("");return}Ln.some(F=>F.uid===Xt)||Pn(Ln[0].uid)},[Ln,Xt]);const ht=Ln.find(F=>F.uid===Xt)||null,Yn=Ca[0]??V[0],wr=P||(zt==null?void 0:zt.photoURL)||(re==null?void 0:re.avatarDataUrl)||"",hs=se.useMemo(()=>V.slice(0,3),[V]);se.useEffect(()=>{var F;E(""),(F=zs.current)==null||F.scrollTo({top:0,behavior:"smooth"})},[f]);const ds=F=>{p(F)},Ra=()=>{if(f==="agenda"&&Wn)Ee("agenda");else if(Ct)Ee("home");else if(Wn)Ee("agenda");else return;U({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:f==="agenda"?"Ensaio":"Aviso"}),ue(!0)},An=F=>{const{name:Se,value:rt}=F.target;U(dt=>({...dt,[Se]:rt}))},Wi=async()=>{if(!(!Ce.title.trim()||!Ce.content.trim()))if(le==="agenda"){if(!Ht){hn("Não foi possível identificar sua sessão para salvar a agenda.");return}k(!0);try{await V9({kind:Ce.kind||"Ensaio",title:Ce.title.trim(),scheduledDate:Ce.date,time:Ce.time.trim()||"19:30",location:Ce.location.trim()||"Local a definir",note:Ce.content.trim(),author:it,createdByUid:Ht});const F=await Pg();H(F),hn("Compromisso salvo com sucesso na agenda."),p("agenda"),ue(!1)}catch{hn("Não foi possível salvar esse compromisso no Firestore agora.")}finally{k(!1)}}else{const F={id:Mg("post"),category:Ce.category||"Aviso",title:Ce.title.trim(),content:Ce.content.trim(),author:it,role:mi,dateLabel:Ce.date?dR(Ce.date):"Agora mesmo",imageUrl:Ce.imageUrl.trim(),comments:[]};A(Se=>[F,...Se]),p("home"),ue(!1)}},xo=F=>{var rt;const Se=(rt=Z[F])==null?void 0:rt.trim();Se&&(A(dt=>dt.map(Rt=>Rt.id===F?{...Rt,comments:[...Rt.comments,{id:Mg("post-comment"),author:it,role:mi,text:Se,createdAt:"agora",createdByUid:Ht}]}:Rt)),Y(dt=>({...dt,[F]:""})))},pi=async F=>{var rt;const Se=(rt=Z[F])==null?void 0:rt.trim();if(!(!Se||!Ht))try{await j9(F,{id:Mg("agenda-comment"),author:it,role:mi,text:Se,createdAt:"agora",createdByUid:Ht});const dt=await Pg();H(dt),Y(Rt=>({...Rt,[F]:""})),hn("Comentário enviado para a agenda.")}catch{hn("Não foi possível comentar nesse compromisso agora.")}},gi=async()=>{if(g.trim()){Ln.length>0?(Pn(Ln[0].uid),qt(`${Ln.length} membro(s) encontrado(s).`)):qt("Nenhum membro encontrado para essa busca.");return}nt(!0);try{const F=await Lg(Ht,re);ae(Dd(F.members)),qt(F.statusMessage||"Diretório atualizado.")}catch{qt("Não foi possível atualizar a lista de membros agora.")}finally{nt(!1)}},st=F=>{const{name:Se,value:rt}=F.target;Fe(dt=>({...dt,[Se]:rt}))},Zt=async F=>{const Se=await Z2(F);Re(Se),lt(!0)},xi=F=>{var rt;const Se=(rt=F.target.files)==null?void 0:rt[0];F.target.value="",Se&&Zt(Se).catch(dt=>{un(dt instanceof Error?dt.message:"Não foi possível abrir o editor da foto agora.")})},br=async()=>{if(!zt){un("Não foi possível identificar a sua sessão.");return}Sn(!0),un("");try{const F=await W5(zt,Ne,ce,Kn),Se=await Lg(Ht,F);_e(F),Fe(kg(F,n,e,t)),J(F.avatarDataUrl||""),fe(null),Re(""),lt(!1),ae(Dd(Se.members)),qt(Se.statusMessage),un("Perfil atualizado com sucesso.")}catch(F){un(F instanceof Error?F.message:"Não foi possível atualizar seu perfil agora.")}finally{Sn(!1)}},nc=async F=>{if(!F.trim()){qt("Esse membro ainda não informou telefone.");return}try{await navigator.clipboard.writeText(F),qt("Telefone copiado para a área de transferência.")}catch{qt("Não foi possível copiar o telefone agora.")}},Ia=(F,Se,rt)=>Ni?_.jsxs("div",{className:"home-comment-composer",children:[_.jsx("input",{type:"text",value:Z[F]||"",onChange:dt=>Y(Rt=>({...Rt,[F]:dt.target.value})),placeholder:Se}),_.jsx("button",{type:"button",className:"home-inline-action",onClick:rt,children:"Comentar"})]}):_.jsx("p",{className:"home-comment-disabled",children:"Comentários liberados apenas para perfis com acesso a interação interna."});return _.jsxs("div",{className:"page page-home",children:[_.jsx("div",{className:"home-surface"}),_.jsxs("div",{className:"home-modern-shell",children:[_.jsxs("header",{className:"home-modern-header",children:[_.jsx("div",{className:"home-brand-mark",children:_.jsx("img",{src:uR,alt:"Logo do vocal"})}),_.jsxs("div",{className:"home-header-main",children:[_.jsxs("div",{className:"home-header-row",children:[_.jsxs("div",{className:"home-identity-copy",children:[_.jsx("p",{className:"home-card-eyebrow",children:"Ministério em movimento"}),_.jsxs("h1",{children:["Bem-vindo, ",No]})]}),_.jsxs("div",{className:"home-header-actions",children:[_.jsxs("button",{className:"home-header-icon-btn",type:"button","aria-label":"Abrir notificações",onClick:()=>x(!0),children:[_.jsx(q6,{size:18}),_.jsx("span",{className:"home-header-badge","aria-hidden":"true"})]}),_.jsx("button",{className:"home-profile-trigger",type:"button","aria-label":"Abrir perfil do usuário",onClick:()=>O(!0),children:wr?_.jsx("img",{src:wr,alt:it}):_.jsx("span",{children:xd(it)})})]})]}),_.jsxs("div",{className:"home-chip-row",children:[_.jsx("span",{className:"home-role-chip",children:mi}),Bs?_.jsxs("span",{className:"home-chip",children:["Timbre ",Bs]}):null]})]})]}),f!=="members"?_.jsxs(_.Fragment,{children:[_.jsxs("section",{className:"home-hero-card",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-hero-kicker",children:"Painel do vocal"}),_.jsx("h2",{children:"Home e Agenda no mesmo fluxo"}),_.jsx("p",{children:"Veja avisos, publique recados, acompanhe eventos e responda rapidamente quando não puder comparecer."})]}),_.jsxs("button",{type:"button",className:"login-help-btn home-help-btn",onClick:()=>R(!0),children:[_.jsx(j6,{size:18}),"AJUDA"]})]}),_.jsx("section",{className:"home-toolbar",children:_.jsxs("label",{className:"home-search-shell","aria-label":"Buscar na tela atual",children:[_.jsx(yw,{size:18}),_.jsx("input",{type:"search",value:g,onChange:F=>E(F.target.value),placeholder:Sw(f)})]})}),_.jsxs("section",{className:"home-summary-strip",children:[_.jsxs("article",{className:"home-summary-card modern",children:[_.jsx("span",{children:"Próximo compromisso"}),_.jsx("strong",{children:(Yn==null?void 0:Yn.title)||"Sem evento próximo"}),_.jsx("p",{children:Yn?`${Yn.dateLabel} • ${Yn.time} • ${Yn.location}`:"Ainda não existe ensaio, culto ou saída cadastrada."})]}),_.jsxs("article",{className:"home-summary-card modern",children:[_.jsx("span",{children:"Movimento do mural"}),_.jsxs("strong",{children:[S.length," publicações"]}),_.jsx("p",{children:((Na=S[0])==null?void 0:Na.title)||"Nenhum aviso ou publicação criada até agora."})]})]})]}):null,_.jsxs("main",{ref:zs,className:"home-main-panel",children:[f==="home"?_.jsxs("div",{className:"home-feed-stack",children:[Jn.map(F=>_.jsxs("article",{className:"home-feed-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:F.category}),_.jsx("strong",{children:F.dateLabel})]}),_.jsx("h3",{children:F.title}),_.jsx("p",{children:F.content}),F.imageUrl?_.jsx("div",{className:"home-feed-media",children:_.jsx("img",{src:F.imageUrl,alt:F.title})}):null,_.jsxs("div",{className:"home-post-author",children:[_.jsx("span",{children:F.author}),_.jsx("small",{children:F.role})]}),_.jsx("div",{className:"home-comment-list",children:F.comments.map(Se=>_.jsxs("div",{className:"home-comment-card",children:[_.jsxs("div",{children:[_.jsx("strong",{children:Se.author}),_.jsx("small",{children:Se.role})]}),_.jsx("p",{children:Se.text}),_.jsx("span",{children:Se.createdAt})]},Se.id))}),Ia(F.id,"Responder ao aviso ou adicionar informação...",()=>xo(F.id))]},F.id)),Jn.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Mural vazio"}),_.jsxs("p",{children:["Ainda não há avisos, imagens ou informações publicados.",Ct?" Use o botão + para criar a primeira publicação.":" Quando a liderança publicar algo, vai aparecer aqui."]})]}):null]}):null,f==="agenda"?_.jsxs("div",{className:"home-agenda-stack",children:[Ii?_.jsx("p",{className:"home-inline-status",children:Ii}):null,fi?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Carregando agenda"}),_.jsx("p",{children:"Buscando compromissos salvos no Firestore."})]}):null,Ca.map(F=>_.jsxs("article",{className:"home-agenda-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:F.kind}),_.jsx("strong",{children:F.dateLabel})]}),_.jsx("h3",{children:F.title}),_.jsxs("div",{className:"home-agenda-meta",children:[_.jsx("span",{children:F.time}),_.jsx("span",{children:F.location}),_.jsxs("span",{children:["Lançado por ",F.author]})]}),_.jsx("p",{children:F.note}),_.jsx("div",{className:"home-comment-list",children:F.comments.map(Se=>_.jsxs("div",{className:"home-comment-card agenda",children:[_.jsxs("div",{children:[_.jsx("strong",{children:Se.author}),_.jsx("small",{children:Se.role})]}),_.jsx("p",{children:Se.text}),_.jsx("span",{children:Se.createdAt})]},Se.id))}),Ia(F.id,"Comentar ausência, atraso, carona ou observação...",()=>pi(F.id))]},F.id)),!fi&&Ca.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Agenda vazia"}),_.jsxs("p",{children:["Nenhum ensaio, saída ou culto foi cadastrado.",Wn?" Use o botão + para lançar o primeiro compromisso.":" Quando a agenda for atualizada, os eventos aparecerão aqui."]})]}):null]}):null,f==="songs"?_.jsxs("section",{className:"home-song-grid",children:[Tw.map(F=>_.jsxs("article",{className:"home-song-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:"Repertório"}),_.jsxs("strong",{children:["Tonalidade ",F.tone]})]}),_.jsx("h3",{children:F.title}),_.jsx("p",{children:F.note})]},F.id)),Tw.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Repertório vazio"}),_.jsx("p",{children:"As músicas ainda não foram lançadas aqui."})]}):null]}):null,f==="members"?_.jsxs("section",{className:"home-profile-panel",children:[_.jsxs("article",{className:"home-profile-card home-profile-directory-toolbar",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Membros"}),_.jsx("h3",{children:"Membros do vocal"}),_.jsx("p",{children:"Consulte o contato interno, localize integrantes e acompanhe os dados liberados para organização da equipe."})]}),_.jsxs("label",{className:"home-search-shell home-profile-search-shell","aria-label":"Buscar membros do vocal",children:[_.jsx("input",{type:"search",value:g,onChange:F=>E(F.target.value),placeholder:Sw("members")}),_.jsx("button",{type:"button",className:"home-search-trigger",onClick:gi,"aria-label":"Buscar ou atualizar membros",disabled:yt,"aria-busy":yt,children:_.jsx(yw,{size:18})})]})]}),_.jsxs("article",{className:"home-profile-card home-directory-card",children:[_.jsxs("div",{className:"home-directory-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Contato interno"}),_.jsx("h3",{children:"Membros do vocal"}),_.jsx("p",{children:"Lista limitada a dados úteis para contato e organização, sem expor informações sensíveis."})]}),_.jsxs("strong",{children:[Ln.length," membros"]})]}),vt?_.jsx("p",{className:"home-inline-status",children:vt}):null,_.jsx("div",{className:"home-directory-layout",children:_.jsxs("div",{className:"home-directory-list",children:[oe?_.jsx("p",{className:"home-directory-empty",children:"Carregando membros..."}):null,!oe&&Ln.length===0?_.jsx("p",{className:"home-directory-empty",children:"Nenhum membro encontrado para este filtro."}):null,Ln.map(F=>_.jsxs("button",{type:"button",className:`home-directory-item${Xt===F.uid?" is-active":""}`,onClick:()=>{Pn(F.uid),Oe(!0)},children:[_.jsx("div",{className:"home-directory-avatar",children:F.avatarDataUrl?_.jsx("img",{src:F.avatarDataUrl,alt:F.name}):_.jsx("span",{children:xd(F.name)})}),_.jsxs("div",{className:"home-directory-copy",children:[_.jsx("strong",{children:F.name}),_.jsxs("span",{className:`home-directory-role ${ao(F).accentClassName}`,children:[(()=>{const Se=ao(F).icon;return _.jsx(Se,{size:14})})(),Og(F)]}),F.uid===Ht?_.jsx("small",{children:"Seu perfil"}):null,F.vocalRange?_.jsxs("small",{children:["Timbre ",F.vocalRange]}):null]})]},F.uid))]})})]})]}):null]}),Ct||Wn?_.jsx("button",{className:"home-fab-action",type:"button","aria-label":f==="agenda"?"Criar evento":"Criar publicação",onClick:Ra,children:_.jsx(P6,{size:24})}):null,_.jsxs("nav",{className:"home-bottom-nav","aria-label":"Navegação principal",children:[_.jsxs("button",{className:`nav-icon-btn${f==="home"?" is-active":""}`,type:"button","aria-label":"Home",onClick:()=>ds("home"),children:[_.jsx(V6,{size:22}),_.jsx("span",{children:"Home"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="agenda"?" is-active":""}`,type:"button","aria-label":"Agenda",onClick:()=>ds("agenda"),children:[_.jsx(P9,{size:22}),_.jsx("span",{children:"Agenda"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="songs"?" is-active":""}`,type:"button","aria-label":"Músicas",onClick:()=>ds("songs"),children:[_.jsx(M9,{size:24}),_.jsx("span",{children:"Músicas"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="members"?" is-active":""}`,type:"button","aria-label":"Membros",onClick:()=>ds("members"),children:[_.jsx(tR,{size:22}),_.jsx("span",{children:"Membros"})]})]}),_.jsx(nR,{open:ze,imageSrc:Ae,title:"Ajuste sua foto de perfil",description:"Corte, aproxime, afaste e ajuste a aparência antes de atualizar o seu perfil.",onClose:()=>{lt(!1),Re("")},onApply:async F=>{J(F),fe(F),lt(!1),Re(""),un("")}})]}),pe?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>ue(!1),children:_.jsxs("div",{className:"home-modal-card",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Criação rápida"}),_.jsx("h3",{children:le==="agenda"?"Novo evento da agenda":"Nova publicação do mural"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>ue(!1),children:"Fechar"})]}),le==="home"?_.jsxs("div",{className:"home-modal-form",children:[_.jsx("div",{className:"home-pill-row",children:["Aviso","Informação","Imagem"].map(F=>_.jsx("button",{type:"button",className:`home-pill-btn${Ce.category===F?" is-active":""}`,onClick:()=>U(Se=>({...Se,category:F})),children:F},F))}),_.jsx("input",{name:"title",value:Ce.title,onChange:An,placeholder:"Título da publicação"}),_.jsx("textarea",{name:"content",value:Ce.content,onChange:An,placeholder:"Escreva o aviso, a informação ou instrução para o vocal",rows:5}),_.jsx("input",{name:"date",type:"date",value:Ce.date,onChange:An}),_.jsx("input",{name:"imageUrl",value:Ce.imageUrl,onChange:An,placeholder:"URL de imagem opcional"})]}):_.jsxs("div",{className:"home-modal-form",children:[_.jsx("div",{className:"home-pill-row",children:["Ensaio","Saída","Culto"].map(F=>_.jsx("button",{type:"button",className:`home-pill-btn${Ce.kind===F?" is-active":""}`,onClick:()=>U(Se=>({...Se,kind:F})),children:F},F))}),_.jsx("input",{name:"title",value:Ce.title,onChange:An,placeholder:"Título do compromisso"}),_.jsx("textarea",{name:"content",value:Ce.content,onChange:An,placeholder:"Detalhes, observações e instruções para a equipe",rows:5}),_.jsx("input",{name:"date",type:"date",value:Ce.date,onChange:An}),_.jsx("input",{name:"time",type:"time",value:Ce.time,onChange:An}),_.jsx("input",{name:"location",value:Ce.location,onChange:An,placeholder:"Local do ensaio, saída ou culto"})]}),_.jsxs("div",{className:"home-modal-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>ue(!1),children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action",onClick:()=>void Wi(),disabled:B,children:B?"Salvando...":"Publicar"})]})]})}):null,C?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>R(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Ajuda rápida"}),_.jsx("h3",{children:"Como usar essa tela"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>R(!1),children:"Fechar"})]}),_.jsxs("div",{className:"home-help-list",children:[_.jsx("p",{children:"No Home você vê avisos, imagens e recados internos."}),_.jsx("p",{children:"Na Agenda você acompanha ensaios, saídas e horários com espaço para justificar ausência."}),_.jsx("p",{children:"No ícone do perfil você atualiza seus dados. Na aba Membros você encontra os contatos internos liberados para o ministério."})]})]})}):null,I?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>O(!1),children:_.jsxs("div",{className:"home-modal-card home-profile-modal-card",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Meu perfil"}),_.jsx("h3",{children:"Editar cadastro"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>O(!1),children:"Fechar"})]}),_.jsxs("section",{className:"home-profile-panel",children:[_.jsxs("article",{className:"home-profile-card home-profile-summary-card",children:[_.jsxs("div",{className:"home-profile-summary",children:[_.jsxs("label",{className:"home-profile-avatar-editor",htmlFor:"profile-avatar-input",children:[wr?_.jsx("img",{src:wr,alt:it}):_.jsx("span",{children:xd(it)}),_.jsx("span",{className:"home-profile-avatar-badge",children:_.jsx(F6,{size:14})})]}),_.jsxs("div",{className:"home-profile-summary-copy",children:[_.jsxs("div",{className:"home-card-topline compact",children:[_.jsx("span",{children:"Meu perfil"}),_.jsx("strong",{children:mi})]}),_.jsx("h3",{children:it}),_.jsx("p",{children:"Atualize foto, telefone, endereço e dados essenciais do seu cadastro."}),_.jsxs("div",{className:"home-chip-row",children:[Bs?_.jsxs("span",{className:"home-chip",children:["Timbre ",Bs]}):null,_.jsx("span",{className:"home-chip",children:mi})]})]})]}),_.jsx("input",{id:"profile-avatar-input",className:"hidden-input",type:"file",accept:"image/*",onChange:xi}),_.jsxs("div",{className:"home-profile-inline-actions",children:[_.jsx("label",{htmlFor:"profile-avatar-input",className:"home-secondary-action home-inline-label-btn",children:"Ajustar foto"}),_.jsxs("button",{type:"button",className:"home-secondary-action",onClick:()=>de(!0),children:[_.jsx(k9,{size:16}),"Sair"]})]}),di?_.jsx("p",{className:"home-inline-status",children:di}):null]}),_.jsxs("article",{className:"home-profile-card home-profile-edit-card",children:[_.jsxs("div",{className:"home-card-topline compact",children:[_.jsx("span",{children:"Dados editáveis"}),_.jsx("strong",{children:Kn?"Edição ampliada":"Edição básica"})]}),Kn?null:_.jsx("p",{className:"home-profile-note",children:"Nome, estado civil, gênero e timbre são ajustados apenas por administração e secretaria."}),_.jsxs("div",{className:"home-profile-form-grid",children:[_.jsxs("label",{children:[_.jsx("span",{children:"Nome"}),_.jsx("input",{name:"name",value:Ne.name,onChange:st,disabled:!Kn||Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Telefone"}),_.jsx("input",{name:"phone",value:Ne.phone,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"CEP"}),_.jsx("input",{name:"cep",value:Ne.cep,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Bairro"}),_.jsx("input",{name:"neighborhood",value:Ne.neighborhood,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cidade"}),_.jsx("input",{name:"city",value:Ne.city,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Rua"}),_.jsx("input",{name:"street",value:Ne.street,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Número"}),_.jsx("input",{name:"houseNumber",value:Ne.houseNumber,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Disponibilidade"}),_.jsx("input",{name:"availability",value:Ne.availability,onChange:st,disabled:Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Estado civil"}),_.jsx("input",{name:"maritalStatus",value:Ne.maritalStatus,onChange:st,disabled:!Kn||Ve})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Gênero"}),_.jsx("input",{name:"gender",value:Ne.gender,onChange:st,disabled:!Kn||Ve})]}),_.jsxs("label",{className:"home-profile-form-span",children:[_.jsx("span",{children:"Timbre"}),_.jsx("input",{name:"vocalRange",value:Ne.vocalRange,onChange:st,disabled:!Kn||Ve})]})]}),_.jsx("div",{className:"home-profile-footer",children:_.jsx("button",{type:"button",className:"home-primary-action",onClick:br,disabled:Ve,children:"Salvar alterações"})})]})]})]})}):null,D&&ht?_.jsx("div",{className:"home-modal-backdrop home-member-detail-backdrop",role:"presentation",onClick:()=>Oe(!1),children:_.jsxs("div",{className:"home-modal-card compact home-member-detail-modal",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Contato interno"}),_.jsx("h3",{children:ht.name})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>Oe(!1),children:"Fechar"})]}),_.jsxs("div",{className:"home-directory-detail-header home-member-detail-header",children:[_.jsx("div",{className:"home-directory-avatar large",children:ht.avatarDataUrl?_.jsx("img",{src:ht.avatarDataUrl,alt:ht.name}):_.jsx("span",{children:xd(ht.name)})}),_.jsxs("div",{children:[_.jsxs("p",{className:`home-directory-role ${ao(ht).accentClassName}`,children:[(()=>{const F=ao(ht).icon;return _.jsx(F,{size:15})})(),"Contato interno • ",Og(ht)]}),_.jsxs("div",{className:"home-chip-row",children:[ht.vocalRange?_.jsxs("span",{className:"home-chip",children:["Timbre ",ht.vocalRange]}):null,ht.uid===Ht?_.jsx("span",{className:"home-chip",children:"Seu perfil"}):null]})]})]}),_.jsxs("div",{className:"home-directory-contact-row",children:[_.jsxs("div",{className:"home-directory-contact-card",children:[_.jsx(L6,{size:16}),_.jsx("span",{children:ht.phone||"Telefone não informado"})]}),_.jsxs("div",{className:"home-directory-contact-actions",children:[_.jsxs("a",{className:`home-whatsapp-btn${ht.phoneNormalized?"":" is-disabled"}`,href:ht.phoneNormalized?q9(ht.phoneNormalized):void 0,target:"_blank",rel:"noreferrer","aria-disabled":!ht.phoneNormalized,onClick:F=>{ht.phoneNormalized||F.preventDefault()},children:[_.jsx(N9,{size:18}),"WhatsApp"]}),_.jsxs("button",{type:"button",className:"home-secondary-action compact",onClick:()=>nc(ht.phone),children:[_.jsx(z6,{size:15}),"Copiar número"]})]})]}),_.jsx("p",{className:"home-directory-safety-note",children:"Endereço completo e outros dados privados não aparecem aqui por segurança. Este espaço existe só para facilitar contato rápido e organização do ministério."})]})}):null,N?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>x(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Notificações"}),_.jsx("h3",{children:"Central de avisos"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>x(!1),children:"Fechar"})]}),_.jsx("div",{className:"home-help-list",children:hs.length>0?hs.map(F=>_.jsxs("p",{children:[F.kind,": ",F.title," em ",F.dateLabel," às ",F.time,"."]},F.id)):_.jsxs(_.Fragment,{children:[_.jsx("p",{children:"Aqui vão aparecer novos avisos, publicações e alterações importantes da agenda."}),_.jsx("p",{children:"No momento, não há notificações novas para mostrar."})]})})]})}):null,Me?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>de(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:F=>F.stopPropagation(),children:[_.jsx("div",{className:"home-modal-header",children:_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Encerrar sessão"}),_.jsx("h3",{children:"Deseja realmente sair?"})]})}),_.jsx("p",{className:"home-logout-copy",children:"Você vai voltar para a tela de autenticação e precisará entrar novamente para continuar."}),_.jsxs("div",{className:"home-modal-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>de(!1),children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action danger",onClick:()=>{de(!1),u()},children:"Sair agora"})]})]})}):null]})}const ww="/assets/Login_Logo-BH4BrKrM.png";function Y9(){return _.jsx("span",{className:"google-mark","aria-hidden":"true",children:"G"})}function Q9({form:n,errors:e,onFieldChange:t,onErrorsChange:s,onLogin:a,onGoogleLogin:l,onOpenRegister:u,isSubmitting:f=!1,statusMessage:p=""}){const g=E=>{E.preventDefault();const S={};n.loginEmail.trim()||(S.loginEmail="Informe o e-mail ou telefone."),n.loginPassword.trim()||(S.loginPassword="Informe sua senha."),s(S),!(Object.keys(S).length>0)&&a()};return _.jsxs("div",{className:"page page-login",children:[_.jsx("img",{className:"page-bg login-bg-image",src:ov,alt:""}),_.jsx("div",{className:"login-bg-overlay"}),_.jsxs("div",{className:"login-content",children:[_.jsx("header",{className:"login-brand-block",children:_.jsx("div",{className:"login-brand-logo-wrap",style:{"--login-logo-image":`url(${ww})`},children:_.jsx("img",{className:"login-brand-logo",src:ww,alt:"Vocal Salvos por Cristo"})})}),_.jsxs("form",{className:"login-card",onSubmit:g,children:[_.jsxs("div",{className:"login-card-header",children:[_.jsx("h1",{children:"Entrar"}),_.jsx("p",{children:"Entre com seu e-mail ou com Google. Se faltar algo no perfil, você confirma no cadastro."})]}),p?_.jsx("p",{className:"login-status-message",children:p}):null,_.jsxs("label",{className:`login-input-group ${e.loginEmail?"is-error":""}`,children:[_.jsx("span",{className:"login-input-label",children:"Email"}),_.jsxs("div",{className:"login-input-shell",children:[_.jsx(oR,{size:18,strokeWidth:2.2}),_.jsx("input",{type:"email",name:"loginEmail",value:n.loginEmail,onChange:t,placeholder:"Email cadastrado",autoComplete:"email",disabled:f})]}),e.loginEmail?_.jsx("p",{className:"login-field-error",children:e.loginEmail}):null]}),_.jsxs("label",{className:`login-input-group ${e.loginPassword?"is-error":""}`,children:[_.jsx("span",{className:"login-input-label",children:"Senha"}),_.jsxs("div",{className:"login-input-shell",children:[_.jsx(R_,{size:18,strokeWidth:2.2}),_.jsx("input",{type:"password",name:"loginPassword",value:n.loginPassword,onChange:t,placeholder:"Senha",autoComplete:"current-password",disabled:f})]}),e.loginPassword?_.jsx("p",{className:"login-field-error",children:e.loginPassword}):null]}),_.jsxs("div",{className:"login-actions",children:[_.jsxs("button",{type:"submit",className:"login-submit-btn",disabled:f,children:[f?"Entrando...":"Entrar no painel",_.jsx(sR,{size:18,strokeWidth:2.5})]}),_.jsxs("div",{className:"login-divider","aria-hidden":"true",children:[_.jsx("span",{}),_.jsx("small",{children:"ou"}),_.jsx("span",{})]}),_.jsxs("button",{type:"button",className:"login-google-btn",onClick:()=>{l()},disabled:f,children:[_.jsx(Y9,{}),f?"Aguarde...":"Continuar com Google"]}),_.jsx("button",{type:"button",className:"login-register-btn-modern",onClick:u,disabled:f,children:"Criar conta"})]})]}),_.jsxs("button",{type:"button",className:"login-help-btn",disabled:f,children:[_.jsx(rR,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})}var Hd={exports:{}},Md={exports:{}},bw;function $9(){return bw||(bw=1,(function(n,e){var t=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof s<"u")return s;throw new Error("unable to locate global object")},s=t();n.exports=e=s.fetch,s.fetch&&(e.default=s.fetch.bind(s)),e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response})(Md,Md.exports)),Md.exports}var X9=Hd.exports,Aw;function Z9(){return Aw||(Aw=1,(function(n,e){(function(t,s){n.exports=s($9())})(X9,function(t){function s(B){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k})(B)}function a(B,k){if(!(B instanceof k))throw new TypeError("Cannot call a class as a function")}function l(B,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(k&&k.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),k&&f(B,k)}function u(B){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)})(B)}function f(B,k){return(f=Object.setPrototypeOf||function(K,ae){return K.__proto__=ae,K})(B,k)}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function g(B,k,K){return(g=p()?Reflect.construct:function(ae,oe,qe){var yt=[null];yt.push.apply(yt,oe);var nt=new(Function.bind.apply(ae,yt));return qe&&f(nt,qe.prototype),nt}).apply(null,arguments)}function E(B){var k=typeof Map=="function"?new Map:void 0;return(E=function(K){if(K===null||(ae=K,Function.toString.call(ae).indexOf("[native code]")===-1))return K;var ae;if(typeof K!="function")throw new TypeError("Super expression must either be null or a function");if(k!==void 0){if(k.has(K))return k.get(K);k.set(K,oe)}function oe(){return g(K,arguments,u(this).constructor)}return oe.prototype=Object.create(K.prototype,{constructor:{value:oe,enumerable:!1,writable:!0,configurable:!0}}),f(oe,K)})(B)}function S(B,k){return!k||typeof k!="object"&&typeof k!="function"?(function(K){if(K===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K})(B):k}function A(B){var k=p();return function(){var K,ae=u(B);return S(this,k?(K=u(this).constructor,Reflect.construct(ae,arguments,K)):ae.apply(this,arguments))}}function V(B){return(function(k){if(Array.isArray(k))return Z(k)})(B)||(function(k){if(typeof Symbol<"u"&&Symbol.iterator in Object(k))return Array.from(k)})(B)||H(B)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function H(B,k){if(B){if(typeof B=="string")return Z(B,k);var K=Object.prototype.toString.call(B).slice(8,-1);return K==="Object"&&B.constructor&&(K=B.constructor.name),K==="Map"||K==="Set"?Array.from(B):K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K)?Z(B,k):void 0}}function Z(B,k){(k==null||k>B.length)&&(k=B.length);for(var K=0,ae=new Array(k);K<k;K++)ae[K]=B[K];return ae}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var Y=(function(){l(k,E(Error));var B=A(k);function k(){var K,ae=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},oe=ae.message,qe=ae.type,yt=ae.errors;return a(this,k),(K=B.call(this)).name="CepPromiseError",K.message=oe,K.type=qe,K.errors=yt,K}return k})(),pe=(function(){l(k,E(Error));var B=A(k);function k(){var K,ae=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},oe=ae.message,qe=ae.service;return a(this,k),(K=B.call(this)).name="ServiceError",K.message=oe,K.service=qe,K}return k})();function ue(B,k){var K={method:"POST",body:`<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
  <soapenv:Header />
  <soapenv:Body>
    <cli:consultaCEP>
      <cep>`.concat(B,`</cep>
    </cli:consultaCEP>
  </soapenv:Body>
</soapenv:Envelope>`),headers:{"Content-Type":"text/xml;charset=UTF-8","cache-control":"no-cache"},timeout:k.timeout||3e4};return t("https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",K).then(le).catch(R)}function le(B){return B.ok?B.text().then(Ee).then(C):B.text().then(Me).then(de)}function Ee(B){try{var k;return((k=B.replace(/\r?\n|\r/g,"").match(/<return>(.*)<\/return>/)[0])!==null&&k!==void 0?k:"").replace("<return>","").replace("</return>","").split(/</).reduce(function(K,ae){var oe=ae.split(">");return 1<oe.length&&oe[1].length&&(K[oe[0]]=oe[1]),K},{})}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function Me(B){try{var k;return((k=B.match(/<faultstring>(.*)<\/faultstring>/)[0])!==null&&k!==void 0?k:"").replace("<faultstring>","").replace("</faultstring>","")}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function de(B){throw new Error(B)}function C(B){return{cep:B.cep,state:B.uf,city:B.cidade,neighborhood:B.bairro,street:B.end,service:"correios"}}function R(B){var k=new pe({message:B.message,service:"correios"});throw B.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço dos Correios."),k}function N(B,k){var K={method:"POST",mode:"cors",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8",Referer:"https://buscacepinter.correios.com.br/app/endereco/index.php","Referrer-Policy":"strict-origin-when-cross-origin"},body:"endereco=".concat(B,"&tipoCEP=ALL"),timeout:k.timeout||3e4};return t("https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php",K).then(x).then(I).catch(O)}function x(B){return B.json().then(function(k){if(k.total===0||k.erro||k.dados[0].cep==="")throw new Error("CEP não encontrado na base dos Correios.");return k})}function I(B){var k=B.dados[0];return{cep:k.cep,state:k.uf,city:k.localidade,neighborhood:k.bairro,street:k.logradouroDNEC,service:"correios-alt"}}function O(B){var k=new pe({message:B.message,service:"correios-alt"});throw B.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço dos Correios Alt."),k}function D(B,k){var K="https://viacep.com.br/ws/".concat(B,"/json/"),ae={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:k.timeout||3e4};return typeof window>"u"&&(ae.headers["user-agent"]="cep-promise"),t(K,ae).then(Oe).then(Ce).then(U).catch(re)}function Oe(B){if(B.ok)return B.json();throw Error("Erro ao se conectar com o serviço ViaCEP.")}function Ce(B){if(B.erro===!0)throw new Error("CEP não encontrado na base do ViaCEP.");return B}function U(B){return{cep:B.cep.replace("-",""),state:B.uf,city:B.localidade,neighborhood:B.bairro,street:B.logradouro,service:"viacep"}}function re(B){var k=new pe({message:B.message,service:"viacep"});throw B.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço ViaCEP."),k}function _e(B,k){var K="".concat(B.slice(0,5),"-").concat(B.slice(5)),ae="https://cdn.apicep.com/file/apicep/".concat(K,".json"),oe={method:"GET",mode:"cors",headers:{accept:"application/json"},timeout:k.timeout||3e4};return t(ae,oe).then(Ne).then(Fe).then(P).catch(J)}function Ne(B){if(B.ok)return B.json();throw Error("Erro ao se conectar com o serviço WideNet.")}function Fe(B){if(B.ok===!1||B.status!==200)throw new Error("CEP não encontrado na base do WideNet.");return B}function P(B){return{cep:B.code.replace("-",""),state:B.state,city:B.city,neighborhood:B.district,street:B.address,service:"widenet"}}function J(B){var k=new pe({message:B.message,service:"widenet"});throw B.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço WideNet."),k}function ce(B,k){var K="https://brasilapi.com.br/api/cep/v1/".concat(B),ae={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:k.timeout||3e4};return t(K,ae).then(fe).then(Ae).catch(Re)}function fe(B){if(B.ok===!1||B.status!==200)throw new Error("CEP não encontrado na base do BrasilAPI.");return B.json()}function Ae(B){return{cep:B.cep,state:B.state,city:B.city,neighborhood:B.neighborhood,street:B.street,service:"brasilapi"}}function Re(B){var k=new pe({message:B.message,service:"brasilapi"});throw B.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço BrasilAPI."),k}function ze(){return typeof window<"u"?{viacep:D,widenet:_e,brasilapi:ce}:{correios:ue,"correios-alt":N,viacep:D,widenet:_e,brasilapi:ce}}function lt(B){return new Promise(function(k,K){return Promise.resolve(B).then(K,k)})}Promise.any=function(B){return lt(Promise.all(V(B).map(lt)))};var Ve=Promise,Sn=8;function di(B){var k=s(B);if(k==="number"||k==="string")return B;throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"Você deve chamar o construtor utilizando uma String ou um Number.",service:"cep_validation"}]})}function un(B){return B.toString().replace(/\D+/g,"")}function fi(B){return"0".repeat(Sn-B.length)+B}function wn(B){if(B.length<=Sn)return B;throw new Y({message:"CEP deve conter exatamente ".concat(Sn," caracteres."),type:"validation_error",errors:[{message:"CEP informado possui mais do que ".concat(Sn," caracteres."),service:"cep_validation"}]})}function Ii(B){throw B.length!==void 0?new Y({message:"Todos os serviços de CEP retornaram erro.",type:"service_error",errors:B}):B}function hn(B){var k=B.message,K=B.type,ae=B.errors;throw new Y({message:k,type:K,errors:ae})}return function(B){var k=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return Ve.resolve(B).then(di).then(function(K){return k.providers=k.providers?k.providers:[],(function(ae){var oe=Object.keys(ze());if(!Array.isArray(ae))throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"O parâmetro providers deve ser uma lista.",service:"providers_validation"}]});var qe,yt=(function(vt,qt){var Xt;if(typeof Symbol>"u"||vt[Symbol.iterator]==null){if(Array.isArray(vt)||(Xt=H(vt))||qt){Xt&&(vt=Xt);var Pn=0,zs=function(){};return{s:zs,n:function(){return Pn>=vt.length?{done:!0}:{done:!1,value:vt[Pn++]}},e:function(jt){throw jt},f:zs}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bn,zt=!0,Ht=!1;return{s:function(){Xt=vt[Symbol.iterator]()},n:function(){var jt=Xt.next();return zt=jt.done,jt},e:function(jt){Ht=!0,bn=jt},f:function(){try{zt||Xt.return==null||Xt.return()}finally{if(Ht)throw bn}}}})(ae);try{for(yt.s();!(qe=yt.n()).done;){var nt=qe.value;if(!oe.includes(nt))throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:'O provider "'.concat(nt,'" é inválido. Os providers disponíveis são: ["').concat(oe.join('", "'),'"].'),service:"providers_validation"}]})}}catch(vt){yt.e(vt)}finally{yt.f()}})(k.providers),K}).then(un).then(wn).then(fi).then(function(K){return ae=K,oe=k,qe=ze(),oe.providers.length!==0?Ve.any(oe.providers.map(function(yt){return qe[yt](ae,oe)})):Ve.any(Object.values(qe).map(function(yt){return yt(ae,oe)}));var ae,oe,qe}).catch(Ii).catch(hn)}})})(Hd)),Hd.exports}var J9=Z9();const ej=I_(J9);function Rs({label:n,name:e,type:t="text",value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g,icon:E,error:S}){return _.jsxs("label",{className:"register-field-group",children:[_.jsx("span",{className:"register-field-label",children:n}),_.jsxs("span",{className:`register-field-shell ${S?"is-error":""}`,children:[_.jsx(E,{size:18,strokeWidth:2.2}),_.jsx("input",{type:t,name:e,value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g})]}),S?_.jsx("span",{className:"register-field-error",children:S}):null]})}function tj(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function Cw(n){const e=n.replace(/\D/g,"").slice(0,8);return e.length<=5?e:`${e.slice(0,5)}-${e.slice(5)}`}function Vg({label:n,name:e,value:t,onChange:s,options:a,placeholder:l,icon:u,error:f}){return _.jsxs("label",{className:"register-field-group",children:[_.jsx("span",{className:"register-field-label",children:n}),_.jsxs("span",{className:`register-field-shell register-select-shell ${f?"is-error":""}`,children:[_.jsx(u,{size:18,strokeWidth:2.2}),_.jsxs("select",{name:e,value:t,onChange:s,className:t?"has-value":"",children:[_.jsx("option",{value:"",children:l}),a.map(p=>_.jsx("option",{value:p,children:p},p))]}),_.jsx(r9,{size:18,strokeWidth:2.3})]}),f?_.jsx("span",{className:"register-field-error",children:f}):null]})}function nj(n,e,t=!1){const s={};return n===0&&(e.name.trim()||(s.name="Informe o nome completo."),e.phone.trim()||(s.phone="Informe um telefone para contato."),e.email.trim()||(s.email="Informe um e-mail válido."),t||(e.password.trim()||(s.password="Crie uma senha."),e.password.length>0&&e.password.length<6&&(s.password="A senha precisa ter pelo menos 6 caracteres."),e.confirmPassword!==e.password&&(s.confirmPassword="As senhas precisam ser iguais."))),n===1&&(e.cep.trim()||(s.cep="Informe o CEP."),e.neighborhood.trim()||(s.neighborhood="Informe o bairro."),e.city.trim()||(s.city="Informe a cidade."),e.street.trim()||(s.street="Informe a rua."),e.houseNumber.trim()||(s.houseNumber="Informe o número da casa.")),n===2&&(e.maritalStatus||(s.maritalStatus="Selecione o estado civil."),e.gender||(s.gender="Selecione o gênero."),e.vocalRange||(s.vocalRange="Selecione o timbre vocal.")),s}function ij({form:n,errors:e,registerStep:t,avatarPreview:s,onFieldChange:a,onErrorsChange:l,onStepChange:u,onAvatarChange:f,onOpenLogin:p,onRegisterFinish:g,isSubmitting:E=!1,statusMessage:S="",profileCompletionMode:A=!1,googleProfileMode:V=!1}){const H=ou[t],[Z,Y]=se.useState(""),[pe,ue]=se.useState(!1),le=se.useRef(""),Ee=(x,I)=>{a({target:{name:x,value:I},currentTarget:{name:x,value:I}})},Me=async x=>{if(!(x.length!==8||le.current===x)){le.current=x,ue(!0),Y("Buscando endereço pelo CEP...");try{const I=await ej(x);Ee("cep",Cw(x)),Ee("neighborhood",I.neighborhood||""),Ee("city",I.city||""),Ee("street",I.street||""),l(O=>({...O,cep:"",neighborhood:"",city:"",street:""})),Y("Endereço preenchido automaticamente. Confirme os dados antes de continuar.")}catch{le.current="",l(I=>({...I,cep:"Não encontramos esse CEP. Confira os números digitados."})),Y("CEP não localizado. Você ainda pode preencher o endereço manualmente.")}finally{ue(!1)}}},de=x=>{if(x.target.name==="phone"){const I=tj(x.target.value);a({...x,target:{...x.target,name:x.target.name,value:I},currentTarget:{...x.currentTarget,name:x.target.name,value:I}});return}if(x.target.name==="cep"){const I=Cw(x.target.value),O=I.replace(/\D/g,"");a({...x,target:{...x.target,name:x.target.name,value:I},currentTarget:{...x.currentTarget,name:x.target.name,value:I}}),O.length<8&&(le.current="",Y(""),ue(!1)),O.length===8&&Me(O);return}a(x)},C=()=>{if(t===0){p();return}u(t-1)},R=()=>{const x=nj(t,n,A);if(l(x),!(Object.keys(x).length>0)){if(t<ou.length-1){u(t+1);return}g(n.name||"Novo membro")}},N=()=>t===0?_.jsxs(_.Fragment,{children:[A?_.jsxs("div",{className:"register-prefill-note",children:[_.jsx("strong",{children:V?"Conta Google conectada":"Conta autenticada"}),_.jsx("p",{children:"Revise os dados preenchidos automaticamente e complete o que estiver faltando antes de finalizar."})]}):null,_.jsx(Rs,{label:"Nome",name:"name",value:n.name,onChange:de,placeholder:"Seu nome completo",autoComplete:"name",icon:Ew,error:e.name}),_.jsx(Rs,{label:"Telefone",name:"phone",type:"tel",value:n.phone,onChange:de,placeholder:"(00) 0 0000-0000",autoComplete:"tel",inputMode:"numeric",maxLength:16,icon:g9,error:e.phone}),_.jsx(Rs,{label:"E-mail",name:"email",type:"email",value:n.email,onChange:de,placeholder:"voce@email.com",autoComplete:"email",disabled:A,icon:oR,error:e.email}),A?null:_.jsxs(_.Fragment,{children:[_.jsx(Rs,{label:_.jsxs(_.Fragment,{children:["Senha ",_.jsx("span",{className:"required-star",children:"*"})]}),name:"password",type:"password",value:n.password,onChange:de,placeholder:"Mín. 6 caracteres",autoComplete:"new-password",icon:R_,error:e.password}),_.jsx(Rs,{label:"Confirmar senha",name:"confirmPassword",type:"password",value:n.confirmPassword,onChange:de,placeholder:"Repita a senha",autoComplete:"new-password",icon:R_,error:e.confirmPassword})]})]}):t===1?_.jsxs(_.Fragment,{children:[_.jsx(Rs,{label:"CEP",name:"cep",value:n.cep,onChange:de,placeholder:"00000-000",inputMode:"numeric",maxLength:9,icon:Dg,error:e.cep}),Z?_.jsx("p",{className:`register-field-note ${pe?"is-loading":""}`,children:Z}):null,_.jsx(Rs,{label:"Bairro",name:"neighborhood",value:n.neighborhood,onChange:de,placeholder:"Seu bairro",icon:Dg,error:e.neighborhood}),_.jsx(Rs,{label:"Cidade",name:"city",value:n.city,onChange:de,placeholder:"Cidade",icon:t9,error:e.city}),_.jsx(Rs,{label:"Rua",name:"street",value:n.street,onChange:de,placeholder:"Rua e complemento",icon:Dg,error:e.street}),_.jsx(Rs,{label:"Número da casa",name:"houseNumber",value:n.houseNumber,onChange:de,placeholder:"Número da casa",icon:l9,error:e.houseNumber})]}):_.jsxs(_.Fragment,{children:[_.jsx(Vg,{label:"Estado civil",name:"maritalStatus",value:n.maritalStatus,onChange:de,placeholder:"Selecione",options:["Solteiro(a)","Casado(a)","Divorciado(a)","Viúvo(a)"],icon:cR,error:e.maritalStatus}),_.jsx(Vg,{label:"Gênero",name:"gender",value:n.gender,onChange:de,placeholder:"Selecione",options:["Masculino","Feminino","Outro"],icon:Ew,error:e.gender}),_.jsx(Vg,{label:_.jsxs(_.Fragment,{children:["Timbre vocal ",_.jsx("span",{className:"required-star",children:"*"})]}),name:"vocalRange",value:n.vocalRange,onChange:de,placeholder:"Selecione o timbre",options:["Soprano","Mezzo-soprano","Contralto","Tenor","Barítono","Baixo"],icon:m9,error:e.vocalRange}),_.jsxs("label",{className:"register-field-group register-avatar-field",children:[_.jsx("span",{className:"register-field-label",children:"Foto de perfil"}),_.jsxs("span",{className:"register-avatar-shell",children:[_.jsx("span",{className:"register-avatar-preview",children:s?_.jsx("img",{src:s,alt:"Avatar do integrante"}):_.jsx("span",{className:"register-avatar-fallback",children:n.name?n.name.slice(0,1).toUpperCase():"V"})}),_.jsxs("span",{className:"register-avatar-copy",children:[_.jsx("strong",{children:"Adicione uma foto"}),_.jsx("small",{children:"Escolha uma imagem clara e ajuste o enquadramento antes de salvar."})]}),_.jsxs("span",{className:"register-avatar-action",children:[_.jsx(i9,{size:18,strokeWidth:2.2}),"Escolher e ajustar"]})]}),_.jsx("input",{type:"file",accept:"image/*",className:"hidden-input",onChange:f})]})]});return _.jsxs("div",{className:"page page-register page-register-modern",children:[_.jsx("img",{className:"page-bg register-bg-image",src:ov,alt:""}),_.jsx("div",{className:"register-bg-overlay"}),_.jsxs("div",{className:"register-content",children:[_.jsxs("div",{className:"register-topbar",children:[_.jsx("button",{className:"register-back-btn",type:"button",onClick:C,"aria-label":"Voltar",children:_.jsx(Z6,{size:20,strokeWidth:2.4})}),_.jsxs("div",{className:"register-heading",children:[_.jsx("span",{className:"register-eyebrow",children:"Criar conta"}),_.jsx("h1",{children:H.title}),_.jsx("p",{children:H.description})]})]}),_.jsx("div",{className:"register-steps-bar",children:ou.map((x,I)=>_.jsxs("div",{className:`register-step-pill ${I===t?"is-active":""} ${I<t?"is-done":""}`,children:[_.jsx("span",{children:I+1}),_.jsx("small",{children:x.id})]},x.id))}),_.jsx("div",{className:"register-form-scroll",children:_.jsxs("div",{className:"register-form-stack",children:[S?_.jsx("p",{className:"register-status-message",children:S}):null,N()]})}),_.jsxs("div",{className:"register-bottom-bar",children:[_.jsxs("span",{className:"register-progress-copy",children:["Etapa ",t+1," de ",ou.length]}),_.jsxs("div",{className:"register-actions-row",children:[t>0?_.jsx("button",{type:"button",className:"register-secondary-btn",onClick:C,disabled:E,children:"Voltar"}):null,_.jsxs("button",{type:"button",className:"register-primary-btn",onClick:R,disabled:E,children:[E?"Salvando...":t===ou.length-1?"Finalizar cadastro":"Continuar",_.jsx(sR,{size:18,strokeWidth:2.4})]})]}),_.jsxs("div",{className:"register-help-stack",children:[_.jsx("img",{className:"register-ad-logo",src:uR,alt:"Assembleia de Deus"}),_.jsxs("button",{type:"button",className:"register-help-btn",disabled:E,children:[_.jsx(rR,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})]})]})}const sj="/acesso-interno-admin";function cu(n){switch(n){case"auth/email-already-in-use":return"Esse e-mail já está em uso.";case"auth/invalid-email":return"Informe um e-mail válido.";case"auth/user-disabled":return"Essa conta está desativada.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"E-mail ou senha inválidos.";case"auth/weak-password":return"A senha precisa ter pelo menos 6 caracteres.";case"auth/network-request-failed":return"Falha de conexão. Verifique sua internet e tente novamente.";case"auth/popup-closed-by-user":return"O login com Google foi fechado antes da conclusão.";case"auth/cancelled-popup-request":return"Já existe uma janela de login aberta. Conclua ou feche a anterior.";case"auth/account-exists-with-different-credential":return"Esse e-mail já está vinculado a outro método de acesso.";default:return"Não foi possível concluir a autenticação agora."}}function rj(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function aj(){var n;return(n=Dn.currentUser)==null?void 0:n.providerData.some(e=>e.providerId==="google.com")}function oj(n){return n===q2?H2:n}function lj(){const n=typeof window<"u"&&window.location.pathname.toLowerCase().startsWith(sj),[e,t]=se.useState("login"),[s,a]=se.useState(0),[l,u]=se.useState("Maria Clara"),[f,p]=se.useState(""),[g,E]=se.useState(""),[S,A]=se.useState("member"),[V,H]=se.useState(""),[Z,Y]=se.useState([]),[pe,ue]=se.useState(""),[le,Ee]=se.useState(null),[Me,de]=se.useState(""),[C,R]=se.useState(!1),[N,x]=se.useState({...Sg}),[I,O]=se.useState({}),[D,Oe]=se.useState(!1),[Ce,U]=se.useState(""),[re,_e]=se.useState(!1),[Ne,Fe]=se.useState([]),[P,J]=se.useState(!1),ce=async()=>{J(!0);try{const k=await $2();Fe(k);const K=await K2();K.failed>0?U(`Lista carregada. ${K.synced} perfil(is) sincronizado(s) no diretório e ${K.failed} com pendência.`):U("")}catch{U("Não foi possível carregar a lista de membros agora.")}finally{J(!1)}},fe=k=>{const K=Dn.currentUser,ae=K!=null&&K.phoneNumber?rj(K.phoneNumber):"";x(oe=>({...oe,loginEmail:(K==null?void 0:K.email)||oe.loginEmail,name:(k==null?void 0:k.name)??oe.name,phone:(k==null?void 0:k.phone)??ae??oe.phone,email:(k==null?void 0:k.email)??(K==null?void 0:K.email)??oe.email,password:k==null?void 0:k.password,confirmPassword:k==null?void 0:k.confirmPassword,cep:(k==null?void 0:k.cep)??oe.cep,neighborhood:(k==null?void 0:k.neighborhood)??oe.neighborhood,city:(k==null?void 0:k.city)??oe.city,street:(k==null?void 0:k.street)??oe.street,houseNumber:(k==null?void 0:k.houseNumber)??oe.houseNumber,maritalStatus:(k==null?void 0:k.maritalStatus)??oe.maritalStatus,gender:(k==null?void 0:k.gender)??oe.gender,vocalRange:(k==null?void 0:k.vocalRange)??oe.vocalRange,availability:(k==null?void 0:k.availability)??oe.availability})),ue((K==null?void 0:K.photoURL)||""),Ee(null),de(""),R(!1)};se.useEffect(()=>{const k=qD(Dn,async K=>{var ae;if(!K){_e(!1),u("Maria Clara"),p(""),E(""),A("member"),H(""),Y([]),Fe([]),t("login"),Ee(null),de(""),R(!1);return}try{const oe=await Q2(K.uid),qe=await K.getIdTokenResult(),yt=Tr(typeof qe.claims.accountLevel=="string"?qe.claims.accountLevel:oe==null?void 0:oe.accountLevel),nt=typeof qe.claims.leadershipRole=="string"?qe.claims.leadershipRole:(oe==null?void 0:oe.leadershipRole)||"";if(!oe){const qt=K.providerData.some(Xt=>Xt.providerId==="google.com");_e(!0),a(0),O({}),fe({name:K.displayName||"",email:K.email||"",password:"",confirmPassword:""}),U(qt?"Encontramos nome, e-mail e foto da sua conta Google. Confirme e complete o restante do cadastro.":"Sua conta foi autenticada, mas o perfil do ministério ainda precisa ser concluído."),se.startTransition(()=>{t("register")});return}const vt=oe.name||K.displayName||((ae=K.email)==null?void 0:ae.split("@")[0])||"Integrante do vocal";_e(!1),u(vt),p(oe.gender||""),E(oe.vocalRange||""),A(yt),H(nt),Y(hr(oe.permissions,yt)),ue(oe.avatarDataUrl||K.photoURL||""),Ee(null),de(""),R(!1),U(""),n&&yt==="administration"&&await ce(),se.startTransition(()=>{t(n&&yt==="administration"?"admin":"home")})}catch{U("Sua sessão foi iniciada, mas o perfil não pôde ser carregado agora.")}});return()=>{k()}},[n]);const Ae=k=>{const{name:K,value:ae}=k.target;x(oe=>({...oe,[K]:ae})),O(oe=>({...oe,[K]:""}))},Re=()=>{if(Dn.currentUser){rg(Dn).finally(()=>{_e(!1),ue(""),Ee(null),de(""),R(!1),Y([]),x({...Sg}),se.startTransition(()=>{t("login"),U(""),O({})})});return}_e(!1),se.startTransition(()=>{t("login"),U(""),O({})})},ze=()=>{_e(!1),Ee(null),de(""),R(!1),se.startTransition(()=>{t("register"),a(0),U(""),O({})})},lt=async()=>{Oe(!0),U("");try{await rg(Dn),_e(!1),p(""),E(""),A("member"),H(""),Y([]),Fe([]),Ee(null),de(""),R(!1),x(k=>({...k,loginPassword:""})),a(0),O({})}catch{U("Não foi possível encerrar a sessão agora.")}finally{Oe(!1)}},Ve=async k=>{const K=await Z2(k);de(K),R(!0)},Sn=k=>{var ae;const K=(ae=k.target.files)==null?void 0:ae[0];k.target.value="",K&&Ve(K).catch(oe=>{U(oe instanceof Error?oe.message:"Não foi possível abrir o editor de foto agora.")})},di=async()=>{const k=N.loginEmail.trim().toLowerCase();if(!k.includes("@")){O(K=>({...K,loginEmail:"Use o e-mail cadastrado para entrar com Firebase."}));return}Oe(!0),U("");try{await a1(Dn,k,N.loginPassword),x(K=>({...K,loginPassword:""}))}catch(K){const ae=K instanceof Error&&"code"in K?String(K.code):"",oe=cu(ae);O(qe=>({...qe,loginPassword:oe}))}finally{Oe(!1)}},un=async()=>{const k=new or;k.setCustomParameters({prompt:"select_account"}),Oe(!0),U(""),O({});try{await lM(Dn,k),x(K=>({...K,loginPassword:""}))}catch(K){const ae=K instanceof Error&&"code"in K?String(K.code):"";U(cu(ae))}finally{Oe(!1)}},fi=async()=>{Oe(!0),U("");try{const k=Dn.currentUser,K=re&&k?k:(await r1(Dn,N.email.trim().toLowerCase(),N.password)).user,ae=await K5(K,N,le),oe=await K.getIdTokenResult(),qe=Tr(typeof oe.claims.accountLevel=="string"?oe.claims.accountLevel:ae.accountLevel);_e(!1),u(ae.name),p(ae.gender||""),E(ae.vocalRange||""),A(qe),H(typeof oe.claims.leadershipRole=="string"?oe.claims.leadershipRole:ae.leadershipRole||""),Y(hr(ae.permissions,qe)),ue(ae.avatarDataUrl||""),Ee(null),de(""),R(!1),U(""),x({...Sg,loginEmail:ae.email}),se.startTransition(()=>{t(n&&qe==="administration"?"admin":"home")})}catch(k){const K=k instanceof Error&&"code"in k?String(k.code):"",ae=cu(K);K==="auth/email-already-in-use"||K==="auth/invalid-email"?O(oe=>({...oe,email:ae})):K==="auth/weak-password"?O(oe=>({...oe,password:ae})):U(ae)}finally{Oe(!1)}},wn=async(k,K)=>{if(Dn.currentUser&&await rg(Dn),k!==sw){U("Usuário administrativo inválido.");return}Oe(!0),U("");const ae=oj(K);try{const oe=await a1(Dn,rw,ae),qe=await aw(oe.user);u(qe.name),A("administration"),Y(hr(qe.permissions,"administration")),await ce(),se.startTransition(()=>{t("admin")})}catch(oe){const qe=oe instanceof Error&&"code"in oe?String(oe.code):"";if(!(k===sw&&K===q2&&(qe==="auth/user-not-found"||qe==="auth/invalid-credential"))){U(cu(qe)),Oe(!1);return}try{const nt=await r1(Dn,rw,H2),vt=await aw(nt.user);u(vt.name),A("administration"),Y(hr(vt.permissions,"administration")),await ce(),U("Conta administrativa inicial criada. Troque a senha assim que entrar."),se.startTransition(()=>{t("admin")})}catch(nt){const vt=nt instanceof Error&&"code"in nt?String(nt.code):"";U(vt==="auth/email-already-in-use"?"A conta administrativa já existe. Use a senha atual definida para esse acesso.":cu(vt))}}finally{Oe(!1)}},Ii=async k=>{const K=Dn.currentUser;if(!K){U("A sessão administrativa não está ativa.");return}Oe(!0),U("");try{await jD(K,k),U("Senha administrativa atualizada com sucesso.")}catch{U("Não foi possível atualizar a senha agora. Faça login novamente e tente outra vez.")}finally{Oe(!1)}},hn=async k=>{Oe(!0),U("");try{await Y5(k.uid,k),await ce(),U("Conta atualizada com sucesso.")}catch{U("Não foi possível salvar as alterações desse membro.")}finally{Oe(!1)}};let B;return n&&e!=="register"?e==="admin"&&S==="administration"?B=_.jsx(I9,{adminName:l,members:Ne,isLoading:P,isSaving:D,statusMessage:Ce,onRefresh:ce,onSaveMember:hn,onChangeAdminPassword:Ii,onSignOut:lt}):B=_.jsx(C9,{onAdminLogin:wn,isSubmitting:D,statusMessage:Ce}):e==="home"?B=_.jsx(W9,{memberName:l,memberGender:f,memberVocalRange:g,accountLevel:S,leadershipRole:V,permissions:Z,onBackToAuth:lt}):e==="register"?B=_.jsx(ij,{form:N,errors:I,registerStep:s,avatarPreview:pe,onFieldChange:Ae,onErrorsChange:O,onStepChange:a,onAvatarChange:Sn,onOpenLogin:Re,onRegisterFinish:fi,isSubmitting:D,statusMessage:Ce,profileCompletionMode:re,googleProfileMode:!!(re&&aj())}):B=_.jsx(Q9,{form:N,errors:I,onFieldChange:Ae,onErrorsChange:O,onLogin:di,onGoogleLogin:un,onOpenRegister:ze,isSubmitting:D,statusMessage:Ce}),_.jsxs("div",{className:"app-shell",children:[B,_.jsx(nR,{open:C,imageSrc:Me,title:"Ajuste sua foto",description:"Corte, aproxime, gire e ajuste a imagem antes de salvar no cadastro.",onClose:()=>{R(!1),de("")},onApply:async k=>{ue(k),Ee(k),R(!1),de(""),U("")}})]})}function cj(){return _.jsx(lj,{})}const fR=document.getElementById("root");if(!fR)throw new Error("Root element #root was not found.");JI.createRoot(fR).render(_.jsx(se.StrictMode,{children:_.jsx(cj,{})}));
