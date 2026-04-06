(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function A_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gp={exports:{}},Jc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function B2(){if(AT)return Jc;AT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return Jc.Fragment=e,Jc.jsx=t,Jc.jsxs=t,Jc}var CT;function F2(){return CT||(CT=1,Gp.exports=B2()),Gp.exports}var _=F2(),Kp={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT;function q2(){if(RT)return Pe;RT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),A=Symbol.iterator;function V(P){return P===null||typeof P!="object"?null:(P=A&&P[A]||P["@@iterator"],typeof P=="function"?P:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Y={};function pe(P,J,ce){this.props=P,this.context=J,this.refs=Y,this.updater=ce||q}pe.prototype.isReactComponent={},pe.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},pe.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ue(){}ue.prototype=pe.prototype;function oe(P,J,ce){this.props=P,this.context=J,this.refs=Y,this.updater=ce||q}var Ee=oe.prototype=new ue;Ee.constructor=oe,Z(Ee,pe.prototype),Ee.isPureReactComponent=!0;var Oe=Array.isArray;function fe(){}var C={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function N(P,J,ce){var de=ce.ref;return{$$typeof:n,type:P,key:J,ref:de!==void 0?de:null,props:ce}}function D(P,J){return N(P.type,J,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return J[ce]})}var x=/\/+/g;function Me(P,J){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):J.toString(36)}function Ie(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(fe,fe):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,J,ce,de,be){var Ce=typeof P;(Ce==="undefined"||Ce==="boolean")&&(P=null);var Ae=!1;if(P===null)Ae=!0;else switch(Ce){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(P.$$typeof){case n:case e:Ae=!0;break;case E:return Ae=P._init,B(Ae(P._payload),J,ce,de,be)}}if(Ae)return be=be(P),Ae=de===""?"."+Me(P,0):de,Oe(be)?(ce="",Ae!=null&&(ce=Ae.replace(x,"$&/")+"/"),B(be,J,ce,"",function(Pt){return Pt})):be!=null&&(I(be)&&(be=D(be,ce+(be.key==null||P&&P.key===be.key?"":(""+be.key).replace(x,"$&/")+"/")+Ae)),J.push(be)),1;Ae=0;var mt=de===""?".":de+":";if(Oe(P))for(var nt=0;nt<P.length;nt++)de=P[nt],Ce=mt+Me(de,nt),Ae+=B(de,J,ce,Ce,be);else if(nt=V(P),typeof nt=="function")for(P=nt.call(P),nt=0;!(de=P.next()).done;)de=de.value,Ce=mt+Me(de,nt++),Ae+=B(de,J,ce,Ce,be);else if(Ce==="object"){if(typeof P.then=="function")return B(Ie(P),J,ce,de,be);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function re(P,J,ce){if(P==null)return P;var de=[],be=0;return B(P,de,"","",function(Ce){return J.call(ce,Ce,be++)}),de}function _e(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var Be=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Fe={map:re,forEach:function(P,J,ce){re(P,function(){J.apply(this,arguments)},ce)},count:function(P){var J=0;return re(P,function(){J++}),J},toArray:function(P){return re(P,function(J){return J})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Pe.Activity=S,Pe.Children=Fe,Pe.Component=pe,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=oe,Pe.StrictMode=s,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return C.H.useMemoCache(P)}},Pe.cache=function(P){return function(){return P.apply(null,arguments)}},Pe.cacheSignal=function(){return null},Pe.cloneElement=function(P,J,ce){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var de=Z({},P.props),be=P.key;if(J!=null)for(Ce in J.key!==void 0&&(be=""+J.key),J)!R.call(J,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&J.ref===void 0||(de[Ce]=J[Ce]);var Ce=arguments.length-2;if(Ce===1)de.children=ce;else if(1<Ce){for(var Ae=Array(Ce),mt=0;mt<Ce;mt++)Ae[mt]=arguments[mt+2];de.children=Ae}return N(P.type,be,de)},Pe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Pe.createElement=function(P,J,ce){var de,be={},Ce=null;if(J!=null)for(de in J.key!==void 0&&(Ce=""+J.key),J)R.call(J,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(be[de]=J[de]);var Ae=arguments.length-2;if(Ae===1)be.children=ce;else if(1<Ae){for(var mt=Array(Ae),nt=0;nt<Ae;nt++)mt[nt]=arguments[nt+2];be.children=mt}if(P&&P.defaultProps)for(de in Ae=P.defaultProps,Ae)be[de]===void 0&&(be[de]=Ae[de]);return N(P,Ce,be)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(P){return{$$typeof:f,render:P}},Pe.isValidElement=I,Pe.lazy=function(P){return{$$typeof:E,_payload:{_status:-1,_result:P},_init:_e}},Pe.memo=function(P,J){return{$$typeof:g,type:P,compare:J===void 0?null:J}},Pe.startTransition=function(P){var J=C.T,ce={};C.T=ce;try{var de=P(),be=C.S;be!==null&&be(ce,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(fe,Be)}catch(Ce){Be(Ce)}finally{J!==null&&ce.types!==null&&(J.types=ce.types),C.T=J}},Pe.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Pe.use=function(P){return C.H.use(P)},Pe.useActionState=function(P,J,ce){return C.H.useActionState(P,J,ce)},Pe.useCallback=function(P,J){return C.H.useCallback(P,J)},Pe.useContext=function(P){return C.H.useContext(P)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(P,J){return C.H.useDeferredValue(P,J)},Pe.useEffect=function(P,J){return C.H.useEffect(P,J)},Pe.useEffectEvent=function(P){return C.H.useEffectEvent(P)},Pe.useId=function(){return C.H.useId()},Pe.useImperativeHandle=function(P,J,ce){return C.H.useImperativeHandle(P,J,ce)},Pe.useInsertionEffect=function(P,J){return C.H.useInsertionEffect(P,J)},Pe.useLayoutEffect=function(P,J){return C.H.useLayoutEffect(P,J)},Pe.useMemo=function(P,J){return C.H.useMemo(P,J)},Pe.useOptimistic=function(P,J){return C.H.useOptimistic(P,J)},Pe.useReducer=function(P,J,ce){return C.H.useReducer(P,J,ce)},Pe.useRef=function(P){return C.H.useRef(P)},Pe.useState=function(P){return C.H.useState(P)},Pe.useSyncExternalStore=function(P,J,ce){return C.H.useSyncExternalStore(P,J,ce)},Pe.useTransition=function(){return C.H.useTransition()},Pe.version="19.2.4",Pe}var IT;function C_(){return IT||(IT=1,Kp.exports=q2()),Kp.exports}var se=C_();const ao=A_(se);var Wp={exports:{}},eu={},Yp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT;function H2(){return NT||(NT=1,(function(n){function e(B,re){var _e=B.length;B.push(re);e:for(;0<_e;){var Be=_e-1>>>1,Fe=B[Be];if(0<a(Fe,re))B[Be]=re,B[_e]=Fe,_e=Be;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var re=B[0],_e=B.pop();if(_e!==re){B[0]=_e;e:for(var Be=0,Fe=B.length,P=Fe>>>1;Be<P;){var J=2*(Be+1)-1,ce=B[J],de=J+1,be=B[de];if(0>a(ce,_e))de<Fe&&0>a(be,ce)?(B[Be]=be,B[de]=_e,Be=de):(B[Be]=ce,B[J]=_e,Be=J);else if(de<Fe&&0>a(be,_e))B[Be]=be,B[de]=_e,Be=de;else break e}}return re}function a(B,re){var _e=B.sortIndex-re.sortIndex;return _e!==0?_e:B.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var p=[],g=[],E=1,S=null,A=3,V=!1,q=!1,Z=!1,Y=!1,pe=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;function Ee(B){for(var re=t(g);re!==null;){if(re.callback===null)s(g);else if(re.startTime<=B)s(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(g)}}function Oe(B){if(Z=!1,Ee(B),!q)if(t(p)!==null)q=!0,fe||(fe=!0,O());else{var re=t(g);re!==null&&Ie(Oe,re.startTime-B)}}var fe=!1,C=-1,R=5,N=-1;function D(){return Y?!0:!(n.unstable_now()-N<R)}function I(){if(Y=!1,fe){var B=n.unstable_now();N=B;var re=!0;try{e:{q=!1,Z&&(Z=!1,ue(C),C=-1),V=!0;var _e=A;try{t:{for(Ee(B),S=t(p);S!==null&&!(S.expirationTime>B&&D());){var Be=S.callback;if(typeof Be=="function"){S.callback=null,A=S.priorityLevel;var Fe=Be(S.expirationTime<=B);if(B=n.unstable_now(),typeof Fe=="function"){S.callback=Fe,Ee(B),re=!0;break t}S===t(p)&&s(p),Ee(B)}else s(p);S=t(p)}if(S!==null)re=!0;else{var P=t(g);P!==null&&Ie(Oe,P.startTime-B),re=!1}}break e}finally{S=null,A=_e,V=!1}re=void 0}}finally{re?O():fe=!1}}}var O;if(typeof oe=="function")O=function(){oe(I)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Me=x.port2;x.port1.onmessage=I,O=function(){Me.postMessage(null)}}else O=function(){pe(I,0)};function Ie(B,re){C=pe(function(){B(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(B){switch(A){case 1:case 2:case 3:var re=3;break;default:re=A}var _e=A;A=re;try{return B()}finally{A=_e}},n.unstable_requestPaint=function(){Y=!0},n.unstable_runWithPriority=function(B,re){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var _e=A;A=B;try{return re()}finally{A=_e}},n.unstable_scheduleCallback=function(B,re,_e){var Be=n.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?Be+_e:Be):_e=Be,B){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=_e+Fe,B={id:E++,callback:re,priorityLevel:B,startTime:_e,expirationTime:Fe,sortIndex:-1},_e>Be?(B.sortIndex=_e,e(g,B),t(p)===null&&B===t(g)&&(Z?(ue(C),C=-1):Z=!0,Ie(Oe,_e-Be))):(B.sortIndex=Fe,e(p,B),q||V||(q=!0,fe||(fe=!0,O()))),B},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(B){var re=A;return function(){var _e=A;A=re;try{return B.apply(this,arguments)}finally{A=_e}}}})(Qp)),Qp}var xT;function G2(){return xT||(xT=1,Yp.exports=H2()),Yp.exports}var $p={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT;function K2(){if(DT)return kn;DT=1;var n=C_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:S==null?null:""+S,children:p,containerInfo:g,implementation:E}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,kn.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,E)},kn.flushSync=function(p){var g=u.T,E=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=g,s.p=E,s.d.f()}},kn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},kn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},kn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:V}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:A,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},kn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=f(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},kn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=f(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},kn.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=f(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},kn.requestFormReset=function(p){s.d.r(p)},kn.unstable_batchedUpdates=function(p,g){return p(g)},kn.useFormState=function(p,g,E){return u.H.useFormState(p,g,E)},kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},kn.version="19.2.4",kn}var MT;function W2(){if(MT)return $p.exports;MT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$p.exports=K2(),$p.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OT;function Y2(){if(OT)return eu;OT=1;var n=G2(),e=C_(),t=W2();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function p(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),i;if(m===c)return p(d),r;m=m.sibling}throw Error(s(188))}if(o.return!==c.return)o=d,c=m;else{for(var v=!1,w=d.child;w;){if(w===o){v=!0,o=d,c=m;break}if(w===c){v=!0,c=d,o=m;break}w=w.sibling}if(!v){for(w=m.child;w;){if(w===o){v=!0,o=m,c=d;break}if(w===c){v=!0,c=m,o=d;break}w=w.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function E(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=E(i),r!==null)return r;i=i.sibling}return null}var S=Object.assign,A=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function O(i){return i===null||typeof i!="object"?null:(i=I&&i[I]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function Me(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Z:return"Fragment";case pe:return"Profiler";case Y:return"StrictMode";case Oe:return"Suspense";case fe:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case q:return"Portal";case oe:return i.displayName||"Context";case ue:return(i._context.displayName||"Context")+".Consumer";case Ee:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case C:return r=i.displayName||null,r!==null?r:Me(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return Me(i(r))}catch{}}return null}var Ie=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},Be=[],Fe=-1;function P(i){return{current:i}}function J(i){0>Fe||(i.current=Be[Fe],Be[Fe]=null,Fe--)}function ce(i,r){Fe++,Be[Fe]=i.current,i.current=r}var de=P(null),be=P(null),Ce=P(null),Ae=P(null);function mt(i,r){switch(ce(Ce,r),ce(be,i),ce(de,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?Y0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=Y0(r),i=Q0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}J(de),ce(de,i)}function nt(){J(de),J(be),J(Ce)}function Pt(i){i.memoizedState!==null&&ce(Ae,i);var r=de.current,o=Q0(r,i.type);r!==o&&(ce(be,i),ce(de,o))}function ci(i){be.current===i&&(J(de),J(be)),Ae.current===i&&(J(Ae),Qc._currentValue=_e)}var ui,hi;function Ut(i){if(ui===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ui=r&&r[1]||"",hi=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ui+i+hi}var Ri=!1;function Yn(i,r){if(!i||Ri)return"";Ri=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch($){var W=$}Reflect.construct(i,[],ne)}else{try{ne.call()}catch($){W=$}i.call(ne.prototype)}}else{try{throw Error()}catch($){W=$}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch($){if($&&W&&typeof $.stack=="string")return[$.stack,W.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),v=m[0],w=m[1];if(v&&w){var M=v.split(`
`),H=w.split(`
`);for(d=c=0;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(c===M.length||d===H.length)for(c=M.length-1,d=H.length-1;1<=c&&0<=d&&M[c]!==H[d];)d--;for(;1<=c&&0<=d;c--,d--)if(M[c]!==H[d]){if(c!==1||d!==1)do if(c--,d--,0>d||M[c]!==H[d]){var X=`
`+M[c].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=c&&0<=d);break}}}finally{Ri=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Ut(o):""}function U(i,r){switch(i.tag){case 26:case 27:case 5:return Ut(i.type);case 16:return Ut("Lazy");case 13:return i.child!==r&&r!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Yn(i.type,!1);case 11:return Yn(i.type.render,!1);case 1:return Yn(i.type,!0);case 31:return Ut("Activity");default:return""}}function k(i){try{var r="",o=null;do r+=U(i,o),o=i,i=i.return;while(i);return r}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var G=Object.prototype.hasOwnProperty,le=n.unstable_scheduleCallback,ae=n.unstable_cancelCallback,qe=n.unstable_shouldYield,pt=n.unstable_requestPaint,Ue=n.unstable_now,lt=n.unstable_getCurrentPriorityLevel,Qn=n.unstable_ImmediatePriority,pn=n.unstable_UserBlockingPriority,Ht=n.unstable_NormalPriority,Gt=n.unstable_LowPriority,Xt=n.unstable_IdlePriority,Ii=n.log,di=n.unstable_setDisableYieldValue,Zt=null,gt=null;function wn(i){if(typeof Ii=="function"&&di(i),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Zt,i)}catch{}}var _t=Math.clz32?Math.clz32:Ni,Io=Math.log,$i=Math.LN2;function Ni(i){return i>>>=0,i===0?32:31-(Io(i)/$i|0)|0}var On=256,xi=262144,zt=4194304;function fi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function $n(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var d=0,m=i.suspendedLanes,v=i.pingedLanes;i=i.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=fi(c):(v&=w,v!==0?d=fi(v):o||(o=w&~i,o!==0&&(d=fi(o))))):(w=c&~m,w!==0?d=fi(w):v!==0?d=fi(v):o||(o=c&~i,o!==0&&(d=fi(o)))),d===0?0:r!==0&&r!==d&&(r&m)===0&&(m=d&-d,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:d}function Lt(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Jt(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Di(){var i=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),i}function qn(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function ps(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Rr(i,r,o,c,d,m){var v=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,M=i.expirationTimes,H=i.hiddenUpdates;for(o=v&~o;0<o;){var X=31-_t(o),ne=1<<X;w[X]=0,M[X]=-1;var W=H[X];if(W!==null)for(H[X]=null,X=0;X<W.length;X++){var $=W[X];$!==null&&($.lane&=-536870913)}o&=~ne}c!==0&&qs(i,c,0),m!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=m&~(v&~r))}function qs(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-_t(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&261930}function Hn(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-_t(o),d=1<<c;d&r|i[c]&r&&(i[c]|=r),o&=~d}}function Na(i,r){var o=r&-r;return o=(o&42)!==0?1:Hs(o),(o&(i.suspendedLanes|r))!==0?0:o}function Hs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Xi(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function No(){var i=re.p;return i!==0?i:(i=window.event,i===void 0?32:yT(i.type))}function Vt(i,r){var o=re.p;try{return re.p=i,r()}finally{re.p=o}}var mi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+mi,en="__reactProps$"+mi,Mi="__reactContainer$"+mi,Gs="__reactEvents$"+mi,xo="__reactListeners$"+mi,K="__reactHandles$"+mi,De="__reactResources$"+mi,it="__reactMarker$"+mi;function Mt(i){delete i[Bt],delete i[en],delete i[Gs],delete i[xo],delete i[K]}function jt(i){var r=i[Bt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Mi]||o[Bt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=nT(i);i!==null;){if(o=i[Bt])return o;i=nT(i)}return r}i=o,o=i.parentNode}return null}function Oi(i){if(i=i[Bt]||i[Mi]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function pi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function gs(i){var r=i[De];return r||(r=i[De]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function tn(i){i[it]=!0}var nc=new Set,ic={};function _s(i,r){ys(i,r),ys(i+"Capture",r)}function ys(i,r){for(ic[i]=r,i=0;i<r.length;i++)nc.add(r[i])}var sc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rc={},ac={};function th(i){return G.call(ac,i)?!0:G.call(rc,i)?!1:sc.test(i)?ac[i]=!0:(rc[i]=!0,!1)}function Do(i,r,o){if(th(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function gi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function nn(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}function gn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ir(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function oc(i,r,o){var c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,m=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function ht(i){if(!i._valueTracker){var r=Ir(i)?"checked":"value";i._valueTracker=oc(i,r,""+i[r])}}function xa(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=Ir(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function vs(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Da=/[\n"\\]/g;function Xn(i){return i.replace(Da,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(i,r,o,c,d,m,v,w){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),r!=null?v==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+gn(r)):i.value!==""+gn(r)&&(i.value=""+gn(r)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),r!=null?lc(i,v,gn(r)):o!=null?lc(i,v,gn(o)):c!=null&&i.removeAttribute("value"),d==null&&m!=null&&(i.defaultChecked=!!m),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+gn(w):i.removeAttribute("name")}function nh(i,r,o,c,d,m,v,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){ht(i);return}o=o!=null?""+gn(o):"",r=r!=null?""+gn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=w?i.checked:!!c,i.defaultChecked=!!c,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v),ht(i)}function lc(i,r,o){r==="number"&&vs(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Nr(i,r,o,c){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+gn(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function ih(i,r,o){if(r!=null&&(r=""+gn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+gn(o):""}function xr(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Ie(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=gn(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c),ht(i)}function Zn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var sh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||sh.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function uc(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&o[d]!==c&&cc(i,d,c)}else for(var m in r)r.hasOwnProperty(m)&&cc(i,m,r[m])}function Oo(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(i){return Dr.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function Zi(){}var hc=null;function ki(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Mr=null,Es=null;function Ma(i){var r=Oi(i);if(r&&(i=r.stateNode)){var o=i[en]||null;e:switch(i=r.stateNode,r.type){case"input":if(Mo(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Xn(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var d=c[en]||null;if(!d)throw Error(s(90));Mo(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&xa(c)}break e;case"textarea":ih(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Nr(i,!!o.multiple,r,!1)}}}var Po=!1;function Or(i,r,o){if(Po)return i(r,o);Po=!0;try{var c=i(r);return c}finally{if(Po=!1,(Mr!==null||Es!==null)&&(Zh(),Mr&&(r=Mr,i=Es,Es=Mr=null,Ma(r),i)))for(r=0;r<i.length;r++)Ma(i[r])}}function Ji(i,r){var o=i.stateNode;if(o===null)return null;var c=o[en]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=!1;if(Pi)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{Oa=!1}var Ts=null,dc=null,ka=null;function fc(){if(ka)return ka;var i,r=dc,o=r.length,c,d="value"in Ts?Ts.value:Ts.textContent,m=d.length;for(i=0;i<o&&r[i]===d[i];i++);var v=o-i;for(c=1;c<=v&&r[o-c]===d[m-c];c++);return ka=d.slice(i,1<c?1-c:void 0)}function Pa(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ks(){return!0}function es(){return!1}function bn(i){function r(o,c,d,m,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ks:es,this.isPropagationStopped=es,this}return S(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),r}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=bn(Ws),kr=S({},Ws,{view:0,detail:0}),mc=bn(kr),Pr,Lo,ws,Vo=S({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ws&&(ws&&i.type==="mousemove"?(Pr=i.screenX-ws.screenX,Lo=i.screenY-ws.screenY):Lo=Pr=0,ws=i),Pr)},movementY:function(i){return"movementY"in i?i.movementY:Lo}}),pc=bn(Vo),La=S({},Vo,{dataTransfer:0}),ah=bn(La),oh=S({},kr,{relatedTarget:0}),Va=bn(oh),gc=S({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=bn(gc),jo=S({},Ws,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ch=bn(jo),uh=S({},Ws,{data:0}),bs=bn(uh),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=fh[i])?!!r[i]:!1}function Lr(){return mh}var Gn=S({},kr,{key:function(i){if(i.key){var r=hh[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?dh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lr,charCode:function(i){return i.type==="keypress"?Pa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ph=bn(Gn),gh=S({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=bn(gh),h=S({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lr}),y=bn(h),T=S({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=bn(T),z=S({},Vo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Q=bn(z),he=S({},Ws,{newState:0,oldState:0}),Ve=bn(he),Kt=[9,13,27,32],at=Pi&&"CompositionEvent"in window,Ot=null;Pi&&"documentMode"in document&&(Ot=document.documentMode);var Li=Pi&&"TextEvent"in window&&!Ot,As=Pi&&(!at||Ot&&8<Ot&&11>=Ot),ts=" ",ns=!1;function ja(i,r){switch(i){case"keyup":return Kt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zo=!1;function hI(i,r){switch(i){case"compositionend":return Uo(r);case"keypress":return r.which!==32?null:(ns=!0,ts);case"textInput":return i=r.data,i===ts&&ns?null:i;default:return null}}function dI(i,r){if(zo)return i==="compositionend"||!at&&ja(i,r)?(i=fc(),ka=dc=Ts=null,zo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return As&&r.locale!=="ko"?null:r.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rv(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!fI[i.type]:r==="textarea"}function av(i,r,o,c){Mr?Es?Es.push(c):Es=[c]:Mr=c,r=rd(r,"onChange"),0<r.length&&(o=new Ss("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var _c=null,yc=null;function mI(i){F0(i,0)}function _h(i){var r=pi(i);if(xa(r))return i}function ov(i,r){if(i==="change")return r}var lv=!1;if(Pi){var Zf;if(Pi){var Jf="oninput"in document;if(!Jf){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),Jf=typeof cv.oninput=="function"}Zf=Jf}else Zf=!1;lv=Zf&&(!document.documentMode||9<document.documentMode)}function uv(){_c&&(_c.detachEvent("onpropertychange",hv),yc=_c=null)}function hv(i){if(i.propertyName==="value"&&_h(yc)){var r=[];av(r,yc,i,ki(i)),Or(mI,r)}}function pI(i,r,o){i==="focusin"?(uv(),_c=r,yc=o,_c.attachEvent("onpropertychange",hv)):i==="focusout"&&uv()}function gI(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return _h(yc)}function _I(i,r){if(i==="click")return _h(r)}function yI(i,r){if(i==="input"||i==="change")return _h(r)}function vI(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var _i=typeof Object.is=="function"?Object.is:vI;function vc(i,r){if(_i(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!G.call(r,d)||!_i(i[d],r[d]))return!1}return!0}function dv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function fv(i,r){var o=dv(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dv(o)}}function mv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?mv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function pv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=vs(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=vs(i.document)}return r}function em(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var EI=Pi&&"documentMode"in document&&11>=document.documentMode,Bo=null,tm=null,Ec=null,nm=!1;function gv(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nm||Bo==null||Bo!==vs(c)||(c=Bo,"selectionStart"in c&&em(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ec&&vc(Ec,c)||(Ec=c,c=rd(tm,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=Bo)))}function Ua(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Fo={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},im={},_v={};Pi&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function za(i){if(im[i])return im[i];if(!Fo[i])return i;var r=Fo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in _v)return im[i]=r[o];return i}var yv=za("animationend"),vv=za("animationiteration"),Ev=za("animationstart"),TI=za("transitionrun"),SI=za("transitionstart"),wI=za("transitioncancel"),Tv=za("transitionend"),Sv=new Map,sm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sm.push("scrollEnd");function is(i,r){Sv.set(i,r),_s(r,[i])}var yh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},Vi=[],qo=0,rm=0;function vh(){for(var i=qo,r=rm=qo=0;r<i;){var o=Vi[r];Vi[r++]=null;var c=Vi[r];Vi[r++]=null;var d=Vi[r];Vi[r++]=null;var m=Vi[r];if(Vi[r++]=null,c!==null&&d!==null){var v=c.pending;v===null?d.next=d:(d.next=v.next,v.next=d),c.pending=d}m!==0&&wv(o,d,m)}}function Eh(i,r,o,c){Vi[qo++]=i,Vi[qo++]=r,Vi[qo++]=o,Vi[qo++]=c,rm|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function am(i,r,o,c){return Eh(i,r,o,c),Th(i)}function Ba(i,r){return Eh(i,null,null,r),Th(i)}function wv(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=i.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(d=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,d&&r!==null&&(d=31-_t(o),i=m.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=o|536870912),m):null}function Th(i){if(50<Fc)throw Fc=0,pp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ho={};function bI(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(i,r,o,c){return new bI(i,r,o,c)}function om(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Qs(i,r){var o=i.alternate;return o===null?(o=yi(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function bv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Sh(i,r,o,c,d,m){var v=0;if(c=i,typeof i=="function")om(i)&&(v=1);else if(typeof i=="string")v=N2(i,o,de.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=yi(31,o,r,d),i.elementType=N,i.lanes=m,i;case Z:return Fa(o.children,d,m,r);case Y:v=8,d|=24;break;case pe:return i=yi(12,o,r,d|2),i.elementType=pe,i.lanes=m,i;case Oe:return i=yi(13,o,r,d),i.elementType=Oe,i.lanes=m,i;case fe:return i=yi(19,o,r,d),i.elementType=fe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case oe:v=10;break e;case ue:v=9;break e;case Ee:v=11;break e;case C:v=14;break e;case R:v=16,c=null;break e}v=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=yi(v,o,r,d),r.elementType=i,r.type=c,r.lanes=m,r}function Fa(i,r,o,c){return i=yi(7,i,c,r),i.lanes=o,i}function lm(i,r,o){return i=yi(6,i,null,r),i.lanes=o,i}function Av(i){var r=yi(18,null,null,0);return r.stateNode=i,r}function cm(i,r,o){return r=yi(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Cv=new WeakMap;function ji(i,r){if(typeof i=="object"&&i!==null){var o=Cv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:k(r)},Cv.set(i,r),r)}return{value:i,source:r,stack:k(r)}}var Go=[],Ko=0,wh=null,Tc=0,Ui=[],zi=0,Vr=null,Cs=1,Rs="";function $s(i,r){Go[Ko++]=Tc,Go[Ko++]=wh,wh=i,Tc=r}function Rv(i,r,o){Ui[zi++]=Cs,Ui[zi++]=Rs,Ui[zi++]=Vr,Vr=i;var c=Cs;i=Rs;var d=32-_t(c)-1;c&=~(1<<d),o+=1;var m=32-_t(r)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cs=1<<32-_t(r)+d|o<<d|c,Rs=m+i}else Cs=1<<m|o<<d|c,Rs=i}function um(i){i.return!==null&&($s(i,1),Rv(i,1,0))}function hm(i){for(;i===wh;)wh=Go[--Ko],Go[Ko]=null,Tc=Go[--Ko],Go[Ko]=null;for(;i===Vr;)Vr=Ui[--zi],Ui[zi]=null,Rs=Ui[--zi],Ui[zi]=null,Cs=Ui[--zi],Ui[zi]=null}function Iv(i,r){Ui[zi++]=Cs,Ui[zi++]=Rs,Ui[zi++]=Vr,Cs=r.id,Rs=r.overflow,Vr=i}var An=null,Ct=null,Xe=!1,jr=null,Bi=!1,dm=Error(s(519));function Ur(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sc(ji(r,i)),dm}function Nv(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[Bt]=i,r[en]=c,o){case"dialog":Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":case"embed":Ge("load",r);break;case"video":case"audio":for(o=0;o<Hc.length;o++)Ge(Hc[o],r);break;case"source":Ge("error",r);break;case"img":case"image":case"link":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"input":Ge("invalid",r),nh(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ge("invalid",r);break;case"textarea":Ge("invalid",r),xr(r,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||K0(r.textContent,o)?(c.popover!=null&&(Ge("beforetoggle",r),Ge("toggle",r)),c.onScroll!=null&&Ge("scroll",r),c.onScrollEnd!=null&&Ge("scrollend",r),c.onClick!=null&&(r.onclick=Zi),r=!0):r=!1,r||Ur(i,!0)}function xv(i){for(An=i.return;An;)switch(An.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:An=An.return}}function Wo(i){if(i!==An)return!1;if(!Xe)return xv(i),Xe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||xp(i.type,i.memoizedProps)),o=!o),o&&Ct&&Ur(i),xv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));Ct=tT(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));Ct=tT(i)}else r===27?(r=Ct,Jr(i.type)?(i=Pp,Pp=null,Ct=i):Ct=r):Ct=An?qi(i.stateNode.nextSibling):null;return!0}function qa(){Ct=An=null,Xe=!1}function fm(){var i=jr;return i!==null&&(ni===null?ni=i:ni.push.apply(ni,i),jr=null),i}function Sc(i){jr===null?jr=[i]:jr.push(i)}var mm=P(null),Ha=null,Xs=null;function zr(i,r,o){ce(mm,r._currentValue),r._currentValue=o}function Zs(i){i._currentValue=mm.current,J(mm)}function pm(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function gm(i,r,o,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var m=d.dependencies;if(m!==null){var v=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var M=0;M<r.length;M++)if(w.context===r[M]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),pm(m.return,o,i),c||(v=null);break e}m=w.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(s(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),pm(v,o,i),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Yo(i,r,o,c){i=null;for(var d=r,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=d.type;_i(d.pendingProps.value,v.value)||(i!==null?i.push(w):i=[w])}}else if(d===Ae.current){if(v=d.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Qc):i=[Qc])}d=d.return}i!==null&&gm(r,i,o,c),r.flags|=262144}function bh(i){for(i=i.firstContext;i!==null;){if(!_i(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ga(i){Ha=i,Xs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Cn(i){return Dv(Ha,i)}function Ah(i,r){return Ha===null&&Ga(i),Dv(i,r)}function Dv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Xs===null){if(i===null)throw Error(s(308));Xs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Xs=Xs.next=r;return o}var AI=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},CI=n.unstable_scheduleCallback,RI=n.unstable_NormalPriority,sn={$$typeof:oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _m(){return{controller:new AI,data:new Map,refCount:0}}function wc(i){i.refCount--,i.refCount===0&&CI(RI,function(){i.controller.abort()})}var bc=null,ym=0,Qo=0,$o=null;function II(i,r){if(bc===null){var o=bc=[];ym=0,Qo=Tp(),$o={status:"pending",value:void 0,then:function(c){o.push(c)}}}return ym++,r.then(Mv,Mv),r}function Mv(){if(--ym===0&&bc!==null){$o!==null&&($o.status="fulfilled");var i=bc;bc=null,Qo=0,$o=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function NI(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Ov=B.S;B.S=function(i,r){g0=Ue(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&II(i,r),Ov!==null&&Ov(i,r)};var Ka=P(null);function vm(){var i=Ka.current;return i!==null?i:wt.pooledCache}function Ch(i,r){r===null?ce(Ka,Ka.current):ce(Ka,r.pool)}function kv(){var i=vm();return i===null?null:{parent:sn._currentValue,pool:i}}var Xo=Error(s(460)),Em=Error(s(474)),Rh=Error(s(542)),Ih={then:function(){}};function Pv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Lv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Zi,Zi),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,jv(i),i;default:if(typeof r.status=="string")r.then(Zi,Zi);else{if(i=wt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,jv(i),i}throw Ya=r,Xo}}function Wa(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ya=o,Xo):o}}var Ya=null;function Vv(){if(Ya===null)throw Error(s(459));var i=Ya;return Ya=null,i}function jv(i){if(i===Xo||i===Rh)throw Error(s(483))}var Zo=null,Ac=0;function Nh(i){var r=Ac;return Ac+=1,Zo===null&&(Zo=[]),Lv(Zo,i,r)}function Cc(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function xh(i,r){throw r.$$typeof===A?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Uv(i){function r(j,L){if(i){var F=j.deletions;F===null?(j.deletions=[L],j.flags|=16):F.push(L)}}function o(j,L){if(!i)return null;for(;L!==null;)r(j,L),L=L.sibling;return null}function c(j){for(var L=new Map;j!==null;)j.key!==null?L.set(j.key,j):L.set(j.index,j),j=j.sibling;return L}function d(j,L){return j=Qs(j,L),j.index=0,j.sibling=null,j}function m(j,L,F){return j.index=F,i?(F=j.alternate,F!==null?(F=F.index,F<L?(j.flags|=67108866,L):F):(j.flags|=67108866,L)):(j.flags|=1048576,L)}function v(j){return i&&j.alternate===null&&(j.flags|=67108866),j}function w(j,L,F,ee){return L===null||L.tag!==6?(L=lm(F,j.mode,ee),L.return=j,L):(L=d(L,F),L.return=j,L)}function M(j,L,F,ee){var Se=F.type;return Se===Z?X(j,L,F.props.children,ee,F.key):L!==null&&(L.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===R&&Wa(Se)===L.type)?(L=d(L,F.props),Cc(L,F),L.return=j,L):(L=Sh(F.type,F.key,F.props,null,j.mode,ee),Cc(L,F),L.return=j,L)}function H(j,L,F,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=cm(F,j.mode,ee),L.return=j,L):(L=d(L,F.children||[]),L.return=j,L)}function X(j,L,F,ee,Se){return L===null||L.tag!==7?(L=Fa(F,j.mode,ee,Se),L.return=j,L):(L=d(L,F),L.return=j,L)}function ne(j,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=lm(""+L,j.mode,F),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return F=Sh(L.type,L.key,L.props,null,j.mode,F),Cc(F,L),F.return=j,F;case q:return L=cm(L,j.mode,F),L.return=j,L;case R:return L=Wa(L),ne(j,L,F)}if(Ie(L)||O(L))return L=Fa(L,j.mode,F,null),L.return=j,L;if(typeof L.then=="function")return ne(j,Nh(L),F);if(L.$$typeof===oe)return ne(j,Ah(j,L),F);xh(j,L)}return null}function W(j,L,F,ee){var Se=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return Se!==null?null:w(j,L,""+F,ee);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case V:return F.key===Se?M(j,L,F,ee):null;case q:return F.key===Se?H(j,L,F,ee):null;case R:return F=Wa(F),W(j,L,F,ee)}if(Ie(F)||O(F))return Se!==null?null:X(j,L,F,ee,null);if(typeof F.then=="function")return W(j,L,Nh(F),ee);if(F.$$typeof===oe)return W(j,L,Ah(j,F),ee);xh(j,F)}return null}function $(j,L,F,ee,Se){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return j=j.get(F)||null,w(L,j,""+ee,Se);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return j=j.get(ee.key===null?F:ee.key)||null,M(L,j,ee,Se);case q:return j=j.get(ee.key===null?F:ee.key)||null,H(L,j,ee,Se);case R:return ee=Wa(ee),$(j,L,F,ee,Se)}if(Ie(ee)||O(ee))return j=j.get(F)||null,X(L,j,ee,Se,null);if(typeof ee.then=="function")return $(j,L,F,Nh(ee),Se);if(ee.$$typeof===oe)return $(j,L,F,Ah(L,ee),Se);xh(L,ee)}return null}function ve(j,L,F,ee){for(var Se=null,st=null,Te=L,ze=L=0,Ye=null;Te!==null&&ze<F.length;ze++){Te.index>ze?(Ye=Te,Te=null):Ye=Te.sibling;var rt=W(j,Te,F[ze],ee);if(rt===null){Te===null&&(Te=Ye);break}i&&Te&&rt.alternate===null&&r(j,Te),L=m(rt,L,ze),st===null?Se=rt:st.sibling=rt,st=rt,Te=Ye}if(ze===F.length)return o(j,Te),Xe&&$s(j,ze),Se;if(Te===null){for(;ze<F.length;ze++)Te=ne(j,F[ze],ee),Te!==null&&(L=m(Te,L,ze),st===null?Se=Te:st.sibling=Te,st=Te);return Xe&&$s(j,ze),Se}for(Te=c(Te);ze<F.length;ze++)Ye=$(Te,j,ze,F[ze],ee),Ye!==null&&(i&&Ye.alternate!==null&&Te.delete(Ye.key===null?ze:Ye.key),L=m(Ye,L,ze),st===null?Se=Ye:st.sibling=Ye,st=Ye);return i&&Te.forEach(function(sa){return r(j,sa)}),Xe&&$s(j,ze),Se}function Re(j,L,F,ee){if(F==null)throw Error(s(151));for(var Se=null,st=null,Te=L,ze=L=0,Ye=null,rt=F.next();Te!==null&&!rt.done;ze++,rt=F.next()){Te.index>ze?(Ye=Te,Te=null):Ye=Te.sibling;var sa=W(j,Te,rt.value,ee);if(sa===null){Te===null&&(Te=Ye);break}i&&Te&&sa.alternate===null&&r(j,Te),L=m(sa,L,ze),st===null?Se=sa:st.sibling=sa,st=sa,Te=Ye}if(rt.done)return o(j,Te),Xe&&$s(j,ze),Se;if(Te===null){for(;!rt.done;ze++,rt=F.next())rt=ne(j,rt.value,ee),rt!==null&&(L=m(rt,L,ze),st===null?Se=rt:st.sibling=rt,st=rt);return Xe&&$s(j,ze),Se}for(Te=c(Te);!rt.done;ze++,rt=F.next())rt=$(Te,j,ze,rt.value,ee),rt!==null&&(i&&rt.alternate!==null&&Te.delete(rt.key===null?ze:rt.key),L=m(rt,L,ze),st===null?Se=rt:st.sibling=rt,st=rt);return i&&Te.forEach(function(z2){return r(j,z2)}),Xe&&$s(j,ze),Se}function Tt(j,L,F,ee){if(typeof F=="object"&&F!==null&&F.type===Z&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case V:e:{for(var Se=F.key;L!==null;){if(L.key===Se){if(Se=F.type,Se===Z){if(L.tag===7){o(j,L.sibling),ee=d(L,F.props.children),ee.return=j,j=ee;break e}}else if(L.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===R&&Wa(Se)===L.type){o(j,L.sibling),ee=d(L,F.props),Cc(ee,F),ee.return=j,j=ee;break e}o(j,L);break}else r(j,L);L=L.sibling}F.type===Z?(ee=Fa(F.props.children,j.mode,ee,F.key),ee.return=j,j=ee):(ee=Sh(F.type,F.key,F.props,null,j.mode,ee),Cc(ee,F),ee.return=j,j=ee)}return v(j);case q:e:{for(Se=F.key;L!==null;){if(L.key===Se)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){o(j,L.sibling),ee=d(L,F.children||[]),ee.return=j,j=ee;break e}else{o(j,L);break}else r(j,L);L=L.sibling}ee=cm(F,j.mode,ee),ee.return=j,j=ee}return v(j);case R:return F=Wa(F),Tt(j,L,F,ee)}if(Ie(F))return ve(j,L,F,ee);if(O(F)){if(Se=O(F),typeof Se!="function")throw Error(s(150));return F=Se.call(F),Re(j,L,F,ee)}if(typeof F.then=="function")return Tt(j,L,Nh(F),ee);if(F.$$typeof===oe)return Tt(j,L,Ah(j,F),ee);xh(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(o(j,L.sibling),ee=d(L,F),ee.return=j,j=ee):(o(j,L),ee=lm(F,j.mode,ee),ee.return=j,j=ee),v(j)):o(j,L)}return function(j,L,F,ee){try{Ac=0;var Se=Tt(j,L,F,ee);return Zo=null,Se}catch(Te){if(Te===Xo||Te===Rh)throw Te;var st=yi(29,Te,null,j.mode);return st.lanes=ee,st.return=j,st}finally{}}}var Qa=Uv(!0),zv=Uv(!1),Br=!1;function Tm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Fr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function qr(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ot&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=Th(i),wv(i,null,o),r}return Eh(i,c,r,o),Th(i)}function Rc(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Hn(i,o)}}function wm(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?d=m=r:m=m.next=r}else d=m=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var bm=!1;function Ic(){if(bm){var i=$o;if(i!==null)throw i}}function Nc(i,r,o,c){bm=!1;var d=i.updateQueue;Br=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var M=w,H=M.next;M.next=null,v===null?m=H:v.next=H,v=M;var X=i.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==v&&(w===null?X.firstBaseUpdate=H:w.next=H,X.lastBaseUpdate=M))}if(m!==null){var ne=d.baseState;v=0,X=H=M=null,w=m;do{var W=w.lane&-536870913,$=W!==w.lane;if($?(We&W)===W:(c&W)===W){W!==0&&W===Qo&&(bm=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ve=i,Re=w;W=r;var Tt=o;switch(Re.tag){case 1:if(ve=Re.payload,typeof ve=="function"){ne=ve.call(Tt,ne,W);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Re.payload,W=typeof ve=="function"?ve.call(Tt,ne,W):ve,W==null)break e;ne=S({},ne,W);break e;case 2:Br=!0}}W=w.callback,W!==null&&(i.flags|=64,$&&(i.flags|=8192),$=d.callbacks,$===null?d.callbacks=[W]:$.push(W))}else $={lane:W,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(H=X=$,M=ne):X=X.next=$,v|=W;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;$=w,w=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);X===null&&(M=ne),d.baseState=M,d.firstBaseUpdate=H,d.lastBaseUpdate=X,m===null&&(d.shared.lanes=0),Yr|=v,i.lanes=v,i.memoizedState=ne}}function Bv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Fv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Bv(o[i],r)}var Jo=P(null),Dh=P(0);function qv(i,r){i=or,ce(Dh,i),ce(Jo,r),or=i|r.baseLanes}function Am(){ce(Dh,or),ce(Jo,Jo.current)}function Cm(){or=Dh.current,J(Jo),J(Dh)}var vi=P(null),Fi=null;function Hr(i){var r=i.alternate;ce(Wt,Wt.current&1),ce(vi,i),Fi===null&&(r===null||Jo.current!==null||r.memoizedState!==null)&&(Fi=i)}function Rm(i){ce(Wt,Wt.current),ce(vi,i),Fi===null&&(Fi=i)}function Hv(i){i.tag===22?(ce(Wt,Wt.current),ce(vi,i),Fi===null&&(Fi=i)):Gr()}function Gr(){ce(Wt,Wt.current),ce(vi,vi.current)}function Ei(i){J(vi),Fi===i&&(Fi=null),J(Wt)}var Wt=P(0);function Mh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Op(o)||kp(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Js=0,je=null,vt=null,rn=null,Oh=!1,el=!1,$a=!1,kh=0,xc=0,tl=null,xI=0;function Ft(){throw Error(s(321))}function Im(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!_i(i[o],r[o]))return!1;return!0}function Nm(i,r,o,c,d,m){return Js=m,je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=i===null||i.memoizedState===null?RE:Hm,$a=!1,m=o(c,d),$a=!1,el&&(m=Kv(r,o,c,d)),Gv(i),m}function Gv(i){B.H=Oc;var r=vt!==null&&vt.next!==null;if(Js=0,rn=vt=je=null,Oh=!1,xc=0,tl=null,r)throw Error(s(300));i===null||an||(i=i.dependencies,i!==null&&bh(i)&&(an=!0))}function Kv(i,r,o,c){je=i;var d=0;do{if(el&&(tl=null),xc=0,el=!1,25<=d)throw Error(s(301));if(d+=1,rn=vt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=IE,m=r(o,c)}while(el);return m}function DI(){var i=B.H,r=i.useState()[0];return r=typeof r.then=="function"?Dc(r):r,i=i.useState()[0],(vt!==null?vt.memoizedState:null)!==i&&(je.flags|=1024),r}function xm(){var i=kh!==0;return kh=0,i}function Dm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Mm(i){if(Oh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Oh=!1}Js=0,rn=vt=je=null,el=!1,xc=kh=0,tl=null}function Kn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?je.memoizedState=rn=i:rn=rn.next=i,rn}function Yt(){if(vt===null){var i=je.alternate;i=i!==null?i.memoizedState:null}else i=vt.next;var r=rn===null?je.memoizedState:rn.next;if(r!==null)rn=r,vt=i;else{if(i===null)throw je.alternate===null?Error(s(467)):Error(s(310));vt=i,i={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},rn===null?je.memoizedState=rn=i:rn=rn.next=i}return rn}function Ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dc(i){var r=xc;return xc+=1,tl===null&&(tl=[]),i=Lv(tl,i,r),r=je,(rn===null?r.memoizedState:rn.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?RE:Hm),i}function Lh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Dc(i);if(i.$$typeof===oe)return Cn(i)}throw Error(s(438,String(i)))}function Om(i){var r=null,o=je.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=je.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Ph(),je.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=D;return r.index++,o}function er(i,r){return typeof r=="function"?r(i):r}function Vh(i){var r=Yt();return km(r,vt,i)}function km(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var d=i.baseQueue,m=c.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}r.baseQueue=d=m,c.pending=null}if(m=i.baseState,d===null)i.memoizedState=m;else{r=d.next;var w=v=null,M=null,H=r,X=!1;do{var ne=H.lane&-536870913;if(ne!==H.lane?(We&ne)===ne:(Js&ne)===ne){var W=H.revertLane;if(W===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ne===Qo&&(X=!0);else if((Js&W)===W){H=H.next,W===Qo&&(X=!0);continue}else ne={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},M===null?(w=M=ne,v=m):M=M.next=ne,je.lanes|=W,Yr|=W;ne=H.action,$a&&o(m,ne),m=H.hasEagerState?H.eagerState:o(m,ne)}else W={lane:ne,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},M===null?(w=M=W,v=m):M=M.next=W,je.lanes|=ne,Yr|=ne;H=H.next}while(H!==null&&H!==r);if(M===null?v=m:M.next=w,!_i(m,i.memoizedState)&&(an=!0,X&&(o=$o,o!==null)))throw o;i.memoizedState=m,i.baseState=v,i.baseQueue=M,c.lastRenderedState=m}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Pm(i){var r=Yt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,m=r.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do m=i(m,v.action),v=v.next;while(v!==d);_i(m,r.memoizedState)||(an=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,c]}function Wv(i,r,o){var c=je,d=Yt(),m=Xe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!_i((vt||d).memoizedState,o);if(v&&(d.memoizedState=o,an=!0),d=d.queue,jm($v.bind(null,c,d,i),[i]),d.getSnapshot!==r||v||rn!==null&&rn.memoizedState.tag&1){if(c.flags|=2048,nl(9,{destroy:void 0},Qv.bind(null,c,d,o,r),null),wt===null)throw Error(s(349));m||(Js&127)!==0||Yv(c,r,o)}return o}function Yv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=je.updateQueue,r===null?(r=Ph(),je.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Qv(i,r,o,c){r.value=o,r.getSnapshot=c,Xv(r)&&Zv(i)}function $v(i,r,o){return o(function(){Xv(r)&&Zv(i)})}function Xv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!_i(i,o)}catch{return!0}}function Zv(i){var r=Ba(i,2);r!==null&&ii(r,i,2)}function Lm(i){var r=Kn();if(typeof i=="function"){var o=i;if(i=o(),$a){wn(!0);try{o()}finally{wn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:i},r}function Jv(i,r,o,c){return i.baseState=o,km(i,vt,typeof c=="function"?c:er)}function MI(i,r,o,c,d){if(zh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};B.T!==null?o(!0):m.isTransition=!1,c(m),o=r.pending,o===null?(m.next=r.pending=m,eE(r,m)):(m.next=o.next,r.pending=o.next=m)}}function eE(i,r){var o=r.action,c=r.payload,d=i.state;if(r.isTransition){var m=B.T,v={};B.T=v;try{var w=o(d,c),M=B.S;M!==null&&M(v,w),tE(i,r,w)}catch(H){Vm(i,r,H)}finally{m!==null&&v.types!==null&&(m.types=v.types),B.T=m}}else try{m=o(d,c),tE(i,r,m)}catch(H){Vm(i,r,H)}}function tE(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){nE(i,r,c)},function(c){return Vm(i,r,c)}):nE(i,r,o)}function nE(i,r,o){r.status="fulfilled",r.value=o,iE(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,eE(i,o)))}function Vm(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,iE(r),r=r.next;while(r!==c)}i.action=null}function iE(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function sE(i,r){return r}function rE(i,r){if(Xe){var o=wt.formState;if(o!==null){e:{var c=je;if(Xe){if(Ct){t:{for(var d=Ct,m=Bi;d.nodeType!==8;){if(!m){d=null;break t}if(d=qi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=qi(d.nextSibling),c=d.data==="F!";break e}}Ur(c)}c=!1}c&&(r=o[0])}}return o=Kn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sE,lastRenderedState:r},o.queue=c,o=bE.bind(null,je,c),c.dispatch=o,c=Lm(!1),m=qm.bind(null,je,!1,c.queue),c=Kn(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,o=MI.bind(null,je,d,m,o),d.dispatch=o,c.memoizedState=i,[r,o,!1]}function aE(i){var r=Yt();return oE(r,vt,i)}function oE(i,r,o){if(r=km(i,r,sE)[0],i=Vh(er)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Dc(r)}catch(v){throw v===Xo?Rh:v}else c=r;r=Yt();var d=r.queue,m=d.dispatch;return o!==r.memoizedState&&(je.flags|=2048,nl(9,{destroy:void 0},OI.bind(null,d,o),null)),[c,m,i]}function OI(i,r){i.action=r}function lE(i){var r=Yt(),o=vt;if(o!==null)return oE(r,o,i);Yt(),r=r.memoizedState,o=Yt();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function nl(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=je.updateQueue,r===null&&(r=Ph(),je.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function cE(){return Yt().memoizedState}function jh(i,r,o,c){var d=Kn();je.flags|=i,d.memoizedState=nl(1|r,{destroy:void 0},o,c===void 0?null:c)}function Uh(i,r,o,c){var d=Yt();c=c===void 0?null:c;var m=d.memoizedState.inst;vt!==null&&c!==null&&Im(c,vt.memoizedState.deps)?d.memoizedState=nl(r,m,o,c):(je.flags|=i,d.memoizedState=nl(1|r,m,o,c))}function uE(i,r){jh(8390656,8,i,r)}function jm(i,r){Uh(2048,8,i,r)}function kI(i){je.flags|=4;var r=je.updateQueue;if(r===null)r=Ph(),je.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function hE(i){var r=Yt().memoizedState;return kI({ref:r,nextImpl:i}),function(){if((ot&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function dE(i,r){return Uh(4,2,i,r)}function fE(i,r){return Uh(4,4,i,r)}function mE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function pE(i,r,o){o=o!=null?o.concat([i]):null,Uh(4,4,mE.bind(null,r,i),o)}function Um(){}function gE(i,r){var o=Yt();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Im(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function _E(i,r){var o=Yt();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Im(r,c[1]))return c[0];if(c=i(),$a){wn(!0);try{i()}finally{wn(!1)}}return o.memoizedState=[c,r],c}function zm(i,r,o){return o===void 0||(Js&1073741824)!==0&&(We&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=y0(),je.lanes|=i,Yr|=i,o)}function yE(i,r,o,c){return _i(o,r)?o:Jo.current!==null?(i=zm(i,o,c),_i(i,r)||(an=!0),i):(Js&42)===0||(Js&1073741824)!==0&&(We&261930)===0?(an=!0,i.memoizedState=o):(i=y0(),je.lanes|=i,Yr|=i,r)}function vE(i,r,o,c,d){var m=re.p;re.p=m!==0&&8>m?m:8;var v=B.T,w={};B.T=w,qm(i,!1,r,o);try{var M=d(),H=B.S;if(H!==null&&H(w,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var X=NI(M,c);Mc(i,r,X,wi(i))}else Mc(i,r,c,wi(i))}catch(ne){Mc(i,r,{then:function(){},status:"rejected",reason:ne},wi())}finally{re.p=m,v!==null&&w.types!==null&&(v.types=w.types),B.T=v}}function PI(){}function Bm(i,r,o,c){if(i.tag!==5)throw Error(s(476));var d=EE(i).queue;vE(i,d,r,_e,o===null?PI:function(){return TE(i),o(c)})}function EE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:_e},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function TE(i){var r=EE(i);r.next===null&&(r=i.alternate.memoizedState),Mc(i,r.next.queue,{},wi())}function Fm(){return Cn(Qc)}function SE(){return Yt().memoizedState}function wE(){return Yt().memoizedState}function LI(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=wi();i=Fr(o);var c=qr(r,i,o);c!==null&&(ii(c,r,o),Rc(c,r,o)),r={cache:_m()},i.payload=r;return}r=r.return}}function VI(i,r,o){var c=wi();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zh(i)?AE(r,o):(o=am(i,r,o,c),o!==null&&(ii(o,i,c),CE(o,r,c)))}function bE(i,r,o){var c=wi();Mc(i,r,o,c)}function Mc(i,r,o,c){var d={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(zh(i))AE(r,d);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var v=r.lastRenderedState,w=m(v,o);if(d.hasEagerState=!0,d.eagerState=w,_i(w,v))return Eh(i,r,d,0),wt===null&&vh(),!1}catch{}finally{}if(o=am(i,r,d,c),o!==null)return ii(o,i,c),CE(o,r,c),!0}return!1}function qm(i,r,o,c){if(c={lane:2,revertLane:Tp(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},zh(i)){if(r)throw Error(s(479))}else r=am(i,o,c,2),r!==null&&ii(r,i,2)}function zh(i){var r=i.alternate;return i===je||r!==null&&r===je}function AE(i,r){el=Oh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function CE(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Hn(i,o)}}var Oc={readContext:Cn,use:Lh,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft};Oc.useEffectEvent=Ft;var RE={readContext:Cn,use:Lh,useCallback:function(i,r){return Kn().memoizedState=[i,r===void 0?null:r],i},useContext:Cn,useEffect:uE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,jh(4194308,4,mE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return jh(4194308,4,i,r)},useInsertionEffect:function(i,r){jh(4,2,i,r)},useMemo:function(i,r){var o=Kn();r=r===void 0?null:r;var c=i();if($a){wn(!0);try{i()}finally{wn(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=Kn();if(o!==void 0){var d=o(r);if($a){wn(!0);try{o(r)}finally{wn(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=VI.bind(null,je,i),[c.memoizedState,i]},useRef:function(i){var r=Kn();return i={current:i},r.memoizedState=i},useState:function(i){i=Lm(i);var r=i.queue,o=bE.bind(null,je,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Um,useDeferredValue:function(i,r){var o=Kn();return zm(o,i,r)},useTransition:function(){var i=Lm(!1);return i=vE.bind(null,je,i.queue,!0,!1),Kn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=je,d=Kn();if(Xe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),wt===null)throw Error(s(349));(We&127)!==0||Yv(c,r,o)}d.memoizedState=o;var m={value:o,getSnapshot:r};return d.queue=m,uE($v.bind(null,c,m,i),[i]),c.flags|=2048,nl(9,{destroy:void 0},Qv.bind(null,c,m,o,r),null),o},useId:function(){var i=Kn(),r=wt.identifierPrefix;if(Xe){var o=Rs,c=Cs;o=(c&~(1<<32-_t(c)-1)).toString(32)+o,r="_"+r+"R_"+o,o=kh++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=xI++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:Fm,useFormState:rE,useActionState:rE,useOptimistic:function(i){var r=Kn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=qm.bind(null,je,!0,o),o.dispatch=r,[i,r]},useMemoCache:Om,useCacheRefresh:function(){return Kn().memoizedState=LI.bind(null,je)},useEffectEvent:function(i){var r=Kn(),o={impl:i};return r.memoizedState=o,function(){if((ot&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},Hm={readContext:Cn,use:Lh,useCallback:gE,useContext:Cn,useEffect:jm,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:fE,useMemo:_E,useReducer:Vh,useRef:cE,useState:function(){return Vh(er)},useDebugValue:Um,useDeferredValue:function(i,r){var o=Yt();return yE(o,vt.memoizedState,i,r)},useTransition:function(){var i=Vh(er)[0],r=Yt().memoizedState;return[typeof i=="boolean"?i:Dc(i),r]},useSyncExternalStore:Wv,useId:SE,useHostTransitionStatus:Fm,useFormState:aE,useActionState:aE,useOptimistic:function(i,r){var o=Yt();return Jv(o,vt,i,r)},useMemoCache:Om,useCacheRefresh:wE};Hm.useEffectEvent=hE;var IE={readContext:Cn,use:Lh,useCallback:gE,useContext:Cn,useEffect:jm,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:fE,useMemo:_E,useReducer:Pm,useRef:cE,useState:function(){return Pm(er)},useDebugValue:Um,useDeferredValue:function(i,r){var o=Yt();return vt===null?zm(o,i,r):yE(o,vt.memoizedState,i,r)},useTransition:function(){var i=Pm(er)[0],r=Yt().memoizedState;return[typeof i=="boolean"?i:Dc(i),r]},useSyncExternalStore:Wv,useId:SE,useHostTransitionStatus:Fm,useFormState:lE,useActionState:lE,useOptimistic:function(i,r){var o=Yt();return vt!==null?Jv(o,vt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Om,useCacheRefresh:wE};IE.useEffectEvent=hE;function Gm(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:S({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Km={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=wi(),d=Fr(c);d.payload=r,o!=null&&(d.callback=o),r=qr(i,d,c),r!==null&&(ii(r,i,c),Rc(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=wi(),d=Fr(c);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=qr(i,d,c),r!==null&&(ii(r,i,c),Rc(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=wi(),c=Fr(o);c.tag=2,r!=null&&(c.callback=r),r=qr(i,c,o),r!==null&&(ii(r,i,o),Rc(r,i,o))}};function NE(i,r,o,c,d,m,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,v):r.prototype&&r.prototype.isPureReactComponent?!vc(o,c)||!vc(d,m):!0}function xE(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&Km.enqueueReplaceState(r,r.state,null)}function Xa(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=S({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function DE(i){yh(i)}function ME(i){console.error(i)}function OE(i){yh(i)}function Bh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function kE(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wm(i,r,o){return o=Fr(o),o.tag=3,o.payload={element:null},o.callback=function(){Bh(i,r)},o}function PE(i){return i=Fr(i),i.tag=3,i}function LE(i,r,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;i.payload=function(){return d(m)},i.callback=function(){kE(r,o,c)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){kE(r,o,c),typeof d!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function jI(i,r,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&Yo(r,o,d,!0),o=vi.current,o!==null){switch(o.tag){case 31:case 13:return Fi===null?Jh():o.alternate===null&&qt===0&&(qt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Ih?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),yp(i,c,d)),!1;case 22:return o.flags|=65536,c===Ih?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),yp(i,c,d)),!1}throw Error(s(435,o.tag))}return yp(i,c,d),Jh(),!1}if(Xe)return r=vi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==dm&&(i=Error(s(422),{cause:c}),Sc(ji(i,o)))):(c!==dm&&(r=Error(s(423),{cause:c}),Sc(ji(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=ji(c,o),d=Wm(i.stateNode,c,d),wm(i,d),qt!==4&&(qt=2)),!1;var m=Error(s(520),{cause:c});if(m=ji(m,o),Bc===null?Bc=[m]:Bc.push(m),qt!==4&&(qt=2),r===null)return!0;c=ji(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=Wm(o.stateNode,c,i),wm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qr===null||!Qr.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=PE(d),LE(d,i,o,c),wm(o,d),!1}o=o.return}while(o!==null);return!1}var Ym=Error(s(461)),an=!1;function Rn(i,r,o,c){r.child=i===null?zv(r,null,o,c):Qa(r,i.child,o,c)}function VE(i,r,o,c,d){o=o.render;var m=r.ref;if("ref"in c){var v={};for(var w in c)w!=="ref"&&(v[w]=c[w])}else v=c;return Ga(r),c=Nm(i,r,o,v,m,d),w=xm(),i!==null&&!an?(Dm(i,r,d),tr(i,r,d)):(Xe&&w&&um(r),r.flags|=1,Rn(i,r,c,d),r.child)}function jE(i,r,o,c,d){if(i===null){var m=o.type;return typeof m=="function"&&!om(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,UE(i,r,m,c,d)):(i=Sh(o.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!np(i,d)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:vc,o(v,c)&&i.ref===r.ref)return tr(i,r,d)}return r.flags|=1,i=Qs(m,c),i.ref=r.ref,i.return=r,r.child=i}function UE(i,r,o,c,d){if(i!==null){var m=i.memoizedProps;if(vc(m,c)&&i.ref===r.ref)if(an=!1,r.pendingProps=c=m,np(i,d))(i.flags&131072)!==0&&(an=!0);else return r.lanes=i.lanes,tr(i,r,d)}return Qm(i,r,o,c,d)}function zE(i,r,o,c){var d=c.children,m=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,i!==null){for(c=r.child=i.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~m}else c=0,r.child=null;return BE(i,r,m,o,c)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Ch(r,m!==null?m.cachePool:null),m!==null?qv(r,m):Am(),Hv(r);else return c=r.lanes=536870912,BE(i,r,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(Ch(r,m.cachePool),qv(r,m),Gr(),r.memoizedState=null):(i!==null&&Ch(r,null),Am(),Gr());return Rn(i,r,d,o),r.child}function kc(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function BE(i,r,o,c,d){var m=vm();return m=m===null?null:{parent:sn._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},i!==null&&Ch(r,null),Am(),Hv(r),i!==null&&Yo(i,r,c,!0),r.childLanes=d,null}function Fh(i,r){return r=Hh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function FE(i,r,o){return Qa(r,i.child,null,o),i=Fh(r,r.pendingProps),i.flags|=2,Ei(r),r.memoizedState=null,i}function UI(i,r,o){var c=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(Xe){if(c.mode==="hidden")return i=Fh(r,c),r.lanes=536870912,kc(null,i);if(Rm(r),(i=Ct)?(i=eT(i,Bi),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Vr!==null?{id:Cs,overflow:Rs}:null,retryLane:536870912,hydrationErrors:null},o=Av(i),o.return=r,r.child=o,An=r,Ct=null)):i=null,i===null)throw Ur(r);return r.lanes=536870912,null}return Fh(r,c)}var m=i.memoizedState;if(m!==null){var v=m.dehydrated;if(Rm(r),d)if(r.flags&256)r.flags&=-257,r=FE(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(an||Yo(i,r,o,!1),d=(o&i.childLanes)!==0,an||d){if(c=wt,c!==null&&(v=Na(c,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,Ba(i,v),ii(c,i,v),Ym;Jh(),r=FE(i,r,o)}else i=m.treeContext,Ct=qi(v.nextSibling),An=r,Xe=!0,jr=null,Bi=!1,i!==null&&Iv(r,i),r=Fh(r,c),r.flags|=4096;return r}return i=Qs(i.child,{mode:c.mode,children:c.children}),i.ref=r.ref,r.child=i,i.return=r,i}function qh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Qm(i,r,o,c,d){return Ga(r),o=Nm(i,r,o,c,void 0,d),c=xm(),i!==null&&!an?(Dm(i,r,d),tr(i,r,d)):(Xe&&c&&um(r),r.flags|=1,Rn(i,r,o,d),r.child)}function qE(i,r,o,c,d,m){return Ga(r),r.updateQueue=null,o=Kv(r,c,o,d),Gv(i),c=xm(),i!==null&&!an?(Dm(i,r,m),tr(i,r,m)):(Xe&&c&&um(r),r.flags|=1,Rn(i,r,o,m),r.child)}function HE(i,r,o,c,d){if(Ga(r),r.stateNode===null){var m=Ho,v=o.contextType;typeof v=="object"&&v!==null&&(m=Cn(v)),m=new o(c,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Km,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=c,m.state=r.memoizedState,m.refs={},Tm(r),v=o.contextType,m.context=typeof v=="object"&&v!==null?Cn(v):Ho,m.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Gm(r,o,v,c),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Km.enqueueReplaceState(m,m.state,null),Nc(r,c,m,d),Ic(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,M=Xa(o,w);m.props=M;var H=m.context,X=o.contextType;v=Ho,typeof X=="object"&&X!==null&&(v=Cn(X));var ne=o.getDerivedStateFromProps;X=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||H!==v)&&xE(r,m,c,v),Br=!1;var W=r.memoizedState;m.state=W,Nc(r,c,m,d),Ic(),H=r.memoizedState,w||W!==H||Br?(typeof ne=="function"&&(Gm(r,o,ne,c),H=r.memoizedState),(M=Br||NE(r,o,M,c,W,H,v))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),m.props=c,m.state=H,m.context=v,c=M):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,Sm(i,r),v=r.memoizedProps,X=Xa(o,v),m.props=X,ne=r.pendingProps,W=m.context,H=o.contextType,M=Ho,typeof H=="object"&&H!==null&&(M=Cn(H)),w=o.getDerivedStateFromProps,(H=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ne||W!==M)&&xE(r,m,c,M),Br=!1,W=r.memoizedState,m.state=W,Nc(r,c,m,d),Ic();var $=r.memoizedState;v!==ne||W!==$||Br||i!==null&&i.dependencies!==null&&bh(i.dependencies)?(typeof w=="function"&&(Gm(r,o,w,c),$=r.memoizedState),(X=Br||NE(r,o,X,c,W,$,M)||i!==null&&i.dependencies!==null&&bh(i.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,$,M),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,$,M)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=$),m.props=c,m.state=$,m.context=M,c=X):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),c=!1)}return m=c,qh(i,r),c=(r.flags&128)!==0,m||c?(m=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&c?(r.child=Qa(r,i.child,null,d),r.child=Qa(r,null,o,d)):Rn(i,r,o,d),r.memoizedState=m.state,i=r.child):i=tr(i,r,d),i}function GE(i,r,o,c){return qa(),r.flags|=256,Rn(i,r,o,c),r.child}var $m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xm(i){return{baseLanes:i,cachePool:kv()}}function Zm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Si),i}function KE(i,r,o){var c=r.pendingProps,d=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),v&&(d=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,i===null){if(Xe){if(d?Hr(r):Gr(),(i=Ct)?(i=eT(i,Bi),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Vr!==null?{id:Cs,overflow:Rs}:null,retryLane:536870912,hydrationErrors:null},o=Av(i),o.return=r,r.child=o,An=r,Ct=null)):i=null,i===null)throw Ur(r);return kp(i)?r.lanes=32:r.lanes=536870912,null}var w=c.children;return c=c.fallback,d?(Gr(),d=r.mode,w=Hh({mode:"hidden",children:w},d),c=Fa(c,d,o,null),w.return=r,c.return=r,w.sibling=c,r.child=w,c=r.child,c.memoizedState=Xm(o),c.childLanes=Zm(i,v,o),r.memoizedState=$m,kc(null,c)):(Hr(r),Jm(r,w))}var M=i.memoizedState;if(M!==null&&(w=M.dehydrated,w!==null)){if(m)r.flags&256?(Hr(r),r.flags&=-257,r=ep(i,r,o)):r.memoizedState!==null?(Gr(),r.child=i.child,r.flags|=128,r=null):(Gr(),w=c.fallback,d=r.mode,c=Hh({mode:"visible",children:c.children},d),w=Fa(w,d,o,null),w.flags|=2,c.return=r,w.return=r,c.sibling=w,r.child=c,Qa(r,i.child,null,o),c=r.child,c.memoizedState=Xm(o),c.childLanes=Zm(i,v,o),r.memoizedState=$m,r=kc(null,c));else if(Hr(r),kp(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var H=v.dgst;v=H,c=Error(s(419)),c.stack="",c.digest=v,Sc({value:c,source:null,stack:null}),r=ep(i,r,o)}else if(an||Yo(i,r,o,!1),v=(o&i.childLanes)!==0,an||v){if(v=wt,v!==null&&(c=Na(v,o),c!==0&&c!==M.retryLane))throw M.retryLane=c,Ba(i,c),ii(v,i,c),Ym;Op(w)||Jh(),r=ep(i,r,o)}else Op(w)?(r.flags|=192,r.child=i.child,r=null):(i=M.treeContext,Ct=qi(w.nextSibling),An=r,Xe=!0,jr=null,Bi=!1,i!==null&&Iv(r,i),r=Jm(r,c.children),r.flags|=4096);return r}return d?(Gr(),w=c.fallback,d=r.mode,M=i.child,H=M.sibling,c=Qs(M,{mode:"hidden",children:c.children}),c.subtreeFlags=M.subtreeFlags&65011712,H!==null?w=Qs(H,w):(w=Fa(w,d,o,null),w.flags|=2),w.return=r,c.return=r,c.sibling=w,r.child=c,kc(null,c),c=r.child,w=i.child.memoizedState,w===null?w=Xm(o):(d=w.cachePool,d!==null?(M=sn._currentValue,d=d.parent!==M?{parent:M,pool:M}:d):d=kv(),w={baseLanes:w.baseLanes|o,cachePool:d}),c.memoizedState=w,c.childLanes=Zm(i,v,o),r.memoizedState=$m,kc(i.child,c)):(Hr(r),o=i.child,i=o.sibling,o=Qs(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(v=r.deletions,v===null?(r.deletions=[i],r.flags|=16):v.push(i)),r.child=o,r.memoizedState=null,o)}function Jm(i,r){return r=Hh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Hh(i,r){return i=yi(22,i,null,r),i.lanes=0,i}function ep(i,r,o){return Qa(r,i.child,null,o),i=Jm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function WE(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),pm(i.return,r,o)}function tp(i,r,o,c,d,m){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d,treeForkCount:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=o,v.tailMode=d,v.treeForkCount=m)}function YE(i,r,o){var c=r.pendingProps,d=c.revealOrder,m=c.tail;c=c.children;var v=Wt.current,w=(v&2)!==0;if(w?(v=v&1|2,r.flags|=128):v&=1,ce(Wt,v),Rn(i,r,c,o),c=Xe?Tc:0,!w&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&WE(i,o,r);else if(i.tag===19)WE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&Mh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),tp(r,!1,d,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&Mh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}tp(r,!0,o,null,m,c);break;case"together":tp(r,!1,null,null,void 0,c);break;default:r.memoizedState=null}return r.child}function tr(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Yr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Yo(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Qs(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Qs(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function np(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&bh(i)))}function zI(i,r,o){switch(r.tag){case 3:mt(r,r.stateNode.containerInfo),zr(r,sn,i.memoizedState.cache),qa();break;case 27:case 5:Pt(r);break;case 4:mt(r,r.stateNode.containerInfo);break;case 10:zr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Rm(r),null;break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Hr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?KE(i,r,o):(Hr(r),i=tr(i,r,o),i!==null?i.sibling:null);Hr(r);break;case 19:var d=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(Yo(i,r,o,!1),c=(o&r.childLanes)!==0),d){if(c)return YE(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ce(Wt,Wt.current),c)break;return null;case 22:return r.lanes=0,zE(i,r,o,r.pendingProps);case 24:zr(r,sn,i.memoizedState.cache)}return tr(i,r,o)}function QE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)an=!0;else{if(!np(i,o)&&(r.flags&128)===0)return an=!1,zI(i,r,o);an=(i.flags&131072)!==0}else an=!1,Xe&&(r.flags&1048576)!==0&&Rv(r,Tc,r.index);switch(r.lanes=0,r.tag){case 16:e:{var c=r.pendingProps;if(i=Wa(r.elementType),r.type=i,typeof i=="function")om(i)?(c=Xa(i,c),r.tag=1,r=HE(null,r,i,c,o)):(r.tag=0,r=Qm(null,r,i,c,o));else{if(i!=null){var d=i.$$typeof;if(d===Ee){r.tag=11,r=VE(null,r,i,c,o);break e}else if(d===C){r.tag=14,r=jE(null,r,i,c,o);break e}}throw r=Me(i)||i,Error(s(306,r,""))}}return r;case 0:return Qm(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,d=Xa(c,r.pendingProps),HE(i,r,c,d,o);case 3:e:{if(mt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var m=r.memoizedState;d=m.element,Sm(i,r),Nc(r,c,null,o);var v=r.memoizedState;if(c=v.cache,zr(r,sn,c),c!==m.cache&&gm(r,[sn],o,!0),Ic(),c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=GE(i,r,c,o);break e}else if(c!==d){d=ji(Error(s(424)),r),Sc(d),r=GE(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=qi(i.firstChild),An=r,Xe=!0,jr=null,Bi=!0,o=zv(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(qa(),c===d){r=tr(i,r,o);break e}Rn(i,r,c,o)}r=r.child}return r;case 26:return qh(i,r),i===null?(o=aT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Xe||(o=r.type,i=r.pendingProps,c=ad(Ce.current).createElement(o),c[Bt]=r,c[en]=i,In(c,o,i),tn(c),r.stateNode=c):r.memoizedState=aT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Pt(r),i===null&&Xe&&(c=r.stateNode=iT(r.type,r.pendingProps,Ce.current),An=r,Bi=!0,d=Ct,Jr(r.type)?(Pp=d,Ct=qi(c.firstChild)):Ct=d),Rn(i,r,r.pendingProps.children,o),qh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Xe&&((d=c=Ct)&&(c=g2(c,r.type,r.pendingProps,Bi),c!==null?(r.stateNode=c,An=r,Ct=qi(c.firstChild),Bi=!1,d=!0):d=!1),d||Ur(r)),Pt(r),d=r.type,m=r.pendingProps,v=i!==null?i.memoizedProps:null,c=m.children,xp(d,m)?c=null:v!==null&&xp(d,v)&&(r.flags|=32),r.memoizedState!==null&&(d=Nm(i,r,DI,null,null,o),Qc._currentValue=d),qh(i,r),Rn(i,r,c,o),r.child;case 6:return i===null&&Xe&&((i=o=Ct)&&(o=_2(o,r.pendingProps,Bi),o!==null?(r.stateNode=o,An=r,Ct=null,i=!0):i=!1),i||Ur(r)),null;case 13:return KE(i,r,o);case 4:return mt(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Qa(r,null,c,o):Rn(i,r,c,o),r.child;case 11:return VE(i,r,r.type,r.pendingProps,o);case 7:return Rn(i,r,r.pendingProps,o),r.child;case 8:return Rn(i,r,r.pendingProps.children,o),r.child;case 12:return Rn(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,zr(r,r.type,c.value),Rn(i,r,c.children,o),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,Ga(r),d=Cn(d),c=c(d),r.flags|=1,Rn(i,r,c,o),r.child;case 14:return jE(i,r,r.type,r.pendingProps,o);case 15:return UE(i,r,r.type,r.pendingProps,o);case 19:return YE(i,r,o);case 31:return UI(i,r,o);case 22:return zE(i,r,o,r.pendingProps);case 24:return Ga(r),c=Cn(sn),i===null?(d=vm(),d===null&&(d=wt,m=_m(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),r.memoizedState={parent:c,cache:d},Tm(r),zr(r,sn,d)):((i.lanes&o)!==0&&(Sm(i,r),Nc(r,null,null,o),Ic()),d=i.memoizedState,m=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),zr(r,sn,c)):(c=m.cache,zr(r,sn,c),c!==d.cache&&gm(r,[sn],o,!0))),Rn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function nr(i){i.flags|=4}function ip(i,r,o,c,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(S0())i.flags|=8192;else throw Ya=Ih,Em}else i.flags&=-16777217}function $E(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!hT(r))if(S0())i.flags|=8192;else throw Ya=Ih,Em}function Gh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Di():536870912,i.lanes|=r,al|=r)}function Pc(i,r){if(!Xe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Rt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function BI(i,r,o){var c=r.pendingProps;switch(hm(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(r),null;case 1:return Rt(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Zs(sn),nt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Wo(r)?nr(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fm())),Rt(r),null;case 26:var d=r.type,m=r.memoizedState;return i===null?(nr(r),m!==null?(Rt(r),$E(r,m)):(Rt(r),ip(r,d,null,c,o))):m?m!==i.memoizedState?(nr(r),Rt(r),$E(r,m)):(Rt(r),r.flags&=-16777217):(i=i.memoizedProps,i!==c&&nr(r),Rt(r),ip(r,d,i,c,o)),null;case 27:if(ci(r),o=Ce.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&nr(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Rt(r),null}i=de.current,Wo(r)?Nv(r):(i=iT(d,c,o),r.stateNode=i,nr(r))}return Rt(r),null;case 5:if(ci(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&nr(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return Rt(r),null}if(m=de.current,Wo(r))Nv(r);else{var v=ad(Ce.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?v.createElement("select",{is:c.is}):v.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?v.createElement(d,{is:c.is}):v.createElement(d)}}m[Bt]=r,m[en]=c;e:for(v=r.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break e;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}r.stateNode=m;e:switch(In(m,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&nr(r)}}return Rt(r),ip(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&nr(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ce.current,Wo(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,d=An,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[Bt]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||K0(i.nodeValue,o)),i||Ur(r,!0)}else i=ad(i).createTextNode(c),i[Bt]=r,r.stateNode=i}return Rt(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(c=Wo(r),o!==null){if(i===null){if(!c)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[Bt]=r}else qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rt(r),i=!1}else o=fm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(Ei(r),r):(Ei(r),null);if((r.flags&128)!==0)throw Error(s(558))}return Rt(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=Wo(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Bt]=r}else qa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rt(r),d=!1}else d=fm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Ei(r),r):(Ei(r),null)}return Ei(r),(r.flags&128)!==0?(r.lanes=o,r):(o=c!==null,i=i!==null&&i.memoizedState!==null,o&&(c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),Gh(r,r.updateQueue),Rt(r),null);case 4:return nt(),i===null&&Ap(r.stateNode.containerInfo),Rt(r),null;case 10:return Zs(r.type),Rt(r),null;case 19:if(J(Wt),c=r.memoizedState,c===null)return Rt(r),null;if(d=(r.flags&128)!==0,m=c.rendering,m===null)if(d)Pc(c,!1);else{if(qt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Mh(i),m!==null){for(r.flags|=128,Pc(c,!1),i=m.updateQueue,r.updateQueue=i,Gh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)bv(o,i),o=o.sibling;return ce(Wt,Wt.current&1|2),Xe&&$s(r,c.treeForkCount),r.child}i=i.sibling}c.tail!==null&&Ue()>$h&&(r.flags|=128,d=!0,Pc(c,!1),r.lanes=4194304)}else{if(!d)if(i=Mh(m),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,Gh(r,i),Pc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Xe)return Rt(r),null}else 2*Ue()-c.renderingStartTime>$h&&o!==536870912&&(r.flags|=128,d=!0,Pc(c,!1),r.lanes=4194304);c.isBackwards?(m.sibling=r.child,r.child=m):(i=c.last,i!==null?i.sibling=m:r.child=m,c.last=m)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Ue(),i.sibling=null,o=Wt.current,ce(Wt,d?o&1|2:o&1),Xe&&$s(r,c.treeForkCount),i):(Rt(r),null);case 22:case 23:return Ei(r),Cm(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(Rt(r),r.subtreeFlags&6&&(r.flags|=8192)):Rt(r),o=r.updateQueue,o!==null&&Gh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&J(Ka),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Zs(sn),Rt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function FI(i,r){switch(hm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Zs(sn),nt(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return ci(r),null;case 31:if(r.memoizedState!==null){if(Ei(r),r.alternate===null)throw Error(s(340));qa()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(Ei(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));qa()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return J(Wt),null;case 4:return nt(),null;case 10:return Zs(r.type),null;case 22:case 23:return Ei(r),Cm(),i!==null&&J(Ka),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Zs(sn),null;case 25:return null;default:return null}}function XE(i,r){switch(hm(r),r.tag){case 3:Zs(sn),nt();break;case 26:case 27:case 5:ci(r);break;case 4:nt();break;case 31:r.memoizedState!==null&&Ei(r);break;case 13:Ei(r);break;case 19:J(Wt);break;case 10:Zs(r.type);break;case 22:case 23:Ei(r),Cm(),i!==null&&J(Ka);break;case 24:Zs(sn)}}function Lc(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&i)===i){c=void 0;var m=o.create,v=o.inst;c=m(),v.destroy=c}o=o.next}while(o!==d)}}catch(w){ft(r,r.return,w)}}function Kr(i,r,o){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&i)===i){var v=c.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,d=r;var M=o,H=w;try{H()}catch(X){ft(d,M,X)}}}c=c.next}while(c!==m)}}catch(X){ft(r,r.return,X)}}function ZE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Fv(r,o)}catch(c){ft(i,i.return,c)}}}function JE(i,r,o){o.props=Xa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){ft(i,r,c)}}function Vc(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(d){ft(i,r,d)}}function Is(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){ft(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){ft(i,r,d)}else o.current=null}function e0(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){ft(i,i.return,d)}}function sp(i,r,o){try{var c=i.stateNode;u2(c,i.type,o,r),c[en]=r}catch(d){ft(i,i.return,d)}}function t0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Jr(i.type)||i.tag===4}function rp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||t0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Jr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ap(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Zi));else if(c!==4&&(c===27&&Jr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(ap(i,r,o),i=i.sibling;i!==null;)ap(i,r,o),i=i.sibling}function Kh(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&Jr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Kh(i,r,o),i=i.sibling;i!==null;)Kh(i,r,o),i=i.sibling}function n0(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);In(r,c,o),r[Bt]=i,r[en]=o}catch(m){ft(i,i.return,m)}}var ir=!1,on=!1,op=!1,i0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function qI(i,r){if(i=i.containerInfo,Ip=fd,i=pv(i),em(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,w=-1,M=-1,H=0,X=0,ne=i,W=null;t:for(;;){for(var $;ne!==o||d!==0&&ne.nodeType!==3||(w=v+d),ne!==m||c!==0&&ne.nodeType!==3||(M=v+c),ne.nodeType===3&&(v+=ne.nodeValue.length),($=ne.firstChild)!==null;)W=ne,ne=$;for(;;){if(ne===i)break t;if(W===o&&++H===d&&(w=v),W===m&&++X===c&&(M=v),($=ne.nextSibling)!==null)break;ne=W,W=ne.parentNode}ne=$}o=w===-1||M===-1?null:{start:w,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;for(Np={focusedElem:i,selectionRange:o},fd=!1,_n=r;_n!==null;)if(r=_n,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,_n=i;else for(;_n!==null;){switch(r=_n,m=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ve=Xa(o.type,d);i=c.getSnapshotBeforeUpdate(ve,m),c.__reactInternalSnapshotBeforeUpdate=i}catch(Re){ft(o,o.return,Re)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Mp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Mp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,_n=i;break}_n=r.return}}function s0(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:rr(i,o),c&4&&Lc(5,o);break;case 1:if(rr(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(v){ft(o,o.return,v)}else{var d=Xa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(v){ft(o,o.return,v)}}c&64&&ZE(o),c&512&&Vc(o,o.return);break;case 3:if(rr(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Fv(i,r)}catch(v){ft(o,o.return,v)}}break;case 27:r===null&&c&4&&n0(o);case 26:case 5:rr(i,o),r===null&&c&4&&e0(o),c&512&&Vc(o,o.return);break;case 12:rr(i,o);break;case 31:rr(i,o),c&4&&o0(i,o);break;case 13:rr(i,o),c&4&&l0(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=ZI.bind(null,o),y2(i,o))));break;case 22:if(c=o.memoizedState!==null||ir,!c){r=r!==null&&r.memoizedState!==null||on,d=ir;var m=on;ir=c,(on=r)&&!m?ar(i,o,(o.subtreeFlags&8772)!==0):rr(i,o),ir=d,on=m}break;case 30:break;default:rr(i,o)}}function r0(i){var r=i.alternate;r!==null&&(i.alternate=null,r0(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Mt(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var kt=null,Jn=!1;function sr(i,r,o){for(o=o.child;o!==null;)a0(i,r,o),o=o.sibling}function a0(i,r,o){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Zt,o)}catch{}switch(o.tag){case 26:on||Is(o,r),sr(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:on||Is(o,r);var c=kt,d=Jn;Jr(o.type)&&(kt=o.stateNode,Jn=!1),sr(i,r,o),Kc(o.stateNode),kt=c,Jn=d;break;case 5:on||Is(o,r);case 6:if(c=kt,d=Jn,kt=null,sr(i,r,o),kt=c,Jn=d,kt!==null)if(Jn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(o.stateNode)}catch(m){ft(o,r,m)}else try{kt.removeChild(o.stateNode)}catch(m){ft(o,r,m)}break;case 18:kt!==null&&(Jn?(i=kt,Z0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),ml(i)):Z0(kt,o.stateNode));break;case 4:c=kt,d=Jn,kt=o.stateNode.containerInfo,Jn=!0,sr(i,r,o),kt=c,Jn=d;break;case 0:case 11:case 14:case 15:Kr(2,o,r),on||Kr(4,o,r),sr(i,r,o);break;case 1:on||(Is(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&JE(o,r,c)),sr(i,r,o);break;case 21:sr(i,r,o);break;case 22:on=(c=on)||o.memoizedState!==null,sr(i,r,o),on=c;break;default:sr(i,r,o)}}function o0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{ml(i)}catch(o){ft(r,r.return,o)}}}function l0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ml(i)}catch(o){ft(r,r.return,o)}}function HI(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new i0),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new i0),r;default:throw Error(s(435,i.tag))}}function Wh(i,r){var o=HI(i);r.forEach(function(c){if(!o.has(c)){o.add(c);var d=JI.bind(null,i,c);c.then(d,d)}})}function ei(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=i,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(Jr(w.type)){kt=w.stateNode,Jn=!1;break e}break;case 5:kt=w.stateNode,Jn=!1;break e;case 3:case 4:kt=w.stateNode.containerInfo,Jn=!0;break e}w=w.return}if(kt===null)throw Error(s(160));a0(m,v,d),kt=null,Jn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)c0(r,i),r=r.sibling}var ss=null;function c0(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:ei(r,i),ti(i),c&4&&(Kr(3,i,i.return),Lc(3,i),Kr(5,i,i.return));break;case 1:ei(r,i),ti(i),c&512&&(on||o===null||Is(o,o.return)),c&64&&ir&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=ss;if(ei(r,i),ti(i),c&512&&(on||o===null||Is(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[it]||m[Bt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),In(m,c,o),m[Bt]=i,tn(m),c=m;break e;case"link":var v=cT("link","href",d).get(c+(o.href||""));if(v){for(var w=0;w<v.length;w++)if(m=v[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(w,1);break t}}m=d.createElement(c),In(m,c,o),d.head.appendChild(m);break;case"meta":if(v=cT("meta","content",d).get(c+(o.content||""))){for(w=0;w<v.length;w++)if(m=v[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(w,1);break t}}m=d.createElement(c),In(m,c,o),d.head.appendChild(m);break;default:throw Error(s(468,c))}m[Bt]=i,tn(m),c=m}i.stateNode=c}else uT(d,i.type,i.stateNode);else i.stateNode=lT(d,c,i.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?uT(d,i.type,i.stateNode):lT(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&sp(i,i.memoizedProps,o.memoizedProps)}break;case 27:ei(r,i),ti(i),c&512&&(on||o===null||Is(o,o.return)),o!==null&&c&4&&sp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(ei(r,i),ti(i),c&512&&(on||o===null||Is(o,o.return)),i.flags&32){d=i.stateNode;try{Zn(d,"")}catch(ve){ft(i,i.return,ve)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,sp(i,d,o!==null?o.memoizedProps:d)),c&1024&&(op=!0);break;case 6:if(ei(r,i),ti(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(ve){ft(i,i.return,ve)}}break;case 3:if(cd=null,d=ss,ss=od(r.containerInfo),ei(r,i),ss=d,ti(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ml(r.containerInfo)}catch(ve){ft(i,i.return,ve)}op&&(op=!1,u0(i));break;case 4:c=ss,ss=od(i.stateNode.containerInfo),ei(r,i),ti(i),ss=c;break;case 12:ei(r,i),ti(i);break;case 31:ei(r,i),ti(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Wh(i,c)));break;case 13:ei(r,i),ti(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Qh=Ue()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Wh(i,c)));break;case 22:d=i.memoizedState!==null;var M=o!==null&&o.memoizedState!==null,H=ir,X=on;if(ir=H||d,on=X||M,ei(r,i),on=X,ir=H,ti(i),c&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||M||ir||on||Za(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){M=o=r;try{if(m=M.stateNode,d)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=M.stateNode;var ne=M.memoizedProps.style,W=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;w.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ve){ft(M,M.return,ve)}}}else if(r.tag===6){if(o===null){M=r;try{M.stateNode.nodeValue=d?"":M.memoizedProps}catch(ve){ft(M,M.return,ve)}}}else if(r.tag===18){if(o===null){M=r;try{var $=M.stateNode;d?J0($,!0):J0(M.stateNode,!1)}catch(ve){ft(M,M.return,ve)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Wh(i,o))));break;case 19:ei(r,i),ti(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Wh(i,c)));break;case 30:break;case 21:break;default:ei(r,i),ti(i)}}function ti(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(t0(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,m=rp(i);Kh(i,m,d);break;case 5:var v=o.stateNode;o.flags&32&&(Zn(v,""),o.flags&=-33);var w=rp(i);Kh(i,w,v);break;case 3:case 4:var M=o.stateNode.containerInfo,H=rp(i);ap(i,H,M);break;default:throw Error(s(161))}}catch(X){ft(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function u0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;u0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function rr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)s0(i,r.alternate,r),r=r.sibling}function Za(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Kr(4,r,r.return),Za(r);break;case 1:Is(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&JE(r,r.return,o),Za(r);break;case 27:Kc(r.stateNode);case 26:case 5:Is(r,r.return),Za(r);break;case 22:r.memoizedState===null&&Za(r);break;case 30:Za(r);break;default:Za(r)}i=i.sibling}}function ar(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,m=r,v=m.flags;switch(m.tag){case 0:case 11:case 15:ar(d,m,o),Lc(4,m);break;case 1:if(ar(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){ft(c,c.return,H)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var M=d.shared.hiddenCallbacks;if(M!==null)for(d.shared.hiddenCallbacks=null,d=0;d<M.length;d++)Bv(M[d],w)}catch(H){ft(c,c.return,H)}}o&&v&64&&ZE(m),Vc(m,m.return);break;case 27:n0(m);case 26:case 5:ar(d,m,o),o&&c===null&&v&4&&e0(m),Vc(m,m.return);break;case 12:ar(d,m,o);break;case 31:ar(d,m,o),o&&v&4&&o0(d,m);break;case 13:ar(d,m,o),o&&v&4&&l0(d,m);break;case 22:m.memoizedState===null&&ar(d,m,o),Vc(m,m.return);break;case 30:break;default:ar(d,m,o)}r=r.sibling}}function lp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&wc(o))}function cp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&wc(i))}function rs(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)h0(i,r,o,c),r=r.sibling}function h0(i,r,o,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:rs(i,r,o,c),d&2048&&Lc(9,r);break;case 1:rs(i,r,o,c);break;case 3:rs(i,r,o,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&wc(i)));break;case 12:if(d&2048){rs(i,r,o,c),i=r.stateNode;try{var m=r.memoizedProps,v=m.id,w=m.onPostCommit;typeof w=="function"&&w(v,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(M){ft(r,r.return,M)}}else rs(i,r,o,c);break;case 31:rs(i,r,o,c);break;case 13:rs(i,r,o,c);break;case 23:break;case 22:m=r.stateNode,v=r.alternate,r.memoizedState!==null?m._visibility&2?rs(i,r,o,c):jc(i,r):m._visibility&2?rs(i,r,o,c):(m._visibility|=2,il(i,r,o,c,(r.subtreeFlags&10256)!==0||!1)),d&2048&&lp(v,r);break;case 24:rs(i,r,o,c),d&2048&&cp(r.alternate,r);break;default:rs(i,r,o,c)}}function il(i,r,o,c,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=i,v=r,w=o,M=c,H=v.flags;switch(v.tag){case 0:case 11:case 15:il(m,v,w,M,d),Lc(8,v);break;case 23:break;case 22:var X=v.stateNode;v.memoizedState!==null?X._visibility&2?il(m,v,w,M,d):jc(m,v):(X._visibility|=2,il(m,v,w,M,d)),d&&H&2048&&lp(v.alternate,v);break;case 24:il(m,v,w,M,d),d&&H&2048&&cp(v.alternate,v);break;default:il(m,v,w,M,d)}r=r.sibling}}function jc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,d=c.flags;switch(c.tag){case 22:jc(o,c),d&2048&&lp(c.alternate,c);break;case 24:jc(o,c),d&2048&&cp(c.alternate,c);break;default:jc(o,c)}r=r.sibling}}var Uc=8192;function sl(i,r,o){if(i.subtreeFlags&Uc)for(i=i.child;i!==null;)d0(i,r,o),i=i.sibling}function d0(i,r,o){switch(i.tag){case 26:sl(i,r,o),i.flags&Uc&&i.memoizedState!==null&&x2(o,ss,i.memoizedState,i.memoizedProps);break;case 5:sl(i,r,o);break;case 3:case 4:var c=ss;ss=od(i.stateNode.containerInfo),sl(i,r,o),ss=c;break;case 22:i.memoizedState===null&&(c=i.alternate,c!==null&&c.memoizedState!==null?(c=Uc,Uc=16777216,sl(i,r,o),Uc=c):sl(i,r,o));break;default:sl(i,r,o)}}function f0(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function zc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];_n=c,p0(c,i)}f0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)m0(i),i=i.sibling}function m0(i){switch(i.tag){case 0:case 11:case 15:zc(i),i.flags&2048&&Kr(9,i,i.return);break;case 3:zc(i);break;case 12:zc(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Yh(i)):zc(i);break;default:zc(i)}}function Yh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];_n=c,p0(c,i)}f0(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Kr(8,r,r.return),Yh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Yh(r));break;default:Yh(r)}i=i.sibling}}function p0(i,r){for(;_n!==null;){var o=_n;switch(o.tag){case 0:case 11:case 15:Kr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,_n=c;else e:for(o=i;_n!==null;){c=_n;var d=c.sibling,m=c.return;if(r0(c),c===o){_n=null;break e}if(d!==null){d.return=m,_n=d;break e}_n=m}}}var GI={getCacheForType:function(i){var r=Cn(sn),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return Cn(sn).controller.signal}},KI=typeof WeakMap=="function"?WeakMap:Map,ot=0,wt=null,He=null,We=0,dt=0,Ti=null,Wr=!1,rl=!1,up=!1,or=0,qt=0,Yr=0,Ja=0,hp=0,Si=0,al=0,Bc=null,ni=null,dp=!1,Qh=0,g0=0,$h=1/0,Xh=null,Qr=null,dn=0,$r=null,ol=null,lr=0,fp=0,mp=null,_0=null,Fc=0,pp=null;function wi(){return(ot&2)!==0&&We!==0?We&-We:B.T!==null?Tp():No()}function y0(){if(Si===0)if((We&536870912)===0||Xe){var i=xi;xi<<=1,(xi&3932160)===0&&(xi=262144),Si=i}else Si=536870912;return i=vi.current,i!==null&&(i.flags|=32),Si}function ii(i,r,o){(i===wt&&(dt===2||dt===9)||i.cancelPendingCommit!==null)&&(ll(i,0),Xr(i,We,Si,!1)),ps(i,o),((ot&2)===0||i!==wt)&&(i===wt&&((ot&2)===0&&(Ja|=o),qt===4&&Xr(i,We,Si,!1)),Ns(i))}function v0(i,r,o){if((ot&6)!==0)throw Error(s(327));var c=!o&&(r&127)===0&&(r&i.expiredLanes)===0||Lt(i,r),d=c?QI(i,r):_p(i,r,!0),m=c;do{if(d===0){rl&&!c&&Xr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!WI(o)){d=_p(i,r,!1),m=!1;continue}if(d===2){if(m=r,i.errorRecoveryDisabledLanes&m)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var w=i;d=Bc;var M=w.current.memoizedState.isDehydrated;if(M&&(ll(w,v).flags|=256),v=_p(w,v,!1),v!==2){if(up&&!M){w.errorRecoveryDisabledLanes|=m,Ja|=m,d=4;break e}m=ni,ni=d,m!==null&&(ni===null?ni=m:ni.push.apply(ni,m))}d=v}if(m=!1,d!==2)continue}}if(d===1){ll(i,0),Xr(i,r,0,!0);break}e:{switch(c=i,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Xr(c,r,Si,!Wr);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=Qh+300-Ue(),10<d)){if(Xr(c,r,Si,!Wr),$n(c,0,!0)!==0)break e;lr=r,c.timeoutHandle=$0(E0.bind(null,c,o,ni,Xh,dp,r,Si,Ja,al,Wr,m,"Throttled",-0,0),d);break e}E0(c,o,ni,Xh,dp,r,Si,Ja,al,Wr,m,null,-0,0)}}break}while(!0);Ns(i)}function E0(i,r,o,c,d,m,v,w,M,H,X,ne,W,$){if(i.timeoutHandle=-1,ne=r.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},d0(r,m,ne);var ve=(m&62914560)===m?Qh-Ue():(m&4194048)===m?g0-Ue():0;if(ve=D2(ne,ve),ve!==null){lr=m,i.cancelPendingCommit=ve(I0.bind(null,i,r,m,o,c,d,v,w,M,X,ne,null,W,$)),Xr(i,m,v,!H);return}}I0(i,r,m,o,c,d,v,w,M)}function WI(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!_i(m(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(i,r,o,c){r&=~hp,r&=~Ja,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var m=31-_t(d),v=1<<m;c[m]=-1,d&=~v}o!==0&&qs(i,o,r)}function Zh(){return(ot&6)===0?(qc(0),!1):!0}function gp(){if(He!==null){if(dt===0)var i=He.return;else i=He,Xs=Ha=null,Mm(i),Zo=null,Ac=0,i=He;for(;i!==null;)XE(i.alternate,i),i=i.return;He=null}}function ll(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,f2(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),lr=0,gp(),wt=i,He=o=Qs(i.current,null),We=r,dt=0,Ti=null,Wr=!1,rl=Lt(i,r),up=!1,al=Si=hp=Ja=Yr=qt=0,ni=Bc=null,dp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-_t(c),m=1<<d;r|=i[d],c&=~m}return or=r,vh(),o}function T0(i,r){je=null,B.H=Oc,r===Xo||r===Rh?(r=Vv(),dt=3):r===Em?(r=Vv(),dt=4):dt=r===Ym?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Ti=r,He===null&&(qt=1,Bh(i,ji(r,i.current)))}function S0(){var i=vi.current;return i===null?!0:(We&4194048)===We?Fi===null:(We&62914560)===We||(We&536870912)!==0?i===Fi:!1}function w0(){var i=B.H;return B.H=Oc,i===null?Oc:i}function b0(){var i=B.A;return B.A=GI,i}function Jh(){qt=4,Wr||(We&4194048)!==We&&vi.current!==null||(rl=!0),(Yr&134217727)===0&&(Ja&134217727)===0||wt===null||Xr(wt,We,Si,!1)}function _p(i,r,o){var c=ot;ot|=2;var d=w0(),m=b0();(wt!==i||We!==r)&&(Xh=null,ll(i,r)),r=!1;var v=qt;e:do try{if(dt!==0&&He!==null){var w=He,M=Ti;switch(dt){case 8:gp(),v=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(r=!0);var H=dt;if(dt=0,Ti=null,cl(i,w,M,H),o&&rl){v=0;break e}break;default:H=dt,dt=0,Ti=null,cl(i,w,M,H)}}YI(),v=qt;break}catch(X){T0(i,X)}while(!0);return r&&i.shellSuspendCounter++,Xs=Ha=null,ot=c,B.H=d,B.A=m,He===null&&(wt=null,We=0,vh()),v}function YI(){for(;He!==null;)A0(He)}function QI(i,r){var o=ot;ot|=2;var c=w0(),d=b0();wt!==i||We!==r?(Xh=null,$h=Ue()+500,ll(i,r)):rl=Lt(i,r);e:do try{if(dt!==0&&He!==null){r=He;var m=Ti;t:switch(dt){case 1:dt=0,Ti=null,cl(i,r,m,1);break;case 2:case 9:if(Pv(m)){dt=0,Ti=null,C0(r);break}r=function(){dt!==2&&dt!==9||wt!==i||(dt=7),Ns(i)},m.then(r,r);break e;case 3:dt=7;break e;case 4:dt=5;break e;case 7:Pv(m)?(dt=0,Ti=null,C0(r)):(dt=0,Ti=null,cl(i,r,m,7));break;case 5:var v=null;switch(He.tag){case 26:v=He.memoizedState;case 5:case 27:var w=He;if(v?hT(v):w.stateNode.complete){dt=0,Ti=null;var M=w.sibling;if(M!==null)He=M;else{var H=w.return;H!==null?(He=H,ed(H)):He=null}break t}}dt=0,Ti=null,cl(i,r,m,5);break;case 6:dt=0,Ti=null,cl(i,r,m,6);break;case 8:gp(),qt=6;break e;default:throw Error(s(462))}}$I();break}catch(X){T0(i,X)}while(!0);return Xs=Ha=null,B.H=c,B.A=d,ot=o,He!==null?0:(wt=null,We=0,vh(),qt)}function $I(){for(;He!==null&&!qe();)A0(He)}function A0(i){var r=QE(i.alternate,i,or);i.memoizedProps=i.pendingProps,r===null?ed(i):He=r}function C0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=qE(o,r,r.pendingProps,r.type,void 0,We);break;case 11:r=qE(o,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:Mm(r);default:XE(o,r),r=He=bv(r,or),r=QE(o,r,or)}i.memoizedProps=i.pendingProps,r===null?ed(i):He=r}function cl(i,r,o,c){Xs=Ha=null,Mm(r),Zo=null,Ac=0;var d=r.return;try{if(jI(i,d,r,o,We)){qt=1,Bh(i,ji(o,i.current)),He=null;return}}catch(m){if(d!==null)throw He=d,m;qt=1,Bh(i,ji(o,i.current)),He=null;return}r.flags&32768?(Xe||c===1?i=!0:rl||(We&536870912)!==0?i=!1:(Wr=i=!0,(c===2||c===9||c===3||c===6)&&(c=vi.current,c!==null&&c.tag===13&&(c.flags|=16384))),R0(r,i)):ed(r)}function ed(i){var r=i;do{if((r.flags&32768)!==0){R0(r,Wr);return}i=r.return;var o=BI(r.alternate,r,or);if(o!==null){He=o;return}if(r=r.sibling,r!==null){He=r;return}He=r=i}while(r!==null);qt===0&&(qt=5)}function R0(i,r){do{var o=FI(i.alternate,i);if(o!==null){o.flags&=32767,He=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){He=i;return}He=i=o}while(i!==null);qt=6,He=null}function I0(i,r,o,c,d,m,v,w,M){i.cancelPendingCommit=null;do td();while(dn!==0);if((ot&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=rm,Rr(i,o,m,v,w,M),i===wt&&(He=wt=null,We=0),ol=r,$r=i,lr=o,fp=m,mp=d,_0=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,e2(Ht,function(){return O0(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,d=re.p,re.p=2,v=ot,ot|=4;try{qI(i,r,o)}finally{ot=v,re.p=d,B.T=c}}dn=1,N0(),x0(),D0()}}function N0(){if(dn===1){dn=0;var i=$r,r=ol,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var c=re.p;re.p=2;var d=ot;ot|=4;try{c0(r,i);var m=Np,v=pv(i.containerInfo),w=m.focusedElem,M=m.selectionRange;if(v!==w&&w&&w.ownerDocument&&mv(w.ownerDocument.documentElement,w)){if(M!==null&&em(w)){var H=M.start,X=M.end;if(X===void 0&&(X=H),"selectionStart"in w)w.selectionStart=H,w.selectionEnd=Math.min(X,w.value.length);else{var ne=w.ownerDocument||document,W=ne&&ne.defaultView||window;if(W.getSelection){var $=W.getSelection(),ve=w.textContent.length,Re=Math.min(M.start,ve),Tt=M.end===void 0?Re:Math.min(M.end,ve);!$.extend&&Re>Tt&&(v=Tt,Tt=Re,Re=v);var j=fv(w,Re),L=fv(w,Tt);if(j&&L&&($.rangeCount!==1||$.anchorNode!==j.node||$.anchorOffset!==j.offset||$.focusNode!==L.node||$.focusOffset!==L.offset)){var F=ne.createRange();F.setStart(j.node,j.offset),$.removeAllRanges(),Re>Tt?($.addRange(F),$.extend(L.node,L.offset)):(F.setEnd(L.node,L.offset),$.addRange(F))}}}}for(ne=[],$=w;$=$.parentNode;)$.nodeType===1&&ne.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ne.length;w++){var ee=ne[w];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}fd=!!Ip,Np=Ip=null}finally{ot=d,re.p=c,B.T=o}}i.current=r,dn=2}}function x0(){if(dn===2){dn=0;var i=$r,r=ol,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var c=re.p;re.p=2;var d=ot;ot|=4;try{s0(i,r.alternate,r)}finally{ot=d,re.p=c,B.T=o}}dn=3}}function D0(){if(dn===4||dn===3){dn=0,pt();var i=$r,r=ol,o=lr,c=_0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?dn=5:(dn=0,ol=$r=null,M0(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Qr=null),Xi(o),r=r.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Zt,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=B.T,d=re.p,re.p=2,B.T=null;try{for(var m=i.onRecoverableError,v=0;v<c.length;v++){var w=c[v];m(w.value,{componentStack:w.stack})}}finally{B.T=r,re.p=d}}(lr&3)!==0&&td(),Ns(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===pp?Fc++:(Fc=0,pp=i):Fc=0,qc(0)}}function M0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,wc(r)))}function td(){return N0(),x0(),D0(),O0()}function O0(){if(dn!==5)return!1;var i=$r,r=fp;fp=0;var o=Xi(lr),c=B.T,d=re.p;try{re.p=32>o?32:o,B.T=null,o=mp,mp=null;var m=$r,v=lr;if(dn=0,ol=$r=null,lr=0,(ot&6)!==0)throw Error(s(331));var w=ot;if(ot|=4,m0(m.current),h0(m,m.current,v,o),ot=w,qc(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Zt,m)}catch{}return!0}finally{re.p=d,B.T=c,M0(i,r)}}function k0(i,r,o){r=ji(o,r),r=Wm(i.stateNode,r,2),i=qr(i,r,2),i!==null&&(ps(i,2),Ns(i))}function ft(i,r,o){if(i.tag===3)k0(i,i,o);else for(;r!==null;){if(r.tag===3){k0(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qr===null||!Qr.has(c))){i=ji(o,i),o=PE(2),c=qr(r,o,2),c!==null&&(LE(o,c,r,i),ps(c,2),Ns(c));break}}r=r.return}}function yp(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new KI;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(up=!0,d.add(o),i=XI.bind(null,i,r,o),r.then(i,i))}function XI(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,wt===i&&(We&o)===o&&(qt===4||qt===3&&(We&62914560)===We&&300>Ue()-Qh?(ot&2)===0&&ll(i,0):hp|=o,al===We&&(al=0)),Ns(i)}function P0(i,r){r===0&&(r=Di()),i=Ba(i,r),i!==null&&(ps(i,r),Ns(i))}function ZI(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),P0(i,o)}function JI(i,r){var o=0;switch(i.tag){case 31:case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),P0(i,o)}function e2(i,r){return le(i,r)}var nd=null,ul=null,vp=!1,id=!1,Ep=!1,Zr=0;function Ns(i){i!==ul&&i.next===null&&(ul===null?nd=ul=i:ul=ul.next=i),id=!0,vp||(vp=!0,n2())}function qc(i,r){if(!Ep&&id){Ep=!0;do for(var o=!1,c=nd;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var v=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-_t(42|i)+1)-1,m&=d&~(v&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,U0(c,m))}else m=We,m=$n(c,c===wt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Lt(c,m)||(o=!0,U0(c,m));c=c.next}while(o);Ep=!1}}function t2(){L0()}function L0(){id=vp=!1;var i=0;Zr!==0&&d2()&&(i=Zr);for(var r=Ue(),o=null,c=nd;c!==null;){var d=c.next,m=V0(c,r);m===0?(c.next=null,o===null?nd=d:o.next=d,d===null&&(ul=o)):(o=c,(i!==0||(m&3)!==0)&&(id=!0)),c=d}dn!==0&&dn!==5||qc(i),Zr!==0&&(Zr=0)}function V0(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var v=31-_t(m),w=1<<v,M=d[v];M===-1?((w&o)===0||(w&c)!==0)&&(d[v]=Jt(w,r)):M<=r&&(i.expiredLanes|=w),m&=~w}if(r=wt,o=We,o=$n(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(dt===2||dt===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&ae(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Lt(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&ae(c),Xi(o)){case 2:case 8:o=pn;break;case 32:o=Ht;break;case 268435456:o=Xt;break;default:o=Ht}return c=j0.bind(null,i),o=le(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&ae(c),i.callbackPriority=2,i.callbackNode=null,2}function j0(i,r){if(dn!==0&&dn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(td()&&i.callbackNode!==o)return null;var c=We;return c=$n(i,i===wt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(v0(i,c,r),V0(i,Ue()),i.callbackNode!=null&&i.callbackNode===o?j0.bind(null,i):null)}function U0(i,r){if(td())return null;v0(i,r,!0)}function n2(){m2(function(){(ot&6)!==0?le(Qn,t2):L0()})}function Tp(){if(Zr===0){var i=Qo;i===0&&(i=On,On<<=1,(On&261888)===0&&(On=256)),Zr=i}return Zr}function z0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ko(""+i)}function B0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function i2(i,r,o,c,d){if(r==="submit"&&o&&o.stateNode===d){var m=z0((d[en]||null).action),v=c.submitter;v&&(r=(r=v[en]||null)?z0(r.formAction):v.getAttribute("formAction"),r!==null&&(m=r,v=null));var w=new Ss("action","action",null,c,d);i.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Zr!==0){var M=v?B0(d,v):new FormData(d);Bm(o,{pending:!0,data:M,method:d.method,action:m},null,M)}}else typeof m=="function"&&(w.preventDefault(),M=v?B0(d,v):new FormData(d),Bm(o,{pending:!0,data:M,method:d.method,action:m},m,M))},currentTarget:d}]})}}for(var Sp=0;Sp<sm.length;Sp++){var wp=sm[Sp],s2=wp.toLowerCase(),r2=wp[0].toUpperCase()+wp.slice(1);is(s2,"on"+r2)}is(yv,"onAnimationEnd"),is(vv,"onAnimationIteration"),is(Ev,"onAnimationStart"),is("dblclick","onDoubleClick"),is("focusin","onFocus"),is("focusout","onBlur"),is(TI,"onTransitionRun"),is(SI,"onTransitionStart"),is(wI,"onTransitionCancel"),is(Tv,"onTransitionEnd"),ys("onMouseEnter",["mouseout","mouseover"]),ys("onMouseLeave",["mouseout","mouseover"]),ys("onPointerEnter",["pointerout","pointerover"]),ys("onPointerLeave",["pointerout","pointerover"]),_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_s("onBeforeInput",["compositionend","keypress","textInput","paste"]),_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hc));function F0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var v=c.length-1;0<=v;v--){var w=c[v],M=w.instance,H=w.currentTarget;if(w=w.listener,M!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=H;try{m(d)}catch(X){yh(X)}d.currentTarget=null,m=M}else for(v=0;v<c.length;v++){if(w=c[v],M=w.instance,H=w.currentTarget,w=w.listener,M!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=H;try{m(d)}catch(X){yh(X)}d.currentTarget=null,m=M}}}}function Ge(i,r){var o=r[Gs];o===void 0&&(o=r[Gs]=new Set);var c=i+"__bubble";o.has(c)||(q0(r,i,2,!1),o.add(c))}function bp(i,r,o){var c=0;r&&(c|=4),q0(o,i,c,r)}var sd="_reactListening"+Math.random().toString(36).slice(2);function Ap(i){if(!i[sd]){i[sd]=!0,nc.forEach(function(o){o!=="selectionchange"&&(a2.has(o)||bp(o,!1,i),bp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[sd]||(r[sd]=!0,bp("selectionchange",!1,r))}}function q0(i,r,o,c){switch(yT(r)){case 2:var d=k2;break;case 8:d=P2;break;default:d=zp}o=d.bind(null,r,o,i),d=void 0,!Oa||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function Cp(i,r,o,c,d){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var w=c.stateNode.containerInfo;if(w===d)break;if(v===4)for(v=c.return;v!==null;){var M=v.tag;if((M===3||M===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;w!==null;){if(v=jt(w),v===null)return;if(M=v.tag,M===5||M===6||M===26||M===27){c=m=v;continue e}w=w.parentNode}}c=c.return}Or(function(){var H=m,X=ki(o),ne=[];e:{var W=Sv.get(i);if(W!==void 0){var $=Ss,ve=i;switch(i){case"keypress":if(Pa(o)===0)break e;case"keydown":case"keyup":$=ph;break;case"focusin":ve="focus",$=Va;break;case"focusout":ve="blur",$=Va;break;case"beforeblur":case"afterblur":$=Va;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=y;break;case yv:case vv:case Ev:$=lh;break;case Tv:$=b;break;case"scroll":case"scrollend":$=mc;break;case"wheel":$=Q;break;case"copy":case"cut":case"paste":$=ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Ys;break;case"toggle":case"beforetoggle":$=Ve}var Re=(r&4)!==0,Tt=!Re&&(i==="scroll"||i==="scrollend"),j=Re?W!==null?W+"Capture":null:W;Re=[];for(var L=H,F;L!==null;){var ee=L;if(F=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||F===null||j===null||(ee=Ji(L,j),ee!=null&&Re.push(Gc(L,ee,F))),Tt)break;L=L.return}0<Re.length&&(W=new $(W,ve,null,o,X),ne.push({event:W,listeners:Re}))}}if((r&7)===0){e:{if(W=i==="mouseover"||i==="pointerover",$=i==="mouseout"||i==="pointerout",W&&o!==hc&&(ve=o.relatedTarget||o.fromElement)&&(jt(ve)||ve[Mi]))break e;if(($||W)&&(W=X.window===X?X:(W=X.ownerDocument)?W.defaultView||W.parentWindow:window,$?(ve=o.relatedTarget||o.toElement,$=H,ve=ve?jt(ve):null,ve!==null&&(Tt=l(ve),Re=ve.tag,ve!==Tt||Re!==5&&Re!==27&&Re!==6)&&(ve=null)):($=null,ve=H),$!==ve)){if(Re=pc,ee="onMouseLeave",j="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(Re=Ys,ee="onPointerLeave",j="onPointerEnter",L="pointer"),Tt=$==null?W:pi($),F=ve==null?W:pi(ve),W=new Re(ee,L+"leave",$,o,X),W.target=Tt,W.relatedTarget=F,ee=null,jt(X)===H&&(Re=new Re(j,L+"enter",ve,o,X),Re.target=F,Re.relatedTarget=Tt,ee=Re),Tt=ee,$&&ve)t:{for(Re=o2,j=$,L=ve,F=0,ee=j;ee;ee=Re(ee))F++;ee=0;for(var Se=L;Se;Se=Re(Se))ee++;for(;0<F-ee;)j=Re(j),F--;for(;0<ee-F;)L=Re(L),ee--;for(;F--;){if(j===L||L!==null&&j===L.alternate){Re=j;break t}j=Re(j),L=Re(L)}Re=null}else Re=null;$!==null&&H0(ne,W,$,Re,!1),ve!==null&&Tt!==null&&H0(ne,Tt,ve,Re,!0)}}e:{if(W=H?pi(H):window,$=W.nodeName&&W.nodeName.toLowerCase(),$==="select"||$==="input"&&W.type==="file")var st=ov;else if(rv(W))if(lv)st=yI;else{st=gI;var Te=pI}else $=W.nodeName,!$||$.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?H&&Oo(H.elementType)&&(st=ov):st=_I;if(st&&(st=st(i,H))){av(ne,st,o,X);break e}Te&&Te(i,W,H),i==="focusout"&&H&&W.type==="number"&&H.memoizedProps.value!=null&&lc(W,"number",W.value)}switch(Te=H?pi(H):window,i){case"focusin":(rv(Te)||Te.contentEditable==="true")&&(Bo=Te,tm=H,Ec=null);break;case"focusout":Ec=tm=Bo=null;break;case"mousedown":nm=!0;break;case"contextmenu":case"mouseup":case"dragend":nm=!1,gv(ne,o,X);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":gv(ne,o,X)}var ze;if(at)e:{switch(i){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else zo?ja(i,o)&&(Ye="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(As&&o.locale!=="ko"&&(zo||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&zo&&(ze=fc()):(Ts=X,dc="value"in Ts?Ts.value:Ts.textContent,zo=!0)),Te=rd(H,Ye),0<Te.length&&(Ye=new bs(Ye,i,null,o,X),ne.push({event:Ye,listeners:Te}),ze?Ye.data=ze:(ze=Uo(o),ze!==null&&(Ye.data=ze)))),(ze=Li?hI(i,o):dI(i,o))&&(Ye=rd(H,"onBeforeInput"),0<Ye.length&&(Te=new bs("onBeforeInput","beforeinput",null,o,X),ne.push({event:Te,listeners:Ye}),Te.data=ze)),i2(ne,i,H,o,X)}F0(ne,r)})}function Gc(i,r,o){return{instance:i,listener:r,currentTarget:o}}function rd(i,r){for(var o=r+"Capture",c=[];i!==null;){var d=i,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ji(i,o),d!=null&&c.unshift(Gc(i,d,m)),d=Ji(i,r),d!=null&&c.push(Gc(i,d,m))),i.tag===3)return c;i=i.return}return[]}function o2(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function H0(i,r,o,c,d){for(var m=r._reactName,v=[];o!==null&&o!==c;){var w=o,M=w.alternate,H=w.stateNode;if(w=w.tag,M!==null&&M===c)break;w!==5&&w!==26&&w!==27||H===null||(M=H,d?(H=Ji(o,m),H!=null&&v.unshift(Gc(o,H,M))):d||(H=Ji(o,m),H!=null&&v.push(Gc(o,H,M)))),o=o.return}v.length!==0&&i.push({event:r,listeners:v})}var l2=/\r\n?/g,c2=/\u0000|\uFFFD/g;function G0(i){return(typeof i=="string"?i:""+i).replace(l2,`
`).replace(c2,"")}function K0(i,r){return r=G0(r),G0(i)===r}function Et(i,r,o,c,d,m){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Zn(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Zn(i,""+c);break;case"className":gi(i,"class",c);break;case"tabIndex":gi(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(i,o,c);break;case"style":uc(i,c,m);break;case"data":if(r!=="object"){gi(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ko(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&Et(i,r,"name",d.name,d,null),Et(i,r,"formEncType",d.formEncType,d,null),Et(i,r,"formMethod",d.formMethod,d,null),Et(i,r,"formTarget",d.formTarget,d,null)):(Et(i,r,"encType",d.encType,d,null),Et(i,r,"method",d.method,d,null),Et(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ko(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=Zi);break;case"onScroll":c!=null&&Ge("scroll",i);break;case"onScrollEnd":c!=null&&Ge("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=ko(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Ge("beforetoggle",i),Ge("toggle",i),Do(i,"popover",c);break;case"xlinkActuate":nn(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":nn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":nn(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":nn(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":nn(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":nn(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":nn(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":nn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":nn(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Do(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=rh.get(o)||o,Do(i,o,c))}}function Rp(i,r,o,c,d,m){switch(o){case"style":uc(i,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?Zn(i,c):(typeof c=="number"||typeof c=="bigint")&&Zn(i,""+c);break;case"onScroll":c!=null&&Ge("scroll",i);break;case"onScrollEnd":c!=null&&Ge("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),m=i[en]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,d);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):Do(i,o,c)}}}function In(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",i),Ge("load",i);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Et(i,r,m,v,o,null)}}d&&Et(i,r,"srcSet",o.srcSet,o,null),c&&Et(i,r,"src",o.src,o,null);return;case"input":Ge("invalid",i);var w=m=v=d=null,M=null,H=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":d=X;break;case"type":v=X;break;case"checked":M=X;break;case"defaultChecked":H=X;break;case"value":m=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:Et(i,r,c,X,o,null)}}nh(i,m,w,M,H,v,d,!1);return;case"select":Ge("invalid",i),c=v=m=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":v=w;break;case"multiple":c=w;default:Et(i,r,d,w,o,null)}r=m,o=v,i.multiple=!!c,r!=null?Nr(i,!!c,r,!1):o!=null&&Nr(i,!!c,o,!0);return;case"textarea":Ge("invalid",i),m=d=c=null;for(v in o)if(o.hasOwnProperty(v)&&(w=o[v],w!=null))switch(v){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Et(i,r,v,w,o,null)}xr(i,c,d,m);return;case"option":for(M in o)if(o.hasOwnProperty(M)&&(c=o[M],c!=null))switch(M){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Et(i,r,M,c,o,null)}return;case"dialog":Ge("beforetoggle",i),Ge("toggle",i),Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":Ge("load",i);break;case"video":case"audio":for(c=0;c<Hc.length;c++)Ge(Hc[c],i);break;case"image":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"embed":case"source":case"link":Ge("error",i),Ge("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(c=o[H],c!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Et(i,r,H,c,o,null)}return;default:if(Oo(r)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&Rp(i,r,X,c,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(c=o[w],c!=null&&Et(i,r,w,c,o,null))}function u2(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,v=null,w=null,M=null,H=null,X=null;for($ in o){var ne=o[$];if(o.hasOwnProperty($)&&ne!=null)switch($){case"checked":break;case"value":break;case"defaultValue":M=ne;default:c.hasOwnProperty($)||Et(i,r,$,null,c,ne)}}for(var W in c){var $=c[W];if(ne=o[W],c.hasOwnProperty(W)&&($!=null||ne!=null))switch(W){case"type":m=$;break;case"name":d=$;break;case"checked":H=$;break;case"defaultChecked":X=$;break;case"value":v=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:$!==ne&&Et(i,r,W,$,c,ne)}}Mo(i,v,w,M,H,X,m,d);return;case"select":$=v=w=W=null;for(m in o)if(M=o[m],o.hasOwnProperty(m)&&M!=null)switch(m){case"value":break;case"multiple":$=M;default:c.hasOwnProperty(m)||Et(i,r,m,null,c,M)}for(d in c)if(m=c[d],M=o[d],c.hasOwnProperty(d)&&(m!=null||M!=null))switch(d){case"value":W=m;break;case"defaultValue":w=m;break;case"multiple":v=m;default:m!==M&&Et(i,r,d,m,c,M)}r=w,o=v,c=$,W!=null?Nr(i,!!o,W,!1):!!c!=!!o&&(r!=null?Nr(i,!!o,r,!0):Nr(i,!!o,o?[]:"",!1));return;case"textarea":$=W=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Et(i,r,w,null,c,d)}for(v in c)if(d=c[v],m=o[v],c.hasOwnProperty(v)&&(d!=null||m!=null))switch(v){case"value":W=d;break;case"defaultValue":$=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&Et(i,r,v,d,c,m)}ih(i,W,$);return;case"option":for(var ve in o)if(W=o[ve],o.hasOwnProperty(ve)&&W!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:Et(i,r,ve,null,c,W)}for(M in c)if(W=c[M],$=o[M],c.hasOwnProperty(M)&&W!==$&&(W!=null||$!=null))switch(M){case"selected":i.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Et(i,r,M,W,c,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in o)W=o[Re],o.hasOwnProperty(Re)&&W!=null&&!c.hasOwnProperty(Re)&&Et(i,r,Re,null,c,W);for(H in c)if(W=c[H],$=o[H],c.hasOwnProperty(H)&&W!==$&&(W!=null||$!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:Et(i,r,H,W,c,$)}return;default:if(Oo(r)){for(var Tt in o)W=o[Tt],o.hasOwnProperty(Tt)&&W!==void 0&&!c.hasOwnProperty(Tt)&&Rp(i,r,Tt,void 0,c,W);for(X in c)W=c[X],$=o[X],!c.hasOwnProperty(X)||W===$||W===void 0&&$===void 0||Rp(i,r,X,W,c,$);return}}for(var j in o)W=o[j],o.hasOwnProperty(j)&&W!=null&&!c.hasOwnProperty(j)&&Et(i,r,j,null,c,W);for(ne in c)W=c[ne],$=o[ne],!c.hasOwnProperty(ne)||W===$||W==null&&$==null||Et(i,r,ne,W,c,$)}function W0(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function h2(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var d=o[c],m=d.transferSize,v=d.initiatorType,w=d.duration;if(m&&w&&W0(v)){for(v=0,w=d.responseEnd,c+=1;c<o.length;c++){var M=o[c],H=M.startTime;if(H>w)break;var X=M.transferSize,ne=M.initiatorType;X&&W0(ne)&&(M=M.responseEnd,v+=X*(M<w?1:(w-H)/(M-H)))}if(--c,r+=8*(m+v)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Ip=null,Np=null;function ad(i){return i.nodeType===9?i:i.ownerDocument}function Y0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function xp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dp=null;function d2(){var i=window.event;return i&&i.type==="popstate"?i===Dp?!1:(Dp=i,!0):(Dp=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,m2=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(i){return X0.resolve(null).then(i).catch(p2)}:$0;function p2(i){setTimeout(function(){throw i})}function Jr(i){return i==="head"}function Z0(i,r){var o=r,c=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(c===0){i.removeChild(d),ml(r);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Kc(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,Kc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,w=m.nodeName;m[it]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&Kc(i.ownerDocument.body);o=d}while(o);ml(r)}function J0(i,r){var o=i;i=0;do{var c=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=c}while(o)}function Mp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Mp(o),Mt(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function g2(i,r,o,c){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[it])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=qi(i.nextSibling),i===null)break}return null}function _2(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=qi(i.nextSibling),i===null))return null;return i}function eT(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=qi(i.nextSibling),i===null))return null;return i}function Op(i){return i.data==="$?"||i.data==="$~"}function kp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function y2(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function qi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var Pp=null;function tT(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return qi(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function nT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function iT(i,r,o){switch(r=ad(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Kc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Mt(i)}var Hi=new Map,sT=new Set;function od(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var cr=re.d;re.d={f:v2,r:E2,D:T2,C:S2,L:w2,m:b2,X:C2,S:A2,M:R2};function v2(){var i=cr.f(),r=Zh();return i||r}function E2(i){var r=Oi(i);r!==null&&r.tag===5&&r.type==="form"?TE(r):cr.r(i)}var hl=typeof document>"u"?null:document;function rT(i,r,o){var c=hl;if(c&&typeof r=="string"&&r){var d=Xn(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),sT.has(d)||(sT.add(d),i={rel:i,crossOrigin:o,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),In(r,"link",i),tn(r),c.head.appendChild(r)))}}function T2(i){cr.D(i),rT("dns-prefetch",i,null)}function S2(i,r){cr.C(i,r),rT("preconnect",i,r)}function w2(i,r,o){cr.L(i,r,o);var c=hl;if(c&&i&&r){var d='link[rel="preload"][as="'+Xn(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Xn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Xn(o.imageSizes)+'"]')):d+='[href="'+Xn(i)+'"]';var m=d;switch(r){case"style":m=dl(i);break;case"script":m=fl(i)}Hi.has(m)||(i=S({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Hi.set(m,i),c.querySelector(d)!==null||r==="style"&&c.querySelector(Wc(m))||r==="script"&&c.querySelector(Yc(m))||(r=c.createElement("link"),In(r,"link",i),tn(r),c.head.appendChild(r)))}}function b2(i,r){cr.m(i,r);var o=hl;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+Xn(c)+'"][href="'+Xn(i)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fl(i)}if(!Hi.has(m)&&(i=S({rel:"modulepreload",href:i},r),Hi.set(m,i),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Yc(m)))return}c=o.createElement("link"),In(c,"link",i),tn(c),o.head.appendChild(c)}}}function A2(i,r,o){cr.S(i,r,o);var c=hl;if(c&&i){var d=gs(c).hoistableStyles,m=dl(i);r=r||"default";var v=d.get(m);if(!v){var w={loading:0,preload:null};if(v=c.querySelector(Wc(m)))w.loading=5;else{i=S({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Hi.get(m))&&Lp(i,o);var M=v=c.createElement("link");tn(M),In(M,"link",i),M._p=new Promise(function(H,X){M.onload=H,M.onerror=X}),M.addEventListener("load",function(){w.loading|=1}),M.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ld(v,r,c)}v={type:"stylesheet",instance:v,count:1,state:w},d.set(m,v)}}}function C2(i,r){cr.X(i,r);var o=hl;if(o&&i){var c=gs(o).hoistableScripts,d=fl(i),m=c.get(d);m||(m=o.querySelector(Yc(d)),m||(i=S({src:i,async:!0},r),(r=Hi.get(d))&&Vp(i,r),m=o.createElement("script"),tn(m),In(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function R2(i,r){cr.M(i,r);var o=hl;if(o&&i){var c=gs(o).hoistableScripts,d=fl(i),m=c.get(d);m||(m=o.querySelector(Yc(d)),m||(i=S({src:i,async:!0,type:"module"},r),(r=Hi.get(d))&&Vp(i,r),m=o.createElement("script"),tn(m),In(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function aT(i,r,o,c){var d=(d=Ce.current)?od(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=dl(o.href),o=gs(d).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=dl(o.href);var m=gs(d).hoistableStyles,v=m.get(i);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,v),(m=d.querySelector(Wc(i)))&&!m._p&&(v.instance=m,v.state.loading=5),Hi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Hi.set(i,o),m||I2(d,i,o,v.state))),r&&c===null)throw Error(s(528,""));return v}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=fl(o),o=gs(d).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function dl(i){return'href="'+Xn(i)+'"'}function Wc(i){return'link[rel="stylesheet"]['+i+"]"}function oT(i){return S({},i,{"data-precedence":i.precedence,precedence:null})}function I2(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),In(r,"link",o),tn(r),i.head.appendChild(r))}function fl(i){return'[src="'+Xn(i)+'"]'}function Yc(i){return"script[async]"+i}function lT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+Xn(o.href)+'"]');if(c)return r.instance=c,tn(c),c;var d=S({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),tn(c),In(c,"style",d),ld(c,o.precedence,i),r.instance=c;case"stylesheet":d=dl(o.href);var m=i.querySelector(Wc(d));if(m)return r.state.loading|=4,r.instance=m,tn(m),m;c=oT(o),(d=Hi.get(d))&&Lp(c,d),m=(i.ownerDocument||i).createElement("link"),tn(m);var v=m;return v._p=new Promise(function(w,M){v.onload=w,v.onerror=M}),In(m,"link",c),r.state.loading|=4,ld(m,o.precedence,i),r.instance=m;case"script":return m=fl(o.src),(d=i.querySelector(Yc(m)))?(r.instance=d,tn(d),d):(c=o,(d=Hi.get(m))&&(c=S({},o),Vp(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),tn(d),In(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,ld(c,o.precedence,i));return r.instance}function ld(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,v=0;v<c.length;v++){var w=c[v];if(w.dataset.precedence===r)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Lp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Vp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var cd=null;function cT(i,r,o){if(cd===null){var c=new Map,d=cd=new Map;d.set(o,c)}else d=cd,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var m=o[d];if(!(m[it]||m[Bt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(r)||"";v=i+v;var w=c.get(v);w?w.push(m):c.set(v,[m])}}return c}function uT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function N2(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function hT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function x2(i,r,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=dl(c.href),m=r.querySelector(Wc(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=ud.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=m,tn(m);return}m=r.ownerDocument||r,c=oT(c),(d=Hi.get(d))&&Lp(c,d),m=m.createElement("link"),tn(m);var v=m;v._p=new Promise(function(w,M){v.onload=w,v.onerror=M}),In(m,"link",c),o.instance=m}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=ud.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var jp=0;function D2(i,r){return i.stylesheets&&i.count===0&&dd(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var c=setTimeout(function(){if(i.stylesheets&&dd(i,i.stylesheets),i.unsuspend){var m=i.unsuspend;i.unsuspend=null,m()}},6e4+r);0<i.imgBytes&&jp===0&&(jp=62500*h2());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&dd(i,i.stylesheets),i.unsuspend)){var m=i.unsuspend;i.unsuspend=null,m()}},(i.imgBytes>jp?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function ud(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var hd=null;function dd(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,hd=new Map,r.forEach(M2,i),hd=null,ud.call(i))}function M2(i,r){if(!(r.state.loading&4)){var o=hd.get(i);if(o)var c=o.get(null);else{o=new Map,hd.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var v=d[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),c=v)}c&&o.set(null,c)}d=r.instance,v=d.getAttribute("data-precedence"),m=o.get(v)||c,m===c&&o.set(null,d),o.set(v,d),this.count++,c=ud.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Qc={$$typeof:oe,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function O2(i,r,o,c,d,m,v,w,M){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.hiddenUpdates=qn(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function dT(i,r,o,c,d,m,v,w,M,H,X,ne){return i=new O2(i,r,o,v,M,H,X,ne,w),r=1,m===!0&&(r|=24),m=yi(3,null,null,r),i.current=m,m.stateNode=i,r=_m(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:r},Tm(m),i}function fT(i){return i?(i=Ho,i):Ho}function mT(i,r,o,c,d,m){d=fT(d),c.context===null?c.context=d:c.pendingContext=d,c=Fr(r),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=qr(i,c,r),o!==null&&(ii(o,i,r),Rc(o,i,r))}function pT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Up(i,r){pT(i,r),(i=i.alternate)&&pT(i,r)}function gT(i){if(i.tag===13||i.tag===31){var r=Ba(i,67108864);r!==null&&ii(r,i,67108864),Up(i,67108864)}}function _T(i){if(i.tag===13||i.tag===31){var r=wi();r=Hs(r);var o=Ba(i,r);o!==null&&ii(o,i,r),Up(i,r)}}var fd=!0;function k2(i,r,o,c){var d=B.T;B.T=null;var m=re.p;try{re.p=2,zp(i,r,o,c)}finally{re.p=m,B.T=d}}function P2(i,r,o,c){var d=B.T;B.T=null;var m=re.p;try{re.p=8,zp(i,r,o,c)}finally{re.p=m,B.T=d}}function zp(i,r,o,c){if(fd){var d=Bp(c);if(d===null)Cp(i,r,c,md,o),vT(i,c);else if(V2(d,i,r,o,c))c.stopPropagation();else if(vT(i,c),r&4&&-1<L2.indexOf(i)){for(;d!==null;){var m=Oi(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=fi(m.pendingLanes);if(v!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var M=1<<31-_t(v);w.entanglements[1]|=M,v&=~M}Ns(m),(ot&6)===0&&($h=Ue()+500,qc(0))}}break;case 31:case 13:w=Ba(m,2),w!==null&&ii(w,m,2),Zh(),Up(m,2)}if(m=Bp(c),m===null&&Cp(i,r,c,md,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Cp(i,r,c,null,o)}}function Bp(i){return i=ki(i),Fp(i)}var md=null;function Fp(i){if(md=null,i=jt(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return md=i,null}function yT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lt()){case Qn:return 2;case pn:return 8;case Ht:case Gt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var qp=!1,ea=null,ta=null,na=null,$c=new Map,Xc=new Map,ia=[],L2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vT(i,r){switch(i){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":$c.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xc.delete(r.pointerId)}}function Zc(i,r,o,c,d,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=Oi(r),r!==null&&gT(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function V2(i,r,o,c,d){switch(r){case"focusin":return ea=Zc(ea,i,r,o,c,d),!0;case"dragenter":return ta=Zc(ta,i,r,o,c,d),!0;case"mouseover":return na=Zc(na,i,r,o,c,d),!0;case"pointerover":var m=d.pointerId;return $c.set(m,Zc($c.get(m)||null,i,r,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Xc.set(m,Zc(Xc.get(m)||null,i,r,o,c,d)),!0}return!1}function ET(i){var r=jt(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,Vt(i.priority,function(){_T(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,Vt(i.priority,function(){_T(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function pd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Bp(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);hc=c,o.target.dispatchEvent(c),hc=null}else return r=Oi(o),r!==null&&gT(r),i.blockedOn=o,!1;r.shift()}return!0}function TT(i,r,o){pd(i)&&o.delete(r)}function j2(){qp=!1,ea!==null&&pd(ea)&&(ea=null),ta!==null&&pd(ta)&&(ta=null),na!==null&&pd(na)&&(na=null),$c.forEach(TT),Xc.forEach(TT)}function gd(i,r){i.blockedOn===r&&(i.blockedOn=null,qp||(qp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,j2)))}var _d=null;function ST(i){_d!==i&&(_d=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){_d===i&&(_d=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(Fp(c||o)===null)continue;break}var m=Oi(o);m!==null&&(i.splice(r,3),r-=3,Bm(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function ml(i){function r(M){return gd(M,i)}ea!==null&&gd(ea,i),ta!==null&&gd(ta,i),na!==null&&gd(na,i),$c.forEach(r),Xc.forEach(r);for(var o=0;o<ia.length;o++){var c=ia[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<ia.length&&(o=ia[0],o.blockedOn===null);)ET(o),o.blockedOn===null&&ia.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],v=d[en]||null;if(typeof m=="function")v||ST(o);else if(v){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,v=m[en]||null)w=v.formAction;else if(Fp(d)!==null)continue}else w=v.action;typeof w=="function"?o[c+1]=w:(o.splice(c,3),c-=3),ST(o)}}}function wT(){function i(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function Hp(i){this._internalRoot=i}yd.prototype.render=Hp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=wi();mT(o,c,i,r,null,null)},yd.prototype.unmount=Hp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;mT(i.current,2,null,i,null,null),Zh(),r[Mi]=null}};function yd(i){this._internalRoot=i}yd.prototype.unstable_scheduleHydration=function(i){if(i){var r=No();i={blockedOn:null,target:i,priority:r};for(var o=0;o<ia.length&&r!==0&&r<ia[o].priority;o++);ia.splice(o,0,i),o===0&&ET(i)}};var bT=e.version;if(bT!=="19.2.4")throw Error(s(527,bT,"19.2.4"));re.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?E(i):null,i=i===null?null:i.stateNode,i};var U2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vd.isDisabled&&vd.supportsFiber)try{Zt=vd.inject(U2),gt=vd}catch{}}return eu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",d=DE,m=ME,v=OE;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=dT(i,1,!1,null,null,o,c,null,d,m,v,wT),i[Mi]=r.current,Ap(i),new Hp(r)},eu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,d="",m=DE,v=ME,w=OE,M=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(M=o.formState)),r=dT(i,1,!0,r,o??null,c,d,M,m,v,w,wT),r.context=fT(null),o=r.current,c=wi(),c=Hs(c),d=Fr(c),d.callback=null,qr(o,d,c),o=c,r.current.lanes=o,ps(r,o),Ns(r),i[Mi]=r.current,Ap(i),new yd(r)},eu.version="19.2.4",eu}var kT;function Q2(){if(kT)return Wp.exports;kT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Wp.exports=Y2(),Wp.exports}var $2=Q2();const X2=()=>{};var PT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=function(n,e){if(!n)throw Fl(e)},Fl=function(n){return new Error("Firebase Database ("+Ab.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Z2=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],f=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,f=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,E=l>>2,S=(l&3)<<4|f>>4;let A=(f&15)<<2|g>>6,V=g&63;p||(V=64,u||(A=64)),s.push(t[E],t[S],t[A],t[V])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cb(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Z2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const S=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||S==null)throw new J2;const A=l<<2|f>>4;if(s.push(A),g!==64){const V=f<<4&240|g>>2;if(s.push(V),S!==64){const q=g<<6&192|S;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class J2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rb=function(n){const e=Cb(n);return R_.encodeByteArray(e,!0)},qd=function(n){return Rb(n).replace(/\./g,"")},Hd=function(n){try{return R_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(n){return Ib(void 0,n)}function Ib(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tN(t)||(n[t]=Ib(n[t],e[t]));return n}function tN(n){return n!=="__proto__"}/**
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
 */function nN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iN=()=>nN().__FIREBASE_DEFAULTS__,sN=()=>{if(typeof process>"u"||typeof PT>"u")return;const n=PT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hd(n[1]);return e&&JSON.parse(e)},Tf=()=>{try{return X2()||iN()||sN()||rN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nb=n=>{var e,t;return(t=(e=Tf())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xb=n=>{const e=Nb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Db=()=>{var n;return(n=Tf())==null?void 0:n.config},Mb=n=>{var e;return(e=Tf())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ob(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qd(JSON.stringify(t)),qd(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())}function aN(){var e;const n=(e=Tf())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function x_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lN(){const n=Bn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cN(){return Ab.NODE_ADMIN===!0}function uN(){return!aN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D_(){try{return typeof indexedDB=="object"}catch{return!1}}function M_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function Pb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="FirebaseError";class ms extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hN,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?dN(l,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new ms(a,f,s)}}function dN(n,e){return n.replace(fN,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const fN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n){return JSON.parse(n)}function xn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=bu(Hd(l[0])||""),t=bu(Hd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},mN=function(n){const e=Lb(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pN=function(n){const e=Lb(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gd(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function js(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],u=e[a];if(LT(l)&&LT(u)){if(!js(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function LT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function cu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function uu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)s[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)s[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const A=s[S-3]^s[S-8]^s[S-14]^s[S-16];s[S]=(A<<1|A>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,E;for(let S=0;S<80;S++){S<40?S<20?(g=f^l&(u^f),E=1518500249):(g=l^u^f,E=1859775393):S<60?(g=l&u|f&(l|u),E=2400959708):(g=l^u^f,E=3395469782);const A=(a<<5|a>>>27)+g+p+E+s[S]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=A}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function _N(n,e){const t=new yN(n,e);return t.subscribe.bind(t)}class yN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Xp),a.error===void 0&&(a.error=Xp),a.complete===void 0&&(a.complete=Xp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xp(){}function EN(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,me(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Sf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const SN=1e3,wN=2,bN=14400*1e3,AN=.5;function VT(n,e=SN,t=wN){const s=e*Math.pow(t,n),a=Math.round(AN*s*(Math.random()-.5)*2);return Math.min(bN,s+a)}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}/**
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
 */function To(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function O_(n){return(await fetch(n,{credentials:"include"})).ok}class Wi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class CN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new I_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IN(e))try{this.getOrInitializeService({instanceIdentifier:eo})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=eo){return this.instances.has(e)}getOptions(e=eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=eo){return this.component?this.component.multipleInstances?e:eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RN(n){return n===eo?void 0:n}function IN(n){return n.instantiationMode==="EAGER"}/**
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
 */class NN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ke||(Ke={}));const xN={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},DN=Ke.INFO,MN={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},ON=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=MN[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=DN,this._logHandler=ON,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const kN=(n,e)=>e.some(t=>n instanceof t);let jT,UT;function PN(){return jT||(jT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LN(){return UT||(UT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vb=new WeakMap,Lg=new WeakMap,jb=new WeakMap,Zp=new WeakMap,k_=new WeakMap;function VN(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(ua(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Vb.set(t,n)}).catch(()=>{}),k_.set(e,n),e}function jN(n){if(Lg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Lg.set(n,e)}let Vg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Lg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ua(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UN(n){Vg=n(Vg)}function zN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Jp(this),e,...t);return jb.set(s,e.sort?e.sort():[e]),ua(s)}:LN().includes(n)?function(...e){return n.apply(Jp(this),e),ua(Vb.get(this))}:function(...e){return ua(n.apply(Jp(this),e))}}function BN(n){return typeof n=="function"?zN(n):(n instanceof IDBTransaction&&jN(n),kN(n,PN())?new Proxy(n,Vg):n)}function ua(n){if(n instanceof IDBRequest)return VN(n);if(Zp.has(n))return Zp.get(n);const e=BN(n);return e!==n&&(Zp.set(n,e),k_.set(e,n)),e}const Jp=n=>k_.get(n);function Ub(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),f=ua(u);return s&&u.addEventListener("upgradeneeded",p=>{s(ua(u.result),p.oldVersion,p.newVersion,ua(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const FN=["get","getKey","getAll","getAllKeys","count"],qN=["put","add","delete","clear"],eg=new Map;function zT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eg.get(e))return eg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=qN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||FN.includes(t)))return;const l=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return eg.set(e,l),l}UN(n=>({...n,get:(e,t,s)=>zT(e,t)||n.get(e,t,s),has:(e,t)=>!!zT(e,t)||n.has(e,t)}));/**
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
 */class HN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function GN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jg="@firebase/app",BT="0.14.10";/**
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
 */const vr=new Vu("@firebase/app"),KN="@firebase/app-compat",WN="@firebase/analytics-compat",YN="@firebase/analytics",QN="@firebase/app-check-compat",$N="@firebase/app-check",XN="@firebase/auth",ZN="@firebase/auth-compat",JN="@firebase/database",ex="@firebase/data-connect",tx="@firebase/database-compat",nx="@firebase/functions",ix="@firebase/functions-compat",sx="@firebase/installations",rx="@firebase/installations-compat",ax="@firebase/messaging",ox="@firebase/messaging-compat",lx="@firebase/performance",cx="@firebase/performance-compat",ux="@firebase/remote-config",hx="@firebase/remote-config-compat",dx="@firebase/storage",fx="@firebase/storage-compat",mx="@firebase/firestore",px="@firebase/ai",gx="@firebase/firestore-compat",_x="firebase",yx="12.11.0";/**
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
 */const Ug="[DEFAULT]",vx={[jg]:"fire-core",[KN]:"fire-core-compat",[YN]:"fire-analytics",[WN]:"fire-analytics-compat",[$N]:"fire-app-check",[QN]:"fire-app-check-compat",[XN]:"fire-auth",[ZN]:"fire-auth-compat",[JN]:"fire-rtdb",[ex]:"fire-data-connect",[tx]:"fire-rtdb-compat",[nx]:"fire-fn",[ix]:"fire-fn-compat",[sx]:"fire-iid",[rx]:"fire-iid-compat",[ax]:"fire-fcm",[ox]:"fire-fcm-compat",[lx]:"fire-perf",[cx]:"fire-perf-compat",[ux]:"fire-rc",[hx]:"fire-rc-compat",[dx]:"fire-gcs",[fx]:"fire-gcs-compat",[mx]:"fire-fst",[gx]:"fire-fst-compat",[px]:"fire-vertex","fire-js":"fire-js",[_x]:"fire-js-all"};/**
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
 */const Au=new Map,Ex=new Map,zg=new Map;function FT(n,e){try{n.container.addComponent(e)}catch(t){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ds(n){const e=n.name;if(zg.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;zg.set(e,n);for(const t of Au.values())FT(t,n);for(const t of Ex.values())FT(t,n);return!0}function wa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ri(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Tx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ha=new Eo("app","Firebase",Tx);/**
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
 */class Sx{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ha.create("app-deleted",{appName:this._name})}}/**
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
 */const So=yx;function zb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ug,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw ha.create("bad-app-name",{appName:String(a)});if(t||(t=Db()),!t)throw ha.create("no-options");const l=Au.get(a);if(l){if(js(t,l.options)&&js(s,l.config))return l;throw ha.create("duplicate-app",{appName:a})}const u=new NN(a);for(const p of zg.values())u.addComponent(p);const f=new Sx(t,s,u);return Au.set(a,f),f}function ju(n=Ug){const e=Au.get(n);if(!e&&n===Ug&&Db())return zb();if(!e)throw ha.create("no-app",{appName:n});return e}function wx(){return Array.from(Au.values())}function li(n,e,t){let s=vx[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(u.join(" "));return}ds(new Wi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bx="firebase-heartbeat-database",Ax=1,Cu="firebase-heartbeat-store";let tg=null;function Bb(){return tg||(tg=Ub(bx,Ax,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ha.create("idb-open",{originalErrorMessage:n.message})})),tg}async function Cx(n){try{const t=(await Bb()).transaction(Cu),s=await t.objectStore(Cu).get(Fb(n));return await t.done,s}catch(e){if(e instanceof ms)vr.warn(e.message);else{const t=ha.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(t.message)}}}async function qT(n,e){try{const s=(await Bb()).transaction(Cu,"readwrite");await s.objectStore(Cu).put(e,Fb(n)),await s.done}catch(t){if(t instanceof ms)vr.warn(t.message);else{const s=ha.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vr.warn(s.message)}}}function Fb(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Rx=1024,Ix=30;class Nx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=HT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Ix){const u=Mx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=HT(),{heartbeatsToSend:s,unsentEntries:a}=xx(this._heartbeatsCache.heartbeats),l=qd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return vr.warn(t),""}}}function HT(){return new Date().toISOString().substring(0,10)}function xx(n,e=Rx){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),GT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),GT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D_()?M_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function GT(n){return qd(JSON.stringify({version:2,heartbeats:n})).length}function Mx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Ox(n){ds(new Wi("platform-logger",e=>new HN(e),"PRIVATE")),ds(new Wi("heartbeat",e=>new Nx(e),"PRIVATE")),li(jg,BT,n),li(jg,BT,"esm2020"),li("fire-js","")}Ox("");function qb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kx=qb,Hb=new Eo("auth","Firebase",qb());/**
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
 */const Kd=new Vu("@firebase/auth");function Px(n,...e){Kd.logLevel<=Ke.WARN&&Kd.warn(`Auth (${So}): ${n}`,...e)}function Dd(n,...e){Kd.logLevel<=Ke.ERROR&&Kd.error(`Auth (${So}): ${n}`,...e)}/**
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
 */function Yi(n,...e){throw L_(n,...e)}function cs(n,...e){return L_(n,...e)}function P_(n,e,t){const s={...kx(),[e]:t};return new Eo("auth","Firebase",s).create(e,{appName:n.name})}function gr(n){return P_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lx(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yi(n,"argument-error"),P_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function L_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Hb.create(n,...e)}function Ne(n,e,...t){if(!n)throw L_(e,...t)}function dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dd(e),new Error(e)}function Er(n,e){n||dr(e)}/**
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
 */function Bg(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Vx(){return KT()==="http:"||KT()==="https:"}function KT(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||x_()||"connection"in navigator)?navigator.onLine:!0}function Ux(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Uu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Er(t>e,"Short delay should be less than long delay!"),this.isMobile=N_()||kb()}get(){return jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function V_(n,e){Er(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fx=new Uu(3e4,6e4);function ba(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bs(n,e,t,s,a={}){return Kb(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const f=ql({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return oN()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&To(n.emulatorConfig.host)&&(g.credentials="include"),Gb.fetch()(await Wb(n,n.config.apiHost,t,f),g)})}async function Kb(n,e,t){n._canInitEmulator=!1;const s={...zx,...e};try{const a=new Hx(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Ed(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ed(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Ed(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Ed(n,"user-disabled",u);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw P_(n,E,g);Yi(n,E)}}catch(a){if(a instanceof ms)throw a;Yi(n,"network-request-failed",{message:String(a)})}}async function zu(n,e,t,s,a={}){const l=await Bs(n,e,t,s,a);return"mfaPendingCredential"in l&&Yi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Wb(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?V_(n.config,a):`${n.config.apiScheme}://${a}`;return Bx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function qx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(cs(this.auth,"network-request-failed")),Fx.get())})}}function Ed(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=cs(n,e,s);return a.customData._tokenResponse=t,a}function WT(n){return n!==void 0&&n.enterprise!==void 0}class Gx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kx(n,e){return Bs(n,"GET","/v2/recaptchaConfig",ba(n,e))}/**
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
 */async function Wx(n,e){return Bs(n,"POST","/v1/accounts:delete",e)}async function Wd(n,e){return Bs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function pu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yx(n,e=!1){const t=At(n),s=await t.getIdToken(e),a=j_(s);Ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:pu(ng(a.auth_time)),issuedAtTime:pu(ng(a.iat)),expirationTime:pu(ng(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function ng(n){return Number(n)*1e3}function j_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Dd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Hd(t);return a?JSON.parse(a):(Dd("Failed to decode base64 JWT payload"),null)}catch(a){return Dd("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function YT(n){const e=j_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ms&&Qx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Qx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pu(this.lastLoginAt),this.creationTime=pu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yd(n){var S;const e=n.auth,t=await n.getIdToken(),s=await lo(n,Wd(e,{idToken:t}));Ne(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=(S=a.providerUserInfo)!=null&&S.length?Yb(a.providerUserInfo):[],u=Zx(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Fg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function Xx(n){const e=At(n);await Yd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zx(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Yb(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Jx(n,e){const t=await Kb(n,{},async()=>{const s=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await Wb(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return n.emulatorConfig&&To(n.emulatorConfig.host)&&(p.credentials="include"),Gb.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eD(n,e){return Bs(n,"POST","/v2/accounts:revokeToken",ba(n,e))}/**
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
 */class Sl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=YT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Jx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new Sl;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(Ne(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(Ne(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sl,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
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
 */function ra(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class os{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new $x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Fg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await lo(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yx(this,e)}reload(){return Xx(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new os({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Yd(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ri(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await lo(this,Wx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:V,providerData:q,stsTokenManager:Z}=t;Ne(S&&Z,e,"internal-error");const Y=Sl.fromJSON(this.name,Z);Ne(typeof S=="string",e,"internal-error"),ra(s,e.name),ra(a,e.name),Ne(typeof A=="boolean",e,"internal-error"),Ne(typeof V=="boolean",e,"internal-error"),ra(l,e.name),ra(u,e.name),ra(f,e.name),ra(p,e.name),ra(g,e.name),ra(E,e.name);const pe=new os({uid:S,auth:e,email:a,emailVerified:A,displayName:s,isAnonymous:V,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:Y,createdAt:g,lastLoginAt:E});return q&&Array.isArray(q)&&(pe.providerData=q.map(ue=>({...ue}))),p&&(pe._redirectEventId=p),pe}static async _fromIdTokenResponse(e,t,s=!1){const a=new Sl;a.updateFromServerResponse(t);const l=new os({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Yd(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Yb(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Sl;f.updateFromIdToken(s);const p=new os({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Fg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const QT=new Map;function fr(n){Er(n instanceof Function,"Expected a class definition");let e=QT.get(n);return e?(Er(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,QT.set(n,e),e)}/**
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
 */class Qb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qb.type="NONE";const $T=Qb;/**
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
 */function Md(n,e,t){return`firebase:${n}:${e}:${t}`}class wl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Md(this.userKey,a.apiKey,l),this.fullPersistenceKey=Md("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wd(this.auth,{idToken:e}).catch(()=>{});return t?os._fromGetAccountInfoResponse(this.auth,t,e):null}return os._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wl(fr($T),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||fr($T);const u=Md(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(u);if(E){let S;if(typeof E=="string"){const A=await Wd(e,{idToken:E}).catch(()=>{});if(!A)break;S=await os._fromGetAccountInfoResponse(e,A,E)}else S=os._fromJSON(e,E);g!==l&&(f=S),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new wl(l,e,s):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new wl(l,e,s))}}/**
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
 */function XT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($b(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tA(e))return"Blackberry";if(nA(e))return"Webos";if(Xb(e))return"Safari";if((e.includes("chrome/")||Zb(e))&&!e.includes("edge/"))return"Chrome";if(eA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $b(n=Bn()){return/firefox\//i.test(n)}function Xb(n=Bn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zb(n=Bn()){return/crios\//i.test(n)}function Jb(n=Bn()){return/iemobile/i.test(n)}function eA(n=Bn()){return/android/i.test(n)}function tA(n=Bn()){return/blackberry/i.test(n)}function nA(n=Bn()){return/webos/i.test(n)}function U_(n=Bn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tD(n=Bn()){var e;return U_(n)&&!!((e=window.navigator)!=null&&e.standalone)}function nD(){return lN()&&document.documentMode===10}function iA(n=Bn()){return U_(n)||eA(n)||nA(n)||tA(n)||/windows phone/i.test(n)||Jb(n)}/**
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
 */function sA(n,e=[]){let t;switch(n){case"Browser":t=XT(Bn());break;case"Worker":t=`${XT(Bn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
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
 */class iD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,f)=>{try{const p=e(l);u(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sD(n,e={}){return Bs(n,"GET","/v2/passwordPolicy",ba(n,e))}/**
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
 */const rD=6;class aD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class oD{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ZT(this),this.idTokenSubscription=new ZT(this),this.beforeStateQueue=new iD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fr(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await wl.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wd(this,{idToken:e}),s=await os._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(ri(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ux()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ri(this.app))return Promise.reject(gr(this));const t=e?At(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ri(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ri(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sD(this),t=new aD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await eD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fr(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await wl.create(this,[fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ri(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Px(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Aa(n){return At(n)}class ZT{constructor(e){this.auth=e,this.observer=null,this.addObserver=_N(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lD(n){wf=n}function rA(n){return wf.loadJS(n)}function cD(){return wf.recaptchaEnterpriseScript}function uD(){return wf.gapiScript}function hD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dD{constructor(){this.enterprise=new fD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const mD="recaptcha-enterprise",aA="NO_RECAPTCHA";class pD{constructor(e){this.type=mD,this.auth=Aa(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{Kx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Gx(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,u,f){const p=window.grecaptcha;WT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(aA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dD().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(f=>{if(!t&&WT(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=cD();p.length!==0&&(p+=f),rA(p).then(()=>{a(f,l,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function JT(n,e,t,s=!1,a=!1){const l=new pD(n);let u;if(a)u=aA;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function qg(n,e,t,s,a){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await JT(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await JT(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(u)})}/**
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
 */function gD(n,e){const t=wa(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(js(l,e??{}))return a;Yi(a,"already-initialized")}return t.initialize({options:e})}function _D(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(fr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yD(n,e,t){const s=Aa(n);Ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=oA(e),{host:u,port:f}=vD(e),p=f===null?"":`:${f}`,g={url:`${l}//${u}${p}/`},E=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ne(js(g,s.config.emulator)&&js(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,To(u)?O_(`${l}//${u}${p}`):ED()}function oA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vD(n){const e=oA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:eS(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:eS(u)}}}function eS(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ED(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class z_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,t){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function TD(n,e){return Bs(n,"POST","/v1/accounts:update",e)}async function SD(n,e){return Bs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wD(n,e){return zu(n,"POST","/v1/accounts:signInWithPassword",ba(n,e))}/**
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
 */async function bD(n,e){return zu(n,"POST","/v1/accounts:signInWithEmailLink",ba(n,e))}async function AD(n,e){return zu(n,"POST","/v1/accounts:signInWithEmailLink",ba(n,e))}/**
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
 */class Ru extends z_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ru(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ru(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qg(e,t,"signInWithPassword",wD);case"emailLink":return bD(e,{email:this._email,oobCode:this._password});default:Yi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qg(e,s,"signUpPassword",SD);case"emailLink":return AD(e,{idToken:t,email:this._email,oobCode:this._password});default:Yi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bl(n,e){return zu(n,"POST","/v1/accounts:signInWithIdp",ba(n,e))}/**
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
 */const CD="http://localhost";class co extends z_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new co(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new co(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return bl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bl(e,t)}buildRequest(){const e={requestUri:CD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ql(t)}return e}}/**
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
 */function RD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ID(n){const e=cu(uu(n)).link,t=e?cu(uu(e)).deep_link_id:null,s=cu(uu(n)).deep_link_id;return(s?cu(uu(s)).link:null)||s||t||e||n}class B_{constructor(e){const t=cu(uu(e)),s=t.apiKey??null,a=t.oobCode??null,l=RD(t.mode??null);Ne(s&&a&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ID(e);try{return new B_(t)}catch{return null}}}/**
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
 */class Hl{constructor(){this.providerId=Hl.PROVIDER_ID}static credential(e,t){return Ru._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=B_.parseLink(t);return Ne(s,"argument-error"),Ru._fromEmailAndCode(e,s.code,s.tenantId)}}Hl.PROVIDER_ID="password";Hl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class F_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bu extends F_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class aa extends Bu{constructor(){super("facebook.com")}static credential(e){return co._fromParams({providerId:aa.PROVIDER_ID,signInMethod:aa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return aa.credentialFromTaggedObject(e)}static credentialFromError(e){return aa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return aa.credential(e.oauthAccessToken)}catch{return null}}}aa.FACEBOOK_SIGN_IN_METHOD="facebook.com";aa.PROVIDER_ID="facebook.com";/**
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
 */class hr extends Bu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return co._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hr.credential(t,s)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class oa extends Bu{constructor(){super("github.com")}static credential(e){return co._fromParams({providerId:oa.PROVIDER_ID,signInMethod:oa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oa.credentialFromTaggedObject(e)}static credentialFromError(e){return oa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oa.credential(e.oauthAccessToken)}catch{return null}}}oa.GITHUB_SIGN_IN_METHOD="github.com";oa.PROVIDER_ID="github.com";/**
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
 */class la extends Bu{constructor(){super("twitter.com")}static credential(e,t){return co._fromParams({providerId:la.PROVIDER_ID,signInMethod:la.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return la.credentialFromTaggedObject(e)}static credentialFromError(e){return la.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return la.credential(t,s)}catch{return null}}}la.TWITTER_SIGN_IN_METHOD="twitter.com";la.PROVIDER_ID="twitter.com";/**
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
 */async function ND(n,e){return zu(n,"POST","/v1/accounts:signUp",ba(n,e))}/**
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
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await os._fromIdTokenResponse(e,s,a),u=tS(s);return new uo({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=tS(s);return new uo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function tS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qd extends ms{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Qd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Qd(e,t,s,a)}}function lA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Qd._fromErrorAndOperation(n,l,e,s):l})}async function xD(n,e,t=!1){const s=await lo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return uo._forOperation(n,"link",s)}/**
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
 */async function DD(n,e,t=!1){const{auth:s}=n;if(ri(s.app))return Promise.reject(gr(s));const a="reauthenticate";try{const l=await lo(n,lA(s,a,e,n),t);Ne(l.idToken,s,"internal-error");const u=j_(l.idToken);Ne(u,s,"internal-error");const{sub:f}=u;return Ne(n.uid===f,s,"user-mismatch"),uo._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Yi(s,"user-mismatch"),l}}/**
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
 */async function cA(n,e,t=!1){if(ri(n.app))return Promise.reject(gr(n));const s="signIn",a=await lA(n,s,e),l=await uo._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function MD(n,e){return cA(Aa(n),e)}/**
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
 */async function uA(n){const e=Aa(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nS(n,e,t){if(ri(n.app))return Promise.reject(gr(n));const s=Aa(n),u=await qg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ND).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&uA(n),p}),f=await uo._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(f.user),f}function iS(n,e,t){return ri(n.app)?Promise.reject(gr(n)):MD(At(n),Hl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&uA(n),s})}/**
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
 */async function OD(n,e){return Bs(n,"POST","/v1/accounts:update",e)}/**
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
 */async function kD(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=At(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await lo(s,OD(s.auth,l));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function PD(n,e){return LD(At(n),null,e)}async function LD(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const u=await lo(n,TD(s,l));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function VD(n,e){return At(n).setPersistence(e)}function jD(n,e,t,s){return At(n).onIdTokenChanged(e,t,s)}function UD(n,e,t){return At(n).beforeAuthStateChanged(e,t)}function zD(n,e,t,s){return At(n).onAuthStateChanged(e,t,s)}function ig(n){return At(n).signOut()}const $d="__sak";/**
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
 */class hA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($d,"1"),this.storage.removeItem($d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BD=1e3,FD=10;class dA extends hA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);nD()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,FD):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},BD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dA.type="LOCAL";const fA=dA;/**
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
 */class mA extends hA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mA.type="SESSION";const pA=mA;/**
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
 */function qD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new bf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async g=>g(t.origin,l)),p=await qD(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bf.receivers=[];/**
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
 */function q_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class HD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const g=q_("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(S){const A=S;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Os(){return window}function GD(n){Os().location.href=n}/**
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
 */function gA(){return typeof Os().WorkerGlobalScope<"u"&&typeof Os().importScripts=="function"}async function KD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function YD(){return gA()?self:null}/**
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
 */const _A="firebaseLocalStorageDb",QD=1,Xd="firebaseLocalStorage",yA="fbase_key";class Fu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Af(n,e){return n.transaction([Xd],e?"readwrite":"readonly").objectStore(Xd)}function $D(){const n=indexedDB.deleteDatabase(_A);return new Fu(n).toPromise()}function Hg(){const n=indexedDB.open(_A,QD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Xd,{keyPath:yA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Xd)?e(s):(s.close(),await $D(),e(await Hg()))})})}async function sS(n,e,t){const s=Af(n,!0).put({[yA]:e,value:t});return new Fu(s).toPromise()}async function XD(n,e){const t=Af(n,!1).get(e),s=await new Fu(t).toPromise();return s===void 0?null:s.value}function rS(n,e){const t=Af(n,!0).delete(e);return new Fu(t).toPromise()}const ZD=800,JD=3;class vA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>JD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bf._getInstance(YD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await KD(),!this.activeServiceWorker)return;this.sender=new HD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hg();return await sS(e,$d,"1"),await rS(e,$d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>sS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>XD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Af(a,!1).getAll();return new Fu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vA.type="LOCAL";const eM=vA;new Uu(3e4,6e4);/**
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
 */function EA(n,e){return e?fr(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class H_ extends z_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tM(n){return cA(n.auth,new H_(n),n.bypassAuthState)}function nM(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),DD(t,new H_(n),n.bypassAuthState)}async function iM(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),xD(t,new H_(n),n.bypassAuthState)}/**
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
 */class TA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tM;case"linkViaPopup":case"linkViaRedirect":return iM;case"reauthViaPopup":case"reauthViaRedirect":return nM;default:Yi(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sM=new Uu(2e3,1e4);async function rM(n,e,t){if(ri(n.app))return Promise.reject(cs(n,"operation-not-supported-in-this-environment"));const s=Aa(n);Lx(n,e,F_);const a=EA(s,t);return new no(s,"signInViaPopup",e,a).executeNotNull()}class no extends TA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,no.currentPopupAction&&no.currentPopupAction.cancel(),no.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=q_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cs(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cs(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,no.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cs(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sM.get())};e()}}no.currentPopupAction=null;/**
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
 */const aM="pendingRedirect",Od=new Map;class oM extends TA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Od.get(this.auth._key());if(!e){try{const s=await lM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Od.set(this.auth._key(),e)}return this.bypassAuthState||Od.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lM(n,e){const t=hM(e),s=uM(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function cM(n,e){Od.set(n._key(),e)}function uM(n){return fr(n._redirectPersistence)}function hM(n){return Md(aM,n.config.apiKey,n.name)}async function dM(n,e,t=!1){if(ri(n.app))return Promise.reject(gr(n));const s=Aa(n),a=EA(s,e),u=await new oM(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
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
 */const fM=600*1e3;class mM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!SA(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(cs(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fM&&this.cachedEventUids.clear(),this.cachedEventUids.has(aS(e))}saveEventToCache(e){this.cachedEventUids.add(aS(e)),this.lastProcessedEventTime=Date.now()}}function aS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function SA({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SA(n);default:return!1}}/**
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
 */async function gM(n,e={}){return Bs(n,"GET","/v1/projects",e)}/**
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
 */const _M=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yM=/^https?/;async function vM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gM(n);for(const t of e)try{if(EM(t))return}catch{}Yi(n,"unauthorized-domain")}function EM(n){const e=Bg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!yM.test(t))return!1;if(_M.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const TM=new Uu(3e4,6e4);function oS(){const n=Os().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SM(n){return new Promise((e,t)=>{var a,l,u;function s(){oS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oS(),t(cs(n,"network-request-failed"))},timeout:TM.get()})}if((l=(a=Os().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=Os().gapi)!=null&&u.load)s();else{const f=hD("iframefcb");return Os()[f]=()=>{gapi.load?s():t(cs(n,"network-request-failed"))},rA(`${uD()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw kd=null,e})}let kd=null;function wM(n){return kd=kd||SM(n),kd}/**
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
 */const bM=new Uu(5e3,15e3),AM="__/auth/iframe",CM="emulator/auth/iframe",RM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NM(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?V_(e,CM):`https://${n.config.authDomain}/${AM}`,s={apiKey:e.apiKey,appName:n.name,v:So},a=IM.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ql(s).slice(1)}`}async function xM(n){const e=await wM(n),t=Os().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:NM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RM,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=cs(n,"network-request-failed"),f=Os().setTimeout(()=>{l(u)},bM.get());function p(){Os().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const DM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MM=500,OM=600,kM="_blank",PM="http://localhost";class lS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LM(n,e,t,s=MM,a=OM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...DM,width:s.toString(),height:a.toString(),top:l,left:u},g=Bn().toLowerCase();t&&(f=Zb(g)?kM:t),$b(g)&&(e=e||PM,p.scrollbars="yes");const E=Object.entries(p).reduce((A,[V,q])=>`${A}${V}=${q},`,"");if(tD(g)&&f!=="_self")return VM(e||"",f),new lS(null);const S=window.open(e||"",f,E);Ne(S,n,"popup-blocked");try{S.focus()}catch{}return new lS(S)}function VM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const jM="__/auth/handler",UM="emulator/auth/handler",zM=encodeURIComponent("fac");async function cS(n,e,t,s,a,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:So,eventId:a};if(e instanceof F_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Pg(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))u[E]=S}if(e instanceof Bu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),g=p?`#${zM}=${encodeURIComponent(p)}`:"";return`${BM(n)}?${ql(f).slice(1)}${g}`}function BM({config:n}){return n.emulator?V_(n,UM):`https://${n.authDomain}/${jM}`}/**
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
 */const sg="webStorageSupport";class FM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pA,this._completeRedirectFn=dM,this._overrideRedirectResult=cM}async _openPopup(e,t,s,a){var u;Er((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await cS(e,t,s,Bg(),a);return LM(e,l,q_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await cS(e,t,s,Bg(),a);return GD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Er(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await xM(e),s=new mM(e);return t.register("authEvent",a=>(Ne(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sg,{type:sg},a=>{var u;const l=(u=a==null?void 0:a[0])==null?void 0:u[sg];l!==void 0&&t(!!l),Yi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iA()||Xb()||U_()}}const qM=FM;var uS="@firebase/auth",hS="1.12.2";/**
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
 */class HM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KM(n){ds(new Wi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;Ne(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sA(n)},g=new oD(s,a,l,p);return _D(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ds(new Wi("auth-internal",e=>{const t=Aa(e.getProvider("auth").getImmediate());return(s=>new HM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(uS,hS,GM(n)),li(uS,hS,"esm2020")}/**
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
 */const WM=300,YM=Mb("authIdTokenMaxAge")||WM;let dS=null;const QM=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>YM)return;const a=t==null?void 0:t.token;dS!==a&&(dS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function $M(n=ju()){const e=wa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gD(n,{popupRedirectResolver:qM,persistence:[eM,fA,pA]}),s=Mb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=QM(l.toString());UD(t,u,()=>u(t.currentUser)),jD(t,f=>u(f))}}const a=Nb("auth");return a&&yD(t,`http://${a}`),t}function XM(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}lD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=cs("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",XM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KM("Browser");var ZM="firebase",JM="12.11.0";/**
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
 */li(ZM,JM,"app");const wA="@firebase/installations",G_="0.6.21";/**
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
 */const bA=1e4,AA=`w:${G_}`,CA="FIS_v2",eO="https://firebaseinstallations.googleapis.com/v1",tO=3600*1e3,nO="installations",iO="Installations";/**
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
 */const sO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ho=new Eo(nO,iO,sO);function RA(n){return n instanceof ms&&n.code.includes("request-failed")}/**
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
 */function IA({projectId:n}){return`${eO}/projects/${n}/installations`}function NA(n){return{token:n.token,requestStatus:2,expiresIn:aO(n.expiresIn),creationTime:Date.now()}}async function xA(n,e){const s=(await e.json()).error;return ho.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function DA({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rO(n,{refreshToken:e}){const t=DA(n);return t.append("Authorization",oO(e)),t}async function MA(n){const e=await n();return e.status>=500&&e.status<600?n():e}function aO(n){return Number(n.replace("s","000"))}function oO(n){return`${CA} ${n}`}/**
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
 */async function lO({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=IA(n),a=DA(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={fid:t,authVersion:CA,appId:n.appId,sdkVersion:AA},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await MA(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:NA(g.authToken)}}else throw await xA("Create Installation",p)}/**
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
 */function OA(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function cO(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uO=/^[cdef][\w-]{21}$/,Gg="";function hO(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=dO(n);return uO.test(t)?t:Gg}catch{return Gg}}function dO(n){return cO(n).substr(0,22)}/**
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
 */function Cf(n){return`${n.appName}!${n.appId}`}/**
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
 */const kA=new Map;function PA(n,e){const t=Cf(n);LA(t,e),fO(t,e)}function LA(n,e){const t=kA.get(n);if(t)for(const s of t)s(e)}function fO(n,e){const t=mO();t&&t.postMessage({key:n,fid:e}),pO()}let io=null;function mO(){return!io&&"BroadcastChannel"in self&&(io=new BroadcastChannel("[Firebase] FID Change"),io.onmessage=n=>{LA(n.data.key,n.data.fid)}),io}function pO(){kA.size===0&&io&&(io.close(),io=null)}/**
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
 */const gO="firebase-installations-database",_O=1,fo="firebase-installations-store";let rg=null;function K_(){return rg||(rg=Ub(gO,_O,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(fo)}}})),rg}async function Zd(n,e){const t=Cf(n),a=(await K_()).transaction(fo,"readwrite"),l=a.objectStore(fo),u=await l.get(t);return await l.put(e,t),await a.done,(!u||u.fid!==e.fid)&&PA(n,e.fid),e}async function VA(n){const e=Cf(n),s=(await K_()).transaction(fo,"readwrite");await s.objectStore(fo).delete(e),await s.done}async function Rf(n,e){const t=Cf(n),a=(await K_()).transaction(fo,"readwrite"),l=a.objectStore(fo),u=await l.get(t),f=e(u);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&PA(n,f.fid),f}/**
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
 */async function W_(n){let e;const t=await Rf(n.appConfig,s=>{const a=yO(s),l=vO(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Gg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function yO(n){const e=n||{fid:hO(),registrationStatus:0};return jA(e)}function vO(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ho.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=EO(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TO(n)}:{installationEntry:e}}async function EO(n,e){try{const t=await lO(n,e);return Zd(n.appConfig,t)}catch(t){throw RA(t)&&t.customData.serverCode===409?await VA(n.appConfig):await Zd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function TO(n){let e=await fS(n.appConfig);for(;e.registrationStatus===1;)await OA(100),e=await fS(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await W_(n);return s||t}return e}function fS(n){return Rf(n,e=>{if(!e)throw ho.create("installation-not-found");return jA(e)})}function jA(n){return SO(n)?{fid:n.fid,registrationStatus:0}:n}function SO(n){return n.registrationStatus===1&&n.registrationTime+bA<Date.now()}/**
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
 */async function wO({appConfig:n,heartbeatServiceProvider:e},t){const s=bO(n,t),a=rO(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={installation:{sdkVersion:AA,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await MA(()=>fetch(s,f));if(p.ok){const g=await p.json();return NA(g)}else throw await xA("Generate Auth Token",p)}function bO(n,{fid:e}){return`${IA(n)}/${e}/authTokens:generate`}/**
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
 */async function Y_(n,e=!1){let t;const s=await Rf(n.appConfig,l=>{if(!UA(l))throw ho.create("not-registered");const u=l.authToken;if(!e&&RO(u))return l;if(u.requestStatus===1)return t=AO(n,e),l;{if(!navigator.onLine)throw ho.create("app-offline");const f=NO(l);return t=CO(n,f),f}});return t?await t:s.authToken}async function AO(n,e){let t=await mS(n.appConfig);for(;t.authToken.requestStatus===1;)await OA(100),t=await mS(n.appConfig);const s=t.authToken;return s.requestStatus===0?Y_(n,e):s}function mS(n){return Rf(n,e=>{if(!UA(e))throw ho.create("not-registered");const t=e.authToken;return xO(t)?{...e,authToken:{requestStatus:0}}:e})}async function CO(n,e){try{const t=await wO(n,e),s={...e,authToken:t};return await Zd(n.appConfig,s),t}catch(t){if(RA(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await VA(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Zd(n.appConfig,s)}throw t}}function UA(n){return n!==void 0&&n.registrationStatus===2}function RO(n){return n.requestStatus===2&&!IO(n)}function IO(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tO}function NO(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function xO(n){return n.requestStatus===1&&n.requestTime+bA<Date.now()}/**
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
 */async function DO(n){const e=n,{installationEntry:t,registrationPromise:s}=await W_(e);return s?s.catch(console.error):Y_(e).catch(console.error),t.fid}/**
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
 */async function MO(n,e=!1){const t=n;return await OO(t),(await Y_(t,e)).token}async function OO(n){const{registrationPromise:e}=await W_(n);e&&await e}/**
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
 */function kO(n){if(!n||!n.options)throw ag("App Configuration");if(!n.name)throw ag("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ag(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ag(n){return ho.create("missing-app-config-values",{valueName:n})}/**
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
 */const zA="installations",PO="installations-internal",LO=n=>{const e=n.getProvider("app").getImmediate(),t=kO(e),s=wa(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},VO=n=>{const e=n.getProvider("app").getImmediate(),t=wa(e,zA).getImmediate();return{getId:()=>DO(t),getToken:a=>MO(t,a)}};function jO(){ds(new Wi(zA,LO,"PUBLIC")),ds(new Wi(PO,VO,"PRIVATE"))}jO();li(wA,G_);li(wA,G_,"esm2020");/**
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
 */const Jd="analytics",UO="firebase_id",zO="origin",BO=60*1e3,FO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Q_="https://www.googletagmanager.com/gtag/js";/**
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
 */const Wn=new Vu("@firebase/analytics");/**
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
 */const qO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ai=new Eo("analytics","Analytics",qO);/**
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
 */function HO(n){if(!n.startsWith(Q_)){const e=Ai.create("invalid-gtag-resource",{gtagURL:n});return Wn.warn(e.message),""}return n}function BA(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function GO(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function KO(n,e){const t=GO("firebase-js-sdk-policy",{createScriptURL:HO}),s=document.createElement("script"),a=`${Q_}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function WO(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function YO(n,e,t,s,a,l){const u=s[a];try{if(u)await e[u];else{const p=(await BA(t)).find(g=>g.measurementId===a);p&&await e[p.appId]}}catch(f){Wn.error(f)}n("config",a,l)}async function QO(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await BA(t);for(const p of u){const g=f.find(S=>S.measurementId===p),E=g&&e[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){Wn.error(l)}}function $O(n,e,t,s){async function a(l,...u){try{if(l==="event"){const[f,p]=u;await QO(n,e,t,f,p)}else if(l==="config"){const[f,p]=u;await YO(n,e,t,s,f,p)}else if(l==="consent"){const[f,p]=u;n("consent",f,p)}else if(l==="get"){const[f,p,g]=u;n("get",f,p,g)}else if(l==="set"){const[f]=u;n("set",f)}else n(l,...u)}catch(f){Wn.error(f)}}return a}function XO(n,e,t,s,a){let l=function(...u){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=$O(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function ZO(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Q_)&&t.src.includes(n))return t;return null}/**
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
 */const JO=30,ek=1e3;class tk{constructor(e={},t=ek){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const FA=new tk;function nk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ik(n){var u;const{appId:e,apiKey:t}=n,s={method:"GET",headers:nk(t)},a=FO.replace("{app-id}",e),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(u=p.error)!=null&&u.message&&(f=p.error.message)}catch{}throw Ai.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function sk(n,e=FA,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw Ai.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw Ai.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ok;return setTimeout(async()=>{f.abort()},BO),qA({appId:s,apiKey:a,measurementId:l},u,f,e)}async function qA(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=FA){var f;const{appId:l,measurementId:u}=n;try{await rk(s,e)}catch(p){if(u)return Wn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw p}try{const p=await ik(n);return a.deleteThrottleMetadata(l),p}catch(p){const g=p;if(!ak(g)){if(a.deleteThrottleMetadata(l),u)return Wn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw p}const E=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?VT(t,a.intervalMillis,JO):VT(t,a.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return a.setThrottleMetadata(l,S),Wn.debug(`Calling attemptFetch again in ${E} millis`),qA(n,S,s,a)}}function rk(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(Ai.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ak(n){if(!(n instanceof ms)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ok{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lk(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,u={...s,send_to:l};n("event",t,u)}}async function ck(n,e,t,s){if(s&&s.global){const a={};for(const l of Object.keys(t))a[`user_properties.${l}`]=t[l];return n("set",a),Promise.resolve()}else{const a=await e;n("config",a,{update:!0,user_properties:t})}}/**
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
 */async function uk(){if(D_())try{await M_()}catch(n){return Wn.warn(Ai.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Wn.warn(Ai.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hk(n,e,t,s,a,l,u){const f=sk(n);f.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&Wn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Wn.error(A)),e.push(f);const p=uk().then(A=>{if(A)return s.getId()}),[g,E]=await Promise.all([f,p]);ZO(l)||KO(l,g.measurementId),a("js",new Date);const S=(u==null?void 0:u.config)??{};return S[zO]="firebase",S.update=!0,E!=null&&(S[UO]=E),a("config",g.measurementId,S),g.measurementId}/**
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
 */class dk{constructor(e){this.app=e}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},pS=[];const gS={};let og="dataLayer",fk="gtag",_S,$_,yS=!1;function mk(){const n=[];if(x_()&&n.push("This is a browser extension environment."),Pb()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=Ai.create("invalid-analytics-context",{errorInfo:e});Wn.warn(t.message)}}function pk(n,e,t){mk();const s=n.options.appId;if(!s)throw Ai.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Wn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ai.create("no-api-key");if(Al[s]!=null)throw Ai.create("already-exists",{id:s});if(!yS){WO(og);const{wrappedGtag:l,gtagCore:u}=XO(Al,pS,gS,og,fk);$_=l,_S=u,yS=!0}return Al[s]=hk(n,pS,gS,e,_S,og,t),new dk(n)}function gk(n=ju()){n=At(n);const e=wa(n,Jd);return e.isInitialized()?e.getImmediate():_k(n)}function _k(n,e={}){const t=wa(n,Jd);if(t.isInitialized()){const a=t.getImmediate();if(js(e,t.getOptions()))return a;throw Ai.create("already-initialized")}return t.initialize({options:e})}async function yk(){if(x_()||!Pb()||!D_())return!1;try{return await M_()}catch{return!1}}function vk(n,e,t){n=At(n),ck($_,Al[n.app.options.appId],e,t).catch(s=>Wn.error(s))}function Ek(n,e,t,s){n=At(n),lk($_,Al[n.app.options.appId],e,t,s).catch(a=>Wn.error(a))}const vS="@firebase/analytics",ES="0.10.21";function Tk(){ds(new Wi(Jd,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return pk(s,a,t)},"PUBLIC")),ds(new Wi("analytics-internal",n,"PRIVATE")),li(vS,ES),li(vS,ES,"esm2020");function n(e){try{const t=e.getProvider(Jd).getImmediate();return{logEvent:(s,a,l)=>Ek(t,s,a,l),setUserProperties:(s,a)=>vk(t,s,a)}}catch(t){throw Ai.create("interop-component-reg-failed",{reason:t})}}}Tk();var TS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var da,HA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function N(){}N.prototype=R.prototype,C.F=R.prototype,C.prototype=new N,C.prototype.constructor=C,C.D=function(D,I,O){for(var x=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)x[Me-2]=arguments[Me];return R.prototype[I].apply(D,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,R,N){N||(N=0);const D=Array(16);if(typeof R=="string")for(var I=0;I<16;++I)D[I]=R.charCodeAt(N++)|R.charCodeAt(N++)<<8|R.charCodeAt(N++)<<16|R.charCodeAt(N++)<<24;else for(I=0;I<16;++I)D[I]=R[N++]|R[N++]<<8|R[N++]<<16|R[N++]<<24;R=C.g[0],N=C.g[1],I=C.g[2];let O=C.g[3],x;x=R+(O^N&(I^O))+D[0]+3614090360&4294967295,R=N+(x<<7&4294967295|x>>>25),x=O+(I^R&(N^I))+D[1]+3905402710&4294967295,O=R+(x<<12&4294967295|x>>>20),x=I+(N^O&(R^N))+D[2]+606105819&4294967295,I=O+(x<<17&4294967295|x>>>15),x=N+(R^I&(O^R))+D[3]+3250441966&4294967295,N=I+(x<<22&4294967295|x>>>10),x=R+(O^N&(I^O))+D[4]+4118548399&4294967295,R=N+(x<<7&4294967295|x>>>25),x=O+(I^R&(N^I))+D[5]+1200080426&4294967295,O=R+(x<<12&4294967295|x>>>20),x=I+(N^O&(R^N))+D[6]+2821735955&4294967295,I=O+(x<<17&4294967295|x>>>15),x=N+(R^I&(O^R))+D[7]+4249261313&4294967295,N=I+(x<<22&4294967295|x>>>10),x=R+(O^N&(I^O))+D[8]+1770035416&4294967295,R=N+(x<<7&4294967295|x>>>25),x=O+(I^R&(N^I))+D[9]+2336552879&4294967295,O=R+(x<<12&4294967295|x>>>20),x=I+(N^O&(R^N))+D[10]+4294925233&4294967295,I=O+(x<<17&4294967295|x>>>15),x=N+(R^I&(O^R))+D[11]+2304563134&4294967295,N=I+(x<<22&4294967295|x>>>10),x=R+(O^N&(I^O))+D[12]+1804603682&4294967295,R=N+(x<<7&4294967295|x>>>25),x=O+(I^R&(N^I))+D[13]+4254626195&4294967295,O=R+(x<<12&4294967295|x>>>20),x=I+(N^O&(R^N))+D[14]+2792965006&4294967295,I=O+(x<<17&4294967295|x>>>15),x=N+(R^I&(O^R))+D[15]+1236535329&4294967295,N=I+(x<<22&4294967295|x>>>10),x=R+(I^O&(N^I))+D[1]+4129170786&4294967295,R=N+(x<<5&4294967295|x>>>27),x=O+(N^I&(R^N))+D[6]+3225465664&4294967295,O=R+(x<<9&4294967295|x>>>23),x=I+(R^N&(O^R))+D[11]+643717713&4294967295,I=O+(x<<14&4294967295|x>>>18),x=N+(O^R&(I^O))+D[0]+3921069994&4294967295,N=I+(x<<20&4294967295|x>>>12),x=R+(I^O&(N^I))+D[5]+3593408605&4294967295,R=N+(x<<5&4294967295|x>>>27),x=O+(N^I&(R^N))+D[10]+38016083&4294967295,O=R+(x<<9&4294967295|x>>>23),x=I+(R^N&(O^R))+D[15]+3634488961&4294967295,I=O+(x<<14&4294967295|x>>>18),x=N+(O^R&(I^O))+D[4]+3889429448&4294967295,N=I+(x<<20&4294967295|x>>>12),x=R+(I^O&(N^I))+D[9]+568446438&4294967295,R=N+(x<<5&4294967295|x>>>27),x=O+(N^I&(R^N))+D[14]+3275163606&4294967295,O=R+(x<<9&4294967295|x>>>23),x=I+(R^N&(O^R))+D[3]+4107603335&4294967295,I=O+(x<<14&4294967295|x>>>18),x=N+(O^R&(I^O))+D[8]+1163531501&4294967295,N=I+(x<<20&4294967295|x>>>12),x=R+(I^O&(N^I))+D[13]+2850285829&4294967295,R=N+(x<<5&4294967295|x>>>27),x=O+(N^I&(R^N))+D[2]+4243563512&4294967295,O=R+(x<<9&4294967295|x>>>23),x=I+(R^N&(O^R))+D[7]+1735328473&4294967295,I=O+(x<<14&4294967295|x>>>18),x=N+(O^R&(I^O))+D[12]+2368359562&4294967295,N=I+(x<<20&4294967295|x>>>12),x=R+(N^I^O)+D[5]+4294588738&4294967295,R=N+(x<<4&4294967295|x>>>28),x=O+(R^N^I)+D[8]+2272392833&4294967295,O=R+(x<<11&4294967295|x>>>21),x=I+(O^R^N)+D[11]+1839030562&4294967295,I=O+(x<<16&4294967295|x>>>16),x=N+(I^O^R)+D[14]+4259657740&4294967295,N=I+(x<<23&4294967295|x>>>9),x=R+(N^I^O)+D[1]+2763975236&4294967295,R=N+(x<<4&4294967295|x>>>28),x=O+(R^N^I)+D[4]+1272893353&4294967295,O=R+(x<<11&4294967295|x>>>21),x=I+(O^R^N)+D[7]+4139469664&4294967295,I=O+(x<<16&4294967295|x>>>16),x=N+(I^O^R)+D[10]+3200236656&4294967295,N=I+(x<<23&4294967295|x>>>9),x=R+(N^I^O)+D[13]+681279174&4294967295,R=N+(x<<4&4294967295|x>>>28),x=O+(R^N^I)+D[0]+3936430074&4294967295,O=R+(x<<11&4294967295|x>>>21),x=I+(O^R^N)+D[3]+3572445317&4294967295,I=O+(x<<16&4294967295|x>>>16),x=N+(I^O^R)+D[6]+76029189&4294967295,N=I+(x<<23&4294967295|x>>>9),x=R+(N^I^O)+D[9]+3654602809&4294967295,R=N+(x<<4&4294967295|x>>>28),x=O+(R^N^I)+D[12]+3873151461&4294967295,O=R+(x<<11&4294967295|x>>>21),x=I+(O^R^N)+D[15]+530742520&4294967295,I=O+(x<<16&4294967295|x>>>16),x=N+(I^O^R)+D[2]+3299628645&4294967295,N=I+(x<<23&4294967295|x>>>9),x=R+(I^(N|~O))+D[0]+4096336452&4294967295,R=N+(x<<6&4294967295|x>>>26),x=O+(N^(R|~I))+D[7]+1126891415&4294967295,O=R+(x<<10&4294967295|x>>>22),x=I+(R^(O|~N))+D[14]+2878612391&4294967295,I=O+(x<<15&4294967295|x>>>17),x=N+(O^(I|~R))+D[5]+4237533241&4294967295,N=I+(x<<21&4294967295|x>>>11),x=R+(I^(N|~O))+D[12]+1700485571&4294967295,R=N+(x<<6&4294967295|x>>>26),x=O+(N^(R|~I))+D[3]+2399980690&4294967295,O=R+(x<<10&4294967295|x>>>22),x=I+(R^(O|~N))+D[10]+4293915773&4294967295,I=O+(x<<15&4294967295|x>>>17),x=N+(O^(I|~R))+D[1]+2240044497&4294967295,N=I+(x<<21&4294967295|x>>>11),x=R+(I^(N|~O))+D[8]+1873313359&4294967295,R=N+(x<<6&4294967295|x>>>26),x=O+(N^(R|~I))+D[15]+4264355552&4294967295,O=R+(x<<10&4294967295|x>>>22),x=I+(R^(O|~N))+D[6]+2734768916&4294967295,I=O+(x<<15&4294967295|x>>>17),x=N+(O^(I|~R))+D[13]+1309151649&4294967295,N=I+(x<<21&4294967295|x>>>11),x=R+(I^(N|~O))+D[4]+4149444226&4294967295,R=N+(x<<6&4294967295|x>>>26),x=O+(N^(R|~I))+D[11]+3174756917&4294967295,O=R+(x<<10&4294967295|x>>>22),x=I+(R^(O|~N))+D[2]+718787259&4294967295,I=O+(x<<15&4294967295|x>>>17),x=N+(O^(I|~R))+D[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(I+(x<<21&4294967295|x>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+O&4294967295}s.prototype.v=function(C,R){R===void 0&&(R=C.length);const N=R-this.blockSize,D=this.C;let I=this.h,O=0;for(;O<R;){if(I==0)for(;O<=N;)a(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<R;)if(D[I++]=C.charCodeAt(O++),I==this.blockSize){a(this,D),I=0;break}}else for(;O<R;)if(D[I++]=C[O++],I==this.blockSize){a(this,D),I=0;break}}this.h=I,this.o+=R},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;R=this.o*8;for(var N=C.length-8;N<C.length;++N)C[N]=R&255,R/=256;for(this.v(C),C=Array(16),R=0,N=0;N<4;++N)for(let D=0;D<32;D+=8)C[R++]=this.g[N]>>>D&255;return C};function l(C,R){var N=f;return Object.prototype.hasOwnProperty.call(N,C)?N[C]:N[C]=R(C)}function u(C,R){this.h=R;const N=[];let D=!0;for(let I=C.length-1;I>=0;I--){const O=C[I]|0;D&&O==R||(N[I]=O,D=!1)}this.g=N}var f={};function p(C){return-128<=C&&C<128?l(C,function(R){return new u([R|0],R<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return S;if(C<0)return Y(g(-C));const R=[];let N=1;for(let D=0;C>=N;D++)R[D]=C/N|0,N*=4294967296;return new u(R,0)}function E(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return Y(E(C.substring(1),R));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const N=g(Math.pow(R,8));let D=S;for(let O=0;O<C.length;O+=8){var I=Math.min(8,C.length-O);const x=parseInt(C.substring(O,O+I),R);I<8?(I=g(Math.pow(R,I)),D=D.j(I).add(g(x))):(D=D.j(N),D=D.add(g(x)))}return D}var S=p(0),A=p(1),V=p(16777216);n=u.prototype,n.m=function(){if(Z(this))return-Y(this).m();let C=0,R=1;for(let N=0;N<this.g.length;N++){const D=this.i(N);C+=(D>=0?D:4294967296+D)*R,R*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(q(this))return"0";if(Z(this))return"-"+Y(this).toString(C);const R=g(Math.pow(C,6));var N=this;let D="";for(;;){const I=Ee(N,R).g;N=pe(N,I.j(R));let O=((N.g.length>0?N.g[0]:N.h)>>>0).toString(C);if(N=I,q(N))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function q(C){if(C.h!=0)return!1;for(let R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function Z(C){return C.h==-1}n.l=function(C){return C=pe(this,C),Z(C)?-1:q(C)?0:1};function Y(C){const R=C.g.length,N=[];for(let D=0;D<R;D++)N[D]=~C.g[D];return new u(N,~C.h).add(A)}n.abs=function(){return Z(this)?Y(this):this},n.add=function(C){const R=Math.max(this.g.length,C.g.length),N=[];let D=0;for(let I=0;I<=R;I++){let O=D+(this.i(I)&65535)+(C.i(I)&65535),x=(O>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);D=x>>>16,O&=65535,x&=65535,N[I]=x<<16|O}return new u(N,N[N.length-1]&-2147483648?-1:0)};function pe(C,R){return C.add(Y(R))}n.j=function(C){if(q(this)||q(C))return S;if(Z(this))return Z(C)?Y(this).j(Y(C)):Y(Y(this).j(C));if(Z(C))return Y(this.j(Y(C)));if(this.l(V)<0&&C.l(V)<0)return g(this.m()*C.m());const R=this.g.length+C.g.length,N=[];for(var D=0;D<2*R;D++)N[D]=0;for(D=0;D<this.g.length;D++)for(let I=0;I<C.g.length;I++){const O=this.i(D)>>>16,x=this.i(D)&65535,Me=C.i(I)>>>16,Ie=C.i(I)&65535;N[2*D+2*I]+=x*Ie,ue(N,2*D+2*I),N[2*D+2*I+1]+=O*Ie,ue(N,2*D+2*I+1),N[2*D+2*I+1]+=x*Me,ue(N,2*D+2*I+1),N[2*D+2*I+2]+=O*Me,ue(N,2*D+2*I+2)}for(C=0;C<R;C++)N[C]=N[2*C+1]<<16|N[2*C];for(C=R;C<2*R;C++)N[C]=0;return new u(N,0)};function ue(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function oe(C,R){this.g=C,this.h=R}function Ee(C,R){if(q(R))throw Error("division by zero");if(q(C))return new oe(S,S);if(Z(C))return R=Ee(Y(C),R),new oe(Y(R.g),Y(R.h));if(Z(R))return R=Ee(C,Y(R)),new oe(Y(R.g),R.h);if(C.g.length>30){if(Z(C)||Z(R))throw Error("slowDivide_ only works with positive integers.");for(var N=A,D=R;D.l(C)<=0;)N=Oe(N),D=Oe(D);var I=fe(N,1),O=fe(D,1);for(D=fe(D,2),N=fe(N,2);!q(D);){var x=O.add(D);x.l(C)<=0&&(I=I.add(N),O=x),D=fe(D,1),N=fe(N,1)}return R=pe(C,I.j(R)),new oe(I,R)}for(I=S;C.l(R)>=0;){for(N=Math.max(1,Math.floor(C.m()/R.m())),D=Math.ceil(Math.log(N)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=g(N),x=O.j(R);Z(x)||x.l(C)>0;)N-=D,O=g(N),x=O.j(R);q(O)&&(O=A),I=I.add(O),C=pe(C,x)}return new oe(I,C)}n.B=function(C){return Ee(this,C).h},n.and=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let D=0;D<R;D++)N[D]=this.i(D)&C.i(D);return new u(N,this.h&C.h)},n.or=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let D=0;D<R;D++)N[D]=this.i(D)|C.i(D);return new u(N,this.h|C.h)},n.xor=function(C){const R=Math.max(this.g.length,C.g.length),N=[];for(let D=0;D<R;D++)N[D]=this.i(D)^C.i(D);return new u(N,this.h^C.h)};function Oe(C){const R=C.g.length+1,N=[];for(let D=0;D<R;D++)N[D]=C.i(D)<<1|C.i(D-1)>>>31;return new u(N,C.h)}function fe(C,R){const N=R>>5;R%=32;const D=C.g.length-N,I=[];for(let O=0;O<D;O++)I[O]=R>0?C.i(O+N)>>>R|C.i(O+N+1)<<32-R:C.i(O+N);return new u(I,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,HA=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=E,da=u}).apply(typeof TS<"u"?TS:typeof self<"u"?self:typeof window<"u"?window:{});var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GA,hu,KA,Pd,Kg,WA,YA,QA;(function(){var n,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Td=="object"&&Td];for(var y=0;y<h.length;++y){var T=h[y];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var s=t(this);function a(h,y){if(y)e:{var T=s;h=h.split(".");for(var b=0;b<h.length-1;b++){var z=h[b];if(!(z in T))break e;T=T[z]}h=h[h.length-1],b=T[h],y=y(b),y!=b&&y!=null&&e(T,h,{configurable:!0,writable:!0,value:y})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(y){var T=[],b;for(b in y)Object.prototype.hasOwnProperty.call(y,b)&&T.push([b,y[b]]);return T}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function p(h,y,T){return h.call.apply(h.bind,arguments)}function g(h,y,T){return g=p,g.apply(null,arguments)}function E(h,y){var T=Array.prototype.slice.call(arguments,1);return function(){var b=T.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function S(h,y){function T(){}T.prototype=y.prototype,h.Z=y.prototype,h.prototype=new T,h.prototype.constructor=h,h.Ob=function(b,z,Q){for(var he=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)he[Ve-2]=arguments[Ve];return y.prototype[z].apply(b,he)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function V(h){const y=h.length;if(y>0){const T=Array(y);for(let b=0;b<y;b++)T[b]=h[b];return T}return[]}function q(h,y){for(let b=1;b<arguments.length;b++){const z=arguments[b];var T=typeof z;if(T=T!="object"?T:z?Array.isArray(z)?"array":T:"null",T=="array"||T=="object"&&typeof z.length=="number"){T=h.length||0;const Q=z.length||0;h.length=T+Q;for(let he=0;he<Q;he++)h[T+he]=z[he]}else h.push(z)}}class Z{constructor(y,T){this.i=y,this.j=T,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Y(h){u.setTimeout(()=>{throw h},0)}function pe(){var h=C;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class ue{constructor(){this.h=this.g=null}add(y,T){const b=oe.get();b.set(y,T),this.h?this.h.next=b:this.g=b,this.h=b}}var oe=new Z(()=>new Ee,h=>h.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(y,T){this.h=y,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,fe=!1,C=new ue,R=()=>{const h=Promise.resolve(void 0);Oe=()=>{h.then(N)}};function N(){for(var h;h=pe();){try{h.h.call(h.g)}catch(T){Y(T)}var y=oe;y.j(h),y.h<100&&(y.h++,h.next=y.g,y.g=h)}fe=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const T=()=>{};u.addEventListener("test",T,y),u.removeEventListener("test",T,y)}catch{}return h})();function x(h){return/^[\s\xa0]*$/.test(h)}function Me(h,y){I.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,y)}S(Me,I),Me.prototype.init=function(h,y){const T=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget,y||(T=="mouseover"?y=h.fromElement:T=="mouseout"&&(y=h.toElement)),this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ie="closure_listenable_"+(Math.random()*1e6|0),B=0;function re(h,y,T,b,z){this.listener=h,this.proxy=null,this.src=y,this.type=T,this.capture=!!b,this.ha=z,this.key=++B,this.da=this.fa=!1}function _e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Be(h,y,T){for(const b in h)y.call(T,h[b],b,h)}function Fe(h,y){for(const T in h)y.call(void 0,h[T],T,h)}function P(h){const y={};for(const T in h)y[T]=h[T];return y}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(h,y){let T,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(T in b)h[T]=b[T];for(let Q=0;Q<J.length;Q++)T=J[Q],Object.prototype.hasOwnProperty.call(b,T)&&(h[T]=b[T])}}function de(h){this.src=h,this.g={},this.h=0}de.prototype.add=function(h,y,T,b,z){const Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);const he=Ce(h,y,b,z);return he>-1?(y=h[he],T||(y.fa=!1)):(y=new re(y,this.src,Q,!!b,z),y.fa=T,h.push(y)),y};function be(h,y){const T=y.type;if(T in h.g){var b=h.g[T],z=Array.prototype.indexOf.call(b,y,void 0),Q;(Q=z>=0)&&Array.prototype.splice.call(b,z,1),Q&&(_e(y),h.g[T].length==0&&(delete h.g[T],h.h--))}}function Ce(h,y,T,b){for(let z=0;z<h.length;++z){const Q=h[z];if(!Q.da&&Q.listener==y&&Q.capture==!!T&&Q.ha==b)return z}return-1}var Ae="closure_lm_"+(Math.random()*1e6|0),mt={};function nt(h,y,T,b,z){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)nt(h,y[Q],T,b,z);return null}return T=k(T),h&&h[Ie]?h.J(y,T,f(b)?!!b.capture:!1,z):Pt(h,y,T,!1,b,z)}function Pt(h,y,T,b,z,Q){if(!y)throw Error("Invalid event type");const he=f(z)?!!z.capture:!!z;let Ve=Yn(h);if(Ve||(h[Ae]=Ve=new de(h)),T=Ve.add(y,T,b,he,Q),T.proxy)return T;if(b=ci(),T.proxy=b,b.src=h,b.listener=T,h.addEventListener)O||(z=he),z===void 0&&(z=!1),h.addEventListener(y.toString(),b,z);else if(h.attachEvent)h.attachEvent(Ut(y.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return T}function ci(){function h(T){return y.call(h.src,h.listener,T)}const y=Ri;return h}function ui(h,y,T,b,z){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)ui(h,y[Q],T,b,z);else b=f(b)?!!b.capture:!!b,T=k(T),h&&h[Ie]?(h=h.i,Q=String(y).toString(),Q in h.g&&(y=h.g[Q],T=Ce(y,T,b,z),T>-1&&(_e(y[T]),Array.prototype.splice.call(y,T,1),y.length==0&&(delete h.g[Q],h.h--)))):h&&(h=Yn(h))&&(y=h.g[y.toString()],h=-1,y&&(h=Ce(y,T,b,z)),(T=h>-1?y[h]:null)&&hi(T))}function hi(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Ie])be(y.i,h);else{var T=h.type,b=h.proxy;y.removeEventListener?y.removeEventListener(T,b,h.capture):y.detachEvent?y.detachEvent(Ut(T),b):y.addListener&&y.removeListener&&y.removeListener(b),(T=Yn(y))?(be(T,h),T.h==0&&(T.src=null,y[Ae]=null)):_e(h)}}}function Ut(h){return h in mt?mt[h]:mt[h]="on"+h}function Ri(h,y){if(h.da)h=!0;else{y=new Me(y,this);const T=h.listener,b=h.ha||h.src;h.fa&&hi(h),h=T.call(b,y)}return h}function Yn(h){return h=h[Ae],h instanceof de?h:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function k(h){return typeof h=="function"?h:(h[U]||(h[U]=function(y){return h.handleEvent(y)}),h[U])}function G(){D.call(this),this.i=new de(this),this.M=this,this.G=null}S(G,D),G.prototype[Ie]=!0,G.prototype.removeEventListener=function(h,y,T,b){ui(this,h,y,T,b)};function le(h,y){var T,b=h.G;if(b)for(T=[];b;b=b.G)T.push(b);if(h=h.M,b=y.type||y,typeof y=="string")y=new I(y,h);else if(y instanceof I)y.target=y.target||h;else{var z=y;y=new I(b,h),ce(y,z)}z=!0;let Q,he;if(T)for(he=T.length-1;he>=0;he--)Q=y.g=T[he],z=ae(Q,b,!0,y)&&z;if(Q=y.g=h,z=ae(Q,b,!0,y)&&z,z=ae(Q,b,!1,y)&&z,T)for(he=0;he<T.length;he++)Q=y.g=T[he],z=ae(Q,b,!1,y)&&z}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var h=this.i;for(const y in h.g){const T=h.g[y];for(let b=0;b<T.length;b++)_e(T[b]);delete h.g[y],h.h--}}this.G=null},G.prototype.J=function(h,y,T,b){return this.i.add(String(h),y,!1,T,b)},G.prototype.K=function(h,y,T,b){return this.i.add(String(h),y,!0,T,b)};function ae(h,y,T,b){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();let z=!0;for(let Q=0;Q<y.length;++Q){const he=y[Q];if(he&&!he.da&&he.capture==T){const Ve=he.listener,Kt=he.ha||he.src;he.fa&&be(h.i,he),z=Ve.call(Kt,b)!==!1&&z}}return z&&!b.defaultPrevented}function qe(h,y){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(h,y||0)}function pt(h){h.g=qe(()=>{h.g=null,h.i&&(h.i=!1,pt(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Ue extends D{constructor(y,T){super(),this.m=y,this.l=T,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(h){D.call(this),this.h=h,this.g={}}S(lt,D);var Qn=[];function pn(h){Be(h.g,function(y,T){this.g.hasOwnProperty(T)&&hi(y)},h),h.g={}}lt.prototype.N=function(){lt.Z.N.call(this),pn(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ht=u.JSON.stringify,Gt=u.JSON.parse,Xt=class{stringify(h){return u.JSON.stringify(h,void 0)}parse(h){return u.JSON.parse(h,void 0)}};function Ii(){}function di(){}var Zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gt(){I.call(this,"d")}S(gt,I);function wn(){I.call(this,"c")}S(wn,I);var _t={},Io=null;function $i(){return Io=Io||new G}_t.Ia="serverreachability";function Ni(h){I.call(this,_t.Ia,h)}S(Ni,I);function On(h){const y=$i();le(y,new Ni(y))}_t.STAT_EVENT="statevent";function xi(h,y){I.call(this,_t.STAT_EVENT,h),this.stat=y}S(xi,I);function zt(h){const y=$i();le(y,new xi(y,h))}_t.Ja="timingevent";function fi(h,y){I.call(this,_t.Ja,h),this.size=y}S(fi,I);function $n(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){h()},y)}function Lt(){this.g=!0}Lt.prototype.ua=function(){this.g=!1};function Jt(h,y,T,b,z,Q){h.info(function(){if(h.g)if(Q){var he="",Ve=Q.split("&");for(let at=0;at<Ve.length;at++){var Kt=Ve[at].split("=");if(Kt.length>1){const Ot=Kt[0];Kt=Kt[1];const Li=Ot.split("_");he=Li.length>=2&&Li[1]=="type"?he+(Ot+"="+Kt+"&"):he+(Ot+"=redacted&")}}}else he=null;else he=Q;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+y+`
`+T+`
`+he})}function Di(h,y,T,b,z,Q,he){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+y+`
`+T+`
`+Q+" "+he})}function qn(h,y,T,b){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rr(h,T)+(b?" "+b:"")})}function ps(h,y){h.info(function(){return"TIMEOUT: "+y})}Lt.prototype.info=function(){};function Rr(h,y){if(!h.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(h=0;h<Q.length;h++)if(Array.isArray(Q[h])){var T=Q[h];if(!(T.length<2)){var b=T[1];if(Array.isArray(b)&&!(b.length<1)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(let he=1;he<b.length;he++)b[he]=""}}}}return Ht(Q)}catch{return y}}var qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Na;function Hs(){}S(Hs,Ii),Hs.prototype.g=function(){return new XMLHttpRequest},Na=new Hs;function Xi(h){return encodeURIComponent(String(h))}function No(h){var y=1;h=h.split(":");const T=[];for(;y>0&&h.length;)T.push(h.shift()),y--;return h.length&&T.push(h.join(":")),T}function Vt(h,y,T,b){this.j=h,this.i=y,this.l=T,this.S=b||1,this.V=new lt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}var Bt={},en={};function Mi(h,y,T){h.M=1,h.A=xa(nn(y)),h.u=T,h.R=!0,Gs(h,null)}function Gs(h,y){h.F=Date.now(),it(h),h.B=nn(h.A);var T=h.B,b=h.S;Array.isArray(b)||(b=[String(b)]),Oo(T.i,"t",b),h.C=0,T=h.j.L,h.h=new mi,h.g=fh(h.j,T?y:null,!h.u),h.P>0&&(h.O=new Ue(g(h.Y,h,h.g),h.P)),y=h.V,T=h.g,b=h.ba;var z="readystatechange";Array.isArray(z)||(z&&(Qn[0]=z.toString()),z=Qn);for(let Q=0;Q<z.length;Q++){const he=nt(T,z[Q],b||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=h.J?P(h.J):{},h.u?(h.v||(h.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,y)):(h.v="GET",h.g.ea(h.B,h.v,null,y)),On(),Jt(h.i,h.v,h.B,h.l,h.S,h.u)}Vt.prototype.ba=function(h){h=h.target;const y=this.O;y&&es(h)==3?y.j():this.Y(h)},Vt.prototype.Y=function(h){try{if(h==this.g)e:{const Ve=es(this.g),Kt=this.g.ya(),at=this.g.ca();if(!(Ve<3)&&(Ve!=3||this.g&&(this.h.h||this.g.la()||bn(this.g)))){this.K||Ve!=4||Kt==7||(Kt==8||at<=0?On(3):On(2)),jt(this);var y=this.g.ca();this.X=y;var T=xo(this);if(this.o=y==200,Di(this.i,this.v,this.B,this.l,this.S,Ve,y),this.o){if(this.U&&!this.L){t:{if(this.g){var b,z=this.g;if((b=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(b)){var Q=b;break t}}Q=null}if(h=Q)qn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gs(this,h);else{this.o=!1,this.m=3,zt(12),pi(this),Oi(this);break e}}if(this.R){h=!0;let Ot;for(;!this.K&&this.C<T.length;)if(Ot=De(this,T),Ot==en){Ve==4&&(this.m=4,zt(14),h=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Bt){this.m=4,zt(15),qn(this.i,this.l,T,"[Invalid Chunk]"),h=!1;break}else qn(this.i,this.l,Ot,null),gs(this,Ot);if(K(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||T.length!=0||this.h.h||(this.m=1,zt(16),h=!1),this.o=this.o&&h,!h)qn(this.i,this.l,T,"[Invalid Chunked Response]"),pi(this),Oi(this);else if(T.length>0&&!this.W){this.W=!0;var he=this.j;he.g==this&&he.aa&&!he.P&&(he.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),gc(he),he.P=!0,zt(11))}}else qn(this.i,this.l,T,null),gs(this,T);Ve==4&&pi(this),this.o&&!this.K&&(Ve==4?ch(this.j,this):(this.o=!1,it(this)))}else Ws(this.g),y==400&&T.indexOf("Unknown SID")>0?(this.m=3,zt(12)):(this.m=0,zt(13)),pi(this),Oi(this)}}}catch{}finally{}};function xo(h){if(!K(h))return h.g.la();const y=bn(h.g);if(y==="")return"";let T="";const b=y.length,z=es(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return pi(h),Oi(h),"";h.h.i=new u.TextDecoder}for(let Q=0;Q<b;Q++)h.h.h=!0,T+=h.h.i.decode(y[Q],{stream:!(z&&Q==b-1)});return y.length=0,h.h.g+=T,h.C=0,h.h.g}function K(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function De(h,y){var T=h.C,b=y.indexOf(`
`,T);return b==-1?en:(T=Number(y.substring(T,b)),isNaN(T)?Bt:(b+=1,b+T>y.length?en:(y=y.slice(b,b+T),h.C=b+T,y)))}Vt.prototype.cancel=function(){this.K=!0,pi(this)};function it(h){h.T=Date.now()+h.H,Mt(h,h.H)}function Mt(h,y){if(h.D!=null)throw Error("WatchDog timer not null");h.D=$n(g(h.aa,h),y)}function jt(h){h.D&&(u.clearTimeout(h.D),h.D=null)}Vt.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(ps(this.i,this.B),this.M!=2&&(On(),zt(17)),pi(this),this.m=2,Oi(this)):Mt(this,this.T-h)};function Oi(h){h.j.I==0||h.K||ch(h.j,h)}function pi(h){jt(h);var y=h.O;y&&typeof y.dispose=="function"&&y.dispose(),h.O=null,pn(h.V),h.g&&(y=h.g,h.g=null,y.abort(),y.dispose())}function gs(h,y){try{var T=h.j;if(T.I!=0&&(T.g==h||ys(T.h,h))){if(!h.L&&ys(T.h,h)&&T.I==3){try{var b=T.Ba.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!T.v){if(T.g)if(T.g.F+3e3<h.F)jo(T),Pr(T);else break e;Va(T),zt(18)}}else T.xa=z[1],0<T.xa-T.K&&z[2]<37500&&T.F&&T.A==0&&!T.C&&(T.C=$n(g(T.Va,T),6e3));_s(T.h)<=1&&T.ta&&(T.ta=void 0)}else bs(T,11)}else if((h.L||T.g==h)&&jo(T),!x(y))for(z=T.Ba.g.parse(y),y=0;y<z.length;y++){let at=z[y];const Ot=at[0];if(!(Ot<=T.K))if(T.K=Ot,at=at[1],T.I==2)if(at[0]=="c"){T.M=at[1],T.ba=at[2];const Li=at[3];Li!=null&&(T.ka=Li,T.j.info("VER="+T.ka));const As=at[4];As!=null&&(T.za=As,T.j.info("SVER="+T.za));const ts=at[5];ts!=null&&typeof ts=="number"&&ts>0&&(b=1.5*ts,T.O=b,T.j.info("backChannelRequestTimeoutMs_="+b)),b=T;const ns=h.g;if(ns){const ja=ns.g?ns.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ja){var Q=b.h;Q.g||ja.indexOf("spdy")==-1&&ja.indexOf("quic")==-1&&ja.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(sc(Q,Q.h),Q.h=null))}if(b.G){const Uo=ns.g?ns.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(b.wa=Uo,ht(b.J,b.G,Uo))}}T.I=3,T.l&&T.l.ra(),T.aa&&(T.T=Date.now()-h.F,T.j.info("Handshake RTT: "+T.T+"ms")),b=T;var he=h;if(b.na=dh(b,b.L?b.ba:null,b.W),he.L){rc(b.h,he);var Ve=he,Kt=b.O;Kt&&(Ve.H=Kt),Ve.D&&(jt(Ve),it(Ve)),b.g=he}else oh(b);T.i.length>0&&ws(T)}else at[0]!="stop"&&at[0]!="close"||bs(T,7);else T.I==3&&(at[0]=="stop"||at[0]=="close"?at[0]=="stop"?bs(T,7):mc(T):at[0]!="noop"&&T.l&&T.l.qa(at),T.A=0)}}On(4)}catch{}}var tn=class{constructor(h,y){this.g=h,this.map=y}};function nc(h){this.l=h||10,u.PerformanceNavigationTiming?(h=u.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ic(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function _s(h){return h.h?1:h.g?h.g.size:0}function ys(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function sc(h,y){h.g?h.g.add(y):h.h=y}function rc(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}nc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ac(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const T of h.g.values())y=y.concat(T.G);return y}return V(h.i)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Do(h,y){if(h){h=h.split("&");for(let T=0;T<h.length;T++){const b=h[T].indexOf("=");let z,Q=null;b>=0?(z=h[T].substring(0,b),Q=h[T].substring(b+1)):z=h[T],y(z,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function gi(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;h instanceof gi?(this.l=h.l,gn(this,h.j),this.o=h.o,this.g=h.g,Ir(this,h.u),this.h=h.h,oc(this,rh(h.i)),this.m=h.m):h&&(y=String(h).match(th))?(this.l=!1,gn(this,y[1]||"",!0),this.o=vs(y[2]||""),this.g=vs(y[3]||"",!0),Ir(this,y[4]),this.h=vs(y[5]||"",!0),oc(this,y[6]||"",!0),this.m=vs(y[7]||"")):(this.l=!1,this.i=new xr(null,this.l))}gi.prototype.toString=function(){const h=[];var y=this.j;y&&h.push(Da(y,Mo,!0),":");var T=this.g;return(T||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Da(y,Mo,!0),"@"),h.push(Xi(T).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.u,T!=null&&h.push(":",String(T))),(T=this.h)&&(this.g&&T.charAt(0)!="/"&&h.push("/"),h.push(Da(T,T.charAt(0)=="/"?lc:nh,!0))),(T=this.i.toString())&&h.push("?",T),(T=this.m)&&h.push("#",Da(T,ih)),h.join("")},gi.prototype.resolve=function(h){const y=nn(this);let T=!!h.j;T?gn(y,h.j):T=!!h.o,T?y.o=h.o:T=!!h.g,T?y.g=h.g:T=h.u!=null;var b=h.h;if(T)Ir(y,h.u);else if(T=!!h.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var z=y.h.lastIndexOf("/");z!=-1&&(b=y.h.slice(0,z+1)+b)}if(z=b,z==".."||z==".")b="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){b=z.lastIndexOf("/",0)==0,z=z.split("/");const Q=[];for(let he=0;he<z.length;){const Ve=z[he++];Ve=="."?b&&he==z.length&&Q.push(""):Ve==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),b&&he==z.length&&Q.push("")):(Q.push(Ve),b=!0)}b=Q.join("/")}else b=z}return T?y.h=b:T=h.i.toString()!=="",T?oc(y,rh(h.i)):T=!!h.m,T&&(y.m=h.m),y};function nn(h){return new gi(h)}function gn(h,y,T){h.j=T?vs(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Ir(h,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);h.u=y}else h.u=null}function oc(h,y,T){y instanceof xr?(h.i=y,ko(h.i,h.l)):(T||(y=Da(y,Nr)),h.i=new xr(y,h.l))}function ht(h,y,T){h.i.set(y,T)}function xa(h){return ht(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function vs(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Da(h,y,T){return typeof h=="string"?(h=encodeURI(h).replace(y,Xn),T&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Xn(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Mo=/[#\/\?@]/g,nh=/[#\?:]/g,lc=/[#\?]/g,Nr=/[#\?@]/g,ih=/#/g;function xr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Do(h.i,function(y,T){h.add(decodeURIComponent(y.replace(/\+/g," ")),T)}))}n=xr.prototype,n.add=function(h,y){Zn(this),this.i=null,h=Dr(this,h);let T=this.g.get(h);return T||this.g.set(h,T=[]),T.push(y),this.h+=1,this};function sh(h,y){Zn(h),y=Dr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function cc(h,y){return Zn(h),y=Dr(h,y),h.g.has(y)}n.forEach=function(h,y){Zn(this),this.g.forEach(function(T,b){T.forEach(function(z){h.call(y,z,b,this)},this)},this)};function uc(h,y){Zn(h);let T=[];if(typeof y=="string")cc(h,y)&&(T=T.concat(h.g.get(Dr(h,y))));else for(h=Array.from(h.g.values()),y=0;y<h.length;y++)T=T.concat(h[y]);return T}n.set=function(h,y){return Zn(this),this.i=null,h=Dr(this,h),cc(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=uc(this,h),h.length>0?String(h[0]):y):y};function Oo(h,y,T){sh(h,y),T.length>0&&(h.i=null,h.g.set(Dr(h,y),V(T)),h.h+=T.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(let b=0;b<y.length;b++){var T=y[b];const z=Xi(T);T=uc(this,T);for(let Q=0;Q<T.length;Q++){let he=z;T[Q]!==""&&(he+="="+Xi(T[Q])),h.push(he)}}return this.i=h.join("&")};function rh(h){const y=new xr;return y.i=h.i,h.g&&(y.g=new Map(h.g),y.h=h.h),y}function Dr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function ko(h,y){y&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(T,b){const z=b.toLowerCase();b!=z&&(sh(this,b),Oo(this,z,T))},h)),h.j=y}function Zi(h,y){const T=new Lt;if(u.Image){const b=new Image;b.onload=E(ki,T,"TestLoadImage: loaded",!0,y,b),b.onerror=E(ki,T,"TestLoadImage: error",!1,y,b),b.onabort=E(ki,T,"TestLoadImage: abort",!1,y,b),b.ontimeout=E(ki,T,"TestLoadImage: timeout",!1,y,b),u.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else y(!1)}function hc(h,y){const T=new Lt,b=new AbortController,z=setTimeout(()=>{b.abort(),ki(T,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:b.signal}).then(Q=>{clearTimeout(z),Q.ok?ki(T,"TestPingServer: ok",!0,y):ki(T,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),ki(T,"TestPingServer: error",!1,y)})}function ki(h,y,T,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(T)}catch{}}function Mr(){this.g=new Xt}function Es(h){this.i=h.Sb||null,this.h=h.ab||!1}S(Es,Ii),Es.prototype.g=function(){return new Ma(this.i,this.h)};function Ma(h,y){G.call(this),this.H=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ma,G),n=Ma.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=y,this.readyState=1,Ji(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(y.body=h),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},n.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Po(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function Po(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}n.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Or(this):Ji(this),this.readyState==3&&Po(this)}},n.Oa=function(h){this.g&&(this.response=this.responseText=h,Or(this))},n.Na=function(h){this.g&&(this.response=h,Or(this))},n.ga=function(){this.g&&Or(this)};function Or(h){h.readyState=4,h.l=null,h.j=null,h.B=null,Ji(h)}n.setRequestHeader=function(h,y){this.A.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var T=y.next();!T.done;)T=T.value,h.push(T[0]+": "+T[1]),T=y.next();return h.join(`\r
`)};function Ji(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Pi(h){let y="";return Be(h,function(T,b){y+=b,y+=":",y+=T,y+=`\r
`}),y}function Oa(h,y,T){e:{for(b in T){var b=!1;break e}b=!0}b||(T=Pi(T),typeof h=="string"?T!=null&&Xi(T):ht(h,y,T))}function yt(h){G.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(yt,G);var Ts=/^https?$/i,dc=["POST","PUT"];n=yt.prototype,n.Fa=function(h){this.H=h},n.ea=function(h,y,T,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Na.g(),this.g.onreadystatechange=A(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(Q){ka(this,Q);return}if(h=T||"",T=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)T.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const Q of b.keys())T.set(Q,b.get(Q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(T.keys()).find(Q=>Q.toLowerCase()=="content-type"),z=u.FormData&&h instanceof u.FormData,!(Array.prototype.indexOf.call(dc,y,void 0)>=0)||b||z||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,he]of T)this.g.setRequestHeader(Q,he);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(Q){ka(this,Q)}};function ka(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.o=5,fc(h),Ks(h)}function fc(h){h.A||(h.A=!0,le(h,"complete"),le(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,le(this,"complete"),le(this,"abort"),Ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),yt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Pa(this):this.Xa())},n.Xa=function(){Pa(this)};function Pa(h){if(h.h&&typeof l<"u"){if(h.v&&es(h)==4)setTimeout(h.Ca.bind(h),0);else if(le(h,"readystatechange"),es(h)==4){h.h=!1;try{const Q=h.ca();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var T;if(!(T=y)){var b;if(b=Q===0){let he=String(h.D).match(th)[1]||null;!he&&u.self&&u.self.location&&(he=u.self.location.protocol.slice(0,-1)),b=!Ts.test(he?he.toLowerCase():"")}T=b}if(T)le(h,"complete"),le(h,"success");else{h.o=6;try{var z=es(h)>2?h.g.statusText:""}catch{z=""}h.l=z+" ["+h.ca()+"]",fc(h)}}finally{Ks(h)}}}}function Ks(h,y){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const T=h.g;h.g=null,y||le(h,"ready");try{T.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function es(h){return h.g?h.g.readyState:0}n.ca=function(){try{return es(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Gt(y)}};function bn(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Ws(h){const y={};h=(h.g&&es(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(x(h[b]))continue;var T=No(h[b]);const z=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const Q=y[z]||[];y[z]=Q,Q.push(T)}Fe(y,function(b){return b.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(h,y,T){return T&&T.internalChannelParams&&T.internalChannelParams[h]||y}function kr(h){this.za=0,this.i=[],this.j=new Lt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ss("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ss("baseRetryDelayMs",5e3,h),this.Za=Ss("retryDelaySeedMs",1e4,h),this.Ta=Ss("forwardChannelMaxRetries",2,h),this.va=Ss("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new nc(h&&h.concurrentRequestLimit),this.Ba=new Mr,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=kr.prototype,n.ka=8,n.I=1,n.connect=function(h,y,T,b){zt(0),this.W=h,this.H=y||{},T&&b!==void 0&&(this.H.OSID=T,this.H.OAID=b),this.F=this.X,this.J=dh(this,null,this.W),ws(this)};function mc(h){if(Lo(h),h.I==3){var y=h.V++,T=nn(h.J);if(ht(T,"SID",h.M),ht(T,"RID",y),ht(T,"TYPE","terminate"),La(h,T),y=new Vt(h,h.j,y),y.M=2,y.A=xa(nn(T)),T=!1,u.navigator&&u.navigator.sendBeacon)try{T=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!T&&u.Image&&(new Image().src=y.A,T=!0),T||(y.g=fh(y.j,null),y.g.ea(y.A)),y.F=Date.now(),it(y)}hh(h)}function Pr(h){h.g&&(gc(h),h.g.cancel(),h.g=null)}function Lo(h){Pr(h),h.v&&(u.clearTimeout(h.v),h.v=null),jo(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&u.clearTimeout(h.m),h.m=null)}function ws(h){if(!ic(h.h)&&!h.m){h.m=!0;var y=h.Ea;Oe||R(),fe||(Oe(),fe=!0),C.add(y,h),h.D=0}}function Vo(h,y){return _s(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=y.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=$n(g(h.Ea,h,y),uh(h,h.D)),h.D++,!0)}n.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const z=new Vt(this,this.j,h);let Q=this.o;if(this.U&&(Q?(Q=P(Q),ce(Q,this.U)):Q=this.U),this.u!==null||this.R||(z.J=Q,Q=null),this.S)e:{for(var y=0,T=0;T<this.i.length;T++){t:{var b=this.i[T];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,y>4096){y=T;break e}if(y===4096||T===this.i.length-1){y=T+1;break e}}y=1e3}else y=1e3;y=ah(this,z,y),T=nn(this.J),ht(T,"RID",h),ht(T,"CVER",22),this.G&&ht(T,"X-HTTP-Session-Id",this.G),La(this,T),Q&&(this.R?y="headers="+Xi(Pi(Q))+"&"+y:this.u&&Oa(T,this.u,Q)),sc(this.h,z),this.Ra&&ht(T,"TYPE","init"),this.S?(ht(T,"$req",y),ht(T,"SID","null"),z.U=!0,Mi(z,T,null)):Mi(z,T,y),this.I=2}}else this.I==3&&(h?pc(this,h):this.i.length==0||ic(this.h)||pc(this))};function pc(h,y){var T;y?T=y.l:T=h.V++;const b=nn(h.J);ht(b,"SID",h.M),ht(b,"RID",T),ht(b,"AID",h.K),La(h,b),h.u&&h.o&&Oa(b,h.u,h.o),T=new Vt(h,h.j,T,h.D+1),h.u===null&&(T.J=h.o),y&&(h.i=y.G.concat(h.i)),y=ah(h,T,1e3),T.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),sc(h.h,T),Mi(T,b,y)}function La(h,y){h.H&&Be(h.H,function(T,b){ht(y,b,T)}),h.l&&Be({},function(T,b){ht(y,b,T)})}function ah(h,y,T){T=Math.min(h.i.length,T);const b=h.l?g(h.l.Ka,h.l,h):null;e:{var z=h.i;let Ve=-1;for(;;){const Kt=["count="+T];Ve==-1?T>0?(Ve=z[0].g,Kt.push("ofs="+Ve)):Ve=0:Kt.push("ofs="+Ve);let at=!0;for(let Ot=0;Ot<T;Ot++){var Q=z[Ot].g;const Li=z[Ot].map;if(Q-=Ve,Q<0)Ve=Math.max(0,z[Ot].g-100),at=!1;else try{Q="req"+Q+"_"||"";try{var he=Li instanceof Map?Li:Object.entries(Li);for(const[As,ts]of he){let ns=ts;f(ts)&&(ns=Ht(ts)),Kt.push(Q+As+"="+encodeURIComponent(ns))}}catch(As){throw Kt.push(Q+"type="+encodeURIComponent("_badmap")),As}}catch{b&&b(Li)}}if(at){he=Kt.join("&");break e}}he=void 0}return h=h.i.splice(0,T),y.G=h,he}function oh(h){if(!h.g&&!h.v){h.Y=1;var y=h.Da;Oe||R(),fe||(Oe(),fe=!0),C.add(y,h),h.A=0}}function Va(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=$n(g(h.Da,h),uh(h,h.A)),h.A++,!0)}n.Da=function(){if(this.v=null,lh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=$n(g(this.Wa,this),h)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,zt(10),Pr(this),lh(this))};function gc(h){h.B!=null&&(u.clearTimeout(h.B),h.B=null)}function lh(h){h.g=new Vt(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var y=nn(h.na);ht(y,"RID","rpc"),ht(y,"SID",h.M),ht(y,"AID",h.K),ht(y,"CI",h.F?"0":"1"),!h.F&&h.ia&&ht(y,"TO",h.ia),ht(y,"TYPE","xmlhttp"),La(h,y),h.u&&h.o&&Oa(y,h.u,h.o),h.O&&(h.g.H=h.O);var T=h.g;h=h.ba,T.M=1,T.A=xa(nn(y)),T.u=null,T.R=!0,Gs(T,h)}n.Va=function(){this.C!=null&&(this.C=null,Pr(this),Va(this),zt(19))};function jo(h){h.C!=null&&(u.clearTimeout(h.C),h.C=null)}function ch(h,y){var T=null;if(h.g==y){jo(h),gc(h),h.g=null;var b=2}else if(ys(h.h,y))T=y.G,rc(h.h,y),b=1;else return;if(h.I!=0){if(y.o)if(b==1){T=y.u?y.u.length:0,y=Date.now()-y.F;var z=h.D;b=$i(),le(b,new fi(b,T)),ws(h)}else oh(h);else if(z=y.m,z==3||z==0&&y.X>0||!(b==1&&Vo(h,y)||b==2&&Va(h)))switch(T&&T.length>0&&(y=h.h,y.i=y.i.concat(T)),z){case 1:bs(h,5);break;case 4:bs(h,10);break;case 3:bs(h,6);break;default:bs(h,2)}}}function uh(h,y){let T=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(T*=2),T*y}function bs(h,y){if(h.j.info("Error code "+y),y==2){var T=g(h.bb,h),b=h.Ua;const z=!b;b=new gi(b||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||gn(b,"https"),xa(b),z?Zi(b.toString(),T):hc(b.toString(),T)}else zt(2);h.I=0,h.l&&h.l.pa(y),hh(h),Lo(h)}n.bb=function(h){h?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function hh(h){if(h.I=0,h.ja=[],h.l){const y=ac(h.h);(y.length!=0||h.i.length!=0)&&(q(h.ja,y),q(h.ja,h.i),h.h.i.length=0,V(h.i),h.i.length=0),h.l.oa()}}function dh(h,y,T){var b=T instanceof gi?nn(T):new gi(T);if(b.g!="")y&&(b.g=y+"."+b.g),Ir(b,b.u);else{var z=u.location;b=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;const Q=new gi(null);b&&gn(Q,b),y&&(Q.g=y),z&&Ir(Q,z),T&&(Q.h=T),b=Q}return T=h.G,y=h.wa,T&&y&&ht(b,T,y),ht(b,"VER",h.ka),La(h,b),b}function fh(h,y,T){if(y&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Aa&&!h.ma?new yt(new Es({ab:T})):new yt(h.ma),y.Fa(h.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}n=mh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Lr(){}Lr.prototype.g=function(h,y){return new Gn(h,y)};function Gn(h,y){G.call(this),this.g=new kr(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(h?h["X-WebChannel-Client-Profile"]=y.sa:h={"X-WebChannel-Client-Profile":y.sa}),this.g.U=h,(h=y&&y.Qb)&&!x(h)&&(this.g.u=h),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!x(y)&&(this.g.G=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Ys(this)}S(Gn,G),Gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){mc(this.g)},Gn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var T={};T.__data__=h,h=T}else this.v&&(T={},T.__data__=Ht(h),h=T);y.i.push(new tn(y.Ya++,h)),y.I==3&&ws(y)},Gn.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,Gn.Z.N.call(this)};function ph(h){gt.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const T in y){h=T;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}S(ph,gt);function gh(){wn.call(this),this.status=1}S(gh,wn);function Ys(h){this.g=h}S(Ys,mh),Ys.prototype.ra=function(){le(this.g,"a")},Ys.prototype.qa=function(h){le(this.g,new ph(h))},Ys.prototype.pa=function(h){le(this.g,new gh)},Ys.prototype.oa=function(){le(this.g,"b")},Lr.prototype.createWebChannel=Lr.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,QA=function(){return new Lr},YA=function(){return $i()},WA=_t,Kg={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,Pd=qs,Hn.COMPLETE="complete",KA=Hn,di.EventType=Zt,Zt.OPEN="a",Zt.CLOSE="b",Zt.ERROR="c",Zt.MESSAGE="d",G.prototype.listen=G.prototype.J,hu=di,yt.prototype.listenOnce=yt.prototype.K,yt.prototype.getLastError=yt.prototype.Ha,yt.prototype.getLastErrorCode=yt.prototype.ya,yt.prototype.getStatus=yt.prototype.ca,yt.prototype.getResponseJson=yt.prototype.La,yt.prototype.getResponseText=yt.prototype.la,yt.prototype.send=yt.prototype.ea,yt.prototype.setWithCredentials=yt.prototype.Fa,GA=yt}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ln.UNAUTHENTICATED=new Ln(null),Ln.GOOGLE_CREDENTIALS=new Ln("google-credentials-uid"),Ln.FIRST_PARTY=new Ln("first-party-uid"),Ln.MOCK_USER=new Ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl="12.11.0";function Sk(n){Gl=n}/**
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
 */const mo=new Vu("@firebase/firestore");function gl(){return mo.logLevel}function ye(n,...e){if(mo.logLevel<=Ke.DEBUG){const t=e.map(X_);mo.debug(`Firestore (${Gl}): ${n}`,...t)}}function Tr(n,...e){if(mo.logLevel<=Ke.ERROR){const t=e.map(X_);mo.error(`Firestore (${Gl}): ${n}`,...t)}}function po(n,...e){if(mo.logLevel<=Ke.WARN){const t=e.map(X_);mo.warn(`Firestore (${Gl}): ${n}`,...t)}}function X_(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,$A(n,s,t)}function $A(n,e,t){let s=`FIRESTORE (${Gl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Tr(s),new Error(s)}function ut(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||$A(e,a,s)}function Le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends ms{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ln.UNAUTHENTICATED)))}shutdown(){}}class bk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ak{constructor(e){this.t=e,this.currentUser=Ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ut(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new _r,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new _r)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ut(typeof s.accessToken=="string",31837,{l:s}),new XA(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ut(e===null||typeof e=="string",2055,{h:e}),new Ln(e)}}class Ck{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ln.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Rk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Ck(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ln.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class SS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ik{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ri(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ut(this.o===void 0,3512);const s=l=>{l.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ye("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new SS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ut(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new SS(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Nk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Nk(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Qe(n,e){return n<e?-1:n>e?1:0}function Wg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return lg(a)===lg(l)?Qe(a,l):lg(a)?1:-1}return Qe(n.length,e.length)}const xk=55296,Dk=57343;function lg(n){const e=n.charCodeAt(0);return e>=xk&&e<=Dk}function Ml(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="__name__";class Ds{constructor(e,t,s){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&xe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ds.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ds?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ds.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Qe(e.length,t.length)}static compareSegments(e,t){const s=Ds.isNumericId(e),a=Ds.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ds.extractNumericId(e).compare(Ds.extractNumericId(t)):Wg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return da.fromString(e.substring(4,e.length-2))}}class bt extends Ds{construct(e,t,s){return new bt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new bt(t)}static emptyPath(){return new bt([])}}const Mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dn extends Ds{construct(e,t,s){return new Dn(e,t,s)}static isValidIdentifier(e){return Mk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wS}static keyField(){return new Dn([wS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ge(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new ge(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(s+=f,a++):(l(),a++)}if(l(),u)throw new ge(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dn(t)}static emptyPath(){return new Dn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(bt.fromString(e))}static fromName(e){return new we(bt.fromString(e).popFirst(5))}static empty(){return new we(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return bt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new bt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n,e,t){if(!t)throw new ge(te.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ok(n,e,t,s){if(e===!0&&s===!0)throw new ge(te.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bS(n){if(!we.isDocumentKey(n))throw new ge(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function AS(n){if(we.isDocumentKey(n))throw new ge(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function JA(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function If(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function Sr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=If(n);throw new ge(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function un(n,e){const t={typeString:n};return e&&(t.value=e),t}function qu(n,e){if(!JA(n))throw new ge(te.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ge(te.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=-62135596800,RS=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*RS);return new xt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<CS)throw new ge(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/RS}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qu(e,xt._jsonSchema))return new xt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-CS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:un("string",xt._jsonSchemaVersion),seconds:un("number"),nanoseconds:un("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new xt(0,0))}static max(){return new ke(new xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Iu=-1;function kk(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=ke.fromTimestamp(s===1e9?new xt(t+1,0):new xt(t,s));return new ga(a,we.empty(),e)}function Pk(n){return new ga(n.readTime,n.key,Iu)}class ga{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ga(ke.min(),we.empty(),Iu)}static max(){return new ga(ke.max(),we.empty(),Iu)}}function Lk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(n.documentKey,e.documentKey),t!==0?t:Qe(n.largestBatchId,e.largestBatchId))}/**
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
 */const Vk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(n){if(n.code!==te.FAILED_PRECONDITION||n.message!==Vk)throw n;ye("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.reject(t)}static resolve(e){return new ie(((t,s)=>{t(e)}))}static reject(e){return new ie(((t,s)=>{s(e)}))}static waitFor(e){return new ie(((t,s)=>{let a=0,l=0,u=!1;e.forEach((f=>{++a,f.next((()=>{++l,u&&l===a&&t()}),(p=>s(p)))})),u=!0,l===a&&t()}))}static or(e){let t=ie.resolve(!1);for(const s of e)t=t.next((a=>a?ie.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ie(((s,a)=>{const l=e.length,u=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((E=>{u[g]=E,++f,f===l&&s(u)}),(E=>a(E)))}}))}static doWhile(e,t){return new ie(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function Uk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Nf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=-1;function xf(n){return n==null}function ef(n){return n===0&&1/n==-1/0}function zk(n){return typeof n=="number"&&Number.isInteger(n)&&!ef(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="";function Bk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=IS(e)),e=Fk(n.get(t),e);return IS(e)}function Fk(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case e1:t+="";break;default:t+=l}}return t}function IS(n){return n+e1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ca(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function t1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn=class Yg{constructor(e,t){this.comparator=e,this.root=t||fa.EMPTY}insert(e,t){return new Yg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fa.BLACK,null,null))}remove(e){return new Yg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fa.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sd(this.root,e,this.comparator,!0)}},Sd=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},fa=class ur{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ur.RED,this.left=a??ur.EMPTY,this.right=l??ur.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new ur(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ur.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ur.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ur.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ur.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}};fa.EMPTY=null,fa.RED=!0,fa.BLACK=!1;fa.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new fa(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.comparator=e,this.data=new hn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xS(this.data.getIterator())}getIteratorFrom(e){return new xS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fn(this.comparator);return t.data=e,t}}class xS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bi{constructor(e){this.fields=e,e.sort(Dn.comparator)}static empty(){return new bi([])}unionWith(e){let t=new fn(Dn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new bi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ml(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class n1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new n1("Invalid base64 string: "+l):l}})(e);return new Mn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new Mn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mn.EMPTY_BYTE_STRING=new Mn("");const qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _a(n){if(ut(!!n,39018),typeof n=="string"){let e=0;const t=qk.exec(n);if(ut(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Qt(n.seconds),nanos:Qt(n.nanos)}}function Qt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ya(n){return typeof n=="string"?Mn.fromBase64String(n):Mn.fromUint8Array(n)}/**
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
 */const i1="server_timestamp",s1="__type__",r1="__previous_value__",a1="__local_write_time__";function ey(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[s1])==null?void 0:s.stringValue)===i1}function Df(n){const e=n.mapValue.fields[r1];return ey(e)?Df(e):e}function Nu(n){const e=_a(n.mapValue.fields[a1].timestampValue);return new xt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t,s,a,l,u,f,p,g,E,S){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E,this.apiKey=S}}const tf="(default)";class xu{constructor(e,t){this.projectId=e,this.database=t||tf}static empty(){return new xu("","")}get isDefaultDatabase(){return this.database===tf}isEqual(e){return e instanceof xu&&e.projectId===this.projectId&&e.database===this.database}}function Gk(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ge(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xu(n.options.projectId,e)}/**
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
 */const o1="__type__",Kk="__max__",wd={mapValue:{}},l1="__vector__",nf="value";function va(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ey(n)?4:Yk(n)?9007199254740991:Wk(n)?10:11:xe(28295,{value:n})}function Us(n,e){if(n===e)return!0;const t=va(n);if(t!==va(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nu(n).isEqual(Nu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=_a(a.timestampValue),f=_a(l.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return ya(a.bytesValue).isEqual(ya(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Qt(a.geoPointValue.latitude)===Qt(l.geoPointValue.latitude)&&Qt(a.geoPointValue.longitude)===Qt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Qt(a.integerValue)===Qt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Qt(a.doubleValue),f=Qt(l.doubleValue);return u===f?ef(u)===ef(f):isNaN(u)&&isNaN(f)}return!1})(n,e);case 9:return Ml(n.arrayValue.values||[],e.arrayValue.values||[],Us);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},f=l.mapValue.fields||{};if(NS(u)!==NS(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!Us(u[p],f[p])))return!1;return!0})(n,e);default:return xe(52216,{left:n})}}function Du(n,e){return(n.values||[]).find((t=>Us(t,e)))!==void 0}function Ol(n,e){if(n===e)return 0;const t=va(n),s=va(e);if(t!==s)return Qe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Qe(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const f=Qt(l.integerValue||l.doubleValue),p=Qt(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return DS(n.timestampValue,e.timestampValue);case 4:return DS(Nu(n),Nu(e));case 5:return Wg(n.stringValue,e.stringValue);case 6:return(function(l,u){const f=ya(l),p=ya(u);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const f=l.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const E=Qe(f[g],p[g]);if(E!==0)return E}return Qe(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const f=Qe(Qt(l.latitude),Qt(u.latitude));return f!==0?f:Qe(Qt(l.longitude),Qt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return MS(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var A,V,q,Z;const f=l.fields||{},p=u.fields||{},g=(A=f[nf])==null?void 0:A.arrayValue,E=(V=p[nf])==null?void 0:V.arrayValue,S=Qe(((q=g==null?void 0:g.values)==null?void 0:q.length)||0,((Z=E==null?void 0:E.values)==null?void 0:Z.length)||0);return S!==0?S:MS(g,E)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===wd.mapValue&&u===wd.mapValue)return 0;if(l===wd.mapValue)return 1;if(u===wd.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=u.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const A=Wg(p[S],E[S]);if(A!==0)return A;const V=Ol(f[p[S]],g[E[S]]);if(V!==0)return V}return Qe(p.length,E.length)})(n.mapValue,e.mapValue);default:throw xe(23264,{he:t})}}function DS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Qe(n,e);const t=_a(n),s=_a(e),a=Qe(t.seconds,s.seconds);return a!==0?a:Qe(t.nanos,s.nanos)}function MS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Ol(t[a],s[a]);if(l)return l}return Qe(t.length,s.length)}function kl(n){return Qg(n)}function Qg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=_a(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ya(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return we.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Qg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${Qg(t.fields[u])}`;return a+"}"})(n.mapValue):xe(61005,{value:n})}function Ld(n){switch(va(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Df(n);return e?16+Ld(e):16;case 5:return 2*n.stringValue.length;case 6:return ya(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Ld(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Ca(s.fields,((l,u)=>{a+=l.length+Ld(u)})),a})(n.mapValue);default:throw xe(13486,{value:n})}}function OS(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $g(n){return!!n&&"integerValue"in n}function ty(n){return!!n&&"arrayValue"in n}function kS(n){return!!n&&"nullValue"in n}function PS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vd(n){return!!n&&"mapValue"in n}function Wk(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[o1])==null?void 0:s.stringValue)===l1}function gu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ca(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=gu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gu(n.arrayValue.values[t]);return e}return{...n}}function Yk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Kk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.value=e}static empty(){return new ai({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Vd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gu(t)}setAll(e){let t=Dn.emptyPath(),s={},a=[];e.forEach(((u,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=f.popLast()}u?s[f.lastSegment()]=gu(u):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Vd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Us(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Vd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ca(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new ai(gu(this.value))}}function c1(n){const e=[];return Ca(n.fields,((t,s)=>{const a=new Dn([t]);if(Vd(s)){const l=c1(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new bi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s,a,l,u,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=f}static newInvalidDocument(e){return new Vn(e,0,ke.min(),ke.min(),ke.min(),ai.empty(),0)}static newFoundDocument(e,t,s,a){return new Vn(e,1,t,ke.min(),s,a,0)}static newNoDocument(e,t){return new Vn(e,2,t,ke.min(),ke.min(),ai.empty(),0)}static newUnknownDocument(e,t){return new Vn(e,3,t,ke.min(),ke.min(),ai.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ai.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ai.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sf{constructor(e,t){this.position=e,this.inclusive=t}}function LS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=we.comparator(we.fromName(u.referenceValue),t.key):s=Ol(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function VS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Us(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class u1{}class cn extends u1{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Xk(e,t,s):t==="array-contains"?new eP(e,s):t==="in"?new tP(e,s):t==="not-in"?new nP(e,s):t==="array-contains-any"?new iP(e,s):new cn(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Zk(e,s):new Jk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ol(t,this.value)):t!==null&&va(this.value)===va(t)&&this.matchesComparison(Ol(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fs extends u1{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new fs(e,t)}matches(e){return h1(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h1(n){return n.op==="and"}function d1(n){return $k(n)&&h1(n)}function $k(n){for(const e of n.filters)if(e instanceof fs)return!1;return!0}function Xg(n){if(n instanceof cn)return n.field.canonicalString()+n.op.toString()+kl(n.value);if(d1(n))return n.filters.map((e=>Xg(e))).join(",");{const e=n.filters.map((t=>Xg(t))).join(",");return`${n.op}(${e})`}}function f1(n,e){return n instanceof cn?(function(s,a){return a instanceof cn&&s.op===a.op&&s.field.isEqual(a.field)&&Us(s.value,a.value)})(n,e):n instanceof fs?(function(s,a){return a instanceof fs&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,f)=>l&&f1(u,a.filters[f])),!0):!1})(n,e):void xe(19439)}function m1(n){return n instanceof cn?(function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`})(n):n instanceof fs?(function(t){return t.op.toString()+" {"+t.getFilters().map(m1).join(" ,")+"}"})(n):"Filter"}class Xk extends cn{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zk extends cn{constructor(e,t){super(e,"in",t),this.keys=p1("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Jk extends cn{constructor(e,t){super(e,"not-in",t),this.keys=p1("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function p1(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>we.fromName(s.referenceValue)))}class eP extends cn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ty(t)&&Du(t.arrayValue,this.value)}}class tP extends cn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Du(this.value.arrayValue,t)}}class nP extends cn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Du(this.value.arrayValue,t)}}class iP extends cn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ty(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Du(this.value.arrayValue,s)))}}/**
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
 */class sP{constructor(e,t=null,s=[],a=[],l=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=f,this.Te=null}}function jS(n,e=null,t=[],s=[],a=null,l=null,u=null){return new sP(n,e,t,s,a,l,u)}function ny(n){const e=Le(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Xg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),xf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>kl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>kl(s))).join(",")),e.Te=t}return e.Te}function iy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Qk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!f1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!VS(n.startAt,e.startAt)&&VS(n.endAt,e.endAt)}function Zg(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t=null,s=[],a=[],l=null,u="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=f,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function rP(n,e,t,s,a,l,u,f){return new Yl(n,e,t,s,a,l,u,f)}function sy(n){return new Yl(n)}function US(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function aP(n){return we.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function g1(n){return n.collectionGroup!==null}function _u(n){const e=Le(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new fn(Dn.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Mu(l,s))})),t.has(Dn.keyField().canonicalString())||e.Ee.push(new Mu(Dn.keyField(),s))}return e.Ee}function ks(n){const e=Le(n);return e.Ie||(e.Ie=oP(e,_u(n))),e.Ie}function oP(n,e){if(n.limitType==="F")return jS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Mu(a.field,l)}));const t=n.endAt?new sf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new sf(n.startAt.position,n.startAt.inclusive):null;return jS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Jg(n,e){const t=n.filters.concat([e]);return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lP(n,e){const t=n.explicitOrderBy.concat([e]);return new Yl(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function e_(n,e,t){return new Yl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mf(n,e){return iy(ks(n),ks(e))&&n.limitType===e.limitType}function _1(n){return`${ny(ks(n))}|lt:${n.limitType}`}function _l(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>m1(a))).join(", ")}]`),xf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>kl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>kl(a))).join(",")),`Target(${s})`})(ks(n))}; limitType=${n.limitType})`}function Of(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):we.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of _u(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,f,p){const g=LS(u,f,p);return u.inclusive?g<=0:g<0})(s.startAt,_u(s),a)||s.endAt&&!(function(u,f,p){const g=LS(u,f,p);return u.inclusive?g>=0:g>0})(s.endAt,_u(s),a))})(n,e)}function cP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function y1(n){return(e,t)=>{let s=!1;for(const a of _u(n)){const l=uP(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function uP(n,e,t){const s=n.field.isKeyField()?we.comparator(e.key,t.key):(function(l,u,f){const p=u.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Ol(p,g):xe(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return xe(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ca(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return t1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new hn(we.comparator);function wr(){return hP}const v1=new hn(we.comparator);function du(...n){let e=v1;for(const t of n)e=e.insert(t.key,t);return e}function E1(n){let e=v1;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function so(){return yu()}function T1(){return yu()}function yu(){return new wo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dP=new hn(we.comparator),fP=new fn(we.comparator);function $e(...n){let e=fP;for(const t of n)e=e.add(t);return e}const mP=new fn(Qe);function pP(){return mP}/**
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
 */function ry(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ef(e)?"-0":e}}function S1(n){return{integerValue:""+n}}function gP(n,e){return zk(e)?S1(e):ry(n,e)}/**
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
 */class kf{constructor(){this._=void 0}}function _P(n,e,t){return n instanceof Ou?(function(a,l){const u={fields:{[s1]:{stringValue:i1},[a1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&ey(l)&&(l=Df(l)),l&&(u.fields[r1]=l),{mapValue:u}})(t,e):n instanceof Pl?b1(n,e):n instanceof ku?A1(n,e):(function(a,l){const u=w1(a,l),f=zS(u)+zS(a.Ae);return $g(u)&&$g(a.Ae)?S1(f):ry(a.serializer,f)})(n,e)}function yP(n,e,t){return n instanceof Pl?b1(n,e):n instanceof ku?A1(n,e):t}function w1(n,e){return n instanceof rf?(function(s){return $g(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ou extends kf{}class Pl extends kf{constructor(e){super(),this.elements=e}}function b1(n,e){const t=C1(e);for(const s of n.elements)t.some((a=>Us(a,s)))||t.push(s);return{arrayValue:{values:t}}}class ku extends kf{constructor(e){super(),this.elements=e}}function A1(n,e){let t=C1(e);for(const s of n.elements)t=t.filter((a=>!Us(a,s)));return{arrayValue:{values:t}}}class rf extends kf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function zS(n){return Qt(n.integerValue||n.doubleValue)}function C1(n){return ty(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t){this.field=e,this.transform=t}}function vP(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof Pl&&a instanceof Pl||s instanceof ku&&a instanceof ku?Ml(s.elements,a.elements,Us):s instanceof rf&&a instanceof rf?Us(s.Ae,a.Ae):s instanceof Ou&&a instanceof Ou})(n.transform,e.transform)}class EP{constructor(e,t){this.version=e,this.transformResults=t}}class Ps{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ps}static exists(e){return new Ps(void 0,e)}static updateTime(e){return new Ps(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pf{}function I1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new x1(n.key,Ps.none()):new Hu(n.key,n.data,Ps.none());{const t=n.data,s=ai.empty();let a=new fn(Dn.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new Ra(n.key,s,new bi(a.toArray()),Ps.none())}}function TP(n,e,t){n instanceof Hu?(function(a,l,u){const f=a.value.clone(),p=FS(a.fieldTransforms,l,u.transformResults);f.setAll(p),l.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ra?(function(a,l,u){if(!jd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const f=FS(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(N1(a)),p.setAll(f),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function vu(n,e,t,s){return n instanceof Hu?(function(l,u,f,p){if(!jd(l.precondition,u))return f;const g=l.value.clone(),E=qS(l.fieldTransforms,p,u);return g.setAll(E),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ra?(function(l,u,f,p){if(!jd(l.precondition,u))return f;const g=qS(l.fieldTransforms,p,u),E=u.data;return E.setAll(N1(l)),E.setAll(g),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(n,e,t,s):(function(l,u,f){return jd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f})(n,e,t)}function SP(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=w1(s.transform,a||null);l!=null&&(t===null&&(t=ai.empty()),t.set(s.field,l))}return t||null}function BS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ml(s,a,((l,u)=>vP(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hu extends Pf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ra extends Pf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function N1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function FS(n,e,t){const s=new Map;ut(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,f=e.data.field(l.field);s.set(l.field,yP(u,f,t[a]))}return s}function qS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,_P(l,u,e))}return s}class x1 extends Pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wP extends Pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&TP(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=vu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=vu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=T1();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let f=this.applyToLocalView(u,l.mutatedFields);f=t.has(a.key)?null:f;const p=I1(u,f);p!==null&&s.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(ke.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$e())}isEqual(e){return this.batchId===e.batchId&&Ml(this.mutations,e.mutations,((t,s)=>BS(t,s)))&&Ml(this.baseMutations,e.baseMutations,((t,s)=>BS(t,s)))}}class ay{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){ut(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return dP})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new ay(e,t,s,a)}}/**
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
 */class AP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln,Je;function RP(n){switch(n){case te.OK:return xe(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return xe(15467,{code:n})}}function D1(n){if(n===void 0)return Tr("GRPC error has no .code"),te.UNKNOWN;switch(n){case ln.OK:return te.OK;case ln.CANCELLED:return te.CANCELLED;case ln.UNKNOWN:return te.UNKNOWN;case ln.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case ln.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case ln.INTERNAL:return te.INTERNAL;case ln.UNAVAILABLE:return te.UNAVAILABLE;case ln.UNAUTHENTICATED:return te.UNAUTHENTICATED;case ln.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case ln.NOT_FOUND:return te.NOT_FOUND;case ln.ALREADY_EXISTS:return te.ALREADY_EXISTS;case ln.PERMISSION_DENIED:return te.PERMISSION_DENIED;case ln.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case ln.ABORTED:return te.ABORTED;case ln.OUT_OF_RANGE:return te.OUT_OF_RANGE;case ln.UNIMPLEMENTED:return te.UNIMPLEMENTED;case ln.DATA_LOSS:return te.DATA_LOSS;default:return xe(39323,{code:n})}}(Je=ln||(ln={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IP(){return new TextEncoder}/**
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
 */const NP=new da([4294967295,4294967295],0);function HS(n){const e=IP().encode(n),t=new HA;return t.update(e),new Uint8Array(t.digest())}function GS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new da([t,s],0),new da([a,l],0)]}class oy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fu(`Invalid padding: ${t}`);if(s<0)throw new fu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=da.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(da.fromNumber(s)));return a.compare(NP)===1&&(a=new da([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=HS(e),[s,a]=GS(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new oy(l,a,t);return s.forEach((f=>u.insert(f))),u}insert(e){if(this.ge===0)return;const t=HS(e),[s,a]=GS(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Lf(ke.min(),a,new hn(Qe),wr(),$e())}}class Gu{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Gu(s,t,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class M1{constructor(e,t){this.targetId=e,this.Ce=t}}class O1{constructor(e,t,s=Mn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class KS{constructor(){this.ve=0,this.Fe=WS(),this.Me=Mn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$e(),t=$e(),s=$e();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:xe(38017,{changeType:l})}})),new Gu(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=WS()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class xP{constructor(e){this.Ge=e,this.ze=new Map,this.je=wr(),this.Je=bd(),this.He=bd(),this.Ze=new hn(Qe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:xe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Zg(l))if(s===0){const u=new we(l.path);this.et(t,u,Vn.newNoDocument(u,ke.min()))}else ut(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const f=this.ut(e),p=f?this.ct(f,e,u):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,f;try{u=ya(s).toUint8Array()}catch(p){if(p instanceof n1)return po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new oy(u,a,l)}catch(p){return po(p instanceof fu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const f=this.ot(u);if(f){if(l.current&&Zg(f.target)){const p=new we(f.target.path);this.Et(p).has(u)||this.It(u,p)||this.et(u,p,Vn.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=$e();this.He.forEach(((l,u)=>{let f=!0;u.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new Lf(e,t,this.Ze,this.je,s);return this.je=wr(),this.Je=bd(),this.He=bd(),this.Ze=new hn(Qe),a}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.It(e,t)?a.Ke(t,1):a.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new KS,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new fn(Qe),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new fn(Qe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ye("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new KS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function bd(){return new hn(we.comparator)}function WS(){return new hn(we.comparator)}const DP={asc:"ASCENDING",desc:"DESCENDING"},MP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OP={and:"AND",or:"OR"};class kP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t_(n,e){return n.useProto3Json||xf(e)?e:{value:e}}function af(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PP(n,e){return af(n,e.toTimestamp())}function Ls(n){return ut(!!n,49232),ke.fromTimestamp((function(t){const s=_a(t);return new xt(s.seconds,s.nanos)})(n))}function ly(n,e){return n_(n,e).canonicalString()}function n_(n,e){const t=(function(a){return new bt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function P1(n){const e=bt.fromString(n);return ut(z1(e),10190,{key:e.toString()}),e}function i_(n,e){return ly(n.databaseId,e.path)}function cg(n,e){const t=P1(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new we(V1(t))}function L1(n,e){return ly(n.databaseId,e)}function LP(n){const e=P1(n);return e.length===4?bt.emptyPath():V1(e)}function s_(n){return new bt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function V1(n){return ut(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function YS(n,e,t){return{name:i_(n,e),fields:t.value.mapValue.fields}}function VP(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:xe(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,E){return g.useProto3Json?(ut(E===void 0||typeof E=="string",58123),Mn.fromBase64String(E||"")):(ut(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Mn.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&(function(g){const E=g.code===void 0?te.UNKNOWN:D1(g.code);return new ge(E,g.message||"")})(u);t=new O1(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=cg(n,s.document.name),l=Ls(s.document.updateTime),u=s.document.createTime?Ls(s.document.createTime):ke.min(),f=new ai({mapValue:{fields:s.document.fields}}),p=Vn.newFoundDocument(a,l,u,f),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Ud(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=cg(n,s.document),l=s.readTime?Ls(s.readTime):ke.min(),u=Vn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Ud([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=cg(n,s.document),l=s.removedTargetIds||[];t=new Ud([],l,a,null)}else{if(!("filter"in e))return xe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new CP(a,l),f=s.targetId;t=new M1(f,u)}}return t}function jP(n,e){let t;if(e instanceof Hu)t={update:YS(n,e.key,e.value)};else if(e instanceof x1)t={delete:i_(n,e.key)};else if(e instanceof Ra)t={update:YS(n,e.key,e.data),updateMask:WP(e.fieldMask)};else{if(!(e instanceof wP))return xe(16599,{dt:e.type});t={verify:i_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const f=u.transform;if(f instanceof Ou)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Pl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ku)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof rf)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw xe(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:PP(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:xe(27497)})(n,e.precondition)),t}function UP(n,e){return n&&n.length>0?(ut(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?Ls(a.updateTime):Ls(l);return u.isEqual(ke.min())&&(u=Ls(l)),new EP(u,a.transformResults||[])})(t,e)))):[]}function zP(n,e){return{documents:[L1(n,e.path)]}}function BP(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=L1(n,a);const l=(function(g){if(g.length!==0)return U1(fs.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(g){if(g.length!==0)return g.map((E=>(function(A){return{field:yl(A.field),direction:HP(A.dir)}})(E)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=t_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function FP(n){let e=LP(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){ut(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(S){const A=j1(S);return A instanceof fs&&d1(A)?A.getFilters():[A]})(t.where));let u=[];t.orderBy&&(u=(function(S){return S.map((A=>(function(q){return new Mu(vl(q.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let A;return A=typeof S=="object"?S.value:S,xf(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(S){const A=!!S.before,V=S.values||[];return new sf(V,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(S){const A=!S.before,V=S.values||[];return new sf(V,A)})(t.endAt)),rP(e,a,u,l,f,"F",p,g)}function qP(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function j1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vl(t.unaryFilter.field);return cn.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=vl(t.unaryFilter.field);return cn.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=vl(t.unaryFilter.field);return cn.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=vl(t.unaryFilter.field);return cn.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return cn.create(vl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return fs.create(t.compositeFilter.filters.map((s=>j1(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return xe(1026)}})(t.compositeFilter.op))})(n):xe(30097,{filter:n})}function HP(n){return DP[n]}function GP(n){return MP[n]}function KP(n){return OP[n]}function yl(n){return{fieldPath:n.canonicalString()}}function vl(n){return Dn.fromServerFormat(n.fieldPath)}function U1(n){return n instanceof cn?(function(t){if(t.op==="=="){if(PS(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NAN"}};if(kS(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(PS(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NAN"}};if(kS(t.value))return{unaryFilter:{field:yl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yl(t.field),op:GP(t.op),value:t.value}}})(n):n instanceof fs?(function(t){const s=t.getFilters().map((a=>U1(a)));return s.length===1?s[0]:{compositeFilter:{op:KP(t.op),filters:s}}})(n):xe(54877,{filter:n})}function WP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function z1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function B1(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s,a,l=ke.min(),u=ke.min(),f=Mn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new ca(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ca(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.yt=e}}function QP(n){const e=FP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?e_(e,e.limit,"L"):e}/**
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
 */class $P{constructor(){this.bn=new XP}addToCollectionParentIndex(e,t){return this.bn.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(ga.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(ga.min())}updateCollectionGroup(e,t,s){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class XP{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new fn(bt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new fn(bt.comparator)).toArray()}}/**
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
 */const QS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},F1=41943040;class si{static withCacheSize(e){return new si(e,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.DEFAULT_COLLECTION_PERCENTILE=10,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,si.DEFAULT=new si(F1,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),si.DISABLED=new si(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $S="LruGarbageCollector",ZP=1048576;function XS([n,e],[t,s]){const a=Qe(n,t);return a===0?Qe(e,s):a}class JP{constructor(e){this.Pr=e,this.buffer=new fn(XS),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();XS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eL{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ye($S,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wl(t)?ye($S,"Ignoring IndexedDB error during garbage collection: ",t):await Kl(t)}await this.Ar(3e5)}))}}class tL{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ie.resolve(Nf.ce);const s=new JP(t);return this.Vr.forEachTarget(e,(a=>s.Ir(a.sequenceNumber))).next((()=>this.Vr.mr(e,(a=>s.Ir(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ye("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(QS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ye("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QS):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,a,l,u,f,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ye("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),a=this.params.maximumSequenceNumbersToCollect):a=S,u=Date.now(),this.nthSequenceNumber(e,a)))).next((S=>(s=S,f=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(g=Date.now(),gl()<=Ke.DEBUG&&ye("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${S} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:S}))))}}function nL(n,e){return new tL(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.changes=new wo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ie.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&vu(s.mutation,a,bi.empty(),xt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,$e()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=$e()){const a=so();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=du();return l.forEach(((f,p)=>{u=u.insert(f,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=so();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,$e())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,f)=>{t.set(u,f)}))}))}computeViews(e,t,s,a){let l=wr();const u=yu(),f=(function(){return yu()})();return t.forEach(((p,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof Ra)?l=l.insert(g.key,g):E!==void 0?(u.set(g.key,E.mutation.getFieldMask()),vu(E.mutation,g,E.mutation.getFieldMask(),xt.now())):u.set(g.key,bi.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,E)=>u.set(g,E))),t.forEach(((g,E)=>f.set(g,new sL(E,u.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=yu();let a=new hn(((u,f)=>u-f)),l=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const f of u)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||bi.empty();E=f.applyToLocalView(g,E),s.set(p,E);const S=(a.get(f.batchId)||$e()).add(p);a=a.insert(f.batchId,S)}))})).next((()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,E=p.value,S=T1();E.forEach((A=>{if(!l.has(A)){const V=I1(t.get(A),s.get(A));V!==null&&S.set(A,V),l=l.add(A)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,S))}return ie.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return aP(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):g1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ie.resolve(so());let f=Iu,p=l;return u.next((g=>ie.forEach(g,((E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(E)?ie.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{p=p.insert(E,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,$e()))).next((E=>({batchId:f,changes:E1(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next((s=>{let a=du();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=du();return this.indexManager.getCollectionParents(e,l).next((f=>ie.forEach(f,(p=>{const g=(function(S,A){return new Yl(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((E=>{E.forEach(((S,A)=>{u=u.insert(S,A)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((p,g)=>{const E=g.getKey();u.get(E)===null&&(u=u.insert(E,Vn.newInvalidDocument(E)))}));let f=du();return u.forEach(((p,g)=>{const E=l.get(p);E!==void 0&&vu(E.mutation,g,bi.empty(),xt.now()),Of(t,g)&&(f=f.insert(p,g))})),f}))}}/**
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
 */class aL{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return ie.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Ls(a.createTime)}})(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(a){return{name:a.name,query:QP(a.bundledQuery),readTime:Ls(a.readTime)}})(t)),ie.resolve()}}/**
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
 */class oL{constructor(){this.overlays=new hn(we.comparator),this.Lr=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const s=so();return ie.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ie.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Lr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),ie.resolve()}getOverlaysForCollection(e,t,s){const a=so(),l=t.length+1,u=new we(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ie.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new hn(((g,E)=>g-E));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=so(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const f=so(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>f.set(g,E))),!(f.size()>=a)););return ie.resolve(f)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.Lr.get(a.largestBatchId).delete(s.key);this.Lr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new AP(t,s));let l=this.Lr.get(t);l===void 0&&(l=$e(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class lL{constructor(){this.sessionToken=Mn.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.kr=new fn(En.qr),this.Kr=new fn(En.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new En(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new En(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new we(new bt([])),s=new En(t,e),a=new En(t,e+1),l=[];return this.Kr.forEachInRange([s,a],(u=>{this.Wr(u),l.push(u.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new we(new bt([])),s=new En(t,e),a=new En(t,e+1);let l=$e();return this.Kr.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new En(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class En{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return we.comparator(e.key,t.key)||Qe(e.Jr,t.Jr)}static Ur(e,t){return Qe(e.Jr,t.Jr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fn(En.qr)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new bP(l,t,s,a);this.mutationQueue.push(u);for(const f of a)this.Hr=this.Hr.add(new En(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ie.resolve(u)}lookupMutationBatch(e,t){return ie.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return ie.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?J_:this.Yn-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new En(t,0),a=new En(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,a],(u=>{const f=this.Zr(u.Jr);l.push(f)})),ie.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fn(Qe);return t.forEach((a=>{const l=new En(a,0),u=new En(a,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,u],(f=>{s=s.add(f.Jr)}))})),ie.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;we.isDocumentKey(l)||(l=l.child(""));const u=new En(new we(l),0);let f=new fn(Qe);return this.Hr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Jr)),!0)}),u),ie.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){ut(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return ie.forEach(t.mutations,(a=>{const l=new En(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new En(t,0),a=this.Hr.firstAfterOrEqual(s);return ie.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.ti=e,this.docs=(function(){return new hn(we.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ie.resolve(s?s.document.mutableCopy():Vn.newInvalidDocument(t))}getEntries(e,t){let s=wr();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Vn.newInvalidDocument(a))})),ie.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=wr();const u=t.path,f=new we(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Lk(Pk(E),s)<=0||(a.has(E.key)||Of(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ie.resolve(l)}getAllFromCollectionGroup(e,t,s,a){xe(9500)}ni(e,t){return ie.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new hL(this)}getSize(e){return ie.resolve(this.size)}}class hL extends iL{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Mr.addEntry(e,a)):this.Mr.removeEntry(s)})),ie.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.persistence=e,this.ri=new wo((t=>ny(t)),iy),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.ii=0,this.si=new cy,this.targetCount=0,this.oi=Ll._r()}forEachTarget(e,t){return this.ri.forEach(((s,a)=>t(a))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),ie.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ll(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.lr(t),ie.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ri.forEach(((u,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(u),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),ie.waitFor(l).next((()=>a))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return ie.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),ie.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),ie.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return ie.resolve(s)}containsKey(e,t){return ie.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,t){this._i={},this.overlays={},this.ai=new Nf(0),this.ui=!1,this.ui=!0,this.ci=new lL,this.referenceDelegate=e(this),this.li=new dL(this),this.indexManager=new $P,this.remoteDocumentCache=(function(a){return new uL(a)})((s=>this.referenceDelegate.hi(s))),this.serializer=new YP(t),this.Pi=new aL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new cL(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ye("MemoryPersistence","Starting transaction:",e);const a=new fL(this.ai.next());return this.referenceDelegate.Ti(),s(a).next((l=>this.referenceDelegate.Ei(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ii(e,t){return ie.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class fL extends jk{constructor(e){super(),this.currentSequenceNumber=e}}class uy{constructor(e){this.persistence=e,this.Ri=new cy,this.Ai=null}static Vi(e){return new uy(e)}get di(){if(this.Ai)return this.Ai;throw xe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),ie.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((a=>this.di.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.di,(s=>{const a=we.fromPath(s);return this.mi(e,a).next((l=>{l||t.removeEntry(a,ke.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return ie.or([()=>ie.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class of{constructor(e,t){this.persistence=e,this.fi=new wo((s=>Bk(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=nL(this,t)}static Vi(e,t){return new of(e,t)}Ti(){}Ei(e){return ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return ie.forEach(this.fi,((s,a)=>this.wr(e,s,a).next((l=>l?ie.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ni(e,(u=>this.wr(e,u,t).next((f=>{f||(s++,l.removeEntry(u,ke.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),ie.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ie.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),ie.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ld(e.data.value)),t}wr(e,t,s){return ie.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.fi.get(t);return ie.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=a}static Is(e,t){let s=$e(),a=$e();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new hy(e,t.fromCache,s,a)}}/**
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
 */class mL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class pL{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return uN()?8:Uk(Bn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.gs(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ps(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new mL;return this.ys(e,t,u).next((f=>{if(l.result=f,this.As)return this.ws(e,t,u,f.size)}))})).next((()=>l.result))}ws(e,t,s,a){return s.documentReadCount<this.Vs?(gl()<=Ke.DEBUG&&ye("QueryEngine","SDK will not create cache indexes for query:",_l(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ie.resolve()):(gl()<=Ke.DEBUG&&ye("QueryEngine","Query:",_l(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ds*a?(gl()<=Ke.DEBUG&&ye("QueryEngine","The SDK decides to create cache indexes for query:",_l(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ks(t))):ie.resolve())}gs(e,t){if(US(t))return ie.resolve(null);let s=ks(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=e_(t,null,"F"),s=ks(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=$e(...l);return this.fs.getDocuments(e,u).next((f=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ss(t,f);return this.bs(t,g,u,p.readTime)?this.gs(e,e_(t,null,"F")):this.Ds(e,g,t,p)}))))})))))}ps(e,t,s,a){return US(t)||a.isEqual(ke.min())?ie.resolve(null):this.fs.getDocuments(e,s).next((l=>{const u=this.Ss(t,l);return this.bs(t,u,s,a)?ie.resolve(null):(gl()<=Ke.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),_l(t)),this.Ds(e,u,t,kk(a,Iu)).next((f=>f)))}))}Ss(e,t){let s=new fn(y1(e));return t.forEach(((a,l)=>{Of(e,l)&&(s=s.add(l))})),s}bs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ys(e,t,s){return gl()<=Ke.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",_l(t)),this.fs.getDocumentsMatchingQuery(e,t,ga.min(),s)}Ds(e,t,s,a){return this.fs.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
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
 */const dy="LocalStore",gL=3e8;class _L{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.vs=new hn(Qe),this.Fs=new wo((l=>ny(l)),iy),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rL(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function yL(n,e,t,s){return new _L(n,e,t,s)}async function H1(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],f=[];let p=$e();for(const g of a){u.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ns:g,removedBatchIds:u,addedBatchIds:f})))}))}))}function vL(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,E){const S=g.batch,A=S.keys();let V=ie.resolve();return A.forEach((q=>{V=V.next((()=>E.getEntry(p,q))).next((Z=>{const Y=g.docVersions.get(q);ut(Y!==null,48541),Z.version.compareTo(Y)<0&&(S.applyToRemoteDocument(Z,g),Z.isValidDocument()&&(Z.setReadTime(g.commitVersion),E.addEntry(Z)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(p,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let p=$e();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function G1(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function EL(n,e){const t=Le(n),s=e.snapshotVersion;let a=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});a=t.vs;const f=[];e.targetChanges.forEach(((E,S)=>{const A=a.get(S);if(!A)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,S).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,S))));let V=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?V=V.withResumeToken(Mn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,s)),a=a.insert(S,V),(function(Z,Y,pe){return Z.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=gL?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(A,V,E)&&f.push(t.li.updateTargetData(l,V))}));let p=wr(),g=$e();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(TL(l,u,e.documentUpdates).next((E=>{p=E.Bs,g=E.Ls}))),!s.isEqual(ke.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((S=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return ie.waitFor(f).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.vs=a,l)))}function TL(n,e,t){let s=$e(),a=$e();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=wr();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(f,p)):ye(dy,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{Bs:u,Ls:a}}))}function SL(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=J_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function wL(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.li.getTargetData(s,e).next((l=>l?(a=l,ie.resolve(a)):t.li.allocateTargetId(s).next((u=>(a=new ca(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.vs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function r_(n,e,t){const s=Le(n),a=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Wl(u))throw u;ye(dy,`Failed to update sequence numbers for target ${e}: ${u}`)}s.vs=s.vs.remove(e),s.Fs.delete(a.target)}function ZS(n,e,t){const s=Le(n);let a=ke.min(),l=$e();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,g,E){const S=Le(p),A=S.Fs.get(E);return A!==void 0?ie.resolve(S.vs.get(A)):S.li.getTargetData(g,E)})(s,u,ks(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(u,f.targetId).next((p=>{l=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(u,e,t?a:ke.min(),t?l:$e()))).next((f=>(bL(s,cP(e),f),{documents:f,ks:l})))))}function bL(n,e,t){let s=n.Ms.get(e)||ke.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Ms.set(e,s)}class JS{constructor(){this.activeTargetIds=pP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AL{constructor(){this.vo=new JS,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new JS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CL{Mo(e){}shutdown(){}}/**
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
 */const ew="ConnectivityMonitor";class tw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ye(ew,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ye(ew,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ad=null;function a_(){return Ad===null?Ad=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ad++,"0x"+Ad.toString(16)}/**
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
 */const ug="RestConnection",RL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class IL{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.$o=this.databaseId.database===tf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const u=a_(),f=this.Qo(e,t.toUriEncodedString());ye(ug,`Sending RPC '${e}' ${u}:`,f,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,a,l);const{host:g}=new URL(f),E=To(g);return this.zo(e,f,p,s,E).then((S=>(ye(ug,`Received RPC '${e}' ${u}: `,S),S)),(S=>{throw po(ug,`RPC '${e}' ${u} failed with error: `,S,"url: ",f,"request:",s),S}))}jo(e,t,s,a,l,u){return this.Wo(e,t,s,a,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}Qo(e,t){const s=RL[e];let a=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(a=`${a}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),a}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="WebChannelConnection",tu=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(a){setTimeout((()=>{throw a}),0)}}))};class Cl extends IL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Cl.c_){const e=YA();tu(e,WA.STAT_EVENT,(t=>{t.stat===Kg.PROXY?ye(Pn,"STAT_EVENT: detected buffering proxy"):t.stat===Kg.NOPROXY&&ye(Pn,"STAT_EVENT: detected no buffering proxy")})),Cl.c_=!0}}zo(e,t,s,a,l){const u=a_();return new Promise(((f,p)=>{const g=new GA;g.setWithCredentials(!0),g.listenOnce(KA.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Pd.NO_ERROR:const S=g.getResponseJson();ye(Pn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(S)),f(S);break;case Pd.TIMEOUT:ye(Pn,`RPC '${e}' ${u} timed out`),p(new ge(te.DEADLINE_EXCEEDED,"Request time out"));break;case Pd.HTTP_ERROR:const A=g.getStatus();if(ye(Pn,`RPC '${e}' ${u} failed with status:`,A,"response text:",g.getResponseText()),A>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const q=V==null?void 0:V.error;if(q&&q.status&&q.message){const Z=(function(pe){const ue=pe.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(ue)>=0?ue:te.UNKNOWN})(q.status);p(new ge(Z,q.message))}else p(new ge(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(te.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{l_:e,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ye(Pn,`RPC '${e}' ${u} completed.`)}}));const E=JSON.stringify(a);ye(Pn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",E,s,15)}))}T_(e,t,s){const a=a_(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const g=l.join("");ye(Pn,`Creating RPC '${e}' stream ${a}: ${g}`,f);const E=u.createWebChannel(g,f);this.E_(E);let S=!1,A=!1;const V=new NL({Jo:q=>{A?ye(Pn,`Not sending because RPC '${e}' stream ${a} is closed:`,q):(S||(ye(Pn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),S=!0),ye(Pn,`RPC '${e}' stream ${a} sending:`,q),E.send(q))},Ho:()=>E.close()});return tu(E,hu.EventType.OPEN,(()=>{A||(ye(Pn,`RPC '${e}' stream ${a} transport opened.`),V.i_())})),tu(E,hu.EventType.CLOSE,(()=>{A||(A=!0,ye(Pn,`RPC '${e}' stream ${a} transport closed`),V.o_(),this.I_(E))})),tu(E,hu.EventType.ERROR,(q=>{A||(A=!0,po(Pn,`RPC '${e}' stream ${a} transport errored. Name:`,q.name,"Message:",q.message),V.o_(new ge(te.UNAVAILABLE,"The operation could not be completed")))})),tu(E,hu.EventType.MESSAGE,(q=>{var Z;if(!A){const Y=q.data[0];ut(!!Y,16349);const pe=Y,ue=(pe==null?void 0:pe.error)||((Z=pe[0])==null?void 0:Z.error);if(ue){ye(Pn,`RPC '${e}' stream ${a} received error:`,ue);const oe=ue.status;let Ee=(function(C){const R=ln[C];if(R!==void 0)return D1(R)})(oe),Oe=ue.message;oe==="NOT_FOUND"&&Oe.includes("database")&&Oe.includes("does not exist")&&Oe.includes(this.databaseId.database)&&po(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ee===void 0&&(Ee=te.INTERNAL,Oe="Unknown error status: "+oe+" with message "+ue.message),A=!0,V.o_(new ge(Ee,Oe)),E.close()}else ye(Pn,`RPC '${e}' stream ${a} received:`,Y),V.__(Y)}})),Cl.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return QA()}}/**
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
 */function xL(n){return new Cl(n)}function hg(){return typeof document<"u"?document:null}/**
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
 */function Vf(n){return new kP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cl.c_=!1;class K1{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=a,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ye("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="PersistentStream";class W1{constructor(e,t,s,a,l,u,f,p){this.Ci=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new K1(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?(Tr(t.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ge(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ye(nw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ye(nw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DL extends W1{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=VP(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ke.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?ke.min():u.readTime?Ls(u.readTime):ke.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=s_(this.serializer),t.addTarget=(function(l,u){let f;const p=u.target;if(f=Zg(p)?{documents:zP(l,p)}:{query:BP(l,p).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=k1(l,u.resumeToken);const g=t_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(ke.min())>0){f.readTime=af(l,u.snapshotVersion.toTimestamp());const g=t_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=qP(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=s_(this.serializer),t.removeTarget=e,this.q_(t)}}class ML extends W1{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ut(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ut(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ut(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=UP(e.writeResults,e.commitTime),s=Ls(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=s_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>jP(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{}class kL extends OL{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ge(te.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Wo(e,n_(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(te.UNKNOWN,l.toString())}))}jo(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.jo(e,n_(t,s),a,u,f,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(te.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function PL(n,e,t,s){return new kL(n,e,t,s)}class LL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tr(t),this.aa=!1):ye("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="RemoteStore";class VL{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((u=>{s.enqueueAndForget((async()=>{bo(this)&&(ye(go,"Restarting streams for network reachability change."),await(async function(p){const g=Le(p);g.Ia.add(4),await Ku(g),g.Va.set("Unknown"),g.Ia.delete(4),await jf(g)})(this))}))})),this.Va=new LL(s,a)}}async function jf(n){if(bo(n))for(const e of n.Ra)await e(!0)}async function Ku(n){for(const e of n.Ra)await e(!1)}function Y1(n,e){const t=Le(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),gy(t)?py(t):Ql(t).O_()&&my(t,e))}function fy(n,e){const t=Le(n),s=Ql(t);t.Ea.delete(e),s.O_()&&Q1(t,e),t.Ea.size===0&&(s.O_()?s.L_():bo(t)&&t.Va.set("Unknown"))}function my(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ql(n).Z_(e)}function Q1(n,e){n.da.$e(e),Ql(n).X_(e)}function py(n){n.da=new xP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ql(n).start(),n.Va.ua()}function gy(n){return bo(n)&&!Ql(n).x_()&&n.Ea.size>0}function bo(n){return Le(n).Ia.size===0}function $1(n){n.da=void 0}async function jL(n){n.Va.set("Online")}async function UL(n){n.Ea.forEach(((e,t)=>{my(n,e)}))}async function zL(n,e){$1(n),gy(n)?(n.Va.ha(e),py(n)):n.Va.set("Unknown")}async function BL(n,e,t){if(n.Va.set("Online"),e instanceof O1&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const f of l.targetIds)a.Ea.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.Ea.delete(f),a.da.removeTarget(f))})(n,e)}catch(s){ye(go,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await lf(n,s)}else if(e instanceof Ud?n.da.Xe(e):e instanceof M1?n.da.st(e):n.da.tt(e),!t.isEqual(ke.min()))try{const s=await G1(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const f=l.da.Tt(u);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ea.get(g);E&&l.Ea.set(g,E.withResumeToken(p.resumeToken,u))}})),f.targetMismatches.forEach(((p,g)=>{const E=l.Ea.get(p);if(!E)return;l.Ea.set(p,E.withResumeToken(Mn.EMPTY_BYTE_STRING,E.snapshotVersion)),Q1(l,p);const S=new ca(E.target,p,g,E.sequenceNumber);my(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){ye(go,"Failed to raise snapshot:",s),await lf(n,s)}}async function lf(n,e,t){if(!Wl(e))throw e;n.Ia.add(1),await Ku(n),n.Va.set("Offline"),t||(t=()=>G1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ye(go,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await jf(n)}))}function X1(n,e){return e().catch((t=>lf(n,t,e)))}async function Uf(n){const e=Le(n),t=Ea(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:J_;for(;FL(e);)try{const a=await SL(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,qL(e,a)}catch(a){await lf(e,a)}Z1(e)&&J1(e)}function FL(n){return bo(n)&&n.Ta.length<10}function qL(n,e){n.Ta.push(e);const t=Ea(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Z1(n){return bo(n)&&!Ea(n).x_()&&n.Ta.length>0}function J1(n){Ea(n).start()}async function HL(n){Ea(n).ra()}async function GL(n){const e=Ea(n);for(const t of n.Ta)e.ea(t.mutations)}async function KL(n,e,t){const s=n.Ta.shift(),a=ay.from(s,e,t);await X1(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Uf(n)}async function WL(n,e){e&&Ea(n).Y_&&await(async function(s,a){if((function(u){return RP(u)&&u!==te.ABORTED})(a.code)){const l=s.Ta.shift();Ea(s).B_(),await X1(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Uf(s)}})(n,e),Z1(n)&&J1(n)}async function iw(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),ye(go,"RemoteStore received new credentials");const s=bo(t);t.Ia.add(3),await Ku(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await jf(t)}async function YL(n,e){const t=Le(n);e?(t.Ia.delete(2),await jf(t)):e||(t.Ia.add(2),await Ku(t),t.Va.set("Unknown"))}function Ql(n){return n.ma||(n.ma=(function(t,s,a){const l=Le(t);return l.sa(),new DL(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:jL.bind(null,n),Yo:UL.bind(null,n),t_:zL.bind(null,n),H_:BL.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),gy(n)?py(n):n.Va.set("Unknown")):(await n.ma.stop(),$1(n))}))),n.ma}function Ea(n){return n.fa||(n.fa=(function(t,s,a){const l=Le(t);return l.sa(),new ML(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:HL.bind(null,n),t_:WL.bind(null,n),ta:GL.bind(null,n),na:KL.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Uf(n)):(await n.fa.stop(),n.Ta.length>0&&(ye(go,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,f=new _y(e,t,u,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yy(n,e){if(Tr("AsyncQueue",`${e}: ${n}`),Wl(n))return new ge(te.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{static emptySet(e){return new Rl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||we.comparator(t.key,s.key):(t,s)=>we.comparator(t.key,s.key),this.keyedMap=du(),this.sortedSet=new hn(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sw{constructor(){this.ga=new hn(we.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):xe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Vl{constructor(e,t,s,a,l,u,f,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((f=>{u.push({type:0,doc:f})})),new Vl(e,t,Rl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class $L{constructor(){this.queries=rw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Le(t),l=a.queries;a.queries=rw(),l.forEach(((u,f)=>{for(const p of f.Sa)p.onError(s)}))})(this,new ge(te.ABORTED,"Firestore shutting down"))}}function rw(){return new wo((n=>_1(n)),Mf)}async function eC(n,e){const t=Le(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new QL,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=yy(u,`Initialization of query '${_l(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&vy(t)}async function tC(n,e){const t=Le(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function XL(n,e){const t=Le(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const f of u.Sa)f.Fa(a)&&(s=!0);u.wa=a}}s&&vy(t)}function ZL(n,e,t){const s=Le(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function vy(n){n.Ca.forEach((e=>{e.next()}))}var o_,aw;(aw=o_||(o_={})).Ma="default",aw.Cache="cache";class nC{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Vl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==o_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.key=e}}class sC{constructor(e){this.key=e}}class JL{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$e(),this.mutatedKeys=$e(),this.eu=y1(e),this.tu=new Rl(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new sw,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,S)=>{const A=a.get(E),V=Of(this.query,S)?S:null,q=!!A&&this.mutatedKeys.has(A.key),Z=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let Y=!1;A&&V?A.data.isEqual(V.data)?q!==Z&&(s.track({type:3,doc:V}),Y=!0):this.su(A,V)||(s.track({type:2,doc:V}),Y=!0,(p&&this.eu(V,p)>0||g&&this.eu(V,g)<0)&&(f=!0)):!A&&V?(s.track({type:0,doc:V}),Y=!0):A&&!V&&(s.track({type:1,doc:A}),Y=!0,(p||g)&&(f=!0)),Y&&(V?(u=u.add(V),l=Z?l.add(E):l.delete(E)):(u=u.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:u,iu:s,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((E,S)=>(function(V,q){const Z=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{Vt:Y})}};return Z(V)-Z(q)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),a=a??!1;const f=t&&!a?this._u():[],p=this.Ya.size===0&&this.current&&!a?1:0,g=p!==this.Xa;return this.Xa=p,u.length!==0||g?{snapshot:new Vl(this.query,e.tu,l,u,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sw,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=$e(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new sC(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new iC(s))})),t}cu(e){this.Za=e.ks,this.Ya=$e();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ey="SyncEngine";class e4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class t4{constructor(e){this.key=e,this.hu=!1}}class n4{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new wo((f=>_1(f)),Mf),this.Eu=new Map,this.Iu=new Set,this.Ru=new hn(we.comparator),this.Au=new Map,this.Vu=new cy,this.du={},this.mu=new Map,this.fu=Ll.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function i4(n,e,t=!0){const s=uC(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await rC(s,e,t,!0),a}async function s4(n,e){const t=uC(n);await rC(t,e,!0,!1)}async function rC(n,e,t,s){const a=await wL(n.localStore,ks(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await r4(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Y1(n.remoteStore,a),f}async function r4(n,e,t,s,a){n.pu=(S,A,V)=>(async function(Z,Y,pe,ue){let oe=Y.view.ru(pe);oe.bs&&(oe=await ZS(Z.localStore,Y.query,!1).then((({documents:C})=>Y.view.ru(C,oe))));const Ee=ue&&ue.targetChanges.get(Y.targetId),Oe=ue&&ue.targetMismatches.get(Y.targetId)!=null,fe=Y.view.applyChanges(oe,Z.isPrimaryClient,Ee,Oe);return lw(Z,Y.targetId,fe.au),fe.snapshot})(n,S,A,V);const l=await ZS(n.localStore,e,!0),u=new JL(e,l.ks),f=u.ru(l.documents),p=Gu.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=u.applyChanges(f,n.isPrimaryClient,p);lw(n,t,g.au);const E=new e4(e,t,u);return n.Tu.set(e,E),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),g.snapshot}async function a4(n,e,t){const s=Le(n),a=s.Tu.get(e),l=s.Eu.get(a.targetId);if(l.length>1)return s.Eu.set(a.targetId,l.filter((u=>!Mf(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await r_(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&fy(s.remoteStore,a.targetId),l_(s,a.targetId)})).catch(Kl)):(l_(s,a.targetId),await r_(s.localStore,a.targetId,!0))}async function o4(n,e){const t=Le(n),s=t.Tu.get(e),a=t.Eu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),fy(t.remoteStore,s.targetId))}async function l4(n,e,t){const s=p4(n);try{const a=await(function(u,f){const p=Le(u),g=xt.now(),E=f.reduce(((V,q)=>V.add(q.key)),$e());let S,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let q=wr(),Z=$e();return p.xs.getEntries(V,E).next((Y=>{q=Y,q.forEach(((pe,ue)=>{ue.isValidDocument()||(Z=Z.add(pe))}))})).next((()=>p.localDocuments.getOverlayedDocuments(V,q))).next((Y=>{S=Y;const pe=[];for(const ue of f){const oe=SP(ue,S.get(ue.key).overlayedDocument);oe!=null&&pe.push(new Ra(ue.key,oe,c1(oe.value.mapValue),Ps.exists(!0)))}return p.mutationQueue.addMutationBatch(V,g,pe,f)})).next((Y=>{A=Y;const pe=Y.applyToLocalDocumentSet(S,Z);return p.documentOverlayCache.saveOverlays(V,Y.batchId,pe)}))})).then((()=>({batchId:A.batchId,changes:E1(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,f,p){let g=u.du[u.currentUser.toKey()];g||(g=new hn(Qe)),g=g.insert(f,p),u.du[u.currentUser.toKey()]=g})(s,a.batchId,t),await Wu(s,a.changes),await Uf(s.remoteStore)}catch(a){const l=yy(a,"Failed to persist write");t.reject(l)}}async function aC(n,e){const t=Le(n);try{const s=await EL(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(ut(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?ut(u.hu,14607):a.removedDocuments.size>0&&(ut(u.hu,42227),u.hu=!1))})),await Wu(t,s,e)}catch(s){await Kl(s)}}function ow(n,e,t){const s=Le(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const f=u.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(u,f){const p=Le(u);p.onlineState=f;let g=!1;p.queries.forEach(((E,S)=>{for(const A of S.Sa)A.va(f)&&(g=!0)})),g&&vy(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function c4(n,e,t){const s=Le(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new hn(we.comparator);u=u.insert(l,Vn.newNoDocument(l,ke.min()));const f=$e().add(l),p=new Lf(ke.min(),new Map,new hn(Qe),u,f);await aC(s,p),s.Ru=s.Ru.remove(l),s.Au.delete(e),Ty(s)}else await r_(s.localStore,e,!1).then((()=>l_(s,e,t))).catch(Kl)}async function u4(n,e){const t=Le(n),s=e.batch.batchId;try{const a=await vL(t.localStore,e);lC(t,s,null),oC(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Wu(t,a)}catch(a){await Kl(a)}}async function h4(n,e,t){const s=Le(n);try{const a=await(function(u,f){const p=Le(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,f).next((S=>(ut(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(g,S)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);lC(s,e,t),oC(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Wu(s,a)}catch(a){await Kl(a)}}function oC(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function lC(n,e,t){const s=Le(n);let a=s.du[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.du[s.currentUser.toKey()]=a}}function l_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||cC(n,s)}))}function cC(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(fy(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ty(n))}function lw(n,e,t){for(const s of t)s instanceof iC?(n.Vu.addReference(s.key,e),d4(n,s)):s instanceof sC?(ye(Ey,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||cC(n,s.key)):xe(19791,{wu:s})}function d4(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(ye(Ey,"New document in limbo: "+t),n.Iu.add(s),Ty(n))}function Ty(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new we(bt.fromString(e)),s=n.fu.next();n.Au.set(s,new t4(t)),n.Ru=n.Ru.insert(t,s),Y1(n.remoteStore,new ca(ks(sy(t.path)),s,"TargetPurposeLimboResolution",Nf.ce))}}async function Wu(n,e,t){const s=Le(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,p)=>{u.push(s.pu(p,e,t).then((g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(g){a.push(g);const S=hy.Is(p.targetId,g);l.push(S)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(p,g){const E=Le(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>ie.forEach(g,(A=>ie.forEach(A.Ts,(V=>E.persistence.referenceDelegate.addReference(S,A.targetId,V))).next((()=>ie.forEach(A.Es,(V=>E.persistence.referenceDelegate.removeReference(S,A.targetId,V)))))))))}catch(S){if(!Wl(S))throw S;ye(dy,"Failed to update sequence numbers: "+S)}for(const S of g){const A=S.targetId;if(!S.fromCache){const V=E.vs.get(A),q=V.snapshotVersion,Z=V.withLastLimboFreeSnapshotVersion(q);E.vs=E.vs.insert(A,Z)}}})(s.localStore,l))}async function f4(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){ye(Ey,"User change. New user:",e.toKey());const s=await H1(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new ge(te.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wu(t,s.Ns)}}function m4(n,e){const t=Le(n),s=t.Au.get(e);if(s&&s.hu)return $e().add(s.key);{let a=$e();const l=t.Eu.get(e);if(!l)return a;for(const u of l){const f=t.Tu.get(u);a=a.unionWith(f.view.nu)}return a}}function uC(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=aC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c4.bind(null,e),e.Pu.H_=XL.bind(null,e.eventManager),e.Pu.yu=ZL.bind(null,e.eventManager),e}function p4(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h4.bind(null,e),e}class cf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yL(this.persistence,new pL,e.initialUser,this.serializer)}Cu(e){return new q1(uy.Vi,this.serializer)}Du(e){return new AL}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cf.provider={build:()=>new cf};class g4 extends cf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ut(this.persistence.referenceDelegate instanceof of,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new eL(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?si.withCacheSize(this.cacheSizeBytes):si.DEFAULT;return new q1((s=>of.Vi(s,t)),this.serializer)}}class c_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ow(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=f4.bind(null,this.syncEngine),await YL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $L})()}createDatastore(e){const t=Vf(e.databaseInfo.databaseId),s=xL(e.databaseInfo);return PL(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,f){return new VL(s,a,l,u,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>ow(this.syncEngine,t,0)),(function(){return tw.v()?new tw:new CL})())}createSyncEngine(e,t){return(function(a,l,u,f,p,g,E){const S=new n4(a,l,u,f,p,g);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Le(a);ye(go,"RemoteStore shutting down."),l.Ia.add(5),await Ku(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}c_.provider={build:()=>new c_};/**
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
 */class hC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="FirestoreClient";class _4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=a,this.user=Ln.UNAUTHENTICATED,this.clientId=Z_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{ye(Ta,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(ye(Ta,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function dg(n,e){n.asyncQueue.verifyOperationInProgress(),ye(Ta,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await H1(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function cw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await y4(n);ye(Ta,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>iw(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>iw(e.remoteStore,a))),n._onlineComponents=e}async function y4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ye(Ta,"Using user provided OfflineComponentProvider");try{await dg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===te.FAILED_PRECONDITION||a.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;po("Error using user provided cache. Falling back to memory cache: "+t),await dg(n,new cf)}}else ye(Ta,"Using default OfflineComponentProvider"),await dg(n,new g4(void 0));return n._offlineComponents}async function dC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ye(Ta,"Using user provided OnlineComponentProvider"),await cw(n,n._uninitializedComponentsProvider._online)):(ye(Ta,"Using default OnlineComponentProvider"),await cw(n,new c_))),n._onlineComponents}function v4(n){return dC(n).then((e=>e.syncEngine))}async function fC(n){const e=await dC(n),t=e.eventManager;return t.onListen=i4.bind(null,e.syncEngine),t.onUnlisten=a4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=s4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=o4.bind(null,e.syncEngine),t}function E4(n,e,t={}){const s=new _r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new hC({next:A=>{E.Nu(),u.enqueueAndForget((()=>tC(l,S)));const V=A.docs.has(f);!V&&A.fromCache?g.reject(new ge(te.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&A.fromCache&&p&&p.source==="server"?g.reject(new ge(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new nC(sy(f.path),E,{includeMetadataChanges:!0,qa:!0});return eC(l,S)})(await fC(n),n.asyncQueue,e,t,s))),s.promise}function T4(n,e,t={}){const s=new _r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new hC({next:A=>{E.Nu(),u.enqueueAndForget((()=>tC(l,S))),A.fromCache&&p.source==="server"?g.reject(new ge(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new nC(f,E,{includeMetadataChanges:!0,qa:!0});return eC(l,S)})(await fC(n),n.asyncQueue,e,t,s))),s.promise}function S4(n,e){const t=new _r;return n.asyncQueue.enqueueAndForget((async()=>l4(await v4(n),e,t))),t.promise}/**
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
 */function mC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const w4="ComponentProvider",uw=new Map;function b4(n,e,t,s,a){return new Hk(n,e,t,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,mC(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator,s)}/**
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
 */const pC="firestore.googleapis.com",hw=!0;class dw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pC,this.ssl=hw}else this.host=e.host,this.ssl=e.ssl??hw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=F1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZP)throw new ge(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ok("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mC(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ge(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new wk;switch(s.type){case"firstParty":return new Rk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=uw.get(t);s&&(ye(w4,"Removing Datastore"),uw.delete(t),s.terminate())})(this),Promise.resolve()}}function A4(n,e,t,s={}){var g;n=Sr(n,zf);const a=To(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;a&&O_(`https://${f}`),l.host!==pC&&l.host!==f&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:s};if(!js(p,u)&&(n._setSettings(p),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Ln.MOCK_USER;else{E=Ob(s.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ge(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ln(A)}n._authCredentials=new bk(new XA(E,S))}}/**
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
 */class Ao{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class $t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ma(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(qu(t,$t._jsonSchema))return new $t(e,s||null,new we(bt.fromString(t.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:un("string",$t._jsonSchemaVersion),referencePath:un("string")};class ma extends Ao{constructor(e,t,s){super(e,t,sy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new we(e))}withConverter(e){return new ma(this.firestore,e,this._path)}}function Sy(n,e,...t){if(n=At(n),ZA("collection","path",e),n instanceof zf){const s=bt.fromString(e,...t);return AS(s),new ma(n,null,s)}{if(!(n instanceof $t||n instanceof ma))throw new ge(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(bt.fromString(e,...t));return AS(s),new ma(n.firestore,null,s)}}function Ia(n,e,...t){if(n=At(n),arguments.length===1&&(e=Z_.newId()),ZA("doc","path",e),n instanceof zf){const s=bt.fromString(e,...t);return bS(s),new $t(n,null,new we(s))}{if(!(n instanceof $t||n instanceof ma))throw new ge(te.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(bt.fromString(e,...t));return bS(s),new $t(n.firestore,n instanceof ma?n.converter:null,new we(s))}}/**
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
 */const fw="AsyncQueue";class mw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new K1(this,"async_queue_retry"),this._c=()=>{const s=hg();s&&ye(fw,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=hg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=hg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Wl(e))throw e;ye(fw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Tr("INTERNAL UNHANDLED ERROR: ",pw(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=_y.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&xe(47125,{Pc:pw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function pw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Yu extends zf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new mw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mw(e),this._firestoreClient=void 0,await e}}}function C4(n,e){const t=typeof n=="object"?n:ju(),s=typeof n=="string"?n:tf,a=wa(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=xb("firestore");l&&A4(a,...l)}return a}function wy(n){if(n._terminated)throw new ge(te.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||R4(n),n._firestoreClient}function R4(n){var s,a,l,u;const e=n._freezeSettings(),t=b4(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(a=n._app)==null?void 0:a.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new _4(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(n._componentsProvider))}/**
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
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Mn.fromBase64String(e))}catch(t){throw new ge(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gi(Mn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qu(e,Gi._jsonSchema))return Gi.fromBase64String(e.bytes)}}Gi._jsonSchemaVersion="firestore/bytes/1.0",Gi._jsonSchema={type:un("string",Gi._jsonSchemaVersion),bytes:un("string")};/**
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
 */class by{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vs._jsonSchemaVersion}}static fromJSON(e){if(qu(e,Vs._jsonSchema))return new Vs(e.latitude,e.longitude)}}Vs._jsonSchemaVersion="firestore/geoPoint/1.0",Vs._jsonSchema={type:un("string",Vs._jsonSchemaVersion),latitude:un("number"),longitude:un("number")};/**
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
 */class us{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:us._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qu(e,us._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new us(e.vectorValues);throw new ge(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}us._jsonSchemaVersion="firestore/vectorValue/1.0",us._jsonSchema={type:un("string",us._jsonSchemaVersion),vectorValues:un("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=/^__.*__$/;class N4{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ra(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hu(e,this.data,t,this.fieldTransforms)}}class gC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ra(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _C(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe(40011,{dataSource:n})}}class Bf{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Bf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return uf(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(_C(this.dataSource)&&I4.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class x4{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Vf(e)}A(e,t,s,a=!1){return new Bf({dataSource:e,methodName:t,targetDoc:s,path:Dn.emptyPath(),arrayElement:!1,hasConverter:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ay(n){const e=n._freezeSettings(),t=Vf(n._databaseId);return new x4(n._databaseId,!!e.ignoreUndefinedProperties,t)}function D4(n,e,t,s,a,l={}){const u=n.A(l.merge||l.mergeFields?2:0,e,t,a);Iy("Data must be an object, but it was:",u,s);const f=yC(s,u);let p,g;if(l.merge)p=new bi(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const E=[];for(const S of l.mergeFields){const A=jl(e,S,t);if(!u.contains(A))throw new ge(te.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);TC(E,A)||E.push(A)}p=new bi(E),g=u.fieldTransforms.filter((S=>p.covers(S.field)))}else p=null,g=u.fieldTransforms;return new N4(new ai(f),p,g)}class Ff extends Qu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ff}}function M4(n,e,t){return new Bf({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cy extends Qu{_toFieldTransform(e){return new R1(e.path,new Ou)}isEqual(e){return e instanceof Cy}}class Ry extends Qu{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=M4(this,e,!0),s=this.Sc.map((l=>$l(l,t))),a=new Pl(s);return new R1(e.path,a)}isEqual(e){return e instanceof Ry&&js(this.Sc,e.Sc)}}function O4(n,e,t,s){const a=n.A(1,e,t);Iy("Data must be an object, but it was:",a,s);const l=[],u=ai.empty();Ca(s,((p,g)=>{const E=EC(e,p,t);g=At(g);const S=a.fc(E);if(g instanceof Ff)l.push(E);else{const A=$l(g,S);A!=null&&(l.push(E),u.set(E,A))}}));const f=new bi(l);return new gC(u,f,a.fieldTransforms)}function k4(n,e,t,s,a,l){const u=n.A(1,e,t),f=[jl(e,s,t)],p=[a];if(l.length%2!=0)throw new ge(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(jl(e,l[A])),p.push(l[A+1]);const g=[],E=ai.empty();for(let A=f.length-1;A>=0;--A)if(!TC(g,f[A])){const V=f[A];let q=p[A];q=At(q);const Z=u.fc(V);if(q instanceof Ff)g.push(V);else{const Y=$l(q,Z);Y!=null&&(g.push(V),E.set(V,Y))}}const S=new bi(g);return new gC(E,S,u.fieldTransforms)}function P4(n,e,t,s=!1){return $l(t,n.A(s?4:3,e))}function $l(n,e){if(vC(n=At(n)))return Iy("Unsupported field value:",e,n),yC(n,e);if(n instanceof Qu)return(function(s,a){if(!_C(a.dataSource))throw a.yc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const f of s){let p=$l(f,a.gc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return gP(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=xt.fromDate(s);return{timestampValue:af(a.serializer,l)}}if(s instanceof xt){const l=new xt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:af(a.serializer,l)}}if(s instanceof Vs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Gi)return{bytesValue:k1(a.serializer,s._byteString)};if(s instanceof $t){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.yc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ly(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof us)return(function(u,f){const p=u instanceof us?u.toArray():u;return{mapValue:{fields:{[o1]:{stringValue:l1},[nf]:{arrayValue:{values:p.map((E=>{if(typeof E!="number")throw f.yc("VectorValues must only contain numeric values.");return ry(f.serializer,E)}))}}}}}})(s,a);if(B1(s))return s._toProto(a.serializer);throw a.yc(`Unsupported field value: ${If(s)}`)})(n,e)}function yC(n,e){const t={};return t1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ca(n,((s,a)=>{const l=$l(a,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function vC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof Vs||n instanceof Gi||n instanceof $t||n instanceof Qu||n instanceof us||B1(n))}function Iy(n,e,t){if(!vC(t)||!JA(t)){const s=If(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function jl(n,e,t){if((e=At(e))instanceof by)return e._internalPath;if(typeof e=="string")return EC(n,e);throw uf("Field path arguments must be of type string or ",n,!1,void 0,t)}const L4=new RegExp("[~\\*/\\[\\]]");function EC(n,e,t){if(e.search(L4)>=0)throw uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new by(...e.split("."))._internalPath}catch{throw uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function uf(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${s}`),u&&(p+=` in document ${a}`),p+=")"),new ge(te.INVALID_ARGUMENT,f+n+p)}function TC(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class V4{convertValue(e,t="none"){switch(va(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ya(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ca(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,a,l;const t=(l=(a=(s=e.fields)==null?void 0:s[nf].arrayValue)==null?void 0:a.values)==null?void 0:l.map((u=>Qt(u.doubleValue)));return new us(t)}convertGeoPoint(e){return new Vs(Qt(e.latitude),Qt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Df(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Nu(e));default:return null}}convertTimestamp(e){const t=_a(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=bt.fromString(e);ut(z1(s),9688,{name:e});const a=new xu(s.get(1),s.get(3)),l=new we(s.popFirst(5));return a.isEqual(t)||Tr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class SC extends V4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,t)}}function zs(){return new Cy("serverTimestamp")}function j4(...n){return new Ry("arrayUnion",n)}const gw="@firebase/firestore",_w="4.13.0";/**
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
 */class wC{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class U4 extends wC{data(){return super.data()}}/**
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
 */function z4(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ny{}class bC extends Ny{}function AC(n,e,...t){let s=[];e instanceof Ny&&s.push(e),s=s.concat(t),(function(l){const u=l.filter((p=>p instanceof Dy)).length,f=l.filter((p=>p instanceof xy)).length;if(u>1||u>0&&f>0)throw new ge(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class xy extends bC{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new xy(e,t,s)}_apply(e){const t=this._parse(e);return RC(e._query,t),new Ao(e.firestore,e.converter,Jg(e._query,t))}_parse(e){const t=Ay(e.firestore);return(function(l,u,f,p,g,E,S){let A;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ge(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){vw(S,E);const q=[];for(const Z of S)q.push(yw(p,l,Z));A={arrayValue:{values:q}}}else A=yw(p,l,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||vw(S,E),A=P4(f,u,S,E==="in"||E==="not-in");return cn.create(g,E,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Dy extends Ny{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:fs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let u=a;const f=l.getFlattenedFilters();for(const p of f)RC(u,p),u=Jg(u,p)})(e._query,t),new Ao(e.firestore,e.converter,Jg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class My extends bC{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new My(e,t)}_apply(e){const t=(function(a,l,u){if(a.startAt!==null)throw new ge(te.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ge(te.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mu(l,u)})(e._query,this._field,this._direction);return new Ao(e.firestore,e.converter,lP(e._query,t))}}function CC(n,e="asc"){const t=e,s=jl("orderBy",n);return My._create(s,t)}function yw(n,e,t){if(typeof(t=At(t))=="string"){if(t==="")throw new ge(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!g1(e)&&t.indexOf("/")!==-1)throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(bt.fromString(t));if(!we.isDocumentKey(s))throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return OS(n,new we(s))}if(t instanceof $t)return OS(n,t._key);throw new ge(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${If(t)}.`)}function vw(n,e){if(!Array.isArray(n)||n.length===0)throw new ge(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RC(n,e){const t=(function(a,l){for(const u of a)for(const f of u.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ge(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function B4(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class mu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oo extends wC{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=oo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}oo._jsonSchemaVersion="firestore/documentSnapshot/1.0",oo._jsonSchema={type:un("string",oo._jsonSchemaVersion),bundleSource:un("string","DocumentSnapshot"),bundleName:un("string"),bundle:un("string")};class zd extends oo{data(e={}){return super.data(e)}}class Il{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new mu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new zd(this._firestore,this._userDataWriter,s.key,s,new mu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((f=>{const p=new zd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new mu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new zd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new mu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),E=u.indexOf(f.doc.key)),{type:F4(f.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Il._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Z_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function F4(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:n})}}/**
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
 */Il._jsonSchemaVersion="firestore/querySnapshot/1.0",Il._jsonSchema={type:un("string",Il._jsonSchemaVersion),bundleSource:un("string","QuerySnapshot"),bundleName:un("string"),bundle:un("string")};/**
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
 */function Xl(n){n=Sr(n,$t);const e=Sr(n.firestore,Yu),t=wy(e);return E4(t,n._key).then((s=>q4(e,n,s)))}function Oy(n){n=Sr(n,Ao);const e=Sr(n.firestore,Yu),t=wy(e),s=new SC(e);return z4(n._query),T4(t,n._query).then((a=>new Il(e,s,n,a)))}function qf(n,e,t){n=Sr(n,$t);const s=Sr(n.firestore,Yu),a=B4(n.converter,e,t),l=Ay(s);return IC(s,[D4(l,"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ps.none())])}function ky(n,e,t,...s){n=Sr(n,$t);const a=Sr(n.firestore,Yu),l=Ay(a);let u;return u=typeof(e=At(e))=="string"||e instanceof by?k4(l,"updateDoc",n._key,e,t,s):O4(l,"updateDoc",n._key,e),IC(a,[u.toMutation(n._key,Ps.exists(!0))])}function IC(n,e){const t=wy(n);return S4(t,e)}function q4(n,e,t){const s=t.docs.get(e._key),a=new SC(n);return new oo(n,a,e._key,s,new mu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Sk(So),ds(new Wi("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),f=new Yu(new Ak(s.getProvider("auth-internal")),new Ik(u,s.getProvider("app-check-internal")),Gk(u,a),u);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),li(gw,_w,e),li(gw,_w,"esm2020")})();var Ew={};const Tw="@firebase/database",Sw="1.1.2";/**
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
 */let NC="";function H4(n){NC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G4(e)}}catch{}return new K4},ro=xC("localStorage"),W4=xC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Vu("@firebase/database"),Y4=(function(){let n=1;return function(){return n++}})(),DC=function(n){const e=TN(n),t=new gN;t.update(e);const s=t.digest();return R_.encodeByteArray(s)},$u=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$u.apply(null,s):typeof s=="object"?e+=xn(s):e+=s,e+=" "}return e};let Eu=null,ww=!0;const Q4=function(n,e){me(!0,"Can't turn on custom loggers persistently."),Nl.logLevel=Ke.VERBOSE,Eu=Nl.log.bind(Nl)},jn=function(...n){if(ww===!0&&(ww=!1,Eu===null&&W4.get("logging_enabled")===!0&&Q4()),Eu){const e=$u.apply(null,n);Eu(e)}},Xu=function(n){return function(...e){jn(n,...e)}},u_=function(...n){const e="FIREBASE INTERNAL ERROR: "+$u(...n);Nl.error(e)},br=function(...n){const e=`FIREBASE FATAL ERROR: ${$u(...n)}`;throw Nl.error(e),new Error(e)},Ci=function(...n){const e="FIREBASE WARNING: "+$u(...n);Nl.warn(e)},$4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ci("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},MC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},X4=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ul="[MIN_NAME]",_o="[MAX_NAME]",Zl=function(n,e){if(n===e)return 0;if(n===Ul||e===_o)return-1;if(e===Ul||n===_o)return 1;{const t=bw(n),s=bw(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Z4=function(n,e){return n===e?0:n<e?-1:1},nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+xn(e))},Py=function(n){if(typeof n!="object"||n===null)return xn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=xn(e[s]),t+=":",t+=Py(n[e[s]]);return t+="}",t},OC=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Qi(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const kC=function(n){me(!MC(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,f,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let S="";for(p=0;p<64;p+=8){let A=parseInt(E.substr(p,8),2).toString(16);A.length===1&&(A="0"+A),S=S+A}return S.toLowerCase()},J4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tV=new RegExp("^-?(0*)\\d{1,10}$"),nV=-2147483648,iV=2147483647,bw=function(n){if(tV.test(n)){const e=Number(n);if(e>=nV&&e<=iV)return e}return null},Zu=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ci("Exception was thrown by user callback.",t),e},Math.floor(0))}},sV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class rV{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ri(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ci(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(jn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ci(e)}}class Bd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="5",PC="v",LC="s",VC="r",jC="f",UC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zC="ls",BC="p",h_="ac",FC="websocket",qC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,t,s,a,l=!1,u="",f=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ro.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ro.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oV(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function GC(n,e,t){me(typeof e=="string","typeof type must == string"),me(typeof t=="object","typeof params must == object");let s;if(e===FC)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===qC)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oV(n)&&(t.ns=n.namespace);const a=[];return Qi(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(){this.counters_={}}incrementCounter(e,t=1){Cr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return eN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={},mg={};function Vy(n){const e=n.toString();return fg[e]||(fg[e]=new lV),fg[e]}function cV(n,e){const t=n.toString();return mg[t]||(mg[t]=e()),mg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Zu(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="start",hV="close",dV="pLPCommand",fV="pRTLPCB",KC="id",WC="pw",YC="ser",mV="cb",pV="seg",gV="ts",_V="d",yV="dframe",QC=1870,$C=30,vV=QC-$C,EV=25e3,TV=3e4;class El{constructor(e,t,s,a,l,u,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=Vy(t),this.urlFn=p=>(this.appCheckToken&&(p[h_]=this.appCheckToken),GC(t,qC,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TV)),X4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jy((...l)=>{const[u,f,p,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Aw)this.id=f,this.password=p;else if(u===hV)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Aw]="t",s[YC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[PC]=Ly,this.transportSessionId&&(s[LC]=this.transportSessionId),this.lastSessionId&&(s[zC]=this.lastSessionId),this.applicationId&&(s[BC]=this.applicationId),this.appCheckToken&&(s[h_]=this.appCheckToken),typeof location<"u"&&location.hostname&&UC.test(location.hostname)&&(s[VC]=jC);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){El.forceAllow_=!0}static forceDisallow(){El.forceDisallow_=!0}static isAvailable(){return El.forceAllow_?!0:!El.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!J4()&&!eV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=xn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Rb(t),a=OC(s,vV);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yV]="t",s[KC]=e,s[WC]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=xn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y4(),window[dV+this.uniqueCallbackIdentifier]=e,window[fV+this.uniqueCallbackIdentifier]=t,this.myIFrame=jy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){jn("frame writing exception"),f.stack&&jn(f.stack),jn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[KC]=this.myID,e[WC]=this.myPW,e[YC]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$C+s.length<=QC;){const u=this.pendingSegs.shift();s=s+"&"+pV+a+"="+u.seg+"&"+gV+a+"="+u.ts+"&"+_V+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(EV)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{jn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV=16384,wV=45e3;let hf=null;typeof MozWebSocket<"u"?hf=MozWebSocket:typeof WebSocket<"u"&&(hf=WebSocket);class as{constructor(e,t,s,a,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=Vy(t),this.connURL=as.connectionURL_(t,u,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[PC]=Ly,typeof location<"u"&&location.hostname&&UC.test(location.hostname)&&(u[VC]=jC),t&&(u[LC]=t),s&&(u[zC]=s),a&&(u[h_]=a),l&&(u[BC]=l),GC(e,FC,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ro.set("previous_websocket_failure",!0);try{let s;cN(),this.mySock=new hf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){as.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hf!==null&&!as.forceDisallow_}static previouslyFailed(){return ro.isInMemoryStorage||ro.get("previous_websocket_failure")===!0}markConnectionHealthy(){ro.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=bu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(me(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=xn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=OC(t,SV);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wV))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}as.responsesRequiredToBeHealthy=2;as.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static get ALL_TRANSPORTS(){return[El,as]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=as&&as.isAvailable();let s=t&&!as.previouslyFailed();if(e.webSocketOnly&&(t||Ci("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[as];else{const a=this.transports_=[];for(const l of Pu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Pu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=6e4,AV=5e3,CV=10*1024,RV=100*1024,pg="t",Cw="d",IV="s",Rw="r",NV="e",Iw="o",Nw="a",xw="n",Dw="p",xV="h";class DV{constructor(e,t,s,a,l,u,f,p,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu("c:"+this.id+":"),this.transportManager_=new Pu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Tu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pg in e){const t=e[pg];t===Nw?this.upgradeIfSecondaryHealthy_():t===Rw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Iw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nu("t",e),s=nu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nu("t",e),s=nu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nu(pg,e);if(Cw in e){const s=e[Cw];if(t===xV){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===xw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===IV?this.onConnectionShutdown_(s):t===Rw?this.onReset_(s):t===NV?u_("Server Error: "+s):t===Iw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):u_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ly!==s&&Ci("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Tu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ro.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.allowedEvents_=e,this.listeners_={},me(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){me(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends ZC{static getInstance(){return new df}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!N_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return me(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=32,Ow=768;class Dt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function St(){return new Dt("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Sa(n){return n.pieces_.length-n.pieceNum_}function Nt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Dt(n.pieces_,e)}function JC(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function MV(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function eR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function tR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Dt(e,0)}function Sn(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Dt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Dt(t,0)}function Ze(n){return n.pieceNum_>=n.pieces_.length}function Ki(n,e){const t=et(n),s=et(e);if(t===null)return e;if(t===s)return Ki(Nt(n),Nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function nR(n,e){if(Sa(n)!==Sa(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ls(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Sa(n)>Sa(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class OV{constructor(e,t){this.errorPrefix_=t,this.parts_=eR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sf(this.parts_[s]);iR(this)}}function kV(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Sf(e),iR(n)}function PV(n){const e=n.parts_.pop();n.byteLength_-=Sf(e),n.parts_.length>0&&(n.byteLength_-=1)}function iR(n){if(n.byteLength_>Ow)throw new Error(n.errorPrefix_+"has a key path longer than "+Ow+" bytes ("+n.byteLength_+").");if(n.parts_.length>Mw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mw+") or object contains a cycle "+to(n))}function to(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends ZC{static getInstance(){return new Uy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return me(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1e3,LV=300*1e3,kw=30*1e3,VV=1.3,jV=3e4,UV="server_kill",Pw=3;class yr extends XC{constructor(e,t,s,a,l,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=yr.nextPersistentConnectionId_++,this.log_=Xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=iu,this.maxReconnectDelay_=LV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&df.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(xn(l)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new I_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,g=f.s;yr.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cr(e,"w")){const s=Dl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Ci(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=mN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):u_("Unrecognized action received from server: "+xn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jV&&(this.reconnectDelay_=iu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+yr.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(S){me(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(S)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,A]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?jn("getToken() completed but was canceled"):(jn("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=A&&A.token,f=new DV(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,V=>{Ci(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(UV)},l))}catch(S){this.log_("Failed to get token: "+S),u||(this.repoInfo_.nodeAdmin&&Ci(S),p())}}}interrupt(e){jn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pg(this.interruptReasons_)&&(this.reconnectDelay_=iu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Py(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Dt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){jn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pw&&(this.reconnectDelay_=kw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){jn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+NC.replace(/\./g,"-")]=1,N_()?e["framework.cordova"]=1:kb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=df.getInstance().currentlyOnline();return Pg(this.interruptReasons_)&&e}}yr.nextPersistentConnectionId_=0;yr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new tt(Ul,e),a=new tt(Ul,t);return this.compare(s,a)!==0}minPost(){return tt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;class sR extends Hf{static get __EMPTY_NODE(){return Cd}static set __EMPTY_NODE(e){Cd=e}compare(e,t){return Zl(e.name,t.name)}isDefinedOn(e){throw Fl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(_o,Cd)}makePost(e,t){return me(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Cd)}toString(){return".key"}}const xl=new sR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Tn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Tn.RED,this.left=a??oi.EMPTY_NODE,this.right=l??oi.EMPTY_NODE}copy(e,t,s,a,l){return new Tn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return oi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return oi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Tn.RED=!0;Tn.BLACK=!1;class zV{copy(e,t,s,a,l){return this}insert(e,t,s){return new Tn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class oi{constructor(e,t=oi.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new oi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Tn.BLACK,null,null))}remove(e){return new oi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Tn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rd(this.root_,null,this.comparator_,!0,e)}}oi.EMPTY_NODE=new zV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(n,e){return Zl(n.name,e.name)}function zy(n,e){return Zl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d_;function FV(n){d_=n}const rR=function(n){return typeof n=="number"?"number:"+kC(n):"string:"+n},aR=function(n){if(n.isLeafNode()){const e=n.val();me(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cr(e,".sv"),"Priority must be a string or number.")}else me(n===d_||n.isEmpty(),"priority of unexpected type.");me(n===d_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lw;class vn{static set __childrenNodeConstructor(e){Lw=e}static get __childrenNodeConstructor(){return Lw}constructor(e,t=vn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new vn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:vn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ze(e)?this:et(e)===".priority"?this.priorityNode_:vn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:vn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=et(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(me(s!==".priority"||Sa(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,vn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=kC(this.value_):e+=this.value_,this.lazyHash_=DC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===vn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof vn.__childrenNodeConstructor?-1:(me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=vn.VALUE_TYPE_ORDER.indexOf(t),l=vn.VALUE_TYPE_ORDER.indexOf(s);return me(a>=0,"Unknown leaf type: "+t),me(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}vn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oR,lR;function qV(n){oR=n}function HV(n){lR=n}class GV extends Hf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Zl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(_o,new vn("[PRIORITY-POST]",lR))}makePost(e,t){const s=oR(e);return new tt(t,new vn("[PRIORITY-POST]",s))}toString(){return".priority"}}const zn=new GV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=Math.log(2);class WV{constructor(e){const t=l=>parseInt(Math.log(l)/KV,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ff=function(n,e,t,s){n.sort(e);const a=function(p,g){const E=g-p;let S,A;if(E===0)return null;if(E===1)return S=n[p],A=t?t(S):S,new Tn(A,S.node,Tn.BLACK,null,null);{const V=parseInt(E/2,10)+p,q=a(p,V),Z=a(V+1,g);return S=n[V],A=t?t(S):S,new Tn(A,S.node,Tn.BLACK,q,Z)}},l=function(p){let g=null,E=null,S=n.length;const A=function(q,Z){const Y=S-q,pe=S;S-=q;const ue=a(Y+1,pe),oe=n[Y],Ee=t?t(oe):oe;V(new Tn(Ee,oe.node,Z,null,ue))},V=function(q){g?(g.left=q,g=q):(E=q,g=q)};for(let q=0;q<p.count;++q){const Z=p.nextBitIsOne(),Y=Math.pow(2,p.count-(q+1));Z?A(Y,Tn.BLACK):(A(Y,Tn.BLACK),A(Y,Tn.RED))}return E},u=new WV(n.length),f=l(u);return new oi(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;const pl={};class mr{static get Default(){return me(pl&&zn,"ChildrenNode.ts has not been loaded"),gg=gg||new mr({".priority":pl},{".priority":zn}),gg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Dl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof oi?t:null}hasIndex(e){return Cr(this.indexSet_,e.toString())}addIndex(e,t){me(e!==xl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(tt.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;a?f=ff(s,e.getCompare()):f=pl;const p=e.toString(),g={...this.indexSet_};g[p]=e;const E={...this.indexes_};return E[p]=f,new mr(E,g)}addToIndexes(e,t){const s=Gd(this.indexes_,(a,l)=>{const u=Dl(this.indexSet_,l);if(me(u,"Missing index implementation for "+l),a===pl)if(u.isDefinedOn(e.node)){const f=[],p=t.getIterator(tt.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),ff(f,u.getCompare())}else return pl;else{const f=t.get(e.name);let p=a;return f&&(p=p.remove(new tt(e.name,f))),p.insert(e,e.node)}});return new mr(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gd(this.indexes_,a=>{if(a===pl)return a;{const l=t.get(e.name);return l?a.remove(new tt(e.name,l)):a}});return new mr(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;class ct{static get EMPTY_NODE(){return su||(su=new ct(new oi(zy),null,mr.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&aR(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||su}updatePriority(e){return this.children_.isEmpty()?this:new ct(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?su:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(Nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(me(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new tt(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?su:this.priorityNode_;return new ct(a,u,l)}}updateChild(e,t){const s=et(e);if(s===null)return t;{me(et(e)!==".priority"||Sa(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(Nt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(zn,(u,f)=>{t[u]=f.val(e),s++,l&&ct.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rR(this.getPriority().val())+":"),this.forEachChild(zn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":DC(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new tt(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ju?-1:0}withIndex(e){if(e===xl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ct(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(zn),a=t.getIterator(zn);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===xl?null:this.indexMap_.get(e.toString())}}ct.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YV extends ct{constructor(){super(new oi(zy),ct.EMPTY_NODE,mr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ct.EMPTY_NODE}isEmpty(){return!1}}const Ju=new YV;Object.defineProperties(tt,{MIN:{value:new tt(Ul,ct.EMPTY_NODE)},MAX:{value:new tt(_o,Ju)}});sR.__EMPTY_NODE=ct.EMPTY_NODE;vn.__childrenNodeConstructor=ct;FV(Ju);HV(Ju);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV=!0;function Un(n,e=null){if(n===null)return ct.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),me(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new vn(t,Un(e))}if(!(n instanceof Array)&&QV){const t=[];let s=!1;if(Qi(n,(u,f)=>{if(u.substring(0,1)!=="."){const p=Un(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new tt(u,p)))}}),t.length===0)return ct.EMPTY_NODE;const l=ff(t,BV,u=>u.name,zy);if(s){const u=ff(t,zn.getCompare());return new ct(l,Un(e),new mr({".priority":u},{".priority":zn}))}else return new ct(l,Un(e),mr.Default)}else{let t=ct.EMPTY_NODE;return Qi(n,(s,a)=>{if(Cr(n,s)&&s.substring(0,1)!=="."){const l=Un(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Un(e))}}qV(Un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V extends Hf{constructor(e){super(),this.indexPath_=e,me(!Ze(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Zl(e.name,t.name):l}makePost(e,t){const s=Un(e),a=ct.EMPTY_NODE.updateChild(this.indexPath_,s);return new tt(t,a)}maxPost(){const e=ct.EMPTY_NODE.updateChild(this.indexPath_,Ju);return new tt(_o,e)}toString(){return eR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV extends Hf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Zl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const s=Un(e);return new tt(t,s)}toString(){return".value"}}const ZV=new XV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(n){return{type:"value",snapshotNode:n}}function e3(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function t3(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vw(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function n3(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ul}hasEnd(){return this.endSet_}getIndexEndValue(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_o}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zn}copy(){const e=new By;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===zn?t="$priority":n.index_===ZV?t="$value":n.index_===xl?t="$key":(me(n.index_ instanceof $V,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=xn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=xn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+xn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=xn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+xn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Uw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==zn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends XC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Xu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=mf.getListenId_(e,s),f={};this.listens_[u]=f;const p=jw(e._queryParams);this.restRequest_(l+".json",p,(g,E)=>{let S=E;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(l,S,!1,s),Dl(this.listens_,u)===f){let A;g?g===401?A="permission_denied":A="rest_error:"+g:A="ok",a(A,null)}})}unlisten(e,t){const s=mf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=jw(e._queryParams),s=e._path.toString(),a=new I_;return this.restRequest_(s+".json",t,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ql(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=bu(f.responseText)}catch{Ci("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Ci("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.rootNode_=ct.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){return{value:null,children:new Map}}function cR(n,e,t){if(Ze(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=et(e);n.children.has(s)||n.children.set(s,pf());const a=n.children.get(s);e=Nt(e),cR(a,e,t)}}function f_(n,e,t){n.value!==null?t(e,n.value):s3(n,(s,a)=>{const l=new Dt(e.toString()+"/"+s);f_(a,l,t)})}function s3(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Qi(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=10*1e3,a3=30*1e3,o3=300*1e3;class l3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new r3(e);const s=zw+(a3-zw)*Math.random();Tu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Qi(e,(a,l)=>{l>0&&Cr(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Tu(this.reportStats_.bind(this),Math.floor(Math.random()*2*o3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ms;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ms||(Ms={}));function uR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dR(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ms.ACK_USER_WRITE,this.source=uR()}operationForChild(e){if(Ze(this.path)){if(this.affectedTree.value!=null)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Dt(e));return new gf(St(),t,this.revert)}}else return me(et(this.path)===e,"operationForChild called for unrelated child."),new gf(Nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ms.OVERWRITE}operationForChild(e){return Ze(this.path)?new yo(this.source,St(),this.snap.getImmediateChild(e)):new yo(this.source,Nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ms.MERGE}operationForChild(e){if(Ze(this.path)){const t=this.children.subtree(new Dt(e));return t.isEmpty()?null:t.value?new yo(this.source,St(),t.value):new Lu(this.source,St(),t)}else return me(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lu(this.source,Nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ze(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function c3(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(n3(u.childName,u.snapshotNode))}),ru(n,a,"child_removed",e,s,t),ru(n,a,"child_added",e,s,t),ru(n,a,"child_moved",l,s,t),ru(n,a,"child_changed",e,s,t),ru(n,a,"value",e,s,t),a}function ru(n,e,t,s,a,l){const u=s.filter(f=>f.type===t);u.sort((f,p)=>h3(n,f,p)),u.forEach(f=>{const p=u3(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,n.query_))})})}function u3(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function h3(n,e,t){if(e.childName==null||t.childName==null)throw Fl("Should only compare child_ events.");const s=new tt(e.childName,e.snapshotNode),a=new tt(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(n,e){return{eventCache:n,serverCache:e}}function Su(n,e,t,s){return fR(new Fy(e,t,s),n.serverCache)}function mR(n,e,t,s){return fR(n.eventCache,new Fy(e,t,s))}function m_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _g;const d3=()=>(_g||(_g=new oi(Z4)),_g);class It{static fromObject(e){let t=new It(null);return Qi(e,(s,a)=>{t=t.set(new Dt(s),a)}),t}constructor(e,t=d3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:St(),value:this.value};if(Ze(e))return null;{const s=et(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(Nt(e),t);return l!=null?{path:Sn(new Dt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ze(e))return this;{const t=et(e),s=this.children.get(t);return s!==null?s.subtree(Nt(e)):new It(null)}}set(e,t){if(Ze(e))return new It(t,this.children);{const s=et(e),l=(this.children.get(s)||new It(null)).set(Nt(e),t),u=this.children.insert(s,l);return new It(this.value,u)}}remove(e){if(Ze(e))return this.children.isEmpty()?new It(null):new It(null,this.children);{const t=et(e),s=this.children.get(t);if(s){const a=s.remove(Nt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new It(null):new It(this.value,l)}else return this}}get(e){if(Ze(e))return this.value;{const t=et(e),s=this.children.get(t);return s?s.get(Nt(e)):null}}setTree(e,t){if(Ze(e))return t;{const s=et(e),l=(this.children.get(s)||new It(null)).setTree(Nt(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new It(this.value,u)}}fold(e){return this.fold_(St(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Sn(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,St(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ze(e))return null;{const l=et(e),u=this.children.get(l);return u?u.findOnPath_(Nt(e),Sn(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,St(),t)}foreachOnPath_(e,t,s){if(Ze(e))return this;{this.value&&s(t,this.value);const a=et(e),l=this.children.get(a);return l?l.foreachOnPath_(Nt(e),Sn(t,a),s):new It(null)}}foreach(e){this.foreach_(St(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Sn(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.writeTree_=e}static empty(){return new hs(new It(null))}}function wu(n,e,t){if(Ze(e))return new hs(new It(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=Ki(a,e);return l=l.updateChild(u,t),new hs(n.writeTree_.set(a,l))}else{const a=new It(t),l=n.writeTree_.setTree(e,a);return new hs(l)}}}function Bw(n,e,t){let s=n;return Qi(t,(a,l)=>{s=wu(s,Sn(e,a),l)}),s}function Fw(n,e){if(Ze(e))return hs.empty();{const t=n.writeTree_.setTree(e,new It(null));return new hs(t)}}function p_(n,e){return Co(n,e)!=null}function Co(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ki(t.path,e)):null}function qw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(zn,(s,a)=>{e.push(new tt(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new tt(s,a.value))}),e}function pa(n,e){if(Ze(e))return n;{const t=Co(n,e);return t!=null?new hs(new It(t)):new hs(n.writeTree_.subtree(e))}}function g_(n){return n.writeTree_.isEmpty()}function zl(n,e){return pR(St(),n.writeTree_,e)}function pR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(me(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=pR(Sn(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Sn(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(n,e){return TR(e,n)}function f3(n,e,t,s,a){me(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=wu(n.visibleWrites,e,t)),n.lastWriteId=s}function m3(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function p3(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);me(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&g3(f,s.path)?a=!1:ls(s.path,f.path)&&(l=!0)),u--}if(a){if(l)return _3(n),!0;if(s.snap)n.visibleWrites=Fw(n.visibleWrites,s.path);else{const f=s.children;Qi(f,p=>{n.visibleWrites=Fw(n.visibleWrites,Sn(s.path,p))})}return!0}else return!1}function g3(n,e){if(n.snap)return ls(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ls(Sn(n.path,t),e))return!0;return!1}function _3(n){n.visibleWrites=_R(n.allWrites,y3,St()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function y3(n){return n.visible}function _R(n,e,t){let s=hs.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let f;if(l.snap)ls(t,u)?(f=Ki(t,u),s=wu(s,f,l.snap)):ls(u,t)&&(f=Ki(u,t),s=wu(s,St(),l.snap.getChild(f)));else if(l.children){if(ls(t,u))f=Ki(t,u),s=Bw(s,f,l.children);else if(ls(u,t))if(f=Ki(u,t),Ze(f))s=Bw(s,St(),l.children);else{const p=Dl(l.children,et(f));if(p){const g=p.getChild(Nt(f));s=wu(s,St(),g)}}}else throw Fl("WriteRecord should have .snap or .children")}}return s}function yR(n,e,t,s,a){if(!s&&!a){const l=Co(n.visibleWrites,e);if(l!=null)return l;{const u=pa(n.visibleWrites,e);if(g_(u))return t;if(t==null&&!p_(u,St()))return null;{const f=t||ct.EMPTY_NODE;return zl(u,f)}}}else{const l=pa(n.visibleWrites,e);if(!a&&g_(l))return t;if(!a&&t==null&&!p_(l,St()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ls(g.path,e)||ls(e,g.path))},f=_R(n.allWrites,u,e),p=t||ct.EMPTY_NODE;return zl(f,p)}}}function v3(n,e,t){let s=ct.EMPTY_NODE;const a=Co(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(zn,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=pa(n.visibleWrites,e);return t.forEachChild(zn,(u,f)=>{const p=zl(pa(l,new Dt(u)),f);s=s.updateImmediateChild(u,p)}),qw(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=pa(n.visibleWrites,e);return qw(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function E3(n,e,t,s,a){me(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Sn(e,t);if(p_(n.visibleWrites,l))return null;{const u=pa(n.visibleWrites,l);return g_(u)?a.getChild(t):zl(u,a.getChild(t))}}function T3(n,e,t,s){const a=Sn(e,t),l=Co(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=pa(n.visibleWrites,a);return zl(u,s.getNode().getImmediateChild(t))}else return null}function S3(n,e){return Co(n.visibleWrites,e)}function w3(n,e,t,s,a,l,u){let f;const p=pa(n.visibleWrites,e),g=Co(p,St());if(g!=null)f=g;else if(t!=null)f=zl(p,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const E=[],S=u.getCompare(),A=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let V=A.getNext();for(;V&&E.length<a;)S(V,s)!==0&&E.push(V),V=A.getNext();return E}else return[]}function b3(){return{visibleWrites:hs.empty(),allWrites:[],lastWriteId:-1}}function __(n,e,t,s){return yR(n.writeTree,n.treePath,e,t,s)}function vR(n,e){return v3(n.writeTree,n.treePath,e)}function Hw(n,e,t,s){return E3(n.writeTree,n.treePath,e,t,s)}function _f(n,e){return S3(n.writeTree,Sn(n.treePath,e))}function A3(n,e,t,s,a,l){return w3(n.writeTree,n.treePath,e,t,s,a,l)}function qy(n,e,t){return T3(n.writeTree,n.treePath,e,t)}function ER(n,e){return TR(Sn(n.treePath,e),n.writeTree)}function TR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;me(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),me(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Vw(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,t3(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,e3(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Vw(s,e.snapshotNode,a.oldSnap));else throw Fl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const SR=new R3;class Hy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Fy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vo(this.viewCache_),l=A3(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function I3(n,e){me(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),me(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function N3(n,e,t,s,a){const l=new C3;let u,f;if(t.type===Ms.OVERWRITE){const g=t;g.source.fromUser?u=y_(n,e,g.path,g.snap,s,a,l):(me(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ze(g.path),u=yf(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===Ms.MERGE){const g=t;g.source.fromUser?u=D3(n,e,g.path,g.children,s,a,l):(me(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=v_(n,e,g.path,g.children,s,a,f,l))}else if(t.type===Ms.ACK_USER_WRITE){const g=t;g.revert?u=k3(n,e,g.path,s,a,l):u=M3(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Ms.LISTEN_COMPLETE)u=O3(n,e,t.path,s,l);else throw Fl("Unknown operation type: "+t.type);const p=l.getChanges();return x3(e,u,p),{viewCache:u,changes:p}}function x3(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=m_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(JV(m_(e)))}}function wR(n,e,t,s,a,l){const u=e.eventCache;if(_f(s,t)!=null)return e;{let f,p;if(Ze(t))if(me(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=vo(e),E=g instanceof ct?g:ct.EMPTY_NODE,S=vR(s,E);f=n.filter.updateFullNode(e.eventCache.getNode(),S,l)}else{const g=__(s,vo(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=et(t);if(g===".priority"){me(Sa(t)===1,"Can't have a priority with additional path components");const E=u.getNode();p=e.serverCache.getNode();const S=Hw(s,t,E,p);S!=null?f=n.filter.updatePriority(E,S):f=u.getNode()}else{const E=Nt(t);let S;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const A=Hw(s,t,u.getNode(),p);A!=null?S=u.getNode().getImmediateChild(g).updateChild(E,A):S=u.getNode().getImmediateChild(g)}else S=qy(s,g,e.serverCache);S!=null?f=n.filter.updateChild(u.getNode(),g,S,E,a,l):f=u.getNode()}}return Su(e,f,u.isFullyInitialized()||Ze(t),n.filter.filtersNodes())}}function yf(n,e,t,s,a,l,u,f){const p=e.serverCache;let g;const E=u?n.filter:n.filter.getIndexedFilter();if(Ze(t))g=E.updateFullNode(p.getNode(),s,null);else if(E.filtersNodes()&&!p.isFiltered()){const V=p.getNode().updateChild(t,s);g=E.updateFullNode(p.getNode(),V,null)}else{const V=et(t);if(!p.isCompleteForPath(t)&&Sa(t)>1)return e;const q=Nt(t),Y=p.getNode().getImmediateChild(V).updateChild(q,s);V===".priority"?g=E.updatePriority(p.getNode(),Y):g=E.updateChild(p.getNode(),V,Y,q,SR,null)}const S=mR(e,g,p.isFullyInitialized()||Ze(t),E.filtersNodes()),A=new Hy(a,S,l);return wR(n,S,t,a,A,f)}function y_(n,e,t,s,a,l,u){const f=e.eventCache;let p,g;const E=new Hy(a,e,l);if(Ze(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,u),p=Su(e,g,!0,n.filter.filtersNodes());else{const S=et(t);if(S===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Su(e,g,f.isFullyInitialized(),f.isFiltered());else{const A=Nt(t),V=f.getNode().getImmediateChild(S);let q;if(Ze(A))q=s;else{const Z=E.getCompleteChild(S);Z!=null?JC(A)===".priority"&&Z.getChild(tR(A)).isEmpty()?q=Z:q=Z.updateChild(A,s):q=ct.EMPTY_NODE}if(V.equals(q))p=e;else{const Z=n.filter.updateChild(f.getNode(),S,q,A,E,u);p=Su(e,Z,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Gw(n,e){return n.eventCache.isCompleteForChild(e)}function D3(n,e,t,s,a,l,u){let f=e;return s.foreach((p,g)=>{const E=Sn(t,p);Gw(e,et(E))&&(f=y_(n,f,E,g,a,l,u))}),s.foreach((p,g)=>{const E=Sn(t,p);Gw(e,et(E))||(f=y_(n,f,E,g,a,l,u))}),f}function Kw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function v_(n,e,t,s,a,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ze(t)?g=s:g=new It(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((S,A)=>{if(E.hasChild(S)){const V=e.serverCache.getNode().getImmediateChild(S),q=Kw(n,V,A);p=yf(n,p,new Dt(S),q,a,l,u,f)}}),g.children.inorderTraversal((S,A)=>{const V=!e.serverCache.isCompleteForChild(S)&&A.value===null;if(!E.hasChild(S)&&!V){const q=e.serverCache.getNode().getImmediateChild(S),Z=Kw(n,q,A);p=yf(n,p,new Dt(S),Z,a,l,u,f)}}),p}function M3(n,e,t,s,a,l,u){if(_f(a,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ze(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return yf(n,e,t,p.getNode().getChild(t),a,l,f,u);if(Ze(t)){let g=new It(null);return p.getNode().forEachChild(xl,(E,S)=>{g=g.set(new Dt(E),S)}),v_(n,e,t,g,a,l,f,u)}else return e}else{let g=new It(null);return s.foreach((E,S)=>{const A=Sn(t,E);p.isCompleteForPath(A)&&(g=g.set(E,p.getNode().getChild(A)))}),v_(n,e,t,g,a,l,f,u)}}function O3(n,e,t,s,a){const l=e.serverCache,u=mR(e,l.getNode(),l.isFullyInitialized()||Ze(t),l.isFiltered());return wR(n,u,t,s,SR,a)}function k3(n,e,t,s,a,l){let u;if(_f(s,t)!=null)return e;{const f=new Hy(s,e,a),p=e.eventCache.getNode();let g;if(Ze(t)||et(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=__(s,vo(e));else{const S=e.serverCache.getNode();me(S instanceof ct,"serverChildren would be complete if leaf node"),E=vR(s,S)}E=E,g=n.filter.updateFullNode(p,E,l)}else{const E=et(t);let S=qy(s,E,e.serverCache);S==null&&e.serverCache.isCompleteForChild(E)&&(S=p.getImmediateChild(E)),S!=null?g=n.filter.updateChild(p,E,S,Nt(t),f,l):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(p,E,ct.EMPTY_NODE,Nt(t),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=__(s,vo(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||_f(s,St())!=null,Su(e,g,u,n.filter.filtersNodes())}}function P3(n,e){const t=vo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ze(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function Ww(n,e,t,s){e.type===Ms.MERGE&&e.source.queryId!==null&&(me(vo(n.viewCache_),"We should always have a full cache before handling merges"),me(m_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=N3(n.processor_,a,e,t,s);return I3(n.processor_,l.viewCache),me(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,L3(n,l.changes,l.viewCache.eventCache.getNode())}function L3(n,e,t,s){const a=n.eventRegistrations_;return c3(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yw;function V3(n){me(!Yw,"__referenceConstructor has already been defined"),Yw=n}function Gy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return me(l!=null,"SyncTree gave us an op for an invalid query."),Ww(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat(Ww(u,e,t,s));return l}}function Ky(n,e){let t=null;for(const s of n.views.values())t=t||P3(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qw;function j3(n){me(!Qw,"__referenceConstructor has already been defined"),Qw=n}class $w{constructor(e){this.listenProvider_=e,this.syncPointTree_=new It(null),this.pendingWriteTree_=b3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U3(n,e,t,s,a){return f3(n.pendingWriteTree_,e,t,s,a),a?Kf(n,new yo(uR(),e,t)):[]}function Tl(n,e,t=!1){const s=m3(n.pendingWriteTree_,e);if(p3(n.pendingWriteTree_,e)){let l=new It(null);return s.snap!=null?l=l.set(St(),!0):Qi(s.children,u=>{l=l.set(new Dt(u),!0)}),Kf(n,new gf(s.path,l,t))}else return[]}function Gf(n,e,t){return Kf(n,new yo(hR(),e,t))}function z3(n,e,t){const s=It.fromObject(t);return Kf(n,new Lu(hR(),e,s))}function B3(n,e,t,s){const a=RR(n,s);if(a!=null){const l=IR(a),u=l.path,f=l.queryId,p=Ki(u,e),g=new yo(dR(f),p,t);return NR(n,u,g)}else return[]}function F3(n,e,t,s){const a=RR(n,s);if(a){const l=IR(a),u=l.path,f=l.queryId,p=Ki(u,e),g=It.fromObject(t),E=new Lu(dR(f),p,g);return NR(n,u,E)}else return[]}function bR(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,f)=>{const p=Ki(u,e),g=Ky(f,p);if(g)return g});return yR(a,e,l,t,!0)}function Kf(n,e){return AR(e,n.syncPointTree_,null,gR(n.pendingWriteTree_,St()))}function AR(n,e,t,s){if(Ze(n.path))return CR(n,e,t,s);{const a=e.get(St());t==null&&a!=null&&(t=Ky(a,St()));let l=[];const u=et(n.path),f=n.operationForChild(u),p=e.children.get(u);if(p&&f){const g=t?t.getImmediateChild(u):null,E=ER(s,u);l=l.concat(AR(f,p,g,E))}return a&&(l=l.concat(Gy(a,n,s,t))),l}}function CR(n,e,t,s){const a=e.get(St());t==null&&a!=null&&(t=Ky(a,St()));let l=[];return e.children.inorderTraversal((u,f)=>{const p=t?t.getImmediateChild(u):null,g=ER(s,u),E=n.operationForChild(u);E&&(l=l.concat(CR(E,f,p,g)))}),a&&(l=l.concat(Gy(a,n,s,t))),l}function RR(n,e){return n.tagToQueryMap.get(e)}function IR(n){const e=n.indexOf("$");return me(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Dt(n.substr(0,e))}}function NR(n,e,t){const s=n.syncPointTree_.get(e);me(s,"Missing sync point for query tag that we're tracking");const a=gR(n.pendingWriteTree_,e);return Gy(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Wy(t)}node(){return this.node_}}class Yy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Sn(this.path_,e);return new Yy(this.syncTree_,t)}node(){return bR(this.syncTree_,this.path_)}}const q3=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xw=function(n,e,t){if(!n||typeof n!="object")return n;if(me(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return H3(n[".sv"],e,t);if(typeof n[".sv"]=="object")return G3(n[".sv"],e);me(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},H3=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:me(!1,"Unexpected server value: "+n)}},G3=function(n,e,t){n.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&me(!1,"Unexpected increment value: "+s);const a=e.node();if(me(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},K3=function(n,e,t,s){return Qy(e,new Yy(t,n),s)},W3=function(n,e,t){return Qy(n,new Wy(e),t)};function Qy(n,e,t){const s=n.getPriority().val(),a=Xw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,f=Xw(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new vn(f,Un(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new vn(a))),u.forEachChild(zn,(f,p)=>{const g=Qy(p,e.getImmediateChild(f),t);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xy(n,e){let t=e instanceof Dt?e:new Dt(e),s=n,a=et(t);for(;a!==null;){const l=Dl(s.node.children,a)||{children:{},childCount:0};s=new $y(a,s,l),t=Nt(t),a=et(t)}return s}function Jl(n){return n.node.value}function xR(n,e){n.node.value=e,E_(n)}function DR(n){return n.node.childCount>0}function Y3(n){return Jl(n)===void 0&&!DR(n)}function Wf(n,e){Qi(n.node.children,(t,s)=>{e(new $y(t,n,s))})}function MR(n,e,t,s){t&&e(n),Wf(n,a=>{MR(a,e,!0)})}function Q3(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function eh(n){return new Dt(n.parent===null?n.name:eh(n.parent)+"/"+n.name)}function E_(n){n.parent!==null&&$3(n.parent,n.name,n)}function $3(n,e,t){const s=Y3(t),a=Cr(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,E_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,E_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=/[\[\].#$\/\u0000-\u001F\u007F]/,Z3=/[\[\].#$\u0000-\u001F\u007F]/,yg=10*1024*1024,OR=function(n){return typeof n=="string"&&n.length!==0&&!X3.test(n)},J3=function(n){return typeof n=="string"&&n.length!==0&&!Z3.test(n)},ej=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J3(n)},kR=function(n,e,t){const s=t instanceof Dt?new OV(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+to(s));if(typeof e=="function")throw new Error(n+"contains a function "+to(s)+" with contents = "+e.toString());if(MC(e))throw new Error(n+"contains "+e.toString()+" "+to(s));if(typeof e=="string"&&e.length>yg/3&&Sf(e)>yg)throw new Error(n+"contains a string greater than "+yg+" utf8 bytes "+to(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Qi(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!OR(u)))throw new Error(n+" contains an invalid key ("+u+") "+to(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kV(s,u),kR(n,f,s),PV(s)}),a&&l)throw new Error(n+' contains ".value" child '+to(s)+" in addition to actual children.")}},tj=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!OR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ej(t))throw new Error(EN(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ij(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!nR(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Ro(n,e,t){ij(n,t),sj(n,s=>ls(s,e)||ls(e,s))}function sj(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(rj(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rj(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Eu&&jn("event: "+t.toString()),Zu(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aj="repo_interrupt",oj=25;class lj{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pf(),this.transactionQueueTree_=new $y,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cj(n,e,t){if(n.stats_=Vy(n.repoInfo_),n.forceRestClient_||sV())n.server_=new mf(n.repoInfo_,(s,a,l,u)=>{Zw(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Jw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new yr(n.repoInfo_,e,(s,a,l,u)=>{Zw(n,s,a,l,u)},s=>{Jw(n,s)},s=>{hj(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=cV(n.repoInfo_,()=>new l3(n.stats_,n.server_)),n.infoData_=new i3,n.infoSyncTree_=new $w({startListening:(s,a,l,u)=>{let f=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(f=Gf(n.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Zy(n,"connected",!1),n.serverSyncTree_=new $w({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(f,p)=>{const g=u(f,p);Ro(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function uj(n){const t=n.infoData_.getNode(new Dt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function PR(n){return q3({timestamp:uj(n)})}function Zw(n,e,t,s,a){n.dataUpdateCount++;const l=new Dt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const p=Gd(t,g=>Un(g));u=F3(n.serverSyncTree_,l,p,a)}else{const p=Un(t);u=B3(n.serverSyncTree_,l,p,a)}else if(s){const p=Gd(t,g=>Un(g));u=z3(n.serverSyncTree_,l,p)}else{const p=Un(t);u=Gf(n.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=ev(n,l)),Ro(n.eventQueue_,f,u)}function Jw(n,e){Zy(n,"connected",e),e===!1&&fj(n)}function hj(n,e){Qi(e,(t,s)=>{Zy(n,t,s)})}function Zy(n,e,t){const s=new Dt("/.info/"+e),a=Un(t);n.infoData_.updateSnapshot(s,a);const l=Gf(n.infoSyncTree_,s,a);Ro(n.eventQueue_,s,l)}function dj(n){return n.nextWriteId_++}function fj(n){LR(n,"onDisconnectEvents");const e=PR(n),t=pf();f_(n.onDisconnect_,St(),(a,l)=>{const u=K3(a,l,n.serverSyncTree_,e);cR(t,a,u)});let s=[];f_(t,St(),(a,l)=>{s=s.concat(Gf(n.serverSyncTree_,a,l));const u=_j(n,a);ev(n,u)}),n.onDisconnect_=pf(),Ro(n.eventQueue_,St(),s)}function mj(n){n.persistentConnection_&&n.persistentConnection_.interrupt(aj)}function LR(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),jn(t,...e)}function VR(n,e,t){return bR(n.serverSyncTree_,e,t)||ct.EMPTY_NODE}function Jy(n,e=n.transactionQueueTree_){if(e||Yf(n,e),Jl(e)){const t=UR(n,e);me(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&pj(n,eh(e),t)}else DR(e)&&Wf(e,t=>{Jy(n,t)})}function pj(n,e,t){const s=t.map(g=>g.currentWriteId),a=VR(n,e,s);let l=a;const u=a.hash();for(let g=0;g<t.length;g++){const E=t[g];me(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const S=Ki(e,E.path);l=l.updateChild(S,E.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;n.server_.put(p.toString(),f,g=>{LR(n,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const S=[];for(let A=0;A<t.length;A++)t[A].status=2,E=E.concat(Tl(n.serverSyncTree_,t[A].currentWriteId)),t[A].onComplete&&S.push(()=>t[A].onComplete(null,!0,t[A].currentOutputSnapshotResolved)),t[A].unwatcher();Yf(n,Xy(n.transactionQueueTree_,e)),Jy(n,n.transactionQueueTree_),Ro(n.eventQueue_,e,E);for(let A=0;A<S.length;A++)Zu(S[A])}else{if(g==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{Ci("transaction at "+p.toString()+" failed: "+g);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=g}ev(n,e)}},u)}function ev(n,e){const t=jR(n,e),s=eh(t),a=UR(n,t);return gj(n,a,s),s}function gj(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Ki(t,p.path);let E=!1,S;if(me(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,S=p.abortReason,a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=oj)E=!0,S="maxretry",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0));else{const A=VR(n,p.path,u);p.currentInputSnapshot=A;const V=e[f].update(A.val());if(V!==void 0){kR("transaction failed: Data returned ",V,p.path);let q=Un(V);typeof V=="object"&&V!=null&&Cr(V,".priority")||(q=q.updatePriority(A.getPriority()));const Y=p.currentWriteId,pe=PR(n),ue=W3(q,A,pe);p.currentOutputSnapshotRaw=q,p.currentOutputSnapshotResolved=ue,p.currentWriteId=dj(n),u.splice(u.indexOf(Y),1),a=a.concat(U3(n.serverSyncTree_,p.path,ue,p.currentWriteId,p.applyLocally)),a=a.concat(Tl(n.serverSyncTree_,Y,!0))}else E=!0,S="nodata",a=a.concat(Tl(n.serverSyncTree_,p.currentWriteId,!0))}Ro(n.eventQueue_,t,a),a=[],E&&(e[f].status=2,(function(A){setTimeout(A,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(S==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(S),!1,null))))}Yf(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Zu(s[f]);Jy(n,n.transactionQueueTree_)}function jR(n,e){let t,s=n.transactionQueueTree_;for(t=et(e);t!==null&&Jl(s)===void 0;)s=Xy(s,t),e=Nt(e),t=et(e);return s}function UR(n,e){const t=[];return zR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function zR(n,e,t){const s=Jl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Wf(e,a=>{zR(n,a,t)})}function Yf(n,e){const t=Jl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,xR(e,t.length>0?t:void 0)}Wf(e,s=>{Yf(n,s)})}function _j(n,e){const t=eh(jR(n,e)),s=Xy(n.transactionQueueTree_,e);return Q3(s,a=>{vg(n,a)}),vg(n,s),MR(s,a=>{vg(n,a)}),t}function vg(n,e){const t=Jl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(me(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(me(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Tl(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?xR(e,void 0):t.length=l+1,Ro(n.eventQueue_,eh(e),a);for(let u=0;u<s.length;u++)Zu(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yj(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function vj(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ci(`Invalid query segment '${t}' in query '${n}'`)}return e}const eb=function(n,e){const t=Ej(n),s=t.namespace;t.domain==="firebase.com"&&br(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$4();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new HC(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Dt(t.pathString)}},Ej=function(n){let e="",t="",s="",a="",l="",u=!0,f="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(E,S)),E<S&&(a=yj(n.substring(E,S)));const A=vj(n.substring(Math.min(n.length,S)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const V=e.slice(0,g);if(V.toLowerCase()==="localhost")t="localhost";else if(V.split(".").length<=2)t=V;else{const q=e.indexOf(".");s=e.substring(0,q).toLowerCase(),t=e.substring(q+1),l=s}"ns"in A&&(l=A.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:u,scheme:f,pathString:a,namespace:l}};/**
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
 */class tv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ze(this._path)?null:JC(this._path)}get ref(){return new ec(this._repo,this._path)}get _queryIdentifier(){const e=Uw(this._queryParams),t=Py(e);return t==="{}"?"default":t}get _queryObject(){return Uw(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof tv))return!1;const t=this._repo===e._repo,s=nR(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+MV(this._path)}}class ec extends tv{constructor(e,t){super(e,t,new By,!1)}get parent(){const e=tR(this._path);return e===null?null:new ec(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}V3(ec);j3(ec);/**
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
 */const Tj="FIREBASE_DATABASE_EMULATOR_HOST",T_={};let Sj=!1;function wj(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=To(l);n.repoInfo_=new HC(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function bj(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=eb(l,a),f=u.repoInfo,p;typeof process<"u"&&Ew&&(p=Ew[Tj]),p?(l=`http://${p}?ns=${f.namespace}`,u=eb(l,a),f=u.repoInfo):u.repoInfo.secure;const g=new aV(n.name,n.options,e);tj("Invalid Firebase Database URL",u),Ze(u.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const E=Cj(f,n,g,new rV(n,t));return new Rj(E,n)}function Aj(n,e){const t=T_[e];(!t||t[n.key]!==n)&&br(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mj(n),delete t[n.key]}function Cj(n,e,t,s){let a=T_[e.name];a||(a={},T_[e.name]=a);let l=a[n.toURLString()];return l&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new lj(n,Sj,t,s),a[n.toURLString()]=l,l}class Rj{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ec(this._repo,St())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Aj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}function Ij(n=ju(),e){const t=wa(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=xb("database");s&&Nj(t,...s)}return t}function Nj(n,e,t,s={}){n=At(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&js(s,l.repoInfo_.emulatorOptions))return;br("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&br('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Bd(Bd.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Ob(s.mockUserToken,n.app.options.projectId);u=new Bd(f)}To(e)&&O_(e),wj(l,a,s,u)}/**
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
 */function xj(n){H4(So),ds(new Wi("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return bj(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),li(Tw,Sw,n),li(Tw,Sw,"esm2020")}yr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xj();const Dj={apiKey:"AIzaSyA1SSHyqPe0qUodvjLEsLof0mUN-Z70Hqc",authDomain:"vocalsalvosporcristo-70e5f.firebaseapp.com",databaseURL:"https://vocalsalvosporcristo-70e5f-default-rtdb.firebaseio.com",projectId:"vocalsalvosporcristo-70e5f",storageBucket:"vocalsalvosporcristo-70e5f.firebasestorage.app",messagingSenderId:"867220919903",appId:"1:867220919903:web:b769416ea3d76bb508adea",measurementId:"G-MPT7K3FKVL"},Qf=wx().length?ju():zb(Dj),Nn=$M(Qf),Fs=C4(Qf);Ij(Qf);VD(Nn,fA).catch(()=>{});typeof window>"u"||["localhost","127.0.0.1"].includes(window.location.hostname)?Promise.resolve(null):yk().then(n=>n?gk(Qf):null).catch(()=>null);const tb="admin",nb="admin@vocalsalvosporcristo.app",BR="admin",FR="admin123",Mj=["Maestro","Secretário","Vice-Secretário"],$f=["Adicionar músicas","Adicionar avisos","Adicionar datas de ensaios","Adicionar documentos e partituras","Cadastrar membros","Postar avisos","Alterar dados","Mexer na agenda","Comentar"],nv=["Ver músicas","Receber avisos, ensaios e documentos","Notificar atraso ou imprevisto","Solicitar alteração de dado","Comentar em agenda e avisos"],Oj=Array.from(new Set([...$f,...nv]));function Ar(n){return n==="administration"||n==="direction"?n:"member"}function S_(n){return n==="member"?nv:$f}function pr(n,e){if(Array.isArray(n)){const t=n.filter(s=>typeof s=="string"&&s.trim().length>0);if(t.length>0)return Array.from(new Set(t))}return[...S_(Ar(e))]}const au=[{id:"perfil",title:"Sua identidade no ministério",description:"Colete os dados principais para iniciar o cadastro com clareza e segurança."},{id:"localizacao",title:"Logística e deslocamento",description:"Organize ensaios, escalas e comunicação com base na localização do membro."},{id:"voz",title:"Perfil vocal e disponibilidade",description:"Finalize o cadastro com informações que ajudam a montar escalas melhores."}],Eg={loginEmail:"",loginPassword:"",name:"",phone:"",email:"",password:"",confirmPassword:"",cep:"",neighborhood:"",city:"",street:"",houseNumber:"",maritalStatus:"",gender:"",vocalRange:"",availability:"Terças e sábados"},kj=320,Pj=7e5;function Lj(n){return!!(n&&(n.startsWith("https://")||n.startsWith("http://")))}async function qR(n,e,t){const s={displayName:e};Lj(t)&&(s.photoURL=t);try{await kD(n,s)}catch(a){console.warn("Falha ao sincronizar o perfil no Firebase Auth.",a)}}function iv(n){return n.replace(/\D/g,"")}function Vj(n){return{uid:n.uid,name:n.name,phone:n.phone,phoneNormalized:n.phoneNormalized,avatarDataUrl:n.avatarDataUrl,vocalRange:n.vocalRange,leadershipRole:n.leadershipRole||"",accountLevel:n.accountLevel||"member",availability:n.availability,updatedAt:zs()}}async function tc(n){await qf(Ia(Fs,"memberDirectory",n.uid),Vj(n),{merge:!0})}async function jj(n){await tc(n)}async function HR(){const n=await YR(),e=await Promise.allSettled(n.map(a=>tc(a))),t=e.filter(a=>a.status==="fulfilled").length,s=e.length-t;return{total:n.length,synced:t,failed:s}}function Uj(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{e(String(s.result||""))},s.onerror=()=>{t(new Error("Não foi possível ler a imagem selecionada."))},s.readAsDataURL(n)})}function zj(n){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("Não foi possível processar a imagem do perfil.")),s.src=n})}async function Bj(n){const e=await Uj(n);return GR(e)}async function GR(n){const e=await zj(n),t=Math.min(1,kj/Math.max(e.width,e.height)),s=Math.max(1,Math.round(e.width*t)),a=Math.max(1,Math.round(e.height*t)),l=document.createElement("canvas");l.width=s,l.height=a;const u=l.getContext("2d");if(!u)throw new Error("Não foi possível preparar a foto do perfil.");u.drawImage(e,0,0,s,a);const f=l.toDataURL("image/jpeg",.78);if(f.length>Pj)throw new Error("A foto ainda ficou grande para salvar. Use uma imagem menor.");return f}async function KR(n){return n?typeof n=="string"?n.trim()?n.startsWith("http://")||n.startsWith("https://")?n:GR(n):"":Bj(n):""}async function Fj(n,e,t){const s=Ia(Fs,"members",n.uid),a=await Xl(s),l=a.exists()?a.data():null,u=Ar(l==null?void 0:l.accountLevel),f=pr(l==null?void 0:l.permissions,u);let p=(l==null?void 0:l.avatarDataUrl)||n.photoURL||"";t&&(p=await KR(t));const g={uid:n.uid,email:(n.email||e.email).trim().toLowerCase(),name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:iv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),avatarDataUrl:p,accountLevel:u,leadershipRole:(l==null?void 0:l.leadershipRole)||"",permissions:f,createdAt:a.exists()?a.data().createdAt:zs(),updatedAt:zs()};return await qf(s,g,{merge:!0}),await tc(g),await qR(n,g.name,p),{...g,createdAt:void 0,updatedAt:void 0}}async function WR(n){const e=await Xl(Ia(Fs,"members",n));return e.exists()?e.data():null}async function ib(n){const e=Ia(Fs,"members",n.uid),t=await Xl(e),s=t.exists()?t.data():null,a={uid:n.uid,email:(n.email||"").trim().toLowerCase(),name:(s==null?void 0:s.name)||n.displayName||"Administrador do Vocal",phone:(s==null?void 0:s.phone)||"",phoneNormalized:(s==null?void 0:s.phoneNormalized)||"",cep:(s==null?void 0:s.cep)||"",neighborhood:(s==null?void 0:s.neighborhood)||"",city:(s==null?void 0:s.city)||"",street:(s==null?void 0:s.street)||"",houseNumber:(s==null?void 0:s.houseNumber)||"",maritalStatus:(s==null?void 0:s.maritalStatus)||"",gender:(s==null?void 0:s.gender)||"Outro",vocalRange:(s==null?void 0:s.vocalRange)||"",availability:(s==null?void 0:s.availability)||"Disponibilidade administrativa",avatarDataUrl:(s==null?void 0:s.avatarDataUrl)||n.photoURL||"",accountLevel:"administration",leadershipRole:(s==null?void 0:s.leadershipRole)||"",permissions:pr((s==null?void 0:s.permissions)||$f,"administration"),createdAt:t.exists()?t.data().createdAt:zs(),updatedAt:zs()};return await qf(e,a,{merge:!0}),await tc(a),{...a,createdAt:void 0,updatedAt:void 0}}async function YR(){const n=AC(Sy(Fs,"members"),CC("name"));return(await Oy(n)).docs.map(t=>t.data())}async function Tg(){const n=AC(Sy(Fs,"memberDirectory"),CC("name"));return(await Oy(n)).docs.map(t=>t.data())}async function qj(n,e,t,s=!1){const a=Ia(Fs,"members",n.uid),l=await Xl(a);if(!l.exists())throw new Error("Perfil do membro não encontrado.");const u=l.data();let f=u.avatarDataUrl||n.photoURL||"";t&&(f=await KR(t));const p={...u,name:s?e.name.trim():u.name,phone:e.phone.trim(),phoneNormalized:iv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:s?e.maritalStatus.trim():u.maritalStatus,gender:s?e.gender.trim():u.gender,vocalRange:s?e.vocalRange.trim():u.vocalRange,availability:e.availability.trim(),avatarDataUrl:f,accountLevel:u.accountLevel,leadershipRole:u.leadershipRole,permissions:u.permissions};return await ky(a,{name:p.name,phone:p.phone,phoneNormalized:p.phoneNormalized,cep:p.cep,neighborhood:p.neighborhood,city:p.city,street:p.street,houseNumber:p.houseNumber,maritalStatus:p.maritalStatus,gender:p.gender,vocalRange:p.vocalRange,availability:p.availability,avatarDataUrl:p.avatarDataUrl,updatedAt:zs()}),await tc(p),await qR(n,p.name,p.avatarDataUrl),p}async function Hj(n,e){const t=Ia(Fs,"members",n);await ky(t,{name:e.name.trim(),phone:e.phone.trim(),phoneNormalized:iv(e.phone),cep:e.cep.trim(),neighborhood:e.neighborhood.trim(),city:e.city.trim(),street:e.street.trim(),houseNumber:e.houseNumber.trim(),maritalStatus:e.maritalStatus.trim(),gender:e.gender.trim(),vocalRange:e.vocalRange.trim(),availability:e.availability.trim(),accountLevel:Ar(e.accountLevel),leadershipRole:e.leadershipRole.trim(),permissions:pr(e.permissions,e.accountLevel),updatedAt:zs()});const s=await Xl(t);s.exists()&&await tc(s.data())}const Gj=320,Kj=7e5;function Wj(n,e,t){return Math.min(Math.max(n,e),t)}function QR(n){return n*Math.PI/180}function Yj(n,e,t){const s=QR(t);return{width:Math.abs(Math.cos(s)*n)+Math.abs(Math.sin(s)*e),height:Math.abs(Math.sin(s)*n)+Math.abs(Math.cos(s)*e)}}function $R(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{e(String(s.result||""))},s.onerror=()=>{t(new Error("Não foi possível ler a imagem selecionada."))},s.readAsDataURL(n)})}function Qj(n){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("Não foi possível processar a foto selecionada.")),s.src=n})}function $j({saturation:n,brightness:e,contrast:t}){return`saturate(${n}%) brightness(${e}%) contrast(${t}%)`}async function Xj(n){const e=[n.width,280,240,200].filter((s,a,l)=>s>0&&l.indexOf(s)===a),t=[.88,.82,.76,.7];for(const s of e){let a=n;if(s!==n.width){a=document.createElement("canvas"),a.width=s,a.height=s;const l=a.getContext("2d");if(!l)throw new Error("Não foi possível preparar a foto ajustada.");l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(n,0,0,s,s)}for(const l of t){const u=a.toDataURL("image/jpeg",l);if(u.length<=Kj)return u}}throw new Error("A foto ainda ficou grande para salvar. Reduza o zoom ou escolha outra imagem.")}async function Zj(n,e,t){const s=await Qj(n),a=Yj(s.width,s.height,t.rotation),l=document.createElement("canvas");l.width=Math.ceil(a.width),l.height=Math.ceil(a.height);const u=l.getContext("2d");if(!u)throw new Error("Não foi possível preparar a foto ajustada.");u.save(),u.translate(l.width/2,l.height/2),u.rotate(QR(t.rotation)),u.filter=$j(t),u.drawImage(s,-s.width/2,-s.height/2),u.restore();const f=Wj(Math.max(e.width,e.height),1,t.outputSize||Gj),p=document.createElement("canvas");p.width=f,p.height=f;const g=p.getContext("2d");if(!g)throw new Error("Não foi possível finalizar a foto ajustada.");return g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high",g.drawImage(l,e.x,e.y,e.width,e.height,0,0,f,f),Xj(p)}var w_=function(n,e){return w_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])},w_(n,e)};function Jj(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");w_(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yn=function(){return yn=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},yn.apply(this,arguments)};var Sg,sb;function eU(){if(sb)return Sg;sb=1;var n=!1,e,t,s,a,l,u,f,p,g,E,S,A,V,q,Z;function Y(){if(!n){n=!0;var ue=navigator.userAgent,oe=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(ue),Ee=/(Mac OS X)|(Windows)|(Linux)/.exec(ue);if(A=/\b(iPhone|iP[ao]d)/.exec(ue),V=/\b(iP[ao]d)/.exec(ue),E=/Android/i.exec(ue),q=/FBAN\/\w+;/i.exec(ue),Z=/Mobile/i.exec(ue),S=!!/Win64/.exec(ue),oe){e=oe[1]?parseFloat(oe[1]):oe[5]?parseFloat(oe[5]):NaN,e&&document&&document.documentMode&&(e=document.documentMode);var Oe=/(?:Trident\/(\d+.\d+))/.exec(ue);u=Oe?parseFloat(Oe[1])+4:e,t=oe[2]?parseFloat(oe[2]):NaN,s=oe[3]?parseFloat(oe[3]):NaN,a=oe[4]?parseFloat(oe[4]):NaN,a?(oe=/(?:Chrome\/(\d+\.\d+))/.exec(ue),l=oe&&oe[1]?parseFloat(oe[1]):NaN):l=NaN}else e=t=s=l=a=NaN;if(Ee){if(Ee[1]){var fe=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(ue);f=fe?parseFloat(fe[1].replace("_",".")):!0}else f=!1;p=!!Ee[2],g=!!Ee[3]}else f=p=g=!1}}var pe={ie:function(){return Y()||e},ieCompatibilityMode:function(){return Y()||u>e},ie64:function(){return pe.ie()&&S},firefox:function(){return Y()||t},opera:function(){return Y()||s},webkit:function(){return Y()||a},safari:function(){return pe.webkit()},chrome:function(){return Y()||l},windows:function(){return Y()||p},osx:function(){return Y()||f},linux:function(){return Y()||g},iphone:function(){return Y()||A},mobile:function(){return Y()||A||V||E||Z},nativeApp:function(){return Y()||q},android:function(){return Y()||E},ipad:function(){return Y()||V}};return Sg=pe,Sg}var wg,rb;function tU(){if(rb)return wg;rb=1;var n=!!(typeof window<"u"&&window.document&&window.document.createElement),e={canUseDOM:n,canUseWorkers:typeof Worker<"u",canUseEventListeners:n&&!!(window.addEventListener||window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};return wg=e,wg}var bg,ab;function nU(){if(ab)return bg;ab=1;var n=tU(),e;n.canUseDOM&&(e=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function t(s,a){if(!n.canUseDOM||a&&!("addEventListener"in document))return!1;var l="on"+s,u=l in document;if(!u){var f=document.createElement("div");f.setAttribute(l,"return;"),u=typeof f[l]=="function"}return!u&&e&&s==="wheel"&&(u=document.implementation.hasFeature("Events.wheel","3.0")),u}return bg=t,bg}var Ag,ob;function iU(){if(ob)return Ag;ob=1;var n=eU(),e=nU(),t=10,s=40,a=800;function l(u){var f=0,p=0,g=0,E=0;return"detail"in u&&(p=u.detail),"wheelDelta"in u&&(p=-u.wheelDelta/120),"wheelDeltaY"in u&&(p=-u.wheelDeltaY/120),"wheelDeltaX"in u&&(f=-u.wheelDeltaX/120),"axis"in u&&u.axis===u.HORIZONTAL_AXIS&&(f=p,p=0),g=f*t,E=p*t,"deltaY"in u&&(E=u.deltaY),"deltaX"in u&&(g=u.deltaX),(g||E)&&u.deltaMode&&(u.deltaMode==1?(g*=s,E*=s):(g*=a,E*=a)),g&&!f&&(f=g<1?-1:1),E&&!p&&(p=E<1?-1:1),{spinX:f,spinY:p,pixelX:g,pixelY:E}}return l.getEventType=function(){return n.firefox()?"DOMMouseScroll":e("wheel")?"wheel":"mousewheel"},Ag=l,Ag}var Cg,lb;function sU(){return lb||(lb=1,Cg=iU()),Cg}var rU=sU();const aU=A_(rU);function oU(n,e,t,s,a,l){l===void 0&&(l=0);var u=Bl(n,e,l),f=u.width,p=u.height,g=Math.min(f,t),E=Math.min(p,s);return g>E*a?{width:E*a,height:E}:{width:g,height:g/a}}function lU(n){return n.width>n.height?n.width/n.naturalWidth:n.height/n.naturalHeight}function ou(n,e,t,s,a){a===void 0&&(a=0);var l=Bl(e.width,e.height,a),u=l.width,f=l.height;return{x:cb(n.x,u,t.width,s),y:cb(n.y,f,t.height,s)}}function cb(n,e,t,s){var a=Math.abs(e*s/2-t/2);return Xf(n,-a,a)}function ub(n,e){return Math.sqrt(Math.pow(n.y-e.y,2)+Math.pow(n.x-e.x,2))}function hb(n,e){return Math.atan2(e.y-n.y,e.x-n.x)*180/Math.PI}function cU(n,e,t,s,a,l,u){l===void 0&&(l=0),u===void 0&&(u=!0);var f=u?uU:hU,p=Bl(e.width,e.height,l),g=Bl(e.naturalWidth,e.naturalHeight,l),E={x:f(100,((p.width-t.width/a)/2-n.x/a)/p.width*100),y:f(100,((p.height-t.height/a)/2-n.y/a)/p.height*100),width:f(100,t.width/p.width*100/a),height:f(100,t.height/p.height*100/a)},S=Math.round(f(g.width,E.width*g.width/100)),A=Math.round(f(g.height,E.height*g.height/100)),V=g.width>=g.height*s,q=V?{width:Math.round(A*s),height:A}:{width:S,height:Math.round(S/s)},Z=yn(yn({},q),{x:Math.round(f(g.width-q.width,E.x*g.width/100)),y:Math.round(f(g.height-q.height,E.y*g.height/100))});return{croppedAreaPercentages:E,croppedAreaPixels:Z}}function uU(n,e){return Math.min(n,Math.max(0,e))}function hU(n,e){return e}function dU(n,e,t,s,a,l){var u=Bl(e.width,e.height,t),f=Xf(s.width/u.width*(100/n.width),a,l),p={x:f*u.width/2-s.width/2-u.width*f*(n.x/100),y:f*u.height/2-s.height/2-u.height*f*(n.y/100)};return{crop:p,zoom:f}}function fU(n,e,t){var s=lU(e);return t.height>t.width?t.height/(n.height*s):t.width/(n.width*s)}function mU(n,e,t,s,a,l){t===void 0&&(t=0);var u=Bl(e.naturalWidth,e.naturalHeight,t),f=Xf(fU(n,e,s),a,l),p=s.height>s.width?s.height/n.height:s.width/n.width,g={x:((u.width-n.width)/2-n.x)*p,y:((u.height-n.height)/2-n.y)*p};return{crop:g,zoom:f}}function db(n,e){return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}function pU(n){return n*Math.PI/180}function Bl(n,e,t){var s=pU(t);return{width:Math.abs(Math.cos(s)*n)+Math.abs(Math.sin(s)*e),height:Math.abs(Math.sin(s)*n)+Math.abs(Math.cos(s)*e)}}function Xf(n,e,t){return Math.min(Math.max(n,e),t)}function Id(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter(function(t){return typeof t=="string"&&t.length>0}).join(" ").trim()}var gU=`.reactEasyCrop_Container {
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
`,_U=1,yU=3,vU=1,EU=(function(n){Jj(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.cropperRef=se.createRef(),t.imageRef=se.createRef(),t.videoRef=se.createRef(),t.containerPosition={x:0,y:0},t.containerRef=null,t.styleRef=null,t.containerRect=null,t.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},t.dragStartPosition={x:0,y:0},t.dragStartCrop={x:0,y:0},t.gestureZoomStart=0,t.gestureRotationStart=0,t.isTouching=!1,t.lastPinchDistance=0,t.lastPinchRotation=0,t.rafDragTimeout=null,t.rafPinchTimeout=null,t.wheelTimer=null,t.currentDoc=typeof document<"u"?document:null,t.currentWindow=typeof window<"u"?window:null,t.resizeObserver=null,t.previousCropSize=null,t.isInitialized=!1,t.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},t.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!t.containerRef)){var s=!0;t.resizeObserver=new window.ResizeObserver(function(a){if(s){s=!1;return}t.computeSizes()}),t.resizeObserver.observe(t.containerRef)}},t.preventZoomSafari=function(s){return s.preventDefault()},t.cleanEvents=function(){t.currentDoc&&(t.currentDoc.removeEventListener("mousemove",t.onMouseMove),t.currentDoc.removeEventListener("mouseup",t.onDragStopped),t.currentDoc.removeEventListener("touchmove",t.onTouchMove),t.currentDoc.removeEventListener("touchend",t.onDragStopped),t.currentDoc.removeEventListener("gesturechange",t.onGestureChange),t.currentDoc.removeEventListener("gestureend",t.onGestureEnd),t.currentDoc.removeEventListener("scroll",t.onScroll))},t.clearScrollEvent=function(){t.containerRef&&t.containerRef.removeEventListener("wheel",t.onWheel),t.wheelTimer&&clearTimeout(t.wheelTimer)},t.onMediaLoad=function(){var s=t.computeSizes();s&&(t.previousCropSize=s,t.emitCropData(),t.setInitialCrop(s),t.isInitialized=!0),t.props.onMediaLoaded&&t.props.onMediaLoaded(t.mediaSize)},t.setInitialCrop=function(s){if(t.props.initialCroppedAreaPercentages){var a=dU(t.props.initialCroppedAreaPercentages,t.mediaSize,t.props.rotation,s,t.props.minZoom,t.props.maxZoom),l=a.crop,u=a.zoom;t.props.onCropChange(l),t.props.onZoomChange&&t.props.onZoomChange(u)}else if(t.props.initialCroppedAreaPixels){var f=mU(t.props.initialCroppedAreaPixels,t.mediaSize,t.props.rotation,s,t.props.minZoom,t.props.maxZoom),l=f.crop,u=f.zoom;t.props.onCropChange(l),t.props.onZoomChange&&t.props.onZoomChange(u)}},t.computeSizes=function(){var s,a,l,u,f,p,g=t.imageRef.current||t.videoRef.current;if(g&&t.containerRef){t.containerRect=t.containerRef.getBoundingClientRect(),t.saveContainerPosition();var E=t.containerRect.width/t.containerRect.height,S=((s=t.imageRef.current)===null||s===void 0?void 0:s.naturalWidth)||((a=t.videoRef.current)===null||a===void 0?void 0:a.videoWidth)||0,A=((l=t.imageRef.current)===null||l===void 0?void 0:l.naturalHeight)||((u=t.videoRef.current)===null||u===void 0?void 0:u.videoHeight)||0,V=g.offsetWidth<S||g.offsetHeight<A,q=S/A,Z=void 0;if(V)switch(t.state.mediaObjectFit){default:case"contain":Z=E>q?{width:t.containerRect.height*q,height:t.containerRect.height}:{width:t.containerRect.width,height:t.containerRect.width/q};break;case"horizontal-cover":Z={width:t.containerRect.width,height:t.containerRect.width/q};break;case"vertical-cover":Z={width:t.containerRect.height*q,height:t.containerRect.height};break}else Z={width:g.offsetWidth,height:g.offsetHeight};t.mediaSize=yn(yn({},Z),{naturalWidth:S,naturalHeight:A}),t.props.setMediaSize&&t.props.setMediaSize(t.mediaSize);var Y=t.props.cropSize?t.props.cropSize:oU(t.mediaSize.width,t.mediaSize.height,t.containerRect.width,t.containerRect.height,t.props.aspect,t.props.rotation);return(((f=t.state.cropSize)===null||f===void 0?void 0:f.height)!==Y.height||((p=t.state.cropSize)===null||p===void 0?void 0:p.width)!==Y.width)&&t.props.onCropSizeChange&&t.props.onCropSizeChange(Y),t.setState({cropSize:Y},t.recomputeCropPosition),t.props.setCropSize&&t.props.setCropSize(Y),Y}},t.saveContainerPosition=function(){if(t.containerRef){var s=t.containerRef.getBoundingClientRect();t.containerPosition={x:s.left,y:s.top}}},t.onMouseDown=function(s){t.currentDoc&&(s.preventDefault(),t.currentDoc.addEventListener("mousemove",t.onMouseMove),t.currentDoc.addEventListener("mouseup",t.onDragStopped),t.saveContainerPosition(),t.onDragStart(e.getMousePoint(s)))},t.onMouseMove=function(s){return t.onDrag(e.getMousePoint(s))},t.onScroll=function(s){t.currentDoc&&(s.preventDefault(),t.saveContainerPosition())},t.onTouchStart=function(s){t.currentDoc&&(t.isTouching=!0,!(t.props.onTouchRequest&&!t.props.onTouchRequest(s))&&(t.currentDoc.addEventListener("touchmove",t.onTouchMove,{passive:!1}),t.currentDoc.addEventListener("touchend",t.onDragStopped),t.saveContainerPosition(),s.touches.length===2?t.onPinchStart(s):s.touches.length===1&&t.onDragStart(e.getTouchPoint(s.touches[0]))))},t.onTouchMove=function(s){s.preventDefault(),s.touches.length===2?t.onPinchMove(s):s.touches.length===1&&t.onDrag(e.getTouchPoint(s.touches[0]))},t.onGestureStart=function(s){t.currentDoc&&(s.preventDefault(),t.currentDoc.addEventListener("gesturechange",t.onGestureChange),t.currentDoc.addEventListener("gestureend",t.onGestureEnd),t.gestureZoomStart=t.props.zoom,t.gestureRotationStart=t.props.rotation)},t.onGestureChange=function(s){if(s.preventDefault(),!t.isTouching){var a=e.getMousePoint(s),l=t.gestureZoomStart-1+s.scale;if(t.setNewZoom(l,a,{shouldUpdatePosition:!0}),t.props.onRotationChange){var u=t.gestureRotationStart+s.rotation;t.props.onRotationChange(u)}}},t.onGestureEnd=function(s){t.cleanEvents()},t.onDragStart=function(s){var a,l,u=s.x,f=s.y;t.dragStartPosition={x:u,y:f},t.dragStartCrop=yn({},t.props.crop),(l=(a=t.props).onInteractionStart)===null||l===void 0||l.call(a)},t.onDrag=function(s){var a=s.x,l=s.y;t.currentWindow&&(t.rafDragTimeout&&t.currentWindow.cancelAnimationFrame(t.rafDragTimeout),t.rafDragTimeout=t.currentWindow.requestAnimationFrame(function(){if(t.state.cropSize&&!(a===void 0||l===void 0)){var u=a-t.dragStartPosition.x,f=l-t.dragStartPosition.y,p={x:t.dragStartCrop.x+u,y:t.dragStartCrop.y+f},g=t.props.restrictPosition?ou(p,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):p;t.props.onCropChange(g)}}))},t.onDragStopped=function(){var s,a;t.isTouching=!1,t.cleanEvents(),t.emitCropData(),(a=(s=t.props).onInteractionEnd)===null||a===void 0||a.call(s)},t.onWheel=function(s){if(t.currentWindow&&!(t.props.onWheelRequest&&!t.props.onWheelRequest(s))){s.preventDefault();var a=e.getMousePoint(s),l=aU(s).pixelY,u=t.props.zoom-l*t.props.zoomSpeed/200;t.setNewZoom(u,a,{shouldUpdatePosition:!0}),t.state.hasWheelJustStarted||t.setState({hasWheelJustStarted:!0},function(){var f,p;return(p=(f=t.props).onInteractionStart)===null||p===void 0?void 0:p.call(f)}),t.wheelTimer&&clearTimeout(t.wheelTimer),t.wheelTimer=t.currentWindow.setTimeout(function(){return t.setState({hasWheelJustStarted:!1},function(){var f,p;return(p=(f=t.props).onInteractionEnd)===null||p===void 0?void 0:p.call(f)})},250)}},t.getPointOnContainer=function(s,a){var l=s.x,u=s.y;if(!t.containerRect)throw new Error("The Cropper is not mounted");return{x:t.containerRect.width/2-(l-a.x),y:t.containerRect.height/2-(u-a.y)}},t.getPointOnMedia=function(s){var a=s.x,l=s.y,u=t.props,f=u.crop,p=u.zoom;return{x:(a+f.x)/p,y:(l+f.y)/p}},t.setNewZoom=function(s,a,l){var u=l===void 0?{}:l,f=u.shouldUpdatePosition,p=f===void 0?!0:f;if(!(!t.state.cropSize||!t.props.onZoomChange)){var g=Xf(s,t.props.minZoom,t.props.maxZoom);if(p){var E=t.getPointOnContainer(a,t.containerPosition),S=t.getPointOnMedia(E),A={x:S.x*g-E.x,y:S.y*g-E.y},V=t.props.restrictPosition?ou(A,t.mediaSize,t.state.cropSize,g,t.props.rotation):A;t.props.onCropChange(V)}t.props.onZoomChange(g)}},t.getCropData=function(){if(!t.state.cropSize)return null;var s=t.props.restrictPosition?ou(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;return cU(s,t.mediaSize,t.state.cropSize,t.getAspect(),t.props.zoom,t.props.rotation,t.props.restrictPosition)},t.emitCropData=function(){var s=t.getCropData();if(s){var a=s.croppedAreaPercentages,l=s.croppedAreaPixels;t.props.onCropComplete&&t.props.onCropComplete(a,l),t.props.onCropAreaChange&&t.props.onCropAreaChange(a,l)}},t.emitCropAreaChange=function(){var s=t.getCropData();if(s){var a=s.croppedAreaPercentages,l=s.croppedAreaPixels;t.props.onCropAreaChange&&t.props.onCropAreaChange(a,l)}},t.recomputeCropPosition=function(){var s,a;if(t.state.cropSize){var l=t.props.crop;if(t.isInitialized&&(!((s=t.previousCropSize)===null||s===void 0)&&s.width)&&(!((a=t.previousCropSize)===null||a===void 0)&&a.height)){var u=Math.abs(t.previousCropSize.width-t.state.cropSize.width)>1e-6||Math.abs(t.previousCropSize.height-t.state.cropSize.height)>1e-6;if(u){var f=t.state.cropSize.width/t.previousCropSize.width,p=t.state.cropSize.height/t.previousCropSize.height;l={x:t.props.crop.x*f,y:t.props.crop.y*p}}}var g=t.props.restrictPosition?ou(l,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):l;t.previousCropSize=t.state.cropSize,t.props.onCropChange(g),t.emitCropData()}},t.onKeyDown=function(s){var a,l,u=t.props,f=u.crop,p=u.onCropChange,g=u.keyboardStep,E=u.zoom,S=u.rotation,A=g;if(t.state.cropSize){s.shiftKey&&(A*=.2);var V=yn({},f);switch(s.key){case"ArrowUp":V.y-=A,s.preventDefault();break;case"ArrowDown":V.y+=A,s.preventDefault();break;case"ArrowLeft":V.x-=A,s.preventDefault();break;case"ArrowRight":V.x+=A,s.preventDefault();break;default:return}t.props.restrictPosition&&(V=ou(V,t.mediaSize,t.state.cropSize,E,S)),s.repeat||(l=(a=t.props).onInteractionStart)===null||l===void 0||l.call(a),p(V)}},t.onKeyUp=function(s){var a,l;switch(s.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":s.preventDefault();break;default:return}t.emitCropData(),(l=(a=t.props).onInteractionEnd)===null||l===void 0||l.call(a)},t}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=gU,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},e.prototype.componentWillUnmount=function(){var t,s;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((s=this.styleRef.parentNode)===null||s===void 0||s.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(t){var s,a,l,u,f,p,g,E,S;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.objectFit!==this.props.objectFit?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():((s=t.cropSize)===null||s===void 0?void 0:s.height)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.height)||((l=t.cropSize)===null||l===void 0?void 0:l.width)!==((u=this.props.cropSize)===null||u===void 0?void 0:u.width)?this.computeSizes():(((f=t.crop)===null||f===void 0?void 0:f.x)!==((p=this.props.crop)===null||p===void 0?void 0:p.x)||((g=t.crop)===null||g===void 0?void 0:g.y)!==((E=this.props.crop)===null||E===void 0?void 0:E.y))&&this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&((S=this.videoRef.current)===null||S===void 0||S.load());var A=this.getObjectFit();A!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:A},this.computeSizes)},e.prototype.getAspect=function(){var t=this.props,s=t.cropSize,a=t.aspect;return s?s.width/s.height:a},e.prototype.getObjectFit=function(){var t,s,a,l;if(this.props.objectFit==="cover"){var u=this.imageRef.current||this.videoRef.current;if(u&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var f=this.containerRect.width/this.containerRect.height,p=((t=this.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoWidth)||0,g=((a=this.imageRef.current)===null||a===void 0?void 0:a.naturalHeight)||((l=this.videoRef.current)===null||l===void 0?void 0:l.videoHeight)||0,E=p/g;return E<f?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},e.prototype.onPinchStart=function(t){var s=e.getTouchPoint(t.touches[0]),a=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=ub(s,a),this.lastPinchRotation=hb(s,a),this.onDragStart(db(s,a))},e.prototype.onPinchMove=function(t){var s=this;if(!(!this.currentDoc||!this.currentWindow)){var a=e.getTouchPoint(t.touches[0]),l=e.getTouchPoint(t.touches[1]),u=db(a,l);this.onDrag(u),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var f=ub(a,l),p=s.props.zoom*(f/s.lastPinchDistance);s.setNewZoom(p,u,{shouldUpdatePosition:!1}),s.lastPinchDistance=f;var g=hb(a,l),E=s.props.rotation+(g-s.lastPinchRotation);s.props.onRotationChange&&s.props.onRotationChange(E),s.lastPinchRotation=g})}},e.prototype.render=function(){var t=this,s,a=this.props,l=a.image,u=a.video,f=a.mediaProps,p=a.cropperProps,g=a.transform,E=a.crop,S=E.x,A=E.y,V=a.rotation,q=a.zoom,Z=a.cropShape,Y=a.showGrid,pe=a.roundCropAreaPixels,ue=a.style,oe=ue.containerStyle,Ee=ue.cropAreaStyle,Oe=ue.mediaStyle,fe=a.classes,C=fe.containerClassName,R=fe.cropAreaClassName,N=fe.mediaClassName,D=(s=this.state.mediaObjectFit)!==null&&s!==void 0?s:this.getObjectFit();return se.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(O){return t.containerRef=O},"data-testid":"container",style:oe,className:Id("reactEasyCrop_Container",C)},l?se.createElement("img",yn({alt:"",className:Id("reactEasyCrop_Image",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",N)},f,{src:l,ref:this.imageRef,style:yn(yn({},Oe),{transform:g||"translate(".concat(S,"px, ").concat(A,"px) rotate(").concat(V,"deg) scale(").concat(q,")")}),onLoad:this.onMediaLoad})):u&&se.createElement("video",yn({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:Id("reactEasyCrop_Video",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",N)},f,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:yn(yn({},Oe),{transform:g||"translate(".concat(S,"px, ").concat(A,"px) rotate(").concat(V,"deg) scale(").concat(q,")")}),controls:!1}),(Array.isArray(u)?u:[{src:u}]).map(function(I){return se.createElement("source",yn({key:I.src},I))})),this.state.cropSize&&se.createElement("div",yn({ref:this.cropperRef,style:yn(yn({},Ee),{width:pe?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:pe?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:Id("reactEasyCrop_CropArea",Z==="round"&&"reactEasyCrop_CropAreaRound",Y&&"reactEasyCrop_CropAreaGrid",R)},p)))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:yU,minZoom:_U,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:vU},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e})(se.Component),XR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fb=ao.createContext&&ao.createContext(XR),TU=["attr","size","title"];function SU(n,e){if(n==null)return{};var t,s,a=wU(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)t=l[s],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function wU(n,e){if(n==null)return{};var t={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(e.indexOf(s)!==-1)continue;t[s]=n[s]}return t}function vf(){return vf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},vf.apply(null,arguments)}function mb(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,s)}return t}function Ef(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mb(Object(t),!0).forEach(function(s){bU(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mb(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function bU(n,e,t){return(e=AU(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function AU(n){var e=CU(n,"string");return typeof e=="symbol"?e:e+""}function CU(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ZR(n){return n&&n.map((e,t)=>ao.createElement(e.tag,Ef({key:t},e.attr),ZR(e.child)))}function Fn(n){return e=>ao.createElement(RU,vf({attr:Ef({},n.attr)},e),ZR(n.child))}function RU(n){var e=t=>{var{attr:s,size:a,title:l}=n,u=SU(n,TU),f=a||t.size||"1em",p;return t.className&&(p=t.className),n.className&&(p=(p?p+" ":"")+n.className),ao.createElement("svg",vf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:p,style:Ef(Ef({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&ao.createElement("title",null,l),n.children)};return fb!==void 0?ao.createElement(fb.Consumer,null,t=>e(t)):e(XR)}function IU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(n)}function NU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(n)}function xU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(n)}function pb(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function DU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"path",attr:{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"},child:[]}]})(n)}function MU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function OU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(n)}function kU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function PU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(n)}function LU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(n)}function VU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(n)}function jU(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(n)}const Rg={x:0,y:0};function UU(n,e,t){return`saturate(${n}%) brightness(${e}%) contrast(${t}%)`}function JR({open:n,imageSrc:e,title:t,description:s,onClose:a,onApply:l}){const[u,f]=se.useState(Rg),[p,g]=se.useState(1.15),[E,S]=se.useState(0),[A,V]=se.useState(100),[q,Z]=se.useState(100),[Y,pe]=se.useState(100),[ue,oe]=se.useState(null),[Ee,Oe]=se.useState(!1),[fe,C]=se.useState("");if(se.useEffect(()=>{n&&(f(Rg),g(1.15),S(0),V(100),Z(100),pe(100),oe(null),C(""))},[e,n]),!n||!e)return null;const R=async()=>{if(!ue){C("Ajuste a foto antes de aplicar.");return}Oe(!0),C("");try{const N=await Zj(e,ue,{rotation:E,saturation:A,brightness:q,contrast:Y});await l(N)}catch(N){C(N instanceof Error?N.message:"Não foi possível preparar a foto agora.")}finally{Oe(!1)}};return _.jsx("div",{className:"home-modal-backdrop avatar-editor-backdrop",role:"dialog","aria-modal":"true","aria-label":t,children:_.jsxs("div",{className:"home-modal-card avatar-editor-card",children:[_.jsxs("div",{className:"home-modal-header avatar-editor-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Foto de perfil"}),_.jsx("h3",{children:t}),_.jsx("p",{children:s})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:a,disabled:Ee,children:"Fechar"})]}),_.jsxs("div",{className:"avatar-editor-layout",children:[_.jsxs("div",{className:"avatar-editor-stage",children:[_.jsx("div",{className:"avatar-editor-cropper-shell",children:_.jsx(EU,{image:e,crop:u,zoom:p,rotation:E,cropShape:"round",showGrid:!1,aspect:1,objectFit:"cover",onCropChange:f,onZoomChange:g,onRotationChange:S,onCropComplete:(N,D)=>oe(D),style:{mediaStyle:{filter:UU(A,q,Y)}}})}),_.jsxs("div",{className:"avatar-editor-tip-row",children:[_.jsx("span",{children:"Arraste a foto para enquadrar melhor o rosto."}),_.jsx("span",{children:"O resultado será salvo em formato otimizado."})]})]}),_.jsxs("div",{className:"avatar-editor-controls",children:[_.jsxs("div",{className:"avatar-editor-control-group",children:[_.jsxs("div",{className:"avatar-editor-control-header",children:[_.jsx(xU,{size:16}),_.jsx("strong",{children:"Enquadramento"})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Zoom"}),_.jsxs("strong",{children:[p.toFixed(2),"x"]}),_.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:p,onChange:N=>g(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Rotação"}),_.jsxs("strong",{children:[E,"°"]}),_.jsx("input",{type:"range",min:"-180",max:"180",step:"1",value:E,onChange:N=>S(Number(N.target.value))})]})]}),_.jsxs("div",{className:"avatar-editor-control-group",children:[_.jsxs("div",{className:"avatar-editor-control-header",children:[_.jsx(NU,{size:16}),_.jsx("strong",{children:"Imagem"})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Saturação"}),_.jsxs("strong",{children:[A,"%"]}),_.jsx("input",{type:"range",min:"40",max:"180",step:"1",value:A,onChange:N=>V(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Brilho"}),_.jsxs("strong",{children:[q,"%"]}),_.jsx("input",{type:"range",min:"70",max:"130",step:"1",value:q,onChange:N=>Z(Number(N.target.value))})]}),_.jsxs("label",{className:"avatar-editor-range-row",children:[_.jsx("span",{children:"Contraste"}),_.jsxs("strong",{children:[Y,"%"]}),_.jsx("input",{type:"range",min:"80",max:"150",step:"1",value:Y,onChange:N=>pe(Number(N.target.value))})]})]}),_.jsxs("button",{type:"button",className:"home-secondary-action avatar-editor-reset",onClick:()=>{f(Rg),g(1.15),S(0),V(100),Z(100),pe(100),C("")},disabled:Ee,children:[_.jsx(DU,{size:15}),"Resetar ajustes"]}),fe?_.jsx("p",{className:"avatar-editor-status",children:fe}):null]})]}),_.jsxs("div",{className:"home-modal-actions avatar-editor-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:a,disabled:Ee,children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action",onClick:R,disabled:Ee,children:Ee?"Aplicando...":"Usar esta foto"})]})]})})}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zU=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BU=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=n=>{const e=BU(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ig={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FU=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},qU=se.createContext({}),HU=()=>se.useContext(qU),GU=se.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...f},p)=>{const{size:g=24,strokeWidth:E=2,absoluteStrokeWidth:S=!1,color:A="currentColor",className:V=""}=HU()??{},q=s??S?Number(t??E)*24/Number(e??g):t??E;return se.createElement("svg",{ref:p,...Ig,width:e??g??Ig.width,height:e??g??Ig.height,stroke:n??A,strokeWidth:q,className:eI("lucide",V,a),...!l&&!FU(f)&&{"aria-hidden":"true"},...f},[...u.map(([Z,Y])=>se.createElement(Z,Y)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(n,e)=>{const t=se.forwardRef(({className:s,...a},l)=>se.createElement(GU,{ref:l,iconNode:e,className:eI(`lucide-${zU(gb(n))}`,`lucide-${n}`,s),...a}));return t.displayName=gb(n),t};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],WU=mn("arrow-left",KU);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],tI=mn("arrow-right",YU);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],$U=mn("building-2",QU);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XU=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ZU=mn("camera",XU);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],e9=mn("chevron-down",JU);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],nI=mn("circle-question-mark",t9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],i9=mn("house",n9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],iI=mn("key-round",s9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],b_=mn("lock-keyhole",r9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],sI=mn("mail",a9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ng=mn("map-pin",o9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],c9=mn("music",l9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],h9=mn("phone",u9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],f9=mn("save",d9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],rI=mn("shield-check",m9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],g9=mn("shield-plus",p9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],y9=mn("user-round",_9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_b=mn("user",v9);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],aI=mn("users",E9),sv="/assets/BackGround-DJtypmwv.png";function T9({onAdminLogin:n,isSubmitting:e=!1,statusMessage:t=""}){const[s,a]=se.useState(""),[l,u]=se.useState(""),[f,p]=se.useState(""),g=E=>{if(E.preventDefault(),!s.trim()||!l.trim()){p("Informe usuário e senha para entrar no painel oculto.");return}p(""),n(s.trim(),l)};return _.jsxs("div",{className:"page admin-page",children:[_.jsx("img",{className:"page-bg admin-bg-image",src:sv,alt:""}),_.jsx("div",{className:"admin-bg-overlay"}),_.jsx("div",{className:"admin-access-shell",children:_.jsxs("div",{className:"admin-access-card",children:[_.jsxs("div",{className:"admin-access-badge",children:[_.jsx(rI,{size:22,strokeWidth:2.4}),"Painel interno"]}),_.jsx("h1",{children:"Acesso administrativo"}),_.jsx("p",{children:"Entre com a credencial oculta para gerenciar contas, níveis e permissões do ministério."}),_.jsx("p",{children:"Credencial inicial: admin / admin"}),t?_.jsx("p",{className:"admin-status-message",children:t}):null,f?_.jsx("p",{className:"admin-status-message",children:f}):null,_.jsxs("form",{className:"admin-access-form",onSubmit:g,children:[_.jsxs("label",{className:"admin-input-group",children:[_.jsx("span",{children:"Usuário"}),_.jsxs("div",{className:"admin-input-shell",children:[_.jsx(y9,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"text",value:s,onChange:E=>a(E.target.value),placeholder:"Usuário administrativo",disabled:e})]})]}),_.jsxs("label",{className:"admin-input-group",children:[_.jsx("span",{children:"Senha"}),_.jsxs("div",{className:"admin-input-shell",children:[_.jsx(iI,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"password",value:l,onChange:E=>u(E.target.value),placeholder:"Senha administrativa",disabled:e})]})]}),_.jsx("button",{className:"admin-primary-btn",type:"submit",disabled:e,children:e?"Entrando...":"Entrar como administrador"})]})]})})]})}function S9(n){const e=Ar(n.accountLevel);return{uid:n.uid,email:n.email,name:n.name,phone:n.phone,cep:n.cep,neighborhood:n.neighborhood,city:n.city,street:n.street,houseNumber:n.houseNumber,maritalStatus:n.maritalStatus,gender:n.gender,vocalRange:n.vocalRange,availability:n.availability,accountLevel:e,leadershipRole:n.leadershipRole||"",permissions:pr(n.permissions,e)}}function w9({adminName:n,members:e,isLoading:t,isSaving:s,statusMessage:a="",onRefresh:l,onSaveMember:u,onChangeAdminPassword:f,onSignOut:p}){const[g,E]=se.useState(""),[S,A]=se.useState({}),[V,q]=se.useState(""),Z=se.useMemo(()=>Object.fromEntries(e.map(C=>[C.uid,S9(C)])),[e]),Y=se.useMemo(()=>e.map(C=>S[C.uid]??Z[C.uid]),[S,Z,e]),pe=se.useMemo(()=>{const C=g.trim().toLowerCase();return Y.filter(R=>C?`${R.name} ${R.email} ${R.accountLevel} ${R.leadershipRole}`.toLowerCase().includes(C):!0)},[Y,g]),ue=(C,R)=>C[R]??Z[R],oe=(C,R)=>{A(N=>{const D=ue(N,C);if(!D)return N;const I={...D,...R};if(R.accountLevel){const O=Ar(R.accountLevel);I.accountLevel=O,O!=="direction"&&(I.leadershipRole=""),I.permissions=[...S_(O)]}return{...N,[C]:I}})},Ee=(C,R)=>{A(N=>{const D=ue(N,C);if(!D)return N;const I=D.permissions.includes(R);return{...N,[C]:{...D,permissions:I?D.permissions.filter(O=>O!==R):[...D.permissions,R]}}})},Oe=C=>{A(R=>{const N=ue(R,C);return N?{...R,[C]:{...N,permissions:[...S_(N.accountLevel)]}}:R})},fe=C=>!!S[C];return _.jsx("div",{className:"page admin-dashboard-page",children:_.jsxs("div",{className:"admin-dashboard-shell",children:[_.jsxs("header",{className:"admin-dashboard-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"admin-dashboard-eyebrow",children:"Gestão central"}),_.jsx("h1",{children:"Painel do administrador"}),_.jsxs("p",{className:"admin-dashboard-copy",children:["Sessão ativa como ",n,". Ajuste níveis, cargos, permissões e dados dos membros por aqui."]})]}),_.jsxs("div",{className:"admin-dashboard-actions",children:[_.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void l(),children:[_.jsx(aI,{size:18,strokeWidth:2.2}),"Atualizar lista"]}),_.jsxs("button",{type:"button",className:"admin-secondary-btn",onClick:()=>void p(),children:[_.jsx(rI,{size:18,strokeWidth:2.2}),"Sair"]})]})]}),_.jsxs("section",{className:"admin-password-card",children:[_.jsxs("div",{children:[_.jsx("p",{className:"admin-dashboard-eyebrow",children:"Segurança"}),_.jsx("h2",{children:"Trocar senha do administrador"})]}),_.jsxs("div",{className:"admin-password-row",children:[_.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[_.jsx(iI,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"password",value:V,onChange:C=>q(C.target.value),placeholder:"Nova senha do administrador",disabled:s})]}),_.jsx("button",{type:"button",className:"admin-primary-btn",disabled:s||V.trim().length<6,onClick:()=>{f(V.trim()),q("")},children:"Atualizar senha"})]})]}),_.jsxs("section",{className:"admin-members-panel",children:[_.jsxs("div",{className:"admin-members-toolbar",children:[_.jsxs("div",{className:"admin-input-shell admin-inline-input",children:[_.jsx(g9,{size:18,strokeWidth:2.1}),_.jsx("input",{type:"search",value:g,onChange:C=>E(C.target.value),placeholder:"Buscar membro, e-mail ou nível"})]}),a?_.jsx("p",{className:"admin-inline-status",children:a}):null]}),t?_.jsx("p",{className:"admin-empty-state",children:"Carregando contas cadastradas..."}):null,!t&&pe.length===0?_.jsx("p",{className:"admin-empty-state",children:"Nenhuma conta encontrada para esse filtro."}):null,_.jsx("div",{className:"admin-member-list",children:pe.map(C=>{const R=C.accountLevel==="direction"?["",...Mj]:[""],N=C.accountLevel==="member"?nv:Array.from(new Set([...$f,...Oj])),D=fe(C.uid);return _.jsxs("article",{className:"admin-member-card",children:[_.jsxs("div",{className:"admin-member-topline",children:[_.jsxs("div",{children:[_.jsx("h2",{children:C.name||"Conta sem nome"}),_.jsx("p",{children:C.email})]}),_.jsxs("button",{type:"button",className:"admin-primary-btn",disabled:s||!D,onClick:async()=>{await u(C),A(I=>{const O={...I};return delete O[C.uid],O})},children:[_.jsx(f9,{size:16,strokeWidth:2.2}),D?"Salvar alterações":"Sem alterações"]})]}),_.jsxs("div",{className:"admin-form-grid",children:[_.jsxs("label",{children:[_.jsx("span",{children:"Nome"}),_.jsx("input",{value:C.name,onChange:I=>oe(C.uid,{name:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Telefone"}),_.jsx("input",{value:C.phone,onChange:I=>oe(C.uid,{phone:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cidade"}),_.jsx("input",{value:C.city,onChange:I=>oe(C.uid,{city:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Bairro"}),_.jsx("input",{value:C.neighborhood,onChange:I=>oe(C.uid,{neighborhood:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Rua"}),_.jsx("input",{value:C.street,onChange:I=>oe(C.uid,{street:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Número"}),_.jsx("input",{value:C.houseNumber,onChange:I=>oe(C.uid,{houseNumber:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Nível"}),_.jsx("div",{className:"admin-segmented-control",role:"group","aria-label":`Definir nível de ${C.name}`,children:[["member","Membro"],["direction","Direção"],["administration","Administração"]].map(([I,O])=>{const x=C.accountLevel===I;return _.jsx("button",{type:"button",className:`admin-segment-btn${x?" is-active":""}`,"aria-pressed":x,onClick:()=>oe(C.uid,{accountLevel:I}),children:O},I)})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cargo"}),_.jsx("div",{className:"admin-role-grid",role:"group","aria-label":`Definir cargo de ${C.name}`,children:R.map(I=>_.jsx("button",{type:"button",className:`admin-role-chip${(C.leadershipRole||"")===I?" is-active":""}`,"aria-pressed":(C.leadershipRole||"")===I,disabled:C.accountLevel!=="direction"&&I!=="",onClick:()=>oe(C.uid,{leadershipRole:I}),children:I||"Sem cargo"},I||"sem-cargo"))})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Gênero"}),_.jsx("input",{value:C.gender,onChange:I=>oe(C.uid,{gender:I.target.value})})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Timbre"}),_.jsx("input",{value:C.vocalRange,onChange:I=>oe(C.uid,{vocalRange:I.target.value})})]}),_.jsxs("label",{className:"admin-form-grid-span",children:[_.jsx("span",{children:"Disponibilidade"}),_.jsx("input",{value:C.availability,onChange:I=>oe(C.uid,{availability:I.target.value})})]})]}),_.jsxs("div",{className:"admin-permission-block",children:[_.jsxs("div",{className:"admin-permission-header",children:[_.jsx("p",{children:"Permissões ativas"}),_.jsx("button",{type:"button",className:"admin-secondary-btn admin-ghost-btn",onClick:()=>Oe(C.uid),children:"Restaurar padrão"})]}),_.jsx("div",{className:"admin-permission-grid",children:N.map(I=>_.jsxs("button",{type:"button",className:`admin-permission-item${C.permissions.includes(I)?" is-active":""}`,"aria-pressed":C.permissions.includes(I),onClick:()=>Ee(C.uid,I),children:[_.jsx("span",{className:"admin-permission-toggle","aria-hidden":"true"}),_.jsx("span",{children:I})]},I))})]})]},C.uid)})})]})]})})}function b9(n){return Fn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function A9(n){return Fn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M138.2 22.71c-25.5-.14-45.82 38.57-50.14 80.29H32v18h55.23c.07 6.1.49 12.1 1.33 18l17.34-18h25.5c-3.8 3.9-7.9 7.7-12.1 11.8l-31.24 32.5v-.1c-.53.6-1.1 1.2-1.64 1.8H32v18h38.17c-12.95 14.6-25.91 30.2-35.67 46H34v.8c-8.09 13.3-13.89 26.8-15.44 39.9-3.5 33.5 9.52 67.3 33.39 87.3H32v18h65.54c2.56.1 5.16.1 7.86 0h20.1c3.7 20.7 7 41.2 8.9 60 .4 3.6-6.6 10.6-10 11.4 0-22-17.8-39.9-39.84-39.9-21.9 0-39.8 17.9-39.8 39.9.1 20.1 15.2 35.8 35 39.5 41.84 7.7 78.34-17.9 72.44-53-2.9-19.1-6.2-38.5-9.7-57.9H480v-18H139.3c-2.9-15.5-5.8-30.9-8.5-46h37.3c-2.6 7.8-8.1 15.9-15.4 23l3.7 20.8c15.5-11.3 31.3-26.6 35.7-43.8H480v-18H192.9c-1.6-14.5-7.8-30.8-17.8-39.9-2.5-2.3-5.1-4.3-7.8-6.1H480v-18H116.8c-1.2-7.7-1.9-11.8-2.7-16.4l-15.54 15.1c.08.4.17.9.25 1.3H72.63c12.31-16.2 26.52-30.9 41.17-46H480v-18H130.9c10.5-11.3 20.9-23.2 30.7-36.4 2-2.8 3.8-6 5.3-9.6H480v-18H172.1c2.5-12.89 2.7-26.36 1.2-35.24-2.7-16.12-14.2-42.89-31.9-44.83-1.1-.14-2.1-.22-3.2-.22zm-5.5 37c6.9.1 14.4 5.8 15.6 15.95 1.3 11.18-.3 19.87-3.8 27.34h-36c3.4-20 11.2-42.23 24.2-43.29zM60.23 249h31.24c-13.45 12.5-19.59 29.6-18.93 46H42.79c.04-5.6.98-11.3 2.97-17 4.02-10.4 8.93-20 14.47-29zm63.57 11.3c11.8-.3 26.9 5.8 34 12.9 5.7 6.2 9.6 14.1 11.2 21.8h-41.5c-2.1-11.8-4.2-23.4-6-34.6.7-.1 1.5-.1 2.3-.1zm-19.4 6.5c1.5 8.9 3.3 18.4 5.2 28.2H90.63c.1-11 4.22-21.2 13.77-28.2zM45.75 313h30.39c2.69 7.2 6.83 13.9 12.42 19.4 5.1 5.2 15.14-2.7 10-8.6-1.93-3.5-3.54-7.1-4.81-10.8h19.35c3 15 6.1 30.5 9.1 46h-20v-.1c-25.44-3.3-48.49-22.3-56.45-45.9z"},child:[]}]})(n)}function C9(n){return Fn({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"},child:[]}]})(n)}function R9(n){return Fn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"M3 10h18"},child:[]},{tag:"path",attr:{d:"M8 14h.01"},child:[]},{tag:"path",attr:{d:"M12 14h.01"},child:[]},{tag:"path",attr:{d:"M16 14h.01"},child:[]},{tag:"path",attr:{d:"M8 18h.01"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M16 18h.01"},child:[]}]})(n)}const oI="/assets/LogoAD-DmeX6Ev_.png";function lI(){return Sy(Fs,"agendaEvents")}async function I9(){return(await Oy(lI())).docs.map(e=>e.data()).sort((e,t)=>`${e.scheduledDate}|${e.time}`.localeCompare(`${t.scheduledDate}|${t.time}`))}async function N9(n){const e=Ia(lI()),t={id:e.id,kind:n.kind,title:n.title,scheduledDate:n.scheduledDate,time:n.time,location:n.location,note:n.note,author:n.author,createdByUid:n.createdByUid,comments:[]};return await qf(e,{...t,createdAt:zs(),updatedAt:zs()}),(await Xl(e)).data()}async function x9(n,e){await ky(Ia(Fs,"agendaEvents",n),{comments:j4(e),updatedAt:zs()})}const D9=[],M9=[],yb=[];function xg(n){return`${n}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function O9(n){return n.trim().split(" ")[0]||n}function Nd(n){var t,s;const e=n.trim().split(/\s+/).filter(Boolean);return((((t=e[0])==null?void 0:t[0])||"V")+(((s=e[1])==null?void 0:s[0])||"")).toUpperCase()}function k9(n){return n.replace(/\D/g,"")}function cI(n){if(!n)return"Hoje";const e=new Date(`${n}T12:00:00`);return Number.isNaN(e.getTime())?n:new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(e)}function P9(n){const e=k9(n);return e?`https://wa.me/${e.startsWith("55")?e:`55${e}`}`:""}function L9(n,e,t){const s=t==="Feminino";return n==="Secretário"?s?"Secretária":"Secretário":n==="Vice-Secretário"?s?"Vice-Secretária":"Vice-Secretário":n==="Maestro"?s?"Maestra":"Maestro":e==="administration"?s?"Administradora":"Administrador":n||"Integrante"}function vb(n){return n.accountLevel==="administration"?"Administração":"Membro do vocal"}function Eb(n){switch(n){case"agenda":return"Buscar eventos, local ou observações";case"songs":return"Buscar músicas e observações";case"members":return"Buscar membro, cargo ou timbre";default:return"Buscar avisos, comentários ou informações"}}function Dg(n,e,t,s){return{name:(n==null?void 0:n.name)||e,phone:(n==null?void 0:n.phone)||"",cep:(n==null?void 0:n.cep)||"",neighborhood:(n==null?void 0:n.neighborhood)||"",city:(n==null?void 0:n.city)||"",street:(n==null?void 0:n.street)||"",houseNumber:(n==null?void 0:n.houseNumber)||"",maritalStatus:(n==null?void 0:n.maritalStatus)||"",gender:(n==null?void 0:n.gender)||t,vocalRange:(n==null?void 0:n.vocalRange)||s,availability:(n==null?void 0:n.availability)||""}}function V9(n){return{id:n.id,kind:n.kind,title:n.title,scheduledDate:n.scheduledDate,dateLabel:cI(n.scheduledDate),time:n.time,location:n.location,note:n.note,author:n.author,comments:Array.isArray(n.comments)?n.comments:[]}}function j9(n,e,t=!1){var s;return t&&n.length>0?`Diretório atualizado com ${n.length} membro(s).`:n.length===0?"Ainda não há perfis sincronizados no diretório interno.":n.length===1&&((s=n[0])==null?void 0:s.uid)===e?"Somente o seu perfil está sincronizado no diretório por enquanto.":""}async function Mg(){return(await I9()).map(V9)}async function Og(n,e){let t=!1,s=await Tg();return e&&!s.some(a=>a.uid===e.uid)&&(await jj(e),s=await Tg()),e&&Ar(e.accountLevel)==="administration"&&s.length<=1&&(await HR()).synced>0&&(t=!0,s=await Tg()),{members:s,statusMessage:j9(s,n,t)}}function U9({memberName:n,memberGender:e,memberVocalRange:t,accountLevel:s,leadershipRole:a,permissions:l,onBackToAuth:u}){var xo;const[f,p]=se.useState("home"),[g,E]=se.useState(""),[S,A]=se.useState(D9),[V,q]=se.useState(M9),[Z,Y]=se.useState({}),[pe,ue]=se.useState(!1),[oe,Ee]=se.useState("home"),[Oe,fe]=se.useState(!1),[C,R]=se.useState(!1),[N,D]=se.useState(!1),[I,O]=se.useState(!1),[x,Me]=se.useState({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:"Ensaio"}),[Ie,B]=se.useState(null),[re,_e]=se.useState(()=>Dg(null,n,e,t)),[Be,Fe]=se.useState(""),[P,J]=se.useState(null),[ce,de]=se.useState(""),[be,Ce]=se.useState(!1),[Ae,mt]=se.useState(!1),[nt,Pt]=se.useState(""),[ci,ui]=se.useState(!1),[hi,Ut]=se.useState(""),[Ri,Yn]=se.useState(!1),[U,k]=se.useState([]),[G,le]=se.useState(!1),[ae,qe]=se.useState(!1),[pt,Ue]=se.useState(""),[lt,Qn]=se.useState(""),pn=se.useRef(null),Ht=se.useDeferredValue(g.trim().toLowerCase()),Gt=Nn.currentUser,Xt=(Gt==null?void 0:Gt.uid)||"",Ii=Ar((Ie==null?void 0:Ie.accountLevel)||s),di=(Ie==null?void 0:Ie.leadershipRole)||a,Zt=(Ie==null?void 0:Ie.gender)||e,gt=(Ie==null?void 0:Ie.name)||n,wn=(Ie==null?void 0:Ie.vocalRange)||t,_t=L9(di,Ii,Zt),Io=O9(gt),$i=pr((Ie==null?void 0:Ie.permissions)??l,Ii),Ni=Ii==="administration"||di==="Secretário",On=Ii==="administration"||di==="Maestro"||di==="Secretário"||di==="Vice-Secretário"||$i.includes("Postar avisos"),xi=On||$i.includes("Mexer na agenda"),zt=On||$i.includes("Comentar")||$i.includes("Comentar em agenda e avisos");se.useEffect(()=>{let K=!0;async function De(){if(Xt){le(!0),ui(!0),Pt(""),Ut(""),Ue("");try{const it=await WR(Xt),[Mt,jt]=await Promise.allSettled([Mg(),Og(Xt,it)]);if(!K)return;B(it),_e(Dg(it,n,e,t)),Fe((it==null?void 0:it.avatarDataUrl)||(Gt==null?void 0:Gt.photoURL)||""),J(null),de(""),Ce(!1),Mt.status==="fulfilled"?q(Mt.value):Ut("Não foi possível carregar a agenda agora."),jt.status==="fulfilled"?(k(jt.value.members),Ue(jt.value.statusMessage)):Ue("Não foi possível carregar a lista de membros agora.")}catch{if(!K)return;Pt("Não foi possível carregar seus dados completos agora.")}finally{K&&(le(!1),ui(!1))}}}return De(),()=>{K=!1}},[Xt,Gt==null?void 0:Gt.photoURL,e,n,t]);const fi=se.useMemo(()=>Ht?S.filter(K=>[K.category,K.title,K.content,K.author,...K.comments.map(De=>De.text)].join(" ").toLowerCase().includes(Ht)):S,[Ht,S]),$n=se.useMemo(()=>Ht?V.filter(K=>[K.kind,K.title,K.location,K.note,K.dateLabel,...K.comments.map(De=>De.text)].join(" ").toLowerCase().includes(Ht)):V,[V,Ht]),Lt=se.useMemo(()=>Ht?U.filter(K=>[K.name,K.vocalRange,K.leadershipRole,K.accountLevel,K.phone].join(" ").toLowerCase().includes(Ht)):U,[Ht,U]);se.useEffect(()=>{if(!Lt.length){Qn("");return}Lt.some(K=>K.uid===lt)||Qn(Lt[0].uid)},[Lt,lt]);const Jt=Lt.find(K=>K.uid===lt)||null,Di=$n[0]??V[0],qn=Be||(Gt==null?void 0:Gt.photoURL)||(Ie==null?void 0:Ie.avatarDataUrl)||"",ps=se.useMemo(()=>V.slice(0,3),[V]);se.useEffect(()=>{var K;E(""),(K=pn.current)==null||K.scrollTo({top:0,behavior:"smooth"})},[f]);const Rr=K=>{p(K)},qs=()=>{if(f==="agenda"&&xi)Ee("agenda");else if(On)Ee("home");else if(xi)Ee("agenda");else return;Me({category:"Aviso",title:"",content:"",date:"",time:"",location:"",imageUrl:"",kind:f==="agenda"?"Ensaio":"Aviso"}),ue(!0)},Hn=K=>{const{name:De,value:it}=K.target;Me(Mt=>({...Mt,[De]:it}))},Na=async()=>{if(!(!x.title.trim()||!x.content.trim()))if(oe==="agenda"){if(!Xt){Ut("Não foi possível identificar sua sessão para salvar a agenda.");return}Yn(!0);try{await N9({kind:x.kind||"Ensaio",title:x.title.trim(),scheduledDate:x.date,time:x.time.trim()||"19:30",location:x.location.trim()||"Local a definir",note:x.content.trim(),author:gt,createdByUid:Xt});const K=await Mg();q(K),Ut("Compromisso salvo com sucesso na agenda."),p("agenda"),ue(!1)}catch{Ut("Não foi possível salvar esse compromisso no Firestore agora.")}finally{Yn(!1)}}else{const K={id:xg("post"),category:x.category||"Aviso",title:x.title.trim(),content:x.content.trim(),author:gt,role:_t,dateLabel:x.date?cI(x.date):"Agora mesmo",imageUrl:x.imageUrl.trim(),comments:[]};A(De=>[K,...De]),p("home"),ue(!1)}},Hs=K=>{var it;const De=(it=Z[K])==null?void 0:it.trim();De&&(A(Mt=>Mt.map(jt=>jt.id===K?{...jt,comments:[...jt.comments,{id:xg("post-comment"),author:gt,role:_t,text:De,createdAt:"agora",createdByUid:Xt}]}:jt)),Y(Mt=>({...Mt,[K]:""})))},Xi=async K=>{var it;const De=(it=Z[K])==null?void 0:it.trim();if(!(!De||!Xt))try{await x9(K,{id:xg("agenda-comment"),author:gt,role:_t,text:De,createdAt:"agora",createdByUid:Xt});const Mt=await Mg();q(Mt),Y(jt=>({...jt,[K]:""})),Ut("Comentário enviado para a agenda.")}catch{Ut("Não foi possível comentar nesse compromisso agora.")}},No=async()=>{if(g.trim()){Lt.length>0?(Qn(Lt[0].uid),Ue(`${Lt.length} membro(s) encontrado(s).`)):Ue("Nenhum membro encontrado para essa busca.");return}qe(!0);try{const K=await Og(Xt,Ie);k(K.members),Ue(K.statusMessage||"Diretório atualizado.")}catch{Ue("Não foi possível atualizar a lista de membros agora.")}finally{qe(!1)}},Vt=K=>{const{name:De,value:it}=K.target;_e(Mt=>({...Mt,[De]:it}))},mi=async K=>{const De=await $R(K);de(De),Ce(!0)},Bt=K=>{var it;const De=(it=K.target.files)==null?void 0:it[0];K.target.value="",De&&mi(De).catch(Mt=>{Pt(Mt instanceof Error?Mt.message:"Não foi possível abrir o editor da foto agora.")})},en=async()=>{if(!Gt){Pt("Não foi possível identificar a sua sessão.");return}mt(!0),Pt("");try{const K=await qj(Gt,re,P,Ni),De=await Og(Xt,K);B(K),_e(Dg(K,n,e,t)),Fe(K.avatarDataUrl||""),J(null),de(""),Ce(!1),k(De.members),Ue(De.statusMessage),Pt("Perfil atualizado com sucesso.")}catch(K){Pt(K instanceof Error?K.message:"Não foi possível atualizar seu perfil agora.")}finally{mt(!1)}},Mi=async K=>{if(!K.trim()){Ue("Esse membro ainda não informou telefone.");return}try{await navigator.clipboard.writeText(K),Ue("Telefone copiado para a área de transferência.")}catch{Ue("Não foi possível copiar o telefone agora.")}},Gs=(K,De,it)=>zt?_.jsxs("div",{className:"home-comment-composer",children:[_.jsx("input",{type:"text",value:Z[K]||"",onChange:Mt=>Y(jt=>({...jt,[K]:Mt.target.value})),placeholder:De}),_.jsx("button",{type:"button",className:"home-inline-action",onClick:it,children:"Comentar"})]}):_.jsx("p",{className:"home-comment-disabled",children:"Comentários liberados apenas para perfis com acesso a interação interna."});return _.jsxs("div",{className:"page page-home",children:[_.jsx("div",{className:"home-surface"}),_.jsxs("div",{className:"home-modern-shell",children:[_.jsxs("header",{className:"home-modern-header",children:[_.jsx("div",{className:"home-brand-mark",children:_.jsx("img",{src:oI,alt:"Logo do vocal"})}),_.jsxs("div",{className:"home-header-main",children:[_.jsxs("div",{className:"home-header-row",children:[_.jsxs("div",{className:"home-identity-copy",children:[_.jsx("p",{className:"home-card-eyebrow",children:"Ministério em movimento"}),_.jsxs("h1",{children:["Bem-vindo, ",Io]})]}),_.jsxs("div",{className:"home-header-actions",children:[_.jsxs("button",{className:"home-header-icon-btn",type:"button","aria-label":"Abrir notificações",onClick:()=>D(!0),children:[_.jsx(jU,{size:18}),_.jsx("span",{className:"home-header-badge","aria-hidden":"true"})]}),_.jsx("button",{className:"home-profile-trigger",type:"button","aria-label":"Abrir perfil do usuário",onClick:()=>O(!0),children:qn?_.jsx("img",{src:qn,alt:gt}):_.jsx("span",{children:Nd(gt)})})]})]}),_.jsxs("div",{className:"home-chip-row",children:[_.jsx("span",{className:"home-role-chip",children:_t}),wn?_.jsxs("span",{className:"home-chip",children:["Timbre ",wn]}):null]})]})]}),f!=="members"?_.jsxs(_.Fragment,{children:[_.jsxs("section",{className:"home-hero-card",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-hero-kicker",children:"Painel do vocal"}),_.jsx("h2",{children:"Home e Agenda no mesmo fluxo"}),_.jsx("p",{children:"Veja avisos, publique recados, acompanhe eventos e responda rapidamente quando não puder comparecer."})]}),_.jsxs("button",{type:"button",className:"login-help-btn home-help-btn",onClick:()=>R(!0),children:[_.jsx(PU,{size:18}),"AJUDA"]})]}),_.jsx("section",{className:"home-toolbar",children:_.jsxs("label",{className:"home-search-shell","aria-label":"Buscar na tela atual",children:[_.jsx(pb,{size:18}),_.jsx("input",{type:"search",value:g,onChange:K=>E(K.target.value),placeholder:Eb(f)})]})}),_.jsxs("section",{className:"home-summary-strip",children:[_.jsxs("article",{className:"home-summary-card modern",children:[_.jsx("span",{children:"Próximo compromisso"}),_.jsx("strong",{children:(Di==null?void 0:Di.title)||"Sem evento próximo"}),_.jsx("p",{children:Di?`${Di.dateLabel} • ${Di.time} • ${Di.location}`:"Ainda não existe ensaio, culto ou saída cadastrada."})]}),_.jsxs("article",{className:"home-summary-card modern",children:[_.jsx("span",{children:"Movimento do mural"}),_.jsxs("strong",{children:[S.length," publicações"]}),_.jsx("p",{children:((xo=S[0])==null?void 0:xo.title)||"Nenhum aviso ou publicação criada até agora."})]})]})]}):null,_.jsxs("main",{ref:pn,className:"home-main-panel",children:[f==="home"?_.jsxs("div",{className:"home-feed-stack",children:[fi.map(K=>_.jsxs("article",{className:"home-feed-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:K.category}),_.jsx("strong",{children:K.dateLabel})]}),_.jsx("h3",{children:K.title}),_.jsx("p",{children:K.content}),K.imageUrl?_.jsx("div",{className:"home-feed-media",children:_.jsx("img",{src:K.imageUrl,alt:K.title})}):null,_.jsxs("div",{className:"home-post-author",children:[_.jsx("span",{children:K.author}),_.jsx("small",{children:K.role})]}),_.jsx("div",{className:"home-comment-list",children:K.comments.map(De=>_.jsxs("div",{className:"home-comment-card",children:[_.jsxs("div",{children:[_.jsx("strong",{children:De.author}),_.jsx("small",{children:De.role})]}),_.jsx("p",{children:De.text}),_.jsx("span",{children:De.createdAt})]},De.id))}),Gs(K.id,"Responder ao aviso ou adicionar informação...",()=>Hs(K.id))]},K.id)),fi.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Mural vazio"}),_.jsxs("p",{children:["Ainda não há avisos, imagens ou informações publicados.",On?" Use o botão + para criar a primeira publicação.":" Quando a liderança publicar algo, vai aparecer aqui."]})]}):null]}):null,f==="agenda"?_.jsxs("div",{className:"home-agenda-stack",children:[hi?_.jsx("p",{className:"home-inline-status",children:hi}):null,ci?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Carregando agenda"}),_.jsx("p",{children:"Buscando compromissos salvos no Firestore."})]}):null,$n.map(K=>_.jsxs("article",{className:"home-agenda-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:K.kind}),_.jsx("strong",{children:K.dateLabel})]}),_.jsx("h3",{children:K.title}),_.jsxs("div",{className:"home-agenda-meta",children:[_.jsx("span",{children:K.time}),_.jsx("span",{children:K.location}),_.jsxs("span",{children:["Lançado por ",K.author]})]}),_.jsx("p",{children:K.note}),_.jsx("div",{className:"home-comment-list",children:K.comments.map(De=>_.jsxs("div",{className:"home-comment-card agenda",children:[_.jsxs("div",{children:[_.jsx("strong",{children:De.author}),_.jsx("small",{children:De.role})]}),_.jsx("p",{children:De.text}),_.jsx("span",{children:De.createdAt})]},De.id))}),Gs(K.id,"Comentar ausência, atraso, carona ou observação...",()=>Xi(K.id))]},K.id)),!ci&&$n.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Agenda vazia"}),_.jsxs("p",{children:["Nenhum ensaio, saída ou culto foi cadastrado.",xi?" Use o botão + para lançar o primeiro compromisso.":" Quando a agenda for atualizada, os eventos aparecerão aqui."]})]}):null]}):null,f==="songs"?_.jsxs("section",{className:"home-song-grid",children:[yb.map(K=>_.jsxs("article",{className:"home-song-card",children:[_.jsxs("div",{className:"home-card-topline",children:[_.jsx("span",{children:"Repertório"}),_.jsxs("strong",{children:["Tonalidade ",K.tone]})]}),_.jsx("h3",{children:K.title}),_.jsx("p",{children:K.note})]},K.id)),yb.length===0?_.jsxs("article",{className:"home-empty-card",children:[_.jsx("h3",{children:"Repertório vazio"}),_.jsx("p",{children:"As músicas ainda não foram lançadas aqui."})]}):null]}):null,f==="members"?_.jsxs("section",{className:"home-profile-panel",children:[_.jsxs("article",{className:"home-profile-card home-profile-directory-toolbar",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Membros"}),_.jsx("h3",{children:"Membros do vocal"}),_.jsx("p",{children:"Consulte o contato interno, localize integrantes e acompanhe os dados liberados para organização da equipe."})]}),_.jsxs("label",{className:"home-search-shell home-profile-search-shell","aria-label":"Buscar membros do vocal",children:[_.jsx("input",{type:"search",value:g,onChange:K=>E(K.target.value),placeholder:Eb("members")}),_.jsx("button",{type:"button",className:"home-search-trigger",onClick:No,"aria-label":"Buscar ou atualizar membros",disabled:ae,"aria-busy":ae,children:_.jsx(pb,{size:18})})]})]}),_.jsxs("article",{className:"home-profile-card home-directory-card",children:[_.jsxs("div",{className:"home-directory-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Contato interno"}),_.jsx("h3",{children:"Membros do vocal"}),_.jsx("p",{children:"Lista limitada a dados úteis para contato e organização, sem expor informações sensíveis."})]}),_.jsxs("strong",{children:[Lt.length," membros"]})]}),pt?_.jsx("p",{className:"home-inline-status",children:pt}):null,_.jsxs("div",{className:"home-directory-layout",children:[_.jsxs("div",{className:"home-directory-list",children:[G?_.jsx("p",{className:"home-directory-empty",children:"Carregando membros..."}):null,!G&&Lt.length===0?_.jsx("p",{className:"home-directory-empty",children:"Nenhum membro encontrado para este filtro."}):null,Lt.map(K=>_.jsxs("button",{type:"button",className:`home-directory-item${lt===K.uid?" is-active":""}`,onClick:()=>Qn(K.uid),children:[_.jsx("div",{className:"home-directory-avatar",children:K.avatarDataUrl?_.jsx("img",{src:K.avatarDataUrl,alt:K.name}):_.jsx("span",{children:Nd(K.name)})}),_.jsxs("div",{className:"home-directory-copy",children:[_.jsx("strong",{children:K.name}),_.jsx("span",{children:vb(K)}),K.uid===Xt?_.jsx("small",{children:"Seu perfil"}):null,K.vocalRange?_.jsxs("small",{children:["Timbre ",K.vocalRange]}):null]})]},K.uid))]}),_.jsx("div",{className:"home-directory-detail",children:Jt?_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"home-directory-detail-header",children:[_.jsx("div",{className:"home-directory-avatar large",children:Jt.avatarDataUrl?_.jsx("img",{src:Jt.avatarDataUrl,alt:Jt.name}):_.jsx("span",{children:Nd(Jt.name)})}),_.jsxs("div",{children:[_.jsx("h4",{children:Jt.name}),_.jsx("p",{children:vb(Jt)}),_.jsxs("div",{className:"home-chip-row",children:[Jt.vocalRange?_.jsxs("span",{className:"home-chip",children:["Timbre ",Jt.vocalRange]}):null,_.jsx("span",{className:"home-chip",children:"Contato interno"})]})]})]}),_.jsxs("div",{className:"home-directory-contact-row",children:[_.jsxs("div",{className:"home-directory-contact-card",children:[_.jsx(OU,{size:16}),_.jsx("span",{children:Jt.phone||"Telefone não informado"})]}),_.jsxs("div",{className:"home-directory-contact-actions",children:[_.jsxs("a",{className:`home-whatsapp-btn${Jt.phoneNormalized?"":" is-disabled"}`,href:Jt.phoneNormalized?P9(Jt.phoneNormalized):void 0,target:"_blank",rel:"noreferrer","aria-disabled":!Jt.phoneNormalized,onClick:K=>{Jt.phoneNormalized||K.preventDefault()},children:[_.jsx(b9,{size:18}),"WhatsApp"]}),_.jsxs("button",{type:"button",className:"home-secondary-action compact",onClick:()=>Mi(Jt.phone),children:[_.jsx(LU,{size:15}),"Copiar número"]})]})]}),_.jsx("p",{className:"home-directory-safety-note",children:"Endereço completo e outros dados privados não aparecem aqui por segurança. Este espaço existe só para facilitar contato rápido e organização do ministério."})]}):_.jsx("p",{className:"home-directory-empty",children:"Selecione um membro para ver o contato disponível."})})]})]})]}):null]}),On||xi?_.jsx("button",{className:"home-fab-action",type:"button","aria-label":f==="agenda"?"Criar evento":"Criar publicação",onClick:qs,children:_.jsx(MU,{size:24})}):null,_.jsxs("nav",{className:"home-bottom-nav","aria-label":"Navegação principal",children:[_.jsxs("button",{className:`nav-icon-btn${f==="home"?" is-active":""}`,type:"button","aria-label":"Home",onClick:()=>Rr("home"),children:[_.jsx(kU,{size:22}),_.jsx("span",{children:"Home"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="agenda"?" is-active":""}`,type:"button","aria-label":"Agenda",onClick:()=>Rr("agenda"),children:[_.jsx(R9,{size:22}),_.jsx("span",{children:"Agenda"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="songs"?" is-active":""}`,type:"button","aria-label":"Músicas",onClick:()=>Rr("songs"),children:[_.jsx(A9,{size:24}),_.jsx("span",{children:"Músicas"})]}),_.jsxs("button",{className:`nav-icon-btn${f==="members"?" is-active":""}`,type:"button","aria-label":"Membros",onClick:()=>Rr("members"),children:[_.jsx(IU,{size:22}),_.jsx("span",{children:"Membros"})]})]}),_.jsx(JR,{open:be,imageSrc:ce,title:"Ajuste sua foto de perfil",description:"Corte, aproxime, afaste e ajuste a aparência antes de atualizar o seu perfil.",onClose:()=>{Ce(!1),de("")},onApply:async K=>{Fe(K),J(K),Ce(!1),de(""),Pt("")}})]}),pe?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>ue(!1),children:_.jsxs("div",{className:"home-modal-card",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Criação rápida"}),_.jsx("h3",{children:oe==="agenda"?"Novo evento da agenda":"Nova publicação do mural"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>ue(!1),children:"Fechar"})]}),oe==="home"?_.jsxs("div",{className:"home-modal-form",children:[_.jsx("div",{className:"home-pill-row",children:["Aviso","Informação","Imagem"].map(K=>_.jsx("button",{type:"button",className:`home-pill-btn${x.category===K?" is-active":""}`,onClick:()=>Me(De=>({...De,category:K})),children:K},K))}),_.jsx("input",{name:"title",value:x.title,onChange:Hn,placeholder:"Título da publicação"}),_.jsx("textarea",{name:"content",value:x.content,onChange:Hn,placeholder:"Escreva o aviso, a informação ou instrução para o vocal",rows:5}),_.jsx("input",{name:"date",type:"date",value:x.date,onChange:Hn}),_.jsx("input",{name:"imageUrl",value:x.imageUrl,onChange:Hn,placeholder:"URL de imagem opcional"})]}):_.jsxs("div",{className:"home-modal-form",children:[_.jsx("div",{className:"home-pill-row",children:["Ensaio","Saída","Culto"].map(K=>_.jsx("button",{type:"button",className:`home-pill-btn${x.kind===K?" is-active":""}`,onClick:()=>Me(De=>({...De,kind:K})),children:K},K))}),_.jsx("input",{name:"title",value:x.title,onChange:Hn,placeholder:"Título do compromisso"}),_.jsx("textarea",{name:"content",value:x.content,onChange:Hn,placeholder:"Detalhes, observações e instruções para a equipe",rows:5}),_.jsx("input",{name:"date",type:"date",value:x.date,onChange:Hn}),_.jsx("input",{name:"time",type:"time",value:x.time,onChange:Hn}),_.jsx("input",{name:"location",value:x.location,onChange:Hn,placeholder:"Local do ensaio, saída ou culto"})]}),_.jsxs("div",{className:"home-modal-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>ue(!1),children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action",onClick:()=>void Na(),disabled:Ri,children:Ri?"Salvando...":"Publicar"})]})]})}):null,C?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>R(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Ajuda rápida"}),_.jsx("h3",{children:"Como usar essa tela"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>R(!1),children:"Fechar"})]}),_.jsxs("div",{className:"home-help-list",children:[_.jsx("p",{children:"No Home você vê avisos, imagens e recados internos."}),_.jsx("p",{children:"Na Agenda você acompanha ensaios, saídas e horários com espaço para justificar ausência."}),_.jsx("p",{children:"No ícone do perfil você atualiza seus dados. Na aba Membros você encontra os contatos internos liberados para o ministério."})]})]})}):null,I?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>O(!1),children:_.jsxs("div",{className:"home-modal-card home-profile-modal-card",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Meu perfil"}),_.jsx("h3",{children:"Editar cadastro"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>O(!1),children:"Fechar"})]}),_.jsxs("section",{className:"home-profile-panel",children:[_.jsxs("article",{className:"home-profile-card home-profile-summary-card",children:[_.jsxs("div",{className:"home-profile-summary",children:[_.jsxs("label",{className:"home-profile-avatar-editor",htmlFor:"profile-avatar-input",children:[qn?_.jsx("img",{src:qn,alt:gt}):_.jsx("span",{children:Nd(gt)}),_.jsx("span",{className:"home-profile-avatar-badge",children:_.jsx(VU,{size:14})})]}),_.jsxs("div",{className:"home-profile-summary-copy",children:[_.jsxs("div",{className:"home-card-topline compact",children:[_.jsx("span",{children:"Meu perfil"}),_.jsx("strong",{children:_t})]}),_.jsx("h3",{children:gt}),_.jsx("p",{children:"Atualize foto, telefone, endereço e dados essenciais do seu cadastro."}),_.jsxs("div",{className:"home-chip-row",children:[wn?_.jsxs("span",{className:"home-chip",children:["Timbre ",wn]}):null,_.jsx("span",{className:"home-chip",children:_t})]})]})]}),_.jsx("input",{id:"profile-avatar-input",className:"hidden-input",type:"file",accept:"image/*",onChange:Bt}),_.jsxs("div",{className:"home-profile-inline-actions",children:[_.jsx("label",{htmlFor:"profile-avatar-input",className:"home-secondary-action home-inline-label-btn",children:"Ajustar foto"}),_.jsxs("button",{type:"button",className:"home-secondary-action",onClick:()=>fe(!0),children:[_.jsx(C9,{size:16}),"Sair"]})]}),nt?_.jsx("p",{className:"home-inline-status",children:nt}):null]}),_.jsxs("article",{className:"home-profile-card home-profile-edit-card",children:[_.jsxs("div",{className:"home-card-topline compact",children:[_.jsx("span",{children:"Dados editáveis"}),_.jsx("strong",{children:Ni?"Edição ampliada":"Edição básica"})]}),Ni?null:_.jsx("p",{className:"home-profile-note",children:"Nome, estado civil, gênero e timbre são ajustados apenas por administração e secretaria."}),_.jsxs("div",{className:"home-profile-form-grid",children:[_.jsxs("label",{children:[_.jsx("span",{children:"Nome"}),_.jsx("input",{name:"name",value:re.name,onChange:Vt,disabled:!Ni||Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Telefone"}),_.jsx("input",{name:"phone",value:re.phone,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"CEP"}),_.jsx("input",{name:"cep",value:re.cep,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Bairro"}),_.jsx("input",{name:"neighborhood",value:re.neighborhood,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Cidade"}),_.jsx("input",{name:"city",value:re.city,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Rua"}),_.jsx("input",{name:"street",value:re.street,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Número"}),_.jsx("input",{name:"houseNumber",value:re.houseNumber,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Disponibilidade"}),_.jsx("input",{name:"availability",value:re.availability,onChange:Vt,disabled:Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Estado civil"}),_.jsx("input",{name:"maritalStatus",value:re.maritalStatus,onChange:Vt,disabled:!Ni||Ae})]}),_.jsxs("label",{children:[_.jsx("span",{children:"Gênero"}),_.jsx("input",{name:"gender",value:re.gender,onChange:Vt,disabled:!Ni||Ae})]}),_.jsxs("label",{className:"home-profile-form-span",children:[_.jsx("span",{children:"Timbre"}),_.jsx("input",{name:"vocalRange",value:re.vocalRange,onChange:Vt,disabled:!Ni||Ae})]})]}),_.jsx("div",{className:"home-profile-footer",children:_.jsx("button",{type:"button",className:"home-primary-action",onClick:en,disabled:Ae,children:"Salvar alterações"})})]})]})]})}):null,N?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>D(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[_.jsxs("div",{className:"home-modal-header",children:[_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Notificações"}),_.jsx("h3",{children:"Central de avisos"})]}),_.jsx("button",{type:"button",className:"home-modal-close",onClick:()=>D(!1),children:"Fechar"})]}),_.jsx("div",{className:"home-help-list",children:ps.length>0?ps.map(K=>_.jsxs("p",{children:[K.kind,": ",K.title," em ",K.dateLabel," às ",K.time,"."]},K.id)):_.jsxs(_.Fragment,{children:[_.jsx("p",{children:"Aqui vão aparecer novos avisos, publicações e alterações importantes da agenda."}),_.jsx("p",{children:"No momento, não há notificações novas para mostrar."})]})})]})}):null,Oe?_.jsx("div",{className:"home-modal-backdrop",role:"presentation",onClick:()=>fe(!1),children:_.jsxs("div",{className:"home-modal-card compact",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[_.jsx("div",{className:"home-modal-header",children:_.jsxs("div",{children:[_.jsx("p",{className:"home-card-eyebrow",children:"Encerrar sessão"}),_.jsx("h3",{children:"Deseja realmente sair?"})]})}),_.jsx("p",{className:"home-logout-copy",children:"Você vai voltar para a tela de autenticação e precisará entrar novamente para continuar."}),_.jsxs("div",{className:"home-modal-actions",children:[_.jsx("button",{type:"button",className:"home-secondary-action",onClick:()=>fe(!1),children:"Cancelar"}),_.jsx("button",{type:"button",className:"home-primary-action danger",onClick:()=>{fe(!1),u()},children:"Sair agora"})]})]})}):null]})}const Tb="/assets/Login_Logo-BH4BrKrM.png";function z9(){return _.jsx("span",{className:"google-mark","aria-hidden":"true",children:"G"})}function B9({form:n,errors:e,onFieldChange:t,onErrorsChange:s,onLogin:a,onGoogleLogin:l,onOpenRegister:u,isSubmitting:f=!1,statusMessage:p=""}){const g=E=>{E.preventDefault();const S={};n.loginEmail.trim()||(S.loginEmail="Informe o e-mail ou telefone."),n.loginPassword.trim()||(S.loginPassword="Informe sua senha."),s(S),!(Object.keys(S).length>0)&&a()};return _.jsxs("div",{className:"page page-login",children:[_.jsx("img",{className:"page-bg login-bg-image",src:sv,alt:""}),_.jsx("div",{className:"login-bg-overlay"}),_.jsxs("div",{className:"login-content",children:[_.jsx("header",{className:"login-brand-block",children:_.jsx("div",{className:"login-brand-logo-wrap",style:{"--login-logo-image":`url(${Tb})`},children:_.jsx("img",{className:"login-brand-logo",src:Tb,alt:"Vocal Salvos por Cristo"})})}),_.jsxs("form",{className:"login-card",onSubmit:g,children:[_.jsxs("div",{className:"login-card-header",children:[_.jsx("h1",{children:"Entrar"}),_.jsx("p",{children:"Entre com seu e-mail ou com Google. Se faltar algo no perfil, você confirma no cadastro."})]}),p?_.jsx("p",{className:"login-status-message",children:p}):null,_.jsxs("label",{className:`login-input-group ${e.loginEmail?"is-error":""}`,children:[_.jsx("span",{className:"login-input-label",children:"Email"}),_.jsxs("div",{className:"login-input-shell",children:[_.jsx(sI,{size:18,strokeWidth:2.2}),_.jsx("input",{type:"email",name:"loginEmail",value:n.loginEmail,onChange:t,placeholder:"Email cadastrado",autoComplete:"email",disabled:f})]}),e.loginEmail?_.jsx("p",{className:"login-field-error",children:e.loginEmail}):null]}),_.jsxs("label",{className:`login-input-group ${e.loginPassword?"is-error":""}`,children:[_.jsx("span",{className:"login-input-label",children:"Senha"}),_.jsxs("div",{className:"login-input-shell",children:[_.jsx(b_,{size:18,strokeWidth:2.2}),_.jsx("input",{type:"password",name:"loginPassword",value:n.loginPassword,onChange:t,placeholder:"Senha",autoComplete:"current-password",disabled:f})]}),e.loginPassword?_.jsx("p",{className:"login-field-error",children:e.loginPassword}):null]}),_.jsxs("div",{className:"login-actions",children:[_.jsxs("button",{type:"submit",className:"login-submit-btn",disabled:f,children:[f?"Entrando...":"Entrar no painel",_.jsx(tI,{size:18,strokeWidth:2.5})]}),_.jsxs("div",{className:"login-divider","aria-hidden":"true",children:[_.jsx("span",{}),_.jsx("small",{children:"ou"}),_.jsx("span",{})]}),_.jsxs("button",{type:"button",className:"login-google-btn",onClick:()=>{l()},disabled:f,children:[_.jsx(z9,{}),f?"Aguarde...":"Continuar com Google"]}),_.jsx("button",{type:"button",className:"login-register-btn-modern",onClick:u,disabled:f,children:"Criar conta"})]})]}),_.jsxs("button",{type:"button",className:"login-help-btn",disabled:f,children:[_.jsx(nI,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})}var Fd={exports:{}},xd={exports:{}},Sb;function F9(){return Sb||(Sb=1,(function(n,e){var t=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof s<"u")return s;throw new Error("unable to locate global object")},s=t();n.exports=e=s.fetch,s.fetch&&(e.default=s.fetch.bind(s)),e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response})(xd,xd.exports)),xd.exports}var q9=Fd.exports,wb;function H9(){return wb||(wb=1,(function(n,e){(function(t,s){n.exports=s(F9())})(q9,function(t){function s(U){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k})(U)}function a(U,k){if(!(U instanceof k))throw new TypeError("Cannot call a class as a function")}function l(U,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");U.prototype=Object.create(k&&k.prototype,{constructor:{value:U,writable:!0,configurable:!0}}),k&&f(U,k)}function u(U){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)})(U)}function f(U,k){return(f=Object.setPrototypeOf||function(G,le){return G.__proto__=le,G})(U,k)}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function g(U,k,G){return(g=p()?Reflect.construct:function(le,ae,qe){var pt=[null];pt.push.apply(pt,ae);var Ue=new(Function.bind.apply(le,pt));return qe&&f(Ue,qe.prototype),Ue}).apply(null,arguments)}function E(U){var k=typeof Map=="function"?new Map:void 0;return(E=function(G){if(G===null||(le=G,Function.toString.call(le).indexOf("[native code]")===-1))return G;var le;if(typeof G!="function")throw new TypeError("Super expression must either be null or a function");if(k!==void 0){if(k.has(G))return k.get(G);k.set(G,ae)}function ae(){return g(G,arguments,u(this).constructor)}return ae.prototype=Object.create(G.prototype,{constructor:{value:ae,enumerable:!1,writable:!0,configurable:!0}}),f(ae,G)})(U)}function S(U,k){return!k||typeof k!="object"&&typeof k!="function"?(function(G){if(G===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return G})(U):k}function A(U){var k=p();return function(){var G,le=u(U);return S(this,k?(G=u(this).constructor,Reflect.construct(le,arguments,G)):le.apply(this,arguments))}}function V(U){return(function(k){if(Array.isArray(k))return Z(k)})(U)||(function(k){if(typeof Symbol<"u"&&Symbol.iterator in Object(k))return Array.from(k)})(U)||q(U)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function q(U,k){if(U){if(typeof U=="string")return Z(U,k);var G=Object.prototype.toString.call(U).slice(8,-1);return G==="Object"&&U.constructor&&(G=U.constructor.name),G==="Map"||G==="Set"?Array.from(U):G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)?Z(U,k):void 0}}function Z(U,k){(k==null||k>U.length)&&(k=U.length);for(var G=0,le=new Array(k);G<k;G++)le[G]=U[G];return le}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var Y=(function(){l(k,E(Error));var U=A(k);function k(){var G,le=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},ae=le.message,qe=le.type,pt=le.errors;return a(this,k),(G=U.call(this)).name="CepPromiseError",G.message=ae,G.type=qe,G.errors=pt,G}return k})(),pe=(function(){l(k,E(Error));var U=A(k);function k(){var G,le=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},ae=le.message,qe=le.service;return a(this,k),(G=U.call(this)).name="ServiceError",G.message=ae,G.service=qe,G}return k})();function ue(U,k){var G={method:"POST",body:`<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
  <soapenv:Header />
  <soapenv:Body>
    <cli:consultaCEP>
      <cep>`.concat(U,`</cep>
    </cli:consultaCEP>
  </soapenv:Body>
</soapenv:Envelope>`),headers:{"Content-Type":"text/xml;charset=UTF-8","cache-control":"no-cache"},timeout:k.timeout||3e4};return t("https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente",G).then(oe).catch(R)}function oe(U){return U.ok?U.text().then(Ee).then(C):U.text().then(Oe).then(fe)}function Ee(U){try{var k;return((k=U.replace(/\r?\n|\r/g,"").match(/<return>(.*)<\/return>/)[0])!==null&&k!==void 0?k:"").replace("<return>","").replace("</return>","").split(/</).reduce(function(G,le){var ae=le.split(">");return 1<ae.length&&ae[1].length&&(G[ae[0]]=ae[1]),G},{})}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function Oe(U){try{var k;return((k=U.match(/<faultstring>(.*)<\/faultstring>/)[0])!==null&&k!==void 0?k:"").replace("<faultstring>","").replace("</faultstring>","")}catch{throw new Error("Não foi possível interpretar o XML de resposta.")}}function fe(U){throw new Error(U)}function C(U){return{cep:U.cep,state:U.uf,city:U.cidade,neighborhood:U.bairro,street:U.end,service:"correios"}}function R(U){var k=new pe({message:U.message,service:"correios"});throw U.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço dos Correios."),k}function N(U,k){var G={method:"POST",mode:"cors",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8",Referer:"https://buscacepinter.correios.com.br/app/endereco/index.php","Referrer-Policy":"strict-origin-when-cross-origin"},body:"endereco=".concat(U,"&tipoCEP=ALL"),timeout:k.timeout||3e4};return t("https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php",G).then(D).then(I).catch(O)}function D(U){return U.json().then(function(k){if(k.total===0||k.erro||k.dados[0].cep==="")throw new Error("CEP não encontrado na base dos Correios.");return k})}function I(U){var k=U.dados[0];return{cep:k.cep,state:k.uf,city:k.localidade,neighborhood:k.bairro,street:k.logradouroDNEC,service:"correios-alt"}}function O(U){var k=new pe({message:U.message,service:"correios-alt"});throw U.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço dos Correios Alt."),k}function x(U,k){var G="https://viacep.com.br/ws/".concat(U,"/json/"),le={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:k.timeout||3e4};return typeof window>"u"&&(le.headers["user-agent"]="cep-promise"),t(G,le).then(Me).then(Ie).then(B).catch(re)}function Me(U){if(U.ok)return U.json();throw Error("Erro ao se conectar com o serviço ViaCEP.")}function Ie(U){if(U.erro===!0)throw new Error("CEP não encontrado na base do ViaCEP.");return U}function B(U){return{cep:U.cep.replace("-",""),state:U.uf,city:U.localidade,neighborhood:U.bairro,street:U.logradouro,service:"viacep"}}function re(U){var k=new pe({message:U.message,service:"viacep"});throw U.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço ViaCEP."),k}function _e(U,k){var G="".concat(U.slice(0,5),"-").concat(U.slice(5)),le="https://cdn.apicep.com/file/apicep/".concat(G,".json"),ae={method:"GET",mode:"cors",headers:{accept:"application/json"},timeout:k.timeout||3e4};return t(le,ae).then(Be).then(Fe).then(P).catch(J)}function Be(U){if(U.ok)return U.json();throw Error("Erro ao se conectar com o serviço WideNet.")}function Fe(U){if(U.ok===!1||U.status!==200)throw new Error("CEP não encontrado na base do WideNet.");return U}function P(U){return{cep:U.code.replace("-",""),state:U.state,city:U.city,neighborhood:U.district,street:U.address,service:"widenet"}}function J(U){var k=new pe({message:U.message,service:"widenet"});throw U.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço WideNet."),k}function ce(U,k){var G="https://brasilapi.com.br/api/cep/v1/".concat(U),le={method:"GET",mode:"cors",headers:{"content-type":"application/json;charset=utf-8"},timeout:k.timeout||3e4};return t(G,le).then(de).then(be).catch(Ce)}function de(U){if(U.ok===!1||U.status!==200)throw new Error("CEP não encontrado na base do BrasilAPI.");return U.json()}function be(U){return{cep:U.cep,state:U.state,city:U.city,neighborhood:U.neighborhood,street:U.street,service:"brasilapi"}}function Ce(U){var k=new pe({message:U.message,service:"brasilapi"});throw U.name==="FetchError"&&(k.message="Erro ao se conectar com o serviço BrasilAPI."),k}function Ae(){return typeof window<"u"?{viacep:x,widenet:_e,brasilapi:ce}:{correios:ue,"correios-alt":N,viacep:x,widenet:_e,brasilapi:ce}}function mt(U){return new Promise(function(k,G){return Promise.resolve(U).then(G,k)})}Promise.any=function(U){return mt(Promise.all(V(U).map(mt)))};var nt=Promise,Pt=8;function ci(U){var k=s(U);if(k==="number"||k==="string")return U;throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"Você deve chamar o construtor utilizando uma String ou um Number.",service:"cep_validation"}]})}function ui(U){return U.toString().replace(/\D+/g,"")}function hi(U){return"0".repeat(Pt-U.length)+U}function Ut(U){if(U.length<=Pt)return U;throw new Y({message:"CEP deve conter exatamente ".concat(Pt," caracteres."),type:"validation_error",errors:[{message:"CEP informado possui mais do que ".concat(Pt," caracteres."),service:"cep_validation"}]})}function Ri(U){throw U.length!==void 0?new Y({message:"Todos os serviços de CEP retornaram erro.",type:"service_error",errors:U}):U}function Yn(U){var k=U.message,G=U.type,le=U.errors;throw new Y({message:k,type:G,errors:le})}return function(U){var k=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return nt.resolve(U).then(ci).then(function(G){return k.providers=k.providers?k.providers:[],(function(le){var ae=Object.keys(Ae());if(!Array.isArray(le))throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:"O parâmetro providers deve ser uma lista.",service:"providers_validation"}]});var qe,pt=(function(lt,Qn){var pn;if(typeof Symbol>"u"||lt[Symbol.iterator]==null){if(Array.isArray(lt)||(pn=q(lt))||Qn){pn&&(lt=pn);var Ht=0,Gt=function(){};return{s:Gt,n:function(){return Ht>=lt.length?{done:!0}:{done:!1,value:lt[Ht++]}},e:function(Zt){throw Zt},f:Gt}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xt,Ii=!0,di=!1;return{s:function(){pn=lt[Symbol.iterator]()},n:function(){var Zt=pn.next();return Ii=Zt.done,Zt},e:function(Zt){di=!0,Xt=Zt},f:function(){try{Ii||pn.return==null||pn.return()}finally{if(di)throw Xt}}}})(le);try{for(pt.s();!(qe=pt.n()).done;){var Ue=qe.value;if(!ae.includes(Ue))throw new Y({message:"Erro ao inicializar a instância do CepPromise.",type:"validation_error",errors:[{message:'O provider "'.concat(Ue,'" é inválido. Os providers disponíveis são: ["').concat(ae.join('", "'),'"].'),service:"providers_validation"}]})}}catch(lt){pt.e(lt)}finally{pt.f()}})(k.providers),G}).then(ui).then(Ut).then(hi).then(function(G){return le=G,ae=k,qe=Ae(),ae.providers.length!==0?nt.any(ae.providers.map(function(pt){return qe[pt](le,ae)})):nt.any(Object.values(qe).map(function(pt){return pt(le,ae)}));var le,ae,qe}).catch(Ri).catch(Yn)}})})(Fd)),Fd.exports}var G9=H9();const K9=A_(G9);function xs({label:n,name:e,type:t="text",value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g,icon:E,error:S}){return _.jsxs("label",{className:"register-field-group",children:[_.jsx("span",{className:"register-field-label",children:n}),_.jsxs("span",{className:`register-field-shell ${S?"is-error":""}`,children:[_.jsx(E,{size:18,strokeWidth:2.2}),_.jsx("input",{type:t,name:e,value:s,onChange:a,placeholder:l,autoComplete:u,inputMode:f,maxLength:p,disabled:g})]}),S?_.jsx("span",{className:"register-field-error",children:S}):null]})}function W9(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function bb(n){const e=n.replace(/\D/g,"").slice(0,8);return e.length<=5?e:`${e.slice(0,5)}-${e.slice(5)}`}function kg({label:n,name:e,value:t,onChange:s,options:a,placeholder:l,icon:u,error:f}){return _.jsxs("label",{className:"register-field-group",children:[_.jsx("span",{className:"register-field-label",children:n}),_.jsxs("span",{className:`register-field-shell register-select-shell ${f?"is-error":""}`,children:[_.jsx(u,{size:18,strokeWidth:2.2}),_.jsxs("select",{name:e,value:t,onChange:s,className:t?"has-value":"",children:[_.jsx("option",{value:"",children:l}),a.map(p=>_.jsx("option",{value:p,children:p},p))]}),_.jsx(e9,{size:18,strokeWidth:2.3})]}),f?_.jsx("span",{className:"register-field-error",children:f}):null]})}function Y9(n,e,t=!1){const s={};return n===0&&(e.name.trim()||(s.name="Informe o nome completo."),e.phone.trim()||(s.phone="Informe um telefone para contato."),e.email.trim()||(s.email="Informe um e-mail válido."),t||(e.password.trim()||(s.password="Crie uma senha."),e.password.length>0&&e.password.length<6&&(s.password="A senha precisa ter pelo menos 6 caracteres."),e.confirmPassword!==e.password&&(s.confirmPassword="As senhas precisam ser iguais."))),n===1&&(e.cep.trim()||(s.cep="Informe o CEP."),e.neighborhood.trim()||(s.neighborhood="Informe o bairro."),e.city.trim()||(s.city="Informe a cidade."),e.street.trim()||(s.street="Informe a rua."),e.houseNumber.trim()||(s.houseNumber="Informe o número da casa.")),n===2&&(e.maritalStatus||(s.maritalStatus="Selecione o estado civil."),e.gender||(s.gender="Selecione o gênero."),e.vocalRange||(s.vocalRange="Selecione o timbre vocal.")),s}function Q9({form:n,errors:e,registerStep:t,avatarPreview:s,onFieldChange:a,onErrorsChange:l,onStepChange:u,onAvatarChange:f,onOpenLogin:p,onRegisterFinish:g,isSubmitting:E=!1,statusMessage:S="",profileCompletionMode:A=!1,googleProfileMode:V=!1}){const q=au[t],[Z,Y]=se.useState(""),[pe,ue]=se.useState(!1),oe=se.useRef(""),Ee=(D,I)=>{a({target:{name:D,value:I},currentTarget:{name:D,value:I}})},Oe=async D=>{if(!(D.length!==8||oe.current===D)){oe.current=D,ue(!0),Y("Buscando endereço pelo CEP...");try{const I=await K9(D);Ee("cep",bb(D)),Ee("neighborhood",I.neighborhood||""),Ee("city",I.city||""),Ee("street",I.street||""),l(O=>({...O,cep:"",neighborhood:"",city:"",street:""})),Y("Endereço preenchido automaticamente. Confirme os dados antes de continuar.")}catch{oe.current="",l(I=>({...I,cep:"Não encontramos esse CEP. Confira os números digitados."})),Y("CEP não localizado. Você ainda pode preencher o endereço manualmente.")}finally{ue(!1)}}},fe=D=>{if(D.target.name==="phone"){const I=W9(D.target.value);a({...D,target:{...D.target,name:D.target.name,value:I},currentTarget:{...D.currentTarget,name:D.target.name,value:I}});return}if(D.target.name==="cep"){const I=bb(D.target.value),O=I.replace(/\D/g,"");a({...D,target:{...D.target,name:D.target.name,value:I},currentTarget:{...D.currentTarget,name:D.target.name,value:I}}),O.length<8&&(oe.current="",Y(""),ue(!1)),O.length===8&&Oe(O);return}a(D)},C=()=>{if(t===0){p();return}u(t-1)},R=()=>{const D=Y9(t,n,A);if(l(D),!(Object.keys(D).length>0)){if(t<au.length-1){u(t+1);return}g(n.name||"Novo membro")}},N=()=>t===0?_.jsxs(_.Fragment,{children:[A?_.jsxs("div",{className:"register-prefill-note",children:[_.jsx("strong",{children:V?"Conta Google conectada":"Conta autenticada"}),_.jsx("p",{children:"Revise os dados preenchidos automaticamente e complete o que estiver faltando antes de finalizar."})]}):null,_.jsx(xs,{label:"Nome",name:"name",value:n.name,onChange:fe,placeholder:"Seu nome completo",autoComplete:"name",icon:_b,error:e.name}),_.jsx(xs,{label:"Telefone",name:"phone",type:"tel",value:n.phone,onChange:fe,placeholder:"(00) 0 0000-0000",autoComplete:"tel",inputMode:"numeric",maxLength:16,icon:h9,error:e.phone}),_.jsx(xs,{label:"E-mail",name:"email",type:"email",value:n.email,onChange:fe,placeholder:"voce@email.com",autoComplete:"email",disabled:A,icon:sI,error:e.email}),A?null:_.jsxs(_.Fragment,{children:[_.jsx(xs,{label:_.jsxs(_.Fragment,{children:["Senha ",_.jsx("span",{className:"required-star",children:"*"})]}),name:"password",type:"password",value:n.password,onChange:fe,placeholder:"Mín. 6 caracteres",autoComplete:"new-password",icon:b_,error:e.password}),_.jsx(xs,{label:"Confirmar senha",name:"confirmPassword",type:"password",value:n.confirmPassword,onChange:fe,placeholder:"Repita a senha",autoComplete:"new-password",icon:b_,error:e.confirmPassword})]})]}):t===1?_.jsxs(_.Fragment,{children:[_.jsx(xs,{label:"CEP",name:"cep",value:n.cep,onChange:fe,placeholder:"00000-000",inputMode:"numeric",maxLength:9,icon:Ng,error:e.cep}),Z?_.jsx("p",{className:`register-field-note ${pe?"is-loading":""}`,children:Z}):null,_.jsx(xs,{label:"Bairro",name:"neighborhood",value:n.neighborhood,onChange:fe,placeholder:"Seu bairro",icon:Ng,error:e.neighborhood}),_.jsx(xs,{label:"Cidade",name:"city",value:n.city,onChange:fe,placeholder:"Cidade",icon:$U,error:e.city}),_.jsx(xs,{label:"Rua",name:"street",value:n.street,onChange:fe,placeholder:"Rua e complemento",icon:Ng,error:e.street}),_.jsx(xs,{label:"Número da casa",name:"houseNumber",value:n.houseNumber,onChange:fe,placeholder:"Número da casa",icon:i9,error:e.houseNumber})]}):_.jsxs(_.Fragment,{children:[_.jsx(kg,{label:"Estado civil",name:"maritalStatus",value:n.maritalStatus,onChange:fe,placeholder:"Selecione",options:["Solteiro(a)","Casado(a)","Divorciado(a)","Viúvo(a)"],icon:aI,error:e.maritalStatus}),_.jsx(kg,{label:"Gênero",name:"gender",value:n.gender,onChange:fe,placeholder:"Selecione",options:["Masculino","Feminino","Outro"],icon:_b,error:e.gender}),_.jsx(kg,{label:_.jsxs(_.Fragment,{children:["Timbre vocal ",_.jsx("span",{className:"required-star",children:"*"})]}),name:"vocalRange",value:n.vocalRange,onChange:fe,placeholder:"Selecione o timbre",options:["Soprano","Mezzo-soprano","Contralto","Tenor","Barítono","Baixo"],icon:c9,error:e.vocalRange}),_.jsxs("label",{className:"register-field-group register-avatar-field",children:[_.jsx("span",{className:"register-field-label",children:"Foto de perfil"}),_.jsxs("span",{className:"register-avatar-shell",children:[_.jsx("span",{className:"register-avatar-preview",children:s?_.jsx("img",{src:s,alt:"Avatar do integrante"}):_.jsx("span",{className:"register-avatar-fallback",children:n.name?n.name.slice(0,1).toUpperCase():"V"})}),_.jsxs("span",{className:"register-avatar-copy",children:[_.jsx("strong",{children:"Adicione uma foto"}),_.jsx("small",{children:"Escolha uma imagem clara e ajuste o enquadramento antes de salvar."})]}),_.jsxs("span",{className:"register-avatar-action",children:[_.jsx(ZU,{size:18,strokeWidth:2.2}),"Escolher e ajustar"]})]}),_.jsx("input",{type:"file",accept:"image/*",className:"hidden-input",onChange:f})]})]});return _.jsxs("div",{className:"page page-register page-register-modern",children:[_.jsx("img",{className:"page-bg register-bg-image",src:sv,alt:""}),_.jsx("div",{className:"register-bg-overlay"}),_.jsxs("div",{className:"register-content",children:[_.jsxs("div",{className:"register-topbar",children:[_.jsx("button",{className:"register-back-btn",type:"button",onClick:C,"aria-label":"Voltar",children:_.jsx(WU,{size:20,strokeWidth:2.4})}),_.jsxs("div",{className:"register-heading",children:[_.jsx("span",{className:"register-eyebrow",children:"Criar conta"}),_.jsx("h1",{children:q.title}),_.jsx("p",{children:q.description})]})]}),_.jsx("div",{className:"register-steps-bar",children:au.map((D,I)=>_.jsxs("div",{className:`register-step-pill ${I===t?"is-active":""} ${I<t?"is-done":""}`,children:[_.jsx("span",{children:I+1}),_.jsx("small",{children:D.id})]},D.id))}),_.jsx("div",{className:"register-form-scroll",children:_.jsxs("div",{className:"register-form-stack",children:[S?_.jsx("p",{className:"register-status-message",children:S}):null,N()]})}),_.jsxs("div",{className:"register-bottom-bar",children:[_.jsxs("span",{className:"register-progress-copy",children:["Etapa ",t+1," de ",au.length]}),_.jsxs("div",{className:"register-actions-row",children:[t>0?_.jsx("button",{type:"button",className:"register-secondary-btn",onClick:C,disabled:E,children:"Voltar"}):null,_.jsxs("button",{type:"button",className:"register-primary-btn",onClick:R,disabled:E,children:[E?"Salvando...":t===au.length-1?"Finalizar cadastro":"Continuar",_.jsx(tI,{size:18,strokeWidth:2.4})]})]}),_.jsxs("div",{className:"register-help-stack",children:[_.jsx("img",{className:"register-ad-logo",src:oI,alt:"Assembleia de Deus"}),_.jsxs("button",{type:"button",className:"register-help-btn",disabled:E,children:[_.jsx(nI,{size:18,strokeWidth:2.2}),"Ajuda"]})]})]})]})]})}const $9="/acesso-interno-admin";function lu(n){switch(n){case"auth/email-already-in-use":return"Esse e-mail já está em uso.";case"auth/invalid-email":return"Informe um e-mail válido.";case"auth/user-disabled":return"Essa conta está desativada.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"E-mail ou senha inválidos.";case"auth/weak-password":return"A senha precisa ter pelo menos 6 caracteres.";case"auth/network-request-failed":return"Falha de conexão. Verifique sua internet e tente novamente.";case"auth/popup-closed-by-user":return"O login com Google foi fechado antes da conclusão.";case"auth/cancelled-popup-request":return"Já existe uma janela de login aberta. Conclua ou feche a anterior.";case"auth/account-exists-with-different-credential":return"Esse e-mail já está vinculado a outro método de acesso.";default:return"Não foi possível concluir a autenticação agora."}}function X9(n){const e=n.replace(/\D/g,"").slice(0,11);return e.length===0?"":e.length<=2?`(${e}`:e.length<=3?`(${e.slice(0,2)}) ${e.slice(2)}`:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3)}`:`(${e.slice(0,2)}) ${e.slice(2,3)} ${e.slice(3,7)}-${e.slice(7)}`}function Z9(){var n;return(n=Nn.currentUser)==null?void 0:n.providerData.some(e=>e.providerId==="google.com")}function J9(n){return n===BR?FR:n}function e6(){const n=typeof window<"u"&&window.location.pathname.toLowerCase().startsWith($9),[e,t]=se.useState("login"),[s,a]=se.useState(0),[l,u]=se.useState("Maria Clara"),[f,p]=se.useState(""),[g,E]=se.useState(""),[S,A]=se.useState("member"),[V,q]=se.useState(""),[Z,Y]=se.useState([]),[pe,ue]=se.useState(""),[oe,Ee]=se.useState(null),[Oe,fe]=se.useState(""),[C,R]=se.useState(!1),[N,D]=se.useState({...Eg}),[I,O]=se.useState({}),[x,Me]=se.useState(!1),[Ie,B]=se.useState(""),[re,_e]=se.useState(!1),[Be,Fe]=se.useState([]),[P,J]=se.useState(!1),ce=async()=>{J(!0);try{const k=await YR();Fe(k);const G=await HR();G.failed>0?B(`Lista carregada. ${G.synced} perfil(is) sincronizado(s) no diretório e ${G.failed} com pendência.`):B("")}catch{B("Não foi possível carregar a lista de membros agora.")}finally{J(!1)}},de=k=>{const G=Nn.currentUser,le=G!=null&&G.phoneNumber?X9(G.phoneNumber):"";D(ae=>({...ae,loginEmail:(G==null?void 0:G.email)||ae.loginEmail,name:(k==null?void 0:k.name)??ae.name,phone:(k==null?void 0:k.phone)??le??ae.phone,email:(k==null?void 0:k.email)??(G==null?void 0:G.email)??ae.email,password:k==null?void 0:k.password,confirmPassword:k==null?void 0:k.confirmPassword,cep:(k==null?void 0:k.cep)??ae.cep,neighborhood:(k==null?void 0:k.neighborhood)??ae.neighborhood,city:(k==null?void 0:k.city)??ae.city,street:(k==null?void 0:k.street)??ae.street,houseNumber:(k==null?void 0:k.houseNumber)??ae.houseNumber,maritalStatus:(k==null?void 0:k.maritalStatus)??ae.maritalStatus,gender:(k==null?void 0:k.gender)??ae.gender,vocalRange:(k==null?void 0:k.vocalRange)??ae.vocalRange,availability:(k==null?void 0:k.availability)??ae.availability})),ue((G==null?void 0:G.photoURL)||""),Ee(null),fe(""),R(!1)};se.useEffect(()=>{const k=zD(Nn,async G=>{var le;if(!G){_e(!1),u("Maria Clara"),p(""),E(""),A("member"),q(""),Y([]),Fe([]),t("login"),Ee(null),fe(""),R(!1);return}try{const ae=await WR(G.uid),qe=await G.getIdTokenResult(),pt=Ar(typeof qe.claims.accountLevel=="string"?qe.claims.accountLevel:ae==null?void 0:ae.accountLevel),Ue=typeof qe.claims.leadershipRole=="string"?qe.claims.leadershipRole:(ae==null?void 0:ae.leadershipRole)||"";if(!ae){const Qn=G.providerData.some(pn=>pn.providerId==="google.com");_e(!0),a(0),O({}),de({name:G.displayName||"",email:G.email||"",password:"",confirmPassword:""}),B(Qn?"Encontramos nome, e-mail e foto da sua conta Google. Confirme e complete o restante do cadastro.":"Sua conta foi autenticada, mas o perfil do ministério ainda precisa ser concluído."),se.startTransition(()=>{t("register")});return}const lt=ae.name||G.displayName||((le=G.email)==null?void 0:le.split("@")[0])||"Integrante do vocal";_e(!1),u(lt),p(ae.gender||""),E(ae.vocalRange||""),A(pt),q(Ue),Y(pr(ae.permissions,pt)),ue(ae.avatarDataUrl||G.photoURL||""),Ee(null),fe(""),R(!1),B(""),n&&pt==="administration"&&await ce(),se.startTransition(()=>{t(n&&pt==="administration"?"admin":"home")})}catch{B("Sua sessão foi iniciada, mas o perfil não pôde ser carregado agora.")}});return()=>{k()}},[n]);const be=k=>{const{name:G,value:le}=k.target;D(ae=>({...ae,[G]:le})),O(ae=>({...ae,[G]:""}))},Ce=()=>{if(Nn.currentUser){ig(Nn).finally(()=>{_e(!1),ue(""),Ee(null),fe(""),R(!1),Y([]),D({...Eg}),se.startTransition(()=>{t("login"),B(""),O({})})});return}_e(!1),se.startTransition(()=>{t("login"),B(""),O({})})},Ae=()=>{_e(!1),Ee(null),fe(""),R(!1),se.startTransition(()=>{t("register"),a(0),B(""),O({})})},mt=async()=>{Me(!0),B("");try{await ig(Nn),_e(!1),p(""),E(""),A("member"),q(""),Y([]),Fe([]),Ee(null),fe(""),R(!1),D(k=>({...k,loginPassword:""})),a(0),O({})}catch{B("Não foi possível encerrar a sessão agora.")}finally{Me(!1)}},nt=async k=>{const G=await $R(k);fe(G),R(!0)},Pt=k=>{var le;const G=(le=k.target.files)==null?void 0:le[0];k.target.value="",G&&nt(G).catch(ae=>{B(ae instanceof Error?ae.message:"Não foi possível abrir o editor de foto agora.")})},ci=async()=>{const k=N.loginEmail.trim().toLowerCase();if(!k.includes("@")){O(G=>({...G,loginEmail:"Use o e-mail cadastrado para entrar com Firebase."}));return}Me(!0),B("");try{await iS(Nn,k,N.loginPassword),D(G=>({...G,loginPassword:""}))}catch(G){const le=G instanceof Error&&"code"in G?String(G.code):"",ae=lu(le);O(qe=>({...qe,loginPassword:ae}))}finally{Me(!1)}},ui=async()=>{const k=new hr;k.setCustomParameters({prompt:"select_account"}),Me(!0),B(""),O({});try{await rM(Nn,k),D(G=>({...G,loginPassword:""}))}catch(G){const le=G instanceof Error&&"code"in G?String(G.code):"";B(lu(le))}finally{Me(!1)}},hi=async()=>{Me(!0),B("");try{const k=Nn.currentUser,G=re&&k?k:(await nS(Nn,N.email.trim().toLowerCase(),N.password)).user,le=await Fj(G,N,oe),ae=await G.getIdTokenResult(),qe=Ar(typeof ae.claims.accountLevel=="string"?ae.claims.accountLevel:le.accountLevel);_e(!1),u(le.name),p(le.gender||""),E(le.vocalRange||""),A(qe),q(typeof ae.claims.leadershipRole=="string"?ae.claims.leadershipRole:le.leadershipRole||""),Y(pr(le.permissions,qe)),ue(le.avatarDataUrl||""),Ee(null),fe(""),R(!1),B(""),D({...Eg,loginEmail:le.email}),se.startTransition(()=>{t(n&&qe==="administration"?"admin":"home")})}catch(k){const G=k instanceof Error&&"code"in k?String(k.code):"",le=lu(G);G==="auth/email-already-in-use"||G==="auth/invalid-email"?O(ae=>({...ae,email:le})):G==="auth/weak-password"?O(ae=>({...ae,password:le})):B(le)}finally{Me(!1)}},Ut=async(k,G)=>{if(Nn.currentUser&&await ig(Nn),k!==tb){B("Usuário administrativo inválido.");return}Me(!0),B("");const le=J9(G);try{const ae=await iS(Nn,nb,le),qe=await ib(ae.user);u(qe.name),A("administration"),Y(pr(qe.permissions,"administration")),await ce(),se.startTransition(()=>{t("admin")})}catch(ae){const qe=ae instanceof Error&&"code"in ae?String(ae.code):"";if(!(k===tb&&G===BR&&(qe==="auth/user-not-found"||qe==="auth/invalid-credential"))){B(lu(qe)),Me(!1);return}try{const Ue=await nS(Nn,nb,FR),lt=await ib(Ue.user);u(lt.name),A("administration"),Y(pr(lt.permissions,"administration")),await ce(),B("Conta administrativa inicial criada. Troque a senha assim que entrar."),se.startTransition(()=>{t("admin")})}catch(Ue){const lt=Ue instanceof Error&&"code"in Ue?String(Ue.code):"";B(lt==="auth/email-already-in-use"?"A conta administrativa já existe. Use a senha atual definida para esse acesso.":lu(lt))}}finally{Me(!1)}},Ri=async k=>{const G=Nn.currentUser;if(!G){B("A sessão administrativa não está ativa.");return}Me(!0),B("");try{await PD(G,k),B("Senha administrativa atualizada com sucesso.")}catch{B("Não foi possível atualizar a senha agora. Faça login novamente e tente outra vez.")}finally{Me(!1)}},Yn=async k=>{Me(!0),B("");try{await Hj(k.uid,k),await ce(),B("Conta atualizada com sucesso.")}catch{B("Não foi possível salvar as alterações desse membro.")}finally{Me(!1)}};let U;return n&&e!=="register"?e==="admin"&&S==="administration"?U=_.jsx(w9,{adminName:l,members:Be,isLoading:P,isSaving:x,statusMessage:Ie,onRefresh:ce,onSaveMember:Yn,onChangeAdminPassword:Ri,onSignOut:mt}):U=_.jsx(T9,{onAdminLogin:Ut,isSubmitting:x,statusMessage:Ie}):e==="home"?U=_.jsx(U9,{memberName:l,memberGender:f,memberVocalRange:g,accountLevel:S,leadershipRole:V,permissions:Z,onBackToAuth:mt}):e==="register"?U=_.jsx(Q9,{form:N,errors:I,registerStep:s,avatarPreview:pe,onFieldChange:be,onErrorsChange:O,onStepChange:a,onAvatarChange:Pt,onOpenLogin:Ce,onRegisterFinish:hi,isSubmitting:x,statusMessage:Ie,profileCompletionMode:re,googleProfileMode:!!(re&&Z9())}):U=_.jsx(B9,{form:N,errors:I,onFieldChange:be,onErrorsChange:O,onLogin:ci,onGoogleLogin:ui,onOpenRegister:Ae,isSubmitting:x,statusMessage:Ie}),_.jsxs("div",{className:"app-shell",children:[U,_.jsx(JR,{open:C,imageSrc:Oe,title:"Ajuste sua foto",description:"Corte, aproxime, gire e ajuste a imagem antes de salvar no cadastro.",onClose:()=>{R(!1),fe("")},onApply:async k=>{ue(k),Ee(k),R(!1),fe(""),B("")}})]})}function t6(){return _.jsx(e6,{})}const uI=document.getElementById("root");if(!uI)throw new Error("Root element #root was not found.");$2.createRoot(uI).render(_.jsx(se.StrictMode,{children:_.jsx(t6,{})}));
