(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Yu={exports:{}},ja={},qu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function yv(){if(wm)return xt;wm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function y(U,q,Ae){this.props=U,this.context=q,this.refs=C,this.updater=Ae||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function N(U,q,Ae){this.props=U,this.context=q,this.refs=C,this.updater=Ae||M}var L=N.prototype=new S;L.constructor=N,w(L,y.prototype),L.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function A(U,q,Ae){var We,Ze={},re=null,me=null;if(q!=null)for(We in q.ref!==void 0&&(me=q.ref),q.key!==void 0&&(re=""+q.key),q)F.call(q,We)&&!j.hasOwnProperty(We)&&(Ze[We]=q[We]);var pe=arguments.length-2;if(pe===1)Ze.children=Ae;else if(1<pe){for(var Fe=Array(pe),Ve=0;Ve<pe;Ve++)Fe[Ve]=arguments[Ve+2];Ze.children=Fe}if(U&&U.defaultProps)for(We in pe=U.defaultProps,pe)Ze[We]===void 0&&(Ze[We]=pe[We]);return{$$typeof:s,type:U,key:re,ref:me,props:Ze,_owner:O.current}}function R(U,q){return{$$typeof:s,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function fe(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return q[Ae]})}var J=/\/+/g;function $(U,q){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):q.toString(36)}function le(U,q,Ae,We,Ze){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(re){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case s:case e:me=!0}}if(me)return me=U,Ze=Ze(me),U=We===""?"."+$(me,0):We,D(Ze)?(Ae="",U!=null&&(Ae=U.replace(J,"$&/")+"/"),le(Ze,q,Ae,"",function(Ve){return Ve})):Ze!=null&&(fe(Ze)&&(Ze=R(Ze,Ae+(!Ze.key||me&&me.key===Ze.key?"":(""+Ze.key).replace(J,"$&/")+"/")+U)),q.push(Ze)),1;if(me=0,We=We===""?".":We+":",D(U))for(var pe=0;pe<U.length;pe++){re=U[pe];var Fe=We+$(re,pe);me+=le(re,q,Ae,Fe,Ze)}else if(Fe=g(U),typeof Fe=="function")for(U=Fe.call(U),pe=0;!(re=U.next()).done;)re=re.value,Fe=We+$(re,pe++),me+=le(re,q,Ae,Fe,Ze);else if(re==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return me}function ee(U,q,Ae){if(U==null)return U;var We=[],Ze=0;return le(U,We,"","",function(re){return q.call(Ae,re,Ze++)}),We}function ie(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},Q={transition:null},oe={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Q,ReactCurrentOwner:O};function ce(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ee,forEach:function(U,q,Ae){ee(U,function(){q.apply(this,arguments)},Ae)},count:function(U){var q=0;return ee(U,function(){q++}),q},toArray:function(U){return ee(U,function(q){return q})||[]},only:function(U){if(!fe(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=N,xt.StrictMode=r,xt.Suspense=p,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,xt.act=ce,xt.cloneElement=function(U,q,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=w({},U.props),Ze=U.key,re=U.ref,me=U._owner;if(q!=null){if(q.ref!==void 0&&(re=q.ref,me=O.current),q.key!==void 0&&(Ze=""+q.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(Fe in q)F.call(q,Fe)&&!j.hasOwnProperty(Fe)&&(We[Fe]=q[Fe]===void 0&&pe!==void 0?pe[Fe]:q[Fe])}var Fe=arguments.length-2;if(Fe===1)We.children=Ae;else if(1<Fe){pe=Array(Fe);for(var Ve=0;Ve<Fe;Ve++)pe[Ve]=arguments[Ve+2];We.children=pe}return{$$typeof:s,type:U.type,key:Ze,ref:re,props:We,_owner:me}},xt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},xt.createElement=A,xt.createFactory=function(U){var q=A.bind(null,U);return q.type=U,q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(U){return{$$typeof:f,render:U}},xt.isValidElement=fe,xt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},xt.memo=function(U,q){return{$$typeof:m,type:U,compare:q===void 0?null:q}},xt.startTransition=function(U){var q=Q.transition;Q.transition={};try{U()}finally{Q.transition=q}},xt.unstable_act=ce,xt.useCallback=function(U,q){return W.current.useCallback(U,q)},xt.useContext=function(U){return W.current.useContext(U)},xt.useDebugValue=function(){},xt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},xt.useEffect=function(U,q){return W.current.useEffect(U,q)},xt.useId=function(){return W.current.useId()},xt.useImperativeHandle=function(U,q,Ae){return W.current.useImperativeHandle(U,q,Ae)},xt.useInsertionEffect=function(U,q){return W.current.useInsertionEffect(U,q)},xt.useLayoutEffect=function(U,q){return W.current.useLayoutEffect(U,q)},xt.useMemo=function(U,q){return W.current.useMemo(U,q)},xt.useReducer=function(U,q,Ae){return W.current.useReducer(U,q,Ae)},xt.useRef=function(U){return W.current.useRef(U)},xt.useState=function(U){return W.current.useState(U)},xt.useSyncExternalStore=function(U,q,Ae){return W.current.useSyncExternalStore(U,q,Ae)},xt.useTransition=function(){return W.current.useTransition()},xt.version="18.3.1",xt}var bm;function Uf(){return bm||(bm=1,qu.exports=yv()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function Sv(){if(Tm)return ja;Tm=1;var s=Uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,_={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:g,ref:M,props:_,_owner:o.current}}return ja.Fragment=t,ja.jsx=d,ja.jsxs=d,ja}var Am;function Mv(){return Am||(Am=1,Yu.exports=Sv()),Yu.exports}var u=Mv(),xl={},Ku={exports:{}},kn={},Qu={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Ev(){return Cm||(Cm=1,(function(s){function e(Q,oe){var ce=Q.length;Q.push(oe);e:for(;0<ce;){var U=ce-1>>>1,q=Q[U];if(0<o(q,oe))Q[U]=oe,Q[ce]=q,ce=U;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var oe=Q[0],ce=Q.pop();if(ce!==oe){Q[0]=ce;e:for(var U=0,q=Q.length,Ae=q>>>1;U<Ae;){var We=2*(U+1)-1,Ze=Q[We],re=We+1,me=Q[re];if(0>o(Ze,ce))re<q&&0>o(me,Ze)?(Q[U]=me,Q[re]=ce,U=re):(Q[U]=Ze,Q[We]=ce,U=We);else if(re<q&&0>o(me,ce))Q[U]=me,Q[re]=ce,U=re;else break e}}return oe}function o(Q,oe){var ce=Q.sortIndex-oe.sortIndex;return ce!==0?ce:Q.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,_=null,g=3,M=!1,w=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Q){for(var oe=t(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=Q)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=t(m)}}function D(Q){if(C=!1,L(Q),!w)if(t(p)!==null)w=!0,ie(F);else{var oe=t(m);oe!==null&&W(D,oe.startTime-Q)}}function F(Q,oe){w=!1,C&&(C=!1,S(A),A=-1),M=!0;var ce=g;try{for(L(oe),_=t(p);_!==null&&(!(_.expirationTime>oe)||Q&&!k());){var U=_.callback;if(typeof U=="function"){_.callback=null,g=_.priorityLevel;var q=U(_.expirationTime<=oe);oe=s.unstable_now(),typeof q=="function"?_.callback=q:_===t(p)&&r(p),L(oe)}else r(p);_=t(p)}if(_!==null)var Ae=!0;else{var We=t(m);We!==null&&W(D,We.startTime-oe),Ae=!1}return Ae}finally{_=null,g=ce,M=!1}}var O=!1,j=null,A=-1,R=5,fe=-1;function k(){return!(s.unstable_now()-fe<R)}function J(){if(j!==null){var Q=s.unstable_now();fe=Q;var oe=!0;try{oe=j(!0,Q)}finally{oe?$():(O=!1,j=null)}}else O=!1}var $;if(typeof N=="function")$=function(){N(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ee=le.port2;le.port1.onmessage=J,$=function(){ee.postMessage(null)}}else $=function(){y(J,0)};function ie(Q){j=Q,O||(O=!0,$())}function W(Q,oe){A=y(function(){Q(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ie(F))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ce=g;g=oe;try{return Q()}finally{g=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,oe){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ce=g;g=Q;try{return oe()}finally{g=ce}},s.unstable_scheduleCallback=function(Q,oe,ce){var U=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,Q){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ce+q,Q={id:v++,callback:oe,priorityLevel:Q,startTime:ce,expirationTime:q,sortIndex:-1},ce>U?(Q.sortIndex=ce,e(m,Q),t(p)===null&&Q===t(m)&&(C?(S(A),A=-1):C=!0,W(D,ce-U))):(Q.sortIndex=q,e(p,Q),w||M||(w=!0,ie(F))),Q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(Q){var oe=g;return function(){var ce=g;g=oe;try{return Q.apply(this,arguments)}finally{g=ce}}}})(Zu)),Zu}var Nm;function wv(){return Nm||(Nm=1,Qu.exports=Ev()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function bv(){if(Rm)return kn;Rm=1;var s=Uf(),e=wv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,h,x,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,N);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),O=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Q=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function q(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ae=!1;function We(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var h=se.stack.split(`
`),x=c.stack.split(`
`),b=h.length-1,I=x.length-1;1<=b&&0<=I&&h[b]!==x[I];)I--;for(;1<=b&&0<=I;b--,I--)if(h[b]!==x[I]){if(b!==1||I!==1)do if(b--,I--,0>I||h[b]!==x[I]){var B=`
`+h[b].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=b&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ze(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case j:return"Fragment";case O:return"Portal";case R:return"Profiler";case A:return"StrictMode";case $:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case fe:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,x.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=Ve(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Bt(n,i){ut(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vt(n,i,a){(i!=="number"||mt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _t=Array.isArray;function bt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function He(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_t(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(n){rt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),qe[i]=qe[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||qe.hasOwnProperty(n)&&qe[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ge=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,Me=null,De=null;function Se(n){if(n=Ta(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Po(i),Te(n.stateNode,n.type,i))}}function de(n){Me?De?De.push(n):De=[n]:Me=n}function ze(){if(Me){var n=Me,i=De;if(De=Me=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function at(n,i){return n(i)}function It(){}var Tt=!1;function $n(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return at(n,i,a)}finally{Tt=!1,(Me!==null||De!==null)&&(It(),ze())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=Po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(f)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){us=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{us=!1}function mc(n,i,a,c,h,x,b,I,B){var se=Array.prototype.slice.call(arguments,3);try{i.apply(a,se)}catch(ve){this.onError(ve)}}var sr=!1,Or=null,ei=!1,kr=null,lo={onError:function(n){sr=!0,Or=n}};function co(n,i,a,c,h,x,b,I,B){sr=!1,Or=null,mc.apply(lo,arguments)}function ds(n,i,a,c,h,x,b,I,B){if(co.apply(this,arguments),sr){if(sr){var se=Or;sr=!1,Or=null}else throw Error(t(198));ei||(ei=!0,kr=se)}}function bi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function la(n){if(bi(n)!==n)throw Error(t(188))}function uo(n){var i=n.alternate;if(!i){if(i=bi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===a)return la(h),n;if(x===c)return la(h),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=x;else{for(var b=!1,I=h.child;I;){if(I===a){b=!0,a=h,c=x;break}if(I===c){b=!0,c=h,a=x;break}I=I.sibling}if(!b){for(I=x.child;I;){if(I===a){b=!0,a=x,c=h;break}if(I===c){b=!0,c=x,a=h;break}I=I.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fo(n){return n=uo(n),n!==null?ho(n):null}function ho(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ho(n);if(i!==null)return i;n=n.sibling}return null}var po=e.unstable_scheduleCallback,mo=e.unstable_cancelCallback,xc=e.unstable_shouldYield,gc=e.unstable_requestPaint,T=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,ae=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,Ne=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,Ce=null,Le=null;function Qe(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Dt,dt=Math.log,Je=Math.LN2;function Dt(n){return n>>>=0,n===0?32:31-(dt(n)/Je|0)|0}var Ot=64,Ft=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,b=a&268435455;if(b!==0){var I=b&~h;I!==0?c=Mt(I):(x&=b,x!==0&&(c=Mt(x)))}else b=a&~h,b!==0?c=Mt(b):x!==0&&(c=Mt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-$e(i),h=1<<a,c|=n[a],i&=~h;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var b=31-$e(x),I=1<<b,B=h[b];B===-1?((I&a)===0||(I&c)!==0)&&(h[b]=Ye(I,i)):B<=i&&(n.expiredLanes|=I),x&=~I}}function yt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function Dn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Gn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-$e(i),n[i]=a}function ar(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-$e(a),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~x}}function Rt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-$e(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var ot=0;function hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,ti,zi,ca,ah,vc=!1,xo=[],or=null,lr=null,cr=null,ua=new Map,da=new Map,ur=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,i){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(n,i,a,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=Ta(i),i!==null&&ti(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function H0(n,i,a,c,h){switch(i){case"focusin":return or=fa(or,n,i,a,c,h),!0;case"dragenter":return lr=fa(lr,n,i,a,c,h),!0;case"mouseover":return cr=fa(cr,n,i,a,c,h),!0;case"pointerover":var x=h.pointerId;return ua.set(x,fa(ua.get(x)||null,n,i,a,c,h)),!0;case"gotpointercapture":return x=h.pointerId,da.set(x,fa(da.get(x)||null,n,i,a,c,h)),!0}return!1}function lh(n){var i=zr(n.target);if(i!==null){var a=bi(i);if(a!==null){if(i=a.tag,i===13){if(i=Br(a),i!==null){n.blockedOn=i,ah(n.priority,function(){zi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function go(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ct=c,a.target.dispatchEvent(c),ct=null}else return i=Ta(a),i!==null&&ti(i),n.blockedOn=a,!1;i.shift()}return!0}function ch(n,i,a){go(n)&&a.delete(i)}function G0(){vc=!1,or!==null&&go(or)&&(or=null),lr!==null&&go(lr)&&(lr=null),cr!==null&&go(cr)&&(cr=null),ua.forEach(ch),da.forEach(ch)}function ha(n,i){n.blockedOn===i&&(n.blockedOn=null,vc||(vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,G0)))}function pa(n){function i(h){return ha(h,n)}if(0<xo.length){ha(xo[0],n);for(var a=1;a<xo.length;a++){var c=xo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(or!==null&&ha(or,n),lr!==null&&ha(lr,n),cr!==null&&ha(cr,n),ua.forEach(i),da.forEach(i),a=0;a<ur.length;a++)c=ur[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)lh(a),a.blockedOn===null&&ur.shift()}var fs=D.ReactCurrentBatchConfig,vo=!0;function W0(n,i,a,c){var h=ot,x=fs.transition;fs.transition=null;try{ot=1,_c(n,i,a,c)}finally{ot=h,fs.transition=x}}function X0(n,i,a,c){var h=ot,x=fs.transition;fs.transition=null;try{ot=4,_c(n,i,a,c)}finally{ot=h,fs.transition=x}}function _c(n,i,a,c){if(vo){var h=yc(n,i,a,c);if(h===null)Oc(n,i,c,_o,a),oh(n,c);else if(H0(h,n,i,a,c))c.stopPropagation();else if(oh(n,c),i&4&&-1<V0.indexOf(n)){for(;h!==null;){var x=Ta(h);if(x!==null&&Zt(x),x=yc(n,i,a,c),x===null&&Oc(n,i,c,_o,a),x===h)break;h=x}h!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var _o=null;function yc(n,i,a,c){if(_o=null,n=V(c),n=zr(n),n!==null)if(i=bi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Br(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _o=n,null}function uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case ae:return 1;case ne:return 4;case Z:case Ne:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var dr=null,Sc=null,yo=null;function dh(){if(yo)return yo;var n,i=Sc,a=i.length,c,h="value"in dr?dr.value:dr.textContent,x=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[x-c];c++);return yo=h.slice(n,1<c?1-c:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mo(){return!0}function fh(){return!1}function Wn(n){function i(a,c,h,x,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(x):x[I]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Mo:fh,this.isPropagationStopped=fh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=Wn(hs),ma=ce({},hs,{view:0,detail:0}),Y0=Wn(ma),Ec,wc,xa,Eo=ce({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xa&&(xa&&n.type==="mousemove"?(Ec=n.screenX-xa.screenX,wc=n.screenY-xa.screenY):wc=Ec=0,xa=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),hh=Wn(Eo),q0=ce({},Eo,{dataTransfer:0}),K0=Wn(q0),Q0=ce({},ma,{relatedTarget:0}),bc=Wn(Q0),Z0=ce({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Wn(Z0),$0=ce({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),eg=Wn($0),tg=ce({},hs,{data:0}),ph=Wn(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=rg[n])?!!i[n]:!1}function Tc(){return sg}var ag=ce({},ma,{key:function(n){if(n.key){var i=ng[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ig[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),og=Wn(ag),lg=ce({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Wn(lg),cg=ce({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),ug=Wn(cg),dg=ce({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=Wn(dg),hg=ce({},Eo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=Wn(hg),mg=[9,13,27,32],Ac=f&&"CompositionEvent"in window,ga=null;f&&"documentMode"in document&&(ga=document.documentMode);var xg=f&&"TextEvent"in window&&!ga,xh=f&&(!Ac||ga&&8<ga&&11>=ga),gh=" ",vh=!1;function _h(n,i){switch(n){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function gg(n,i){switch(n){case"compositionend":return yh(i);case"keypress":return i.which!==32?null:(vh=!0,gh);case"textInput":return n=i.data,n===gh&&vh?null:n;default:return null}}function vg(n,i){if(ps)return n==="compositionend"||!Ac&&_h(n,i)?(n=dh(),yo=Sc=dr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!_g[n.type]:i==="textarea"}function Mh(n,i,a,c){de(c),i=Co(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,_a=null;function yg(n){zh(n,0)}function wo(n){var i=_s(n);if(Kt(i))return n}function Sg(n,i){if(n==="change")return i}var Eh=!1;if(f){var Cc;if(f){var Nc="oninput"in document;if(!Nc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Nc=typeof wh.oninput=="function"}Cc=Nc}else Cc=!1;Eh=Cc&&(!document.documentMode||9<document.documentMode)}function bh(){va&&(va.detachEvent("onpropertychange",Th),_a=va=null)}function Th(n){if(n.propertyName==="value"&&wo(_a)){var i=[];Mh(i,_a,n,V(n)),$n(yg,i)}}function Mg(n,i,a){n==="focusin"?(bh(),va=i,_a=a,va.attachEvent("onpropertychange",Th)):n==="focusout"&&bh()}function Eg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wo(_a)}function wg(n,i){if(n==="click")return wo(i)}function bg(n,i){if(n==="input"||n==="change")return wo(i)}function Tg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pi=typeof Object.is=="function"?Object.is:Tg;function ya(n,i){if(pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!pi(n[h],i[h]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,i){var a=Ah(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ah(a)}}function Nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Rh(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=mt(n.document)}return i}function Rc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ag(n){var i=Rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nh(a.ownerDocument.documentElement,a)){if(c!==null&&Rc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=Ch(a,x);var b=Ch(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Cg=f&&"documentMode"in document&&11>=document.documentMode,ms=null,Pc=null,Sa=null,Dc=!1;function Ph(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||ms==null||ms!==mt(c)||(c=ms,"selectionStart"in c&&Rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&ya(Sa,c)||(Sa=c,c=Co(Pc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Lc={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function To(n){if(Lc[n])return Lc[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Dh)return Lc[n]=i[a];return n}var Lh=To("animationend"),Ih=To("animationiteration"),Uh=To("animationstart"),Fh=To("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Oh.set(n,i),l(i,[n])}for(var Ic=0;Ic<kh.length;Ic++){var Uc=kh[Ic],Ng=Uc.toLowerCase(),Rg=Uc[0].toUpperCase()+Uc.slice(1);fr(Ng,"on"+Rg)}fr(Lh,"onAnimationEnd"),fr(Ih,"onAnimationIteration"),fr(Uh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Fh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ds(c,i,void 0,n),n.currentTarget=null}function zh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var b=c.length-1;0<=b;b--){var I=c[b],B=I.instance,se=I.currentTarget;if(I=I.listener,B!==x&&h.isPropagationStopped())break e;Bh(h,I,se),x=B}else for(b=0;b<c.length;b++){if(I=c[b],B=I.instance,se=I.currentTarget,I=I.listener,B!==x&&h.isPropagationStopped())break e;Bh(h,I,se),x=B}}}if(ei)throw n=kr,ei=!1,kr=null,n}function zt(n,i){var a=i[Hc];a===void 0&&(a=i[Hc]=new Set);var c=n+"__bubble";a.has(c)||(jh(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),jh(a,n,c,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Ao]){n[Ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(Pg.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,Fc("selectionchange",!1,i))}}function jh(n,i,a,c){switch(uh(i)){case 1:var h=W0;break;case 4:h=X0;break;default:h=_c}a=h.bind(null,i,a,n),h=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;b=b.return}for(;I!==null;){if(b=zr(I),b===null)return;if(B=b.tag,B===5||B===6){c=x=b;continue e}I=I.parentNode}}c=c.return}$n(function(){var se=x,ve=V(a),_e=[];e:{var ge=Oh.get(n);if(ge!==void 0){var Ie=Mc,je=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":Ie=og;break;case"focusin":je="focus",Ie=bc;break;case"focusout":je="blur",Ie=bc;break;case"beforeblur":case"afterblur":Ie=bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=ug;break;case Lh:case Ih:case Uh:Ie=J0;break;case Fh:Ie=fg;break;case"scroll":Ie=Y0;break;case"wheel":Ie=pg;break;case"copy":case"cut":case"paste":Ie=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=mh}var Xe=(i&4)!==0,Jt=!Xe&&n==="scroll",K=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var H=se,te;H!==null;){te=H;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,K!==null&&(Ee=wn(H,K),Ee!=null&&Xe.push(wa(H,Ee,te)))),Jt)break;H=H.return}0<Xe.length&&(ge=new Ie(ge,je,null,a,ve),_e.push({event:ge,listeners:Xe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&a!==ct&&(je=a.relatedTarget||a.fromElement)&&(zr(je)||je[ji]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(je=a.relatedTarget||a.toElement,Ie=se,je=je?zr(je):null,je!==null&&(Jt=bi(je),je!==Jt||je.tag!==5&&je.tag!==6)&&(je=null)):(Ie=null,je=se),Ie!==je)){if(Xe=hh,Ee="onMouseLeave",K="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=mh,Ee="onPointerLeave",K="onPointerEnter",H="pointer"),Jt=Ie==null?ge:_s(Ie),te=je==null?ge:_s(je),ge=new Xe(Ee,H+"leave",Ie,a,ve),ge.target=Jt,ge.relatedTarget=te,Ee=null,zr(ve)===se&&(Xe=new Xe(K,H+"enter",je,a,ve),Xe.target=te,Xe.relatedTarget=Jt,Ee=Xe),Jt=Ee,Ie&&je)t:{for(Xe=Ie,K=je,H=0,te=Xe;te;te=gs(te))H++;for(te=0,Ee=K;Ee;Ee=gs(Ee))te++;for(;0<H-te;)Xe=gs(Xe),H--;for(;0<te-H;)K=gs(K),te--;for(;H--;){if(Xe===K||K!==null&&Xe===K.alternate)break t;Xe=gs(Xe),K=gs(K)}Xe=null}else Xe=null;Ie!==null&&Vh(_e,ge,Ie,Xe,!1),je!==null&&Jt!==null&&Vh(_e,Jt,je,Xe,!0)}}e:{if(ge=se?_s(se):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ke=Sg;else if(Sh(ge))if(Eh)Ke=bg;else{Ke=Eg;var et=Mg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=wg);if(Ke&&(Ke=Ke(n,se))){Mh(_e,Ke,a,ve);break e}et&&et(n,ge,se),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Vt(ge,"number",ge.value)}switch(et=se?_s(se):window,n){case"focusin":(Sh(et)||et.contentEditable==="true")&&(ms=et,Pc=se,Sa=null);break;case"focusout":Sa=Pc=ms=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Ph(_e,a,ve);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":Ph(_e,a,ve)}var tt;if(Ac)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ps?_h(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(xh&&a.locale!=="ko"&&(ps||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ps&&(tt=dh()):(dr=ve,Sc="value"in dr?dr.value:dr.textContent,ps=!0)),et=Co(se,lt),0<et.length&&(lt=new ph(lt,n,null,a,ve),_e.push({event:lt,listeners:et}),tt?lt.data=tt:(tt=yh(a),tt!==null&&(lt.data=tt)))),(tt=xg?gg(n,a):vg(n,a))&&(se=Co(se,"onBeforeInput"),0<se.length&&(ve=new ph("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:se}),ve.data=tt))}zh(_e,i)})}function wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Co(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=wn(n,a),x!=null&&c.unshift(wa(n,x,h)),x=wn(n,i),x!=null&&c.push(wa(n,x,h))),n=n.return}return c}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vh(n,i,a,c,h){for(var x=i._reactName,b=[];a!==null&&a!==c;){var I=a,B=I.alternate,se=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&se!==null&&(I=se,h?(B=wn(a,x),B!=null&&b.unshift(wa(a,B,I))):h||(B=wn(a,x),B!=null&&b.push(wa(a,B,I)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Dg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Hh(n){return(typeof n=="string"?n:""+n).replace(Dg,`
`).replace(Lg,"")}function No(n,i,a){if(i=Hh(i),Hh(n)!==i&&a)throw Error(t(425))}function Ro(){}var kc=null,Bc=null;function zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(Fg)}:jc;function Fg(n){setTimeout(function(){throw n})}function Vc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);pa(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Wh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Ti="__reactFiber$"+vs,ba="__reactProps$"+vs,ji="__reactContainer$"+vs,Hc="__reactEvents$"+vs,Og="__reactListeners$"+vs,kg="__reactHandles$"+vs;function zr(n){var i=n[Ti];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ji]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Wh(n);n!==null;){if(a=n[Ti])return a;n=Wh(n)}return i}n=a,a=n.parentNode}return null}function Ta(n){return n=n[Ti]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Po(n){return n[ba]||null}var Gc=[],ys=-1;function pr(n){return{current:n}}function jt(n){0>ys||(n.current=Gc[ys],Gc[ys]=null,ys--)}function kt(n,i){ys++,Gc[ys]=n.current,n.current=i}var mr={},xn=pr(mr),Ln=pr(!1),jr=mr;function Ss(n,i){var a=n.type.contextTypes;if(!a)return mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in a)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function In(n){return n=n.childContextTypes,n!=null}function Do(){jt(Ln),jt(xn)}function Xh(n,i,a){if(xn.current!==mr)throw Error(t(168));kt(xn,i),kt(Ln,a)}function Yh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,me(n)||"Unknown",h));return ce({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,jr=xn.current,kt(xn,n),kt(Ln,Ln.current),!0}function qh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yh(n,i,jr),c.__reactInternalMemoizedMergedChildContext=n,jt(Ln),jt(xn),kt(xn,n)):jt(Ln),kt(Ln,a)}var Vi=null,Io=!1,Wc=!1;function Kh(n){Vi===null?Vi=[n]:Vi.push(n)}function Bg(n){Io=!0,Kh(n)}function xr(){if(!Wc&&Vi!==null){Wc=!0;var n=0,i=ot;try{var a=Vi;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Vi=null,Io=!1}catch(h){throw Vi!==null&&(Vi=Vi.slice(n+1)),po(ae,xr),h}finally{ot=i,Wc=!1}}return null}var Ms=[],Es=0,Uo=null,Fo=0,ni=[],ii=0,Vr=null,Hi=1,Gi="";function Hr(n,i){Ms[Es++]=Fo,Ms[Es++]=Uo,Uo=n,Fo=i}function Qh(n,i,a){ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=Vr,Vr=n;var c=Hi;n=Gi;var h=32-$e(c)-1;c&=~(1<<h),a+=1;var x=32-$e(i)+h;if(30<x){var b=h-h%5;x=(c&(1<<b)-1).toString(32),c>>=b,h-=b,Hi=1<<32-$e(i)+h|a<<h|c,Gi=x+n}else Hi=1<<x|a<<h|c,Gi=n}function Xc(n){n.return!==null&&(Hr(n,1),Qh(n,1,0))}function Yc(n){for(;n===Uo;)Uo=Ms[--Es],Ms[Es]=null,Fo=Ms[--Es],Ms[Es]=null;for(;n===Vr;)Vr=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null}var Xn=null,Yn=null,Ht=!1,mi=null;function Zh(n,i){var a=oi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Jh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,Yn=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Vr!==null?{id:Hi,overflow:Gi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=oi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,Yn=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(Ht){var i=Yn;if(i){var a=i;if(!Jh(n,i)){if(qc(n))throw Error(t(418));i=hr(a.nextSibling);var c=Xn;i&&Jh(n,i)?Zh(c,a):(n.flags=n.flags&-4097|2,Ht=!1,Xn=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Xn=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Oo(n){if(n!==Xn)return!1;if(!Ht)return $h(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zc(n.type,n.memoizedProps)),i&&(i=Yn)){if(qc(n))throw ep(),Error(t(418));for(;i;)Zh(n,i),i=hr(i.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Yn=hr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Yn=null}}else Yn=Xn?hr(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=Yn;n;)n=hr(n.nextSibling)}function ws(){Yn=Xn=null,Ht=!1}function Qc(n){mi===null?mi=[n]:mi.push(n)}var zg=D.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(b){var I=h.refs;b===null?delete I[x]:I[x]=b},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ko(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function tp(n){var i=n._init;return i(n._payload)}function np(n){function i(K,H){if(n){var te=K.deletions;te===null?(K.deletions=[H],K.flags|=16):te.push(H)}}function a(K,H){if(!n)return null;for(;H!==null;)i(K,H),H=H.sibling;return null}function c(K,H){for(K=new Map;H!==null;)H.key!==null?K.set(H.key,H):K.set(H.index,H),H=H.sibling;return K}function h(K,H){return K=wr(K,H),K.index=0,K.sibling=null,K}function x(K,H,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<H?(K.flags|=2,H):te):(K.flags|=2,H)):(K.flags|=1048576,H)}function b(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,H,te,Ee){return H===null||H.tag!==6?(H=ju(te,K.mode,Ee),H.return=K,H):(H=h(H,te),H.return=K,H)}function B(K,H,te,Ee){var Ke=te.type;return Ke===j?ve(K,H,te.props.children,Ee,te.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&tp(Ke)===H.type)?(Ee=h(H,te.props),Ee.ref=Aa(K,H,te),Ee.return=K,Ee):(Ee=ll(te.type,te.key,te.props,null,K.mode,Ee),Ee.ref=Aa(K,H,te),Ee.return=K,Ee)}function se(K,H,te,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=Vu(te,K.mode,Ee),H.return=K,H):(H=h(H,te.children||[]),H.return=K,H)}function ve(K,H,te,Ee,Ke){return H===null||H.tag!==7?(H=Zr(te,K.mode,Ee,Ke),H.return=K,H):(H=h(H,te),H.return=K,H)}function _e(K,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ju(""+H,K.mode,te),H.return=K,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case F:return te=ll(H.type,H.key,H.props,null,K.mode,te),te.ref=Aa(K,null,H),te.return=K,te;case O:return H=Vu(H,K.mode,te),H.return=K,H;case ie:var Ee=H._init;return _e(K,Ee(H._payload),te)}if(_t(H)||oe(H))return H=Zr(H,K.mode,te,null),H.return=K,H;ko(K,H)}return null}function ge(K,H,te,Ee){var Ke=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(K,H,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===Ke?B(K,H,te,Ee):null;case O:return te.key===Ke?se(K,H,te,Ee):null;case ie:return Ke=te._init,ge(K,H,Ke(te._payload),Ee)}if(_t(te)||oe(te))return Ke!==null?null:ve(K,H,te,Ee,null);ko(K,te)}return null}function Ie(K,H,te,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return K=K.get(te)||null,I(H,K,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case F:return K=K.get(Ee.key===null?te:Ee.key)||null,B(H,K,Ee,Ke);case O:return K=K.get(Ee.key===null?te:Ee.key)||null,se(H,K,Ee,Ke);case ie:var et=Ee._init;return Ie(K,H,te,et(Ee._payload),Ke)}if(_t(Ee)||oe(Ee))return K=K.get(te)||null,ve(H,K,Ee,Ke,null);ko(H,Ee)}return null}function je(K,H,te,Ee){for(var Ke=null,et=null,tt=H,lt=H=0,dn=null;tt!==null&&lt<te.length;lt++){tt.index>lt?(dn=tt,tt=null):dn=tt.sibling;var Nt=ge(K,tt,te[lt],Ee);if(Nt===null){tt===null&&(tt=dn);break}n&&tt&&Nt.alternate===null&&i(K,tt),H=x(Nt,H,lt),et===null?Ke=Nt:et.sibling=Nt,et=Nt,tt=dn}if(lt===te.length)return a(K,tt),Ht&&Hr(K,lt),Ke;if(tt===null){for(;lt<te.length;lt++)tt=_e(K,te[lt],Ee),tt!==null&&(H=x(tt,H,lt),et===null?Ke=tt:et.sibling=tt,et=tt);return Ht&&Hr(K,lt),Ke}for(tt=c(K,tt);lt<te.length;lt++)dn=Ie(tt,K,lt,te[lt],Ee),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?lt:dn.key),H=x(dn,H,lt),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(br){return i(K,br)}),Ht&&Hr(K,lt),Ke}function Xe(K,H,te,Ee){var Ke=oe(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var et=Ke=null,tt=H,lt=H=0,dn=null,Nt=te.next();tt!==null&&!Nt.done;lt++,Nt=te.next()){tt.index>lt?(dn=tt,tt=null):dn=tt.sibling;var br=ge(K,tt,Nt.value,Ee);if(br===null){tt===null&&(tt=dn);break}n&&tt&&br.alternate===null&&i(K,tt),H=x(br,H,lt),et===null?Ke=br:et.sibling=br,et=br,tt=dn}if(Nt.done)return a(K,tt),Ht&&Hr(K,lt),Ke;if(tt===null){for(;!Nt.done;lt++,Nt=te.next())Nt=_e(K,Nt.value,Ee),Nt!==null&&(H=x(Nt,H,lt),et===null?Ke=Nt:et.sibling=Nt,et=Nt);return Ht&&Hr(K,lt),Ke}for(tt=c(K,tt);!Nt.done;lt++,Nt=te.next())Nt=Ie(tt,K,lt,Nt.value,Ee),Nt!==null&&(n&&Nt.alternate!==null&&tt.delete(Nt.key===null?lt:Nt.key),H=x(Nt,H,lt),et===null?Ke=Nt:et.sibling=Nt,et=Nt);return n&&tt.forEach(function(_v){return i(K,_v)}),Ht&&Hr(K,lt),Ke}function Jt(K,H,te,Ee){if(typeof te=="object"&&te!==null&&te.type===j&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var Ke=te.key,et=H;et!==null;){if(et.key===Ke){if(Ke=te.type,Ke===j){if(et.tag===7){a(K,et.sibling),H=h(et,te.props.children),H.return=K,K=H;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&tp(Ke)===et.type){a(K,et.sibling),H=h(et,te.props),H.ref=Aa(K,et,te),H.return=K,K=H;break e}a(K,et);break}else i(K,et);et=et.sibling}te.type===j?(H=Zr(te.props.children,K.mode,Ee,te.key),H.return=K,K=H):(Ee=ll(te.type,te.key,te.props,null,K.mode,Ee),Ee.ref=Aa(K,H,te),Ee.return=K,K=Ee)}return b(K);case O:e:{for(et=te.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){a(K,H.sibling),H=h(H,te.children||[]),H.return=K,K=H;break e}else{a(K,H);break}else i(K,H);H=H.sibling}H=Vu(te,K.mode,Ee),H.return=K,K=H}return b(K);case ie:return et=te._init,Jt(K,H,et(te._payload),Ee)}if(_t(te))return je(K,H,te,Ee);if(oe(te))return Xe(K,H,te,Ee);ko(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,H!==null&&H.tag===6?(a(K,H.sibling),H=h(H,te),H.return=K,K=H):(a(K,H),H=ju(te,K.mode,Ee),H.return=K,K=H),b(K)):a(K,H)}return Jt}var bs=np(!0),ip=np(!1),Bo=pr(null),zo=null,Ts=null,Zc=null;function Jc(){Zc=Ts=zo=null}function $c(n){var i=Bo.current;jt(Bo),n._currentValue=i}function eu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function As(n,i){zo=n,Zc=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function ri(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(zo===null)throw Error(t(308));Ts=n,zo.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var Gr=null;function tu(n){Gr===null?Gr=[n]:Gr.push(n)}function rp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,tu(i)):(a.next=h.next,h.next=a),i.interleaved=a,Wi(n,c)}function Wi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Wi(n,a)}return h=c.interleaved,h===null?(i.next=i,tu(c)):(i.next=h.next,h.next=i),c.interleaved=i,Wi(n,a)}function jo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}function ap(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?h=x=b:x=x.next=b,a=a.next}while(a!==null);x===null?h=x=i:x=x.next=i}else h=x=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,c){var h=n.updateQueue;gr=!1;var x=h.firstBaseUpdate,b=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var B=I,se=B.next;B.next=null,b===null?x=se:b.next=se,b=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==b&&(I===null?ve.firstBaseUpdate=se:I.next=se,ve.lastBaseUpdate=B))}if(x!==null){var _e=h.baseState;b=0,ve=se=B=null,I=x;do{var ge=I.lane,Ie=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,Xe=I;switch(ge=i,Ie=a,Xe.tag){case 1:if(je=Xe.payload,typeof je=="function"){_e=je.call(Ie,_e,ge);break e}_e=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Xe.payload,ge=typeof je=="function"?je.call(Ie,_e,ge):je,ge==null)break e;_e=ce({},_e,ge);break e;case 2:gr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(se=ve=Ie,B=_e):ve=ve.next=Ie,b|=ge;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(ve===null&&(B=_e),h.baseState=B,h.firstBaseUpdate=se,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);Yr|=b,n.lanes=b,n.memoizedState=_e}}function op(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ca={},Ai=pr(Ca),Na=pr(Ca),Ra=pr(Ca);function Wr(n){if(n===Ca)throw Error(t(174));return n}function iu(n,i){switch(kt(Ra,i),kt(Na,n),kt(Ai,Ca),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}jt(Ai),kt(Ai,i)}function Cs(){jt(Ai),jt(Na),jt(Ra)}function lp(n){Wr(Ra.current);var i=Wr(Ai.current),a=xe(i,n.type);i!==a&&(kt(Na,n),kt(Ai,a))}function ru(n){Na.current===n&&(jt(Ai),jt(Na))}var Gt=pr(0);function Ho(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function au(){for(var n=0;n<su.length;n++)su[n]._workInProgressVersionPrimary=null;su.length=0}var Go=D.ReactCurrentDispatcher,ou=D.ReactCurrentBatchConfig,Xr=0,Wt=null,nn=null,cn=null,Wo=!1,Pa=!1,Da=0,jg=0;function gn(){throw Error(t(321))}function lu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!pi(n[a],i[a]))return!1;return!0}function cu(n,i,a,c,h,x){if(Xr=x,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Go.current=n===null||n.memoizedState===null?Wg:Xg,n=a(c,h),Pa){x=0;do{if(Pa=!1,Da=0,25<=x)throw Error(t(301));x+=1,cn=nn=null,i.updateQueue=null,Go.current=Yg,n=a(c,h)}while(Pa)}if(Go.current=qo,i=nn!==null&&nn.next!==null,Xr=0,cn=nn=Wt=null,Wo=!1,i)throw Error(t(300));return n}function uu(){var n=Da!==0;return Da=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Wt.memoizedState=cn=n:cn=cn.next=n,cn}function si(){if(nn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=cn===null?Wt.memoizedState:cn.next;if(i!==null)cn=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},cn===null?Wt.memoizedState=cn=n:cn=cn.next=n}return cn}function La(n,i){return typeof i=="function"?i(n):i}function du(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=nn,h=c.baseQueue,x=a.pending;if(x!==null){if(h!==null){var b=h.next;h.next=x.next,x.next=b}c.baseQueue=h=x,a.pending=null}if(h!==null){x=h.next,c=c.baseState;var I=b=null,B=null,se=x;do{var ve=se.lane;if((Xr&ve)===ve)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var _e={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(I=B=_e,b=c):B=B.next=_e,Wt.lanes|=ve,Yr|=ve}se=se.next}while(se!==null&&se!==x);B===null?b=c:B.next=I,pi(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do x=h.lane,Wt.lanes|=x,Yr|=x,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fu(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,x=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do x=n(x,b.action),b=b.next;while(b!==h);pi(x,i.memoizedState)||(Un=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function cp(){}function up(n,i){var a=Wt,c=si(),h=i(),x=!pi(c.memoizedState,h);if(x&&(c.memoizedState=h,Un=!0),c=c.queue,hu(hp.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Ia(9,fp.bind(null,a,c,h,i),void 0,null),un===null)throw Error(t(349));(Xr&30)!==0||dp(a,i,h)}return h}function dp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function fp(n,i,a,c){i.value=a,i.getSnapshot=c,pp(i)&&mp(n)}function hp(n,i,a){return a(function(){pp(i)&&mp(n)})}function pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!pi(n,a)}catch{return!0}}function mp(n){var i=Wi(n,1);i!==null&&_i(i,n,1,-1)}function xp(n){var i=Ci();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},i.queue=n,n=n.dispatch=Gg.bind(null,Wt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function gp(){return si().memoizedState}function Xo(n,i,a,c){var h=Ci();Wt.flags|=n,h.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var h=si();c=c===void 0?null:c;var x=void 0;if(nn!==null){var b=nn.memoizedState;if(x=b.destroy,c!==null&&lu(c,b.deps)){h.memoizedState=Ia(i,a,x,c);return}}Wt.flags|=n,h.memoizedState=Ia(1|i,a,x,c)}function vp(n,i){return Xo(8390656,8,n,i)}function hu(n,i){return Yo(2048,8,n,i)}function _p(n,i){return Yo(4,2,n,i)}function yp(n,i){return Yo(4,4,n,i)}function Sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Mp(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,Sp.bind(null,i,n),a)}function pu(){}function Ep(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function wp(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function bp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a):(pi(a,i)||(a=Pn(),Wt.lanes|=a,Yr|=a,n.baseState=!0),i)}function Vg(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=ou.transition;ou.transition={};try{n(!1),i()}finally{ot=a,ou.transition=c}}function Tp(){return si().memoizedState}function Hg(n,i,a){var c=Mr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ap(n))Cp(i,a);else if(a=rp(n,i,a,c),a!==null){var h=An();_i(a,n,c,h),Np(a,i,c)}}function Gg(n,i,a){var c=Mr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Cp(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var b=i.lastRenderedState,I=x(b,a);if(h.hasEagerState=!0,h.eagerState=I,pi(I,b)){var B=i.interleaved;B===null?(h.next=h,tu(i)):(h.next=B.next,B.next=h),i.interleaved=h;return}}catch{}finally{}a=rp(n,i,h,c),a!==null&&(h=An(),_i(a,n,c,h),Np(a,i,c))}}function Ap(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function Cp(n,i){Pa=Wo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}var qo={readContext:ri,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Wg={readContext:ri,useCallback:function(n,i){return Ci().memoizedState=[n,i===void 0?null:i],n},useContext:ri,useEffect:vp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4194308,4,Sp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xo(4,2,n,i)},useMemo:function(n,i){var a=Ci();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ci();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Hg.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Ci();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:pu,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=Vg.bind(null,n[1]),Ci().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,h=Ci();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));(Xr&30)!==0||dp(c,i,a)}h.memoizedState=a;var x={value:a,getSnapshot:i};return h.queue=x,vp(hp.bind(null,c,x,n),[n]),c.flags|=2048,Ia(9,fp.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ci(),i=un.identifierPrefix;if(Ht){var a=Gi,c=Hi;a=(c&~(1<<32-$e(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=jg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Xg={readContext:ri,useCallback:Ep,useContext:ri,useEffect:hu,useImperativeHandle:Mp,useInsertionEffect:_p,useLayoutEffect:yp,useMemo:wp,useReducer:du,useRef:gp,useState:function(){return du(La)},useDebugValue:pu,useDeferredValue:function(n){var i=si();return bp(i,nn.memoizedState,n)},useTransition:function(){var n=du(La)[0],i=si().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:Tp,unstable_isNewReconciler:!1},Yg={readContext:ri,useCallback:Ep,useContext:ri,useEffect:hu,useImperativeHandle:Mp,useInsertionEffect:_p,useLayoutEffect:yp,useMemo:wp,useReducer:fu,useRef:gp,useState:function(){return fu(La)},useDebugValue:pu,useDeferredValue:function(n){var i=si();return nn===null?i.memoizedState=n:bp(i,nn.memoizedState,n)},useTransition:function(){var n=fu(La)[0],i=si().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:Tp,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=An(),h=Mr(n),x=Xi(c,h);x.payload=i,a!=null&&(x.callback=a),i=vr(n,x,h),i!==null&&(_i(i,n,h,c),jo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=An(),h=Mr(n),x=Xi(c,h);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=vr(n,x,h),i!==null&&(_i(i,n,h,c),jo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),c=Mr(n),h=Xi(a,c);h.tag=2,i!=null&&(h.callback=i),i=vr(n,h,c),i!==null&&(_i(i,n,c,a),jo(i,n,c))}};function Rp(n,i,a,c,h,x,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,b):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(h,x):!0}function Pp(n,i,a){var c=!1,h=mr,x=i.contextType;return typeof x=="object"&&x!==null?x=ri(x):(h=In(i)?jr:xn.current,c=i.contextTypes,x=(c=c!=null)?Ss(n,h):mr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function Dp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function xu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},nu(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=ri(x):(x=In(i)?jr:xn.current,h.context=Ss(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(mu(n,i,x,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ko.enqueueReplaceState(h,h.state,null),Vo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",c=i;do a+=Ze(c),c=c.return;while(c);var h=a}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function gu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){nl||(nl=!0,Lu=c),vu(n,i)},a}function Ip(n,i,a){a=Xi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){vu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){vu(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Up(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qg;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=lv.bind(null,n,i,a),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Op(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Kg=D.ReactCurrentOwner,Un=!1;function Tn(n,i,a,c){i.child=n===null?ip(i,null,a,c):bs(i,n.child,a,c)}function kp(n,i,a,c,h){a=a.render;var x=i.ref;return As(i,h),c=cu(n,i,a,c,x,h),a=uu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Yi(n,i,h)):(Ht&&a&&Xc(i),i.flags|=1,Tn(n,i,c,h),i.child)}function Bp(n,i,a,c,h){if(n===null){var x=a.type;return typeof x=="function"&&!zu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,zp(n,i,x,c,h)):(n=ll(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var b=x.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(b,c)&&n.ref===i.ref)return Yi(n,i,h)}return i.flags|=1,n=wr(x,c),n.ref=i.ref,n.return=i,i.child=n}function zp(n,i,a,c,h){if(n!==null){var x=n.memoizedProps;if(ya(x,c)&&n.ref===i.ref)if(Un=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,Yi(n,i,h)}return _u(n,i,a,c,h)}function jp(n,i,a){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ps,qn),qn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ps,qn),qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,kt(Ps,qn),qn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,kt(Ps,qn),qn|=c;return Tn(n,i,h,a),i.child}function Vp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,a,c,h){var x=In(a)?jr:xn.current;return x=Ss(i,x),As(i,h),a=cu(n,i,a,c,x,h),c=uu(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Yi(n,i,h)):(Ht&&c&&Xc(i),i.flags|=1,Tn(n,i,a,h),i.child)}function Hp(n,i,a,c,h){if(In(a)){var x=!0;Lo(i)}else x=!1;if(As(i,h),i.stateNode===null)Zo(n,i),Pp(i,a,c),xu(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,I=i.memoizedProps;b.props=I;var B=b.context,se=a.contextType;typeof se=="object"&&se!==null?se=ri(se):(se=In(a)?jr:xn.current,se=Ss(i,se));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof b.getSnapshotBeforeUpdate=="function";_e||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||B!==se)&&Dp(i,b,c,se),gr=!1;var ge=i.memoizedState;b.state=ge,Vo(i,c,b,h),B=i.memoizedState,I!==c||ge!==B||Ln.current||gr?(typeof ve=="function"&&(mu(i,a,ve,c),B=i.memoizedState),(I=gr||Rp(i,a,I,c,ge,B,se))?(_e||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),b.props=c,b.state=B,b.context=se,c=I):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,sp(n,i),I=i.memoizedProps,se=i.type===i.elementType?I:xi(i.type,I),b.props=se,_e=i.pendingProps,ge=b.context,B=a.contextType,typeof B=="object"&&B!==null?B=ri(B):(B=In(a)?jr:xn.current,B=Ss(i,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==_e||ge!==B)&&Dp(i,b,c,B),gr=!1,ge=i.memoizedState,b.state=ge,Vo(i,c,b,h);var je=i.memoizedState;I!==_e||ge!==je||Ln.current||gr?(typeof Ie=="function"&&(mu(i,a,Ie,c),je=i.memoizedState),(se=gr||Rp(i,a,se,c,ge,je,B)||!1)?(ve||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,B)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),b.props=c,b.state=je,b.context=B,c=se):(typeof b.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return yu(n,i,a,c,x,h)}function yu(n,i,a,c,h,x){Vp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&qh(i,a,!1),Yi(n,i,x);c=i.stateNode,Kg.current=i;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=bs(i,n.child,null,x),i.child=bs(i,null,I,x)):Tn(n,i,I,x),i.memoizedState=c.state,h&&qh(i,a,!0),i.child}function Gp(n){var i=n.stateNode;i.pendingContext?Xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Xh(n,i.context,!1),iu(n,i.containerInfo)}function Wp(n,i,a,c,h){return ws(),Qc(h),i.flags|=256,Tn(n,i,a,c),i.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,i,a){var c=i.pendingProps,h=Gt.current,x=!1,b=(i.flags&128)!==0,I;if((I=b)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),kt(Gt,h&1),n===null)return Kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,x?(c=i.mode,x=i.child,b={mode:"hidden",children:b},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=cl(b,c,0,null),n=Zr(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Mu(a),i.memoizedState=Su,n):Eu(i,b));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return Qg(n,i,b,c,I,h,a);if(x){x=c.fallback,b=i.mode,h=n.child,I=h.sibling;var B={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=wr(h,B),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?x=wr(I,x):(x=Zr(x,b,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,b=n.child.memoizedState,b=b===null?Mu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=n.childLanes&~a,i.memoizedState=Su,c}return x=n.child,n=x.sibling,c=wr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&Qc(c),bs(i,n.child,null,a),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Qg(n,i,a,c,h,x,b){if(a)return i.flags&256?(i.flags&=-257,c=gu(Error(t(422))),Qo(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=cl({mode:"visible",children:c.children},h,0,null),x=Zr(x,h,b,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&bs(i,n.child,null,b),i.child.memoizedState=Mu(b),i.memoizedState=Su,x);if((i.mode&1)===0)return Qo(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,x=Error(t(419)),c=gu(x,c,void 0),Qo(n,i,b,c)}if(I=(b&n.childLanes)!==0,Un||I){if(c=un,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,Wi(n,h),_i(c,n,h,-1))}return Bu(),c=gu(Error(t(421))),Qo(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=cv.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,Yn=hr(h.nextSibling),Xn=i,Ht=!0,mi=null,n!==null&&(ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=Vr,Hi=n.id,Gi=n.overflow,Vr=i),i=Eu(i,c.children),i.flags|=4096,i)}function Yp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eu(n.return,i,a)}function wu(n,i,a,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=h)}function qp(n,i,a){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(Tn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,i);else if(n.tag===19)Yp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Ho(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),wu(i,!1,h,a,x);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ho(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}wu(i,!0,a,null,x);break;case"together":wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Yi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Zg(n,i,a){switch(i.tag){case 3:Gp(i),ws();break;case 5:lp(i);break;case 1:In(i.type)&&Lo(i);break;case 4:iu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;kt(Bo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Xp(n,i,a):(kt(Gt,Gt.current&1),n=Yi(n,i,a),n!==null?n.sibling:null);kt(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),kt(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,jp(n,i,a)}return Yi(n,i,a)}var Kp,bu,Qp,Zp;Kp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bu=function(){},Qp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Wr(Ai.current);var x=null;switch(a){case"input":h=wt(n,h),c=wt(n,c),x=[];break;case"select":h=ce({},h,{value:void 0}),c=ce({},c,{value:void 0}),x=[];break;case"textarea":h=He(n,h),c=He(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}Be(a,c);var b;a=null;for(se in h)if(!c.hasOwnProperty(se)&&h.hasOwnProperty(se)&&h[se]!=null)if(se==="style"){var I=h[se];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?x||(x=[]):(x=x||[]).push(se,null));for(se in c){var B=c[se];if(I=h!=null?h[se]:void 0,c.hasOwnProperty(se)&&B!==I&&(B!=null||I!=null))if(se==="style")if(I){for(b in I)!I.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in B)B.hasOwnProperty(b)&&I[b]!==B[b]&&(a||(a={}),a[b]=B[b])}else a||(x||(x=[]),x.push(se,a)),a=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(x=x||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(x=x||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&zt("scroll",n),x||I===B||(x=[])):(x=x||[]).push(se,B))}a&&(x=x||[]).push("style",a);var se=x;(i.updateQueue=se)&&(i.flags|=4)}},Zp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ua(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Jg(n,i,a){var c=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return In(i.type)&&Do(),vn(i),null;case 3:return c=i.stateNode,Cs(),jt(Ln),jt(xn),au(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Oo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(Fu(mi),mi=null))),bu(n,i),vn(i),null;case 5:ru(i);var h=Wr(Ra.current);if(a=i.type,n!==null&&i.stateNode!=null)Qp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Wr(Ai.current),Oo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ti]=i,c[ba]=x,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(h=0;h<Ma.length;h++)zt(Ma[h],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":Pt(c,x),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},zt("invalid",c);break;case"textarea":P(c,x),zt("invalid",c)}Be(a,x),h=null;for(var b in x)if(x.hasOwnProperty(b)){var I=x[b];b==="children"?typeof I=="string"?c.textContent!==I&&(x.suppressHydrationWarning!==!0&&No(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(x.suppressHydrationWarning!==!0&&No(c.textContent,I,n),h=["children",""+I]):o.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&zt("scroll",c)}switch(a){case"input":it(c),z(c,x,!0);break;case"textarea":it(c),G(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Ro)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Ti]=i,n[ba]=c,Kp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Pe(a,c),a){case"dialog":zt("cancel",n),zt("close",n),h=c;break;case"iframe":case"object":case"embed":zt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ma.length;h++)zt(Ma[h],n);h=c;break;case"source":zt("error",n),h=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),h=c;break;case"details":zt("toggle",n),h=c;break;case"input":Pt(n,c),h=wt(n,c),zt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ce({},c,{value:void 0}),zt("invalid",n);break;case"textarea":P(n,c),h=He(n,c),zt("invalid",n);break;default:h=c}Be(a,h),I=h;for(x in I)if(I.hasOwnProperty(x)){var B=I[x];x==="style"?we(n,B):x==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ke(n,B)):x==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&be(n,B):typeof B=="number"&&be(n,""+B):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?B!=null&&x==="onScroll"&&zt("scroll",n):B!=null&&L(n,x,B,b))}switch(a){case"input":it(n),z(n,c,!1);break;case"textarea":it(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?bt(n,!!c.multiple,x,!1):c.defaultValue!=null&&bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Zp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(Ra.current),Wr(Ai.current),Oo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ti]=i,(x=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=i,i.stateNode=c}return vn(i),null;case 13:if(jt(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ep(),ws(),i.flags|=98560,x=!1;else if(x=Oo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ti]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),x=!1}else mi!==null&&(Fu(mi),mi=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?rn===0&&(rn=3):Bu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Cs(),bu(n,i),n===null&&Ea(i.stateNode.containerInfo),vn(i),null;case 10:return $c(i.type._context),vn(i),null;case 17:return In(i.type)&&Do(),vn(i),null;case 19:if(jt(Gt),x=i.memoizedState,x===null)return vn(i),null;if(c=(i.flags&128)!==0,b=x.rendering,b===null)if(c)Ua(x,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Ho(n),b!==null){for(i.flags|=128,Ua(x,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,n=b.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Gt,Gt.current&1|2),i.child}n=n.sibling}x.tail!==null&&T()>Ds&&(i.flags|=128,c=!0,Ua(x,!1),i.lanes=4194304)}else{if(!c)if(n=Ho(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!Ht)return vn(i),null}else 2*T()-x.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,c=!0,Ua(x,!1),i.lanes=4194304);x.isBackwards?(b.sibling=i.child,i.child=b):(a=x.last,a!==null?a.sibling=b:i.child=b,x.last=b)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=T(),i.sibling=null,a=Gt.current,kt(Gt,c?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function $g(n,i){switch(Yc(i),i.tag){case 1:return In(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),jt(Ln),jt(xn),au(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ru(i),null;case 13:if(jt(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Gt),null;case 4:return Cs(),null;case 10:return $c(i.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var Jo=!1,_n=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){qt(n,i,c)}else a.current=null}function Tu(n,i,a){try{a()}catch(c){qt(n,i,c)}}var Jp=!1;function tv(n,i){if(kc=vo,n=Rh(),Rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var b=0,I=-1,B=-1,se=0,ve=0,_e=n,ge=null;t:for(;;){for(var Ie;_e!==a||h!==0&&_e.nodeType!==3||(I=b+h),_e!==x||c!==0&&_e.nodeType!==3||(B=b+c),_e.nodeType===3&&(b+=_e.nodeValue.length),(Ie=_e.firstChild)!==null;)ge=_e,_e=Ie;for(;;){if(_e===n)break t;if(ge===a&&++se===h&&(I=b),ge===x&&++ve===c&&(B=b),(Ie=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},vo=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Xe=je.memoizedProps,Jt=je.memoizedState,K=i.stateNode,H=K.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:xi(i.type,Xe),Jt);K.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){qt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return je=Jp,Jp=!1,je}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&Tu(i,a,x)}h=h.next}while(h!==c)}}function $o(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function $p(n){var i=n.alternate;i!==null&&(n.alternate=null,$p(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ti],delete i[ba],delete i[Hc],delete i[Og],delete i[kg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}var hn=null,gi=!1;function _r(n,i,a){for(a=a.child;a!==null;)nm(n,i,a),a=a.sibling}function nm(n,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 5:_n||Rs(a,i);case 6:var c=hn,h=gi;hn=null,_r(n,i,a),hn=c,gi=h,hn!==null&&(gi?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(gi?(n=hn,a=a.stateNode,n.nodeType===8?Vc(n.parentNode,a):n.nodeType===1&&Vc(n,a),pa(n)):Vc(hn,a.stateNode));break;case 4:c=hn,h=gi,hn=a.stateNode.containerInfo,gi=!0,_r(n,i,a),hn=c,gi=h;break;case 0:case 11:case 14:case 15:if(!_n&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&Tu(a,i,b),h=h.next}while(h!==c)}_r(n,i,a);break;case 1:if(!_n&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){qt(a,i,I)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(_n=(c=_n)||a.memoizedState!==null,_r(n,i,a),_n=c):_r(n,i,a);break;default:_r(n,i,a)}}function im(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ev),i.forEach(function(c){var h=uv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var x=n,b=i,I=b;e:for(;I!==null;){switch(I.tag){case 5:hn=I.stateNode,gi=!1;break e;case 3:hn=I.stateNode.containerInfo,gi=!0;break e;case 4:hn=I.stateNode.containerInfo,gi=!0;break e}I=I.return}if(hn===null)throw Error(t(160));nm(x,b,h),hn=null,gi=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(se){qt(h,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rm(i,n),i=i.sibling}function rm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Ni(n),c&4){try{Fa(3,n,n.return),$o(3,n)}catch(Xe){qt(n,n.return,Xe)}try{Fa(5,n,n.return)}catch(Xe){qt(n,n.return,Xe)}}break;case 1:vi(i,n),Ni(n),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(vi(i,n),Ni(n),c&512&&a!==null&&Rs(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Xe){qt(n,n.return,Xe)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,b=a!==null?a.memoizedProps:x,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&x.type==="radio"&&x.name!=null&&ut(h,x),Pe(I,b);var se=Pe(I,x);for(b=0;b<B.length;b+=2){var ve=B[b],_e=B[b+1];ve==="style"?we(h,_e):ve==="dangerouslySetInnerHTML"?ke(h,_e):ve==="children"?be(h,_e):L(h,ve,_e,se)}switch(I){case"input":Bt(h,x);break;case"textarea":E(h,x);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var Ie=x.value;Ie!=null?bt(h,!!x.multiple,Ie,!1):ge!==!!x.multiple&&(x.defaultValue!=null?bt(h,!!x.multiple,x.defaultValue,!0):bt(h,!!x.multiple,x.multiple?[]:"",!1))}h[ba]=x}catch(Xe){qt(n,n.return,Xe)}}break;case 6:if(vi(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch(Xe){qt(n,n.return,Xe)}}break;case 3:if(vi(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Xe){qt(n,n.return,Xe)}break;case 4:vi(i,n),Ni(n);break;case 13:vi(i,n),Ni(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(Du=T())),c&4&&im(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(se=_n)||ve,vi(i,n),_n=se):vi(i,n),Ni(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(_e=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Fa(4,ge,ge.return);break;case 1:Rs(ge,ge.return);var je=ge.stateNode;if(typeof je.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Xe){qt(c,a,Xe)}}break;case 5:Rs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){om(_e);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):om(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{h=_e.stateNode,se?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(I=_e.stateNode,B=_e.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ye("display",b))}catch(Xe){qt(n,n.return,Xe)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=se?"":_e.memoizedProps}catch(Xe){qt(n,n.return,Xe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:vi(i,n),Ni(n),c&4&&im(n);break;case 21:break;default:vi(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(be(h,""),c.flags&=-33);var x=tm(n);Nu(n,x,h);break;case 3:case 4:var b=c.stateNode.containerInfo,I=tm(n);Cu(n,I,b);break;default:throw Error(t(161))}}catch(B){qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nv(n,i,a){Oe=n,sm(n)}function sm(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var h=Oe,x=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||Jo;if(!b){var I=h.alternate,B=I!==null&&I.memoizedState!==null||_n;I=Jo;var se=_n;if(Jo=b,(_n=B)&&!se)for(Oe=h;Oe!==null;)b=Oe,B=b.child,b.tag===22&&b.memoizedState!==null?lm(h):B!==null?(B.return=b,Oe=B):lm(h);for(;x!==null;)Oe=x,sm(x),x=x.sibling;Oe=h,Jo=I,_n=se}am(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,Oe=x):am(n)}}function am(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||$o(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&op(i,x,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}op(i,b,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&pa(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&Au(i)}catch(ge){qt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function om(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function lm(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(B){qt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(B){qt(i,h,B)}}var x=i.return;try{Au(i)}catch(B){qt(i,x,B)}break;case 5:var b=i.return;try{Au(i)}catch(B){qt(i,b,B)}}}catch(B){qt(i,i.return,B)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var iv=Math.ceil,el=D.ReactCurrentDispatcher,Ru=D.ReactCurrentOwner,ai=D.ReactCurrentBatchConfig,At=0,un=null,en=null,pn=0,qn=0,Ps=pr(0),rn=0,Oa=null,Yr=0,tl=0,Pu=0,ka=null,Fn=null,Du=0,Ds=1/0,qi=null,nl=!1,Lu=null,yr=null,il=!1,Sr=null,rl=0,Ba=0,Iu=null,sl=-1,al=0;function An(){return(At&6)!==0?T():sl!==-1?sl:sl=T()}function Mr(n){return(n.mode&1)===0?1:(At&2)!==0&&pn!==0?pn&-pn:zg.transition!==null?(al===0&&(al=Pn()),al):(n=ot,n!==0||(n=window.event,n=n===void 0?16:uh(n.type)),n)}function _i(n,i,a,c){if(50<Ba)throw Ba=0,Iu=null,Error(t(185));Gn(n,a,c),((At&2)===0||n!==un)&&(n===un&&((At&2)===0&&(tl|=a),rn===4&&Er(n,pn)),On(n,c),a===1&&At===0&&(i.mode&1)===0&&(Ds=T()+500,Io&&xr()))}function On(n,i){var a=n.callbackNode;bn(n,i);var c=Qt(n,n===un?pn:0);if(c===0)a!==null&&mo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&mo(a),i===1)n.tag===0?Bg(um.bind(null,n)):Kh(um.bind(null,n)),Ug(function(){(At&6)===0&&xr()}),a=null;else{switch(hi(c)){case 1:a=ae;break;case 4:a=ne;break;case 16:a=Z;break;case 536870912:a=Ue;break;default:a=Z}a=vm(a,cm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function cm(n,i){if(sl=-1,al=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ls()&&n.callbackNode!==a)return null;var c=Qt(n,n===un?pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ol(n,c);else{i=c;var h=At;At|=2;var x=fm();(un!==n||pn!==i)&&(qi=null,Ds=T()+500,Kr(n,i));do try{av();break}catch(I){dm(n,I)}while(!0);Jc(),el.current=x,At=h,en!==null?i=0:(un=null,pn=0,i=rn)}if(i!==0){if(i===2&&(h=yt(n),h!==0&&(c=h,i=Uu(n,h))),i===1)throw a=Oa,Kr(n,0),Er(n,c),On(n,T()),a;if(i===6)Er(n,c);else{if(h=n.current.alternate,(c&30)===0&&!rv(h)&&(i=ol(n,c),i===2&&(x=yt(n),x!==0&&(c=x,i=Uu(n,x))),i===1))throw a=Oa,Kr(n,0),Er(n,c),On(n,T()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,Fn,qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Du+500-T(),10<i)){if(Qt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=jc(Qr.bind(null,n,Fn,qi),i);break}Qr(n,Fn,qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-$e(c);x=1<<b,b=i[b],b>h&&(h=b),c&=~x}if(c=h,c=T()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iv(c/1960))-c,10<c){n.timeoutHandle=jc(Qr.bind(null,n,Fn,qi),c);break}Qr(n,Fn,qi);break;case 5:Qr(n,Fn,qi);break;default:throw Error(t(329))}}}return On(n,T()),n.callbackNode===a?cm.bind(null,n):null}function Uu(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(Kr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=Fn,Fn=a,i!==null&&Fu(i)),n}function Fu(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function rv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],x=h.getSnapshot;h=h.value;try{if(!pi(x(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Pu,i&=~tl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-$e(i),c=1<<a;n[a]=-1,i&=~c}}function um(n){if((At&6)!==0)throw Error(t(327));Ls();var i=Qt(n,0);if((i&1)===0)return On(n,T()),null;var a=ol(n,i);if(n.tag!==0&&a===2){var c=yt(n);c!==0&&(i=c,a=Uu(n,c))}if(a===1)throw a=Oa,Kr(n,0),Er(n,i),On(n,T()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,Fn,qi),On(n,T()),null}function Ou(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Ds=T()+500,Io&&xr())}}function qr(n){Sr!==null&&Sr.tag===0&&(At&6)===0&&Ls();var i=At;At|=1;var a=ai.transition,c=ot;try{if(ai.transition=null,ot=1,n)return n()}finally{ot=c,ai.transition=a,At=i,(At&6)===0&&xr()}}function ku(){qn=Ps.current,jt(Ps)}function Kr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ig(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Cs(),jt(Ln),jt(xn),au();break;case 5:ru(c);break;case 4:Cs();break;case 13:jt(Gt);break;case 19:jt(Gt);break;case 10:$c(c.type._context);break;case 22:case 23:ku()}a=a.return}if(un=n,en=n=wr(n.current,null),pn=qn=i,rn=0,Oa=null,Pu=tl=Yr=0,Fn=ka=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,x=a.pending;if(x!==null){var b=x.next;x.next=h,c.next=b}a.pending=c}Gr=null}return n}function dm(n,i){do{var a=en;try{if(Jc(),Go.current=qo,Wo){for(var c=Wt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Wo=!1}if(Xr=0,cn=nn=Wt=null,Pa=!1,Da=0,Ru.current=null,a===null||a.return===null){rn=1,Oa=i,en=null;break}e:{var x=n,b=a.return,I=a,B=i;if(i=pn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Fp(b);if(Ie!==null){Ie.flags&=-257,Op(Ie,b,I,x,i),Ie.mode&1&&Up(x,se,i),i=Ie,B=se;var je=i.updateQueue;if(je===null){var Xe=new Set;Xe.add(B),i.updateQueue=Xe}else je.add(B);break e}else{if((i&1)===0){Up(x,se,i),Bu();break e}B=Error(t(426))}}else if(Ht&&I.mode&1){var Jt=Fp(b);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Op(Jt,b,I,x,i),Qc(Ns(B,I));break e}}x=B=Ns(B,I),rn!==4&&(rn=2),ka===null?ka=[x]:ka.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var K=Lp(x,B,i);ap(x,K);break e;case 1:I=B;var H=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(yr===null||!yr.has(te)))){x.flags|=65536,i&=-i,x.lanes|=i;var Ee=Ip(x,I,i);ap(x,Ee);break e}}x=x.return}while(x!==null)}pm(a)}catch(Ke){i=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function fm(){var n=el.current;return el.current=qo,n===null?qo:n}function Bu(){(rn===0||rn===3||rn===2)&&(rn=4),un===null||(Yr&268435455)===0&&(tl&268435455)===0||Er(un,pn)}function ol(n,i){var a=At;At|=2;var c=fm();(un!==n||pn!==i)&&(qi=null,Kr(n,i));do try{sv();break}catch(h){dm(n,h)}while(!0);if(Jc(),At=a,el.current=c,en!==null)throw Error(t(261));return un=null,pn=0,rn}function sv(){for(;en!==null;)hm(en)}function av(){for(;en!==null&&!xc();)hm(en)}function hm(n){var i=gm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,i===null?pm(n):en=i,Ru.current=null}function pm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Jg(a,i,qn),a!==null){en=a;return}}else{if(a=$g(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);rn===0&&(rn=5)}function Qr(n,i,a){var c=ot,h=ai.transition;try{ai.transition=null,ot=1,ov(n,i,a,c)}finally{ai.transition=h,ot=c}return null}function ov(n,i,a,c){do Ls();while(Sr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(ar(n,x),n===un&&(en=un=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||il||(il=!0,vm(Z,function(){return Ls(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=ai.transition,ai.transition=null;var b=ot;ot=1;var I=At;At|=4,Ru.current=null,tv(n,a),rm(a,n),Ag(Bc),vo=!!kc,Bc=kc=null,n.current=a,nv(a),gc(),At=I,ot=b,ai.transition=x}else n.current=a;if(il&&(il=!1,Sr=n,rl=h),x=n.pendingLanes,x===0&&(yr=null),Qe(a.stateNode),On(n,T()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(nl)throw nl=!1,n=Lu,Lu=null,n;return(rl&1)!==0&&n.tag!==0&&Ls(),x=n.pendingLanes,(x&1)!==0?n===Iu?Ba++:(Ba=0,Iu=n):Ba=0,xr(),null}function Ls(){if(Sr!==null){var n=hi(rl),i=ai.transition,a=ot;try{if(ai.transition=null,ot=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,rl=0,(At&6)!==0)throw Error(t(331));var h=At;for(At|=4,Oe=n.current;Oe!==null;){var x=Oe,b=x.child;if((Oe.flags&16)!==0){var I=x.deletions;if(I!==null){for(var B=0;B<I.length;B++){var se=I[B];for(Oe=se;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Fa(8,ve,x)}var _e=ve.child;if(_e!==null)_e.return=ve,Oe=_e;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if($p(ve),ve===se){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var je=x.alternate;if(je!==null){var Xe=je.child;if(Xe!==null){je.child=null;do{var Jt=Xe.sibling;Xe.sibling=null,Xe=Jt}while(Xe!==null)}}Oe=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,Oe=b;else e:for(;Oe!==null;){if(x=Oe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Fa(9,x,x.return)}var K=x.sibling;if(K!==null){K.return=x.return,Oe=K;break e}Oe=x.return}}var H=n.current;for(Oe=H;Oe!==null;){b=Oe;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,Oe=te;else e:for(b=H;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:$o(9,I)}}catch(Ke){qt(I,I.return,Ke)}if(I===b){Oe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Oe=Ee;break e}Oe=I.return}}if(At=h,xr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ce,n)}catch{}c=!0}return c}finally{ot=a,ai.transition=i}}return!1}function mm(n,i,a){i=Ns(a,i),i=Lp(n,i,1),n=vr(n,i,1),i=An(),n!==null&&(Gn(n,1,i),On(n,i))}function qt(n,i,a){if(n.tag===3)mm(n,n,a);else for(;i!==null;){if(i.tag===3){mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Ns(a,n),n=Ip(i,n,1),i=vr(i,n,1),n=An(),i!==null&&(Gn(i,1,n),On(i,n));break}}i=i.return}}function lv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(pn&a)===a&&(rn===4||rn===3&&(pn&130023424)===pn&&500>T()-Du?Kr(n,0):Pu|=a),On(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=An();n=Wi(n,i),n!==null&&(Gn(n,i,a),On(n,a))}function cv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),xm(n,a)}function uv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xm(n,a)}var gm;gm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Un=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Un=!1,Zg(n,i,a);Un=(n.flags&131072)!==0}else Un=!1,Ht&&(i.flags&1048576)!==0&&Qh(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Zo(n,i),n=i.pendingProps;var h=Ss(i,xn.current);As(i,a),h=cu(null,i,c,n,h,a);var x=uu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(c)?(x=!0,Lo(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,nu(i),h.updater=Ko,i.stateNode=h,h._reactInternals=i,xu(i,c,n,a),i=yu(null,i,c,!0,x,a)):(i.tag=0,Ht&&x&&Xc(i),Tn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Zo(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=fv(c),n=xi(c,n),h){case 0:i=_u(null,i,c,n,a);break e;case 1:i=Hp(null,i,c,n,a);break e;case 11:i=kp(null,i,c,n,a);break e;case 14:i=Bp(null,i,c,xi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:xi(c,h),_u(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:xi(c,h),Hp(n,i,c,h,a);case 3:e:{if(Gp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,sp(n,i),Vo(i,c,null,a);var b=i.memoizedState;if(c=b.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=Ns(Error(t(423)),i),i=Wp(n,i,c,a,h);break e}else if(c!==h){h=Ns(Error(t(424)),i),i=Wp(n,i,c,a,h);break e}else for(Yn=hr(i.stateNode.containerInfo.firstChild),Xn=i,Ht=!0,mi=null,a=ip(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===h){i=Yi(n,i,a);break e}Tn(n,i,c,a)}i=i.child}return i;case 5:return lp(i),n===null&&Kc(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,b=h.children,zc(c,h)?b=null:x!==null&&zc(c,x)&&(i.flags|=32),Vp(n,i),Tn(n,i,b,a),i.child;case 6:return n===null&&Kc(i),null;case 13:return Xp(n,i,a);case 4:return iu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=bs(i,null,c,a):Tn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:xi(c,h),kp(n,i,c,h,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,b=h.value,kt(Bo,c._currentValue),c._currentValue=b,x!==null)if(pi(x.value,b)){if(x.children===h.children&&!Ln.current){i=Yi(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var I=x.dependencies;if(I!==null){b=x.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(x.tag===1){B=Xi(-1,a&-a),B.tag=2;var se=x.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),se.pending=B}}x.lanes|=a,B=x.alternate,B!==null&&(B.lanes|=a),eu(x.return,a,i),I.lanes|=a;break}B=B.next}}else if(x.tag===10)b=x.type===i.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),eu(b,a,i),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===i){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}Tn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,As(i,a),h=ri(h),c=c(h),i.flags|=1,Tn(n,i,c,a),i.child;case 14:return c=i.type,h=xi(c,i.pendingProps),h=xi(c.type,h),Bp(n,i,c,h,a);case 15:return zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:xi(c,h),Zo(n,i),i.tag=1,In(c)?(n=!0,Lo(i)):n=!1,As(i,a),Pp(i,c,h),xu(i,c,h,a),yu(null,i,c,!0,n,a);case 19:return qp(n,i,a);case 22:return jp(n,i,a)}throw Error(t(156,i.tag))};function vm(n,i){return po(n,i)}function dv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,i,a,c){return new dv(n,i,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fv(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ee)return 14}return 2}function wr(n,i){var a=n.alternate;return a===null?(a=oi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ll(n,i,a,c,h,x){var b=2;if(c=n,typeof n=="function")zu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case j:return Zr(a.children,h,x,i);case A:b=8,h|=8;break;case R:return n=oi(12,a,i,h|2),n.elementType=R,n.lanes=x,n;case $:return n=oi(13,a,i,h),n.elementType=$,n.lanes=x,n;case le:return n=oi(19,a,i,h),n.elementType=le,n.lanes=x,n;case W:return cl(a,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fe:b=10;break e;case k:b=9;break e;case J:b=11;break e;case ee:b=14;break e;case ie:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=oi(b,a,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function Zr(n,i,a,c){return n=oi(7,n,c,i),n.lanes=a,n}function cl(n,i,a,c){return n=oi(22,n,c,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function ju(n,i,a){return n=oi(6,n,null,i),n.lanes=a,n}function Vu(n,i,a){return i=oi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function hv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dn(0),this.expirationTimes=Dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Hu(n,i,a,c,h,x,b,I,B){return n=new hv(n,i,a,I,B),i===1?(i=1,x===!0&&(i|=8)):i=0,x=oi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(x),n}function pv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function _m(n){if(!n)return mr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return Yh(n,a,i)}return i}function ym(n,i,a,c,h,x,b,I,B){return n=Hu(a,c,!0,n,h,x,b,I,B),n.context=_m(null),a=n.current,c=An(),h=Mr(a),x=Xi(c,h),x.callback=i??null,vr(a,x,h),n.current.lanes=h,Gn(n,h,c),On(n,c),n}function ul(n,i,a,c){var h=i.current,x=An(),b=Mr(h);return a=_m(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(x,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=vr(h,i,b),n!==null&&(_i(n,h,b,x),jo(n,h,b)),b}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gu(n,i){Sm(n,i),(n=n.alternate)&&Sm(n,i)}function mv(){return null}var Mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}fl.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ul(n,i,null,null)},fl.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){ul(null,n,null,null)}),i[ji]=null}};function fl(n){this._internalRoot=n}fl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ca();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ur.length&&i!==0&&i<ur[a].priority;a++);ur.splice(a,0,n),a===0&&lh(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function xv(n,i,a,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var se=dl(b);x.call(se)}}var b=ym(i,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=b,n[ji]=b.current,Ea(n.nodeType===8?n.parentNode:n),qr(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var se=dl(B);I.call(se)}}var B=Hu(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=B,n[ji]=B.current,Ea(n.nodeType===8?n.parentNode:n),qr(function(){ul(i,B,a,c)}),B}function pl(n,i,a,c,h){var x=a._reactRootContainer;if(x){var b=x;if(typeof h=="function"){var I=h;h=function(){var B=dl(b);I.call(B)}}ul(i,b,n,h)}else b=xv(a,i,n,h,c);return dl(b)}Zt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(Rt(i,a|1),On(i,T()),(At&6)===0&&(Ds=T()+500,xr()))}break;case 13:qr(function(){var c=Wi(n,1);if(c!==null){var h=An();_i(c,n,1,h)}}),Gu(n,1)}},ti=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var a=An();_i(i,n,134217728,a)}Gu(n,134217728)}},zi=function(n){if(n.tag===13){var i=Mr(n),a=Wi(n,i);if(a!==null){var c=An();_i(a,n,i,c)}Gu(n,i)}},ca=function(){return ot},ah=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},Te=function(n,i,a){switch(i){case"input":if(Bt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Po(c);if(!h)throw Error(t(90));Kt(c),Bt(c,h)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&bt(n,!!a.multiple,i,!1)}},at=Ou,It=qr;var gv={usingClientEntryPoint:!1,Events:[Ta,_s,Po,de,ze,Ou]},za={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vv={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fo(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Ce=ml.inject(vv),Le=ml}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return pv(n,i,null,a)},kn.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var a=!1,c="",h=Mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Hu(n,1,!1,null,null,a,!1,c,h),n[ji]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Wu(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fo(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return qr(n)},kn.hydrate=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Xu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,x="",b=Mm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=ym(i,null,n,1,a??null,h,!1,x,b),n[ji]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new fl(i)},kn.render=function(n,i,a){if(!hl(i))throw Error(t(200));return pl(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){pl(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},kn.unstable_batchedUpdates=Ou,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!hl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pl(n,i,a,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Pm;function Tv(){if(Pm)return Ku.exports;Pm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ku.exports=bv(),Ku.exports}var Dm;function Av(){if(Dm)return xl;Dm=1;var s=Tv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var Cv=Av();const Fd="/niduxone/assets/81b886f34308b9c29c4bb4272f90c74fdcfcc1cf-DMkJiHlF.png",Nv="/niduxone/assets/cad1eedb250dedb989bcf880945e8e4ddec9e375-fTQrOpOh.png",Rv="/niduxone/assets/ff2602408fe0dfe0c3aa47190fca9bba7cce2892-C5LJFu4o.png",Pv="/niduxone/assets/236905f42cbad7f1896f604b569774dc4f341eca-CryAWzfC.png",Dv="/niduxone/assets/e72576206dda58dcb72858e9a1a4c0a7fc3aa23e-Bw_XQcWk.png",Lv="/niduxone/assets/0e260aada5ca13c918e52190cb9b0e4e0e50d721-1XGseohQ.png",Lm="/niduxone/assets/d25169f57a91ab45e7f39965e7de2d8bff073a2c-CnWP4qe9.png";var vt=Uf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="183",Ks={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iv=0,Im=1,Uv=2,Yl=1,Fv=2,Za=3,Ur=0,Vn=1,er=2,Ui=0,Qs=1,Js=2,Um=3,Fm=4,Ov=5,rs=100,kv=101,Bv=102,zv=103,jv=104,Vv=200,Hv=201,Gv=202,Wv=203,Od=204,kd=205,Xv=206,Yv=207,qv=208,Kv=209,Qv=210,Zv=211,Jv=212,$v=213,e_=214,Bd=0,zd=1,jd=2,$s=3,Vd=4,Hd=5,Gd=6,Wd=7,$x=0,t_=1,n_=2,Fi=0,Of=1,kf=2,Bf=3,uc=4,zf=5,jf=6,Vf=7,e0=300,ls=301,ea=302,Ju=303,$u=304,dc=306,Xd=1e3,tr=1001,Yd=1002,mn=1003,i_=1004,gl=1005,Mn=1006,ed=1007,as=1008,fi=1009,t0=1010,n0=1011,$a=1012,Hf=1013,Oi=1014,Li=1015,Zn=1016,Gf=1017,Wf=1018,eo=1020,i0=35902,r0=35899,s0=1021,a0=1022,wi=1023,ir=1026,os=1027,o0=1028,Xf=1029,ta=1030,Yf=1031,qf=1033,ql=33776,Kl=33777,Ql=33778,Zl=33779,qd=35840,Kd=35841,Qd=35842,Zd=35843,Jd=36196,$d=37492,ef=37496,tf=37488,nf=37489,rf=37490,sf=37491,af=37808,of=37809,lf=37810,cf=37811,uf=37812,df=37813,ff=37814,hf=37815,pf=37816,mf=37817,xf=37818,gf=37819,vf=37820,_f=37821,yf=36492,Sf=36494,Mf=36495,Ef=36283,wf=36284,bf=36285,Tf=36286,r_=3200,s_=0,a_=1,Lr="",ui="srgb",na="srgb-linear",ic="linear",Lt="srgb",Is=7680,Om=519,o_=512,l_=513,c_=514,Kf=515,u_=516,d_=517,Qf=518,f_=519,km=35044,Bm="300 es",Ii=2e3,rc=2001;function h_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function p_(){const s=sc("canvas");return s.style.display="block",s}const zm={};function jm(...s){const e="THREE."+s.shift();console.log(e,...s)}function l0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=l0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=l0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ac(...s){const e=s.join(" ");e in zm||(zm[e]=!0,st(...s))}function m_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const x_={[Bd]:zd,[jd]:Gd,[Vd]:Wd,[$s]:Hd,[zd]:Bd,[Gd]:jd,[Wd]:Vd,[Hd]:$s};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,Af=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function g_(s,e){return(s%e+e)%e}function td(s,e,t){return(1-t)*s+t*e}function Va(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const v_={DEG2RAD:Jl};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],g=l[d+0],M=l[d+1],w=l[d+2],C=l[d+3];if(_!==C||p!==g||m!==M||v!==w){let y=p*g+m*M+v*w+_*C;y<0&&(g=-g,M=-M,w=-w,C=-C,y=-y);let S=1-f;if(y<.9995){const N=Math.acos(y),L=Math.sin(N);S=Math.sin(S*N)/L,f=Math.sin(f*N)/L,p=p*S+g*f,m=m*S+M*f,v=v*S+w*f,_=_*S+C*f}else{p=p*S+g*f,m=m*S+M*f,v=v*S+w*f,_=_*S+C*f;const N=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=N,m*=N,v*=N,_*=N}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=l[d],g=l[d+1],M=l[d+2],w=l[d+3];return e[t]=f*w+v*_+p*M-m*g,e[t+1]=p*w+v*g+m*_-f*M,e[t+2]=m*w+v*M+f*g-p*_,e[t+3]=v*w-f*_-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(o/2),_=f(l/2),g=p(r/2),M=p(o/2),w=p(l/2);switch(d){case"XYZ":this._x=g*v*_+m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_-g*M*w;break;case"YXZ":this._x=g*v*_+m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_+g*M*w;break;case"ZXY":this._x=g*v*_-m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_-g*M*w;break;case"ZYX":this._x=g*v*_-m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_+g*M*w;break;case"YZX":this._x=g*v*_+m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_-g*M*w;break;case"XZY":this._x=g*v*_-m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_+g*M*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],v=t[6],_=t[10],g=r+f+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+d*f+o*m-l*p,this._y=o*v+d*p+l*f-r*m,this._z=l*v+d*m+r*p-o*f,this._w=d*v-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),v=2*(f*t-l*o),_=2*(l*r-d*t);return this.x=t+p*m+d*_-f*v,this.y=r+p*v+f*m-l*_,this.z=o+p*_+l*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new Y,Vm=new Fr;class ft{constructor(e,t,r,o,l,d,f,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],M=r[5],w=r[8],C=o[0],y=o[3],S=o[6],N=o[1],L=o[4],D=o[7],F=o[2],O=o[5],j=o[8];return l[0]=d*C+f*N+p*F,l[3]=d*y+f*L+p*O,l[6]=d*S+f*D+p*j,l[1]=m*C+v*N+_*F,l[4]=m*y+v*L+_*O,l[7]=m*S+v*D+_*j,l[2]=g*C+M*N+w*F,l[5]=g*y+M*L+w*O,l[8]=g*S+M*D+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*f*m-r*l*v+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=v*d-f*m,g=f*p-v*l,M=m*l-d*p,w=t*_+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(o*m-v*r)*C,e[2]=(f*r-o*d)*C,e[3]=g*C,e[4]=(v*t-o*p)*C,e[5]=(o*l-f*t)*C,e[6]=M*C,e[7]=(r*p-m*t)*C,e[8]=(d*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(id.makeScale(e,t)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,t){return this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new ft,Hm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function __(){const s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Lt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Lt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?ic:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ac("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ac("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[na]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Et=__();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class y_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=sc("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=nr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S_=0;class Zf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(rd(o[d].image)):l.push(rd(o[d]))}else l=rd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?y_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let M_=0;const sd=new Y;class Nn extends cs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=tr,o=tr,l=Mn,d=as,f=wi,p=fi,m=Nn.DEFAULT_ANISOTROPY,v=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=io(),this.name="",this.source=new Zf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=e0;Nn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],v=p[4],_=p[8],g=p[1],M=p[5],w=p[9],C=p[2],y=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,D=(M+1)/2,F=(S+1)/2,O=(v+g)/4,j=(_+C)/4,A=(w+y)/4;return L>D&&L>F?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=O/r,l=j/r):D>F?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=O/o,l=A/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=j/l,o=A/l),this.set(r,o,l,t),this}let N=Math.sqrt((y-w)*(y-w)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(N)<.001&&(N=1),this.x=(y-w)/N,this.y=(_-C)/N,this.z=(g-v)/N,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Nn(o),d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Zf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends E_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class c0 extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w_ extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e,t,r,o,l,d,f,p,m,v,_,g,M,w,C,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,v,_,g,M,w,C,y)}set(e,t,r,o,l,d,f,p,m,v,_,g,M,w,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=d,S[9]=f,S[13]=p,S[2]=m,S[6]=v,S[10]=_,S[14]=g,S[3]=M,S[7]=w,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),d=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=d*v,M=d*_,w=f*v,C=f*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=M+w*m,t[5]=g-C*m,t[9]=-f*p,t[2]=C-g*m,t[6]=w+M*m,t[10]=d*p}else if(e.order==="YXZ"){const g=p*v,M=p*_,w=m*v,C=m*_;t[0]=g+C*f,t[4]=w*f-M,t[8]=d*m,t[1]=d*_,t[5]=d*v,t[9]=-f,t[2]=M*f-w,t[6]=C+g*f,t[10]=d*p}else if(e.order==="ZXY"){const g=p*v,M=p*_,w=m*v,C=m*_;t[0]=g-C*f,t[4]=-d*_,t[8]=w+M*f,t[1]=M+w*f,t[5]=d*v,t[9]=C-g*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const g=d*v,M=d*_,w=f*v,C=f*_;t[0]=p*v,t[4]=w*m-M,t[8]=g*m+C,t[1]=p*_,t[5]=C*m+g,t[9]=M*m-w,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const g=d*p,M=d*m,w=f*p,C=f*m;t[0]=p*v,t[4]=C-g*_,t[8]=w*_+M,t[1]=_,t[5]=d*v,t[9]=-f*v,t[2]=-m*v,t[6]=M*_+w,t[10]=g-C*_}else if(e.order==="XZY"){const g=d*p,M=d*m,w=f*p,C=f*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=g*_+C,t[5]=d*v,t[9]=M*_-w,t[2]=w*_-M,t[6]=f*v,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b_,e,T_)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(r,Kn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(r,Kn)),Tr.normalize(),vl.crossVectors(Kn,Tr),o[0]=Tr.x,o[4]=vl.x,o[8]=Kn.x,o[1]=Tr.y,o[5]=vl.y,o[9]=Kn.y,o[2]=Tr.z,o[6]=vl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],M=r[13],w=r[2],C=r[6],y=r[10],S=r[14],N=r[3],L=r[7],D=r[11],F=r[15],O=o[0],j=o[4],A=o[8],R=o[12],fe=o[1],k=o[5],J=o[9],$=o[13],le=o[2],ee=o[6],ie=o[10],W=o[14],Q=o[3],oe=o[7],ce=o[11],U=o[15];return l[0]=d*O+f*fe+p*le+m*Q,l[4]=d*j+f*k+p*ee+m*oe,l[8]=d*A+f*J+p*ie+m*ce,l[12]=d*R+f*$+p*W+m*U,l[1]=v*O+_*fe+g*le+M*Q,l[5]=v*j+_*k+g*ee+M*oe,l[9]=v*A+_*J+g*ie+M*ce,l[13]=v*R+_*$+g*W+M*U,l[2]=w*O+C*fe+y*le+S*Q,l[6]=w*j+C*k+y*ee+S*oe,l[10]=w*A+C*J+y*ie+S*ce,l[14]=w*R+C*$+y*W+S*U,l[3]=N*O+L*fe+D*le+F*Q,l[7]=N*j+L*k+D*ee+F*oe,l[11]=N*A+L*J+D*ie+F*ce,l[15]=N*R+L*$+D*W+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],_=e[6],g=e[10],M=e[14],w=e[3],C=e[7],y=e[11],S=e[15],N=p*M-m*g,L=f*M-m*_,D=f*g-p*_,F=d*M-m*v,O=d*g-p*v,j=d*_-f*v;return t*(C*N-y*L+S*D)-r*(w*N-y*F+S*O)+o*(w*L-C*F+S*j)-l*(w*D-C*O+y*j)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=e[9],g=e[10],M=e[11],w=e[12],C=e[13],y=e[14],S=e[15],N=t*f-r*d,L=t*p-o*d,D=t*m-l*d,F=r*p-o*f,O=r*m-l*f,j=o*m-l*p,A=v*C-_*w,R=v*y-g*w,fe=v*S-M*w,k=_*y-g*C,J=_*S-M*C,$=g*S-M*y,le=N*$-L*J+D*k+F*fe-O*R+j*A;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/le;return e[0]=(f*$-p*J+m*k)*ee,e[1]=(o*J-r*$-l*k)*ee,e[2]=(C*j-y*O+S*F)*ee,e[3]=(g*O-_*j-M*F)*ee,e[4]=(p*fe-d*$-m*R)*ee,e[5]=(t*$-o*fe+l*R)*ee,e[6]=(y*D-w*j-S*L)*ee,e[7]=(v*j-g*D+M*L)*ee,e[8]=(d*J-f*fe+m*A)*ee,e[9]=(r*fe-t*J-l*A)*ee,e[10]=(w*O-C*D+S*N)*ee,e[11]=(_*D-v*O-M*N)*ee,e[12]=(f*R-d*k-p*A)*ee,e[13]=(t*k-r*R+o*A)*ee,e[14]=(C*L-w*F-y*N)*ee,e[15]=(v*F-_*L+g*N)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,v=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+r,v*p-o*d,0,m*p-o*f,v*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,v=d+d,_=f+f,g=l*m,M=l*v,w=l*_,C=d*v,y=d*_,S=f*_,N=p*m,L=p*v,D=p*_,F=r.x,O=r.y,j=r.z;return o[0]=(1-(C+S))*F,o[1]=(M+D)*F,o[2]=(w-L)*F,o[3]=0,o[4]=(M-D)*O,o[5]=(1-(g+S))*O,o[6]=(y+N)*O,o[7]=0,o[8]=(w+L)*j,o[9]=(y-N)*j,o[10]=(1-(g+C))*j,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let d=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),p=Fs.set(o[8],o[9],o[10]).length();l<0&&(d=-d),yi.copy(this);const m=1/d,v=1/f,_=1/p;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,t.setFromRotationMatrix(yi),r.x=d,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,d,f=Ii,p=!1){const m=this.elements,v=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let w,C;if(p)w=l/(d-l),C=d*l/(d-l);else if(f===Ii)w=-(d+l)/(d-l),C=-2*d*l/(d-l);else if(f===rc)w=-d/(d-l),C=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=Ii,p=!1){const m=this.elements,v=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let w,C;if(p)w=1/(d-l),C=d/(d-l);else if(f===Ii)w=-2/(d-l),C=-(d+l)/(d-l);else if(f===rc)w=-1/(d-l),C=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new Y,yi=new Yt,b_=new Y(0,0,0),T_=new Y(1,1,1),Tr=new Y,vl=new Y,Kn=new Y,Wm=new Yt,Xm=new Fr;class rr{constructor(e=0,t=0,r=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],v=o[9],_=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";let Jf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A_=0;const Ym=new Y,Os=new Fr,Ki=new Yt,_l=new Y,Ha=new Y,C_=new Y,N_=new Fr,qm=new Y(1,0,0),Km=new Y(0,1,0),Qm=new Y(0,0,1),Zm={type:"added"},R_={type:"removed"},ks={type:"childadded",child:null},ad={type:"childremoved",child:null};class En extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Y,t=new rr,r=new Fr,o=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_l.copy(e):_l.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ha,_l,this.up):Ki.lookAt(_l,Ha,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Ki),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),g=d(e.skeletons),M=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}En.DEFAULT_UP=new Y(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(m,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,w=.005;m.inputState.pinching&&g>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=g_(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=ld(d,l,e+1/3),this.g=ld(d,l,e),this.b=ld(d,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=u0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Et.workingToColorSpace(Sn.copy(this),e),Math.round(gt(Sn.r*255,0,255))*65536+Math.round(gt(Sn.g*255,0,255))*256+Math.round(gt(Sn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const _=d-f;switch(m=v<=.5?_/(d+f):_/(2-d-f),d){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ui){Et.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Sl);const r=td(Ar.h,Sl.h,t),o=td(Ar.s,Sl.s,t),l=td(Ar.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new St;St.NAMES=u0;class $f{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new $f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class D_ extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new Y,Qi=new Y,cd=new Y,Zi=new Y,Bs=new Y,zs=new Y,Jm=new Y,ud=new Y,dd=new Y,fd=new Y,hd=new $t,pd=new $t,md=new $t;class Ei{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),Qi.subVectors(r,t),cd.subVectors(e,t);const d=Si.dot(Si),f=Si.dot(Qi),p=Si.dot(cd),m=Qi.dot(Qi),v=Qi.dot(cd),_=d*m-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(m*p-f*v)*g,w=(d*v-f*p)*g;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,Zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Zi.x),p.addScaledVector(d,Zi.y),p.addScaledVector(f,Zi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,r),md.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(hd,l.x),d.addScaledVector(pd,l.y),d.addScaledVector(md,l.z),d}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),Qi.subVectors(e,t),Si.cross(Qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;Bs.subVectors(o,r),zs.subVectors(l,r),ud.subVectors(e,r);const p=Bs.dot(ud),m=zs.dot(ud);if(p<=0&&m<=0)return t.copy(r);dd.subVectors(e,o);const v=Bs.dot(dd),_=zs.dot(dd);if(v>=0&&_<=v)return t.copy(o);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return d=p/(p-v),t.copy(r).addScaledVector(Bs,d);fd.subVectors(e,l);const M=Bs.dot(fd),w=zs.dot(fd);if(w>=0&&M<=w)return t.copy(l);const C=M*m-p*w;if(C<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(r).addScaledVector(zs,f);const y=v*w-M*_;if(y<=0&&_-v>=0&&M-w>=0)return Jm.subVectors(l,o),f=(_-v)/(_-v+(M-w)),t.copy(o).addScaledVector(Jm,f);const S=1/(y+C+g);return d=C*S,f=g*S,t.copy(r).addScaledVector(Bs,d).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ro{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(l,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),El.subVectors(this.max,Ga),js.subVectors(e.a,Ga),Vs.subVectors(e.b,Ga),Hs.subVectors(e.c,Ga),Cr.subVectors(Vs,js),Nr.subVectors(Hs,Vs),Jr.subVectors(js,Hs);let t=[0,-Cr.z,Cr.y,0,-Nr.z,Nr.y,0,-Jr.z,Jr.y,Cr.z,0,-Cr.x,Nr.z,0,-Nr.x,Jr.z,0,-Jr.x,-Cr.y,Cr.x,0,-Nr.y,Nr.x,0,-Jr.y,Jr.x,0];return!xd(t,js,Vs,Hs,El)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,js,Vs,Hs,El))?!1:(wl.crossVectors(Cr,Nr),t=[wl.x,wl.y,wl.z],xd(t,js,Vs,Hs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Mi=new Y,Ml=new ro,js=new Y,Vs=new Y,Hs=new Y,Cr=new Y,Nr=new Y,Jr=new Y,Ga=new Y,El=new Y,wl=new Y,$r=new Y;function xd(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){$r.fromArray(s,l);const f=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),p=e.dot($r),m=t.dot($r),v=r.dot($r);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const tn=new Y,bl=new nt;let L_=0;class Xt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=km,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Va(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Va(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Va(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Va(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Va(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class d0 extends Xt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class f0 extends Xt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Jn extends Xt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const I_=new ro,Wa=new Y,gd=new Y;class so{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):I_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(gd)),this.expandByPoint(Wa.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let U_=0;const li=new Yt,vd=new En,Gs=new Y,Qn=new ro,Xa=new ro,fn=new Y;class Rn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?f0:d0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Jn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];Xa.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(Qn.min,Xa.min),Qn.expandByPoint(fn),fn.addVectors(Qn.max,Xa.max),Qn.expandByPoint(fn)):(Qn.expandByPoint(Xa.min),Qn.expandByPoint(Xa.max))}Qn.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)fn.fromBufferAttribute(f,m),p&&(Gs.fromBufferAttribute(e,m),fn.add(Gs)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<r.count;A++)f[A]=new Y,p[A]=new Y;const m=new Y,v=new Y,_=new Y,g=new nt,M=new nt,w=new nt,C=new Y,y=new Y;function S(A,R,fe){m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,fe),g.fromBufferAttribute(l,A),M.fromBufferAttribute(l,R),w.fromBufferAttribute(l,fe),v.sub(m),_.sub(m),M.sub(g),w.sub(g);const k=1/(M.x*w.y-w.x*M.y);isFinite(k)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(_,-M.y).multiplyScalar(k),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(k),f[A].add(C),f[R].add(C),f[fe].add(C),p[A].add(y),p[R].add(y),p[fe].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,R=N.length;A<R;++A){const fe=N[A],k=fe.start,J=fe.count;for(let $=k,le=k+J;$<le;$+=3)S(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new Y,D=new Y,F=new Y,O=new Y;function j(A){F.fromBufferAttribute(o,A),O.copy(F);const R=f[A];L.copy(R),L.sub(F.multiplyScalar(F.dot(R))).normalize(),D.crossVectors(O,R);const k=D.dot(p[A])<0?-1:1;d.setXYZW(A,L.x,L.y,L.z,k)}for(let A=0,R=N.length;A<R;++A){const fe=N[A],k=fe.start,J=fe.count;for(let $=k,le=k+J;$<le;$+=3)j(e.getX($+0)),j(e.getX($+1)),j(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new Y,l=new Y,d=new Y,f=new Y,p=new Y,m=new Y,v=new Y,_=new Y;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),d.fromBufferAttribute(t,y),v.subVectors(d,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),v.subVectors(d,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,_=f.normalized,g=new m.constructor(p.length*v);let M=0,w=0;for(let C=0,y=p.length;C<y;C++){f.isInterleavedBufferAttribute?M=p[C]*f.data.stride+f.offset:M=p[C]*v;for(let S=0;S<v;S++)g[w++]=m[M++]}return new Xt(g,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,_=m.length;v<_;v++){const g=m[v],M=e(g,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let F_=0;class sa extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Qs,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=kd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new Y,_d=new Y,Tl=new Y,Rr=new Y,yd=new Y,Al=new Y,Sd=new Y;class ao{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){_d.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(_d);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Tl),f=Rr.dot(this.direction),p=-Rr.dot(Tl),m=Rr.lengthSq(),v=Math.abs(1-d*d);let _,g,M,w;if(v>0)if(_=d*p-f,g=d*f-p,w=l*v,_>=0)if(g>=-w)if(g<=w){const C=1/v;_*=C,g*=C,M=_*(_+d*g+2*f)+g*(d*_+g+2*p)+m}else g=l,_=Math.max(0,-(d*g+f)),M=-_*_+g*(g+2*p)+m;else g=-l,_=Math.max(0,-(d*g+f)),M=-_*_+g*(g+2*p)+m;else g<=-w?(_=Math.max(0,-(-d*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+m):g<=w?(_=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+m):(_=Math.max(0,-(d*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+m);else g=d>0?-l:l,_=Math.max(0,-(d*g+f)),M=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_d).addScaledVector(Tl,g),M}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(l=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){yd.subVectors(t,e),Al.subVectors(r,e),Sd.crossVectors(yd,Al);let d=this.direction.dot(Sd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Rr.subVectors(this.origin,e);const p=f*this.direction.dot(Al.crossVectors(Rr,Al));if(p<0)return null;const m=f*this.direction.dot(yd.cross(Rr));if(m<0||p+m>d)return null;const v=-f*Rr.dot(Sd);return v<0?null:this.at(v/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eh extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $m=new Yt,es=new ao,Cl=new so,ex=new Y,Nl=new Y,Rl=new Y,Pl=new Y,Md=new Y,Dl=new Y,tx=new Y,Ll=new Y;class ki extends En{constructor(e=new Rn,t=new eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=f[p],_=l[p];v!==0&&(Md.fromBufferAttribute(_,e),d?Dl.addScaledVector(Md,v):Dl.addScaledVector(Md.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Cl.containsPoint(es.origin)===!1&&(es.intersectSphere(Cl,ex)===null||es.origin.distanceToSquared(ex)>(e.far-e.near)**2))&&($m.copy(l).invert(),es.copy(e.ray).applyMatrix4($m),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,C=g.length;w<C;w++){const y=g[w],S=d[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,F=L;D<F;D+=3){const O=f.getX(D),j=f.getX(D+1),A=f.getX(D+2);o=Il(this,S,e,r,m,v,_,O,j,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let y=w,S=C;y<S;y+=3){const N=f.getX(y),L=f.getX(y+1),D=f.getX(y+2);o=Il(this,d,e,r,m,v,_,N,L,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,C=g.length;w<C;w++){const y=g[w],S=d[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,F=L;D<F;D+=3){const O=D,j=D+1,A=D+2;o=Il(this,S,e,r,m,v,_,O,j,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=w,S=C;y<S;y+=3){const N=y,L=y+1,D=y+2;o=Il(this,d,e,r,m,v,_,N,L,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function O_(s,e,t,r,o,l,d,f){let p;if(e.side===Vn?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===Ur,f),p===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ll);return m<t.near||m>t.far?null:{distance:m,point:Ll.clone(),object:s}}function Il(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,Nl),s.getVertexPosition(p,Rl),s.getVertexPosition(m,Pl);const v=O_(s,e,t,r,Nl,Rl,Pl,tx);if(v){const _=new Y;Ei.getBarycoord(tx,Nl,Rl,Pl,_),o&&(v.uv=Ei.getInterpolatedAttribute(o,f,p,m,_,new nt)),l&&(v.uv1=Ei.getInterpolatedAttribute(l,f,p,m,_,new nt)),d&&(v.normal=Ei.getInterpolatedAttribute(d,f,p,m,_,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new Y,materialIndex:0};Ei.getNormal(Nl,Rl,Pl,g.normal),v.face=g,v.barycoord=_}return v}class k_ extends Nn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=mn,v=mn,_,g){super(null,d,f,p,m,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new Y,B_=new Y,z_=new ft;class Dr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ed.subVectors(r,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||z_.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new so,j_=new nt(.5,.5),Ul=new Y;class h0{constructor(e=new Dr,t=new Dr,r=new Dr,o=new Dr,l=new Dr,d=new Dr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],v=l[4],_=l[5],g=l[6],M=l[7],w=l[8],C=l[9],y=l[10],S=l[11],N=l[12],L=l[13],D=l[14],F=l[15];if(o[0].setComponents(m-d,M-v,S-w,F-N).normalize(),o[1].setComponents(m+d,M+v,S+w,F+N).normalize(),o[2].setComponents(m+f,M+_,S+C,F+L).normalize(),o[3].setComponents(m-f,M-_,S-C,F-L).normalize(),r)o[4].setComponents(p,g,y,D).normalize(),o[5].setComponents(m-p,M-g,S-y,F-D).normalize();else if(o[4].setComponents(m-p,M-g,S-y,F-D).normalize(),t===Ii)o[5].setComponents(m+p,M+g,S+y,F+D).normalize();else if(t===rc)o[5].setComponents(p,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=j_.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V_ extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new Y,lc=new Y,nx=new Yt,Ya=new ao,Fl=new so,wd=new Y,ix=new Y;class H_ extends En{constructor(e=new Rn,t=new V_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)oc.fromBufferAttribute(t,o-1),lc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new Jn(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(o),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;nx.copy(o).invert(),Ya.copy(e.ray).applyMatrix4(nx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let C=M,y=w-1;C<y;C+=m){const S=v.getX(C),N=v.getX(C+1),L=Ol(this,e,Ya,p,S,N,C);L&&t.push(L)}if(this.isLineLoop){const C=v.getX(w-1),y=v.getX(M),S=Ol(this,e,Ya,p,C,y,w-1);S&&t.push(S)}}else{const M=Math.max(0,d.start),w=Math.min(g.count,d.start+d.count);for(let C=M,y=w-1;C<y;C+=m){const S=Ol(this,e,Ya,p,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=Ol(this,e,Ya,p,w-1,M,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Ol(s,e,t,r,o,l,d){const f=s.geometry.attributes.position;if(oc.fromBufferAttribute(f,o),lc.fromBufferAttribute(f,l),t.distanceSqToSegment(oc,lc,wd,ix)>r)return;wd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(wd);if(!(m<e.near||m>e.far))return{distance:m,point:ix.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const rx=new Y,sx=new Y;class G_ extends H_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)rx.fromBufferAttribute(t,o),sx.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+rx.distanceTo(sx);e.setAttribute("lineDistance",new Jn(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W_ extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ax=new Yt,Cf=new ao,kl=new so,Bl=new Y;class p0 extends En{constructor(e=new Rn,t=new W_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;ax.copy(o).invert(),Cf.copy(e.ray).applyMatrix4(ax);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,_=r.attributes.position;if(m!==null){const g=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let w=g,C=M;w<C;w++){const y=m.getX(w);Bl.fromBufferAttribute(_,y),ox(Bl,y,p,o,e,t,this)}}else{const g=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let w=g,C=M;w<C;w++)Bl.fromBufferAttribute(_,w),ox(Bl,w,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ox(s,e,t,r,o,l,d){const f=Cf.distanceSqToPoint(s);if(f<t){const p=new Y;Cf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class m0 extends Nn{constructor(e=[],t=ls,r,o,l,d,f,p,m,v){super(e,t,r,o,l,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class to extends Nn{constructor(e,t,r=Oi,o,l,d,f=mn,p=mn,m,v=ir,_=1){if(v!==ir&&v!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,d,f,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class X_ extends to{constructor(e,t=Oi,r=ls,o,l,d=mn,f=mn,p,m=ir){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,d,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class x0 extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oo extends Rn{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],v=[],_=[];let g=0,M=0;w("z","y","x",-1,-1,r,t,e,d,l,0),w("z","y","x",1,-1,r,t,-e,d,l,1),w("x","z","y",1,1,e,r,t,o,d,2),w("x","z","y",1,-1,e,r,-t,o,d,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(v,3)),this.setAttribute("uv",new Jn(_,2));function w(C,y,S,N,L,D,F,O,j,A,R){const fe=D/j,k=F/A,J=D/2,$=F/2,le=O/2,ee=j+1,ie=A+1;let W=0,Q=0;const oe=new Y;for(let ce=0;ce<ie;ce++){const U=ce*k-$;for(let q=0;q<ee;q++){const Ae=q*fe-J;oe[C]=Ae*N,oe[y]=U*L,oe[S]=le,m.push(oe.x,oe.y,oe.z),oe[C]=0,oe[y]=0,oe[S]=O>0?1:-1,v.push(oe.x,oe.y,oe.z),_.push(q/j),_.push(1-ce/A),W+=1}}for(let ce=0;ce<A;ce++)for(let U=0;U<j;U++){const q=g+U+ee*ce,Ae=g+U+ee*(ce+1),We=g+(U+1)+ee*(ce+1),Ze=g+(U+1)+ee*ce;p.push(q,Ae,Ze),p.push(Ae,We,Ze),Q+=6}f.addGroup(M,Q,R),M+=Q,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fc extends Rn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,v=p+1,_=e/f,g=t/p,M=[],w=[],C=[],y=[];for(let S=0;S<v;S++){const N=S*g-d;for(let L=0;L<m;L++){const D=L*_-l;w.push(D,-N,0),C.push(0,0,1),y.push(L/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let N=0;N<f;N++){const L=N+m*S,D=N+m*(S+1),F=N+1+m*(S+1),O=N+1+m*S;M.push(L,D,O),M.push(D,F,O)}this.setIndex(M),this.setAttribute("position",new Jn(w,3)),this.setAttribute("normal",new Jn(C,3)),this.setAttribute("uv",new Jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=ia(s[t]);for(const o in r)e[o]=r[o]}return e}function Y_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function g0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const no={clone:ia,merge:Cn};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class v0 extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q_ extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class J_ extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const zl=new Y,jl=new Fr,Ri=new Y;class _0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,jl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,jl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zl,jl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,jl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new Y,lx=new nt,cx=new nt;class di extends _0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,lx,cx),t.subVectors(cx,lx)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class th extends _0{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $_ extends J_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,Xs=1;class e1 extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new di(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const d=new di(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const f=new di(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const p=new di(Ws,Xs,e,t);p.layers=this.layers,this.add(p);const m=new di(Ws,Xs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class t1 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let n1=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=i1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function i1(){this._document.hidden===!1&&this.reset()}const ux=new Yt;class r1{constructor(e,t,r=0,o=1/0){this.ray=new ao(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ux.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(e,t=!0,r=[]){return Nf(e,this,r,t),r.sort(dx),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Nf(e[o],this,r,t);return r.sort(dx),r}}function dx(s,e){return s.distance-e.distance}function Nf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)Nf(l[d],e,t,!0)}}class s1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class fx{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a1 extends cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hx(s,e,t,r){const o=o1(r);switch(t){case s0:return s*e;case o0:return s*e/o.components*o.byteLength;case Xf:return s*e/o.components*o.byteLength;case ta:return s*e*2/o.components*o.byteLength;case Yf:return s*e*2/o.components*o.byteLength;case a0:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case qf:return s*e*4/o.components*o.byteLength;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Zd:return Math.max(s,16)*Math.max(e,8)/4;case qd:case Qd:return Math.max(s,8)*Math.max(e,8)/2;case Jd:case $d:case tf:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ef:case rf:case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _f:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yf:case Sf:case Mf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ef:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bf:case Tf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(s){switch(s){case fi:case t0:return{byteLength:1,components:1};case $a:case n0:case Zn:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case Oi:case Hf:case Li:return{byteLength:4,components:1};case i0:case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y0(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function l1(s){const e=new WeakMap;function t(f,p){const m=f.array,v=f.usage,_=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<_.length;M++){const w=_[g],C=_[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,w=_.length;M<w;M++){const C=_[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var c1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,v1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ly=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:c1,alphahash_pars_fragment:u1,alphamap_fragment:d1,alphamap_pars_fragment:f1,alphatest_fragment:h1,alphatest_pars_fragment:p1,aomap_fragment:m1,aomap_pars_fragment:x1,batching_pars_vertex:g1,batching_vertex:v1,begin_vertex:_1,beginnormal_vertex:y1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:T1,clipping_planes_vertex:A1,color_fragment:C1,color_pars_fragment:N1,color_pars_vertex:R1,color_vertex:P1,common:D1,cube_uv_reflection_fragment:L1,defaultnormal_vertex:I1,displacementmap_pars_vertex:U1,displacementmap_vertex:F1,emissivemap_fragment:O1,emissivemap_pars_fragment:k1,colorspace_fragment:B1,colorspace_pars_fragment:z1,envmap_fragment:j1,envmap_common_pars_fragment:V1,envmap_pars_fragment:H1,envmap_pars_vertex:G1,envmap_physical_pars_fragment:ty,envmap_vertex:W1,fog_vertex:X1,fog_pars_vertex:Y1,fog_fragment:q1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:Z1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:$1,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:ay,lights_physical_pars_fragment:oy,lights_fragment_begin:ly,lights_fragment_maps:cy,lights_fragment_end:uy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:xy,map_particle_fragment:gy,map_particle_pars_fragment:vy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:yy,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:wy,morphtarget_vertex:by,normal_fragment_begin:Ty,normal_fragment_maps:Ay,normal_pars_fragment:Cy,normal_pars_vertex:Ny,normal_vertex:Ry,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:ky,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:jy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:Ky,skinning_vertex:Qy,skinnormal_vertex:Zy,specularmap_fragment:Jy,specularmap_pars_fragment:$y,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:aS,worldpos_vertex:oS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:dS,cube_vert:fS,cube_frag:hS,depth_vert:pS,depth_frag:mS,distance_vert:xS,distance_frag:gS,equirect_vert:vS,equirect_frag:_S,linedashed_vert:yS,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:wS,meshlambert_frag:bS,meshmatcap_vert:TS,meshmatcap_frag:AS,meshnormal_vert:CS,meshnormal_frag:NS,meshphong_vert:RS,meshphong_frag:PS,meshphysical_vert:DS,meshphysical_frag:LS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:FS,points_frag:OS,shadow_vert:kS,shadow_frag:BS,sprite_vert:zS,sprite_frag:jS},Re={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Di={basic:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([Re.points,Re.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([Re.common,Re.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([Re.sprite,Re.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Cn([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Cn([Re.lights,Re.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Di.physical={uniforms:Cn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Vl={r:0,b:0,g:0},ns=new rr,VS=new Yt;function HS(s,e,t,r,o,l){const d=new St(0);let f=o===!0?0:1,p,m,v=null,_=0,g=null;function M(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const D=N.backgroundBlurriness>0;L=e.get(L,D)}return L}function w(N){let L=!1;const D=M(N);D===null?y(d,f):D&&D.isColor&&(y(D,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(N,L){const D=M(L);D&&(D.isCubeTexture||D.mapping===dc)?(m===void 0&&(m=new ki(new oo(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ia(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,O,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ns.copy(L.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(ns)),m.material.toneMapped=Et.getTransfer(D.colorSpace)!==Lt,(v!==D||_!==D.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=D,_=D.version,g=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new ki(new fc(2,2),new an({name:"BackgroundMaterial",uniforms:ia(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Et.getTransfer(D.colorSpace)!==Lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||_!==D.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=D,_=D.version,g=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function y(N,L){N.getRGB(Vl,g0(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,L,l)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,L=1){d.set(N),f=L,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,y(d,f)},render:w,addToRenderList:C,dispose:S}}function GS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,d=!1;function f(k,J,$,le,ee){let ie=!1;const W=_(k,le,$,J);l!==W&&(l=W,m(l.object)),ie=M(k,le,$,ee),ie&&w(k,le,$,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,D(k,J,$,le),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function _(k,J,$,le){const ee=le.wireframe===!0;let ie=r[J.id];ie===void 0&&(ie={},r[J.id]=ie);const W=k.isInstancedMesh===!0?k.id:0;let Q=ie[W];Q===void 0&&(Q={},ie[W]=Q);let oe=Q[$.id];oe===void 0&&(oe={},Q[$.id]=oe);let ce=oe[ee];return ce===void 0&&(ce=g(p()),oe[ee]=ce),ce}function g(k){const J=[],$=[],le=[];for(let ee=0;ee<t;ee++)J[ee]=0,$[ee]=0,le[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:le,object:k,attributes:{},index:null}}function M(k,J,$,le){const ee=l.attributes,ie=J.attributes;let W=0;const Q=$.getAttributes();for(const oe in Q)if(Q[oe].location>=0){const U=ee[oe];let q=ie[oe];if(q===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;W++}return l.attributesNum!==W||l.index!==le}function w(k,J,$,le){const ee={},ie=J.attributes;let W=0;const Q=$.getAttributes();for(const oe in Q)if(Q[oe].location>=0){let U=ie[oe];U===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),ee[oe]=q,W++}l.attributes=ee,l.attributesNum=W,l.index=le}function C(){const k=l.newAttributes;for(let J=0,$=k.length;J<$;J++)k[J]=0}function y(k){S(k,0)}function S(k,J){const $=l.newAttributes,le=l.enabledAttributes,ee=l.attributeDivisors;$[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),ee[k]!==J&&(s.vertexAttribDivisor(k,J),ee[k]=J)}function N(){const k=l.newAttributes,J=l.enabledAttributes;for(let $=0,le=J.length;$<le;$++)J[$]!==k[$]&&(s.disableVertexAttribArray($),J[$]=0)}function L(k,J,$,le,ee,ie,W){W===!0?s.vertexAttribIPointer(k,J,$,ee,ie):s.vertexAttribPointer(k,J,$,le,ee,ie)}function D(k,J,$,le){C();const ee=le.attributes,ie=$.getAttributes(),W=J.defaultAttributeValues;for(const Q in ie){const oe=ie[Q];if(oe.location>=0){let ce=ee[Q];if(ce===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const U=ce.normalized,q=ce.itemSize,Ae=e.get(ce);if(Ae===void 0)continue;const We=Ae.buffer,Ze=Ae.type,re=Ae.bytesPerElement,me=Ze===s.INT||Ze===s.UNSIGNED_INT||ce.gpuType===Hf;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Fe=pe.stride,Ve=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let it=0;it<oe.locationSize;it++)S(oe.location+it,pe.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let it=0;it<oe.locationSize;it++)y(oe.location+it);s.bindBuffer(s.ARRAY_BUFFER,We);for(let it=0;it<oe.locationSize;it++)L(oe.location+it,q/oe.locationSize,Ze,U,Fe*re,(Ve+q/oe.locationSize*it)*re,me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)S(oe.location+pe,ce.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<oe.locationSize;pe++)y(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let pe=0;pe<oe.locationSize;pe++)L(oe.location+pe,q/oe.locationSize,Ze,U,q*re,q/oe.locationSize*pe*re,me)}}else if(W!==void 0){const U=W[Q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}N()}function F(){R();for(const k in r){const J=r[k];for(const $ in J){const le=J[$];for(const ee in le){const ie=le[ee];for(const W in ie)v(ie[W].object),delete ie[W];delete le[ee]}}delete r[k]}}function O(k){if(r[k.id]===void 0)return;const J=r[k.id];for(const $ in J){const le=J[$];for(const ee in le){const ie=le[ee];for(const W in ie)v(ie[W].object),delete ie[W];delete le[ee]}}delete r[k.id]}function j(k){for(const J in r){const $=r[J];for(const le in $){const ee=$[le];if(ee[k.id]===void 0)continue;const ie=ee[k.id];for(const W in ie)v(ie[W].object),delete ie[W];delete ee[k.id]}}}function A(k){for(const J in r){const $=r[J],le=k.isInstancedMesh===!0?k.id:0,ee=$[le];if(ee!==void 0){for(const ie in ee){const W=ee[ie];for(const Q in W)v(W[Q].object),delete W[Q];delete ee[ie]}delete $[le],Object.keys($).length===0&&delete r[J]}}}function R(){fe(),d=!0,l!==o&&(l=o,m(l.object))}function fe(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:R,resetDefaultState:fe,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:j,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function WS(s,e,t){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function d(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),t.update(v,r,_))}function f(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let w=0;w<_;w++)M+=v[w];t.update(M,r,1)}function p(m,v,_,g){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)d(m[w],v[w],g[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,g,0,_);let w=0;for(let C=0;C<_;C++)w+=v[C]*g[C];t.update(w,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function XS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(j){return!(j!==wi&&r.convert(j)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(j){const A=j===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==fi&&r.convert(j)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Li&&!A)}function p(j){if(j==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(st("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,maxSamples:F,samples:O}}function YS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new Dr,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||o;return o=g,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,M){const w=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!o||w===null||w.length===0||l&&!y)l?v(null):m();else{const N=l?0:r,L=N*4;let D=S.clippingState||null;p.value=D,D=v(w,g,L,M);for(let F=0;F!==L;++F)D[F]=t[F];S.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,w){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,w!==!0||y===null){const S=M+C*4,N=g.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,D=M;L!==C;++L,D+=4)d.copy(_[L]).applyMatrix4(N,f),d.normal.toArray(y,D),y[D+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Ir=4,px=[.125,.215,.35,.446,.526,.582],ss=20,qS=256,qa=new th,mx=new St;let bd=null,Td=0,Ad=0,Cd=!1;const KS=new Y;class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=KS}=l;bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Td,Ad),this._renderer.xr.enabled=Cd,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Zn,format:wi,colorSpace:na,depthBuffer:!1},o=gx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gx(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QS(l)),this._blurMaterial=JS(l,e,t),this._ggxMaterial=ZS(l,e,t)}return o}_compileMaterial(e){const t=new ki(new Rn,e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,r,o,l){const p=new di(90,1,t,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(mx),_.toneMapping=Fi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new oo,new eh({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,S=!0):(y.color.copy(mx),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[L],l.y,l.z)):D===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[L]));const F=this._cubeSize;Ys(o,D*F,L>2?F:0,F,F),_.setRenderTarget(o),S&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ls||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ys(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,qa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=0+m*1.25,M=_*g,{_lodMax:w}=this,C=this._sizeLods[r],y=3*C*(r>w-Ir?r-w+Ir:0),S=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=w-t,Ys(l,y,S,3*C,2*C),o.setRenderTarget(l),o.render(f,qa),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=w-r,Ys(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(f,qa)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ss-1),C=l/w,y=isFinite(l)?1+Math.floor(v*C):ss;y>ss&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ss}`);const S=[];let N=0;for(let j=0;j<ss;++j){const A=j/C,R=Math.exp(-A*A/2);S.push(R),j===0?N+=R:j<y&&(N+=2*R)}for(let j=0;j<S.length;j++)S[j]=S[j]/N;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=w,g.mipInt.value=L-r;const D=this._sizeLods[o],F=3*D*(o>L-Ir?o-L+Ir:0),O=4*(this._cubeSize-D);Ys(t,F,O,3*D,2*D),p.setRenderTarget(t),p.render(_,qa)}}function QS(s){const e=[],t=[],r=[];let o=s;const l=s-Ir+1+px.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-Ir?p=px[d-s+Ir-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),v=-m,_=1+m,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,w=6,C=3,y=2,S=1,N=new Float32Array(C*w*M),L=new Float32Array(y*w*M),D=new Float32Array(S*w*M);for(let O=0;O<M;O++){const j=O%3*2/3-1,A=O>2?0:-1,R=[j,A,0,j+2/3,A,0,j+2/3,A+1,0,j,A,0,j+2/3,A+1,0,j,A+1,0];N.set(R,C*w*O),L.set(g,y*w*O);const fe=[O,O,O,O,O,O];D.set(fe,S*w*O)}const F=new Rn;F.setAttribute("position",new Xt(N,C)),F.setAttribute("uv",new Xt(L,y)),F.setAttribute("faceIndex",new Xt(D,S)),r.push(new ki(F,null)),o>Ir&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function gx(s,e,t){const r=new Hn(s,e,t);return r.texture.mapping=dc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function ZS(s,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function JS(s,e,t){const r=new Float32Array(ss),o=new Y(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function vx(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function _x(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class S0 extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new m0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oo(5,5,5),l=new an({name:"CubemapFromEquirect",uniforms:ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Ui});l.uniforms.tEquirect.value=t;const d=new ki(o,l),f=t.minFilter;return t.minFilter===as&&(t.minFilter=Mn),new e1(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}function $S(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?d(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ju||M===$u)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new S0(w.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),f(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,w=M===Ju||M===$u,C=M===ls||M===ea;if(w||C){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new xx(s)),y=w?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const N=g.image;return w&&N&&N.height>0||C&&N&&p(N)?(r===null&&(r=new xx(s)),y=w?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function f(g,M){return M===Ju?g.mapping=ls:M===$u&&(g.mapping=ea),g}function p(g){let M=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&M++;return M===w}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function eM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ac("WebGLRenderer: "+r+" extension not supported."),o}}}function tM(s,e,t,r){const o={},l=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",d),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(_){const g=[],M=_.index,w=_.attributes.position;let C=0;if(w===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let L=0,D=N.length;L<D;L+=3){const F=N[L+0],O=N[L+1],j=N[L+2];g.push(F,O,O,j,j,F)}}else{const N=w.array;C=w.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const F=L+0,O=L+1,j=L+2;g.push(F,O,O,j,j,F)}}const y=new(w.count>=65535?f0:d0)(g,1);y.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,y)}function v(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function nM(s,e,t){let r;function o(g){r=g}let l,d;function f(g){l=g.type,d=g.bytesPerElement}function p(g,M){s.drawElements(r,M,l,g*d),t.update(M,r,1)}function m(g,M,w){w!==0&&(s.drawElementsInstanced(r,M,l,g*d,w),t.update(M,r,w))}function v(g,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,g,0,w);let y=0;for(let S=0;S<w;S++)y+=M[S];t.update(y,r,1)}function _(g,M,w,C){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)m(g[S]/d,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,g,0,C,0,w);let S=0;for(let N=0;N<w;N++)S+=M[N]*C[N];t.update(S,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function iM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function rM(s,e,t){const r=new WeakMap,o=new $t;function l(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let fe=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",fe)};var M=fe;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let D=0;w===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let F=f.attributes.position.count*D,O=1;F>e.maxTextureSize&&(O=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const j=new Float32Array(F*O*4*_),A=new c0(j,F,O,_);A.type=Li,A.needsUpdate=!0;const R=D*4;for(let k=0;k<_;k++){const J=S[k],$=N[k],le=L[k],ee=F*O*4*k;for(let ie=0;ie<J.count;ie++){const W=ie*R;w===!0&&(o.fromBufferAttribute(J,ie),j[ee+W+0]=o.x,j[ee+W+1]=o.y,j[ee+W+2]=o.z,j[ee+W+3]=0),C===!0&&(o.fromBufferAttribute($,ie),j[ee+W+4]=o.x,j[ee+W+5]=o.y,j[ee+W+6]=o.z,j[ee+W+7]=0),y===!0&&(o.fromBufferAttribute(le,ie),j[ee+W+8]=o.x,j[ee+W+9]=o.y,j[ee+W+10]=o.z,j[ee+W+11]=le.itemSize===4?o.w:1)}}g={count:_,texture:A,size:new nt(F,O)},r.set(f,g),f.addEventListener("dispose",fe)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const C=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function sM(s,e,t,r,o){let l=new WeakMap;function d(m){const v=o.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function f(){l=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:f}}const aM={[Of]:"LINEAR_TONE_MAPPING",[kf]:"REINHARD_TONE_MAPPING",[Bf]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[jf]:"AGX_TONE_MAPPING",[Vf]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function oM(s,e,t,r,o){const l=new Hn(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new Hn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),f=new Rn;f.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const p=new v0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new ki(f,p),v=new th(-1,1,1,-1,0,1);let _=null,g=null,M=!1,w,C=null,y=[],S=!1;this.setSize=function(N,L){l.setSize(N,L),d.setSize(N,L);for(let D=0;D<y.length;D++){const F=y[D];F.setSize&&F.setSize(N,L)}},this.setEffects=function(N){y=N,S=y.length>0&&y[0].isRenderPass===!0;const L=l.width,D=l.height;for(let F=0;F<y.length;F++){const O=y[F];O.setSize&&O.setSize(L,D)}},this.begin=function(N,L){if(M||N.toneMapping===Fi&&y.length===0)return!1;if(C=L,L!==null){const D=L.width,F=L.height;(l.width!==D||l.height!==F)&&this.setSize(D,F)}return S===!1&&N.setRenderTarget(l),w=N.toneMapping,N.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(N,L){N.toneMapping=w,M=!0;let D=l,F=d;for(let O=0;O<y.length;O++){const j=y[O];if(j.enabled!==!1&&(j.render(N,F,D,L),j.needsSwap!==!1)){const A=D;D=F,F=A}}if(_!==N.outputColorSpace||g!==N.toneMapping){_=N.outputColorSpace,g=N.toneMapping,p.defines={},Et.getTransfer(_)===Lt&&(p.defines.SRGB_TRANSFER="");const O=aM[g];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,N.setRenderTarget(C),N.render(m,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const M0=new Nn,Rf=new to(1,1),E0=new c0,w0=new w_,b0=new m0,yx=[],Sx=[],Mx=new Float32Array(16),Ex=new Float32Array(9),wx=new Float32Array(4);function aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=yx[o];if(l===void 0&&(l=new Float32Array(o),yx[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pc(s,e){let t=Sx[e];t===void 0&&(t=new Int32Array(e),Sx[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function fM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;wx.set(r),s.uniformMatrix2fv(this.addr,!1,wx),ln(t,r)}}function hM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;Ex.set(r),s.uniformMatrix3fv(this.addr,!1,Ex),ln(t,r)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,r))return;Mx.set(r),s.uniformMatrix4fv(this.addr,!1,Mx),ln(t,r)}}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function EM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Rf.compareFunction=t.isReversedDepthBuffer()?Qf:Kf,l=Rf):l=M0,t.setTexture2D(e||l,o)}function wM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||w0,o)}function bM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||b0,o)}function TM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||E0,o)}function AM(s){switch(s){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return xM;case 35668:case 35672:return gM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}function CM(s,e){s.uniform1fv(this.addr,e)}function NM(s,e){const t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function RM(s,e){const t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function PM(s,e){const t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){const t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LM(s,e){const t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IM(s,e){const t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function UM(s,e){s.uniform1iv(this.addr,e)}function FM(s,e){s.uniform2iv(this.addr,e)}function OM(s,e){s.uniform3iv(this.addr,e)}function kM(s,e){s.uniform4iv(this.addr,e)}function BM(s,e){s.uniform1uiv(this.addr,e)}function zM(s,e){s.uniform2uiv(this.addr,e)}function jM(s,e){s.uniform3uiv(this.addr,e)}function VM(s,e){s.uniform4uiv(this.addr,e)}function HM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=Rf:d=M0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function GM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||w0,l[d])}function WM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||b0,l[d])}function XM(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||E0,l[d])}function YM(s){switch(s){case 5126:return CM;case 35664:return NM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return kM;case 5125:return BM;case 36294:return zM;case 36295:return jM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}class qM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}}class KM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function bx(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){const r=s.name,o=r.length;for(Nd.lastIndex=0;;){const l=Nd.exec(r),d=Nd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){bx(t,m===void 0?new qM(f,s,e):new KM(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new QM(f),bx(t,_)),t=_}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);ZM(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function Tx(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const JM=37297;let $M=0;function eE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const Ax=new ft;function tE(s){Et._getMatrix(Ax,Et.workingColorSpace,s);const e=`mat3( ${Ax.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cx(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+eE(s.getShaderSource(e),f)}else return l}function nE(s,e){const t=tE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iE={[Of]:"Linear",[kf]:"Reinhard",[Bf]:"Cineon",[uc]:"ACESFilmic",[jf]:"AgX",[Vf]:"Neutral",[zf]:"Custom"};function rE(s,e){const t=iE[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new Y;function sE(){Et.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function oE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function lE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Ja(s){return s!==""}function Nx(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(s){return s.replace(cE,dE)}const uE=new Map;function dE(s,e){let t=ht[e];if(t===void 0){const r=uE.get(e);if(r!==void 0)t=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(s){return s.replace(fE,hE)}function hE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dx(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pE={[Yl]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function mE(s){return pE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xE={[ls]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function gE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const vE={[ea]:"ENVMAP_MODE_REFRACTION"};function _E(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yE={[$x]:"ENVMAP_BLENDING_MULTIPLY",[t_]:"ENVMAP_BLENDING_MIX",[n_]:"ENVMAP_BLENDING_ADD"};function SE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":yE[s.combine]||"ENVMAP_BLENDING_NONE"}function ME(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function EE(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=mE(t),m=gE(t),v=_E(t),_=SE(t),g=ME(t),M=aE(t),w=oE(l),C=o.createProgram();let y,S,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ja).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ja).join(`
`),S.length>0&&(S+=`
`)):(y=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),S=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Fi?rE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,nE("linearToOutputTexel",t.outputColorSpace),sE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),d=Pf(d),d=Nx(d,t),d=Rx(d,t),f=Pf(f),f=Nx(f,t),f=Rx(f,t),d=Px(d),f=Px(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=N+y+d,D=N+S+f,F=Tx(o,o.VERTEX_SHADER,L),O=Tx(o,o.FRAGMENT_SHADER,D);o.attachShader(C,F),o.attachShader(C,O),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function j(k){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(C)||"",$=o.getShaderInfoLog(F)||"",le=o.getShaderInfoLog(O)||"",ee=J.trim(),ie=$.trim(),W=le.trim();let Q=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,F,O);else{const ce=Cx(o,F,"vertex"),U=Cx(o,O,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+ce+`
`+U)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(ie===""||W==="")&&(oe=!1);oe&&(k.diagnostics={runnable:Q,programLog:ee,vertexShader:{log:ie,prefix:y},fragmentShader:{log:W,prefix:S}})}o.deleteShader(F),o.deleteShader(O),A=new $l(o,C),R=lE(o,C)}let A;this.getUniforms=function(){return A===void 0&&j(this),A};let R;this.getAttributes=function(){return R===void 0&&j(this),R};let fe=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return fe===!1&&(fe=o.getProgramParameter(C,JM)),fe},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=O,this}let wE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new TE(e),t.set(e,r)),r}}class TE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function AE(s,e,t,r,o,l){const d=new Jf,f=new bE,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function C(A,R,fe,k,J){const $=k.fog,le=J.geometry,ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,W=e.get(A.envMap||ee,ie),Q=W&&W.mapping===dc?W.image.height:null,oe=M[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ce=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=ce!==void 0?ce.length:0;let q=0;le.morphAttributes.position!==void 0&&(q=1),le.morphAttributes.normal!==void 0&&(q=2),le.morphAttributes.color!==void 0&&(q=3);let Ae,We,Ze,re;if(oe){const Tt=Di[oe];Ae=Tt.vertexShader,We=Tt.fragmentShader}else Ae=A.vertexShader,We=A.fragmentShader,f.update(A),Ze=f.getVertexShaderID(A),re=f.getFragmentShaderID(A);const me=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=J.isInstancedMesh===!0,Ve=J.isBatchedMesh===!0,it=!!A.map,Kt=!!A.matcap,mt=!!W,wt=!!A.aoMap,Pt=!!A.lightMap,ut=!!A.bumpMap,Bt=!!A.normalMap,z=!!A.displacementMap,Vt=!!A.emissiveMap,_t=!!A.metalnessMap,bt=!!A.roughnessMap,He=A.anisotropy>0,P=A.clearcoat>0,E=A.dispersion>0,G=A.iridescence>0,he=A.sheen>0,xe=A.transmission>0,ue=He&&!!A.anisotropyMap,ke=P&&!!A.clearcoatMap,be=P&&!!A.clearcoatNormalMap,qe=P&&!!A.clearcoatRoughnessMap,rt=G&&!!A.iridescenceMap,ye=G&&!!A.iridescenceThicknessMap,we=he&&!!A.sheenColorMap,Ge=he&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Pe=!!A.specularColorMap,ct=!!A.specularIntensityMap,V=xe&&!!A.transmissionMap,Te=xe&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,Se=A.alphaTest>0,de=!!A.alphaHash,ze=!!A.extensions;let at=Fi;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=s.toneMapping);const It={shaderID:oe,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:We,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&J._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&J.instanceColor!==null,instancingMorph:Fe&&J.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:na,alphaToCoverage:!!A.alphaToCoverage,map:it,matcap:Kt,envMap:mt,envMapMode:mt&&W.mapping,envMapCubeUVHeight:Q,aoMap:wt,lightMap:Pt,bumpMap:ut,normalMap:Bt,displacementMap:z,emissiveMap:Vt,normalMapObjectSpace:Bt&&A.normalMapType===a_,normalMapTangentSpace:Bt&&A.normalMapType===s_,metalnessMap:_t,roughnessMap:bt,anisotropy:He,anisotropyMap:ue,clearcoat:P,clearcoatMap:ke,clearcoatNormalMap:be,clearcoatRoughnessMap:qe,dispersion:E,iridescence:G,iridescenceMap:rt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Pe,specularIntensityMap:ct,transmission:xe,transmissionMap:V,thicknessMap:Te,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Qs&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:de,combine:A.combine,mapUv:it&&w(A.map.channel),aoMapUv:wt&&w(A.aoMap.channel),lightMapUv:Pt&&w(A.lightMap.channel),bumpMapUv:ut&&w(A.bumpMap.channel),normalMapUv:Bt&&w(A.normalMap.channel),displacementMapUv:z&&w(A.displacementMap.channel),emissiveMapUv:Vt&&w(A.emissiveMap.channel),metalnessMapUv:_t&&w(A.metalnessMap.channel),roughnessMapUv:bt&&w(A.roughnessMap.channel),anisotropyMapUv:ue&&w(A.anisotropyMap.channel),clearcoatMapUv:ke&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(A.sheenRoughnessMap.channel),specularMapUv:Be&&w(A.specularMap.channel),specularColorMapUv:Pe&&w(A.specularColorMap.channel),specularIntensityMapUv:ct&&w(A.specularIntensityMap.channel),transmissionMapUv:V&&w(A.transmissionMap.channel),thicknessMapUv:Te&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Bt||He),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(it||De),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||le.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&fe.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:it&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:Vt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===er,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function y(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const fe in A.defines)R.push(fe),R.push(A.defines[fe]);return A.isRawShaderMaterial===!1&&(S(R,A),N(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function S(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function N(A,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function L(A){const R=M[A.type];let fe;if(R){const k=Di[R];fe=no.clone(k.uniforms)}else fe=A.uniforms;return fe}function D(A,R){let fe=v.get(R);return fe!==void 0?++fe.usedTimes:(fe=new EE(s,R,A,o),m.push(fe),v.set(R,fe)),fe}function F(A){if(--A.usedTimes===0){const R=m.indexOf(A);m[R]=m[m.length-1],m.pop(),v.delete(A.cacheKey),A.destroy()}}function O(A){f.remove(A)}function j(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:L,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:m,dispose:j}}function CE(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function NE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Lx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ix(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,w,C,y,S){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:M,material:w,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},s[e]=N):(N.id=g.id,N.object=g,N.geometry=M,N.material=w,N.materialVariant=d(g),N.groupOrder=C,N.renderOrder=g.renderOrder,N.z=y,N.group=S),e++,N}function p(g,M,w,C,y,S){const N=f(g,M,w,C,y,S);w.transmission>0?r.push(N):w.transparent===!0?o.push(N):t.push(N)}function m(g,M,w,C,y,S){const N=f(g,M,w,C,y,S);w.transmission>0?r.unshift(N):w.transparent===!0?o.unshift(N):t.unshift(N)}function v(g,M){t.length>1&&t.sort(g||NE),r.length>1&&r.sort(M||Lx),o.length>1&&o.sort(M||Lx)}function _(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:_,sort:v}}function RE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new Ix,s.set(r,[d])):o>=l.length?(d=new Ix,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function PE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new St};break;case"SpotLight":t={position:new Y,direction:new Y,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let LE=0;function IE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UE(s){const e=new PE,t=DE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const o=new Y,l=new Yt,d=new Yt;function f(m){let v=0,_=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,w=0,C=0,y=0,S=0,N=0,L=0,D=0,F=0,O=0,j=0;m.sort(IE);for(let R=0,fe=m.length;R<fe;R++){const k=m[R],J=k.color,$=k.intensity,le=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ta?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=J.r*$,_+=J.g*$,g+=J.b*$;else if(k.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(k.sh.coefficients[ie],$);j++}else if(k.isDirectionalLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=ee,r.directionalShadowMatrix[M]=k.shadow.matrix,N++}r.directional[M]=ie,M++}else if(k.isSpotLight){const ie=e.get(k);ie.position.setFromMatrixPosition(k.matrixWorld),ie.color.copy(J).multiplyScalar($),ie.distance=le,ie.coneCos=Math.cos(k.angle),ie.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ie.decay=k.decay,r.spot[C]=ie;const W=k.shadow;if(k.map&&(r.spotLightMap[F]=k.map,F++,W.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[C]=W.matrix,k.castShadow){const Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,r.spotShadow[C]=Q,r.spotShadowMap[C]=ee,D++}C++}else if(k.isRectAreaLight){const ie=e.get(k);ie.color.copy(J).multiplyScalar($),ie.halfWidth.set(k.width*.5,0,0),ie.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ie,y++}else if(k.isPointLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),ie.distance=k.distance,ie.decay=k.decay,k.castShadow){const W=k.shadow,Q=t.get(k);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,r.pointShadow[w]=Q,r.pointShadowMap[w]=ee,r.pointShadowMatrix[w]=k.shadow.matrix,L++}r.point[w]=ie,w++}else if(k.isHemisphereLight){const ie=e.get(k);ie.skyColor.copy(k.color).multiplyScalar($),ie.groundColor.copy(k.groundColor).multiplyScalar($),r.hemi[S]=ie,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==M||A.pointLength!==w||A.spotLength!==C||A.rectAreaLength!==y||A.hemiLength!==S||A.numDirectionalShadows!==N||A.numPointShadows!==L||A.numSpotShadows!==D||A.numSpotMaps!==F||A.numLightProbes!==j)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=w,r.hemi.length=S,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+F-O,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=j,A.directionalLength=M,A.pointLength=w,A.spotLength=C,A.rectAreaLength=y,A.hemiLength=S,A.numDirectionalShadows=N,A.numPointShadows=L,A.numSpotShadows=D,A.numSpotMaps=F,A.numLightProbes=j,r.version=LE++)}function p(m,v){let _=0,g=0,M=0,w=0,C=0;const y=v.matrixWorldInverse;for(let S=0,N=m.length;S<N;S++){const L=m[S];if(L.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),_++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),d.identity(),l.copy(L.matrixWorld),l.premultiply(y),d.extractRotation(l),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),w++}else if(L.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:f,setupView:p,state:r}}function Ux(s){const e=new UE(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function d(v){r.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function FE(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new Ux(s),e.set(o,[f])):l>=d.length?(f=new Ux(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BE=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],zE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Fx=new Yt,Ka=new Y,Rd=new Y;function jE(s,e,t){let r=new h0;const o=new nt,l=new nt,d=new $t,f=new Q_,p=new Z_,m={},v=t.maxTextureSize,_={[Ur]:Vn,[Vn]:Ur,[er]:er},g=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:OE,fragmentShader:kE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Rn;w.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ki(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let S=this.type;this.render=function(O,j,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===Fv&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yl);const R=s.getRenderTarget(),fe=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ui),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=S!==this.type;$&&j.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ee=>ee.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ee=O.length;le<ee;le++){const ie=O[le],W=ie.shadow;if(W===void 0){st("WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Q=W.getFrameExtents();o.multiply(Q),l.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Q.x),o.x=l.x*Q.x,W.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Q.y),o.y=l.y*Q.y,W.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||$===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Za){if(ie.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Hn(o.x,o.y,{format:ta,type:Zn,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),W.map.texture.name=ie.name+".shadowMap",W.map.depthTexture=new to(o.x,o.y,Li),W.map.depthTexture.name=ie.name+".shadowMapDepth",W.map.depthTexture.format=ir,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn}else ie.isPointLight?(W.map=new S0(o.x),W.map.depthTexture=new X_(o.x,Oi)):(W.map=new Hn(o.x,o.y),W.map.depthTexture=new to(o.x,o.y,Oi)),W.map.depthTexture.name=ie.name+".shadowMap",W.map.depthTexture.format=ir,this.type===Yl?(W.map.depthTexture.compareFunction=oe?Qf:Kf,W.map.depthTexture.minFilter=Mn,W.map.depthTexture.magFilter=Mn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn);W.camera.updateProjectionMatrix()}const ce=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,U),s.clear();else{U===0&&(s.setRenderTarget(W.map),s.clear());const q=W.getViewport(U);d.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),J.viewport(d)}if(ie.isPointLight){const q=W.camera,Ae=W.matrix,We=ie.distance||q.far;We!==q.far&&(q.far=We,q.updateProjectionMatrix()),Ka.setFromMatrixPosition(ie.matrixWorld),q.position.copy(Ka),Rd.copy(q.position),Rd.add(BE[U]),q.up.copy(zE[U]),q.lookAt(Rd),q.updateMatrixWorld(),Ae.makeTranslation(-Ka.x,-Ka.y,-Ka.z),Fx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Fx,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(ie);r=W.getFrustum(),D(j,A,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Za&&N(W,A),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(R,fe,k)};function N(O,j){const A=e.update(C);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Hn(o.x,o.y,{format:ta,type:Zn})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(j,null,A,g,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(j,null,A,M,C,null)}function L(O,j,A,R){let fe=null;const k=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)fe=k;else if(fe=A.isPointLight===!0?p:f,s.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const J=fe.uuid,$=j.uuid;let le=m[J];le===void 0&&(le={},m[J]=le);let ee=le[$];ee===void 0&&(ee=fe.clone(),le[$]=ee,j.addEventListener("dispose",F)),fe=ee}if(fe.visible=j.visible,fe.wireframe=j.wireframe,R===Za?fe.side=j.shadowSide!==null?j.shadowSide:j.side:fe.side=j.shadowSide!==null?j.shadowSide:_[j.side],fe.alphaMap=j.alphaMap,fe.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,fe.map=j.map,fe.clipShadows=j.clipShadows,fe.clippingPlanes=j.clippingPlanes,fe.clipIntersection=j.clipIntersection,fe.displacementMap=j.displacementMap,fe.displacementScale=j.displacementScale,fe.displacementBias=j.displacementBias,fe.wireframeLinewidth=j.wireframeLinewidth,fe.linewidth=j.linewidth,A.isPointLight===!0&&fe.isMeshDistanceMaterial===!0){const J=s.properties.get(fe);J.light=A}return fe}function D(O,j,A,R,fe){if(O.visible===!1)return;if(O.layers.test(j.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&fe===Za)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const $=e.update(O),le=O.material;if(Array.isArray(le)){const ee=$.groups;for(let ie=0,W=ee.length;ie<W;ie++){const Q=ee[ie],oe=le[Q.materialIndex];if(oe&&oe.visible){const ce=L(O,oe,R,fe);O.onBeforeShadow(s,O,j,A,$,ce,Q),s.renderBufferDirect(A,null,$,ce,O,Q),O.onAfterShadow(s,O,j,A,$,ce,Q)}}}else if(le.visible){const ee=L(O,le,R,fe);O.onBeforeShadow(s,O,j,A,$,ee,null),s.renderBufferDirect(A,null,$,ee,O,null),O.onAfterShadow(s,O,j,A,$,ee,null)}}const J=O.children;for(let $=0,le=J.length;$<le;$++)D(J[$],j,A,R,fe)}function F(O){O.target.removeEventListener("dispose",F);for(const A in m){const R=m[A],fe=O.target.uuid;fe in R&&(R[fe].dispose(),delete R[fe])}}}function VE(s,e){function t(){let V=!1;const Te=new $t;let Me=null;const De=new $t(0,0,0,0);return{setMask:function(Se){Me!==Se&&!V&&(s.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){V=Se},setClear:function(Se,de,ze,at,It){It===!0&&(Se*=at,de*=at,ze*=at),Te.set(Se,de,ze,at),De.equals(Te)===!1&&(s.clearColor(Se,de,ze,at),De.copy(Te))},reset:function(){V=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let V=!1,Te=!1,Me=null,De=null,Se=null;return{setReversed:function(de){if(Te!==de){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Te=de;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return Te},setTest:function(de){de?me(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){Me!==de&&!V&&(s.depthMask(de),Me=de)},setFunc:function(de){if(Te&&(de=x_[de]),De!==de){switch(de){case Bd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case jd:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Vd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Gd:s.depthFunc(s.GREATER);break;case Wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=de}},setLocked:function(de){V=de},setClear:function(de){Se!==de&&(Se=de,Te&&(de=1-de),s.clearDepth(de))},reset:function(){V=!1,Me=null,De=null,Se=null,Te=!1}}}function o(){let V=!1,Te=null,Me=null,De=null,Se=null,de=null,ze=null,at=null,It=null;return{setTest:function(Tt){V||(Tt?me(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Tt){Te!==Tt&&!V&&(s.stencilMask(Tt),Te=Tt)},setFunc:function(Tt,$n,wn){(Me!==Tt||De!==$n||Se!==wn)&&(s.stencilFunc(Tt,$n,wn),Me=Tt,De=$n,Se=wn)},setOp:function(Tt,$n,wn){(de!==Tt||ze!==$n||at!==wn)&&(s.stencilOp(Tt,$n,wn),de=Tt,ze=$n,at=wn)},setLocked:function(Tt){V=Tt},setClear:function(Tt){It!==Tt&&(s.clearStencil(Tt),It=Tt)},reset:function(){V=!1,Te=null,Me=null,De=null,Se=null,de=null,ze=null,at=null,It=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let v={},_={},g=new WeakMap,M=[],w=null,C=!1,y=null,S=null,N=null,L=null,D=null,F=null,O=null,j=new St(0,0,0),A=0,R=!1,fe=null,k=null,J=null,$=null,le=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,W=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ie=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ie=W>=2);let oe=null,ce={};const U=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),Ae=new $t().fromArray(U),We=new $t().fromArray(q);function Ze(V,Te,Me,De){const Se=new Uint8Array(4),de=s.createTexture();s.bindTexture(V,de),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Me;ze++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Te+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return de}const re={};re[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),me(s.DEPTH_TEST),d.setFunc($s),ut(!1),Bt(Im),me(s.CULL_FACE),wt(Ui);function me(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function pe(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Fe(V,Te){return _[V]!==Te?(s.bindFramebuffer(V,Te),_[V]=Te,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ve(V,Te){let Me=M,De=!1;if(V){Me=g.get(Te),Me===void 0&&(Me=[],g.set(Te,Me));const Se=V.textures;if(Me.length!==Se.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let de=0,ze=Se.length;de<ze;de++)Me[de]=s.COLOR_ATTACHMENT0+de;Me.length=Se.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function it(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const Kt={[rs]:s.FUNC_ADD,[kv]:s.FUNC_SUBTRACT,[Bv]:s.FUNC_REVERSE_SUBTRACT};Kt[zv]=s.MIN,Kt[jv]=s.MAX;const mt={[Vv]:s.ZERO,[Hv]:s.ONE,[Gv]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[qv]:s.DST_COLOR,[Xv]:s.DST_ALPHA,[Wv]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[Kv]:s.ONE_MINUS_DST_COLOR,[Yv]:s.ONE_MINUS_DST_ALPHA,[Zv]:s.CONSTANT_COLOR,[Jv]:s.ONE_MINUS_CONSTANT_COLOR,[$v]:s.CONSTANT_ALPHA,[e_]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(V,Te,Me,De,Se,de,ze,at,It,Tt){if(V===Ui){C===!0&&(pe(s.BLEND),C=!1);return}if(C===!1&&(me(s.BLEND),C=!0),V!==Ov){if(V!==y||Tt!==R){if((S!==rs||D!==rs)&&(s.blendEquation(s.FUNC_ADD),S=rs,D=rs),Tt)switch(V){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}N=null,L=null,F=null,O=null,j.set(0,0,0),A=0,y=V,R=Tt}return}Se=Se||Te,de=de||Me,ze=ze||De,(Te!==S||Se!==D)&&(s.blendEquationSeparate(Kt[Te],Kt[Se]),S=Te,D=Se),(Me!==N||De!==L||de!==F||ze!==O)&&(s.blendFuncSeparate(mt[Me],mt[De],mt[de],mt[ze]),N=Me,L=De,F=de,O=ze),(at.equals(j)===!1||It!==A)&&(s.blendColor(at.r,at.g,at.b,It),j.copy(at),A=It),y=V,R=!1}function Pt(V,Te){V.side===er?pe(s.CULL_FACE):me(s.CULL_FACE);let Me=V.side===Vn;Te&&(Me=!Me),ut(Me),V.blending===Qs&&V.transparent===!1?wt(Ui):wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),l.setMask(V.colorWrite);const De=V.stencilWrite;f.setTest(De),De&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){fe!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),fe=V)}function Bt(V){V!==Iv?(me(s.CULL_FACE),V!==k&&(V===Im?s.cullFace(s.BACK):V===Uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),k=V}function z(V){V!==J&&(ie&&s.lineWidth(V),J=V)}function Vt(V,Te,Me){V?(me(s.POLYGON_OFFSET_FILL),($!==Te||le!==Me)&&($=Te,le=Me,d.getReversed()&&(Te=-Te),s.polygonOffset(Te,Me))):pe(s.POLYGON_OFFSET_FILL)}function _t(V){V?me(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function bt(V){V===void 0&&(V=s.TEXTURE0+ee-1),oe!==V&&(s.activeTexture(V),oe=V)}function He(V,Te,Me){Me===void 0&&(oe===null?Me=s.TEXTURE0+ee-1:Me=oe);let De=ce[Me];De===void 0&&(De={type:void 0,texture:void 0},ce[Me]=De),(De.type!==V||De.texture!==Te)&&(oe!==Me&&(s.activeTexture(Me),oe=Me),s.bindTexture(V,Te||re[V]),De.type=V,De.texture=Te)}function P(){const V=ce[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function he(){try{s.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function xe(){try{s.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function be(){try{s.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function qe(){try{s.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function rt(){try{s.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ye(){try{s.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function we(V){Ae.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Ge(V){We.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function Be(V,Te){let Me=m.get(Te);Me===void 0&&(Me=new WeakMap,m.set(Te,Me));let De=Me.get(V);De===void 0&&(De=s.getUniformBlockIndex(Te,V.name),Me.set(V,De))}function Pe(V,Te){const De=m.get(Te).get(V);p.get(Te)!==De&&(s.uniformBlockBinding(Te,De,V.__bindingPointIndex),p.set(Te,De))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,ce={},_={},g=new WeakMap,M=[],w=null,C=!1,y=null,S=null,N=null,L=null,D=null,F=null,O=null,j=new St(0,0,0),A=0,R=!1,fe=null,k=null,J=null,$=null,le=null,Ae.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:me,disable:pe,bindFramebuffer:Fe,drawBuffers:Ve,useProgram:it,setBlending:wt,setMaterial:Pt,setFlipSided:ut,setCullFace:Bt,setLineWidth:z,setPolygonOffset:Vt,setScissorTest:_t,activeTexture:bt,bindTexture:He,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:rt,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:Pe,texStorage2D:be,texStorage3D:qe,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ke,scissor:we,viewport:Ge,reset:ct}}function HE(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nt,v=new WeakMap;let _;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return M?new OffscreenCanvas(P,E):sc("canvas")}function C(P,E,G){let he=1;const xe=He(P);if((xe.width>G||xe.height>G)&&(he=G/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(he*xe.width),ke=Math.floor(he*xe.height);_===void 0&&(_=w(ue,ke));const be=E?w(ue,ke):_;return be.width=ue,be.height=ke,be.getContext("2d").drawImage(P,0,0,ue,ke),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+ke+")."),be}else return"data"in P&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function y(P){return P.generateMipmaps}function S(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,E,G,he,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=E;if(E===s.RED&&(G===s.FLOAT&&(ue=s.R32F),G===s.HALF_FLOAT&&(ue=s.R16F),G===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ue=s.R8UI),G===s.UNSIGNED_SHORT&&(ue=s.R16UI),G===s.UNSIGNED_INT&&(ue=s.R32UI),G===s.BYTE&&(ue=s.R8I),G===s.SHORT&&(ue=s.R16I),G===s.INT&&(ue=s.R32I)),E===s.RG&&(G===s.FLOAT&&(ue=s.RG32F),G===s.HALF_FLOAT&&(ue=s.RG16F),G===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ue=s.RG8UI),G===s.UNSIGNED_SHORT&&(ue=s.RG16UI),G===s.UNSIGNED_INT&&(ue=s.RG32UI),G===s.BYTE&&(ue=s.RG8I),G===s.SHORT&&(ue=s.RG16I),G===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),G===s.UNSIGNED_INT&&(ue=s.RGB32UI),G===s.BYTE&&(ue=s.RGB8I),G===s.SHORT&&(ue=s.RGB16I),G===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),G===s.UNSIGNED_INT&&(ue=s.RGBA32UI),G===s.BYTE&&(ue=s.RGBA8I),G===s.SHORT&&(ue=s.RGBA16I),G===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const ke=xe?ic:Et.getTransfer(he);G===s.FLOAT&&(ue=s.RGBA32F),G===s.HALF_FLOAT&&(ue=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ue=ke===Lt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(P,E){let G;return P?E===null||E===Oi||E===eo?G=s.DEPTH24_STENCIL8:E===Li?G=s.DEPTH32F_STENCIL8:E===$a&&(G=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===eo?G=s.DEPTH_COMPONENT24:E===Li?G=s.DEPTH_COMPONENT32F:E===$a&&(G=s.DEPTH_COMPONENT16),G}function F(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==mn&&P.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function O(P){const E=P.target;E.removeEventListener("dispose",O),A(E),E.isVideoTexture&&v.delete(E)}function j(P){const E=P.target;E.removeEventListener("dispose",j),fe(E)}function A(P){const E=r.get(P);if(E.__webglInit===void 0)return;const G=P.source,he=g.get(G);if(he){const xe=he[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(P),Object.keys(he).length===0&&g.delete(G)}r.remove(P)}function R(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const G=P.source,he=g.get(G);delete he[E.__cacheKey],d.memory.textures--}function fe(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let xe=0;xe<E.__webglFramebuffer[he].length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[he][xe]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let he=0,xe=G.length;he<xe;he++){const ue=r.get(G[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(G[he])}r.remove(P)}let k=0;function J(){k=0}function $(){const P=k;return P>=o.maxTextures&&st("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),k+=1,P}function le(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ee(P,E){const G=r.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const he=P.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,P,E);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function ie(P,E){const G=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){re(G,P,E);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function W(P,E){const G=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){re(G,P,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function Q(P,E){const G=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){me(G,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const oe={[Xd]:s.REPEAT,[tr]:s.CLAMP_TO_EDGE,[Yd]:s.MIRRORED_REPEAT},ce={[mn]:s.NEAREST,[i_]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[ed]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},U={[o_]:s.NEVER,[f_]:s.ALWAYS,[l_]:s.LESS,[Kf]:s.LEQUAL,[c_]:s.EQUAL,[Qf]:s.GEQUAL,[u_]:s.GREATER,[d_]:s.NOTEQUAL};function q(P,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===ed||E.magFilter===gl||E.magFilter===as||E.minFilter===Mn||E.minFilter===ed||E.minFilter===gl||E.minFilter===as)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==gl&&E.minFilter!==as||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const he=E.source;let xe=g.get(he);xe===void 0&&(xe={},g.set(he,xe));const ue=le(E);if(ue!==P.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,G=!0),xe[ue].usedTimes++;const ke=xe[P.__cacheKey];ke!==void 0&&(xe[P.__cacheKey].usedTimes--,ke.usedTimes===0&&R(E)),P.__cacheKey=ue,P.__webglTexture=xe[ue].texture}return G}function We(P,E,G){return Math.floor(Math.floor(P/G)/E)}function Ze(P,E,G,he){const ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,he,E.data);else{ue.sort((ye,we)=>ye.start-we.start);let ke=0;for(let ye=1;ye<ue.length;ye++){const we=ue[ke],Ge=ue[ye],Be=we.start+we.count,Pe=We(Ge.start,E.width,4),ct=We(we.start,E.width,4);Ge.start<=Be+1&&Pe===ct&&We(Ge.start+Ge.count-1,E.width,4)===Pe?we.count=Math.max(we.count,Ge.start+Ge.count-we.start):(++ke,ue[ke]=Ge)}ue.length=ke+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,we=ue.length;ye<we;ye++){const Ge=ue[ye],Be=Math.floor(Ge.start/4),Pe=Math.ceil(Ge.count/4),ct=Be%E.width,V=Math.floor(Be/E.width),Te=Pe,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ct,V,Te,Me,G,he,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function re(P,E,G){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const xe=Ae(P,E),ue=E.source;t.bindTexture(he,P.__webglTexture,s.TEXTURE0+G);const ke=r.get(ue);if(ue.version!==ke.__version||xe===!0){t.activeTexture(s.TEXTURE0+G);const be=Et.getPrimaries(Et.workingColorSpace),qe=E.colorSpace===Lr?null:Et.getPrimaries(E.colorSpace),rt=E.colorSpace===Lr||be===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=C(E.image,!1,o.maxTextureSize);ye=bt(E,ye);const we=l.convert(E.format,E.colorSpace),Ge=l.convert(E.type);let Be=L(E.internalFormat,we,Ge,E.colorSpace,E.isVideoTexture);q(he,E);let Pe;const ct=E.mipmaps,V=E.isVideoTexture!==!0,Te=ke.__version===void 0||xe===!0,Me=ue.dataReady,De=F(E,ye);if(E.isDepthTexture)Be=D(E.format===os,E.type),Te&&(V?t.texStorage2D(s.TEXTURE_2D,1,Be,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,we,Ge,null));else if(E.isDataTexture)if(ct.length>0){V&&Te&&t.texStorage2D(s.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let Se=0,de=ct.length;Se<de;Se++)Pe=ct[Se],V?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,we,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Be,Pe.width,Pe.height,0,we,Ge,Pe.data);E.generateMipmaps=!1}else V?(Te&&t.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height),Me&&Ze(E,ye,we,Ge)):t.texImage2D(s.TEXTURE_2D,0,Be,ye.width,ye.height,0,we,Ge,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,ct[0].width,ct[0].height,ye.depth);for(let Se=0,de=ct.length;Se<de;Se++)if(Pe=ct[Se],E.format!==wi)if(we!==null)if(V){if(Me)if(E.layerUpdates.size>0){const ze=hx(Pe.width,Pe.height,E.format,E.type);for(const at of E.layerUpdates){const It=Pe.data.subarray(at*ze/Pe.data.BYTES_PER_ELEMENT,(at+1)*ze/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,at,Pe.width,Pe.height,1,we,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ye.depth,we,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,ye.depth,we,Ge,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Be,Pe.width,Pe.height,ye.depth,0,we,Ge,Pe.data)}else{V&&Te&&t.texStorage2D(s.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let Se=0,de=ct.length;Se<de;Se++)Pe=ct[Se],E.format!==wi?we!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,we,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Be,Pe.width,Pe.height,0,Pe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,we,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Be,Pe.width,Pe.height,0,we,Ge,Pe.data)}else if(E.isDataArrayTexture)if(V){if(Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Be,ye.width,ye.height,ye.depth),Me)if(E.layerUpdates.size>0){const Se=hx(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const ze=ye.data.subarray(de*Se/ye.data.BYTES_PER_ELEMENT,(de+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,we,Ge,ze)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,Ge,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,we,Ge,ye.data);else if(E.isData3DTexture)V?(Te&&t.texStorage3D(s.TEXTURE_3D,De,Be,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,Ge,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,we,Ge,ye.data);else if(E.isFramebufferTexture){if(Te)if(V)t.texStorage2D(s.TEXTURE_2D,De,Be,ye.width,ye.height);else{let Se=ye.width,de=ye.height;for(let ze=0;ze<De;ze++)t.texImage2D(s.TEXTURE_2D,ze,Be,Se,de,0,we,Ge,null),Se>>=1,de>>=1}}else if(ct.length>0){if(V&&Te){const Se=He(ct[0]);t.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}for(let Se=0,de=ct.length;Se<de;Se++)Pe=ct[Se],V?Me&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,we,Ge,Pe):t.texImage2D(s.TEXTURE_2D,Se,Be,we,Ge,Pe);E.generateMipmaps=!1}else if(V){if(Te){const Se=He(ye);t.texStorage2D(s.TEXTURE_2D,De,Be,Se.width,Se.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ge,ye)}else t.texImage2D(s.TEXTURE_2D,0,Be,we,Ge,ye);y(E)&&S(he),ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function me(P,E,G){if(E.image.length!==6)return;const he=Ae(P,E),xe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const ue=r.get(xe);if(xe.version!==ue.__version||he===!0){t.activeTexture(s.TEXTURE0+G);const ke=Et.getPrimaries(Et.workingColorSpace),be=E.colorSpace===Lr?null:Et.getPrimaries(E.colorSpace),qe=E.colorSpace===Lr||ke===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!rt&&!ye?we[de]=C(E.image[de],!0,o.maxCubemapSize):we[de]=ye?E.image[de].image:E.image[de],we[de]=bt(E,we[de]);const Ge=we[0],Be=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),ct=L(E.internalFormat,Be,Pe,E.colorSpace),V=E.isVideoTexture!==!0,Te=ue.__version===void 0||he===!0,Me=xe.dataReady;let De=F(E,Ge);q(s.TEXTURE_CUBE_MAP,E);let Se;if(rt){V&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,ct,Ge.width,Ge.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let ze=0;ze<Se.length;ze++){const at=Se[ze];E.format!==wi?Be!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,at.width,at.height,Be,at.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ct,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,0,0,at.width,at.height,Be,Pe,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze,ct,at.width,at.height,0,Be,Pe,at.data)}}}else{if(Se=E.mipmaps,V&&Te){Se.length>0&&De++;const de=He(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,ct,de.width,de.height)}for(let de=0;de<6;de++)if(ye){V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Be,Pe,we[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,we[de].width,we[de].height,0,Be,Pe,we[de].data);for(let ze=0;ze<Se.length;ze++){const It=Se[ze].image[de].image;V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,It.width,It.height,Be,Pe,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ct,It.width,It.height,0,Be,Pe,It.data)}}else{V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be,Pe,we[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Be,Pe,we[de]);for(let ze=0;ze<Se.length;ze++){const at=Se[ze];V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,0,0,Be,Pe,at.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ze+1,ct,Be,Pe,at.image[de])}}}y(E)&&S(s.TEXTURE_CUBE_MAP),ue.__version=xe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,G,he,xe,ue){const ke=l.convert(G.format,G.colorSpace),be=l.convert(G.type),qe=L(G.internalFormat,ke,be,G.colorSpace),rt=r.get(E),ye=r.get(G);if(ye.__renderTarget=E,!rt.__hasExternalTextures){const we=Math.max(1,E.width>>ue),Ge=Math.max(1,E.height>>ue);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,ue,qe,we,Ge,E.depth,0,ke,be,null):t.texImage2D(xe,ue,qe,we,Ge,0,ke,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,xe,ye.__webglTexture,0,z(E)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,xe,ye.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(P,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const he=E.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ue=D(E.stencilBuffer,xe),ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),ue,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,P)}else{const he=E.textures;for(let xe=0;xe<he.length;xe++){const ue=he[xe],ke=l.convert(ue.format,ue.colorSpace),be=l.convert(ue.type),qe=L(ue.internalFormat,ke,be,ue.colorSpace);Vt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),qe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(P,E,G){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),q(s.TEXTURE_CUBE_MAP,E.depthTexture);const rt=l.convert(E.depthTexture.format),ye=l.convert(E.depthTexture.type);let we;E.depthTexture.format===ir?we=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(we=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,we,E.width,E.height,0,rt,ye,null)}}else ee(E.depthTexture,0);const ue=xe.__webglTexture,ke=z(E),be=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,qe=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)Vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,be,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,qe,be,ue,0);else if(E.depthTexture.format===os)Vt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,be,ue,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,qe,be,ue,0);else throw new Error("Unknown depthTexture format")}function it(P){const E=r.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=he}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)Ve(E.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?Ve(E.__webglFramebuffer[0],P,0):Ve(E.__webglFramebuffer,P,0)}else if(G){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[he],P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(P,E,G){const he=r.get(P);E!==void 0&&pe(he.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&it(P)}function mt(P){const E=P.texture,G=r.get(P),he=r.get(E);P.addEventListener("dispose",j);const xe=P.textures,ue=P.isWebGLCubeRenderTarget===!0,ke=xe.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,d.memory.textures++),ue){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let qe=0;qe<E.mipmaps.length;qe++)G.__webglFramebuffer[be][qe]=s.createFramebuffer()}else G.__webglFramebuffer[be]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)G.__webglFramebuffer[be]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ke)for(let be=0,qe=xe.length;be<qe;be++){const rt=r.get(xe[be]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&Vt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const qe=xe[be];G.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const rt=l.convert(qe.format,qe.colorSpace),ye=l.convert(qe.type),we=L(qe.internalFormat,rt,ye,qe.colorSpace,P.isXRRenderTarget===!0),Ge=z(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,we,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,G.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)pe(G.__webglFramebuffer[be][qe],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe);else pe(G.__webglFramebuffer[be],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(E)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let be=0,qe=xe.length;be<qe;be++){const rt=xe[be],ye=r.get(rt);let we=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),q(we,rt),pe(G.__webglFramebuffer,P,rt,s.COLOR_ATTACHMENT0+be,we,0),y(rt)&&S(we)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),q(be,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)pe(G.__webglFramebuffer[qe],P,E,s.COLOR_ATTACHMENT0,be,qe);else pe(G.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,be,0);y(E)&&S(be),t.unbindTexture()}P.depthBuffer&&it(P)}function wt(P){const E=P.textures;for(let G=0,he=E.length;G<he;G++){const xe=E[G];if(y(xe)){const ue=N(P),ke=r.get(xe).__webglTexture;t.bindTexture(ue,ke),S(ue),t.unbindTexture()}}}const Pt=[],ut=[];function Bt(P){if(P.samples>0){if(Vt(P)===!1){const E=P.textures,G=P.width,he=P.height;let xe=s.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(P),be=E.length>1;if(be)for(let rt=0;rt<E.length;rt++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const qe=P.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[rt]);const ye=r.get(E[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,G,he,0,0,G,he,xe,s.NEAREST),p===!0&&(Pt.length=0,ut.length=0,Pt.push(s.COLOR_ATTACHMENT0+rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(ue),ut.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let rt=0;rt<E.length;rt++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,ke.__webglColorRenderbuffer[rt]);const ye=r.get(E[rt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(P){return Math.min(o.maxSamples,P.samples)}function Vt(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(P){const E=d.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function bt(P,E){const G=P.colorSpace,he=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==na&&G!==Lr&&(Et.getTransfer(G)===Lt?(he!==wi||xe!==fi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=Kt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GE(s,e){function t(r,o=Lr){let l;const d=Et.getTransfer(o);if(r===fi)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===i0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===r0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===t0)return s.BYTE;if(r===n0)return s.SHORT;if(r===$a)return s.UNSIGNED_SHORT;if(r===Hf)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===Zn)return s.HALF_FLOAT;if(r===s0)return s.ALPHA;if(r===a0)return s.RGB;if(r===wi)return s.RGBA;if(r===ir)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===o0)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===ta)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===ql||r===Kl||r===Ql||r===Zl)if(d===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Kd||r===Qd||r===Zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd||r===$d||r===ef||r===tf||r===nf||r===rf||r===sf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Jd||r===$d)return d===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ef)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===tf)return l.COMPRESSED_R11_EAC;if(r===nf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===rf)return l.COMPRESSED_RG11_EAC;if(r===sf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===xf||r===gf||r===vf||r===_f)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===af)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===of)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===df)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ff)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vf)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_f)return d===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yf||r===Sf||r===Mf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===yf)return d===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ef||r===wf||r===bf||r===Tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===wf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===eo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new x0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new an({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends cs{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,v=null,_=null,g=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",y=new YE,S={},N=t.getContextAttributes();let L=null,D=null;const F=[],O=[],j=new nt;let A=null;const R=new di;R.viewport=new $t;const fe=new di;fe.viewport=new $t;const k=[R,fe],J=new t1;let $=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=F[re];return me===void 0&&(me=new od,F[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=F[re];return me===void 0&&(me=new od,F[re]=me),me.getGripSpace()},this.getHand=function(re){let me=F[re];return me===void 0&&(me=new od,F[re]=me),me.getHandSpace()};function ee(re){const me=O.indexOf(re.inputSource);if(me===-1)return;const pe=F[me];pe!==void 0&&(pe.update(re.inputSource,re.frame,m||d),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",W);for(let re=0;re<F.length;re++){const me=O[re];me!==null&&(O[re]=null,F[re].disconnect(me))}$=null,le=null,y.reset();for(const re in S)delete S[re];e.setRenderTarget(L),M=null,g=null,_=null,o=null,D=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",W),N.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(j),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ve=null;N.depth&&(Ve=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=N.stencil?os:ir,Fe=N.stencil?eo:Oi);const it={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Hn(g.textureWidth,g.textureHeight,{format:wi,type:fi,depthTexture:new to(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Hn(M.framebufferWidth,M.framebufferHeight,{format:wi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(re){for(let me=0;me<re.removed.length;me++){const pe=re.removed[me],Fe=O.indexOf(pe);Fe>=0&&(O[Fe]=null,F[Fe].disconnect(pe))}for(let me=0;me<re.added.length;me++){const pe=re.added[me];let Fe=O.indexOf(pe);if(Fe===-1){for(let it=0;it<F.length;it++)if(it>=O.length){O.push(pe),Fe=it;break}else if(O[it]===null){O[it]=pe,Fe=it;break}if(Fe===-1)break}const Ve=F[Fe];Ve&&Ve.connect(pe)}}const Q=new Y,oe=new Y;function ce(re,me,pe){Q.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Fe=Q.distanceTo(oe),Ve=me.projectionMatrix.elements,it=pe.projectionMatrix.elements,Kt=Ve[14]/(Ve[10]-1),mt=Ve[14]/(Ve[10]+1),wt=(Ve[9]+1)/Ve[5],Pt=(Ve[9]-1)/Ve[5],ut=(Ve[8]-1)/Ve[0],Bt=(it[8]+1)/it[0],z=Kt*ut,Vt=Kt*Bt,_t=Fe/(-ut+Bt),bt=_t*-ut;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(bt),re.translateZ(_t),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const He=Kt+_t,P=mt+_t,E=z-bt,G=Vt+(Fe-bt),he=wt*mt/P*He,xe=Pt*mt/P*He;re.projectionMatrix.makePerspective(E,G,he,xe,He,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let me=re.near,pe=re.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),J.near=fe.near=R.near=me,J.far=fe.far=R.far=pe,($!==J.near||le!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,le=J.far),J.layers.mask=re.layers.mask|6,R.layers.mask=J.layers.mask&-5,fe.layers.mask=J.layers.mask&-3;const Fe=re.parent,Ve=J.cameras;U(J,Fe);for(let it=0;it<Ve.length;it++)U(Ve[it],Fe);Ve.length===2?ce(J,R,fe):J.projectionMatrix.copy(R.projectionMatrix),q(re,J,Fe)};function q(re,me,pe){pe===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Af*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(re){p=re,g!==null&&(g.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(re){return S[re]};let Ae=null;function We(re,me){if(v=me.getViewerPose(m||d),w=me,v!==null){const pe=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Fe=!1;pe.length!==J.cameras.length&&(J.cameras.length=0,Fe=!0);for(let mt=0;mt<pe.length;mt++){const wt=pe[mt];let Pt=null;if(M!==null)Pt=M.getViewport(wt);else{const Bt=_.getViewSubImage(g,wt);Pt=Bt.viewport,mt===0&&(e.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(D))}let ut=k[mt];ut===void 0&&(ut=new di,ut.layers.enable(mt),ut.viewport=new $t,k[mt]=ut),ut.matrix.fromArray(wt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(wt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(J.matrix.copy(ut.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Fe===!0&&J.cameras.push(ut)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const mt=_.getDepthInformation(pe[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,o.renderState)}if(Ve&&Ve.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let mt=0;mt<pe.length;mt++){const wt=pe[mt].camera;if(wt){let Pt=S[wt];Pt||(Pt=new x0,S[wt]=Pt);const ut=_.getCameraImage(wt);Pt.sourceTexture=ut}}}}for(let pe=0;pe<F.length;pe++){const Fe=O[pe],Ve=F[pe];Fe!==null&&Ve!==void 0&&Ve.update(Fe,me,m||d)}Ae&&Ae(re,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const Ze=new y0;Ze.setAnimationLoop(We),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const is=new rr,KE=new Yt;function QE(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,g0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,N,L,D){S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),_(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,N,L):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Vn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Vn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=e.get(S),L=N.envMap,D=N.envMapRotation;L&&(y.envMap.value=L,is.copy(D),is.x*=-1,is.y*=-1,is.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),y.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(is)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,N,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const N=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ZE(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const D=L.program;r.uniformBlockBinding(N,D)}function m(N,L){let D=o[N.id];D===void 0&&(w(N),D=v(N),o[N.id]=D,N.addEventListener("dispose",y));const F=L.program;r.updateUBOMapping(N,F);const O=e.render.frame;l[N.id]!==O&&(g(N),l[N.id]=O)}function v(N){const L=_();N.__bindingPointIndex=L;const D=s.createBuffer(),F=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function _(){for(let N=0;N<f;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const L=o[N.id],D=N.uniforms,F=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,j=D.length;O<j;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,fe=A.length;R<fe;R++){const k=A[R];if(M(k,O,R,F)===!0){const J=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let ee=0;ee<$.length;ee++){const ie=$[ee],W=C(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,J+le,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,le),le+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,L,D,F){const O=N.value,j=L+"_"+D;if(F[j]===void 0)return typeof O=="number"||typeof O=="boolean"?F[j]=O:F[j]=O.clone(),!0;{const A=F[j];if(typeof O=="number"||typeof O=="boolean"){if(A!==O)return F[j]=O,!0}else if(A.equals(O)===!1)return A.copy(O),!0}return!1}function w(N){const L=N.uniforms;let D=0;const F=16;for(let j=0,A=L.length;j<A;j++){const R=Array.isArray(L[j])?L[j]:[L[j]];for(let fe=0,k=R.length;fe<k;fe++){const J=R[fe],$=Array.isArray(J.value)?J.value:[J.value];for(let le=0,ee=$.length;le<ee;le++){const ie=$[le],W=C(ie),Q=D%F,oe=Q%W.boundary,ce=Q+oe;D+=oe,ce!==0&&F-ce<W.storage&&(D+=F-ce),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=W.storage}}}const O=D%F;return O>0&&(D+=F-O),N.__size=D,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function S(){for(const N in o)s.deleteBuffer(o[N]);d=[],o={},l={}}return{bind:p,update:m,dispose:S}}const JE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function $E(){return Pi===null&&(Pi=new k_(JE,16,16,ta,Zn),Pi.name="DFG_LUT",Pi.minFilter=Mn,Pi.magFilter=Mn,Pi.wrapS=tr,Pi.wrapT=tr,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class ew{constructor(e={}){const{canvas:t=p_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const C=M,y=new Set([qf,Yf,Xf]),S=new Set([fi,Oi,$a,eo,Gf,Wf]),N=new Uint32Array(4),L=new Int32Array(4);let D=null,F=null;const O=[],j=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let fe=!1;this._outputColorSpace=ui;let k=0,J=0,$=null,le=-1,ee=null;const ie=new $t,W=new $t;let Q=null;const oe=new St(0);let ce=0,U=t.width,q=t.height,Ae=1,We=null,Ze=null;const re=new $t(0,0,U,q),me=new $t(0,0,U,q);let pe=!1;const Fe=new h0;let Ve=!1,it=!1;const Kt=new Yt,mt=new Y,wt=new $t,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Bt(){return $===null?Ae:1}let z=r;function Vt(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ff}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",It,!1),z===null){const X="webgl2";if(z=Vt(X,T),z===null)throw Vt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ct("WebGLRenderer: "+T.message),T}let _t,bt,He,P,E,G,he,xe,ue,ke,be,qe,rt,ye,we,Ge,Be,Pe,ct,V,Te,Me,De;function Se(){_t=new eM(z),_t.init(),Te=new GE(z,_t),bt=new XS(z,_t,e,Te),He=new VE(z,_t),bt.reversedDepthBuffer&&g&&He.buffers.depth.setReversed(!0),P=new iM(z),E=new CE,G=new HE(z,_t,He,E,bt,Te,P),he=new $S(R),xe=new l1(z),Me=new GS(z,xe),ue=new tM(z,xe,P,Me),ke=new sM(z,ue,xe,Me,P),Pe=new rM(z,bt,G),we=new YS(E),be=new AE(R,he,_t,bt,Me,we),qe=new QE(R,E),rt=new RE,ye=new FE(_t),Be=new HS(R,he,He,ke,w,p),Ge=new jE(R,ke,bt),De=new ZE(z,P,bt,He),ct=new WS(z,_t,P),V=new nM(z,_t,P),P.programs=be.programs,R.capabilities=bt,R.extensions=_t,R.properties=E,R.renderLists=rt,R.shadowMap=Ge,R.state=He,R.info=P}Se(),C!==fi&&(A=new oM(C,t.width,t.height,o,l));const de=new qE(R,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(T){T!==void 0&&(Ae=T,this.setSize(U,q,!1))},this.getSize=function(T){return T.set(U,q)},this.setSize=function(T,X,ae=!0){if(de.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,q=X,t.width=Math.floor(T*Ae),t.height=Math.floor(X*Ae),ae===!0&&(t.style.width=T+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(U*Ae,q*Ae).floor()},this.setDrawingBufferSize=function(T,X,ae){U=T,q=X,Ae=ae,t.width=Math.floor(T*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ie)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,X,ae,ne){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,X,ae,ne),He.viewport(ie.copy(re).multiplyScalar(Ae).round())},this.getScissor=function(T){return T.copy(me)},this.setScissor=function(T,X,ae,ne){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,X,ae,ne),He.scissor(W.copy(me).multiplyScalar(Ae).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){He.setScissorTest(pe=T)},this.setOpaqueSort=function(T){We=T},this.setTransparentSort=function(T){Ze=T},this.getClearColor=function(T){return T.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ae=!0){let ne=0;if(T){let Z=!1;if($!==null){const Ne=$.texture.format;Z=y.has(Ne)}if(Z){const Ne=$.texture.type,Ue=S.has(Ne),Ce=Be.getClearColor(),Le=Be.getClearAlpha(),Qe=Ce.r,$e=Ce.g,dt=Ce.b;Ue?(N[0]=Qe,N[1]=$e,N[2]=dt,N[3]=Le,z.clearBufferuiv(z.COLOR,0,N)):(L[0]=Qe,L[1]=$e,L[2]=dt,L[3]=Le,z.clearBufferiv(z.COLOR,0,L))}else ne|=z.COLOR_BUFFER_BIT}X&&(ne|=z.DEPTH_BUFFER_BIT),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",It,!1),Be.dispose(),rt.dispose(),ye.dispose(),E.dispose(),he.dispose(),ke.dispose(),Me.dispose(),De.dispose(),be.dispose(),de.dispose(),de.removeEventListener("sessionstart",sr),de.removeEventListener("sessionend",Or),ei.stop()};function ze(T){T.preventDefault(),jm("WebGLRenderer: Context Lost."),fe=!0}function at(){jm("WebGLRenderer: Context Restored."),fe=!1;const T=P.autoReset,X=Ge.enabled,ae=Ge.autoUpdate,ne=Ge.needsUpdate,Z=Ge.type;Se(),P.autoReset=T,Ge.enabled=X,Ge.autoUpdate=ae,Ge.needsUpdate=ne,Ge.type=Z}function It(T){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const X=T.target;X.removeEventListener("dispose",Tt),$n(X)}function $n(T){wn(T),E.remove(T)}function wn(T){const X=E.get(T).programs;X!==void 0&&(X.forEach(function(ae){be.releaseProgram(ae)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ae,ne,Z,Ne){X===null&&(X=Pt);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=fo(T,X,ae,ne,Z);He.setMaterial(ne,Ue);let Le=ae.index,Qe=1;if(ne.wireframe===!0){if(Le=ue.getWireframeAttribute(ae),Le===void 0)return;Qe=2}const $e=ae.drawRange,dt=ae.attributes.position;let Je=$e.start*Qe,Dt=($e.start+$e.count)*Qe;Ne!==null&&(Je=Math.max(Je,Ne.start*Qe),Dt=Math.min(Dt,(Ne.start+Ne.count)*Qe)),Le!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,Le.count)):dt!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,dt.count));const Ot=Dt-Je;if(Ot<0||Ot===1/0)return;Me.setup(Z,ne,Ce,ae,Le);let Ft,Mt=ct;if(Le!==null&&(Ft=xe.get(Le),Mt=V,Mt.setIndex(Ft)),Z.isMesh)ne.wireframe===!0?(He.setLineWidth(ne.wireframeLinewidth*Bt()),Mt.setMode(z.LINES)):Mt.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=ne.linewidth;Qt===void 0&&(Qt=1),He.setLineWidth(Qt*Bt()),Z.isLineSegments?Mt.setMode(z.LINES):Z.isLineLoop?Mt.setMode(z.LINE_LOOP):Mt.setMode(z.LINE_STRIP)}else Z.isPoints?Mt.setMode(z.POINTS):Z.isSprite&&Mt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ac("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,bn=Z._multiDrawCount,yt=Le?xe.get(Le).bytesPerElement:1,Pn=E.get(ne).currentProgram.getUniforms();for(let Dn=0;Dn<bn;Dn++)Pn.setValue(z,"_gl_DrawID",Dn),Mt.render(Qt[Dn]/yt,Ye[Dn])}else if(Z.isInstancedMesh)Mt.renderInstances(Je,Ot,Z.count);else if(ae.isInstancedBufferGeometry){const Qt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ye=Math.min(ae.instanceCount,Qt);Mt.renderInstances(Je,Ot,Ye)}else Mt.render(Je,Ot)};function us(T,X,ae){T.transparent===!0&&T.side===er&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,Br(T,X,ae),T.side=Ur,T.needsUpdate=!0,Br(T,X,ae),T.side=er):Br(T,X,ae)}this.compile=function(T,X,ae=null){ae===null&&(ae=T),F=ye.get(ae),F.init(X),j.push(F),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),T!==ae&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const ne=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let Ue=0;Ue<Ne.length;Ue++){const Ce=Ne[Ue];us(Ce,ae,Z),ne.add(Ce)}else us(Ne,ae,Z),ne.add(Ne)}),F=j.pop(),ne},this.compileAsync=function(T,X,ae=null){const ne=this.compile(T,X,ae);return new Promise(Z=>{function Ne(){if(ne.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Z(T);return}setTimeout(Ne,10)}_t.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Bi=null;function mc(T){Bi&&Bi(T)}function sr(){ei.stop()}function Or(){ei.start()}const ei=new y0;ei.setAnimationLoop(mc),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(T){Bi=T,de.setAnimationLoop(T),T===null?ei.stop():ei.start()},de.addEventListener("sessionstart",sr),de.addEventListener("sessionend",Or),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;const ae=de.enabled===!0&&de.isPresenting===!0,ne=A!==null&&($===null||ae)&&A.begin(R,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,X,$),F=ye.get(T,j.length),F.init(X),j.push(F),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(Kt,Ii,X.reversedDepth),it=this.localClippingEnabled,Ve=we.init(this.clippingPlanes,it),D=rt.get(T,O.length),D.init(),O.push(D),de.enabled===!0&&de.isPresenting===!0){const Ue=R.xr.getDepthSensingMesh();Ue!==null&&kr(Ue,X,-1/0,R.sortObjects)}kr(T,X,0,R.sortObjects),D.finish(),R.sortObjects===!0&&D.sort(We,Ze),ut=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ut&&Be.addToRenderList(D,T),this.info.render.frame++,Ve===!0&&we.beginShadows();const Z=F.state.shadowsArray;if(Ge.render(Z,T,X),Ve===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const Ue=D.opaque,Ce=D.transmissive;if(F.setupLights(),X.isArrayCamera){const Le=X.cameras;if(Ce.length>0)for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe];co(Ue,Ce,T,dt)}ut&&Be.render(T);for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe];lo(D,T,dt,dt.viewport)}}else Ce.length>0&&co(Ue,Ce,T,X),ut&&Be.render(T),lo(D,T,X)}$!==null&&J===0&&(G.updateMultisampleRenderTarget($),G.updateRenderTargetMipmap($)),ne&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,X),Me.resetDefaultState(),le=-1,ee=null,j.pop(),j.length>0?(F=j[j.length-1],Ve===!0&&we.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,O.pop(),O.length>0?D=O[O.length-1]:D=null};function kr(T,X,ae,ne){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){ne&&wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Kt);const Ue=ke.update(T),Ce=T.material;Ce.visible&&D.push(T,Ue,Ce,ae,wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const Ue=ke.update(T),Ce=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),wt.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),wt.copy(Ue.boundingSphere.center)),wt.applyMatrix4(T.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ce)){const Le=Ue.groups;for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const dt=Le[Qe],Je=Ce[dt.materialIndex];Je&&Je.visible&&D.push(T,Ue,Je,ae,wt.z,dt)}}else Ce.visible&&D.push(T,Ue,Ce,ae,wt.z,null)}}const Ne=T.children;for(let Ue=0,Ce=Ne.length;Ue<Ce;Ue++)kr(Ne[Ue],X,ae,ne)}function lo(T,X,ae,ne){const{opaque:Z,transmissive:Ne,transparent:Ue}=T;F.setupLightsView(ae),Ve===!0&&we.setGlobalState(R.clippingPlanes,ae),ne&&He.viewport(ie.copy(ne)),Z.length>0&&ds(Z,X,ae),Ne.length>0&&ds(Ne,X,ae),Ue.length>0&&ds(Ue,X,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function co(T,X,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ne.id]===void 0){const Je=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ne.id]=new Hn(1,1,{generateMipmaps:!0,type:Je?Zn:fi,minFilter:as,samples:Math.max(4,bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ne=F.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||ie;Ne.setSize(Ue.z*R.transmissionResolutionScale,Ue.w*R.transmissionResolutionScale);const Ce=R.getRenderTarget(),Le=R.getActiveCubeFace(),Qe=R.getActiveMipmapLevel();R.setRenderTarget(Ne),R.getClearColor(oe),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),ut&&Be.render(ae);const $e=R.toneMapping;R.toneMapping=Fi;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),F.setupLightsView(ne),Ve===!0&&we.setGlobalState(R.clippingPlanes,ne),ds(T,ae,ne),G.updateMultisampleRenderTarget(Ne),G.updateRenderTargetMipmap(Ne),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,Ot=X.length;Dt<Ot;Dt++){const Ft=X[Dt],{object:Mt,geometry:Qt,material:Ye,group:bn}=Ft;if(Ye.side===er&&Mt.layers.test(ne.layers)){const yt=Ye.side;Ye.side=Vn,Ye.needsUpdate=!0,bi(Mt,ae,ne,Qt,Ye,bn),Ye.side=yt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(G.updateMultisampleRenderTarget(Ne),G.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Ce,Le,Qe),R.setClearColor(oe,ce),dt!==void 0&&(ne.viewport=dt),R.toneMapping=$e}function ds(T,X,ae){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Ne=T.length;Z<Ne;Z++){const Ue=T[Z],{object:Ce,geometry:Le,group:Qe}=Ue;let $e=Ue.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Ce.layers.test(ae.layers)&&bi(Ce,X,ae,Le,$e,Qe)}}function bi(T,X,ae,ne,Z,Ne){T.onBeforeRender(R,X,ae,ne,Z,Ne),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(R,X,ae,ne,T,Ne),Z.transparent===!0&&Z.side===er&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,R.renderBufferDirect(ae,X,ne,Z,T,Ne),Z.side=Ur,Z.needsUpdate=!0,R.renderBufferDirect(ae,X,ne,Z,T,Ne),Z.side=er):R.renderBufferDirect(ae,X,ne,Z,T,Ne),T.onAfterRender(R,X,ae,ne,Z,Ne)}function Br(T,X,ae){X.isScene!==!0&&(X=Pt);const ne=E.get(T),Z=F.state.lights,Ne=F.state.shadowsArray,Ue=Z.state.version,Ce=be.getParameters(T,Z.state,Ne,X,ae),Le=be.getProgramCacheKey(Ce);let Qe=ne.programs;ne.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const $e=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ne.envMap=he.get(T.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Qe===void 0&&(T.addEventListener("dispose",Tt),Qe=new Map,ne.programs=Qe);let dt=Qe.get(Le);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ue)return uo(T,Ce),dt}else Ce.uniforms=be.getUniforms(T),T.onBeforeCompile(Ce,R),dt=be.acquireProgram(Ce,Le),Qe.set(Le,dt),ne.uniforms=Ce.uniforms;const Je=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=we.uniform),uo(T,Ce),ne.needsLights=po(T),ne.lightsStateVersion=Ue,ne.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=dt,ne.uniformsList=null,dt}function la(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=$l.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function uo(T,X){const ae=E.get(T);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function fo(T,X,ae,ne,Z){X.isScene!==!0&&(X=Pt),G.resetTextureUnits();const Ne=X.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ce=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:na,Le=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=he.get(ne.envMap||Ue,Le),$e=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,dt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!ae.morphAttributes.position,Dt=!!ae.morphAttributes.normal,Ot=!!ae.morphAttributes.color;let Ft=Fi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=R.toneMapping);const Mt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qt=Mt!==void 0?Mt.length:0,Ye=E.get(ne),bn=F.state.lights;if(Ve===!0&&(it===!0||T!==ee)){const Zt=T===ee&&ne.id===le;we.setState(ne,T,Zt)}let yt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==bn.state.version||Ye.outputColorSpace!==Ce||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Qe||ne.fog===!0&&Ye.fog!==Ne||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==we.numPlanes||Ye.numIntersection!==we.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==dt||Ye.morphTargets!==Je||Ye.morphNormals!==Dt||Ye.morphColors!==Ot||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==Qt)&&(yt=!0):(yt=!0,Ye.__version=ne.version);let Pn=Ye.currentProgram;yt===!0&&(Pn=Br(ne,X,Z));let Dn=!1,Gn=!1,ar=!1;const Rt=Pn.getUniforms(),ot=Ye.uniforms;if(He.useProgram(Pn.program)&&(Dn=!0,Gn=!0,ar=!0),ne.id!==le&&(le=ne.id,Gn=!0),Dn||ee!==T){He.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(z,"projectionMatrix",T.projectionMatrix),Rt.setValue(z,"viewMatrix",T.matrixWorldInverse);const ti=Rt.map.cameraPosition;ti!==void 0&&ti.setValue(z,mt.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,Gn=!0,ar=!0)}if(Ye.needsLights&&(bn.state.directionalShadowMap.length>0&&Rt.setValue(z,"directionalShadowMap",bn.state.directionalShadowMap,G),bn.state.spotShadowMap.length>0&&Rt.setValue(z,"spotShadowMap",bn.state.spotShadowMap,G),bn.state.pointShadowMap.length>0&&Rt.setValue(z,"pointShadowMap",bn.state.pointShadowMap,G)),Z.isSkinnedMesh){Rt.setOptional(z,Z,"bindMatrix"),Rt.setOptional(z,Z,"bindMatrixInverse");const Zt=Z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Rt.setValue(z,"boneTexture",Zt.boneTexture,G))}Z.isBatchedMesh&&(Rt.setOptional(z,Z,"batchingTexture"),Rt.setValue(z,"batchingTexture",Z._matricesTexture,G),Rt.setOptional(z,Z,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",Z._indirectTexture,G),Rt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",Z._colorsTexture,G));const hi=ae.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Pe.update(Z,ae,Pn),(Gn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Rt.setValue(z,"receiveShadow",Z.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(ot.envMapIntensity.value=X.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=$E()),Gn&&(Rt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&ho(ot,ar),Ne&&ne.fog===!0&&qe.refreshFogUniforms(ot,Ne),qe.refreshMaterialUniforms(ot,ne,Ae,q,F.state.transmissionRenderTarget[T.id]),$l.upload(z,la(Ye),ot,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($l.upload(z,la(Ye),ot,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Rt.setValue(z,"center",Z.center),Rt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(z,"normalMatrix",Z.normalMatrix),Rt.setValue(z,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Zt=ne.uniformsGroups;for(let ti=0,zi=Zt.length;ti<zi;ti++){const ca=Zt[ti];De.update(ca,Pn),De.bind(ca,Pn)}}return Pn}function ho(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function po(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,X,ae){const ne=E.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(T.texture).__webglTexture=X,E.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ae=E.get(T);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const mo=z.createFramebuffer();this.setRenderTarget=function(T,X=0,ae=0){$=T,k=X,J=ae;let ne=null,Z=!1,Ne=!1;if(T){const Ce=E.get(T);if(Ce.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),ie.copy(T.viewport),W.copy(T.scissor),Q=T.scissorTest,He.viewport(ie),He.scissor(W),He.setScissorTest(Q),le=-1;return}else if(Ce.__webglFramebuffer===void 0)G.setupRenderTarget(T);else if(Ce.__hasExternalTextures)G.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Ce.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ne=!0);const Qe=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?ne=Qe[X][ae]:ne=Qe[X],Z=!0):T.samples>0&&G.useMultisampledRTT(T)===!1?ne=E.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,ie.copy(T.viewport),W.copy(T.scissor),Q=T.scissorTest}else ie.copy(re).multiplyScalar(Ae).floor(),W.copy(me).multiplyScalar(Ae).floor(),Q=pe;if(ae!==0&&(ne=mo),He.bindFramebuffer(z.FRAMEBUFFER,ne)&&He.drawBuffers(T,ne),He.viewport(ie),He.scissor(W),He.setScissorTest(Q),Z){const Ce=E.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,ae)}else if(Ne){const Ce=X;for(let Le=0;Le<T.textures.length;Le++){const Qe=E.get(T.textures[Le]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Le,Qe.__webglTexture,ae,Ce)}}else if(T!==null&&ae!==0){const Ce=E.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,ae)}le=-1},this.readRenderTargetPixels=function(T,X,ae,ne,Z,Ne,Ue,Ce=0){if(!(T&&T.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le){He.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Qe=T.textures[Ce],$e=Qe.format,dt=Qe.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!bt.textureFormatReadable($e)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-ne&&ae>=0&&ae<=T.height-Z&&z.readPixels(X,ae,ne,Z,Te.convert($e),Te.convert(dt),Ne)}finally{const Qe=$!==null?E.get($).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(T,X,ae,ne,Z,Ne,Ue,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le)if(X>=0&&X<=T.width-ne&&ae>=0&&ae<=T.height-Z){He.bindFramebuffer(z.FRAMEBUFFER,Le);const Qe=T.textures[Ce],$e=Qe.format,dt=Qe.type;if(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!bt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),z.readPixels(X,ae,ne,Z,Te.convert($e),Te.convert(dt),0);const Dt=$!==null?E.get($).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Dt);const Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await m_(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne),z.deleteBuffer(Je),z.deleteSync(Ot),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ae=0){const ne=Math.pow(2,-ae),Z=Math.floor(T.image.width*ne),Ne=Math.floor(T.image.height*ne),Ue=X!==null?X.x:0,Ce=X!==null?X.y:0;G.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ue,Ce,Z,Ne),He.unbindTexture()};const xc=z.createFramebuffer(),gc=z.createFramebuffer();this.copyTextureToTexture=function(T,X,ae=null,ne=null,Z=0,Ne=0){let Ue,Ce,Le,Qe,$e,dt,Je,Dt,Ot;const Ft=T.isCompressedTexture?T.mipmaps[Ne]:T.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,Le=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,$e=ae.min.y,dt=ae.isBox3?ae.min.z:0;else{const ot=Math.pow(2,-Z);Ue=Math.floor(Ft.width*ot),Ce=Math.floor(Ft.height*ot),T.isDataArrayTexture?Le=Ft.depth:T.isData3DTexture?Le=Math.floor(Ft.depth*ot):Le=1,Qe=0,$e=0,dt=0}ne!==null?(Je=ne.x,Dt=ne.y,Ot=ne.z):(Je=0,Dt=0,Ot=0);const Mt=Te.convert(X.format),Qt=Te.convert(X.type);let Ye;X.isData3DTexture?(G.setTexture3D(X,0),Ye=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),Ye=z.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const bn=z.getParameter(z.UNPACK_ROW_LENGTH),yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pn=z.getParameter(z.UNPACK_SKIP_PIXELS),Dn=z.getParameter(z.UNPACK_SKIP_ROWS),Gn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,$e),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const ar=T.isDataArrayTexture||T.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const ot=E.get(T),hi=E.get(X),Zt=E.get(ot.__renderTarget),ti=E.get(hi.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,Zt.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let zi=0;zi<Le;zi++)ar&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(T).__webglTexture,Z,dt+zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Ne,Ot+zi)),z.blitFramebuffer(Qe,$e,Ue,Ce,Je,Dt,Ue,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||E.has(T)){const ot=E.get(T),hi=E.get(X);He.bindFramebuffer(z.READ_FRAMEBUFFER,xc),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,gc);for(let Zt=0;Zt<Le;Zt++)ar?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ot.__webglTexture,Z,dt+Zt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ot.__webglTexture,Z),Rt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hi.__webglTexture,Ne,Ot+Zt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hi.__webglTexture,Ne),Z!==0?z.blitFramebuffer(Qe,$e,Ue,Ce,Je,Dt,Ue,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):Rt?z.copyTexSubImage3D(Ye,Ne,Je,Dt,Ot+Zt,Qe,$e,Ue,Ce):z.copyTexSubImage2D(Ye,Ne,Je,Dt,Qe,$e,Ue,Ce);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ye,Ne,Je,Dt,Ot,Ue,Ce,Le,Mt,Qt,Ft.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Ne,Je,Dt,Ot,Ue,Ce,Le,Mt,Ft.data):z.texSubImage3D(Ye,Ne,Je,Dt,Ot,Ue,Ce,Le,Mt,Qt,Ft):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ne,Je,Dt,Ue,Ce,Mt,Qt,Ft.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ne,Je,Dt,Ft.width,Ft.height,Mt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Ne,Je,Dt,Ue,Ce,Mt,Qt,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,bn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Gn),Ne===0&&X.generateMipmaps&&z.generateMipmap(Ye),He.unbindTexture()},this.initRenderTarget=function(T){E.get(T).__webglFramebuffer===void 0&&G.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?G.setTextureCube(T,0):T.isData3DTexture?G.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?G.setTexture2DArray(T,0):G.setTexture2D(T,0),He.unbindTexture()},this.resetState=function(){k=0,J=0,$=null,He.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Ox={type:"change"},nh={type:"start"},T0={type:"end"},Gl=new ao,kx=new Dr,tw=Math.cos(70*v_.DEG2RAD),sn=new Y,zn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6;class nw extends a1{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Fr,this._lastTargetPosition=new Y,this._quat=new Fr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fx,this._sphericalDelta=new fx,this._scale=1,this._panOffset=new Y,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new Y,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rw.bind(this),this._onPointerDown=iw.bind(this),this._onPointerUp=sw.bind(this),this._onContextMenu=fw.bind(this),this._onMouseWheel=lw.bind(this),this._onKeyDown=cw.bind(this),this._onTouchStart=uw.bind(this),this._onTouchMove=dw.bind(this),this._onMouseDown=aw.bind(this),this._onMouseMove=ow.bind(this),this._interceptControlDown=hw.bind(this),this._interceptControlUp=pw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ox),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=zn:r>Math.PI&&(r-=zn),o<-Math.PI?o+=zn:o>Math.PI&&(o-=zn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=sn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new Y(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Y(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<tw?this.object.lookAt(this.target):(kx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(kx,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(Ox),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zn/60*this.autoRotateSpeed*e:zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let l=sn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function iw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function rw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function sw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(T0),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ut.DOLLY;break;case Ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}break;case Ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nh)}function ow(s){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function lw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(s.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(T0))}function cw(s){this.enabled!==!1&&this._handleKeyDown(s)}function uw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ut.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ut.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nh)}function dw(s){switch(this._trackPointer(s),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ut.NONE}}function fw(s){this.enabled!==!1&&s.preventDefault()}function hw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ec={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class oa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mw=new th(-1,1,1,-1,0,1);class xw extends Rn{constructor(){super(),this.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jn([0,2,0,0,2,0],2))}}const gw=new xw;class ih{constructor(e){this._mesh=new ki(gw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vw extends oa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=no.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ih(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bx extends oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let d,f;this.inverse?(d=0,f=1):(d=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,d,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class _w extends oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new nt);this._width=r.width,this._height=r.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vw(ec),this.copyPass.material.blending=Ui,this.timer=new n1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const d=this.passes[o];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),d.needsSwap){if(r){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Bx!==void 0&&(d instanceof Bx?r=!0:d instanceof _w&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sw extends oa{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new St}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),e.autoClear=o}}const Mw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ra extends oa{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new St(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(l,d,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const _=new Hn(l,d,{type:Zn});_.texture.name="UnrealBloomPass.h"+v,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const g=new Hn(l,d,{type:Zn});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),d=Math.round(d/2)}const f=Mw;this.highPassUniforms=no.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];l=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new nt(1/l,1/d),l=Math.round(l/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=no.clone(ec.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader,premultipliedAlpha:!0,blending:Js,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new St,this._oldClearAlpha=1,this._basic=new eh,this._fsQuad=new ih(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=ra.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=ra.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=d}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ra.BlurDirectionX=new nt(1,0);ra.BlurDirectionY=new nt(0,1);const Wl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ew extends oa{constructor(){super(),this.isOutputPass=!0,this.uniforms=no.clone(Wl.uniforms),this.material=new v0({name:Wl.name,uniforms:this.uniforms,vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader}),this._fsQuad=new ih(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Of?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const A0=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
  + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,ww=`
${A0}

uniform float uTime;
uniform float uPulseTime;
uniform vec3  uPulseOrigin;
uniform float uPulseActive;

attribute float aSize;
attribute float aType; // 0 = core, 1 = leaf
attribute float aLayer;
attribute vec3  aBasePosition;

varying float vType;
varying float vPulse;
varying float vLayer;

void main() {
  vec3 pos = aBasePosition;

  // organic noise displacement
  float n = snoise(pos * 0.3 + uTime * 0.15);
  pos += normal * n * 0.25;

  // breathing
  float breath = sin(uTime * 0.8 + aLayer * 1.2) * 0.08 + 1.0;
  pos *= breath;

  // pulse response
  float dist = length(pos - uPulseOrigin);
  float pulseWave = smoothstep(0.0, 1.0, 1.0 - abs(dist - uPulseTime * 12.0) / 3.0);
  vPulse = pulseWave * uPulseActive;

  vType  = aType;
  vLayer = aLayer;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aSize * (300.0 / -mvPos.z) * (1.0 + vPulse * 0.6);
  gl_Position  = projectionMatrix * mvPos;
}
`,bw=`
uniform float uTime;

varying float vType;
varying float vPulse;
varying float vLayer;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;

  // soft glow only — no ring
  float glow = exp(-d * 8.0);

  // color palette -- green spectrum
  vec3 primary   = vec3(0.937, 0.757, 0.200); // #efc133
  vec3 secondary = vec3(0.831, 0.659, 0.165); // #d4a82a
  vec3 tertiary  = vec3(0.898, 1.000, 0.541); // #e5ff8a
  vec3 accent    = vec3(0.831, 0.659, 0.165); // #d4a82a
  vec3 highlight = vec3(0.941, 1.000, 0.420); // #f0ff6b

  float t = sin(uTime * 0.5 + vLayer * 2.0) * 0.5 + 0.5;
  vec3 baseColor = mix(primary, secondary, t);
  if (vType > 0.5) {
    baseColor = mix(accent, tertiary, t);
  }

  // pulse color boost
  baseColor = mix(baseColor, highlight, vPulse * 0.8);

  float alpha = glow * 0.85;
  alpha *= 0.85 + 0.15 * sin(uTime * 1.5 + vLayer);

  gl_FragColor = vec4(baseColor * (glow * 1.2 + vPulse * 0.5), alpha);
}
`,Tw=`
${A0}

uniform float uTime;
uniform float uPulseTime;
uniform vec3  uPulseOrigin;
uniform float uPulseActive;

attribute vec3  aStart;
attribute vec3  aEnd;
attribute float aProgress; // 0..1 along the line segment
attribute float aConnectionIndex;

varying float vAlpha;
varying float vProgress;
varying float vPulse;

void main() {
  // curved path via midpoint offset
  vec3 mid = (aStart + aEnd) * 0.5;
  vec3 diff = aEnd - aStart;
  float len = length(diff);
  vec3 perp = normalize(cross(diff, vec3(0.0, 1.0, 0.0)));
  if (length(perp) < 0.01) perp = normalize(cross(diff, vec3(1.0, 0.0, 0.0)));

  float curveAmount = len * 0.15;
  float noiseVal = snoise(vec3(aConnectionIndex * 0.1, uTime * 0.1, 0.0));
  mid += perp * curveAmount * noiseVal;

  // quadratic bezier
  float t = aProgress;
  vec3 pos = (1.0 - t) * (1.0 - t) * aStart + 2.0 * (1.0 - t) * t * mid + t * t * aEnd;

  // organic displacement
  float n = snoise(pos * 0.5 + uTime * 0.2) * 0.08;
  pos += perp * n;

  // flowing energy
  float flow = fract(t - uTime * 0.3 + aConnectionIndex * 0.1);
  float energy = exp(-pow((flow - 0.5) * 4.0, 2.0));

  // pulse
  float dist = length((aStart + aEnd) * 0.5 - uPulseOrigin);
  float pulseWave = smoothstep(0.0, 1.0, 1.0 - abs(dist - uPulseTime * 12.0) / 4.0);
  vPulse = pulseWave * uPulseActive;

  vAlpha = 0.06 + energy * 0.3 + vPulse * 0.4;
  vProgress = t;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Aw=`
uniform float uTime;

varying float vAlpha;
varying float vProgress;
varying float vPulse;

void main() {
  vec3 primary  = vec3(0.937, 0.757, 0.200); // #efc133
  vec3 accent   = vec3(0.831, 0.659, 0.165); // #d4a82a
  vec3 highlight= vec3(0.941, 1.000, 0.420); // #f0ff6b

  vec3 col = mix(accent, primary, vProgress);
  col = mix(col, highlight, vPulse * 0.6);

  // fade at ends
  float endFade = smoothstep(0.0, 0.1, vProgress) * smoothstep(1.0, 0.9, vProgress);

  gl_FragColor = vec4(col, vAlpha * endFade);
}
`;function Cw(s,e,t){const r=Math.PI*(3-Math.sqrt(5)),o=1-s/(e-1)*2,l=Math.sqrt(1-o*o),d=r*s;return new Y(Math.cos(d)*l*t,o*t,Math.sin(d)*l*t)}function Nw(){const s=[1,20,40,60,40,20],e=[0,2.5,4.5,6.5,8.5,10],t=[];t.push({pos:new Y(0,0,0),layer:0,type:0});for(let g=1;g<s.length;g++){const M=s[g];for(let w=0;w<M;w++){const C=Cw(w,M,e[g]);t.push({pos:C,layer:g,type:g<=2?0:1})}}const r=t.length,o=new Float32Array(r*3),l=new Float32Array(r),d=new Float32Array(r),f=new Float32Array(r),p=new Float32Array(r*3);for(let g=0;g<r;g++){const M=t[g];o[g*3]=M.pos.x,o[g*3+1]=M.pos.y,o[g*3+2]=M.pos.z;const w=M.pos.clone().normalize();p[g*3]=w.x||0,p[g*3+1]=w.y||1,p[g*3+2]=w.z||0,l[g]=M.layer===0?2.8:M.type===0?1.6:.9+Math.random()*.5,d[g]=M.type,f[g]=M.layer}const m=[],v=[];let _=0;for(const g of s)v.push(_),_+=g;for(let g=0;g<s.length-1;g++){const M=v[g],w=M+s[g],C=v[g+1],y=C+s[g+1];for(let S=M;S<w;S++){const N=t[S].pos,L=[];for(let F=C;F<y;F++)L.push({idx:F,dist:N.distanceTo(t[F].pos)});L.sort((F,O)=>F.dist-O.dist);const D=g===0?8:3;for(let F=0;F<Math.min(D,L.length);F++)m.push({start:N.clone(),end:t[L[F].idx].pos.clone()})}}for(let g=2;g<s.length;g++){const M=v[g],w=M+s[g];for(let C=M;C<w;C+=3){const y=M+(C-M+1)%s[g];m.push({start:t[C].pos.clone(),end:t[y].pos.clone()})}}return{positions:o,sizes:l,types:d,layers:f,normals:p,connections:m}}function Rw(s){const t=s.length*24,r=new Float32Array(t*3),o=new Float32Array(t*3),l=new Float32Array(t),d=new Float32Array(t);let f=0;for(let v=0;v<s.length;v++){const _=s[v];for(let g=0;g<24;g++){const M=f;r[M*3]=_.start.x,r[M*3+1]=_.start.y,r[M*3+2]=_.start.z,o[M*3]=_.end.x,o[M*3+1]=_.end.y,o[M*3+2]=_.end.z,l[M]=g/23,d[M]=v,f++}}const p=new Rn;p.setAttribute("position",new Xt(new Float32Array(t*3),3)),p.setAttribute("aStart",new Xt(r,3)),p.setAttribute("aEnd",new Xt(o,3)),p.setAttribute("aProgress",new Xt(l,1)),p.setAttribute("aConnectionIndex",new Xt(d,1));const m=[];for(let v=0;v<s.length;v++){const _=v*24;for(let g=0;g<23;g++)m.push(_+g,_+g+1)}return p.setIndex(m),p}function Pw(){const e=new Float32Array(6e3),t=new Float32Array(2e3);for(let l=0;l<2e3;l++){const d=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1),p=40+Math.random()*60;e[l*3]=p*Math.sin(f)*Math.cos(d),e[l*3+1]=p*Math.sin(f)*Math.sin(d),e[l*3+2]=p*Math.cos(f),t[l]=.5+Math.random()*1.5}const r=new Rn;r.setAttribute("position",new Xt(e,3)),r.setAttribute("size",new Xt(t,1));const o=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:{uTime:{value:0}},vertexShader:`
      attribute float size;
      varying float vBright;
      uniform float uTime;
      void main() {
        vBright = 0.3 + 0.7 * fract(sin(dot(position.xy, vec2(12.9898,78.233))) * 43758.5453);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying float vBright;
      uniform float uTime;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = exp(-d * 8.0) * vBright * (0.6 + 0.4 * sin(uTime * 0.5 + vBright * 6.28));
        gl_FragColor = vec4(vec3(0.75, 0.88, 0.55), a * 0.25);
      }
    `});return new p0(r,o)}function Dw(){const s=vt.useRef(null);return vt.useEffect(()=>{const e=s.current;if(!e)return;const t=e.parentElement;let r=t.clientWidth,o=t.clientHeight;const l=new ew({canvas:e,antialias:!0,alpha:!1});l.setSize(r,o),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(328968),l.toneMapping=uc,l.toneMappingExposure=1.2;const d=new D_;d.fog=new $f(328968,.018);const f=new di(60,r/o,.1,200);f.position.set(0,5,18);const p=new nw(f,e);p.enableDamping=!0,p.dampingFactor=.05,p.autoRotate=!0,p.autoRotateSpeed=.4,p.maxDistance=40,p.minDistance=6,p.enablePan=!1,p.rotateSpeed=.6;const m=new yw(l);m.addPass(new Sw(d,f));const v=new ra(new nt(r,o),1,.5,.25);m.addPass(v),m.addPass(new Ew);const _=Nw(),g={uTime:{value:0},uPulseTime:{value:0},uPulseOrigin:{value:new Y(0,0,0)},uPulseActive:{value:0}},M=new Rn;M.setAttribute("position",new Xt(_.positions,3)),M.setAttribute("aBasePosition",new Xt(_.positions,3)),M.setAttribute("normal",new Xt(_.normals,3)),M.setAttribute("aSize",new Xt(_.sizes,1)),M.setAttribute("aType",new Xt(_.types,1)),M.setAttribute("aLayer",new Xt(_.layers,1));const w=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:g,vertexShader:ww,fragmentShader:bw}),C=new p0(M,w);d.add(C);const y=Rw(_.connections),S=new an({transparent:!0,depthWrite:!1,blending:Js,uniforms:g,vertexShader:Tw,fragmentShader:Aw}),N=new G_(y,S);d.add(N);const L=Pw();d.add(L),d.add(new $_(13234973,.02));const D=new r1,F=new nt;function O(k){const J=e.getBoundingClientRect();F.x=(k.clientX-J.left)/J.width*2-1,F.y=-((k.clientY-J.top)/J.height)*2+1,D.setFromCamera(F,f);const $=D.ray.direction.clone().multiplyScalar(8),le=D.ray.origin.clone().add($);g.uPulseOrigin.value.copy(le),g.uPulseTime.value=0,g.uPulseActive.value=1}e.addEventListener("pointerdown",O);function j(){r=t.clientWidth,o=t.clientHeight,f.aspect=r/o,f.updateProjectionMatrix(),l.setSize(r,o),m.setSize(r,o)}window.addEventListener("resize",j);const A=new s1;let R=0;function fe(){R=requestAnimationFrame(fe);const k=A.getElapsedTime();g.uTime.value=k,g.uPulseActive.value>0&&(g.uPulseTime.value+=A.getDelta()||.016,g.uPulseTime.value>3&&(g.uPulseActive.value=0)),L.material.uniforms.uTime.value=k,p.update(),m.render()}return fe(),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",j),e.removeEventListener("pointerdown",O),p.dispose(),l.dispose(),m.dispose(),M.dispose(),w.dispose(),y.dispose(),S.dispose(),L.geometry.dispose(),L.material.dispose()}},[]),u.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}const Lw="/niduxone/assets/intronidux-CK4_iifn.mp4";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=s=>{const e=Uw(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Ow=vt.createContext({}),kw=()=>vt.useContext(Ow),Bw=vt.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:_=!1,color:g="currentColor",className:M=""}=kw()??{},w=r??_?Number(t??v)*24/Number(e??m):t??v;return vt.createElement("svg",{ref:p,...Dd,width:e??m??Dd.width,height:e??m??Dd.height,stroke:s??g,strokeWidth:w,className:C0("lucide",M,o),...!l&&!Fw(f)&&{"aria-hidden":"true"},...f},[...d.map(([C,y])=>vt.createElement(C,y)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(s,e)=>{const t=vt.forwardRef(({className:r,...o},l)=>vt.createElement(Bw,{ref:l,iconNode:e,className:C0(`lucide-${Iw(zx(s))}`,`lucide-${s}`,r),...o}));return t.displayName=zx(s),t};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],rh=pt("arrow-right",zw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Vw=pt("bell",jw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Gw=pt("building-2",Hw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Xw=pt("calculator",Ww);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Df=pt("chart-column",Yw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],N0=pt("circle-check-big",qw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qw=pt("circle-check",Kw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Qa=pt("credit-card",Zw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],$w=pt("dollar-sign",Jw);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jx=pt("eye",eb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],nb=pt("file-text",tb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],rb=pt("gift",ib);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Lf=pt("globe",sb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],If=pt("heart",ab);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],R0=pt("layers",ob);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],cb=pt("mail",lb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],db=pt("map-pin",ub);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],cc=pt("message-circle",fb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],tc=pt("package",hb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],mb=pt("phone",pb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],gb=pt("puzzle",xb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],_b=pt("send",vb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Sb=pt("shield",yb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Eb=pt("shopping-bag",Mb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],nc=pt("shopping-cart",wb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],P0=pt("smartphone",bb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],D0=pt("sparkles",Tb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],L0=pt("store",Ab);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Nb=pt("target",Cb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Pb=pt("timer",Rb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Vx=pt("trending-down",Db);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],I0=pt("trending-up",Lb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ub=pt("triangle-alert",Ib);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Ob=pt("trophy",Fb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Xl=pt("truck",kb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],U0=pt("unlink",Bb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],jb=pt("user-x",zb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Hb=pt("user",Vb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],F0=pt("users",Gb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],sh=pt("zap",Wb),O0="/niduxone/assets/ecoomerceclick-DWH2IhCi.jpg",Xb="/niduxone/assets/whatsapp-manual-CjxkaqAj.png",Yb="/niduxone/assets/inventario-invisible-DdcoREvF.png",qb="/niduxone/assets/canales-desconectados-Dz55Tn1t.png",Kb="/niduxone/assets/sin-fidelizacion-COamxeIG.png",Qb="/niduxone/assets/decisiones-ciegas-osgInUpK.png",Zb="/niduxone/assets/maria-Bixn4qQw.png",Jb="/niduxone/assets/carlos-DaAMweFv.png",$b="/niduxone/assets/daniel-DnuLVIZ4.png",e2="/niduxone/assets/ana-B5WtU48w.png",k0="/niduxone/assets/ndx-pos-Cwemhkzt.png",B0="/niduxone/assets/ndx-ecommerce-NaUpCkQN.png",z0="/niduxone/assets/ndx-connect--f_D-pzj.png",j0="/niduxone/assets/ndx-loyalty-CM4CLttr.png",t2=[{id:"calculator",label:"Calculadora de Ventas",icon:Xw},{id:"builder",label:"Constructor Visual",icon:gb},{id:"simulator",label:"Simulador de Retención",icon:P0}];function Hx({value:s,prefix:e="",suffix:t=""}){const[r,o]=vt.useState(0),l=vt.useRef();return vt.useEffect(()=>{const d=r,f=s-d,p=600,m=performance.now();cancelAnimationFrame(l.current);const v=_=>{const g=Math.min((_-m)/p,1),M=1-Math.pow(1-g,3);o(Math.round(d+f*M)),g<1&&(l.current=requestAnimationFrame(v))};return l.current=requestAnimationFrame(v),()=>cancelAnimationFrame(l.current)},[s]),u.jsxs("span",{children:[e,r.toLocaleString("es-CR"),t]})}function n2(){const[s,e]=vt.useState(200),[t,r]=vt.useState(25e3),[o,l]=vt.useState(30),d=s*t,f=Math.round(d*(o/100)),p=Math.round(f*.35),m=Math.round(d*.12),v=p+m;return u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",children:[u.jsxs("div",{className:"space-y-8",children:[u.jsx(Ld,{label:"Ventas mensuales",value:s,onChange:e,min:10,max:1e3,step:10,suffix:" ventas",icon:u.jsx(nc,{className:"w-4 h-4"})}),u.jsx(Ld,{label:"Ticket promedio",value:t,onChange:r,min:5e3,max:2e5,step:1e3,prefix:"₡",icon:u.jsx($w,{className:"w-4 h-4"})}),u.jsx(Ld,{label:"Tasa de abandono estimada",value:o,onChange:l,min:5,max:80,step:1,suffix:"%",icon:u.jsx(Vx,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 rounded-2xl p-6",children:[u.jsxs("p",{className:"text-red-400 text-sm font-medium mb-1 flex items-center gap-2",children:[u.jsx(Vx,{className:"w-4 h-4"})," Fuga mensual estimada"]}),u.jsx("p",{className:"text-3xl sm:text-4xl font-bold text-red-400",children:u.jsx(Hx,{value:f,prefix:"₡"})}),u.jsx("p",{className:"text-[var(--nx-text-5)] text-xs mt-2",children:"Dinero que se pierde por carritos abandonados y falta de seguimiento"})]}),u.jsxs("div",{className:"bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-6",children:[u.jsxs("p",{className:"text-[var(--nx-accent)] text-sm font-medium mb-1 flex items-center gap-2",children:[u.jsx(I0,{className:"w-4 h-4"})," Recuperación con Nidux"]}),u.jsxs("p",{className:"text-3xl sm:text-4xl font-bold text-[var(--nx-accent)]",children:[u.jsx(Hx,{value:v,prefix:"+₡"}),u.jsx("span",{className:"text-lg text-[var(--nx-text-4)]",children:" /mes"})]}),u.jsxs("div",{className:"mt-3 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)]",children:[u.jsx(cc,{className:"w-4 h-4 text-[var(--nx-accent)]"}),u.jsx("span",{children:"WhatsApp carrito abandonado: "}),u.jsxs("span",{className:"font-semibold text-[var(--nx-text)]",children:["+₡",p.toLocaleString("es-CR")]})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)]",children:[u.jsx(If,{className:"w-4 h-4 text-[var(--nx-accent)]"}),u.jsx("span",{children:"Programa de lealtad QPONS: "}),u.jsxs("span",{className:"font-semibold text-[var(--nx-text)]",children:["+₡",m.toLocaleString("es-CR")]})]})]})]}),u.jsxs("a",{href:"#agendar",className:"flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3.5 rounded-full hover:brightness-110 transition w-full",children:["Recuperar mis ventas ",u.jsx(rh,{className:"w-4 h-4"})]})]})]})}function Ld({label:s,value:e,onChange:t,min:r,max:o,step:l,prefix:d="",suffix:f="",icon:p}){const m=(e-r)/(o-r)*100;return u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("label",{className:"text-sm text-[var(--nx-text-3)] flex items-center gap-2",children:[u.jsx("span",{className:"text-[var(--nx-accent)]",children:p}),s]}),u.jsxs("span",{className:"text-lg font-bold text-[var(--nx-text)]",children:[d,e.toLocaleString("es-CR"),f]})]}),u.jsx("div",{className:"relative",children:u.jsx("input",{type:"range",min:r,max:o,step:l,value:e,onChange:v=>t(Number(v.target.value)),className:"w-full h-2 appearance-none rounded-full cursor-pointer",style:{background:`linear-gradient(to right, #efc133 ${m}%, rgba(255,255,255,0.1) ${m}%)`}})})]})}const i2=[{id:"ropa",label:"Moda",emoji:"👗"},{id:"mascotas",label:"Mascotas",emoji:"🐾"},{id:"belleza",label:"Belleza",emoji:"💄"},{id:"alimentos",label:"Alimentos",emoji:"🍽️"},{id:"tech",label:"Tecnología",emoji:"💻"},{id:"hogar",label:"Hogar",emoji:"🏠"}],Id=[{id:"inventario",label:"Inventario desordenado",icon:tc,module:"NDX POS",color:"#efc133"},{id:"canales",label:"Canales desconectados",icon:U0,module:"NDX Ecommerce",color:"#22d3ee"},{id:"clientes",label:"No conozco a mis clientes",icon:F0,module:"NDX Loyalty",color:"#f472b6"},{id:"whatsapp",label:"WhatsApp manual y lento",icon:cc,module:"NDX Connect",color:"#4ade80"},{id:"datos",label:"Sin datos para decidir",icon:Df,module:"NDX Analytics",color:"#a78bfa"},{id:"online",label:"No vendo online",icon:Lf,module:"NDX Ecommerce",color:"#fb923c"}];function r2(){const[s,e]=vt.useState(1),[t,r]=vt.useState(null),[o,l]=vt.useState([]),d=m=>{l(v=>v.includes(m)?v.filter(_=>_!==m):[...v,m])},f=Id.filter(m=>o.includes(m.id)),p=[...new Map(f.map(m=>[m.module,m])).values()];return u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10",children:[u.jsxs("div",{className:"lg:col-span-3 space-y-6",children:[u.jsx("div",{className:"flex items-center gap-3 mb-6",children:[1,2].map(m=>u.jsxs("button",{onClick:()=>m===1||t?e(m):void 0,className:`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${s===m?"bg-[var(--nx-accent)] text-black":m<s?"bg-[var(--nx-accent)]/20 text-[var(--nx-accent)] cursor-pointer":"bg-[var(--nx-surface)] text-[var(--nx-text-5)]"}`,children:[u.jsx("span",{className:"w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-xs font-bold",children:m<s?"✓":m}),m===1?"Industria":"Dolores"]},m))}),s===1&&u.jsxs("div",{children:[u.jsx("p",{className:"text-[var(--nx-text-3)] text-sm mb-4",children:"¿En qué industria está su negocio?"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:i2.map(m=>u.jsxs("button",{onClick:()=>{r(m.id),e(2)},className:`flex flex-col items-center gap-2 p-5 rounded-2xl border transition hover:scale-[1.03] ${t===m.id?"border-[var(--nx-accent)] bg-[var(--nx-accent)]/10 shadow-[0_0_20px_rgba(239,193,51,0.1)]":"border-[var(--nx-border)] bg-[var(--nx-surface)] hover:border-[var(--nx-accent)]/40"}`,children:[u.jsx("span",{className:"text-3xl",children:m.emoji}),u.jsx("span",{className:"text-sm font-medium text-[var(--nx-text)]",children:m.label})]},m.id))})]}),s===2&&u.jsxs("div",{children:[u.jsxs("p",{className:"text-[var(--nx-text-3)] text-sm mb-4",children:["¿Qué le causa más dolor de cabeza hoy? ",u.jsx("span",{className:"text-[var(--nx-text-5)]",children:"(seleccione varios)"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Id.map(m=>{const v=o.includes(m.id),_=m.icon;return u.jsxs("button",{onClick:()=>d(m.id),className:`flex items-center gap-3 p-4 rounded-2xl border text-left transition hover:scale-[1.02] ${v?"border-[var(--nx-accent)] bg-[var(--nx-accent)]/10":"border-[var(--nx-border)] bg-[var(--nx-surface)] hover:border-[var(--nx-accent)]/30"}`,children:[u.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shrink-0",style:{background:`${m.color}20`},children:u.jsx(_,{className:"w-5 h-5",style:{color:m.color}})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-[var(--nx-text)]",children:m.label}),u.jsx("p",{className:"text-xs text-[var(--nx-text-5)]",children:m.module})]}),v&&u.jsx(Qw,{className:"w-5 h-5 text-[var(--nx-accent)] ml-auto shrink-0"})]},m.id)})})]})]}),u.jsx("div",{className:"lg:col-span-2",children:u.jsxs("div",{className:"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-3xl p-6 min-h-[320px] flex flex-col",children:[u.jsx("p",{className:"text-xs font-bold tracking-[0.15em] uppercase text-[var(--nx-accent)] mb-4",children:"Tu ecosistema Nidux"}),p.length===0?u.jsx("div",{className:"flex-1 flex items-center justify-center text-center",children:u.jsxs("div",{children:[u.jsx(R0,{className:"w-10 h-10 text-[var(--nx-text-5)] mx-auto mb-3 opacity-40"}),u.jsx("p",{className:"text-sm text-[var(--nx-text-5)]",children:"Seleccione sus dolores de cabeza y vea cómo Nidux los resuelve"})]})}):u.jsxs("div",{className:"space-y-3 flex-1",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 p-3 rounded-xl bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/30",children:[u.jsx(sh,{className:"w-5 h-5 text-[var(--nx-accent)]"}),u.jsx("span",{className:"font-bold text-sm text-[var(--nx-accent)]",children:"Nidux One"})]}),u.jsx("div",{className:"space-y-2",children:p.map((m,v)=>{const _=Id.find(g=>g.module===m.module).icon;return u.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl border border-[var(--nx-border)] bg-black/20 animate-[fadeSlideIn_0.3s_ease-out_forwards]",style:{animationDelay:`${v*100}ms`,opacity:0},children:[u.jsx("div",{className:"w-2 h-2 rounded-full",style:{background:m.color}}),u.jsx(_,{className:"w-4 h-4",style:{color:m.color}}),u.jsx("span",{className:"text-sm font-medium text-[var(--nx-text)]",children:m.module}),u.jsx("span",{className:"text-xs text-[var(--nx-text-5)] ml-auto",children:"Sincronizado 24/7"})]},m.module)})}),p.length>=2&&u.jsx("div",{className:"mt-4 pt-4 border-t border-[var(--nx-border)]",children:u.jsxs("a",{href:"#agendar",className:"flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3 rounded-full hover:brightness-110 transition w-full",children:["Armar mi ecosistema ",u.jsx(rh,{className:"w-4 h-4"})]})})]})]})})]})}function s2(){const[s,e]=vt.useState(""),[t,r]=vt.useState(!1),[o,l]=vt.useState(0),d=s.trim()||"Crema Facial Premium",f=()=>{r(!0),l(0);let v=0;const _=setInterval(()=>{v++,l(v),v>=4&&clearInterval(_)},1200)},p=()=>{r(!1),l(0)},m=[{type:"notification",title:"QPONS.VIP",text:"📍 ¡Bienvenido! Detectamos que estás cerca de nuestra tienda"},{type:"whatsapp",title:"Tu Tienda",text:`¡Hola! 👋 Vimos que te encanta ${d}. Hoy tienes un cupón VIP por tus compras frecuentes`},{type:"coupon",title:"Cupón exclusivo",text:`🎁 15% OFF en ${d} — Solo hoy, solo para ti`},{type:"result",title:"Resultado",text:"El cliente compra con su cupón y acumula puntos de lealtad ✅"}];return u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[var(--nx-text-3)] text-sm mb-3",children:"Escriba el nombre de un producto estrella de su negocio:"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"text",value:s,onChange:v=>{e(v.target.value),t&&p()},placeholder:"Ej: Crema Facial Premium",className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#efc133]/50 focus:outline-none transition"}),u.jsx(D0,{className:"absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--nx-accent)]"})]})]}),u.jsx("button",{onClick:t?p:f,className:`flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-full transition w-full ${t?"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] text-[var(--nx-text-3)] hover:bg-[var(--nx-surface)]":"bg-[var(--nx-accent)] text-black hover:brightness-110"}`,children:t?u.jsx(u.Fragment,{children:"Reiniciar simulación"}):u.jsxs(u.Fragment,{children:[u.jsx(sh,{className:"w-4 h-4"})," Simular experiencia del cliente"]})}),o>=4&&u.jsxs("div",{className:"bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-5 animate-[fadeSlideIn_0.4s_ease-out_forwards]",children:[u.jsx("p",{className:"text-[var(--nx-accent)] text-sm font-bold mb-2",children:"Esto es Comercio Unificado"}),u.jsx("p",{className:"text-[var(--nx-text-3)] text-sm leading-relaxed",children:"Con Nidux, cada cliente recibe mensajes personalizados basados en su historial, ubicación y preferencias. Todo automatizado."}),u.jsxs("a",{href:"#agendar",className:"flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm py-3 rounded-full hover:brightness-110 transition w-full mt-4",children:["Activar 30 días gratis ",u.jsx(rh,{className:"w-4 h-4"})]})]})]}),u.jsx("div",{className:"flex justify-center",children:u.jsx("div",{className:"relative w-[280px] sm:w-[300px]",children:u.jsxs("div",{className:"bg-[#131c2e] rounded-[2.5rem] border-2 border-[#1e2d45] p-3 shadow-[0_0_60px_rgba(0,0,0,0.5)]",children:[u.jsx("div",{className:"absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"}),u.jsxs("div",{className:"bg-gradient-to-b from-[#0f1a0f] to-[#0B1120] rounded-[2rem] min-h-[420px] overflow-hidden relative pt-10 px-3 pb-4",children:[u.jsxs("div",{className:"flex justify-between items-center px-2 mb-6 text-[10px] text-[var(--nx-text-4)]",children:[u.jsx("span",{children:"9:41"}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"5G"}),u.jsx("div",{className:"w-6 h-3 border border-[var(--nx-text-5)] rounded-sm relative",children:u.jsx("div",{className:"absolute inset-[2px] right-[4px] bg-[var(--nx-accent)] rounded-[1px]"})})]})]}),u.jsxs("div",{className:"flex items-center gap-2 mb-6 px-1",children:[u.jsx("div",{className:"w-8 h-8 rounded-full bg-[var(--nx-accent)]/20 flex items-center justify-center",children:u.jsx(L0,{className:"w-4 h-4 text-[var(--nx-accent)]"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-bold text-[var(--nx-text)]",children:"Tu Tienda"}),u.jsx("p",{className:"text-[10px] text-[var(--nx-text-5)]",children:"Cliente frecuente · 120 pts"})]})]}),u.jsxs("div",{className:"space-y-3",children:[!t&&u.jsx("div",{className:"flex items-center justify-center h-48 text-center",children:u.jsxs("div",{children:[u.jsx(P0,{className:"w-8 h-8 text-[var(--nx-text-5)] mx-auto mb-2 opacity-40"}),u.jsx("p",{className:"text-xs text-[var(--nx-text-5)]",children:'Presione "Simular" para ver la experiencia del cliente'})]})}),t&&m.map((v,_)=>{if(_>=o)return null;const g=v.type==="notification",M=v.type==="coupon",w=v.type==="result";return u.jsxs("div",{className:"animate-[fadeSlideIn_0.4s_ease-out_forwards]",style:{opacity:0,animationDelay:"0ms"},children:[g&&u.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/5",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx(Vw,{className:"w-3 h-3 text-[var(--nx-accent)]"}),u.jsx("span",{className:"text-[10px] font-bold text-[var(--nx-accent)]",children:v.title}),u.jsx("span",{className:"text-[9px] text-[var(--nx-text-5)] ml-auto",children:"ahora"})]}),u.jsx("p",{className:"text-[11px] text-[var(--nx-text-3)] leading-relaxed",children:v.text})]}),v.type==="whatsapp"&&u.jsxs("div",{className:"bg-[#005c4b] rounded-2xl rounded-tl-sm p-3",children:[u.jsx("p",{className:"text-[11px] text-white/90 leading-relaxed",children:v.text}),u.jsx("p",{className:"text-[9px] text-white/40 text-right mt-1",children:"10:32 ✓✓"})]}),M&&u.jsxs("div",{className:"bg-gradient-to-r from-[var(--nx-accent)]/20 to-[var(--nx-accent)]/5 border border-[var(--nx-accent)]/30 rounded-2xl p-3",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx(rb,{className:"w-3 h-3 text-[var(--nx-accent)]"}),u.jsx("span",{className:"text-[10px] font-bold text-[var(--nx-accent)]",children:v.title})]}),u.jsx("p",{className:"text-[11px] text-[var(--nx-text)] leading-relaxed",children:v.text})]}),w&&u.jsx("div",{className:"bg-[var(--nx-accent)]/10 border border-[var(--nx-accent)]/20 rounded-2xl p-3 text-center",children:u.jsx("p",{className:"text-[11px] text-[var(--nx-accent)] font-medium",children:v.text})})]},_)})]})]})]})})})]})}function a2(){const[s,e]=vt.useState("calculator");return u.jsxs("section",{id:"por-que-nidux","data-reveal":"scale",className:"relative py-16 md:py-24 snap-start shrink-0 overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 30%, rgba(239,193,51,0.03) 0%, #0B1120 70%)"},children:[u.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center mb-10 md:mb-14",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-bold tracking-[0.2em] uppercase",children:"Descúbralo usted mismo"}),u.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",children:["¿Por qué elegir ",u.jsx("span",{className:"text-[var(--nx-accent)]",children:"Nidux?"})]}),u.jsx("p",{className:"mt-3 text-[var(--nx-text-4)] text-base max-w-lg mx-auto",children:"Interactúe con nuestras herramientas y vea el impacto real en su negocio."})]}),u.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10 md:mb-14",children:t2.map(t=>{const r=t.icon,o=s===t.id;return u.jsxs("button",{onClick:()=>e(t.id),className:`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition ${o?"bg-[var(--nx-accent)] text-black shadow-[0_0_20px_rgba(239,193,51,0.2)]":"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] text-[var(--nx-text-3)] hover:border-[var(--nx-accent)]/40 hover:text-[var(--nx-text)]"}`,children:[u.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})}),u.jsxs("div",{className:"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-3xl p-6 md:p-10 backdrop-blur-sm",children:[s==="calculator"&&u.jsx(n2,{}),s==="builder"&&u.jsx(r2,{}),s==="simulator"&&u.jsx(s2,{})]})]}),u.jsx("style",{children:`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #efc133;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(239,193,51,0.4);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #efc133;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(239,193,51,0.4);
        }
      `})]})}const Gx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKsklEQVR4nO2da3AVVx3Af+fs4+69NwnhFSCQlEJogIAUKKEtSh9CS5mx09Y+RmccFUerftBRZ/zg6De/OM6oo46O2lanWh+dsdpKi60tUkqhLylpAwQoTUjCIySBPO/efR4/LJQE0hAkqdv2/GZ25s7s/549+/+d3fO4M/eARqPRaDQajUaj0Wg+1IixBrazEQE24ExgfT6wKMQAEM/hyVHjzEsoUwJlwMzLqNeHmYNACMSjBY1ZiIASEJuAH1xmxT6sLAVagb7RguR7UxcNyZMx6tMBWkjq0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpAwtJGVoISlDC0kZWkjK0EJShhaSMrSQlKGFpIwPsBCVHOLs5/cHl/JHyv8bAkTWRlZMQrk+8akBCKLhIaUOclIeTInqd4l7BiEaIYlSIMqyyPI8APHJXpQXDIsVjomcUY4ocZLDNCCKUQWPqLMP1eeiCt6IjkQ+88534t5B1KAP6vxAhaycirAMVMFLjkHvcrP0DhMvREqMmgpyn/04waGjeI+9Qnxy+H8Jm0uryKxbhizL4+9qwnv6ddSAf0FRwjax6mtwblkOQOF3zxK1dKEGziVEVpaRu/8W7NWLsZctQOQdlB8Q7m9h8JGt+M83Eja0jijErJ2FtXIecloZ3rOvE+xpP6/xKBQR2U99FGNmOUHjEYKGZsI9reOSKngPhIicTck37yT7ybWoQY9Tb50g2NmEKoTvxMTHunFurcdaeiXmompEzsb9/QvnlaSQU/OUfuc+7JVXETQ2U/jlFtRgERDI8hyZO1dS8rW7MefPAttCWGbyVJkSc1kNZQuqiNo6GPjxYxT/9hLqdHF4MmoqyWysJ7N2GbnPb+D0vd8nPHwS1T+0ccRk716Ltbgad/MuVL/7/hEi8jbGlVPJ3n0DIu8g8g7OXdeDAv+5xnfiorbT+Lv2Ictz2KsXIWwb95HnIT7XxcnpZZhXz8W+vg5hmbiP7yTqHgAlECUZMvdcy6Qf3o8syRIcOIL33B6KT76C6hlEZG3sG5dQ8tU7MGurKf32vVgrFtD39V9DNGQ/AtNAODZySimyvIRJv/o6gz97AvfRneBHnH2sRC6DKMkiHAvM8e2GJ1SIUTUN+4alCMciOtqJnFZOpn4hUVM7/vN7ITzz3ogU/kv7MebNxKmZg3FFBUZtJdH+E+fKurIC+6OLEVIQd5wm3P02FHwQIKfkyd5+HXJSnqi1g8KvtuDvPkx08BiqGCBMA9XrIrIOzvqVmAvmYC+vwVxSTdjQNnLlpcC8qorMxlWEe9sIGlrG8Efhl8/EjbJyJtbK+eQ3bUC5PgM/fYxg90HMmtnYa+ow588YFu5va8TfsQ81UEDOmEz2vrWczYDImNira8nevZa438V9dBvh3jaUHyKn5DEXV5G5+Uy/8pdtuH96gWDnAeKT/ai+IvGpQYLXj1D42WaK/3gZVfQxF8zG2biKETuTMCI+3Y8sy+HcuorcpnXYNy2ZsFQNZcKEGJWTMWtnYy6sJu7uo/j4Lvxd+1BBiFkzC7N2zrDdS+KufqKDR4laOxGOjX3tYkRJJukDJucxrpqNMXcWqmeA4pbXiPtcAER5HqNqOiLngFKJ1D53xNYctZ8mbGon7uxB5JykDiMEKj8gOtZFeKQDYRnYN3wE57aVyOmlE5Stc0yYEPu6hVjL5yNMg6CplehAR5LI7j6MmtmYy+eDHJoMSdDUTtBwOBlNLZmLUTMT4ViYNbOwFlUhhCA6cQrvuT2ogaRDFqU55PTyZHgaxURvd6D8cORKIYiOnyI62YPIWBgzp6I41zecRRU8gv3NFP68laCpFWvpPJw71mDfWHdB7HgzMUIyAuf267HXLEW5HoMPPoEiwt/RSLC3BYII+5oFZDasGPa1qOUk/isHidpPIkpz5L64AVlZhrViPtbKWuKeAQp/3Aq+GCEvAsQYNwwaQ5hA4P78KQq/fYbw7WOYc2dQ8o07sdcvQtjG2K7zPzAhnXrm1hVYS+YmE7hYMen791P23S8QHesEERN39WDX1yJMiffUf0BJQECoCF46QOGhf1L63c+Q+8x68DzMhdWIrE14oA33D9uGXUv1DJwpFzAkZl0V0eEOlBuMULMY44oZGJXTUEWfsLUDgcm7GVKFEPfhbcipZeQ+fRPWioVM+d33kPncJWwWdWmMvxCpsOtrkdPKkhYrVPJKMSSyogzCMBkyZjMY8yoxF80hau5GuclYP2rrwt/VhCr6yLxD5pZVyeipvRP/1QOo/uGz4vhUP1FzB6p3EDEpT+bWlfjb96G83gu6B7N2FtayuciKycT9LsEbzVwss8r18Z7dg7BM8l+7A2P65OTEWJ/GS2R8hZgSq34e9seWInIO/vY3cJ/YieopgmUgK8qwr1uEtbAaWV6KUTmV3JduY/AnTxC1dAEQd/cTNBzB296As6Eeq+5KiGPcv2zDffjZc0PlM6h+j/Dgcdy/vkBu0wayn7iWuLOX4OUDBK8dIu53EY6NWVdN7nPrsFcvgigmbGzGe+pVLtrUYwh2NxN39SOmlZLfdBsiY49r2oYyrkKEZZBZtxxjzjTi7j68F/dSeOBp4t4iwpDIWeXER7uIb/gITkk2adE3X03x0R1Ebd3JmlQMasDD29aAs/4akDJpzU3tBG8cufCiClSvS3HLq9hr6jDmziB71xqM6unIGZNQPYOQy2CvWoBzWz3CsfF3v4W3/U2ilk7G9O7xI+L2brzNr2Avm49dvxCsiZnCjV+pAkSJTWbdCghj3M078P79Jqo3QGBABHF7L4UHt+K/2ITqK+BsXI0sL8WsqyJobEuGq4Aa9Cj+/WVy992ELC8haGxOhrM9xREvrQo+3jMN9IYPkPvcLVhXz8fZUE/unhtBSlAKNegSnThFeOgohd9swdv6JsTivHI84s5eomNdxN39qCELi6oY4u84QM83fkn5j7+CUVVB3NWPKly45nY5jHm48C0WZEBcA6wfMUAKjDlTMK+oIDp8nOJfXyR848gIFRbJjfQMoDyPqKWDuON0Mqs+04+gAD9C+R7xidN42xsJXtg3+s17IVHTcYLX9iNKMsiMhZxSlszSw4jwUDuFh5/Bfehf+Nv2QTG6oAhR4kAcozp7Cd5sIWw4Mnxx0Q+Jj/US9fShCkXCPW8THjxGfLxnLCn8BdD7Iw6NanDMPdNRNpaB+DKjbZsnBSJjAaCCMHkFXbB8fQZDIiwj6RyjGBVEw2OFSM5LmSTp/POj1cG2kmfflAgpk5YeRuDHqDCG6F3WQAyJMOSQa4YjTzss49yyfjRKeUNQUAe0zuHJgdHixvdFGKtzrfxinL2Zd0OpUSZ4F6lD0efsj1MKkXxWcNH2d7E6nSWIkgYyAUz87yH/N4ZOHido0jABfIB/wn1/ooWkDC0kZWgh7x2SMeR7zJ36mf3AHwA2X0alPrQI1Fsk23ePyqWMsmJggGQLas2lc9G91DUajUaj0Wg0Go1Go+G/A+k8TIiUWV4AAAAASUVORK5CYII=",Wx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAANlElEQVR4nO2aa4xd11WAv7XPOfcx71f8iD21p7HrevwoTdRHqJoUCUpCaJL2D9CGKAJE+QGIIpE+VESAgBo1EgktiYFSihAIIgdolYRGDYkgSUshNE0aO7YnGduxZ+wZ2+OZO/fOfZxz9uLHOffec+884hb+FPYnjXzm3OW119prr73XXnfA4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwdCLNh5paTHz5VwOd76l5St6GiGYk1aQPJvPSkghlBVO1Kql66ZK3a5uh0qVbU9lu3evJr2dLU96sYct68oDtAwQrMaXqKB7e2nJN/Vm7s/+qZGQ6x4rDkN7ePoJ87n7xjO3QZHXZNCrPz9mZ+8dyWsdY7QwIqUPNAVrOrBOQ5s8q+XUC0po0MvIbBASTcfYHkW/Krh0QpUBsLPMLee6+v0q50ZPRlfWR1Xo1Oy+ZeetajHEcc/cnP8n7P3CjJyYJiN822YCtEJdewIsj1F/BdhgrXT8bTXBWvjnJG00YGdms7g1W/Jq2fD/yG9kCJipgjFCpFDly1FKuDXTp6n5u+qiIZBZhK1iG7rmyaiktL4O0dbQComoIYvAiC165I+ipACqgqQGSGpCdjvZ7EFVUBMVmTO6Uzw6RyGvmvbY+b7rRngZtun5ltmwg37Ys8ywgXhWjQhAXujSuDkD3aJ1KNQ1M1rNkjFiVuGtRtAISi2AkwhACYNZZ+HHqSMu0dBFYWP0exUpizyr59H1rk1KwJEHvft/KeO0+NbrkU9k4jUwrP9P3zYzP2tJCOqfXGsFYwagga012xor2Z0mGq2q66CX5XLPnioBIEhCUWG3HTtTOkJalsva465mUvkgSUlA8TEt/nKx8BFqHoqLJVCIISvawjTGarF2LaZ1h7YlSLBZRrz2BCoLtykSw4mE0zQ1JNHav77VcEcDq+puZkkwmmljfqS/NAAW1aWYQrx7FeCCSLNSmWEorILY5Nc2ArHVO07ljd3+8sFLg5MxmglgwJmbnjssM5MpcrvcyPTOAWI+iqbJ9W4XeYp3Y5nltZohqNQCUiW0lBntDps8HlJZ7EBuAWCLPEgv0+3XGBhucubAZkQhFKaJsvqpM33CVQlgFIMLn9flBlku9iKmxdaTO+ECJzErpdGZtV9dGhO3j4/T39aM2YnbmDCsrK8SxsnXrZkZGRlBVzp49S71eZ+KtO1cF7cLFi/j5HGfPnl2lvr1lYfEFMGsEZB0LO3ZPNXznxR4+9UeXUPHwPI/P/GYPt71b+MazPXz+y0s01GdbX8TnPzvGvh0zXFoZ5NfuXWR+sQffE37r5y233+rzx4cjnnmuhsR1UJ/Yr2N9mNwW8zM3jXPfoQWEGrGJ8dRjbNDy/uv7+MTPGYq5KgvLm/jcFxd45Yhi/Bq3/rjHZ+/qxZjyFc3+egFRlFtu+Snu+f3fo5Avglimjh3nrrvu4vLiIvf+wb28573vwVrlTw8d4utPPsnfPfIIvu936Pnyl/6CmXOzHD58GJFki2tiugeVbmtk9a/Z+il7YFuF0PpU4wEqtS28fLxOWQxPf7tCJRqgGg6xEubxTQEBTp0POL+UIw76WQ59vvNqkYYtsnfUMLkrQGw/USNgUzHHO3cr+3YKakKqVmmo5QM/OsA1b/eZvjTG336jyIvHC8RGeeVkg2MzUM0VWbYjvDptqFmvaebGbHA1ieOY2z58O0NDQ0xNneD8+Tn2HTzA2/bsYXBggD17304jTM7gAwcPsnj5MocefpjHH3ucIAh4bWqKhx96mKeeeoqv/dNXCRsNDIKRdhhaT62JTg1qHrwb3Boyz4KKYAGrAcNF6KHK2Tcs4UovJ6Yjcp5HX07xAoN4Afg+r85VwfpMjIZs7o147VxMqQwf/9keHvj0KKODK9gg5r3XGr5yzyD3/EqOglkAhf68z0dvstz5kR7yfo1QSiyseNRNgaNHDYulAjuvVpAKZ+Y8ytUgsU/Wnu9WHKRdpHQTBB5B4GNRvvmt53nlle+hVskFAaOjowyPjPDcs88xPT3Nrt27KJVKPPQnD/HEE48jwImpKQ4dOsRLL79MZaWSZEbXmb0qQ5rYjNB6N422M2kwRMEEjI159A1WOX3Ocnq2SKnkMzrsUShaQiJCYkL1eO10RBhFjG/zGRyAuYWYmVkBf5mAS1gT0vAgMnVyuoCnZYQYUYOqT9n6XFxqQBwT1DwG8wa1OY6cKIMWuHZ3LwM5qKzkmJkXrLTLzm6fsreYzivzam9VY8CyVFpifn6ORqPBnj17CDyf5559lqNHj7Dpqk0Mp+dJq2vRrEI6Bu2sINYNiMmWjVxBpmdqybHNMHmgjzMLPs+8lKMe+ex4iwemhiXEaoNG3WPqaAwGtu80jGyyVCs+L/1nemNQm5bLkl58BTS9a6hQWSnwhw80+PMvKZ4art2v7N9dJqwIJ+cFwXLgGstYX45KNeDIdJCWLevTXbZv5KyIx32fu4+bbr6ZF154gQPvOAjAB3/yJ5jcN0mxp8juXbvwjMGkVZWqpjciEDFpAbVOhnTcc6VzW+ruAmW32e4tV4gp+nVuPJAnqg7wj8+ERBqyb9zgR3EyvvFYrheYnvXwPBgf7mXzYA8VC08fWSSMLaJJ60asouqlAbetQ85aS9iwVOsBkRY5NxezVAt4Y84wu1CkEIT0bs/TO2IIVfneVNx2fo3Vn/Wx299uqeZN/I6P3cGDDz7Avsm9/Mg79vPqS8/z9Nfv5R8e+13mL5zkXdddh8FgkHYJr6C6/p6zeslsWPNdCTEelmsmBM+LmJldxg8i3rKtkLR5JKneL100LJYUawv8y7+WmXrdQyXH+UsxtbKPiGBEEDEgJt3bk3aHIBhT4Zd/Kc9NN8eosVy8XOD0mRxzF3pphAZB+OfHGpyf84jVMjPjY6NiGpM3d3IjCVXFWsvkvkluvOFGrt6+DVE4/Fef4c6b3uCGiX/n8J/9Npu3bCbGZFb7m+0zmbL3fwu1ljiKGN1apti3QrTST1+fZfuOpGxMth3LqdcVtXmsl+c/TlRRfMIoT2mxwMVzRca2ps1Na5MJoPNq2Zs37B1bYaDf59EnFxFbpNEY5uixRRq2iF9X/uubJaqSI5/PMT9/mWp5gNzIMhobZNWFjSsq9ZsppgrGeISNOpXlSzz/td/gFz4yw5bBC+wcDNjU9wx/+ehLSFyjeTtHDIJJFtk6+J3DtG+N2aTq/u/S9WwFYjFJOwSLijLUbxkfNpyoRExu6WFTnxJaoRgbgtjnu6+HhFLgp39MuOODeU7NhvzOg0q1NsixWeF9W5ap+YI1OXxCjCbbmHoW9euoifCjIQKpInEOPxYa9QrfPhmBFnnn7hKf/njIv70YcOjv68xVc5yasxzsM1hjf6CVqGopl0uIKLd9+Da01uCRL36Kj73vW1z/rhr53CLWgmrIxJZL/PpHIyh4lEvzRFGDVl9rA9YNVba5uHFfFDxryWmELzWMaWCMJWdy7JmIKZpL7NqXJw7qmLiOiSMaNubUmSoFs8LBHVX2v3WJ6/bUuCp3kZzWOX6qQpgTfA0psEghtkkpbgT1GvheDWOqqFehxxiGWCZgiVPnQ87Nlhmx8+zeVOZtE3V27RXywRJeGHP69DJoqmu9pvAGiMATTzxOvV5jeHiIR//6AbaMPc+7ry9jTJ1GOEQjGiKKhlA7wHC/cvedA1y3e4bHvvqVpDpT3fAMaZmwohWTX35szhz/xTGk3HELzzYOO2hmkwhqlMulAkfeGGEkF7J/R53pc5bZy/1sHW+wZTDk1WMBGkfs3Z3n9dMRZZtj99U1hgdXCEPhxPEeVmyesYEaO8brvHJslKpGjAxWmByvEfvKwoLP0dlBvAj2TyxBvsCxqSIaWfoGGiwtB8QasnWkwq7tMaVGLydeyxPVPbaOV5gYLWON4r3Jdq7pheTMhWFu/4RluTaQdDEQ9kxOkgsCLp75Ltu3lPCkjrF+cuY1m4mirWqtHPVwcr7I4NAE0ydPtQoTtZYHv/AFPnTrhzwR6ay2K5mAiCm/eZ3bZbymRaUVQWJJG36AeGCSMjYRTvdgaTfErUpzZ85YJKAmOcgFRBUrgtHmdpp+vyDJs0kb2c2y30Cmskl6QbERfKvt78wyPmQXXbN0MN0BwaRfQSR4mrQ729fjpqbM3DRTURTbPAU3CEhntzedr1V1+JulcqbraVRbTbzkXdylqx2IJmbNfVVB4g5bTOqcaeptfRa3xlvrDiGpfl/bAV+/X5XpfGcnpak9s2ba395o67dVZA/wVX2p1WTONqXZKP+fl74/fHT0U1v+p01/Scr1jgS+QvQKgpClFZBilH6PYRto2qvvbOf+32Etd1afkYnz1osIjSHSNEMl2aCTpNugE5n291Rt65sYs9Z21tU6aQXEkEd1G42+G9KA2Faqfx/HyQ81HeW8RqiJMfEgBw9ELNd6EVUMluaXXRuioGKSgofmCZMEoLmJxXHM0PBQx8Dt5FQ1aOVv0FND7T+R+X+MBSSPxjnq0eZMH2yjrOhm47BpbCn0FDFibhGz5t9HORwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDv4bK9FsVVwm/p0AAAAASUVORK5CYII=",Xx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPEUlEQVR4nO2deZRU1Z3HP/dttXX1RoMsDSKLbN02gjGigoMLbuAoYoxOcEejJxqSOOOoo8mYaJJxxmXmTBhPEnJIJBqiCSfGhREVl5FRkU0QBYQGWzZ7r67tbXf+eG01bdNsVVS/Sd7nnD5QXe/+3u33rXvv7/5+v/cKAgICAgICAgICAgICAgIC/IPo6w4cjPpYNYAGKJ0/+eB2/tjDkw15mjp2+FaQTjEqgeuA7wHhPE26wBLgcWCzX0XxpSCdYoSBe4FvAeUFMm0DTwLfBtr9KIrvBKmPVStANTAPuJP8R8aXcYGFwKN4I8UusP280Pq6AwegBLgGmI8nhglsAFJ52jWAsUAp3jRo443A5jztFhQ/jpDBwCt4Fw9gH3AFsC1P01XAAuC0ztftQO3wZMPOPO0WFD+OEOjuUdnAvuHJhrwm/PpYtQlk8upVEcjXlQwoMIEgPqMgU1anm2rgLZj5Ukn3fmlAeX2suipPu1VfsqsAlfWx6nydBfDWI7MQbnSh1hANmATMKoCtEjxRviAKXA80FsDusP1eG3iudWuedgGeA1bhrXd5UShBFGAacE+B7O1PCXDzMbBrALcVyFYbsLoQhgq5hvw1r0cF+9v/mi+iLwkE8RmBID4jEMRnBIL4jEAQnxEI4jMCQXxGIIjPCATxGYEgPiMQxGcULYUrwmGEriEtC5k1QcrDbxsyQNdBSmQq7bXVNNR+FShlXgpGmhb2zgZwXYRhoFSUI8IhnM92I+0DR8WFpnnHxWPIRBK3tQ1pWd57sShC8T6v0rKQpgWum+dVODRFEUREI1T+2w8xasfjNDXTet9DmBs2gXtoUZR4nMrHH0IfNQKnsYmWe3+EtWkz2sABlNw0l+jF5wFg1zfQOG8+bmsres1Y4vOuwZhUR/vD/0HymT8d2PaAKsq+cyuhaaeTeeV1Er9cjP3JdkS8hAFPPoHSrwKAzBtv0/Gr32JtybfO4tAURxBVRT9xFMbEWqRlE7v6Cpx/fwJn156DN1RVQlNOITz9TNT+VTi7dqPES7z3DB1tyCD0cWO815oGmgqAEouhDT8eY8JY4rfdiL17L+Y7q5C2071fuo42rBpjwlisj7ciwiHv95qGXjsOdUB/AOyGXYhotHAX5CAUfQ0Rukb8uqsw6moOeaw2ZBDRSy5E7X/02dvQ5Doqf/p99AnjQPiu6qkHfbKoi5IY8XnXICKR3g/SVKKXXUxk5vn5nUxV0WvG0W/Bv2KMH+N7UfrMyzIm1hI+87Re31dKSgifPRW1qrLXYw4XoWnoY0YRu3oO2rDqvO0dS/pMEKW8jJKb5iIiPUt3haahjz+R0KS6gp1PhEJEZ19MbPZMhGEUzG6h6TNBhKETnjaF8N+c2eM9paof5ff/A0pF/kXv9rZ63GavsEQbWk3pd28jfPZUz5X2IUUXxFy11vOuHAclFiV68Qy0oUNy74tYjOicSwh95WScxmbs7TuQ1tFX12TfXU3rA/+Cs3sv4I3Mih/dS3j61AOOzr6m6IJk135A6rmXcJqaQVEInzONyEXnInTPA9eqB1F6+zyEYZB5/X9ILX0RbOuoz+c2tZD83R9p/fEj3qZSCPSxo6l89EGMGv95Xn0yZaWWPo9d7xWda0OHEJ4+FW3UCBCC8LlnoQ0ZhMxkyCx/HWvz1rzP5yY6SC19kfTyFchsNnfe+K035Hb6fqFPBLG27SC5+Jnc6/C00ym5eg6hUydRctXlSMvGfH8dqT+/dEQhloPhNrfQ+sDDJH/7bC6UEvrqZEJnfLUg9gtFny3qmTdXYm/f4XWiNE74rDMo/dY8tOHDkO3tdCz+PW5LW0HPaX28lY5FT2Fv2wHOsY9LHQ19Joi9o4HWBx/JvTbqJhC95AKEoZNa+gLJ3y0t/EmlJPv+Oppunu9NhUUIFh4pfSaINE1vlGyr936hqqCqOJ830b5gIdI0j9GJJebaDbTc80PsTs/LT/RdPkRK3M+bSD3/MjLjLbQ4Dqk/Po+19dhGVaVtk3ljJe2P/Rduo69uMSxSPkRKZDKJ25ZApjO5qUKaJullr2JMrME4qQZn9x6SzzwH+0VlpWniticQpo2b6OiK2LoSaVqePfBE7XQApOMgs1lkOpPLb/ToUjZLcslSlHgJpfO/CabZNYVJiUymcDuSXbaLNL0VRRBpWaSeW0Z2/YeYK99DJrvukTHXrCexYCHGqZMx31+HvW17t7bW5k/oWPQ0GAayrR23c5qRyRTmmvWIqLe5c3bvy7m0bmMT2bffxW1pwfzgw1775TY107HoKZSKMuwdDbjtCc92Nkty6QsopXGvj+s24DS3FO6CHISC7IrqY9UG8F3gx4Ww9/+Qu4FHhicb8l74gpy6zwgE8RmBID4jEMRn9N2THIRAqKpXnCAl0rG7ubsHRVG8KK2Uh3RHRchAKS8HJG5Ty4FLgoQ4eNRXyoLF1A5FcQURAm3EcIy6CeijRqAO6O+5rY6Dm8rgNjZibdpC6s/LejYNhwidOhlj0kmoVf1A18CysXc2YK7dgLl+IzKT6XG++C3XEZ15PtJxSCz4FemXVyDT6f3sholePgtjwlh6w1z7AZkVb+Hsy/fO7ENTPEE0DaN2HKW33oAxsRZ1WDVKSazr/c7NWHrZKz0EUSoriF15KdFZF2CcNMELmQsBrouz73OsDzeTfPoPdCxZCvuNAKWinNiVl3kVLlLiNOzC2rQZa8snuWNEyCA6cwbRWRf02vXkkqWY6zf+ZQminziS+LxriM65xMtp2zZ2/U6cxmYQAiUWQR0yuGftlGFQcu3Xid90DdrQwUjbxtywCadhF2r1YIzxY1DPPg6lohynrY308y93tQ2FuvIdQqCUlyH2/xB0IrOml7zqBZk1/7J26mgqsUsvJvb12QjDwNm9l9YHHib9368hbQsQCEVBxCI9wuLhs06n9PabUfv3w21rp/3RBXQsehppmoiSGJWPP0Rk+jSMuglUPHAP1qYtuYCls3cf6ReWE//m9ch0mvSyV7E+3tLNvpvooPl799F630O9dt9NppCJRKGvygEpTuWibqDXjM1VeySf/gPp5a/j7N3X/cBGui2u6uCBRGZM90qBhCC7eh2Jn/86F+Ig0UHbg4+ijzgB/cSRaMOqiZwzjY5PP/NiWK5L608fo2PxEhAK1pZtudhXDtfFbWrGbTqGF+AIKM4IUUS39UKpqkSJRejhU0m6eTP62NEYk+o8rwrIvrO6Swy8Y811GzA3foR2fDUiEsaYWIN6XH/shl2Al1M3m4oThyoExdmHOK63VnQSmz2L6OxZaMOqEYbeazNt8MBuhW1fZBi7ISXWx1tyIXy1ejDqkEGF63uRKU6018ySXvYqocl1aCNPQMSilP3jfKJ/eyGZ194i+7+ryK5ag7NnvylMCJT+Vd0qF3tMcZ24jc05Z0CtrMzVc2knDEOtrMBNprA+2nLAtr0iBEq8BH3MaGQ6jf3pZ7ht7Udm4ygozghxJZk3V5JYuDiXJxeGjlFXQ3zeXMrunk/ZXd/GqB3XNWKE8IrZtK7PTC6R9SVkKt3lBamKt+EEopfNpOzu+cRvmutlJI8ERaCNHkH5fXcSv+1G9DGjjqz9UVK00Imzaw+JBQvZ97XrSD75e9wWr5pQxGKeMDd+gwFLFxO7crbXQEpv577/Drm33bJjd70nJbLz/9rggYTPnEL4rNNRj+t/RP0VoRDG2NGEz56KUTcBpbQ45UJFjWVJ0yL73lqa7/oB+752Pcmnnu3aXSsK6oAqSu+4GW3E8bm7pWS2K8XQ63pjhEDxvDNp2dBZ6Wht3Y40LURJCaGJtUfUVyUeRx/v7d6dvZ/jtBbiOWeHcd6inGV/bBu3rZ3se2tovvN+9s25no7fLMFpbAIhUIcOIX7jNwBwWlq9CsdO1IHHHdCkOnAAQvPEclvbcnN9ZsVbuC0tqFX9iF11OSJ6kNsfvoR+4kiiM2cgTRNzzXrs7cV5mmzfRXttB7etncyKt2h/9Gdklr8BeKEMo3Y8AM6efTif7c410UcO72lHVTHGjs7d/eTs2oOzx0vzWh9vxVy/EREJE5ryFUKnnJwrWT0YIhYleulFaCNPwNr8Cdl3V+M2FacYwhfhd7ct0ZWzdiVuwisusDZuIvve6tz6ED7rDJTysm5tQ6dNxphchwiHkJkM5vtrsb8QUUoSv/gN9rZ61OP6U/6Du4hdcSlC793V1keNoOKBe4j93RxkMkXHwsVk33638H90LxRHECEwTprg7boHDuj6lAqBNnQI0UsvIjx1CgAyk8ldAKepBfO9tbiJDgD0MaMomXslIuZtMpV+FcRvnOst2ELgNrWQXbUWnK4tp7luA4knFuE0NROadBKld9xC/JZrMU6u7ap+V1UvKnDReZR//++JXX05QtfJrl5H+uXXcucvBsUJnWgakYvOI3LBOdjbd3i3H6fSIECrHoJeMw59xHAA7K3bSb3QGSB0HDLvrMLa+BHGKRNRysuI33It6tAh2Dt2op9wPJEZ0xGRCLIjSfrlFd0iueCNvuQzf0JEI5TecQt6zVhKb7+Z8HnTO+8daUFEo6iDBqCPHOFNl5pK5k2vbsveUdxvUChK1YmIRum/6GdELjyn65dfuKn7xa4yb7xN6/0/IbtqTbf22vFDqXjwn4ic7118XBfpON5+Q1HAdWlfsJDWf34YmTrwY3iFrhOZMZ34bTd4o1FRuhJP+yWo3PYEHb98kvb//AXO3s8PNzFVsKqTI9wtHZj5RqkKTAHOPeABrovT1Izb1IwwDISmegkm18Wp/5Tsynfp+PmvafvJ41jb6ntcBDeRILP8dewdn6LEoohQCKGqOI1NpJe9StuDj3hV7QeLyLoudv1O0i+9grV1O2Sz3pSlKLjNXv1W6tnnaP7OPaReXI7b2nYkWcJXgJWPWe2HmfLsnaLVZQldA133FlRFya0j0rTAdjqflnDwJzwIw+jcvaudCSrppWSzpvfv4VxAIRC67u1pNK1bKlhaNjKbOawHGnyJgo2QoiWovtiwSXpPBB3ShmnmX4QtZWHsHCN84fYGdBEI4jMCQXxGIIjPCATxGYEgPiMQxGcEgviMQBCfUUhBfP8dgceQgm37CxXLAi8M489nHh17THz+teABAQEBAQEBAQEBAQEBAQFHw/8BPLraqUirU7oAAAAASUVORK5CYII=",Yx="/niduxone/assets/mugui-C3aQOAQL.png",qx="/niduxone/assets/pequeno-Cn4UQbOv.png",Kx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHRElEQVR4nO3Ze0xUVx7A8e+9d2ZAGIb3aAVfgI8CvkVFK4ui1Whta1frKkrxQbdqq65sfT+wEjRatWvR0tp2uzHZR2qi20d0242ptFjxUXeV1biCrlGRN1Rbs53X3T8s7Aoycyfd1DT+PgmEzLm/O79zfufMOXcAIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC/GQpzX90SUhWgeUPMJeHkqaqd1SFXZcvngXA1Kp984+f0kOvDigEPADqg81FtGa4IJqqEtP5Ebp1jcVqDTYUY0UhsNVriqJgj47CbDZ7jQ0ICMAWEoKqtnyqYtI0IiMjMJlaL+z22UKsqKr/8y4iPIzuXbtgj45C8zNeAWy2EL/fEwwWxGIxM3P6MxTt3klR4U4KNq4lNuYRrzE6OpPdGv086n83KsBisVC4cxs9E+K8xj82Yji5SxZhs9lacpg4PoM1K5YRGmI1kjYA0555iqRHexm+HiCxT09e21bAG4U72LPrVcZlpPlVVHtUJFkzp/tdSDBYkLQRqeTMncPs53KYMjWTY1+WMnjgAHQvMTpgQcEE6Pq9LZGR4T5neXhYKN27dcWkmQgMMJOTPYsXcuaRX7CV+sYmI2nTyR5F1qwZZGX+4vuMfLMGB/F20eu8894+np46k6W5K+ibnExwcJCheIA5z2WyeNEv6dzJbjimmaGCxMR0prziMk23bvNvh4M/7j/IBx8fvmfmt6agUKK6uKQYG4j2BAaYmZ89mwnjx7FoaS4NTbcMx2bOeJabN6tITkokvkc3QzEhwVYsZgtl5y/wncPJ9cpqtr+2m9u3vzEUHxEextSpUygrO8+E8WNRFG+j1JahghSXHCMhIY5lLy0gOioSHdB1XwOtExPQgXCTGT9zamE2m8hd8iJJSYnkLFzKlavXDcd2tEczNmMMu/a8ybEvS8nKnNF6qd5XbUMDRz4rZkt+HiOHp6BpKh4DcXB3TObMmkHpiVOsf6WAOdlZ2KOjDOcMBgvyr6vXWLTk1/To0Y19v32LtSuWYfOxsXvcbtJffpE+E8YY/LBoKynxUQYPGsBvdhVRVV3jV+zUKU9yqfwSZ8vOc+To5wwZMojYWO/7HoDL5aJg6w7OnStjzcpc3ircycD+yegGehERFsq0aVMoevMdyi5c5Mb1SjLSR/m1SgwVRNd1zv3jAqs3bCJvUwG9eibw/PxsLBYvJyVdp1PHaMJCQw0n09qNG5VUXL7Cghfm0iEwwHCcSdN4fOxojh8/SVBgIDU1ddTV1fPkExMNxTd9fYs9e99j0ZKXOfXVGVbkLiWpT2+vMTqQkjKYpsYm6uobiI6M5NDhT5g/N4ugDh0M5+6zIIqiEB4ehqqq3L79LcdPnGbFmg0MSxlCTGdvM07B7fJgtQbfs9eoiopJ03C73D6Tq62ro/CNvZhMJvLWrSQqMsJAlyApsTe2EBsZo9PJW7eKXy1eSIjVSnraKMxm74eJwMAAQm02XC4XV65e4+1391Hf0MCokale90xbiJXxY8fwzbd3WLd6ORvXryI1dRhhYWEMHzrEUN7Q9km9DbPZzOZX1rH33d9x+szdx3vdo+N0OHA52x9UTdO4XllJQlwcmqbhct+9tld8DwIDA2hoaDCQnsLVazfYvHU7W/I3snr5MlauzcPhdLXfIVVlwfPzeH13EQc/Otzy5ZA9OortWzbROyGesgsX241PfyyV9PQ01mzIx+324NF1PB4PDofTa6YpgwYQH9ed6bPm4HR57r6ow7zsTDJGp1H8RQlOA5PQ5wpxuVxUVFxh/erlDB0ykNShg9m0YTUlx0uprLrZfqCi8MFHh7Dbo1iQk82oEcOYNGEc+RvX8f6BP1NV431P0P/n9/XKavLyt9CtayyZ03+OSdPajevaJZYB/ftRevoMHt2Dx3P3p6q6hk/+eoScedlenykuVVxh+NAUnnpiIv379WX2zGexhVg5WvxFu7tIQICFMT8bxVdn/s53DlfLe3p0D7//03769O5J3+REr/1t1tKz0Ai7AmxofYGu65SeOEVVdTWLX1rI8GFDOXDwQ/7w/gHcbu8Vr62t58hnxcTHdWfy5El06minYOsOPj70qc8DT3BQEE6Hg7+dK8PhcNDQ2ERxyTEmPD6W6to6ampq7xuXnjaSf5aXc/TzkjZt1dU1JCX24eTJUzhd919ljU1f85dPjzA7czpPT56Ew+lk87adXLvR/uSLjelMfFx39h/4kIbGxnvanE4XJk1D00yUl1fQ+sipKsodReHVxvpqHdp+2+t1hJtPC76PvPen67p/53Jdb9MBn/dozq2da/zJQVNU3LrHYKre7ts8Xm3bNVWtUxU6Xr541gMG9pDWb/pD+PuQdL9B9XkPH+3+5GC0GL7v+38+9oofT+sVsuqBZPFwu8P3/wsRQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHET9x/ABGhS3mQ8ucCAAAAAElFTkSuQmCC",Qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKMElEQVR4nO3YfWwc9ZnA8e/zm9m1443cCO9OcyjKBXA2jnf7evkDECUkJME4Lg209EWoVaW7U1tKxb1FbYR6EaoiBH0Tl57UN7XpC2+loaSsA4E0paW0HFBEYe2kS+qzcsiXzDppatmOsXfnuT9mNrd+S3onFfjj+Ugre2af+f2eZ34zv/ntgDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYY8+eTuTs6NqxuQyQPTJ48VKk09mc3rVmukS4n0uOS8toB51r8SlgqRwAdm/NpwXUCpyeHRkeWXNSxSkTa5vWojIwePHIaIHfN2nbxXRGRZRrpiDgph6VybaFEs5u72oEVs3Y6mXIpb7iRQ0Pu2u4LgG7xXLvWouM4KVf3D0zPbTPX070MtCi+1671aEScHAn7B6aa+rwYcMDQ6BNHokw+YMlfX5AHask+Oq5ec6E4WbZAyiOjTxw5nd3ctRRYOTdvSXnD1Tl5k3Q2i7ckvdRrSx/w2tJP53oLQVxgwbnW1H1eW/opb2nLCtfi/7tr8X+n9ah49riW9BWuxR9wae/vxHPOa/G/51r8gQU+NwAEfYVOSXlPIPIUsE+cPAd8Nbupq3WB4nAtfs+8tlLeAMrdHZvWtMVtFgm2Fq4Szz0tnnsK6BffPSdO7gu2FjsbbWXyAbnewkbx3VPie3Gc536LyAPB1uLFTX3udS3+PtfipwE0vggPuBb/Hq/F95OYXYvUeV3y/ZUL5S2wO+grpufW6c+vnBDVWxG5T4R/zOSDHeJJD3Al8PWwVH4+2Fo4gMgmcbIJeCnoKwK8D6hpLTrY1No0qt9WZfzsHuWlzOocINuBIvBp4AWU7QifdK3+XuDJBcakcTXdD/wOcKhuQORmrzX1G+BelMsR2QeMo/olRA6r6gYR+SDCyo6N+c0nD1VOZ1bn1iHyE2AS5SsIA0lbHwD25a5Z+57qgcOnF7owFhGh+jVVppr2lWdFKA8hPBfnzdUINwPPta3J7pn8/ejZsHkDEpYGeMu6lT9uWd7+IURuaevMHQB2A2H9zMxOAETuB3Yg8r5MPvhK/cxM1luS+hgwiMgzTc1N4/SO6iODrzb3EQ8IK4FpYBh4KZqu/T3K3aBHz1P8vrBUvh8g6CvuB34LrA+2Fn6EcDvgtB5dX3108FmATD7Yk1mdG0LkX73W1HXA94HbktpvDPvLv0ra+g7KzxDWS8p7O/DL8+TRLELk9mp/+dRiARpFj1QfHdyT9HUIeBrYAOxpjpt/hwB/ev5YLddb2C5OXhYnPwAuBG46+bOzQ/kq8BiwbcmqjhUu7RWBZSjfrD42GGXyQWMqbNUZ/UJ2S9c48bz7xdHHj4xMvFIls+at3wKuAh4BjrgWv4zqPYqE5yxd9cbctYUCKMDlxHfOPpAVwKXACxrp843wiUoYtV3UsVdS3udwclnQV7wX6EYZmhk782wjLiyVSU7OrBOU1P6NoK9YI57is8DxOTFOa9Gd2S1d8R0SRbtGD1ZmxYiT63PXFi6Ja+CK5On9YPPdAYsMSFL4UZCvA/8AHKpPvPZQc/K53sIT4uTDLu1dhbIBYRz4xpxWfPG96yQ+adPAt4ARAI30YSJ9j/huI/F0tw2RGwQ+scBJaapMNonHlSDtyZ7btBYdFM+tTOqZdilv9sPSczXiHBpztg86WZ+YnvdQXcBSoLdpe/5CBZz47gbBxe1F0W7mDprIRvG4HIgXAKr/HNV1/7yGFsui+uggqP482bzn5M9fmbVKEScPE98ptyJsBF5UZGhOM5OgVwsUBN4FVACCvmJanHxYfLc8LJXvAtajXANMAbc23WEL2S5Q0Ei/luQ/VH1scBrhVeJ5+93RdL27EbzssotAdRPQivIfqNaAo4h0tv5V+9m4TD4g19N9Q3bL2t3ZzV1XNfU3BLxLoEA9ehvJBTVHDbgsqbOAzDsPaKS3CRRQ/bc4bzl2Zmj0/Kus2aRxwLwDBT0N/BRYB6xEuafa//IC7cvFCnmFPHBpsLW4PJqaAeVW4HtBX3ELkEVoJb6CR0DPdeWOnSiVQ3GyCzgG3JHdvKY9LJWngDuApS7t7Qv6ituCvmI+3ZH5F/HcLmBIa/WHw/4BNNKvAmlE9jbiMvngc+K777q0t82l/SNN/dWA0ROlcjj+h9Ew2V5I59k6RS4N+orBrG9Vx06UyqEqO4EQ4Y5MPpi3yjrPgBAtlsCJ0gCoPpLEhKA/XCAsDTwI/KLp0zt68PfTCLclbfcDA8TPkuMo2ycq1XPlEwGEpfIp4F5glWtJfSDVkUEj/Snxqu0CYC/wMnAn8VV+Y/XA4RBg5tTk4yifIp4+GnG7iK/+904cPXG8qb9Fc2jikvyb69wy5xgAqvsHxlHdA3SifDyTnz1uiz9DAIRfAu9g4dsURA4RT0VTYf/AeNM3EfC3xPPvLKp6DGCiEh5s68y9TZysI/7BdwzVZ//4zPBiK5WDwN8Qr8oa7iQ+oWMA1f0DtUw++Hbb6tx+EVkHBEAlmqm/OHrg8FjjoNPP/GfUtjr4ztJ88BjCOmA5cCR6rfbin174r7GZkxON0I8Qn+zGdB0B7wWm9X8v1J3A3Qvkeyz5+6sk78Y2quwS4QGNorEFjjPGLGreu6w3Qq6n+wqE9ze2tR49TcQhSbntgENkWpw8MF4Jy5OVkLduLaDwT4gMh6XyQwDZnrVvF2Sb+O6usFSeyl2z9hagVD1weDjoLVyo8GkRApRfRPXofnHyTuCmpjQerD46+OvXt/L5zvdQf12I794pnrtOPPffyWcMJxeI524Wz/niZDnQn7mo40KA+kx9BSLbgc/nertbAZzvrRLf7US5PegrIinvekl5Qa6nux0ne8VJNyKv4GSHOOkSz3WL565o6nPqXDm+Xt4UA5IYBwaBQfFc45f2FPBl4genn7xlxqW8HqAEnBbn1jW1MYLwweR3BxAPdvLvTWGpfJfWovXiucGm9k8Bp2pjU8N/qcL+L869ynp9rQR2EK9kPkM8QO3Ey+YAeLJ+ZuZYrqd7GSKfQRkCliJ8vmNDfmvSxpDWo93iubuBxlvjduJV2BTA5NDoKZQosyaA+LXI5iTuceLBeUO9mQbkxYnKiQ2NjSWrsp3Eg/Ip4HYgrE9MT3kdmV6gDeEl4l/+H/My6XzjOHHyEKrrEbkZANUXEOkCbgn6ik8CnwW+0Oiz8b/f3jr5ly7wz/GmmLI00lNEemyiUqXxIdJpjfSoRnpcI92ukV7uv6W1G/QyjfTLYam887UT4ztQ7kW1V1XHUB0O+wciRD6L6o9RnfrjM8MjqH4C1Y9qXR9AmUT1OJGOEWkXkd6XfHre6PMAb5JVVvLuyk1UwrNvBdouyTrxXBqYUgWJX600XhIyUQmjpmMbzrbRdknWF89FTXFp4hlhaqISNt5IN88QtUasMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjzP/L/wDmKdfxtb6J0AAAAABJRU5ErkJggg==",ci=({to:s,label:e=""})=>u.jsx("div",{className:"flex justify-center mt-12 md:mt-16",children:u.jsxs("button",{onClick:()=>{var t;return(t=document.getElementById(s))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"group flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity",children:[e&&u.jsx("span",{className:"text-[10px] tracking-[0.15em] uppercase text-[var(--nx-text-4)] group-hover:text-[var(--nx-accent)] transition-colors",children:e}),u.jsx("div",{className:"w-8 h-8 rounded-full border border-[var(--nx-border)] group-hover:border-[#efc133]/50 flex items-center justify-center transition-all group-hover:shadow-[0_0_15px_rgba(239,193,51,0.15)]",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-[var(--nx-text-3)] group-hover:text-[var(--nx-accent)] transition-colors",children:u.jsx("path",{d:"M6 2v8m0 0l3-3m-3 3L3 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),Ud=()=>u.jsx("div",{className:"w-5 h-5 rounded-full bg-[#efc133] flex items-center justify-center shrink-0",children:u.jsx(N0,{className:"w-3.5 h-3.5 text-black"})}),o2=({className:s="w-5 h-5"})=>u.jsx("svg",{className:s,viewBox:"0 0 20 20",fill:"none",children:u.jsx("path",{d:"M4 10h12m0 0l-4-4m4 4l-4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),jn=o2,l2=()=>u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),c2=()=>u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),u2=({className:s=""})=>u.jsx("div",{className:`pointer-events-none ${s}`,children:u.jsx("div",{className:"w-[360px] h-[360px] rounded-full bg-[#efc133] opacity-20 blur-[120px]"})}),Zx=[k0,B0,z0,j0,O0];function d2(){const[s,e]=vt.useState(0);return vt.useEffect(()=>{const t=setInterval(()=>{e(r=>(r+1)%Zx.length)},4e3);return()=>clearInterval(t)},[]),u.jsxs("section",{id:"productos","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[Zx.map((t,r)=>u.jsx("img",{src:t,alt:"",className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${s===r?"opacity-75":"opacity-0"}`},r)),u.jsx("div",{className:"absolute inset-0 bg-black/40 pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none"}),u.jsxs("div",{className:"relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"LA SOLUCIÓN"}),u.jsxs("h2",{className:"mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1]",children:["Un ecosistema diseñado",u.jsx("br",{}),u.jsx("span",{className:"text-[var(--nx-accent)]",children:"para vender más"})]}),u.jsx("p",{className:"mt-6 text-white text-base md:text-xl max-w-2xl mx-auto drop-shadow-lg",children:"Cuatro productos. Un solo lugar. Todo conectado."}),u.jsx(ci,{to:"ndx-pos",label:"Descubrir productos"})]})]})}const Jx=[{label:"NDX POS",desc:"Punto de venta",details:"Sistema de punto de venta intuitivo que conecta su tienda física con todo el ecosistema NIDUX. Cobre, facture y controle inventario en tiempo real.",features:["Múltiples métodos de pago","Facturación electrónica","Control de inventario"]},{label:"NDX Ecommerce",desc:"Tienda online",details:"Su tienda online profesional, lista para vender 24/7. Sincronizada con su inventario físico y con herramientas de marketing integradas.",features:["Tienda personalizable","Sync de inventario","Pasarelas de pago"]},{label:"NDX Connect",desc:"WhatsApp Commerce",details:"Venda por WhatsApp con catálogo automatizado, carrito de compras y seguimiento de pedidos. Todo conectado a su inventario.",features:["Catálogo automatizado","Carrito conversacional","Seguimiento en tiempo real"]},{label:"NDX Loyalty",desc:"Fidelización QPONS",details:"Programa de fidelización integrado. Recompense a sus clientes y haga que vuelvan una y otra vez con cupones y beneficios exclusivos.",features:["Puntos y recompensas","Cupones automáticos","Análisis de clientes"]}];function f2(s,e){const[t,r]=vt.useState([]),o=vt.useRef(0),l=vt.useRef(e);return l.current=e,vt.useEffect(()=>{let d;const f=typeof window<"u"?Math.min(window.innerWidth*.2,320):280,p=f*.55,m=.4,v=()=>{l.current||(o.current+=.003);const _=[];for(let g=0;g<s;g++){const M=o.current+g/s*Math.PI*2,w=Math.cos(M)*f,C=Math.sin(M)*p,y=Math.sin(M),S=C*Math.cos(m)+y*p*Math.sin(m)*.4,N=y<0,L=(y+1)/2,D=N?.75+L*.15:.9+L*.15,F=N?.5+L*.2:.8+L*.2;_.push({x:w,y:S,z:y,scale:D,opacity:F,behind:N})}r(_),d=requestAnimationFrame(v)};return v(),()=>cancelAnimationFrame(d)},[s]),t}function h2({product:s,pos:e,index:t,onHover:r,isHovered:o}){const l=vt.useRef(null),[d,f]=vt.useState(null);return vt.useEffect(()=>{if(o&&l.current){const p=l.current.getBoundingClientRect(),m=p.left+p.width/2,g=p.top<260+20,M=Math.max(170,Math.min(m,window.innerWidth-170)),w=g?p.bottom+12:p.top-12;f({top:w,left:M,placeBelow:g})}},[o,e]),u.jsxs(u.Fragment,{children:[u.jsx("div",{ref:l,className:"absolute pointer-events-auto",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) translate(${e.x}px, ${e.y}px) scale(${o?1.2:e.scale})`,zIndex:o?100:e.behind?1:20,opacity:o?1:e.opacity,transition:"transform 0.3s ease-out, opacity 0.3s ease-out"},onMouseEnter:()=>r(t),onMouseLeave:()=>r(null),children:u.jsxs("div",{className:`w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full backdrop-blur-2xl border-2 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${o?"bg-[#efc133]/25 border-[#efc133] shadow-[0_0_60px_rgba(239,193,51,0.35),0_0_120px_rgba(239,193,51,0.1)]":"bg-[#0B1120]/70 border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:border-[#efc133]/40"}`,children:[u.jsx("p",{className:`text-xs md:text-sm lg:text-base font-bold leading-tight transition-colors duration-300 ${o?"text-[#efc133]":"text-white"}`,children:s.label.replace("NDX ","")}),u.jsx("span",{className:`text-[9px] md:text-[11px] mt-1 transition-colors duration-300 ${o?"text-white/80":"text-white/40"}`,children:s.desc})]})}),o&&d&&u.jsx("div",{className:"fixed z-[100] w-80 pointer-events-none animate-popup-in",style:{top:d.top,left:d.left,transform:d.placeBelow?"translate(-50%, 0)":"translate(-50%, -100%)"},children:u.jsxs("div",{className:"relative backdrop-blur-2xl bg-[#0B1120]/95 border border-[#efc133]/25 rounded-2xl p-5 shadow-[0_24px_64px_rgba(0,0,0,0.7),0_0_40px_rgba(239,193,51,0.1)]",children:[u.jsx("div",{className:`absolute left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#0B1120]/95 border-[#efc133]/25 ${d.placeBelow?"-top-2 border-l border-t":"-bottom-2 border-r border-b"}`}),u.jsx("h4",{className:"text-[#efc133] font-bold text-base mb-2",children:s.label}),u.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-4",children:s.details}),u.jsx("ul",{className:"space-y-2",children:s.features.map((p,m)=>u.jsxs("li",{className:"flex items-center gap-2.5 text-sm text-white/80",children:[u.jsxs("svg",{className:"w-4 h-4 shrink-0 text-[#efc133]",viewBox:"0 0 20 20",fill:"none",children:[u.jsx("circle",{cx:"10",cy:"10",r:"10",fill:"currentColor"}),u.jsx("path",{d:"M6 10.5l2.5 2.5L14 8",stroke:"#0B1120",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),p]},m))})]})})]})}function p2(){const[s,e]=vt.useState(null),t=f2(Jx.length,s!==null);return u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"inicio",className:"relative h-screen overflow-hidden bg-[#0a0f1d] snap-start shrink-0",children:[u.jsx("div",{className:"absolute inset-0 z-0",children:u.jsx(Dw,{})}),u.jsx("div",{className:"absolute inset-0 z-[1] pointer-events-none",style:{background:"radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)"}}),u.jsx("div",{className:"absolute top-12 md:top-16 left-0 right-0 z-[1] pointer-events-none text-center px-4",children:u.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]",children:["Comercio ",u.jsx("span",{className:"text-[#efc133]",children:"unificado"})]})}),u.jsx("div",{className:"absolute inset-0 z-[2] flex items-center justify-center pointer-events-none -translate-y-[8vh]",children:u.jsxs("div",{className:"relative w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] flex items-center justify-center",children:[u.jsx("div",{className:"absolute w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] shadow-[0_0_80px_rgba(239,193,51,0.06),0_0_120px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(239,193,51,0.02)]",style:{zIndex:10}}),u.jsx("div",{className:"absolute w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border border-[#efc133]/[0.06]",style:{zIndex:10}}),u.jsx("img",{src:Fd,alt:"NIDUX ONE",className:"relative w-40 md:w-56 lg:w-64 pointer-events-none",style:{zIndex:50,filter:"drop-shadow(0 0 50px rgba(239,193,51,0.12)) drop-shadow(0 2px 10px rgba(0,0,0,0.6))"}}),t.length>0&&Jx.map((r,o)=>u.jsx(h2,{product:r,pos:t[o],index:o,onHover:e,isHovered:s===o},o))]})}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-[3] pointer-events-none pb-8",children:u.jsxs("div",{className:"text-center px-4",children:[u.jsx("p",{className:"text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-1 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]",children:"Tienda. Online. WhatsApp. Lealtad."}),u.jsx("p",{className:"text-[#efc133] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]",children:"Un solo ecosistema. Cero complicaciones."}),u.jsxs("button",{onClick:()=>{var r;return(r=document.getElementById("hero-tagline"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},className:"pointer-events-auto group flex flex-col items-center gap-4 mx-auto cursor-pointer","aria-label":"Scroll down",children:[u.jsx("span",{className:"text-sm md:text-base tracking-[0.15em] uppercase text-white/60 group-hover:text-[#efc133] transition-colors font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",children:"Descubrir"}),u.jsx("div",{className:"w-12 h-20 rounded-full border-2 border-white/30 group-hover:border-[#efc133] flex items-start justify-center pt-3 transition-all duration-300 shadow-[0_0_30px_rgba(239,193,51,0.1)] group-hover:shadow-[0_0_40px_rgba(239,193,51,0.25)]",children:u.jsx("div",{className:"w-2 h-4 rounded-full bg-[#efc133] animate-scroll-dot shadow-[0_0_10px_rgba(239,193,51,0.5)]"})})]})]})})]}),u.jsxs("section",{id:"hero-tagline",className:"relative h-screen flex items-center justify-center overflow-hidden snap-start shrink-0",children:[u.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover",children:u.jsx("source",{src:Lw,type:"video/mp4"})}),u.jsx("div",{className:"absolute inset-0 bg-black/65"}),u.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(239,193,51,0.05) 0%, transparent 60%)"}}),u.jsxs("div",{"data-reveal":"scale",className:"relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center",children:[u.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight drop-shadow-2xl",children:["Venda más.",u.jsx("br",{}),u.jsx("span",{className:"text-[#efc133]",children:"En todos los canales."}),u.jsx("br",{}),u.jsx("span",{className:"text-white/80",children:"Desde un solo lugar."})]}),u.jsx("p",{className:"mt-8 text-base md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed drop-shadow-lg",children:"Controle su tienda física, su tienda online y sus ventas por WhatsApp con una sola plataforma diseñada para hacer crecer su negocio."}),u.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row gap-4 justify-center",children:[u.jsxs("a",{href:"#agendar",className:"inline-flex items-center justify-center gap-3 bg-[#efc133] text-black font-bold text-sm px-8 py-4 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(239,193,51,0.2)]",children:["Agendar Demo",u.jsx(jn,{className:"w-4 h-4 text-black"})]}),u.jsx("a",{href:"#contacto",className:"inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-medium text-sm px-8 py-4 rounded-full hover:bg-white/10 hover:text-white transition backdrop-blur-sm",children:"Conozca más"})]}),u.jsxs("p",{className:"mt-6 text-xs text-white/30 flex items-center gap-1.5 justify-center",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#efc133]"}),"+2,000 comercios activos en Costa Rica"]}),u.jsx(ci,{to:"about",label:"Seguir"})]})]}),u.jsx("style",{children:`
        @keyframes scroll-dot {
          0%, 100% { opacity: 0; transform: translateY(0); }
          40% { opacity: 1; }
          80% { opacity: 0; transform: translateY(12px); }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }
        @keyframes popup-in {
          from { opacity: 0; transform: translate(-50%, -100%) translateY(8px) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -100%) translateY(0) scale(1); }
        }
        .animate-popup-in {
          animation: popup-in 0.25s ease-out forwards;
        }
      `})]})}function m2(){vt.useEffect(()=>{const s=document.querySelectorAll("[data-reveal], [data-fade]"),e=new IntersectionObserver(d=>{d.forEach(f=>{f.isIntersecting&&(f.target.classList.add("revealed"),e.unobserve(f.target))})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});s.forEach(d=>e.observe(d));const t=document.querySelectorAll("[data-parallax]");function r(){const d=window.scrollY;t.forEach(f=>{const p=parseFloat(f.dataset.parallax||"0.1"),v=(f.getBoundingClientRect().top+d-window.innerHeight/2)*p;f.style.transform=`translateY(${v}px)`})}const o=document.querySelectorAll("[data-counter]"),l=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const p=f.target,m=parseInt(p.dataset.counter||"0"),v=p.dataset.counterSuffix||"";let _=0;const M=m/(2e3/16),w=()=>{_=Math.min(_+M,m),p.textContent=Math.floor(_).toLocaleString()+v,_<m&&requestAnimationFrame(w)};w(),l.unobserve(p)}})},{threshold:.5});return o.forEach(d=>l.observe(d)),window.addEventListener("scroll",r,{passive:!0}),r(),()=>{e.disconnect(),l.disconnect(),window.removeEventListener("scroll",r)}},[])}function x2(){const[s,e]=vt.useState(!1);return vt.useEffect(()=>{const t=()=>{const o=document.querySelector("[data-snap-container]"),l=o?o.scrollTop:window.scrollY;e(l>window.innerHeight*.8)};window.addEventListener("scroll",t,{passive:!0});const r=document.querySelector("[data-snap-container]");return r==null||r.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),r==null||r.removeEventListener("scroll",t)}},[]),s}function g2(){const[s,e]=vt.useState(!1),[t,r]=vt.useState(()=>typeof window<"u"&&localStorage.getItem("nidux-theme")||"dark"),o=x2();m2();const l=()=>{const f=t==="dark"?"light":"dark";r(f),localStorage.setItem("nidux-theme",f)},d=["Inicio","Productos","Planes","Alianzas","Contacto"];return u.jsxs("div",{"data-snap-container":!0,"data-theme":t,className:"h-screen bg-[var(--nx-bg)] text-[var(--nx-text)] font-['Poppins'] overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth",children:[u.jsxs("header",{className:`fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("nav",{className:"w-full max-w-[1320px] backdrop-blur-[12.5px] bg-[rgba(255,255,255,0.06)] border border-white/10 rounded-[100px] flex items-center justify-between px-6 py-3",children:[u.jsx("img",{src:Fd,alt:"NIDUX",className:"h-8 md:h-10 w-auto"}),u.jsx("ul",{className:"hidden lg:flex items-center gap-8 text-sm text-white/80 font-['Poppins']",children:d.map(f=>u.jsx("li",{children:u.jsx("a",{href:`#${f.toLowerCase()}`,className:"hover:text-white transition-colors",children:f})},f))}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:l,className:"w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-[#efc133]/50 transition-colors","aria-label":"Toggle theme",children:t==="dark"?u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}),u.jsxs("a",{href:"#agendar",className:"hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#efc133] to-[#a8cc0e] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition",children:["Agendar Demo",u.jsx("span",{className:"w-6 h-6 rounded-full bg-black/20 flex items-center justify-center",children:u.jsx(jn,{className:"w-3.5 h-3.5 text-black"})})]})]}),u.jsx("button",{className:"lg:hidden",onClick:()=>e(!s),"aria-label":"Toggle menu",children:s?u.jsx(c2,{}):u.jsx(l2,{})})]}),s&&u.jsxs("div",{className:"absolute top-full mt-2 inset-x-4 backdrop-blur-[20px] bg-[rgba(10,10,10,0.95)] border border-white/10 rounded-3xl p-6 flex flex-col gap-4 lg:hidden",children:[d.map(f=>u.jsx("a",{href:`#${f.toLowerCase()}`,className:"text-lg text-white/80 hover:text-white font-['Poppins']",onClick:()=>e(!1),children:f},f)),u.jsxs("a",{href:"#agendar",className:"mt-2 flex items-center justify-center gap-2 bg-[#efc133] text-black font-semibold text-sm px-5 py-3 rounded-full",onClick:()=>e(!1),children:["Agendar Demo",u.jsx(jn,{className:"w-4 h-4 text-black"})]})]})]}),u.jsx(p2,{}),u.jsx("section",{id:"about","data-reveal":!0,className:"relative py-10 md:py-14 overflow-hidden snap-start shrink-0",style:{background:"linear-gradient(135deg, #0e1525 0%, #0B1120 40%, #0e1525 100%)"},children:u.jsxs("div",{className:"relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row gap-5 lg:gap-12 mb-8 md:mb-10",children:[u.jsxs("div",{"data-fade":"left",className:"lg:w-1/2",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"Quiénes Somos"}),u.jsxs("h2",{"data-line-draw":!0,className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] pb-2",children:["Impulsando el"," ",u.jsx("span",{className:"text-[var(--nx-accent)] underline decoration-[#efc133]/30 underline-offset-4",children:"comercio digital"})," ","en la región"]})]}),u.jsx("div",{"data-fade":"right","data-delay":"2",className:"lg:w-1/2 flex items-end",children:u.jsx("p",{className:"text-[var(--nx-text-3)] text-base md:text-lg leading-relaxed",children:"Con más de 13 años de experiencia, NIDUX es la empresa líder en comercio electrónico en Costa Rica. Nacimos con una misión: que cualquier negocio, sin importar su tamaño, pueda vender en línea y crecer."})})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row gap-10 lg:gap-16",children:[u.jsxs("div",{className:"lg:w-1/2 grid grid-cols-2 gap-5",children:[u.jsxs("div",{"data-fade":!0,"data-hover-lift":!0,"data-glow":!0,className:"bg-[var(--nx-accent)] rounded-2xl p-6 md:p-8 flex flex-col justify-between row-span-2",children:[u.jsx(F0,{className:"w-10 h-10 text-black/30 mb-4"}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-black font-bold text-4xl md:text-5xl mb-1",children:"+2,000"}),u.jsx("p",{className:"text-black font-semibold text-lg mb-2",children:"comercios activos"}),u.jsx("p",{className:"text-black/50 text-sm leading-relaxed",children:"Confían en nosotros para gestionar sus ventas en tienda física, online y WhatsApp."})]}),u.jsx("a",{href:"#contacto",className:"self-end mt-4 w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform",children:u.jsx(jn,{className:"w-5 h-5 text-white"})})]}),u.jsxs("div",{"data-fade":!0,"data-delay":"1","data-hover-lift":!0,className:"rounded-2xl border border-white/[0.08] bg-[var(--nx-card,#131c2e)] p-6 flex flex-col justify-center",children:[u.jsx(Ob,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),u.jsx("p",{"data-counter":"13","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),u.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Años liderando el eCommerce"})]}),u.jsxs("div",{"data-fade":!0,"data-delay":"2","data-hover-lift":!0,className:"rounded-2xl border border-white/[0.08] bg-[var(--nx-card,#131c2e)] p-6 flex flex-col justify-center",children:[u.jsx(Eb,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),u.jsx("p",{"data-counter":"1800","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),u.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Tiendas creadas"})]}),u.jsxs("div",{"data-fade":!0,"data-delay":"3","data-hover-lift":!0,className:"rounded-2xl border border-[#efc133]/15 bg-[var(--nx-card,#131c2e)] p-6 flex flex-col justify-center",children:[u.jsx(db,{className:"w-8 h-8 text-[var(--nx-accent)] mb-3 opacity-60"}),u.jsx("p",{"data-counter":"6","data-counter-suffix":"+",className:"text-[var(--nx-accent)] text-5xl font-bold",children:"0"}),u.jsx("p",{className:"text-[var(--nx-text-4)] text-sm mt-1",children:"Países en la región"})]})]}),u.jsxs("div",{className:"lg:w-1/2 flex flex-col gap-8 lg:gap-10",children:[[{icon:u.jsx(Nb,{className:"w-5 h-5"}),title:"Nuestra Misión",desc:"Democratizar el comercio electrónico en Costa Rica y la región, brindando herramientas accesibles para que cualquier negocio pueda vender en línea con éxito."},{icon:u.jsx(D0,{className:"w-5 h-5"}),title:"Nuestra Visión",desc:"Ser la plataforma líder de comercio unificado en Latinoamérica, donde cada comercio pueda conectar todos sus canales de venta en un solo ecosistema."},{icon:u.jsx(N0,{className:"w-5 h-5"}),title:"Lo Que Nos Diferencia",desc:"No solo ofrecemos tecnología: acompañamos a cada cliente con capacitación, soporte local y mejoras continuas gratuitas. Tu éxito es nuestro éxito."}].map((f,p,m)=>u.jsxs("div",{className:"flex gap-4",children:[u.jsxs("div",{className:"flex flex-col items-center shrink-0",children:[u.jsx("div",{className:"w-11 h-11 rounded-full bg-[var(--nx-accent)] flex items-center justify-center text-black",children:f.icon}),p<m.length-1&&u.jsx("div",{className:"w-px flex-1 bg-[#efc133]/20 mt-2"})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-lg mb-1",children:f.title}),u.jsx("p",{className:"text-[var(--nx-text-3)] text-sm leading-relaxed",children:f.desc})]})]},p)),u.jsx("a",{href:"#contacto",className:"mt-2 inline-flex items-center justify-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm px-7 py-3.5 rounded-full hover:brightness-110 transition self-start",children:"Conozca más sobre nosotros"})]})]}),u.jsxs("div",{className:"mt-8 md:mt-12 rounded-2xl bg-[#efc133] py-6 md:py-8 overflow-hidden",children:[u.jsx("p",{className:"text-center text-xs text-black/50 uppercase tracking-widest mb-5 font-semibold",children:"Empresas que confían en nosotros"}),u.jsx("div",{className:"overflow-hidden",children:u.jsx("div",{className:"flex items-center gap-14 md:gap-20 animate-logo-marquee",children:[{src:Yx,name:"Mugui"},{src:qx,name:"Pequeño Mundo"},{src:Kx,name:"Sukasa"},{src:Qx,name:"Yves Rocher"},{src:Gx,name:"Avon"},{src:Wx,name:"Matra"},{src:Xx,name:"Miniso"},{src:Yx,name:"Mugui"},{src:qx,name:"Pequeño Mundo"},{src:Kx,name:"Sukasa"},{src:Qx,name:"Yves Rocher"},{src:Gx,name:"Avon"},{src:Wx,name:"Matra"},{src:Xx,name:"Miniso"}].map((f,p)=>u.jsx("img",{src:f.src,alt:f.name,className:"h-10 md:h-14 lg:h-16 w-auto object-contain shrink-0"},p))})})]}),u.jsx("style",{children:`
            @keyframes logo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-logo-marquee {
              animation: logo-marquee 20s linear infinite;
            }
          `}),u.jsx(ci,{to:"el-problema"})]})}),u.jsx("section",{id:"el-problema","data-reveal":!0,className:"relative py-10 md:py-14 snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(180deg, #0a1020 0%, #0d1228 50%, #0B1120 100%)"},children:u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[u.jsxs("div",{className:"text-center mb-8 md:mb-10",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"EL PROBLEMA"}),u.jsx("h2",{className:"mt-2 text-2xl sm:text-3xl md:text-4xl font-bold",children:"Sabemos lo que estás viviendo"})]}),u.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[320px] gap-3 md:gap-4",children:[{title:"WhatsApp manual",subtitle:"Ventas perdidas",desc:"Respondés mensajes uno por uno, perdés tiempo y dejás clientes esperando. Sin catálogo automatizado, sin seguimiento real.",img:Xb,icon:u.jsx(Ub,{className:"w-10 h-10 md:w-14 md:h-14"}),span:"lg:col-span-2 lg:row-span-2"},{title:"Inventario invisible",subtitle:"Stock descontrolado",desc:"No sabés cuánto tenés, cuánto vendiste ni qué se está agotando. Cada canal tiene su propio conteo y nada cuadra.",img:Yb,icon:u.jsx(tc,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Canales desconectados",subtitle:"Datos dispersos",desc:"Su tienda física, su ecommerce y WhatsApp no se hablan entre sí. Cada uno opera como negocio aparte.",img:qb,icon:u.jsx(U0,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Sin fidelización",subtitle:"Clientes que no vuelven",desc:"No sabés quién te compra, con qué frecuencia ni cuánto gasta. Sin datos, no hay forma de fidelizar ni crecer.",img:Kb,icon:u.jsx(jb,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"},{title:"Decisiones a ciegas",subtitle:"Cero métricas",desc:"No tiene dashboards, no sabe qué producto vende más ni cuál canal genera más ingresos. Decide por intuición.",img:Qb,icon:u.jsx(jx,{className:"w-8 h-8 md:w-10 md:h-10"}),span:"lg:col-span-1 lg:row-span-1"}].map((f,p)=>u.jsxs("div",{className:`group relative rounded-2xl border border-white/[0.08] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#efc133]/30 hover:shadow-[0_0_30px_rgba(239,193,51,0.06)] ${f.span}`,children:[u.jsx("img",{src:f.img,alt:f.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"}),u.jsxs("div",{className:"absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10",children:[u.jsx("div",{className:"text-white/20 group-hover:text-[#efc133]/40 transition-colors",children:f.icon}),u.jsxs("div",{children:[u.jsx("p",{className:"text-[10px] text-[var(--nx-accent)] uppercase tracking-wider font-semibold",children:f.subtitle}),u.jsx("h3",{className:"text-base md:text-lg font-bold mt-0.5",children:f.title}),u.jsx("p",{className:"text-xs md:text-sm text-[var(--nx-text-3)] leading-relaxed mt-2 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out",children:f.desc}),u.jsxs("div",{className:"flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:[u.jsx("span",{className:"text-[10px] text-[#efc133]/60",children:"NIDUX lo resuelve"}),u.jsx("div",{className:"w-7 h-7 rounded-full bg-[var(--nx-accent)] flex items-center justify-center",children:u.jsx(jn,{className:"w-3 h-3 text-black"})})]})]})]})]},p))}),u.jsxs("div",{className:"mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3",children:[u.jsx("p",{className:"text-sm text-[var(--nx-text-3)]",children:"Pruebe NIDUX One gratis por 14 días."}),u.jsxs("a",{href:"#agendar",className:"inline-flex items-center gap-2 bg-[var(--nx-accent)] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Quiero solucionar esto ",u.jsx(jn,{className:"w-4 h-4"})]})]}),u.jsx(ci,{to:"productos"})]})}),u.jsx(d2,{}),u.jsxs("section",{id:"ndx-pos","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[u.jsx("img",{src:k0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),u.jsx("div",{className:"absolute inset-0 bg-black/50"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10 lg:gap-16",children:[u.jsxs("div",{className:"lg:w-1/2",children:[u.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"01"}),u.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",u.jsx("span",{className:"text-[#efc133]",children:"POS"})]}),u.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md drop-shadow",children:"Punto de venta inteligente para su tienda física. Rápido, confiable y conectado con todo su ecosistema."}),u.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#efc133] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",u.jsx(jn,{className:"w-4 h-4 text-black"})]})]}),u.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Cobro con múltiples métodos de pago",desc:"Efectivo, tarjeta, SINPE Móvil, QR — todo en un solo punto.",icon:u.jsx(Qa,{className:"w-5 h-5"})},{title:"Facturación electrónica integrada",desc:"Facture al instante, cumpla con Hacienda sin esfuerzo.",icon:u.jsx(nb,{className:"w-5 h-5"})},{title:"Control de inventario en tiempo real",desc:"Sepa qué tiene, qué se vendió y cuándo reponer. Automático.",icon:u.jsx(tc,{className:"w-5 h-5"})}].map((f,p)=>u.jsxs("div",{className:"group flex gap-4 p-5 rounded-2xl bg-[#131c2e]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#efc133]/25 transition-all duration-300",children:[u.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#efc133] flex items-center justify-center text-black",children:f.icon}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#efc133] transition-colors",children:f.title}),u.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.desc})]})]},p))})]}),u.jsx(ci,{to:"ndx-ecommerce"})]})]}),u.jsxs("section",{id:"ndx-ecommerce","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[u.jsx("img",{src:B0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),u.jsx("div",{className:"absolute inset-0 bg-black/50"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",children:[u.jsxs("div",{className:"lg:w-1/2 lg:text-right",children:[u.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"02"}),u.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",u.jsx("span",{className:"text-[#efc133]",children:"Ecommerce"})]}),u.jsxs("div",{className:"inline-flex items-center gap-2 mt-2 bg-[#efc133]/10 border border-[#efc133]/20 rounded-full px-3 py-1",children:[u.jsx("span",{className:"text-[#efc133] text-sm",children:"★"}),u.jsx("span",{className:"text-[#efc133] text-xs font-semibold",children:"Más popular"})]}),u.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md lg:ml-auto drop-shadow",children:"Su tienda online profesional, lista para vender 24/7 sin complicaciones técnicas. Sincronizada con todo."}),u.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#efc133] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",u.jsx(jn,{className:"w-4 h-4 text-black"})]})]}),u.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Tienda online personalizable",desc:"Diseño profesional sin saber programar. Su marca, su estilo.",icon:u.jsx(Lf,{className:"w-5 h-5"})},{title:"Sincronización automática de inventario",desc:"Venda online y offline sin descuadres. Stock siempre al día.",icon:u.jsx(R0,{className:"w-5 h-5"})},{title:"Pasarelas de pago integradas",desc:"Acepte pagos nacionales e internacionales sin fricciones.",icon:u.jsx(Qa,{className:"w-5 h-5"})}].map((f,p)=>u.jsxs("div",{className:"group flex gap-4 p-5 rounded-2xl bg-[#131c2e]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#efc133]/25 transition-all duration-300",children:[u.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#efc133] flex items-center justify-center text-black",children:f.icon}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#efc133] transition-colors",children:f.title}),u.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.desc})]})]},p))})]}),u.jsx(ci,{to:"ndx-connect"})]})]}),u.jsxs("section",{id:"ndx-connect","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[u.jsx("img",{src:z0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),u.jsx("div",{className:"absolute inset-0 bg-black/50"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-10 lg:gap-16",children:[u.jsxs("div",{className:"lg:w-1/2",children:[u.jsx("span",{className:"text-white/10 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"03"}),u.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",u.jsx("span",{className:"text-[#efc133]",children:"Connect"})]}),u.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md drop-shadow",children:"Venda por WhatsApp con catálogo automático, carrito de compras y seguimiento integrado a su inventario."}),u.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#efc133] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",u.jsx(jn,{className:"w-4 h-4 text-black"})]})]}),u.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Catálogo automatizado en WhatsApp",desc:"Sus productos disponibles en WhatsApp, siempre actualizados.",icon:u.jsx(cc,{className:"w-5 h-5"})},{title:"Carrito de compras conversacional",desc:"El cliente elige, agrega y paga sin salir de la conversación.",icon:u.jsx(nc,{className:"w-5 h-5"})},{title:"Seguimiento de pedidos en tiempo real",desc:"Tanto usted como su cliente saben el estado de cada pedido.",icon:u.jsx(Xl,{className:"w-5 h-5"})}].map((f,p)=>u.jsxs("div",{className:"group flex gap-4 p-5 rounded-2xl bg-[#131c2e]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#efc133]/25 transition-all duration-300",children:[u.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#efc133] flex items-center justify-center text-black",children:f.icon}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#efc133] transition-colors",children:f.title}),u.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.desc})]})]},p))})]}),u.jsx(ci,{to:"ndx-loyalty"})]})]}),u.jsxs("section",{id:"ndx-loyalty","data-reveal":!0,className:"relative snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[u.jsx("img",{src:j0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-40"}),u.jsx("div",{className:"absolute inset-0 bg-black/50"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",children:[u.jsxs("div",{className:"lg:w-1/2 lg:text-right",children:[u.jsx("span",{className:"text-[#efc133]/20 text-[120px] md:text-[180px] font-bold leading-none select-none",children:"04"}),u.jsxs("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold -mt-10 md:-mt-14 drop-shadow-lg",children:["NDX ",u.jsx("span",{className:"text-[#efc133]",children:"Loyalty"})]}),u.jsx("p",{className:"text-white/40 text-sm mt-1",children:"(QPONS)"}),u.jsx("p",{className:"mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-md lg:ml-auto drop-shadow",children:"Fidelice clientes con puntos, cupones y recompensas automáticas. Haga que vuelvan una y otra vez."}),u.jsxs("a",{href:"#agendar",className:"mt-6 inline-flex items-center gap-2 bg-[#efc133] text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition",children:["Probar gratis ",u.jsx(jn,{className:"w-4 h-4 text-black"})]})]}),u.jsx("div",{className:"lg:w-1/2 space-y-4",children:[{title:"Programa de puntos y recompensas",desc:"Sus clientes acumulan puntos con cada compra. Automático.",icon:u.jsx(If,{className:"w-5 h-5"})},{title:"Cupones y promociones automáticas",desc:"Envíe ofertas personalizadas sin mover un dedo.",icon:u.jsx(sh,{className:"w-5 h-5"})},{title:"Análisis de comportamiento del cliente",desc:"Sepa quién compra, qué prefiere y cuándo vuelve.",icon:u.jsx(Df,{className:"w-5 h-5"})}].map((f,p)=>u.jsxs("div",{className:"group flex gap-4 p-5 rounded-2xl bg-[#131c2e]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#efc133]/25 transition-all duration-300",children:[u.jsx("div",{className:"shrink-0 w-10 h-10 rounded-full bg-[#efc133] flex items-center justify-center text-black",children:f.icon}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-base text-white group-hover:text-[#efc133] transition-colors",children:f.title}),u.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.desc})]})]},p))})]}),u.jsx(ci,{to:"por-que-nidux"})]})]}),u.jsx(a2,{}),u.jsx("section",{id:"testimonios","data-reveal":"scale",className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(135deg, #0a1020 0%, #0B1120 50%, #10132a 100%)"},children:u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start gap-6 mb-12",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-[var(--nx-text-5)] text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none select-none",children:"Testimonials"}),u.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold -mt-6 md:-mt-8 relative z-10",children:["Historias de éxito",u.jsx("br",{}),"de nuestros clientes"]})]}),u.jsxs("div",{className:"flex items-center gap-4 lg:mt-auto",children:[u.jsx("p",{className:"text-sm text-[var(--nx-text-4)] max-w-xs",children:"De la estrategia a la ejecución: así hemos transformado negocios."}),u.jsx("a",{href:"#contacto",className:"shrink-0 w-12 h-12 rounded-full border border-[var(--nx-accent)] flex items-center justify-center hover:bg-[var(--nx-accent)] hover:text-black transition-all group",children:u.jsx(jn,{className:"w-5 h-5 text-[var(--nx-accent)] group-hover:text-black"})})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[{quote:"NIDUX nos permitió integrar nuestra tienda física con la online en menos de una semana. Ahora vendemos el doble sin duplicar trabajo.",name:"MARÍA LÓPEZ",role:"Propietaria, Tienda de Ropa",photo:Zb,offset:"mt-0"},{quote:"Desde que activamos NDX Connect, nuestras ventas por WhatsApp crecieron un 40%. Los clientes piden y pagan sin salir de la conversación.",name:"CARLOS RODRÍGUEZ",role:"Gerente, Restaurante",photo:Jb,offset:"lg:mt-12"},{quote:"El equipo de NIDUX nos capacitó y acompañó durante todo el proceso. Nunca nos sentimos solos. Todo fue muy fácil de entender.",name:"DANIEL MORA",role:"Director, Ferretería",photo:$b,offset:"lg:mt-6"},{quote:"QPONS nos ayudó a que los clientes regresen. El programa de lealtad fue super fácil de configurar y los resultados se vieron desde el primer mes.",name:"ANA RAMÍREZ",role:"Dueña, Farmacia",photo:e2,offset:"lg:mt-16"}].map((f,p)=>u.jsx("div",{className:`${f.offset}`,children:u.jsxs("div",{className:"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl p-6 hover:border-[#efc133]/20 transition-all duration-300",children:[u.jsx("img",{src:f.photo,alt:f.name,className:"w-14 h-14 rounded-full object-cover border-2 border-[#efc133]/30 mb-4"}),u.jsx("p",{className:"text-[var(--nx-accent)] text-2xl mb-3",children:"“”"}),u.jsx("p",{className:"text-sm md:text-base text-[var(--nx-text-2)] leading-relaxed italic mb-6",children:f.quote}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"w-6 h-px bg-[var(--nx-text-4)]"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-bold text-sm text-[var(--nx-accent)]",children:f.name}),u.jsx("p",{className:"text-xs text-[var(--nx-text-4)]",children:f.role})]})]})]})},p))}),u.jsxs("div",{className:"flex justify-center gap-2 mt-10",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[var(--nx-accent)]"}),u.jsx("span",{className:"w-2 h-2 rounded-full bg-[var(--nx-border)]"})]}),u.jsx(ci,{to:"planes"})]})}),u.jsx("section",{id:"planes","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center",style:{background:"radial-gradient(ellipse at 50% 0%, rgba(239,193,51,0.04) 0%, #0B1120 50%)"},children:u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"PLANES"}),u.jsx("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold",children:"Elija el plan que mejor se adapte"})]}),u.jsx("div",{className:"flex justify-center mb-10",children:u.jsxs("div",{className:"inline-flex rounded-full border border-[#efc133]/40 p-1",children:[u.jsx("button",{className:"px-6 py-2 rounded-full bg-[var(--nx-accent)] text-black text-sm font-semibold",children:"Mensual"}),u.jsx("button",{className:"px-6 py-2 rounded-full text-[var(--nx-text-3)] text-sm font-medium hover:text-[var(--nx-text)] transition",children:"Anual"})]})}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 items-center",children:[u.jsxs("div",{className:"relative border border-white/[0.08] rounded-2xl p-7 md:p-9 flex flex-col bg-[var(--nx-card,#131c2e)] hover:border-[#efc133]/20 transition-all duration-300",children:[u.jsx("h3",{className:"text-2xl md:text-3xl font-bold",children:"Plus"}),u.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[u.jsx("span",{className:"text-5xl md:text-6xl font-bold text-[var(--nx-accent)]",children:"$29"}),u.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),u.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Para negocios que inician en digital"}),u.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center border border-[var(--nx-accent)] text-[var(--nx-accent)] font-semibold text-sm py-3.5 rounded-full hover:bg-[var(--nx-accent)] hover:text-black transition-all",children:"Elegir Plan"}),u.jsxs("div",{className:"mt-8",children:[u.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),u.jsx("ul",{className:"space-y-3",children:["POS + Ecommerce","1 sucursal","Facturación electrónica","Soporte por chat"].map((f,p)=>u.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-3)]",children:[u.jsx(Ud,{}),f]},p))})]})]}),u.jsxs("div",{className:"relative border-2 border-[#efc133]/40 rounded-2xl p-7 md:p-9 flex flex-col bg-gradient-to-b from-[#1a2a4a] via-[#131c2e] to-[#0e1525] md:-my-6 shadow-[0_0_40px_rgba(239,193,51,0.08)]",children:[u.jsx("div",{className:"absolute -top-0 -right-0 overflow-hidden w-24 h-24",children:u.jsx("div",{className:"absolute top-3 -right-6 rotate-45 bg-[var(--nx-accent)] text-black text-[10px] font-bold py-1 px-8 tracking-wider",children:"Popular"})}),u.jsx("h3",{className:"text-3xl md:text-4xl font-bold text-[var(--nx-accent)]",children:"Pro"}),u.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[u.jsx("span",{className:"text-6xl md:text-7xl font-bold text-[var(--nx-text)]",children:"$42"}),u.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),u.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Servicio completo para crecer"}),u.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center bg-[var(--nx-accent)] text-black font-bold text-sm py-4 rounded-full hover:brightness-110 transition shadow-[0_0_20px_rgba(239,193,51,0.2)]",children:"Elegir Plan"}),u.jsxs("div",{className:"mt-8",children:[u.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),u.jsx("ul",{className:"space-y-3",children:["Todo del plan Plus","POS + Ecommerce + Connect","Hasta 3 sucursales","WhatsApp Commerce","Soporte prioritario","Reportes avanzados"].map((f,p)=>u.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-2)]",children:[u.jsx(Ud,{}),f]},p))})]})]}),u.jsxs("div",{className:"relative border border-white/[0.08] rounded-2xl p-7 md:p-9 flex flex-col bg-[var(--nx-card,#131c2e)] hover:border-[#efc133]/20 transition-all duration-300",children:[u.jsx("h3",{className:"text-2xl md:text-3xl font-bold",children:"Corporativo"}),u.jsxs("div",{className:"mt-5 flex items-baseline gap-1",children:[u.jsx("span",{className:"text-5xl md:text-6xl font-bold text-[var(--nx-accent)]",children:"$59"}),u.jsx("span",{className:"text-[var(--nx-text-4)] text-base ml-1",children:"/mes"})]}),u.jsx("p",{className:"mt-3 text-sm text-[var(--nx-text-3)]",children:"Para empresas en expansión"}),u.jsx("a",{href:"#agendar",className:"mt-6 flex items-center justify-center border border-[var(--nx-accent)] text-[var(--nx-accent)] font-semibold text-sm py-3.5 rounded-full hover:bg-[var(--nx-accent)] hover:text-black transition-all",children:"Elegir Plan"}),u.jsxs("div",{className:"mt-8",children:[u.jsx("p",{className:"text-xs text-[var(--nx-text-5)] uppercase tracking-wider font-semibold mb-4",children:"Incluye"}),u.jsx("ul",{className:"space-y-3",children:["Todo del plan Pro","Loyalty (QPONS)","Sucursales ilimitadas","Integraciones avanzadas"].map((f,p)=>u.jsxs("li",{className:"flex items-center gap-3 text-sm text-[var(--nx-text-3)]",children:[u.jsx(Ud,{}),f]},p))})]})]})]}),u.jsx(ci,{to:"resultados"})]})}),u.jsxs("section",{id:"resultados","data-reveal":!0,className:"relative py-12 md:py-16 snap-start shrink-0 min-h-screen flex items-center overflow-hidden bg-[#0B1120]",children:[u.jsx("img",{src:O0,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-20"}),u.jsx("div",{className:"absolute inset-0 bg-black/60"}),u.jsxs("div",{className:"relative z-10 w-full",children:[u.jsx("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"text-center mb-12",children:[u.jsx("span",{className:"text-[#efc133] text-xs font-semibold tracking-[0.2em] uppercase",children:"RESULTADOS"}),u.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg",children:["Números que ",u.jsx("span",{className:"text-[#efc133]",children:"hablan solos"})]})]})}),u.jsx("div",{className:"flex gap-6 md:gap-8 justify-center flex-wrap max-w-[1320px] mx-auto px-4",children:[{stat:"40%",label:"más ventas",desc:"al conectar todos sus canales",icon:u.jsx(I0,{className:"w-8 h-8"})},{stat:"3x",label:"más rápido",desc:"atención automatizada",icon:u.jsx(Pb,{className:"w-8 h-8"})},{stat:"0",label:"errores",desc:"inventario sincronizado",icon:u.jsx(Sb,{className:"w-8 h-8"})},{stat:"100%",label:"visibilidad",desc:"dashboards en tiempo real",icon:u.jsx(jx,{className:"w-8 h-8"})}].map((f,p)=>u.jsxs("div",{className:"flex-1 min-w-[200px] max-w-[280px] text-center",children:[u.jsx("div",{className:"text-[#efc133]/40 flex justify-center mb-3",children:f.icon}),u.jsx("p",{className:"text-6xl md:text-7xl lg:text-8xl font-bold text-[#efc133] leading-none drop-shadow-[0_0_30px_rgba(239,193,51,0.2)]",children:f.stat}),u.jsx("p",{className:"text-lg md:text-xl font-bold mt-3 text-white drop-shadow",children:f.label}),u.jsx("p",{className:"text-sm text-white/50 mt-1",children:f.desc})]},p))}),u.jsx("div",{className:"flex items-center justify-center gap-6 mt-12",children:u.jsxs("div",{className:"flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3",children:[u.jsx("span",{className:"text-[#efc133] text-lg",children:"📞"}),u.jsx("span",{className:"text-white/60 text-sm",children:"¿Necesita ayuda?"}),u.jsx("a",{href:"tel:+50622223333",className:"text-[#efc133] font-bold text-base hover:underline",children:"+506 2222-3333"})]})}),u.jsx("div",{className:"max-w-[1320px] mx-auto px-4",children:u.jsx(ci,{to:"alianzas"})})]})]}),u.jsxs("section",{id:"alianzas","data-reveal":!0,className:"relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden snap-start shrink-0 min-h-screen bg-[#0a0f1d]",children:[u.jsx("div",{className:"absolute left-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-[#efc133]/[0.03] blur-[200px] pointer-events-none"}),u.jsx("div",{className:"absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/[0.03] blur-[180px] pointer-events-none"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center mb-20 md:mb-24",children:[u.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight",children:["Conectado con",u.jsx("br",{}),u.jsx("span",{className:"text-[#efc133]",children:"todo."})]}),u.jsx("p",{className:"mt-6 text-white/40 text-base md:text-lg max-w-lg mx-auto",children:"Más de 30 integraciones. Cero configuración."})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20",children:[u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(tc,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"Inventario en vivo"}),u.jsx("span",{className:"ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse"})]}),u.jsx("div",{className:"space-y-2",children:[{name:"Camisa Oxford M",qty:24,bar:"60%"},{name:"Jean Slim Fit 32",qty:8,bar:"25%",low:!0},{name:"Zapatillas Runner",qty:45,bar:"85%"}].map((f,p)=>u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[u.jsx("span",{className:"text-white/60",children:f.name}),u.jsxs("span",{className:f.low?"text-orange-400":"text-white/30",children:[f.qty," uds"]})]}),u.jsx("div",{className:"h-1 rounded-full bg-white/[0.06]",children:u.jsx("div",{className:`h-full rounded-full ${f.low?"bg-orange-400/60":"bg-[#efc133]/40"}`,style:{width:f.bar}})})]})},p))})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Inventario sincronizado"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"En tiempo real entre tienda física y online. Cero descuadres."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(L0,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"NDX POS"})]}),u.jsxs("div",{className:"flex items-end justify-between mb-2",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-2xl font-bold text-white",children:"₡42,500"}),u.jsx("p",{className:"text-[10px] text-white/30 mt-0.5",children:"Venta actual"})]}),u.jsx("div",{className:"text-right",children:u.jsx("span",{className:"text-xs text-emerald-400 font-medium",children:"+3 items"})})]}),u.jsxs("div",{className:"flex gap-2 mt-3",children:[u.jsx("div",{className:"flex-1 bg-[#efc133] text-black text-[10px] font-bold py-1.5 rounded-lg text-center",children:"Cobrar"}),u.jsx("div",{className:"flex-1 bg-white/[0.06] text-white/50 text-[10px] font-medium py-1.5 rounded-lg text-center",children:"Apartar"})]})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Punto de venta"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"POS conectado al ecosistema. Cada venta se registra al instante."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(nc,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"Ecommerce"}),u.jsx("span",{className:"ml-auto text-[10px] text-emerald-400",children:"Online"})]}),u.jsx("div",{className:"flex gap-2",children:["Producto A","Producto B"].map((f,p)=>u.jsxs("div",{className:"flex-1 bg-white/[0.04] rounded-lg p-2",children:[u.jsx("div",{className:"aspect-square bg-white/[0.06] rounded-md mb-2 flex items-center justify-center",children:u.jsx(nc,{className:"w-4 h-4 text-white/10"})}),u.jsx("p",{className:"text-[10px] text-white/50 truncate",children:f}),u.jsx("p",{className:"text-[10px] text-[#efc133]/70 font-medium",children:"₡12,500"})]},p))})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Ecommerce 24/7"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"Su tienda online profesional con catálogo sincronizado."})]})]}),u.jsxs("div",{className:"group lg:col-span-2 bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(cc,{className:"w-4 h-4 text-emerald-400/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"WhatsApp Commerce"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("div",{className:"flex gap-2 items-end",children:u.jsxs("div",{className:"bg-[#005c4b] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[70%]",children:[u.jsx("p",{className:"text-[11px] text-white/90",children:"Hola! Me interesa la Camisa Oxford. ¿Tienen en talla M?"}),u.jsx("p",{className:"text-[9px] text-white/30 text-right mt-0.5",children:"10:32"})]})}),u.jsx("div",{className:"flex gap-2 items-end justify-end",children:u.jsxs("div",{className:"bg-white/[0.08] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]",children:[u.jsx("p",{className:"text-[11px] text-white/80",children:"¡Sí! Tenemos 24 en stock. Le comparto el enlace de pago:"}),u.jsxs("div",{className:"mt-1.5 bg-[#efc133]/10 border border-[#efc133]/20 rounded-lg px-2 py-1.5 flex items-center gap-2",children:[u.jsx(Qa,{className:"w-3 h-3 text-[#efc133]"}),u.jsx("span",{className:"text-[10px] text-[#efc133]",children:"Pagar ₡18,500"})]}),u.jsx("p",{className:"text-[9px] text-white/30 text-right mt-0.5",children:"10:32 ✓✓"})]})})]})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"WhatsApp Commerce"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"Ventas conversacionales automatizadas. Sus clientes compran sin salir del chat."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(If,{className:"w-4 h-4 text-pink-400/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"QPONS.VIP"})]}),u.jsxs("div",{className:"text-center py-1",children:[u.jsx("p",{className:"text-3xl font-bold text-[#efc133]",children:"1,250"}),u.jsx("p",{className:"text-[10px] text-white/30 mt-0.5",children:"puntos acumulados"}),u.jsx("div",{className:"mt-2 flex gap-1.5 justify-center",children:["☕ Café gratis","🎁 15% OFF"].map((f,p)=>u.jsx("span",{className:"text-[9px] bg-white/[0.06] px-2 py-1 rounded-full text-white/50",children:f},p))})]})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Fidelización"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"Puntos, cupones y recompensas que hacen que sus clientes vuelvan."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(Qa,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"Pasarelas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:["BAC","BCR","PayPal","Tilopay","LAFISE","+5"].map((f,p)=>u.jsx("div",{className:`flex items-center justify-center py-2 rounded-lg text-[11px] font-medium ${p===5?"bg-[#efc133]/10 text-[#efc133]":"bg-white/[0.04] text-white/40"}`,children:f},p))})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Pagos integrados"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"10+ pasarelas. BAC, BCR, PayPal, Tilopay y más."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(Xl,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"Envíos"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-white/[0.03] rounded-lg p-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full bg-emerald-400/10 flex items-center justify-center",children:u.jsx("span",{className:"text-emerald-400 text-xs",children:"✓"})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"text-[11px] text-white/60",children:"Pedido #1847"}),u.jsx("p",{className:"text-[9px] text-emerald-400",children:"Entregado"})]})]}),u.jsxs("div",{className:"flex items-center gap-3 bg-white/[0.03] rounded-lg p-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full bg-blue-400/10 flex items-center justify-center",children:u.jsx(Xl,{className:"w-3 h-3 text-blue-400"})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"text-[11px] text-white/60",children:"Pedido #1848"}),u.jsx("p",{className:"text-[9px] text-blue-400",children:"En camino"})]})]})]})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Logística"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"Envíos automatizados con Correos de CR, Moovin y más."})]})]}),u.jsxs("div",{className:"group bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#efc133]/20 transition-all duration-300 cursor-default",children:[u.jsx("div",{className:"p-4 pb-0",children:u.jsxs("div",{className:"bg-[#0a0f1d] rounded-xl p-4 border border-white/[0.04]",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(Df,{className:"w-4 h-4 text-[#efc133]/60"}),u.jsx("span",{className:"text-[10px] text-white/40 font-medium uppercase tracking-wider",children:"Dashboard"})]}),u.jsx("div",{className:"flex items-end gap-1 h-16 px-1",children:[35,52,40,68,45,72,58,80,65,90,75,85].map((f,p)=>u.jsx("div",{className:"flex-1 rounded-sm bg-[#efc133]/30 group-hover:bg-[#efc133]/50 transition-colors",style:{height:`${f}%`}},p))}),u.jsxs("div",{className:"flex justify-between mt-2",children:[u.jsx("span",{className:"text-[9px] text-white/20",children:"Ene"}),u.jsx("span",{className:"text-[9px] text-white/20",children:"Dic"})]})]})}),u.jsxs("div",{className:"p-5 pt-4",children:[u.jsx("h4",{className:"text-base font-semibold text-white",children:"Analytics en tiempo real"}),u.jsx("p",{className:"text-sm text-white/40 mt-1 leading-relaxed",children:"Vea qué vende, qué no, y por qué. Dashboards en vivo."})]})]})]}),u.jsx("div",{className:"text-center mb-8",children:u.jsx("p",{className:"text-white/20 text-xs tracking-[0.3em] uppercase font-semibold",children:"Integraciones"})}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{label:"Pagos",icon:u.jsx(Qa,{className:"w-5 h-5"}),partners:["BCR","BN","BAC","PayPal","Tilopay","Zunify","Placetopay","Evertec","LAFISE","GreenPay"]},{label:"Logística",icon:u.jsx(Xl,{className:"w-5 h-5"}),partners:["Correos de CR","Moovin","Growlat"]},{label:"Marketing",icon:u.jsx(Lf,{className:"w-5 h-5"}),partners:["Meta","WhatsApp","Instagram","Mailchimp","Neonet","PixelPay","Mastercard"]}].map((f,p)=>u.jsxs("div",{className:"bg-[var(--nx-card,#131c2e)] border border-white/[0.08] rounded-2xl p-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx("span",{className:"text-[#efc133]",children:f.icon}),u.jsx("h3",{className:"text-sm font-semibold text-white/60 uppercase tracking-wider",children:f.label})]}),u.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-2",children:f.partners.map(m=>u.jsx("span",{className:"text-sm text-white/40 hover:text-[#efc133] transition-colors cursor-default",children:m},m))})]},p))}),u.jsxs("div",{className:"mt-16 text-center",children:[u.jsx("p",{className:"text-white/20 text-sm mb-4",children:"¿No ve su integración? Probablemente ya la tenemos."}),u.jsx("a",{href:"#contacto",className:"inline-flex items-center gap-2 border border-white/10 text-white/60 text-sm px-6 py-3 rounded-full hover:border-[#efc133]/30 hover:text-white transition-all",children:"Consultar integraciones"})]}),u.jsx(ci,{to:"contacto"})]})]}),u.jsxs("section",{"data-reveal":"up",className:"relative py-12 bg-[var(--nx-bg)] overflow-hidden border-y border-[var(--nx-border-subtle)]",children:[u.jsx("div",{className:"flex items-center gap-8 animate-marquee whitespace-nowrap",children:[...Array(3)].map((f,p)=>u.jsxs("div",{className:"flex items-center gap-8 shrink-0",children:[u.jsx("span",{className:"text-2xl md:text-4xl font-bold font-['Poppins'] text-[var(--nx-text-5)]",children:"Más de 2,000 comercios ya confían en NIDUX"}),u.jsx("img",{src:Lm,alt:"",className:"w-6 h-6 opacity-40"}),u.jsx("span",{className:"text-lg md:text-2xl text-[var(--nx-text-5)] font-['Poppins']",children:"BCR · Mastercard · Correos de CR · Meta · AWS · Google"}),u.jsx("img",{src:Lm,alt:"",className:"w-6 h-6 opacity-40"})]},p))}),u.jsx("style",{children:`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `})]}),u.jsx("section",{id:"contacto","data-reveal":"scale",className:"relative py-16 md:py-20 snap-start shrink-0 min-h-screen flex items-center overflow-hidden",style:{background:"radial-gradient(ellipse at 50% 50%, rgba(239,193,51,0.04) 0%, #0B1120 60%)"},children:u.jsxs("div",{className:"max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[u.jsxs("div",{className:"text-center mb-10",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-bold tracking-[0.2em] uppercase",children:"Agendar Demo"}),u.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",children:["Empiece a vender más. ",u.jsx("span",{className:"text-[var(--nx-accent)]",children:"Hoy."})]}),u.jsx("p",{className:"mt-3 text-[var(--nx-text-4)] text-base max-w-md mx-auto",children:"14 días gratis. Sin tarjeta. Sin compromiso."})]}),u.jsx("div",{id:"agendar",className:"bg-[var(--nx-surface)] border border-[var(--nx-border)] rounded-3xl p-8 md:p-10 backdrop-blur-sm",children:u.jsxs("form",{className:"flex flex-col gap-5",onSubmit:f=>f.preventDefault(),children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[u.jsx(Hb,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Nombre completo ",u.jsx("span",{className:"text-[var(--nx-accent)]",children:"*"})]}),u.jsx("input",{type:"text",required:!0,className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#efc133]/50 focus:outline-none transition",placeholder:"Su nombre"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[u.jsx(cb,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Correo electrónico ",u.jsx("span",{className:"text-[var(--nx-accent)]",children:"*"})]}),u.jsx("input",{type:"email",required:!0,className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#efc133]/50 focus:outline-none transition",placeholder:"correo@ejemplo.com"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[u.jsx(mb,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Teléfono"]}),u.jsx("input",{type:"tel",className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#efc133]/50 focus:outline-none transition",placeholder:"+506 8888-8888"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"flex items-center gap-2 text-sm text-[var(--nx-text-3)] mb-2",children:[u.jsx(Gw,{className:"w-4 h-4 text-[var(--nx-accent)]"}),"Sucursales"]}),u.jsx("input",{type:"text",className:"w-full bg-transparent border border-[var(--nx-border)] rounded-xl px-4 py-3.5 text-[var(--nx-text)] placeholder:text-[var(--nx-text-5)] focus:border-[#efc133]/50 focus:outline-none transition",placeholder:"Ej: 2 en San José"})]})]}),u.jsxs("button",{type:"submit",className:"mt-3 flex items-center justify-center gap-3 bg-[var(--nx-accent)] text-black font-bold text-base py-4 rounded-full hover:brightness-110 transition w-full shadow-[0_0_30px_rgba(239,193,51,0.15)]",children:[u.jsx(_b,{className:"w-5 h-5"}),"AGENDAR MI DEMO GRATIS"]}),u.jsx("p",{className:"text-center text-[var(--nx-text-5)] text-xs mt-1",children:"Al enviar acepta nuestros términos de servicio"})]})})]})}),u.jsxs("section",{"data-reveal":"scale",className:"relative py-20 md:py-28 snap-start shrink-0 min-h-[70vh] flex items-center overflow-hidden",style:{background:"linear-gradient(180deg, #0B1120 0%, #0d1525 50%, #0B1120 100%)"},children:[u.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]",children:u.jsx("svg",{width:"300",height:"300",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"0.5",children:u.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})}),u.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",children:[u.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight italic",children:[u.jsx("span",{className:"text-[var(--nx-accent)]",children:"**"}),u.jsx("span",{className:"text-[var(--nx-accent)]",children:"¿Listo para vender"}),u.jsx("br",{}),u.jsx("span",{className:"text-[var(--nx-text)]",children:"en todos los canales?"})," ",u.jsx("span",{className:"underline decoration-[var(--nx-accent)] underline-offset-4 text-[var(--nx-text)] italic",children:"Empiece hoy"})]}),u.jsxs("p",{className:"mt-8 text-base md:text-lg text-[var(--nx-text-3)] max-w-2xl mx-auto",children:[u.jsx("strong",{className:"text-[var(--nx-text-2)]",children:"Haga crecer su negocio"})," con la plataforma de comercio unificado líder en Costa Rica. Sin complicaciones. Sin riesgo. Con resultados."]}),u.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row gap-4 justify-center",children:[u.jsx("a",{href:"#agendar",className:"inline-flex items-center justify-center gap-3 bg-[var(--nx-accent)] text-black font-bold text-base px-10 py-4 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(239,193,51,0.2)]",children:"Empezar gratis"}),u.jsx("a",{href:"#contacto",className:"inline-flex items-center justify-center gap-2 border border-[var(--nx-border)] text-[var(--nx-text-2)] font-medium text-base px-10 py-4 rounded-full hover:bg-[var(--nx-surface)] hover:text-[var(--nx-text)] transition",children:"Agendar consulta gratuita"})]})]})]}),u.jsxs("section",{id:"beneficios","data-reveal":!0,className:"relative py-12 md:py-16 overflow-hidden snap-start shrink-0 min-h-screen flex items-center",style:{background:"linear-gradient(180deg, #0a1020 0%, #0B1120 100%)"},children:[u.jsx(u2,{className:"absolute -left-40 top-1/2 -translate-y-1/2"}),u.jsxs("div",{className:"w-full relative z-10",children:[u.jsxs("div",{className:"text-center mb-10 md:mb-14 px-4",children:[u.jsx("span",{className:"text-[var(--nx-accent)] text-xs font-semibold tracking-[0.2em] uppercase",children:"PARA TODO TIPO DE NEGOCIO"}),u.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",children:["NIDUX se adapta a ",u.jsx("span",{className:"text-[var(--nx-accent)]",children:"su industria"})]})]}),u.jsx("div",{className:"overflow-hidden",children:u.jsx("div",{className:"flex gap-5 animate-industry-carousel",children:[{icon:"👗",name:"Moda & Ropa",desc:"Gestione tallas, colores y temporadas. Venda en tienda y online sin descuadres.",glow:"from-pink-500/20"},{icon:"🍽️",name:"Restaurantes",desc:"Menú digital, pedidos por WhatsApp y control de inventario de ingredientes.",glow:"from-orange-500/20"},{icon:"🔧",name:"Ferreterías",desc:"Miles de SKUs organizados. Búsqueda rápida y facturación al instante.",glow:"from-yellow-500/20"},{icon:"💊",name:"Farmacias",desc:"Control de lotes, vencimientos y recetas. Inventario farmacéutico preciso.",glow:"from-emerald-500/20"},{icon:"🛒",name:"Supermercados",desc:"Alto volumen, múltiples cajas, pesaje integrado. Escale sin límites.",glow:"from-blue-500/20"},{icon:"🌐",name:"Tienda Online",desc:"100% digital. Su ecommerce profesional funcionando en minutos.",glow:"from-violet-500/20"},{icon:"☕",name:"Cafeterías",desc:"Pedidos rápidos, programa de lealtad y gestión de sucursales.",glow:"from-amber-500/20"},{icon:"💄",name:"Cosméticos",desc:"Catálogo visual, ventas por redes sociales y envíos integrados.",glow:"from-rose-500/20"},{icon:"👗",name:"Moda & Ropa",desc:"Gestione tallas, colores y temporadas. Venda en tienda y online sin descuadres.",glow:"from-pink-500/20"},{icon:"🍽️",name:"Restaurantes",desc:"Menú digital, pedidos por WhatsApp y control de inventario de ingredientes.",glow:"from-orange-500/20"},{icon:"🔧",name:"Ferreterías",desc:"Miles de SKUs organizados. Búsqueda rápida y facturación al instante.",glow:"from-yellow-500/20"},{icon:"💊",name:"Farmacias",desc:"Control de lotes, vencimientos y recetas. Inventario farmacéutico preciso.",glow:"from-emerald-500/20"},{icon:"🛒",name:"Supermercados",desc:"Alto volumen, múltiples cajas, pesaje integrado. Escale sin límites.",glow:"from-blue-500/20"},{icon:"🌐",name:"Tienda Online",desc:"100% digital. Su ecommerce profesional funcionando en minutos.",glow:"from-violet-500/20"},{icon:"☕",name:"Cafeterías",desc:"Pedidos rápidos, programa de lealtad y gestión de sucursales.",glow:"from-amber-500/20"},{icon:"💄",name:"Cosméticos",desc:"Catálogo visual, ventas por redes sociales y envíos integrados.",glow:"from-rose-500/20"}].map((f,p)=>u.jsxs("div",{className:`shrink-0 w-[260px] md:w-[300px] group relative rounded-2xl border border-[var(--nx-border)] bg-gradient-to-b ${f.glow} to-[var(--nx-bg)] p-6 md:p-7 flex flex-col justify-between min-h-[320px] md:min-h-[360px] hover:border-[#efc133]/30 hover:shadow-[0_0_30px_rgba(239,193,51,0.06)] transition-all duration-500 cursor-pointer`,children:[u.jsx("div",{className:"text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform duration-500",children:f.icon}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl md:text-2xl font-bold group-hover:text-[var(--nx-accent)] transition-colors",children:f.name}),u.jsx("p",{className:"text-sm text-[var(--nx-text-4)] mt-2 leading-relaxed group-hover:text-[var(--nx-text-3)] transition-colors",children:f.desc})]}),u.jsx("div",{className:"absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--nx-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#efc133]/40 transition-all",children:u.jsx(jn,{className:"w-3.5 h-3.5 text-[var(--nx-accent)]"})})]},p))})}),u.jsx("div",{className:"mt-10 text-center",children:u.jsxs("a",{href:"#contacto",className:"text-[var(--nx-accent)] text-sm font-semibold hover:underline inline-flex items-center gap-2",children:["¿Su industria no aparece? También la cubrimos ",u.jsx(jn,{className:"w-4 h-4"})]})})]}),u.jsx("style",{children:`
          @keyframes industry-carousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-industry-carousel {
            animation: industry-carousel 35s linear infinite;
          }
          .animate-industry-carousel:hover {
            animation-play-state: paused;
          }
        `})]}),u.jsxs("footer",{"data-theme":"dark",className:"relative pt-12 md:pt-16 pb-8 bg-[#0B1120] overflow-hidden snap-start shrink-0",children:[u.jsx("img",{src:Dv,alt:"",className:"absolute top-0 right-0 w-48 opacity-10 pointer-events-none hidden lg:block"}),u.jsx("img",{src:Lv,alt:"",className:"absolute bottom-0 left-0 w-64 opacity-5 pointer-events-none hidden lg:block"}),u.jsxs("div",{className:"max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center mb-16 md:mb-20",children:[u.jsxs("h2",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Poppins']",children:[u.jsx("span",{className:"font-bold",children:"Es momento"})," ",u.jsx("span",{className:"font-light text-white/40",children:"de crecer"})]}),u.jsx("p",{className:"mt-4 text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed",children:"Ordene su negocio, conecte todos sus canales y venda más con NIDUX One."}),u.jsxs("a",{href:"#agendar",className:"mt-8 inline-flex items-center gap-3 bg-[#efc133] text-black font-bold text-base px-8 py-4 rounded-full hover:brightness-110 transition",children:["AGENDAR DEMO",u.jsx(jn,{className:"w-5 h-5 text-black"})]}),u.jsx("div",{className:"mt-8 flex justify-center gap-5",children:["facebook","instagram","twitter","linkedin"].map(f=>u.jsxs("a",{href:"#",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#efc133] hover:border-[#efc133]/30 transition","aria-label":f,children:[f==="facebook"&&u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})}),f==="instagram"&&u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5",fill:"currentColor",stroke:"none"})]}),f==="twitter"&&u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),f==="linkedin"&&u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})})]},f))})]}),u.jsxs("div",{className:"border-t border-white/10 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[u.jsxs("div",{children:[u.jsx("img",{src:Fd,alt:"NIDUX",className:"h-8 w-auto mb-4"}),u.jsx("p",{className:"text-sm text-white/40 leading-relaxed mb-4",children:"Plataforma todo-en-uno para comercios en Latinoamérica. POS, Ecommerce, WhatsApp y Loyalty integrados."}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("img",{src:Pv,alt:"Rating",className:"h-6 w-auto"}),u.jsx("img",{src:Rv,alt:"Rating",className:"h-6 w-auto"}),u.jsx("img",{src:Nv,alt:"Rating",className:"h-6 w-auto"})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Productos"}),u.jsx("ul",{className:"flex flex-col gap-2.5",children:["NDX POS","NDX Ecommerce","NDX Connect","NDX Loyalty (QPONS)","Integraciones"].map(f=>u.jsx("li",{children:u.jsx("a",{href:"#productos",className:"text-sm text-white/40 hover:text-white/70 transition",children:f})},f))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Legal"}),u.jsxs("ul",{className:"flex flex-col gap-2.5",children:[u.jsx("li",{className:"text-sm text-white/40",children:"San José, Costa Rica"}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-white/40 hover:text-white/70 transition",children:"Términos de servicio"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"text-sm text-white/40 hover:text-white/70 transition",children:"Política de privacidad"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold font-['Poppins'] text-sm mb-4 text-white/80",children:"Suscríbase al newsletter"}),u.jsxs("form",{className:"flex gap-2",onSubmit:f=>f.preventDefault(),children:[u.jsx("input",{type:"email",placeholder:"correo@ejemplo.com",className:"flex-1 min-w-0 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#efc133]/50 focus:outline-none transition"}),u.jsx("button",{type:"submit",className:"bg-[#efc133] text-black font-semibold text-sm px-4 py-2.5 rounded-xl hover:brightness-110 transition shrink-0",children:"Suscribirse"})]})]})]}),u.jsx("div",{className:"mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/30",children:"© 2026 NIDUX ONE | Todos los derechos reservados"})]})]}),u.jsx("style",{children:`
        /* ── section reveals ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(60px) scale(0.97);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        [data-reveal="up"] { transform: translateY(80px) scale(0.95); }
        [data-reveal="left"] { opacity: 0; transform: translateX(-80px); }
        [data-reveal="left"].revealed { transform: translateX(0); }
        [data-reveal="right"] { opacity: 0; transform: translateX(80px); }
        [data-reveal="right"].revealed { transform: translateX(0); }
        [data-reveal="scale"] { opacity: 0; transform: scale(0.85); }
        [data-reveal="scale"].revealed { transform: scale(1); }

        /* ── individual element fades ── */
        [data-fade] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-fade].revealed { opacity: 1; transform: translateY(0); }
        [data-fade="left"] { transform: translateX(-40px); }
        [data-fade="left"].revealed { transform: translateX(0); }
        [data-fade="right"] { transform: translateX(40px); }
        [data-fade="right"].revealed { transform: translateX(0); }
        [data-fade="scale"] { transform: scale(0.9); }
        [data-fade="scale"].revealed { transform: scale(1); }

        /* stagger delays via data-delay */
        [data-delay="1"] { transition-delay: 100ms !important; }
        [data-delay="2"] { transition-delay: 200ms !important; }
        [data-delay="3"] { transition-delay: 300ms !important; }
        [data-delay="4"] { transition-delay: 400ms !important; }
        [data-delay="5"] { transition-delay: 500ms !important; }
        [data-delay="6"] { transition-delay: 600ms !important; }

        /* ── smooth hover lifts for all cards ── */
        [data-hover-lift] {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
        }
        [data-hover-lift]:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(239,193,51,0.05);
        }

        /* ── glow pulse for accent elements ── */
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px var(--nx-accent-glow); }
          50% { box-shadow: 0 0 40px var(--nx-accent-glow); }
        }
        [data-glow] { animation: glow-pulse 3s ease-in-out infinite; }

        /* ── floating animation ── */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        [data-float] { animation: float 4s ease-in-out infinite; }
        [data-float="slow"] { animation-duration: 6s; }
        [data-float="fast"] { animation-duration: 2.5s; }

        /* ── text shimmer for headings ── */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        [data-shimmer] {
          background: linear-gradient(90deg, var(--nx-text) 40%, var(--nx-accent) 50%, var(--nx-text) 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s linear infinite;
        }

        /* ── line draw for borders ── */
        [data-line-draw] {
          position: relative;
          overflow: hidden;
        }
        [data-line-draw]::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--nx-accent);
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-line-draw].revealed::after { width: 100%; }

        /* ── smooth scroll behavior ── */
        html { scroll-behavior: smooth; }
        h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; }

        /* Light theme: see src/styles/light-theme.css for future implementation */
      `})]})}function v2(){return u.jsx("div",{className:"w-full min-h-screen bg-[#0B1120] overflow-x-hidden",children:u.jsx(g2,{})})}Cv.createRoot(document.getElementById("root")).render(u.jsx(v2,{}));
